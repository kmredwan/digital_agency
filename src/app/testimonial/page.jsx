import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Subscribe from '@/components/Subscribe';
import Testimonial from '@/components/Testimonial';
import Camp from '@/components/camp';

const page = () => {
    return (
        <div>
            <Header />
            <Camp titel={"Testimonial"} />
            <Testimonial />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default page;