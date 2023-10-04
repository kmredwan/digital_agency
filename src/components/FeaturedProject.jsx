
const FeaturedProject = () => {
    return (
        <div className="bg-[var(--secondary-bg)] px-16 py-[62px]">
            <h3 className="font-medium text-[20px] text-[var(--primary-text-color)]">Featured Project</h3>
            <div className="font-semibold text-[30px] text-[var(--black)]"  >
            We provide the Perfect Solution <br /> to your business growth
            </div>

            {/* grid */}
            <div className="grid grid-cols-2 gap-[50px] mt-[72px]">
                 {/* grid 1*/}
                    <div >
                        <img src="/image/Mask.png" alt="" />
                        <div className="mt-[15px]">
                        <span className="text-[14px] font-normal text-[var(--secondary-text-color)] ">App Design - June 20, 2022</span>
                        <h3 className="font-bold text-[24px] mt-[10px]">App Redesign</h3>
                        </div>
                    </div>
                {/* grid 2*/}
                <div className="grid grid-cols-2 gap-[30px]">
                <div>
                   <div>
                   <img className="object-cover w-full" src="/image/Mask (1).png" alt="" />
                   </div>
                   <span className="text-[14px] font-medium text-[var(--secondary-text-color)] my-[10px] block">App Design - June 20, 2022</span>
                   <h3 className="text-[18px] font-bold text-[var(--black)]">Redesign channel website landng page</h3>
                </div>

                <div>
                    <div>
                    <img className="object-cover w-full " src="/image/Mask (2).png" alt="" />
                    </div>
                    <span className="text-[14px] font-medium text-[var(--secondary-text-color)] my-[10px] block">App Design - June 20, 2022</span>
                   <h3 className="text-[18px] font-bold text-[var(--black)]">Redesign channel website landng page</h3>
                </div>

                <div>
                    <div>
                    <img className="object-cover w-full" src="/image/Mask (3).png" alt="" />
                    </div>
                    <span className="text-[14px] font-medium text-[var(--secondary-text-color)] my-[10px] block">App Design - June 20, 2022</span>
                   <h3 className="text-[18px] font-bold text-[var(--black)]">Redesign channel website landng page</h3>
                </div>
                <div>
                    <div>
                    <img className="object-cover w-full" src="/image/Mask (4).png" alt="" />
                    </div>
                    <span className="text-[14px] font-medium text-[var(--secondary-text-color)] my-[10px] block">App Design - June 20, 2022</span>
                   <h3 className="text-[18px] font-bold text-[var(--black)]">Redesign channel website landng page</h3>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default FeaturedProject;