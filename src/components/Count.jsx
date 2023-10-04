async function getData(){
    let res =  await fetch("https://agency.teamrabbil.com/api/StatList")
    if(!res.ok){
        throw new Error('calling Count Error')
    }
    return res.json()
  }

const Count = async () => {
    const data = await getData()
    return (
        <section>
            <div className="my-20 px-16 flex justify-between">
                <div className="w-[248px] px-[60px] py-[20px] shadow-lg ">
                    <div className="flex justify-center rounded-2xl bg-[#D7F5DC] w-[90px] h-[90px] items-center">
                        <img src="/image/Group 3.png" alt="" />
                    </div>
                    <h3 className="font-semibold text-[30px] mt-[22px] mb-[4px] text-center">{data.followers}</h3>
                    <h4 className="font-medium text-[16px] text-center">Followers</h4>
                </div>
                <div className="w-[248px] pl-[60px] py-[20px] shadow-lg ">
                    <div className="flex justify-center rounded-2xl bg-[#D7F5DC] w-[90px] h-[90px] items-center">
                        <img src="/image/Like.png" alt="" />
                    </div>
                    <h3 className="font-semibold text-[30px] mt-[22px] mb-[4px] text-center">{data.solved}</h3>
                    <h4 className="font-medium text-[16px] text-center">Solved Problems</h4>
                </div>
                <div className="w-[250px] px-[55px] py-[20px] shadow-lg ">
                    <div className="flex justify-center rounded-2xl bg-[#D7F5DC] w-[90px] h-[90px] items-center">
                        <img src="/image/Happy 1.png" alt="" />
                    </div>
                    <h3 className="font-semibold text-[30px] mt-[22px] mb-[4px] text-center">{data.customers}</h3>
                    <h4 className="font-medium text-[16px] text-center">Happy Customers</h4>
                </div>
                <div className="w-[250px] px-[65px] py-[20px] shadow-lg ">
                    <div className="flex justify-center rounded-2xl bg-[#D7F5DC] w-[90px] h-[90px] items-center">
                        <img src="/image/Scan 3.png" alt="" />
                    </div>
                    <h3 className="font-semibold text-[30px] mt-[22px] mb-[4px] text-center">{data.projects}</h3>
                    <h4 className="font-medium text-[16px] text-center">Projects</h4>
                </div>

            </div>
            
        </section>
    );
};

export default Count;