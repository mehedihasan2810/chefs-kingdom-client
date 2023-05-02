import { useLoaderData } from "react-router-dom";
import ChefsCard from "../ChefsCard/ChefsCard";
import "./Chefs.css";
const Chefs = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="center-container">
      <div className="chefs-container">
        <div className="section-title">
          <div className="line"></div>
          <h2>Master Chefs</h2>
          <div className="line"></div>
        </div>
        <div className="chefs-grid">
          {data.map((item) => (
            <ChefsCard key={item.id} {...item} />
          ))}

          {/* <ChefsCard />
          <ChefsCard />
          <ChefsCard />
          <ChefsCard />
          <ChefsCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
