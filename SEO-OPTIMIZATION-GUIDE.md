# SEO/AEO/GEO 최적화 가이드

## 적용된 최적화

### 1. SEO (검색엔진 최적화)
- Title tag: 키워드 포함 60자 이내
- Meta description: 155자 이내, 행동 유도
- Meta keywords: 핵심 검색어 포함
- Robots, Googlebot, Naverbot 메타 태그
- Canonical URL
- hreflang 태그 (다국어)
- 시맨틱 HTML5 (header, main, section, article, footer, nav, aside)
- 헤딩 계층 구조 (h1 → h2 → h3)
- BreadcrumbList 구조화 데이터
- alt 텍스트, aria-label 접근성

### 2. AEO (답변 엔진 최적화)
- FAQPage 구조화 데이터 (6개 질문-답변)
- HowTo 구조화 데이터 (4단계)
- 명확한 Q&A 형식 콘텐츠
- 정의형 콘텐츠 (각 질환 설명)
- 숫자/통계 포함 (14개 카테고리, 87개 증상, 71개 질환)

### 3. GEO (생성형 엔진 최적화)
- MedicalWebPage 스키마
- MedicalCondition 스키마 (10개 주요 질환)
- HealthTopicContent 스키마
- Organization, WebSite 스키마
- 명확한 사실 정보 (수치, 카테고리, 질환명)
- 인용/참조 링크 (질병관리청, 119 등)
- 한국어/영어 병기

### 4. 네이버 최적화
- Naverbot 메타 태그
- Naver site verification 메타
- 한국어 콘텐츠 우선
- 한국 의료 기관 링크
- 한국 사용자 검색 패턴 반영

### 5. 구글 최적화
- Googlebot 메타 태그
- Google site verification 메타
- Open Graph, Twitter Card
- BreadcrumbList
- Article 스키마 (published, modified)
- MedicalWebPage, FAQPage, HowTo 스키마

## 다음 단계 권장사항

1. **사이트 인증 코드 등록**
   - 네이버 서치어드바이저: https://searchadvisor.naver.com
   - 구글 서치 콘솔: https://search.google.com/search-console
   - `index.html`의 `naver-site-verification`, `google-site-verification` 메타 태그 수정

2. **실제 도메인 연결**
   - `example.com`을 실제 도메인으로 변경
   - canonical, og:url 등 모든 URL 업데이트

3. **이미지 추가**
   - og-image.png (1200x630)
   - twitter-image.png
   - logo.png

4. **사이트맵 등록**
   - 네이버 서치어드바이저
   - 구글 서치 콘솔

5. **추가 개선**
   - 페이지 로딩 속도 최적화 (이미 단일 파일로 최적화됨)
   - HTTPS 적용
   - 모바일 친화성 테스트 (구글)
   - 콘텐츠 정기 업데이트

6. **콘텐츠 확장 (선택)**
   - 각 질환별 상세 페이지
   - 건강 정보 블로그
   - 증상별 가이드 페이지

## 검증 도구
- 구글: https://search.google.com/test/rich-results
- Schema.org 검증: https://validator.schema.org/
- 모바일 친화성: https://search.google.com/test/mobile-friendly
- 페이지 속도: https://pagespeed.web.dev/
