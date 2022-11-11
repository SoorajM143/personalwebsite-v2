import React from 'react';
import './ErrorAnimation.css';

function ErrorAnimation() {
  return (
    <div class="sa">
      <div class="sa-error">
        <div class="sa-error-x">
          <div class="sa-error-left"></div>
          <div class="sa-error-right"></div>
        </div>
        <div class="sa-error-placeholder"></div>
        <div class="sa-error-fix"></div>
      </div>
    </div>
  );
}

export default ErrorAnimation;
