import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

interface DiscoverCardProps { 
  image: string;
  title: string;
}

export default function DiscoverCard({discoverCardData}: {discoverCardData: DiscoverCardProps}) {
  return (
    <Flex as={'div'}   style={{
        backgroundImage:
          `url(${discoverCardData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}  className='w-[200px] h-[300px] rounded-xl flex items-end'>

        <Heading  as={'h2'} textStyle={'xl'} fontWeight={'semibold'} paddingX={4}>{discoverCardData.title}</Heading>
        

    </Flex>
  )
}
