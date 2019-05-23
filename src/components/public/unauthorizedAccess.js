import React from 'react';

export default () => {
  return (
    <section>
      <h1>
        Unauthorized Access!!{' '}
        <span role="img" aria-label="ni-no-ni-no-ni-no">
          🚨 🚨 🚨
        </span>
      </h1>
      <p>You tried to access a secured page while Unauthorized!</p>
      <p>This will get reported!</p>
    </section>
  );
};
