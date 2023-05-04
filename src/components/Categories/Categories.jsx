import { Link } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  return (
    <div>
      <div className="section-title">
        <div className="line"></div>
        <h2>Categories</h2>
        <div className="line"></div>
      </div>
      <div className="categories">
        <div className="col">
          <div className="row">
            <img
              src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <button>
              <Link className="link" to="/">
                Pasta
              </Link>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
              alt=""
            />
            <button>
              <Link to="/" className="link">
                Pizza
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <button>
              <Link to="/" className="link">
                Kabab
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img
                  src="https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                  alt=""
                />
                <button>
                  <Link to="/" className="link">
                    Noodles
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img
                  src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
                <button>
                  <Link to="/" className="link">
                    Vegetables
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <button>
              <Link to="/" className="link">
                Chicken
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
