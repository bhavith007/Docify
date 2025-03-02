export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <p>Introduction to the software development proposal goes here...</p>
      <h2>Project Overview</h2>
      <p>Provide an overview of the software project...</p>
      <h2>Objectives</h2>
      <ul>
        <li>Define the main objectives of the project</li>
        <li>Explain the key deliverables</li>
      </ul>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p>Provide a brief introduction to the project...</p>
      <h2>Goals and Objectives</h2>
      <p>State the goals and objectives of the project...</p>
      <h2>Project Timeline</h2>
      <p>Outline the timeline for the project...</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <h1>Business Letter</h1>
      <p>Dear [Recipient],</p>
      <p>Introduce the purpose of the business letter here...</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>Resume</h1>
      <h2>Personal Information</h2>
      <p>Name: [Your Name]</p>
      <p>Email: [Your Email]</p>
      <h2>Professional Summary</h2>
      <p>Brief professional summary goes here...</p>
      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
      </ul>
      <h2>Experience</h2>
      <p>Previous job experience...</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <h1>Cover Letter</h1>
      <p>Dear [Hiring Manager],</p>
      <p>Introduce yourself and the position you're applying for...</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <h1>Letter</h1>
      <p>Dear [Recipient],</p>
      <p>Write the body of your letter here...</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
];
