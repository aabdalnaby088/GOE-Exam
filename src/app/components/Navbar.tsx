'use client'

import React, { useEffect, useState } from 'react'
import { Search, Globe, Heart, ShoppingCart, UserRound } from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'
import Button from './Button'
import Menu from './Menu'
import useOutsideClick from '@/hooks/useOutsideClick'
import SearchBar from './SearchBar'
import { Box, ButtonGroup, Flex, Group, Heading, HStack, List, Text, Wrap } from '@chakra-ui/react'

const NAV_LINKS = [
    { label: 'GOE', href: '/', highlight: true },
    { label: 'EgyBook', href: '/', prefix: 'Egy' },
    { label: 'EgyExplore', href: '/', prefix: 'Egy' },
    { label: 'EgyTales', href: '/', prefix: 'Egy' },
    { label: 'EgyTreasure', href: '/', prefix: 'Egy' },
]

const PROFILE_MENU = [
    { label: 'My Profile', href: '/profile', highlight: true },
    { label: 'Saved bundles', href: '/' },
    { label: 'Invite friends', href: '/' },
    { label: 'Setting', href: '/' },
]

export default function Navbar() {
    const [isMounted, setIsMounted] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev)
    const toggleLogin = () => {
        setIsProfileMenuOpen(false)
        setIsLoggedIn((prev) => !prev)
    }
    const toggleSearchBar = () => setIsSearchBarOpen(prev => !prev)

    const { ref } = useOutsideClick(toggleSearchBar);

    if (!isMounted) {
        return (
            <nav className="relative px-3 text-white">
                Loading...
            </nav>
        )
    }

    return (
        <Wrap className="relative text-white">
            {/* Mobile Navbar */}
            <Flex as={'div'} justify={'space-between'} align={'center'} width={'100%'}  display={{ base: 'flex', md: 'none' }} >
                <Heading as={'h1'} size={'3xl'} display={'flex'}>
                    <Text className="text-primary">Egy</Text>Book
                </Heading >
                <Menu isLogged={isLoggedIn} toggleLogin={toggleLogin}  />
            </Flex>

            {/* Desktop Navbar */}
            <Flex className="max-container " width={'100%'} justify={'space-between'} display={{ base: 'none', md: 'flex' }} align={'center'} padding={5} gap={9}>
                <Logo />

                {/* Search */}
                <Flex padding={2} backgroundColor={'#444'} className="flex items-center justify-center rounded-full">
                    <button aria-label="Search" className='cursor-pointer' onClick={toggleSearchBar}>
                        <Search className="text-primary" />
                    </button>
                </Flex>

                {/* Navigation Links */}
                <HStack fontSize={'20px'} gap={5} align={'center'}>
                    {NAV_LINKS.map((link) => (
                        <Box key={link.label}>
                            <Link href={link.href} className={link.highlight ? 'text-primary' : ''}>
                                {link.prefix && <span className="text-primary">{link.prefix}</span>}
                                {link.label.replace(link.prefix || '', '')}
                            </Link>
                        </Box>
                    ))}
                </HStack>

                {/* User Actions */}
                <Flex as={'div'} alignItems={'center'} gap={4} >
                    <Flex as={'div'} alignItems={'center'} gap={1} >
                        <Globe />
                        <Text fontSize={'xl'}>EN</Text>
                    </Flex>

                    {!isLoggedIn ? (
                        <ButtonGroup >
                            <Button title="Login" onClick={toggleLogin} />
                            <Button title="Sign up" />
                        </ButtonGroup>
                    ) : (
                        <Flex as={'div'} alignItems={'center'} gap={10} className="flex items-center gap-10">
                            <Flex as={'div'} alignItems={'center'} gap={5} className=" border-primary  ">
                                <Heart />
                                <ShoppingCart />
                                </Flex>

                            <Flex as={'div'} position={'relative'} alignItems={'center'} justifyContent={'center'} border={'1px soild'} borderRadius={'full'} backgroundColor={'white'}  padding={2}>
                                <button onClick={toggleProfileMenu} aria-label="Profile">
                                    <UserRound className="cursor-pointer text-primary" />
                                </button>
                                {isProfileMenuOpen && (
                                    <Flex as={'ul'} direction={'column'} gap={2} padding={5} className="absolute top-full flex flex-col gap-2 rounded-lg bg-white w-[200px] text-black">
                                        {PROFILE_MENU.map((item) => (
                                            <Text key={item.label}>
                                                <Link href={item.href} className={item.highlight ? 'text-primary' : ''}>
                                                    {item.label}
                                                </Link>
                                            </Text>
                                        ))}
                                        <Text color={'red'}>
                                            <button
                                                className="rounded-full bg-black px-4 py-2 text-danger cursor-pointer"
                                                onClick={toggleLogin}
                                            >
                                                Logout
                                            </button>
                                        </Text>
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            {
                isSearchBarOpen &&
                <Flex className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <Flex as={'div'} position={'absolute'} top={'30%'} left={'50%'} transform={'translate(-50%, -50%)'}  ref={ref}>
                        <SearchBar />
                    </Flex>
                </Flex>
            }
        </Wrap>
    )
}