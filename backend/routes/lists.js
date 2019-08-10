import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const listId = req.query.id;
    if(!listId) throw new Error('"id" query is missing.');
});

export default router;