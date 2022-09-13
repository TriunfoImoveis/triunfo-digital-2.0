import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface User {
  name: string;
  email: string;
  avatarUrl?: string
}
interface UserProps {
  user: User;
}
export function User({user}: UserProps) {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>{user.name}</Text>
        <Text color="gray.300" fontSize="small">
          {user.email}
        </Text>
      </Box>

      <Avatar size="md" name={user.name} src={user.avatarUrl || ''}/>
    </Flex>
  );
}