console.log("GAME.JS LOADED ✅");

// Security Awareness Quiz Game
const questions = [
  {
    question: "What does 'phishing' typically involve?",
    answers: ["Sending fraudulent emails to steal information", "Using brute force attacks on servers", "Installing antivirus software", "Securely encrypting data"],
    correct: 0
  },
  {
    question: "A strong password should include:",
    answers: ["Your birthdate", "Common dictionary words", "A mix of letters, numbers, and symbols", "The word 'password'"],
    correct: 2
  },
  {
    question: "Which of these is an example of social engineering?",
    answers: ["Tailgating into a secure building by pretending to be an employee", "Scanning for open ports on a server", "Encrypting files for security", "Updating software regularly"],
    correct: 0
  },
  {
    question: "What is the purpose of two-factor authentication?",
    answers: ["To make logging in faster", "To require two forms of verification for security", "To send advertisements", "To track users"],
    correct: 1
  },
  {
    question: "Which of the following indicates a secure website?",
    answers: ["Pop-up ads", "HTTP in the URL", "HTTPS and a lock icon", "Random redirects"],
    correct: 2
  },
  {
    question: "What should you do if you receive a suspicious email?",
    answers: ["Click links immediately", "Reply with personal info", "Report it as phishing", "Ignore security warnings"],
    correct: 2
  },
  {
    question: "Malware that demands payment to restore files is called:",
    answers: ["Adware", "Spyware", "Ransomware", "Worm"],
    correct: 2
  },
  {
    question: "Which device is most vulnerable on public Wi-Fi?",
    answers: ["Offline devices", "Devices without encryption", "Powered-off devices", "Airplane mode devices"],
    correct: 1
  },
  {
    question: "What does antivirus software primarily do?",
    answers: ["Create backups", "Detect and remove malware", "Encrypt files", "Monitor internet speed"],
    correct: 1
  },
  {
    question: "Which action improves email security?",
    answers: ["Opening all attachments", "Using spam filters", "Sharing passwords", "Ignoring sender details"],
    correct: 1
  },

  /* ---------- Password & Authentication ---------- */

  {
    question: "Reusing passwords across accounts is:",
    answers: ["Recommended", "Convenient and safe", "Risky and insecure", "Required"],
    correct: 2
  },
  {
    question: "Password managers are useful because they:",
    answers: ["Store passwords securely", "Share passwords publicly", "Remove encryption", "Disable MFA"],
    correct: 0
  },
  {
    question: "What is brute-force attack?",
    answers: ["Guessing passwords repeatedly", "Sending phishing emails", "Scanning ports", "Encrypting traffic"],
    correct: 0
  },
  {
    question: "Which authentication factor is something you ARE?",
    answers: ["Password", "Smart card", "Fingerprint", "PIN"],
    correct: 2
  },
  {
    question: "Which password is strongest?",
    answers: ["password123", "Welcome@2024!", "John1998", "qwerty"],
    correct: 1
  },

  /* ---------- Web & Browser Security ---------- */

  {
    question: "Why should browser extensions be reviewed carefully?",
    answers: ["They can access personal data", "They improve speed only", "They disable HTTPS", "They reduce storage"],
    correct: 0
  },
  {
    question: "Pop-up ads claiming virus infection are usually:",
    answers: ["Genuine warnings", "System alerts", "Scams", "OS updates"],
    correct: 2
  },
  {
    question: "What is HTTPS mainly used for?",
    answers: ["Faster loading", "Encrypted communication", "Ad blocking", "Tracking users"],
    correct: 1
  },
  {
    question: "Which browser behavior is safest?",
    answers: ["Ignoring updates", "Using outdated plugins", "Keeping browser updated", "Disabling security warnings"],
    correct: 2
  },

  /* ---------- Malware & Attacks ---------- */

  {
    question: "A Trojan is:",
    answers: ["Self-replicating malware", "Malware disguised as legitimate software", "Network scanner", "Firewall"],
    correct: 1
  },
  {
    question: "Spyware is designed to:",
    answers: ["Improve performance", "Monitor user activity secretly", "Encrypt files", "Clean malware"],
    correct: 1
  },
  {
    question: "Which malware spreads without user interaction?",
    answers: ["Trojan", "Worm", "Ransomware", "Spyware"],
    correct: 1
  },
  {
    question: "What is keylogging?",
    answers: ["Tracking keystrokes", "Blocking malware", "Encrypting traffic", "Updating OS"],
    correct: 0
  },

  /* ---------- Mobile & Device Security ---------- */

  {
    question: "Which practice improves mobile security?",
    answers: ["Installing apps from unknown sources", "Keeping OS updated", "Disabling screen lock", "Sharing device"],
    correct: 1
  },
  {
    question: "What should you do before selling a phone?",
    answers: ["Remove SIM only", "Factory reset device", "Delete messages", "Remove apps"],
    correct: 1
  },
  {
    question: "Biometric security is based on:",
    answers: ["Passwords", "Physical traits", "PIN codes", "Tokens"],
    correct: 1
  },

  /* ---------- Social Engineering ---------- */

  {
    question: "Pretexting involves:",
    answers: ["Creating fake scenarios to gain trust", "Scanning networks", "Encrypting emails", "Blocking firewalls"],
    correct: 0
  },
  {
    question: "Vishing is:",
    answers: ["Email phishing", "Voice-based scams", "SMS attacks", "Malware injection"],
    correct: 1
  },
  {
    question: "Smishing refers to:",
    answers: ["Email scams", "Phone scams", "SMS phishing", "Wi-Fi attacks"],
    correct: 2
  },

  /* ---------- Network & Wi-Fi ---------- */

  {
    question: "Which Wi-Fi network is safest?",
    answers: ["Open Wi-Fi", "WEP encrypted", "WPA2/WPA3 encrypted", "Hidden SSID"],
    correct: 2
  },
  {
    question: "VPN helps by:",
    answers: ["Slowing internet", "Encrypting traffic", "Removing malware", "Blocking apps"],
    correct: 1
  },

  /* ---------- Data Protection ---------- */

  {
    question: "Why are backups important?",
    answers: ["Save storage", "Protect against data loss", "Increase malware", "Disable recovery"],
    correct: 1
  },
  {
    question: "Sensitive data should be:",
    answers: ["Shared publicly", "Encrypted", "Stored in plain text", "Emailed freely"],
    correct: 1
  },

  /* ---------- General Awareness ---------- */

  {
    question: "Least privilege principle means:",
    answers: ["Give all users full access", "Grant minimum required access", "Remove authentication", "Disable logging"],
    correct: 1
  },
  {
    question: "Security updates should be applied:",
    answers: ["Never", "Only yearly", "As soon as possible", "When hacked"],
    correct: 2
  },
  {
    question: "Which is a sign of a phishing website?",
    answers: ["Spelling errors", "Valid certificates", "Correct domain", "Secure design"],
    correct: 0
  },
  {
    question: "Why should you lock your computer?",
    answers: ["Save power", "Prevent unauthorized access", "Increase speed", "Reduce storage"],
    correct: 1
  }
];

// Shuffle
questions.sort(() => Math.random() - 0.5);

// DOM
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("current-score");
const bestEl = document.getElementById("best-score");
const quiz = document.getElementById("quiz-container");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const performance = document.getElementById("performance");
const restartBtn = document.getElementById("restart-btn");

// State
let index = 0;
let score = 0;
let best = localStorage.getItem("bestScore") || 0;
bestEl.textContent = best;

// Init
loadQuestion();

function loadQuestion() {
  answersEl.innerHTML = "";
  nextBtn.disabled = true;

  if (index >= questions.length) {
    showEnd();
    return;
  }

  const q = questions[index];
  questionEl.textContent = q.question;

  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(i, q.correct);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("correct");
    if (i === selected && i !== correct) btn.classList.add("wrong");
  });

  if (selected === correct) {
    score++;
    scoreEl.textContent = score;
  }

  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  index++;
  loadQuestion();
};

function showEnd() {
  quiz.hidden = true;
  endScreen.hidden = false;

  finalScore.textContent = score;

  const level =
    score === questions.length ? "Expert 🔴" :
    score >= 2 ? "Intermediate 🟡" :
    "Beginner 🟢";

  performance.textContent = level;

  if (score > best) {
    localStorage.setItem("bestScore", score);
    bestEl.textContent = score;
  }
}

restartBtn.onclick = () => {
  index = 0;
  score = 0;
  scoreEl.textContent = 0;
  endScreen.hidden = true;
  quiz.hidden = false;
  loadQuestion();
};


