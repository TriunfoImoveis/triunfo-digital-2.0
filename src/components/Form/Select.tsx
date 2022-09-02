import { FormControl, FormLabel, Select as ChakraSelect, SelectProps as ChakraSelectProps } from "@chakra-ui/react";

interface Options {
  value: string;
  label: string;
} 
interface SelectProps extends ChakraSelectProps{
  name: string;
  label?: string;
  options?: Options[]
};
export function Select({name, label, options, ...rest}: SelectProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name} color="blue.900">{label}</FormLabel>}
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
        {...rest}
      >
        {options?.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}  
      </ChakraSelect>
    </FormControl>
  );
}