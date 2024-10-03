const fs = require('fs');

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <rect width="100" height="100" style="fill:blue"/>
</svg>
`;

fs.writeFileSync('generated.svg', svgContent, 'utf8');
console.log('SVG file generated: generated.svg');
