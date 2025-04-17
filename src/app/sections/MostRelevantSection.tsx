'use client'
import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 
import MostRelevantCard from '../components/MostRelevantCard';
import SlidingBtns from '../components/SlidingBtns';

const mostRelevantData = [
  {
    id: 1,
    image: '/gepflegte-anlage-full.png',
    location: 'Soma Bay',
    title: 'Kempinski Hotel Soma Bay',
    price: '$214',
    rating: 4.7,
    reviews: 1274,
  },
  {
    id: 2,
    image: '/11.png',
    location: 'cairo',
    title: 'JW Marriott Hotel Cairo',
    price: '$194',
    rating: 4.6,
    reviews: 2274,
  },
  {
    id: 3,
    image: '/gepflegte-anlage-full.png',
    location: 'Soma Bay',
    title: 'Kempinski Hotel Soma Bay',
    price: '$214',
    rating: 4.7,
    reviews: 1274,
  },
  {
    id: 4,
    image: '/11.png',
    location: 'cairo',
    title: 'JW Marriott Hotel Cairo',
    price: '$194',
    rating: 4.6,
    reviews: 2274,
  },

]

export default function MostRelevant() {
  return (
<>
   <Flex as={'section'} m={10} className='flex flex-col justify-center md:items-start items-center w-full max-container'>
     <Flex as={'section'}  className='flex flex-col justify-center md:items-start items-center '>
        <Heading as={'h1'} textStyle={'4xl'}  fontWeight={'bold'} className='text-white w-full' >The Most Relevant</Heading>
    </Flex>
  <Flex
        as={'section'}
        mt={10}
        className="flex flex-col justify-center md:items-start items-center w-full relative"
      >
     <SlidingBtns nav= '1' />
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
            nextEl: '.custom-next-1',
            prevEl: '.custom-prev-1',
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {mostRelevantData.map((item) => (
            <SwiperSlide key={item.id}>
              <MostRelevantCard mostRelevantData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
</>
  )
}
