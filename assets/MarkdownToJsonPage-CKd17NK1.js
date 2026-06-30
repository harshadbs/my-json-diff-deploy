import{r as h,j as t}from"./vendor-react-B7H3-Zzk.js";import{F as w}from"./monaco-6jRXbjIo.js";import{z as x,U as y,F as k,D as v,T as j,E as N}from"./vendor-b3d6ZwY7.js";import{u as $}from"./index-ClrlT0N0.js";import{S as C}from"./SEOHead-BdJvYMJc.js";import"./vendor-router-CNxejlCz.js";function c(g){return g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(g){return g.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/___(.+?)___/g,"<strong><em>$1</em></strong>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/__(.+?)__/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/_(.+?)_/g,"<em>$1</em>").replace(/~~(.+?)~~/g,"<del>$1</del>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function F(g){const r=g.split(`
`),n=[];let e=0;for(;e<r.length;){const i=r[e];if(/^```/.test(i)){const o=i.slice(3).trim(),a=[];for(e++;e<r.length&&!/^```/.test(r[e]);)a.push(c(r[e])),e++;const l=o?` class="language-${o}"`:"";n.push(`<pre><code${l}>${a.join(`
`)}</code></pre>`),e++;continue}const p=i.match(/^(#{1,6})\s+(.*)/);if(p){const o=p[1].length;n.push(`<h${o}>${m(c(p[2].trim()))}</h${o}>`),e++;continue}if(/^(-{3,}|\*{3,}|_{3,})$/.test(i.trim())){n.push("<hr>"),e++;continue}if(/^>/.test(i)){const o=[];for(;e<r.length&&/^>/.test(r[e]);)o.push(r[e].replace(/^>\s?/,"")),e++;n.push(`<blockquote>${m(c(o.join(" ")))}</blockquote>`);continue}if(/^\|/.test(i)&&e+1<r.length&&/^\|[-| :]+\|/.test(r[e+1])){const o=i.split("|").slice(1,-1).map(s=>s.trim());e+=2;const a=[];for(;e<r.length&&/^\|/.test(r[e]);)a.push(r[e].split("|").slice(1,-1).map(s=>s.trim())),e++;const l=`<thead><tr>${o.map(s=>`<th>${m(c(s))}</th>`).join("")}</tr></thead>`,d=`<tbody>${a.map(s=>`<tr>${s.map(b=>`<td>${m(c(b))}</td>`).join("")}</tr>`).join("")}</tbody>`;n.push(`<table>${l}${d}</table>`);continue}if(/^\d+\.\s/.test(i)){const o=[];for(;e<r.length&&/^\d+\.\s/.test(r[e]);)o.push(r[e].replace(/^\d+\.\s+/,"")),e++;n.push(`<ol>${o.map(a=>`<li>${m(c(a))}</li>`).join("")}</ol>`);continue}if(/^[-*+]\s/.test(i)){const o=[];for(;e<r.length&&/^[-*+]\s/.test(r[e]);)o.push(r[e].replace(/^[-*+]\s+/,"")),e++;n.push(`<ul>${o.map(a=>`<li>${m(c(a))}</li>`).join("")}</ul>`);continue}if(!i.trim()){e++;continue}const u=[];for(;e<r.length&&r[e].trim();)u.push(r[e]),e++;n.push(`<p>${m(c(u.join(" ")))}</p>`)}return n.join(`
`)}const P=`# Enhanced JSON Comparison Tool

A professional JSON comparison and diff visualization tool with **character-level background highlighting** directly within the Monaco editor.

## 🎯 Key Features

### ✅ Character-Level Background Highlighting
- **Direct Editor Highlighting**: Differences are highlighted directly within the Monaco editor
- **Character-Precise**: Highlights specific values and properties, not just entire lines
- **Visual Feedback**: Clear distinction between added, removed, and modified content

### ✅ Professional Color Coding
- **Added Content (Green)**: \`rgba(46, 160, 67, 0.25)\` background
- **Removed Content (Red)**: \`rgba(218, 54, 51, 0.25)\` background
- **Modified Content (Yellow)**: \`rgba(251, 188, 4, 0.25)\` background

## 🚀 How It Works

1. Paste JSON content in both editors
2. Click **Compare JSON** button
3. Navigate differences with Next/Previous buttons

## 🔧 Installation

\`\`\`bash
npm install
npm run dev
npm run build
\`\`\`

## Feature Table

| Feature | Status | Notes |
|---------|--------|-------|
| Character highlighting | ✅ | Monaco decorations |
| Navigation | ✅ | Next/Previous buttons |
| Dark mode | ✅ | Auto-detected |
| PDF export | ✅ | Print-based |

> This tool provides the exact highlighting experience you requested — differences are clearly visible with background colors directly in the editor text.
`,H=()=>{const{theme:g}=$(),[r,n]=h.useState(P),e=h.useMemo(()=>F(r),[r]),i=h.useCallback(()=>n(""),[]),p=h.useCallback(a=>{var s;const l=(s=a.target.files)==null?void 0:s[0];if(!l)return;const d=new FileReader;d.onload=b=>{var f;n(((f=b.target)==null?void 0:f.result)??""),x.success("File loaded!")},d.readAsText(l),a.target.value=""},[]),u=h.useCallback(()=>{if(!r.trim())return;const a=new Blob([r],{type:"text/markdown"}),l=URL.createObjectURL(a),d=document.createElement("a");d.href=l,d.download="document.md",d.click(),URL.revokeObjectURL(l)},[r]),o=h.useCallback(()=>{if(!e.trim()){x.error("Nothing to export");return}const a=window.open("","_blank");if(!a){x.error("Popup blocked — allow popups and try again");return}a.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Markdown Preview</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 24px; color: #1a1a1a; line-height: 1.7; }
  h1,h2,h3,h4,h5,h6 { margin: 1.4em 0 0.5em; font-weight: 700; line-height: 1.3; }
  h1 { font-size: 2em; border-bottom: 2px solid #e5e7eb; padding-bottom: 0.3em; }
  h2 { font-size: 1.5em; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.2em; }
  h3 { font-size: 1.25em; }
  p { margin: 0.8em 0; }
  code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-family: 'Fira Code', monospace; font-size: 0.9em; }
  pre { background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; }
  pre code { background: none; padding: 0; color: inherit; }
  blockquote { border-left: 4px solid #6366f1; margin: 1em 0; padding: 0.5em 1em; background: #f5f3ff; color: #4b5563; border-radius: 0 6px 6px 0; }
  ul,ol { padding-left: 1.8em; margin: 0.8em 0; }
  li { margin: 0.3em 0; }
  table { border-collapse: collapse; width: 100%; margin: 1em 0; }
  th,td { border: 1px solid #d1d5db; padding: 8px 12px; text-align: left; }
  th { background: #f9fafb; font-weight: 600; }
  hr { border: none; border-top: 2px solid #e5e7eb; margin: 2em 0; }
  a { color: #6366f1; }
  strong { font-weight: 700; }
  del { text-decoration: line-through; color: #9ca3af; }
  @media print { body { margin: 0; } }
</style>
</head>
<body>${e}</body>
</html>`),a.document.close(),a.focus(),setTimeout(()=>{a.print()},300)},[e]);return t.jsxs(t.Fragment,{children:[t.jsx(C,{title:"Markdown Formatter & Previewer — Free Online Tool | JSONDiff.in",description:"Format and preview Markdown online with live HTML rendering. Upload .md files, see a beautiful preview, and download as PDF. Free developer tool.",path:"/markdown-to-json",keywords:"markdown formatter, markdown previewer, markdown to html, md preview, markdown viewer, markdown pdf"}),t.jsxs("div",{className:"container mx-auto px-4 py-6 max-w-[95%]",children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Markdown Formatter & Previewer"}),t.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Write or paste Markdown on the left and see a live rendered preview on the right. Download as PDF."})]}),t.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm",children:[t.jsxs("label",{className:"flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg cursor-pointer transition-colors",children:[t.jsx(y,{className:"w-4 h-4"}),t.jsx("span",{children:"Upload .md"}),t.jsx("input",{type:"file",accept:".md,.markdown,.txt",onChange:p,className:"hidden"})]}),t.jsxs("button",{onClick:u,disabled:!r.trim(),className:"flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors disabled:opacity-50",children:[t.jsx(k,{className:"w-4 h-4"}),t.jsx("span",{children:"Download .md"})]}),t.jsxs("button",{onClick:o,disabled:!e.trim(),className:"flex items-center space-x-2 px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50",children:[t.jsx(v,{className:"w-4 h-4"}),t.jsx("span",{children:"Download PDF"})]}),t.jsxs("button",{onClick:i,className:"flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors",children:[t.jsx(j,{className:"w-4 h-4"}),t.jsx("span",{children:"Clear"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",style:{minHeight:"70vh"},children:[t.jsxs("div",{className:"flex flex-col border border-gray-200 dark:border-gray-600 rounded-lg shadow-md overflow-hidden",children:[t.jsxs("div",{className:"p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 flex items-center gap-2",children:[t.jsx("span",{className:"w-2 h-2 rounded-full bg-violet-500"}),t.jsx("h2",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Markdown Input"})]}),t.jsx("div",{className:"flex-1",children:t.jsx(w,{height:"100%",language:"markdown",value:r,onChange:a=>n(a??""),theme:g==="dark"?"vs-dark":"vs-light",options:{minimap:{enabled:!1},wordWrap:"on",fontSize:14,automaticLayout:!0,scrollbar:{horizontal:"hidden"},lineNumbers:"on"}})})]}),t.jsxs("div",{className:"flex flex-col border border-gray-200 dark:border-gray-600 rounded-lg shadow-md overflow-hidden",children:[t.jsxs("div",{className:"p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 flex items-center gap-2",children:[t.jsx(N,{className:"w-4 h-4 text-violet-500"}),t.jsx("h2",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Preview"})]}),t.jsx("div",{className:"flex-1 overflow-auto p-6 bg-white dark:bg-gray-900 md-preview",dangerouslySetInnerHTML:{__html:e||'<p class="text-gray-400 italic">Start typing Markdown on the left…</p>'}})]})]})]})]})};export{H as default};
