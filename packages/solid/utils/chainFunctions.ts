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

type ChainableFunction<Args extends unknown[] = unknown[], Return = unknown> = (...args: Args) => Return;

export function chainFunctions<Args extends unknown[], Return>(
  ...args: (ChainableFunction<Args, Return> | undefined)[]
): ChainableFunction<Args, Return | undefined> {
  const onlyFunctions = args.filter(
    (func): func is ChainableFunction<Args, Return> => typeof func === 'function'
  );

  if (onlyFunctions.length === 0) {
    return undefined;
  }

  if (onlyFunctions.length === 1) {
    return onlyFunctions[0];
  }

  return function (this: unknown, ...innerArgs: Args) {
    let result: Return | undefined;
    for (const func of onlyFunctions) {
      result = func.apply(this, innerArgs);
      if (result === true) {
        return result;
      }
    }
    return result;
  };
}
