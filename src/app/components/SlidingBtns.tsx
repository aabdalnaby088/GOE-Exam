import { Text } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

export default function SlidingBtns({ nav }: { nav: string }) {
  return (
    <>
       {/* Custom Navigation Buttons */}
        <Text padding={2} className={`custom-prev-${nav} absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full shadow hover:scale-110 transition`}>
          <ChevronLeft className="text-primary" size={20} />
        </Text>

        <Text padding={2} className={`custom-next-${nav} absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full shadow hover:scale-110 transition`}>
          <ChevronRight className="text-primary" size={20} />
        </Text>
    </>
  )
}
