import React, { useEffect } from "react";
import Phaser from "phaser";
import { BrokenButtonScene } from "./brokenButtonScene"; // Make sure the path and name are correct

const PhaserGameComponent: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "phaser-game-container",
      scene: [BrokenButtonScene], // Use your Phaser scene here
    };

    new Phaser.Game(config);

    return () => {
      // Cleanup the game instance if needed
    };
  }, []);

  return <div id="phaser-game-container" />;
};

export default PhaserGameComponent;
