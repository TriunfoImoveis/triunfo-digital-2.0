import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavigationLink } from "./Sidebar/NavigationLink";
import { NavigationMenu } from "./Sidebar/NavigationMenu";

export function Sidebar() {
  return (
    <Box as="aside" w="64" >
      <Stack spacing="12" align="flex-start">
        <NavigationMenu title="GERAL">
          <NavigationLink icon={RiDashboardLine} text="Dashboard"/>
          <NavigationLink icon={RiContactsLine} text="Usuários"/>
        </NavigationMenu>
        <NavigationMenu title="AUTOMAÇÃO">
          <NavigationLink icon={RiInputMethodLine} text="Formulários"/>
          <NavigationLink icon={RiGitMergeLine} text="Automação"/>
        </NavigationMenu>
      </Stack>
    </Box>
  );
}