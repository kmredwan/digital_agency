async function getData(){
    let res =  await fetch("https://agency.teamrabbil.com/api/BrandList")
    if(!res.ok){
        throw new Error('calling Team List Error')
    }
    return res.json()
  }

const Brand = async () => {
    const data = await getData()
    return (
        <div className="flex justify-between mt-[70px] pb-[50px] bg-[#F8FFF9] pt-[50px] px-[30px] ">
            {
                data.map((item,i)=>{
                  return(
                    <div key={i} > 
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                </div>
                  )
                })
            }
          
        </div>
    );
};

export default Brand;