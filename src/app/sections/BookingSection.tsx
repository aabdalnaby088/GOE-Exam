import React from "react";
import Image from "next/image";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function BookingSection() {
  return (
<Flex  className="max-container max-md:flex-col rounded-3xl overflow-hidden w-full ">
    <Flex
      direction={'column'}
      padding={10}
      gap={6}
      className="w-1/2 max-md:w-full bg-[#BFDBC9] justify-around"
    >
      <Flex direction={'column'} gap={4}>
        <Heading
          textStyle={'6xl'}
          fontWeight={'bold'}
          className="text-black"
        >
          Ready to Book Your <br /> Next Adventure?
        </Heading>
        <Text fontSize={'lg'} className="text-[#0F1F18]">
          Get exclusive deals and immersive <br />
          previews with our smart booking <br />
          platform.
        </Text>
      </Flex>
      <Text
        padding={2}
        fontSize={'lg'}
        className="bg-[#458465] text-white text-center rounded-full w-[80%]"
      >
        Book now
      </Text>
    </Flex>
    {/* i will remove image in mobile screens from better view this will be happen by removing max-md:h-[466px] */}
    <Flex
      className="relative w-1/2 max-md:w-full " 
    >
      <Image
        src="/p0ckmfkw.png"
        alt="UpperFooter"
        fill
        className="object-cover"
      />
    </Flex>
</Flex>
  );
}
