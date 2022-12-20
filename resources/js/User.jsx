import React from 'react';
import ReactDOM from 'react-dom/client';

const User = () => {
  return (
    <div className="">
      Users listing
    </div>
  );
}

export default User;

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);



