import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CommunityList.css";

function CommunityList() {
  const [tab, setTab] = useState("latest");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [articles] = useState([
    {
      id: 1,
      title: "첫 번째 커뮤니티 글",
      summary: "이것은 첫 번째 커뮤니티 글의 요약입니다. 여행지에서의 경험을 공유해보세요!",
      author: "홍길동",
      date: "2024-06-01",
      likes: 3,
      comments: 2,
      views: 123,
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      region: "서울"
    },
    {
      id: 2,
      title: "React로 게시판 만들기",
      summary: "React와 CSS로 예쁜 게시판을 만들어보세요! 다양한 팁과 노하우를 공유합니다.",
      author: "김코딩",
      date: "2024-06-02",
      likes: 5,
      comments: 4,
      views: 98,
      thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      region: "부산"
    },
    {
      id: 3,
      title: "여행지 추천해주세요!",
      summary: "여름에 가기 좋은 국내 여행지 추천 부탁드려요~",
      author: "여행자",
      date: "2024-06-03",
      likes: 2,
      comments: 1,
      views: 45,
      thumbnail: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      region: "제주"
    }
  ]);

  // 검색/필터링
  const filtered = articles.filter(
    art =>
      (region === "" || art.region.includes(region)) &&
      (search === "" || art.title.includes(search) || art.summary.includes(search))
  );

  return (
    <div className="community-list-page">
      <div className="community-list-header-row">
        <h1>커뮤니티</h1>
        <p>나의 매거진을 공유해보세요</p>
      </div>
      <div className="community-list-container">
        <div className="community-list-header">
          <div className="community-tabs">
            <button className={tab === "latest" ? "active" : ""} onClick={() => setTab("latest")}>최신글</button>
            <button className={tab === "popular" ? "active" : ""} onClick={() => setTab("popular")}>인기글</button>
            <button className={tab === "my" ? "active" : ""} onClick={() => setTab("my")}>내 글</button>
          </div>
          <Link to="/community/write" className="write-btn">＋ 글쓰기</Link>
        </div>
        <div className="community-search-bar">
          <input
            type="text"
            placeholder="지역/장소 검색"
            value={region}
            onChange={e => setRegion(e.target.value)}
            className="community-search-input"
          />
          <input
            type="text"
            placeholder="제목/내용 검색"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="community-search-input"
          />
          <button className="community-search-btn">검색</button>
        </div>
        <div className="community-list-grid">
          {filtered.length > 0 ? filtered.map(art => (
            <Link to={`/community/${art.id}`} className="community-card" key={art.id}>
              {art.thumbnail && <img src={art.thumbnail} alt="썸네일" className="community-thumb" />}
              <div className="community-card-body">
                <div className="community-title">{art.title}</div>
                <div className="community-summary">{art.summary}</div>
                <div className="community-meta">
                  <span className="community-author">{art.author}</span>
                  <span className="community-date">{art.date}</span>
                  <span className="community-likes">❤️ {art.likes}</span>
                  <span className="community-comments">💬 {art.comments}</span>
                  <span className="community-views">👁 {art.views}</span>
                  <span className="community-region">📍 {art.region}</span>
                </div>
              </div>
            </Link>
          )) : <div className="community-empty">등록된 글이 없습니다.</div>}
        </div>
      </div>
    </div>
  );
}

export default CommunityList;
