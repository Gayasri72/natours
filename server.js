require('dotenv').config({ path: './config.env' });
const app = require('./app');
const { connectDB } = require('./db/connectDB');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const host = '0.0.0.0';
const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, host, () => {
      console.log(`natours server running on port ${port}...`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to database:', err);
  });
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
