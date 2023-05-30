// 가장 먼저 실행되는 자바스크립트 파일로서, Vue 인스턴스를 생성하는 역할

import './assets/main.css' // 스타일 시트 불러옴

import { createApp } from 'vue' // createApp 함수는 Vue 애플리케이션을 생성하는 데 사용되며, 이 함수를 호출하여 애플리케이션 인스턴스를 생성할 수 있다.
import App from './App.vue' // 최상위 컴포넌트 App.vue 불러옴
import router from './router' // router 폴더의 index.js에 있는 router 모듈을 불러옴 (/index.js는 기본이라 생략 가능)

createApp(App).use(router).mount('#app') // Vue 3에서 도입된, Vue 인스턴스를 생성하는 부분이다.
