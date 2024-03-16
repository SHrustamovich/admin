import { Button, Form, Input, message } from "antd";

import type { ILoginRequest, ILoginResponse } from "./types";
import { formLabel } from "../../utils/form-label";
import { urls } from "../../constanta/urls";
import { useCreate } from "../../api";
import { useAuthContext } from "../../context/AuthProvider";

const LoginPage = () => {
    const { setUserData } = useAuthContext();

    const { mutate, isLoading: loading } = useCreate<
        ILoginRequest,
        ILoginResponse
    >(urls.auth.login);

    const handleSubmit = (values: ILoginRequest) => {
        mutate(values, {
            onSuccess: (response) => {
                const { access_token, refresh_token } = response.data;
                setUserData(access_token, refresh_token);
            },
            onError: (error) => {
                console.log(error, "💥");
                message.error("Malumotlar noto'g'ri kiritildi");
            },
        });
    };

    return (
        <Form className="login__form" layout="vertical" onFinish={handleSubmit}>
            <Form.Item {...formLabel("Foydalanuvchi nomi", "login")}>
                <Input />
            </Form.Item>

            <Form.Item {...formLabel("Parol", "password")}>
                <Input.Password />
            </Form.Item>

            <Button className="login__btn" htmlType="submit" loading={loading}>
                Kirish
            </Button>
        </Form>
    );
};

export default LoginPage;
