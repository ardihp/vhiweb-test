import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import { getUsers } from "hooks/ListUser";
import ReactPaginate from "react-paginate";
import UserCard from "components/UserCard";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handlePageChange = (value) => {
    getUsers(value.selected > 0 && users?.page + 1).then((response) => {
      setUsers(response.data);
    });
    window.scroll(0, 0);
  };

  return (
    <Layout>
      <div className="container-user">
        <div className="list-user">
          {users?.data?.map((item, index) => (
            <UserCard key={index} data={item} />
          )) || <p>Tidak ada data.</p>}
        </div>
        <ReactPaginate
          pageCount={users?.total_pages || 0}
          onPageChange={handlePageChange}
          previousLabel="<"
          nextLabel=">"
          className="paginator"
        />
      </div>
    </Layout>
  );
};

export default User;
