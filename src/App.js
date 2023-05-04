import React, { useEffect } from 'react';
import myImage from './RESUME_YASH_KHENI_DOUBLE.pdf';

function App() {
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `${myImage}`);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '685px');
    document.body.appendChild(iframe);
    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return null;
}

export default App;