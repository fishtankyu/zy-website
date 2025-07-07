const input = document.getElementById("input");
const output = document.getElementById("terminal-output");
const sound = document.getElementById("type-sound");

const commands = {
  help: "Available commands:\nhelp, whoami, ls, nmap, hack, clear, github",
  whoami: "Zeng Yu — Cybersecurity Enthusiast, Python Programmer",
  ls: `
multi-juicer         → Multi Juicer setup guide  
ctf-writeups         → Capture the Flag Notes  
scythe               → HTML cybersecurity UI  
FYP-RP               → Final Year Project  
tryhackme-writeups   → TryHackMe walkthroughs  
whoisonduty          → Duty automation tool  
  `,
  nmap: "[+] Scanning localhost...\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n443/tcp  open  https\n\nScan complete.",
  github: "Visit: https://github.com/fishtankyu",
  hack: "🔥 Breaching firewall...\n🧠 Injecting payload...\n✅ Access granted. Welcome, root.",
  clear: "clear"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    input.value = "";

    if (command === "clear") {
      output.innerHTML = "";
      return;
    }

    const result = commands[command] || `bash: ${command}: command not found`;

    output.innerHTML += `
      <div class="line"><span class="prompt">root@fishtankyu:~$</span> ${command}</div>
      <div class="line">${result.replace(/\n/g, "<br>")}</div>
    `;

    window.scrollTo(0, document.body.scrollHeight);
  } else if (e.key.length === 1) {
    sound.currentTime = 0;
    sound.play();
  }
});

function focusInput() {
  input.focus();
}
