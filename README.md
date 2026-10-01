# 박태건 포트폴리오

부산대학교 컴퓨터공학과 박태건의 한 페이지 포트폴리오입니다.
대표작 **AI 뉴스 분석 플랫폼**과 그 밖의 작품을 소개합니다.

- 기술: React 19 + TypeScript + Vite
- 작품 추가: `src/components/Projects.tsx`의 `PROJECT_LIST` 배열에 같은 형식의 항목을 추가하고, 시연 영상은 `public/videos/`에 넣습니다.

## 실행 방법

Node.js 20 이상이 필요합니다.

```bash
npm install
npm run dev      # 개발 서버 → 브라우저에서 http://localhost:5173
```

배포용 빌드:

```bash
npm run build    # dist 폴더 생성
npm run preview  # 빌드 결과 미리보기 → http://localhost:4173
```
