/* =====================================================
   script.js — 《왕의 삶 — 잠실의 패왕》
   ★ 대사·선택지·이미지 경로는 아래 [1. 장면 데이터]에서만 고치면 됩니다.
   ★ 그 아래 [2. 게임 로직]은 특별한 이유가 없으면 건드리지 마세요.
   ===================================================== */


/* =====================================================
   [1. 장면 데이터] ← 여기서 대사와 이미지를 수정하세요
   -----------------------------------------------------
   id        : 장면 이름표 (다른 장면의 next 에서 이 이름을 부릅니다)
   title     : 화면 위쪽에 보이는 장 제목
   image     : 이미지 파일 경로 (images 폴더 안). 파일이 없으면 기본 배경이 나옵니다.
   label     : 이미지가 없을 때 대신 보이는 글자
   lines     : 대사 목록. ["말하는 사람", "대사"] 형태이며,
               말하는 사람을 "" 로 비워두면 내레이션(설명글)이 됩니다.
   choices   : 선택지 3개. text = 보이는 글, over = 이 선택지를 골랐을 때의 게임 오버 문구
               (정답 선택지는 over 를 빈칸 "" 으로 둡니다)
   answer    : 정답 번호 (0=A, 1=B, 2=C)
   correctText : (선택) 정답을 고른 직후 먼저 보여줄 문구
   next      : 정답 후 이동할 장면의 id
   ===================================================== */

const TITLE = {
  image: "images/title.jpg",
  label: "왕의 삶 — 잠실의 패왕",
  title: "왕의 삶 — 잠실의 패왕",
  subtitle: "서울을 얻고, 잠실을 얻고, 사랑까지 얻어라.",
  startButton: "왕위에 오르기",
  warning: "잘못된 선택은 왕의 목숨을 앗아갈 수 있습니다."
};

const SCENES = {

  /* ---------- 프롤로그 ---------- */
  prologue: {
    id: "prologue",
    title: "프롤로그 — 왕위에 오른 자",
    image: "images/prologue.jpg",
    label: "왕위에 오른 자",
    lines: [
      ["", `“왕이 되었다.

백성은 굶주리고, 국고는 비었으며, 신하들은 서로를 의심했다.

그러나 새 왕에게는 확고한 뜻이 있었다.

서울시장이 되어 LG를 몰아내고 잠실구장을 두산의 성지로 만드는 것.

신하들은 눈물을 흘렸다. 감동해서인지, 앞날이 막막해서인지는 아무도 몰랐다.”`],
      ["대신", "“폐하! 즉위 첫날부터 중대한 결단을 내려주시옵소서!”"]
    ],
    choices: [
      { text: "서울의 모든 야구장을 두산 전용 구장으로 선포한다.",
        over: "왕명은 전국에 전달되었다. 모든 야구 팬이 서울로 몰려왔다. 서울 인구가 세 배로 늘었고, 출근길은 9회 말보다 길어졌다. 왕은 즉위 3시간 만에 교통대책 실패로 폐위되었다." },
      { text: "잠실구장을 폐쇄하고 그 자리에 두산 왕궁을 건설한다.",
        over: "공사가 시작된 지 하루 만에 왕은 깨달았다. 야구장을 없애면 두산이 홈경기를 할 수 없다는 사실을. ‘폐하, 이러시면 LG도 못 이기지만 두산도 경기를 못 합니다.’ 왕은 충격으로 쓰러졌다." },
      { text: "전국의 야구 팬을 대상으로 잠실구장의 미래를 결정할 대회를 연다.", over: "" }
    ],
    answer: 2,
    // ★ 추가 문구(원래 시나리오에는 없던 연결 대사). 필요 없으면 이 줄 전체를 지우세요.
    correctText: "대회 소식이 전국에 퍼졌다. 두산 팬도, LG 팬도, 심지어 야구를 모르는 사람까지 의견서를 들고 몰려왔다. 대신이 눈물을 훔쳤다. ‘폐하, 이번에는 정말 백성의 뜻을 물으셨습니다.’ 왕은 고개를 끄덕였다. ‘……그런데 투표함은 누가 지키지?’ 그때, 먼 곳에서 한 책략가가 걸어왔다.",
    next: "ch1"
  },

  /* ---------- 제1장 여몽 ---------- */
  ch1: {
    id: "ch1",
    title: "제1장 — 여몽의 계책",
    image: "images/lu_meng.jpg",
    label: "여몽",
    lines: [
      ["여몽", "“폐하. 관우는 형주를 잃었고, 저는 그 땅을 얻었습니다. 상대가 무엇을 믿고 있는지 알아야 승리할 수 있습니다.”"],
      ["왕", "“그렇다면 LG도 방심하게 만들어야겠군!”"],
      ["여몽", "“그렇습니다. 다만 상대를 속이는 것과 자기 자신을 속이는 것은 다릅니다.”"]
    ],
    choices: [
      { text: "여몽에게 LG 팬인 척하며 상대의 전략을 조사하게 한다.", over: "" },
      { text: "LG 구단에 두산 우승 축하 현수막을 미리 보내 방심하게 만든다.",
        over: "현수막이 도착했다. LG는 이를 도발로 받아들였고, 구단 공식 계정에 왕의 즉위 사진을 올렸다. 왕은 하루 종일 야구 팬들의 댓글에 시달리다 정무를 포기했다." },
      { text: "LG 구단에 두산 유니폼을 보내고, 친선 교류를 제안한다.",
        over: "LG 구단은 두산 유니폼을 돌려보냈다. 여몽은 고개를 저었다. ‘폐하. 형주를 얻을 때도 적에게 먼저 선물을 보내지는 않았습니다.’ 왕은 외교적 참사에 책임을 지고 퇴위했다." }
    ],
    answer: 0,
    // ★ 추가 문구(원래 시나리오에는 없던 연결 대사). 필요 없으면 이 줄 전체를 지우세요.
    correctText: "여몽은 LG 팬으로 완벽하게 변장해 잠입했다. 응원가를 외우고, 치킨까지 먼저 샀다. 사흘 뒤 여몽이 돌아왔다. ‘폐하, 적의 경계는 의외로 느슨했습니다. 다만…… 응원가가 중독성이 강해 아직도 입에서 맴돕니다.’ 왕은 못 들은 척 서둘러 다음 길로 향했다.",
    next: "ch2"
  },

  /* ---------- 제2장 조운 ---------- */
  ch2: {
    id: "ch2",
    title: "제2장 — 조운의 장판파",
    image: "images/zhao_yun.jpg",
    label: "조운",
    lines: [
      ["조운", "“주군! 시간이 없습니다. 제가 길을 열겠습니다!”"],
      ["왕", "“하지만 저쪽에는 잠실구장으로 가는 지름길이 있지 않은가!”"],
      ["조운", "“주군, 지금은 백성을 구해야 합니다!”"]
    ],
    choices: [
      { text: "조운에게 자신 대신 두산 응원 깃발을 들고 돌파하라고 명령한다.",
        over: "조운은 깃발을 들었다. 깃발은 훌륭하게 휘날렸다. 왕은 훌륭하게 붙잡혔다. 훗날 사관은 기록했다. ‘그날 깃발만큼은 무패였다.’" },
      { text: "조운에게 왕관을 맡기고 자신은 백성들 사이에 숨어 탈출한다.",
        over: "조운은 왕관을 받아 들었다. ‘주군. 아두를 구하던 날에도 저는 아기를 두고 도망치지 않았습니다.’ 조운은 왕관을 바닥에 내려놓고 백성을 구하러 떠났다. 왕은 왕관도, 장수도, 왕위도 잃었다." },
      { text: "조운과 함께 포위망을 돌파하되, 대피 중인 백성을 먼저 안전한 곳으로 보낸다.", over: "" }
    ],
    answer: 2,
    // ★ 추가 문구(원래 시나리오에는 없던 연결 대사). 필요 없으면 이 줄 전체를 지우세요.
    correctText: "조운은 창을 휘둘러 길을 열었다. 백성들은 한 명도 빠짐없이 안전한 곳으로 빠져나갔다. 조운이 말했다. ‘주군, 이제야 왕의 얼굴이십니다.’ 왕은 뿌듯해하다가 뒤늦게 깨달았다. ‘잠깐, 잠실구장 지름길은 이미 지나쳤군.’ 조운은 못 들은 척 말을 몰았다.",
    next: "ch3"
  },

  /* ---------- 제3장 강유 ---------- */
  ch3: {
    id: "ch3",
    title: "제3장 — 강유의 북벌",
    image: "images/jiang_wei.jpg",
    label: "강유",
    lines: [
      ["강유", "“폐하. 북벌에는 군량이 필요했습니다. 지금 폐하의 계획에도 재정이 필요합니다.”"],
      ["왕", "“내게는 돈이 부족하다. 그러나 두산을 향한 사랑은 무한하다!”"],
      ["강유", "“사랑만으로는 예산을 편성할 수 없습니다.”"]
    ],
    choices: [
      { text: "서울시의 모든 예산을 두산 우승 기원 사업에 배정한다.",
        over: "예산이 전부 소진되었다. 도로 보수도, 학교 지원도, 시민 안전도 모두 중단되었다. 강유는 예산서를 덮었다. ‘폐하. 북벌을 반복한 촉한도 국고가 무한하지는 않았습니다.’ 왕은 시의회에서 탄핵당했다." },
      { text: "국고를 아끼기 위해 서울시장 월급을 포기하고 개인 돈으로 구장을 사들인다.", over: "" },
      { text: "다른 시정 사업과 체육 정책의 예산을 함께 검토하고, 장기적인 구장 활용 계획을 세운다.",
        over: "왕은 보고서를 검토했다. 그리고 추가 보고서를 요청했다. 다시 검토했다. 다시 보고서를 요청했다. 임기가 끝났다. 사관은 기록했다. ‘왕은 끝내 결정을 내리지 않았다.’" }
    ],
    answer: 1,
    correctText: "왕은 개인 재산을 정리하기 시작했다. 강유가 감탄했다. ‘폐하, 드디어 사사로운 이익보다 대의를 앞세우셨군요!’ 잠시 후 재정 담당자가 뛰어왔다. ‘폐하! 그런데 개인 돈으로 구단이나 구장 소유권을 마음대로 사들일 수는 없습니다!’ 왕은 잠시 침묵했다. ‘……그럼 협상부터 시작하자.’ 강유는 고개를 끄덕였다. ‘그것이 바로 장기전입니다.’",
    next: "ch4"
  },

  /* ---------- 제4장 아이젠 ---------- */
  ch4: {
    id: "ch4",
    title: "제4장 — 아이젠의 수련",
    image: "images/eisen.jpg",
    label: "아이젠",
    lines: [
      ["아이젠", "“강해지고 싶다면 이 바위를 들어라.”"],
      ["왕", "“이것이 서울시장 수련인가?”"],
      ["아이젠", "“아니. 그냥 내가 평소에 하던 수련이다.”"],
      ["왕", "“그런데 왜 내가 해야 하는가?”"],
      ["아이젠", "“네가 강해지고 싶다고 했으니까.”"]
    ],
    choices: [
      { text: "아이젠에게 바위를 대신 들어 달라고 부탁한다.", over: "" },
      { text: "바위에 두산 로고를 붙이면 더 가벼워질 것이라고 주장한다.",
        over: "왕은 바위에 두산 로고를 붙였다. 바위는 여전히 무거웠다. 아이젠은 왕을 바라보았다. ‘마법으로도 해결되지 않는 문제가 있다.’ 왕은 중력의 무서움을 깨닫고 퇴위했다." },
      { text: "바위를 들어 올리는 대신, 자신이 감당할 수 있는 무게부터 매일 훈련한다.",
        over: "왕은 체력 훈련 계획표를 만들었다. 하루 10분, 다음 날 15분, 그다음 날 20분. 마침내 체력이 좋아졌다. 하지만 왕은 수련에 몰두한 나머지 서울시장 후보 등록 마감일을 놓쳤다. GAME OVER: 체력은 만렙, 임기는 시작도 못 함." }
    ],
    answer: 0,
    correctText: "아이젠은 바위를 들어 올렸다. ‘이 정도는 할 수 있다.’ 왕은 감탄했다. ‘역시 최강의 스승!’ 아이젠은 바위를 내려놓았다. ‘그런데 넌 왜 안 들었지?’ 왕은 대답하지 못했다. 아이젠은 한숨을 쉬었다. ‘……내가 잘못 가르쳤군.’ 그래도 아이젠은 왕에게 마지막 기회를 주기로 했다.",
    next: "final"
  },

  /* ---------- 최종장 (특별 장면: 오답 버튼이 도망갑니다) ---------- */
  final: {
    id: "final",
    type: "final",
    title: "최종장 — 여자친구의 데이트 신청",
    image: "images/girlfriend.jpg",
    label: "여자친구",
    lines: [
      ["", "수많은 전투를 거쳐 왕은 마침내 서울을 다스리게 되었다. 여몽의 계책과 조운의 충의, 강유의 집념, 아이젠의 수련까지. 그 모든 고난을 견딘 왕에게 이제 단 하나의 선택만이 남아 있었다. 그때, 궁전의 문이 열렸다."],
      ["나", "“드디어 서울시장도 되었고, 잠실구장도 차지했네?”"],
      ["왕", "“그렇다. 이제 내게 남은 것은 천하통일뿐이다.”"],
      ["나", "“아니. 오늘 네 생일이잖아. 나랑 데이트할래?”"],
      ["왕", "“……”"],
      ["", "왕은 수많은 군대와 책략가를 상대해 왔다. 그러나 이 질문 앞에서는 단 한 번도 훈련받은 적이 없었다."]
    ],
    // 선택지 ①(정답) ②③(도망가는 오답). warning = 누르거나 가까이 가면 뜨는 경고문
    choices: [
      { text: "나는 너를 사랑한다. 당연히 데이트하지." },
      { text: "잠깐, 오늘은 야구 경기가 있는데?", warning: "장난해? 다시 골라." },
      { text: "서울시장에게 사적인 감정은 없다.", warning: "서울시장도 사람이다. 다시 골라." }
    ],
    hint: "(②와 ③은 어쩐지 잡히지 않을 것 같다…)",
    next: "ending"
  },

  /* ---------- 진엔딩 ---------- */
  ending: {
    id: "ending",
    type: "ending",
    title: "진엔딩 — 생일 축하해",
    image: "images/birthday.jpg",
    label: "생일 축하해!",
    lines: [
      ["여몽", "“천하를 얻는 계책보다 중요한 것이 있었군요.”"],
      ["조운", "“오늘만큼은 주군께서 지켜야 할 사람이 분명합니다.”"],
      ["강유", "“이것으로 모든 계획이 완성되었습니다.”"],
      ["아이젠", "“케이크는 무거운가?”"],
      ["나", "“자, 다들 조용히 해. 오늘 주인공은 얘야.”"]
    ],
    // 마지막 생일 메시지 (줄바꿈은 그대로 화면에 반영됩니다)
    message: `왕의 생일을 축하하기 위해 많은 이들이 모여들었다.
    왕은 감동의 눈물을 흘렸다.
    그리고 눈물 셀카를 찍어 여자친구에게 보내주었다.
    오늘은 잊지 못할 생일이 될 것이다.
    여자친구에게 뽀뽀 백번을 해주기로 다짐했다.`,
    closing: "생일축하해 빠부야 사랑해 ♡",
    credit: "제작: 세상에서 왕이 가장 사랑하는 귀여운 여자친구",
    restartButton: "왕의 삶을 다시 시작하기"
  }
};

// 게임 오버 화면 공통 문구
const GAMEOVER_TEXT = {
  title: "GAME OVER",
  retry: "다시 도전하기",
  toTitle: "타이틀로 돌아가기"
};


/* =====================================================
   [2. 게임 로직] — 아래는 특별한 이유가 없으면 수정하지 않아도 됩니다
   ===================================================== */

const app = document.getElementById("app");
const popupEl = document.getElementById("popup");

// 지금 게임이 어디까지 진행됐는지 기억하는 변수들
const state = {
  line: 0,        // 현재 보고 있는 대사 번호
  locked: false   // true 이면 버튼 중복 클릭을 막습니다
};

// 화면이 바뀔 때 정리해야 할 것들(이벤트 등)을 모아두는 목록
let cleanups = [];

/* ---------- 도우미 함수 ---------- */

// 태그 하나를 만드는 함수: h("div", "클래스이름", "글자")
function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

// 새 화면을 그리기 전에 이전 화면을 지웁니다
function newScreen(extraClass) {
  cleanups.forEach(fn => fn());
  cleanups = [];
  state.locked = false;
  hidePopup();
  app.innerHTML = "";
  const screen = h("div", "screen" + (extraClass ? " " + extraClass : ""));
  app.appendChild(screen);
  window.scrollTo(0, 0);
  return screen;
}

// 인물 이미지 상자 (이미지 파일이 없으면 기본 배경과 이름이 보입니다)
function makePortrait(image, label) {
  const box = h("div", "portrait");
  box.appendChild(h("div", "portrait-ph", label));
  if (image) {
    const img = new Image();
    img.alt = label;
    img.onerror = () => img.remove();   // 파일이 없으면 이미지를 그냥 지웁니다
    img.src = image;
    box.appendChild(img);
  }
  return box;
}

// 대사창
function makeDialogue(line) {
  const speaker = line[0], text = line[1];
  const box = h("div", "dialogue" + (speaker ? "" : " narr"));
  if (speaker) box.appendChild(h("div", "speaker", speaker));
  box.appendChild(h("p", "text", text));
  return box;
}

// "다음 ▶" 버튼
function makeNextButton(onClick) {
  const b = h("button", "btn next", "다음 ▶");
  b.type = "button";
  b.addEventListener("click", () => {
    if (state.locked) return;
    state.locked = true;
    onClick();
  });
  return b;
}

/* ---------- 팝업 말풍선 ---------- */
let popupTimer = null;
function showPopup(msg) {
  popupEl.textContent = msg;
  popupEl.classList.add("show");
  clearTimeout(popupTimer);
  popupTimer = setTimeout(hidePopup, 1400);
}
function hidePopup() {
  clearTimeout(popupTimer);
  popupEl.classList.remove("show");
}

/* ---------- 타이틀 화면 ---------- */
function showTitle() {
  const screen = newScreen();
  screen.appendChild(makePortrait(TITLE.image, TITLE.label));

  const box = h("div", "title-box");
  box.appendChild(h("h1", "", TITLE.title));
  box.appendChild(h("p", "sub", TITLE.subtitle));
  screen.appendChild(box);

  const start = h("button", "btn primary", TITLE.startButton);
  start.type = "button";
  start.addEventListener("click", () => {
    if (state.locked) return;
    state.locked = true;
    showScene("prologue");
  });
  screen.appendChild(start);
  screen.appendChild(h("p", "warn", TITLE.warning));
}

/* ---------- 장면 화면 (대사 → 선택지) ---------- */
function showScene(id) {
  state.line = 0;
  drawScene(id);
}

function drawScene(id) {
  const scene = SCENES[id];
  if (!scene) { showTitle(); return; }          // 혹시 모를 오류 방지

  const screen = newScreen(scene.type === "ending" ? "ending" : "");
  screen.appendChild(h("div", "chapter", scene.title));
  screen.appendChild(makePortrait(scene.image, scene.label));
  screen.appendChild(makeDialogue(scene.lines[state.line]));

  const isLastLine = state.line >= scene.lines.length - 1;

  if (!isLastLine) {
    // 아직 보여줄 대사가 남았으면 "다음" 버튼
    screen.appendChild(makeNextButton(() => { state.line++; drawScene(id); }));
  } else if (scene.type === "final") {
    drawFinalChoices(screen, scene);
  } else if (scene.type === "ending") {
    drawEndingMessage(screen, scene);
  } else {
    drawChoices(screen, scene);
  }
}

// 일반 장면의 선택지 3개
function drawChoices(screen, scene) {
  const wrap = h("div", "choices");
  scene.choices.forEach((choice, i) => {
    const b = h("button", "choice");
    b.type = "button";
    b.appendChild(h("span", "badge", "ABC"[i]));
    b.appendChild(h("span", "", choice.text));
    b.addEventListener("click", () => pickChoice(scene, i));
    wrap.appendChild(b);
  });
  screen.appendChild(wrap);
}

// 선택지를 눌렀을 때
function pickChoice(scene, index) {
  if (state.locked) return;                     // 중복 클릭 방지
  state.locked = true;

  if (index === scene.answer) {
    if (scene.correctText) showInterlude(scene);   // 정답 직후 문구가 있으면 먼저 보여줌
    else showScene(scene.next);
  } else {
    showGameOver(scene, scene.choices[index].over);
  }
}

// 정답 직후에 잠깐 보여주는 화면
function showInterlude(scene) {
  const screen = newScreen();
  screen.appendChild(h("div", "chapter", scene.title));
  screen.appendChild(makePortrait(scene.image, scene.label));
  screen.appendChild(makeDialogue(["", scene.correctText]));
  screen.appendChild(makeNextButton(() => showScene(scene.next)));
}

/* ---------- 게임 오버 화면 ---------- */
function showGameOver(scene, message) {
  const screen = newScreen("gameover");
  screen.appendChild(h("h2", "go-title", GAMEOVER_TEXT.title));
  screen.appendChild(h("p", "go-where", scene.title));
  screen.appendChild(makeDialogue(["", message]));

  const retry = h("button", "btn primary", GAMEOVER_TEXT.retry);
  retry.type = "button";
  retry.addEventListener("click", () => {
    if (state.locked) return;
    state.locked = true;
    showScene(scene.id);                        // 실패한 장면부터 다시 시작
  });
  const toTitle = h("button", "btn small", GAMEOVER_TEXT.toTitle);
  toTitle.type = "button";
  toTitle.addEventListener("click", () => {
    if (state.locked) return;
    state.locked = true;
    showTitle();
  });
  screen.appendChild(retry);
  screen.appendChild(toTitle);
}

/* ---------- 최종장: ①은 정답, ②③은 도망가는 버튼 ---------- */
function drawFinalChoices(screen, scene) {
  const wrap = h("div", "choices");
  const nums = ["①", "②", "③"];

  function makeBtn(i, extraClass) {
    const b = h("button", "choice" + (extraClass ? " " + extraClass : ""));
    b.type = "button";
    b.appendChild(h("span", "badge", nums[i]));
    b.appendChild(h("span", "", scene.choices[i].text));
    return b;
  }

  // ① 정답 버튼: 도망가지 않고 항상 안정적으로 눌립니다 (위쪽 고정)
  const good = makeBtn(0, "good");
  good.addEventListener("click", () => {
    if (state.locked) return;                   // 중복 클릭 방지
    state.locked = true;
    showScene(scene.next);
  });
  wrap.appendChild(good);

  // ②③ 도망 버튼은 ① 아래쪽 별도 영역(arena) 안에서만 움직입니다
  // → ① 위에 겹칠 수 없고, 화면 밖으로도 못 나갑니다.
  const arena = h("div", "arena");
  const runners = [1, 2].map(i => ({
    el: makeBtn(i),
    warning: scene.choices[i].warning,
    x: 0, y: 0, lastMove: 0
  }));
  runners.forEach(r => arena.appendChild(r.el));
  wrap.appendChild(arena);
  wrap.appendChild(h("p", "hint", scene.hint));
  screen.appendChild(wrap);

  // 도망갈 새 위치를 정하는 함수 (px, py = 포인터 위치. 그 근처는 피함)
  function moveRunner(r, px, py) {
    const aw = arena.clientWidth, ah = arena.clientHeight;
    const bw = r.el.offsetWidth, bh = r.el.offsetHeight;
    const maxX = Math.max(0, aw - bw), maxY = Math.max(0, ah - bh);
    const other = runners.find(o => o !== r);

    let best = null, bestScore = -1;
    for (let t = 0; t < 40; t++) {
      const x = Math.random() * maxX, y = Math.random() * maxY;
      // 다른 도망 버튼과 안 겹칠수록, 포인터에서 멀수록 좋은 위치
      const overlap = !(x + bw + 8 < other.x || other.x + other.el.offsetWidth + 8 < x ||
                        y + bh + 8 < other.y || other.y + other.el.offsetHeight + 8 < y);
      let score = overlap ? 0 : 1000;
      if (px !== undefined) {
        const dx = x + bw / 2 - px, dy = y + bh / 2 - py;
        score += Math.min(Math.sqrt(dx * dx + dy * dy), 500);
      }
      if (score > bestScore) { bestScore = score; best = [x, y]; }
    }
    r.x = best[0]; r.y = best[1];
    r.el.style.left = r.x + "px";
    r.el.style.top = r.y + "px";
    r.lastMove = Date.now();
  }

  // 경고를 띄우고 도망가기 (터치·클릭 모두 여기로 옵니다)
  function flee(r, e) {
    showPopup(r.warning);
    const rect = arena.getBoundingClientRect();
    if (e && e.clientX !== undefined) {
      moveRunner(r, e.clientX - rect.left, e.clientY - rect.top);
    } else {
      moveRunner(r);
    }
  }

  runners.forEach(r => {
    // 터치 직전/클릭 직전(pointerdown)에 먼저 피합니다 (모바일·PC 공통)
    r.el.addEventListener("pointerdown", e => { e.preventDefault(); flee(r, e); });
    // 키보드(엔터)로 눌렀을 때도 정답이 되지 않고 도망갑니다
    r.el.addEventListener("click", e => { e.preventDefault(); flee(r, null); });
  });

  // PC: 마우스 포인터가 가까워지면 도망
  function onMouseMove(e) {
    if (e.pointerType !== "mouse") return;
    const rect = arena.getBoundingClientRect();
    const px = e.clientX - rect.left, py = e.clientY - rect.top;
    runners.forEach(r => {
      const cx = r.x + r.el.offsetWidth / 2, cy = r.y + r.el.offsetHeight / 2;
      const near = Math.abs(px - cx) < r.el.offsetWidth / 2 + 40 &&
                   Math.abs(py - cy) < r.el.offsetHeight / 2 + 40;
      if (near && Date.now() - r.lastMove > 200) {
        showPopup(r.warning);
        moveRunner(r, px, py);
      }
    });
  }
  window.addEventListener("pointermove", onMouseMove);

  // 화면 크기가 바뀌면 버튼이 영역 밖으로 나가지 않게 다시 배치
  function onResize() { runners.forEach(r => moveRunner(r)); }
  window.addEventListener("resize", onResize);

  cleanups.push(() => {
    window.removeEventListener("pointermove", onMouseMove);
    window.removeEventListener("resize", onResize);
  });

  // 처음 위치: ②는 왼쪽 위, ③은 오른쪽 아래
  requestAnimationFrame(() => {
    const aw = arena.clientWidth, ah = arena.clientHeight;
    const a = runners[0], b = runners[1];
    a.x = 0; a.y = 0;
    b.x = Math.max(0, aw - b.el.offsetWidth);
    b.y = Math.max(0, ah - b.el.offsetHeight);
    [a, b].forEach(r => {
      r.el.style.left = r.x + "px";
      r.el.style.top = r.y + "px";
    });
  });
}

/* ---------- 진엔딩: 마지막 대사 뒤 생일 메시지 ---------- */
function drawEndingMessage(screen, scene) {
  const letter = h("div", "letter", scene.message);
  letter.appendChild(h("span", "closing", scene.closing));
  screen.appendChild(letter);
  screen.appendChild(h("p", "credit", scene.credit));

  const restart = h("button", "btn primary", scene.restartButton);
  restart.type = "button";
  restart.addEventListener("click", () => {
    if (state.locked) return;
    state.locked = true;
    showTitle();                                // 다시 시작 → 타이틀로
  });
  screen.appendChild(restart);
}

/* ---------- 게임 시작 ---------- */
showTitle();
