import GamesCard from "./GamesCard";
import Loading from "../Loading";
import Error from "../Error";
import { useEffect, useState } from "react";

function GamesList(){
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchgames(){
            try{
                setIsLoading(true);
                const res = await fetch(
                    "https://65f7c86ab4f842e80886088f.mockapi.io/game"
                );
                const data = await res.json();
                setGames(data);
            }catch (e){
                console.error(e);
                setIsError(true);
            }finally{
                setIsLoading(false);
            }
        }
        fetchgames();
    }, []);

    return(
    <div className = "maindiv">
        <div className="game-card-container">
            {isLoading ? (<Loading />) : 
            (games.map((game) => <GamesCard game={game} key={game.id}/>))}

        </div>
        {isError && <Error />}
    </div>
    )
}

export default GamesList;