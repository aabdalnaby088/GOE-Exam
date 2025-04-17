'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import LocationDropDown from './locationDropDown'
import { Flex, Input } from '@chakra-ui/react'

export const locations = [
    { name: 'Cairo', description: 'City in Egypt', slug: 'Cairo,Egypt' },
    { name: 'Hurghada', description: 'City in Egypt', slug: 'Hurghada,Egypt' },
    { name: 'Sharm El-Sheikh', description: 'City in Egypt', slug: 'Sharm El-Sheikh,Egypt' },
    { name: 'Luxor & Aswan', description: 'City in Egypt', slug: 'Luxor & Aswan,Egypt' },
]

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const [showDropdown, setShowDropdown] = useState(true)

    const filteredLocations = locations.filter((location) =>
        location.name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <Flex as={'div'} position={'relative'}  className='w-80' >
            <Input
                variant={'outline'}
                borderColor={'#444'}
                borderRadius={'full'}
                backgroundColor={'#444'}
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                    setShowDropdown(e.target.value.length > 0)
                }}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                onFocus={() => query && setShowDropdown(true)}
                placeholder="Search"
                className="w-full rounded-full bg-[#444] !pl-10 text-black placeholder:text-primary focus:outline-none"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                <Search size={20} />
            </span>

            {showDropdown && (
                <Flex className="absolute top-[110%] left-0 w-80 z-10">
                    <LocationDropDown items={filteredLocations} onSelect={(value) => {
                        setQuery(value)
                        setShowDropdown(false)
                    }} query={query}/>
                </Flex>
            )}
        </Flex>
    )
}
