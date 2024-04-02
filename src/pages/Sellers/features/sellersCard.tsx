import { sellersData } from "~constanta/sellersData";

const SellersCard = () => {
    return (
        <div className='flex justify-center flex-wrap items-center gap-[21px] py-[21px]'>
            {sellersData.map((item) => (
                <div
                    key={item.id}
                    className='bg-gradient-to-b from-[#FFE5A0] from-30% to-60% to-slate-50 '>
                    <div className='flex py-[21px] items-center'>
                        <img
                            src={item.img}
                            alt='img'
                            width={86}
                            height={86}
                            className='rounded-full object-cover'
                        />
                    </div>
                    <div>
                        <h1 className='font-semibold text-[13px] leading-[]'>
                            {item.username}
                        </h1>
                        <p className='text-xs font-bold leading-5'>
                            {item.sellerId}
                        </p>
                        <p className='text-xs font-bold leading-5'>
                            {item.email}
                        </p>

                        <button className='border-[1px] border-solid border-[#e4e4e4] rounded-xl px-[10px] py-[8px] font-base font-'>
                            View Profile
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SellersCard;
