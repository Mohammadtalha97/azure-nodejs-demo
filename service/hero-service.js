import pkg from 'mongodb';
import Hero from '../model/hero-model.js';
import { connect } from '../mongo.js';

//for optimizing query -  read from nearest database
const { ReadPreference } = pkg;

connect();

export const get = (req, res) => {
    const docquery = Hero.find({}).read(ReadPreference.NEAREST);
    docquery
        .exec()
        .then(heroes => {
            res.json(heroes);
        })
        .catch(err => {
            res.status(500).send(err);
        })
}

export const create = (req, res) => {
    const { id, name, saying } = req.body;

    const hero = new Hero({ id, name, saying });

    hero.save()
        .then(() => {
            res.json(hero)
        })
        .catch(err => {
            res.status(500).send(err);
        })
}

export const update = (req, res) => {

    const { id, name, saying } = req.body;

    Hero.findOne({ id })
        .then(hero => {
            hero.name = name;
            hero.saying = saying;
            hero.save()
                .then(res.json(hero))
                .catch(err => {
                    res.status(500).send(err);
                })
        })
}

export const delet = (req, res) => {
    const { id } = req.params;
    Hero.findOneAndRemove({ id })
        .then(hero => res.json(hero))
        .catch(err => {
            res.status(500).send(err);
        })
}