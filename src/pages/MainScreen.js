import React, { Suspense } from "react";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment} from '@react-three/drei'
import Face from '../components/Face.js'

const MainScreen = () => {
return(
    <div style={{height : "100vh" , width : "100vw"}}>
    <Canvas>
        <color attach="background" args={["#4D7C8A"]} />
        <fog color="#161616" attach="fog" near={3} far={30} />
        <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <pointLight position={[0, 10, 10]} intensity = {0.6} />
            <Face />
        </Suspense>
        <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Vignette eskil={false} offset={0.5} darkness={0.25} />
      </EffectComposer>
      </Canvas>
    </div>
)
}

export default MainScreen;