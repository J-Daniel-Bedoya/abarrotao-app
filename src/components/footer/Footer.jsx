import React from 'react'
import { Link } from "react-router-dom";
import homeImg from '../../assets/imgs/home-icon.png';
import historyImg from '../../assets/imgs/history-icon.png';
import searchImg from '../../assets/imgs/search-icon.png';
import profileImg from '../../assets/imgs/profile-icon.png';

const NavigationMenu = ({ isAuthentication }) => {
  return (
    
      isAuthentication?
        <div className='navWrapper'>
          <div className='navigation'>
            <ul>
              <li className='list active'>
                <Link to={'/home'} className='linkNav'>
                  <span className='icon'><img src={homeImg} alt="Hause icon" /></span>
                  <span className='text'>Home</span>
                </Link>
              </li>
              <li className='list'>
                <Link to={'/turnos'} className='linkNav'>
                  <span className='icon'><img src={historyImg} alt="Schedule icon" /></span>
                  <span className='text'>Turnos</span>
                </Link>
              </li>
              <li className='list'>
                <Link to={'/busqueda'} className='linkNav'>
                  <span className='icon'><img src={searchImg} alt="Magnifying glass icon" /></span>
                  <span className='text'>Buscar</span>
                </Link>
              </li>
              <li className='list'>
                <Link to={'/perfil'} className='linkNav'>
                  <span className='icon'><img src={profileImg} alt="User icon" /></span>
                  <span className='text'>Perfil</span>
                </Link>
              </li>
              <div className='indicator'></div>
            </ul>
          </div>
        </div>
        :
        <></>   
  )
}

export default NavigationMenu;
