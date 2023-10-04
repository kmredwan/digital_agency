async function getData(){
    let res =  await fetch("https://agency.teamrabbil.com/api/AllService")
    if(!res.ok){
        throw new Error('calling Team List Error')
    }
    return res.json()
  }

const Services = async () => {
    const data = await getData()
    return (
        <section className="px-16 mt-[67px] ">
             <div>
                <h3 className="text-[var(--primary-text-color)] font-medium text-[20px]">Our All Services</h3>
                <h1 className="font-semibold text-[30px] text-[var(--black)]">We Provide BestWeb design <br /> services</h1>
                {/* grid  */}
                <div className="grid grid-rows-2 grid-flow-col gap-4 mt-[50px] ">

                {
                    data.map((item,i)=>{
                       return(
                        <div key={i} className="w-[600px]  border  px-[20px] shadow-xl rounded-2xl ">
                        <h1 className="font-semibold text-[26px] mt-[20px] ">{item.title}</h1>
                        <p className="text-[16px] text-[var(--secondary-text-color)] mb-[25px]">{item.des}</p>
                        {/* grid  */}
                        <div className="grid grid-cols-6 gap-2"> 
                            <div className="col-span-4">
                                <img className="object-cover" src={item.image1} alt="" />
                            </div>
                            <div className="col-span-2">
                                <img className="object-cover" src={item.image2} alt="" />
                            </div>
                            <div className="col-span-3">
                                <img className="w-[100%]" src={item.image3}alt="" />
                            </div>
                            <div className="col-span-3">
                                <img src={item.image4} alt="" />
                            </div>
                        </div>
                    </div>
                       )

                    })
                }                
                </div>
             </div>
            
        </section>
    );
};

export default Services;