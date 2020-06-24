import React from 'react';
import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';

const MainContent = () => {
  const images = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAcR87zzk3AgOkFp5VeA6GTJuMkUpnSIi76A&usqp=CAU'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOFiId-5zxEzIIYl0SdcAdhGaHhF46X3hEkQ&usqp=CAU'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGY4huDEZxHuJE5Bh2eK0FRz2r3NxoTfccJA&usqp=CAU'
    }
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto={false} showArrows={true}></Slideshow>
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* Display grid component */}
    </div>
  );
};

export default MainContent;
