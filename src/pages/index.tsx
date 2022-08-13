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
      <div className="bg-[#001220]">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
      </div>
    </>
  );
};

export default Index;
