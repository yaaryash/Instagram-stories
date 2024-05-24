import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './IphoneLayout.css';
import Status from './Status/Status';
import { Stories } from './Stories/Stories';

const IphoneLayout = () => {
  const [time, setTime] = useState(new Date());
  const [isStatusClicked, setIsStatusClicked] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  

  

  const formatTime = (date) => {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${period}`;
  };

  return (
    <div className="mobile-layout">
      <div className="status-bar">
        <div className="time">{formatTime(time)} </div>
        <div className="icons">
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-three-quarters"></i>
        </div>
      </div>
      
      <div className='logo'><p className='logoName'>Instagram</p></div>
      <div className='StatusAvatars'>
        {isStatusClicked ? (
          <Stories setIsStatusClicked={setIsStatusClicked} />
        ) : (
          <Status isStatusClicked={isStatusClicked} setIsStatusClicked={setIsStatusClicked} />
        )}
      </div>
      <div class="home-indicator"></div>

    </div>
  );
};

export default IphoneLayout;
