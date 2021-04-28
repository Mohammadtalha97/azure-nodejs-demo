import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index.js'
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`);
})