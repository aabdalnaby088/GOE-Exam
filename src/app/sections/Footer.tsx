import { Flex, Text } from '@chakra-ui/react'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
   <Flex
  className="w-full"
  p={10}
  style={{
    background: 'radial-gradient(circle,rgba(48, 36, 19, 1) 0%, rgba(18, 18, 18, 1) 45%)',
  }}
>
  <Flex gap={10} className='max-container max-md:flex-col max-md:items-center max-md:justify-center'>
    {/* left side */}
    <Flex direction={'column'} className='w-1/2 max-md:w-full'  gap={6}>
    <Image src="/LOGO 2.png" alt="logo" width={100} height={100} />
    <Text textStyle="3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </Text>
    <Text px={3} py={1}  className='text-white w-fit bg-primary rounded-full cursor-pointer'>
        Discover More
    </Text>
    <Flex gap={6} className='max-md:flex-wrap max-md:items-center max-md:justify-center'>
        <Text>
            Home
        </Text>
        <Text>
            <span className='text-primary'>Egy</span>Book
        </Text>
        <Text>
            <span className='text-primary'>Egy</span>Explore
        </Text>
        <Text>
            <span className='text-primary'>Egy</span>Tales
        </Text>
        <Text>
            <span className='text-primary'>Egy</span>Treasure
        </Text>

    </Flex>
  </Flex>

  {/* right side */}
  <Flex direction={'column'} gap={2} className='w-1/2 items-end justify-end max-md:w-full max-md:items-center max-md:justify-center'>
  <Flex gap={2} >
    <Text padding={2}  className='bg-primary rounded-xl cursor-pointer'>
        <Facebook/>
    </Text>
    <Text padding={2} className='bg-primary rounded-xl cursor-pointer'>
        <Instagram/>
    </Text>
    <Text padding={2} className='bg-primary rounded-xl cursor-pointer'>
        <Twitter/>
    </Text>
    <Text padding={2} className='bg-primary rounded-xl cursor-pointer'>
        <Youtube/>
    </Text>
    <Text padding={2} className='bg-primary rounded-xl cursor-pointer'>
        <Linkedin/>
    </Text>
  </Flex>
  <Text className='text-white' fontSize={'sm'}>
    Copyright Gates of Egypt © 2024 
        All rights reserved
  </Text>
  </Flex>
  </Flex>
</Flex>

  )
}
