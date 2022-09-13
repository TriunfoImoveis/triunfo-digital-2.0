import { Icon, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavigationLinkProps {
  text: string;
  icon: IconType;
}
export function NavigationLink({text, icon}: NavigationLinkProps) {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium" >{text}</Text>
    </Link>
  );
}