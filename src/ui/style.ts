import { conf } from "../config";

export function styleCSS() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
  const css = `
.ehvp-root {
  --ehvp-background-color: #333343bb;
  --ehvp-fvg-background: #000;
  --ehvp-border: 1px solid #2f7b10;
  --ehvp-font-color: #fff;
  --ehvp-img-fetched: #90ffae;
  --ehvp-img-failed: red;
  --ehvp-img-init: #fff;
  --ehvp-img-fetching: #ffffff70;
  --ehvp-img-node-border-radius: 5px;
  --ehvp-img-box-shadow: -3px 4px 4px 0px #3d243d;
  --ehvp-panel-border: none;
  --ehvp-panel-box-shadow: none;
  font-size: 16px;
}
.ehvp-root {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  box-sizing: border-box;
  overflow: clip;
}
.ehvp-root input[type="checkbox"] {
  width: 1em;
  height: unset !important;
}
.ehvp-root select {
  width: 8em;
  height: 2em;
}
.ehvp-root input {
  width: 3em;
  height: 1.5em;
}
.ehvp-root-collapse {
  height: 0;
}
.fvg-flow {
  width: 100vw;
  height: 100vh;
  overflow: hidden scroll;
  background: var(--ehvp-fvg-background);
}
.fvg-grid {
  width: 100vw;
  height: 100vh;
  display: grid;
  align-content: start;
  grid-gap: 0.7em;
  grid-template-columns: repeat(${conf.colCount}, minmax(10px, 1fr));
  overflow: hidden scroll;
  padding: 0.3em;
  box-sizing: border-box;
  background: var(--ehvp-fvg-background);
}
.ehvp-root input, .ehvp-root select {
  color: var(--ehvp-font-color);
  background-color: var(--ehvp-background-color);
  border: 1px solid #000000;
  border-radius: 4px;
  margin: 0px;
  padding: 0px;
  text-align: center;
  vertical-align: middle;
}
.ehvp-root input:enabled:hover, .ehvp-root select:enabled:hover, .ehvp-root input:enabled:focus, .ehvp-root select:enabled:focus {
  background-color: #34355b !important;
}
.ehvp-root select option {
  background-color: #34355b !important;
  color: #f1f1f1;
  font-size: 1em;
}
.p-label {
  cursor: pointer;
  height: 2em;
}
.p-label > span {
  white-space: nowrap;
}
.p-label > span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  padding-right: 1.5em;
}
.p-label > span:first-child > .p-tooltip {
  position: absolute;
  right: 0.2em;
}
.full-view-grid, .big-img-frame {
  outline: none !important;
}
.img-node {
  position: relative;
  padding: 3px;
  box-sizing: border-box;
  background-color: var(--ehvp-img-init);
  border-radius: var(--ehvp-img-node-border-radius);
}
.fvg-sub-container {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  /**
  contain: content;
  scollbar-width: none;
  */
}
/**
.full-view-grid::-webkit-scrollbar {
  display: none;
}
*/
.fvg-sub-container .img-node {
  height: 100%;
}
.fvg-sub-container .img-node a {
  width: 100%;
  height: 100%;
}
.img-node canvas, .img-node img {
  width: 100%;
  height: 100%;
  border-radius: var(--ehvp-img-node-border-radius);
}
.img-node-numtip {
  position: absolute;
  top: 0;
  left: 0.5em;
  font-size: 1.8em;
  font-weight: 900;
  height: 1.8em;
  line-height: 1.8em;
  text-shadow: 0px 0px 3px #000000;
  color: var(--ehvp-font-color);
  display: none;
}
.img-node:hover .img-node-numtip {
  display: block;
}
.img-node > a {
  display: block;
  line-height: 0;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.ehvp-chapter-description, .img-node-error-hint {
  display: block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #708090e3;
  color: #ffe785;
  width: 100%;
  font-weight: 700;
  min-height: 3em;
  font-size: 0.8em;
  padding: 0.5em;
  box-sizing: border-box;
  line-height: 1.3em;
  z-index: 10;
}
.img-node-error-hint {
  color: #8a0000;
  bottom: 3px;
  left: 3px;
  width: calc(100% - 6px);
}
.img-fetched {
  background-color: var(--ehvp-img-fetched);
}
.img-fetch-failed {
  background-color: var(--ehvp-img-failed);
}
.img-fetching {
  background-color: var(--ehvp-img-fetching);
}
.img-excluded img, .img-excluded canvas {
  border: 3px solid #777 !important;
}
.img-excluded a::after {
  content: '';
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /**aspect-ratio: 1;*/
  background-color: #333333b0;
}
.img-fetching::after {
  content: '';
  position: absolute;
  top: 0%;
  left: 0%;
  width: 30%;
  height: 30%;
  background-color: #ff0000;
  animation: img-loading 1s linear infinite;
}
@keyframes img-loading {
	25% {
    background-color: #ff00ff;
    top: 0%;
    left: 70%;
	}
	50% {
    background-color: #00ffff;
    top: 70%;
    left: 70%;
	}
	75% {
    background-color: #ffff00;
    top: 70%;
    left: 0%;
	}
}
.big-img-frame::-webkit-scrollbar {
  display: none;
}
.big-img-frame {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  overflow: auto;
  scrollbar-width: none;
  z-index: 2001;
  background-color: #000000d6;
}
.ehvp-root-collapse .big-img-frame {
  position: unset;
}
.big-img-frame > img, .big-img-frame > video {
  object-fit: contain;
  display: block;
}
.bifm-flex {
  display: flex;
  justify-content: center;
  flex-direction: ${conf.reversePages ? "row-reverse" : "row"};
}
.bifm-img { }
.p-helper {
  position: fixed;
  z-index: 2011 !important;
  box-sizing: border-box;
  top: ${conf.pageHelperAbTop};
  left: ${conf.pageHelperAbLeft};
  bottom: ${conf.pageHelperAbBottom};
  right: ${conf.pageHelperAbRight};
}
.p-panel {
  z-index: 2012 !important;
  background-color: var(--ehvp-background-color);
  box-sizing: border-box;
  position: fixed;
  color: var(--ehvp-font-color);
  padding: 3px;
  border-radius: 4px;
  font-weight: 800;
  overflow: hidden;
  width: 24em;
  height: 32em;
  border: var(--ehvp-panel-border);
  box-shadow: var(--ehvp-panel-box-shadow);
}
.clickable {
  text-decoration-line: underline;
  user-select: none;
  text-align: center;
  white-space: nowrap;
}
.clickable:hover {
  color: #90ea90 !important;
}
.p-collapse {
  height: 0px !important;
  padding: 0px !important;
  border: none;
}
.b-main {
  display: flex;
  user-select: none;
  flex-direction: ${conf.pageHelperAbLeft === "unset" ? "row-reverse" : "row"};
  flex-wrap: wrap-reverse;
}
.b-main-item {
  box-sizing: border-box;
  border: var(--ehvp-border);
  border-radius: 4px;
  background-color: var(--ehvp-background-color);
  color: var(--ehvp-font-color);
  font-weight: 800;
  padding: 0em 0.3em;
  margin: 0em 0.2em;
  position: relative;
  white-space: nowrap;
  font-size: 1em;
  line-height: 1.2em;
}
.b-main-option {
  padding: 0em 0.2em;
}
.b-main-option-selected {
  color: black;
  background-color: #ffffffa0;
  border-radius: 6px;
}
.b-main-btn {
  display: inline-block;
  width: 1em;
}
.b-main-input {
  color: var(--ehvp-font-color);
  background-color: var(--ehvp-background-color);
  border-radius: 6px;
  display: inline-block;
  text-align: center;
  width: 1.5em;
  cursor: ns-resize;
}
.chapter-thumbnail {
  width: auto;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
}
.chapter-thumbnail > #chapter-thumbnail-image-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  just-content: center;
  items-align: center;
  z-index: 1;
}
.chapter-thumbnail > #chapter-thumbnail-image-container > img {
  object-fit: contain;
  display: block;
  height: 100%;
  min-width: 100%;
}
.chapter-thumbnail > canvas {
  width: 100%;
  height: 100%;
  /**
  filter: blur(3px) brightness(0.5);
  */
}
.chapter-list {
  height: 100%;
  width: 100%;
  overflow: hidden auto;
  scrollbar-width: none;
  border-left: 2px solid black;
}
.chapter-list::-webkit-scrollbar {
  display: none;
}
.chapter-list-item {
  width: 100%;
  padding-left: 0.7em;
  white-space: nowrap;
  line-height: 1.8em;
  text-decoration: underline;
}
.chapter-list-item:hover {
  background-color: #cddee3ab;
}
.chapter-list-item-hl {
  filter: brightness(150%);
  background-color: #84c5ff6b;
}
.p-chapters {
  width: 34em;
  height: 18em;
  display: flex;
}
.p-chapters-large {
  width: 45em;
  height: 25em;
}
.p-chapters-large .chapter-thumbnail {
  width: auto;
  height: 100%;
}
.p-config {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-content: start;
  line-height: 2em;
  overflow: auto scroll;
  scrollbar-width: none;
}
.p-config::-webkit-scrollbar {
  display: none;
}
.p-config label {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: unset;
}
.p-config input {
  cursor: ns-resize;
}
.p-downloader {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.p-downloader canvas {
  /* border: 1px solid greenyellow; */
}
.p-downloader .download-notice {
  text-align: center;
  width: 100%;
}
.p-downloader .downloader-btn-group {
  align-items: center;
  text-align: right;
  width: 100%;
}
.p-btn {
  color: var(--ehvp-font-color);
  cursor: pointer;
  font-weight: 800;
  background-color: var(--ehvp-background-color);
  vertical-align: middle;
  width: 1.5em;
  height: 1.5em;
  border: 1px solid #000000;
  border-radius: 4px;
}
@keyframes main-progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.big-img-frame-collapse {
  width: 0px !important;
}
.ehvp-root-collapse .img-land,
.big-img-frame-collapse .img-land,
.ehvp-root-collapse .ehvp-message-box,
.ehvp-root-collapse .p-panel
 {
  display: none !important;
}
.download-bar {
  background-color: #33333310;
  height: 0.3em;
  width: 100%;
  bottom: -0.5em;
  position: absolute;
  box-sizing: border-box;
  z-index: 2;
}
.download-bar > div {
  background-color: var(--ehvp-img-fetched);
  height: 100%;
  border: none;
}
.img-land-left, .img-land-right {
  width: 15%;
  height: 50%;
  position: fixed;
  z-index: 2004;
  top: 25%;
}
.img-land-left {
  left: 0;
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3UlEQVR4nO2ZS28TMRDHV0APcON1gXKisUMRJ0QFJ74EAgQfhMclF15nCqk2noTHcVF2nDRCqBc+AZUKRYR3U0olaODK47JoNiqU0mjX9uymSPlLI0Vayfv72157ZuJ5Qw01lLMCL9gKxfAESLwMAutK4nMQ+BWE/tkL+o3z8bNi41Kl2Dhe8kpbvEGrdhAPKKlvKIlLIHVkGB9A4vXKWH00d/DqWLAXhPaV0D8swP8K1RujfK8Y7s4FXkk8B0J/cQXfwEhXCTyTGbh/1B8BqRU3OPxjBKdKJx9vY4Zv7lBSP8waHlZNSGzRO5ng/ZE84WGNCZaVyGPbQP8ou8KfHyB8RFEV4WkreDrWQOIKF8jsZDuaq7wy30pCd33R3GM++0L7nPCrsjEBEm8ZwdPtyHFJrYe3N4Hf7xam96c2QOlBVvCk2dtt8/EEXksFT0lWL0/JBv7ZnTdW4ymJS5Q0JhroZZXZwM/ff+s0riqEE8kGKCXOAL4dLERQdJsYJfTFFPsfQ274l/VOVD3UcP6mQOCD5BWgwoMR/jUu8sDLeAWepjBgnir3g3/36GNUG+eBhzhwJXkLGZ7//eDfzywzw+v4PmA1UB1vRAszy3xnvWQwYLqFaoebfU3YpQ3abQvZfMR5mVDpPmKs2wyejwkMMr3IMjch8EKiAWo6ubwkSxO+aB5LlcwpqRc3nQmBndTdPOqYuS43twkl9NVU8JwFTT8TTyZfZFvQkKgj4GpgIxPm8Jpm/6ZnKjUe7FJSf+Y0YQnfte6bQkGf5TBAYZuRVqQ+ZQX/eyUETnGZyGXrrBfVoS5FjnUIPc3W5O01d7GVI3wzGA22e5yi2eA6mZK2TYm7vb5W1KvkbDnCn/jk/MGaHLHU7qMLxnnGJX6jWS8fae308hbdjtQxs8qdBHZA4BWQep83aMUJYCGcoL4NtT6o8KDKjtKROCWJqzyco2eUElNWuSn+Zh1qKO//1y8OuBKqSFLycQAAAABJRU5ErkJggg=="), auto;
}
.img-land-right {
  right: 0;
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVR4nO2ZS2tTQRTHL2oXuvO10bqymYkVV2LRlV9CVPQrdO9jE/ANPvCZcjvToju5mpxJGqtWwZ1QH4UWa1WotTUWtNWt1VJHTi6V2KbJnZmTW4X8YaAQuPP7z5nHOaee11BDDTkr8IKVMpndIzkclwwygsOwZPBNMvUzHPg3vCr9lswd60zmdqe81ApvudW9FbYIrs4JDkXJlTYcHyWHs50tmebYwbtago2SKV8w9cMC/K8hwm+kbyWz62OBFxwOSaa+uoJXMDItGByoG7i/02+SXAlqcLnICHSk9j5ZRQyfXyO46q03vJw3waGAcxLB+01xwssyEySRiGPbyKVH2hX+8DLCaxxdLLvfCh6vNclhynTCR+39+sXl13Rbialpn+U3mK8+U77pZI/b+/Xc7JxGvbwyQhgJuG4Ej6+j6SNVDj8vukjAzM1Ez+bIBjA9MJ1k9F5RV9Lzi8M0JhiciQSPSVaYpxgettacHi0sYeKSeyQEhyImjTUNhFml3SRVTRBEQiSybbUNYErsMEk1E88uuJkQTB2NsP8h67pSVU2cdzDB4E7tCGDhQXDoljTxS+unJ4dsIzAUwQBdqty9Pa8/9E1WNnFi0OKbMFV7CxEUKfUzATOxG8AxcONNxfMwcnuM3gB1tTVwrTL827vjumtbjn4LUR3iqvAZG3gV9RBDpp7w72DCCl6GEQjq/pBVg8d8Ca9X628zOFLTADad6gH/vreou13gudI+y++KlMwJriZI4e9/coaXDMYjd/OwY0YG/4AAnpcO8OlI8LYFDSZqCzX2kAZemhY0YRRU2nSichNjfZOlV9gdXuHqX/VMJVqDdYKrLzYmiOGnrfumMqEO2kxqf8+rRaOTq31W8H8iwaCDCiaWrbNQWIdSFDnGg6kesiZv2NyFQozw+aA5WO1RClfD5may2TYp6vZ6ubBXadNyjDA+Ox9YkysW2334wDivOIfvuOrpHYW1XtzC1xE7Zla5E4NxyeCU5GqTt9wqJYCJbBv2bbD1gYUHVnaYjpRSklKVB4P4G6bEmFX+E/9mbagh7//Xb5hJEJPq8mugAAAAAElFTkSuQmCC"), auto;
}
.p-tooltip { }
.p-tooltip .p-tooltiptext {
  display: none;
  max-width: 34em;
  background-color: #000000df;
  color: var(--ehvp-font-color);
  border-radius: 6px;
  position: fixed;
  z-index: 1;
  font-size: small;
  white-space: normal;
  text-align: left;
  padding: 0.3em 1em;
  box-sizing: border-box;
  pointer-events: none;
}
.page-loading {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #333333a6;
}
.page-loading-text {
  color: var(--ehvp-font-color);
  font-size: 6em;
}
@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}
.border-ani {
	position: relative;
	z-index: 0;
	overflow: hidden;
}
.border-ani::before {
	content: '';
	position: absolute;
	z-index: -2;
	left: -50%;
	top: -50%;
	width: 200%;
	height: 200%;
	background-color: #fff;
	animation: rotate 4s linear infinite;
}
.border-ani::after {
	content: '';
	position: absolute;
	z-index: -1;
	left: 6px;
	top: 6px;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	background-color: #333;
}
.overlay-tip {
  position: absolute;
  z-index: 10;
  font-weight: 800;
  top: 0.3em;
  right: 0.3em;
  font-size: 0.8em;
  color: var(--ehvp-font-color);
  text-shadow: 0px 0px 3px #000000;
}
.lightgreen { color: #90ea90; }
.ehvp-full-panel {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000000e8;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
}
.ehvp-custom-panel {
  min-width: 50vw;
  min-height: 50vh;
  max-width: 80vw;
  max-height: 80vh;
  background-color: var(--ehvp-background-color);
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  text-align: start;
  color: var(--ehvp-font-color);
  position: relative;
  user-select: none;
}
.ehvp-custom-panel-title {
  font-size: 1.8em;
  line-height: 2em;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
}
.ehvp-custom-panel-close {
  width: 2em;
  text-align: center;
}
.ehvp-custom-panel-close:hover {
  background-color: #c3c0e0;
}
.ehvp-custom-panel-container {
  overflow: auto;
  scrollbar-width: thin;
}
.ehvp-custom-panel-content {
  border: 1px solid #000000;
  border-radius: 4px;
  margin: 0.5em;
  padding: 0.5em;
}
.ehvp-custom-panel-item {
  margin: 0.2em 0em;
}
.ehvp-custom-panel-item-title {
  font-size: 1.4em;
}
.ehvp-custom-panel-item-values {
  margin-top: 0.3em;
  text-align: end;
  line-height: 1.3em;
}
.ehvp-custom-panel-item-value {
  font-size: 1.1em;
  font-weight: 800;
  color: black;
  background-color: #c5c5c5;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-left: 0.3em;
  display: inline-flex;
}
.ehvp-custom-panel-item-value span {
  padding: 0em 0.5em;
}
.ehvp-custom-panel-item-value button {
  background-color: #fff;
  color: black;
  border: none;
}
.ehvp-custom-panel-item-value button:hover {
  background-color: #ffff00;
}
.ehvp-custom-panel-item-input, .ehvp-custom-panel-item-span {
  font-size: 1.1em;
  font-weight: 800;
  background-color: #7fef7b;
  color: black;
  border: none;
}
.ehvp-custom-panel-item-span {
  background-color: #34355b;
  color: white;
}
.ehvp-custom-panel-item-add-btn:hover {
  background-color: #ffff00 !important;
}
.ehvp-custom-panel-list > li {
  line-height: 3em;
  margin-left: 0.5em;
  font-size: 1.4em;
}
.ehvp-custom-panel-checkbox:hover {
  border: 1px solid var(--ehvp-font-color);
}
.ehvp-custom-panel-list-item-disable {
  text-decoration: line-through;
  color: red;
}
.ehvp-help-panel > div > h2 {
  color: #c1ffc9;
}
.ehvp-help-panel > div > p {
  font-size: 1.1em;
  margin-left: 1em;
  font-weight: 600;
}
.ehvp-help-panel > div > ul {
  font-size: 1em;
}
.ehvp-help-panel > div a {
  color: #ff5959;
}
.ehvp-help-panel > div strong {
  color: #d76d00;
}
.bifm-vid-ctl {
  position: fixed;
  z-index: 2010;
  padding: 3px 10px;
  bottom: 0.2em;
  ${conf.pageHelperAbLeft === "unset" ? "left: 0.2em;" : "right: 0.2em;"}
}
.bifm-vid-ctl > div {
  display: flex;
  align-items: center;
  line-height: 1.2em;
}
.bifm-vid-ctl > div > * {
  margin: 0 0.1em;
}
.bifm-vid-ctl:not(:hover) .bifm-vid-ctl-btn,
.bifm-vid-ctl:not(:hover) .bifm-vid-ctl-span,
.bifm-vid-ctl:not(:hover) #bifm-vid-ctl-volume
{
  opacity: 0;
}
.bifm-vid-ctl-btn {
  height: 1.5em;
  width: 1.5em;
  font-size: 1.2em;
  padding: 0;
  margin: 0;
  border: none;
  background-color: #00000000;
  cursor: pointer;
}
#bifm-vid-ctl-volume {
  width: 5em;
  height: 0.5em;
}
.bifm-vid-ctl-pg {
  border: 1px solid #00000000;
  background-color: #3333337e;
  -webkit-appearance: none;
}
#bifm-vid-ctl-pg {
  width: 100%;
  height: 0.2em;
  background-color: #333333ee;
}
.bifm-vid-ctl:hover {
  background-color: var(--ehvp-background-color);
}
.bifm-vid-ctl:hover #bifm-vid-ctl-pg {
  height: 0.8em;
}
.bifm-vid-ctl-pg-inner {
  background-color: #ffffffa0;
  height: 100%;
}
.bifm-vid-ctl:hover #bifm-vid-ctl-pg .bifm-vid-ctl-pg-inner {
  background-color: #fff;
}
.bifm-vid-ctl-span {
  color: white;
  font-weight: 800;
}
.download-middle {
  width: 100%;
  height: auto;
  flex-grow: 1;
  overflow: hidden;
}
.download-middle .ehvp-tabs + div {
  width: 100%;
  height: calc(100% - 2em);
}
.ehvp-tabs {
  height: 2em;
  width: 100%;
  line-height: 2em;
}
.ehvp-p-tab {
  border: 1px dotted #ff0;
  font-size: 1em;
  padding: 0 0.4em;
}
.download-chapters, .download-status, .download-cherry-pick {
  width: 100%;
  height: 100%;
}
.download-chapters {
  overflow: hidden auto;
}
.download-chapters label {
  white-space: nowrap;
}
.download-chapters label span {
  margin-left: 0.5em;
}
.ehvp-p-tab-selected {
  color: rgb(120, 240, 80) !important;
}
.ehvp-message-box {
  position: fixed;
  z-index: 4001;
  top: 0;
  left: 0;
}
.ehvp-message {
  margin-top: 1em;
  margin-left: 1em;
  line-height: 2em;
  background-color: #ffffffd6;
  border-radius: 6px;
  padding-left: 0.3em;
  position: relative;
  box-shadow: inset 0 0 5px 2px #8273ff;
  color: black;
}
.ehvp-message > button {
  border: 1px solid #00000000;
  margin-left: 1em;
  color: black;
  background-color: #00000000;
  height: 2em;
  width: 2em;
  text-align: center;
  font-weight: 800;
}
.ehvp-message > button:hover {
  background-color: #444;
}
.ehvp-message-duration-bar {
  position: absolute;
  bottom: 0;
  width: 0%;
  left: 0;
  height: 0.1em;
  background: red;
}
.ehvp-custom-btn {
  border: 1px solid #000;
  font-weight: 700;
  color: #000;
  background-color: #ffffff80;
}
.ehvp-custom-btn-plain {
  background-color: #aaa;
}
.ehvp-custom-btn-green {
  background-color: #7fef7b;
}
.ehvp-custom-btn:hover {
  border: 1px solid #fff;
  color: #333;
  background-color: #ffffff90;
  filter: brightness(150%);
}
.ehvp-custom-btn:active {
  color: #ccc;
}
.ehvp-custom-panel-list-item-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding: 0em 1em;
}
.ehvp-custom-panel-title:hover, .ehvp-custom-panel-list-item-title:hover {
  background-color: #33333388;
}
.s-pickable:hover {
  border: 1px solid red;
  filter: brightness(150%);
}
@media (max-width: ${isMobile ? "1440px" : "720px"}) {
  .ehvp-root {
    font-size: 4cqw;
  }
  .ehvp-root-collapse #entry-btn {
    font-size: 2.2em;
  }
  .p-helper {
    bottom: 0px;
    left: 0px;
    top: unset;
    right: unset;
  }
  .b-main {
    flex-direction: row;
  }
  .b-main-item {
    font-size: 1.3em;
    margin-top: 0.2em;
  }
  #pagination-adjust-bar {
    display: none;
  }
  .bifm-img {
    min-weight: 100vw !important;
  }
  .p-panel {
    width: 100vw;
    font-size: 5cqw;
  }
  .p-chapters {
    width: 100vw;
  }
  .ehvp-custom-panel {
    max-width: 100vw;
  }
  .ehvp-root input, .ehvp-root select {
    width: 2em;
    height: 1.2em;
    font-size: 1em;
  }
  .ehvp-root select {
    width: 7em !important;
  }
  .p-btn {
    font-size: 1em;
  }
  .bifm-vid-ctl {
    display: none;
  }
  .ehvp-custom-panel-list-item-title {
    display: block;
  }
  .chapter-thumbnail {
    display: none;
  }
}
`;
  // TODO: bifm-vid-ctl layout on mobile page;
  return css;
}
