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

  const methodSteps = {
    observe: {
      index: "DECISION / 01",
      coreTitle: "OBSERVE",
      coreNote: "SIGNAL BEFORE HYPOTHESIS",
      prompt: "What did the environment expose?",
      inputTitle: "RAW SIGNALS",
      inputCopy: "Responses, routes, identities, service behaviour and environmental context.",
      decisionTitle: "SEPARATE SIGNAL FROM NOISE",
      decisionCopy: "Determine what is real, relevant and worth carrying into the working model.",
      outputTitle: "VERIFIED OBSERVATIONS",
      outputCopy: "Timestamped observations with scope, source and enough context to reproduce them."
    },
    model: {
      index: "DECISION / 02",
      coreTitle: "MODEL",
      coreNote: "CONTEXT CREATES MEANING",
      prompt: "Why did that evidence matter?",
      inputTitle: "VERIFIED CONTEXT",
      inputCopy: "Confirmed observations, dependencies, identities and known environmental constraints.",
      decisionTitle: "MAP TRUST AND DEPENDENCIES",
      decisionCopy: "Connect the evidence to boundaries, assumptions and plausible paths through the system.",
      outputTitle: "RANKED HYPOTHESES",
      outputCopy: "A system model with candidate paths ordered by relevance, impact and confidence."
    },
    validate: {
      index: "DECISION / 03",
      coreTitle: "VALIDATE",
      coreNote: "PROOF OVER ASSUMPTION",
      prompt: "Which hypothesis survived validation?",
      inputTitle: "RANKED HYPOTHESES",
      inputCopy: "Candidate paths with their assumptions, expected signals and confidence levels.",
      decisionTitle: "TEST THE SMALLEST SAFE STEP",
      decisionCopy: "Choose a controlled action that can confirm or refute the path without unnecessary exposure.",
      outputTitle: "REPRODUCIBLE PROOF",
      outputCopy: "Evidence tied directly to the hypothesis, including both positive and negative results."
    },
    document: {
      index: "DECISION / 04",
      coreTitle: "DOCUMENT",
      coreNote: "PRESERVE THE CHAIN",
      prompt: "What trust boundary failed?",
      inputTitle: "VALIDATED EVIDENCE",
      inputCopy: "Commands, responses, screenshots, system context and the limits of what was tested.",
      decisionTitle: "PRESERVE PROVENANCE AND IMPACT",
      decisionCopy: "Explain how each step connects, what it proves and where uncertainty remains.",
      outputTitle: "TRACEABLE FINDING",
      outputCopy: "A defensible record another operator or defender can understand and reproduce."
    },
    improve: {
      index: "DECISION / 05",
      coreTitle: "IMPROVE",
      coreNote: "FEED THE NEXT LOOP",
      prompt: "How could a defender detect or prevent the chain?",
      inputTitle: "VALIDATED ATTACK PATH",
      inputCopy: "The confirmed chain, affected controls, observable signals and operational context.",
      decisionTitle: "TRANSLATE OFFENSE INTO DEFENSE",
      decisionCopy: "Prioritize changes that break the path, improve visibility and reduce future uncertainty.",
      outputTitle: "DEFENSIVE ACTION",
      outputCopy: "Focused remediation, detection guidance and a stronger model for the next cycle."
    }
  };

  const methodButtons = [...document.querySelectorAll("[data-method-step]")];
  const methodFields = {
    index: document.getElementById("method-index"),
    coreTitle: document.getElementById("method-core-title"),
    coreNote: document.getElementById("method-core-note"),
    prompt: document.getElementById("method-prompt"),
    inputTitle: document.getElementById("method-input-title"),
    inputCopy: document.getElementById("method-input-copy"),
    decisionTitle: document.getElementById("method-decision-title"),
    decisionCopy: document.getElementById("method-decision-copy"),
    outputTitle: document.getElementById("method-output-title"),
    outputCopy: document.getElementById("method-output-copy")
  };

  function activateMethod(button, moveFocus = false) {
    const step = methodSteps[button.dataset.methodStep];

    methodButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });

    Object.entries(methodFields).forEach(([field, element]) => {
      if (element) element.textContent = step[field];
    });

    if (moveFocus) button.focus();
  }

  methodButtons.forEach((button, index) => {
    button.addEventListener("click", () => activateMethod(button));
    button.addEventListener("keydown", (event) => {
      let nextIndex;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % methodButtons.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + methodButtons.length) % methodButtons.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = methodButtons.length - 1;
      if (nextIndex === undefined) return;

      event.preventDefault();
      activateMethod(methodButtons[nextIndex], true);
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

  const orchestrationLayer = document.querySelector(".arch-orchestration");

  orchestrationLayer?.addEventListener("click", () => {
    const disclosed = orchestrationLayer.classList.toggle("is-disclosed");
    orchestrationLayer.setAttribute("aria-expanded", String(disclosed));
  });

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
      "TYPE           PRIVATE OFFENSIVE SECURITY R&D",
      "EXECUTION      LOCAL-FIRST",
      "AUTHORITY      HUMAN CHECKPOINTS",
      "PUBLIC LAYERS  RECON / WEB + API / IDENTITY",
      "",
      "ORCHESTRATION  [ PARTIALLY DECLASSIFIED ]",
      "DECISION LOGIC [ WITHHELD ]",
      "OUTPUT         TRACEABLE EVIDENCE",
      "REPOSITORY     PRIVATE",
      "",
      "THE INTERFACE IS VISIBLE. THE MACHINERY IS NOT."
    ].join("\n"),
    fieldnotes: [
      "PUBLIC FIELD NOTES",
      "",
      "01  HTB Machines    Evidence-driven retired-machine notes",
      "02  WebVerse Pro    Public build and iteration workspace",
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
