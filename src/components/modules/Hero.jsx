import ButtonLink from "../ui/ButtonLink.jsx";

function Hero({ image, imageAlt, eyebrow, title, children, action, actionLabel }) {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <img className="hero-image" src={image} alt={imageAlt} />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="hero-title">{title}</h1>
        <p className="hero-copy">{children}</p>
        <ButtonLink href={action}>{actionLabel}<span aria-hidden="true">↗</span></ButtonLink>
      </div>
    </section>
  )
}

export default Hero;
