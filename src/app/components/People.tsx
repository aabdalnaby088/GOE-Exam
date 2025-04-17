import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function People({
    setAdults,
    setChildren,
    setRooms,
    children,
    adults,
    rooms,
}: {
    setAdults: (adults: number) => void;
    setChildren: (children: number) => void;
    setRooms: (rooms: number) => void;
    children: number;
    adults: number;
    rooms: number;
}) {
    const totalTravelers = adults + children;
    const maxTravelers = 16;

    // Handler for decrementing values (prevents negative values and 0 travellers)
    const handleDecrement = (
        setter: (value: number) => void,
        currentValue: number
    ) => {
        if (currentValue > 0) {
            if(totalTravelers > 1){
            setter(currentValue - 1);
            }
        }
    };

    // Handler for incrementing adults or children (respects max travelers)
    const handleTravelerIncrement = (
        setter: (value: number) => void,
        currentValue: number
    ) => {
        if (totalTravelers < maxTravelers) {
            setter(currentValue + 1);
        }
    };

    const handleRoomIncrement = (
        setter: (value: number) => void,
        currentValue: number
    ) => {
        if (totalTravelers < maxTravelers) {
            setter(currentValue + 1);
        }
    };

    const handleRoomDecrement = (
        setter: (value: number) => void,
        currentValue: number
    ) => {
        if (currentValue > 1) {
            setter(currentValue - 1);
        }
    };

    return (
        <Flex direction={'column'} gap={3} padding={5} className=" bg-[#444] rounded-[30px]  w-full">
            {/* Adults */}
            <Flex className="justify-between items-center">
                <Flex className='flex flex-col gap-1 text-start'>
                    <Text textStyle={'md'}>Adults</Text>
                    <Text color={'#B7B7B7'} textStyle={'xs'}>Age 18 or above</Text>
                </Flex>
                <Flex className="flex items-center gap-3">
                    <button
                        onClick={() => handleDecrement(setAdults, adults)}
                        className="w-7 h-7 flex justify-center items-center bg-gray-600 border-gray rounded-full text-primary cursor-pointer hover:!text-gray-500"
                        disabled={adults === 0}
                    >
                        –
                    </button>
                    <span>{adults}</span>
                    <button
                        onClick={() => handleTravelerIncrement(setAdults, adults)}
                        className="w-7 h-7 flex justify-center items-center border-gray bg-gray-600 rounded-full text-primary cursor-pointer hover:!text-gray-500"
                        disabled={totalTravelers >= maxTravelers}
                    >
                        +
                    </button>
                </Flex>
            </Flex>

            {/* Children */}
            <Flex className="flex justify-between items-center mb-4">
                <Flex className='flex flex-col gap-1 text-start'>
                    <Text textStyle={'md'} >Children</Text>
                    <Text textStyle={'xs'} color={'#B7B7B7'}>Under 18</Text>
                </Flex>
                <Flex className="flex items-center gap-3">
                    <button
                        onClick={() => handleDecrement(setChildren, children)}
                        className="w-7 h-7 flex justify-center items-center bg-gray-600 border-gray rounded-full text-primary cursor-pointer hover:!text-gray-500"
                        disabled={children === 0}
                    >
                        –
                    </button>
                    <span>{children}</span>
                    <button
                        onClick={() => handleTravelerIncrement(setChildren, children)}
                        className="w-7 h-7 flex justify-center items-center bg-gray-600 border-gray rounded-full text-primary cursor-pointer hover:!text-gray-500"
                        disabled={totalTravelers >= maxTravelers}
                    >
                        +
                    </button>
                </Flex>
            </Flex>

            {/* Rooms */}
            <Flex className="flex justify-between items-center mb-4">
                <Text className="text-sm font-semibold">Rooms</Text>
                <Flex className="flex items-center gap-3">
                    <button
                        onClick={() => handleRoomDecrement(setRooms, rooms)}
                        className="w-7 h-7 flex justify-center items-center bg-gray-600 border-gray rounded-full text-primary cursor-pointer hover:!text-gray-500"
                        disabled={rooms === 0}

                    >
                        –
                    </button>
                    <span>{rooms}</span>
                    <button
                        className="w-7 h-7 flex justify-center items-center bg-gray-600 border-gray rounded-full text-primary cursor-pointer hover:!text-gray-500"
                        onClick={() => handleRoomIncrement(setRooms, rooms)}
                    >
                        +
                    </button>
                </Flex>
            </Flex>

            {/* Total Travelers Note */}
            <Text textStyle={'xs'} color={'#B7B7B7'}>
                You can search for up to 16 travelers
            </Text>
        </Flex>
    );
}