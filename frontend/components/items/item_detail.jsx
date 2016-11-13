import React from 'react';

const ItemDetail = ({item}) => (
  <div>
    <h3>{item.name}</h3>
    <p>Happiness: {item.happiness}</p>
    <p>Price: {item.price}</p>
  </div>
);

export default ItemDetail;
