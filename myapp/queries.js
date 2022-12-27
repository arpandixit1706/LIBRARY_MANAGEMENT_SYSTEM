const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password:'password',
  port: 5432,
})


/* const getUsers = (request, response) => {
  pool.query('SELECT * FROM booking', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
} */
  const createBooking = (request, response) => {
    const { name,email,pnumber,nodays,bookname ,message } = request.body
    pool.query('INSERT INTO booking (name,email,pnumber,nodays,bookname ,message) VALUES ($1, $2, $3, $4, $5, $6)', [name,email,pnumber ,nodays, bookname ,message], (error, results) => {
      if (error) {
        throw error;
      }

      response.status(201).send(`Book registered`)
    })
  }

/*   const createUser = (request, response) => {
    const { email,password,username } = request.body
    pool.query('INSERT INTO login (email,password,username) VALUES ($1, $2, $3)', [email,password,username], (error, results) => {
      if (error) {
        throw error;
      } */

      response.status(201).send(`Book registered`)
    })
  }



  module.exports = {
    createBooking,
  }

/*   CREATE TABLE booking(
      serial_id serial PRIMARY Key,
      name VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      pnumber VARCHAR(10) UNIQUE NOT NULL,
      nodays int,
      regDate DATE NOT NULL,
      bookname VARCHAR(50) NOT NULL,
      message VARCHAR(50) 
  ); */
  
  