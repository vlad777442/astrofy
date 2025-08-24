// Centralized personal profile used across the site.
// NOTE: Update these fields to match your resume. Keep URLs absolute.

export type Experience = {
  title: string;
  company: string;
  location?: string;
  start: string; // e.g., "Jan 2023"
  end: string; // e.g., "Present" or "May 2024"
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  location?: string;
  start: string;
  end: string;
  details?: string[];
};

export const profile = {
  // Assumption based on repo and resume filename. Change if needed.
  name: "Vlad Esaulov",
  roles: [
    "Software Engineer",
    "Machine Learning Engineer",
    "Research Scientist",
  ],
  headline:
    "Building reliable ML systems and scalable backend services. I ship fast, measure impact, and love hard problems.",
  location: "Atlanta, GA, USA",
  email: "vladesaulov21@gmail.com",
  phone: "",
  links: {
    linkedin: "https://www.linkedin.com/in/vesaulov/",
    github: "https://github.com/vlad777442",
    scholar: "https://scholar.google.com/citations?user=oBqWVOAAAAAJ&hl=en",
    twitter: "",
    website: "",
    resume: "/resume.pdf", // Put your PDF at public/resume.pdf
  },
  skills: [
    "Python", "Java", "Spring Boot","TypeScript", "Node.js", "React",
    "PyTorch", "TensorFlow", "scikit-learn", "Pandas",
    "AWS", "GCP", "Docker", "Kubernetes", "PostgreSQL",
    "Distributed Systems", "MLOps", "Experimentation",
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      school: "Georgia State University",
      location: "Atlanta, GA",
      start: "",
      end: "",
      details: [],
    },
  ] as Education[],
  experience: [
    // Replace with real roles from your resume
    {
      title: "Software Engineer",
      company: "Company Name",
      location: "",
      start: "",
      end: "",
      bullets: [
        "Delivered X using Y, impacting Z (quantify metrics).",
        "Designed and implemented A/B experiments that improved metric by N%.",
      ],
    },
  ] as Experience[],
};

export default profile;
