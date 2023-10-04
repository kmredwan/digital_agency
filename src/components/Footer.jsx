import Link from 'next/link';

import "@fortawesome/fontawesome-svg-core/styles.css";
import {
    faFacebook, faInstagram, faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <div className="flex justify-between bg-[var(--black)] text-[var(--white)] pt-[70px] px-16  pb-[50px]">
            <div className="w-[350px]">
                <h1 className=" font-[700] text-[40px] mb-4 ">WEB LOGO</h1>
                <p className='font-medium text-[20px]'>Some footer text about the  Agency. Just a little description to help people understand you better</p>
                {/* social link  */}
                {/* <ul className='flex gap-[20px] mt-[20px]'>
                    <li className='flex justify-center w-[40px] h-[40px] bg-[var(--primary-text-color)] items-center rounded-full text-[25px] ' ><BiLogoFacebook /></li>
                    <li className='flex justify-center w-[40px] h-[40px] bg-[var(--primary-text-color)] items-center rounded-full text-[25px] ' ><AiOutlineTwitter /></li>
                    <li className='flex justify-center w-[40px] h-[40px] bg-[var(--primary-text-color)] items-center rounded-full text-[25px] ' ><AiFillLinkedin /></li>
                    <li className='flex justify-center w-[40px] h-[40px] bg-[var(--primary-text-color)] items-center rounded-full text-[25px] ' ><AiFillInstagram /></li>
                </ul> */}
                <ul className='flex gap-3  '>
                                     <FontAwesomeIcon icon={faFacebook } style={{fontSize:"20px"}} />
                                     <FontAwesomeIcon icon={faTwitter } style={{fontSize:"20px"}} />
                                     <FontAwesomeIcon icon={faInstagram } style={{fontSize:"20px"}} />
                                    </ul>

            </div>
            <div>
                <h2 className='font-semibold text-[20px] '>Quick Links</h2>
                <ul className='text-[18px] pt-4 flex flex-col gap-3'>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/aboutUs">About Us </Link></li>
                    <li><Link href="/contactUs">Contact Us</Link></li>
                </ul>

            </div>
            <div>
                <h3 className='text-[20px] font-medium mb-4'>Address</h3>
                <address className='font-medium text-[20px]'>
                Design Agency Head Office. <br />
                Airport Road <br />
                United Arab Emirate
                </address>
            </div>
            
        </div>
    );
};

export default Footer;