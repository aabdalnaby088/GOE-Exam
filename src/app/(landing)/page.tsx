import { Flex } from "@chakra-ui/react";
import HeroSection from "../sections/Hero/HeroSection";
import MostRelevant from "../sections/MostRelevantSection";
import TrendingSection from "../sections/TrendingSection";
import DiscoverSection from "../sections/DiscoverSection";
import FeaturesSection from "../sections/FeaturesSection";
import BookingSection from "../sections/BookingSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Flex direction={'column'} mt={10} className="justify-center items-center">
        <MostRelevant />
        <DiscoverSection />
        <FeaturesSection />
        <TrendingSection />
        <BookingSection />
      </Flex>
    </>
  );
}
