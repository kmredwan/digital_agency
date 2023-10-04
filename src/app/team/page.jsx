import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Subscribe from '@/components/Subscribe';
import Team from '@/components/Team';
import Camp from '@/components/camp';

const page = () => {
    return (
        <div>
            <Header />
            <Camp titel={"Team"} />
            <Team />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default page;