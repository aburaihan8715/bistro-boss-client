import itemImg1 from "../../assets/images/home/slide1.jpg";

const FoodItem = () => {
  return (
    <div className="flex gap-4">
      <div className="">
        <img className="w-24 h-20 object-cover rounded-full rounded-tl-none" src={itemImg1} alt="food photo" />
      </div>
      <div>
        <div>ROAST DUCK BREAST ------------------</div>
        <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
      </div>
      <div>
        <span>$</span>
        <span>14.5</span>
      </div>
    </div>
  );
};

export default FoodItem;
