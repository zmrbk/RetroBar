import { Dialog } from "@mui/material";

import Form from "./Form";

const AdminModal = ({ isModalOpen, handleClose }: any) => {
  return (
    <Dialog open={isModalOpen} onClose={handleClose}>
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default AdminModal;
