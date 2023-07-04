import { Button, HStack, Heading, Image, List, ListItem} from "@chakra-ui/react";
import useGenres, { Genre } from "../src/hooks/useGenres"
import getCroppedImageUrl from "../src/services/images-url";

interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList(props: Props) {

    const { data } = useGenres();

    // if(error) return null;
    // if(isLoading) return(<Spinner></Spinner>);

    return (
        <>
        <Heading fontSize={'2xl'} marginBottom={3}> Genres </Heading>
        <List>
            {data.map(genre =>
                <ListItem key={genre.id} paddingY={"5px"}>
                    <HStack>
                        <Image objectFit={'cover'} boxSize={"32px"} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                        <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === props.selectedGenre?.id ? 'bold' : 'normal'}  onClick={() => props.onSelectGenre(genre)} fontSize={"lg"} variant={"link"}>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
        </>
    );
}

export default GenreList;