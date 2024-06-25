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

import { render, Config } from '@lightningtv/solid';
import App from './pages/App';
import coreExtensionModuleUrl from '../shared/AppCoreExtensions.js?importChunkUrl';
import coreWorkerUrl from '../shared/threadx-core-worker.js?importChunkUrl';

Config.fontSettings.fontFamily = 'Roboto';
Config.fontSettings.color = 0xffffffff;

const driver = 'main';
Config.renderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  threadXCoreWorkerUrl: driver === 'threadx' ? coreWorkerUrl : undefined
  // deviceLogicalPixelRatio: 1
};

render(() => <App />);
