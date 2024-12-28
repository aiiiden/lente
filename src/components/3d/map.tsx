'use client';

import { OrbitControls, Plane } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useState } from 'react';

const MAP_SIZE = 8; // 맵 크기

function App() {
  const [boxPosition, setBoxPosition] = useState<[number, number, number]>([
    0, 1, 0,
  ]);
  const [restrictedAreas, setRestrictedAreas] = useState<
    { minX: number; maxX: number; minZ: number; maxZ: number }[]
  >([]);

  return (
    <div>
      <Canvas
        orthographic
        style={{
          aspectRatio: '1 / 1',
          maxHeight: 'calc(100vh - 2rem)',
        }}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.5} />

        {/* Directional Light */}
        <directionalLight position={[30, 30, 30]} intensity={8} />

        <directionalLight position={[60, -30, -30]} intensity={10} />

        {/* Infinite White Plane */}
        <Plane
          rotation={[-Math.PI / 2, 0, 0]}
          args={[MAP_SIZE + 1, MAP_SIZE + 1]}
        >
          <meshStandardMaterial color="white" />
        </Plane>

        {/* Grid Helper */}
        {/* <gridHelper
          args={[MAP_SIZE + 1, MAP_SIZE + 1]}
          position={[0, 0.01, 0]}
        /> */}

        {/* Restricted Area Visualizer */}
        {/* <RestrictedAreaVisualizer restrictedAreas={restrictedAreas} /> */}

        {/* Camera Settings */}
        <CameraController boxPosition={boxPosition} />

        {/* Main Character: Movable Box */}
        <MovableBox
          boxPosition={boxPosition}
          setBoxPosition={setBoxPosition}
          restrictedAreas={restrictedAreas}
        />

        {/* Random Things and Restricted Areas */}
        <RandomThings setRestrictedAreas={setRestrictedAreas} />

        {/* Orbit Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function CameraController({
  boxPosition,
}: {
  boxPosition: [number, number, number];
}) {
  useFrame(({ camera }) => {
    const offset = [1, 2, 4]; // 카메라의 상대적 위치
    const newCameraPosition = [
      boxPosition[0] + offset[0],
      boxPosition[1] + offset[1],
      boxPosition[2] + offset[2],
    ];
    camera.position.set(...(newCameraPosition as [number, number, number]));
    camera.lookAt(...boxPosition); // 박스를 바라보도록 설정
  });

  return null;
}

function MovableBox({
  boxPosition,
  setBoxPosition,
  restrictedAreas,
}: {
  boxPosition: [number, number, number];
  setBoxPosition: React.Dispatch<
    React.SetStateAction<[number, number, number]>
  >;
  restrictedAreas: { minX: number; maxX: number; minZ: number; maxZ: number }[];
}) {
  const speed = 1;

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setBoxPosition((prev) => {
        const [x, y, z] = prev;
        let newX = x;
        let newZ = z;

        switch (event.key) {
          case 'ArrowUp':
            newZ -= speed;
            break;
          case 'ArrowDown':
            newZ += speed;
            break;
          case 'ArrowLeft':
            newX -= speed;
            break;
          case 'ArrowRight':
            newX += speed;
            break;
          default:
            return prev;
        }

        // Prevent moving outside the map boundaries
        if (
          newX < -MAP_SIZE / 2 ||
          newX > MAP_SIZE / 2 ||
          newZ < -MAP_SIZE / 2 ||
          newZ > MAP_SIZE / 2
        ) {
          console.log('Blocked: Outside map boundaries'); // 디버깅 로그
          return prev;
        }

        // Check if the new position is in any restricted area
        const isInRestrictedArea = restrictedAreas.some(
          (area) =>
            newX >= area.minX &&
            newX <= area.maxX &&
            newZ >= area.minZ &&
            newZ <= area.maxZ,
        );

        if (isInRestrictedArea) {
          console.log('Blocked: In restricted area'); // 디버깅 로그
          return prev; // Prevent movement if in restricted area
        }

        return [newX, y, newZ];
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [restrictedAreas, setBoxPosition]);

  return (
    <mesh position={boxPosition}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function RandomThings({
  setRestrictedAreas,
}: {
  setRestrictedAreas: React.Dispatch<
    React.SetStateAction<
      { minX: number; maxX: number; minZ: number; maxZ: number }[]
    >
  >;
}) {
  const colors = [
    '#C30E59',
    '#E82561',
    '#7C444F',
    '#9F5255',
    '#E16A54',
    '#F39E60',
    '#AA5486',
  ];

  const positions = React.useMemo(() => {
    const range = MAP_SIZE / 2 - 1;
    return colors.map(() => {
      const x = Math.floor(Math.random() * range * 2 - range);
      const z = Math.floor(Math.random() * range * 2 - range);
      return [x, 0.5, z] as [number, number, number];
    });
  }, []);

  React.useEffect(() => {
    const restrictedAreas = positions.map(([x, , z]) => ({
      minX: x - 0.5, // Define a 2-unit margin around the obstacle
      maxX: x + 0.5,
      minZ: z - 0.5,
      maxZ: z + 0.5,
    }));

    setRestrictedAreas(restrictedAreas);
  }, [positions, setRestrictedAreas]);

  return (
    <>
      {positions.map((position, index) => (
        <mesh key={index} position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={colors[index]} />
        </mesh>
      ))}
    </>
  );
}

// function RestrictedAreaVisualizer({
//   restrictedAreas,
// }: {
//   restrictedAreas: { minX: number; maxX: number; minZ: number; maxZ: number }[];
// }) {
//   return (
//     <>
//       {restrictedAreas.map((area, index) => {
//         const width = area.maxX - area.minX + 1;
//         const depth = area.maxZ - area.minZ + 1;
//         const centerX = (area.minX + area.maxX) / 2;
//         const centerZ = (area.minZ + area.maxZ) / 2;

//         return (
//           <mesh
//             key={index}
//             position={[centerX, 0, centerZ]}
//             rotation={[-Math.PI / 2, 0, 0]}
//           >
//             {/* Rotate to lie flat on the ground */}
//             <planeGeometry args={[width, depth]} />
//             <meshStandardMaterial color="red" transparent opacity={0.3} />
//           </mesh>
//         );
//       })}
//     </>
//   );
// }

export default App;
