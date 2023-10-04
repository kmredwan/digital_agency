
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/Ai';
import { BiLogoFacebook } from 'react-icons/Bi';
async function getData(){
    let res =  await fetch("https://agency.teamrabbil.com/api/TeamList")
    if(!res.ok){
        throw new Error('calling Team Team Error')
    }
    return res.json()
  }


const Team = async () => {
    const data = await getData()
    return (
        <section className="px-16 mt-[50px]">
            <div>
                <div className="w-[500px]">
                    <h6 className="font-medium text-[20px] text-[var(--primary-text-color)] mt-3">Our Team Member</h6>
                    <h2 className="font-semibold text-[30px] text-[var(--black)] mt-3" >Check our awesome team <br /> members</h2>
                </div>
                {/* grid */}
                <div className="grid grid-rows-1 grid-flow-col gap-2 my-[50px]">
                    
                    {
                        data.map((item,i)=>{
                            return(
                                <div key={i} className="w-[400px] h-[500px]   flex justify-center relative ">
                                <div className=''>
                                <img className="h-[450px] object-cover" src={item.image} alt="" />
                                
                                <h1 className="font-semibold text-[30px] text-center shadow-xl py-3">{item.name}</h1>
                                </div>
                                {/* icon  */}
                                <div className='w-[120px] shadow-2xl rounded-3xl  h-[50px] pt-0 px-3 absolute bottom-[60px] left-[118px] bg-[var(--white)] flex items-center justify-center'>
                                    <ul className='flex gap-3  '>
                                        <li><BiLogoFacebook /></li>
                                        <li><AiFillInstagram /></li>
                                        <li><AiOutlineTwitter /></li>
                                    </ul>
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

export default Team;