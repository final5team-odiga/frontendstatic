import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [idCheck, setIdCheck] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [language, setLanguage] = useState('한국어');

  const handleNext = () => {
    navigate('/');  // 홈으로 이동
  };

  return (
    <div className="signup-bg">
      <div className="signup-wrapper">
        <div className="signup-content">
          <div className="signup-box">
            <div className="signup-form">
              <label className="signup-label">이름</label>
              <input
                className="signup-input"
                placeholder="이름 입력"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <label className="signup-label">아이디</label>
              <div className="signup-id-row">
                <input
                  className="signup-input"
                  placeholder="아이디 입력"
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
                />
                <button className="signup-id-check-btn">중복<br />확인</button>
              </div>

              <label className="signup-label">비밀번호</label>
              <input
                className="signup-input"
                placeholder="비밀번호 입력"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <input
                className="signup-input"
                placeholder="비밀번호 확인"
                type="password"
                value={passwordCheck}
                onChange={e => setPasswordCheck(e.target.value)}
              />

              <label className="signup-label">국가</label>
              <div className="signup-select-row">
                <select
                  className="signup-select"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                >
                  <option value="">국가 선택</option>
                  <option value="kr">대한민국</option>
                  <option value="us">미국</option>
                </select>
              </div>

              <label className="signup-label">이메일</label>
              <div className="signup-email-row">
                <input
                  className="signup-input"
                  placeholder="이메일 입력"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span className="signup-email-at">@</span>
                <input
                  className="signup-input"
                  placeholder="직접 입력"
                  value={emailDomain}
                  onChange={e => setEmailDomain(e.target.value)}
                />
              </div>

              <button className="signup-next-btn" onClick={handleNext}>다음</button>
            </div>
          </div>
          <div className="signup-side-box signup-side-box-1">
            <img src="/images/magazine3.png" className="signup-side-img" alt="side1" />
          </div>
          <div className="signup-side-box signup-side-box-2">
            <img src="/images/odi-hide.png" className="signup-side-img" alt="side2" />
          </div>
          <img
            src="/images/shadow.png"
            className="signup-bg-shadow"
            alt="bg-shadow"
          />
        </div>
        <button 
          className="language-button"
          onClick={()=>alert("언어 변경 기능은 준비 중입니다.")}> 
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/a24dkv5o_expires_30_days.png"} 
            className="language-icon"
            alt="언어 아이콘"
          />
          <span className="language-text">
            {"한국어"}
          </span>
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/sz4fkhc9_expires_30_days.png"} 
            className="arrow-icon"
            alt="화살표 아이콘"
          />
        </button>
      </div>
    </div>
  );
}