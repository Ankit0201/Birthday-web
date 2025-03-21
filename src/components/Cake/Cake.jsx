import React, { useEffect, useState } from 'react';
import './Cake.css';
import { useNavigate } from 'react-router-dom';

const Cake = (playMusic) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const backgroundMusic = React.useRef(null);
    const blowSound = React.useRef(null);
    const birthdayMessageRef = React.useRef(null);
    const nextButtonRef = React.useRef(null);
    const confettiContainerRef = React.useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        const floatingElements = document.querySelector('.main-cake-container__floating-elements');

        // Create hearts
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('main-cake-container__heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${15 + Math.random() * 10}s`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.opacity = `${0.4 + Math.random() * 0.5}`;
            heart.style.transform = `scale(${0.7 + Math.random()})`;
            floatingElements.appendChild(heart);
        }

        // Create balloons
        // for (let i = 0; i < 6; i++) {
        //     const balloon = document.createElement('div');
        //     balloon.classList.add('main-cake-container__balloon');
        //     balloon.style.left = `${Math.random() * 100}%`;
        //     balloon.style.animationDuration = `${20 + Math.random() * 15}s`;
        //     balloon.style.animationDelay = `${Math.random() * 10}s`;

        //     const colors = [
        //         'linear-gradient(to right, #ff86b6, #ff4181)',
        //         'linear-gradient(to right, #86b3ff, #4181ff)',
        //         'linear-gradient(to right, #ffcd74, #ffa502)',
        //         'linear-gradient(to right, #74ffd4, #00c17f)',
        //         'linear-gradient(to right, #c274ff, #7b02ff)'
        //     ];
        //     balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        //     balloon.style.background += ', radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent)';
        //     floatingElements.appendChild(balloon);
        // }

        // Create stars
        for (let i = 0; i < 12; i++) {
            const star = document.createElement('div');
            star.classList.add('main-cake-container__stars');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDuration = `${5 + Math.random() * 5}s`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.transform = `scale(${0.5 + Math.random() * 0.8})`;
            floatingElements.appendChild(star);
        }

        // Show birthday message after a delay
        setTimeout(() => {
            birthdayMessageRef.current.classList.add('visible');
            setTimeout(() => {
                nextButtonRef.current.classList.add('visible');
            }, 2000);
        }, 1500);

        // Candle blowing interaction
        const candles = document.querySelectorAll('.main-cake-container__candle');
        let blownCandles = 0;

        candles.forEach(candle => {
            candle.addEventListener('click', function() {
                if (!this.classList.contains('blown')) {
                    this.classList.add('blown');
                    blownCandles++;
                    blowSound.current.currentTime = 0;
                    blowSound.current.play();

                    if (blownCandles === candles.length) {
                        createConfetti();
                        birthdayMessageRef.current.classList.add('visible');
                        nextButtonRef.current.classList.add('visible');
                    }
                }
            });
        });

        // Create confetti
        function createConfetti() {
            const confettiContainer = confettiContainerRef.current;
            confettiContainer.classList.add('active');

            const colors = [
                '#ff4757', '#ff6b81', '#ff8a9e', '#70a1ff', 
                '#7bed9f', '#ffdd59', '#ff9ff3', '#5352ed'
            ];

            for (let i = 0; i < 150; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('main-cake-container__confetti');
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = `${5 + Math.random() * 10}px`;
                confetti.style.height = `${5 + Math.random() * 10}px`;
                confetti.style.opacity = Math.random();
                confetti.style.animationDuration = `${3 + Math.random() * 5}s`;
                confetti.style.animationDelay = `${Math.random() * 2}s`;

                const shapeTypes = ['circle', 'square', 'triangle', 'rectangle'];
                const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                } else if (shape === 'triangle') {
                    confetti.style.width = '0';
                    confetti.style.height = '0';
                    confetti.style.backgroundColor = 'transparent';
                    confetti.style.borderLeft = `${5 + Math.random() * 10}px solid transparent`;
                    confetti.style.borderRight = `${5 + Math.random() * 10}px solid transparent`;
                    confetti.style.borderBottom = `${10 + Math.random() * 15}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
                } else if (shape === 'rectangle') {
                    confetti.style.width = `${2 + Math.random() * 8}px`;
                    confetti.style.height = `${10 + Math.random() * 15}px`;
                }

                confettiContainer.appendChild(confetti);
            }

            setTimeout(() => {
                confettiContainer.innerHTML = '';
                confettiContainer.classList.remove('active');
            }, 7000);
        }

        // Next button functionality
        nextButtonRef.current.addEventListener('click', function() {
            // window.location.href = 'gift.html';
            navigate('/gift')

        });

        // Optional: Create confetti when user clicks on cake
        document.querySelector('.main-cake-container__cake').addEventListener('click', createConfetti);

        // Add touch events for mobile
        document.addEventListener('touchstart', function() {
            if (!isPlaying) {
                audioControl.click();
            }
        }, { once: true });

    }, [isPlaying]);

    return (
        <div className="main-cake-container">
            {/* <!-- Floating elements background --> */}
            <div className="main-cake-container__floating-elements"></div>

            {/* <!-- Background audio --> */}
            <audio ref={backgroundMusic} id="backgroundMusic" loop>
                <source src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_217c0a26f9.mp3?filename=easy-lifestyle-137766.mp3" type="audio/mpeg" />
            </audio>

            {/* <!-- Blowing sound effect --> */}
            <audio ref={blowSound} id="blowSound">
                <source src="audio/candle.mp3" type="audio/mpeg" />
            </audio>

            {/* <!-- Gift boxes and decorations --> */}
            <div className="main-cake-container__gift-box main-cake-container__gift-box1" style={{ bottom: '5%', left: '15%', '--delay': 1 }}>
                <div className="main-cake-container__gift-box-ribbon"></div>
                <div className="main-cake-container__gift-box-lid"></div>
                <div className="main-cake-container__gift-box-body"></div>
            </div>

            <div className="main-cake-container__gift-box main-cake-container__gift-box2" style={{ bottom: '7%', right: '15%', '--delay': 2 }}>
                <div className="main-cake-container__gift-box-ribbon"></div>
                <div className="main-cake-container__gift-box-lid"></div>
                <div className="main-cake-container__gift-box-body"></div>
            </div>

            {/* <!-- Ribbon decorations --> */}
            <div className="main-cake-container__ribbon" style={{ top: '10%', left: '10%' }}></div>
            <div className="main-cake-container__ribbon" style={{ bottom: '10%', right: '10%' }}></div>

            {/* <!-- Cake container --> */}
            <div className="main-cake-container__cake-container">
                {/* <!-- Decorative flowers --> */}
                <div className="main-cake-container__flower main-cake-container__decoration" style={{ bottom: '40px', left: '-40px', '--delay': 0 }}></div>
                <div className="main-cake-container__flower main-cake-container__decoration" style={{ bottom: '30px', right: '-35px', '--delay': 1 }}></div>

                <div className="main-cake-container__cake">
                    {/* <!-- Candles --> */}
                    <div className="main-cake-container__candles-container">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="main-cake-container__candle" data-index={index + 1} style={{ '--delay': index }}></div>
                        ))}
                    </div>

                    {/* <!-- Cake layers --> */}
                    <div className="main-cake-container__cake-layer main-cake-container__layer-3"></div>
                    <div className="main-cake-container__cake-layer main-cake-container__layer-2"></div>
                    <div className="main-cake-container__cake-layer main-cake-container__layer-1"></div>
                    <div className="main-cake-container__name">꧁❤•༆KITTU༆•❤꧂</div>
                    <div className="main-cake-container__cake-plate"></div>
                </div>
            </div>

            {/* <!-- Birthday message --> */}
            <div className="main-cake-container__birthday-message" id="birthdayMessage" ref={birthdayMessageRef}>
                <div className="main-cake-container__message-text">
                    ✨ Happy Birthday, Madam Ji! ✨<br />
                    You make my world beautiful and bright!<br />
                    ❤️ Aapke sath har moment accha lagta he. ❤️
                </div>
                <button className="main-cake-container__next-button" id="nextButton" ref={nextButtonRef}>Continue to Your Surprise <i className="fas fa-arrow-right"></i></button>
            </div>

            {/* <!-- Confetti container --> */}
            <div className="main-cake-container__confetti-container" id="confettiContainer" ref={confettiContainerRef}></div>
        </div>
    );
};

export default Cake;
