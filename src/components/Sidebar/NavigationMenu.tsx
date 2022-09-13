import { Box, Text, Stack } from "@chakra-ui/react";

interface NavigationMenuProps {
  title: string;
  children: React.ReactNode;
}


export function NavigationMenu({title, children}: NavigationMenuProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}