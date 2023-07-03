// import { Request, Response } from "express";
// const User = require("../../modules/user");
import { Request, Response } from 'express';
const User = require('../../modules/user');
const Pet = require('../../modules/Pet');

const UserController = {
  async createUser(req: Request, res: Response) {
    const bodyData = req.body;
    try {
      const newUser = await User.create(bodyData);
      return res
        .status(201)
        .json({ newUser, message: 'User created successfully' });
    } catch (error) {
      return res
        .status(400)
        .json({ error, message: 'Request error check and try again' });
    }
  },
  async updateUser(req: Request, res: Response) {
    const { user_id } = req.params;
    const updatedData = req.body;

    try {
      const updatedUser = await User.findByIdAndUpdate(user_id, updatedData, {
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res
        .status(200)
        .json({ updatedUser, message: 'User updated successfully' });
    } catch (error) {
      return res
        .status(400)
        .json({ error, message: 'Request error check and try again' });
    }
  },
  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      const usersWithPets = [];

      for (const user of users) {
        const pets = await Pet.find({ user: user._id });

        const formattedPets = pets.map(
          (pet: {
            _id: any;
            name: any;
            species: any;
            carry: any;
            weight: any;
            date_of_birth: any;
          }) => ({
            id: pet._id,
            name: pet.name,
            species: pet.species,
            carry: pet.carry,
            weight: pet.weight,
            date_of_birth: pet.date_of_birth,
          }),
        );

        usersWithPets.push({
          id: user._id,
          name: user.name,
          phone: user.phone,
          email: user.email,
          date_of_birth: user.date_of_birth,
          zip_code: user.zip_code,
          pets: formattedPets,
        });
      }

      return res.status(200).json(usersWithPets);
    } catch (error) {
      return res.status(500).json({ error, message: 'Internal server error' });
    }
  },

  async getUsersById(req: Request, res: Response) {
    const { user_id } = req.params;

    try {
      const user = await User.findById(user_id);
      if (!user)
        return res.status(404).send({ message: 'User does not exists' });
      return res.status(200).json(user);
    } catch (error) {
      return res
        .status(400)
        .json({ error, message: 'Request error check and try again' });
    }
  },
  async deleteUser(req: Request, res: Response) {
    const { user_id } = req.params;

    try {
      // Verificar se o usuário possui animais de estimação associados a ele
      const userHasPets = await Pet.exists({ user: user_id });
      if (userHasPets) {
        return res
          .status(400)
          .json({ message: 'Cannot delete user with associated pets' });
      }

      const deleteUser = await User.findByIdAndDelete(user_id);

      return res.status(204).json({ deleteUser, message: 'Delete successful' });
    } catch (error) {
      return res
        .status(400)
        .json({ error, message: 'Request error check and try again' });
    }
  },
};

module.exports = UserController;
