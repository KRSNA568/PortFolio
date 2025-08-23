
import { OrbitControls } from "@react-three/drei";
import { Astronaut } from "../../components/Astronaut";
import HeroText from "../../components/HeroText";
import ParallaxBackground from "../../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
            <ParallaxBackground/>
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
                <HeroText/>
            </div>

            <div className="absolute inset-0 z-10 pointer-events-none" style={{width:"100vw",height:"100vh"}}>
                <Canvas
                    camera={{ position: [0, 1,3] }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Suspense fallback={null}>
                        <Astronaut  scale ={0.23} position={(0,-1.5,0)}/>
                        <OrbitControls/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}; 

export default Hero;



