import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

//midd to parse JSON in request body
app.use(express.json());

app.use(express.static(path.join(__dirname, './app.ts')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));