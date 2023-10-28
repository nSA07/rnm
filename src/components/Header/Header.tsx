import logo from '../../assets/Header/logo.svg'
import bg from '../../assets/Header/bg.svg'

export const Header = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <div className='header__logo'>
                <img src={logo} alt="" />
            </div>
            <div className='header__main' style={{ backgroundImage: `url(${bg})` }}>
                <h1 className='header__title'>The Rick and Morty API</h1>
            </div>
        </header>
    </div>
  )
}
