import mongoose from 'mongoose';

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  console.log('db open');
});
db.on('connecting', () => {
  console.log('db connecting...');
});
db.on('connected', () => {
  console.log('db connected');
});
db.on('disconnecting', () => {
  console.log('db disconnecting...');
});
db.on('disconnected', () => {
  console.log('db disconnected');
});
db.on('close', () => {
  console.log('db close');
});

mongoose.connect('mongodb://39.107.32.82:27017/halflife');

export default mongoose;
