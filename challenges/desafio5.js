db.produtos.find(
  { 
    $or: [
      { curtidas: 36 },
      { vendidos: 85 },
    ],
  },
  { _id: 0, vendidos: 1, nome: 1, curtidas: 1 },
);