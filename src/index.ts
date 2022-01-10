import express from 'express';
import PostRoute from './routes/PostRoute';
import UserRoute from './routes/UserRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(PostRoute);
app.use(UserRoute);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
