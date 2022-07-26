import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment} from '@react-three/drei'
import Face from '../components/Face.js'

const MainScreen = () => {
    const ref = useRef();
return(
    <div style={{height : "100vh" , width : "100vw"}}>
    <Canvas>
        <Suspense fallback={null}>
            <pointLight position={[0, 10, 10]} intensity = {0.6} />
            <Face />
        </Suspense>
      </Canvas>
    </div>
)
}

export default MainScreen;