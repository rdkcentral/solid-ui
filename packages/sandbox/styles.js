/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

export default {
  Page: {
    width: 1920,
    height: 1080
  },
  headlineText: {
    width: 1920,
    height: 170,
    lineHeight: 170,
    y: 455,
    contain: 'both',
    fontSize: 100,
    textAlign: 'center'
  },
  headlineSubText: {
    width: 1920,
    height: 170,
    lineHeight: 170,
    y: 655,
    contain: 'both',
    fontSize: 60,
    textAlign: 'center'
  },
  Row: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    width: 1760,
    height: 300,
    color: '00000000',
    gap: 26
  },
  Column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    width: 1760,
    height: 500,
    gap: 50,
    y: 200,
    x: 80,
    color: '00000000'
  }
};
