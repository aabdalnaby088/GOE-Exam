import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

    export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <Flex  as={'div'} direction={'column'} className="overflow-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Flex>
    );
    }
