import React from "react";
import { IoDiamondSharp } from "react-icons/io5"; // Using the diamond icon from react-icons
import "../Experience.css";

const experiences = [
  {
    company: "TEO International",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFPimXwD04hOA/company-logo_100_100/company-logo_100_100/0/1631350761367?e=1739404800&v=beta&t=MC49mA1lbLW3GfNkSMxdv-vL6o6a4kvhS3dyfYTHHI8",
    roles: [
      {
        title: "Senior Software Engineer",
        location: "Islamabad, Pakistan (Hybrid)",
        duration: "Sep 2023 - Present · 1 yr 3 mos",
        skills: [
          "WebSocket",
          "SignalR",
          "React.js",
          "JavaScript",
          "Node.js",
          "GraphQL",
        ],
      },
      {
        title: "Software Engineer",
        location: "Islamabad, Pakistan",
        duration: "Oct 2022 - Sep 2023 · 1 yr",
        skills: [
          "React.js",
          "JavaScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Redux",
        ],
      },
    ],
  },
  {
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQHQUzKG981j9A/company-logo_100_100/company-logo_100_100/0/1663218776013/deltacron_business_technologies_logo?e=1739404800&v=beta&t=JV_-fBuqf2wmqrihdOq3GEr0cwWWN_60ZZfzVyJWa8Q",
    company: "Deltacron Business Technologies",
    title: "Frontend Developer",
    location: "Islamabad, Pakistan",
    duration: "Feb 2022 - Oct 2022 · 9 mos",
    description: `
      Implemented and maintained Subscriptions Creation, Update, Cancel, and Pause scenarios using Next.js + TypeScript and Tailwind CSS.
      Built a custom feature to allow users to send Kleta subscriptions as gifts to loved ones.
      Managed language translations using i18nexus for seamless communication with our diverse customer base.
      Utilized S3 Bucket for Image storage, enhancing the user experience.
    `,
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "S3 Bucket",
      "i18nexus",
      "Responsive Web Design",
    ],
  },
  {
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGkBEkm6_QDqA/company-logo_100_100/company-logo_100_100/0/1650392897832/ssconsultant123_logo?e=1739404800&v=beta&t=P2cCj9e1mypPV7sLE5evSm83DpmaGzceU8V4OPX4RnE",
    company: "Safe solutions",
    title: "Full-stack Developer",
    location: "Islamabad, Pakistan",
    duration: "Aug 2021 - Feb 2022 · 7 mos",
    description: `
      Worked on multiple notable projects, including a web application for Architecture Collaboration using the Auto Desk Forge API for 3D Model Visualization.
      Developed a Stock Exchange application using Yahoo Finance and Twelve Finance APIs for real-time market data.
    `,
    skills: [
      "React.js",
      "Material UI",
      "Ant Design",
      "Auto Desk Forge API",
      "Yahoo Finance API",
      "Responsive Web Design",
    ],
  },
  {
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEobaWqnXBcHQ/company-logo_100_100/company-logo_100_100/0/1630468919204/graystork_pvt_ltd_logo?e=1739404800&v=beta&t=IwQMY0V1kDUeUB1nyue3zhqpakqKpX6EyNzIDa6JswU",
    company: "Graystork (Pvt) Ltd",
    title: "Full Stack Developer (Internship)",
    location: "Rawalpindi District, Punjab, Pakistan",
    duration: "Mar 2021 - Jul 2021 · 5 mos",
    skills: ["Responsive Web Design"],
  },
  {
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFHKm5uvluXvw/company-logo_100_100/company-logo_100_100/0/1694444604389/asimplify_logo?e=1739404800&v=beta&t=FfQs1Hb7WvEEr1iONlkt5_sdOR43VTc8atysFEbQA5c",
    company: "aSimplify",
    title: "Internship Trainee",
    location: "Islamabad, Pakistan",
    duration: "Aug 2020 - Oct 2020 · 3 mos",
    skills: ["Responsive Web Design"],
  },
];
console.log("🚀 ~ file: Experience.js ~ line 100 ~ experiences", experiences);
const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="company-timeline">
            <div className="company-info">
              <img
                src={experience.companyLogo}
                alt={`${experience.companyLogo} logo`}
                className="company-logo"
              />
              <h3 className="company-name">{experience.company}</h3>
            </div>
            {experience.roles ? (
              <div className="timeline">
                {experience.roles.map((role, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <h4 className="role-title">{role.title}</h4>
                      <p className="role-location">
                        <span className="location">{role.location}</span> ·{" "}
                        <span className="duration">{role.duration}</span>
                      </p>
                      <div className="role-skills">
                        {role.skills.map((skill, i) => (
                          <span key={i} className="role-skill">
                            <IoDiamondSharp className="diamond-icon" /> {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4 className="role-title">{experience.title}</h4>
                  <p className="role-location">
                    <span className="location">{experience.location}</span> ·{" "}
                    <span className="duration">{experience.duration}</span>
                  </p>
                  {experience.description && (
                    <p className="role-description">{experience.description}</p>
                  )}
                  <div className="role-skills">
                    {experience.skills.map((skill, i) => (
                      <span key={i} className="role-skill">
                        <IoDiamondSharp className="diamond-icon" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
