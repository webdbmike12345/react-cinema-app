import React from 'react';
import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAcR87zzk3AgOkFp5VeA6GTJuMkUpnSIi76A&usqp=CAU',
      rating: 7.5
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAcR87zzk3AgOkFp5VeA6GTJuMkUpnSIi76A&usqp=CAU',
      rating: 8.5
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOFiId-5zxEzIIYl0SdcAdhGaHhF46X3hEkQ&usqp=CAU',
      rating: 7.8
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOFiId-5zxEzIIYl0SdcAdhGaHhF46X3hEkQ&usqp=CAU',
      rating: 9.7
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOFiId-5zxEzIIYl0SdcAdhGaHhF46X3hEkQ&usqp=CAU',
      rating: 6.5
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGY4huDEZxHuJE5Bh2eK0FRz2r3NxoTfccJA&usqp=CAU',
      rating: 8.5
    }
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto={false} showArrows={true}></Slideshow>
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      <Grid images={images}></Grid>
    </div>
  );
};

export default MainContent;
