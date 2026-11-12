const a = "https://example.com/page#fade"; // url fragment
const b = <a href="#add">x</a>;
const c = <a href={"#face"}>y</a>;
document.querySelector("#bad");
const d = { color: "#ff00aa" }; // HIT
const e = `bg-[#123abc]`; // HIT
const f = "src/**/*.tsx"; const g = "#00ff00"; // HIT
const h = "//cdn.example.com/#fff";
const i = rgb(r, g, b);
const j = `rgb(${r}, ${g}, ${b})`;
const k = "&#fff;";
class X { #fff = 1; get y() { return this.#fff; } }
const l = "#abc /* not a comment */ #def"; // HIT:2
/* const m = "#111"; */
// const n = "#222";
const o = "#999"; // token-drift-ignore
// token-drift-ignore-next-line
const p = "#888888";
const q = { from: "#fff", to: "#000" }; // HIT:2
const r = oklch(from var(--brand) l c h);
