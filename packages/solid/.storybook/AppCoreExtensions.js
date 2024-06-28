/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the License);
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


// Here we just re-export everything from the shared location.
export { default } from '../../shared/AppCoreExtensions.js';

// Workaround: Originally `preview.tsx` was importing the shared `AppCoreExtensions.ts`
// file directly via the importChunkUrl plugin, but that is currently causing an
// issue with the storybook-static build where the preview does not load.
// The error preventing the preview from loading is due to the app trying to load
// Storybook's `sb-preview/runtime.js` file from the wrong relative location.
// But we're not sure how the plugin is causing that issue.
// This is a workaround until we have time to figure out what is causing the
// root issue.
