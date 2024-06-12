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

import { View, Text, hexColor } from '@lightningtv/solid';
import { createSignal } from 'solid-js';

const fpsStyle = {
  color: 0x000000ff,
  height: 150,
  width: 330,
  x: 1910,
  y: 10,
  mountX: 1,
  alpha: 0.8,
  zIndex: 100
};

const fpsLabel = {
  x: 10,
  fontSize: 22,
  textColor: hexColor('#f6f6f6')
};

const fpsValue = {
  fontSize: 22,
  textColor: hexColor('#f6f6f6')
};

const [fps, setFps] = createSignal(0);
const [avgFps, setAvgFps] = createSignal(0);
const [minFps, setMinFps] = createSignal(99);
const [maxFps, setMaxFps] = createSignal(0);
const [isLoadedCount, setIsLoadedCount] = createSignal(0);
const [isLoadingCount, setIsLoadingCount] = createSignal(0);
const [isFailedCount, setIsFailedCount] = createSignal(0);

let count = 0;
let totalFps = 0;

export const resetCounter = () => {
  // clear fps
  totalFps = 0;
  count = 0;
  setMinFps(99);
};

const calcFps = (fps: number) => {
  if (!fps) return;

  setFps(fps);
  setMinFps(prev => Math.min(fps, prev));
  setMaxFps(prev => Math.max(fps, prev));

  totalFps += fps;
  count++;

  setAvgFps(Math.round(totalFps / count));
};

const calcPerformanceMetrics = stage => {
  let isLoadedCount = 0;
  let isLoadingCount = 0;
  let isFailedCount = 0;
  stage.txManager.textureIdCache.forEach((value: { state: string }) => {
    if (value.state === 'loaded') {
      isLoadedCount++;
    }
    if (value.state === 'loading') {
      isLoadingCount++;
    }
    if (value.state === 'failed') {
      isFailedCount++;
    }
  });
  setIsLoadedCount(isLoadedCount);
  setIsLoadingCount(isLoadingCount);
  setIsFailedCount(isFailedCount);
};

// let fpsNumFrames = 0;
// let totalFpsElapsedTime = 0;

export function setupFPS(root) {
  root.renderer.on('fpsUpdate', (target, fpsData) => {
    const fps = typeof fpsData === 'number' ? fpsData : fpsData.fps;
    // ignore really low fps which occur on page loads
    if (fps > 5) {
      calcFps(fps);
      calcPerformanceMetrics(target.root.stage);
    }
  });
}

/** Hi there */
export const FPSCounter = props => {
  return (
    <View {...props} style={fpsStyle}>
      <View>
        <Text style={fpsLabel}>FPS:</Text>
        <Text style={fpsValue} x={90}>
          {fps().toString()}
        </Text>
      </View>

      <View x={160}>
        <Text style={fpsLabel}>AVG:</Text>
        <Text style={fpsValue} x={100}>
          {avgFps().toString()}
        </Text>
      </View>

      <View x={0} y={20}>
        <Text style={fpsLabel}>MIN:</Text>
        <Text style={fpsValue} x={90}>
          {minFps().toString()}
        </Text>
      </View>

      <View x={160} y={20}>
        <Text style={fpsLabel}>MAX:</Text>
        <Text style={fpsValue} x={100}>
          {maxFps().toString()}
        </Text>
      </View>

      <View x={0} y={50}>
        <Text style={fpsLabel}>Loaded Textures Cnt:</Text>
        <Text style={fpsLabel} x={270}>
          {isLoadedCount().toString()}
        </Text>
      </View>

      <View x={0} y={80}>
        <Text style={fpsLabel}>Loading Textures Cnt:</Text>
        <Text style={fpsLabel} x={270}>
          {isLoadingCount().toString()}
        </Text>
      </View>

      <View x={0} y={110}>
        <Text style={fpsLabel}>Failed Textures Cnt:</Text>
        <Text style={fpsLabel} x={270}>
          {isFailedCount().toString()}
        </Text>
      </View>
    </View>
  );
};
