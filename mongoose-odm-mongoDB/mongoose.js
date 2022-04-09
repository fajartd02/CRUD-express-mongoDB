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
    const car = new Car({name: "Lamborghini"});
    car.save((err, result) => {
        if(err) {
            return console.log(err);
        } else {
            console.log(result);
        }
    })


}




