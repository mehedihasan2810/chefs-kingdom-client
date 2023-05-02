import "./SignUp.css";
const SignUp = () => {
  return (
    <section>
      <form className="signup">
        <div className="control">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="control">
          <label htmlFor="url">Photo Url: </label>
          <input type="text" name="url" id="url" placeholder="Photo Url" />
        </div>
        <div className="control">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="control">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button className="btn-primary" type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
