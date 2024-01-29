// Alert.js

import React from 'react';

const Alert = ({ color, children, dismissible }) => {

  const alertClass = `alert alert-${color} ${dismissible ? "alert-dismissible fade show" :""}`;

  return (
    <div className={alertClass} role="alert">
      {children} 
      {dismissible && (
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
}

export default Alert;