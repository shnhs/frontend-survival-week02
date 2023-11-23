import { useState } from 'react';

import React from 'react';
import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
};

function Image({ src, alt = '', width }: ImageProps) {
  const Img = React.createElement('img', {
    src: src,
    alt: alt,
    width: width ?? 'auto',
  });
  return Img;
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(Greeting, { name: 'wholeman' }),
    React.createElement(Image, {
      src: '/images/test.jpg',
      alt: 'Test Image',
      width: 200,
    }),
    React.createElement('p', null, 'Count: ', count),
    [1, 2, 3, 4, 5].map((i) =>
      React.createElement(
        'button',
        {
          key: i,
          type: 'button',
          onClick: () => handleClick(i),
        },

        '+',
        i
      )
    )
  );

  // return (
  //   <div>
  //     <Greeting name="wholeman" />
  //     <Image src="/images/test.jpg" alt="Test Image" width={200} />
  //     <p>Count: {count}</p>
  //     {[1, 2, 3, 4, 5].map((i) => (
  //       <button key={i} type="button" onClick={() => handleClick(i)}>
  //         +{i}
  //       </button>
  //     ))}
  //   </div>
  // );
}