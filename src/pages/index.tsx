import { Flex, VStack, Image, Button, Stack } from '@chakra-ui/react'

import {SubmitHandler, useForm} from 'react-hook-form';
import type { NextPage } from 'next'
import { Input } from '../components/Form/input';
import { Select } from '../components/Form/Select';

const TriunfoLogoSrc = '/images/logo-triunfo.png';

type SignInFormData = {
  email: string;
  password: string;
  cargo: string;
}

const Home: NextPage = () => {
  const {register, handleSubmit } = useForm<SignInFormData>();

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)

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
         <Input label="E-mail" type="email" {...register("email")} />
         <Input label="Senha" type="password" {...register("password")} />

         <Select label="Cargo" options={
          [
            {label: 'Corretor', value: 'Corretor'},
            {label: 'Diretor', value: 'Diretor'},
            {label: 'Gerente', value: 'Gerente'},
          ]
         } {...register("cargo")}/>
        </Stack>


        <Button type="submit" mt="6" bg="blue.900"  _hover={{bg: 'blue.700'}}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
