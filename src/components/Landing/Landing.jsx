import React, { useEffect } from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = ({playMusic}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const soundControl = document.getElementById('soundControl');
        
        // Create stars
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            createStar(starsContainer);
        }
        
        // Create balloons
        for (let i = 0; i < 10; i++) {
            createBalloon();
        }
        
        // Create confetti
        for (let i = 0; i < 30; i++) {
            createConfetti();
        }

        // Start button click event
        const startButton = document.getElementById('startButton');
        const welcomeCard = document.getElementById('welcomeCard');
        
        startButton.addEventListener('click', function() {
            // Add celebration effect on click
            for (let i = 0; i < 50; i++) {
                createConfetti();
            }
            
            // Scale and rotate the card before fade out
            welcomeCard.style.transform = 'scale(1.1) rotate(5deg)';
            
            // Fade out welcome card after brief scale effect
            setTimeout(() => {
                welcomeCard.style.opacity = '0';
                welcomeCard.style.transform = 'scale(0.8) rotate(-10deg)';
            }, 300);
            
            // After fade-out, redirect to next page
            setTimeout(function() {
                clearAnimations(); // Clear animations before navigating
                navigate('/memory'); // Update with your next page
            }, 1500);
        });
        
        // Start rose petals animation
        const petalInterval = setInterval(createRosePetal, 200);

        return () => {
            clearInterval(petalInterval); // Cleanup on unmount
            clearAnimations(); // Clear animations on unmount
        };
    }, []);

    // Function to clear all animations
    const clearAnimations = () => {
        const stars = document.querySelectorAll('.main-landing-container__star');
        const balloons = document.querySelectorAll('.main-landing-container__balloon');
        const confettis = document.querySelectorAll('.main-landing-container__confetti');
        const petals = document.querySelectorAll('.main-landing-container__petal');

        stars.forEach(star => star.remove());
        balloons.forEach(balloon => balloon.remove());
        confettis.forEach(confetti => confetti.remove());
        petals.forEach(petal => petal.remove());
    };

    // Function to create stars
    const createStar = (container) => {
        const star = document.createElement('div');
        star.classList.add('main-landing-container__star');
        
        // Random sizing
        const size = Math.random() * 0.5 + 0.5;
        star.style.transform = `scale(${size})`;
        
        // Random positioning
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 3 + 1;
        star.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        container.appendChild(star);
    };

    // Function to create balloons
    const createBalloon = () => {
        const balloon = document.createElement('div');
        balloon.classList.add('main-landing-container__balloon');
        
        // Random sizing
        const size = Math.random() * 30 + 30;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.25}px`;
        
        // Random colors
        const colors = ['#ff5e8a', '#5e8aff', '#8aff5e', '#ff8a5e', '#a15eff'];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random positioning
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.top = `${Math.random() * 50 + 50}%`;
        
        // Animation duration and delay
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        balloon.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        document.querySelector('.main-landing-container').appendChild(balloon);
    };

    // Function to create confetti
    const createConfetti = () => {
        const confetti = document.createElement('div');
        confetti.classList.add('main-landing-container__confetti');
        
        // Random shape
        const shapes = ['square', 'rectangle', 'circle'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'rectangle') {
            confetti.style.width = '8px';
            confetti.style.height = '16px';
        }
        
        // Random color
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', 
                        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', 
                        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random position
        confetti.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        confetti.style.animation = `confettiFall ${duration}s linear forwards`;
        
        // Slightly random rotation
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.querySelector('.main-landing-container').appendChild(confetti);
        
        // Remove the confetti after animation completes
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    };

    // Function to create rose petals
    const createRosePetal = () => {
        const petal = document.createElement('div');
        petal.classList.add('main-landing-container__petal');
        
        // Random sizing
        const size = Math.random() * 15 + 15;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.4}px`;
        
        // Random shades of pink for petals
        const hue = Math.floor(Math.random() * 20) + 340; // Pink hues
        const saturation = Math.floor(Math.random() * 30) + 70; // High saturation
        const lightness = Math.floor(Math.random() * 20) + 60; // Medium to high lightness
        petal.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        // Random position at the top
        petal.style.left = `${Math.random() * 100}%`;
        
        // Random rotation
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.querySelector('.main-landing-container').appendChild(petal);
        
        // Animate falling
        const fallDuration = Math.random() * 5 + 3;
        const fallDistance = window.innerHeight + 50;
        const horizontalMovement = (Math.random() - 0.5) * 200; // Random left/right drift
        
        let startTime = null;
        
        function animatePetal(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (fallDuration * 1000);
            
            if (progress < 1) {
                const verticalPosition = progress * fallDistance;
                const horizontalPosition = parseFloat(petal.style.left) + (horizontalMovement * progress / 100);
                const rotation = parseFloat(petal.style.transform.replace('rotate(', '').replace('deg)', '')) + progress * 360;
                
                petal.style.top = `${verticalPosition}px`;
                petal.style.left = `${horizontalPosition}%`;
                petal.style.transform = `rotate(${rotation}deg)`;
                petal.style.opacity = 1 - (progress * 0.7); // Fade out as it falls
                
                requestAnimationFrame(animatePetal);
            } else {
                petal.remove();
            }
        }
        
        requestAnimationFrame(animatePetal);
    };

    // Clear animations when navigating away
    useEffect(() => {
        return () => {
            clearAnimations(); // Clear animations on page change
            // Do not stop the music on page change
        };
    }, []);


    return (
        <div className="main-landing-container">
            <div className="main-landing-container__stars" id="stars"></div>

            <div className="main-landing-container__welcome-card" id="welcomeCard">
                <div className="main-landing-container__ribbon">
                    <span className="main-landing-container__ribbon-content">Special Day!</span>
                </div>

                <div className="main-landing-container__celebration-border"></div>

                <h1 className="main-landing-container__title">Happy Birthday, My Love! 🎉</h1>
                <p className="main-landing-container__description">Today is all about you — the light of my life. I've prepared a little journey filled with surprises just for you. Let's begin…</p>

                <div className="main-landing-container__heart-button-container">
                    <div className="main-landing-container__heart-pulse">
                        <div className="main-landing-container__pulse-ring"></div>
                        <div className="main-landing-container__pulse-ring"></div>
                        <div className="main-landing-container__pulse-ring"></div>
                    </div>
                    <div className="main-landing-container__heart-button" id="startButton">
                        <img className="main-landing-container__heart-button-img" src="images/heart.webp" alt="heart_image" />
                        <div className="main-landing-container__heart-button-text">Begin</div>
                    </div>
                </div>
            </div>

            <div className="main-landing-container__sound-control" id="soundControl" onClick={()=>playMusic('audio/bdy_tune.mp3')}>
                <svg className="main-landing-container__sound-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d84c93" style={{display:'block'}}>
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
                <svg className="main-landing-container__mute-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d84c93" style={{display:'none'}}>
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
            </div>

            <div className="main-landing-container__cake-icon"></div>
            <div className="main-landing-container__gift-icon"></div>
        </div>
    );
};

export default Landing;
