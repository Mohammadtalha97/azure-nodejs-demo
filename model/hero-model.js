import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String
        },
        saying: {
            type: String
        }
    }
);

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;