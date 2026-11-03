function Card({ number }) {
  return (
    <article className="card">
      <span className="card__label">Card</span>
      <strong className="card__number">{number}</strong>
      <p>Instância reutilizada do mesmo componente.</p>
    </article>
  )
}

export default Card
