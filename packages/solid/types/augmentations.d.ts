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

import '@lightningtv/solid';

declare module '@lightningtv/solid' {
  /**
   * Augment the existing IntrinsicCommonProps interface to include our state style keys
   */
  interface IntrinsicNodeStyleProps {
    focus?: IntrinsicNodeStyleProps;
    disabled?: IntrinsicNodeStyleProps;
    // TODO remove when this new solid version is published
    color?: number | string;
  }
  interface IntrinsicTextNodeStyleProps {
    focus?: IntrinsicTextNodeStyleProps;
    disabled?: IntrinsicTextNodeStyleProps;
    // TODO remove when this new solid version is published
    color?: number | string;
  }
}
