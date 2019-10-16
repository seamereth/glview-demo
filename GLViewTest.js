import React from 'react';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import { GLView } from 'expo-gl';

_onGLContextCreate = async gl => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000
  );
  const renderer = ExpoTHREE.createRenderer({ gl });
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

  const geometry = new THREE.SphereBufferGeometry(1, 36, 36);
  const material = new THREE.MeshBasicMaterial({
    color: 0x333333
  });
  const sphere = new THREE.Mesh(geometry, material);    
  scene.add(sphere);
  camera.position.z = 2;
  const render = () => {
    requestAnimationFrame(render);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
    gl.endFrameEXP();
  };
  render();
};

export default () => {
  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={this._onGLContextCreate}
    />
  )
}