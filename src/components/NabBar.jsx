import Link from "next/link";
const NabBar = () => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div id="logo" className="font-bold text-[20px]">
                <h2>Design<span className="text-[#F55F1D] ">AGENCY</span></h2>
            </div>
                <nav className="flex gap-x-8 font-bold items-center p-4">
                    <Link href="/">Home</Link>
                    <Link href="/team">Team</Link>
                    <Link href="/service">Service</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/testimonial">Testimonial</Link>
                    <Link href="/"><button className="btn">LogIN</button></Link>
                    <Link href="/"><button className="btn" >Register</button></Link>
                    {/* <Button /> */}

                </nav>
            
            
        </div>
    );
};

export default NabBar;