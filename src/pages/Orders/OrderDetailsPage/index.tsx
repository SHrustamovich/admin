import { Button, Card, Flex } from "antd";
import OrdersDetailsHeader from "./orderDetailsHeader";
import OrdersDetailsCard from "./orderDetailsCard";
import OrdersDetailsMain from "./orderDetailsMain";
import TextArea from "antd/es/input/TextArea";

const OrdersDetails = () => {
    return (
        <div className='w-full p-[6px]'>
            <Flex justify='space-between' align='center' className='w-full'>
                <h1 className='h1 text-2xl font-semibold leading-[22px]'>
                    Order Details
                </h1>
            </Flex>
            <div className='bg-white rounded-xl mt-[22px] p-[16px]'>
                <OrdersDetailsHeader />
                <div className='pt-[15px]'>
                    <OrdersDetailsCard />
                </div>
                <Flex className='gap-[32px] '>
                    <div className='pt-[15px]'>
                        <OrdersDetailsMain />
                    </div>
                    <div className='pt-[15px]'>
                        <div>
                            <Card
                                title='Payment info'
                                bordered={true}
                                style={{
                                    width: 337,
                                    height: "153px",
                                    backgroundColor: "#FCFCFC",
                                }}>
                                <p className='flex items-center'>
                                    <span>
                                        {" "}
                                        <img
                                            className='w-[25px]'
                                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA0lBMVEX////rABv3nhv/XwDqAAD3mAD3mgD2lgD/YgD3nRj/XQD3oBzrABn/WgDrABfrABT+9vf82bP71ar//PjrAAv4qkP+awj6hhPxb3b+7976y5b3mxr2pqv+9+770qP96ND6ztH0k5j1mp/8VQf83uD0NRL969f5jhX5xMf5vXX6w4T97O33tLf4wsT71dj84cbsFiftLTv6x43uQ039cwzyeoDxKxTzhIr6TQv8eA3xanH3trn5uGr4pzr4rk/83rztKjfuPUjvVl/6pIfvTlj5s111j3WvAAAGiElEQVR4nO2d2XbaSBCGWaSWxb5mgBEg20yGxSwOYZzYgO3M5P1faVqAMUIyltDfLYlT301yctEn/Ke6qrrUXZVIEARBEARBEARBEARBEARBEARBEARBEARBhEBpNDHHd4ZhPI3NyagUaK321+60XOl0OpXytNusgv6HUpkYi/lMsZO8b9z0R76Xak9byxVTNZXDONafanY9LDcF/L9FYV7PuQK1YiGXtFEo1vi/zxZP3nVpl5dZjSuhp47QdUuleqsr8HfAeHrkv7t4pIZNGS7M/U3Pw1LN1orr4ZDjUBmmseWz8N8UCLPB7eOEHm8UFeXFOO1fqpX6aT3eYCobRNdajJknQfayPE4+XKo50FQvguxk0VIVib/TM6VrRSl4FWRLTZmbrmtN1xrzLMh2E6msFblYxBXxbCKHxvJqOpbq1jXvJvKuCmMt6b/6FMZZimxV+WV3t83f5yiyQWXR2UHmy7mKWNSUh4O1vvlwI05bUVdfQ1PBRkMpnq8IJ6fkzN1S06xPP+JQRRuGKcUOs6AEUsSioCw2aw3O3jbvsGzopvLgN9i4o7z0Es1VQCPZomvh+trSPLiRbCkq/3rK0Lyg1kMMy5NiDSRJMvkj/z2bBYnC9NCOh2PMvtlwe5XOfEmhRNG1kA5BRpAIbCfHJUmnM1d/okRJaZ0wJLlBuRIed/KWJGBRQvC01zhJcpn0jkwGJ4r6TbYkQCvJ5dN7Mun4imLgJEkeSGJtH5ijTWlSjz99nHtN3l6lbaJ8gWmSkhl9ekBJftgl4aJ8B4oiLU8p5YId+g7561iSdDr/B0wUXZeV0c5x2es/Tkm4KH/DRGFrOZIgo7CLInGMyBNgyLl1MxOwn5VROpjhDjkuzgTvUrLiJVkAU/qPJOGi4HYPE155Q+4cRxg+2D3IgCx699zjwrBrzNkbCi726HWxkiBz+swJSXiOjzMUtSxUk5oEB4t3s0ykJMDUJHlSEctSgIYisMBUAp5zPjETrkk8DAVYNPnUTOJiKDLNJCYe5U5UIekDO0GGHlGVlFdJucneUKKfo/SQKawHSaDJrCqmuvQArBF4MRPr1APThImpGRSk5Wt7Q4n68dhE1k08SYKto4i4GwncOieKBMebJ9olg6T0rYPdPDpeEulRZ6NJtCOPtCqBHaAm+K+Cj7gPGEWvWwfrUJZwTWSUpl02D9ChpNCSjOTUYR2a/ARunjZYk7787GSjCTBDUadgTZClE+9mAi2iMHQRpYFzsZ4zNgukkx2ANZlLrhPsNQHWC9Df03OhhJ1oHwOB7sSfJsjAg5UkpFCM1UTDBuNQTjsbTaJ7kwv66dyXJsgEBatJCAUlAZpgLxiElMZGOpEdkyYOyE6ckD9xchlxB6sJ5SdOKI91gc47TuR/GN1pEuFzMdVPnFCdzQnVY52ElNxD0xP0zQL6vuNCGNcKoh12Eolfsf9ejHaxl3CvAP8Sge6fuFCM+T0lEZf8gI/ePF4Fjf59Nrr36IK890wito6AK36JMDYP8h61mNej0uuPUY86FrLejO7NJPrvMuj9jhvA3mMevGw8HgQimyh5sBOUImIfjsoMx8AygdAHxjIfjsbj2WhC5qEH2kFIpCTQ0COtX4Ho9lvU18KJpGQ2Vv1PJPXJAXaZEt8nR87t4Zj1U8LWUST13aq2BfeuQ769dpcE2Rx000a2O3gePAvtiPkavz5+5eawJVSTktjMTUS/x3a1moB/BrQxob6gTp7E1auh/hX92u0kyKqBLcePb59haAeuQuZQkjh3Lke2dHiXBJi/xryZ+5ulXELTf9wchDx8DkJII5vA8zLywHkZ8PfVnsHOVfmJm6uSCnHsZkTn76zDHYuHmtM06yXaKxWhSNhzmjhmDjHPq7FZa3gZ87wSiLlvtf5uqW42oKlEY+4bZxJwPuDiYK2W36maNkXUenRmGgeZI/mffY5ke3kRcyQt/E9g3SryajqWaq7PmSWpM/h9+sAg59J2f/ufS6tHby6thd/5xY2Ph137ml+sM3UltjV5EHzMub4HzbnmgrBhFMLvCcbIeej1T+ehq/ogtKONH8zruWIJUzhSJlesWf/8eDfyvFS7vNRVlTH9WBmdy6Gp61bELcRG724xnylHvDxej73r8UZ72lrWs+oGxtn8JbselqOTi/igNJr0n4wbjnHXn/hX45BqszstVzqdTqU87TYjGWMIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgrh8/gcvCvNwLkWf8QAAAABJRU5ErkJggg=='
                                            alt='master'
                                        />
                                    </span>
                                    Master Card **** **** 4768
                                </p>
                                <p>Business name: Master Card, inc.</p>
                                <p>Phone: +1 (800) 555-154-52</p>
                            </Card>
                        </div>
                        <div>
                            <>
                                <br />
                                <br />
                                <h1>Notes</h1>
                                <TextArea
                                    rows={4}
                                    placeholder='Type here'
                                    maxLength={6}
                                />
                            </>
                        </div>
                        <div className='pt-[20px]'>
                            <Button className='bg-[#3167EB] text-white left-[245px]'>
                                Save note
                            </Button>
                        </div>
                    </div>
                </Flex>
            </div>
        </div>
    );
};

export default OrdersDetails;
