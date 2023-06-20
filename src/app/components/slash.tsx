import React from 'react';

export default function Slash(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.w} // added size here
      height={props.h} // added size here
      viewBox="0 0 45 51"
    >
      <path d="M0 51L31.5 0H45L13.5 51H0Z" fill="#2E0067" />
    </svg>
  );
}
