import React, { useState } from 'react';

export default function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // ඔයාගේ Actual Projects List එක
  const projects = [
    {
      title: "Dahanakamulla Family Tree",
      category: "Web Application",
      description: "An interactive digital family tree web application built to visualize and preserve generational lineage with intuitive navigation and detailed profile views.",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      demoUrl: "https://example.com", // Live link එක නැත්නම් '#' දාන්න
      githubUrl: "https://github.com"
    },
    {
      title: "University GPA Calculator",
      category: "Mobile Application",
      description: "A tailored mobile application built with Flutter to assist university students in calculating, tracking, and predicting semester and overall GPAs effortlessly.",
      tags: ["Flutter", "Dart", "Mobile Dev"],
      demoUrl: null, // Mobile app හින්දා Demo නැත්නම් null දාන්න පුළුවන්
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section style={styles.section} id="portfolio">
      <div style={styles.container}>
        
        {/* Section Header */}
        <h2 style={styles.mainTitle}>Featured Projects</h2>
        <p style={styles.subTitle}>
          Here are some of the key web and mobile development projects I've built.
        </p>

        {/* Projects Responsive Grid */}
        <div style={styles.grid}>
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                style={{
                  ...styles.card,
                  borderColor: isHovered ? '#2563eb' : '#e2e8f0',
                  boxShadow: isHovered
                    ? '0 20px 35px -10px rgba(37, 99, 235, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.04)'
                    : '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
                  background: isHovered 
                    ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' 
                    : '#ffffff'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Category Badge */}
                <div style={styles.categoryBadge}>
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 style={styles.projectTitle}>{project.title}</h3>

                {/* Description */}
                <p style={styles.projectDesc}>{project.description}</p>

                {/* Tech Stack Pills */}
                <div style={styles.tagsContainer}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={styles.tagPill}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Links */}
                <div style={styles.actionGroup}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.primaryBtn}
                    >
                      <span>🚀</span> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.secondaryBtn}
                    >
                      <span>💻</span> GitHub Repo
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '90px 20px',
    backgroundColor: '#f8fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  container: {
    maxWidth: '1150px',
    margin: '0 auto'
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: '38px',
    fontWeight: '800',
    color: '#0f172a',
    margin: '0 0 8px 0',
    letterSpacing: '-0.5px'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '15px',
    color: '#64748b',
    marginBottom: '50px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '30px',
    alignItems: 'stretch'
  },
  card: {
    backgroundColor: '#ffffff',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderRadius: '24px',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box'
  },
  categoryBadge: {
    display: 'inline-block',
    alignSelf: 'flex-start',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontSize: '11px',
    fontWeight: '700',
    padding: '6px 12px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '16px',
    border: '1px solid #dbeafe'
  },
  projectTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 12px 0',
    lineHeight: '1.3'
  },
  projectDesc: {
    fontSize: '14px',
    color: '#475569',
    lineHeight: '1.6',
    margin: '0 0 24px 0',
    flexGrow: 1
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '28px'
  },
  tagPill: {
    backgroundColor: '#f1f5f9',
    color: '#334155',
    fontSize: '12px',
    fontWeight: '600',
    padding: '5px 12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  actionGroup: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    flex: '1 1 auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '13px',
    padding: '10px 18px',
    borderRadius: '10px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
  },
  secondaryBtn: {
    flex: '1 1 auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    border: '1.5px solid #cbd5e1',
    fontWeight: '600',
    fontSize: '13px',
    padding: '10px 18px',
    borderRadius: '10px',
    textDecoration: 'none',
    transition: 'all 0.2s ease'
  }
};