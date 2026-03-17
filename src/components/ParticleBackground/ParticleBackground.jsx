import React, { useEffect, useRef } from 'react';
import { 
    Scene, PerspectiveCamera, WebGLRenderer, BufferGeometry, 
    BufferAttribute, PointsMaterial, Points, AdditiveBlending, Vector2 
} from 'three';
import './ParticleBackground.css';

const ParticleBackground = () => {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // Scene set up
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 100;

        const renderer = new WebGLRenderer({ antialias: false, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Particles
        const particlesCount = 8000;
        const positions = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 500;
        }

        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new BufferAttribute(positions, 3));

        const material = new PointsMaterial({
            size: 2,
            color: 0x00f3ff,
            transparent: true,
            opacity: 0.8,
            blending: AdditiveBlending,
            depthWrite: false,
        });

        const particleSystem = new Points(geometry, material);
        scene.add(particleSystem);

        // Mouse interaction
        const mouse = new Vector2(0, 0);
        const targetMouse = new Vector2(0, 0);
        
        const onMouseMove = (event) => {
            targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        // Animation
        let requestId;
        const animate = () => {
            requestId = requestAnimationFrame(animate);

            // Smooth mouse transition
            mouse.lerp(targetMouse, 0.05);

            particleSystem.rotation.y += 0.0002;
            particleSystem.rotation.x += 0.0001;

            const posArray = geometry.attributes.position.array;
            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                
                // Drift
                posArray[i3 + 1] -= 0.05;
                if (posArray[i3 + 1] < -250) posArray[i3 + 1] = 250;

                // Mouse interaction - magnetic pull (more subtle)
                const dx = posArray[i3] - (mouse.x * 200);
                const dy = posArray[i3 + 1] - (mouse.y * 200);
                const distSq = dx * dx + dy * dy;
                
                if (distSq < 2500) { // 50 units
                    posArray[i3] -= dx * 0.01;
                    posArray[i3 + 1] -= dy * 0.01;
                }
            }
            geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(requestId);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return <div ref={containerRef} className="particle-background" />;
};

export default ParticleBackground;
