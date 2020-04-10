import React from 'react';

const Point = ({ pointDesc, point }) => {
  const descObj = pointDesc.find((p) => p.pointTitle === point);
  console.log(descObj)

  return (
    <div>
      <div className='point-title'>{point}</div>
      <div className='point-desc'>{descObj.text}</div>
    </div>
  );
};

export default Point;
