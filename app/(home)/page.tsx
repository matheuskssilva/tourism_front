"use client"

import Image from "next/image";

import background from "../../images/background.png";
import menu from "../../images/menu.svg";



import logo from "../../images/logo.svg";

import Link from "next/link"; 
import Login from "../_components/login";
import Travel from "../_components/travel_package";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="m-0 p-0 h-screen relative">
      <div className="relative h-[785px] md:h-[745px] 2xl:h-[930px] lg:h-[800px]">
        <Image
          src={background}
          alt="Background"
          style={{
            position: "absolute",
            padding: "0",
            margin: "0 auto",
            top: "0",
            left: "0",
            right: "0",
            backgroundSize: "cover",
            height: "100%",
          }}
          className="rounded-b-3xl"
        />
      </div>
      <div className="absolute top-[80px] left-[15px] items-center lg:ml-[0] 2xl:ml-[80px]">
        <div className="flex justify-around bottom-10 mr-10 relative lg:bottom-16">
          <div className="hidden md:flex ml-[30px] md:gap-10  md:items-center lg:gap-24">
            <Image src={logo} alt="Logo" className="w-[60px] lg:w-[80px]" />
            <Button
              variant="default"
              className="font-bold bg-transparent text-white  text-xl lg:text-2xl"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant="default"
              className="font-bold bg-transparent text-white  text-xl lg:text-2xl"
            >
              <Link href="/">Destinos</Link>
            </Button>
            <Button
              variant="default"
              className="font-bold bg-transparent text-white  text-xl lg:text-2xl"
            >
              <Link href="/">Depoimentos</Link>
            </Button>
          </div>

          <div className="absolute -right-36 bottom-2 lg:bottom-4 lg:-right-[50%] hidden md:block">
            <Login />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="absolute left-0">
                <Image src={menu} alt="" />
              </SheetTrigger>
              <SheetContent className="bg-[#002133]">
                <div className="flex flex-col mt-10 gap-8 items-start ">
                  <Button variant="destructive" className="font-bold text-zinc-50">
                    <Link href="/">Home</Link>
                  </Button>
                  <Button variant="destructive" className="font-bold text-zinc-50">
                    <Link href="/">Destinos</Link>
                  </Button>
                  <Button variant="destructive" className="font-bold text-zinc-50">
                    <Link href="/">Depoimentos</Link>
                  </Button>
                  <div className="absolute bottom-8">
                    <Button variant="destructive" className="font-bold text-zinc-50">
                      <Link href="/">Logout</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <div className="absolute top-0 right-0 left-[100%]">
              <Login />
            </div>
          </div>
        </div>
        <div className="md:absolute md:ml-8">
          <h2
            className="text-white text-3xl md:text-[42px] w-[290px] md:w-[445px] lg:w-[746px] lg:text-[62px] mt-5 font-fjalla md:leading-[64px]  lg:leading-[84px] leading-[50px]"
          >
            Oferecemos os melhores pacotes de viagem para suas férias!
          </h2>
          <p className="hidden md:flex text-white mt-6 lg:w-[704px] md:w-[560px] text-[18px]">
            A Agência de Viagens oferece serviços personalizados para quem busca
            destinos incríveis. Com nossos pacotes de viagem, você terá uma
            experiência única e inesquecível. Realize seus sonhos de viajar
            conosco!
          </p>
        </div>
      </div>
          <div className="absolute -bottom-[100px] left-12 md:bottom-[450px] lg:ml-0 2xl:ml-20 lg:bottom-4  2xl:bottom-[200px] 2xl:ml-22">
          <Travel />
          </div>
    </div>
  );
}
