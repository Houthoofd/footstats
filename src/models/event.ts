export interface Paris {
  Date: string;
  Ligue: string;
  Evenement: string;
  Cote: number;
  Mise: number;
  Evenement_deja_produit: "Oui"|"Non";
  Conseiller_par_Bard: "Oui"|"Non";
  Status: string;
  Gain: number;
}

export interface DataType {
  Strategie: string;
  Paris: Paris[];
  Mise_total: number;
  Nombres_de_paris: number;
  Taux_de_succes: string;
  Bankeroll_de_depart: string;
  Bankeroll_de_fin: number;
  Nombres_de_paris_gagnes: number;
  Nombres_de_paris_perdus: number;
}

export class Datas {
  Strategie: string;
  Paris: Paris[];
  Mise_total: number;
  Nombres_de_paris: number;
  Taux_de_succes: string;
  Bankeroll_de_depart: string;
  Bankeroll_de_fin: number;
  Nombres_de_paris_gagnes: number;
  Nombres_de_paris_perdus: number;

  constructor(data:DataType) {
    this.Strategie = data.Strategie;
    this.Paris = data.Paris;
    this.Mise_total = data.Mise_total;
    this.Nombres_de_paris = data.Nombres_de_paris;
    this.Taux_de_succes = data.Taux_de_succes;
    this.Bankeroll_de_depart = data.Bankeroll_de_depart;
    this.Bankeroll_de_fin = data.Bankeroll_de_fin;
    this.Nombres_de_paris_gagnes = data.Nombres_de_paris_gagnes;
    this.Nombres_de_paris_perdus = data.Nombres_de_paris_perdus;
  }
}

