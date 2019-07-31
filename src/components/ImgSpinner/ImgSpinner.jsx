import React from 'react';
import "./imgSpinner.scss";

const ImgSpinner = () => {
  return (
    <div className="img-loader-container">
      <div class="loader">
        <div class="circle"></div>
      </div>
    </div>
  );
};

export default ImgSpinner;