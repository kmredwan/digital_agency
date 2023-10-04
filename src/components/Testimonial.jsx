async function getData(){
    let res =  await fetch("https://agency.teamrabbil.com/api/TestimonialList")
    if(!res.ok){
        throw new Error('calling Testimonial Error')
    }
    return res.json()
  }

const Testimonial = async () => {
    const data = await getData()
    return (
        <section className="px-16 pt-[70px]">
            <div>
            <h3 className="text-[var(--primary-text-color)] font-medium text-[20px]">Testimonial List</h3>
                <h1 className="font-semibold text-[30px] text-[var(--black)]">Better Agency/SEO Solution At <br /> Your Fingertips</h1>

                {/* grid  */}
                <div className="grid grid-cols-3 grid-flow-row gap-[50px]">
                {
                    data.map((item,i)=>{
                        return(
                            <div key={i} className="px-[20px] shadow-xl py-[48px]">
                        <div className="flex justify-center mt-[20px] mb-[40px] items-center">
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <p className="text-[var(--secondary-text-color)] px-[23px] text-center">{item.msg}</p>
                            <h1 className="text-center text-[var(--black)] mt-[26px] text-[26px] font-semibold mb-[10px]">{item.name}</h1>
                            <h5 className="text-center text-[16px] ">{item.designation}</h5>
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

export default Testimonial;