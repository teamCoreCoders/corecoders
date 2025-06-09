import React from 'react';

export const Background: React.FC = () => (
  <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
    {/* Main gradient background */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500" />
    {/* Blurred blobs for depth */}
    <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-300/30 dark:bg-blue-900/30 rounded-full blur-3xl" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-300/30 dark:bg-purple-900/30 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/3 w-[30vw] h-[30vw] bg-green-200/20 dark:bg-green-900/20 rounded-full blur-2xl" />
    {/* Optional: subtle noise overlay for texture */}
    {/* <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url(/noise.png)' }} /> */}
  </div>
); 