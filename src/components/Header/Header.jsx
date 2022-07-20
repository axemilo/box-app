
import {Container} from '../Container/'
import Style from './Header.module.css'
import {menu} from './menu'
import logoImage from '../../assets/images/box-logo.svg'
export const Header = () => {
  return (
    <header>
        <Container  >
            <div className={Style['logo-link']}>
              <img src={logoImage} alt="" width="45" height="45" />
              <h2>Content</h2>
            </div>
            <nav>
            <ul className={Style['nav-list']}>
                {menu.map((item) => (
                  <li key={`menu-item-${item.id}`} >
                    <a href={item.link}>{item.title}</a>
                 </li>
                ))}
            </ul>
           </nav>
        </Container>
    </header>
  )
}
