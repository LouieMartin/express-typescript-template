import * as express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/posts', (_: express.Request, res: express.Response) => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((resp) => res.status(200).json(resp.data))
    .catch((err) => res.status(500).json({ error: true }));
});

export default router;
