import Image from "next/image";

async function getData(){
    let res =  await fetch("https://agency.teamrabbil.com/api/WorkList")
    if(!res.ok){
        throw new Error('calling work List Error')
    }
    return res.json()
  }
  
const  WorkList = async () => {
    const data = await getData()
    
    return (

        <div className="bg-[var(--white)] px-16 pt-20 mt-auto">
            <h5 className="text-[var(--primary-text-color)] font-medium text-[20px]">Work List</h5>
            <h1 className="text-[var(--black)] font-semibold text-[30px] w-[500px]">We provide the Perfect Solution to your business growth</h1>
            <div className="flex mt-[40px] gap-[45px] ">
                <div className=" pt-[50px] px-[30px]">
                    <div className="img">
                        <Image src='/image/Activity.png' 
                        width={100}
                        height={50}
                        alt="d"
                        />
                    </div>
                    <div className="w-[330px] mt-2">
                        <h3 className="font-semibold text-[24px] mt-3">{data.title}</h3>
                        <p className="text-[18px]">{data.des}</p>
                        <div className="mt-[43px]">
                            {/* <button className="flex items-center ">Learn more <AiOutlineArrowRight /> </button> */}
                        </div>
                    </div>
                </div>
                <div className=" pt-[50px] px-[30px]">
                    <div className="img">
                        <Image src='/image/Heart.png' 
                        width={100}
                        height={50} 
                        alt="s"
                        />
                    </div>
                    <div className="w-[330px] mt-2">
                        <h3 className="font-semibold text-[24px] mt-3">{data.title}</h3>
                        <p className="text-[18px]">{data.dse}</p>
                        <div className="mt-[43px]">
                            {/* <button className="flex items-center ">Learn more <AiOutlineArrowRight /> </button> */}
                        </div>
                    </div>
                </div>
                <div className=" pt-[50px] px-[30px]">
                    <div className="img">
                        <Image src='/image/Work.png' 
                        width={100}
                        height={50}
                        alt="x"
                        />
                    </div>
                    <div className="w-[330px] mt-2">
                        <h3 className="font-semibold text-[24px] mt-3">{data.title}</h3>
                        <p className="text-[18px]">{data.des}</p>
                        <div className="mt-[43px]">
                            {/* <button className="flex items-center ">Learn more <AiOutlineArrowRight /> </button> */}
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default WorkList;