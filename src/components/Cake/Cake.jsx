import React, { useEffect, useState } from "react";
import "./Cake.css";
import { useNavigate } from "react-router-dom";

const Cake = ({playMusic}) => {
  const candlesArray = [
    {
      styleLeft: "-127px",
    },
    {
      styleLeft: "-65px",
    },
    {
      styleLeft: "0",
    },
    {
      styleLeft: "65px",
    },
    {
      styleLeft: "127px",
    },
  ];

  const blowSound = React.useRef(null);
  const birthdayMessageRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);
  const confettiContainerRef = React.useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    playMusic('audio/bdy_tune.mp3');
    const floatingElements = document.querySelector(
      ".main-cake-container__floating-elements"
    );

    // Create hearts
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.classList.add("main-cake-container__heart");
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${15 + Math.random() * 10}s`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      heart.style.opacity = `${0.4 + Math.random() * 0.5}`;
      heart.style.transform = `scale(${0.7 + Math.random()})`;
      floatingElements.appendChild(heart);
    }

    // Create stars
    for (let i = 0; i < 12; i++) {
      const star = document.createElement("div");
      star.classList.add("main-cake-container__stars");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${5 + Math.random() * 5}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.transform = `scale(${0.5 + Math.random() * 0.8})`;
      floatingElements.appendChild(star);
    }

    // Show birthday message after a delay
    setTimeout(() => {
      birthdayMessageRef.current.classList.add("visible");
      setTimeout(() => {
        nextButtonRef.current.classList.add("visible");
      }, 4000);
    }, 4000);

    // Next button functionality
    nextButtonRef.current.addEventListener("click", function () {
      // window.location.href = 'gift.html';
      navigate("/gift");
    });

  }, []);

const createConfetti=()=> {
    const confettiContainer = confettiContainerRef.current;
    confettiContainer.classList.add("active");

    const colors = [
      "#ff4757",
      "#ff6b81",
      "#ff8a9e",
      "#70a1ff",
      "#7bed9f",
      "#ffdd59",
      "#ff9ff3",
      "#5352ed",
    ];

    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("main-cake-container__confetti");
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = `${5 + Math.random() * 10}px`;
      confetti.style.height = `${5 + Math.random() * 10}px`;
      confetti.style.opacity = Math.random();
      confetti.style.animationDuration = `${3 + Math.random() * 5}s`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;

      const shapeTypes = ["circle", "square", "triangle", "rectangle"];
      const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

      if (shape === "circle") {
        confetti.style.borderRadius = "50%";
      } else if (shape === "triangle") {
        confetti.style.width = "0";
        confetti.style.height = "0";
        confetti.style.backgroundColor = "transparent";
        confetti.style.borderLeft = `${
          5 + Math.random() * 10
        }px solid transparent`;
        confetti.style.borderRight = `${
          5 + Math.random() * 10
        }px solid transparent`;
        confetti.style.borderBottom = `${10 + Math.random() * 15}px solid ${
          colors[Math.floor(Math.random() * colors.length)]
        }`;
      } else if (shape === "rectangle") {
        confetti.style.width = `${2 + Math.random() * 8}px`;
        confetti.style.height = `${10 + Math.random() * 15}px`;
      }

      confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
      confettiContainer.innerHTML = "";
      confettiContainer.classList.remove("active");
    }, 7000);
  }

  const handleCandleBlown = (i) => {
    createConfetti(); 
    blowSound.current.currentTime = 0;
    blowSound.current.play();
    const main_container_candle = document.querySelectorAll('.main-cake-container__candle1');
    if (main_container_candle[i]) {
      main_container_candle[i].classList.remove('main-cake-container__candle1_active'); // Use class to hide the candle instead of display
    }
  }

  return (
    <div className="main-cake-container">
      {/* <!-- Floating elements background --> */}
      <div className="main-cake-container__floating-elements"></div>

      {/* <!-- Blowing sound effect --> */}
      <audio ref={blowSound} id="blowSound">
        <source src="audio/candle.mp3" type="audio/mpeg" />
      </audio>

      {/* <!-- Gift boxes and decorations --> */}
      <div
        className="main-cake-container__gift-box main-cake-container__gift-box1"
        style={{ bottom: "5%", left: "15%", "--delay": 1 }}
      >
        <div className="main-cake-container__gift-box-ribbon"></div>
        <div className="main-cake-container__gift-box-lid"></div>
        <div className="main-cake-container__gift-box-body"></div>
      </div>

      <div
        className="main-cake-container__gift-box main-cake-container__gift-box2"
        style={{ bottom: "7%", right: "15%", "--delay": 2 }}
      >
        <div className="main-cake-container__gift-box-ribbon"></div>
        <div className="main-cake-container__gift-box-lid"></div>
        <div className="main-cake-container__gift-box-body"></div>
      </div>

      {/* <!-- Ribbon decorations --> */}
      <div
        className="main-cake-container__ribbon"
        style={{ top: "10%", left: "2%" }}
      ></div>
      <div
        className="main-cake-container__ribbon"
        style={{ bottom: "10%", right: "10%" }}
      ></div>

      {/* <!-- Cake container --> */}
      <div className="main-cake-container__cake-container">
        {/* <!-- Decorative flowers --> */}
        <div
          className="main-cake-container__flower main-cake-container__decoration"
          style={{ left: "29px", top: "40px", "--delay": 0 }}
        ></div>
        <div
          className="main-cake-container__flower main-cake-container__decoration"
          style={{ top: "40px", right: "31px", "--delay": 1 }}
        ></div>

        <div className="main-cake-container__cake1">
          {candlesArray.map((candle, index) => (
            <div
              key={index}
              className="main-cake-container__candle1 main-cake-container__candle1_active "
              style={{ left: candle.styleLeft }}
              onClick={()=>handleCandleBlown(index)}
            ></div>
          ))}
          <div className="main-cake-container__top-layer1"></div>
          <div className="main-cake-container__name">꧁❤•༆ K  I  T  T  U ༆•❤꧂</div>
          <div className="main-cake-container__middle-layer1"></div>
          <div className="main-cake-container__bottom-layer1"></div>
        </div>
      </div>

      {/* <!-- Birthday message --> */}
      <div
        className="main-cake-container__birthday-message"
        id="birthdayMessage"
        ref={birthdayMessageRef}
      >
        <div className="main-cake-container__message-text">
          ✨ Happy Birthday, Madam Ji! ✨<br />
          You make my world beautiful and bright!
          <br />
          ❤️ Aapke sath har moment accha lagta he. ❤️
        </div>
        <button
          className="main-cake-container__next-button"
          id="nextButton"
          ref={nextButtonRef}
        >
          Continue to Your Surprise <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {/* <!-- Confetti container --> */}
      <div
        className="main-cake-container__confetti-container"
        id="confettiContainer"
        ref={confettiContainerRef}
      ></div>
    </div>
  );
};

export default Cake;
