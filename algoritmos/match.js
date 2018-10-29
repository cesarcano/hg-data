const main_url = "https://raw.githubusercontent.com/cesarcano/hg-data/master/hg_database.json";
var hg_gas = [];
var gas_conLatLng = [];
var new_gas = [];
var gasolineras = [
  {
     "marca": "CHEVRON",
     "direccion": "Avenida del Roble No. 14058",
     "lat": 32.43441,
     "lng": -116.953
  },
  {
     "marca": "CHEVRON",
     "direccion": "Circuito Loma Dorada No. 19161",
     "lat": 32.49984,
     "lng": -116.909
  },
  {
     "marca": "CHEVRON",
     "direccion": "Carretera a San Felipe No. 199",
     "lat": 32.60459,
     "lng": -115.436
  },
  {
     "marca": "CHEVRON",
     "direccion": "Boulevard Cuauhtémoc Sur No. 4690",
     "lat": 32.4971932,
     "lng": -117.0204098
  },
  {
     "marca": "CHEVRON",
     "direccion": "Boulevard Insurgentes No. 16500",
     "lat": 32.50465,
     "lng": -116.952
  },
  {
     "marca": "CHEVRON",
     "direccion": "Calle 4ta. Sur No. 902",
     "lat": 32.53723,
     "lng": -116.923
  },
  {
     "marca": "CHEVRON",
     "direccion": "Boulevard Manuel J. Clouthier No. 18378",
     "lat": 32.49483,
     "lng": -116.924
  },
  {
     "marca": "CHEVRON",
     "direccion": "Cañadas del Florido 30 No 23460",
     "lat": 32.4688983,
     "lng": -116.8460281
  },
  {
     "marca": "COMBURED",
     "direccion": "Golfo de México 112",
     "lat": 22.144978,
     "lng": -100.946287
  },
  {
     "marca": "COMBURED",
     "direccion": "Av. Morales Saucito 2425",
     "lat": 22.168183,
     "lng": -101.018579
  },
  {
     "marca": "G500",
     "direccion": "Carretera lechería Texcoco",
     "lat": 19.612659,
     "lng": -99.0536879
  },
  {
     "marca": "G500",
     "direccion": "Avenida Jorge Jimenez Cantú",
     "lat": 19.5495294,
     "lng": -99.2840574
  },
  {
     "marca": "G500",
     "direccion": "Av. Prolongación División del Norte",
     "lat": 19.2678212,
     "lng": -99.1163595
  },
  {
     "marca": "G500",
     "direccion": "Carretera Tlanepantla-Nicolas Romero",
     "lat": 19.5901079,
     "lng": -99.2763355
  },
  {
     "marca": "G500",
     "direccion": "Periférico Carlos Pellicer Cámara",
     "lat": 17.968231,
     "lng": -92.9418599
  },
  {
     "marca": "G500",
     "direccion": "Avenida Hidalgo",
     "lat": 19.7316125,
     "lng": -101.1714929
  },
  {
     "marca": "G500",
     "direccion": "Calle 59 Tablaje Catastral por Anillo Periferico",
     "lat": 20.9937618,
     "lng": -89.6828574
  },
  {
     "marca": "G500",
     "direccion": "Carretera Queretáro - San Luis Potosi",
     "lat": 20.6702251407788,
     "lng": -100.434031915344
  },
  {
     "marca": "G500",
     "direccion": "Av. Apatlaco",
     "lat": 19.3812897583123,
     "lng": -99.1111331398811
  },
  {
     "marca": "G500",
     "direccion": "Av. Nicolas",
     "lat": 19.5514816306632,
     "lng": -99.2057228750295
  },
  {
     "marca": "G500",
     "direccion": "Av. de la Hacienda",
     "lat": 19.5743027296754,
     "lng": -99.2324569281723
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Harold R Pape",
     "lat": 26.9257732,
     "lng": -101.4190961
  },
  {
     "marca": "G500",
     "direccion": "Circuito Colonias (Matriz)",
     "lat": 20.9971260019294,
     "lng": -89.6237477790985
  },
  {
     "marca": "G500",
     "direccion": "Prolong. Bernardo Quintana",
     "lat": 20.62044,
     "lng": -100.457598
  },
  {
     "marca": "G500",
     "direccion": "Hidalgo esquina Guanajuato",
     "lat": 20.1250559,
     "lng": -98.7595303
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Luis Donaldo Colosio",
     "lat": 20.1071132,
     "lng": -98.7171241
  },
  {
     "marca": "G500",
     "direccion": "Carretera Circuito del Golfo Cárdenas-Coatzacoalcos",
     "lat": 17.9992978,
     "lng": -93.3945862
  },
  {
     "marca": "G500",
     "direccion": "Carretera Villahermosa-Nacajuca",
     "lat": 18.1065192085879,
     "lng": -92.9601633050637
  },
  {
     "marca": "G500",
     "direccion": "Libramiento Sur Oriente",
     "lat": 16.7312977,
     "lng": -93.1069692
  },
  {
     "marca": "G500",
     "direccion": "Adolfo Mateos, Esquina Niños Heroes",
     "lat": 18.2582642,
     "lng": -93.1850239
  },
  {
     "marca": "G500",
     "direccion": "Km 1 Carretera Pinotepa Nacional-Puerto Escondido",
     "lat": 16.3351039,
     "lng": -98.0390791
  },
  {
     "marca": "G500",
     "direccion": "Km 1 Carretera Pinotepa Nacional-Acapulco",
     "lat": 16.3543353,
     "lng": -98.0700333
  },
  {
     "marca": "G500",
     "direccion": "Carretera Federal Costera del Pacífico tramo Puerto Escondido - Pochutla Km 201",
     "lat": 15.7164147,
     "lng": -96.5837914
  },
  {
     "marca": "G500",
     "direccion": "Carretera Cayaco-Puerto Márquez Km 3",
     "lat": 16.8265333,
     "lng": -99.8133322
  },
  {
     "marca": "G500",
     "direccion": "Avenida Lázaro Cárdenas",
     "lat": 16.8749974,
     "lng": -99.8177091
  },
  {
     "marca": "G500",
     "direccion": "Avenida Plutarco Elías Calles",
     "lat": 28.1751583,
     "lng": -105.4533779
  },
  {
     "marca": "G500",
     "direccion": "Avenida Rio San Pedro Sur",
     "lat": 28.1695731,
     "lng": -105.4737954
  },
  {
     "marca": "G500",
     "direccion": "Tramo Carretero Estación Paty-Visita Hermosa",
     "lat": 20.3338108,
     "lng": -102.2309714
  },
  {
     "marca": "G500",
     "direccion": "Av. Plan de Ayala",
     "lat": 18.9239670889832,
     "lng": -99.2190363331699
  },
  {
     "marca": "G500",
     "direccion": "Avenida 6a Oriente ",
     "lat": 28.1946957,
     "lng": -105.4634095
  },
  {
     "marca": "G500",
     "direccion": "16 de Septiembre esq. Velódromo de la Deportiva",
     "lat": 17.975006030596,
     "lng": -92.9394333667682
  },
  {
     "marca": "G500",
     "direccion": "Avenida Prados",
     "lat": 19.6646751,
     "lng": -99.0796165
  },
  {
     "marca": "G500",
     "direccion": "Carretera México - Cuautla",
     "lat": 18.8496806,
     "lng": -98.9381475
  },
  {
     "marca": "G500",
     "direccion": "Amate esquina Carretera Federal Villahermosa - Teapa",
     "lat": 17.9685509,
     "lng": -92.9190103
  },
  {
     "marca": "G500",
     "direccion": "Autopista México - Queretáro",
     "lat": 19.6869382649598,
     "lng": -99.2033455797622
  },
  {
     "marca": "G500",
     "direccion": "Carretera Chalco - Tlahuac",
     "lat": 19.2543075,
     "lng": -98.9144676
  },
  {
     "marca": "G500",
     "direccion": "Prolongación Francisco Javier Mina",
     "lat": 18.0093946,
     "lng": -92.9191396
  },
  {
     "marca": "G500",
     "direccion": "Carretera Ocotlan -Santa Ana",
     "lat": 19.3176239231755,
     "lng": -98.2155069662705
  },
  {
     "marca": "G500",
     "direccion": "Vía José López Portillo",
     "lat": 19.6356973,
     "lng": -99.1063989
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Ejercito Mexicano",
     "lat": 26.9278409,
     "lng": -101.4307337
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Fidel Velázquez",
     "lat": 16.7754842,
     "lng": -93.0905851
  },
  {
     "marca": "G500",
     "direccion": "Rinconada Uranio",
     "lat": 19.3063222,
     "lng": -99.2202255
  },
  {
     "marca": "G500",
     "direccion": "Calle Aldama",
     "lat": 28.2764708,
     "lng": -105.4862433
  },
  {
     "marca": "G500",
     "direccion": "Cereal",
     "lat": 19.7522307,
     "lng": -101.1784143
  },
  {
     "marca": "G500",
     "direccion": "Avenida Lázaro Cárdenas",
     "lat": 20.6277098,
     "lng": -103.2981645
  },
  {
     "marca": "G500",
     "direccion": "3ra Norte Sector Juarez",
     "lat": 15.864323,
     "lng": -97.0720409
  },
  {
     "marca": "G500",
     "direccion": "Avenida Francisco I Madero Oriente",
     "lat": 19.7116879,
     "lng": -101.1642974
  },
  {
     "marca": "G500",
     "direccion": "Carretera México-Tepexpan Parcela",
     "lat": 19.6144916,
     "lng": -99.0362468
  },
  {
     "marca": "G500",
     "direccion": "Avenida 17",
     "lat": 21.0204460593987,
     "lng": -89.5673052809206
  },
  {
     "marca": "G500",
     "direccion": "Carretera Estatal 210 km",
     "lat": 20.6347133,
     "lng": -100.2602315
  },
  {
     "marca": "G500",
     "direccion": "Carretera Ocozocuautla a Villaflores",
     "lat": 16.3471135,
     "lng": -93.4052606
  },
  {
     "marca": "G500",
     "direccion": "Carretera Principal",
     "lat": 17.8739238,
     "lng": -92.4865472
  },
  {
     "marca": "G500",
     "direccion": "Carretera Tuxtla Gutiérrez a Villaflores",
     "lat": 16.3856116,
     "lng": -93.2834728
  },
  {
     "marca": "G500",
     "direccion": "Calle 69 X 70D Y 72",
     "lat": 21.0577737808115,
     "lng": -89.6440820048898
  },
  {
     "marca": "G500",
     "direccion": "Aurora del Hierro Lt 1.",
     "lat": 19.67274,
     "lng": -99.1840809
  },
  {
     "marca": "G500",
     "direccion": "Calle 69 X 48 Y 50",
     "lat": 20.9417373,
     "lng": -89.5738692
  },
  {
     "marca": "G500",
     "direccion": "Periférico Paseo de la República",
     "lat": 19.6780892635257,
     "lng": -101.233789105032
  },
  {
     "marca": "G500",
     "direccion": "Calle 30 X 35 Y 37",
     "lat": 20.1236017,
     "lng": -88.9246211
  },
  {
     "marca": "G500",
     "direccion": "Aeropuerto Llano San Juan",
     "lat": 16.7688045,
     "lng": -93.2823422
  },
  {
     "marca": "G500",
     "direccion": "Calzada del Charro Oriente",
     "lat": 28.1948967,
     "lng": -105.4598238
  },
  {
     "marca": "G500",
     "direccion": "Avenida Federico Baeza",
     "lat": 28.1730838,
     "lng": -105.4715263
  },
  {
     "marca": "G500",
     "direccion": "Carretera Panamericana",
     "lat": 28.1909507,
     "lng": -105.4591136
  },
  {
     "marca": "G500",
     "direccion": "Av. Jacinto Canek x 136 A",
     "lat": 20.9948702,
     "lng": -89.6719715
  },
  {
     "marca": "G500",
     "direccion": "Jesús García",
     "lat": 20.6889112,
     "lng": -103.3589565
  },
  {
     "marca": "G500",
     "direccion": "Carretera Libramiento",
     "lat": 16.3491046,
     "lng": -98.0493876
  },
  {
     "marca": "G500",
     "direccion": "Avenida Juárez",
     "lat": 18.6556472,
     "lng": -91.8293527
  },
  {
     "marca": "G500",
     "direccion": "Avenida Revolución",
     "lat": 27.4988902,
     "lng": -99.5526771
  },
  {
     "marca": "G500",
     "direccion": "Carretera Mexico-Texcoco 29",
     "lat": 19.6153009,
     "lng": -99.0196768
  },
  {
     "marca": "G500",
     "direccion": "Av. Montevideo",
     "lat": 19.486721,
     "lng": -99.1228482
  },
  {
     "marca": "G500",
     "direccion": "División del Norte, esquina Constituyentes",
     "lat": 20.511155,
     "lng": -100.8048631
  },
  {
     "marca": "G500",
     "direccion": "Avenida Simbolos Patrios",
     "lat": 17.0407506,
     "lng": -96.7192275
  },
  {
     "marca": "G500",
     "direccion": "Agustín Melgar",
     "lat": 27.6773603,
     "lng": -105.1731191
  },
  {
     "marca": "G500",
     "direccion": "Av. Agustín Melgar y Av. Coahuila",
     "lat": 28.4136657714844,
     "lng": -106.868911743164
  },
  {
     "marca": "G500",
     "direccion": "Av. Hidalgo y C. 15",
     "lat": 28.3997993469238,
     "lng": -106.858816058152
  },
  {
     "marca": "G500",
     "direccion": "Avenida Lopez de Legaspi",
     "lat": 20.6387823,
     "lng": -103.3769065
  },
  {
     "marca": "G500",
     "direccion": "Cruz del Sur",
     "lat": 20.6378016,
     "lng": -103.3948812
  },
  {
     "marca": "G500",
     "direccion": "Prolongación Paseo Usumacinta esquina Periférico",
     "lat": 17.9724624,
     "lng": -92.9247064
  },
  {
     "marca": "G500",
     "direccion": "Carretera Luis Gil Perez",
     "lat": 17.9213071413334,
     "lng": -93.0182557262143
  },
  {
     "marca": "G500",
     "direccion": "Libramiento Sur Poniente",
     "lat": 16.7440685460695,
     "lng": -93.1284665102425
  },
  {
     "marca": "G500",
     "direccion": "Avenida 8 de Julio",
     "lat": 20.6234586,
     "lng": -103.3714714
  },
  {
     "marca": "G500",
     "direccion": "Av. Revolución 910",
     "lat": 17.9740224506601,
     "lng": -92.9631412165329
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Simbolos Patrios",
     "lat": 17.0203025,
     "lng": -96.7110073
  },
  {
     "marca": "G500",
     "direccion": "Av. Javier Rojo Gomez",
     "lat": 19.3752457879246,
     "lng": -99.0784403180482
  },
  {
     "marca": "G500",
     "direccion": "Rio Hondo - Huixquilucan ",
     "lat": 19.4020759,
     "lng": -99.3235036
  },
  {
     "marca": "G500",
     "direccion": "Avenida Rio de las Avenidas",
     "lat": 20.1130987,
     "lng": -98.7434771
  },
  {
     "marca": "G500",
     "direccion": "Avenida San Marcos",
     "lat": 20.0662713,
     "lng": -98.7707103
  },
  {
     "marca": "G500",
     "direccion": "Carretera San Isidro Mazatepec",
     "lat": 20.4850739,
     "lng": -103.5102789
  },
  {
     "marca": "G500",
     "direccion": "Avenida Atécuaro",
     "lat": 19.6549012,
     "lng": -101.202481
  },
  {
     "marca": "G500",
     "direccion": "Carretera Villa Nicólas Romero",
     "lat": 19.5691108,
     "lng": -99.2534584
  },
  {
     "marca": "G500",
     "direccion": "Avenida Patriotismo",
     "lat": 19.3974651,
     "lng": -99.1808654
  },
  {
     "marca": "G500",
     "direccion": "Carretera Aeropuerto - Mariano Matamoros Km. 0+200",
     "lat": 18.8028041,
     "lng": -99.2230224
  },
  {
     "marca": "G500",
     "direccion": "Avenida del Trabajo",
     "lat": 19.4416795,
     "lng": -99.1219133
  },
  {
     "marca": "G500",
     "direccion": "Periferico Ecológico",
     "lat": 19.0661593,
     "lng": -98.2774768
  },
  {
     "marca": "G500",
     "direccion": "Carretera Mexico-Toluca",
     "lat": 19.3628027921633,
     "lng": -99.2854981036701
  },
  {
     "marca": "G500",
     "direccion": "Carretera Federal Villahermosa-Tuxtla G. Tramo Villahermosa-Teapa lado izquierdo",
     "lat": 17.9692742,
     "lng": -92.9188819
  },
  {
     "marca": "G500",
     "direccion": "Av. Gustavo Baz",
     "lat": 19.5262991,
     "lng": -99.210066
  },
  {
     "marca": "G500",
     "direccion": "Paseo Constituyentes",
     "lat": 20.5522928,
     "lng": -100.4230921
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Magnocentro",
     "lat": 19.4017479,
     "lng": -99.2720829
  },
  {
     "marca": "G500",
     "direccion": "Calzada al Sumidero esquina Libramiento Norte",
     "lat": 16.7703440718452,
     "lng": -93.1027787281723
  },
  {
     "marca": "G500",
     "direccion": "Avenida Ignacio Zaragoza",
     "lat": 19.3871113,
     "lng": -99.0384468
  },
  {
     "marca": "G500",
     "direccion": "Convento de Santa Monica",
     "lat": 19.533899954704,
     "lng": -99.2260450646652
  },
  {
     "marca": "G500",
     "direccion": "Guillermo Prieto 1100",
     "lat": 19.7128187,
     "lng": -101.1937896
  },
  {
     "marca": "G500",
     "direccion": "Calle 20",
     "lat": 17.462223,
     "lng": -91.4293266
  },
  {
     "marca": "G500",
     "direccion": "Calle Oriente 6",
     "lat": 19.728018,
     "lng": -101.1514414
  },
  {
     "marca": "G500",
     "direccion": "Prolongación Héroes de Nacozari",
     "lat": 19.0837577,
     "lng": -98.1987252
  },
  {
     "marca": "G500",
     "direccion": "Calzada de los Jinetes",
     "lat": 19.5538901697837,
     "lng": -99.2110934607132
  },
  {
     "marca": "G500",
     "direccion": "Carretera Valsequillo esquina 16 de Septiembre",
     "lat": 19.0206003,
     "lng": -98.2116553
  },
  {
     "marca": "G500",
     "direccion": "Carretera México - Queretaro",
     "lat": 19.538638,
     "lng": -99.21649
  },
  {
     "marca": "G500",
     "direccion": "Camino los Berros-Valle de Bravo Km- 12.6 ",
     "lat": 19.3237754,
     "lng": -100.0940368
  },
  {
     "marca": "G500",
     "direccion": "Carretera Nacional Acapulco - Pinotepa Nacional",
     "lat": 16.7531639,
     "lng": -99.2357096
  },
  {
     "marca": "G500",
     "direccion": "Boulevard José María Morelos",
     "lat": 21.1304227,
     "lng": -101.6301649
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Dr. Belisario Dominguez",
     "lat": 16.7556122091317,
     "lng": -93.1512217411045
  },
  {
     "marca": "G500",
     "direccion": "Av. Tlahuac",
     "lat": 19.3224029046231,
     "lng": -99.0963380932541
  },
  {
     "marca": "G500",
     "direccion": "Avenida Francisco I. Madero",
     "lat": 20.1164446,
     "lng": -98.7261848
  },
  {
     "marca": "G500",
     "direccion": "Av. Luis Cabrera",
     "lat": 19.315918,
     "lng": -99.2340641
  },
  {
     "marca": "G500",
     "direccion": "Carretera Estatal Villahermosa Reforma",
     "lat": 17.8952806152993,
     "lng": -93.0650856751465
  },
  {
     "marca": "G500",
     "direccion": "Carretera Cuautitlán Melchor Ocampo Mz.60 Lt.3",
     "lat": 19.6490241,
     "lng": -99.1506137
  },
  {
     "marca": "G500",
     "direccion": "Carretera Pachuca-Tuxpan",
     "lat": 19.6727395,
     "lng": -99.1840797
  },
  {
     "marca": "G500",
     "direccion": "Calle Público",
     "lat": 16.7221037112887,
     "lng": -93.0188641822647
  },
  {
     "marca": "G500",
     "direccion": "Carretera Nacional Acapulco - Pinotepa Nacional Km. 165",
     "lat": 16.5817207733235,
     "lng": -98.8130428379593
  },
  {
     "marca": "G500",
     "direccion": "Carretera Internacional Km 20.3 S/N",
     "lat": 17.0220964,
     "lng": -96.579641
  },
  {
     "marca": "G500",
     "direccion": "Carretera Internacional Oaxaca-Nochixtlan",
     "lat": 17.086305,
     "lng": -96.7453878
  },
  {
     "marca": "G500",
     "direccion": "Carretera Cuautitlan-Melchor Ocampo",
     "lat": 19.6712973,
     "lng": -99.1740606
  },
  {
     "marca": "G500",
     "direccion": "Carretera a Zachila",
     "lat": 17.0514369,
     "lng": -96.7167893
  },
  {
     "marca": "G500",
     "direccion": "Carretera Tequisquiapan",
     "lat": 20.5976375,
     "lng": -100.3569188
  },
  {
     "marca": "G500",
     "direccion": "Montevideo",
     "lat": 19.491351,
     "lng": -99.136548
  },
  {
     "marca": "G500",
     "direccion": "Carretera Toluca - Atlacomulco",
     "lat": 19.3675917,
     "lng": -99.6935941
  },
  {
     "marca": "G500",
     "direccion": "Carretera Mexico-Toluca Km 48.5",
     "lat": 19.2810586082347,
     "lng": -99.4943657872803
  },
  {
     "marca": "G500",
     "direccion": "Carretera Costera del Pacífico",
     "lat": 16.0924899,
     "lng": -97.6865097
  },
  {
     "marca": "G500",
     "direccion": "Libramiento Gomez Morin",
     "lat": 30.4457767,
     "lng": -107.9045946
  },
  {
     "marca": "G500",
     "direccion": "Carretera Lago de Guadalupe",
     "lat": 19.5818056,
     "lng": -99.2282591
  },
  {
     "marca": "G500",
     "direccion": "Avenida Prolongación Paseo de la Reforma",
     "lat": 19.3803392,
     "lng": -99.2519211
  },
  {
     "marca": "G500",
     "direccion": "Carretera México - Texcoco",
     "lat": 19.4160143,
     "lng": -98.9180477
  },
  {
     "marca": "G500",
     "direccion": "Av. Prolongación Bosques de Reforma",
     "lat": 19.3876939902004,
     "lng": -99.2628072671078
  },
  {
     "marca": "G500",
     "direccion": "Carretera Villahermosa - Cardenas",
     "lat": 17.9890224,
     "lng": -92.9803459
  },
  {
     "marca": "G500",
     "direccion": "Calzada Ermita Iztapalapa",
     "lat": 19.3557014,
     "lng": -99.0939496
  },
  {
     "marca": "G500",
     "direccion": "Av. Román Cepeda",
     "lat": 28.6980064716407,
     "lng": -100.53821110311
  },
  {
     "marca": "G500",
     "direccion": "Fausto Z Martinez",
     "lat": 28.6798303,
     "lng": -100.5413707
  },
  {
     "marca": "G500",
     "direccion": "Av. Palo Solo",
     "lat": 19.4160183,
     "lng": -99.2701909
  },
  {
     "marca": "G500",
     "direccion": "Carretera Puerto Rico -Totutla Parcela 258",
     "lat": 19.3033395073311,
     "lng": -96.9136289365218
  },
  {
     "marca": "G500",
     "direccion": "Autopista México - Queretaro Km 59+800",
     "lat": 19.8411154,
     "lng": -99.2790252
  },
  {
     "marca": "G500",
     "direccion": "Josefa Ortiz de Dominguez",
     "lat": 22.3108109,
     "lng": -97.8774014
  },
  {
     "marca": "G500",
     "direccion": "Romulo O´Farril",
     "lat": 19.3379651296792,
     "lng": -99.213609628836
  },
  {
     "marca": "G500",
     "direccion": "Autopista México - Queretaro",
     "lat": 19.5384560013827,
     "lng": -99.2160715753937
  },
  {
     "marca": "G500",
     "direccion": "Galeana 505 Sur",
     "lat": 28.6978038493055,
     "lng": -100.518545617791
  },
  {
     "marca": "G500",
     "direccion": "Libramiento ",
     "lat": 19.704127,
     "lng": -99.2338336
  },
  {
     "marca": "G500",
     "direccion": "Carretera Cocotitlan - Temamatla",
     "lat": 19.2202311,
     "lng": -98.8672831
  },
  {
     "marca": "G500",
     "direccion": "Av. 5A Norte Poniente 2285",
     "lat": 16.7620147345406,
     "lng": -93.1369483632293
  },
  {
     "marca": "G500",
     "direccion": "Prolongación 4ta Av. Sur esquina Camino al Tubo",
     "lat": 14.8925302,
     "lng": -92.2748662
  },
  {
     "marca": "G500",
     "direccion": "Circuito Interior Av. Rio Consulado",
     "lat": 19.4544047,
     "lng": -99.115465
  },
  {
     "marca": "G500",
     "direccion": "Prolongación Arneses",
     "lat": 19.33678,
     "lng": -99.1130023
  },
  {
     "marca": "G500",
     "direccion": "Calzada San Agustin",
     "lat": 19.4933578,
     "lng": -99.2151654
  },
  {
     "marca": "G500",
     "direccion": "Acueducto Tenayuca",
     "lat": 19.5297884,
     "lng": -99.1681039
  },
  {
     "marca": "G500",
     "direccion": "Av. Hidalgo",
     "lat": 19.5096482,
     "lng": -98.8707647
  },
  {
     "marca": "G500",
     "direccion": "Av. Adolfo López Mateos",
     "lat": 19.4804853,
     "lng": -99.2491297
  },
  {
     "marca": "G500",
     "direccion": "Avenida Juarez",
     "lat": 19.416313,
     "lng": -98.9153498
  },
  {
     "marca": "G500",
     "direccion": "Avenida 6a Norte",
     "lat": 28.2022619,
     "lng": -105.4738532
  },
  {
     "marca": "G500",
     "direccion": "Carretera México Picacho Ajusco",
     "lat": 19.2833287,
     "lng": -99.2171988
  },
  {
     "marca": "G500",
     "direccion": "Calzada de Tlalpan",
     "lat": 19.3029041630897,
     "lng": -99.146599061377
  },
  {
     "marca": "G500",
     "direccion": "Av. Universidad",
     "lat": 17.0364613,
     "lng": -96.7119058
  },
  {
     "marca": "G500",
     "direccion": "Av. Solaridad",
     "lat": 19.6840312,
     "lng": -101.1685996
  },
  {
     "marca": "G500",
     "direccion": "Carretera Toluca - Atlacomulco",
     "lat": 19.4054245,
     "lng": -99.7147551
  },
  {
     "marca": "G500",
     "direccion": "Carretera a los Altos",
     "lat": 20.5883159,
     "lng": -103.1148548
  },
  {
     "marca": "G500",
     "direccion": "Calzada de Tlalpan",
     "lat": 19.350719,
     "lng": -99.1458538
  },
  {
     "marca": "G500",
     "direccion": "Km.1 Carretera Pinotepa Nacional - Acapulco",
     "lat": 16.3494602,
     "lng": -98.0620909
  },
  {
     "marca": "G500",
     "direccion": "Pescadores esq Carretera Oaxaca",
     "lat": 15.8817301,
     "lng": -97.0791041
  },
  {
     "marca": "G500",
     "direccion": "Avenida Carlos Salinas de Gortari",
     "lat": 15.867636,
     "lng": -97.0799764
  },
  {
     "marca": "G500",
     "direccion": "Carretera Costera del Pacífico",
     "lat": 16.0105847,
     "lng": -97.4516038
  },
  {
     "marca": "G500",
     "direccion": "Avenida Santa Rosa",
     "lat": 19.5319805,
     "lng": -99.1799497
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Valsequillo",
     "lat": 18.9677865,
     "lng": -98.1811375
  },
  {
     "marca": "G500",
     "direccion": "Camerino Mendoza",
     "lat": 20.1262706,
     "lng": -98.7450825
  },
  {
     "marca": "G500",
     "direccion": "Eje 6 Sur",
     "lat": 19.3785647,
     "lng": -99.1453944
  },
  {
     "marca": "G500",
     "direccion": "Calzada del Hueso",
     "lat": 19.2999546,
     "lng": -99.1082353
  },
  {
     "marca": "G500",
     "direccion": "Av.J.Jiménez Cantu",
     "lat": 19.6794776,
     "lng": -99.2133747
  },
  {
     "marca": "G500",
     "direccion": "Periférico Luis Echeverría A",
     "lat": 25.4000094,
     "lng": -101.0252599
  },
  {
     "marca": "G500",
     "direccion": "Periférico Luis Echeverría A",
     "lat": 25.401972,
     "lng": -101.0269006
  },
  {
     "marca": "G500",
     "direccion": "Carretera Atitalaquia Apaxco",
     "lat": 20.0096889,
     "lng": -99.2203687
  },
  {
     "marca": "G500",
     "direccion": "Avenida Vía Morelos",
     "lat": 19.5257643,
     "lng": -99.0844994
  },
  {
     "marca": "G500",
     "direccion": "Av. Morelos Norte",
     "lat": 19.7486437,
     "lng": -101.172757
  },
  {
     "marca": "G500",
     "direccion": "Carretera Cuautitlan-Teoloyucan",
     "lat": 19.6972154,
     "lng": -99.1895467
  },
  {
     "marca": "G500",
     "direccion": "Av. José López Portillo",
     "lat": 19.6246034922698,
     "lng": -99.0763296355819
  },
  {
     "marca": "G500",
     "direccion": "Av. Via Real",
     "lat": 19.6578676,
     "lng": -99.0193721
  },
  {
     "marca": "G500",
     "direccion": "Carretera México Querétaro",
     "lat": 19.6305859,
     "lng": -99.1932242
  },
  {
     "marca": "G500",
     "direccion": "Av. Gustavo Baz",
     "lat": 19.5406463,
     "lng": -99.2069807
  },
  {
     "marca": "G500",
     "direccion": "Av. Santa Cruz Ojo de Agua",
     "lat": 19.666228,
     "lng": -99.0152466
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Adolfo Lopez Mateos",
     "lat": 19.3467289650963,
     "lng": -99.2023755497376
  },
  {
     "marca": "G500",
     "direccion": "Av. De las Fuentes",
     "lat": 19.3186379580757,
     "lng": -99.2112790110451
  },
  {
     "marca": "G500",
     "direccion": "Calzada de los Jinetes",
     "lat": 19.5604738725849,
     "lng": -99.2201440116568
  },
  {
     "marca": "G500",
     "direccion": "Carretera San Martín - Tlaxcala",
     "lat": 19.2864882,
     "lng": -98.422325
  },
  {
     "marca": "G500",
     "direccion": "Av. Alfredo del Mazo",
     "lat": 19.516477168772,
     "lng": -99.0634373822784
  },
  {
     "marca": "G500",
     "direccion": "Av. Principal a la Joya",
     "lat": 19.2936909,
     "lng": -98.447832
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Atlixco",
     "lat": 19.0467754,
     "lng": -98.2345726
  },
  {
     "marca": "G500",
     "direccion": "Carretera San Martin - Tlaxcala",
     "lat": 19.2911664,
     "lng": -98.4129146
  },
  {
     "marca": "G500",
     "direccion": "Avenida Patria",
     "lat": 20.6410368,
     "lng": -103.2824299
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Interlomas",
     "lat": 19.399568,
     "lng": -99.2688606
  },
  {
     "marca": "G500",
     "direccion": "Av. Tamaulipas",
     "lat": 19.3540474,
     "lng": -99.2762778
  },
  {
     "marca": "G500",
     "direccion": "Av. Adolfo Ruiz Cortines",
     "lat": 19.5544754453742,
     "lng": -99.2667967196434
  },
  {
     "marca": "G500",
     "direccion": "Av. Marcelino Buendía Eje 5 Sur",
     "lat": 19.3761938940353,
     "lng": -99.0621435838364
  },
  {
     "marca": "G500",
     "direccion": "La Presa Carretera Pachuca-Cd. Sahagún",
     "lat": 19.7836735,
     "lng": -98.5780991
  },
  {
     "marca": "G500",
     "direccion": "Carretera Alfonso Pérez Gasga",
     "lat": 17.0372122,
     "lng": -97.9163697
  },
  {
     "marca": "G500",
     "direccion": "Avenida Santo Tomás",
     "lat": 19.4828245,
     "lng": -99.1807593
  },
  {
     "marca": "G500",
     "direccion": "Calzada de la Viga",
     "lat": 19.4139192862178,
     "lng": -99.1282766
  },
  {
     "marca": "G500",
     "direccion": "Contadores",
     "lat": 19.374920872792,
     "lng": -99.107668982209
  },
  {
     "marca": "G500",
     "direccion": "Avenida Solidaridad Las Torres",
     "lat": 19.2787259,
     "lng": -99.5484522
  },
  {
     "marca": "G500",
     "direccion": "Libramiento Autopista México - Acapulco",
     "lat": 18.9591102925874,
     "lng": -99.2112902085289
  },
  {
     "marca": "G500",
     "direccion": "Av. 16 esquina Rio Churubusco",
     "lat": 19.4087965,
     "lng": -99.0924875
  },
  {
     "marca": "G500",
     "direccion": "Av. Periférico Carlos Pellicer",
     "lat": 17.9678862089614,
     "lng": -92.9480380123032
  },
  {
     "marca": "G500",
     "direccion": "Rio de la Plata",
     "lat": 19.4279126,
     "lng": -99.1746274
  },
  {
     "marca": "G500",
     "direccion": "Avenida Juarez",
     "lat": 19.0531936,
     "lng": -98.2212219
  },
  {
     "marca": "G500",
     "direccion": "Carretera Nacional Acapulco Pinotepa",
     "lat": 16.4737248808099,
     "lng": -98.4229269720277
  },
  {
     "marca": "G500",
     "direccion": "Avenida General Porfirio Díaz",
     "lat": 16.4698284,
     "lng": -98.4065267
  },
  {
     "marca": "G500",
     "direccion": "Carretera Federal México - Puebla",
     "lat": 19.213949,
     "lng": -98.4211411
  },
  {
     "marca": "G500",
     "direccion": "Libertad Norte",
     "lat": 19.2887293,
     "lng": -98.4434875
  },
  {
     "marca": "G500",
     "direccion": "Anillo Periférico Arco Sur",
     "lat": 19.2671764,
     "lng": -98.4481445
  },
  {
     "marca": "G500",
     "direccion": "Carretera México-Laredo",
     "lat": 19.5200748,
     "lng": -99.096646
  },
  {
     "marca": "G500",
     "direccion": "Avenida San Mateo",
     "lat": 19.5610717,
     "lng": -99.2463711
  },
  {
     "marca": "G500",
     "direccion": "Av Tetiz",
     "lat": 19.2841725,
     "lng": -99.2327551
  },
  {
     "marca": "G500",
     "direccion": "Calle 60 X 119 Y 21",
     "lat": 20.9331722,
     "lng": -89.6302979
  },
  {
     "marca": "G500",
     "direccion": "Carretera San Martin - El Verde",
     "lat": 19.2754082,
     "lng": -98.4516224
  },
  {
     "marca": "G500",
     "direccion": "Calzada de Tlalpan",
     "lat": 19.3124146,
     "lng": -99.1407937
  },
  {
     "marca": "G500",
     "direccion": "Carretera Morelia Salamanca ",
     "lat": 19.7962809,
     "lng": -101.1622214
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Isidro Fabela Norte",
     "lat": 19.3047788,
     "lng": -99.6436343
  },
  {
     "marca": "G500",
     "direccion": "Puente Calderon",
     "lat": 19.7028348515564,
     "lng": -101.213542873086
  },
  {
     "marca": "G500",
     "direccion": "Carretera Federal México - Puebla",
     "lat": 19.1489507,
     "lng": -98.3989934
  },
  {
     "marca": "G500",
     "direccion": "Calle 62 por 23 y 62",
     "lat": 20.9999888,
     "lng": -89.6888681
  },
  {
     "marca": "G500",
     "direccion": "Vía Morelos Km 14200",
     "lat": 19.5330334,
     "lng": -99.0700818
  },
  {
     "marca": "G500",
     "direccion": "Avenida Central",
     "lat": 19.6073333,
     "lng": -99.0111973
  },
  {
     "marca": "G500",
     "direccion": "Carretera Lechería Texcoco",
     "lat": 19.6152619,
     "lng": -99.001821
  },
  {
     "marca": "G500",
     "direccion": "Avenida Ejército Mexicano",
     "lat": 19.840413,
     "lng": -98.9724833
  },
  {
     "marca": "G500",
     "direccion": "Paseo Constituyentes",
     "lat": 20.5546149,
     "lng": -100.4205793
  },
  {
     "marca": "G500",
     "direccion": "Boulevard Bernardo Quintana",
     "lat": 20.6204674156669,
     "lng": -100.413332940198
  },
  {
     "marca": "G500",
     "direccion": "Avenida Revolución",
     "lat": 19.3984346,
     "lng": -99.1849598
  },
  {
     "marca": "G500",
     "direccion": "Av. Adolfo Lopez Mateos",
     "lat": 19.2937933,
     "lng": -99.7257973
  },
  {
     "marca": "G500",
     "direccion": "Periférico Sur",
     "lat": 19.322774,
     "lng": -99.217301
  },
  {
     "marca": "G500",
     "direccion": "Federico Tena",
     "lat": 19.5122069051709,
     "lng": -101.612309856345
  },
  {
     "marca": "G500",
     "direccion": "Av. Hidalgo",
     "lat": 19.6205448,
     "lng": -99.3240555
  },
  {
     "marca": "G500",
     "direccion": "Carretera San Pedro Tepojaco",
     "lat": 19.6446135,
     "lng": -99.2723358
  },
  {
     "marca": "G500",
     "direccion": "Av Juan Pablo II",
     "lat": 19.6749388,
     "lng": -101.1791223
  },
  {
     "marca": "G500",
     "direccion": "Libramiento Norte Ignacio Zaragoza",
     "lat": 19.5177768,
     "lng": -101.6173287
  },
  {
     "marca": "G500",
     "direccion": "Av. Cerro del Sombrerete",
     "lat": 20.6385886222985,
     "lng": -100.415520554492
  },
  {
     "marca": "G500",
     "direccion": "Carretera Panamericana esquina Eje Nor-Oriente",
     "lat": 20.5159729,
     "lng": -100.7797844
  },
  {
     "marca": "G500",
     "direccion": "Avenida Tecnológico",
     "lat": 20.3745629,
     "lng": -99.978688
  },
  {
     "marca": "G500",
     "direccion": "Avenida Tata Vasco",
     "lat": 19.7048934,
     "lng": -101.1776287
  },
  {
     "marca": "G500",
     "direccion": "Manuel Doblado",
     "lat": 19.3327405286236,
     "lng": -98.1976283018051
  },
  {
     "marca": "G500",
     "direccion": "Av. Paseo Usumacinta",
     "lat": 17.9932031,
     "lng": -92.9489708
  },
  {
     "marca": "G500",
     "direccion": "Carretera Federal Mexico Puebla KM 22.5 ",
     "lat": 19.3346478,
     "lng": -98.9531952
  },
  {
     "marca": "G500",
     "direccion": "Carretera Estatal Queretaro-Tlacote",
     "lat": 20.590817,
     "lng": -100.450847
  },
  {
     "marca": "G500",
     "direccion": "Carretera Lago de Guadalupe Km. 5.5",
     "lat": 19.609312,
     "lng": -99.2344357
  },
  {
     "marca": "G500",
     "direccion": "Zaragoza Poniente",
     "lat": 20.5840435831681,
     "lng": -100.40319746627
  },
  {
     "marca": "G500",
     "direccion": "Mellado",
     "lat": 18.6668942777595,
     "lng": -97.000693061377
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Plutarco Elías Calles No.1 y Río Churubusco",
     "lat": 19.39717,
     "lng": -99.099316
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Cuauhtémoc No. 187, Esq. Querétaro y Frontera",
     "lat": 19.415706,
     "lng": -99.15476
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Fco.  Morazán y General Anaya  No. 175  ",
     "lat": 19.427519,
     "lng": -99.119989
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Alfonso XIII y  Xola No. 18 ",
     "lat": 19.394318,
     "lng": -99.138714
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Eje Lázaro Cárdenas No. 199, Esq. G. Bocanegra",
     "lat": 19.446566,
     "lng": -99.138691
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Ajusco y Tlalpan No. 1395 ",
     "lat": 19.367536,
     "lng": -99.14225
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Nuevo León No. 8, Esq.  Sonora ",
     "lat": 19.415556,
     "lng": -99.16998
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Cedro No. 238, Esq. Carpio",
     "lat": 19.45128,
     "lng": -99.161963
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Alfonso XIII y Obrero Mundial",
     "lat": 19.402145,
     "lng": -99.144552
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Campeche No. 214,  Esq. Insurgentes Sur ",
     "lat": 19.408994,
     "lng": -99.167772
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Miguel A. y  Murillo No. 21",
     "lat": 19.379434,
     "lng": -99.188213
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Guerrero No.284 y R.  Flores Magón",
     "lat": 19.452316,
     "lng": -99.146083
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Yucatán No. 125, Esq. Chiapas y Tonalá ",
     "lat": 19.412837,
     "lng": -99.161184
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calz. Guadalupe n° 52",
     "lat": 19.456392,
     "lng": -99.128661
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Martí No. 210 y Prosperidad ",
     "lat": 19.401471,
     "lng": -99.175644
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Luz Saviñon y  Div. del Norte No. 804",
     "lat": 19.392335,
     "lng": -99.165591
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Chapultepec y Veracruz No.2 ",
     "lat": 19.420268,
     "lng": -99.176316
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Morelia y Puebla No. 137 ",
     "lat": 19.423993,
     "lng": -99.155957
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Montevideo N° 2",
     "lat": 19.48507,
     "lng": -99.11892
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Insurgentes Sur No. 2075,  Esq. La Paz",
     "lat": 19.347666,
     "lng": -99.187755
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Iturrigaray No. 116 y  Virreyes",
     "lat": 19.422217,
     "lng": -99.207251
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Plutarco Elías Calles no. 1022,  Esq. Icacos",
     "lat": 19.388626,
     "lng": -99.132601
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Coyoacán No.107,  Esq. Providencia y Xola ",
     "lat": 19.39716,
     "lng": -99.167293
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Insurgentes y Popocatepetl No. 289",
     "lat": 19.415245,
     "lng": -99.165733
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Martí, Esq., Carlos B. Zetina No. 117",
     "lat": 19.40323,
     "lng": -99.183052
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Insurgentes Sur No. 541 y Nuevo León",
     "lat": 19.401137,
     "lng": -99.170339
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calz. Guadalupe n°517",
     "lat": 19.4749,
     "lng": -99.12139
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Villalongín No. 6 Esq. Insurgentes y Reforma",
     "lat": 19.431589,
     "lng": -99.159623
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Div. del Norte E Insurgentes Sur No.553 ",
     "lat": 19.399388,
     "lng": -99.170389
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Lago Argentina No. 7 y Calz. México Tacuba ",
     "lat": 19.458006,
     "lng": -99.200356
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calz. de Tlalpan No. 842 Esq. Sur 122",
     "lat": 19.388557,
     "lng": -99.138434
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Protasio Tagle No. 2 y 4, Esq. Maderos",
     "lat": 19.416085,
     "lng": -99.18245
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Instituto Politécnico Nacional N° 1881",
     "lat": 19.495099,
     "lng": -99.132516
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Río San Joaquín No. 5976, Esq. Lago Ginebra",
     "lat": 19.44551,
     "lng": -99.201309
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Barcelona No.37,  Esq. Versalles",
     "lat": 19.428546,
     "lng": -99.155203
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Guillermo Prieto No. 130, Esq. Melchor Ocampo",
     "lat": 19.438543,
     "lng": -99.167945
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Camino Real A Toluca No. 521",
     "lat": 19.390212,
     "lng": -99.20505
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Coruña No. 452,  Esq. La Viga",
     "lat": 19.401602,
     "lng": -99.125331
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calzada  Vallejo No. 1055 y Poniente ",
     "lat": 19.487613,
     "lng": -99.150969
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Dr. Vertiz No. 640",
     "lat": 19.397625,
     "lng": -99.150643
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calz. Tulyehualco No. 5661  Km. 19.5",
     "lat": 19.304334,
     "lng": -99.060239
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calzada de Guadalupe No. 312",
     "lat": 19.467168,
     "lng": -99.124335
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km. 17.5 Autopista México - Puebla",
     "lat": 19.357308,
     "lng": -98.994524
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. De Los Maestros No. 47",
     "lat": 19.539192,
     "lng": -99.224165
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km 58.5 Autopista México-Querétaro",
     "lat": 19.834296,
     "lng": -99.269135
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Costera Miguel Alemán No. 379",
     "lat": 16.843548,
     "lng": -99.911668
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km. 42.+500 Carretera Federal  Mex - Puebla",
     "lat": 19.352388,
     "lng": -98.667119
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Crucero de Tezoyuca Tepetzingo S/N",
     "lat": 18.802595,
     "lng": -99.197827
  },
  {
     "marca": "HIDROSINA",
     "direccion": "No Reelección 385",
     "lat": 18.850324,
     "lng": -99.178932
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km. 10.1 Carretera  Federal México-Cuautla",
     "lat": 18.894956,
     "lng": -99.16626
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Universidad No. 1291, Esq. Coyoacan",
     "lat": 19.360324,
     "lng": -99.171627
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Centenario No. 13 Esq. Belisario Domínguez",
     "lat": 19.350575,
     "lng": -99.163799
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Central num 20",
     "lat": 19.504675,
     "lng": -99.040053
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km. 31.5 Carretera México- Cuautitlan ",
     "lat": 19.65057,
     "lng": -99.183479
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calz. de Las Armas Mz.1 Lot.10 No.17-A",
     "lat": 19.503237,
     "lng": -99.212275
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera  México- Tuxpan Km. 183.5 ",
     "lat": 20.137692,
     "lng": -98.097994
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calle Tolteca No. 69",
     "lat": 19.372504,
     "lng": -99.099048
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Ermita Iztapalapa No. 3389",
     "lat": 19.346294,
     "lng": -99.019337
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Tercera Nte. y Segunda Ote. No.11",
     "lat": 16.23469,
     "lng": -93.897614
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Hidalgo No.705 Entre Calz. del Federalismo y Calle Mezquitan",
     "lat": 20.677073,
     "lng": -103.353537
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Juárez No.850 Entre Calle Rayón y Jesús L. Camarena",
     "lat": 20.675126,
     "lng": -103.357288
  },
  {
     "marca": "HIDROSINA",
     "direccion": "José Joaquín Herrera No.110, Esq. Av. del Trabajo",
     "lat": 19.43846,
     "lng": -99.119214
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km 11.5 Carretera México - Pachuca",
     "lat": 19.52153,
     "lng": -99.092722
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Prol. Paseo Del Puerto N° 795 esq. Paseo del Sol",
     "lat": 19.178809,
     "lng": -96.187986
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Francisco Munguía N° 2121",
     "lat": 27.48026,
     "lng": -99.5409
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Bosques de Bolognia 2 Y Calle jacaranda",
     "lat": 19.62141,
     "lng": -99.235865
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. de la Industria 10940",
     "lat": 22.3313574,
     "lng": -97.8733024
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Hidalgo Km. 101 S/N.",
     "lat": 26.076051,
     "lng": -98.315527
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Reforma S/N ",
     "lat": 27.457538,
     "lng": -99.511043
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Tampico Mante No. 6905 ",
     "lat": 22.297527,
     "lng": -97.876811
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Virreyes  S/N",
     "lat": 26.086235,
     "lng": -98.301626
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Avenida Puebla  No.502 ",
     "lat": 20.543039,
     "lng": -97.467543
  },
  {
     "marca": "HIDROSINA",
     "direccion": "L. J.  Fuentes Rodríguez No. 595 ",
     "lat": 29.321015,
     "lng": -100.95693
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Ruiz Cortinez No.1350 ",
     "lat": 19.161713,
     "lng": -96.108613
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Ejercito Nacional No.5230",
     "lat": 31.69742,
     "lng": -106.411211
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Luis Donaldo Colosio No.1501 ",
     "lat": 20.098007,
     "lng": -98.761428
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd.  Oscar Tijerina No. 6751 ",
     "lat": 31.65919,
     "lng": -106.440492
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Salvador Nava No.405 ",
     "lat": 22.140688,
     "lng": -100.955913
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Vicente Guerrero  No.900  ",
     "lat": 22.742264,
     "lng": -98.9628
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Nacional No. 7877",
     "lat": 25.585649,
     "lng": -100.256471
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Emiliano Zapata Pte. No. 2151",
     "lat": 24.79042,
     "lng": -107.425275
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Urano No.2620 ",
     "lat": 25.683052,
     "lng": -100.485246
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Monterrey - Reynosa  No.101",
     "lat": 25.661864,
     "lng": -100.152467
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Héroes del 5 de Mayo No.1101",
     "lat": 19.0660926,
     "lng": -98.1375169
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Magnolia No.100",
     "lat": 24.042104,
     "lng": -104.62983
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Las Palmas Nte. No. 101 ",
     "lat": 18.143298,
     "lng": -94.473048
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Periférico Carlos Pellicer No.205",
     "lat": 17.97126,
     "lng": -92.92356
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Periférico Luis Echeverría No.999",
     "lat": 25.455622,
     "lng": -101.009722
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Juan Alonso de Torres No. 3702 Esq. Blvd. Morelos ",
     "lat": 21.140686,
     "lng": -101.633373
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Carlos Pellicer S/N, ",
     "lat": 17.970406,
     "lng": -92.971035
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Benjamín Hill No.5720",
     "lat": 24.74845,
     "lng": -107.426313
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Torreón - Matamoros Esq.  Div. Del Norte  S/N ",
     "lat": 25.534774,
     "lng": -103.394909
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Heroico Colegio Militar No. 109",
     "lat": 24.030698,
     "lng": -104.64251
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. 12 de Octubre  No. 200   Esq. Camino San José de Guanajuato ",
     "lat": 20.531425,
     "lng": -100.836291
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Obregón Sur No.704, Cruz Con Domingo Lizarde ",
     "lat": 20.562719,
     "lng": -101.198016
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Tula Iturbe No.  118,  Esq. Tulipanes ",
     "lat": 20.058305,
     "lng": -99.334672
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Periférico Carlos Molina S/N, Esq. Con Carretera Federal Huimanguillo ",
     "lat": 17.998588,
     "lng": -93.386761
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Federal a Paraíso No.420 ",
     "lat": 18.274346,
     "lng": -93.218774
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Mar Mediterráneo y Okostsk",
     "lat": 19.459913,
     "lng": -99.187037
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Ávila Camacho No. 91 ",
     "lat": 17.9947357,
     "lng": -94.5412117
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Ave. Oriente 31 y Norte 4 No. 263",
     "lat": 18.861788,
     "lng": -97.108012
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Tlaxcala a Ocotlan No. 20",
     "lat": 19.317274,
     "lng": -98.221853
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Patria, Esq. Blvd Luis F. Molina No.53140",
     "lat": 24.76834,
     "lng": -107.370869
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Juárez Chiapas a Dos Bocas Paraíso S/N",
     "lat": 18.069121,
     "lng": -93.164282
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Puerto Industrial Primex No.105 ",
     "lat": 22.395597,
     "lng": -97.931399
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Prol. González y Av. Leyes De Reforma No. 2035 ",
     "lat": 25.877302,
     "lng": -97.521629
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera México-Pachuca S/N ",
     "lat": 19.831158,
     "lng": -98.97914
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Independencia Ote No. 1100,",
     "lat": 25.557605,
     "lng": -103.436258
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd Constitución No. 1111, ",
     "lat": 25.564479,
     "lng": -103.443017
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Baja California No.  148",
     "lat": 19.393967,
     "lng": -98.972088
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard del Lago No. 1-A Mz 1 Lte 3",
     "lat": 19.607572,
     "lng": -98.973499
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Nezahualcoyotl No 172",
     "lat": 19.40926,
     "lng": -98.927092
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Vía Adolfo López Mateos S/N",
     "lat": 19.530821,
     "lng": -99.049599
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calle Palomas esq. Faisanes Mz 1 Lte 1",
     "lat": 19.609727,
     "lng": -99.018338
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Juan Pablo Rodríguez 730",
     "lat": 25.464519,
     "lng": -100.978909
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Aguascalientes 1385",
     "lat": 25.434526,
     "lng": -100.999369
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Vía José López Portillo No. 37",
     "lat": 19.635042,
     "lng": -99.114406
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Revolución S/N",
     "lat": 19.606836,
     "lng": -99.051557
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Luis Donaldo Colosio no. 2003",
     "lat": 20.091299,
     "lng": -98.75425
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Gustavo Baz no. 4001",
     "lat": 19.58159,
     "lng": -99.203241
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Independencia No. 1949",
     "lat": 25.800828,
     "lng": -109.014367
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calzada Doctor Rafael Cuervo No. 210",
     "lat": 19.215344,
     "lng": -96.173096
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Institutos Tecnológicos Km 264 No. 24",
     "lat": 17.995632,
     "lng": -94.583081
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Veracruz-El Tejar no. 6114",
     "lat": 19.089187,
     "lng": -96.153463
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Huehuetoca Esquina Arcángel San Miguel S/N",
     "lat": 19.688645,
     "lng": -99.226264
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Prolongación Av. 1 No.  3511-A  (Estacionamiento de Tienda Soriana Ron Batey).",
     "lat": 18.882882,
     "lng": -96.922567
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Díaz Ordaz N° 182 ",
     "lat": 14.904024,
     "lng": -92.247495
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Ejercito Mexicano No.  26",
     "lat": 19.14104,
     "lng": -96.116363
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Niños Héroes No. 803\n",
     "lat": 18.89834,
     "lng": -98.43322
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Mex. 127 Tihuatlán  Alazán  KM 36+624.96\n",
     "lat": 20.9387,
     "lng": -97.69219
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calzada de Guadalupe N° 301\n",
     "lat": 19.670279,
     "lng": -99.184369
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Mexiquense N° 31\n",
     "lat": 19.633468,
     "lng": -99.033517
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Prolongación Ignacio López Rayón No 1015\n",
     "lat": 18.25397,
     "lng": -93.23271
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Adolfo López Mateos No. 102",
     "lat": 18.266788,
     "lng": -93.220298
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Esq. Benito Juárez y Alatorre S/N, entre Circunvalación y Aquilés Serdán",
     "lat": 17.763506,
     "lng": -92.587883
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvrd. Chahue, Lote 23-A, Esquina Calle Mixteco",
     "lat": 15.761839,
     "lng": -96.128408
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Gustavo Baz No. 4883",
     "lat": 19.585189,
     "lng": -99.20282
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Toluca No. 9",
     "lat": 19.464698,
     "lng": -99.218909
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Manzana 12, Área de Servicios Complementarios",
     "lat": 19.375722,
     "lng": -99.097216
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Mompani No. 30",
     "lat": 20.64294,
     "lng": -100.459561
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Lateral Camino Mompani",
     "lat": 20.652613,
     "lng": -100.47287
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Marina Nacional no. 191, esquina Lago Rasna\n",
     "lat": 19.45451,
     "lng": -99.1879
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Tezozómoc #51 y 53\n",
     "lat": 19.474173,
     "lng": -99.200585
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Bruno Martínez 407 Nte",
     "lat": 24.031361,
     "lng": -104.672123
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Enrique W. Sánchez S/N",
     "lat": 25.04764,
     "lng": -105.42181
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Niños Héroes S/N",
     "lat": 24.52698,
     "lng": -104.76938
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Miguel Hidalgo y Calle Ferrocarril, Esq. Miguel Alemán",
     "lat": 24.889905,
     "lng": -105.069486
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Desviación a San Juan S/N",
     "lat": 24.783414,
     "lng": -104.470282
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Constituyentes no. 373 \n",
     "lat": 19.40676,
     "lng": -99.20087
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Bolivar No. 102 entre San Jerónimo e Izazaga",
     "lat": 19.427142,
     "lng": -99.139239
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Dr Carmona y  Valle No. 48",
     "lat": 19.423684,
     "lng": -99.152787
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carret. México-Cuautitlán Km 27",
     "lat": 19.613325,
     "lng": -99.186181
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calle 5 No.  1A",
     "lat": 19.471197,
     "lng": -99.223602
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera México Texcoco Km 28.5 entre Mariano Escobedo y Av. Nezahualcoyotl",
     "lat": 19.407975,
     "lng": -98.924826
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av Adolfo Lopez Mateos No.  1226",
     "lat": 19.288649,
     "lng": -99.688153
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd.  Miguel          Aleman No.  105",
     "lat": 19.310121,
     "lng": -99.561357
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Federal Libre México Puebla Km. 18",
     "lat": 19.357566,
     "lng": -98.986859
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av del Norte No.  176",
     "lat": 20.069003,
     "lng": -99.220842
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Paseo Tollocan Km. 54.5 ",
     "lat": 19.287092,
     "lng": -99.557156
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av Vía Morelos No 300",
     "lat": 19.559532,
     "lng": -99.047754
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av José López Portillo No.  100",
     "lat": 19.317792,
     "lng": -99.630311
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd.  Manuel Avila Camacho No. 3067",
     "lat": 19.544622,
     "lng": -99.211134
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Rojo Gómez N° 482",
     "lat": 19.371266,
     "lng": -99.080088
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Autopista México Queretaro  No.  1973",
     "lat": 19.533884,
     "lng": -99.219766
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Autopista México Queretaro Km 37, Sección II",
     "lat": 19.604569,
     "lng": -99.189786
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Toluca-Metepec 126 Nte. ",
     "lat": 19.255351,
     "lng": -99.619521
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Adolfo López Mateos No. 65 Int. Mz 1 Lt 17",
     "lat": 19.542714,
     "lng": -99.233329
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Hidalgo No. 24 Lt 1 y Lt 2",
     "lat": 19.620142,
     "lng": -99.211247
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Alfredo del Mazo No.  663",
     "lat": 19.30267,
     "lng": -99.627937
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carret. Cuernavaca Chilpancingo  Km. 21.790 ",
     "lat": 18.756362,
     "lng": -99.242948
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av Chalma S/N, entre Av de las Torres y Av. Chalma",
     "lat": 19.672277,
     "lng": -99.22632
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Reforma N° 4830",
     "lat": 27.452731,
     "lng": -99.517488
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Nacional Km. 14.5 N° 4444 Sur, ",
     "lat": 27.375684,
     "lng": -99.559001
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Monterrey N° 3848",
     "lat": 27.463634,
     "lng": -99.528241
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Nacional Km. 7 S/N",
     "lat": 27.441749,
     "lng": -99.522567
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Aguascalientes                N° 7038",
     "lat": 21.909224,
     "lng": -102.317655
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Adolfo López Mateos Ote. N° 1502",
     "lat": 21.878612,
     "lng": -102.271375
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Vía Gustavo Baz No. 230,  Loc. 31 y 41",
     "lat": 19.557397,
     "lng": -99.204432
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Fray Servando Teresa de Mier No. 299",
     "lat": 19.423044,
     "lng": -99.129459
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calz. Javier Rojo Gómez No. 462",
     "lat": 19.370565,
     "lng": -99.080967
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Vía Morelos No. 170",
     "lat": 19.583028,
     "lng": -99.041281
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. Manuel de La Peña No. 148",
     "lat": 19.310351,
     "lng": -98.947479
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calz. Ermita Iztapalapa No. 3048",
     "lat": 19.343614,
     "lng": -99.033414
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calz. Ermita Iztapalapa No. 2710",
     "lat": 19.343281,
     "lng": -99.037785
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carr. Cuernavaca-Cuautla No. 97",
     "lat": 18.858872,
     "lng": -98.959235
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Libramiento Cuautla-Izucar de Matamoros Km. 4+300 S/N",
     "lat": 18.796463,
     "lng": -98.916441
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Libramiento Cuautla-Izucar de Matamoros Km. 0.2 No.5",
     "lat": 18.85028,
     "lng": -98.935401
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Libramiento Cuautla-Izucar de Matamoros Km. 5+050 S/N",
     "lat": 18.817839,
     "lng": -98.918962
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Autopista de cuota Arco Norte Km. 98+345.659 al 98+706.346 del cuerpo de Atlacomulco a San Martín Texmelucan",
     "lat": 19.551121,
     "lng": -98.49473
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Autopista de cuota Arco Norte Km. 98+706.346 al 98+345.659 del cuerpo de San Martín Texmelucan a Atlacomulco",
     "lat": 19.551343,
     "lng": -98.49366
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calle Prolongación Leona Vicario Fracción B, parcela 101 zzp1",
     "lat": 22.935531,
     "lng": -109.931061
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km 24.5 de Carretera Transpeninsular, Los Cabos",
     "lat": 23.002276,
     "lng": -109.733004
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calle Julio Pimentel S/N",
     "lat": 23.151352,
     "lng": -109.70903
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Leona Vicario S/N esq. Felix Ortega, Manzana 218, Lote 04",
     "lat": 22.89577,
     "lng": -109.916131
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Carretera Transpeninsular Km 35.7 y Camino de Acceso s/n",
     "lat": 23.086853,
     "lng": -109.707037
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Av. De las Brisas  No. 3013",
     "lat": 22.904792,
     "lng": -109.938209
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Forjadores de Sudcalifornia s/n",
     "lat": 24.105281,
     "lng": -110.311908
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Calle Manuel Abasolo S/N",
     "lat": 24.153159,
     "lng": -110.324586
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Luis Donaldo Colosio S/n, E. Serdan y G. Prieto",
     "lat": 24.135771,
     "lng": -110.332314
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Autopista Arco norte km.  78 + 100 hacia aplacomulco 7 mezquites ",
     "lat": 20.095098,
     "lng": -99.29945
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Autopista Arco norte asi al sur km  78 + 100 hacia san martin texmelucan  7 mezquites ",
     "lat": 20.094088,
     "lng": -99.299664
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km 118.18, Autopista Cuota Mazatlán - Tepic S/N",
     "lat": 22.44235,
     "lng": -105.41632
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km 118.65, Autopista Cuota  Tepic - Mazatlán S/N",
     "lat": 22.44317,
     "lng": -105.41567
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Autopista Guadalajara - Tepic No. 300 a la altura del kilómetro 90+700",
     "lat": 21.03998,
     "lng": -104.29803
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Forjadores N° 260",
     "lat": 24.09288,
     "lng": -110.30952
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Héroes Colegio Militar",
     "lat": 24.166,
     "lng": -110.30066
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Julia Navarrete y Guerrero Manzana 12, Lote 7, N° 1219",
     "lat": 23.06424,
     "lng": -109.7108
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km. 5 de la carretera Transpeninsular",
     "lat": 23.047108,
     "lng": -109.705772
  },
  {
     "marca": "HIDROSINA",
     "direccion": "AV. ISABEL LA CATOLICA 2315",
     "lat": 24.145565,
     "lng": -110.310471
  },
  {
     "marca": "HIDROSINA",
     "direccion": "BLVD. PADRE KINO S/N",
     "lat": 24.144028,
     "lng": -110.302231
  },
  {
     "marca": "HIDROSINA",
     "direccion": " CALZADA AGUSTIN OLACHEA NO. 4615",
     "lat": 24.129241,
     "lng": -110.32835
  },
  {
     "marca": "HIDROSINA",
     "direccion": "CARRETERA AL SUR NO. 240",
     "lat": 24.078675,
     "lng": -110.306796
  },
  {
     "marca": "HIDROSINA",
     "direccion": " BOULEVARD 5 DE FEBRERO NO. 510",
     "lat": 24.147508,
     "lng": -110.320301
  },
  {
     "marca": "HIDROSINA",
     "direccion": "Km. 24.5 Carretera Transpeninsular, tramo Cabo San Lucas",
     "lat": 23.001511,
     "lng": -109.732772
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 9-A No 304 X 12 Y 12-A Col Santa Gertrudis Copo, CP 97305 Merida, Yucatan",
     "lat": 21.036518,
     "lng": -89.591495
  },
  {
     "marca": "LA GAS",
     "direccion": "Avenida Jose Lopez Portillo s/n Col. Fraccionamiento Kaniste C.P. 24038 Campeche, Campeche",
     "lat": 19.826327,
     "lng": -90.552363
  },
  {
     "marca": "LA GAS",
     "direccion": "MZA 8 MZA 1 LOTE 3 INT B AV. TULUM ESQ. NICHUPTE (PLAZA LAS AMERICAS)",
     "lat": 21.14392,
     "lng": -86.82313
  },
  {
     "marca": "LA GAS",
     "direccion": "Prolongacion Paseo Francisco Javier Mina y Eusebio Castillo, No. 324, Col. Casa Blanca, C.P. 88060 Centro, Tabasco.",
     "lat": 18.000339,
     "lng": -92.919689
  },
  {
     "marca": "LA GAS",
     "direccion": "Carretera El Portón-Cd Pemex km 23 rancheria el Limón segunda sección, C.P. 86727, Macuspana, Tabasco",
     "lat": 17.84571,
     "lng": -92.50108
  },
  {
     "marca": "LA GAS",
     "direccion": "Av. Insurgentes Nùm. 288 Col. Leona Vicario, Mza. 14 lotes 1,2,5 y 06 Zona XLII, C.P. 77016 Othón P. Blanco, Quintana Roo.",
     "lat": 18.51959,
     "lng": -88.29958
  },
  {
     "marca": "LA GAS",
     "direccion": "Avenida Insurgentes #41 lote 1 Esquina Avenida Universidad, Chetumal Q. Roo, C.P. 77058",
     "lat": 18.51364,
     "lng": -88.27996
  },
  {
     "marca": "LA GAS",
     "direccion": "Av. Álvaro Obregón #342,346 y 348  Col. Centro, Chetumal, Q. Roo C.P. 77000",
     "lat": 18.49746,
     "lng": -88.30565
  },
  {
     "marca": "LA GAS",
     "direccion": "Prolongación de la Avenida Benito Juárez entre calle 11 y 13 # 24, Poblado de IMI, C.P. 24560, Campeche, Campeche",
     "lat": 19.874144,
     "lng": -90.488439
  },
  {
     "marca": "LA GAS",
     "direccion": "Lote 2, Manzana 29, Plano 03, Bahía Akumal, Puerto, Aventuras, Q. Roo",
     "lat": 20.506011,
     "lng": -87.229171
  },
  {
     "marca": "LA GAS",
     "direccion": "Anillo Periférico Manuel Berzunza x 19 diagonal y 26 Tablaje catastral 38980 CP 97302 Col Sodzil Mérida Yucatán (A un costado de Acerofertas)",
     "lat": 21.0439759,
     "lng": -89.6137153
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 7 No 512 Col Maya, CP 97134 Merida, Yucatan",
     "lat": 21.021743,
     "lng": -89.576478
  },
  {
     "marca": "LA GAS",
     "direccion": "CALLE 8a X Circuito Colonias y 39 Colonia Pedregales de Tanlum, Mérida, Yucatán",
     "lat": 20.997678,
     "lng": -89.628362
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 51 No. 640 entre Calle 53 y Calle 51B Real Montejo, Mérida, Yucatán C.P. 97302",
     "lat": 21.03826,
     "lng": -89.66869
  },
  {
     "marca": "LA GAS",
     "direccion": "Av. Isla de Tris No. 111 Col. Francisco I. Madero, C.P. 24190, localidad Ciudad del Carmen, Campeche ",
     "lat": 18.64817,
     "lng": -91.80485
  },
  {
     "marca": "LA GAS",
     "direccion": "Manzana 46 Zona 1 Lote 1 S/N C.P. 24100 Isla Aguada, Municipio del Carmen, Campeche",
     "lat": 18.78428,
     "lng": -91.49183
  },
  {
     "marca": "LA GAS",
     "direccion": "Región 11 de la Reserva Territorial del IPAE Manzana 13 Local 1, Tulum Quintana Roo C.P. 77760",
     "lat": 20.21626,
     "lng": -87.445999
  },
  {
     "marca": "LA GAS",
     "direccion": "CANEK Calle 59-A #601 x 88 y 90 Col. Centro CP97000",
     "lat": 20.977244,
     "lng": -89.643179
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 63 No. 302A Fracc. Juan Pablo II entre calle 18 y calle 20 Mérida, Yucatán, C.P. 97246",
     "lat": 20.95944,
     "lng": -89.67609
  },
  {
     "marca": "LA GAS",
     "direccion": "Region 228, Mza. 104, Lotes 14,15 y 16, Cancun Quintana Roo",
     "lat": 21.175064,
     "lng": -86.860414
  },
  {
     "marca": "LA GAS",
     "direccion": "Blvd. Luis Donaldo Colosio Smz. 57, Mza. 03, Lote 18-04 (entrada al Fracc. Las Americas) Cancun, Benito Juarez, Quintana Roo",
     "lat": 21.126273,
     "lng": -86.832445
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle Heberto Castillo MartinezL, Lote 451-05, Manzana 01, Smza 244, C.P. 77500, Cancun, Quintana Roo.",
     "lat": 21.2056,
     "lng": -86.84255
  },
  {
     "marca": "LA GAS",
     "direccion": "Periferico Tab. Cat. No. 13950. Fcon de Montejo (al lado de transo yucarro) bajo el puente de Dzitia",
     "lat": 21.034022,
     "lng": -89.65586
  },
  {
     "marca": "LA GAS",
     "direccion": "Carretera Villahermosa Frontera Km. 15 s/n, C.P. 86270, Medellin y Madero 2a. Sección, Villahermosa, Tabasco",
     "lat": 18.113959,
     "lng": -92.864857
  },
  {
     "marca": "LA GAS",
     "direccion": "Km 19.5 Carretera Merida-Uman c. 21 No 471 Col. Ampliación Ciudad Industrial (a un costado de la empresa Dypaq ) ",
     "lat": 20.919079,
     "lng": -89.700583
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 30 mza.2, zona 1, Lote 1, Colonia Unidad, Esfuerzo y Trabajo II C.P. 24350,  Escarcega Campeche.",
     "lat": 18.60761,
     "lng": -90.74789
  },
  {
     "marca": "LA GAS",
     "direccion": "Carretera Escárcega Villahermosa km. 239,  región del bajo Candelaria,  c.p. 24100 Municipio del Carmen,  Campeche.",
     "lat": 18.38842,
     "lng": -91.19186
  },
  {
     "marca": "LA GAS",
     "direccion": "Smza 17 Mza 3 Lote 1 Y 2 s/n Av. Libramiento Kabah-Copan (Parque Kabah) ",
     "lat": 21.1431,
     "lng": -86.83428
  },
  {
     "marca": "LA GAS",
     "direccion": "Av. Nichupte y Kinik Mza 1 Lote 1 Smza 51 Cancun Q.Roo (Gran Plaza) ",
     "lat": 21.14064,
     "lng": -86.8558
  },
  {
     "marca": "LA GAS",
     "direccion": "Carr Merida-Caucel Tab Cat 10075 CP 97300 (a espaldas de walt mart) ",
     "lat": 20.997824,
     "lng": -89.67592
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 23 s/n y calle s/nombre Infonavit Las Palmas III 24029 Candelaria, Campeche",
     "lat": 18.19567,
     "lng": -91.0462
  },
  {
     "marca": "LA GAS",
     "direccion": "Av. Universidad No. 228 Col. Casa Blanca, C.P. 86060, Centro Tabasco",
     "lat": 18.005681,
     "lng": -92.924247
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 19 Num. 25 x 36 Centro, Kanasin , Yucatan CP97370",
     "lat": 20.939701,
     "lng": -89.567602
  },
  {
     "marca": "LA GAS",
     "direccion": "Carretera federal 180 campeche-merida km 12+035 tramo campeche-koben cp 24500",
     "lat": 19.900596,
     "lng": -90.447301
  },
  {
     "marca": "LA GAS",
     "direccion": "Av. Lazaro cardenas s/n entre calle peru y solidaridad col. Las flores, san francisco campeche, campeche cp 24097",
     "lat": 19.821336,
     "lng": -90.52585
  },
  {
     "marca": "LA GAS",
     "direccion": "Av. 45 norte col. Luis Donaldo Colosio II, Mz 559, Lote 03,04,05 y 06 Playa del Carmen Quintana Roo. Cp 77710",
     "lat": 20.655146,
     "lng": -87.06439
  },
  {
     "marca": "LA GAS",
     "direccion": "Carretera federal 180 campeche-merida km 139 T.C 5967 parcela 108 Z-6 p1/1 Poxilá, Uman, Yucatan",
     "lat": 20.7897848,
     "lng": -89.8162019
  },
  {
     "marca": "LA GAS",
     "direccion": "Anillo Periférico Manuel Berzunza Colonia Felipe Carillo Puerto Ampliación Cd. Industrial Tablaje Catastral 19016 Mérida, Yucatán, C.P. 97288",
     "lat": 20.95006,
     "lng": -89.703
  },
  {
     "marca": "LA GAS",
     "direccion": "Carretera Campeche Tenabo Km. 12.070, c.p. 24520  en China Campeche, Campeche ",
     "lat": 19.7918429,
     "lng": -90.61275628
  },
  {
     "marca": "LA GAS",
     "direccion": "Carretera Federal Campeche Mérida, Tramo Tenabo Hecelchakán, Km. 53.260 en el municipio de Hecelchakan Pomuch Campeche ",
     "lat": 20.1324,
     "lng": -90.16732
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 25-C ANILLO PERIFERICO No. 600 col. BENITO JUAREZ  CP 97178,  Merida, Yucatán México",
     "lat": 20.95618,
     "lng": -89.56865
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 1 x 54-A y 56 # 218-T Col. Chuburna de hidalgo,  C.P. 97200 Merida Yucatan, ",
     "lat": 21.047977,
     "lng": -89.645004
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 3 # 239 x 34 y 60 Col. Xcumpich, Merida Yucatan Mexico, CP. 97204",
     "lat": 21.040701,
     "lng": -89.631808
  },
  {
     "marca": "LA GAS",
     "direccion": "SM 97 MZA 11 X COMALCALCO S/N LOTE 11 Y 12  COL. CIUDAD INDUSTRIAL CP 77530 Benito Juarez, Cancun Quintana Roo",
     "lat": 21.1483056,
     "lng": -86.860272
  },
  {
     "marca": "LA GAS",
     "direccion": "MZA. 13 LOTE 3, SM48,  Benito Juarez, Cancún, Q. Roo CP. 77506",
     "lat": 20.979004,
     "lng": -86.8602501
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 35 Lote 44-A y 45-A x 20 Poligono 108 Itzimna ( Frente a la Ixtabay)",
     "lat": 20.998029,
     "lng": -89.571016
  },
  {
     "marca": "LA GAS",
     "direccion": "Calle 43 No. 200 x 4 y 6 Colonia Leandro Valle",
     "lat": 20.99428,
     "lng": -89.5625
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. a Laredo Norte 101,Centro, SAN NICOLAS, Nuevo Leon.",
     "lat": 25.761806,
     "lng": -100.294175
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Eugenio Garza Sada 4306,Las Brisas, MONTERREY, Nuevo Leon.",
     "lat": 25.624125,
     "lng": -100.275514
  },
  {
     "marca": "ORSAN",
     "direccion": "Insurgentes 3991,S/N, MONTERREY, Nuevo Leon.",
     "lat": 25.680567,
     "lng": -100.357444
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Nogalar Sur 351,Industrial Nogalar, SAN NICOLAS, Nuevo Leon.",
     "lat": 25.715536,
     "lng": -100.284253
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Morones Prieto 2300,Loma Larga, MONTERREY, Nuevo Leon.",
     "lat": 25.667814,
     "lng": -100.344858
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Morones Prieto 990,Caracol, MONTERREY, Nuevo Leon.",
     "lat": 25.669492,
     "lng": -100.290064
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Lazaro Cardenas 3808,Las Torres, MONTERREY, Nuevo Leon.",
     "lat": 25.621358,
     "lng": -100.286478
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Carlos Cantu 704,Centro, MONTEMORELOS, Nuevo Leon.",
     "lat": 25.189581,
     "lng": -99.838003
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Rodolfo Ruiz Cortines 1418,Atasta, VILLAHERMOSA, Tabasco.",
     "lat": 17.989583,
     "lng": -92.949564
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. a Laredo Norte Km. 22.5,S/N, CIENEGA DE FLORES, Nuevo Leon.",
     "lat": 25.868228,
     "lng": -100.231344
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Circuito del Golfo Km. 407,Nuevo Progreso, CARDENAS, Tabasco.",
     "lat": 17.999639,
     "lng": -93.378736
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Paseo Tabasco 906,Jesus Garcia, VILLAHERMOSA, Tabasco.",
     "lat": 17.991803,
     "lng": -92.932489
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Reforma - Juarez Km 45 + 750,S/N, REFORMA, Chiapas.",
     "lat": 17.857372,
     "lng": -93.155428
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Adolfo Ruiz Cortines 903,Arboledas, VILLAHERMOSA, Tabasco.",
     "lat": 17.999578,
     "lng": -92.923347
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Jose Vasconcelos 398 Pte.,Del Valle, SAN PEDRO, Nuevo Leon.",
     "lat": 25.653908,
     "lng": -100.380867
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Villahermosa - Frontera Km 21.5,Centro, MACULTEPEC, Tabasco.",
     "lat": 18.160494,
     "lng": -92.859739
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Palenque - Ocosingo Km 0.55,S/N, PALENQUE, Chiapas.",
     "lat": 17.5021,
     "lng": -91.991567
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. A Saltillo Km. 66.5, SANTA CATARINA, Nuevo Leon.",
     "lat": 25.685436,
     "lng": -100.473042
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Juarez 199,Centro, PALENQUE, Chiapas.",
     "lat": 17.508136,
     "lng": -91.988286
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Villahermosa - Frontera 423,Jose Ma. Pino Suarez, VILLAHERMOSA, Tabasco.",
     "lat": 18.016033,
     "lng": -92.913731
  },
  {
     "marca": "ORSAN",
     "direccion": "Autopista Mexico - Queretaro 100,Fracc. Industrial La Noria, EL MARQUES, Queretaro.",
     "lat": 20.568806,
     "lng": -100.302361
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. 5 de Febrero 235 Nte.,Zona Industrial Felipe Carrillo Puerto, QUERETARO, Queretaro.",
     "lat": 20.603686,
     "lng": -100.418769
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. El Sol No.2 Esq. Av. Revolucion,Fracc. El Sol, QUERETARO, Queretaro.",
     "lat": 20.616658,
     "lng": -100.437439
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. 12 De Octubre Esq. Camino San Jose de Guanajuato,S/N, CELAYA, Guanajuato.",
     "lat": 20.530789,
     "lng": -100.835675
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. a Tequisquiapan y Av. 2,S/N, SAN JUAN DEL RIO, Queretaro.",
     "lat": 20.414961,
     "lng": -99.981867
  },
  {
     "marca": "ORSAN",
     "direccion": "Autopista Queretaro San Luis Potosi Km. 10+400,Fracc. El Salitre, QUERETARO, Queretaro.",
     "lat": 20.660233,
     "lng": -100.431711
  },
  {
     "marca": "ORSAN",
     "direccion": "Autopista Queretaro San Luis Potosi Km. 178,La Estancia, SAN JUAN DEL RIO, Queretaro.",
     "lat": 20.417628,
     "lng": -100.044547
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Nuevo Laredo - Monterrey Km. 27,S/N, NUEVO LAREDO, Tamaulipas.",
     "lat": 27.276325,
     "lng": -99.612125
  },
  {
     "marca": "ORSAN",
     "direccion": "Prol. Ruiz Cortines 300,Provivienda, GUADALUPE, Nuevo Leon.",
     "lat": 25.709247,
     "lng": -100.194383
  },
  {
     "marca": "ORSAN",
     "direccion": "Libramiento Noroeste De Queretaro Km. 19.5,Lado Sur El Marques, EL MARQUES, Queretaro.",
     "lat": 20.699736,
     "lng": -100.338019
  },
  {
     "marca": "ORSAN",
     "direccion": "Calle Uno S/N,Puerto Pesquero, CD. DEL CARMEN, Campeche.",
     "lat": 18.64785,
     "lng": -91.848419
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Chapultepec 180 Ote.,Paraiso, GUADALUPE, Nuevo Leon.",
     "lat": 25.666183,
     "lng": -100.267369
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Benito Juarez 57,Zona Hotelera, SAN LUIS POTOSI, San Luis Potosi.",
     "lat": 22.148461,
     "lng": -100.951742
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Circuito del Golfo Km 1,S/N, SALTO DE AGUA, Chiapas.",
     "lat": 17.557178,
     "lng": -92.350128
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Reforma 4400,Mexico, NUEVO LAREDO, Tamaulipas.",
     "lat": 27.462031,
     "lng": -99.511714
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. 5 de Febrero 809 Esq. Universidad,La Sierrita, QUERETARO, Queretaro.",
     "lat": 20.5937,
     "lng": -100.414986
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Periferico Norte Esq. 35 A,S/N, CD. DEL CARMEN, Campeche.",
     "lat": 18.65545,
     "lng": -91.816903
  },
  {
     "marca": "ORSAN",
     "direccion": "Zaragoza Esq. Aquiles Serdan S/N,Centro, COATZACOALCOS, Veracruz.",
     "lat": 18.13705,
     "lng": -94.434458
  },
  {
     "marca": "ORSAN",
     "direccion": "Juarez Esq. Abasolo S/N,Centro, COATZACOALCOS, Veracruz.",
     "lat": 18.138928,
     "lng": -94.434339
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Transismica Km. 57.5,S/N, COATZACOALCOS, Veracruz.",
     "lat": 18.114886,
     "lng": -94.446911
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Coatzacoalcos-Minatitlan Km. 3.5,Primero de Mayo, COATZACOALCOS, Veracruz.",
     "lat": 18.128592,
     "lng": -94.438739
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Coatzacoalcos-Villahermosa Km. 6+383,S/N, COATZACOALCOS, Veracruz.",
     "lat": 18.098811,
     "lng": -94.389447
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Justo Sierra Esq. Madrid S/N,Nueva Mina, MINATITLAN, Veracruz.",
     "lat": 17.990992,
     "lng": -94.569808
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Hidalgo 198,Centro, MINATITLAN, Veracruz.",
     "lat": 17.991675,
     "lng": -94.54505
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Coatzacoalcos-Villahermosa Km. 37.5,S/N, AGUA DULCE, Veracruz.",
     "lat": 18.053225,
     "lng": -94.122656
  },
  {
     "marca": "ORSAN",
     "direccion": "Blvd. Morelos 185,Prolongacion Longoria, REYNOSA, Tamaulipas.",
     "lat": 26.068578,
     "lng": -98.290025
  },
  {
     "marca": "ORSAN",
     "direccion": "Blvd. Pedro Cardenas 1901,Fracc. Victoria, MATAMOROS, Tamaulipas.",
     "lat": 25.852772,
     "lng": -97.507164
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Federal 57 Km. 140 Tramo Matehuala - Huizache,S/N, VILLA GUADALUPE, San Luis Potosi.",
     "lat": 23.210958,
     "lng": -100.538272
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Acapulco 161,Fracc. Los Cristales, GUADALUPE, Nuevo Leon.",
     "lat": 25.722675,
     "lng": -100.203986
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Romulo Garza 800-A,Hacienda Los Morales, SAN NICOLAS, Nuevo Leon.",
     "lat": 25.716081,
     "lng": -100.248797
  },
  {
     "marca": "ORSAN",
     "direccion": "Ruiz Cortines 3428 Ote.,Moderna, MONTERREY, Nuevo Leon.",
     "lat": 25.703403,
     "lng": -100.279656
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Cardenas Villahermosa Km 124 + 740,S/N, CARDENAS, Tabasco.",
     "lat": 17.998453,
     "lng": -93.349456
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. 90 Irapuato - Guadalajara Km. 26.6,Rancho San Isidro, ABASOLO, Guanajuato.",
     "lat": 20.474789,
     "lng": -101.4996
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Raul Rangel Frias 3500,Rangel Frias, MONTERREY, Nuevo Leon.",
     "lat": 25.727678,
     "lng": -100.34945
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Lazaro Cardenas 2885,Valle Marquez, MONTERREY, Nuevo Leon.",
     "lat": 25.628869,
     "lng": -100.296394
  },
  {
     "marca": "ORSAN",
     "direccion": "Diagonal Morelos y Zaragoza,S/N, CABO SAN LUCAS, Baja California Sur.",
     "lat": 22.896089,
     "lng": -109.918764
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. a San Jose del Cabo Km 2,S/N, CABO SAN LUCAS, Baja California Sur.",
     "lat": 22.892742,
     "lng": -109.908133
  },
  {
     "marca": "ORSAN",
     "direccion": "Manzana B10 Lote 11,S/N, CABO SAN LUCAS, Baja California Sur.",
     "lat": 22.905222,
     "lng": -109.921853
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Cardenas Tabasco Km. 163+703,Fracc. Parque Logistico Industrial, VILLAHERMOSA, Tabasco.",
     "lat": 17.987764,
     "lng": -92.988267
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Isla de Tris Km 2,Luis Donaldo Colosio, CIUDAD DEL CARMEN, Campeche.",
     "lat": 18.652564,
     "lng": -91.794878
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Adolfo Ruiz Cortines S/N Europlaza,Carrizal, VILLAHERMOSA, Tabasco.",
     "lat": 17.988431,
     "lng": -92.964303
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Transpeninsular # 2049,Lomas Del Rosarito, SAN JOSE DEL CABO, Baja California Sur.",
     "lat": 23.072642,
     "lng": -109.705686
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. A Dos Bocas Paraiso,R/A El Limón, PARAISO, Tabasco.",
     "lat": 18.409628,
     "lng": -93.214028
  },
  {
     "marca": "ORSAN",
     "direccion": "Paseo de Leones S/N,Cerradas De Cumbres, MONTERREY, Nuevo Leon.",
     "lat": 25.741517,
     "lng": -100.414242
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Transpeninsular KM 34.6,Gaymitas, SAN JOSE DEL CABO, Baja California Sur.",
     "lat": 23.080908,
     "lng": -109.707819
  },
  {
     "marca": "ORSAN",
     "direccion": "CARRETERA TRANSPENINSULAR 8600,EL ZACATAL, SAN JOSE DEL CABO, Baja California Sur.",
     "lat": 23.105964,
     "lng": -109.7118
  },
  {
     "marca": "ORSAN",
     "direccion": "Libramiento Noroeste De Queretaro Km. 19.5,Lado Norte El Marques, EL MARQUES, Queretaro.",
     "lat": 20.69985,
     "lng": -100.337067
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. De las Brisas #2404 Entre calles Aguajitos y carrt. A Todos Los Santos.,brisas del Pacifico, MINI SENDERO, Baja California Sur.",
     "lat": 22.902986,
     "lng": -109.932072
  },
  {
     "marca": "ORSAN",
     "direccion": "Carretera Transismica KM. 57.5 S/N,S/C, VILLAHERMOSA, Tabasco.",
     "lat": 18.007761,
     "lng": -92.975863
  },
  {
     "marca": "ORSAN",
     "direccion": "Ramón Del Valle 101, Colinas de San Jeronimo, MONTERREY, Nuevo Leon.",
     "lat": 25.681175,
     "lng": -100.357653
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Eugenio Garza Sada 4379,Contry, MONTERREY, Nuevo Leon.",
     "lat": 25.624331,
     "lng": -100.274697
  },
  {
     "marca": "ORSAN",
     "direccion": "CARR. BENEMERITO - NUEVO CHIHUAHUA KM 197, BENEMERITO DE LAS AMERICAS, Chiapas.",
     "lat": 16.500214,
     "lng": -90.654122
  },
  {
     "marca": "ORSAN",
     "direccion": "Km. 17+267.10 CARRETERA FEDERAL 186 TRAMO VILLAHERMOSA-FCO. ESCARCEGA, VILLAHERMOSA, Tabasco.",
     "lat": 17.945692,
     "lng": -92.784033
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. 5 de febrero # 235, Zona Industrial Felipe Carrillo Puerto, QUERETARO, QRO, .",
     "lat": 23.651953,
     "lng": -100.343147
  },
  {
     "marca": "ORSAN",
     "direccion": "Blvd. Bernardo Quintana No. 44,  Fracc. Arboledas, Queretaro, Queretaro.",
     "lat": 20.615078,
     "lng": -100.386586
  },
  {
     "marca": "ORSAN",
     "direccion": "Corregidora Sur No. 194. Col. Centro, Queretaro, Queretaro.",
     "lat": 20.586275,
     "lng": -100.389067
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. 5 de Febrero No 104 esq. Ignacio Zaragoza, Col. Centro, Queretaro, Queretaro.",
     "lat": 20.582236,
     "lng": -100.407031
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Constituyentes No. 132 Ote. Fracc. Los Arquitos, Queretaro, Queretaro.",
     "lat": 20.587881,
     "lng": -100.3679
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. Constituyentes No. 177 Pte. Col. Casa Blanca, Queretaro, Queretaro.",
     "lat": 20.579267,
     "lng": -100.399986
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. 5 de Febrero km 227.6. Col. San Pablo, Queretaro, Queretaro.",
     "lat": 20.616708,
     "lng": -100.421639
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. a Celaya km. 1, Col. Allende , San Miguel de Allende, Guanajuato.",
     "lat": 20.9044,
     "lng": -100.748517
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Mexico-Irapuato km 300, Salamanca, Guanajuato.",
     "lat": 20.597892,
     "lng": -101.180108
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Mexico-Irapuato km 300, Salamanca, Guanajuato.",
     "lat": 20.598786,
     "lng": -101.180344
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Celaya - Queretaro km 5.9, Col. Villa Corregidora, Corregidora, Queretaro.",
     "lat": 20.573047,
     "lng": -100.469458
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Irapuato - Abasolo - La Piedad km. 14.5, Col. Modelo, Irapuato, Guanajuato.",
     "lat": 20.564897,
     "lng": -101.447128
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. San Luis Potosi Km. 46 , San Jose de Iturbide, Guanajuato.",
     "lat": 20.964033,
     "lng": -100.426831
  },
  {
     "marca": "ORSAN",
     "direccion": "Blvd. Bernardo Quintana km 17. Col. San Pablo, Queretaro, Queretaro.",
     "lat": 20.619042,
     "lng": -100.410978
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. 5 de Febrero, No 1112 Col. Centro, Queretaro, Queretaro.",
     "lat": 20.593023,
     "lng": -100.413953
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Luis Vega y Monroy No 400,  Col. Plazas del Sol, Queretaro, Queretaro.",
     "lat": 20.577233,
     "lng": -100.373683
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Mexico-Queretaro km 191+100, Col. Palo Alto, El Marques, Queretaro.",
     "lat": 20.554731,
     "lng": -100.217333
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Panamericana km 311, Salamanca, Guanajuato.",
     "lat": 20.549903,
     "lng": -101.143342
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Queretaro-Celaya km7+000, Corregidora, Queretaro.",
     "lat": 20.572186,
     "lng": -100.469886
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Del Sol No 1 Fracc. El Sol, Queretaro, Queretaro.",
     "lat": 20.615753,
     "lng": -100.436883
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Mexico-Queretaro km 191+137, El Marques, Queretaro.",
     "lat": 20.553097,
     "lng": -100.217767
  },
  {
     "marca": "ORSAN",
     "direccion": "Rio Moctezuma No 1, Col. San Cayetano, San Juan del Rio, Queretaro.",
     "lat": 20.388403,
     "lng": -99.984072
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Constituyentes No 27 Col. Centro , San Juan del Rio, Queretaro.",
     "lat": 20.395231,
     "lng": -99.988542
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Mexico-Pachuca km 77.6, Pachuca, Hidalgo.",
     "lat": 20.022983,
     "lng": -98.810069
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Pachuca-Cd. Valles Tramo Actopan km 9+100 Santa Catarina Tornacuxtle, San Agustín Tlaxcala, Hidalgo.",
     "lat": 20.124339,
     "lng": -98.833403
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. Queretaro - San Luis Potosi km. 27+841, Col. Buenavista, Queretaro, Queretaro.",
     "lat": 20.814178,
     "lng": -100.449333
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. del Canal 219 Col. Parque Plan de Labores, 52740, Estado de Mexico.",
     "lat": 19.259144,
     "lng": -99.474467
  },
  {
     "marca": "ORSAN",
     "direccion": "Prolongacion Corregidora Nte. No 911 Col. Hacienda La Laborcilla, Queretaro, Queretaro.",
     "lat": 20.613647,
     "lng": -100.389
  },
  {
     "marca": "ORSAN",
     "direccion": "Manzana XVI Ave. de la Luz, Esq. Prol. Bernardo Quintana, Col. Cerrito Colorado - Comevi, Queretaro, Queretaro.",
     "lat": 20.631717,
     "lng": -100.466339
  },
  {
     "marca": "ORSAN",
     "direccion": "Blvd. Diaz Ordaz No 1395 Esq. Calle Ixtoc Col. Centro, Irapuato, Guanajuato.",
     "lat": 20.679097,
     "lng": -101.345817
  },
  {
     "marca": "ORSAN",
     "direccion": "MIGUEL ALEMAN km:24, Apodaca, Nuevo Leon.",
     "lat": 25.779956,
     "lng": -100.122302
  },
  {
     "marca": "ORSAN",
     "direccion": "KM 0 carretera 100 El Colorado-Higuerillas, El Marques, Queretaro.",
     "lat": 20.562411,
     "lng": -100.221314
  },
  {
     "marca": "ORSAN",
     "direccion": "Boulevard Harold R. Pape #1912 Col. Del Prado, MONCLOVA, Coahuila.",
     "lat": 26.9267,
     "lng": -101.417618
  },
  {
     "marca": "ORSAN",
     "direccion": "Carretera 57 KM 6.5 #1400 Col. Estancia San Juan Bautista, MONCLOVA, Coahuila.",
     "lat": 26.957345,
     "lng": -101.409745
  },
  {
     "marca": "ORSAN",
     "direccion": "Calle de la Fuente 108 Oriente Col. Centro, MONCLOVA, Coahuila.",
     "lat": 26.902411,
     "lng": -101.422894
  },
  {
     "marca": "ORSAN",
     "direccion": "Carretera Saltillo-Piedra Negras KM 1065.5 Col. Centro, MONCLOVA, Coahuila.",
     "lat": 26.892235,
     "lng": -101.423535
  },
  {
     "marca": "ORSAN",
     "direccion": "Huemac 1101 Col. Anahuac, MONCLOVA, Coahuila.",
     "lat": 26.901071,
     "lng": -101.438081
  },
  {
     "marca": "ORSAN",
     "direccion": "Presidente Carranza #75 Col. Comercial, SAN JUAN DE SABINAS, Coahuila.",
     "lat": 27.936913,
     "lng": -101.227725
  },
  {
     "marca": "ORSAN",
     "direccion": "CARRETERA TRANSPENINSULAR No 5380 Col. El Zacatal, SAN JOSE DEL CABO, Baja California Sur.",
     "lat": 23.098861,
     "lng": -109.7104
  },
  {
     "marca": "ORSAN",
     "direccion": "CALLE DIAGONAL MORELOS No. 3717 COL. MATAMOROS, Cabo San Lucas, Baja California Sur.",
     "lat": 22.938031,
     "lng": -109.938231
  },
  {
     "marca": "ORSAN",
     "direccion": "CALLE DIAGONAL MORELOS No. 3717 COL. MATAMOROS, Cabo San Lucas, Baja California Sur.",
     "lat": 22.90735,
     "lng": -109.9642
  },
  {
     "marca": "ORSAN",
     "direccion": "CALLE DIAGONAL MORELOS No. 3717 COL. MATAMOROS, Cabo San Lucas, Baja California Sur.",
     "lat": 22.886519,
     "lng": -109.926889
  },
  {
     "marca": "ORSAN",
     "direccion": "CALLE DIAGONAL MORELOS No. 3717 COL. MATAMOROS, Cabo San Lucas, Baja California Sur.",
     "lat": 22.907011,
     "lng": -109.930161
  },
  {
     "marca": "ORSAN",
     "direccion": "CALLE DIAGONAL MORELOS No. 3717 COL. MATAMOROS, Cabo San Lucas, Baja California Sur.",
     "lat": 23.120553,
     "lng": -109.712069
  },
  {
     "marca": "ORSAN",
     "direccion": "CARR. ESTATAL COMALCALCO CUNDUACAN KM 28 , Comalcalco, Tabasco.",
     "lat": 18.206433,
     "lng": -93.205406
  },
  {
     "marca": "ORSAN",
     "direccion": "Carretera Queretaro - San Luis Potosi #12717 Col. Parcela Ejido Jurica, Queretaro, Queretaro.",
     "lat": 20.680841,
     "lng": -100.435638
  },
  {
     "marca": "ORSAN",
     "direccion": "Parcela 36-C Carretera El Colorado-Bernal km 1.5 Col. El Paraiso, El Marques, Queretaro.",
     "lat": 20.567897,
     "lng": -100.215334
  },
  {
     "marca": "ORSAN",
     "direccion": " Carretera Federal 180 Cárdenas-Villahermosa Km. 145+297.15, VILLAHERMOSA, Tabasco.",
     "lat": 17.981858,
     "lng": -93.160341
  },
  {
     "marca": "ORSAN",
     "direccion": "Carretera Federal Villahermosa-Cárdenas km 132, Cucuyulapa, Tabasco.",
     "lat": 17.999844,
     "lng": -93.280394
  },
  {
     "marca": "ORSAN",
     "direccion": "Av. de la Revolucion Mexicana 1209 Fracc. Barrera, MONCLOVA, Coahuila.",
     "lat": 26.898853,
     "lng": -101.394944
  },
  {
     "marca": "ORSAN",
     "direccion": "Autopista Cosoleacaque-La Tinaja KM 31+800, ZARAGOZA, Veracruz.",
     "lat": 17.967008,
     "lng": -94.652486
  },
  {
     "marca": "ORSAN",
     "direccion": "Carretera 57 #5900 , Monclova, Coahuila.",
     "lat": 26.973611,
     "lng": -101.37838
  },
  {
     "marca": "ORSAN",
     "direccion": "Carretera Estatal 200 #265 Hacienda Grande, Tequisquiapan, Queretaro.",
     "lat": 20.53792,
     "lng": -99.89267
  },
  {
     "marca": "ORSAN",
     "direccion": "Carr. a Humilpan 407,Vista Alegre, QUERETARO, Queretaro.",
     "lat": 20.566453,
     "lng": -100.377911
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. 5 de Febrero 1716,Fracc. Industrial Benito Juarez, QUERETARO, Queretaro.",
     "lat": 20.631236,
     "lng": -100.425531
  },
  {
     "marca": "ORSAN",
     "direccion": "Prol. Zaragoza 305 Pte.,Fracc. El Jacal, QUERETARO, Queretaro.",
     "lat": 20.568544,
     "lng": -100.414736
  },
  {
     "marca": "ORSAN",
     "direccion": "Ave. Constituyentes 22 Ote.,Centro, QUERETARO, Queretaro.",
     "lat": 20.585258,
     "lng": -100.391894
  },
  {
     "marca": "ORSAN",
     "direccion": "Blvd. Bernardo Quintana 179,Fracc. Los Arcos, QUERETARO, Queretaro.",
     "lat": 20.591244,
     "lng": -100.366133
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Colón #100 Ote., esq. Bernardo Reyes, Col. Central. Monterrey, N.L.",
     "lat": 25.686718,
     "lng": -100.322927
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Lazaro Cardenas Esq. Alfareros No. 1590,Alfareros,Monterrey,Nuevo Leon",
     "lat": 25.63722222,
     "lng": -100.3113889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Alfonso Reyes Y Calz. Victoria,.,Monterrey,Nuevo Leon",
     "lat": 25.689553,
     "lng": -100.317078
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Eugenio Garza Sada #220, Col. Roma. Monterrey, N.L.",
     "lat": 25.655447,
     "lng": -100.294518
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Francisco Marquez # 450,Obrera,Monterrey,Nuevo Leon",
     "lat": 25.676706,
     "lng": -100.290836
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Solidaridad Pte. R. Frias Y 5 Ene 7070 16 Sep.,.,Monterrey,Nuevo Leon",
     "lat": 25.730082,
     "lng": -100.346174
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av.A.Ruiz Cortinez No.3505,Mitras Norte,Monterrey,Nuevo Leon",
     "lat": 25.705,
     "lng": -100.3480556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Revolución #3941,Villa Del Rio,Monterrey,Nuevo Leon",
     "lat": 25.636447,
     "lng": -100.272376
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Francisco I. Madero No. 2886,Mitras Sur,Monterrey,Nuevo Leon",
     "lat": 25.68666667,
     "lng": -100.3413889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Felix U. Gomez No. 2820,Moderna,Monterrey,Nuevo Leon",
     "lat": 25.698101,
     "lng": -100.294995
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. San Jeronimo # 1001,S/D,Monterrey,Nuevo Leon",
     "lat": 25.675336,
     "lng": -100.364178
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Paseo De Los Leones #1239, Cumbres 1er. Sector. Monterrey, N.L.",
     "lat": 25.697277,
     "lng": -100.356531
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Constitución #3908, Churubusco, Monterrey, Nuevo León",
     "lat": 25.682686,
     "lng": -100.267609
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Luis Donaldo Colosio #311 , Barrio Chapultepec, Cd. Solidaridad, Monterrey, Nuevo León",
     "lat": 25.763595,
     "lng": -100.400616
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prolongación Francisco I. Madero #4345-A Col. Fierro, Monterrey, N.L.",
     "lat": 25.68613,
     "lng": -100.268634
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Garza Sada 7105-D Salida a Carr. Nacional",
     "lat": 25.5975,
     "lng": -100.2630556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Penitenciaria 849-A, Col. Ferrocarrilera, Mty, N.L. Entre Martin Campos y Federico Rendon",
     "lat": 25.723396,
     "lng": -100.337131
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Gonzalitos 910 Nte Esquina con Lincoln, Col. Mitras Norte",
     "lat": 25.714471,
     "lng": -100.350588
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Abraham Lincoln No. 6771, Esq. Celso Cepeda Col. Plutarco Elias Calles, Monterrey, N.L.",
     "lat": 25.74777778,
     "lng": -100.3858333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Lincoln No. 5797 Esq. Antiguos Ejidatarios, Monterey, N.L.",
     "lat": 25.768129,
     "lng": -100.41513
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. Vicente Guerrero 3730 Esq. Francisco Gonzalez Bocanegra Monterrey, N.L.",
     "lat": 25.71333333,
     "lng": -100.3077778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Revolución #5200, Col. Contry, Monterrey N.L.",
     "lat": 25.625695,
     "lng": -100.273461
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. CABEZADA # 1100 BARRIO MIRASOL 2 SECTOR 66072",
     "lat": 25.77361111,
     "lng": -100.3805556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. FIDEL VELAZQUEZ # 3234 MITRAS NORTE 64320",
     "lat": 25.716736,
     "lng": -100.346894
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Venustiano Carranza Sur #480, Col. Maria Luisa. Monterrey, N.L.",
     "lat": 25.674278,
     "lng": -100.332853
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AZTLAN # 7113 GRANJA SANITARIA 30523",
     "lat": 25.7375,
     "lng": -100.3502778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortinez y Simon Bolivar No.2185, Col. Mitras Centro. Monterrey, Nuevo Leon",
     "lat": 25.704575,
     "lng": -100.341953
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. AZTLAN 9300 ESQ. DE LA HUERTA UNIDAD SAN BERNABE IV SECTOR MONTERREY.",
     "lat": 25.76222222,
     "lng": -100.3722222
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Emiliano Zapata No. 207, Col. Emiliano Zapata. Monterrey, Nuevo Leon",
     "lat": 25.70138889,
     "lng": -100.3613889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "PROLONGACION RUIZ CORTINES No. 723 PTE COL. MITRAS NORTE",
     "lat": 25.70777778,
     "lng": -100.3558333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. LINCOLN No295 COL. MITRAS NORTE MONTERREY",
     "lat": 25.71261,
     "lng": -100.346878
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Aaron Saenz #1349, esq. Privada Arnulfo Garza. Monterrey, N.L. ",
     "lat": 25.674567,
     "lng": -100.371999
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Vicente Guerrero #1216, esq. Luis Mora. Col. Sarabia. Monterrey, N.L.",
     "lat": 25.686672,
     "lng": -100.312087
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Universidad #498 esq. Mariano Saas, Col. Regina. Monterrey, N.L. ",
     "lat": 25.706324,
     "lng": -100.31449
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Nacional 4288-A,Excomunidad De La Estanzuela,Monterrey,Nuevo Leon",
     "lat": 25.56611111,
     "lng": -100.2388889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Nacional Km. 263 No. 6250-A,Los Cristales,Monterrey,Nuevo Leon",
     "lat": 25.53583333,
     "lng": -100.2188889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Nacional km 269, SC, Monterrey, Nuevo León",
     "lat": 25.56527778,
     "lng": -100.2394444
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortinez No.550,Mitras Centro,Monterrey,Nuevo Leon",
     "lat": 25.70444444,
     "lng": -100.3475
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Rodrigo Gomez No. 1445 Col. Central",
     "lat": 25.71666667,
     "lng": -100.3419444
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Eugenio Garza Sada No. 5911 Col. Villa las Fuentes",
     "lat": 25.61083,
     "lng": -100.270563
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. RODRIGO GOMEZ No. 6000 ESQ. LAS PLANICIES COL MOCTEZUMA",
     "lat": 25.735285,
     "lng": -100.342882
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Jimenez #957, Col. Centro. Monterrey, N.L.",
     "lat": 25.683484,
     "lng": -100.316215
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARR. BRISEÑAS VISTAHERMOSA KM 1.5",
     "lat": 20.26023611,
     "lng": -102.552375
  },
  {
     "marca": "OXXO GAS",
     "direccion": "KM 40 CARRT. TECOMAN-PLAYA AZUL S/D 60800",
     "lat": 18.67504444,
     "lng": -103.6808556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "KM. 9 CARR.GUADALAJARA-EL SALTO CENTRO 45680",
     "lat": 20.51174167,
     "lng": -103.1926861
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Aguascalientes Nte. No. 724, Col. Centro comercial Agropecuario, Aguascalientes, Ags.",
     "lat": 21.915097,
     "lng": -102.292531
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Panamericana Sur km. 121. Aguascalientes, Ags.",
     "lat": 21.813917,
     "lng": -102.285794
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Convención No. 1402 Gómez, Aguascalientes, Ags.",
     "lat": 21.885981,
     "lng": -102.313489
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Aguascalientes #3402 Sur, Col. Prados del Sur, Aguascalientes, Ags.",
     "lat": 21.859506,
     "lng": -102.299439
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. De La Convención y Héroes de Nacozari, Aguascalientes, Ags.",
     "lat": 21.901828,
     "lng": -102.288822
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Roma #242. Col. Del Valle. Aguascalientes, Ags.",
     "lat": 21.872017,
     "lng": -102.318317
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Aguascalientes Nte. #999, Bosques Del Prado Oriente,Aguascalientes, Ags",
     "lat": 21.914539,
     "lng": -102.281628
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Zacatecas #304, Fracc. El Plateado. Aguascalientes, Ags.",
     "lat": 21.906289,
     "lng": -102.292586
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AVE.MAHATMA GANDHI #719 FRACC.TORRES DE SAN FRANCISCO.",
     "lat": 21.83465556,
     "lng": -102.2938167
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.JOSE MARIA CHAVEZ 1108,FRACC.LINDAVISTA",
     "lat": 21.86752778,
     "lng": -102.2941556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.PROLONGACION JUAREZ 312,COL.CENTRO,CP.36960",
     "lat": 20.61955278,
     "lng": -101.6680139
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARRETERA IRAPUATO-LEON KM 23.920 SAN JOSE DE LLANOS C.P. 36266",
     "lat": 20.84223611,
     "lng": -101.3152472
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. San Roque # 1139, Col. Fracc. Colon. Irapuato, Guanajuato",
     "lat": 20.657389,
     "lng": -101.341007
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Alejandro de la Cruz Saucedo #1300, Col. El Barreno, Jesús María, Aguascalientes, Ags.",
     "lat": 21.984803,
     "lng": -102.335853
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Lagos - León, Km 354-460 #5000, Ejido La Moya. Lagos de Moreno, Jalisco. ",
     "lat": 21.32006389,
     "lng": -101.88325
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.JOSE MARIA MORELOS #213 ESQ.VILLAMAGNA COL.EL PELUCHAN ",
     "lat": 21.17370833,
     "lng": -101.6612306
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Mariano Escobedo No. 4804, Col. Satelite. León, Guanajuato",
     "lat": 21.121785,
     "lng": -101.722221
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. San Juan del Bosco #101, Col. Ejido La Joya. León Guanajuato. ",
     "lat": 21.139171,
     "lng": -101.724976
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Juan Jose Torres Landa #901,Prados Verdes. León, Gto.",
     "lat": 21.10068333,
     "lng": -101.6725833
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Manuel J. Clouthier #208 y Cerro Gordo, Hda. Cerro Gordo. León, Gto.",
     "lat": 21.16120556,
     "lng": -101.6924917
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Miguel Hidalgo #1602, esq. José Ma. Belauz, Villa Insurgentes. León, Gto.",
     "lat": 21.147028,
     "lng": -101.671861
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Aeropuerto Km. 3.5 #860, San José El Alto. León, Gto.",
     "lat": 21.079675,
     "lng": -101.609061
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Juan José Torres Landa S/N Esq. Colina Dorada,Colinas De San Isidro. León, Gto.",
     "lat": 21.09646667,
     "lng": -101.6339778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd, Alonso De Torres Esq. Emilio Portes Gil S/N,San Jose Del Consuelo,Leon,Guanajuato",
     "lat": 21.14429722,
     "lng": -101.6477861
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. La Luz esq. Blvd Vicente Valtierra No 4402,Brisas del Carmen,León,Guanajuato",
     "lat": 21.11041667,
     "lng": -101.6014417
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd Antonio Madrazo esq Blvd Jose Maria Morelos 1501,San Jose del Consuelo, Leon, Guanajuato",
     "lat": 21.16319722,
     "lng": -101.6479944
  },
  {
     "marca": "OXXO GAS",
     "direccion": "blvd delta 202 A Col Industrial Delta Leon, Guanajuato",
     "lat": 21.08849167,
     "lng": -101.6226917
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd Jose Torres Landa, Esq. con Calle San Marcial ",
     "lat": 21.09993889,
     "lng": -101.6253444
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd Miguel Cervantes Esq. con calle San Marcial",
     "lat": 21.11301111,
     "lng": -101.7102639
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd Juan Jose Torres Landa No. 2508 Col. Buenos Aires, Leon Guanajuato",
     "lat": 21.09818333,
     "lng": -101.6700111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd Antonio Madrazo No. 2302 Fracc. Villas Vasco de Quiroga, Leon Guanajuato",
     "lat": 21.14863889,
     "lng": -101.6547167
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd Vicente Valtierra No. 3708 Col. San Pedro de los Hernandez, Leon Guanajuato",
     "lat": 21.12780278,
     "lng": -101.6442556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Manuel J. Clouthier No. 702 Fracc. Cerro Gordo, Leon Guanajuato",
     "lat": 21.16731944,
     "lng": -101.693
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Delta No. 102, Col. San Jose de Santa Julia, Leon Guanajuato",
     "lat": 21.092575,
     "lng": -101.61695
  },
  {
     "marca": "OXXO GAS",
     "direccion": "PORTICO NO. 101 INDUSTRIAL LAS BRISAS 00000",
     "lat": 21.11245556,
     "lng": -101.6246833
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.ADOLFO LOPEZ MATEOS 1002 OTE CP.37260,COL.EL COECILLO",
     "lat": 21.11951944,
     "lng": -101.6691056
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.VICENTE VALTIERRA #2602,COL.EL COECILLO,CP. 37390",
     "lat": 21.12971389,
     "lng": -101.6581333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.TORRES LANDA #101,COL.INDUSTRIAL JUAREZ CP. 37457 ",
     "lat": 21.10301389,
     "lng": -101.6892694
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARRETERA QUERETARO-SAN LUIS POTOSI KM.22+500 DEL.SANTA ROSA JAUREGUI,C.P. 76220",
     "lat": 20.76581389,
     "lng": -100.4464806
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.BERNARDO QUINTANA 2402-A, COL. EL ARCANGEL",
     "lat": 20.61789722,
     "lng": -100.4526833
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV.CERRO DEL SOMBRERETE #.1130 COL PUERTA DE BELEN ",
     "lat": 20.64252222,
     "lng": -100.4154722
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.BERNARDO QUINTANA #551 FRACC.LA LUNA DEL.FELIPE CARRILLO PUERTO",
     "lat": 20.6166,
     "lng": -100.4506944
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Paseo Constituyentes No. 1449, Col. El Pueblito. Corregidora, Queretaro",
     "lat": 20.54159444,
     "lng": -100.4312333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Camino de Los Candiles # 13, Col. Los Olvera, C.P. 76901, Corregidora, Queretaro",
     "lat": 20.55811,
     "lng": -100.412167
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.SALIDA A CUERAMARO #45,COL.PRIVADA DE REYES C.P. 36200",
     "lat": 20.87229444,
     "lng": -101.5268472
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARRETERA SALAMANCA-IRAPUATO KM. 98+200 4TO. FRACCIONAMIENTO RANCHO CR 36875",
     "lat": 20.59487222,
     "lng": -101.2350556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD.J.M CLOUTHIER #1140,COL.PREDIO DEL MONTE, C.P.36720",
     "lat": 20.59254722,
     "lng": -101.1839889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CALLE HEROES DE CANANEA #101, COL. LOS ALAMOS C.P.36750",
     "lat": 20.56608611,
     "lng": -101.1862
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prol. Muñoz No. 205 , Col. Villa Campestre, Cp. 78190, San Luis Potosi, S.L.P.",
     "lat": 22.16113611,
     "lng": -101.0001778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera federal #45 km 156+400 LEON-SILAO COL. NVO MEXICO SILAO, GTO",
     "lat": 20.97915833,
     "lng": -101.4770889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. EMILIANO ZAPATA NUM. 4 LORENZO MOSQUEDA 36000",
     "lat": 20.95810278,
     "lng": -101.6090611
  },
  {
     "marca": "OXXO GAS",
     "direccion": "PROL.5 DE MAYO #99,ZONA CENTRO C.P.36100",
     "lat": 20.94335833,
     "lng": -101.4190667
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Lopez Mateos # 205,Lagrange,San Nicolas De Los Garza,Nuevo Leon",
     "lat": 25.72555556,
     "lng": -100.2583333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "LUIS H.DUCOING #103,ZONA CENTRO C.P. 36100",
     "lat": 20.95429444,
     "lng": -101.4248278
  },
  {
     "marca": "OXXO GAS",
     "direccion": "ALVARO OBREGON #194, COL. CENTRO C.P 36100",
     "lat": 20.95159722,
     "lng": -101.435375
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel Aleman #1866,S/C,San Nicolas De Los Garza,Nuevo Leon",
     "lat": 25.733076,
     "lng": -100.209775
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle 21 #276x18, Cd. Industrial. Mérida Yucatán.",
     "lat": 20.93328333,
     "lng": -89.67225833
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calzada Union 230-A Col. Hacienda Los Morales. San Nicolás de los Garza, N.L.",
     "lat": 25.717611,
     "lng": -100.235824
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARR. GDL – CHAPALA KM 20",
     "lat": 20.46476389,
     "lng": -103.2576083
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Pedro J. Mendez Num. 919 Poniente S/C ",
     "lat": 22.92277778,
     "lng": -98.07944444
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Niños Heroes No. 400,Centro Sur,Allende,Nuevo Leon",
     "lat": 25.274981,
     "lng": -100.017506
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Lopez Mateos, No. 4200, Col. Rincon de Oriente, San Nicolás de los Garza, N.L.",
     "lat": 25.73194444,
     "lng": -100.2483333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Autopista al Aeropuerto y Carr. Monterrey-Caderey.700,S/C,Apodaca,Nuevo Leon",
     "lat": 25.696873,
     "lng": -100.143539
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Santa Rosa-Apodaca No. 200,Fracc. Valle Del Salduero,Apodaca,Nuevo Leon",
     "lat": 25.81444444,
     "lng": -100.2166667
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. FELIX GALVAN NO. 600 FIDEL VELAZQUEZ SANCHEZ 66490",
     "lat": 25.714727,
     "lng": -100.252876
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Monterrey-Miguel Alemán km 22.8, Centro, Apocada, Nuevo León",
     "lat": 25.78916667,
     "lng": -100.1455556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "JORGE TREVIÑO NO. 689 LAS PALMAS 66430",
     "lat": 25.74888889,
     "lng": -100.2805556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Monterrey - Nuevo Laredo 4803. Apodaca, Nuevo Leon",
     "lat": 25.834647,
     "lng": -100.254853
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Salinas Victoria, No. 3096, Apodaca N.L.",
     "lat": 25.8775,
     "lng": -100.2530556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. UNIVERSIDAD NO. 1011 CASA BELLA 66400",
     "lat": 25.75888889,
     "lng": -100.2961111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Camino Real A Santa Rosa #500-A Esq.Cartagena,Hacienda El Mezquital,Apodaca,Nuevo Leon",
     "lat": 25.767905,
     "lng": -100.241499
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. CRISTINA LARRALDE NUM. 600 ESQ. SIERRA DE IGUANA FRACC. SAN IGNACIO COL. LAS PUENTES 7o SECTOR SAN NICOLAS DE LOS GARZA",
     "lat": 25.74944444,
     "lng": -100.2791667
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel Aleman #300, Col. Centro. Apodaca, N.L.",
     "lat": 25.777446,
     "lng": -100.182592
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carrt. Huinala # 398,Villas De Huinala,Apodaca,Nuevo Leon",
     "lat": 25.746603,
     "lng": -100.194111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Antigua Carr. A Roma #8001, entre entronque con Mezquital, Col. Mezquital. Apodaca, N.L. ",
     "lat": 25.739774,
     "lng": -100.239199
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Del Telefono No. 113,Padilla,Apodaca,Nuevo Leon",
     "lat": 25.745125,
     "lng": -100.177624
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Avenida Mezquital-Santa Rosa No. 4950,S/C,Apodaca,Nuevo Leon",
     "lat": 25.78222222,
     "lng": -100.2258333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. MORENITA MIA N° 100 A COL. VALLE SOL, SAN NICOLÁS DE LOS GARZA, NUEVO LEÓN",
     "lat": 25.768891,
     "lng": -100.279151
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Reforma #800 Pte. Apodaca, N.L.",
     "lat": 25.780714,
     "lng": -100.197935
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Huinala - Dulces Nombres No.300, Apodaca, Nuevo León",
     "lat": 25.741135,
     "lng": -100.158423
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Jose Vasconcelos #667, Col. Centro, San Pedro Garza Garcia, Nuevo Leon",
     "lat": 25.66083333,
     "lng": -100.3983333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Miguel Alemán, Km. 14 + 920, Apodaca, Nuevo León.",
     "lat": 25.736937,
     "lng": -100.206862
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Corea Esq. Con Av. Bosque Real Col. Bosque Real Dos ",
     "lat": 25.77777778,
     "lng": -100.2408333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Monterrey-Saltillo #1300-1,S/C,Santa Catarina,Nuevo Leon",
     "lat": 25.68611111,
     "lng": -100.4686111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Mezquital Santa Rosa No 100, Esq. Camino Mezquital, Apodaca",
     "lat": 25.75366,
     "lng": -100.235787
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARRETERA CADEREYTA-REYNOSA KM. 27, CADEREYTA JIMÉNEZ, N.L. C.P. 67480",
     "lat": 25.598318,
     "lng": -100.028057
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Manuel J. Clouthier S/N,San Humberto,Santa Catarina,Nuevo Leon",
     "lat": 25.68416667,
     "lng": -100.4358333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Monterrey - Laredo No. 1701,Sc,General Escobedo,Nuevo Leon",
     "lat": 25.802643,
     "lng": -100.276589
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Lopez Portillo # 18. General Escobedo, Nuevo Leon",
     "lat": 25.768224,
     "lng": -100.291412
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Ave. Perimetral Norte No. 103-A,Mision De Santa Catarina,Santa Catarina,Nuevo Leon",
     "lat": 25.69638889,
     "lng": -100.4536111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Saltillo Monterrey - Tramo Libramiento,Km. 28+700,General Escobedo,Nuevo Leon",
     "lat": 25.82166667,
     "lng": -100.3205556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Libramiento Noreste 3700, SC, General Escobedo, N.L.",
     "lat": 25.821328,
     "lng": -100.321368
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel Aleman S/N,Enrique Rangel,Santa Catarina,Nuevo Leon",
     "lat": 25.662213,
     "lng": -100.458315
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Raul Salinas # 714,Felipe Carrillo,General Escobedo,Nuevo Leon",
     "lat": 25.79055556,
     "lng": -100.325
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Raul Lozano #526, Fraccionamiento los Girasoles, Escobedo, N.L.",
     "lat": 25.79194444,
     "lng": -100.3272222
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. RAUL SALINAS LOZANO NUM. 300 COL. VILLAS DE ESCOBEDO",
     "lat": 25.77722222,
     "lng": -100.3169444
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. BOULEVARD BENITO JUAREZ NO. 511 S/C ESCOBEDO NUEVO LEON",
     "lat": 25.78055556,
     "lng": -100.2852778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. BENITO JUAREZ NO.300-A COL. LAZARO CARDENAS ESCOBEDO.",
     "lat": 25.78527778,
     "lng": -100.3016667
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Mty-Saltillo km 23.5 Col.Las Aanacuas, Santa Catarina Nuevo Leon",
     "lat": 25.68611111,
     "lng": -100.4927778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARR A GARCIA KM6 PUERTO DURAZNO GARCIA, NL.",
     "lat": 25.74805556,
     "lng": -100.5277778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Libramiento Noreste #8000 Esq. Luis Donaldo Colosio Col. El Puerto del Durazno, García, N.L.",
     "lat": 25.74194444,
     "lng": -100.5138889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "AV. CUAUHTEMOC # 1280 RESIDENCIAL CUAUHTEMOC 66360",
     "lat": 25.685,
     "lng": -100.443333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. a las Grutas Km 11.1 a Garcia ",
     "lat": 25.77555556,
     "lng": -100.5655556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Lincoln No. 3000, Garcia, N.L.",
     "lat": 25.78388889,
     "lng": -100.4619444
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av.Cuauhtemoc y Prol. Blvd.C.T.M., Col. Fracc. Residencial Cuauhtemoc. Santa Catarina, N.L.",
     "lat": 25.685157,
     "lng": -100.443807
  },
  {
     "marca": "OXXO GAS",
     "direccion": "LIBRAMIENTO NORESTE 3.875 EN GARCIA, N.L. ",
     "lat": 25.726826,
     "lng": -100.534454
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARRT. NACIONAL KM. 255 NUM. 204 FRACC. CUATRO CAMINOS 67300",
     "lat": 25.47833333,
     "lng": -100.1783333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Heriberto Castillo Num. 1000 García, N.L. ",
     "lat": 25.782249,
     "lng": -100.576137
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prolong. Francisco I. Madero # 4510,Francisco I. Madero,Guadalupe,Nuevo Leon",
     "lat": 25.68638889,
     "lng": -100.2638889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Avenida San Rafael No. 96,Riberas De La Purisima,Guadalupe,Nuevo Leon",
     "lat": 25.695134,
     "lng": -100.230826
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARRT. NACIONAL # 103 EL CERCADO 67320",
     "lat": 25.41361111,
     "lng": -100.1397222
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Acapulco Esq. Av.Malvinas, Guadalupe,Nuevo Leon",
     "lat": 25.721971,
     "lng": -100.20255
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera General Zuazua S/N,Fraccionamiento Real De Palmas,General Zuazua,Nuevo Leon",
     "lat": 25.90555556,
     "lng": -100.1608333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortinez # 1400-A,Nueva Linda Vista,Guadalupe,Nuevo Leon",
     "lat": 25.703009,
     "lng": -100.231422
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Constituyentes De Nuevo León #103,Escamilla. Guadalupe, N.L.",
     "lat": 25.696366,
     "lng": -100.261695
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Los Fundadores km 9.1, Labor del Llano, Arteaga, Coahuila de Zaragoza",
     "lat": 25.44301667,
     "lng": -100.8656667
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Camino A Las Escobas No.1614-A,Dos Rios,Guadalupe,Nuevo Leon",
     "lat": 25.681367,
     "lng": -100.169114
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel Aleman Numero 5391-A,La Purisima,Guadalupe,Nuevo Leon",
     "lat": 25.694174,
     "lng": -100.239977
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr Saltillo -Zacatecas KM 113 S/C Concepcion del Oro, Zacatecas",
     "lat": 24.61468333,
     "lng": -101.3740528
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Eloy Cavazos No.7840-1,Rincon De La Sierra,Guadalupe,Nuevo Leon",
     "lat": 25.648711,
     "lng": -100.189336
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Benito Juarez S/N, Col. Centro. Guadalupe, N.L.",
     "lat": 25.679618,
     "lng": -100.265326
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Chapultepec #2700, Col. Valle De Chapultepec. Guadalupe, N.L.",
     "lat": 25.666148,
     "lng": -100.269663
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Acueducto No. 300,Jardines De La Silla,Guadalupe,Nuevo Leon",
     "lat": 25.644344,
     "lng": -100.185475
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Maestro Israel Cavazos Garza 335,Fracc. Privadas De San Miguel,Guadalupe,Nuevo Leon",
     "lat": 25.700414,
     "lng": -100.163744
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. México No. 7601, Fracc. Parque industrial La Silla, Guadalupe, Nuevo León",
     "lat": 25.655905,
     "lng": -100.182605
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Acceso km 9+200 Autopista Monterrey-Cadereyta, SC, Guadalupe, Nuevo León",
     "lat": 25.693195,
     "lng": -100.183651
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortines #2001, Guadalupe N.L",
     "lat": 25.707962,
     "lng": -100.179193
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Fed Saltillo - Matehuala km 93600 Col. Jesus Ma Puerto Nopalillos",
     "lat": 24.39544444,
     "lng": -100.3872361
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Benito Juarez Esq. Av. Central, Guadalupe, NL",
     "lat": 25.674849,
     "lng": -100.19159
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortines #241 Col. Nueva Libertad, Guadalupe N.L",
     "lat": 25.703284,
     "lng": -100.250487
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Jardines de la Silla # 301, Col. Valle de San Roque. Guadalupe, N.L.",
     "lat": 25.64828,
     "lng": -100.1889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. MIGUEL DE LA MADRID # 3900, COL. JARDINES DE SAN RAFAEL, GUADALUPE, N.L.",
     "lat": 25.69333333,
     "lng": -100.2138889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. 16 DE SEPTIEMBRE NO. 601 . 27980",
     "lat": 25.44758333,
     "lng": -102.1722778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera a Monclova km25 y Porfirio Diaz Num. 203 nte Col. Centro Hgo.",
     "lat": 25.974641,
     "lng": -100.442463
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Miguel Ramos Arizpe No. 157, Parque industrial, Ramos Arizpe, Coahuila de Zaragoza",
     "lat": 25.54424444,
     "lng": -100.939125
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera A Reynosa Km 298 No. 106-A,Colinas De San Juan,Juarez,Nuevo Leon",
     "lat": 25.63777778,
     "lng": -100.0861111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Autopista Monterrey - Reynosa Km. 33.7, S/C, Cadereyta Jimenez, Nuevo León",
     "lat": 25.60194444,
     "lng": -99.97138889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Monterrey - Reynosa km. 13, SC, Juarez, Nuevo León",
     "lat": 25.65944444,
     "lng": -100.1455556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Plan de Guadalupe No. 200, Zona Centro, Ramos Arizpe, Coahuila de Zaragoza",
     "lat": 25.53939444,
     "lng": -100.9490333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Arturo B. de la Garza No. 1506 Esq. 20 de Septiembre, Villa Juarez N.L.",
     "lat": 25.65138889,
     "lng": -100.1072222
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CALZADA SALTO DEL AGUA NO. 1851 QUINTA MANANTIALES 25904",
     "lat": 25.51163889,
     "lng": -100.939175
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Monterrey Reynosa No. 5480",
     "lat": 25.674108,
     "lng": -100.19076
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Huinala-Villa de Juarez No. 300 Apodaca, N.L.",
     "lat": 25.714161,
     "lng": -100.137954
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CALLEINDUSTRIA AGROQUIMICA #890, PARQUE INDUSTRIAL SALTILLO-RAMOS ARIZPE, RAMOS ARIZPE, COAHUILA",
     "lat": 25.559745,
     "lng": -100.92298
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. San Roque 103 Fracc. América Unida, Cd. Benito Juarez ",
     "lat": 25.64888889,
     "lng": -100.1436111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "ARTURO B. DE LA GARZA L-2M-9 #408 JUAREZ N.L.",
     "lat": 25.64611111,
     "lng": -100.0963889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Mty-Nuevo Laredo # 8465 Col. Modulo Industrial America. Nuevo Laredo, Tmps.",
     "lat": 27.421435,
     "lng": -99.533668
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av.Hidalgo #985-A Entre Libram. Mty-Victoria,Centro,Linares,Nuevo Leon",
     "lat": 24.850136,
     "lng": -99.57198
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. CARLOS MORALES #2631 COL. LA GRAN HACIENDA, RAMOS ARIZPE, COAHUILA 25900",
     "lat": 25.53168611,
     "lng": -100.943275
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Díaz Ordaz S/N Esq. Av. Marqueta Col. Potrero Santa Teresa Linares N.L",
     "lat": 24.8725,
     "lng": -99.57888889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Perif. Luis Echeverria Esq. Blvd. Carranza No. 140,Latinoamericana,Saltillo,Coahuila de Zaragoza",
     "lat": 25.44733611,
     "lng": -100.9889556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Francisco Coss e Hidalgo,.,Saltillo,Coahuila De Zaragoza",
     "lat": 25.431625,
     "lng": -100.9936917
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Presidente Cardenas Y Allende, Saltillo,Coahuila De Zaragoza",
     "lat": 25.43089722,
     "lng": -100.9975639
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Periferico Luis Echeverria No. 1612,Lomas De Lourdes,Saltillo,Coahuila De Zaragoza",
     "lat": 25.38936667,
     "lng": -100.9947639
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Periferico Luis Echeverria Alvarez # 3437,Saltillo 2000,Saltillo,Coahuila De Zaragoza",
     "lat": 25.45520556,
     "lng": -101.0278917
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Venustiano Carranza # 5530,Fraccionamiento Las Haciendas,Saltillo,Coahuila",
     "lat": 25.47262222,
     "lng": -100.9765611
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carlos Abedrop Davila No. 2780,Las Palmas,Saltillo,Coahuila De Zaragoza",
     "lat": 25.41412778,
     "lng": -100.9717056
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Jesus Valdez Sanchez S/N,Fracc. El Tapanco,Saltillo,Coahuila De Zaragoza",
     "lat": 25.44182778,
     "lng": -100.9534833
  },
  {
     "marca": "OXXO GAS",
     "direccion": "CARRETERA MERIDA-CANCUN SIN 77500",
     "lat": 21.10698889,
     "lng": -86.96089167
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prolongación Otilio Gonzalez No. 2939, Valle Santa Elena, Saltillo, Coahuila",
     "lat": 25.40525,
     "lng": -100.9748667
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Federal Merida-Cancun Km 309",
     "lat": 21.13517222,
     "lng": -86.90611111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Federal Merida-Cancun km 273",
     "lat": 20.99428056,
     "lng": -87.18716667
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Al Garrafon S/N",
     "lat": 21.24398333,
     "lng": -86.738375
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Luis Donaldo Colosio, Num 214 Col Ciudas Mirasierra Saltillo Coahuila",
     "lat": 25.43148889,
     "lng": -100.9253556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. 39 #433-435, Merida Yucatan",
     "lat": 20.98113333,
     "lng": -89.5895
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Periferico Luis Echavarria Alvarez No. 2252 Col. Ciudad Satelite Norte",
     "lat": 25.455575,
     "lng": -100.0097333
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Los Gonzalez Esquina el Rosario Fracc Santa Susana",
     "lat": 25.45444722,
     "lng": -100.9547944
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Antonio Cardenas No. 1564 Col. Lomas de Chapultepec, Saltillo Coahuila",
     "lat": 25.40403611,
     "lng": -100.9993278
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Venustiano Carranza No.7625 COL. Los Rodriguez",
     "lat": 25.49453889,
     "lng": -100.9670528
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Los Gonzalez No. 4368 Col. Los Gonzalez",
     "lat": 25.47169444,
     "lng": -100.9482083
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Periferico Luis Echeverria #3855 Ote. Esq. Rio Panuco",
     "lat": 25.40879722,
     "lng": -100.9789556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. LUIS DONALDO COLOSIO NO. 8051 . 25305",
     "lat": 25.43843333,
     "lng": -100.9263028
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. JESUS VALDES SANCHEZ NO. 254 EL LLANO 25386",
     "lat": 25.44555833,
     "lng": -100.8938889
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. ANTONIO CARDENAS # 2020 BELLAVISTA 25000",
     "lat": 25.40045278,
     "lng": -101.0009417
  },
  {
     "marca": "OXXO GAS",
     "direccion": "PERIFERICO LUIS ECHEVERRIA #1950 COL. AVICOLA, SALTILLO, COAHUILA ",
     "lat": 25.43320833,
     "lng": -100.9712944
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. EMILIO ARIZPE DE LA MAZA #2335, COL. LOMAS DEL SUR, SALTILLO, COAHUILA",
     "lat": 25.36906944,
     "lng": -101.0032278
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. ANTONIO CARDENAS 7870, RANCHO LA SOLEDAD Y EL REFUGIO, SALTILLO, COAHUILA",
     "lat": 25.352349,
     "lng": -101.022058
  },
  {
     "marca": "OXXO GAS",
     "direccion": "EULALIO GUTIERREZ TREVIÑO NO. 1095 TULIPANES 25204",
     "lat": 25.451125,
     "lng": -100.9559
  },
  {
     "marca": "OXXO GAS",
     "direccion": "BLVD. MATAMOROS # 5720 LUIS HORACIO SALINAS 27440",
     "lat": 25.53480278,
     "lng": -103.3838028
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Torreon - Coyote km 21, ejido El Fenix, Municipio Matamoros, Coah C.P. 27450",
     "lat": 25.690919,
     "lng": -103.301847
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Independencia No. 2700 Ote. Y Calle Rio Sala,Las Magdalenas,Torreon,Coahuila de Zaragoza",
     "lat": 25.57118056,
     "lng": -103.4195389
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Ave. Francisco Sarabia 845 Col. Villa California, Torreon, Coah. C.P. 27089",
     "lat": 25.54050556,
     "lng": -103.3837778
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr La Union - La Partida 850 ejido Ana Torreon Coah CP 27410",
     "lat": 25.68638889,
     "lng": -103.36895
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calzada Nogales 958 Col Villa Jacarandas Torreon Coah C.P. 27110",
     "lat": 25.57220556,
     "lng": -103.4419611
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Antonio Madrazo #1101 Col. Las Trojes. León, Gto.",
     "lat": 21.141494,
     "lng": -101.660444
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Hidalgo s/n, Col. Fracciones de Echeveste. León, Gto. ",
     "lat": 21.181633,
     "lng": -101.663581
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Revolucion #10 Col. San Vicente. Tlajomulco de Zuñiga, Jalisco",
     "lat": 20.506621,
     "lng": -103.281947
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Gobernador Curiel #2177 y #2163 Col. Ferrocarril. Guadalajara, Jalisco",
     "lat": 20.644633,
     "lng": -103.352283
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Alcalde, esq. Av. Patria #32, Col. El Batán. Zapopan, Jalisco.",
     "lat": 20.716628,
     "lng": -103.345442
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. López Mateos Sur #2955, Col. Agua Blanca. Zapopan, Jalisco.",
     "lat": 20.606844,
     "lng": -103.431819
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av Tecnológico esq. Pinabete #6514, Col. Parral, Chihuahua, Chih.",
     "lat": 28.676653,
     "lng": -106.102197
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Tecnológico, esq. Elias Muller #10313, Col. Deportistas. Chihuahua, Chih.",
     "lat": 28.692328,
     "lng": -106.115197
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle 27 #1000, Col. Obrera. Chihuahua, Chih.",
     "lat": 28.642206,
     "lng": -106.068214
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Independencia y Blvd. Jose Fuentes Mares, Col. Santa Rosa. Chihuahua, Chih.",
     "lat": 28.621664,
     "lng": -106.051645
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Guadalajara - Morelia Km. 36. Tlajomulco de Zuñiga, Jalisco",
     "lat": 20.436725,
     "lng": -103.544925
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Periférico de la Juventud s/n Fracc. Barrancas. Chihuahua, Chih.",
     "lat": 28.670722,
     "lng": -106.132928
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Homero #3101, Col. Cond. Parque Complejo Ind. Chihuahua. Chihuahua, Chih.",
     "lat": 28.712614,
     "lng": -106.105081
  },
  {
     "marca": "OXXO GAS",
     "direccion": "H. Colegio Militar y Vicente Suarez, Col. Nombre de Dios. Chihuahua, Chih.",
     "lat": 28.688275,
     "lng": -106.084214
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle 7a. Poniente No. 1503. Delicias, Chih.",
     "lat": 28.187707,
     "lng": -105.487559
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Km 31+498 Carrt.Mex-Cd.Juarez Trm.Chih-El Sueco, Col. Sacramento. Chihuahua, Chih.",
     "lat": 28.865465,
     "lng": -106.226108
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Gonzalez Ortega #1500 Esq. Camino Real, Col. Chavira. Camargo, Chih.",
     "lat": 27.67675,
     "lng": -105.181733
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr.Mex-Chihuahua Calle Fco. Marquez, Col. Veteranos. Chihuahua, Chih.",
     "lat": 28.604803,
     "lng": -105.996044
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Lázaro Cárdenas #2517.Monterrey, N.L.",
     "lat": 25.648694,
     "lng": -100.329556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Nacional 2000, Col. La Estanzuela. Monterrey, N.L.",
     "lat": 25.587256,
     "lng": -100.258728
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. las Torres # 100 Pte., Col. Nuestra Senora de Fatima. Gral. Escobedo, N.L.",
     "lat": 25.781175,
     "lng": -100.310394
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Acapulco S/N, Col. Fracc. San Miguel Sector Golondrina. Apodaca, N.L.",
     "lat": 25.719386,
     "lng": -100.180036
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle Sicomoro No. 301, Col. Residencial Ebanos Norte 2do. Sector. Apodaca, N.L.",
     "lat": 25.791292,
     "lng": -100.234936
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Ave. Santa Engracia # 127, Col. Fracc. Privadas de Camino Real. Gral. Escobedo, N.L.",
     "lat": 25.808014,
     "lng": -100.389531
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Las Palmas #430, Col. Valle de las Palmas. Apodaca, N.L.",
     "lat": 25.784563,
     "lng": -100.266625
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Avenida la Luz # 6113, 6113-1, Col. La Estanzuela. Monterrey, N.L.",
     "lat": 25.589622,
     "lng": -100.249684
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera a San Miguel 2929, Col. Sc. Guadalupe, N.L.",
     "lat": 25.709393,
     "lng": -100.181595
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Reforma No. 1905 Poniente, Col. Centro. Monterrey, N.L.",
     "lat": 25.686853,
     "lng": -100.330581
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carret. a Huinala Km 2 # 1008, Col. S/C. Apodaca, N.L.",
     "lat": 25.744811,
     "lng": -100.180628
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Acapulco #4600, Col. Las Brisas. Monterrey, N.L.",
     "lat": 25.62229444,
     "lng": 100.2812917
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Libre a Celaya Km 5, Col. El Pueblito, C.P. 76900, Corregidora, Queretaro",
     "lat": 20.542008,
     "lng": -100.431375
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. San Juan Bosco #2934 Col. El Mirador. León, Gto.",
     "lat": 21.151753,
     "lng": -101.729156
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Cincunvalación Oblatos #2047. Col. Oblatos, esq. Rivas Guillen. Guadalajara, Jalisco. ",
     "lat": 20.690189,
     "lng": -103.303879
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calzada Independencia Ote #870. Guadalajara, Jalisco. ",
     "lat": 20.687136,
     "lng": -103.335226
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carrt. 45 Tramo Delicias-Chih. Km 138+168.69, Col. S/D. Delicias, Chihuahua",
     "lat": 28.200389,
     "lng": -105.453524
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Km. 1308 Carr. Panamericana a Cd. Juarez, Col. Lagunilla. Camargo, Chihuahua",
     "lat": 27.678289,
     "lng": -105.161522
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Ave. Luis H. Alvarez #902, Col. La Pila. Camargo, Chihuahua",
     "lat": 27.668448,
     "lng": -105.170226
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Vialidad Norte-Sur Camargo #110. Col. Carretera. Camargo, Chihuahua",
     "lat": 27.679283,
     "lng": -105.151763
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ejército Mexicano Km. 9.5 #347, Col. Fidel Velázquez. Gómez Palacio, Dgo. ",
     "lat": 25.573317,
     "lng": -103.520144
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Solidaridad # 6828, Col. Fraccionamiento Los Olivos. Irapuato, Guanajuato",
     "lat": 20.662423,
     "lng": -101.315829
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Guerrero #1240 Col Centro. Irapuato, Guanajuato",
     "lat": 20.682446,
     "lng": -101.353613
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Periferico Torreon-Lerdo Km 3, Col. Miguel Hidalgo. Gomez Palacio, Durango",
     "lat": 25.581461,
     "lng": -103.477762
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Benito Juárez y Comonfort, Col. Centro. Camargo, Chihuahua",
     "lat": 27.692137,
     "lng": -105.17269
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Benito Juárez y Moctezuma, Col. Centro. Camargo, Chihuahua",
     "lat": 27.695104,
     "lng": -105.176087
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Mariano Jimenez y Libertad, Col. ., C.P. 33980, Jimenez, Chihuahua",
     "lat": 27.137505,
     "lng": -104.913945
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Silvestre Terrazas # 13001, Col. Labor de Terrazas. Chihuahua, Chihuahua",
     "lat": 28.582925,
     "lng": -106.119939
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Aguascalientes-Zacatecas Km 28.5, Col. Ejido de San Francisco. Pabellon de Arteaga, Aguascalientes",
     "lat": 22.123885,
     "lng": -102.283289
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Patria, Moctezuma y Sta. Catalina, Col. El Mirador Del Sol. Zapopan, Jalisco",
     "lat": 20.650772,
     "lng": -103.42272
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Patria No. 1350, Col. Fracc. Jardines Universidad. Zapopan, Jalisco",
     "lat": 20.69468,
     "lng": -103.414906
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Chihuahua-Delicias, Km.209. Chihuahua, Chihuahua",
     "lat": 28.58384,
     "lng": -105.960315
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Fernando Baeza Melendez No. 223, Col. Tierra y Libertad. Delicias, Chihuahua",
     "lat": 28.178048,
     "lng": -105.459668
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Sor Juana Ines de la Cruz No. 1707, Col. Del Parque. Jimenez, Chihuahua",
     "lat": 27.125612,
     "lng": -104.919242
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Cuauhtémoc # 1214 Col. El Pueblo, Monclova, Coahuila",
     "lat": 26.919776,
     "lng": -101.417427
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Aquiles Serdan y Carr. a Irapuato. Pueblo Nuevo, Guanajuato.",
     "lat": 20.527912,
     "lng": -101.369327
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Luis Donaldo Colosio #716, Col. Barrio San Carlos. Monterrey, NL.",
     "lat": 25.767911,
     "lng": -100.393711
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Chihuahua Delicias Km. 206. Aquiles Serdan, Chihuahua",
     "lat": 28.560242,
     "lng": -105.954094
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Casimiro Liceaga No. 1007, Col. Alvaro Obregon. Irapuato, Guanajuato",
     "lat": 20.67324,
     "lng": -101.35943
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Saltillo - Matehuala km. 57. Galeana N.L.",
     "lat": 25.168625,
     "lng": -100.722842
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prol.Constituyentes Lote 33 Mzn. 100 Etapa Uno, Col. Las Trojes. Corregidora, Queretaro",
     "lat": 20.53441,
     "lng": -100.450674
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Arandas No. 1112, Col. La Estancia. Irapuato, Guanajuato",
     "lat": 20.696876,
     "lng": -101.36107
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Avenida Paseo de la Solidaridad No. 10399, Col. Plan Guanajuato. Irapuato, Guanajuato",
     "lat": 20.683724,
     "lng": -101.338999
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Nacional # 2004 Sur, Col. Buena Vista. Allende, Nuevo Leon",
     "lat": 25.262764,
     "lng": -100.011677
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera a Saltillo Km 339, Col. Los Treviño.Santa Catarina, Nuevo Leon",
     "lat": 25.675499,
     "lng": -100.442985
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. A. Garcia No. 103. Garcia, Nuevo Leon",
     "lat": 25.802625,
     "lng": -100.586051
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Nacional Monterrey Allende Km. 214.5, Col. Comunidad Calles. Montemorelos, Nuevo Leon",
     "lat": 25.220802,
     "lng": -99.931458
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Haciendas Del Valle No. 6705, Col. Haciendas Del Valle. Chihuahua, Chihuahua",
     "lat": 28.633497,
     "lng": -106.119065
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. 18 de Marzo #1545, Col. Las Águilas. Zapopan, Jalisco",
     "lat": 20.628204,
     "lng": -103.409879
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Constitucion #240 Esq. Cipres, Col. Loma Bonita. Tonala, Jalisco",
     "lat": 20.649621,
     "lng": -103.261125
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prolongación Lincoln S/N. Garcia, Nuevo Leon",
     "lat": 25.80628,
     "lng": -100.561406
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Progreso #111, Col. Barrio de Zaragoza. Montemorelos, Nuevo Leon",
     "lat": 25.187932,
     "lng": -99.831265
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Zaragoza # 400 Pte Esq. Carrt. Nacional, Col. Centro. Allende, Nuevo Leon",
     "lat": 25.278102,
     "lng": -100.02147
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Avenida Hidalgo #2704, Col. Ejido de Valtierrilla. Salamanca, Guanajuato",
     "lat": 20.557259,
     "lng": -101.165093
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Vialidad Carretera Chihuahua-Aldama #10100, Col. El Leon. Chihuahua, Chihuahua",
     "lat": 28.673415,
     "lng": -106.025913
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Km. 0.6 Carretera Jimenez-Zavalza. Jimenez, Chihuahua",
     "lat": 27.126367,
     "lng": -104.901701
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Autopista de Cuota Saltillo-Laredo No. 6700, Escobedo N.L.",
     "lat": 25.817014,
     "lng": -100.395262
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Eje Vial Juan Gabriel No.9805, Col. Puente Alto. Cd. Juarez, Chihuahua",
     "lat": 31.629297,
     "lng": -106.461549
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Cd. Juarez Casas Grandes #5450, Col. Fracc. Jarudo Del Norte. Cd.Juarez, Chihuahua",
     "lat": 31.674976,
     "lng": -106.438367
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr.Juarez-Porvenir No. 7115, Col. Fracc.Virreyes. Cd. Juárez, Chihuahua",
     "lat": 31.723312,
     "lng": -106.419862
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av Lopez Mateos y V Guerrero, Col. Partido Romero. Cd. Juárez, Chihuahua",
     "lat": 31.733782,
     "lng": -106.449118
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Panamericana No. 6024 y Calle Nayarit, Col. El Granjero. Cd. Juárez, Chihuahua",
     "lat": 31.664729,
     "lng": -106.426922
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Bernardo Norsagary # 5490, Col. Francisco Villa. Cd. Juárez, Chihuahua",
     "lat": 31.760178,
     "lng": -106.509444
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Eje Juan Gabriel No. 5471 Esq. Ponciano Arriaga. Cd. Juárez, Chihuahua",
     "lat": 31.675642,
     "lng": -106.445725
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle Jilotepec No.10104_Y_Calle Hiedra, Col. Ampliacion Infonavit-Aeropuerto. Cd. Juárez, Chihuahua",
     "lat": 31.660138,
     "lng": -106.391606
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Independencia No. 2710, Col. Lote Bravo. Cd. Juárez, Chihuahua",
     "lat": 31.604487,
     "lng": -106.37411
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Juan Pablo Ii No. 1147, Col. Zaragoza. Cd. Juárez, Chihuahua",
     "lat": 31.655747,
     "lng": -106.340469
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Tecnologico #9581, Esq. Calle Santos, Col. Zacate Blanco. Cd. Juárez, Chihuahua",
     "lat": 31.621497,
     "lng": -106.445689
  },
  {
     "marca": "OXXO GAS",
     "direccion": "P. Elías Calles y Simón Barba, Col. 3a. Burócrata, Cd. Juárez, Ch.",
     "lat": 31.721418,
     "lng": -106.443255
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Solidaridad Iberoamericana # 7969, Col. Residencial Aeropuerto. El Salto , Jalisco",
     "lat": 20.538793,
     "lng": -103.296596
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Vialidad Sacramento y Potrero Viejo No. 6303, Col. Nombre de Dios. Chihuahua, Chihuahua",
     "lat": 28.70996,
     "lng": -106.083133
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Tratado de libre comercio #1009, CP 32882, Colonia Constitución. Ojinaga, Chihuahua",
     "lat": 29.55804,
     "lng": -104.404764
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Oscar Flores No.12, Col. Constitucion. Ojinaga, Chihuahua",
     "lat": 29.558354,
     "lng": -104.411996
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Circuito Universitario #401, Col. Fracc. Residencial Cafetales. Chihuahua, Chihuahua",
     "lat": 28.722115,
     "lng": -106.148355
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Allende y Dr. Quiroz Cuaron No. 1400, Col. Abraham Gonzalez. Jimenez, Chihuahua",
     "lat": 27.12371,
     "lng": -104.908643
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. a Guadalajara-El Verde Km 4.2, Col. Jardines Lomas Del Verde. El Salto , Jalisco",
     "lat": 20.560891,
     "lng": -103.276427
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Melchor Ocampo #3000 Col. Pacifico. Chihuahua, Chihuahua.",
     "lat": 28.625568,
     "lng": -106.070068
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Valle Del Guadiana # 325, Col. Parque Industrial Gomez Palacio. Gomez Palacio, Durango",
     "lat": 25.558768,
     "lng": -103.465967
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Km. 6 Carr. Atotonilco-Guadalajara. Atotonilco El Alto, Jalisco",
     "lat": 20.540448,
     "lng": -102.56406
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Adolfo Ruiz Cortinez #1300, Col. Cd. de la Barca. La Barca, Jalisco",
     "lat": 20.302226,
     "lng": -102.541485
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Manuel J Clouthier #262, Col. 15 de Mayo. Celaya, Guanajuato",
     "lat": 20.550109,
     "lng": -100.839184
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Adolfo Lopez Mateos No. 1102, Col. Obregon, C.P. 37320, Leon, Guanajuato",
     "lat": 21.133829,
     "lng": -101.687363
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Guadalajara - Zacatecas Km. 306.5. Zacatecas, Zacatecas",
     "lat": 22.761645,
     "lng": -102.653378
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Isidro Lopez Zertuche No. 2770, Col. Los Maestros. Saltillo, Coahuila.",
     "lat": 25.448749,
     "lng": -100.997919
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Paseo de Los Insurgentes #1905. Esq.Oceano Atlantico. Leon, Guanajuato",
     "lat": 21.147074,
     "lng": -101.703279
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Trasviña y Retes #5901 Esq. Rio de Janeiro, Col. Panamericana. Chihuahua, Chihuahua",
     "lat": 28.648669,
     "lng": -106.110765
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera a Chihuahua - Aldama km. 24 + 900. Aldama, Chihuahua",
     "lat": 28.812856,
     "lng": -105.934629
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Alfonso Reyes # 209, Col. Contry, C.P. 64860, Monterrey, Nuevo Leon",
     "lat": 25.640505,
     "lng": -100.282531
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Vicente Valtierra #4101, Col. Jardines de Oriente 4° sección. León, Guanajuato.",
     "lat": 21.128454,
     "lng": -101.645328
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Coahuila Lote 1 Col. Paseo Guadalupe. Guadalupe, Nuevo León.",
     "lat": 25.651861,
     "lng": -100.159926
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Camino Lateral Al Camino Real S/N. La Cruz, Chihuahua",
     "lat": 27.854372,
     "lng": -105.200597
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prol. Zaragoza #71 Col. La Capilla. Santiago de Querétaro, Querétaro. ",
     "lat": 20.579556,
     "lng": -100.413512
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Niños Héroes #129 Col. Centro. Ocotlán, Jalisco",
     "lat": 20.346824,
     "lng": -102.777311
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Guadalajara - Ocotlán KM 32.5 Col. Centro. Poncitlán, Jalisco. ",
     "lat": 20.37604,
     "lng": -102.930165
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Hidalgo #1477 Pte., Col. Ex-Seminario. Monterrey, Nuevo Leon",
     "lat": 25.670226,
     "lng": -100.335904
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Chapultepec #1844 Ote., Col. Buenos Aires. Monterrey, Nuevo Leon",
     "lat": 25.666473,
     "lng": -100.279821
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Cuauhtemoc Esq Con Aldama y Privada Jesus Sil, Col. Zona Centro. Monclova, Coahuila.",
     "lat": 26.907327,
     "lng": -101.418845
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. San Buenaventura # 1900, Col. Fracc. Magisterio. Monclova, Coahuila",
     "lat": 26.907327,
     "lng": -101.418845
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel de la Madrid, esq. Paseo de las Maravillas #986, Col. Corral de Barrancos. Jesus María, Aguascalientes.",
     "lat": 21.938132,
     "lng": -102.325769
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Camino a San Sebastián El Grande-Tlajomulco #1575. Tlajomulco de Zuñiga, Jalisco. ",
     "lat": 20.514855,
     "lng": -103.410826
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Gomez Palacio-Jimenez Km2 Manzana 2, Lote 5, Col. Valle de Guadiana. Gómez Palacio, Durango",
     "lat": 25.61214,
     "lng": -103.512158
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Gomez Palacio-Jimenez Km2 Manzana 2, Lote 5, Col. Valle de Guadiana. Gómez Palacio, Durango",
     "lat": 25.610676,
     "lng": -103.512134
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Monclova-Castaños, Km182. Monclova, Coahuila.",
     "lat": 26.804837,
     "lng": -101.420645
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Ave. Del Hospital #343 Col Valle de San Blas. García, Nuevo León.",
     "lat": 25.80144,
     "lng": -100.567193
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Irapuato - Silao Predio La Fortuna. Silao, Guanajuato.",
     "lat": 20.90117,
     "lng": -101.368588
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Juventino Rosas - Celaya Km. 4 s/n. Juventino Rosas, Guanajuato.",
     "lat": 20.630141,
     "lng": -100.969698
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Libramiento Nororiente #7541 Carretera Federal, Col. Km. 7, C.P. 1, Irapuato, Guanajuato",
     "lat": 20.70322,
     "lng": -101.321514
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Guanajuato- Puentecillas Km 0+480, comunidad de Yerbabuena, Guanajuato, Guanajuato.",
     "lat": 20.964002,
     "lng": -101.280202
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Boulevard Aeropuerto #2000. Apodaca, Nuevo Leon",
     "lat": 25.778832,
     "lng": -100.121787
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Guadalupe Zacatecas - Cosio Aguascalientes km. 67 + 500. Cuauhtemoc, Zacatecas",
     "lat": 22.460857,
     "lng": -102.346633
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Enrique Corona Morfin #710, Col. Aguilas. Villa de Alvarez, Colima",
     "lat": 19.280393,
     "lng": -103.742315
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Acámbaro #350, Col. Santa Amalia. Colima, Colima",
     "lat": 19.229859,
     "lng": -103.703813
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Tlajomulco-San Miguel Cuyutlan KM 7 + 700, Col. San Miguel Cuyutlan. Tlajomulco de Zuñiga, Jalisco. ",
     "lat": 20.455234,
     "lng": -103.437053
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Autopista Mexico- Queretaro km. 174 + 020. San Juan del Río, Querétaro. ",
     "lat": 20.454803,
     "lng": -100.088811
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle Nigromante #102, esq. Manuel Alvárez. Colima, Colima",
     "lat": 19.245728,
     "lng": -103.72785
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Maria Ahumada Ent. El Naranjal y Andador #434, Col. Burocratica Municipal. Villa de Alvarez, Colima",
     "lat": 19.273704,
     "lng": -103.740424
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Presidente Cardenas #1332 Esq. Jose Ma. Lafragua, Col. Centro. Saltillo Coahuila",
     "lat": 25.424931,
     "lng": -100.985123
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Los Fundadores #4004 Col. Vista Hermosa. Saltillo, Coahuila",
     "lat": 25.428697,
     "lng": -100.9556
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Salomon Abedrop # 4651, Col. Postal Cerritos. Saltillo, Coahuila",
     "lat": 25.411257,
     "lng": -100.956451
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Periferico Luis Echeverria # 6133 Col. San Ramon. Saltillo, Coahuila",
     "lat": 25.416274,
     "lng": -100.975547
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Paseo de los Huertos #1191, Col. Paseo de los Huertos. Juárez, Nuevo León",
     "lat": 25.621982,
     "lng": -100.104508
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av Chapultepec #1847. Col. Buenos Aires. Monterey, Nuevo León. ",
     "lat": 25.666841,
     "lng": -100.280571
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Lagos de Moreno - San Luis Potosí km. 3.5. Lagos de Moreno, Jalisco. ",
     "lat": 21.389625,
     "lng": -101.875332
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. México-Toluca km.61.5 Col. Santa Ana. Toluca, Toluca. ",
     "lat": 19.286856,
     "lng": -99.606527
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Pino Suarez # 6322, Col. Buena Vista. Nuevo Laredo, Tamaulipas",
     "lat": 27.49543,
     "lng": -99.540328
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Anahuac # 7448-A, Col. 20 de Noviembre. Nuevo Laredo, Tamaulipas",
     "lat": 27.481048,
     "lng": -99.551041
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prol. Blvd. Lic. Antonio Ortiz Mena # 297, Col. El Potrero. Hidalgo Del Parral, Chihuahua",
     "lat": 26.932079,
     "lng": -105.68177
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Siglo XXI #1770. Jesus Maria, Aguascalientes",
     "lat": 21.949954,
     "lng": -102.321197
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Independencia #1661, Col. Fracc. San Isidro. Torreon, Coahuila",
     "lat": 25.562489,
     "lng": -103.43139
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Federal Chihuahua-Hgo. Del Parral Km 183+400, Col. Sin Colonia. Hidalgo Del Parral, Chihuahua",
     "lat": 26.944203,
     "lng": -105.645597
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prolongacion Independencia, Col. Vella Vista. Hidalgo Del Parral, Chihuahua",
     "lat": 26.928125,
     "lng": -105.650953
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Cesar Lopez de Lara #2702, Col. San Rafael. Nuevo Laredo, Tamaulipas",
     "lat": 27.474752,
     "lng": -99.51777
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Guatemala # 1903, Col. Guerrero. Nuevo Laredo, Tamaulipas",
     "lat": 27.482829,
     "lng": -99.507455
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Timoteo Lozano #1302, Col. La Noria. León, Guanajuato. ",
     "lat": 21.070367,
     "lng": -101.641182
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Aquiles Serdan #301, esq. Calle Melchor Ocampo Zona Centro. San Francisco del Rincón, Guanajuato.",
     "lat": 21.023353,
     "lng": -101.85181
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Henequén #10114, Esq. José M. Torres, Col. Fideicomiso Salvacar. Cd. Juárez, Chihuahua.",
     "lat": 31.648347,
     "lng": -106.39115
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Gustavo Galaz Km 182 # 320, Col. Asturias. Monclova, Coahuila",
     "lat": 26.838866,
     "lng": -101.42403
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calzada Revolución #6251, Col. Buena Vista, Nuevo Laredo, Tamaulipas.",
     "lat": 27.496756,
     "lng": -99.549609
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Churubusco #750, esq. Francisco Beltrán, Col. Venustiano Carranza. Monterrey, N.L. ",
     "lat": 25.691794,
     "lng": -100.268626
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Libramiento Nororiente #5578 Col. El Carrizalito. Irapuato, Guanajuato",
     "lat": 20.694428,
     "lng": -101.312804
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Prolongación Irrigación #507-A. Col. Cuauhtemoc. Celaya, Guanajuato. ",
     "lat": 20.536199,
     "lng": -100.784685
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Manuel Doblado #700, Col. Centro. Villagrán, Gto. ",
     "lat": 20.515883,
     "lng": -101.000555
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Francisco Villa #1103, esq. Sinaí, Col. Jardines de Oriente. León, Gto.",
     "lat": 21.12621,
     "lng": -101.647804
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. El Sauz #1496, Col. Las Casas. Celaya, Guanajuato. ",
     "lat": 20.549498,
     "lng": -100.846634
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Nicolás Bravo #202, Col. Centro. Tototlán, Jalisco.",
     "lat": 20.544455,
     "lng": -102.787464
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Tepatitlán de Morelos - San Juan de los Lagos, entre 307 y 304. Valle de Guadalupe, Jalisco. ",
     "lat": 21.051533,
     "lng": -102.57802
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Los Fundadores #2820, Col. Centro. Saltillo, Coahuila",
     "lat": 25.427144,
     "lng": -100.966677
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Paseo de la Reforma #2105, Col. Provivienda. Saltillo, Coahuila",
     "lat": 25.427028,
     "lng": -100.975913
  },
  {
     "marca": "OXXO GAS",
     "direccion": "KM 1 Carr-Moroleón-Morelia. Moroleón, Guanajuato",
     "lat": 20.125653,
     "lng": -101.18079
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Cabezada #9007, Col. Barrio Aztlan. Monterrey, Nuevo León",
     "lat": 25.775245,
     "lng": -100.381563
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Hermosillo # 501, Col. Deportivo Huinala 5to. Sector. Apodaca, Nuevo León",
     "lat": 25.730418,
     "lng": -100.186773
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Jose Angel Conchello # 2409, Col. Reforma. Monterrey, Nuevo León",
     "lat": 25.694798,
     "lng": -100.297695
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Faja de Oro #803 Col. Centro, Salamanca, Guanajuato",
     "lat": 20.579685,
     "lng": -101.205238
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Federal 45 Silao - Irapuato, Km. 142 + 358. Silao Guanajuato.",
     "lat": 20.905392,
     "lng": -101.374551
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Guadalajara-Barra de Navidad #1500. Acatlán de Juárez, Jalisco",
     "lat": 20.433489,
     "lng": -103.57919
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Guadalajara Tepic #1500, Col. Santa Sofia. El Arenal, Jalisco",
     "lat": 20.777672,
     "lng": -103.659758
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Feliz U. Gomez #304 Nte, Col. Centro. Monterrey, N.L.",
     "lat": 25.676621,
     "lng": -100.298033
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Benito Juarez 628 Col Niños Héroes. Guadalupe, N.L.",
     "lat": 25.66777,
     "lng": -100.177111
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. a Reynosa #150 Col. Fraccionamiento El Sabinal. Juarez N.L.",
     "lat": 25.652904,
     "lng": -100.111498
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Monterrey a Colombia #1201, Col. Los Altos. Escobedo N.L.",
     "lat": 25.793182,
     "lng": -100.292826
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Diego Diaz de Berlanga #124, Col. Bosques de Anáhuac. San Nicolás de los Garza, N.L.",
     "lat": 25.729904,
     "lng": -100.274439
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av Morones Prieto # 3200 entre 5 de Mayo y Av Azte, Col. Azteca. Guadalupe, Nuevo León",
     "lat": 25.687482,
     "lng": -100.246382
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Acueducto #401 Col. Balcones de Anáhuac. Escobedo N.L.",
     "lat": 25.765244,
     "lng": -100.32286
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Acueducto #200, Col. Balcones de Anáhuac. Escobedo N.L.",
     "lat": 25.764626,
     "lng": -100.323249
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Miguel Aleman #603, Col. Centro. Apodaca, N.L.",
     "lat": 25.777832,
     "lng": -100.183759
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Ignacio Zaragoza #210 Col. Centro. Apodaca N.L.",
     "lat": 25.777804,
     "lng": -100.186774
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Pedro Martinez Ote #1807 Col. Nuevo Repueblo. Monterrey N.L.",
     "lat": 25.662988,
     "lng": -100.297584
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. a Colombia #804 Col. Ampliación Lázaro Cárdenas. Escobedo N.L.",
     "lat": 25.795247,
     "lng": -100.293498
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Jose Eleuterio Gonzalez #513, Col. Mitras Norte. Monterrey N.L.",
     "lat": 25.711683,
     "lng": -100.349952
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Benito Juarez # 500 Esq. Lib. a Carrt. Marin. Zuazua, Nuevo León",
     "lat": 25.89107,
     "lng": -100.115055
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Libramiento Juárez-Cadereyta Km. 23, Col. La Puerta. Juárez, Nuevo León",
     "lat": 25.62405,
     "lng": -100.065173
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Monterrey- Cd Victoria Lib. Montemorelos km 200. Montemorelos N.L.",
     "lat": 25.140793,
     "lng": -99.835906
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Francisco Sarabia #801 Col. Ciudad Nazas. Torreón, Coahuila.",
     "lat": 25.545577,
     "lng": -103.389573
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Danubio #2600, Col. Fracc. Riberas de Sacramento. Chihuahua, Chihuahua",
     "lat": 28.781197,
     "lng": -106.172442
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Ferrocarril 15, Col. Centro. Bermejillo, Durango",
     "lat": 25.894482,
     "lng": -103.62463
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle 5 de Febrero # 142 Col las Conchas. Guadalajara, Jalisco",
     "lat": 20.65951,
     "lng": -103.338625
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Guadalajara - Saltillo Km. 46.6 S/N, Col. La Hacienda de Guadalupe. Ixtlahuacan Del Rio, Jalisco",
     "lat": 20.848754,
     "lng": -103.257501
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera a Saltillo #2892, Col. Villa de Guadalupe. Zapopan, Jalisco",
     "lat": 20.759933,
     "lng": -103.340464
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Netzahualcoyotl esq. Toltecas, Col. Buenos Aires. Zacatecas, Zacatecas",
     "lat": 22.77117,
     "lng": -102.592468
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Federal 45 Silao - Irapuato, Km. 157 + 570, Col. Nuevo México. Silao Guanajuato. ",
     "lat": 20.954732,
     "lng": -101.489769
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Paseo Adolfo López Mateos No. 102, Zinacantepec, Estado de México",
     "lat": 19.289302,
     "lng": -99.696092
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Vialidad Solidaridad #605, Santa Ana Tlapaltitla. Metepec, Estado de México",
     "lat": 19.273858,
     "lng": -99.629005
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Toluca-Atlacomulco Km. 56.5, Atlacomulco, Estado de México",
     "lat": 19.766958,
     "lng": -99.857126
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. México-Toluca Km 44.5 S/N. Pob. San Miguel Ameyalco. Ocoyoacac, Estado de México.",
     "lat": 19.283654,
     "lng": -99.457207
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera México-Toluca Km. 42.5, San Juan Coapanoaya, Ocoyoacac, Estado de México.",
     "lat": 19.288139,
     "lng": -99.444084
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. 5 de Mayo Esq. Av. de las Torres, San Francisco Coaxusco. Metepec, Estado de México",
     "lat": 19.272294,
     "lng": -99.630845
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Narciso Bassols #600. Tenango del Valle, Estado de México.",
     "lat": 19.114184,
     "lng": -99.588827
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Adolfo López Mateos #102. Zinacantepec, Estado de Mexico.",
     "lat": 19.288857,
     "lng": -99.696202
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera México Toluca Km. 44. Lerma, Estado de México.",
     "lat": 19.285791,
     "lng": -99.456334
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. León - San Francisco del Rincón Km. 6-171, Col. Buena Vista. Purisima del Rincón, Guanajuato",
     "lat": 21.045882,
     "lng": -101.792582
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Federal Guadalajara Saltillo Km 52. Ixtlahuacan Del Rio, Jalisco",
     "lat": 20.887471,
     "lng": -103.227895
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Km. 6.5 Del Corredor Industrial El Salto Ex-Hacienda. El Salto, Jalisco",
     "lat": 20.542454,
     "lng": -103.262249
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortinez No. 720 \"A\" Oriente, Col. Victoria. Monterrey, Nuevo León",
     "lat": 25.703816,
     "lng": -100.30347
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Cam.Huinala-Mezquital #510, esq. Carr. Miguel Aleman. Apodaca, Nuevo León",
     "lat": 25.747282,
     "lng": -100.202187
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera a Miguel Aleman Km. 8, Col. 18 de Marzo. Guadalupe, Nuevo León",
     "lat": 25.69575,
     "lng": -100.232573
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Manuel Ordoñes #1423 Pte. Col. Zimix Sur. Santa Catarina, Nuevo León",
     "lat": 25.677168,
     "lng": 25.677168
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ignacio Morones Prieto #117, Col. La Banda. Santa Catarina, Nuevo León",
     "lat": 25.656178,
     "lng": -100.449569
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortines #620, Col. Central de Carga. Guadalupe, Nuevo León",
     "lat": 25.703176,
     "lng": -100.239307
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ignacio Morones Prieto #789 Pte. San Pedro Garza Garcia, Nuevo León",
     "lat": 25.670914,
     "lng": -100.396693
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Vasconcelos #1543, Col. Mirasierra. San Pedro Garza Garcia, Nuevo León",
     "lat": 25.656013,
     "lng": -100.387487
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Felix U. Gomez # 1602 Nte., Col. Terminal. Monterrey, Nuevo León",
     "lat": 25.687486,
     "lng": -100.296612
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Jose Maria Luis Mora #148, Col. Ocho Cedros. Toluca, Estado de México",
     "lat": 19.256962,
     "lng": -99.667166
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Jose Maria Luis Mora #148, Col. Ocho Cedros. Toluca, Estado de México",
     "lat": 19.256962,
     "lng": -99.667166
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Toluca-Zitacuaro Km 17.5, Col. Paraje Yukon. Almoloya de Juarez, Estado de México",
     "lat": 19.358717,
     "lng": -99.80317
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Toluca-Zitacuaro Km 46.5, Col. Jesus Maria. Villa Victoria, Estado de México",
     "lat": 19.417486,
     "lng": -99.999334
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Aeropuerto #1440, Col. Predio Santa Fé. León, Guanajuato.",
     "lat": 21.072089,
     "lng": -101.598407
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. México - Pachuca Km.75. Zapopan de Juárez, Hidalgo.",
     "lat": 20.010041,
     "lng": -98.82184
  },
  {
     "marca": "OXXO GAS",
     "direccion": "16 de Septiembre #172 Col. Obregon. León, Guanajuato",
     "lat": 21.135305,
     "lng": -101.680793
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Mariano J Garcia #555, Col Los Pinos. Irapuato, Guanajuato.",
     "lat": 20.652206,
     "lng": -101.358565
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Guanajuato - Juventino Rosas, Col. Arroyo Verde. Guanajuato, Gto",
     "lat": 20.981763,
     "lng": -101.283113
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Valle de Santiago #1815, Col. Santa Elena de la Cruz. Salamanca, Guanajuato.",
     "lat": 20.541115,
     "lng": -101.204449
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Irapuato-Abasolo #6063 Col Granja Mexicalli. Irapuato, Gto",
     "lat": 20.6276,
     "lng": -101.393796
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Díaz Ordaz #664, Col. Barrio de San Miguel. Irapuato, Guanajuato.",
     "lat": 20.679178,
     "lng": -101.346729
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Ixtlahuaca-Toluca Km 18.5, Sta. Juana 2da Sección. Almoloya de Juárez, Estado de México",
     "lat": 19.450651,
     "lng": -99.728231
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr . Ixtlahuaca - San Felipe del Progreso. Ixtlahuaca de Rayón, Estado de México.",
     "lat": 19.574898,
     "lng": -99.782702
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carr. Toluca-Naucalpan Km. 45 Margen Derecho. Xonacatlan, Estado de México.",
     "lat": 19.412198,
     "lng": -99.508478
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Constituyentes #14, Col. La Cuchara. Tonala, Jalisco",
     "lat": 20.631644,
     "lng": -103.250158
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Luis Echeverria Alvarez #1800, Col. Santa Teresita. Saltillo, Coahuila.",
     "lat": 25.40805,
     "lng": -101.029396
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Lib. Oscar Flores Tapia #22250, Col. Antigua Hacienda El Jaral. Ramos Arizpe, Coahuila.",
     "lat": 25.522842,
     "lng": -100.921238
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Autopista Mty-Saltillo #25000-B. Ramos Arizpe, Coahuila",
     "lat": 25.613087,
     "lng": -100.847085
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Bravo #1137 Oriente, Col. Centro. Torreón, Coahuila",
     "lat": 25.545133,
     "lng": -103.436204
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Manuel L. Barragan # 1300 \"A, Col. Las Misiones, C.P. 66428, San Nicolas de Los Garza, Nuevo León",
     "lat": 25.763054,
     "lng": -100.305374
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel Aleman No. 1200 Ote, Col. Talaberna, C.P. 67112, Guadalupe, Nuevo León",
     "lat": 25.711113,
     "lng": -100.220974
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Rangel Frias # 5631, Col. Del Maestro, C.P. 64180, Monterrey, Nuevo León",
     "lat": 25.725831,
     "lng": -100.353571
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Cabezada # 1307, Col. Barrio la Moderna, C.P. 64100, Monterrey, Nuevo León",
     "lat": 25.778049,
     "lng": 100.384728
  },
  {
     "marca": "OXXO GAS",
     "direccion": "02 de Abril # 1520, Col. Nuevo Repueblo, C.P. 64700, Monterrey, Nuevo León",
     "lat": 25.657469,
     "lng": -100.302182
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. San Jeronimo # 508, Col. San Jeronimo, C.P. 64640, Monterrey, Nuevo León",
     "lat": 25.674355,
     "lng": -100.357679
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Casa Del Obrero Mundial 5007, Col. C.R.O.C., C.P. 64200, Monterrey, Nuevo León",
     "lat": 25.786014,
     "lng": -100.377026
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Camino Real No. 10399, Col. El Porvenir, C.P. 0, Monterrey, Nuevo León",
     "lat": 25.768887,
     "lng": -100.368018
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carrt. a Huinala y Camino Al Milagro # 300, Col. Apodaca, C.P. 66600, Apodaca, Nuevo León",
     "lat": 25.746842,
     "lng": -100.191857
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle Rio Pilon # 612, Col. Pueblo Nuevo, C.P. 1, Apodaca, Nuevo León",
     "lat": 25.759833,
     "lng": -100.165925
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. No Reeleccion Num. 5521 Cruz Con Valle Del Nog, Col. Colinas Del Valle Verde, C.P. 64360, Monterrey, Nuevo León",
     "lat": 25.736936,
     "lng": -100.367227
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Camino Real No. 7726, Col. Topo Chico, C.P. 64260, Monterrey, Nuevo León",
     "lat": 25.710928,
     "lng": -100.221181
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Rio Orinoco No. 708, Col. Lomas de San Isidro, C.P. 66646, Apodaca, Nuevo León",
     "lat": 25.756767,
     "lng": -100.153549
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Prolong. Av. Bernardo Reyes # 6765, Col. Topo Chico, C.P. 64280, Monterrey, Nuevo León",
     "lat": 25.737573,
     "lng": -100.332462
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Camino Real # 150, Col. San Martin, C.P. 66061, General Escobedo, Nuevo León",
     "lat": 25.797108,
     "lng": -100.382159
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera a Santa Rosa No. 1000 A, Col. Fracc. Cosmopolis, C.P. 66477, Apodaca, Nuevo León",
     "lat": 25.830018,
     "lng": -100.244984
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd.B.Juarez y Av.Hacienda Del Rey, Col. Haciendas de Escobedo, C.P. 0, General Escobedo, Nuevo León",
     "lat": 25.789743,
     "lng": -100.305131
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carret. San Mateo-Cd Benito Juarez No. 300, Col. Los Fresnos, C.P. 65920, Juarez, Nuevo León",
     "lat": 25.641554,
     "lng": -100.09376
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carretera Monterrey-Saltillo No. 3253, Col. Al Pte. de Col Puerta de las Mitras, C.P. 66350, Santa Catarina, Nuevo León",
     "lat": 25.690376,
     "lng": -100.502008
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av.Eugenio Garza Sada # 2200,2201-1 Al 2200-20, Col. Los Cristales, C.P. 64985, Monterrey, Nuevo León",
     "lat": 25.543982,
     "lng": -100.222818
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. la Estanzuela No. 102, Col. La Estanzuela, C.P. 64984, Monterrey, Nuevo León",
     "lat": 25.588797,
     "lng": -100.252631
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Carret. Nacinal Km 261 No. 202-A, Col. El Cerrito, C.P. 67300, Santiago, Nuevo León",
     "lat": 25.508605,
     "lng": -100.194765
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel Alemán esquina con Av. Acapulco, Col. La Fe, C.P. 66477, San Nicolás de Los Garza, Nuevo León",
     "lat": 25.723977,
     "lng": -100.213912
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Santo Domingo No. 780, Col. Bosques Del Roble, C.P. 66400, San Nicolas de Los Garza, Nuevo León",
     "lat": 25.755452,
     "lng": -100.283248
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Santo Domingo # 1500, Col. Praderas, C.P. 66436, San Nicolas de Los Garza, Nuevo León",
     "lat": 25.75177,
     "lng": -100.259259
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Molinero # 101, Col. El Faisan, C.P. 67300, Santiago, Nuevo León",
     "lat": 25.509343,
     "lng": -100.194265
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Teófilo Salinas Garza, Real de San Pablo Esq, Real de San José(La Ciudadela), 67265 Juárez, N.L.",
     "lat": 25.655369,
     "lng": -100.080948
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Calle Morelos No. 603, Col. San Juan, C.P. 64500, Cadereyta Jimenez, Nuevo León",
     "lat": 25.540994,
     "lng": -99.841348
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Bonifacio Salinas No. 114-A, Col. Fracc. Industrial las Americas, C.P. 67100, Guadalupe, Nuevo León",
     "lat": 25.701022,
     "lng": -100.240053
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Diego Diaz de Berlanga No. 661, Col. Nueva las Puentes, C.P. 66426, San Nicolas de Los Garza, Nuevo León",
     "lat": 25.746126,
     "lng": -100.260091
  },
  {
     "marca": "OXXO GAS",
     "direccion": "C. Bravo No. 1137 Oriente, Col. Centro, C.P. 27000, Torreón, Coahuila",
     "lat": 25.545425,
     "lng": -103.436096
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Alfonso Reyes # 1581, 1581-A, 1581-B, Col. Sarabia, C.P. 64490, Monterrey, Nuevo León",
     "lat": 25.688794,
     "lng": -100.316388
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Perif. de la Juventud No. 4301, Valle del Ángel, 31167 Chihuahua, Chih.",
     "lat": 28.654869,
     "lng": -106.130875
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Ave. de las Americas No. 1013, Col. Panamericana, C.P. 31107, Chihuahua, Chihuahua.",
     "lat": 28.656691,
     "lng": -106.108293
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Melchor Guaspe Num. 4204 Esq. Calle 44, Col. Dale, C.P. 31050, Chihuahua, Chihuahua",
     "lat": 28.610759,
     "lng": -106.064906
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Teofilo Borunda 2200, Col. Zarco, C.P. 31020, Chihuahua, Chihuahua.",
     "lat": 28.627959,
     "lng": -106.086881
  },
  {
     "marca": "OXXO GAS",
     "direccion": "José María Iglesias No. 5512, Col. Granjas, C.P. 31100, Chihuahua, Chihuahua.",
     "lat": 28.667286,
     "lng": -106.11168
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Av. Ricardo Flores Magón No. 6401, Col. Inalambrica, C.P. 31020, Chihuahua, Chihuahua.",
     "lat": 28.612083,
     "lng": -106.090935
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Blvd Juan Pablo II No. 4700, esq. calle 47, Col. 1 de Mayo, C.P. 31074, Chihuahua, Chihuahua",
     "lat": 28.630746,
     "lng": -106.022448
  },
  {
     "marca": "OXXO GAS",
     "direccion": "Constituyentes #14, Col. La Cuchara. Tonala, Jalisco",
     "lat": 20.687405,
     "lng": -103.335226
  },
  {
     "marca": "REPSOL",
     "direccion": "Blvd Mariano Abasolo entre Jalisco y Oaxaca",
     "lat": 24.145463,
     "lng": -110.331088
  },
  {
     "marca": "REPSOL",
     "direccion": "Papaya No. 210",
     "lat": 19.14461,
     "lng": -96.15932
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Acueducto, 1996",
     "lat": 20.74452,
     "lng": -103.4258
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Acueducto 1555",
     "lat": 20.74036,
     "lng": -103.4254
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera México - Veracruz Km 44.5, Col. San Simón",
     "lat": 19.52645,
     "lng": -98.86069
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Benito Juárez Y Avenida Pargo Mz. 089",
     "lat": 27.145688,
     "lng": -114.290777
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Demetrio Ruiz Malerva No. 33 B",
     "lat": 20.95113,
     "lng": -97.41624
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Poniente Miguel Alemán No. 1456",
     "lat": 19.17411,
     "lng": -96.13546
  },
  {
     "marca": "REPSOL",
     "direccion": "Camino Nacional No. 470",
     "lat": 18.83869,
     "lng": -97.12173
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera México-Pachuca Km 79+370",
     "lat": 20.0343,
     "lng": -98.7988
  },
  {
     "marca": "REPSOL",
     "direccion": "Boulevard Capitán Carlos Camacho Espíritu No. 161 C",
     "lat": 18.96381,
     "lng": -98.1746
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Chimalhuacán No. 1",
     "lat": 19.38935,
     "lng": -98.9801
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Federal México-Cuautla Km. 57 S/N, Col. San Francisco Zentlalpan",
     "lat": 19.149846,
     "lng": -98.776837
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida del Peñón Esquina Pachtli No. 14",
     "lat": 19.4298,
     "lng": -98.9619
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Cuauhtémoc 4421, Residencial Ayotla",
     "lat": 19.31565,
     "lng": -98.934128
  },
  {
     "marca": "REPSOL",
     "direccion": "Plaza San Marcos 4105 S/N, Plaza de Aragón",
     "lat": 19.486942,
     "lng": -99.037116
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Miguel A. de Quevedo No. 5872",
     "lat": 19.17853,
     "lng": -96.14207
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Pantitlán No. 333 Mz.8 Lt. 1-26, Col. Evolución",
     "lat": 19.39814,
     "lng": -99.02505
  },
  {
     "marca": "REPSOL",
     "direccion": "Autopista México-Veracruz Km 258+100",
     "lat": 18.81594,
     "lng": -97.21061
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Nacional Cordoba-Veracruz Km 7+887.5",
     "lat": 18.8584,
     "lng": -96.8717
  },
  {
     "marca": "REPSOL",
     "direccion": "Boulevard Adolfo Ruiz Cortines No. 1204",
     "lat": 20.54098,
     "lng": -97.45456
  },
  {
     "marca": "REPSOL",
     "direccion": "Boulevard Benito Juárez No. 1",
     "lat": 18.09306,
     "lng": -96.1286
  },
  {
     "marca": "REPSOL",
     "direccion": "Km 325 Carrt. Fed. Mexico-Veracruz, Col. Loc. Cuautlalpan",
     "lat": 18.87478,
     "lng": -97.02684
  },
  {
     "marca": "REPSOL",
     "direccion": "Ángel de la Independencia 292, Evolución",
     "lat": 19.399098,
     "lng": -99.026014
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera México-Tulancingo Km 25+300 Lado Izquierdo",
     "lat": 19.67706,
     "lng": -98.83754
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Juárez No. 125, Col. Aurora",
     "lat": 18.827149,
     "lng": -97.160769
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Circunvalación Esquina Oriente 7 No. 2677",
     "lat": 18.85722,
     "lng": -97.0891
  },
  {
     "marca": "REPSOL",
     "direccion": "Prolongacion de Sur 13/ Primo de V. Y. T. Peñafiel No. 1596",
     "lat": 18.83758,
     "lng": -97.09373
  },
  {
     "marca": "REPSOL",
     "direccion": "Av. Chimalhuacán No. 361, Manzana 18-A, Lote 01-02, Col. Evolución",
     "lat": 19.405338,
     "lng": -99.014582
  },
  {
     "marca": "REPSOL",
     "direccion": "Valle Atemajac 2323",
     "lat": 20.74139,
     "lng": -103.4309
  },
  {
     "marca": "REPSOL",
     "direccion": "Boulevard Avenida Fundadores de San Rafael Oriente No. 611, San Rafael,",
     "lat": 20.19351,
     "lng": -96.86853
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida 11 No. 3418",
     "lat": 18.9015,
     "lng": -96.95351
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Chalco-Tlahuac No. 500",
     "lat": 19.264388,
     "lng": -98.903102
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Americas No.666",
     "lat": 20.68849,
     "lng": -103.373
  },
  {
     "marca": "REPSOL",
     "direccion": "Todos los Santos 178, Cabo San Lucas",
     "lat": 22.909266,
     "lng": -109.949824
  },
  {
     "marca": "REPSOL",
     "direccion": "Plan de Tuxtepec No. 1",
     "lat": 18.08178,
     "lng": -96.13903
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Adolfo López Mateos 198",
     "lat": 20.96486,
     "lng": -97.4054
  },
  {
     "marca": "REPSOL",
     "direccion": "Acceso Cazones II",
     "lat": 20.55395,
     "lng": -97.4681
  },
  {
     "marca": "REPSOL",
     "direccion": "Autopista México-Puebla KM 35+500 S/N, San Marcos Huixtoco",
     "lat": 19.308769,
     "lng": -98.833257
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Gobierno Luis G Curiel No. 2446",
     "lat": 20.64067,
     "lng": -103.3521
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera México - Veracruz Km 49",
     "lat": 19.56922,
     "lng": -98.65619
  },
  {
     "marca": "REPSOL",
     "direccion": "Boulevard Adolfo López Mateos 2173. Col. Los Alpes",
     "lat": 19.356815,
     "lng": -99.198685
  },
  {
     "marca": "REPSOL",
     "direccion": "Libramiento Poniente S/N",
     "lat": 16.76469,
     "lng": -93.38528
  },
  {
     "marca": "REPSOL",
     "direccion": "Chimalhuacán 234, Agua Azul",
     "lat": 19.414471,
     "lng": -99.032229
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Ignacio L. Vallarta 2605, Arcos Vallarta",
     "lat": 20.67416,
     "lng": -103.3842
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Miguel Alemán No. 415",
     "lat": 19.18351,
     "lng": -96.13724
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida 20 de Noviembre No. 998",
     "lat": 20.53864,
     "lng": -97.44511
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Melchor Ocampo No. 512, Martínez de la Torre",
     "lat": 20.06059,
     "lng": -97.05897
  },
  {
     "marca": "REPSOL",
     "direccion": "Basílica de Guadalupe 3, Metropolitana 2nda sección",
     "lat": 19.388199,
     "lng": -99.029861
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Estatal Martínez-Misantla Km 1 No. 800, Martínez de la Torre",
     "lat": 20.05432,
     "lng": -97.04571
  },
  {
     "marca": "REPSOL",
     "direccion": "Km 83.5 Carretera Poza Rica-Nautla",
     "lat": 20.343294,
     "lng": -96.888426
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Ocozocoautla Km 132+70",
     "lat": 16.76811,
     "lng": -93.2966
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Huixtla Tapachula Km 281+656",
     "lat": 14.91567,
     "lng": -92.34282
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Oriente 31 No. 240 y Calle 4 Norte",
     "lat": 18.86332,
     "lng": -97.10865
  },
  {
     "marca": "REPSOL",
     "direccion": "Oriente 6 No. 2900",
     "lat": 18.85292,
     "lng": -97.0785
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Cardel-Nautla-Palma Sola Km 70, ",
     "lat": 19.77428,
     "lng": -96.43259
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera La Paz - Pichilingue, S/N. Col. Lomas de Palmira",
     "lat": 24.184061,
     "lng": -110.300817
  },
  {
     "marca": "REPSOL",
     "direccion": "Boulevard Alamo-Idolo S/N",
     "lat": 20.9026,
     "lng": -97.66768
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Santa Ana S/N, Col. Santa María",
     "lat": 24.118816,
     "lng": -110.335351
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Plutarco Elías Calles 430, Los Reyes",
     "lat": 19.398034,
     "lng": -99.116821
  },
  {
     "marca": "REPSOL",
     "direccion": "Negrete Sur No. 3",
     "lat": 19.2905,
     "lng": -97.91933
  },
  {
     "marca": "REPSOL",
     "direccion": "Ejercito Mexicano No. 1123",
     "lat": 19.14084,
     "lng": -96.11285
  },
  {
     "marca": "REPSOL",
     "direccion": "Boulevard Cordoba-Penuela No. 4358",
     "lat": 18.87498,
     "lng": -96.9162
  },
  {
     "marca": "REPSOL",
     "direccion": "Autopista México-Cordoba Km 247",
     "lat": 18.81609,
     "lng": -97.21996
  },
  {
     "marca": "REPSOL",
     "direccion": "Oriente 6 No. 1743 Esquina Sur 33",
     "lat": 18.84919,
     "lng": -97.08842
  },
  {
     "marca": "REPSOL",
     "direccion": "República 1436",
     "lat": 20.67489,
     "lng": -103.3161
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Texcoco No. 748, Colonia Floresta Municipio de los Reyes la Paz, ",
     "lat": 19.36711,
     "lng": -98.9912
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Cuauhtémoc Poniente 1500, Mz 19 lote 51, La bomba",
     "lat": 19.271119,
     "lng": -98.890559
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera a Coatepec KM 4.4 S/N, San Francisco Acuautla",
     "lat": 19.351436,
     "lng": -98.856883
  },
  {
     "marca": "REPSOL",
     "direccion": "Lt.2- Mza-1 Zona-7 No. 600 (Km 2 Mtz-Torre-S.Raf), Martínez de la Torre",
     "lat": 20.080234,
     "lng": -97.033565
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Santa Ana-Orizaba No. 1188",
     "lat": 18.877115,
     "lng": -97.108387
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Rural La Ventana-Sargento No. 64",
     "lat": 24.069989,
     "lng": -109.992825
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Avila Camacho 449",
     "lat": 19.88209,
     "lng": -103.5855472
  },
  {
     "marca": "REPSOL",
     "direccion": "Paseo del Ejército Mexicano, 217",
     "lat": 19.141014,
     "lng": -96.118875
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Picacho Ajusco 537, Lomas de Padierna",
     "lat": 19.292797,
     "lng": -99.216758
  },
  {
     "marca": "REPSOL",
     "direccion": "Av 16 de Septiembre, 14, Col. Centro",
     "lat": 19.668878,
     "lng": -99.181092
  },
  {
     "marca": "REPSOL",
     "direccion": "Calle 4 No. 165 Mz-249 L-1 y 10, Col. Estado de México",
     "lat": 19.429346,
     "lng": -99.051194
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Ejercito Nacional No. 1",
     "lat": 18.8906,
     "lng": -96.80165
  },
  {
     "marca": "REPSOL",
     "direccion": "Frente a La Plaza Principal de La Localidad Santiago",
     "lat": 23.481605,
     "lng": -109.714524
  },
  {
     "marca": "REPSOL",
     "direccion": "Niños Heroes no. 720, San Pedro",
     "lat": 20.627595,
     "lng": -103.320897
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Sixto Gorjon No. 229",
     "lat": 20.882305,
     "lng": -103.8330736
  },
  {
     "marca": "REPSOL",
     "direccion": "Carretera Picacho Ajusco 914, Jardines del Ajusco",
     "lat": 19.281459,
     "lng": -99.214903
  },
  {
     "marca": "REPSOL",
     "direccion": "Avenida Pantitlán No. 533, Col. La Perla",
     "lat": 19.387609,
     "lng": -99.003477
  },
  {
     "marca": "SHELL",
     "direccion": "HEROES FERROCARRI NO. 63, LA RIBERA",
     "lat": 19.442049,
     "lng": -99.156182
  },
  {
     "marca": "SHELL",
     "direccion": "AUTOPISTA MÉXICO-PACHUCA Nº4",
     "lat": 19.511701,
     "lng": -99.102744
  },
  {
     "marca": "SHELL",
     "direccion": "BOULEVARD PUERTO AEREO NO. 272",
     "lat": 19.428682,
     "lng": -99.09182
  },
  {
     "marca": "SHELL",
     "direccion": "AV. MEXIQUENSE SIN NUMERO PARCE S/N",
     "lat": 19.353891,
     "lng": -99.153239
  },
  {
     "marca": "SHELL",
     "direccion": "AVENIDA CENTENARIO 1787",
     "lat": 19.491579,
     "lng": -99.099785
  },
  {
     "marca": "SHELL",
     "direccion": "AV. POPOCATEPETL 415",
     "lat": 19.364591,
     "lng": -99.161507
  },
  {
     "marca": "SHELL",
     "direccion": "SAGREDO 265",
     "lat": 19.360967,
     "lng": -99.18894
  },
  {
     "marca": "SHELL",
     "direccion": "AV. 3-A SANTA ROSA, GUSTAVO A. 142",
     "lat": 19.523188,
     "lng": -99.169162
  },
  {
     "marca": "SHELL",
     "direccion": "AV. SAN LUIS TLATILC NO. 25, Y 25-A",
     "lat": 19.470741,
     "lng": -99.240296
  },
  {
     "marca": "SHELL",
     "direccion": "AV. MARIO COLIN COL. LOS REYES IXTA",
     "lat": 19.534484,
     "lng": -99.188808
  },
  {
     "marca": "SHELL",
     "direccion": "PRESIDENTE JUAREZ 27",
     "lat": 19.532219,
     "lng": -99.195341
  },
  {
     "marca": "SHELL",
     "direccion": "MIGUEL HIDALGO 39",
     "lat": 19.520108,
     "lng": -99.230111
  },
  {
     "marca": "SHELL",
     "direccion": "AV. ADOLFO LOPEZ MATEOS 205",
     "lat": 19.540224,
     "lng": -99.230902
  },
  {
     "marca": "SHELL",
     "direccion": "AVENIDA INDEPENDENCIA 112",
     "lat": 19.353891,
     "lng": -99.276205
  },
  {
     "marca": "SHELL",
     "direccion": "TIZMIN HEROES DE PADIERNA, TLAL 121",
     "lat": 19.289719,
     "lng": -99.217115
  },
  {
     "marca": "SHELL",
     "direccion": "VIA GUSTAVO BAZ 49 LOTE 4",
     "lat": 19.588108,
     "lng": -99.194207
  },
  {
     "marca": "SHELL",
     "direccion": "ADOLFO RUIZ CORTINEZ NO.245",
     "lat": 19.552996,
     "lng": -99.274511
  },
  {
     "marca": "SHELL",
     "direccion": "CIRCUITO BOSQUES DE BOLOGNIA 198",
     "lat": 19.610926,
     "lng": -99.243001
  },
  {
     "marca": "SHELL",
     "direccion": "CARRETERA COACALCO TULTEPEC 17",
     "lat": 19.64243,
     "lng": -99.114477
  },
  {
     "marca": "SHELL",
     "direccion": "PLAN DE GUADALUPE VICTORIA",
     "lat": 19.62796,
     "lng": -99.237255
  },
  {
     "marca": "SHELL",
     "direccion": "AV. CLUB ROTARIO SUR 12",
     "lat": 19.664678,
     "lng": -99.128882
  },
  {
     "marca": "SHELL",
     "direccion": "TOLUCA S/N",
     "lat": 19.664678,
     "lng": -99.128882
  },
  {
     "marca": "SHELL",
     "direccion": "AV. RECURSOS HIDRAULICOS 202",
     "lat": 19.672255,
     "lng": -99.116782
  },
  {
     "marca": "SHELL",
     "direccion": "Carretera México Querétaro Km 37.5",
     "lat": 19.668731,
     "lng": -99.198362
  },
  {
     "marca": "SHELL",
     "direccion": "AVENIDA 16 DE SEPTIEMBRE",
     "lat": 19.679583,
     "lng": -99.143504
  },
  {
     "marca": "SHELL",
     "direccion": "CARRETERA A CUAUTITL 1-82A, MANZANA",
     "lat": 19.683957,
     "lng": -99.185735
  },
  {
     "marca": "SHELL",
     "direccion": "CALLE GARDENIAS 68",
     "lat": 19.692988,
     "lng": -99.258902
  },
  {
     "marca": "SHELL",
     "direccion": "JORGE ROJO LUGO ESQ LIBRAMIENTO TIZ",
     "lat": 19.848279,
     "lng": -98.973672
  },
  {
     "marca": "SHELL",
     "direccion": "AUTOPISTA MEXICO-PUEBLA 150",
     "lat": 19.323277,
     "lng": -98.523314
  },
  {
     "marca": "SHELL",
     "direccion": "CARRETERA FEDERAL PUEBLA-MEXICO 150",
     "lat": 19.326197,
     "lng": -98.521911
  },
  {
     "marca": "SHELL",
     "direccion": "CARRETERA MEXICO PACHUCA KM 69.3",
     "lat": 19.966534,
     "lng": -98.856353
  },
  {
     "marca": "SHELL",
     "direccion": "CARRETERA MEXICO-PACHUCA KM. 72 7",
     "lat": 19.979498,
     "lng": -98.849308
  },
  {
     "marca": "SHELL",
     "direccion": "CARRETERA TULA - JOROBAS KM 31. S/N",
     "lat": 20.057158,
     "lng": -99.297661
  },
  {
     "marca": "SHELL",
     "direccion": "FRACCIONAMIENTO LOS TUZOS, REFORMA",
     "lat": 20.056941,
     "lng": -98.759237
  },
  {
     "marca": "SHELL",
     "direccion": "Carretera Huasca San Mig Km. +0.400",
     "lat": 20.06629,
     "lng": -98.67427
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Vecinal a Algodones, Col. Poblado Benito Juarez",
     "lat": 32.569311,
     "lng": -114.999223
  },
  {
     "marca": "PEMEX",
     "direccion": "Guatemala No, 900, Col. Cd, Morelos Valle",
     "lat": 32.635553,
     "lng": -114.850377
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Argentina # 28 y Calle Tercera, Col. Est. Coahuila",
     "lat": 32.199144,
     "lng": -114.999489
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz Constitucion Km.5 Carr.Riito Sobre Lotes 8y10, Col. Ganadera",
     "lat": 32.468086,
     "lng": -114.813692
  },
  {
     "marca": "PEMEX",
     "direccion": "Contreras y Calle 2a  San Luis Rio Colorado, Col. Centro",
     "lat": 32.47349,
     "lng": -114.78377
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Sonora y Calle 17 No.1608, Col. Jalisco",
     "lat": 32.462518,
     "lng": -114.767841
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion y Calle 34 # 3401, Col. Burocratas",
     "lat": 32.46253,
     "lng": -114.74199
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolg. Obregon # 620 Carrt. Caborca-Desemboque, Col. S/D",
     "lat": 30.70829,
     "lng": -112.18453
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Pitiquito, entre Avenidas \"N\" y \"P\", Col. Deportiva",
     "lat": 30.719887,
     "lng": -112.164254
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 28 y Av Quiroz y Mora, Col. Santa Cecilia",
     "lat": 30.73271,
     "lng": -112.15265
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Santa Ana-Mexicali Av.Prolongacion Fco.I., Col. Centro de Altar",
     "lat": 30.715008,
     "lng": -111.836548
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. El Greco No. 247, Col. Unidad Deportiva",
     "lat": 31.287063,
     "lng": -110.95709
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alvaro Obregon No. 1140, Col. Moderna",
     "lat": 31.311852,
     "lng": -110.945183
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Los Alamos No.222, Col. Empalme Nogales",
     "lat": 31.296168,
     "lng": -110.929524
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Anaya No.500 entre las Av.Pesqueira E Indp., Col. Centro",
     "lat": 30.543862,
     "lng": -111.114431
  },
  {
     "marca": "PEMEX",
     "direccion": "Jesus Garcia y Elisa Salgado No. 1002, Col. Garcia Barragan",
     "lat": 30.624336,
     "lng": -110.955768
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Internacional Km.205, Col. Campo Carretero",
     "lat": 30.781943,
     "lng": -110.854134
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida de Los Nogales 392, Col. San Carlos",
     "lat": 31.274349,
     "lng": -110.930009
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Primero de Junio No. 102, Col. Nueva Cananea",
     "lat": 31.00305556,
     "lng": -110.2647222
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 23 No. 2315, Col. Ejidal",
     "lat": 31.313529,
     "lng": -109.559413
  },
  {
     "marca": "PEMEX",
     "direccion": "Miguel Aleman # 302 Cerca Carrt. Sahuaripa-Tepache, Col. La Parabolica",
     "lat": 29.52918,
     "lng": -109.52676
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 135 de la Carr. Hermosillo-Cananea, Col. S/C",
     "lat": 29.818115,
     "lng": -110.227267
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Sarabia # 7 Esq. Calle Del Mercado, Col. S/D",
     "lat": 30.370714,
     "lng": -109.690505
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 35 y Avenida 10 No. 957, Col. Ladrillera",
     "lat": 31.30271,
     "lng": -109.55328
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Solidaridad No. 735, Col. Solidaridad",
     "lat": 29.143558,
     "lng": -110.995809
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Agustin F. Zamora No. 29, Col. Privadas Del Bosque",
     "lat": 29.1481833333333,
     "lng": -111.006438888889
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Solidaridad No. 1376, Col. La Caridad",
     "lat": 29.197407,
     "lng": -111.002173
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Garcia Morales No. 94, Col. 24 de Julio",
     "lat": 29.429075,
     "lng": -110.377335
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Antonio Quiroga # 555, Col. Dunas",
     "lat": 29.121166,
     "lng": -111.023295
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Paseo Rio Sonora Norte No.567, Col. Proyecto Rio Sonora",
     "lat": 29.12361111,
     "lng": -111.0041667
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lazaro Cardenas # 531, Col. Santa Isabel",
     "lat": 29.120568,
     "lng": -110.985359
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Jose Maria Morelos Sin Numero, Col. Sacramento",
     "lat": 29.117865,
     "lng": -110.950663
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Bahia de Kino, Col. Padre Kino",
     "lat": 28.82793,
     "lng": -111.938948
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Luis Donaldo Colosio No. 987, Col. Fracc. Campo Grande Residencial",
     "lat": 29.0813,
     "lng": -111.037306
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Garcia Morales No. 471, Col. El Llano",
     "lat": 29.095372,
     "lng": -111.016272
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jose Maria Mendoza Num. 794, Col. El Sahuaro",
     "lat": 29.10189,
     "lng": -110.993232
  },
  {
     "marca": "PEMEX",
     "direccion": "Dr. Domingo Olivares # 395 y Angel Gcia. Aburto, Col. Olivares",
     "lat": 29.10932,
     "lng": -110.980117
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Luis Encinas No. 242, Col. San Benito",
     "lat": 29.088375,
     "lng": -110.966497
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Norte No. 89 Esq. Israel Gonzalez, Col. Los Rosales",
     "lat": 29.109507,
     "lng": -110.958933
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Intern.Tramo-Guaymas-Hermosillo Km.171.3, Col. .",
     "lat": 28.320056,
     "lng": -111.042928
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Capomo # 17, Col. Nuevo Hermosillo",
     "lat": 29.018705,
     "lng": -110.932042
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Sur # 28, Col. Adolfo de la Huerta",
     "lat": 29.036206,
     "lng": -110.954707
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. de Los Ganaderos No. 492, Col. Urbi Ville Del Rey Secc. Casta%Os",
     "lat": 29.05328,
     "lng": -110.930249
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Paseo Rio Sonora Sur No. 128 Esq. Dr. Doming, Col. Jardines de Monaco",
     "lat": 29.0688977432828,
     "lng": -110.977809043718
  },
  {
     "marca": "PEMEX",
     "direccion": "Transversal 47,49 y 51 No. 99, Col. El Mariachi",
     "lat": 29.081818,
     "lng": -110.944205
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Hermosillo-Nogales Km. 1.7 No. 337, Col. San Luis",
     "lat": 29.103562,
     "lng": -110.912945
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Central Norte Esq. Con Av. Uno Sur Num.51, Col. Parque Industrial Portuario de San Felipe",
     "lat": 30.9904619714902,
     "lng": -114.827446074083
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 63.87 Tramo Carrt.Fed.Parador Bahia de Los Ange, Col. Sin Colonia",
     "lat": 28.95756,
     "lng": -113.56055
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Freemont S/N y Av. Sinaloa No. 91, Col. Benito Juarez",
     "lat": 31.3058,
     "lng": -113.53375
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.47 Rafael Godoy Cisneros y C.24 L.Cardenas # 239, Col. Nuevo Penasco",
     "lat": 31.32596,
     "lng": -113.50695
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Int. Tramo Guaymas-Hermosillo Km. 1992.000, Col. ",
     "lat": 28.0432,
     "lng": -110.9398
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Serdan # 454, Col. Centro",
     "lat": 27.923433,
     "lng": -110.899892
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Reforma y Juarez S/N, Col. Moderna",
     "lat": 27.958222,
     "lng": -110.818184
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Nainari y Lazaro Cardenas, Col. .",
     "lat": 27.641586,
     "lng": -110.296151
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Privada Dos No. 934 Ote., Col. Real de Sol",
     "lat": 27.514888,
     "lng": -109.930398
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. las Torres No. 1207 Norte, Col. S/C",
     "lat": 27.51435,
     "lng": -109.90585
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Calle Nogales No. 526, Col. Sc",
     "lat": 28.3655,
     "lng": -108.925305555556
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Morelos 26 Frente Ff.Cc., Col. Matachic",
     "lat": 28.845762,
     "lng": -107.754225
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera la Junta-Yepachi Km. 0.125, Col. ",
     "lat": 28.4761426997167,
     "lng": -107.315688271164
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Namiquipa a Chihuahua Km. 85, Col. Sc",
     "lat": 29.17856,
     "lng": -107.02291
  },
  {
     "marca": "PEMEX",
     "direccion": "Nuevo Predio de Campo Menonita No. 87, Col. Sta. Rita",
     "lat": 29.123932,
     "lng": -106.721165
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 200, Col. Ejido Tepeyac",
     "lat": 27.482459,
     "lng": -110.008342
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle No Reeleccion # 1402 Ote., Col. Benito Juarez",
     "lat": 27.491524,
     "lng": -109.923962
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 300 Ote. No.2655, Col. Centro",
     "lat": 27.46514,
     "lng": -109.907325
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Blvd. Manlio Fabio Beltrones Rivera Sn, Col. Sc",
     "lat": 27.08482,
     "lng": -109.4856
  },
  {
     "marca": "PEMEX",
     "direccion": "Juarez y Obregon S/N., Col. Centro",
     "lat": 26.82416,
     "lng": -109.6378
  },
  {
     "marca": "PEMEX",
     "direccion": "Carre. Navojoa-Huatabampo # 65, Col. S-C",
     "lat": 26.9829027777778,
     "lng": -109.549625
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Cuauhtemoc # 1011 Sur, Col. Juarez",
     "lat": 27.069826,
     "lng": -109.452368
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 1780 Carr Intl Sur, Col. Juarez",
     "lat": 27.045773,
     "lng": -109.437814
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Alamos-Navojoa y Calle A.Rivero No.142, Col. S/C",
     "lat": 27.027779,
     "lng": -108.944564
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Miguel Hidalgo y Costilla Mza. 36 Lote 10, Col. Punta Abre Ojos",
     "lat": 26.7236972222222,
     "lng": -113.572766666667
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Transpeninsular Salida Al Norte, Col. Periferia de la Ciudad",
     "lat": 27.3415426201169,
     "lng": -112.266479008598
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Paseo Dichoso No. 1, Col. San Carlos",
     "lat": 27.956276,
     "lng": -111.045207
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. de las Plazas No. 1, Col. Colinas",
     "lat": 27.9061310006274,
     "lng": -110.921710765082
  },
  {
     "marca": "PEMEX",
     "direccion": "I. Zaragoza y Justo Sierra # 24, Col. Loc. Higuera de Zaragoza",
     "lat": 25.96616,
     "lng": -109.29611
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Los Mochis - Ahome Km. 16, Col. Bagojo Colectivo",
     "lat": 25.884682,
     "lng": -109.133765
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 4ta. y 5ta. Manzana No. 74, Col. Loc. Villa Gustavo Diaz Ordaz",
     "lat": 26.269516,
     "lng": -109.041683
  },
  {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocodo # 621, Col. S/D",
     "lat": 26.064036,
     "lng": -108.778151
  },
  {
     "marca": "PEMEX",
     "direccion": "Notri entre Ligui y Tecomajac, Col. Zona Industrial",
     "lat": 26.007353,
     "lng": -111.366128
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 9 entre Canal Revestido y Rodolfo Santa Liz, Col. Ejido Francisco Javier Mina",
     "lat": 27.463826,
     "lng": -110.116726
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Obregon-Providencia # 2601 Pte.M-104, Col. Richardson Valle Del Yaqui",
     "lat": 27.501241,
     "lng": -109.974626
  },
  {
     "marca": "PEMEX",
     "direccion": "D. Norman E. Borlaug S/N, Col. Campo 6",
     "lat": 27.4128716755775,
     "lng": -109.933179915344
  },
  {
     "marca": "PEMEX",
     "direccion": "Coahuila # 1034 Sur, Col. Campestre",
     "lat": 27.481141,
     "lng": -109.940278
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Jalisco y Carretera Internacional No. 1150, Col. Municipio Libre",
     "lat": 27.4810079635308,
     "lng": -109.928784559525
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle a Bacurato y Calle Al Campamento 001, Col. S/C",
     "lat": 25.810457,
     "lng": -107.914048
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. a Parral y Arroyo Del Panteon S/N, Col. Santo Nino",
     "lat": 26.09026,
     "lng": -106.95931
  },
  {
     "marca": "PEMEX",
     "direccion": "Maclovio Herrera, Luis Echeverria y Francisco Villa#25, Col. Centro",
     "lat": 26.82262,
     "lng": -107.07141
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Gran Vision 902, Col. Barrio Rochivo",
     "lat": 27.7634777777778,
     "lng": -107.637466666667
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Centenario No. 3503 Pte, Col. Sindicatura Central",
     "lat": 25.802148,
     "lng": -109.035104
  },
  {
     "marca": "PEMEX",
     "direccion": "Independencia y Blvd. Rio de las Canas, Col. Jardines Del Valle",
     "lat": 25.797532,
     "lng": -109.006699
  },
  {
     "marca": "PEMEX",
     "direccion": "Ignacio Allende 127 Sur, Col. Centro",
     "lat": 25.7897045854903,
     "lng": -108.989968577298
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Macario Gaxiola E Ignacio Ramirez, Col. Centro",
     "lat": 25.791072,
     "lng": -108.976709
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Mexico Nogales Km. 1621, Col. Zona Industrial",
     "lat": 25.799607,
     "lng": -108.942778
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. R. G. Castro No. 2239, Col. Ejido Jiquilpan",
     "lat": 25.772452,
     "lng": -108.969331
  },
  {
     "marca": "PEMEX",
     "direccion": "Coronel Fco. Rivera Rojo y Calz. Victor Soto Rmz., Col. Loc. Adolfo Ruiz Cortines",
     "lat": 25.70615,
     "lng": -108.72268
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 500 y Carret. a las Glorias, Col. El Cubilete",
     "lat": 25.4806597560243,
     "lng": -108.523409892204
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Romualdo Ruiz Payan Esq. Blvd.Juan S. Millan, Col. Valle Del Sol",
     "lat": 25.568285,
     "lng": -108.477755
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Central No. 491, Acera Pte., Col. Centro",
     "lat": 25.559823,
     "lng": -108.467521
  },
  {
     "marca": "PEMEX",
     "direccion": "Raul Cervantes Ahumada  320, Col. Callejones de Guasavito",
     "lat": 25.568968,
     "lng": -108.448607
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Leon Fonseca Km 0+800 Acera Pte. # 800, Col. S/D",
     "lat": 25.594539,
     "lng": -108.455214
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Patricio Falomir y Calle Rubi Estacion Fonseca, Col. .",
     "lat": 25.727814,
     "lng": -108.347626
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. E. Sanchez Alonso # 2070 Nte., Col. Desarrollo Urbano Tres Rios",
     "lat": 24.8230963121052,
     "lng": -107.39959146627
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Enrique Cabrera S/N, Col. Fracc. El Pedregal Del Humaya",
     "lat": 24.832897,
     "lng": -107.4079
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional # 4658 Nte., Col. La Presita",
     "lat": 24.843476,
     "lng": -107.441662
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Badiraguato Km.11,000, Col. Comunidad Chicorato",
     "lat": 25.179838,
     "lng": -107.650074
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Villas Del Rio #3440 Pte., Col. Poblado Bellavista",
     "lat": 24.805698,
     "lng": -107.447274
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lola Beltran # 3224 Acera Sur, Col. Fracc. Horizontes",
     "lat": 24.814917,
     "lng": -107.429653
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Francisco I Madero No.693 Pte, Col. Centro",
     "lat": 24.804535,
     "lng": -107.401897
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Geovanni Zamudio Acera Ote. No. 7086 Sur, Col. Ejido Barrancos",
     "lat": 24.7406707266333,
     "lng": -107.42092694841
  },
  {
     "marca": "PEMEX",
     "direccion": "Const. Francisco J. Mujica Acera Pte. No. 4226 Sur, Col. Esthela Ortiz de Toledo",
     "lat": 24.767626,
     "lng": -107.409906
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Nicolas Bravo # 1646 Sur, Col. Morelos",
     "lat": 24.787838,
     "lng": -107.400697
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Emiliano Zapata No. 2043, Col. Centro Sinaloa",
     "lat": 24.793582,
     "lng": -107.414507
  },
  {
     "marca": "PEMEX",
     "direccion": "Entronque Carrets. la 50 Con Al 20, Col. Loc. Villa Benito Juarez",
     "lat": 24.6608306207604,
     "lng": -107.543494509262
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.A Navolato No.8701 Esq.Av.Angel Del Campo, Col. Alto de Bachigualato",
     "lat": 24.7753888203156,
     "lng": -107.473652923943
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Dr. Jesus Kumate Rodriguez No. 3006, Col. Ejido las Flores",
     "lat": 24.7538,
     "lng": -107.450229
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Benito Juarez No. 5088 Pte., Col. Las Flores",
     "lat": 24.739918,
     "lng": -107.435515
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Navolato-Altata Km.27+393, Col. .",
     "lat": 24.643638,
     "lng": -107.923527
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Navolato Bachimeto No. 3365 Pte., Col. El Limoncito",
     "lat": 24.757382,
     "lng": -107.735624
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 500 Pte No.270, Col. Agricola Independencia Chinitos",
     "lat": 25.053938,
     "lng": -107.921997
  },
  {
     "marca": "PEMEX",
     "direccion": "Call.300 Nte.Carr.Angostura Reforma Ejido Agustina, Col. .",
     "lat": 25.241777,
     "lng": -108.087998
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Jose Maria Morelos No 68, Col. Las Glorias Guamuchil",
     "lat": 25.445584,
     "lng": -108.068793
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Francisco Labastida Ochoa No. 463, Col. Del Evora",
     "lat": 25.460088,
     "lng": -108.075502
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Internacional Km 1531 S/N Salida Norte, Col. S/D",
     "lat": 25.470255,
     "lng": -108.103799
  },
  {
     "marca": "PEMEX",
     "direccion": "Puerto la Paz Esq. Puerto Loreto S/N, Col. S/D",
     "lat": 24.793322080663,
     "lng": -112.112509941139
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Transpeninsular Km. 214, Col. .",
     "lat": 25.061061,
     "lng": -111.685412
  },
  {
     "marca": "PEMEX",
     "direccion": "Alvarez Rico # F19 Pte., Col. Centro",
     "lat": 25.02252,
     "lng": -111.66356
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Pedro Anaya Num.1655 Pte, Col. Fraccionamiento Alamos Country",
     "lat": 25.776417,
     "lng": -109.022077
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Luis Donaldo Colosio S/N A.Serdan y G.Prieto, Col. Inalapa",
     "lat": 24.135717,
     "lng": -110.33247
  },
  {
     "marca": "PEMEX",
     "direccion": "Padre Kino  Esq. Allende  No.1345, Col. Los Olivos",
     "lat": 24.143975,
     "lng": -110.3022
  },
  {
     "marca": "PEMEX",
     "direccion": "Nicolas Bravo y Gomez Farias, Col. Centro",
     "lat": 24.154109,
     "lng": -110.311643
  },
  {
     "marca": "PEMEX",
     "direccion": "Parque Industrial Fondeporte Lotes 14 y 15, Col. Loc. Topolobampo",
     "lat": 25.596819,
     "lng": -109.058384
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Transpeninsular la Paz- Los Cabos Km. 201, Col. C",
     "lat": 24.040797,
     "lng": -110.299988
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Al Calandrio y Callejon Del Acceso #135, Col. El Calandrio",
     "lat": 24.09385,
     "lng": -110.312457
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Santa Ana S/N, Col. Santa Maria",
     "lat": 24.118438,
     "lng": -110.335521
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Forjadores de Sudcalif.Esq.L.D.Colosio #4390, Col. Ex-Base Aerea",
     "lat": 24.12819,
     "lng": -110.313298
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Calle Zaragoza S/N., Col. Centro",
     "lat": 23.061479,
     "lng": -109.709382
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 36+400 Carr. Cabo San Lucas-La Paz, Col. .",
     "lat": 23.094279,
     "lng": -109.708927
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote No. 4 Manzana No. 5 Numero 12639, Col. Fraccionamiento Villa Bonita",
     "lat": 23.164286,
     "lng": -109.707174
  },
  {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocido, Col. Loc. la Rivera",
     "lat": 23.594381,
     "lng": -109.591845
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 10, Col. Ampliacion El Centenario",
     "lat": 22.928648,
     "lng": -109.983517
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida las Brisas 3004, Col. Brisas Del Pacifico",
     "lat": 22.904625,
     "lng": -109.937372
  },
  {
     "marca": "PEMEX",
     "direccion": "Leona Vicario S/N Lote F-1 Frac.F Parc.122zzp1/3, Col. S/C",
     "lat": 22.923775,
     "lng": -109.926839
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote 1, Mza. S/N., Marina de Los Cabos San Lucas, Col. .",
     "lat": 22.880088,
     "lng": -109.906552
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cesar Lopez de Lara Num. 4330 Esq. A. Melgar, Col. .",
     "lat": 27.460245,
     "lng": -99.517993
  },
  {
     "marca": "PEMEX",
     "direccion": "Venustiano Carranza No. 2101, Col. Guerrero",
     "lat": 27.47651,
     "lng": -99.50189
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.A Monterrey Km. 2, Col. .",
     "lat": 26.397612,
     "lng": -99.037999
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Riberena Km. 65.5 No. 110, Col. La Mision",
     "lat": 26.324535,
     "lng": -98.84596
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey-Miguel Aleman Km.113, Col. Ninguna",
     "lat": 26.21854,
     "lng": -99.4836
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Km. 10.2 No. 809, Col. Fracc. Granjas Guzman",
     "lat": 27.406617,
     "lng": -99.541021
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Monterrey # 5401, Col. Los Encinos",
     "lat": 27.453352,
     "lng": -99.532957
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Reforma y Pedro Perez Ibarra Esq. Noroeste, Col. Fundadores",
     "lat": 27.450306,
     "lng": -99.518974
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Gral. Pablo Livas No. 4640, Col. Valles de la Silla, Fomerrey No. 19",
     "lat": 25.664774,
     "lng": -100.208948
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey-Reynosa No. 5480, Col. Sc",
     "lat": 25.674035,
     "lng": -100.191083
  },
  {
     "marca": "PEMEX",
     "direccion": "Acueducto Linares-Monterrey No. 550-A, Col. Rancho Viejo",
     "lat": 25.629782,
     "lng": -100.175685
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. a San Roque Km 2.9 # 1200, Col. Loc. Los Reyes",
     "lat": 25.640618,
     "lng": -100.151525
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Arturo B de la Garza # 1506, Col. 20 de Septiembre",
     "lat": 25.651543,
     "lng": -100.107315
  },
  {
     "marca": "PEMEX",
     "direccion": "Teofilo Salinas L-184, M-186 # 601, Col. Fraccionamiento la Ciudadela",
     "lat": 25.651892,
     "lng": -100.082182
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Lopez Mateos 1501, Col. La Floresta",
     "lat": 25.694466,
     "lng": -100.211981
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Mexico y Av. Hector Caballero Escamilla, Col. Campestre",
     "lat": 25.73358,
     "lng": -100.19911
  },
  {
     "marca": "PEMEX",
     "direccion": "Acceso Km 9+200 Autopista Monterrey-Cadereyta, Col. S/C",
     "lat": 25.693028,
     "lng": -100.183103
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel de la Madrid # 1321, Col. Jardines de Guadalupe",
     "lat": 25.694947,
     "lng": -100.173258
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Rhodesia Del Norte # 501 Esq. Gaspar Castano, Col. Ex Hda. Huinala",
     "lat": 25.730656,
     "lng": -100.162517
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Huinala-Pesqueria # 200, Col. S/C",
     "lat": 25.748531,
     "lng": -100.129657
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Miguel Aleman-Pesqueria, Km. 0.80, Col. .",
     "lat": 25.79861,
     "lng": -100.09119
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Santa Rosa Km. 3.8, Col. .",
     "lat": 25.82875,
     "lng": -100.230444
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Mty-Laredo Esq. Av. las Palmas, Col. S/C",
     "lat": 25.860268,
     "lng": -100.236729
  },
  {
     "marca": "PEMEX",
     "direccion": "Lateral Zuazua-Cienega de Flores No. 305, Col. Villas de Alcala",
     "lat": 25.913357,
     "lng": -100.183314
  },
  {
     "marca": "PEMEX",
     "direccion": "Zaragoza y Distrito B-3, Col. .",
     "lat": 26.309321,
     "lng": -99.532208
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Sabinas-Paras Km. 1, Col. .",
     "lat": 26.503716,
     "lng": -100.163693
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Mexico-Laredo Km 27 Pte., Col. S/D",
     "lat": 27.276122,
     "lng": -99.612745
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Santo Domingo Esq.Con Palomas No. 1429, Col. .",
     "lat": 25.752252,
     "lng": -100.262391
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Maria Concepcion Barragan # 203, Col. Enramada V Sector 2a. Etapa",
     "lat": 25.765715,
     "lng": -100.25733
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Afganistan # 1163, Col. Hda. Santa Rosa",
     "lat": 25.784081,
     "lng": -100.248653
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Lopez Mateos y Av. Mezquital, Col. .",
     "lat": 25.7400213842594,
     "lng": -100.239013370535
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Concordia 3645, Col. Sin",
     "lat": 25.773302,
     "lng": -100.201053
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Aleman No. 300, Col. Centro",
     "lat": 25.777102,
     "lng": -100.182371
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Eloy Cavazos No. 3810, Col. Fracc. El PeºOn",
     "lat": 25.657271,
     "lng": -100.222352
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardena No. 100, Col. El Sabino",
     "lat": 25.678111,
     "lng": -100.231448
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Constitucion No. 3904, Col. Churubusco",
     "lat": 25.682806,
     "lng": -100.265298
  },
  {
     "marca": "PEMEX",
     "direccion": "Rayon No. 401, Col. San Rafael",
     "lat": 25.691648,
     "lng": -100.221483
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Bonifacio Salinas No. 114-A, Col. Fracc. Industrial las Americas",
     "lat": 25.701204,
     "lng": -100.240201
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Felix Galvan # 990, Col. Corral de Piedra",
     "lat": 25.710567,
     "lng": -100.263393
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lopez Mateos # 300, Col. Lagrange",
     "lat": 25.718367,
     "lng": -100.26641
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alfonso Reyes # 3500, Col. Cerro Del Mirador",
     "lat": 25.632843,
     "lng": -100.299606
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Eugenio Garza Sada No. 220, Col. Roma",
     "lat": 25.655372,
     "lng": -100.294374
  },
  {
     "marca": "PEMEX",
     "direccion": "Tapia Ote. 1116, Col. Centro",
     "lat": 25.678379,
     "lng": -100.303761
  },
  {
     "marca": "PEMEX",
     "direccion": "Antonio I. Villarreal No. 3701, Col. Nuevo Madero",
     "lat": 25.686777,
     "lng": -100.277417
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Ruiz Cortinez Oriente No. 3428, Col. Moderna",
     "lat": 25.703313,
     "lng": -100.279612
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ruiz Cortinez # 700 Esq. Amado Nervo, Col. S/D",
     "lat": 25.703918,
     "lng": -100.319597
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alfonso Reyes No. 4090, Col. Del Norte",
     "lat": 25.717851,
     "lng": -100.31012
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Universidad No.100 Esq.Palacio de Justicia, Col. Anahuac",
     "lat": 25.736404,
     "lng": -100.304383
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Benito Juarez Esq. Zona Poniente No. 736, Col. Centro",
     "lat": 25.75324,
     "lng": -100.297418
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Manuel L. Barragan # 1300 \"A, Col. Las Misiones",
     "lat": 25.762876,
     "lng": -100.305133
  },
  {
     "marca": "PEMEX",
     "direccion": "Colombia No. 400, Col. .",
     "lat": 25.772017,
     "lng": -100.291754
  },
  {
     "marca": "PEMEX",
     "direccion": "Raul Salinas Lozano y Av. Compostela, Col. Lomas de Escobedo",
     "lat": 25.786372,
     "lng": -100.320609
  },
  {
     "marca": "PEMEX",
     "direccion": "Emiliano Zapata No. 207, Col. Emiliano Zapata",
     "lat": 25.701607,
     "lng": -100.361582
  },
  {
     "marca": "PEMEX",
     "direccion": "Bernardo Reyes Norte 3605, Col. NiºO Artillero",
     "lat": 25.709424,
     "lng": -100.327108
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Rodrigo Gomez No. 1445 Nte. Esq. Gfo. de Mex., Col. Central",
     "lat": 25.716914,
     "lng": -100.342285
  },
  {
     "marca": "PEMEX",
     "direccion": "Alejandro de Rodas No.3102, Col. Cumbres",
     "lat": 25.726977,
     "lng": -100.390945
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolong. Av. Bernardo Reyes # 6765, Col. Topo Chico",
     "lat": 25.737424,
     "lng": -100.332451
  },
  {
     "marca": "PEMEX",
     "direccion": "Luis Donaldo Colosio S/N, Col. Barrio San Carlos",
     "lat": 25.76801,
     "lng": -100.393871
  },
  {
     "marca": "PEMEX",
     "direccion": "Casa Del Obrero Mundial 5007, Col. C.R.O.C.",
     "lat": 25.785916,
     "lng": -100.37709
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. San Jeronimo # 508, Col. San Jeronimo",
     "lat": 25.674123,
     "lng": -100.357782
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo No. 1477 Pte., Col. Ex-Seminario",
     "lat": 25.670196,
     "lng": -100.335808
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Bernardo Reyes Num. 2122 Nte. y Gral. Anaya, Col. Industrial",
     "lat": 25.696208,
     "lng": -100.325275
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alfonso Reyes y Calz. Victoria, Col. .",
     "lat": 25.689612,
     "lng": -100.317385
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I. Madero y Guerrero, Col. No",
     "lat": 25.683353,
     "lng": -100.312564
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Constitucion # 3111, Col. Santa Maria",
     "lat": 25.673483,
     "lng": -100.392064
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc No. 105, Col. Cuauhtemoc",
     "lat": 25.677509,
     "lng": -100.437564
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Abraham Lincoln Num. 10000, Col. .",
     "lat": 25.757332,
     "lng": -100.398221
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. No Reeleccion # 200, Col. Barrio Guadalupe",
     "lat": 25.769472,
     "lng": -100.403294
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Anahuac Km 12+850, Col. Ejido la Sandia",
     "lat": 27.486058,
     "lng": -99.604371
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Eva Samano No. 1349, Col. Buena Vista",
     "lat": 27.488213,
     "lng": -99.549413
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Cesar Lopez de Lara 2702, Col. San Rafael",
     "lat": 27.47477,
     "lng": -99.517688
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Santos Degollado No. 1005, Col. Sector Centro",
     "lat": 27.49098,
     "lng": -99.5004
  },
  {
     "marca": "PEMEX",
     "direccion": "Urano # 2620, Col. La Puerta Del Sol",
     "lat": 25.682977,
     "lng": -100.485237
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey-Saltillo No. 3253, Col. Al Pte. de Col Puerta de las Mitras",
     "lat": 25.690566,
     "lng": -100.502213
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey Garcia Km 6.5, Col. Fraccionamiento las Americas Parque Industrial",
     "lat": 25.7473687311289,
     "lng": -100.527788213624
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Republica No.1729, Col. Fracc. Tecnologico",
     "lat": 28.69528,
     "lng": -100.56273
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. 16 de Septiembre No. 500 Esq. Prol. Anahuac, Col. Centro",
     "lat": 28.7100666666667,
     "lng": -100.522802777778
  },
  {
     "marca": "PEMEX",
     "direccion": "H. Colegio Militar No. 490, Col. 11 de Octubre",
     "lat": 29.30929,
     "lng": -100.93514
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Emilio Mendoza Cisneros Num. 2396, Col. .",
     "lat": 29.3246243416259,
     "lng": -100.973159153442
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 57 Km. 8, Col. Libramiento Allende - Morelos",
     "lat": 28.384098,
     "lng": -100.852408
  },
  {
     "marca": "PEMEX",
     "direccion": "Hidalgo  702 Sur, Col. Centro",
     "lat": 28.4860305555556,
     "lng": -100.917756027116
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Venuestiano Carranza No. 2000, Col. Lomas de la Villa",
     "lat": 28.654008,
     "lng": -100.535288
  },
  {
     "marca": "PEMEX",
     "direccion": "Lazaro Cardenas No. 2600 Central, Col. .",
     "lat": 28.688076,
     "lng": -100.542913
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Los Gonzalez No. 1426, Col. San Patricio",
     "lat": 25.453493,
     "lng": -100.955776
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Plan de Guadalupe No. 200, Col. Zona Centro",
     "lat": 25.539187,
     "lng": -100.949016
  },
  {
     "marca": "PEMEX",
     "direccion": "Industria Agroquimica No. 890, Col. Parque Industrial Saltillo-Ramos Ar",
     "lat": 25.5598194444444,
     "lng": -100.923138888889
  },
  {
     "marca": "PEMEX",
     "direccion": "Acueducto # 260, Col. Enrique Rangel",
     "lat": 25.661878,
     "lng": -100.451361
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco Coss E Hidalgo, Col. .",
     "lat": 25.431514,
     "lng": -100.993637
  },
  {
     "marca": "PEMEX",
     "direccion": "Abasolo 2041 y Jesus Valdez Sanchez, Col. Zona Centro",
     "lat": 25.435937,
     "lng": -100.984651
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Jesus Valdez Sanchez y Eulalio Gutz.Frac.Prad, Col. Ninguna",
     "lat": 25.44103,
     "lng": -100.959229
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Centenario de Torreon No. 7025, Col. Los Zacatones",
     "lat": 25.434867,
     "lng": -100.913266
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. 57 Km 6.5 # 1400, Col. Estacia San Juan Bautista",
     "lat": 26.957195,
     "lng": -101.409761
  },
  {
     "marca": "PEMEX",
     "direccion": "Cuauhtemoc Esq. Con Abasolo No. 911 Pte., Col. Reynera",
     "lat": 27.861838,
     "lng": -101.118449
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 57 No. 111 Ote., Col. Las Lomas",
     "lat": 27.883961,
     "lng": -101.145838
  },
  {
     "marca": "PEMEX",
     "direccion": "Presidente Carranza # 75, Col. Comecial",
     "lat": 27.936913,
     "lng": -101.227725
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.B.Juarez y Av.Hacienda Del Rey, Col. Haciendas de Escobedo",
     "lat": 25.789617,
     "lng": -100.305251
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Monterrey No. 101, Col. Nueva Esperanza",
     "lat": 25.7957754478979,
     "lng": -100.38983782209
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey - Laredo No. 1701, Col. Sc",
     "lat": 25.802848,
     "lng": -100.276633
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Laredo # 1600, Col. Fracc. Balcones Del Norte 3era. Secc.",
     "lat": 25.821034,
     "lng": -100.264032
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Monclova Km 5.5, Col. S/C",
     "lat": 25.834806,
     "lng": -100.311868
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. 57 Km. 83, Col. Alto de Norias",
     "lat": 26.00234,
     "lng": -101.29575
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd San Jose No. 1200, Col. Hipodromo",
     "lat": 26.916245,
     "lng": -101.403092
  },
  {
     "marca": "PEMEX",
     "direccion": "Benito Juarez Num. 215, Col. Centro",
     "lat": 25.440446,
     "lng": -101.247816
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Isidro Lopez Zertuche No. 1340, Col. Republica Poniente",
     "lat": 25.43617,
     "lng": -101.003947
  },
  {
     "marca": "PEMEX",
     "direccion": "Perif. Luis Echeverria Esq. Blvd. Carranza No. 140, Col. Latinoamericana",
     "lat": 25.447162,
     "lng": -100.988858
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Venustiano Carranza # 5530, Col. Fraccionamiento las Haciendas",
     "lat": 25.472473,
     "lng": -100.976617
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 30 Tramo Monclova-Cuatro Cienegas # 201, Col. Ampliacion Oriente",
     "lat": 27.005938,
     "lng": -101.720423
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 30 Tramo Estatal Km. 13 No. 204, Col. Venustiano Carranza",
     "lat": 27.003683,
     "lng": -101.496564
  },
  {
     "marca": "PEMEX",
     "direccion": "Lib. Carlos Salinas de Gortari # 184 Nte., Col. San Juan Bautista",
     "lat": 26.9690629772943,
     "lng": -101.448423939812
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Harold R. Pape No.448, Col. Guadalupe",
     "lat": 26.908809,
     "lng": -101.430495
  },
  {
     "marca": "PEMEX",
     "direccion": "Progreso No. 102, Col. Centro",
     "lat": 26.89164,
     "lng": -101.41452
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Torreon Matamoros # 7065, Col. La Amistad",
     "lat": 25.535222,
     "lng": -103.360037
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Torreon  San Pedro 15000, Col. Ejido Alba",
     "lat": 25.671567,
     "lng": -103.349489
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Torreon El Coyote Km. 4, Col. .",
     "lat": 25.693547,
     "lng": -103.331874
  },
  {
     "marca": "PEMEX",
     "direccion": "Entronque Carr. Torreon-San Pedro, Col. .",
     "lat": 25.764209,
     "lng": -103.278281
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Torreon San Pedro Km.29+331 No.1000, Col. Ejido El Jaboncillo",
     "lat": 25.761194,
     "lng": -103.245567
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 30 Carr. Matamoros-Viesca En Emiliano Zapata, Col. .",
     "lat": 25.490461,
     "lng": -102.95734
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Marfil No. 10 Calle Sn. Felipe, Col. .",
     "lat": 24.633158,
     "lng": -102.780574
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Matamoros Km. 128.300 Pob. la Paila, Col. .",
     "lat": 25.651252,
     "lng": -102.14615
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Constitucion 1765 Esq. Prolongacion Monaco, Col. El Tajito",
     "lat": 25.568735,
     "lng": -103.433722
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Raul Lopez Ent.Blvd.8888 Sc, Col. .",
     "lat": 25.582531,
     "lng": -103.416359
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de la Nogalera # 724, Col. Ejido la Union Zona 2",
     "lat": 25.604049,
     "lng": -103.400317
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 10 Carret. Jabonoso a Esmeralda, Col. Agricola la Popular",
     "lat": 25.688898,
     "lng": -103.444078
  },
  {
     "marca": "PEMEX",
     "direccion": "Clzda, Guadalupe Victoria # 1185 Nte., Col. Ampliacion Villa Jardin",
     "lat": 25.547214,
     "lng": -103.502334
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Lazaro Cardenas y Guanacevi No. 266, Col. Parque Industrial",
     "lat": 25.55937,
     "lng": -103.469349
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Allende Esq. Colon S/N, Col. Segundo de Cobian (Centro)",
     "lat": 25.541464,
     "lng": -103.448259
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Abasolo No. 1195, Col. .",
     "lat": 25.542332,
     "lng": -103.435617
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Aguila Nacional # 2010, Col. 4to. Fracc. Del Cobian",
     "lat": 25.550921,
     "lng": -103.426663
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Plolongacion Bravo No. 3435, Col. San Marcos",
     "lat": 25.54535,
     "lng": -103.411402
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Presidente Carranza # 458 Ote., Col. Centro",
     "lat": 25.558622,
     "lng": -103.380119
  },
  {
     "marca": "PEMEX",
     "direccion": "Torreo-Yerbanis Km. 144.970, Col. ",
     "lat": 24.74878,
     "lng": -103.8424
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Pedriceña-Nazas, Col. S/C",
     "lat": 25.23041,
     "lng": -104.107654
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Cementos-Pe¬Oles Esq. Pedro Rdz. Triana, Col. Las Luisas",
     "lat": 25.496189,
     "lng": -103.410972
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Division Del Norte # 100, Col. Residencial la Hacienda",
     "lat": 25.517883,
     "lng": -103.39384
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Cuauhtemoc No. 1059, Col. Lucio Blanco",
     "lat": 25.52841,
     "lng": -103.435808
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Torreon-Matamoros # 5000, Col. La Merced",
     "lat": 25.534826,
     "lng": -103.394877
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Juarez Esq. Calle de la Pepena, Col. Parque Industrial Lagunero",
     "lat": 25.537667,
     "lng": -103.399575
  },
  {
     "marca": "PEMEX",
     "direccion": "Libram. Gomez-Lerdo Km.9.5 No.347, Col. Fidel Velazquez",
     "lat": 25.573649,
     "lng": -103.520074
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Fco.I.Madero y Centenario, Col. Centro",
     "lat": 25.568996,
     "lng": -103.496042
  },
  {
     "marca": "PEMEX",
     "direccion": "Juan Mendez # 147, Col. 5 de Mayo (Ex Ejido Nuevo Gomez)",
     "lat": 25.576708,
     "lng": -103.490657
  },
  {
     "marca": "PEMEX",
     "direccion": "Gladiolas Esq. Av. Roble, Col. Miguel de la Madrid",
     "lat": 25.596902,
     "lng": -103.475352
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Al Mezquital No. 511, Col. Fracc. Predio Potreros de Los Abonos",
     "lat": 23.99612,
     "lng": -104.638878
  },
  {
     "marca": "PEMEX",
     "direccion": "Ricardo Flores Magon Num. 800, Col. J. Guadalupe Rodriguez",
     "lat": 24.019831,
     "lng": -104.633135
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Felipe Pescador No. 1100, Col. Esperanza",
     "lat": 24.0302,
     "lng": -104.6495
  },
  {
     "marca": "PEMEX",
     "direccion": "Magnolias # 100, Col. Jardines de Durango",
     "lat": 24.042188,
     "lng": -104.629834
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Jose Maria Patoni No. 1601-B, Col. Fracc. Cortijo Residencial",
     "lat": 24.0610907287482,
     "lng": -104.633425685844
  },
  {
     "marca": "PEMEX",
     "direccion": "Pino Suarez y Fco Villa, Col. .",
     "lat": 24.403191,
     "lng": -104.312548
  },
  {
     "marca": "PEMEX",
     "direccion": "Dom.Con.Carr.S.J.del Rio Con Carr.Panam. Km. 4, Col. Francisco Villa",
     "lat": 24.783328,
     "lng": -104.470488
  },
  {
     "marca": "PEMEX",
     "direccion": "Juarez Libertad y J.M.Flores, Col. .",
     "lat": 25.83431,
     "lng": -103.847231
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Carlos Salinas de Gortari No. 5219, Col. Fracc. Colinas de Santiago",
     "lat": 26.861309,
     "lng": -101.45095
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Juarez # 20, Col. Centro",
     "lat": 26.783614,
     "lng": -101.427863
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. 57 Km 183+300, Col. Asturias",
     "lat": 26.851357,
     "lng": -101.426179
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. a Piedras Negras Km 1067, Col. Guadalupe",
     "lat": 26.915173,
     "lng": -101.42778
  },
  {
     "marca": "PEMEX",
     "direccion": "Idelfonso Fuentes y Ermita S/N., Col. Zona Centro",
     "lat": 26.90421,
     "lng": -101.416015
  },
  {
     "marca": "PEMEX",
     "direccion": "Allende y Dr. Quiroz Cuaron No. 1400, Col. Abraham  Gonzalez",
     "lat": 27.12373,
     "lng": -104.908752
  },
  {
     "marca": "PEMEX",
     "direccion": "Vicente Lombardo Toledano 712, Col. Jorge Negrete",
     "lat": 27.666522,
     "lng": -105.178256
  },
  {
     "marca": "PEMEX",
     "direccion": "Irigoyen y Comonfort, Col. .",
     "lat": 27.692101,
     "lng": -105.172684
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Libre Delicias-Las Varas Lote 325-2, Col. S/C",
     "lat": 28.14606,
     "lng": -105.34232
  },
  {
     "marca": "PEMEX",
     "direccion": "Trat.de Libre Com.Y Hombres Ilustres, Col. .",
     "lat": 29.557608,
     "lng": -104.404202
  },
  {
     "marca": "PEMEX",
     "direccion": "Hacienda Del Retiro No.3220, Col. Hacienda las Torres Universidad I",
     "lat": 31.594972,
     "lng": -106.399765
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Manuel Talamas Camandari # 1184, Col. Fracc. Parajes Del Sur",
     "lat": 31.588337,
     "lng": -106.371884
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Zaragoza No. 1708-45, Col. Paraje de Oriente",
     "lat": 31.602071,
     "lng": -106.356616
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Juarez-Porvenir No. 1657, Col. Ejido Zaragoza",
     "lat": 31.6239998040323,
     "lng": -106.32757282209
  },
  {
     "marca": "PEMEX",
     "direccion": "Perimetral Carlos Amaya # 1395, Col. Azteca",
     "lat": 31.699985,
     "lng": -106.463076
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Oscar Flores Sanchez # 2734, Col. Division Del Norte",
     "lat": 31.706455,
     "lng": -106.446865
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Tecnologico No. 6005, Col. Ampliacion Aeropuerto",
     "lat": 31.665136,
     "lng": -106.42755
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tecnologico No. 3018, Col. Pradera Dorada",
     "lat": 31.700205,
     "lng": -106.424191
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Centeno No. 8175, Col. Fraccionamiento El Granjero",
     "lat": 31.6654,
     "lng": -106.408803
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de la Victoria # 9350, Col. Partido Senecu",
     "lat": 31.667778,
     "lng": -106.395727
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Cuatro Siglos No. 10505, Col. Fracc. Jardines de Aragon Etapa I",
     "lat": 31.716117,
     "lng": -106.376389
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Domingo Arrieta No. 222, Col. La Arboleda",
     "lat": 23.999187,
     "lng": -104.662619
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Durango-Mazatlan Km 3.2, Col. El Saltito",
     "lat": 24.010463,
     "lng": -104.692553
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Cuauhtemoc No.331 Sur, Col. Zona Centro",
     "lat": 24.0259444444444,
     "lng": -104.655694444444
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Felipe Pescador # 127, Col. Fracc. Zona Centro",
     "lat": 24.034699,
     "lng": -104.6673
  },
  {
     "marca": "PEMEX",
     "direccion": "Enrique W Sanchez No. 1000, Col. .",
     "lat": 24.527151,
     "lng": -104.769418
  },
  {
     "marca": "PEMEX",
     "direccion": "Eje Vial Juan Gabriel No.9805, Col. Puente Alto",
     "lat": 31.629246,
     "lng": -106.461717
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Panamericana No. 9150, Col. Adicion Sur",
     "lat": 31.622907,
     "lng": -106.444268
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Oscar Flores y Blvd. Zaragoza # 6621, Col. Roma",
     "lat": 31.660173,
     "lng": -106.443097
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Zaragoza # 8050, Col. Fracc. El Granjero",
     "lat": 31.649908,
     "lng": -106.410062
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de las Torres # 1910, Col. Torres Del Sur",
     "lat": 31.626682,
     "lng": -106.392695
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Santiago Troncoso No.314, Col. Praderas Del Sur",
     "lat": 31.626873,
     "lng": -106.371445
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Independencia # 360, Col. Zaragoza",
     "lat": 31.6430263456404,
     "lng": -106.346562271164
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Mex-Chihuahua Calle Fco. Marquez, Col. Veteranos",
     "lat": 28.604832,
     "lng": -105.99588
  },
  {
     "marca": "PEMEX",
     "direccion": "Ignacio Ramirez No. 701, Col. Centro",
     "lat": 28.381857,
     "lng": -105.624261
  },
  {
     "marca": "PEMEX",
     "direccion": "Degollado # 1200, Col. Centro",
     "lat": 28.269349,
     "lng": -105.473979
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Antonio Ortiz Mena No. 5007, Col. Avicola 2a. Etapa",
     "lat": 28.612943,
     "lng": -106.107239
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion y Calle 22, Col. Centro",
     "lat": 28.627681,
     "lng": -106.086461
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Independencia # 2800 Esq. Av. 20 de Noviembre, Col. Santa Rosa",
     "lat": 28.63051,
     "lng": -106.067793
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Guillermo Prieto Lujan No. 1102, Col. Fracc. Los Arcos",
     "lat": 28.743978,
     "lng": -106.133941
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Los Nogales Norte # 1101 Esq. Alfonso Sosa V., Col. Pedro Dominguez",
     "lat": 28.732417,
     "lng": -106.121549
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. las Americas y Libramiento Perimetral, Col. .",
     "lat": 28.658619,
     "lng": -106.100741
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Tecnologico No. 3506, Col. Unidad Tecnologico",
     "lat": 28.663729,
     "lng": -106.087359
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Heroico Colegio Militar # 3906, Col. Barrio Del Norte",
     "lat": 28.668965,
     "lng": -106.076818
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Principal y Carr.Chihuahua y Aldama, Col. .",
     "lat": 28.680874,
     "lng": -106.002417
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Silvestre Terrazas # 13001, Col. Labor de Terrazas",
     "lat": 28.583202,
     "lng": -106.119864
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico de la Juventud # 7519, Col. Fracc. Residencial Barrancas",
     "lat": 28.670606,
     "lng": -106.133219
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Desarrollo Esq Retorno Impulso No. 2801, Col. Parque Industrial Impulso",
     "lat": 28.746363,
     "lng": -106.159032
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol.Hidalgo S/N, Col. Granja CordereºA",
     "lat": 26.942515,
     "lng": -105.398976
  },
  {
     "marca": "PEMEX",
     "direccion": "Callejon a Nonoava S/N, Col. Barrio de Los Moros",
     "lat": 27.48201,
     "lng": -106.73718
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Cni No. 1212, Col. Sector Poniente",
     "lat": 28.1848989938532,
     "lng": -105.482782571411
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. 45 Tramo Delicias-Chih. Km 138+168.69, Col. S/D",
     "lat": 28.19998,
     "lng": -105.45351
  },
  {
     "marca": "PEMEX",
     "direccion": "18 y Francisco I. Madero. Num. 1485, Col. Centro",
     "lat": 28.3971,
     "lng": -106.86847
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Agustin Melgar y Av. California No. 1685, Col. Zona Centro",
     "lat": 28.425031,
     "lng": -106.842104
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Casas Grandes Km. 120, Col. S/C",
     "lat": 31.469673,
     "lng": -107.611463
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Divisisn Del Norte No. 3526, Col. Emiliano Zapata",
     "lat": 31.725688,
     "lng": -106.508891
  },
  {
     "marca": "PEMEX",
     "direccion": "16 de Septiembre No.2163 Pte. y Plomo, Col. A. Colorado",
     "lat": 31.741389,
     "lng": -106.495499
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. 5 de Febrero No. 1960, Col. ChaveºA",
     "lat": 31.724123,
     "lng": -106.482313
  },
  {
     "marca": "PEMEX",
     "direccion": "5 de Mayo y Tlaxcala, Col. Hidalgo",
     "lat": 31.7441550756062,
     "lng": -106.473316101852
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Insurgentes 2980 y Calle Juan de la Barrera, Col. Ex-Hipodromo",
     "lat": 31.7321686256765,
     "lng": -106.457235889549
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Paseo Triunfo de la Republica # 4635, Col. Fraccionamiento Monumental",
     "lat": 31.737606,
     "lng": -106.443734
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Rafael Perez Serna No.755 y Av. Hnos. Escobar, Col. Partido Romero",
     "lat": 31.746201,
     "lng": -106.425328
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Aleman y Aquiles Serdan, Col. Centro",
     "lat": 23.196689,
     "lng": -106.419882
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Internacional Al Nte Esq.Lucio Vlanco #2201, Col. S/D",
     "lat": 23.2457142169757,
     "lng": -106.421575775463
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Luis Donaldo Colosio No. 17710, Col. Huertos Familiares",
     "lat": 23.250189,
     "lng": -106.398851
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Manuel J Clouthier Esq Costa Del Pacifico 4450, Col. Costa Dorada",
     "lat": 23.254944,
     "lng": -106.383116
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Mazatlan Km. 25.306, Col. ",
     "lat": 23.19661,
     "lng": -106.1957
  },
  {
     "marca": "PEMEX",
     "direccion": "Mineros No. 102, Col. El Panteon",
     "lat": 22.993391,
     "lng": -105.860402
  },
  {
     "marca": "PEMEX",
     "direccion": "Campo Menonita No 51-A, Col. Santa Clara",
     "lat": 29.250058,
     "lng": -107.409269
  },
  {
     "marca": "PEMEX",
     "direccion": "La Fortuna Lote 2, Col. Ejido San Lorenzito (La Fortuna)",
     "lat": 30.102713,
     "lng": -106.318035
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Ahumada 1510 Nte, Col. Ciudad Ahumada",
     "lat": 30.63903,
     "lng": -106.514888
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Sabalo Cerritos S/N, Col. Cerritos",
     "lat": 23.299167,
     "lng": -106.480748
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional No. 3101, Col. Paseos de Los Olivos",
     "lat": 23.261079,
     "lng": -106.418074
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Oscar Perez Escobosa No. 2900, Col. Valle Del Ejido",
     "lat": 23.270841,
     "lng": -106.40681
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Durango Mazzatlan Km 44.5, Col. .",
     "lat": 23.287486,
     "lng": -106.063128
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Quila-El Salado No. 915 Acera Norte, Col. Loc. Quila",
     "lat": 24.4305,
     "lng": -107.21423
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mazatlan - Culiacan Km. 90, Col. Sc",
     "lat": 23.920166,
     "lng": -106.92905
  },
  {
     "marca": "PEMEX",
     "direccion": "Sierra Mojada No. 75, Col. Sierra Mojada",
     "lat": 24.409606,
     "lng": -106.70014
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Santiago Papasquiaro-Tepehuanes Km 10, Col. Santiago Papasquiaro",
     "lat": 25.11805,
     "lng": -105.46809
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Aleman # 207 Esq. Emiliano Zapata, Col. Libertad",
     "lat": 24.888912,
     "lng": -105.070815
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Gral. Alvaro Obregon No.7529 Norte, Col. Loma de Rodriguera",
     "lat": 24.870176,
     "lng": -107.393541
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Parral-Guadalupe y Calvo Km 108+594, Col. S/D",
     "lat": 26.532586,
     "lng": -106.353406
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Centenario # 64, Col. Centro",
     "lat": 26.936725,
     "lng": -105.670358
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fed Parral Jimenez Km 0 + 451, Col. S/C",
     "lat": 26.93414,
     "lng": -105.6333
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Patria Esq. Blvd. Luis F. Molina No. 53140, Col. Lazaro Cardenas",
     "lat": 24.768183,
     "lng": -107.370789
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. H. Colegio Militar No 1820 Sur, Col. .",
     "lat": 24.793733,
     "lng": -107.374892
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion # 176 Norte, Col. Miguel Hidalgo",
     "lat": 24.80316,
     "lng": -107.365824
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Eldorado No.544 Esq. Blvd. de Los Alamos, Col. Las Quintas",
     "lat": 24.811543,
     "lng": -107.365622
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. de las Americas No. 2683 Pte., Col. Fracc. Villa Universidad",
     "lat": 24.833615,
     "lng": -107.385074
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 3a. No. 304 Esquina Con Calle Morelos, Col. Centro",
     "lat": 29.19452,
     "lng": -108.14337
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tecnologico # 5900, Col. Magisterial",
     "lat": 30.38421,
     "lng": -107.88562
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Benito Juarez y Calle Quinta, Col. Dublan",
     "lat": 30.4408,
     "lng": -107.91493
  },
  {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocido Ascencion, Col. .",
     "lat": 31.1004101084624,
     "lng": -107.992546438515
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Al Melon  Num. 3966 Pte., Col. Sc",
     "lat": 24.375335,
     "lng": -107.259241
  },
  {
     "marca": "PEMEX",
     "direccion": "Mocorito # 612, Col. Costa Rica",
     "lat": 24.589876,
     "lng": -107.399752
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Al Sur No. 7088 Acera Ote., Col. Ejido El Ranchito",
     "lat": 24.735899,
     "lng": -107.34829
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. San Angel No. 3685 Ote., Col. Fracc. San Benito",
     "lat": 24.7720720728894,
     "lng": -107.356577262566
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Matamoros-Monterrey # 600, Col. Jacinto Lopez",
     "lat": 26.044733,
     "lng": -98.314767
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Matamoros-Reynosa  Km 93, Col. Doctores",
     "lat": 26.059697,
     "lng": -98.295075
  },
  {
     "marca": "PEMEX",
     "direccion": "Rio Mante No. 2420, Col. Prolongacion Longoria",
     "lat": 26.06581,
     "lng": -98.295607
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 103 Carr:_ Rey-Monterrrey-Las Fuentes, Col. Las Fuentes",
     "lat": 26.076068,
     "lng": -98.315397
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Emilio Portes Gil Esq. Colon, Col. Del Prado",
     "lat": 26.086339,
     "lng": -98.271014
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 2 Carr.Ribereña Reynosa, Col. Los Virreyes",
     "lat": 26.093312,
     "lng": -98.302526
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Reynosa-San Fernando Km 101 Brecha Jacalito, Col. S/C",
     "lat": 25.92335,
     "lng": -98.26932
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Reynosa No. 301 Esq. Calle 20 de Noviembre, Col. Granjas Economicas",
     "lat": 26.023298,
     "lng": -98.239028
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Reynosa-Matamoros Parcela 128,Z-1,P2/2, Col. Ejido El Guerreno",
     "lat": 26.013895,
     "lng": -98.204246
  },
  {
     "marca": "PEMEX",
     "direccion": "Tamaulipas y Madero, Col. .",
     "lat": 25.986823,
     "lng": -98.107335
  },
  {
     "marca": "PEMEX",
     "direccion": "Emiliano Zapata No. 675, Col. Graciano Sanchez",
     "lat": 25.995191,
     "lng": -98.0693
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Matamoros Reynosa Km. 21 No. 2111, Col. Raancho San Fructuoso",
     "lat": 25.971221,
     "lng": -97.695577
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Diagonal Cuauhtemoc y Calles 20 Sur, Col. .",
     "lat": 25.867587,
     "lng": -97.503949
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Tamaulipas No. 56, Col. Modelo",
     "lat": 25.879012,
     "lng": -97.49475
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Solidaridad entre Serafines y Av. de Los Angel, Col. .",
     "lat": 25.848961,
     "lng": -97.482693
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Lauro Villar y Accion Civica 1203, Col. Las Arboledas",
     "lat": 25.86595,
     "lng": -97.477571
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Sendero Nacional. Km. 6.7, Col. Dentro de Poblado Portille$O y Balline$O",
     "lat": 25.862313,
     "lng": -97.586779
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Constituyentes Num.213, Col. Casa Blanca",
     "lat": 25.86276,
     "lng": -97.54191
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Rigo Tovar Esq. Ave Industrial No. 84, Col. Zona Industrial",
     "lat": 25.877944,
     "lng": -97.527903
  },
  {
     "marca": "PEMEX",
     "direccion": "Catorce y Morelos Esquina 197, Col. Zona Centro",
     "lat": 25.87803,
     "lng": -97.51124
  },
  {
     "marca": "PEMEX",
     "direccion": "Bernardo Reyes No. 420, Col. Centro",
     "lat": 25.78437,
     "lng": -99.18478
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Camargo S/N Cd Diaz Ordaz, Col. Zona Industrial",
     "lat": 26.214403,
     "lng": -98.590006
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hacienda las Bugambilias 704, Col. Hacienda las Bugambilias",
     "lat": 26.0351,
     "lng": -98.3927777777778
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Monterrey Esq. Rosario # 327, Col. Lomas de Jarachina",
     "lat": 26.058828,
     "lng": -98.359061
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera las Yescas Km. 83.675 No. 2503-A, Col. Fraccionamiento Los Fresnos",
     "lat": 25.65157,
     "lng": -97.81623
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 82 y Brecha 122, Col. Olimpica",
     "lat": 25.66648,
     "lng": -97.796244
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Matamoros-Cd. Victoria Km. 7.5 Sur No. 7501, Col. .",
     "lat": 25.78265,
     "lng": -97.53257
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Del Nino # 50, Col. Villa las Torres",
     "lat": 25.8177,
     "lng": -97.5057
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Real S/N, Col. Palo Verde",
     "lat": 25.843,
     "lng": -97.45779
  },
  {
     "marca": "PEMEX",
     "direccion": "Benito Juarez E Ignacio Zaragoza 149, Col. El Saucito",
     "lat": 25.5242746678967,
     "lng": -97.302933244418
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Nacional y Francisco Salazar Chavez # 300, Col. Congregacion San Jose Norte",
     "lat": 25.39366,
     "lng": -100.13104
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol. Eloy Cavazos No. 3200, Col. Hector Caballero",
     "lat": 25.63159,
     "lng": -100.128
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Libramiento Pesqueria Los Ramones No. 117, Col. Centro",
     "lat": 25.7872575464893,
     "lng": -100.039973787697
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Revolucion Km. 900, Col. Centro",
     "lat": 25.5821,
     "lng": -100.0024
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Monterrey-Reynosa Km. 33.7, Col. S/C",
     "lat": 25.600117,
     "lng": -99.970348
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Nacional Km 255, Col. No",
     "lat": 25.4609154136997,
     "lng": -100.170497134632
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Camino de Los Cristales Carret.Nacional Km.263, Col. Los Cristales",
     "lat": 25.537993,
     "lng": -100.219007
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida la Luz # 6113, 6113-1, Col. La Estanzuela",
     "lat": 25.589709,
     "lng": -100.249517
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Revolucion # 3804, Col. La Silla",
     "lat": 25.6340263828936,
     "lng": -100.272836279762
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jose Vasconcelos No. 600, Col. Del Valle",
     "lat": 25.660736,
     "lng": -100.39891
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Insurgentes No.3991 Pte. y Pablo Moncayo, Col. Colinas de San Jeronimo",
     "lat": 25.680599,
     "lng": -100.357612
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Felix Galvan No. 520, Col. Fidel Velazquez",
     "lat": 25.7122698,
     "lng": -100.260626237
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cda. Victoria-Matamoros Km. 222mas 277, Col. Sc",
     "lat": 24.863716,
     "lng": -98.139742
  },
  {
     "marca": "PEMEX",
     "direccion": "La Joya No. 103, Col. Fracc. Villa Diamante",
     "lat": 26.014178,
     "lng": -98.243438
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Sur Monterrey-Matamoros Km. 4.6 # 214, Col. S/C",
     "lat": 26.045916,
     "lng": -98.327824
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. las Fuentes No- 901-A, Col. Las Fuentes",
     "lat": 26.05578,
     "lng": -98.31999
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 208 Carrt. Reynosa-Monterrey, Col. .",
     "lat": 26.067597,
     "lng": -98.338724
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Hidalgo # 101, Col. S/D",
     "lat": 26.073627,
     "lng": -98.321398
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 57 No. 1000-A Km. 202.780, Col. ",
     "lat": 25.1685347668371,
     "lng": -100.722683271164
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Saltillo-Zacatecas No. 4410, Col. Lourdes",
     "lat": 25.378194,
     "lng": -101.011377
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Antonio Cardenas # 2020, Col. Bellavista",
     "lat": 25.400439,
     "lng": -101.001086
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Mirasierra No. 2085, Col. Nuevo Mirasierra Segunda Etapa",
     "lat": 25.4173111111111,
     "lng": -100.919908333333
  },
  {
     "marca": "PEMEX",
     "direccion": "Jose Ma. la Fragua No. 2360, Col. Guanajuato",
     "lat": 25.4384194670285,
     "lng": -100.978997212303
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas Esq. Con Zacatecas, Col. Los Almendros",
     "lat": 23.756273,
     "lng": -99.160117
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Tamaulipas Norte No. 2640, Col. Las Huertas",
     "lat": 23.755903,
     "lng": -99.140772
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cd. Victoria-Matamoros Km 5+500, Col. Loc. El Olivo",
     "lat": 23.772162,
     "lng": -99.108141
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. 2a. Generacion No. 100, Col. Zona Centro",
     "lat": 24.94832,
     "lng": -98.80241
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Victoria - Matamoros Km. 146, Col. Carretera",
     "lat": 24.623371,
     "lng": -98.293959
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Victoria-Sta Engracia No. 712 Km 1, Col. La Presa",
     "lat": 23.782279,
     "lng": -99.16819
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Mexico 57 Tramo Matehuala-Saltillo Km 108, Col. S/C",
     "lat": 24.49552,
     "lng": -100.2947
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo # 803 Norte, Col. Centro",
     "lat": 24.86033,
     "lng": -99.57065
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Nal. y Chapultepec, Col. Zona Centro",
     "lat": 24.88844,
     "lng": -99.6723
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Carlos Cantu No. 704 Pte., Col. C",
     "lat": 25.18941,
     "lng": -99.8376
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional # 2004 Sur, Col. Buena Vista",
     "lat": 25.26259,
     "lng": -100.01178
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 1.5 Carrt. Allende-Cadereyta, Col. .",
     "lat": 25.303976,
     "lng": -100.001661
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Santa Matilde Km 0.400 S/N, Col. S/C",
     "lat": 23.32528,
     "lng": -101.74566
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr a Matehuala y Calle Tampico, Col. Ninguna",
     "lat": 23.127624,
     "lng": -101.107557
  },
  {
     "marca": "PEMEX",
     "direccion": "Ccarretera de Salida a Matehuala, Col. Centro",
     "lat": 23.815997,
     "lng": -100.716512
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Matehuala-Cedral # 902, Col. S/D",
     "lat": 23.667357,
     "lng": -100.645402
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Central 57 Slp-Matehuala Km 179+605 # 3805, Col. S/D",
     "lat": 23.556547,
     "lng": -100.627563
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo No.5408, Col. Arenal",
     "lat": 22.28472,
     "lng": -97.874546
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo # 6905, Col. Francisco Javier Mina",
     "lat": 22.297632,
     "lng": -97.876767
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo Esq. Calle Corcega No. 1714, Col. Roma",
     "lat": 22.314882,
     "lng": -97.879303
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Tampico-Mante, Km. 13, Col. .",
     "lat": 22.338021,
     "lng": -97.873369
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Allende Esq. Calle Matamoros No. 101, Col. .",
     "lat": 22.395859,
     "lng": -97.934404
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ayuntamiento # 2703 Esq. Salvador Ramirez, Col. S/D",
     "lat": 22.250583,
     "lng": -97.866738
  },
  {
     "marca": "PEMEX",
     "direccion": "Jaumave # 100 Pte., Col. Vicente Guerrero",
     "lat": 22.255116,
     "lng": -97.828985
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Universidad entre Calles 9 y 10, Col. .",
     "lat": 22.266834,
     "lng": -97.860028
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Monterrey No. 601 Pte., Col. Ampliacion Unidad Nacional",
     "lat": 22.281187,
     "lng": -97.84775
  },
  {
     "marca": "PEMEX",
     "direccion": "Av 20 de Noviembre No 1825, Col. Barrio de Tlaxcala",
     "lat": 22.170043,
     "lng": -100.971787
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Matahuala No. 4632 Km 6.8, Col. ",
     "lat": 22.1949,
     "lng": -100.9412
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Carlos Salinas de Gortari # 301, Col. Fracc. Industrial",
     "lat": 22.21874,
     "lng": -100.9689
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico-Piedras Negras Km.473-860, Col. .",
     "lat": 22.466359,
     "lng": -100.667769
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Fed. 57 Tramo S.L.P. Matehuala Km 100, Col. Sin Colonia",
     "lat": 22.863875,
     "lng": -100.481201
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Aguascalientes-Zacatecas Km.31+072,Pabel, Col. S/C.",
     "lat": 22.147364,
     "lng": -102.293909
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  la Providencia - Luis Moya Km. 20+373, Col. San Antonio",
     "lat": 22.224032,
     "lng": -102.242597
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Panamericana # 1901, Col. S/C",
     "lat": 22.356156,
     "lng": -102.293941
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalupe-Cd. Cuauhtemoc Km. 2.200, Col. ",
     "lat": 22.7264859377568,
     "lng": -102.493723179627
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 110+900 Carrt. 45 Panamericana Tramo Zac-Ags., Col. Santa Monica",
     "lat": 22.750791,
     "lng": -102.422647
  },
  {
     "marca": "PEMEX",
     "direccion": "Margen Der.del Rio Panuco E.Cadenamien.19-200a-300, Col. Congregacion Anahuac",
     "lat": 22.121536,
     "lng": -97.92119
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 2+928.463 Av. Blvd. de Los Rios, Col. Parque Industrial Altamira",
     "lat": 22.432693,
     "lng": -97.890568
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Mante-Valles Frente Rancho El Rosario Km.3.5, Col. .",
     "lat": 22.708906,
     "lng": -98.992279
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Manuel Gonzalez Num. 4450 Lote 6 Zona8, Col. Sc",
     "lat": 22.743505,
     "lng": -98.298166
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Mexico Laredo Sur No. 300, Col. Centro",
     "lat": 22.821667,
     "lng": -99.010441
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 81 a Gonzales Km. 50, Col. Sc",
     "lat": 23.11625,
     "lng": -98.75068
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 85 Nacional Via Corta a Tampico Km.64.7, Col. Sc",
     "lat": 23.722941,
     "lng": -98.998426
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Real Num. 1001, Col. Localidad Pedregoso",
     "lat": 22.25938,
     "lng": -101.77282
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. San Luis-Zacatecas Km 58, Col. S/D",
     "lat": 22.407713,
     "lng": -101.402315
  },
  {
     "marca": "PEMEX",
     "direccion": "Colon y Carrt. San Luis-Charcas Marg Izquierdo, Col. S/D",
     "lat": 22.73988,
     "lng": -101.08242
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr San Luis P.-Guadalajara Km 700, Col. Lomas de San Luis",
     "lat": 22.141168,
     "lng": -101.019932
  },
  {
     "marca": "PEMEX",
     "direccion": "Nereo Rodriguez Barragan 450, Col. Del Valle",
     "lat": 22.155667,
     "lng": -101.006492
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Prolg. Mu¬Oz No. 205 Esq A. Garcia y Cam a Pin, Col. Villa Campestre",
     "lat": 22.160391,
     "lng": -100.999943
  },
  {
     "marca": "PEMEX",
     "direccion": "Himno Nacional No. 4265, Col. Himno Nacional",
     "lat": 22.135844,
     "lng": -100.980745
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. de Guadalupe # 1195, Col. San Juan de Guadalupe",
     "lat": 22.134909,
     "lng": -100.970273
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Vecinal entre Ejido San Elias y Soledad (Co Km. 23.500, Col. ",
     "lat": 22.15273,
     "lng": -100.956
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Mexico-Queretaro-S.L.P Km 420, Col. .",
     "lat": 22.1340855,
     "lng": -100.935154
  },
  {
     "marca": "PEMEX",
     "direccion": "Emiliano Zapata 115, Col. La Libertad",
     "lat": 22.124724,
     "lng": -100.916213
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Rio Verde # 2204, Col. Fraccionamiento Los Gomez",
     "lat": 22.154916,
     "lng": -100.899823
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Vecinal Asf San Pablo-Ojo de Agua de Solano Km. 3.700, Col. ",
     "lat": 22.00329,
     "lng": -100.0982
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Nal. Mexico Laredo Km. 12 Tramo Mante El Abr, Col. .",
     "lat": 22.628562,
     "lng": -99.023061
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Libre Victoria- Tula Km.85, Col. Sc",
     "lat": 23.30809,
     "lng": -99.557072
  },
  {
     "marca": "PEMEX",
     "direccion": "Lib. Emilio Portes Gil, Col. 7 de Noviembre",
     "lat": 23.714759,
     "lng": -99.177883
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Jose Lopez Portillo No. 1016, Col. Guadalupe Mainero",
     "lat": 23.728403,
     "lng": -99.144081
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Carrera Torres Esq. Articulo 123 # 2240, Col. Zona Centro",
     "lat": 23.73565,
     "lng": -99.13301
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Victoria-Matamoros Km 1, Col. S/D",
     "lat": 23.7409013207142,
     "lng": -99.132862583992
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard la Paz No. 445, Col. La Paz",
     "lat": 23.747809,
     "lng": -99.12038
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lic. Miguel de la Madrid Hurtado, Col. Mision Del Campanario",
     "lat": 21.932459,
     "lng": -102.321502
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Independencia 1839-D, Col. Trojes de Alonso",
     "lat": 21.91797,
     "lng": -102.297278
  },
  {
     "marca": "PEMEX",
     "direccion": "General Barragan No. 457 y 459, Col. Centro",
     "lat": 21.8894321786227,
     "lng": -102.288993025795
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Heroe Inmortal No. 1501, Col. Fracc. Mision de Santa Lucia",
     "lat": 21.8460871040919,
     "lng": -102.269510330025
  },
  {
     "marca": "PEMEX",
     "direccion": "Bernabe Ballesteros Numero 124, Col. Villa de Nuestra Sra. de la Ascuncion",
     "lat": 21.924706,
     "lng": -102.26287
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Siglo Xxi No. 6401, Col. Solidaridad",
     "lat": 21.8671183750937,
     "lng": -102.243991618385
  },
  {
     "marca": "PEMEX",
     "direccion": "Entronque Carret. Ojuelos-San Felipe, Col. .",
     "lat": 21.654049,
     "lng": -101.473798
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada de Guadalupe # 4500, Col. Satelite",
     "lat": 22.109835,
     "lng": -100.960663
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Pozos # 201, Col. Fracc. San Francisco de Los Pozos",
     "lat": 22.09586,
     "lng": -100.869551
  },
  {
     "marca": "PEMEX",
     "direccion": "Km-377-740 Carretera Mexico, Piedras Negras, Col. No",
     "lat": 21.80767,
     "lng": -100.72455
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Nacional y Enrique Rebsamen Num.1002, Col. .",
     "lat": 21.366269,
     "lng": -98.228047
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Salvador Diaz Miron S/N, Col. S/C",
     "lat": 22.045747,
     "lng": -98.19103
  },
  {
     "marca": "PEMEX",
     "direccion": "Alheli No. 212, Col. Matillas de Congregacion Anahuac",
     "lat": 22.20613,
     "lng": -97.85083
  },
  {
     "marca": "PEMEX",
     "direccion": "Heriberto Jara # 1028, Col. Rodriguez",
     "lat": 22.22171,
     "lng": -97.88766
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo # 702 Esq. Torreon, Col. Campbell",
     "lat": 22.22684,
     "lng": -97.865133
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Fed. Tres Huastecas Km. 25.9, Col. .",
     "lat": 21.174121,
     "lng": -98.600975
  },
  {
     "marca": "PEMEX",
     "direccion": "Gonzalez Ortega No. 60, Col. Juarez",
     "lat": 21.2738472222222,
     "lng": -98.3709027777778
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 139 Carr. Tuxpan-Tampico, Col. .",
     "lat": 21.526189,
     "lng": -98.382174
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Alazan-Canoas Km 1300 Tramo Panuco-Tempoal, Col. .",
     "lat": 21.897046,
     "lng": -98.306601
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Tampico-Valles Km.57, Col. S/C",
     "lat": 22.217497,
     "lng": -98.377789
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Ramon Martin Huerta No. 1824, Col. Centro",
     "lat": 21.279075,
     "lng": -102.293656
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Hidalgo No 269, Col. Independencia",
     "lat": 21.577859,
     "lng": -102.240693
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Lagos Aguascalientes Km. 1 Esq. Div. Norte, Col. Cuesta Blanca",
     "lat": 21.362801,
     "lng": -101.940081
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Norte Km 3.5, Col. El Salitre",
     "lat": 21.37987,
     "lng": -101.92376
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Lagos-San Luis Potosi Km. 15.6, Col. S/C",
     "lat": 21.474993,
     "lng": -101.788206
  },
  {
     "marca": "PEMEX",
     "direccion": "Hierro No. 301, Col. San Joseobrero",
     "lat": 21.141231,
     "lng": -101.702231
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Hidalgo No. 501, Esq. Andres Mellado, Col. Los Reyes",
     "lat": 21.138344,
     "lng": -101.676514
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvr. Agustin Tellez Cruces Num. 3001, Col. Deportiva Ii",
     "lat": 21.1506962,
     "lng": -101.6430273
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Jose Maria Morelos Oriente No. 102, Col. El Peluchan",
     "lat": 21.172682,
     "lng": -101.663706
  },
  {
     "marca": "PEMEX",
     "direccion": "Victoria y Carret.  a Guadalajara, Col. .",
     "lat": 21.860857,
     "lng": -101.593362
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Vicente Valtierra Esq. Porto Alegre 2101, Col. La Carmona",
     "lat": 21.131326,
     "lng": -101.660794
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Vicente Valtierra No. 3708, Col. Congregacion de San Pedro de Los Her",
     "lat": 21.127539,
     "lng": -101.644577
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Jose Maria Morelos # 4360, Col. Fracc. San Pedro",
     "lat": 21.110499,
     "lng": -101.625286
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Francisco Villa Num. 1322-1324-1326-1328, Col. Santo Domingo Seccion 11",
     "lat": 21.089538,
     "lng": -101.66533
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Mariano Escobedo Num. 4702, Col. Jardines de Jerez",
     "lat": 21.103617,
     "lng": -101.641155
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Delta Num. 202, Col. Fraccionamiento Industrial Delta",
     "lat": 21.088678,
     "lng": -101.622673
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Oleoducto # 101, Col. Ciudad Industrial",
     "lat": 21.077213,
     "lng": -101.680536
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Mariano Escobedo No. 700, Col. San Nicolas",
     "lat": 21.111541,
     "lng": -101.676461
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel de Cervantes Saavedra Num. 102, Col. Lomas de Arbide",
     "lat": 21.124461,
     "lng": -101.705984
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Francia Num. 507, Col. Los Paraisos",
     "lat": 21.137629,
     "lng": -101.690403
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. San Luis de la Paz-Victoria Km 18, Col. S/D",
     "lat": 21.217207,
     "lng": -100.230714
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 69 Jalpan-Rioverde Km.99+200, Col. Maria Del Rosario",
     "lat": 21.87409,
     "lng": -99.97285
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Carlos Jonguitud Barrios No.110, Col. .",
     "lat": 21.922869,
     "lng": -99.994869
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.12 Carretera Rio Verde-San Luis, Col. .",
     "lat": 21.93292,
     "lng": -100.02767
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico Laredo Km. 175.66, Col. Centro",
     "lat": 20.9778,
     "lng": -99.2128
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.San Juan Del Rio-Xilitla No. 29 Km.210, Col. Loc. la Lagunita",
     "lat": 21.2449000051008,
     "lng": -99.2615735853195
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Valles-Slp Km 31+500 Mg-Sur Cruc. de Rasco, Col. .",
     "lat": 21.925105,
     "lng": -99.226212
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico Sur S/N, Col. Hidalgo",
     "lat": 21.977911,
     "lng": -99.004489
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Lazaro Cardenas Del Rio #413, Col. Cuauhtemoc",
     "lat": 21.992778,
     "lng": -99.030417
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cd. Valles-El Naranjo Km. 37+500, Col. Ejido la Hincada",
     "lat": 22.2118,
     "lng": -99.22935
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Juventino Rosas Num 316, Col. Centro",
     "lat": 21.02895,
     "lng": -101.8579
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Estatal Manuel Doblado  Km. 12, Col. Ejidop  San Roque",
     "lat": 21.025632,
     "lng": -101.784084
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard San Juan Bosco Num. 2326, Col. Ejido la Joya",
     "lat": 21.136854,
     "lng": -101.72337
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. la Luz Esq Blvd Vicente Valtierra No 4402, Col. Brisas Del Carmen",
     "lat": 21.110252,
     "lng": -101.601949
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Aeropuerto Pred.Rustico Sauz de Arriba #3315, Col. Ex-Hacienda",
     "lat": 21.030507,
     "lng": -101.545444
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Gustavo Diaz Ordaz No. 727, Col. Barrio de San Jose",
     "lat": 20.67281,
     "lng": -101.339828
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Dolores Hidalgo-Guanajuato # 2 Km 50+050, Col. S/D",
     "lat": 21.15487,
     "lng": -100.94453
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Queretaro- San Luis Potosi Km. 2.900, Col. San Jose Iturbide",
     "lat": 20.985449,
     "lng": -100.406223
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Noreste Km.19+700 Lado Sur, Col. No",
     "lat": 20.700111,
     "lng": -100.338864
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 6 Carrt. Ezequiel Montes-Queretaro, Col. S/D",
     "lat": 20.682433,
     "lng": -99.933881
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Constituyentes # 1200, Col. San Jose de Los Olvera",
     "lat": 20.5542355,
     "lng": -100.4209052
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. No. 57 Km 62.5 Tramo Qro-S.L.Paz, Col. S/D",
     "lat": 21.079689,
     "lng": -100.514647
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Dolores San Diego de la Union Km. 0+279, Col. Sc",
     "lat": 21.194571,
     "lng": -100.867672
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera San Luis de la Paz-Dolores Hidalgo 446, Col. Siglo Xxi",
     "lat": 21.288032,
     "lng": -100.52232
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 0+820 Carrt. Lib. San Diego de la Union, Col. S/D",
     "lat": 21.45972,
     "lng": -100.86512
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Atlapexco-Huautla Km. 114, Col. S/C",
     "lat": 21.0104142629732,
     "lng": -98.3352741693115
  },
  {
     "marca": "PEMEX",
     "direccion": "Rafael Nieto S/N, Col. Refineria",
     "lat": 21.18484,
     "lng": -97.74355
  },
  {
     "marca": "PEMEX",
     "direccion": "Justo Sierra No.7, Col. Americana",
     "lat": 21.34854,
     "lng": -97.6864
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 214 Carr. Mexico-Tuxpan, Col. No",
     "lat": 20.682128,
     "lng": -97.521024
  },
  {
     "marca": "PEMEX",
     "direccion": "Parcela 81  Z-1 P/1 Blvd. Plan de Ayala S/N, Col. San Miguel Mecatepec",
     "lat": 20.538875,
     "lng": -97.484861
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Adolfo Ruiz Cortinez # 668 Esq. 5 Ote., Col. Independencia",
     "lat": 20.56034,
     "lng": -97.442997
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.22 Carret. Fresnillo Valparaiso., Col. Col. Guanajuato.",
     "lat": 23.140953,
     "lng": -103.038197
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Panamericana-Fresnillo Sombrerete Km.122+135, Col. S/C",
     "lat": 23.57936,
     "lng": -103.27347
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.62.4 Carr.A Torreon, Col. .",
     "lat": 23.835206,
     "lng": -103.052549
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Panamericana Km. 162.5, Col. S/C",
     "lat": 23.63885,
     "lng": -103.64306
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard 4 Culturas Km 79.5, Col. Pob. San Fco. Del Mezquital",
     "lat": 23.482028,
     "lng": -104.38731
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Vicente Guerrero Villa Union Km. 9, Col. Pob. Gabriel Hernandez",
     "lat": 23.8245257022048,
     "lng": -103.998244321426
  },
  {
     "marca": "PEMEX",
     "direccion": "Av  J Cruz Gomez y 5 de Mayo, Col. .",
     "lat": 24.189949,
     "lng": -103.627962
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Dr.Jesus Varela Rico No.124 Esq.Daniel Peralt, Col. Industrial",
     "lat": 23.184116,
     "lng": -102.884815
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Plateros No. 1031, Col. Arboledas",
     "lat": 23.196271,
     "lng": -102.858347
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. 45 Panamericana Km 700, Col. S/C",
     "lat": 23.024835,
     "lng": -102.757876
  },
  {
     "marca": "PEMEX",
     "direccion": "Vialidad Arroyo de la Plata No. 77, Col. Zona Industrial",
     "lat": 22.74377,
     "lng": -102.505692
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Reyes Heroles No. 602, Col. .",
     "lat": 22.755041,
     "lng": -102.573511
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fresnillo a Zacatecas No. 508, Col. S/C",
     "lat": 22.770463,
     "lng": -102.61165
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Federal 45 Tramo Zac-Fresnillo Km. 10.914, Col. S/C",
     "lat": 22.826591,
     "lng": -102.624718
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Zacatecas No. 110, Col. Mexico 2a Seccion",
     "lat": 23.278022,
     "lng": -102.33645
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel de la Madrid No. 986, Col. ",
     "lat": 21.937822,
     "lng": -102.324827
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard la Guayana - Loreto No 170, Col. Macario J. Gomez",
     "lat": 21.98016,
     "lng": -102.257471
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Panam. Km. 613, Col. .",
     "lat": 22.560257,
     "lng": -102.252101
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Juan Pablo Ii No 1100, Col. La Secadora",
     "lat": 21.863487,
     "lng": -102.335276
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de la Convencion de 1914 Pte. No. 410, Col. Circunvalacion Pte.",
     "lat": 21.873492,
     "lng": -102.31216
  },
  {
     "marca": "PEMEX",
     "direccion": "Heroes de Nacozari Sur Num 704, Col. .",
     "lat": 21.877006,
     "lng": -102.281166
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. San Gabriel No.123, Col. Fracc. Ojo Caliente Tercera Seccion",
     "lat": 21.87279,
     "lng": -102.24612
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Int. Km.51,Crucero de Yago No.5 Sur,Capomal, Col. .",
     "lat": 21.834344,
     "lng": -105.117048
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Tijuana No. 281 Ote., Col. Tijuanita",
     "lat": 21.953309,
     "lng": -105.122983
  },
  {
     "marca": "PEMEX",
     "direccion": "Durango y Mina, Col. .",
     "lat": 22.396983,
     "lng": -105.464007
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Intern.Mexico-Nogales Km.1042, Col. .",
     "lat": 22.490517,
     "lng": -105.385305
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tlaltenango-Guadalajara Km. 1, Col. Sin Colonia",
     "lat": 21.620469,
     "lng": -103.041162
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Insurgentes # 84 Sur, Col. Progreso",
     "lat": 21.68768,
     "lng": -104.08012
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.1 Carr. Atolinga-Tlaltenango, Col. .",
     "lat": 21.799176,
     "lng": -103.297178
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Saltillo-Guadalajara Km.190, Col. .",
     "lat": 21.8658474598199,
     "lng": -102.909045196434
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Zacatecas-Tlaltenango Km 99, Col. S/D",
     "lat": 22.113822,
     "lng": -103.254739
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 52.5 Carrt. Jerez-Tepetongo, Col. S/D",
     "lat": 22.430672,
     "lng": -103.508674
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Zacatecas Tepetongo Ent. Malpaso Tr. Tepetong Km. 255.800, Col. ",
     "lat": 22.63628,
     "lng": -102.9988
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Cinco Sur No.1, Col. Parque Industrial",
     "lat": 21.543125,
     "lng": -105.292997
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. la Presa-Leandro B. Flores Km 2 # 201, Col. Leandro B. Flores",
     "lat": 21.78453,
     "lng": -105.17939
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Praxedis Guerrero No.128 Sur, Esq.Av.Insurge, Col. Emiliano Zapata",
     "lat": 21.514578,
     "lng": -104.909324
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Mexico No. 788, Col. San Jose",
     "lat": 21.5222928557708,
     "lng": -104.886900008598
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tepic-Jacocotan Km 23+430, Col. S/D",
     "lat": 21.49516,
     "lng": -105.08258
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Mexico Esq. Con Insurgentes S/N, Col. Centro",
     "lat": 21.504306,
     "lng": -104.894297
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Luis Donaldo Colosio No. 280, Col. Luis Donaldo Colosio",
     "lat": 21.509994101147,
     "lng": -104.880764711639
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Luis Donaldo Colosio Murrieta S/N, Col. Fracc. Gobierno Del Cambio Ii",
     "lat": 21.488336,
     "lng": -104.85556
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Tepic-Aguamilpa No. 1140, Col. Fraccionamiento Vistas de la Cantera",
     "lat": 21.492092,
     "lng": -104.830676
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Encarnacion de Diaz-San Juan de Lagos Km 10, Col. Loc. Encarnacion de Diaz",
     "lat": 21.42043,
     "lng": -102.25504
  },
  {
     "marca": "PEMEX",
     "direccion": "Agustin Rivera No. 27 y 41, Col. Sc",
     "lat": 21.755524,
     "lng": -102.024484
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.22 Carr. Ags-Ojuelos Entroq.Carr.A Sn.Bartolo, Col. .",
     "lat": 21.820473,
     "lng": -102.100177
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Mahatma Gandhi No 402-A, Col. Prados de Villasuncion",
     "lat": 21.847868,
     "lng": -102.293484
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. las Garzas No. 20, Col. Fraccionamiento Garza Rosas",
     "lat": 21.03086,
     "lng": -105.25569
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. # 200 Tepic-Puerto Vallarta Km 67+900, Col. S/D",
     "lat": 21.19652,
     "lng": -105.09382
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Tepic Xalisco # 26 Nte., Col. Nuevo Progreso",
     "lat": 21.460559,
     "lng": -104.892965
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tepic-Guadalajara # 5245, Col. S/D",
     "lat": 21.467073,
     "lng": -104.837692
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Tepic- Guadalajara  Km. 155, Col. Sc",
     "lat": 21.061208,
     "lng": -104.519563
  },
  {
     "marca": "PEMEX",
     "direccion": "Juarez # 105, Col. La Pinera",
     "lat": 21.01569,
     "lng": -103.72052
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal #23 Tramo Jerez-Guadalajara Km 175, Col. S/C",
     "lat": 21.5213700958573,
     "lng": -103.405197609787
  },
  {
     "marca": "PEMEX",
     "direccion": "Salida Carr Aguascalientes, Col. .",
     "lat": 21.18877,
     "lng": -102.885321
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 39 de la Carret. Teocaltiche-Yahualica, Col. .",
     "lat": 21.406099,
     "lng": -102.707337
  },
  {
     "marca": "PEMEX",
     "direccion": "Hidalgo 447 Carr. Jaramillo-Teocaltiche Km. 1, Col. .",
     "lat": 21.445168,
     "lng": -102.573483
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 4 Carret. Jalostotitlan-San Juan C.Teocaltiche, Col. .",
     "lat": 21.199529,
     "lng": -102.442817
  },
  {
     "marca": "PEMEX",
     "direccion": "Circunvalacion y Puerto Melaque, Col. .",
     "lat": 20.693308,
     "lng": -103.322345
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Independencia No. 1777, 1782 y 1791, Col. Independencia",
     "lat": 20.701883,
     "lng": -103.327777
  },
  {
     "marca": "PEMEX",
     "direccion": "Eutimio Pinzon No. 845, Col. Flores Magon",
     "lat": 20.717081,
     "lng": -103.328853
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Av. Federalismo Norte No. 1710, Col. Quinta Federalismo",
     "lat": 20.735139,
     "lng": -103.350269
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tercer Mundo No. 458 Oriente, Col. San Francisco",
     "lat": 20.895011,
     "lng": -105.4069638
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tepic Puerto Vallarta No. 1273 Sur, Col. Residencial Flamingos",
     "lat": 20.748951,
     "lng": -105.315963
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tepic No.1508 Sur, Col. Las Parotas",
     "lat": 20.710723,
     "lng": -105.275955
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. San Vicente No. 500, Col. San Vicente",
     "lat": 20.745688,
     "lng": -105.255825
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Pto. Vallarta-Las Palmas Km 12.5, Col. S/D",
     "lat": 20.7032303601514,
     "lng": -105.232062245369
  },
  {
     "marca": "PEMEX",
     "direccion": "20 de Noviembre # 327 Sur, Col. Sin Colonia",
     "lat": 20.80677,
     "lng": -105.19333
  },
  {
     "marca": "PEMEX",
     "direccion": "Mar Negro No. 1460, Col. Lomas Del Country",
     "lat": 20.701912,
     "lng": -103.366008
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tesistan No. 519, Col. San Francisco",
     "lat": 20.7265181901538,
     "lng": -103.39977558532
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.5.0 Carr.Zapopan-Tesistan  y Dr. Angel Leaño, Col. .",
     "lat": 20.748146,
     "lng": -103.416149
  },
  {
     "marca": "PEMEX",
     "direccion": "Basilio Badillo No. 930, Col. La Huerta",
     "lat": 20.685727,
     "lng": -103.310045
  },
  {
     "marca": "PEMEX",
     "direccion": "Pablo Valdez No. 3602 y 3608, Col. San Joaquin",
     "lat": 20.673728,
     "lng": -103.282533
  },
  {
     "marca": "PEMEX",
     "direccion": "Anillo Periferico No. 4123, Col. Jalisco",
     "lat": 20.686578,
     "lng": -103.25973
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Independencia Oriente No. 1130, Col. Deleg. Palos Altos",
     "lat": 20.873516,
     "lng": -103.1409
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas No. 5 Esq. Javier Mina, Col. S/D",
     "lat": 20.778179,
     "lng": -103.692045
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalajara - Tepic No. 9835, Col. La Venta Del Astillero",
     "lat": 20.729419,
     "lng": -103.5315
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Tesistan No. 8920, Col. Tesistan",
     "lat": 20.788564,
     "lng": -103.471782
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tepeyac # 5030, Col. Jardines de Tepeyac",
     "lat": 20.6556421178433,
     "lng": -103.423835559525
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Patria Esq. Con Sebastian Bach # 209, Col. Prados de Guadalupe",
     "lat": 20.6722217950089,
     "lng": -103.423204478504
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Manuel Gomez Morin No. 2553, Col. San Juan de Ocotan",
     "lat": 20.705323,
     "lng": -103.448547
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a la Base Aerea # 330 M-3,L-Fracc. C y B, Col. Fracc. Jardines de Nuevo Mexico",
     "lat": 20.760815,
     "lng": -103.43997
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tepeyac No. 4296, Col. Prados Tepeyac",
     "lat": 20.65885556,
     "lng": -103.4130083
  },
  {
     "marca": "PEMEX",
     "direccion": "Fernando Celada No 175, Col. Vallarta Norte",
     "lat": 20.67469,
     "lng": -103.388293
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de las Americas # 452 y Juan Alvarez, Col. Ladron de Guevara",
     "lat": 20.685428,
     "lng": -103.373249
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Niqos Heroes No. 1580, Col. Moderna",
     "lat": 20.667265,
     "lng": -103.360821
  },
  {
     "marca": "PEMEX",
     "direccion": "Hidalgo y Mezquitan, Col. .",
     "lat": 20.677038,
     "lng": -103.353559
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Jesus Gonzalez Gallo Num.301, Col. San Carlos",
     "lat": 20.6571047851688,
     "lng": -103.342888076057
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Independencia Norte No. 860, Col. Sector Libertad",
     "lat": 20.687158,
     "lng": -103.334805
  },
  {
     "marca": "PEMEX",
     "direccion": "Industria No. 755, Col. Belisario Dominguez",
     "lat": 20.679082,
     "lng": -103.326625
  },
  {
     "marca": "PEMEX",
     "direccion": "Chamizal No.505 Esq. Con la Av. Revolucion, Col. .-",
     "lat": 20.647622,
     "lng": -103.306081
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. a Zapotlanejo No.85, Col. Fracc. Comercial y de Serv.Camichines",
     "lat": 20.626352,
     "lng": -103.291685
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Patria Norte No. 2140-A, Col. Real Patria",
     "lat": 20.6405857992441,
     "lng": -103.282277542328
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolong. Avenida Gigantes No. 340, Col. Loma Bonita",
     "lat": 20.65851944,
     "lng": -103.2526944
  },
  {
     "marca": "PEMEX",
     "direccion": "Batalla de Celaya Num. 3340, Col. Fracc. Residencial El Tapatio",
     "lat": 20.61555,
     "lng": -103.3205
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Gobernador Luis G.Curiel No. 2980, Col. Zona Industrial",
     "lat": 20.62907,
     "lng": -103.349367
  },
  {
     "marca": "PEMEX",
     "direccion": "Gobernador Curiel No. 2177 y 2163, Col. Ferrocarril",
     "lat": 20.644644,
     "lng": -103.352248
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz.G.Gonzalez Nu.1000 Sector Reforma, Col. Sector Reforma",
     "lat": 20.651926,
     "lng": -103.337481
  },
  {
     "marca": "PEMEX",
     "direccion": "Anillo Periferico Sur Num. 7596, Col. Arroyo de las Flores",
     "lat": 20.59675,
     "lng": -103.3903
  },
  {
     "marca": "PEMEX",
     "direccion": "Sierra de Tapalpa Esq.Av.18 de Marzo No.1545, Col. Las Aguilas",
     "lat": 20.628399,
     "lng": -103.409924
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Colon Num.2776, Col. Jardines de la Cruz",
     "lat": 20.640394,
     "lng": -103.375585
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Rio Nilo No. 7551, Col. Lomas de la Soledad",
     "lat": 20.633231,
     "lng": -103.270022
  },
  {
     "marca": "PEMEX",
     "direccion": "Emiliano Zapata No. 420, Col. Loma Dorada",
     "lat": 20.6264619589155,
     "lng": -103.251339101852
  },
  {
     "marca": "PEMEX",
     "direccion": "Marcos Arana No. 6, Col. La Ladrillera",
     "lat": 20.58529,
     "lng": -103.2218
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino a Matatlan, Av.Ninos Heroes #375 Km. 10.200, Col. ",
     "lat": 20.69527778,
     "lng": -103.1472222
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Acueducto No. 3507, Col. Toluquilla",
     "lat": 20.566197,
     "lng": -103.365151
  },
  {
     "marca": "PEMEX",
     "direccion": "Antigua Carretera a Chapala # 6627, Col. Las Pintas",
     "lat": 20.573338,
     "lng": -103.332653
  },
  {
     "marca": "PEMEX",
     "direccion": "Colonos No. 3519, Col. Hacienda San Pedro",
     "lat": 20.608834,
     "lng": -103.314881
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera El Verde-San Martin Km 00001, Col. Lomas de San Martin",
     "lat": 20.5624499621206,
     "lng": -103.283406516533
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Adolph B.Horn Jr. 1800, Col. Ejido Toluquilla",
     "lat": 20.550419,
     "lng": -103.356722
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Solidaridad Iberoamericana # 7969, Col. San Jose Del Quince",
     "lat": 20.539591,
     "lng": -103.296631
  },
  {
     "marca": "PEMEX",
     "direccion": "K.6.5 Del Corredor Indust.El Salto Ex-Hacienda El, Col. .",
     "lat": 20.542342,
     "lng": -103.262488
  },
  {
     "marca": "PEMEX",
     "direccion": "Nuevo Trazo Periferico Km 10.100, Col. S/C",
     "lat": 20.53433889,
     "lng": -103.2326
  },
  {
     "marca": "PEMEX",
     "direccion": "Revolucion No. 8, Col. Villa Corona",
     "lat": 20.4154129450619,
     "lng": -103.668548169312
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 19 Carretera a San Isidro Mazatepec No. 798, Col. Santa Cruz de las Flores",
     "lat": 20.485437,
     "lng": -103.510277
  },
  {
     "marca": "PEMEX",
     "direccion": "Lopez Mateos Sur S/N, Col. Santa Anita",
     "lat": 20.558631,
     "lng": -103.463504
  },
  {
     "marca": "PEMEX",
     "direccion": "Antiguo Camino Real a Colima # 549-A, Col. Los Gavilanes",
     "lat": 20.563303,
     "lng": -103.447291
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Aldama No. 70, Col. Santa Anita",
     "lat": 20.55017,
     "lng": -103.4389
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lopez Mateos Sur No. 2955, Col. Agua Blanca",
     "lat": 20.606871,
     "lng": -103.431491
  },
  {
     "marca": "PEMEX",
     "direccion": "Lopez Mateos No. 6000, Col. Fracc. las Fuentes",
     "lat": 20.623264,
     "lng": -103.421789
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Michoacan No.1, Col. .-",
     "lat": 20.376626,
     "lng": -102.93015
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Irapuato Guadalajara Km. 181.14 S/N, Col. Morales Ochoa",
     "lat": 20.561826,
     "lng": -102.742296
  },
  {
     "marca": "PEMEX",
     "direccion": "J. Jesus de la Torre Num. 520-A, Col. Tierras Coloradas",
     "lat": 20.733486,
     "lng": -102.862858
  },
  {
     "marca": "PEMEX",
     "direccion": "Sr. Cura Salvador Zuniga Sur Num. 23, Col. S/C",
     "lat": 20.80032,
     "lng": -102.7393
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 39  Carretera Zapotlanejo - Lagos de Moreno, Col. Tepatitlan de Morelos",
     "lat": 20.815445,
     "lng": -102.802352
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera No. 80 Guadalajara - Lagos de Moreno2555, Col. .",
     "lat": 20.85014,
     "lng": -102.73614
  },
  {
     "marca": "PEMEX",
     "direccion": "Javir Mina # 451, Col. El Refugio",
     "lat": 20.81704,
     "lng": -102.58845
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Mexico-Guadalajara y Calz. Est. Ff.Cc., Col. .-",
     "lat": 20.547387,
     "lng": -102.511565
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 11 Carrt. Atotonilco-Ayotlan # 100, Col. S/C",
     "lat": 20.56788,
     "lng": -102.42386
  },
  {
     "marca": "PEMEX",
     "direccion": "Rosales Num. 396, Col. Milpillas de Abajo",
     "lat": 20.673558,
     "lng": -102.319033
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Leon - Aguascalientes Km. 21.290, Col. ",
     "lat": 21.13551,
     "lng": -101.9999
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tlajomulco - San Miguel No. 1500, Col. Fracc. San Diego",
     "lat": 20.42978,
     "lng": -103.407115
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Constitucion # 105, Col. Centro",
     "lat": 20.471674,
     "lng": -103.441954
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera San Sebastian Tlajomulco No. 1255, Col. San Sebastian El Grande",
     "lat": 20.521844,
     "lng": -103.422298
  },
  {
     "marca": "PEMEX",
     "direccion": "Independencia No.120 Esq.Calle Colima, Col. .",
     "lat": 20.390074,
     "lng": -104.821951
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 14.4 de la Carret. San Clemente-Ayutla, Col. .",
     "lat": 20.1202055985028,
     "lng": -104.335677914017
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 40 Carret. El Refugio-San Marcos, Col. .",
     "lat": 20.770294,
     "lng": -104.080159
  },
  {
     "marca": "PEMEX",
     "direccion": "Dr. Olivo No. 95 Carretera Guadalajara-San Marcos, Col. No",
     "lat": 20.704778,
     "lng": -103.970154
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalajara - Barra de Navidad Km- 37+10, Col. Sc",
     "lat": 20.38051,
     "lng": -103.849794
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Internacional # 580, Col. El Maluaste",
     "lat": 20.87439,
     "lng": -103.80552
  },
  {
     "marca": "PEMEX",
     "direccion": "Lib. Carretera Epenche-La Cofradia No. 1000, Col. .",
     "lat": 19.9331202347243,
     "lng": -103.038955103302
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Chapala-Jocotepec No.269, Col. San Juan Cosala",
     "lat": 20.288796,
     "lng": -103.346519
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Chapala - Guadalajara No. Exterior 1000, Col. Brisas de Chapala",
     "lat": 20.315535,
     "lng": -103.19469
  },
  {
     "marca": "PEMEX",
     "direccion": "Ejidal Emiliano Zapata Num.10, Col. Potrero El Pandillo Manzana Num.12",
     "lat": 20.432014,
     "lng": -103.296503
  },
  {
     "marca": "PEMEX",
     "direccion": "Salinas de Gortari No.75y21 de Marzo Carr.B.Navida, Col. .",
     "lat": 19.87043,
     "lng": -105.336768
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de las Palmas No. 107, Col. Barrio Santa Maria",
     "lat": 20.62714,
     "lng": -105.2228
  },
  {
     "marca": "PEMEX",
     "direccion": "Prisciliano Sanchez S/N, Col. Vallarta  750",
     "lat": 20.654897,
     "lng": -105.229477
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Mexico No. 1484 y 1476, Col. Fracc. Villas Universidad",
     "lat": 20.677769,
     "lng": -105.225824
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Lazaro Cardenas Sur No. 750, Col. -",
     "lat": 20.277304,
     "lng": -102.557119
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Jacona-Los Reyes Km 27, Col. S/C",
     "lat": 19.843998,
     "lng": -102.479931
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Zamora-La Barca Km. 27, Col. .",
     "lat": 20.16992,
     "lng": -102.384858
  },
  {
     "marca": "PEMEX",
     "direccion": "5 de Mayo #699, Col. El Duero",
     "lat": 19.975155,
     "lng": -102.284787
  },
  {
     "marca": "PEMEX",
     "direccion": "Queretaro # 26 Esq.Ave. Malecon Del Rio, Col. Mexico",
     "lat": 20.351185,
     "lng": -102.024987
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Morelia-Jiquilpan Km.191.5, Col. .",
     "lat": 19.98185,
     "lng": -102.612591
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Lazara Cardenas Sur y Esq. Matamoros, Col. Centro",
     "lat": 20.055573,
     "lng": -102.716573
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 3 Carrt. Jamay-La Barca, Col. .",
     "lat": 20.29387,
     "lng": -102.672779
  },
  {
     "marca": "PEMEX",
     "direccion": "Manuel Enriquez # 686, Col. Centro",
     "lat": 20.355241,
     "lng": -102.769055
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Carretero Cd.Guzman y El Grullo Sector, Col. .",
     "lat": 19.804713,
     "lng": -104.204373
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Manuel Avila Camacho Ote. No 98, Col. .",
     "lat": 19.883351,
     "lng": -103.598145
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. 54 Autopista Gudalajara-Colima Km. 63.5 S/N, Col. Sin Colonia",
     "lat": 19.89297,
     "lng": -103.5212
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Cd.Guzman-Autlan No.50, Col. .",
     "lat": 19.778379,
     "lng": -103.975401
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Ciudad Guzman - Autlan Km. 3.5, Col. Sc",
     "lat": 19.667131,
     "lng": -103.485706
  },
  {
     "marca": "PEMEX",
     "direccion": "Gral. Ramon Corona No. 512, Col. Centro",
     "lat": 19.693131,
     "lng": -103.464728
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.12 Carr. Atenquique Tamazula, Col. .",
     "lat": 19.554959,
     "lng": -103.38946
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Jiquilpan - Colima Km. 86, Col. Sc",
     "lat": 19.7378,
     "lng": -103.1922
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida J. Merced Cabrera No. 369, Col. San Carlos",
     "lat": 19.2684,
     "lng": -103.74323
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Maria Ahumada de Gomez N 40, Col. La Frontera",
     "lat": 19.271148,
     "lng": -103.732803
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ignacio Sandoval Num. 1670, Col. Real Vista Hermosa Ii",
     "lat": 19.258346,
     "lng": -103.707785
  },
  {
     "marca": "PEMEX",
     "direccion": "Melchor Ocampo # 69, Col. Cd. Cuauhtemoc",
     "lat": 19.325616,
     "lng": -103.602608
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pablo Silva Garcia Num.929, Col. Los Olivos",
     "lat": 19.2452023536454,
     "lng": -103.757690635582
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ninos Heroes No. 55, Col. Rancho Santo",
     "lat": 19.253925,
     "lng": -103.744175
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida San Fernando Num. 175, Col. Guadalajarita",
     "lat": 19.249865,
     "lng": -103.719024
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Niqos Heroes Num. 1490, Col. Vicente Guerrero",
     "lat": 19.235751,
     "lng": -103.694433
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de la Revolucion No.3500, Col. Zumpimito",
     "lat": 19.373192,
     "lng": -102.05801
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 10+100 Carret. Uruapan-San Juan Nuevo, Col. Felix Ireta",
     "lat": 19.412298,
     "lng": -102.115721
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Benito Juarez No. 1000, Esq. Juan Delgado, Col. Barrio de San Miguel",
     "lat": 19.427949,
     "lng": -102.061328
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tepalcatepec-Coalcoman Km 13.8, Col. S/D",
     "lat": 19.07998,
     "lng": -102.88536
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Buenavista-Tomatlan Km 2.5, Col. S/D",
     "lat": 19.23409,
     "lng": -102.58387
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Jacona-Los Reyes Km 57, Col. San Rafael",
     "lat": 19.62069,
     "lng": -102.4867
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Playa Azul-Manzanillo 307+500, Col. El Colomo",
     "lat": 19.035492,
     "lng": -104.210928
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Miguel de la Madrid Hurtado # 384, Col. Tapeixtles",
     "lat": 19.074094,
     "lng": -104.284093
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Elias Zamora Verduzco S/N, Col. Las Garzas",
     "lat": 19.090594,
     "lng": -104.29896
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Elias Zamora Verduzco No. 2128, Col. Ejido Salagua",
     "lat": 19.11446,
     "lng": -104.32358
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de las Rosas S/N, Col. Abelardo L. Rodriguez",
     "lat": 19.132512,
     "lng": -104.342741
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Federal No. 80 Santa Cruz Melaque Km.258+200, Col. .",
     "lat": 19.239247,
     "lng": -104.709645
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Casimiro Castillo #501-1, Col. S/C",
     "lat": 19.61142,
     "lng": -104.45064
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Colima-Manzanillo Km 43+100, Col. S/D",
     "lat": 18.943618,
     "lng": -103.922339
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle El Real Esquina Con Canal Amela S/N, Col. San Francisco Javier",
     "lat": 18.906485,
     "lng": -103.877492
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Colima Manzanillo Km. 31.7, Col. S/C",
     "lat": 19.00297,
     "lng": -103.83562
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 40 Carrt. Tecoman-Playa Azul, Col. S/D",
     "lat": 18.674958,
     "lng": -103.680943
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Arandas 2142, Col. Lo de Juarez",
     "lat": 20.708501,
     "lng": -101.365283
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Queretaro-Leon Km.125.980, Col. .",
     "lat": 20.788413,
     "lng": -101.329444
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico-Cd.Juarez Tramo Qro.-Leon Km 140, Col. Sin Colonia",
     "lat": 20.897929,
     "lng": -101.364196
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Miguel Hidalgo Num. 110, Col. Centro",
     "lat": 20.947228,
     "lng": -101.434912
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Villas de Irapuato 2839, Col. Ejido San Jose de Jorge Lopez",
     "lat": 20.684773,
     "lng": -101.392368
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote No. 29 de la Mzna.11 Fracc.Residen.Campestre, Col. Recidencial Campestre",
     "lat": 20.680863,
     "lng": -101.36742
  },
  {
     "marca": "PEMEX",
     "direccion": "Guerrero 1240, Col. Centro",
     "lat": 20.682507,
     "lng": -101.353352
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Nororiente No.- 7541 Carretera Federal, Col. Km. 7",
     "lat": 20.703256,
     "lng": -101.32155
  },
  {
     "marca": "PEMEX",
     "direccion": "Vialidad Neutla Comonfort 10, Col. ",
     "lat": 20.70815,
     "lng": -100.8349
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Celaya-Comonfort Km 17+700, Col. S/C",
     "lat": 20.699001,
     "lng": -100.752694
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Mompani # 30, Col. La Pena C.T.M.",
     "lat": 20.643069,
     "lng": -100.459702
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Queretaro-San Luis Potosi Km 21.3, Col. Loc. Santa Rosa Jauregui",
     "lat": 20.753085,
     "lng": -100.44424
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pie de la Cuesta No. 1620, Col. Desarrollo Urbano Centro Norte",
     "lat": 20.640485,
     "lng": -100.405313
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Monterrey #902, Col. San Jose El Alto",
     "lat": 20.654037,
     "lng": -100.381507
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Queretaro San Luis Potosi Km. 30+000, Col. Sc",
     "lat": 20.832152,
     "lng": -100.440664
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida 5 de Febrero No. 418, Col. San Pablo",
     "lat": 20.61093,
     "lng": -100.418863
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Universidad Pte. No. 192, Col. La Era",
     "lat": 20.596465,
     "lng": -100.402648
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Universidad Oriente #337-A, Col. Las Brujas",
     "lat": 20.60106,
     "lng": -100.38114
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cueramaro-Abasolo Entq. Tupataro Km 23.7, Col. S/D",
     "lat": 20.606182,
     "lng": -101.646817
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Irapuato-Abasolo No. 3930, Col. Purisimadel Jardin",
     "lat": 20.645143,
     "lng": -101.378036
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Queretaro-Leon Tramo Lib. Norte de Irapuato Km. 7.653, Col. ",
     "lat": 20.65216,
     "lng": -101.3587
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Solidaridad # 6828, Col. Fraccionamiento Los Olivos",
     "lat": 20.662328,
     "lng": -101.315831
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Salamanca-Irapuato Km. 98+200, Col. 4to. Fraccionamiento Rancho Crucita",
     "lat": 20.59519,
     "lng": -101.234392
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Libre a Celaya Km. 12 350, Col. Ejido de Los Angeles",
     "lat": 20.534252,
     "lng": -100.496687
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Queretaro-Irapuato Km. 4.319, Col. ",
     "lat": 20.57619,
     "lng": -100.444
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Mompani # 1875, Col. Mision Del Carrillo Iii",
     "lat": 20.64179,
     "lng": -100.4784
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. de las Ciencias # 3010, Col. Fracc. Juriquilla",
     "lat": 20.696392,
     "lng": -100.439798
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Constituyentes  No. 1449, Col. El Pueblito",
     "lat": 20.541676,
     "lng": -100.430849
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Al Tlacote # 101, Col. Fracc.Galindas",
     "lat": 20.58596,
     "lng": -100.413218
  },
  {
     "marca": "PEMEX",
     "direccion": "Cerro Viejo No. 4, Col. Vista Alegre",
     "lat": 20.575687,
     "lng": -100.386285
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Bernardo Quintana Arrioja Sur No. 431, Col. Desarrollo Zona Centro Sur",
     "lat": 20.5759496237667,
     "lng": -100.360427212303
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Al Aeropuerto Municipal No. 501, Col. Ejido Cd. de Celaya",
     "lat": 20.517317,
     "lng": -100.895407
  },
  {
     "marca": "PEMEX",
     "direccion": "Eje Nor-Poniente Manuel J. Clouthier # 681, Col. Los Naranjos",
     "lat": 20.549337,
     "lng": -100.841005
  },
  {
     "marca": "PEMEX",
     "direccion": "Eje Norponiente No. 400, Col. Fracc. la Capilla",
     "lat": 20.5544116792087,
     "lng": -100.834487119049
  },
  {
     "marca": "PEMEX",
     "direccion": "Constituyentes Oriente No. 208, Col. Centro",
     "lat": 20.510003,
     "lng": -100.81337
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Irrigacion 156 Esq. Presa Alvaro Obregon, Col. Benito Juarez Zona 1",
     "lat": 20.53688,
     "lng": -100.8043
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Queretaro-Irapuato Km. 40.600, Col. ",
     "lat": 20.553948328821,
     "lng": -100.778851177597
  },
  {
     "marca": "PEMEX",
     "direccion": "Jose Maria Morelos No. 1400, Col. Barrio de San Roque",
     "lat": 20.577345,
     "lng": -101.215339
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Faja de Oro # 803, Col. Centro",
     "lat": 20.579328,
     "lng": -101.205378
  },
  {
     "marca": "PEMEX",
     "direccion": "Libr. Sur Carr.Valle de Santiago-Celaya Km.3+200, Col. Ejido la Cal",
     "lat": 20.544099,
     "lng": -101.18754
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Miguel Hidalgo No. 1919, Col. Barrio San Juan de la Presa",
     "lat": 20.5632,
     "lng": -101.179
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Guanajuato No. 103, Col. .",
     "lat": 20.642824,
     "lng": -100.983749
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Queretaro-Huimilpan Km 17.5, Col. Lagunillas",
     "lat": 20.467677,
     "lng": -100.30061
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico - Queretaro Km. 193, Col. No",
     "lat": 20.56388,
     "lng": -100.240468
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Panamericana # 123, Col. Estrella",
     "lat": 20.494497,
     "lng": -100.136636
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Canal de Santa Clara # 12, Col. Centro",
     "lat": 20.394825,
     "lng": -100.012074
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Estatal Ezequiel Montes - Villa Progreso, Col. No. 131  Km. 2",
     "lat": 20.657483,
     "lng": -99.879217
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Atotonilco-Encarnacion de Diaz # 2002, Col. S/C",
     "lat": 20.87473,
     "lng": -102.38877
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Jesus Maria-Ayotlan S/N., Col. Los Pocitos",
     "lat": 20.604133,
     "lng": -102.220116
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Juan Pablo Ii No. 265, Col. Obrera",
     "lat": 20.352482,
     "lng": -102.033623
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Purisima de Bustos-Manuel Doblado Km. 24.2, Col. S/C",
     "lat": 20.870817,
     "lng": -101.987397
  },
  {
     "marca": "PEMEX",
     "direccion": "Aldama No.48, Col. Centro",
     "lat": 20.426362,
     "lng": -101.723299
  },
  {
     "marca": "PEMEX",
     "direccion": "Manuel Doblado No.700, Col. Zona Centro",
     "lat": 20.515823,
     "lng": -101.000569
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Celaya-Salvatierra Km 8.2 Fracc.Parcela, Col. Sc",
     "lat": 20.435245,
     "lng": -100.795711
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolong. Fidel Angel Ramirez # 1003, Col. El Cerrito",
     "lat": 20.298845,
     "lng": -100.749678
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Queretaro-Celaya Km. 28.5, Col. .",
     "lat": 20.463428,
     "lng": -100.628395
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Abasolo Pastor Ortiz Km. 7.3, Col. Ojo de Agua Municipio de Abasolo.",
     "lat": 20.390873,
     "lng": -101.57823
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Mariano Abasolo Km 2.1, Col. Los Pinos",
     "lat": 20.460221,
     "lng": -101.512322
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Labor de Valtierra-Pueblo Nuevo Km. 15, Col. Sc",
     "lat": 20.480603,
     "lng": -101.346046
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Valle de Santiago-Guarapo Km. 2, Col. .",
     "lat": 20.393632,
     "lng": -101.213463
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.29 Carr.Estancia a Amealco, Col. .",
     "lat": 20.196905,
     "lng": -100.150842
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Miguel Hidalgo No.181 Esq.Luis Romero Soto, Col. Centro",
     "lat": 20.377465,
     "lng": -99.998853
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Universidad 364, Col. Banthi",
     "lat": 20.387976,
     "lng": -99.949551
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 23+300 Carretera San Juan Del Rio Xilitla, Col. S/C",
     "lat": 20.545551,
     "lng": -99.902655
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico -Queretaro Km. 119, Col. Sc",
     "lat": 20.1301418898299,
     "lng": -99.7275892969589
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Lazaro Cardenas Sur # 939, Col. ",
     "lat": 20.04465,
     "lng": -102.7169
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Zamora-Jacona #845, Col. Centro",
     "lat": 19.971544,
     "lng": -102.296646
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. a Brise¬As Km 5, Col. La Florida",
     "lat": 20.033389,
     "lng": -102.2776
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Federal No.15 Tramo Morelia-Zamora Km. 137, Col. S/C",
     "lat": 19.936921,
     "lng": -102.240264
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 36 Carretera la Piedad-Carapan, Col. Los Angeles",
     "lat": 20.141727,
     "lng": -102.067688
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Puruandiro-Zinaparo Km. 51+571, Col. .",
     "lat": 20.1096816820423,
     "lng": -101.9371662864
  },
  {
     "marca": "PEMEX",
     "direccion": "Entrq. Carret. Salvatierra-Acambaro-Yuriria No 100, Col. .",
     "lat": 20.216731,
     "lng": -100.895267
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Morelia-Maravatio Km. 49.65, Col. Santa Clara de Tule",
     "lat": 19.81907,
     "lng": -100.82789
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Maravatio-Zapotlanejo Km. 202+650, Col. Sin Colonia",
     "lat": 19.90187,
     "lng": -100.792372
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Acambaro-Morelia No. 9, Col. Everardo Morales",
     "lat": 20.00397,
     "lng": -100.7303
  },
  {
     "marca": "PEMEX",
     "direccion": "Acambaro-Jerecuaro S/N Km 4, Col. S/C",
     "lat": 20.061074,
     "lng": -100.691494
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 3 Carret. Jerecuaro-Apaseo El Alto, Col. .",
     "lat": 20.172171,
     "lng": -100.51079
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Maravatio-El Oro Km-1, Col. .",
     "lat": 19.89139,
     "lng": -100.43594
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Nal. Morelia-Salamanca # 11000, Col. S/D",
     "lat": 19.788594,
     "lng": -101.158862
  },
  {
     "marca": "PEMEX",
     "direccion": "Vasco de Quiroga 2, Col. .",
     "lat": 20.018017,
     "lng": -101.034578
  },
  {
     "marca": "PEMEX",
     "direccion": "Morelos No. 90, Col. .",
     "lat": 20.13503,
     "lng": -101.179268
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Salvatierra-Yuriria Km. 21, Col. .",
     "lat": 20.215989,
     "lng": -101.081939
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Revolucion No. 39, Col. Centro",
     "lat": 20.397266,
     "lng": -101.184235
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 399+400 Carr. Mexico-Guadalajara, Col. ,",
     "lat": 19.81322,
     "lng": -101.79706
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Zacapu Coeneo Km. 11+500, Col. S/C",
     "lat": 19.822403,
     "lng": -101.684676
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cuitzeo-Puruandiro Km 37+550, Col. S/C",
     "lat": 20.00003,
     "lng": -101.4294
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos Norte No. 4900, Col. Fracc. Los Angeles",
     "lat": 19.741053,
     "lng": -101.17616
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Madero Poniente # 5082, Col. Tinijaro",
     "lat": 19.697559,
     "lng": -101.257817
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Paseo de la Republica Noroeste 5433, Col. Wenceslao Victoria Soto",
     "lat": 19.718574,
     "lng": -101.227993
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Independencia No. 3503, Col. Santillan la Huerta",
     "lat": 19.675668,
     "lng": -101.218368
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Independencia No. 8719, Col. Fuentes de Morelia",
     "lat": 19.673854,
     "lng": -101.204646
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Norte No. 300, Col. Francisco J. Mujica",
     "lat": 19.722936,
     "lng": -101.190341
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Oriente # 770, Col. Canteras",
     "lat": 19.715702,
     "lng": -101.17211
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Morelia-Aeropuerto No.1100, Col. Tres Marias",
     "lat": 19.730931,
     "lng": -101.114584
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Nueva España No.727, Col. Insurgentes",
     "lat": 19.69937,
     "lng": -101.1543
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fed. Mexico .- Michoacan Km.-148+705, Col. Sc",
     "lat": 19.6981774950171,
     "lng": -100.607177186508
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos # 173-B, Col. El Calicanto",
     "lat": 19.68364,
     "lng": -100.54438
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Isidro Fabela Sur No. 600, Col. San Martin",
     "lat": 19.78615,
     "lng": -99.86644
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. 470 Tlanepantla-San Gabriel-Atlacomulco Km. 3.300, Col. ",
     "lat": 19.78174,
     "lng": -99.8389
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Toluca-Atlacomulco Km. 32, Col. Barrio San Pedro",
     "lat": 19.566253,
     "lng": -99.76132
  },
  {
     "marca": "PEMEX",
     "direccion": "Barrio de Hidalgo, Col. .",
     "lat": 19.88562,
     "lng": -99.72698
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Jilotepec-Ixtlahuaca S/N, Col. Ejido de Jilotepec",
     "lat": 19.91766,
     "lng": -99.59727
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tonanitla S/N, Col. Ejido Santa María Tonanitla",
     "lat": 19.682745659954,
     "lng": -99.0428410970322
  },
  {
     "marca": "PEMEX",
     "direccion": "Benito Juarez S/N, Col. .",
     "lat": 19.94851,
     "lng": -100.16633
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.118+050 Carr.Conc.Atlacomulcto-Maravatio Sta.M., Col. .",
     "lat": 19.8563886051348,
     "lng": -100.042099306313
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Jose Maria Morelos y Pavon S/N, Col. S/C",
     "lat": 19.727367,
     "lng": -99.944923
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Arturo Montiel Rojas No. 1045, Col. Las Mercedes",
     "lat": 19.790667,
     "lng": -99.890612
  },
  {
     "marca": "PEMEX",
     "direccion": "Ejido de Santa Juana Seccion Primera S/N Km. 18.500, Col. ",
     "lat": 19.43491,
     "lng": -99.73783
  },
  {
     "marca": "PEMEX",
     "direccion": "Vialidad Toluca-Naucalpan No. 732, Col. San Mateo Otzacatipan",
     "lat": 19.330653,
     "lng": -99.613116
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Toluca-Temoaya # 119 Km 18.5, Col. Molino Abajo",
     "lat": 19.456078,
     "lng": -99.599187
  },
  {
     "marca": "PEMEX",
     "direccion": "El Gran Canal No. 623 Villa Cuauhtemoc, Col. Sin Colonia",
     "lat": 19.4208,
     "lng": -99.5619
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Cinco No. 1-A, Col. Fracc. Alce Blanco",
     "lat": 19.4712418105099,
     "lng": -99.2236446441803
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Transp.Cond.Rojo,Lts.Juno,Dos,Tres,Cuatro.N.15, Col. Alvaro Obregon",
     "lat": 19.3731283561017,
     "lng": -99.0403768134918
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 16 de Septiembre No. 113, Col. .",
     "lat": 19.289502,
     "lng": -99.733939
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Al Pacifico # 101, Col. S/D",
     "lat": 19.257026,
     "lng": -99.702484
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Solidaridad las Torres No. 2005, Col. San Mateo Oxtotitlan",
     "lat": 19.276885,
     "lng": -99.686473
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Venustiano Carranza No. 400 Ote., Col. Universidad",
     "lat": 19.27884,
     "lng": -99.6516
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Zacan - San Jose de la Palma Km 3 + 972, Col. S/C",
     "lat": 19.5988794538,
     "lng": -102.474570529
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Juarez y 5 de Mayo S/N, Col. La Magdalena",
     "lat": 19.41369,
     "lng": -102.0595
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada la Fuente No. 2819, Col. Rancho Del Padre",
     "lat": 19.416912,
     "lng": -102.033662
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Uruapan Patzcuaro No. 3550, Col. Toreo El Bajo",
     "lat": 19.437944,
     "lng": -102.01412
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Uruapan-Ziracuaretiro Km 16.2, Col. Loc. Ziracuaretiro",
     "lat": 19.416475,
     "lng": -101.928378
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Toluca-Temascaltepec Km. 14.500, Col. ",
     "lat": 19.23067,
     "lng": -99.78075
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jose Maria Luis Mora Numero 148, Col. Ocho Cedros",
     "lat": 19.257084,
     "lng": -99.667098
  },
  {
     "marca": "PEMEX",
     "direccion": "Heriberto Enriquez No. 1010, Col. Azteca",
     "lat": 19.264243,
     "lng": -99.645503
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 5 de Mayo Esq. Av. de las Torres, Col. San Francisco Coaxusco",
     "lat": 19.27201,
     "lng": -99.630966
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Calimaya-San Andres Ocotlan No. 37, Col. Residencial Rancho El Meson",
     "lat": 19.18346,
     "lng": -99.58539
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 2 Carretera Tacambaro-Patzcuaro, Col. .",
     "lat": 19.246555,
     "lng": -101.465608
  },
  {
     "marca": "PEMEX",
     "direccion": "Balcones Del Lago #67, Col. Ejido Patzcuaro",
     "lat": 19.497367,
     "lng": -101.600104
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Patzcuaro-Morelia Km 45, Col. S/C",
     "lat": 19.53695,
     "lng": -101.53495
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 1 Carrt. Erongaricuaro-Patzcuaro, Col. S/C",
     "lat": 19.57997,
     "lng": -101.72109
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.0+900 Carr.A Luvianos Entronque Tejupilco-, Col. .",
     "lat": 18.92134,
     "lng": -100.29002
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 5.2 Carretera las Casitas-Villa de Allende S/N, Col. Barrio de Sta. Ma. de las Delicias",
     "lat": 19.39191,
     "lng": -100.15086
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 67 Carretera Toluca-Temascaltepec, Col. .",
     "lat": 19.04648,
     "lng": -100.05323
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Toluca-Zitacuaro Km 17.5, Col. Paraje Yukon",
     "lat": 19.358155,
     "lng": -99.803114
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Francisco I. Madero Num. 1240, Col. Las Delicias",
     "lat": 19.113944,
     "lng": -102.37596
  },
  {
     "marca": "PEMEX",
     "direccion": "Cornelio Ortiz de Zarate # 394, Col. Centro",
     "lat": 19.08366,
     "lng": -102.3525
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 20 Carret. Apatzingan-Cuatro Caminos, Col. .",
     "lat": 18.998595,
     "lng": -102.205597
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.23 Carretera la Huacana-Nueva Italia, Col. Sin Colonia",
     "lat": 18.884509,
     "lng": -101.985172
  },
  {
     "marca": "PEMEX",
     "direccion": "Benito Juarez No.315, Col. Primera de San Miguel",
     "lat": 18.928513,
     "lng": -99.768798
  },
  {
     "marca": "PEMEX",
     "direccion": "Corredor Urbano Villa Guerrero San Fco. la Finca # 40, Col. San Francisco",
     "lat": 18.9433,
     "lng": -99.6473
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de Los Insurgentes Lotes 12-13-14, Col. Fraccionamiento San Diego",
     "lat": 18.9715,
     "lng": -99.5863
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Joquicingo - El Capulin 101, Col. Paraje la Desviacion",
     "lat": 19.047322,
     "lng": -99.541984
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Chinameca-Tepalcingo # 15, Col. Chinameca",
     "lat": 18.62763,
     "lng": -99.003
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Zapata-Zacatepec Esq Camino San Jose No. 84, Col. Atlacholoaya",
     "lat": 18.749711,
     "lng": -99.203086
  },
  {
     "marca": "PEMEX",
     "direccion": "Cruce Carrt.  Tezoyuca-Zapata, Col. .",
     "lat": 18.802668,
     "lng": -99.197881
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. No Reeleccion Num. 385, Col. San Francisco",
     "lat": 18.850367,
     "lng": -99.179083
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos Sur No. 68, Col. Quintana Roo",
     "lat": 18.89969,
     "lng": -99.23087
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tlahuac No. 7081, Col. San Francisco Tlaltenco",
     "lat": 19.2898487365255,
     "lng": -99.0155775434113
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 172 Carrt. Zitacuaro-Huetamo S/N, Col. S/C",
     "lat": 18.65182,
     "lng": -100.89749
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion Sur No. 365, Col. El Moral",
     "lat": 19.42848,
     "lng": -100.34578
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Zitacuaro-Morelia Km 101.9, Col. Valle Verde",
     "lat": 19.4754,
     "lng": -100.35195
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Cd. Altamirano-San Lucas Km.1.5, Col. Vicente Riva Palacio",
     "lat": 18.3773277777778,
     "lng": -100.669047222222
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt.Iguala-Cd. Altamirano Km.145 Margen Derecho, Col. .",
     "lat": 18.365333,
     "lng": -100.271907
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 61+700  Carret. Iguala-Cd. Altamirano, Col. .",
     "lat": 18.36265,
     "lng": -99.85603
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Nal. Mexico-Acapulco Km. 158+500, Col. Los Arcos",
     "lat": 18.568405,
     "lng": -99.603458
  },
  {
     "marca": "PEMEX",
     "direccion": "Tramo Carretero Acalpican D Morelos-Colima # 200, Col. Sin Colonia",
     "lat": 18.076917,
     "lng": -102.74485
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 3.2 Libram. Lazaro Cardenas-La Orilla No. 4179, Col. Ejido Guacamayas",
     "lat": 17.974011,
     "lng": -102.234431
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Melchor Ocampo No.77 y Privada de las Estrellas, Col. .",
     "lat": 17.961169,
     "lng": -102.213007
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Morelos No. 42-A Esq. Calle Manuel Buendia 2do., Col. Centro",
     "lat": 17.963671,
     "lng": -102.203577
  },
  {
     "marca": "PEMEX",
     "direccion": "Galeana Num. 42 Esq. Francisco Javier Mina, Col. Centro",
     "lat": 18.31384,
     "lng": -101.73656
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de las Salinas Lt 3 Mza 1 Supermanzana Ii, Col. Fracc. las Salinas",
     "lat": 17.6393166238347,
     "lng": -101.563699280764
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 204 Carrt. Nacional Acapulcp-Zihuatanejo, Col. .",
     "lat": 17.534591660375,
     "lng": -101.264521136246
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Nal.Acapulco-Zihuatanejo Km.106+040 # 2, Col. Las Tunas",
     "lat": 17.23701,
     "lng": -100.63008
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Rey Irepan # 1138, Col. El Canalito",
     "lat": 18.3431861111111,
     "lng": -100.653044444444
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. M Aleman # 292 Esq. Calle Tadeo Arredondo V., Col. .",
     "lat": 16.854013,
     "lng": -99.900195
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ejido Lote 15 Mza Cuarta, Col. Santa Cruz",
     "lat": 16.86193,
     "lng": -99.91426
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Nacional Acapulco-Zihuatanejo Km 11+410 S/N, Col. Pie de la Cuesta",
     "lat": 16.90377,
     "lng": -99.961665
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 0.5 Carret. Ajuchitlan-Cd. Altamirano, Col. .",
     "lat": 18.161684,
     "lng": -100.504988
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cayaco-Puerto Marques No. 208, Col. Ejidos Cayaco O Coacoyular",
     "lat": 16.83136,
     "lng": -99.81325
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc # 1610, Col. Fracc. Marroquin",
     "lat": 16.8646355180237,
     "lng": -99.8789272037048
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Lazaro Cardenas 864, Col. Las Cruces",
     "lat": 16.885194,
     "lng": -99.836726
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Chilpancingo Acapulco Km.50, Col. El Reten",
     "lat": 16.918998,
     "lng": -99.817098
  },
  {
     "marca": "PEMEX",
     "direccion": "Parcela # 1579 Carrt. Pachuca-Tula Ejido Tetepango, Col. Rojo Gomez",
     "lat": 20.09808,
     "lng": -99.138788
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mixquiahuala Tlahuelilpan Km.5 S/N, Col. Cinta Larga",
     "lat": 20.18159,
     "lng": -99.227035
  },
  {
     "marca": "PEMEX",
     "direccion": "Tito Estrada # 14, Col. Centro",
     "lat": 20.246274,
     "lng": -99.18757
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Pachuca-Cd.Valles.Km.72+150.Lad.derec.Insurg.119, Col. Fitzhi",
     "lat": 20.47522,
     "lng": -99.21201
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Tula-Iturbe No. 118-B-Tulipanes, Col. Salitre",
     "lat": 20.058273,
     "lng": -99.334631
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tula-Tepetitlan Km 11+500, Col. Gral. Pedro Ma. Anaya",
     "lat": 20.154563,
     "lng": -99.353647
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote Agricola No.2359 S/No., Col. Comunidad Del Espiritu",
     "lat": 20.42649,
     "lng": -99.35248
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Mexico-Laredo Desviacion Zimapan S/N Mg-Der, Col. Loc. Zimapan",
     "lat": 20.72623,
     "lng": -99.36987
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Pachuca -Cd. Sahagun Km 12+110 Cuerpo A, Col. Santa Maria la Calera",
     "lat": 20.025203,
     "lng": -98.725053
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Everardo Marquez Km. 3.47 Lote 13-C, Col. Parque Industrial Canacintra",
     "lat": 20.06806,
     "lng": -98.74478
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Pachuca-Tulancingo Km 1+500 No. 100, Col. Abundio Martinez",
     "lat": 20.101823,
     "lng": -98.718903
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Luis Donaldo Colosio # 1501, Col. S/D",
     "lat": 20.098024,
     "lng": -98.761544
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Juarez No. 22, Col. Centro",
     "lat": 19.955163,
     "lng": -98.917735
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Pachuca Km80.270 Parc.55z1 P2/4 #4406, Col. San Antonio El Desmonte",
     "lat": 20.041871,
     "lng": -98.795234
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Nuevo Hidalgo # 902, Col. Rancho la Colonia",
     "lat": 20.055715,
     "lng": -98.780648
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico Queretaro Km. 48.000 S-N Mza 204, Col. Barrio San Sebastian",
     "lat": 19.760475,
     "lng": -99.215855
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera San Juan Zitlaltepec S/N, Col. Lazaro Cardenas",
     "lat": 19.8238,
     "lng": -99.1217
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tula-Jorobas Numero 250 Km. 20.000, Col. ",
     "lat": 19.89034,
     "lng": -99.23959
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Juarez Sur 27, Col. .",
     "lat": 19.968451,
     "lng": -99.17396
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico - Queretaro Km. 89+500 Km. 89.500, Col. ",
     "lat": 20.03824,
     "lng": -99.56584
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Soyaniquilpan-Jilotepec No. 1, Col. El Chiquinte",
     "lat": 20.007195,
     "lng": -99.523727
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tula-Tepeji # 86, Col. La Pila de San Lucas Teacalco",
     "lat": 19.981764,
     "lng": -99.344444
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Nacional # 147, Col. San Lorenzo",
     "lat": 20.044356,
     "lng": -99.334703
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino a San Pablo #111, Col. Texcaltitla",
     "lat": 19.681416,
     "lng": -98.977227
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico Pachuca Km. 44.50, Col. San Pedro Potzohuacan",
     "lat": 19.762813,
     "lng": -98.973819
  },
  {
     "marca": "PEMEX",
     "direccion": "Eje Norte Sur # 1 Mnz Iii Lope 1, Col. Zona Industrial",
     "lat": 19.826417,
     "lng": -98.977012
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Juarez Norte No. 111, Col. Cuztitla",
     "lat": 19.8507844566595,
     "lng": -98.9749784282417
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. la Joya # 3 Lote 2, Col. Barrio San Jose Milla",
     "lat": 19.661399,
     "lng": -99.170568
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de la Esmeralda Norte Mz 8 Lot. 1a #1, Col. Joyas de Cuautitlan",
     "lat": 19.68496,
     "lng": -99.148963
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Zumpango a Cuautitlan 80, Col. Barrio de Santiago Primera Seccion",
     "lat": 19.794117,
     "lng": -99.082138
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Morelos No. 1, Col. Tlaltepan",
     "lat": 19.669917,
     "lng": -99.175522
  },
  {
     "marca": "PEMEX",
     "direccion": "Aut.Mex-Qro.Km.43.5 Cd.de Mexico a Tepozotlan a Cc, Col. Tepotzotlan Mex.",
     "lat": 19.709586,
     "lng": -99.207004
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Ozumbilla No. 185, Mz. 25, Lt. 1 Seccion Jardines, Col. Conjunto Urbano Los Heroes Tecamac",
     "lat": 19.6356039081715,
     "lng": -99.0274786949431
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Central Lote A-4 Mz. S/N, Col. Santa  Cruz Venta de Carpio",
     "lat": 19.618712,
     "lng": -99.004938
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 34.5 Carret. Libre Mexico-Teotihuacan, Col. .",
     "lat": 19.616544,
     "lng": -98.936456
  },
  {
     "marca": "PEMEX",
     "direccion": "Alcanfores Nº. 150, Col. Lazaro Cardenas",
     "lat": 19.624099,
     "lng": -99.156934
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lopez Portillo # 37, Col. S/D",
     "lat": 19.635024,
     "lng": -99.114418
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Lopez Portillo Esq. Eje 8 S/N, Col. Santa Maria Magdalena",
     "lat": 19.632203,
     "lng": -99.091401
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Juarez No. 51, Col. Centro",
     "lat": 19.5581412664093,
     "lng": -99.2448623978249
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Lago de Guadalupe Mza. 8 Lt-1 No. 495, Col. Bosques de Ixtacala",
     "lat": 19.610225,
     "lng": -99.240448
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Insurgentes Esq.Calle Manuel Acuña, Col. Bo. Texcacoa",
     "lat": 19.712002,
     "lng": -99.216238
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. El Tesoro No. 15, Esq. Calle Oro, Col. El Tesoro",
     "lat": 19.598473,
     "lng": -99.16474
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Lopez Portillo No. 5, Col. Recursos Hidraulicos",
     "lat": 19.619065,
     "lng": -99.172311
  },
  {
     "marca": "PEMEX",
     "direccion": "Jorge Jimenez Cantu Esq. Temoaya, Col. .",
     "lat": 19.651935,
     "lng": -99.205223
  },
  {
     "marca": "PEMEX",
     "direccion": "Gomez Farias No. 222, Col. Gavillero",
     "lat": 19.625572,
     "lng": -99.336184
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Arturo Montiel Rojas No. 800, Lote 04, Col. Loma de la Cruz",
     "lat": 19.613904,
     "lng": -99.285251
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Ignacio Zaragoza No. 185, Col. Lomas de las Torres",
     "lat": 19.592989,
     "lng": -99.25842
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Lecheria-Texcoco Mz.139,Lt.3, Col. Ejidos de San Cristobal",
     "lat": 19.61271,
     "lng": -99.056178
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos No. 300, Col. Tulpetlac",
     "lat": 19.559411,
     "lng": -99.047746
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 30-30 (Av. Revolucion) No. 46, Esq. U.P., Col. .",
     "lat": 19.602078,
     "lng": -99.041347
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Central, No. 140, Col. Ciudad Azteca, 1a. Seccion",
     "lat": 19.54076,
     "lng": -99.025612
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Palomas, Esquina Alondras No. 56, Col. Llano de Los Baez",
     "lat": 19.611156,
     "lng": -99.020266
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida de las Bombas S/N, Col. San Isidro Atlautenco",
     "lat": 19.607547,
     "lng": -98.995076
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Manuel A.Camacho 810 Sobre Perif de Nte a Sur, Col. Sta.Cruz Acatlan",
     "lat": 19.4845814141931,
     "lng": -99.2362935276127
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Gustavo Baz # 2000, Col. Industrial Tlalnepantla",
     "lat": 19.5441035739942,
     "lng": -99.2066486147499
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jesus Reyes Heroles # 20, Col. Tabla Honda",
     "lat": 19.550565,
     "lng": -99.183516
  },
  {
     "marca": "PEMEX",
     "direccion": "Iguala No. 1, Col. San Lucas Patoni",
     "lat": 19.539541,
     "lng": -99.154615
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt Mex-Zacatepec Tramo Los Reyes Tex Km 15+700, Col. Montecillos",
     "lat": 19.464235,
     "lng": -98.895225
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Estatal Cd. Sahagun-Emiliano Zapata Km. 14.500, Col. ",
     "lat": 19.66583,
     "lng": -98.55053
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Texcoco-Lecheria Km 27, Col. San Fco. Acuexcomac",
     "lat": 19.557893,
     "lng": -98.911038
  },
  {
     "marca": "PEMEX",
     "direccion": "Mexico-Tulancingo-Otumba, Limites Mexico-Hidalgo Km. 23.500, Col. ",
     "lat": 19.7066531699838,
     "lng": -98.7745946111145
  },
  {
     "marca": "PEMEX",
     "direccion": "Jose J Herrera y Av Del Trabajo  Mexico No 110, Col. Morelos",
     "lat": 19.438475,
     "lng": -99.119196
  },
  {
     "marca": "PEMEX",
     "direccion": "Labradores No. 102, Col. Morelos",
     "lat": 19.443285,
     "lng": -99.117224
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.510 No.340, Col. San Juan de Aragon",
     "lat": 19.465042,
     "lng": -99.084139
  },
  {
     "marca": "PEMEX",
     "direccion": "Montevideo No. 2, Esquina Calzada de Los Misterios, Col. Tepeyac Insurgentes",
     "lat": 19.484987,
     "lng": -99.118946
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Pachuca Km. 11.5 Fraccion 1,2 Sn.Jos, Col. Pueblo de San Jose Ixhuatepec",
     "lat": 19.521641,
     "lng": -99.092855
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos # 46, Col. San Pedro Xalostoc",
     "lat": 19.532111,
     "lng": -99.072311
  },
  {
     "marca": "PEMEX",
     "direccion": "Lago Argentina No. 7, Col. Argentina",
     "lat": 19.457874,
     "lng": -99.200492
  },
  {
     "marca": "PEMEX",
     "direccion": "Mar Mediterraneo y Okostsk, Col. Tacuba",
     "lat": 19.459924,
     "lng": -99.186953
  },
  {
     "marca": "PEMEX",
     "direccion": "Bahia de Santa Barbara 182, Col. Veronica Anzures",
     "lat": 19.4348622380297,
     "lng": -99.1718256736107
  },
  {
     "marca": "PEMEX",
     "direccion": "Ricardo Flores Magon No. 226, Col. Guerrero",
     "lat": 19.453545,
     "lng": -99.150441
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de Los 100 Metros # 230, Col. Defensores de la Republica",
     "lat": 19.474703,
     "lng": -99.139502
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.47 Carr.Toluca-San Bartolo Naucalpan,Edo.Mex., Col. .",
     "lat": 19.40027,
     "lng": -99.52801
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Gustavo Baz No. 175, Col. Lomas de San Agustin",
     "lat": 19.459865,
     "lng": -99.254876
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Adolfo Lopez Mateos Esq. Blvd. Alamedas, Col. Atizapan de Zaragoza",
     "lat": 19.551345,
     "lng": -99.240714
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Queretaro #2247, Col. Plazas de la Colina",
     "lat": 19.520427,
     "lng": -99.22886
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Toluca No. 9, Col. San Francisco Cuautlalpan",
     "lat": 19.46465,
     "lng": -99.218765
  },
  {
     "marca": "PEMEX",
     "direccion": "Observatorio y Ex-Arzobispado N0 198, Col. Daniel Garza",
     "lat": 19.403495,
     "lng": -99.197075
  },
  {
     "marca": "PEMEX",
     "direccion": "Chapultepec y Veracruz No. 2, Col. Hipodromo de la Condesa",
     "lat": 19.420302,
     "lng": -99.176236
  },
  {
     "marca": "PEMEX",
     "direccion": "Coyoacan, Providencia y Xola, Col. Del Valle",
     "lat": 19.397094,
     "lng": -99.167293
  },
  {
     "marca": "PEMEX",
     "direccion": "Yucatan No. 155 Esq. Jalapa, Col. Roma",
     "lat": 19.41204,
     "lng": -99.159874
  },
  {
     "marca": "PEMEX",
     "direccion": "Dr. Vertiz No. 640, Col. Vertiz",
     "lat": 19.397567,
     "lng": -99.150577
  },
  {
     "marca": "PEMEX",
     "direccion": "Eje Central Lazaro Cardenas # 15, Col. Doctores",
     "lat": 19.422002,
     "lng": -99.14363
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pantitlan #276, Col. Porfirio Diaz",
     "lat": 19.402376,
     "lng": -99.033694
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Nezahualcoyotl No. 569, Col. Tamaulipas",
     "lat": 19.415565,
     "lng": -99.029653
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Virgen de Lourdes # 170, Col. Virgencitas",
     "lat": 19.424556,
     "lng": -99.032957
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Del Obrerismo, Mz. 807, Lote 1, Col. Barrio Transportistas",
     "lat": 19.436473,
     "lng": -98.974081
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Central No. 910 y Rio Los Remedios, Col. Valle de Aragon",
     "lat": 19.490003,
     "lng": -99.046403
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Carlos Hank Gonzalez No. 48, Col. Laderas Del PeºOn",
     "lat": 19.527192,
     "lng": -99.031385
  },
  {
     "marca": "PEMEX",
     "direccion": "Viga Num 44, Col. Esperanza",
     "lat": 19.421061,
     "lng": -99.127199
  },
  {
     "marca": "PEMEX",
     "direccion": "Fco Espejel E Ignacio Zaragoza, Col. Moctezuma",
     "lat": 19.42771,
     "lng": -99.110371
  },
  {
     "marca": "PEMEX",
     "direccion": "Circuito Frutas y Legumbres No. 953, Col. Barrio San Jose",
     "lat": 19.366675,
     "lng": -99.090341
  },
  {
     "marca": "PEMEX",
     "direccion": "Leyes de Reforma Esq.Calle de Tianguis,Cent.Aba., Col. .",
     "lat": 19.379838,
     "lng": -99.080959
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Canal de Tezontle 126 Esq. 22 de Diciembre 1860, Col. Leyes de Reforma",
     "lat": 19.383256,
     "lng": -99.066476
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Nueve No.86,Mz.74,Lote 26, Col. Valle de Los Reyes",
     "lat": 19.365868,
     "lng": -98.976601
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Hidalgo # 27, Col. San Sebastian Chimalpa",
     "lat": 19.3779903658893,
     "lng": -98.9513128134918
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Arca de Noe # 3 M-277,L-35 Esq.Av. Carranza, Col. San Miguel Acuitlapilco",
     "lat": 19.417234,
     "lng": -98.931008
  },
  {
     "marca": "PEMEX",
     "direccion": "Emiliano Zapata # 4, Col. Barrio San Miguel",
     "lat": 19.410809,
     "lng": -98.912329
  },
  {
     "marca": "PEMEX",
     "direccion": "Tlaxcala-Huachinango, Tramo Apizaco-Lim. Edos. Tla Km. 4.335, Col. ",
     "lat": 19.606925,
     "lng": -98.14301
  },
  {
     "marca": "PEMEX",
     "direccion": "Cerrada de Canoa # 18, Col. La Otra Banda",
     "lat": 19.333422,
     "lng": -99.202563
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Adolfo Lopez Mateos # 315, Col. San Pedro de Los Pinos",
     "lat": 19.387856,
     "lng": -99.189515
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Insurgentes Sur No. 1428, Col. Del Valle",
     "lat": 19.3699095747863,
     "lng": -99.1799919067459
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Division Del Norte No. 1231 Esq. Cuauhtemoc, Col. Vertiz Narvarte",
     "lat": 19.377921,
     "lng": -99.15914
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Division Del Norte # 2570, Col. Churubusco",
     "lat": 19.354858,
     "lng": -99.151972
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Plutarco Elias Calles # 1918, Col. Banjidal",
     "lat": 19.3598,
     "lng": -99.138918
  },
  {
     "marca": "PEMEX",
     "direccion": "Tlalpan y Retorno 816 No. 8, Col. Centinela",
     "lat": 19.336944,
     "lng": -99.14169
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz Ermita Ixtapalapa 2120, Col. Ampliacion San Miguel",
     "lat": 19.349429,
     "lng": -99.070558
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco Villa Num. 19, Col. Santa Maria Aztahuacan",
     "lat": 19.360468,
     "lng": -99.035451
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Texcoco No. 454, Col. Metropolitana 3era Seccion",
     "lat": 19.382538,
     "lng": -99.017086
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Carmelo Perez No. 13, Col. La Perla",
     "lat": 19.391144,
     "lng": -99.00138
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. San Jeronimo 914, Col. San Jeronimo Lidice",
     "lat": 19.328044,
     "lng": -99.218132
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Jesus Del Monte No. 263, Col. Jesus Del Monte",
     "lat": 19.383839,
     "lng": -99.294425
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de las Fuentes y Tritones No.36, Col. Tecamachalco",
     "lat": 19.4285588854119,
     "lng": -99.2283127896013
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Paseo Matlazincas 374, Col. Doctores",
     "lat": 19.2988305555556,
     "lng": -99.6441222222222
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Tollocan Esq. Ignacio Zaragoza # 808 y 804, Col. Santa Ana Tlapaltitlan",
     "lat": 19.2863976475071,
     "lng": -99.6291342969589
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Vicente Lombardo Toledano No. 245, Col. La Crespa, San Lorenzo T.",
     "lat": 19.306155,
     "lng": -99.611202
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Tollocan # 1371, Col. Santa Maria Totoltepec",
     "lat": 19.287505,
     "lng": -99.574391
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc Mz.167,Lt.33,No.1, Col. San Miguel Xico Iv Seccion",
     "lat": 19.26252,
     "lng": -98.95477
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Solidaridad # 21, Col. San Isidro",
     "lat": 19.289709,
     "lng": -98.918056
  },
  {
     "marca": "PEMEX",
     "direccion": "San Sebastian S/N Esquina las Torres, Col. Barrio San Antonio",
     "lat": 19.252546,
     "lng": -98.904479
  },
  {
     "marca": "PEMEX",
     "direccion": "Felipe Angeles S/N Lt. 12 Mz. 45, Col. Emiliano Zapata",
     "lat": 19.273687,
     "lng": -98.888439
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Poniente No.2, Col. San Diego Metepec",
     "lat": 19.29616,
     "lng": -98.25014
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Federal a Cuernavaca y Vicente Guerrero No.2, Col. Chimalcoyotl",
     "lat": 19.276202,
     "lng": -99.16678
  },
  {
     "marca": "PEMEX",
     "direccion": "Tlalpan y Calz Xochimilco No 4352, Col. San Lorenzo Huipulco",
     "lat": 19.297498,
     "lng": -99.151844
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. de las Bombas No. 87 Esq.Prolg. Div. Del Nte, Col. Ex Hacienda de Coapa",
     "lat": 19.308497,
     "lng": -99.132868
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Calzada Del Hueso No. 971, Col. Granjas Coapa",
     "lat": 19.299224,
     "lng": -99.107594
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I. Madero No. 369, Col. Santiago Tulyehualco",
     "lat": 19.257516,
     "lng": -99.02377
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.de las Partidas Esq.Antigua Carr.Mex-Toluca # 1, Col. Parque Industrial Lerma",
     "lat": 19.286344,
     "lng": -99.526671
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Fed. Mexico-Toluca Km 48+700, Col. Amomolulco",
     "lat": 19.2813,
     "lng": -99.4896
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico  Toluca Km. 44+800, Col. Sc",
     "lat": 19.282648,
     "lng": -99.462314
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Toluca No. 5693, Col. Cuajimalpa",
     "lat": 19.3546461018815,
     "lng": -99.293349583415
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Stgo. Tianguistengo-Chapultepec, Col. San Bartolito Tlaltelolco",
     "lat": 19.193683,
     "lng": -99.537796
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Estado de Mexico # 433 Ote., Col. Barrio de Santiaguito",
     "lat": 19.250669,
     "lng": -99.590193
  },
  {
     "marca": "PEMEX",
     "direccion": "Circuito Exterior Metropolitano S/N, Col. Alvaro Obregon",
     "lat": 19.27443,
     "lng": -99.55537
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Solidaridad las Torres,Esq.Circuito Exterior Metrop, Col. Buenavista",
     "lat": 19.27818,
     "lng": -99.55502
  },
  {
     "marca": "PEMEX",
     "direccion": "16 de Septiembre No. 715 Esq. Baja Velocidad, Col. Alvaro Obregon",
     "lat": 19.285497,
     "lng": -99.556393
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos y Pavon Norte # 1406, Col. Fracionamiento El Rodeo",
     "lat": 18.93664,
     "lng": -99.24001
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Emiliano Zapata # 709, Col. Tlaltenango",
     "lat": 18.952494,
     "lng": -99.245655
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Santiago Tianguistenco-Chalma Km. 26.500, Col. ",
     "lat": 19.01014,
     "lng": -99.4032
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 20 Carretera la Marqueza-Tenango_De Valle, Col. .E",
     "lat": 19.1793,
     "lng": -99.44221
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Acapulco Km 84+330, Col. Pob. Ahuatepec",
     "lat": 18.957255,
     "lng": -99.202946
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote 8 Manzana 18 Km 7.7 Carret.Cuernavaca-Cuautla, Col. Civac",
     "lat": 18.911843,
     "lng": -99.181399
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Cuernavaca - Cuautla S/N, Col. Lomas Del Texcal",
     "lat": 18.890378,
     "lng": -99.143868
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Reforma No.173, Col. Postal",
     "lat": 18.84721,
     "lng": -98.93913
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cuautla-Axochiapan #6, Col. Barrio San Martin",
     "lat": 18.602911,
     "lng": -98.839531
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Adolfo Lopez Mateos y Calle de la Fundicion, Col. .",
     "lat": 18.552592,
     "lng": -99.267806
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Iguala Km 97.7, Col. S/C",
     "lat": 18.7253713022909,
     "lng": -99.2574124294319
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Marcelino Garcia Barragan No. 218, Col. Morelos",
     "lat": 18.861404,
     "lng": -99.239774
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Insurgentes Esq. Agua Azul S/N, Col. Manantiales",
     "lat": 18.832611,
     "lng": -98.946626
  },
  {
     "marca": "PEMEX",
     "direccion": "Lib. Cuautla Izucar de Matamoros Km 4+300, Col. Juan Morales",
     "lat": 18.819815,
     "lng": -98.919273
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Sta. Barbara -Izucar de Matamoroskm. 89+, Col. Sc",
     "lat": 18.736574,
     "lng": -98.822124
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Independencia # 55, Col. Progreso",
     "lat": 18.499076,
     "lng": -98.751102
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de Los Volcanes # 3110, Col. El Popo",
     "lat": 18.9090964324993,
     "lng": -98.451763053546
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Mercurio No.1301, Col. Ex Rancho Vaquerias",
     "lat": 19.0059506324938,
     "lng": -98.2407815042992
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd Heroes Del 5 de Mayo No. 3001, Col. Santa Maria",
     "lat": 19.0566601127461,
     "lng": -98.1931605681228
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alfredo Del Mazo 208 A-Lote 04 Mza.361, Col. Santa Cruz",
     "lat": 19.285731,
     "lng": -98.941109
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Cuauhtemoc #1601, Col. Santa Cruz Tlapacoya",
     "lat": 19.310964,
     "lng": -98.903119
  },
  {
     "marca": "PEMEX",
     "direccion": "Eje 10 Sur   No. 2, Col. Santa Catarina",
     "lat": 19.308041,
     "lng": -98.963803
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Mexico-Texcoco Km. 21.5, Col. Tecamachalco",
     "lat": 19.355077,
     "lng": -98.958218
  },
  {
     "marca": "PEMEX",
     "direccion": "Division Del Norte # 1, Col. La Piedra",
     "lat": 17.66104,
     "lng": -99.67374
  },
  {
     "marca": "PEMEX",
     "direccion": "Clzda. Del Panteon S/N Esq. Perif. Pte., Col. Guadalupe",
     "lat": 18.352607,
     "lng": -99.553554
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Nte. S/N., Col. .",
     "lat": 18.354306,
     "lng": -99.527675
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Chilapa Acatlan Km.1, Col. Valle Dorado",
     "lat": 17.60545556,
     "lng": -99.17475
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 332 Carretera Mexico-Acapulco, Col. .",
     "lat": 17.166948,
     "lng": -99.53079
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Benito Juarez #61, Col. Centro",
     "lat": 17.55944,
     "lng": -99.50612
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard_Vicente Guerrero No.543,Chilpancingo, Gr, Col. .",
     "lat": 17.516149,
     "lng": -99.481656
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt Perez Gazca Km 147+400, Col. Loc. Malpica",
     "lat": 17.00548,
     "lng": -98.90656
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Pto. Marquez Entrada Revolcadero S/N, Col. Granjas Del Marquez",
     "lat": 16.801718708337,
     "lng": -99.8224116613769
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fed.Acapulco-Pinotepanacional Km. 6 #217, Col. Cayaco",
     "lat": 16.852047,
     "lng": -99.79984
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Barra Vieja No. 446, Col. Plan de Los Amates",
     "lat": 16.744882,
     "lng": -99.755417
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada 1° de Marzo S/N, Col. S/D",
     "lat": 16.95149,
     "lng": -99.10234
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 135 Km. 120+300 Km. 120.300, Col. ",
     "lat": 17.7836833131515,
     "lng": -96.9518821441284
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Fdo. Gtz. Barrios T Calz. Ruiz Galindo #56-1, Col. S/D",
     "lat": 18.8604269031701,
     "lng": -97.0616101865082
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Adolfo Ruiz Cortines No.3305, Col. Virginia Cordero de Murillo Vidal",
     "lat": 19.5588525396066,
     "lng": -96.9321612503319
  },
  {
     "marca": "PEMEX",
     "direccion": "No. 13 Del Km.51,500 de la Carr.Poza Rica-Veracruz, Col. .",
     "lat": 20.446121,
     "lng": -97.092653
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Xalapa - Veracruz Km. 18.100, Col. Emiliano Zapata",
     "lat": 19.457806,
     "lng": -96.74688
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera las Trancas-Coatepec Km0.600, Col. ",
     "lat": 19.501885,
     "lng": -96.860456
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Europa Esq. Blvd. Porfirio Diaz No. 130, Col. El Olmo",
     "lat": 19.5175715729229,
     "lng": -96.8617402037048
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Aleman #33, Col. El Aguacatal",
     "lat": 19.542643,
     "lng": -96.920209
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas No. 817, Col. Rafael Lucio",
     "lat": 19.5583904931234,
     "lng": -96.9186702130299
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Veracruz S/N /Prolong. Agustin Iturbide y Pr, Col. Gral. Platon Sanchez",
     "lat": 19.6584985794109,
     "lng": -96.8654157582665
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 300+700 Autopista Mexico Tramo Veracruz-Cordoba, Col. S/C",
     "lat": 18.860679,
     "lng": -96.879881
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidlago S/N, Col. Benito Juarez",
     "lat": 18.977087,
     "lng": -96.727453
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Cordoba-Orizaba Km. 290*750, Col. Autopista",
     "lat": 18.887002,
     "lng": -96.964491
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 10 No. 2625, Col. Toxpam",
     "lat": 18.905411,
     "lng": -96.931654
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Papantla-Espinal, Col. .",
     "lat": 20.257514,
     "lng": -97.390122
  },
  {
     "marca": "PEMEX",
     "direccion": "Avila Camacho No. 141, Col. Centro",
     "lat": 20.4618041436584,
     "lng": -97.0825719497375
  },
  {
     "marca": "PEMEX",
     "direccion": "5 de Mayo No. 17, Col. Santiago de la Pena",
     "lat": 20.944555,
     "lng": -97.400144
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote 23 Manzana \"C\" Carrt. Tuxpan-La Barra # 33, Col. La Calzada",
     "lat": 20.958947,
     "lng": -97.340137
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal a Zaragoza No.120, Col. Barrio Del Fresnillo",
     "lat": 19.81544,
     "lng": -97.37466
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos Esq. Calle Pascual Ortiz Rubio No.190, Col. Bo. Ahuateno",
     "lat": 19.83662,
     "lng": -97.359274
  },
  {
     "marca": "PEMEX",
     "direccion": "5 de Mayo #172, Col. S/C",
     "lat": 19.801305,
     "lng": -97.30963
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 282 Carr.Mexico-Ver., Col. .-",
     "lat": 19.600203,
     "lng": -97.209954
  },
  {
     "marca": "PEMEX",
     "direccion": "Insurgentes Esquina Belisario Dominguez S/N, Col. Soledad",
     "lat": 20.05507,
     "lng": -97.05223
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 130 Carr Puebla-Nautla San Rafael, Col. Loc. San Rafael",
     "lat": 20.186619,
     "lng": -96.871652
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida 6 Poniente No. 122,, Col. Sc",
     "lat": 19.294758,
     "lng": -97.34556
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Xalapa Perote 130+300 Lado Derecho, Col. Sin Colonia",
     "lat": 19.611608,
     "lng": -97.031677
  },
  {
     "marca": "PEMEX",
     "direccion": "Zaragoza # 55 Esq. Ignacio Allende, Col. Centro",
     "lat": 19.456868,
     "lng": -96.953113
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Coatepec - las Trancas  Km. 2+000, Col. Sc",
     "lat": 19.448079,
     "lng": -96.934386
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Mex.-Tehuacan Km. 229, Col. .",
     "lat": 18.582676,
     "lng": -97.585101
  },
  {
     "marca": "PEMEX",
     "direccion": "Autop Mex-Ver Km 219+105 Cuerpo B Tramo Pue-Espera, Col. S/D",
     "lat": 18.86493,
     "lng": -97.37113
  },
  {
     "marca": "PEMEX",
     "direccion": "Rafael Tapia No. 1, Col. Santa Cruz",
     "lat": 18.80934,
     "lng": -97.17491
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol.de Sur 13/Primo de V. y T. Penafiel No. 1596, Col. Francisc Ferrer Guardia",
     "lat": 18.837579,
     "lng": -97.093727
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Prolongacion Ignacio Zaragoza S/N, Col. Tepetitlanapa",
     "lat": 18.6583519831,
     "lng": -96.9974891434
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.192+300 Tramo Puebla-Cordoba Carr.Cuota Mex.Cor, Col. .",
     "lat": 18.877089,
     "lng": -97.588052
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cd. Serdan - Tlachichuca Km. 13.760, Col. ",
     "lat": 19.11373,
     "lng": -97.41251
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cordoba-Cardel Tramo Fortin-Conejos Km. 19.787, Col. ",
     "lat": 19.0257,
     "lng": -97.02035
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol. Miguel Alvarado Esq. Pinolaco No. 134, Col. S/C",
     "lat": 20.023683,
     "lng": -97.528509
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Poza Rica-San Andres Km 5.6, Col. S/C",
     "lat": 20.485312,
     "lng": -97.458871
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Adolfo Ruiz Cortinez No. 4, Col. Division de Oriente",
     "lat": 20.517472,
     "lng": -97.469102
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Adolfo Ruiz Cortinez # 1103 Esq. Calle 1, Col. Benito Juarez",
     "lat": 20.536942,
     "lng": -97.457877
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Mexico Tuxpam Km. 213, Col. Sc",
     "lat": 20.6701507135187,
     "lng": -97.5233266514511
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrte.Internacional Mexico-Oax.Km.313.400, Col. No",
     "lat": 17.813542,
     "lng": -97.785107
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tehuacan - Huajapan de Leon Km. 64+300, Col. Sc",
     "lat": 18.195952,
     "lng": -97.680499
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Independencia No. 501, Col. San Diego Chalma",
     "lat": 18.451967,
     "lng": -97.370353
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 249 Carret. Mexico-Tehuacan San Lorenzo Teotip, Col. .",
     "lat": 18.47523,
     "lng": -97.432571
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 106.080 Carrt. Fed. Puebla-Tehuacan, Col. Jose Ma. Pino Suarez",
     "lat": 18.518680635358,
     "lng": -97.5033224748688
  },
  {
     "marca": "PEMEX",
     "direccion": "2 Oriente # 26, Col. Barrio la Virgen",
     "lat": 18.83806,
     "lng": -97.81894
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Puebla-Tehuacan Km. 52+100, Col. San Martin",
     "lat": 18.895959,
     "lng": -97.769666
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Estatal Tecali-Tepeaca Km. 3.400, Col. ",
     "lat": 18.92554,
     "lng": -97.95779
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Perez Gasga N0. 2025, Col. Guadalupe Yutee",
     "lat": 17.035981,
     "lng": -97.918704
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida a Chalcatongo No. 410, Col. Barrio San Bartolo",
     "lat": 17.263449,
     "lng": -97.665923
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Coacnopalan-Oaxaca Km. 141.300, Col. ",
     "lat": 17.75781,
     "lng": -97.44388
  },
  {
     "marca": "PEMEX",
     "direccion": "Piedras Negras S/N, Col. Ex-Hacienda Piedras Negras",
     "lat": 19.498966,
     "lng": -98.053896
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 99+932 Carrt. Oriental-Nautla, Col. .-",
     "lat": 19.599721,
     "lng": -97.616953
  },
  {
     "marca": "PEMEX",
     "direccion": "Bo. Acuaco 5a. Secc., Col. 5a  Seccion  Acuaco",
     "lat": 19.762074,
     "lng": -97.565403
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino a Mazatepec No. 1, Col. S/C",
     "lat": 19.85344,
     "lng": -97.486202
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Fed.Entronque Librto. Via Jalapa,Acatzingo, Col. .",
     "lat": 18.977325,
     "lng": -97.805359
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico Orizaba Cuerpo B No. 1308, Col. La Venta",
     "lat": 19.0316551737,
     "lng": -98.0317193014
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Amozoc-Teziutlan Km 9+650, Col. S/C",
     "lat": 19.093173,
     "lng": -97.96824
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo No. 513, Col. Centro",
     "lat": 19.313532,
     "lng": -97.930578
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.12 Carr. Huamantla-La Venta, Col. Trinidad Sanchez Santos",
     "lat": 19.217343,
     "lng": -97.914147
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Fed. Amozoc-Teziutlan Km 40+710, Col. S/C",
     "lat": 19.259173,
     "lng": -97.748581
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.2 Carretera Costera Del Pacifico, Col. ",
     "lat": 15.87115,
     "lng": -97.08946
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 63 Carret. Del Pacifico S/N, Col. Loc. Santa Rosa de Lima",
     "lat": 16.08476,
     "lng": -97.65502
  },
  {
     "marca": "PEMEX",
     "direccion": "Paraje Llano Rana Camino Rural San Sebastian Rio Dulce, Col. ",
     "lat": 16.7998983008,
     "lng": -97.0776112237
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Heroes Del 5 de Mayo # 4, Col. Martires Del Trabajo",
     "lat": 19.05418,
     "lng": -98.192417
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Carmen Serdan No. 5003, Col. Cleotilde Torres",
     "lat": 19.073099,
     "lng": -98.20186
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino a Tlaltepango No. 10804, Col. Venustiano Carranza",
     "lat": 19.087461,
     "lng": -98.177686
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jose Maria la Fragua # 8319, Col. Sin Colonia",
     "lat": 18.987456,
     "lng": -98.196451
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. San Baltazar (Venus) No. 4801, Col. Ex Rancho Sta. Ma. la Calera",
     "lat": 19.008715,
     "lng": -98.181257
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 14.5 de la Carret. Fed. Puebla-Tehuacan, Col. .",
     "lat": 19.044197,
     "lng": -98.066232
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 21 Poniente No. 2329, Col. Rivera de Santiago En Puebla",
     "lat": 19.045529,
     "lng": -98.221071
  },
  {
     "marca": "PEMEX",
     "direccion": "26 Sur No. 709, Col. Rancho Azcarate",
     "lat": 19.03378,
     "lng": -98.184845
  },
  {
     "marca": "PEMEX",
     "direccion": "Guerrero No.101, Col. Junta Auxilar San Lorenzo Almecatla",
     "lat": 19.10421,
     "lng": -98.25208
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Esteban Antuñano No. 243, Col. Libertad",
     "lat": 19.073956,
     "lng": -98.239038
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Real a San Jeronimo # 1216, Col. San Jeronimo Calera",
     "lat": 19.099054,
     "lng": -98.222545
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Via Corta Puebla-Santa Ana Km.8, Col. Margen Derecho",
     "lat": 19.137691,
     "lng": -98.189101
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Fed. Apizaco- Tejocotal Tramo Limite Tlaxc, Col. Sc",
     "lat": 19.92253,
     "lng": -97.97012
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 108 Carretera Federal 119, Apizaco El Tejocotal, Col. Sc",
     "lat": 20.08637,
     "lng": -98.14412
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico-Tuxpan Km. 192 y la Fragua, Col. La Fragua",
     "lat": 20.173404,
     "lng": -98.059527
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Est. 104 Km 20.800 Tramo Ceiba-Union, Col. Linda Vista",
     "lat": 20.2673586474,
     "lng": -97.8834360789
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo Km 15.5, Col. S/D",
     "lat": 19.16882,
     "lng": -98.22876
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida 16 de Septiembre # 23, Col. S/C",
     "lat": 19.238368,
     "lng": -98.300377
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tlaxcala-Texoloc Num. 42, Col. S/C",
     "lat": 19.296293,
     "lng": -98.248039
  },
  {
     "marca": "PEMEX",
     "direccion": "Hidalgo # 320, Col. Felipe Angeles",
     "lat": 20.0381,
     "lng": -98.3141
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Bicentenario No. 735, Col. Jardines Del Sur Tercera Seccion",
     "lat": 20.073587,
     "lng": -98.377356
  },
  {
     "marca": "PEMEX",
     "direccion": "San Luis Potosi Esquina Circuito Chapultepec 2527, Col. Rancho Guadalupe",
     "lat": 20.0894,
     "lng": -98.3493
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Quetzalcoatl Numero 1400, Col. Ejido Santa Ana Hueytlalpan",
     "lat": 20.1125556,
     "lng": -98.4053805556
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Cholula Huejotzingo Km. 100 No. 111, Col. San Juan Tlautla",
     "lat": 19.098991,
     "lng": -98.344423
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Forjadores de Puebla No. 2211, Col. Cholula de Rivadavia",
     "lat": 19.070249,
     "lng": -98.299589
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Lateral Norte # 3499 Ruta Quetzalcoatl, Col. Ex-Hacienda Santa Teresa",
     "lat": 19.060099,
     "lng": -98.276025
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 35+400 de la Carret. Fed. Atlixco-Matamoros-Pue, Col. .",
     "lat": 18.857794,
     "lng": -98.44706
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion 11 Sur # 14120, Col. Jardines de San Roman",
     "lat": 18.971915,
     "lng": -98.262255
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion 2 Sur Num.9901, Col. Arboledas de Loma Bella",
     "lat": 18.993726,
     "lng": -98.224206
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino a San Pedro Benito Juarez # 2, Col. S/C",
     "lat": 18.910792,
     "lng": -98.474133
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. Puebla-Atlixco # 8138, Col. Loc. San Bernardino Tlaxcalancingo",
     "lat": 19.026092,
     "lng": -98.29044
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Atlicayotl No. 1909 Local No. 4, Col. Reserva Territorial Atlicayotl",
     "lat": 19.022708,
     "lng": -98.241788
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Fray Juan de Alameda No 490, Col. .",
     "lat": 19.168944,
     "lng": -98.408707
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Nacional No.319, Col. Tanda Grande",
     "lat": 19.267264,
     "lng": -98.417209
  },
  {
     "marca": "PEMEX",
     "direccion": "Ramal Calpulapan, Col. S/C",
     "lat": 19.595452,
     "lng": -98.573188
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Lazaro Cardenas No. 59, Col. ",
     "lat": 19.58624,
     "lng": -98.42831
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Zaragoza S/N, Col. .",
     "lat": 19.319897,
     "lng": -98.268257
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.4 Carriles Chiautempan-Ocotoxco No. 4, Col. Sin Colonia",
     "lat": 19.333311,
     "lng": -98.197634
  },
  {
     "marca": "PEMEX",
     "direccion": "Independencia No. 307, Col. San Miguel",
     "lat": 19.416885,
     "lng": -98.1469
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd Ignacio Zaragoza Esq Carret Apizaco Tlaxcala #31, Col. 5 Seccion Agricola Dolores",
     "lat": 19.464321,
     "lng": -98.113134
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Cost.del Pacifico Pinotepa-Acapulco Km 2 #530, Col. El Cangrejo",
     "lat": 16.35388,
     "lng": -98.07024
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Ometepec-Las Vigas No. 7, Col. Campo Aereo",
     "lat": 16.685907,
     "lng": -98.441799
  },
  {
     "marca": "PEMEX",
     "direccion": "Venustiano Carranza # 735, Col. S/D",
     "lat": 16.75846,
     "lng": -97.99183
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Terraceria Al Platanar S/N, Col. S/C",
     "lat": 17.471977,
     "lng": -98.533417
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 1+280 Carrt.Mariscala de Juarez-Fresnillo de Tr, Col. S/C",
     "lat": 17.86598640533,
     "lng": -98.1302604662704
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Km. 114, Col. Seccion Tercera",
     "lat": 18.326972,
     "lng": -98.269483
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Suchiate Km. 65, Col. .",
     "lat": 18.608766,
     "lng": -98.465465
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 20 de Noviembre Esq. Calle 5 de Febrero, Col. .",
     "lat": 19.129662,
     "lng": -98.769249
  },
  {
     "marca": "PEMEX",
     "direccion": "Lateral Periferico Ecologico N 22, Col. San Francisco Ocotlan",
     "lat": 19.140305,
     "lng": -98.269913
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a San Felipe # 2615-B, Col. Rancho Colorado",
     "lat": 19.073089,
     "lng": -98.219089
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Fed.Puebla-Tlaxcala San Pablo Xochimehuapan, Col. Ninguna",
     "lat": 19.09401,
     "lng": -98.206363
  },
  {
     "marca": "PEMEX",
     "direccion": "Plaza Universidad Carret. Pachuca Tulancingo 1000, Col. Abundio Martinez",
     "lat": 20.096061,
     "lng": -98.715805
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico - Tulancingo Km. 55+500, Col. Sc",
     "lat": 19.885772,
     "lng": -98.640968
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Pachuca-Tulancingo Num. 2504, Col. S/C",
     "lat": 20.057387,
     "lng": -98.471339
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Cerrada Ayapango 10, Col. San Lorenzo Tlal.",
     "lat": 19.671776,
     "lng": -98.867095
  },
  {
     "marca": "PEMEX",
     "direccion": "Fray. Bernardino de Sahagun No. 18, Col. Centro",
     "lat": 19.701753,
     "lng": -98.754629
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Felipe Angeles S/N, Col. S/C",
     "lat": 19.7829611111111,
     "lng": -98.5441277777778
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Carret.Federal Mexico.Cuautla Km.5+167, Col. San Gregorio Cuautzingo",
     "lat": 19.276844,
     "lng": -98.882574
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. San Buenaventura # 48, Col. La Venta",
     "lat": 19.306931,
     "lng": -98.875062
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Chalco-Miraflores P. 162 Z1 P1 Paraje, Col. La Candelaria Tlapala",
     "lat": 19.234818,
     "lng": -98.84046
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 42+500 Carr. Federal Mexico-Puebla, Col. Rio Frio",
     "lat": 19.352444,
     "lng": -98.667186
  },
  {
     "marca": "PEMEX",
     "direccion": "Xicotencatl Esquina Matamoros No. 114, Col. Centro",
     "lat": 20.123219,
     "lng": -98.734119
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Pachuca-Huejutla Km 25.5, Col. Santo Tomas de Allende",
     "lat": 20.222,
     "lng": -98.6328
  },
  {
     "marca": "PEMEX",
     "direccion": "Pensador Mexicano No. 61, Col. Centro Norte",
     "lat": 20.275522,
     "lng": -98.940629
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Pachuca-Huejutla Km 49+050, Col. S/C",
     "lat": 20.402,
     "lng": -98.7149
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Estatal Calnali-Papatlatla Km. 0.550, Col. ",
     "lat": 20.89582,
     "lng": -98.59122
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Huejutla - Chalahuiyapa No. 3, Col. Tepoxtequito",
     "lat": 21.15352,
     "lng": -98.39156
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Reforma No. 909, Col. Segunda Seccion",
     "lat": 32.664162,
     "lng": -115.480114
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Lic. Benito Juarez No. 1599, Col. Insurgentes Este",
     "lat": 32.635824,
     "lng": -115.447574
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Independencia No. 1836, Col. Rivera",
     "lat": 32.63746,
     "lng": -115.412993
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Brasil # 2858, Col. Alamitos",
     "lat": 32.669279,
     "lng": -115.393597
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Lazaro Cardenas No. 2901, Col. Fracc. Real Virreyes",
     "lat": 32.62205,
     "lng": -115.524505
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Oaxaca No. 3401, Col. Desarrollo Urbano Ejido Orizaba",
     "lat": 32.654919,
     "lng": -115.534013
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Benito Juarez Num. 2260, Col. Ex-Ejido Coahuila",
     "lat": 32.621187,
     "lng": -115.4428
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz.Cuauhtemoc No. 500, Col. Aviacion",
     "lat": 32.657643,
     "lng": -115.441948
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Fonelas No. 500, Col. Res. Quinta Del Rey Segunda Etapa",
     "lat": 32.580916,
     "lng": -115.471402
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Vigo # 1200, Col. Televisora",
     "lat": 32.608018,
     "lng": -115.469369
  },
  {
     "marca": "PEMEX",
     "direccion": "Clzda. Adolfo Lopez Mateos # 1720, Col. Ex-Ejido Zacatecas",
     "lat": 32.630443,
     "lng": -115.461044
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco Javier Mina No. 20113, Col. Las Americas",
     "lat": 32.501004,
     "lng": -116.890165
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. de Los Aztecas Num. 18001, Col. Vista Alamar",
     "lat": 32.52695,
     "lng": -116.935251
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Gustavo Diaz Ordaz # 15260, Col. Benton",
     "lat": 32.49127,
     "lng": -116.95302
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Lazaro Cardenas # 3520, Col. Alamar la Mesa",
     "lat": 32.512998902087,
     "lng": -116.961442025795
  },
  {
     "marca": "PEMEX",
     "direccion": "Defensores de Baja California y Carlos Lazo, Col. Postal",
     "lat": 32.525666,
     "lng": -117.000466
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Playas de Tijuana No. 378, Col. Playas de Tijuana",
     "lat": 32.532491,
     "lng": -117.118099
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Internacional No. 7883, Col. Zona Norte",
     "lat": 32.540932,
     "lng": -117.042678
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tijuana-Ensenada # 10290, Col. Tejamen",
     "lat": 32.490971,
     "lng": -117.014727
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Insurgentes # 20214, Col. El Florido 1ra y 2da Seccion",
     "lat": 32.459576,
     "lng": -116.897411
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida de las Aguas No. 23251, Col. Villa Fontana 12va. Seccion",
     "lat": 32.5025055555556,
     "lng": -116.866786111111
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.25 Carr. Tijuana-Tecate No.12300, Col. Fracc. El Florido",
     "lat": 32.456307,
     "lng": -116.826253
  },
  {
     "marca": "PEMEX",
     "direccion": "Lore Noroeste Manz.1, Col. Ejido Michoacan de Ocampo",
     "lat": 32.47156,
     "lng": -115.310593
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.37+781 Carret. San Luis R.C.-Mexicali,Tr.Aerop-Mex, Col. Polvora",
     "lat": 32.552321,
     "lng": -115.214372
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.59.5 Carr. Santa Rosa -Algodones, Col. Ej Torreon",
     "lat": 32.606879,
     "lng": -114.928887
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tijuana-Ensenada No. 11351-0, Col. Fracc. Urbiquinta Versalles",
     "lat": 32.434519,
     "lng": -117.019473
  },
  {
     "marca": "PEMEX",
     "direccion": "Iztacihuatl No. 7405, Col. Camino Verde",
     "lat": 32.479865,
     "lng": -116.989968
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Rapida Poniente Esq.Calle Mexico Lindo No. 16995, Col. Rio Tijuana Tercera Etapa",
     "lat": 32.46833,
     "lng": -116.9258
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ignacio Zaragoza No. 1698- S/N En la Calle 5ta, Col. Ejido Puebla",
     "lat": 32.562572,
     "lng": -115.356667
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Gustavo Vildosola Castro No. 3598, Col. Ej. Puebla, Del. Gonzalez Ortega",
     "lat": 32.583152,
     "lng": -115.376997
  },
  {
     "marca": "PEMEX",
     "direccion": "Ricardo Alzalde No. 1, Col. 17 de Agosto de 1938",
     "lat": 32.3374444444444,
     "lng": -117.050316666667
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Guerrero # 2625, Col. Ampliacion Constitucion",
     "lat": 32.3696024576697,
     "lng": -117.051535711639
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Ignacio Allende y Calle Articulo 21 Carr.S.Feli, Col. Ejido Durango",
     "lat": 32.248844,
     "lng": -115.254196
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Argentina # 28 y Calle Tercera, Col. Est. Coahuila",
     "lat": 32.199144,
     "lng": -114.999489
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Benjamin Flores Brech.Div.) y Calle 17 # 1700, Col. Mezquita",
     "lat": 32.43473,
     "lng": -114.77877
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Nuevo Leon # 2201 y Calle 22 L-1, Col. Altar",
     "lat": 32.44132,
     "lng": -114.76887
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alvaro Obregon No. 2601, Col. Burocrata",
     "lat": 32.473472,
     "lng": -114.749384
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Principal # 194, Col. Francisco Zarco",
     "lat": 32.101146,
     "lng": -116.564349
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexicali-Tijuana,Tramo Centinela-Rumoros Km. 42.500, Col. ",
     "lat": 32.56707,
     "lng": -115.9441
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Lazaro Cardenas No. 980, Col. Zona Centro",
     "lat": 31.859476340156,
     "lng": -116.622510093814
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Reforma No. 1185, Col. Carlos Pacheco",
     "lat": 31.871052,
     "lng": -116.609295
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Coral No. 2495, Col. Marquez de Leon",
     "lat": 31.868709,
     "lng": -116.582412
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 123 1/2 Carr Transpeninsular Maneadero, Col. Maneadero",
     "lat": 31.731395,
     "lng": -116.580543
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pedro Loyola # 296, Col. Acapulco",
     "lat": 31.834581,
     "lng": -116.606226
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Benemerito de las Americas y Calle Julio, Col. Centro",
     "lat": 31.86725,
     "lng": -112.84516
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 5 y Avenida L Norte No. 11, Col. Centro",
     "lat": 30.70829,
     "lng": -112.15768
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Alvaro Obregon No. 199, Col. Las Granjas",
     "lat": 30.71402,
     "lng": -112.13639
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida de Los Maestros No. 250, Col. Jardines de la Montana",
     "lat": 31.290303,
     "lng": -110.968796
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alvaro Obregon No. 1140, Col. Moderna",
     "lat": 31.311852,
     "lng": -110.945183
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Altar-Saric Entronque Tubutama, Col. Sc",
     "lat": 30.9020922737,
     "lng": -111.467267242
  },
  {
     "marca": "PEMEX",
     "direccion": "Eusebio Kino y Bellavista  Mza 112, Col. San Martin",
     "lat": 30.623181,
     "lng": -110.967888
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Fiscal 4365, Col. Recinto Fiscalizado",
     "lat": 31.243724,
     "lng": -110.970852
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Mariano Abasolo # 89, Col. Centro",
     "lat": 31.23701,
     "lng": -110.59886
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 35  N2901, Col. Armando  Lopez Nogales",
     "lat": 31.30865,
     "lng": -109.60429
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 16 y Av. 20 de Noviembre S/N., Col. Vallarta",
     "lat": 31.31483,
     "lng": -109.545127
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 135 de la Carr. Hermosillo-Cananea, Col. S/C",
     "lat": 29.818115,
     "lng": -110.227267
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Nacozari No. 47, Col. Puesta Del Sol",
     "lat": 30.3766891074851,
     "lng": -109.697564576721
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 16 y Carr. Federal Agua Prieta - Janos, Col. Luis Donaldo Colosio",
     "lat": 31.319592,
     "lng": -109.516653
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lazaro Cardenas No. 306, Col. Palo Verde",
     "lat": 29.14805556,
     "lng": -111.0061111
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Hemosillo Nogales Km. 15, Col. S/C",
     "lat": 29.22239,
     "lng": -110.929217
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Luis Donaldo Colosio # 48 y Blvd. Justo Vazq, Col. Centro",
     "lat": 29.70902,
     "lng": -110.56346
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lazaro Cardenas No. 910, Col. Union de Ladrilleros",
     "lat": 29.1311,
     "lng": -111.00591
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lazaro Cardenas # 531, Col. Santa Isabel",
     "lat": 29.120568,
     "lng": -110.985359
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Morelos 732, Col. Colina Blanca",
     "lat": 29.134569,
     "lng": -110.953522
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.63 Carr.A Bahia de Kino Ent.Call.Doce Sur y Doc, Col. .",
     "lat": 28.839407,
     "lng": -111.475919
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Camino Del Seri No. 1120, Col. Las Placitas",
     "lat": 29.0583805555556,
     "lng": -111.009086111111
  },
  {
     "marca": "PEMEX",
     "direccion": "Perif. Pte. No. 239, Col. El Choyal",
     "lat": 29.107375,
     "lng": -110.992059
  },
  {
     "marca": "PEMEX",
     "direccion": "Veracruz # 288, Col. San Benito",
     "lat": 29.091759,
     "lng": -110.971024
  },
  {
     "marca": "PEMEX",
     "direccion": "Esquina Noroeste y Av. Nayarit # 113, Col. San Benito",
     "lat": 29.09461,
     "lng": -110.960434
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Intern.Tramo-Guaymas-Hermosillo Km.171.3, Col. .",
     "lat": 28.320056,
     "lng": -111.042928
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Sahuaripa Esq. Blvd de Los Seris 353, Col. Parque Industrial",
     "lat": 29.02916667,
     "lng": -110.9030556
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas No. 413, Col. Las Minitas",
     "lat": 29.04233,
     "lng": -110.99469
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Camino Del Seri 356 y Blvd. Quintas Al Sur, Col. Fracc. Azores",
     "lat": 29.062969,
     "lng": -110.991088
  },
  {
     "marca": "PEMEX",
     "direccion": "Sonora y Matamoros_Esq., Col. Centro",
     "lat": 29.082292,
     "lng": -110.952417
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Transpeninsular S/N Col.Benito Juarez, Col. Camalu",
     "lat": 30.838982,
     "lng": -116.06055
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Transpeninsular Ensenada a la Paz #3311, Col. Valle de San Agustin",
     "lat": 30.422425,
     "lng": -115.880011
  },
  {
     "marca": "PEMEX",
     "direccion": "Chetumal No. 320, Col. Ampliacion Poniente Primera Seccion",
     "lat": 31.027656,
     "lng": -114.850372
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Luis Encinas y Av. Sonora No. 609, Col. S/C",
     "lat": 31.6853861111111,
     "lng": -114.497933333333
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Freemont S/N y Av. Sinaloa No. 91, Col. Benito Juarez",
     "lat": 31.3058,
     "lng": -113.53375
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Costera N S/N, Col. Sector Progresista",
     "lat": 29.902981,
     "lng": -112.677467
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Km. 1980, Col. Delicias",
     "lat": 27.924677,
     "lng": -110.912225
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Heroe de Nacozari E Ignacio Zaragoza, Col. Moderna",
     "lat": 27.960172,
     "lng": -110.821643
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Chihuahua No. 172 Sur Esq. Guerrero, Col. Centro",
     "lat": 27.494195,
     "lng": -109.935042
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Norte Oriente No. 1425, Col. Real Del Norte",
     "lat": 27.512282,
     "lng": -109.922516
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Hidalgo No. 41 Sur, Col. .",
     "lat": 29.04962,
     "lng": -109.23184
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Morelos 26 Frente Ff.Cc., Col. Matachic",
     "lat": 28.845762,
     "lng": -107.754225
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion y David Alfaro Siqueiros S/N, Col. Parque Industrial San Jose Bachiniva",
     "lat": 28.78048,
     "lng": -107.24301
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Namiquipa-Chihuahua, En Sta.Catalina Villela, Col. .",
     "lat": 29.183203,
     "lng": -106.961535
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Emiliano Zapata No. 1120 Ote., Col. Fraccionamiento Richardson",
     "lat": 27.353981,
     "lng": -110.022093
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. # 1000 Ote., Col. S/D",
     "lat": 27.474366,
     "lng": -109.919169
  },
  {
     "marca": "PEMEX",
     "direccion": "No Reeleccion 2602 Ote, Col. Las Haciendas Secc. Los Monjes Iii",
     "lat": 27.491505,
     "lng": -109.9052
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Rodolfo Felix Valdez No.223, Col. Ibarra",
     "lat": 26.838304,
     "lng": -109.641518
  },
  {
     "marca": "PEMEX",
     "direccion": "Carre. Navojoa-Huatabampo # 65, Col. S-C",
     "lat": 26.9829027777778,
     "lng": -109.549625
  },
  {
     "marca": "PEMEX",
     "direccion": "Talamante # 1002, Col. Juarez",
     "lat": 27.070734,
     "lng": -109.450613
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas No.1104, Col. S.O.P.",
     "lat": 27.073108,
     "lng": -109.427002
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Transpeninsular Km. 593, Col. Ejido El Coste#O Paralelo 28",
     "lat": 28.004492,
     "lng": -114.010695
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Transpeninsular Frente Muelle Sur, Col. Santa Rosalia",
     "lat": 27.33507,
     "lng": -112.26387
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Tramo Guaymas-Hermosillo 1845, Col. Loma Linda",
     "lat": 27.9390947004553,
     "lng": -110.93131835835
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Tecnologico y Periferico Oriente S/N, Col. Fraccionamiento Independencia",
     "lat": 26.821194,
     "lng": -109.622033
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Los Mochis - Ahome Km. 16, Col. Bagojo Colectivo",
     "lat": 25.884682,
     "lng": -109.133765
  },
  {
     "marca": "PEMEX",
     "direccion": "Del Tramo Carretero Los Mochis Sinaloa-Navojoa Km. 70.100, Col. ",
     "lat": 26.40972222,
     "lng": -109.0172222
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Sin Nombre y Blvd. Paso Por El Fuerte, Col. Sd",
     "lat": 26.405803,
     "lng": -108.620418
  },
  {
     "marca": "PEMEX",
     "direccion": "Carranza # 52, Col. Centro",
     "lat": 27.517018,
     "lng": -110.140176
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Posada Del Sol No. 1925 Sur, Col. Posada Del Sol",
     "lat": 27.46487,
     "lng": -109.96697
  },
  {
     "marca": "PEMEX",
     "direccion": "V.Guerrero Pte. No. 702, Col. Del Valle",
     "lat": 27.494264,
     "lng": -109.94551
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.I Ramirez No. 397 Ote., Col. Cortinas",
     "lat": 27.474558,
     "lng": -109.933301
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle a Bacurato y Calle Al Campamento 001, Col. S/C",
     "lat": 25.810457,
     "lng": -107.914048
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulervard Paso Por El Fuerte y Calle a Hoyancos, Col. Sd",
     "lat": 26.410414,
     "lng": -108.616515
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle El Carey No. 415, Col. Aeropuerto",
     "lat": 27.399017,
     "lng": -108.539258
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 6a No. 445 Esq. Ave. Tlaxcala, Col. Reforma",
     "lat": 28.38504,
     "lng": -106.852
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Jiquilpan # 1699 Pte. Esq. Dren Juarez, Col. Los Sauces",
     "lat": 25.810526,
     "lng": -109.002797
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Gabriel Leyva y Alfonso Cano, Col. Centro",
     "lat": 25.798846,
     "lng": -108.987986
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolg. Macario Gaxiola y Carrt. Int.Mexico-Nogales, Col. Zona Industrial",
     "lat": 25.812091,
     "lng": -108.959985
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. R. G. Castro No. 2239, Col. Ejido Jiquilpan",
     "lat": 25.772452,
     "lng": -108.969331
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 9 S/N, Col. Ampliacion",
     "lat": 25.650451,
     "lng": -108.644389
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Romualdo Ruiz Payan # 410 Esq. Mandarina, Col. Las Palmas",
     "lat": 25.566696,
     "lng": -108.482317
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt.Estacion Bamoa Km.4+500 Poblado S.J.de Palos, Col. .",
     "lat": 25.546864,
     "lng": -108.330959
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Romualdo Ruiz Payan # 30 Acera Nte., Col. Del Bosque",
     "lat": 25.569447,
     "lng": -108.473376
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Guasave-Los Quemazones Km. 8.5, Col. S/C",
     "lat": 25.6502,
     "lng": -108.4622
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Internacional Al Nte.Esq. O. Mundial # 2014, Col. Infonavit Humaya",
     "lat": 24.821099,
     "lng": -107.420181
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Enrique Cabrera S/N, Col. Fracc. El Pedregal Del Humaya",
     "lat": 24.832897,
     "lng": -107.4079
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Antonio Rosales Esq. Sabinitos, Col. Villa Adolfo Lopez Mateos",
     "lat": 24.893236,
     "lng": -107.634362
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Costera Autopista B.Juarez No.23100 Poblado, Col. .",
     "lat": 24.8172105809911,
     "lng": -107.585756661377
  },
  {
     "marca": "PEMEX",
     "direccion": "Circuito Interior 2673 Nte, Col. Tres Rios",
     "lat": 24.800497,
     "lng": -107.427902
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Ninos Heroes No. 356 Pte, Col. Centro",
     "lat": 24.811462,
     "lng": -107.399817
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de las Torres y Av. de la Sierra S/N, Col. Fracc. Prados Del Sol Ii",
     "lat": 24.754445,
     "lng": -107.406886
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Alvaro Obregon # 3100 Sur Acera Ote., Col. Fracc. Montebello",
     "lat": 24.778653,
     "lng": -107.392685
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Emiliano Zapata No. 2043, Col. Centro Sinaloa",
     "lat": 24.793582,
     "lng": -107.414507
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Novolato Culiacan No. 813, Col. Sin Colonia",
     "lat": 24.76883,
     "lng": -107.54414
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. las Torres No. 6666 Sur Interior C, Col. Fraccionamiento las Torres",
     "lat": 24.763995,
     "lng": -107.454921
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Tamayo Espinoza de Los Monteros 2376 N, Col. Country Tres Rios",
     "lat": 24.790623,
     "lng": -107.444317
  },
  {
     "marca": "PEMEX",
     "direccion": "Isla Paraiso No. 408 Sur, Col. ",
     "lat": 24.64427,
     "lng": -107.9238
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lic. Benito Juarez Num. 455, Col. Ampliacion Primavera Secc. Ii",
     "lat": 24.76239,
     "lng": -107.698464
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.74.4 Carr.Costera \"Lic.Benito Juarez\" Laguna P., Col. .",
     "lat": 25.144051,
     "lng": -107.956987
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Jose Maria Morelos No 68, Col. Las Glorias Guamuchil",
     "lat": 25.445584,
     "lng": -108.068793
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Agustina Ramirez # 45 Sur, Col. Centro",
     "lat": 25.462218,
     "lng": -108.082612
  },
  {
     "marca": "PEMEX",
     "direccion": "Dr. Carlos Salazar y Carrt. Mocorito-Guamuchil S/N, Col. Centro",
     "lat": 25.48104,
     "lng": -107.921758
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 18 de Julio No. 509 Ote., Col. Guadalupe Victoria",
     "lat": 25.2589555555556,
     "lng": -111.767688888889
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I. Madero Ote. # 101, Col. Centro",
     "lat": 25.03243,
     "lng": -111.6636
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Marcial Ordoñez Esq. Con G. Leyva, Col. Bienestar",
     "lat": 25.784726,
     "lng": -108.997851
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Cinco de Febrero Esq. Felix Ortega 1215, Col. Centro",
     "lat": 24.142544,
     "lng": -110.314044
  },
  {
     "marca": "PEMEX",
     "direccion": "Nicolas Bravo y Gomez Farias, Col. Centro",
     "lat": 24.154109,
     "lng": -110.311643
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Los Mochis Topolobampo Km. 11.5, Col. Sc",
     "lat": 25.681118,
     "lng": -109.039972
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Al Sur # 240, Col. Fraccionamiento Tabachines",
     "lat": 24.078669,
     "lng": -110.306582
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 8+540 de la Carrt. Transpeninsular Al Norte, Col. Chametla",
     "lat": 24.105312,
     "lng": -110.369012
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Agustin Olachea # 4615, Col. Las Garzas",
     "lat": 24.129343,
     "lng": -110.328714
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Transpeninsular 2466, Col. Guaymitas",
     "lat": 23.0761638888889,
     "lng": -109.706186111111
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Del Datil No. 7404, Col. Buenos Aires",
     "lat": 23.137047,
     "lng": -109.709754
  },
  {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocido, Col. Loc. la Rivera",
     "lat": 23.594381,
     "lng": -109.591845
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote Numero 01 Fraccion 1 de la Franccion C, Col. Fraccionamiento Lomas Del Pacifico",
     "lat": 22.899045,
     "lng": -109.95628
  },
  {
     "marca": "PEMEX",
     "direccion": "Los Aguajitos No. 1938, Col. Arcos Del Sol",
     "lat": 22.910827,
     "lng": -109.92865
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote 10-A de la Darsena S/N., Col. .",
     "lat": 22.882316,
     "lng": -109.910282
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cesar Lopez de Lara 3728, Col. Jardin",
     "lat": 27.4644163230151,
     "lng": -99.517691219574
  },
  {
     "marca": "PEMEX",
     "direccion": "Cuauhtemoc No. 501, Col. .",
     "lat": 26.419434,
     "lng": -99.149968
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.A Reynosa Esq.Blvd.Cavazos Lerma No.1200, Col. S/C",
     "lat": 26.3889742310078,
     "lng": -99.0179783657455
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 207 Carrt. Monterrey-Nvo. Laredo, Col. .",
     "lat": 27.312436,
     "lng": -99.593733
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Francisco Munguia No. 2121, Col. Parque Industrial \"O. I. Longoria\"",
     "lat": 27.47894,
     "lng": -99.54154
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Luis Donaldo Colosio Murrieta Km. 0+890, Col. Fracc. Gran Boulevar",
     "lat": 27.4260805555556,
     "lng": -99.5219472222222
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Adolfo Lopez Mateos # 301, Col. Fracc. Hacienda San Rafael",
     "lat": 25.690195,
     "lng": -100.212621
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey-Reynosa No. 5480, Col. Sc",
     "lat": 25.674035,
     "lng": -100.191083
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Benito Juarez S/N Esq. Av. Del Federalismo, Col. Industrial de la Silla",
     "lat": 25.66857,
     "lng": -100.176937
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Los Ebanitos-Sanroque Cruz Carr.Mty-Reyno 500, Col. Las Sabinas",
     "lat": 25.656836,
     "lng": -100.136063
  },
  {
     "marca": "PEMEX",
     "direccion": "Arturo B. de la Garza # 1036, Col. Hacienda la Morena",
     "lat": 25.637368,
     "lng": -100.085513
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Cd. Miguel Aleman Esq.Con Av.Acapulco, Col. La Fe",
     "lat": 25.723646,
     "lng": -100.214028
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Huinala # 398, Col. Villas de Huinala",
     "lat": 25.746461,
     "lng": -100.194365
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Monterrey-Cadereyta # 1310, Col. S/C",
     "lat": 25.694383,
     "lng": -100.176368
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Rhodesia Del Norte # 501 Esq. Gaspar Castano, Col. Ex Hda. Huinala",
     "lat": 25.730656,
     "lng": -100.162517
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Riberena S/N, Col. ",
     "lat": 26.234406,
     "lng": -98.667598
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Santa Rosa-Apodaca No. 200, Col. Fracc. Valle Del Salduero",
     "lat": 25.814798,
     "lng": -100.217204
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Monterrey-Miguel Aleman Km 38 # 7, Col. Ejido Marin",
     "lat": 25.85587,
     "lng": -100.2245
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Monterrey-Laredo Km.28 No.100, Col. Fracc. Campestre San  Luis",
     "lat": 25.917588,
     "lng": -100.196431
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Nacional Mexico-Laredo # 590, Col. Larraldena",
     "lat": 26.48012,
     "lng": -100.17057
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave Ignacio Zaragoza No 513  Cd Anahuac, Col. .",
     "lat": 27.236652,
     "lng": -100.135276
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Santo Domingo Esq.Con Palomas No. 1429, Col. .",
     "lat": 25.752252,
     "lng": -100.262391
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Adolfo Lopez Mateos Km 3.7, Col. S/C",
     "lat": 25.730679,
     "lng": -100.252985
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Constitucion # 240, Col. Residencial las Palmas",
     "lat": 25.763342,
     "lng": -100.242448
  },
  {
     "marca": "PEMEX",
     "direccion": "Julian Trevino Elizondo 100-04-A, Col. Sc",
     "lat": 25.74715,
     "lng": -100.199263
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Miguel Aleman Esq. Calle Arco Vial S/N, Col. Fracc. Prologis Park",
     "lat": 25.7805,
     "lng": -100.17587
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Chapultepec No. 816, Col. Santa Margarita",
     "lat": 25.665758,
     "lng": -100.266423
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morones Prieto # 812, Col. Esmeralda",
     "lat": 25.680129,
     "lng": -100.267624
  },
  {
     "marca": "PEMEX",
     "direccion": "Rayon No. 401, Col. San Rafael",
     "lat": 25.691648,
     "lng": -100.221483
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Ruiz Cortines Ote 4590, Col. Fraccionamiento Real de Minas",
     "lat": 25.70289,
     "lng": -100.258962
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Romulo Garza No. 800-A, Col. Hacienda Los Morales",
     "lat": 25.715984,
     "lng": -100.248951
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas 2885, Col. No",
     "lat": 25.629231,
     "lng": -100.296582
  },
  {
     "marca": "PEMEX",
     "direccion": "Pedro Martinez No. 1807 Cuz Con Garza Sada, Col. Nuevo Repueblo",
     "lat": 25.663021,
     "lng": -100.297602
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I Madero No. 1804, Col. No",
     "lat": 25.68184,
     "lng": -100.296777
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Felix U. Gomez No. 2820, Col. Moderna",
     "lat": 25.698422,
     "lng": -100.295154
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ruiz Cortinez # 700 Esq. Amado Nervo, Col. S/D",
     "lat": 25.703918,
     "lng": -100.319597
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Nogalar # 105, Col. S/D",
     "lat": 25.722479,
     "lng": -100.292486
  },
  {
     "marca": "PEMEX",
     "direccion": "Manuel L. Barragan y Fray Bartolome Casas No. 200, Col. Roble Norte",
     "lat": 25.742681,
     "lng": -100.311988
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Universidad No. 1011, Col. Casa Bella",
     "lat": 25.758998,
     "lng": -100.296376
  },
  {
     "marca": "PEMEX",
     "direccion": "Raul Salinas Lozano # 300, Col. Villas de Escobedo Ii",
     "lat": 25.777212,
     "lng": -100.318217
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de Los Leones No. 300, Col. Cumbres",
     "lat": 25.696884,
     "lng": -100.357535
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.A.Ruiz Cortinez No.3505, Col. Mitras Norte",
     "lat": 25.705138,
     "lng": -100.348738
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Rodrigo Gomez No. 1445 Nte. Esq. Gfo. de Mex., Col. Central",
     "lat": 25.716914,
     "lng": -100.342285
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Solidaridad Pte. R. Frias y 5 Ene 7070 16 Sep., Col. .",
     "lat": 25.730191,
     "lng": -100.346298
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Real No. 7726, Col. Topo Chico",
     "lat": 25.74775,
     "lng": -100.344623
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cabezada # 1307, Col. Barrio la Moderna",
     "lat": 25.777897,
     "lng": -100.38469
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. San Jeronimo Num. 513, Col. San Jeronimo",
     "lat": 25.674768,
     "lng": -100.357661
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Venustiano Carranza Sur No. 480, Col. Maria Luisa",
     "lat": 25.674459,
     "lng": -100.332866
  },
  {
     "marca": "PEMEX",
     "direccion": "Ruperto Martinez No 748, Col. Centro",
     "lat": 25.6776,
     "lng": -100.32027
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I. Madero y Guerrero, Col. No",
     "lat": 25.683353,
     "lng": -100.312564
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Diaz Ordaz Km. 335 y Av. Corregidora, Col. La Leona",
     "lat": 25.674523,
     "lng": -100.404905
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc # 1280, Col. Residencial Cuauhtemoc",
     "lat": 25.685609,
     "lng": -100.443529
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Abraham Lincoln No. 5797, Col. San Bernabe Topo Chico",
     "lat": 25.768377,
     "lng": -100.415113
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Carlos Canseco Gonzalez 1020, Col. El Progreso (Reservas Territoriales)",
     "lat": 27.5058,
     "lng": -99.586208
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pino Suarez # 6322, Col. Buena Vista",
     "lat": 27.495568,
     "lng": -99.540115
  },
  {
     "marca": "PEMEX",
     "direccion": "Guatemala # 1903, Col. Guerrero",
     "lat": 27.482578,
     "lng": -99.507226
  },
  {
     "marca": "PEMEX",
     "direccion": "Urano # 2620, Col. La Puerta Del Sol",
     "lat": 25.682977,
     "lng": -100.485237
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Luis Donaldo Colosio # 109, Col. Lomas Del Poniente",
     "lat": 25.692712,
     "lng": -100.456871
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Heberto Castillo # 1000, Col. Fracc. Privada de las Villas",
     "lat": 25.787436,
     "lng": -100.580451
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Heroico Colegio Militar y Mexico, Col. Las Fuentes",
     "lat": 28.705037,
     "lng": -100.526504
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Atilano Barrera No. 430, Col. Ampliacion Santa Rosa",
     "lat": 29.309458,
     "lng": -100.965721
  },
  {
     "marca": "PEMEX",
     "direccion": "Constitucion # 715 Nte., Col. Benito Juarez",
     "lat": 29.33157,
     "lng": -100.95314
  },
  {
     "marca": "PEMEX",
     "direccion": "Hidalgo No. 770 Pte, Col. Centro",
     "lat": 28.42464,
     "lng": -100.774168
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Venuestiano Carranza No. 2000, Col. Lomas de la Villa",
     "lat": 28.654008,
     "lng": -100.535288
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Venustiano Carranza No. 7625, Col. Los Rodriguez",
     "lat": 25.494607,
     "lng": -100.967102
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Los Gonzalez Numero 4368, Col. Los Gonzalez",
     "lat": 25.471948,
     "lng": -100.947994
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Miguel Ramos Arizpe No. 157, Col. Parque Industrial",
     "lat": 25.544174,
     "lng": -100.939404
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ignacio Morones Prieto No.117, Col. La Banda",
     "lat": 25.65615,
     "lng": -100.449296
  },
  {
     "marca": "PEMEX",
     "direccion": "Presidente Cardenas # 824 Esq. Matamoros, Col. Centro",
     "lat": 25.426918,
     "lng": -100.989175
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolg. Otilio Gonzalez # 4102, Col. Las Tetillas",
     "lat": 25.398908,
     "lng": -100.966193
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Centenario de Torreon No. 7025, Col. Los Zacatones",
     "lat": 25.434867,
     "lng": -100.913266
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. El Sauz-Palau No.69 Minas de Barroteran, Col. Centro",
     "lat": 27.64689,
     "lng": -101.27971
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.de la Constitucion 57 Km. 135, Col. Fundadores",
     "lat": 27.872412,
     "lng": -101.136989
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 57 Km 1198 Sin Numero Km. 1198.000, Col. ",
     "lat": 27.936659,
     "lng": -101.201889
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Benito Juarez Esq. Con Escobedo # 106, Col. Los Elizondos",
     "lat": 25.791359,
     "lng": -100.3057
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Monte Horbe # 100, Col. Monte Horbe",
     "lat": 25.79759,
     "lng": -100.33871
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Colombia # 3100, Col. Socrates Rizzo",
     "lat": 25.818733,
     "lng": -100.294373
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Monclova Km 5.5, Col. S/C",
     "lat": 25.834806,
     "lng": -100.311868
  },
  {
     "marca": "PEMEX",
     "direccion": "General Mier # 429, Col. Centro",
     "lat": 26.53941,
     "lng": -100.497448
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 57 No. 6100, Col. Estancias de Santa Ana",
     "lat": 26.975143,
     "lng": -101.377085
  },
  {
     "marca": "PEMEX",
     "direccion": "Perif.L.Echeverria Alvarez S/N Carret.Torreon#1910, Col. Fracc. Hacienda San Rafael",
     "lat": 25.454459,
     "lng": -101.006393
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Isidro Lopez Zertuche No. 4180, Col. Virreyes",
     "lat": 25.467049,
     "lng": -100.988954
  },
  {
     "marca": "PEMEX",
     "direccion": "Escobedo # 95, Col. Zona Centro",
     "lat": 27.322679,
     "lng": -102.400779
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 30 # 1008, Col. Amalia Solorzano",
     "lat": 27.049556,
     "lng": -101.532982
  },
  {
     "marca": "PEMEX",
     "direccion": "Lib. Carlos Salinas de Gortari # 184 Nte., Col. San Juan Bautista",
     "lat": 26.9690629772943,
     "lng": -101.448423939812
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Harold R. Pape # 901 Esq. Jesus Silva, Col. Fracc. Carranza",
     "lat": 26.895135,
     "lng": -101.425122
  },
  {
     "marca": "PEMEX",
     "direccion": "C. Paseo Del Tecnologico No. 1395, Col. Ejido Zaragoza",
     "lat": 25.504578,
     "lng": -103.366711
  },
  {
     "marca": "PEMEX",
     "direccion": "Libram.Perif.Torreon-Gomezpalacio-Lerdo Km. 13.320, Col. ",
     "lat": 25.32523,
     "lng": -103.3154
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Sin Nombre No. 398, Col. Ejido la Partida",
     "lat": 25.58668,
     "lng": -103.2982
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Independencia No. 102 Pte., Col. Centro",
     "lat": 25.527654,
     "lng": -103.230388
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera San Pedro - Torreon No. 504, Col. Ejidal El Ancora",
     "lat": 25.7576,
     "lng": -103.0004
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Marfil No. 10 Calle Sn. Felipe, Col. .",
     "lat": 24.633158,
     "lng": -102.780574
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Independencia No. 1661, Col. Fracc. San Isidro",
     "lat": 25.562739,
     "lng": -103.431423
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lerdo de Tejada # 103, Col. Parque Industrial Gomez Palacio",
     "lat": 25.57401,
     "lng": -103.460667
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Torreon-San Pedro # 1005, Col. Ejido la Union",
     "lat": 25.59768,
     "lng": -103.403647
  },
  {
     "marca": "PEMEX",
     "direccion": "Fraccion \"A\" Periferico Sur # 755, Col. Carretera a Castilagua",
     "lat": 25.559422,
     "lng": -103.525297
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Miguel Aleman Pte. #100 Esq. Av. Hidalgo, Col. Las Rosas",
     "lat": 25.553558,
     "lng": -103.492552
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Idependencia y R. Corona, Col. Centro",
     "lat": 25.544336,
     "lng": -103.453965
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Abasolo No. 1195, Col. .",
     "lat": 25.542332,
     "lng": -103.435617
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Guerreero # 2355, Col. Centro",
     "lat": 25.547954,
     "lng": -103.422995
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Del Jesuita Juan Agustin de Espinoza 1011, Col. Fraccionamiento Aviacion",
     "lat": 25.558126,
     "lng": -103.39473
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Aviacion Nac  E Insurgentes, Col. .",
     "lat": 24.475232,
     "lng": -104.000705
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 35.0 Carr. Pedriceña-Nazas,Tramo P.Nal.25 Dic., Col. .",
     "lat": 25.263945362854,
     "lng": -104.026876436493
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Del Bosque # 2055, Col. Villas la Merced",
     "lat": 25.505269,
     "lng": -103.394904
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco Sarabia y Carr. Matamoros-Mazatlan, Col. .",
     "lat": 25.52417,
     "lng": -103.52798
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Torreon-Matamoros # 5000, Col. La Merced",
     "lat": 25.534826,
     "lng": -103.394877
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Cristobal Colon y la Zarca-Torreon, Col. .",
     "lat": 25.742555,
     "lng": -104.772407
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Gomez Palacio-Jimenez No. 320, Col. Valle Del Guadiana",
     "lat": 25.608078,
     "lng": -103.510313
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Auza # 714 Esq. C. Urrea, Col. Santa Rosa",
     "lat": 25.563316,
     "lng": -103.489559
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Ejercito Mexicano Km 1.6, Col. Ampliacion Santa Rosa",
     "lat": 25.572187,
     "lng": -103.469808
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Durango No. 913, Col. Jardines de Durango",
     "lat": 24.012608,
     "lng": -104.622983
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolong. Pino Suarez # 126, Col. Fracc. Villas de San Francisco",
     "lat": 24.029562,
     "lng": -104.62168
  },
  {
     "marca": "PEMEX",
     "direccion": "Magnolias # 100, Col. Jardines de Durango",
     "lat": 24.042188,
     "lng": -104.629834
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Francisco Villa Num. 9100, Col. Agricola 20 de Noviembre",
     "lat": 24.0732232155576,
     "lng": -104.594160449074
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Jose Ramon Valdez No. 1102 Pte., Col. Sc",
     "lat": 24.447095,
     "lng": -104.134569
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 129 Autop.Zona D/Silencio G.Pal. Lim. Dgo-Chih, Col. .",
     "lat": 26.579303,
     "lng": -104.04938
  },
  {
     "marca": "PEMEX",
     "direccion": "Presidente Carranza No. 520, Col. Zona Centro",
     "lat": 26.922611,
     "lng": -101.454479
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Francisco I. Madero No. 1402, Col. Nueva Rosita",
     "lat": 26.920215,
     "lng": -101.439735
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Harold. R. Pape y Ave. Industrial, Col. Fracc. Benavides",
     "lat": 26.884348,
     "lng": -101.425423
  },
  {
     "marca": "PEMEX",
     "direccion": "Idelfonso Fuentes y Ermita S/N., Col. Zona Centro",
     "lat": 26.90421,
     "lng": -101.416015
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 0.6 Carretera Jimenez-Zavalza, Col. .",
     "lat": 27.1263,
     "lng": -104.90165
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 1308 Carr. Panamericana a Cd. Juarez., Col. .",
     "lat": 27.678073,
     "lng": -105.161548
  },
  {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocido Sierra Mojada, Col. Colonia Hercules",
     "lat": 28.043742,
     "lng": -103.8018
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Tratado de Libre Comercio No. 1009, Col. Constitucion",
     "lat": 29.55801,
     "lng": -104.40475
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Durango No. 2680, Col. Fracc. Horizontes Del Sur 17 Etapa",
     "lat": 31.607092,
     "lng": -106.384251
  },
  {
     "marca": "PEMEX",
     "direccion": "Custodia de la Republica No. 1015, Col. Fray Garcia de San Francisco",
     "lat": 31.607297,
     "lng": -106.36249
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Juarez-Porvenir No. 1657, Col. Ejido Zaragoza",
     "lat": 31.6239998040323,
     "lng": -106.32757282209
  },
  {
     "marca": "PEMEX",
     "direccion": "Eje Juan Gabriel No. 2418 y Av. Adolfo L.Mateos, Col. S/C",
     "lat": 31.707208,
     "lng": -106.454367
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Oscar Flores # 3651, Col. Partido Iglesias",
     "lat": 31.696298,
     "lng": -106.440767
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 10 Carr.Panamericana y Calle Ruiseñor, Col. Fracc.Alameda",
     "lat": 31.700682,
     "lng": -106.42492
  },
  {
     "marca": "PEMEX",
     "direccion": "Manuel Gomez Morin No. 7396, Col. Adicion Oriental",
     "lat": 31.721839,
     "lng": -106.418227
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Manuel Gomez Morin # 9470, Col. Partido Senecu",
     "lat": 31.6956230291773,
     "lng": -106.389478473541
  },
  {
     "marca": "PEMEX",
     "direccion": "Sss, Col. Sss",
     "lat": 23.93001,
     "lng": -104.92139
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Durango-Mazatlan Km 3.2, Col. El Saltito",
     "lat": 24.010463,
     "lng": -104.692553
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Lazaro Cardenas No. 307, Col. Guillermina",
     "lat": 24.027098,
     "lng": -104.652697
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Luis Donaldo Colosio Num. 919, Col. Parque Industrial Korian",
     "lat": 24.055572,
     "lng": -104.656354
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de Los Aztecas No. 9109, Esq. Blvd. Zaragoza, Col. Fracc. Ciudad Moderna",
     "lat": 31.66301,
     "lng": -106.473504
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Panamericana No. 9371, Col. Fracc. Puente Alto",
     "lat": 31.626355,
     "lng": -106.443568
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tecnologico No. 6690, Col. Fracc. Ampliacion Aeropuerto",
     "lat": 31.658573,
     "lng": -106.428837
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. las Torres No. 2431, Col. Col. Lote Bravo",
     "lat": 31.614148,
     "lng": -106.396429
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Santiago Troncoso No.314, Col. Praderas Del Sur",
     "lat": 31.626873,
     "lng": -106.371445
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Nueva España No. 1100, Col. El Marmol",
     "lat": 28.617522,
     "lng": -106.031329
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Chihuahua Delicias Km. 206, Col. Sc",
     "lat": 28.560032,
     "lng": -105.954578
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 148+479 de la Carrt. Panam. Tramo Jimenez-Chih, Col. S/C",
     "lat": 28.288132,
     "lng": -105.481041
  },
  {
     "marca": "PEMEX",
     "direccion": "Lateral Avenida de la Juventud 1101, Col. Campesina Nueva",
     "lat": 28.6023850292418,
     "lng": -106.103004589935
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ocampo # 1001, Col. Centro",
     "lat": 28.633368,
     "lng": -106.076427
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico de la Juventud No. 2004, Col. Haciendas Del Valle",
     "lat": 28.637158,
     "lng": -106.122624
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Los Nogales Norte # 1101 Esq. Alfonso Sosa V., Col. Pedro Dominguez",
     "lat": 28.732417,
     "lng": -106.121549
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Homero No. 3101, Col. Cond. Parque Complejo Ind. Chihuahua",
     "lat": 28.712949,
     "lng": -106.10502
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Fedor Dostoyevsky # 5307, Col. Atenas I",
     "lat": 28.729771,
     "lng": -106.09611
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Chihuahua - Aldama No. 16900, Col. La Pista",
     "lat": 28.698113,
     "lng": -106.008038
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Teofilo Borunda No. 11800, Col. Ejido Labor de Terrazas",
     "lat": 28.603055,
     "lng": -106.121472
  },
  {
     "marca": "PEMEX",
     "direccion": "Circuito Universitario No.15506, Col. Cafetales",
     "lat": 28.716991,
     "lng": -106.150164
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 31+498 Carrt.Mex-Cd.Juarez Trm.Chih-El Sueco, Col. Sacramento",
     "lat": 28.864817,
     "lng": -106.226497
  },
  {
     "marca": "PEMEX",
     "direccion": "Callejon a Nonoava S/N, Col. Barrio de Los Moros",
     "lat": 27.48201,
     "lng": -106.73718
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote No. 01, Manzana No. 01 S/N, Col. Laderas Del Norte   Sector Oriente",
     "lat": 28.18737,
     "lng": -105.43776
  },
  {
     "marca": "PEMEX",
     "direccion": "El Mirador Domicilio Conocido, Col. .",
     "lat": 28.306271,
     "lng": -106.479138
  },
  {
     "marca": "PEMEX",
     "direccion": "Vialidad Venezuela E Ingenierias No. 775, Col. Agricola San Antonio",
     "lat": 28.4216861111111,
     "lng": -106.881663888889
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 5 de Mayo No. 406, Col. Centro",
     "lat": 31.779429,
     "lng": -107.627091
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 16 de Septiembre y Platino, Col. .",
     "lat": 31.742439,
     "lng": -106.498989
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle B. Dominguez No. 2590, Col. Galeana",
     "lat": 31.7212391082646,
     "lng": -106.487606865082
  },
  {
     "marca": "PEMEX",
     "direccion": "5 de Mayo y Tlaxcala, Col. Hidalgo",
     "lat": 31.7441550756062,
     "lng": -106.473316101852
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de las Americas y Malecon, Col. Hidalgo",
     "lat": 31.751633,
     "lng": -106.456485
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Paseo Triunfo de la Republica No. 5298-B, Col. Alamos de San Lorenzo",
     "lat": 31.736022,
     "lng": -106.425078
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Rafael Buelna S/N, Col. Francisco Villa",
     "lat": 23.247822,
     "lng": -106.431058
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Al Norte No. 3024, Col. Isla Residencial",
     "lat": 23.24495,
     "lng": -106.421154
  },
  {
     "marca": "PEMEX",
     "direccion": "Luis Donaldo Colosio No. 18900, Col. Flores Magon",
     "lat": 23.240768,
     "lng": -106.389841
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Al Sur Km. 273, Col. Sc",
     "lat": 23.194232,
     "lng": -106.27076
  },
  {
     "marca": "PEMEX",
     "direccion": "Mineros No. 102, Col. El Panteon",
     "lat": 22.993391,
     "lng": -105.860402
  },
  {
     "marca": "PEMEX",
     "direccion": "Buena Aventura Chih 3a, Col. S/C",
     "lat": 29.847163,
     "lng": -107.461258
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Panamericana Chihuahua-Juarez Km 217, Col. Sin Colonia",
     "lat": 30.4421527777778,
     "lng": -106.521588888889
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Int. Km 67.2 Mexico-Nogales Tram.Maz-La Cru, Col. S/D",
     "lat": 23.786644,
     "lng": -106.609837
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Internaciional Al Norte # 3300, Col. Corredor de Abastos",
     "lat": 23.263138,
     "lng": -106.416829
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Munich No. 1404, Col. Jaripillo",
     "lat": 23.259611,
     "lng": -106.396245
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 99 Carret. Durango-Mazatlan, Col. .",
     "lat": 23.78917,
     "lng": -105.34668
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mazatlan - Culiacan Km. 90, Col. Sc",
     "lat": 23.920166,
     "lng": -106.92905
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tamazula - Chapotan Km. 1.4, Col. Sc",
     "lat": 24.57852,
     "lng": -106.57163
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Durango Km. 0.5 S/N, Col. S/C",
     "lat": 25.0466,
     "lng": -105.41483
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Alvaro Obregon No.6170 Nte. Acera Ote., Col. Loma de Rodriguera",
     "lat": 24.863317,
     "lng": -107.392844
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.20 Carr. Guanacevi Tepehuanes Ejido Arroyo Del, Col. .",
     "lat": 25.93327,
     "lng": -105.93729
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tecnologico Num. 29, Col. .",
     "lat": 26.932162,
     "lng": -105.649545
  },
  {
     "marca": "PEMEX",
     "direccion": "Km .500 Carr.El Mirador,, Col. Centro",
     "lat": 25.958729,
     "lng": -105.359595
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. H. Colegio Militar No 1820 Sur, Col. .",
     "lat": 24.793733,
     "lng": -107.374892
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. H. Colegio Militar # 70 Sur, Col. Benito Juarez",
     "lat": 24.804309,
     "lng": -107.381797
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Novena No. 2079, Col. Obrera Campesina",
     "lat": 24.827983,
     "lng": -107.376838
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 5a. No. 1601, Col. S/C",
     "lat": 29.18877,
     "lng": -108.14218
  },
  {
     "marca": "PEMEX",
     "direccion": "# 5720 Carrt. Nuevo Casas Grandes-Sueco, Col. S/C",
     "lat": 30.38473,
     "lng": -107.88608
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Buenos Aires Esq.Calle Gavilan N.- 401, Col. Agricola Buenos Aires",
     "lat": 30.784288,
     "lng": -108.383985
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Culiacan-El Dorado No. 5400 Km.54, Col. .",
     "lat": 24.332089,
     "lng": -107.369811
  },
  {
     "marca": "PEMEX",
     "direccion": "Mocorito # 612, Col. Costa Rica",
     "lat": 24.589876,
     "lng": -107.399752
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Patria No. 6251 Sur, Col. La Costera",
     "lat": 24.74922,
     "lng": -107.37595
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.A Matamoros Km.92 entre V.Huerta y L.Vicario, Col. Lopez Portillo",
     "lat": 26.038263,
     "lng": -98.28171
  },
  {
     "marca": "PEMEX",
     "direccion": "Pekin Enrt.Blvd.Ricardo F.Magon y Martires de Chic, Col. Burocratica 5 de Diciembre",
     "lat": 26.059254,
     "lng": -98.306329
  },
  {
     "marca": "PEMEX",
     "direccion": "Decima #115, Col. Las Fuentes",
     "lat": 26.06835,
     "lng": -98.316375
  },
  {
     "marca": "PEMEX",
     "direccion": "Panama No 700, Col. Anzalduas",
     "lat": 26.079132,
     "lng": -98.276351
  },
  {
     "marca": "PEMEX",
     "direccion": "C. Libramiento Luis Echeverria No. 601, Col. Aquiles Serdan 1",
     "lat": 26.092154,
     "lng": -98.290456
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Reynosa-San Fernando Km 101 Brecha Jacalito, Col. S/C",
     "lat": 25.92335,
     "lng": -98.26932
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.A Matamoros Km.82.5 entre Cortijo y Bienestar, Col. Bienestar",
     "lat": 26.020285,
     "lng": -98.226626
  },
  {
     "marca": "PEMEX",
     "direccion": "Venezuela No. 215, Col. Juan Baez Guerra",
     "lat": 25.9883,
     "lng": -98.1255
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Francisco I. Madero No. 109, Col. La Paz",
     "lat": 25.979265,
     "lng": -98.068703
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Matamoros-Reynosa Km. 12.5, Col. Ejido El Ebanito",
     "lat": 25.93866,
     "lng": -97.62063
  },
  {
     "marca": "PEMEX",
     "direccion": "Cuarta y Canales No. 112, Col. Centro",
     "lat": 25.87086,
     "lng": -97.50244
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Lauro Villar Km.1, Col. .",
     "lat": 25.868775,
     "lng": -97.486747
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Lauro Villar y Accion Civica 1203, Col. Las Arboledas",
     "lat": 25.86595,
     "lng": -97.477571
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Sendero Nacional Km 7.5, Col. S/C",
     "lat": 25.86591,
     "lng": -97.57241
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 3.0 Carr.A Reynosa, Col. .",
     "lat": 25.893241,
     "lng": -97.532464
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Rayon y Quince No. 601, Col. Centro",
     "lat": 25.875227,
     "lng": -97.511577
  },
  {
     "marca": "PEMEX",
     "direccion": "Gral Bravo  Domicilio Conocido, Col. .",
     "lat": 25.78435,
     "lng": -99.18458
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey-Reynosa Km. 196+950, Col. S/C",
     "lat": 26.026848,
     "lng": -98.443742
  },
  {
     "marca": "PEMEX",
     "direccion": "Lib. Monterrey-Reynosa y Calle España, Col. Campestre",
     "lat": 26.051708,
     "lng": -98.376838
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera las Yescas Km. 83.675 No. 2503-A, Col. Fraccionamiento Los Fresnos",
     "lat": 25.65157,
     "lng": -97.81623
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Matamoros  Victoria Km. 256+313, Col. Sc",
     "lat": 25.51485,
     "lng": -97.732477
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Victoria Km. 3.5, Col. Centro",
     "lat": 25.818437,
     "lng": -97.517273
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lauro Villar y Diego Rivera No. 4435, Col. Fracc. Privada Magnolias",
     "lat": 25.849569,
     "lng": -97.459672
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional S/N, Col. ",
     "lat": 25.422799,
     "lng": -100.14691
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Rio Orinoco No. 708, Col. Lomas de San Isidro",
     "lat": 25.756439,
     "lng": -100.153507
  },
  {
     "marca": "PEMEX",
     "direccion": "Cadereyta-Reynosa Km.27, Col. No",
     "lat": 25.598661,
     "lng": -100.027741
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Revolucion Km. 900, Col. Centro",
     "lat": 25.5821,
     "lng": -100.0024
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Morelos No. 603, Col. San Juan",
     "lat": 25.541078,
     "lng": -99.841966
  },
  {
     "marca": "PEMEX",
     "direccion": "Molinero # 101, Col. El Faisan",
     "lat": 25.50925,
     "lng": -100.1956
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. la Estanzuela No. 102, Col. La Estanzuela",
     "lat": 25.589153,
     "lng": -100.252907
  },
  {
     "marca": "PEMEX",
     "direccion": "Acueducto No. 801 y 803, Col. Santa Isabel",
     "lat": 25.636126,
     "lng": -100.177898
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Constitucion 1030, Col. Centro",
     "lat": 25.6643261,
     "lng": -100.3063555
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Los Angeles # 2150, Col. Garza Cantu",
     "lat": 25.709502,
     "lng": -100.287196
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cda. Victoria-Matamoros Km. 222mas 277, Col. Sc",
     "lat": 24.863716,
     "lng": -98.139742
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Libre Reynosa a San Fernando Km. 47, Col. Ejido Fco. I. Madero",
     "lat": 26.0268273959,
     "lng": -98.2785070681
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Ciruelos No. 95, Col. Fracc. Lomas Real de Jarachina",
     "lat": 26.049118,
     "lng": -98.349404
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Monterrey Km 207, Col. Valle Alto",
     "lat": 26.064307,
     "lng": -98.347663
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Mexico No. 103, Col. Fraccionamiento Villas Los Nogales",
     "lat": 26.077113,
     "lng": -98.325711
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 330 Carr. Concepcion Del Oro Saltillo, Col. .",
     "lat": 25.26543,
     "lng": -101.09039
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd Antonio Cardenas Numero 961, Col. Lourdes",
     "lat": 25.392726,
     "lng": -101.002559
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Mirasierra No. 2085, Col. Nuevo Mirasierra Segunda Etapa",
     "lat": 25.4173111111111,
     "lng": -100.919908333333
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Luis Donaldo Colosio No. 5055, Col. Torresillas y Ramones",
     "lat": 25.440244,
     "lng": -100.877359
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Norberto Trevino No. 2986, Col. Trevino Zapata",
     "lat": 23.759128,
     "lng": -99.148937
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Nal. Km 9.5 Victoria-Monterrey, Col. Ejido Laborcitas",
     "lat": 23.821367,
     "lng": -99.122763
  },
  {
     "marca": "PEMEX",
     "direccion": "Gral. Emiliano Zapata y Vicente Suarez, Col. N.C.P.Plan de Ayala",
     "lat": 24.950352,
     "lng": -98.794073
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Naciones Unidas No. 2550, Col. Luis Donaldo Colosio Murrieta",
     "lat": 23.75569,
     "lng": -99.17353
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Laredo Km 777.5, Col. S.C.",
     "lat": 24.260654,
     "lng": -99.43642
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo # 803 Norte, Col. Centro",
     "lat": 24.86033,
     "lng": -99.57065
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Central # 57 Km 178, Col. San Rafael",
     "lat": 25.02234,
     "lng": -100.54562
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cda. Victoria Monterrey Km.- 19+870, Col. Sc",
     "lat": 25.2489616655261,
     "lng": -99.9710114993362
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Allende-Monterrey, Km. 4+800, Col. No",
     "lat": 25.2985751487761,
     "lng": -100.049178373016
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 186 Carrt. 54 Tramo Saltillo-Zacatecas, Col. S/D",
     "lat": 24.17305,
     "lng": -101.48461
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I Madero 111, Vanegas, S.L.P., Col. Zona Centro",
     "lat": 23.878461,
     "lng": -100.951067
  },
  {
     "marca": "PEMEX",
     "direccion": "Juarez # 1521, Col. Centro",
     "lat": 23.636145,
     "lng": -100.643901
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Central 57 Slp-Matehuala Km 179+605 # 3805, Col. S/D",
     "lat": 23.556547,
     "lng": -100.627563
  },
  {
     "marca": "PEMEX",
     "direccion": "Corredor Urbano Luis Donaldo Colosio No. 102 Pte., Col. Miramar",
     "lat": 22.288967,
     "lng": -97.813044
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Monterrey # 817, Col. Enrique Cardenas Gonzalez",
     "lat": 22.306671,
     "lng": -97.858038
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Tampico-Mante Km.142, Col. .",
     "lat": 22.3291578369707,
     "lng": -97.8744480634766
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Allende No. 308, Col. Centro",
     "lat": 22.398826,
     "lng": -97.937504
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 1ero. de Mayo # 1401 Pte., Col. Lazaro Cardenas",
     "lat": 22.253262,
     "lng": -97.847021
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Adolfo Lopez Mateos No. 1001 Sur Esq.Calle 8, Col. Jardin 20 de Noviembre",
     "lat": 22.26255,
     "lng": -97.850531
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Monterrey No. 601 Pte., Col. Ampliacion Unidad Nacional",
     "lat": 22.281187,
     "lng": -97.84775
  },
  {
     "marca": "PEMEX",
     "direccion": "Valentin Amador Numero 500, Col. El Morro",
     "lat": 22.176275,
     "lng": -100.939564
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. San Luis Potosi-Matehuala Km 9, Col. S/C",
     "lat": 22.212536,
     "lng": -100.914246
  },
  {
     "marca": "PEMEX",
     "direccion": "Rafael Nieto Compean Km. 1.14 Poniente,Manzana 74, Col. Aurora",
     "lat": 22.442954,
     "lng": -100.302002
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.135 Carr. 57 S.L.P.-Matehuala, Col. Rancho la Herradura",
     "lat": 23.165494,
     "lng": -100.523875
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Providencia - Luis Moya Km. 14+332, Col. Gomez Orozco",
     "lat": 22.170259,
     "lng": -102.246298
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.3 Carr.Tierra Blanca-Loreto, Col. .",
     "lat": 22.314075,
     "lng": -102.029488
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalupe-Cd. Cuauhtemoc Km. 2.200, Col. ",
     "lat": 22.7264859377568,
     "lng": -102.493723179627
  },
  {
     "marca": "PEMEX",
     "direccion": "Clzda. Francisco Garcia Salinas # 29, Col. S/C",
     "lat": 22.752844,
     "lng": -102.52951
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Enrique Torres Miranda 301, Col. Unidad Modelo",
     "lat": 22.284958,
     "lng": -97.886227
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tampico-Mante Km 52+585, Col. Administracion Altamira",
     "lat": 22.552914,
     "lng": -98.149519
  },
  {
     "marca": "PEMEX",
     "direccion": "Juarez No 501 Poniente, Col. .",
     "lat": 22.745022,
     "lng": -98.976399
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.35.5 Carr. Estacion Manuel-Soto la Marina, Col. .",
     "lat": 22.920119,
     "lng": -98.090179
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Victoria-Zaragoza Km 16 Tramo Tampico-Ejido, Col. S/D",
     "lat": 23.707181,
     "lng": -98.992665
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Real Num. 1001, Col. Localidad Pedregoso",
     "lat": 22.25938,
     "lng": -101.77282
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fed. San Luis Potosi-Zacatecas Km.29+657, Col. Sc",
     "lat": 22.312569,
     "lng": -101.1606
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Juventud No 3, Col. .",
     "lat": 22.754586,
     "lng": -101.075362
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Norte Km 56 Tramo Zacatecas-Matehuala, Col. La Angostura",
     "lat": 22.206452,
     "lng": -101.010549
  },
  {
     "marca": "PEMEX",
     "direccion": "Rey Carlo Magno # 872, Col. Reyitos",
     "lat": 22.163208,
     "lng": -100.99503
  },
  {
     "marca": "PEMEX",
     "direccion": "Reforma N0. 1153, Col. Centro",
     "lat": 22.153908,
     "lng": -100.981507
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Salk # 115 entre Morelos y Peral, Col. Las Pilitas",
     "lat": 22.133666,
     "lng": -100.95726
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Mexico-Queretaro-S.L.P Km 420, Col. .",
     "lat": 22.1340855,
     "lng": -100.935154
  },
  {
     "marca": "PEMEX",
     "direccion": "Anillo Periferico 136, Col. Zona Rastro",
     "lat": 22.142338,
     "lng": -100.916079
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Ciudad Valles - San Luis Potosi Km. 251.010, Col. ",
     "lat": 22.13767,
     "lng": -100.8522
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Nal. Mexico-Laredo Km 534, Col. S/D",
     "lat": 22.553472,
     "lng": -99.078031
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 101 a Matamoros Km. 108.000, Col. ",
     "lat": 23.40846,
     "lng": -99.38517
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Mariano Otero No. 1506, Col. Fracc.Paseo de Los Olivos",
     "lat": 23.719012,
     "lng": -99.116898
  },
  {
     "marca": "PEMEX",
     "direccion": "Venustiano Carranza (22) Num.210 Esq.Calle Morelos, Col. Centro",
     "lat": 23.7335756248768,
     "lng": -99.1574243091927
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Victoria-Matamoros Km 1, Col. S/D",
     "lat": 23.7409013207142,
     "lng": -99.132862583992
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.M.de la Madrid Esq.1er Anillo Circunval # 621, Col. S/C",
     "lat": 21.954855,
     "lng": -102.338509
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Siglo Xxi No. 2020, Col. La Providencia",
     "lat": 21.948024,
     "lng": -102.311879
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard a Zacatecas No. 605, Col. Fracc. las Hadas",
     "lat": 21.911452,
     "lng": -102.291879
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Aguascalientes No. 601, Col. El Cobano",
     "lat": 21.910035,
     "lng": -102.274369
  },
  {
     "marca": "PEMEX",
     "direccion": "Juarez # 313 Sur, Col. Loc. San Fco. de Los Romos",
     "lat": 22.075737,
     "lng": -102.27292
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Palo Alto-La Soledad Km 18.5, Col. .",
     "lat": 21.921521,
     "lng": -101.969421
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada de Guadalupe # 4500, Col. Satelite",
     "lat": 22.109835,
     "lng": -100.960663
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera (57) Queretaro-San Luis Potosi Km. 177.800, Col. ",
     "lat": 22.0414,
     "lng": -100.8562
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Fed.70 Sn Luis Potosi-Rio Verde En Paso San, Col. San Antonio",
     "lat": 22.034064,
     "lng": -100.412945
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Tuxpam-Tampico, Col. .",
     "lat": 22.045541,
     "lng": -98.184714
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Rivera y Camelia S/N, Col. Loc. Congregacion Anahuac",
     "lat": 22.208281,
     "lng": -97.859847
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tampico Valles Sn, Col. Ejido El Moralillo",
     "lat": 22.224002,
     "lng": -97.907691
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 218+100 Carrt. Nac. Pachuca-Tampico, Col. El Pintor",
     "lat": 21.162657,
     "lng": -98.400794
  },
  {
     "marca": "PEMEX",
     "direccion": "Gonzalez Ortega No. 60, Col. Juarez",
     "lat": 21.2738472222222,
     "lng": -98.3709027777778
  },
  {
     "marca": "PEMEX",
     "direccion": "Carranza S/N, Col. Barrio Progreso",
     "lat": 21.63416,
     "lng": -98.65864
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cd. Valles-Tampico Km 45.800, Col. S/C",
     "lat": 22.07793,
     "lng": -98.65143
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Gustavo Diaz Ordaz Oriente # 1746, Col. S/D",
     "lat": 21.27594,
     "lng": -102.297995
  },
  {
     "marca": "PEMEX",
     "direccion": "Ninos Heroes 116, Col. Sin Nombre",
     "lat": 21.20643,
     "lng": -102.123933
  },
  {
     "marca": "PEMEX",
     "direccion": "Sauz Amarillo # 1, Col. El Arenal",
     "lat": 21.337478,
     "lng": -101.927964
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Leon-Aguas T. Leon Lagos de Moreno Km 34, Col. Ejido la Moya",
     "lat": 21.318054,
     "lng": -101.882207
  },
  {
     "marca": "PEMEX",
     "direccion": "Hierro No. 301, Col. San Joseobrero",
     "lat": 21.141231,
     "lng": -101.702231
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Antonio Madrazo No. 1191 y Blvd. Campestre, Col. Las Trojes",
     "lat": 21.144022,
     "lng": -101.658737
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Antonio Madrazo Num. 3701, Col. San Jose Del Consuelo",
     "lat": 21.153345,
     "lng": -101.654177
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 2 Carret. Ojuelos-Lagos de Moreno, Col. .",
     "lat": 21.84481,
     "lng": -101.59528
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Vicente Valtierra Num. 2602, Col. El Coecillo",
     "lat": 21.130408,
     "lng": -101.658113
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. la Luz No. 3315, Col. San Pedro de Los Hernandez",
     "lat": 21.11686,
     "lng": -101.6347
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Fco. Villa No. 4402 Esq.Blvd. Timoteo Lozano, Col. San Jose de Cementos",
     "lat": 21.084861,
     "lng": -101.666705
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Mariano Escobedo Num. 4702, Col. Jardines de Jerez",
     "lat": 21.103617,
     "lng": -101.641155
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Delta Num. 520, Col. Sangre de Cristo",
     "lat": 21.095683,
     "lng": -101.615798
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Juan Jose Torres Landa Num. 1502, Col. Fraccionamiento San Miguel",
     "lat": 21.100439,
     "lng": -101.675409
  },
  {
     "marca": "PEMEX",
     "direccion": "Nicaragua Num. 303 Esq. Calle Oaxaca, Col. Arbide",
     "lat": 21.122824,
     "lng": -101.694044
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 101.500 Carrt. Fed. San Juan Del Rio-Xilitla, Col. Poblado PeºA Blanca",
     "lat": 21.0256,
     "lng": -99.74384
  },
  {
     "marca": "PEMEX",
     "direccion": "Alameda Numero 2, Col. Barrio de Guadalupe",
     "lat": 21.645913,
     "lng": -99.8175345
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt.Fed.70 Valles-Rioverde Km 130+300 Esq.Super, Col. S/C",
     "lat": 21.921547,
     "lng": -99.958668
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.12 Carretera Rio Verde-San Luis, Col. .",
     "lat": 21.93292,
     "lng": -100.02767
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr, Fed. San Juan Del Rio-Xilitla Xil Km. 184.700, Col. ",
     "lat": 21.20044,
     "lng": -99.44738
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Laredo Km 400, Col. Huichihuayan",
     "lat": 21.482232,
     "lng": -98.968611
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Valles - Tampico Km. 5.7, Col. Las Aguilas",
     "lat": 21.977159,
     "lng": -98.956269
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Valles-Rio Verde Esq. Con Colombia, Col. Cuauhtemoc",
     "lat": 21.994153,
     "lng": -99.02771
  },
  {
     "marca": "PEMEX",
     "direccion": "Iturbide Encarnacion Carret. San Juan-San Miguel, Col. San Juan de Los Reynoso",
     "lat": 21.070253,
     "lng": -102.290645
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. San Francisco Del Rincon - El Maguey Num. 2307, Col. Loma de la Bufanda",
     "lat": 20.992264,
     "lng": -101.843216
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard San Juan Bosco Num. 2326, Col. Ejido la Joya",
     "lat": 21.136854,
     "lng": -101.72337
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Aeropuerto # 2516, Col. Campestre San Jose",
     "lat": 21.065638,
     "lng": -101.590972
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Emiliano Zapata 176, Col. S/C",
     "lat": 20.967318,
     "lng": -101.421482
  },
  {
     "marca": "PEMEX",
     "direccion": "Heroes de Cananea No. 102, Col. Obrera",
     "lat": 20.571621,
     "lng": -101.18306
  },
  {
     "marca": "PEMEX",
     "direccion": "Entronque a Carretera 57 Km. 1.8, Col. La Huerta",
     "lat": 20.988186,
     "lng": -100.402837
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Chichimequillas Km. 19+800, Col. Ejido Amazcala",
     "lat": 20.727506,
     "lng": -100.28822
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco Zarco # 7, Col. Centro",
     "lat": 20.91007,
     "lng": -99.56765
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. No. 57 Km 62.5 Tramo Qro-S.L.Paz, Col. S/D",
     "lat": 21.079689,
     "lng": -100.514647
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Pozos San Jose Iturbide Km. 10, Col. Sc",
     "lat": 21.209944,
     "lng": -100.497455
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 87+740 Carret. Federal 57 San Luis Potosi-Qro., Col. Sc",
     "lat": 21.293851,
     "lng": -100.593132
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.98+350 Carr. Pachuca-Tampico, Col. S/C",
     "lat": 20.6629770140265,
     "lng": -98.6631361104508
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 43 Carr Tuxpan-Tampico Alazan Ver, Col. No",
     "lat": 21.091883,
     "lng": -97.731343
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 32 Carrt. Federal Alamo Tihuatlan, Col. Estero Del Idolo",
     "lat": 20.883712,
     "lng": -97.656309
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Poza Rica Tihuatlan Km. 8, Col. Sc",
     "lat": 20.591709,
     "lng": -97.494844
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Adolfo Ruiz Cortinez # 668 Esq. 5 Ote., Col. Independencia",
     "lat": 20.56034,
     "lng": -97.442997
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 739.5 Carret. Panamericana Ent. Durango-Torreon, Col. .",
     "lat": 23.2976691822783,
     "lng": -102.95836835582
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Maestros Industriales S/N., Col. .",
     "lat": 23.828442,
     "lng": -103.041262
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Panamericana Km. 826, Col. .",
     "lat": 23.643747,
     "lng": -103.625658
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 5 de Febrero #200-A, Col. Centro",
     "lat": 23.72967,
     "lng": -103.98463
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Altamirano No. 84, Col. .",
     "lat": 24.289354,
     "lng": -103.396576
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. J. Jesus Varela Rico Sur No. 714, Col. Ricardo Monreal Avila",
     "lat": 23.1652,
     "lng": -102.88815
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Plateros No. 1031, Col. Arboledas",
     "lat": 23.196271,
     "lng": -102.858347
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Panamericana Km. 31+600, Col. Sc",
     "lat": 22.972135,
     "lng": -102.721464
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Gdl-Zacatecas Tramo Villanueva-Zacatecas Km. 306.230, Col. ",
     "lat": 22.751215,
     "lng": -102.667362
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Aleman y Carr.Panamericana, Col. .",
     "lat": 22.770038,
     "lng": -102.581866
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Panamericana Km. 678 Cruce Carr.A Saltillo, Col. .",
     "lat": 22.861594,
     "lng": -102.623959
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Convencion de 1914 Norte No. 1507, Col. Miravalle",
     "lat": 21.898203,
     "lng": -102.302498
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Siglo Xxi Esq. Av. Independencia No. 3006, Col. Trojes de Alonso",
     "lat": 21.961608,
     "lng": -102.330921
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Panam. Km. 613, Col. .",
     "lat": 22.560257,
     "lng": -102.252101
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lic. Adolfo Ruiz Cortinez No. 102, Col. Francisco Villa",
     "lat": 21.87273,
     "lng": -102.3277
  },
  {
     "marca": "PEMEX",
     "direccion": "Jose Ma Chavez y Placeres, Col. .",
     "lat": 21.867921,
     "lng": -102.294302
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Siglo Xxi, Col. Lomas Del Chapulin",
     "lat": 21.862066,
     "lng": -102.248062
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 0.500 de la Carret. Yago Entrq. Internacional, Col. .",
     "lat": 21.839277,
     "lng": -105.069108
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Internacional Mexico-Nogales Km 1000, Col. Ejido Rosamorada",
     "lat": 22.121156,
     "lng": -105.229047
  },
  {
     "marca": "PEMEX",
     "direccion": "Morelos Esq. Quintana Roo No. 149, Col. Centro",
     "lat": 22.489734,
     "lng": -105.373588
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tlaltenango-Guadalajara Km. 1, Col. Sin Colonia",
     "lat": 21.620469,
     "lng": -103.041162
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.176+136 Carr. Zacatecas-Guadalajara, Col. .",
     "lat": 21.757312,
     "lng": -102.973575
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Rodolfo Landeros Gallegos No 467, Col. El Chilarillo",
     "lat": 21.848266,
     "lng": -102.701739
  },
  {
     "marca": "PEMEX",
     "direccion": "Reforma # 1 Sur, Col. El Cuitatero",
     "lat": 22.10953,
     "lng": -103.26411
  },
  {
     "marca": "PEMEX",
     "direccion": "Cerretera Federal Guadalajara Zacatecas Km 278,145, Col. Villa Nueva",
     "lat": 22.547192,
     "lng": -102.794213
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 1.5 de la Carret. Jerez-El Cargadero, Col. .",
     "lat": 22.673441,
     "lng": -103.009593
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave Ejido y Francisco I Madero, Col. .",
     "lat": 21.745522,
     "lng": -105.231683
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Praxedis Guerrero No.128 Sur, Esq.Av.Insurge, Col. Emiliano Zapata",
     "lat": 21.514578,
     "lng": -104.909324
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Zapopan  865, Col. Los Viveros",
     "lat": 21.5262652243648,
     "lng": -104.877887160713
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Tepic Xalisco No.142 Sabino y Sierra de Alica, Col. PeºIta",
     "lat": 21.4942972164425,
     "lng": -104.896708711639
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Insurgentes No. 1254, Col. Fraccionamiento Ciudad Valle",
     "lat": 21.492618,
     "lng": -104.88103
  },
  {
     "marca": "PEMEX",
     "direccion": "Platino No. 57 Ote., Col. Ciudad Industrial Microindustria",
     "lat": 21.47532,
     "lng": -104.8526
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas 148, Col. El Rosario",
     "lat": 21.2413300003528,
     "lng": -102.325980431877
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt.Panamericana Aguascalientes-Mexico Km 112.24, Col. Ejido Pe#Uelas",
     "lat": 21.730056,
     "lng": -102.277696
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.22 Carr. Ags-Ojuelos Entroq.Carr.A Sn.Bartolo, Col. .",
     "lat": 21.820473,
     "lng": -102.100177
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Siglo Xxi 1713, Col. Ex-Hacienda la Cantera",
     "lat": 21.85159,
     "lng": -102.352992
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera las Varas-Zucualpan Km 2+030, Col. Las Varas",
     "lat": 21.19333,
     "lng": -105.14936
  },
  {
     "marca": "PEMEX",
     "direccion": "Hgo.91 Nte.Ent.Las Calles Leandeo Ocampo y Guerrer, Col. .",
     "lat": 21.448928,
     "lng": -104.899657
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal No. 15 Km. 213+200, Col. Ejido San Cayetano",
     "lat": 21.436937,
     "lng": -104.799955
  },
  {
     "marca": "PEMEX",
     "direccion": "Zaragoza Oriente No.  441, Col. Mexpan",
     "lat": 21.036165,
     "lng": -104.40472
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Malpaso-Teul Km 186, Col. S/D",
     "lat": 21.465177,
     "lng": -103.455623
  },
  {
     "marca": "PEMEX",
     "direccion": "Salida Carr Aguascalientes, Col. .",
     "lat": 21.18877,
     "lng": -102.885321
  },
  {
     "marca": "PEMEX",
     "direccion": "., Col. ",
     "lat": 20.9688260854118,
     "lng": -102.648660739576
  },
  {
     "marca": "PEMEX",
     "direccion": "Javier Mina Num. 60, Col. .",
     "lat": 21.164938,
     "lng": -102.472139
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alcalde No. 1005, Col. .",
     "lat": 20.692253,
     "lng": -103.348522
  },
  {
     "marca": "PEMEX",
     "direccion": "No.899 Ent.Calles Prolongacion y Felix Palavacini, Col. .",
     "lat": 20.704379,
     "lng": -103.346854
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 3 Carretera Guadalajara-Saltillo, Col. .",
     "lat": 20.722493,
     "lng": -103.345716
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Cruz de Huanacaxtle-Punta de Mita No.1606, Col. Higuera Blanca-41",
     "lat": 20.765307,
     "lng": -105.486203
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tepic Puerto Vallarta No. 1273 Sur, Col. Residencial Flamingos",
     "lat": 20.748951,
     "lng": -105.315963
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 151.5 Carrt. Fed. 200 Tepic-Puerto Vallarta, Col. Loc. Jarretaderas",
     "lat": 20.7042,
     "lng": -105.27286
  },
  {
     "marca": "PEMEX",
     "direccion": "Miguel Hidalgo S/N Esq. Calle Oaxaca, Col. Centro",
     "lat": 20.803975,
     "lng": -105.24667
  },
  {
     "marca": "PEMEX",
     "direccion": "Lazaro Cardenas y 2 de Octubre, Col. No",
     "lat": 20.815727,
     "lng": -105.194951
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Patria S/N, Col. Fracc. Real Acueducto",
     "lat": 20.709719,
     "lng": -103.409207
  },
  {
     "marca": "PEMEX",
     "direccion": "Plata # 1701, Col. San Isidro Ejidal",
     "lat": 20.735291,
     "lng": -103.399997
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Del Obrero No 1635 Sector Libertad, Col. Postes Cuates",
     "lat": 20.69171,
     "lng": -103.311841
  },
  {
     "marca": "PEMEX",
     "direccion": "Pablo Valdez No. 3602 y 3608, Col. San Joaquin",
     "lat": 20.673728,
     "lng": -103.282533
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalajara - Saltillo Km. 46.6 S/N, Col. La Hacienda de Guadalupe",
     "lat": 20.848317,
     "lng": -103.256961
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Guadalajara-Puerto Vallarta Km. 12.500, Col. Sin Colonia",
     "lat": 20.680233,
     "lng": -103.697505
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 698 Carr. Mexico-Nogales, Col. Loc. la Venta Del Astillero",
     "lat": 20.729262,
     "lng": -103.540314
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 9 Carret. Fed. Guadalajara-Tepic, Col. .",
     "lat": 20.706048,
     "lng": -103.463198
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Patria S/N Esq. Av. Manuel J. Clouthier, Col. Jardines Del Tepeyac",
     "lat": 20.659455,
     "lng": -103.422981
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Vallarta No. 6503, Esq. Vallarta y Periferico, Col. Cd. Granja",
     "lat": 20.693203,
     "lng": -103.452949
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a la Base Aerea # 330 M-3,L-Fracc. C y B, Col. Fracc. Jardines de Nuevo Mexico",
     "lat": 20.760815,
     "lng": -103.43997
  },
  {
     "marca": "PEMEX",
     "direccion": "Lazaro Cardenas No. 3810, Col. Jardines de San Ignacio",
     "lat": 20.671377,
     "lng": -103.404753
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Lazaro Cardenas No. 2071, Col. Del Sur",
     "lat": 20.653708,
     "lng": -103.374304
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Colon No. 1599 Esq. 2 de Abril, Col. Morelos",
     "lat": 20.656817,
     "lng": -103.361209
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Mezquitan No. 500, Col. .-",
     "lat": 20.684297,
     "lng": -103.352822
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Independencia Norte No. 525, Col. El Retiro",
     "lat": 20.683821,
     "lng": -103.337469
  },
  {
     "marca": "PEMEX",
     "direccion": "Manuel Doblado Nos. 691, 693, 695 y 697, Col. Zona Centro",
     "lat": 20.683034,
     "lng": -103.331228
  },
  {
     "marca": "PEMEX",
     "direccion": "Chamizal No.505 Esq. Con la Av. Revolucion, Col. .-",
     "lat": 20.647622,
     "lng": -103.306081
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalajara Zapotlanejo No. 1000, Col. .-",
     "lat": 20.62854,
     "lng": -103.290829
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Malecon Num. 836, Col. La Presa",
     "lat": 20.646312,
     "lng": -103.273045
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. a Chapala No. 4380, Col. Brisas de Chapala",
     "lat": 20.612427,
     "lng": -103.324668
  },
  {
     "marca": "PEMEX",
     "direccion": "Gonzalez Gallo Num. 2561, Col. El Rosario",
     "lat": 20.634928,
     "lng": -103.326662
  },
  {
     "marca": "PEMEX",
     "direccion": "Marcelino Garcia Barragan # 1701, Col. Universitaria",
     "lat": 20.651425,
     "lng": -103.324133
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Sur No. 6810, Col. San Sebastianito",
     "lat": 20.587955,
     "lng": -103.384598
  },
  {
     "marca": "PEMEX",
     "direccion": "Sierra de Tapalpa Esq.Av.18 de Marzo No.1545, Col. Las Aguilas",
     "lat": 20.628399,
     "lng": -103.409924
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cruz Del Sur No. 2884 y 2888, Col. Bosques de la Victoria",
     "lat": 20.64377222,
     "lng": -103.3863972
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 21.5 Autopista Guadalajara-Zapotlanejo, Col. El Choluz de las Huertas",
     "lat": 20.617318,
     "lng": -103.254455
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Al Vado Num. 575, Col. Los Amiales",
     "lat": 20.61829,
     "lng": -103.2265
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Guadalajara  Zapotlanejo Km. 7  Mas 200, Col. Sc",
     "lat": 20.608653,
     "lng": -103.120435
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol. Gobernador Curiel No. 6809, Col. Los Artesanos",
     "lat": 20.582446,
     "lng": -103.354197
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de la Solidaridad Iberoamericana No. 1000, Col. .-",
     "lat": 20.592407,
     "lng": -103.321878
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera El Verde-San Martin Km 00001, Col. Lomas de San Martin",
     "lat": 20.5624499621206,
     "lng": -103.283406516533
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 1ro. de Mayo No. 02, Col. Santa Cruz Del Valle",
     "lat": 20.546979,
     "lng": -103.351737
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 17 de la Carret. Guadalajara-Chapala, Col. Fracc. El Zapote",
     "lat": 20.504409,
     "lng": -103.279851
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. El Verde Num.35, Col. San Jose Del Castillo",
     "lat": 20.510243,
     "lng": -103.236198
  },
  {
     "marca": "PEMEX",
     "direccion": "Hidalgo Cruzamiento Carr.Guad-Barra de Navidad, Col. .",
     "lat": 20.413092,
     "lng": -103.663352
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Real a Colima No. 1992, Col. San Agustin",
     "lat": 20.536889,
     "lng": -103.47197
  },
  {
     "marca": "PEMEX",
     "direccion": "Prlo. Av. Mariano Otero No. 2210, Col. Arenales Tapatios",
     "lat": 20.628086,
     "lng": -103.458149
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Aldama No. 70, Col. Santa Anita",
     "lat": 20.55017,
     "lng": -103.4389
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Santa Ana y Prolongacion la Calma #316, Col. Santa Ana Tepetitlan",
     "lat": 20.613518,
     "lng": -103.431162
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. San Sebastian El Grande-Tlajocomulco Km 2, Col. La Calerilla",
     "lat": 20.563122,
     "lng": -103.413184
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Guadalajara-La Piedad Km 62, Col. S/D",
     "lat": 20.552682,
     "lng": -102.807246
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tepatitlan-Tototlan Km. 26.320, Col. ",
     "lat": 20.76336,
     "lng": -102.723
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 18 de Marzo No. 8036 Esq. Av. Universidad, Col. El Carmen",
     "lat": 20.8044,
     "lng": -102.74551
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Anacleto Gonzalez Flores Eje Norte Num. 1996, Col. Plaza Los Altos",
     "lat": 20.842751080034,
     "lng": -102.740598814582
  },
  {
     "marca": "PEMEX",
     "direccion": "Javir Mina # 451, Col. El Refugio",
     "lat": 20.81704,
     "lng": -102.58845
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Independencia # 489, Col. Centro",
     "lat": 20.55107,
     "lng": -102.49971
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Sur Arandas Num. 2500, Col. Zona Industrial",
     "lat": 20.68789,
     "lng": -102.359092
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolg. Escobar # 350, Col. Las Moradas",
     "lat": 20.55238,
     "lng": -102.0453
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Tlajomulco a San Miguel Cuyutlan 1103, Col. S/C",
     "lat": 20.437306,
     "lng": -103.41506
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Guadalajara Morelia Km. 20-1 Lado Pte y Ote., Col. .",
     "lat": 20.488429,
     "lng": -103.491843
  },
  {
     "marca": "PEMEX",
     "direccion": "Circunvalacion No. 306, Col. S/C",
     "lat": 20.82121,
     "lng": -105.09404
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 14.4 de la Carret. San Clemente-Ayutla, Col. .",
     "lat": 20.1202055985028,
     "lng": -104.335677914017
  },
  {
     "marca": "PEMEX",
     "direccion": "Dr. Romero Arias y Morelos, Col. No",
     "lat": 20.544485,
     "lng": -104.045206
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Manuel Avila Camacho No. 372, Col. El Santuario",
     "lat": 20.909653,
     "lng": -103.967368
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Guadalajara-Barra de Navidad Km 25+800 #115, Col. S/C",
     "lat": 20.41684,
     "lng": -103.7641
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Alcalde No. 57 y Rafael Urzua, Col. .",
     "lat": 19.981692,
     "lng": -103.257898
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Hidalgo Num. 537, Col. S/C",
     "lat": 20.297392,
     "lng": -103.289657
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Guadalajara-Ocotlan Km. 36, Col. Fracc. Atequiza y la Capilla",
     "lat": 20.403854,
     "lng": -103.173949
  },
  {
     "marca": "PEMEX",
     "direccion": "Salinas de Gortari No.75y21 de Marzo Carr.B.Navida, Col. .",
     "lat": 19.87043,
     "lng": -105.336768
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Francisco Villa No. 783, Col. Versalles",
     "lat": 20.634686,
     "lng": -105.224906
  },
  {
     "marca": "PEMEX",
     "direccion": "Exiquio Corona S/N, Col. El Conejo Frac.Club Hipodromo Resid",
     "lat": 20.669859,
     "lng": -105.213949
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelia S/N entre Jiquilpan y Caracuaro, Col. .",
     "lat": 20.11879,
     "lng": -102.57472
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Guadalajara-Morelia Km 399+560 # 6400, Col. La Barca",
     "lat": 20.322649,
     "lng": -102.511856
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Juarez Pte. Esq. Con Luis Mendez #2000, Col. Adolfo Lopez Mateos",
     "lat": 20.005575,
     "lng": -102.318199
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lazaro Cardenas No. 851, Col. .",
     "lat": 20.348826,
     "lng": -102.036636
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Morelia-Jiquilpan Km.191.5, Col. .",
     "lat": 19.98185,
     "lng": -102.612591
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lazaro Cardenas Norte No. 396, Col. .",
     "lat": 20.064349,
     "lng": -102.716027
  },
  {
     "marca": "PEMEX",
     "direccion": "Ninos Heroes Num. 129, Col. Centro",
     "lat": 20.346821,
     "lng": -102.776828
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Jalisco No. 254 Sector Morelos, Col. Centro",
     "lat": 19.79983,
     "lng": -104.22605
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Guadalajara-Cd. Guzman Km 59, Col. S/D",
     "lat": 20.29002,
     "lng": -103.600099
  },
  {
     "marca": "PEMEX",
     "direccion": "Guadalajara-Ciudad Guzman, Col. ",
     "lat": 19.815079,
     "lng": -103.491311
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalajara - Colima Km. 83.600, Col. ",
     "lat": 19.727825,
     "lng": -103.5092917
  },
  {
     "marca": "PEMEX",
     "direccion": "Gral. Ramon Corona No. 512, Col. Centro",
     "lat": 19.693131,
     "lng": -103.464728
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera No. 54 Km. 15 Tramo 4 Caminos Cercaliza, Col. S/C",
     "lat": 19.63044,
     "lng": -103.33505
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Venustiano Carranza # 180, Col. S/D",
     "lat": 19.319386,
     "lng": -103.759939
  },
  {
     "marca": "PEMEX",
     "direccion": "Tercer Anillo Periferico # 465, Col. Cruz de Comala",
     "lat": 19.284789,
     "lng": -103.739157
  },
  {
     "marca": "PEMEX",
     "direccion": "Galeana Num. 131, Col. Suchitlan",
     "lat": 19.376183,
     "lng": -103.716798
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tonila-La Esperanza No. 1012, Col. Sin Colonia",
     "lat": 19.405365,
     "lng": -103.541594
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Benito Juarez # 784, Col. Villas Del Rio",
     "lat": 19.252257,
     "lng": -103.74553
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida San Fernando Num. 175, Col. Guadalajarita",
     "lat": 19.249865,
     "lng": -103.719024
  },
  {
     "marca": "PEMEX",
     "direccion": "Ejercito Mexicano Num.1075, Col. Hospital General y Complejo Admvo.",
     "lat": 19.2538543708044,
     "lng": -103.689339991402
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Francisco Uruapan No. 1501, Col. Fraccionamiento Santa Catarina",
     "lat": 19.392695,
     "lng": -102.022261
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Benito Juarez No. 1779, Col. Lomas Del Valle",
     "lat": 19.425852,
     "lng": -102.045417
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos No. 2060, Col. El Capiral",
     "lat": 19.089857,
     "lng": -102.377555
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 1+400 Carretera Pareo-El Limon, Col. S/C",
     "lat": 19.33262,
     "lng": -102.4644
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Netzahualcotl S/N Km.283+000 Carr.Libre Colima, Col. .",
     "lat": 18.934608,
     "lng": -103.970631
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Miguel de la Madrid Hurtado # 384, Col. Tapeixtles",
     "lat": 19.074094,
     "lng": -104.284093
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Elias Zamora Verduzco Barrio 11 # 151, Col. Valle de las Garzas",
     "lat": 19.095976,
     "lng": -104.303611
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Miguel de la Madrid Esquina Neptuno S/N, Col. La Querencia",
     "lat": 19.119931,
     "lng": -104.358219
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Alvaro Obregon No. 20, Col. .",
     "lat": 19.238069,
     "lng": -104.556565
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Guadalajara-Barra de Navidadkm. 190, Col. Sin Nombre",
     "lat": 19.620545,
     "lng": -104.453235
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Insurgentes No. 1102, Col. .",
     "lat": 18.927449,
     "lng": -103.884828
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Estatal Puerta de Caleras-Madrid Km 1, Col. .",
     "lat": 18.978241,
     "lng": -103.858551
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 40 Carrt. Tecoman-Playa Azul, Col. S/D",
     "lat": 18.674958,
     "lng": -103.680943
  },
  {
     "marca": "PEMEX",
     "direccion": "Ave. Paseo de la Solidaridad Parcela 460 # 15342, Col. Ejido de Lo de Juarez",
     "lat": 20.714172,
     "lng": -101.349317
  },
  {
     "marca": "PEMEX",
     "direccion": "Allende 59, Col. Centro",
     "lat": 20.872141,
     "lng": -101.511526
  },
  {
     "marca": "PEMEX",
     "direccion": "5 de Mayo No. 94, Col. Centro",
     "lat": 20.94397,
     "lng": -101.42108
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Villas de Irapuato # 2026, Col. Villas de Irapuato",
     "lat": 20.682547,
     "lng": -101.385542
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. C. Liceaga No. 1450 Esq. Adolfo Lopez Mateos, Col. Los Presidentes",
     "lat": 20.669018,
     "lng": -101.359541
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Diaz Ordaz # 404, Col. Zona Centro",
     "lat": 20.671682,
     "lng": -101.339663
  },
  {
     "marca": "PEMEX",
     "direccion": "Vialidad Neutla Comonfort 10, Col. ",
     "lat": 20.70815,
     "lng": -100.8349
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Salida a Celaya Km.1 #77, Col. La Lejona",
     "lat": 20.89893,
     "lng": -100.75315
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Queretaro-San Luis Potosi Km.20 Mas 220, Col. Sc",
     "lat": 20.7820342770971,
     "lng": -100.45122064418
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pie de la Cuesta No. 1203, Col. Desarrollo San Pablo",
     "lat": 20.630099,
     "lng": -100.407
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Est. 540 Qro-Estacion Chichimequi Km. 8.448, Col. ",
     "lat": 20.67121,
     "lng": -100.3626
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Bicentenario 457, Col. ",
     "lat": 20.975629696378,
     "lng": -100.425988863754
  },
  {
     "marca": "PEMEX",
     "direccion": "Ejido # 50, Col. San Gregorio",
     "lat": 20.603453,
     "lng": -100.406488
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Universidad Oriente #337-A, Col. Las Brujas",
     "lat": 20.60106,
     "lng": -100.38114
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Estatal Irapuato-Cueramaro Km. 4.5, Col. Ejido San Javier",
     "lat": 20.663962,
     "lng": -101.43437
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 3.2 Carret. Irapuato-Pueblo Nuevo, Col. .",
     "lat": 20.635281,
     "lng": -101.365214
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd San Roque S/N y Calle Aranda, Col. Las Misiones",
     "lat": 20.66692,
     "lng": -101.339257
  },
  {
     "marca": "PEMEX",
     "direccion": "Faja de Oro No. 1642, Col. Predio El Pirul",
     "lat": 20.58555,
     "lng": -101.22134
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Qro. Leon T. Qro.Lim. Edos. Qro7gto Km11+160, Col. Corregidora",
     "lat": 20.542213,
     "lng": -100.452311
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Boulevard Bernardo Quintana S/N, Col. Puertas Del Sol",
     "lat": 20.616791,
     "lng": -100.446427
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. de las Ciencias # 3010, Col. Fracc. Juriquilla",
     "lat": 20.696392,
     "lng": -100.439798
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino a Los Olvera 709, Col. Los Olvera",
     "lat": 20.534432,
     "lng": -100.415018
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Queretaro # 2110, Col. Lomas de Casa Blanca",
     "lat": 20.574817,
     "lng": -100.392442
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Constituyentes Poniente # 1252, Col. Ciudad Maderas",
     "lat": 20.58766,
     "lng": -100.3728
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. Celaya-Salamanca Km 5.5 S/N, Col. S/C",
     "lat": 20.515225,
     "lng": -100.889001
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 12 de Octubre No. 200, Col. Fraccionamiento Celaya",
     "lat": 20.531485,
     "lng": -100.836224
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Avenida Tecnologico Numero 980, Col. Democracia",
     "lat": 20.568165,
     "lng": -100.822811
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Irrigacion 156 Esq. Presa Alvaro Obregon, Col. Benito Juarez Zona 1",
     "lat": 20.53688,
     "lng": -100.8043
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.5 Carr. Federal Cleya-Queretaro Poblado Rancho, Col. .",
     "lat": 20.519011,
     "lng": -100.75481
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cazadora Esquina Av. Leona Vicario 1106-B, Col. San Juan Chihuahua",
     "lat": 20.58514,
     "lng": -101.20782
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Faja de Oro No. 504 Esq. Emilio Carranza, Col. Tamaulipas",
     "lat": 20.575254,
     "lng": -101.191266
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Hidalgo No. 2704, Col. Ejido de Valtierrilla",
     "lat": 20.557026,
     "lng": -101.165061
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Celaya-Juventino Rosas Km. 17.400, Col. ",
     "lat": 20.6307646214675,
     "lng": -100.971945991135
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera a Los Cues Km. 1+532, Col. Sc",
     "lat": 20.561348,
     "lng": -100.267231
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Panamericana # 123, Col. Estrella",
     "lat": 20.494497,
     "lng": -100.136636
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. San Juan Del Rio-Xilitla Km 15, Col. Comunidad Bordo Blanco",
     "lat": 20.4908375500738,
     "lng": -99.9345242294998
  },
  {
     "marca": "PEMEX",
     "direccion": "Galeana No. 40, Col. Guadalupana",
     "lat": 20.38828,
     "lng": -102.9217
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Fco. I. Madero No. 551, Col. .",
     "lat": 20.704854,
     "lng": -102.332662
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Michoacan # 745, Col. Arroyo Hondo",
     "lat": 20.363492,
     "lng": -102.02628
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol. B.Juarez Esq.Carr.M.Dobado-P.Negr Km. 0.000, Col. ",
     "lat": 20.73808,
     "lng": -101.9534
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cueramaro-Manuel Doblado Km 2, Col. S/C",
     "lat": 20.640245,
     "lng": -101.680549
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Celaya-Salvatierra Km 8.2 Fracc.Parcela, Col. Sc",
     "lat": 20.435245,
     "lng": -100.795711
  },
  {
     "marca": "PEMEX",
     "direccion": "Rodolfo Piña Soria 110, Col. Centro",
     "lat": 20.5417478709594,
     "lng": -100.692548574066
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Apaseo El Alto-Jerecuaro Km.1+850, Col. Comunidad la Luisiada",
     "lat": 20.433722,
     "lng": -100.599553
  },
  {
     "marca": "PEMEX",
     "direccion": "Lerdo Ote No. 621, Col. Zona Centro",
     "lat": 20.452834,
     "lng": -101.519469
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Ramal a Jicamas Km. 3, Col. Sc",
     "lat": 20.371299,
     "lng": -101.316107
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Jose Velazquez Zepeda Poniente #6, Col. Centro",
     "lat": 20.197373,
     "lng": -100.366772
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 171 Carrt. Panamericana Salida a Queretaro, Col. .",
     "lat": 20.38352,
     "lng": -100.01203
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Universidad 364, Col. Banthi",
     "lat": 20.387976,
     "lng": -99.949551
  },
  {
     "marca": "PEMEX",
     "direccion": "Niños Heroes S/N, Col. S/D",
     "lat": 20.519291,
     "lng": -99.897113
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Progreso-Ixmiquilpan Km. 10.725, Col. ",
     "lat": 20.3378088512589,
     "lng": -99.2057247988892
  },
  {
     "marca": "PEMEX",
     "direccion": "Morelos Equina Ignacio Ramirez, Col. Centro",
     "lat": 19.96368,
     "lng": -102.302114
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Zamora-Morelia Km. 142, Col. Sin Colonia",
     "lat": 19.96832,
     "lng": -102.265987
  },
  {
     "marca": "PEMEX",
     "direccion": "Lazaro Cardenas # 55, Col. Loc. Adolfo Ruiz Cortinez",
     "lat": 19.836926,
     "lng": -102.219521
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol.Av. Hidalgo No.1091, Col. Banquetes",
     "lat": 20.323153,
     "lng": -102.018086
  },
  {
     "marca": "PEMEX",
     "direccion": "Entrq. Carret. Salvatierra-Acambaro-Yuriria No 100, Col. .",
     "lat": 20.216731,
     "lng": -100.895267
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.28.500 No.4000, Carretera Celaya-Salvatierra, Col. .",
     "lat": 20.234532,
     "lng": -100.840031
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Acambaro Margen Norte Km 1.400, Col. Loc. Paracuaro",
     "lat": 20.12778,
     "lng": -100.746438
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Emilio Carranza No. 790, Col. Emilio Carranza",
     "lat": 20.0394017315671,
     "lng": -100.703461228172
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Estatal 47 Km 12+100, Col. S/C",
     "lat": 20.181328,
     "lng": -100.475284
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Morelia-Zinapecuaro Km 9+600, Col. S/D",
     "lat": 19.769534,
     "lng": -101.15167
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 32.5 Carret. Morelia-Salamanca, Col. .",
     "lat": 19.960146,
     "lng": -101.136282
  },
  {
     "marca": "PEMEX",
     "direccion": "Morelos No. 90, Col. .",
     "lat": 20.13503,
     "lng": -101.179268
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Sur Km 6.4, Col. S/C",
     "lat": 20.219371,
     "lng": -101.112031
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cortazar-Jaral Del Progreso Km. 1, Col. Los Fresnos",
     "lat": 20.475959,
     "lng": -100.971981
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Puruandiro-Zinaparo Km.21, Col. .",
     "lat": 20.14731,
     "lng": -101.714339
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 23.5 Entq. Carrt. Yuriria-Valle de Stgo-Cerano, Col. Pob. de Cerano",
     "lat": 20.121784,
     "lng": -101.372336
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I Madero Poniente No.9570, Col. Tacicuaro",
     "lat": 19.687983,
     "lng": -101.301105
  },
  {
     "marca": "PEMEX",
     "direccion": "Lib.Sur.Pte.No.3970 Ex-Hacienda Sn.J.La Huerta, Col. .",
     "lat": 19.677577,
     "lng": -101.229917
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Independencia No. 3503, Col. Santillan la Huerta",
     "lat": 19.675668,
     "lng": -101.218368
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico de la Republica No. 1030, Col. Rancho Del Realito",
     "lat": 19.725523,
     "lng": -101.201367
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Ventura Puente No. 1302, Col. Felix Ireta",
     "lat": 19.687881,
     "lng": -101.180852
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Francisco I Madero Oriente #6490, Col. V Etapa de Ciudad Industrial",
     "lat": 19.733645,
     "lng": -101.129968
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Acueducto # 3670, Col. Periferico Nva. Espa%A",
     "lat": 19.694325,
     "lng": -101.150047
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Hidalgo No. 192 Km. 192.000, Col. ",
     "lat": 19.68082,
     "lng": -100.5571
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Irimbo-Maravatio Km. 5, Col. S/C",
     "lat": 19.71108,
     "lng": -100.46491
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. 470 Tlanepantla-San Gabriel-Atlacomulco Km. 3.300, Col. ",
     "lat": 19.78174,
     "lng": -99.8389
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Ixtlahuaca-Jiquipilco Km. 1, Col. Rancho la Asuncion",
     "lat": 19.5687,
     "lng": -99.7564
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Jilotepec- Ixtlahuacakm. 14.35, Col. El Puerto",
     "lat": 19.888306,
     "lng": -99.659183
  },
  {
     "marca": "PEMEX",
     "direccion": "Circuito Exterior Mexiquense Par.7p1/3 Km. 16.440, Col. ",
     "lat": 19.74966,
     "lng": -99.11903
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Guadalajara Km. 129.730, Col. ",
     "lat": 19.88024,
     "lng": -100.1469
  },
  {
     "marca": "PEMEX",
     "direccion": "Alfredo Del Mazo S/N, Col. S/D",
     "lat": 19.9108,
     "lng": -100.00944
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Atlacomulco-El Oro S/N. Lote-1, Mz-13, Col. Zona Industrial Atlacomulco",
     "lat": 19.78295,
     "lng": -99.90294
  },
  {
     "marca": "PEMEX",
     "direccion": "Ejido de Santa Juana Seccion Primera S/N Km. 18.500, Col. ",
     "lat": 19.43491,
     "lng": -99.73783
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Toluca-Temoaya Km. 13.5, Col. Las Trojes",
     "lat": 19.421016,
     "lng": -99.613989
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Toluca-V.Cuauhtemoc S/N, Col. San Mateo Otzacatipan",
     "lat": 19.367104,
     "lng": -99.569698
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd.Manuel A.Camacho 810 Sobre Perif de Nte a Sur, Col. Sta.Cruz Acatlan",
     "lat": 19.4845441006704,
     "lng": -99.2349551079693
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ermita Iztapalapa No. 3071, Col. Santa Maria Aztahuacan",
     "lat": 19.3526134441343,
     "lng": -99.0148379067459
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Toluca-Almoloya de Jaurez Km. 2.5 S/N, Col. Exhacienda de Serraton",
     "lat": 19.31378,
     "lng": -99.730861
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Adolfo Lopez Mateos # 102, Col. Ojuelos",
     "lat": 19.289502,
     "lng": -99.696082
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Venustiano Carranza No. 400 Ote., Col. Universidad",
     "lat": 19.27884,
     "lng": -99.6516
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Periban-Buenavista Km. 2.5, Col. Centro",
     "lat": 19.50224,
     "lng": -102.42687
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 1 Carrt. Uruapan-Patzcuaro Margen Izquierdo, Col. El Periodista",
     "lat": 19.426069,
     "lng": -102.040783
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Real #808, Col. Ex-Hacienda de Santa Catarina",
     "lat": 19.41228,
     "lng": -102.0162
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cheran-Nahuatzen Km 2.5, Col. S/C",
     "lat": 19.66584,
     "lng": -101.9404
  },
  {
     "marca": "PEMEX",
     "direccion": "Laguna Titicaca 510, Col. Nueva Oxtotitlan",
     "lat": 19.280967,
     "lng": -99.680227
  },
  {
     "marca": "PEMEX",
     "direccion": "Gmo Menes Servin # 403 y Solidaridad las Torres, Col. Moderna de la Cruz",
     "lat": 19.267433,
     "lng": -99.65725
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 5 de Mayo Esq. Av. de las Torres, Col. San Francisco Coaxusco",
     "lat": 19.27201,
     "lng": -99.630966
  },
  {
     "marca": "PEMEX",
     "direccion": "20 de Noviembre #1280, Col. Pedernles",
     "lat": 19.136485,
     "lng": -101.47171
  },
  {
     "marca": "PEMEX",
     "direccion": "Calzada Lazaro Cardenas 1021, Col. Los Cedros",
     "lat": 19.400717,
     "lng": -101.650689
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Morelia -- Patzacuaro Km. 37+900, Col. Sc",
     "lat": 19.53451,
     "lng": -101.470544
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Morelia-Patzcuaro Km 17.200, Col. S/D",
     "lat": 19.587194,
     "lng": -101.304108
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Zacazonapan-Temascaltepec S/N, Col. S/C",
     "lat": 19.0665,
     "lng": -100.2465
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Valle de Bravo-Toluca Km. 25.000, Col. C/C",
     "lat": 19.14743,
     "lng": -100.07083
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Toluca-Zitacuaro Km 17.5, Col. Paraje Yukon",
     "lat": 19.358155,
     "lng": -99.803114
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Francisco I Madero # 752, Col. Buenos Aires",
     "lat": 19.10191,
     "lng": -102.36441
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cuatro Caminos-Apatzingan Km. 196.300, Col. ",
     "lat": 19.0571416327738,
     "lng": -102.324561377679
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Morelia Lazaro Cardenas Km. 152+68, Col. Sc",
     "lat": 18.998287,
     "lng": -102.080455
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera las Juntas - Ixtapan de la Sal # 2, Col. Primera de San Miguel",
     "lat": 18.9105,
     "lng": -99.7656
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolong. Dr. Javier Ibarra Ote. No. 64, Col. .",
     "lat": 19.1680064638935,
     "lng": -99.6094923558197
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Avenida Madero S/N, Col. Rancho la Huerta",
     "lat": 18.961704,
     "lng": -99.575998
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Chinameca-Tepalcingo # 15, Col. Chinameca",
     "lat": 18.62763,
     "lng": -99.003
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pablo Torres Burgos Num.75, Col. Centro",
     "lat": 18.76206,
     "lng": -98.983811
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Apatlaco No. 401, Col. Campo El Rayo, Ejido de Acatlipa",
     "lat": 18.83726,
     "lng": -99.22208
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos No.91, Col. Chipitlan",
     "lat": 18.89558,
     "lng": -99.22967
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Fed. Zirandaro-Cd- Altamirano No. 2030, Col. .",
     "lat": 18.470978,
     "lng": -100.980531
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Villa Madero-Caracuaro Km 82.5 # 1833, Col. S/C",
     "lat": 19.03169,
     "lng": -101.12949
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion No. 6, Col. .",
     "lat": 19.44331,
     "lng": -100.35123
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Cd. Altamirano-San Lucas Km.1.5, Col. Vicente Riva Palacio",
     "lat": 18.3773277777778,
     "lng": -100.669047222222
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Sultepec-Toluca S/N. Mz-802 Lt-15, Col. Camino Nacional",
     "lat": 18.87,
     "lng": -99.9656
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Adolfo Lopez Mateoos S/N, Col. Barrio de San Sebastian",
     "lat": 18.8138,
     "lng": -99.6698
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 44+400 Tramo Puente Ixtla-Iguala Auto. Mex-Aca, Col. S/C",
     "lat": 18.603447,
     "lng": -99.373818
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.7 Libramiento Sicartsa Lazaro Cardenas la Orilla, Col. Condesa",
     "lat": 17.9851805555556,
     "lng": -102.233463888889
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tulipanes No. 1286, (Lote 2,Fracc.Iii, Mza.1), Col. Unidad 8.15 Predio \"170 Has",
     "lat": 17.972188,
     "lng": -102.207362
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Zihuatanejo-Lazaro Cardenas Km 94+700, Col. S/D",
     "lat": 17.992171,
     "lng": -102.161679
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo de las Salinas Lt 3 Mza 1 Supermanzana Ii, Col. Fracc. las Salinas",
     "lat": 17.6393166238347,
     "lng": -101.563699280764
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fed.Acapulco-Zihuatanejo Km. 162, Col. ",
     "lat": 17.329739,
     "lng": -101.044186
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. L.Cardenas Esq. Calz. Rey Irapan No. 1, Col. Centro",
     "lat": 18.35612,
     "lng": -100.66888
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Costera Miguel Aleman S/N, Col. Recinto Fiscal Centro",
     "lat": 16.848376,
     "lng": -99.906236
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pie de la Cuesta # 510, Col. Mozimba",
     "lat": 16.863222,
     "lng": -99.9267
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 78+800 Carrt. Nal. Acapulco-Zihuatanejo, Col. Quinto Patio",
     "lat": 17.15671,
     "lng": -100.44024
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Cayaco-Puerto Marquez Km 5+030 S/N, Col. Llano Largo",
     "lat": 16.818701,
     "lng": -99.81335
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc # 1610, Col. Fracc. Marroquin",
     "lat": 16.8646355180237,
     "lng": -99.8789272037048
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Jose Lopez Portillo No. 420, Col. Libertadores",
     "lat": 16.893775,
     "lng": -99.834219
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cuernavaca-Chilpancingo Km. 129.080, Col. ",
     "lat": 18.29172,
     "lng": -99.5092
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tezontepec-Tinaco Km. 3, Col. .",
     "lat": 20.167371,
     "lng": -99.266617
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Actopan-Progreso de Obregon Km. 23.000, Col. ",
     "lat": 20.24826,
     "lng": -99.14668
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 167 Carrt. Mex.-Laredo, Col. .",
     "lat": 20.485605,
     "lng": -99.296924
  },
  {
     "marca": "PEMEX",
     "direccion": "Aut. Arco Norte Km 78+100 Sur San Martin Tex., Col. Siste Mezquites",
     "lat": 20.094006,
     "lng": -99.299393
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote Agricola No.2359 S/No., Col. Comunidad Del Espiritu",
     "lat": 20.42649,
     "lng": -99.35248
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Laredo Km. 206, Col. .",
     "lat": 20.754313,
     "lng": -99.329928
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Santa Cecilia No. 169, Col. Fracc. la Providencia Siglo Xxi",
     "lat": 20.068808,
     "lng": -98.717297
  },
  {
     "marca": "PEMEX",
     "direccion": "Lib.Vial Pachuca-Tulancingo No. 1700, Col. Adolfo Lopez Mateos",
     "lat": 20.086928,
     "lng": -98.741571
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Everardo Marquez # 506, Col. Lomas Residencial Pachuca",
     "lat": 20.106907,
     "lng": -98.747235
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Mexico-Pachuca Km 65, Col. S/C",
     "lat": 19.940572,
     "lng": -98.880762
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Ramon G. Bonfil Esq. Calle Martin Avila, Col. San Pedro Nopancalco",
     "lat": 20.0802138888889,
     "lng": -98.7874527777778
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico Queretaro Km. 48.000 S-N Mza 204, Col. Barrio San Sebastian",
     "lat": 19.760475,
     "lng": -99.215855
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Jorobas-Tula Km 0+300 S/N, Col. Jorobas",
     "lat": 19.828771,
     "lng": -99.246467
  },
  {
     "marca": "PEMEX",
     "direccion": "Carreteras a Jorobas Km. 10, Col. Sc",
     "lat": 19.914203,
     "lng": -99.23881
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Toluca-Atlacomulco Cuerpo A,Km.50+600, Col. Ejido Santa Maria Endare",
     "lat": 19.71754,
     "lng": -99.83351
  },
  {
     "marca": "PEMEX",
     "direccion": "Barrio de Los Alanis Domicilio Conocido S/N, Col. San Jeronimo Zacapexco",
     "lat": 19.72979,
     "lng": -99.481364
  },
  {
     "marca": "PEMEX",
     "direccion": "Revolucion Mexicana Lote 1, Col. Tepeji Del Rio",
     "lat": 19.903376,
     "lng": -99.337159
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Queretaro Km 58.5 Mrg. Derecho, Col. San Miguel de Los Jagueyes",
     "lat": 19.828468,
     "lng": -99.254727
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico Pachuca Km. 44.50, Col. San Pedro Potzohuacan",
     "lat": 19.762813,
     "lng": -98.973819
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino a San Bartolo Num. 16, Col. Barrio Atempa",
     "lat": 19.833936,
     "lng": -98.983828
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. la Joya y Av. Venustiano Carranza # 2, Col. Barrio San Jose",
     "lat": 19.657673,
     "lng": -99.173777
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I. Madero No. 2, Col. Tultepec",
     "lat": 19.684597,
     "lng": -99.130066
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Melchor Ocampo Lote 08 No. 116, Col. Bo. Santiago 1a. Seccion",
     "lat": 19.803796,
     "lng": -99.106255
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 27  Autopista Mex.-Qro., Col. Fracc. Ind. Cuautitlan Izcalli",
     "lat": 19.677084,
     "lng": -99.200329
  },
  {
     "marca": "PEMEX",
     "direccion": "Recursos Hidraulicos Esq Cipres L 13 14 15 16 S/N, Col. Poblado San Cristobal",
     "lat": 19.624447,
     "lng": -99.048538
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Central Lote A-4 Mz. S/N, Col. Santa  Cruz Venta de Carpio",
     "lat": 19.618712,
     "lng": -99.004938
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Jose Lopez Portillo # 93, Col. Buenavista",
     "lat": 19.622032,
     "lng": -99.16525
  },
  {
     "marca": "PEMEX",
     "direccion": "Circuito Mexiquense  Manzana 3, Col. Exhacienda Portales",
     "lat": 19.640005,
     "lng": -99.135667
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Jose Lopez Portillo No. 154, Col. Villa las Manzanas",
     "lat": 19.632552,
     "lng": -99.094285
  },
  {
     "marca": "PEMEX",
     "direccion": "Clzda San Mateo No. 42 M-44 L-59, Col. San Juan Bosco",
     "lat": 19.56659,
     "lng": -99.242102
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Cisnes No. 40 Lote 1 Mza 10, Col. Lago de Guadalupe",
     "lat": 19.627366,
     "lng": -99.240296
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Gustavo Baz Frac. A., Col. San Pedro Barrientos",
     "lat": 19.586164,
     "lng": -99.197306
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Lopez Portillo No. 5, Col. Recursos Hidraulicos",
     "lat": 19.619065,
     "lng": -99.172311
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Queretaro Km. 36.8 Lado Pte., Col. .",
     "lat": 19.65426,
     "lng": -99.198149
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Dr. Jimenez Cantu S/N., Lote 5-2, Col. Rancho Viejo",
     "lat": 19.557896,
     "lng": -99.29659
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Villa Nicolas Romero No. 83, Col. Ex Hacienda Del Pedregal",
     "lat": 19.579967,
     "lng": -99.26161
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Acueducto S/N Lote 1, Col. Ampliacion Tulpetlac",
     "lat": 19.572034,
     "lng": -99.053437
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Pachuca Km 20+084, Col. Tulpetlac",
     "lat": 19.580019,
     "lng": -99.044344
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.1ro.de Mayo Esq.Calle Nte.4 y Calle Ote.1 Mz.Sn, Col. Adolfo Ruiz Cortinez",
     "lat": 19.600652,
     "lng": -99.033241
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Palomas, Esquina Alondras No. 56, Col. Llano de Los Baez",
     "lat": 19.611156,
     "lng": -99.020266
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Del Lago No. 1-A, Mza. 1 Lote 3, Col. Geovillas de Terranova",
     "lat": 19.607528,
     "lng": -98.973523
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Manuel Avila Camacho No. 3067, Col. Pob. San Andres Atenco",
     "lat": 19.544535,
     "lng": -99.210905
  },
  {
     "marca": "PEMEX",
     "direccion": "Poniente 140 No.1010, Col. Santa Barbara",
     "lat": 19.50419,
     "lng": -99.182742
  },
  {
     "marca": "PEMEX",
     "direccion": "Poniente No.126 y Calz. Vallejo, Col. Nueva Vallejo",
     "lat": 19.487539,
     "lng": -99.150828
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Texcoco-Ecatepec Km 19+550, Col. S/C",
     "lat": 19.496863,
     "lng": -98.895675
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Del Trabajo y Porfirio Diaz # 2 Ote., Col. San Andres",
     "lat": 19.550246,
     "lng": -98.881723
  },
  {
     "marca": "PEMEX",
     "direccion": "Mexico-Tulancingo-Otumba, Limites Mexico-Hidalgo Km. 23.500, Col. ",
     "lat": 19.7066531699838,
     "lng": -98.7745946111145
  },
  {
     "marca": "PEMEX",
     "direccion": "Peña y Peña # 86, Col. Morelos",
     "lat": 19.440393,
     "lng": -99.120886
  },
  {
     "marca": "PEMEX",
     "direccion": "Canal de Norte No. 156, Esquina Calle 14, Col. Maza",
     "lat": 19.45169,
     "lng": -99.122126
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Ferroc. Hgo. S/N Esq. Gral.J.V.Villada # 180, Col. Aragon",
     "lat": 19.479219,
     "lng": -99.109127
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Central No. 218, Col. Rustica Xalostoc",
     "lat": 19.521892,
     "lng": -99.074951
  },
  {
     "marca": "PEMEX",
     "direccion": "Sn Bartolo Naucalpan Num 377, Col. Pueblo San L. Tlaltenango",
     "lat": 19.46299,
     "lng": -99.21295
  },
  {
     "marca": "PEMEX",
     "direccion": "Cuauhtemoc No. 40 Esq. Manuel Acuña, Col. Azcapotzalco",
     "lat": 19.4796,
     "lng": -99.189559
  },
  {
     "marca": "PEMEX",
     "direccion": "Bahia de Santa Barbara 182, Col. Veronica Anzures",
     "lat": 19.4348622380297,
     "lng": -99.1718256736107
  },
  {
     "marca": "PEMEX",
     "direccion": "Guerrero y Ricardo Flores Magon, Col. Guerrero",
     "lat": 19.452336,
     "lng": -99.146033
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Peralvillo No. 61, Col. Morelos",
     "lat": 19.4481,
     "lng": -99.13211
  },
  {
     "marca": "PEMEX",
     "direccion": "Car.Mexico-Huixquilucan Mz.41 L.2 y 3 No.1081 1083, Col. Las Canteras",
     "lat": 19.427591,
     "lng": -99.269301
  },
  {
     "marca": "PEMEX",
     "direccion": "Via Gustavo Baz Num.46, Col. Naucalpan",
     "lat": 19.477355,
     "lng": -99.232177
  },
  {
     "marca": "PEMEX",
     "direccion": "San Jose de Los Leones #6, Col. San Francisco Cuautlalpan",
     "lat": 19.46363,
     "lng": -99.22439
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. M. Avila Camacho y Morales, Col. Lomas de Chapultepec",
     "lat": 19.431956,
     "lng": -99.20892
  },
  {
     "marca": "PEMEX",
     "direccion": "Chapultepec y Veracruz No. 2, Col. Hipodromo de la Condesa",
     "lat": 19.420302,
     "lng": -99.176236
  },
  {
     "marca": "PEMEX",
     "direccion": "Insurgentes y Popocatepetl_No 289, Col. Hipodromo",
     "lat": 19.415181,
     "lng": -99.16587
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Xola Eje 4 Sur # 1403, Col. Narvarte Oriente",
     "lat": 19.395527,
     "lng": -99.153573
  },
  {
     "marca": "PEMEX",
     "direccion": "J a Mateos No. 4, Col. Obrera",
     "lat": 19.411007,
     "lng": -99.143851
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pantitlan No.145, Col. Mexico 2a. Seccion",
     "lat": 19.405457,
     "lng": -99.042296
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Bordo de Xochiaca Esq. Zopilote Mojado No.57, Col. Aurora",
     "lat": 19.419196,
     "lng": -99.01105
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Del Cooperativismo S/N, Col. Barrio San Pablo",
     "lat": 19.430948,
     "lng": -98.956265
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Central No. 910 y Rio Los Remedios, Col. Valle de Aragon",
     "lat": 19.490003,
     "lng": -99.046403
  },
  {
     "marca": "PEMEX",
     "direccion": "Sn Antonio Abad Num 295, Col. Algarin",
     "lat": 19.406961,
     "lng": -99.13647
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco Morazan y Manuel Nicolas, Col. Lorenzo Boturini",
     "lat": 19.416584,
     "lng": -99.121705
  },
  {
     "marca": "PEMEX",
     "direccion": "Rio Churubusco y Canal Del Tezontle,Zona Norte, Col. Ejido Del Moral",
     "lat": 19.383266,
     "lng": -99.09271
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Javier Rojo Gomez No. 531, Col. Paseos de Churubusco",
     "lat": 19.376287,
     "lng": -99.078619
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Chimalhuacan No. 600, Col. Aurora",
     "lat": 19.394267,
     "lng": -98.990178
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Rio Bravo No. 6-A Lote 41-1 S/N, Col. El Salado",
     "lat": 19.370148,
     "lng": -98.962737
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Arca de Noe # 3 M-277,L-35 Esq.Av. Carranza, Col. San Miguel Acuitlapilco",
     "lat": 19.417234,
     "lng": -98.931008
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Rio Manzano Y/O Prolongacion Lerdo, Col. Bonito El Manzano",
     "lat": 19.421849,
     "lng": -98.902889
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Libre Federal Puebla-Nautla Km. 117+700, Col. Ampliacion Zaragoza",
     "lat": 19.7804673180219,
     "lng": -97.5464311018524
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd Adolfo Lopez Mateos No 282_Esq: Calle 10, Col. San Pedro de Los Pinos",
     "lat": 19.3892811561774,
     "lng": -99.1899280907726
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.de las Torres, Eje 10 Sur, Esq.Cerrada Churintz, Col. Pedregal de San Francisco",
     "lat": 19.3362567381976,
     "lng": -99.1732690380287
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Popocatepetl No. 220, Col. General Anaya",
     "lat": 19.36219,
     "lng": -99.157337
  },
  {
     "marca": "PEMEX",
     "direccion": "Ajusco y Tlalpan No 1395, Col. Portales",
     "lat": 19.3675158128697,
     "lng": -99.1422605570431
  },
  {
     "marca": "PEMEX",
     "direccion": "Tlalpan y Retorno 816 No. 8, Col. Centinela",
     "lat": 19.336944,
     "lng": -99.14169
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Benito Juarez No. 1, Col. Presidentes de Mexico",
     "lat": 19.337822,
     "lng": -99.064782
  },
  {
     "marca": "PEMEX",
     "direccion": "Claz. Ignacio Zaragoza # 2370, Col. San Lorenzo Tezonco",
     "lat": 19.379548,
     "lng": -99.024178
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Carmelo Perez y 5/A Av. 410, Col. V.Villada",
     "lat": 19.392473,
     "lng": -99.001525
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz.de las Aguilas No.912, Col. Ampliacion las Aguilas",
     "lat": 19.350927,
     "lng": -99.218473
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Paseo Interlomas No.15, Mza Ii Lote 2, Col. Conjunto Urbano Green House,Ii Etap",
     "lat": 19.397699,
     "lng": -99.290287
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo No.508 y Josefa Ortiz de Dominguez, Col. Centro",
     "lat": 19.289854,
     "lng": -99.647443
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Tollocan Esq. Ignacio Zaragoza # 808 y 804, Col. Santa Ana Tlapaltitlan",
     "lat": 19.2863976475071,
     "lng": -99.6291342969589
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Tapanatepec-Arr Km. 6.500, Col. ",
     "lat": 19.33591,
     "lng": -99.6067
  },
  {
     "marca": "PEMEX",
     "direccion": "Paseo Tollocan Km. 56, Col. Loc. San Pedro Totoltepec",
     "lat": 19.28745,
     "lng": -99.557222
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Chalco-Mixquic Esq. Carr Chalco-San Pablo At, Col. San Pablo Atlazalpan",
     "lat": 19.230406,
     "lng": -98.915202
  },
  {
     "marca": "PEMEX",
     "direccion": "Manzana 48, Lote 2, Zona 6, Num. 43, Col. Alfredo Del Mazo Tlapacoya",
     "lat": 19.292437,
     "lng": -98.906421
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Federal Mexico Cuautla Num. 17, Col. Ejidal Ixtapaluca",
     "lat": 19.300246,
     "lng": -98.884127
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo No. 83, Col. San Miguel Ajusco",
     "lat": 19.228903,
     "lng": -99.196923
  },
  {
     "marca": "PEMEX",
     "direccion": "Tlalpan y Calz Xochimilco No 4352, Col. San Lorenzo Huipulco",
     "lat": 19.297498,
     "lng": -99.151844
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Acoxpa # 722, Col. Villa Coapa",
     "lat": 19.293015,
     "lng": -99.124982
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tlahuac No.5243, Col. Granjas Cabrera",
     "lat": 19.30509,
     "lng": -99.062938
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Benito Juarez # 39, Col. Barrio de San Pedro",
     "lat": 19.278439,
     "lng": -99.528758
  },
  {
     "marca": "PEMEX",
     "direccion": "Plan de Labores No. 219, Col. Barrio de Santa Maria",
     "lat": 19.259084,
     "lng": -99.474444
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Toluca Km. 42.5, Col. Loc. San Juan Coapanoaya",
     "lat": 19.288563,
     "lng": -99.444275
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.18.5 Carr.Toluca Ixtapan de la Sal, Col. .",
     "lat": 19.140548,
     "lng": -99.589978
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Estado de Mexico # 433 Ote., Col. Barrio de Santiaguito",
     "lat": 19.250669,
     "lng": -99.590193
  },
  {
     "marca": "PEMEX",
     "direccion": "Circuito Exterior Metropolitano No. 508 y 510, Col. Barrio San Isidro",
     "lat": 19.276219,
     "lng": -99.5554
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.E.Carranza N0 44 En San Jeronimo Chicahualco, Col. .",
     "lat": 19.281785,
     "lng": -99.594558
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Leandro Valle No.1005 y Av.Vicente Guerrero, Col. Lomas de la Selva",
     "lat": 18.932916,
     "lng": -99.230502
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Domingo Diez # 727 Esq. Paseo Del Conquistador, Col. El Empleado",
     "lat": 18.95679,
     "lng": -99.23739
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 18+500 Carr. Mexico-Santiago Tianguistenco, Col. .",
     "lat": 19.07038,
     "lng": -99.3871
  },
  {
     "marca": "PEMEX",
     "direccion": "Par Vial Jiutepec # 44, Col. Atlacomulco",
     "lat": 18.889475,
     "lng": -99.199874
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote 8 Manzana 18 Km 7.7 Carret.Cuernavaca-Cuautla, Col. Civac",
     "lat": 18.911843,
     "lng": -99.181399
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Cuernavaca-Yautepec Km 16.5, Col. Jose Lopez Portillo",
     "lat": 18.890246,
     "lng": -99.127479
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Mexico-Cuautla Km. 68, Col. El Salto",
     "lat": 18.916358070066,
     "lng": -98.8956488736801
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tehuixtla - Tilzapotla Km. 7, Col. Sc",
     "lat": 18.503275,
     "lng": -99.279485
  },
  {
     "marca": "PEMEX",
     "direccion": "Parcela 124 Z I P-1 S/N, Col. Ejido de Alpuyeca",
     "lat": 18.756421,
     "lng": -99.242833
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Morelos Sur # 14-A, Col. El Polvorin",
     "lat": 18.88993,
     "lng": -99.228588
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Cuautla-Izucar de Matamoros Km 0.2 # 5, Col. Cuautlixco",
     "lat": 18.850535,
     "lng": -98.935538
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Sta. Barbara -Izucar de Matamoroskm. 89+, Col. Sc",
     "lat": 18.736574,
     "lng": -98.822124
  },
  {
     "marca": "PEMEX",
     "direccion": "Beneficencia #54 Esquina Con Carretera Axochiapan, Col. San Miguel",
     "lat": 18.37878,
     "lng": -98.69082
  },
  {
     "marca": "PEMEX",
     "direccion": "141 Poniente No. 1932, Col. San Isidro Castillotla",
     "lat": 18.97768,
     "lng": -98.26658
  },
  {
     "marca": "PEMEX",
     "direccion": "Diagonal Defensores de la Republica No. 432, Col. Santa Maria",
     "lat": 19.06289,
     "lng": -98.19947
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 31.200 Carr Mexico-Puebla, Col. Ixtapaluca",
     "lat": 19.314378,
     "lng": -98.882395
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Cuauhtemoc Esq.Sebastian Lerdo de Tejada N0.468, Col. Concepcion",
     "lat": 19.29261,
     "lng": -98.94987
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc # 10, Col. Centro",
     "lat": 19.3311276618649,
     "lng": -98.9499148809509
  },
  {
     "marca": "PEMEX",
     "direccion": "Division Del Norte # 1, Col. La Piedra",
     "lat": 17.66104,
     "lng": -99.67374
  },
  {
     "marca": "PEMEX",
     "direccion": "Zaragoza No.88 Esq.delicias, Col. .",
     "lat": 18.347504,
     "lng": -99.545808
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Iguala-Huitzuco Km 18.5, Col. .",
     "lat": 18.296517,
     "lng": -99.459777
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Nal. Mexico-Acapulco Km 380, Col. El 30",
     "lat": 16.975775,
     "lng": -99.810846
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico-Acapulco Km. 46+340 S/N, Col. Poblado de Cajeles",
     "lat": 17.275146,
     "lng": -99.489943
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Chilpancingo-Chilapa Km. 17 S/N, Col. S/C",
     "lat": 17.58364,
     "lng": -99.38817
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Hernandez Lopez Sin Numero., Col. Barrio San Bartolo",
     "lat": 17.2623692085522,
     "lng": -97.6638989107284
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fed.Acapulco-Pinotepanacional Km. 6 #217, Col. Cayaco",
     "lat": 16.852047,
     "lng": -99.79984
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Acapulco-Pinotepa Nal. Km. 11+900 S/N, Col. Nicolas Bravo",
     "lat": 16.830105,
     "lng": -99.75737
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol.Boulevard Aca-Pinotepa Nacional #2 Km. 138.200, Col. ",
     "lat": 16.5821111111111,
     "lng": -98.8035972222222
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Yaxchilan Ls-8 y 9 S/N Suprmz-17 Mz-1, Col. Loc. Cancun",
     "lat": 21.14533,
     "lng": -86.83726
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote Az-1-02 Manzana 51 Av. Chichen-Itza, Col. Supermanzana 63",
     "lat": 21.1701271216,
     "lng": -86.827263212
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote 372-11, Col. Supermanzana 242 Manzana 1",
     "lat": 21.203348,
     "lng": -86.840267
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Pedro Joaquin Coldwell No. 2, Col. Centro",
     "lat": 20.50738,
     "lng": -86.94519
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Chetumal-Puerto Juarez Km. 299.5, Col. S/C",
     "lat": 20.70042,
     "lng": -87.02807
  },
  {
     "marca": "PEMEX",
     "direccion": "Vialidad Principal Acceso a Edifici T. Aeropuerto, Col. Aeropuerto Internacional de Cancun",
     "lat": 21.042485,
     "lng": -86.872935
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 49 No 270 X 44 y 46, Col. .",
     "lat": 21.14281,
     "lng": -88.1479
  },
  {
     "marca": "PEMEX",
     "direccion": "Localidad 903,Region 11 Smza 002, Mza 001,Lote 002, Col. Sc",
     "lat": 20.21626,
     "lng": -87.445999
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Juarez Manzana 32, Lt 8, Esq. Av. 115 Sur, Col. Ejidal",
     "lat": 20.634341,
     "lng": -87.095697
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Norte y Av. Sian Kaan, Col. Sm.051",
     "lat": 20.645792,
     "lng": -87.076531
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 30 Esq. Av. 19 (Libramiento) S/N, Col. S/C",
     "lat": 18.6849,
     "lng": -88.39508
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Jose Maria Morelos Sin Numero, Col. Manzana 155 Lote 2 Zona 1",
     "lat": 19.7434090766,
     "lng": -88.7036121254
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 27 No. 384 X 48, Col. S/D",
     "lat": 21.09699,
     "lng": -89.30028
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 24 X 23 No 107-C, Col. ",
     "lat": 21.24507,
     "lng": -89.04654
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 41 X 62 Tablaje Catastral 4104, Col. Bacalar",
     "lat": 20.690509,
     "lng": -88.218121
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 23 X 56 y 58 S/N, Col. Poligono Iii",
     "lat": 21.34018,
     "lng": -89.289828
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Esmedregal Manzana 220 Solar 3, Col. S/C",
     "lat": 21.518704,
     "lng": -87.376097
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.20 de Noviembre S.215 M.01 L.158-04 No.Pad 4, Col. Fraccionamiento Los Heroes",
     "lat": 21.17453,
     "lng": -86.87441
  },
  {
     "marca": "PEMEX",
     "direccion": "Mayapan Lotes 11 y 12 Mz-11 Supermz-97 # 1611, Col. Cd. Industrial",
     "lat": 21.14502,
     "lng": -86.86171
  },
  {
     "marca": "PEMEX",
     "direccion": "Escarcega-Chetumal, Col. ",
     "lat": 18.4999361336961,
     "lng": -89.3420654821396
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Insurgentes S/N, Col. Jardines de Payo Obispo",
     "lat": 18.5188043068401,
     "lng": -88.3251477374344
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Heroes No. 242 Lote 27, Col. Zona Hotelera",
     "lat": 18.506829,
     "lng": -88.294619
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 39 Numero 191, Col. Santiago",
     "lat": 20.384805,
     "lng": -89.528438
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fed. Merida - Puerto- Juarez- Km. 10+150, Col. Sc",
     "lat": 20.937106,
     "lng": -89.535681
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Merida-Tizimin Km. 1.7 Tablaje 27613, Col. Ej. San Pedro",
     "lat": 21.032934,
     "lng": -89.554865
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 58 No. 433 X 47, Col. Centro",
     "lat": 20.975633,
     "lng": -89.620319
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 31 C No. 186, Col. Miguel Aleman",
     "lat": 20.988873,
     "lng": -89.595463
  },
  {
     "marca": "PEMEX",
     "direccion": "Lote 1 Mza. 7; Carrt. y Periferico, Col. Benito Juarez Ote.",
     "lat": 20.956946,
     "lng": -89.568558
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 70 No. 695 y 697, Col. Fraccionamiento Ciudad Caucel",
     "lat": 20.990115,
     "lng": -89.700757
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 65-A # 996 Por 118 y 120, Col. Xoclan",
     "lat": 20.961142,
     "lng": -89.66315
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 86-B No. 589 Letra A, Col. .",
     "lat": 20.958446,
     "lng": -89.642642
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 23 No. 650 X 31, Col. Fraccionamiento Ciudad Caucel",
     "lat": 21.006785,
     "lng": -89.691949
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 20 X 25 No. 111, Col. Chuburna de Hidalgo",
     "lat": 21.008336,
     "lng": -89.631648
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 17 No. 397, Col. Fracc. Residencial Los Pinos",
     "lat": 21.004903,
     "lng": -89.585324
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Merida-Uman Km 8 (Calle 21 No. 471), Col. Ampliacion Ciudad Industrial",
     "lat": 20.919079,
     "lng": -89.700583
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 96 No. 771-B, Col. Obrera",
     "lat": 20.94109,
     "lng": -89.648596
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 95-A No. 300, Col. Ampliacion Salvador Alvarado Sur",
     "lat": 20.944549,
     "lng": -89.592283
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 42 Por 49-E y 51 # 299, Col. Fracc. Francisco de Montejo",
     "lat": 21.030471,
     "lng": -89.64221
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 1 No. 218 T, Col. Chuburna de Hidalgo",
     "lat": 21.047977,
     "lng": -89.645004
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 19 Diagonal No. 688 Mza. 81, Col. .",
     "lat": 21.2705159969507,
     "lng": -89.7337057288361
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Merida  Tizimin Km. 26+440, Col. Sc",
     "lat": 21.2896281002727,
     "lng": -89.603063728836
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Gobernadores No. 341, Col. Barrio de Santa Ana",
     "lat": 19.8426483673953,
     "lng": -90.5200566269837
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Camp-Merida Km 84+970, Col. S/C",
     "lat": 20.372811,
     "lng": -90.039727
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Merida - Campeche Km. 145+500, Col. Sc",
     "lat": 20.840364,
     "lng": -89.748859
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.239 Villahermosa Escarcega En la Rancheria, Col. Infonavit Palmas Iii",
     "lat": 18.3880025776986,
     "lng": -91.1920155681229
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Campeche-Champoton Km 174 Marg. Dcho., Col. Sin Colonia",
     "lat": 19.6262378367523,
     "lng": -90.6841175939178
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 10-B No. 116, Col. Infonavit Palmas Iii",
     "lat": 19.8501325939299,
     "lng": -90.5293143558197
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Dr. Belisario Dominguez Sur S/N, Col. Centro",
     "lat": 16.2432125325049,
     "lng": -92.1379725079346
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera la Trinidad - Ciudad Cuauhtemoc Km. 210+, Col. Sc",
     "lat": 15.995655,
     "lng": -92.010498
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Trinitaria- Lagos de Montebello Km. 24.9, Col. Sc",
     "lat": 16.1244900917587,
     "lng": -91.8391313286972
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Villahermosa Escarcega Km. 113.690, Col. ",
     "lat": 17.71317,
     "lng": -92.01047
  },
  {
     "marca": "PEMEX",
     "direccion": "Crucero Carr. Fronteriza En Rio Chancala, Col. .",
     "lat": 17.3213478194794,
     "lng": -91.6941889497376
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jaritas Esquina Rayon S/N, Col. Sin Colonia",
     "lat": 14.672425,
     "lng": -92.159787
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle S/N # 1201, Col. Los Llanes",
     "lat": 14.867645,
     "lng": -92.265787
  },
  {
     "marca": "PEMEX",
     "direccion": "9a Av. Sur Esquina 26a Calle Oriente, Col. Jesus Calcaneo Beltran",
     "lat": 14.8908273933884,
     "lng": -92.2639690846557
  },
  {
     "marca": "PEMEX",
     "direccion": "12a Avenida Sur Numero 142, Col. San Sebastian",
     "lat": 14.900002,
     "lng": -92.274443
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Villahermosa Frontera Km 50, Col. Sin Colonia",
     "lat": 18.38702,
     "lng": -92.796225
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Paez Urquidi Esq. Calle 20, Col. Pallas",
     "lat": 18.6468859705838,
     "lng": -91.8441589609909
  },
  {
     "marca": "PEMEX",
     "direccion": "Frac.Pred.Urb.S/N Frac.A Carr.Fed.Carmen-Champoton Km. 42.000, Col. ",
     "lat": 18.6434,
     "lng": -91.79903
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 0+500 Carrt. Independencia-Angel Albino Corzo, Col. Independencia",
     "lat": 16.08684,
     "lng": -92.83539
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol Av Central Norte N S/N, Col. Villa las Rosas",
     "lat": 16.37629,
     "lng": -92.37486
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Sur Poniente # 22, Col. Fracc. San Jose Betania",
     "lat": 16.7213,
     "lng": -92.652862
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Villahermosa-Nacajuca, Margen Derecho, Col. .",
     "lat": 18.0536852037217,
     "lng": -92.9350117936401
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera 195 Villahermosa Tuxtla Gutierrez Km. 7.000, Col. ",
     "lat": 17.9459279557722,
     "lng": -92.9169307923127
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Villahermosa-Escarcega Km 199, Col. S/D",
     "lat": 18.2260868104195,
     "lng": -91.4798278723526
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Costera Km 235 # 47, Col. S/D",
     "lat": 15.21246,
     "lng": -92.569734
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 244 Carr. Costera, Col. .",
     "lat": 14.916881,
     "lng": -92.2704
  },
  {
     "marca": "PEMEX",
     "direccion": "Sexta Calle Oriente # 74 Esq. 27 Av. Sur, Col. S/D",
     "lat": 14.986517,
     "lng": -92.159648
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco Trujillo Gurria, Col. Centro",
     "lat": 17.553049,
     "lng": -92.947379
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Carlos A. Madrazo Becerra 116, Col. Centro",
     "lat": 17.747156,
     "lng": -92.610231
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Vilahermosa - Escarcega Km. 17+132, Col. Sc",
     "lat": 17.949326,
     "lng": -92.786808
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Adolfo Ruiz Cortinez No. 1803, Col. Atasta de Serra",
     "lat": 17.988539,
     "lng": -92.949202
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Carlos Pellicer Camara S/N, Col. Jose Maria Pino Suarez",
     "lat": 18.024829,
     "lng": -92.935494
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion de Constitucion #131, Col. Barrio la Guadalupe",
     "lat": 18.175619,
     "lng": -93.064134
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Federal y Camino las Delicias, Col. .",
     "lat": 18.245813,
     "lng": -93.210011
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Manuel Antonio Romero Zurita 818, Col. Quintin Arauz",
     "lat": 18.380631,
     "lng": -93.222095
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 13 Carret. Revolucion Mexicana-La Concordia S/N, Col. Tierra Colorada",
     "lat": 16.11626,
     "lng": -92.99559
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tuxtla la Angostura Km 6, Col. Ribera las Flechas",
     "lat": 16.691181,
     "lng": -93.021096
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tuxtla-Chiapa de Corzo Km 5+900 Margen, Col. Centro",
     "lat": 16.734007,
     "lng": -93.054995
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Panamericana #4655, Col. Fraccionamiento la Gloria",
     "lat": 16.76003,
     "lng": -93.177028
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Norte # 4056 Salida a Chicoasen, Col. La Alborada",
     "lat": 16.762628,
     "lng": -93.152544
  },
  {
     "marca": "PEMEX",
     "direccion": "5a. Norte Poniente No. 706, Col. Centro",
     "lat": 16.759247,
     "lng": -93.120795
  },
  {
     "marca": "PEMEX",
     "direccion": "Periferico Ricardo Acuna Angles Esq.Camino Rio Seco Sn, Col. S/C",
     "lat": 17.976447,
     "lng": -93.384304
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Reforma -Dos Bocas Km. 4.468, Col. Sc",
     "lat": 18.010748,
     "lng": -93.143
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.164+600 Carretera Cardenas-Villahermosa, Col. Rancheria Anacleto Canabal",
     "lat": 17.988303,
     "lng": -92.981917
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Tuxtla-Aeropuerto-Llano San Juan Km. 14, Col. Centro",
     "lat": 16.782227,
     "lng": -93.224573
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tecpatan-Raudales Malpaso Km 4.23, Col. Predio la Bondad",
     "lat": 17.187631,
     "lng": -93.56612
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Fed.185 Huimanguillo V. Chontalpa Esq Sin Nombre, Col. La Juventud",
     "lat": 17.817544,
     "lng": -93.402929
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Sur Frente Al Lienzo Charro S/N., Col. .",
     "lat": 16.2234335960595,
     "lng": -93.2747427116394
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Dr. Rodulfo Figueroa No.1796, Col. Urbana Norte",
     "lat": 16.6772428597,
     "lng": -93.7355964616
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret.Coatzacoalcos-Vhermosa Km. 35+250 R. Gavila, Col. No Aplica",
     "lat": 18.0530490003,
     "lng": -94.1343685368
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Agua Dulce-Cardenas Km 70, Col. Ejido Pejelagartero 2da Seccion",
     "lat": 18.0304,
     "lng": -93.816
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 12+100 Carret. Comalcalco-Villa Tecolutilla, Col. Betania",
     "lat": 18.2759,
     "lng": -93.319526
  },
  {
     "marca": "PEMEX",
     "direccion": "Vicente Riva Palacios 1110, Col. Guadalupe Victoria",
     "lat": 18.1497790497528,
     "lng": -94.4628031779098
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Transistmica Coatz-Mina Km.7, Col. .",
     "lat": 18.1174,
     "lng": -94.44614
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolong. Av. Juarez Esq. Mariano Abasolo, Col. .",
     "lat": 18.14407,
     "lng": -94.42782
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Institutos Tecnologicos No. 2902, Col. Las Fuentes",
     "lat": 17.9929840323324,
     "lng": -94.578046699678
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Avila Camacho No. 91, Col. Cuauhtemoc",
     "lat": 17.99486,
     "lng": -94.54125
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Coatzacoalcos-Villahermosa Km.14+800, Col. Moloacan",
     "lat": 18.07257,
     "lng": -94.31298
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Boca Del Monte,Oax. a la Chinantla Km. 56.600, Col. ",
     "lat": 17.24323,
     "lng": -94.62377
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 2 Carret. Acayucan-Sayula, Col. .",
     "lat": 17.921267,
     "lng": -94.930986
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Coatz.-S.Cruz,Tramo Coatzacoalcos-Acayucan Km. 51.500, Col. ",
     "lat": 17.95906,
     "lng": -94.80954
  },
  {
     "marca": "PEMEX",
     "direccion": "Km152+241 Lado Der.de Autopista Tinaja-Sayula #241, Col. S/C",
     "lat": 18.006737,
     "lng": -95.258916
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Cd. Aleman-Sayula de Aleman Km 114+020, Col. S/C",
     "lat": 17.92446,
     "lng": -95.16277
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd Coatzacoalcos a Congregacion de Barrillas M60, Col. S/C",
     "lat": 18.1513311773,
     "lng": -94.5523360449
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cristobal Colon, Col. Sc",
     "lat": 16.439459,
     "lng": -95.459612
  },
  {
     "marca": "PEMEX",
     "direccion": "Av Joaquin Amaro 34, Col. Conocido",
     "lat": 16.54808,
     "lng": -95.08754
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Costera Del Pacifico Km. 80 Mas 800, Col. Sc",
     "lat": 16.583887,
     "lng": -94.940325
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tapanatepc-Arriaga Km 41, Col. San Isidro",
     "lat": 16.22486,
     "lng": -93.92208
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas Esq. Manuel Nieto, Col. Tamsa",
     "lat": 19.14973,
     "lng": -96.127693
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jardines de Virginia L-280 # 243, Col. Fracc. Jardines de Virginia",
     "lat": 19.155799,
     "lng": -96.111046
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 7 Carret. Fed. Alvarado-Paso Del Toro S/N., Col. Laguna y Monte Del Castillo",
     "lat": 18.985887,
     "lng": -96.086173
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 70 Carrt. Veracruz-Alvarado Calle J Carranza, Col. .",
     "lat": 18.77513,
     "lng": -95.76503
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 135 Km. 120+300 Km. 120.300, Col. ",
     "lat": 17.7836833131515,
     "lng": -96.9518821441284
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Carlos A. Carrillo Entronque Pueblo Nvo. S/N, Col. S/C",
     "lat": 18.229024,
     "lng": -95.939636
  },
  {
     "marca": "PEMEX",
     "direccion": "Bl Miguel Aleman N S/N, Col. San Felipe",
     "lat": 18.35707,
     "lng": -95.80376
  },
  {
     "marca": "PEMEX",
     "direccion": "Aut. la Tinaja-Sayula, T. Cosamaluapan Km 118+250, Col. S/C",
     "lat": 18.1555945145,
     "lng": -95.5361871358
  },
  {
     "marca": "PEMEX",
     "direccion": "Santa Cruz Km 3 Carrt. Tlapacoyan-Atzalan, Col. S/D",
     "lat": 19.9440688046682,
     "lng": -97.2168652526398
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret  Fortin-Conejos Km.43-106, Col. Fortin",
     "lat": 19.1531630674702,
     "lng": -96.9587889239426
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr Xal Ver Tr Tamarindo Cab Olmeca Km 92.554 Liz, Col. S/C",
     "lat": 19.1854878328301,
     "lng": -96.2649467314911
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Cuauhtemoc #1526 Esq.Raz y Guzman L-59y61 M45, Col. Formando Hogar",
     "lat": 19.200562,
     "lng": -96.155603
  },
  {
     "marca": "PEMEX",
     "direccion": "Allende y Emparan No. 1247, Col. Centro",
     "lat": 19.197972,
     "lng": -96.145608
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Pochutla-Oaxaca Km.9, Col. ",
     "lat": 15.75443,
     "lng": -96.46479
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr.Oaxaca-Pto.Angel Km.100, Col. No",
     "lat": 16.34075,
     "lng": -96.59983
  },
  {
     "marca": "PEMEX",
     "direccion": "Libramiento Ocotlan de Morelos Km 37.310 Lado Izq., Col. S/C",
     "lat": 16.79175,
     "lng": -96.646656
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Guadalupe Hinojosa de Murat # 302, Col. S/C",
     "lat": 17.019614,
     "lng": -96.732235
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jose Lopez Portillo Km. 308+800, Col. S/C",
     "lat": 21.131958,
     "lng": -86.911367
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Huayacan Esq. Av. Cumbres, Mza. 27, Lote 08, Col. Smz. 311",
     "lat": 21.125448,
     "lng": -86.839263
  },
  {
     "marca": "PEMEX",
     "direccion": "Hidalgo Esquina Km. 20 Lote 1, Col. Predio la Lajita (Joachin)",
     "lat": 18.640152,
     "lng": -96.239152
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 6 Carrt. Moralito-Cotaxtla, Col. S/D",
     "lat": 18.832707,
     "lng": -96.392475
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. a Jamapa Esq. Lib. Sta. Fe-Paso Del Toro, Col. La Mariposa",
     "lat": 19.054308,
     "lng": -96.164737
  },
  {
     "marca": "PEMEX",
     "direccion": "Guillermo Solis No. 69, Col. S/C",
     "lat": 19.356235,
     "lng": -96.658363
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Libre Poza Rica -Veracruz Km. 174+900, Col. Sc",
     "lat": 19.6854535438388,
     "lng": -96.4091867513545
  },
  {
     "marca": "PEMEX",
     "direccion": "Ignacio Zaragoza # 1, Col. S/C",
     "lat": 19.410735,
     "lng": -96.360152
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Fidel Velazquez No. 140 Esq. Rio Medio, Col. Fracc. Del Norte",
     "lat": 19.213903,
     "lng": -96.194935
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Fidel Velazquez No. 3000, Col. Playa Linda",
     "lat": 19.215685,
     "lng": -96.169339
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Monte Alban No. 136, Col. Jardines",
     "lat": 17.0614527166737,
     "lng": -96.7405930380287
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Oaxaca- Guelatao No.-2000, Col. S/C",
     "lat": 17.072923,
     "lng": -96.670892
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Prolongacion Miguel Aleman # 162, Col. S/C",
     "lat": 19.130197,
     "lng": -96.300381
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Jalapa-Veracruz Km 99,800 Tmo.Tama-C.Olmeca, Col. San Miguel",
     "lat": 19.160995,
     "lng": -96.202302
  },
  {
     "marca": "PEMEX",
     "direccion": "Ursulo Galvan No. 972, Col. Reserva Tarimoya",
     "lat": 19.194058,
     "lng": -96.181031
  },
  {
     "marca": "PEMEX",
     "direccion": "Prim y Victimas Del 25 de Junio  Veracruz Ver, Col. Centro",
     "lat": 19.195136477916,
     "lng": -96.134525119049
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Enrique C. Rebsamen No. 236, Col. Martires de Chicago",
     "lat": 19.51435,
     "lng": -96.910093
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol. Antonio Chedraui Caram S/N, Col. Lomas de Casa Blanca",
     "lat": 19.54163,
     "lng": -96.894206
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas # 81 Esq. Gildardo Aviles, Col. Rafael Lucio",
     "lat": 19.5604083134103,
     "lng": -96.9228197460327
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 37 Desv. Omeal-Tezonapa, Col. Paso Rayon",
     "lat": 18.6201847888,
     "lng": -96.6997104056
  },
  {
     "marca": "PEMEX",
     "direccion": "Autop.Cordoba Veracruz Km.0+100 Cruce Carr. Fed., Col. .",
     "lat": 18.860771,
     "lng": -96.873303
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 11 y Calle 21 No 1910, Col. .",
     "lat": 18.884973,
     "lng": -96.931768
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida 1 No. 2803 A, Col. Del Maestro",
     "lat": 18.9015539082545,
     "lng": -96.9493828628888
  },
  {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocido S/N Seccion Tercera, Col. Arroyo Venado",
     "lat": 18.079676,
     "lng": -96.530481
  },
  {
     "marca": "PEMEX",
     "direccion": "Aquiles Serdan Numero 902 Esq. Ignacio Allende, Col. Hoja de Maiz",
     "lat": 18.449825,
     "lng": -96.355987
  },
  {
     "marca": "PEMEX",
     "direccion": "Tuxtepec - Valle Nacional, Col. ",
     "lat": 18.04059,
     "lng": -96.16289
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Manuel Avila Camacho Numero 523, Col. Maria Luisa",
     "lat": 18.0902933769083,
     "lng": -96.1270219206609
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Poza Rica-El Chote Km 17+500 # 100, Col. S/D",
     "lat": 20.430952,
     "lng": -97.370302
  },
  {
     "marca": "PEMEX",
     "direccion": "Avenida Independencia No. 144-A, Col. Burocratica",
     "lat": 20.943803,
     "lng": -97.386141
  },
  {
     "marca": "PEMEX",
     "direccion": "C. Lib. Adolfo Lopez Mateos No. 243, Col. Villa Rosita",
     "lat": 20.9627213361309,
     "lng": -97.4287831104508
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Mina No. 3, Col. Centro",
     "lat": 19.812993,
     "lng": -97.364718
  },
  {
     "marca": "PEMEX",
     "direccion": "5 de Febrero No. 748-B, Col. Seccion 4ta",
     "lat": 19.7849499898283,
     "lng": -97.3270051681152
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 282 Carr.Mexico-Ver., Col. .-",
     "lat": 19.600203,
     "lng": -97.209954
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Lic. Rafael Mtz. de la Torre Esq. Carrillo, Col. Ejidal",
     "lat": 20.06979,
     "lng": -97.04697
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt.Colipa-Misantla Coli.Juchique D'Ferrer N.791, Col. S/C",
     "lat": 19.90453,
     "lng": -96.74223
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Humbolt Sur No 69 Esq. Leona Vicario, Col. .",
     "lat": 19.558477,
     "lng": -97.250276
  },
  {
     "marca": "PEMEX",
     "direccion": "Salida a Xico # 101 Sobre Centenario, Col. S/C",
     "lat": 19.449188857332,
     "lng": -96.9539860674591
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Lerdo de Tejada 42, Col. El Zapote",
     "lat": 19.616628,
     "lng": -96.94136
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 55+800 Carret. Fed. El Seco Azumbilla, Col. Poblacion San Antonio Soledad",
     "lat": 18.791808,
     "lng": -97.41492
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 53.3 Carr. Tehuacan-Veracruz., Col. .",
     "lat": 18.791516,
     "lng": -97.193958
  },
  {
     "marca": "PEMEX",
     "direccion": "Prol.de Sur 13/Primo de V. y T. Penafiel No. 1596, Col. Francisc Ferrer Guardia",
     "lat": 18.837579,
     "lng": -97.093727
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Principal S/N., Col. S/D",
     "lat": 19.12391,
     "lng": -97.69666
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.14 Carret. El Seco-Cd.Serdan, Col. No Tiene",
     "lat": 19.093978,
     "lng": -97.54265
  },
  {
     "marca": "PEMEX",
     "direccion": "Manuel Avila Camacho No. 201, Col. Chocaman",
     "lat": 19.018477,
     "lng": -97.02965
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Equimita-Huahuatla Km. 22, Col. Tetelillas de Islas",
     "lat": 20.07736,
     "lng": -97.55602
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 2+700 Carretera Poza Rica-Coatzintla Num.814, Col. S/C",
     "lat": 20.509393,
     "lng": -97.468904
  },
  {
     "marca": "PEMEX",
     "direccion": "Av.Juarez Esquina Calle Honduras # 802, Col. 27 de Septiembre",
     "lat": 20.533684,
     "lng": -97.466401
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Mexico Tuxpam Km. 213, Col. Sc",
     "lat": 20.6701507135187,
     "lng": -97.5233266514511
  },
  {
     "marca": "PEMEX",
     "direccion": "2 de Abril # 202, Col. Militar",
     "lat": 17.81585,
     "lng": -97.79044
  },
  {
     "marca": "PEMEX",
     "direccion": "20 de Noviembre Esq. 16 de Septiembre # 8, Col. Guadalupe Victoria",
     "lat": 18.4008939098589,
     "lng": -97.3295682711639
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Jose Garcia Crespo No.1200, Col. Buenos Aires",
     "lat": 18.47259,
     "lng": -97.394553
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 61 Carr. a San Juan Ixcaquixtla, Col. .",
     "lat": 18.466995,
     "lng": -97.849917
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Nueve Oriente No. 1307 y Dieciseis Sur, Col. S/D",
     "lat": 18.878618,
     "lng": -97.723906
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tepeaca-Mixtla Km. 5+300, Col. S/C",
     "lat": 18.91106,
     "lng": -97.89658
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Perez Gasga N0. 2025, Col. Guadalupe Yutee",
     "lat": 17.035981,
     "lng": -97.918704
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Chilapa - Tamazulapa Km. 2.5, Col. Sc",
     "lat": 17.600117,
     "lng": -97.633871
  },
  {
     "marca": "PEMEX",
     "direccion": "Km.25.5 Carret.Ixpantepec Nieves-Silacayoapam S/N, Col. Lado Izquierdo",
     "lat": 17.51684,
     "lng": -97.13497
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle 3 (Tres) Norte No. 602, Col. Barrio de San Pablo",
     "lat": 19.467597,
     "lng": -97.688037
  },
  {
     "marca": "PEMEX",
     "direccion": "Bo. Acuaco 5a. Secc., Col. 5a  Seccion  Acuaco",
     "lat": 19.762074,
     "lng": -97.565403
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal 129 Km 144+600, Col. Sin Colonia",
     "lat": 19.831931,
     "lng": -97.439041
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Antiguio a Tepeaca - Sanpedro la Joya Km.5, Col. Sc",
     "lat": 19.002293,
     "lng": -97.867102
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera  Federal Amozoc - Oriental Km. 7.4, Col. Sc",
     "lat": 19.082259,
     "lng": -97.982248
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Mexico-Veracruz Km. 147.000, Col. ",
     "lat": 19.33033,
     "lng": -97.92588
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Los Reyes-Mexico-Zacatepec Km 158, Col. S/D",
     "lat": 19.30557,
     "lng": -97.79377
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 66+965 Carrt. Fed.Mexico-Veracruz Via Xalapa, Col. S/C",
     "lat": 19.35009,
     "lng": -97.45354
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 63 Carret. Del Pacifico S/N, Col. Loc. Santa Rosa de Lima",
     "lat": 16.08476,
     "lng": -97.65502
  },
  {
     "marca": "PEMEX",
     "direccion": "Paraje Llano Rana Camino Rural San Sebastian Rio Dulce, Col. ",
     "lat": 16.7998983008,
     "lng": -97.0776112237
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Heroes Del 5 de Mayo # 4, Col. Martires Del Trabajo",
     "lat": 19.05418,
     "lng": -98.192417
  },
  {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico Veracruz Ex Rancho San Pablo de Orteg, Col. .",
     "lat": 19.074579,
     "lng": -98.160689
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Valsequillo # 6305, Col. Loma Linda",
     "lat": 19.00437,
     "lng": -98.206302
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. de las Torres # 2602, Col. Camino Real",
     "lat": 18.997862,
     "lng": -98.189359
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista  Amozoc - Perote Km.- 1+233.66, Col. Sc",
     "lat": 19.067574,
     "lng": -98.065611
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Valsequillo # 331, Col. Residencial Boulevares",
     "lat": 19.0252532135952,
     "lng": -98.2136823730164
  },
  {
     "marca": "PEMEX",
     "direccion": "14 Oriente No. 4217, Col. Gregorio Ramos",
     "lat": 19.04379,
     "lng": -98.162462
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Esteban Antuñano No. 243, Col. Libertad",
     "lat": 19.073956,
     "lng": -98.239038
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard la Pedrera No. 2929, Col. Zona Capu Y/O las Cuartillas",
     "lat": 19.075396,
     "lng": -98.20792
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Apizaco - Huauchinango Km. 56, Col. Sc",
     "lat": 19.85858,
     "lng": -98.06038
  },
  {
     "marca": "PEMEX",
     "direccion": "Francisco I. Madero Num. 112, Col. Centro",
     "lat": 20.032763,
     "lng": -98.309044
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Ing. Carlos I. Betancourt # 22, Col. Ocote",
     "lat": 20.182868,
     "lng": -98.035811
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. Tlaxcala Sur No. 1, Col. .",
     "lat": 19.150575,
     "lng": -98.223421
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Nativitas San Marti Km.  11, Col. .",
     "lat": 19.231824,
     "lng": -98.325024
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tlaxcala-Texoloc Num. 42, Col. S/C",
     "lat": 19.296293,
     "lng": -98.248039
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tulancingo - Cuautepeckm. 3, Col. Santa Teresa Del Banco",
     "lat": 20.064677,
     "lng": -98.343442
  },
  {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Tuxpan Km. 139, Col. Fracc. Santa Ana",
     "lat": 20.077625,
     "lng": -98.380581
  },
  {
     "marca": "PEMEX",
     "direccion": "Rodolfo Guzman Huerta # 1200, Col. Santa Maria El Chico",
     "lat": 20.102087,
     "lng": -98.396479
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Cholula Huejotzingo Km. 100+120 Num. 1, Col. San Diego Cuachayotla",
     "lat": 19.081759,
     "lng": -98.327787
  },
  {
     "marca": "PEMEX",
     "direccion": "Av. 5 de Mayo # 1622, Col. Barrio San Juan",
     "lat": 19.059288,
     "lng": -98.294587
  },
  {
     "marca": "PEMEX",
     "direccion": "Mirador No. 1, Col. S/D",
     "lat": 19.12139,
     "lng": -98.26397
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion 11 Sur # 14120, Col. Jardines de San Roman",
     "lat": 18.971915,
     "lng": -98.262255
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion 14 Sur No. 11517, Col. San Jose Chapulco",
     "lat": 18.974133,
     "lng": -98.219048
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. Cholula-Tonanzintla # 2714, Col. San Rafael Comac",
     "lat": 19.0389,
     "lng": -98.315973
  },
  {
     "marca": "PEMEX",
     "direccion": "Prolongacion Boulevard Municipio Libre # 1702 Lc.A, Col. Ex Hacienda de Mayorazgo",
     "lat": 19.009056,
     "lng": -98.244219
  },
  {
     "marca": "PEMEX",
     "direccion": "Camino Acceso a San Luis Coyotzingo 11, Col. Sc",
     "lat": 19.203489,
     "lng": -98.432195
  },
  {
     "marca": "PEMEX",
     "direccion": "Km 88.5 Autopista Mexico-Puebla, Col. Santa Catarina Hueyatzacoalco",
     "lat": 19.282732,
     "lng": -98.451344
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 98+345.659 Al 98+706.346 Autopista Arco Norte, Col. Sin Colonia",
     "lat": 19.551382,
     "lng": -98.49485
  },
  {
     "marca": "PEMEX",
     "direccion": "Calz. Zaragoza S/N, Col. .",
     "lat": 19.319897,
     "lng": -98.268257
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Fed. Mexico Veracruz Km. 131, Col. C",
     "lat": 19.407659,
     "lng": -98.193052
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Tramo San Miguel Contla-Apizaco # 322, Col. S/C",
     "lat": 19.386362,
     "lng": -98.127772
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Bonito Pinotepa No. 1501, Col. Seccion Tercera",
     "lat": 16.34932,
     "lng": -98.0621
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Ometepec-Las Vigas No. 1, Col. Centro",
     "lat": 16.686382,
     "lng": -98.440723
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Juxtlahuaca Putla S-N, Col. La Esperanza",
     "lat": 17.330372,
     "lng": -98.013834
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. Tlapa-Tecomatlan Km 38, Col. Barrio Del Rosario",
     "lat": 17.80547,
     "lng": -98.55925
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Km. 114, Col. Seccion Tercera",
     "lat": 18.326972,
     "lng": -98.269483
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Internacional # 11 Esq. Iturbide, Col. S/D",
     "lat": 18.72154,
     "lng": -98.45109
  },
  {
     "marca": "PEMEX",
     "direccion": "Blvd. Ninos Heroes No.803, Col. Revolucion",
     "lat": 18.898327,
     "lng": -98.433193
  },
  {
     "marca": "PEMEX",
     "direccion": "Circuito Juan Pablo Ii No.1717, Col. Rivera Del Atoyac",
     "lat": 19.031442,
     "lng": -98.223664
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Azteca No. 203, Col. Loc. San Felipe Hueyotlipan",
     "lat": 19.081414,
     "lng": -98.205445
  },
  {
     "marca": "PEMEX",
     "direccion": "Carrt. Pachuca-Cd. Sahagun Km 18, Col. S/D",
     "lat": 19.974932,
     "lng": -98.699325
  },
  {
     "marca": "PEMEX",
     "direccion": "Km. 72 Carrt. Mexico-Tuxpan, Col. .",
     "lat": 19.974084,
     "lng": -98.524448
  },
  {
     "marca": "PEMEX",
     "direccion": "Calle Cerrada Ayapango 10, Col. San Lorenzo Tlal.",
     "lat": 19.671776,
     "lng": -98.867095
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Cd. Sahagun - Emiliano Zapata Km. 0.000, Col. ",
     "lat": 19.756646,
     "lng": -98.589683
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Estatal Apanalmoloya Km 1+0000, Col. S/C",
     "lat": 19.6963611111111,
     "lng": -98.4373055555556
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Chalco-Sta. Maria Huexoculco S/N., Col. San Gregorio Cuautzingo",
     "lat": 19.263269,
     "lng": -98.873347
  },
  {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico Puebla 36+600, Col. San Marcos  Huixtoco",
     "lat": 19.304373,
     "lng": -98.841169
  },
  {
     "marca": "PEMEX",
     "direccion": "Boulevard Ramon G. Bonfil Andador \"A\" # 102, Col. Plutarco Elias Calles",
     "lat": 20.115053,
     "lng": -98.761157
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Tulancingo Huasca Km.24.925, Col. La Yerbabuena",
     "lat": 20.2107,
     "lng": -98.5393
  },
  {
     "marca": "PEMEX",
     "direccion": "Pensador Mexicano No. 61, Col. Centro Norte",
     "lat": 20.275522,
     "lng": -98.940629
  },
  {
     "marca": "PEMEX",
     "direccion": "Carretera Ixmiquilpan-Cardonal Km 11+430, Col. S/C",
     "lat": 20.563067,
     "lng": -99.149903
  },
  {
     "marca": "PEMEX",
     "direccion": "Cuauhtemoc Esq. Con Carr Huejutla- San Felipe Ori, Col. Capitan Antonio Reyes",
     "lat": 21.136117,
     "lng": -98.430223
  },
  {
     "marca": "APPRO",
     "direccion": "AV. JOSÉ LOPEZ PORTILLO PONIENTE #410 COL. NUEVA TIJUANA C.P. 22435. TIJUANA, BAJA CALIFORNIA",
     "lat": 32.543873,
     "lng": -116.930807
  },
  {
     "marca": "APPRO",
     "direccion": "AV. JOSÉ LOPEZ PORTILLO PONIENTE #19526 COL. NUEVA TIJUANA C.P. 22435. TIJUANA, BAJA CALIFORNIA ",
     "lat": 32.543565,
     "lng": -116.930832
  },
  {
     "marca": "APPRO",
     "direccion": "CALLE OCAMPO #6040 COL. ZONA CENTRO C.P. 22000 TIJUANA, BAJA CALIFORNIA",
     "lat": 32.536981,
     "lng": -117.03205
  },
  {
     "marca": "APPRO",
     "direccion": "AV. DE LA AMISTAD N. 9059 ZONA URBANA RIO C.P. 22010 TIJUANA, BAJA CALIFORNIA",
     "lat": 32.538777,
     "lng": -117.028907
  },
  {
     "marca": "APPRO",
     "direccion": "BLVD. DE LAS AMERICAS #2560 COL. BUENA VISTA C.P.22414 TIJUANA, BAJA CALIFORNIA ",
     "lat": 32.513792,
     "lng": -116.987207
  },
  {
     "marca": "COSTCO",
     "direccion": "Av. Parque Chapultepec 195, Colinas del Parque, 78260 San Luis, S.L.P.",
     "lat": 22.137287,
     "lng": -101.00553
  },
  {
     "marca": "COSTCO",
     "direccion": "Sta Fe 20, Colinas del Parque, 78260 San Luis, S.L.P.",
     "lat": 22.137499,
     "lng": -101.005821
  },
  {
     "marca": "COSTCO",
     "direccion": "Congreso del Estado, Culiacán Rosales, Sin.",
     "lat": 24.798408,
     "lng": -107.424357
  },
  {
     "marca": "COSTCO",
     "direccion": "Av Tecnológico 651, Cd Industrial de Celaya, 38010 Celaya, Gto.",
     "lat": 20.544171,
     "lng": -100.820375
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Bulevard Venustiano Carranza 899, Fraccionamiento Hacienda Bilbao, 21259 Mexicali, B.C.",
     "lat": 32.642581,
     "lng": -115.399164
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Calzada Manuel Gómez Morín, Mexicali, B.C.",
     "lat": 32.598549,
     "lng": -115.461206
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "3598 Calz. Gustavo Vildósola, Mexicali, Baja California",
     "lat": 32.583321,
     "lng": -115.37711
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Bulevard Venustiano Carranza, Villa Bonita, 21379 Mexicali, B.C.",
     "lat": 32.617299,
     "lng": -115.405588
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Calz Anáhuac 1199, Casa Magna, Villa Residencial Casa Magna, 21235 Mexicali, B.C.",
     "lat": 32.596402,
     "lng": -115.477594
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Aeropuerto, Carretera de Mexicali Km 1, Fraccionamiento Saturno, 21230 Mexicali, B.C.",
     "lat": 32.652863,
     "lng": -115.364386
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Calz Anáhuac 2175, Quinta del Rey, 21355 Mexicali, B.C.",
     "lat": 32.584708,
     "lng": -115.472932
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Av. Ignacio Zaragoza y Calle Quinta 1698 ",
     "lat": 32.559628,
     "lng": -115.358875
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Blvd. García López,  Internacional A Nogales 1982, Loma Linda, 85424 Heroica Guaymas, Son.",
     "lat": 27.937492,
     "lng": -110.929482
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Blvd. Benito Juárez, 8 100D, Las Villas, 85440 Heroica Guaymas, Son.",
     "lat": 27.92211,
     "lng": -110.916983
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Blvd. Benito Juárez García SN, Ramón Gil Samaniego, 85506 Heroica Guaymas, Son.",
     "lat": 27.899464,
     "lng": -110.908266
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Boulevard Antonio Quiroga 91, Real de Quiroga, 83224 Hermosillo, Son.",
     "lat": 29.08709,
     "lng": -111.021838
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Blvd. Jesús Garcia Morales 961, La Manga, 83220 Hermosillo, Son.",
     "lat": 29.091867,
     "lng": -111.039918
  },
  {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Periférico Pte. Esq. Lázaro Cárdenas, Bulevar Solidaridad, Emiliano Zapata, 83280 Hermosillo, Son.",
     "lat": 29.055092,
     "lng": -110.964662
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Andrés Qroo, No. 274, Chetumal",
     "lat": 18.510114,
     "lng": -88.305187
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 4 Mza. 40, Lote 1, Bacalar",
     "lat": 18.68109,
     "lng": -88.39333
  },
  {
     "marca": "FULLGAS",
     "direccion": "AV. San Lucas resto Seccion 1 Lote 4 Col. S/N en Carmen",
     "lat": 18.66566,
     "lng": -91.757452
  },
  {
     "marca": "FULLGAS",
     "direccion": "Nuevo San Juan, 76807 San Juan del Rio, Qro.",
     "lat": 20.360386,
     "lng": -99.962524
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Fco. I Madero, Ruta 4 S/N Zona 6 RegiÓN 92 Cp. 77516",
     "lat": 21.166927,
     "lng": -86.848609
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 79 881, Leona Vicario, 77210 Felipe Carrillo Puerto, Q.R., México, 77220, Calle 79 808, Jesús Martínez Ross, Felipe Carrillo Puerto, Q.R.",
     "lat": 19.584383,
     "lng": -88.04262
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 31 826-838, Cd Caucel, 97314 Mérida, Yuc.",
     "lat": 21.00889,
     "lng": -89.715963
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carlos Sansores Pérez 38, Issste, 24400 Champotón, Camp.",
     "lat": 19.342751,
     "lng": -90.732098
  },
  {
     "marca": "FULLGAS",
     "direccion": "CALLE 34 ESQ. 41 NO. 89 COL. ULISES SANSORES CP. 24400",
     "lat": 19.347172,
     "lng": -90.724088
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carr. Costera del Golfo, 97770 Chemax, Yuc.",
     "lat": 20.657624,
     "lng": -87.948322
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 25 No 111, esquina calle 20, Col. Chuburná de Hidalgo, Mérida, Yucatán.",
     "lat": 21.008391,
     "lng": -89.631538
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera Colonia Yucatan Tizimin Km 700 Tablaje Catastral 6795, 97710 Tizimin, Yuc.",
     "lat": 21.205178,
     "lng": -87.723684
  },
  {
     "marca": "FULLGAS",
     "direccion": "Súper Mza. 10 Mza 03, Lote 2, Carretera Cancún - Tulum, SM. 10 Mza. 03. Lote 2, 77780 Tulum, Q.R.",
     "lat": 20.215086,
     "lng": -87.451883
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera Valladolid-Mérida, Tablaje Catastral 9545, Carr. Costera del Golfo, Ebtún, Yuc.",
     "lat": 20.668028,
     "lng": -88.257069
  },
  {
     "marca": "FULLGAS",
     "direccion": "Puerto de Abrigos S/N Domicilio Conocido",
     "lat": 21.51753,
     "lng": -87.686335
  },
  {
     "marca": "FULLGAS",
     "direccion": "A. Héctor Pérez Martínez S/N por 35 y 37, Colonia Morelos",
     "lat": 18.605593,
     "lng": -90.735283
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 58 Mza. 39 No. 182 Col. San Carlos Valladolid, Yucatán, C.P. 97780, Calle 37, Bacalar, Valladolid, Yuc.",
     "lat": 20.693689,
     "lng": -88.214298
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 20 No3 esq. Calle S/N, Fracción A S/N, Colonia Barrio de San Francisco",
     "lat": 20.170889,
     "lng": -90.140227
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Héroes No. 282 y 282-A, Col. Adolfo López Mateos Chetumal, Camelias 282 y 282a, Adolfo Lopez Mateos, 77010 Chetumal, Q.R.",
     "lat": 18.509093,
     "lng": -88.294324
  },
  {
     "marca": "FULLGAS",
     "direccion": "Lote 67 del Ejido de Santa Elena poblado de Huay Pix, Othón P. Blanco, Q.R.",
     "lat": 18.519974,
     "lng": -88.421219
  },
  {
     "marca": "FULLGAS",
     "direccion": "Fracción Suroeste del predio San Pedro, El Ideal, Carr. Costera del Golfo, Quintana Roo",
     "lat": 20.88045,
     "lng": -87.540231
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera federal Carmen-Champoton Km. 42, Villa de la Isla Aguada, Libre Federal Ciudad del Carmen - Champotón km. 42+86, Isla Aguada, 24327 Carmen, Camp.",
     "lat": 18.808117,
     "lng": -91.470727
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 58 No. 602 por 67, Mulchechén, Kanasín, Yucatán.",
     "lat": 20.92477,
     "lng": -89.581384
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Centenario No 692 Esq. Almendros, Col. del Bosque",
     "lat": 18.530356,
     "lng": -88.280452
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera a San Bernardo, Kopomá, Yucatán",
     "lat": 20.620564,
     "lng": -89.946672
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Maxuxac Lotes 8,9 y 10, Col. Solidaridad, Av. Machuxac 48, Proterritorio, 77086 Chetumal, Q.R.",
     "lat": 18.532043,
     "lng": -88.285787
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Maxuxac Fracc. 1 No. 560 Col. Parque Industrial. Av. Machuxac & El Naranjal, Chetumal, Q.R.",
     "lat": 18.531639,
     "lng": -88.298705
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera Progreso-Mérida, Carretera Merida-Progreso km10, Temozon Norte, Temozón Nte, Mérida, Yuc.",
     "lat": 21.057137,
     "lng": -89.631237
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 28 No. 298 x 23 y 25 Col. Centro, Motul, Yucatán, 97430",
     "lat": 21.098521,
     "lng": -89.283775
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 25 No. 127 Col. San Pastor Muna, Yucatán, C.P. 97840",
     "lat": 20.482835,
     "lng": -89.703914
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Nardos, Esquina Av. Palmeras S/N, Fracc. Palmira Cp: 24154.",
     "lat": 18.65947,
     "lng": -91.79413
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera Federal Chetumal S/N Felipe Carrillo Puerto-Pedro Santos",
     "lat": 18.946159,
     "lng": -88.184827
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 31 # 245, Peto Yucatán",
     "lat": 20.127476,
     "lng": -88.929717
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera Mérida-Valladolid KM 115 Tablaje Catastral 4097",
     "lat": 20.699391,
     "lng": -88.599138
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle Carlos Rivapalacio Entre Av. Javier Rojo Gómez Num. 371 Col. Gonzálo Guerrero",
     "lat": 18.516654,
     "lng": -88.318318
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 40, Lote 25, Tablaje Catastral 3996",
     "lat": 20.671675,
     "lng": -88.204846
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera Mérida-Valladolid km 9.5 Municipio Kanasín, Yucatán",
     "lat": 20.939401,
     "lng": -89.542913
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 10 S/N, esq. Calle 23, Colonia, Tenabo",
     "lat": 20.03475,
     "lng": -90.226673
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Benito Juarez X Niños Héroes Col Centro Tequisquiapan Qro. Carretera San Juan del Río- Jilitla Km. 19, Centro, 73750 Tequisquiapan, Qro.",
     "lat": 20.519076,
     "lng": -99.897638
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 49 No 192 x Calle 30 Col. La Huayita, Calle 49-C 192, San José Nahbalam, 97700 Tizimín, Yuc., México, San José Nahbalam, 97700 Tizimín, Yuc.",
     "lat": 21.146339,
     "lng": -88.137395
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 31 x 18 s/n Tzucacab, Yucatán CP 97960, Calle 18, Tzucacab, Yuc.",
     "lat": 20.071573,
     "lng": -89.043912
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 16-A X Calle S/N Tablaje Catastral 14177 Umán, Yucatán, C.P. 97390",
     "lat": 20.905537,
     "lng": -89.720964
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 41, Tablaje Catastral 4104 X 62, Col. Bacalar, Calle 16 A Tab. 14177, Carretera Mérida - Umán, Umán, Yuc.",
     "lat": 20.690579,
     "lng": -88.218343
  },
  {
     "marca": "FULLGAS",
     "direccion": "Carretera Valladolid Puerto Juarez Km 41 S/N, Desconocida, Militar, 97782 Valladolid, Yuc.",
     "lat": 20.692781,
     "lng": -88.173096
  },
  {
     "marca": "FULLGAS",
     "direccion": "Calle 42 Nº 140 Fracc. Campestre del Pedregal",
     "lat": 20.710469,
     "lng": -88.202716
  },
  {
     "marca": "FULLGAS",
     "direccion": "Av. Zamná Mza. 30 Lote 4",
     "lat": 20.207855,
     "lng": -87.474671
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. Patria 1543, Col. Mirador del Sol, Zapopan, Jalisco.",
     "lat": 20.6511576,
     "lng": -103.4221601
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. Vallarta No. 4961, Col. Prados Vallarta, Zapopan Jalisco.",
     "lat": 20.6783825,
     "lng": -103.420647
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. Real Acueducto 405-A, Fracc. Real Acueducto, Zapopan.",
     "lat": 20.7114827,
     "lng": -103.4102297
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. López Mateos Sur 1805, Col. Chapalita, Guadalajara Jalisco",
     "lat": 20.660577,
     "lng": -103.396277
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. López Mateos Nte. 541, Esqu. Manuel Acuña Col. Ladron de Guevara, Guadalajara, Jal.",
     "lat": 20.6840631,
     "lng": -103.3811573
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. Niños Héroes 1689, Col. Moderna, Guadalajara, Jalisco.",
     "lat": 20.6667572,
     "lng": -103.3656086
  },
  {
     "marca": "GASMEX",
     "direccion": "Periferico Nte. 4600, Col. Benito Juarez, Zapopan, Jalisco.",
     "lat": 20.7280202,
     "lng": -103.3423805
  },
  {
     "marca": "GASMEX",
     "direccion": "Carretera Km. 17.5 Int. Aeropuerto 45659 Tlajomulco De Zuñiga Jalisco MX, Guadalajara - Chapala, Jal.",
     "lat": 20.5281726,
     "lng": -103.2978165
  },
  {
     "marca": "GASMEX",
     "direccion": "Periferico Ote. Esq. Av. Matatlan, Tonala, Jal.",
     "lat": 20.670461,
     "lng": -103.222071
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. López Mateos Nte. 541, Esqu. Manuel Acuña Col. Ladron de Guevara, Guadalajara, Jal. Av Adolfo López Mateos Nte 541, Circunvalación Vallarta, 44680 Guadalajara, Jal.",
     "lat": 20.684431,
     "lng": -103.381102
  },
  {
     "marca": "GASMEX",
     "direccion": "Camino Real a Colima 782, San Agustín de las Flores, Tlajomulco de Zuñiga, Jal.",
     "lat": 20.5414157,
     "lng": -103.4674037
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. Federalismo Nte. # 3906 Col.Villa de Atemajac, Zapopan Jal. C.p. 45190 ",
     "lat": 20.7298264,
     "lng": -103.3523798
  },
  {
     "marca": "GASMEX",
     "direccion": "Carretera Chapala Jocotepec Num.195, Col. S/C, C.P. 45825, Jocotepec, Jalisco",
     "lat": 20.29328,
     "lng": -103.394928
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. López Mateos Sur 1805, Col. Chapalita, Guadalajara Jalisco",
     "lat": 20.660577,
     "lng": -103.396277
  },
  {
     "marca": "GASMEX",
     "direccion": "Calle Mezquitan No. 500 Col. Centro, Guadalajara, Jal. C.p. 44200",
     "lat": 20.6843996,
     "lng": -103.3528894
  },
  {
     "marca": "GASMEX",
     "direccion": "Periferico Oriente No. 1650, Col. San Gaspar de las Flores, Tonala, Jalisco. C.p. 45400",
     "lat": 20.6788715,
     "lng": -103.2407865
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. Dr. Roberto Michell No. 2499 Col. Valle del Alamo, Guadalajara, Jal. C.p. 44440",
     "lat": 20.6347321,
     "lng": -103.3296642
  },
  {
     "marca": "GASMEX",
     "direccion": "Carretera a Matatlan Km. 1, Zapotlanejo, Jalisco",
     "lat": 20.695585,
     "lng": -103.147626
  },
  {
     "marca": "GASMEX",
     "direccion": "Calzada del Carmen No. 92, Col. Centro Amatitan, Jalisco  Tel. 01-374-745-0332",
     "lat": 20.836283,
     "lng": -103.732769
  },
  {
     "marca": "GASMEX",
     "direccion": "Av. Niños Héroes Mza. 75 Lote 4 y 5 Reg. 233 Col. Benito Juárez Cancún, Quintana Roo. CP 77510",
     "lat": 21.182034,
     "lng": -86.846079
  },
  {
     "marca": "GASMEX",
     "direccion": "16 de Septiembre No. 317, Col. La Floresta, Pitillal, C.P. 48327, Puerto Vallarta, Jalisco",
     "lat": 20.660062,
     "lng": -105.221051
  },
  {
     "marca": "GASMEX",
     "direccion": "Frente a la Plaza Principal de la Localidad, Col. Loc. Santiagao, C.P. 23500, Los Cabos , Baja California Sur",
     "lat": 23.481576,
     "lng": -109.714517
  },
  {
     "marca": "GASMEX",
     "direccion": "Calz. Independencia Sur. No. 571 Col. Barragan y Hernandez, Guadalajara, Jal. cp. 44469 ",
     "lat": 20.6668793,
     "lng": -103.3461341
  },
  {
     "marca": "GASMART",
     "direccion": "Av República de Brasil & Calle Lima, Cuauhtémoc Nte, 21200 Mexicali, B.C.",
     "lat": 32.666732,
     "lng": -115.444056
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. # 23, Sánchez Taboada, Desarrollo Urbano Ex-Ejido Orizaba 1, 21700 Mexicali, B.C.",
     "lat": 32.3570615,
     "lng": -115.1917554
  },
  {
     "marca": "GASMART",
     "direccion": "Blvrd Islas Agrarias 2957, Plutarco Elías Calles, 21376 Mexicali, B.C.",
     "lat": 32.6148035,
     "lng": -115.3877076
  },
  {
     "marca": "GASMART",
     "direccion": "Río Fuerte No 1887, Cuauhtemoc Norte, Cuauhtémoc Nte, 21200 Mexicali, B.C.",
     "lat": 32.6632063,
     "lng": -115.4422984
  },
  {
     "marca": "GASMART",
     "direccion": "Calle Rio Presidio 1299, Colonia Santa María, Sta María, 21240 Mexicali,, B.C., M, Sta María, 21240 Mexicali, B.C.",
     "lat": 32.657083,
     "lng": -115.4268597
  },
  {
     "marca": "GASMART",
     "direccion": "Carretera Tijuana-Mexicali No. Kilómetro 4.5, Libertad, 21324 Mexicali, B.C.",
     "lat": 32.5926707,
     "lng": -115.5573964
  },
  {
     "marca": "GASMART",
     "direccion": "Paseo José María Morelos y Pavón, 21400 Tecate, B.C.",
     "lat": 32.565739,
     "lng": -116.5874397
  },
  {
     "marca": "GASMART",
     "direccion": "Km 22.5 Blvd. Benito Juarez #10000 Loc. C-1, Carr. Tijuana-rosarito, Quinta Plaza, 22710 Rosarito, B.C.",
     "lat": 32.3486482,
     "lng": -117.0606318
  },
  {
     "marca": "GASMART",
     "direccion": "Aeropuerto, 22435 Tijuana, B.C.",
     "lat": 32.546976,
     "lng": -116.9716897
  },
  {
     "marca": "GASMART",
     "direccion": "Fracc. Moreno, Blvd. Fundadores 8001, Fundadores, 22180 Tijuana, B.C.",
     "lat": 32.4914262,
     "lng": -117.0305051
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. Cuauhtemoc Sur 3658, Madero Sur, 22045 Tijuana, B.C.",
     "lat": 32.5102834,
     "lng": -117.0227028
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. Cucapah #21791, Granjas Fam., Lomas del Matamoros, 22204 Tijuana, B.C.",
     "lat": 32.513362,
     "lng": -116.879714
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. Carretera libre antiguo camino, El Florido, 22215 Tijuana, B.C.",
     "lat": 32.4434809,
     "lng": -116.8705358
  },
  {
     "marca": "GASMART",
     "direccion": "Independencia 7371, Independencia, 22055 Tijuana, B.C.",
     "lat": 32.522789,
     "lng": -117.045507
  },
  {
     "marca": "GASMART",
     "direccion": "Av de los Insurgentes 1910, Libramiento, 22225 Tijuana, B.C.",
     "lat": 32.476392,
     "lng": -116.9234767
  },
  {
     "marca": "GASMART",
     "direccion": "Nogal 3478, El Cortez, 22600 Tijuana, B.C.",
     "lat": 32.505946,
     "lng": -117.0636087
  },
  {
     "marca": "GASMART",
     "direccion": "Calle Camino Tulum 22086, Mariano Matamoros, 22234 Tijuana, B.C.",
     "lat": 32.4865752,
     "lng": -116.8832101
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd Paseo del Alamo, Playas, Costa de Oro, 22200 Tijuana, B.C.",
     "lat": 32.5135312,
     "lng": -117.1202112
  },
  {
     "marca": "GASMART",
     "direccion": "Km 144.000 de la, Tecate - Tijuana, Rancho El Gandœl, 21400 Tecate, B.C.",
     "lat": 32.499517,
     "lng": -116.7181467
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. Gustavo Diaz Ordaz 3153, Paseo Los Reyes, 22650 Tijuana, B.C.",
     "lat": 32.4800011,
     "lng": -116.9392988
  },
  {
     "marca": "GASMART",
     "direccion": "Av. de los Nogales 392, San Carlos Primera Etapa, 84090 Nogales, Son.",
     "lat": 31.2743804,
     "lng": -110.9321146
  },
  {
     "marca": "GASMART",
     "direccion": "Eje Vial Numero 3203 Colonia Greco, Luis Donaldo Colosio Murrieta, 84066 Nogales, Son.",
     "lat": 31.2850895,
     "lng": -110.9418671
  },
  {
     "marca": "GASMART",
     "direccion": "Presidio Numero 3, Zona Industrial, 84100 Nogales, Son.",
     "lat": 31.1839829,
     "lng": -110.970655
  },
  {
     "marca": "GASMART",
     "direccion": "Av Alvaro Obregon & Calle 26, Burócrata, 83450, Colonia Burocrata, Burócrata, 83450 San Luis Río Colorado, Son.",
     "lat": 32.4677578,
     "lng": -114.7459318
  },
  {
     "marca": "GASMART",
     "direccion": "Carretera Federal No. 2, Km. 183.5 SN Cuauhtémoc, Cuauhtémoc, 83400 San Luis RC, Son.",
     "lat": 32.4350969,
     "lng": -114.6238589
  },
  {
     "marca": "GASMART",
     "direccion": "Carretera Internacional SantaAna-Caborca Km. 2.5, Caborca, 84600 Santa Ana, Son.",
     "lat": 30.5556794,
     "lng": -111.1401065
  },
  {
     "marca": "GASMART",
     "direccion": "Carretera Cd. Obregón Navojoa No. 1826 A, Fundidora, 85233 Navojoa, Son.",
     "lat": 27.3352665,
     "lng": -109.7417797
  },
  {
     "marca": "GASMART",
     "direccion": "Río Ameca esquina Pascual Orozco No. 1601",
     "lat": 24.78825,
     "lng": -107.411056
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. Pedro Infante, Gasolinera del Valle, 80150 Culiacán Rosales, Sin.",
     "lat": 24.784654,
     "lng": -107.446149
  },
  {
     "marca": "GASMART",
     "direccion": "Manuel J. Clouthier y o Av. Internacional 4044, Buenos Aires, 80199 Culiacán Rosales, Sin.",
     "lat": 24.768246,
     "lng": -107.397855
  },
  {
     "marca": "GASMART",
     "direccion": "Lázaro Cárdenas, Concepción 743, 36320 San Francisco del Rincón, Gto.",
     "lat": 21.028699,
     "lng": -101.856518
  },
  {
     "marca": "GASMART",
     "direccion": "Libramiento Nororiente, Granja Isabelita, 36821 Irapuato, Gto.",
     "lat": 20.7218806,
     "lng": -101.3380894
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. la Luz 5115, Fracciones de San Nicolas de los Gonzalez, 37670 León, Gto.",
     "lat": 21.1092327,
     "lng": -101.5949254
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. la Luz 4802, San Nicolas de los González, 37670 León, Gto.",
     "lat": 21.1094903,
     "lng": -101.6001527
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. Aristóteles 1965, La Piedad, 37358 León, Gto.",
     "lat": 21.1396593,
     "lng": -101.7464929
  },
  {
     "marca": "GASMART",
     "direccion": "Col., Boulevard Torres Landa Oriente 1145, Buenos Aires, Prados Verdes Sur, 37479 León, Gto.",
     "lat": 21.098727,
     "lng": -101.6699377
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. Adolfo López Mateos 902, Coecillo, 37219 León, Gto.",
     "lat": 21.1205296,
     "lng": -101.6720428
  },
  {
     "marca": "GASMART",
     "direccion": "Col., Blvd. Antonio Madrazo 3701, San Jose del Consuelo, 37200 León, Gto.",
     "lat": 21.1533593,
     "lng": -101.6562577
  },
  {
     "marca": "GASMART",
     "direccion": "Blvd. Paseo de Jerez 809, Granjas Ceres, 37289 León, Gto.",
     "lat": 21.112501,
     "lng": -101.6371987
  },
  {
     "marca": "GASMART",
     "direccion": "Boulevard Timoteo Lozano Oriente No. 3001, Col. Granjero Plus, El Granjeno Iveg, 37138 León, Gto.",
     "lat": 21.07658,
     "lng": -101.6539487
  },
  {
     "marca": "GASMART",
     "direccion": "Boulevard Timoteo Lozano Oriente No. 345, Col. Oriente, La Luz, 37458 León, Gto.",
     "lat": 21.0940665,
     "lng": -101.6904871
  },
  {
     "marca": "GASMART",
     "direccion": "Col., Blvrd Vicente Valtierra 4401, San Miguel, 37278 León, Gto.",
     "lat": 21.1272001,
     "lng": -101.6399224
  },
  {
     "marca": "GASMART",
     "direccion": "Carretera Porvenir San Jose DEL Valle KM 5.6 San José, 63733 Bahía de Banderas, Nay.",
     "lat": 20.7563335,
     "lng": -105.2374624
  },
  {
     "marca": "GASMART",
     "direccion": "Av. Playas los picos No. 96 Playa de Huanacaxtle, 63732 Bahía de Banderas, Nay.",
     "lat": 20.760795,
     "lng": -105.3520997
  },
  {
     "marca": "GASMART",
     "direccion": "Carretera Mezcales - San Vicente No. 9 Oriente San Clemente de Lima, Valle Dorado, 63735 Bahía de Banderas, Nay.",
     "lat": 20.7375023,
     "lng": -105.2730837
  },
  {
     "marca": "GASMART",
     "direccion": "KM 140., México 200, Bucerias, 63732 Bucerías, Nay.",
     "lat": 20.76207,
     "lng": -105.3494017
  },
  {
     "marca": "GASMART",
     "direccion": "Epigmenio González, San Pablo Tecnologico, 76150 Santiago de Querétaro, Qro.",
     "lat": 20.6132674,
     "lng": -100.3996614
  },
  {
     "marca": "GASMART",
     "direccion": "México Querétaro KM 175. Querétaro, Carretera Federal 45 de Cuota 177, Sauz Alto, 76729 Alto Querétaro, Qro.",
     "lat": 20.4624019,
     "lng": -100.0988862
  },
  {
     "marca": "GASMART",
     "direccion": "Av. Adolfo Lopez Mateos 96, Santiago Tepalcapa, 54768 Cuautitlán Izcalli, Méx.",
     "lat": 19.623951,
     "lng": -99.1986747
  },
  {
     "marca": "GASMART",
     "direccion": "Calle Heroico Colegio Militar 490, 11 de Octubre, 26278 Cd Acuña, Coah.",
     "lat": 29.3094039,
     "lng": -100.937206
  },
  {
     "marca": "GASMART",
     "direccion": "Noche Buena 1005, El Cedro, 26237 Cd Acuña, Coah.",
     "lat": 29.3249279,
     "lng": -100.9822556
  },
  {
     "marca": "GASORED",
     "direccion": "Anillo Periférico 759, Arboledas de Jacarandas, San Luis, S.L.P.",
     "lat": 22.192285,
     "lng": -101.0278873
  },
  {
     "marca": "GASORED",
     "direccion": "Km 7.390, Carr Matehuala, Fracc Zapote, 78430 Soledad de Graciano Sánchez, S.L.P.",
     "lat": 22.1696202,
     "lng": -101.0299231
  },
  {
     "marca": "GASORED",
     "direccion": "Av Morales Saucito 1893, Las Camelinas, San Luis, S.L.P.",
     "lat": 22.1686614,
     "lng": -101.0393853
  },
  {
     "marca": "GASORED",
     "direccion": "Av. Fray Diego de la Magdalena 159, Damian Carmona, 78174 San Luis, S.L.P.",
     "lat": 22.1718971,
     "lng": -100.9844364
  },
  {
     "marca": "GASORED",
     "direccion": "Golfo de México 112, Santa Fe, 78390 San Luis, S.L.P.",
     "lat": 22.1446112,
     "lng": -100.948441
  },
  {
     "marca": "GASORED",
     "direccion": "Acceso a La Pila 185, El Aguaje, 78422 San Luis, S.L.P.",
     "lat": 22.0856474,
     "lng": -100.9892273
  },
  {
     "marca": "GASORED",
     "direccion": "Av Industrias 1565, Jardines del Sur, 78399 San Luis, S.L.P.",
     "lat": 22.1354751,
     "lng": -100.9370652
  },
  {
     "marca": "GASORED",
     "direccion": "Nereo Rodríguez Barragán 450, Colonia del Valle, Col del Valle, 78200 San Luis, S.L.P.",
     "lat": 22.1551372,
     "lng": -101.0052363
  },
  {
     "marca": "GASORED",
     "direccion": "Sirconio 1090, De Valle Dorado, Esmeralda, San Luis, S.L.P.",
     "lat": 22.1362696,
     "lng": -100.9503483
  },
  {
     "marca": "GASORED",
     "direccion": "Av Himno Nacional 1901, Tangamanga, 78269 San Luis, S.L.P.",
     "lat": 22.1423082,
     "lng": -100.9983452
  },
  {
     "marca": "GASORED",
     "direccion": "Acceso Norte 441, Industrial Mexicana, 78309 San Luis, S.L.P.",
     "lat": 22.1705883,
     "lng": -100.9619332
  },
  {
     "marca": "GASORED",
     "direccion": "Km. 1, San Luis Potosi - Rioverde, Laurel, 78437 Soledad de Graciano Sánchez, S.L.P.",
     "lat": 22.1508689,
     "lng": -100.9435006
  },
  {
     "marca": "GASORED",
     "direccion": "Paseo de la República, San Luis de la Paz, Gto.",
     "lat": 21.2851466,
     "lng": -100.5931505
  },
  {
     "marca": "GASORED",
     "direccion": "Manuel José Othón No. 485, Centro, 78000 San Luis, S.L.P.",
     "lat": 22.1521729,
     "lng": -100.973451
  },
  {
     "marca": "GASORED",
     "direccion": "Periférico Sur Km 10, Aguaje, 78000 San Luis, S.L.P.",
     "lat": 22.1043473,
     "lng": -100.9492749
  },
  {
     "marca": "GASORED",
     "direccion": "Matehuala - San Luis Potosí 2414, Peyote, S.L.P.",
     "lat": 22.5642356,
     "lng": -100.6320784
  },
  {
     "marca": "GASORED",
     "direccion": "Carretera a El Naranjo 33, Santo Niño, 79300 Cd del Maíz, S.L.P.",
     "lat": 22.4109858,
     "lng": -99.5981372
  },
  {
     "marca": "GASORED",
     "direccion": "La Villa, 79303 Cd del Maíz, S.L.P.",
     "lat": 22.4057949,
     "lng": -99.6130895
  },
  {
     "marca": "GASORED",
     "direccion": "Venado, S.L.P.",
     "lat": 22.9424811,
     "lng": -101.0954702
  },
  {
     "marca": "GASORED",
     "direccion": "Calle Melchor Ocampo 136A, Venado, S.L.P.",
     "lat": 22.9214851,
     "lng": -101.0997831
  },
  {
     "marca": "GASORED",
     "direccion": "Camino a Portezuelo 10, 78440 Real del Potosí, S.L.P.",
     "lat": 22.1700013,
     "lng": -100.8392403
  },
  {
     "marca": "GASORED",
     "direccion": "Av San Pedro 1692, San Francisco, 78435 Soledad de Graciano Sánchez, S.L.P.",
     "lat": 22.1679552,
     "lng": -100.9293475
  },
  {
     "marca": "GASORED",
     "direccion": "Anillo Periferico Km. 20+100 # 5780 Fracc, De La Rivera, 78430 Soledad de Graciano Sánchez, S.L.P.",
     "lat": 22.1820403,
     "lng": -100.9182884
  },
  {
     "marca": "GASORED",
     "direccion": "Guadalcázar, S.L.P.",
     "lat": 22.8244026,
     "lng": -100.5551539
  },
  {
     "marca": "GASORED",
     "direccion": "Libramiento Villa de Reyes San Luis 32, México, 79500 Villa de Reyes, S.L.P.",
     "lat": 21.803669,
     "lng": -100.9299935
  },
  {
     "marca": "GASORED",
     "direccion": "México 57, San Luis Potosí",
     "lat": 21.6974484,
     "lng": -100.6532394
  },
  {
     "marca": "GASORED",
     "direccion": "Avenida de las Americas 101, La Finca, 78717 Matehuala, S.L.P.",
     "lat": 23.672868,
     "lng": -100.6328599
  },
  {
     "marca": "GASORED",
     "direccion": "Av. Fray Diego de la Magdalena 159, Damian Carmona, 78174 San Luis, S.L.P.",
     "lat": 22.1642493,
     "lng": -100.9920278
  },
  {
     "marca": "GASORED",
     "direccion": "Calle San Luis Potosí-México 420, Sur, 78395 San Luis, S.L.P.",
     "lat": 22.1351516,
     "lng": -100.9353823
  },
  {
     "marca": "GASORED",
     "direccion": "Hacienda de las Cruces, 78438 Soledad de Graciano Sánchez, S.L.P.",
     "lat": 22.1552972,
     "lng": -100.9165103
  },
  {
     "marca": "GASTOP",
     "direccion": "Jardines de Monaco, 83078 Hermosillo, Son.",
     "lat": 29.069858,
     "lng": -110.979829
  },
  {
     "marca": "GASTOP",
     "direccion": "Bulevar Paseo Río Sonora, Jardines de Monaco, 83288 Hermosillo, Son.",
     "lat": 29.0701556,
     "lng": -110.9777976
  },
  {
     "marca": "GASTOP",
     "direccion": "Carretera a Nogales Kilómetro 1.7, San Luis, 83160 Hermosillo, Son.",
     "lat": 29.103312,
     "lng": -110.9151122
  },
  {
     "marca": "GASTOP",
     "direccion": "Blvd. Manuel J. Clouthier No. 275, Costa del Sol, 83284 Hermosillo, Son.",
     "lat": 29.0158857,
     "lng": -110.9645694
  },
  {
     "marca": "GASTOP",
     "direccion": "Carretera salida a Hermosillo km 135, Santa Clara, Guaymas, Sonora ",
     "lat": 28.0070642,
     "lng": -110.9480819
  },
  {
     "marca": "GASTOP",
     "direccion": "Blvd. Faustino Félix Serna 2, 13 de Enero, Nacionalización del Golfo de California, 85477 Heroica Guaymas, Son.",
     "lat": 27.905957,
     "lng": -110.9216551
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. Internacional #7883, col. Zona norte 22000 ",
     "lat": 32.5410838671009,
     "lng": -117.042766088417
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Benítez # 15730 esq. Manuel clouthier, col. La ciénega  ",
     "lat": 32.488848162331,
     "lng": -116.941818469933
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Rampa de bajada central camionera",
     "lat": 32.518375,
     "lng": -116.963196
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Aranjuez # 7576, fracc. Villa fontana deleg. La presa  ",
     "lat": 32.5051927528825,
     "lng": -116.866292828491
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Bellas artes # 20380 esq. Con mexicali ciudad industrial",
     "lat": 32.544027794714,
     "lng": -116.905131215027
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Vía rápida oriente 13540 col. Chamizal 22380",
     "lat": 32.5169047374014,
     "lng": -116.981027001312
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Avenida tecolote #18603 col. Ampliacion guaycura 22216",
     "lat": 32.4995431766777,
     "lng": -116.919078701904
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Vía rápida oriente col.guadalupe victoria",
     "lat": 32.516036230099,
     "lng": -116.969117993286
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Insurgentes # 16615 col. Los alamos",
     "lat": 32.5048579730747,
     "lng": -116.953360015324
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Avenida padre hidalgo 9330 delegacion la gloria",
     "lat": 32.4467638680777,
     "lng": -117.000786835125
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calle 15 y ave. Azueta no. 1599 colonia libertad 22400",
     "lat": 32.5363987080075,
     "lng": -117.007892006805
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Prolongación díaz ordaz #8520, col. Baja california",
     "lat": 32.4726771037555,
     "lng": -116.934410208633
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera libre tijuana-ensenada km. 21 no. 11000 col. Lucio blanco 22710",
     "lat": 32.390290217629,
     "lng": -117.056021565369
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Sanchez taboada #7930 anexa sanchez taboada 22183",
     "lat": 32.4772479227594,
     "lng": -116.96910726445
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Vía rápida poniente # 16995 méxico lindo",
     "lat": 32.46852073805,
     "lng": -116.925519356301
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera libre tijuana - ensenada no. 125, c.p. 22705",
     "lat": 32.384147,
     "lng": -117.057567
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calle 2 #23620 col. Villa del real 5ta. Sección entre venecia y villa paseo del real 22205",
     "lat": 32.5077080856271,
     "lng": -116.862419718674
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Vía rápida poniente #13002 col. Anexa 20 de noviembre 22320",
     "lat": 32.515149620238,
     "lng": -116.980871433189
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Paseo del campo no. 5782 col. Villa del campo",
     "lat": 32.5130732904751,
     "lng": -116.735620969704
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Cucapah #22630 col. Lomas del matamoros entre nicolás bravo y alvaro obregón 22680",
     "lat": 32.5140187276217,
     "lng": -116.863583797386
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calle venustiano carranza # 355 primero de diciembre río mayo y emiliano zapata 21260",
     "lat": 32.644091,
     "lng": -115.443429
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Anahuac # 2158 y perimetral depo conjunto urbano esperanza 21350",
     "lat": 32.6118515583815,
     "lng": -115.479236716202
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calzada anahuac # 2101 conjunto urbano esperanza 21350",
     "lat": 32.6120548982511,
     "lng": -115.479000681809
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calzada h. Colegio militar v. # 1900 col. Villa fontana 21180",
     "lat": 32.6265428049177,
     "lng": -115.505181724003
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera federal km. 180-2",
     "lat": 31.1170126898109,
     "lng": -114.901327961853
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Ave. Guatemala #900 entre ave. López rayón y calle méxico 21960",
     "lat": 32.6359661406401,
     "lng": -114.850308993629
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Km 6 ejido nuevo león s/n ejido saltillo",
     "lat": 32.4218122263544,
     "lng": -115.128983134201
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera a san luis río colorado km. 26.5 ejido sinaloa",
     "lat": 32.553191,
     "lng": -115.25448
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera estatal mexicali-nogales #500 col. Islas agrarias 21600",
     "lat": 32.6141244199928,
     "lng": -115.327187651566
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. Michoacan no. 2501, colonia baja california, c.p. 21130",
     "lat": 32.655981,
     "lng": -115.516125
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Lazaro cardenas no. 3001 colonia nuevo mexicali",
     "lat": 32.6097277588156,
     "lng": -115.38525211232
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Km 7.5 carretera mexicali - tijuana, colonia progreso, c.p. 21210",
     "lat": 32.582044,
     "lng": -115.584431
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calzada de las americas #1194, esquina juan caballero col. San gabriel, cp 21210",
     "lat": 32.6622835,
     "lng": -115.4265243
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera san felipe a laguna chapala km. 172, colonia puertecitos, c.p. 22917",
     "lat": 29.797178,
     "lng": -114.396997
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Circuito antonio valdez herrera no.19, fracc. Los milagros, c.p. 21138",
     "lat": 32.622328,
     "lng": -115.573589
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. Sinaloa no. 1099, esquina calle uxmal, colonia esperanza, c.p. 21140",
     "lat": 32.645175,
     "lng": -115.495269
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Avenida fuente del sol # 2418, col. Voluntad c.p. 21323",
     "lat": 32.600003,
     "lng": -115.505808
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calle zaragoza y calle j # 1798",
     "lat": 32.6613444066974,
     "lng": -115.459710234573
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Benito juarez no. 800, colonia el encanto norte c.p. 21447",
     "lat": 32.561667,
     "lng": -116.6542
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera libre a tecate km 109 rancho loma tova",
     "lat": 32.540789921256,
     "lng": -116.416872614792
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera federal tecate-mexicali km. 71+396.80 21510",
     "lat": 32.5220658498502,
     "lng": -116.063797348907
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera estatal la bufadora #141 z-1 ejido nacionalista de sanchez taboada",
     "lat": 31.7076875817721,
     "lng": -116.61111819165
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera transpeninsular km. 240 22910",
     "lat": 30.8388863046269,
     "lng": -116.059827679565
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera transpeninsular km. 296 col. Lázaro cárdenas",
     "lat": 30.5267516451899,
     "lng": -115.931677097252
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera ensenada – san felipe #3986 real del castillo nuevo, ejido real del castillo",
     "lat": 31.8894738512505,
     "lng": -116.278653019836
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera transpeninsular km. 284 22240",
     "lat": 30.5652173673906,
     "lng": -115.943012112549
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera transpeninsular km. 190 22900",
     "lat": 31.3260825777856,
     "lng": -116.24795781987
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera valle de la trinidad",
     "lat": 31.4070371518064,
     "lng": -115.724315518311
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. Benito juárez # 500 col. Vicente guerrero",
     "lat": 30.7216946738811,
     "lng": -115.989017361572
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera internacional mexico nogales, km 239 84020",
     "lat": 31.022136,
     "lng": -110.890925
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Ave. De los maestros 250 col. Jardines de la montaña",
     "lat": 31.2903169887252,
     "lng": -110.968302959374
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calzada industrial nuevo nogales #1029 colonia nuevo nogales",
     "lat": 31.2561531892488,
     "lng": -110.95680835264
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Obregon ave. Alvaro obregón # 1140 col. Moderna 84000",
     "lat": 31.3120777059943,
     "lng": -110.94489800351
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. De los nogales #315 colonia colinas del yaqui 84093",
     "lat": 31.3119940646234,
     "lng": -110.953654074839
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Avenida alvaro obregon no. 1895 colonia moderna c.p. 84066",
     "lat": 31.3001188,
     "lng": -110.9380517
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. 5 de mayo esq. Hidalgo #300 83500",
     "lat": 32.200723,
     "lng": -114.994417
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calle profesor hector lizarraga no. 59, colonia el sahuaral c.p. 84120",
     "lat": 30.7921671344436,
     "lng": -110.840393536771
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Eusebio kino # 80",
     "lat": 31.8553432698772,
     "lng": -112.854845398834
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Benito juárez # 121 zona centro",
     "lat": 32.3428188800949,
     "lng": -117.05770599263
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calle nicolas bravo no. 710, esq. Con valentin gomez farias colonia centro c.p. 23000",
     "lat": 24.154114,
     "lng": -110.311903
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "5 de mayo e isabel la catolica centro c.p. 23000, la paz",
     "lat": 24.1551950033192,
     "lng": -110.302632326057
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Camino al calandrio, s/n, colonia el mezquitito, c.p. 23083",
     "lat": 24.094019,
     "lng": -110.312408
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Luis donaldo colosio # 1710 emiliano zapata c.p. 23070, la paz",
     "lat": 24.1274314292023,
     "lng": -110.318871884027
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calz. Forjadores no. 16 bella vista c.p. 23050, la paz",
     "lat": 24.12280239,
     "lng": -110.3112477
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Avenida agustin olachea no. 3590, colonia pueblo nuevo, c.p. 23060",
     "lat": 24.136786,
     "lng": -110.319069
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calzada general agustin olachea no. 5010 indeco c.p. 23070, la paz",
     "lat": 24.1260092,
     "lng": -110.3311819
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Km 61+900 carrt.Transp.Tramo Pescadero l-628 y 652 el pescadero c.p. 23310, la paz",
     "lat": 23.36692469,
     "lng": -110.1743129
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calle 5 de mayo no.3210 francisco villa c.p. 23040, la paz",
     "lat": 24.14199798,
     "lng": -110.2837068
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Calle aquiles serdan no. 316, esq. Con avenida 5 de mayo colonia centro c.p. 23000",
     "lat": 24.1617,
     "lng": -110.312056
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera transpeninsular num 4715 conchalito c.p. 23090, la paz",
     "lat": 24.13651277,
     "lng": -110.3389442
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Santos degollado s/n loc. Todos santos c.p. 23300, la paz",
     "lat": 23.4457024838346,
     "lng": -110.225840681961
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Avenida del datil no. 7404 buenos aires c.p. 23420, los cabos",
     "lat": 23.13702042,
     "lng": -109.7097462
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Avenida los aguajitos, no. 1938, colonia arcos del sol, c.p. 23478",
     "lat": 22.910825,
     "lng": -109.928511
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd.Lomas Del sol s/n entre lineamiento y c.estr. Lagunitas c.p. 23410, los cabos",
     "lat": 22.91594653,
     "lng": -109.92461
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Avenida las brisas 3004 brisas del pacifico c.p. 23470, los cabos",
     "lat": 22.90454707,
     "lng": -109.9374403
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Nicolas tamaral lote 3, fracc a de el potrero s/n las palmas c.p. 23477, los cabos",
     "lat": 22.93807319,
     "lng": -109.9382222
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera a la playita manz 4 lotes 2 y 5 la choya c.p. 23410, los cabos",
     "lat": 23.06404726,
     "lng": -109.6809769
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Boulevard forjadores, no. 3506, colonia santa rosa, c.p. 23400",
     "lat": 2308.8744,
     "lng": -109.711631
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Ernesto chanes chavez no. 712 ampliacion el zacatal c.p. 23430, los cabos",
     "lat": 23.09927808,
     "lng": -109.7192761
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Francisco i madero s/n 4 de marzo c.p. 23641, comondu",
     "lat": 25.0385336178453,
     "lng": -111.648511250926
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Blvd.Benito Juarez s/c c.p. 23700, comondu",
     "lat": 25.2587178720931,
     "lng": -111.778147691658
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carr. Transpeninsular km. 212 vargas c.p. 23620, comondu",
     "lat": 25.04248254,
     "lng": -111.6782624
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Antonio alvarez rico no. 302 centro c.p. 23600, comondu",
     "lat": 25.0269813796643,
     "lng": -111.653588704299
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. Benito juarez y emiliano zapata centro c.p. 23880, loreto",
     "lat": 26.0111316,
     "lng": -111.3454807
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. Notri s/n s/c c.p. 23880, loreto",
     "lat": 26.00740487,
     "lng": -111.3661525
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. Salvatierra s/num. Centro c.p. 2388, loreto",
     "lat": 26.0068795561337,
     "lng": -111.349986666611
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Tramo municipal salida al norte km 0 + 500 fundidora el boleo c.p. 23935, mulege",
     "lat": 27.34375721,
     "lng": -112.2679755
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Carretera transpeninsular km. 137 s/c c.p. 23935, mulege",
     "lat": 27.62555146,
     "lng": -113.3749634
  },
  {
     "marca": "GRUPO ECO",
     "direccion": "Av. Nacional # 245 eje poniente s/d c.p. 49400, tizapan el alto",
     "lat": 20.1626562,
     "lng": -103.0496255
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Rivera de Champayán #203, Col. San Antonio, Tampico, Tam.",
     "lat": 22.29529,
     "lng": -97.883356
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Hidalgo #5303, Col. Flamboyanes, Tampico, Tam.",
     "lat": 22.275346,
     "lng": -97.873828
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Valles #212, Col. Flamboyanes, Tampico, Tam.",
     "lat": 22.274832,
     "lng": -97.867616
  },
  {
     "marca": "NEXUM",
     "direccion": "1ro. de Mayo #1401 Pte., Col. Lázaro Cárdenas, Cd. Madero Tam ",
     "lat": 22.253359,
     "lng": -97.847367
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Hidalgo #1913, Col. Smith, Tampico, Tam,",
     "lat": 22.25029,
     "lng": -97.84511
  },
  {
     "marca": "NEXUM",
     "direccion": "Francisco Sarabia #1010 Pte., Col. Primero de Mayo, Cd. Madero, Tam.",
     "lat": 22.239284,
     "lng": -97.86961
  },
  {
     "marca": "NEXUM",
     "direccion": "Guatemala #1500 Pte., Col. Vicente Guerrero, Cd. Madero, Tam",
     "lat": 22.261796,
     "lng": -97.839733
  },
  {
     "marca": "NEXUM",
     "direccion": "La Loma Chihuahua S/N, Col. Hidalgo Pte., Cd. Madero, Tam.",
     "lat": 22.253134,
     "lng": -97.825401
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Monterrey Av. Monterrey #601 Pte., Col. Ampliación Unidad Nal., Cd. Madero, Tam.",
     "lat": 22.280855,
     "lng": -97.84776
  },
  {
     "marca": "NEXUM",
     "direccion": "Blvd. Adolfo López Mateos S/N, Col. Obrera Tampico, Tam.",
     "lat": 22.237128,
     "lng": -97.849733
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tampico - Valles S/N, Col. Moralillo, Pánuco, Ver.",
     "lat": 22.224059,
     "lng": -97.907763
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Las Torres #103, Col. Petroquímicas, Tampico, Tam.",
     "lat": 22.30899,
     "lng": -97.887562
  },
  {
     "marca": "NEXUM",
     "direccion": "Boulevard Blvd. Adolfo López Mateos #700, Col. Esfuerzo Nacional, Cd. Madero, Tam.",
     "lat": 22.250284,
     "lng": -97.855032
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Madero #401 Pte., Col. Unidad Nacional, Cd. Madero, Tam.",
     "lat": 22.271692,
     "lng": -97.849923
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Hidalgo Esq. Con Jesús Elías Piña, Col. Del Pueblo, Tampico, Tam.",
     "lat": 22.226986,
     "lng": -97.864715
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Hidalgo esq. Con torreón #702, Col. Campbell, Tampico, Tam.",
     "lat": 22.226782,
     "lng": -97.8649
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Universidad #305, Col. Ampliación Petrolera, Tampico, Tam.",
     "lat": 22.257008,
     "lng": -97.863794
  },
  {
     "marca": "NEXUM",
     "direccion": "Gil Blvd. Emilio Portes Gil #1009, Col. Tamaulipas, Tampico, Tam.",
     "lat": 22.222465,
     "lng": -97.848209
  },
  {
     "marca": "NEXUM",
     "direccion": "Corredor Urbano Luis Donaldo Colosio Murrieta Km.3+740, Cd. Madero, Tam.",
     "lat": 22.301265,
     "lng": -97.816461
  },
  {
     "marca": "NEXUM",
     "direccion": "Corredor Urbano Luis Donaldo Colosio Murrieta Km.3+715, Cd. Madero, Tam.,",
     "lat": 22.30893,
     "lng": -97.872045
  },
  {
     "marca": "NEXUM",
     "direccion": "Calle Benito Juárez #300, Col. Laguna de la Puerta, Tampico, Tam.",
     "lat": 22.301346,
     "lng": -97.817145
  },
  {
     "marca": "NEXUM",
     "direccion": "Jiménez #605 Pte., Col. Hipódromo, Cd. Madero, Tam.",
     "lat": 22.265113,
     "lng": -97.82455
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Pánuco-Canoas km. 1+000, Paso Real Buena Vista. Pánuco, Ver.",
     "lat": 22.064836,
     "lng": -98.169216
  },
  {
     "marca": "NEXUM",
     "direccion": "Blvd. Salvador Díaz Mirón S/N, Pánuco, Ver.",
     "lat": 22.045804,
     "lng": -98.191152
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Alzán Canoas KM. 136  Tramo Pánuco Tempoal, Pánuco, Ver.",
     "lat": 21.896993,
     "lng": -98.30386
  },
  {
     "marca": "NEXUM",
     "direccion": "Emiliano Zapata #400, Col. Antonio J. Bermúdez, Pánuco, Ver.",
     "lat": 22.153061,
     "lng": -98.161938
  },
  {
     "marca": "NEXUM",
     "direccion": "Blvd. Díaz Mirón y Carretera Panuco-Tempoal, Col. Rafael Hernández Ochoa, Pánuco, Ver.",
     "lat": 22.045772,
     "lng": -98.191664
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Nacional - Enrique Rébsamen #1002, Col. 10 De Mayo, Tantoyuca, Ver.",
     "lat": 21.366694,
     "lng": -98.228333
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Km. 63+080 Tantoyuca, Ver.",
     "lat": 21.329491,
     "lng": -98.208441
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Num.101, Llano Grande,Tempoal,Ver.",
     "lat": 21.492882,
     "lng": -98.356859
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Km.139, Col. El Alto, Tempoal, Ver.",
     "lat": 21.523207,
     "lng": -98.380387
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Km.126+532.8, Ozuluama, Ver.",
     "lat": 21.685448,
     "lng": -97.853766
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Km. 148+583 Ozuluama, Ver.",
     "lat": 21.85086,
     "lng": -97.749143
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Km. 175+600, S/C, Cd. Cuauhtémoc, Ver.",
     "lat": 22.194789,
     "lng": -97.825301
  },
  {
     "marca": "NEXUM",
     "direccion": "Miguel Hidalgo #523-B, Zona Centro, Cd. Valles,, S.L.P.",
     "lat": 21.984942,
     "lng": -99.012449
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Valles - Tampico km 45+800, Col. Ejido Centinela, Tamuín, S.L.P.",
     "lat": 22.077556,
     "lng": -98.651356
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Valles - Mante #102, Col. El 21, Cd. Valles, S.L.P.",
     "lat": 22.010479,
     "lng": -99.000994
  },
  {
     "marca": "NEXUM",
     "direccion": "Boulevard México - Laredo #444, Col. Centro, Cd. Valles, S.L.P.",
     "lat": 21.990755,
     "lng": -99.012141
  },
  {
     "marca": "NEXUM",
     "direccion": "Boulevard México - Laredo Sur #1105, Col. Itzel Cd. Valles, S.L.P.",
     "lat": 21.981502,
     "lng": -99.005496
  },
  {
     "marca": "NEXUM",
     "direccion": "Antiguo Libramiento #739, Col. Altavista, Cd. Valles, S.L.P.",
     "lat": 21.992757,
     "lng": -99.001289
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Nal. Y Libramiento Sur S/N, Col. Lomas De Yuejat, Cd. Valles, S.L.P.",
     "lat": 21.965263,
     "lng": -98.998768
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera México-Laredo #5216 S-C, Cd. Valles, S.L.P.",
     "lat": 21.937884,
     "lng": -98.978795
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Cd. Valles - San Luis Potosí, Tramo Cd. Valles - Río Verde KM. 91+870",
     "lat": 21.864759,
     "lng": -99.607979
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Valles - San Luis Potosí Km 31.500, Mpio. De Aquismón, S.L.P.",
     "lat": 21.925454,
     "lng": -99.226302
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Valles - Tampico #6150, Tres Filos, Tamuín, S.L.P.",
     "lat": 21.970506,
     "lng": -98.817901
  },
  {
     "marca": "NEXUM",
     "direccion": "Blvd. Enrique Cárdenas González #501 Pte., Zona Centro, Cd Mante, ",
     "lat": 22.744667,
     "lng": -98.97606
  },
  {
     "marca": "NEXUM",
     "direccion": "Blvd. Luis Echeverría Álvarez #1401 Sur, Zona Centro, Cd Mante, Tam.",
     "lat": 22.731141,
     "lng": -98.965474
  },
  {
     "marca": "NEXUM",
     "direccion": "Calle Rotaria #800, Col. El Martillo, Cd. Mante, Tam.",
     "lat": 22.749561,
     "lng": -98.961594
  },
  {
     "marca": "NEXUM",
     "direccion": "Antonio Casso #101, Col. Cerro del Bernal, Cd. Mante, Tam.",
     "lat": 22.757471,
     "lng": -98.961418
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Nacional Mexico - Laredo Km 555 + 150, Ej. Camotero, Cd. Mante, Tam.",
     "lat": 22.711109,
     "lng": -98.989909
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Ocampo-Limón #705, Col. Paso Ancho, Ocampo, Tam.",
     "lat": 22.866053,
     "lng": -99.251174
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Juan de Dios Villarreal #101 Sin Colonia Ej Chapultepec, Cd. Mante, Tam.",
     "lat": 22.746848,
     "lng": -98.991877
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Nacional México - Laredo Sur #300, Poblado El Limón, Cd. Mante, Tam.",
     "lat": 22.82171,
     "lng": -99.010594
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Manuel Soto la Marina Km 35.5, Aldama, Tam.",
     "lat": 22.921296,
     "lng": -98.084425
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Manuel Soto la Marina Km 39.88, Aldama Tam.",
     "lat": 22.958639,
     "lng": -98.070852
  },
  {
     "marca": "NEXUM",
     "direccion": "12 de Marzo S/N, Ejido Cabras Pintas, Matamoros, Tam.",
     "lat": 25.82697,
     "lng": -97.545812
  },
  {
     "marca": "NEXUM",
     "direccion": "Calle Primera esq. con Calle Mina, Col. Centro Matamoros, Tam. ",
     "lat": 25.87213,
     "lng": -97.499698
  },
  {
     "marca": "NEXUM",
     "direccion": "José de Escandón y Helguera S/N, Col. Ciudad Industrial, Matamoros, Tam.",
     "lat": 25.836984,
     "lng": -97.437502
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Rigo Tovar #84, Col. Zona Industrial, Matamoros, Tam.",
     "lat": 25.878022,
     "lng": -97.527949
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Matamoros - Cd. Victoria Km 7.500, Matamoros, Tam.",
     "lat": 25.7824,
     "lng": -97.53269
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Matamoros - Cd. Victoria Km 18 #18000, Col. Ejido El Saucito, Matamoros, Tam",
     "lat": 25.716166,
     "lng": -97.571515
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Constituyentes #64, Col. Ignacio Zaragoza, Matamoros, Tam.",
     "lat": 25.872921,
     "lng": -97.551304
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Sendero Nacional Km. 7.5 Matamoros, Tam.",
     "lat": 25.870111,
     "lng": -97.551454
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan La Barra #33, Tuxpan, Ver.",
     "lat": 20.959596,
     "lng": -97.340372
  },
  {
     "marca": "NEXUM",
     "direccion": "ViejoAbasolo S/N Esq. Benito Juárez, Pueblo Viejo, Ver.",
     "lat": 22.18478,
     "lng": -97.835923
  },
  {
     "marca": "NEXUM",
     "direccion": "Tercera Avenidad y Calle Segunda, Col. Isleta Pérez, Tampico, Tam.",
     "lat": 22.210015,
     "lng": -97.841915
  },
  {
     "marca": "NEXUM",
     "direccion": "Margen Izquierdo del Río Pánuco, El Moralillo, Ver.",
     "lat": 22.223408,
     "lng": -97.903819
  },
  {
     "marca": "NEXUM",
     "direccion": "Rivera y Camelia S/N, Congregación Anáhuac, Ver.",
     "lat": 22.208276,
     "lng": -97.859953
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Jojutla - Tlatenchi - Tequesquitengo S/N, Jojutla, Mor.",
     "lat": 18.6009,
     "lng": -99.203632
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera San Felipe - Dolores Hidalgo Km. 133.5, Col. Trojes de Aguirre, San Felipe, Gto.",
     "lat": 21.457432,
     "lng": -101.201503
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxtla Gutiérrez - Cd. Cuauhtemoc Km 232+580 ej. Joaquín Miguel Gutiérrez, Frontera Comalapa, Chis.",
     "lat": 15.833013,
     "lng": -91.965817
  },
  {
     "marca": "NEXUM",
     "direccion": "Paseo San Buenaventura #201, Col. Vicente Guerrero, Toluca, Edo. Méx.",
     "lat": 19.281893,
     "lng": -99.67314
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Amealco-Coroneo Km 35.5, Col. Centro, Amealco de Bonfil, Qro",
     "lat": 20.19709,
     "lng": -100.14989
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tampico - Mante KM 96.5, González, Tam.",
     "lat": 22.823174,
     "lng": -98.4376
  },
  {
     "marca": "NEXUM",
     "direccion": "Libramiento Manuel Gonzalez KM 7+300 S/N, González, Tam.",
     "lat": 22.760471,
     "lng": -98.3154023
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. 16 de Septiembre #2822, Col. Victoria Etapa 3, Cd. Victoria, Tam",
     "lat": 23.736983,
     "lng": -99.125965
  },
  {
     "marca": "NEXUM",
     "direccion": "Tamaulipas #1302, Col. Guadalupe Victoria, Tampico, Tam.",
     "lat": 22.214325,
     "lng": -97.846383
  },
  {
     "marca": "NEXUM",
     "direccion": "Calle Campánula #239, Col. Jardines de Champayán, Tampico, Tam.",
     "lat": 22.31667,
     "lng": -97.8926997
  },
  {
     "marca": "NEXUM",
     "direccion": "Av. Onésimo Reyes S/N, Las Penitas, Amanalco, Edo. Méx.",
     "lat": 19.252182,
     "lng": -100.0252945
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera a Valle de Bravo S/N, S/C, Almoloya de Juárez, Edo. Méx.",
     "lat": 19.297367,
     "lng": -99.770947
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Tampico - Mante #800, Col. Las Américas, Tampico, Tam.",
     "lat": 22.305817,
     "lng": -97.881969
  },
  {
     "marca": "NEXUM",
     "direccion": "Carretera Cárdenas - Rayón KM. 0.850, Cárdenas, S.L.P",
     "lat": 21.987832,
     "lng": -99.64829
  },
  {
     "marca": "SUPERCARGA",
     "direccion": "Autopista México-Puebla, Santa Ana Xalmimilulco, 74169 Santa Ana Xalmimilulco, Pue. ",
     "lat": 19.2275731,
     "lng": -98.3767228
  },
  {
     "marca": "SUPERCARGA",
     "direccion": "Amp Lomas de Castillotla, Puebla, Pue. ",
     "lat": 18.9807321,
     "lng": -98.2541976
  },
  {
     "marca": "SUPERCARGA",
     "direccion": "Calle 11 Sur 1-A, Mayorazgo, 72492 Puebla, Pue. ",
     "lat": 19.0221123,
     "lng": -98.2268616
  },
  {
     "marca": "SUPERCARGA",
     "direccion": "Prolongación dela 14 Sur 9302, Granjas de San Isidro, 72470 Puebla, Pue. ",
     "lat": 18.9905977,
     "lng": -98.2161659
  },
  {
     "marca": "SUPERCARGA",
     "direccion": "Prolongación 14 Sur 12101 Ex Hacienda Chapulco Puebla, Pue. ",
     "lat": 18.9661229,
     "lng": -98.2187728
  },
  {
     "marca": "SUPERCARGA",
     "direccion": "Calle Prolongacion de la 6 Nte. 3818, Santiago Momoxpan, 72760 Cholula, Pue. ",
     "lat": 19.0771069,
     "lng": -98.2963276
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. # 23, Sánchez Taboada, Desarrollo Urbano Ex-Ejido Orizaba 1, 21700 Mexicali, B.C.",
     "lat": 32.3570615,
     "lng": -115.1917554
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Río Fuerte No 1887, Cuauhtemoc Norte, Cuauhtémoc Nte, 21200 Mexicali, B.C.",
     "lat": 32.6632063,
     "lng": -115.4422984
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Calle Rio Presidio 1299, Colonia Santa María, Sta María, 21240 Mexicali,, B.C., M, Sta María, 21240 Mexicali, B.C.",
     "lat": 32.657083,
     "lng": -115.4268597
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Carretera Tijuana-Mexicali No. Kilómetro 4.5, Libertad, 21324 Mexicali, B.C.",
     "lat": 32.5926707,
     "lng": -115.5573964
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Paseo José María Morelos y Pavón, 21400 Tecate, B.C.",
     "lat": 32.565739,
     "lng": -116.5874397
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Aeropuerto, 22435 Tijuana, B.C.",
     "lat": 32.546976,
     "lng": -116.9716897
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Gustavo Diaz Ordaz, Jardines Desan Carlos, 22106 Tijuana, B.C.",
     "lat": 32.508684,
     "lng": -116.9882997
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Cucapah #21791, Granjas Fam., Lomas del Matamoros, 22204 Tijuana, B.C.",
     "lat": 32.513362,
     "lng": -116.879714
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Carretera libre antiguo camino, El Florido, 22215 Tijuana, B.C.",
     "lat": 32.4434809,
     "lng": -116.8705358
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Av de los Insurgentes 1910, Libramiento, 22225 Tijuana, B.C.",
     "lat": 32.476392,
     "lng": -116.9234767
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Nogal 3478, El Cortez, 22600 Tijuana, B.C.",
     "lat": 32.505946,
     "lng": -117.0636087
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Calle Camino Tulum 22086, Mariano Matamoros, 22234 Tijuana, B.C.",
     "lat": 32.4865752,
     "lng": -116.8832101
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd Paseo del Alamo, Playas, Costa de Oro, 22200 Tijuana, B.C.",
     "lat": 32.5135312,
     "lng": -117.1202112
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Km 144.000 de la, Tecate - Tijuana, Rancho El Gandœl, 21400 Tecate, B.C.",
     "lat": 32.499517,
     "lng": -116.7181467
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Gustavo Diaz Ordaz 3153, Paseo Los Reyes, 22650 Tijuana, B.C.",
     "lat": 32.4800011,
     "lng": -116.9392988
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Av. de los Nogales 392, San Carlos Primera Etapa, 84090 Nogales, Son.",
     "lat": 31.2743804,
     "lng": -110.9321146
  },
  {
     "marca": "SMARTGAS",
     "direccion": "EJE Vial Numero 3203 Colonia Greco, Luis Donaldo Colosio Murrieta, 84066 Nogales, Son.",
     "lat": 31.2850895,
     "lng": -110.9418671
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Presidio Numero 3, Zona Industrial, 84100 Nogales, Son.",
     "lat": 31.1842399,
     "lng": -110.9708267
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Av Alvaro Obregon & Calle 26, Burócrata, 83450, Colonia Burocrata, Burócrata, 83450 San Luis Río Colorado, Son.",
     "lat": 32.473845,
     "lng": -114.7517147
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Carretera Federal No. 2, Km. 183.5 SN Cuauhtémoc, Cuauhtémoc, 83400 San Luis RC, Son.",
     "lat": 32.4350969,
     "lng": -114.6238589
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Carretera Internacional SantaAna-Caborca Km. 2.5, Sonora",
     "lat": 30.5556794,
     "lng": -111.1401065
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Carretera Cd. Obregón Navojoa No. 1826 A, Fundidora, 85233 Navojoa, Son.",
     "lat": 27.3352665,
     "lng": -109.7417797
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Cruz Gálvez 4044 Sur, Buenos Aires, 80199 Culiacán Rosales, Sin.",
     "lat": 24.7683456,
     "lng": -107.398006
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Pascual Orozco 1648, Los Pinos, 80128 Culiacán Rosales, Sin.",
     "lat": 24.7881701,
     "lng": -107.4111983
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Pedro Infante, Gasolinera del Valle, 80150 Culiacán Rosales, Sin.",
     "lat": 24.7847549,
     "lng": -107.4463712
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Lázaro Cárdenas, Concepción 743, 36320 San Francisco del Rincón, Gto.",
     "lat": 21.0286516,
     "lng": -101.8568711
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Libramiento Nororiente, Granja Isabelita, 36821 Irapuato, Gto.",
     "lat": 20.7218806,
     "lng": -101.3380894
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. la Luz 5115, Fracciones de San Nicolas de los Gonzalez, 37670 León, Gto.",
     "lat": 21.1092327,
     "lng": -101.5949254
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Aristóteles 1965, La Piedad, 37358 León, Gto.",
     "lat": 21.1396593,
     "lng": -101.7464929
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Col., Boulevard Torres Landa Oriente 1145, Buenos Aires, Prados Verdes Sur, 37479 León, Gto.",
     "lat": 21.1000157,
     "lng": -101.6695783
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Paseo de Jerez 809, Granjas Ceres, 37289 León, Gto.",
     "lat": 21.112501,
     "lng": -101.6371987
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Boulevard Timoteo Lozano Oriente No. 3001, Col. Granjero Plus, El Granjeno Iveg, 37138 León, Gto.",
     "lat": 21.07658,
     "lng": -101.6539487
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Col., Blvrd Vicente Valtierra 4401, San Miguel, 37278 León, Gto.",
     "lat": 21.1272001,
     "lng": -101.6399224
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Carretera Porvenir SAN Jose DEL Valle KM 5.6 San José, 63733 Bahía de Banderas, Nay.",
     "lat": 20.7563134,
     "lng": -105.237441
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Av. Playas los picos No. 96 Playa de Huanacaxtle, 63732 Bahía de Banderas, Nay.",
     "lat": 20.760795,
     "lng": -105.3520997
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Carretera Mezcales - San Vicente No. 9 Oriente San Clemente de Lima, Valle Dorado, 63735 Bahía de Banderas, Nay.",
     "lat": 20.7375023,
     "lng": -105.2730837
  },
  {
     "marca": "SMARTGAS",
     "direccion": "KM 140., México 200, Bucerias, 63732 Bucerías, Nay.",
     "lat": 20.76207,
     "lng": -105.3494017
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Epigmenio González, San Pablo Tecnologico, 76150 Santiago de Querétaro, Qro.",
     "lat": 20.6132674,
     "lng": -100.3996614
  },
  {
     "marca": "SMARTGAS",
     "direccion": "México Querétaro KM 175. Querétaro, Carretera Federal 45 de Cuota 177, Sauz Alto, 76729 Alto Querétaro, Qro.",
     "lat": 20.4624019,
     "lng": -100.0988862
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Av. Adolfo Lopez Mateos 96, Santiago Tepalcapa, 54768 Cuautitlán Izcalli, Méx.",
     "lat": 19.623951,
     "lng": -99.1986747
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Calle Heroico Colegio Militar 490, 11 de Octubre, 26278 Cd Acuña, Coah.",
     "lat": 29.3094039,
     "lng": -100.937206
  },
  {
     "marca": "SMARTGAS",
     "direccion": "Noche Buena 1005, El Cedro, 26237 Cd Acuña, Coah.",
     "lat": 29.3249279,
     "lng": -100.9822556
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera San Miguel de Allende-Dr. Mora km 17, Los Rodríguez, Rancho Luz del Carmen, 37880 San Miguel de Allende, Gto., México",
     "lat": 21.012639,
     "lng": -100.652669
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera San Miguel de Allende-Dolores Hidalgo Km 14, 37800 San Miguel de Allende, Gto., México",
     "lat": 21.022825,
     "lng": -100.789625
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "San Juan del Río-Huichapan km 77+220, 76837 San Juan del Rio, Qro., México",
     "lat": 20.299675,
     "lng": -99.899151
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Querétaro-Tequisquiapan km 17.5 Guadalupe de la venta, 76240 El Marqués, Qro., México",
     "lat": 20.643001,
     "lng": -100.233032
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Avenida Universidad 200, La Paz, 76806 San Juan del Rio, Qro., México",
     "lat": 20.390498,
     "lng": -99.967347
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Celaya - Querétaro, 76900 Los Ángeles, Qro., México",
     "lat": 20.537268,
     "lng": -100.489584
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera Huimilpan-Coroneo, Industrial el Pueblito, 76900 Corregidora, Qro., México",
     "lat": 20.52962,
     "lng": -100.440955
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Avenida Universidad 337, Villas del Oriente, 76160 Santiago de Querétaro, Qro., México",
     "lat": 20.601115,
     "lng": -100.380991
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera México-Querétaro Km 196+750 El marqués, 76246 El Marqués, MEX, México",
     "lat": 20.572362,
     "lng": -100.267196
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Prol Tecnológico Nte 999, San Pablo, 76130 Santiago de Querétaro, Qro., México",
     "lat": 20.615096,
     "lng": -100.409587
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Anillo Vial Fray Junípero Serra No. 8250,  Ex Hda Menchaca,  Polígono 'C' Querétaro",
     "lat": 20.6355467,
     "lng": -100.3531149
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "REP. Dominicana Atotonilco, Boxfi, 42980 Atotonilco de Tula, Hgo., México",
     "lat": 20.000662,
     "lng": -99.215143
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera ixmikilpa ixmiquilpam palmilla km 58.5, Vallo Largo, 42420 Huichapan, Hgo., México",
     "lat": 20.303798,
     "lng": 99.744879
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Pedro Ma. Anaya No. 56 Col. Centro Huichapan, Hgo C.P 42400",
     "lat": 20.369524,
     "lng": -99.6519792
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carrt. Actopan-Tula Km. 16.6, Col. Tercera Demarcacion, Unidad Magisterial, 42661 Francisco I. Madrero, Hgo., México",
     "lat": 20.2465137,
     "lng": -99.1000499
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carr. Nal. Actopan-Tula km 28, 1ra Demarcación Oriente, 42700 Mixquiahuala de Juárez, Hgo., México",
     "lat": 20.2311,
     "lng": -99.205786
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera Mexico Laredo km. 167, Portezuelo, 42380 Tasquillo, Hgo., México",
     "lat": 20.486065,
     "lng": -99.29688
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Calle Efrén Rebolledo # 344, Los Olivosa, 42500 Actopan, Hgo., México",
     "lat": 20.2808292,
     "lng": -98.9440507
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Pensador Mexicano No. 61, Col. Centro Norte Actopan, Hgo C.P 42500",
     "lat": 20.275376,
     "lng": -98.941671
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Francisco I. Madero, Panteón, 42640 San Salvador, Hgo., México",
     "lat": 20.283243,
     "lng": -99.016755
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Francisco I. Madero, Panteón, 42640 San Salvador, Hgo., México",
     "lat": 20.283548,
     "lng": -99.016776
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Actopan-Tula Km. 5.5, San Antonio Actopan, La 27, San Salvador Hidalgo, Hgo., México",
     "lat": 20.254178,
     "lng": -98.994034
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Actopan-ixmiquilpan km. 121.7, Cañada Aviación, 46620 Actopan, Hgo., México",
     "lat": 20.280146,
     "lng": -98.960904
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera Federal Jorobas - Tula Km. 20, C.P. 42980, Atotonilco de Tula Hidalgo, México",
     "lat": 20.000203,
     "lng": -99.247579
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Av. Jesús Reyes Heroles No. 32 Col. Valle Ceylán Tlalnepantla, Estado de México C.P 54150",
     "lat": 19.538543,
     "lng": -99.181908
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carr. Los Reyes Texcoco-Libre Lecheria km 2, Col. Bernardino, San Bernardino, 55065 Texcoco de Mora, Méx., México",
     "lat": 19.481143,
     "lng": -98.894008
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Santa Clara, Calle Josefa Ortiz de D. 601, 5 de Mayo, 50090 Toluca de Lerdo, Estado de México, México",
     "lat": 19.2898077,
     "lng": -99.6474597
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Puente de Tecamachalco 22, Reforma Soc, 11200 Ciudad de México, CDMX, México",
     "lat": 19.430131,
     "lng": -99.2245357
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Dirección: Av. central N°225 Primera Cerrada de la Viga Col. Potrero Chico C.P 55000, Méx., México",
     "lat": 19.583003,
     "lng": -99.027068
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera Santa Bárbara A lzucar de Matamoros Puebla Km. 81.1 Parque industrial Xalostoc, Ayala, Morelos",
     "lat": 18.77124,
     "lng": -98.89488
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "San Mateo Sur Puebla, Capula, 75482 Tecamachalco, MEX, México",
     "lat": 18.892047,
     "lng": -97.744383
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Francisco I. Madero No. 25 Esq. Calle Hidalgo Col. Centro, Centro, 91270 Perote, Ver., México",
     "lat": 19.561551,
     "lng": -97.243591
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Yucatan No. 155 Esq. Jalapa Roma, Roma Nte., 06700 Ciudad de México, CDMX, México",
     "lat": 19.4120327,
     "lng": -99.1598171
  },
  {
     "marca": "RUTA GASOLINERA",
     "direccion": "Calz. del Peñón 207, Revolución, 15460 Ciudad de México, CDMX, México",
     "lat": 19.44008,
     "lng": -99.1045959
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Autopista a Playas de Tijuana 4431, Col. El Soler",
     "lat": 32.5319888,
     "lng": -117.0764897
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd Fundadores 6468, Fracc. El Rubí Sur, 22626 Tijuana, B.C.",
     "lat": 32.4830582,
     "lng": -117.0377183
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calz del Tecnológico 13277, Tomas Aquino, 22414 Tijuana, B.C.",
     "lat": 32.5285236,
     "lng": -116.9846764
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Roberto de La Madrid 59, San Luis, 22170 Tijuana, B.C., Miguel A. Cárdenas 12495",
     "lat": 32.4311699,
     "lng": -116.9540031
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Libramiento Rosas Magallon 7280, Defensores de Baja California, Col. Obrera, Obrera, 22001 Tijuana, B.C.",
     "lat": 32.4804007,
     "lng": -117.0442456
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "22105, Blvd. Gustavo Diaz Ordaz 605, Las Lilas, 22105 Tijuana, B.C.",
     "lat": 32.5027667,
     "lng": -116.9725886
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Periférico y o Libramiento Sur, El Cortez, 22600 Tijuana, B.C.",
     "lat": 32.5083413,
     "lng": -117.0665516
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. de las Bellas Artes 17615, Garita de Otay, 22430 Tijuana, B.C.",
     "lat": 32.5436103,
     "lng": -116.9419973
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Ruta Matamoros 9683, Matamoros Norte-Centro-Sur, Mariano Matamoros, 22206 Tijuana, B.C.",
     "lat": 32.5007851,
     "lng": -116.8864993
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Ruta Hidalgo, Matamoros Norte-Centro-Sur, Mariano Matamoros, 22689 Tijuana, B.C.",
     "lat": 32.483539,
     "lng": -116.8725233
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calle Sonora 26, Francisco Villa 2da Secc, Tijuana, B.C.",
     "lat": 32.4808978,
     "lng": -116.8491676
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Aguila Real 19263, Col. El Águila, Baja Maq el Aguila, 22215 Tijuana, B.C.",
     "lat": 32.4988067,
     "lng": -116.9052838
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Maclovio Rojas, 22254 Tijuana, B.C.",
     "lat": 32.4672257,
     "lng": -116.8076257
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvrd Federico Benítez López 14808, Fortin de las Flores, 22114 Tijuana, B.C.",
     "lat": 32.4997299,
     "lng": -116.959314
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Ruta Matamoros 9683, Matamoros Norte-Centro-Sur, Mariano Matamoros, 22206 Tijuana, B.C.",
     "lat": 32.4822051,
     "lng": -116.881829
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av Flores Magón 6980, El Jibarito, 22606 Tijuana, B.C.",
     "lat": 32.4869662,
     "lng": -117.061718
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calle Principal, El Florido 1ra y 2da Secc, Tijuana, B.C.",
     "lat": 32.4679069,
     "lng": -116.8713635
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Hermenegildo Galeana 22703, Col. Mariano Matamoros, Mariano Matamoros, 22234 Tijuana, B.C.",
     "lat": 32.4828457,
     "lng": -116.8714804
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calle Uxmal 798 y Av. Zacatecas, Col. Loma Linda, Loma Linda, 21140 Mexicali, B.C.",
     "lat": 32.6462527,
     "lng": -115.4955798
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Lazaro Cardenas 1201, Col. Esperanza Agrícola, Río Nuevo, 21140 Mexicali, B.C.",
     "lat": 32.6146562,
     "lng": -115.4450305
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvrd Lázaro Cárdenas 3039, Mirasol, 21360 Mexicali, B.C.",
     "lat": 32.6058867,
     "lng": -115.3811724
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calz Anáhuac 398, Villa del Rey Tercera Etapa, 21354 Mexicali, B.C.",
     "lat": 32.6099789,
     "lng": -115.4604136
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calz, Hector Terán Terán 976, Col. Camino Viejo, 21320 Mexicali, B.C.",
     "lat": 32.6130985,
     "lng": -115.4952287
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calzada Manuel Gómez Morín 900, Hacienda del Bosque, 21353 Mexicali, B.C.",
     "lat": 32.5946546,
     "lng": -115.4719026
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calzada Cetys 2599, Rivera, 21259 Mexicali, B.C.",
     "lat": 32.6534679,
     "lng": -115.4033146
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvrd Lázaro Cárdenas #3144, Villa Verde, Mexicali, B.C.",
     "lat": 32.6067519,
     "lng": -115.3841838
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd Garcia Morales 741, Esq. Prof. Lazaro Mercado, El Llano, Quinta Emilia, 83210 Hermosillo, Son.",
     "lat": 29.0954097,
     "lng": -111.0182716
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Camino del Seri, Col. Villa de Seris, 83280 Hermosillo, Son.",
     "lat": 29.0622387,
     "lng": -110.9877527
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "83078, Ernesto Salazar Girón 32, Revolucion, 83078 Hermosillo, Son.",
     "lat": 29.0777135,
     "lng": -110.9363962
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Entronque Blvd. Lazaro Cardenas con Blvd Lopez Portillo, Benito Juarez, Benito Juárez, 83110 Hermosillo, Son.",
     "lat": 29.1089977,
     "lng": -110.9553587
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Periférico Norte 176, Balderrama, 83180 Hermosillo, Son.",
     "lat": 29.1101143,
     "lng": -110.9668257
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Periférico Norte, Esq Blvd. Benito Juarez, Periférico Norte, Col. Jesus Garcia, Jesus Garcia, 83144 Hermosillo, Son.",
     "lat": 29.1089977,
     "lng": -110.9553587
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Reforma 79, Esq. Av. Aguascalientes, Col. San Benito",
     "lat": 29.0945072,
     "lng": -110.9698341
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Solidaridad esq. Pueblo de Álamos, Col. Miguel Hidalgo",
     "lat": 29.1335627,
     "lng": -110.9956277
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Agustín de Vildósola, Villa de Seris, 83280 Hermosillo, Son.",
     "lat": 29.0618137,
     "lng": -110.9568257
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Nayarit 325, San Benito, 83180 Hermosillo, Son.",
     "lat": 29.0925412,
     "lng": -110.9775577
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Xólotl No. 244, Altares, 83294 Hermosillo, Son.",
     "lat": 29.0170328,
     "lng": -110.9493389
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calle Coahuila, Campestre, 85160 Cd Obregón, Son.",
     "lat": 27.4781619,
     "lng": -109.94051
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calle Jalisco # 950 Sur, Centro, Central de Abastos, 85000 Cajene, Son.",
     "lat": 27.4814467,
     "lng": -109.9297793
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calle Michoacán 5202, Cajeme, 85119 Cd Obregón, Son.",
     "lat": 27.4575761,
     "lng": -109.953713
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Avenida De Las Misiones Ote. No. 1196, Misión de San Xavier, 85000 Cd Obregón, Son.",
     "lat": 27.4495022,
     "lng": -109.932345
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Nainari & Calle Quintana Roo, Morelos, 85110 Cd Obregón, Son.",
     "lat": 27.4953212,
     "lng": -109.947948
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Rodolfo Elías Calles & Calle Quintana Roo, Sochiloa, 85150 Cd Obregón, Son.",
     "lat": 27.4830369,
     "lng": -109.9495838
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calle Aldama 89, Col. Centro, Centro, 33130 Meoqui, Chih.",
     "lat": 28.2692197,
     "lng": -105.4832857
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av Rio San Pedro Sur 412, Sur 1, 33000 Delicias, Chih.",
     "lat": 28.1944047,
     "lng": -105.4697224
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Antonio Ochoa # 4411, Dale, RUTA SUR II, 31203 Chihuahua, Chih.",
     "lat": 28.613889,
     "lng": -106.0737515
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. 20 de Noviembre 3610, Col. Pacífico",
     "lat": 28.619783,
     "lng": -106.075855
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av Juan Escutia No. 2518, Miramar, 31130 Chihuahua, Chih.",
     "lat": 28.6847609,
     "lng": -106.09736
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Periférico de la Juventud 7929, Esquina con Sierra Nevada",
     "lat": 28.6736709,
     "lng": -106.1346718
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Paseo del Pastizal 9416, Paseos Camino Real Etapa 1ª, 31109 Chihuahua, Chih.",
     "lat": 28.6730137,
     "lng": -105.9865064
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Silvestre Terrazas s/n, Begonias, 31410 Chihuahua, Chih.",
     "lat": 28.603816,
     "lng": -106.1014961
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av Rio San Pedro Sur 412, Sur 1, 33000 Delicias, Chih.",
     "lat": 28.1851673,
     "lng": -105.4741381
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av José María Iglesias No. 4909, San Pablo, 31120 Chihuahua, Chih.",
     "lat": 28.6646395,
     "lng": -106.110681
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Avenida de Las Industrias 3700, Nombre de Dios, 31106 Chihuahua, Chih.",
     "lat": 28.6660307,
     "lng": -106.0828779
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Antonio Ochoa # 4411, Dale, RUTA SUR II, 31203 Chihuahua, Chih.",
     "lat": 28.6136971,
     "lng": -106.0736145
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Tecnologico No. 11708, Revolucion, 31107 Chihuahua, Chih.",
     "lat": 28.6786472,
     "lng": -106.1049547
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Calle Aldama 89, Col. Centro, 33130 Meoqui, Chih.",
     "lat": 28.2692144,
     "lng": -105.4811451
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Nueva España s/n, Misael Núñez, 31064 Chihuahua, Chih.",
     "lat": 28.6179626,
     "lng": -106.0316465
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Carlos Pacheco Villa # 2203, Cerro Cnel. I, Roma Sur, 31217 Chihuahua, Chih.",
     "lat": 28.6441085,
     "lng": -106.0599178
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Periférico de la Juventud s/n, Colinas del Valle, Campestre-Lomas, 31217 Chihuahua, Chih.",
     "lat": 28.6455706,
     "lng": -106.1281562
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Los Arcos No. 601, Magisterial Solidaridad, 31137 Chihuahua, Chih.",
     "lat": 28.7325394,
     "lng": -106.1453675
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Avenida Universidad # 3301, Universidad, 31170 Chihuahua, Chih.",
     "lat": 28.6576277,
     "lng": -106.0933819
  },
  {
     "marca": "RENDICHICAS",
     "direccion": "Av. Francisco Zarco 2828, Zarco, 31020 Chihuahua, Chih.",
     "lat": 28.6202004,
     "lng": -106.0878004
  },
  {
     "marca": "TOTAL",
     "direccion": "Insurgentes Sur 507, Hipódromo Condesa, 06100 Ciudad de México, CDMX",
     "lat": 19.4034723,
     "lng": -99.1699159
  },
  {
     "marca": "TOTAL",
     "direccion": "Av. de las Granjas 751, Santa Catarina, 02250 Ciudad de México, CDMX",
     "lat": 19.491284,
     "lng": -99.1753519
  },
  {
     "marca": "TOTAL",
     "direccion": "Paseo de la Reforma 1005, Lomas de Chapultepec V Secc, 11000 Ciudad de México, CDMX",
     "lat": 9.4207167,
     "lng": -99.2202565
  },
  {
     "marca": "TOTAL",
     "direccion": "Av. Via Real 116, Ampliacion Esmeralda, 55767 Ojo de Agua, Méx.",
     "lat": 19.6543035,
     "lng": -99.0212761
  },
  {
     "marca": "TOTAL",
     "direccion": "Toluca - Tenango De Arista 15 Norte, La Michoacana, 52166 Metepec, Méx.",
     "lat": 19.2522908,
     "lng": -99.6192484
  },
  {
     "marca": "TOTAL",
     "direccion": "Heriberto Enríquez 1017, Emiliano Zapata, 50261 Toluca de Lerdo, Méx.",
     "lat": 19.2585868,
     "lng": -99.6433453
  },
  {
     "marca": "TOTAL",
     "direccion": "Miguel Hidalgo, Santa María Magdalena Ocotitlán, 52161 Santa María Magdalena Ocotitlán, Méx.",
     "lat": 19.2388386,
     "lng": -99.6207423
  },
  {
     "marca": "TOTAL",
     "direccion": "Calle Muitle 189, Victoria de las Democracias, 02810 Ciudad de México, CDMX",
     "lat": 19.4712746,
     "lng": -99.1679313
  },
  {
     "marca": "TOTAL",
     "direccion": "Av. Revolución 420, San Pedro de los Pinos, 03800 Ciudad de México, CDMX",
     "lat": 19.3935183,
     "lng": -99.1875475
  },
  {
     "marca": "TOTAL",
     "direccion": "Norte 45 970, Industrial Vallejo, 02300 Ciudad de México, CDMX",
     "lat": 19.4907634,
     "lng": -99.1673166
  },
  {
     "marca": "TOTAL",
     "direccion": "Avenida Ceylan No. 613, Industrial Vallejo, 02300 Ciudad de México, CDMX",
     "lat": 19.4584239,
     "lng": -99.1868977
  },
  {
     "marca": "TOTAL",
     "direccion": "Miguel Planas 55, Vallejo Poniente, 07790 Ciudad de México, CDMX",
     "lat": 19.4830169,
     "lng": -99.2492521
  },
  {
     "marca": "TOTAL",
     "direccion": "Calle Sabino 494, Col del Gas, 02950 Ciudad de México, CDMX",
     "lat": 19.4833136,
     "lng": -99.2492523
  },
  {
     "marca": "TOTAL",
     "direccion": "Cantera 134, Martín Carrera, 07070 Ciudad de México, CDMX",
     "lat": 19.4846819,
     "lng": -99.1131287
  },
  {
     "marca": "TOTAL",
     "direccion": "Av. Rio Consulado 2884, Pensador Mexicano, 15510 Ciudad de México, CDMX",
     "lat": 19.4233283,
     "lng": -99.1627051
  },
  {
     "marca": "TOTAL",
     "direccion": "Calle 20 de Noviembre, Centro, 56900 Amecameca de Juárez, Méx.",
     "lat": 19.1338321,
     "lng": -98.7727667
  },
  {
     "marca": "TOTAL",
     "direccion": "Carretera Federal, México Pirámides 3, San Agustin Acolman, Acolman, 55870 Estado de México, Méx.",
     "lat": 19.6410108,
     "lng": -98.910496
  },
  {
     "marca": "TOTAL",
     "direccion": "Vía Dr Jiménez Cantú 28-A Mz. 5 Lt. 6, Lomás de Atizapán, 52977 Cd López Mateos, Méx.",
     "lat": 19.5450303,
     "lng": -99.2749227
  },
  {
     "marca": "TOTAL",
     "direccion": "Km 1.5, Carretera. Santiago - Chalma S/N, Santiago Tianguistenco, 52300 Toluca, Méx.",
     "lat": 19.166963,
     "lng": -99.4682327
  },
  {
     "marca": "TOTAL",
     "direccion": "Francisco Javier Mina, Santa Cruz Azcapotzaltongo, Delegación Santa Cruz Atzcapotzaltongo, 50030 Calixtlahuaca, Méx.",
     "lat": 19.2950777,
     "lng": -99.6783257
  },
  {
     "marca": "TOTAL",
     "direccion": "Km 1 Libramiento Norte, 51500 Méx.",
     "lat": 18.6854831,
     "lng": -100.1834128
  },
  {
     "marca": "TOTAL",
     "direccion": "Azcapotzaltongo, Av. Isidro Fabela, Santa Cruz, 50030 Calixtlahuaca, Méx.",
     "lat": 19.3377194,
     "lng": -99.6717409
  },
  {
     "marca": "TOTAL",
     "direccion": "México 15, Morelia Km 105, 50960 Villa Victoria, Méx.",
     "lat": 19.4133739,
     "lng": -99.9163951
  },
  {
     "marca": "TOTAL",
     "direccion": "Carretera Federal, El durazno, Colorines, 51230 Valle de Bravo, Méx.",
     "lat": 19.1888758,
     "lng": -100.2088263
  },
  {
     "marca": "TOTAL",
     "direccion": "82 Av de Las Partidas Lerma de Villada, Isidro Fabela, 52004 Toluca de Lerdo, Méx.",
     "lat": 19.2688471,
     "lng": -99.6104759
  },
  {
     "marca": "TOTAL",
     "direccion": "De Madero 64, 14 de Marzo, 52400 Tenancingo de Degollado, Méx.",
     "lat": 18.9615262,
     "lng": -99.5771189
  },
  {
     "marca": "TOTAL",
     "direccion": "Tepotzotlán-Coyotepec, Cedros, 54605 Tepotzotlán, Méx.",
     "lat": 19.7120285,
     "lng": -99.229091
  },
  {
     "marca": "TOTAL",
     "direccion": "PIRAMIDES-TULANCINGO, KM 37.62, México 132D, Pueblo de San Miguel, 55923 Axapusco, Méx.",
     "lat": 19.7616543,
     "lng": -98.7507623
  },
  {
     "marca": "TOTAL",
     "direccion": "Tula-Jorobas, 54680 Santa Teresa, Méx.",
     "lat": 19.8465291,
     "lng": -99.2445396
  },
  {
     "marca": "TOTAL",
     "direccion": "PARROQUIA #1 Fracc. La Parroquia, 37793 San Miguel de Allende, Gto.",
     "lat": 20.8885702,
     "lng": -101.3233661
  },
  {
     "marca": "TOTAL",
     "direccion": "Libramiento a Palomas km 2 No. 511, Colonia Palma Mocha, El Portezuelo Colonia Palma Mocha, El Portezuelo, 42181 Pachuca de Soto, Hgo.",
     "lat": 20.0358684,
     "lng": -100.8622297
  },
  {
     "marca": "TOTAL",
     "direccion": "AUTOPISTA DEL SOL MEXICO - ACAPULCO KM. 101+151, Miguel Hidalgo, 62580 Temixco, Mor.",
     "lat": 18.8348646,
     "lng": -99.2192467
  },
  {
     "marca": "TOTAL",
     "direccion": "Av Revolución 1220, El Sol, 76114 Santiago de Querétaro, Qro.",
     "lat": 20.6230171,
     "lng": -100.4442453
  },
  {
     "marca": "BP",
     "direccion": "Ave. 5 (Eje 3 Ote.)No 287-A, Col. Granjas San Antonio, C.P. 9070, Iztapalapa, Ciudad de México. ",
     "lat": 19.3678947,
     "lng": -99.1105999
  },
  {
     "marca": "BP",
     "direccion": "Calz. Taxqueña No. 1744, Col. Paseos de Taxqueña, C.P. 4250, Coyoacán, Ciudad de México.",
     "lat": 19.3389915,
     "lng": -99.1274316
  },
  {
     "marca": "BP",
     "direccion": "Avenida Cuitláhuac 131, Defensores de la República, C.P. 07780, Gustavo A. Madero, CDMX.",
     "lat": 19.4726284,
     "lng": -99.1428444
  },
  {
     "marca": "BP",
     "direccion": "Av Ribera de San Cosme 114, San Cosme, C.P. 06470, Cuauhtemoc, CDMX.",
     "lat": 19.4426802,
     "lng": -99.1641926
  },
  {
     "marca": "BP",
     "direccion": "Av Canal de Miramontes 2727, Col. Jardines de Coyacan, C.P. 04890, Coyoacán, CDMX.",
     "lat": 19.3169094,
     "lng": -99.1281981
  },
  {
     "marca": "BP",
     "direccion": "Mérida y Álvaro Obregón 110, Roma, C.P. 6700, Cuauhtemoc, CDMX.",
     "lat": 19.420805,
     "lng": -99.1575491
  },
  {
     "marca": "BP",
     "direccion": "Boulevard Puerto Aereo 134, Moctezuma 2Da. Sección, C.P. 15530, CDMX.",
     "lat": 19.4245142,
     "lng": -99.0964301
  },
  {
     "marca": "BP",
     "direccion": "H. Congreso De La Unión 22 Popular Rastro, C.P. 15220, Cuauhtemoc, CDMX.",
     "lat": 19.451205,
     "lng": -99.1157073
  },
  {
     "marca": "BP",
     "direccion": "Calzada De Tlalpan  Y Popocatepetl 1577 Portales, C.P. 03501, Benito Juárez, CDMX.",
     "lat": 19.3607828,
     "lng": -99.145672
  },
  {
     "marca": "BP",
     "direccion": "Egipto 244 Clavería, C.P. 02080, Azcapotzalco, CDMX.",
     "lat": 19.4623662,
     "lng": -99.1801922
  },
  {
     "marca": "BP",
     "direccion": "Félix cuevas 435 Del Valle, C.P. 03100, Benito Juarez, CDMX.",
     "lat": 19.3721199,
     "lng": -99.1751635
  },
  {
     "marca": "BP",
     "direccion": "Cetys y Calle Novena 4170 Fraccionamiento 1 C.P. 21230 Mexicali, Baja California, México. ",
     "lat": 32.6530781,
     "lng": -115.376273
  },
  {
     "marca": "BP",
     "direccion": "Avenida Presidente José López Portillo 410 Nueva Tijuana C.P. 22435 Tijuana, Baja California, México.",
     "lat": 32.543839,
     "lng": -116.930807
  },
  {
     "marca": "BP",
     "direccion": "Carretera Libre Tijuana-Ensenada 501 Independencia C.P. 22705 Playas de Rosarito, Baja California, México.",
     "lat": 32.399893,
     "lng": -117.05262
  },
  {
     "marca": "BP",
     "direccion": "Cam. Vecinal a la Col. Maclovio Herrera, Km.3+200 No. 301 Maclovio Herrera C.P. 21482 Tecate, Baja California, México.",
     "lat": 32.546019,
     "lng": -116.625438
  },
  {
     "marca": "BP",
     "direccion": "Boulevard Costero 2100 Carlos Pacheco Ayuntamiento y/o Fracccionamiento Acapulco C.P. 22890 Ensenada, Baja California, México.",
     "lat": 31.8445763,
     "lng": -116.6126412
  },
  {
     "marca": "BP",
     "direccion": "Calzada Adolfo Lopez Mateos Esquina Calzada 1810 78 Desarrollo Urbano Miguel Hidalgo C.P. 21389 Mexicali, Baja California, México.",
     "lat": 32.6095844,
     "lng": -115.4384706
  },
  {
     "marca": "BP",
     "direccion": "Ocampo 6040 Zona Centro C.P. 22000 Tijuana, Baja California, México.",
     "lat": 32.483474,
     "lng": -117.0219873
  },
  {
     "marca": "BP",
     "direccion": "Avenida De La Amistad 9059 Zona del Río C.P. 22010 Tijuana, Baja California, México.",
     "lat": 32.5387523,
     "lng": -117.0310964
  },
  {
     "marca": "BP",
     "direccion": "Autopista Tijuana-Ensenada 4768 Las Rosas C.P 22801 Ensenada, Baja California, México.",
     "lat": 31.8700792,
     "lng": -116.67788
  },
  {
     "marca": "BP",
     "direccion": "Calzada De Los Insurgentes 750 Del Sol C.P. 21720 Mexicali, Baja California, México.",
     "lat": 32.2887735,
     "lng": -115.0976915
  },
  {
     "marca": "BP",
     "direccion": "Carretera Libre Tijuana-Tecate 30722 Zona Cerril General C.P. 22253 Tijuana, Baja California, México.",
     "lat": 32.4729023,
     "lng": -116.747743
  },
  {
     "marca": "BP",
     "direccion": "Calzada Gral. Lázaro Cardenas 2098 Calles C.P. 21226 Mexicali, Baja California, México.",
     "lat": 32.619635,
     "lng": -115.4037094
  },
  {
     "marca": "BP",
     "direccion": "Boulevard De Las Américas 2560 Buena Vista C.P. 22415 Tijuana, Baja California, México.",
     "lat": 32.5217319,
     "lng": -116.9884367
  },
  {
     "marca": "BP",
     "direccion": "Paseo Morelos 1211 El Descanso C.P. 21478 Tecate, Baja California, México.",
     "lat": 32.5708738,
     "lng": -116.6075937
  },
  {
     "marca": "BP",
     "direccion": "Avenida Dr. Pedro Loyola 487 Carlos Pacheco C.P. 22830 Ensenada, Baja California, México.",
     "lat": 31.8446485,
     "lng": -116.6099744
  },
  {
     "marca": "BP",
     "direccion": "Carretera Transpeninsular Ensenada-La Paz 6531 Chapultepec II Poligono III C.P. 22785 Ensenada, Baja California.",
     "lat": 31.8442883,
     "lng": -116.6146869
  },
  {
     "marca": "BP",
     "direccion": "Calzada Justo Sierra 700 Burócrata C.P. 21020, Mexicali, Baja California, México.",
     "lat": 32.6530547,
     "lng": -115.4550173
  },
  {
     "marca": "BP",
     "direccion": "Av. Juarez 999 Centro C.P. 21400, Tecate, Baja California, México.",
     "lat": 32.5726267,
     "lng": -116.6382677
  },
  {
     "marca": "BP",
     "direccion": "Calzada Cetys 1499 Fraccionamiento Vista Hermosa C.P. 21240, Mexicali, Baja California, México.   ",
     "lat": 32.6591474,
     "lng": -115.4233604
  },
  {
     "marca": "BP",
     "direccion": "Calzada Independencia 1100 Fracc. Montecarlo Residencial 3A Etapa C.P. 21255, Mexicali, Baja California, México. ",
     "lat": 32.6381312,
     "lng": -115.3952124
  },
  {
     "marca": "BP",
     "direccion": "Boulevard Benito Juarez Sur 16804 Fraccionamiento Cantamar C.P. 22710, Playas de Rosarito, Baja California, México.",
     "lat": 32.2271398,
     "lng": -116.9227679
  },
  {
     "marca": "BP",
     "direccion": "Calz. Independencia y Calle Alamo 884 Centro Cívico C.P. 2109, Mexicali, Baja California, México.  ",
     "lat": 32.6379236,
     "lng": -115.4856294
  },
  {
     "marca": "BP",
     "direccion": "Calzada Lázaro Cárdenas 3757, C.P 21395, Mexicali, Baja California, México.  ",
     "lat": 32.6004565,
     "lng": -115.3728728
  },
  {
     "marca": "BP",
     "direccion": "Calzada Manuel Gómez Morín 2198 Granjas Agrícolas C.P 21370, Mexicali, Baja California, México.",
     "lat": 32.6210077,
     "lng": -115.4204616
  },
  {
     "marca": "BP",
     "direccion": "Calzada Lic. Hector Terán Terán 2199 Televisora C.P. 21337, Mexicali, Baja California, México.",
     "lat": 32.6136905,
     "lng": -115.5153264
  },
  {
     "marca": "BP",
     "direccion": "Carr. Mexicali - San Luis Rio Colorado 140 Zona Vía Ferrocarril Intercalifornia C.P. 21397, Mexicali, Baja California, México.",
     "lat": 32.5696223,
     "lng": -115.341638
  },
  {
     "marca": "BP",
     "direccion": "Calzada Rotario Internacional 2998 Diez División Dos C.P. 21397, Mexicali, Baja California, México.",
     "lat": 32.6138305,
     "lng": -115.3841472
  },
  {
     "marca": "BP",
     "direccion": "Calzada De Los Presidentes 952-A Río Nuevo, C.P. 21120, Mexicali, Baja California, México.",
     "lat": 32.6503613,
     "lng": -115.4879351
  },
  {
     "marca": "BP",
     "direccion": "Calzada De Las Américas 180 Cuauhtémoc Sur C.P. 21200, Mexicali, Baja California, México.",
     "lat": 32.6625344,
     "lng": -115.4504646
  },
  {
     "marca": "BP",
     "direccion": "Blvd. López Mateos 1599 Zacatecas, C.P. 21090, Mexicali, Baja California, México.",
     "lat": 32.630502,
     "lng": -115.4630177
  },
  {
     "marca": "BP",
     "direccion": "Calzada De Las Haciendas 1363 Ahumada C.P. 21188, Mexicali, Baja California, México.",
     "lat": 32.5957876,
     "lng": -115.4953161
  },
  {
     "marca": "BP",
     "direccion": "Calzada Anáhuac 899 Anáhuac Indeco C.P. 21060 Mexicali, Baja California, México.",
     "lat": 32.6320117,
     "lng": -115.4779363
  },
  {
     "marca": "BP",
     "direccion": "Camino Leona Vicario 22578 Salvatierra y Romita Pipila C.P. 22206 Tijuana, Baja California, México.",
     "lat": 32.502151,
     "lng": -116.8823987
  },
  {
     "marca": "BP",
     "direccion": "Madero Calle 9 y 10 y Gasolinera Esq 10ma 1790 Zona Centro Tijuana C.P. 22000 Tijuana, Baja California, México.",
     "lat": 32.5258697,
     "lng": -117.0361814
  },
  {
     "marca": "BP",
     "direccion": "Insurgentes Blvd 18120 Insurgentes Guaycura C.P. 22216 Tijuana, Baja California, México.",
     "lat": 32.4905951,
     "lng": -116.9296317
  },
  {
     "marca": "BP",
     "direccion": "Boulevard Plinta 397 Valle Dorado, C.P. 22890, Ensenada, Baja California, México.",
     "lat": 31.8374846,
     "lng": -116.6038236
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Florido 4399 Buenos Aires, C.P. 22500, Tijuana, Baja California, México.",
     "lat": 32.5139498,
     "lng": -116.8913926
  },
  {
     "marca": "BP",
     "direccion": "Carretera Libre Tijuana – Ensenada 7152, De los maestros, C.P.22640, Tijuana, Baja California, México.",
     "lat": 32.4817146,
     "lng": -117.0115072
  },
  {
     "marca": "BP",
     "direccion": "Libramiento Playas De Tijuana 2916, El Mirador, C.P.22204, Tijuana, Baja California, México.",
     "lat": 32.536197,
     "lng": -117.0961628
  },
  {
     "marca": "BP",
     "direccion": "Calzada Tecnológico 14501, Otay universidad, C.P. 22150, Tijuana, Baja California, México.",
     "lat": 32.5313932,
     "lng": -116.9609313
  },
  {
     "marca": "BP",
     "direccion": "Carretera Tijuana- Tecate 21121, Valle Redondo, C.P. 22250, Tijuana, Baja California, México.",
     "lat": 32.4464039,
     "lng": -116.877249
  },
  {
     "marca": "BP",
     "direccion": "Perif. Blvd. Manuel Ávila Camacho 1822, Cd. Satélite, Naucalpan de Juárez, Estado de México.",
     "lat": 19.499841,
     "lng": -99.237518
  },
  {
     "marca": "BP",
     "direccion": "Hidalgo 68. Colonia Centro, Tlalnepantla, Estado de Mexico 54000",
     "lat": 19.5424214,
     "lng": -99.1947057
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Adolfo Lopez Mateos #101, Col. El Mosco, C.P. 52975, Atizapan de Zaragoza, Estado de México.",
     "lat": 19.5449636,
     "lng": -99.2360471
  },
  {
     "marca": "BP",
     "direccion": "Carret. Atizapan-Villa Nicolas Romero Km 9.5, C.P. 76030, Atizapán de Zaragoza, Estado de México. ",
     "lat": 19.5757996,
     "lng": -99.258571
  },
  {
     "marca": "BP",
     "direccion": "Sor Juana Ines de la Cruz 320, Centro Industrial, C.P. 54040, Tlanepantla de Baz, Estado de México.",
     "lat": 19.5400172,
     "lng": -99.2103979
  },
  {
     "marca": "BP",
     "direccion": "Kennedy 21-23, Vicente Guerrero C.P. 54426, Nicolas Romero, Estado de México.",
     "lat": 19.6127958,
     "lng": -99.3194013
  },
  {
     "marca": "BP",
     "direccion": "Circuito Exterior Metropolitano 1400 C.P. 52148, Agrícola Lazaro Cardenas, Estado de México.",
     "lat": 19.270483,
     "lng": -99.5564069
  },
  {
     "marca": "BP",
     "direccion": "Carret. Mexico-Toluca Km. 52.125, C.P. 52140, San Mateo Atenco, Estado de México.",
     "lat": 19.2699042,
     "lng": -99.7396195
  },
  {
     "marca": "BP",
     "direccion": "Calzada la Huerta 206, Transfiguración, C.P. 51357, Zinacantepec, Estado de México.",
     "lat": 19.2699042,
     "lng": -99.7396195
  },
  {
     "marca": "BP",
     "direccion": "Calle de James Watt, Esq.Carr. Mexico, Cuautitlán, C.P. 54800, Cuautitlán, Estado de México.",
     "lat": 19.659342,
     "lng": -99.19759
  },
  {
     "marca": "BP",
     "direccion": "Independencia 405, Capultitlan, C.P. 50260, Toluca, Estado de México.",
     "lat": 19.2443823,
     "lng": -99.6606356
  },
  {
     "marca": "BP",
     "direccion": "Av Lomas Verdes 62, Boulevares, C.P. 53140, Naucalpan de Juárez, Estado de México.",
     "lat": 19.4966391,
     "lng": -99.2496423
  },
  {
     "marca": "BP",
     "direccion": "Carretera Toluca - Temascaltepec Km 13.5, C.P. 51351, Zinacantepec, Estado de México.",
     "lat": 19.2428874,
     "lng": -99.7678354
  },
  {
     "marca": "BP",
     "direccion": "Av Las Torres 1200, La Deportiva, C.P. 51350, Zinacantepec, Estado de México.",
     "lat": 19.2830693,
     "lng": -99.7003919
  },
  {
     "marca": "BP",
     "direccion": "Carretera Villa Victoria - El Oro Km 5, C.P. 50960, Villa Victoria, Estado de México.",
     "lat": 19.452677,
     "lng": -100.042613
  },
  {
     "marca": "BP",
     "direccion": "Av. Lago de Guadalupe Km. 5.7, Col. Ejidos de San Miguel Chalma, C.P. 52928, Atizapán de Zaragoza, Estado de México.",
     "lat": 19.5796683,
     "lng": -99.2211719
  },
  {
     "marca": "BP",
     "direccion": "Jose Maria Luis Mora (Calzada Pacifico) 1312, Col. San Antonio Buenavista, C.P. 50266, Toluca, Estado de México.",
     "lat": 19.2567698,
     "lng": -99.7083318
  },
  {
     "marca": "BP",
     "direccion": "Prolongacion Av. Jose Lopez Portillo S/N, Col. Santa Cruz Venta de Carpio, C.P. 55065, Ecatepec de Morelos, Estado de México. ",
     "lat": 19.588156,
     "lng": -99.0066383
  },
  {
     "marca": "BP",
     "direccion": "Avenida 16 de Septiembre S/N, Col. Santa Maria Huecatitla, Cuautitlán, Estado  de México C.P.54831.",
     "lat": 19.723376,
     "lng": -99.171866
  },
  {
     "marca": "BP",
     "direccion": "Avenida 16 de Septiembre, Cuautitlán, Estado  de México C.P. 54805.",
     "lat": 19.658896,
     "lng": -99.182831
  },
  {
     "marca": "BP",
     "direccion": "Villa Del Carbon y Circunvalacion No. 2a, Col. San Jose Huilango, Col. San Jose Huilango, Cuautitlán, Estado de México. C.P. 54710.",
     "lat": 19.6733172,
     "lng": -99.2340248
  },
  {
     "marca": "BP",
     "direccion": "Carretera Zumpango-Cuautitlan No. 1200, Col. San Pedro de la Laguna, Col. San Pedro de la Laguna, Zumpango C.P.55609, Estado de México.",
     "lat": 19.76724,
     "lng": -99.123266
  },
  {
     "marca": "BP",
     "direccion": "Av. Lago de Guadalupe Mz 128 Lote 25, Col. San Miguel Xochimanga, Atizapán de Zaragoza, C.P. 52927, Estado de México.",
     "lat": 19.5798509,
     "lng": -99.2232844
  },
  {
     "marca": "BP",
     "direccion": "Avenida Vicente Guerrero 417 Federal C.P. 50120 Toluca, Estado De México, México.",
     "lat": 19.2791008,
     "lng": -99.6706165
  },
  {
     "marca": "BP",
     "direccion": "Boulevard Jorobas-Huehuetoca S/N Barrio De Jorobas C.P. 54680 Huehuetoca, Estado de México, Mexico.",
     "lat": 19.8316358,
     "lng": -99.2129912
  },
  {
     "marca": "BP",
     "direccion": "Carretera Jilotepec-Huichapan Km. 26 S/N Tecolapan, Estado de México, México.",
     "lat": 20.083119,
     "lng": -99.632283
  },
  {
     "marca": "BP",
     "direccion": "Autopista Mexico-Queretaro Km 45.8 S/N Sin Colonia C.P. 54600 Tepotzotlan, Estado de México, México.",
     "lat": 19.7405995,
     "lng": -99.2120942
  },
  {
     "marca": "BP",
     "direccion": "Autopista Queretaro-Mexico Km 45.8 S/N C.P. 54600 Teoloyucan, Estado de México, México.",
     "lat": 19.74022,
     "lng": -99.21119
  },
  {
     "marca": "BP",
     "direccion": "Distribuidor Vial Autopista México-Querétaro y Avenida Huehuetoca Fraccionamiento Sur Valle de la Hacienda C.P 54701 Cuautitlan Izcalli, Estado de México, México.",
     "lat": 19.6848586,
     "lng": -99.2203831
  },
  {
     "marca": "BP",
     "direccion": "Camino Real A San Mateo 172 San Mateo Nopala C.P. 53217 Naucalpan De Juarez, Estado de México, México.",
     "lat": 19.5026144,
     "lng": -99.2701833
  },
  {
     "marca": "BP",
     "direccion": "Av. Tecnológico Norte 1357 San Salvador Tizatlalli C.P. 52172, Metepec, Estado de México, México.",
     "lat": 19.2709618,
     "lng": -99.5782266
  },
  {
     "marca": "BP",
     "direccion": "Carretera a Qro. Matamoros S/N Tepetlixpan C.P. 54763 Cuautitlán Izcalli Estado de México, México.",
     "lat": 19.6107318,
     "lng": -99.1928605
  },
  {
     "marca": "BP",
     "direccion": "Carretera Toluca - Temascaltepec km 13.5, Tejalpa, C.P.C 51351, Zinacantepec, Estado de México, México.",
     "lat": 19.2428874,
     "lng": -99.7678354
  },
  {
     "marca": "BP",
     "direccion": "Carretera México – Toluca km 52 125 San Mateo Atenco, C.P. 52104, San Mateo Atenco, Estado de México, México.",
     "lat": 19.2850666,
     "lng": -99.5299797
  },
  {
     "marca": "BP",
     "direccion": "Ejido de Cocotitlan Lt.1 De La Subdivisión Parcela P4/8 136 San Gregorio Cuautzingo, C.P.56640, Chalco, Estado de México, México.",
     "lat": 19.2435473,
     "lng": -98.8623723
  },
  {
     "marca": "BP",
     "direccion": "Carretera Federal Mexico-Pachuca Km. 39.2, Centro, C.P. 55740, Tecamac, Estado de México, México.",
     "lat": 19.699465,
     "lng": -98.9734826
  },
  {
     "marca": "BP",
     "direccion": "Av. Morelos 32 Xocoyahualco, C.P. 54080, Tlalnepantla De Baz, Estado de México, México.",
     "lat": 19.5101059,
     "lng": -99.220741
  },
  {
     "marca": "BP",
     "direccion": "Boulevard Tultitlán 179, El Cueyamil, C.P. 54900, Tultitlan Estado de México, México.",
     "lat": 19.6339311,
     "lng": -99.1676871
  },
  {
     "marca": "BP",
     "direccion": "sla, Esq. Av. Canal De Castera Lte. 1 Maz. 3, Alborada jaltengo, C.P. 55780, Jaltenco, Estado de México, México.",
     "lat": 19.6587797,
     "lng": -99.0713528
  },
  {
     "marca": "BP",
     "direccion": "Via Morelos 140, Altavilla, C.P. 55390, Ecatepec De Morelos, Estado de México, México.",
     "lat": 19.5113019,
     "lng": -99.0913152
  },
  {
     "marca": "BP",
     "direccion": "Alfredo Zarate Albarran 221, Granjas valle de Guadalupe, C.P. 55270, Ecatepec De Morelos, Estado de México, México.",
     "lat": 19.5035994,
     "lng": -99.0520576
  },
  {
     "marca": "BP",
     "direccion": "Boulevard Himno Naciona Esq. Techachalco, Paraje Cantera, C.P. 54880, Melchor Ocampo, Estado de México, México.",
     "lat": 19.7098876,
     "lng": -99.1443928
  },
  {
     "marca": "BP",
     "direccion": "Avenida Santa Cecilia 290, Santa Cecilia, C.P. 54130, Tlalnepantla De Baz, Estado de México, México.",
     "lat": 19.5491058,
     "lng": -99.1740604
  },
  {
     "marca": "BP",
     "direccion": "Av. Adolfo Lopez Mateos Antes R-1, El Segor, C.P. 55127, Ecatepec De Morelos, Estado de México, México.",
     "lat": 19.5406579,
     "lng": -99.0422088
  },
  {
     "marca": "BP",
     "direccion": "Carretera Mexico-Pachuca Km.29, Santo Tomas Chiconautla, C.P. 55066, Ecatepec De Morelos, Estado de México, México.",
     "lat": 19.6365042,
     "lng": -99.0046167
  },
  {
     "marca": "BP",
     "direccion": "Carretera Mexico-Piramides Km 1.5, Santa Cruz Venta De Carpio, C.P. 55060, Ecatepec De Morelos, Estado de México, México.",
     "lat": 19.6207929,
     "lng": -99.0003482
  },
  {
     "marca": "BP",
     "direccion": "Boulevard De La Conspiración 63 Zona Centro San Miguel de Allende  C.P. 37746, San Miguel de Allende, Guanajuato, México.",
     "lat": 20.9050387,
     "lng": -100.726337
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Juan Alonso De Torres 528 Cruz de las Hilamas, C.P. 37407, León Guanajuato, México.",
     "lat": 21.1325884,
     "lng": -101.7187638
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Francisco Villa 2411, Ángeles Y Medina C.P. 37235, León Guanajuato, México.",
     "lat": 21.1382947,
     "lng": -101.643703
  },
  {
     "marca": "BP",
     "direccion": "Blvd. González Bocanegra 1901, El Tlacuache C.P 37510, León, Guanajuato, México.",
     "lat": 21.1040765,
     "lng": -101.6620199
  },
  {
     "marca": "BP",
     "direccion": "Cerro Gordo 604 Villas del Campestre C.P. 37129 Guanajuato, Guanajuato, México.",
     "lat": 21.1593422,
     "lng": -101.7094322
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Vicente Valtierra 2638 Nueva Calendaria, C.P. 37260, León, Guanajuato, México.",
     "lat": 21.1299546,
     "lng": -101.6578486
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Las Torres 102 San Jerónimo, C.P. 37148, León, Guanajuato, México.",
     "lat": 21.150502,
     "lng": -101.6720651
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Francisco Villa Norte 4301 León, C.P. 37235, León, Guanajuato, México.",
     "lat": 21.14429,
     "lng": -101.6385631
  },
  {
     "marca": "BP",
     "direccion": "Autopista México-Pachuca Km. 53 16 C.P. 43810, Tizayuca, Hidalgo, México.",
     "lat": 19.8485145,
     "lng": -98.9516507
  },
  {
     "marca": "BP",
     "direccion": "Carretera México-Pachuca Km 46 C.P 43804, Tizayuca, Hidalgo, México.",
     "lat": 19.879804,
     "lng": -98.9494833
  },
  {
     "marca": "BP",
     "direccion": "Carretera Atitalaquia-Refineria S/N Bojay C.P. 42970, Atitalaquia, Hidalgo, México.",
     "lat": 20.0495532,
     "lng": -99.2495506
  },
  {
     "marca": "BP",
     "direccion": "Carretera Mexico-Laredo Km. 118, La Estación C.P. 42500 Actopan, Hidalgo, México.",
     "lat": 20.2611101,
     "lng": -98.9452241
  },
  {
     "marca": "BP",
     "direccion": "Carretera Libramiento Huichapan Km. 45.8 Abundio Martínez C.P. 42400, Huichapan, Hidalgo, México.",
     "lat": 20.3743034,
     "lng": -99.6644083
  },
  {
     "marca": "BP",
     "direccion": "Carretera México-Laredo Km 159 Barrio de Jesús C.P. 42300, Ixmiquilpan, Hidalgo, México.",
     "lat": 20.4776481,
     "lng": -99.2235376
  },
  {
     "marca": "BP",
     "direccion": "Carr. Tepojaco-Temascalapa 79 Tepojaco, C.P. 43810 Tizayuca, Hidalgo, México.",
     "lat": 19.834179,
     "lng": -98.944148
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Luis Donaldo Colosio 1100 Colosio I C.P. 42080, Pachuca, Hidalgo, México.",
     "lat": 20.1173824,
     "lng": -98.7833715
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Nuevo Hidalgo M-Comercial 204 Fracc. Puerta De Hierro C.P 42080, Pachuca, Hidalgo, México.",
     "lat": 20.0928291,
     "lng": -98.7644102
  },
  {
     "marca": "BP",
     "direccion": "Boulevard El Minero 1802 Villa Aquiles Serdán C.P. 42039, Pachuca, Hidalgo, México.",
     "lat": 20.1244854,
     "lng": -98.7784736
  },
  {
     "marca": "BP",
     "direccion": "Av. Dr. R. Michel 3029, Col. Alamo Oriente, C.P. 45560, San Pedro Tlaquepaque, Jalisco.",
     "lat": 20.626876,
     "lng": -103.323821
  },
  {
     "marca": "BP",
     "direccion": "Calz. Independencia Norte 2236, Col. Paseo Bohemio, C.P. 44320, Guadalajara, Jalisco.",
     "lat": 20.7074239,
     "lng": -103.3240443
  },
  {
     "marca": "BP",
     "direccion": "Av. República 2082, Col. Blanco y Cuellar, C.P. 44730, Guadalajara, Jalisco.",
     "lat": 20.6716821,
     "lng": -103.3074984
  },
  {
     "marca": "BP",
     "direccion": "Anillo Periferico 11050 Fracc. El Colli, C.P. 45070, Zapopan, Jalisco.",
     "lat": 20.6481305,
     "lng": -103.4447627
  },
  {
     "marca": "BP",
     "direccion": "Av Patria 1201 Lomas del Valle, C.P. 45110, Zapopan, Jalisco.",
     "lat": 20.6915981,
     "lng": -103.4177867
  },
  {
     "marca": "BP",
     "direccion": "Periferico Sur 6350 Toluquilla, C.P. 45610, Tlaquepaque, Jalisco.",
     "lat": 20.578438,
     "lng": -103.366684
  },
  {
     "marca": "BP",
     "direccion": "Av Federalismo 449 Centro, C.P. 44100, Guadalajara, Jalisco.",
     "lat": 19.4636583,
     "lng": -99.1179467
  },
  {
     "marca": "BP",
     "direccion": "Av Revolucion 1787 La Loma, C.P. 44420, Guadalajara, Jalisco.",
     "lat": 20.6565764,
     "lng": -103.3208959
  },
  {
     "marca": "BP",
     "direccion": "Carr San Miguel Cuyutlan N, Tlajomulco, C.P. 45640, Tlajomulco, Jalisco.",
     "lat": 20.4614083,
     "lng": -103.447391
  },
  {
     "marca": "BP",
     "direccion": "Av. Manuel J. Clouthier 325, Lomas del seminario, C.P. 45130, Zapopan, Jalisco.",
     "lat": 20.6689482,
     "lng": -103.4187231
  },
  {
     "marca": "BP",
     "direccion": "Carrt. Guadalajara-Morelia 1000, C.P. 45800, Jocotepec, Jalisco.",
     "lat": 20.2770699,
     "lng": -103.4466057
  },
  {
     "marca": "BP",
     "direccion": "Juan De Dios Robledo, 134, El Rosario, C.P. 45404, Tonalá, Jalisco.",
     "lat": 20.6413753,
     "lng": -103.2615448
  },
  {
     "marca": "BP",
     "direccion": "Carrtera Libre-México-Cuautla Km 62.5 Calle Emiliano Zapata 1 Juan Antonio C.P. 62757 Atlatlahucan, Morelos, México.",
     "lat": 18.8898285,
     "lng": -98.9155766
  },
  {
     "marca": "BP",
     "direccion": "Carr. Xochimilco-Oaxtepec esq. Juan N. Mendez, C.P. 62540, Tlayacapan, Morelos, México.",
     "lat": 18.9414222,
     "lng": -98.9773962
  },
  {
     "marca": "BP",
     "direccion": "Av. Rodrigo Gómez 1800 Valle Morelos C.P. 64180, Monterrey, Nuevo León, México.",
     "lat": 25.7212791,
     "lng": -100.3449993
  },
  {
     "marca": "BP",
     "direccion": "Avenida Garza Sada 503 Nuevo Repueblo, C.P. 64720 Monterrey, Nuevo León, México.",
     "lat": 25.6613496,
     "lng": -100.3005612
  },
  {
     "marca": "BP",
     "direccion": "Av. Eugenio Garza Sada 1301, Caracol, 64810 Monterrey, N.L.",
     "lat": 25.6075934,
     "lng": -100.2720406
  },
  {
     "marca": "BP",
     "direccion": "Eugenio Garza Sada 1301, Caracol, C.P. 64810, Monterrey, Nuevo León, México.",
     "lat": 25.6646575,
     "lng": -100.2991779
  },
  {
     "marca": "BP",
     "direccion": "Av. Diego Díaz De Berlanga 615, Industrial Nogalar, C.P. 66484, San Nicolás, Nuevo León, México.",
     "lat": 25.7212557,
     "lng": -100.2829175
  },
  {
     "marca": "BP",
     "direccion": "Carretera Saltillo Matehuala km 126+300 Ote. Ejido San Roberto, C.P. 67855, Galeana, Nuevo León, México.",
     "lat": 24.6499931,
     "lng": -100.2959619
  },
  {
     "marca": "BP",
     "direccion": "Ant. Camino Apodaca-Mezquital 200, Centro Santa Rosa, C.P.66600, Monterrey,  Nuevo León, México.",
     "lat": 25.774648,
     "lng": -100.2196501
  },
  {
     "marca": "BP",
     "direccion": "Av. Isidoro Sepulveda 500, Parque Industrial J.M.   C.P.66477, Monterrey, Nuevo León, México.",
     "lat": 25.7426282,
     "lng": -100.219984
  },
  {
     "marca": "BP",
     "direccion": "Av. Colón 2435, C.P. 64000, Monterrey, Nuevo León, México.",
     "lat": 25.6875064,
     "lng": -100.3360446
  },
  {
     "marca": "BP",
     "direccion": "Carretera Monterrey Saltillo km 339, C.P. 66023, García, Nuevo León, México.",
     "lat": 25.7793525,
     "lng": -100.4559393
  },
  {
     "marca": "BP",
     "direccion": "Av. Prolongacion Alfonso Reyes S/N, Centro Comercial Sendero, C.P. 64345, Monterrey, Nuevo León, México.",
     "lat": 25.7691346,
     "lng": -100.3067679
  },
  {
     "marca": "BP",
     "direccion": "Diagonal Defensores de la República 511, Col. Santa Maria, C.P. 72080, Puebla.",
     "lat": 19.0634558,
     "lng": -98.1978108
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Norte Héroes Del 5 de Mayo No. 908, Col. Guadalupe Victoria, C.P.72230, Puebla.",
     "lat": 19.067626,
     "lng": -98.192156
  },
  {
     "marca": "BP",
     "direccion": "Ignacio Zaragoza No.298, Col. Corredor Industrial la Cienega, C.P. 72210, Puebla.",
     "lat": 19.0684506,
     "lng": -98.1757192
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Norte Esq. Heroes Del 5 de Mayo # 1870, Col. Las Hadas Mundial, C.P. 72070, Puebla.",
     "lat": 19.067626,
     "lng": -98.192156
  },
  {
     "marca": "BP",
     "direccion": "Av. Diagonal Defensores de la Republica No.1050, Col. Villa Verde, C.P. 72303, Puebla.",
     "lat": 19.059937,
     "lng": -98.160664
  },
  {
     "marca": "BP",
     "direccion": "Av.Manuel Espinosa Yglesias No.3101, Col. Santa Cruz Los Angeles, C.P. 72400, Puebla.",
     "lat": 19.0443407,
     "lng": -98.2286567
  },
  {
     "marca": "BP",
     "direccion": "Prolongacion 11 Sur 5324 Molino De Enmedio C.P. 72456 Puebla, México.",
     "lat": 19.0210284,
     "lng": -98.2250183
  },
  {
     "marca": "BP",
     "direccion": "Km. 11.5 Carretera Puebla-Tlaxcala 222, 5 de mayo, C.P. 72270 Cuautlancingo, Puebla. México.",
     "lat": 19.135146,
     "lng": -98.222592
  },
  {
     "marca": "BP",
     "direccion": "Km. 1 Carr. A Chiautla-Puebla S/N C.P. 74730 Chiautla, Puebla, México.",
     "lat": 18.3152232,
     "lng": -98.6189644
  },
  {
     "marca": "BP",
     "direccion": "Carretera Federal México-Puebla Km 92 S/N Los Ángeles C.P. 74080 San Martin Texmelucan, Puebla, México.",
     "lat": 19.2695314,
     "lng": -98.4336818
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Xocanatepec 135 Bosques de San Sebastián C.P. 72000, Puebla, México.",
     "lat": 19.0574423,
     "lng": -98.1348673
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Atlixcayotl 4504 Tonantzintla C.P. 72810, San Andrés Cholula, Puebla, México.",
     "lat": 19.0157976,
     "lng": -98.2570407
  },
  {
     "marca": "BP",
     "direccion": "Calzada Zavaleta 5507 Concepcion La Cruz C.P. 72170, San Andrés Cholula, Puebla, México.",
     "lat": 19.03837,
     "lng": -98.2483233
  },
  {
     "marca": "BP",
     "direccion": "Boulevard Atlixco 2808, C.P. 74367, Atlixco, Puebla, México.",
     "lat": 18.9360491,
     "lng": -98.4053527
  },
  {
     "marca": "BP",
     "direccion": "Carretera Federal Puebla-Tehuacan 1590, Col. Ex – Hcienda las Ánimas, Puebla, Puebla, México.",
     "lat": 19.0448774,
     "lng": -98.0706853
  },
  {
     "marca": "BP",
     "direccion": "Prolongación Reforma 4105, Col. La Paz “B”, C.P. 72160, Puebla, Puebla, México.",
     "lat": 19.0602155,
     "lng": -98.2294845
  },
  {
     "marca": "BP",
     "direccion": "Carretera Teahuacan – Zicatatepec km. 16. 840, Ajalpan, Puebla, México.",
     "lat": 18.3627709,
     "lng": -97.2760505
  },
  {
     "marca": "BP",
     "direccion": "Autopista México-Córdoba, km 158.4, C.P. 75119, Tepeaca, Puebla, México.",
     "lat": 18.9992973,
     "lng": -97.8828663
  },
  {
     "marca": "BP",
     "direccion": "Carretera Tehuacan-Teotitlan Km 27, Margen Sur, C.P.75960, Zinacatepec, Puebla, México.",
     "lat": 18.3264828,
     "lng": -97.2334624
  },
  {
     "marca": "BP",
     "direccion": "Carretera Tehuacan-Teotitlan Km 15, Progreso, C.P. 75950, Altepexi, Puebla, México.",
     "lat": 18.3755158,
     "lng": -97.294354
  },
  {
     "marca": "BP",
     "direccion": "Calle 31 Poniente 3115 Chula Vista, C.P. 72420, Puebla, Puebla, México.",
     "lat": 19.033405,
     "lng": -98.2096537
  },
  {
     "marca": "BP",
     "direccion": "5 De Febrero Poniente 169 San Felipe Hueyotlipan, C.P. 72030, Puebla, Puebla, México.",
     "lat": 19.0849103,
     "lng": -98.2030325
  },
  {
     "marca": "BP",
     "direccion": "Km. 25 Carr. Tehuacan-Teotitlan, Centro, C.P. 75910, Ajalpan, Puebla, México.",
     "lat": 18.3788709,
     "lng": -97.2685846
  },
  {
     "marca": "BP",
     "direccion": "Km. 125 Carrt. Federal Mexico-Puebla, Santiago Momoxpan, C.P. 72775, San Pedro, Puebla, México.",
     "lat": 19.0768433,
     "lng": -98.2653253
  },
  {
     "marca": "BP",
     "direccion": "Km. 40 Carretera Tehuacan-Teotilan, Donato Bravo, C.P. 75980, Coxcatlán, Puebla, México.",
     "lat": 18.2679686,
     "lng": -97.1612555
  },
  {
     "marca": "BP",
     "direccion": "Km 5 Carretera Federal a Jalapa 140 Loc. San Juan Acozac, C.P. 75119, Los Reyes De Juarez, Puebla, México.",
     "lat": 18.9584553,
     "lng": -97.8319444
  },
  {
     "marca": "BP",
     "direccion": "Circuito Juan Pablo Ii 1802 A, Jardines de San Manuel, C.P. 72570, Puebla, Puebla, México.",
     "lat": 19.0157076,
     "lng": -98.1999728
  },
  {
     "marca": "BP",
     "direccion": "24 Sur 507 Rancho Azcarate, C.P. 72501, Puebla, Puebla, México.",
     "lat": 19.0349623,
     "lng": -98.1878055
  },
  {
     "marca": "BP",
     "direccion": "4 Oriente 2427, Resurgimiento Cd Norte, C.P. 72370, Puebla, Puebla, México.",
     "lat": 19.0924872,
     "lng": -98.2313967
  },
  {
     "marca": "BP",
     "direccion": "Lateral De Autopista Mexico Puebla 6304, Puebla, Puebla, México.",
     "lat": 19.0906254,
     "lng": -98.2214533
  },
  {
     "marca": "BP",
     "direccion": "Avenida 9 Poniente 3507, Barrio jonetlán, C.P. 75848, Tecamachalco, Puebla, México.",
     "lat": 18.8895102,
     "lng": -97.7523503
  },
  {
     "marca": "BP",
     "direccion": "4 Sur Esq. 7 Oriente 505, Centro, C.P. 75200, Tepeaca, Puebla, México.",
     "lat": 18.9605094,
     "lng": -97.9009755
  },
  {
     "marca": "BP",
     "direccion": "Autopista México-Córdoba, KM 158.4, C.P. 75119, Tepeaca, Puebla, México",
     "lat": 18.9992973,
     "lng": -97.8828663
  },
  {
     "marca": "BP",
     "direccion": "Autopista México-Córdoba, KM 158.2, C.P. 75119, Tepeaca, Puebla, México",
     "lat": 19.0004214,
     "lng": -97.883076
  },
  {
     "marca": "BP",
     "direccion": "Boulevard hermanos Serdan No. 800, El riego sur, C.P 72130, Puebla, Puebla, México",
     "lat": 19.0924872,
     "lng": -98.2313967
  },
  {
     "marca": "BP",
     "direccion": "Paseo De La República 13001 Jurica C.P 76061 Querétaro, Querétaro, México.",
     "lat": 20.6832624,
     "lng": -100.4378014
  },
  {
     "marca": "BP",
     "direccion": "Carretera a Chimequillas 8021A Chichimequillas C.P 76061 Querétaro, México.",
     "lat": 20.6684607,
     "lng": -100.3647668
  },
  {
     "marca": "BP",
     "direccion": "Carretera Libramiento Sur Poniente Km 8+620 S/N El Pueblito C.P. 76906 Corregidora, Quéretaro. México.",
     "lat": 20.525429,
     "lng": -100.4368487
  },
  {
     "marca": "BP",
     "direccion": "Autopista México-Querétaro Km 1699+860 S/N Ex Hacienda de la Noria C.P 76061 El Marques, Querétaro, México.",
     "lat": 20.5700538,
     "lng": -100.2975413
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Peña Flor Fracción F2A-151, Col. Desarrollo Ciudad Del Sol, C.P. 76229, San Juan Del Río, Querétaro, México.",
     "lat": 20.3903283,
     "lng": -99.9867282
  },
  {
     "marca": "BP",
     "direccion": "Autopista México-Querétaro 2050-A, Col. Balaustradas, C.P. 76079, Querétaro, Querétaro, México.",
     "lat": 20.5768837,
     "lng": -100.3865048
  },
  {
     "marca": "BP",
     "direccion": "Av. San Diego 111, Col. Felipe Carrillo Puerto, C.P. 76138, Querétaro, Querétaro, México.",
     "lat": 20.6026631,
     "lng": -100.4239159
  },
  {
     "marca": "BP",
     "direccion": "Paseo Constituyentes, Corregidora, Querétaro, México.",
     "lat": 20.5534193,
     "lng": -100.4243165
  },
  {
     "marca": "BP",
     "direccion": "Av. Obregon Y Calle Cuauhtémoc 100A Oeste Cuauhtémoc C.P. 83400 San Luis Rio Colorado, Sonora, México.",
     "lat": 32.4847465,
     "lng": -114.7851534
  },
  {
     "marca": "BP",
     "direccion": "Av. Nuevo León A y 42 4200 Colonia México C.P. 83498 San Luis Río Colorado, Sonora, México.",
     "lat": 32.433616,
     "lng": -114.7442947
  },
  {
     "marca": "BP",
     "direccion": "Av. Dalias A y Calle 26 2508 Mezquite C.P. 83488, San Luis Río Colorado, Sonora, México.",
     "lat": 32.4222687,
     "lng": -114.7730874
  },
  {
     "marca": "BP",
     "direccion": "San Luis Río Colorado Obregón y Calle 16 S/N, Ganadera, C.P. 83400 San Luis Río Colorado, Sonora México.",
     "lat": 32.4779772,
     "lng": -114.764508
  },
  {
     "marca": "BP",
     "direccion": "Avenida Tlaxcala Y Calle 34 3308 Campestre C.P. 83499 San Luis Río Colorado, Sonora, México.",
     "lat": 32.4465142,
     "lng": -114.750827
  },
  {
     "marca": "BP",
     "direccion": "Av. Nuevo Leon Y Calle 9 810 Del Bosque C.P. 83480, San Luis Río Colorado, Sonora, México.",
     "lat": 32.4466466,
     "lng": -114.7881294
  },
  {
     "marca": "BP",
     "direccion": "Av. Libertad 4200, 10 de Abril C.P. 83459, San Luis Río Colorado, Sonora, México.",
     "lat": 32.454589,
     "lng": -114.7354885
  },
  {
     "marca": "BP",
     "direccion": "Calzada Constitución 418 La Mesa C.P. 83420 San Luis Río Colorado, Sonora, México.",
     "lat": 32.4688458,
     "lng": -114.797817
  },
  {
     "marca": "BP",
     "direccion": "Alejandro Guillot 800 Lomas De Santa Anita Huiloac C.P. 90407 Apizaco, Tlaxcala, México.",
     "lat": 19.4034542,
     "lng": -98.1461335
  },
  {
     "marca": "BP",
     "direccion": "Av.Ayuntamiento 1 Barrio San Bartolome C.P. 90970 San Pablo Del Monte, Tlaxcala, México.",
     "lat": 19.1189868,
     "lng": -98.1717107
  },
  {
     "marca": "BP",
     "direccion": "Carretera Xaloztoc-Terrante Km. 9+500 S/N San Cosme Xaloztoc C.P 90461 Xaloztoc, Tlaxcala, México.",
     "lat": 19.433452,
     "lng": -98.0145175
  },
  {
     "marca": "BP",
     "direccion": "Av. Revolución 39, San Buena Ventura Atempan, C.P. 90101, Tlaxcala, Tlaxcala, México.",
     "lat": 19.3263476,
     "lng": -98.2198699
  },
  {
     "marca": "BP",
     "direccion": "Blvd. Santa Ana-Tlaxcala 164, Industrial, C.P. 90802, Chiautempan, Tlaxcala, México.",
     "lat": 19.3190106,
     "lng": -98.2080704
  },
  {
     "marca": "BP",
     "direccion": "16 De Septiembre  y H. Colegio Militar 1010, Centro, C.P. 90300, Apizaco, Tlaxcala, México.",
     "lat": 19.4139469,
     "lng": -98.137221
  },
  {
     "marca": "BP",
     "direccion": "Carretera Apizaco-Tlaxco Km. 1+130 600, Granjas De Guadalupe, C.P. 90320, Apizaco, Tlaxcala, México.",
     "lat": 19.4240088,
     "lng": -98.1404256
  },
  {
     "marca": "BP",
     "direccion": "Avenida San Martín no. 62 San Mateo Ayecac Tepetitla de Lardizabal, C.P. 90700,  San Mateo Ayecac, Tlaxcala, México.",
     "lat": 19.2810879,
     "lng": -98.395587
  },
  {
     "marca": "BP",
     "direccion": "Carretera Federal San Martín Texmelucan - Tlaxcala Km. 4,798 Col. Loma Bonita, C.P. 90700, Villa Alta, Tlaxcala, México.",
     "lat": 19.2988112,
     "lng": -98.4015524
  },
  {
     "marca": "BP",
     "direccion": "Carretera Tehuacan - Teotitlan Km. 60.3, C.P. 68540, Teotitlán de Flores Magón, Oaxaca, México.",
     "lat": 18.1471025,
     "lng": -97.0843869
  },
  {
     "marca": "BP",
     "direccion": "Km 15 Carrt. Internacional Oaxaca-Mexico, Sin Colonia, C.P. 68200, Etla, Oaxaca, México.",
     "lat": 17.2049452,
     "lng": -96.7962308
  }
];

$(function () {
  // Petición que obtiene json de BD y 
  $.ajax({
    type: "GET",
    url: main_url,
    dataType: "JSON",
    success: function (response) {

      hg_gas = response;
      hg_gas.sort((a, b) => parseFloat(a.lat) - parseFloat(b.lat));
      gasolineras.sort((a, b) => parseFloat(a.lat) - parseFloat(b.lat));
      matchDone();
    }
  }); 
});

function matchDone() {
  console.log(gasolineras.length + " " + hg_gas.length);
    for (let i = 0; i < hg_gas.length; i++) {
      for (let j = 0; j < gasolineras.length; j++) {     
        if (compare(gasolineras[j], hg_gas[i])) {
          hg_gas[i].marca = gasolineras[j].marca;
          hg_gas[i].url = null;
          hg_gas[i].calificacion = null;
          new_gas.push(JSON.stringify(hg_gas[i]));
          mSplice(i,j);
        }
      }
    }
  
  console.log(gasolineras.length + " " + hg_gas.length);
  
  $("#area").val(new_gas.toString());  
}

function compare(element1, main_element) {
    if (estaCerca(element1.lat, element1.lng, main_element.lat, main_element.lng, 800)) {  
      if (compDireccion(main_element.direccion, element1.direccion)) {
        return true;
      }
    }
  
  return false;
}
// Evalúa si la gasolinera está en el área
function estaCerca(gLat, gLng, lat, lng, distance) { 
  let distancia = calcularDistancia(lat, lng, gLat, gLng);

  if (((Math.trunc(gLat * 100) / 100) === (Math.trunc(lat * 100) / 100)) 
  &&  ((Math.trunc(gLng * 100) / 100) === (Math.trunc(lng * 100) / 100))) {
    if ((distancia <= distance)) {
       return true;
    } 
  } 
 
  return false;
}

function calcularDistancia(lat1,lon1,lat2,lon2) {
  rad = function(x) {return x * Math.PI/180;}
  var R = 6378137; //Radio de la tierra en metros
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  
  return parseInt(d); 
}

function compDireccion(main_direccion, direccion) {
  // descompone las palabras de direccion en
  
  let palabras2 = main_direccion.split(" ");
  let palabras1 = direccion.split(" ");
  let cont = 0;
  palabras2.forEach(word1 => {
    palabras1.forEach(word2 => {
      if (word1.toLowerCase() === word2.toLowerCase()) {
        cont += 1;
      }
    });
  });

  if (cont >= 1) {
    return true; 
  }

  return false;
}

function mSplice(hg_index, gas_index) {
  hg_gas.splice(hg_index, 1);
  gasolineras.splice(gas_index, 1);
}