import { Flex } from "@chakra-ui/react";
import { User } from "./Profile/User";
import { Notification } from "./Profile/Notification";

const user = {
  name: 'Felipe Leal',
  email: 'felipe.leal@dev.com',
  avatarUrl: 'https://github.com/felipeWanderson.png'
}

export function Profile() {
  return (
    <Flex
    align="center"
    ml="auto"
  >
    <Notification />
    <User user={user} />
  </Flex>
  );
}