import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req,res) => {
  res.send('Pruebas git and github express')
})

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
