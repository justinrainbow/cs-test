import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppLogoProps {}

export function AppLogo(props: AppLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
      className="max-w-8 max-h-8"
    >
      <rect x="20" y="120" width="160" height="60" rx="20" fill="#6D4C41" />
      <rect x="10" y="130" width="180" height="40" rx="20" fill="#795548" />

      <path d="M10 50 Q50 90 90 50 T170 50" fill="#64B5F6" />
      <path d="M10 60 Q50 100 90 60 T170 60" fill="#42A5F5" />
      <path d="M10 70 Q50 110 90 70 T170 70" fill="#2196F3" />
    </svg>
  );
}

export default AppLogo;
