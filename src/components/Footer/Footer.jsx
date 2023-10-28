import footer_logo from '../../assets/Footer/footer_logo.svg'
import git from '../../assets/Footer/github.svg'
import twitter from '../../assets/Footer/twiter.svg'
import love from '../../assets/Footer/love.svg'
import bg from '../../assets/Footer/bg.svg'

export const Footer = () => {
  return (
    <div className='footer'>
        <p className="footer__title">
            performed as part of a test case for the company
        </p>
        <div className='footer__wrap'>
            <img className='footer__img' src={footer_logo} alt="footer-logo" />
            <img src={bg} alt="bg" />
        </div>
        <div className="footer__list">
            <a href="/">
                <img src={git} alt="git" />
            </a>
            <a href="/">
                <img src={twitter} alt="twitter" />
            </a>
            <a href="/">
                <img src={love} alt="love" />
            </a>
        </div>
        <span className='footer__year'>
            2023
        </span>
    </div>
  )
}
