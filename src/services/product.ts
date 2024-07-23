import {
  CreateProductProps,
  ProductProps,
  UpdateProductProps,
} from "@/utils/types";
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
export async function uploadImage(formData: FormData) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}image/upload`;

  const axiosConfig = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(url, formData, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
export async function createProduct(product: CreateProductProps) {
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

export async function updateProduct(id: string, product: UpdateProductProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/update/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(url, product, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function deleteProduct(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/delete/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
