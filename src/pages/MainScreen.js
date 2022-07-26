import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment} from '@react-three/drei'
import Face from '../components/Face.js'

const MainScreen = () => {
    const ref = useRef();
return(
    <div>
    <Canvas>
        <Suspense fallback={null}>
          <Face />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
)
}

export default MainScreen;