"use client"

import Image from "next/image"
import background from "../../images/background.png"
import menu from "../../images/menu.svg"
import logo from "../../images/logo.svg"
import Link from "next/link"
import Login from "../_components/login"
import Travel from "../_components/travel_package"
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Square,
  useDisclosure,
} from "@chakra-ui/react"
import React from "react"

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement | null>(null)
  return (
    <Box
      position="relative"
      className="2xl:h-[950px] lg:h-[850px] h-[950px] md:h-[700px]"
    >
      <Square
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        backgroundSize="cover"
        zIndex="-1"
        size="100%"
      >
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-br-[40px] rounded-bl-[40px] 2xl:bottom-0 2xl:left[50%] 2xl:translate-x-[15%]"
        />
      </Square>
      <Box position="absolute" top="80px" left="15px" className="items-center">
        <Box className="flex justify-around bottom-10 mr-10 relative lg:bottom-16">
          <Box className="hidden md:flex ml-[30px] md:gap-10  md:items-center lg:gap-[80px] 2xl:ml-[250px] 2xl:gap-[100px]">
            <Image src={logo} alt="Logo" className="w-[60px] lg:w-[80px]" />
            <Button
              variant="default"
              className="font-bold bg-transparent text-white"
            >
              <Link href="/" className="text-xl lg:text-2xl">
                Home
              </Link>
            </Button>
            <Button
              variant="default"
              className="font-bold bg-transparent text-white"
            >
              <Link href="/" className="text-xl lg:text-2xl">
                Destinos
              </Link>
            </Button>
            <Button
              variant="default"
              className="font-bold bg-transparent text-white"
            >
              <Link href="/" className="text-xl lg:text-2xl">
                Depoimentos
              </Link>
            </Button>
          </Box>
          <Box className="absolute -right-36 bottom-2 lg:bottom-4 lg:-right-[50%] hidden md:block">
            <Login />
          </Box>
          <Box className="md:hidden">
            <Button ref={btnRef} colorScheme="whiteAlpha" onClick={onOpen} style={{position: 'absolute', left: '0'}}>
              <Image src={menu} alt="menbu hamburger" />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton className="text-white" size="lg" />
                <DrawerBody className="bg-[#002133]">
                  <Box className="flex flex-col mt-10 gap-8 items-start">
                    <Button
                      variant="destructive"
                      className="font-bold text-zinc-50"
                    >
                      <Link href="/" passHref>
                        Home
                      </Link>
                    </Button>
                    <Button
                      variant="destructive"
                      className="font-bold text-zinc-50"
                    >
                      <Link href="/destinos" passHref>
                        Destinos
                      </Link>
                    </Button>
                    <Button
                      variant="destructive"
                      className="font-bold text-zinc-50"
                    >
                      <Link href="/depoimentos" passHref>
                        Depoimentos
                      </Link>
                    </Button>
                    <Box className="absolute bottom-8">
                      <Button
                        variant="destructive"
                        className="font-bold text-zinc-50"
                      >
                        <Link href="/logout" passHref>
                          Logout{" "}
                        </Link>
                      </Button>
                    </Box>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Box className="absolute top-0 right-0 left-[100%]">
              <Login />
            </Box>
          </Box>
        </Box>
        <Box className="md:absolute md:ml-8 2xl:ml-[24%]">
          <h2 className="text-white text-3xl md:text-[42px] w-[290px] md:w-[445px] lg:w-[746px] lg:text-[62px] mt-5 font-fjalla md:leading-[64px]  lg:leading-[84px] leading-[50px]">
            Oferecemos os melhores pacotes de viagem para suas férias!
          </h2>
          <p className="hidden md:flex text-white mt-6 lg:w-[704px] md:w-[560px] text-[18px]">
            A Agência de Viagens oferece serviços personalizados para quem busca
            destinos incríveis. Com nossos pacotes de viagem, você terá uma
            experiência única e inesquecível. Realize seus sonhos de viajar
            conosco!
          </p>
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        className="md:bottom-[350px] lg:ml-0 2xl:ml-20 lg:bottom-4  2xl:bottom-[200px] 2xl:ml-22"
      >
        <Travel />
      </Box>
    </Box>
  );
}
