import { Game } from "../src/hooks/useGames";
import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import PlatformIconList from "../components/PlatformIconList.tsx";
import CriticScore from "../components/CriticScore.tsx"
import getCroppedImageUrl from "../src/services/images-url.ts";

interface Props{
    game: Game
}

function GameCard(props: Props){
    return(
        <Card>
            <Image src={getCroppedImageUrl(props.game.background_image)}/>
            <CardBody>
                <HStack justifyContent={"space-between"} marginBottom={3}>
                <PlatformIconList platforms={props.game.parent_platforms.map(p => p.platform)} />
                <CriticScore score={props.game.metacritic}/>
                </HStack>
                <Heading fontSize={'2xl'}>{props.game.name}</Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;