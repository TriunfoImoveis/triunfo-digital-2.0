import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldError;
};
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
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
        ref={ref}
        {...rest}
      />

      {!! error && (
      <FormErrorMessage>
        {error.message}
      </FormErrorMessage>)}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase)