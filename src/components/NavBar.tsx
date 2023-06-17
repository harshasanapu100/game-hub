import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => (
  <HStack padding="10px">
    <Image src={logo} boxSize="60px"></Image>
    <SearchInput></SearchInput>
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
