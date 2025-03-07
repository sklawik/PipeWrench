/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISTextBoxMap:new */
    export class ISTextBoxMap extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      blackColor: any;

      character: any;

      colorButtonInfo: any;

      colorButtons: any;

      currentColor: any;

      defaultEntryText: any;

      entry: any;

      fontHgt: any;

      ISButtonA: any;

      ISButtonB: any;

      joypadIndex: any;

      joypadIndexY: any;

      mapUI: any;

      name: any;

      no: any;

      onclick: any;

      param1: any;

      param2: any;

      param3: any;

      param4: any;

      player: any;

      symbolsUI: any;

      target: any;

      text: any;

      tickBox: any;

      validateArgs: any;

      validateFunc: any;

      validateTarget: any;

      validateTooltipText: any;

      yes: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        text: any,
        defaultEntryText: any,
        target: any,
        onclick: any,
        player: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
      );

      close: (() => any) | any;

      createChildren: (() => any) | any;

      destroy: (() => any) | any;

      isTranslation: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onCommandEntered: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      onOtherKey: ((key: any) => any) | any;

      prerender: (() => any) | any;

      render: (() => any) | any;

      selectColor: ((r: any, g: any, b: any) => any) | any;

      setOnlyNumbers: ((onlyNumbers: any) => any) | any;

      setValidateFunction: ((target: any, func: any, arg1: any, arg2: any) => any) | any;

      setValidateTooltipText: ((text: any) => any) | any;

      showTranslationTickBox: ((isTranslation: any) => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISTextBoxMap {}
}
