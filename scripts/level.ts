import { World } from "@minecraft/server";

class Level {
  levelCompleteCallback: Function;
  levelCheckCallback: Function;
  levelSetupCallback: Function;
  isCompleted: boolean = false;
  isSetup: boolean = false;

  constructor(levelSetupCallback: Function, levelCompleteCallback: Function, levelCheckCallback: Function) {
    this.levelSetupCallback = levelSetupCallback;
    this.levelCompleteCallback = levelCompleteCallback;
    this.levelCheckCallback = levelCheckCallback;
  }

  update() {
    if (!this.isSetup) {
      this.isSetup = true;
      this.levelSetupCallback();
    }
    if (this.levelCheckCallback() && !this.isCompleted) {
      this.isCompleted = true;
      this.levelCompleteCallback();
    }
  }

  reset() {
    this.isCompleted = false;
  }
}
//nextlevel
//mindkeeper
//pupeteer

export default Level;
