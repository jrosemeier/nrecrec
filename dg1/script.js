/******************************
 * GLOBAL CONSTANTS & CONFIG
 ******************************/

/** UI CONSTANTS **/
const UI = {
  PAGE_WIDTH: '900px',
  CONTENT_WIDTH: '800px',
  FONT_FAMILY: 'sans-serif',
  BASE_FONT_SIZE: '16px',
  TITLE_ALIGN: 'center',
  TITLE_MARGIN: '1.5em 0 1.5em 0',
  TEXT_MARGIN: '0 0 1em 0',
  BUTTON_GROUP_MARGIN_TOP: '1.5em',
  BUTTON_GROUP_MARGIN_BOTTOM: '1.5em',
  BORDER_RADIUS: '8px',
  BORDER_COLOR: '#ccc',
  WAITING_CARD_MIN_WIDTH: '400px',
  WAITING_CARD_MIN_HEIGHT: '210px',
  WAITING_CARD_PADDING: '1em 1.4em',
  WAITING_SECTION_MARGIN_TOP: '2em',
  WAITING_STATUS_FONT_SIZE: '0.9em',
  WAITING_PLAYBTN_MARGIN_TOP: '0.4em',
  WAITING_FINAL_MARGIN_TOP: '0.3em',
  DEMO_FIELD_WIDTH: '220px',
  DEMO_SECTION_MARGIN_BOTTOM: '1.5em',
  SEARCH_TITLE_MARGIN_BOTTOM: '1.5em',
  SEARCH_BAR_MARGIN_BOTTOM: '1.5em'
};

/** COLOR CONSTANTS **/
const COLOR_PRIMARY = '#4a90e2';
const COLOR_STATUS_GREEN = '#2e7d32';
const COLOR_STATUS_RED = '#c62828';
const COLOR_WAITING_BG = '#fafafa';
const COLOR_BORDER = UI.BORDER_COLOR;
const COLOR_BANNER_BG = '#333';
const COLOR_BANNER_TEXT = '#fff';
const COLOR_SUBTEXT = '#555';
const COLOR_ERROR = '#c00';
const COLOR_NODE_STROKE = '#333';

/** VISUAL CONSTANTS: CIRCLES & SVG **/
const VIS_NODE_RADIUS = 32;
const VIS_R1_GIVER_COLOR = '#8ecae6';
const VIS_R1_RECEIVER1_COLOR = '#ffb703';
const VIS_R1_RECEIVER2_COLOR = '#05b832ff';
const VIS_R2_RECEIVER_COLOR = '#8ecae6';
const VIS_R2_GIVER1_COLOR = '#ffb703';
const VIS_R2_GIVER2_COLOR = '#05b832ff';
const VIS_ARROW_COLOR = '#333';
const VIS_BG_COLOR = COLOR_WAITING_BG;
const VIS_BORDER_COLOR = COLOR_BORDER;
const VIS_FONT_SIZE_SMALL = 10;
const VIS_FONT_SIZE_MED = 11;
const VIS_FONT_SIZE_LARGE = 12;

/** GAME / BONUS CONSTANTS **/
const ROUND1_BONUS = 0.40;
const ROUND2_BONUS = ROUND1_BONUS;
const MAX_GIVER_TRANSFER = ROUND1_BONUS;
const MAX_EXPECTED_TOTAL = ROUND1_BONUS * 2;
const FIXED_ALGO_TRANSFER_PER_RECEIVER = 0.20; // scripted behavior
const MONEY_R1_LABEL = '$' + ROUND1_BONUS.toFixed(2);

/** TIMING CONSTANTS (ms) **/
const SEARCH_DURATION = 10000;
const SEARCH_DOTS_INTERVAL = 350;
const WAITING_DOTS_INTERVAL = 350;
const FINAL_DOTS_INTERVAL = 350;
const MAX_WAITING_TIME = 120000;

const CARD_LOCK_IN_DELAY = 80;
const CONNECT_P1_DELAY = 300;
const CONNECT_P2_DELAY = 500;
const LAST_PLAYER_CONNECT_DELAY = 37600;

const READY_FIRST_PLAYER_ID = 'p3';
const READY_SECOND_PLAYER_ID = 'p1';
const READY_FIRST_DELAY = 2700;
const READY_SECOND_DELAY = 4300;

const DECISION_DELAY_SINGLE_GIVER = 43800;
const DECISION_DELAY_FIRST_OF_TWO_GIVERS = 27700;
const DECISION_DELAY_SECOND_OF_TWO_GIVERS = DECISION_DELAY_SINGLE_GIVER;

const POPUP_SHOW_DELAY = 1000;
const TRIAL_END_DELAY = 1000;
const DISCONNECT_SHOW_DELAY = 5000;
const DISCONNECT_FINISH_DELAY = 5000;
const FINAL_LOADING_DURATION = 10000;

/** STUTTER BAR CONSTANTS **/
const STUTTER_STEP_MIN_DELAY = 40;
const STUTTER_STEP_MAX_EXTRA_DELAY = 260;
const STUTTER_MAX_JUMP = 10;

/** LABEL CONSTANTS **/
const LABEL_CONSENT = 'consent';
const LABEL_GAME_INSTRUCTIONS = 'game_instructions';
const LABEL_SEARCH_PLAYERS = 'search_players';
const LABEL_SEARCHING_SCREEN = 'searching_screen';
const LABEL_WAITING_ROOM = 'waiting_room';
const LABEL_GIVER_R1 = 'giver_round1';
const LABEL_GIVER_R2 = 'giver_round2';
const LABEL_GIVER_BONUS = 'giver_bonus';
const LABEL_RECEIVER_R1 = 'receiver_round1';
const LABEL_RECEIVER_R2 = 'receiver_round2';
const LABEL_RECEIVER_BONUS = 'receiver_bonus';
const LABEL_DEMOGRAPHICS = 'demographics';
const LABEL_FOLLOWUP = 'followup_questions';
const LABEL_DEBRIEF = 'debrief';

/** TEXT CONSTANTS (SHARED / REPEATED) **/
const BTN_LABEL_UNDERSTAND_GAME = 'I understand the game';
const BTN_LABEL_DEBRIEF_UNDERSTAND = 'I understand';
const BTN_LABEL_SUBMIT = 'Submit responses';
const BTN_LABEL_SEARCH_PLAYERS = 'Search for other players';
const BTN_LABEL_TRANSFER = 'Transfer';
const BTN_LABEL_CONTINUE = 'Continue';
const BTN_LABEL_DISCONNECT = 'Disconnect';
const TEXT_THANK_YOU_PLAYING = 'Thank you for playing!';

const TEXT_SEARCHING_DOTS_WIDTH = '1.5em';
const TEXT_WAITING_ROOM_TITLE = 'Waiting Room';
const TEXT_SETUP_GAME = 'Setting up your game';
const TEXT_ALL_PLAYERS_CONNECTED = 'All players connected';
const TEXT_WAITING_FOR_PLAYERS = 'Waiting for players to connect';
const TEXT_WAITING_FOR_OTHER_PLAYERS = 'Waiting for other players';
const TEXT_ALL_PLAYERS_DECIDED = 'All players have made a decision';
const TEXT_MAX_WAIT_PREFIX = 'Maximum waiting time before disconnect:';
const TEXT_CONNECTED = 'Connected';
const TEXT_CONNECTING = 'Connecting...';
const TEXT_NOT_YET_CONNECTED = 'Not yet connected';
const TEXT_NOT_READY = 'Not ready';
const TEXT_READY = 'Ready';

/** SERVER / REDIRECT PLACEHOLDERS **/
const DATA_SAVE_URL = 'https://<YOUR-SERVER>/save_data';
const PROLIFIC_COMPLETION_URL =
  'https://app.prolific.co/submissions/complete?cc=<YOUR_COMPLETION_CODE>';

/******************************
 * GLOBAL STYLE INJECTION
 ******************************/

(function injectGlobalStyles() {
  let style = document.createElement('style');
  style.innerHTML = `
    body {
      font-family: ${UI.FONT_FAMILY};
      font-size: ${UI.BASE_FONT_SIZE};
    }

    #jspsych-html-button-response-btngroup {
      margin-top: ${UI.BUTTON_GROUP_MARGIN_TOP};
      margin-bottom: ${UI.BUTTON_GROUP_MARGIN_BOTTOM};
    }

    #jspsych-survey-html-form .jspsych-btn {
      margin-top: ${UI.BUTTON_GROUP_MARGIN_TOP};
      margin-bottom: ${UI.BUTTON_GROUP_MARGIN_BOTTOM};
    }

    .page-wrapper {
      max-width: ${UI.PAGE_WIDTH};
      margin: 0 auto;
      text-align: left;
    }

    .page-heading {
      text-align: ${UI.TITLE_ALIGN};
      margin: ${UI.TITLE_MARGIN};
    }

    .page-text {
      margin: ${UI.TEXT_MARGIN};
    }

    .page-content {
      max-width: ${UI.CONTENT_WIDTH};
      margin: 0 auto ${UI.TEXT_MARGIN} auto;
      text-align: left;
    }

    .status-green { color: ${COLOR_STATUS_GREEN}; font-weight: 700; }
    .status-red   { color: ${COLOR_STATUS_RED};   font-weight: 700; }
    .player-label { font-weight: 600; }

    .jspsych-btn.clicked {
      background-color: ${COLOR_STATUS_GREEN} !important;
      border-color: ${COLOR_STATUS_GREEN} !important;
      color: #fff !important;
      cursor: default;
      opacity: 0.9;
      transition: background-color 0.3s ease, opacity 0.3s ease;
    }

    .waiting-container {
      max-width: 600px;
      margin: ${UI.WAITING_SECTION_MARGIN_TOP} auto;
      text-align: center;
    }

    .waiting-card {
      display: inline-block;
      padding: ${UI.WAITING_CARD_PADDING};
      border-radius: ${UI.BORDER_RADIUS};
      border: 1px solid ${COLOR_BORDER};
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      text-align: left;
      min-width: ${UI.WAITING_CARD_MIN_WIDTH};
      min-height: ${UI.WAITING_CARD_MIN_HEIGHT};
      background: #fff;
    }

    .waiting-title {
      margin: 0.7em 0 0.8em 0;
      text-align: center;
    }

    .waiting-status-line {
      margin: 0.6em 0;
      font-size: ${UI.WAITING_STATUS_FONT_SIZE};
      white-space: nowrap;
    }

    .waiting-players {
      font-size: ${UI.WAITING_STATUS_FONT_SIZE};
      margin: 0 0 0.3em 0;
    }

    .waiting-max-wrap {
      margin: 0.6em 0;
      font-size: ${UI.WAITING_STATUS_FONT_SIZE};
    }

    .waiting-action-area {
      text-align: center;
      margin: ${UI.WAITING_PLAYBTN_MARGIN_TOP} 0 0 0;
    }

    .waiting-final {
      margin: ${UI.WAITING_FINAL_MARGIN_TOP} auto 0 auto;
      text-align: center;
    }

    .waiting-bar-outer {
      margin: 0.15em auto 0 auto;
      width: 65%;
      height: 14px;
      border-radius: 7px;
      border: 1px solid ${COLOR_BORDER};
      overflow: hidden;
    }

    .waiting-bar-inner {
      height: 100%;
      width: 0%;
      background: ${COLOR_PRIMARY};
    }

    .demo-section {
      margin-bottom: ${UI.DEMO_SECTION_MARGIN_BOTTOM};
    }

    .demo-label {
      font-weight: 600;
      display: block;
      margin-bottom: 0.3em;
    }

    .demo-options label {
      display: block;
      margin-bottom: 0.15em;
    }

    input[type="number"],
    input[type="text"],
    select {
      padding: 4px 6px;
      width: ${UI.DEMO_FIELD_WIDTH};
      max-width: 100%;
    }

    .jspsych-form-warning {
      font-size: 0.9em;
    }
  `;
  document.head.appendChild(style);
})();

/******************************
 * HELPER FUNCTIONS
 ******************************/

function getRandomCondition() {
  let conditions = ['giver', 'receiver'];
  return conditions[Math.floor(Math.random() * conditions.length)];
}

function startDotsAnimation(elementId, intervalMs) {
  let el = document.getElementById(elementId);
  if (!el) return null;
  let dots = 1;
  return setInterval(() => {
    dots = (dots % 3) + 1;
    el.textContent = '.'.repeat(dots);
  }, intervalMs);
}

function stopInterval(intervalId) {
  if (intervalId) clearInterval(intervalId);
}

function animateStutterBar(barId, durationMs, onDone) {
  let bar = document.getElementById(barId);
  if (!bar) {
    if (onDone) onDone();
    return;
  }
  let start = performance.now();

  function step(previousWidth) {
    let now = performance.now();
    let elapsed = now - start;
    let t = Math.min(1, elapsed / durationMs);
    let target = t * 100;

    let maxJump = STUTTER_MAX_JUMP * Math.random();
    let drift = (target - previousWidth) * Math.random();
    let width = previousWidth + Math.max(0, Math.min(maxJump, drift));
    width = Math.min(100, Math.max(previousWidth, width));

    bar.style.width = width + '%';

    if (elapsed >= durationMs || width >= 99.5) {
      bar.style.width = '100%';
      if (onDone) onDone();
      return;
    }

    let delay = STUTTER_STEP_MIN_DELAY + Math.random() * STUTTER_STEP_MAX_EXTRA_DELAY;
    setTimeout(() => step(width), delay);
  }

  step(0);
}

function validateNumberInput(inputEl, min, max, errorEl) {
  let raw = inputEl.value.trim();
  let value = parseFloat(raw);
  if (!isNaN(value) && value >= min && value <= max) {
    if (errorEl) errorEl.style.display = 'none';
    return { valid: true, value };
  }
  if (errorEl) errorEl.style.display = raw !== '' ? 'block' : 'none';
  return { valid: false, value: null };
}

function statusGreen(text) {
  return `<span class="status-green">${text}</span>`;
}

function statusRed(text) {
  return `<span class="status-red">${text}</span>`;
}

function setupDisconnectButton(buttonId) {
  let btn = document.getElementById(buttonId);
  setTimeout(() => {
    btn.style.display = 'inline-block';
  }, DISCONNECT_SHOW_DELAY);
  btn.addEventListener('click', () => {
    btn.disabled = true;
    setTimeout(() => jsPsych.finishTrial(), DISCONNECT_FINISH_DELAY);
  });
}

/******************************
 * PROLIFIC PARAMETERS
 ******************************/

let urlParams = new URLSearchParams(window.location.search);
let prolificPID = urlParams.get('PROLIFIC_PID');
let studyID = urlParams.get('STUDY_ID');
let sessionID = urlParams.get('SESSION_ID');
if (!prolificPID) console.warn('PROLIFIC_PID missing in URL');

/******************************
 * CONDITION ASSIGNMENT
 ******************************/

let condition = getRandomCondition();

/******************************
 * INIT jsPsych
 ******************************/

let jsPsych = initJsPsych({
  display_element: 'jspsych-experiment',
  on_data_update: data => {
    data.prolificPID = prolificPID;
    data.studyID = studyID;
    data.sessionID = sessionID;
    data.condition = condition;
  }
});

/******************************
 * RELOAD / NAVIGATION PROTECTION
 ******************************/

(function initReloadProtection() {
  let banner = document.createElement('div');
  banner.id = 'no-reload-banner';
  banner.textContent = 'Reloading this survey is disabled to ensure you are properly connected.';
  Object.assign(banner.style, {
    position: 'fixed',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: COLOR_BANNER_BG,
    color: COLOR_BANNER_TEXT,
    padding: '6px 14px',
    borderRadius: '4px',
    fontSize: '20px',
    fontFamily: UI.FONT_FAMILY,
    zIndex: 99999,
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 0.2s ease',
    textAlign: 'center'
  });
  document.body.appendChild(banner);

  function showReloadAlert() {
    banner.style.opacity = '1';
    clearTimeout(showReloadAlert._hideTO);
    showReloadAlert._hideTO = setTimeout(() => {
      banner.style.opacity = '0';
    }, 2500);
  }

  window.addEventListener(
    'keydown',
    e => {
      let key = e.key.toLowerCase();

      if (key === 'f5' || ((e.ctrlKey || e.metaKey) && key === 'r')) {
        e.preventDefault();
        e.stopPropagation();
        showReloadAlert();
      }

      if (
        key === 'backspace' &&
        !['input', 'textarea'].includes(e.target.tagName.toLowerCase()) &&
        !e.target.isContentEditable
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    { capture: true }
  );

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  window.addEventListener('beforeunload', e => {
    e.preventDefault();
    e.returnValue = '';
    showReloadAlert();
  });
})();

/******************************
 * CONSENT
 ******************************/

let htmlConsent = `
  <div class="page-wrapper">
    <h2 class="page-heading">Interactive Decision Game</h2>
    <div class="page-content">
      <p><strong>DESCRIPTION:</strong> You are invited to take part in a research study about how people make decisions. In this study, you and other participants will simultaneously play a short decision-making game. You and other players will be given a monetary bonus and asked to decide how much of it (if any) to give to the other participants. Together, your choices will determine how much of a bonus you and the other participants earn in the game.</p>
      <p>This study may contain deception.  By continuing to participate in this study, you consent to this deception and understand that the researchers will debrief you at the end of the study about any deception used.</p>
      <p>There are no right or wrong answers—please respond as honestly and thoughtfully as possible.</p>
      <p><strong>TIME INVOLVEMENT:</strong> Your participation will take approximately 5 minutes.</p>
      <p><strong>ELIGIBILITY:</strong> You must be at least 18 years old to be eligible to participate.</p>
      <p><strong>RISKS AND BENEFITS:</strong> The risks associated with this study are minimal. Study data will be stored securely, in compliance with Stanford University standards, minimizing the risk of confidentiality breach. You will not encounter any more risk than what you go through in daily life. There are no expected direct benefits to you in this study. Some participants gain a better insight into their own thoughts, feelings, and behaviors by answering the questions. We cannot and do not guarantee or promise that you will receive any benefits from this study.</p>
      <p><strong>PAYMENTS:</strong> You will be compensated the amount advertised by the survey platform, around $12/hour. Additionally, depending on the outcome of the decision-making game, you may receive a small one-time bonus payment.</p>
      <p><strong>PARTICIPANT’S RIGHTS:</strong> If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. The alternative is not to participate. You have the right to refuse to answer particular questions. The results of this research study may be presented at scientific or professional meetings or published in scientific journals. Your individual privacy will be maintained in all published and written data resulting from the study.</p>
      <p>In accordance with scientific norms, the data from this study may be used or shared with other researchers for future research (after removing personally identifying information) without additional consent from you.</p>
      <p><strong>CONTACT INFORMATION:</strong></p>
      <p><strong><em>Questions:</em></strong> If you have any questions, concerns or complaints about this research, its procedures, risks and benefits, contact the Protocol Director, Jonah Rösemeier (<a href="mailto:jrosem@stanford.edu">jrosem@stanford.edu</a>).</p>
      <p><strong><em>Independent Contact:</em></strong> If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906, or email at <a href="mailto:irbnonmed@stanford.edu">irbnonmed@stanford.edu</a>. You can also write to the Stanford IRB, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.</p>
    </div>
  </div>
`.trim();

let consentTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: htmlConsent,
  choices: [
    'I understand the above and <strong>consent</strong> to participate.',
    'I understand the above and <strong>do not consent</strong>.'
  ],
  data: { label: LABEL_CONSENT },
  on_finish: data => {
    if (data.response === 1) {
      jsPsych.endExperiment(`
        <div class="page-wrapper">
          <h2 class="page-heading">You Did Not Consent</h2>
          <div class="page-content">
            <p>
              As you do not wish to participate in this study, please close this survey and return your submission on Prolific by selecting "Stop without completing".
            </p>
          </div>
        </div>
      `);
    }
  }
};

/******************************
 * TRAINING PHASE VISUALS
 ******************************/

let round1Visual = `
  <div style="text-align:center; margin:1.5em 0;">
    <svg width="520" height="190" style="border:1px solid ${VIS_BORDER_COLOR}; background:${VIS_BG_COLOR}; border-radius:${UI.BORDER_RADIUS};">
      <defs>
        <marker id="arrow-r1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L8,4 L0,8 Z" fill="${VIS_ARROW_COLOR}" />
        </marker>
        <marker id="circle" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <circle cx="4" cy="4" r="2.5" fill="${VIS_ARROW_COLOR}" />
        </marker>
      </defs>

      <circle cx="80" cy="90" r="${VIS_NODE_RADIUS}" fill="${VIS_R1_GIVER_COLOR}" stroke="${COLOR_NODE_STROKE}" />
      <text x="80" y="90" text-anchor="middle" dominant-baseline="middle" font-size="${VIS_FONT_SIZE_LARGE}" font-weight="bold">GIVER</text>

      <circle cx="420" cy="40" r="${VIS_NODE_RADIUS}" fill="${VIS_R1_RECEIVER1_COLOR}" stroke="${COLOR_NODE_STROKE}" />
      <text x="420" y="40" text-anchor="middle" dominant-baseline="middle" font-size="${VIS_FONT_SIZE_MED}" font-weight="bold">RECEIVER 1</text>

      <circle cx="420" cy="140" r="${VIS_NODE_RADIUS}" fill="${VIS_R1_RECEIVER2_COLOR}" stroke="${COLOR_NODE_STROKE}" />
      <text x="420" y="140" text-anchor="middle" dominant-baseline="middle" font-size="${VIS_FONT_SIZE_MED}" font-weight="bold">RECEIVER 2</text>

      <line x1="112" y1="90" x2="260" y2="90" stroke="${VIS_ARROW_COLOR}" stroke-width="2" marker-end="url(#circle)" />
      <text x="186" y="70" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">amount transferred by GIVER</text>
      <text x="186" y="82" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">($0.00 to $0.40)</text>

      <line x1="260" y1="90" x2="383.64" y2="51.74" stroke="${VIS_ARROW_COLOR}" stroke-width="2" marker-end="url(#arrow-r1)" />
      <line x1="260" y1="90" x2="383.64" y2="128.26" stroke="${VIS_ARROW_COLOR}" stroke-width="2" marker-end="url(#arrow-r1)" />

      <text x="330" y="30" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">each RECEIVER gets</text>
      <text x="330" y="42" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">full amount</text>
      <text x="330" y="144" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">each RECEIVER gets</text>
      <text x="330" y="156" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">full amount</text>
    </svg>
  </div>
`;

let round2Visual = `
  <div style="text-align:center; margin:1.5em 0;">
    <svg width="520" height="180" style="border:1px solid ${VIS_BORDER_COLOR}; background:${VIS_BG_COLOR}; border-radius:${UI.BORDER_RADIUS};">
      <defs>
        <marker id="arrow-r2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L8,4 L0,8 Z" fill="${VIS_ARROW_COLOR}" />
        </marker>
      </defs>

      <circle cx="80" cy="90" r="${VIS_NODE_RADIUS}" fill="${VIS_R2_RECEIVER_COLOR}" stroke="${COLOR_NODE_STROKE}" />
      <text x="80" y="90" text-anchor="middle" dominant-baseline="middle">
        <tspan x="80" dy="-6" font-size="${VIS_FONT_SIZE_MED}" font-weight="bold">new</tspan>
        <tspan x="80" dy="12" font-size="${VIS_FONT_SIZE_MED}" font-weight="bold">RECEIVER</tspan>
      </text>

      <circle cx="420" cy="40" r="${VIS_NODE_RADIUS}" fill="${VIS_R2_GIVER1_COLOR}" stroke="${COLOR_NODE_STROKE}" />
      <text x="420" y="40" text-anchor="middle" dominant-baseline="middle">
        <tspan x="420" dy="-6" font-size="${VIS_FONT_SIZE_MED}" font-weight="bold">new</tspan>
        <tspan x="420" dy="12" font-size="${VIS_FONT_SIZE_MED}" font-weight="bold">GIVER 1</tspan>
      </text>

      <circle cx="420" cy="140" r="${VIS_NODE_RADIUS}" fill="${VIS_R2_GIVER2_COLOR}" stroke="${COLOR_NODE_STROKE}" />
      <text x="420" y="140" text-anchor="middle" dominant-baseline="middle">
        <tspan x="420" dy="-6" font-size="${VIS_FONT_SIZE_MED}" font-weight="bold">new</tspan>
        <tspan x="420" dy="12" font-size="${VIS_FONT_SIZE_MED}" font-weight="bold">GIVER 2</tspan>
      </text>

      <line x1="388.34" y1="44.66" x2="117.62" y2="80.76" stroke="${VIS_ARROW_COLOR}" stroke-width="2" marker-end="url(#arrow-r2)" />
      <text x="250" y="36" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">amount transferred by new GIVER 1</text>
      <text x="250" y="48" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">($0.00 to $0.40)</text>

      <line x1="388.34" y1="135.34" x2="117.62" y2="99.24" stroke="${VIS_ARROW_COLOR}" stroke-width="2" marker-end="url(#arrow-r2)" />
      <text x="250" y="150" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">amount transferred by new GIVER 2</text>
      <text x="250" y="162" text-anchor="middle" font-size="${VIS_FONT_SIZE_SMALL}">($0.00 to $0.40)</text>
    </svg>
  </div>
`;

/******************************
 * GAME INSTRUCTIONS
 ******************************/

let gameInstructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h2 class="page-heading">Decision Game Instructions</h2>
      <div class="page-content">
        <h3 class="section-heading">Setup</h3>
        <p>Each game has <strong>3 players</strong> (including you) and <strong>2 rounds</strong>. To play the game, you will be matched with 2 other players.</p>
        <h3 class="section-heading">Round 1</h3>
        <p>One player is randomly assigned to be the <strong>GIVER</strong>. The other two players are <strong>RECEIVERS</strong>.</p>
        <p>The Round 1 GIVER receives a ${MONEY_R1_LABEL} bonus. They choose how much of this bonus to transfer to the RECEIVERS. They can choose to transfer any amount between $0.00 and ${MONEY_R1_LABEL}.</p>
        <p>Any amount the GIVER does not transfer, they keep as a bonus for Round 1. The amount the GIVER transfers also affects what each of the RECEIVERS receives as a bonus for Round 1. The payoff rules in Round 1 are:</p>
        <ul>
          <li>GIVER's bonus for Round 1 = ${MONEY_R1_LABEL} bonus — amount transferred by GIVER</li>
          <li>Each of the RECEIVERS' bonus = amount transferred by GIVER</li>
        </ul>
        <p>Note that the amount is only once deducted from the GIVER's bonus and that this amount is not split between RECEIVERS; the full amount is transferred to <strong>each RECEIVER</strong>.</p>
        <p>After the GIVER has made their decision, the RECEIVERS will be informed about how much the GIVER has transferred.</p>
        ${round1Visual}
        <h3 class="section-heading">Round 2</h3>
        <p>The roles are <strong>reversed</strong> in Round 2: the two RECEIVERS from Round 1 now become <strong>GIVERS</strong>, and the GIVER from Round 1 becomes the <strong>RECEIVER</strong>.</p>
        <p><strong>Each</strong> new GIVER receives a $${ROUND2_BONUS.toFixed(2)} bonus. They <strong>independently</strong> choose how much of this bonus to transfer to the new RECEIVER. That is, each new GIVER does <strong>not</strong> know how much the other GIVER gives. They can choose to transfer any amount between $0.00 and ${ROUND2_BONUS.toFixed(2)}.</p>
        <p>For each new GIVER, any amount they do not transfer, they keep as a bonus for Round 2. The amount that each new GIVER transfers also affects what the new RECEIVER receives as a bonus for Round 2. The payoff rules in Round 2 are:</p>
        <ul>
          <li>new GIVER 1's bonus for Round 2 = $${ROUND2_BONUS.toFixed(2)} bonus — amount transferred by new GIVER 1</li>
          <li>new GIVER 2's bonus for Round 2 = $${ROUND2_BONUS.toFixed(2)} bonus — amount transferred by new GIVER 2</li>
          <li>new RECEIVER's bonus = amount transferred by new GIVER 1 + amount transferred by new GIVER 2</li>
        </ul>
        <p>Note that each new GIVER can only transfer from the bonus from this round. Bonus received in Round 1 cannot be transferred.</p>
        <p>After both GIVERS have made their decision, the new RECEIVER will be informed about how much the new GIVERS have transferred in total.</p>
        ${round2Visual}
      </div>
    </div>
  `,
  choices: [BTN_LABEL_UNDERSTAND_GAME],
  data: { label: LABEL_GAME_INSTRUCTIONS }
};

/******************************
 * SEARCH FOR PLAYERS
 ******************************/

let searchPlayersScreen = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h2 class="page-heading">Searching for other players</h2>
      <div class="page-content">
        <p>We will try to match you with <strong>2 other players</strong> in real time.</p>
        <p>This process may take up to <strong>2 minutes</strong>. If 2 other players are not found within 2 minutes, you will receive a Prolific completion code, and we will ask you to close this window and return to Prolific to get reimbursed.</p>
        <p>Click the button below to start searching for a waiting room with other players.</p>
      </div>
    </div>
  `,
  choices: [BTN_LABEL_SEARCH_PLAYERS],
  data: { label: LABEL_SEARCH_PLAYERS }
};

/******************************
 * SEARCHING SCREEN
 ******************************/

let searchingScreen = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <div class="page-content" style="text-align:center;">
        <h2 class="page-heading" style="margin-bottom:${UI.SEARCH_TITLE_MARGIN_BOTTOM};">
          Searching for a waiting room
          <span id="search-dots" style="display:inline-block; width:${TEXT_SEARCHING_DOTS_WIDTH}; text-align:left;">.</span>
        </h2>
        <div style="
          margin:0 auto ${UI.SEARCH_BAR_MARGIN_BOTTOM} auto;
          width:60%;
          height:14px;
          border-radius:7px;
          border:1px solid ${COLOR_BORDER};
          overflow:hidden;
        ">
          <div id="search-loading-bar" style="height:100%; width:0%; background:${COLOR_PRIMARY};"></div>
        </div>
        <p>Please wait while we try to find a waiting room with other players.</p>
      </div>
    </div>
  `,
  choices: 'NO_KEYS',
  trial_duration: SEARCH_DURATION,
  data: { label: LABEL_SEARCHING_SCREEN },
  on_load: () => {
    let dotsIntervalId = startDotsAnimation('search-dots', SEARCH_DOTS_INTERVAL);
    animateStutterBar('search-loading-bar', SEARCH_DURATION, () => { });
    jsPsych.pluginAPI.setTimeout(() => stopInterval(dotsIntervalId), SEARCH_DURATION + 200);
  }
};

/******************************
 * WAITING ROOM
 ******************************/

let waitingRoom = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="waiting-container">
      <div id="waiting-card" class="waiting-card">
        <h2 class="waiting-title">${TEXT_WAITING_ROOM_TITLE}</h2>

        <p id="status-line" class="waiting-status-line">
          <span id="status-count">0 / 3 players connected</span>
          &mdash;
          <span id="status-label">${TEXT_WAITING_FOR_PLAYERS}</span>
          <span id="waiting-dots" style="display:inline-block; width:${TEXT_SEARCHING_DOTS_WIDTH}; text-align:left;">.</span>
        </p>

        <div id="players-block" class="waiting-players">
          <div id="p1-status">
            <span class="player-label">Player 1:</span>
            <span class="status-red">${TEXT_CONNECTING}</span>
          </div>
          <div id="p2-status">
            <span class="player-label">Player 2 (You):</span>
            <span class="status-red">${TEXT_CONNECTING}</span>
          </div>
          <div id="p3-status">
            <span class="player-label">Player 3:</span>
            <span class="status-red">${TEXT_NOT_YET_CONNECTED}</span>
          </div>
        </div>

        <p id="max-wait-wrapper" class="waiting-max-wrap">
          ${TEXT_MAX_WAIT_PREFIX}
          <span id="max-wait-timer">02:00</span>
        </p>

        <div id="action-area" class="waiting-action-area">
          <button id="play-game-btn" class="jspsych-btn" style="visibility:hidden;">
            Play game
          </button>

          <div id="final-loading-wrapper" class="waiting-final" style="display:none;">
            <p style="margin:0 0 0.15em 0;">
              ${TEXT_SETUP_GAME}
              <span id="final-dots" style="display:inline-block; width:${TEXT_SEARCHING_DOTS_WIDTH}; text-align:left;">.</span>
            </p>
            <div class="waiting-bar-outer">
              <div id="final-loading-bar" class="waiting-bar-inner"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  choices: 'NO_KEYS',
  trial_duration: null,
  data: { label: LABEL_WAITING_ROOM },
  on_load: () => {
    let statusCountEl = document.getElementById('status-count');
    let statusLabelEl = document.getElementById('status-label');
    let waitingDotsEl = document.getElementById('waiting-dots');
    let p1El = document.getElementById('p1-status');
    let p2El = document.getElementById('p2-status');
    let p3El = document.getElementById('p3-status');
    let maxWaitWrapEl = document.getElementById('max-wait-wrapper');
    let timerEl = document.getElementById('max-wait-timer');
    let playBtn = document.getElementById('play-game-btn');
    let finalWrapEl = document.getElementById('final-loading-wrapper');
    let cardEl = document.getElementById('waiting-card');

    let startTime = performance.now();
    let stagedConnected = false;
    let allConnected = false;
    let readyP1 = false;
    let readyP2 = false;
    let readyP3 = false;
    let finalLoading = false;

    jsPsych.pluginAPI.setTimeout(() => {
      cardEl.style.width = cardEl.offsetWidth + 'px';
      cardEl.style.height = cardEl.offsetHeight + 'px';
    }, CARD_LOCK_IN_DELAY);

    setTimeout(() => {
      p1El.innerHTML = `<span class="player-label">Player 1:</span> ${statusGreen(TEXT_CONNECTED)}`;
      statusCountEl.textContent = '1 / 3 players connected';
    }, CONNECT_P1_DELAY);

    setTimeout(() => {
      p2El.innerHTML = `<span class="player-label">Player 2 (You):</span> ${statusGreen(TEXT_CONNECTED)}`;
      statusCountEl.textContent = '2 / 3 players connected';
    }, CONNECT_P2_DELAY);

    let waitingDotsIntervalId = startDotsAnimation('waiting-dots', WAITING_DOTS_INTERVAL);

    let timerIntervalId = setInterval(() => {
      if (stagedConnected || finalLoading) return;
      let now = performance.now();
      let remaining = Math.max(0, MAX_WAITING_TIME - (now - startTime));
      let mm = String(Math.floor(remaining / 60000)).padStart(2, '0');
      let ss = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');
      timerEl.textContent = `${mm}:${ss}`;
      if (remaining <= 0 && !stagedConnected) {
        clearInterval(timerIntervalId);
        clearInterval(waitingDotsIntervalId);
        clearInterval(connectIntervalId);
        jsPsych.finishTrial({ all_connected: false, timeout: true });
      }
    }, 250);

    let connectIntervalId = setInterval(() => {
      let elapsed = performance.now() - startTime;
      if (!stagedConnected && elapsed >= LAST_PLAYER_CONNECT_DELAY) {
        stagedConnected = true;
        statusCountEl.textContent = '3 / 3 players connected';
        p3El.innerHTML = `<span class="player-label">Player 3:</span> ${statusGreen(TEXT_CONNECTED)}`;

        setTimeout(() => {
          allConnected = true;
          statusLabelEl.textContent = TEXT_ALL_PLAYERS_CONNECTED;
          waitingDotsEl.textContent = '';
          stopInterval(waitingDotsIntervalId);
          maxWaitWrapEl.style.visibility = 'hidden';

          p1El.innerHTML = `<span class="player-label">Player 1:</span> ${statusRed(TEXT_NOT_READY)}`;
          p2El.innerHTML = `<span class="player-label">Player 2 (You):</span> ${statusRed(TEXT_NOT_READY)}`;
          p3El.innerHTML = `<span class="player-label">Player 3:</span> ${statusRed(TEXT_NOT_READY)}`;

          playBtn.style.visibility = 'visible';

          function setReady(id) {
            if (id === 'p1' && !readyP1) {
              readyP1 = true;
              p1El.innerHTML = `<span class="player-label">Player 1:</span> ${statusGreen(TEXT_READY)}`;
            }
            if (id === 'p2' && !readyP2) {
              readyP2 = true;
              p2El.innerHTML = `<span class="player-label">Player 2 (You):</span> ${statusGreen(TEXT_READY)}`;
            }
            if (id === 'p3' && !readyP3) {
              readyP3 = true;
              p3El.innerHTML = `<span class="player-label">Player 3:</span> ${statusGreen(TEXT_READY)}`;
            }
            checkAllReady();
          }

          setTimeout(() => setReady(READY_FIRST_PLAYER_ID), READY_FIRST_DELAY);
          setTimeout(() => setReady(READY_SECOND_PLAYER_ID), READY_SECOND_DELAY);

          playBtn.addEventListener('click', () => {
            if (!readyP2) {
              playBtn.classList.add('clicked');
              playBtn.disabled = true;
              setReady('p2');
            }
          });

          function checkAllReady() {
            if (!finalLoading && readyP1 && readyP2 && readyP3) startFinalLoading();
          }

          function startFinalLoading() {
            finalLoading = true;
            clearInterval(timerIntervalId);
            clearInterval(connectIntervalId);

            playBtn.style.display = 'none';
            finalWrapEl.style.display = 'block';

            let finalDotsIntervalId = startDotsAnimation('final-dots', FINAL_DOTS_INTERVAL);
            animateStutterBar('final-loading-bar', FINAL_LOADING_DURATION, () => {
              stopInterval(finalDotsIntervalId);
              jsPsych.finishTrial({ all_connected: true, all_ready: true });
            });
          }
        }, POPUP_SHOW_DELAY);
      }
    }, 200);
  }
};

/******************************
 * GIVER CONDITION
 ******************************/

let giverRound1Transfer = 0;

let giverRound1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <h2 class="page-heading">Round 1</h2>
      <div class="page-content">
        <p>
          For Round 1, you have been randomly assigned to be the <strong>GIVER</strong>.
          The other two players are the <strong>RECEIVERS</strong>.
        </p>
        <p>
          In this round, only you receive a <strong>$${ROUND1_BONUS.toFixed(2)}</strong> bonus.
          Please decide how much of this bonus you want to transfer to the RECEIVERS.
          You can decide to transfer any amount between $0.00 and $0.40.
        </p>

        <p>
        Note that the amount you transfer is only once deducted from your bonus and that this amount is not split between RECEIVERS (the full amount is transferred to <strong>each RECEIVER</strong>).
        </p>

        <div class="demo-section">
          <label class="demo-label" for="giver_amount_input">
            How much of your bonus (in $) do you want to transfer to the two RECEIVERS?<span style="color:${COLOR_ERROR}">*</span>
          </label>
          <input
            type="number"
            id="giver_amount_input"
            min="0"
            max="${ROUND1_BONUS.toFixed(2)}"
            step="0.01"
            required
          >
          <div
            id="giver_amount_error"
            class="jspsych-form-warning"
            style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
          >
            Please enter an amount between $0.00 and $${ROUND1_BONUS.toFixed(2)} using two decimal places.
          </div>
        </div>

        <div style="text-align:center; margin-top:2em;">
          <button id="giver_confirm_btn" class="jspsych-btn" disabled>
            ${BTN_LABEL_TRANSFER}
          </button>
        </div>

        <div
          id="giver_popup"
          class="waiting-card"
          style="display:none; margin-top:3em; padding:0.75em 1em;"
        >
          <div class="demo-section" style="margin-bottom:1em;">
            <label class="demo-label" for="giver_expect_r1_input">
              In the next round, how much of their bonus (in $) do you expect the current <strong>RECEIVER 1</strong>
              (who will become GIVER 1) to transfer to you?<span style="color:${COLOR_ERROR}">*</span>
            </label>
            <input
              type="number"
              id="giver_expect_r1_input"
              step="0.01"
              min="0"
              max="${ROUND2_BONUS.toFixed(2)}"
              required
              style="width:120px;"
            >
            <div
              id="giver_expect_r1_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please enter an amount between $0.00 and $${ROUND2_BONUS.toFixed(2)} using two decimal places.
            </div>
          </div>

          <div class="demo-section">
            <label class="demo-label" for="giver_expect_r2_input">
              In the next round, how much of their bonus (in $) do you expect the current <strong>RECEIVER 2</strong>
              (who will become GIVER 2) to transfer to you?<span style="color:${COLOR_ERROR}">*</span>
            </label>
            <input
              type="number"
              id="giver_expect_r2_input"
              step="0.01"
              min="0"
              max="${ROUND2_BONUS.toFixed(2)}"
              required
              style="width:120px;"
            >
            <div
              id="giver_expect_r2_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please enter an amount between $0.00 and $${ROUND2_BONUS.toFixed(2)} using two decimal places.
            </div>
          </div>

          <button
            id="giver_popup_continue"
            class="jspsych-btn"
            style="margin-top:0.75em;"
          >
            ${BTN_LABEL_CONTINUE}
          </button>
        </div>
      </div>
    </div>
  `,
  choices: 'NO_KEYS',
  data: { label: LABEL_GIVER_R1 },
  on_load: () => {
    let amountInput = document.getElementById('giver_amount_input');
    let amountError = document.getElementById('giver_amount_error');
    let confirmBtn = document.getElementById('giver_confirm_btn');
    let popup = document.getElementById('giver_popup');

    let expectR1Input = document.getElementById('giver_expect_r1_input');
    let expectR1Error = document.getElementById('giver_expect_r1_error');
    let expectR2Input = document.getElementById('giver_expect_r2_input');
    let expectR2Error = document.getElementById('giver_expect_r2_error');
    let popupContinue = document.getElementById('giver_popup_continue');

    amountInput.addEventListener('input', () => {
      let r = validateNumberInput(amountInput, 0, MAX_GIVER_TRANSFER, amountError);
      confirmBtn.disabled = !r.valid;
    });

    confirmBtn.addEventListener('click', () => {
      let r = validateNumberInput(amountInput, 0, MAX_GIVER_TRANSFER, amountError);
      if (!r.valid) return;
      giverRound1Transfer = r.value;
      amountInput.disabled = true;
      confirmBtn.disabled = true;
      setTimeout(() => (popup.style.display = 'block'), POPUP_SHOW_DELAY);
    });

    function validateExpectBoth() {
      let r1 = validateNumberInput(expectR1Input, 0, ROUND2_BONUS, expectR1Error);
      let r2 = validateNumberInput(expectR2Input, 0, ROUND2_BONUS, expectR2Error);
      return {
        valid: r1.valid && r2.valid,
        v1: r1.value,
        v2: r2.value
      };
    }

    expectR1Input.addEventListener('input', validateExpectBoth);
    expectR2Input.addEventListener('input', validateExpectBoth);

    popupContinue.addEventListener('click', () => {
      let r = validateExpectBoth();
      if (!r.valid) return;

      expectR1Input.disabled = true;
      expectR2Input.disabled = true;
      popupContinue.disabled = true;

      setTimeout(() => {
        jsPsych.finishTrial({
          label: LABEL_GIVER_R1,
          transfer_amount_dollars: giverRound1Transfer,
          expected_from_receiver1_dollars: r.v1,
          expected_from_receiver2_dollars: r.v2,
          expected_total_from_others_dollars: (r.v1 + r.v2)
        });
      }, TRIAL_END_DELAY);
    });
  }
};

let giverRound2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <h2 class="page-heading">Round 2</h2>
      <div class="page-content">
        <p>
          For Round 2, the roles are reversed. You are the <strong>RECEIVER</strong>. The other two players are the <strong>GIVERS</strong>.
        </p>
        <p>
          In this round, only you receive <strong>no bonus</strong>.
          Please wait until the two GIVERS have each decided how much of their $0.40 bonus they want to transfer to you. 
          They can each decide to transfer any amount between $0.00 and $0.40.
        </p>
        <p>
          Note that the two GIVERS independently make their decision of how much of their bonus to give to you.
        </p>
        <p id="giver_r2_status">
          <span id="giver_r2_count"><strong>0 / 2</strong> players have made their decision</span>
          &mdash;
          <span id="giver_r2_label">${TEXT_WAITING_FOR_OTHER_PLAYERS}</span>
          <span id="giver_r2_dots" style="display:inline-block; width:${TEXT_SEARCHING_DOTS_WIDTH}; text-align:left;">.</span>
        </p>

        <div
          id="giver_r2_popup"
          style="display:none; margin-top:3em; text-align:center;"
        >
          <div
            style="
              display:inline-block;
              padding:0.75em 1.2em;
              border-radius:${UI.BORDER_RADIUS};
              border:1px solid ${COLOR_BORDER};
              box-shadow:0 2px 4px rgba(0,0,0,0.05);
            "
          >
            <p style="margin:0 0 0.6em 0;">
              The GIVERS decided to transfer $0.20 in total.<br>
              As a result, you receive $0.20.
            </p>
            <button id="giver_r2_popup_continue" class="jspsych-btn">
              ${BTN_LABEL_CONTINUE}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  choices: 'NO_KEYS',
  data: { label: LABEL_GIVER_R2 },
  on_load: () => {
    let countEl = document.getElementById('giver_r2_count');
    let labelEl = document.getElementById('giver_r2_label');
    let dotsEl = document.getElementById('giver_r2_dots');
    let popup = document.getElementById('giver_r2_popup');
    let popupContinue = document.getElementById('giver_r2_popup_continue');

    let dotsIntervalId = startDotsAnimation('giver_r2_dots', WAITING_DOTS_INTERVAL);

    setTimeout(
      () => (countEl.innerHTML = '<strong>1 / 2</strong> players have made a decision'),
      DECISION_DELAY_FIRST_OF_TWO_GIVERS
    );

    setTimeout(() => {
      countEl.innerHTML = '<strong>2 / 2</strong> players have made a decision';
      labelEl.textContent = TEXT_ALL_PLAYERS_DECIDED;
      stopInterval(dotsIntervalId);
      dotsEl.textContent = '';
    }, DECISION_DELAY_SECOND_OF_TWO_GIVERS);

    setTimeout(() => (popup.style.display = 'block'), DECISION_DELAY_SECOND_OF_TWO_GIVERS + POPUP_SHOW_DELAY);

    popupContinue.addEventListener('click', () => {
      popupContinue.disabled = true;
      setTimeout(() => {
        jsPsych.finishTrial({
          label: LABEL_GIVER_R2,
          received_total_round2: 0.20
        });
      }, TRIAL_END_DELAY);
    });
  }
};

let giverBonusPage = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: () => {
    let transfer = typeof giverRound1Transfer === 'number' ? giverRound1Transfer : 0;
    let keptRound1 = Math.max(0, ROUND1_BONUS - transfer);
    let receivedRound2 = 0.20;
    let total = (keptRound1 + receivedRound2).toFixed(2);

    return `
      <div class="page-wrapper">
        <h2 class="page-heading">Your Total Bonus</h2>
        <div class="page-content" style="text-align:left;">
          <p>
            Not transferred in Round 1: $${keptRound1.toFixed(2)}<br>
            Transferred to you in Round 2: $${receivedRound2.toFixed(2)}<br>
            Your total bonus is <strong>$${total}</strong>.
          </p>
          <p>${TEXT_THANK_YOU_PLAYING}</p>
          <div style="text-align:center; margin-top:2em;">
            <button id="giver_disconnect_btn" class="jspsych-btn" style="display:none;">
              ${BTN_LABEL_DISCONNECT}
            </button>
          </div>
        </div>
      </div>
    `;
  },
  choices: 'NO_KEYS',
  data: { label: LABEL_GIVER_BONUS },
  on_load: () => setupDisconnectButton('giver_disconnect_btn')
};

let giverTimeline = {
  timeline: [giverRound1, giverRound2, giverBonusPage],
  conditional_function: () => condition === 'giver'
};

/******************************
 * RECEIVER CONDITION
 ******************************/

let receiverRound2Transfer = 0;

let receiverRound1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <h2 class="page-heading">Round 1</h2>
      <div class="page-content">
        <p>
          For Round 1, you have been randomly assigned to be one of the two <strong>RECEIVERS</strong>.
          The other player is the <strong>GIVER</strong>.
        </p>
        <p>
          In this round, you and the other RECEIVER receive <strong>no bonus</strong>.
          Please wait until the GIVER has decided how much of their $0.40 bonus they want to transfer to you and the other RECEIVER.
          They can decide to transfer any amount between $0.00 and $0.40.
        </p>
        <p>
         Note that the amount they transfer is only once deducted from their bonus and that this amount is not split between you and the other RECEIVER; the full amount is transferred to <strong>you and the other RECEIVER</strong>.
        </p>
        <p id="recv_r1_status">
          <span id="recv_r1_count"><strong>0 / 1</strong> player has made a decision</span>
          &mdash;
          <span id="recv_r1_label">${TEXT_WAITING_FOR_OTHER_PLAYERS}</span>
          <span id="recv_r1_dots" style="display:inline-block; width:${TEXT_SEARCHING_DOTS_WIDTH}; text-align:left;">.</span>
        </p>

        <div
          id="recv_r1_popup"
          style="display:none; margin-top:3em; text-align:center;"
        >
          <div
            style="
              display:inline-block;
              padding:0.75em 1.2em;
              border-radius:${UI.BORDER_RADIUS};
              border:1px solid ${COLOR_BORDER};
              box-shadow:0 2px 4px rgba(0,0,0,0.05);
            "
          >
            <p style="margin:0 0 0.6em 0;">
              The GIVER decided to transfer $0.20.<br>
              As a result, you receive $0.20 and the other RECEIVER also receives $0.20.
            </p>
            <button id="recv_r1_popup_continue" class="jspsych-btn">
              ${BTN_LABEL_CONTINUE}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  choices: 'NO_KEYS',
  data: { label: LABEL_RECEIVER_R1 },
  on_load: () => {
    let countEl = document.getElementById('recv_r1_count');
    let labelEl = document.getElementById('recv_r1_label');
    let dotsEl = document.getElementById('recv_r1_dots');
    let popup = document.getElementById('recv_r1_popup');
    let popupContinue = document.getElementById('recv_r1_popup_continue');

    let dotsIntervalId = startDotsAnimation('recv_r1_dots', WAITING_DOTS_INTERVAL);

    setTimeout(() => {
      countEl.innerHTML = '<strong>1 / 1</strong> player has made a decision';
      labelEl.textContent = TEXT_ALL_PLAYERS_DECIDED;
      stopInterval(dotsIntervalId);
      dotsEl.textContent = '';
    }, DECISION_DELAY_SINGLE_GIVER);

    setTimeout(() => (popup.style.display = 'block'), DECISION_DELAY_SINGLE_GIVER + POPUP_SHOW_DELAY);

    popupContinue.addEventListener('click', () => {
      popupContinue.disabled = true;
      setTimeout(() => {
        jsPsych.finishTrial({
          label: LABEL_RECEIVER_R1,
          received_from_giver_round1: FIXED_ALGO_TRANSFER_PER_RECEIVER
        });
      }, TRIAL_END_DELAY);
    });
  }
};

let receiverRound2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <h2 class="page-heading">Round 2</h2>
      <div class="page-content">
        <p>
          For Round 2, the roles are reversed. You, alongside the other player who previously was a RECEIVER, are the <strong>GIVERS</strong>. The player who was the GIVER in Round 1 is the <strong>RECEIVER</strong>.
        </p>
        <p>
          In this round, you and the other GIVER each receive a <strong>$${ROUND2_BONUS.toFixed(2)}</strong> bonus.
          Please decide how much of this bonus you want to transfer to the RECEIVER.
          You can each decide to transfer any amount between $0.00 and $0.40.
        </p>
        <p>
          Note that you and the other GIVER independently make your decisions of how much of your bonuses to give to the RECEIVER.
        </p>

        <div class="demo-section">
          <label class="demo-label" for="recv_r2_give_input">
            How much of your bonus (in $) do you want to transfer to the RECEIVER?<span style="color:${COLOR_ERROR}">*</span>
          </label>
          <input
            type="number"
            id="recv_r2_give_input"
            min="0"
            max="${ROUND2_BONUS.toFixed(2)}"
            step="0.01"
            required
          >
          <div
            id="recv_r2_give_error"
            class="jspsych-form-warning"
            style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
          >
            Please enter an amount between $0.00 and $${ROUND2_BONUS.toFixed(2)} using two decimal places.
          </div>
        </div>

        <div style="text-align:center; margin-top:2em;">
          <button id="recv_r2_confirm_btn" class="jspsych-btn" disabled>
            ${BTN_LABEL_TRANSFER}
          </button>
        </div>

        <div
          id="recv_r2_popup"
          class="waiting-card"
          style="display:none; margin-top:3em; padding:0.75em 1em;"
        >
          <label class="demo-label" for="recv_r2_expect_input">
              In this round, how much of their bonus (in $) do you expect the <strong>other GIVER</strong>
              to transfer to the RECEIVER?
          </label>
          <input
            type="number"
            id="recv_r2_expect_input"
            step="0.01"
            min="0"
            max="${ROUND2_BONUS.toFixed(2)}"
            required
            style="width:120px;"
          >
          <div
            id="recv_r2_expect_error"
            class="jspsych-form-warning"
            style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
          >
            Please enter an amount between $0.00 and $${ROUND2_BONUS.toFixed(2)} using two decimal places.
          </div>
          <button
            id="recv_r2_popup_continue"
            class="jspsych-btn"
            style="margin-left:0.75em;"
          >
            ${BTN_LABEL_CONTINUE}
          </button>
        </div>
      </div>
    </div>
  `,
  choices: 'NO_KEYS',
  data: { label: LABEL_RECEIVER_R2 },
  on_load: () => {
    let giveInput = document.getElementById('recv_r2_give_input');
    let giveError = document.getElementById('recv_r2_give_error');
    let confirmBtn = document.getElementById('recv_r2_confirm_btn');
    let popup = document.getElementById('recv_r2_popup');
    let expectInput = document.getElementById('recv_r2_expect_input');
    let expectError = document.getElementById('recv_r2_expect_error');
    let popupContinue = document.getElementById('recv_r2_popup_continue');

    giveInput.addEventListener('input', () => {
      let r = validateNumberInput(giveInput, 0, ROUND2_BONUS, giveError);
      confirmBtn.disabled = !r.valid;
    });

    confirmBtn.addEventListener('click', () => {
      let r = validateNumberInput(giveInput, 0, ROUND2_BONUS, giveError);
      if (!r.valid) return;
      receiverRound2Transfer = r.value;
      giveInput.disabled = true;
      confirmBtn.disabled = true;
      setTimeout(() => (popup.style.display = 'block'), POPUP_SHOW_DELAY);
    });

    function validateExpect() {
      return validateNumberInput(expectInput, 0, ROUND2_BONUS, expectError);
    }

    expectInput.addEventListener('input', validateExpect);

    popupContinue.addEventListener('click', () => {
      let r = validateExpect();
      if (!r.valid) return;
      expectInput.disabled = true;
      popupContinue.disabled = true;
      setTimeout(() => {
        jsPsych.finishTrial({
          label: LABEL_RECEIVER_R2,
          transfer_amount_dollars: receiverRound2Transfer,
          expected_other_giver_to_receiver_dollars: r.value
        });
      }, TRIAL_END_DELAY);
    });
  }
};

let receiverBonusPage = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: () => {
    let receivedRound1 = FIXED_ALGO_TRANSFER_PER_RECEIVER;
    let keptRound2 = Math.max(0, ROUND2_BONUS - receiverRound2Transfer);
    let total = (receivedRound1 + keptRound2).toFixed(2);

    return `
      <div class="page-wrapper">
        <h2 class="page-heading">Your Total Bonus</h2>
        <div class="page-content" style="text-align:left;">
          <p>
            Transferred to you in Round 1: $${receivedRound1.toFixed(2)}<br>
            Not transferred in Round 2: $${keptRound2.toFixed(2)}<br>
            Your total bonus is <strong>$${total}</strong>.
          </p>
          <p>${TEXT_THANK_YOU_PLAYING}</p>
          <div style="text-align:center; margin-top:2em;">
            <button id="receiver_disconnect_btn" class="jspsych-btn" style="display:none;">
              ${BTN_LABEL_DISCONNECT}
            </button>
          </div>
        </div>
      </div>
    `;
  },
  choices: 'NO_KEYS',
  data: { label: LABEL_RECEIVER_BONUS },
  on_load: () => setupDisconnectButton('receiver_disconnect_btn')
};

let receiverTimeline = {
  timeline: [receiverRound1, receiverRound2, receiverBonusPage],
  conditional_function: () => condition === 'receiver'
};

/******************************
 * DEMOGRAPHICS
 ******************************/

let demographicsTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <div class="page-wrapper">
      <h2 class="page-heading">Demographics</h2>
      <div class="page-content">
        <p>In this last section, please answer a few demographic questions.</p>
      </div>
    </div>
  `,
  html: `
    <div class="page-content">
      <div class="demo-section">
        <span class="demo-label">How do you describe yourself? <span style="color:${COLOR_ERROR}">*</span></span>
        <div class="demo-options">
          <label><input type="radio" name="gender" value="Male" required> Male</label>
          <label><input type="radio" name="gender" value="Female"> Female</label>
          <label><input type="radio" name="gender" value="Non-binary / third gender"> Non-binary / third gender</label>
          <label><input type="radio" name="gender" value="Other"> Other</label>
        </div>
      </div>

      <div class="demo-section">
        <span class="demo-label">Which race do you consider yourself to be? <span style="color:${COLOR_ERROR}">*</span></span>
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

      <div class="demo-section">
        <label class="demo-label" for="age">What is your age? <span style="color:${COLOR_ERROR}">*</span></label>
        <input type="number" id="age" name="age" min="18" max="120" required>
      </div>

      <div class="demo-section">
        <span class="demo-label">What is the highest level of education you have completed? <span style="color:${COLOR_ERROR}">*</span></span>
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

      <div class="demo-section">
        <label class="demo-label" for="work_experience">How many years of work experience do you have? <span style="color:${COLOR_ERROR}">*</span></label>
        <input type="number" id="work_experience" name="work_experience" min="0" max="80" required>
      </div>
    </div>
  `,
  button_label: 'Continue',
  data: { label: LABEL_DEMOGRAPHICS }
};

/******************************
 * FOLLOW-UP QUESTIONS
 ******************************/

let followupTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <div class="page-wrapper">
      <h2 class="page-heading">Follow-up Questions</h2>
      <div class="page-content">
        <p>Please answer the following question about your experience in this study. Your response is optional.</p>
      </div>
    </div>
  `,
  html: `
    <div class="page-content">
      <div class="demo-section">
        <label class="demo-label" for="suspicion_unusual">
          Did anything about the study seem unusual or suspicious to you? If yes, please describe.
        </label>
        <textarea
          id="suspicion_unusual"
          name="suspicion_unusual"
          rows="4"
          style="width:100%; padding:6px; box-sizing:border-box; border-radius:${UI.BORDER_RADIUS}; border:1px solid ${COLOR_BORDER};"
        ></textarea>
      </div>
    </div>
  `,
  button_label: 'Continue',
  data: { label: LABEL_FOLLOWUP }
};

/******************************
 * DEBRIEF PAGE
 ******************************/

let debriefTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h2 class="page-heading">Debrief</h2>
      <div class="page-content">
        <p>
          Thank you for participating in this study.
        </p>
        <p>
          We would like to inform you that this study involved a form of deception.
          Specifically, you were not actually matched with other players in real time.
          Instead, you interacted with two pre-programmed algorithms.
        </p>
        <p>
          The purpose of this setup was to examine how people make decisions
          when they believe they are interacting with others. We used computer algorithms
          to ensure that all participants experienced the same conditions.
        </p>
        <p>
          In the game, the other "players" were programmed to transfer a total of $0.20 to you.
          Regardless of how much you chose to give, we are compensating you with both this
          $0.20 and the full $0.40 endowment you initially had—that is, a total bonus of $0.60.
          This ensures that no participant is financially disadvantaged by the experimental design.
        </p>
        <p>
        If you wish to have your data removed from the study now that you have been debriefed about the deception use, contact the Protocol Director, Jonah Rösemeier (<a href="mailto:jrosem@stanford.edu">jrosem@stanford.edu</a>).
        </p>
      </div>
    </div>
  `,
  choices: [BTN_LABEL_DEBRIEF_UNDERSTAND],
  data: { label: LABEL_DEBRIEF }
};

/******************************
 * FINAL SUBMISSION
 ******************************/

let submitTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h2 class="page-heading">Submit Your Responses</h2>
      <div class="page-content">
        <p>Please click the button below to be redirected back to Prolific and register your submission.</p>
      </div>
    </div>
  `,
  choices: [BTN_LABEL_SUBMIT],
  on_finish: () => {
    let allData = jsPsych.data.get().json();
    fetch(DATA_SAVE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ participant: prolificPID, data: allData })
    }).then(() => {
      window.location.href = PROLIFIC_COMPLETION_URL;
    });
  }
};

/******************************
 * DATAPIPE
 ******************************/

const subjectID = jsPsych.randomization.randomID(10);
const filename = `${subjectID}.json`;

const save_data = {
  type: jsPsychPipe,
  action: "save",
  experimentID: "cEvNcogt2UWQ",
  filename: filename,
  data_string: () => jsPsych.data.get().json()
};


/******************************
 * FULL TIMELINE
 ******************************/

let fullTimeline = [
  consentTrial,
  gameInstructions,
  searchPlayersScreen,
  searchingScreen,
  waitingRoom,
  giverTimeline,
  receiverTimeline,
  demographicsTrial,
  followupTrial,
  debriefTrial,
  submitTrial,
  save_data
];

jsPsych.run(fullTimeline);
