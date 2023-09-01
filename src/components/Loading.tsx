import { useState, useEffect } from 'react';

export const Loading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-screen w-screen bg-orange'>

        {visible && <div>This component will disappear after 10 seconds.</div>}
    </div>
  );
};

