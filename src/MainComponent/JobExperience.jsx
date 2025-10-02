import React from "react";
import "../CSS/JobExperience.css";

const jobData = [
  {
    role: "MERN Stack Developer + Trainer",
    duration: "Apr 2025 - Present",
    company: "Grras IT Solution Pvt Ltd, Ahmedabad",
    description:
      "Built full-stack apps using MongoDB, Express, React and Node. Mentor students on real-time projects, best practices, and performance tuning.",
    skills: ["React", "Node.js", "DataBase", "Teaching"]
  },

  {
    role: "React JS Developer",
    duration: "Sep 2023 - Mar 2024",
    company: "Saubhagyam Web Pvt Ltd, Ahmedabad",
    description:
      "Developed responsive UIs, component libraries and integrated REST APIs for client projects. Focused on accessibility and pixel-perfect designs.",
    skills: ["React", "Redux", "REST APIs"]
  },
  {
    role: "MERN Stack Developer",
    duration: "Dec 2022 - Sep 2023",
    company: "Aellon Technology Pvt Ltd, Ahmedabad",
    description:
      "Worked on end-to-end features, RESTful services, and deployment pipelines for production web apps.",
    skills: ["React.JS", "Vue.JS", "Express.JS", "Node.JS", "CI/CD"]
  },
  {
    role: "Front-end Developer (Intern)",
    duration: "May 2022 - Aug 2022",
    company: "Perfetto Solution, Surendranagar",
    description:
      "Learnt and implemented responsive layouts, interactive components and collaborated with designers to ship UI features.",
    skills: ["HTML", "CSS", "JavaScript", "React.JS", "Node.JS"]
  }
];

export default function JobExperience() {
  return (
    <section className="job-experience">
      <div className="job-header-section">
        <h2 className="job-title">Work Journey</h2>
        <a href="#" className="linkedin-btn">View LinkedIn</a>
      </div>

      <div className="timeline">
        {jobData.map((job, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content">
              <h3 className="role"> {job.role} </h3>
              <span className="duration">{job.duration}</span>
              <h4 className="company">{job.company}</h4>
              <p className="description">{job.description}</p>
              <div className="skills">
                {job.skills?.map((s, i) => (
                  <span key={i} className="skill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

