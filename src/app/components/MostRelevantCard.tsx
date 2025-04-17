import { Flex, Stack, Text } from "@chakra-ui/react";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

interface MostRelevantCardProps {
        id: number;
        image: string;
        location: string;
        title: string;
        price: string;
        rating: number;
        reviews: number;
}



export default function MostRelevantCard({mostRelevantData}: {mostRelevantData: MostRelevantCardProps}) {
    return (
        <Flex borderRadius={'42px'} direction={'column'} background={'#fff'} gap={5}>
            <Flex borderRadius={'42px'} overflow={'hidden'} position={'relative'}>
                <Image src={mostRelevantData.image} width={450} height={300} alt="logo" />
                    <Text color={'#346D52'} position={'absolute'} top={5} left={8} fontSize={'14px'} background={'#fff'} rounded={'full'} px={3} py={1}>
                        {mostRelevantData.location}
                    </Text>
                <Text color={'#000'} position={'absolute'} top={4} right={5} border={'1px solid #D2AC71'} fontSize={'14px'} background={'#fff'} rounded={'full'} cursor={'pointer'} p={2}>
                        <Heart/>
                    </Text>
            </Flex>
            <Flex direction={'column'}  padding={5} color={'#000'}>
                <Flex  gap={1} alignItems={'center'} justifyContent={'space-between'}>
                    <Text  fontWeight={'semibold'}>{mostRelevantData.title}</Text>
                    <span className="flex gap-1 items-center">
                        <Star size={18} className="text-primary" fill="#D2AC71" />
                        <span>{mostRelevantData.rating}</span> <span className="text-[#121212BF]">({mostRelevantData.reviews})</span>
                    </span>
                </Flex>
                <Text>
                    <span className="text-[#121212">From {mostRelevantData.price} per person</span>
                </Text>
            </Flex>
        </Flex>
    )
}
