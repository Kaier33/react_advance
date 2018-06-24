import express from 'express';
import authenticate from '../middlewares/authenticate'

const router = express.Router();

router.post('/', authenticate, (req, res) => {
    res.status(201).json({ user: req.currentUser });
})

export default router;