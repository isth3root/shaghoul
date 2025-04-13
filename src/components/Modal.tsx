import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

const ModalComponent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        open={isModalVisible}
        onCancel={handleClose}
        footer={null}
        width="100vw"
        style={{
          top: 0,
          paddingBottom: 0,
          maxWidth: "100%",
        }}
        bodyStyle={{
          height: "calc(100vh - 55px)",
          padding: 24,
        }}
        closable={true}
        maskClosable={false}
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="border p-10 rounded-xl border-gray-300 flex flex-col items-center gap-3">
            <h1 className="text-2xl">Login or register</h1>
            <h1>Enter your number or email</h1>
            <Input
              placeholder="09123456789"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button>
                Login
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
