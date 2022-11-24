import React from 'react';

const Loading = () => {
    return (
        <div className='w-full flex justify-center items-center m-6'>
          <progress className="progress w-56 bg-secondary"></progress>
        </div>
    );
};

export default Loading;