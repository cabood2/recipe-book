import React, { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import axios from "axios";

interface FetchGamesResponse {
  results: Game[];
}
interface Game {
  id: number;
  title: string;
  name: string;
}
const Practice = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Game[]>(
        "https://my-json-server.typicode.com/cabood2/recipes1/categories"
      )
      .then((res) => setGames(res.data));
  }, []);

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default Practice;
