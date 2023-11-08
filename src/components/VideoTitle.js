import React from 'react';

const VideoTitle = (props) => {
  const { title, description } = props;

  return (
    <div className="px-10 py-[20%] text-white font-medium absolute aspect-video}">
      <h1 className="text-2xl">{title}</h1>
      <p className="w-[30%] my-2">{description}</p>
      <button className="bg-gray-500 bg-opacity-20 text-white rounded-lg p-4 px-12 my-2">
        Play{' '}
      </button>
      <button className="bg-gray-500 mx-3 bg-opacity-30 text-white rounded-lg p-4 px-12 my-2">
        More
      </button>
    </div>
  );
};

export default VideoTitle;
