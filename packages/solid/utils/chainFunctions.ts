/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

type ChainableFunction = (...args: unknown[]) => unknown;

export function chainFunctions(...args: ChainableFunction[]): ChainableFunction;
export function chainFunctions<T>(...args: (ChainableFunction | T)[]): T;

// take an array of functions and if you return true from a function, it will stop the chain
export function chainFunctions<T extends ChainableFunction>(...args: (ChainableFunction | T)[]) {
  const onlyFunctions = args.filter(func => typeof func === 'function');
  if (onlyFunctions.length === 0) {
    return undefined;
  }

  if (onlyFunctions.length === 1) {
    return onlyFunctions[0];
  }

  return function (this: unknown | T, ...innerArgs: unknown[]) {
    let result;
    for (const func of onlyFunctions) {
      result = func.apply(this, innerArgs);
      if (result === true) {
        return result;
      }
    }
    return result;
  };
}
