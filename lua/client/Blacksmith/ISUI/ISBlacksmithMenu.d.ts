/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.ISUI {
    export abstract class ISBlacksmithMenu {
      static [id: string]: any;

      /** @noSelf */
      static addToolTip: (option: any, name: any, texture: any) => any;

      /** @noSelf */
      static checkMetalWeldingFurnitures: (
        metalPipes: any,
        smallMetalSheet: any,
        metalSheet: any,
        hinge: any,
        scrapMetal: any,
        torchUse: any,
        skill: any,
        player: any,
        toolTip: any,
        metalBar: any,
        wire: any,
      ) => any;

      /** @noSelf */
      static checkWire: (wireUses: any, player: any, toolTip: any) => any;

      /** @noSelf */
      static doBuildMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static getBlowTorchWithMostUses: (container: any) => any;

      /** @noSelf */
      static getFenceSprite: (player: any) => any;

      /** @noSelf */
      static getFirstBlowTorchWithUses: (container: any, uses: any) => any;

      /** @noSelf */
      static getMaterialCount: (playerObj: any, type: any) => any;

      /** @noSelf */
      static getMaterialUses: (playerObj: any, type: any) => any;

      /** @noSelf */
      static getMetal: (player: any, amount: any) => any;

      /** @noSelf */
      static onAddFuel: (worldobjects: any, furnace: any, coal: any, player: any) => any;

      /** @noSelf */
      static onAddLogs: (worldobjects: any, metalDrum: any, player: any) => any;

      /** @noSelf */
      static onAnvil: (worldobjects: any, player: any) => any;

      /** @noSelf */
      static onBigLocker: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onBigMetalFence: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onBigMetalFenceGate: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onBigWiredFence: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onDoubleMetalDoor: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onDoublePoleDoor: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onEmptyDrum: (worldobjects: any, metalDrum: any, playerObj: any) => any;

      /** @noSelf */
      static onFenceGate: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onInfo: (worldobjects: any, furnace: any, player: any) => any;

      /** @noSelf */
      static onLightDrumFromKindle: (
        worldobjects: any,
        player: any,
        percedWood: any,
        stickOrBranch: any,
        metalDrum: any,
      ) => any;

      /** @noSelf */
      static onLightDrumFromLiterature: (
        worldobjects: any,
        player: any,
        literature: any,
        lighter: any,
        metalDrum: any,
        fuelAmt: any,
      ) => any;

      /** @noSelf */
      static onLightDrumFromPetrol: (worldobjects: any, player: any, lighter: any, petrol: any, metalDrum: any) => any;

      /** @noSelf */
      static onLightFromKindle: (
        worldobjects: any,
        player: any,
        percedWood: any,
        stickOrBranch: any,
        furnace: any,
      ) => any;

      /** @noSelf */
      static onLightFromLiterature: (
        worldobjects: any,
        player: any,
        literature: any,
        lighter: any,
        furnace: any,
        fuelAmt: any,
      ) => any;

      /** @noSelf */
      static onLightFromPetrol: (worldobjects: any, player: any, lighter: any, petrol: any, furnace: any) => any;

      /** @noSelf */
      static onMetalCounter: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onMetalCounterCorner: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onMetalCrate: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onMetalDrum: (worldobjects: any, player: any, sprite: any) => any;

      /** @noSelf */
      static onMetalFence: (worldobjects: any, player: any, torchUse: any, sprite: any) => any;

      /** @noSelf */
      static onMetalFloor: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onMetalPoleFence: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onMetalShelves: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onMetalWallFrame: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onPutOutFireDrum: (worldobjects: any, metalDrum: any, player: any) => any;

      /** @noSelf */
      static onRemoveCharcoal: (worldobjects: any, metalDrum: any, player: any) => any;

      /** @noSelf */
      static onRemoveDrum: (worldobjects: any, metalDrum: any, player: any) => any;

      /** @noSelf */
      static onRemoveLogs: (worldobjects: any, metalDrum: any, player: any) => any;

      /** @noSelf */
      static onSmallLocker: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static onStoneFurnace: (worldobjects: any, player: any) => any;

      /** @noSelf */
      static onStopFire: (worldobjects: any, furnace: any, player: any) => any;

      /** @noSelf */
      static onUseBellows: (worldobjects: any, furnace: any, bellows: any, player: any) => any;

      /** @noSelf */
      static onWiredFence: (worldobjects: any, player: any, torchUse: any) => any;

      /** @noSelf */
      static weldingRodUses: (torchUses: any) => any;
    }
  }
  export namespace lua.client.Blacksmith.ISUI.ISBlacksmithMenu {}
}
