import React from 'react';
import './loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <li className="ball"></li>
      <li className="ball"></li>
      <li className="ball"></li>
    </div>
  );
}

export default Loader;
