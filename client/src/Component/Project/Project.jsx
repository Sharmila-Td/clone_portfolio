import React from 'react';
import './Project.css';
import { VscArrowLeft } from 'react-icons/vsc';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Project = () => {
  return (
    <div className='project_content'>
        <h1 color="dark" className="logo">Mern</h1>
        <button className='nav_btn'>
            <a href='/' className="active">
                <VscArrowLeft size={30} />
            </a>
        </button>
        <div className="social_link-group">
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaLinkedin size={25} fill="#ffffff" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaGithub size={25} fill="#ffffff" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaTwitter size={25} fill="#ffffff" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaFacebook size={25} fill="#ffffff" />
            </a>
          </div>
          <div className='social_link'>
            <a href="#" target="_blank" style={{ color: 'inherit' }}>
              <FaYoutube size={25} fill="#ffffff" />
            </a>
          </div>
          <span className="nav_line" style={{ height: '8rem' }}></span>
        </div>   
  <ul className='social_ul items' id="grab-scroll">
    <li className='flip-card mr-8rem'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div className='boOfnS'>
            <h2 className='hpRDUw'>KryptoGiffy</h2>
            <div className='bojiJp'>This platform allows you to perform transactions via Blockchain by using Ethereum mainnet. Prerequisite: Web3.0 Wallet.</div>
          </div>
        </div>
        <div className='flip-card-back'>
          <img src="https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fkryptogiffy.jpg?alt=media&amp;token=b642f131-cdda-4378-9d2b-7f8770b1e671" alt='KryptoGiffy'/>
          <div className='bYgUJS'>
            <span className='fDDjHD'>#Ropsen</span>
            <span className='fDDjHD'>#Goerli</span>
            <span className='fDDjHD'>#Ethereum</span>
            <span className='fDDjHD'>#Web 3.0</span>
          </div>
          <footer className='iehvjW'>
            <a className='visit-link' target="_blank" rel="noopener noreferrer" href="https://kryptogiffy.web.app/">Visit</a>
            <a className='sc-jJMGnK laKGqb' target="_blank" rel="noopener noreferrer" href="https://github.com/hareesh-r/KryptoGiffy">
              <svg aria-hidden="true" data-prefix="fab" data-icon="github" className='git' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
          </footer>
        </div>
      </div>
    </li>
    <li className='flip-card mr-8rem'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div className='boOfnS'>
            <h2 className='hpRDUw'>KryptoGiffy</h2>
            <div className='bojiJp'>This platform allows you to perform transactions via Blockchain by using Ethereum mainnet. Prerequisite: Web3.0 Wallet.</div>
          </div>
        </div>
        <div className='flip-card-back'>
          <img src="https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fkryptogiffy.jpg?alt=media&amp;token=b642f131-cdda-4378-9d2b-7f8770b1e671" alt='KryptoGiffy'/>
          <div className='bYgUJS'>
            <span className='fDDjHD'>#Ropsen</span>
            <span className='fDDjHD'>#Goerli</span>
            <span className='fDDjHD'>#Ethereum</span>
            <span className='fDDjHD'>#Web 3.0</span>
          </div>
          <footer className='iehvjW'>
            <a className='visit-link' target="_blank" rel="noopener noreferrer" href="https://kryptogiffy.web.app/">Visit</a>
            <a className='sc-jJMGnK laKGqb' target="_blank" rel="noopener noreferrer" href="https://github.com/hareesh-r/KryptoGiffy">
              <svg aria-hidden="true" data-prefix="fab" data-icon="github" className='git' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
          </footer>
        </div>
      </div>
    </li>
    <li className='flip-card mr-8rem'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div className='boOfnS'>
            <h2 className='hpRDUw'>KryptoGiffy</h2>
            <div className='bojiJp'>This platform allows you to perform transactions via Blockchain by using Ethereum mainnet. Prerequisite: Web3.0 Wallet.</div>
          </div>
        </div>
        <div className='flip-card-back'>
          <img src="https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fkryptogiffy.jpg?alt=media&amp;token=b642f131-cdda-4378-9d2b-7f8770b1e671" alt='KryptoGiffy'/>
          <div className='bYgUJS'>
            <span className='fDDjHD'>#Ropsen</span>
            <span className='fDDjHD'>#Goerli</span>
            <span className='fDDjHD'>#Ethereum</span>
            <span className='fDDjHD'>#Web 3.0</span>
          </div>
          <footer className='iehvjW'>
            <a className='visit-link' target="_blank" rel="noopener noreferrer" href="https://kryptogiffy.web.app/">Visit</a>
            <a className='sc-jJMGnK laKGqb' target="_blank" rel="noopener noreferrer" href="https://github.com/hareesh-r/KryptoGiffy">
              <svg aria-hidden="true" data-prefix="fab" data-icon="github" className='git' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
          </footer>
        </div>
      </div>
    </li>
    <li className='flip-card mr-8rem'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div className='boOfnS'>
            <h2 className='hpRDUw'>KryptoGiffy</h2>
            <div className='bojiJp'>This platform allows you to perform transactions via Blockchain by using Ethereum mainnet. Prerequisite: Web3.0 Wallet.</div>
          </div>
        </div>
        <div className='flip-card-back'>
          <img src="https://firebasestorage.googleapis.com/v0/b/hareesh-e153f.appspot.com/o/projects%2Fkryptogiffy.jpg?alt=media&amp;token=b642f131-cdda-4378-9d2b-7f8770b1e671" alt='KryptoGiffy'/>
          <div className='bYgUJS'>
            <span className='fDDjHD'>#Ropsen</span>
            <span className='fDDjHD'>#Goerli</span>
            <span className='fDDjHD'>#Ethereum</span>
            <span className='fDDjHD'>#Web 3.0</span>
          </div>
          <footer className='iehvjW'>
            <a className='visit-link' target="_blank" rel="noopener noreferrer" href="https://kryptogiffy.web.app/">Visit</a>
            <a className='sc-jJMGnK laKGqb' target="_blank" rel="noopener noreferrer" href="https://github.com/hareesh-r/KryptoGiffy">
              <svg aria-hidden="true" data-prefix="fab" data-icon="github" className='git' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
          </footer>
        </div>
      </div>
    </li>
  </ul>

        <h1 className="social_work">WORK</h1>
        <h1 className="social-swipe">Swipe..</h1>
        <span className="social_center">
          <svg aria-hidden="true" data-prefix="fas" data-icon="yin-yang" class="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="80" height="80" fill="#FCF6F4"><path fill="#FCF6F4" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg></span>
    </div>
  )
}

export default Project