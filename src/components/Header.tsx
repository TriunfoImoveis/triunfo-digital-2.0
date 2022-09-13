import { Flex } from "@chakra-ui/react";
import { Profile } from "../components/Profile"
import { Logo } from "./Header/Logo";
const TriunfoLogoSrc = '/images/logo-white-horizontal.png';
export function Header() {

  return (
    <Flex
      as="section"
      width="100%"
      maxW={1480}
      mt="6"
      h="20"
      mx="auto"
      px="6"
      align="center"
    >
      <Logo src={TriunfoLogoSrc} alt="Triunfo Digital" width={238} height={66} />
      <Profile />
    </Flex>
  )
}