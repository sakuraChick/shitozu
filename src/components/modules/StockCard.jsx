function StockCard({ image, name, status, href = "#", linkLabel = "詳細を見る" }) {
  return (
    <article className="stock-card">
      <img src={image} alt={name} />
      <div>
        <p className="eyebrow">{status}</p>
        <h2>{name}</h2>
        <a className="stock-link" href={href}>{linkLabel}<span aria-hidden="true">→</span></a>
      </div>
    </article>
  )
}

export default StockCard
