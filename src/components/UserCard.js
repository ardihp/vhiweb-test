import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ data }) => {
  return (
    <Link to={`/users/${data?.id}`} style={{ textDecoration: "none" }}>
      <div className="card-user">
        <img src={data?.avatar} alt="Avatar User" />
        <div className="info-user">
          <p className="name">
            {data?.first_name} {data?.last_name}
          </p>
          <p className="email">{data?.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
