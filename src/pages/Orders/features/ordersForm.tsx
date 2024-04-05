import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const OrdersForm: React.FC = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === "horizontal"
            ? { labelCol: { span: 10 }, wrapperCol: { span: 14 } }
            : null;

    const buttonItemLayout =
        formLayout === "horizontal"
            ? { wrapperCol: { span: 140, offset: 4 } }
            : null;

    return (
        <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
            style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}>
            <div className='flex-column'>
                <Form.Item label='Order ID'>
                    <Input placeholder='Text' className='w-[190px] h-[38px]' />
                </Form.Item>
                <Form.Item label='Customer'>
                    <Input placeholder='Text' className='w-[190px] h-[38px]' />
                </Form.Item>
                <Form.Item label='Order Status'>
                    <Select
                        style={{ width: "190px" }}
                        defaultValue={"1"}
                        options={[
                            { value: "1", label: "Status" },
                            { value: "2", label: "Pending" },
                            { value: "3", label: "Canceled" },
                            { value: "4", label: "Recelved" },
                        ]}
                    />
                </Form.Item>
                <Form.Item label='Total'>
                    <Input placeholder='Text' className='w-[190px] h-[38px]' />
                </Form.Item>
                <Form.Item label='Date Added'>
                    <Input placeholder='Text' className='w-[190px] h-[38px]' />
                </Form.Item>
                <Form.Item label='Date Modified'>
                    <Input placeholder='Text' className='w-[190px] h-[38px]' />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button
                        type='primary'
                        className='w-[190px] h-[38px] bg-[#3167EB]  text-xl font-semibold '>
                        Filter
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};

export default OrdersForm;
