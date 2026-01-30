const questions = [
/* PHISHING */
{q:"What is phishing?", a:["Social engineering attack","Malware","Firewall","Encryption"], c:0},
{q:"A phishing email often contains?", a:["Urgent language","Official logo","HTTPS","CAPTCHA"], c:0},
{q:"Best way to verify suspicious email?", a:["Click link","Reply","Check sender domain","Ignore"], c:2},
{q:"Spear phishing targets?", a:["Everyone","Specific individuals","Servers","Firewalls"], c:1},
{q:"Smishing refers to phishing via?", a:["Email","SMS","Phone","Social media"], c:1},

/* PASSWORD SECURITY */
{q:"Strong password should include?", a:["Only letters","Only numbers","Length & complexity","Username"], c:2},
{q:"Password reuse risk?", a:["Faster login","Credential stuffing","Encryption","Hashing"], c:1},
{q:"Best storage for passwords?", a:["Browser","Password manager","Notes app","Email"], c:1},
{q:"What is MFA?", a:["Encryption","Two-factor authentication","VPN","Firewall"], c:1},
{q:"Password hashing protects against?", a:["Brute force","Data leaks","Phishing","Malware"], c:1},

/* WEB ATTACKS */
{q:"XSS allows attackers to?", a:["Execute JS","Steal hardware","Encrypt DB","Scan ports"], c:0},
{q:"SQL Injection targets?", a:["CSS","Database","Server RAM","Firewall"], c:1},
{q:"CSRF exploits?", a:["Trust in browser","Encryption","Passwords","Cookies disabled"], c:0},
{q:"IDOR belongs to?", a:["Injection","Broken Access Control","XSS","Cryptography"], c:1},
{q:"Clickjacking uses?", a:["Invisible frames","SQL","DNS","Cookies"], c:0},

/* NETWORK SECURITY */
{q:"Nmap is used for?", a:["Scanning","Exploitation","Phishing","Hashing"], c:0},
{q:"Firewall purpose?", a:["Block traffic","Encrypt files","Detect malware","Scan code"], c:0},
{q:"VPN provides?", a:["Anonymity","Encryption tunnel","Firewall","IDS"], c:1},
{q:"ARP spoofing affects?", a:["Network traffic","DNS","Passwords","Cookies"], c:0},
{q:"MITM attack stands for?", a:["Man in the Middle","Malware in Traffic","Memory Injection","Module Integrity Test"], c:0},

/* SOCIAL ENGINEERING */
{q:"Social engineering exploits?", a:["Human trust","Firewalls","Encryption","Software bugs"], c:0},
{q:"Pretexting involves?", a:["Fake scenario","Malware","Phishing link","Bruteforce"], c:0},
{q:"Tailgating attack?", a:["Physical access","Web exploit","Network scan","XSS"], c:0},
{q:"Baiting uses?", a:["Curiosity","Passwords","Encryption","Firewalls"], c:0},
{q:"Vishing occurs via?", a:["Email","SMS","Voice calls","Websites"], c:2},

/* SAFE BROWSING */
{q:"HTTPS indicates?", a:["Encrypted traffic","Trusted site","No malware","Legal website"], c:0},
{q:"Public WiFi risk?", a:["MITM","SQLi","XSS","CSRF"], c:0},
{q:"Browser updates fix?", a:["Vulnerabilities","Passwords","Emails","Firewalls"], c:0},
{q:"Pop-up claiming virus is?", a:["Scam","Update","Antivirus","Patch"], c:0},
{q:"Download software from?", a:["Official sources","Random sites","Ads","Emails"], c:0},

/* MOBILE SECURITY */
{q:"Mobile app permissions should be?", a:["Minimal","All enabled","Ignored","Shared"], c:0},
{q:"Rooting phone risk?", a:["Security bypass","More RAM","Encryption","Firewall"], c:0},
{q:"App sideloading risk?", a:["Malware","Speed","Battery","Updates"], c:0},
{q:"Biometrics provide?", a:["Authentication","Encryption","Firewall","IDS"], c:0},
{q:"Lost phone best action?", a:["Remote wipe","Ignore","Wait","Restart"], c:0},
];

// === GAME ENGINE ===
let score = 0;
let index = 0;
let shuffled = questions.sort(()=>0.5 - Math.random()).slice(0, 25);
let best = localStorage.bestScore || 0;

document.getElementById("best").textContent = best;

function loadQuestion() {
  if (index >= shuffled.length) return endGame();

  const q = shuffled[index];
  document.getElementById("question").textContent = q.q;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.a.forEach((ans,i)=>{
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(i);
    answers.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const buttons = document.querySelectorAll("#answers button");
  const correctIndex = shuffled[index].c;

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) {
      btn.style.border = "2px solid #22c55e";
      btn.style.background = "rgba(34,197,94,0.2)";
    }
    if (i === selectedIndex && i !== correctIndex) {
      btn.style.border = "2px solid #ef4444";
      btn.style.background = "rgba(239,68,68,0.2)";
    }
  });

  if (selectedIndex === correctIndex) score++;

  document.getElementById("score").textContent = score;

  setTimeout(() => {
    index++;
    loadQuestion();
  }, 1000);
}


function endGame() {
  let level =
    score < 10 ? "Beginner 🟢" :
    score < 18 ? "Intermediate 🟡" :
    "Expert 🔴";

  document.querySelector(".quiz").innerHTML = `
    <h2>Final Score: ${score}</h2>
    <h3>Security Level: ${level}</h3>
    <button onclick="location.reload()">Play Again</button>
  `;
}

loadQuestion();

