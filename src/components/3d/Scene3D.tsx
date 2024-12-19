import { Text3D, Center } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { Suspense } from 'react';

const BrandText = () => {
  const font = useLoader(FontLoader, '/fonts/helvetiker_regular.typeface.json');

  return (
    <Center>
      <Text3D
        font={font}
        size={1.5}
        height={2}
        curveSegments={12}
      >
        {`BRANDZEY`}
        <meshStandardMaterial color="#9333ea" />
      </Text3D>
    </Center>
  );
};

export default function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <BrandText />
      </Suspense>
    </>
  );
}