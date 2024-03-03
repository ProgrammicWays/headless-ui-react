// PicturesCarousel.tsx
import React from 'react';
import useCarousel from './useCarousel';

export interface Picture {
  id: number;
  url: string;
  alt: string;
}
export interface PicturesCarouselProps {
  pictures: Picture[]; // Array of pictures
}

const PicturesCarousel: React.FC<PicturesCarouselProps> = ({ pictures }) => {
  const renderPicture = (picture: Picture) => <img src={picture.url} alt={picture.alt} />;

  const { currentIndex, nextSlide, prevSlide } = useCarousel({
    slides: pictures,
    autoplay: true,
    autoplayDelay: 3000,
    infinite: true,
    renderSlide: renderPicture
  });

  return (
    <div>
      <div>{pictures[currentIndex] && renderPicture(pictures[currentIndex])}</div>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default PicturesCarousel;
