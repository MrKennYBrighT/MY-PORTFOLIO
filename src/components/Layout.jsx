import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-[#0a192f] text-white flex flex-col">
      <Navbar />
      <main className="w-full max-w-screen-xl mx-auto px-4 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
