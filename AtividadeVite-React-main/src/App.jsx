import Header from './components/Header'
import Card from './components/Card'
import './styles.css'

function App() {
  const cards = [1, 2, 3]

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="intro" aria-labelledby="cards-title">
          <span className="intro__tag">Reutilização na prática</span>
          <h2 id="cards-title">Três cards, um único componente</h2>
          <p>
            Cada card abaixo é uma instância de <code>Card</code> recebendo um
            número diferente por meio de props.
          </p>
        </section>

        <section className="cards" aria-label="Cards numerados">
          {cards.map((number) => (
            <Card key={number} number={number} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
