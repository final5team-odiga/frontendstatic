import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-header">
          <div className="header-content">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/r4tnkpw7_expires_30_days.png"
              className="header-logo"
              alt="로고"
            />
            <span className="header-menu">여행기록</span>
            <span className="header-menu">매거진</span>
            <span className="header-menu community">커뮤니티</span>
            <div className="header-right">
              <span className="header-links">
                회원가입 | 로그인 | 주문조회 | 고객센터
              </span>
              <div className="header-icons">
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/0yye59c2_expires_30_days.png"
                  className="header-icon"
                  alt="아이콘1"
                />
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/qsnexk7t_expires_30_days.png"
                  className="header-icon"
                  alt="아이콘2"
                />
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/8n6v7u5o_expires_30_days.png"
                  className="header-icon"
                  alt="아이콘3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="weather-section">
          <span className="section-title">여행 매거진</span>
          <div className="weather-info">
            <span className="weather-labels">날씨\n기온\n기분</span>
            <span className="weather-colons">:\n:\n:</span>
            <div className="weather-icons">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/8tw3k8bg_expires_30_days.png"
                className="weather-icon"
                alt="날씨 아이콘1"
              />
              <span className="temperature">36.5º</span>
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/5kn123d3_expires_30_days.png"
                className="weather-icon"
                alt="날씨 아이콘2"
              />
            </div>
            <div className="weather-icons">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/qguh32id_expires_30_days.png"
                className="weather-icon"
                alt="날씨 아이콘3"
              />
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/7qeq7yza_expires_30_days.png"
                className="weather-icon"
                alt="날씨 아이콘4"
              />
            </div>
            <div className="weather-icons">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/h2wu7wd9_expires_30_days.png"
                className="weather-icon"
                alt="날씨 아이콘5"
              />
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/is28evs4_expires_30_days.png"
                className="weather-icon"
                alt="날씨 아이콘6"
              />
            </div>
            <div className="weather-icons">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/zrwdba6a_expires_30_days.png"
                className="weather-icon"
                alt="날씨 아이콘7"
              />
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/ea8nkqpl_expires_30_days.png"
                className="weather-icon"
                alt="날씨 아이콘8"
              />
            </div>
          </div>
        </div>

        <div className="chat-section">
          <div className="chat-container">
            <div className="chat-bubble">
              <span className="chat-text">
                안녕하세요. 저는 여행기록 도우미 오디에요. 오늘 여행은 어땠는지 알려주실래요?
              </span>
            </div>
            <div className="chat-action">
              <span className="chat-link">대화하기</span>
            </div>
            <div className="chat-arrow">
              <span className="arrow-text">→</span>
            </div>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/dzyqfpnb_expires_30_days.png"
              className="chat-image"
              alt="채팅 이미지"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 