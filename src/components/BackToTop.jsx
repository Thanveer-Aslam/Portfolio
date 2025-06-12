import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <button
  onClick={scrollToTop}
  className="btn btn-light border border-dark shadow position-fixed"
  style={{ bottom: '30px', right: '30px', zIndex: 999 }}
>
  <FaArrowUp />
</button>
    )
  );
};

export default BackToTop;
