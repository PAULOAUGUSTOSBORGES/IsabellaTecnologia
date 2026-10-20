const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const srcPath = path.join(__dirname, 'consulta_avan_ada_de_cnpj.tsx');
let code = fs.readFileSync(srcPath, 'utf8');

// Replace import statement
code = code.replace(
  /import\s+React,\s*\{\s*useState,\s*useMemo\s*\}\s*from\s*['"]react['"];?/,
  'const { useState, useMemo, useEffect } = React;'
);

// Replace export default function App
code = code.replace(
  /export\s+default\s+function\s+App\s*\(\s*\)/,
  'function App()'
);

// Append mounting code
code += `\n
window.CnpjApp = App;
function initCnpjApp() {
  const rootEl = document.getElementById('cnpj-app-root');
  if (rootEl && window.ReactDOM && window.React) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(App));
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCnpjApp);
} else {
  initCnpjApp();
}
`;

const tempFile = path.join(__dirname, 'scratch_temp.jsx');
fs.writeFileSync(tempFile, code, 'utf8');

console.log('Running esbuild...');
const outFile = path.join(__dirname, 'consulta-cnpj.js');
execSync(`npx -y esbuild "${tempFile}" --jsx-factory=React.createElement --jsx-fragment=React.Fragment --outfile="${outFile}"`, {
  stdio: 'inherit'
});

fs.unlinkSync(tempFile);
console.log('Build completed successfully! Generated:', outFile);
