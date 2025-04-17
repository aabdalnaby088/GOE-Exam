import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

interface TrendingCardProps {
  image: string;
  location: string;
  title: string;
  gred1: string;
  gred2: string;
}
export default function TrendingCard({trendingData}: {trendingData: TrendingCardProps}) {
  return (
    <Flex>

<Flex as={'div'}
  style={{
    backgroundImage:
      `linear-gradient(135deg, ${trendingData.gred1} 10%, ${trendingData.gred2} 80%), url(${trendingData.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  padding={'5'}
  className="w-[450px] h-[360px] rounded-2xl flex flex-col align-between justify-between"
>

    <Flex gap={5}  direction={'column'} className='w-[70%]'>

       <Heading  as={'h2'} fontSize={'5xl'} fontWeight={'semibold'} lineHeight={'1'} >{trendingData.location}</Heading>

       <Heading as={'h3'} fontSize={'2xl'} fontWeight={'semibold'}  >{trendingData.title}</Heading>

    </Flex>

    <Flex>
    <Text paddingX={8} paddingY={2}  fontWeight={'semibold'} color={'#000'}  className='bg-white rounded-4xl cursor-pointer'>See Hotels</Text>

    </Flex>



</Flex>




    </Flex>
  )
}
