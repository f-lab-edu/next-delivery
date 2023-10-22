# 프로젝트 개요

- 음식주문앱
- Next.js 13 + 리액트 + TS
- 기획문서 [[참고링크](https://www.figma.com/file/8YNRXUe9QTMzFSR0UehcnZ/%EB%B0%B0%EB%8B%AC%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-(%EB%A6%AC%EC%95%A1%ED%8A%B8)?type=whiteboard&node-id=201%3A196&t=SxvOdvNS9Oe1ILUc-1)]



# 패키지 정보
- next13 버전 pages 라우터
- emotion ⇒ next/js 공식홈페이지 예제 pages 라우터 예전 예제라서 오류 발생함
    - 11.11 버전으로 해결

- components/pages 폴더 ⇒ 페이지 컴포넌트에 사용될 컴포넌트 모음 폴더


# url 구성 

| url | 페이지명 | pages 폴더위치 (/…) | 컴포넌트 폴더 (/components/pages/) | 렌더링방식 |
| --- | --- | --- | --- | --- |
| / | 메인 | / | /home | SSR |
| /store/[storeId] | 가게 상세페이지 | /store | /store/detail | SSG |
| /store/[storeId]/food/[foodId] | 음식 상세페이지 | /store/food | /food/detail | SSG  |
| /like | 가게 찜 페이지 | /like | /like/list | SSR |
| /cart | 음식 장바구니 페이지 | /cart | /cart/list | SSR |
| /service | 고객센터 | /service | /service | SSR |

## 프로젝트 폴더 구성
```
===================================================
├── 📁public
├── 📁src
|   ├── 📁pages
|   |    ├── 📄index.ts // 메인
|   |    ├── 📁store
|   |    |    ├── 📄[id].tsx // 가게 상세 페이지
|   |    |    ├── ~~📄index.tsx // 가게 목록 페이지 (필요 없음)~~
|   |    |    ├── 📁food
|   |    |         ├── 📄[id].tsx // 가게 상세 페이지
|   |    |         ├── ~~📄index.tsx // 가게 목록 페이지 (필요 없음)~~
|   |    ├── 📁like
|   |    ├── 📁cart
|   |    |    ├── 📁
|   |    |    |    ├── 📄
|   |    |    ├── 📁
|   |    |    |    ├── 📄 
|   ├── 📁components
|   |    ├── 📁home
===================================================
```


# 실행
```bash
npm install
npm run dev 
```
