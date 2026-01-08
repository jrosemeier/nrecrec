/******************************
 * IMPORTANT VARIABLES TO CHANGE
 ******************************/

/** Sampling of Givers vs. Receivers **/
const N_GIVERS = 175;
const N_RECEIVERS = 175;
const P_GIVER = N_GIVERS / (N_GIVERS + N_RECEIVERS);

/** Algorithm Transfer Distribution **/
const ALGO_TRANSFER_COUNTS = {
  0: 1,
  10: 1,
  20: 1,
  30: 1,
  40: 1
};

/** Datapipe Experiment ID **/
const DATAPIPE_EXPERIMENTID = '0xm72VxaFUwi';

/** Prolific Completion URL **/
const PROLIFIC_COMPLETION_URL =
  "https://app.prolific.com/submissions/complete?cc=C11R15QQ";

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

/** PERSON COLORS (for instruction demo avatars) **/
const VIS_PLAYER_A_COLOR = '#8ecae6';
const VIS_PLAYER_B_COLOR = '#ffb703';
const VIS_PLAYER_C_COLOR = '#05b832ff';

/** VISUAL CONSTANTS (SVG) **/
const VIS_BORDER_COLOR = COLOR_BORDER;
const VIS_BG_COLOR = COLOR_WAITING_BG;
const VIS_ARROW_COLOR = '#111';
const VIS_FONT_SIZE_SMALL = 10;
const VIS_FONT_SIZE_MED = 11;
const VIS_FONT_SIZE_LARGE = 12;

/** GAME CONSTANTS (¢; 10¢ increments) **/
const ENDOWMENT_CENTS = 40;
const TRANSFER_MIN_CENTS = 0;
const TRANSFER_MAX_CENTS = ENDOWMENT_CENTS;
const TRANSFER_STEP_CENTS = 10;

/** TIMING CONSTANTS (ms) **/
const SEARCH_DURATION = 10000;
const SEARCH_DOTS_INTERVAL = 350;
const WAITING_DOTS_INTERVAL = 350;
const FINAL_DOTS_INTERVAL = 350;
const MAX_WAITING_TIME = 120000;

const CARD_LOCK_IN_DELAY = 80;
const CONNECT_P1_DELAY = 0;
const CONNECT_P2_DELAY = 700;
const LAST_PLAYER_CONNECT_DELAY = 27600;

const READY_FIRST_PLAYER_ID = 'p3';
const READY_SECOND_PLAYER_ID = 'p1';
const READY_FIRST_DELAY = 2700;
const READY_SECOND_DELAY = 4300;

const DECISION_DELAY_SINGLE_GIVER = 43800;
const DECISION_DELAY_FIRST_OF_TWO_GIVERS = 27700;
const DECISION_DELAY_SECOND_OF_TWO_GIVERS = DECISION_DELAY_SINGLE_GIVER;

const POPUP_SHOW_DELAY = 1000;
const TRIAL_END_DELAY = 1000;
const DISCONNECT_SHOW_DELAY = 4000;
const DISCONNECT_FINISH_DELAY = 4000;
const FINAL_LOADING_DURATION = 10000;

/** BETWEEN-PAGE BUFFER **/
const INTER_PAGE_BUFFER = 100;

/** STUTTER BAR CONSTANTS **/
const STUTTER_STEP_MIN_DELAY = 40;
const STUTTER_STEP_MAX_EXTRA_DELAY = 260;
const STUTTER_MAX_JUMP = 10;

/** LABEL CONSTANTS **/
const LABEL_CONSENT = 'consent';
const LABEL_GAME_INSTRUCTIONS = 'game_instructions';
const LABEL_COMPREHENSION = 'comprehension_check';
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

/** TEXT CONSTANTS **/
const BTN_LABEL_UNDERSTAND_GAME = 'I understand the game';
const BTN_LABEL_DEBRIEF_UNDERSTAND = 'I understand';
const BTN_LABEL_SUBMIT = 'Return to Prolific';
const BTN_LABEL_SEARCH_PLAYERS = 'Search for other players';
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

/******************************
 * GLOBAL STYLE INJECTION
 ******************************/

(function injectGlobalStyles() {
  let style = document.createElement('style');
  style.innerHTML = `
    body {
      font-family: ${UI.FONT_FAMILY};
      font-size: ${UI.BASE_FONT_SIZE};
      color: #111;
    }

    #jspsych-html-button-response-btngroup {
      margin-top: ${UI.BUTTON_GROUP_MARGIN_TOP};
      margin-bottom: ${UI.BUTTON_GROUP_MARGIN_BOTTOM};
    }

    #jspsych-survey-html-form .jspsych-btn {
      margin-top: ${UI.BUTTON_GROUP_MARGIN_TOP};
      margin-bottom: ${UI.BUTTON_GROUP_MARGIN_BOTTOM};
    }

    .jspsych-display-element {
      padding-bottom: 5em;
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

    .section-heading {
      margin-top: 1.5em;
      margin-bottom: 1em;
    }

    .sub-section-heading {
      text-indent: 1em;
      margin-top: 0em;
      margin-bottom: 0em;
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

    .callout {
      max-width: calc(760px - 2em);
      margin: 0.85em auto;
      padding: 0.95em 1.15em;
      border: 1px solid ${COLOR_BORDER};
      border-radius: ${UI.BORDER_RADIUS};
      background: #fff;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    .callout-title {
      text-align: center;
      font-weight: 900;
      margin: 0 0 0.55em 0;
    }

    .callout ul {
      margin: 0.25em 0 0 1.15em;
    }

    .center-actions {
      text-align: center;
      margin-top: 1.25em;
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
      font-weight: 700;
      display: block;
      margin-bottom: 0.35em;
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

    textarea {
      font-family: ${UI.FONT_FAMILY};
      font-size: ${UI.BASE_FONT_SIZE};
    }

    .jspsych-form-warning {
      font-size: 0.9em;
    }

    .vis-wrap {
      text-align: center;
      margin: 0.85em 0 1.05em 0;
    }

    .practice-wrap {
      max-width: 760px;
      margin: 0.9em auto 1.25em auto;
      padding: 1.0em 1.15em;
      border: 1px solid ${COLOR_BORDER};
      border-radius: ${UI.BORDER_RADIUS};
      background: #fff;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    .practice-section {
      margin: 0.7em 0 1.2em 0;
    }

    .practice-section-title {
      text-align: center;
      font-weight: 900;
      margin: 0.25em 0 0.75em 0;
      font-size: 1.17em;
    }

    .practice-controls {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.45em;
      max-width: 560px;
      margin: 0 auto 0.75em auto;
    }

    .control-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.35em;
      align-items: center;
      justify-items: center;
    }

    .control-label {
      font-weight: 900;
      text-align: center;
      line-height: 1.25;
    }

    .amount-inline {
      display: inline-block;
      min-width: 54px;
      text-align: center;
      font-weight: 900;
      padding: 0 8px;
      border-radius: 10px;
      border: 1px solid ${COLOR_BORDER};
      background: #fff;
      margin: 0 4px;
      color: #111;
    }

    .amount-inline.pending {
      color: ${COLOR_SUBTEXT};
      border-style: dashed;
    }

    input[type="range"] { width: 100%; }

    input.range-inactive {
      opacity: 0.55;
    }
    input.range-inactive::-webkit-slider-thumb { opacity: 0; }
    input.range-inactive::-moz-range-thumb { opacity: 0; }

    .slider-ends {
      display: flex;
      justify-content: space-between;
      font-weight: 800;
      color: ${COLOR_SUBTEXT};
      margin-top: 0.1em;
      user-select: none;
    }

    .action-hint {
      text-align: center;
      font-weight: 900;
      margin-top: 0.15em;
      user-select: none;
      display: inline-block;
      padding: 0.15em 0.75em;
      border-radius: 999px;
      border: 1px solid #f2b8b8;
      background: #ffecec;
      color: #8b1b1b;
    }

    .practice-results-grid {
      max-width: 620px;
      margin: 0.65em auto 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.6em;
      text-align: center;
      font-size: 1em;
    }

    .result-item {
      padding: 0.55em 0.45em;
      border: 1px solid ${COLOR_BORDER};
      border-radius: ${UI.BORDER_RADIUS};
      background: #fff;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
      line-height: 1.25;
      font-weight: 700;
    }

    .result-item strong {
      font-weight: 900;
    }

    .hint {
      max-width: 720px;
      margin: 0 auto 0.7em auto;
      text-align: center;
    }

    .radio-block {
      max-width: 720px;
      margin: 0.85em auto;
      border: 1px solid ${COLOR_BORDER};
      border-radius: ${UI.BORDER_RADIUS};
      background: #fff;
      padding: 0.85em 1.05em;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    .radio-q {
      font-weight: 900;
      margin: 0 0 0.5em 0;
    }

    .radio-block label {
      display: block;
      margin: 0.25em 0;
    }
  `;
  document.head.appendChild(style);
})();

/******************************
 * HELPER FUNCTIONS
 ******************************/

function getRandomCondition() {
  return Math.random() < P_GIVER ? "giver" : "receiver";
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

function statusGreen(text) {
  return `<span class="status-green">${text}</span>`;
}

function statusRed(text) {
  return `<span class="status-red">${text}</span>`;
}

function clampToStep(value, step) {
  let v = parseInt(value, 10);
  if (!Number.isFinite(v)) v = 0;
  let snapped = Math.round(v / step) * step;
  return Math.max(TRANSFER_MIN_CENTS, Math.min(TRANSFER_MAX_CENTS, snapped));
}

function parseSurveyResponses(data) {
  if (data && typeof data.responses === 'string') {
    try {
      return JSON.parse(data.responses);
    } catch (e) {
      return {};
    }
  }
  if (data && data.response && typeof data.response === 'object') return data.response;
  return {};
}

function formatNA() {
  return 'N/A';
}

function calloutBox(title, innerHtml) {
  return `
    <div class="callout">
      ${title ? `<div class="callout-title">${title}</div>` : ''}
      ${innerHtml}
    </div>
  `;
}

/**
 * Adds a 1s buffer between every page.
 */
function applyPostTrialGapToTimeline(timelineOrNode) {
  function visit(node) {
    if (!node) return;

    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }

    if (typeof node !== 'object') return;

    if (node.type && node.post_trial_gap == null) {
      node.post_trial_gap = INTER_PAGE_BUFFER;
    }

    if (Array.isArray(node.timeline)) {
      node.timeline.forEach(visit);
    }
  }

  visit(timelineOrNode);
  return timelineOrNode;
}

function formatCents(cents) {
  let v = Number(cents);
  if (!Number.isFinite(v)) return formatNA();
  return `${v}¢`;
}

function buildCentsOptions(minCents, maxCents, stepCents) {
  let out = `<option value="" disabled selected>Select one</option>`;
  for (let v = minCents; v <= maxCents; v += stepCents) {
    out += `<option value="${v}">${v}¢</option>`;
  }
  return out;
}

function readSelectedCents(selectEl) {
  if (!selectEl) return null;
  let raw = (selectEl.value || '').trim();
  if (!raw) return null;
  let v = parseInt(raw, 10);
  return Number.isFinite(v) ? v : null;
}

function isNonEmptyText(textareaEl) {
  if (!textareaEl) return false;
  return (textareaEl.value || '').trim().length > 0;
}

function drawFromCounts(countsObj) {
  let entries = Object.entries(countsObj)
    .map(([k, w]) => [parseInt(k, 10), parseInt(w, 10)])
    .filter(([k, w]) => Number.isFinite(k) && Number.isFinite(w) && w > 0);

  if (entries.length === 0) return 0;

  let total = entries.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * total;
  for (let [k, w] of entries) {
    r -= w;
    if (r <= 0) return k;
  }
  return entries[entries.length - 1][0];
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
let prolificPID = urlParams.get('PROLIFIC_PID') || `anon_${crypto.randomUUID()}_${Date.now()}`;
let studyID = urlParams.get('STUDY_ID');
let sessionID = urlParams.get('SESSION_ID');

/******************************
 * CONDITION ASSIGNMENT
 ******************************/

let condition = getRandomCondition();

/******************************
 * ALGO DRAWS (per-participan)
 ******************************/

let algoR1TransferCents = drawFromCounts(ALGO_TRANSFER_COUNTS);

let algoR2Giver1TransferCents = drawFromCounts(ALGO_TRANSFER_COUNTS);
let algoR2Giver2TransferCents = drawFromCounts(ALGO_TRANSFER_COUNTS);
let algoR2TotalToR1GiverCents = algoR2Giver1TransferCents + algoR2Giver2TransferCents;

let algoR2OtherGiverTransferCents = drawFromCounts(ALGO_TRANSFER_COUNTS);

/******************************
 * COMPREHENSION TRACKING (global; attached to data)
 ******************************/

let comprehensionIncorrectCount = 0;
let comprehensionAttempt = 0;
let comprehensionPass = false;

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

    data.comprehensionIncorrectCount = comprehensionIncorrectCount;
    data.comprehensionAttempt = comprehensionAttempt;

    data.algoR1TransferCents = algoR1TransferCents;
    data.algoR2Giver1TransferCents = algoR2Giver1TransferCents;
    data.algoR2Giver2TransferCents = algoR2Giver2TransferCents;
    data.algoR2TotalToR1GiverCents = algoR2TotalToR1GiverCents;
    data.algoR2OtherGiverTransferCents = algoR2OtherGiverTransferCents;

    data.algoTransferCounts = JSON.stringify(ALGO_TRANSFER_COUNTS);
  }
});

/******************************
 * RELOAD / NAVIGATION PROTECTION (disabled at final redirect)
 ******************************/

let allowExit = false;

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
      if (allowExit) return;

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
    if (allowExit) return;
    e.preventDefault();
  });

  window.addEventListener('beforeunload', e => {
    if (allowExit) return;
    e.preventDefault();
    e.returnValue = '';
    showReloadAlert();
  });
})();

/******************************
 * INSTRUCTION VISUALS (avatars)
 ******************************/

function buildAvatarDefs() {
  return `
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L8,4 L0,8 Z" fill="${VIS_ARROW_COLOR}" />
      </marker>

      <symbol id="avatar" viewBox="0 0 64 64">
        <ellipse cx="32" cy="18" rx="11" ry="12" fill="currentColor" stroke="${VIS_ARROW_COLOR}" stroke-width="1.3"></ellipse>
        <path d="M14 56
                 Q16 39 32 36
                 Q48 39 50 56
                 Z"
              fill="currentColor" stroke="${VIS_ARROW_COLOR}" stroke-width="1.3" stroke-linejoin="round"></path>
      </symbol>
    </defs>
  `;
}

function svgPlayer(x, y, label, role, color) {
  let iconX = x - 28;
  let iconY = y - 32;
  return `
    <g transform="translate(${iconX},${iconY})" style="color:${color};">
      <use href="#avatar" width="56" height="56"></use>
    </g>
    <text x="${x}" y="${y + 36}" text-anchor="middle" font-size="${VIS_FONT_SIZE_LARGE}" font-weight="900" fill="#111">${label}</text>
    <text x="${x}" y="${y + 50}" text-anchor="middle" font-size="${VIS_FONT_SIZE_MED}" font-weight="800" fill="#111">${role}</text>
  `;
}

/******************************
 * INSTRUCTIONS (with practice demo)
 ******************************/

function buildPracticeDemoHtml() {
  const round1 = `
    <div class="practice-section">
      <div class="practice-section-title">Round 1</div>

      <div class="practice-controls">
        <div class="control-row">
          <div class="control-label">
            Player A transfers <span id="practiceXAmount" class="amount-inline pending">${formatNA()}</span>
          </div>
        </div>

        <input id="practiceX" class="range-inactive" type="range"
               min="${TRANSFER_MIN_CENTS}" max="${TRANSFER_MAX_CENTS}"
               step="${TRANSFER_STEP_CENTS}" value="0" />
        <div class="slider-ends"><span>0¢</span><span>40¢</span></div>
        <div class="action-hint" id="practiceXHint">Click and drag to select an amount.</div>
      </div>

      <div class="vis-wrap" id="practiceR1Visual"></div>

      <div class="practice-results-grid">
        <div class="result-item">Player A keeps<br><strong id="practiceR1KeepA">${formatNA()}</strong></div>
        <div class="result-item">Player B receives<br><strong id="practiceR1GetB">${formatNA()}</strong></div>
        <div class="result-item">Player C receives<br><strong id="practiceR1GetC">${formatNA()}</strong></div>
      </div>
    </div>
  `;

  const round2 = `
    <div class="practice-section" style="margin-bottom:0;">
      <div class="practice-section-title">Round 2</div>

      <div class="practice-controls">
        <div class="control-row">
          <div class="control-label">
            Player B transfers <span id="practiceYAmount" class="amount-inline pending">${formatNA()}</span>
          </div>
        </div>

        <input id="practiceY" class="range-inactive" type="range"
               min="${TRANSFER_MIN_CENTS}" max="${TRANSFER_MAX_CENTS}"
               step="${TRANSFER_STEP_CENTS}" value="0" />
        <div class="slider-ends"><span>0¢</span><span>40¢</span></div>
        <div class="action-hint" id="practiceYHint">Click and drag to select an amount.</div>

        <div class="control-row" style="margin-top:0.55em;">
          <div class="control-label">
            Player C transfers <span id="practiceZAmount" class="amount-inline pending">${formatNA()}</span>
          </div>
        </div>

        <input id="practiceZ" class="range-inactive" type="range"
               min="${TRANSFER_MIN_CENTS}" max="${TRANSFER_MAX_CENTS}"
               step="${TRANSFER_STEP_CENTS}" value="0" />
        <div class="slider-ends"><span>0¢</span><span>40¢</span></div>
        <div class="action-hint" id="practiceZHint">Click and drag to select an amount.</div>
      </div>

      <div class="vis-wrap" id="practiceR2Visual"></div>

      <div class="practice-results-grid">
        <div class="result-item">Player A receives<br><strong id="practiceR2GetA">${formatNA()}</strong></div>
        <div class="result-item">Player B keeps<br><strong id="practiceR2KeepB">${formatNA()}</strong></div>
        <div class="result-item">Player C keeps<br><strong id="practiceR2KeepC">${formatNA()}</strong></div>
      </div>
    </div>
  `;

  return `
    <div class="callout">${round1}</div>
    <div class="callout">${round2}</div>
  `;
}

function estimateBoxWidth(text, charW, padX, minW, maxW) {
  let w = Math.ceil(text.length * charW + padX * 2);
  w = Math.max(minW, w);
  w = Math.min(maxW, w);
  return w;
}

function svgArrow(x1, y1, x2, y2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${VIS_ARROW_COLOR}" stroke-width="2.3" marker-end="url(#arrow)"></line>`;
}

function svgPill(cx, cy, text) {
  let w = estimateBoxWidth(text, 6.1, 10, 44, 280);
  let h = 24;
  let rx = 10;
  return `
    <g>
      <rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="${rx}" ry="${rx}" fill="#fff" stroke="${COLOR_BORDER}" />
      <text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="middle" font-size="${VIS_FONT_SIZE_MED}" font-weight="900" fill="#111">${text}</text>
    </g>
  `;
}

function svgCenterTransferBox(cx, cy, text, w) {
  let h = 26;
  let rx = 10;
  return `
    <g>
      <rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="${rx}" ry="${rx}" fill="#fff" stroke="#111" stroke-width="1.35" />
      <text x="${cx}" y="${cy + 1}" text-anchor="middle" dominant-baseline="middle" font-size="${VIS_FONT_SIZE_MED}" font-weight="900" fill="#111">${text}</text>
    </g>
  `;
}

function buildPracticeRound1Visual(xCents) {
  let W = 660;
  let H = 420;

  let a = { x: 120, y: 190 };
  let b = { x: 540, y: 125 };
  let c = { x: 540, y: 275 };

  let center = { x: 330, y: 190 };

  let hasX = xCents !== null;
  let xText = hasX ? `${xCents}¢` : formatNA();
  let transferText = `Player A transfers: ${xText}`;

  let boxW = estimateBoxWidth(transferText, 6.15, 14, 160, 310);
  let leftEdge = center.x - boxW / 2;
  let rightEdge = center.x + boxW / 2;

  let aRight = a.x + 28;
  let bLeft = b.x - 28;
  let cLeft = c.x - 28;

  let aToBox = svgArrow(aRight + 10, a.y, leftEdge, center.y);
  let boxToB = svgArrow(rightEdge, center.y, bLeft - 10, b.y);
  let boxToC = svgArrow(rightEdge, center.y, cLeft - 10, c.y);

  let keepA = hasX ? `${ENDOWMENT_CENTS - xCents}¢` : formatNA();
  let pillA = svgPill(a.x, a.y + 80, `Player A keeps: ${keepA}`);
  let pillB = svgPill(b.x, b.y - 54, `Player B receives: ${xText}`);
  let pillC = svgPill(c.x, c.y + 80, `Player C receives: ${xText}`);

  return `
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="max-width:100%; border:1px solid ${VIS_BORDER_COLOR}; background:${VIS_BG_COLOR}; border-radius:${UI.BORDER_RADIUS};">
      ${buildAvatarDefs()}

      ${svgPlayer(a.x, a.y, 'Player A', 'Giver', VIS_PLAYER_A_COLOR)}
      ${svgPlayer(b.x, b.y, 'Player B', 'Receiver 1', VIS_PLAYER_B_COLOR)}
      ${svgPlayer(c.x, c.y, 'Player C', 'Receiver 2', VIS_PLAYER_C_COLOR)}

      ${aToBox}
      ${boxToB}
      ${boxToC}

      ${svgCenterTransferBox(center.x, center.y, transferText, boxW)}

      ${pillA}
      ${pillB}
      ${pillC}
    </svg>
  `;
}

function buildPracticeRound2Visual(yCents, zCents) {
  let W = 660;
  let H = 420;

  let a = { x: 120, y: 190 };
  let b = { x: 540, y: 125 };
  let c = { x: 540, y: 275 };

  let hasY = yCents !== null;
  let hasZ = zCents !== null;

  let yText = hasY ? `${yCents}¢` : formatNA();
  let zText = hasZ ? `${zCents}¢` : formatNA();

  let aRight = a.x + 28;
  let bLeft = b.x - 28;
  let cLeft = c.x - 28;

  let endAX = aRight + 22;
  let bEnd = { x: endAX, y: a.y - 14 };
  let cEnd = { x: endAX, y: a.y + 14 };

  let bToA = svgArrow(bLeft - 10, b.y, bEnd.x, bEnd.y);
  let cToA = svgArrow(cLeft - 10, c.y, cEnd.x, cEnd.y);

  let pillH = 24;
  let gap = 6;

  function mid(x1, y1, x2, y2) {
    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
  }

  let midB = mid(bLeft - 10, b.y, bEnd.x, bEnd.y);
  let midC = mid(cLeft - 10, c.y, cEnd.x, cEnd.y);

  let pillBTransfer = svgPill(
    midB.x,
    midB.y - (pillH / 2 + gap),
    `Player B transfers: ${yText}`
  );
  let pillCTransfer = svgPill(
    midC.x,
    midC.y + (pillH / 2 + gap),
    `Player C transfers: ${zText}`
  );

  let keepB = hasY ? `${ENDOWMENT_CENTS - yCents}¢` : formatNA();
  let keepC = hasZ ? `${ENDOWMENT_CENTS - zCents}¢` : formatNA();
  let totalA = hasY && hasZ ? `${yCents + zCents}¢` : formatNA();

  let pillBKeep = svgPill(b.x, b.y - 54, `Player B keeps: ${keepB}`);
  let pillCKeep = svgPill(c.x, c.y + 80, `Player C keeps: ${keepC}`);
  let pillARecv = svgPill(a.x, a.y + 80, `Player A receives: ${totalA}`);

  return `
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="max-width:100%; border:1px solid ${VIS_BORDER_COLOR}; background:${VIS_BG_COLOR}; border-radius:${UI.BORDER_RADIUS};">
      ${buildAvatarDefs()}

      ${svgPlayer(a.x, a.y, 'Player A', 'Receiver', VIS_PLAYER_A_COLOR)}
      ${svgPlayer(b.x, b.y, 'Player B', 'Giver 1', VIS_PLAYER_B_COLOR)}
      ${svgPlayer(c.x, c.y, 'Player C', 'Giver 2', VIS_PLAYER_C_COLOR)}

      ${bToA}
      ${cToA}

      ${pillBTransfer}
      ${pillCTransfer}

      ${pillBKeep}
      ${pillCKeep}
      ${pillARecv}
    </svg>
  `;
}

function initNeutralSlider(sliderEl, hintEl, onActivated) {
  if (!sliderEl) return;

  sliderEl.dataset.activated = 'false';

  function activateOnce() {
    if (sliderEl.dataset.activated === 'true') return;
    sliderEl.dataset.activated = 'true';
    sliderEl.classList.remove('range-inactive');
    if (hintEl) hintEl.style.display = 'none';
    if (onActivated) onActivated();
  }

  sliderEl.addEventListener('pointerdown', activateOnce);
  sliderEl.addEventListener('mousedown', activateOnce);
  sliderEl.addEventListener('touchstart', activateOnce);
}

function initPracticeDemo() {
  function el(id) {
    return document.getElementById(id);
  }
  function setText(node, text) {
    if (node) node.textContent = text;
  }
  function setPending(spanEl, isPending) {
    if (!spanEl) return;
    spanEl.classList.toggle('pending', !!isPending);
  }

  function initAmountSlider(sliderId, amountSpanId, hintId) {
    let sliderEl = el(sliderId);
    let amountEl = el(amountSpanId);
    let hintEl = el(hintId);
    let touched = false;

    if (!sliderEl) return { sliderEl, amountEl, hintEl, get: () => null };

    initNeutralSlider(sliderEl, hintEl, () => {
      touched = true;
      render();
    });

    sliderEl.addEventListener('input', () => {
      touched = true;
      render();
    });

    return {
      sliderEl,
      amountEl,
      hintEl,
      get: () => {
        if (!touched) return null;
        let snapped = clampToStep(sliderEl.value, TRANSFER_STEP_CENTS);
        if (parseInt(sliderEl.value, 10) !== snapped) sliderEl.value = snapped;
        return snapped;
      }
    };
  }

  let sx = initAmountSlider('practiceX', 'practiceXAmount', 'practiceXHint');
  let sy = initAmountSlider('practiceY', 'practiceYAmount', 'practiceYHint');
  let sz = initAmountSlider('practiceZ', 'practiceZAmount', 'practiceZHint');

  let r1Visual = el('practiceR1Visual');
  let r2Visual = el('practiceR2Visual');

  let r1KeepA = el('practiceR1KeepA');
  let r1GetB = el('practiceR1GetB');
  let r1GetC = el('practiceR1GetC');

  let r2KeepB = el('practiceR2KeepB');
  let r2KeepC = el('practiceR2KeepC');
  let r2GetA = el('practiceR2GetA');

  function render() {
    let x = sx.get();
    let y = sy.get();
    let z = sz.get();

    setText(sx.amountEl, x === null ? formatNA() : `${x}¢`);
    setText(sy.amountEl, y === null ? formatNA() : `${y}¢`);
    setText(sz.amountEl, z === null ? formatNA() : `${z}¢`);

    setPending(sx.amountEl, x === null);
    setPending(sy.amountEl, y === null);
    setPending(sz.amountEl, z === null);

    setText(r1KeepA, x === null ? formatNA() : `${ENDOWMENT_CENTS - x}¢`);
    setText(r1GetB, x === null ? formatNA() : `${x}¢`);
    setText(r1GetC, x === null ? formatNA() : `${x}¢`);

    setText(r2KeepB, y === null ? formatNA() : `${ENDOWMENT_CENTS - y}¢`);
    setText(r2KeepC, z === null ? formatNA() : `${ENDOWMENT_CENTS - z}¢`);
    setText(r2GetA, y !== null && z !== null ? `${y + z}¢` : formatNA());

    if (r1Visual) r1Visual.innerHTML = buildPracticeRound1Visual(x);
    if (r2Visual) r2Visual.innerHTML = buildPracticeRound2Visual(y, z);
  }

  render();
}

function buildGameInstructionsHtml() {
  let r1PayoffBox = `
    <div class="callout">
      <p>
        Transfers in Round 1 affect Players' bonuses according to the following payoff rules:
      </p>  
      <ul>
        <li>Giver keeps: <strong>40¢ − transfer by Giver</strong></li>
        <li>Receiver 1 receives: <strong>transfer by Giver</strong></li>
        <li>Receiver 2 receives: <strong>transfer by Giver</strong></li>
      </ul>
      <p>
        <strong>Important to note</strong>: The Giver <strong>transfers the amount once</strong>, but each receiver receives that <strong>full amount (it is not split)</strong>.
      </p>
    </div>
  `;

  let r2PayoffBox = `
    <div class="callout">
      <p>
        Transfers in Round 2 affect Players' bonuses according to the following payoff rules:
      </p> 
      <ul>
        <li>Giver 1 (former Receiver 1) keeps: <strong>40¢ − transfer by Giver 1</strong></li>
        <li>Giver 2 (former Receiver 2) keeps: <strong>40¢ − transfer by Giver 2</strong></li>
        <li>Receiver (former Giver) receives: <strong>transfer by Giver 1 + transfer by Giver 2</strong></li>
      </ul>
      <p>
        <strong>Important to note</strong>: The Givers can transfer <strong>only from their Round 2 40¢ bonus</strong>, not from bonus received in Round 1.
      </p>
    </div>
  `;

  return `
    <div class="page-wrapper">
      <h1 class="page-heading">Decision Game Rules</h1>

      <div class="page-content">

        <h2 class="section-heading">Game overview (3 players, 2 rounds)</h2>
        <ul>
          <li>You will play with <strong>2 other participants</strong> in <strong>real time</strong> for <strong>real bonus money</strong>.</li>
          <li>The game has <strong>2 rounds</strong>. In each round, one or more “Givers” decide how much of a <strong>40¢ bonus to transfer</strong>.</li>
          <li>Receivers <strong>never decide anything</strong>—they only receive what the Giver(s) transfer.</li>
        </ul>


        <h2 class="section-heading">Round 1 (1 Giver, 2 Receivers)</h2>

        <h3 class="sub-section-heading">Roles</h3>
        <ul>
          <li>1 player is <strong>randomly chosen as the Round 1 Giver</strong>.</li>
          <li>The <strong>other 2 players are Round 1 Receivers</strong>.</li>
        </ul>

        <h3 class="sub-section-heading">Decision</h3>
        <ul>
          <li>The Giver gets a <strong>40¢ bonus</strong> and chooses to <strong>transfer 0¢, 10¢, 20¢, 30¢, or 40¢ to the two Receivers</strong>.</li>
          <li>Each Receiver will be then informed of how much the Giver transferred.</li>
        </ul>

        <h3 class="sub-section-heading">Payoffs</h3>
        ${r1PayoffBox}


        <h2 class="section-heading">Round 2 (2 Givers, 1 Receiver)</h2>

        <h3 class="sub-section-heading">Role switch</h3>
        <ul>
          <li>The Round 1 Receivers become the <strong>Round 2 Givers</strong>.</li>
          <li>The Round 1 Giver becomes the <strong>Round 2 Receiver</strong>.</li>
        </ul>

        <h3 class="sub-section-heading">Decisions</h3>
        <ul>
          <li><strong>Each</strong> Round 2 Giver gets a <strong>40¢ bonus</strong> and chooses to <strong>transfer 0¢, 10¢, 20¢, 30¢, or 40¢ to the Receiver</strong>.</li>
          <li>Each <strong>Giver decides independently</strong> and is never told the other Giver’s choice at any point.</li>
          <li>The Receiver will then be informed of how much each Giver <strong>individually transferred</strong>.</li>
        </ul>

        <h3 class="sub-section-heading">Payoffs</h3>
        ${r2PayoffBox}


        <h2 class="section-heading">Demo</h2>
        <p>
          To better understand how the game works, please adjust the transfers in the below examples.
        </p>
        ${buildPracticeDemoHtml()}

      </div>
    </div>
  `;
}

/******************************
 * COMPREHENSION CHECK
 ******************************/

function buildComprehensionHtml() {
  return `
    <div class="page-wrapper">
      <h1 class="page-heading">Comprehension Check</h1>
      <div class="page-content">
        <div class="hint">Please answer based on the rules you just read.</div>

        <div class="radio-block">
          <div class="radio-q">1) In Round 1, the amount the Giver transfers is given in full to each Receiver and not split between them.</div>
          <label><input name="q1" type="radio" value="true" required> True</label>
          <label><input name="q1" type="radio" value="false" required> False</label>
        </div>
        
        <div class="radio-block">
          <div class="radio-q">2) In Round 1, the amount the Giver transfers is deducted twice from their bonus.</div>
          <label><input name="q2" type="radio" value="true" required> True</label>
          <label><input name="q2" type="radio" value="false" required> False</label>
        </div>

        <div class="radio-block">
          <div class="radio-q">3) In Round 2, does a respective Giver at any point learn what the other Giver transferred?</div>
          <label><input name="q3" type="radio" value="yes" required> Yes</label>
          <label><input name="q3" type="radio" value="no" required> No</label>
        </div>

        <div class="radio-block">
          <div class="radio-q">4) In Round 2, a Giver can transfer money that they received in Round 1.</div>
          <label><input name="q4" type="radio" value="true" required> True</label>
          <label><input name="q4" type="radio" value="false" required> False</label>
        </div>

        <div class="radio-block">
          <div class="radio-q">5) Which statement is correct for Round 2?</div>
          <label><input name="q5" type="radio" value="one" required> The Receiver’s bonus equals the transfer from only one Giver.</label>
          <label><input name="q5" type="radio" value="sum" required> The Receiver’s bonus equals the sum of what both Givers transfer.</label>
        </div>
      </div>
    </div>
  `;
}

function scoreComprehension(resp) {
  let ok1 = resp.q1 === 'true';
  let ok2 = resp.q2 === 'false';
  let ok3 = resp.q3 === 'no';
  let ok4 = resp.q4 === 'false';
  let ok5 = resp.q5 === 'sum';

  let nCorrect = [ok1, ok2, ok3, ok4, ok5].filter(Boolean).length;
  return { pass: nCorrect === 5, nCorrect: nCorrect };
}

/******************************
 * CONSENT
 ******************************/

let htmlConsent = `
  <div class="page-wrapper">
    <h1 class="page-heading">Interactive Decision Game</h1>
    <div class="page-content">
      <p>
        <strong>DESCRIPTION:</strong> You are invited to take part in a research study about how people make decisions. 
        In this study, you and other participants will simultaneously play a short decision-making game. 
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
      </p>
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
          <h1 class="page-heading">You Did Not Consent</h1>
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
 * INSTRUCTIONS + COMPREHENSION LOOP
 ******************************/

let instructionsTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: buildGameInstructionsHtml(),
  choices: [BTN_LABEL_UNDERSTAND_GAME],
  data: { label: LABEL_GAME_INSTRUCTIONS },
  on_load: () => {
    initPracticeDemo();
  }
};

let comprehensionCheck = {
  type: jsPsychSurveyHtmlForm,
  html: buildComprehensionHtml(),
  button_label: BTN_LABEL_CONTINUE,
  data: { label: LABEL_COMPREHENSION },
  on_finish: data => {
    comprehensionAttempt += 1;

    let resp = parseSurveyResponses(data);
    let scored = scoreComprehension(resp);
    comprehensionPass = scored.pass;

    if (!scored.pass) comprehensionIncorrectCount += 1;

    if (resp.q1 === 'true') {
      data.comp_q1 = "correct";
    } else if (resp.q1 === 'false') {
      data.comp_q1 = "incorrect";
    } else {
      data.comp_q1 = null;
    }

    if (resp.q2 === 'false') {
      data.comp_q2 = "correct";
    } else if (resp.q2 === 'true') {
      data.comp_q2 = "incorrect";
    } else {
      data.comp_q2 = null;
    }

    if (resp.q3 === 'no') {
      data.comp_q3 = "correct";
    } else if (resp.q3 === 'yes') {
      data.comp_q3 = "incorrect";
    } else {
      data.comp_q3 = null;
    }

    if (resp.q4 === 'false') {
      data.comp_q4 = "correct";
    } else if (resp.q4 === 'true') {
      data.comp_q4 = "incorrect";
    } else {
      data.comp_q4 = null;
    }

    if (resp.q5 === 'sum') {
      data.comp_q5 = "correct";
    } else if (resp.q5 === 'one') {
      data.comp_q5 = "incorrect";
    } else {
      data.comp_q5 = null;
    }

    data.comprehensionAttempt = comprehensionAttempt;
    data.comprehensionPass = scored.pass;
    data.comprehensionCorrect = scored.nCorrect;
    data.comprehensionIncorrectCount = comprehensionIncorrectCount;
  }
};

let comprehensionFeedback = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => {
    if (comprehensionPass) {
      return `
        <div class="page-wrapper">
          <h1 class="page-heading">${statusGreen('You correctly answered all comprehension questions.')}</h1>
          <div style="text-align:center;">
            <p>You can now continue to the game.</p>
          </div>
        </div>
      `;
    }

    return `
      <div class="page-wrapper">
        <h1 class="page-heading">${statusRed('You did not correctly answer all comprehension questions.')}</h1>
        <div style="text-align:center;">
          <p>Please reread the instructions and try again.</p>
        </div>
      </div>
    `;
  },
  choices: [BTN_LABEL_CONTINUE]
};

let instructionLoop = {
  timeline: [instructionsTrial, comprehensionCheck, comprehensionFeedback],
  loop_function: () => !comprehensionPass
};

/******************************
 * SEARCH FOR PLAYERS
 ******************************/

let searchPlayersScreen = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Search for other players</h1>
      <div class="page-content">
        <p>We will try to match you with <strong>two other players</strong> in <strong>real time</strong></p>
        <p>
          This process may take up to <strong>2 minutes</strong>. If two other players are not found within 2 minutes, 
          you will receive a Prolific completion code, and we will ask you to close this window and return to Prolific to get reimbursed.
        </p>
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
      <div style="text-align:center;">
        <h2 class="page-heading" style="margin-bottom:${UI.SEARCH_TITLE_MARGIN_BOTTOM};">
          Searching for a waiting room with other players
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
        <h1 class="waiting-title">${TEXT_WAITING_ROOM_TITLE}</h1>

        <p id="status-line" class="waiting-status-line">
          <span id="status-count"><strong>0 / 3</strong> players connected</span>
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
      statusCountEl.innerHTML = '<strong>1 / 3</strong> players connected';
    }, CONNECT_P1_DELAY);

    setTimeout(() => {
      p2El.innerHTML = `<span class="player-label">Player 2 (You):</span> ${statusGreen(TEXT_CONNECTED)}`;
      statusCountEl.innerHTML = '<strong>2 / 3</strong> players connected';
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
        statusCountEl.innerHTML = '<strong>3 / 3</strong> players connected';
        p3El.innerHTML = `<span class="player-label">Player 3:</span> ${statusGreen(TEXT_CONNECTED)}`;

        setTimeout(() => {
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
 * GAME PAGES
 ******************************/

/** GIVER CONDITION **/
let giverRound1TransferCents = null;

let giverRound1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Round 1</h1>
      <div class="page-content">
        ${calloutBox(
    null,
    `
            <p>
              In Round 1, you have been randomly assigned to be the <strong>Giver</strong>.
              The other two players are the <strong>Receivers</strong>.
            </p>
            <p>
              In this round, you receive a <strong>${formatCents(ENDOWMENT_CENTS)}</strong> bonus.
            </p>
          `
  )}

        <div class="callout" id="giver_r1_amount_callout">
          <div class="demo-section" style="margin-bottom:0.9em;">
            <label class="demo-label" for="giver_amount_select">
              How much of your bonus do you want to transfer to the Receivers?
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <select id="giver_amount_select">
              ${buildCentsOptions(TRANSFER_MIN_CENTS, TRANSFER_MAX_CENTS, TRANSFER_STEP_CENTS)}
            </select>
            <div
              id="giver_amount_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please select one of the allowed transfer amounts.
            </div>
          </div>

          <div class="center-actions">
            <button id="giver_confirm_btn" class="jspsych-btn" disabled>
              ${BTN_LABEL_CONTINUE}
            </button>
          </div>

          <div id="giver_amount_reason_wrap" style="display:none; margin-top:1.0em;">
            <label class="demo-label" for="giver_amount_reason">
              In 1–2 sentences, explain your reasoning.
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <textarea
              id="giver_amount_reason"
              rows="3"
              style="
                width:100%;
                padding:6px;
                box-sizing:border-box;
                border-radius:${UI.BORDER_RADIUS};
                border:1px solid ${COLOR_BORDER};
              "
            ></textarea>
            <div
              id="giver_amount_reason_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please provide a brief explanation.
            </div>
            <div class="center-actions" style="margin-top:0.75em;">
              <button id="giver_amount_reason_continue" class="jspsych-btn" disabled>
                ${BTN_LABEL_CONTINUE}
              </button>
            </div>
          </div>
        </div>

        <div id="giver_expect_callout" class="callout" style="display:none; margin-top:1.15em;">

          <div class="demo-section" style="margin-bottom:0.9em;">
            <label class="demo-label" for="giver_expect_total_select">
              In Round 2, how much do you think the current Receivers will transfer to you in total?
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <select id="giver_expect_total_select">
              ${buildCentsOptions(0, 80, 10)}
            </select>
            <div
              id="giver_expect_total_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please select one of the allowed amounts.
            </div>
          </div>

          <div class="center-actions">
            <button id="giver_expect_lock_btn" class="jspsych-btn" disabled>
              ${BTN_LABEL_CONTINUE}
            </button>
          </div>

          <div id="giver_expect_reason_wrap" style="display:none; margin-top:1.0em;">
            <label class="demo-label" for="giver_expect_reason">
              In 1–2 sentences, explain your reasoning.
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <textarea
              id="giver_expect_reason"
              rows="3"
              style="
                width:100%;
                padding:6px;
                box-sizing:border-box;
                border-radius:${UI.BORDER_RADIUS};
                border:1px solid ${COLOR_BORDER};
              "
            ></textarea>
            <div
              id="giver_expect_reason_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please provide a brief explanation.
            </div>
            <div class="center-actions" style="margin-top:0.75em;">
              <button id="giver_expect_finish_btn" class="jspsych-btn" disabled>
                ${BTN_LABEL_CONTINUE}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  choices: 'NO_KEYS',
  data: { label: LABEL_GIVER_R1 },
  on_load: () => {
    let amountSelect = document.getElementById('giver_amount_select');
    let amountError = document.getElementById('giver_amount_error');
    let transferBtn = document.getElementById('giver_confirm_btn');

    let amountReasonWrap = document.getElementById('giver_amount_reason_wrap');
    let amountReason = document.getElementById('giver_amount_reason');
    let amountReasonError = document.getElementById('giver_amount_reason_error');
    let amountReasonContinue = document.getElementById('giver_amount_reason_continue');

    let expectCallout = document.getElementById('giver_expect_callout');
    let expectSelect = document.getElementById('giver_expect_total_select');
    let expectError = document.getElementById('giver_expect_total_error');
    let expectLockBtn = document.getElementById('giver_expect_lock_btn');

    let expectReasonWrap = document.getElementById('giver_expect_reason_wrap');
    let expectReason = document.getElementById('giver_expect_reason');
    let expectReasonError = document.getElementById('giver_expect_reason_error');
    let expectFinishBtn = document.getElementById('giver_expect_finish_btn');

    let lockedAmountReason = null;
    let lockedExpectTotalCents = null;
    let lockedExpectReason = null;

    function updateTransferBtn() {
      let v = readSelectedCents(amountSelect);
      transferBtn.disabled = v === null;
      if (v !== null) amountError.style.display = 'none';
    }

    function updateAmountReasonBtn() {
      let ok = isNonEmptyText(amountReason);
      amountReasonContinue.disabled = !ok;
      if (ok) amountReasonError.style.display = 'none';
    }

    function updateExpectLockBtn() {
      let v = readSelectedCents(expectSelect);
      expectLockBtn.disabled = v === null;
      if (v !== null) expectError.style.display = 'none';
    }

    function updateExpectFinishBtn() {
      let ok = isNonEmptyText(expectReason);
      expectFinishBtn.disabled = !ok;
      if (ok) expectReasonError.style.display = 'none';
    }

    amountSelect.addEventListener('change', updateTransferBtn);

    transferBtn.addEventListener('click', () => {
      let v = readSelectedCents(amountSelect);
      if (v === null) {
        amountError.style.display = 'block';
        return;
      }

      giverRound1TransferCents = v;

      amountSelect.disabled = true;
      transferBtn.disabled = true;

      amountReasonWrap.style.display = 'block';
      amountReason.focus();
      updateAmountReasonBtn();
    });

    amountReason.addEventListener('input', updateAmountReasonBtn);

    amountReasonContinue.addEventListener('click', () => {
      if (!isNonEmptyText(amountReason)) {
        amountReasonError.style.display = 'block';
        return;
      }

      lockedAmountReason = (amountReason.value || '').trim();

      amountReason.disabled = true;
      amountReasonContinue.disabled = true;

      expectCallout.style.display = 'block';
      expectSelect.focus();
      updateExpectLockBtn();
    });

    expectSelect.addEventListener('change', updateExpectLockBtn);

    expectLockBtn.addEventListener('click', () => {
      let v = readSelectedCents(expectSelect);
      if (v === null) {
        expectError.style.display = 'block';
        return;
      }

      lockedExpectTotalCents = v;
      expectSelect.disabled = true;
      expectLockBtn.disabled = true;

      expectReasonWrap.style.display = 'block';
      expectReason.focus();
      updateExpectFinishBtn();
    });

    expectReason.addEventListener('input', updateExpectFinishBtn);

    expectFinishBtn.addEventListener('click', () => {
      if (!isNonEmptyText(expectReason)) {
        expectReasonError.style.display = 'block';
        return;
      }

      lockedExpectReason = (expectReason.value || '').trim();
      expectReason.disabled = true;
      expectFinishBtn.disabled = true;

      setTimeout(() => {
        jsPsych.finishTrial({
          label: LABEL_GIVER_R1,
          transferAmountCents: giverRound1TransferCents,
          transferReason: lockedAmountReason,

          expectedTotalFromReceiversCents: lockedExpectTotalCents,
          expectedTotalFromReceiversReason: lockedExpectReason
        });
      }, TRIAL_END_DELAY);
    });

    updateTransferBtn();
  }
};

let giverRound2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Round 2</h1>
      <div class="page-content">
        ${calloutBox(
    null,
    `
            <p>
              In Round 2, the roles are reversed.
              You are the <strong>Receiver</strong>.
              The other two players are the <strong>Givers</strong>.
            </p>
            <p>
              In this round, you receive <strong>no bonus</strong>.
            </p>
            <p>
              Please wait until the two Givers have each decided how much of their respective
              ${formatCents(ENDOWMENT_CENTS)} bonus they want to transfer to you.
            </p>
          `
  )}

        <div class="callout">
          <p id="giver_r2_status" style="margin:0;">
            <span id="giver_r2_count"><strong>0 / 2</strong> players have made their decision</span>
            &mdash;
            <span id="giver_r2_label">${TEXT_WAITING_FOR_OTHER_PLAYERS}</span>
            <span id="giver_r2_dots" style="display:inline-block; width:${TEXT_SEARCHING_DOTS_WIDTH}; text-align:left;">.</span>
          </p>
        </div>

        <div id="giver_r2_popup" class="callout" style="display:none; margin-top:1.15em; text-align:center;">
          <p style="margin:0 0 0.6em 0;">
            The Givers decided to transfer ${formatCents(algoR2TotalToR1GiverCents)} in total.<br>
            Giver 1 transferred ${formatCents(algoR2Giver1TransferCents)}, and 
            Giver 2 transferred ${formatCents(algoR2Giver2TransferCents)}.<br>
          </p>
          <div class="center-actions" style="margin-top:0.75em;">
            <button id="giver_r2_popup_continue" class="jspsych-btn">
              ${BTN_LABEL_CONTINUE}
            </button>
          </div>

          <div id="giver_r2_reaction_wrap" style="display:none; margin-top:1.0em; text-align:left;">
            <label class="demo-label" for="giver_r2_reaction">
              In 1–2 sentences, what was your reaction to the amount you just received, and why?
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <textarea
              id="giver_r2_reaction"
              rows="3"
              style="
                width:100%;
                padding:6px;
                box-sizing:border-box;
                border-radius:${UI.BORDER_RADIUS};
                border:1px solid ${COLOR_BORDER};
              "
            ></textarea>
            <div
              id="giver_r2_reaction_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please provide a brief response.
            </div>
            <div class="center-actions" style="margin-top:0.75em; text-align:center;">
              <button id="giver_r2_reaction_continue" class="jspsych-btn" disabled>
                ${BTN_LABEL_CONTINUE}
              </button>
            </div>
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

    let reactionWrap = document.getElementById('giver_r2_reaction_wrap');
    let reactionInput = document.getElementById('giver_r2_reaction');
    let reactionError = document.getElementById('giver_r2_reaction_error');
    let reactionContinue = document.getElementById('giver_r2_reaction_continue');

    let lockedReaction = null;

    function updateReactionContinue() {
      let ok = isNonEmptyText(reactionInput);
      reactionContinue.disabled = !ok;
      if (ok) reactionError.style.display = 'none';
    }

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

      reactionWrap.style.display = 'block';
      reactionInput.focus();
      updateReactionContinue();
    });

    reactionInput.addEventListener('input', updateReactionContinue);

    reactionContinue.addEventListener('click', () => {
      if (!isNonEmptyText(reactionInput)) {
        reactionError.style.display = 'block';
        return;
      }

      lockedReaction = (reactionInput.value || '').trim();
      reactionInput.disabled = true;
      reactionContinue.disabled = true;

      setTimeout(() => {
        jsPsych.finishTrial({
          label: LABEL_GIVER_R2,
          receivedTotalRound2Cents: algoR2TotalToR1GiverCents,
          algoGiver1TransferCents: algoR2Giver1TransferCents,
          algoGiver2TransferCents: algoR2Giver2TransferCents,

          receivedReaction: lockedReaction
        });
      }, TRIAL_END_DELAY);
    });
  }
};

let giverBonusPage = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: () => {
    let transfer = Number.isFinite(giverRound1TransferCents) ? giverRound1TransferCents : 0;
    let keptRound1 = Math.max(0, ENDOWMENT_CENTS - transfer);
    let receivedRound2R1 = algoR2Giver1TransferCents;
    let receivedRound2R2 = algoR2Giver2TransferCents;
    let receivedRound2 = receivedRound2R1 + receivedRound2R2;
    let total = keptRound1 + receivedRound2;

    return `
      <div class="page-wrapper">
        <h1 class="page-heading">Your Total Bonus</h1>
        <div class="page-content" style="text-align:left;">
          ${calloutBox(
      null,
      `
              <p style="margin:0;">
                Not transferred in Round 1: ${formatCents(keptRound1)}<br>
                Transferred to you in Round 2: ${formatCents(receivedRound2R1)} + ${formatCents(receivedRound2R2)} = ${formatCents(receivedRound2)}<br>
                Your total bonus: <strong>${formatCents(total)}</strong>
              </p>
            `
    )}
          <p style="text-align:center;">${TEXT_THANK_YOU_PLAYING}</p>
          <div class="center-actions">
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

/** RECEIVER CONDITION **/
let receiverRound2TransferCents = null;

let receiverRound1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Round 1</h1>
      <div class="page-content">
        ${calloutBox(
    null,
    `
            <p>
              In Round 1, you have been randomly assigned to be one of the two <strong>Receivers</strong>.
              The other player is the <strong>Giver</strong>.
            </p>
            <p>
              In this round, you receive <strong>no bonus</strong>.
            </p>
            <p>
              Please wait until the Giver has decided how much of their
              ${formatCents(ENDOWMENT_CENTS)} bonus they want to transfer to you and the other Receiver.
            </p>
          `
  )}

        <div class="callout">
          <p id="recv_r1_status" style="margin:0;">
            <span id="recv_r1_count"><strong>0 / 1</strong> player has made a decision</span>
            &mdash;
            <span id="recv_r1_label">${TEXT_WAITING_FOR_OTHER_PLAYERS}</span>
            <span id="recv_r1_dots" style="display:inline-block; width:${TEXT_SEARCHING_DOTS_WIDTH}; text-align:left;">.</span>
          </p>
        </div>

        <div id="recv_r1_popup" class="callout" style="display:none; margin-top:1.15em; text-align:center;">
          <p style="margin:0 0 0.6em 0;">
            The Giver decided to transfer ${formatCents(algoR1TransferCents)}.<br>
          </p>
          <div class="center-actions" style="margin-top:0.75em;">
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
          receivedFromGiverRound1Cents: algoR1TransferCents
        });
      }, TRIAL_END_DELAY);
    });
  }
};

let receiverRound2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Round 2</h1>
      <div class="page-content">
        ${calloutBox(
    null,
    `
            <p>
              In Round 2, the roles are reversed.
              You, alongside the other player who previously was a Receiver, are the
              <strong>Givers</strong>.
              The other player is the <strong>Receiver</strong>.
            </p>
            <p>
              In this round, you receive a
              <strong>${formatCents(ENDOWMENT_CENTS)}</strong> bonus.
            </p>
          `
  )}

        <div class="callout" id="recv_r2_amount_callout">
          <div class="demo-section" style="margin-bottom:0.9em;">
            <label class="demo-label" for="recv_r2_give_select">
              How much of your bonus do you want to transfer to the Receiver?
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <select id="recv_r2_give_select">
              ${buildCentsOptions(TRANSFER_MIN_CENTS, TRANSFER_MAX_CENTS, TRANSFER_STEP_CENTS)}
            </select>
            <div
              id="recv_r2_give_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please select one of the allowed transfer amounts.
            </div>
          </div>

          <div class="center-actions">
            <button id="recv_r2_confirm_btn" class="jspsych-btn" disabled>
              ${BTN_LABEL_CONTINUE}
            </button>
          </div>

          <div id="recv_r2_give_reason_wrap" style="display:none; margin-top:1.0em;">
            <label class="demo-label" for="recv_r2_give_reason">
              In 1–2 sentences, explain your reasoning.
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <textarea
              id="recv_r2_give_reason"
              rows="3"
              style="
                width:100%;
                padding:6px;
                box-sizing:border-box;
                border-radius:${UI.BORDER_RADIUS};
                border:1px solid ${COLOR_BORDER};
              "
            ></textarea>
            <div
              id="recv_r2_give_reason_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please provide a brief explanation.
            </div>
            <div class="center-actions" style="margin-top:0.75em;">
              <button id="recv_r2_give_reason_continue" class="jspsych-btn" disabled>
                ${BTN_LABEL_CONTINUE}
              </button>
            </div>
          </div>
        </div>

        <div id="recv_r2_popup" class="callout" style="display:none; margin-top:1.15em;">

          <div class="demo-section" style="margin-bottom:0.9em;">
            <label class="demo-label" for="recv_r2_expect_select">
              In this round, how much do you expect the <strong>other Giver</strong>
              to transfer to the Receiver?
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <select id="recv_r2_expect_select">
              ${buildCentsOptions(TRANSFER_MIN_CENTS, TRANSFER_MAX_CENTS, TRANSFER_STEP_CENTS)}
            </select>
            <div
              id="recv_r2_expect_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please select one of the allowed amounts.
            </div>
          </div>

          <div class="center-actions">
            <button id="recv_r2_expect_lock_btn" class="jspsych-btn" disabled>
              ${BTN_LABEL_CONTINUE}
            </button>
          </div>

          <div id="recv_r2_expect_reason_wrap" style="display:none; margin-top:1.0em;">
            <label class="demo-label" for="recv_r2_expect_reason">
              In 1–2 sentences, explain your reasoning.
              <span style="color:${COLOR_ERROR}">*</span>
            </label>
            <textarea
              id="recv_r2_expect_reason"
              rows="3"
              style="
                width:100%;
                padding:6px;
                box-sizing:border-box;
                border-radius:${UI.BORDER_RADIUS};
                border:1px solid ${COLOR_BORDER};
              "
            ></textarea>
            <div
              id="recv_r2_expect_reason_error"
              class="jspsych-form-warning"
              style="display:none; color:${COLOR_ERROR}; margin-top:0.3em;"
            >
              Please provide a brief explanation.
            </div>
            <div class="center-actions" style="margin-top:0.75em;">
              <button id="recv_r2_finish_btn" class="jspsych-btn" disabled>
                ${BTN_LABEL_CONTINUE}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  choices: 'NO_KEYS',
  data: { label: LABEL_RECEIVER_R2 },
  on_load: () => {
    let giveSelect = document.getElementById('recv_r2_give_select');
    let giveError = document.getElementById('recv_r2_give_error');
    let giveBtn = document.getElementById('recv_r2_confirm_btn');

    let giveReasonWrap = document.getElementById('recv_r2_give_reason_wrap');
    let giveReason = document.getElementById('recv_r2_give_reason');
    let giveReasonError = document.getElementById('recv_r2_give_reason_error');
    let giveReasonContinue = document.getElementById('recv_r2_give_reason_continue');

    let popup = document.getElementById('recv_r2_popup');

    let expectSelect = document.getElementById('recv_r2_expect_select');
    let expectError = document.getElementById('recv_r2_expect_error');
    let expectLockBtn = document.getElementById('recv_r2_expect_lock_btn');

    let expectReasonWrap = document.getElementById('recv_r2_expect_reason_wrap');
    let expectReason = document.getElementById('recv_r2_expect_reason');
    let expectReasonError = document.getElementById('recv_r2_expect_reason_error');
    let finishBtn = document.getElementById('recv_r2_finish_btn');

    let lockedGiveReason = null;
    let lockedExpectCents = null;
    let lockedExpectReason = null;

    function updateGiveBtn() {
      let v = readSelectedCents(giveSelect);
      giveBtn.disabled = v === null;
      if (v !== null) giveError.style.display = 'none';
    }

    function updateGiveReasonBtn() {
      let ok = isNonEmptyText(giveReason);
      giveReasonContinue.disabled = !ok;
      if (ok) giveReasonError.style.display = 'none';
    }

    function updateExpectLockBtn() {
      let v = readSelectedCents(expectSelect);
      expectLockBtn.disabled = v === null;
      if (v !== null) expectError.style.display = 'none';
    }

    function updateFinishBtn() {
      let ok = isNonEmptyText(expectReason);
      finishBtn.disabled = !ok;
      if (ok) expectReasonError.style.display = 'none';
    }

    giveSelect.addEventListener('change', updateGiveBtn);

    giveBtn.addEventListener('click', () => {
      let v = readSelectedCents(giveSelect);
      if (v === null) {
        giveError.style.display = 'block';
        return;
      }

      receiverRound2TransferCents = v;

      giveSelect.disabled = true;
      giveBtn.disabled = true;

      giveReasonWrap.style.display = 'block';
      giveReason.focus();
      updateGiveReasonBtn();
    });

    giveReason.addEventListener('input', updateGiveReasonBtn);

    giveReasonContinue.addEventListener('click', () => {
      if (!isNonEmptyText(giveReason)) {
        giveReasonError.style.display = 'block';
        return;
      }

      lockedGiveReason = (giveReason.value || '').trim();
      giveReason.disabled = true;
      giveReasonContinue.disabled = true;

      setTimeout(() => (popup.style.display = 'block'), POPUP_SHOW_DELAY);
      updateExpectLockBtn();
    });

    expectSelect.addEventListener('change', updateExpectLockBtn);

    expectLockBtn.addEventListener('click', () => {
      let v = readSelectedCents(expectSelect);
      if (v === null) {
        expectError.style.display = 'block';
        return;
      }

      lockedExpectCents = v;

      expectSelect.disabled = true;
      expectLockBtn.disabled = true;

      expectReasonWrap.style.display = 'block';
      expectReason.focus();
      updateFinishBtn();
    });

    expectReason.addEventListener('input', updateFinishBtn);

    finishBtn.addEventListener('click', () => {
      if (!isNonEmptyText(expectReason)) {
        expectReasonError.style.display = 'block';
        return;
      }

      lockedExpectReason = (expectReason.value || '').trim();
      expectReason.disabled = true;
      finishBtn.disabled = true;

      setTimeout(() => {
        jsPsych.finishTrial({
          label: LABEL_RECEIVER_R2,
          transferAmountCents: receiverRound2TransferCents,
          transferReason: lockedGiveReason,

          expectedOtherGiverToReceiverCents: lockedExpectCents,
          expectedOtherGiverToReceiverReason: lockedExpectReason,

        });
      }, TRIAL_END_DELAY);
    });

    updateGiveBtn();
  }
};

let receiverBonusPage = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: () => {
    let receivedRound1 = algoR1TransferCents;
    let transferR2 = Number.isFinite(receiverRound2TransferCents) ? receiverRound2TransferCents : 0;
    let keptRound2 = Math.max(0, ENDOWMENT_CENTS - transferR2);
    let total = receivedRound1 + keptRound2;

    return `
      <div class="page-wrapper">
        <h1 class="page-heading">Your Total Bonus</h1>
        <div class="page-content" style="text-align:left;">
          ${calloutBox(
      null,
      `
              <p style="margin:0;">
                Transferred to you in Round 1: ${formatCents(receivedRound1)}<br>
                Not transferred in Round 2: ${formatCents(keptRound2)}<br>
                Your total bonus: <strong>${formatCents(total)}</strong>
              </p>
            `
    )}
          <p style="text-align:center;">${TEXT_THANK_YOU_PLAYING}</p>
          <div class="center-actions">
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
      <h1 class="page-heading">Demographics</h1>
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
      <h1 class="page-heading">Follow-up Question</h1>
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
 * DEBRIEF PAGE (MODIFIED per your exact text)
 ******************************/

let debriefTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Debrief</h1>
      <div class="page-content">
        <p>Thank you for participating in this study.</p>
        <p>
          We would like to inform you that this study involved a form of deception.
          Specifically, you were not actually matched with other players in real time.
          Instead, you interacted with two pre-programmed algorithms.
        </p>
        <p>
          The purpose of this setup was to examine how people make decisions when they believe
          they are interacting with others. We used algorithms so that key aspects of the
          interaction were controlled across participants.
        </p>
        <p>
          In the game, each algorithm selected transfer amounts from the set of
          possible transfers shown in the instructions (0¢, 10¢, 20¢, 30¢, or 40¢).
          Regardless of how much you chose to give, we are compensating you with 
          the full 40¢ endowment you initially had
          and an additional 20¢—that is, a total bonus of $0.60.
          This ensures that no participant is financially
          disadvantaged by the experimental design.
        </p>
        <p>
          If you wish to have your data removed from the study now that you have been debriefed
          about the deception, contact the Protocol Director, Jonah Rösemeier
          (<a href="mailto:jrosem@stanford.edu">jrosem@stanford.edu</a>).
        </p>
      </div>
    </div>
  `,
  choices: [BTN_LABEL_DEBRIEF_UNDERSTAND],
  data: { label: LABEL_DEBRIEF }
};

/******************************
 * DATAPIPE
 ******************************/

let filename = `${prolificPID}.json`;

let save_data = {
  type: jsPsychPipe,
  action: 'save',
  experiment_id: DATAPIPE_EXPERIMENTID,
  filename: filename,
  data_string: () => jsPsych.data.get().json()
};

/******************************
 * FINAL SUBMISSION
 ******************************/

let submitTrial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div class="page-wrapper">
      <h1 class="page-heading">Return to Prolific</h1>
      <div class="page-content">
        <p>Please click the button below to be redirected back to Prolific and register your submission.</p>
      </div>
    </div>
  `,
  choices: [BTN_LABEL_SUBMIT],
  on_finish: () => {
    allowExit = true;
    window.location.href = PROLIFIC_COMPLETION_URL;
  }
};

/******************************
 * FULL TIMELINE
 ******************************/

let fullTimeline = [
  consentTrial,
  instructionLoop,
  searchPlayersScreen,
  searchingScreen,
  waitingRoom,
  giverTimeline,
  receiverTimeline,
  demographicsTrial,
  followupTrial,
  debriefTrial,
  save_data,
  submitTrial
];

applyPostTrialGapToTimeline(fullTimeline);

jsPsych.run(fullTimeline);