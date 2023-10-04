async function getData(){
    let res =  await fetch("https://agency.teamrabbil.com/api/AllProject")
    if(!res.ok){
        throw new Error('calling Team List Error')
    }
    return res.json()
  }
const AllProjects = async () => {
    const data = await getData()
    return (
        <section className="px-16 mt-[67px]">
            <div>
            <h3 className="text-[var(--primary-text-color)] font-medium text-[20px]">All Project</h3>
                <h1 className="font-semibold text-[30px] text-[var(--black)]">Better Agency/SEO Solution At <br /> Your Fingertips</h1>
                {/* grid  */}
                <div className="grid grid-cols-2  gap-5 mt-[80px]">
                    {
                        data.map((item,i)=>{
                            return(
                                <div key={i} className="w-[500px] shadow-xl rounded-2xl">
                                   <div>
                                        <img src= {item.image} alt="" />
                                    </div>
                                    <h1 className="font-semibold text-26px mt-4 text-center pb-4">{item.title}</h1>
                                    </div>
                            )
                        })
                    }
                
                </div>
            </div>
            
        </section>
    );
};

export default AllProjects;