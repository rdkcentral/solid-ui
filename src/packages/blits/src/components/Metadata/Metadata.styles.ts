/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentStyle } from '../../utils/styleUtils.js';

type Style = {
  Container: {
    base: {
      alpha: number;
      disabled: {
        alpha: number;
      };
    };
  };
  TitleText: {
    base: {
      maxLines: number;
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
      color: string;
      disabled: {
        color: string;
      };
    };
    tones: {
      inverse: {
        color: string;
      };
    };
  };
  DescriptionText: {
    base: {
      maxLines: number;
      fontFamily: string;
      fontSize: number;
      lineHeight: number;
      color: string;
      disabled: {
        color: string;
      };
    };
    tones: {
      inverse: {
        color: string;
      };
    };
  };
};

const styles: Style = {
  Container: {
    base: {
      alpha: 1,
      disabled: {
        alpha: 0.5
      }
    }
  },
  TitleText: {
    base: {
      maxLines: 1,
      fontFamily: 'Arial',
      fontSize: 25,
      lineHeight: 36,
      color: '0xf8f7faff',
      disabled: {
        color: '0xf8f7fa80'
      }
    },
    tones: {
      inverse: {
        color: '0x181819ff'
      }
    }
  },
  DescriptionText: {
    base: {
      maxLines: 2,
      fontFamily: 'Arial',
      fontSize: 22,
      lineHeight: 32,
      color: '0xf8f7fab3',
      disabled: {
        color: '0xf8f7fa80'
      }
    },
    tones: {
      inverse: {
        color: '0x181819b3'
      }
    }
  }
};

export default styles satisfies ComponentStyle;