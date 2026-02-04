import Footer from "@/components/footer";
import HeaderComponent from "@/components/header";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="neo-grid min-h-screen p-4 md:p-8">
      <HeaderComponent />
      <div className="my-4 min-h-[70vh] flex items-center justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ContentLayout;
