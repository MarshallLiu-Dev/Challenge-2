// import { Request, Response } from "express";
// const Pet = require("../../modules/Pet")

import { Request, Response } from 'express';
const Pet = require('../../modules/Pet');
const User = require('../../modules/user');

const PetController = {
  // async createPet(req: Request, res: Response) {
  //     const bodyData = req.body;
  //     const { user_id } = req.params;

  //     try {
  //         const data = { user: user_id, ...bodyData };

  //         const newPet = await Pet.create(data);
  //         await newPet.populate('user').execPopulate();

  //         return res.status(201).json({ newPet, message: "Pet created successfully" });
  //     } catch (error) {
  //         return res.status(400).json({ error, message: "Request error. Please check and try again." });

  //     }
  // },
  async createPet(req: Request, res: Response) {
    const bodyData = req.body;
    const { user_id } = req.params;

    try {
      const data = { user: user_id, ...bodyData };

      const newPet = await Pet.create(data);
      await newPet.populate('user');

      return res
        .status(201)
        .json({ newPet, message: 'Pet created successfully' });
    } catch (error) {
      return res
        .status(400)
        .json({ error, message: 'Request error. Please check and try again.' });
    }
  },
  async getPet(req: Request, res: Response) {
    const { user_id } = req.params;

    try {
      const petOfUser = await Pet.find({ user: user_id }).populate('user');

      if (!petOfUser || petOfUser.length === 0) {
        return res.status(404).json({ message: 'No pets found for the user' });
      }

      return res
        .status(200)
        .json({ petOfUser, message: 'Listing all your pets' });
    } catch (error) {
      return res.status(500).json({ error, message: 'Internal server error' });
    }
  },
  async updatePet(req: Request, res: Response) {
    const bodyData = req.body;
    const { pet_id, user_id } = req.params;

    try {
      const updatePet = await Pet.findByIdAndUpdate(pet_id, bodyData, {
        new: true,
      });
      if (!updatePet)
        return res.status(404).send({ message: 'Pet does not exist' });
      return res.status(200).json(updatePet);
    } catch (error) {
      return res
        .status(400)
        .json({ error, message: 'Request error. Please check and try again.' });
    }
  },
  // funcional
  async deletePet(req: Request, res: Response) {
    const { pet_id, user_id } = req.params;

    try {
      const deletePet = await Pet.findByIdAndDelete(pet_id);

      return res.status(204).json({ deletePet, message: 'delete successful' });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  // Verificar se o usuário possui pets associados antes de excluir
  // async deletePet(req: Request, res: Response) {
  //     const { pet_id, user_id } = req.params;

  //     try {
  //         // Verificar se o usuário possui pets associados antes de excluir
  //         const userHasPets = await Pet.exists({ user: user_id });
  //         if (userHasPets) {
  //             return res.status(400).json({ message: "Cannot delete user with associated pets" });
  //         }

  //         // Excluir o pet
  //         const deletePet = await Pet.findByIdAndDelete(pet_id);

  //         return res
  //             .status(204)
  //             .json({ deletePet, message: "Delete successful" });
  //     } catch (error) {
  //         return res.status(400).json({ error, message: "Request error. Please check and try again." });
  //     }
  // },
  async getAllPets(req: Request, res: Response) {
    try {
      const pet = await Pet.find();
      return res.status(200).json(pet);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

module.exports = PetController;
