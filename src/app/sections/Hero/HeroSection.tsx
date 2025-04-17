'use client'

import { Flex, Heading, Text } from '@chakra-ui/react';
import { Calendar, MapPin, Navigation, Users } from 'lucide-react';
import { useState } from 'react';
import LocationDropDown from '../../components/locationDropDown';
import People from '../../components/People';
import { locations } from '../../components/SearchBar';
import styles from './hero.module.css';

export default function HeroSection() {
  const [location, setLocation] = useState('Cairo, Egypt');
  const [locationListOpen, setLocationListOpen] = useState(false);
  const [peopleListOpen, setPeopleListOpen] = useState(false)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [rooms, setRooms] = useState(1)

  const handleLocationClick = () => {
    setLocationListOpen(locationListOpen => !locationListOpen);
  }

  const handleLocationSelect = (slug: string) => {
    setLocation(slug);
    setLocationListOpen(false);
  }

  const handlePeopleClick = () => {
    setPeopleListOpen(peopleListOpen => !peopleListOpen);
  }

  return (
    <Flex as={'div'} className={`${styles.heroContainer}`}>
      <Flex as={'div'} className="flex flex-col gap-3 justify-center w-full max-container">
        {/* Heading Section */}
        <Flex  className='flex flex-col gap-5'>
          <Heading as={'h2'} className={`${styles.subHeading} flex items-center gap-1`}>
            <Navigation fill='#FFF' />
            <Text className={styles.locationText}>Egypt</Text>
          </Heading>
          <Heading as={'h1'} display={'flex'} fontWeight={'bold'} flexDirection={'column'} gap={6} color={'white'} fontSize={'40px'}  >
            <span>Hey, Bishoy!</span>
            <Text >Tell us where you want
               to stay</Text>
          </Heading>
          <Heading as={'h2'} fontWeight={'normal'} fontSize={'29px'}>Book 450+ Curated Egyptian Hotels</Heading>
        </Flex>

        {/* Search Bar Section */}
        <Flex className={`${styles.searchBar}  w-full flex flex-col md:flex-row justify-between items-center `}>
          <Flex  className="flex flex-col md:flex-row justify-around w-[75%] text-center ">
            {/* Location Section */}
            <Flex ml={3} className='md:w-[33%] flex items-center justify-center relative'>
            <button className={`${styles.searchButton} flex w-full cursor-pointer`} onClick={handleLocationClick}>
              <MapPin className={styles.icon} />
              <Flex className={styles.buttonText}>{location}</Flex>
            </button>
            <Flex className='absolute w-full top-[90%] md:top-[120%] z-50'>
              {locationListOpen && <LocationDropDown select={true} items={locations} onSelect={handleLocationSelect} />}
            </Flex>
            </Flex>
            {/* Date Section */}
            <Flex ml={3} className='md:w-[33%] flex items-center justify-center relative'>
              
          <button className={`${styles.searchButton} flex w-full cursor-pointer`}>
              <Calendar className={styles.icon} />
              <span className={styles.buttonText}>19 March 2025</span>
            </button>
            <Flex className='absolute w-full top-[90%] md:top-[120%] z-50'>
            </Flex>
            </Flex>
            {/* People Section */}
            <Flex ml={3} className='md:w-[33%] flex items-center justify-center relative'>
              
            <button className={`${styles.searchButton} flex w-full cursor-pointer`} onClick={handlePeopleClick}>
              <Users className={styles.icon} />
              <span className={styles.buttonText}>{adults} Adults, {children} Child, {rooms} Room</span>
            </button>
            <Flex className='absolute top-[90%] md:top-[120%] left-0 z-50'>
                { peopleListOpen && <People setAdults={setAdults} setChildren={setChildren} setRooms={setRooms} children={children} adults={adults} rooms={rooms} />}
            </Flex>
            </Flex>
          </Flex>

          <Flex className="flex items-center justify-center">
            <button className={styles.exploreButton}>
              <span className={styles.buttonText}>Explore Stays</span>
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}