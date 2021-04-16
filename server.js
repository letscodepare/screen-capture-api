const app = require('./index')

const port = process.env.SERVER_PORT || 3000

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Server is running on http://127.0.0.1:${port}`)
})