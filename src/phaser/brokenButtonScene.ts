import Phaser from "phaser";

export class BrokenButtonScene extends Phaser.Scene {
  private buttonText: Phaser.GameObjects.Text | any;
  private warningText: Phaser.GameObjects.Text | any;
  private clickCount: number = 0;

  constructor() {
    super("BrokenButtonScene");
  }

  create() {
    this.buttonText = this.add
      .text(400, 300, "Don't click here", {
        font: "18px Arial",
        color: "#ffffff",
      })
      .setInteractive()
      .on("pointerdown", () => this.handleButtonClick());

    // Initially invisible warning text
    this.warningText = this.add.text(400, 340, "", {
      font: "16px Arial",
      color: "#ff0000",
    });
  }

  handleButtonClick() {
    this.clickCount++;
    this.applyGlitchEffect();
    this.updateWarningText();
  }

  applyGlitchEffect() {
    // Example of a simple "glitch" effect
    this.buttonText.setColor("#ff0000"); // Change color to simulate glitch
    this.time.delayedCall(100, () => {
      this.buttonText.setColor("#ffffff"); // Change back after a short delay
    });

    // Slightly move the text to simulate shaking
    this.buttonText.x += Phaser.Math.Between(-5, 5);
    this.buttonText.y += Phaser.Math.Between(-5, 5);

    // Reset position after the glitch effect
    this.time.delayedCall(100, () => {
      this.buttonText.x = 400;
      this.buttonText.y = 300;
    });
  }

  updateWarningText() {
    let text = "";
    switch (this.clickCount) {
      case 2:
        text = "Unstable code, please refrain from clicking.";
        break;
      case 4:
        text = "Stop clicking, you're going to break the site.";
        break;
      case 6:
        text = "See what you did? You broke it. Now it's broken. Great.";
        break;
      // Add more cases as needed
    }
    this.warningText.setText(text);
  }
}
