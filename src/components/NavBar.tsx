import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSerach: (serachText: string) => void;
}

const NavBar = ({ onSerach }: Props) => (
  <HStack padding="10px">
    <Image src={logo} boxSize="60px"></Image>
    <SearchInput onSerach={onSerach}></SearchInput>
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
