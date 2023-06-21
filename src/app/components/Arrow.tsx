import React from 'react';

export default function Arrow(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w} // added size here
      height={props.h} // added size here
      viewBox="0 0 53 46"
    >
      <path
        d="M29.9252 46L25.9592 42.0982L42.2867 25.8237H0V20.1763H42.2867L25.9592 3.95312L29.9252 0L53 23L29.9252 46Z "
        fill="white"
      />
    </svg>
  );
}
