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

// Shuffle questions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(questions);

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('nextBtn');
const currentScoreEl = document.getElementById('current-score');
const bestScoreEl = document.getElementById('best-score');
const endScreen = document.getElementById('end-screen');
const finalScoreEl = document.getElementById('final-score');
const performanceEl = document.getElementById('performance');
const restartBtn = document.getElementById('restart-btn');
const quizContainer = document.getElementById('quiz-container');

let currentQuestionIndex = 0;
let score = 0;
let bestScore = localStorage.getItem('bestScore') || 0;
bestScoreEl.textContent = bestScore;

// Load first question
loadQuestion();

function loadQuestion() {
  nextBtn.disabled = true;
  answersEl.innerHTML = '';
  endScreen.hidden = true;
  quizContainer.hidden = false;

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.classList.add('answer-btn');
      button.setAttribute('data-index', index);
      button.addEventListener('click', selectAnswer);
      answersEl.appendChild(button);
    });
  } else {
    // End of quiz
    showEndScreen();
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const answerIndex = selectedBtn.getAttribute('data-index');
  const correctIndex = questions[currentQuestionIndex].correct;
  if (answerIndex == correctIndex) {
    score++;
    currentScoreEl.textContent = score;
    selectedBtn.classList.add('correct');
  } else {
    selectedBtn.classList.add('wrong');
    // Highlight correct answer
    Array.from(answersEl.children).forEach(button => {
      if (button.getAttribute('data-index') == correctIndex) {
        button.classList.add('correct');
      }
    });
  }
  Array.from(answersEl.children).forEach(button => button.disabled = true);
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showEndScreen();
  }
});

restartBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  currentScoreEl.textContent = score;
  shuffle(questions);
  loadQuestion();
});

function showEndScreen() {
  quizContainer.hidden = true;
  endScreen.hidden = false;
  finalScoreEl.textContent = score;
  const total = questions.length;
  const percentage = (score / total) * 100;
  let level = 'Beginner';
  if (percentage >= 80) {
    level = 'Expert';
  } else if (percentage >= 50) {
    level = 'Intermediate';
  }
  performanceEl.textContent = `Security Awareness Level: ${level}`;
  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem('bestScore', bestScore);
    bestScoreEl.textContent = bestScore;
  }
}

// On load, display stored best score
document.addEventListener('DOMContentLoaded', () => {
  const storedBest = localStorage.getItem('bestScore');
  if (storedBest !== null) {
    bestScore = storedBest;
    bestScoreEl.textContent = bestScore;
  }
});

