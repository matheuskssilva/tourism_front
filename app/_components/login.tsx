"use client";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Checkbox,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import React from "react";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        bg="#3F51B5"
        color="white"
        fontWeight="bold"
        height="44px"
        fontSize={["xl", "2xl"]}
        className="md:w-[100px] lg:w-[170px]"
      >
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="#002133" py={6}>
          <ModalHeader>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image src={logo} alt="Logo" width={150} height={150} />
            </Box>
          </ModalHeader>
          <ModalCloseButton color="white" />

          <ModalBody>
            <Box textAlign="center">
              <Text fontSize={["2xl", "3xl"]} fontWeight="semibold" color="white">
                Bem-vindo(a)!
              </Text>
              <Text fontSize="md" color="white" mt={3} mb={6}>
                Por favor, selecione um provedor para fazer login na sua conta.
              </Text>
            </Box>

            <Box display="flex" justifyContent="center" gap={[4, 16]} mt={8}>
              <Button colorScheme="gray">Apple</Button>
              <Button colorScheme="gray">Google</Button>
              <Button colorScheme="gray">Github</Button>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center" gap={4} mt={10}>
              <Box width={["100px", "190px"]} height="1px" bg="white" />
              <Text color="white" fontWeight="bold">
                OU
              </Text>
              <Box width={["100px", "190px"]} height="1px" bg="white" />
            </Box>

            <Box mt={10} mx="auto" width={["260px", "430px"]}>
              <Text color="white" mb={2}>
                Email
              </Text>
              <Input type="email" placeholder="Digite seu e-mail..." mb={4} />
              <Text color="white" mb={2}>
                Crie uma Senha
              </Text>
              <Input type="password" placeholder="******" />
            </Box>

            <Box mt={5}>
              <Box display="flex" alignItems="center" gap={2}>
                <Checkbox colorScheme="orange" />
                <Text color="white" fontSize="sm">
                  Aceito os termos e condições
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap={2} mt={2}>
                <Checkbox colorScheme="orange" />
                <Text color="white" fontSize="sm">
                  Manter conectado
                </Text>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <Button
              colorScheme="orange"
              width={["260px", "430px"]}
              onClick={onClose}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
