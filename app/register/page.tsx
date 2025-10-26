'use client'; // 👈 Add this line at the very top

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Register page mounted');
  }, []);

  return (
    <div>
      <h1>Register</h1>
    </div>
  );
}
