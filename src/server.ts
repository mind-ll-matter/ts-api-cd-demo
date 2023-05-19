// use jest extension (vscode extension).

// each test file should have only one 'describe'. I.e. basically one 'describe' per function

// MOCKING
// in the last class we were testing the services (functions), but we should also be testing the controllers.
// install mock express. It's mocking libraries for req and res.
// // yarn add -D @jest-mock/express

// INTEGRATION TESTS
// // yarn add -D supertest

import env from 'dotenv'
import app from './app'

env.config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server starterd on port ${PORT}`)
})
