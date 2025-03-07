/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleMechanics:new */
    export class ISVehicleMechanics extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static alphaOverlay: any;

      static alphaOverlayInc: any;

      static cheat: any;

      bodyworklist: any;

      checkEngine: any;

      chr: any;

      context: any;

      drawJoypadFocus: any;

      flashFailure: any;

      flashTimer: any;

      flashTimerAlpha: any;

      flashTimerAlphaInc: any;

      generalCondition: any;

      generalCondRGB: any;

      hidetooltip: any;

      leftListHasFocus: any;

      leftListSelection: any;

      listbox: any;

      listWidth: any;

      minimumHeight: any;

      partCatRGB: any;

      partRGB: any;

      playerNum: any;

      rightListSelection: any;

      selected: any;

      tooltip: any;

      usedHood: any;

      vehicle: any;

      vehiclePart: any;

      xCarTexOffset: any;

      constructor(x: any, y: any, character: any, vehicle: any);

      checkEngineFull: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      doMenuTooltip: ((part: any, option: any, lua: any, name: any) => any) | any;

      doPartContextMenu: ((part: any, x: any, y: any) => any) | any;

      getConditionRGB: ((condition: any) => any) | any;

      getMouseOverPart: ((x: any, y: any) => any) | any;

      initParts: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      isMouseOverPart: ((x: any, y: any, part: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onListboxJoypadDirDown: ((listbox: any) => any) | any;

      onListboxJoypadDirUp: ((listbox: any) => any) | any;

      onListMouseDown: ((x: any, y: any) => any) | any;

      onListRightMouseUp: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      recalculGeneralCondition: (() => any) | any;

      renderCarOverlay: (() => any) | any;

      renderCarOverlayTooltip: ((partProps: any, part: any, carType: any) => any) | any;

      renderPartDetail: ((part: any) => any) | any;

      roundContainerContentAmount: ((part: any) => any) | any;

      selectPart: ((part: any) => any) | any;

      setVisible: ((bVisible: any, joypadData: any) => any) | any;

      startFlashGreen: (() => any) | any;

      startFlashRed: (() => any) | any;

      update: (() => any) | any;

      updateLayout: (() => any) | any;

      /** @noSelf */
      static onCheatGetKey: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onCheatHotwire: (playerObj: any, vehicle: any, hotwired: any, broken: any) => any;

      /** @noSelf */
      static onCheatRemove: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onCheatRemoveAux: (dummy: any, button: any, playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onCheatRepair: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onCheatRepairPart: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onCheatSetCondition: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onCheatSetConditionAux: (target: any, button: any, playerObj: any, part: any) => any;

      /** @noSelf */
      static onCheatSetContentAmount: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onCheatSetContentAmountAux: (target: any, button: any, playerObj: any, part: any) => any;

      /** @noSelf */
      static onCheatSetRust: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onCheatSetRustAux: (target: any, button: any, playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onCheatToggle: (playerObj: any) => any;

      /** @noSelf */
      static onConfigHeadlight: (playerObj: any, part: any, dir: any) => any;

      /** @noSelf */
      static OnMechanicActionDone: (
        chr: any,
        success: any,
        vehicleId: any,
        partId: any,
        itemId: any,
        installing: any,
      ) => any;

      /** @noSelf */
      static onRepairEngine: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onTakeEngineParts: (playerObj: any, part: any) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleMechanics {}
}
