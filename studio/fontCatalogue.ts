export type FontMeta={family:string;category:'sans'|'serif'|'display'|'mono';weights:number[];tags:string[]};

// Metadata is intentionally small and loaded before font files. The selected
// family is loaded on demand by FontPicker; Studio never downloads this list's
// font files at startup.
export const FONT_CATALOGUE:FontMeta[]=[
 {family:'Inter',category:'sans',weights:[400,500,600,700],tags:['clean','ui','modern']},
 {family:'Manrope',category:'sans',weights:[400,500,600,700,800],tags:['geometric','modern']},
 {family:'DM Sans',category:'sans',weights:[400,500,600,700],tags:['clean','friendly']},
 {family:'Space Grotesk',category:'sans',weights:[400,500,600,700],tags:['display','technical']},
 {family:'Montserrat',category:'sans',weights:[400,500,600,700,800],tags:['geometric','bold']},
 {family:'Poppins',category:'sans',weights:[400,500,600,700],tags:['rounded','friendly']},
 {family:'Nunito Sans',category:'sans',weights:[400,600,700,800],tags:['friendly','rounded']},
 {family:'Source Sans 3',category:'sans',weights:[400,500,600,700],tags:['accessible','readable']},
 {family:'Lato',category:'sans',weights:[400,700,900],tags:['humanist','classic']},
 {family:'Open Sans',category:'sans',weights:[400,600,700],tags:['readable','ui']},
 {family:'IBM Plex Sans',category:'sans',weights:[400,500,600,700],tags:['technical','neutral']},
 {family:'Work Sans',category:'sans',weights:[400,500,600,700],tags:['modern','editorial']},
 {family:'Raleway',category:'sans',weights:[400,500,600,700],tags:['elegant','display']},
 {family:'Oswald',category:'display',weights:[400,500,600,700],tags:['condensed','headline']},
 {family:'Bebas Neue',category:'display',weights:[400],tags:['condensed','poster']},
 {family:'Archivo',category:'sans',weights:[400,500,600,700],tags:['neutral','bold']},
 {family:'Georgia',category:'serif',weights:[400,700],tags:['system','classic']},
 {family:'Source Serif 4',category:'serif',weights:[400,600,700],tags:['editorial','readable']},
 {family:'Libre Baskerville',category:'serif',weights:[400,700],tags:['editorial','classic']},
 {family:'Lora',category:'serif',weights:[400,500,600,700],tags:['editorial','soft']},
 {family:'Playfair Display',category:'serif',weights:[400,500,600,700],tags:['fashion','editorial']},
 {family:'Cormorant Garamond',category:'serif',weights:[400,500,600,700],tags:['elegant','display']},
 {family:'IBM Plex Mono',category:'mono',weights:[400,500,600,700],tags:['code','technical']},
 {family:'JetBrains Mono',category:'mono',weights:[400,500,600,700],tags:['code','technical']},
 {family:'Roboto Mono',category:'mono',weights:[400,500,700],tags:['code','ui']},
 {family:'Arial',category:'sans',weights:[400,700],tags:['system','classic']},
 {family:'Helvetica Neue',category:'sans',weights:[400,500,700],tags:['system','neutral']},
 {family:'system-ui',category:'sans',weights:[400,500,600,700],tags:['system','native']},
];
