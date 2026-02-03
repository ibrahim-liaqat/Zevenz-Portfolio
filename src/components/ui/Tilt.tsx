import React, { useState, useRef } from 'react';
import type { MouseEvent } from 'react';

interface TiltProps {
    children: React.ReactNode;
    className?: string;
    perspective?: number;
    max?: number;
    scale?: number;
    style?: React.CSSProperties;
}

export default function Tilt({
    children,
    className = '',
    perspective = 1000,
    max = 10,
    scale = 1.02,
    style = {}
}: TiltProps) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -max;
        const rotateY = ((x - centerX) / centerX) * max;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            className={`transition-transform duration-200 ease-out ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                transform: isHovered
                    ? `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`
                    : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
                transformStyle: 'preserve-3d',
            }}
        >
            {children}
        </div>
    );
}
