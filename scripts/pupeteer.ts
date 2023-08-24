import { Vector3, World, system } from "@minecraft/server";

class Pupeteer {
  world: World;

  constructor(world: World) {
    this.world = world;
  }

  setActionBarTimed(message: string, duration: number): void {
    this.world.getPlayers().forEach((player) => {
      player.onScreenDisplay.setActionBar(message);
    });
    system.runInterval(() => {
      this.clearActionBar();
    }, duration);
  }

  setActionBar(message: string): void {
    this.world.getPlayers().forEach((player) => {
      player.onScreenDisplay.setActionBar(message);
    });
  }

  setTitleTimed(message: string, duration: number): void {
    this.world.getPlayers().forEach((player) => {
      player.onScreenDisplay.setTitle(message);
    });
    system.runInterval(() => {
      this.clearTitle();
    }, duration);
  }

  updateSubtitle(message: string): void {
    this.world.getPlayers().forEach((player) => {
      player.onScreenDisplay.updateSubtitle(message);
    });
  }

  clearTitle(): void {
    this.world.getPlayers().forEach((player) => {
      player.onScreenDisplay.setTitle("");
    });
  }

  clearSubtitle(): void {
    this.world.getPlayers().forEach((player) => {
      player.onScreenDisplay.updateSubtitle("");
    });
  }

  clearActionBar(): void {
    this.world.getPlayers().forEach((player) => {
      player.onScreenDisplay.setActionBar("");
    });
  }

  testForLocation(location: Vector3, radius: number): boolean {
    let isPlayerInArea = false;
    this.world.getPlayers().forEach((player) => {
      let dx = location.x - player.location.x;
      let dy = location.y - player.location.y;
      let dz = location.z - player.location.z;

      let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (distance < radius) {
        isPlayerInArea = true;
      }
    });
    return isPlayerInArea;
  }
}

export default Pupeteer;