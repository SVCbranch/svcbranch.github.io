const glitchColors = ['#2b4539', '#61dca3', '#61b3dc'];
const glitchSpeed = 100;
const smooth = true;
const fontSize = 16;
const charWidth = 10;
const charHeight = 20;

const lettersAndSymbols = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '&', '*', '(', ')', '-', '_', '+', '=', '/', '[', ']', '{', '}', ';', ':', '<', '>', ',', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

const getRandomChar = () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
const getRandomColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)];

let letters = [];
let grid = { columns: 0, rows: 0 };
let context = null;
let lastGlitchTime = Date.now();

const canvas = document.getElementById('glitch-canvas');
const container = document.getElementById('glitch-banner');

const hexToRgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const interpolateColor = (start, end, factor) => {
  return `rgb(${Math.round(start.r + (end.r - start.r) * factor)}, ${Math.round(start.g + (end.g - start.g) * factor)}, ${Math.round(start.b + (end.b - start.b) * factor)})`;
};

const calculateGrid = (width, height) => {
  const columns = Math.ceil(width / charWidth);
  const rows = Math.ceil(height / charHeight);
  return { columns, rows };
};

const initializeLetters = (columns, rows) => {
  grid = { columns, rows };
  letters = Array.from({ length: columns * rows }, () => ({
    char: getRandomChar(),
    color: getRandomColor(),
    targetColor: getRandomColor(),
    colorProgress: 1
  }));
};

const resizeCanvas = () => {
  const dpr = window.devicePixelRatio || 1;
  const rect = container.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;

  if (context) {
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const { columns, rows } = calculateGrid(rect.width, rect.height);
  initializeLetters(columns, rows);
  drawLetters();
};

const drawLetters = () => {
  if (!context || letters.length === 0) return;
  const ctx = context;
  const { width, height } = canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, width, height);
  ctx.font = `${fontSize}px monospace`;
  ctx.textBaseline = 'top';

  letters.forEach((letter, index) => {
    const x = (index % grid.columns) * charWidth;
    const y = Math.floor(index / grid.columns) * charHeight;
    ctx.fillStyle = letter.color;
    ctx.fillText(letter.char, x, y);
  });
};

const updateLetters = () => {
  if (letters.length === 0) return;

  const updateCount = Math.max(1, Math.floor(letters.length * 0.05));
  for (let i = 0; i < updateCount; i++) {
    const index = Math.floor(Math.random() * letters.length);
    letters[index].char = getRandomChar();
    letters[index].targetColor = getRandomColor();

    if (!smooth) {
      letters[index].color = letters[index].targetColor;
      letters[index].colorProgress = 1;
    } else {
      letters[index].colorProgress = 0;
    }
  }
};

const handleSmoothTransitions = () => {
  let needsRedraw = false;
  letters.forEach(letter => {
    if (letter.colorProgress < 1) {
      letter.colorProgress += 0.05;
      if (letter.colorProgress > 1) letter.colorProgress = 1;

      const startRgb = hexToRgb(letter.color);
      const endRgb = hexToRgb(letter.targetColor);
      if (startRgb && endRgb) {
        letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
        needsRedraw = true;
      }
    }
  });

  if (needsRedraw) {
    drawLetters();
  }
};

const animate = () => {
  const now = Date.now();
  if (now - lastGlitchTime >= glitchSpeed) {
    updateLetters();
    drawLetters();
    lastGlitchTime = now;
  }

  if (smooth) {
    handleSmoothTransitions();
  }

  requestAnimationFrame(animate);
};

window.addEventListener('resize', () => {
  resizeCanvas();
});

document.addEventListener('DOMContentLoaded', () => {
  context = canvas.getContext('2d');
  resizeCanvas();
  animate();
});

const button = document.getElementById('discoverBtn');
button.addEventListener('click', () => {
  button.classList.remove('clicked');
  void button.offsetWidth;
  button.classList.add('clicked');
});

const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!menuToggle.contains(event.target) && !navUl.contains(event.target)) {
    navUl.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});