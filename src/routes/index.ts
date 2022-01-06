import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';
const routes = Router();

routes.get('/', PageController.home);
routes.get('/dogs', PageController.dogs);
routes.get('/cats', PageController.cats);
routes.get('/fisches', PageController.fisches);

routes.get('/search', SearchController.search);

export default routes;