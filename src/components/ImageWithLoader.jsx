import React, { useState } from 'react';

const ImageWithLoader = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  onError = null,
  loading = 'lazy',
  aspectRatio = null,
  priority = false 
}) => {
  const [imageLoaded, setImageLoaded] = useState(priority);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    setImageError(true);
    if (onError) {
      onError(e);
    }
  };

  return (
    <div className={`relative ${aspectRatio ? '' : 'w-full h-full'}`} style={aspectRatio ? { aspectRatio } : {}}>
      {/* Skeleton Loader */}
      {!imageLoaded && !imageError && !priority && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse rounded-inherit">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!imageLoaded && !priority ? 'opacity-0' : 'opacity-100'} transition-opacity duration-${priority ? '0' : '300'}`}
        style={style}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={loading}
      />
      
      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 rounded-inherit">
          <span className="text-white/50 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithLoader;
