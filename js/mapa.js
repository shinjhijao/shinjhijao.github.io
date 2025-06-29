let map = L.map('map').setView([-16.2588034,-64.9609351], 6)


let OpenSMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'
   ).addTo(map);

   
// escala
   new L.control.scale({imperial: false}).addTo(map)

// capa geojason

//resultados municipios
function popupResuktados(feature, layer){
    if(feature.properties && feature.properties.DEPARTAMEN){
        layer.bindPopup("<strong>Departamento: </stronge>" + feature.properties.DEPARTAMEN
            + "<br><strong>Provincia: </strong>" + feature.properties.PROVINCIA
            + "<br><strong>Municipio: </strong>" + feature.properties.CAPITAL

        );
    }
}

// estilo capa

function styleMunis() {
    return {
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 1,
        fillOpacity: 0,
        interactive: true,
    }
}

//L.geoJson(reporte).addTo(map)

let Resultado = L.geoJson(json_reporteN_0,{
    onEachFeature: popupResuktados,
    style: styleMunis
 
}).addTo(map)

//resultados municipios
function popupSalud(feature, layer){
    if(feature.properties && feature.properties.SECTOR){
        layer.bindPopup("<strong>SECTOR: </stronge>" + feature.properties.SECTOR
            + "<br><strong>TIPO: </strong>" + feature.properties.TIPO
            + "<br><strong>SUBTIPO: </strong>" + feature.properties.SUBTIPO
            + "<br><strong>NOMBRE: </strong>" + feature.properties.NOMBRE
            + "<br><strong>OPERADOR: </strong>" + feature.properties.OPERADOR
        );
    }
}

// estilo capa

        function style_Edificios_Salud_0_0() {
            return {

        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 1,
        fillOpacity: 0,
        interactive: true,

            }
        }

//L.geoJson(reporte).addTo(map)

let Salud = L.geoJson(json_Edificios_Salud_0,{
    onEachFeature: popupSalud,
    style: style_Edificios_Salud_0_0
})




// flyto ir al municiopio
var municipios = {
    Charagua: { nombre: 'Charagua', lat: -19.09275, long: -61.60218},
    Pailón: { nombre: 'Pailón', lat: -17.75774, long: -61.91963},
    San_Pedro_de_Macha: { nombre: "San Pedro de Macha", lat: -18.90832, long: -66.09127},
    Pocoata: { nombre: "Pocoata", lat: -18.63946, long: -66.15582},
    Llica: { nombre: "Llica", lat: -20.04982, long: -68.41156},
    Tarata: { nombre: "Tarata", lat: -17.69111, long: -66.06685},
    Totora: { nombre: "Totora", lat: -17.57535, long: -65.13904},
    Buena_Vista: { nombre: "Buena Vista", lat: -17.69775, long: -63.75595},
    San_Carlos: { nombre: "San Carlos", lat: -17.29072, long: -63.75360},
    Magdalena: { nombre: "Magdalena", lat: -12.99484, long: -63.68752},
    San_Antonio_de_Esmoruco: { nombre: "San Antonio de Esmoruco", lat: -22.08414, long: -66.63447},
    Uriondo: { nombre: "Uriondo", lat: -21.74923, long: -64.64214},
    Mojinete: { nombre: "Mojinete", lat: -21.81409, long: -66.35106},
    Yunchará: { nombre: "Yunchará", lat: -21.79480, long: -65.16652},
    Caraparí: { nombre: "Caraparí", lat: -21.81609, long: -63.89895},
    San_Lorenzo: { nombre: "San Lorenzo", lat: -21.24317, long: -64.70648},
    El_Puente: { nombre: "El Puente", lat: -21.28163, long: -65.05620},
    San_Agustín: { nombre: "San Agustín", lat: -21.49503, long: -67.41411},
    Toro_Toro: { nombre: "Toro Toro", lat: -18.20940, long: -65.70093},
    San_Pedro: { nombre: "San Pedro", lat: -18.34062, long: -65.96821},
    Poroma: { nombre: "Poroma", lat: -18.62231, long: -65.38742},
    Ravelo: { nombre: "Ravelo", lat: -18.75269, long: -65.56337},
    Ocurí: { nombre: "Ocurí", lat: -18.88982, long: -65.76843},
    Tahua: { nombre: "Tahua", lat: -20.28738, long: -67.94375},
    San_Pablo: { nombre: "San Pablo", lat: -22.17551, long: -67.23207},
    Morochata: { nombre: "Morochata", lat: -17.20291, long: -66.57080},
    Porco: { nombre: "Porco", lat: -19.79610, long: -65.98876},
    Yocalla: { nombre: "Yocalla", lat: -19.49556, long: -65.94099},
    Urmiri: { nombre: "Urmiri", lat: -19.47275, long: -66.18073},
    Todos_Santos: { nombre: "Todos Santos", lat: -19.02804, long: -68.75866},
    Concepción: { nombre: "Concepción", lat: -15.34765, long: -62.09965},
    Santa_Rosa: { nombre: "Santa Rosa", lat: -16.65925, long: -63.83869},
    Huacaraje: { nombre: "Huacaraje", lat: -13.82398, long: -64.06275},
    La_Rivera: { nombre: "La Rivera", lat: -19.06233, long: -68.66020},
    Carangas: { nombre: "Carangas", lat: -18.90157, long: -68.66547},
    Bolpebra: { nombre: "Bolpebra", lat: -11.16948, long: -69.22575},
    Filadelfia: { nombre: "Filadelfia", lat: -11.75580, long: -68.53210},
    Yunguyo_del_Litoral: { nombre: "Yunguyo del Litoral", lat: -18.87591, long: -68.35171},
    Huachacalla: { nombre: "Huachacalla", lat: -18.79438, long: -68.27506},
    Esmeralda: { nombre: "Esmeralda", lat: -18.94476, long: -68.09215},
    Santuario_de_Quillacas: { nombre: "Santuario de Quillacas", lat: -19.31941, long: -66.81333},
    Pampa_Aullagas: { nombre: "Pampa Aullagas", lat: -19.23148, long: -67.16514},
    Santiago_de_Huari: { nombre: "Santiago de Huari", lat: -19.18465, long: -66.56853},
    Pazña: { nombre: "Pazña", lat: -18.61341, long: -66.91296},
    Tarabuco: { nombre: "Tarabuco", lat: -19.12137, long: -64.90981},
    Yamparáez: { nombre: "Yamparáez", lat: -19.24437, long: -65.06866},
    Yotala: { nombre: "Yotala", lat: -19.22627, long: -65.26574},
    Tacobamba: { nombre: "Tacobamba", lat: -19.20456, long: -65.56348},
    Betanzos: { nombre: "Betanzos", lat: -19.45245, long: -65.24051},
    Icla: { nombre: "Icla", lat: -19.46967, long: -64.74973},
    Ckochas: { nombre: "Ckochas", lat: -19.74208, long: -65.02211},
    Cruz_de_Machacamarca: { nombre: "Cruz de Machacamarca", lat: -18.71681, long: -68.37438},
    Antequera: { nombre: "Antequera", lat: -18.52495, long: -66.77543},
    Caripuyo: { nombre: "Caripuyo", lat: -18.18022, long: -66.59324},
    Corque: { nombre: "Corque", lat: -18.46433, long: -67.79950},
    Aiquile: { nombre: "Aiquile", lat: -18.32310, long: -65.10451},
    Sacaca: { nombre: "Sacaca", lat: -18.11765, long: -66.34363},
    Acasio: { nombre: "Acasio", lat: -18.04987, long: -66.01438},
    Machacamarca: { nombre: "Machacamarca", lat: -18.14608, long: -66.95739},
    Arampampa: { nombre: "Arampampa", lat: -17.94515, long: -66.12591},
    Sacabamba: { nombre: "Sacabamba", lat: -17.77643, long: -65.78626},
    Anzaldo: { nombre: "Anzaldo", lat: -17.84348, long: -65.91668},
    Toco: { nombre: "Toco", lat: -17.64747, long: -65.92048},
    Villa_Gualberto_Villarroel: { nombre: "Villa Gualberto Villarroel", lat: -17.69001, long: -65.77106},
    Tacachi: { nombre: "Tacachi", lat: -17.638, long: -65.78852},
    Villa_Rivero: { nombre: "Villa Rivero", lat: -17.64825, long: -65.85277},
    Cliza: { nombre: "Cliza", lat: -17.58194, long: -65.93669},
    Tacopaya: { nombre: "Tacopaya", lat: -17.82243, long: -66.63384},
    El_Choro: { nombre: "El Choro", lat: -18.24425, long: -67.18671},
    Toledo: { nombre: "Toledo", lat: -18.28090, long: -67.41534},
    Santiago_de_Huayllamarca: { nombre: "Santiago de Huayllamarca", lat: -17.92577, long: -67.82628},
    San_Pedro_de_Curahuara: { nombre: "San Pedro de Curahuara", lat: -17.63351, long: -67.96658},
    Sicaya: { nombre: "Sicaya", lat: -17.79121, long: -66.34158},
    Capinota: { nombre: "Capinota", lat: -17.76929, long: -66.22642},
    Arque: { nombre: "Arque", lat: -17.82592, long: -66.41747},
    Santivañez: { nombre: "Santivañez", lat: -17.56290, long: -66.21756},
    Paria: { nombre: "Paria", lat: -17.85719, long: -66.93380},
    Chacarilla: { nombre: "Chacarilla", lat: -17.54827, long: -68.16976},
    Tolata: { nombre: "Tolata", lat: -17.52514, long: -65.99960},
    Arbieto: { nombre: "Arbieto", lat: -17.55876, long: -66.06390},
    Papel_Pampa: { nombre: "Papel Pampa", lat: -17.69727, long: -67.70954},
    Porvenir: { nombre: "Porvenir", lat: -11.23817, long: -68.79372},
    Colquiri: { nombre: "Colquiri", lat: -17.42222, long: -66.99402},
    Santiago_de_Callapa: { nombre: "Santiago de Callapa", lat: -17.40088, long: -68.34708},
    Catacora: { nombre: "Catacora", lat: -17.25279, long: -69.48045},
    Yaco: { nombre: "Yaco", lat: -17.23521, long: -67.40068},
    Calacoto: { nombre: "Calacoto", lat: -17.56188, long: -68.77194},
    Collana: { nombre: "Collana", lat: -16.90372, long: -68.30118},
    Calamarca: { nombre: "Calamarca", lat: -16.89011, long: -68.11357},
    Colquencha: { nombre: "Colquencha", lat: -16.99189, long: -68.25697},
    Arani: { nombre: "Arani", lat: -17.59280, long: -65.7265},
    San_Benito: { nombre: "San Benito", lat: -17.49819, long: -65.87896},
    Corocoro: { nombre: "Corocoro", lat: -17.17313, long: -68.43223},
    Santiago_de_Machaca: { nombre: "Santiago de Machaca", lat: -17.18952, long: -69.27061},
    Nazacara_de_Pacajes: { nombre: "Nazacara de Pacajes", lat: -16.88997, long: -68.70951},
    Caquiaviri: { nombre: "Caquiaviri", lat: -17.10626, long: -68.82980},
    Luribay: { nombre: "Luribay", lat: -17.08685, long: -67.63798},
    Malla: { nombre: "Malla", lat: -17.01145, long: -67.42684},
    Comanche: { nombre: "Comanche", lat: -16.95044, long: -68.45016},
    Sapahaqui: { nombre: "Sapahaqui", lat: -16.95253, long: -67.83738},
    Cairoma: { nombre: "Cairoma", lat: -16.83960, long: -67.57486},
    Ichoca: { nombre: "Ichoca", lat: -17.18449, long: -67.19325},
    Villa_Libertad_Licoma: { nombre: "Villa Libertad Licoma", lat: -16.81189, long: -67.20314},
    Quime: { nombre: "Quime", lat: -16.84887, long: -67.34098},
    Laja: { nombre: "Laja", lat: -16.58850, long: -68.45957},
    Ayo_Ayo: { nombre: "Ayo Ayo", lat: -17.07673, long: -68.01965},
    Umala: { nombre: "Umala", lat: -17.40396, long: -67.99702},
    Sicasica: { nombre: "Sicasica", lat: -17.37221, long: -67.61946},
    Eucaliptus: { nombre: "Eucaliptus", lat: -17.63708, long: -67.44139},
    Caracollo: { nombre: "Caracollo", lat: -17.68902, long: -67.29387},
    Palca: { nombre: "Palca", lat: -16.66642, long: -67.82611},
    Yanacachi: { nombre: "Yanacachi", lat: -16.42571, long: -67.78954},
    Tapacarí: { nombre: "Tapacarí", lat: -17.57116, long: -66.65068},
    Tarvita: { nombre: "Tarvita", lat: -19.77219, long: -64.56179},
    Puna: { nombre: "Puna", lat: -19.87681, long: -65.40006},
    San_Lucas: { nombre: "San Lucas", lat: -20.16071, long: -64.89946},
    Camargo: { nombre: "Camargo", lat: -20.60255, long: -65.15598},
    Desaguadero: { nombre: "Desaguadero", lat: -16.61414, long: -68.97814},
    Jesús_de_Machaka: { nombre: "Jesús de Machaka", lat: -16.76069, long: -68.73960},
    Puerto_Mayor_de_Guaqui: { nombre: "Puerto Mayor de Guaqui", lat: -16.60673, long: -68.82099},
    Tito_Yupanqui: { nombre: "Tito Yupanqui", lat: -16.17908, long: -68.96044},
    Pucarani: { nombre: "Pucarani", lat: -16.36130, long: -68.41586},
    Combaya: { nombre: "Combaya", lat: -15.81593, long: -68.75340},
    Coroico: { nombre: "Coroico", lat: -16.16245, long: -67.77255},
    Coripata: { nombre: "Coripata", lat: -16.20909, long: -67.56734},
    Quiabaya: { nombre: "Quiabaya", lat: -15.60241, long: -68.71419},
    Aucapata: { nombre: "Aucapata", lat: -15.43810, long: -68.69948},
    Tipuani: { nombre: "Tipuani", lat: -15.58442, long: -68.05595},
    Sorata: { nombre: "Sorata", lat: -15.71933, long: -68.49412},
    La_Asunta: { nombre: "La Asunta", lat: -16.10803, long: -67.15591},
    Chuma: { nombre: "Chuma", lat: -15.59341, long: -68.86551},
    Guanay: { nombre: "Guanay", lat: -15.73615, long: -68.04226},
    Teoponte: { nombre: "Teoponte", lat: -15.40719, long: -67.68722},
    Mapiri: { nombre: "Mapiri", lat: -15.38005, long: -68.25775},
    Curva: { nombre: "Curva", lat: -14.98521, long: -68.96548},
    Pelechuco: { nombre: "Pelechuco", lat: -14.80117, long: -69.09061},
    Palos_Blancos: { nombre: "Palos Blancos", lat: -15.41772, long: -67.23157},
    San_Buenaventura: { nombre: "San Buenaventura", lat: -14.25915, long: -67.74495},
    Reyes: { nombre: "Reyes", lat: -13.40295, long: -67.05806},
    Sena: { nombre: "Sena", lat: -11.82480, long: -67.35386},
    San_Lorenzo: { nombre: "San Lorenzo", lat: -11.58424, long: -66.81900},
    Santa_Rosa: { nombre: "Santa Rosa", lat: -13.31880, long: -66.66144},
    Puerto_Gonzalo_Moreno: { nombre: "Puerto Gonzalo Moreno", lat: -11.16782, long: -66.32565},
    Puerto_Siles: { nombre: "Puerto Siles", lat: -12.42445, long: -64.98631},
    Mocomoco: { nombre: "Mocomoco", lat: -15.45106, long: -69.03474},
    Exaltación: { nombre: "Exaltación", lat: -12.80409, long: -65.78292},
    Bella_Flor: { nombre: "Bella Flor", lat: -10.93181, long: -67.93136},
    San_Pedro: { nombre: "San Pedro", lat: -11.02509, long: -66.58925},
    Puerto_Rico: { nombre: "Puerto Rico", lat: -11.32738, long: -67.53801},
    Santa_Rosa: { nombre: "Santa Rosa", lat: -10.73147, long: -67.27894},
    Ingavi: { nombre: "Ingavi", lat: -10.50570, long: -66.74555},
    Villa_Nueva: { nombre: "Villa Nueva", lat: -10.65789, long: -66.10209},
    Santos_Mercado: { nombre: "Santos Mercado", lat: -10.16144, long: -66.13744},
    Nueva_Esperanza: { nombre: "Nueva Esperanza", lat: -10.11462, long: -65.53835},
    Santiago_de_Huata: { nombre: "Santiago de Huata", lat: -16.08625, long: -68.83509},
    Puerto_Pérez: { nombre: "Puerto Pérez", lat: -16.32703, long: -68.64933},
    Chuquihuta_Ayllu_Jucumani: { nombre: "Chuquihuta Ayllu Jucumani", lat: -18.63223, long: -66.35331},
    Alto_Beni: { nombre: "Alto Beni", lat: -15.60570, long: -67.38941},
    Huarina: { nombre: "Huarina", lat: -16.16456, long: -68.59312},
    Bolivar: { nombre: "Bolivar", lat: -18.01035, long: -66.63637},
    Huatajata: { nombre: "Huatajata", lat: -16.19742, long: -68.69026},
    Apolo: { nombre: "Apolo", lat: -14.65724, long: -68.23532},
    Chua_Cocani: { nombre: "Chua Cocani", lat: -16.1577, long: -68.75165},
    Villa_Ancoraimes: { nombre: "Villa Ancoraimes", lat: -15.85426, long: -68.86876},
    Colcha_K: { nombre: "Colcha K", lat: -21.10104, long: -67.22367},
    Puerto_Mayor_de_Carabuco: { nombre: "Puerto Mayor de Carabuco", lat: -15.71214, long: -69.00096},
    Sabaya: { nombre: "Sabaya", lat: -18.90779, long: -68.60957},
    Batallas: { nombre: "Batallas", lat: -16.16594, long: -68.43386},
    Azurduy: { nombre: "Azurduy", lat: -20.18193, long: -64.43304},
    Caiza_D: { nombre: "Caiza D", lat: -20.01132, long: -65.65361},
    Copacabana: { nombre: "Copacabana", lat: -16.15294, long: -69.04969},
    Chaquí: { nombre: "Chaquí", lat: -19.62501, long: -65.54606},
    El_Villar: { nombre: "El Villar", lat: -19.69344, long: -64.27472},
    Vitiche: { nombre: "Vitiche", lat: -20.34963, long: -65.43243},
    Cotagaita: { nombre: "Cotagaita", lat: -20.67236, long: -65.76997},
    Villa_Abecia: { nombre: "Villa Abecia", lat: -20.98595, long: -65.28928},
    Las_Carreras: { nombre: "Las Carreras", lat: -21.2958, long: -65.32042},
    Tacacoma: { nombre: "Tacacoma", lat: -15.39248, long: -68.52302},
    Humanata: { nombre: "Humanata", lat: -15.41323, long: -69.17218},
    Huacareta: { nombre: "Huacareta", lat: -20.59484, long: -64.00999},
    Monteagudo: { nombre: "Monteagudo", lat: -20.01466, long: -64.07506},
    San_Pedro_de_Tiquina: { nombre: "San Pedro de Tiquina", lat: -16.23187, long: -68.86567},
    Alcalá: { nombre: "Alcalá", lat: -19.43606, long: -64.37147},
    Sopachuy: { nombre: "Sopachuy", lat: -19.44981, long: -64.54294},
    Tomina: { nombre: "Tomina", lat: -19.16279, long: -64.49640},
    Zudañez: { nombre: "Zudañez", lat: -19.12317, long: -64.69024},
    Mojocoya: { nombre: "Mojocoya", lat: -18.77711, long: -64.64618},
    Villa_Serrano: { nombre: "Villa Serrano", lat: -18.95160, long: -64.30409},
    Cocapata: { nombre: "Cocapata", lat: -16.48916, long: -66.55219},
    Presto: { nombre: "Presto", lat: -18.75512, long: -64.89337},
    Trigal: { nombre: "Trigal", lat: -18.28708, long: -64.13266},
    Quirusillas: { nombre: "Quirusillas", lat: -18.37057, long: -63.93745},
    Moromoro: { nombre: "Moromoro", lat: -18.32078, long: -64.34420},
    Samaipata: { nombre: "Samaipata", lat: -18.17526, long: -63.75002},
    Saipina: { nombre: "Saipina", lat: -18.02375, long: -64.63993},
    Omereque: { nombre: "Omereque", lat: -18.06682, long: -64.89993},
    Porongo: { nombre: "Porongo", lat: -17.75031, long: -63.36486},
    Vacas: { nombre: "Vacas", lat: -17.58904, long: -65.58256},
    Pocona: { nombre: "Pocona", lat: -17.68180, long: -65.37184},
    Okinawa_Uno: { nombre: "Okinawa Uno", lat: -17.32316, long: -62.86536},
    General_Saavedra: { nombre: "General Saavedra", lat: -17.16817, long: -63.17627},
    Gutiérrez: { nombre: "Gutiérrez", lat: -19.39451, long: -63.50366},
    Fernández_Alonso: { nombre: "Fernández Alonso", lat: -16.88866, long: -63.21232},
    Pampagrande: { nombre: "Pampagrande", lat: -18.04511, long: -64.15385},
    Mairana: { nombre: "Mairana", lat: -17.98525, long: -64.00701},
    Puerto_Villarroel: { nombre: "Puerto Villarroel", lat: -17.05797, long: -64.87075},
    Cuatro_Cañadas: { nombre: "Cuatro Cañadas", lat: -17.23911, long: -62.24544},
    San_Ramón: { nombre: "San Ramón", lat: -16.57691, long: -62.43449},
    San_Javier: { nombre: "San Javier", lat: -16.23393, long: -62.49100},
    Villa_Tunari: { nombre: "Villa Tunari", lat: -16.63471, long: -65.57217},
    Chimoré: { nombre: "Chimoré", lat: -16.55774, long: -64.91120},
    Tiraque: { nombre: "Tiraque", lat: -17.33654, long: -65.51729},
    Shinahota: { nombre: "Shinahota", lat: -17.05917, long: -65.31825},
    Culpina: { nombre: "Culpina", lat: -20.87028, long: -64.57239},
    Incahuasi: { nombre: "Incahuasi", lat: -20.59114, long: -64.57274},
    San_Juan: { nombre: "San Juan", lat: -16.86149, long: -63.99876},
    Tinguipaya: { nombre: "Tinguipaya", lat: -19.16985, long: -65.90428},
    Colpa_Bélgica: { nombre: "Colpa Bélgica", lat: -17.54360, long: -63.29237},
    El_Carmen_Rivero_Tórrez: { nombre: "El Carmen Rivero Tórrez", lat: -18.45267, long: -58.57474},
    San_Matias: { nombre: "San Matias", lat: -17.25506, long: -58.82334},
    Ayopaya: { nombre: "Ayopaya", lat: -17.14390, long: -66.80528},
    Urubicha: { nombre: "Urubicha", lat: -15.07084, long: -63.00011},
    Baures: { nombre: "Baures", lat: -13.71013, long: -62.85874},
    San_Andrés: { nombre: "San Andrés", lat: -15.37591, long: -64.13969},
    Loreto: { nombre: "Loreto", lat: -15.56779, long: -64.92083},
    San_Javier: { nombre: "San Javier", lat: -14.43413, long: -64.33893},
    San_Pedro: { nombre: "San Pedro", lat: -16.51733, long: -63.61197},
    San_Antonio_de_Lomerio: { nombre: "San Antonio de Lomerio", lat: -16.80634, long: -61.87415},
    Pojo: { nombre: "Pojo", lat: -17.60512, long: -64.85702},
    Entre_Ríos: { nombre: "Entre Ríos", lat: -17.31438, long: -64.52195},
    Colomi: { nombre: "Colomi", lat: -17.23326, long: -65.92056},
    Alalay: { nombre: "Alalay", lat: -17.77326, long: -65.63002},
    Vila_Vila: { nombre: "Vila Vila", lat: -17.97820, long: -65.67132},
    Ixiamas: { nombre: "Ixiamas", lat: -13.07368, long: -68.00688},
    Ayata: { nombre: "Ayata", lat: -15.32001, long: -68.711},
    Waldo_Ballivian: { nombre: "Waldo Ballivian", lat: -17.11509, long: -68.21938},
    Curahuara_de_Carangas: { nombre: "Curahuara de Carangas", lat: -17.98815, long: -68.67251},
    Choquecota: { nombre: "Choquecota", lat: -18.12213, long: -67.95512},
    Cajuata: { nombre: "Cajuata", lat: -16.63737, long: -67.24771},
    Inquisivi: { nombre: "Inquisivi", lat: -16.68320, long: -66.97809},
    Irupana: { nombre: "Irupana", lat: -16.51113, long: -67.51039},
    Chulumani: { nombre: "Chulumani", lat: -16.38917, long: -67.53764},
    Poopó: { nombre: "Poopó", lat: -18.36823, long: -66.95032},
    Escara: { nombre: "Escara", lat: -18.69449, long: -68.15919},
    Totora: { nombre: "Totora", lat: -17.85588, long: -68.18576},
    Turco: { nombre: "Turco", lat: -18.33533, long: -68.52804},
    Coipasa: { nombre: "Coipasa", lat: -19.32775, long: -68.31279},
    Uru_Chipaya: { nombre: "Uru Chipaya", lat: -19.06260, long: -68.04782},
    Chayanta: { nombre: "Chayanta", lat: -18.41435, long: -66.35083},
    Salinas_de_Garci_Mendoza: { nombre: "Salinas de Garci Mendoza", lat: -19.43668, long: -67.61411},
    Atocha: { nombre: "Atocha", lat: -21.07034, long: -66.16987},
    San_Pedro_de_Quemes: { nombre: "San Pedro de Quemes", lat: -21.30078, long: -68.02010},
    El_Puente: { nombre: "El Puente", lat: -16.14750, long: -63.48739},
    Comarapa: { nombre: "Comarapa", lat: -17.80238, long: -64.43203},
    Villa_Charcas: { nombre: "Villa Charcas", lat: -20.57206, long: -64.82069},
    Entre_Ríos: { nombre: "Entre Ríos", lat: -21.40015, long: -64.06070},
    San_Joaquín: { nombre: "San Joaquín", lat: -12.96013, long: -64.8552},
    San_Ramón: { nombre: "San Ramón", lat: -13.50776, long: -64.59961},
    Tiahuanacu: { nombre: "Tiahuanacu", lat: -16.55876, long: -68.69574},
    Puerto_Acosta: { nombre: "Puerto Acosta", lat: -15.55520, long: -69.21576},
    Escoma: { nombre: "Escoma", lat: -15.63817, long: -69.14920},
    Charaña: { nombre: "Charaña", lat: -17.65679, long: -69.15700},
    Achacachi: { nombre: "Achacachi", lat: -16.01676, long: -68.66341},
    Taraco: { nombre: "Taraco", lat: -16.46232, long: -68.85348},
    San_Andrés_de_Machaca: { nombre: "La (Marka) San Andrés de Machaca", lat: -16.90051, long: -69.04319},
    Uncía: { nombre: "Uncía", lat: -18.58842, long: -66.53141},
    Mecapaca: { nombre: "Mecapaca", lat: -16.71921, long: -67.97400},
    Pasorapa: { nombre: "Pasorapa", lat: -18.39244, long: -64.60108},
    Villazón: { nombre: "Villazón", lat: -21.91320, long: -65.64192},
    Padcaya: { nombre: "Padcaya", lat: -22.13709, long: -64.52954},
    Charazani: { nombre: "Charazani", lat: -15.09652, long: -68.77368},
    Mizque: { nombre: "Mizque", lat: -17.97959, long: -65.42653},
    Postrervalle: { nombre: "Postrervalle", lat: -18.62507, long: -63.76317},
    Cabezas: { nombre: "Cabezas", lat: -18.46389, long: -63.26847},
    San_Miguel: { nombre: "San Miguel", lat: -16.84299, long: -61.27238},
    San_Rafael: { nombre: "San Rafael", lat: -16.81549, long: -60.14095},
    Macharetí: { nombre: "Macharetí", lat: -20.73444, long: -62.88269},
    Raqaypampa: { nombre: "TIOC-Raqaypampa", lat: -18.23464, long: -65.40492},
    Belén_de_Andamarca: { nombre: "Belén de Andamarca", lat: -18.89316, long: -67.7506},
    Andamarca: { nombre: "Andamarca", lat: -18.89229, long: -67.38112},
    TIOC_Guarani_Chaqueño_de_Huacaya: { nombre: "TIOC Guarani Chaqueño de Huacaya", lat: -20.71642, long: -63.59487},
    Boyuibe: { nombre: "Boyuibe", lat: -20.34541, long: -63.06735},
    Colquechaca: { nombre: "Colquechaca", lat: -18.64901, long: -65.89013},
    Pucará: { nombre: "Pucará", lat: -18.76258, long: -64.19110},
    Padilla: { nombre: "Padilla", lat: -19.37479, long: -64.16099},
    Villa_Vaca_Guzmán: { nombre: "Villa Vaca Guzmán", lat: -19.90267, long: -63.80130},
    Lagunillas: { nombre: "Lagunillas", lat: -19.77326, long: -63.64477},
    Cuevo: { nombre: "Cuevo", lat: -20.32733, long: -63.53094},
    Jatun_Ayllu_Yura: { nombre: "TIOC-Jatun Ayllu Yura", lat: -20.16362, long: -66.09203},
    Territorio_Indigena_Multietnico: { nombre: "TIOC-Territorio Indigena Multietnico", lat: -15.37623, long: -66.04791},
    Tomave: { nombre: "Tomave", lat: -20.08005, long: -66.49575},
    Robore: { nombre: "Robore", lat: -18.33314, long: -59.75528},
    San_Jose_de_Chiquitos: { nombre: "San Jose de Chiquitos", lat: -17.84794, long: -60.7407},
    Santa_Cruz_de_la_Sierra: { nombre: "Santa Cruz de la Sierra", lat: -17.79357, long: -63.14288},
    Quillacollo: { nombre: "Quillacollo", lat: -17.37763, long: -66.28130},
    Sacaba: { nombre: "Sacaba", lat: -17.39961, long: -66.05692},
    Tiquipaya: { nombre: "Tiquipaya", lat: -17.34229, long: -66.21979},
    Colcapirhua: { nombre: "Colcapirhua", lat: -17.38729, long: -66.23165},
    Sipe_Sipe: { nombre: "Sipe Sipe", lat: -17.45076, long: -66.35036},
    Vinto: { nombre: "Vinto", lat: -17.38737, long: -66.32559},
    Portachuelo: { nombre: "Portachuelo", lat: -17.35073, long: -63.39676},
    Yacuiba: { nombre: "Yacuiba", lat: -22.01045, long: -63.67702},
    Tarija: { nombre: "Tarija", lat: -21.54481, long: -64.72315},
    Sucre: { nombre: "Sucre", lat: -19.03168, long: -65.27045},
    Llallagua: { nombre: "Llallagua", lat: -18.42493, long: -66.57181},
    Huanuni: { nombre: "Huanuni", lat: -18.28665, long: -66.84028},
    Oruro: { nombre: "Oruro", lat: -17.96744, long: -67.09725},
    Puerto_Quijarro: { nombre: "Puerto Quijarro", lat: -19.00190, long: -57.71722},
    Cobija: { nombre: "Cobija", lat: -11.03279, long: -68.77631},
    Cochabamba: { nombre: "Cochabamba", lat: -17.42328, long: -66.16836},
    Punata: { nombre: "Punata", lat: -17.54600, long: -65.83830},
    Viacha: { nombre: "Viacha", lat: -16.60597, long: -68.25619},
    Patacamaya: { nombre: "Patacamaya", lat: -17.23915, long: -67.91697},
    Achocalla: { nombre: "Achocalla", lat: -16.60164, long: -68.15967},
    El_Alto: { nombre: "El Alto", lat: -16.52786, long: -68.21390},
    Nuestra_Señora_de_La_Paz: { nombre: "Nuestra Señora de La Paz", lat: -16.51087, long: -68.10364},
    Rurrenabaque: { nombre: "Rurrenabaque", lat: -14.43584, long: -67.51812},
    San_Borja: { nombre: "San Borja", lat: -14.86153, long: -66.74564},
    Riberalta: { nombre: "Riberalta", lat: -11.00900, long: -66.05487},
    Guayaramerin: { nombre: "Guayaramerin", lat: -10.82519, long: -65.35519},
    Caranavi: { nombre: "Caranavi", lat: -15.83521, long: -67.56260},
    Tupiza: { nombre: "Tupiza", lat: -21.44243, long: -65.72011},
    Potosi: { nombre: "Potosi", lat: -19.58030, long: -65.75587},
    Vallegrande: { nombre: "Vallegrande", lat: -18.48825, long: -64.10481},
    Villamontes: { nombre: "Villamontes", lat: -21.26396, long: -63.46596},
    La_Guardia: { nombre: "La Guardia", lat: -17.88435, long: -63.27204},
    El_Torno: { nombre: "El Torno", lat: -17.99467, long: -63.38426},
    Cotoca: { nombre: "Cotoca", lat: -17.75287, long: -62.99684},
    Montero: { nombre: "Montero", lat: -17.33495, long: -63.25377},
    Warnes: { nombre: "Warnes", lat: -17.58117, long: -63.16122},
    Mineros: { nombre: "Mineros", lat: -17.12432, long: -63.23274},
    Yapacani: { nombre: "Yapacani", lat: -17.40074, long: -63.90861},
    Puerto_Suarez: { nombre: "Puerto Suarez", lat: -18.97293, long: -57.80463},
    San_Ignacio_de_Velasco: { nombre: "San Ignacio de Velasco", lat: -16.37785, long: -60.96415},
    Ascencion_de_Guarayos: { nombre: "Ascencion de Guarayos", lat: -15.89447, long: -63.18556},
    Trinidad: { nombre: "Trinidad", lat: -14.82576, long: -64.90079},
    Uyuni: { nombre: "Uyuni", lat: -20.46078, long: -66.82543},
    San_Julian: { nombre: "San Julian", lat: -16.90676, long: -62.61669},
    Bermejo: { nombre: "Bermejo", lat: -22.73207, long: -64.33417},
    Challapata: { nombre: "Challapata", lat: -18.89965, long: -66.77019},
    Camiri: { nombre: "Camiri", lat: -20.03517, long: -63.52565},
    Santa_Ana_del_Yacuma: { nombre: "Santa Ana del Yacuma", lat: -13.75101, long: -65.43648},
    San_Ignacio_de_Moxos: { nombre: "San Ignacio de Moxos", lat: -14.99676, long: -65.63998},
    
    }
    
    // Función para acercar al municipio seleccionado
    function acercarMunicipio() {
        var select = document.getElementById('municipioSelect');
        var municipioID = select.value;
        var municipio = municipios[municipioID];
    
        if (municipio) {
            L.marker([municipio.lat, municipio.long]).addTo(map)
            map.setView([municipio.lat, municipio.long], 10)
        }
    }



  //control de capas

  const layers = {

    Resultado: Resultado,
    Salud: Salud
   

};

function toggleLayer(checkbox, layer) {
    if (checkbox.checked) {
      map.addLayer(layer);
    } else {
      map.removeLayer(layer);
    }
  }

 