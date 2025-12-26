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

/** LABEL CONSTANTS **/
const LABEL_GAME_INSTRUCTIONS = 'game_instructions';

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
    window.location.href = PROLIFIC_COMPLETION_URL;
  }
};

/******************************
 * DATAPIPE
 ******************************/

let experimentID = "uEmvSxh27hAe";

let filename = `${prolificPID}.json`;

let save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: experimentID,
  filename: filename,
  data_string: () => jsPsych.data.get().json()
};


/******************************
 * FULL TIMELINE
 ******************************/

let fullTimeline = [
  gameInstructions,
  submitTrial,
  save_data,
];

jsPsych.run(fullTimeline);
