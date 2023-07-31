import { conf } from "../config";

export function loadStyleSheel() {
  const style = document.createElement('style');
  const css = `
.fullViewPlane {
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1000;
  overflow: hidden scroll;
  transition: height 0.4s ease 0s;
  display: grid;
  align-content: start;
  grid-gap: 10px;
  grid-template-columns: repeat(${conf.colCount}, 1fr);
}
.fullViewPlane .img-node {
  position: relative;
}
.fullViewPlane .img-node img {
  width: 100%;
  border: 2px solid white;
  box-sizing: border-box;
}
.collapse_full_view {
  height: 0;
  transition: height 0.4s;
}
.bigImageFrame {
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0;
  overflow: scroll;
  z-index: 1001;
  background-color: #000000d6;
  transition: width 0.4s;
  display: flex;
  flex-direction: column;
}
.bigImageFrame > img {
  width: 100%;
  height: 100vh;
  object-fit: contain;
  border-bottom: 1px solid #ffffff;
}
.fullViewPlane > .pageHelper {
  position: fixed;
  display: flex !important;
  justify-content: space-between;
  right: 50px;
  line-height: 25px;
  bottom: 30px;
  background-color: rgba(114, 114, 114, 0.8);
  z-index: 1011 !important;
  box-sizing: border-box;
  font-weight: bold;
  color: rgb(135, 255, 184);
  font-size: 1rem;
  cursor: pointer;
}
.pageHelper:hover {
  background-color: rgba(40, 40, 40, 0.8);
}
.pageHelper .clickable {
  text-decoration-line: underline;
}
.clickable:hover {
  color: white !important;
}
.pageHelper .plane {
  z-index: 1010 !important;
  background-color: rgba(38, 20, 25, 0.8);
  box-sizing: border-box;
  /* border: 1px solid red; */
  position: absolute;
  left: 0;
  bottom: 25px;
  color: rgb(200, 222, 200);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  transition: height 0.4s;
  overflow: hidden;
  width: 337px;
}
.p-collapse {
  height: 0px !important;
  transition: height 0.4s;
}
.pageHelper .b-main {
  width: 284px;
  overflow: hidden !important;
  transition: width 0.4s;
  display: flex;
  justify-content: space-between;
  white-space: nowrap !important;
}
.b-collapse {
  width: 0px !important;
  transition: width 0.4s;
}
.pageHelper .p-config {
  height: 300px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-content: start;
  grid-gap: 10px 0px;
}
.pageHelper .p-downloader {
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.p-downloader canvas {
  /* border: 1px solid greenyellow; */
}
.p-downloader .download-notice {
  font-size: small;
  text-align: center;
  width: 100%;
}
.p-downloader .downloader-btn-group {
  align-items: center;
  text-align: right;
  width: 100%;
}
.pageHelper .btn {
  color: rgb(255, 232, 176);
  cursor: pointer;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  height: 30px;
  font-weight: 900;
  background: rgb(70, 69, 98) none repeat scroll 0% 0%;
}
.fetched {
  border: 2px solid #602a5c !important;
}
.fetch-failed {
  border: 2px solid red !important;
}
.fetching {
  padding: 2px;
  border: none !important;
  animation: 1s linear infinite cco;
  -webkit-animation: 1s linear infinite cco;
}
.pageHelperFetching {
  border: none !important;
  animation: 1s linear infinite cco;
  -webkit-animation: 1s linear infinite cco;
}
@keyframes cco {
  0% {
    background-color: #f00;
  }

  50% {
    background-color: #48ff00;
  }

  100% {
    background-color: #ae00ff;
  }
}
.collapse {
  width: 0px !important;
  transition: width 0.4s;
}
.downloadBar {
  background-color: rgba(100, 100, 100, 0.8);
  height: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.imgLandLeft, .imgLandRight {
  width: 20%;
  height: 100%;
  position: fixed;
  z-index: 1004;
}
.imgLandLeft {
  left: 0;
  top: 0;
  cursor: url("https://exhentai.org/img/p.png"), auto;
}
.imgLandRight {
  right: 0;
  top: 0;
  cursor: url("https://exhentai.org/img/n.png"), auto;
}
.imgLandTop, .imgLandBottom {
  width: 100%;
  height: 20%;
  position: fixed;
  z-index: 1005;
}
.imgLandTop {
  top: 0;
  z-index: 1005;
  cursor: url("https://exhentai.org/img/p.png"), auto;
}
.imgLandBottom {
  bottom: 0;
  z-index: 1005;
  cursor: url("https://exhentai.org/img/b.png"), auto;
}
.tooltip {
  position: relative;
  border-bottom: 1px dotted black;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  font-size: small;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
`
  style.textContent = css;
  document.head.appendChild(style);
  return style;
}
