import React, { useEffect, useState } from "react";
import "./Gift.css";

const Gift = ({ playMusic }) => {
  const [isTextCompleted, setIsTextCompleted] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLoader, setIsLoader] = useState(false);
  const audio = document.getElementById("audioPlayer");
  const songs = [
    "https://pagalfree.com/musics/128-Tumhare Hi Rahenge Hum - Stree 2 128 Kbps.mp3",
    "https://pagalfree.com/musics/128-Chand Sifarish - Fanaa 128 Kbps.mp3",
    "https://pagalfree.com/musics/128-Tera Fitoor - Genius 128 Kbps.mp3",
    "https://pagalfree.com/musics/128-Tere Liye - 1982 - A Love Marriage 128 Kbps.mp3",
    "https://pagalfree.com/musics/128-Dekha Hazaro Dafaa - Rustom 128 Kbps.mp3",
    "https://pagalfree.com/musics/128-Bas Tera Hoon - Javed-Mohsin 128 Kbps.mp3",
    "https://pagalfree.com/musics/128-Neend Churayee Meri - Ishq 128 Kbps.mp3",
    "https://pagalfree.com/musics/128-Tu Hain Toh Main Hoon - Sky Force 128 Kbps.mp3"
  ];

  const text = `प्रिय हॉट रवीना 💖
🎉 𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 🎉 Meri Kittu 💖🎂

सबसे पहले, thank you so much meri life me aane ke liye. 😘
Aap jaisi jeevansathi khushnaseeb logo ko hi milti hai. 😇
Kya hi tarif karu aapki, itne words hi nahi hai! 🤭

✨ Aapki ankhein itni pyari hain ki bas unhe dekhta rahu. 👀💖
✨ Aapki smile... haye! Sabse best! 😊😍
✨ Aapki julfein aur uski khushbu... bahut hi manmohak hai, but bahut beech me aati hain! 🤭😂

Aap mere liye sab kuch ho! 💖
💞 Meri jaan ho,
💞 Mera cute sa baby ho,
💞 Mera kucchi-mucchi ho,
💞 Meri pyari si ghilki ho! 😘💕

Main Bhagwan se yahi pray karunga ki aapko duniya ki saari khushiyan milein, aur main aapko sari khushiyan doon. 🥰
Main promise karta hoon ki aapke face ki smile kabhi jaane nahi dunga. 😘✨

Kabhi kabhi to aisa lagta hai ki mujhe ek cute sa baby mil gaya hai! 👶💖
Aapke sath hasi-majak me time ka hi pata nahi chalta. ⏳😂
Waise zor to aa raha hai likhne me, par tu apni hai to likh deta hoon. 😜

Chal ab zyada hass mat! 🤭😂
Waise aap bahut samajhdar ho... 😏 (Waise ye samajhdar wala majak hai, serious mat le lena! 🤣)

खुदा करे, सलामत रहें दोनों हमेशा,
एक तुम ❤️ और दूसरा मुस्कुराना तुम्हारा 😊✨!!!

Main aapse bohot bohot pyaar karta hoon. 😘💕
I love you soooooo mucccchhhh my cutie betu sweetu kittu bacchu my cute paadi! 💖🥰

Kehne ko to bahut hai, but wo yaha bayyan nahi ho payega... ❤️✨

Once again, Happy Birthday sweetheart! 🎉🎂🥰💕`;

  const [displayText, setDisplayText] = useState("");
  const heartSymbols = [
    "❤",
    "♥",
    "💕",
    "💖",
    "💓",
    "💗",
    "💘",
    "💝",
    "😍",
    "💋",
  ];

  useEffect(() => {
    playMusic();
    playSongs();
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i));
        i++;
        setTimeout(typeWriter, 50);
        setIsTextCompleted(false);
      } else {
        setIsTextCompleted(true);
      }
    };

    typeWriter();
  }, []);

  useEffect(() => {
    // Create stars
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 100; i++) {
      createStar(starsContainer);
    }
    const createFloatingHeart = () => {
      const heartsContainer = document.getElementById("heartsContainer");
      if (!heartsContainer) return;

      const heart = document.createElement("div");
      heart.classList.add("main-gift-container__heart");
      heart.innerHTML =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

      // Random position
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `0`; // Start from the top
      heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Vary speed

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove(); // Remove heart after animation
      }, 4000);
    };

    const heartInterval = setInterval(createFloatingHeart, 500);

    return () => {
      clearInterval(heartInterval);
      playSongs(true);
    };
  }, []);

  // Function to create stars
  const createStar = (container) => {
    const star = document.createElement("div");
    star.classList.add("main-landing-container__star");

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

  const playSongs = (stop = false, indexNumber = 0) => {
    if (stop) {
      // Stop the current song if needed
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setIsLoader(false)
      }
    } else {
      const audio = document.getElementById("audioPlayer");

      if (audio) {
        setTimeout(() => {
          console.log(indexNumber,"asd");
          
          audio.src = songs[indexNumber];
          audio.play();
          setIsLoader(false)
        }, 1000);

      }
    }
  };

  const handleNextSong = async () => {
    setIsLoader(true);
    const nextIndex =audio.currentTime == 0 ? 0 : (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    playSongs(false,nextIndex);
  };
  return (
    <div className="main-gift-container">
      <div className="main-gift-container__stars" id="stars"></div>
      <div id="heartsContainer"></div> {/* Container for floating hearts */}
      <div className="main-gift-container__wrapper">
        <div style={{ overflow: "hidden" }}>
          <div className="main-gift-container__text">
            <i className="fa-solid fa-heart"></i> To You!{" "}
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="main-gift-container__text-crush">
            {displayText}
            {isTextCompleted}
          </div>
          {isTextCompleted && (
            <div className="main-gift-container__love-container">
              <p className="main-gift-container__love-text main-gift-container__love-text-I" style={{marginTop:'-14px'}}>𝙸</p>
              <div className="main-gift-container__img-cont">
                <img
                  className="main-gift-container__heart-img"
                  src="images/heart.webp"
                  alt=""
                />
              </div>
              <p className="main-gift-container__love-text main-gift-container__love-text-U" style={{fontSize:'102px'}}>𐌵</p>
            </div>
          )}
          {isTextCompleted && (
            <div
              className="main-gift-container__controls"
            >
              <button
                id="muteButton"
                onClick={handleNextSong}
                className="main-gift-container__control-btn"
                disabled={isLoader} // Disable button when isLoader is true
              >
                {!isLoader && <span className="icon">🔊</span>}{" "}
                {isLoader && <div className="icon loader"></div>}
                {currentSongIndex !== null ? "Play Next" : "Music"}
              </button>
            </div>
          )}
          <audio id="audioPlayer" />
        </div>
      </div>
    </div>
  );
};

export default Gift;
