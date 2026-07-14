// =========================================================================
// SITE CONTENT — edit anything in this file to update the website.
// You never need to touch any other file to change text, links, skills,
// or projects. Just save this file and the site updates.
// =========================================================================

export const profile = {
  displayName: "Manish Patil",
  legalName: "Patil Manish Sharadbhai", // used only on the resume download, not shown on the page
  role: "Full-Stack & AI Agent Developer",
  tagline: "I build web apps and AI agents that actually ship.",
  location: "Ahmedabad, India",
  email: "manishpatil6805@gmail.com",
  phone: "+91 9265945095",
  availability: "Open to Web Dev / AI Agent internships",
  resumeUrl: "", // add a link to your hosted resume PDF here, e.g. "/Karma_Patil_Resume.pdf"
  socials: [
    { label: "GitHub", url: "https://github.com/manishpatil6805-png" }, // replace with your actual GitHub URL
    { label: "LinkedIn", url: "www.linkedin.com/in/manish-patil-916ab2345" }, // replace with your actual LinkedIn URL
  ],
};

export const objective = `Motivated IT student with hands-on experience in full-stack web development and a growing passion for AI-driven solutions. I like building intelligent web applications and AI agent systems using React, Node.js, and Python — and I'm looking for a Web Developer / AI Developer internship where I can work on real products.`;

export const education = {
  degree: "B.E. Information Technology",
  institute: "Government Engineering College, Modasa",
  university: "Gujarat Technological University (GTU)",
  years: "2023 – 2027",
  status: "Ongoing · 7th Semester",
};

// Each category becomes a labeled group of gradient skill bars.
// "level" is a rough 0-100 self-rating, purely visual.
export const skillGroups = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 70 },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Angular", level: 60 },
    ],
  },
  {
    name: "AI & Agents",
    skills: [
      { name: "LLM APIs", level: 50 },
      { name: "AI Agent Development", level: 20 },
      { name: "Prompt Engineering", level: 80 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "REST APIs", level: 45 },
    ],
  },
];

// Add, remove, or edit project cards here. "links" are optional —
// leave a value as "" to hide that button on the card.
export const projects = [
  {
    id: "vault",
    tag: "Desktop App",
    title: "VAULT",
    description:
      "A dark-themed, single-file desktop-style file manager built entirely in vanilla HTML, CSS, and JavaScript. Multi-pane layout, drag-and-drop, tagging, context menus, and full keyboard shortcut support.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: { code: "", live: "" },
  },
  {
    id: "campus-helpdesk",
    tag: "Android App",
    title: "Smart Campus Helpdesk",
    description:
      "An Android support-ticket app for campus issues, built with MVVM architecture. Handles ticket management, Firebase push notifications, offline storage with Room, and multiple user roles (student, staff, admin).",
    stack: ["Java", "Android", "MVVM", "Firebase", "Room"],
    links: { code: "", live: "" },
  },
  {
    id: "next",
    tag: "In Progress",
    title: "Next Project",
    description: "Something new is in the works — check back soon.",
    stack: ["TBA"],
    links: { code: "", live: "" },
  },
];

// Short lines the hero console panel "types out" — purely decorative,
// edit freely to change what it cycles through.
export const consoleLines = [
  "$ whoami",
  "> Manish Patil — full-stack & AI agent developer",
  "$ status --check",
  "> available for internships",
  "$ skills --top",
  "> Python · React.js · Node.js · AI Agents",
];

// Photos you've taken. Put the actual image files in public/photography/,
// then list them here. "src" should start with /photography/ since that
// folder is served as-is. "wide" (optional) makes a photo span two grid
// columns for visual variety — use it on a handful of standout shots.
export const photography = [
  // Example — delete this once you add your own photos:
  // { src: "/photography/sunset-lake.jpg", caption: "Sunset at Nal Sarovar", wide: true },
  // { src: "/photography/street-01.jpg", caption: "Old city streets" },

];
