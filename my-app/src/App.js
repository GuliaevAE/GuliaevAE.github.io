import React from 'react';
import './App.css';
import Display from './components/display';
import "./components/display/display.css";

// const express = require('express');
// const config = require('config')
// const mongoose = require('mongoose')





// const app = express()


// const PORT = config.get('port') || 5000

// async function start() {
//   try {
//     await mongoose.connect(config.get('mongoUri'), {
//       useNewUrlParses:true,
//       useUnifiedTopology: true,
//       useCreateIndex:true
//     })
//   } catch (error) {
//     console.log("Server error", error.message)
//     process.exit(1)
//   }
// }

// start()


// app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))




function App() {
  return (
    <Display />
  );
}

export default App;
