
import Brand from "./Brand";
import NabBar from "./NabBar";

async function getData(){
    let res =  await fetch("https://agency.teamrabbil.com/api/HeroList")
    if(!res.ok){
        throw new Error('calling Hero Error')
    }
    return res.json()
  }

const Hero = async () => {
    const data = await getData()
    return (
        <>
        
        <div className="bg-[var(--bg-hero)] px-16 pb-12 ">
           <NabBar />
            
                
            <div  className='flex justify-between items-center'>
            <div className="hero_content">
                <h1 className="w-[500px] text-[var(--black)] font-bold text-[50px] leading-snug">{data.title}</h1>
                <p className="w-[400px] text-[var(--black)] font-semibold my-3">{data.description}</p>
                <button className="btn mt-8">GET START</button>
            </div>
            <div className="grid grid-cols-6 gap-3 ">
                <div className="col-span-4">
                    <img className="w-full" src={data.image1} alt="" />
                </div>

                <div className="col-span-2 " >
                    <img className="w-full" src={data.image2} alt="" />
                </div>

                <div className="col-span-2">
                    <img className="w-full" src={data.image3} alt="" />
                </div>

                <div className="col-span-4">
                <img className="w-full" src={data.image4} alt="" /> 
                </div>
            </div>
            </div>
                    
            <Brand />
            
        </div>
    </>   
    );
};

export default Hero;