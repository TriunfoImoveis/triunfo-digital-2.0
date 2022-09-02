import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
};
export function Input({name, label, ...rest}: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name} color="blue.900">{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor='yellow.500'
        bgColor="gray.400"
        variant="filled"
        _hover={{
          bgColor: 'gray.400',
        }}
        size="lg"
        color="blue.900"
        {...rest}
      />
    </FormControl>
  );
}