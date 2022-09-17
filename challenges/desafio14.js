db.produtos.find(
  { ingredientes: "picles" },
  { _id: 0, nome: 1, valoresNutricionais: { $slice: 3 }, ingredientes: 1 },
);