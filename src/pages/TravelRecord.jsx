import React, { useState, useRef, useEffect } from 'react';
import '../styles/TravelRecord.css';
import { FaCamera, FaSmile, FaCloudSun, FaMapMarkerAlt, FaThermometerHalf, FaPlus, FaMinus, FaTimes, FaMicrophone, FaVolumeUp, FaComments } from 'react-icons/fa';

const TravelRecord = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedWeather, setSelectedWeather] = useState('');
  const [selectedTemperature, setSelectedTemperature] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [locations, setLocations] = useState([]);
  const [images, setImages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [showChatRoom, setShowChatRoom] = useState(false);
  const [showVoiceMode, setShowVoiceMode] = useState(false);
  const [voiceBotText, setVoiceBotText] = useState('오늘 여행은 어떠셨나요?');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const [selectedSeason, setSelectedSeason] = useState('');

  const seasons = ['🌸 봄', '☀️ 여름', '🍂 가을', '❄️ 겨울'];
  const moods = ['😊 행복', '😌 평온', '😄 신나', '😔 우울', '😡 화나', '😴 피곤'];
  const weathers = ['☀️ 맑음', '⛅️ 구름', '🌧️ 비', '❄️ 눈', '🌪️ 바람'];
  const temperatures = ['🔥 더움', '😊 적당함', '❄️ 추움'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // TTS: 챗봇 마지막 메시지 읽기
  const handleTTS = () => {
    const lastBotMsg = [...messages].reverse().find(m => m.type === 'bot');
    if (lastBotMsg && window.speechSynthesis) {
      const utter = new window.SpeechSynthesisUtterance(lastBotMsg.content);
      utter.lang = 'ko-KR';
      window.speechSynthesis.cancel(); // 기존 음성 중지
      window.speechSynthesis.speak(utter);
    }
  };

  // STT: 마이크로 입력 (채팅)
  const handleSTT = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
      return;
    }
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'ko-KR';
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };
      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    setIsListening(true);
    recognitionRef.current.start();
  };

  // 음성모드: STT
  const handleVoiceSTT = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
      return;
    }
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.lang = 'ko-KR';
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    setVoiceBotText('듣고 있어요...');
    recog.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setVoiceBotText('질문을 분석 중입니다...');
      // 실제 GPT API 연동 대신 예시 답변
      setTimeout(() => {
        const answer = `오디의 답변: ${transcript}에 대해 더 알려드릴게요!`;
        setVoiceBotText(answer);
        handleVoiceTTS(answer);
      }, 1200);
    };
    recog.onerror = () => {
      setVoiceBotText('음성 인식에 실패했어요. 다시 시도해 주세요.');
    };
    recog.onend = () => {
      setIsListening(false);
    };
    setIsListening(true);
    recog.start();
  };

  // 음성모드: TTS
  const handleVoiceTTS = (text) => {
    if (window.speechSynthesis) {
      setIsSpeaking(true);
      const utter = new window.SpeechSynthesisUtterance(text);
      utter.lang = 'ko-KR';
      utter.onend = () => setIsSpeaking(false);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    }
  };

  const closeVoiceMode = () => {
    setShowVoiceMode(false);
    setVoiceBotText('안녕하세요! 무엇이 궁금하신가요?');
    setIsSpeaking(false);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    const newMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // 챗봇 응답 시뮬레이션
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: '여행 이야기를 들려주셔서 감사해요! 더 자세히 이야기해주세요.',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  // 장소 추가
  const handleAddLocation = (e) => {
    e.preventDefault();
    const trimmed = locationInput.trim();
    if (trimmed && !locations.includes(trimmed)) {
      setLocations([...locations, trimmed]);
      setLocationInput('');
    }
  };

  // 장소 삭제
  const handleRemoveLocation = (index) => {
    setLocations(locations.filter((_, i) => i !== index));
  };

  return (
    <div className="travel-record-container">
      <div className="travel-record-header">
        <h1>여행 기록</h1>
        <p>오디와 대화하며 오늘의 여행을 기록해보세요</p>
      </div>
      <div className="travel-record-content">
        <div className="travel-info-panel">
          <div className="info-section">
            <h3><FaMapMarkerAlt /> 장소</h3>
            <form className="location-row" onSubmit={handleAddLocation}>
              <input
                type="text"
                placeholder="여행 장소를 입력하세요"
                value={locationInput}
                onChange={e => setLocationInput(e.target.value)}
              />
              <button className="add-location-btn" type="submit">
                <FaPlus /> 장소 추가
              </button>
            </form>
            <ul className="location-list-row">
              {locations.map((loc, idx) => (
                <li key={idx} className="location-pill">
                  <span>{loc}</span>
                  <button className="remove-location-btn" onClick={() => handleRemoveLocation(idx)}>
                    <FaTimes />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="info-section">
            <h3>계절</h3>
            <div className="selection-buttons">
              {seasons.map((season) => (
                <button
                  key={season}
                  className={selectedSeason === season ? 'selected' : ''}
                  onClick={() => setSelectedSeason(season)}
                  type="button"
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h3><FaCloudSun /> 날씨</h3>
            <div className="selection-buttons">
              {weathers.map((weather) => (
                <button
                  key={weather}
                  className={selectedWeather === weather ? 'selected' : ''}
                  onClick={() => setSelectedWeather(weather)}
                >
                  {weather}
                </button>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h3><FaThermometerHalf /> 기온</h3>
            <div className="selection-buttons">
              {temperatures.map((temp) => (
                <button
                  key={temp}
                  className={selectedTemperature === temp ? 'selected' : ''}
                  onClick={() => setSelectedTemperature(temp)}
                >
                  {temp}
                </button>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h3><FaSmile /> 기분</h3>
            <div className="selection-buttons">
              {moods.map((mood) => (
                <button
                  key={mood}
                  className={selectedMood === mood ? 'selected' : ''}
                  onClick={() => setSelectedMood(mood)}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          <div className="image-upload-section">
            <h3><FaCamera /> 사진</h3>
            <div className="image-upload-area">
              <input
                type="file"
                id="image-upload"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="image-upload" className="upload-button">
                사진 추가하기
              </label>
            </div>
            <div className="image-preview-grid">
              {images.map((image, index) => (
                <div key={index} className="image-preview-item">
                  <img src={image} alt={`Uploaded ${index + 1}`} />
                  <button onClick={() => removeImage(index)}>×</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chat-section">
          <div className="chat-messages" style={{overflowY: 'auto', maxHeight: '600px'}}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.type}`}
              >
                {message.type === 'bot' && (
                  <img src="/images/odi.png" alt="오디" className="bot-avatar" />
                )}
                <div className="message-content">{message.content}</div>
                <div className="message-timestamp">{message.timestamp}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="여행 이야기를 들려주세요..."
            />
            <button type="button" className={`stt-btn${isListening ? ' listening' : ''}`} onClick={handleSTT} title="음성 입력">
              <FaMicrophone />
            </button>
            <button type="submit">전송</button>
          </form>
          <button className="voice-mode-btn" onClick={() => setShowVoiceMode(true)}>
            <img src="/images/voice.png" alt="음성모드" className="voice-mode-icon" style={{marginRight: '0.5rem', width: '1.5em', height: '1.5em'}} />
            음성모드
          </button>
        </div>
      </div>
      {showChatRoom && (
        <div className="chatbot-modal-overlay">
          <div className="chatbot-room">
            <div className="chatbot-header">
              <img src="/images/odi.png" alt="오디" className="chatbot-header-avatar" />
              <div>
                <div className="chatbot-title">오디와의 대화</div>
                <div className="chatbot-status online">● 온라인</div>
              </div>
              <button className="chatbot-modal-close" onClick={() => setShowChatRoom(false)}><FaTimes /></button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chatbot-bubble-row ${msg.type}`}>
                  {msg.type === 'bot' && <img src="/images/odi.png" className="chatbot-avatar" alt="오디" />}
                  <div className={`chatbot-bubble ${msg.type}`}>{msg.content}</div>
                  {msg.type === 'user' && <div className="user-avatar">나</div>}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form className="chatbot-input-bar" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="여행 이야기를 들려주세요..."
              />
              <button type="button" className={`tts-btn${messages.some(m=>m.type==='bot') ? '' : ' disabled'}`} onClick={handleTTS} title="챗봇 음성 듣기">
                <FaVolumeUp />
              </button>
              <button type="button" className={`stt-btn${isListening ? ' listening' : ''}`} onClick={handleSTT} title="음성 입력">
                <FaMicrophone />
              </button>
              <button type="submit">전송</button>
            </form>
          </div>
        </div>
      )}
      {showVoiceMode && (
        <div className="voice-mode-overlay">
          <div className="voice-mode-center">
            <img src="/images/odi.png" className={`voice-odi-avatar${isSpeaking ? ' speaking' : ''}`} alt="오디" />
            <div className="voice-odi-text">{voiceBotText}</div>
          </div>
          <div className="voice-mode-controls">
            <button className="voice-mic-btn" onClick={handleVoiceSTT} disabled={isListening} title="음성 입력">
              <FaMicrophone />
            </button>
            <button className="voice-close-btn" onClick={closeVoiceMode} title="닫기">
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelRecord; 