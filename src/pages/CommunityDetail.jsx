import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../styles/CommunityDetail.css";

function CommunityDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [liked, setLiked] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [currentUser] = useState("홍길동");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const [imgIdx, setImgIdx] = useState(0);
  const navigate = useNavigate();

  // 아이콘 경로
  const ICON_HEART = process.env.PUBLIC_URL + "/images/heart.svg";
  const ICON_HEART_RED = process.env.PUBLIC_URL + "/images/heart-red.svg";
  const ICON_EYE = process.env.PUBLIC_URL + "/images/eye.svg";
  const ICON_REPLY = process.env.PUBLIC_URL + "/images/reply.svg";

  // 더미 데이터 id 목록 (실제 API 연동 시 전체 글 id 배열로 대체)
  const articleIds = [1, 2];
  const currentIdx = articleIds.indexOf(Number(id));
  const prevId = articleIds[currentIdx - 1];
  const nextId = articleIds[currentIdx + 1];

  useEffect(() => {
    // 더미 데이터 (이미지 여러장)
    const dummy = {
      1: {
        id: 1,
        title: "첫 번째 커뮤니티 글",
        author: "홍길동",
        authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "2024-06-01",
        content: "이것은 첫 번째 커뮤니티 글의 내용입니다. 여행지에서의 경험을 공유해보세요!",
        likes: 3,
        views: 123,
        region: "서울",
        images: [
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
          "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=700&q=80"
        ],
        comments: [
          { id: 1, author: "김코딩", content: "좋은 글 감사합니다!", date: "2024-06-01 12:30" },
          { id: 2, author: "여행자", content: "서울 여행 가고 싶어요~", date: "2024-06-01 13:10" },
        ],
      },
      2: {
        id: 2,
        title: "React로 게시판 만들기",
        author: "김코딩",
        authorAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
        date: "2024-06-02",
        content: "React와 CSS로 예쁜 게시판을 만들어보세요! 다양한 팁과 노하우를 공유합니다.",
        likes: 5,
        views: 98,
        region: "부산",
        images: [
          "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=700&q=80"
        ],
        comments: [],
      },
    };
    setArticle(dummy[id]);
    setLiked(false);
    setShowMenu(false);
    setImgIdx(0);
  }, [id]);

  // 바깥 클릭 시 메뉴 닫기
  useEffect(() => {
    function handleClick(e) {
      if (showMenu && menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showMenu]);

  if (!article) return <div className="community-detail-container">로딩 중...</div>;

  // 좋아요 토글
  const handleLike = () => setLiked(l => !l);

  // 댓글 작성
  const onCommentSubmit = e => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setArticle(prev => ({
      ...prev,
      comments: [
        ...prev.comments,
        { id: Date.now(), author: currentUser, content: commentInput, date: new Date().toLocaleString() },
      ],
    }));
    setCommentInput("");
  };

  // 댓글 삭제
  const onDeleteComment = id => {
    setArticle(prev => ({
      ...prev,
      comments: prev.comments.filter(c => c.id !== id),
    }));
  };

  // 수정/삭제/공유(더미)
  const isAuthor = article.author === currentUser;
  const onEdit = () => { setShowMenu(false); alert("수정 기능(추후 구현)"); };
  const onDelete = () => { setShowMenu(false); window.confirm("정말 삭제하시겠습니까?") && alert("삭제 기능(추후 구현)"); };
  const onShare = () => { setShowMenu(false); navigator.clipboard.writeText(window.location.href).then(() => alert("링크가 복사되었습니다!")); };

  // 이미지 넘기기
  const hasManyImages = article.images.length > 1;
  const prevImg = () => setImgIdx(idx => (idx === 0 ? article.images.length - 1 : idx - 1));
  const nextImg = () => setImgIdx(idx => (idx === article.images.length - 1 ? 0 : idx + 1));

  // 게시물 이동
  const goPrev = () => prevId && navigate(`/community/${prevId}`);
  const goNext = () => nextId && navigate(`/community/${nextId}`);

  return (
    <div style={{position: 'relative'}}>
      {/* 상자 밖 네비게이션 버튼 */}
      <div className="detail-nav-btns-outer">
        <button className="detail-nav-btn prev" onClick={goPrev} disabled={!prevId}>
          <img src={process.env.PUBLIC_URL + '/images/next.svg'} alt="이전 글" className="nav-arrow-icon" style={{transform: 'scaleX(-1)'}} />
        </button>
        <button className="detail-nav-btn next" onClick={goNext} disabled={!nextId}>
          <img src={process.env.PUBLIC_URL + '/images/next.svg'} alt="다음 글" className="nav-arrow-icon" />
        </button>
      </div>
      <div className="community-detail-container">
        {/* 상단 바 */}
        <div className="community-detail-top-bar">
          <div className="topbar-left">
            <img src={article.authorAvatar} alt="프로필" className="author-avatar" />
            <span className="author-name">{article.author}</span>
            <span className="region">{article.region}</span>
          </div>
          <div className="topbar-right">
            {isAuthor && (
              <div className="more-menu-wrap" ref={menuRef}>
                <button className="more-btn" onClick={() => setShowMenu(v => !v)} aria-label="더보기">⋯</button>
                {showMenu && (
                  <div className="more-menu">
                    <button onClick={onEdit}>수정</button>
                    <button onClick={onDelete}>삭제</button>
                    <button onClick={onShare}>공유</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* 썸네일(슬라이더) */}
        <div className="community-detail-thumb-wrap">
          {hasManyImages && (
            <button className="img-nav prev" onClick={prevImg} aria-label="이전 이미지">&#60;</button>
          )}
          <img src={article.images[imgIdx]} alt="썸네일" className="community-detail-thumb" />
          {hasManyImages && (
            <button className="img-nav next" onClick={nextImg} aria-label="다음 이미지">&#62;</button>
          )}
        </div>
        <hr className="community-detail-divider" />
        {/* 제목/날짜 */}
        <div className="community-detail-title-row">
          <h1 className="community-detail-title">{article.title}</h1>
          <span className="date">{article.date}</span>
        </div>
        <div className="community-detail-content">{article.content}</div>
        {/* 댓글/조회수/좋아요(하트) 아이콘 영역 */}
        <div className="community-detail-stats">
          <div className="stats-right">
            <button className={`like-btn${liked ? ' liked' : ''}`} onClick={handleLike}>
              <img src={liked ? ICON_HEART_RED : ICON_HEART} alt="좋아요" className="like-icon" />
              <span className="stats-num">{article.likes + (liked ? 1 : 0)}</span>
            </button>
            <span className="view-count">
              <img src={ICON_EYE} alt="조회수" className="stats-icon" />
              <span className="stats-num">{article.views}</span>
            </span>
          </div>
        </div>
        {/* 댓글 리스트 */}
        <div className="community-detail-comments">
          <h2>댓글 {article.comments.length}</h2>
          <ul>
            {article.comments.map(c => (
              <li key={c.id} className="comment-item">
                <div>
                  <span className="comment-author">{c.author}</span>
                  <span className="comment-date">{c.date}</span>
                  {c.author === currentUser && (
                    <button className="comment-delete" onClick={() => onDeleteComment(c.id)}>삭제</button>
                  )}
                </div>
                <div className="comment-content">{c.content}</div>
              </li>
            ))}
          </ul>
          {/* 댓글 작성 폼 */}
          <form className="comment-form" onSubmit={onCommentSubmit}>
            <textarea
              value={commentInput}
              onChange={e => setCommentInput(e.target.value)}
              placeholder="댓글을 입력하세요"
              rows={3}
              required
            />
            <div className="comment-form-btns">
              <button type="submit">댓글 달기</button>
              <Link to="/community" className="community-detail-back">목록으로</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetail;
