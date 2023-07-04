import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {BsChevronDown} from 'react-icons/bs';
import usePlatforms from "../src/hooks/usePlatforms";
import { Platform } from "../src/hooks/useGames";

interface Props{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform| null;
}

function PlatformSelector(props: Props){

    const {data, error} = usePlatforms();

    if(error) return null;

    return(
    <Menu>
        <MenuButton as={Button}rightIcon={<BsChevronDown/>} > {props.selectedPlatform?.name || 'Platform'} </MenuButton>
        <MenuList>
            {data.map( (platform) => {return <MenuItem key={platform.id} onClick={() => props.onSelectPlatform(platform)}>{platform.name}</MenuItem>})}
        </MenuList>
    </Menu>
    );
}

export default PlatformSelector;