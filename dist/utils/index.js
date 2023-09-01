import { Datas } from '../models/event';
import * as fs from 'fs';
// Charger le fichier JSON dans une variable
const dataFilePath = 'datas.json';
const rawData = fs.readFileSync(dataFilePath, 'utf8');
const jsonData = JSON.parse(rawData);
// Instancier la classe Datas en passant les données du fichier JSON au constructeur
const dataInstance = new Datas(jsonData);
dataInstance.loadAndDisplayData(dataFilePath);
//# sourceMappingURL=index.js.map