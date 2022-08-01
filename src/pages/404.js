import History from "helpers/History";
import React from "react";

const Page404 = () => {
  return (
    <div className="container-404">
      <p className="title">404</p>
      <p className="desc">Page Not Found.</p>
      <button className="btn-white" onClick={() => History.push("/users")}>
        Way Back Home
      </button>
    </div>
  );
};

export default Page404;
