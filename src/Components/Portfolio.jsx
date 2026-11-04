import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../sanityClient'; // path එක ඔයාගේ project structure එකට අනුව වෙනස් වෙන්න පුළුවන්

export default function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sanity එකෙන් data fetch කරගැනීම
  useEffect(() => {
    client
      .fetch(`*[_type == "project"]`)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section style={styles.section} id="portfolio">
      <div style={styles.container}>
        
        {/* Section Header */}
        <h2 style={styles.mainTitle}>Featured Projects</h2>
        <p style={styles.subTitle}>
          Here are some of the key web and mobile development projects I've built.
        </p>

        {/* Loading State හෝ Projects Responsive Grid */}
        {loading ? (
          <p style={{ textAlign: 'center', color: '#64748b' }}>Loading projects from Sanity...</p>
        ) : projects.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#64748b' }}>No projects found. Please add some from Sanity Studio.</p>
        ) : (
          <div style={styles.grid}>
            {projects.map((project, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={project._id || index}
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
                  <div>
                    {/* Project Image (Sanity image එකක් තියෙන නම් පෙන්වයි) */}
                    {project.image && (
                      <div style={{ marginBottom: '16px', overflow: 'hidden', borderRadius: '12px' }}>
                        <img 
                          src={urlFor(project.image).url()} 
                          alt={project.title} 
                          style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    )}

                    {/* Category Badge */}
                    <div style={styles.categoryBadge}>
                      {project.category || 'Development'}
                    </div>

                    {/* Project Title */}
                    <h3 style={styles.projectTitle}>{project.title}</h3>

                    {/* Description */}
                    <p style={styles.projectDesc}>{project.description}</p>

                    {/* Tech Stack Pills */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div style={styles.tagsContainer}>
                        {project.technologies.map((tag, tagIndex) => (
                          <span key={tagIndex} style={styles.tagPill}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Action Links */}
                  <div style={styles.actionGroup}>
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
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
        )}

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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '12px',
    width: '100%'
  },
  primaryBtn: {
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