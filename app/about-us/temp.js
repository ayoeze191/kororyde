const { default: Image } = require("next/image")

const Template  = ({position, img, children, title }) => {
    return <div className="max-w-[1291px] mx-auto md:mt-[100px] mt-[50px] px-[20px] lg:px-0">
        <div className="flex items-center flex-col md:flex-row gap-[25px] md:gap-[60px]">
                <div className={`rounded-[10px] w-full md:w-[50%]  h-[500px] ${position % 2 == 0 ? 'order-2':'order-1' } rounded-[10px]`}>
                    <Image alt=""  className=" rounded-[10px] w-full h-full object-cover"  src={img}/>
                    </div>
                <div className={`w-full md:w-[50%] ${position % 2 == 0 ? 'order-1':'order-2'} `}>
                <p className="text-[#010101] text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] font-bold">{title}</p>
                    <p className="text-[#656565] text-[18px] mt-[30px] font-[family-name:var(--font-bricolage-grotesque)]">{children}</p>
                </div>
                </div>
            </div>
}
export default Template


export const TemplateTwo = ({position, img, children, title}) => {
    return (
          <div className="max-w-[1291px] mx-auto mt-[50px] md:bg-[#F6F6F6] md:p-[20px] rounded-[10px]">
                <div className="flex items-center flex-col md:flex-row gap-[25px] md:gap-[60px]">
                                <div className={`rounded-[10px] w-full md:w-[50%]   h-[500px] ${position == 2 ? 'mg:order-1': ''} `}>
                                    <Image alt=""  className=" rounded-[10px] w-full h-full object-cover"  src={img}/>
                                    </div>
                                <div className={`w-full md:w-[50%] `}>
                                    <p className="text-[#010101] text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] font-bold">{title}</p>
                                    <p className="text-[#656565] text-[18px] mt-[30px] font-[family-name:var(--font-bricolage-grotesque)]">
                                    {children}
                                    </p>
                                </div>
                            </div>
            </div>
    )
}


