import React, { useState } from 'react';
import wallpaper from '../../img/wallpaper.jpg';
import Loader from 'components/Loader/Loader';

const HomeContent = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div>
      {!imageError ? (
        <img
          src={wallpaper}
          alt="Home wallpaper"
          loading="lazy"
          onError={handleImageError}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default HomeContent;
