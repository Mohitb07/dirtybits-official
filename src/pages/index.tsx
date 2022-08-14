import FeaturesSection from '@/components/Features';
import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  return (
    <>
      <Meta
        title="DirtyBits"
        description="It's an online coding platform for skill enhancement and students preparing for technical interviews."
      />
      <div className="relative bg-[#001220]">
        <div className="elementOne absolute h-[10rem] w-[12rem] md:h-[500px] md:w-[500px]"></div>
        <div className="elementTwo absolute bottom-[15rem] right-[5rem] h-[10rem] w-[12rem] md:bottom-[30rem] md:right-[60rem] md:h-[500px] md:w-[500px]"></div>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
      </div>
    </>
  );
};

export default Index;
