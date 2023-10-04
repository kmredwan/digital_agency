import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Camp from "@/components/camp";

const page = () => {
    return (
        <section>
            <Header />
            <Camp titel={"Service"} />
            <Services />
            <Subscribe />
            <Footer />
            
        </section>
    );
};

export default page;