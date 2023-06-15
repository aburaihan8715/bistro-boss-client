import foodImg1 from "../../assets/images/home/slide1.jpg";

import Button from "../Button/Button";
const FoodCard = () => {
  return (
    <div className="space-y-4 bg-orange-50 pb-8 rounded overflow-hidden">
      <div>
        <img className="w-full h-60 object-cover" src={foodImg1} alt="food photo" />
      </div>
      <div className="px-8 space-y-2">
        <h4 className="text-2xl capitalize font-semibold">Caeser Salad</h4>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
      </div>
      <div className="text-center">
        <Button className="text-orange-500 bg-slate-100">add to cart</Button>
      </div>
    </div>
  );
};

export default FoodCard;
