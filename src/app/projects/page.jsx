import AllProjects from '@/components/AllProjects';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Subscribe from '@/components/Subscribe';
import Camp from '@/components/camp';

const page = () => {
    return (
        <div>
            <Header />
            <Camp titel={"All Project"} />
            <AllProjects />
            <Subscribe />
            <Footer />
            
        </div>
    );
};

export default page;