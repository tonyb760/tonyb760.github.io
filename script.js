(() => {
  const roles = [
    "RED TEAM OPERATOR",
    "OFFENSIVE SECURITY ENGINEER",
    "AI SECURITY BUILDER"
  ];

  const roleText = document.getElementById("role-text");
  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = true;

  function typeRole() {
    const role = roles[roleIndex];

    if (deleting) {
      charIndex -= 1;
      roleText.textContent = role.slice(0, charIndex);
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 280);
        return;
      }
      setTimeout(typeRole, 28);
      return;
    }

    const nextRole = roles[roleIndex];
    charIndex += 1;
    roleText.textContent = nextRole.slice(0, charIndex);

    if (charIndex >= nextRole.length) {
      deleting = true;
      setTimeout(typeRole, 1800);
      return;
    }

    setTimeout(typeRole, 54);
  }

  setTimeout(typeRole, 1600);

  const menuButton = document.querySelector(".menu-button");
  const menuButtonLabel = document.getElementById("menu-button-label");
  const mobileNav = document.getElementById("mobile-nav");

  function closeMenu() {
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButtonLabel) menuButtonLabel.textContent = "Open menu";
    mobileNav?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    if (menuButtonLabel) menuButtonLabel.textContent = expanded ? "Open menu" : "Close menu";
    mobileNav.classList.toggle("is-open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const tabs = [...document.querySelectorAll(".surface-tab")];
  const panels = document.querySelectorAll(".surface-panel");

  function activateTab(tab, moveFocus = false) {
    const targetId = tab.dataset.panel;

    tabs.forEach((candidate) => {
      const active = candidate === tab;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
      candidate.tabIndex = active ? 0 : -1;
    });

    panels.forEach((panel) => {
      const active = panel.id === targetId;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

    if (moveFocus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex;

      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;

      event.preventDefault();
      activateTab(tabs[nextIndex], true);
    });
  });

  const portraitFrame = document.getElementById("portrait-frame");
  const portraitStage = document.querySelector(".portrait-stage");

  if (
    portraitFrame &&
    portraitStage &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    portraitStage.addEventListener("mousemove", (event) => {
      const rect = portraitStage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      portraitFrame.style.transform = `rotateY(${x * 5}deg) rotateX(${y * -5}deg) translateZ(8px)`;
    });

    portraitStage.addEventListener("mouseleave", () => {
      portraitFrame.style.transform = "";
    });
  }

  const overlay = document.getElementById("terminal-overlay");
  const output = document.getElementById("terminal-output");
  const terminalForm = document.getElementById("terminal-form");
  const terminalInput = document.getElementById("terminal-input");
  const terminalClose = document.getElementById("terminal-close");
  const consoleLaunch = document.getElementById("console-launch");

  const commands = {
    help: [
      "AVAILABLE COMMANDS",
      "  whoami       operator profile",
      "  operations   current offensive focus",
      "  skills       capability map",
      "  methodology  decision loop",
      "  blackmagic   public R&D overview",
      "  fieldnotes   public research",
      "  github       open GitHub profile",
      "  contact      contact channels",
      "  clear        clear console",
      "  exit         close console"
    ].join("\n"),
    whoami: [
      "BHAVESH MANHAR",
      "",
      "ROLE           Red Team Operator",
      "FOCUS          Offensive Security / Identity / AI Security",
      "LOCATION       Nairobi, Kenya",
      "CALLSIGN       0xTonyb",
      "",
      "\"I document the path, not just the proof.\""
    ].join("\n"),
    operations: [
      "CURRENT FOCUS",
      "",
      "[+] Adversary simulation",
      "[+] Active Directory and hybrid identity attack paths",
      "[+] Web and API security",
      "[+] Mobile static and runtime testing",
      "[+] Operator-controlled AI security R&D"
    ].join("\n"),
    skills: [
      "CAPABILITY MAP",
      "",
      "IDENTITY       AD / Entra ID / ADCS / attack paths",
      "APPLICATION    Web / API / auth / mobile",
      "OPERATIONS     Recon / APT simulation / purple team",
      "AI SECURITY    MCP / RAG / agents / evaluation"
    ].join("\n"),
    methodology: [
      "DECISION LOOP",
      "",
      "OBSERVE -> MODEL THE SYSTEM -> VALIDATE A HYPOTHESIS",
      "   ^                                      |",
      "   |                                      v",
      "IMPROVE THE NEXT DECISION <- DOCUMENT EVIDENCE"
    ].join("\n"),
    blackmagic: [
      "PROJECT        BLACKMAGIC",
      "TYPE           PRIVATE R&D",
      "DOMAIN         AI x OFFENSIVE SECURITY",
      "EXECUTION      LOCAL-FIRST",
      "CONTROL        HUMAN OPERATOR",
      "",
      "ARCHITECTURE   [ REDACTED ]",
      "INTERNALS      [ REDACTED ]",
      "REPOSITORY     PRIVATE",
      "",
      "PUBLIC OVERVIEW AVAILABLE."
    ].join("\n"),
    fieldnotes: [
      "PUBLIC FIELD NOTES",
      "",
      "01  Fireflow       Langflow / JWT / MCP / Kubernetes",
      "02  HTB Machines    Evidence-driven retired-machine notes",
      "03  WebVerse Pro    Public build and iteration workspace",
      "",
      "github.com/tonyb760"
    ].join("\n"),
    contact: [
      "CONTACT CHANNELS",
      "",
      "EMAIL      tonyb760@gmail.com",
      "LINKEDIN   linkedin.com/in/bhavesh-patel760/",
      "GITHUB     github.com/tonyb760"
    ].join("\n")
  };

  let previousFocus = null;
  const pageRegions = document.querySelectorAll("body > header, body > main, body > footer");

  function setPageInert(inert) {
    pageRegions.forEach((region) => {
      region.inert = inert;
    });
  }

  function openTerminal() {
    if (!overlay.hidden) return;
    previousFocus = document.activeElement;
    overlay.hidden = false;
    setPageInert(true);
    document.body.classList.add("terminal-open");
    requestAnimationFrame(() => terminalInput.focus());
  }

  function closeTerminal() {
    overlay.hidden = true;
    setPageInert(false);
    document.body.classList.remove("terminal-open");
    previousFocus?.focus?.();
  }

  function appendTerminal(text, className = "terminal-response") {
    const paragraph = document.createElement("p");
    paragraph.className = className;
    paragraph.textContent = text;
    output.appendChild(paragraph);
    output.scrollTop = output.scrollHeight;
  }

  function runCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    const commandLine = document.createElement("p");
    commandLine.className = "terminal-command";
    commandLine.innerHTML = `bhavesh@portfolio:~$ <strong></strong>`;
    commandLine.querySelector("strong").textContent = rawCommand;
    output.appendChild(commandLine);

    if (command === "clear") {
      output.innerHTML = "";
      return;
    }

    if (command === "exit") {
      closeTerminal();
      return;
    }

    if (command === "github") {
      appendTerminal("Opening GitHub profile...");
      window.open("https://github.com/tonyb760", "_blank", "noopener,noreferrer");
      return;
    }

    if (commands[command]) {
      appendTerminal(
        commands[command],
        command === "blackmagic" ? "terminal-response terminal-redacted" : "terminal-response"
      );
    } else {
      appendTerminal(`command not found: ${command}\nType "help" for available commands.`, "terminal-dim");
    }

    output.scrollTop = output.scrollHeight;
  }

  terminalForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = terminalInput.value;
    terminalInput.value = "";
    runCommand(value);
  });

  terminalClose?.addEventListener("click", closeTerminal);
  consoleLaunch?.addEventListener("click", openTerminal);

  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeTerminal();
  });

  let easterEgg = "";
  const targetSequence = "blackmagic";

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closeTerminal();
      return;
    }

    if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
      return;
    }

    if (event.ctrlKey && event.key === "`") {
      event.preventDefault();
      overlay.hidden ? openTerminal() : closeTerminal();
      return;
    }

    if (!overlay.hidden || event.target.closest?.("input, textarea, select, [contenteditable='true']")) return;

    if (event.key.length === 1 && /[a-z]/i.test(event.key)) {
      easterEgg = (easterEgg + event.key.toLowerCase()).slice(-targetSequence.length);
      if (easterEgg === targetSequence) {
        openTerminal();
        setTimeout(() => runCommand("blackmagic"), 180);
        easterEgg = "";
      }
    }
  });
})();
