const mongoose = require('mongoose');
require('dotenv').config();
const Book = require(`./models/bookModel`);

async function seed() {
    mongoose.connect(process.env.DB_URL);

    const seedBookOne = new Book ({
        title: 'The Gunslinger',
        description: 'A post apocalyptic take of wizards, gunslingers, and the chase for the rose.',
        status: String,
        email:'harden.christopher00@gmail.com',
    });
    await seedBookOne.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved The Gunslinger - seed')
        }
    });

    await Book.create({
        title: 'Heroes Die',
        description: 'In the future, the entertainment of choice ois to watch actor teleport to a parallel world and risk life and limb living out their lives in a land of monsters, magic and living gods.',
        status: String,
        email:'harden.christopher00@gmail.com',
    });
    console.log('Saved Heroes Die');

     await Book.create({
        title: 'Blood Men',
        description: 'Edward is a psychologist whos father is a famous serial killer. When Edwards son is kidnaped will he become just like his father and kill in the name of family.',
        status: String,
        email:'harden.christopher00@gmail.com',
    });
    console.log('Saved Blood Men');
}
