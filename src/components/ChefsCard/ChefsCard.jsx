import { Link } from "react-router-dom";
import "./ChefsCard.css";
import StarIcon from "@mui/icons-material/Star";

const ChefsCard = ({ id, name, img, experience, likes, recipes }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img
          className="chefsCard-img"
          width={180}
          height={180}
          src={img}
          alt=""
        />
        <div className="bg-img"></div>
        <div className="star">
          <StarIcon sx={{ fontSize: 50 }} />
        </div>
      </div>

      <div className="card-body">
        <h4>{name}</h4>
        <p>{experience} years of experience</p>
        <p>{recipes} recipes</p>
        <p>{likes} Likes</p>
        <Link to={`/chefs/${id}`}>
          <button className="btn-primary">View Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default ChefsCard;
