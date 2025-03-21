import { useNavigate } from 'react-router-dom';
import './Memory.css';
import { useEffect } from 'react';

const Memory = ({playMusic}) => {
    const navigate = useNavigate();
    const memories = [
        {
            src: "images/first_look.jpg",
            alt: "First Look",
            caption: "The first time I saw you, my heart melted instantly 💓.",
            date: "April 23",
            delay: '0.1s'
        },
        {
            src: "images/first_meet.jpg",
            alt: "First Date Under the Stars",
            caption: "Our first memorable date",
            date: "June 28, 2024",
            delay: '0.2s'
        },
        {
            src: "images/mahakal_place.jpg",
            alt: "Day at Mahakal",
            caption: "A beautiful day spent together at Mahakal.",
            date: "August 15, 2024",
            delay: '0.3s'
        },
        {
            src: "images/citadel.jpg",
            alt: "First Kiss Moment",
            caption: "Moment when our lips met, and time stood still. Pure magic. 💖",
            date: "September 15, 2024",
            delay: '0.4s'
        },
        {
            src: "images/shimcha_1.jpg",
            alt: "Cute Moon",
            caption: "🌙 Like fun with two cute moons 🌙!",
            date: "October 20, 2024",
            delay: '0.5s'
        },
        {
            src: "images/shimcha_2.jpg",
            alt: "Road Trip Memories",
            caption: "Bahut bhari ho but puri life ese hi utha ke rakhna he",
            date: "October 20, 2024",
            delay: '0.6s'
        },
        {
            src: "images/baccha.jpg",
            alt: "Movie Night Fun",
            caption: "Haaye mera cute sa baccha. Bahut masti karta he.",
            date: "September 15, 2024",
            delay: '0.7s'
        },
        {
            src: "images/eye_contact.jpg",
            alt: "Pure Love Moment",
            caption: "In your eyes, I discovered a boundless love that knows no limits. 💖",
            date: "June 10",
            delay: '0.8s'
        },
        {
            src: "images/hug.jpg",
            alt: "Dinner Date with You",
            caption: "My lal pari.",
            delay: '0.9s'
        },
        {
            src: "images/iconic_pose.jpg",
            alt: "Our Iconic Concert Pose",
            caption: "Our iconic pose together, with your adorable cheeks!",
            date: "",
            delay: '0.10s'
        },
        {
            src: "images/new_year.jpg",
            alt: "New Year Celebration",
            caption: "Ty for making my bday special",
            date: "January 1, 2025",
            delay: '0.11s'
        }
    ];
    useEffect(() => {
        // Animation delay for polaroid photos
        const polaroids = document.querySelectorAll(".memory-main-container__polaroid");
        polaroids.forEach((polaroid, index) => {
            polaroid.style.animationDelay = `${index * 0.15}s`;
        });

        // Video modal functionality
        const playButton = document.getElementById("playButton");
        const videoModal = document.getElementById("videoModal");
        const closeButton = document.getElementById("closeButton");
        const video = document.getElementById("specialVideo");

        playButton.addEventListener("click", function () {
            playMusic()
            videoModal.classList.add("active");
            setTimeout(() => {
                video.play();
            }, 500);
        });

        closeButton.addEventListener("click", function () {
            videoModal.classList.remove("active");
            video.pause();
            video.currentTime = 0;
        });

        // Close modal when clicking outside the video
        videoModal.addEventListener("click", function (e) {
            if (e.target === videoModal) {
                videoModal.classList.remove("active");
                video.pause();
                video.currentTime = 0;
            }
        });

        // Surprise button
        const surpriseButton = document.getElementById("surpriseButton");
        surpriseButton.addEventListener("click", function () {
            createConfettiBurst();
            setTimeout(() => {
                navigate('/cake')// Replace 'next_page.html' with the actual URL of the next page
            }, 2000); // Adjust the delay as needed
        });

        // Floating hearts animation
        const heartsContainer = document.getElementById("heartsContainer");
        const heartSymbols = ["❤", "♥", "💕", "💖", "💓", "💗", "💘", "💝"];

        function createHeart() {
            const heart = document.createElement("div");
            heart.className = "memory-main-container__heart";
            heart.textContent =
                heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

            // Random position and animation
            const startPosition = Math.random() * 100;
            const translateX = Math.random() * 150 - 75; // Random movement left or right
            const rotate = Math.random() * 60 - 30; // Random rotation
            heart.style.left = `${startPosition}%`;
            heart.style.setProperty("--translateX", `${translateX}px`);
            heart.style.setProperty("--rotate", `${rotate}deg`);
            heart.style.animationDuration = `${8 + Math.random() * 7}s`; // Random duration
            heart.style.color = `hsl(${340 + Math.random() * 40}, 90%, 65%)`;
            heart.style.fontSize = `${20 + Math.random() * 30}px`;

            heartsContainer.appendChild(heart);

            // Remove heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, 15000);
        }

        // Create hearts at random intervals
        setInterval(createHeart, 600);

        // Create initial hearts
        for (let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 300);
        }

        // Confetti animation
        const confettiContainer = document.getElementById("confettiContainer");
        const confettiColors = [
            "#ff4081",
            "#f50057",
            "#ff80ab",
            "#f8bbd0",
            "#ec407a",
            "#ad1457",
            "#d81b60",
            "#c2185b",
        ];

        function createConfetti() {
            const confetti = document.createElement("div");
            confetti.className = "memory-main-container__confetti-item";

            // Random properties
            const size = Math.random() * 10 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.backgroundColor =
                confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.opacity = Math.random() * 0.8 + 0.2;

            // Random animation duration and delay
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;

            confettiContainer.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 8000);
        }

        function createConfettiBurst() {
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    createConfetti();
                }, i * 20);
            }
        }

        // Create initial confetti
        createConfettiBurst();

        // Create confetti periodically
        setInterval(() => {
            for (let i = 0; i < 5; i++) {
                createConfetti();
            }
        }, 2000);

    }, []);

    return (
        <div className="memory-main-container">
            <div className="memory-main-container__confetti" id="confettiContainer"></div>

            <div className="memory-main-container__content">
                <div className="memory-main-container__ribbon"></div>
                <header className="memory-main-container__header">
                    <h1 className="memory-main-container__title">Happy Birthday!</h1>
                    <p className="memory-main-container__subtitle">
                        Celebrating the most wonderful person in my life...
                    </p>
                </header>

                    <div className="memory-main-container__gallery">
                        {memories.map((memory, index) => (
                            <div className="memory-main-container__polaroid" style={{ '--delay': memory.delay }} key={index}>
                                <img src={memory.src} alt={memory.alt} />
                                <div className="caption">{memory.caption}</div>
                                <div className="date">{memory.date}</div>
                            </div>
                        ))}
                    </div>

                <div className="memory-main-container__message-section">
                    <h2 className="memory-main-container__message-title">A Special Message For You</h2>
                    <p className="memory-main-container__message-content">
                        To the most amazing person I know, on your special day. Every moment
                        spent with you is a blessing, every smile we share a treasure. You
                        light up my world in ways I never thought possible. May this day be
                        as beautiful as your heart, as bright as your smile, and as special
                        as you are to me. I Love you so much my sweetheart ❤️.
                    </p>
                    <div className="memory-main-container__signature">With all my love ❤️</div>
                    <button className="memory-main-container__gift-button" id="surpriseButton">
                        Click For A Surprise!
                    </button>
                </div>

                <div className="memory-main-container__play-button-container">
                    <div className="memory-main-container__play-button-wrapper">
                        <div className="memory-main-container__play-button" id="playButton"></div>
                    </div>
                    <div className="memory-main-container__play-text">Watch Our Special Moments</div>
                </div>

                <div className="memory-main-container__heart-decoration memory-main-container__heart-1">❤</div>
                <div className="memory-main-container__heart-decoration memory-main-container__heart-2">❤</div>
            </div>

            <div className="memory-main-container__modal" id="videoModal">
                <div className="memory-main-container__modal-content">
                    <button className="memory-main-container__close-button" id="closeButton">×</button>
                    <video id="specialVideo" controls>
                        <source src="audio/720_p.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="memory-main-container__hearts-container" id="heartsContainer"></div>
        </div>
    );
};

export default Memory
