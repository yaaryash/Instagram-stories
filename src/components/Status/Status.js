
import React, { useEffect, useState, useRef } from 'react';
import './Status.css';


const statusCarousel = [
    {
        img:"https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510027_640.png",
        name:"Your Story"
    }, 
   
    {
        img:"https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
        name:"virat_kohli"
    }, 
    {
        img:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        name:"msd_dohni"
    }, 
    {
      img: "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000",
      name:"messi"
  }, 
    {
        img:"https://thedailyguardian.com/wp-content/uploads/2024/05/1702662144385.png",
        name:"rohit-sharma"
    },
    {
      img: "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000",
      name:"messi"
  }, 
   

    {
        img:"https://cdn-icons-png.flaticon.com/512/805/805370.png",
        name:"ronaldo"
    }, 
    {
        img:"https://i.pinimg.com/564x/dd/ec/16/ddec160e29770ee9622220bf99d56359.jpg",
        name:"ronaldhino"
    },
    {
        img:"https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png",
        name:"Ankit_Kumsdfsdfar"
    }, 
    {
        img:"https://cdn-icons-png.flaticon.com/512/706/706830.png",
        name:"Karan_sharma"
    }, 
    {
        img:"https://cdn-icons-png.flaticon.com/512/706/706816.png",
        name:"virat_kohli"
    }, 
    {
        img:"https://cdn-icons-png.flaticon.com/512/805/805370.png",
        name:"msd_dohni"
    }, 
    {
        img:"https://i.pinimg.com/564x/84/ed/52/84ed529add312d7b5f3fd281d21f8cfe.jpg",
        name:"rohit-sharma"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/1177/1177568.png",
        name:"hardik-pandya"
    }, 
    {
        img:"https://cdn-icons-png.flaticon.com/512/706/706830.png",
        name:"Krunal_pandya"
    }, 
    {
        img: "https://cdn-icons-png.flaticon.com/512/706/706816.png",
        name:"messi"
    }, 
    {
        img:"https://cdn-icons-png.flaticon.com/512/805/805370.png",
        name:"ronaldo"
    }, 
    {
        img:"https://i.pinimg.com/564x/dd/ec/16/ddec160e29770ee9622220bf99d56359.jpg",
        name:"ronaldhino"
    },
    ];

function Status({isStatusClicked, setIsStatusClicked}) {
  const Avatar = ({ image }) => {
  function handleAvatarClick() {
    
    setIsStatusClicked(true);
}
   
    return (
      <section className='avatar-detail'>
        <div className='avatar-box' onClick={()=>handleAvatarClick()}>
          <img className="avatar-profile-image" src={image.img} alt="" />
        </div>
        <p className='avatar-name'>{image.name}</p>
      </section>
    )
  }

  const Carousel = () => {
    const sliderRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
      const slider = sliderRef.current;

      const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - slider.offsetLeft);
        setScrollLeft(slider.scrollLeft);
      };

      const handleMouseUp = () => {
        setIsMouseDown(false);
      };

      const handleMouseLeave = () => {
        setIsMouseDown(false);
      };

      const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
      };

      slider.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      slider.addEventListener('mouseleave', handleMouseLeave);
      slider.addEventListener('mousemove', handleMouseMove);

      return () => {
        slider.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        slider.removeEventListener('mouseleave', handleMouseLeave);
        slider.removeEventListener('mousemove', handleMouseMove);
      };
    }, [isMouseDown, startX, scrollLeft]);

    return (
      <section className='check'>
        <div className="carousel-body" ref={sliderRef}>
          {statusCarousel.map((item, index) => (
            <Avatar key={index} image={item} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className='carousel-status'>
      <Carousel />
    </section>
  );
}

export default Status;
