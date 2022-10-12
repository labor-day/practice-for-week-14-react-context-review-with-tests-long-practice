import { useCoffee } from "../context/CoffeeContext";
import { useState, useEffect } from "react";

const SetCoffeeBean = (props) => {

  let {coffeeBean, setCoffeeBeanId} = useCoffee();
  let {coffeeBeans} = props;

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBean.id}
        onChange={ e => setCoffeeBeanId(e.target.value)}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;
