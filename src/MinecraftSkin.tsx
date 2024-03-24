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
    if (!skinViewer.current && viewerRef.current) {
      const options: SkinViewerOptions = {
        width: 200,
        height: 400,
        skin: skinUrl,
        model: 'slim'
      };
      skinViewer.current = new SkinViewer(options);
      viewerRef.current.appendChild(skinViewer.current.canvas);
    }
    return () => {
      stopAnimation();
      if (skinViewer.current) {
        skinViewer.current.dispose();
      }
    };
  }, [skinUrl]);

  useEffect(() => {
    startAnimation();
    return stopAnimation;
  }, [skinUrl]);

  const startAnimation = () => {
    let rotation = 0;
    const animate = () => {
      rotation += 0.1;
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