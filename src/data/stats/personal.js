import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1988-10-17T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'cities',
    label: 'Cities Visited',
    value: 17,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=138lqXaH6ouu7EZ-V09lC8AWWdhAnd0A&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'El Paso, TX',
  },
];

export default data;
