/* ============================================
   기부티켓 - Main JavaScript
   ============================================ */

/* ===== ★ 여기서 전화번호와 카카오 링크 수정 ★ ===== */
const CONFIG = {
  phone:  '010-0000-0000',           // ← 전화번호 입력
  kakao:  'https://open.kakao.com/o/xxxxxxxx', // ← 카카오 오픈채팅 링크 입력
};
/* ================================================== */

/* ===== 리뷰 데이터 (JSON 내장) ===== */
const REVIEWS = [
  {id:1,name:"김**",type:"휴대폰 소액결제",amount:"30만원",rating:5,text:"빠르고 친절하게 처리해주셨어요. 다음에도 꼭 이용할게요!",time:2},
  {id:2,name:"이**",type:"신용카드",amount:"100만원",rating:5,text:"카카오로 상담하고 10분 만에 입금 됐어요. 진짜 최고입니다",time:5},
  {id:3,name:"박**",type:"정보이용료",amount:"50만원",rating:5,text:"급하게 필요했는데 빠르게 처리해줘서 감사합니다",time:8},
  {id:4,name:"최**",type:"신용카드",amount:"200만원",rating:5,text:"믿을 수 있는 곳이라 안심하고 이용했어요. 단가도 최고네요",time:12},
  {id:5,name:"정**",type:"휴대폰 소액결제",amount:"20만원",rating:5,text:"처음 이용해봤는데 너무 편리해요 친절하게 설명해주심",time:15},
  {id:6,name:"강**",type:"신용카드",amount:"150만원",rating:5,text:"92% 그대로 받았어요! 다른 데보다 훨씬 낫네요",time:18},
  {id:7,name:"조**",type:"정보이용료",amount:"80만원",rating:5,text:"24시간 상담 가능해서 새벽에도 이용했는데 바로 답해줬어요",time:22},
  {id:8,name:"윤**",type:"휴대폰 소액결제",amount:"15만원",rating:5,text:"간단하고 빠르게 처리! 주변에도 추천할게요",time:30},
  {id:9,name:"장**",type:"신용카드",amount:"300만원",rating:5,text:"큰 금액인데도 안전하게 잘 처리해주셨어요 감사합니다",time:35},
  {id:10,name:"임**",type:"정보이용료",amount:"60만원",rating:5,text:"단가도 좋고 속도도 빠르고 완벽해요",time:40},
  {id:11,name:"한**",type:"휴대폰 소액결제",amount:"25만원",rating:5,text:"처음엔 걱정했는데 너무 쉽고 빠르게 해결됐어요",time:45},
  {id:12,name:"오**",type:"신용카드",amount:"120만원",rating:5,text:"카톡 상담이 편리해서 좋아요. 빠른 처리 감사합니다",time:50},
  {id:13,name:"서**",type:"휴대폰 소액결제",amount:"40만원",rating:5,text:"이미 3번째 이용이에요. 항상 믿음직스럽습니다",time:55},
  {id:14,name:"신**",type:"정보이용료",amount:"70만원",rating:5,text:"급전 필요할 때 정말 도움됩니다. 감사해요",time:60},
  {id:15,name:"권**",type:"신용카드",amount:"180만원",rating:5,text:"업계 최고 단가 맞아요! 빠르고 안전합니다",time:65},
  {id:16,name:"황**",type:"휴대폰 소액결제",amount:"10만원",rating:5,text:"소액도 친절하게 처리해줘서 고마워요",time:70},
  {id:17,name:"안**",type:"신용카드",amount:"250만원",rating:5,text:"대금액도 안전하게! 전문적으로 처리해주셨어요",time:75},
  {id:18,name:"송**",type:"정보이용료",amount:"45만원",rating:5,text:"5분 만에 입금! 정말 빠르네요",time:80},
  {id:19,name:"류**",type:"휴대폰 소액결제",amount:"35만원",rating:5,text:"친절한 상담원 덕분에 쉽게 이용했어요",time:85},
  {id:20,name:"전**",type:"신용카드",amount:"90만원",rating:5,text:"단가도 좋고 서비스도 만족스럽습니다",time:90},
  {id:21,name:"홍**",type:"휴대폰 소액결제",amount:"50만원",rating:5,text:"재이용이에요. 언제나 믿고 맡깁니다",time:95},
  {id:22,name:"고**",type:"정보이용료",amount:"65만원",rating:5,text:"365일 언제나 빠른 처리 감사해요!",time:100},
  {id:23,name:"문**",type:"신용카드",amount:"130만원",rating:5,text:"카드 한도 매입 전문이라더니 진짜 빠르네요",time:110},
  {id:24,name:"양**",type:"휴대폰 소액결제",amount:"20만원",rating:5,text:"새벽에 문의했는데 바로 처리해줘서 놀랐어요",time:115},
  {id:25,name:"배**",type:"신용카드",amount:"170만원",rating:5,text:"꼼꼼하고 안전한 거래 감사합니다!",time:120},
  {id:26,name:"조**",type:"정보이용료",amount:"55만원",rating:5,text:"처음이라 걱정했는데 친절하게 설명해줘서 안심",time:130},
  {id:27,name:"마**",type:"휴대폰 소액결제",amount:"30만원",rating:5,text:"빠른 입금 항상 만족합니다",time:140},
  {id:28,name:"손**",type:"신용카드",amount:"220만원",rating:5,text:"높은 단가로 처리해줘서 감사해요",time:150},
  {id:29,name:"나**",type:"휴대폰 소액결제",amount:"45만원",rating:5,text:"빠르고 정확하게! 앞으로도 계속 이용할게요",time:160},
  {id:30,name:"유**",type:"정보이용료",amount:"85만원",rating:5,text:"주변에서도 추천받아서 왔는데 정말 좋네요",time:170},
  {id:31,name:"하**",type:"신용카드",amount:"140만원",rating:5,text:"믿을 수 있는 업체 찾았어요. 여기가 최고!",time:180},
  {id:32,name:"곽**",type:"휴대폰 소액결제",amount:"25만원",rating:5,text:"간편하고 신속하게 해결됐습니다",time:190},
  {id:33,name:"성**",type:"신용카드",amount:"280만원",rating:5,text:"대금액 처리도 문제없이 안전하게 완료!",time:200},
  {id:34,name:"차**",type:"휴대폰 소액결제",amount:"18만원",rating:5,text:"소액도 빠르게 처리해주셔서 감사해요",time:210},
  {id:35,name:"우**",type:"정보이용료",amount:"75만원",rating:5,text:"단가가 제일 높아서 선택했는데 역시 최고네요",time:220},
  {id:36,name:"명**",type:"신용카드",amount:"160만원",rating:5,text:"이용할 때마다 만족스럽습니다. 최고!",time:230},
  {id:37,name:"도**",type:"휴대폰 소액결제",amount:"40만원",rating:5,text:"10분 만에 처리됐어요. 정말 빠릅니다",time:240},
  {id:38,name:"채**",type:"신용카드",amount:"200만원",rating:5,text:"안전하고 빠른 처리 감사드립니다",time:250},
  {id:39,name:"심**",type:"정보이용료",amount:"95만원",rating:5,text:"처음 이용인데 너무 편리하고 빠르네요",time:260},
  {id:40,name:"원**",type:"휴대폰 소액결제",amount:"22만원",rating:5,text:"밤늦게 문의했는데 빠르게 답해줘서 고마워요",time:270},
  {id:41,name:"방**",type:"신용카드",amount:"110만원",rating:5,text:"업계 최고 단가 실화예요? 완전 만족!",time:280},
  {id:42,name:"여**",type:"휴대폰 소액결제",amount:"15만원",rating:5,text:"소액도 친절하게 응대해주셔서 감사합니다",time:290},
  {id:43,name:"민**",type:"정보이용료",amount:"60만원",rating:5,text:"재이용 완료! 항상 만족스러워요",time:300},
  {id:44,name:"편**",type:"신용카드",amount:"190만원",rating:5,text:"빠르고 안전하게 처리해줘서 감사합니다",time:310},
  {id:45,name:"남**",type:"휴대폰 소액결제",amount:"35만원",rating:5,text:"처음에 불안했는데 안심하고 이용했어요",time:320},
  {id:46,name:"엄**",type:"신용카드",amount:"240만원",rating:5,text:"이 금액에 이 단가? 다른 데 갈 이유가 없네요",time:330},
  {id:47,name:"구**",type:"정보이용료",amount:"50만원",rating:5,text:"친절한 상담 덕분에 쉽게 해결했어요",time:340},
  {id:48,name:"진**",type:"휴대폰 소액결제",amount:"28만원",rating:5,text:"빠른 처리와 친절한 서비스 만점이에요!",time:350},
  {id:49,name:"탁**",type:"신용카드",amount:"155만원",rating:5,text:"여러 곳 비교했는데 여기가 단가 제일 높아요",time:360},
  {id:50,name:"국**",type:"휴대폰 소액결제",amount:"12만원",rating:5,text:"소액이어도 빠르게 처리해줘서 감사해요",time:370},
  {id:51,name:"임**",type:"신용카드",amount:"135만원",rating:5,text:"카드 한도 매입 전문이라 믿고 맡겼어요",time:380},
  {id:52,name:"형**",type:"정보이용료",amount:"88만원",rating:5,text:"단가도 좋고 속도도 빠르고 서비스도 친절해요",time:390},
  {id:53,name:"태**",type:"휴대폰 소액결제",amount:"42만원",rating:5,text:"5번째 이용이에요. 항상 믿고 맡깁니다",time:400},
  {id:54,name:"석**",type:"신용카드",amount:"270만원",rating:5,text:"큰 금액 처리도 안전하게 잘 해주셨어요",time:420},
  {id:55,name:"기**",type:"휴대폰 소액결제",amount:"17만원",rating:5,text:"처음이라 떨렸는데 친절하게 안내해줘서 감사",time:430},
  {id:56,name:"현**",type:"정보이용료",amount:"72만원",rating:5,text:"믿을 수 있는 곳이에요. 주변에도 추천할게요",time:440},
  {id:57,name:"민**",type:"신용카드",amount:"115만원",rating:5,text:"빠르고 깔끔하게 처리! 역시 전문 업체네요",time:450},
  {id:58,name:"선**",type:"휴대폰 소액결제",amount:"33만원",rating:5,text:"급하게 필요했는데 바로 처리해줘서 감사합니다",time:460},
  {id:59,name:"준**",type:"신용카드",amount:"195만원",rating:5,text:"안전하고 믿을 수 있어요. 재이용 예정!",time:470},
  {id:60,name:"희**",type:"정보이용료",amount:"67만원",rating:5,text:"24시간 운영이라 편하게 이용했어요",time:480},
  {id:61,name:"상**",type:"휴대폰 소액결제",amount:"26만원",rating:5,text:"친절하고 빠른 서비스 만족합니다",time:490},
  {id:62,name:"연**",type:"신용카드",amount:"145만원",rating:5,text:"92% 단가 실화! 업계 최고네요",time:500},
  {id:63,name:"봄**",type:"휴대폰 소액결제",amount:"19만원",rating:5,text:"소액도 성심성의껏 처리해주셔서 감사해요",time:510},
  {id:64,name:"여**",type:"정보이용료",amount:"58만원",rating:5,text:"빠른 처리 덕분에 급한 불 껐어요. 감사합니다!",time:520},
  {id:65,name:"름**",type:"신용카드",amount:"225만원",rating:5,text:"대금액도 안전하게! 최고의 업체입니다",time:530},
  {id:66,name:"달**",type:"휴대폰 소액결제",amount:"38만원",rating:5,text:"여러 번 이용해봤는데 언제나 만족스러워요",time:540},
  {id:67,name:"별**",type:"신용카드",amount:"175만원",rating:5,text:"믿고 맡길 수 있는 업체! 강력 추천합니다",time:550},
  {id:68,name:"빛**",type:"정보이용료",amount:"82만원",rating:5,text:"단가 비교해봤는데 여기가 제일 높더라고요",time:560},
  {id:69,name:"솔**",type:"휴대폰 소액결제",amount:"23만원",rating:5,text:"처음 이용했는데 너무 편리하고 빠르네요!",time:570},
  {id:70,name:"진**",type:"신용카드",amount:"310만원",rating:5,text:"이렇게 큰 금액도 걱정없이 처리되니 믿음직해요",time:580},
  {id:71,name:"도**",type:"휴대폰 소액결제",amount:"47만원",rating:5,text:"새벽 2시에 문의했는데 즉시 답변! 진짜 24시간",time:590},
  {id:72,name:"나**",type:"정보이용료",amount:"93만원",rating:5,text:"상담부터 입금까지 10분! 놀라운 속도예요",time:600},
  {id:73,name:"라**",type:"신용카드",amount:"160만원",rating:5,text:"안전한 거래 보장해줘서 안심하고 이용했어요",time:610},
  {id:74,name:"마**",type:"휴대폰 소액결제",amount:"14만원",rating:5,text:"소액도 빠르게 처리해줘서 너무 감사해요",time:620},
  {id:75,name:"바**",type:"신용카드",amount:"205만원",rating:5,text:"5번째 이용! 항상 같은 퀄리티로 감사합니다",time:630},
  {id:76,name:"사**",type:"정보이용료",amount:"76만원",rating:5,text:"빠르고 친절한 서비스 덕분에 만족스러워요",time:640},
  {id:77,name:"아**",type:"휴대폰 소액결제",amount:"32만원",rating:5,text:"10분 만에 입금 확인! 진짜 빠르네요",time:650},
  {id:78,name:"자**",type:"신용카드",amount:"190만원",rating:5,text:"높은 단가와 빠른 처리 두 마리 토끼 잡았어요",time:660},
  {id:79,name:"차**",type:"휴대폰 소액결제",amount:"44만원",rating:5,text:"재이용 할 때마다 만족도가 올라가요!",time:670},
  {id:80,name:"카**",type:"정보이용료",amount:"69만원",rating:5,text:"믿을 수 있는 전문 업체예요. 강추!",time:680},
  {id:81,name:"타**",type:"신용카드",amount:"235만원",rating:5,text:"큰 금액도 안전하고 빠르게 처리됐어요",time:690},
  {id:82,name:"파**",type:"휴대폰 소액결제",amount:"21만원",rating:5,text:"새벽에도 빠른 응답! 24시간 운영 믿을 수 있어요",time:700},
  {id:83,name:"하**",type:"신용카드",amount:"125만원",rating:5,text:"처음 이용했는데 대만족! 다음에도 올게요",time:710},
  {id:84,name:"가**",type:"정보이용료",amount:"54만원",rating:5,text:"빠른 처리와 높은 단가 최고의 조합이에요",time:720},
  {id:85,name:"나**",type:"휴대폰 소액결제",amount:"36만원",rating:5,text:"친절한 상담원 덕분에 편하게 이용했어요",time:730},
  {id:86,name:"다**",type:"신용카드",amount:"185만원",rating:5,text:"안전성 확인 후 이용했는데 역시 믿음직해요",time:740},
  {id:87,name:"라**",type:"휴대폰 소액결제",amount:"11만원",rating:5,text:"소액도 신속하게 처리! 감사합니다",time:750},
  {id:88,name:"마**",type:"정보이용료",amount:"98만원",rating:5,text:"단가 최고! 서비스 최고! 여기가 최고예요",time:760},
  {id:89,name:"바**",type:"신용카드",amount:"260만원",rating:5,text:"대금액 전문이라더니 역시 믿을 수 있네요",time:770},
  {id:90,name:"사**",type:"휴대폰 소액결제",amount:"27만원",rating:5,text:"처음 이용인데 이렇게 친절하게 안내해줘서 감사해요",time:780},
  {id:91,name:"아**",type:"신용카드",amount:"148만원",rating:5,text:"매달 이용하고 있어요. 항상 만족스럽습니다",time:790},
  {id:92,name:"자**",type:"정보이용료",amount:"63만원",rating:5,text:"급할 때 빠르게 처리해줘서 너무 도움됐어요",time:800},
  {id:93,name:"차**",type:"휴대폰 소액결제",amount:"41만원",rating:5,text:"믿음직한 업체예요. 주변에 적극 추천!",time:810},
  {id:94,name:"카**",type:"신용카드",amount:"215만원",rating:5,text:"92% 단가 그대로! 다른 곳은 이제 못 가겠어요",time:820},
  {id:95,name:"타**",type:"휴대폰 소액결제",amount:"16만원",rating:5,text:"빠르고 안전한 처리 감사드립니다",time:830},
  {id:96,name:"파**",type:"정보이용료",amount:"87만원",rating:5,text:"365일 24시간 운영이라 언제든 이용 가능해서 좋아요",time:840},
  {id:97,name:"하**",type:"신용카드",amount:"172만원",rating:5,text:"전문 업체답게 빠르고 안전한 처리! 최고입니다",time:850},
  {id:98,name:"개**",type:"휴대폰 소액결제",amount:"29만원",rating:5,text:"이용하면 할수록 더 믿음이 가는 곳이에요",time:860},
  {id:99,name:"나**",type:"신용카드",amount:"195만원",rating:5,text:"오래 이용한 단골이에요. 항상 최고입니다!",time:870},
  {id:100,name:"다**",type:"정보이용료",amount:"74만원",rating:5,text:"처음 이용했는데 이렇게 빠를 줄 몰랐어요. 감사합니다!",time:880}
];

/* ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  initHeader();
  initFAQ();
  initScrollTop();
  initFadeUp();
  initCounters();
  initReviews();
  initFloatCTA();
});

/* ============ HEADER SCROLL ============ */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ============ FAQ ACCORDION ============ */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ============ SCROLL TO TOP ============ */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============ FADE UP ANIMATION ============ */
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}

/* ============ COUNTER ANIMATION ============ */
function initCounters() {
  const counters = document.querySelectorAll('.count-num');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, 0, target, 1500, suffix);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

function animateCounter(el, start, end, duration, suffix) {
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * ease);
    el.textContent = current.toLocaleString('ko-KR') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ============ REVIEWS ============ */

// 페이지 로드 시각 기준 — 각 리뷰의 r.time(분)을 실제 timestamp로 변환
const PAGE_LOAD = Date.now();

// 실제 timestamp → 상대 시간 문자열
function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts) / 60000); // 분 단위
  if (diff < 1)  return '방금 전';
  if (diff < 60) return diff + '분 전';
  const h = Math.floor(diff / 60);
  if (h < 24)    return h + '시간 전';
  const d = Math.floor(h / 24);
  if (d < 7)     return d + '일 전';
  const date = new Date(ts);
  return (date.getMonth()+1) + '/' + date.getDate();
}

// 각 리뷰에 실제 timestamp 부여 (r.time = "몇 분 전")
REVIEWS.forEach(r => {
  r.ts = PAGE_LOAD - r.time * 60000;
});

// 카드 DOM 생성
function buildCard(r, isNew) {
  const div = document.createElement('div');
  div.className = 'review-card' + (isNew ? ' is-new' : '');
  div.dataset.ts = r.ts;
  div.innerHTML =
    '<div class="review-top">' +
      '<div class="reviewer-info">' +
        '<div class="reviewer-avatar">' + r.name[0] + '</div>' +
        '<div>' +
          '<div class="reviewer-name">' + r.name +
            (isNew ? '<span class="review-new-badge">NEW</span>' : '') +
          '</div>' +
          '<div class="reviewer-type">' + r.type + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="review-stars"><span>★★★★★</span></div>' +
    '</div>' +
    '<div class="review-amount">' + r.amount + ' 매입 완료</div>' +
    '<div class="review-text">' + r.text + '</div>' +
    '<div class="review-bottom">' +
      '<span class="review-time" data-ts="' + r.ts + '">' + timeAgo(r.ts) + '</span>' +
      '<span class="review-verified">' +
        '<svg viewBox="0 0 20 20" fill="currentColor" style="width:12px;height:12px">' +
          '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>' +
        '</svg>' +
        ' 실거래 확인' +
      '</span>' +
    '</div>';
  return div;
}

// 모든 카드의 시간 텍스트 갱신 (1분마다)
function refreshTimes() {
  document.querySelectorAll('.review-time[data-ts]').forEach(el => {
    el.textContent = timeAgo(parseInt(el.dataset.ts, 10));
  });
}

function initReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  // ── 최신순 정렬 (time 작을수록 최신)
  const byRecent = [...REVIEWS].sort((a, b) => a.time - b.time);

  // ── 초기 8개 렌더
  const GRID_MAX = 8;
  byRecent.slice(0, GRID_MAX).forEach(r => grid.appendChild(buildCard(r, false)));

  // ── 라이브 순환 큐 (8~30위 후기를 순서대로 위에 추가)
  const livePool = byRecent.slice(GRID_MAX, 30);
  let liveIdx = 0;

  function pushLive() {
    if (livePool.length === 0) return;
    if (liveIdx >= livePool.length) liveIdx = 0;
    const freshR = Object.assign({}, livePool[liveIdx++], { ts: Date.now() });
    const card = buildCard(freshR, true);
    grid.insertBefore(card, grid.firstChild);
    // NEW 뱃지 5초 후 자연스럽게 제거
    setTimeout(() => {
      const badge = card.querySelector('.review-new-badge');
      if (badge) badge.remove();
      card.classList.remove('is-new');
    }, 5000);
    // 항상 GRID_MAX개 유지
    const cards = grid.querySelectorAll('.review-card');
    if (cards.length > GRID_MAX) cards[cards.length - 1].remove();
  }

  // 8~14초 랜덤 간격
  (function scheduleNext() {
    setTimeout(() => { pushLive(); scheduleNext(); }, 8000 + Math.random() * 6000);
  })();

  // ── 1분마다 시간 텍스트 갱신
  setInterval(refreshTimes, 60000);

  // ── 접속자 카운트
  // liveCount는 HTML에서 150 고정

  // ── 모달 초기화
  initModal();
}

/* ============ REVIEW MODAL ============ */
function initModal() {
  const overlay  = document.getElementById('reviewModal');
  const openBtn  = document.getElementById('openReviewModal');
  const closeBtn = document.getElementById('closeModal');
  const listEl   = document.getElementById('modalList');
  const paginEl  = document.getElementById('modalPagination');
  if (!overlay || !openBtn) return;

  const PER_PAGE = 10;
  let shuffled = [];
  let currentPage = 0;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderPage(page) {
    currentPage = page;
    const start = page * PER_PAGE;
    const items = shuffled.slice(start, start + PER_PAGE);

    listEl.innerHTML = '';
    items.forEach(r => {
      const row = document.createElement('div');
      row.className = 'modal-row';
      row.innerHTML =
        '<div class="modal-row-avatar">' + r.name[0] + '</div>' +
        '<div class="modal-row-body">' +
          '<div class="modal-row-top">' +
            '<span class="modal-row-name">' + r.name + '</span>' +
            '<span class="modal-row-type">' + r.type + '</span>' +
            '<span class="modal-row-stars">★★★★★</span>' +
          '</div>' +
          '<div class="modal-row-text">' + r.text + '</div>' +
        '</div>' +
        '<div class="modal-row-right">' +
          '<div class="modal-row-amount">' + r.amount + '</div>' +
          '<div class="modal-row-time">' + timeAgo(r.ts) + '</div>' +
        '</div>';
      listEl.appendChild(row);
    });
    listEl.scrollTop = 0;
    renderPagination();
  }

  function renderPagination() {
    const totalPages = Math.ceil(shuffled.length / PER_PAGE);
    paginEl.innerHTML = '';

    // 이전
    const prev = document.createElement('button');
    prev.className = 'page-btn';
    prev.textContent = '‹';
    prev.disabled = currentPage === 0;
    prev.addEventListener('click', () => renderPage(currentPage - 1));
    paginEl.appendChild(prev);

    // 페이지 번호 (최대 5개 표시)
    const half = 2;
    let start = Math.max(0, currentPage - half);
    let end   = Math.min(totalPages - 1, start + 4);
    start = Math.max(0, end - 4);

    for (let i = start; i <= end; i++) {
      const btn = document.createElement('button');
      btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
      btn.textContent = i + 1;
      btn.addEventListener('click', () => renderPage(i));
      paginEl.appendChild(btn);
    }

    // 다음
    const next = document.createElement('button');
    next.className = 'page-btn';
    next.textContent = '›';
    next.disabled = currentPage >= totalPages - 1;
    next.addEventListener('click', () => renderPage(currentPage + 1));
    paginEl.appendChild(next);
  }

  function openModal() {
    shuffled = shuffle(REVIEWS);  // 열 때마다 랜덤 순서
    renderPage(0);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  // 오버레이 바깥 클릭 시 닫기
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  // ESC 닫기
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ============ CONFIG 적용 (전화/카카오 일괄) ============ */
function applyConfig() {
  // 전화번호
  document.querySelectorAll('a[href^="tel:"]').forEach(el => {
    el.href = 'tel:' + CONFIG.phone.replace(/-/g, '');
  });
  document.querySelectorAll('[onclick*="tel:"]').forEach(el => {
    el.setAttribute('onclick', "location.href='tel:" + CONFIG.phone.replace(/-/g, '') + "'");
  });

  // 카카오 링크
  document.querySelectorAll('[data-kakao-link]').forEach(el => {
    if (el.tagName === 'A') {
      el.href = CONFIG.kakao;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    } else {
      el.addEventListener('click', () => window.open(CONFIG.kakao, '_blank'));
    }
  });
}

/* ============ FLOAT CTA ============ */
function initFloatCTA() {
  // applyConfig()에서 처리
}

/* ============ SMOOTH ANCHOR ============ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
