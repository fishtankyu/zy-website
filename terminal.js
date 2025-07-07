const commands = [
  "ls -l",
  "multi-juicer      → Multi Juicer setup guide",
  "ctf-writeups      → Capture The Flag notes",
  "scythe            → Cybersecurity tool (HTML)",
  "FYP-RP            → Final Year Project (Python)",
  "tryhackme-writeups→ THM walkthroughs",
  "whoisonduty       → Duty roster generator",
  "curl https://github.com/fishtankyu"
];

const typeSound = document.getElementById("type-sound");
const output = document.getElementById("terminal-output");
const typed = document.getElementById("typed");

let commandIndex = 0;
let charIndex = 0;

function typeNextChar() {
  const current = commands[commandIndex];
  if (charIndex < current.length) {
    typed.textContent += current[charIndex++];
    typeSound.currentTime = 0;
    typeSound.play();
    setTimeout(typeNextChar, 80);
  } else {
    output.innerHTML += `<span class="prompt">fishtankyu@github.io:~$</span> ${current}\n`;
    typed.textContent = "";
    charIndex = 0;
    commandIndex++;
    if (commandIndex < commands.length) {
      setTimeout(typeNextChar, 1000);
    } else {
      document.querySelector(".cursor").style.display = "inline-block";
    }
  }
}

window.onload = () => {
  typeNextChar();
};
