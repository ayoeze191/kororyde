import Image from "next/image"

const Service = ({img, title, description, position}) => {
    return (
        <div className="flex items-center gap-[20px] md:gap-[60px] flex-col md:flex-row">
            <div className={`rounded-[10px] w-full md:w-[50%] bg-red-400 h-[500px] ${position % 2 == 0 ? 'md:order-2':'md:order-1' } rounded-[10px]`}><Image alt=""  className=" rounded-[10px] w-full h-full object-cover"  src={img}/></div>
            <div className={`w-full md:w-[50%] ${position % 2 == 0 ? 'md:order-1':'md:order-2'} `}>
                <p className="text-[#010101] text-[18px] md:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] font-bold">{title}</p>
                <p className="text-[#656565] text-[14px] md:text-[18px] mt-[20px] md:mt-[30px] font-[family-name:var(--font-bricolage-grotesque)]">{description}</p>
                <button className="mt-[20px] md:mt-[50px] text-[#FDFDFD] bg-[#2D7CD0] text-[13px] md:text-[18px] font-bold leading-[150%] rounded-[10px] px-[20px] md:px-[30px] py-[10px]  md:py-[16.5px]">
                    Download app to get started
                </button>
            </div>
        </div>
    )
}

export default Service