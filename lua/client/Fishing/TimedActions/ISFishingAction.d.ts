/*
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * File generated at: 2022-08-05T02:36:29.982Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Fishing.TimedActions {
    /** @customConstructor ISFishingAction:new */
    export class ISFishingAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      attractNumber: any;

      castAfterReel: any;

      firstCast: any;

      fishingLvl: any;

      fishingUI: any;

      fishingZoneIncrease: any;

      lure: any;

      pole: any;

      rod: any;

      splashTimer: any;

      stage: any;

      tile: any;

      usingSpear: any;

      constructor(character: any, tile: any, rod: any, lure: any, fishingUI: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      attractFish: (() => any) | any;

      brokeLine: ((fish: any) => any) | any;

      brokeThisLine: (() => any) | any;

      createFish: ((fishType: any, fish: any) => any) | any;

      getFish: (() => any) | any;

      getFishByLure: (() => any) | any;

      getFishingZone: (() => any) | any;

      getUsedInventory: ((item: any) => any) | any;

      /** @noSelf */
      static getFishingZoneFixed: (x: any, y: any, z: any) => any;
    }
  }
  export namespace lua.client.Fishing.TimedActions.ISFishingAction {}
}
