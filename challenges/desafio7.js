db.produtos.find(
  { 
    $and: [
      { tags: { $exists: false } },
      { vendidos: { $ne: 50 } },
    ],
  },
  { _id: 0, vendidos: 1, nome: 1 },
);