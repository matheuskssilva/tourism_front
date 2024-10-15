import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import logo from "../../images/logo.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-[#3F51B5] md:w-[100px] md:h-11 md:text-xl lg:w-[170px] lg:h-11 lg:text-2xl text-white font-bold">Login</Button>
      </DialogTrigger>
      <DialogContent className="w-[350px] h-[700px] md:h-[732px] md:w-[700px] mt-10 bg-[#002133] justify-center ">
        <DialogHeader className="flex justify-center items-center space-y-0 h-[250px]">
          <DialogTitle>
            <Image src={logo} alt="Logo" className="md:w-[150px]" />
          </DialogTitle>
          <DialogDescription className="text-center pt-5">
            <h1 className="text-white text-2xl md:text-3xl font-semibold">
              Bem-vindo(a)!
            </h1>
            <p className="text-white w-[250px] leading-6 md:w-full line text-[16px] mt-3">
              Por favor selecione um provedor para fazer login na sua conta
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col justify-center items-center h-[50px]">
          <div className="flex gap-4 md:gap-16 p-0 mt-8">
            <Button variant="default">Apple</Button>
            <Button variant="default">Google</Button>
            <Button variant="default">Github</Button>
          </div>

          <div className="flex items-center gap-4 md:gap-4 mt-10 h-[50px]">
            <hr
              style={{
                height: "1px",
                backgroundColor: "white",
                border: "none",
              }}
              className="w-24 md:w-[190px]"
            />
            <h2 className="text-white font-bold text-base">OU</h2>
            <hr
              style={{
                height: "1px",
                backgroundColor: "white",
                border: "none",
              }}
              className="w-24 md:w-[190px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-16 mt-10 text-start w-[260px] md:w-[430px] md:ml-4 h-[150px] ">
          <div className="flex flex-col gap-4">
            <Label htmlFor="email" className="text-base text-white">
              Email
            </Label>
            <Input type="email" id="email" placeholder="Digite seu e-mail..." />
            <Label htmlFor="password" className="text-base text-white">
              Crie uma Senha
            </Label>
            <Input type="password" id="password" placeholder="******" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5 md:ml-4">
          <div className="flex items-center space-x-2 ">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-white text-xs">
              Aceito os termos e condições
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-white text-xs">
              Manter conectado
            </Label>
          </div>
        </div>
        <Button
          type="submit"
          className="bg-[#FF914D] text-white text-lg w-[260px] md:w-[430px] md:ml-4 mb-10"
        >
          Login
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
