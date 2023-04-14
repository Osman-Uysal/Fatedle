// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'osm123.1',
//   database: 'fatedle_db'
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Error connecting to database: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database with ID ' + connection.threadId);
// });

// // const today = new Date();today.toLocaleDateString("en-US", { weekday: "long" });
// const dayOfWeek = "Wednesday";
// const narrativeId = "N1a";


// const query = `SELECT narrative_text FROM narratives WHERE day_of_week = '${dayOfWeek}' AND  narrative_id = '${narrativeId}' `;

// connection.query(query, (error, results, fields) => {
//   if (error) throw error;

//   console.log('The result is:', results);
//   console.log(results[0]);
  
// });
// connection.end();

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'osm123.1',
  database: 'fatedle_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }

  console.log('Connected to database with ID ' + connection.threadId);
});

app.get('/getNarrativeData', function(req, res) {
  const dayOfWeek = "Wednesday";
  const narrativeId = "N1a";
  const query = `SELECT narrative_text FROM narratives WHERE day_of_week = '${dayOfWeek}' AND  narrative_id = '${narrativeId}' `;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    console.log('The result is:', results);
    console.log(results[0]);

    // Return the data in JSON format
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


