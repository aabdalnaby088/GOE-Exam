'use client'
import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import SlidingBtns from '../components/SlidingBtns'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';import DiscoverCard from '../components/DiscoverCard';
 const discoverCardData = [
  {
    id: 1,
    image: '/Group-171.png',
    title: 'Red Sea',
  },
  {
    id: 2,
    image: '/lunch-from-our-roof.png',
    title: 'Giza',
  },
  {
    id: 3,
    image: '/pool-outdoor.png',
    title: 'Nabg bay',
  },
  {
    id: 4,
    image: '/rooftop-pool-during-sunset.png',
    title: 'Nile',
  },
  {
    id: 5,
    image: '/thales-botelho-de-sousa-MB2eoqiNKiw-unsplash-1.png',
    title: 'soma bay',
  },
  {
    id: 6,
    image: '/Group-171.png',
    title: 'Red Sea',
  },
  {
    id: 7,
    image: '/lunch-from-our-roof.png',
    title: 'Giza',
  },
  {
    id: 8,
    image: '/pool-outdoor.png',
    title: 'Nabg bay',
  },
  {
    id: 9,
    image: '/rooftop-pool-during-sunset.png',
    title: 'Nile',
  },
  {
    id: 10,
    image: '/thales-botelho-de-sousa-MB2eoqiNKiw-unsplash-1.png',
    title: 'soma bay',
  },
]

export default function DiscoverSection() {
  return (
    <>
   <Flex as={'section'} m={10} className='flex flex-col justify-center md:items-start items-center w-full max-container'>
     <Flex as={'section'}  className='flex flex-col justify-center md:items-start items-center '>
        <Heading as={'h1'} textStyle={'4xl'}  fontWeight={'bold'} className='text-white w-full' >Dicover New Places</Heading>
    </Flex>
  <Flex
        as={'section'}
        mt={10}
        className="flex flex-col justify-center md:items-start items-center w-full relative"
      >
     <SlidingBtns nav='3' />
        {/* Swiper */}
        <Swiper
          breakpoints={{
            320: {
          slidesPerView: 1.75,
        },
          1024: {
          slidesPerView: 6.5,
        },
          }}
          slidesPerView={3.5}
          spaceBetween={20}
          navigation={{
            nextEl: '.custom-next-3',
            prevEl: '.custom-prev-3',
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {discoverCardData.map((item) => (
            <SwiperSlide key={item.id}>
              <DiscoverCard discoverCardData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
</>
  )
}
