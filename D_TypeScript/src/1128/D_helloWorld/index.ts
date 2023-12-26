console.log("Hello TypeScript!!!");

// 위의 ts파일 명령어를 실행하기 위해서는
// index.ts(타입스크립트)파일을 index.js(자바스크립트)파일로 '컴파일'
//? tsc index.ts

// js파일을 Node.js 런타임 환경에서 실행하는 명령어
//? node 실행파일.js

//! TS코드를 실시간으로 JS로 컴파일하고 실행
// ts-node 설치
// npm install -g ts-node

console.log("ts-node로 TS파일 실행하기");
//? ts-node index.ts