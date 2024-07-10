import axios from "axios";

export async function getAllUsers() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}user/all`;

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

export async function getOneUser(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}user/one`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
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
