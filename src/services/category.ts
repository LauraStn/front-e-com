import axios from "axios";

export async function getAllCategory() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/all`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function getOneCategory(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/one/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
