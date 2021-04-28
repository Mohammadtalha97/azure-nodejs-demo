import express from 'express';
import { create, delet, get, update } from '../service/hero-service.js'

const router = express.Router();

router.get('/heroes', (req, res, next) => {
    get(req, res);
})

router.post('/hero', (req, res, next) => {
    create(req, res);
})

router.put('/hero/', (req, res, next) => {
    update(req, res)
});

router.delete('/hero/:id', (req, res, next) => {
    delet(req, res);
})

export default router