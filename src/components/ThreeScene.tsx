"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const animationRef = useRef<number>(0);
  const scrollProgressRef = useRef(0);
  const geometryRef = useRef<THREE.BoxGeometry | null>(null);
  const materialRef = useRef<THREE.MeshNormalMaterial | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // 흰색 배경
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5); // 카메라 위치를 위로 조정
    camera.lookAt(0, 0, 0); // 카메라가 중앙을 바라보도록 설정
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Cube setup
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;
    geometryRef.current = geometry;
    materialRef.current = material;

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Handle scroll
    const handleScroll = () => {
      if (!containerRef.current) return;

      const parentElement = containerRef.current.parentElement;
      if (!parentElement) return;

      const parentRect = parentElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 부모 div가 화면에 보이는 동안의 스크롤 진행도 계산
      if (parentRect.top <= 0 && parentRect.bottom >= 0) {
        // 뷰포트 높이를 기준으로 진행도 계산
        const totalScrollDistance = viewportHeight;
        const scrolledDistance = Math.abs(parentRect.top);
        const progress = Math.min(scrolledDistance / totalScrollDistance, 1);

        scrollProgressRef.current = progress;
      }
    };

    // 스크롤 이벤트 리스너
    window.addEventListener("scroll", handleScroll);

    // Animation loop
    const animate = () => {
      if (!cubeRef.current) return;

      // Rotate cube based on scroll progress
      cubeRef.current.rotation.y = scrollProgressRef.current * Math.PI * 4;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

      // Cancel animation frame
      cancelAnimationFrame(animationRef.current);

      // Remove renderer from DOM
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      // Dispose of Three.js resources
      if (cubeRef.current) {
        scene.remove(cubeRef.current);
        cubeRef.current = null;
      }

      if (geometryRef.current) {
        geometryRef.current.dispose();
        geometryRef.current = null;
      }

      if (materialRef.current) {
        materialRef.current.dispose();
        materialRef.current = null;
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      // Clear scene
      if (sceneRef.current) {
        sceneRef.current.clear();
        sceneRef.current = null;
      }

      // Reset camera
      cameraRef.current = null;

      // Reset scroll progress
      scrollProgressRef.current = 0;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 h-screen"
      style={{
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
