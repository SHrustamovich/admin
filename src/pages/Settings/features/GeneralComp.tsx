import { Button, Col, Form, Input, Row } from "antd";
import ImageUpload from "~components/ImageUpload";

const GeneralComp = () => {
    return (
        <div className='w-full'>
            <Form layout='vertical'>
                <Row className='flex gap-[24px]'>
                    <Col>
                        <Row className='flex gap-[16px]'>
                            <Col>
                                <Form.Item label='FirstName'>
                                    <Input placeholder='Text' />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label='FirstName'>
                                    <Input placeholder='Text' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='flex gap-[16px]'>
                            <Col>
                                <Form.Item label='FirstName'>
                                    <Input placeholder='Text' />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label='FirstName'>
                                    <Input placeholder='Text' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Item label='FirstName'>
                                <Input
                                    placeholder='Text'
                                    className='w-[382px]'
                                />
                            </Form.Item>
                        </Row>
                    </Col>

                    <Col>
                        <ImageUpload />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Item label='Birthday'>
                            <Input placeholder='text' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='bg-[blue] text-white'>
                            Save changes
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
export default GeneralComp;
