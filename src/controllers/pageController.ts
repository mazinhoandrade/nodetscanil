import { Request, Response } from "express";
import { createMenuOption } from "../helpers/funcoes";
import { Pet } from "../models/Pet";


export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuOption('all'),
        banner: {
            title: 'Todos os Animais',
            backgrond: 'allanimals.jpg'
        },
        list,

        
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuOption('dog'),
        list,
        banner: {
            title: 'Cachorros',
            backgrond: 'banner_dog.jpg'
        }
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuOption('cat'),
        list,
        banner: {
            title: 'Gatos',
            backgrond: 'banner_cat.jpg'
        }
    });
};

export const fisches = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuOption('fish'),
        list,
        banner: {
            title: 'Peixes',
            backgrond: 'banner_fish.jpg'
        }
    });
};