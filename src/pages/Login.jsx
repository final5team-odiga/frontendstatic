import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [input1, onChangeInput1] = useState('');
  const [input2, onChangeInput2] = useState('');
  const [keepLogin, setKeepLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // 여기에 실제 로그인 API 호출 로직을 추가하세요
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: input1,
          password: input2,
          keepLogin: keepLogin
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // 로그인 성공 시 토큰 저장
        localStorage.setItem('token', data.token);
        // 메인 페이지로 이동
        navigate('/main');
      } else {
        alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  const handleSignUp = () => {
    navigate('/agreement');
  };

  return (
    <div className="login-page-bg">
      <div className="magazine-title">
        <img src="/images/text-background.png" className="text-bg-img" alt="" />
        <span className="magazine-title-text">" 나만의 여행 매거진 "</span>
      </div>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-content">
            <div className="login-form-container">
              <div className="login-form-wrapper">
                <div className="login-form">
                  <div className="logo-container">
                    <img
                      src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/AiqsF1Zsxi/mjruaqtj_expires_30_days.png"} 
                      className="logo"
                      alt="로고"
                    />
                  </div>
                  <input
                    placeholder={"아이디"}
                    value={input1}
                    onChange={(event)=>onChangeInput1(event.target.value)}
                    className="id-input"
                  />
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder={"비밀번호"}
                      value={input2}
                      onChange={(event)=>onChangeInput2(event.target.value)}
                      className="password-input"
                    />
                    <button
                      type="button"
                      className="password-visibility-btn"
                      onClick={() => setShowPassword((prev) => !prev)}
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <img src="images/eye-open.png" alt="비밀번호 보이기" />
                      ) : (
                        <img src="images/eye-closed.png" alt="비밀번호 숨기기" />
                      )}
                    </button>
                  </div>
                  <button type="button" className="keep-login" onClick={() => setKeepLogin(!keepLogin)}>
                    <img
                      src={keepLogin ? "/images/check-on2.png" : "/images/check-off1.png"}
                      className="checkbox-icon"
                      alt="체크박스"
                    />
                    <span className="keep-login-text">
                      {"로그인 상태 유지"}
                    </span>
                  </button>
                  <button 
                    onClick={handleLogin}
                    className="login-button">
                    <span className="login-button-text">
                      {"로 그 인"}
                    </span>
                  </button>
                </div>
                <img 
                    src="/images/magazine1.png" 
                    className="magazine-bg-img_1" 
                    alt="" 
                />
                <img
                  src="/images/magazine2.png"
                  className="magazine-bg-img_2"
                  alt="배경 이미지"
                />
              </div>
              <div className="signup-link-wrap">
                <span>회원이 아니신가요?</span>
                <span
                  onClick={handleSignUp}
                  className="signup-link-text"
                  tabIndex={0}
                  role="button"
                  style={{ marginLeft: '6px' }}
                >
                  회원가입
                </span>
              </div>
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
      </div>
    </div>
  );
}