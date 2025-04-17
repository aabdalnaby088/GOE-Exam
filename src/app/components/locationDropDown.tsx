import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ArrowRight, MapPin } from 'lucide-react';

interface LocationDropDownProps {
  items: { name: string; description: string; slug: string }[];
  onSelect: (value: string) => void;
  query?: string;
  select?: boolean;
}

export default function LocationDropDown({
  items = [],
  onSelect,
  query,
  select = false
}: LocationDropDownProps) {
  return (
    <Flex as={'div'} direction={'column'} gap={3} backgroundColor={'#444'} width={'320px'} padding={5} className='rounded-[30px] overflow-hidden'>
      {!select && <Heading as={'h1'} textStyle={'xl'} fontWeight={'normal'} className='text-primary' >Popular Locations</Heading>}
      {items.length > 0 ? (
        <Flex as={'ul'} className="flex flex-col gap-1 justify-start w-full">
          {items.map((item, index) => (
            <Text
              as={'li'}
              padding={3}
              key={index}
              className="flex items-center gap-3 hover:bg-white/10  hover:scale-105 transition duration-300 rounded-xl cursor-pointer"
              onMouseDown={() => onSelect(item.slug)}
            >
              <Box padding={3} className="text-black bg-[#F6EEE5] rounded-full flex justify-start items-center">
                <MapPin />
              </Box>
              <Flex className="flex flex-col justify-start items-start">
                <Text textStyle={'sm'} fontWeight={'normal'} color={'#F6EEE5'}>{item.name}</Text>
                <Text textStyle={'xs'} fontWeight={'normal'} color={'#F6EEE5'}>{item.description}</Text>
              </Flex>
            </Text>
          ))}
          {!select && <Text textStyle={'sm'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={3} backgroundColor={'#444'} padding={3} className='rounded-xl'> <span>See all results for {query ? query : 'Search'}</span>  <span><ArrowRight /></span> </Text>}
        </Flex>
      ) : (
        !select &&
        <Text textStyle={'sm'} >No results found</Text>

      )}
    </Flex>
  );
}