import { Game } from "phaser";
import React, { useEffect } from "react";
import PlayGame from "../phaser/MyScene";

const GAME_CONTAINER_ID = "game";

const config = {
  type: Phaser.AUTO,
  parent: GAME_CONTAINER_ID,
  width: 800,
  height: 600,
  scene: PlayGame
};

const MyGame: React.FunctionComponent = () => {
  useEffect(() => {
    new Game(config);
  }, []);
  return <div id={GAME_CONTAINER_ID}></div>;
};

export default MyGame;
