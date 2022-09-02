import { Flex, Text, VStack, Image, Button, Stack } from '@chakra-ui/react'


import type { NextPage } from 'next'
import { Input } from '../components/Form/input';
import { Select } from '../components/Form/Select';

const TriunfoLogoSrc = '/images/logo-triunfo.png';


const Home: NextPage = () => {
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
      >
        <Stack spacing="4">
         <Input name="email" label="E-mail" type="email" />
         <Input name="password" label="Senha" type="password" />

         <Select name="cargo" label="Cargo" options={
          [
            {label: 'Corretor', value: 'Corretor'},
            {label: 'Diretor', value: 'Diretor'},
            {label: 'Gerente', value: 'Gerente'},
          ]
         }/>
        </Stack>


        <Button type="submit" mt="6" bg="blue.900"  _hover={{bg: 'blue.700'}}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
