import { sellersData } from "~constanta/sellersData";

const SellersCard = () => {
    return (
        <div className='flex justify-center flex-wrap items-center gap-[21px] py-[21px]'>
            {sellersData.map((item) => (
                <div
                    className='bg-white py-[21px] px-[66px] border-[1px] border-solid border-[#e4e4e4] rounded'
                    key={item.id}>
                    <div className='w-[86px] h-[86px]'>
                        <img
                            src={item.img}
                            alt={item.username}
                            className='w-full h-full object-cover rounded-full'
                        />
                    </div>
                    <h1 className='font-semibold text-[13px] leading-5 pt-[22px] pb-[2px]'>
                        {item.username}
                    </h1>
                    <p className='text-xs font-bold leading-5 text-[#aeb6ca]'>
                        {item.sellerId}
                    </p>
                    <p className='text-xs font-bold leading-5 text-[#aeb6ca] mb-[20px]'>
                        {item.email}
                    </p>

                    <button className='border-[1px] border-solid border-[e4e4e4] rounded-xl px-[10px] py-[8px] text-[#aeb6ca] text-base font-semibold leading-6 tracking-tighter'>
                        View profil
                    </button>
                </div>
            ))}
        </div>
    );
};
export default SellersCard;
