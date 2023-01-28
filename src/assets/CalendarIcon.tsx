import React, { memo, SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="magicoon-Regular"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <style>{'.cls-1{fill:#41416e;}'}</style>
    </defs>
    <title>{'calendar'}</title>
    <g id="calendar-Regular">
      <path
        id="calendar-Regular-2"
        data-name="calendar-Regular"
        className="cls-1"
        d="M17,3.25h-.25V3a.75.75,0,0,0-1.5,0v.25H8.75V3a.75.75,0,0,0-1.5,0v.25H7A4.756,4.756,0,0,0,2.25,8v9A4.756,4.756,0,0,0,7,21.75H17A4.756,4.756,0,0,0,21.75,17V8A4.756,4.756,0,0,0,17,3.25ZM7,4.75h.25V6a.75.75,0,0,0,1.5,0V4.75h6.5V6a.75.75,0,0,0,1.5,0V4.75H17A3.254,3.254,0,0,1,20.25,8v.25H3.75V8A3.254,3.254,0,0,1,7,4.75Zm10,15.5H7A3.254,3.254,0,0,1,3.75,17V9.75h16.5V17A3.254,3.254,0,0,1,17,20.25ZM17,13a1,1,0,1,1-1-1A1,1,0,0,1,17,13Zm-4,0a1,1,0,1,1-1-1A1,1,0,0,1,13,13ZM9,13a1,1,0,1,1-1-1A1,1,0,0,1,9,13Zm8,4a1,1,0,1,1-1-1A1,1,0,0,1,17,17Zm-4,0a1,1,0,1,1-1-1A1,1,0,0,1,13,17ZM9,17a1,1,0,1,1-1-1A1,1,0,0,1,9,17Z"
      />
    </g>
  </svg>
);

const CalendarIcon = memo(SVGComponent);
export default CalendarIcon;
