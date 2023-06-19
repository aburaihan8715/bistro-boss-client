import Button from "../Button/Button";

const FoodCard = ({ data }) => {
  const { image, name, recipe, price } = data;
  return (
    <div className="space-y-4 bg-orange-50 pb-8 rounded overflow-hidden relative">
      <div>
        <img className="w-full h-60 object-cover" src={image} alt="food photo" />
      </div>
      <div className="px-8 space-y-2">
        <h4 className="text-2xl capitalize font-semibold">{name}</h4>
        <p>{recipe}</p>
      </div>
      <div className="text-center">
        <Button className="text-orange-500 bg-slate-100">add to cart</Button>
      </div>
      <div className="badge badge-secondary absolute top-0 right-5">$ {price}</div>
    </div>
  );
};

export default FoodCard;
