import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import problemRoutes from './routes/problems.routes';
import competitionRoutes from './routes/competitions.routes';

var app = express();
const port = 3000;
declare var __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', problemRoutes);
app.use('/', competitionRoutes);

app.use((_, res) => res.sendFile(path.join(__dirname, 'public', "index.html")));

app.listen(port, () => console.log(`Server listening on ${port}`));
export { app }