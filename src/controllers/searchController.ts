import { Request, Response } from "express";
import { Pet } from "../models/Pet";
import { createMenuOption } from "../helpers/funcoes";
import { exit } from "process";

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    (!query)?res.redirect('/'):exit;

    let list = Pet.getFromName(query);
    res.render('pages/page', {
        menu: createMenuOption(''),
        list,
        query
    });
};
