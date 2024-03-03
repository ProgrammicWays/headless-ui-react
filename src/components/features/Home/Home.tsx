import React from 'react';
import Button from '#root/src/components/common/Button/Button';
import Dropdown, { Item } from '../../common/Dropdown/Dropdown';
import ReviewsCarousel, { Review } from '../../common/Carousel/ReviewsCarousel';
import PicturesCarousel, { Picture } from '../../common/Carousel/PicturesCarousel';

const HomePage = () => {
  const stringItems = [
    {
      text: 'Option 1',
      value: 'option1',
      icon: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/16x16/plain/check.png'
    },
    { text: 'Option 2', value: 'option2' },
    { text: 'Option 3', value: 'option3' }
  ];

  const objectItems = [
    { text: 'Option 1', value: { id: 1, name: 'Option One' } },
    { text: 'Option 2', value: { id: 2, name: 'Option Two' } },
    { text: 'Option 3', value: { id: 3, name: 'Option Three' } }
  ];

  const handleObjectSelect = (item: (typeof objectItems)[0]) => {
    console.log('Selected item:', item);
  };

  const handleSelect = (item: Item<string>) => {
    console.log('Selected item:', item);
  };

  const reviewsData: Review[] = [
    {
      id: 1,
      title: 'Great product!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 5
    },
    {
      id: 2,
      title: 'Not bad',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 3
    },
    {
      id: 3,
      title: 'Could be better',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 2
    }
  ];

  const picturesData: Picture[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1609805620003-2a785a3b8a56?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Picture 1'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Picture 2'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Picture 3'
    }
  ];

  return (
    <>
      <h1>Welcome to Another React Tutorial!</h1>
      <div>We are going to create some of the common Headless UI components</div>
      <Button
        variant='primary'
        size='medium'
        icon={
          <img src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/16x16/plain/check.png' />
        }
      >
        Primary
      </Button>
      <Button variant='secondary' size='small'>
        Secondary
      </Button>
      <Button variant='tertiary' size='large'>
        Tertiary
      </Button>
      <Button variant='tertiary' size='large' disabled={true}>
        Disabled
      </Button>
      <Button variant='tertiary' size='large' loading={true} fullWidth={true}>
        Loading
      </Button>

      <h2>Dropdown Component</h2>
      <Dropdown
        items={stringItems}
        onSelect={handleSelect}
        dropdownClasses='abc'
        triggerClasses='t'
        menuClasses='m'
        menuItemClasses='mi'
      />

      <h2>Object Dropdown Example</h2>
      {/* Render the Dropdown component with the object items
      <Dropdown items={objectItems} onSelect={handleObjectSelect} /> */}
      <h3>Reviews Carousel</h3>
      <ReviewsCarousel reviews={reviewsData} />

      <h3>Pictures Carousel</h3>
      <PicturesCarousel pictures={picturesData} />
    </>
  );
};

export default HomePage;
