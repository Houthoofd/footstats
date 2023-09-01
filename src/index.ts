import { Datas } from './models/event';

window.onload = function() {
  console.log("fichier chargé")
  fetch('http://localhost:3000/datas.json')
    .then(response => response.json())
    .then(jsonData => {
      const dataInstance = new Datas(jsonData);
      createTable(dataInstance.Paris);
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
};

function createTable(data) {
  const table = document.createElement('table');
  table.setAttribute('class','display');
  const headerRow = document.createElement('tr');
  
  // Créer les en-têtes de colonnes
  for (const key in data[0]) {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Remplir les données
  data.forEach(item => {
    const row = document.createElement('tr');
    for (const key in item) {
      const cell = document.createElement('td');
      cell.textContent = item[key];
      row.appendChild(cell);
    }
    table.appendChild(row);
  });

  // Ajouter le tableau au corps de la page
  document.body.appendChild(table);
}

// Déclarez la variable existingData à l'extérieur de la fonction
let existingData = [];

// Écouteur d'événement pour le bouton de validation
const valider_btn = document.querySelectorAll('button')[0];
valider_btn.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.getElementById('encodeur') as HTMLFormElement;
  const table = document.getElementById('display') as HTMLTableElement;
  const formData = new FormData(form);

  const newData = {
    Date: formatDate(new Date()),
    Ligue: formData.get('league_name').toString(),
    Evenement: formData.get('event_name').toString(),
    Cote: parseFloat(formData.get('odds').toString()),
    Mise: parseFloat(formData.get('mise').toString()),
    Evenement_deja_produit: formData.get('event_done'),
    Conseiller_par_Bard: formData.get('advice').toString(),
    Status: 'En Attente',
    Gain: 0
  };

  // Ajouter le nouvel objet au tableau de données existant
  existingData.push(newData);

  // Mettre à jour le tableau affiché dans la page
  const display_table = document.querySelector('.display') as HTMLTableElement;

  // Créer une nouvelle ligne
  const newRow = display_table.insertRow();

  // Liste des clés dans l'ordre souhaité pour affichage
  const keys = ['Date', 'Ligue', 'Evenement', 'Cote', 'Mise', 'Conseiller_par_Bard', 'Evenement_deja_produit', 'Status', 'Gain'];

  for (const key of keys) {
    const cell = newRow.insertCell();
    cell.textContent = newData[key];
  }

  // Envoyer les données au backend
  sendDataToBackend(newData);
});



function sendDataToBackend(data) {
  console.log(data);
  fetch('http://localhost:3000/dist/routes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(responseData => {
    console.log('Backend response:', responseData);
    // Mettre à jour le tableau affiché dans la page si nécessaire
  })
  .catch(error => {
    console.error('Error sending data to backend:', error);
  });
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}




