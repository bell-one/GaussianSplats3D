const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// 정적 파일 서빙 (현재 디렉토리 기준으로 상대 경로 설정)
app.use(express.static(path.join(__dirname, 'threejs/demo')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
