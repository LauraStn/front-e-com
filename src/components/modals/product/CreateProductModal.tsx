"use client";
import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdAdd } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { CategoryProps, CreateProductProps, ProductProps } from "@/utils/types";
import { createProduct, uploadImage } from "@/services/product";
import { ErrorMsg } from "../../error/Error";
import { getAllCategory } from "@/services/category";

const CreateProductModal = () => {
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateProductProps>();

  const onSubmit: SubmitHandler<CreateProductProps> = async (data) => {
    if (data.file && data.file[0]) {
      const formData = new FormData();
      formData.append("file", data.file[0]);

      try {
        const uploadResponse = await uploadImage(formData);
        const filename = await uploadResponse.data;

        const productData = {
          name: data.name,
          description: data.description,
          price: Number(data.price),
          stock: Number(data.stock),
          categoryId: data.categoryId,
          image: await filename.toString(),
        };

        const createResponse = await createProduct(productData);
        toast.success("Product created successfully");
        handleClose();
      } catch (error) {
        toast.error("Failed to create product");
      }
    }
  };

  useEffect(() => {
    getAllCategory().then((res) => {
      setCategoryList(res.data);
    });

    getAllCategory();
  }, []);
  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-3 justify-around items-center mr-3"
      >
        Add a product <MdAdd />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-3"
            >
              {" "}
              <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black">
                Add a product
              </h1>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("name", { required: true })}
                />
                {errors.name && <ErrorMsg error={"Name"} />}
              </div>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="description"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  Description:
                </label>
                <input
                  type="text"
                  id="description"
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("description", {
                    required: true,
                  })}
                />{" "}
                {errors.description && <ErrorMsg error={"Value"} />}
              </div>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="stock"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  stock:
                </label>
                <input
                  type="number"
                  id="stock"
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("stock", {
                    valueAsNumber: true,
                    required: true,
                  })}
                />
                {errors.stock && <ErrorMsg error={"stock"} />}
              </div>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="price"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  Price:
                </label>
                <input
                  id="price"
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("price", {
                    valueAsNumber: true,
                  })}
                />
                {errors.price && <ErrorMsg error={"price"} />}
              </div>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="file"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  Picture:
                </label>
                <input
                  type="file"
                  id="file"
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("file", { required: true })}
                />
                {errors.file && <ErrorMsg error={"file"} />}
              </div>
              <div className="flex items-start flex-col justify-start">
                <label
                  htmlFor="categoryId"
                  className="text-sm text-gray-700 dark:text-black mr-2"
                >
                  Category:
                </label>
                <select
                  className="border text-center w-full h-10 rounded-md border-black text-sm text-gray-700 dark:text-black"
                  {...register("categoryId", { required: true })}
                >
                  <option value="" selected>
                    {"Choose a category"}
                  </option>
                  {categoryList &&
                    categoryList.map((item) => (
                      <option key={item.id} value={item.id} id={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
                {/* <input
                  type="select"
                  id="file"
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("file", { required: true })}
                /> */}
                {errors.file && <ErrorMsg error={"file"} />}
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleClose}
                  className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  className="bg-green-700 cursor-pointer text-white rounded-md text-center w-32 p-2 m-4 "
                  value="Create"
                />
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateProductModal;
