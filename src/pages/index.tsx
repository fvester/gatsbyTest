import * as React from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import type { HeadFC, PageProps } from "gatsby"
import { Environment, MeshReflectorMaterial, OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"
import OfficeModel from "@components/office"
import CityModel from "@components/city"
import "@style/index.scss"
import RoomModel from "@components/office2"
import Macbook from "@components/macbook"


const IndexPage: React.FC<PageProps> = () => {

  return (
    <main>
      <Canvas>
        <OrbitControls enableZoom enablePan enableRotate/>
        <axesHelper args={[5]} />

        {/* <Environment files={"./images/background_city.hdr"} background/> */}
        <Environment preset="city"/>
        {/* <ambientLight intensity={0.1}/> */}
        {/* <directionalLight position={[0, 1, -8]} intensity={0.4}/> */}
        {/* <directionalLight position={[1, 2, 8]} intensity={0.4}/> */}

        {/* <color attach="background" args={["#F0F0F0"]}/>

        {/* <RotatingCube /> */}
        {/* <mesh>
          <cylinderGeometry/>
          <meshStandardMaterial />
        </mesh> */}
        {/* <CityModel position={[0, -3, -10]}/> */}
        {/* <RoomModel /> */}
        {/* <OfficeModel scale={[0.2, 0.2, 0.2]} position={[0, 0, 0]}/> */}
        <Macbook />
      </Canvas>
    </main>
  )
}
export const Head: HeadFC = () => <title>Home Page</title>

export default IndexPage
