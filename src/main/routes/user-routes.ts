import { Response, Router } from "express";

import { UserController } from "../../app/controllers/user-controller";
import { makeUserUseCase } from "../factories/user-factory";
import { adaptRoute } from "../adapters/adapter-route";
const userController = new UserController(makeUserUseCase());
export const UserRoutes = (router: Router): void => {
  const prefix = "/users";
  router.post(prefix + "/", adaptRoute(userController, "createUser"));
  router.get(prefix + "/", adaptRoute(userController, "getUsersByVictorys"));
  router.get(prefix + "/test", (req, res: Response) => {
    res.json({
      goat: "luix",
    });
  });
  router.patch(
    prefix + "/add-victory/:id",
    adaptRoute(userController, "addVictory")
  );
  router.patch(
    prefix + "/remove-victory/:id",
    adaptRoute(userController, "removeVictory")
  );
};
