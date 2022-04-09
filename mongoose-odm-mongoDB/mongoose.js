// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));

const carSchema = new mongoose.Schema({
    name: String
});

const Car = mongoose.model('Car', carSchema);

async function main() {
    await mongoose.connect('mongodb://localhost:27017/userDB');

    // Create
    // const car = new Car({name: "Lamborghini"});
    // car.save((err, result) => {
    //     if(err) {
    //         return console.log(err);
    //     } else {
    //         console.log(result);
    //     }
    // })

    // // Get All
    // const cars = await Car.find();
    // console.log(cars);

    // Get Specific ID ALL
    // const cars = await Car.find({_id: '6251474999500ff0c16be759'});
    // console.log(cars);

    // Update specific
    // const updateCar = await Car.updateOne({_id: '6251485f97bbd77777261a52'}, {
    //     name: 'Alphard'
    // })

    // console.log(updateCar);
}




