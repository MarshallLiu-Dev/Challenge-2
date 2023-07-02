import { Request, Response, Router } from 'express';
import { homeController } from './controllers/homeController';
// import swaggerUi from 'swagger-ui-express';
// import Docs from './docs/swagger.json';

const UserController = require('./controllers/Tutor/UserController');
const AuthController = require('./controllers/Auth/Auth');
const PetController = require('./controllers/Pet/PetController');
import { checkToken } from './middlewares/checkToken';
const router: Router = Router();

//Routes

// Main
router.get('/', homeController.home);
// router.get('/doc-api', swaggerUi.serve, swaggerUi.setup(Docs)); //Swagger

//  Criar Usuarios, Listar Usuarios  Editar Usuario e Deletar

router.post('/tutors', checkToken, UserController.createUser); // POST / tutor -> Criar um novo tutor.
router.get('/tutors', UserController.getUsers); // GET / tutors -> Recupera todos os tutores.
router.get('/tutors/:user_id', UserController.getUsersById); // GET / tutors -> Recupera todos os tutores.
router.post('/auth', AuthController.register); // POST /auth -> Cria sessão do usuário fornecido.
router.post('/auth/login', AuthController.Login); // POST /auth/login -> Autentica o usuário fornecido e da inicio a sessão.
router.put('/tutors/:user_id', checkToken, UserController.updateUser); // PUT / tutor /: id -> Atualiza um tutor.Autentificação requerida.
router.delete('/tutors/:user_id', checkToken, UserController.deleteUser); // DELETE/tutor/:id -> Exclui um tutor. Autentificação requerida.

// Criar Pet, Listar Pets de  Usuarios  Editar Pets de Usuario e Deletar

router.post('/pet/:user_id', checkToken, PetController.createPet); // POST/ pet/:tutorId-> Cria um animal de estimação e o adiciona a um tutor. Autentificação requerida.
router.get('/pet/:user_id', PetController.getPet); // GET/ pet/:tutorId-> Recupera todos os pets do tutor.
router.get('/pet', PetController.getAllPets); // GET/ pet> Recupera todos os pets.
router.delete(
  '/pet/:pet_id/tutors/:user_id',
  checkToken,
  PetController.deletePet,
); //DELETE / pet /: petId / tutor /: tutorId -> exclui um animal de estimação de um tutor.Autentificação requerida.
router.put('/pet/:pet_id/tutors/:user_id', checkToken, PetController.updatePet); //PUT / pet /: petId / tutor /: tutorId -> atualiza as informações de um animal de estimação.Autentificação requerida.

export { router };
