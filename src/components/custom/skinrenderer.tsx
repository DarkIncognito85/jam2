import React, { useEffect, useRef } from 'react';
import { SkinViewer, SkinViewerOptions } from 'skinview3d';

interface MinecraftSkinProps {
  skinUrl: string;
}

const MinecraftSkin: React.FC<MinecraftSkinProps> = ({ skinUrl }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const skinViewer = useRef<SkinViewer | null>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    // Initialize SkinViewer when the component mounts
    if (!skinViewer.current && viewerRef.current) {
      const options: SkinViewerOptions = {
        width: 200, // adjust width as needed
        height: 400, // adjust height as needed
        skin: skinUrl,
        model: 'slim' // or 'default' depending on the skin model
      };
      skinViewer.current = new SkinViewer(options);
      viewerRef.current.appendChild(skinViewer.current.canvas);
    }

    // Clean up SkinViewer when the component unmounts
    return () => {
      stopAnimation();
      if (skinViewer.current) {
        skinViewer.current.dispose();
      }
    };
  }, [skinUrl]);

  useEffect(() => {
    // Start the animation when the skinUrl changes
    startAnimation();
    return stopAnimation;
  }, [skinUrl]);

  const startAnimation = () => {
    let rotation = 0;
    const animate = () => {
      rotation += 0.1; // Adjust speed as needed
      if (skinViewer.current) {
        skinViewer.current.playerObject.rotation.y = rotation;
        skinViewer.current.render();
      }
      animationFrame.current = requestAnimationFrame(animate);
    };
    animate();
  };

  const stopAnimation = () => {
    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  };

  return <div ref={viewerRef}></div>;
};

export default MinecraftSkin;
