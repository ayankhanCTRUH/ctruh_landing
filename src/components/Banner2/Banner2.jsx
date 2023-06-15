import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import {
  OrbitControls,
  ContactShadows,
  useGLTF,
  useCursor,
} from "@react-three/drei";
import "./Banner2.css";

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function Model({ name, ...props }) {
  // Fetching the GLTF, nodes is a collection of all the meshes
  // It's cached/memoized, it only gets loaded and parsed once
  const { nodes } = useGLTF("/compressed.glb");
  // Feed hover state into useCursor, which sets document.body.style.cursor to pointer|auto
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  return (
    <>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh
          // // Click sets the mesh as the new target
          // onClick={(e) => (e.stopPropagation(), (state.current = name))}
          // // If a click happened but this mesh wasn't hit we null out the target,
          // // This works because missed pointers fire before the actual hits
          // onPointerMissed={(e) => e.type === "click" && (state.current = null)}
          // // Right click cycles through the transform modes
          // onContextMenu={(e) =>
          //   snap.current === name &&
          //   (e.stopPropagation(), (state.mode = (snap.mode + 1) % modes.length))
          // }
          onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
          onPointerOut={(e) => setHovered(false)}
          name={name}
          geometry={nodes[name].geometry}
          material={nodes[name].material}
          material-color={"#afc7fa"}
          // material-color={snap.current === name ? "#ff6080" : "white"}
          {...props}
          dispose={null}
        />
      </Float>
    </>
  );
}

function Banner2() {
  return (
    <div className="bannerMainContainer">
      <div className="bannerText">
        <h1>Welcome To Ctruh</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          pariatur iure, sit consequuntur mollitia minima maiores ratione
          impedit.
        </p>
        <button>Join Waitlist</button>
      </div>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.75}
        />
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight
          color="#ffffff"
          groundColor="#b9b9b9"
          position={[-7, 25, 13]}
          intensity={0.85}
        />
        <Suspense fallback={null}>
          <group position={[0, 0, 0]} scale={0.02}>
            <Model
              name="Curly"
              position={[30, -21, -20]}
              rotation={[2, 0, -0]}
            />
            <Model
              name="DNA"
              position={[50, 0, -17]}
              rotation={[1, 1, -2]}
              scale={2}
            />
            <Model
              name="Headphones"
              position={[20, 12, 4]}
              rotation={[1, 0, -1]}
            />
            <Model
              name="Notebook"
              position={[-2, -29, -13]}
              rotation={[2, 0, 1]}
            />
            <Model
              name="Rocket003"
              position={[18, 15, -25]}
              rotation={[1, 1, 0]}
            />
            <Model
              name="Roundcube001"
              position={[-25, -4, 5]}
              rotation={[1, 0, 0]}
              scale={0.5}
            />
            <Model
              name="Table"
              position={[10, -4, -28]}
              rotation={[1, 0, -1]}
              scale={0.5}
            />
            <Model
              name="VR_Headset"
              position={[-20, -15, 28]}
              rotation={[1, 0, -1]}
              scale={5}
            />
            <Model
              name="Zeppelin"
              position={[-20, 10, 10]}
              rotation={[3, -1, 3]}
              scale={0.005}
            />
          </group>
        </Suspense>
      </Canvas>

      {/* <div className="canvasFade"></div> */}
    </div>
  );
}

export default Banner2;
