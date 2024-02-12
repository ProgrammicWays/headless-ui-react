import React from 'react';
import Button from '#src/components/common/Button';

const HomePage = () => {
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
    </>
  );
};

export default HomePage;
