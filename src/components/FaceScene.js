import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function FaceScene({ ...props }) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
       '/Assets/3D/face.gltf'
    );
    const { actions } = useAnimations(animations, group);
 
    useEffect(() => {
    });
    return (
       <group ref={group} {...props} dispose={null}>
       
       </group>
    );
 }
 
 useGLTF.preload('/Assets/3D/face.gltf');