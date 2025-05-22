import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-bg">
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
              회원가입 | 로그인 | 주문조회 | 문의하기
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
      <div className="home-main">
        <div className="home-left">
          <div className="section-title">여행 매거진</div>
          <div className="weather-section">
            <div className="weather-info">
              <div className="weather-labels">
                <div>날씨</div>
                <div>기온</div>
                <div>기분</div>
              </div>
              <div className="weather-colons">
                <div>:</div>
                <div>:</div>
                <div>:</div>
              </div>
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
        </div>
        <div className="home-right">
          <div className="weather-area">
            {/* 날씨/기온/기분 */}
          </div>
          <div className="chatbot-area">
            {/* 챗봇/캐릭터 */}
          </div>
        </div>
      </div>
    </div>
  );
} 