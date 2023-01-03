import '../sass/Button.scss'

const Button = ({icon, handleClick}) => {
  return (
    <div className="btnBox">
        <button className='btn' onClick={handleClick}>{icon}</button>
        <div className="btnShadow"></div>
    </div>
  )
}

export {Button}
