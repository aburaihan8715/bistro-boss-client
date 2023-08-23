import { useEffect, useState } from "react";

const useFetchMenuData = () => {
  const [menuData, setMenuData] = useState([]);
  const [menuLoading, setMenuLoading] = useState(false);
  const [menuError, setMenuError] = useState("");

  useEffect(() => {
    setMenuLoading(true);
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuLoading(false);
        setMenuData(data);
      })
      .catch((err) => {
        setMenuLoading(false);
        setMenuError(err.message);
      });
  }, [menuError]);

  return { menuData, menuLoading, menuError };
};

export default useFetchMenuData;
