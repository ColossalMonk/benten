import React from "react";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export default function OrbitControl(props) {
  const { camera, gl } = useThree();
  return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />;
}

