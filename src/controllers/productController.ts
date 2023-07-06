import express, { Express, Request, Response } from 'express';

async function productController(req: Request, res: Response) {
  return res
      .status(200)
      .json([
        {id:1, quantity: 1, imageUrl: "https://media.famillemary.fr/media/catalog/product/cache/ab108d34ae64fe8e0dffcb4c479290ce/m/i/miel_fleurs_anjou_1.png",title: 'Miel de fleurs', description: "Toutes les fleurs", price:2},
        {id:2, quantity: 1, imageUrl:"https://www.noel-apiculture.fr/wp-content/uploads/2019/06/Tilleul-500-g.jpg",title: 'Miel tilleul', description: "Du tilleul rien que pour vous", price:10},
        {id:3, quantity: 1, imageUrl:"https://www.miel-lerucherdelours.fr/1765-thickbox_default/miel-de-foret.jpg",title: 'Miel de foret', description: "De forêt pour plus d'onctuosité", price:20},
        {id:4, quantity: 1, imageUrl: "https://media.famillemary.fr/media/catalog/product/cache/ab108d34ae64fe8e0dffcb4c479290ce/m/i/miel_fleurs_anjou_1.png",title: 'Miel de fleurs', description: "Toutes les fleurs", price:25},
        {id:5, quantity: 1, imageUrl:"https://www.noel-apiculture.fr/wp-content/uploads/2019/06/Tilleul-500-g.jpg",title: 'Miel tilleul', description: "Du tilleul rien que pour vous", price:10},
        {id:6, quantity: 1, imageUrl:"https://www.miel-lerucherdelours.fr/1765-thickbox_default/miel-de-foret.jpg",title: 'Miel de foret', description: "De forêt pour plus d'onctuosité", price:20}
      ])
};

export default productController;