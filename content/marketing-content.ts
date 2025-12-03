export const marketingContent = {
  hero: {
    headline: "Your Personal Command Center for Development",
    subheadline: "In 2049, development is orchestrated—not chaotic.",
    subheading: "Join 50,000+ developers who've transformed their workflow.",
    tagline: "DoPlan CLI: Where ideas become code. Code becomes impact.",
    sacredWords: "One Command. Five Sacred Words. Infinite Possibilities.",
    cta: {
      command: "npx @doplan-dev/cli",
      buttonText: "ACTIVATE YOUR COMMAND CENTER",
      subtext: "30-second setup • No configuration required",
    },
    supportingText: [
      "✓ Complete project structure in 5 seconds",
      "✓ 18 AI specialists working for you",
      "✓ 80-90% faster to production",
      "✓ 200+ achievements to unlock",
    ],
    statistics: [
      { label: "developers adopted", value: "50,000+", icon: "✓" },
      { label: "projects orchestrated", value: "380,000+", icon: "✓" },
      { label: "project completion rate", value: "95%", icon: "✓" },
      { label: "faster time-to-production", value: "4x", icon: "✓" },
    ],
    socialProof: "50,000+ developers use DoPlan. They're not chasing hype. They're shipping faster and actually enjoying the process.",
    nextSteps: [
      "Full project scaffold + 18 AI agents ready to assist",
      "Your first achievement unlocked (+50 XP)",
      "A 2-minute interactive tutorial (or skip it)",
    ],
  },
  commandCenterConcept: {
    title: "What is DoPlan?",
    description: "Think of DoPlan as your personal mission control—a unified command center where project initialization, development guidance, and team coordination happen in one place.",
    analogy: "Just like NASA's control room orchestrates complex missions with precision, DoPlan orchestrates your development projects with intelligence, consistency, and speed.",
    benefits: [
      "No context switching. No tool fatigue. One interface. Everything you need.",
    ],
  },
  valueProposition: {
    problem: {
      title: "The Problem",
      description: "Development teams face three recurring challenges:",
      challenges: [
        {
          title: "INCONSISTENT SETUP",
          description: "Onboarding new projects requires manual configuration",
        },
        {
          title: "KNOWLEDGE GAPS",
          description: "Junior developers lack access to architectural guidance",
        },
        {
          title: "PROCESS OVERHEAD",
          description: "Context switching between tools fragments focus",
        },
      ],
    },
    solution: {
      title: "The Solution",
      description: "DoPlan unifies project initialization, AI-assisted development, and team workflow into a single command-line interface.",
    },
    benefits: [
      {
        icon: "⚡",
        title: "Initialization in <5 seconds",
        description: "Fully structured projects with sensible defaults",
      },
      {
        icon: "🧠",
        title: "18 Specialized AI Agents",
        description: "Real-time guidance on architecture, security, testing, and deployment",
      },
      {
        icon: "📊",
        title: "Unified Workflow",
        description: "Five commands cover the complete development lifecycle",
      },
      {
        icon: "💾",
        title: "Team Intelligence",
        description: "Learns team patterns, adapts to preferences, improves over time",
      },
      {
        icon: "📈",
        title: "Measurable Outcomes",
        description: "Built-in metrics for velocity, quality, and team productivity",
      },
    ],
    extended: {
      title: "WHAT YOU GET",
      benefits: [
        {
          icon: "⚡",
          title: "5 SECONDS SETUP",
          description: "Full project structure, AI specialists engaged, ready to code",
        },
        {
          icon: "🎮",
          title: "FLOW STATE",
          description: "Gamified progress keeps momentum high (200+ achievements)",
        },
        {
          icon: "🧠",
          title: "18 SPECIALISTS",
          description: "Each expert in their domain—architecture, testing, security, docs",
        },
        {
          icon: "💾",
          title: "ADAPTIVE LEARNING",
          description: "Remembers your style, preferences, patterns",
        },
        {
          icon: "🚀",
          title: "80-90% FASTER",
          description: "Production apps in hours, not weeks",
        },
        {
          icon: "📊",
          title: "UNIFIED WORKFLOW",
          description: "Five commands cover the complete lifecycle",
        },
      ],
    },
  },
  problems: [
    {
      title: "INCONSISTENT SETUP",
      description: "Onboarding new projects requires manual configuration",
      details: "npm packages. Env configs. Folder structures. ESLint rules.",
      quote: "Why is this so hard?",
      solution: "One command generates your entire project structure—folders, configs, Git hooks, CI/CD scaffolding. Customized for your stack. Ready to code in seconds.",
    },
    {
      title: "KNOWLEDGE GAPS",
      description: "Junior developers lack access to architectural guidance",
      details: "Should I use Prisma or Drizzle? Where does this component live?",
      solution: "Your 18 AI agents—The Architect, The Debugger, The Performance Expert—suggest answers based on industry best practices and your coding style. They learn what you prefer by project three.",
    },
    {
      title: "PROCESS OVERHEAD",
      description: "Context switching between tools fragments focus",
      details: "Git commands, documentation updates, branch management, time tracking, checking if tests pass",
      solution: "Type `/dev feature-name`. We handle branching, docs, time-tracking, and test orchestration. You stay in flow.",
    },
  ],
  commands: [
    {
      command: "/hey",
      title: "Welcome & Setup",
      description: "Initialize projects. Configure environments. Access documentation and tutorials.",
      feeling: "Oh, this gets me.",
      details: [
        "How do you prefer your code organized?",
        "What's your team size? (affects architecture suggestions)",
        "Show me a project you're proud of. (Agents learn your style)",
      ],
      result: "Personalized AI coaching from day one",
      extended: {
        title: "THE INITIALIZATION SEQUENCE",
        subtitle: "One command activates everything.",
        command: "npx @doplan-dev/cli",
        description: "That's it. No installation rituals. No configuration ceremonies. Your entire development environment materializes in 5 seconds.",
        whatHappens: [
          "18 AI specialists assemble instantly",
          "Your project structure auto-generates with sensible defaults",
          "IDE extensions install silently in the background",
          "Your adaptive memory profile initializes",
          "Welcome sequence guides you through first steps",
        ],
        barrier: "The barrier to entry? Eliminated.",
        teamBenefit: "Every time a new developer joins your team, they run this command. Within 5 seconds, they have the exact same environment, the exact same support, the exact same standards as every other developer in your organization. Consistency at scale.",
      },
    },
    {
      command: "/do",
      title: "Ideation & Discovery",
      description: "Define requirements. Generate feature specifications. Create collaborative discovery sessions.",
      example: '/do "build a SaaS dashboard for crypto portfolios"',
      features: [
        "Breaks the idea into core features",
        "Identifies technical decisions needed",
        "Generates BRAINSTORM.md with API endpoints, database schema ideas",
        "Suggests third-party integrations",
        "Estimates complexity",
      ],
      feeling: "It actually understood what I meant. And thought of things I missed.",
      extended: {
        title: "THE VISIONING SESSION",
        subtitle: "Turn abstract ideas into actionable specifications.",
        description: "When you have a concept, /do activates your AI advisory board:",
        features: [
          "Guided discovery conversation with intelligent follow-up questions",
          "Auto-generates BRAINSTORM.md with features, patterns, edge cases",
          "Suggests optimal tech stack based on your project goals",
          "Identifies potential risks and mitigation strategies",
          "Creates a living document your team can refine",
        ],
        howItWorks: {
          example: 'You type: /do "build a marketplace for local services"',
          process: [
            "DoPlan asks: Team size? Budget constraints? Geographic scope? Performance requirements?",
            "You answer in plain English.",
            "Within 60 seconds, a complete project specification emerges.",
          ],
          output: [
            "Feature list. Architecture suggestions. Tech stack recommendations.",
            "All before you write a single line of code.",
          ],
          result: "This is where vagueness becomes specificity.",
        },
      },
    },
    {
      command: "/plan",
      title: "Task Breakdown & Phasing",
      description: "Transform specifications into actionable task hierarchies. Structure sprints. Define deliverables.",
      generates: [
        "Phase 1: Core MVP (what to build first)",
        "Phase 2: Enhanced features (what comes next)",
        "Phase 3: Polish & optimization (the finish line)",
        "Subtasks with time estimates",
        "Dependency mapping",
      ],
      feeling: "I actually have a plan. This is doable.",
      extended: {
        title: "THE BLUEPRINT PHASE",
        subtitle: "Transform specifications into executable task hierarchies.",
        description: "/plan takes your brainstorm and builds the battle plan:",
        features: [
          "Generates TASKS.md with phased delivery roadmap",
          "Structures tasks by dependency, priority, and estimated effort",
          "Auto-creates sprint patterns (1-week, 2-week, monthly, custom)",
          "Pre-creates Git branches for each deliverable",
          "Assigns specialized agents to task types",
          "Identifies integration points and potential blockers",
        ],
        output: [
          "A clear roadmap. Sprint-by-sprint breakdown. Team assignment logic.",
          "Delivered in a format that syncs with Jira, Linear, Asana, or your tool of choice.",
        ],
        benefits: [
          "Your team knows exactly what to build and in what order.",
          "No ambiguity. No hidden dependencies discovered mid-sprint.",
          "No 'why didn't we think of that earlier?'",
        ],
        result: "This is where confusion becomes clarity.",
      },
    },
    {
      command: "/dev",
      title: "Deep Work & Building",
      description: "Execute implementation with intelligent scaffolding, real-time guidance, automated branch management, and integrated documentation.",
      example: "/dev dashboard-ui",
      automatically: [
        "Creates feature branch with smart naming",
        "Sets up scaffolding (components, tests, types)",
        "Generates boilerplate docs",
        "Starts time-tracking",
        "Stages pre-commit hooks",
      ],
      whileBuilding: [
        "Real-time code review suggestions",
        "Did you know there's a more performant way to do this?",
        "Links to relevant docs when you need them",
        "Syncs with your team's Git without interrupting flow",
      ],
      feeling: "I'm just writing code. Everything else is handled.",
      extended: {
        title: "THE DEVELOPMENT ACCELERATION COMMAND",
        subtitle: "Execute with intelligence, guidance, and acceleration.",
        description: "When you're ready to code: /dev feature-name",
        whatHappens: [
          "Git branch auto-creates with team naming conventions",
          "Project scaffolding generates for your framework",
          "Code structure aligns with team standards",
          "18 AI specialists provide real-time guidance as you type",
          "Documentation auto-generates from your code",
          "Time tracking activates automatically (no manual logging)",
          "Test scaffolding suggests what to cover",
          "Dependency management validates against security standards",
          "Progress metrics update in real-time",
        ],
        experience: [
          "You're coding. Specialists whisper suggestions as you type.",
          "Architecture decisions are validated. Security concerns are flagged.",
          "Tests are suggested before you even think about them.",
          "Documentation writes itself from your code structure.",
        ],
        results: [
          "Your velocity accelerates. Your code quality improves.",
          "Your learning happens in real-time.",
        ],
        achievement: "First feature? Achievement unlocked: 'Command Center Activated' (+50 points)",
      },
    },
    {
      command: "/sys",
      title: "Mastery & Control",
      description: "Monitor system health. Access dashboards. Manage backups. Review team analytics.",
      shows: [
        "Completion rate (vs. your personal average)",
        "Time spent per feature (spotting bottlenecks)",
        "Performance metrics (build time, test coverage)",
        "Team dashboards (if you're working with others)",
        "Backup & rollback rituals",
        "Memory card insights",
      ],
      feeling: "I'm in control. I can see what I'm optimizing.",
      extended: {
        title: "THE CONTROL ROOM",
        subtitle: "God-mode access to metrics, management, and mastery.",
        description: "/sys gives you the full picture:",
        monitoring: {
          title: "MONITORING & ANALYTICS",
          features: [
            "Real-time performance dashboards",
            "Build time tracking and trends",
            "Test coverage and quality metrics",
            "Team velocity and productivity insights",
            "Deployment success rates",
          ],
        },
        teamManagement: {
          title: "TEAM MANAGEMENT",
          features: [
            "Memory card profiles for each team member",
            "Skill tracking and growth metrics",
            "Knowledge sharing and mentorship assignments",
            "Team sync generation (automatic status reports)",
          ],
        },
        systemOperations: {
          title: "SYSTEM OPERATIONS",
          features: [
            "Automated backup and one-command restore",
            "Database migration management",
            "Deployment orchestration (safe, validated)",
            "Security audit trails and compliance logs",
            "Performance optimization recommendations",
          ],
        },
        intelligence: {
          title: "INTELLIGENCE & LEARNING",
          features: [
            "Team pattern analysis",
            "Emerging skill gaps identified",
            "Best practice suggestions based on your codebase",
            "Optimization opportunities highlighted",
          ],
        },
        forWhom: {
          individual: "For individual developers: See your personal stats. Track your growth. Unlock advanced features.",
          teamLeads: "For team leads: Visibility into team health, productivity, and skill development.",
          architects: "For architects: System-wide patterns, performance trends, architectural insights.",
        },
        result: "This is where scattered data becomes actionable intelligence.",
      },
    },
  ],
  fiveCommandDoctrine: {
    headline: "THE FIVE COMMAND DOCTRINE",
    subheadline: "Five commands orchestrate your entire development experience. Master them, and total development freedom is yours.",
  },
  eighteenSpecialists: {
    introduction: "YOU DON'T CODE ALONE ANYMORE",
    description: "Meet your inner circle—18 specialized AI colleagues that think like seasoned developers. They don't just assist; they educate. Every suggestion is a lesson. Every interaction raises your skill.",
    availability: "They're here 24/7. They never have a bad day. They know your codebase better than you do by week two.",
    specialists: [
      {
        emoji: "🏗️",
        name: "ARCHITECT",
        description: "Specialized in system design, scalability patterns, and infrastructure decisions. When you're stuck on how to structure something, the Architect guides you through tradeoffs.",
      },
      {
        emoji: "📚",
        name: "SCHOLAR",
        description: "Expert in documentation, code comments, and knowledge management. Ensures your code tells a story. Future you will thank present you.",
      },
      {
        emoji: "🧪",
        name: "TESTER",
        description: "Quality assurance specialist who thinks about edge cases you haven't considered. Suggests test scenarios. Validates coverage. Catches bugs before production.",
      },
      {
        emoji: "🎨",
        name: "DESIGNER",
        description: "UI/UX patterns, accessibility standards, component design philosophy. Makes sure your code isn't just functional—it's beautiful and usable.",
      },
      {
        emoji: "🔒",
        name: "GUARDIAN",
        description: "Security specialist. Auth mechanisms. Data protection. Compliance standards. Every line of code gets a security lens. Threats get identified early.",
      },
      {
        emoji: "⚡",
        name: "OPTIMIZER",
        description: "Performance tuning. Bottleneck elimination. Code refactoring. Turns 'it works' into 'it flies.'",
      },
      {
        emoji: "🔗",
        name: "INTEGRATOR",
        description: "API design, third-party library integration, external service management. Makes your code talk to the wider world seamlessly.",
      },
      {
        emoji: "📊",
        name: "ANALYST",
        description: "Metrics and analytics implementation. Data tracking. Instrumentation. Turns raw events into business insights.",
      },
      {
        emoji: "🚀",
        name: "DEPLOYER",
        description: "CI/CD orchestration. Release management. Rollback safety. Gets your code live safely. Every single time.",
      },
      {
        emoji: "💬",
        name: "COMMUNICATOR",
        description: "Team notifications, Slack integration, status reporting. Keeps everyone on the same page. Async communication flows naturally.",
      },
      {
        emoji: "🎓",
        name: "EDUCATOR",
        description: "Best practices, design patterns, career guidance. Teaching is built into every interaction. You're learning while you build.",
      },
      {
        emoji: "🐛",
        name: "DEBUGGER",
        description: "Error tracking, root cause analysis, bug fixing strategies. When things break (and they will), this specialist finds why fast.",
      },
      {
        emoji: "📖",
        name: "DOCUMENTER",
        description: "README generation, API documentation, wiki maintenance. Your project documents itself. Always current. Never stale.",
      },
      {
        emoji: "🌐",
        name: "TRANSLATOR",
        description: "i18n and localization. Multi-language support. Regional standards. Building global products gets easy.",
      },
      {
        emoji: "🎯",
        name: "PLANNER",
        description: "Sprint planning, task breakdown, roadmapping, priority management. Chaos becomes order. Overwhelming becomes achievable.",
      },
      {
        emoji: "⚙️",
        name: "ENGINEER",
        description: "Code generation, scaffolding, boilerplate management. Handles the repetitive stuff so you handle the creative stuff.",
      },
      {
        emoji: "🤝",
        name: "COLLABORATOR",
        description: "Merge conflict resolution, code review guidance, team communication. Team dynamics improve. Collaboration flows.",
      },
      {
        emoji: "🏃",
        name: "ACCELERATOR",
        description: "Routine task automation, keyboard shortcuts, productivity hacks. Shaves seconds off each task. Those seconds compound into hours.",
      },
    ],
    note: "HIERARCHICAL & CONTEXTUAL: Each specialist knows when to speak up and when to stay quiet. They're not noise. They're signal.",
  },
  adaptiveLearning: {
    title: "THE COMMAND CENTER LEARNS YOUR PATTERNS",
    description: "Your memory card is a living profile that evolves with every project. It captures everything: your style, your preferences, your patterns, your growth.",
    whatGetsRemembered: {
      codeStyle: {
        title: "CODE STYLE PROFILE",
        items: [
          "Indentation and spacing preferences",
          "Naming conventions you favor",
          "Architectural patterns you gravitate toward",
          "Library and framework choices",
          "Comment and documentation style",
        ],
      },
      workflowPatterns: {
        title: "WORKFLOW PATTERNS",
        items: [
          "Peak productivity hours",
          "Preferred task sequencing",
          "Communication style",
          "Decision-making pace",
          "Risk tolerance levels",
        ],
      },
      skillProfile: {
        title: "SKILL PROFILE",
        items: [
          "Demonstrated strengths",
          "Growth areas identified",
          "Topics studied and mastered",
          "Mentor relationships",
          "Teaching capability",
        ],
      },
      teamContext: {
        title: "TEAM CONTEXT",
        items: [
          "Collaboration patterns with specific people",
          "Role definition and expertise areas",
          "Communication preferences",
          "Availability and timezone",
          "Team dynamics insights",
        ],
      },
    },
    personalizationEffect: {
      after3Projects: {
        title: "AFTER 3 PROJECTS",
        results: [
          "Specialists predict your next move with 78% accuracy",
          "Code suggestions match your style without asking",
          "Documentation tone mirrors your voice",
          "Task breakdowns follow your natural workflow",
          "Team recommendations improve coordination",
        ],
      },
      after6Projects: {
        title: "AFTER 6 PROJECTS",
        results: [
          "You and your command center are in perfect sync",
          "Onboarding becomes effortless—your patterns scale",
          "New team members learn from your encoded expertise",
          "Your AI team acts like an extension of your brain",
          "Velocity reaches its peak",
        ],
      },
    },
  },
  gamification: {
    title: "EVERY MILESTONE MATTERS",
    description: "Gamification isn't cosmetic here—it's neurological. Your brain's dopamine system is wired to celebrate wins. We weaponize that.",
    totalAchievements: "200+ achievements across 8 dimensions of mastery.",
    dimensions: [
      {
        name: "BUILDER MASTERY",
        count: 40,
        examples: [
          "First Feature",
          "100 Lines",
          "1000 Lines",
          "Ship to Production",
          "Deploy at Scale",
          "Zero-Bug Sprint",
          "Performance Optimization",
          "Infrastructure Master",
        ],
      },
      {
        name: "LEARNING JOURNEY",
        count: 35,
        examples: [
          "Read the Docs",
          "Complete Tutorial",
          "Share Knowledge",
          "Teach a Pattern",
          "Mentor Another Developer",
          "Discover Best Practice",
          "Author Documentation",
          "Become Subject Matter Expert",
        ],
      },
      {
        name: "COMMAND CENTER MASTERY",
        count: 30,
        examples: [
          "/hey Veteran",
          "/do Visionary",
          "/plan Architect",
          "/dev Speedrunner",
          "/sys Master",
          "Found Hidden Feature",
          "Easter Egg Unlocked",
        ],
      },
      {
        name: "TEAM EXCELLENCE",
        count: 25,
        examples: [
          "Code Review Legend",
          "Pair Programming Pro",
          "Knowledge Sharer",
          "Unblock Your Team",
          "Mentor Rising Star",
          "Team Culture Champion",
        ],
      },
      {
        name: "SPEED CHALLENGES",
        count: 20,
        examples: [
          "Feature in 5 Minutes",
          "Sub-Minute Commit",
          "Zero-Bug Delivery",
          "100% Test Coverage",
          "Optimization Champion",
        ],
      },
      {
        name: "QUALITY QUESTS",
        count: 20,
        examples: [
          "Security Auditor",
          "Accessibility Champion",
          "Performance Optimizer",
          "Zero Incidents",
          "Architecture Excellence",
          "Refactor Master",
        ],
      },
      {
        name: "LEGENDARY UNLOCKS",
        count: 20,
        examples: [
          "Found an Agent Bug",
          "First AI Teach-Back",
          "100 Projects Built",
          "6-Month Believer",
          "1-Year Mastery",
          "Contributed to Open Source",
        ],
      },
      {
        name: "SECRET ACHIEVEMENTS",
        count: 15,
        description: "Hidden easter eggs, mysterious combinations, community milestones, and surprises nobody has discovered yet...",
      },
    ],
    shareable: "SHAREABLE ACHIEVEMENTS: Every achievement is shareable. GitHub. LinkedIn. Your portfolio. Proof of mastery in a format the world recognizes.",
  },
  extendedFirstFiveMinutes: {
    title: "Your Activation Sequence",
    minutes: [
      {
        minute: 1,
        title: "THE INITIALIZATION",
        command: "npx @doplan-dev/cli",
        description: "You answer:",
        answers: [
          "Project name",
          "Tech stack (React? Node? Python?)",
          "Team size and structure",
          "Project category (web app, API, library, etc.)",
        ],
        whatHappens: [
          "18 specialists assemble",
          "Your memory card initializes",
          "Project folder structure emerges",
          "Your IDE gets enhanced with DoPlan extensions",
        ],
      },
      {
        minute: 2,
        title: "THE WELCOME RITUAL",
        command: "/hey",
        description: "Your command center comes alive:",
        steps: [
          "Welcome sequence plays out (2 minutes, skippable)",
          "IDE extensions activate and install",
          "Quick tutorial guides you through the basics",
          "Specialists introduce themselves",
          "Quick-start guide loads in your IDE",
        ],
        note: "You can learn the whole thing in this moment, or skip to building. Your choice.",
      },
      {
        minute: 3,
        title: "THE VISION SESSION",
        command: '/do "build a notes app with real-time collaboration"',
        description: "You have a brief conversation with your AI advisory board:",
        steps: [
          "They ask clarifying questions",
          "You answer in plain language",
          "Within 60 seconds: BRAINSTORM.md is born",
          "Feature list crystallizes",
          "Tech stack is suggested",
          "Architecture patterns are identified",
        ],
        result: "Now you have a clear vision everyone understands.",
      },
      {
        minute: 4,
        title: "THE BATTLE PLAN",
        command: "/plan",
        description: "Your roadmap emerges:",
        steps: [
          "TASKS.md births with phased delivery",
          "Sprint structure takes shape (Week 1: Foundation, Week 2: Features, etc.)",
          "Git branches are pre-created",
          "Specialist assignments are determined",
          "Risk mitigation strategies surface",
        ],
        result: "Now you know exactly what to build and in what order.",
      },
      {
        minute: 5,
        title: "THE FIRST CODE",
        command: "/dev notes-sync-feature",
        description: "Building begins:",
        steps: [
          "Git branch auto-creates (notes-sync-feature)",
          "Project scaffolding for your framework",
          "File structure aligns with your team's standards",
          "Your 18 specialists whisper guidance",
          "Time tracking activates",
          "Documentation scaffold emerges",
        ],
        achievement: "First achievement unlocks: 'Command Center Activated' (+50 points)",
        result: "And you're unstoppable from here.",
      },
    ],
  },
  proofInImpact: {
    title: "WHAT THE DATA SHOWS",
    numbers: {
      usage: [
        { label: "developers activated", value: "50,000+" },
        { label: "projects orchestrated", value: "380,000+" },
        { label: "average project completion rate", value: "95%" },
        { label: "average time-to-first-feature", value: "4.2 minutes" },
        { label: "report coding is 'more fun' with DoPlan", value: "78%" },
        { label: "highest retention", value: "Users reaching level-50 mastery stay for 6+ months" },
      ],
      productivity: {
        title: "PRODUCTIVITY IMPACT",
        stats: [
          { label: "faster time-to-production", value: "80-90%" },
          { label: "reduction in onboarding time", value: "72%" },
          { label: "faster sprint planning", value: "68%" },
          { label: "fewer context-switching moments", value: "55%" },
        ],
      },
      quality: {
        title: "QUALITY IMPACT",
        stats: [
          { label: "fewer production bugs", value: "42%" },
          { label: "improvement in code consistency", value: "89%" },
          { label: "better documentation quality", value: "76%" },
          { label: "test coverage improvement", value: "94%" },
        ],
      },
      team: {
        title: "TEAM IMPACT",
        stats: [
          { label: "of invited developers adopt within first month", value: "85%" },
          { label: "team adoption among tech leads", value: "92%" },
          { label: "knowledge sharing improvement", value: "88%" },
          { label: "new developer ramp-up acceleration", value: "91%" },
        ],
      },
    },
    realWorldOutcomes: {
      title: "WHAT PEOPLE ARE BUILDING",
      outcomes: [
        "Startups shipping MVP in days instead of months",
        "Enterprise teams standardizing across 200+ developers",
        "Open source projects accelerating contributor onboarding",
        "Freelancers competing with agencies at agency speed",
        "Full teams taking on projects previously thought impossible",
        "Remote teams staying synchronized across timezones",
        "Individual developers becoming 10x more productive",
      ],
    },
  },
  objectionHandlers: {
    title: "Common Concerns, Honest Answers",
    questions: [
      {
        question: "Is this just another tool with marketing hype?",
        answer: "No. DoPlan fundamentally rewires how you code. The AI guidance isn't window dressing—it's neurological. Real-time coaching, adaptive learning, and distraction elimination trigger focus states most tools can't achieve.",
      },
      {
        question: "What about my existing workflow and preferences?",
        answer: "/sys memory learns and preserves your patterns. Within 3 projects, agents predict your needs with 78% accuracy. You're not adopting DoPlan—DoPlan adopts you.",
      },
      {
        question: "Can a distributed team really use this?",
        answer: "Absolutely. Shared memory profiles, auto team sync, unified standards, timezone-aware scheduling. Juniors get taught best practices; leads get visibility. Teams report 68% faster coordination.",
      },
      {
        question: "Does it work offline?",
        answer: "Yes. Offline-first architecture. Core commands cache locally. Syncs when reconnected. Zero friction.",
      },
      {
        question: "Is this only for beginners?",
        answer: "False. 1000+ intelligent rules scale from complete beginners to architects designing enterprise systems. The specialists scale with your skill. Advanced developers report it eliminates boilerplate and accelerates decisions.",
      },
      {
        question: "What happens to my code if I stop using DoPlan?",
        answer: "It's yours. All generated code, configs, everything. Export anytime. No lock-in. No proprietary syntax. Standard frameworks, standard libraries.",
      },
      {
        question: "How is my data handled?",
        answer: "End-to-end encrypted. On-premises deployment available for enterprises. Zero tracking. Zero telemetry. Zero vendor creep. You own everything.",
      },
      {
        question: "Does it integrate with our existing tools?",
        answer: "Yes. Git, GitHub, GitLab, Bitbucket, Jira, Linear, Asana, Slack, Discord, Teams, Jenkins, GitHub Actions, AWS, Azure, Google Cloud. Works with your stack, not against it.",
      },
    ],
  },
  commandCenterEvolution: {
    title: "Your Multi-Project Evolution",
    projects: [
      {
        number: 1,
        title: "THE AWAKENING",
        results: [
          "You learn the five commands",
          "Specialists introduce themselves",
          "First achievement unlocks",
          "Speed: 3x normal setup time",
        ],
      },
      {
        number: 2,
        title: "THE ACCELERATION",
        results: [
          "Muscle memory with commands",
          "Specialists anticipate your needs",
          "First pattern emerges in memory card",
          "Speed: 5x normal setup time",
        ],
      },
      {
        number: 3,
        title: "THE SYNCHRONIZATION",
        results: [
          "Seamless workflow with specialists",
          "Memory card knows your style",
          "Predictions hit 78% accuracy",
          "Speed: 8x normal setup time, effortless",
        ],
      },
      {
        number: 4,
        title: "THE MASTERY",
        description: "PROJECT 4+:",
        results: [
          "Specialists work like your brain",
          "Workflow feels like telepathy",
          "Velocity at peak",
          "Speed: 10x normal, intuitive",
        ],
      },
    ],
  },
  teamSetups: {
    title: "Different Team Setups",
    setups: [
      {
        type: "Solo Developers",
        description: "Your complete development team in one command. Every specialist you need. Every best practice enforced. At a price that makes sense for freelancers.",
        benefit: "You become your team's multiplier.",
      },
      {
        type: "Small Teams (3-15 people)",
        description: "Shared standards. Unified workflow. Consistent quality. New team members productive in minutes, not weeks. Knowledge doesn't siloed—it's captured and shared.",
        benefit: "Scaling without chaos.",
      },
      {
        type: "Growing Companies (15-100 people)",
        description: "Standardize across multiple projects and teams. Mentorship infrastructure baked in. Team metrics and visibility at scale. Culture captured in your command center.",
        benefit: "Growing without losing velocity.",
      },
      {
        type: "Enterprises (100+ people)",
        description: "On-premises deployment for security. Custom agent training on your codebase. Dedicated support and SLA guarantees. White-label options available.",
        benefit: "Scale with confidence.",
      },
    ],
  },
  extendedGetStarted: {
    title: "READY TO COMMAND YOUR DEVELOPMENT?",
    activation: {
      command: "npx @doplan-dev/cli",
      cta: "ACTIVATE YOUR COMMAND CENTER",
      whatHappens: [
        "Project setup in <5 seconds",
        "18 specialists assemble and stand ready",
        "/hey to begin your first tutorial",
        "First achievement: Automatic +50 points",
      ],
      note: "No installation. No configuration. No credit card. Just one command. The command center activates the moment you press enter.",
    },
    forTeams: {
      title: "For Teams",
      steps: [
        "Install: npx @doplan-dev/cli",
        "Configure: /sys team-setup",
        "Standardize: Create team memory templates",
        "Distribute: Share access with your team",
        "Watch: Team velocity increases immediately",
      ],
    },
    forEnterprises: {
      title: "For Enterprises",
      description: "Want custom integration? Dedicated support? On-premises deployment?",
      steps: [
        "Contact our enterprise team",
        "Discuss your specific needs",
        "Get a custom implementation plan",
        "Integrate with your existing infrastructure",
      ],
    },
  },
  documentationSupport: {
    resources: {
      title: "Resources",
      items: [
        "Complete documentation (no jargon, real examples)",
        "Interactive tutorials for all five commands",
        "API reference for integrations",
        "Community forums and Discord",
        "Video walkthroughs (5-30 minutes each)",
        "Case studies from similar teams",
        "Implementation guides for enterprises",
      ],
    },
    gettingHelp: {
      title: "Getting Help",
      options: [
        "In-IDE help from specialists (type /help)",
        "Email support for teams",
        "Priority support for enterprises",
        "Community Discord for peer help",
        "Weekly office hours for team leads",
      ],
    },
  },
  commandCenterFuture: {
    title: "What's Coming",
    roadmap: [
      "Agent specialization continues to deepen based on user feedback",
      "Custom agent training for enterprise codebases",
      "Predictive task breakdown (AI sees the whole project)",
      "Team collaboration features (pair programming support)",
      "Advanced analytics and trend prediction",
      "Voice command interface for hands-free coding",
      "VR/AR visualization for system architecture",
      "Offline agent improvements (zero internet dependency)",
    ],
  },
  finalPositioning: {
    title: "DoPlan CLI is your personal command center for development.",
    description: "It combines:",
    components: [
      "Intelligent project initialization",
      "Real-time expert guidance",
      "Adaptive learning systems",
      "Unified workflow interface",
      "Complete analytics and control",
    ],
    targetAudience: "Built for developers who want more power with less distraction. For teams that value consistency, velocity, and quality.",
    tagline: "One command. Five sacred words. Infinite possibilities.",
    cta: "The command center is waiting.",
    command: "npx @doplan-dev/cli",
  },
  keyMessagingPillars: {
    title: "Key Messaging Pillars",
    pillars: [
      {
        number: 1,
        title: "UNIFIED COMMAND CENTER",
        description: "One place for everything. No context switching.",
      },
      {
        number: 2,
        title: "INSTANT EXPERTISE",
        description: "18 specialists available immediately. Learning embedded.",
      },
      {
        number: 3,
        title: "ADAPTIVE INTELLIGENCE",
        description: "Improves with every project. Learns your style.",
      },
      {
        number: 4,
        title: "PROVEN ACCELERATION",
        description: "80-90% faster. Measurable. Repeatable. Consistent.",
      },
      {
        number: 5,
        title: "FRICTIONLESS ONBOARDING",
        description: "New devs productive in minutes. 5-second setup.",
      },
      {
        number: 6,
        title: "YOUR DATA, YOUR CONTROL",
        description: "Export anytime. No lock-in. Encrypted. Secure.",
      },
    ],
  },
  coreFeatures: {
    projectInitialization: {
      title: "Project Initialization",
      description: "Automated setup with zero configuration",
      features: [
        "Framework and toolchain selection",
        "Dependency management",
        "Git structure creation",
        "IDE extension installation",
        "Team access configuration",
      ],
    },
    intelligentAssistance: {
      title: "Intelligent Assistance",
      description: "18 specialized agents covering:",
      agents: [
        "Architecture",
        "Security",
        "Testing",
        "Performance",
        "Documentation",
        "Code Quality",
        "DevOps",
        "Team Coordination",
        "Accessibility",
        "Compliance",
        "Database Design",
        "API Strategy",
        "and more",
      ],
    },
    workflowOptimization: {
      title: "Workflow Optimization",
      features: [
        "Automatic branch creation and naming",
        "Real-time documentation generation",
        "Time tracking and velocity metrics",
        "Team synchronization",
        "Progress dashboards",
      ],
    },
    adaptiveLearning: {
      title: "Adaptive Learning",
      description: "Memory system that:",
      capabilities: [
        "Captures team coding standards",
        "Records architectural preferences",
        "Tracks individual skill profiles",
        "Optimizes guidance based on experience level",
      ],
    },
  },
  forTeams: {
    teamManagement: {
      title: "Team Management",
      sharedConfiguration: {
        title: "Shared Configuration",
        features: [
          "Unified standards across projects",
          "Consistency in architecture patterns",
          "Automated code quality checks",
        ],
      },
      scalingIntelligence: {
        title: "Scaling Intelligence",
        features: [
          "Agents adapt to team size",
          "Mentoring capabilities for junior developers",
          "Knowledge transfer acceleration",
        ],
      },
    },
    visibilityControl: {
      title: "Visibility & Control",
      description: "/sys provides:",
      features: [
        "Project health dashboards",
        "Team velocity tracking",
        "Quality metrics and compliance status",
        "Performance benchmarking",
        "Automated backup and recovery",
      ],
    },
  },
  useCases: [
    {
      title: "Enterprise Teams",
      description: "Standardize development practices across multiple teams.",
      benefits: [
        "Ensure compliance and security standards",
        "Accelerate onboarding for new team members",
      ],
    },
    {
      title: "Growing Startups",
      description: "Maintain best practices while scaling rapidly.",
      benefits: [
        "Reduce knowledge silos between team members",
        "Accelerate feature delivery without sacrificing quality",
      ],
    },
    {
      title: "Independent Developers",
      description: "Professional scaffolding and guidance.",
      benefits: [
        "Best practice enforcement without memorization",
        "Productivity tools integrated into workflow",
      ],
    },
  ],
  technicalSpecifications: {
    offlineFirst: {
      title: "Offline-First Architecture",
      description: "Core functionality operates offline. Syncs when connectivity returns.",
      benefit: "No interruption to development workflow.",
    },
    frameworkSupport: {
      title: "Framework Support",
      frameworks: [
        "React",
        "Vue",
        "Angular",
        "Next.js",
        "Node.js",
        "Python",
        "Go",
        "and more",
      ],
      note: "Extensible architecture for custom frameworks.",
    },
    integrations: {
      title: "Integration Compatibility",
      categories: [
        {
          name: "Version Control",
          tools: ["Git", "GitHub", "GitLab", "Bitbucket"],
        },
        {
          name: "Communication",
          tools: ["Slack", "Discord", "Teams"],
        },
        {
          name: "Project Management",
          tools: ["Jira", "Linear", "Asana"],
        },
        {
          name: "Cloud Platforms",
          tools: ["AWS", "Azure", "Google Cloud"],
        },
      ],
    },
    dataSecurity: {
      title: "Data & Security",
      features: [
        "End-to-end encryption for team memory",
        "GDPR and SOC 2 compliant",
        "On-premises deployment available",
      ],
    },
  },
  quickStart: {
    installation: {
      command: "npx @doplan-dev/cli",
    },
    firstProject: {
      title: "First Project (5 minutes)",
      steps: [
        "Project initialization with tech stack selection",
        "/hey for guided setup",
        "/do to define project scope",
        "/plan to create task structure",
        "/dev to begin development",
      ],
    },
    teamOnboarding: {
      title: "Team Onboarding",
      description: "One command per developer. Consistent setup. Shared standards.",
      note: "Memory system learns team patterns automatically.",
    },
  },
  adoptionResults: {
    usageMetrics: {
      title: "Usage Metrics",
      stats: [
        { label: "active developers", value: "50,000+" },
        { label: "projects completed", value: "380,000+" },
        { label: "project completion rate", value: "95%" },
        { label: "average feature delivery", value: "4.2 minutes", note: "post-initialization" },
      ],
    },
    teamImpact: {
      title: "Team Impact",
      stats: [
        { label: "report improved code quality", value: "78%" },
        { label: "reduction in onboarding time", value: "72%" },
        { label: "faster sprint planning", value: "68%" },
        { label: "fewer context switches", value: "55%" },
      ],
    },
    retention: {
      title: "Retention",
      stats: [
        { label: "users who reach advanced proficiency", value: "90%+", note: "retention at 6+ months" },
        { label: "team adoption", value: "85%", note: "of invited developers adopt within first month" },
        { label: "enterprise customers", value: "92%", note: "contract renewal rate" },
      ],
    },
  },
  proof: {
    stats: [
      { label: "developers", value: "50,000+", note: "active monthly users" },
      { label: "projects", value: "380,000+", note: "built and completed" },
      { label: "completion rate", value: "95%", note: "vs. industry average of 68%" },
      { label: "time to first feature", value: "4.2 minutes", note: "average" },
      { label: "report coding is more fun", value: "78%", note: "post-launch survey" },
      { label: "retention", value: "6+ months", note: "for users who reach level 50" },
      { label: "integrations", value: "300+", note: "with tools you already use" },
    ],
  },
  firstFiveMinutes: [
    {
      minute: 1,
      title: "The Setup",
      command: "npx @doplan-dev/cli",
      steps: [
        "Project name: `notes-app`",
        "Stack preference: `React + TypeScript + Tailwind`",
        "Team size: `Solo`",
        "18 agents assemble",
        "Your memory card initializes",
      ],
      feeling: "That's... it? No config files?",
    },
    {
      minute: 2,
      title: "The Welcome",
      command: "/hey",
      steps: [
        "Quick tour of your new project structure",
        "Meet your agents (optional intro video, 60 seconds)",
        "Connect your Git repo",
        "Your IDE extensions install",
      ],
      feeling: "I feel like this is prepared for me.",
    },
    {
      minute: 3,
      title: "The Brainstorm",
      command: '/do "build a notes app with real-time sync"',
      steps: [
        "AI asks clarifying questions",
        "Auto-generates `BRAINSTORM.md`",
        "Feature list + technical decisions surface",
        "You refine, it adjusts",
      ],
      feeling: "It actually understood the vision.",
    },
    {
      minute: 4,
      title: "The Plan",
      command: "/plan",
      steps: [
        "`TASKS.md` appears with phased delivery",
        "MVP → Feature release → Polish",
        "Estimated time per feature",
        "Dependencies mapped",
      ],
      feeling: "I know exactly what to build.",
    },
    {
      minute: 5,
      title: "The First Feature",
      command: "/dev notes-list",
      steps: [
        "Feature branch created automatically",
        "React components scaffolded",
        "TypeScript types generated",
        "Tests skeleton ready",
        "Time tracking starts",
      ],
      achievement: "The Ritual Begins (+50 XP)",
      feeling: "I'm actually building something real.",
    },
  ],
  commonQuestions: [
    {
      question: "Does this replace our existing tools?",
      answer: "No. DoPlan augments your existing toolchain—Git, IDEs, deployment platforms—with intelligent automation.",
    },
    {
      question: "What about our custom workflows?",
      answer: "DoPlan learns and adapts to team preferences. Highly configurable through /sys memory management.",
    },
    {
      question: "Is there vendor lock-in?",
      answer: "All generated code is yours. Export anytime. No proprietary syntax.",
    },
    {
      question: "How is data handled?",
      answer: "End-to-end encrypted. On-premises options available. Zero tracking or telemetry collection.",
    },
    {
      question: "What level of team does this support?",
      answer: "1-person freelancer to 500+ person organizations. Scales with your needs.",
    },
    {
      question: "Integration with existing CI/CD?",
      answer: "Full compatibility. Works with Jenkins, GitHub Actions, GitLab CI, CloudBuild, and custom pipelines.",
    },
  ],
  getStarted: {
    forTeams: {
      title: "For Teams",
      steps: [
        "Install: npx @doplan-dev/cli",
        "Configure: /sys team-setup",
        "Standardize: Import team memory profiles",
        "Distribute: Share access with team members",
      ],
    },
    forEnterprises: {
      title: "For Enterprises",
      description: "Contact sales for:",
      options: [
        "On-premises deployment",
        "Custom agent development",
        "Dedicated support",
        "Training and certification",
      ],
    },
    documentation: {
      title: "Documentation & Support",
      links: [
        "→ Full documentation at docs.doplan.dev",
        "→ API reference for integrations",
        "→ Team support and SLA options",
        "→ Community forums",
      ],
    },
  },
  nextSteps: {
    readyToImplement: {
      title: "Ready to Implement?",
      cta: "START YOUR FIRST PROJECT",
      note: "No credit card. No configuration. Open source core with commercial options.",
    },
    wantToLearnMore: {
      title: "Want to Learn More?",
      links: [
        "→ Technical documentation",
        "→ Enterprise case studies",
        "→ API integration guide",
        "→ Team implementation guide",
      ],
    },
  },
  positioningSummary: {
    title: "Positioning Summary",
    description: "DoPlan CLI is a development automation platform that combines:",
    components: [
      "Infrastructure (intelligent scaffolding)",
      "Guidance (AI-powered best practices)",
      "Workflow (unified command interface)",
      "Analytics (team and project metrics)",
    ],
    targetAudience: "Designed for teams that value consistency, velocity, and quality.",
    valueStatement: "Built for developers who want fewer tools, better tools.",
  },
  objections: [
    {
      question: "Is This Just Another Tool With Marketing?",
      answer: "Nope. Most CLI tools give you scaffolding. DoPlan adds AI coaching + gamification + memory personalization. Those three together create a fundamentally different experience. You're not fighting the tool—it's fighting with you.",
    },
    {
      question: "What If My Existing Workflow Works Fine?",
      answer: "Fair. But if you answer 'yes' to any of this, DoPlan saves you hours: Do you ever spend 30+ minutes setting up a new project? Do you context-switch between Git, docs, time-tracking, and code? Do you build alone without feedback on your approach? Does starting a new project feel like friction instead of excitement? If none of those match, you're already optimized. But most developers recognize at least one.",
    },
    {
      question: "Will This Work With My Team?",
      answer: "Yes. Team features include: Shared memory cards (juniors learn from seniors' preferences), Team dashboards (leads see velocity + bottlenecks), Collaborative branch management (fewer merge conflicts), Shared achievements (celebrate wins together). Juniors get educated faster. Leads get visibility. Everyone ships more.",
    },
    {
      question: "Does It Work Offline?",
      answer: "Yes. Offline-first architecture. Core commands cache locally. Sync when you reconnect.",
    },
    {
      question: "Is This Only for Beginners?",
      answer: "False. Beginners learn best practices. Seniors optimize their workflow. The agents scale: Beginners: 'Here's why we do this...', Intermediate: 'Based on your style, I suggest...', Advanced: 'Performance trade-off worth considering...'",
    },
  ],
  faq: [
    {
      question: "How is this different from Cursor / V0 / other AI tools?",
      answer: "We're not a code generator. We're a project orchestrator. Those tools write code. We handle setup, planning, Git management, testing scaffolding, docs, time-tracking, and learning. They complement each other—we suggest using Cursor for actual coding. The AI just handles everything around it.",
    },
    {
      question: "What if I have a weird tech stack?",
      answer: "We support 50+ tech stacks natively. Custom stack? Set preferences once. Agents learn it. Probably 95% of what we do works universally. The 5% gets customized.",
    },
    {
      question: "Is my data private?",
      answer: "Your code stays on your machine by default. Memory card syncs only if you opt in (and encrypted end-to-end). We never train on your code. Full privacy policy, trust us or ask in Discord.",
    },
    {
      question: "What's the catch? Is this free forever?",
      answer: "Free forever for solo devs. Teams & cloud features are paid ($25/mo/person—pretty cheap for the value). No catch. We make money from power users who adopt it across teams.",
    },
    {
      question: "Do I have to use all 5 commands?",
      answer: "Nope. Pick what helps. Some people skip `/plan` because they're fast. Some skip `/sys` because they don't need dashboards. The magic happens when they work together, but use what matters to you.",
    },
  ],
  socialProof: [
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      before: "I'd spend 2-3 hours setting up a new project. By the time I started coding, I'd lost momentum.",
      after: "First project was live in 90 minutes. My agents caught a security issue I would've missed. Game changer.",
    },
    {
      name: "Marcus",
      role: "Team Lead",
      before: "Reviewing junior code meant explaining the same patterns every project.",
      after: "They're learning architecture as they build. Fewer reviews. Faster onboarding.",
    },
    {
      name: "Jamie",
      role: "Freelancer",
      before: "Jumping between projects meant relearning my own patterns every time.",
      after: "DoPlan remembers how I work. My agents adapt instantly. I charge more because I deliver faster.",
    },
  ],
};
