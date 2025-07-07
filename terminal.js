const input = document.getElementById("input");
const output = document.getElementById("terminal-output");

const commands = {
  help: "Available commands: help, whoami, ls, nmap, hack, clear",
  whoami: "Zeng Yu — Cybersecurity Enthusiast",
  ls: `
multi-juicer         - Docker Setup Guide
ctf-writeups         - Capture the Flag Notes
scythe               - HTML Tooling Interface
FYP-RP               - Final Year Project Code
tryhackme-writeups   - THM Walkthroughs
whoisonduty          - Duty Roster Generator
  `,
  nmap: "[+] Scanning open ports on 127.0.0.1...\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n443/tcp  open  https\n\nScan complete.",
  hack: "Initiating mainframe breach...\n> Bypassing firewall...\n> Injecting payload...\n> Access granted. Welcome, admin.",
  clear: "clear"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    input.value = "";

    let result = commands[command] || `Command not found: ${command}`;
    if (command === "clear") {
      output.innerHTML = "";
      return;
    }

    output.innerHTML += `
      <div class="line"><span class="prompt">root@fishtankyu:~#</span> ${command}</div>
      <div class="line">${result.replace(/\n/g, "<br>")}</div>
    `;
    window.scrollTo(0, document.body.scrollHeight);
  }
});

function focusInput() {
  input.focus();
}
