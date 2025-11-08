export const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api/"
    : "https://socio-clone-4.onrender.com/api/";
