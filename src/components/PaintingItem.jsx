import React from 'react';

const PaintingItem = ({image, name, artist, desc}) => {
  return (
    <figure className="painting">
      <img className="image-thumb" src={image} alt="painting-item" />
      <h4>{name}</h4>
      <p>{artist}</p>
      <i>{desc}</i>
    </figure>
  )
};

export default PaintingItem;