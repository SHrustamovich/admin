import { Button, Card, Checkbox, Form, Input, message } from "antd";

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
        <div className='max-w-full flex flex-col items-center mt-[50px]'>
            <h1 className='text-xl justify-start'>Log In</h1>
            <Form
                className='login__form'
                layout='vertical'
                onFinish={handleSubmit}>
                <Form.Item {...formLabel("Username", "login")}>
                    <Input className='w-[310px]' placeholder='Username' />
                </Form.Item>

                <Form.Item {...formLabel("Password", "password")}>
                    <Input.Password placeholder='Password' />
                </Form.Item>

                <div className='flex justify-between mb-[22px]'>
                    <div className='flex gap-[8px]'>
                        <Checkbox />
                        <p>Remember me</p>
                    </div>
                    <p>
                        <a href='refresh' className='text-[#3167EB]'>
                            Forgot Password
                        </a>
                    </p>
                </div>

                <Button
                    className='login__btn w-full bg-[#3167EB] text-white'
                    htmlType='submit'
                    loading={loading}>
                    Log In
                </Button>
                <p className='text-center my-[20px]'>or login with</p>
                <div className='flex flex-row justify-between'>
                    <Card className='text-sm '>Facebook</Card>
                    <Card className='text-sm'>Google</Card>
                </div>
                <div className='flex justify-center mt-[30px]'>
                    <p className='text-[#545454]'>Don’t have an account?</p>
                    <p>
                        <a href='refresh' className='text-[#3167EB]'>
                            Sign Up
                        </a>
                    </p>
                </div>
            </Form>
        </div>
    );
};

export default LoginPage;
