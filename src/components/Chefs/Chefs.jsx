import { useLoaderData } from "react-router-dom";
import ChefsCard from "../ChefsCard/ChefsCard";
import "./Chefs.css";
const Chefs = () => {
  const data = useLoaderData();
  return (
    <div className="center-container">
      <section className="chefs-container">
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
      </section>
    </div>
  );
};

export default Chefs;
