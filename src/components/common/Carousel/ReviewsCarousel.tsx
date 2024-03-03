// ReviewsCarousel.tsx
import React from 'react';
import useCarousel from './useCarousel';

export interface Review {
  id: number;
  title: string;
  content: string;
  rating: number;
}

export interface ReviewsCarouselProps {
  reviews: Review[]; // Array of reviews
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviews }) => {
  const renderReview = (review: Review) => (
    <div>
      <h3>{review.title}</h3>
      <p>{review.content}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );

  const { currentIndex, nextSlide, prevSlide } = useCarousel({
    slides: reviews,
    autoplay: true,
    autoplayDelay: 3000,
    infinite: true,
    renderSlide: renderReview
  });

  return (
    <div>
      <div>{reviews[currentIndex] && renderReview(reviews[currentIndex])}</div>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ReviewsCarousel;
