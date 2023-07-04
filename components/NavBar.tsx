import { HStack, Image} from "@chakra-ui/react";
import SearchInput from "./SearchInput.tsx";
import logo from "../GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

interface Props{
    onSearch: (searchText: string) => void;
}

function NavBar(props: Props){
    return(
        <HStack padding="10px">
            <Image src={logo} boxSize="60px"/>
            <SearchInput onSearch={props.onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    );
}

export default NavBar;