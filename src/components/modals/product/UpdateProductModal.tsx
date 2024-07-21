import { ErrorMsg } from "@/components/error/Error";
import { updateProduct } from "@/services/product";
import { ProductProps } from "@/utils/types";
import { Box, Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProductModal = ({ product }: { product: ProductProps }) => {
  //   useEffect(() => {
  //     getMyAssets().then((res) => {});
  //   }, []);
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
  } = useForm<ProductProps>();

  const onSubmit: SubmitHandler<ProductProps> = (data) =>
    updateProduct(product.id, data)
      .then((res) => {
        if (res.status !== undefined) {
          // toast.success("Crypto Updated !");
          handleClose();
          return;
        } else {
          toast.error(res.response.data.message);
          handleClose();
        }
      })
      .catch((e) => toast.error(e));

  return (
    <div>
      <Tooltip title="Edit this offer">
        <button
          onClick={handleOpen}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </Tooltip>
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
              <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black">
                Udpate product
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
                  defaultValue={product.name}
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
                  defaultValue={product.description}
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
                  defaultValue={product.stock}
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
                  defaultValue={product.price}
                  className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  {...register("price", {
                    valueAsNumber: true,
                  })}
                />
                {errors.price && <ErrorMsg error={"price"} />}
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
                  value="Update"
                />
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateProductModal;
