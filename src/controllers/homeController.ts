import { Request, Response } from 'express';

class HomeController {
  public home(req: Request, res: Response) {
    res.status(200).json({
      message: 'Welcome to the Pet Store',
    });
  }
}

export const homeController = new HomeController();
