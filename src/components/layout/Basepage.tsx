import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface BasePageProps {
  children: React.ReactNode;
}

const BasePage = ({ children }: BasePageProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col sm:flex-row grow">
        <Navbar />
        <main className="grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default BasePage;
