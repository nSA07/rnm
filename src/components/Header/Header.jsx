import { Link } from 'react-router-dom'
import logo from '../../assets/Header/logo.svg'
import bg from '../../assets/Header/bg.svg'

export const Header = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Link className='header__logo' to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className='header__main' style={{ backgroundImage: `url(${bg})` }}>
                <h1 className='header__title'>The Rick and Morty API</h1>
            </div>
        </header>
    </div>
  )
}
