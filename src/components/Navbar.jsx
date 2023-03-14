import logoIcon from '../images/logo.png'
import barsIcon from '../images/menu.png'
import { menuData } from '../data/MenuData'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
      <header>
        <NavLink to='/' className='log'>
          <img src={logoIcon} alt='logo'/>
        </NavLink>
        <input type="checkbox" id='menu-bar'/>
          <label for="menu-bar">
            <img src={barsIcon} alt='bars' className='barsImg'/>
          </label>
          <nav className='navbar'>
            <ul>
              {menuData.map((item) =>(
                  <li key={item.categoriId}>
                    <NavLink to= {item.link}> {item.title}</NavLink>
                    <ul>
                      {item.sub.map((subitem)=>(
                            <li key={subitem.subcategoriId}>
                              <NavLink to={subitem.link} 
                              onClick={()=>{
                                 window.location.replace(subitem.link)
                              }
                              }>
                                {subitem.subtitle}
                              </NavLink>
                            </li>
                      ))}
                    </ul>
                  </li>
              ))}
            </ul>
          </nav>
      </header>
    </>
  )
}
