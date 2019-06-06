import React from 'react';

function GoogleButton({ isLoading, ...rest }) {
  return (
    <button className="google-btn" disabled={isLoading} {...rest}>
      {isLoading ? 'Loggin...' : 'Login with Google'}
    </button>
  );
}

export default GoogleButton;
