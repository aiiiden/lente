import { ComponentPropsWithRef } from 'react';

interface LogoProps extends ComponentPropsWithRef<'svg'> {
  size: 'sm' | 'md' | 'lg';
}

export function ImageLogo({ className, size, fill, ...props }: LogoProps) {
  if (size === 'sm') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V20H0V0ZM4.5 3H9V7.5L4.5 3ZM3 9H8L3 4.5L3 9ZM16 17H11V12L16 17ZM11 9L17 15L17 2.99999L11 3V9ZM9 17H3L3 11H9V17Z"
          fill={fill || 'black'}
        />
      </svg>
    );
  }

  if (size === 'lg') {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H120V120H0V0ZM27 18H51V42L27 18ZM18 51H42L18 27L18 51ZM93 102H66V75L93 102ZM66 54L102 90L102 18L66 18V54ZM51 102H18L18 66H51V102Z"
          fill={fill || 'black'}
        />
      </svg>
    );
  }

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H40V40H0V0ZM9 6H17V14L9 6ZM6 17H14L6 9L6 17ZM31 34H22V25L31 34ZM22 18L34 30L34 5.99999L22 6V18ZM17 34H6.00001L6 22H17V34Z"
        fill={fill || 'black'}
      />
    </svg>
  );
}

export function TypoLogo({ className, size, fill, ...props }: LogoProps) {
  if (size === 'sm') {
    return (
      <svg
        width="76"
        height="20"
        viewBox="0 0 76 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V20H12V16H4V0H0ZM13 1.81198e-05V20L25 20V16H17V12H25V8H17V4H25V0L13 1.81198e-05ZM30 6V20H26V0H30.5L40 13.5V0H44V20H39.5L30 6ZM63 4H56V20H52V4H45V0H63V4ZM64 20V1.81198e-05L76 0V4H68V8H76V12H68V16H76V20L64 20Z"
          fill={fill || 'black'}
        />
      </svg>
    );
  }

  if (size === 'lg') {
    return (
      <svg
        width="456"
        height="120"
        viewBox="0 0 456 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V120H72V96H24V0H0ZM78 0.000108719V120L150 120V96H102V72H150V48H102V24H150V0L78 0.000108719ZM180 36V120H156V0H183L240 81V0H264V120H237L180 36ZM378 24H336V120H312V24H270V0H378V24ZM384 120V0.000108719L456 0V24H408V48H456V72H408V96H456V120L384 120Z"
          fill={fill || 'black'}
        />
      </svg>
    );
  }

  return (
    <svg
      width="152"
      height="40"
      viewBox="0 0 152 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V40H24V32H8V0H0ZM26 40V3.62396e-05L50 0V8H34V16L50 16.12V24H34V32H50V40L26 40ZM60 40V12L79 40H88V0H80V27L61 0H52V40H60ZM112 7V40H104V7H90V0H126V7H112ZM128 40V3.62396e-05L152 0V8H136V16H152V24H136V32H152V40L128 40Z"
        fill={fill || 'black'}
      />
    </svg>
  );
}
