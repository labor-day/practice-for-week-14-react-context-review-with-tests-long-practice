import { useCoffee } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {

  let {coffeeBean} = useCoffee();

  return (
    <div className="selected-coffee">
      <h2>
        {coffeeBean.name}
      </h2>
    </div>
  );
}

export default SelectedCoffeeBean;
