/* === URLs / STUDY === */
const DATAPIPE_EXPERIMENTID = 'KVvthzKCSmKv';
const PROLIFIC_COMPLETION_URL =
  'https://app.prolific.com/submissions/complete?cc=C1Q3302C';

/* === FACTORS / RANDOMIZATION === */
const P_STRUCTURE_BENEFIT_ARM = 0.5;   // 50% go to structure x benefit
const P_TRIAD = 0.5;
const P_BENEFIT_HIGH = 0.5;
const P_COST_HIGH = 0.5;

/* === GAME CONSTANTS / VARIABLES (points) === */
const TOTAL_BONUS = 60;
const BENEFIT_LOW = 20;
const BENEFIT_HIGH = 40;
const COST_LOW = 10;
const COST_HIGH = 20;

/* fixed values for the non-manipulated factor */
const FIXED_COST_FOR_BENEFIT_ARM = COST_HIGH;
const FIXED_BENEFIT_FOR_COST_ARM = BENEFIT_LOW;

/* === TIMING === */
const MATCH_WAIT_MS_P1 = 20300;
const MATCH_WAIT_MS_TOTAL = 31600;
const DELAY_MS = 4000;
const ROUND1_DECISION_MS = 16600;
const MAX_DISCONNECT_MS = 120000;
const PAGE_TRANSITION_DELAY_MS = 500;
const MIN_REASON_CHARS = 40;
const PROLIFIC_REDIRECT_MS = 3000;

/* === URL PARAMS / PARTICIPANT IDS === */
function makeUUID(prefix = 'id') {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
}

const url = new URLSearchParams(window.location.search);
const prolificPIDFromURL = String(url.get('PROLIFIC_PID') || '').trim();
const studyIDFromURL = String(url.get('STUDY_ID') || '').trim();
const sessionIDFromURL = String(url.get('SESSION_ID') || '').trim();

const studyID = studyIDFromURL || 'reciprocity_game_online_v1';
const sessionID = sessionIDFromURL || `session_${makeUUID('session')}`;

const hasProlificPID = prolificPIDFromURL !== '';

const participantID = hasProlificPID
  ? prolificPIDFromURL
  : `anon_${makeUUID('anon')}`;
const runType = hasProlificPID ? 'pid' : 'test';

function sanitizeForFilename(value) {
  return (
    String(value || '')
      .replace(/[^a-zA-Z0-9._-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 120) || 'unknown'
  );
}

function fnv1a32(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i += 1) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function deterministicUniform(seed) {
  return fnv1a32(seed) / 4294967296;
}

function randomByPID(probability, salt) {
  if (!(probability >= 0 && probability <= 1)) { throw new Error("probability must be between 0 and 1"); }
  if (!hasProlificPID) { return Math.random() < probability; }
  const studyPart =
    typeof studyIDFromURL !== "undefined" && studyIDFromURL
      ? studyIDFromURL
      : "no-study-id";
  const seed = `${studyPart}::${salt}::${prolificPIDFromURL}`;
  return deterministicUniform(seed) < probability;
}

/* first assign participant to one of the two surveys */
const experimentArm = randomByPID(P_STRUCTURE_BENEFIT_ARM, 'experimentArm')
  ? 'structure_benefit'
  : 'structure_cost';

/* structure is randomized in both arms */
const structureCondition = randomByPID(P_TRIAD, 'structure') ? 3 : 2;

/* then randomize only the relevant factor */
const benefitCondition =
  experimentArm === 'structure_benefit'
    ? (randomByPID(P_BENEFIT_HIGH, 'benefit') ? BENEFIT_HIGH : BENEFIT_LOW)
    : FIXED_BENEFIT_FOR_COST_ARM;

const costCondition =
  experimentArm === 'structure_cost'
    ? (randomByPID(P_COST_HIGH, 'cost') ? COST_HIGH : COST_LOW)
    : FIXED_COST_FOR_BENEFIT_ARM;

const isTriad = structureCondition === 3;
const multiplier = benefitCondition / costCondition;
const otherPlayersCount = structureCondition - 1;

/* === RANDOM COMPREHENSION EXEMPLARS === */
function randEven(min, max) {
  const lo = Math.ceil(min / 2);
  const hi = Math.floor(max / 2);
  return (Math.floor(Math.random() * (hi - lo + 1)) + lo) * 2;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const round1CompTransfer = randEven(4, TOTAL_BONUS);
const round2CompTransfer1 = randEven(4, TOTAL_BONUS);
const round2CompTransfer2 = randEven(4, TOTAL_BONUS);

/* === GLOBAL STATE === */
let failedComp = false;
let didConsent = true;
let instructionsResolved = false;
let allowExit = false;

const studyState = {
  gender: null,
  ethnicity: null,
  age: null,
  education: null,
  workExperience: null,

  matched: null,
  matchingWaitRTMs: null,
  round1WaitRTMs: null,

  reciprocatePointsToHelper: null,
  reciprocateReason: '',
  expectedOtherReciprocatorPoints: null,

  reciprocateAmountFirstInputRTMs: null,
  reciprocateAmountRTMs: null,
  reciprocateReasonFirstInputRTMs: null,
  reciprocateReasonRTMs: null,
  expectedOtherReciprocatorFirstInputRTMs: null,
  expectedOtherReciprocatorRTMs: null,

  suspicionUnusual: '',
  completedDebrief: 0
};

const COMP_TRACKING = {
  playersRoles_numOthers: { triesNeeded: null, failed: 0 },
  playersRoles_roles: { triesNeeded: null, failed: 0 },
  payoff_bonusRounds: { triesNeeded: null, failed: 0 },
  round1_helperCost: { triesNeeded: null, failed: 0 },
  round1_reciprocatorBenefit: { triesNeeded: null, failed: 0 },
  round2_costs: { triesNeeded: null, failed: 0 },
  round2_helperBenefit: { triesNeeded: null, failed: 0 }
};

/* === jsPsych INIT === */
const jsPsych = initJsPsych({ display_element: 'jspsych-experiment' });

jsPsych.data.addProperties({
  studyID: studyID,
  sessionID,
  participantID,
  prolificPID: hasProlificPID ? prolificPIDFromURL : null,
  hasProlificPID,
  runType,
  experimentArm,
  structureCondition,
  benefitCondition,
  costCondition,
  round1CompTransfer,
  round2CompTransfer1,
  round2CompTransfer2,
  didConsent
});

/* === HELPERS === */
const $ = id => document.getElementById(id);

function pts(x) {
  const v = Number(x);
  return Number.isFinite(v) ? `${v} pts` : 'N/A';
}

function parseResp(data) {
  if (data && typeof data.responses === 'string') {
    try {
      return JSON.parse(data.responses);
    } catch {
      return {};
    }
  }
  return data && data.response && typeof data.response === 'object'
    ? data.response
    : {};
}

function callout(title, inner, extraClass = '') {
  return `
    <div class="callout ${extraClass}">
      ${title ? `<h2 class="callout-title">${title}</h2>` : ''}
      ${inner}
    </div>
  `;
}

function compOptions(name, options) {
  return shuffle(options)
    .map(
      ([label, value]) =>
        `<label><input name="${name}" type="radio" value="${value}" required> ${label}</label>`
    )
    .join('');
}

function flattenCompTracking() {
  return Object.fromEntries(
    Object.entries(COMP_TRACKING).flatMap(([key, value]) => [
      [`${key}_triesNeeded`, value.triesNeeded],
      [`${key}_failed`, value.failed]
    ])
  );
}

function updateCompTracking(response, tryNum, isFinalAttempt) {
  Object.entries(response).forEach(([name, value]) => {
    if (!COMP_TRACKING[name]) return;
    const correct = value === 'correct';
    if (correct && COMP_TRACKING[name].triesNeeded == null) {
      COMP_TRACKING[name].triesNeeded = tryNum;
    }
    if (isFinalAttempt && !correct && COMP_TRACKING[name].triesNeeded == null) {
      COMP_TRACKING[name].failed = 1;
    }
  });
}

function renderInstructionBullets(bullets, step, revealAll = false) {
  if (revealAll) {
    return `<ul>${bullets
      .map(
        b => `<li style="color:#000">${typeof b === 'function' ? b() : b}</li>`
      )
      .join('')}</ul>`;
  }

  const shown = bullets.slice(0, step + 1);
  return `
    <ul>
      ${shown
      .map(
        (b, i) => `
        <li style="color:${i < step ? '#bcbcbc' : '#000'}">
          ${typeof b === 'function' ? b() : b}
        </li>
      `
      )
      .join('')}
    </ul>
  `;
}

function textMeetsMinimum(value, minChars = MIN_REASON_CHARS) {
  return String(value || '').trim().length >= minChars;
}

function trimmedLength(value) {
  return String(value || '').trim().length;
}

function readBoundedInt(inputEl, maxValue = TOTAL_BONUS) {
  const raw = String(inputEl?.value || '').trim();
  if (raw === '') return null;
  const num = Number(raw);
  return Number.isInteger(num) && num >= 0 && num <= maxValue ? num : null;
}

function playerWord(n) {
  return n === 1 ? 'player' : 'players';
}

function formatCountdown(ms) {
  const remaining = Math.max(0, ms);
  const mm = String(Math.floor(remaining / 60000)).padStart(2, '0');
  const ss = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');
  return `${mm}:${ss}`;
}

function bindCountdown(timerId, totalMs, startTime) {
  const timerEl = $(timerId);
  if (!timerEl) return null;
  timerEl.textContent = formatCountdown(totalMs);
  return setInterval(() => {
    timerEl.textContent = formatCountdown(totalMs - (performance.now() - startTime));
  }, 250);
}

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text;
}

function clearTimers(timerIds) {
  timerIds.forEach(id => clearTimeout(id));
}

function spinnerHtml() {
  return `
    <div class="wait-spinner" aria-hidden="true">
      <svg class="wait-spinner-svg" viewBox="0 0 50 50">
        <circle class="wait-spinner-circle" cx="25" cy="25" r="15.5"></circle>
      </svg>
    </div>
  `;
}

function buildSpinnerWaitPage({ title = '', bodyHtml }) {
  return `
    <div class="page-wrapper">
      ${title ? `<h1 class="page-heading">${title}</h1>` : ''}
      <div class="page-content">
        <div class="wait-shell">
          ${bodyHtml}
        </div>
      </div>
    </div>
  `;
}

function getSaveFilename(saveIndex, saveStage) {
  const paddedIndex = String(saveIndex).padStart(2, '0');
  const stageSlug = sanitizeForFilename(saveStage);
  const baseID = hasProlificPID
    ? `pid_${sanitizeForFilename(prolificPIDFromURL)}`
    : `test_${sanitizeForFilename(sessionID)}`;

  return `${sanitizeForFilename(
    studyID
  )}__${baseID}__session_${sanitizeForFilename(
    sessionID
  )}__save${paddedIndex}_${stageSlug}.csv`;
}

const SAVE_COLUMNS = [
  'studyID',
  'sessionID',
  'participantID',
  'prolificPID',
  'hasProlificPID',
  'runType',
  'saveIndex',
  'saveStage',
  'savedAtISO',
  'experimentArm',
  'structureCondition',
  'benefitCondition',
  'costCondition',
  'isTriad',
  'multiplier',
  'otherPlayersCount',
  'round1CompTransfer',
  'round2CompTransfer1',
  'round2CompTransfer2',
  'didConsent',
  'failedComp',
  'instructionsResolved',
  'matched',
  'matchingWaitRTMs',
  'round1WaitRTMs',
  'gender',
  'ethnicity',
  'age',
  'education',
  'workExperience',
  'reciprocatePointsToHelper',
  'reciprocateReason',
  'expectedOtherReciprocatorPoints',
  'reciprocateAmountFirstInputRTMs',
  'reciprocateAmountRTMs',
  'reciprocateReasonFirstInputRTMs',
  'reciprocateReasonRTMs',
  'expectedOtherReciprocatorFirstInputRTMs',
  'expectedOtherReciprocatorRTMs',
  'suspicionUnusual',
  'completedDebrief',
  ...Object.keys(flattenCompTracking())
];

function getSaveRow(saveStage, saveIndex) {
  return {
    studyID: studyID,
    sessionID,
    participantID,
    prolificPID: hasProlificPID ? prolificPIDFromURL : null,
    hasProlificPID,
    runType,
    saveIndex,
    saveStage,
    savedAtISO: new Date().toISOString(),
    experimentArm,
    structureCondition,
    benefitCondition,
    costCondition,
    isTriad,
    multiplier,
    otherPlayersCount,
    round1CompTransfer,
    round2CompTransfer1,
    round2CompTransfer2,
    didConsent,
    failedComp,
    instructionsResolved,
    matched: studyState.matched,
    matchingWaitRTMs: studyState.matchingWaitRTMs,
    round1WaitRTMs: studyState.round1WaitRTMs,
    gender: studyState.gender,
    ethnicity: studyState.ethnicity,
    age: studyState.age,
    education: studyState.education,
    workExperience: studyState.workExperience,
    reciprocatePointsToHelper: studyState.reciprocatePointsToHelper,
    reciprocateReason: studyState.reciprocateReason,
    expectedOtherReciprocatorPoints: isTriad
      ? studyState.expectedOtherReciprocatorPoints
      : null,
    reciprocateAmountFirstInputRTMs: studyState.reciprocateAmountFirstInputRTMs,
    reciprocateAmountRTMs: studyState.reciprocateAmountRTMs,
    reciprocateReasonFirstInputRTMs: studyState.reciprocateReasonFirstInputRTMs,
    reciprocateReasonRTMs: studyState.reciprocateReasonRTMs,
    expectedOtherReciprocatorFirstInputRTMs: isTriad
      ? studyState.expectedOtherReciprocatorFirstInputRTMs
      : null,
    expectedOtherReciprocatorRTMs: isTriad
      ? studyState.expectedOtherReciprocatorRTMs
      : null,
    suspicionUnusual: studyState.suspicionUnusual,
    completedDebrief: studyState.completedDebrief,
    ...flattenCompTracking()
  };
}

function csvEscape(value) {
  if (value == null) return '';
  const str = String(value);
  if (/[",\n\r]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

function buildSaveCSV(saveStage, saveIndex) {
  const row = getSaveRow(saveStage, saveIndex);
  const header = SAVE_COLUMNS.join(',');
  const values = SAVE_COLUMNS.map(col => csvEscape(row[col])).join(',');
  return `${header}\n${values}`;
}

function checkpointSave(saveStage, saveIndex) {
  if (typeof jsPsychPipe === 'undefined') {
    return {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '',
      choices: 'NO_KEYS',
      trial_duration: 1,
      data: { label: `save_skipped_${saveStage}` }
    };
  }

  return {
    type: jsPsychPipe,
    action: 'save',
    experiment_id: DATAPIPE_EXPERIMENTID,
    filename: getSaveFilename(saveIndex, saveStage),
    data_string: () => buildSaveCSV(saveStage, saveIndex)
  };
}

function releaseExitGuard() {
  allowExit = true;
}

/* === CSS === */
(function injectCSS() {
  const style = document.createElement('style');
  style.innerHTML = `
    body{font-family:sans-serif;font-size:15px;color:#111}
    .jspsych-display-element{width:100% !important;padding-bottom:4em}
    .jspsych-content,.jspsych-content-wrapper,#jspsych-content{max-width:none !important;width:100% !important}
    #jspsych-html-button-response-btngroup,#jspsych-survey-html-form .jspsych-btn{margin:3em 0 3em;width:auto !important}
    .page-wrapper{max-width:900px;width:100%;margin:0 auto;text-align:left;box-sizing:border-box}
    .page-content{max-width:800px;width:100%;margin:0 auto;text-align:left;box-sizing:border-box}
    #jspsych-survey-html-form,#jspsych-survey-html-form form,.jspsych-survey-html-form,.jspsych-survey-html-form form{width:100% !important;box-sizing:border-box !important}
    .page-heading{text-align:center !important;margin:1.5em 0}
    .callout{max-width:800px;margin:1em auto;box-sizing:border-box;border:1px solid #ccc;border-radius:8px;padding:1em;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.04)}
    .callout-title{text-align:left;font-weight:900;margin:0 0 .55em 0}
    .callout ul,.callout li{overflow-wrap:anywhere;word-break:break-word}
    .callout-auto {width: fit-content;max-width: 100%;}
    .status-green,.status-red{font-weight:900;user-select:none}
    .status-green{color:#2e7d32}
    .status-red{color:#c62828}
    .radio-block{max-width:700px;margin:.85em auto;border:1px solid #ccc;border-radius:8px;background:#fff;padding:.85em 1.05em;box-shadow:0 1px 3px rgba(0,0,0,.04)}
    .radio-q{font-weight:900;margin:0 0 .5em 0}
    .radio-block label{display:block;margin:.25em 0}
    .demo-section{margin:1em 0}
    .demo-label{font-weight:900;display:block;margin-bottom:.35em}
    .demo-options label{display:block;margin:.25em 0}
    .demo-page{max-width:550px;margin:0 auto}
    input[type=number],select{padding:4px 6px;width:220px;max-width:100%}
    textarea{font-family:sans-serif;font-size:15px}
    .correct-text{color:#2e7d32}
    .incorrect-text{color:#c62828}
    .vis-wrap{display:flex;justify-content:center;margin:.85em 0 .5em 0}
    .practice-controls{width:100%;max-width:720px;margin:0 auto;box-sizing:border-box}
    .control-row{display:flex;justify-content:center;align-items:center;margin-bottom:.4em}
    .control-label{font-weight:900;text-align:center}
    .amount-inline{font-weight:900;display:inline-block;margin-left:.4em;padding:.12em .55em;border-radius:999px;border:1px solid #ccc;background:#fff}
    input[type=range]{width:100%;margin:.25em 0 .2em 0}
    .slider-ends{display:flex;justify-content:space-between;font-size:.85em;color:#555;margin-bottom:.5em;user-select:none}
    .practice-helper-text{width:100%;text-align:left;margin:0 0 .75em 0}
    .center-actions{text-align:center;margin-top:1.25em}
    .jspsych-form-warning{font-size:.9em}
    .char-count{margin-top:.35em;color:#555}
    .wait-shell{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-height:360px;padding:1rem 0}
    .wait-copy{max-width:700px;line-height:1.6;margin:0 auto 1.25rem auto}
    .wait-copy p{margin:.2rem 0}
    .wait-status{font-size:1.35rem;font-weight:400;margin:.75rem 0 0}
    .wait-countdown{font-size:.95rem;color:#555;margin-top:.75rem}
    .wait-spinner{width:66px;height:66px;display:flex;align-items:center;justify-content:center;margin:2em auto 1.4em auto}
    .wait-spinner-svg{width:100%;height:100%;display:block;animation:wait-spinner-rotate 1.4s linear infinite;transform-origin:center center;will-change:transform}
    .wait-spinner-circle{fill:none;stroke:#111;stroke-width:3.8;stroke-linecap:round;stroke-dasharray:80px,200px;stroke-dashoffset:0;animation:wait-spinner-dash 1.4s ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}
    @keyframes wait-spinner-rotate{100%{transform:rotate(360deg)}}
    @keyframes wait-spinner-dash{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}
    html{overflow-y:scroll;scrollbar-gutter:stable}
  `;
  document.head.appendChild(style);
})();

/* === CONSENT (unchanged language) === */
const consent = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Reciprocity Game</h1>
      <div class="page-content">
        ${callout(
    null,
    `
          <p>
            <strong>DESCRIPTION:</strong> You are invited to take part in a research study about how people give, receive, and think about help. 
            In this study, you and other participants will simultaneously play a short game. 
            You and other players will be given a monetary bonus and asked to decide how much of it (if any) to give to the other participants. 
            Together, your choices will determine how much of a bonus you and the other participants earn in the game.
          </p>
          <p>
            This study may contain deception.  By continuing to participate in this study, you consent to this deception 
            and understand that the researchers will debrief you at the end of the study about any deception used.
          </p>
          <p>
            There are no right or wrong answers—please respond as honestly and thoughtfully as possible.
          </p>
          <p>
            <strong>TIME INVOLVEMENT:</strong> Your participation will take approximately 8 minutes.
          </p>
          <p>
            <strong>ELIGIBILITY:</strong> You must be at least 18 years old to be eligible to participate.
          </p>
          <p>
            <strong>RISKS AND BENEFITS:</strong> The risks associated with this study are minimal. Study data will be stored securely, 
            in compliance with Stanford University standards, minimizing the risk of confidentiality breach. 
            You will not encounter any more risk than what you go through in daily life. There are no expected direct benefits to you in this study. 
            Some participants gain a better insight into their own thoughts, feelings, and behaviors by answering the questions. 
            We cannot and do not guarantee or promise that you will receive any benefits from this study.
          </p>
          <p>
            <strong>PAYMENTS:</strong> You will be compensated the amount advertised by the survey platform, around $12/hour. 
            Additionally, depending on the outcome of the decision-making game, you may receive a small one-time bonus payment.
          </p>
          <p>
            <strong>PARTICIPANT’S RIGHTS:</strong> If you have read this form and have decided to participate in this project, 
            please understand your participation is voluntary and you have the right to withdraw your consent or discontinue 
            participation at any time without penalty or loss of benefits to which you are otherwise entitled. 
            The alternative is not to participate. You have the right to refuse to answer particular questions. 
            The results of this research study may be presented at scientific or professional meetings or published in scientific journals. 
            Your individual privacy will be maintained in all published and written data resulting from the study.
          </p>
          <p>
            In accordance with scientific norms, the data from this study may be used or shared with other researchers for future research 
            (after removing personally identifying information) without additional consent from you.
          </p>
          <p>
            <strong>CONTACT INFORMATION:</strong>
          </p>
          <p>
            <strong><em>Questions:</em></strong> If you have any questions, concerns or complaints about this research, its procedures, 
            risks and benefits, contact the Protocol Director, Jonah Rösemeier (<a href="mailto:jrosem@stanford.edu">jrosem@stanford.edu</a>).
          </p>
          <p>
            <strong><em>Independent Contact:</em></strong> If you are not satisfied with how this study is being conducted, 
            or if you have any concerns, complaints, or general questions about the research or your rights as a participant, 
            please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at 
            (650)-723-2480 or toll free at 1-866-680-2906, or email at <a href="mailto:irbnonmed@stanford.edu">irbnonmed@stanford.edu</a>. 
            You can also write to the Stanford IRB, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.
          </p>`
  )}
      </div>
    </div>
  `,
  choices: [
    'I understand and <strong>consent</strong>',
    'I understand and <strong>do not consent</strong>'
  ],
  data: { label: 'consent' },
  on_finish: data => {
    didConsent = data.response === 0;

    if (!didConsent) {
      releaseExitGuard();
    }
  }
};

const nonConsentFlow = {
  timeline: [
    checkpointSave('checkpoint1_consentNo', 1),
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <div class="page-wrapper">
          <h1 class="page-heading">You Did Not Consent</h1>
          <div class="page-content" style="text-align:center;">
            <p>Please close this survey and return your submission on Prolific by selecting “Stop without completing”.</p>
          </div>
        </div>
      `,
      choices: 'NO_KEYS',
      trial_duration: null
    }
  ],
  conditional_function: () => !didConsent
};

/* === DEMOGRAPHICS immediately after consent === */
const demographics = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <div class="page-wrapper">
      <h1 class="page-heading">Demographics</h1>
      <div class="page-content demo-page"><p>Please first answer a few demographic questions.</p></div>
    </div>
  `,
  html: `
    <div class="page-content demo-page">
      ${callout(
    null,
    `
        <div class="demo-section">
          <span class="demo-label">How do you describe yourself? <span style="color:#c00">*</span></span>
          <div class="demo-options">
            <label><input type="radio" name="gender" value="Male" required> Male</label>
            <label><input type="radio" name="gender" value="Female"> Female</label>
            <label><input type="radio" name="gender" value="Non-binary / third gender"> Non-binary / third gender</label>
            <label><input type="radio" name="gender" value="Other"> Other</label>
          </div>
        </div>
      `
  )}

      ${callout(
    null,
    `
        <div class="demo-section">
          <span class="demo-label">Which race do you consider yourself to be? <span style="color:#c00">*</span></span>
          <div class="demo-options">
            <label><input type="radio" name="ethnicity" value="White or Caucasian" required> White or Caucasian</label>
            <label><input type="radio" name="ethnicity" value="Black or African American"> Black or African American</label>
            <label><input type="radio" name="ethnicity" value="Hispanic or Latino"> Hispanic or Latino</label>
            <label><input type="radio" name="ethnicity" value="Asian"> Asian</label>
            <label><input type="radio" name="ethnicity" value="American Indian/Native American or Alaska Native"> American Indian/Native American or Alaska Native</label>
            <label><input type="radio" name="ethnicity" value="Native Hawaiian or Pacific Islander"> Native Hawaiian or Pacific Islander</label>
            <label><input type="radio" name="ethnicity" value="Mixed race"> Mixed race</label>
            <label><input type="radio" name="ethnicity" value="Other"> Other</label>
          </div>
        </div>
      `
  )}

      ${callout(
    null,
    `
        <div class="demo-section">
          <label class="demo-label" for="age">What is your age? <span style="color:#c00">*</span></label>
          <input type="number" id="age" name="age" min="18" max="120" required>
        </div>
      `
  )}

      ${callout(
    null,
    `
        <div class="demo-section">
          <span class="demo-label">What is the highest level of education you have completed? <span style="color:#c00">*</span></span>
          <select name="education" required>
            <option value="" disabled selected>Select one</option>
            <option value="Some high school or less">Some high school or less</option>
            <option value="High school diploma or GED">High school diploma or GED</option>
            <option value="Some college, but no degree">Some college, but no degree</option>
            <option value="Associates or technical degree">Associates or technical degree</option>
            <option value="Bachelor’s degree">Bachelor’s degree</option>
            <option value="Graduate or professional degree (MA, MS, MBA, PhD, JD, MD, DDS etc.)">Graduate or professional degree (MA, MS, MBA, PhD, JD, MD, DDS etc.)</option>
            <option value="Other">Other</option>
          </select>
        </div>
      `
  )}

      ${callout(
    null,
    `
        <div class="demo-section">
          <label class="demo-label" for="work_experience">How many years of work experience do you have? <span style="color:#c00">*</span></label>
          <input type="number" id="work_experience" name="work_experience" min="0" max="80" required>
        </div>
      `
  )}
    </div>
  `,
  button_label: 'Submit responses',
  data: { label: 'demographics' },
  on_finish: data => {
    const response = parseResp(data);

    studyState.gender = response.gender || null;
    studyState.ethnicity = response.ethnicity || null;
    studyState.age = response.age != null ? Number(response.age) : null;
    studyState.education = response.education || null;
    studyState.workExperience =
      response.work_experience != null ? Number(response.work_experience) : null;

    data.gender = studyState.gender;
    data.ethnicity = studyState.ethnicity;
    data.age = studyState.age;
    data.education = studyState.education;
    data.work_experience = studyState.workExperience;
  }
};

/* === INSTRUCTION DEMO GRAPHICS (instruction demo only) === */
const svg = (() => {
  const defs = `
    <defs>
      <marker id="a" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L8,4 L0,8 Z" fill="#111"></path>
      </marker>
      <symbol id="av" viewBox="0 0 64 64">
        <ellipse cx="32" cy="18" rx="11" ry="12" fill="currentColor" stroke="#111" stroke-width="1.3"></ellipse>
        <path d="M14 56 Q16 39 32 36 Q48 39 50 56 Z" fill="currentColor" stroke="#111" stroke-width="1.3" stroke-linejoin="round"></path>
      </symbol>
    </defs>
  `;

  const wrap = (w, h, body) =>
    `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="max-width:100%;border:1px solid #ccc;background:#fafafa;border-radius:8px;">${defs}${body}</svg>`;

  const person = (x, y, label, color) => `
    <g transform="translate(${x - 28},${y - 32})" style="color:${color}">
      <use href="#av" width="56" height="56"></use>
    </g>
    <text x="${x}" y="${y + 36}" text-anchor="middle" font-size="12" font-weight="900" fill="#111">${label}</text>
  `;

  const line = (x1, y1, x2, y2, arrow = false) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#111" stroke-width="2.3"${arrow ? ' marker-end="url(#a)"' : ''
    }></line>`;

  const pill = (cx, cy, text) => {
    const w = Math.max(44, Math.min(320, Math.ceil(text.length * 6.1 + 20)));
    return `
      <g>
        <rect x="${cx - w / 2}" y="${cy - 12}" width="${w}" height="24" rx="10" fill="#fff" stroke="#111"></rect>
        <text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="900" fill="#111">${text}</text>
      </g>
    `;
  };

  const box = (cx, cy, text) => {
    const w = Math.max(170, Math.min(340, Math.ceil(text.length * 6.15 + 28)));
    return `
      <g>
        <rect x="${cx - w / 2}" y="${cy - 13}" width="${w}" height="26" rx="10" fill="#fff" stroke="#111"></rect>
        <text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="900" fill="#111">${text}</text>
      </g>
    `;
  };

  function visR1(send) {
    const benefit = send * multiplier;
    const text = `Gives: ${pts(send)}`;

    if (!isTriad) {
      const a = { x: 130, y: 170 };
      const b = { x: 520, y: 170 };
      const c = { x: 325, y: 170 };
      const boxWidth = Math.max(
        170,
        Math.min(340, Math.ceil(text.length * 6.15 + 28))
      );
      const right = c.x + boxWidth / 2;

      return wrap(
        660,
        360,
        person(a.x, a.y, 'Helper', '#8ecae6') +
        person(b.x, b.y, 'Reciprocator', '#ffb703') +
        line(a.x + 38, a.y, b.x - 38, b.y) +
        line(right, c.y, b.x - 38, b.y, true) +
        box(c.x, c.y, text) +
        pill(a.x, a.y + 80, `Cost: ${pts(send)}`) +
        pill(b.x, b.y + 80, `Benefit: ${pts(benefit)}`)
      );
    }

    const a = { x: 120, y: 190 };
    const b = { x: 540, y: 125 };
    const c = { x: 540, y: 275 };
    const mid = { x: 330, y: 190 };
    const boxWidth = Math.max(
      170,
      Math.min(340, Math.ceil(text.length * 6.15 + 28))
    );
    const left = mid.x - boxWidth / 2;
    const right = mid.x + boxWidth / 2;

    return wrap(
      660,
      420,
      person(a.x, a.y, 'Helper', '#8ecae6') +
      person(b.x, b.y, 'Reciprocator 1', '#ffb703') +
      person(c.x, c.y, 'Reciprocator 2', '#05b832') +
      line(a.x + 38, a.y, left, mid.y) +
      line(right, mid.y, b.x - 38, b.y, true) +
      line(right, mid.y, c.x - 38, c.y, true) +
      box(mid.x, mid.y, text) +
      pill(a.x, a.y + 80, `Cost: ${pts(send)}`) +
      pill(b.x, b.y - 54, `Benefit: ${pts(benefit)}`) +
      pill(c.x, c.y + 80, `Benefit: ${pts(benefit)}`)
    );
  }

  function visR2(y, z = 0) {
    if (!isTriad) {
      const a = { x: 130, y: 170 };
      const b = { x: 520, y: 170 };
      const end = a.x + 50;
      const midX = (b.x - 38 + end) / 2;

      return wrap(
        660,
        360,
        person(a.x, a.y, 'Helper', '#8ecae6') +
        person(b.x, b.y, 'Reciprocator', '#ffb703') +
        line(b.x - 38, b.y, end, a.y, true) +
        pill(midX, b.y, `Reciprocates: ${pts(y)}`) +
        pill(b.x, b.y + 80, `Cost: ${pts(y)}`) +
        pill(a.x, a.y + 80, `Benefit: ${pts(y)}`)
      );
    }

    const a = { x: 120, y: 190 };
    const b = { x: 540, y: 125 };
    const c = { x: 540, y: 275 };
    const end = a.x + 50;
    const mid = (x1, y1, x2, y2) => ({
      x: (x1 + x2) / 2,
      y: (y1 + y2) / 2
    });
    const mY = mid(b.x - 38, b.y, end, a.y - 14);
    const mZ = mid(c.x - 38, c.y, end, a.y + 14);

    return wrap(
      660,
      420,
      person(a.x, a.y, 'Helper', '#8ecae6') +
      person(b.x, b.y, 'Reciprocator 1', '#ffb703') +
      person(c.x, c.y, 'Reciprocator 2', '#05b832') +
      line(b.x - 38, b.y, end, a.y - 14, true) +
      line(c.x - 38, c.y, end, a.y + 14, true) +
      pill(mY.x, mY.y, `Reciprocates: ${pts(y)}`) +
      pill(mZ.x, mZ.y, `Reciprocates: ${pts(z)}`) +
      pill(b.x, b.y - 54, `Cost: ${pts(y)}`) +
      pill(c.x, c.y + 80, `Cost: ${pts(z)}`) +
      pill(a.x, a.y + 80, `Benefit: ${pts(y + z)}`)
    );
  }

  return { visR1, visR2 };
})();

const practiceR1 = {
  html: () => `
    <div class="practice-helper-text">
      Try moving the slider to better understand the consequences of the Helper's giving.
    </div>
    <div class="practice-controls">
      <div class="control-row"><div class="control-label">Helper gives <span id="dR1" class="amount-inline">${pts(
    0
  )}</span></div></div>
      <input id="sR1" type="range" min="0" max="${TOTAL_BONUS}" step="1" value="0">
      <div class="slider-ends"><span>${pts(0)}</span><span>${pts(
    TOTAL_BONUS
  )}</span></div>
    </div>
    <div class="vis-wrap" id="v1"></div>
  `,
  init: () => {
    const slider = $('sR1');
    const display = $('dR1');

    const update = () => {
      const send = Number(slider?.value || 0);
      if (display) display.textContent = pts(send);
      $('v1').innerHTML = svg.visR1(send);
    };

    slider?.addEventListener('input', update);
    update();
  }
};

const practiceR2 = {
  html: () => `
    <div class="practice-helper-text">
      Try moving the slider to better understand the consequences of the ${isTriad
      ? "Reciprocators' reciprocating"
      : "Reciprocator's reciprocating"
    }.
    </div>
    <div class="practice-controls">
      <div class="control-row"><div class="control-label">${isTriad ? 'Reciprocator 1' : 'Reciprocator'
    } reciprocates <span id="dY" class="amount-inline">${pts(
      0
    )}</span></div></div>
      <input id="sY" type="range" min="0" max="${TOTAL_BONUS}" step="1" value="0">
      <div class="slider-ends"><span>0</span><span>${TOTAL_BONUS}</span></div>
      ${isTriad
      ? `
        <div class="control-row" style="margin-top:.55em;"><div class="control-label">Reciprocator 2 reciprocates <span id="dZ" class="amount-inline">${pts(
        0
      )}</span></div></div>
        <input id="sZ" type="range" min="0" max="${TOTAL_BONUS}" step="1" value="0">
        <div class="slider-ends"><span>0</span><span>${TOTAL_BONUS}</span></div>
      `
      : ''
    }
    </div>
    <div class="vis-wrap" id="v2"></div>
  `,
  init: () => {
    const sY = $('sY');
    const sZ = $('sZ');
    const dY = $('dY');
    const dZ = $('dZ');

    const update = () => {
      const y = Number(sY?.value || 0);
      const z = Number(sZ?.value || 0);
      if (dY) dY.textContent = pts(y);
      if (dZ) dZ.textContent = pts(z);
      $('v2').innerHTML = svg.visR2(y, z);
    };

    sY?.addEventListener('input', update);
    sZ?.addEventListener('input', update);
    update();
  }
};

/* === INSTRUCTIONS + COMPREHENSION === */
const failHTML = `
  <div class="page-wrapper">
    <h1 class="page-heading">Comprehension Check Not Passed</h1>
    <div class="page-content" style="text-align:center;">
      <p>
        You did not answer all questions correctly within 2 tries.
        Please close this survey and return your submission on Prolific by selecting “Stop without completing”.
      </p>
    </div>
  </div>
`;

const compFailNoClick = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: failHTML,
  choices: 'NO_KEYS',
  trial_duration: null,
  data: { label: 'comprehension_failed_final' },
  on_load: () => {
    releaseExitGuard();
  }
};

const amountNote =
  'Note that these questions use specific numbers to help you understand the game; in the actual decision, players can choose any amount allowed by the game rules.';

function instrWithComp({
  title,
  subtitle,
  bullets,
  compHTML = null,
  maxTries = 2,
  practice = null,
  practiceTitle = '',
  compNote = ''
}) {
  let tries = 0;
  let retry = false;
  let passed = false;

  const instructionPages = bullets.map((_, step) => ({
    type: jsPsychSurveyHtmlForm,
    html: () => `
      <div class="page-wrapper">
        <h1 class="page-heading">${title}</h1>
        <div class="page-content">
          ${callout(subtitle, renderInstructionBullets(bullets, step, false))}
        </div>
      </div>
    `,
    button_label: 'Continue'
  }));

  const demoPage = {
    type: jsPsychSurveyHtmlForm,
    html: () => `
      <div class="page-wrapper">
        <h1 class="page-heading">${title}</h1>
        <div class="page-content">
          ${callout(subtitle, renderInstructionBullets(bullets, bullets.length - 1, true))}
          ${practice ? callout(practiceTitle, practice.html()) : ''}
        </div>
      </div>
    `,
    button_label: 'Continue',
    on_load: () => practice?.init()
  };

  const compPage = {
    type: jsPsychSurveyHtmlForm,
    html: () => `
      <div class="page-wrapper">
        <h1 class="page-heading">${title}</h1>
        <div class="page-content">
          ${callout(subtitle, renderInstructionBullets(bullets, bullets.length - 1, true))}
          ${practice ? callout(practiceTitle, practice.html()) : ''}
          ${callout(
      'Comprehension Check',
      `
            <p>To proceed, correctly answer the below questions. <strong>You have ${maxTries - tries
      } ${maxTries - tries === 1 ? 'remaining try' : 'remaining tries'
      }</strong>.</p>
            ${compNote ? `<p>${compNote}</p>` : ''}
            ${compHTML()}
          `
    )}
        </div>
      </div>
    `,
    button_label: 'Submit responses',
    on_load: () => practice?.init(),
    on_finish: data => {
      tries += 1;
      const response = parseResp(data);
      const entries = Object.entries(response);
      passed = entries.length > 0 && entries.every(([, value]) => value === 'correct');

      updateCompTracking(response, tries, tries >= maxTries);

      entries.forEach(([key, value]) => {
        data[`${key}_result`] = value === 'correct' ? 'correct' : 'incorrect';
      });

      data.comp_try = tries;
      data.comp_pass = passed;
      retry = !passed && tries < maxTries;

      if (!passed && tries >= maxTries) {
        failedComp = true;
        instructionsResolved = true;
        jsPsych.data.addProperties({
          instructionsResolved,
          failedComp,
          ...flattenCompTracking()
        });
      }

      jsPsych.data.addProperties(flattenCompTracking());
    }
  };

  const feedback = {
    type: jsPsychHtmlButtonResponse,
    stimulus: () => `
      <div class="page-wrapper">
        <h1 class="page-heading ${passed ? 'correct-text' : 'incorrect-text'}">
          ${passed ? 'All Answers Were Correct' : 'Some Answers Were Incorrect'}
        </h1>
      </div>
    `,
    choices: () => [passed ? 'Continue' : 'Try again']
  };

  return {
    timeline: [
      { timeline: instructionPages },
      ...(practice ? [{ timeline: [demoPage] }] : []),
      ...(compHTML ? [
        compPage,
        {
          timeline: [checkpointSave('checkpoint3_instructionsFailed', 3), compFailNoClick],
          conditional_function: () => failedComp
        },
        {
          timeline: [feedback],
          conditional_function: () => !failedComp
        }
      ] : [])
    ],
    loop_function: () => retry
  };
}

const bullets_playersRoles = [
  () =>
    `You will play 2 rounds of the Reciprocity Game with ${isTriad ? '2 other players (participants)' : '1 other player (participant)'
    }.`,
  () => 'You will play together in real time.',
  () =>
    `One player is randomly assigned the "Helper" role. The ${isTriad
      ? 'two other players are "Reciprocators" 1 and 2, respectively'
      : 'other player is the "Reciprocator"'
    }.`
];

const compHTML_playersRoles = () => `
  <div class="radio-block">
    <div class="radio-q">How many other players will you play with?</div>
    ${compOptions('playersRoles_numOthers', [
  ['1', isTriad ? 'incorrect' : 'correct'],
  ['2', isTriad ? 'correct' : 'incorrect'],
  ['3', 'incorrect']
])}
  </div>
  <div class="radio-block">
    <div class="radio-q">Which role(s) could you be assigned to?</div>
    ${compOptions('playersRoles_roles', [
  ['Only Helper', 'incorrect'],
  ['Only Reciprocator', 'incorrect'],
  ['Helper or Reciprocator', 'correct']
])}
  </div>
`;

const bullets_payoff = [
  () => 'You will play for real bonus money.',
  () =>
    `Your bonus depends on your actions and the other ${isTriad ? "players'" : "player's"
    } actions and equals the total money kept and received across both rounds of the game.`,
  () => 'During the game, all money is converted into points (pts).',
  () => '1 point = 1 cent'
];

const compHTML_payoff = () => `
  <div class="radio-block">
    <div class="radio-q">Which rounds of the Reciprocity Game determine your final bonus payment?</div>
    ${compOptions('payoff_bonusRounds', [
  ['Only round 1', 'incorrect'],
  ['Only round 2', 'incorrect'],
  ['Round 1 and round 2', 'correct']
])}
  </div>
`;

const bullets_round1 = [
  () =>
    `In round 1, the Helper starts with ${pts(TOTAL_BONUS)}. ${isTriad ? 'Each' : 'The'
    } Reciprocator starts with ${pts(0)}.`,
  () =>
    `The Helper may give any number of points, from ${pts(0)} to ${pts(
      TOTAL_BONUS
    )}, to help the ${isTriad ? 'Reciprocators' : 'Reciprocator'}.`,
  () => 'Each point given costs the Helper 1 point. They keep the rest.',
  () =>
    isTriad
      ? `Each point given also creates a benefit for <strong>each</strong> Reciprocator: each Reciprocator receives ${multiplier} × the points given.`
      : `Each point given also creates a benefit for the Reciprocator: the Reciprocator receives ${multiplier} × the points given.`,
  () =>
    `At the end of the round, players will see how many points the Helper gave (cost) and how many points ${isTriad ? 'each' : 'the'
    } Reciprocator received (benefit).`
];

const compHTML_round1 = () => `
  <div class="radio-block">
    <div class="radio-q">Suppose that the Helper gives ${pts(
  round1CompTransfer
)}. What are the cost to the Helper?</div>
    ${compOptions('round1_helperCost', [
  [pts(round1CompTransfer), 'correct'],
  [pts(round1CompTransfer * 2), 'incorrect'],
  [pts(round1CompTransfer / 2), 'incorrect']
])}
  </div>
  <div class="radio-block">
    <div class="radio-q">Suppose that the Helper gives ${pts(
  round1CompTransfer
)}. What is the benefit to ${isTriad ? '<strong>each</strong>' : 'the'
  } Reciprocator?</div>
    ${compOptions('round1_reciprocatorBenefit', [
    [pts(round1CompTransfer * multiplier), 'correct'],
    [pts(round1CompTransfer * multiplier * 2), 'incorrect'],
    [pts(round1CompTransfer * multiplier / 2), 'incorrect']
  ])}
  </div>
`;

const bullets_round2 = [
  () =>
    `In round 2, ${isTriad ? 'each' : 'the'
    } Reciprocator starts with a new, separate ${pts(
      TOTAL_BONUS
    )}. The Helper starts with ${pts(0)}. `,
  () =>
    `<strong>To return any help received in round 1</strong>, ${isTriad
      ? "each Reciprocator may <strong>independently</strong> (without knowing the other Reciprocator's decision)"
      : 'the Reciprocator may'
    } reciprocate any number of points, from ${pts(0)} to ${pts(
      TOTAL_BONUS
    )}.`,
  () => `${isTriad ? 'Each' : 'The'} Reciprocator can only reciprocate using points they started with in round 2, not using points received in round 1.`,
  () =>
    `Each point reciprocated costs ${isTriad ? 'a given Reciprocator' : 'the Reciprocator'
    } 1 point. They keep the rest.`,
  () =>
    `Each point reciprocated ${isTriad ? 'by a given Reciprocator ' : ''
    }also creates a benefit for the Helper: the Helper receives 1 × the points reciprocated${isTriad ? ' by the respective Reciprocator' : ''
    }.`,
  ...(isTriad
    ? [
      () =>
        'As there are 2 Reciprocators who reciprocate independently, the Helper receives the sum of the points reciprocated by each Reciprocator.'
    ]
    : [])
];

const compHTML_round2 = () => `
  <div class="radio-block">
    <div class="radio-q">Suppose that ${isTriad ? 'Reciprocator 1' : 'the Reciprocator'
  } reciprocates ${pts(round2CompTransfer1)}${isTriad ? `, and Reciprocator 2 reciprocates ${pts(round2CompTransfer2)}` : ''
  }. What are the cost to ${isTriad ? 'Reciprocators 1 and 2, respectively' : 'the Reciprocator'
  }?</div>
    ${compOptions('round2_costs', [
    [
      isTriad
        ? `${pts(round2CompTransfer1)} and ${pts(round2CompTransfer2)}`
        : pts(round2CompTransfer1),
      'correct'
    ],
    [
      isTriad
        ? `${pts(round2CompTransfer1 * 2)} and ${pts(round2CompTransfer2 * 2)}`
        : pts(round2CompTransfer1 * 2),
      'incorrect'
    ],
    [
      isTriad
        ? `${pts(round2CompTransfer1 / 2)} and ${pts(round2CompTransfer2 / 2)}`
        : pts(round2CompTransfer1 / 2),
      'incorrect'
    ]
  ])}
  </div>
  <div class="radio-block">
    <div class="radio-q">Suppose that ${isTriad ? 'Reciprocator 1' : 'the Reciprocator'
  } reciprocates ${pts(round2CompTransfer1)}${isTriad ? ` and Reciprocator 2 reciprocates ${pts(round2CompTransfer2)}` : ''
  }. What is the benefit to the Helper?</div>
    ${compOptions('round2_helperBenefit', [
    [
      isTriad
        ? pts(round2CompTransfer1 + round2CompTransfer2)
        : pts(round2CompTransfer1),
      'correct'
    ],
    [
      isTriad
        ? pts((round2CompTransfer1 + round2CompTransfer2) * 2)
        : pts(round2CompTransfer1 * 2),
      'incorrect'
    ],
    [
      isTriad
        ? pts((round2CompTransfer1 + round2CompTransfer2) / 2)
        : pts(round2CompTransfer1 / 2),
      'incorrect'
    ]
  ])}
  </div>
`;

const bullets_end = [
  () =>
    'After the end of the round 2, players will see how many points they personally kept and received across both rounds of the game.',
  () => 'The game concludes.'
];

const instr_playersRoles = instrWithComp({
  title: 'Reciprocity Game Instructions',
  subtitle: 'Players and Roles',
  bullets: bullets_playersRoles,
  compHTML: compHTML_playersRoles
});

const instr_payoff = instrWithComp({
  title: 'Reciprocity Game Instructions',
  subtitle: 'Bonus Payment',
  bullets: bullets_payoff,
  compHTML: compHTML_payoff
});

const instr_round1 = instrWithComp({
  title: 'Reciprocity Game Instructions',
  subtitle: 'Round 1: Helper Can Send Points',
  bullets: bullets_round1,
  compHTML: compHTML_round1,
  practice: practiceR1,
  practiceTitle: 'Round 1: Practice Demo',
  compNote: amountNote
});

const instr_round2 = instrWithComp({
  title: 'Reciprocity Game Instructions',
  subtitle: isTriad
    ? 'Round 2: Reciprocators Can Reciprocate Points'
    : 'Round 2: Reciprocator Can Reciprocate Points',
  bullets: bullets_round2,
  compHTML: compHTML_round2,
  practice: practiceR2,
  practiceTitle: 'Round 2: Practice Demo',
  compNote: amountNote
});

const instr_end = instrWithComp({
  title: 'Reciprocity Game Instructions',
  subtitle: 'Game Concludes',
  bullets: bullets_end,
});

/* === MAIN-STUDY UI === */
const searchPlayers = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Connect with Other ${isTriad ? 'Players' : 'Player'}</h1>
      ${callout(
    null,
    `
        <p>We will search for and try to connect you with <strong>${otherPlayersCount} other ${playerWord(
      otherPlayersCount
    )}</strong> in <strong>real time</strong>.</p>
        <p>This process may take up to <strong>2 minutes</strong>.</p>
        <p>If the other ${otherPlayersCount === 1 ? 'player is' : 'players are'
    } not found within 2 minutes, you will receive a Prolific completion code, and we will ask you to close this window and return to Prolific to get reimbursed.</p>        
      `
  )}
    </div>
  `,
  choices: [isTriad ? 'Connect with other players' : 'Connect with other player'],
  data: { label: 'search_players' }
};

const matchingWait = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: () =>
    buildSpinnerWaitPage({
      title: '',
      bodyHtml: `
      <div class="wait-copy">
        <p style="margin-top: 5px;">
          We are currently searching for and trying to connect you with ${otherPlayersCount} other ${playerWord(
        otherPlayersCount
      )}.
        </p>
        <p>
          This process may take up to <strong>2 minutes</strong>.
        </p>
        <p>Please do NOT minimize this window or navigate to another page.</p>
      </div>
      ${spinnerHtml()}
      <p id="wait-status" class="wait-status">Searching for ${otherPlayersCount} other ${playerWord(
        otherPlayersCount
      )}.</p>
      <p class="wait-countdown">Return to Prolific in <span id="match_countdown">02:00</span></p>
    `
    }),
  choices: 'NO_KEYS',
  trial_duration: null,
  data: { label: 'matching_wait' },
  on_load: () => {
    const startTime = performance.now();
    const countdownTimer = bindCountdown('match_countdown', MAX_DISCONNECT_MS, startTime);
    const timers = [];

    if (isTriad) {
      timers.push(
        jsPsych.pluginAPI.setTimeout(() => {
          setText('wait-status', 'Searching for 1 other player.');
        }, Math.round(MATCH_WAIT_MS_P1))
      );
      timers.push(
        jsPsych.pluginAPI.setTimeout(() => {
          setText('wait-status', 'All players connected. Initiating game.');
        }, Math.round(MATCH_WAIT_MS_TOTAL - DELAY_MS))
      );
    } else {
      timers.push(
        jsPsych.pluginAPI.setTimeout(() => {
          setText('wait-status', 'All players connected. Initiating game.');
        }, Math.round(MATCH_WAIT_MS_TOTAL - DELAY_MS))
      );
    }

    jsPsych.pluginAPI.setTimeout(() => {
      clearInterval(countdownTimer);
      clearTimers(timers);
      studyState.matched = true;
      studyState.matchingWaitRTMs = performance.now() - startTime;

      jsPsych.finishTrial({
        matched: studyState.matched,
        matchingWaitRTMs: studyState.matchingWaitRTMs
      });
    }, MATCH_WAIT_MS_TOTAL);
  }
};

const round1Decision = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: () =>
    buildSpinnerWaitPage({
      title: 'Round 1',
      bodyHtml: `
      <div class="page-content">
        ${callout(
        null,
        `
          <p>
            ${isTriad
          ? 'You have been randomly assigned to be one of the two <strong>Reciprocators</strong>. The remaining player is the Helper.'
          : 'You have been randomly assigned to be the <strong>Reciprocator</strong>. The remaining player is the Helper.'
        }
          </p>
          <p>
            In this round, you${isTriad ? ' and the other Reciprocator each' : ''
        } start with ${pts(0)}. The Helper starts with ${pts(TOTAL_BONUS)}.
          </p>
          <p>
            To help you${isTriad ? ' and the other Reciprocator' : ''}, the Helper now decides how many points to give.
          </p>
        `
      )}
      </div>
      ${spinnerHtml()}
      <p id="round1_progress" class="wait-status">Waiting for the Helper to decide.</p>
    `
    }),
  choices: 'NO_KEYS',
  trial_duration: null,
  data: { label: 'round1_wait' },
  on_load: () => {
    const startTime = performance.now();

    jsPsych.pluginAPI.setTimeout(() => {
      setText('round1_progress', 'The Helper has decided. Finalizing round.');
    }, Math.round(ROUND1_DECISION_MS - DELAY_MS));

    jsPsych.pluginAPI.setTimeout(() => {
      studyState.round1WaitRTMs = performance.now() - startTime;
      jsPsych.finishTrial({
        round1WaitRTMs: studyState.round1WaitRTMs
      });
    }, ROUND1_DECISION_MS);
  }
};

const round1Outcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => `
    <div class="page-wrapper">
      <h1 class="page-heading">Round 1</h1>
      ${callout(
    null,
    `
        <p>The Helper decided to give ${pts(costCondition)}.</p>
        <p>As a result, you${isTriad ? ' and the other Reciprocator each' : ''
    } receive ${pts(benefitCondition)}.</p>
      `,
    'callout-auto'
  )}
    </div>
  `,
  choices: ['Continue'],
  data: { label: 'round1_outcome' },
  on_finish: data => {
    data.benefitConditionPoints = benefitCondition;
  }
};

const round2Decision = {
  type: jsPsychHtmlKeyboardResponse,
  choices: 'NO_KEYS',
  data: { label: 'round2_reciprocation_decision' },
  stimulus: () => `
    <div class="page-wrapper">
      <h1 class="page-heading">Round 2</h1>
      ${callout(
    null,
    `
          <p>
            In this round, you${isTriad ? ' and the other Reciprocator each' : ''
    } start with ${pts(TOTAL_BONUS)}. The Helper starts with ${pts(0)}.
          </p>
          <p>
            To return any help received in round 1, please decide how many points to reciprocate.
          </p>
        `
  )}
      <div class="page-content">
        <div class="callout" id="recv_r2_amount_callout">
          <div class="demo-section" style="margin-bottom:0.9em;">
            <label class="demo-label" for="recv_r2_give_input">
              How many points do you want to reciprocate?
              <span style="color:#c00">*</span>
            </label>
            <input
              id="recv_r2_give_input"
              type="number"
              min="0"
              max="${TOTAL_BONUS}"
              step="1"
              inputmode="numeric"
              pattern="[0-9]*"
            >
            <div id="recv_r2_give_error" class="jspsych-form-warning" style="display:none; color:#c00; margin-top:0.3em;">
              Please enter one of the allowed amounts.
            </div>
          </div>

          <div class="center-actions">
            <button id="recv_r2_confirm_btn" class="jspsych-btn" disabled>Submit response</button>
          </div>

          <div id="recv_r2_give_reason_wrap" style="display:none; margin-top:1.0em;">
            <label class="demo-label" for="recv_r2_give_reason">
              In 1-2 sentences, briefly explain your reasoning.
              <span style="color:#c00">*</span>
            </label>
            <textarea id="recv_r2_give_reason" rows="3" style="width:100%; padding:6px; box-sizing:border-box; border-radius:8px; border:1px solid #ccc;"></textarea>
            <div id="recv_r2_give_reason_count" class="jspsych-form-warning char-count">Characters entered: 0 / ${MIN_REASON_CHARS} minimum</div>
            <div id="recv_r2_give_reason_error" class="jspsych-form-warning" style="display:none; color:#c00; margin-top:0.3em;">
              Please provide a brief explanation of at least ${MIN_REASON_CHARS} characters.
            </div>
            <div class="center-actions" style="margin-top:0.75em;">
              <button id="recv_r2_give_reason_continue" class="jspsych-btn" disabled>Submit response</button>
            </div>
          </div>
        </div>

        ${isTriad
      ? `
          <div id="recv_r2_expect_callout" class="callout" style="display:none; margin-top:1.15em;">
            <div class="demo-section" style="margin-bottom:0.9em;">
              <label class="demo-label" for="recv_r2_expect_input">
                How many points do you expect the other Reciprocator to reciprocate?
                <span style="color:#c00">*</span>
              </label>
              <input
                id="recv_r2_expect_input"
                type="number"
                min="0"
                max="${TOTAL_BONUS}"
                step="1"
                inputmode="numeric"
                pattern="[0-9]*"
              >
              <div id="recv_r2_expect_error" class="jspsych-form-warning" style="display:none; color:#c00; margin-top:0.3em;">
                Please enter one of the allowed amounts.
              </div>
            </div>

            <div class="center-actions">
              <button id="recv_r2_finish_btn" class="jspsych-btn" disabled>Submit response</button>
            </div>
          </div>
        `
      : ''
    }
      </div>
    </div>
  `,
  on_load: () => {
    studyState.reciprocateAmountFirstInputRTMs = null;
    studyState.reciprocateAmountRTMs = null;
    studyState.reciprocateReasonFirstInputRTMs = null;
    studyState.reciprocateReasonRTMs = null;
    studyState.expectedOtherReciprocatorFirstInputRTMs = null;
    studyState.expectedOtherReciprocatorRTMs = null;

    const pageStartAt = performance.now();
    let reasonShownAt = null;
    let expectShownAt = null;

    const giveInput = $('recv_r2_give_input');
    const giveError = $('recv_r2_give_error');
    const giveBtn = $('recv_r2_confirm_btn');
    const giveReasonWrap = $('recv_r2_give_reason_wrap');
    const giveReason = $('recv_r2_give_reason');
    const giveReasonCount = $('recv_r2_give_reason_count');
    const giveReasonError = $('recv_r2_give_reason_error');
    const giveReasonContinue = $('recv_r2_give_reason_continue');
    const expectCallout = $('recv_r2_expect_callout');
    const expectInput = $('recv_r2_expect_input');
    const expectError = $('recv_r2_expect_error');
    const finishBtn = $('recv_r2_finish_btn');

    const updateGiveButton = () => {
      const value = readBoundedInt(giveInput);

      if (
        studyState.reciprocateAmountFirstInputRTMs == null &&
        String(giveInput.value || '').trim() !== ''
      ) {
        studyState.reciprocateAmountFirstInputRTMs =
          performance.now() - pageStartAt;
      }

      giveBtn.disabled = value == null;
      if (value != null) giveError.style.display = 'none';
    };

    const updateReasonUI = () => {
      const count = trimmedLength(giveReason.value);
      const ok = textMeetsMinimum(giveReason.value);

      if (
        studyState.reciprocateReasonFirstInputRTMs == null &&
        count > 0 &&
        reasonShownAt != null
      ) {
        studyState.reciprocateReasonFirstInputRTMs =
          performance.now() - reasonShownAt;
      }

      giveReasonCount.textContent = `Characters entered: ${count} / ${MIN_REASON_CHARS} minimum`;
      giveReasonContinue.disabled = !ok;
      if (ok) giveReasonError.style.display = 'none';
    };

    const updateExpectButton = () => {
      const value = readBoundedInt(expectInput);

      if (
        studyState.expectedOtherReciprocatorFirstInputRTMs == null &&
        String(expectInput.value || '').trim() !== '' &&
        expectShownAt != null
      ) {
        studyState.expectedOtherReciprocatorFirstInputRTMs =
          performance.now() - expectShownAt;
      }

      finishBtn.disabled = value == null;
      if (value != null) expectError.style.display = 'none';
    };

    giveInput.addEventListener('input', updateGiveButton);

    giveBtn.addEventListener('click', () => {
      const value = readBoundedInt(giveInput);
      if (value == null) {
        giveError.style.display = 'block';
        return;
      }

      studyState.reciprocatePointsToHelper = value;
      studyState.reciprocateAmountRTMs = performance.now() - pageStartAt;

      giveInput.disabled = true;
      giveBtn.disabled = true;
      giveReasonWrap.style.display = 'block';
      giveReason.focus();

      reasonShownAt = performance.now();
      updateReasonUI();
    });

    giveReason.addEventListener('input', updateReasonUI);

    giveReasonContinue.addEventListener('click', () => {
      if (!textMeetsMinimum(giveReason.value)) {
        giveReasonError.style.display = 'block';
        return;
      }

      studyState.reciprocateReason = giveReason.value.trim();
      studyState.reciprocateReasonRTMs = performance.now() - reasonShownAt;

      giveReason.disabled = true;
      giveReasonContinue.disabled = true;

      if (!isTriad) {
        jsPsych.finishTrial({
          reciprocatePointsToHelper: studyState.reciprocatePointsToHelper,
          reciprocateReason: studyState.reciprocateReason,
          expectedOtherReciprocatorPoints: null,
          reciprocateAmountFirstInputRTMs:
            studyState.reciprocateAmountFirstInputRTMs,
          reciprocateAmountRTMs: studyState.reciprocateAmountRTMs,
          reciprocateReasonFirstInputRTMs:
            studyState.reciprocateReasonFirstInputRTMs,
          reciprocateReasonRTMs: studyState.reciprocateReasonRTMs,
          expectedOtherReciprocatorFirstInputRTMs: null,
          expectedOtherReciprocatorRTMs: null
        });
        return;
      }

      expectCallout.style.display = 'block';
      expectInput.focus();
      expectShownAt = performance.now();
      updateExpectButton();
    });

    if (isTriad) {
      expectInput.addEventListener('input', updateExpectButton);

      finishBtn.addEventListener('click', () => {
        const value = readBoundedInt(expectInput);
        if (value == null) {
          expectError.style.display = 'block';
          return;
        }

        studyState.expectedOtherReciprocatorPoints = value;
        studyState.expectedOtherReciprocatorRTMs =
          performance.now() - expectShownAt;

        expectInput.disabled = true;
        finishBtn.disabled = true;

        jsPsych.finishTrial({
          reciprocatePointsToHelper: studyState.reciprocatePointsToHelper,
          reciprocateReason: studyState.reciprocateReason,
          expectedOtherReciprocatorPoints:
            studyState.expectedOtherReciprocatorPoints,
          reciprocateAmountFirstInputRTMs:
            studyState.reciprocateAmountFirstInputRTMs,
          reciprocateAmountRTMs: studyState.reciprocateAmountRTMs,
          reciprocateReasonFirstInputRTMs:
            studyState.reciprocateReasonFirstInputRTMs,
          reciprocateReasonRTMs: studyState.reciprocateReasonRTMs,
          expectedOtherReciprocatorFirstInputRTMs:
            studyState.expectedOtherReciprocatorFirstInputRTMs,
          expectedOtherReciprocatorRTMs:
            studyState.expectedOtherReciprocatorRTMs
        });
      });
    }
  },
  on_finish: data => {
    data.reciprocatePointsToHelper = studyState.reciprocatePointsToHelper;
    data.reciprocateReason = studyState.reciprocateReason;
    data.expectedOtherReciprocatorPoints = isTriad
      ? studyState.expectedOtherReciprocatorPoints
      : null;
    data.reciprocateAmountFirstInputRTMs =
      studyState.reciprocateAmountFirstInputRTMs;
    data.reciprocateAmountRTMs = studyState.reciprocateAmountRTMs;
    data.reciprocateReasonFirstInputRTMs =
      studyState.reciprocateReasonFirstInputRTMs;
    data.reciprocateReasonRTMs = studyState.reciprocateReasonRTMs;
    data.expectedOtherReciprocatorFirstInputRTMs = isTriad
      ? studyState.expectedOtherReciprocatorFirstInputRTMs
      : null;
    data.expectedOtherReciprocatorRTMs = isTriad
      ? studyState.expectedOtherReciprocatorRTMs
      : null;
  }
};

const bonusSummary = {
  type: jsPsychHtmlButtonResponse,
  choices: ['Continue'],
  data: { label: 'summary' },
  stimulus: () => {
    const givenBack = Number.isFinite(studyState.reciprocatePointsToHelper)
      ? studyState.reciprocatePointsToHelper
      : 0;
    const keptRound2 = Math.max(0, TOTAL_BONUS - givenBack);
    const total = benefitCondition + keptRound2;

    return `
      <div class="page-wrapper">
        <h1 class="page-heading">Total Points</h1>
        <div class="page-content" style="text-align:left;">
          ${callout(
      null,
      `
            <p>Points received in Round 1: ${pts(benefitCondition)}</p>
            <p>Points kept in Round 2: ${pts(keptRound2)}</p>
            <p><strong>Total points: ${pts(total)}</strong></p>
        `,
      'callout-auto'
    )}
        </div>
      </div>
    `;
  }
};

/* === FOLLOW-UP / DEBRIEF === */
const followup = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <div class="page-wrapper">
      <h1 class="page-heading">Follow-up Question</h1>
      <div class="page-content"><p>Please answer the following question about your experience in this study. Your response is optional.</p></div>
    </div>
  `,
  html: `
    <div class="page-content">
      ${callout(
    null,
    `
        <div class="demo-section" style="margin:0;">
          <label class="demo-label" for="suspicion_unusual">Did anything about the study seem unusual or suspicious to you? If yes, please describe.</label>
          <textarea id="suspicion_unusual" name="suspicion_unusual" rows="4" style="width:100%;padding:6px;box-sizing:border-box;border-radius:8px;border:1px solid #ccc;"></textarea>
        </div>
      `
  )}
    </div>
  `,
  button_label: 'Submit response',
  data: { label: 'followup' },
  on_finish: data => {
    const response = parseResp(data);
    studyState.suspicionUnusual = (response.suspicion_unusual || '').trim();
    data.suspicion_unusual = studyState.suspicionUnusual;
  }
};

const debrief = {
  type: jsPsychHtmlButtonResponse,
  choices: ['I understand'],
  data: { label: 'debrief' },
  stimulus: () => `
    <div class="page-wrapper">
      <h1 class="page-heading">Debrief</h1>
      <div class="page-content">
        <p>Thank you for participating in this study.</p>
        <p>
          We would like to inform you that this study involved a form of deception. 
          Specifically, you were not actually matched with other ${isTriad ? 'other players' : 'another player'} in real time.
          Instead, you interacted with ${isTriad ? 'two pre-programmed algorithms' : 'a pre-programmed algorithm'}.
        </p>
        <p>
          Regardless of how much you chose to give, we are compensating you with a $0.60 bonus. This ensures that no participant is financially disadvantaged by the experimental design.
        </p>
        <p>
          If you wish to have your data removed from the study now that you have been debriefed about the deception, contact the Protocol Director, Jonah Rösemeier (<a href="mailto:jrosem@stanford.edu">jrosem@stanford.edu</a>).
        </p>
      </div>
    </div>
  `,
  on_finish: () => {
    studyState.completedDebrief = 1;
  }
};

/* === FINAL SUBMISSION === */
window.addEventListener('beforeunload', e => {
  if (allowExit) return;
  e.preventDefault();
  e.returnValue = '';
});

const submit = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Return to Prolific</h1>
      <div class="page-content" style="text-align:center;">
        <p>
          You will be redirected to Prolific automatically in a few seconds.
          You may also click the button below to return immediately.
        </p>
      </div>
    </div>
  `,
  choices: ['Return to Prolific'],
  trial_duration: PROLIFIC_REDIRECT_MS,
  data: { label: 'submit' },
  on_finish: () => {
    releaseExitGuard();
    window.location.href = PROLIFIC_COMPLETION_URL;
  }
};

/* === CHECKPOINTS / FLOW === */
const checkpoint1_consent = checkpointSave('checkpoint1_consentYes', 1);
const checkpoint2_demographics = checkpointSave('checkpoint2_demographics', 2);
const checkpoint3_instructions = checkpointSave('checkpoint3_instructionsPassed', 3);
const checkpoint4_dv = checkpointSave('checkpoint4_dv', 4);
const checkpoint5_end = checkpointSave('checkpoint5_end', 5);

const instructionsDone = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '',
  choices: 'NO_KEYS',
  trial_duration: 1,
  on_finish: () => {
    instructionsResolved = true;
    jsPsych.data.addProperties({
      instructionsResolved,
      failedComp,
      ...flattenCompTracking()
    });
  }
};

const mainStudy = {
  timeline: [
    instructionsDone,
    checkpoint3_instructions,
    searchPlayers,
    matchingWait,
    round1Decision,
    round1Outcome,
    round2Decision,
    checkpoint4_dv,
    bonusSummary,
    followup,
    debrief,
    checkpoint5_end,
    submit
  ],
  iti: PAGE_TRANSITION_DELAY_MS,
  conditional_function: () => !failedComp
};

/* === RUN === */
const consentedFlow = {
  timeline: [
    checkpoint1_consent,
    demographics,
    checkpoint2_demographics,
    instr_playersRoles,
    instr_payoff,
    instr_round1,
    instr_round2,
    instr_end,
    mainStudy
  ],
  conditional_function: () => didConsent
};

jsPsych.run([
  consent,
  nonConsentFlow,
  consentedFlow
]);
