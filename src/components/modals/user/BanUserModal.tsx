import { banUser } from "@/services/user";
import { UserProps } from "@/utils/types";
import { Tooltip, Modal, Box } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBan } from "react-icons/fa";

const BanUserModal = ({ user }: { user: UserProps }) => {
  const userId = user.id;
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

  async function Handleban() {

    banUser(userId)
      .then((res) => {

        toast.error(res.response.data.message[0]);
        handleClose();
      })
      .catch((e) => toast.error(e));
  }

  return (
    <div>
      <Tooltip title="Ban user">
        <button
          onClick={handleOpen}
          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        >
          <FaBan />
        </button>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="flex justify-center">Confirm Ban this user ?</p>
          <div className="flex items-center">
            <button
              onClick={handleClose}
              className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
            >
              Cancel
            </button>
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              onClick={Handleban}
            >
              Ban
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BanUserModal;
