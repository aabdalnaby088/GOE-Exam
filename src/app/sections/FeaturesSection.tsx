import React from "react";
import { MousePointerClick } from "lucide-react";
import { PiggyBank } from 'lucide-react';
import { Binoculars } from 'lucide-react';
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function FeaturesSection() {
  return (
    <Flex direction={'column'} className="max-container">
      <Heading as={'h1'} textStyle={'4xl'}  fontWeight={'bold'} className='text-white w-full' >
        Why choose <span className="text-[#D2AC71]">Egy</span>
        <span className="font-medium">Book</span>?
      </Heading>

      <Flex as={'section'}  marginTop={5} gap={12} className=" justify-around max-md:flex-col max-md:justify-center max-md:items-center">
        {/* *************** */}

        <Flex gap={5} direction={'column'} className="text-[#346D52] w-1/4 max-md:w-full">
          <MousePointerClick size={60} />

          <Flex gap={1.5}  direction={'column'}>
            <Heading as={'h2'} fontSize={'2xl'} fontWeight={'bold'}  className=" text-white">
              {" "}
              <span className="text-[#D2AC71] font-bold">Seamless</span> &
              <span className="text-[#346D52] font-bold"> Smart </span> Booking
            </Heading>
            <Heading fontSize={'md'} className=" text-[#F6EEE5]">
              Quick, user-friendly platform that <br />
              simplifies the reservation 
              <br />
              process
            </Heading>
          </Flex>
        </Flex>
        {/* *************** */}

        <Flex as={'section'} className="text-[#346D52] flex flex-col gap-5  w-1/4 max-md:w-full">
          <Binoculars size={60} /> 

          <Flex className=" flex flex-col gap-1.5 ">
            <Heading as={'h2'} fontSize={'2xl'} fontWeight={'bold'} className="text-white ">
              <span className="text-[#346D52] font-bold "> Immersive </span> VR Previews
            </Heading>
            <Heading fontSize={'md'} className="text-xl font-medium text-[#F6EEE5]">
            Explore hotels and rooms in 360° before you book—giving you total confidence.
            </Heading>
          </Flex>
        </Flex>

        {/* ********* */}

        <Flex className="text-[#346D52] flex flex-col gap-5  w-1/4 max-md:w-full">
          <PiggyBank size={60} />

          <Flex className=" flex flex-col gap-1.5 ">
            <Heading as={'h2'} fontSize={'2xl'} fontWeight={'bold'}  className="text-white ">
              <span className="text-[#346D52] font-bold"> Exclusive </span> Best-Price Deals
            </Heading>
            <Heading fontSize={'md'} className="text-xl font-medium text-[#F6EEE5]">
            Save more with special offers and real-time price comparisons.
            </Heading>
          </Flex>
        </Flex>

        {/* ********* */}
      </Flex>
    </Flex>
  );
}
