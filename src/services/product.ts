import axios from "axios";

export async function getAllProducts() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/all`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .get(
      url,
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
