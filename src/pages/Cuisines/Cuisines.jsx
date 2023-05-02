import { useLoaderData } from "react-router-dom";
import CuisinesCard from "../../components/cuisinesCard/cuisinesCard";
import "./Cuisines.css";

const Cuisines = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="cuisine-grid">
      {data.map((item) => (
        <CuisinesCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cuisines;
