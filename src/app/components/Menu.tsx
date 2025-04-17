"use client"

import { Button, Drawer, Flex, Heading, Portal, Box, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AlignJustify, Globe, Heart, ShoppingCart, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Menu = ({isLogged, toggleLogin}: {isLogged: boolean, toggleLogin: () => void}) => {
    const [open, setOpen] = useState(false)

    return (

        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Drawer.Trigger asChild>
                <Button variant="outline" className="text-primary" size="md">
                    <AlignJustify />
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>Drawer Title</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Flex as={'div'} direction={'column'} padding={3} className='absolute inset-0 z-50 h-full w-full bg-black'>
                                <Flex className='flex h-full flex-col justify-between'>
                                    <Flex gap={7} direction={'column'}>
                                        <Heading textStyle={'2xl'} className='text-xxxlarge'>
                                            <span className='text-primary'>Egy</span>Book
                                        </Heading>
                                        <Drawer.CloseTrigger asChild>
                                           <span className="cursor-pointer">
                                            <X/>
                                           </span> 
                                        </Drawer.CloseTrigger>
                                        <Flex direction={'column'} gap={3} padding={3} fontSize={'xl'}>
                                            {isLogged && (
                                                <>
                                                    <Text>
                                                        <Link href='/profile' className='flex items-center gap-1'>
                                                            <Heart /> My Profile
                                                        </Link>
                                                    </Text>
                                                    <Text>
                                                        <Link href='/profile' className='flex items-center gap-1'>
                                                            <ShoppingCart /> My Cart
                                                        </Link>
                                                    </Text>
                                                </>
                                            )}
                                            <Text>
                                                <Link href='/' className='flex items-center gap-1'>
                                                    <Globe /> EN
                                                </Link>
                                            </Text>
                                            <Text>
                                                <Link href='/' onClick={toggleLogin}>
                                                    Login
                                                </Link>
                                            </Text>
                                            <Text>
                                                <Link href='/'>Sign up</Link>
                                            </Text>
                                            {isLogged && (
                                                <>
                                                    <Text>
                                                        <Link href='/profile' className='text-primary'>
                                                            My Profile
                                                        </Link>
                                                    </Text>
                                                    <Text>
                                                        <Link href='/'>Saved deals</Link>
                                                    </Text>
                                                    <Text>
                                                        <Link href='/'>Invite friends</Link>
                                                    </Text>
                                                    <Text>
                                                        <Link href='/'>Settings</Link>
                                                    </Text>
                                                    <Text color={'red'}>
                                                        <Link href='/' onClick={toggleLogin} >
                                                            Logout
                                                        </Link>
                                                    </Text>
                                                </>
                                            )}
                                        </Flex>
                                    </Flex>
                                    <Flex className='flex justify-center'>
                                        <Image src='/LOGO 2.png' width={150} height={32} alt='logo' />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Flex className="flex items-center justify-center w-full ">
                                <Image src="/LOGO 2.png" alt="logo" width={120} height={120} />
                            </Flex>
                        </Drawer.Footer>
                        
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

export default Menu