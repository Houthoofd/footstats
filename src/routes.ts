import express from 'express';
const app = express();
app.use(express.json()); // Ajoutez cette ligne pour utiliser le middleware json

console.log("test");
// Dans routes.ts
app.post('/dist/routes', (req, res) => {
  console.log(req);
  try {
    const dataFromFrontend = req.body;
    console.log('Data received from frontend:', dataFromFrontend);

    // Traitez les données reçues depuis le front-end (dataFromFrontend)
    // Effectuez les actions nécessaires (enregistrement, mise à jour, etc.)

    // Envoyez une réponse JSON de confirmation
    res.status(200).json({ message: 'Data saved successfully' });

    // Ajoutez un console.log ici pour voir la réponse envoyée par le serveur
    console.log('Response sent to frontend:', { message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


