import Layout from "components/Layout";
import History from "helpers/History";
import { getDetailUser } from "hooks/ListUser";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    getDetailUser(id)
      .then((response) => {
        const { data } = response.data;
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        History.push("/users");
        setTimeout(() => {
          alert("User tidak tersedia");
        }, 500);
      });
  }, [id]);

  return (
    <Layout>
      <div className="container-detail-user">
        <Link to="/users" className="btn-back">
          <i className="fas fa-hand-point-left" />
        </Link>
        <div className="section-detail">
          {loading ? (
            <p>loading...</p>
          ) : (
            <>
              <img src={user?.avatar} alt="Avatar User" />
              <p className="title">Info User</p>
              <div className="info-user">
                <p>First Name : {user?.first_name}</p>
                <p>Last Name : {user?.last_name}</p>
                <p>Email : {user?.email}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
