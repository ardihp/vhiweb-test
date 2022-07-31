import axios from "axios";

const handleLogin = (data, onFinish, onFail) => {
  const response = axios
    .post("https://reqres.in/api/login", data)
    .then((response) => {
      const { token } = response.data;
      localStorage.setItem("refresh_token", token);
      localStorage.setItem("isLogin", true);
      alert("Login Berhasil!");
      onFinish();
    })
    .catch((err) => {
      const { data } = err.response;
      alert(data.error);
      onFail();
    });

  return response;
};

const handleLogout = () => {
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("isLogin");
  window.location.reload();
};

export { handleLogin, handleLogout };
