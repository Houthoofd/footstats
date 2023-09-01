declare const data: {
    Strategie: string;
    Paris: {
        Date: string;
        Ligue: string;
        Evenement: string;
        Cote: number;
        Mise: number;
        Evenement_deja_produit: boolean;
        Probabilite: boolean;
        Status: string;
        Gain: number;
    }[];
    Mise_total: number;
    Nombres_de_paris: number;
    Taux_de_succes: string;
    Bankeroll_de_depart: string;
    Bankeroll_de_fin: number;
    Nombres_de_paris_gagnes: number;
    Nombres_de_paris_perdus: number;
}[];
export type DataType = typeof data;
export {};
