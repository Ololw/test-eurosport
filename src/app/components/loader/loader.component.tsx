import React from 'react';

const LoaderComponent: React.FC = () => {
  return (
    <div className="flex h-full">
      <img data-testid="loader" src="/loader.gif" width="240" className="m-auto" />
    </div>
  );
};

export default LoaderComponent;
