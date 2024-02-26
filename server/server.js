/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const authRouter = require('./routes/authRouter');
const notepadRouter = require('./routes/notepadRouter');
const noteRouter = require('./routes/noteRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const sessionConfig = {
  name: 'note',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET_KEY || 'blabla',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  },
};

const corsOptions = {
  origin: [`http://localhost:${process.env.CLIENT_PORT}`],
  optionsSuccesStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.use('/api/auth', authRouter);
app.use('/api/notepads', notepadRouter);
app.use('/api/notes', noteRouter);

app.listen(PORT, () => console.log(`Сервер запущен: http://localhost:${PORT}`));
