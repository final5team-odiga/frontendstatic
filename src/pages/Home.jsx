import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Lottie from "lottie-react";
import magazineAnimation from "../animation/megazine-anime.json";

export default function Home() {
  const lottieRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [totalFrames, setTotalFrames] = useState(0);
  
  // 컴포넌트가 마운트되면 지정된 프레임으로 이동
  useEffect(() => {
    if (lottieRef.current) {
      const anim = lottieRef.current;
      setTimeout(() => {
        if (anim) {
          const frames = anim.getDuration(true);
          setTotalFrames(frames);
          console.log("총 프레임 수:", frames);
          // 초기에는 0프레임에서 멈추기
          anim.goToAndStop(0, true);
        }
      }, 100);
    }
  }, []);

  const handleMouseEnter = () => {
    if (lottieRef.current && !isHovered) {
      setIsLeaving(false);
      setIsHovered(true);
      lottieRef.current.setSpeed(1);
      // 0프레임부터 19프레임까지만 재생
      lottieRef.current.playSegments([0, 19], true);
    }
  };
  
  const handleMouseLeave = () => {
    if (lottieRef.current && isHovered && !isLeaving) {
      setIsLeaving(true);
      lottieRef.current.setSpeed(1.5); // 약간 더 빠른 속도로 역재생
      // 19프레임에서 0프레임으로 역방향 재생
      lottieRef.current.playSegments([19, 0], true);
    }
  };
  
  const handleAnimationComplete = () => {
    // 애니메이션이 완료되면 상태 초기화
    if (isLeaving) {
      setIsHovered(false);
      setIsLeaving(false);
    }
  };

  return (
    <div className="home-bg">
      <div className="home-main">
        <div className="home-left">
          <div className="section-title">여행 매거진 만들기 
            <img 
              src={process.env.PUBLIC_URL + '/images/click.svg'} 
              alt="클릭 유도" 
              className="click-indicator-inline" 
            />
          </div>
          <Link to="/create-magazine" className="magazine-link">
            <div 
              className="magazine-animation"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{position: 'relative'}}
            >
              <Lottie 
                lottieRef={lottieRef}
                animationData={magazineAnimation} 
                loop={false} 
                autoplay={false}
                onComplete={handleAnimationComplete}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid slice',
                  progressiveLoad: false
                }}
              />
              {/* 필요시 주석 해제하여 프레임 수 표시 
              <div className="frame-info">총 프레임 수: {totalFrames}</div>
              */}
            </div>
          </Link>
        </div>
        <div className="home-right">
          <div className="note-center">
            <div className="weather-area">
              <div className="weather-section">
                <div className="weather-row">
                  <span className="weather-label">날씨 :</span>
                  <img src="/images/sun.svg" className="weather-icon" alt="맑음" />
                  <img src="/images/wind.svg" className="weather-icon" alt="바람" />
                  <img src="/images/rain.svg" className="weather-icon" alt="비" />
                  <img src="/images/snow.svg" className="weather-icon" alt="눈" />
                </div>
                <div className="temperature-row">
                  <span className="temperature-label">기온 :</span>
                  <span className="temperature-value">36.5º</span>
                </div>
                <div className="emotion-row">
                  <span className="emotion-label">기분 :</span>
                  <div className="emotion-icons-container">
                    <img src="/images/smile.svg" className="emotion-icon" alt="웃음" />
                    <img src="/images/soso.svg" className="emotion-icon" alt="보통" />
                    <img src="/images/sad.svg" className="emotion-icon" alt="슬픔" />
                    <img src="/images/angry.svg" className="emotion-icon" alt="화남" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-chatbot-center">
            <div className="home-chatbot-area">
              <div className="home-chatbot-bubble">
                &nbsp; &nbsp;안녕하세요.<br/>
                &nbsp; &nbsp;저는 여행기록 도우미 오디에요.<br/>
                &nbsp; &nbsp;오늘 여행은 어땠는지 알려주실래요?
              </div>

              <img src="/images/odi-hi.svg" className="home-chatbot-character" alt="챗봇 캐릭터" />
              <img src="/images/shadow.png" className="home-chatbot-shadow" alt="그림자" />
              <div className="home-chatbot-action">
                <Link to="/travel-record" className="home-chatbot-action-text">
                  대화하기&nbsp;&nbsp; <br/> →&nbsp;&nbsp;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 