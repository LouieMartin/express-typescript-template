import express from 'express';
import HelloRoute from './routes/HelloRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(HelloRoute);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
