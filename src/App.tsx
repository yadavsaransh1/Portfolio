import { useEffect, useState } from 'react'
import './App.css'
import { certifications, education, experience, profile, projects, skills } from './content'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Selected work')
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')
  const [activeSlide, setActiveSlide] = useState(0)
  const filters = ['Selected work', 'Full-stack application', 'Data application']
  const visibleProjects = activeFilter === 'Selected work' ? projects : projects.filter((project) => project.type === activeFilter)
  const heroSlides = [
    { image: '/images/profile.jpeg', label: 'Profile' },
    { image: '/images/profile2.jpeg', label: 'Library' },
    { image: '/images/profile3.jpeg', label: 'Full' },
  ]

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(sliderTimer)
  }, [heroSlides.length])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${profile.name} home`}>{profile.initials}<span>.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? 'Close' : 'Menu'}</span><i aria-hidden="true">{menuOpen ? 'x' : '+'}</i></button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation"><a href="#work" onClick={() => setMenuOpen(false)}>Projects</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><a className="resume-link" href="/resume.pdf" download>Resume <span aria-hidden="true">🡇</span></a></nav>
        <a className="header-availability" href="#contact"><span className="status-dot" /> {profile.availability}</a>
        <button className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}><span aria-hidden="true">{darkMode ? '☼' : '◐'}</span><small>{darkMode ? 'Light' : 'Dark'}</small></button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">{profile.role}</p><h1 id="hero-title">Building ideas<br /><em>into software.</em></h1><p className="hero-intro">{profile.intro}</p><a className="arrow-link" href="#work">Explore my projects <span aria-hidden="true">-&gt;</span></a></div><div className="hero-visual" aria-label={`${heroSlides[activeSlide].label} image slider`}><div className="sun-disc" /><div className="portrait-frame"><img key={heroSlides[activeSlide].image} src={heroSlides[activeSlide].image} alt={heroSlides[activeSlide].label} /></div><div className="hero-note">Based in<br /><strong>{profile.location}</strong></div><div className="hero-controls"><button type="button" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous image">←</button><div className="slide-dots">{heroSlides.map((slide, slideIndex) => <button className={slideIndex === activeSlide ? 'slide-dot active' : 'slide-dot'} type="button" key={slide.label} onClick={() => setActiveSlide(slideIndex)} aria-label={`Show ${slide.label}`} aria-current={slideIndex === activeSlide ? 'true' : undefined} />)}</div><button type="button" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="Next image">→</button></div><div className="hero-index">0{activeSlide + 1} <span>/</span> 0{heroSlides.length}</div></div></section>

        <section className="statement-section" aria-label="Development approach"><p className="section-label">A little context</p><div className="statement-copy"><p>Good software should feel <span>clear</span> - well-structured, useful, and built to make someone&apos;s day easier.</p></div><div className="statement-aside"><span className="asterisk" aria-hidden="true">*</span><p>Curious mind.<br />Clean code.<br />Always learning.</p></div></section>

        <section className="work-section" id="work" aria-labelledby="work-title"><div className="section-heading-row"><div><p className="section-label">Selected projects</p><h2 id="work-title">Things I&apos;ve<br /><em>built and learned from.</em></h2></div><span className="project-count">(03)</span></div><div className="filter-row" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter-button active' : 'filter-button'} type="button" onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <article className={`project-card ${project.accent} ${index === 1 ? 'offset-card' : ''}`} key={project.title}><a href="#contact" className="project-image-link" aria-label={`Discuss ${project.title}`}><div className="project-image"><img src={project.image} alt="" /><span className="view-project">View <span aria-hidden="true">-&gt;</span></span></div></a><div className="project-meta"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><span>{project.year}</span></div><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section className="about-section" id="about" aria-labelledby="about-title"><div className="about-heading"><p className="section-label">The person behind the code</p><h2 id="about-title">More than a<br /><em>student.</em></h2></div><div className="about-content"><p className="about-lead">{profile.aboutLead}</p><p className="about-body">{profile.aboutBody}</p><div className="skill-list">{skills.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></div></section>

        <section className="credentials-section" id="experience" aria-labelledby="credentials-title"><div className="credentials-intro"><p className="section-label">The professional record</p><h2 id="credentials-title">Experience,<br /><em>in context.</em></h2><a className="arrow-link" href="#contact">Let&apos;s work together <span aria-hidden="true">-&gt;</span></a></div><div className="credentials-content"><div className="credential-block"><div className="credential-heading"><h3>Experience</h3><span>(03)</span></div>{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.role}`}><time>{item.period}</time><div><h4>{item.role}</h4><p className="credential-company">{item.company}</p><p>{item.description}</p></div></article>)}</div><div className="credential-lower"><div className="credential-block"><div className="credential-heading"><h3>Education</h3><span>(02)</span></div>{education.map((item) => <article className="education-item" key={`${item.school}-${item.qualification}`}><time>{item.period}</time><div><h4>{item.qualification}</h4><p>{item.school}</p></div></article>)}</div><div className="credential-block"><div className="credential-heading"><h3>Certifications</h3><span>(02)</span></div><ul className="certification-list">{certifications.map((certification) => <li key={certification}>{certification}<span aria-hidden="true">↗</span></li>)}</ul></div></div></div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-stamp" aria-hidden="true">Let&apos;s<br />make<br /><em>something</em><br />matter.</div><div className="contact-copy"><p className="section-label">Have a good feeling?</p><h2 id="contact-title">Let&apos;s make<br /><em>something</em> together.</h2><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">-&gt;</span></a></div></section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#top">{profile.initials}<span>.</span></a><p>Designed with intention, built for the long run.</p><div className="footer-links"><a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${profile.email}`}>Email</a></div><span className="copyright">© 2026 {profile.name}<span className="visit-counter">Total visits<img src="https://api.visitorbadge.io/api/visitors?path=saransh-yadav-portfolio&label=&labelColor=%236c7168&countColor=%23e8674b" alt="Total site visits" /></span></span></footer>
    </div>
  )
}

export default App
