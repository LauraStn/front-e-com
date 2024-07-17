import { ProductProps } from "@/utils/types";
import axios from "axios";

export async function getAllProducts() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/all`;

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

export async function getOneProduct(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/one/${id}`;

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

export async function createProduct(product: ProductProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/add`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(url, product, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
