const FoodItem = ({ data }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className=" ">
        <img className="w-[120px] object-cover rounded-full rounded-tl-none" src={data?.image} alt="food photo" />
      </div>
      <div>
        <p className="text-xl font-semibold">{data?.name} ------------------</p>
        <p>{data?.recipe}</p>
      </div>
      <p className="text-orange-700">
        <span>$</span>
        <span>{data?.price}</span>
      </p>
    </div>
  );
};

export default FoodItem;
