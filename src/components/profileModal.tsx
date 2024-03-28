import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Modal } from "antd";
import { Link } from "react-router-dom";
import { UserSettingsData } from "~constanta/userSettingsData";

interface ProfileModalProps {
    isOpen: boolean;
    onOk: () => void;
    onCancel: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
    isOpen,
    onOk,
    onCancel,
}) => {
    return (
        <Modal
            visible={isOpen}
            onOk={onOk}
            onCancel={onCancel}
            style={{
                top: "8.7%",
                right: "-40%",
                maxWidth: "300px",
            }}
            closable={false}
            maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            footer={null}>
            <div className='modal-content flex items-center flex-col'>
                <Avatar size={38} icon={<UserOutlined />} />
                {UserSettingsData.map((item) => (
                    <Link to={item.path} key={item.path}>
                        {item.icon}
                        {item.title}
                    </Link>
                ))}
            </div>
        </Modal>
    );
};

export default ProfileModal;
