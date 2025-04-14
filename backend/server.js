import app from './app.js';
import dotenv from 'dotenv';
import http from 'http';

dotenv.config();
const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
