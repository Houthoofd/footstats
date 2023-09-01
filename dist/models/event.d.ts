export interface Paris {
    Date: string;
    Ligue: string;
    Evenement: string;
    Cote: number;
    Mise: number;
    Evenement_deja_produit: "Oui" | "Non";
    Conseiller_par_Bard: "Oui" | "Non";
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
export declare class Datas {
    Strategie: string;
    Paris: Paris[];
    Mise_total: number;
    Nombres_de_paris: number;
    Taux_de_succes: string;
    Bankeroll_de_depart: string;
    Bankeroll_de_fin: number;
    Nombres_de_paris_gagnes: number;
    Nombres_de_paris_perdus: number;
    constructor(data: DataType);
}
