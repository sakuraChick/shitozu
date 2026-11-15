function ShippingCard({ icon, title, children }) {
  return (
    <article className="shipping-card">
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}

export default ShippingCard;
