# design — 이미지 원본 · v00.01 (2026-11-12)

| 파일 | 내용 |
|---|---|
| `visual.html` | 신청 페이지 제품 이미지(`site/product-visual.png`) 원본 |
| `banner.html` | 홍보용 배너(`seminar-banner@2x.png`) 원본 |
| `render2.js` | 위 두 HTML 을 PNG 로 찍는 스크립트(Playwright) |
| `product-dashboard.png` | 화면구성도 PDF 3쪽 대시보드에서 **직원 이름 없는 영역만** 잘라낸 것 |
| `mobile.png` | 화면구성도 PDF 15쪽 「사업분석 보고서 (샘플)」 모바일 화면 |
| `logo_br.png` | 공식 로고 원본(드라이브 세모디자인/SEMOR_logo_Br.png) |

- 색은 「Semo Design System Guide」 공식 컬러만 쓴다 — 버튼 `#17BF98` · 영역강조 `#12997A` · 선택배경 `#F3FFF4` · 본문 `#000` · 설명 `#8A8A8B` · 영역 `#EBEBEB` · 설명배경 `#F9F9F9`. 메인 컬러는 투명도 조절 금지.
- 다시 찍을 때: 이 폴더에 `npm pack @fontsource/noto-sans-kr@5.0.19 @fontsource/inter@5.0.18` 로 받은 글꼴을 `f/` 아래 풀고 `node render2.js`. (글꼴 파일은 저장소에 넣지 않는다)
- 이 폴더는 공개되지 않는다(Netlify 는 `site/` 만 공개).
