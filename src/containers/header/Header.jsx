import React, { useState, useEffect, useRef } from 'react';
import './header.css'

// import people from '../../assets/people.png'
import ignitor from '../../assets/Product.png'


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className='ignitor__header_wrap'>
      <div className='ignitor__header section__padding' id='home'>
        <div className='ignitor__header-content'>
          <h1>Ignitor</h1>
          <p>An AI-powered educational platform, that demystifies fixed annuities and empowers you to make informed decisions about your retirement investments</p>
          
          <h3 onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>Watch Demo Video</h3>

          {showModal && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000
            }}>
              <div ref={modalRef}>
                <iframe 
                  title="Ignitor Demo Video"
                  width="720" 
                  height="480" 
                  src="https://www.youtube.com/embed/uoW86nC-n1U" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
                
              </div>
            </div>
          )}

          {/* <div className='ignitor__header-content__input'>
            <a href="https://ignitor.ainsurme.com"><button>Try Ignitor</button></a>
          </div> */}
        </div>

        <div className="ignitor__header-image">
          {/* <a href="https://ignitor.ainsurme.com"> */}
            <img src={ignitor} alt="ignitor" />
          {/* </a> */}
        </div>
      </div>
    </div>
  )
}

export default Header;