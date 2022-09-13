import { Flex, VStack, Image, Button, Stack } from '@chakra-ui/react'

import {SubmitHandler, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import type { NextPage } from 'next'
import { Input } from '../components/Form/Input';
import { Select } from '../components/Form/Select';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios';

const TriunfoLogoSrc = '/images/logo-triunfo.png';

type SignInFormData = {
  email: string;
  password: string;
  office: string;
}

type office = {
  id: string;
  name: string;
}

interface OptionsOffice {
  label: string;
  value: string;
}

const schema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha Obrigatória'),
  office: yup.string().required('Cargo Obrigatório'),
});

const Home: NextPage = () => {
  const [optionsOffice, setOptionsOffice] = useState<OptionsOffice[]>([])
  const {register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(schema)
  });

  const {signIn} = useAuth();
  const router = useRouter();
  const toast = useToast()

  const erros = formState.errors;

  useEffect(() => {
    api.get<office[]>('/office').then(response => {
      const officies = response.data;

      const options = officies.map(office => {
        return { 
          label: office.name,
          value: office.id
        }
      });

      setOptionsOffice(options);
    })
  }, []);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    try {
      await signIn(values);
      router.push('/dashboard');
    } catch (error: AxiosError | any) {
     if (error.request) {
      toast({
        title: 'Erro ao fazer login',
        description: "verifique suas credenciais",
        status: 'error',
        position: 'bottom',
        duration: 9000,
        isClosable: true,
      })
     }
    }
    

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <VStack spacing={6}>
        <Image
          src={TriunfoLogoSrc}
          alt='Triunfo Logo'
          width="192" height="185"
        />
      </VStack>

      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.300"
        p="8"
        borderRadius={8}
        direction="column"
        mt={6}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
         <Input label="E-mail" type="email" error={erros.email} {...register("email")} />
         <Input label="Senha" type="password" error={erros.password} {...register("password")} />

         <Select label="Cargo" options={optionsOffice} error={erros.office} {...register("office")}/>
        </Stack>


        <Button type="submit" mt="6" bg="blue.900"  _hover={{bg: 'blue.700'}} isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
