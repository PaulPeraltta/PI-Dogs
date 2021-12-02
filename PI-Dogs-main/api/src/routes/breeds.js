const { Router } = require("express");
const { Op } = require("sequelize");
const axios = require("axios");
const { Breed, Temp } = require("../db");
const { DOGI_KEY } = process.env;

const router = Router();

router.get("/", (req, res, next) => {
  let name = req.query.name;
  let breedApi;
  let breedDb;
  let filteredBreedsApi;

  if (name) {
    breedApi = axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}`,
      {
        header: { "x-api-key": `${DOGI_KEY}` },
      }
    );
    breedDb = Breed.findAll({
      include: Temp,
      where: {
        name: {
          [Op.iLike]: "%" + name + "%",
        },
      },
      order: [["name", "ASC"]],
      // raw: true,
      // nest: true,
    });
  } else {
    // agregar pagination "&page1" hasta "&page10";
    breedApi = axios.get(`https://api.thedogapi.com/v1/breeds`, {
      headers: { "x-api-key": `${DOGI_KEY}` },
    });
    breedDb = Breed.findAll({
      include: Temp,
      // raw: true,
      // nest: true,
    });
  }
  Promise.all([breedApi, breedDb])
    .then((resp) => {
      const [respBreedApi, respBreedDb] = resp;
      if (!name) {
        filteredBreedsApi = respBreedApi.data.map((b) => {
          return {
            id: b.id,
            name: b.name,
            image: b.image.url,
            height: b.height.metric,
            weight: b.weight.metric,
            life_span: b.life_span,
            temps: b.temperament,
          };
        });
      } else {
        filteredBreedsApi = respBreedApi.data.map((b) => {
          return {
            id: b.id,
            name: b.name,
            image: b.image,
            height: b.height.metric,
            weight: b.weight.metric,
            life_span: b.life_span,
            temps: b.temperament,
          };
        });
      }
      let allBreeds = [...filteredBreedsApi, ...respBreedDb];
      allBreeds.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      res.send(allBreeds);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  if (id.length > 30) {
    Breed.findByPk(id)
      .then((breed) => res.send(breed))
      .catch((error) => next(error));
  } else {
    axios
      .get(`https://api.thedogapi.com/v1/images/search?breed_id=${id}`, {
        header: { "x-api-key": `${DOGI_KEY}` },
      })
      .then((breed) => {
        logBreed = breed.data[0];
        orderedBreed = {
          id: logBreed.breeds[0].id,
          name: logBreed.breeds[0].name,
          image: logBreed.url,
          height: logBreed.breeds[0].height.metric,
          weight: logBreed.breeds[0].weight.metric,
          life_span: logBreed.breeds[0].life_span,
          temps: logBreed.breeds[0].temperament,
        };
        res.send(orderedBreed);
      })
      .catch((error) => next(error));
  }
});

router.post("/", async (req, res, next) => {
  const { name, image, height, weight, life_span, createdInDb, temperament } = req.body;

  let newDog = await Breed.create({
    name,
    image,
    height,
    weight,
    life_span,
    createdInDb,
  })

  let tempDb = await Temp.findAll({
    where: { name: temperament }
  })

  newDog.addTemp(tempDb)
  res.send('Congratulations! Your Dog was created successfully')
  


  BreedCreated.addTemp(TempsDb)
    .then(() => res.send("Congratulations! Your Dog was created successfully"))
    .catch((error) => next(error));
});

router.post("/:breedId/temp/:tempId", (req, res, next) => {
  const { breedId, tempId } = req.params;
  Breed.findByPk(breedId)
    .then((breed) => {
      breed.addTemp(tempId);
      res.send(200);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/", (req, res, next) => {
  res.send("Soy put en /breed");
});

router.delete("/", (req, res, next) => {
  res.send("Soy delete en /breed");
});

module.exports = router;
