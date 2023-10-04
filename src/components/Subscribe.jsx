
const Subscribe = () => {
    return (
        <div className="py-[90px] ">
            <h1 className="text-[var(--primary-text-color)] text-center">SUBSCRIBE</h1>
            <h1 className="text-center text-[30px] font-semibold mt-[22px]"> Subscribe to get the latest <br /> news about us </h1>
            <p className="text-[var(--secondary-text-color)] text-center block">Please drop your email below to get daily update about what we do</p>
            {/* input */}
            <div className="mt-[40px]  ">
                <div className="flex justify-end relative w-[600px] h-[62px] m-auto">
                <input className="w-[596px] py-3 px-2 border border-black rounded-lg outline-none" type="text"  placeholder="Enter Your E mail address" />
                
                
                <button className=" btn w-[130px] h-[53px] text-center bg-[#F55F1D] text-[var(--white)]  border-[#F55F1D] absolute  top-0 right-0 m-[4px]  hover:bg-[#F55F1D]">Subscribe</button>
                
                </div>
                

            </div>


            
            
        </div>
    );
};

export default Subscribe;