import React from 'react';
import PlantItem from './PlantItem';

const ShoppingList = (props) => {
  let plants = props.plants;
  return (
    <div className="d-flex justify-content-between">
      {plants.map((plant, index) => (
        <PlantItem
          key={plant.id}
          name={plant.name}
          price={plant.price}
          image={plant.image}
          borderColor={index === 0 ? 'blue' : 'transparent'} 
        />
      ))}
    </div>
  );
};

export default ShoppingList;
