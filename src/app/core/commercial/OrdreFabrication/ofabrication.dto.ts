export interface OfabricationDto {
    IDOFabrication: number;
    OFAbrication: string;
    DtDebut: Date;
    DtFin: Date;
    IDArticle: number;
    Quantite: number;
    IDCommande: number;
    IDDetailCmd: number;
    Etat: boolean;
    IDAr_Couleur: number;
    IDGamme: number;
    IdProcess: number;
    TypeSuivi: boolean;
    IDGrille: number;
    IDStepOf: number;
    isGrilleCompose: boolean;
    QtteLct: number;
    Prix: number;
    prixMP: number;
    AutresPrix: number;
    DateExport: Date;
    IDChaineMontage: number;
    IDTiers: number;
    Priorite: number;
    DateTissu: Date;
    DateFourniture: Date;
    IDCategorieOF: number;
    DateExportPrevue: Date;
    Majoration: number;
    IDClient: number;
    IsSemiFini: boolean;
    IDOFabricationSF: number;
    NumInterne: number;
    DateCreation: Date;
    SaisiLe: Date;
    SaisiPar: string;
    ModifiePar: string;
    EtatBlocage: boolean;
    RendementPrevu: number;
    EffectifPrevu: number;
    NbrJoursAvantExport: number;
    TxAvcSimulation: number;
    IsSatisfied: boolean;
    DateExportPrevue2: Date;
    CloturerPar: string;
    CloturerLE: Date;
    IDPhaseSansChevauch: number;
    ValeurOF: number;
    DateLct: Date;
    IDOFabricationParent: number;
    isParent: boolean;
    NumOFClient: string;
    NumCmdClient: string;
    IDSaison: number;
    IDStatutOf: number;
    ValeurOFEstime: number;
    DateImportation: Date;
    IDClientFinal: number;
    Description: string;
    PO: string;
    IDAr_Lot: number;
    Order: number;
}
