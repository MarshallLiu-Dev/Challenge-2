import mongoose from 'mongoose';

// const Schema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: Number,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     zip_code: {
//         type: Number,
//         required: true,
//     },
//     date_of_birth: {
//         type: String,
//         required: true,
//     }
// });
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  zip_code: {
    type: Number,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pet', // Referência ao modelo Pet
    },
  ],
});

module.exports = mongoose.model('user', Schema);
