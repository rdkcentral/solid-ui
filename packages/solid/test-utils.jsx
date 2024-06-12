/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
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

// TODO convert to typescript

import { render as solidRender, View, Canvas, activeElement } from '@lightningtv/solid';

const RenderOptions = {
  rootId: document.createElement('div')
};

function dec2hex(decimal) {
  if (decimal < 0) {
    return '#0';
  }

  const hexChars = '0123456789ABCDEF';
  let hexResult = '';

  while (decimal > 0) {
    const remainder = decimal % 16;
    hexResult = hexChars[remainder] + hexResult;
    decimal = Math.floor(decimal / 16);
  }

  if (hexResult === '') {
    hexResult = '0';
  }

  return '#' + hexResult;
}

export function render(Component) {
  let app;
  let resolver;

  solidRender(() => (
    <Canvas options={RenderOptions} onFirstRender={() => resolver(api)}>
      <View ref={app}>
        <Component />
      </View>
    </Canvas>
  ));

  const api = {
    toJSON: depth => toJSON(app.children.firstChild, depth),
    focus: () => {
      app._focusPath = [app.childList.first];
      app.childList.first._focus();
    },
    unfocus: () => {
      app._focusPath = [app];
      app.childList.first._unfocus();
    },
    getInstance: () => app.children.firstChild,
    getFocused: () => activeElement(),
    getApp: () => app,
    keyPress: key => {
      keyPress(app, key);
      app.stage.drawFrame();
    },
    keyRelease: key => keyRelease(app, key),
    destroy: () => app.destroy(),
    focusPath: () => app.focusPath.map(p => p.ref)
  };

  return new Promise(resolve => {
    resolver = resolve;
  });
}

function toJSON(node, depth = 2) {
  if (depth === 0 || !node) {
    return null;
  }

  const nodeInfo = getProperties(node);
  if (node.name === 'TextNode') {
    return node.text;
  }

  if (node.isTextNode()) {
    nodeInfo.text = node.getText();
  } else {
    nodeInfo.children = node.children.map(c => toJSON(c, depth - 1));
  }

  return nodeInfo;
}

const NodeProps = [
  'alpha',
  'color',
  'clipping',
  'height',
  'fontSize',
  'id',
  'mount',
  'mountY',
  'mountX',
  'pivot',
  'pivotX',
  'pivotY',
  'scale',
  'scaleX',
  'scaleY',
  'state',
  'width',
  'x',
  'y',
  'zIndex'
];

function getProperties(node) {
  const props = {};

  NodeProps.forEach(key => {
    if (node[key]) {
      props[key] = node[key];
    }
  });

  if (props.color) {
    props.color = dec2hex(props.color);
  }

  return props;
}
