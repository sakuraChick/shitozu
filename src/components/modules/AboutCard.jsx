import { Link } from "react-router-dom";

function AboutCard({ number, category, title, children, link }) {
  return (
    <section className="about-card">
      <p className="eyebrow">{number} / {category}</p>
      <h2>{title}</h2>
      <p>{children}</p>
      {link && <Link className="text-link" to={link.href}>{link.label}<span aria-hidden="true">→</span></Link>}
    </section>
  )
}

export default AboutCard
