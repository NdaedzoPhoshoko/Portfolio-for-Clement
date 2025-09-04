import React, { useState, useEffect, useRef } from 'react';
import pencilSvg from '../../assets/images/pencil-svgrepo-com.svg';
import './CustomCursor.css';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentPath, setCurrentPath] = useState('');
    const [isFirstMove, setIsFirstMove] = useState(true);
    const [isDrawing, setIsDrawing] = useState(false);
    const svgRef = useRef(null);
    const lastMoveTimeRef = useRef(Date.now());
    const pathPointsRef = useRef([]);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsDrawing(true);
            lastMoveTimeRef.current = Date.now();
            
            const point = { x: e.clientX, y: e.clientY, timestamp: Date.now() };
            pathPointsRef.current.push(point);
            
            // Keep only last 100 points for performance
            if (pathPointsRef.current.length > 100) {
                pathPointsRef.current = pathPointsRef.current.slice(-100);
            }
            
            const pointStr = `${e.clientX},${e.clientY}`;
            
            if (isFirstMove) {
                setCurrentPath(`M${pointStr}`);
                setIsFirstMove(false);
            } else {
                setCurrentPath(prev => prev ? `${prev} L${pointStr}` : `M${pointStr}`);
            }
        };

        // Check if mouse stopped moving
        const checkMouseStop = () => {
            const timeSinceLastMove = Date.now() - lastMoveTimeRef.current;
            if (timeSinceLastMove > 100) { // 100ms threshold
                setIsDrawing(false);
                // Clear the path when mouse stops so it starts fresh on next move
                setCurrentPath('');
                setIsFirstMove(true);
                pathPointsRef.current = [];
            }
        };

        // Add the custom cursor class to body
        document.body.classList.add('custom-cursor-active');

        window.addEventListener('mousemove', updateMousePosition);
        
        const mouseStopInterval = setInterval(checkMouseStop, 50);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            clearInterval(mouseStopInterval);
            document.body.classList.remove('custom-cursor-active');
        };
    }, [isFirstMove]);

    // Clear path points that are older than 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (isDrawing) {
                const now = Date.now();
                pathPointsRef.current = pathPointsRef.current.filter(point => 
                    now - point.timestamp < 3000
                );
                
                // Update current path with remaining points
                if (pathPointsRef.current.length > 0) {
                    const pathString = pathPointsRef.current
                        .map((point, index) => index === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
                        .join(' ');
                    setCurrentPath(pathString);
                } else {
                    setCurrentPath('');
                    setIsFirstMove(true);
                }
            }
        }, 50);

        return () => clearInterval(interval);
    }, [isDrawing]);

    return(
        <>
            <div 
                className="custom-cursor"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
            >
                <img src={pencilSvg} alt="pencil" className="pencil-icon" />
            </div>
            
            {/* SVG for drawing lines */}
            <svg 
                ref={svgRef}
                className="drawing-svg"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 9998
                }}
            >
                {/* Current drawing path */}
                {currentPath && isDrawing && (
                    <path
                        d={currentPath}
                        stroke="#502c2c"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="current-path"
                    />
                )}
            </svg>
        </>
    );
}