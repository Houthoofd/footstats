import express from 'express';
import cors from 'cors';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'; // Ajoutez cette ligne
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// Utilisez le middleware cors pour gérer les en-têtes CORS
app.use(cors());
app.use(bodyParser.json()); // Ajoutez cette ligne pour traiter les données JSON
app.use(express.json()); // Ajoutez cette ligne pour utiliser le middleware json
// Route pour gérer les requêtes POST depuis le front-end
app.post('/dist/routes', (req, res) => {
    try {
        // Traitez les données reçues depuis le front-end (req.body)
        const newData = req.body; // Les données envoyées par le front-end
        console.log('Data received from frontend:', newData);
        // Ajoutez les nouvelles données au fichier datas.json
        addDataToDatasFile(newData);
        // Envoyez une réponse JSON de confirmation
        res.status(200).json({ message: 'Data saved successfully' });
    }
    catch (error) {
        // En cas d'erreur, envoyez une réponse d'erreur
        res.status(500).json({ error: 'An error occurred' });
    }
});
// Fonction pour ajouter de nouvelles données au fichier datas.json
function addDataToDatasFile(newData) {
    const datas = loadDatas();
    //console.log(newData, "addDataToDatasFile0");
    datas.Paris.push(newData);
    console.log(datas.Paris);
    try {
        const filePath = path.join(__dirname, '..', 'datas.json');
        fs.writeFileSync(filePath, JSON.stringify(datas, null, 2), 'utf-8');
        console.log('Data updated in datas.json');
    }
    catch (error) {
        console.error('Error updating data in datas.json:', error);
    }
}
// Fonction pour charger les données depuis le fichier datas.json
function loadDatas() {
    try {
        const filePath = path.join(__dirname, '..', 'datas.json');
        console.log(filePath, "loadDatas");
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(data);
        return JSON.parse(data);
    }
    catch (error) {
        console.error('Error loading datas:', error);
        return [];
    }
}
app.get('/datas.json', (req, res) => {
    const filePath = path.join(__dirname, '..', 'datas.json');
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    }
    catch (err) {
        res.status(404).send('Not Found');
    }
});
// Serve other static files
app.use(express.static(path.join(__dirname, '..')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map