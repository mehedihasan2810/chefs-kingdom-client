import { useLoaderData, useParams } from "react-router-dom";
import CuisinesCard from "../../components/cuisinesCard/cuisinesCard";
import "./Cuisines.css";
import CuisineHero from "../../components/CuisineHero/CuisineHero";
import { useEffect, useState } from "react";

const Cuisines = () => {
  const [chef, setChef] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://chefs-kingdom-server.vercel.app/chefs",
          {
            signal: abortController.signal,
          }
        );
        const data = await res.json();
        const singleChef = data.find((item) => {
          return item.id === Number(id);
        });
        setChef(singleChef);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="cuisine-loader">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="center-container">
      <section className="cuisine-container">
        <CuisineHero chef={chef} />
        <div className="cuisines">
          <div className="section-title">
            <div className="line"></div>
            <h2>My Cuisines</h2>
            <div className="line"></div>
          </div>

          <div className="cuisine-grid">
            {data.map((item) => (
              <CuisinesCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cuisines;
