import logo from '../../assets/meet.png'
import './Header.css'

const Header = ({ children }) => {
  const { name, color } = children
  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${color}` }}>{name}</span>!
      </p>
    </header>
  )
}

export default Header
