import React from 'react';
import Button from '#root/src/components/common/Button/Button';
import Dropdown, { Item } from '../../common/Dropdown/Dropdown';

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
      {/* Render the Dropdown component with the object items */}
      <Dropdown items={objectItems} onSelect={handleObjectSelect} />
    </>
  );
};

export default HomePage;
