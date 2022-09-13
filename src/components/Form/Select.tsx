import { FormControl, FormLabel, Select as ChakraSelect, SelectProps as ChakraSelectProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface Options {
  value: string;
  label: string;
}
interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  options: Options[]
  error?: FieldError;
};
const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ name, label = '', options, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name} color="blue.900">{label}</FormLabel>}
      <ChakraSelect
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
      >
        {options?.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </ChakraSelect>

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>)}
    </FormControl>
  );
}

export const Select = forwardRef(SelectBase)