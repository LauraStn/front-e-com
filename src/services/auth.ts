import { LoginProps, RegisterProps } from "@/utils/types";
import axios from "axios";

export async function registerUser(user: RegisterProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .post(url, user, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function login(user: LoginProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .post(url, user, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function validateAccount(token:string) {
  const url =  `${process.env.NEXT_PUBLIC_API_URL}auth/validate/${token}`
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

