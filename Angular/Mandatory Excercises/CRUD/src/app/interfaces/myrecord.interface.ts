
export interface MyTableHeadElements {
    id:number;
    name: string;
    email: string;
    password: string;
    password2: string;
    confirmation: boolean;
    country: Countries;
    city: string; 
}
export enum Countries {
    
    Alemania     = "Alemania",
    Austria      = "Austria",
    Bulgaria     ="Bulgaria",
    Bélgica      = "Belgica",
    Chipre       = "Chipre",
    Croacia      = "Croacia",
    Dinamarca    = "Dinamarca",
    Eslovaquia   = "Eslovaquia",
    Eslovenia    = "Eslovenia",
    España       = "España",
    Estonia      = "Estonia",
    Finlandia    = "Finlandia",
    Francia      = "Francia",
    Grecia       = "Grecia",
    Hungría      = "Hungria",
    Irlanda      = "Irlanda",
    Italia       = "Italia", 
    Letonia      = "Letonia",
    Lituania     = "Lituania",
    Luxemburgo   = "Luxemburgo",
    Malta        = "Malta",
    PaísesBajos      = "Paises Bajos",
    Polonia          = "Polonia",
    Portugal         = "Portugal", 
    RepúblicaCheca   = "Republica Checa",
    Rumanía          = "Rumania",
    Suecia           = "Suecia",
}