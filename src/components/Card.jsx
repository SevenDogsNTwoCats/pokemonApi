import '../sass/Card.scss'

const Card = ({name, img}) => {
  return (
    <div className="card">
        <p className="cardName">{name}</p>
        <div className="cardCircle"></div>
        <img src={img} alt="pokemon img" className="cardImg" />
    </div>
  )
}

export {Card}