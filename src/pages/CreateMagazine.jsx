import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateMagazine.css";
// 템플릿 컴포넌트 import
import { Section01 } from "../templates/Section01";
import { Section02 } from "../templates/Section02";
import { Section03 } from "../templates/Section03";
import { Section04 } from "../templates/Section04";
import { Section05 } from "../templates/Section05";
import { Section06 } from "../templates/Section06";
import { Section07 } from "../templates/Section07";
import { Section08 } from "../templates/Section08";
import { Section09 } from "../templates/Section09";
import { Section10 } from "../templates/Section10";
import { Section11 } from "../templates/Section11";
import { Section12 } from "../templates/Section12";
import { Section13 } from "../templates/Section13";
import { Section14 } from "../templates/Section14";
import { Section15 } from "../templates/Section15";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CreateMagazine() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [generatingPDF, setGeneratingPDF] = useState(false);
  const templateRef = useRef(null);

  // 템플릿 목록 정의
  const templates = [
    { id: 1, name: "템플릿 1", component: Section01, image: "/template/section1.svg" },
    { id: 2, name: "템플릿 2", component: Section02, image: "/template/section2.svg" },
    { id: 3, name: "템플릿 3", component: Section03, image: "/template/section3.svg" },
    { id: 4, name: "템플릿 4", component: Section04, image: "/template/section4.svg" },
    { id: 5, name: "템플릿 5", component: Section05, image: "/template/section5.svg" },
    { id: 6, name: "템플릿 6", component: Section06, image: "/template/section6.svg" },
    { id: 7, name: "템플릿 7", component: Section07, image: "/template/section7.svg" },
    { id: 8, name: "템플릿 8", component: Section08, image: "/template/section8.svg" },
    { id: 9, name: "템플릿 9", component: Section09, image: "/template/section9.svg" },
    { id: 10, name: "템플릿 10", component: Section10, image: "/template/section10.svg" },
    { id: 11, name: "템플릿 11", component: Section11, image: "/template/section11.svg" },
    { id: 12, name: "템플릿 12", component: Section12, image: "/template/section12.svg" },
    { id: 13, name: "템플릿 13", component: Section13, image: "/template/section13.svg" },
    { id: 14, name: "템플릿 14", component: Section14, image: "/template/section14.svg" },
    { id: 15, name: "템플릿 15", component: Section15, image: "/template/section15.svg" },
  ];

  useEffect(() => {
    // 템플릿이 선택되면 템플릿 선택 화면 닫기
    if (selectedTemplate) {
      setShowTemplates(false);
    }
  }, [selectedTemplate]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        setCoverImage(event.target.result);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  // 템플릿 미리보기 페이지로 이동하는 함수
  const goToTemplatePreview = () => {
    if (!selectedTemplate) {
      alert("템플릿을 먼저 선택해주세요.");
      return;
    }

    // 선택된 템플릿과 입력한 데이터를 state로 전달
    navigate(`/template-preview/${selectedTemplate.id}`, {
      state: {
        templateId: selectedTemplate.id,
        title: title || "제목",
        content: content || "내용",
        coverImage: coverImage
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 여기서 실제 서버에 데이터 전송 로직 구현 가능
    // 예: API 호출, 데이터 저장 등
    
    // 데모 목적으로 2초 후 제출 완료 상태로 변경
    setTimeout(() => {
      alert("매거진이 성공적으로 저장되었습니다!");
      setIsSubmitting(false);
      // 페이지 이동 또는 폼 초기화 등의 작업 가능
      setTitle("");
      setContent("");
      setCoverImage(null);
      setSelectedTemplate(null);
    }, 2000);
  };

  const toggleTemplateSelection = () => {
    setShowTemplates(!showTemplates);
  };

  // PDF 생성 함수
  const generatePDF = async () => {
    if (!selectedTemplate) {
      alert("템플릿을 먼저 선택해주세요.");
      return;
    }

    setGeneratingPDF(true);
    
    try {
      const templateElement = templateRef.current;
      
      // HTML 요소를 캔버스로 변환
      const canvas = await html2canvas(templateElement, {
        scale: 2, // 해상도를 높이기 위한 스케일 설정
        useCORS: true, // 외부 이미지 허용
        logging: false,
        backgroundColor: "#fff"
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // A4 크기로 PDF 생성 (210mm x 297mm)
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // PDF 파일명 설정 (제목이 있으면 제목 사용, 없으면 기본 이름)
      const fileName = title ? `${title}_템플릿.pdf` : "템플릿_미리보기.pdf";
      
      // PDF 다운로드
      pdf.save(fileName);
    } catch (error) {
      console.error("PDF 생성 중 오류 발생:", error);
      alert("PDF 생성 중 오류가 발생했습니다.");
    } finally {
      setGeneratingPDF(false);
    }
  };

  return (
    <div className="magazine-create-page">
      <div className="magazine-create-header">
        <h1>여행 매거진 만들기</h1>
        <p>나만의 여행 이야기를 공유해보세요</p>
      </div>
      <div className="magazine-create-container">
        <form className="magazine-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="매거진 제목을 입력하세요"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="cover">커버 이미지</label>
            <div className="cover-upload-area">
              {coverImage ? (
                <div className="cover-preview">
                  <img src={coverImage} alt="커버 미리보기" />
                  <button 
                    type="button" 
                    onClick={() => setCoverImage(null)}
                    className="remove-image"
                  >
                    이미지 삭제
                  </button>
                </div>
              ) : (
                <div className="cover-upload">
                  <input
                    type="file"
                    id="cover"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input"
                  />
                  <label htmlFor="cover" className="file-label">
                    <div className="upload-icon">+</div>
                    <div>이미지 업로드</div>
                  </label>
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label>템플릿 선택</label>
            <div className="template-selection">
              {selectedTemplate ? (
                <div className="selected-template">
                  <div className="template-preview">
                    <img 
                      src={selectedTemplate.image} 
                      alt={selectedTemplate.name} 
                    />
                    <div className="template-name">{selectedTemplate.name}</div>
                  </div>
                  <div className="template-buttons">
                    <button 
                      type="button" 
                      onClick={toggleTemplateSelection}
                      className="change-template-btn"
                    >
                      템플릿 변경하기
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  type="button" 
                  onClick={toggleTemplateSelection}
                  className="select-template-btn"
                >
                  템플릿 선택하기
                </button>
              )}
              
              {showTemplates && (
                <div className="templates-modal">
                  <div className="templates-container">
                    <div className="templates-header">
                      <h3>템플릿 선택</h3>
                      <button 
                        type="button" 
                        onClick={() => setShowTemplates(false)}
                        className="close-btn"
                      >
                        ×
                      </button>
                    </div>
                    <div className="templates-grid">
                      {templates.map((template) => (
                        <div 
                          key={template.id} 
                          className={`template-item ${selectedTemplate === template ? 'selected' : ''}`}
                          onClick={() => handleTemplateSelect(template)}
                        >
                          <div className="template-item-preview">
                            <img 
                              src={template.image} 
                              alt={template.name} 
                            />
                          </div>
                          <div className="template-item-name">{template.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              placeholder="여행 이야기를 들려주세요..."
              rows={10}
              required
            />
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-button">취소</button>
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting || !selectedTemplate}
            >
              {isSubmitting ? "저장 중..." : "매거진 저장"}
            </button>
          </div>
        </form>
        
        <div className="magazine-preview">
          <h2>미리보기</h2>
          <div className="preview-container">
            {coverImage && (
              <div className="preview-cover">
                <img src={coverImage} alt="매거진 커버" />
              </div>
            )}
            <div className="preview-content">
              <h3>{title || "제목"}</h3>
              {selectedTemplate ? (
                <div className="template-preview-area" ref={templateRef}>
                  <div className="template-content">
                    {/* 실제 템플릿 컴포넌트 렌더링 */}
                    {React.createElement(selectedTemplate.component, {
                      title: title || "제목",
                      content: content || "내용",
                      coverImage: coverImage || null,
                      titleClassName: `auto-resize-text ${
                        title && title.length > 20 
                          ? title.length > 30 
                            ? title.length > 40 
                              ? 'length-extremely-long' 
                              : 'length-very-long' 
                            : 'length-long' 
                          : ''
                      }`
                    })}
                  </div>
                </div>
              ) : (
                <div className="no-template-selected">
                  템플릿을 선택해주세요
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 