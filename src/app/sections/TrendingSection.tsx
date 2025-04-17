'use client'
import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import SlidingBtns from '../components/SlidingBtns'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TrendingCard from '../components/TrendingCard';
import 'swiper/css'               
import 'swiper/css/navigation'

const TrendingData = [
  {
    id: 1,
    image: '/Mask-group.png',
    location: 'Cairo',
    title: 'Unveil secrets of ancient wonders.',
    gred1: 'rgba(252,142,80,1)',
    gred2: 'rgba(252,142,80,0)',
  },
  {
    id: 2,
    image: '/pexels-mo-ismail.png',
    location: 'Hurghada',
    title: 'Sunshine, beaches, and vibrant reefs.',
    gred1: 'rgba(187,80,80,1)',
    gred2: 'rgba(187,80,80,0)',
  },
  {
    id: 3,
    image: '/pexels-svetozar-milashevich.png',
    location: 'Sharm El Sheikh',
    title: 'Dive into breathtaking underwater vistas',
    gred1: 'rgba(100,151,196,1)',
    gred2: 'rgba(100,151,196,0)',
  },
  {
    id: 4,
    image: '/Mask-group.png',
    location: 'Cairo',
    title: 'Unveil secrets of ancient wonders.',
    gred1: 'rgba(252,142,80,1)',
    gred2: 'rgba(252,142,80,0)',
  },
]

export default function TrendingSection() {
  return (
    <>
   <Flex as={'section'} m={10} className='flex flex-col justify-center md:items-start items-center w-full max-container'>
     <Flex as={'section'}  className='flex justify-center md:items-start items-center '>
        <Heading as={'h1'} textStyle={'4xl'}  fontWeight={'bold'} className='text-white w-full' >Trending Destinations</Heading>
    </Flex>
  <Flex
        as={'section'}
        mt={10}
        className="flex justify-center md:items-start items-center w-full relative"
      >
     <SlidingBtns nav='2' />
        {/* Swiper */}
        <Swiper
         breakpoints={{
            320: {
          slidesPerView: 1.25,
        },
          1024: {
          slidesPerView: 3.5,
        },
          }}
          slidesPerView={3.5}
          spaceBetween={20}
          navigation={{
            nextEl: '.custom-next-2',
            prevEl: '.custom-prev-2',
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {TrendingData.map((item) => (
            <SwiperSlide key={item.id}>
              <TrendingCard trendingData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
</>
  )
}
