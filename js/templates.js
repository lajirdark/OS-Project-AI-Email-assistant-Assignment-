/* ============================================================
   AEG — AI Email Agent | templates.js
   Smart template engine — no API required
   Author: Lim Artyom (24013565)
   ============================================================ */

"use strict";

/* ── Greetings ───────────────────────────────────────────── */

const GREETINGS = {
  en: {
    formal: {
      professor: (name) => name ? `Dear Professor ${name},` : `Dear Professor,`,
      employer:  (name) => name ? `Dear ${name},` : `Dear Hiring Manager,`,
      company:   (name) => name ? `Dear ${name},` : `Dear Customer Service Team,`,
      colleague: (name) => name ? `Dear ${name},` : `Dear Team,`,
      client:    (name) => name ? `Dear ${name},` : `Dear Sir/Madam,`,
    },
    "semi-formal": {
      professor: (name) => name ? `Dear Prof. ${name},` : `Dear Professor,`,
      employer:  (name) => name ? `Dear ${name},` : `Dear Hiring Team,`,
      company:   (name) => name ? `Dear ${name},` : `Dear Support Team,`,
      colleague: (name) => name ? `Hi ${name},` : `Hi Team,`,
      client:    (name) => name ? `Dear ${name},` : `Dear Client,`,
    },
    friendly: {
      professor: (name) => name ? `Hi Prof. ${name},` : `Hi Professor,`,
      employer:  (name) => name ? `Hi ${name},` : `Hi there,`,
      company:   (name) => name ? `Hi ${name},` : `Hi Support Team,`,
      colleague: (name) => name ? `Hey ${name},` : `Hey Team,`,
      client:    (name) => name ? `Hi ${name},` : `Hi there,`,
    }
  },
  ko: {
    formal: {
      professor: (name) => name ? `${name} 교수님께,` : `교수님께,`,
      employer:  (name) => name ? `${name} 담당자님께,` : `담당자님께,`,
      company:   (name) => name ? `${name} 고객센터 담당자님께,` : `고객센터 담당자님께,`,
      colleague: (name) => name ? `${name} 님께,` : `팀원 여러분께,`,
      client:    (name) => name ? `${name} 님께,` : `귀하께,`,
    },
    "semi-formal": {
      professor: (name) => name ? `${name} 교수님,` : `교수님,`,
      employer:  (name) => name ? `${name} 담당자님,` : `채용 담당자님,`,
      company:   (name) => name ? `${name} 담당자님,` : `고객지원팀 담당자님,`,
      colleague: (name) => name ? `${name} 님,` : `팀원 여러분,`,
      client:    (name) => name ? `${name} 님,` : `고객님,`,
    },
    friendly: {
      professor: (name) => name ? `안녕하세요, ${name} 교수님!` : `안녕하세요, 교수님!`,
      employer:  (name) => name ? `안녕하세요, ${name} 님!` : `안녕하세요!`,
      company:   (name) => name ? `안녕하세요, ${name} 님!` : `안녕하세요!`,
      colleague: (name) => name ? `안녕, ${name}!` : `안녕하세요, 팀원 여러분!`,
      client:    (name) => name ? `안녕하세요, ${name} 님!` : `안녕하세요!`,
    }
  }
};

/* ── Closings ────────────────────────────────────────────── */

const CLOSINGS = {
  en: {
    formal:       ["Yours sincerely,", "Yours faithfully,", "Respectfully yours,"],
    "semi-formal":["Kind regards,", "Best regards,", "With regards,"],
    friendly:     ["Best wishes,", "Warm regards,", "Thanks again,"]
  },
  ko: {
    formal:       ["감사합니다.", "존경을 담아,", "삼가 드립니다."],
    "semi-formal":["감사드립니다.", "잘 부탁드립니다.", "안녕히 계세요."],
    friendly:     ["감사합니다!", "잘 부탁드려요!", "좋은 하루 되세요!"]
  }
};

/* ── Subject lines ───────────────────────────────────────── */

const SUBJECTS = {
  en: {
    request:     ["Request for Assistance", "Formal Request", "Kindly Requesting Your Support"],
    apology:     ["Sincere Apology", "Apology and Explanation", "Regarding My Recent Absence"],
    "follow-up": ["Following Up on My Previous Message", "Follow-Up Inquiry", "Checking In"],
    complaint:   ["Formal Complaint – Request for Resolution", "Complaint Regarding Recent Experience", "Issue Report"],
    application: ["Application for Position", "Job Application", "Interest in Open Role"],
    "thank-you": ["Expressing My Gratitude", "Thank You", "Sincere Thanks"],
    inquiry:     ["General Inquiry", "Request for Information", "Question Regarding Your Services"]
  },
  ko: {
    request:     ["도움 요청드립니다", "요청 사항 안내", "협조 부탁드립니다"],
    apology:     ["사과 말씀 드립니다", "사과 및 경위 설명", "지각/결석에 대한 사과"],
    "follow-up": ["이전 메일 관련 후속 문의", "진행 상황 확인 요청", "답변 확인 요청"],
    complaint:   ["불만 사항 접수 및 해결 요청", "서비스 관련 불편 신고", "민원 접수"],
    application: ["지원서 제출", "채용 지원 안내", "인턴십 지원"],
    "thank-you": ["감사 인사 드립니다", "감사합니다", "도움에 감사드립니다"],
    inquiry:     ["문의 드립니다", "정보 요청", "서비스 관련 질문"]
  }
};

/* ── Body paragraphs ─────────────────────────────────────── */

const OPENERS = {
  en: {
    formal: [
      "I hope this message finds you in good health and high spirits.",
      "I trust this email finds you well.",
      "I am writing to you with the utmost respect regarding an important matter.",
    ],
    "semi-formal": [
      "I hope you are doing well.",
      "I hope this email finds you well.",
      "Thank you for taking the time to read this message.",
    ],
    friendly: [
      "Hope you're having a great day!",
      "I hope all is going well on your end.",
      "Thanks for taking a moment to read this!",
    ]
  },
  ko: {
    formal: [
      "항상 수고 많으십니다.",
      "바쁘신 와중에 이렇게 연락드리게 되어 죄송합니다.",
      "귀하의 건승을 기원합니다.",
    ],
    "semi-formal": [
      "안녕하세요, 잘 지내고 계시길 바랍니다.",
      "이렇게 연락드리게 되어 반갑습니다.",
      "메일 읽어주셔서 감사합니다.",
    ],
    friendly: [
      "안녕하세요! 좋은 하루 보내고 계신가요?",
      "잘 지내고 계시죠?",
      "안녕하세요, 오늘 하루도 잘 보내셨으면 좋겠습니다!",
    ]
  }
};

/* Purpose-specific body templates */

const BODIES = {
  en: {
    request: (situation) => [
      `I am writing to respectfully request your assistance regarding the following matter:`,
      ``,
      `${situation}`,
      ``,
      `I understand that you are very busy and I sincerely appreciate your time and consideration. I would be grateful for any support or guidance you could provide.`,
      ``,
      `Please do not hesitate to contact me should you require any additional information.`,
    ].join("\n"),

    apology: (situation) => [
      `I am writing to sincerely apologize for the following situation:`,
      ``,
      `${situation}`,
      ``,
      `I take full responsibility for this and deeply regret any inconvenience it may have caused. I assure you that I am taking the necessary steps to ensure this does not happen again.`,
      ``,
      `I truly value our relationship and hope that you will accept my sincere apologies.`,
    ].join("\n"),

    "follow-up": (situation) => [
      `I am writing to follow up on the matter described below:`,
      ``,
      `${situation}`,
      ``,
      `I wanted to check if there have been any updates or if there is any additional information I can provide to help move things forward. I appreciate your patience and look forward to hearing from you.`,
    ].join("\n"),

    complaint: (situation) => [
      `I am writing to formally bring the following issue to your attention:`,
      ``,
      `${situation}`,
      ``,
      `I trust that you take customer concerns seriously and kindly request that this matter be addressed at your earliest convenience. I would appreciate confirmation of receipt of this message and information on the next steps.`,
    ].join("\n"),

    application: (situation) => [
      `I am writing to express my strong interest in the opportunity described below:`,
      ``,
      `${situation}`,
      ``,
      `I am a motivated and detail-oriented individual eager to contribute my skills and enthusiasm to your organization. I have attached my relevant documents for your review and would welcome the opportunity to discuss my application further.`,
      ``,
      `Thank you for considering my application.`,
    ].join("\n"),

    "thank-you": (situation) => [
      `I am writing to express my heartfelt gratitude for the following:`,
      ``,
      `${situation}`,
      ``,
      `Your support has truly made a meaningful difference, and I am deeply appreciative of the time and effort you invested. It has been an honor and a pleasure.`,
    ].join("\n"),

    inquiry: (situation) => [
      `I am writing to inquire about the following matter:`,
      ``,
      `${situation}`,
      ``,
      `I would greatly appreciate any information or clarification you are able to provide. Please feel free to contact me at your earliest convenience if you need any further details.`,
    ].join("\n"),
  },

  ko: {
    request: (situation) => [
      `다름이 아니오라, 아래와 같은 사항으로 도움을 요청드리고자 연락드립니다.`,
      ``,
      `${situation}`,
      ``,
      `바쁘신 중에 번거로움을 드려 죄송합니다. 작은 도움이라도 주신다면 정말 감사하겠습니다.`,
      ``,
      `추가로 필요한 사항이 있으시면 언제든지 연락 주시기 바랍니다.`,
    ].join("\n"),

    apology: (situation) => [
      `아래 상황과 관련하여 진심으로 사과의 말씀을 전하고자 연락드립니다.`,
      ``,
      `${situation}`,
      ``,
      `전적으로 제 잘못임을 인정하며, 이로 인해 불편을 드린 점 깊이 반성하고 있습니다. 다시는 이런 일이 반복되지 않도록 최선을 다하겠습니다.`,
      ``,
      `부디 너그럽게 용서해 주시길 부탁드립니다.`,
    ].join("\n"),

    "follow-up": (situation) => [
      `이전에 문의드린 내용과 관련하여 진행 상황을 확인하고자 연락드립니다.`,
      ``,
      `${situation}`,
      ``,
      `혹시 추가로 필요한 서류나 정보가 있으시면 언제든지 말씀해 주세요. 기다리고 있겠습니다. 감사합니다.`,
    ].join("\n"),

    complaint: (situation) => [
      `아래 내용과 관련하여 공식적으로 불만 사항을 접수하고자 연락드립니다.`,
      ``,
      `${situation}`,
      ``,
      `빠른 시일 내에 해결책을 제시해 주시길 정중히 요청드립니다. 이 메일을 확인하신 후 처리 절차에 대해 안내해 주시면 감사하겠습니다.`,
    ].join("\n"),

    application: (situation) => [
      `아래와 같은 기회에 지원하고자 연락드립니다.`,
      ``,
      `${situation}`,
      ``,
      `저는 성실하고 열정적인 지원자로서 귀사에 기여할 수 있다고 자신합니다. 관련 서류를 첨부하였으니 검토해 주시기 바라며, 면접 기회를 주신다면 감사하겠습니다.`,
    ].join("\n"),

    "thank-you": (situation) => [
      `아래와 관련하여 진심으로 감사의 마음을 전하고자 연락드립니다.`,
      ``,
      `${situation}`,
      ``,
      `베풀어 주신 도움과 관심 덕분에 큰 힘을 얻었습니다. 앞으로도 잘 부탁드리겠습니다.`,
    ].join("\n"),

    inquiry: (situation) => [
      `아래 사항에 대해 문의드리고자 연락드립니다.`,
      ``,
      `${situation}`,
      ``,
      `관련하여 답변 주시면 정말 감사하겠습니다. 추가 정보가 필요하시면 언제든지 연락 주시기 바랍니다.`,
    ].join("\n"),
  }
};

/* ── Main generator function ─────────────────────────────── */

function buildEmail({ recipient, purpose, tone, lang, sender, recipientName, situation }) {
  const L = lang || "en";
  const T = tone || "formal";
  const R = recipient || "professor";
  const P = purpose || "request";

  // Pick random item from array
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Subject
  const subject = pick(SUBJECTS[L][P]);

  // Greeting
  const greeting = GREETINGS[L][T][R](recipientName);

  // Opener
  const opener = pick(OPENERS[L][T]);

  // Body
  const body = BODIES[L][P](situation);

  // Closing
  const closing = pick(CLOSINGS[L][T]);

  // Signature
  const sig = sender
    ? (L === "ko" ? sender : sender)
    : (L === "ko" ? "[보내는 사람 이름]" : "[Your Name]");

  // Assemble
  return [
    `Subject: ${subject}`,
    ``,
    greeting,
    ``,
    opener,
    ``,
    body,
    ``,
    closing,
    sig,
  ].join("\n");
}
