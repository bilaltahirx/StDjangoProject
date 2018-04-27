$(function(){
  var currencies = [
  {
    value: "101 LEONARD STREET",
    data: 1001717503
  },
  {
    value: "1010 PARK AVENUE",
    data: 1014967502
  },
  {
    value: "105 BENNETT AVENUE",
    data: 1021807505
  },
  {
    value: "105 EAST 16 STREET",
    data: 1008727501
  },
  {
    value: "108 EAST 116 STREET",
    data: 1016437501
  },
  {
    value: "11 BEACH STREET",
    data: 1002127505
  },
  {
    value: "11 EAST 68 STREET",
    data: 1013837501
  },
  {
    value: "11 NORTH MOORE STREET",
    data: 1001907509
  },
  {
    value: "110 EAST 116 STREET",
    data: 1016437502
  },
  {
    value: "110 MADISON AVENUE",
    data: 1008597503
  },
  {
    value: "114 FULTON STREET",
    data: 1000780047
  },
  {
    value: "115 DELANCEY STREET",
    data: 1003527501
  },
  {
    value: "126 WEST 16 STREET",
    data: 1007917502
  },
  {
    value: "1286 1 AVENUE",
    data: 1014647503
  },
  {
    value: "133 MULBERRY STREET",
    data: 1002367503
  },
  {
    value: "135 WEST 52 STREET",
    data: 1010057501
  },
  {
    value: "1355 1 AVENUE",
    data: 1014477502
  },
  {
    value: "139 WEST 126 STREET",
    data: 1019117504
  },
  {
    value: "145 CLINTON STREET",
    data: 1003467501
  },
  {
    value: "149 EAST 125 STREET",
    data: 1017747501
  },
  {
    value: "15 RENWICK STREET",
    data: 1005947510
  },
  {
    value: "150 CHARLES STREET",
    data: 1006367503
  },
  {
    value: "151 EAST 78 STREET",
    data: 1014137503
  },
  {
    value: "151 WEST 21 STREET",
    data: 1007977508
  },
  {
    value: "155 WEST 126 STREET",
    data: 1019117502
  },
  {
    value: "159 WEST 126 STREET",
    data: 1019117503
  },
  {
    value: "1668 MADISON AVENUE",
    data: 1016227501
  },
  {
    value: "169 WEST 95 STREET",
    data: 1012267502
  },
  {
    value: "175 DELANCEY STREET",
    data: 1003477501
  },
  {
    value: "180 AVENUE OF THE AMERICAS",
    data: 1005047501
  },
  {
    value: "1810 3 AVENUE",
    data: 1016287503
  },
  {
    value: "182 WEST 82 STREET",
    data: 1012127502
  },
  {
    value: "189 AVENUE C",
    data: 1003947506
  },
  {
    value: "1908 3 AVENUE",
    data: 1016337502
  },
  {
    value: "199 MOTT STREET",
    data: 1004807503
  },
  {
    value: "20 EAST END AVENUE",
    data: 1015777504
  },
  {
    value: "20 WEST 40 STREET",
    data: 1008417501
  },
  {
    value: "200 EAST 62 STREET",
    data: 1014167501
  },
  {
    value: "200 EAST 94 STREET",
    data: 1015397502
  },
  {
    value: "203 EAST 92 STREET",
    data: 1015387501
  },
  {
    value: "21 WEST END AVENUE",
    data: 1011717510
  },
  {
    value: "210 WEST 77 STREET",
    data: 1011687503
  },
  {
    value: "212 5 AVENUE",
    data: 1008277501
  },
  {
    value: "212 WARREN STREET",
    data: 1000167521
  },
  {
    value: "225 EAST 111 STREET",
    data: 1016617503
  },
  {
    value: "23 WEST 116 STREET",
    data: 1016007503
  },
  {
    value: "230 WEST 55 STREET",
    data: 1010267502
  },
  {
    value: "234 EAST 23 STREET",
    data: 1009037504
  },
  {
    value: "235 WEST 75 STREET",
    data: 1011677503
  },
  {
    value: "2360 BROADWAY",
    data: 1012347503
  },
  {
    value: "245 WEST 14 STREET",
    data: 1007647503
  },
  {
    value: "250 EAST HOUSTON STREET",
    data: 1003977503
  },
  {
    value: "250 SOUTH STREET",
    data: 1002487501
  },
  {
    value: "260 WEST 153 STREET",
    data: 1020387501
  },
  {
    value: "261 WEST 25 STREET",
    data: 1007757503
  },
  {
    value: "264 WATER STREET",
    data: 1001067504
  },
  {
    value: "27 WOOSTER STREET",
    data: 1002287503
  },
  {
    value: "270 RIVERSIDE DRIVE",
    data: 1018887504
  },
  {
    value: "272 MANHATTAN AVENUE",
    data: 1018467504
  },
  {
    value: "275 WEST 10 STREET",
    data: 1006317503
  },
  {
    value: "290 WEST STREET",
    data: 1005957508
  },
  {
    value: "30 PARK PLACE",
    data: 1001237502
  },
  {
    value: "300 EAST 64 STREET",
    data: 1014387502
  },
  {
    value: "301 WEST 53 STREET",
    data: 1010447501
  },
  {
    value: "303 WEST 146 STREET",
    data: 1020457505
  },
  {
    value: "305 EAST 51 STREET",
    data: 1013447503
  },
  {
    value: "305 WEST 150 STREET",
    data: 1020467501
  },
  {
    value: "306 WEST 116 STREET",
    data: 1018487505
  },
  {
    value: "308 WEST 30 STREET",
    data: 1007537502
  },
  {
    value: "321 WEST 110 STREET",
    data: 1018467503
  },
  {
    value: "324 EAST 4 STREET",
    data: 1003737501
  },
  {
    value: "325 LEXINGTON AVENUE",
    data: 1008947504
  },
  {
    value: "325 WEST BROADWAY",
    data: 1002287504
  },
  {
    value: "335 EAST 27 STREET",
    data: 1009337501
  },
  {
    value: "337 EAST 62 STREET",
    data: 1014377501
  },
  {
    value: "35 WEST 15 STREET",
    data: 1008177503
  },
  {
    value: "36 BLEECKER STREET",
    data: 1005217505
  },
  {
    value: "400 WEST 155 STREET",
    data: 1020697501
  },
  {
    value: "401 WASHINGTON STREET",
    data: 1002177504
  },
  {
    value: "404 PARK AVENUE SOUTH",
    data: 1008587502
  },
  {
    value: "410 COLUMBUS AVENUE",
    data: 1012107504
  },
  {
    value: "416 WEST 52 STREET",
    data: 1010617502
  },
  {
    value: "426 WEST 52 STREET",
    data: 1010617501
  },
  {
    value: "432 PARK AVENUE",
    data: 1012927502
  },
  {
    value: "443 GREENWICH STREET",
    data: 1002227503
  },
  {
    value: "456 WASHINGTON STREET",
    data: 1005957509
  },
  {
    value: "456 WEST 167 STREET",
    data: 1021117501
  },
  {
    value: "498 WEST END AVENUE",
    data: 1012317502
  },
  {
    value: "5 BEEKMAN STREET",
    data: 1000907503
  },
  {
    value: "5 FRANKLIN PLACE",
    data: 1001757506
  },
  {
    value: "50 RIVERSIDE BOULEVARD",
    data: 1011717509
  },
  {
    value: "50 WEST 30 STREET",
    data: 1008317502
  },
  {
    value: "50 WEST STREET",
    data: 1000177501
  },
  {
    value: "500 WEST 21 STREET",
    data: 1006927502
  },
  {
    value: "500 WEST 30 STREET",
    data: 1007017502
  },
  {
    value: "505 WEST 19 STREET",
    data: 1006917502
  },
  {
    value: "508 WEST 24 STREET",
    data: 1006957508
  },
  {
    value: "529 WEST 29 STREET",
    data: 1007017501
  },
  {
    value: "536 EAST 13 STREET",
    data: 1004067503
  },
  {
    value: "540 WEST 49 STREET",
    data: 1010777501
  },
  {
    value: "55 3 AVENUE",
    data: 1004667502
  },
  {
    value: "55 SULLIVAN STREET",
    data: 1004897502
  },
  {
    value: "551 10 AVENUE",
    data: 1010697501
  },
  {
    value: "551 WEST 21 STREET",
    data: 1006937502
  },
  {
    value: "553 WEST 30 STREET",
    data: 1007027502
  },
  {
    value: "56 LEONARD STREET",
    data: 1001767501
  },
  {
    value: "58 WEST 129 STREET",
    data: 1017267502
  },
  {
    value: "605 WEST 42 STREET",
    data: 1010907502
  },
  {
    value: "625 WEST 57 STREET",
    data: 1011057501
  },
  {
    value: "640 BROADWAY",
    data: 1005227502
  },
  {
    value: "67 FRANKLIN STREET",
    data: 1001747505
  },
  {
    value: "69 BENNETT AVENUE",
    data: 1021807501
  },
  {
    value: "7 HARRISON STREET",
    data: 1001807512
  },
  {
    value: "71 READE STREET",
    data: 1001497503
  },
  {
    value: "710 RIVERSIDE DRIVE",
    data: 1020957502
  },
  {
    value: "739 8 AVENUE",
    data: 1010377501
  },
  {
    value: "750 RIVERSIDE DRIVE",
    data: 1020997501
  },
  {
    value: "77 EAST 110 STREET",
    data: 1016167501
  },
  {
    value: "775 RIVERSIDE DRIVE",
    data: 1021347504
  },
  {
    value: "84 3 AVENUE",
    data: 1005567502
  },
  {
    value: "855 AVENUE OF THE AMERICAS",
    data: 1008067502
  },
  {
    value: "88 LEXINGTON AVENUE",
    data: 1008827503
  },
  {
    value: "90 LEXINGTON AVENUE",
    data: 1008827502
  },
  {
    value: "933 MADISON AVENUE",
    data: 1013897503
  },
  {
    value: "950 2 AVENUE",
    data: 1013437503
  },
  {
    value: "959 1 AVENUE",
    data: 1013457502
  },
  {
    value: "MADISON AVE",
    data: 1015037501
  },
  {
    value: "1 1/2 5 AVENUE",
    data: 1005500013
  },
  {
    value: "1 5 AVENUE",
    data: 1005500022
  },
  {
    value: "1 5 AVENUE",
    data: 1005500022
  },
  {
    value: "1 ADRIAN AVENUE",
    data: 1022150225
  },
  {
    value: "1 ADRIAN AVENUE",
    data: 1022150225
  },
  {
    value: "1 AMSTERDAM AVENUE",
    data: 1011310001
  },
  {
    value: "1 AUDUBON AVENUE",
    data: 1021230026
  },
  {
    value: "1 AUDUBON AVENUE",
    data: 1021230026
  },
  {
    value: "1 AVENUE",
    data: 1004280001
  },
  {
    value: "1 AVENUE",
    data: 1009399034
  },
  {
    value: "1 AVENUE",
    data: 1009399035
  },
  {
    value: "1 AVENUE",
    data: 1009399036
  },
  {
    value: "1 AVENUE",
    data: 1009399037
  },
  {
    value: "1 AVENUE",
    data: 1009620135
  },
  {
    value: "1 AVENUE",
    data: 1013530012
  },
  {
    value: "1 AVENUE",
    data: 1017040002
  },
  {
    value: "1 AVENUE",
    data: 1018110050
  },
  {
    value: "1 AVENUE",
    data: 1018110060
  },
  {
    value: "1 AVENUE",
    data: 1018110127
  },
  {
    value: "1 AVENUE",
    data: 1018110153
  },
  {
    value: "1 BEEKMAN PLACE",
    data: 1013610021
  },
  {
    value: "1 BEEKMAN PLACE",
    data: 1013610021
  },
  {
    value: "1 BENNETT AVENUE",
    data: 1021800090
  },
  {
    value: "1 BENNETT AVENUE",
    data: 1021800090
  },
  {
    value: "1 BLEECKER STREET",
    data: 1005297505
  },
  {
    value: "1 BOGARDUS PLACE",
    data: 1021710066
  },
  {
    value: "1 BOGARDUS PLACE",
    data: 1021710066
  },
  {
    value: "1 BOND STREET",
    data: 1005297504
  },
  {
    value: "1 BOND STREET",
    data: 1005297504
  },
  {
    value: "1 BOWERY",
    data: 1002890001
  },
  {
    value: "1 BOWERY",
    data: 1002899001
  },
  {
    value: "1 BROADWAY",
    data: 1000130001
  },
  {
    value: "1 BROADWAY TERRACE",
    data: 1021700506
  },
  {
    value: "1 BROADWAY TERRACE",
    data: 1021700506
  },
  {
    value: "1 CABRINI BOULEVARD",
    data: 1021770003
  },
  {
    value: "1 CABRINI BOULEVARD",
    data: 1021770003
  },
  {
    value: "1 CENTRAL PARK WEST",
    data: 1011137502
  },
  {
    value: "1 CENTRAL PARK WEST",
    data: 1011137502
  },
  {
    value: "1 CENTRE MARKET PLACE",
    data: 1004710001
  },
  {
    value: "1 CENTRE STREET",
    data: 1001210001
  },
  {
    value: "1 CHATHAM SQUARE",
    data: 1001620001
  },
  {
    value: "1 CHRISTOPHER STREET",
    data: 1006100060
  },
  {
    value: "1 CHRISTOPHER STREET",
    data: 1006100060
  },
  {
    value: "1 COENTIES SLIP",
    data: 1000077501
  },
  {
    value: "1 COENTIES SLIP",
    data: 1000077501
  },
  {
    value: "1 CONVENT AVENUE",
    data: 1019540001
  },
  {
    value: "1 CONVENT AVENUE",
    data: 1019540001
  },
  {
    value: "1 COOPER SQUARE",
    data: 1004600001
  },
  {
    value: "1 COOPER SQUARE",
    data: 1004600001
  },
  {
    value: "1 DELANCEY STREET",
    data: 1004240012
  },
  {
    value: "1 DELANCEY STREET",
    data: 1004240012
  },
  {
    value: "1 DIVISION STREET",
    data: 1002810064
  },
  {
    value: "1 DIVISION STREET",
    data: 1002810064
  },
  {
    value: "1 DOYERS STREET",
    data: 1001620133
  },
  {
    value: "1 EAST 117 STREET",
    data: 1016230102
  },
  {
    value: "1 EAST 124 STREET",
    data: 1017490104
  },
  {
    value: "1 EAST 2 STREET",
    data: 1004570009
  },
  {
    value: "1 EAST 27 STREET",
    data: 1008570006
  },
  {
    value: "1 EAST 29 STREET",
    data: 1008590005
  },
  {
    value: "1 EAST 33 STREET",
    data: 1008630006
  },
  {
    value: "1 EAST 35 STREET",
    data: 1008657502
  },
  {
    value: "1 EAST 35 STREET",
    data: 1008657502
  },
  {
    value: "1 EAST 42 STREET",
    data: 1012770006
  },
  {
    value: "1 EAST 53 STREET",
    data: 1012890005
  },
  {
    value: "1 EAST 62 STREET",
    data: 1013777503
  },
  {
    value: "1 EAST 62 STREET",
    data: 1013777503
  },
  {
    value: "1 EAST 66 STREET",
    data: 1013810001
  },
  {
    value: "1 EAST 66 STREET",
    data: 1013810001
  },
  {
    value: "1 EAST 92 STREET",
    data: 1015040005
  },
  {
    value: "1 EAST 93 STREET",
    data: 1015050005
  },
  {
    value: "1 EAST 93 STREET",
    data: 1015050005
  },
  {
    value: "1 EAST 94 STREET",
    data: 1015060005
  },
  {
    value: "1 EAST BROADWAY",
    data: 1002790065
  },
  {
    value: "1 EAST END AVENUE",
    data: 1015890002
  },
  {
    value: "1 EAST END AVENUE",
    data: 1015890002
  },
  {
    value: "1 ELDRIDGE STREET",
    data: 1002927501
  },
  {
    value: "1 ELDRIDGE STREET",
    data: 1002927501
  },
  {
    value: "1 ELLIS ISLAND",
    data: 1000010201
  },
  {
    value: "1 FT CHARLES PLACE",
    data: 1022150413
  },
  {
    value: "1 GOVERNORS ISLAND",
    data: 1000010010
  },
  {
    value: "1 GRAMERCY PARK WEST",
    data: 1008760010
  },
  {
    value: "1 GRAND ARMY PLAZA",
    data: 1012740034
  },
  {
    value: "1 GROVE COURT",
    data: 1005850070
  },
  {
    value: "1 HAMILTON PLACE",
    data: 1019880147
  },
  {
    value: "1 HAMILTON TERRACE",
    data: 1020500193
  },
  {
    value: "1 HANOVER SQUARE",
    data: 1000297502
  },
  {
    value: "1 HAVEN AVENUE",
    data: 1021390051
  },
  {
    value: "1 HERALD SQUARE",
    data: 1008100045
  },
  {
    value: "1 HORATIO STREET",
    data: 1006160051
  },
  {
    value: "1 IRVING PLACE",
    data: 1008707501
  },
  {
    value: "1 JACKSON STREET",
    data: 1002670050
  },
  {
    value: "1 JACOBUS PLACE",
    data: 1022150339
  },
  {
    value: "1 JACOBUS PLACE",
    data: 1022150339
  },
  {
    value: "1 JUMEL PLACE",
    data: 1021120058
  },
  {
    value: "1 KING STREET",
    data: 1005200084
  },
  {
    value: "1 LEROY STREET",
    data: 1005867501
  },
  {
    value: "1 LEXINGTON AVENUE",
    data: 1008770022
  },
  {
    value: "1 LEXINGTON AVENUE",
    data: 1008770022
  },
  {
    value: "1 LIBERTY ISLAND",
    data: 1000010101
  },
  {
    value: "1 LIBERTY PLAZA",
    data: 1000627501
  },
  {
    value: "1 LISPENARD STREET",
    data: 1002110016
  },
  {
    value: "1 MADISON AVENUE",
    data: 1008530001
  },
  {
    value: "1 MADISON AVENUE",
    data: 1008530002
  },
  {
    value: "1 MAIN STREET",
    data: 1013730020
  },
  {
    value: "1 MAIN STREET",
    data: 1013730025
  },
  {
    value: "1 MAIN STREET",
    data: 1013730035
  },
  {
    value: "1 MAIN STREET",
    data: 1013730060
  },
  {
    value: "1 MAIN STREET",
    data: 1013730065
  },
  {
    value: "1 MAIN STREET",
    data: 1013730070
  },
  {
    value: "1 MAIN STREET",
    data: 1013730075
  },
  {
    value: "1 MARBLE HILL AVENUE",
    data: 1022150465
  },
  {
    value: "1 MARBLE HILL AVENUE",
    data: 1022150465
  },
  {
    value: "1 MERCER STREET",
    data: 1002300001
  },
  {
    value: "1 MILLIGAN PLACE",
    data: 1006060070
  },
  {
    value: "1 MINETTA LANE",
    data: 1005420043
  },
  {
    value: "1 MITCHELL PLACE",
    data: 1013610001
  },
  {
    value: "1 MORNINGSIDE DRIVE",
    data: 1018650040
  },
  {
    value: "1 MORNINGSIDE DRIVE",
    data: 1018650040
  },
  {
    value: "1 MORTON SQUARE",
    data: 1006027501
  },
  {
    value: "1 MORTON SQUARE",
    data: 1006027501
  },
  {
    value: "1 MOTT STREET",
    data: 1001640054
  },
  {
    value: "1 MT MORRIS PARK WEST",
    data: 1017207501
  },
  {
    value: "1 MT. MORRIS PARK WEST",
    data: 1017207501
  },
  {
    value: "1 N D PERLMAN PLACE",
    data: 1009220002
  },
  {
    value: "1 NORTH END AVENUE",
    data: 1000160225
  },
  {
    value: "1 OLD BROADWAY",
    data: 1019820001
  },
  {
    value: "1 PARK AVENUE",
    data: 1008880001
  },
  {
    value: "1 PARK ROW",
    data: 1000900001
  },
  {
    value: "1 PATCHIN PLACE",
    data: 1006060080
  },
  {
    value: "1 PECK SLIP",
    data: 1001060009
  },
  {
    value: "1 PIER 11",
    data: 1000360018
  },
  {
    value: "1 PIER 6",
    data: 1000020023
  },
  {
    value: "1 POLICE PLAZA",
    data: 1001190001
  },
  {
    value: "1 RIVER PLACE",
    data: 1010890001
  },
  {
    value: "1 RIVER PLACE",
    data: 1010890001
  },
  {
    value: "1 RIVER TERRACE",
    data: 1000167516
  },
  {
    value: "1 RIVER TERRACE",
    data: 1000167516
  },
  {
    value: "1 RIVERSIDE DRIVE",
    data: 1011840003
  },
  {
    value: "1 RUTHERFORD PLACE",
    data: 1008970063
  },
  {
    value: "1 SEAMAN AVENUE",
    data: 1022370008
  },
  {
    value: "1 SEAMAN AVENUE",
    data: 1022370008
  },
  {
    value: "1 SHERIDAN SQUARE",
    data: 1005927501
  },
  {
    value: "1 SHERIDAN SQUARE",
    data: 1005927501
  },
  {
    value: "1 SHERMAN AVENUE",
    data: 1021740001
  },
  {
    value: "1 SHERMAN AVENUE",
    data: 1021740001
  },
  {
    value: "1 SICKLES STREET",
    data: 1021730015
  },
  {
    value: "1 SICKLES STREET",
    data: 1021730015
  },
  {
    value: "1 SOUTH STREET",
    data: 1000030010
  },
  {
    value: "1 ST NICHOLAS TERRACE",
    data: 1019540007
  },
  {
    value: "1 ST NICHOLAS TERRACE",
    data: 1019540007
  },
  {
    value: "1 SUTTON PLACE",
    data: 1013720026
  },
  {
    value: "1 SUTTON PLACE SOUTH",
    data: 1013720002
  },
  {
    value: "1 SUTTON PLACE SOUTH",
    data: 1013720002
  },
  {
    value: "1 SYLVAN COURT",
    data: 1017700081
  },
  {
    value: "1 SYLVAN TERRACE",
    data: 1021090080
  },
  {
    value: "1 TERRACE VIEW AVENUE",
    data: 1022150080
  },
  {
    value: "1 TERRACE VIEW AVENUE",
    data: 1022150181
  },
  {
    value: "1 TUDOR CITY PLACE",
    data: 1013330023
  },
  {
    value: "1 TUDOR CITY PLACE",
    data: 1013330023
  },
  {
    value: "1 UNION SQUARE WEST",
    data: 1008420021
  },
  {
    value: "1 UNIVERSITY PLACE",
    data: 1005480001
  },
  {
    value: "1 UNIVERSITY PLACE",
    data: 1005480001
  },
  {
    value: "1 VAN CORLEAR PLACE",
    data: 1022150415
  },
  {
    value: "1 WADSWORTH AVENUE",
    data: 1021430001
  },
  {
    value: "1 WADSWORTH AVENUE",
    data: 1021430001
  },
  {
    value: "1 WALL STREET",
    data: 1000230007
  },
  {
    value: "1 WASHINGTON SQ VLLGE",
    data: 1005330001
  },
  {
    value: "1 WASHINGTON SQ VLLGE",
    data: 1005330030
  },
  {
    value: "1 WASHINGTON SQUARE N",
    data: 1005500001
  },
  {
    value: "1 WASHINGTON TERRACE",
    data: 1021560047
  },
  {
    value: "1 WATER STREET",
    data: 1000047501
  },
  {
    value: "1 WATTS STREET",
    data: 1004760070
  },
  {
    value: "1 WEEHAWKEN STREET",
    data: 1006360013
  },
  {
    value: "1 WEEHAWKEN STREET",
    data: 1006360013
  },
  {
    value: "1 WEST 117 STREET",
    data: 1016010027
  },
  {
    value: "1 WEST 117 STREET",
    data: 1016010027
  },
  {
    value: "1 WEST 119 STREET",
    data: 1017180135
  },
  {
    value: "1 WEST 121 STREET",
    data: 1017200050
  },
  {
    value: "1 WEST 125 STREET",
    data: 1017230033
  },
  {
    value: "1 WEST 22 STREET",
    data: 1008240035
  },
  {
    value: "1 WEST 34 STREET",
    data: 1008360033
  },
  {
    value: "1 WEST 37 STREET",
    data: 1008390037
  },
  {
    value: "1 WEST 39 STREET",
    data: 1008410031
  },
  {
    value: "1 WEST 64 STREET",
    data: 1011170029
  },
  {
    value: "1 WEST 64 STREET",
    data: 1011170029
  },
  {
    value: "1 WEST END AVENUE",
    data: 1011710165
  },
  {
    value: "1 WEST END AVENUE",
    data: 1011710165
  },
  {
    value: "1 WHITEHALL STREET",
    data: 1000100023
  },
  {
    value: "1 WILLIAM STREET",
    data: 1000290036
  },
  {
    value: "1 WORTH STREET",
    data: 1001790011
  },
  {
    value: "1 WORTH STREET",
    data: 1001790011
  },
  {
    value: "1 YORK STREET",
    data: 1002127503
  },
  {
    value: "1 YORK STREET",
    data: 1002127503
  },
  {
    value: "10 5 AVENUE",
    data: 1005720044
  },
  {
    value: "10 5 AVENUE",
    data: 1005720044
  },
  {
    value: "10 9 AVENUE",
    data: 1006280004
  },
  {
    value: "10 ADRIAN AVENUE",
    data: 1022150352
  },
  {
    value: "10 ADRIAN AVENUE",
    data: 1022150352
  },
  {
    value: "10 AVENUE",
    data: 1006450002
  },
  {
    value: "10 AVENUE",
    data: 1007020110
  },
  {
    value: "10 AVENUE",
    data: 1007360073
  },
  {
    value: "10 AVENUE",
    data: 1021890001
  },
  {
    value: "10 AVENUE",
    data: 1022320013
  },
  {
    value: "10 AVENUE C",
    data: 1003710003
  },
  {
    value: "10 AVENUE D",
    data: 1003560001
  },
  {
    value: "10 AVENUE D",
    data: 1003560001
  },
  {
    value: "10 BANK STREET",
    data: 1006140052
  },
  {
    value: "10 BARCLAY STREET",
    data: 1000880014
  },
  {
    value: "10 BATTERY PARK",
    data: 1000030001
  },
  {
    value: "10 BEACH STREET",
    data: 1001900038
  },
  {
    value: "10 BEDFORD STREET",
    data: 1005277501
  },
  {
    value: "10 BENNETT AVENUE",
    data: 1021800077
  },
  {
    value: "10 BENNETT AVENUE",
    data: 1021800077
  },
  {
    value: "10 BETHUNE STREET",
    data: 1006240023
  },
  {
    value: "10 BETHUNE STREET",
    data: 1006240023
  },
  {
    value: "10 BLEECKER STREET",
    data: 1005210071
  },
  {
    value: "10 BLEECKER STREET",
    data: 1005210071
  },
  {
    value: "10 BOWERY",
    data: 1001620057
  },
  {
    value: "10 CHARLES STREET",
    data: 1006110053
  },
  {
    value: "10 CHATHAM SQUARE",
    data: 1001620037
  },
  {
    value: "10 CHRISTOPHER STREET",
    data: 1005937501
  },
  {
    value: "10 CHRISTOPHER STREET",
    data: 1005937501
  },
  {
    value: "10 CLINTON STREET",
    data: 1003500048
  },
  {
    value: "10 COLUMBUS CIRCLE",
    data: 1010497501
  },
  {
    value: "10 CONVENT AVENUE",
    data: 1019670074
  },
  {
    value: "10 COOPER STREET",
    data: 1022390031
  },
  {
    value: "10 COOPER STREET",
    data: 1022390031
  },
  {
    value: "10 CORTLANDT STREET",
    data: 1000630001
  },
  {
    value: "10 DELANCEY STREET",
    data: 1004250041
  },
  {
    value: "10 DELANCEY STREET",
    data: 1004250041
  },
  {
    value: "10 DOWNING STREET",
    data: 1005270027
  },
  {
    value: "10 DOWNING STREET",
    data: 1005270027
  },
  {
    value: "10 DOYERS STREET",
    data: 1001620047
  },
  {
    value: "10 EAST 10 STREET",
    data: 1005670011
  },
  {
    value: "10 EAST 102 STREET",
    data: 1016077503
  },
  {
    value: "10 EAST 102 STREET",
    data: 1016077503
  },
  {
    value: "10 EAST 116 STREET",
    data: 1016210066
  },
  {
    value: "10 EAST 118 STREET",
    data: 1016230128
  },
  {
    value: "10 EAST 12 STREET",
    data: 1005697501
  },
  {
    value: "10 EAST 126 STREET",
    data: 1017500167
  },
  {
    value: "10 EAST 127 STREET",
    data: 1017510167
  },
  {
    value: "10 EAST 128 STREET",
    data: 1017520066
  },
  {
    value: "10 EAST 129 STREET",
    data: 1017530066
  },
  {
    value: "10 EAST 132 STREET",
    data: 1017560065
  },
  {
    value: "10 EAST 14 STREET",
    data: 1005717503
  },
  {
    value: "10 EAST 15 STREET",
    data: 1008420034
  },
  {
    value: "10 EAST 2 STREET",
    data: 1004580044
  },
  {
    value: "10 EAST 22 STREET",
    data: 1008507505
  },
  {
    value: "10 EAST 23 STREET",
    data: 1008510063
  },
  {
    value: "10 EAST 28 STREET",
    data: 1008570066
  },
  {
    value: "10 EAST 28 STREET",
    data: 1008570066
  },
  {
    value: "10 EAST 30 STREET",
    data: 1008590077
  },
  {
    value: "10 EAST 33 STREET",
    data: 1008620067
  },
  {
    value: "10 EAST 38 STREET",
    data: 1008670064
  },
  {
    value: "10 EAST 40 STREET",
    data: 1008690066
  },
  {
    value: "10 EAST 41 STREET",
    data: 1012750064
  },
  {
    value: "10 EAST 44 STREET",
    data: 1012780064
  },
  {
    value: "10 EAST 45 STREET",
    data: 1012790063
  },
  {
    value: "10 EAST 46 STREET",
    data: 1012810064
  },
  {
    value: "10 EAST 47 STREET",
    data: 1012820064
  },
  {
    value: "10 EAST 52 STREET",
    data: 1012870063
  },
  {
    value: "10 EAST 60 STREET",
    data: 1013740060
  },
  {
    value: "10 EAST 62 STREET",
    data: 1013760064
  },
  {
    value: "10 EAST 63 STREET",
    data: 1013770064
  },
  {
    value: "10 EAST 64 STREET",
    data: 1013780165
  },
  {
    value: "10 EAST 67 STREET",
    data: 1013810064
  },
  {
    value: "10 EAST 68 STREET",
    data: 1013820064
  },
  {
    value: "10 EAST 70 STREET",
    data: 1013840063
  },
  {
    value: "10 EAST 70 STREET",
    data: 1013840063
  },
  {
    value: "10 EAST 73 STREET",
    data: 1013870066
  },
  {
    value: "10 EAST 74 STREET",
    data: 1013880064
  },
  {
    value: "10 EAST 75 STREET",
    data: 1013890063
  },
  {
    value: "10 EAST 76 STREET",
    data: 1013900064
  },
  {
    value: "10 EAST 77 STREET",
    data: 1013910066
  },
  {
    value: "10 EAST 78 STREET",
    data: 1013920065
  },
  {
    value: "10 EAST 78 STREET",
    data: 1013920065
  },
  {
    value: "10 EAST 79 STREET",
    data: 1013930063
  },
  {
    value: "10 EAST 8 STREET",
    data: 1005500026
  },
  {
    value: "10 EAST 81 STREET",
    data: 1014920065
  },
  {
    value: "10 EAST 82 STREET",
    data: 1014930065
  },
  {
    value: "10 EAST 85 STREET",
    data: 1014960065
  },
  {
    value: "10 EAST 87 STREET",
    data: 1014980065
  },
  {
    value: "10 EAST 92 STREET",
    data: 1015030066
  },
  {
    value: "10 EAST 93 STREET",
    data: 1015040064
  },
  {
    value: "10 EAST 94 STREET",
    data: 1015050064
  },
  {
    value: "10 EAST 95 STREET",
    data: 1015060064
  },
  {
    value: "10 EAST END AVENUE",
    data: 1015760027
  },
  {
    value: "10 EAST END AVENUE",
    data: 1015760027
  },
  {
    value: "10 ELDRIDGE STREET",
    data: 1002930002
  },
  {
    value: "10 ELIZABETH STREET",
    data: 1002020002
  },
  {
    value: "10 ELIZABETH STREET",
    data: 1002020002
  },
  {
    value: "10 FAIRVIEW AVENUE",
    data: 1021700450
  },
  {
    value: "10 FAIRVIEW AVENUE",
    data: 1021700450
  },
  {
    value: "10 FT WASHINGTON AVENUE",
    data: 1021370070
  },
  {
    value: "10 GRACIE SQUARE",
    data: 1015900030
  },
  {
    value: "10 GRACIE SQUARE",
    data: 1015900030
  },
  {
    value: "10 GRAMERCY PARK",
    data: 1008750076
  },
  {
    value: "10 GREENE STREET",
    data: 1002300013
  },
  {
    value: "10 GROVE STREET",
    data: 1005850018
  },
  {
    value: "10 HAMILTON TERRACE",
    data: 1020500082
  },
  {
    value: "10 HANOVER SQUARE",
    data: 1000310001
  },
  {
    value: "10 HANOVER SQUARE",
    data: 1000310001
  },
  {
    value: "10 HARRISON STREET",
    data: 1001810002
  },
  {
    value: "10 HENDERSON PLACE",
    data: 1015830116
  },
  {
    value: "10 HILLSIDE AVENUE",
    data: 1021710001
  },
  {
    value: "10 HILLSIDE AVENUE",
    data: 1021710001
  },
  {
    value: "10 HUBERT STREET",
    data: 1002150001
  },
  {
    value: "10 JUMEL TERRACE",
    data: 1021090103
  },
  {
    value: "10 LENOX AVENUE",
    data: 1015940069
  },
  {
    value: "10 LEONARD STREET",
    data: 1001790021
  },
  {
    value: "10 LEONARD STREET",
    data: 1001790021
  },
  {
    value: "10 LIBERTY STREET",
    data: 1000420022
  },
  {
    value: "10 LIBERTY STREET",
    data: 1000420022
  },
  {
    value: "10 LITTLE WEST STREET",
    data: 1000167513
  },
  {
    value: "10 MAIDEN LANE",
    data: 1000640021
  },
  {
    value: "10 MANHATTAN AVENUE",
    data: 1018360047
  },
  {
    value: "10 MANHATTAN AVENUE",
    data: 1018360047
  },
  {
    value: "10 MARKET STREET",
    data: 1002820001
  },
  {
    value: "10 MITCHELL PLACE",
    data: 1013610007
  },
  {
    value: "10 MITCHELL PLACE",
    data: 1013610007
  },
  {
    value: "10 MORTON STREET",
    data: 1005860057
  },
  {
    value: "10 MORTON STREET",
    data: 1005860057
  },
  {
    value: "10 MOTT STREET",
    data: 1001620006
  },
  {
    value: "10 MT MORRIS PARK WEST",
    data: 1017207502
  },
  {
    value: "10 N D PERLMAN PLACE",
    data: 1009220046
  },
  {
    value: "10 NORTH MOORE STREET",
    data: 1001890035
  },
  {
    value: "10 OVERLOOK TERRACE",
    data: 1021800160
  },
  {
    value: "10 OVERLOOK TERRACE",
    data: 1021800160
  },
  {
    value: "10 PARK AVENUE",
    data: 1008640035
  },
  {
    value: "10 PARK AVENUE",
    data: 1008640035
  },
  {
    value: "10 PARK TERRACE EAST",
    data: 1022430045
  },
  {
    value: "10 PARK TERRACE EAST",
    data: 1022430045
  },
  {
    value: "10 PATCHIN PLACE",
    data: 1006060086
  },
  {
    value: "10 PELL STREET",
    data: 1001630001
  },
  {
    value: "10 PELL STREET",
    data: 1001630001
  },
  {
    value: "10 PERRY STREET",
    data: 1006120052
  },
  {
    value: "10 PITT STREET",
    data: 1003360013
  },
  {
    value: "10 PITT STREET",
    data: 1003360035
  },
  {
    value: "10 POST AVENUE",
    data: 1022200043
  },
  {
    value: "10 POST AVENUE",
    data: 1022200043
  },
  {
    value: "10 RUTGERS STREET",
    data: 1002830024
  },
  {
    value: "10 RUTGERS STREET",
    data: 1002830024
  },
  {
    value: "10 SNIFFEN COURT",
    data: 1008910052
  },
  {
    value: "10 SOUTH STREET",
    data: 1000020002
  },
  {
    value: "10 SPRING STREET",
    data: 1004780019
  },
  {
    value: "10 ST MARKS PLACE",
    data: 1004630014
  },
  {
    value: "10 ST MARKS PLACE",
    data: 1004630014
  },
  {
    value: "10 ST NICHOLAS PLACE",
    data: 1020540044
  },
  {
    value: "10 ST NICHOLAS TERRACE",
    data: 1019540016
  },
  {
    value: "10 STANTON STREET",
    data: 1004270002
  },
  {
    value: "10 STANTON STREET",
    data: 1004270002
  },
  {
    value: "10 SULLIVAN STREET",
    data: 1004907502
  },
  {
    value: "10 SYLVAN TERRACE",
    data: 1021090062
  },
  {
    value: "10 UNION SQUARE EAST",
    data: 1008707501
  },
  {
    value: "10 VAN CORLEAR PLACE",
    data: 1022150356
  },
  {
    value: "10 WASHINGTON PLACE",
    data: 1005460020
  },
  {
    value: "10 WASHINGTON TERRACE",
    data: 1021560143
  },
  {
    value: "10 WAVERLY PLACE",
    data: 1005470018
  },
  {
    value: "10 WEST 10 STREET",
    data: 1005730037
  },
  {
    value: "10 WEST 103 STREET",
    data: 1018380040
  },
  {
    value: "10 WEST 104 STREET",
    data: 1018390040
  },
  {
    value: "10 WEST 107 STREET",
    data: 1018420040
  },
  {
    value: "10 WEST 107 STREET",
    data: 1018420040
  },
  {
    value: "10 WEST 119 STREET",
    data: 1017170042
  },
  {
    value: "10 WEST 119 STREET",
    data: 1017170042
  },
  {
    value: "10 WEST 121 STREET",
    data: 1017200024
  },
  {
    value: "10 WEST 122 STREET",
    data: 1017200062
  },
  {
    value: "10 WEST 123 STREET",
    data: 1017210024
  },
  {
    value: "10 WEST 127 STREET",
    data: 1017240142
  },
  {
    value: "10 WEST 128 STREET",
    data: 1017250042
  },
  {
    value: "10 WEST 130 STREET",
    data: 1017270042
  },
  {
    value: "10 WEST 131 STREET",
    data: 1017280044
  },
  {
    value: "10 WEST 132 STREET",
    data: 1017290043
  },
  {
    value: "10 WEST 135 STREET",
    data: 1017300045
  },
  {
    value: "10 WEST 135 STREET",
    data: 1017300045
  },
  {
    value: "10 WEST 138 STREET",
    data: 1017350040
  },
  {
    value: "10 WEST 138 STREET",
    data: 1017350040
  },
  {
    value: "10 WEST 18 STREET",
    data: 1008190052
  },
  {
    value: "10 WEST 28 STREET",
    data: 1008290047
  },
  {
    value: "10 WEST 29 STREET",
    data: 1008300051
  },
  {
    value: "10 WEST 32 STREET",
    data: 1008330051
  },
  {
    value: "10 WEST 46 STREET",
    data: 1012617502
  },
  {
    value: "10 WEST 47 STREET",
    data: 1012620045
  },
  {
    value: "10 WEST 48 STREET",
    data: 1012630045
  },
  {
    value: "10 WEST 49 STREET",
    data: 1012640045
  },
  {
    value: "10 WEST 55 STREET",
    data: 1012700044
  },
  {
    value: "10 WEST 56 STREET",
    data: 1012710046
  },
  {
    value: "10 WEST 57 STREET",
    data: 1012720047
  },
  {
    value: "10 WEST 65 STREET",
    data: 1011170039
  },
  {
    value: "10 WEST 65 STREET",
    data: 1011170039
  },
  {
    value: "10 WEST 71 STREET",
    data: 1011230040
  },
  {
    value: "10 WEST 75 STREET",
    data: 1011270041
  },
  {
    value: "10 WEST 76 STREET",
    data: 1011280040
  },
  {
    value: "10 WEST 76 STREET",
    data: 1011280040
  },
  {
    value: "10 WEST 83 STREET",
    data: 1011960039
  },
  {
    value: "10 WEST 84 STREET",
    data: 1011970039
  },
  {
    value: "10 WEST 86 STREET",
    data: 1011990040
  },
  {
    value: "10 WEST 86 STREET",
    data: 1011990040
  },
  {
    value: "10 WEST 87 STREET",
    data: 1012000039
  },
  {
    value: "10 WEST 9 STREET",
    data: 1005720035
  },
  {
    value: "10 WEST 90 STREET",
    data: 1012030040
  },
  {
    value: "10 WEST 93 STREET",
    data: 1012060042
  },
  {
    value: "10 WEST 93 STREET",
    data: 1012060042
  },
  {
    value: "10 WEST 95 STREET",
    data: 1012080039
  },
  {
    value: "10 WEST END AVENUE",
    data: 1011517502
  },
  {
    value: "10 WEST END AVENUE",
    data: 1011517502
  },
  {
    value: "100 1 AVENUE",
    data: 1004340001
  },
  {
    value: "100 11 AVENUE",
    data: 1006917501
  },
  {
    value: "100 11 AVENUE",
    data: 1006917501
  },
  {
    value: "100 2 AVENUE",
    data: 1004470007
  },
  {
    value: "100 3 AVENUE",
    data: 1005580030
  },
  {
    value: "100 4 AVENUE",
    data: 1005570031
  },
  {
    value: "100 5 AVENUE",
    data: 1008177502
  },
  {
    value: "100 7 AVENUE",
    data: 1007660039
  },
  {
    value: "100 7 AVENUE",
    data: 1007660039
  },
  {
    value: "100 8 AVENUE",
    data: 1007640071
  },
  {
    value: "100 AUDUBON AVENUE",
    data: 1021270022
  },
  {
    value: "100 AUDUBON AVENUE",
    data: 1021270022
  },
  {
    value: "100 AVENUE B",
    data: 1004020040
  },
  {
    value: "100 AVENUE OF THE AMER",
    data: 1004760007
  },
  {
    value: "100 BEDFORD STREET",
    data: 1005880082
  },
  {
    value: "100 BENNETT AVENUE",
    data: 1021800169
  },
  {
    value: "100 BENNETT AVENUE",
    data: 1021800169
  },
  {
    value: "100 BLEECKER STREET",
    data: 1005240066
  },
  {
    value: "100 BOWERY",
    data: 1002390033
  },
  {
    value: "100 BROAD STREET",
    data: 1000100001
  },
  {
    value: "100 BROADWAY",
    data: 1000460003
  },
  {
    value: "100 CABRINI BOULEVARD",
    data: 1021790070
  },
  {
    value: "100 CABRINI BOULEVARD",
    data: 1021790070
  },
  {
    value: "100 CANAL STREET",
    data: 1002920014
  },
  {
    value: "100 CENTRAL PARK SOUTH",
    data: 1010117505
  },
  {
    value: "100 CHAMBERS STREET",
    data: 1001350016
  },
  {
    value: "100 CHARLTON STREET",
    data: 1005970051
  },
  {
    value: "100 CHRISTOPHER STREET",
    data: 1005880054
  },
  {
    value: "100 CHRISTOPHER STREET",
    data: 1005880054
  },
  {
    value: "100 CLINTON STREET",
    data: 1003480038
  },
  {
    value: "100 CONVENT AVENUE",
    data: 1019700051
  },
  {
    value: "100 CONVENT AVENUE",
    data: 1019700051
  },
  {
    value: "100 COOPER STREET",
    data: 1022420026
  },
  {
    value: "100 COOPER STREET",
    data: 1022420026
  },
  {
    value: "100 DELANCEY STREET",
    data: 1004100071
  },
  {
    value: "100 DELANCEY STREET",
    data: 1004100071
  },
  {
    value: "100 EAST 101 STREET",
    data: 1016280072
  },
  {
    value: "100 EAST 111 STREET",
    data: 1016380001
  },
  {
    value: "100 EAST 116 STREET",
    data: 1016430071
  },
  {
    value: "100 EAST 117 STREET",
    data: 1016440070
  },
  {
    value: "100 EAST 118 STREET",
    data: 1016450070
  },
  {
    value: "100 EAST 118 STREET",
    data: 1016450070
  },
  {
    value: "100 EAST 120 STREET",
    data: 1017680070
  },
  {
    value: "100 EAST 122 STREET",
    data: 1017700071
  },
  {
    value: "100 EAST 123 STREET",
    data: 1017710072
  },
  {
    value: "100 EAST 128 STREET",
    data: 1017750170
  },
  {
    value: "100 EAST 4 STREET",
    data: 1004450016
  },
  {
    value: "100 EAST 42 STREET",
    data: 1012960001
  },
  {
    value: "100 EAST 45 STREET",
    data: 1012800090
  },
  {
    value: "100 EAST 45 STREET",
    data: 1012809090
  },
  {
    value: "100 EAST 7 STREET",
    data: 1004340014
  },
  {
    value: "100 EAST 7 STREET",
    data: 1004340014
  },
  {
    value: "100 EAST END AVENUE",
    data: 1015810023
  },
  {
    value: "100 EDGECOMBE AVENUE",
    data: 1020420001
  },
  {
    value: "100 FORSYTH STREET",
    data: 1004180032
  },
  {
    value: "100 FORSYTH STREET",
    data: 1004180032
  },
  {
    value: "100 FT WASHINGTON AVENUE",
    data: 1021370119
  },
  {
    value: "100 FT WASHINGTON AVENUE",
    data: 1021370119
  },
  {
    value: "100 GOLD STREET",
    data: 1000940025
  },
  {
    value: "100 GRAND STREET",
    data: 1004740022
  },
  {
    value: "100 GREENE STREET",
    data: 1004990005
  },
  {
    value: "100 GREENWICH AVENUE",
    data: 1006170031
  },
  {
    value: "100 HAVEN AVENUE",
    data: 1021390250
  },
  {
    value: "100 HILLSIDE AVENUE",
    data: 1021730001
  },
  {
    value: "100 HUDSON STREET",
    data: 1001790056
  },
  {
    value: "100 HUDSON STREET",
    data: 1001790056
  },
  {
    value: "100 JANE STREET",
    data: 1006410017
  },
  {
    value: "100 JANE STREET",
    data: 1006410017
  },
  {
    value: "100 LENOX AVENUE",
    data: 1015990001
  },
  {
    value: "100 LENOX AVENUE",
    data: 1015990001
  },
  {
    value: "100 LEXINGTON AVENUE",
    data: 1008830020
  },
  {
    value: "100 LEXINGTON AVENUE",
    data: 1008830020
  },
  {
    value: "100 MADISON STREET",
    data: 1002760039
  },
  {
    value: "100 MADISON STREET",
    data: 1002760039
  },
  {
    value: "100 MAIDEN LANE",
    data: 1000420001
  },
  {
    value: "100 MORNINGSIDE DRIVE",
    data: 1019630016
  },
  {
    value: "100 MORNINGSIDE DRIVE",
    data: 1019630016
  },
  {
    value: "100 MOTT STREET",
    data: 1002040004
  },
  {
    value: "100 NORFOLK STREET",
    data: 1003530047
  },
  {
    value: "100 NORFOLK STREET",
    data: 1003530047
  },
  {
    value: "100 OLD SLIP",
    data: 1000340037
  },
  {
    value: "100 ORCHARD STREET",
    data: 1004097501
  },
  {
    value: "100 OVERLOOK TERRACE",
    data: 1021800450
  },
  {
    value: "100 OVERLOOK TERRACE",
    data: 1021800450
  },
  {
    value: "100 PARK AVENUE",
    data: 1012750027
  },
  {
    value: "100 PARK ROW",
    data: 1001590060
  },
  {
    value: "100 POST AVENUE",
    data: 1022220041
  },
  {
    value: "100 POST AVENUE",
    data: 1022220041
  },
  {
    value: "100 PRINCE STREET",
    data: 1004990017
  },
  {
    value: "100 READE STREET",
    data: 1001467501
  },
  {
    value: "100 RIVERSIDE BOULEVARD",
    data: 1011717505
  },
  {
    value: "100 RIVERSIDE BOULEVARD",
    data: 1011717505
  },
  {
    value: "100 RIVERSIDE DRIVE",
    data: 1012450003
  },
  {
    value: "100 RIVERSIDE DRIVE",
    data: 1012450003
  },
  {
    value: "100 RIVINGTON STREET",
    data: 1004110075
  },
  {
    value: "100 RIVINGTON STREET",
    data: 1004110075
  },
  {
    value: "100 SEAMAN AVENUE",
    data: 1022480117
  },
  {
    value: "100 SEAMAN AVENUE",
    data: 1022480117
  },
  {
    value: "100 ST MARKS PLACE",
    data: 1004350014
  },
  {
    value: "100 ST MARKS PLACE",
    data: 1004350014
  },
  {
    value: "100 ST NICHOLAS AVENUE",
    data: 1018250001
  },
  {
    value: "100 ST NICHOLAS AVENUE",
    data: 1018250001
  },
  {
    value: "100 STANTON STREET",
    data: 1004120036
  },
  {
    value: "100 STANTON STREET",
    data: 1004120036
  },
  {
    value: "100 SUFFOLK STREET",
    data: 1003480003
  },
  {
    value: "100 SUFFOLK STREET",
    data: 1003480003
  },
  {
    value: "100 SULLIVAN STREET",
    data: 1005040036
  },
  {
    value: "100 SULLIVAN STREET",
    data: 1005040036
  },
  {
    value: "100 UNITED NATIONS PLAZA",
    data: 1013417503
  },
  {
    value: "100 UNITED NATIONS PLAZA",
    data: 1013417503
  },
  {
    value: "100 VANDAM STREET",
    data: 1005970007
  },
  {
    value: "100 WALL STREET",
    data: 1000380001
  },
  {
    value: "100 WEST 119 STREET",
    data: 1019037501
  },
  {
    value: "100 WEST 119 STREET",
    data: 1019037501
  },
  {
    value: "100 WEST 121 STREET",
    data: 1019050036
  },
  {
    value: "100 WEST 121 STREET",
    data: 1019050036
  },
  {
    value: "100 WEST 124 STREET",
    data: 1019080035
  },
  {
    value: "100 WEST 125 STREET",
    data: 1019090033
  },
  {
    value: "100 WEST 138 STREET",
    data: 1020060036
  },
  {
    value: "100 WEST 138 STREET",
    data: 1020060036
  },
  {
    value: "100 WEST 141 STREET",
    data: 1020090033
  },
  {
    value: "100 WEST 141 STREET",
    data: 1020090033
  },
  {
    value: "100 WEST 142 STREET",
    data: 1020100036
  },
  {
    value: "100 WEST 142 STREET",
    data: 1020100036
  },
  {
    value: "100 WEST 143 STREET",
    data: 1020110036
  },
  {
    value: "100 WEST 143 STREET",
    data: 1020110036
  },
  {
    value: "100 WEST 18 STREET",
    data: 1007937507
  },
  {
    value: "100 WEST 18 STREET",
    data: 1007937507
  },
  {
    value: "100 WEST 3 STREET",
    data: 1005400023
  },
  {
    value: "100 WEST 3 STREET",
    data: 1005400023
  },
  {
    value: "100 WEST 39 STREET",
    data: 1008147501
  },
  {
    value: "100 WEST 58 STREET",
    data: 1010107505
  },
  {
    value: "100 WEST 58 STREET",
    data: 1010107505
  },
  {
    value: "100 WEST 67 STREET",
    data: 1011380036
  },
  {
    value: "100 WEST 67 STREET",
    data: 1011380036
  },
  {
    value: "100 WEST 69 STREET",
    data: 1011400033
  },
  {
    value: "100 WEST 69 STREET",
    data: 1011400033
  },
  {
    value: "100 WEST 71 STREET",
    data: 1011420033
  },
  {
    value: "100 WEST 71 STREET",
    data: 1011420033
  },
  {
    value: "100 WEST 72 STREET",
    data: 1011437503
  },
  {
    value: "100 WEST 72 STREET",
    data: 1011437503
  },
  {
    value: "100 WEST 73 STREET",
    data: 1011440033
  },
  {
    value: "100 WEST 73 STREET",
    data: 1011440033
  },
  {
    value: "100 WEST 74 STREET",
    data: 1011450033
  },
  {
    value: "100 WEST 74 STREET",
    data: 1011450033
  },
  {
    value: "100 WEST 81 STREET",
    data: 1012110135
  },
  {
    value: "100 WEST 81 STREET",
    data: 1012110135
  },
  {
    value: "100 WEST 86 STREET",
    data: 1012160033
  },
  {
    value: "100 WEST 86 STREET",
    data: 1012160033
  },
  {
    value: "100 WEST 89 STREET",
    data: 1012197501
  },
  {
    value: "100 WEST 92 STREET",
    data: 1012229029
  },
  {
    value: "100 WEST 93 STREET",
    data: 1012237503
  },
  {
    value: "100 WEST 93 STREET",
    data: 1012237503
  },
  {
    value: "100 WEST 94 STREET",
    data: 1012240029
  },
  {
    value: "100 WEST 94 STREET",
    data: 1012240029
  },
  {
    value: "100 WEST HOUSTON STREET",
    data: 1005250061
  },
  {
    value: "100 WILLIAM STREET",
    data: 1000680036
  },
  {
    value: "100 WOOSTER STREET",
    data: 1005000001
  },
  {
    value: "1000 5 AVENUE",
    data: 1011110001
  },
  {
    value: "1000 AVENUE OF THE AMER",
    data: 1008390001
  },
  {
    value: "1000 AVENUE OF THE AMER",
    data: 1008399001
  },
  {
    value: "1000 MADISON AVENUE",
    data: 1013920056
  },
  {
    value: "1000 PARK AVENUE",
    data: 1014960034
  },
  {
    value: "1000 PARK AVENUE",
    data: 1014960034
  },
  {
    value: "1000 ST NICHOLAS AVENUE",
    data: 1021090055
  },
  {
    value: "1001 3 AVENUE",
    data: 1014140048
  },
  {
    value: "1001 5 AVENUE",
    data: 1014930072
  },
  {
    value: "1001 5 AVENUE",
    data: 1014930072
  },
  {
    value: "1001 AVENUE OF THE AMER",
    data: 1008130031
  },
  {
    value: "1001 COLUMBUS AVENUE",
    data: 1018450002
  },
  {
    value: "1001 PARK AVENUE",
    data: 1015130001
  },
  {
    value: "1001 PARK AVENUE",
    data: 1015130001
  },
  {
    value: "1001 ST NICHOLAS AVENUE",
    data: 1021090016
  },
  {
    value: "1001 ST NICHOLAS AVENUE",
    data: 1021090016
  },
  {
    value: "1002 MADISON AVENUE",
    data: 1013920057
  },
  {
    value: "1003 2 AVENUE",
    data: 1013270021
  },
  {
    value: "1003 COLUMBUS AVENUE",
    data: 1018450003
  },
  {
    value: "1003 LEXINGTON AVENUE",
    data: 1014070020
  },
  {
    value: "1003 LEXINGTON AVENUE",
    data: 1014070020
  },
  {
    value: "1004 2 AVENUE",
    data: 1013460001
  },
  {
    value: "1004 2 AVENUE",
    data: 1013460001
  },
  {
    value: "1004 LEXINGTON AVENUE",
    data: 1014070016
  },
  {
    value: "1004 LEXINGTON AVENUE",
    data: 1014070016
  },
  {
    value: "1004 ST NICHOLAS AVENUE",
    data: 1021090057
  },
  {
    value: "1005 1 AVENUE",
    data: 1013480023
  },
  {
    value: "1005 2 AVENUE",
    data: 1013270022
  },
  {
    value: "1006 AVENUE OF THE AMER",
    data: 1008390004
  },
  {
    value: "1006 AVENUE OF THE AMER",
    data: 1008399004
  },
  {
    value: "1006 MADISON AVENUE",
    data: 1013920058
  },
  {
    value: "1007 2 AVENUE",
    data: 1013270122
  },
  {
    value: "1007 LEXINGTON AVENUE",
    data: 1014070153
  },
  {
    value: "1008 AVENUE OF THE AMER",
    data: 1008390005
  },
  {
    value: "1008 AVENUE OF THE AMER",
    data: 1008399005
  },
  {
    value: "1008 MADISON AVENUE",
    data: 1013920059
  },
  {
    value: "1009 2 AVENUE",
    data: 1013270023
  },
  {
    value: "1009 3 AVENUE",
    data: 1014140045
  },
  {
    value: "1009 5 AVENUE",
    data: 1014930069
  },
  {
    value: "1009 MADISON AVENUE",
    data: 1013927501
  },
  {
    value: "1009 PARK AVENUE",
    data: 1015130070
  },
  {
    value: "1009 PARK AVENUE",
    data: 1015130070
  },
  {
    value: "100A WEST 130 STREET",
    data: 1019140036
  },
  {
    value: "101 1 AVENUE",
    data: 1004480033
  },
  {
    value: "101 2 AVENUE",
    data: 1004610028
  },
  {
    value: "101 2 AVENUE",
    data: 1004610028
  },
  {
    value: "101 5 AVENUE",
    data: 1008460002
  },
  {
    value: "101 7 AVENUE",
    data: 1007927504
  },
  {
    value: "101 7 AVENUE",
    data: 1007927504
  },
  {
    value: "101 7 AVENUE SOUTH",
    data: 1005910019
  },
  {
    value: "101 ALLEN STREET",
    data: 1004147501
  },
  {
    value: "101 ALLEN STREET",
    data: 1004147501
  },
  {
    value: "101 AUDUBON AVENUE",
    data: 1021270029
  },
  {
    value: "101 AUDUBON AVENUE",
    data: 1021270029
  },
  {
    value: "101 AVENUE A",
    data: 1004340033
  },
  {
    value: "101 AVENUE D",
    data: 1003777503
  },
  {
    value: "101 AVENUE D",
    data: 1003777503
  },
  {
    value: "101 BOWERY",
    data: 1003040004
  },
  {
    value: "101 BROAD STREET",
    data: 1000070033
  },
  {
    value: "101 CENTRAL PARK WEST",
    data: 1011230029
  },
  {
    value: "101 CENTRAL PARK WEST",
    data: 1011230029
  },
  {
    value: "101 CHARLES STREET",
    data: 1006210029
  },
  {
    value: "101 CHARLES STREET",
    data: 1006210029
  },
  {
    value: "101 CLINTON STREET",
    data: 1003480029
  },
  {
    value: "101 CLINTON STREET",
    data: 1003480029
  },
  {
    value: "101 CROSBY STREET",
    data: 1004960012
  },
  {
    value: "101 DELANCEY STREET",
    data: 1004090043
  },
  {
    value: "101 DELANCEY STREET",
    data: 1004090043
  },
  {
    value: "101 DUANE STREET",
    data: 1001510001
  },
  {
    value: "101 DYCKMAN STREET",
    data: 1022170051
  },
  {
    value: "101 DYCKMAN STREET",
    data: 1022170051
  },
  {
    value: "101 EAST 100 STREET",
    data: 1016280001
  },
  {
    value: "101 EAST 101 STREET",
    data: 1016290001
  },
  {
    value: "101 EAST 102 STREET",
    data: 1016300001
  },
  {
    value: "101 EAST 103 STREET",
    data: 1016310001
  },
  {
    value: "101 EAST 105 STREET",
    data: 1016330001
  },
  {
    value: "101 EAST 105 STREET",
    data: 1016330001
  },
  {
    value: "101 EAST 106 STREET",
    data: 1016340001
  },
  {
    value: "101 EAST 115 STREET",
    data: 1016430001
  },
  {
    value: "101 EAST 115 STREET",
    data: 1016430001
  },
  {
    value: "101 EAST 116 STREET",
    data: 1016440001
  },
  {
    value: "101 EAST 116 STREET",
    data: 1016440001
  },
  {
    value: "101 EAST 119 STREET",
    data: 1017680001
  },
  {
    value: "101 EAST 119 STREET",
    data: 1017680001
  },
  {
    value: "101 EAST 123 STREET",
    data: 1017720001
  },
  {
    value: "101 EAST 57 STREET",
    data: 1013120070
  },
  {
    value: "101 EAST 63 STREET",
    data: 1013980005
  },
  {
    value: "101 EAST 7 STREET",
    data: 1004350052
  },
  {
    value: "101 EAST BROADWAY",
    data: 1002820027
  },
  {
    value: "101 EAST BROADWAY",
    data: 1002820027
  },
  {
    value: "101 HAMILTON PLACE",
    data: 1020730041
  },
  {
    value: "101 LAFAYETTE STREET",
    data: 1001970007
  },
  {
    value: "101 LEONARD STREET",
    data: 1001717503
  },
  {
    value: "101 LEXINGTON AVENUE",
    data: 1008830027
  },
  {
    value: "101 LEXINGTON AVENUE",
    data: 1008830027
  },
  {
    value: "101 LUDLOW STREET",
    data: 1004107501
  },
  {
    value: "101 MAC DOUGAL STREET",
    data: 1005420050
  },
  {
    value: "101 MAC DOUGAL STREET",
    data: 1005420050
  },
  {
    value: "101 MACOMBS PLACE",
    data: 1020400023
  },
  {
    value: "101 MADISON STREET",
    data: 1002770014
  },
  {
    value: "101 MANHATTAN AVENUE",
    data: 1018400013
  },
  {
    value: "101 MOTT STREET",
    data: 1002050028
  },
  {
    value: "101 MURRAY STREET",
    data: 1001420100
  },
  {
    value: "101 ORCHARD STREET",
    data: 1004140054
  },
  {
    value: "101 ORCHARD STREET",
    data: 1004140054
  },
  {
    value: "101 PARK AVENUE",
    data: 1012950001
  },
  {
    value: "101 POST AVENUE",
    data: 1022190001
  },
  {
    value: "101 POST AVENUE",
    data: 1022190001
  },
  {
    value: "101 PRINCE STREET",
    data: 1005130036
  },
  {
    value: "101 RIVINGTON STREET",
    data: 1004100046
  },
  {
    value: "101 RIVINGTON STREET",
    data: 1004100046
  },
  {
    value: "101 SPRING STREET",
    data: 1004980027
  },
  {
    value: "101 ST MARKS PLACE",
    data: 1004360050
  },
  {
    value: "101 ST MARKS PLACE",
    data: 1004360050
  },
  {
    value: "101 STANTON STREET",
    data: 1004110018
  },
  {
    value: "101 STANTON STREET",
    data: 1004110018
  },
  {
    value: "101 THOMPSON STREET",
    data: 1005030028
  },
  {
    value: "101 THOMPSON STREET",
    data: 1005030028
  },
  {
    value: "101 VERMILYEA AVENUE",
    data: 1022260001
  },
  {
    value: "101 VERMILYEA AVENUE",
    data: 1022260001
  },
  {
    value: "101 WALL STREET",
    data: 1000337501
  },
  {
    value: "101 WEST 10 STREET",
    data: 1006060073
  },
  {
    value: "101 WEST 104 STREET",
    data: 1018590031
  },
  {
    value: "101 WEST 104 STREET",
    data: 1018590031
  },
  {
    value: "101 WEST 117 STREET",
    data: 1019027501
  },
  {
    value: "101 WEST 12 STREET",
    data: 1006080039
  },
  {
    value: "101 WEST 12 STREET",
    data: 1006080039
  },
  {
    value: "101 WEST 121 STREET",
    data: 1019060028
  },
  {
    value: "101 WEST 138 STREET",
    data: 1020070028
  },
  {
    value: "101 WEST 23 STREET",
    data: 1007990035
  },
  {
    value: "101 WEST 23 STREET",
    data: 1007990035
  },
  {
    value: "101 WEST 24 STREET",
    data: 1008007504
  },
  {
    value: "101 WEST 24 STREET",
    data: 1008007504
  },
  {
    value: "101 WEST 27 STREET",
    data: 1008030034
  },
  {
    value: "101 WEST 69 STREET",
    data: 1011410032
  },
  {
    value: "101 WEST 69 STREET",
    data: 1011410032
  },
  {
    value: "101 WEST 70 STREET",
    data: 1011420032
  },
  {
    value: "101 WEST 70 STREET",
    data: 1011420032
  },
  {
    value: "101 WEST 71 STREET",
    data: 1011430031
  },
  {
    value: "101 WEST 72 STREET",
    data: 1011440032
  },
  {
    value: "101 WEST 73 STREET",
    data: 1011450032
  },
  {
    value: "101 WEST 73 STREET",
    data: 1011450032
  },
  {
    value: "101 WEST 77 STREET",
    data: 1011490031
  },
  {
    value: "101 WEST 77 STREET",
    data: 1011490031
  },
  {
    value: "101 WEST 78 STREET",
    data: 1011507505
  },
  {
    value: "101 WEST 78 STREET",
    data: 1011507505
  },
  {
    value: "101 WEST 79 STREET",
    data: 1012107501
  },
  {
    value: "101 WEST 81 STREET",
    data: 1012127501
  },
  {
    value: "101 WEST 81 STREET",
    data: 1012127501
  },
  {
    value: "101 WEST 85 STREET",
    data: 1012160027
  },
  {
    value: "101 WEST 85 STREET",
    data: 1012160027
  },
  {
    value: "101 WEST 86 STREET",
    data: 1012170035
  },
  {
    value: "101 WEST 86 STREET",
    data: 1012170035
  },
  {
    value: "101 WEST 87 STREET",
    data: 1012187501
  },
  {
    value: "101 WEST 87 STREET",
    data: 1012187501
  },
  {
    value: "101 WEST END AVENUE",
    data: 1011710061
  },
  {
    value: "101 WEST END AVENUE",
    data: 1011710062
  },
  {
    value: "101 WEST END AVENUE",
    data: 1011710162
  },
  {
    value: "101 WEST END AVENUE",
    data: 1011710062
  },
  {
    value: "101 WOOSTER STREET",
    data: 1005010028
  },
  {
    value: "1010 3 AVENUE",
    data: 1013957501
  },
  {
    value: "1010 3 AVENUE",
    data: 1013957501
  },
  {
    value: "1010 5 AVENUE",
    data: 1014940001
  },
  {
    value: "1010 5 AVENUE",
    data: 1014940001
  },
  {
    value: "1010 PARK AVENUE",
    data: 1014967502
  },
  {
    value: "1011 AVENUE OF THE AMER",
    data: 1008130036
  },
  {
    value: "1011 MADISON AVENUE",
    data: 1013930023
  },
  {
    value: "1012 AMSTERDAM AVENUE",
    data: 1018810035
  },
  {
    value: "1012 AMSTERDAM AVENUE",
    data: 1018810035
  },
  {
    value: "1012 LEXINGTON AVENUE",
    data: 1014070056
  },
  {
    value: "1012 MADISON AVENUE",
    data: 1013930014
  },
  {
    value: "1013 AVENUE OF THE AMER",
    data: 1008130037
  },
  {
    value: "1014 5 AVENUE",
    data: 1014940072
  },
  {
    value: "1014 LEXINGTON AVENUE",
    data: 1014070156
  },
  {
    value: "1015 AVENUE OF THE AMER",
    data: 1008130038
  },
  {
    value: "1015 MADISON AVENUE",
    data: 1013930021
  },
  {
    value: "1015 PARK AVENUE",
    data: 1015130069
  },
  {
    value: "1016 5 AVENUE",
    data: 1014940069
  },
  {
    value: "1016 5 AVENUE",
    data: 1014940069
  },
  {
    value: "1016 LEXINGTON AVENUE",
    data: 1014070057
  },
  {
    value: "1016 MADISON AVENUE",
    data: 1013930016
  },
  {
    value: "1016 ST NICHOLAS AVENUE",
    data: 1021090081
  },
  {
    value: "1017 AVENUE OF THE AMER",
    data: 1008130039
  },
  {
    value: "1017 LEXINGTON AVENUE",
    data: 1014070051
  },
  {
    value: "1017 LEXINGTON AVENUE",
    data: 1014070051
  },
  {
    value: "1018 LEXINGTON AVENUE",
    data: 1014070058
  },
  {
    value: "1018 MADISON AVENUE",
    data: 1013930017
  },
  {
    value: "1019 LEXINGTON AVENUE",
    data: 1014080020
  },
  {
    value: "1019 LEXINGTON AVENUE",
    data: 1014080020
  },
  {
    value: "101A WEST 136 STREET",
    data: 1019210128
  },
  {
    value: "101B EAST 97 STREET",
    data: 1016250101
  },
  {
    value: "101C EAST 97 STREET",
    data: 1016250102
  },
  {
    value: "102 1 AVENUE",
    data: 1004347503
  },
  {
    value: "102 2 AVENUE",
    data: 1004470008
  },
  {
    value: "102 3 AVENUE",
    data: 1005580029
  },
  {
    value: "102 4 AVENUE",
    data: 1005570030
  },
  {
    value: "102 8 AVENUE",
    data: 1007650001
  },
  {
    value: "102 8 AVENUE",
    data: 1007650001
  },
  {
    value: "102 AVENUE B",
    data: 1004020039
  },
  {
    value: "102 AVENUE C",
    data: 1003760007
  },
  {
    value: "102 AVENUE C",
    data: 1003760007
  },
  {
    value: "102 BAYARD STREET",
    data: 1001990031
  },
  {
    value: "102 BAYARD STREET",
    data: 1001990031
  },
  {
    value: "102 BEDFORD STREET",
    data: 1005880042
  },
  {
    value: "102 BOWERY",
    data: 1002390031
  },
  {
    value: "102 BRADHURST AVENUE",
    data: 1020457502
  },
  {
    value: "102 BRADHURST AVENUE",
    data: 1020457502
  },
  {
    value: "102 BROAD STREET",
    data: 1000080044
  },
  {
    value: "102 CANAL STREET",
    data: 1002920013
  },
  {
    value: "102 CHAMBERS STREET",
    data: 1001350014
  },
  {
    value: "102 CHAMBERS STREET",
    data: 1001350014
  },
  {
    value: "102 CHARLES STREET",
    data: 1006200018
  },
  {
    value: "102 CHARLTON STREET",
    data: 1005970050
  },
  {
    value: "102 CONVENT AVENUE",
    data: 1019700055
  },
  {
    value: "102 CONVENT AVENUE",
    data: 1019700055
  },
  {
    value: "102 EAST 10 STREET",
    data: 1004650009
  },
  {
    value: "102 EAST 101 STREET",
    data: 1016280171
  },
  {
    value: "102 EAST 103 STREET",
    data: 1016300072
  },
  {
    value: "102 EAST 103 STREET",
    data: 1016300072
  },
  {
    value: "102 EAST 104 STREET",
    data: 1016310072
  },
  {
    value: "102 EAST 104 STREET",
    data: 1016310072
  },
  {
    value: "102 EAST 120 STREET",
    data: 1017680169
  },
  {
    value: "102 EAST 123 STREET",
    data: 1017710071
  },
  {
    value: "102 EAST 124 STREET",
    data: 1017720070
  },
  {
    value: "102 EAST 126 STREET",
    data: 1017740068
  },
  {
    value: "102 EAST 22 STREET",
    data: 1008770084
  },
  {
    value: "102 EAST 22 STREET",
    data: 1008770084
  },
  {
    value: "102 EAST 30 STREET",
    data: 1008850087
  },
  {
    value: "102 EAST 31 STREET",
    data: 1008860086
  },
  {
    value: "102 EAST 31 STREET",
    data: 1008860086
  },
  {
    value: "102 EAST 4 STREET",
    data: 1004450017
  },
  {
    value: "102 EAST 7 STREET",
    data: 1004340015
  },
  {
    value: "102 EAST 86 STREET",
    data: 1015140068
  },
  {
    value: "102 EDGECOMBE AVENUE",
    data: 1020420101
  },
  {
    value: "102 FORSYTH STREET",
    data: 1004180033
  },
  {
    value: "102 FORSYTH STREET",
    data: 1004180033
  },
  {
    value: "102 FRANKLIN STREET",
    data: 1001780004
  },
  {
    value: "102 FULTON STREET",
    data: 1000787506
  },
  {
    value: "102 FULTON STREET",
    data: 1000787506
  },
  {
    value: "102 GREENE STREET",
    data: 1004990006
  },
  {
    value: "102 GREENWICH AVENUE",
    data: 1006170032
  },
  {
    value: "102 GREENWICH AVENUE",
    data: 1006170032
  },
  {
    value: "102 GREENWICH STREET",
    data: 1000530037
  },
  {
    value: "102 JOHN STREET",
    data: 1000690050
  },
  {
    value: "102 LEXINGTON AVENUE",
    data: 1008830021
  },
  {
    value: "102 MADISON AVENUE",
    data: 1008590015
  },
  {
    value: "102 MADISON STREET",
    data: 1002767501
  },
  {
    value: "102 MADISON STREET",
    data: 1002767501
  },
  {
    value: "102 MOTT STREET",
    data: 1002040005
  },
  {
    value: "102 MOTT STREET",
    data: 1002040005
  },
  {
    value: "102 MULBERRY STREET",
    data: 1002050002
  },
  {
    value: "102 NORFOLK STREET",
    data: 1003530049
  },
  {
    value: "102 NORFOLK STREET",
    data: 1003530049
  },
  {
    value: "102 NORTH END AVENUE",
    data: 1000167512
  },
  {
    value: "102 ST MARKS PLACE",
    data: 1004350015
  },
  {
    value: "102 ST MARKS PLACE",
    data: 1004350015
  },
  {
    value: "102 SUFFOLK STREET",
    data: 1003480004
  },
  {
    value: "102 SUFFOLK STREET",
    data: 1003480004
  },
  {
    value: "102 WEST 107 STREET",
    data: 1018610037
  },
  {
    value: "102 WEST 109 STREET",
    data: 1018630037
  },
  {
    value: "102 WEST 109 STREET",
    data: 1018630037
  },
  {
    value: "102 WEST 114 STREET",
    data: 1018230037
  },
  {
    value: "102 WEST 118 STREET",
    data: 1019020037
  },
  {
    value: "102 WEST 119 STREET",
    data: 1019030038
  },
  {
    value: "102 WEST 119 STREET",
    data: 1019030038
  },
  {
    value: "102 WEST 120 STREET",
    data: 1019040037
  },
  {
    value: "102 WEST 121 STREET",
    data: 1019050037
  },
  {
    value: "102 WEST 123 STREET",
    data: 1019070037
  },
  {
    value: "102 WEST 128 STREET",
    data: 1019120037
  },
  {
    value: "102 WEST 129 STREET",
    data: 1019130035
  },
  {
    value: "102 WEST 130 STREET",
    data: 1019140136
  },
  {
    value: "102 WEST 132 STREET",
    data: 1019160037
  },
  {
    value: "102 WEST 133 STREET",
    data: 1019170037
  },
  {
    value: "102 WEST 134 STREET",
    data: 1019180038
  },
  {
    value: "102 WEST 134 STREET",
    data: 1019180038
  },
  {
    value: "102 WEST 137 STREET",
    data: 1019210037
  },
  {
    value: "102 WEST 138 STREET",
    data: 1020060037
  },
  {
    value: "102 WEST 138 STREET",
    data: 1020060037
  },
  {
    value: "102 WEST 14 STREET",
    data: 1006090037
  },
  {
    value: "102 WEST 142 STREET",
    data: 1020100038
  },
  {
    value: "102 WEST 142 STREET",
    data: 1020100038
  },
  {
    value: "102 WEST 143 STREET",
    data: 1020110038
  },
  {
    value: "102 WEST 143 STREET",
    data: 1020110038
  },
  {
    value: "102 WEST 144 STREET",
    data: 1020120038
  },
  {
    value: "102 WEST 29 STREET",
    data: 1008040043
  },
  {
    value: "102 WEST 38 STREET",
    data: 1008130040
  },
  {
    value: "102 WEST 57 STREET",
    data: 1010090037
  },
  {
    value: "102 WEST 71 STREET",
    data: 1011420034
  },
  {
    value: "102 WEST 73 STREET",
    data: 1011440034
  },
  {
    value: "102 WEST 74 STREET",
    data: 1011450034
  },
  {
    value: "102 WEST 74 STREET",
    data: 1011450034
  },
  {
    value: "102 WEST 75 STREET",
    data: 1011467501
  },
  {
    value: "102 WEST 76 STREET",
    data: 1011470034
  },
  {
    value: "102 WEST 79 STREET",
    data: 1011500035
  },
  {
    value: "102 WEST 79 STREET",
    data: 1011500035
  },
  {
    value: "102 WEST 80 STREET",
    data: 1012100037
  },
  {
    value: "102 WEST 80 STREET",
    data: 1012100037
  },
  {
    value: "102 WEST 85 STREET",
    data: 1012150035
  },
  {
    value: "102 WEST 85 STREET",
    data: 1012150035
  },
  {
    value: "102 WEST 86 STREET",
    data: 1012160034
  },
  {
    value: "102 WEST 87 STREET",
    data: 1012170136
  },
  {
    value: "102 WEST 91 STREET",
    data: 1012210038
  },
  {
    value: "102 WEST 91 STREET",
    data: 1012210038
  },
  {
    value: "102 WOOSTER STREET",
    data: 1005007504
  },
  {
    value: "1020 3 AVENUE",
    data: 1013950037
  },
  {
    value: "1020 3 AVENUE",
    data: 1013950037
  },
  {
    value: "1020 5 AVENUE",
    data: 1014950001
  },
  {
    value: "1020 5 AVENUE",
    data: 1014950001
  },
  {
    value: "1020 AMSTERDAM AVENUE",
    data: 1018820028
  },
  {
    value: "1020 AMSTERDAM AVENUE",
    data: 1018820028
  },
  {
    value: "1020 AVENUE OF THE AMER",
    data: 1008400001
  },
  {
    value: "1020 LEXINGTON AVENUE",
    data: 1014070158
  },
  {
    value: "1020 MADISON AVENUE",
    data: 1013930018
  },
  {
    value: "1020 PARK AVENUE",
    data: 1014970034
  },
  {
    value: "1020 PARK AVENUE",
    data: 1014970034
  },
  {
    value: "1021 AMSTERDAM AVENUE",
    data: 1018650001
  },
  {
    value: "1021 PARK AVENUE",
    data: 1015140001
  },
  {
    value: "1021 PARK AVENUE",
    data: 1015140001
  },
  {
    value: "1022 3 AVENUE",
    data: 1013950038
  },
  {
    value: "1022 3 AVENUE",
    data: 1013950038
  },
  {
    value: "1022 LEXINGTON AVENUE",
    data: 1014070059
  },
  {
    value: "1022 MADISON AVENUE",
    data: 1013930056
  },
  {
    value: "1024 2 AVENUE",
    data: 1013470001
  },
  {
    value: "1024 AVENUE OF THE AMER",
    data: 1008400003
  },
  {
    value: "1024 LEXINGTON AVENUE",
    data: 1014080016
  },
  {
    value: "1025 5 AVENUE",
    data: 1014950004
  },
  {
    value: "1025 5 AVENUE",
    data: 1014950004
  },
  {
    value: "1025 AVENUE OF THE AMER",
    data: 1008140036
  },
  {
    value: "1025 PARK AVENUE",
    data: 1015140003
  },
  {
    value: "1026 1 AVENUE",
    data: 1013680001
  },
  {
    value: "1026 1 AVENUE",
    data: 1013680001
  },
  {
    value: "1026 2 AVENUE",
    data: 1013470002
  },
  {
    value: "1026 3 AVENUE",
    data: 1013950039
  },
  {
    value: "1026 5 AVENUE",
    data: 1014950072
  },
  {
    value: "1026 AVENUE OF THE AMER",
    data: 1008400004
  },
  {
    value: "1026 ST NICHOLAS AVENUE",
    data: 1021090088
  },
  {
    value: "1026 ST NICHOLAS AVENUE",
    data: 1021090088
  },
  {
    value: "1027 5 AVENUE",
    data: 1014950070
  },
  {
    value: "1027 AVENUE OF THE AMER",
    data: 1008140037
  },
  {
    value: "1028 2 AVENUE",
    data: 1013470102
  },
  {
    value: "1028 3 AVENUE",
    data: 1013950040
  },
  {
    value: "1028 3 AVENUE",
    data: 1013950040
  },
  {
    value: "1028 5 AVENUE",
    data: 1014950069
  },
  {
    value: "1028 AMSTERDAM AVENUE",
    data: 1018820036
  },
  {
    value: "1028 AMSTERDAM AVENUE",
    data: 1018820036
  },
  {
    value: "103 1 AVENUE",
    data: 1004480032
  },
  {
    value: "103 2 AVENUE",
    data: 1004620030
  },
  {
    value: "103 2 AVENUE",
    data: 1004620030
  },
  {
    value: "103 5 AVENUE",
    data: 1008460004
  },
  {
    value: "103 8 AVENUE",
    data: 1007390001
  },
  {
    value: "103 ALLEN STREET",
    data: 1004140019
  },
  {
    value: "103 ALLEN STREET",
    data: 1004140019
  },
  {
    value: "103 AVENUE A",
    data: 1004347501
  },
  {
    value: "103 AVENUE A",
    data: 1004347501
  },
  {
    value: "103 AVENUE B",
    data: 1003890006
  },
  {
    value: "103 BOWERY",
    data: 1003040005
  },
  {
    value: "103 CHARLES STREET",
    data: 1006210030
  },
  {
    value: "103 CHARLES STREET",
    data: 1006210030
  },
  {
    value: "103 CLINTON STREET",
    data: 1003480030
  },
  {
    value: "103 CLINTON STREET",
    data: 1003480030
  },
  {
    value: "103 EAST 10 STREET",
    data: 1004660056
  },
  {
    value: "103 EAST 10 STREET",
    data: 1004660056
  },
  {
    value: "103 EAST 100 STREET",
    data: 1016280002
  },
  {
    value: "103 EAST 101 STREET",
    data: 1016290101
  },
  {
    value: "103 EAST 102 STREET",
    data: 1016300002
  },
  {
    value: "103 EAST 122 STREET",
    data: 1017710005
  },
  {
    value: "103 EAST 125 STREET",
    data: 1017740001
  },
  {
    value: "103 EAST 2 STREET",
    data: 1004290014
  },
  {
    value: "103 EAST 2 STREET",
    data: 1004290014
  },
  {
    value: "103 EAST 29 STREET",
    data: 1008850006
  },
  {
    value: "103 EAST 37 STREET",
    data: 1008930006
  },
  {
    value: "103 EAST 63 STREET",
    data: 1013980006
  },
  {
    value: "103 EAST 63 STREET",
    data: 1013980006
  },
  {
    value: "103 EAST 75 STREET",
    data: 1014100005
  },
  {
    value: "103 EAST 75 STREET",
    data: 1014100005
  },
  {
    value: "103 EAST 77 STREET",
    data: 1014120005
  },
  {
    value: "103 EAST 84 STREET",
    data: 1015130005
  },
  {
    value: "103 EAST 84 STREET",
    data: 1015130005
  },
  {
    value: "103 EAST 86 STREET",
    data: 1015150007
  },
  {
    value: "103 EAST 86 STREET",
    data: 1015150007
  },
  {
    value: "103 EAST 91 STREET",
    data: 1015200104
  },
  {
    value: "103 EAST 97 STREET",
    data: 1016250005
  },
  {
    value: "103 EAST BROADWAY",
    data: 1002820026
  },
  {
    value: "103 ESSEX STREET",
    data: 1004100062
  },
  {
    value: "103 FRANKLIN STREET",
    data: 1001770028
  },
  {
    value: "103 GREENE STREET",
    data: 1005007505
  },
  {
    value: "103 GREENE STREET",
    data: 1005007505
  },
  {
    value: "103 GREENWICH AVENUE",
    data: 1006150081
  },
  {
    value: "103 GREENWICH AVENUE",
    data: 1006150081
  },
  {
    value: "103 HAMILTON PLACE",
    data: 1020730040
  },
  {
    value: "103 LENOX AVENUE",
    data: 1018250029
  },
  {
    value: "103 LENOX AVENUE",
    data: 1018250029
  },
  {
    value: "103 LEXINGTON AVENUE",
    data: 1008830026
  },
  {
    value: "103 LEXINGTON AVENUE",
    data: 1008830026
  },
  {
    value: "103 MAC DOUGAL STREET",
    data: 1005420049
  },
  {
    value: "103 MAC DOUGAL STREET",
    data: 1005420049
  },
  {
    value: "103 MADISON STREET",
    data: 1002770015
  },
  {
    value: "103 MANHATTAN AVENUE",
    data: 1018400014
  },
  {
    value: "103 MOSCO STREET",
    data: 1001640043
  },
  {
    value: "103 MOTT STREET",
    data: 1002057501
  },
  {
    value: "103 NORFOLK STREET",
    data: 1003537501
  },
  {
    value: "103 NORFOLK STREET",
    data: 1003537501
  },
  {
    value: "103 PRINCE STREET",
    data: 1005130039
  },
  {
    value: "103 RIVERSIDE DRIVE",
    data: 1012450001
  },
  {
    value: "103 ST MARKS PLACE",
    data: 1004360048
  },
  {
    value: "103 ST MARKS PLACE",
    data: 1004360048
  },
  {
    value: "103 SULLIVAN STREET",
    data: 1005030004
  },
  {
    value: "103 SULLIVAN STREET",
    data: 1005030004
  },
  {
    value: "103 VERMILYEA AVENUE",
    data: 1022260003
  },
  {
    value: "103 VERMILYEA AVENUE",
    data: 1022260003
  },
  {
    value: "103 WASHINGTON STREET",
    data: 1000530003
  },
  {
    value: "103 WAVERLY PLACE",
    data: 1005537501
  },
  {
    value: "103 WEST 10 STREET",
    data: 1006060074
  },
  {
    value: "103 WEST 104 STREET",
    data: 1018590030
  },
  {
    value: "103 WEST 105 STREET",
    data: 1018600128
  },
  {
    value: "103 WEST 108 STREET",
    data: 1018630026
  },
  {
    value: "103 WEST 111 STREET",
    data: 1018210022
  },
  {
    value: "103 WEST 111 STREET",
    data: 1018210022
  },
  {
    value: "103 WEST 117 STREET",
    data: 1019027504
  },
  {
    value: "103 WEST 118 STREET",
    data: 1019037502
  },
  {
    value: "103 WEST 119 STREET",
    data: 1019047503
  },
  {
    value: "103 WEST 120 STREET",
    data: 1019050026
  },
  {
    value: "103 WEST 120 STREET",
    data: 1019050026
  },
  {
    value: "103 WEST 122 STREET",
    data: 1019070028
  },
  {
    value: "103 WEST 127 STREET",
    data: 1019120026
  },
  {
    value: "103 WEST 127 STREET",
    data: 1019120026
  },
  {
    value: "103 WEST 128 STREET",
    data: 1019130028
  },
  {
    value: "103 WEST 128 STREET",
    data: 1019130028
  },
  {
    value: "103 WEST 130 STREET",
    data: 1019150028
  },
  {
    value: "103 WEST 131 STREET",
    data: 1019160028
  },
  {
    value: "103 WEST 131 STREET",
    data: 1019160028
  },
  {
    value: "103 WEST 132 STREET",
    data: 1019170128
  },
  {
    value: "103 WEST 135 STREET",
    data: 1019200026
  },
  {
    value: "103 WEST 136 STREET",
    data: 1019210028
  },
  {
    value: "103 WEST 137 STREET",
    data: 1020060028
  },
  {
    value: "103 WEST 138 STREET",
    data: 1020070027
  },
  {
    value: "103 WEST 14 STREET",
    data: 1007900028
  },
  {
    value: "103 WEST 14 STREET",
    data: 1007900028
  },
  {
    value: "103 WEST 141 STREET",
    data: 1020100024
  },
  {
    value: "103 WEST 141 STREET",
    data: 1020100024
  },
  {
    value: "103 WEST 25 STREET",
    data: 1008010034
  },
  {
    value: "103 WEST 25 STREET",
    data: 1008010034
  },
  {
    value: "103 WEST 27 STREET",
    data: 1008030033
  },
  {
    value: "103 WEST 28 STREET",
    data: 1008040033
  },
  {
    value: "103 WEST 69 STREET",
    data: 1011410030
  },
  {
    value: "103 WEST 69 STREET",
    data: 1011410030
  },
  {
    value: "103 WEST 70 STREET",
    data: 1011420031
  },
  {
    value: "103 WEST 70 STREET",
    data: 1011420031
  },
  {
    value: "103 WEST 71 STREET",
    data: 1011430130
  },
  {
    value: "103 WEST 72 STREET",
    data: 1011440031
  },
  {
    value: "103 WEST 73 STREET",
    data: 1011450031
  },
  {
    value: "103 WEST 74 STREET",
    data: 1011460028
  },
  {
    value: "103 WEST 75 STREET",
    data: 1011470128
  },
  {
    value: "103 WEST 77 STREET",
    data: 1011490030
  },
  {
    value: "103 WEST 77 STREET",
    data: 1011490030
  },
  {
    value: "103 WEST 78 STREET",
    data: 1011500128
  },
  {
    value: "103 WEST 80 STREET",
    data: 1012110028
  },
  {
    value: "103 WEST 80 STREET",
    data: 1012110028
  },
  {
    value: "103 WEST 82 STREET",
    data: 1012130128
  },
  {
    value: "103 WEST 86 STREET",
    data: 1012170034
  },
  {
    value: "103 WEST 88 STREET",
    data: 1012190029
  },
  {
    value: "103 WEST 89 STREET",
    data: 1012207502
  },
  {
    value: "103 WEST 89 STREET",
    data: 1012207502
  },
  {
    value: "1030 2 AVENUE",
    data: 1013470003
  },
  {
    value: "1030 3 AVENUE",
    data: 1013960033
  },
  {
    value: "1030 3 AVENUE",
    data: 1013960033
  },
  {
    value: "1030 5 AVENUE",
    data: 1014960001
  },
  {
    value: "1031 3 AVENUE",
    data: 1014160001
  },
  {
    value: "1031 3 AVENUE",
    data: 1014160001
  },
  {
    value: "1031 6 AVENUE",
    data: 1008147501
  },
  {
    value: "1031 LEXINGTON AVENUE",
    data: 1014080053
  },
  {
    value: "1032 2 AVENUE",
    data: 1013470004
  },
  {
    value: "1032 AVENUE OF THE AMER",
    data: 1008400087
  },
  {
    value: "1032 LEXINGTON AVENUE",
    data: 1014080056
  },
  {
    value: "1033 5 AVENUE",
    data: 1014960003
  },
  {
    value: "1033 LEXINGTON AVENUE",
    data: 1014090021
  },
  {
    value: "1033 LEXINGTON AVENUE",
    data: 1014090021
  },
  {
    value: "1033 MADISON AVENUE",
    data: 1014910023
  },
  {
    value: "1033 MADISON AVENUE",
    data: 1014910023
  },
  {
    value: "1034 LEXINGTON AVENUE",
    data: 1014080156
  },
  {
    value: "1035 2 AVENUE",
    data: 1013280021
  },
  {
    value: "1035 2 AVENUE",
    data: 1013280021
  },
  {
    value: "1035 5 AVENUE",
    data: 1014960071
  },
  {
    value: "1035 PARK AVENUE",
    data: 1015140069
  },
  {
    value: "1035 PARK AVENUE",
    data: 1015140069
  },
  {
    value: "1036 LEXINGTON AVENUE",
    data: 1014097503
  },
  {
    value: "1036 LEXINGTON AVENUE",
    data: 1014097503
  },
  {
    value: "1036 PARK AVENUE",
    data: 1014970041
  },
  {
    value: "1036 PARK AVENUE",
    data: 1014970041
  },
  {
    value: "1039 MADISON AVENUE",
    data: 1014910121
  },
  {
    value: "104 1 AVENUE",
    data: 1004340003
  },
  {
    value: "104 2 AVENUE",
    data: 1004480001
  },
  {
    value: "104 2 AVENUE",
    data: 1004480001
  },
  {
    value: "104 3 AVENUE",
    data: 1005580028
  },
  {
    value: "104 AUDUBON AVENUE",
    data: 1021270015
  },
  {
    value: "104 AUDUBON AVENUE",
    data: 1021270015
  },
  {
    value: "104 AVENUE B",
    data: 1004020037
  },
  {
    value: "104 BAYARD STREET",
    data: 1001990032
  },
  {
    value: "104 BAYARD STREET",
    data: 1001990032
  },
  {
    value: "104 BEDFORD STREET",
    data: 1005880043
  },
  {
    value: "104 BEDFORD STREET",
    data: 1005880043
  },
  {
    value: "104 BOWERY",
    data: 1002390029
  },
  {
    value: "104 CANAL STREET",
    data: 1002920012
  },
  {
    value: "104 CHARLTON STREET",
    data: 1005977502
  },
  {
    value: "104 CHARLTON STREET",
    data: 1005977502
  },
  {
    value: "104 DELANCEY STREET",
    data: 1004100069
  },
  {
    value: "104 DUANE STREET",
    data: 1001500025
  },
  {
    value: "104 EAST 10 STREET",
    data: 1004650109
  },
  {
    value: "104 EAST 101 STREET",
    data: 1016280071
  },
  {
    value: "104 EAST 116 STREET",
    data: 1016430070
  },
  {
    value: "104 EAST 116 STREET",
    data: 1016430070
  },
  {
    value: "104 EAST 119 STREET",
    data: 1017670169
  },
  {
    value: "104 EAST 120 STREET",
    data: 1017680069
  },
  {
    value: "104 EAST 123 STREET",
    data: 1017710070
  },
  {
    value: "104 EAST 124 STREET",
    data: 1017720069
  },
  {
    value: "104 EAST 126 STREET",
    data: 1017740067
  },
  {
    value: "104 EAST 17 STREET",
    data: 1008720074
  },
  {
    value: "104 EAST 25 STREET",
    data: 1008800084
  },
  {
    value: "104 EAST 30 STREET",
    data: 1008850086
  },
  {
    value: "104 EAST 31 STREET",
    data: 1008860084
  },
  {
    value: "104 EAST 31 STREET",
    data: 1008860084
  },
  {
    value: "104 EAST 35 STREET",
    data: 1008900081
  },
  {
    value: "104 EAST 35 STREET",
    data: 1008900081
  },
  {
    value: "104 EAST 36 STREET",
    data: 1008910086
  },
  {
    value: "104 EAST 37 STREET",
    data: 1008920080
  },
  {
    value: "104 EAST 37 STREET",
    data: 1008920080
  },
  {
    value: "104 EAST 4 STREET",
    data: 1004450018
  },
  {
    value: "104 EAST 4 STREET",
    data: 1004450018
  },
  {
    value: "104 EAST 40 STREET",
    data: 1008957501
  },
  {
    value: "104 EAST 40 STREET",
    data: 1008959085
  },
  {
    value: "104 EAST 7 STREET",
    data: 1004340016
  },
  {
    value: "104 EAST 7 STREET",
    data: 1004340016
  },
  {
    value: "104 EAST 81 STREET",
    data: 1015090066
  },
  {
    value: "104 EAST 81 STREET",
    data: 1015090066
  },
  {
    value: "104 EAST 85 STREET",
    data: 1015130068
  },
  {
    value: "104 EAST 85 STREET",
    data: 1015130068
  },
  {
    value: "104 EAST 98 STREET",
    data: 1016250168
  },
  {
    value: "104 EDGECOMBE AVENUE",
    data: 1020427503
  },
  {
    value: "104 FORSYTH STREET",
    data: 1004180034
  },
  {
    value: "104 FORSYTH STREET",
    data: 1004180034
  },
  {
    value: "104 FRANKLIN STREET",
    data: 1001780005
  },
  {
    value: "104 GRAND STREET",
    data: 1004740021
  },
  {
    value: "104 GREENE STREET",
    data: 1004990007
  },
  {
    value: "104 GREENWICH AVENUE",
    data: 1006170033
  },
  {
    value: "104 HUDSON STREET",
    data: 1001897502
  },
  {
    value: "104 JOHN STREET",
    data: 1000690051
  },
  {
    value: "104 LENOX AVENUE",
    data: 1015990003
  },
  {
    value: "104 LENOX AVENUE",
    data: 1015990003
  },
  {
    value: "104 LEXINGTON AVENUE",
    data: 1008830022
  },
  {
    value: "104 MAC DOUGAL STREET",
    data: 1005400001
  },
  {
    value: "104 MAC DOUGAL STREET",
    data: 1005400001
  },
  {
    value: "104 MADISON STREET",
    data: 1002760037
  },
  {
    value: "104 PERRY STREET",
    data: 1006210010
  },
  {
    value: "104 PERRY STREET",
    data: 1006210010
  },
  {
    value: "104 READE STREET",
    data: 1001467503
  },
  {
    value: "104 READE STREET",
    data: 1001467503
  },
  {
    value: "104 RIVERSIDE DRIVE",
    data: 1012450046
  },
  {
    value: "104 RIVERSIDE DRIVE",
    data: 1012450046
  },
  {
    value: "104 RIVINGTON STREET",
    data: 1004110073
  },
  {
    value: "104 SHERMAN AVENUE",
    data: 1022240043
  },
  {
    value: "104 SOUTH STREET",
    data: 1000970010
  },
  {
    value: "104 ST MARKS PLACE",
    data: 1004350016
  },
  {
    value: "104 SUFFOLK STREET",
    data: 1003480005
  },
  {
    value: "104 SUFFOLK STREET",
    data: 1003480005
  },
  {
    value: "104 SULLIVAN STREET",
    data: 1005040034
  },
  {
    value: "104 SULLIVAN STREET",
    data: 1005040034
  },
  {
    value: "104 TERRACE VIEW AVENUE",
    data: 1022150237
  },
  {
    value: "104 TERRACE VIEW AVENUE",
    data: 1022150237
  },
  {
    value: "104 TRINITY PLACE",
    data: 1000520015
  },
  {
    value: "104 VARICK STREET",
    data: 1004770042
  },
  {
    value: "104 VARICK STREET",
    data: 1004770042
  },
  {
    value: "104 WEST 113 STREET",
    data: 1018220037
  },
  {
    value: "104 WEST 114 STREET",
    data: 1018230038
  },
  {
    value: "104 WEST 114 STREET",
    data: 1018230038
  },
  {
    value: "104 WEST 118 STREET",
    data: 1019020137
  },
  {
    value: "104 WEST 119 STREET",
    data: 1019030039
  },
  {
    value: "104 WEST 120 STREET",
    data: 1019040137
  },
  {
    value: "104 WEST 121 STREET",
    data: 1019050038
  },
  {
    value: "104 WEST 122 STREET",
    data: 1019060037
  },
  {
    value: "104 WEST 122 STREET",
    data: 1019060037
  },
  {
    value: "104 WEST 123 STREET",
    data: 1019077506
  },
  {
    value: "104 WEST 129 STREET",
    data: 1019130136
  },
  {
    value: "104 WEST 13 STREET",
    data: 1006080037
  },
  {
    value: "104 WEST 130 STREET",
    data: 1019140037
  },
  {
    value: "104 WEST 131 STREET",
    data: 1019150038
  },
  {
    value: "104 WEST 138 STREET",
    data: 1020060038
  },
  {
    value: "104 WEST 138 STREET",
    data: 1020060038
  },
  {
    value: "104 WEST 139 STREET",
    data: 1020070039
  },
  {
    value: "104 WEST 139 STREET",
    data: 1020070039
  },
  {
    value: "104 WEST 14 STREET",
    data: 1006090035
  },
  {
    value: "104 WEST 144 STREET",
    data: 1020120039
  },
  {
    value: "104 WEST 144 STREET",
    data: 1020120039
  },
  {
    value: "104 WEST 21 STREET",
    data: 1007960047
  },
  {
    value: "104 WEST 27 STREET",
    data: 1008020049
  },
  {
    value: "104 WEST 29 STREET",
    data: 1008040044
  },
  {
    value: "104 WEST 70 STREET",
    data: 1011417501
  },
  {
    value: "104 WEST 70 STREET",
    data: 1011417501
  },
  {
    value: "104 WEST 71 STREET",
    data: 1011420035
  },
  {
    value: "104 WEST 71 STREET",
    data: 1011420035
  },
  {
    value: "104 WEST 73 STREET",
    data: 1011440134
  },
  {
    value: "104 WEST 74 STREET",
    data: 1011450035
  },
  {
    value: "104 WEST 75 STREET",
    data: 1011460037
  },
  {
    value: "104 WEST 76 STREET",
    data: 1011470035
  },
  {
    value: "104 WEST 80 STREET",
    data: 1012100038
  },
  {
    value: "104 WEST 80 STREET",
    data: 1012100038
  },
  {
    value: "104 WEST 83 STREET",
    data: 1012130037
  },
  {
    value: "104 WEST 83 STREET",
    data: 1012130037
  },
  {
    value: "104 WEST 87 STREET",
    data: 1012170137
  },
  {
    value: "104 WEST 96 STREET",
    data: 1012260037
  },
  {
    value: "104 WEST 96 STREET",
    data: 1012260037
  },
  {
    value: "104 WEST HOUSTON STREET",
    data: 1005250063
  },
  {
    value: "104 WEST WASHINGTON PLCE",
    data: 1005920017
  },
  {
    value: "1040 5 AVENUE",
    data: 1014970001
  },
  {
    value: "1040 5 AVENUE",
    data: 1014970001
  },
  {
    value: "1040 AMSTERDAM AVENUE",
    data: 1018830028
  },
  {
    value: "1040 AVENUE OF THE AMER",
    data: 1008410001
  },
  {
    value: "1040 LEXINGTON AVENUE",
    data: 1014097502
  },
  {
    value: "1040 LEXINGTON AVENUE",
    data: 1014097502
  },
  {
    value: "1040 MADISON AVENUE",
    data: 1014910016
  },
  {
    value: "1040 MADISON AVENUE",
    data: 1014910016
  },
  {
    value: "1040 PARK AVENUE",
    data: 1014980033
  },
  {
    value: "1040 PARK AVENUE",
    data: 1014980033
  },
  {
    value: "1040 ST NICHOLAS AVENUE",
    data: 1021210001
  },
  {
    value: "1041 AVENUE OF THE AMER",
    data: 1008150026
  },
  {
    value: "1041 MADISON AVENUE",
    data: 1014910021
  },
  {
    value: "1042 MADISON AVENUE",
    data: 1014910017
  },
  {
    value: "1043 LEXINGTON AVENUE",
    data: 1014090020
  },
  {
    value: "1043 MADISON AVENUE",
    data: 1014910052
  },
  {
    value: "10430 EAST 12 STREET",
    data: 1005567501
  },
  {
    value: "1044 2 AVENUE",
    data: 1013480049
  },
  {
    value: "1044 2 AVENUE",
    data: 1013480049
  },
  {
    value: "1044 MADISON AVENUE",
    data: 1014910056
  },
  {
    value: "1045 2 AVENUE",
    data: 1013290021
  },
  {
    value: "1045 2 AVENUE",
    data: 1013290021
  },
  {
    value: "1045 5 AVENUE",
    data: 1014970073
  },
  {
    value: "1045 5 AVENUE",
    data: 1014970073
  },
  {
    value: "1045 LEXINGTON AVENUE",
    data: 1014090053
  },
  {
    value: "1045 LEXINGTON AVENUE",
    data: 1014090053
  },
  {
    value: "1045 MADISON AVENUE",
    data: 1014910151
  },
  {
    value: "1045 PARK AVENUE",
    data: 1015150001
  },
  {
    value: "1045 PARK AVENUE",
    data: 1015150001
  },
  {
    value: "1046 AMSTERDAM AVENUE",
    data: 1018830030
  },
  {
    value: "1046 AMSTERDAM AVENUE",
    data: 1018830030
  },
  {
    value: "1046 MADISON AVENUE",
    data: 1014910057
  },
  {
    value: "1048 5 AVENUE",
    data: 1014970071
  },
  {
    value: "1049 2 AVENUE",
    data: 1013290023
  },
  {
    value: "1049 5 AVENUE",
    data: 1014977501
  },
  {
    value: "1049 5 AVENUE",
    data: 1014977501
  },
  {
    value: "1049 LEXINGTON AVENUE",
    data: 1014090154
  },
  {
    value: "1049 PARK AVENUE",
    data: 1015150070
  },
  {
    value: "1049 PARK AVENUE",
    data: 1015150070
  },
  {
    value: "105 1 AVENUE",
    data: 1004480031
  },
  {
    value: "105 2 AVENUE",
    data: 1004620029
  },
  {
    value: "105 3 AVENUE",
    data: 1004697501
  },
  {
    value: "105 3 AVENUE",
    data: 1004697501
  },
  {
    value: "105 5 AVENUE",
    data: 1008460071
  },
  {
    value: "105 5 AVENUE",
    data: 1008460071
  },
  {
    value: "105 AUDUBON AVENUE",
    data: 1021270035
  },
  {
    value: "105 AUDUBON AVENUE",
    data: 1021270035
  },
  {
    value: "105 AVENUE B",
    data: 1003890007
  },
  {
    value: "105 AVENUE B",
    data: 1003890007
  },
  {
    value: "105 AVENUE C",
    data: 1003890031
  },
  {
    value: "105 BANK STREET",
    data: 1006350033
  },
  {
    value: "105 BENNETT AVENUE",
    data: 1021800154
  },
  {
    value: "105 BOWERY",
    data: 1003040006
  },
  {
    value: "105 BROAD STREET",
    data: 1000070031
  },
  {
    value: "105 CHAMBERS STREET",
    data: 1001457501
  },
  {
    value: "105 CHAMBERS STREET",
    data: 1001459001
  },
  {
    value: "105 CHAMBERS STREET",
    data: 1001457501
  },
  {
    value: "105 CHARLES STREET",
    data: 1006210031
  },
  {
    value: "105 CHRISTOPHER STREET",
    data: 1006190038
  },
  {
    value: "105 CHRISTOPHER STREET",
    data: 1006190038
  },
  {
    value: "105 CLINTON STREET",
    data: 1003480031
  },
  {
    value: "105 CLINTON STREET",
    data: 1003480031
  },
  {
    value: "105 EAST 10 STREET",
    data: 1004660054
  },
  {
    value: "105 EAST 10 STREET",
    data: 1004660054
  },
  {
    value: "105 EAST 100 STREET",
    data: 1016287501
  },
  {
    value: "105 EAST 101 STREET",
    data: 1016290002
  },
  {
    value: "105 EAST 102 STREET",
    data: 1016300003
  },
  {
    value: "105 EAST 102 STREET",
    data: 1016300003
  },
  {
    value: "105 EAST 103 STREET",
    data: 1016310002
  },
  {
    value: "105 EAST 106 STREET",
    data: 1016340003
  },
  {
    value: "105 EAST 116 STREET",
    data: 1016440005
  },
  {
    value: "105 EAST 122 STREET",
    data: 1017710006
  },
  {
    value: "105 EAST 128 STREET",
    data: 1017770005
  },
  {
    value: "105 EAST 128 STREET",
    data: 1017770005
  },
  {
    value: "105 EAST 15 STREET",
    data: 1008710007
  },
  {
    value: "105 EAST 15 STREET",
    data: 1008710007
  },
  {
    value: "105 EAST 16 STREET",
    data: 1008727501
  },
  {
    value: "105 EAST 17 STREET",
    data: 1008730010
  },
  {
    value: "105 EAST 19 STREET",
    data: 1008750008
  },
  {
    value: "105 EAST 19 STREET",
    data: 1008750008
  },
  {
    value: "105 EAST 2 STREET",
    data: 1004290015
  },
  {
    value: "105 EAST 24 STREET",
    data: 1008800006
  },
  {
    value: "105 EAST 24 STREET",
    data: 1008800006
  },
  {
    value: "105 EAST 29 STREET",
    data: 1008850008
  },
  {
    value: "105 EAST 29 STREET",
    data: 1008850008
  },
  {
    value: "105 EAST 35 STREET",
    data: 1008910006
  },
  {
    value: "105 EAST 37 STREET",
    data: 1008930007
  },
  {
    value: "105 EAST 38 STREET",
    data: 1008940006
  },
  {
    value: "105 EAST 38 STREET",
    data: 1008940006
  },
  {
    value: "105 EAST 64 STREET",
    data: 1013990101
  },
  {
    value: "105 EAST 70 STREET",
    data: 1014050006
  },
  {
    value: "105 EAST 73 STREET",
    data: 1014080005
  },
  {
    value: "105 EAST 80 STREET",
    data: 1015090005
  },
  {
    value: "105 EAST 88 STREET",
    data: 1015170006
  },
  {
    value: "105 EAST 88 STREET",
    data: 1015170006
  },
  {
    value: "105 EAST 9 STREET",
    data: 1005550048
  },
  {
    value: "105 EAST 91 STREET",
    data: 1015200005
  },
  {
    value: "105 EAST 97 STREET",
    data: 1016250006
  },
  {
    value: "105 EAST 97 STREET",
    data: 1016250006
  },
  {
    value: "105 EAST BROADWAY",
    data: 1002820025
  },
  {
    value: "105 ELDRIDGE STREET",
    data: 1004180048
  },
  {
    value: "105 ELDRIDGE STREET",
    data: 1004180048
  },
  {
    value: "105 FRANKLIN STREET",
    data: 1001770027
  },
  {
    value: "105 HAMILTON PLACE",
    data: 1020730039
  },
  {
    value: "105 HAVEN AVENUE",
    data: 1021390187
  },
  {
    value: "105 HAVEN AVENUE",
    data: 1021390187
  },
  {
    value: "105 HUDSON STREET",
    data: 1001870030
  },
  {
    value: "105 HUDSON STREET",
    data: 1001870030
  },
  {
    value: "105 LEXINGTON AVENUE",
    data: 1008830025
  },
  {
    value: "105 LEXINGTON AVENUE",
    data: 1008830025
  },
  {
    value: "105 MAC DOUGAL STREET",
    data: 1005420048
  },
  {
    value: "105 MAC DOUGAL STREET",
    data: 1005420048
  },
  {
    value: "105 MADISON AVENUE",
    data: 1008590064
  },
  {
    value: "105 MADISON STREET",
    data: 1002770016
  },
  {
    value: "105 MANHATTAN AVENUE",
    data: 1018400114
  },
  {
    value: "105 MERCER STREET",
    data: 1004990035
  },
  {
    value: "105 MOSCO STREET",
    data: 1001640044
  },
  {
    value: "105 NASSAU STREET",
    data: 1000907502
  },
  {
    value: "105 PAYSON AVENUE",
    data: 1022480006
  },
  {
    value: "105 PINEHURST AVENUE",
    data: 1021790095
  },
  {
    value: "105 PINEHURST AVENUE",
    data: 1021790095
  },
  {
    value: "105 READE STREET",
    data: 1001450018
  },
  {
    value: "105 RIVERSIDE DRIVE",
    data: 1012450045
  },
  {
    value: "105 RIVERSIDE DRIVE",
    data: 1012450045
  },
  {
    value: "105 RIVINGTON STREET",
    data: 1004100047
  },
  {
    value: "105 STANTON STREET",
    data: 1004110053
  },
  {
    value: "105 SULLIVAN STREET",
    data: 1005030005
  },
  {
    value: "105 SULLIVAN STREET",
    data: 1005030005
  },
  {
    value: "105 THOMPSON STREET",
    data: 1005030027
  },
  {
    value: "105 THOMPSON STREET",
    data: 1005030027
  },
  {
    value: "105 WASHINGTON STREET",
    data: 1000530004
  },
  {
    value: "105 WEST 10 STREET",
    data: 1006060075
  },
  {
    value: "105 WEST 104 STREET",
    data: 1018590029
  },
  {
    value: "105 WEST 105 STREET",
    data: 1018600028
  },
  {
    value: "105 WEST 11 STREET",
    data: 1006070048
  },
  {
    value: "105 WEST 113 STREET",
    data: 1018230027
  },
  {
    value: "105 WEST 118 STREET",
    data: 1019030026
  },
  {
    value: "105 WEST 119 STREET",
    data: 1019047502
  },
  {
    value: "105 WEST 122 STREET",
    data: 1019070127
  },
  {
    value: "105 WEST 125 STREET",
    data: 1019107501
  },
  {
    value: "105 WEST 127 STREET",
    data: 1019120024
  },
  {
    value: "105 WEST 127 STREET",
    data: 1019120024
  },
  {
    value: "105 WEST 130 STREET",
    data: 1019150027
  },
  {
    value: "105 WEST 131 STREET",
    data: 1019160127
  },
  {
    value: "105 WEST 132 STREET",
    data: 1019170028
  },
  {
    value: "105 WEST 136 STREET",
    data: 1019210027
  },
  {
    value: "105 WEST 137 STREET",
    data: 1020060027
  },
  {
    value: "105 WEST 137 STREET",
    data: 1020060027
  },
  {
    value: "105 WEST 138 STREET",
    data: 1020070026
  },
  {
    value: "105 WEST 138 STREET",
    data: 1020070026
  },
  {
    value: "105 WEST 16 STREET",
    data: 1007920032
  },
  {
    value: "105 WEST 17 STREET",
    data: 1007930032
  },
  {
    value: "105 WEST 17 STREET",
    data: 1007930032
  },
  {
    value: "105 WEST 27 STREET",
    data: 1008030032
  },
  {
    value: "105 WEST 28 STREET",
    data: 1008040032
  },
  {
    value: "105 WEST 55 STREET",
    data: 1010080026
  },
  {
    value: "105 WEST 55 STREET",
    data: 1010080026
  },
  {
    value: "105 WEST 62 STREET",
    data: 1011340005
  },
  {
    value: "105 WEST 70 STREET",
    data: 1011420030
  },
  {
    value: "105 WEST 72 STREET",
    data: 1011447501
  },
  {
    value: "105 WEST 72 STREET",
    data: 1011447501
  },
  {
    value: "105 WEST 73 STREET",
    data: 1011450029
  },
  {
    value: "105 WEST 73 STREET",
    data: 1011450029
  },
  {
    value: "105 WEST 74 STREET",
    data: 1011460027
  },
  {
    value: "105 WEST 75 STREET",
    data: 1011470028
  },
  {
    value: "105 WEST 77 STREET",
    data: 1011497501
  },
  {
    value: "105 WEST 77 STREET",
    data: 1011497501
  },
  {
    value: "105 WEST 78 STREET",
    data: 1011507501
  },
  {
    value: "105 WEST 86 STREET",
    data: 1012170029
  },
  {
    value: "105 WEST 86 STREET",
    data: 1012170029
  },
  {
    value: "105 WEST 88 STREET",
    data: 1012190028
  },
  {
    value: "105 WOOSTER STREET",
    data: 1005017501
  },
  {
    value: "105 WOOSTER STREET",
    data: 1005017501
  },
  {
    value: "1050 3 AVENUE",
    data: 1013970033
  },
  {
    value: "1050 3 AVENUE",
    data: 1013970033
  },
  {
    value: "1050 5 AVENUE",
    data: 1014980001
  },
  {
    value: "1050 5 AVENUE",
    data: 1014980001
  },
  {
    value: "1050 AMSTERDAM AVENUE",
    data: 1018830036
  },
  {
    value: "1050 AMSTERDAM AVENUE",
    data: 1018830036
  },
  {
    value: "1050 AVENUE OF THE AMER",
    data: 1008410091
  },
  {
    value: "1050 PARK AVENUE",
    data: 1014980037
  },
  {
    value: "1050 PARK AVENUE",
    data: 1014980037
  },
  {
    value: "1050 RIVERSIDE DRIVE",
    data: 1021390017
  },
  {
    value: "1051 2 AVENUE",
    data: 1013290123
  },
  {
    value: "1051 LEXINGTON AVENUE",
    data: 1014090153
  },
  {
    value: "1051 RIVERSIDE DRIVE",
    data: 1021400050
  },
  {
    value: "1053 2 AVENUE",
    data: 1013290024
  },
  {
    value: "1053 LEXINGTON AVENUE",
    data: 1014090152
  },
  {
    value: "1054 AVENUE OF THE AMER",
    data: 1008410089
  },
  {
    value: "1055 2 AVENUE",
    data: 1013290025
  },
  {
    value: "1055 2 AVENUE",
    data: 1013290025
  },
  {
    value: "1055 LEXINGTON AVENUE",
    data: 1014090052
  },
  {
    value: "1055 PARK AVENUE",
    data: 1015157504
  },
  {
    value: "1056 5 AVENUE",
    data: 1014980069
  },
  {
    value: "1056 5 AVENUE",
    data: 1014980069
  },
  {
    value: "1056 LEXINGTON AVENUE",
    data: 1014100014
  },
  {
    value: "1056 LEXINGTON AVENUE",
    data: 1014100014
  },
  {
    value: "1056 ST NICHOLAS AVENUE",
    data: 1021210010
  },
  {
    value: "1056 ST NICHOLAS AVENUE",
    data: 1021210010
  },
  {
    value: "1057 1 AVENUE",
    data: 1013500027
  },
  {
    value: "1057 1 AVENUE",
    data: 1013500027
  },
  {
    value: "1057 2 AVENUE",
    data: 1013290026
  },
  {
    value: "1057 2 AVENUE",
    data: 1013290026
  },
  {
    value: "1057 LEXINGTON AVENUE",
    data: 1014100023
  },
  {
    value: "1057 LEXINGTON AVENUE",
    data: 1014100023
  },
  {
    value: "1058 MADISON AVENUE",
    data: 1014920015
  },
  {
    value: "1058 MADISON AVENUE",
    data: 1014920015
  },
  {
    value: "1059 1 AVENUE",
    data: 1013500028
  },
  {
    value: "1059 1 AVENUE",
    data: 1013500028
  },
  {
    value: "1059 2 AVENUE",
    data: 1013290027
  },
  {
    value: "1059 2 AVENUE",
    data: 1013290027
  },
  {
    value: "1059 3 AVENUE",
    data: 1014170047
  },
  {
    value: "106 3 AVENUE",
    data: 1005590041
  },
  {
    value: "106 7 AVENUE",
    data: 1007667503
  },
  {
    value: "106 7 AVENUE SOUTH",
    data: 1005910052
  },
  {
    value: "106 AVENUE B",
    data: 1004020036
  },
  {
    value: "106 AVENUE C",
    data: 1003770072
  },
  {
    value: "106 BAYARD STREET",
    data: 1001990034
  },
  {
    value: "106 BAYARD STREET",
    data: 1001990034
  },
  {
    value: "106 CABRINI BOULEVARD",
    data: 1021790066
  },
  {
    value: "106 CABRINI BOULEVARD",
    data: 1021790066
  },
  {
    value: "106 CENTRAL PARK SOUTH",
    data: 1010117502
  },
  {
    value: "106 CENTRAL PARK SOUTH",
    data: 1010117502
  },
  {
    value: "106 CHARLES STREET",
    data: 1006200013
  },
  {
    value: "106 CHARLES STREET",
    data: 1006200013
  },
  {
    value: "106 CHRISTOPHER STREET",
    data: 1005880051
  },
  {
    value: "106 CHRISTOPHER STREET",
    data: 1005880051
  },
  {
    value: "106 CHRYSTIE STREET",
    data: 1004180001
  },
  {
    value: "106 COLUMBUS AVENUE",
    data: 1011320001
  },
  {
    value: "106 CONVENT AVENUE",
    data: 1019700058
  },
  {
    value: "106 CONVENT AVENUE",
    data: 1019700058
  },
  {
    value: "106 DELANCEY STREET",
    data: 1004100068
  },
  {
    value: "106 DUANE STREET",
    data: 1001507503
  },
  {
    value: "106 EAST 10 STREET",
    data: 1004650010
  },
  {
    value: "106 EAST 101 STREET",
    data: 1016280070
  },
  {
    value: "106 EAST 116 STREET",
    data: 1016430068
  },
  {
    value: "106 EAST 116 STREET",
    data: 1016430068
  },
  {
    value: "106 EAST 117 STREET",
    data: 1016440069
  },
  {
    value: "106 EAST 117 STREET",
    data: 1016440069
  },
  {
    value: "106 EAST 119 STREET",
    data: 1017670168
  },
  {
    value: "106 EAST 123 STREET",
    data: 1017710069
  },
  {
    value: "106 EAST 124 STREET",
    data: 1017720068
  },
  {
    value: "106 EAST 126 STREET",
    data: 1017740066
  },
  {
    value: "106 EAST 127 STREET",
    data: 1017750071
  },
  {
    value: "106 EAST 13 STREET",
    data: 1005580011
  },
  {
    value: "106 EAST 14 STREET",
    data: 1005590012
  },
  {
    value: "106 EAST 17 STREET",
    data: 1008720073
  },
  {
    value: "106 EAST 19 STREET",
    data: 1008740073
  },
  {
    value: "106 EAST 19 STREET",
    data: 1008740073
  },
  {
    value: "106 EAST 30 STREET",
    data: 1008850085
  },
  {
    value: "106 EAST 31 STREET",
    data: 1008860083
  },
  {
    value: "106 EAST 38 STREET",
    data: 1008930082
  },
  {
    value: "106 EAST 60 STREET",
    data: 1013940169
  },
  {
    value: "106 EAST 7 STREET",
    data: 1004340017
  },
  {
    value: "106 EAST 7 STREET",
    data: 1004340017
  },
  {
    value: "106 EAST 71 STREET",
    data: 1014050070
  },
  {
    value: "106 EAST 78 STREET",
    data: 1014120068
  },
  {
    value: "106 EAST 85 STREET",
    data: 1015130066
  },
  {
    value: "106 EAST 85 STREET",
    data: 1015130066
  },
  {
    value: "106 EDGECOMBE AVENUE",
    data: 1020420102
  },
  {
    value: "106 ELDRIDGE STREET",
    data: 1004130001
  },
  {
    value: "106 ELDRIDGE STREET",
    data: 1004130001
  },
  {
    value: "106 FORSYTH STREET",
    data: 1004180035
  },
  {
    value: "106 FRANKLIN STREET",
    data: 1001780006
  },
  {
    value: "106 FT WASHINGTON AVENUE",
    data: 1021370126
  },
  {
    value: "106 FT WASHINGTON AVENUE",
    data: 1021370126
  },
  {
    value: "106 FULTON STREET",
    data: 1000780020
  },
  {
    value: "106 GREENWICH AVENUE",
    data: 1006170034
  },
  {
    value: "106 GREENWICH STREET",
    data: 1000530036
  },
  {
    value: "106 GREENWICH STREET",
    data: 1000530036
  },
  {
    value: "106 LEXINGTON AVENUE",
    data: 1008830023
  },
  {
    value: "106 MAC DOUGAL STREET",
    data: 1005400002
  },
  {
    value: "106 MAC DOUGAL STREET",
    data: 1005400002
  },
  {
    value: "106 MADISON STREET",
    data: 1002760036
  },
  {
    value: "106 MADISON STREET",
    data: 1002760036
  },
  {
    value: "106 MORNINGSIDE DRIVE",
    data: 1019630019
  },
  {
    value: "106 MORNINGSIDE DRIVE",
    data: 1019630019
  },
  {
    value: "106 MULBERRY STREET",
    data: 1002050004
  },
  {
    value: "106 MULBERRY STREET",
    data: 1002050004
  },
  {
    value: "106 NAGLE AVENUE",
    data: 1021740089
  },
  {
    value: "106 NAGLE AVENUE",
    data: 1021740089
  },
  {
    value: "106 NORFOLK STREET",
    data: 1003530051
  },
  {
    value: "106 NORFOLK STREET",
    data: 1003530051
  },
  {
    value: "106 PERRY STREET",
    data: 1006210009
  },
  {
    value: "106 PINEHURST AVENUE",
    data: 1021790185
  },
  {
    value: "106 PINEHURST AVENUE",
    data: 1021790185
  },
  {
    value: "106 RIDGE STREET",
    data: 1003440076
  },
  {
    value: "106 RIDGE STREET",
    data: 1003440076
  },
  {
    value: "106 RIVINGTON STREET",
    data: 1004110072
  },
  {
    value: "106 SOUTH STREET",
    data: 1000970010
  },
  {
    value: "106 SPRING STREET",
    data: 1004850021
  },
  {
    value: "106 SPRING STREET",
    data: 1004850021
  },
  {
    value: "106 SUFFOLK STREET",
    data: 1003480006
  },
  {
    value: "106 THOMPSON STREET",
    data: 1005020010
  },
  {
    value: "106 VERMILYEA AVENUE",
    data: 1022350035
  },
  {
    value: "106 VERMILYEA AVENUE",
    data: 1022350035
  },
  {
    value: "106 WAVERLY PLACE",
    data: 1005527502
  },
  {
    value: "106 WEST 105 STREET",
    data: 1018590037
  },
  {
    value: "106 WEST 105 STREET",
    data: 1018590037
  },
  {
    value: "106 WEST 109 STREET",
    data: 1018630039
  },
  {
    value: "106 WEST 109 STREET",
    data: 1018630039
  },
  {
    value: "106 WEST 11 STREET",
    data: 1006060049
  },
  {
    value: "106 WEST 113 STREET",
    data: 1018220038
  },
  {
    value: "106 WEST 113 STREET",
    data: 1018220038
  },
  {
    value: "106 WEST 114 STREET",
    data: 1018230039
  },
  {
    value: "106 WEST 114 STREET",
    data: 1018230039
  },
  {
    value: "106 WEST 116 STREET",
    data: 1018257501
  },
  {
    value: "106 WEST 116 STREET",
    data: 1018257501
  },
  {
    value: "106 WEST 117 STREET",
    data: 1019017501
  },
  {
    value: "106 WEST 117 STREET",
    data: 1019017501
  },
  {
    value: "106 WEST 118 STREET",
    data: 1019020038
  },
  {
    value: "106 WEST 119 STREET",
    data: 1019030139
  },
  {
    value: "106 WEST 120 STREET",
    data: 1019040038
  },
  {
    value: "106 WEST 121 STREET",
    data: 1019050138
  },
  {
    value: "106 WEST 123 STREET",
    data: 1019077507
  },
  {
    value: "106 WEST 127 STREET",
    data: 1019110037
  },
  {
    value: "106 WEST 129 STREET",
    data: 1019130137
  },
  {
    value: "106 WEST 13 STREET",
    data: 1006080035
  },
  {
    value: "106 WEST 13 STREET",
    data: 1006080035
  },
  {
    value: "106 WEST 130 STREET",
    data: 1019140038
  },
  {
    value: "106 WEST 131 STREET",
    data: 1019150138
  },
  {
    value: "106 WEST 132 STREET",
    data: 1019160038
  },
  {
    value: "106 WEST 134 STREET",
    data: 1019180040
  },
  {
    value: "106 WEST 134 STREET",
    data: 1019180040
  },
  {
    value: "106 WEST 137 STREET",
    data: 1019210038
  },
  {
    value: "106 WEST 137 STREET",
    data: 1019210038
  },
  {
    value: "106 WEST 142 STREET",
    data: 1020100039
  },
  {
    value: "106 WEST 142 STREET",
    data: 1020100039
  },
  {
    value: "106 WEST 144 STREET",
    data: 1020120041
  },
  {
    value: "106 WEST 144 STREET",
    data: 1020120041
  },
  {
    value: "106 WEST 28 STREET",
    data: 1008030045
  },
  {
    value: "106 WEST 56 STREET",
    data: 1010080037
  },
  {
    value: "106 WEST 69 STREET",
    data: 1011400133
  },
  {
    value: "106 WEST 69 STREET",
    data: 1011400133
  },
  {
    value: "106 WEST 71 STREET",
    data: 1011420036
  },
  {
    value: "106 WEST 73 STREET",
    data: 1011440035
  },
  {
    value: "106 WEST 73 STREET",
    data: 1011440035
  },
  {
    value: "106 WEST 74 STREET",
    data: 1011450036
  },
  {
    value: "106 WEST 75 STREET",
    data: 1011460038
  },
  {
    value: "106 WEST 76 STREET",
    data: 1011470036
  },
  {
    value: "106 WEST 78 STREET",
    data: 1011490137
  },
  {
    value: "106 WEST 80 STREET",
    data: 1012100138
  },
  {
    value: "106 WEST 81 STREET",
    data: 1012110137
  },
  {
    value: "106 WEST 83 STREET",
    data: 1012130038
  },
  {
    value: "106 WEST 83 STREET",
    data: 1012130038
  },
  {
    value: "106 WEST 87 STREET",
    data: 1012170138
  },
  {
    value: "106 WEST 96 STREET",
    data: 1012260039
  },
  {
    value: "106 WEST 96 STREET",
    data: 1012260039
  },
  {
    value: "106 WEST HOUSTON STREET",
    data: 1005250064
  },
  {
    value: "106 WEST WASHINGTON PLCE",
    data: 1005920016
  },
  {
    value: "1060 5 AVENUE",
    data: 1014990001
  },
  {
    value: "1060 5 AVENUE",
    data: 1014990001
  },
  {
    value: "1060 AMSTERDAM AVENUE",
    data: 1018840029
  },
  {
    value: "1060 AVENUE OF THE AMER",
    data: 1012570002
  },
  {
    value: "1060 PARK AVENUE",
    data: 1014990032
  },
  {
    value: "1060 PARK AVENUE",
    data: 1014990032
  },
  {
    value: "1061 1 AVENUE",
    data: 1013500029
  },
  {
    value: "1061 2 AVENUE",
    data: 1013290028
  },
  {
    value: "1061 MADISON AVENUE",
    data: 1014920121
  },
  {
    value: "1061 ST NICHOLAS AVENUE",
    data: 1021220120
  },
  {
    value: "1061 ST NICHOLAS AVENUE",
    data: 1021220120
  },
  {
    value: "1063 1 AVENUE",
    data: 1013500030
  },
  {
    value: "1063 1 AVENUE",
    data: 1013500030
  },
  {
    value: "1063 MADISON AVENUE",
    data: 1014920052
  },
  {
    value: "1064 AMSTERDAM AVENUE",
    data: 1018840036
  },
  {
    value: "1064 MADISON AVENUE",
    data: 1014920017
  },
  {
    value: "1064 MADISON AVENUE",
    data: 1014920017
  },
  {
    value: "1065 1 AVENUE",
    data: 1013510023
  },
  {
    value: "1065 3 AVENUE",
    data: 1014170045
  },
  {
    value: "1065 3 AVENUE",
    data: 1014170045
  },
  {
    value: "1065 LEXINGTON AVENUE",
    data: 1014107502
  },
  {
    value: "1065 LEXINGTON AVENUE",
    data: 1014107502
  },
  {
    value: "1065 MADISON AVENUE",
    data: 1014920051
  },
  {
    value: "1065 PARK AVENUE",
    data: 1015160001
  },
  {
    value: "1065 PARK AVENUE",
    data: 1015160001
  },
  {
    value: "1066 1 AVENUE",
    data: 1013700001
  },
  {
    value: "1066 1 AVENUE",
    data: 1013700001
  },
  {
    value: "1066 2 AVENUE",
    data: 1013490001
  },
  {
    value: "1066 2 AVENUE",
    data: 1013490001
  },
  {
    value: "1067 1 AVENUE",
    data: 1013510024
  },
  {
    value: "1067 1 AVENUE",
    data: 1013510024
  },
  {
    value: "1067 5 AVENUE",
    data: 1014990071
  },
  {
    value: "1067 5 AVENUE",
    data: 1014990071
  },
  {
    value: "1067 LEXINGTON AVENUE",
    data: 1014100053
  },
  {
    value: "1067 MADISON AVENUE",
    data: 1014920049
  },
  {
    value: "1067 MADISON AVENUE",
    data: 1014920049
  },
  {
    value: "1067 PARK AVENUE",
    data: 1015160004
  },
  {
    value: "1067 PARK AVENUE",
    data: 1015160004
  },
  {
    value: "1068 2 AVENUE",
    data: 1013490002
  },
  {
    value: "1068 LEXINGTON AVENUE",
    data: 1014107501
  },
  {
    value: "1068 LEXINGTON AVENUE",
    data: 1014107501
  },
  {
    value: "1069 1 AVENUE",
    data: 1013510025
  },
  {
    value: "1069 1 AVENUE",
    data: 1013510025
  },
  {
    value: "107 1 AVENUE",
    data: 1004480030
  },
  {
    value: "107 2 AVENUE",
    data: 1004620025
  },
  {
    value: "107 AVENUE A",
    data: 1004347504
  },
  {
    value: "107 AVENUE A",
    data: 1004347504
  },
  {
    value: "107 AVENUE C",
    data: 1003900037
  },
  {
    value: "107 AVENUE C",
    data: 1003900037
  },
  {
    value: "107 AVENUE D",
    data: 1003770037
  },
  {
    value: "107 AVENUE D",
    data: 1003770037
  },
  {
    value: "107 BANK STREET",
    data: 1006350034
  },
  {
    value: "107 BEDFORD STREET",
    data: 1005850055
  },
  {
    value: "107 BOWERY",
    data: 1003040007
  },
  {
    value: "107 CHRISTOPHER STREET",
    data: 1006190039
  },
  {
    value: "107 CHRISTOPHER STREET",
    data: 1006190039
  },
  {
    value: "107 CLINTON STREET",
    data: 1003480032
  },
  {
    value: "107 CLINTON STREET",
    data: 1003480032
  },
  {
    value: "107 EAST 100 STREET",
    data: 1016280103
  },
  {
    value: "107 EAST 100 STREET",
    data: 1016280103
  },
  {
    value: "107 EAST 101 STREET",
    data: 1016290102
  },
  {
    value: "107 EAST 107 STREET",
    data: 1016350007
  },
  {
    value: "107 EAST 115 STREET",
    data: 1016430005
  },
  {
    value: "107 EAST 115 STREET",
    data: 1016430005
  },
  {
    value: "107 EAST 123 STREET",
    data: 1017720004
  },
  {
    value: "107 EAST 125 STREET",
    data: 1017740005
  },
  {
    value: "107 EAST 126 STREET",
    data: 1017750006
  },
  {
    value: "107 EAST 126 STREET",
    data: 1017750006
  },
  {
    value: "107 EAST 130 STREET",
    data: 1017790007
  },
  {
    value: "107 EAST 130 STREET",
    data: 1017790007
  },
  {
    value: "107 EAST 2 STREET",
    data: 1004290016
  },
  {
    value: "107 EAST 2 STREET",
    data: 1004290016
  },
  {
    value: "107 EAST 28 STREET",
    data: 1008840007
  },
  {
    value: "107 EAST 31 STREET",
    data: 1008877501
  },
  {
    value: "107 EAST 31 STREET",
    data: 1008877501
  },
  {
    value: "107 EAST 35 STREET",
    data: 1008910007
  },
  {
    value: "107 EAST 36 STREET",
    data: 1008920005
  },
  {
    value: "107 EAST 37 STREET",
    data: 1008930008
  },
  {
    value: "107 EAST 38 STREET",
    data: 1008940008
  },
  {
    value: "107 EAST 60 STREET",
    data: 1013950004
  },
  {
    value: "107 EAST 61 STREET",
    data: 1013960004
  },
  {
    value: "107 EAST 63 STREET",
    data: 1013980008
  },
  {
    value: "107 EAST 63 STREET",
    data: 1013980008
  },
  {
    value: "107 EAST 64 STREET",
    data: 1013990002
  },
  {
    value: "107 EAST 7 STREET",
    data: 1004350049
  },
  {
    value: "107 EAST 73 STREET",
    data: 1014080006
  },
  {
    value: "107 EAST 80 STREET",
    data: 1015090006
  },
  {
    value: "107 EAST 80 STREET",
    data: 1015090006
  },
  {
    value: "107 EAST 82 STREET",
    data: 1015110005
  },
  {
    value: "107 EAST 82 STREET",
    data: 1015110005
  },
  {
    value: "107 EAST 88 STREET",
    data: 1015170007
  },
  {
    value: "107 EAST 88 STREET",
    data: 1015170007
  },
  {
    value: "107 EAST 89 STREET",
    data: 1015180007
  },
  {
    value: "107 EAST 89 STREET",
    data: 1015180007
  },
  {
    value: "107 EAST 91 STREET",
    data: 1015200105
  },
  {
    value: "107 EAST BROADWAY",
    data: 1002827502
  },
  {
    value: "107 GRAND STREET",
    data: 1002310026
  },
  {
    value: "107 GREENE STREET",
    data: 1005007506
  },
  {
    value: "107 GREENE STREET",
    data: 1005007506
  },
  {
    value: "107 GREENWICH AVENUE",
    data: 1006150079
  },
  {
    value: "107 HAMILTON PLACE",
    data: 1020730038
  },
  {
    value: "107 HESTER STREET",
    data: 1003060035
  },
  {
    value: "107 HESTER STREET",
    data: 1003060035
  },
  {
    value: "107 MAC DOUGAL STREET",
    data: 1005420047
  },
  {
    value: "107 MADISON STREET",
    data: 1002770017
  },
  {
    value: "107 MADISON STREET",
    data: 1002770017
  },
  {
    value: "107 MANHATTAN AVENUE",
    data: 1018400015
  },
  {
    value: "107 MORNINGSIDE AVENUE",
    data: 1019500064
  },
  {
    value: "107 MOTT STREET",
    data: 1002050025
  },
  {
    value: "107 NORFOLK STREET",
    data: 1003530034
  },
  {
    value: "107 PAYSON AVENUE",
    data: 1022480007
  },
  {
    value: "107 RIVINGTON STREET",
    data: 1004100048
  },
  {
    value: "107 SOUTH STREET",
    data: 1000970009
  },
  {
    value: "107 SPRING STREET",
    data: 1004990036
  },
  {
    value: "107 ST MARKS PLACE",
    data: 1004360044
  },
  {
    value: "107 ST MARKS PLACE",
    data: 1004360044
  },
  {
    value: "107 SUFFOLK STREET",
    data: 1003530054
  },
  {
    value: "107 SULLIVAN STREET",
    data: 1005030006
  },
  {
    value: "107 SULLIVAN STREET",
    data: 1005030006
  },
  {
    value: "107 THOMPSON STREET",
    data: 1005030026
  },
  {
    value: "107 THOMPSON STREET",
    data: 1005030026
  },
  {
    value: "107 UNIVERSITY PLACE",
    data: 1005640004
  },
  {
    value: "107 UNIVERSITY PLACE",
    data: 1005640004
  },
  {
    value: "107 VERMILYEA AVENUE",
    data: 1022260005
  },
  {
    value: "107 VERMILYEA AVENUE",
    data: 1022260005
  },
  {
    value: "107 WAVERLY PLACE",
    data: 1005530033
  },
  {
    value: "107 WEST 104 STREET",
    data: 1018590128
  },
  {
    value: "107 WEST 105 STREET",
    data: 1018600027
  },
  {
    value: "107 WEST 105 STREET",
    data: 1018600027
  },
  {
    value: "107 WEST 106 STREET",
    data: 1018610028
  },
  {
    value: "107 WEST 106 STREET",
    data: 1018610028
  },
  {
    value: "107 WEST 109 STREET",
    data: 1018640023
  },
  {
    value: "107 WEST 109 STREET",
    data: 1018640023
  },
  {
    value: "107 WEST 11 STREET",
    data: 1006070049
  },
  {
    value: "107 WEST 113 STREET",
    data: 1018230026
  },
  {
    value: "107 WEST 117 STREET",
    data: 1019020126
  },
  {
    value: "107 WEST 118 STREET",
    data: 1019030125
  },
  {
    value: "107 WEST 119 STREET",
    data: 1019047501
  },
  {
    value: "107 WEST 120 STREET",
    data: 1019050025
  },
  {
    value: "107 WEST 122 STREET",
    data: 1019070027
  },
  {
    value: "107 WEST 123 STREET",
    data: 1019080025
  },
  {
    value: "107 WEST 126 STREET",
    data: 1019110027
  },
  {
    value: "107 WEST 128 STREET",
    data: 1019130027
  },
  {
    value: "107 WEST 13 STREET",
    data: 1006090049
  },
  {
    value: "107 WEST 130 STREET",
    data: 1019150026
  },
  {
    value: "107 WEST 131 STREET",
    data: 1019160027
  },
  {
    value: "107 WEST 132 STREET",
    data: 1019170027
  },
  {
    value: "107 WEST 132 STREET",
    data: 1019170027
  },
  {
    value: "107 WEST 135 STREET",
    data: 1019200025
  },
  {
    value: "107 WEST 135 STREET",
    data: 1019200025
  },
  {
    value: "107 WEST 136 STREET",
    data: 1019210126
  },
  {
    value: "107 WEST 137 STREET",
    data: 1020060025
  },
  {
    value: "107 WEST 137 STREET",
    data: 1020060025
  },
  {
    value: "107 WEST 138 STREET",
    data: 1020070025
  },
  {
    value: "107 WEST 138 STREET",
    data: 1020070025
  },
  {
    value: "107 WEST 143 STREET",
    data: 1020120025
  },
  {
    value: "107 WEST 17 STREET",
    data: 1007930031
  },
  {
    value: "107 WEST 25 STREET",
    data: 1008010030
  },
  {
    value: "107 WEST 25 STREET",
    data: 1008010030
  },
  {
    value: "107 WEST 26 STREET",
    data: 1008027503
  },
  {
    value: "107 WEST 27 STREET",
    data: 1008030031
  },
  {
    value: "107 WEST 68 STREET",
    data: 1011400027
  },
  {
    value: "107 WEST 68 STREET",
    data: 1011400027
  },
  {
    value: "107 WEST 69 STREET",
    data: 1011410029
  },
  {
    value: "107 WEST 69 STREET",
    data: 1011410029
  },
  {
    value: "107 WEST 70 STREET",
    data: 1011420129
  },
  {
    value: "107 WEST 74 STREET",
    data: 1011460126
  },
  {
    value: "107 WEST 75 STREET",
    data: 1011470027
  },
  {
    value: "107 WEST 78 STREET",
    data: 1011500027
  },
  {
    value: "107 WEST 82 STREET",
    data: 1012137504
  },
  {
    value: "107 WEST 82 STREET",
    data: 1012137504
  },
  {
    value: "107 WEST 85 STREET",
    data: 1012160026
  },
  {
    value: "107 WEST 88 STREET",
    data: 1012190027
  },
  {
    value: "107 WEST 89 STREET",
    data: 1012207503
  },
  {
    value: "107 WEST 89 STREET",
    data: 1012207503
  },
  {
    value: "107 WEST 97 STREET",
    data: 1018520012
  },
  {
    value: "107 WEST 97 STREET",
    data: 1018520012
  },
  {
    value: "1070 2 AVENUE",
    data: 1013490102
  },
  {
    value: "1070 5 AVENUE",
    data: 1015000001
  },
  {
    value: "1070 MADISON AVENUE",
    data: 1014920056
  },
  {
    value: "1070 MADISON AVENUE",
    data: 1014920056
  },
  {
    value: "1070 PARK AVENUE",
    data: 1014990040
  },
  {
    value: "1070 PARK AVENUE",
    data: 1014990040
  },
  {
    value: "1071 1 AVENUE",
    data: 1013510026
  },
  {
    value: "1071 3 AVENUE",
    data: 1014180001
  },
  {
    value: "1071 3 AVENUE",
    data: 1014180001
  },
  {
    value: "1071 AVENUE OF THE AMER",
    data: 1009930036
  },
  {
    value: "1071 ST NICHOLAS AVENUE",
    data: 1021220116
  },
  {
    value: "1071 ST NICHOLAS AVENUE",
    data: 1021220116
  },
  {
    value: "1072 2 AVENUE",
    data: 1013490003
  },
  {
    value: "1073 1 AVENUE",
    data: 1013510027
  },
  {
    value: "1073 1 AVENUE",
    data: 1013510027
  },
  {
    value: "1074 2 AVENUE",
    data: 1013490004
  },
  {
    value: "1075 1 AVENUE",
    data: 1013510028
  },
  {
    value: "1075 1 AVENUE",
    data: 1013510028
  },
  {
    value: "1075 MADISON AVENUE",
    data: 1014930021
  },
  {
    value: "1075 PARK AVENUE",
    data: 1015160069
  },
  {
    value: "1075 PARK AVENUE",
    data: 1015160069
  },
  {
    value: "1076 1 AVENUE",
    data: 1013700046
  },
  {
    value: "1076 1 AVENUE",
    data: 1013700046
  },
  {
    value: "1076 2 AVENUE",
    data: 1013490049
  },
  {
    value: "1076 2 AVENUE",
    data: 1013490049
  },
  {
    value: "1076 MADISON AVENUE",
    data: 1014930014
  },
  {
    value: "1078 MADISON AVENUE",
    data: 1014937501
  },
  {
    value: "1079 1 AVENUE",
    data: 1013510030
  },
  {
    value: "1079 1 AVENUE",
    data: 1013510030
  },
  {
    value: "108 1 AVENUE",
    data: 1004340005
  },
  {
    value: "108 2 AVENUE",
    data: 1004480003
  },
  {
    value: "108 3 AVENUE",
    data: 1005597501
  },
  {
    value: "108 3 AVENUE",
    data: 1005597501
  },
  {
    value: "108 5 AVENUE",
    data: 1008177501
  },
  {
    value: "108 5 AVENUE",
    data: 1008177501
  },
  {
    value: "108 7 AVENUE SOUTH",
    data: 1005910053
  },
  {
    value: "108 9 AVENUE",
    data: 1007410001
  },
  {
    value: "108 9 AVENUE",
    data: 1007410001
  },
  {
    value: "108 AVENUE B",
    data: 1004020034
  },
  {
    value: "108 BOWERY",
    data: 1002390027
  },
  {
    value: "108 CHAMBERS STREET",
    data: 1001360028
  },
  {
    value: "108 CHARLES STREET",
    data: 1006200012
  },
  {
    value: "108 CHARLES STREET",
    data: 1006200012
  },
  {
    value: "108 CHARLTON STREET",
    data: 1005970046
  },
  {
    value: "108 DELANCEY STREET",
    data: 1004100067
  },
  {
    value: "108 DUANE STREET",
    data: 1001507504
  },
  {
    value: "108 DUANE STREET",
    data: 1001507504
  },
  {
    value: "108 EAST 1 STREET",
    data: 1004290049
  },
  {
    value: "108 EAST 10 STREET",
    data: 1004650011
  },
  {
    value: "108 EAST 101 STREET",
    data: 1016280169
  },
  {
    value: "108 EAST 103 STREET",
    data: 1016300070
  },
  {
    value: "108 EAST 116 STREET",
    data: 1016437501
  },
  {
    value: "108 EAST 119 STREET",
    data: 1017670068
  },
  {
    value: "108 EAST 123 STREET",
    data: 1017710068
  },
  {
    value: "108 EAST 123 STREET",
    data: 1017710068
  },
  {
    value: "108 EAST 124 STREET",
    data: 1017720067
  },
  {
    value: "108 EAST 126 STREET",
    data: 1017740065
  },
  {
    value: "108 EAST 128 STREET",
    data: 1017750166
  },
  {
    value: "108 EAST 16 STREET",
    data: 1008710078
  },
  {
    value: "108 EAST 17 STREET",
    data: 1008720072
  },
  {
    value: "108 EAST 19 STREET",
    data: 1008740071
  },
  {
    value: "108 EAST 30 STREET",
    data: 1008850084
  },
  {
    value: "108 EAST 31 STREET",
    data: 1008860082
  },
  {
    value: "108 EAST 35 STREET",
    data: 1008907502
  },
  {
    value: "108 EAST 37 STREET",
    data: 1008920079
  },
  {
    value: "108 EAST 38 STREET",
    data: 1008930082
  },
  {
    value: "108 EAST 4 STREET",
    data: 1004450020
  },
  {
    value: "108 EAST 4 STREET",
    data: 1004450020
  },
  {
    value: "108 EAST 60 STREET",
    data: 1013940069
  },
  {
    value: "108 EAST 66 STREET",
    data: 1014000068
  },
  {
    value: "108 EAST 66 STREET",
    data: 1014000068
  },
  {
    value: "108 EAST 73 STREET",
    data: 1014070069
  },
  {
    value: "108 EAST 78 STREET",
    data: 1014120167
  },
  {
    value: "108 EAST 81 STREET",
    data: 1015090064
  },
  {
    value: "108 EAST 81 STREET",
    data: 1015090064
  },
  {
    value: "108 EAST 82 STREET",
    data: 1015100065
  },
  {
    value: "108 EAST 82 STREET",
    data: 1015100065
  },
  {
    value: "108 EAST 86 STREET",
    data: 1015140066
  },
  {
    value: "108 EAST 86 STREET",
    data: 1015140066
  },
  {
    value: "108 EAST 87 STREET",
    data: 1015157501
  },
  {
    value: "108 EAST 89 STREET",
    data: 1015170062
  },
  {
    value: "108 EAST 91 STREET",
    data: 1015190067
  },
  {
    value: "108 EAST 91 STREET",
    data: 1015190067
  },
  {
    value: "108 EAST 96 STREET",
    data: 1015247502
  },
  {
    value: "108 EAST 96 STREET",
    data: 1015247502
  },
  {
    value: "108 EAST 97 STREET",
    data: 1016240066
  },
  {
    value: "108 EAST 97 STREET",
    data: 1016240066
  },
  {
    value: "108 EDGECOMBE AVENUE",
    data: 1020420003
  },
  {
    value: "108 ELDRIDGE STREET",
    data: 1004130002
  },
  {
    value: "108 ELDRIDGE STREET",
    data: 1004130002
  },
  {
    value: "108 ELLWOOD STREET",
    data: 1021720039
  },
  {
    value: "108 ELLWOOD STREET",
    data: 1021720039
  },
  {
    value: "108 FORSYTH STREET",
    data: 1004180036
  },
  {
    value: "108 FRANKLIN STREET",
    data: 1001780007
  },
  {
    value: "108 GREENWICH STREET",
    data: 1000530035
  },
  {
    value: "108 HORATIO STREET",
    data: 1006420012
  },
  {
    value: "108 HORATIO STREET",
    data: 1006420012
  },
  {
    value: "108 LEXINGTON AVENUE",
    data: 1008830024
  },
  {
    value: "108 MAC DOUGAL STREET",
    data: 1005400003
  },
  {
    value: "108 MAC DOUGAL STREET",
    data: 1005400003
  },
  {
    value: "108 MADISON STREET",
    data: 1002760035
  },
  {
    value: "108 MADISON STREET",
    data: 1002760035
  },
  {
    value: "108 NORFOLK STREET",
    data: 1003530052
  },
  {
    value: "108 NORFOLK STREET",
    data: 1003530052
  },
  {
    value: "108 PARK TERRACE EAST",
    data: 1022430278
  },
  {
    value: "108 PARK TERRACE EAST",
    data: 1022430278
  },
  {
    value: "108 RIVINGTON STREET",
    data: 1004110071
  },
  {
    value: "108 SHERMAN AVENUE",
    data: 1022240041
  },
  {
    value: "108 SOUTH STREET",
    data: 1000970008
  },
  {
    value: "108 THOMPSON STREET",
    data: 1005020011
  },
  {
    value: "108 WAVERLY PLACE",
    data: 1005520054
  },
  {
    value: "108 WEST 107 STREET",
    data: 1018610040
  },
  {
    value: "108 WEST 108 STREET",
    data: 1018620060
  },
  {
    value: "108 WEST 111 STREET",
    data: 1018200041
  },
  {
    value: "108 WEST 111 STREET",
    data: 1018200041
  },
  {
    value: "108 WEST 114 STREET",
    data: 1018230040
  },
  {
    value: "108 WEST 114 STREET",
    data: 1018230040
  },
  {
    value: "108 WEST 116 STREET",
    data: 1018250139
  },
  {
    value: "108 WEST 118 STREET",
    data: 1019020039
  },
  {
    value: "108 WEST 118 STREET",
    data: 1019020039
  },
  {
    value: "108 WEST 119 STREET",
    data: 1019030040
  },
  {
    value: "108 WEST 120 STREET",
    data: 1019040039
  },
  {
    value: "108 WEST 121 STREET",
    data: 1019050039
  },
  {
    value: "108 WEST 123 STREET",
    data: 1019070139
  },
  {
    value: "108 WEST 124 STREET",
    data: 1019080037
  },
  {
    value: "108 WEST 128 STREET",
    data: 1019120138
  },
  {
    value: "108 WEST 129 STREET",
    data: 1019130037
  },
  {
    value: "108 WEST 130 STREET",
    data: 1019147501
  },
  {
    value: "108 WEST 131 STREET",
    data: 1019150039
  },
  {
    value: "108 WEST 132 STREET",
    data: 1019160039
  },
  {
    value: "108 WEST 138 STREET",
    data: 1020067501
  },
  {
    value: "108 WEST 138 STREET",
    data: 1020067501
  },
  {
    value: "108 WEST 139 STREET",
    data: 1020070041
  },
  {
    value: "108 WEST 139 STREET",
    data: 1020070041
  },
  {
    value: "108 WEST 14 STREET",
    data: 1006090034
  },
  {
    value: "108 WEST 141 STREET",
    data: 1020090039
  },
  {
    value: "108 WEST 141 STREET",
    data: 1020090039
  },
  {
    value: "108 WEST 144 STREET",
    data: 1020120042
  },
  {
    value: "108 WEST 144 STREET",
    data: 1020120042
  },
  {
    value: "108 WEST 17 STREET",
    data: 1007920043
  },
  {
    value: "108 WEST 17 STREET",
    data: 1007920043
  },
  {
    value: "108 WEST 227 STREET",
    data: 1022150442
  },
  {
    value: "108 WEST 227 STREET",
    data: 1022150442
  },
  {
    value: "108 WEST 24 STREET",
    data: 1007990046
  },
  {
    value: "108 WEST 25 STREET",
    data: 1008007502
  },
  {
    value: "108 WEST 28 STREET",
    data: 1008030046
  },
  {
    value: "108 WEST 34 STREET",
    data: 1008090049
  },
  {
    value: "108 WEST 39 STREET",
    data: 1008140046
  },
  {
    value: "108 WEST 56 STREET",
    data: 1010087501
  },
  {
    value: "108 WEST 69 STREET",
    data: 1011400036
  },
  {
    value: "108 WEST 69 STREET",
    data: 1011400036
  },
  {
    value: "108 WEST 71 STREET",
    data: 1011420136
  },
  {
    value: "108 WEST 71 STREET",
    data: 1011420136
  },
  {
    value: "108 WEST 74 STREET",
    data: 1011450037
  },
  {
    value: "108 WEST 75 STREET",
    data: 1011467502
  },
  {
    value: "108 WEST 76 STREET",
    data: 1011470037
  },
  {
    value: "108 WEST 78 STREET",
    data: 1011490038
  },
  {
    value: "108 WEST 80 STREET",
    data: 1012100039
  },
  {
    value: "108 WEST 81 STREET",
    data: 1012110037
  },
  {
    value: "108 WEST 83 STREET",
    data: 1012130039
  },
  {
    value: "108 WEST 83 STREET",
    data: 1012130039
  },
  {
    value: "108 WEST 87 STREET",
    data: 1012170037
  },
  {
    value: "108 WEST 95 STREET",
    data: 1012250039
  },
  {
    value: "108 WEST 95 STREET",
    data: 1012250039
  },
  {
    value: "108 WEST HOUSTON STREET",
    data: 1005250025
  },
  {
    value: "108 WEST WASHINGTON PLCE",
    data: 1005920015
  },
  {
    value: "108 WOOSTER STREET",
    data: 1005000005
  },
  {
    value: "108 WOOSTER STREET",
    data: 1005000005
  },
  {
    value: "1080 5 AVENUE",
    data: 1015010001
  },
  {
    value: "1080 5 AVENUE",
    data: 1015010001
  },
  {
    value: "1080 AMSTERDAM AVENUE",
    data: 1018850029
  },
  {
    value: "1080 AMSTERDAM AVENUE",
    data: 1018850029
  },
  {
    value: "1080 LEXINGTON AVENUE",
    data: 1014110113
  },
  {
    value: "1080 MADISON AVENUE",
    data: 1014937501
  },
  {
    value: "1080 PARK AVENUE",
    data: 1015000033
  },
  {
    value: "1081 3 AVENUE",
    data: 1014180045
  },
  {
    value: "1081 3 AVENUE",
    data: 1014180045
  },
  {
    value: "1082 MADISON AVENUE",
    data: 1014937503
  },
  {
    value: "1082 MADISON AVENUE",
    data: 1014937503
  },
  {
    value: "1082 PARK AVENUE",
    data: 1015007501
  },
  {
    value: "1083 2 AVENUE",
    data: 1013310021
  },
  {
    value: "1083 5 AVENUE",
    data: 1015010004
  },
  {
    value: "1084 2 AVENUE",
    data: 1013500001
  },
  {
    value: "1084 2 AVENUE",
    data: 1013500001
  },
  {
    value: "1084 AMSTERDAM AVENUE",
    data: 1018850036
  },
  {
    value: "1085 2 AVENUE",
    data: 1013310022
  },
  {
    value: "1085 5 AVENUE",
    data: 1015010069
  },
  {
    value: "1085 PARK AVENUE",
    data: 1015170001
  },
  {
    value: "1085 PARK AVENUE",
    data: 1015170001
  },
  {
    value: "1086 ST NICHOLAS AVENUE",
    data: 1021210020
  },
  {
    value: "1087 2 AVENUE",
    data: 1013310023
  },
  {
    value: "1088 PARK AVENUE",
    data: 1015000040
  },
  {
    value: "1088 PARK AVENUE",
    data: 1015000040
  },
  {
    value: "1089 2 AVENUE",
    data: 1013310024
  },
  {
    value: "1089 MADISON AVENUE",
    data: 1014940023
  },
  {
    value: "1089 MADISON AVENUE",
    data: 1014940023
  },
  {
    value: "109 1 AVENUE",
    data: 1004480029
  },
  {
    value: "109 10 AVENUE",
    data: 1006887501
  },
  {
    value: "109 5 AVENUE",
    data: 1008470001
  },
  {
    value: "109 AUDUBON AVENUE",
    data: 1021270036
  },
  {
    value: "109 AVENUE A",
    data: 1004340029
  },
  {
    value: "109 BANK STREET",
    data: 1006350035
  },
  {
    value: "109 BEDFORD STREET",
    data: 1005850054
  },
  {
    value: "109 CHRYSTIE STREET",
    data: 1004230126
  },
  {
    value: "109 DELANCEY STREET",
    data: 1004090053
  },
  {
    value: "109 EAST 100 STREET",
    data: 1016287502
  },
  {
    value: "109 EAST 101 STREET",
    data: 1016290003
  },
  {
    value: "109 EAST 102 STREET",
    data: 1016300005
  },
  {
    value: "109 EAST 102 STREET",
    data: 1016300005
  },
  {
    value: "109 EAST 116 STREET",
    data: 1016440007
  },
  {
    value: "109 EAST 12 STREET",
    data: 1005580049
  },
  {
    value: "109 EAST 123 STREET",
    data: 1017720007
  },
  {
    value: "109 EAST 125 STREET",
    data: 1017740006
  },
  {
    value: "109 EAST 19 STREET",
    data: 1008750010
  },
  {
    value: "109 EAST 2 STREET",
    data: 1004290017
  },
  {
    value: "109 EAST 29 STREET",
    data: 1008850010
  },
  {
    value: "109 EAST 31 STREET",
    data: 1008870008
  },
  {
    value: "109 EAST 35 STREET",
    data: 1008910008
  },
  {
    value: "109 EAST 36 STREET",
    data: 1008920006
  },
  {
    value: "109 EAST 37 STREET",
    data: 1008930009
  },
  {
    value: "109 EAST 38 STREET",
    data: 1008940009
  },
  {
    value: "109 EAST 39 STREET",
    data: 1008950010
  },
  {
    value: "109 EAST 42 STREET",
    data: 1012800030
  },
  {
    value: "109 EAST 56 STREET",
    data: 1013110005
  },
  {
    value: "109 EAST 60 STREET",
    data: 1013950005
  },
  {
    value: "109 EAST 61 STREET",
    data: 1013960005
  },
  {
    value: "109 EAST 64 STREET",
    data: 1013990003
  },
  {
    value: "109 EAST 69 STREET",
    data: 1014040106
  },
  {
    value: "109 EAST 7 STREET",
    data: 1004350048
  },
  {
    value: "109 EAST 73 STREET",
    data: 1014080007
  },
  {
    value: "109 EAST 73 STREET",
    data: 1014080007
  },
  {
    value: "109 EAST 79 STREET",
    data: 1015080004
  },
  {
    value: "109 EAST 81 STREET",
    data: 1015100007
  },
  {
    value: "109 EAST 82 STREET",
    data: 1015110006
  },
  {
    value: "109 EAST 87 STREET",
    data: 1015160005
  },
  {
    value: "109 EAST 89 STREET",
    data: 1015180008
  },
  {
    value: "109 EAST 89 STREET",
    data: 1015180008
  },
  {
    value: "109 EAST 9 STREET",
    data: 1005550040
  },
  {
    value: "109 EAST 91 STREET",
    data: 1015200006
  },
  {
    value: "109 ELDRIDGE STREET",
    data: 1004180047
  },
  {
    value: "109 ELDRIDGE STREET",
    data: 1004180047
  },
  {
    value: "109 GREENWICH AVENUE",
    data: 1006150078
  },
  {
    value: "109 LAFAYETTE STREET",
    data: 1001977501
  },
  {
    value: "109 LEONARD STREET",
    data: 1001710031
  },
  {
    value: "109 LUDLOW STREET",
    data: 1004100025
  },
  {
    value: "109 LUDLOW STREET",
    data: 1004100025
  },
  {
    value: "109 MAC DOUGAL STREET",
    data: 1005420046
  },
  {
    value: "109 MADISON STREET",
    data: 1002770018
  },
  {
    value: "109 MADISON STREET",
    data: 1002770018
  },
  {
    value: "109 MANHATTAN AVENUE",
    data: 1018400115
  },
  {
    value: "109 MORNINGSIDE AVENUE",
    data: 1019500063
  },
  {
    value: "109 MOTT STREET",
    data: 1002050024
  },
  {
    value: "109 MOTT STREET",
    data: 1002050024
  },
  {
    value: "109 MULBERRY STREET",
    data: 1002060024
  },
  {
    value: "109 NORFOLK STREET",
    data: 1003537502
  },
  {
    value: "109 PRINCE STREET",
    data: 1005147503
  },
  {
    value: "109 READE STREET",
    data: 1001457503
  },
  {
    value: "109 RIVERSIDE DRIVE",
    data: 1012450044
  },
  {
    value: "109 SEAMAN AVENUE",
    data: 1022400001
  },
  {
    value: "109 SEAMAN AVENUE",
    data: 1022400001
  },
  {
    value: "109 SHERMAN AVENUE",
    data: 1022200011
  },
  {
    value: "109 SHERMAN AVENUE",
    data: 1022200011
  },
  {
    value: "109 SOUTH STREET",
    data: 1000970007
  },
  {
    value: "109 SPRING STREET",
    data: 1004990037
  },
  {
    value: "109 SPRING STREET",
    data: 1004990037
  },
  {
    value: "109 ST MARKS PLACE",
    data: 1004360042
  },
  {
    value: "109 ST MARKS PLACE",
    data: 1004360042
  },
  {
    value: "109 THOMPSON STREET",
    data: 1005030025
  },
  {
    value: "109 WASHINGTON STREET",
    data: 1000530006
  },
  {
    value: "109 WAVERLY PLACE",
    data: 1005530034
  },
  {
    value: "109 WEST 10 STREET",
    data: 1006060077
  },
  {
    value: "109 WEST 104 STREET",
    data: 1018590027
  },
  {
    value: "109 WEST 105 STREET",
    data: 1018600026
  },
  {
    value: "109 WEST 105 STREET",
    data: 1018600026
  },
  {
    value: "109 WEST 106 STREET",
    data: 1018610027
  },
  {
    value: "109 WEST 11 STREET",
    data: 1006070050
  },
  {
    value: "109 WEST 113 STREET",
    data: 1018230025
  },
  {
    value: "109 WEST 115 STREET",
    data: 1018250027
  },
  {
    value: "109 WEST 117 STREET",
    data: 1019027502
  },
  {
    value: "109 WEST 118 STREET",
    data: 1019030025
  },
  {
    value: "109 WEST 119 STREET",
    data: 1019040025
  },
  {
    value: "109 WEST 120 STREET",
    data: 1019050124
  },
  {
    value: "109 WEST 122 STREET",
    data: 1019070026
  },
  {
    value: "109 WEST 123 STREET",
    data: 1019080024
  },
  {
    value: "109 WEST 126 STREET",
    data: 1019110026
  },
  {
    value: "109 WEST 128 STREET",
    data: 1019130026
  },
  {
    value: "109 WEST 129 STREET",
    data: 1019140026
  },
  {
    value: "109 WEST 129 STREET",
    data: 1019140026
  },
  {
    value: "109 WEST 130 STREET",
    data: 1019150125
  },
  {
    value: "109 WEST 131 STREET",
    data: 1019160026
  },
  {
    value: "109 WEST 132 STREET",
    data: 1019170126
  },
  {
    value: "109 WEST 136 STREET",
    data: 1019210026
  },
  {
    value: "109 WEST 138 STREET",
    data: 1020070024
  },
  {
    value: "109 WEST 144 STREET",
    data: 1020130026
  },
  {
    value: "109 WEST 144 STREET",
    data: 1020130026
  },
  {
    value: "109 WEST 17 STREET",
    data: 1007930030
  },
  {
    value: "109 WEST 225 STREET",
    data: 1022150530
  },
  {
    value: "109 WEST 24 STREET",
    data: 1008000033
  },
  {
    value: "109 WEST 26 STREET",
    data: 1008020031
  },
  {
    value: "109 WEST 26 STREET",
    data: 1008020031
  },
  {
    value: "109 WEST 27 STREET",
    data: 1008030029
  },
  {
    value: "109 WEST 38 STREET",
    data: 1008140030
  },
  {
    value: "109 WEST 39 STREET",
    data: 1008150021
  },
  {
    value: "109 WEST 45 STREET",
    data: 1009980026
  },
  {
    value: "109 WEST 57 STREET",
    data: 1010100025
  },
  {
    value: "109 WEST 70 STREET",
    data: 1011420029
  },
  {
    value: "109 WEST 74 STREET",
    data: 1011460026
  },
  {
    value: "109 WEST 75 STREET",
    data: 1011470026
  },
  {
    value: "109 WEST 77 STREET",
    data: 1011490028
  },
  {
    value: "109 WEST 78 STREET",
    data: 1011500026
  },
  {
    value: "109 WEST 85 STREET",
    data: 1012160025
  },
  {
    value: "109 WEST 88 STREET",
    data: 1012190026
  },
  {
    value: "109 WEST 90 STREET",
    data: 1012210007
  },
  {
    value: "109 WEST 90 STREET",
    data: 1012210007
  },
  {
    value: "109 WEST 94 STREET",
    data: 1012250023
  },
  {
    value: "109 WEST 94 STREET",
    data: 1012250023
  },
  {
    value: "109 WEST HOUSTON STREET",
    data: 1005170014
  },
  {
    value: "109 WEST WASHINGTON PLCE",
    data: 1005920072
  },
  {
    value: "1090 ST NICHOLAS AVENUE",
    data: 1021210024
  },
  {
    value: "1090 ST NICHOLAS AVENUE",
    data: 1021210024
  },
  {
    value: "1091 2 AVENUE",
    data: 1013310124
  },
  {
    value: "1091 AMSTERDAM AVENUE",
    data: 1018660001
  },
  {
    value: "1091 LEXINGTON AVENUE",
    data: 1014110053
  },
  {
    value: "1091 LEXINGTON AVENUE",
    data: 1014110053
  },
  {
    value: "1093 2 AVENUE",
    data: 1013310025
  },
  {
    value: "1093 2 AVENUE",
    data: 1013310025
  },
  {
    value: "1094 MADISON AVENUE",
    data: 1014940015
  },
  {
    value: "1094 MADISON AVENUE",
    data: 1014940015
  },
  {
    value: "1095 5 AVENUE",
    data: 1015020001
  },
  {
    value: "1095 AVENUE OF THE AMER",
    data: 1009947501
  },
  {
    value: "1095 MADISON AVENUE",
    data: 1014940050
  },
  {
    value: "1095 MADISON AVENUE",
    data: 1014940050
  },
  {
    value: "1095 PARK AVENUE",
    data: 1015170069
  },
  {
    value: "1095 PARK AVENUE",
    data: 1015170069
  },
  {
    value: "1097 1 AVENUE",
    data: 1014350023
  },
  {
    value: "1097 2 AVENUE",
    data: 1013310126
  },
  {
    value: "1097 BROADWAY",
    data: 1008250031
  },
  {
    value: "1099 1 AVENUE",
    data: 1014350024
  },
  {
    value: "1099 2 AVENUE",
    data: 1013310027
  },
  {
    value: "11 1/2 EAST 76 STREET",
    data: 1013910011
  },
  {
    value: "11 1/2 WEST 26 STREET",
    data: 1008280024
  },
  {
    value: "11 2 AVENUE",
    data: 1004567501
  },
  {
    value: "11 8 AVENUE",
    data: 1006250044
  },
  {
    value: "11 ALLEN STREET",
    data: 1002930016
  },
  {
    value: "11 AVENUE",
    data: 1006680030
  },
  {
    value: "11 AVENUE",
    data: 1006939064
  },
  {
    value: "11 AVENUE",
    data: 1007100015
  },
  {
    value: "11 AVENUE",
    data: 1007110001
  },
  {
    value: "11 AVENUE",
    data: 1010780001
  },
  {
    value: "11 AVENUE A",
    data: 1004290039
  },
  {
    value: "11 AVENUE B",
    data: 1003840007
  },
  {
    value: "11 AVENUE C",
    data: 1003840033
  },
  {
    value: "11 AVENUE D",
    data: 1003720039
  },
  {
    value: "11 AVENUE D",
    data: 1003720039
  },
  {
    value: "11 AVENUE OF THE AMER",
    data: 1001910024
  },
  {
    value: "11 BANK STREET",
    data: 1006150041
  },
  {
    value: "11 BLEECKER STREET",
    data: 1005290047
  },
  {
    value: "11 BROADWAY",
    data: 1000130005
  },
  {
    value: "11 BROADWAY TERRACE",
    data: 1021700510
  },
  {
    value: "11 BROADWAY TERRACE",
    data: 1021700510
  },
  {
    value: "11 CARMINE STREET",
    data: 1005890046
  },
  {
    value: "11 CHARLES STREET",
    data: 1006120069
  },
  {
    value: "11 CHARLTON STREET",
    data: 1005190051
  },
  {
    value: "11 CHARLTON STREET",
    data: 1005190051
  },
  {
    value: "11 CHATHAM SQUARE",
    data: 1001620035
  },
  {
    value: "11 CHATHAM SQUARE",
    data: 1001620035
  },
  {
    value: "11 COMMERCE STREET",
    data: 1005870063
  },
  {
    value: "11 COOPER STREET",
    data: 1022380005
  },
  {
    value: "11 DIVISION STREET",
    data: 1002810060
  },
  {
    value: "11 DOYERS STREET",
    data: 1001620028
  },
  {
    value: "11 EAST 10 STREET",
    data: 1005680030
  },
  {
    value: "11 EAST 109 STREET",
    data: 1016150009
  },
  {
    value: "11 EAST 109 STREET",
    data: 1016150009
  },
  {
    value: "11 EAST 11 STREET",
    data: 1005690038
  },
  {
    value: "11 EAST 115 STREET",
    data: 1016210007
  },
  {
    value: "11 EAST 117 STREET",
    data: 1016230108
  },
  {
    value: "11 EAST 12 STREET",
    data: 1005700040
  },
  {
    value: "11 EAST 124 STREET",
    data: 1017490008
  },
  {
    value: "11 EAST 125 STREET",
    data: 1017500104
  },
  {
    value: "11 EAST 126 STREET",
    data: 1017510006
  },
  {
    value: "11 EAST 127 STREET",
    data: 1017520007
  },
  {
    value: "11 EAST 128 STREET",
    data: 1017530008
  },
  {
    value: "11 EAST 129 STREET",
    data: 1017540008
  },
  {
    value: "11 EAST 131 STREET",
    data: 1017560009
  },
  {
    value: "11 EAST 17 STREET",
    data: 1008460011
  },
  {
    value: "11 EAST 20 STREET",
    data: 1008490009
  },
  {
    value: "11 EAST 22 STREET",
    data: 1008517503
  },
  {
    value: "11 EAST 26 STREET",
    data: 1008560009
  },
  {
    value: "11 EAST 29 STREET",
    data: 1008597501
  },
  {
    value: "11 EAST 29 STREET",
    data: 1008599012
  },
  {
    value: "11 EAST 29 STREET",
    data: 1008597501
  },
  {
    value: "11 EAST 30 STREET",
    data: 1008600010
  },
  {
    value: "11 EAST 31 STREET",
    data: 1008610010
  },
  {
    value: "11 EAST 32 STREET",
    data: 1008620011
  },
  {
    value: "11 EAST 32 STREET",
    data: 1008629011
  },
  {
    value: "11 EAST 32 STREET",
    data: 1008620011
  },
  {
    value: "11 EAST 36 STREET",
    data: 1008667501
  },
  {
    value: "11 EAST 36 STREET",
    data: 1008667501
  },
  {
    value: "11 EAST 47 STREET",
    data: 1012830010
  },
  {
    value: "11 EAST 51 STREET",
    data: 1012870010
  },
  {
    value: "11 EAST 52 STREET",
    data: 1012880010
  },
  {
    value: "11 EAST 57 STREET",
    data: 1012930010
  },
  {
    value: "11 EAST 61 STREET",
    data: 1013760011
  },
  {
    value: "11 EAST 62 STREET",
    data: 1013770011
  },
  {
    value: "11 EAST 64 STREET",
    data: 1013790010
  },
  {
    value: "11 EAST 66 STREET",
    data: 1013810010
  },
  {
    value: "11 EAST 66 STREET",
    data: 1013810010
  },
  {
    value: "11 EAST 67 STREET",
    data: 1013820010
  },
  {
    value: "11 EAST 68 STREET",
    data: 1013837501
  },
  {
    value: "11 EAST 69 STREET",
    data: 1013840013
  },
  {
    value: "11 EAST 7 STREET",
    data: 1004630052
  },
  {
    value: "11 EAST 70 STREET",
    data: 1013857501
  },
  {
    value: "11 EAST 71 STREET",
    data: 1013860012
  },
  {
    value: "11 EAST 74 STREET",
    data: 1013890010
  },
  {
    value: "11 EAST 75 STREET",
    data: 1013900011
  },
  {
    value: "11 EAST 76 STREET",
    data: 1013910010
  },
  {
    value: "11 EAST 77 STREET",
    data: 1013920109
  },
  {
    value: "11 EAST 78 STREET",
    data: 1013930012
  },
  {
    value: "11 EAST 78 STREET",
    data: 1013930012
  },
  {
    value: "11 EAST 79 STREET",
    data: 1014910007
  },
  {
    value: "11 EAST 80 STREET",
    data: 1014920010
  },
  {
    value: "11 EAST 80 STREET",
    data: 1014920010
  },
  {
    value: "11 EAST 81 STREET",
    data: 1014930009
  },
  {
    value: "11 EAST 82 STREET",
    data: 1014940011
  },
  {
    value: "11 EAST 84 STREET",
    data: 1014960010
  },
  {
    value: "11 EAST 86 STREET",
    data: 1014980010
  },
  {
    value: "11 EAST 86 STREET",
    data: 1014980010
  },
  {
    value: "11 EAST 87 STREET",
    data: 1014990010
  },
  {
    value: "11 EAST 87 STREET",
    data: 1014990010
  },
  {
    value: "11 EAST 88 STREET",
    data: 1015000009
  },
  {
    value: "11 EAST 88 STREET",
    data: 1015000009
  },
  {
    value: "11 EAST 89 STREET",
    data: 1015010010
  },
  {
    value: "11 EAST 9 STREET",
    data: 1005670029
  },
  {
    value: "11 EAST 90 STREET",
    data: 1015020110
  },
  {
    value: "11 EAST 91 STREET",
    data: 1015030012
  },
  {
    value: "11 EAST 92 STREET",
    data: 1015040009
  },
  {
    value: "11 EAST 93 STREET",
    data: 1015050009
  },
  {
    value: "11 EAST 94 STREET",
    data: 1015060009
  },
  {
    value: "11 EAST BROADWAY",
    data: 1002797502
  },
  {
    value: "11 ELDRIDGE STREET",
    data: 1002920026
  },
  {
    value: "11 ELDRIDGE STREET",
    data: 1002920026
  },
  {
    value: "11 ESSEX STREET",
    data: 1002970024
  },
  {
    value: "11 FT GEORGE HILL",
    data: 1021700129
  },
  {
    value: "11 FT GEORGE HILL",
    data: 1021700129
  },
  {
    value: "11 GAY STREET",
    data: 1005930005
  },
  {
    value: "11 GRAMERCY PARK",
    data: 1008750075
  },
  {
    value: "11 GRAND STREET",
    data: 1002270076
  },
  {
    value: "11 HAMILTON TERRACE",
    data: 1020500097
  },
  {
    value: "11 HARRISON STREET",
    data: 1001807504
  },
  {
    value: "11 HILLSIDE AVENUE",
    data: 1021700105
  },
  {
    value: "11 HILLSIDE AVENUE",
    data: 1021700105
  },
  {
    value: "11 HUBERT STREET",
    data: 1002140012
  },
  {
    value: "11 JACOBUS PLACE",
    data: 1022150407
  },
  {
    value: "11 JACOBUS PLACE",
    data: 1022150407
  },
  {
    value: "11 JANE STREET",
    data: 1006160032
  },
  {
    value: "11 JAY STREET",
    data: 1001807503
  },
  {
    value: "11 JONES STREET",
    data: 1005900078
  },
  {
    value: "11 JONES STREET",
    data: 1005900078
  },
  {
    value: "11 LEROY STREET",
    data: 1005860074
  },
  {
    value: "11 MAC DOUGAL ALLEY",
    data: 1005510125
  },
  {
    value: "11 MADISON AVENUE",
    data: 1008547501
  },
  {
    value: "11 MARKET STREET",
    data: 1002800026
  },
  {
    value: "11 MONROE STREET",
    data: 1002767502
  },
  {
    value: "11 MONROE STREET",
    data: 1002767502
  },
  {
    value: "11 MOTT STREET",
    data: 1001640050
  },
  {
    value: "11 MT MORRIS PARK WEST",
    data: 1017200051
  },
  {
    value: "11 MT MORRIS PARK WEST",
    data: 1017200051
  },
  {
    value: "11 NORTH MOORE STREET",
    data: 1001907509
  },
  {
    value: "11 OLD BROADWAY",
    data: 1019820050
  },
  {
    value: "11 OLD BROADWAY",
    data: 1019820050
  },
  {
    value: "11 OLIVER STREET",
    data: 1002790013
  },
  {
    value: "11 PELL STREET",
    data: 1001620051
  },
  {
    value: "11 PRINCE STREET",
    data: 1005077501
  },
  {
    value: "11 PRINCE STREET",
    data: 1005077501
  },
  {
    value: "11 RIVERSIDE DRIVE",
    data: 1011840031
  },
  {
    value: "11 RIVERSIDE DRIVE",
    data: 1011840031
  },
  {
    value: "11 RIVINGTON STREET",
    data: 1004250023
  },
  {
    value: "11 SEAMAN AVENUE",
    data: 1022370012
  },
  {
    value: "11 SEAMAN AVENUE",
    data: 1022370012
  },
  {
    value: "11 SPRING STREET",
    data: 1004920044
  },
  {
    value: "11 ST MARKS PLACE",
    data: 1004640054
  },
  {
    value: "11 ST MARKS PLACE",
    data: 1004640054
  },
  {
    value: "11 ST NICHOLAS AVENUE",
    data: 1018210025
  },
  {
    value: "11 ST NICHOLAS AVENUE",
    data: 1018210025
  },
  {
    value: "11 STANTON STREET",
    data: 1004260021
  },
  {
    value: "11 STANTON STREET",
    data: 1004260021
  },
  {
    value: "11 STONE STREET",
    data: 1000110029
  },
  {
    value: "11 SUTTON PLACE",
    data: 1013720031
  },
  {
    value: "11 SYLVAN TERRACE",
    data: 1021090075
  },
  {
    value: "11 VAN CORLEAR PLACE",
    data: 1022150425
  },
  {
    value: "11 VANDAM STREET",
    data: 1005060045
  },
  {
    value: "11 VERMILYEA AVENUE",
    data: 1022240005
  },
  {
    value: "11 VERMILYEA AVENUE",
    data: 1022240005
  },
  {
    value: "11 VESTRY STREET",
    data: 1002207501
  },
  {
    value: "11 WADSWORTH AVENUE",
    data: 1021430005
  },
  {
    value: "11 WADSWORTH AVENUE",
    data: 1021430005
  },
  {
    value: "11 WASHINGTON TERRACE",
    data: 1021560149
  },
  {
    value: "11 WAVERLY PLACE",
    data: 1005480040
  },
  {
    value: "11 WAVERLY PLACE",
    data: 1005480040
  },
  {
    value: "11 WEST 10 STREET",
    data: 1005740050
  },
  {
    value: "11 WEST 103 STREET",
    data: 1018390024
  },
  {
    value: "11 WEST 107 STREET",
    data: 1018430025
  },
  {
    value: "11 WEST 108 STREET",
    data: 1018440024
  },
  {
    value: "11 WEST 108 STREET",
    data: 1018440024
  },
  {
    value: "11 WEST 11 STREET",
    data: 1005750056
  },
  {
    value: "11 WEST 116 STREET",
    data: 1016000030
  },
  {
    value: "11 WEST 118 STREET",
    data: 1017170028
  },
  {
    value: "11 WEST 119 STREET",
    data: 1017180131
  },
  {
    value: "11 WEST 12 STREET",
    data: 1005760048
  },
  {
    value: "11 WEST 120 STREET",
    data: 1017200011
  },
  {
    value: "11 WEST 121 STREET",
    data: 1017200045
  },
  {
    value: "11 WEST 122 STREET",
    data: 1017210010
  },
  {
    value: "11 WEST 126 STREET",
    data: 1017240030
  },
  {
    value: "11 WEST 127 STREET",
    data: 1017250030
  },
  {
    value: "11 WEST 128 STREET",
    data: 1017260030
  },
  {
    value: "11 WEST 129 STREET",
    data: 1017270028
  },
  {
    value: "11 WEST 137 STREET",
    data: 1017350028
  },
  {
    value: "11 WEST 137 STREET",
    data: 1017350028
  },
  {
    value: "11 WEST 16 STREET",
    data: 1008180027
  },
  {
    value: "11 WEST 17 STREET",
    data: 1008190031
  },
  {
    value: "11 WEST 17 STREET",
    data: 1008190031
  },
  {
    value: "11 WEST 18 STREET",
    data: 1008207502
  },
  {
    value: "11 WEST 19 STREET",
    data: 1008210032
  },
  {
    value: "11 WEST 20 STREET",
    data: 1008227501
  },
  {
    value: "11 WEST 25 STREET",
    data: 1008270027
  },
  {
    value: "11 WEST 29 STREET",
    data: 1008310028
  },
  {
    value: "11 WEST 30 STREET",
    data: 1008320032
  },
  {
    value: "11 WEST 30 STREET",
    data: 1008320032
  },
  {
    value: "11 WEST 32 STREET",
    data: 1008340033
  },
  {
    value: "11 WEST 34 STREET",
    data: 1008360025
  },
  {
    value: "11 WEST 36 STREET",
    data: 1008380035
  },
  {
    value: "11 WEST 37 STREET",
    data: 1008390033
  },
  {
    value: "11 WEST 42 STREET",
    data: 1012580021
  },
  {
    value: "11 WEST 46 STREET",
    data: 1012620030
  },
  {
    value: "11 WEST 51 STREET",
    data: 1012677502
  },
  {
    value: "11 WEST 56 STREET",
    data: 1012720028
  },
  {
    value: "11 WEST 67 STREET",
    data: 1011200023
  },
  {
    value: "11 WEST 67 STREET",
    data: 1011200023
  },
  {
    value: "11 WEST 69 STREET",
    data: 1011220023
  },
  {
    value: "11 WEST 69 STREET",
    data: 1011220023
  },
  {
    value: "11 WEST 70 STREET",
    data: 1011230025
  },
  {
    value: "11 WEST 73 STREET",
    data: 1011260025
  },
  {
    value: "11 WEST 74 STREET",
    data: 1011270025
  },
  {
    value: "11 WEST 8 STREET",
    data: 1005720049
  },
  {
    value: "11 WEST 8 STREET",
    data: 1005720049
  },
  {
    value: "11 WEST 81 STREET",
    data: 1011950023
  },
  {
    value: "11 WEST 81 STREET",
    data: 1011950023
  },
  {
    value: "11 WEST 82 STREET",
    data: 1011960024
  },
  {
    value: "11 WEST 82 STREET",
    data: 1011960024
  },
  {
    value: "11 WEST 84 STREET",
    data: 1011980025
  },
  {
    value: "11 WEST 89 STREET",
    data: 1012030028
  },
  {
    value: "11 WEST 9 STREET",
    data: 1005730050
  },
  {
    value: "11 WEST 95 STREET",
    data: 1012090026
  },
  {
    value: "110 1 AVENUE",
    data: 1004340006
  },
  {
    value: "110 2 AVENUE",
    data: 1004480004
  },
  {
    value: "110 5 AVENUE",
    data: 1008180041
  },
  {
    value: "110 7 AVENUE SOUTH",
    data: 1005910054
  },
  {
    value: "110 9 AVENUE",
    data: 1007410002
  },
  {
    value: "110 9 AVENUE",
    data: 1007410002
  },
  {
    value: "110 AVENUE C",
    data: 1003770001
  },
  {
    value: "110 AVENUE OF THE AMER",
    data: 1004760015
  },
  {
    value: "110 AVENUE OF THE AMERICAS",
    data: 1004760015
  },
  {
    value: "110 BANK STREET",
    data: 1006340016
  },
  {
    value: "110 BANK STREET",
    data: 1006340016
  },
  {
    value: "110 BENNETT AVENUE",
    data: 1021800199
  },
  {
    value: "110 BENNETT AVENUE",
    data: 1021800199
  },
  {
    value: "110 BOWERY",
    data: 1002390026
  },
  {
    value: "110 CHAMBERS STREET",
    data: 1001360027
  },
  {
    value: "110 COLUMBUS AVENUE",
    data: 1012220040
  },
  {
    value: "110 CONVENT AVENUE",
    data: 1019700060
  },
  {
    value: "110 CONVENT AVENUE",
    data: 1019700060
  },
  {
    value: "110 DYCKMAN STREET",
    data: 1021740065
  },
  {
    value: "110 EAST 1 STREET",
    data: 1004290047
  },
  {
    value: "110 EAST 1 STREET",
    data: 1004290047
  },
  {
    value: "110 EAST 10 STREET",
    data: 1004650012
  },
  {
    value: "110 EAST 101 STREET",
    data: 1016280069
  },
  {
    value: "110 EAST 107 STREET",
    data: 1016340065
  },
  {
    value: "110 EAST 116 STREET",
    data: 1016437502
  },
  {
    value: "110 EAST 119 STREET",
    data: 1017670067
  },
  {
    value: "110 EAST 125 STREET",
    data: 1017730067
  },
  {
    value: "110 EAST 126 STREET",
    data: 1017740061
  },
  {
    value: "110 EAST 13 STREET",
    data: 1005580013
  },
  {
    value: "110 EAST 13 STREET",
    data: 1005580013
  },
  {
    value: "110 EAST 17 STREET",
    data: 1008720071
  },
  {
    value: "110 EAST 23 STREET",
    data: 1008780069
  },
  {
    value: "110 EAST 31 STREET",
    data: 1008860081
  },
  {
    value: "110 EAST 35 STREET",
    data: 1008900079
  },
  {
    value: "110 EAST 36 STREET",
    data: 1008910083
  },
  {
    value: "110 EAST 36 STREET",
    data: 1008910083
  },
  {
    value: "110 EAST 37 STREET",
    data: 1008920078
  },
  {
    value: "110 EAST 42 STREET",
    data: 1012967501
  },
  {
    value: "110 EAST 55 STREET",
    data: 1013090066
  },
  {
    value: "110 EAST 57 STREET",
    data: 1013110065
  },
  {
    value: "110 EAST 57 STREET",
    data: 1013110065
  },
  {
    value: "110 EAST 61 STREET",
    data: 1013950167
  },
  {
    value: "110 EAST 64 STREET",
    data: 1013980168
  },
  {
    value: "110 EAST 66 STREET",
    data: 1014000067
  },
  {
    value: "110 EAST 7 STREET",
    data: 1004340019
  },
  {
    value: "110 EAST 7 STREET",
    data: 1004340019
  },
  {
    value: "110 EAST 70 STREET",
    data: 1014040067
  },
  {
    value: "110 EAST 71 STREET",
    data: 1014057501
  },
  {
    value: "110 EAST 71 STREET",
    data: 1014057501
  },
  {
    value: "110 EAST 73 STREET",
    data: 1014070168
  },
  {
    value: "110 EAST 76 STREET",
    data: 1014100068
  },
  {
    value: "110 EAST 78 STREET",
    data: 1014120067
  },
  {
    value: "110 EAST 84 STREET",
    data: 1015120066
  },
  {
    value: "110 EAST 84 STREET",
    data: 1015120066
  },
  {
    value: "110 EAST 87 STREET",
    data: 1015157501
  },
  {
    value: "110 EAST 97 STREET",
    data: 1016247501
  },
  {
    value: "110 EAST END AVENUE",
    data: 1015810030
  },
  {
    value: "110 EAST END AVENUE",
    data: 1015810030
  },
  {
    value: "110 EDGECOMBE AVENUE",
    data: 1020427501
  },
  {
    value: "110 FORSYTH STREET",
    data: 1004190040
  },
  {
    value: "110 FORSYTH STREET",
    data: 1004190040
  },
  {
    value: "110 FULTON STREET",
    data: 1000787510
  },
  {
    value: "110 FULTON STREET",
    data: 1000787510
  },
  {
    value: "110 GREENWICH STREET",
    data: 1000530033
  },
  {
    value: "110 GREENWICH STREET",
    data: 1000530033
  },
  {
    value: "110 HORATIO STREET",
    data: 1006420004
  },
  {
    value: "110 HORATIO STREET",
    data: 1006420004
  },
  {
    value: "110 HUDSON STREET",
    data: 1001897502
  },
  {
    value: "110 JOHN STREET",
    data: 1000690053
  },
  {
    value: "110 LAUREL HILL TERRACE",
    data: 1021490120
  },
  {
    value: "110 LAUREL HILL TERRACE",
    data: 1021490120
  },
  {
    value: "110 LEROY STREET",
    data: 1006010052
  },
  {
    value: "110 LEXINGTON AVENUE",
    data: 1008830071
  },
  {
    value: "110 LIBERTY STREET",
    data: 1000527501
  },
  {
    value: "110 LUDLOW STREET",
    data: 1004100037
  },
  {
    value: "110 LUDLOW STREET",
    data: 1004100037
  },
  {
    value: "110 MAC DOUGAL STREET",
    data: 1005400004
  },
  {
    value: "110 MAC DOUGAL STREET",
    data: 1005400004
  },
  {
    value: "110 MADISON AVENUE",
    data: 1008597503
  },
  {
    value: "110 MADISON STREET",
    data: 1002760034
  },
  {
    value: "110 MADISON STREET",
    data: 1002760034
  },
  {
    value: "110 MAIDEN LANE",
    data: 1000390012
  },
  {
    value: "110 MORNINGSIDE DRIVE",
    data: 1019630048
  },
  {
    value: "110 MORNINGSIDE DRIVE",
    data: 1019630048
  },
  {
    value: "110 MULBERRY STREET",
    data: 1002050006
  },
  {
    value: "110 MULBERRY STREET",
    data: 1002050006
  },
  {
    value: "110 NASSAU STREET",
    data: 1000920024
  },
  {
    value: "110 POST AVENUE",
    data: 1022220035
  },
  {
    value: "110 POST AVENUE",
    data: 1022220035
  },
  {
    value: "110 PRINCE STREET",
    data: 1005000021
  },
  {
    value: "110 READE STREET",
    data: 1001460010
  },
  {
    value: "110 RIDGE STREET",
    data: 1003440040
  },
  {
    value: "110 RIVERSIDE DRIVE",
    data: 1012450047
  },
  {
    value: "110 RIVERSIDE DRIVE",
    data: 1012450047
  },
  {
    value: "110 RIVINGTON STREET",
    data: 1004110070
  },
  {
    value: "110 SOUTH STREET",
    data: 1000970006
  },
  {
    value: "110 ST MARKS PLACE",
    data: 1004350019
  },
  {
    value: "110 ST MARKS PLACE",
    data: 1004350019
  },
  {
    value: "110 ST NICHOLAS AVENUE",
    data: 1018250064
  },
  {
    value: "110 ST NICHOLAS AVENUE",
    data: 1018250064
  },
  {
    value: "110 SUFFOLK STREET",
    data: 1003480007
  },
  {
    value: "110 SUFFOLK STREET",
    data: 1003480007
  },
  {
    value: "110 TERRACE VIEW AVENUE",
    data: 1022150230
  },
  {
    value: "110 TERRACE VIEW AVENUE",
    data: 1022150230
  },
  {
    value: "110 THOMPSON STREET",
    data: 1005020012
  },
  {
    value: "110 THOMPSON STREET",
    data: 1005020012
  },
  {
    value: "110 UNIVERSITY PLACE",
    data: 1005707503
  },
  {
    value: "110 WALL STREET",
    data: 1000370008
  },
  {
    value: "110 WALL STREET",
    data: 1000370008
  },
  {
    value: "110 WAVERLY PLACE",
    data: 1005520053
  },
  {
    value: "110 WEST 109 STREET",
    data: 1018630041
  },
  {
    value: "110 WEST 109 STREET",
    data: 1018630041
  },
  {
    value: "110 WEST 114 STREET",
    data: 1018230041
  },
  {
    value: "110 WEST 114 STREET",
    data: 1018230041
  },
  {
    value: "110 WEST 116 STREET",
    data: 1018250040
  },
  {
    value: "110 WEST 118 STREET",
    data: 1019020139
  },
  {
    value: "110 WEST 119 STREET",
    data: 1019030041
  },
  {
    value: "110 WEST 120 STREET",
    data: 1019040040
  },
  {
    value: "110 WEST 121 STREET",
    data: 1019050040
  },
  {
    value: "110 WEST 123 STREET",
    data: 1019070040
  },
  {
    value: "110 WEST 124 STREET",
    data: 1019080038
  },
  {
    value: "110 WEST 127 STREET",
    data: 1019117501
  },
  {
    value: "110 WEST 129 STREET",
    data: 1019130038
  },
  {
    value: "110 WEST 129 STREET",
    data: 1019130038
  },
  {
    value: "110 WEST 13 STREET",
    data: 1006080034
  },
  {
    value: "110 WEST 130 STREET",
    data: 1019140039
  },
  {
    value: "110 WEST 131 STREET",
    data: 1019150040
  },
  {
    value: "110 WEST 137 STREET",
    data: 1019210040
  },
  {
    value: "110 WEST 139 STREET",
    data: 1020070042
  },
  {
    value: "110 WEST 14 STREET",
    data: 1006090033
  },
  {
    value: "110 WEST 144 STREET",
    data: 1020120044
  },
  {
    value: "110 WEST 144 STREET",
    data: 1020120044
  },
  {
    value: "110 WEST 15 STREET",
    data: 1007900044
  },
  {
    value: "110 WEST 17 STREET",
    data: 1007927506
  },
  {
    value: "110 WEST 25 STREET",
    data: 1008007502
  },
  {
    value: "110 WEST 26 STREET",
    data: 1008010049
  },
  {
    value: "110 WEST 26 STREET",
    data: 1008010049
  },
  {
    value: "110 WEST 28 STREET",
    data: 1008030047
  },
  {
    value: "110 WEST 30 STREET",
    data: 1008050067
  },
  {
    value: "110 WEST 32 STREET",
    data: 1008070050
  },
  {
    value: "110 WEST 40 STREET",
    data: 1008150039
  },
  {
    value: "110 WEST 57 STREET",
    data: 1010090040
  },
  {
    value: "110 WEST 69 STREET",
    data: 1011400037
  },
  {
    value: "110 WEST 69 STREET",
    data: 1011400037
  },
  {
    value: "110 WEST 71 STREET",
    data: 1011420037
  },
  {
    value: "110 WEST 73 STREET",
    data: 1011440037
  },
  {
    value: "110 WEST 73 STREET",
    data: 1011440037
  },
  {
    value: "110 WEST 74 STREET",
    data: 1011450137
  },
  {
    value: "110 WEST 75 STREET",
    data: 1011460139
  },
  {
    value: "110 WEST 76 STREET",
    data: 1011470038
  },
  {
    value: "110 WEST 78 STREET",
    data: 1011490039
  },
  {
    value: "110 WEST 79 STREET",
    data: 1011500136
  },
  {
    value: "110 WEST 80 STREET",
    data: 1012100040
  },
  {
    value: "110 WEST 81 STREET",
    data: 1012110038
  },
  {
    value: "110 WEST 82 STREET",
    data: 1012120038
  },
  {
    value: "110 WEST 86 STREET",
    data: 1012167502
  },
  {
    value: "110 WEST 86 STREET",
    data: 1012167502
  },
  {
    value: "110 WEST 87 STREET",
    data: 1012170038
  },
  {
    value: "110 WEST 90 STREET",
    data: 1012207504
  },
  {
    value: "110 WEST 90 STREET",
    data: 1012207504
  },
  {
    value: "110 WEST 94 STREET",
    data: 1012240038
  },
  {
    value: "110 WEST 94 STREET",
    data: 1012240038
  },
  {
    value: "110 WEST 96 STREET",
    data: 1012260040
  },
  {
    value: "110 WEST 96 STREET",
    data: 1012260040
  },
  {
    value: "110 WEST END AVENUE",
    data: 1011560001
  },
  {
    value: "110 WEST END AVENUE",
    data: 1011560001
  },
  {
    value: "110 WEST HOUSTON STREET",
    data: 1005250026
  },
  {
    value: "110 WEST WASHINGTON PLCE",
    data: 1005920014
  },
  {
    value: "110 WILLIAM STREET",
    data: 1000770008
  },
  {
    value: "1100 5 AVENUE",
    data: 1015030001
  },
  {
    value: "1100 PARK AVENUE",
    data: 1015010033
  },
  {
    value: "1100 PARK AVENUE",
    data: 1015010033
  },
  {
    value: "1100 WEST 114 STREET",
    data: 1018860001
  },
  {
    value: "1101 1 AVENUE",
    data: 1014350025
  },
  {
    value: "1101 2 AVENUE",
    data: 1013310028
  },
  {
    value: "1101 AMSTERDAM AVENUE",
    data: 1018670001
  },
  {
    value: "1101 LEXINGTON AVENUE",
    data: 1014120022
  },
  {
    value: "1103 1 AVENUE",
    data: 1014350026
  },
  {
    value: "1104 LEXINGTON AVENUE",
    data: 1014120016
  },
  {
    value: "1104 LEXINGTON AVENUE",
    data: 1014120016
  },
  {
    value: "1105 1 AVENUE",
    data: 1014350027
  },
  {
    value: "1105 1 AVENUE",
    data: 1014350027
  },
  {
    value: "1105 LEXINGTON AVENUE",
    data: 1014120121
  },
  {
    value: "1105 PARK AVENUE",
    data: 1015180001
  },
  {
    value: "1105 PARK AVENUE",
    data: 1015180001
  },
  {
    value: "1107 1 AVENUE",
    data: 1014350028
  },
  {
    value: "1107 1 AVENUE",
    data: 1014350028
  },
  {
    value: "1107 5 AVENUE",
    data: 1015030069
  },
  {
    value: "1107 5 AVENUE",
    data: 1015030069
  },
  {
    value: "1107 BROADWAY",
    data: 1008267501
  },
  {
    value: "1107 BROADWAY",
    data: 1008267501
  },
  {
    value: "1107 LEXINGTON AVENUE",
    data: 1014120021
  },
  {
    value: "1109 1 AVENUE",
    data: 1014350029
  },
  {
    value: "1109 1 AVENUE",
    data: 1014350029
  },
  {
    value: "1109 5 AVENUE",
    data: 1015040001
  },
  {
    value: "1109 LEXINGTON AVENUE",
    data: 1014120120
  },
  {
    value: "1109 MADISON AVENUE",
    data: 1014950021
  },
  {
    value: "1109 MADISON AVENUE",
    data: 1014950021
  },
  {
    value: "111 1 AVENUE",
    data: 1004480028
  },
  {
    value: "111 3 AVENUE",
    data: 1004697502
  },
  {
    value: "111 3 AVENUE",
    data: 1004697502
  },
  {
    value: "111 4 AVENUE",
    data: 1005560044
  },
  {
    value: "111 4 AVENUE",
    data: 1005560044
  },
  {
    value: "111 AUDUBON AVENUE",
    data: 1021280029
  },
  {
    value: "111 AUDUBON AVENUE",
    data: 1021280029
  },
  {
    value: "111 AVENUE A",
    data: 1004350037
  },
  {
    value: "111 AVENUE A",
    data: 1004350037
  },
  {
    value: "111 AVENUE C",
    data: 1003900036
  },
  {
    value: "111 BANK STREET",
    data: 1006350036
  },
  {
    value: "111 BEDFORD STREET",
    data: 1005850053
  },
  {
    value: "111 BOWERY",
    data: 1003040009
  },
  {
    value: "111 BROADWAY",
    data: 1000490002
  },
  {
    value: "111 CENTRAL PARK NORTH",
    data: 1018207503
  },
  {
    value: "111 CENTRAL PARK NORTH",
    data: 1018207503
  },
  {
    value: "111 CENTRE STREET",
    data: 1001690010
  },
  {
    value: "111 CHAMBERS STREET",
    data: 1001450005
  },
  {
    value: "111 CHRISTOPHER STREET",
    data: 1006190041
  },
  {
    value: "111 CHRISTOPHER STREET",
    data: 1006190041
  },
  {
    value: "111 CHRYSTIE STREET",
    data: 1004230025
  },
  {
    value: "111 CHRYSTIE STREET",
    data: 1004230025
  },
  {
    value: "111 CHURCH STREET",
    data: 1001240012
  },
  {
    value: "111 DIVISION STREET",
    data: 1002830094
  },
  {
    value: "111 DIVISION STREET",
    data: 1002830094
  },
  {
    value: "111 EAST 100 STREET",
    data: 1016280006
  },
  {
    value: "111 EAST 100 STREET",
    data: 1016280006
  },
  {
    value: "111 EAST 101 STREET",
    data: 1016290103
  },
  {
    value: "111 EAST 111 STREET",
    data: 1016390001
  },
  {
    value: "111 EAST 115 STREET",
    data: 1016430006
  },
  {
    value: "111 EAST 115 STREET",
    data: 1016430006
  },
  {
    value: "111 EAST 117 STREET",
    data: 1016450005
  },
  {
    value: "111 EAST 117 STREET",
    data: 1016450005
  },
  {
    value: "111 EAST 118 STREET",
    data: 1017670005
  },
  {
    value: "111 EAST 118 STREET",
    data: 1017670005
  },
  {
    value: "111 EAST 119 STREET",
    data: 1017680005
  },
  {
    value: "111 EAST 119 STREET",
    data: 1017680005
  },
  {
    value: "111 EAST 12 STREET",
    data: 1005580048
  },
  {
    value: "111 EAST 12 STREET",
    data: 1005580048
  },
  {
    value: "111 EAST 123 STREET",
    data: 1017720008
  },
  {
    value: "111 EAST 125 STREET",
    data: 1017740007
  },
  {
    value: "111 EAST 15 STREET",
    data: 1008710010
  },
  {
    value: "111 EAST 19 STREET",
    data: 1008750011
  },
  {
    value: "111 EAST 2 STREET",
    data: 1004290018
  },
  {
    value: "111 EAST 22 STREET",
    data: 1008780008
  },
  {
    value: "111 EAST 24 STREET",
    data: 1008800009
  },
  {
    value: "111 EAST 26 STREET",
    data: 1008820008
  },
  {
    value: "111 EAST 26 STREET",
    data: 1008820008
  },
  {
    value: "111 EAST 29 STREET",
    data: 1008850011
  },
  {
    value: "111 EAST 30 STREET",
    data: 1008867501
  },
  {
    value: "111 EAST 30 STREET",
    data: 1008867501
  },
  {
    value: "111 EAST 31 STREET",
    data: 1008870009
  },
  {
    value: "111 EAST 35 STREET",
    data: 1008910009
  },
  {
    value: "111 EAST 36 STREET",
    data: 1008920007
  },
  {
    value: "111 EAST 37 STREET",
    data: 1008930010
  },
  {
    value: "111 EAST 38 STREET",
    data: 1008940010
  },
  {
    value: "111 EAST 38 STREET",
    data: 1008940010
  },
  {
    value: "111 EAST 39 STREET",
    data: 1008950011
  },
  {
    value: "111 EAST 48 STREET",
    data: 1013030014
  },
  {
    value: "111 EAST 54 STREET",
    data: 1013090005
  },
  {
    value: "111 EAST 58 STREET",
    data: 1013130005
  },
  {
    value: "111 EAST 59 STREET",
    data: 1013940005
  },
  {
    value: "111 EAST 60 STREET",
    data: 1013950105
  },
  {
    value: "111 EAST 61 STREET",
    data: 1013960105
  },
  {
    value: "111 EAST 62 STREET",
    data: 1013970005
  },
  {
    value: "111 EAST 64 STREET",
    data: 1013990004
  },
  {
    value: "111 EAST 65 STREET",
    data: 1014000006
  },
  {
    value: "111 EAST 67 STREET",
    data: 1014020006
  },
  {
    value: "111 EAST 67 STREET",
    data: 1014020006
  },
  {
    value: "111 EAST 69 STREET",
    data: 1014040007
  },
  {
    value: "111 EAST 7 STREET",
    data: 1004350045
  },
  {
    value: "111 EAST 7 STREET",
    data: 1004350045
  },
  {
    value: "111 EAST 70 STREET",
    data: 1014050007
  },
  {
    value: "111 EAST 73 STREET",
    data: 1014080107
  },
  {
    value: "111 EAST 75 STREET",
    data: 1014100009
  },
  {
    value: "111 EAST 75 STREET",
    data: 1014100009
  },
  {
    value: "111 EAST 77 STREET",
    data: 1014120009
  },
  {
    value: "111 EAST 78 STREET",
    data: 1014130008
  },
  {
    value: "111 EAST 79 STREET",
    data: 1015080005
  },
  {
    value: "111 EAST 81 STREET",
    data: 1015100008
  },
  {
    value: "111 EAST 85 STREET",
    data: 1015140008
  },
  {
    value: "111 EAST 85 STREET",
    data: 1015140008
  },
  {
    value: "111 EAST 88 STREET",
    data: 1015177501
  },
  {
    value: "111 EAST 88 STREET",
    data: 1015177501
  },
  {
    value: "111 ELDRIDGE STREET",
    data: 1004180046
  },
  {
    value: "111 ELDRIDGE STREET",
    data: 1004180046
  },
  {
    value: "111 FRANKLIN STREET",
    data: 1001770024
  },
  {
    value: "111 FULTON STREET",
    data: 1000917502
  },
  {
    value: "111 FULTON STREET",
    data: 1000917502
  },
  {
    value: "111 GREENWICH AVENUE",
    data: 1006150076
  },
  {
    value: "111 GREENWICH AVENUE",
    data: 1006150076
  },
  {
    value: "111 HENRY STREET",
    data: 1002830003
  },
  {
    value: "111 HESTER STREET",
    data: 1003060037
  },
  {
    value: "111 HUDSON STREET",
    data: 1001877503
  },
  {
    value: "111 JANE STREET",
    data: 1006427501
  },
  {
    value: "111 JOHN STREET",
    data: 1000750030
  },
  {
    value: "111 LENOX AVENUE",
    data: 1018250033
  },
  {
    value: "111 LEROY STREET",
    data: 1006020083
  },
  {
    value: "111 LEXINGTON AVENUE",
    data: 1008830068
  },
  {
    value: "111 MAC DOUGAL STREET",
    data: 1005420044
  },
  {
    value: "111 MAC DOUGAL STREET",
    data: 1005420044
  },
  {
    value: "111 MANHATTAN AVENUE",
    data: 1018400016
  },
  {
    value: "111 MERCER STREET",
    data: 1004997507
  },
  {
    value: "111 MORNINGSIDE AVENUE",
    data: 1019500062
  },
  {
    value: "111 MOTT STREET",
    data: 1002050023
  },
  {
    value: "111 MOTT STREET",
    data: 1002050023
  },
  {
    value: "111 MURRAY STREET",
    data: 1001420100
  },
  {
    value: "111 NORFOLK STREET",
    data: 1003530032
  },
  {
    value: "111 NORFOLK STREET",
    data: 1003530032
  },
  {
    value: "111 READE STREET",
    data: 1001450016
  },
  {
    value: "111 RIVINGTON STREET",
    data: 1004100050
  },
  {
    value: "111 SOUTH STREET",
    data: 1000970005
  },
  {
    value: "111 ST MARKS PLACE",
    data: 1004360041
  },
  {
    value: "111 ST MARKS PLACE",
    data: 1004360041
  },
  {
    value: "111 SULLIVAN STREET",
    data: 1005030008
  },
  {
    value: "111 SULLIVAN STREET",
    data: 1005030008
  },
  {
    value: "111 THOMPSON STREET",
    data: 1005030024
  },
  {
    value: "111 VARICK STREET",
    data: 1005780071
  },
  {
    value: "111 VERMILYEA AVENUE",
    data: 1022260007
  },
  {
    value: "111 WADSWORTH AVENUE",
    data: 1021620001
  },
  {
    value: "111 WADSWORTH AVENUE",
    data: 1021629001
  },
  {
    value: "111 WALL STREET",
    data: 1000350010
  },
  {
    value: "111 WASHINGTON STREET",
    data: 1000530012
  },
  {
    value: "111 WATTS STREET",
    data: 1002250008
  },
  {
    value: "111 WAVERLY PLACE",
    data: 1005530035
  },
  {
    value: "111 WEST 104 STREET",
    data: 1018590024
  },
  {
    value: "111 WEST 104 STREET",
    data: 1018590024
  },
  {
    value: "111 WEST 105 STREET",
    data: 1018600020
  },
  {
    value: "111 WEST 106 STREET",
    data: 1018610026
  },
  {
    value: "111 WEST 106 STREET",
    data: 1018610026
  },
  {
    value: "111 WEST 108 STREET",
    data: 1018630017
  },
  {
    value: "111 WEST 11 STREET",
    data: 1006070051
  },
  {
    value: "111 WEST 11 STREET",
    data: 1006070051
  },
  {
    value: "111 WEST 111 STREET",
    data: 1018210121
  },
  {
    value: "111 WEST 113 STREET",
    data: 1018237503
  },
  {
    value: "111 WEST 113 STREET",
    data: 1018237503
  },
  {
    value: "111 WEST 115 STREET",
    data: 1018250026
  },
  {
    value: "111 WEST 117 STREET",
    data: 1019027503
  },
  {
    value: "111 WEST 118 STREET",
    data: 1019030024
  },
  {
    value: "111 WEST 119 STREET",
    data: 1019040124
  },
  {
    value: "111 WEST 120 STREET",
    data: 1019050024
  },
  {
    value: "111 WEST 122 STREET",
    data: 1019070025
  },
  {
    value: "111 WEST 123 STREET",
    data: 1019080023
  },
  {
    value: "111 WEST 126 STREET",
    data: 1019110125
  },
  {
    value: "111 WEST 126 STREET",
    data: 1019110136
  },
  {
    value: "111 WEST 127 STREET",
    data: 1019120012
  },
  {
    value: "111 WEST 128 STREET",
    data: 1019130025
  },
  {
    value: "111 WEST 13 STREET",
    data: 1006090051
  },
  {
    value: "111 WEST 130 STREET",
    data: 1019150025
  },
  {
    value: "111 WEST 131 STREET",
    data: 1019160025
  },
  {
    value: "111 WEST 131 STREET",
    data: 1019160025
  },
  {
    value: "111 WEST 132 STREET",
    data: 1019170026
  },
  {
    value: "111 WEST 133 STREET",
    data: 1019180024
  },
  {
    value: "111 WEST 135 STREET",
    data: 1019200023
  },
  {
    value: "111 WEST 135 STREET",
    data: 1019200023
  },
  {
    value: "111 WEST 136 STREET",
    data: 1019210025
  },
  {
    value: "111 WEST 137 STREET",
    data: 1020060024
  },
  {
    value: "111 WEST 137 STREET",
    data: 1020060024
  },
  {
    value: "111 WEST 138 STREET",
    data: 1020070023
  },
  {
    value: "111 WEST 141 STREET",
    data: 1020100021
  },
  {
    value: "111 WEST 141 STREET",
    data: 1020100021
  },
  {
    value: "111 WEST 143 STREET",
    data: 1020120023
  },
  {
    value: "111 WEST 16 STREET",
    data: 1007920028
  },
  {
    value: "111 WEST 16 STREET",
    data: 1007920028
  },
  {
    value: "111 WEST 17 STREET",
    data: 1007930029
  },
  {
    value: "111 WEST 19 STREET",
    data: 1007950028
  },
  {
    value: "111 WEST 225 STREET",
    data: 1022150534
  },
  {
    value: "111 WEST 225 STREET",
    data: 1022150534
  },
  {
    value: "111 WEST 28 STREET",
    data: 1008047502
  },
  {
    value: "111 WEST 28 STREET",
    data: 1008047502
  },
  {
    value: "111 WEST 44 STREET",
    data: 1009970023
  },
  {
    value: "111 WEST 67 STREET",
    data: 1011397503
  },
  {
    value: "111 WEST 68 STREET",
    data: 1011400026
  },
  {
    value: "111 WEST 68 STREET",
    data: 1011400026
  },
  {
    value: "111 WEST 69 STREET",
    data: 1011410028
  },
  {
    value: "111 WEST 70 STREET",
    data: 1011420028
  },
  {
    value: "111 WEST 71 STREET",
    data: 1011430030
  },
  {
    value: "111 WEST 71 STREET",
    data: 1011430030
  },
  {
    value: "111 WEST 74 STREET",
    data: 1011460025
  },
  {
    value: "111 WEST 75 STREET",
    data: 1011470025
  },
  {
    value: "111 WEST 77 STREET",
    data: 1011490027
  },
  {
    value: "111 WEST 78 STREET",
    data: 1011500125
  },
  {
    value: "111 WEST 85 STREET",
    data: 1012160124
  },
  {
    value: "111 WEST 88 STREET",
    data: 1012190025
  },
  {
    value: "111 WEST 95 STREET",
    data: 1012260026
  },
  {
    value: "111 WEST 96 STREET",
    data: 1018510024
  },
  {
    value: "111 WILLIAM STREET",
    data: 1000787507
  },
  {
    value: "111 WORTH STREET",
    data: 1001700020
  },
  {
    value: "111 WORTH STREET",
    data: 1001700020
  },
  {
    value: "1110 2 AVENUE",
    data: 1013510001
  },
  {
    value: "1110 2 AVENUE",
    data: 1013510001
  },
  {
    value: "1110 PARK AVENUE",
    data: 1015017502
  },
  {
    value: "1111 1 AVENUE",
    data: 1014350030
  },
  {
    value: "1111 1 AVENUE",
    data: 1014350030
  },
  {
    value: "1111 AVENUE OF THE AMER",
    data: 1009950033
  },
  {
    value: "1111 LEXINGTON AVENUE",
    data: 1014120020
  },
  {
    value: "1111 PARK AVENUE",
    data: 1015180069
  },
  {
    value: "1111 PARK AVENUE",
    data: 1015180069
  },
  {
    value: "1112 PARK AVENUE",
    data: 1015010040
  },
  {
    value: "1112 PARK AVENUE",
    data: 1015010040
  },
  {
    value: "1112 ST NICHOLAS AVENUE",
    data: 1021240001
  },
  {
    value: "1113 1 AVENUE",
    data: 1014360023
  },
  {
    value: "1113 1 AVENUE",
    data: 1014360023
  },
  {
    value: "1113 LEXINGTON AVENUE",
    data: 1014120153
  },
  {
    value: "1113 MADISON AVENUE",
    data: 1014950050
  },
  {
    value: "1113 YORK AVENUE",
    data: 1014550021
  },
  {
    value: "1113 YORK AVENUE",
    data: 1014550021
  },
  {
    value: "1114 1 AVENUE",
    data: 1014560001
  },
  {
    value: "1114 AVENUE OF THE AMER",
    data: 1012580009
  },
  {
    value: "1114 MADISON AVENUE",
    data: 1014957501
  },
  {
    value: "1114 MADISON AVENUE",
    data: 1014957501
  },
  {
    value: "1115 1 AVENUE",
    data: 1014367503
  },
  {
    value: "1115 1 AVENUE",
    data: 1014367503
  },
  {
    value: "1115 5 AVENUE",
    data: 1015040069
  },
  {
    value: "1115 5 AVENUE",
    data: 1015040069
  },
  {
    value: "1115 BROADWAY",
    data: 1008260046
  },
  {
    value: "1115 LEXINGTON AVENUE",
    data: 1014120053
  },
  {
    value: "1115 MADISON AVENUE",
    data: 1014950049
  },
  {
    value: "1115 MADISON AVENUE",
    data: 1014950049
  },
  {
    value: "1118 1 AVENUE",
    data: 1014560003
  },
  {
    value: "1118 1 AVENUE",
    data: 1014560003
  },
  {
    value: "111A 11 AVENUE",
    data: 1006620011
  },
  {
    value: "111B 11 AVENUE",
    data: 1006620016
  },
  {
    value: "111C 11 AVENUE",
    data: 1006620019
  },
  {
    value: "112 1 AVENUE",
    data: 1004340007
  },
  {
    value: "112 11 AVENUE",
    data: 1006910001
  },
  {
    value: "112 2 AVENUE",
    data: 1004480005
  },
  {
    value: "112 9 AVENUE",
    data: 1007410067
  },
  {
    value: "112 9 AVENUE",
    data: 1007410067
  },
  {
    value: "112 AVENUE C",
    data: 1003770002
  },
  {
    value: "112 AVENUE C",
    data: 1003770002
  },
  {
    value: "112 BOWERY",
    data: 1002390025
  },
  {
    value: "112 CENTRAL PARK SOUTH",
    data: 1010110038
  },
  {
    value: "112 CENTRAL PARK SOUTH",
    data: 1010110038
  },
  {
    value: "112 CHRISTOPHER STREET",
    data: 1005880050
  },
  {
    value: "112 DYCKMAN STREET",
    data: 1021740064
  },
  {
    value: "112 EAST 10 STREET",
    data: 1004650013
  },
  {
    value: "112 EAST 101 STREET",
    data: 1016280068
  },
  {
    value: "112 EAST 102 STREET",
    data: 1016290066
  },
  {
    value: "112 EAST 103 STREET",
    data: 1016300069
  },
  {
    value: "112 EAST 103 STREET",
    data: 1016300069
  },
  {
    value: "112 EAST 104 STREET",
    data: 1016310068
  },
  {
    value: "112 EAST 11 STREET",
    data: 1005560016
  },
  {
    value: "112 EAST 11 STREET",
    data: 1005560016
  },
  {
    value: "112 EAST 116 STREET",
    data: 1016430065
  },
  {
    value: "112 EAST 117 STREET",
    data: 1016440068
  },
  {
    value: "112 EAST 123 STREET",
    data: 1017710067
  },
  {
    value: "112 EAST 128 STREET",
    data: 1017750165
  },
  {
    value: "112 EAST 128 STREET",
    data: 1017750165
  },
  {
    value: "112 EAST 16 STREET",
    data: 1008710074
  },
  {
    value: "112 EAST 17 STREET",
    data: 1008720069
  },
  {
    value: "112 EAST 17 STREET",
    data: 1008720069
  },
  {
    value: "112 EAST 19 STREET",
    data: 1008740069
  },
  {
    value: "112 EAST 19 STREET",
    data: 1008740069
  },
  {
    value: "112 EAST 3 STREET",
    data: 1004300010
  },
  {
    value: "112 EAST 3 STREET",
    data: 1004300010
  },
  {
    value: "112 EAST 30 STREET",
    data: 1008850082
  },
  {
    value: "112 EAST 31 STREET",
    data: 1008860079
  },
  {
    value: "112 EAST 35 STREET",
    data: 1008900078
  },
  {
    value: "112 EAST 36 STREET",
    data: 1008910082
  },
  {
    value: "112 EAST 37 STREET",
    data: 1008920077
  },
  {
    value: "112 EAST 4 STREET",
    data: 1004450022
  },
  {
    value: "112 EAST 4 STREET",
    data: 1004450022
  },
  {
    value: "112 EAST 40 STREET",
    data: 1008950084
  },
  {
    value: "112 EAST 61 STREET",
    data: 1013950067
  },
  {
    value: "112 EAST 64 STREET",
    data: 1013980067
  },
  {
    value: "112 EAST 66 STREET",
    data: 1014000066
  },
  {
    value: "112 EAST 7 STREET",
    data: 1004340020
  },
  {
    value: "112 EAST 7 STREET",
    data: 1004340020
  },
  {
    value: "112 EAST 70 STREET",
    data: 1014040166
  },
  {
    value: "112 EAST 71 STREET",
    data: 1014057502
  },
  {
    value: "112 EAST 73 STREET",
    data: 1014070068
  },
  {
    value: "112 EAST 74 STREET",
    data: 1014080066
  },
  {
    value: "112 EAST 74 STREET",
    data: 1014080066
  },
  {
    value: "112 EAST 75 STREET",
    data: 1014090068
  },
  {
    value: "112 EAST 78 STREET",
    data: 1014120066
  },
  {
    value: "112 EAST 81 STREET",
    data: 1015090056
  },
  {
    value: "112 EAST 81 STREET",
    data: 1015090056
  },
  {
    value: "112 EAST 83 STREET",
    data: 1015110065
  },
  {
    value: "112 EAST 83 STREET",
    data: 1015110065
  },
  {
    value: "112 EAST 90 STREET",
    data: 1015180064
  },
  {
    value: "112 EAST 90 STREET",
    data: 1015180064
  },
  {
    value: "112 EAST 91 STREET",
    data: 1015190066
  },
  {
    value: "112 EAST 95 STREET",
    data: 1015230169
  },
  {
    value: "112 EAST 96 STREET",
    data: 1015240064
  },
  {
    value: "112 EAST 97 STREET",
    data: 1016240064
  },
  {
    value: "112 EAST 97 STREET",
    data: 1016240064
  },
  {
    value: "112 EAST 98 STREET",
    data: 1016250068
  },
  {
    value: "112 EAST 98 STREET",
    data: 1016250068
  },
  {
    value: "112 EDGECOMBE AVENUE",
    data: 1020420029
  },
  {
    value: "112 ELDRIDGE STREET",
    data: 1004130004
  },
  {
    value: "112 ELDRIDGE STREET",
    data: 1004130004
  },
  {
    value: "112 FRANKLIN STREET",
    data: 1001787501
  },
  {
    value: "112 GREENE STREET",
    data: 1004990011
  },
  {
    value: "112 HAVEN AVENUE",
    data: 1021390236
  },
  {
    value: "112 HAVEN AVENUE",
    data: 1021390236
  },
  {
    value: "112 HUDSON STREET",
    data: 1001897505
  },
  {
    value: "112 JOHN STREET",
    data: 1000690054
  },
  {
    value: "112 LEXINGTON AVENUE",
    data: 1008830072
  },
  {
    value: "112 LIBERTY STREET",
    data: 1000527501
  },
  {
    value: "112 LUDLOW STREET",
    data: 1004100038
  },
  {
    value: "112 MAC DOUGAL STREET",
    data: 1005400005
  },
  {
    value: "112 MAC DOUGAL STREET",
    data: 1005400005
  },
  {
    value: "112 MADISON AVENUE",
    data: 1008590072
  },
  {
    value: "112 MADISON STREET",
    data: 1002760033
  },
  {
    value: "112 MADISON STREET",
    data: 1002760033
  },
  {
    value: "112 MULBERRY STREET",
    data: 1002050007
  },
  {
    value: "112 MULBERRY STREET",
    data: 1002050007
  },
  {
    value: "112 NAGLE AVENUE",
    data: 1021740088
  },
  {
    value: "112 NAGLE AVENUE",
    data: 1021740088
  },
  {
    value: "112 PARK AVENUE SOUTH",
    data: 1005570025
  },
  {
    value: "112 PRINCE STREET",
    data: 1005000019
  },
  {
    value: "112 READE STREET",
    data: 1001460011
  },
  {
    value: "112 RIVINGTON STREET",
    data: 1004117501
  },
  {
    value: "112 RIVINGTON STREET",
    data: 1004117501
  },
  {
    value: "112 SEAMAN AVENUE",
    data: 1022480112
  },
  {
    value: "112 SHERMAN AVENUE",
    data: 1022240040
  },
  {
    value: "112 SHERMAN AVENUE",
    data: 1022240040
  },
  {
    value: "112 SOUTH STREET",
    data: 1000970004
  },
  {
    value: "112 STANTON STREET",
    data: 1004120076
  },
  {
    value: "112 SUFFOLK STREET",
    data: 1003480008
  },
  {
    value: "112 SUFFOLK STREET",
    data: 1003480008
  },
  {
    value: "112 SULLIVAN STREET",
    data: 1005040031
  },
  {
    value: "112 SULLIVAN STREET",
    data: 1005040031
  },
  {
    value: "112 TRINITY PLACE",
    data: 1000520030
  },
  {
    value: "112 WAVERLY PLACE",
    data: 1005520052
  },
  {
    value: "112 WEST 111 STREET",
    data: 1018200142
  },
  {
    value: "112 WEST 113 STREET",
    data: 1018220041
  },
  {
    value: "112 WEST 114 STREET",
    data: 1018230042
  },
  {
    value: "112 WEST 114 STREET",
    data: 1018230042
  },
  {
    value: "112 WEST 116 STREET",
    data: 1018250041
  },
  {
    value: "112 WEST 116 STREET",
    data: 1018250041
  },
  {
    value: "112 WEST 117 STREET",
    data: 1019010037
  },
  {
    value: "112 WEST 118 STREET",
    data: 1019020040
  },
  {
    value: "112 WEST 119 STREET",
    data: 1019030141
  },
  {
    value: "112 WEST 120 STREET",
    data: 1019040041
  },
  {
    value: "112 WEST 121 STREET",
    data: 1019050041
  },
  {
    value: "112 WEST 123 STREET",
    data: 1019070041
  },
  {
    value: "112 WEST 124 STREET",
    data: 1019080039
  },
  {
    value: "112 WEST 125 STREET",
    data: 1019090040
  },
  {
    value: "112 WEST 127 STREET",
    data: 1019110139
  },
  {
    value: "112 WEST 128 STREET",
    data: 1019120139
  },
  {
    value: "112 WEST 129 STREET",
    data: 1019130039
  },
  {
    value: "112 WEST 13 STREET",
    data: 1006080033
  },
  {
    value: "112 WEST 131 STREET",
    data: 1019150041
  },
  {
    value: "112 WEST 133 STREET",
    data: 1019170040
  },
  {
    value: "112 WEST 134 STREET",
    data: 1019180043
  },
  {
    value: "112 WEST 136 STREET",
    data: 1019200040
  },
  {
    value: "112 WEST 138 STREET",
    data: 1020060042
  },
  {
    value: "112 WEST 138 STREET",
    data: 1020060042
  },
  {
    value: "112 WEST 139 STREET",
    data: 1020070043
  },
  {
    value: "112 WEST 14 STREET",
    data: 1006090031
  },
  {
    value: "112 WEST 144 STREET",
    data: 1020120045
  },
  {
    value: "112 WEST 144 STREET",
    data: 1020120045
  },
  {
    value: "112 WEST 145 STREET",
    data: 1020130038
  },
  {
    value: "112 WEST 15 STREET",
    data: 1007900045
  },
  {
    value: "112 WEST 17 STREET",
    data: 1007920045
  },
  {
    value: "112 WEST 18 STREET",
    data: 1007937501
  },
  {
    value: "112 WEST 25 STREET",
    data: 1008000049
  },
  {
    value: "112 WEST 27 STREET",
    data: 1008020050
  },
  {
    value: "112 WEST 28 STREET",
    data: 1008030048
  },
  {
    value: "112 WEST 56 STREET",
    data: 1010087501
  },
  {
    value: "112 WEST 71 STREET",
    data: 1011420137
  },
  {
    value: "112 WEST 72 STREET",
    data: 1011437504
  },
  {
    value: "112 WEST 74 STREET",
    data: 1011450038
  },
  {
    value: "112 WEST 75 STREET",
    data: 1011460040
  },
  {
    value: "112 WEST 76 STREET",
    data: 1011470039
  },
  {
    value: "112 WEST 78 STREET",
    data: 1011490040
  },
  {
    value: "112 WEST 79 STREET",
    data: 1011500037
  },
  {
    value: "112 WEST 79 STREET",
    data: 1011500037
  },
  {
    value: "112 WEST 80 STREET",
    data: 1012100041
  },
  {
    value: "112 WEST 81 STREET",
    data: 1012110039
  },
  {
    value: "112 WEST 86 STREET",
    data: 1012160038
  },
  {
    value: "112 WEST 87 STREET",
    data: 1012170039
  },
  {
    value: "112 WEST 88 STREET",
    data: 1012180136
  },
  {
    value: "112 WEST HOUSTON STREET",
    data: 1005250027
  },
  {
    value: "112 WEST WASHINGTON PLCE",
    data: 1005920013
  },
  {
    value: "1120 5 AVENUE",
    data: 1015050001
  },
  {
    value: "1120 5 AVENUE",
    data: 1015050001
  },
  {
    value: "1120 AVENUE OF THE AMER",
    data: 1012590001
  },
  {
    value: "1120 LEXINGTON AVENUE",
    data: 1014130016
  },
  {
    value: "1120 PARK AVENUE",
    data: 1015020033
  },
  {
    value: "1120 PARK AVENUE",
    data: 1015020033
  },
  {
    value: "1121 BROADWAY",
    data: 1008270028
  },
  {
    value: "1122 1 AVENUE",
    data: 1014560049
  },
  {
    value: "1122 3 AVENUE",
    data: 1014000038
  },
  {
    value: "1122 MADISON AVENUE",
    data: 1014950056
  },
  {
    value: "1123 1 AVENUE",
    data: 1014360026
  },
  {
    value: "1123 1 AVENUE",
    data: 1014360026
  },
  {
    value: "1124 1 AVENUE",
    data: 1014560046
  },
  {
    value: "1124 3 AVENUE",
    data: 1014000138
  },
  {
    value: "1125 5 AVENUE",
    data: 1015050069
  },
  {
    value: "1125 5 AVENUE",
    data: 1015050069
  },
  {
    value: "1125 AMSTERDAM AVENUE",
    data: 1018670042
  },
  {
    value: "1125 LEXINGTON AVENUE",
    data: 1014130020
  },
  {
    value: "1125 LEXINGTON AVENUE",
    data: 1014130020
  },
  {
    value: "1125 MADISON AVENUE",
    data: 1014960021
  },
  {
    value: "1125 MADISON AVENUE",
    data: 1014960021
  },
  {
    value: "1125 PARK AVENUE",
    data: 1015190001
  },
  {
    value: "1125 PARK AVENUE",
    data: 1015190001
  },
  {
    value: "1126 3 AVENUE",
    data: 1014000039
  },
  {
    value: "1128 3 AVENUE",
    data: 1014000040
  },
  {
    value: "1128 MADISON AVENUE",
    data: 1014950156
  },
  {
    value: "1128 PARK AVENUE",
    data: 1015020040
  },
  {
    value: "1128 PARK AVENUE",
    data: 1015020040
  },
  {
    value: "1129 AMSTERDAM AVENUE",
    data: 1018670074
  },
  {
    value: "1129 AMSTERDAM AVENUE",
    data: 1018670074
  },
  {
    value: "1129 BROADWAY",
    data: 1008270049
  },
  {
    value: "1129 LEXINGTON AVENUE",
    data: 1014130120
  },
  {
    value: "1129 YORK AVENUE",
    data: 1014560021
  },
  {
    value: "113 1 AVENUE",
    data: 1004480027
  },
  {
    value: "113 7 AVENUE",
    data: 1007920070
  },
  {
    value: "113 7 AVENUE SOUTH",
    data: 1006100001
  },
  {
    value: "113 ALLEN STREET",
    data: 1004150041
  },
  {
    value: "113 AVENUE A",
    data: 1004350036
  },
  {
    value: "113 AVENUE C",
    data: 1003900035
  },
  {
    value: "113 AVENUE OF THE AMER",
    data: 1004770064
  },
  {
    value: "113 BANK STREET",
    data: 1006350037
  },
  {
    value: "113 BAXTER STREET",
    data: 1002060001
  },
  {
    value: "113 BEDFORD STREET",
    data: 1005850052
  },
  {
    value: "113 BOWERY",
    data: 1003040010
  },
  {
    value: "113 CHAMBERS STREET",
    data: 1001457502
  },
  {
    value: "113 CHRISTOPHER STREET",
    data: 1006190042
  },
  {
    value: "113 CHRISTOPHER STREET",
    data: 1006190042
  },
  {
    value: "113 DIVISION STREET",
    data: 1002830092
  },
  {
    value: "113 EAST 101 STREET",
    data: 1016290004
  },
  {
    value: "113 EAST 102 STREET",
    data: 1016300007
  },
  {
    value: "113 EAST 102 STREET",
    data: 1016300007
  },
  {
    value: "113 EAST 106 STREET",
    data: 1016340008
  },
  {
    value: "113 EAST 11 STREET",
    data: 1005560075
  },
  {
    value: "113 EAST 11 STREET",
    data: 1005560075
  },
  {
    value: "113 EAST 117 STREET",
    data: 1016450006
  },
  {
    value: "113 EAST 119 STREET",
    data: 1017680006
  },
  {
    value: "113 EAST 119 STREET",
    data: 1017680006
  },
  {
    value: "113 EAST 12 STREET",
    data: 1005580047
  },
  {
    value: "113 EAST 122 STREET",
    data: 1017710007
  },
  {
    value: "113 EAST 123 STREET",
    data: 1017720009
  },
  {
    value: "113 EAST 123 STREET",
    data: 1017720009
  },
  {
    value: "113 EAST 125 STREET",
    data: 1017740008
  },
  {
    value: "113 EAST 13 STREET",
    data: 1005590055
  },
  {
    value: "113 EAST 13 STREET",
    data: 1005590055
  },
  {
    value: "113 EAST 18 STREET",
    data: 1008740010
  },
  {
    value: "113 EAST 19 STREET",
    data: 1008750012
  },
  {
    value: "113 EAST 2 STREET",
    data: 1004290019
  },
  {
    value: "113 EAST 29 STREET",
    data: 1008850012
  },
  {
    value: "113 EAST 30 STREET",
    data: 1008860011
  },
  {
    value: "113 EAST 31 STREET",
    data: 1008870010
  },
  {
    value: "113 EAST 31 STREET",
    data: 1008870010
  },
  {
    value: "113 EAST 35 STREET",
    data: 1008910010
  },
  {
    value: "113 EAST 36 STREET",
    data: 1008927504
  },
  {
    value: "113 EAST 37 STREET",
    data: 1008930011
  },
  {
    value: "113 EAST 39 STREET",
    data: 1008950012
  },
  {
    value: "113 EAST 55 STREET",
    data: 1013100007
  },
  {
    value: "113 EAST 60 STREET",
    data: 1013950006
  },
  {
    value: "113 EAST 61 STREET",
    data: 1013960006
  },
  {
    value: "113 EAST 62 STREET",
    data: 1013970006
  },
  {
    value: "113 EAST 64 STREET",
    data: 1013990005
  },
  {
    value: "113 EAST 70 STREET",
    data: 1014050008
  },
  {
    value: "113 EAST 72 STREET",
    data: 1014070006
  },
  {
    value: "113 EAST 72 STREET",
    data: 1014070006
  },
  {
    value: "113 EAST 73 STREET",
    data: 1014080008
  },
  {
    value: "113 EAST 77 STREET",
    data: 1014120010
  },
  {
    value: "113 EAST 78 STREET",
    data: 1014130108
  },
  {
    value: "113 EAST 79 STREET",
    data: 1015080006
  },
  {
    value: "113 EAST 81 STREET",
    data: 1015100009
  },
  {
    value: "113 EAST 90 STREET",
    data: 1015190007
  },
  {
    value: "113 EAST 91 STREET",
    data: 1015200107
  },
  {
    value: "113 ELDRIDGE STREET",
    data: 1004187501
  },
  {
    value: "113 ELDRIDGE STREET",
    data: 1004187501
  },
  {
    value: "113 ELIZABETH STREET",
    data: 1004700025
  },
  {
    value: "113 GREENE STREET",
    data: 1005000022
  },
  {
    value: "113 HENRY STREET",
    data: 1002830004
  },
  {
    value: "113 HENRY STREET",
    data: 1002830004
  },
  {
    value: "113 HESTER STREET",
    data: 1003060038
  },
  {
    value: "113 JANE STREET",
    data: 1006420001
  },
  {
    value: "113 LENOX AVENUE",
    data: 1018250034
  },
  {
    value: "113 LEXINGTON AVENUE",
    data: 1008830067
  },
  {
    value: "113 LUDLOW STREET",
    data: 1004100024
  },
  {
    value: "113 MANHATTAN AVENUE",
    data: 1018400153
  },
  {
    value: "113 MORNINGSIDE AVENUE",
    data: 1019500061
  },
  {
    value: "113 MORNINGSIDE AVENUE",
    data: 1019500061
  },
  {
    value: "113 MOTT STREET",
    data: 1002050022
  },
  {
    value: "113 MOTT STREET",
    data: 1002050022
  },
  {
    value: "113 MULBERRY STREET",
    data: 1002060023
  },
  {
    value: "113 NASSAU STREET",
    data: 1000900017
  },
  {
    value: "113 NASSAU STREET",
    data: 1000900017
  },
  {
    value: "113 PERRY STREET",
    data: 1006330060
  },
  {
    value: "113 PERRY STREET",
    data: 1006330060
  },
  {
    value: "113 POST AVENUE",
    data: 1022190009
  },
  {
    value: "113 POST AVENUE",
    data: 1022190009
  },
  {
    value: "113 PRINCE STREET",
    data: 1005140037
  },
  {
    value: "113 PRINCE STREET",
    data: 1005140037
  },
  {
    value: "113 READE STREET",
    data: 1001450015
  },
  {
    value: "113 RIVINGTON STREET",
    data: 1004100051
  },
  {
    value: "113 SHERMAN AVENUE",
    data: 1022200013
  },
  {
    value: "113 SHERMAN AVENUE",
    data: 1022200013
  },
  {
    value: "113 SOUTH STREET",
    data: 1000970003
  },
  {
    value: "113 SPRING STREET",
    data: 1004990039
  },
  {
    value: "113 ST MARKS PLACE",
    data: 1004360040
  },
  {
    value: "113 ST MARKS PLACE",
    data: 1004360040
  },
  {
    value: "113 STANTON STREET",
    data: 1004110052
  },
  {
    value: "113 SULLIVAN STREET",
    data: 1005030009
  },
  {
    value: "113 SULLIVAN STREET",
    data: 1005030009
  },
  {
    value: "113 THOMPSON STREET",
    data: 1005030023
  },
  {
    value: "113 UNIVERSITY PLACE",
    data: 1005640007
  },
  {
    value: "113 WAVERLY PLACE",
    data: 1005530036
  },
  {
    value: "113 WEST 10 STREET",
    data: 1006060090
  },
  {
    value: "113 WEST 106 STREET",
    data: 1018610025
  },
  {
    value: "113 WEST 106 STREET",
    data: 1018610025
  },
  {
    value: "113 WEST 11 STREET",
    data: 1006070052
  },
  {
    value: "113 WEST 111 STREET",
    data: 1018210021
  },
  {
    value: "113 WEST 113 STREET",
    data: 1018230023
  },
  {
    value: "113 WEST 114 STREET",
    data: 1018240021
  },
  {
    value: "113 WEST 115 STREET",
    data: 1018250025
  },
  {
    value: "113 WEST 117 STREET",
    data: 1019020124
  },
  {
    value: "113 WEST 118 STREET",
    data: 1019030023
  },
  {
    value: "113 WEST 119 STREET",
    data: 1019040024
  },
  {
    value: "113 WEST 120 STREET",
    data: 1019050023
  },
  {
    value: "113 WEST 122 STREET",
    data: 1019070024
  },
  {
    value: "113 WEST 126 STREET",
    data: 1019110025
  },
  {
    value: "113 WEST 128 STREET",
    data: 1019130023
  },
  {
    value: "113 WEST 128 STREET",
    data: 1019130023
  },
  {
    value: "113 WEST 13 STREET",
    data: 1006090052
  },
  {
    value: "113 WEST 130 STREET",
    data: 1019150024
  },
  {
    value: "113 WEST 131 STREET",
    data: 1019160124
  },
  {
    value: "113 WEST 132 STREET",
    data: 1019170025
  },
  {
    value: "113 WEST 136 STREET",
    data: 1019210124
  },
  {
    value: "113 WEST 138 STREET",
    data: 1020070022
  },
  {
    value: "113 WEST 144 STREET",
    data: 1020130024
  },
  {
    value: "113 WEST 144 STREET",
    data: 1020130024
  },
  {
    value: "113 WEST 15 STREET",
    data: 1007910032
  },
  {
    value: "113 WEST 15 STREET",
    data: 1007910032
  },
  {
    value: "113 WEST 24 STREET",
    data: 1008000050
  },
  {
    value: "113 WEST 27 STREET",
    data: 1008030028
  },
  {
    value: "113 WEST 43 STREET",
    data: 1009960021
  },
  {
    value: "113 WEST 69 STREET",
    data: 1011410027
  },
  {
    value: "113 WEST 70 STREET",
    data: 1011420027
  },
  {
    value: "113 WEST 71 STREET",
    data: 1011430027
  },
  {
    value: "113 WEST 71 STREET",
    data: 1011430027
  },
  {
    value: "113 WEST 74 STREET",
    data: 1011460024
  },
  {
    value: "113 WEST 75 STREET",
    data: 1011470024
  },
  {
    value: "113 WEST 77 STREET",
    data: 1011490126
  },
  {
    value: "113 WEST 78 STREET",
    data: 1011500025
  },
  {
    value: "113 WEST 82 STREET",
    data: 1012130023
  },
  {
    value: "113 WEST 85 STREET",
    data: 1012160024
  },
  {
    value: "113 WEST 87 STREET",
    data: 1012180028
  },
  {
    value: "113 WEST 88 STREET",
    data: 1012190124
  },
  {
    value: "113 WEST 95 STREET",
    data: 1012260125
  },
  {
    value: "113 WEST 96 STREET",
    data: 1018510023
  },
  {
    value: "113 WEST WASHINGTON PLCE",
    data: 1005920074
  },
  {
    value: "1130 1 AVENUE",
    data: 1014570001
  },
  {
    value: "1130 1 AVENUE",
    data: 1014570001
  },
  {
    value: "1130 2 AVENUE",
    data: 1014340001
  },
  {
    value: "1130 3 AVENUE",
    data: 1014010033
  },
  {
    value: "1130 3 AVENUE",
    data: 1014010033
  },
  {
    value: "1130 5 AVENUE",
    data: 1015060001
  },
  {
    value: "1130 MADISON AVENUE",
    data: 1014960015
  },
  {
    value: "1131 3 AVENUE",
    data: 1014210001
  },
  {
    value: "1131 3 AVENUE",
    data: 1014210001
  },
  {
    value: "1131 LEXINGTON AVENUE",
    data: 1014130154
  },
  {
    value: "1132 1 AVENUE",
    data: 1014570002
  },
  {
    value: "1132 1 AVENUE",
    data: 1014570002
  },
  {
    value: "1132 LEXINGTON AVENUE",
    data: 1014130056
  },
  {
    value: "1132 MADISON AVENUE",
    data: 1014960016
  },
  {
    value: "1132 ST NICHOLAS AVENUE",
    data: 1021240017
  },
  {
    value: "1133 5 AVENUE",
    data: 1015060003
  },
  {
    value: "1133 5 AVENUE",
    data: 1015060003
  },
  {
    value: "1133 AVENUE OF THE AMER",
    data: 1009960029
  },
  {
    value: "1133 LEXINGTON AVENUE",
    data: 1014130153
  },
  {
    value: "1133 MADISON AVENUE",
    data: 1014960054
  },
  {
    value: "1133 MADISON AVENUE",
    data: 1014960054
  },
  {
    value: "1133 PARK AVENUE",
    data: 1015190069
  },
  {
    value: "1133 PARK AVENUE",
    data: 1015190069
  },
  {
    value: "1134 1 AVENUE",
    data: 1014570003
  },
  {
    value: "1134 MADISON AVENUE",
    data: 1014960017
  },
  {
    value: "1135 1 AVENUE",
    data: 1014370026
  },
  {
    value: "1135 LEXINGTON AVENUE",
    data: 1014130053
  },
  {
    value: "1136 1 AVENUE",
    data: 1014570004
  },
  {
    value: "1136 5 AVENUE",
    data: 1015060069
  },
  {
    value: "1136 5 AVENUE",
    data: 1015060069
  },
  {
    value: "1138 1 AVENUE",
    data: 1014570048
  },
  {
    value: "114 1 AVENUE",
    data: 1004340008
  },
  {
    value: "114 3 AVENUE",
    data: 1005590036
  },
  {
    value: "114 5 AVENUE",
    data: 1008180051
  },
  {
    value: "114 BAXTER STREET",
    data: 1002070020
  },
  {
    value: "114 BENNETT AVENUE",
    data: 1021807502
  },
  {
    value: "114 BOWERY",
    data: 1002390024
  },
  {
    value: "114 CHAMBERS STREET",
    data: 1001360025
  },
  {
    value: "114 CHRISTOPHER STREET",
    data: 1005880048
  },
  {
    value: "114 CHRISTOPHER STREET",
    data: 1005880048
  },
  {
    value: "114 DELANCEY STREET",
    data: 1004100064
  },
  {
    value: "114 EAST 1 STREET",
    data: 1004290045
  },
  {
    value: "114 EAST 1 STREET",
    data: 1004290045
  },
  {
    value: "114 EAST 10 STREET",
    data: 1004650014
  },
  {
    value: "114 EAST 101 STREET",
    data: 1016280167
  },
  {
    value: "114 EAST 102 STREET",
    data: 1016290065
  },
  {
    value: "114 EAST 104 STREET",
    data: 1016310066
  },
  {
    value: "114 EAST 104 STREET",
    data: 1016310066
  },
  {
    value: "114 EAST 116 STREET",
    data: 1016430064
  },
  {
    value: "114 EAST 116 STREET",
    data: 1016430064
  },
  {
    value: "114 EAST 117 STREET",
    data: 1016440067
  },
  {
    value: "114 EAST 124 STREET",
    data: 1017720066
  },
  {
    value: "114 EAST 13 STREET",
    data: 1005587501
  },
  {
    value: "114 EAST 13 STREET",
    data: 1005587501
  },
  {
    value: "114 EAST 25 STREET",
    data: 1008800082
  },
  {
    value: "114 EAST 27 STREET",
    data: 1008827501
  },
  {
    value: "114 EAST 27 STREET",
    data: 1008827501
  },
  {
    value: "114 EAST 28 STREET",
    data: 1008830083
  },
  {
    value: "114 EAST 28 STREET",
    data: 1008830083
  },
  {
    value: "114 EAST 30 STREET",
    data: 1008850081
  },
  {
    value: "114 EAST 32 STREET",
    data: 1008870088
  },
  {
    value: "114 EAST 36 STREET",
    data: 1008910081
  },
  {
    value: "114 EAST 37 STREET",
    data: 1008920076
  },
  {
    value: "114 EAST 39 STREET",
    data: 1008940079
  },
  {
    value: "114 EAST 39 STREET",
    data: 1008940079
  },
  {
    value: "114 EAST 40 STREET",
    data: 1008950082
  },
  {
    value: "114 EAST 40 STREET",
    data: 1008950082
  },
  {
    value: "114 EAST 61 STREET",
    data: 1013950066
  },
  {
    value: "114 EAST 62 STREET",
    data: 1013960067
  },
  {
    value: "114 EAST 65 STREET",
    data: 1013990066
  },
  {
    value: "114 EAST 66 STREET",
    data: 1014000062
  },
  {
    value: "114 EAST 66 STREET",
    data: 1014000062
  },
  {
    value: "114 EAST 7 STREET",
    data: 1004340021
  },
  {
    value: "114 EAST 7 STREET",
    data: 1004340021
  },
  {
    value: "114 EAST 70 STREET",
    data: 1014040066
  },
  {
    value: "114 EAST 71 STREET",
    data: 1014050066
  },
  {
    value: "114 EAST 71 STREET",
    data: 1014050066
  },
  {
    value: "114 EAST 72 STREET",
    data: 1014060065
  },
  {
    value: "114 EAST 72 STREET",
    data: 1014060065
  },
  {
    value: "114 EAST 76 STREET",
    data: 1014100066
  },
  {
    value: "114 EAST 78 STREET",
    data: 1014120065
  },
  {
    value: "114 EAST 84 STREET",
    data: 1015120062
  },
  {
    value: "114 EAST 84 STREET",
    data: 1015120062
  },
  {
    value: "114 EAST 90 STREET",
    data: 1015180061
  },
  {
    value: "114 EAST 90 STREET",
    data: 1015180061
  },
  {
    value: "114 EAST 91 STREET",
    data: 1015190065
  },
  {
    value: "114 EAST 95 STREET",
    data: 1015230168
  },
  {
    value: "114 EAST 97 STREET",
    data: 1016240063
  },
  {
    value: "114 EAST 97 STREET",
    data: 1016240063
  },
  {
    value: "114 EAST 98 STREET",
    data: 1016250067
  },
  {
    value: "114 EAST 98 STREET",
    data: 1016250067
  },
  {
    value: "114 EDGECOMBE AVENUE",
    data: 1020420028
  },
  {
    value: "114 FRANKLIN STREET",
    data: 1001780010
  },
  {
    value: "114 FULTON STREET",
    data: 1000780047
  },
  {
    value: "114 GREENE STREET",
    data: 1004997502
  },
  {
    value: "114 GREENE STREET",
    data: 1004997502
  },
  {
    value: "114 HUDSON STREET",
    data: 1001897509
  },
  {
    value: "114 LEXINGTON AVENUE",
    data: 1008830073
  },
  {
    value: "114 LIBERTY STREET",
    data: 1000527502
  },
  {
    value: "114 LIBERTY STREET",
    data: 1000527502
  },
  {
    value: "114 MAC DOUGAL STREET",
    data: 1005400006
  },
  {
    value: "114 MAC DOUGAL STREET",
    data: 1005400006
  },
  {
    value: "114 MADISON STREET",
    data: 1002760032
  },
  {
    value: "114 MADISON STREET",
    data: 1002760032
  },
  {
    value: "114 MORNINGSIDE DRIVE",
    data: 1019630055
  },
  {
    value: "114 MORNINGSIDE DRIVE",
    data: 1019630055
  },
  {
    value: "114 MULBERRY STREET",
    data: 1002050008
  },
  {
    value: "114 NAGLE AVENUE",
    data: 1021740086
  },
  {
    value: "114 NAGLE AVENUE",
    data: 1021740086
  },
  {
    value: "114 RIDGE STREET",
    data: 1003440041
  },
  {
    value: "114 RIDGE STREET",
    data: 1003449040
  },
  {
    value: "114 RIDGE STREET",
    data: 1003440041
  },
  {
    value: "114 RIVINGTON STREET",
    data: 1004110068
  },
  {
    value: "114 SEAMAN AVENUE",
    data: 1022480111
  },
  {
    value: "114 SPRING STREET",
    data: 1004850018
  },
  {
    value: "114 ST MARKS PLACE",
    data: 1004350021
  },
  {
    value: "114 STANTON STREET",
    data: 1004120075
  },
  {
    value: "114 SUFFOLK STREET",
    data: 1003480009
  },
  {
    value: "114 SUFFOLK STREET",
    data: 1003480009
  },
  {
    value: "114 SULLIVAN STREET",
    data: 1005040030
  },
  {
    value: "114 THOMPSON STREET",
    data: 1005020014
  },
  {
    value: "114 THOMPSON STREET",
    data: 1005020014
  },
  {
    value: "114 VARICK STREET",
    data: 1004910003
  },
  {
    value: "114 WARREN STREET",
    data: 1001420003
  },
  {
    value: "114 WAVERLY PLACE",
    data: 1005520051
  },
  {
    value: "114 WEST 109 STREET",
    data: 1018630043
  },
  {
    value: "114 WEST 109 STREET",
    data: 1018630043
  },
  {
    value: "114 WEST 111 STREET",
    data: 1018200043
  },
  {
    value: "114 WEST 117 STREET",
    data: 1019010137
  },
  {
    value: "114 WEST 118 STREET",
    data: 1019027505
  },
  {
    value: "114 WEST 119 STREET",
    data: 1019030042
  },
  {
    value: "114 WEST 120 STREET",
    data: 1019040141
  },
  {
    value: "114 WEST 123 STREET",
    data: 1019070042
  },
  {
    value: "114 WEST 124 STREET",
    data: 1019080040
  },
  {
    value: "114 WEST 125 STREET",
    data: 1019090041
  },
  {
    value: "114 WEST 127 STREET",
    data: 1019110040
  },
  {
    value: "114 WEST 13 STREET",
    data: 1006080032
  },
  {
    value: "114 WEST 130 STREET",
    data: 1019140140
  },
  {
    value: "114 WEST 131 STREET",
    data: 1019150141
  },
  {
    value: "114 WEST 133 STREET",
    data: 1019170041
  },
  {
    value: "114 WEST 134 STREET",
    data: 1019180044
  },
  {
    value: "114 WEST 136 STREET",
    data: 1019200041
  },
  {
    value: "114 WEST 137 STREET",
    data: 1019210042
  },
  {
    value: "114 WEST 137 STREET",
    data: 1019210042
  },
  {
    value: "114 WEST 139 STREET",
    data: 1020070044
  },
  {
    value: "114 WEST 16 STREET",
    data: 1007910050
  },
  {
    value: "114 WEST 16 STREET",
    data: 1007910050
  },
  {
    value: "114 WEST 17 STREET",
    data: 1007927505
  },
  {
    value: "114 WEST 26 STREET",
    data: 1008010051
  },
  {
    value: "114 WEST 27 STREET",
    data: 1008020052
  },
  {
    value: "114 WEST 27 STREET",
    data: 1008020052
  },
  {
    value: "114 WEST 29 STREET",
    data: 1008040049
  },
  {
    value: "114 WEST 29 STREET",
    data: 1008040049
  },
  {
    value: "114 WEST 34 STREET",
    data: 1008090053
  },
  {
    value: "114 WEST 46 STREET",
    data: 1009980041
  },
  {
    value: "114 WEST 47 STREET",
    data: 1009990019
  },
  {
    value: "114 WEST 70 STREET",
    data: 1011410037
  },
  {
    value: "114 WEST 70 STREET",
    data: 1011410037
  },
  {
    value: "114 WEST 71 STREET",
    data: 1011420038
  },
  {
    value: "114 WEST 73 STREET",
    data: 1011440138
  },
  {
    value: "114 WEST 74 STREET",
    data: 1011450138
  },
  {
    value: "114 WEST 75 STREET",
    data: 1011460041
  },
  {
    value: "114 WEST 76 STREET",
    data: 1011470040
  },
  {
    value: "114 WEST 78 STREET",
    data: 1011490140
  },
  {
    value: "114 WEST 80 STREET",
    data: 1012100042
  },
  {
    value: "114 WEST 81 STREET",
    data: 1012110040
  },
  {
    value: "114 WEST 86 STREET",
    data: 1012160039
  },
  {
    value: "114 WEST 86 STREET",
    data: 1012160039
  },
  {
    value: "114 WEST 87 STREET",
    data: 1012170040
  },
  {
    value: "114 WEST 88 STREET",
    data: 1012180038
  },
  {
    value: "114 WEST HOUSTON STREET",
    data: 1005250028
  },
  {
    value: "114 WEST WASHINGTON PLCE",
    data: 1005920012
  },
  {
    value: "1140 1 AVENUE",
    data: 1014570047
  },
  {
    value: "1140 2 AVENUE",
    data: 1014350001
  },
  {
    value: "1140 2 AVENUE",
    data: 1014350001
  },
  {
    value: "1140 5 AVENUE",
    data: 1015070001
  },
  {
    value: "1140 5 AVENUE",
    data: 1015070001
  },
  {
    value: "1140 AVENUE OF THE AMER",
    data: 1012600001
  },
  {
    value: "1140 BROADWAY",
    data: 1008280033
  },
  {
    value: "1141 BROADWAY",
    data: 1008280025
  },
  {
    value: "1141 PARK AVENUE",
    data: 1015200001
  },
  {
    value: "1142 1 AVENUE",
    data: 1014570046
  },
  {
    value: "1142 1 AVENUE",
    data: 1014570046
  },
  {
    value: "1143 1 AVENUE",
    data: 1014370027
  },
  {
    value: "1143 1 AVENUE",
    data: 1014370027
  },
  {
    value: "1143 2 AVENUE",
    data: 1014150021
  },
  {
    value: "1143 2 AVENUE",
    data: 1014150021
  },
  {
    value: "1143 5 AVENUE",
    data: 1015070004
  },
  {
    value: "1143 PARK AVENUE",
    data: 1015200101
  },
  {
    value: "1143 YORK AVENUE",
    data: 1014560026
  },
  {
    value: "1143 YORK AVENUE",
    data: 1014560026
  },
  {
    value: "1144 1 AVENUE",
    data: 1014570045
  },
  {
    value: "1144 1 AVENUE",
    data: 1014570045
  },
  {
    value: "1144 2 AVENUE",
    data: 1014350102
  },
  {
    value: "1144 PARK AVENUE",
    data: 1015030031
  },
  {
    value: "1145 AMSTERDAM AVENUE",
    data: 1019610001
  },
  {
    value: "1145 BROADWAY",
    data: 1008280027
  },
  {
    value: "1145 PARK AVENUE",
    data: 1015200002
  },
  {
    value: "1146 2 AVENUE",
    data: 1014350003
  },
  {
    value: "1146 2 AVENUE",
    data: 1014350003
  },
  {
    value: "1146 ST NICHOLAS AVENUE",
    data: 1021240039
  },
  {
    value: "1147 1 AVENUE",
    data: 1014370029
  },
  {
    value: "1147 1 AVENUE",
    data: 1014370029
  },
  {
    value: "1147 BROADWAY",
    data: 1008280028
  },
  {
    value: "1147 PARK AVENUE",
    data: 1015200102
  },
  {
    value: "1148 5 AVENUE",
    data: 1015070069
  },
  {
    value: "1148 5 AVENUE",
    data: 1015070069
  },
  {
    value: "1148 ST NICHOLAS AVENUE",
    data: 1021240035
  },
  {
    value: "1149 1 AVENUE",
    data: 1014370030
  },
  {
    value: "1149 1 AVENUE",
    data: 1014370030
  },
  {
    value: "1149 BROADWAY",
    data: 1008280029
  },
  {
    value: "1149 PARK AVENUE",
    data: 1015200003
  },
  {
    value: "115 1 AVENUE",
    data: 1004490038
  },
  {
    value: "115 2 AVENUE",
    data: 1004620024
  },
  {
    value: "115 4 AVENUE",
    data: 1005587502
  },
  {
    value: "115 4 AVENUE",
    data: 1005587502
  },
  {
    value: "115 7 AVENUE SOUTH",
    data: 1006100016
  },
  {
    value: "115 ALLEN STREET",
    data: 1004157502
  },
  {
    value: "115 AVENUE A",
    data: 1004350035
  },
  {
    value: "115 AVENUE C",
    data: 1003900034
  },
  {
    value: "115 AVENUE D",
    data: 1003780039
  },
  {
    value: "115 AVENUE D",
    data: 1003780039
  },
  {
    value: "115 BEDFORD STREET",
    data: 1005850051
  },
  {
    value: "115 BOWERY",
    data: 1003040012
  },
  {
    value: "115 BROAD STREET",
    data: 1000050010
  },
  {
    value: "115 BROADWAY",
    data: 1000500001
  },
  {
    value: "115 CABRINI BOULEVARD",
    data: 1021790112
  },
  {
    value: "115 CABRINI BOULEVARD",
    data: 1021790112
  },
  {
    value: "115 CENTRAL PARK WEST",
    data: 1011240027
  },
  {
    value: "115 CENTRAL PARK WEST",
    data: 1011240027
  },
  {
    value: "115 CHAMBERS STREET",
    data: 1001450007
  },
  {
    value: "115 CHARLES STREET",
    data: 1006320056
  },
  {
    value: "115 CHARLES STREET",
    data: 1006320056
  },
  {
    value: "115 CHRISTOPHER STREET",
    data: 1006197501
  },
  {
    value: "115 CONVENT AVENUE",
    data: 1019570028
  },
  {
    value: "115 CROSBY STREET",
    data: 1005100006
  },
  {
    value: "115 CROSBY STREET",
    data: 1005100006
  },
  {
    value: "115 DELANCEY STREET",
    data: 1003527501
  },
  {
    value: "115 DIVISION STREET",
    data: 1002830091
  },
  {
    value: "115 EAST 10 STREET",
    data: 1004660048
  },
  {
    value: "115 EAST 10 STREET",
    data: 1004660048
  },
  {
    value: "115 EAST 102 STREET",
    data: 1016300008
  },
  {
    value: "115 EAST 102 STREET",
    data: 1016300008
  },
  {
    value: "115 EAST 106 STREET",
    data: 1016340009
  },
  {
    value: "115 EAST 111 STREET",
    data: 1016390003
  },
  {
    value: "115 EAST 115 STREET",
    data: 1016430007
  },
  {
    value: "115 EAST 116 STREET",
    data: 1016440008
  },
  {
    value: "115 EAST 116 STREET",
    data: 1016440008
  },
  {
    value: "115 EAST 119 STREET",
    data: 1017680007
  },
  {
    value: "115 EAST 119 STREET",
    data: 1017680007
  },
  {
    value: "115 EAST 12 STREET",
    data: 1005580044
  },
  {
    value: "115 EAST 12 STREET",
    data: 1005580044
  },
  {
    value: "115 EAST 122 STREET",
    data: 1017710010
  },
  {
    value: "115 EAST 122 STREET",
    data: 1017710010
  },
  {
    value: "115 EAST 125 STREET",
    data: 1017740009
  },
  {
    value: "115 EAST 15 STREET",
    data: 1008710012
  },
  {
    value: "115 EAST 19 STREET",
    data: 1008750013
  },
  {
    value: "115 EAST 2 STREET",
    data: 1004290020
  },
  {
    value: "115 EAST 23 STREET",
    data: 1008790009
  },
  {
    value: "115 EAST 27 STREET",
    data: 1008830011
  },
  {
    value: "115 EAST 27 STREET",
    data: 1008830011
  },
  {
    value: "115 EAST 30 STREET",
    data: 1008860012
  },
  {
    value: "115 EAST 31 STREET",
    data: 1008870012
  },
  {
    value: "115 EAST 34 STREET",
    data: 1008900011
  },
  {
    value: "115 EAST 34 STREET",
    data: 1008900011
  },
  {
    value: "115 EAST 35 STREET",
    data: 1008910011
  },
  {
    value: "115 EAST 36 STREET",
    data: 1008920009
  },
  {
    value: "115 EAST 37 STREET",
    data: 1008930012
  },
  {
    value: "115 EAST 38 STREET",
    data: 1008940012
  },
  {
    value: "115 EAST 39 STREET",
    data: 1008950013
  },
  {
    value: "115 EAST 54 STREET",
    data: 1013090006
  },
  {
    value: "115 EAST 55 STREET",
    data: 1013100008
  },
  {
    value: "115 EAST 60 STREET",
    data: 1013950007
  },
  {
    value: "115 EAST 61 STREET",
    data: 1013960007
  },
  {
    value: "115 EAST 62 STREET",
    data: 1013970106
  },
  {
    value: "115 EAST 64 STREET",
    data: 1013990006
  },
  {
    value: "115 EAST 65 STREET",
    data: 1014000007
  },
  {
    value: "115 EAST 69 STREET",
    data: 1014047502
  },
  {
    value: "115 EAST 71 STREET",
    data: 1014060007
  },
  {
    value: "115 EAST 71 STREET",
    data: 1014060007
  },
  {
    value: "115 EAST 73 STREET",
    data: 1014080009
  },
  {
    value: "115 EAST 74 STREET",
    data: 1014090005
  },
  {
    value: "115 EAST 75 STREET",
    data: 1014100011
  },
  {
    value: "115 EAST 77 STREET",
    data: 1014120011
  },
  {
    value: "115 EAST 78 STREET",
    data: 1014130009
  },
  {
    value: "115 EAST 79 STREET",
    data: 1015080007
  },
  {
    value: "115 EAST 81 STREET",
    data: 1015100010
  },
  {
    value: "115 EAST 82 STREET",
    data: 1015110008
  },
  {
    value: "115 EAST 82 STREET",
    data: 1015110008
  },
  {
    value: "115 EAST 84 STREET",
    data: 1015130007
  },
  {
    value: "115 EAST 86 STREET",
    data: 1015150008
  },
  {
    value: "115 EAST 86 STREET",
    data: 1015150008
  },
  {
    value: "115 EAST 87 STREET",
    data: 1015167502
  },
  {
    value: "115 EAST 87 STREET",
    data: 1015167502
  },
  {
    value: "115 EAST 89 STREET",
    data: 1015180009
  },
  {
    value: "115 EAST 89 STREET",
    data: 1015180009
  },
  {
    value: "115 EAST 90 STREET",
    data: 1015190008
  },
  {
    value: "115 EAST 90 STREET",
    data: 1015190008
  },
  {
    value: "115 EAST 91 STREET",
    data: 1015200008
  },
  {
    value: "115 EAST 92 STREET",
    data: 1015210007
  },
  {
    value: "115 EAST 92 STREET",
    data: 1015210007
  },
  {
    value: "115 EAST 95 STREET",
    data: 1015240106
  },
  {
    value: "115 EAST 96 STREET",
    data: 1016240007
  },
  {
    value: "115 EAST 96 STREET",
    data: 1016240007
  },
  {
    value: "115 EAST 97 STREET",
    data: 1016250007
  },
  {
    value: "115 EDGECOMBE AVENUE",
    data: 1020480033
  },
  {
    value: "115 EDGECOMBE AVENUE",
    data: 1020480033
  },
  {
    value: "115 ELIZABETH STREET",
    data: 1004700024
  },
  {
    value: "115 ESSEX STREET",
    data: 1004100055
  },
  {
    value: "115 ESSEX STREET",
    data: 1004100055
  },
  {
    value: "115 FT WASHINGTON AVENUE",
    data: 1021360245
  },
  {
    value: "115 GREENWICH AVENUE",
    data: 1006160027
  },
  {
    value: "115 GREENWICH AVENUE",
    data: 1006160027
  },
  {
    value: "115 HAMILTON PLACE",
    data: 1020740030
  },
  {
    value: "115 HAMILTON PLACE",
    data: 1020740030
  },
  {
    value: "115 HESTER STREET",
    data: 1003060039
  },
  {
    value: "115 LEXINGTON AVENUE",
    data: 1008830066
  },
  {
    value: "115 LEXINGTON AVENUE",
    data: 1008830066
  },
  {
    value: "115 LUDLOW STREET",
    data: 1004100023
  },
  {
    value: "115 MAC DOUGAL STREET",
    data: 1005430023
  },
  {
    value: "115 MANHATTAN AVENUE",
    data: 1018400152
  },
  {
    value: "115 MERCER STREET",
    data: 1004997506
  },
  {
    value: "115 MOTT STREET",
    data: 1002050021
  },
  {
    value: "115 MOTT STREET",
    data: 1002050021
  },
  {
    value: "115 MULBERRY STREET",
    data: 1002060022
  },
  {
    value: "115 MULBERRY STREET",
    data: 1002060022
  },
  {
    value: "115 NASSAU STREET",
    data: 1000900016
  },
  {
    value: "115 NORFOLK STREET",
    data: 1003537503
  },
  {
    value: "115 NORFOLK STREET",
    data: 1003537503
  },
  {
    value: "115 PAYSON AVENUE",
    data: 1022480009
  },
  {
    value: "115 PAYSON AVENUE",
    data: 1022480009
  },
  {
    value: "115 PITT STREET",
    data: 1003450048
  },
  {
    value: "115 PITT STREET",
    data: 1003450048
  },
  {
    value: "115 RIVINGTON STREET",
    data: 1004100052
  },
  {
    value: "115 SOUTH STREET",
    data: 1000970002
  },
  {
    value: "115 SPRING STREET",
    data: 1004997504
  },
  {
    value: "115 ST MARKS PLACE",
    data: 1004360039
  },
  {
    value: "115 ST MARKS PLACE",
    data: 1004360039
  },
  {
    value: "115 SULLIVAN STREET",
    data: 1005030010
  },
  {
    value: "115 SULLIVAN STREET",
    data: 1005030010
  },
  {
    value: "115 THOMPSON STREET",
    data: 1005030021
  },
  {
    value: "115 THOMPSON STREET",
    data: 1005030021
  },
  {
    value: "115 VERMILYEA AVENUE",
    data: 1022260009
  },
  {
    value: "115 VERMILYEA AVENUE",
    data: 1022260009
  },
  {
    value: "115 WATTS STREET",
    data: 1002250006
  },
  {
    value: "115 WAVERLY PLACE",
    data: 1005530037
  },
  {
    value: "115 WEST 10 STREET",
    data: 1006060091
  },
  {
    value: "115 WEST 106 STREET",
    data: 1018610024
  },
  {
    value: "115 WEST 106 STREET",
    data: 1018610024
  },
  {
    value: "115 WEST 11 STREET",
    data: 1006070053
  },
  {
    value: "115 WEST 111 STREET",
    data: 1018210120
  },
  {
    value: "115 WEST 113 STREET",
    data: 1018230022
  },
  {
    value: "115 WEST 114 STREET",
    data: 1018240020
  },
  {
    value: "115 WEST 117 STREET",
    data: 1019020024
  },
  {
    value: "115 WEST 118 STREET",
    data: 1019030022
  },
  {
    value: "115 WEST 119 STREET",
    data: 1019040023
  },
  {
    value: "115 WEST 120 STREET",
    data: 1019050022
  },
  {
    value: "115 WEST 122 STREET",
    data: 1019070123
  },
  {
    value: "115 WEST 126 STREET",
    data: 1019110024
  },
  {
    value: "115 WEST 129 STREET",
    data: 1019140024
  },
  {
    value: "115 WEST 129 STREET",
    data: 1019140024
  },
  {
    value: "115 WEST 13 STREET",
    data: 1006090053
  },
  {
    value: "115 WEST 13 STREET",
    data: 1006090053
  },
  {
    value: "115 WEST 130 STREET",
    data: 1019150023
  },
  {
    value: "115 WEST 131 STREET",
    data: 1019160024
  },
  {
    value: "115 WEST 132 STREET",
    data: 1019170024
  },
  {
    value: "115 WEST 135 STREET",
    data: 1019200022
  },
  {
    value: "115 WEST 135 STREET",
    data: 1019200022
  },
  {
    value: "115 WEST 136 STREET",
    data: 1019210024
  },
  {
    value: "115 WEST 137 STREET",
    data: 1020060022
  },
  {
    value: "115 WEST 137 STREET",
    data: 1020060022
  },
  {
    value: "115 WEST 138 STREET",
    data: 1020070021
  },
  {
    value: "115 WEST 142 STREET",
    data: 1020110029
  },
  {
    value: "115 WEST 142 STREET",
    data: 1020110029
  },
  {
    value: "115 WEST 143 STREET",
    data: 1020120022
  },
  {
    value: "115 WEST 143 STREET",
    data: 1020120022
  },
  {
    value: "115 WEST 15 STREET",
    data: 1007910031
  },
  {
    value: "115 WEST 15 STREET",
    data: 1007910031
  },
  {
    value: "115 WEST 16 STREET",
    data: 1007920024
  },
  {
    value: "115 WEST 16 STREET",
    data: 1007920024
  },
  {
    value: "115 WEST 227 STREET",
    data: 1022150335
  },
  {
    value: "115 WEST 23 STREET",
    data: 1007990030
  },
  {
    value: "115 WEST 23 STREET",
    data: 1007990030
  },
  {
    value: "115 WEST 25 STREET",
    data: 1008010029
  },
  {
    value: "115 WEST 27 STREET",
    data: 1008030026
  },
  {
    value: "115 WEST 28 STREET",
    data: 1008040027
  },
  {
    value: "115 WEST 29 STREET",
    data: 1008050039
  },
  {
    value: "115 WEST 30 STREET",
    data: 1008060026
  },
  {
    value: "115 WEST 40 STREET",
    data: 1009930022
  },
  {
    value: "115 WEST 45 STREET",
    data: 1009980024
  },
  {
    value: "115 WEST 57 STREET",
    data: 1010100024
  },
  {
    value: "115 WEST 69 STREET",
    data: 1011410126
  },
  {
    value: "115 WEST 73 STREET",
    data: 1011450025
  },
  {
    value: "115 WEST 73 STREET",
    data: 1011450025
  },
  {
    value: "115 WEST 74 STREET",
    data: 1011460023
  },
  {
    value: "115 WEST 75 STREET",
    data: 1011470023
  },
  {
    value: "115 WEST 77 STREET",
    data: 1011490026
  },
  {
    value: "115 WEST 78 STREET",
    data: 1011500024
  },
  {
    value: "115 WEST 82 STREET",
    data: 1012130022
  },
  {
    value: "115 WEST 85 STREET",
    data: 1012160023
  },
  {
    value: "115 WEST 86 STREET",
    data: 1012170025
  },
  {
    value: "115 WEST 86 STREET",
    data: 1012170025
  },
  {
    value: "115 WEST 87 STREET",
    data: 1012180027
  },
  {
    value: "115 WEST 88 STREET",
    data: 1012190024
  },
  {
    value: "115 WEST 95 STREET",
    data: 1012260025
  },
  {
    value: "115 WEST 96 STREET",
    data: 1018510022
  },
  {
    value: "115 WEST WASHINGTON PLACE",
    data: 1005920075
  },
  {
    value: "115 WEST WASHINGTON PLCE",
    data: 1005920075
  },
  {
    value: "115 WOOSTER STREET",
    data: 1005010020
  },
  {
    value: "1150 2 AVENUE",
    data: 1014350052
  },
  {
    value: "1150 3 AVENUE",
    data: 1014020033
  },
  {
    value: "1150 3 AVENUE",
    data: 1014020033
  },
  {
    value: "1150 5 AVENUE",
    data: 1016020001
  },
  {
    value: "1150 5 AVENUE",
    data: 1016020001
  },
  {
    value: "1150 AVENUE OF THE AMER",
    data: 1012600004
  },
  {
    value: "1150 MADISON AVENUE",
    data: 1014970009
  },
  {
    value: "1150 MADISON AVENUE",
    data: 1014970009
  },
  {
    value: "1150 PARK AVENUE",
    data: 1015030038
  },
  {
    value: "1150 PARK AVENUE",
    data: 1015030038
  },
  {
    value: "1151 3 AVENUE",
    data: 1014220001
  },
  {
    value: "1151 BROADWAY",
    data: 1008280051
  },
  {
    value: "1152 1 AVENUE",
    data: 1014587504
  },
  {
    value: "1152 1 AVENUE",
    data: 1014587504
  },
  {
    value: "1152 2 AVENUE",
    data: 1014350151
  },
  {
    value: "1153 3 AVENUE",
    data: 1014220002
  },
  {
    value: "1153 3 AVENUE",
    data: 1014220002
  },
  {
    value: "1153 PARK AVENUE",
    data: 1015200004
  },
  {
    value: "1153 PARK AVENUE",
    data: 1015200004
  },
  {
    value: "1154 1 AVENUE",
    data: 1014587501
  },
  {
    value: "1154 1 AVENUE",
    data: 1014587501
  },
  {
    value: "1154 2 AVENUE",
    data: 1014350051
  },
  {
    value: "1155 AVENUE OF THE AMER",
    data: 1009970029
  },
  {
    value: "1155 BROADWAY",
    data: 1008280053
  },
  {
    value: "1156 2 AVENUE",
    data: 1014350050
  },
  {
    value: "1156 3 AVENUE",
    data: 1014027501
  },
  {
    value: "1156 3 AVENUE",
    data: 1014027501
  },
  {
    value: "1156 AVENUE OF THE AMER",
    data: 1012600071
  },
  {
    value: "1156 AVENUE OF THE AMER",
    data: 1012609071
  },
  {
    value: "1158 1 AVENUE",
    data: 1014580004
  },
  {
    value: "1158 1 AVENUE",
    data: 1014580004
  },
  {
    value: "1158 2 AVENUE",
    data: 1014350049
  },
  {
    value: "1158 5 AVENUE",
    data: 1016020069
  },
  {
    value: "1158 5 AVENUE",
    data: 1016020069
  },
  {
    value: "1158 BROADWAY",
    data: 1008290030
  },
  {
    value: "116 1 AVENUE",
    data: 1004340009
  },
  {
    value: "116 10 AVENUE",
    data: 1007150002
  },
  {
    value: "116 2 AVENUE",
    data: 1004480007
  },
  {
    value: "116 2 AVENUE",
    data: 1004480007
  },
  {
    value: "116 7 AVENUE",
    data: 1007660047
  },
  {
    value: "116 AVENUE OF THE AMER",
    data: 1004760019
  },
  {
    value: "116 AVENUE OF THE AMERICAS",
    data: 1004760019
  },
  {
    value: "116 BOWERY",
    data: 1002390020
  },
  {
    value: "116 BRADHURST AVENUE",
    data: 1020450060
  },
  {
    value: "116 CENTRAL PARK SOUTH",
    data: 1010117503
  },
  {
    value: "116 CENTRAL PARK SOUTH",
    data: 1010117503
  },
  {
    value: "116 CHAMBERS STREET",
    data: 1001360024
  },
  {
    value: "116 COLUMBIA STREET",
    data: 1003350001
  },
  {
    value: "116 DELANCEY STREET",
    data: 1003530044
  },
  {
    value: "116 DUANE STREET",
    data: 1001500019
  },
  {
    value: "116 EAST 10 STREET",
    data: 1004650015
  },
  {
    value: "116 EAST 101 STREET",
    data: 1016280067
  },
  {
    value: "116 EAST 102 STREET",
    data: 1016290064
  },
  {
    value: "116 EAST 106 STREET",
    data: 1016330066
  },
  {
    value: "116 EAST 111 STREET",
    data: 1016380066
  },
  {
    value: "116 EAST 116 STREET",
    data: 1016430063
  },
  {
    value: "116 EAST 117 STREET",
    data: 1016440066
  },
  {
    value: "116 EAST 123 STREET",
    data: 1017710065
  },
  {
    value: "116 EAST 124 STREET",
    data: 1017720064
  },
  {
    value: "116 EAST 16 STREET",
    data: 1008710070
  },
  {
    value: "116 EAST 17 STREET",
    data: 1008720068
  },
  {
    value: "116 EAST 17 STREET",
    data: 1008720068
  },
  {
    value: "116 EAST 19 STREET",
    data: 1008740068
  },
  {
    value: "116 EAST 27 STREET",
    data: 1008820076
  },
  {
    value: "116 EAST 30 STREET",
    data: 1008850080
  },
  {
    value: "116 EAST 31 STREET",
    data: 1008860078
  },
  {
    value: "116 EAST 37 STREET",
    data: 1008920075
  },
  {
    value: "116 EAST 38 STREET",
    data: 1008930081
  },
  {
    value: "116 EAST 55 STREET",
    data: 1013090065
  },
  {
    value: "116 EAST 57 STREET",
    data: 1013110064
  },
  {
    value: "116 EAST 59 STREET",
    data: 1013130065
  },
  {
    value: "116 EAST 60 STREET",
    data: 1013940066
  },
  {
    value: "116 EAST 61 STREET",
    data: 1013950165
  },
  {
    value: "116 EAST 62 STREET",
    data: 1013960066
  },
  {
    value: "116 EAST 63 STREET",
    data: 1013970066
  },
  {
    value: "116 EAST 63 STREET",
    data: 1013970066
  },
  {
    value: "116 EAST 64 STREET",
    data: 1013980166
  },
  {
    value: "116 EAST 65 STREET",
    data: 1013990065
  },
  {
    value: "116 EAST 70 STREET",
    data: 1014040065
  },
  {
    value: "116 EAST 73 STREET",
    data: 1014070067
  },
  {
    value: "116 EAST 78 STREET",
    data: 1014120164
  },
  {
    value: "116 EAST 80 STREET",
    data: 1015080066
  },
  {
    value: "116 EAST 82 STREET",
    data: 1015100164
  },
  {
    value: "116 EAST 83 STREET",
    data: 1015110064
  },
  {
    value: "116 EAST 83 STREET",
    data: 1015110064
  },
  {
    value: "116 EAST 91 STREET",
    data: 1015190064
  },
  {
    value: "116 EAST 92 STREET",
    data: 1015200066
  },
  {
    value: "116 EAST 92 STREET",
    data: 1015200066
  },
  {
    value: "116 EAST 95 STREET",
    data: 1015230068
  },
  {
    value: "116 EAST 97 STREET",
    data: 1016240060
  },
  {
    value: "116 EDGECOMBE AVENUE",
    data: 1020420027
  },
  {
    value: "116 ELDRIDGE STREET",
    data: 1004130006
  },
  {
    value: "116 ELIZABETH STREET",
    data: 1004700037
  },
  {
    value: "116 FRANKLIN STREET",
    data: 1001780011
  },
  {
    value: "116 HAMILTON PLACE",
    data: 1020740025
  },
  {
    value: "116 HAMILTON PLACE",
    data: 1020740025
  },
  {
    value: "116 JOHN STREET",
    data: 1000690032
  },
  {
    value: "116 JOHN STREET",
    data: 1000690032
  },
  {
    value: "116 LEXINGTON AVENUE",
    data: 1008830074
  },
  {
    value: "116 MAC DOUGAL STREET",
    data: 1005400007
  },
  {
    value: "116 MAC DOUGAL STREET",
    data: 1005400007
  },
  {
    value: "116 MADISON STREET",
    data: 1002760031
  },
  {
    value: "116 MADISON STREET",
    data: 1002760031
  },
  {
    value: "116 PINEHURST AVENUE",
    data: 1021790170
  },
  {
    value: "116 PINEHURST AVENUE",
    data: 1021790170
  },
  {
    value: "116 PRINCE STREET",
    data: 1005000018
  },
  {
    value: "116 SEAMAN AVENUE",
    data: 1022480109
  },
  {
    value: "116 SEAMAN AVENUE",
    data: 1022480109
  },
  {
    value: "116 SHERMAN AVENUE",
    data: 1022240038
  },
  {
    value: "116 SHERMAN AVENUE",
    data: 1022240038
  },
  {
    value: "116 ST MARKS PLACE",
    data: 1004350022
  },
  {
    value: "116 STANTON STREET",
    data: 1004120074
  },
  {
    value: "116 SUFFOLK STREET",
    data: 1003480010
  },
  {
    value: "116 SULLIVAN STREET",
    data: 1005040029
  },
  {
    value: "116 UNIVERSITY PLACE",
    data: 1005700022
  },
  {
    value: "116 WAVERLY PLACE",
    data: 1005520050
  },
  {
    value: "116 WEST 111 STREET",
    data: 1018200044
  },
  {
    value: "116 WEST 116 STREET",
    data: 1018250043
  },
  {
    value: "116 WEST 116 STREET",
    data: 1018250043
  },
  {
    value: "116 WEST 117 STREET",
    data: 1019010039
  },
  {
    value: "116 WEST 118 STREET",
    data: 1019020141
  },
  {
    value: "116 WEST 119 STREET",
    data: 1019030043
  },
  {
    value: "116 WEST 120 STREET",
    data: 1019040042
  },
  {
    value: "116 WEST 121 STREET",
    data: 1019050042
  },
  {
    value: "116 WEST 123 STREET",
    data: 1019070043
  },
  {
    value: "116 WEST 124 STREET",
    data: 1019080140
  },
  {
    value: "116 WEST 125 STREET",
    data: 1019090042
  },
  {
    value: "116 WEST 127 STREET",
    data: 1019110041
  },
  {
    value: "116 WEST 129 STREET",
    data: 1019130040
  },
  {
    value: "116 WEST 129 STREET",
    data: 1019130040
  },
  {
    value: "116 WEST 13 STREET",
    data: 1006080029
  },
  {
    value: "116 WEST 130 STREET",
    data: 1019140041
  },
  {
    value: "116 WEST 131 STREET",
    data: 1019150042
  },
  {
    value: "116 WEST 132 STREET",
    data: 1019160042
  },
  {
    value: "116 WEST 133 STREET",
    data: 1019170141
  },
  {
    value: "116 WEST 134 STREET",
    data: 1019180046
  },
  {
    value: "116 WEST 136 STREET",
    data: 1019200141
  },
  {
    value: "116 WEST 139 STREET",
    data: 1020070045
  },
  {
    value: "116 WEST 14 STREET",
    data: 1006097502
  },
  {
    value: "116 WEST 14 STREET",
    data: 1006097502
  },
  {
    value: "116 WEST 22 STREET",
    data: 1007977506
  },
  {
    value: "116 WEST 227 STREET",
    data: 1022150440
  },
  {
    value: "116 WEST 24 STREET",
    data: 1007990051
  },
  {
    value: "116 WEST 28 STREET",
    data: 1008030049
  },
  {
    value: "116 WEST 3 STREET",
    data: 1005430021
  },
  {
    value: "116 WEST 3 STREET",
    data: 1005430021
  },
  {
    value: "116 WEST 31 STREET",
    data: 1008060052
  },
  {
    value: "116 WEST 69 STREET",
    data: 1011400039
  },
  {
    value: "116 WEST 71 STREET",
    data: 1011420039
  },
  {
    value: "116 WEST 72 STREET",
    data: 1011430037
  },
  {
    value: "116 WEST 72 STREET",
    data: 1011430037
  },
  {
    value: "116 WEST 73 STREET",
    data: 1011440039
  },
  {
    value: "116 WEST 74 STREET",
    data: 1011450039
  },
  {
    value: "116 WEST 75 STREET",
    data: 1011460042
  },
  {
    value: "116 WEST 76 STREET",
    data: 1011470140
  },
  {
    value: "116 WEST 78 STREET",
    data: 1011490041
  },
  {
    value: "116 WEST 80 STREET",
    data: 1012100142
  },
  {
    value: "116 WEST 81 STREET",
    data: 1012110041
  },
  {
    value: "116 WEST 87 STREET",
    data: 1012170041
  },
  {
    value: "116 WEST 88 STREET",
    data: 1012180138
  },
  {
    value: "116 WEST 89 STREET",
    data: 1012190041
  },
  {
    value: "116 WEST HOUSTON STREET",
    data: 1005250029
  },
  {
    value: "116 WEST WASHINGTON PLCE",
    data: 1005920011
  },
  {
    value: "116 WOOSTER STREET",
    data: 1005007501
  },
  {
    value: "116 WOOSTER STREET",
    data: 1005007501
  },
  {
    value: "1160 1 AVENUE",
    data: 1014580048
  },
  {
    value: "1160 5 AVENUE",
    data: 1016030001
  },
  {
    value: "1160 5 AVENUE",
    data: 1016030001
  },
  {
    value: "1160 PARK AVENUE",
    data: 1015040031
  },
  {
    value: "1160 PARK AVENUE",
    data: 1015040031
  },
  {
    value: "1160 ST NICHOLAS AVENUE",
    data: 1021250001
  },
  {
    value: "1161 2 AVENUE",
    data: 1014160021
  },
  {
    value: "1161 2 AVENUE",
    data: 1014160021
  },
  {
    value: "1161 AMSTERDAM AVENUE",
    data: 1019610037
  },
  {
    value: "1161 BROADWAY",
    data: 1008290022
  },
  {
    value: "1162 1 AVENUE",
    data: 1014580047
  },
  {
    value: "1162 2 AVENUE",
    data: 1014360001
  },
  {
    value: "1162 2 AVENUE",
    data: 1014360001
  },
  {
    value: "1162 BROADWAY",
    data: 1008290028
  },
  {
    value: "1164 1 AVENUE",
    data: 1014580046
  },
  {
    value: "1164 1 AVENUE",
    data: 1014580046
  },
  {
    value: "1164 3 AVENUE",
    data: 1014020040
  },
  {
    value: "1164 BROADWAY",
    data: 1008290050
  },
  {
    value: "1165 2 AVENUE",
    data: 1014160023
  },
  {
    value: "1165 AMSTERDAM AVENUE",
    data: 1019610039
  },
  {
    value: "1165 PARK AVENUE",
    data: 1015210001
  },
  {
    value: "1165 PARK AVENUE",
    data: 1015210001
  },
  {
    value: "1166 1 AVENUE",
    data: 1014580045
  },
  {
    value: "1166 1 AVENUE",
    data: 1014580045
  },
  {
    value: "1166 2 AVENUE",
    data: 1014360003
  },
  {
    value: "1166 AVENUE OF THE AMER",
    data: 1012617501
  },
  {
    value: "1167 2 AVENUE",
    data: 1014160024
  },
  {
    value: "1168 1 AVENUE",
    data: 1014590001
  },
  {
    value: "1168 1 AVENUE",
    data: 1014590001
  },
  {
    value: "1169 2 AVENUE",
    data: 1014160025
  },
  {
    value: "116A DYCKMAN STREET",
    data: 1021740061
  },
  {
    value: "117 1 AVENUE",
    data: 1004490037
  },
  {
    value: "117 2 AVENUE",
    data: 1004620023
  },
  {
    value: "117 AVENUE A",
    data: 1004350034
  },
  {
    value: "117 BANK STREET",
    data: 1006350039
  },
  {
    value: "117 BANK STREET",
    data: 1006350039
  },
  {
    value: "117 BEEKMAN STREET",
    data: 1000957501
  },
  {
    value: "117 BEEKMAN STREET",
    data: 1000957501
  },
  {
    value: "117 CHARLES STREET",
    data: 1006320057
  },
  {
    value: "117 CHARLES STREET",
    data: 1006320057
  },
  {
    value: "117 CHRISTOPHER STREET",
    data: 1006190044
  },
  {
    value: "117 CHRISTOPHER STREET",
    data: 1006190044
  },
  {
    value: "117 CHRYSTIE STREET",
    data: 1004230022
  },
  {
    value: "117 DUANE STREET",
    data: 1001510010
  },
  {
    value: "117 DYCKMAN STREET",
    data: 1022170001
  },
  {
    value: "117 DYCKMAN STREET",
    data: 1022170001
  },
  {
    value: "117 EAST 101 STREET",
    data: 1016290006
  },
  {
    value: "117 EAST 102 STREET",
    data: 1016307502
  },
  {
    value: "117 EAST 102 STREET",
    data: 1016307502
  },
  {
    value: "117 EAST 115 STREET",
    data: 1016430008
  },
  {
    value: "117 EAST 115 STREET",
    data: 1016430008
  },
  {
    value: "117 EAST 15 STREET",
    data: 1008710014
  },
  {
    value: "117 EAST 18 STREET",
    data: 1008747502
  },
  {
    value: "117 EAST 19 STREET",
    data: 1008750014
  },
  {
    value: "117 EAST 2 STREET",
    data: 1004290021
  },
  {
    value: "117 EAST 2 STREET",
    data: 1004290021
  },
  {
    value: "117 EAST 24 STREET",
    data: 1008807501
  },
  {
    value: "117 EAST 24 STREET",
    data: 1008807501
  },
  {
    value: "117 EAST 26 STREET",
    data: 1008820013
  },
  {
    value: "117 EAST 29 STREET",
    data: 1008857501
  },
  {
    value: "117 EAST 29 STREET",
    data: 1008857501
  },
  {
    value: "117 EAST 3 STREET",
    data: 1004310040
  },
  {
    value: "117 EAST 30 STREET",
    data: 1008860013
  },
  {
    value: "117 EAST 31 STREET",
    data: 1008870013
  },
  {
    value: "117 EAST 35 STREET",
    data: 1008910012
  },
  {
    value: "117 EAST 36 STREET",
    data: 1008920010
  },
  {
    value: "117 EAST 37 STREET",
    data: 1008930014
  },
  {
    value: "117 EAST 37 STREET",
    data: 1008930014
  },
  {
    value: "117 EAST 38 STREET",
    data: 1008940013
  },
  {
    value: "117 EAST 39 STREET",
    data: 1008950014
  },
  {
    value: "117 EAST 55 STREET",
    data: 1013100108
  },
  {
    value: "117 EAST 57 STREET",
    data: 1013127501
  },
  {
    value: "117 EAST 57 STREET",
    data: 1013127501
  },
  {
    value: "117 EAST 60 STREET",
    data: 1013950008
  },
  {
    value: "117 EAST 62 STREET",
    data: 1013970007
  },
  {
    value: "117 EAST 64 STREET",
    data: 1013990007
  },
  {
    value: "117 EAST 65 STREET",
    data: 1014000008
  },
  {
    value: "117 EAST 69 STREET",
    data: 1014040009
  },
  {
    value: "117 EAST 7 STREET",
    data: 1004350043
  },
  {
    value: "117 EAST 7 STREET",
    data: 1004350043
  },
  {
    value: "117 EAST 70 STREET",
    data: 1014050009
  },
  {
    value: "117 EAST 72 STREET",
    data: 1014070008
  },
  {
    value: "117 EAST 72 STREET",
    data: 1014070008
  },
  {
    value: "117 EAST 77 STREET",
    data: 1014120012
  },
  {
    value: "117 EAST 77 STREET",
    data: 1014120012
  },
  {
    value: "117 EAST 78 STREET",
    data: 1014130010
  },
  {
    value: "117 EAST 79 STREET",
    data: 1015080107
  },
  {
    value: "117 EAST 80 STREET",
    data: 1015090009
  },
  {
    value: "117 EAST 81 STREET",
    data: 1015100110
  },
  {
    value: "117 EAST 83 STREET",
    data: 1015120009
  },
  {
    value: "117 EAST 89 STREET",
    data: 1015180013
  },
  {
    value: "117 EAST 89 STREET",
    data: 1015180013
  },
  {
    value: "117 EAST 91 STREET",
    data: 1015200009
  },
  {
    value: "117 EAST 95 STREET",
    data: 1015240007
  },
  {
    value: "117 EDGECOMBE AVENUE",
    data: 1020487502
  },
  {
    value: "117 ELIZABETH STREET",
    data: 1004700023
  },
  {
    value: "117 ESSEX STREET",
    data: 1004110054
  },
  {
    value: "117 HENRY STREET",
    data: 1002830005
  },
  {
    value: "117 HENRY STREET",
    data: 1002830005
  },
  {
    value: "117 HESTER STREET",
    data: 1003060040
  },
  {
    value: "117 HUDSON STREET",
    data: 1001870025
  },
  {
    value: "117 LUDLOW STREET",
    data: 1004100022
  },
  {
    value: "117 LUDLOW STREET",
    data: 1004100022
  },
  {
    value: "117 MAC DOUGAL STREET",
    data: 1005430022
  },
  {
    value: "117 MANHATTAN AVENUE",
    data: 1018400151
  },
  {
    value: "117 MERCER STREET",
    data: 1004990029
  },
  {
    value: "117 MOTT STREET",
    data: 1002050020
  },
  {
    value: "117 MOTT STREET",
    data: 1002050020
  },
  {
    value: "117 MULBERRY STREET",
    data: 1002060021
  },
  {
    value: "117 MULBERRY STREET",
    data: 1002060021
  },
  {
    value: "117 SHERMAN AVENUE",
    data: 1022200015
  },
  {
    value: "117 SHERMAN AVENUE",
    data: 1022200015
  },
  {
    value: "117 SULLIVAN STREET",
    data: 1005030011
  },
  {
    value: "117 SULLIVAN STREET",
    data: 1005030011
  },
  {
    value: "117 VARICK STREET",
    data: 1005780070
  },
  {
    value: "117 VARICK STREET",
    data: 1005780070
  },
  {
    value: "117 WAVERLY PLACE",
    data: 1005530038
  },
  {
    value: "117 WAVERLY PLACE",
    data: 1005530038
  },
  {
    value: "117 WEST 10 STREET",
    data: 1006060092
  },
  {
    value: "117 WEST 11 STREET",
    data: 1006070054
  },
  {
    value: "117 WEST 111 STREET",
    data: 1018210020
  },
  {
    value: "117 WEST 114 STREET",
    data: 1018240019
  },
  {
    value: "117 WEST 116 STREET",
    data: 1019010023
  },
  {
    value: "117 WEST 116 STREET",
    data: 1019010023
  },
  {
    value: "117 WEST 117 STREET",
    data: 1019020122
  },
  {
    value: "117 WEST 118 STREET",
    data: 1019030121
  },
  {
    value: "117 WEST 119 STREET",
    data: 1019040122
  },
  {
    value: "117 WEST 12 STREET",
    data: 1006080052
  },
  {
    value: "117 WEST 120 STREET",
    data: 1019050021
  },
  {
    value: "117 WEST 122 STREET",
    data: 1019070023
  },
  {
    value: "117 WEST 123 STREET",
    data: 1019087504
  },
  {
    value: "117 WEST 123 STREET",
    data: 1019087504
  },
  {
    value: "117 WEST 124 STREET",
    data: 1019090024
  },
  {
    value: "117 WEST 126 STREET",
    data: 1019110023
  },
  {
    value: "117 WEST 128 STREET",
    data: 1019130020
  },
  {
    value: "117 WEST 130 STREET",
    data: 1019150022
  },
  {
    value: "117 WEST 131 STREET",
    data: 1019160023
  },
  {
    value: "117 WEST 132 STREET",
    data: 1019170123
  },
  {
    value: "117 WEST 136 STREET",
    data: 1019210023
  },
  {
    value: "117 WEST 138 STREET",
    data: 1020070020
  },
  {
    value: "117 WEST 141 STREET",
    data: 1020100018
  },
  {
    value: "117 WEST 141 STREET",
    data: 1020100018
  },
  {
    value: "117 WEST 142 STREET",
    data: 1020110026
  },
  {
    value: "117 WEST 142 STREET",
    data: 1020110026
  },
  {
    value: "117 WEST 144 STREET",
    data: 1020130022
  },
  {
    value: "117 WEST 144 STREET",
    data: 1020130022
  },
  {
    value: "117 WEST 15 STREET",
    data: 1007910030
  },
  {
    value: "117 WEST 15 STREET",
    data: 1007910030
  },
  {
    value: "117 WEST 17 STREET",
    data: 1007937501
  },
  {
    value: "117 WEST 21 STREET",
    data: 1007970029
  },
  {
    value: "117 WEST 25 STREET",
    data: 1008010028
  },
  {
    value: "117 WEST 26 STREET",
    data: 1008020029
  },
  {
    value: "117 WEST 28 STREET",
    data: 1008040026
  },
  {
    value: "117 WEST 39 STREET",
    data: 1008150020
  },
  {
    value: "117 WEST 57 STREET",
    data: 1010100023
  },
  {
    value: "117 WEST 58 STREET",
    data: 1010110025
  },
  {
    value: "117 WEST 58 STREET",
    data: 1010110025
  },
  {
    value: "117 WEST 69 STREET",
    data: 1011410026
  },
  {
    value: "117 WEST 70 STREET",
    data: 1011420024
  },
  {
    value: "117 WEST 72 STREET",
    data: 1011440026
  },
  {
    value: "117 WEST 74 STREET",
    data: 1011460022
  },
  {
    value: "117 WEST 74 STREET",
    data: 1011460022
  },
  {
    value: "117 WEST 75 STREET",
    data: 1011470022
  },
  {
    value: "117 WEST 75 STREET",
    data: 1011470022
  },
  {
    value: "117 WEST 77 STREET",
    data: 1011490025
  },
  {
    value: "117 WEST 78 STREET",
    data: 1011500123
  },
  {
    value: "117 WEST 79 STREET",
    data: 1012100026
  },
  {
    value: "117 WEST 81 STREET",
    data: 1012120027
  },
  {
    value: "117 WEST 82 STREET",
    data: 1012137502
  },
  {
    value: "117 WEST 85 STREET",
    data: 1012160022
  },
  {
    value: "117 WEST 87 STREET",
    data: 1012180126
  },
  {
    value: "117 WEST 88 STREET",
    data: 1012190023
  },
  {
    value: "117 WEST 91 STREET",
    data: 1012220017
  },
  {
    value: "117 WEST 92 STREET",
    data: 1012230125
  },
  {
    value: "117 WEST 96 STREET",
    data: 1018510020
  },
  {
    value: "1170 5 AVENUE",
    data: 1016040001
  },
  {
    value: "1170 5 AVENUE",
    data: 1016040001
  },
  {
    value: "1171 2 AVENUE",
    data: 1014160026
  },
  {
    value: "1171 2 AVENUE",
    data: 1014160026
  },
  {
    value: "1172 PARK AVENUE",
    data: 1015040040
  },
  {
    value: "1172 PARK AVENUE",
    data: 1015040040
  },
  {
    value: "1174 YORK AVENUE",
    data: 1014809010
  },
  {
    value: "1175 2 AVENUE",
    data: 1014160028
  },
  {
    value: "1175 PARK AVENUE",
    data: 1015210069
  },
  {
    value: "1175 PARK AVENUE",
    data: 1015210069
  },
  {
    value: "1175 YORK AVENUE",
    data: 1014587502
  },
  {
    value: "1175 YORK AVENUE",
    data: 1014587502
  },
  {
    value: "1176 YORK AVENUE",
    data: 1014800001
  },
  {
    value: "1177 2 AVENUE",
    data: 1014170021
  },
  {
    value: "1177 AVENUE OF THE AMER",
    data: 1009980029
  },
  {
    value: "1177 BROADWAY",
    data: 1008290055
  },
  {
    value: "1178 2 AVENUE",
    data: 1014367501
  },
  {
    value: "1178 BROADWAY",
    data: 1008300028
  },
  {
    value: "1178 MADISON AVENUE",
    data: 1014980014
  },
  {
    value: "1178 MADISON AVENUE",
    data: 1014980014
  },
  {
    value: "1179 2 AVENUE",
    data: 1014170022
  },
  {
    value: "1179 BROADWAY",
    data: 1008290056
  },
  {
    value: "117A CHARLES STREET",
    data: 1006320059
  },
  {
    value: "118 1 AVENUE",
    data: 1004350001
  },
  {
    value: "118 10 AVENUE",
    data: 1007150003
  },
  {
    value: "118 2 AVENUE",
    data: 1004490001
  },
  {
    value: "118 2 AVENUE",
    data: 1004490001
  },
  {
    value: "118 3 AVENUE",
    data: 1005590035
  },
  {
    value: "118 5 AVENUE",
    data: 1008190037
  },
  {
    value: "118 AVENUE C",
    data: 1003770005
  },
  {
    value: "118 BAXTER STREET",
    data: 1002070017
  },
  {
    value: "118 CHAMBERS STREET",
    data: 1001360023
  },
  {
    value: "118 CHRISTOPHER STREET",
    data: 1005880047
  },
  {
    value: "118 CHRISTOPHER STREET",
    data: 1005880047
  },
  {
    value: "118 DUANE STREET",
    data: 1001500017
  },
  {
    value: "118 DYCKMAN STREET",
    data: 1021740060
  },
  {
    value: "118 EAST 1 STREET",
    data: 1004290043
  },
  {
    value: "118 EAST 10 STREET",
    data: 1004650016
  },
  {
    value: "118 EAST 101 STREET",
    data: 1016280066
  },
  {
    value: "118 EAST 102 STREET",
    data: 1016290063
  },
  {
    value: "118 EAST 103 STREET",
    data: 1016300067
  },
  {
    value: "118 EAST 103 STREET",
    data: 1016300067
  },
  {
    value: "118 EAST 104 STREET",
    data: 1016310065
  },
  {
    value: "118 EAST 104 STREET",
    data: 1016310065
  },
  {
    value: "118 EAST 116 STREET",
    data: 1016430062
  },
  {
    value: "118 EAST 117 STREET",
    data: 1016440065
  },
  {
    value: "118 EAST 123 STREET",
    data: 1017710059
  },
  {
    value: "118 EAST 123 STREET",
    data: 1017710059
  },
  {
    value: "118 EAST 125 STREET",
    data: 1017730007
  },
  {
    value: "118 EAST 17 STREET",
    data: 1008720067
  },
  {
    value: "118 EAST 18 STREET",
    data: 1008730061
  },
  {
    value: "118 EAST 19 STREET",
    data: 1008740067
  },
  {
    value: "118 EAST 25 STREET",
    data: 1008800080
  },
  {
    value: "118 EAST 29 STREET",
    data: 1008847501
  },
  {
    value: "118 EAST 30 STREET",
    data: 1008850079
  },
  {
    value: "118 EAST 31 STREET",
    data: 1008860077
  },
  {
    value: "118 EAST 37 STREET",
    data: 1008920074
  },
  {
    value: "118 EAST 38 STREET",
    data: 1008930080
  },
  {
    value: "118 EAST 4 STREET",
    data: 1004450025
  },
  {
    value: "118 EAST 4 STREET",
    data: 1004450025
  },
  {
    value: "118 EAST 40 STREET",
    data: 1008950079
  },
  {
    value: "118 EAST 57 STREET",
    data: 1013110063
  },
  {
    value: "118 EAST 60 STREET",
    data: 1013940007
  },
  {
    value: "118 EAST 60 STREET",
    data: 1013940007
  },
  {
    value: "118 EAST 61 STREET",
    data: 1013950065
  },
  {
    value: "118 EAST 62 STREET",
    data: 1013960065
  },
  {
    value: "118 EAST 64 STREET",
    data: 1013980066
  },
  {
    value: "118 EAST 65 STREET",
    data: 1013990164
  },
  {
    value: "118 EAST 7 STREET",
    data: 1004340023
  },
  {
    value: "118 EAST 7 STREET",
    data: 1004340023
  },
  {
    value: "118 EAST 70 STREET",
    data: 1014040064
  },
  {
    value: "118 EAST 73 STREET",
    data: 1014070066
  },
  {
    value: "118 EAST 76 STREET",
    data: 1014100065
  },
  {
    value: "118 EAST 78 STREET",
    data: 1014120064
  },
  {
    value: "118 EAST 82 STREET",
    data: 1015100064
  },
  {
    value: "118 EAST 83 STREET",
    data: 1015110063
  },
  {
    value: "118 EAST 85 STREET",
    data: 1015130063
  },
  {
    value: "118 EAST 91 STREET",
    data: 1015190063
  },
  {
    value: "118 EAST 91 STREET",
    data: 1015190063
  },
  {
    value: "118 EAST 92 STREET",
    data: 1015200065
  },
  {
    value: "118 EAST 92 STREET",
    data: 1015200065
  },
  {
    value: "118 EAST 93 STREET",
    data: 1015210064
  },
  {
    value: "118 EAST 93 STREET",
    data: 1015210064
  },
  {
    value: "118 EAST 95 STREET",
    data: 1015230067
  },
  {
    value: "118 ELIZABETH STREET",
    data: 1004700038
  },
  {
    value: "118 ELIZABETH STREET",
    data: 1004700038
  },
  {
    value: "118 FORSYTH STREET",
    data: 1004190045
  },
  {
    value: "118 FT WASHINGTON AVENUE",
    data: 1021370157
  },
  {
    value: "118 FT WASHINGTON AVENUE",
    data: 1021370157
  },
  {
    value: "118 HUDSON STREET",
    data: 1001890020
  },
  {
    value: "118 LEXINGTON AVENUE",
    data: 1008830075
  },
  {
    value: "118 MAC DOUGAL STREET",
    data: 1005400008
  },
  {
    value: "118 MAC DOUGAL STREET",
    data: 1005400008
  },
  {
    value: "118 MADISON AVENUE",
    data: 1008600015
  },
  {
    value: "118 MADISON AVENUE",
    data: 1008600015
  },
  {
    value: "118 MADISON STREET",
    data: 1002760030
  },
  {
    value: "118 MULBERRY STREET",
    data: 1002050010
  },
  {
    value: "118 MULBERRY STREET",
    data: 1002050010
  },
  {
    value: "118 NAGLE AVENUE",
    data: 1021740085
  },
  {
    value: "118 NAGLE AVENUE",
    data: 1021740085
  },
  {
    value: "118 NASSAU STREET",
    data: 1000920026
  },
  {
    value: "118 PARK AVENUE",
    data: 1012760033
  },
  {
    value: "118 POST AVENUE",
    data: 1022220029
  },
  {
    value: "118 POST AVENUE",
    data: 1022220029
  },
  {
    value: "118 PRINCE STREET",
    data: 1005000017
  },
  {
    value: "118 RIDGE STREET",
    data: 1003440043
  },
  {
    value: "118 RIVINGTON STREET",
    data: 1003540038
  },
  {
    value: "118 SPRING STREET",
    data: 1004850017
  },
  {
    value: "118 ST MARKS PLACE",
    data: 1004350023
  },
  {
    value: "118 STANTON STREET",
    data: 1004120073
  },
  {
    value: "118 STANTON STREET",
    data: 1004120073
  },
  {
    value: "118 SUFFOLK STREET",
    data: 1003480011
  },
  {
    value: "118 SUFFOLK STREET",
    data: 1003480011
  },
  {
    value: "118 SULLIVAN STREET",
    data: 1005040028
  },
  {
    value: "118 VERMILYEA AVENUE",
    data: 1022350029
  },
  {
    value: "118 VERMILYEA AVENUE",
    data: 1022350029
  },
  {
    value: "118 WAVERLY PLACE",
    data: 1005520148
  },
  {
    value: "118 WEST 109 STREET",
    data: 1018630045
  },
  {
    value: "118 WEST 109 STREET",
    data: 1018630045
  },
  {
    value: "118 WEST 111 STREET",
    data: 1018200144
  },
  {
    value: "118 WEST 112 STREET",
    data: 1018217502
  },
  {
    value: "118 WEST 112 STREET",
    data: 1018217502
  },
  {
    value: "118 WEST 114 STREET",
    data: 1018230045
  },
  {
    value: "118 WEST 117 STREET",
    data: 1019010139
  },
  {
    value: "118 WEST 118 STREET",
    data: 1019020042
  },
  {
    value: "118 WEST 119 STREET",
    data: 1019030143
  },
  {
    value: "118 WEST 12 STREET",
    data: 1006070033
  },
  {
    value: "118 WEST 120 STREET",
    data: 1019040043
  },
  {
    value: "118 WEST 121 STREET",
    data: 1019050142
  },
  {
    value: "118 WEST 121 STREET",
    data: 1019050142
  },
  {
    value: "118 WEST 123 STREET",
    data: 1019070045
  },
  {
    value: "118 WEST 123 STREET",
    data: 1019070045
  },
  {
    value: "118 WEST 124 STREET",
    data: 1019080041
  },
  {
    value: "118 WEST 127 STREET",
    data: 1019110141
  },
  {
    value: "118 WEST 130 STREET",
    data: 1019140042
  },
  {
    value: "118 WEST 131 STREET",
    data: 1019150043
  },
  {
    value: "118 WEST 132 STREET",
    data: 1019160142
  },
  {
    value: "118 WEST 133 STREET",
    data: 1019170042
  },
  {
    value: "118 WEST 136 STREET",
    data: 1019200042
  },
  {
    value: "118 WEST 137 STREET",
    data: 1019210044
  },
  {
    value: "118 WEST 137 STREET",
    data: 1019210044
  },
  {
    value: "118 WEST 139 STREET",
    data: 1020070046
  },
  {
    value: "118 WEST 16 STREET",
    data: 1007910053
  },
  {
    value: "118 WEST 18 STREET",
    data: 1007930050
  },
  {
    value: "118 WEST 22 STREET",
    data: 1007970054
  },
  {
    value: "118 WEST 227 STREET",
    data: 1022150439
  },
  {
    value: "118 WEST 23 STREET",
    data: 1007980054
  },
  {
    value: "118 WEST 23 STREET",
    data: 1007980054
  },
  {
    value: "118 WEST 27 STREET",
    data: 1008020054
  },
  {
    value: "118 WEST 28 STREET",
    data: 1008030051
  },
  {
    value: "118 WEST 3 STREET",
    data: 1005430020
  },
  {
    value: "118 WEST 3 STREET",
    data: 1005430020
  },
  {
    value: "118 WEST 71 STREET",
    data: 1011420040
  },
  {
    value: "118 WEST 72 STREET",
    data: 1011430039
  },
  {
    value: "118 WEST 72 STREET",
    data: 1011430039
  },
  {
    value: "118 WEST 73 STREET",
    data: 1011440040
  },
  {
    value: "118 WEST 73 STREET",
    data: 1011440040
  },
  {
    value: "118 WEST 74 STREET",
    data: 1011450040
  },
  {
    value: "118 WEST 75 STREET",
    data: 1011460142
  },
  {
    value: "118 WEST 76 STREET",
    data: 1011470041
  },
  {
    value: "118 WEST 78 STREET",
    data: 1011490042
  },
  {
    value: "118 WEST 80 STREET",
    data: 1012100043
  },
  {
    value: "118 WEST 81 STREET",
    data: 1012110042
  },
  {
    value: "118 WEST 81 STREET",
    data: 1012110042
  },
  {
    value: "118 WEST 83 STREET",
    data: 1012130040
  },
  {
    value: "118 WEST 83 STREET",
    data: 1012130040
  },
  {
    value: "118 WEST 87 STREET",
    data: 1012170141
  },
  {
    value: "118 WEST 88 STREET",
    data: 1012180039
  },
  {
    value: "118 WEST 95 STREET",
    data: 1012250041
  },
  {
    value: "118 WEST WASHINGTON PLCE",
    data: 1005920010
  },
  {
    value: "1180 2 AVENUE",
    data: 1014370001
  },
  {
    value: "1180 2 AVENUE",
    data: 1014370001
  },
  {
    value: "1180 AVENUE OF THE AMER",
    data: 1012620001
  },
  {
    value: "1180 BROADWAY",
    data: 1008300027
  },
  {
    value: "1181 AMSTERDAM AVENUE",
    data: 1019620001
  },
  {
    value: "1181 AMSTERDAM AVENUE",
    data: 1019620001
  },
  {
    value: "1181 BROADWAY",
    data: 1008290057
  },
  {
    value: "1182 BROADWAY",
    data: 1008300026
  },
  {
    value: "1182 BROADWAY",
    data: 1008300026
  },
  {
    value: "1185 1 AVENUE",
    data: 1014390023
  },
  {
    value: "1185 1 AVENUE",
    data: 1014390023
  },
  {
    value: "1185 AVENUE OF THE AMER",
    data: 1009990029
  },
  {
    value: "1185 BROADWAY",
    data: 1008300024
  },
  {
    value: "1185 PARK AVENUE",
    data: 1015220001
  },
  {
    value: "1185 PARK AVENUE",
    data: 1015220001
  },
  {
    value: "1186 3 AVENUE",
    data: 1014040033
  },
  {
    value: "1186 3 AVENUE",
    data: 1014040033
  },
  {
    value: "1186 BROADWAY",
    data: 1008300054
  },
  {
    value: "1188 AVENUE OF THE AMER",
    data: 1012620077
  },
  {
    value: "119 1 AVENUE",
    data: 1004490036
  },
  {
    value: "119 2 AVENUE",
    data: 1004630035
  },
  {
    value: "119 5 AVENUE",
    data: 1008480001
  },
  {
    value: "119 7 AVENUE",
    data: 1007930001
  },
  {
    value: "119 7 AVENUE",
    data: 1007930001
  },
  {
    value: "119 AMSTERDAM AVENUE",
    data: 1011340025
  },
  {
    value: "119 AUDUBON AVENUE",
    data: 1021280031
  },
  {
    value: "119 AUDUBON AVENUE",
    data: 1021280031
  },
  {
    value: "119 AVENUE A",
    data: 1004350033
  },
  {
    value: "119 AVENUE B",
    data: 1003900105
  },
  {
    value: "119 AVENUE D",
    data: 1003780035
  },
  {
    value: "119 AVENUE D",
    data: 1003780035
  },
  {
    value: "119 BANK STREET",
    data: 1006350040
  },
  {
    value: "119 BANK STREET",
    data: 1006350040
  },
  {
    value: "119 BAXTER STREET",
    data: 1002060004
  },
  {
    value: "119 BAXTER STREET",
    data: 1002060004
  },
  {
    value: "119 BOWERY",
    data: 1003040013
  },
  {
    value: "119 CHAMBERS STREET",
    data: 1001457506
  },
  {
    value: "119 CHRISTOPHER STREET",
    data: 1006190045
  },
  {
    value: "119 CHRISTOPHER STREET",
    data: 1006190045
  },
  {
    value: "119 CHRYSTIE STREET",
    data: 1004230021
  },
  {
    value: "119 EAST 100 STREET",
    data: 1016280010
  },
  {
    value: "119 EAST 100 STREET",
    data: 1016280010
  },
  {
    value: "119 EAST 101 STREET",
    data: 1016297501
  },
  {
    value: "119 EAST 102 STREET",
    data: 1016300010
  },
  {
    value: "119 EAST 102 STREET",
    data: 1016300010
  },
  {
    value: "119 EAST 11 STREET",
    data: 1005560068
  },
  {
    value: "119 EAST 17 STREET",
    data: 1008730014
  },
  {
    value: "119 EAST 18 STREET",
    data: 1008740013
  },
  {
    value: "119 EAST 23 STREET",
    data: 1008797501
  },
  {
    value: "119 EAST 26 STREET",
    data: 1008820014
  },
  {
    value: "119 EAST 28 STREET",
    data: 1008840112
  },
  {
    value: "119 EAST 29 STREET",
    data: 1008850015
  },
  {
    value: "119 EAST 30 STREET",
    data: 1008860014
  },
  {
    value: "119 EAST 35 STREET",
    data: 1008910013
  },
  {
    value: "119 EAST 36 STREET",
    data: 1008920011
  },
  {
    value: "119 EAST 38 STREET",
    data: 1008940014
  },
  {
    value: "119 EAST 54 STREET",
    data: 1013090007
  },
  {
    value: "119 EAST 55 STREET",
    data: 1013100009
  },
  {
    value: "119 EAST 60 STREET",
    data: 1013950009
  },
  {
    value: "119 EAST 64 STREET",
    data: 1013990107
  },
  {
    value: "119 EAST 65 STREET",
    data: 1014000009
  },
  {
    value: "119 EAST 71 STREET",
    data: 1014060009
  },
  {
    value: "119 EAST 74 STREET",
    data: 1014090008
  },
  {
    value: "119 EAST 78 STREET",
    data: 1014130011
  },
  {
    value: "119 EAST 79 STREET",
    data: 1015080008
  },
  {
    value: "119 EAST 81 STREET",
    data: 1015100011
  },
  {
    value: "119 EAST 83 STREET",
    data: 1015120010
  },
  {
    value: "119 EAST 83 STREET",
    data: 1015120010
  },
  {
    value: "119 EAST 84 STREET",
    data: 1015130009
  },
  {
    value: "119 EAST 84 STREET",
    data: 1015130009
  },
  {
    value: "119 EAST 89 STREET",
    data: 1015180014
  },
  {
    value: "119 EAST 89 STREET",
    data: 1015180014
  },
  {
    value: "119 EAST 91 STREET",
    data: 1015200108
  },
  {
    value: "119 EAST 95 STREET",
    data: 1015240008
  },
  {
    value: "119 EAST 96 STREET",
    data: 1016240009
  },
  {
    value: "119 EAST 96 STREET",
    data: 1016240009
  },
  {
    value: "119 EAST 97 STREET",
    data: 1016250009
  },
  {
    value: "119 EAST 97 STREET",
    data: 1016250009
  },
  {
    value: "119 EDGECOMBE AVENUE",
    data: 1020480035
  },
  {
    value: "119 ELIZABETH STREET",
    data: 1004700021
  },
  {
    value: "119 ELIZABETH STREET",
    data: 1004700021
  },
  {
    value: "119 ESSEX STREET",
    data: 1004100054
  },
  {
    value: "119 FULTON STREET",
    data: 1000917501
  },
  {
    value: "119 FULTON STREET",
    data: 1000917501
  },
  {
    value: "119 HENRY STREET",
    data: 1002830006
  },
  {
    value: "119 HENRY STREET",
    data: 1002830006
  },
  {
    value: "119 HESTER STREET",
    data: 1003060001
  },
  {
    value: "119 HESTER STREET",
    data: 1003060001
  },
  {
    value: "119 LENOX AVENUE",
    data: 1018250036
  },
  {
    value: "119 LEXINGTON AVENUE",
    data: 1008840026
  },
  {
    value: "119 LUDLOW STREET",
    data: 1004100021
  },
  {
    value: "119 MADISON AVENUE",
    data: 1008600022
  },
  {
    value: "119 MADISON AVENUE",
    data: 1008600022
  },
  {
    value: "119 MANHATTAN AVENUE",
    data: 1018400051
  },
  {
    value: "119 MERCER STREET",
    data: 1004990028
  },
  {
    value: "119 MOTT STREET",
    data: 1002050019
  },
  {
    value: "119 MOTT STREET",
    data: 1002050019
  },
  {
    value: "119 MULBERRY STREET",
    data: 1002060020
  },
  {
    value: "119 ORCHARD STREET",
    data: 1004150077
  },
  {
    value: "119 PAYSON AVENUE",
    data: 1022480012
  },
  {
    value: "119 PAYSON AVENUE",
    data: 1022480012
  },
  {
    value: "119 SOUTH STREET",
    data: 1000970001
  },
  {
    value: "119 SOUTH STREET",
    data: 1000970001
  },
  {
    value: "119 SPRING STREET",
    data: 1004990042
  },
  {
    value: "119 ST MARKS PLACE",
    data: 1004360037
  },
  {
    value: "119 ST MARKS PLACE",
    data: 1004360037
  },
  {
    value: "119 SULLIVAN STREET",
    data: 1005030012
  },
  {
    value: "119 SULLIVAN STREET",
    data: 1005030012
  },
  {
    value: "119 UNIVERSITY PLACE",
    data: 1005650005
  },
  {
    value: "119 VARICK STREET",
    data: 1005780067
  },
  {
    value: "119 VERMILYEA AVENUE",
    data: 1022260011
  },
  {
    value: "119 VERMILYEA AVENUE",
    data: 1022260011
  },
  {
    value: "119 WAVERLY PLACE",
    data: 1005530039
  },
  {
    value: "119 WEST 10 STREET",
    data: 1006060093
  },
  {
    value: "119 WEST 104 STREET",
    data: 1018590023
  },
  {
    value: "119 WEST 106 STREET",
    data: 1018610022
  },
  {
    value: "119 WEST 11 STREET",
    data: 1006070055
  },
  {
    value: "119 WEST 111 STREET",
    data: 1018210019
  },
  {
    value: "119 WEST 117 STREET",
    data: 1019020121
  },
  {
    value: "119 WEST 118 STREET",
    data: 1019030021
  },
  {
    value: "119 WEST 119 STREET",
    data: 1019040022
  },
  {
    value: "119 WEST 120 STREET",
    data: 1019050120
  },
  {
    value: "119 WEST 122 STREET",
    data: 1019070022
  },
  {
    value: "119 WEST 124 STREET",
    data: 1019090022
  },
  {
    value: "119 WEST 126 STREET",
    data: 1019110122
  },
  {
    value: "119 WEST 129 STREET",
    data: 1019140023
  },
  {
    value: "119 WEST 129 STREET",
    data: 1019140023
  },
  {
    value: "119 WEST 130 STREET",
    data: 1019150121
  },
  {
    value: "119 WEST 131 STREET",
    data: 1019160122
  },
  {
    value: "119 WEST 132 STREET",
    data: 1019170023
  },
  {
    value: "119 WEST 133 STREET",
    data: 1019180023
  },
  {
    value: "119 WEST 135 STREET",
    data: 1019200020
  },
  {
    value: "119 WEST 135 STREET",
    data: 1019200020
  },
  {
    value: "119 WEST 136 STREET",
    data: 1019210122
  },
  {
    value: "119 WEST 137 STREET",
    data: 1020060020
  },
  {
    value: "119 WEST 138 STREET",
    data: 1020070018
  },
  {
    value: "119 WEST 145 STREET",
    data: 1020140021
  },
  {
    value: "119 WEST 15 STREET",
    data: 1007910029
  },
  {
    value: "119 WEST 15 STREET",
    data: 1007910029
  },
  {
    value: "119 WEST 22 STREET",
    data: 1007987501
  },
  {
    value: "119 WEST 227 STREET",
    data: 1022150337
  },
  {
    value: "119 WEST 23 STREET",
    data: 1007990028
  },
  {
    value: "119 WEST 24 STREET",
    data: 1008000025
  },
  {
    value: "119 WEST 25 STREET",
    data: 1008010024
  },
  {
    value: "119 WEST 31 STREET",
    data: 1008070028
  },
  {
    value: "119 WEST 45 STREET",
    data: 1009980023
  },
  {
    value: "119 WEST 57 STREET",
    data: 1010100021
  },
  {
    value: "119 WEST 69 STREET",
    data: 1011410025
  },
  {
    value: "119 WEST 71 STREET",
    data: 1011430024
  },
  {
    value: "119 WEST 75 STREET",
    data: 1011470121
  },
  {
    value: "119 WEST 77 STREET",
    data: 1011490024
  },
  {
    value: "119 WEST 78 STREET",
    data: 1011500023
  },
  {
    value: "119 WEST 80 STREET",
    data: 1012110027
  },
  {
    value: "119 WEST 81 STREET",
    data: 1012120026
  },
  {
    value: "119 WEST 82 STREET",
    data: 1012130021
  },
  {
    value: "119 WEST 85 STREET",
    data: 1012160121
  },
  {
    value: "119 WEST 87 STREET",
    data: 1012180026
  },
  {
    value: "119 WEST 88 STREET",
    data: 1012190022
  },
  {
    value: "119 WEST 92 STREET",
    data: 1012230124
  },
  {
    value: "119 WEST 95 STREET",
    data: 1012260123
  },
  {
    value: "119 WEST 96 STREET",
    data: 1018510016
  },
  {
    value: "119 WEST 96 STREET",
    data: 1018510016
  },
  {
    value: "1190 2 AVENUE",
    data: 1014370049
  },
  {
    value: "1190 AVENUE OF THE AMER",
    data: 1012620076
  },
  {
    value: "1190 LEXINGTON AVENUE",
    data: 1015100015
  },
  {
    value: "1190 LEXINGTON AVENUE",
    data: 1015100015
  },
  {
    value: "1190 MADISON AVENUE",
    data: 1014990014
  },
  {
    value: "1190 MADISON AVENUE",
    data: 1014990014
  },
  {
    value: "1190 PARK AVENUE",
    data: 1015050033
  },
  {
    value: "1191 2 AVENUE",
    data: 1014170028
  },
  {
    value: "1191 2 AVENUE",
    data: 1014170028
  },
  {
    value: "1192 AVENUE OF THE AMER",
    data: 1012620075
  },
  {
    value: "1192 PARK AVENUE",
    data: 1015050040
  },
  {
    value: "1192 PARK AVENUE",
    data: 1015050040
  },
  {
    value: "1195 AMSTERDAM AVENUE",
    data: 1019620035
  },
  {
    value: "1195 BROADWAY",
    data: 1008300062
  },
  {
    value: "1195 LEXINGTON AVENUE",
    data: 1015100020
  },
  {
    value: "1195 LEXINGTON AVENUE",
    data: 1015100020
  },
  {
    value: "1197 PARK AVENUE",
    data: 1015230001
  },
  {
    value: "1197 PARK AVENUE",
    data: 1015230001
  },
  {
    value: "1199 1 AVENUE",
    data: 1014390030
  },
  {
    value: "1199 1 AVENUE",
    data: 1014390030
  },
  {
    value: "11A WEST 84 STREET",
    data: 1011980024
  },
  {
    value: "11A WEST 84 STREET",
    data: 1011980024
  },
  {
    value: "11A WEST 94 STREET",
    data: 1012080127
  },
  {
    value: "12 1 AVENUE",
    data: 1004290001
  },
  {
    value: "12 1 AVENUE",
    data: 1004290001
  },
  {
    value: "12 1/2 ST LUKES PLACE",
    data: 1005830048
  },
  {
    value: "12 5 AVENUE",
    data: 1005720043
  },
  {
    value: "12 5 AVENUE",
    data: 1005720043
  },
  {
    value: "12 ARDEN STREET",
    data: 1021740182
  },
  {
    value: "12 ARDEN STREET",
    data: 1021740182
  },
  {
    value: "12 AVENUE",
    data: 1006650011
  },
  {
    value: "12 AVENUE",
    data: 1006650020
  },
  {
    value: "12 AVENUE",
    data: 1006650067
  },
  {
    value: "12 AVENUE",
    data: 1006650068
  },
  {
    value: "12 AVENUE",
    data: 1006650073
  },
  {
    value: "12 AVENUE",
    data: 1006650111
  },
  {
    value: "12 AVENUE",
    data: 1006650211
  },
  {
    value: "12 AVENUE",
    data: 1011710100
  },
  {
    value: "12 AVENUE",
    data: 1021010125
  },
  {
    value: "12 AVENUE",
    data: 1021010230
  },
  {
    value: "12 AVENUE",
    data: 1021010281
  },
  {
    value: "12 AVENUE",
    data: 1021010291
  },
  {
    value: "12 AVENUE",
    data: 1021400002
  },
  {
    value: "12 AVENUE",
    data: 1021400400
  },
  {
    value: "12 BANK STREET",
    data: 1006140051
  },
  {
    value: "12 BARCLAY STREET",
    data: 1000880014
  },
  {
    value: "12 BEDFORD STREET",
    data: 1005270006
  },
  {
    value: "12 BEEKMAN PLACE",
    data: 1013610039
  },
  {
    value: "12 BEEKMAN PLACE",
    data: 1013610039
  },
  {
    value: "12 BOWERY",
    data: 1001620056
  },
  {
    value: "12 CHARLES STREET",
    data: 1006110051
  },
  {
    value: "12 CHARLES STREET",
    data: 1006110051
  },
  {
    value: "12 CONVENT AVENUE",
    data: 1019670075
  },
  {
    value: "12 DONGAN PLACE",
    data: 1021750015
  },
  {
    value: "12 DONGAN PLACE",
    data: 1021750015
  },
  {
    value: "12 EAST 10 STREET",
    data: 1005670012
  },
  {
    value: "12 EAST 11 STREET",
    data: 1005680009
  },
  {
    value: "12 EAST 116 STREET",
    data: 1016210065
  },
  {
    value: "12 EAST 116 STREET",
    data: 1016210065
  },
  {
    value: "12 EAST 118 STREET",
    data: 1016230127
  },
  {
    value: "12 EAST 12 STREET",
    data: 1005697501
  },
  {
    value: "12 EAST 126 STREET",
    data: 1017500067
  },
  {
    value: "12 EAST 127 STREET",
    data: 1017510067
  },
  {
    value: "12 EAST 127 STREET",
    data: 1017510067
  },
  {
    value: "12 EAST 128 STREET",
    data: 1017520165
  },
  {
    value: "12 EAST 129 STREET",
    data: 1017530165
  },
  {
    value: "12 EAST 13 STREET",
    data: 1005707502
  },
  {
    value: "12 EAST 130 STREET",
    data: 1017540065
  },
  {
    value: "12 EAST 132 STREET",
    data: 1017560062
  },
  {
    value: "12 EAST 18 STREET",
    data: 1008460067
  },
  {
    value: "12 EAST 2 STREET",
    data: 1004580043
  },
  {
    value: "12 EAST 22 STREET",
    data: 1008500064
  },
  {
    value: "12 EAST 22 STREET",
    data: 1008500064
  },
  {
    value: "12 EAST 31 STREET",
    data: 1008600074
  },
  {
    value: "12 EAST 32 STREET",
    data: 1008610069
  },
  {
    value: "12 EAST 33 STREET",
    data: 1008620066
  },
  {
    value: "12 EAST 37 STREET",
    data: 1008660067
  },
  {
    value: "12 EAST 37 STREET",
    data: 1008660067
  },
  {
    value: "12 EAST 44 STREET",
    data: 1012780063
  },
  {
    value: "12 EAST 46 STREET",
    data: 1012810062
  },
  {
    value: "12 EAST 52 STREET",
    data: 1012870062
  },
  {
    value: "12 EAST 53 STREET",
    data: 1012880063
  },
  {
    value: "12 EAST 62 STREET",
    data: 1013760063
  },
  {
    value: "12 EAST 63 STREET",
    data: 1013770063
  },
  {
    value: "12 EAST 64 STREET",
    data: 1013780065
  },
  {
    value: "12 EAST 65 STREET",
    data: 1013790163
  },
  {
    value: "12 EAST 67 STREET",
    data: 1013810063
  },
  {
    value: "12 EAST 68 STREET",
    data: 1013820063
  },
  {
    value: "12 EAST 69 STREET",
    data: 1013830063
  },
  {
    value: "12 EAST 73 STREET",
    data: 1013870065
  },
  {
    value: "12 EAST 74 STREET",
    data: 1013880163
  },
  {
    value: "12 EAST 75 STREET",
    data: 1013890062
  },
  {
    value: "12 EAST 76 STREET",
    data: 1013900163
  },
  {
    value: "12 EAST 77 STREET",
    data: 1013910065
  },
  {
    value: "12 EAST 78 STREET",
    data: 1013920064
  },
  {
    value: "12 EAST 79 STREET",
    data: 1013930062
  },
  {
    value: "12 EAST 8 STREET",
    data: 1005500027
  },
  {
    value: "12 EAST 80 STREET",
    data: 1014910064
  },
  {
    value: "12 EAST 81 STREET",
    data: 1014920064
  },
  {
    value: "12 EAST 82 STREET",
    data: 1014930064
  },
  {
    value: "12 EAST 87 STREET",
    data: 1014980061
  },
  {
    value: "12 EAST 87 STREET",
    data: 1014980061
  },
  {
    value: "12 EAST 88 STREET",
    data: 1014990061
  },
  {
    value: "12 EAST 88 STREET",
    data: 1014990061
  },
  {
    value: "12 EAST 92 STREET",
    data: 1015030065
  },
  {
    value: "12 EAST 93 STREET",
    data: 1015040063
  },
  {
    value: "12 EAST 95 STREET",
    data: 1015060063
  },
  {
    value: "12 EAST 96 STREET",
    data: 1015070063
  },
  {
    value: "12 EAST 97 STREET",
    data: 1016020060
  },
  {
    value: "12 EAST 97 STREET",
    data: 1016020060
  },
  {
    value: "12 ELDRIDGE STREET",
    data: 1002930003
  },
  {
    value: "12 ELLWOOD STREET",
    data: 1021710036
  },
  {
    value: "12 FT CHARLES PLACE",
    data: 1022150487
  },
  {
    value: "12 GAY STREET",
    data: 1005930049
  },
  {
    value: "12 GRAMERCY PARK",
    data: 1008750074
  },
  {
    value: "12 GREENE STREET",
    data: 1002300014
  },
  {
    value: "12 GROVE STREET",
    data: 1005850020
  },
  {
    value: "12 HAMILTON TERRACE",
    data: 1020500181
  },
  {
    value: "12 HARRISON STREET",
    data: 1001817505
  },
  {
    value: "12 HENDERSON PLACE",
    data: 1015830117
  },
  {
    value: "12 HOWARD STREET",
    data: 1002330026
  },
  {
    value: "12 JOHN STREET",
    data: 1000650020
  },
  {
    value: "12 JONES STREET",
    data: 1005900022
  },
  {
    value: "12 JONES STREET",
    data: 1005900022
  },
  {
    value: "12 JUMEL TERRACE",
    data: 1021090102
  },
  {
    value: "12 LEROY STREET",
    data: 1005860017
  },
  {
    value: "12 LEXINGTON AVENUE",
    data: 1008780016
  },
  {
    value: "12 LITTLE WEST 12 ST",
    data: 1006440051
  },
  {
    value: "12 MAC DOUGAL ALLEY",
    data: 1005510042
  },
  {
    value: "12 MINETTA STREET",
    data: 1005420019
  },
  {
    value: "12 MOTT STREET",
    data: 1001620007
  },
  {
    value: "12 MT MORRIS PARK WEST",
    data: 1017200052
  },
  {
    value: "12 OLD BROADWAY",
    data: 1019820065
  },
  {
    value: "12 OLD BROADWAY",
    data: 1019820065
  },
  {
    value: "12 OLIVER STREET",
    data: 1002790069
  },
  {
    value: "12 PELL STREET",
    data: 1001630002
  },
  {
    value: "12 PELL STREET",
    data: 1001630002
  },
  {
    value: "12 PINEHURST AVENUE",
    data: 1021770039
  },
  {
    value: "12 PINEHURST AVENUE",
    data: 1021770039
  },
  {
    value: "12 RIVINGTON STREET",
    data: 1004260043
  },
  {
    value: "12 SPRING STREET",
    data: 1004780018
  },
  {
    value: "12 SPRING STREET",
    data: 1004780018
  },
  {
    value: "12 ST LUKES PLACE",
    data: 1005830049
  },
  {
    value: "12 ST MARKS PLACE",
    data: 1004630015
  },
  {
    value: "12 SYLVAN TERRACE",
    data: 1021090063
  },
  {
    value: "12 VAN CORLEAR PLACE",
    data: 1022150358
  },
  {
    value: "12 VESTRY STREET",
    data: 1002210035
  },
  {
    value: "12 WARREN STREET",
    data: 1001350005
  },
  {
    value: "12 WARREN STREET",
    data: 1001350005
  },
  {
    value: "12 WASHINGTON TERRACE",
    data: 1021560144
  },
  {
    value: "12 WAVERLY PLACE",
    data: 1005470015
  },
  {
    value: "12 WEST 10 STREET",
    data: 1005737503
  },
  {
    value: "12 WEST 101 STREET",
    data: 1018360041
  },
  {
    value: "12 WEST 101 STREET",
    data: 1018360041
  },
  {
    value: "12 WEST 103 STREET",
    data: 1018380041
  },
  {
    value: "12 WEST 103 STREET",
    data: 1018380041
  },
  {
    value: "12 WEST 104 STREET",
    data: 1018390041
  },
  {
    value: "12 WEST 11 STREET",
    data: 1005740038
  },
  {
    value: "12 WEST 119 STREET",
    data: 1017170043
  },
  {
    value: "12 WEST 12 STREET",
    data: 1005750048
  },
  {
    value: "12 WEST 120 STREET",
    data: 1017180042
  },
  {
    value: "12 WEST 121 STREET",
    data: 1017200025
  },
  {
    value: "12 WEST 122 STREET",
    data: 1017200063
  },
  {
    value: "12 WEST 123 STREET",
    data: 1017210124
  },
  {
    value: "12 WEST 127 STREET",
    data: 1017240043
  },
  {
    value: "12 WEST 128 STREET",
    data: 1017250142
  },
  {
    value: "12 WEST 130 STREET",
    data: 1017270043
  },
  {
    value: "12 WEST 131 STREET",
    data: 1017280045
  },
  {
    value: "12 WEST 132 STREET",
    data: 1017290044
  },
  {
    value: "12 WEST 142 STREET",
    data: 1017390022
  },
  {
    value: "12 WEST 17 STREET",
    data: 1008180058
  },
  {
    value: "12 WEST 17 STREET",
    data: 1008180058
  },
  {
    value: "12 WEST 18 STREET",
    data: 1008197501
  },
  {
    value: "12 WEST 18 STREET",
    data: 1008197501
  },
  {
    value: "12 WEST 19 STREET",
    data: 1008200053
  },
  {
    value: "12 WEST 21 STREET",
    data: 1008220049
  },
  {
    value: "12 WEST 23 STREET",
    data: 1008240046
  },
  {
    value: "12 WEST 27 STREET",
    data: 1008280056
  },
  {
    value: "12 WEST 29 STREET",
    data: 1008300052
  },
  {
    value: "12 WEST 31 STREET",
    data: 1008320053
  },
  {
    value: "12 WEST 32 STREET",
    data: 1008330052
  },
  {
    value: "12 WEST 37 STREET",
    data: 1008380058
  },
  {
    value: "12 WEST 40 STREET",
    data: 1008410057
  },
  {
    value: "12 WEST 44 STREET",
    data: 1012590047
  },
  {
    value: "12 WEST 45 STREET",
    data: 1012600046
  },
  {
    value: "12 WEST 55 STREET",
    data: 1012700045
  },
  {
    value: "12 WEST 55 STREET",
    data: 1012700045
  },
  {
    value: "12 WEST 56 STREET",
    data: 1012710047
  },
  {
    value: "12 WEST 68 STREET",
    data: 1011200038
  },
  {
    value: "12 WEST 68 STREET",
    data: 1011200038
  },
  {
    value: "12 WEST 69 STREET",
    data: 1011210037
  },
  {
    value: "12 WEST 71 STREET",
    data: 1011230140
  },
  {
    value: "12 WEST 72 STREET",
    data: 1011240042
  },
  {
    value: "12 WEST 72 STREET",
    data: 1011240042
  },
  {
    value: "12 WEST 75 STREET",
    data: 1011270042
  },
  {
    value: "12 WEST 76 STREET",
    data: 1011280041
  },
  {
    value: "12 WEST 76 STREET",
    data: 1011280041
  },
  {
    value: "12 WEST 83 STREET",
    data: 1011960139
  },
  {
    value: "12 WEST 85 STREET",
    data: 1011980037
  },
  {
    value: "12 WEST 87 STREET",
    data: 1012000040
  },
  {
    value: "12 WEST 87 STREET",
    data: 1012000040
  },
  {
    value: "12 WEST 9 STREET",
    data: 1005727501
  },
  {
    value: "12 WEST 9 STREET",
    data: 1005727501
  },
  {
    value: "12 WEST 90 STREET",
    data: 1012030041
  },
  {
    value: "12 WEST 95 STREET",
    data: 1012080139
  },
  {
    value: "12 WEST 96 STREET",
    data: 1012090037
  },
  {
    value: "12 WEST 96 STREET",
    data: 1012090037
  },
  {
    value: "12 WHITE STREET",
    data: 1001917501
  },
  {
    value: "12 WOOSTER STREET",
    data: 1002290012
  },
  {
    value: "120 1 AVENUE",
    data: 1004350002
  },
  {
    value: "120 11 AVENUE",
    data: 1006927501
  },
  {
    value: "120 11 AVENUE",
    data: 1006927501
  },
  {
    value: "120 2 AVENUE",
    data: 1004490002
  },
  {
    value: "120 2 AVENUE",
    data: 1004490002
  },
  {
    value: "120 3 AVENUE",
    data: 1005590032
  },
  {
    value: "120 4 AVENUE",
    data: 1005640054
  },
  {
    value: "120 4 AVENUE",
    data: 1005640054
  },
  {
    value: "120 AMSTERDAM AVENUE",
    data: 1011570025
  },
  {
    value: "120 AUDUBON AVENUE",
    data: 1021280022
  },
  {
    value: "120 AUDUBON AVENUE",
    data: 1021280022
  },
  {
    value: "120 AVENUE C",
    data: 1003770006
  },
  {
    value: "120 BANK STREET",
    data: 1006340015
  },
  {
    value: "120 BENNETT AVENUE",
    data: 1021800192
  },
  {
    value: "120 BENNETT AVENUE",
    data: 1021800192
  },
  {
    value: "120 BROADWAY",
    data: 1000477501
  },
  {
    value: "120 CABRINI BOULEVARD",
    data: 1021790010
  },
  {
    value: "120 CABRINI BOULEVARD",
    data: 1021790010
  },
  {
    value: "120 CENTRAL PARK SOUTH",
    data: 1010110042
  },
  {
    value: "120 CENTRAL PARK SOUTH",
    data: 1010110042
  },
  {
    value: "120 CHARLES STREET",
    data: 1006310038
  },
  {
    value: "120 CHRISTOPHER STREET",
    data: 1005880045
  },
  {
    value: "120 CHRISTOPHER STREET",
    data: 1005880045
  },
  {
    value: "120 CHURCH STREET",
    data: 1001260027
  },
  {
    value: "120 CLAREMONT AVENUE",
    data: 1019930002
  },
  {
    value: "120 DYCKMAN STREET",
    data: 1021740059
  },
  {
    value: "120 EAST 10 STREET",
    data: 1004650017
  },
  {
    value: "120 EAST 101 STREET",
    data: 1016280165
  },
  {
    value: "120 EAST 102 STREET",
    data: 1016290062
  },
  {
    value: "120 EAST 102 STREET",
    data: 1016290062
  },
  {
    value: "120 EAST 106 STREET",
    data: 1016330061
  },
  {
    value: "120 EAST 107 STREET",
    data: 1016340062
  },
  {
    value: "120 EAST 107 STREET",
    data: 1016340062
  },
  {
    value: "120 EAST 116 STREET",
    data: 1016430061
  },
  {
    value: "120 EAST 117 STREET",
    data: 1016440164
  },
  {
    value: "120 EAST 119 STREET",
    data: 1017670062
  },
  {
    value: "120 EAST 12 STREET",
    data: 1005560048
  },
  {
    value: "120 EAST 124 STREET",
    data: 1017720062
  },
  {
    value: "120 EAST 125 STREET",
    data: 1017730062
  },
  {
    value: "120 EAST 13 STREET",
    data: 1005580017
  },
  {
    value: "120 EAST 131 STREET",
    data: 1017790060
  },
  {
    value: "120 EAST 138 STREET",
    data: 1017610065
  },
  {
    value: "120 EAST 17 STREET",
    data: 1008720066
  },
  {
    value: "120 EAST 19 STREET",
    data: 1008740066
  },
  {
    value: "120 EAST 23 STREET",
    data: 1008780065
  },
  {
    value: "120 EAST 29 STREET",
    data: 1008847501
  },
  {
    value: "120 EAST 30 STREET",
    data: 1008850078
  },
  {
    value: "120 EAST 31 STREET",
    data: 1008860075
  },
  {
    value: "120 EAST 32 STREET",
    data: 1008870087
  },
  {
    value: "120 EAST 34 STREET",
    data: 1008890068
  },
  {
    value: "120 EAST 34 STREET",
    data: 1008890068
  },
  {
    value: "120 EAST 36 STREET",
    data: 1008910077
  },
  {
    value: "120 EAST 36 STREET",
    data: 1008910077
  },
  {
    value: "120 EAST 37 STREET",
    data: 1008920073
  },
  {
    value: "120 EAST 38 STREET",
    data: 1008930079
  },
  {
    value: "120 EAST 39 STREET",
    data: 1008940075
  },
  {
    value: "120 EAST 4 STREET",
    data: 1004450026
  },
  {
    value: "120 EAST 4 STREET",
    data: 1004450026
  },
  {
    value: "120 EAST 55 STREET",
    data: 1013090064
  },
  {
    value: "120 EAST 56 STREET",
    data: 1013100065
  },
  {
    value: "120 EAST 57 STREET",
    data: 1013110062
  },
  {
    value: "120 EAST 59 STREET",
    data: 1013130063
  },
  {
    value: "120 EAST 61 STREET",
    data: 1013950064
  },
  {
    value: "120 EAST 62 STREET",
    data: 1013960064
  },
  {
    value: "120 EAST 62 STREET",
    data: 1013960064
  },
  {
    value: "120 EAST 64 STREET",
    data: 1013980065
  },
  {
    value: "120 EAST 64 STREET",
    data: 1013980065
  },
  {
    value: "120 EAST 65 STREET",
    data: 1013990064
  },
  {
    value: "120 EAST 7 STREET",
    data: 1004340024
  },
  {
    value: "120 EAST 7 STREET",
    data: 1004340024
  },
  {
    value: "120 EAST 70 STREET",
    data: 1014040063
  },
  {
    value: "120 EAST 71 STREET",
    data: 1014050064
  },
  {
    value: "120 EAST 73 STREET",
    data: 1014070065
  },
  {
    value: "120 EAST 73 STREET",
    data: 1014070065
  },
  {
    value: "120 EAST 75 STREET",
    data: 1014090061
  },
  {
    value: "120 EAST 75 STREET",
    data: 1014090061
  },
  {
    value: "120 EAST 78 STREET",
    data: 1014120063
  },
  {
    value: "120 EAST 79 STREET",
    data: 1014130064
  },
  {
    value: "120 EAST 79 STREET",
    data: 1014130064
  },
  {
    value: "120 EAST 80 STREET",
    data: 1015080064
  },
  {
    value: "120 EAST 82 STREET",
    data: 1015100063
  },
  {
    value: "120 EAST 82 STREET",
    data: 1015100063
  },
  {
    value: "120 EAST 83 STREET",
    data: 1015110062
  },
  {
    value: "120 EAST 83 STREET",
    data: 1015110062
  },
  {
    value: "120 EAST 85 STREET",
    data: 1015130062
  },
  {
    value: "120 EAST 85 STREET",
    data: 1015130062
  },
  {
    value: "120 EAST 86 STREET",
    data: 1015147501
  },
  {
    value: "120 EAST 86 STREET",
    data: 1015147501
  },
  {
    value: "120 EAST 87 STREET",
    data: 1015157502
  },
  {
    value: "120 EAST 87 STREET",
    data: 1015157502
  },
  {
    value: "120 EAST 88 STREET",
    data: 1015160060
  },
  {
    value: "120 EAST 88 STREET",
    data: 1015160060
  },
  {
    value: "120 EAST 90 STREET",
    data: 1015187501
  },
  {
    value: "120 EAST 92 STREET",
    data: 1015200064
  },
  {
    value: "120 EAST 95 STREET",
    data: 1015230066
  },
  {
    value: "120 EAST BROADWAY",
    data: 1002830050
  },
  {
    value: "120 EAST END AVENUE",
    data: 1015820023
  },
  {
    value: "120 EAST END AVENUE",
    data: 1015820023
  },
  {
    value: "120 ELIZABETH STREET",
    data: 1004700039
  },
  {
    value: "120 ELIZABETH STREET",
    data: 1004700039
  },
  {
    value: "120 FORSYTH STREET",
    data: 1004190046
  },
  {
    value: "120 FORSYTH STREET",
    data: 1004190046
  },
  {
    value: "120 FULTON STREET",
    data: 1000780045
  },
  {
    value: "120 GREENWICH STREET",
    data: 1000537501
  },
  {
    value: "120 GREENWICH STREET",
    data: 1000537501
  },
  {
    value: "120 HAVEN AVENUE",
    data: 1021390289
  },
  {
    value: "120 HAVEN AVENUE",
    data: 1021390289
  },
  {
    value: "120 LEROY STREET",
    data: 1006010047
  },
  {
    value: "120 LEXINGTON AVENUE",
    data: 1008840017
  },
  {
    value: "120 LIBERTY STREET",
    data: 1000520021
  },
  {
    value: "120 LIBERTY STREET",
    data: 1000520021
  },
  {
    value: "120 MAC DOUGAL STREET",
    data: 1005400009
  },
  {
    value: "120 MAC DOUGAL STREET",
    data: 1005400009
  },
  {
    value: "120 MADISON AVENUE",
    data: 1008600016
  },
  {
    value: "120 MADISON STREET",
    data: 1002760029
  },
  {
    value: "120 MANHATTAN AVENUE",
    data: 1018410020
  },
  {
    value: "120 MULBERRY STREET",
    data: 1002050011
  },
  {
    value: "120 NASSAU STREET",
    data: 1000920027
  },
  {
    value: "120 ORCHARD STREET",
    data: 1004100001
  },
  {
    value: "120 ORCHARD STREET",
    data: 1004100001
  },
  {
    value: "120 PRINCE STREET",
    data: 1005000016
  },
  {
    value: "120 RIDGE STREET",
    data: 1003440044
  },
  {
    value: "120 RIDGE STREET",
    data: 1003440044
  },
  {
    value: "120 RIVERSIDE BOULEVARD",
    data: 1011717504
  },
  {
    value: "120 RIVERSIDE BOULEVARD",
    data: 1011717504
  },
  {
    value: "120 RIVERSIDE DRIVE",
    data: 1012460007
  },
  {
    value: "120 RIVERSIDE DRIVE",
    data: 1012460007
  },
  {
    value: "120 RIVINGTON STREET",
    data: 1003540037
  },
  {
    value: "120 SHERMAN AVENUE",
    data: 1022240036
  },
  {
    value: "120 SHERMAN AVENUE",
    data: 1022240036
  },
  {
    value: "120 SPRING STREET",
    data: 1004850016
  },
  {
    value: "120 ST MARKS PLACE",
    data: 1004350024
  },
  {
    value: "120 SUFFOLK STREET",
    data: 1003480012
  },
  {
    value: "120 SUFFOLK STREET",
    data: 1003480012
  },
  {
    value: "120 SULLIVAN STREET",
    data: 1005040026
  },
  {
    value: "120 SULLIVAN STREET",
    data: 1005040026
  },
  {
    value: "120 UNIVERSITY PLACE",
    data: 1005710025
  },
  {
    value: "120 UNIVERSITY PLACE",
    data: 1005710025
  },
  {
    value: "120 WALL STREET",
    data: 1000370001
  },
  {
    value: "120 WATER STREET",
    data: 1000390041
  },
  {
    value: "120 WAVERLY PLACE",
    data: 1005520048
  },
  {
    value: "120 WEST 100 STREET",
    data: 1018520031
  },
  {
    value: "120 WEST 100 STREET",
    data: 1018520031
  },
  {
    value: "120 WEST 105 STREET",
    data: 1018590039
  },
  {
    value: "120 WEST 105 STREET",
    data: 1018590039
  },
  {
    value: "120 WEST 109 STREET",
    data: 1018630046
  },
  {
    value: "120 WEST 109 STREET",
    data: 1018630046
  },
  {
    value: "120 WEST 111 STREET",
    data: 1018200045
  },
  {
    value: "120 WEST 112 STREET",
    data: 1018210049
  },
  {
    value: "120 WEST 112 STREET",
    data: 1018210049
  },
  {
    value: "120 WEST 114 STREET",
    data: 1018230046
  },
  {
    value: "120 WEST 116 STREET",
    data: 1018250045
  },
  {
    value: "120 WEST 116 STREET",
    data: 1018250045
  },
  {
    value: "120 WEST 117 STREET",
    data: 1019010041
  },
  {
    value: "120 WEST 118 STREET",
    data: 1019020043
  },
  {
    value: "120 WEST 119 STREET",
    data: 1019030044
  },
  {
    value: "120 WEST 12 STREET",
    data: 1006070032
  },
  {
    value: "120 WEST 120 STREET",
    data: 1019040044
  },
  {
    value: "120 WEST 121 STREET",
    data: 1019050043
  },
  {
    value: "120 WEST 124 STREET",
    data: 1019080042
  },
  {
    value: "120 WEST 125 STREET",
    data: 1019090044
  },
  {
    value: "120 WEST 127 STREET",
    data: 1019110042
  },
  {
    value: "120 WEST 131 STREET",
    data: 1019150044
  },
  {
    value: "120 WEST 132 STREET",
    data: 1019160043
  },
  {
    value: "120 WEST 133 STREET",
    data: 1019170043
  },
  {
    value: "120 WEST 136 STREET",
    data: 1019200043
  },
  {
    value: "120 WEST 138 STREET",
    data: 1020060045
  },
  {
    value: "120 WEST 138 STREET",
    data: 1020060045
  },
  {
    value: "120 WEST 139 STREET",
    data: 1020070047
  },
  {
    value: "120 WEST 139 STREET",
    data: 1020070047
  },
  {
    value: "120 WEST 14 STREET",
    data: 1006090023
  },
  {
    value: "120 WEST 140 STREET",
    data: 1020080013
  },
  {
    value: "120 WEST 140 STREET",
    data: 1020080013
  },
  {
    value: "120 WEST 16 STREET",
    data: 1007910054
  },
  {
    value: "120 WEST 17 STREET",
    data: 1007920049
  },
  {
    value: "120 WEST 18 STREET",
    data: 1007937502
  },
  {
    value: "120 WEST 18 STREET",
    data: 1007937502
  },
  {
    value: "120 WEST 20 STREET",
    data: 1007950054
  },
  {
    value: "120 WEST 21 STREET",
    data: 1007960048
  },
  {
    value: "120 WEST 21 STREET",
    data: 1007960048
  },
  {
    value: "120 WEST 227 STREET",
    data: 1022150383
  },
  {
    value: "120 WEST 228 STREET",
    data: 1022150591
  },
  {
    value: "120 WEST 228 STREET",
    data: 1022150591
  },
  {
    value: "120 WEST 24 STREET",
    data: 1007990053
  },
  {
    value: "120 WEST 25 STREET",
    data: 1008000053
  },
  {
    value: "120 WEST 28 STREET",
    data: 1008030056
  },
  {
    value: "120 WEST 3 STREET",
    data: 1005430019
  },
  {
    value: "120 WEST 3 STREET",
    data: 1005430019
  },
  {
    value: "120 WEST 30 STREET",
    data: 1008050071
  },
  {
    value: "120 WEST 31 STREET",
    data: 1008060054
  },
  {
    value: "120 WEST 41 STREET",
    data: 1009930043
  },
  {
    value: "120 WEST 44 STREET",
    data: 1009960043
  },
  {
    value: "120 WEST 45 STREET",
    data: 1009970041
  },
  {
    value: "120 WEST 55 STREET",
    data: 1010070029
  },
  {
    value: "120 WEST 57 STREET",
    data: 1010090044
  },
  {
    value: "120 WEST 58 STREET",
    data: 1010107502
  },
  {
    value: "120 WEST 58 STREET",
    data: 1010107502
  },
  {
    value: "120 WEST 60 STREET",
    data: 1011310031
  },
  {
    value: "120 WEST 69 STREET",
    data: 1011400040
  },
  {
    value: "120 WEST 70 STREET",
    data: 1011410039
  },
  {
    value: "120 WEST 70 STREET",
    data: 1011410039
  },
  {
    value: "120 WEST 71 STREET",
    data: 1011420041
  },
  {
    value: "120 WEST 72 STREET",
    data: 1011437505
  },
  {
    value: "120 WEST 72 STREET",
    data: 1011437505
  },
  {
    value: "120 WEST 73 STREET",
    data: 1011440041
  },
  {
    value: "120 WEST 74 STREET",
    data: 1011450041
  },
  {
    value: "120 WEST 75 STREET",
    data: 1011460043
  },
  {
    value: "120 WEST 76 STREET",
    data: 1011470042
  },
  {
    value: "120 WEST 78 STREET",
    data: 1011490043
  },
  {
    value: "120 WEST 78 STREET",
    data: 1011490043
  },
  {
    value: "120 WEST 79 STREET",
    data: 1011500041
  },
  {
    value: "120 WEST 79 STREET",
    data: 1011500041
  },
  {
    value: "120 WEST 80 STREET",
    data: 1012100044
  },
  {
    value: "120 WEST 81 STREET",
    data: 1012110142
  },
  {
    value: "120 WEST 83 STREET",
    data: 1012130041
  },
  {
    value: "120 WEST 86 STREET",
    data: 1012160140
  },
  {
    value: "120 WEST 86 STREET",
    data: 1012160140
  },
  {
    value: "120 WEST 87 STREET",
    data: 1012170042
  },
  {
    value: "120 WEST 88 STREET",
    data: 1012180139
  },
  {
    value: "120 WEST 94 STREET",
    data: 1012240042
  },
  {
    value: "120 WEST 94 STREET",
    data: 1012240042
  },
  {
    value: "120 WEST WASHINGTON PLCE",
    data: 1005920009
  },
  {
    value: "120 WHITE STREET",
    data: 1001980001
  },
  {
    value: "120 WOOSTER STREET",
    data: 1005000011
  },
  {
    value: "1200 5 AVENUE",
    data: 1016077501
  },
  {
    value: "1200 5 AVENUE",
    data: 1016077501
  },
  {
    value: "1200 AVENUE OF THE AMER",
    data: 1012630001
  },
  {
    value: "1200 BROADWAY",
    data: 1008310020
  },
  {
    value: "1200 BROADWAY",
    data: 1008310020
  },
  {
    value: "1200 LEXINGTON AVENUE",
    data: 1015100017
  },
  {
    value: "1200 LEXINGTON AVENUE",
    data: 1015100017
  },
  {
    value: "1200 ST NICHOLAS AVENUE",
    data: 1021270001
  },
  {
    value: "1200 ST NICHOLAS AVENUE",
    data: 1021270001
  },
  {
    value: "1201 2 AVENUE",
    data: 1014180021
  },
  {
    value: "1201 2 AVENUE",
    data: 1014180021
  },
  {
    value: "1201 AMSTERDAM AVENUE",
    data: 1019620038
  },
  {
    value: "1201 AMSTERDAM AVENUE",
    data: 1019620038
  },
  {
    value: "1201 LEXINGTON AVENUE",
    data: 1015100053
  },
  {
    value: "1201 LEXINGTON AVENUE",
    data: 1015100053
  },
  {
    value: "1202 2 AVENUE",
    data: 1014380001
  },
  {
    value: "1202 2 AVENUE",
    data: 1014380001
  },
  {
    value: "1202 LEXINGTON AVENUE",
    data: 1015100156
  },
  {
    value: "1204 BROADWAY",
    data: 1008310019
  },
  {
    value: "1205 1 AVENUE",
    data: 1014400023
  },
  {
    value: "1205 1 AVENUE",
    data: 1014400023
  },
  {
    value: "1205 LEXINGTON AVENUE",
    data: 1015100052
  },
  {
    value: "1205 LEXINGTON AVENUE",
    data: 1015100052
  },
  {
    value: "1206 1 AVENUE",
    data: 1014600001
  },
  {
    value: "1206 1 AVENUE",
    data: 1014600001
  },
  {
    value: "1208 ST NICHOLAS AVENUE",
    data: 1021270005
  },
  {
    value: "1209 LEXINGTON AVENUE",
    data: 1015100051
  },
  {
    value: "1209 PARK AVENUE",
    data: 1015230072
  },
  {
    value: "121 1 AVENUE",
    data: 1004490035
  },
  {
    value: "121 2 AVENUE",
    data: 1004630034
  },
  {
    value: "121 4 AVENUE",
    data: 1005580005
  },
  {
    value: "121 ALLEN STREET",
    data: 1004150036
  },
  {
    value: "121 AVENUE A",
    data: 1004350032
  },
  {
    value: "121 AVENUE B",
    data: 1003900005
  },
  {
    value: "121 AVENUE OF THE AMER",
    data: 1004777501
  },
  {
    value: "121 BANK STREET",
    data: 1006350041
  },
  {
    value: "121 BAXTER STREET",
    data: 1002060005
  },
  {
    value: "121 BAXTER STREET",
    data: 1002060005
  },
  {
    value: "121 BENNETT AVENUE",
    data: 1021800150
  },
  {
    value: "121 BENNETT AVENUE",
    data: 1021800150
  },
  {
    value: "121 BOWERY",
    data: 1003040014
  },
  {
    value: "121 CENTRAL PARK WEST",
    data: 1011250025
  },
  {
    value: "121 CENTRAL PARK WEST",
    data: 1011250025
  },
  {
    value: "121 CHAMBERS STREET",
    data: 1001450010
  },
  {
    value: "121 CHARLES STREET",
    data: 1006320036
  },
  {
    value: "121 CHRISTOPHER STREET",
    data: 1006190046
  },
  {
    value: "121 CHRYSTIE STREET",
    data: 1004230020
  },
  {
    value: "121 CHRYSTIE STREET",
    data: 1004230020
  },
  {
    value: "121 DIVISION STREET",
    data: 1002830088
  },
  {
    value: "121 EAST 10 STREET",
    data: 1004660047
  },
  {
    value: "121 EAST 10 STREET",
    data: 1004660047
  },
  {
    value: "121 EAST 101 STREET",
    data: 1016290008
  },
  {
    value: "121 EAST 101 STREET",
    data: 1016290008
  },
  {
    value: "121 EAST 105 STREET",
    data: 1016330010
  },
  {
    value: "121 EAST 106 STREET",
    data: 1016340111
  },
  {
    value: "121 EAST 110 STREET",
    data: 1016380008
  },
  {
    value: "121 EAST 110 STREET",
    data: 1016380008
  },
  {
    value: "121 EAST 115 STREET",
    data: 1016430010
  },
  {
    value: "121 EAST 115 STREET",
    data: 1016430010
  },
  {
    value: "121 EAST 119 STREET",
    data: 1017680009
  },
  {
    value: "121 EAST 14 STREET",
    data: 1008700024
  },
  {
    value: "121 EAST 18 STREET",
    data: 1008740014
  },
  {
    value: "121 EAST 23 STREET",
    data: 1008797501
  },
  {
    value: "121 EAST 24 STREET",
    data: 1008800014
  },
  {
    value: "121 EAST 26 STREET",
    data: 1008820015
  },
  {
    value: "121 EAST 27 STREET",
    data: 1008830014
  },
  {
    value: "121 EAST 30 STREET",
    data: 1008860015
  },
  {
    value: "121 EAST 31 STREET",
    data: 1008870014
  },
  {
    value: "121 EAST 31 STREET",
    data: 1008870014
  },
  {
    value: "121 EAST 35 STREET",
    data: 1008910014
  },
  {
    value: "121 EAST 36 STREET",
    data: 1008920012
  },
  {
    value: "121 EAST 37 STREET",
    data: 1008930015
  },
  {
    value: "121 EAST 37 STREET",
    data: 1008930015
  },
  {
    value: "121 EAST 38 STREET",
    data: 1008940015
  },
  {
    value: "121 EAST 39 STREET",
    data: 1008950015
  },
  {
    value: "121 EAST 54 STREET",
    data: 1013090107
  },
  {
    value: "121 EAST 55 STREET",
    data: 1013100010
  },
  {
    value: "121 EAST 60 STREET",
    data: 1013950010
  },
  {
    value: "121 EAST 61 STREET",
    data: 1013960009
  },
  {
    value: "121 EAST 62 STREET",
    data: 1013970008
  },
  {
    value: "121 EAST 64 STREET",
    data: 1013990008
  },
  {
    value: "121 EAST 65 STREET",
    data: 1014000010
  },
  {
    value: "121 EAST 69 STREET",
    data: 1014040110
  },
  {
    value: "121 EAST 7 STREET",
    data: 1004350042
  },
  {
    value: "121 EAST 70 STREET",
    data: 1014050010
  },
  {
    value: "121 EAST 71 STREET",
    data: 1014060010
  },
  {
    value: "121 EAST 73 STREET",
    data: 1014080010
  },
  {
    value: "121 EAST 74 STREET",
    data: 1014090009
  },
  {
    value: "121 EAST 74 STREET",
    data: 1014090009
  },
  {
    value: "121 EAST 78 STREET",
    data: 1014130111
  },
  {
    value: "121 EAST 79 STREET",
    data: 1015080009
  },
  {
    value: "121 EAST 81 STREET",
    data: 1015100012
  },
  {
    value: "121 EAST 82 STREET",
    data: 1015110011
  },
  {
    value: "121 EAST 82 STREET",
    data: 1015110011
  },
  {
    value: "121 EAST 83 STREET",
    data: 1015120011
  },
  {
    value: "121 EAST 88 STREET",
    data: 1015170013
  },
  {
    value: "121 EAST 88 STREET",
    data: 1015170013
  },
  {
    value: "121 EAST 89 STREET",
    data: 1015180015
  },
  {
    value: "121 EAST 90 STREET",
    data: 1015190011
  },
  {
    value: "121 EAST 90 STREET",
    data: 1015190011
  },
  {
    value: "121 EAST 91 STREET",
    data: 1015200109
  },
  {
    value: "121 EAST 92 STREET",
    data: 1015210011
  },
  {
    value: "121 EAST 94 STREET",
    data: 1015230008
  },
  {
    value: "121 EAST 95 STREET",
    data: 1015240108
  },
  {
    value: "121 EAST 97 STREET",
    data: 1016250010
  },
  {
    value: "121 EAST 97 STREET",
    data: 1016250010
  },
  {
    value: "121 EAST BROADWAY",
    data: 1002830043
  },
  {
    value: "121 EAST BROADWAY",
    data: 1002830043
  },
  {
    value: "121 EDGECOMBE AVENUE",
    data: 1020487501
  },
  {
    value: "121 ESSEX STREET",
    data: 1004100053
  },
  {
    value: "121 FT GEORGE AVENUE",
    data: 1021490265
  },
  {
    value: "121 FT GEORGE AVENUE",
    data: 1021490265
  },
  {
    value: "121 FULTON STREET",
    data: 1000910009
  },
  {
    value: "121 GREENE STREET",
    data: 1005147501
  },
  {
    value: "121 HENRY STREET",
    data: 1002830007
  },
  {
    value: "121 HENRY STREET",
    data: 1002830007
  },
  {
    value: "121 LENOX AVENUE",
    data: 1019010029
  },
  {
    value: "121 LEXINGTON AVENUE",
    data: 1008840025
  },
  {
    value: "121 LUDLOW STREET",
    data: 1004100020
  },
  {
    value: "121 MANHATTAN AVENUE",
    data: 1018400052
  },
  {
    value: "121 MERCER STREET",
    data: 1004990027
  },
  {
    value: "121 MOTT STREET",
    data: 1002370029
  },
  {
    value: "121 MOTT STREET",
    data: 1002370029
  },
  {
    value: "121 MULBERRY STREET",
    data: 1002060019
  },
  {
    value: "121 NORFOLK STREET",
    data: 1003530027
  },
  {
    value: "121 ORCHARD STREET",
    data: 1004150076
  },
  {
    value: "121 ORCHARD STREET",
    data: 1004150076
  },
  {
    value: "121 POST AVENUE",
    data: 1022190013
  },
  {
    value: "121 RIVINGTON STREET",
    data: 1003530020
  },
  {
    value: "121 RIVINGTON STREET",
    data: 1003530020
  },
  {
    value: "121 SEAMAN AVENUE",
    data: 1022400006
  },
  {
    value: "121 SEAMAN AVENUE",
    data: 1022400006
  },
  {
    value: "121 SHERMAN AVENUE",
    data: 1022200017
  },
  {
    value: "121 SHERMAN AVENUE",
    data: 1022200017
  },
  {
    value: "121 ST MARKS PLACE",
    data: 1004360036
  },
  {
    value: "121 ST MARKS PLACE",
    data: 1004360036
  },
  {
    value: "121 ST NICHOLAS AVENUE",
    data: 1019220024
  },
  {
    value: "121 ST NICHOLAS AVENUE",
    data: 1019220024
  },
  {
    value: "121 STANTON STREET",
    data: 1003540012
  },
  {
    value: "121 SUFFOLK STREET",
    data: 1003540080
  },
  {
    value: "121 VERMILYEA AVENUE",
    data: 1022260013
  },
  {
    value: "121 VERMILYEA AVENUE",
    data: 1022260013
  },
  {
    value: "121 WADSWORTH AVENUE",
    data: 1021620025
  },
  {
    value: "121 WAVERLY PLACE",
    data: 1005530040
  },
  {
    value: "121 WEST 104 STREET",
    data: 1018590022
  },
  {
    value: "121 WEST 104 STREET",
    data: 1018590022
  },
  {
    value: "121 WEST 11 STREET",
    data: 1006070056
  },
  {
    value: "121 WEST 111 STREET",
    data: 1018210018
  },
  {
    value: "121 WEST 115 STREET",
    data: 1018250021
  },
  {
    value: "121 WEST 116 STREET",
    data: 1019010021
  },
  {
    value: "121 WEST 116 STREET",
    data: 1019010021
  },
  {
    value: "121 WEST 117 STREET",
    data: 1019020120
  },
  {
    value: "121 WEST 118 STREET",
    data: 1019030020
  },
  {
    value: "121 WEST 119 STREET",
    data: 1019040021
  },
  {
    value: "121 WEST 120 STREET",
    data: 1019050020
  },
  {
    value: "121 WEST 122 STREET",
    data: 1019070021
  },
  {
    value: "121 WEST 126 STREET",
    data: 1019110022
  },
  {
    value: "121 WEST 129 STREET",
    data: 1019140122
  },
  {
    value: "121 WEST 129 STREET",
    data: 1019140122
  },
  {
    value: "121 WEST 130 STREET",
    data: 1019150021
  },
  {
    value: "121 WEST 131 STREET",
    data: 1019167502
  },
  {
    value: "121 WEST 132 STREET",
    data: 1019177502
  },
  {
    value: "121 WEST 133 STREET",
    data: 1019180022
  },
  {
    value: "121 WEST 136 STREET",
    data: 1019210022
  },
  {
    value: "121 WEST 137 STREET",
    data: 1020060019
  },
  {
    value: "121 WEST 138 STREET",
    data: 1020070017
  },
  {
    value: "121 WEST 144 STREET",
    data: 1020130020
  },
  {
    value: "121 WEST 144 STREET",
    data: 1020130020
  },
  {
    value: "121 WEST 15 STREET",
    data: 1007917501
  },
  {
    value: "121 WEST 17 STREET",
    data: 1007930022
  },
  {
    value: "121 WEST 17 STREET",
    data: 1007930022
  },
  {
    value: "121 WEST 19 STREET",
    data: 1007957501
  },
  {
    value: "121 WEST 19 STREET",
    data: 1007957501
  },
  {
    value: "121 WEST 20 STREET",
    data: 1007967502
  },
  {
    value: "121 WEST 20 STREET",
    data: 1007967502
  },
  {
    value: "121 WEST 26 STREET",
    data: 1008020026
  },
  {
    value: "121 WEST 27 STREET",
    data: 1008030021
  },
  {
    value: "121 WEST 28 STREET",
    data: 1008040024
  },
  {
    value: "121 WEST 3 STREET",
    data: 1005430061
  },
  {
    value: "121 WEST 45 STREET",
    data: 1009980021
  },
  {
    value: "121 WEST 69 STREET",
    data: 1011410024
  },
  {
    value: "121 WEST 72 STREET",
    data: 1011440024
  },
  {
    value: "121 WEST 72 STREET",
    data: 1011440024
  },
  {
    value: "121 WEST 75 STREET",
    data: 1011470021
  },
  {
    value: "121 WEST 77 STREET",
    data: 1011490123
  },
  {
    value: "121 WEST 78 STREET",
    data: 1011500022
  },
  {
    value: "121 WEST 79 STREET",
    data: 1012100025
  },
  {
    value: "121 WEST 79 STREET",
    data: 1012100025
  },
  {
    value: "121 WEST 80 STREET",
    data: 1012110026
  },
  {
    value: "121 WEST 80 STREET",
    data: 1012110026
  },
  {
    value: "121 WEST 81 STREET",
    data: 1012120125
  },
  {
    value: "121 WEST 82 STREET",
    data: 1012130020
  },
  {
    value: "121 WEST 85 STREET",
    data: 1012160021
  },
  {
    value: "121 WEST 87 STREET",
    data: 1012180025
  },
  {
    value: "121 WEST 88 STREET",
    data: 1012190121
  },
  {
    value: "121 WEST 92 STREET",
    data: 1012230122
  },
  {
    value: "121 WEST 95 STREET",
    data: 1012260023
  },
  {
    value: "121 WEST END AVENUE",
    data: 1011710060
  },
  {
    value: "121 WEST WASHINGTON PLCE",
    data: 1005920078
  },
  {
    value: "1210 2 AVENUE",
    data: 1014380051
  },
  {
    value: "1210 3 AVENUE",
    data: 1014050033
  },
  {
    value: "1210 3 AVENUE",
    data: 1014050033
  },
  {
    value: "1211 AMSTERDAM AVENUE",
    data: 1019620070
  },
  {
    value: "1211 AMSTERDAM AVENUE",
    data: 1019620070
  },
  {
    value: "1211 AVENUE OF THE AMER",
    data: 1010000029
  },
  {
    value: "1211 MADISON AVENUE",
    data: 1014990020
  },
  {
    value: "1211 MADISON AVENUE",
    data: 1014990020
  },
  {
    value: "1211 PARK AVENUE",
    data: 1015230171
  },
  {
    value: "1212 5 AVENUE",
    data: 1016077502
  },
  {
    value: "1212 AVENUE OF THE AMER",
    data: 1012630071
  },
  {
    value: "1212 BROADWAY",
    data: 1008310061
  },
  {
    value: "1212 FIFTH AVENUE",
    data: 1016077502
  },
  {
    value: "1213 3 AVENUE",
    data: 1014250001
  },
  {
    value: "1213 3 AVENUE",
    data: 1014250001
  },
  {
    value: "1213 PARK AVENUE",
    data: 1015230071
  },
  {
    value: "1213 YORK AVENUE",
    data: 1014600022
  },
  {
    value: "1213 YORK AVENUE",
    data: 1014600022
  },
  {
    value: "1214 BROADWAY",
    data: 1008310059
  },
  {
    value: "1215 5 AVENUE",
    data: 1016080001
  },
  {
    value: "1215 5 AVENUE",
    data: 1016080001
  },
  {
    value: "1215 PARK AVENUE",
    data: 1015230070
  },
  {
    value: "1216 5 AVENUE",
    data: 1016080069
  },
  {
    value: "1217 MADISON AVENUE",
    data: 1014990051
  },
  {
    value: "1217 MADISON AVENUE",
    data: 1014990051
  },
  {
    value: "1217 PARK AVENUE",
    data: 1015230069
  },
  {
    value: "1218 3 AVENUE",
    data: 1014050040
  },
  {
    value: "1218 3 AVENUE",
    data: 1014050040
  },
  {
    value: "1218 BROADWAY",
    data: 1008320022
  },
  {
    value: "1219 1 AVENUE",
    data: 1014400030
  },
  {
    value: "1219 1 AVENUE",
    data: 1014400030
  },
  {
    value: "122 1 AVENUE",
    data: 1004350004
  },
  {
    value: "122 2 AVENUE",
    data: 1004490003
  },
  {
    value: "122 5 AVENUE",
    data: 1008190039
  },
  {
    value: "122 AVENUE C",
    data: 1003770007
  },
  {
    value: "122 BANK STREET",
    data: 1006340014
  },
  {
    value: "122 CHAMBERS STREET",
    data: 1001360010
  },
  {
    value: "122 DELANCEY STREET",
    data: 1003530043
  },
  {
    value: "122 DUANE STREET",
    data: 1001500015
  },
  {
    value: "122 DYCKMAN STREET",
    data: 1021740058
  },
  {
    value: "122 EAST 10 STREET",
    data: 1004650018
  },
  {
    value: "122 EAST 101 STREET",
    data: 1016280065
  },
  {
    value: "122 EAST 102 STREET",
    data: 1016290061
  },
  {
    value: "122 EAST 103 STREET",
    data: 1016300065
  },
  {
    value: "122 EAST 103 STREET",
    data: 1016300065
  },
  {
    value: "122 EAST 104 STREET",
    data: 1016310063
  },
  {
    value: "122 EAST 104 STREET",
    data: 1016310063
  },
  {
    value: "122 EAST 111 STREET",
    data: 1016380063
  },
  {
    value: "122 EAST 116 STREET",
    data: 1016430060
  },
  {
    value: "122 EAST 125 STREET",
    data: 1017730061
  },
  {
    value: "122 EAST 13 STREET",
    data: 1005580018
  },
  {
    value: "122 EAST 13 STREET",
    data: 1005580018
  },
  {
    value: "122 EAST 25 STREET",
    data: 1008807502
  },
  {
    value: "122 EAST 27 STREET",
    data: 1008820075
  },
  {
    value: "122 EAST 30 STREET",
    data: 1008850077
  },
  {
    value: "122 EAST 37 STREET",
    data: 1008920072
  },
  {
    value: "122 EAST 38 STREET",
    data: 1008930078
  },
  {
    value: "122 EAST 55 STREET",
    data: 1013090063
  },
  {
    value: "122 EAST 57 STREET",
    data: 1013110161
  },
  {
    value: "122 EAST 58 STREET",
    data: 1013120063
  },
  {
    value: "122 EAST 61 STREET",
    data: 1013950063
  },
  {
    value: "122 EAST 65 STREET",
    data: 1013990063
  },
  {
    value: "122 EAST 7 STREET",
    data: 1004340025
  },
  {
    value: "122 EAST 7 STREET",
    data: 1004340025
  },
  {
    value: "122 EAST 70 STREET",
    data: 1014040162
  },
  {
    value: "122 EAST 71 STREET",
    data: 1014050163
  },
  {
    value: "122 EAST 73 STREET",
    data: 1014070064
  },
  {
    value: "122 EAST 76 STREET",
    data: 1014100064
  },
  {
    value: "122 EAST 78 STREET",
    data: 1014120062
  },
  {
    value: "122 EAST 82 STREET",
    data: 1015100060
  },
  {
    value: "122 EAST 82 STREET",
    data: 1015100060
  },
  {
    value: "122 EAST 83 STREET",
    data: 1015110061
  },
  {
    value: "122 EAST 88 STREET",
    data: 1015160059
  },
  {
    value: "122 EAST 91 STREET",
    data: 1015190062
  },
  {
    value: "122 EAST 92 STREET",
    data: 1015200063
  },
  {
    value: "122 EAST 93 STREET",
    data: 1015210163
  },
  {
    value: "122 EAST 95 STREET",
    data: 1015230165
  },
  {
    value: "122 ELIZABETH STREET",
    data: 1004707501
  },
  {
    value: "122 ELIZABETH STREET",
    data: 1004707501
  },
  {
    value: "122 FORSYTH STREET",
    data: 1004190047
  },
  {
    value: "122 FORSYTH STREET",
    data: 1004190047
  },
  {
    value: "122 FULTON STREET",
    data: 1000780044
  },
  {
    value: "122 GREENE STREET",
    data: 1004990015
  },
  {
    value: "122 GREENWICH AVENUE",
    data: 1006187504
  },
  {
    value: "122 GREENWICH AVENUE",
    data: 1006187504
  },
  {
    value: "122 HAMILTON PLACE",
    data: 1020740040
  },
  {
    value: "122 HAMILTON PLACE",
    data: 1020740040
  },
  {
    value: "122 HESTER STREET",
    data: 1003030020
  },
  {
    value: "122 HESTER STREET",
    data: 1003030020
  },
  {
    value: "122 HUDSON STREET",
    data: 1001900016
  },
  {
    value: "122 LEXINGTON AVENUE",
    data: 1008840018
  },
  {
    value: "122 LUDLOW STREET",
    data: 1004100043
  },
  {
    value: "122 LUDLOW STREET",
    data: 1004100043
  },
  {
    value: "122 MAC DOUGAL STREET",
    data: 1005400010
  },
  {
    value: "122 MAC DOUGAL STREET",
    data: 1005400010
  },
  {
    value: "122 MANHATTAN AVENUE",
    data: 1018410019
  },
  {
    value: "122 MOTT STREET",
    data: 1002380003
  },
  {
    value: "122 MULBERRY STREET",
    data: 1002050012
  },
  {
    value: "122 NASSAU STREET",
    data: 1000920028
  },
  {
    value: "122 ORCHARD STREET",
    data: 1004100002
  },
  {
    value: "122 ORCHARD STREET",
    data: 1004100002
  },
  {
    value: "122 PARK ROW",
    data: 1001590051
  },
  {
    value: "122 RIVINGTON STREET",
    data: 1003540036
  },
  {
    value: "122 SPRING STREET",
    data: 1004850014
  },
  {
    value: "122 SPRING STREET",
    data: 1004850014
  },
  {
    value: "122 ST MARKS PLACE",
    data: 1004350025
  },
  {
    value: "122 ST MARKS PLACE",
    data: 1004350025
  },
  {
    value: "122 WATER STREET",
    data: 1000390040
  },
  {
    value: "122 WAVERLY PLACE",
    data: 1005520047
  },
  {
    value: "122 WEST 109 STREET",
    data: 1018630047
  },
  {
    value: "122 WEST 111 STREET",
    data: 1018200046
  },
  {
    value: "122 WEST 117 STREET",
    data: 1019010141
  },
  {
    value: "122 WEST 118 STREET",
    data: 1019020044
  },
  {
    value: "122 WEST 119 STREET",
    data: 1019030045
  },
  {
    value: "122 WEST 120 STREET",
    data: 1019040045
  },
  {
    value: "122 WEST 121 STREET",
    data: 1019050044
  },
  {
    value: "122 WEST 124 STREET",
    data: 1019080043
  },
  {
    value: "122 WEST 129 STREET",
    data: 1019130043
  },
  {
    value: "122 WEST 13 STREET",
    data: 1006080028
  },
  {
    value: "122 WEST 130 STREET",
    data: 1019140043
  },
  {
    value: "122 WEST 131 STREET",
    data: 1019150144
  },
  {
    value: "122 WEST 132 STREET",
    data: 1019160044
  },
  {
    value: "122 WEST 133 STREET",
    data: 1019170143
  },
  {
    value: "122 WEST 136 STREET",
    data: 1019200143
  },
  {
    value: "122 WEST 137 STREET",
    data: 1019210045
  },
  {
    value: "122 WEST 139 STREET",
    data: 1020070048
  },
  {
    value: "122 WEST 139 STREET",
    data: 1020070048
  },
  {
    value: "122 WEST 145 STREET",
    data: 1020130044
  },
  {
    value: "122 WEST 146 STREET",
    data: 1020140045
  },
  {
    value: "122 WEST 17 STREET",
    data: 1007920050
  },
  {
    value: "122 WEST 20 STREET",
    data: 1007950055
  },
  {
    value: "122 WEST 26 STREET",
    data: 1008010055
  },
  {
    value: "122 WEST 27 STREET",
    data: 1008020056
  },
  {
    value: "122 WEST 29 STREET",
    data: 1008040053
  },
  {
    value: "122 WEST 3 STREET",
    data: 1005430015
  },
  {
    value: "122 WEST 30 STREET",
    data: 1008050075
  },
  {
    value: "122 WEST 69 STREET",
    data: 1011400041
  },
  {
    value: "122 WEST 71 STREET",
    data: 1011420141
  },
  {
    value: "122 WEST 73 STREET",
    data: 1011440141
  },
  {
    value: "122 WEST 74 STREET",
    data: 1011450042
  },
  {
    value: "122 WEST 75 STREET",
    data: 1011460044
  },
  {
    value: "122 WEST 76 STREET",
    data: 1011470043
  },
  {
    value: "122 WEST 80 STREET",
    data: 1012100045
  },
  {
    value: "122 WEST 81 STREET",
    data: 1012110043
  },
  {
    value: "122 WEST 87 STREET",
    data: 1012170142
  },
  {
    value: "122 WEST 88 STREET",
    data: 1012180040
  },
  {
    value: "122 WEST 89 STREET",
    data: 1012190047
  },
  {
    value: "122 WEST 97 STREET",
    data: 1018510008
  },
  {
    value: "122 WEST 97 STREET",
    data: 1018510008
  },
  {
    value: "122 WEST WASHINGTON PLCE",
    data: 1005920008
  },
  {
    value: "1220 5 AVENUE",
    data: 1016090001
  },
  {
    value: "1220 AMSTERDAM AVENUE",
    data: 1019750029
  },
  {
    value: "1220 AMSTERDAM AVENUE",
    data: 1019750029
  },
  {
    value: "1220 LEXINGTON AVENUE",
    data: 1015110155
  },
  {
    value: "1220 MADISON AVENUE",
    data: 1015000015
  },
  {
    value: "1220 MADISON AVENUE",
    data: 1015000015
  },
  {
    value: "1220 PARK AVENUE",
    data: 1015070033
  },
  {
    value: "1220 PARK AVENUE",
    data: 1015070033
  },
  {
    value: "1220 ST NICHOLAS AVENUE",
    data: 1021280001
  },
  {
    value: "1220 ST NICHOLAS AVENUE",
    data: 1021280001
  },
  {
    value: "1221 AMSTERDAM AVENUE",
    data: 1019630001
  },
  {
    value: "1221 AMSTERDAM AVENUE",
    data: 1019630001
  },
  {
    value: "1221 AVENUE OF THE AMER",
    data: 1010010029
  },
  {
    value: "1221 ST NICHOLAS AVENUE",
    data: 1021410021
  },
  {
    value: "1222 2 AVENUE",
    data: 1014390001
  },
  {
    value: "1222 2 AVENUE",
    data: 1014390001
  },
  {
    value: "1223 LEXINGTON AVENUE",
    data: 1015120123
  },
  {
    value: "1223 LEXINGTON AVENUE",
    data: 1015120123
  },
  {
    value: "1224 1 AVENUE",
    data: 1014610001
  },
  {
    value: "1224 ST NICHOLAS AVENUE",
    data: 1021280003
  },
  {
    value: "1224 ST NICHOLAS AVENUE",
    data: 1021280003
  },
  {
    value: "1225 1 AVENUE",
    data: 1014410023
  },
  {
    value: "1225 1 AVENUE",
    data: 1014410023
  },
  {
    value: "1225 2 AVENUE",
    data: 1014197501
  },
  {
    value: "1225 2 AVENUE",
    data: 1014197501
  },
  {
    value: "1225 MADISON AVENUE",
    data: 1015000020
  },
  {
    value: "1225 MADISON AVENUE",
    data: 1015000020
  },
  {
    value: "1225 PARK AVENUE",
    data: 1015240001
  },
  {
    value: "1225 PARK AVENUE",
    data: 1015240001
  },
  {
    value: "1226 2 AVENUE",
    data: 1014390003
  },
  {
    value: "1226 BROADWAY",
    data: 1008320066
  },
  {
    value: "1226 BROADWAY",
    data: 1008320066
  },
  {
    value: "1227 BROADWAY",
    data: 1008310068
  },
  {
    value: "1227 MADISON AVENUE",
    data: 1015000053
  },
  {
    value: "1227 MADISON AVENUE",
    data: 1015000053
  },
  {
    value: "1228 MADISON AVENUE",
    data: 1015000054
  },
  {
    value: "1228 ST NICHOLAS AVENUE",
    data: 1021280008
  },
  {
    value: "1228 ST NICHOLAS AVENUE",
    data: 1021280008
  },
  {
    value: "1229 1 AVENUE",
    data: 1014410025
  },
  {
    value: "1229 1 AVENUE",
    data: 1014410025
  },
  {
    value: "123 1 AVENUE",
    data: 1004490034
  },
  {
    value: "123 2 AVENUE",
    data: 1004630033
  },
  {
    value: "123 3 AVENUE",
    data: 1004697505
  },
  {
    value: "123 3 AVENUE",
    data: 1004697505
  },
  {
    value: "123 5 AVENUE",
    data: 1008480003
  },
  {
    value: "123 ALLEN STREET",
    data: 1004150035
  },
  {
    value: "123 ALLEN STREET",
    data: 1004150035
  },
  {
    value: "123 AVENUE A",
    data: 1004350031
  },
  {
    value: "123 AVENUE D",
    data: 1003780034
  },
  {
    value: "123 BANK STREET",
    data: 1006350042
  },
  {
    value: "123 BANK STREET",
    data: 1006350042
  },
  {
    value: "123 BARCLAY STREET",
    data: 1001280002
  },
  {
    value: "123 BAXTER STREET",
    data: 1002067501
  },
  {
    value: "123 BAXTER STREET",
    data: 1002067501
  },
  {
    value: "123 BOWERY",
    data: 1003040015
  },
  {
    value: "123 CHAMBERS STREET",
    data: 1001457505
  },
  {
    value: "123 DIVISION STREET",
    data: 1002830087
  },
  {
    value: "123 EAST 10 STREET",
    data: 1004660046
  },
  {
    value: "123 EAST 100 STREET",
    data: 1016280012
  },
  {
    value: "123 EAST 101 STREET",
    data: 1016290009
  },
  {
    value: "123 EAST 102 STREET",
    data: 1016300012
  },
  {
    value: "123 EAST 102 STREET",
    data: 1016300012
  },
  {
    value: "123 EAST 106 STREET",
    data: 1016340012
  },
  {
    value: "123 EAST 116 STREET",
    data: 1016440011
  },
  {
    value: "123 EAST 116 STREET",
    data: 1016440011
  },
  {
    value: "123 EAST 124 STREET",
    data: 1017730011
  },
  {
    value: "123 EAST 129 STREET",
    data: 1017780006
  },
  {
    value: "123 EAST 129 STREET",
    data: 1017780006
  },
  {
    value: "123 EAST 18 STREET",
    data: 1008740015
  },
  {
    value: "123 EAST 23 STREET",
    data: 1008790013
  },
  {
    value: "123 EAST 26 STREET",
    data: 1008820016
  },
  {
    value: "123 EAST 30 STREET",
    data: 1008860016
  },
  {
    value: "123 EAST 35 STREET",
    data: 1008910015
  },
  {
    value: "123 EAST 36 STREET",
    data: 1008920013
  },
  {
    value: "123 EAST 38 STREET",
    data: 1008940016
  },
  {
    value: "123 EAST 39 STREET",
    data: 1008950016
  },
  {
    value: "123 EAST 47 STREET",
    data: 1013020022
  },
  {
    value: "123 EAST 61 STREET",
    data: 1013960010
  },
  {
    value: "123 EAST 62 STREET",
    data: 1013970009
  },
  {
    value: "123 EAST 63 STREET",
    data: 1013980009
  },
  {
    value: "123 EAST 64 STREET",
    data: 1013990009
  },
  {
    value: "123 EAST 69 STREET",
    data: 1014040011
  },
  {
    value: "123 EAST 7 STREET",
    data: 1004350041
  },
  {
    value: "123 EAST 7 STREET",
    data: 1004350041
  },
  {
    value: "123 EAST 70 STREET",
    data: 1014050011
  },
  {
    value: "123 EAST 71 STREET",
    data: 1014060011
  },
  {
    value: "123 EAST 73 STREET",
    data: 1014080011
  },
  {
    value: "123 EAST 78 STREET",
    data: 1014130012
  },
  {
    value: "123 EAST 79 STREET",
    data: 1015080010
  },
  {
    value: "123 EAST 80 STREET",
    data: 1015090011
  },
  {
    value: "123 EAST 82 STREET",
    data: 1015110012
  },
  {
    value: "123 EAST 82 STREET",
    data: 1015110012
  },
  {
    value: "123 EAST 83 STREET",
    data: 1015120012
  },
  {
    value: "123 EAST 83 STREET",
    data: 1015120012
  },
  {
    value: "123 EAST 86 STREET",
    data: 1015150012
  },
  {
    value: "123 EAST 88 STREET",
    data: 1015170014
  },
  {
    value: "123 EAST 88 STREET",
    data: 1015170014
  },
  {
    value: "123 EAST 90 STREET",
    data: 1015190012
  },
  {
    value: "123 EAST 90 STREET",
    data: 1015190012
  },
  {
    value: "123 EAST 91 STREET",
    data: 1015200010
  },
  {
    value: "123 EAST 92 STREET",
    data: 1015210111
  },
  {
    value: "123 EAST 94 STREET",
    data: 1015230009
  },
  {
    value: "123 EAST 95 STREET",
    data: 1015240009
  },
  {
    value: "123 EDGECOMBE AVENUE",
    data: 1020480037
  },
  {
    value: "123 ELIZABETH STREET",
    data: 1004700020
  },
  {
    value: "123 ELIZABETH STREET",
    data: 1004700020
  },
  {
    value: "123 GREENWICH STREET",
    data: 1000510014
  },
  {
    value: "123 HENRY STREET",
    data: 1002830008
  },
  {
    value: "123 HENRY STREET",
    data: 1002830008
  },
  {
    value: "123 LAFAYETTE STREET",
    data: 1002080004
  },
  {
    value: "123 LEXINGTON AVENUE",
    data: 1008840024
  },
  {
    value: "123 LUDLOW STREET",
    data: 1004100018
  },
  {
    value: "123 LUDLOW STREET",
    data: 1004100018
  },
  {
    value: "123 MANGIN STREET",
    data: 1003250025
  },
  {
    value: "123 MANHATTAN AVENUE",
    data: 1018410113
  },
  {
    value: "123 MORNINGSIDE AVENUE",
    data: 1019510001
  },
  {
    value: "123 MORNINGSIDE DRIVE",
    data: 1018500002
  },
  {
    value: "123 MOTT STREET",
    data: 1002370028
  },
  {
    value: "123 MOTT STREET",
    data: 1002370028
  },
  {
    value: "123 MULBERRY STREET",
    data: 1002060017
  },
  {
    value: "123 POST AVENUE",
    data: 1022190014
  },
  {
    value: "123 PRINCE STREET",
    data: 1005140041
  },
  {
    value: "123 SULLIVAN STREET",
    data: 1005037501
  },
  {
    value: "123 VERMILYEA AVENUE",
    data: 1022260014
  },
  {
    value: "123 VERMILYEA AVENUE",
    data: 1022260014
  },
  {
    value: "123 WADSWORTH AVENUE",
    data: 1021620027
  },
  {
    value: "123 WASHINGTON STREET",
    data: 1000537502
  },
  {
    value: "123 WASHINGTON STREET",
    data: 1000537502
  },
  {
    value: "123 WATTS STREET",
    data: 1002250004
  },
  {
    value: "123 WAVERLY PLACE",
    data: 1005530041
  },
  {
    value: "123 WAVERLY PLACE",
    data: 1005530041
  },
  {
    value: "123 WEST 104 STREET",
    data: 1018597501
  },
  {
    value: "123 WEST 104 STREET",
    data: 1018597501
  },
  {
    value: "123 WEST 106 STREET",
    data: 1018610121
  },
  {
    value: "123 WEST 11 STREET",
    data: 1006070057
  },
  {
    value: "123 WEST 111 STREET",
    data: 1018210117
  },
  {
    value: "123 WEST 115 STREET",
    data: 1018250020
  },
  {
    value: "123 WEST 115 STREET",
    data: 1018250020
  },
  {
    value: "123 WEST 117 STREET",
    data: 1019020020
  },
  {
    value: "123 WEST 118 STREET",
    data: 1019030019
  },
  {
    value: "123 WEST 119 STREET",
    data: 1019040020
  },
  {
    value: "123 WEST 120 STREET",
    data: 1019050019
  },
  {
    value: "123 WEST 122 STREET",
    data: 1019070020
  },
  {
    value: "123 WEST 126 STREET",
    data: 1019110021
  },
  {
    value: "123 WEST 128 STREET",
    data: 1019130019
  },
  {
    value: "123 WEST 130 STREET",
    data: 1019150020
  },
  {
    value: "123 WEST 131 STREET",
    data: 1019167501
  },
  {
    value: "123 WEST 132 STREET",
    data: 1019170121
  },
  {
    value: "123 WEST 133 STREET",
    data: 1019180021
  },
  {
    value: "123 WEST 135 STREET",
    data: 1019200018
  },
  {
    value: "123 WEST 135 STREET",
    data: 1019200018
  },
  {
    value: "123 WEST 136 STREET",
    data: 1019210021
  },
  {
    value: "123 WEST 137 STREET",
    data: 1020060018
  },
  {
    value: "123 WEST 138 STREET",
    data: 1020070016
  },
  {
    value: "123 WEST 142 STREET",
    data: 1020110025
  },
  {
    value: "123 WEST 142 STREET",
    data: 1020110025
  },
  {
    value: "123 WEST 15 STREET",
    data: 1007910027
  },
  {
    value: "123 WEST 20 STREET",
    data: 1007960023
  },
  {
    value: "123 WEST 227 STREET",
    data: 1022150311
  },
  {
    value: "123 WEST 28 STREET",
    data: 1008040022
  },
  {
    value: "123 WEST 3 STREET",
    data: 1005430062
  },
  {
    value: "123 WEST 3 STREET",
    data: 1005430062
  },
  {
    value: "123 WEST 44 STREET",
    data: 1009970019
  },
  {
    value: "123 WEST 45 STREET",
    data: 1009980120
  },
  {
    value: "123 WEST 56 STREET",
    data: 1010090019
  },
  {
    value: "123 WEST 57 STREET",
    data: 1010100015
  },
  {
    value: "123 WEST 69 STREET",
    data: 1011417503
  },
  {
    value: "123 WEST 71 STREET",
    data: 1011430023
  },
  {
    value: "123 WEST 74 STREET",
    data: 1011460018
  },
  {
    value: "123 WEST 74 STREET",
    data: 1011460018
  },
  {
    value: "123 WEST 75 STREET",
    data: 1011470020
  },
  {
    value: "123 WEST 77 STREET",
    data: 1011490023
  },
  {
    value: "123 WEST 77 STREET",
    data: 1011490023
  },
  {
    value: "123 WEST 78 STREET",
    data: 1011500121
  },
  {
    value: "123 WEST 79 STREET",
    data: 1012100024
  },
  {
    value: "123 WEST 81 STREET",
    data: 1012120025
  },
  {
    value: "123 WEST 82 STREET",
    data: 1012130119
  },
  {
    value: "123 WEST 85 STREET",
    data: 1012160020
  },
  {
    value: "123 WEST 86 STREET",
    data: 1012170024
  },
  {
    value: "123 WEST 87 STREET",
    data: 1012180124
  },
  {
    value: "123 WEST 88 STREET",
    data: 1012190021
  },
  {
    value: "123 WEST 89 STREET",
    data: 1012200017
  },
  {
    value: "123 WEST 92 STREET",
    data: 1012230022
  },
  {
    value: "123 WEST 93 STREET",
    data: 1012240023
  },
  {
    value: "123 WEST 93 STREET",
    data: 1012240023
  },
  {
    value: "123 WEST 94 STREET",
    data: 1012250022
  },
  {
    value: "123 WEST 95 STREET",
    data: 1012260022
  },
  {
    value: "123 WEST WASHINGTON PLCE",
    data: 1005920079
  },
  {
    value: "123 WILLIAM STREET",
    data: 1000780004
  },
  {
    value: "1230 3 AVENUE",
    data: 1014060041
  },
  {
    value: "1230 3 AVENUE",
    data: 1014060041
  },
  {
    value: "1230 5 AVENUE",
    data: 1016100001
  },
  {
    value: "1230 AVENUE OF THE AMER",
    data: 1012640005
  },
  {
    value: "1230 MADISON AVENUE",
    data: 1015000055
  },
  {
    value: "1230 PARK AVENUE",
    data: 1015070040
  },
  {
    value: "1230 PARK AVENUE",
    data: 1015070040
  },
  {
    value: "1231 3 AVENUE",
    data: 1014260001
  },
  {
    value: "1232 MADISON AVENUE",
    data: 1015000056
  },
  {
    value: "1233 1 AVENUE",
    data: 1014410027
  },
  {
    value: "1233 1 AVENUE",
    data: 1014410027
  },
  {
    value: "1233 YORK AVENUE",
    data: 1014610021
  },
  {
    value: "1234 MADISON AVENUE",
    data: 1015000057
  },
  {
    value: "1235 AMSTERDAM AVENUE",
    data: 1019630030
  },
  {
    value: "1235 PARK AVENUE",
    data: 1015247501
  },
  {
    value: "1235 PARK AVENUE",
    data: 1015247501
  },
  {
    value: "1237 1 AVENUE",
    data: 1014410030
  },
  {
    value: "1237 1 AVENUE",
    data: 1014410030
  },
  {
    value: "1238 2 AVENUE",
    data: 1014390049
  },
  {
    value: "1238 2 AVENUE",
    data: 1014390049
  },
  {
    value: "1238 ST NICHOLAS AVENUE",
    data: 1021290001
  },
  {
    value: "1238 ST NICHOLAS AVENUE",
    data: 1021290001
  },
  {
    value: "1239 MADISON AVENUE",
    data: 1015017501
  },
  {
    value: "1239 MADISON AVENUE",
    data: 1015017501
  },
  {
    value: "124 1 AVENUE",
    data: 1004350005
  },
  {
    value: "124 10 AVENUE",
    data: 1007150064
  },
  {
    value: "124 2 AVENUE",
    data: 1004490004
  },
  {
    value: "124 2 AVENUE",
    data: 1004490004
  },
  {
    value: "124 7 AVENUE",
    data: 1007670041
  },
  {
    value: "124 8 AVENUE",
    data: 1007667502
  },
  {
    value: "124 AVENUE C",
    data: 1003770008
  },
  {
    value: "124 AVENUE OF THE AMER",
    data: 1004900027
  },
  {
    value: "124 BANK STREET",
    data: 1006340013
  },
  {
    value: "124 BOWERY",
    data: 1004700064
  },
  {
    value: "124 CHAMBERS STREET",
    data: 1001360020
  },
  {
    value: "124 DELANCEY STREET",
    data: 1003530042
  },
  {
    value: "124 DYCKMAN STREET",
    data: 1021740057
  },
  {
    value: "124 EAST 10 STREET",
    data: 1004650019
  },
  {
    value: "124 EAST 101 STREET",
    data: 1016280064
  },
  {
    value: "124 EAST 102 STREET",
    data: 1016290060
  },
  {
    value: "124 EAST 103 STREET",
    data: 1016300063
  },
  {
    value: "124 EAST 103 STREET",
    data: 1016300063
  },
  {
    value: "124 EAST 107 STREET",
    data: 1016340060
  },
  {
    value: "124 EAST 107 STREET",
    data: 1016340060
  },
  {
    value: "124 EAST 112 STREET",
    data: 1016390062
  },
  {
    value: "124 EAST 116 STREET",
    data: 1016430059
  },
  {
    value: "124 EAST 118 STREET",
    data: 1016457501
  },
  {
    value: "124 EAST 124 STREET",
    data: 1017720060
  },
  {
    value: "124 EAST 13 STREET",
    data: 1005587504
  },
  {
    value: "124 EAST 14 STREET",
    data: 1005590016
  },
  {
    value: "124 EAST 24 STREET",
    data: 1008790070
  },
  {
    value: "124 EAST 24 STREET",
    data: 1008790070
  },
  {
    value: "124 EAST 27 STREET",
    data: 1008820074
  },
  {
    value: "124 EAST 28 STREET",
    data: 1008830078
  },
  {
    value: "124 EAST 30 STREET",
    data: 1008850076
  },
  {
    value: "124 EAST 31 STREET",
    data: 1008860074
  },
  {
    value: "124 EAST 35 STREET",
    data: 1008900077
  },
  {
    value: "124 EAST 36 STREET",
    data: 1008910076
  },
  {
    value: "124 EAST 37 STREET",
    data: 1008920071
  },
  {
    value: "124 EAST 38 STREET",
    data: 1008930077
  },
  {
    value: "124 EAST 39 STREET",
    data: 1008940074
  },
  {
    value: "124 EAST 4 STREET",
    data: 1004450028
  },
  {
    value: "124 EAST 4 STREET",
    data: 1004450028
  },
  {
    value: "124 EAST 55 STREET",
    data: 1013090062
  },
  {
    value: "124 EAST 57 STREET",
    data: 1013110061
  },
  {
    value: "124 EAST 61 STREET",
    data: 1013950162
  },
  {
    value: "124 EAST 62 STREET",
    data: 1013960063
  },
  {
    value: "124 EAST 63 STREET",
    data: 1013970061
  },
  {
    value: "124 EAST 64 STREET",
    data: 1013980064
  },
  {
    value: "124 EAST 65 STREET",
    data: 1013990062
  },
  {
    value: "124 EAST 66 STREET",
    data: 1014000060
  },
  {
    value: "124 EAST 70 STREET",
    data: 1014040062
  },
  {
    value: "124 EAST 71 STREET",
    data: 1014050063
  },
  {
    value: "124 EAST 72 STREET",
    data: 1014060064
  },
  {
    value: "124 EAST 73 STREET",
    data: 1014070163
  },
  {
    value: "124 EAST 74 STREET",
    data: 1014080163
  },
  {
    value: "124 EAST 79 STREET",
    data: 1014137501
  },
  {
    value: "124 EAST 79 STREET",
    data: 1014137501
  },
  {
    value: "124 EAST 80 STREET",
    data: 1015080063
  },
  {
    value: "124 EAST 84 STREET",
    data: 1015120059
  },
  {
    value: "124 EAST 84 STREET",
    data: 1015120059
  },
  {
    value: "124 EAST 85 STREET",
    data: 1015130160
  },
  {
    value: "124 EAST 86 STREET",
    data: 1015140059
  },
  {
    value: "124 EAST 88 STREET",
    data: 1015160056
  },
  {
    value: "124 EAST 91 STREET",
    data: 1015190060
  },
  {
    value: "124 EAST 91 STREET",
    data: 1015190060
  },
  {
    value: "124 EAST 92 STREET",
    data: 1015200062
  },
  {
    value: "124 EAST 93 STREET",
    data: 1015210063
  },
  {
    value: "124 EAST 95 STREET",
    data: 1015230065
  },
  {
    value: "124 EAST BROADWAY",
    data: 1002830053
  },
  {
    value: "124 FORSYTH STREET",
    data: 1004190048
  },
  {
    value: "124 FORSYTH STREET",
    data: 1004190048
  },
  {
    value: "124 FT GEORGE AVENUE",
    data: 1021610033
  },
  {
    value: "124 FT GEORGE AVENUE",
    data: 1021610033
  },
  {
    value: "124 HUDSON STREET",
    data: 1001907506
  },
  {
    value: "124 HUDSON STREET",
    data: 1001907506
  },
  {
    value: "124 LA SALLE STREET",
    data: 1019930039
  },
  {
    value: "124 LA SALLE STREET",
    data: 1019930039
  },
  {
    value: "124 LEXINGTON AVENUE",
    data: 1008840019
  },
  {
    value: "124 LUDLOW STREET",
    data: 1004100044
  },
  {
    value: "124 LUDLOW STREET",
    data: 1004100044
  },
  {
    value: "124 MAC DOUGAL STREET",
    data: 1005400011
  },
  {
    value: "124 MAC DOUGAL STREET",
    data: 1005400011
  },
  {
    value: "124 MANHATTAN AVENUE",
    data: 1018410018
  },
  {
    value: "124 MOTT STREET",
    data: 1002380004
  },
  {
    value: "124 MOTT STREET",
    data: 1002380004
  },
  {
    value: "124 MULBERRY STREET",
    data: 1002050013
  },
  {
    value: "124 NASSAU STREET",
    data: 1000920029
  },
  {
    value: "124 RIDGE STREET",
    data: 1003440046
  },
  {
    value: "124 RIDGE STREET",
    data: 1003440046
  },
  {
    value: "124 SHERMAN AVENUE",
    data: 1022240035
  },
  {
    value: "124 SHERMAN AVENUE",
    data: 1022240035
  },
  {
    value: "124 WAVERLY PLACE",
    data: 1005520046
  },
  {
    value: "124 WEST 109 STREET",
    data: 1018630048
  },
  {
    value: "124 WEST 109 STREET",
    data: 1018630048
  },
  {
    value: "124 WEST 111 STREET",
    data: 1018200146
  },
  {
    value: "124 WEST 112 STREET",
    data: 1018210050
  },
  {
    value: "124 WEST 114 STREET",
    data: 1018230058
  },
  {
    value: "124 WEST 114 STREET",
    data: 1018230058
  },
  {
    value: "124 WEST 117 STREET",
    data: 1019010043
  },
  {
    value: "124 WEST 118 STREET",
    data: 1019020045
  },
  {
    value: "124 WEST 118 STREET",
    data: 1019020045
  },
  {
    value: "124 WEST 119 STREET",
    data: 1019030046
  },
  {
    value: "124 WEST 120 STREET",
    data: 1019040145
  },
  {
    value: "124 WEST 121 STREET",
    data: 1019050045
  },
  {
    value: "124 WEST 123 STREET",
    data: 1019070046
  },
  {
    value: "124 WEST 125 STREET",
    data: 1019090046
  },
  {
    value: "124 WEST 13 STREET",
    data: 1006080027
  },
  {
    value: "124 WEST 130 STREET",
    data: 1019140044
  },
  {
    value: "124 WEST 131 STREET",
    data: 1019150045
  },
  {
    value: "124 WEST 131 STREET",
    data: 1019150045
  },
  {
    value: "124 WEST 132 STREET",
    data: 1019160144
  },
  {
    value: "124 WEST 133 STREET",
    data: 1019170044
  },
  {
    value: "124 WEST 134 STREET",
    data: 1019180050
  },
  {
    value: "124 WEST 136 STREET",
    data: 1019200044
  },
  {
    value: "124 WEST 137 STREET",
    data: 1019210046
  },
  {
    value: "124 WEST 137 STREET",
    data: 1019210046
  },
  {
    value: "124 WEST 139 STREET",
    data: 1020070049
  },
  {
    value: "124 WEST 139 STREET",
    data: 1020070049
  },
  {
    value: "124 WEST 18 STREET",
    data: 1007937504
  },
  {
    value: "124 WEST 20 STREET",
    data: 1007950056
  },
  {
    value: "124 WEST 227 STREET",
    data: 1022150381
  },
  {
    value: "124 WEST 23 STREET",
    data: 1007987507
  },
  {
    value: "124 WEST 23 STREET",
    data: 1007987507
  },
  {
    value: "124 WEST 24 STREET",
    data: 1007997501
  },
  {
    value: "124 WEST 24 STREET",
    data: 1007997501
  },
  {
    value: "124 WEST 25 STREET",
    data: 1008000055
  },
  {
    value: "124 WEST 25 STREET",
    data: 1008000055
  },
  {
    value: "124 WEST 29 STREET",
    data: 1008040054
  },
  {
    value: "124 WEST 31 STREET",
    data: 1008060056
  },
  {
    value: "124 WEST 34 STREET",
    data: 1008090059
  },
  {
    value: "124 WEST 36 STREET",
    data: 1008110047
  },
  {
    value: "124 WEST 60 STREET",
    data: 1011317502
  },
  {
    value: "124 WEST 60 STREET",
    data: 1011317502
  },
  {
    value: "124 WEST 71 STREET",
    data: 1011420042
  },
  {
    value: "124 WEST 72 STREET",
    data: 1011430042
  },
  {
    value: "124 WEST 72 STREET",
    data: 1011430042
  },
  {
    value: "124 WEST 73 STREET",
    data: 1011440042
  },
  {
    value: "124 WEST 74 STREET",
    data: 1011450043
  },
  {
    value: "124 WEST 75 STREET",
    data: 1011460045
  },
  {
    value: "124 WEST 78 STREET",
    data: 1011490044
  },
  {
    value: "124 WEST 80 STREET",
    data: 1012100145
  },
  {
    value: "124 WEST 81 STREET",
    data: 1012110044
  },
  {
    value: "124 WEST 86 STREET",
    data: 1012160043
  },
  {
    value: "124 WEST 87 STREET",
    data: 1012170043
  },
  {
    value: "124 WEST 88 STREET",
    data: 1012180041
  },
  {
    value: "124 WEST 93 STREET",
    data: 1012237502
  },
  {
    value: "124 WEST 93 STREET",
    data: 1012237502
  },
  {
    value: "124 WEST 95 STREET",
    data: 1012250043
  },
  {
    value: "124 WEST HOUSTON STREET",
    data: 1005250031
  },
  {
    value: "124 WEST WASHINGTON PLCE",
    data: 1005920007
  },
  {
    value: "1240 5 AVENUE",
    data: 1016110001
  },
  {
    value: "1240 AMSTERDAM AVENUE",
    data: 1019760029
  },
  {
    value: "1240 AMSTERDAM AVENUE",
    data: 1019760029
  },
  {
    value: "1240 BROADWAY",
    data: 1008330011
  },
  {
    value: "1240 MADISON AVENUE",
    data: 1015010016
  },
  {
    value: "1240 MADISON AVENUE",
    data: 1015010016
  },
  {
    value: "1241 BROADWAY",
    data: 1008320017
  },
  {
    value: "1245 1 AVENUE",
    data: 1014420015
  },
  {
    value: "1245 PARK AVENUE",
    data: 1016240001
  },
  {
    value: "1245 PARK AVENUE",
    data: 1016240001
  },
  {
    value: "1245 ST NICHOLAS AVENUE",
    data: 1021410048
  },
  {
    value: "1245 ST NICHOLAS AVENUE",
    data: 1021410048
  },
  {
    value: "1246 MADISON AVENUE",
    data: 1015010056
  },
  {
    value: "1246 MADISON AVENUE",
    data: 1015010056
  },
  {
    value: "1247 PARK AVENUE",
    data: 1016240069
  },
  {
    value: "1248 ST NICHOLAS AVENUE",
    data: 1021290005
  },
  {
    value: "125 1 AVENUE",
    data: 1004490033
  },
  {
    value: "125 2 AVENUE",
    data: 1004630032
  },
  {
    value: "125 2 AVENUE",
    data: 1004630032
  },
  {
    value: "125 3 AVENUE",
    data: 1008960001
  },
  {
    value: "125 4 AVENUE",
    data: 1005580006
  },
  {
    value: "125 5 AVENUE",
    data: 1008480004
  },
  {
    value: "125 ALLEN STREET",
    data: 1004150033
  },
  {
    value: "125 ALLEN STREET",
    data: 1004150033
  },
  {
    value: "125 AVENUE A",
    data: 1004350030
  },
  {
    value: "125 AVENUE A",
    data: 1004350030
  },
  {
    value: "125 AVENUE D",
    data: 1003780033
  },
  {
    value: "125 BARCLAY STREET",
    data: 1001280026
  },
  {
    value: "125 BROAD STREET",
    data: 1000057501
  },
  {
    value: "125 CANAL STREET",
    data: 1003030035
  },
  {
    value: "125 CENTRAL PARK NORTH",
    data: 1018207502
  },
  {
    value: "125 CENTRAL PARK NORTH",
    data: 1018207502
  },
  {
    value: "125 CHAMBERS STREET",
    data: 1001450012
  },
  {
    value: "125 EAST 10 STREET",
    data: 1004660045
  },
  {
    value: "125 EAST 101 STREET",
    data: 1016290010
  },
  {
    value: "125 EAST 103 STREET",
    data: 1016310108
  },
  {
    value: "125 EAST 106 STREET",
    data: 1016340013
  },
  {
    value: "125 EAST 116 STREET",
    data: 1016440012
  },
  {
    value: "125 EAST 117 STREET",
    data: 1016450007
  },
  {
    value: "125 EAST 118 STREET",
    data: 1017670011
  },
  {
    value: "125 EAST 118 STREET",
    data: 1017670011
  },
  {
    value: "125 EAST 119 STREET",
    data: 1017680011
  },
  {
    value: "125 EAST 12 STREET",
    data: 1005587503
  },
  {
    value: "125 EAST 12 STREET",
    data: 1005587503
  },
  {
    value: "125 EAST 15 STREET",
    data: 1008710026
  },
  {
    value: "125 EAST 15 STREET",
    data: 1008710026
  },
  {
    value: "125 EAST 23 STREET",
    data: 1008790014
  },
  {
    value: "125 EAST 24 STREET",
    data: 1008800016
  },
  {
    value: "125 EAST 26 STREET",
    data: 1008820017
  },
  {
    value: "125 EAST 30 STREET",
    data: 1008860017
  },
  {
    value: "125 EAST 36 STREET",
    data: 1008920014
  },
  {
    value: "125 EAST 39 STREET",
    data: 1008950018
  },
  {
    value: "125 EAST 4 STREET",
    data: 1004467501
  },
  {
    value: "125 EAST 4 STREET",
    data: 1004467501
  },
  {
    value: "125 EAST 47 STREET",
    data: 1013020023
  },
  {
    value: "125 EAST 54 STREET",
    data: 1013090008
  },
  {
    value: "125 EAST 54 STREET",
    data: 1013090008
  },
  {
    value: "125 EAST 56 STREET",
    data: 1013110011
  },
  {
    value: "125 EAST 61 STREET",
    data: 1013960011
  },
  {
    value: "125 EAST 62 STREET",
    data: 1013970109
  },
  {
    value: "125 EAST 63 STREET",
    data: 1013980010
  },
  {
    value: "125 EAST 63 STREET",
    data: 1013980010
  },
  {
    value: "125 EAST 64 STREET",
    data: 1013990010
  },
  {
    value: "125 EAST 65 STREET",
    data: 1014000011
  },
  {
    value: "125 EAST 69 STREET",
    data: 1014040012
  },
  {
    value: "125 EAST 7 STREET",
    data: 1004350040
  },
  {
    value: "125 EAST 71 STREET",
    data: 1014060111
  },
  {
    value: "125 EAST 73 STREET",
    data: 1014080012
  },
  {
    value: "125 EAST 78 STREET",
    data: 1014130013
  },
  {
    value: "125 EAST 80 STREET",
    data: 1015090012
  },
  {
    value: "125 EAST 81 STREET",
    data: 1015100013
  },
  {
    value: "125 EAST 82 STREET",
    data: 1015110013
  },
  {
    value: "125 EAST 83 STREET",
    data: 1015120013
  },
  {
    value: "125 EAST 84 STREET",
    data: 1015130015
  },
  {
    value: "125 EAST 84 STREET",
    data: 1015130015
  },
  {
    value: "125 EAST 85 STREET",
    data: 1015140013
  },
  {
    value: "125 EAST 88 STREET",
    data: 1015170015
  },
  {
    value: "125 EAST 88 STREET",
    data: 1015170015
  },
  {
    value: "125 EAST 90 STREET",
    data: 1015190013
  },
  {
    value: "125 EAST 90 STREET",
    data: 1015190013
  },
  {
    value: "125 EAST 91 STREET",
    data: 1015200011
  },
  {
    value: "125 EAST 92 STREET",
    data: 1015210012
  },
  {
    value: "125 EAST 93 STREET",
    data: 1015220012
  },
  {
    value: "125 EAST 93 STREET",
    data: 1015220012
  },
  {
    value: "125 EAST 94 STREET",
    data: 1015230109
  },
  {
    value: "125 EAST 95 STREET",
    data: 1015240010
  },
  {
    value: "125 EDGECOMBE AVENUE",
    data: 1020480038
  },
  {
    value: "125 ELIZABETH STREET",
    data: 1004700019
  },
  {
    value: "125 ELIZABETH STREET",
    data: 1004700019
  },
  {
    value: "125 FULTON STREET",
    data: 1000910011
  },
  {
    value: "125 GRAND STREET",
    data: 1002320013
  },
  {
    value: "125 GREENE STREET",
    data: 1005140032
  },
  {
    value: "125 HENRY STREET",
    data: 1002830009
  },
  {
    value: "125 HENRY STREET",
    data: 1002830009
  },
  {
    value: "125 LEXINGTON AVENUE",
    data: 1008840023
  },
  {
    value: "125 MAC DOUGAL STREET",
    data: 1005430060
  },
  {
    value: "125 MADISON STREET",
    data: 1002750001
  },
  {
    value: "125 MADISON STREET",
    data: 1002750001
  },
  {
    value: "125 MAIDEN LANE",
    data: 1000707501
  },
  {
    value: "125 MANHATTAN AVENUE",
    data: 1018410114
  },
  {
    value: "125 ORCHARD STREET",
    data: 1004150074
  },
  {
    value: "125 ORCHARD STREET",
    data: 1004150074
  },
  {
    value: "125 POST AVENUE",
    data: 1022190015
  },
  {
    value: "125 PRINCE STREET",
    data: 1005140042
  },
  {
    value: "125 RIVERSIDE DRIVE",
    data: 1012460001
  },
  {
    value: "125 RIVERSIDE DRIVE",
    data: 1012460001
  },
  {
    value: "125 RIVINGTON STREET",
    data: 1003530022
  },
  {
    value: "125 SEAMAN AVENUE",
    data: 1022400009
  },
  {
    value: "125 SEAMAN AVENUE",
    data: 1022400009
  },
  {
    value: "125 SHERMAN AVENUE",
    data: 1022200019
  },
  {
    value: "125 SHERMAN AVENUE",
    data: 1022200019
  },
  {
    value: "125 STANTON STREET",
    data: 1003540014
  },
  {
    value: "125 STANTON STREET",
    data: 1003540014
  },
  {
    value: "125 SULLIVAN STREET",
    data: 1005030015
  },
  {
    value: "125 SULLIVAN STREET",
    data: 1005030015
  },
  {
    value: "125 TERRACE VIEW AVENUE",
    data: 1022150054
  },
  {
    value: "125 VERMILYEA AVENUE",
    data: 1022260015
  },
  {
    value: "125 VERMILYEA AVENUE",
    data: 1022260015
  },
  {
    value: "125 WADSWORTH AVENUE",
    data: 1021620029
  },
  {
    value: "125 WALKER STREET",
    data: 1001980126
  },
  {
    value: "125 WALKER STREET",
    data: 1001980126
  },
  {
    value: "125 WEST 106 STREET",
    data: 1018610021
  },
  {
    value: "125 WEST 11 STREET",
    data: 1006070058
  },
  {
    value: "125 WEST 112 STREET",
    data: 1018220014
  },
  {
    value: "125 WEST 112 STREET",
    data: 1018220014
  },
  {
    value: "125 WEST 116 STREET",
    data: 1019010019
  },
  {
    value: "125 WEST 116 STREET",
    data: 1019010019
  },
  {
    value: "125 WEST 117 STREET",
    data: 1019020019
  },
  {
    value: "125 WEST 118 STREET",
    data: 1019030018
  },
  {
    value: "125 WEST 119 STREET",
    data: 1019040019
  },
  {
    value: "125 WEST 12 STREET",
    data: 1006080053
  },
  {
    value: "125 WEST 12 STREET",
    data: 1006080053
  },
  {
    value: "125 WEST 120 STREET",
    data: 1019050018
  },
  {
    value: "125 WEST 122 STREET",
    data: 1019070119
  },
  {
    value: "125 WEST 123 STREET",
    data: 1019080119
  },
  {
    value: "125 WEST 124 STREET",
    data: 1019090020
  },
  {
    value: "125 WEST 126 STREET",
    data: 1019110020
  },
  {
    value: "125 WEST 128 STREET",
    data: 1019130018
  },
  {
    value: "125 WEST 129 STREET",
    data: 1019140121
  },
  {
    value: "125 WEST 131 STREET",
    data: 1019160120
  },
  {
    value: "125 WEST 132 STREET",
    data: 1019170021
  },
  {
    value: "125 WEST 133 STREET",
    data: 1019180020
  },
  {
    value: "125 WEST 133 STREET",
    data: 1019180020
  },
  {
    value: "125 WEST 136 STREET",
    data: 1019217502
  },
  {
    value: "125 WEST 137 STREET",
    data: 1020060017
  },
  {
    value: "125 WEST 138 STREET",
    data: 1020070015
  },
  {
    value: "125 WEST 14 STREET",
    data: 1007907502
  },
  {
    value: "125 WEST 14 STREET",
    data: 1007907502
  },
  {
    value: "125 WEST 142 STREET",
    data: 1020110023
  },
  {
    value: "125 WEST 142 STREET",
    data: 1020110023
  },
  {
    value: "125 WEST 144 STREET",
    data: 1020130018
  },
  {
    value: "125 WEST 144 STREET",
    data: 1020130018
  },
  {
    value: "125 WEST 15 STREET",
    data: 1007910026
  },
  {
    value: "125 WEST 16 STREET",
    data: 1007920020
  },
  {
    value: "125 WEST 16 STREET",
    data: 1007920020
  },
  {
    value: "125 WEST 18 STREET",
    data: 1007940025
  },
  {
    value: "125 WEST 21 STREET",
    data: 1007977501
  },
  {
    value: "125 WEST 21 STREET",
    data: 1007977501
  },
  {
    value: "125 WEST 22 STREET",
    data: 1007987505
  },
  {
    value: "125 WEST 22 STREET",
    data: 1007987505
  },
  {
    value: "125 WEST 227 STREET",
    data: 1022150312
  },
  {
    value: "125 WEST 23 STREET",
    data: 1007990025
  },
  {
    value: "125 WEST 29 STREET",
    data: 1008050035
  },
  {
    value: "125 WEST 3 STREET",
    data: 1005430063
  },
  {
    value: "125 WEST 31 STREET",
    data: 1008077501
  },
  {
    value: "125 WEST 43 STREET",
    data: 1009960020
  },
  {
    value: "125 WEST 45 STREET",
    data: 1009980018
  },
  {
    value: "125 WEST 56 STREET",
    data: 1010090018
  },
  {
    value: "125 WEST 56 STREET",
    data: 1010099018
  },
  {
    value: "125 WEST 56 STREET",
    data: 1010090018
  },
  {
    value: "125 WEST 69 STREET",
    data: 1011410122
  },
  {
    value: "125 WEST 70 STREET",
    data: 1011420023
  },
  {
    value: "125 WEST 72 STREET",
    data: 1011440023
  },
  {
    value: "125 WEST 75 STREET",
    data: 1011470019
  },
  {
    value: "125 WEST 76 STREET",
    data: 1011480021
  },
  {
    value: "125 WEST 76 STREET",
    data: 1011480021
  },
  {
    value: "125 WEST 77 STREET",
    data: 1011490022
  },
  {
    value: "125 WEST 78 STREET",
    data: 1011500021
  },
  {
    value: "125 WEST 79 STREET",
    data: 1012100023
  },
  {
    value: "125 WEST 79 STREET",
    data: 1012100023
  },
  {
    value: "125 WEST 80 STREET",
    data: 1012110025
  },
  {
    value: "125 WEST 81 STREET",
    data: 1012120024
  },
  {
    value: "125 WEST 82 STREET",
    data: 1012137503
  },
  {
    value: "125 WEST 82 STREET",
    data: 1012137503
  },
  {
    value: "125 WEST 85 STREET",
    data: 1012160119
  },
  {
    value: "125 WEST 86 STREET",
    data: 1012170023
  },
  {
    value: "125 WEST 87 STREET",
    data: 1012180024
  },
  {
    value: "125 WEST 88 STREET",
    data: 1012190020
  },
  {
    value: "125 WEST 92 STREET",
    data: 1012230021
  },
  {
    value: "125 WEST 94 STREET",
    data: 1012250121
  },
  {
    value: "125 WEST 95 STREET",
    data: 1012260121
  },
  {
    value: "125 WEST 97 STREET",
    data: 1018520005
  },
  {
    value: "125 WEST WASHINGTON PLACE",
    data: 1005920080
  },
  {
    value: "125 WEST WASHINGTON PLCE",
    data: 1005920080
  },
  {
    value: "125 WHITE STREET",
    data: 1001670001
  },
  {
    value: "1250 1 AVENUE",
    data: 1014620001
  },
  {
    value: "1250 3 AVENUE",
    data: 1014070033
  },
  {
    value: "1250 3 AVENUE",
    data: 1014070033
  },
  {
    value: "1250 5 AVENUE",
    data: 1016120001
  },
  {
    value: "1250 5 AVENUE",
    data: 1016120001
  },
  {
    value: "1250 ST NICHOLAS AVENUE",
    data: 1021290006
  },
  {
    value: "1251 3 AVENUE",
    data: 1014270001
  },
  {
    value: "1251 3 AVENUE",
    data: 1014270001
  },
  {
    value: "1251 AVENUE OF THE AMER",
    data: 1010027501
  },
  {
    value: "1252 LEXINGTON AVENUE",
    data: 1015130056
  },
  {
    value: "1253 ST NICHOLAS AVENUE",
    data: 1021410042
  },
  {
    value: "1253 ST NICHOLAS AVENUE",
    data: 1021410042
  },
  {
    value: "1254 AMSTERDAM AVENUE",
    data: 1019760036
  },
  {
    value: "1254 AMSTERDAM AVENUE",
    data: 1019760036
  },
  {
    value: "1254 LEXINGTON AVENUE",
    data: 1015130156
  },
  {
    value: "1254 MADISON AVENUE",
    data: 1015020017
  },
  {
    value: "1254 MADISON AVENUE",
    data: 1015020017
  },
  {
    value: "1255 5 AVENUE",
    data: 1016137501
  },
  {
    value: "1255 5 AVENUE",
    data: 1016137501
  },
  {
    value: "1255 AMSTERDAM AVENUE",
    data: 1019630060
  },
  {
    value: "1255 BROADWAY",
    data: 1008330006
  },
  {
    value: "1255 PARK AVENUE",
    data: 1016250001
  },
  {
    value: "1256 2 AVENUE",
    data: 1014400049
  },
  {
    value: "1256 LEXINGTON AVENUE",
    data: 1015130057
  },
  {
    value: "1257 PARK AVENUE",
    data: 1016250002
  },
  {
    value: "1258 AVENUE OF THE AMER",
    data: 1012650071
  },
  {
    value: "1258 LEXINGTON AVENUE",
    data: 1015130157
  },
  {
    value: "1259 PARK AVENUE",
    data: 1016250003
  },
  {
    value: "1259 ST NICHOLAS AVENUE",
    data: 1021410041
  },
  {
    value: "126 1 AVENUE",
    data: 1004350006
  },
  {
    value: "126 1 AVENUE",
    data: 1004350006
  },
  {
    value: "126 2 AVENUE",
    data: 1004490005
  },
  {
    value: "126 5 AVENUE",
    data: 1008190044
  },
  {
    value: "126 AVENUE C",
    data: 1003780001
  },
  {
    value: "126 AVENUE OF THE AMERIC",
    data: 1004900028
  },
  {
    value: "126 BANK STREET",
    data: 1006340012
  },
  {
    value: "126 BAXTER STREET",
    data: 1002070015
  },
  {
    value: "126 CHAMBERS STREET",
    data: 1001360019
  },
  {
    value: "126 CHRISTOPHER STREET",
    data: 1005850050
  },
  {
    value: "126 DELANCEY STREET",
    data: 1003530041
  },
  {
    value: "126 DYCKMAN STREET",
    data: 1021740056
  },
  {
    value: "126 EAST 10 STREET",
    data: 1004650020
  },
  {
    value: "126 EAST 101 STREET",
    data: 1016280163
  },
  {
    value: "126 EAST 103 STREET",
    data: 1016300061
  },
  {
    value: "126 EAST 103 STREET",
    data: 1016300061
  },
  {
    value: "126 EAST 104 STREET",
    data: 1016310062
  },
  {
    value: "126 EAST 104 STREET",
    data: 1016310062
  },
  {
    value: "126 EAST 116 STREET",
    data: 1016430056
  },
  {
    value: "126 EAST 118 STREET",
    data: 1016450059
  },
  {
    value: "126 EAST 118 STREET",
    data: 1016450059
  },
  {
    value: "126 EAST 12 STREET",
    data: 1005560052
  },
  {
    value: "126 EAST 12 STREET",
    data: 1005560052
  },
  {
    value: "126 EAST 13 STREET",
    data: 1005580043
  },
  {
    value: "126 EAST 14 STREET",
    data: 1005590022
  },
  {
    value: "126 EAST 19 STREET",
    data: 1008740058
  },
  {
    value: "126 EAST 24 STREET",
    data: 1008790069
  },
  {
    value: "126 EAST 24 STREET",
    data: 1008790069
  },
  {
    value: "126 EAST 27 STREET",
    data: 1008820073
  },
  {
    value: "126 EAST 28 STREET",
    data: 1008830077
  },
  {
    value: "126 EAST 30 STREET",
    data: 1008850074
  },
  {
    value: "126 EAST 30 STREET",
    data: 1008850074
  },
  {
    value: "126 EAST 31 STREET",
    data: 1008860073
  },
  {
    value: "126 EAST 31 STREET",
    data: 1008860073
  },
  {
    value: "126 EAST 35 STREET",
    data: 1008900074
  },
  {
    value: "126 EAST 36 STREET",
    data: 1008910075
  },
  {
    value: "126 EAST 37 STREET",
    data: 1008920070
  },
  {
    value: "126 EAST 38 STREET",
    data: 1008930076
  },
  {
    value: "126 EAST 39 STREET",
    data: 1008940073
  },
  {
    value: "126 EAST 39 STREET",
    data: 1008940073
  },
  {
    value: "126 EAST 4 STREET",
    data: 1004450029
  },
  {
    value: "126 EAST 4 STREET",
    data: 1004450029
  },
  {
    value: "126 EAST 56 STREET",
    data: 1013100063
  },
  {
    value: "126 EAST 57 STREET",
    data: 1013110060
  },
  {
    value: "126 EAST 61 STREET",
    data: 1013950062
  },
  {
    value: "126 EAST 62 STREET",
    data: 1013960062
  },
  {
    value: "126 EAST 64 STREET",
    data: 1013980063
  },
  {
    value: "126 EAST 65 STREET",
    data: 1013990161
  },
  {
    value: "126 EAST 66 STREET",
    data: 1014000059
  },
  {
    value: "126 EAST 7 STREET",
    data: 1004340026
  },
  {
    value: "126 EAST 7 STREET",
    data: 1004340026
  },
  {
    value: "126 EAST 70 STREET",
    data: 1014040061
  },
  {
    value: "126 EAST 71 STREET",
    data: 1014050062
  },
  {
    value: "126 EAST 72 STREET",
    data: 1014060163
  },
  {
    value: "126 EAST 73 STREET",
    data: 1014070063
  },
  {
    value: "126 EAST 74 STREET",
    data: 1014080063
  },
  {
    value: "126 EAST 78 STREET",
    data: 1014120061
  },
  {
    value: "126 EAST 83 STREET",
    data: 1015110060
  },
  {
    value: "126 EAST 83 STREET",
    data: 1015110060
  },
  {
    value: "126 EAST 92 STREET",
    data: 1015200161
  },
  {
    value: "126 EAST 93 STREET",
    data: 1015210062
  },
  {
    value: "126 EAST 95 STREET",
    data: 1015230064
  },
  {
    value: "126 EAST BROADWAY",
    data: 1002830054
  },
  {
    value: "126 ELIZABETH STREET",
    data: 1004700042
  },
  {
    value: "126 ELIZABETH STREET",
    data: 1004700042
  },
  {
    value: "126 HESTER STREET",
    data: 1003030019
  },
  {
    value: "126 LA SALLE STREET",
    data: 1019930040
  },
  {
    value: "126 LA SALLE STREET",
    data: 1019930040
  },
  {
    value: "126 LAFAYETTE STREET",
    data: 1002090021
  },
  {
    value: "126 LEXINGTON AVENUE",
    data: 1008840020
  },
  {
    value: "126 MAC DOUGAL STREET",
    data: 1005400012
  },
  {
    value: "126 MAC DOUGAL STREET",
    data: 1005400012
  },
  {
    value: "126 MADISON AVENUE",
    data: 1008600063
  },
  {
    value: "126 MANHATTAN AVENUE",
    data: 1018410017
  },
  {
    value: "126 MULBERRY STREET",
    data: 1002050014
  },
  {
    value: "126 NAGLE AVENUE",
    data: 1021740077
  },
  {
    value: "126 NAGLE AVENUE",
    data: 1021740077
  },
  {
    value: "126 NASSAU STREET",
    data: 1000920030
  },
  {
    value: "126 PEARL STREET",
    data: 1000310010
  },
  {
    value: "126 READE STREET",
    data: 1001410001
  },
  {
    value: "126 RIVERSIDE DRIVE",
    data: 1012460058
  },
  {
    value: "126 RIVERSIDE DRIVE",
    data: 1012460058
  },
  {
    value: "126 RIVINGTON STREET",
    data: 1003540034
  },
  {
    value: "126 ST MARKS PLACE",
    data: 1004350027
  },
  {
    value: "126 ST MARKS PLACE",
    data: 1004350027
  },
  {
    value: "126 STANTON STREET",
    data: 1003550001
  },
  {
    value: "126 UNIVERSITY PLACE",
    data: 1005717504
  },
  {
    value: "126 WATER STREET",
    data: 1000390038
  },
  {
    value: "126 WAVERLY PLACE",
    data: 1005527501
  },
  {
    value: "126 WEST 109 STREET",
    data: 1018630049
  },
  {
    value: "126 WEST 109 STREET",
    data: 1018630049
  },
  {
    value: "126 WEST 11 STREET",
    data: 1006060047
  },
  {
    value: "126 WEST 11 STREET",
    data: 1006060047
  },
  {
    value: "126 WEST 111 STREET",
    data: 1018200047
  },
  {
    value: "126 WEST 112 STREET",
    data: 1018210051
  },
  {
    value: "126 WEST 117 STREET",
    data: 1019010143
  },
  {
    value: "126 WEST 118 STREET",
    data: 1019020145
  },
  {
    value: "126 WEST 119 STREET",
    data: 1019030047
  },
  {
    value: "126 WEST 120 STREET",
    data: 1019040046
  },
  {
    value: "126 WEST 121 STREET",
    data: 1019050046
  },
  {
    value: "126 WEST 123 STREET",
    data: 1019070146
  },
  {
    value: "126 WEST 124 STREET",
    data: 1019080044
  },
  {
    value: "126 WEST 127 STREET",
    data: 1019110043
  },
  {
    value: "126 WEST 129 STREET",
    data: 1019130044
  },
  {
    value: "126 WEST 13 STREET",
    data: 1006080026
  },
  {
    value: "126 WEST 130 STREET",
    data: 1019140144
  },
  {
    value: "126 WEST 131 STREET",
    data: 1019150046
  },
  {
    value: "126 WEST 132 STREET",
    data: 1019160045
  },
  {
    value: "126 WEST 139 STREET",
    data: 1020070050
  },
  {
    value: "126 WEST 139 STREET",
    data: 1020070050
  },
  {
    value: "126 WEST 143 STREET",
    data: 1020110048
  },
  {
    value: "126 WEST 16 STREET",
    data: 1007917502
  },
  {
    value: "126 WEST 18 STREET",
    data: 1007930054
  },
  {
    value: "126 WEST 22 STREET",
    data: 1007977502
  },
  {
    value: "126 WEST 22 STREET",
    data: 1007977502
  },
  {
    value: "126 WEST 227 STREET",
    data: 1022150380
  },
  {
    value: "126 WEST 25 STREET",
    data: 1008000056
  },
  {
    value: "126 WEST 34 STREET",
    data: 1008090060
  },
  {
    value: "126 WEST 37 STREET",
    data: 1008120062
  },
  {
    value: "126 WEST 46 STREET",
    data: 1009980047
  },
  {
    value: "126 WEST 53 STREET",
    data: 1010050049
  },
  {
    value: "126 WEST 71 STREET",
    data: 1011420043
  },
  {
    value: "126 WEST 73 STREET",
    data: 1011440043
  },
  {
    value: "126 WEST 73 STREET",
    data: 1011440043
  },
  {
    value: "126 WEST 74 STREET",
    data: 1011450143
  },
  {
    value: "126 WEST 74 STREET",
    data: 1011450143
  },
  {
    value: "126 WEST 75 STREET",
    data: 1011460046
  },
  {
    value: "126 WEST 78 STREET",
    data: 1011490045
  },
  {
    value: "126 WEST 80 STREET",
    data: 1012100046
  },
  {
    value: "126 WEST 81 STREET",
    data: 1012110045
  },
  {
    value: "126 WEST 82 STREET",
    data: 1012120044
  },
  {
    value: "126 WEST 83 STREET",
    data: 1012130042
  },
  {
    value: "126 WEST 83 STREET",
    data: 1012130042
  },
  {
    value: "126 WEST 86 STREET",
    data: 1012160143
  },
  {
    value: "126 WEST 87 STREET",
    data: 1012170143
  },
  {
    value: "126 WEST 95 STREET",
    data: 1012250044
  },
  {
    value: "126 WEST 96 STREET",
    data: 1012260043
  },
  {
    value: "126 WEST 96 STREET",
    data: 1012260043
  },
  {
    value: "126 WEST WASHINGTON PLCE",
    data: 1005920006
  },
  {
    value: "1260 AMSTERDAM AVENUE",
    data: 1019770029
  },
  {
    value: "1260 AMSTERDAM AVENUE",
    data: 1019770029
  },
  {
    value: "1260 AVENUE OF THE AMER",
    data: 1012660001
  },
  {
    value: "1260 BROADWAY",
    data: 1008340011
  },
  {
    value: "1260 LEXINGTON AVENUE",
    data: 1015130058
  },
  {
    value: "1260 ST NICHOLAS AVENUE",
    data: 1021300001
  },
  {
    value: "1261 2 AVENUE",
    data: 1014210021
  },
  {
    value: "1261 2 AVENUE",
    data: 1014210021
  },
  {
    value: "1261 5 AVENUE",
    data: 1016130070
  },
  {
    value: "1261 AVENUE OF THE AMER",
    data: 1010030029
  },
  {
    value: "1261 MADISON AVENUE",
    data: 1015020020
  },
  {
    value: "1261 MADISON AVENUE",
    data: 1015020020
  },
  {
    value: "1261 PARK AVENUE",
    data: 1016250004
  },
  {
    value: "1261 PARK AVENUE",
    data: 1016250004
  },
  {
    value: "1261 ST NICHOLAS AVENUE",
    data: 1021430020
  },
  {
    value: "1261 ST NICHOLAS AVENUE",
    data: 1021430020
  },
  {
    value: "1263 BROADWAY",
    data: 1008330010
  },
  {
    value: "1263 PARK AVENUE",
    data: 1016250072
  },
  {
    value: "1264 AMSTERDAM AVENUE",
    data: 1019770031
  },
  {
    value: "1264 AMSTERDAM AVENUE",
    data: 1019770031
  },
  {
    value: "1264 ST NICHOLAS AVENUE",
    data: 1021300003
  },
  {
    value: "1265 BROADWAY",
    data: 1008330075
  },
  {
    value: "1265 BROADWAY",
    data: 1008330075
  },
  {
    value: "1265 PARK AVENUE",
    data: 1016250071
  },
  {
    value: "1266 1 AVENUE",
    data: 1014630001
  },
  {
    value: "1266 1 AVENUE",
    data: 1014630001
  },
  {
    value: "1267 1 AVENUE",
    data: 1014430024
  },
  {
    value: "1267 PARK AVENUE",
    data: 1016250070
  },
  {
    value: "1268 AMSTERDAM AVENUE",
    data: 1019770033
  },
  {
    value: "1268 AMSTERDAM AVENUE",
    data: 1019770033
  },
  {
    value: "1269 1 AVENUE",
    data: 1014430025
  },
  {
    value: "1269 1 AVENUE",
    data: 1014430025
  },
  {
    value: "1269 PARK AVENUE",
    data: 1016250069
  },
  {
    value: "1269 PARK AVENUE",
    data: 1016250069
  },
  {
    value: "126A DYCKMAN STREET",
    data: 1021740055
  },
  {
    value: "127 1 AVENUE",
    data: 1004490032
  },
  {
    value: "127 2 AVENUE",
    data: 1004630031
  },
  {
    value: "127 2 AVENUE",
    data: 1004630031
  },
  {
    value: "127 4 AVENUE",
    data: 1005580010
  },
  {
    value: "127 4 AVENUE",
    data: 1005580010
  },
  {
    value: "127 7 AVENUE",
    data: 1007937508
  },
  {
    value: "127 8 AVENUE",
    data: 1007407501
  },
  {
    value: "127 8 AVENUE",
    data: 1007407501
  },
  {
    value: "127 ALLEN STREET",
    data: 1004150032
  },
  {
    value: "127 ALLEN STREET",
    data: 1004150032
  },
  {
    value: "127 AVENUE B",
    data: 1003910001
  },
  {
    value: "127 AVENUE C",
    data: 1003910038
  },
  {
    value: "127 AVENUE D",
    data: 1003780032
  },
  {
    value: "127 AVENUE D",
    data: 1003780032
  },
  {
    value: "127 DIVISION STREET",
    data: 1002830085
  },
  {
    value: "127 EAST 10 STREET",
    data: 1004660044
  },
  {
    value: "127 EAST 101 STREET",
    data: 1016290011
  },
  {
    value: "127 EAST 101 STREET",
    data: 1016290011
  },
  {
    value: "127 EAST 102 STREET",
    data: 1016300014
  },
  {
    value: "127 EAST 102 STREET",
    data: 1016300014
  },
  {
    value: "127 EAST 104 STREET",
    data: 1016320011
  },
  {
    value: "127 EAST 106 STREET",
    data: 1016340113
  },
  {
    value: "127 EAST 107 STREET",
    data: 1016350017
  },
  {
    value: "127 EAST 107 STREET",
    data: 1016350017
  },
  {
    value: "127 EAST 110 STREET",
    data: 1016380011
  },
  {
    value: "127 EAST 110 STREET",
    data: 1016380011
  },
  {
    value: "127 EAST 117 STREET",
    data: 1016450012
  },
  {
    value: "127 EAST 117 STREET",
    data: 1016450012
  },
  {
    value: "127 EAST 119 STREET",
    data: 1017680111
  },
  {
    value: "127 EAST 125 STREET",
    data: 1017740017
  },
  {
    value: "127 EAST 15 STREET",
    data: 1008710027
  },
  {
    value: "127 EAST 19 STREET",
    data: 1008750027
  },
  {
    value: "127 EAST 23 STREET",
    data: 1008790015
  },
  {
    value: "127 EAST 26 STREET",
    data: 1008820018
  },
  {
    value: "127 EAST 28 STREET",
    data: 1008840016
  },
  {
    value: "127 EAST 30 STREET",
    data: 1008867503
  },
  {
    value: "127 EAST 30 STREET",
    data: 1008867503
  },
  {
    value: "127 EAST 31 STREET",
    data: 1008870018
  },
  {
    value: "127 EAST 31 STREET",
    data: 1008870018
  },
  {
    value: "127 EAST 34 STREET",
    data: 1008900017
  },
  {
    value: "127 EAST 35 STREET",
    data: 1008910017
  },
  {
    value: "127 EAST 36 STREET",
    data: 1008920015
  },
  {
    value: "127 EAST 47 STREET",
    data: 1013020123
  },
  {
    value: "127 EAST 55 STREET",
    data: 1013100012
  },
  {
    value: "127 EAST 56 STREET",
    data: 1013110012
  },
  {
    value: "127 EAST 60 STREET",
    data: 1013950012
  },
  {
    value: "127 EAST 61 STREET",
    data: 1013960111
  },
  {
    value: "127 EAST 62 STREET",
    data: 1013970010
  },
  {
    value: "127 EAST 64 STREET",
    data: 1013997501
  },
  {
    value: "127 EAST 69 STREET",
    data: 1014040013
  },
  {
    value: "127 EAST 7 STREET",
    data: 1004350039
  },
  {
    value: "127 EAST 7 STREET",
    data: 1004350039
  },
  {
    value: "127 EAST 70 STREET",
    data: 1014050012
  },
  {
    value: "127 EAST 71 STREET",
    data: 1014060012
  },
  {
    value: "127 EAST 73 STREET",
    data: 1014080013
  },
  {
    value: "127 EAST 78 STREET",
    data: 1014130014
  },
  {
    value: "127 EAST 79 STREET",
    data: 1015087501
  },
  {
    value: "127 EAST 79 STREET",
    data: 1015087501
  },
  {
    value: "127 EAST 80 STREET",
    data: 1015090112
  },
  {
    value: "127 EAST 81 STREET",
    data: 1015100113
  },
  {
    value: "127 EAST 82 STREET",
    data: 1015110014
  },
  {
    value: "127 EAST 83 STREET",
    data: 1015120014
  },
  {
    value: "127 EAST 88 STREET",
    data: 1015170016
  },
  {
    value: "127 EAST 88 STREET",
    data: 1015170016
  },
  {
    value: "127 EAST 90 STREET",
    data: 1015190014
  },
  {
    value: "127 EAST 91 STREET",
    data: 1015200111
  },
  {
    value: "127 EAST 92 STREET",
    data: 1015210013
  },
  {
    value: "127 EAST 94 STREET",
    data: 1015230010
  },
  {
    value: "127 EAST 95 STREET",
    data: 1015240110
  },
  {
    value: "127 EAST BROADWAY",
    data: 1002830041
  },
  {
    value: "127 EDGECOMBE AVENUE",
    data: 1020480039
  },
  {
    value: "127 GREENE STREET",
    data: 1005140031
  },
  {
    value: "127 HENRY STREET",
    data: 1002830010
  },
  {
    value: "127 HENRY STREET",
    data: 1002830010
  },
  {
    value: "127 JOHN STREET",
    data: 1000750001
  },
  {
    value: "127 JOHN STREET",
    data: 1000750001
  },
  {
    value: "127 LEXINGTON AVENUE",
    data: 1008840022
  },
  {
    value: "127 MAC DOUGAL STREET",
    data: 1005430059
  },
  {
    value: "127 MADISON AVENUE",
    data: 1008607503
  },
  {
    value: "127 MADISON STREET",
    data: 1002750002
  },
  {
    value: "127 MANHATTAN AVENUE",
    data: 1018410115
  },
  {
    value: "127 MARBLE HILL AVENUE",
    data: 1022150089
  },
  {
    value: "127 MERCER STREET",
    data: 1004997501
  },
  {
    value: "127 MERCER STREET",
    data: 1004997501
  },
  {
    value: "127 MOTT STREET",
    data: 1002370027
  },
  {
    value: "127 MOTT STREET",
    data: 1002370027
  },
  {
    value: "127 ORCHARD STREET",
    data: 1004150072
  },
  {
    value: "127 ORCHARD STREET",
    data: 1004150072
  },
  {
    value: "127 POST AVENUE",
    data: 1022190016
  },
  {
    value: "127 PRINCE STREET",
    data: 1005150037
  },
  {
    value: "127 PRINCE STREET",
    data: 1005150037
  },
  {
    value: "127 RIVERSIDE DRIVE",
    data: 1012460057
  },
  {
    value: "127 RIVERSIDE DRIVE",
    data: 1012460057
  },
  {
    value: "127 RIVINGTON STREET",
    data: 1003530023
  },
  {
    value: "127 RIVINGTON STREET",
    data: 1003530023
  },
  {
    value: "127 STANTON STREET",
    data: 1003540015
  },
  {
    value: "127 VERMILYEA AVENUE",
    data: 1022260016
  },
  {
    value: "127 VERMILYEA AVENUE",
    data: 1022260016
  },
  {
    value: "127 WAVERLY PLACE",
    data: 1005530044
  },
  {
    value: "127 WEST 106 STREET",
    data: 1018610020
  },
  {
    value: "127 WEST 11 STREET",
    data: 1006070059
  },
  {
    value: "127 WEST 111 STREET",
    data: 1018210014
  },
  {
    value: "127 WEST 111 STREET",
    data: 1018210014
  },
  {
    value: "127 WEST 115 STREET",
    data: 1018250017
  },
  {
    value: "127 WEST 117 STREET",
    data: 1019020119
  },
  {
    value: "127 WEST 118 STREET",
    data: 1019030117
  },
  {
    value: "127 WEST 119 STREET",
    data: 1019040118
  },
  {
    value: "127 WEST 12 STREET",
    data: 1006080056
  },
  {
    value: "127 WEST 120 STREET",
    data: 1019050017
  },
  {
    value: "127 WEST 122 STREET",
    data: 1019070019
  },
  {
    value: "127 WEST 123 STREET",
    data: 1019080019
  },
  {
    value: "127 WEST 126 STREET",
    data: 1019110119
  },
  {
    value: "127 WEST 126 STREET",
    data: 1019110119
  },
  {
    value: "127 WEST 128 STREET",
    data: 1019130017
  },
  {
    value: "127 WEST 129 STREET",
    data: 1019140021
  },
  {
    value: "127 WEST 130 STREET",
    data: 1019150018
  },
  {
    value: "127 WEST 131 STREET",
    data: 1019160020
  },
  {
    value: "127 WEST 132 STREET",
    data: 1019170020
  },
  {
    value: "127 WEST 133 STREET",
    data: 1019180019
  },
  {
    value: "127 WEST 133 STREET",
    data: 1019180019
  },
  {
    value: "127 WEST 135 STREET",
    data: 1019200017
  },
  {
    value: "127 WEST 135 STREET",
    data: 1019200017
  },
  {
    value: "127 WEST 136 STREET",
    data: 1019210020
  },
  {
    value: "127 WEST 137 STREET",
    data: 1020060016
  },
  {
    value: "127 WEST 138 STREET",
    data: 1020070014
  },
  {
    value: "127 WEST 141 STREET",
    data: 1020100011
  },
  {
    value: "127 WEST 141 STREET",
    data: 1020100011
  },
  {
    value: "127 WEST 15 STREET",
    data: 1007910025
  },
  {
    value: "127 WEST 20 STREET",
    data: 1007960022
  },
  {
    value: "127 WEST 227 STREET",
    data: 1022150313
  },
  {
    value: "127 WEST 24 STREET",
    data: 1008000023
  },
  {
    value: "127 WEST 25 STREET",
    data: 1008017503
  },
  {
    value: "127 WEST 26 STREET",
    data: 1008020022
  },
  {
    value: "127 WEST 28 STREET",
    data: 1008040020
  },
  {
    value: "127 WEST 43 STREET",
    data: 1009960014
  },
  {
    value: "127 WEST 55 STREET",
    data: 1010080019
  },
  {
    value: "127 WEST 56 STREET",
    data: 1010090017
  },
  {
    value: "127 WEST 56 STREET",
    data: 1010099017
  },
  {
    value: "127 WEST 69 STREET",
    data: 1011410022
  },
  {
    value: "127 WEST 70 STREET",
    data: 1011420022
  },
  {
    value: "127 WEST 72 STREET",
    data: 1011440022
  },
  {
    value: "127 WEST 75 STREET",
    data: 1011470118
  },
  {
    value: "127 WEST 77 STREET",
    data: 1011497502
  },
  {
    value: "127 WEST 78 STREET",
    data: 1011500020
  },
  {
    value: "127 WEST 79 STREET",
    data: 1012100019
  },
  {
    value: "127 WEST 79 STREET",
    data: 1012100019
  },
  {
    value: "127 WEST 80 STREET",
    data: 1012110024
  },
  {
    value: "127 WEST 81 STREET",
    data: 1012120023
  },
  {
    value: "127 WEST 85 STREET",
    data: 1012160019
  },
  {
    value: "127 WEST 86 STREET",
    data: 1012170022
  },
  {
    value: "127 WEST 87 STREET",
    data: 1012180023
  },
  {
    value: "127 WEST 88 STREET",
    data: 1012190019
  },
  {
    value: "127 WEST 89 STREET",
    data: 1012207501
  },
  {
    value: "127 WEST 92 STREET",
    data: 1012230020
  },
  {
    value: "127 WEST 94 STREET",
    data: 1012250021
  },
  {
    value: "127 WEST 95 STREET",
    data: 1012260021
  },
  {
    value: "127 WEST 96 STREET",
    data: 1018510012
  },
  {
    value: "127 WEST 96 STREET",
    data: 1018510012
  },
  {
    value: "1270 1 AVENUE",
    data: 1014630003
  },
  {
    value: "1270 1 AVENUE",
    data: 1014630003
  },
  {
    value: "1270 3 AVENUE",
    data: 1014080033
  },
  {
    value: "1270 3 AVENUE",
    data: 1014080033
  },
  {
    value: "1270 5 AVENUE",
    data: 1016140001
  },
  {
    value: "1270 5 AVENUE",
    data: 1016140001
  },
  {
    value: "1270 AMSTERDAM AVENUE",
    data: 1019770034
  },
  {
    value: "1270 AMSTERDAM AVENUE",
    data: 1019770034
  },
  {
    value: "1270 BROADWAY",
    data: 1008340080
  },
  {
    value: "1270 ST NICHOLAS AVENUE",
    data: 1021300008
  },
  {
    value: "1270 ST NICHOLAS AVENUE",
    data: 1021300008
  },
  {
    value: "1271 3 AVENUE",
    data: 1014280001
  },
  {
    value: "1271 3 AVENUE",
    data: 1014280001
  },
  {
    value: "1271 BROADWAY",
    data: 1008330078
  },
  {
    value: "1271 ST NICHOLAS AVENUE",
    data: 1021430013
  },
  {
    value: "1271 ST NICHOLAS AVENUE",
    data: 1021430013
  },
  {
    value: "1272 AMSTERDAM AVENUE",
    data: 1019770035
  },
  {
    value: "1272 AMSTERDAM AVENUE",
    data: 1019770035
  },
  {
    value: "1273 1 AVENUE",
    data: 1014430027
  },
  {
    value: "1273 1 AVENUE",
    data: 1014430027
  },
  {
    value: "1274 1 AVENUE",
    data: 1014630048
  },
  {
    value: "1274 1 AVENUE",
    data: 1014630048
  },
  {
    value: "1274 5 AVENUE",
    data: 1016140069
  },
  {
    value: "1274 5 AVENUE",
    data: 1016140069
  },
  {
    value: "1274 AMSTERDAM AVENUE",
    data: 1019770036
  },
  {
    value: "1274 AMSTERDAM AVENUE",
    data: 1019770036
  },
  {
    value: "1274 MADISON AVENUE",
    data: 1015030014
  },
  {
    value: "1274 MADISON AVENUE",
    data: 1015030014
  },
  {
    value: "1275 3 AVENUE",
    data: 1014280003
  },
  {
    value: "1275 BROADWAY",
    data: 1008080040
  },
  {
    value: "1275 YORK AVENUE",
    data: 1014620005
  },
  {
    value: "1277 3 AVENUE",
    data: 1014280004
  },
  {
    value: "1277 3 AVENUE",
    data: 1014280004
  },
  {
    value: "1278 1 AVENUE",
    data: 1014630047
  },
  {
    value: "1278 1 AVENUE",
    data: 1014630047
  },
  {
    value: "1279 1 AVENUE",
    data: 1014430030
  },
  {
    value: "1279 1 AVENUE",
    data: 1014430030
  },
  {
    value: "128 1 AVENUE",
    data: 1004350007
  },
  {
    value: "128 10 AVENUE",
    data: 1007150063
  },
  {
    value: "128 2 AVENUE",
    data: 1004490006
  },
  {
    value: "128 2 AVENUE",
    data: 1004490006
  },
  {
    value: "128 7 AVENUE",
    data: 1007670043
  },
  {
    value: "128 7 AVENUE",
    data: 1007670043
  },
  {
    value: "128 9 AVENUE",
    data: 1007420001
  },
  {
    value: "128 AUDUBON AVENUE",
    data: 1021280015
  },
  {
    value: "128 AUDUBON AVENUE",
    data: 1021280015
  },
  {
    value: "128 AVENUE OF THE AMERIC",
    data: 1004900029
  },
  {
    value: "128 BANK STREET",
    data: 1006340011
  },
  {
    value: "128 BAXTER STREET",
    data: 1002070014
  },
  {
    value: "128 CENTRAL PARK SOUTH",
    data: 1010110045
  },
  {
    value: "128 CENTRAL PARK SOUTH",
    data: 1010110045
  },
  {
    value: "128 DELANCEY STREET",
    data: 1003530040
  },
  {
    value: "128 DYCKMAN STREET",
    data: 1021740054
  },
  {
    value: "128 EAST 10 STREET",
    data: 1004650021
  },
  {
    value: "128 EAST 111 STREET",
    data: 1016380062
  },
  {
    value: "128 EAST 125 STREET",
    data: 1017730058
  },
  {
    value: "128 EAST 16 STREET",
    data: 1008710056
  },
  {
    value: "128 EAST 16 STREET",
    data: 1008710056
  },
  {
    value: "128 EAST 19 STREET",
    data: 1008740057
  },
  {
    value: "128 EAST 28 STREET",
    data: 1008830076
  },
  {
    value: "128 EAST 29 STREET",
    data: 1008840070
  },
  {
    value: "128 EAST 31 STREET",
    data: 1008860072
  },
  {
    value: "128 EAST 35 STREET",
    data: 1008900073
  },
  {
    value: "128 EAST 36 STREET",
    data: 1008910074
  },
  {
    value: "128 EAST 37 STREET",
    data: 1008920069
  },
  {
    value: "128 EAST 38 STREET",
    data: 1008930075
  },
  {
    value: "128 EAST 4 STREET",
    data: 1004450030
  },
  {
    value: "128 EAST 56 STREET",
    data: 1013100061
  },
  {
    value: "128 EAST 61 STREET",
    data: 1013950061
  },
  {
    value: "128 EAST 62 STREET",
    data: 1013960061
  },
  {
    value: "128 EAST 63 STREET",
    data: 1013970060
  },
  {
    value: "128 EAST 64 STREET",
    data: 1013980062
  },
  {
    value: "128 EAST 65 STREET",
    data: 1013990061
  },
  {
    value: "128 EAST 7 STREET",
    data: 1004347502
  },
  {
    value: "128 EAST 70 STREET",
    data: 1014040060
  },
  {
    value: "128 EAST 71 STREET",
    data: 1014050161
  },
  {
    value: "128 EAST 72 STREET",
    data: 1014060063
  },
  {
    value: "128 EAST 73 STREET",
    data: 1014070062
  },
  {
    value: "128 EAST 74 STREET",
    data: 1014080062
  },
  {
    value: "128 EAST 83 STREET",
    data: 1015110059
  },
  {
    value: "128 EAST 83 STREET",
    data: 1015110059
  },
  {
    value: "128 EAST 84 STREET",
    data: 1015120058
  },
  {
    value: "128 EAST 84 STREET",
    data: 1015120058
  },
  {
    value: "128 EAST 85 STREET",
    data: 1015130059
  },
  {
    value: "128 EAST 85 STREET",
    data: 1015130059
  },
  {
    value: "128 EAST 86 STREET",
    data: 1015140058
  },
  {
    value: "128 EAST 86 STREET",
    data: 1015140058
  },
  {
    value: "128 EAST 92 STREET",
    data: 1015200061
  },
  {
    value: "128 EAST 93 STREET",
    data: 1015210061
  },
  {
    value: "128 EAST 95 STREET",
    data: 1015230063
  },
  {
    value: "128 EAST 96 STREET",
    data: 1015240062
  },
  {
    value: "128 EAST 96 STREET",
    data: 1015240062
  },
  {
    value: "128 EAST BROADWAY",
    data: 1002830055
  },
  {
    value: "128 EDGECOMBE AVENUE",
    data: 1020430001
  },
  {
    value: "128 ELDRIDGE STREET",
    data: 1004140032
  },
  {
    value: "128 ELDRIDGE STREET",
    data: 1004140032
  },
  {
    value: "128 HESTER STREET",
    data: 1003030018
  },
  {
    value: "128 JANE STREET",
    data: 1006410010
  },
  {
    value: "128 JANE STREET",
    data: 1006410010
  },
  {
    value: "128 MAC DOUGAL STREET",
    data: 1005400013
  },
  {
    value: "128 MAC DOUGAL STREET",
    data: 1005400013
  },
  {
    value: "128 MADISON AVENUE",
    data: 1008600064
  },
  {
    value: "128 MANHATTAN AVENUE",
    data: 1018410016
  },
  {
    value: "128 MOTT STREET",
    data: 1002387501
  },
  {
    value: "128 PARK ROW",
    data: 1001590040
  },
  {
    value: "128 RIVINGTON STREET",
    data: 1003540031
  },
  {
    value: "128 RIVINGTON STREET",
    data: 1003540031
  },
  {
    value: "128 SEAMAN AVENUE",
    data: 1022480092
  },
  {
    value: "128 SEAMAN AVENUE",
    data: 1022480092
  },
  {
    value: "128 SHERMAN AVENUE",
    data: 1022240033
  },
  {
    value: "128 SHERMAN AVENUE",
    data: 1022240033
  },
  {
    value: "128 ST MARKS PLACE",
    data: 1004350028
  },
  {
    value: "128 ST MARKS PLACE",
    data: 1004350028
  },
  {
    value: "128 THOMPSON STREET",
    data: 1005160002
  },
  {
    value: "128 THOMPSON STREET",
    data: 1005160002
  },
  {
    value: "128 WEST 111 STREET",
    data: 1018207504
  },
  {
    value: "128 WEST 112 STREET",
    data: 1018210052
  },
  {
    value: "128 WEST 112 STREET",
    data: 1018210052
  },
  {
    value: "128 WEST 116 STREET",
    data: 1018250049
  },
  {
    value: "128 WEST 116 STREET",
    data: 1018250049
  },
  {
    value: "128 WEST 117 STREET",
    data: 1019010045
  },
  {
    value: "128 WEST 118 STREET",
    data: 1019020046
  },
  {
    value: "128 WEST 119 STREET",
    data: 1019030147
  },
  {
    value: "128 WEST 120 STREET",
    data: 1019040047
  },
  {
    value: "128 WEST 121 STREET",
    data: 1019050047
  },
  {
    value: "128 WEST 123 STREET",
    data: 1019070047
  },
  {
    value: "128 WEST 124 STREET",
    data: 1019080045
  },
  {
    value: "128 WEST 128 STREET",
    data: 1019120043
  },
  {
    value: "128 WEST 128 STREET",
    data: 1019120043
  },
  {
    value: "128 WEST 129 STREET",
    data: 1019130045
  },
  {
    value: "128 WEST 13 STREET",
    data: 1006080024
  },
  {
    value: "128 WEST 13 STREET",
    data: 1006080024
  },
  {
    value: "128 WEST 130 STREET",
    data: 1019140045
  },
  {
    value: "128 WEST 131 STREET",
    data: 1019150146
  },
  {
    value: "128 WEST 132 STREET",
    data: 1019160046
  },
  {
    value: "128 WEST 134 STREET",
    data: 1019180052
  },
  {
    value: "128 WEST 136 STREET",
    data: 1019200045
  },
  {
    value: "128 WEST 138 STREET",
    data: 1020060049
  },
  {
    value: "128 WEST 138 STREET",
    data: 1020060049
  },
  {
    value: "128 WEST 139 STREET",
    data: 1020070052
  },
  {
    value: "128 WEST 17 STREET",
    data: 1007920053
  },
  {
    value: "128 WEST 23 STREET",
    data: 1007980059
  },
  {
    value: "128 WEST 26 STREET",
    data: 1008010058
  },
  {
    value: "128 WEST 31 STREET",
    data: 1008060058
  },
  {
    value: "128 WEST 34 STREET",
    data: 1008090061
  },
  {
    value: "128 WEST 36 STREET",
    data: 1008110049
  },
  {
    value: "128 WEST 37 STREET",
    data: 1008120161
  },
  {
    value: "128 WEST 47 STREET",
    data: 1009990046
  },
  {
    value: "128 WEST 70 STREET",
    data: 1011410043
  },
  {
    value: "128 WEST 71 STREET",
    data: 1011420044
  },
  {
    value: "128 WEST 72 STREET",
    data: 1011430044
  },
  {
    value: "128 WEST 73 STREET",
    data: 1011440044
  },
  {
    value: "128 WEST 74 STREET",
    data: 1011450044
  },
  {
    value: "128 WEST 74 STREET",
    data: 1011450044
  },
  {
    value: "128 WEST 75 STREET",
    data: 1011460047
  },
  {
    value: "128 WEST 78 STREET",
    data: 1011490145
  },
  {
    value: "128 WEST 80 STREET",
    data: 1012100047
  },
  {
    value: "128 WEST 81 STREET",
    data: 1012110145
  },
  {
    value: "128 WEST 82 STREET",
    data: 1012120045
  },
  {
    value: "128 WEST 87 STREET",
    data: 1012170044
  },
  {
    value: "128 WEST 95 STREET",
    data: 1012250045
  },
  {
    value: "128 WEST HOUSTON STREET",
    data: 1005250032
  },
  {
    value: "128 WEST WASHINGTON PLCE",
    data: 1005920005
  },
  {
    value: "128 WOOSTER STREET",
    data: 1005000015
  },
  {
    value: "1280 3 AVENUE",
    data: 1014080040
  },
  {
    value: "1280 3 AVENUE",
    data: 1014080040
  },
  {
    value: "1280 5 AVENUE",
    data: 1016157501
  },
  {
    value: "1280 5 AVENUE",
    data: 1016157501
  },
  {
    value: "1281 PARK AVENUE",
    data: 1016260001
  },
  {
    value: "1281 PARK AVENUE",
    data: 1016260001
  },
  {
    value: "1281 ST NICHOLAS AVENUE",
    data: 1021430056
  },
  {
    value: "1281 ST NICHOLAS AVENUE",
    data: 1021430056
  },
  {
    value: "1282 1 AVENUE",
    data: 1014630045
  },
  {
    value: "1282 1 AVENUE",
    data: 1014630045
  },
  {
    value: "1282 BROADWAY",
    data: 1008350001
  },
  {
    value: "1282 BROADWAY",
    data: 1008350001
  },
  {
    value: "1283 2 AVENUE",
    data: 1014220021
  },
  {
    value: "1283 2 AVENUE",
    data: 1014220021
  },
  {
    value: "1283 MADISON AVENUE",
    data: 1015030020
  },
  {
    value: "1285 1 AVENUE",
    data: 1014440023
  },
  {
    value: "1285 1 AVENUE",
    data: 1014440023
  },
  {
    value: "1285 3 AVENUE",
    data: 1014280045
  },
  {
    value: "1285 3 AVENUE",
    data: 1014280045
  },
  {
    value: "1285 AVENUE OF THE AMER",
    data: 1010040029
  },
  {
    value: "1285 MADISON AVENUE",
    data: 1015030055
  },
  {
    value: "1286 1 AVENUE",
    data: 1014640001
  },
  {
    value: "1287 MADISON AVENUE",
    data: 1015030054
  },
  {
    value: "1289 MADISON AVENUE",
    data: 1015030053
  },
  {
    value: "129 1 AVENUE",
    data: 1004490031
  },
  {
    value: "129 2 AVENUE",
    data: 1004630030
  },
  {
    value: "129 2 AVENUE",
    data: 1004630030
  },
  {
    value: "129 5 AVENUE",
    data: 1008480074
  },
  {
    value: "129 5 AVENUE",
    data: 1008480074
  },
  {
    value: "129 ALLEN STREET",
    data: 1004150031
  },
  {
    value: "129 ALLEN STREET",
    data: 1004150031
  },
  {
    value: "129 AVENUE C",
    data: 1003910037
  },
  {
    value: "129 AVENUE D",
    data: 1003780031
  },
  {
    value: "129 AVENUE D",
    data: 1003780031
  },
  {
    value: "129 BANK STREET",
    data: 1006350046
  },
  {
    value: "129 BOWERY",
    data: 1004230001
  },
  {
    value: "129 CHARLES STREET",
    data: 1006320029
  },
  {
    value: "129 CROSBY STREET",
    data: 1005100037
  },
  {
    value: "129 CROSBY STREET",
    data: 1005100037
  },
  {
    value: "129 DUANE STREET",
    data: 1001477505
  },
  {
    value: "129 EAST 10 STREET",
    data: 1004660043
  },
  {
    value: "129 EAST 10 STREET",
    data: 1004660043
  },
  {
    value: "129 EAST 101 STREET",
    data: 1016290012
  },
  {
    value: "129 EAST 106 STREET",
    data: 1016340014
  },
  {
    value: "129 EAST 110 STREET",
    data: 1016380012
  },
  {
    value: "129 EAST 123 STREET",
    data: 1017720013
  },
  {
    value: "129 EAST 123 STREET",
    data: 1017720013
  },
  {
    value: "129 EAST 124 STREET",
    data: 1017730015
  },
  {
    value: "129 EAST 15 STREET",
    data: 1008710028
  },
  {
    value: "129 EAST 17 STREET",
    data: 1008730025
  },
  {
    value: "129 EAST 19 STREET",
    data: 1008750028
  },
  {
    value: "129 EAST 27 STREET",
    data: 1008830018
  },
  {
    value: "129 EAST 35 STREET",
    data: 1008910018
  },
  {
    value: "129 EAST 36 STREET",
    data: 1008920016
  },
  {
    value: "129 EAST 4 STREET",
    data: 1004460037
  },
  {
    value: "129 EAST 4 STREET",
    data: 1004460037
  },
  {
    value: "129 EAST 47 STREET",
    data: 1013020024
  },
  {
    value: "129 EAST 56 STREET",
    data: 1013110013
  },
  {
    value: "129 EAST 60 STREET",
    data: 1013950013
  },
  {
    value: "129 EAST 61 STREET",
    data: 1013960012
  },
  {
    value: "129 EAST 62 STREET",
    data: 1013970011
  },
  {
    value: "129 EAST 64 STREET",
    data: 1013990111
  },
  {
    value: "129 EAST 7 STREET",
    data: 1004350038
  },
  {
    value: "129 EAST 70 STREET",
    data: 1014050013
  },
  {
    value: "129 EAST 71 STREET",
    data: 1014060013
  },
  {
    value: "129 EAST 73 STREET",
    data: 1014080014
  },
  {
    value: "129 EAST 74 STREET",
    data: 1014090111
  },
  {
    value: "129 EAST 80 STREET",
    data: 1015090013
  },
  {
    value: "129 EAST 81 STREET",
    data: 1015100014
  },
  {
    value: "129 EAST 82 STREET",
    data: 1015117501
  },
  {
    value: "129 EAST 82 STREET",
    data: 1015117501
  },
  {
    value: "129 EAST 90 STREET",
    data: 1015190015
  },
  {
    value: "129 EAST 90 STREET",
    data: 1015190015
  },
  {
    value: "129 EAST 91 STREET",
    data: 1015200012
  },
  {
    value: "129 EAST 92 STREET",
    data: 1015210014
  },
  {
    value: "129 EAST 94 STREET",
    data: 1015230011
  },
  {
    value: "129 EAST 95 STREET",
    data: 1015240011
  },
  {
    value: "129 EAST BROADWAY",
    data: 1002830040
  },
  {
    value: "129 EAST BROADWAY",
    data: 1002830040
  },
  {
    value: "129 EDGECOMBE AVENUE",
    data: 1020480040
  },
  {
    value: "129 ELDRIDGE STREET",
    data: 1004190070
  },
  {
    value: "129 FRONT STREET",
    data: 1000370013
  },
  {
    value: "129 GRAND STREET",
    data: 1002327501
  },
  {
    value: "129 GREENE STREET",
    data: 1005147502
  },
  {
    value: "129 HENRY STREET",
    data: 1002830011
  },
  {
    value: "129 LAFAYETTE STREET",
    data: 1002087501
  },
  {
    value: "129 LAFAYETTE STREET",
    data: 1002087501
  },
  {
    value: "129 LEXINGTON AVENUE",
    data: 1008840063
  },
  {
    value: "129 MAC DOUGAL STREET",
    data: 1005430058
  },
  {
    value: "129 MADISON AVENUE",
    data: 1008600061
  },
  {
    value: "129 MANHATTAN AVENUE",
    data: 1018410014
  },
  {
    value: "129 MOTT STREET",
    data: 1002370026
  },
  {
    value: "129 MOTT STREET",
    data: 1002370026
  },
  {
    value: "129 PERRY STREET",
    data: 1006330027
  },
  {
    value: "129 PERRY STREET",
    data: 1006330027
  },
  {
    value: "129 POST AVENUE",
    data: 1022190017
  },
  {
    value: "129 RIDGE STREET",
    data: 1003440017
  },
  {
    value: "129 RIDGE STREET",
    data: 1003440017
  },
  {
    value: "129 RIVINGTON STREET",
    data: 1003530024
  },
  {
    value: "129 RIVINGTON STREET",
    data: 1003530024
  },
  {
    value: "129 SHERMAN AVENUE",
    data: 1022200021
  },
  {
    value: "129 SHERMAN AVENUE",
    data: 1022200021
  },
  {
    value: "129 SPRING STREET",
    data: 1005000035
  },
  {
    value: "129 SULLIVAN STREET",
    data: 1005030017
  },
  {
    value: "129 TERRACE VIEW AVENUE",
    data: 1022150051
  },
  {
    value: "129 WADSWORTH AVENUE",
    data: 1021620032
  },
  {
    value: "129 WEST 11 STREET",
    data: 1006070060
  },
  {
    value: "129 WEST 112 STREET",
    data: 1018220012
  },
  {
    value: "129 WEST 116 STREET",
    data: 1019010018
  },
  {
    value: "129 WEST 117 STREET",
    data: 1019020116
  },
  {
    value: "129 WEST 118 STREET",
    data: 1019037504
  },
  {
    value: "129 WEST 119 STREET",
    data: 1019040018
  },
  {
    value: "129 WEST 12 STREET",
    data: 1006080057
  },
  {
    value: "129 WEST 120 STREET",
    data: 1019050016
  },
  {
    value: "129 WEST 122 STREET",
    data: 1019070018
  },
  {
    value: "129 WEST 123 STREET",
    data: 1019087505
  },
  {
    value: "129 WEST 126 STREET",
    data: 1019110019
  },
  {
    value: "129 WEST 128 STREET",
    data: 1019130016
  },
  {
    value: "129 WEST 128 STREET",
    data: 1019130016
  },
  {
    value: "129 WEST 129 STREET",
    data: 1019140020
  },
  {
    value: "129 WEST 130 STREET",
    data: 1019150017
  },
  {
    value: "129 WEST 131 STREET",
    data: 1019160019
  },
  {
    value: "129 WEST 131 STREET",
    data: 1019160019
  },
  {
    value: "129 WEST 132 STREET",
    data: 1019170119
  },
  {
    value: "129 WEST 133 STREET",
    data: 1019180018
  },
  {
    value: "129 WEST 133 STREET",
    data: 1019180018
  },
  {
    value: "129 WEST 136 STREET",
    data: 1019210019
  },
  {
    value: "129 WEST 137 STREET",
    data: 1020060015
  },
  {
    value: "129 WEST 142 STREET",
    data: 1020110022
  },
  {
    value: "129 WEST 142 STREET",
    data: 1020110022
  },
  {
    value: "129 WEST 144 STREET",
    data: 1020130016
  },
  {
    value: "129 WEST 144 STREET",
    data: 1020130016
  },
  {
    value: "129 WEST 15 STREET",
    data: 1007910024
  },
  {
    value: "129 WEST 20 STREET",
    data: 1007967503
  },
  {
    value: "129 WEST 20 STREET",
    data: 1007967503
  },
  {
    value: "129 WEST 22 STREET",
    data: 1007980026
  },
  {
    value: "129 WEST 22 STREET",
    data: 1007980026
  },
  {
    value: "129 WEST 227 STREET",
    data: 1022150314
  },
  {
    value: "129 WEST 27 STREET",
    data: 1008030018
  },
  {
    value: "129 WEST 29 STREET",
    data: 1008050022
  },
  {
    value: "129 WEST 46 STREET",
    data: 1009990017
  },
  {
    value: "129 WEST 56 STREET",
    data: 1010090016
  },
  {
    value: "129 WEST 56 STREET",
    data: 1010099016
  },
  {
    value: "129 WEST 69 STREET",
    data: 1011410021
  },
  {
    value: "129 WEST 70 STREET",
    data: 1011420021
  },
  {
    value: "129 WEST 72 STREET",
    data: 1011440021
  },
  {
    value: "129 WEST 74 STREET",
    data: 1011460017
  },
  {
    value: "129 WEST 74 STREET",
    data: 1011460017
  },
  {
    value: "129 WEST 75 STREET",
    data: 1011470018
  },
  {
    value: "129 WEST 77 STREET",
    data: 1011490020
  },
  {
    value: "129 WEST 78 STREET",
    data: 1011500119
  },
  {
    value: "129 WEST 80 STREET",
    data: 1012110023
  },
  {
    value: "129 WEST 81 STREET",
    data: 1012120022
  },
  {
    value: "129 WEST 81 STREET",
    data: 1012120022
  },
  {
    value: "129 WEST 85 STREET",
    data: 1012160018
  },
  {
    value: "129 WEST 86 STREET",
    data: 1012170021
  },
  {
    value: "129 WEST 87 STREET",
    data: 1012180122
  },
  {
    value: "129 WEST 88 STREET",
    data: 1012190118
  },
  {
    value: "129 WEST 92 STREET",
    data: 1012230005
  },
  {
    value: "129 WEST 94 STREET",
    data: 1012250020
  },
  {
    value: "129 WEST 95 STREET",
    data: 1012260020
  },
  {
    value: "129 WEST HOUSTON STREET",
    data: 1005180017
  },
  {
    value: "129 WEST WASHINGTON PLACE",
    data: 1005920082
  },
  {
    value: "129 WEST WASHINGTON PLCE",
    data: 1005920082
  },
  {
    value: "1290 AVENUE OF THE AMER",
    data: 1012670001
  },
  {
    value: "1290 LEXINGTON AVENUE",
    data: 1015160013
  },
  {
    value: "1290 LEXINGTON AVENUE",
    data: 1015160013
  },
  {
    value: "1290 MADISON AVENUE",
    data: 1015030056
  },
  {
    value: "1290 MADISON AVENUE",
    data: 1015030056
  },
  {
    value: "1290 ST NICHOLAS AVENUE",
    data: 1021310004
  },
  {
    value: "1291 3 AVENUE",
    data: 1014290001
  },
  {
    value: "1291 3 AVENUE",
    data: 1014290001
  },
  {
    value: "1291 ST NICHOLAS AVENUE",
    data: 1021430055
  },
  {
    value: "1291 ST NICHOLAS AVENUE",
    data: 1021430055
  },
  {
    value: "1293 1 AVENUE",
    data: 1014440027
  },
  {
    value: "1293 MADISON AVENUE",
    data: 1015030051
  },
  {
    value: "1293 MADISON AVENUE",
    data: 1015030051
  },
  {
    value: "1293 YORK AVENUE",
    data: 1014640021
  },
  {
    value: "1294 ST NICHOLAS AVENUE",
    data: 1021310008
  },
  {
    value: "1295 1 AVENUE",
    data: 1014440028
  },
  {
    value: "1295 1 AVENUE",
    data: 1014440028
  },
  {
    value: "1295 3 AVENUE",
    data: 1014290002
  },
  {
    value: "1295 3 AVENUE",
    data: 1014290002
  },
  {
    value: "1296 2 AVENUE",
    data: 1014430001
  },
  {
    value: "1296 2 AVENUE",
    data: 1014430001
  },
  {
    value: "1296 3 AVENUE",
    data: 1014090040
  },
  {
    value: "1296 3 AVENUE",
    data: 1014090040
  },
  {
    value: "1296 MADISON AVENUE",
    data: 1015040015
  },
  {
    value: "1297 1 AVENUE",
    data: 1014440029
  },
  {
    value: "1297 3 AVENUE",
    data: 1014290003
  },
  {
    value: "1297 LEXINGTON AVENUE",
    data: 1015160020
  },
  {
    value: "1297 LEXINGTON AVENUE",
    data: 1015160020
  },
  {
    value: "1298 MADISON AVENUE",
    data: 1015040016
  },
  {
    value: "1299 1 AVENUE",
    data: 1014440030
  },
  {
    value: "1299 2 AVENUE",
    data: 1014230010
  },
  {
    value: "1299 3 AVENUE",
    data: 1014290004
  },
  {
    value: "13 7 AVENUE SOUTH",
    data: 1005820025
  },
  {
    value: "13 8 AVENUE",
    data: 1006250043
  },
  {
    value: "13 AVENUE A",
    data: 1004290038
  },
  {
    value: "13 AVENUE B",
    data: 1003840008
  },
  {
    value: "13 BANK STREET",
    data: 1006150042
  },
  {
    value: "13 BLEECKER STREET",
    data: 1005290048
  },
  {
    value: "13 CARMINE STREET",
    data: 1005890047
  },
  {
    value: "13 CARMINE STREET",
    data: 1005890047
  },
  {
    value: "13 CHATHAM SQUARE",
    data: 1001620034
  },
  {
    value: "13 CHRISTOPHER STREET",
    data: 1006100066
  },
  {
    value: "13 CLINTON STREET",
    data: 1003500023
  },
  {
    value: "13 CLINTON STREET",
    data: 1003500023
  },
  {
    value: "13 COMMERCE STREET",
    data: 1005870064
  },
  {
    value: "13 CORNELIA STREET",
    data: 1005900037
  },
  {
    value: "13 CROSBY STREET",
    data: 1002330004
  },
  {
    value: "13 CUMMING STREET",
    data: 1022370064
  },
  {
    value: "13 CUMMING STREET",
    data: 1022370064
  },
  {
    value: "13 DIVISION STREET",
    data: 1002810059
  },
  {
    value: "13 DOWNING STREET",
    data: 1005270084
  },
  {
    value: "13 DOWNING STREET",
    data: 1005270084
  },
  {
    value: "13 EAST 11 STREET",
    data: 1005697504
  },
  {
    value: "13 EAST 117 STREET",
    data: 1016230109
  },
  {
    value: "13 EAST 12 STREET",
    data: 1005700039
  },
  {
    value: "13 EAST 124 STREET",
    data: 1017490009
  },
  {
    value: "13 EAST 124 STREET",
    data: 1017490009
  },
  {
    value: "13 EAST 125 STREET",
    data: 1017500005
  },
  {
    value: "13 EAST 126 STREET",
    data: 1017510007
  },
  {
    value: "13 EAST 126 STREET",
    data: 1017510007
  },
  {
    value: "13 EAST 127 STREET",
    data: 1017520107
  },
  {
    value: "13 EAST 128 STREET",
    data: 1017530108
  },
  {
    value: "13 EAST 129 STREET",
    data: 1017540108
  },
  {
    value: "13 EAST 131 STREET",
    data: 1017567501
  },
  {
    value: "13 EAST 16 STREET",
    data: 1008447503
  },
  {
    value: "13 EAST 16 STREET",
    data: 1008447503
  },
  {
    value: "13 EAST 17 STREET",
    data: 1008460012
  },
  {
    value: "13 EAST 20 STREET",
    data: 1008750073
  },
  {
    value: "13 EAST 3 STREET",
    data: 1004590043
  },
  {
    value: "13 EAST 30 STREET",
    data: 1008607502
  },
  {
    value: "13 EAST 37 STREET",
    data: 1008670012
  },
  {
    value: "13 EAST 40 STREET",
    data: 1012750011
  },
  {
    value: "13 EAST 47 STREET",
    data: 1012830011
  },
  {
    value: "13 EAST 63 STREET",
    data: 1013780010
  },
  {
    value: "13 EAST 65 STREET",
    data: 1013800011
  },
  {
    value: "13 EAST 65 STREET",
    data: 1013800011
  },
  {
    value: "13 EAST 69 STREET",
    data: 1013840014
  },
  {
    value: "13 EAST 7 STREET",
    data: 1004630051
  },
  {
    value: "13 EAST 71 STREET",
    data: 1013860013
  },
  {
    value: "13 EAST 75 STREET",
    data: 1013900111
  },
  {
    value: "13 EAST 77 STREET",
    data: 1013920010
  },
  {
    value: "13 EAST 9 STREET",
    data: 1005670028
  },
  {
    value: "13 EAST 94 STREET",
    data: 1015060010
  },
  {
    value: "13 ELDRIDGE STREET",
    data: 1002920025
  },
  {
    value: "13 ELDRIDGE STREET",
    data: 1002920025
  },
  {
    value: "13 ELIZABETH STREET",
    data: 1002017501
  },
  {
    value: "13 ESSEX STREET",
    data: 1002970022
  },
  {
    value: "13 ESSEX STREET",
    data: 1002970022
  },
  {
    value: "13 GAY STREET",
    data: 1005930006
  },
  {
    value: "13 GOLD STREET",
    data: 1000680029
  },
  {
    value: "13 HAMILTON TERRACE",
    data: 1020500100
  },
  {
    value: "13 HAMILTON TERRACE",
    data: 1020500100
  },
  {
    value: "13 HARRISON STREET",
    data: 1001807506
  },
  {
    value: "13 HENRY STREET",
    data: 1002840001
  },
  {
    value: "13 JAY STREET",
    data: 1001800014
  },
  {
    value: "13 JONES STREET",
    data: 1005900079
  },
  {
    value: "13 JONES STREET",
    data: 1005900079
  },
  {
    value: "13 LEROY STREET",
    data: 1005860075
  },
  {
    value: "13 LITTLE WEST 12 ST",
    data: 1006450051
  },
  {
    value: "13 LUDLOW STREET",
    data: 1002980026
  },
  {
    value: "13 LUDLOW STREET",
    data: 1002980026
  },
  {
    value: "13 MAC DOUGAL ALLEY",
    data: 1005510124
  },
  {
    value: "13 MAGAW PLACE",
    data: 1021800020
  },
  {
    value: "13 MAGAW PLACE",
    data: 1021800020
  },
  {
    value: "13 MARKET STREET",
    data: 1002800025
  },
  {
    value: "13 MARKET STREET",
    data: 1002800025
  },
  {
    value: "13 MONROE STREET",
    data: 1002760006
  },
  {
    value: "13 MONROE STREET",
    data: 1002760006
  },
  {
    value: "13 MORTON STREET",
    data: 1005877502
  },
  {
    value: "13 MOTT STREET",
    data: 1001640049
  },
  {
    value: "13 MOTT STREET",
    data: 1001640049
  },
  {
    value: "13 MT MORRIS PARK WEST",
    data: 1017200053
  },
  {
    value: "13 OLD BROADWAY",
    data: 1019820049
  },
  {
    value: "13 OLIVER STREET",
    data: 1002790012
  },
  {
    value: "13 PELL STREET",
    data: 1001620050
  },
  {
    value: "13 PIKE STREET",
    data: 1002830045
  },
  {
    value: "13 PRINCE STREET",
    data: 1005070001
  },
  {
    value: "13 PRINCE STREET",
    data: 1005070001
  },
  {
    value: "13 REAR CORNELIA STREET",
    data: 1005900137
  },
  {
    value: "13 RECTOR STREET",
    data: 1000187501
  },
  {
    value: "13 SOUTH STREET",
    data: 1000360025
  },
  {
    value: "13 SOUTH WILLIAM STREET",
    data: 1000290045
  },
  {
    value: "13 SPRING STREET",
    data: 1004930041
  },
  {
    value: "13 SPRING STREET",
    data: 1004930041
  },
  {
    value: "13 ST MARKS PLACE",
    data: 1004640152
  },
  {
    value: "13 ST MARKS PLACE",
    data: 1004640152
  },
  {
    value: "13 STANTON STREET",
    data: 1004260022
  },
  {
    value: "13 STANTON STREET",
    data: 1004260022
  },
  {
    value: "13 SUTTON PLACE",
    data: 1013720032
  },
  {
    value: "13 SYLVAN TERRACE",
    data: 1021090074
  },
  {
    value: "13 UNIVERSITY PLACE",
    data: 1005480009
  },
  {
    value: "13 VAN CORLEAR PLACE",
    data: 1022150427
  },
  {
    value: "13 VANDAM STREET",
    data: 1005060046
  },
  {
    value: "13 WASHINGTON TERRACE",
    data: 1021560045
  },
  {
    value: "13 WEST 100 STREET",
    data: 1018360026
  },
  {
    value: "13 WEST 100 STREET",
    data: 1018360026
  },
  {
    value: "13 WEST 103 STREET",
    data: 1018390023
  },
  {
    value: "13 WEST 106 STREET",
    data: 1018420025
  },
  {
    value: "13 WEST 106 STREET",
    data: 1018420025
  },
  {
    value: "13 WEST 11 STREET",
    data: 1005750057
  },
  {
    value: "13 WEST 11 STREET",
    data: 1005750057
  },
  {
    value: "13 WEST 119 STREET",
    data: 1017180031
  },
  {
    value: "13 WEST 12 STREET",
    data: 1005760049
  },
  {
    value: "13 WEST 12 STREET",
    data: 1005760049
  },
  {
    value: "13 WEST 120 STREET",
    data: 1017200010
  },
  {
    value: "13 WEST 121 STREET",
    data: 1017200044
  },
  {
    value: "13 WEST 122 STREET",
    data: 1017210009
  },
  {
    value: "13 WEST 126 STREET",
    data: 1017240028
  },
  {
    value: "13 WEST 127 STREET",
    data: 1017250129
  },
  {
    value: "13 WEST 128 STREET",
    data: 1017260044
  },
  {
    value: "13 WEST 129 STREET",
    data: 1017270127
  },
  {
    value: "13 WEST 130 STREET",
    data: 1017280027
  },
  {
    value: "13 WEST 131 STREET",
    data: 1017290029
  },
  {
    value: "13 WEST 137 STREET",
    data: 1017350027
  },
  {
    value: "13 WEST 137 STREET",
    data: 1017350027
  },
  {
    value: "13 WEST 17 STREET",
    data: 1008190030
  },
  {
    value: "13 WEST 24 STREET",
    data: 1008260029
  },
  {
    value: "13 WEST 24 STREET",
    data: 1008260029
  },
  {
    value: "13 WEST 25 STREET",
    data: 1008270022
  },
  {
    value: "13 WEST 27 STREET",
    data: 1008290032
  },
  {
    value: "13 WEST 28 STREET",
    data: 1008300030
  },
  {
    value: "13 WEST 29 STREET",
    data: 1008310026
  },
  {
    value: "13 WEST 29 STREET",
    data: 1008310026
  },
  {
    value: "13 WEST 3 STREET",
    data: 1005350033
  },
  {
    value: "13 WEST 36 STREET",
    data: 1008380034
  },
  {
    value: "13 WEST 37 STREET",
    data: 1008390029
  },
  {
    value: "13 WEST 38 STREET",
    data: 1008400034
  },
  {
    value: "13 WEST 46 STREET",
    data: 1012620029
  },
  {
    value: "13 WEST 54 STREET",
    data: 1012700026
  },
  {
    value: "13 WEST 56 STREET",
    data: 1012720026
  },
  {
    value: "13 WEST 74 STREET",
    data: 1011270024
  },
  {
    value: "13 WEST 82 STREET",
    data: 1011960023
  },
  {
    value: "13 WEST 82 STREET",
    data: 1011960023
  },
  {
    value: "13 WEST 89 STREET",
    data: 1012030127
  },
  {
    value: "13 WEST 9 STREET",
    data: 1005730051
  },
  {
    value: "13 WHITE STREET",
    data: 1001780025
  },
  {
    value: "13 WHITE STREET",
    data: 1001780025
  },
  {
    value: "130 1 AVENUE",
    data: 1004350008
  },
  {
    value: "130 10 AVENUE",
    data: 1007160001
  },
  {
    value: "130 2 AVENUE",
    data: 1004490007
  },
  {
    value: "130 5 AVENUE",
    data: 1008200038
  },
  {
    value: "130 7 AVENUE",
    data: 1006110038
  },
  {
    value: "130 9 AVENUE",
    data: 1007420002
  },
  {
    value: "130 AVENUE OF THE AMERIC",
    data: 1004900030
  },
  {
    value: "130 BANK STREET",
    data: 1006340010
  },
  {
    value: "130 BARROW STREET",
    data: 1006047501
  },
  {
    value: "130 BEEKMAN STREET",
    data: 1000977502
  },
  {
    value: "130 BEEKMAN STREET",
    data: 1000977502
  },
  {
    value: "130 BOWERY",
    data: 1004700061
  },
  {
    value: "130 BRADHURST AVENUE",
    data: 1020457503
  },
  {
    value: "130 BRADHURST AVENUE",
    data: 1020457503
  },
  {
    value: "130 CHARLES STREET",
    data: 1006310016
  },
  {
    value: "130 DELANCEY STREET",
    data: 1003530039
  },
  {
    value: "130 DUANE STREET",
    data: 1001460023
  },
  {
    value: "130 DYCKMAN STREET",
    data: 1021740050
  },
  {
    value: "130 EAST 101 STREET",
    data: 1016280062
  },
  {
    value: "130 EAST 104 STREET",
    data: 1016310060
  },
  {
    value: "130 EAST 104 STREET",
    data: 1016310060
  },
  {
    value: "130 EAST 107 STREET",
    data: 1016340059
  },
  {
    value: "130 EAST 12 STREET",
    data: 1005567501
  },
  {
    value: "130 EAST 124 STREET",
    data: 1017720059
  },
  {
    value: "130 EAST 16 STREET",
    data: 1008710055
  },
  {
    value: "130 EAST 17 STREET",
    data: 1008720053
  },
  {
    value: "130 EAST 17 STREET",
    data: 1008720053
  },
  {
    value: "130 EAST 18 STREET",
    data: 1008730019
  },
  {
    value: "130 EAST 19 STREET",
    data: 1008740056
  },
  {
    value: "130 EAST 23 STREET",
    data: 1008787501
  },
  {
    value: "130 EAST 30 STREET",
    data: 1008850073
  },
  {
    value: "130 EAST 35 STREET",
    data: 1008900072
  },
  {
    value: "130 EAST 36 STREET",
    data: 1008910073
  },
  {
    value: "130 EAST 37 STREET",
    data: 1008920068
  },
  {
    value: "130 EAST 37 STREET",
    data: 1008920068
  },
  {
    value: "130 EAST 38 STREET",
    data: 1008930074
  },
  {
    value: "130 EAST 39 STREET",
    data: 1008940071
  },
  {
    value: "130 EAST 42 STREET",
    data: 1012967502
  },
  {
    value: "130 EAST 58 STREET",
    data: 1013120062
  },
  {
    value: "130 EAST 59 STREET",
    data: 1013137502
  },
  {
    value: "130 EAST 61 STREET",
    data: 1013950060
  },
  {
    value: "130 EAST 62 STREET",
    data: 1013960160
  },
  {
    value: "130 EAST 63 STREET",
    data: 1013977504
  },
  {
    value: "130 EAST 63 STREET",
    data: 1013977504
  },
  {
    value: "130 EAST 64 STREET",
    data: 1013980161
  },
  {
    value: "130 EAST 65 STREET",
    data: 1013990160
  },
  {
    value: "130 EAST 70 STREET",
    data: 1014040059
  },
  {
    value: "130 EAST 71 STREET",
    data: 1014050061
  },
  {
    value: "130 EAST 72 STREET",
    data: 1014060062
  },
  {
    value: "130 EAST 74 STREET",
    data: 1014080161
  },
  {
    value: "130 EAST 78 STREET",
    data: 1014120058
  },
  {
    value: "130 EAST 80 STREET",
    data: 1015080061
  },
  {
    value: "130 EAST 83 STREET",
    data: 1015110057
  },
  {
    value: "130 EAST 84 STREET",
    data: 1015120056
  },
  {
    value: "130 EAST 84 STREET",
    data: 1015120056
  },
  {
    value: "130 EAST 86 STREET",
    data: 1015140056
  },
  {
    value: "130 EAST 86 STREET",
    data: 1015140056
  },
  {
    value: "130 EAST 93 STREET",
    data: 1015210059
  },
  {
    value: "130 EAST 93 STREET",
    data: 1015210059
  },
  {
    value: "130 EAST 94 STREET",
    data: 1015220059
  },
  {
    value: "130 EAST 94 STREET",
    data: 1015220059
  },
  {
    value: "130 EAST 95 STREET",
    data: 1015230162
  },
  {
    value: "130 EAST 96 STREET",
    data: 1015240061
  },
  {
    value: "130 EAST 96 STREET",
    data: 1015240061
  },
  {
    value: "130 EAST END AVENUE",
    data: 1015820030
  },
  {
    value: "130 EAST END AVENUE",
    data: 1015820030
  },
  {
    value: "130 EDGECOMBE AVENUE",
    data: 1020430002
  },
  {
    value: "130 FT WASHINGTON AVENUE",
    data: 1021370168
  },
  {
    value: "130 FT WASHINGTON AVENUE",
    data: 1021370168
  },
  {
    value: "130 FULTON STREET",
    data: 1000797502
  },
  {
    value: "130 FULTON STREET",
    data: 1000797502
  },
  {
    value: "130 GREENE STREET",
    data: 1005137501
  },
  {
    value: "130 LENOX AVENUE",
    data: 1016007501
  },
  {
    value: "130 LENOX AVENUE",
    data: 1016007501
  },
  {
    value: "130 MAC DOUGAL STREET",
    data: 1005400014
  },
  {
    value: "130 MADISON AVENUE",
    data: 1008600065
  },
  {
    value: "130 MADISON STREET",
    data: 1002740036
  },
  {
    value: "130 MANHATTAN AVENUE",
    data: 1018410015
  },
  {
    value: "130 MORNINGSIDE DRIVE",
    data: 1019630056
  },
  {
    value: "130 MORNINGSIDE DRIVE",
    data: 1019630056
  },
  {
    value: "130 ORCHARD STREET",
    data: 1004100004
  },
  {
    value: "130 ORCHARD STREET",
    data: 1004100004
  },
  {
    value: "130 PRINCE STREET",
    data: 1005010015
  },
  {
    value: "130 ST MARKS PLACE",
    data: 1004350029
  },
  {
    value: "130 SUFFOLK STREET",
    data: 1003497501
  },
  {
    value: "130 SUFFOLK STREET",
    data: 1003497501
  },
  {
    value: "130 WADSWORTH AVENUE",
    data: 1021630034
  },
  {
    value: "130 WATTS STREET",
    data: 1005957502
  },
  {
    value: "130 WEST 10 STREET",
    data: 1006100052
  },
  {
    value: "130 WEST 11 STREET",
    data: 1006060046
  },
  {
    value: "130 WEST 111 STREET",
    data: 1018200148
  },
  {
    value: "130 WEST 112 STREET",
    data: 1018210053
  },
  {
    value: "130 WEST 112 STREET",
    data: 1018210053
  },
  {
    value: "130 WEST 116 STREET",
    data: 1018250050
  },
  {
    value: "130 WEST 117 STREET",
    data: 1019010145
  },
  {
    value: "130 WEST 118 STREET",
    data: 1019020047
  },
  {
    value: "130 WEST 119 STREET",
    data: 1019030048
  },
  {
    value: "130 WEST 12 STREET",
    data: 1006077502
  },
  {
    value: "130 WEST 12 STREET",
    data: 1006077502
  },
  {
    value: "130 WEST 121 STREET",
    data: 1019050147
  },
  {
    value: "130 WEST 123 STREET",
    data: 1019070048
  },
  {
    value: "130 WEST 124 STREET",
    data: 1019080046
  },
  {
    value: "130 WEST 127 STREET",
    data: 1019110148
  },
  {
    value: "130 WEST 129 STREET",
    data: 1019130046
  },
  {
    value: "130 WEST 130 STREET",
    data: 1019140046
  },
  {
    value: "130 WEST 131 STREET",
    data: 1019150047
  },
  {
    value: "130 WEST 132 STREET",
    data: 1019160146
  },
  {
    value: "130 WEST 134 STREET",
    data: 1019180053
  },
  {
    value: "130 WEST 136 STREET",
    data: 1019200046
  },
  {
    value: "130 WEST 136 STREET",
    data: 1019200046
  },
  {
    value: "130 WEST 139 STREET",
    data: 1020070053
  },
  {
    value: "130 WEST 142 STREET",
    data: 1020100042
  },
  {
    value: "130 WEST 142 STREET",
    data: 1020100042
  },
  {
    value: "130 WEST 143 STREET",
    data: 1020110050
  },
  {
    value: "130 WEST 143 STREET",
    data: 1020110050
  },
  {
    value: "130 WEST 16 STREET",
    data: 1007910062
  },
  {
    value: "130 WEST 16 STREET",
    data: 1007910062
  },
  {
    value: "130 WEST 17 STREET",
    data: 1007927503
  },
  {
    value: "130 WEST 17 STREET",
    data: 1007927503
  },
  {
    value: "130 WEST 18 STREET",
    data: 1007930056
  },
  {
    value: "130 WEST 19 STREET",
    data: 1007947501
  },
  {
    value: "130 WEST 19 STREET",
    data: 1007947501
  },
  {
    value: "130 WEST 20 STREET",
    data: 1007957502
  },
  {
    value: "130 WEST 20 STREET",
    data: 1007957502
  },
  {
    value: "130 WEST 228 STREET",
    data: 1022150586
  },
  {
    value: "130 WEST 228 STREET",
    data: 1022150586
  },
  {
    value: "130 WEST 23 STREET",
    data: 1007980060
  },
  {
    value: "130 WEST 24 STREET",
    data: 1007990057
  },
  {
    value: "130 WEST 24 STREET",
    data: 1007990057
  },
  {
    value: "130 WEST 25 STREET",
    data: 1008000057
  },
  {
    value: "130 WEST 26 STREET",
    data: 1008010059
  },
  {
    value: "130 WEST 28 STREET",
    data: 1008030057
  },
  {
    value: "130 WEST 29 STREET",
    data: 1008040057
  },
  {
    value: "130 WEST 3 STREET",
    data: 1005430013
  },
  {
    value: "130 WEST 30 STREET",
    data: 1008057501
  },
  {
    value: "130 WEST 30 STREET",
    data: 1008057501
  },
  {
    value: "130 WEST 34 STREET",
    data: 1008090062
  },
  {
    value: "130 WEST 37 STREET",
    data: 1008120162
  },
  {
    value: "130 WEST 42 STREET",
    data: 1009940045
  },
  {
    value: "130 WEST 44 STREET",
    data: 1009960046
  },
  {
    value: "130 WEST 57 STREET",
    data: 1010090046
  },
  {
    value: "130 WEST 58 STREET",
    data: 1010100045
  },
  {
    value: "130 WEST 67 STREET",
    data: 1011380053
  },
  {
    value: "130 WEST 67 STREET",
    data: 1011380053
  },
  {
    value: "130 WEST 70 STREET",
    data: 1011410044
  },
  {
    value: "130 WEST 71 STREET",
    data: 1011420045
  },
  {
    value: "130 WEST 72 STREET",
    data: 1011430045
  },
  {
    value: "130 WEST 73 STREET",
    data: 1011440045
  },
  {
    value: "130 WEST 74 STREET",
    data: 1011450045
  },
  {
    value: "130 WEST 74 STREET",
    data: 1011450045
  },
  {
    value: "130 WEST 75 STREET",
    data: 1011460147
  },
  {
    value: "130 WEST 78 STREET",
    data: 1011490046
  },
  {
    value: "130 WEST 79 STREET",
    data: 1011507503
  },
  {
    value: "130 WEST 79 STREET",
    data: 1011507503
  },
  {
    value: "130 WEST 80 STREET",
    data: 1012100048
  },
  {
    value: "130 WEST 81 STREET",
    data: 1012110046
  },
  {
    value: "130 WEST 82 STREET",
    data: 1012120046
  },
  {
    value: "130 WEST 86 STREET",
    data: 1012160044
  },
  {
    value: "130 WEST 86 STREET",
    data: 1012160044
  },
  {
    value: "130 WEST 87 STREET",
    data: 1012170144
  },
  {
    value: "130 WEST 88 STREET",
    data: 1012180042
  },
  {
    value: "130 WEST 95 STREET",
    data: 1012250145
  },
  {
    value: "130 WEST BROADWAY",
    data: 1001440032
  },
  {
    value: "130 WEST END AVENUE",
    data: 1011570001
  },
  {
    value: "130 WEST HOUSTON STREET",
    data: 1005260075
  },
  {
    value: "130 WILLIAM STREET",
    data: 1000770015
  },
  {
    value: "1300 MADISON AVENUE",
    data: 1015040017
  },
  {
    value: "1301 3 AVENUE",
    data: 1014290048
  },
  {
    value: "1301 AVENUE OF THE AMER",
    data: 1010050029
  },
  {
    value: "1301 PARK AVENUE",
    data: 1016270001
  },
  {
    value: "1301 ST NICHOLAS AVENUE",
    data: 1021440061
  },
  {
    value: "1301 ST NICHOLAS AVENUE",
    data: 1021440061
  },
  {
    value: "1301 YORK AVENUE",
    data: 1014640028
  },
  {
    value: "1302 BROADWAY",
    data: 1008360001
  },
  {
    value: "1302 MADISON AVENUE",
    data: 1015040018
  },
  {
    value: "1303 3 AVENUE",
    data: 1014290047
  },
  {
    value: "1303 3 AVENUE",
    data: 1014290047
  },
  {
    value: "1304 MADISON AVENUE",
    data: 1015040019
  },
  {
    value: "1305 1 AVENUE",
    data: 1014450023
  },
  {
    value: "1305 1 AVENUE",
    data: 1014450023
  },
  {
    value: "1305 MADISON AVENUE",
    data: 1015040055
  },
  {
    value: "1306 1 AVENUE",
    data: 1014650001
  },
  {
    value: "1306 1 AVENUE",
    data: 1014650001
  },
  {
    value: "1306 2 AVENUE",
    data: 1014430051
  },
  {
    value: "1306 2 AVENUE",
    data: 1014430051
  },
  {
    value: "1307 MADISON AVENUE",
    data: 1015040053
  },
  {
    value: "1308 2 AVENUE",
    data: 1014430050
  },
  {
    value: "1308 3 AVENUE",
    data: 1014100033
  },
  {
    value: "1308 3 AVENUE",
    data: 1014100033
  },
  {
    value: "1309 3 AVENUE",
    data: 1014290045
  },
  {
    value: "1309 3 AVENUE",
    data: 1014290045
  },
  {
    value: "1309 5 AVENUE",
    data: 1016160001
  },
  {
    value: "1309 5 AVENUE",
    data: 1016160001
  },
  {
    value: "131 1 AVENUE",
    data: 1004490030
  },
  {
    value: "131 10 AVENUE",
    data: 1006900029
  },
  {
    value: "131 2 AVENUE",
    data: 1004630028
  },
  {
    value: "131 2 AVENUE",
    data: 1004630028
  },
  {
    value: "131 ALLEN STREET",
    data: 1004150030
  },
  {
    value: "131 AVENUE A",
    data: 1004360034
  },
  {
    value: "131 AVENUE A",
    data: 1004360034
  },
  {
    value: "131 AVENUE B",
    data: 1003910003
  },
  {
    value: "131 AVENUE B",
    data: 1003910003
  },
  {
    value: "131 AVENUE C",
    data: 1003910036
  },
  {
    value: "131 AVENUE D",
    data: 1003790039
  },
  {
    value: "131 BANK STREET",
    data: 1006357502
  },
  {
    value: "131 BOWERY",
    data: 1004230002
  },
  {
    value: "131 BROOME STREET",
    data: 1003410070
  },
  {
    value: "131 BROOME STREET",
    data: 1003410070
  },
  {
    value: "131 CENTRAL PARK NORTH",
    data: 1018200017
  },
  {
    value: "131 CENTRAL PARK NORTH",
    data: 1018200017
  },
  {
    value: "131 CHARLES STREET",
    data: 1006320030
  },
  {
    value: "131 CHRYSTIE STREET",
    data: 1004240032
  },
  {
    value: "131 DUANE STREET",
    data: 1001470002
  },
  {
    value: "131 EAST 101 STREET",
    data: 1016290013
  },
  {
    value: "131 EAST 103 STREET",
    data: 1016310011
  },
  {
    value: "131 EAST 110 STREET",
    data: 1016380112
  },
  {
    value: "131 EAST 12 STREET",
    data: 1005580037
  },
  {
    value: "131 EAST 15 STREET",
    data: 1008710029
  },
  {
    value: "131 EAST 15 STREET",
    data: 1008710029
  },
  {
    value: "131 EAST 17 STREET",
    data: 1008730026
  },
  {
    value: "131 EAST 17 STREET",
    data: 1008730026
  },
  {
    value: "131 EAST 19 STREET",
    data: 1008750029
  },
  {
    value: "131 EAST 23 STREET",
    data: 1008790017
  },
  {
    value: "131 EAST 23 STREET",
    data: 1008790017
  },
  {
    value: "131 EAST 27 STREET",
    data: 1008830019
  },
  {
    value: "131 EAST 29 STREET",
    data: 1008850030
  },
  {
    value: "131 EAST 35 STREET",
    data: 1008910019
  },
  {
    value: "131 EAST 36 STREET",
    data: 1008920017
  },
  {
    value: "131 EAST 38 STREET",
    data: 1008940028
  },
  {
    value: "131 EAST 39 STREET",
    data: 1008950029
  },
  {
    value: "131 EAST 45 STREET",
    data: 1013000122
  },
  {
    value: "131 EAST 45 STREET",
    data: 1013000122
  },
  {
    value: "131 EAST 47 STREET",
    data: 1013020025
  },
  {
    value: "131 EAST 56 STREET",
    data: 1013110112
  },
  {
    value: "131 EAST 61 STREET",
    data: 1013960013
  },
  {
    value: "131 EAST 62 STREET",
    data: 1013970012
  },
  {
    value: "131 EAST 64 STREET",
    data: 1013990012
  },
  {
    value: "131 EAST 65 STREET",
    data: 1014000113
  },
  {
    value: "131 EAST 71 STREET",
    data: 1014060113
  },
  {
    value: "131 EAST 74 STREET",
    data: 1014090012
  },
  {
    value: "131 EAST 83 STREET",
    data: 1015120016
  },
  {
    value: "131 EAST 83 STREET",
    data: 1015120016
  },
  {
    value: "131 EAST 85 STREET",
    data: 1015140016
  },
  {
    value: "131 EAST 85 STREET",
    data: 1015140016
  },
  {
    value: "131 EAST 91 STREET",
    data: 1015200013
  },
  {
    value: "131 EAST 92 STREET",
    data: 1015210114
  },
  {
    value: "131 EAST 93 STREET",
    data: 1015220014
  },
  {
    value: "131 EAST 93 STREET",
    data: 1015220014
  },
  {
    value: "131 EAST 94 STREET",
    data: 1015230111
  },
  {
    value: "131 EAST 95 STREET",
    data: 1015240012
  },
  {
    value: "131 ELDRIDGE STREET",
    data: 1004190069
  },
  {
    value: "131 HENRY STREET",
    data: 1002830012
  },
  {
    value: "131 HENRY STREET",
    data: 1002830012
  },
  {
    value: "131 LEXINGTON AVENUE",
    data: 1008840062
  },
  {
    value: "131 MAC DOUGAL STREET",
    data: 1005430057
  },
  {
    value: "131 MANHATTAN AVENUE",
    data: 1018410116
  },
  {
    value: "131 MOTT STREET",
    data: 1002370025
  },
  {
    value: "131 MOTT STREET",
    data: 1002370025
  },
  {
    value: "131 MULBERRY STREET",
    data: 1002360030
  },
  {
    value: "131 NAGLE AVENUE",
    data: 1021730021
  },
  {
    value: "131 NAGLE AVENUE",
    data: 1021730021
  },
  {
    value: "131 ORCHARD STREET",
    data: 1004150071
  },
  {
    value: "131 ORCHARD STREET",
    data: 1004150071
  },
  {
    value: "131 PERRY STREET",
    data: 1006330028
  },
  {
    value: "131 PERRY STREET",
    data: 1006330028
  },
  {
    value: "131 PRINCE STREET",
    data: 1005150039
  },
  {
    value: "131 RIVERSIDE DRIVE",
    data: 1012470001
  },
  {
    value: "131 RIVERSIDE DRIVE",
    data: 1012470001
  },
  {
    value: "131 RIVINGTON STREET",
    data: 1003530057
  },
  {
    value: "131 RIVINGTON STREET",
    data: 1003530057
  },
  {
    value: "131 SPRING STREET",
    data: 1005000036
  },
  {
    value: "131 ST NICHOLAS AVENUE",
    data: 1019220041
  },
  {
    value: "131 ST NICHOLAS AVENUE",
    data: 1019220041
  },
  {
    value: "131 THOMPSON STREET",
    data: 1005177501
  },
  {
    value: "131 THOMPSON STREET",
    data: 1005177501
  },
  {
    value: "131 VARICK STREET",
    data: 1005790030
  },
  {
    value: "131 WATTS STREET",
    data: 1002247501
  },
  {
    value: "131 WEST 11 STREET",
    data: 1006077501
  },
  {
    value: "131 WEST 112 STREET",
    data: 1018220011
  },
  {
    value: "131 WEST 116 STREET",
    data: 1019010017
  },
  {
    value: "131 WEST 116 STREET",
    data: 1019010017
  },
  {
    value: "131 WEST 117 STREET",
    data: 1019020016
  },
  {
    value: "131 WEST 118 STREET",
    data: 1019030016
  },
  {
    value: "131 WEST 119 STREET",
    data: 1019040017
  },
  {
    value: "131 WEST 120 STREET",
    data: 1019050115
  },
  {
    value: "131 WEST 122 STREET",
    data: 1019070017
  },
  {
    value: "131 WEST 128 STREET",
    data: 1019130015
  },
  {
    value: "131 WEST 129 STREET",
    data: 1019140017
  },
  {
    value: "131 WEST 129 STREET",
    data: 1019140017
  },
  {
    value: "131 WEST 130 STREET",
    data: 1019150116
  },
  {
    value: "131 WEST 131 STREET",
    data: 1019160018
  },
  {
    value: "131 WEST 132 STREET",
    data: 1019170019
  },
  {
    value: "131 WEST 133 STREET",
    data: 1019180016
  },
  {
    value: "131 WEST 135 STREET",
    data: 1019200015
  },
  {
    value: "131 WEST 135 STREET",
    data: 1019200015
  },
  {
    value: "131 WEST 136 STREET",
    data: 1019210118
  },
  {
    value: "131 WEST 137 STREET",
    data: 1020060014
  },
  {
    value: "131 WEST 137 STREET",
    data: 1020060014
  },
  {
    value: "131 WEST 14 STREET",
    data: 1007900018
  },
  {
    value: "131 WEST 142 STREET",
    data: 1020110020
  },
  {
    value: "131 WEST 142 STREET",
    data: 1020110020
  },
  {
    value: "131 WEST 143 STREET",
    data: 1020120020
  },
  {
    value: "131 WEST 143 STREET",
    data: 1020120020
  },
  {
    value: "131 WEST 15 STREET",
    data: 1007910022
  },
  {
    value: "131 WEST 15 STREET",
    data: 1007910022
  },
  {
    value: "131 WEST 16 STREET",
    data: 1007927501
  },
  {
    value: "131 WEST 21 STREET",
    data: 1007970023
  },
  {
    value: "131 WEST 23 STREET",
    data: 1007990024
  },
  {
    value: "131 WEST 24 STREET",
    data: 1008000022
  },
  {
    value: "131 WEST 28 STREET",
    data: 1008040018
  },
  {
    value: "131 WEST 28 STREET",
    data: 1008040018
  },
  {
    value: "131 WEST 3 STREET",
    data: 1005430066
  },
  {
    value: "131 WEST 33 STREET",
    data: 1008097501
  },
  {
    value: "131 WEST 35 STREET",
    data: 1008110016
  },
  {
    value: "131 WEST 55 STREET",
    data: 1010080015
  },
  {
    value: "131 WEST 56 STREET",
    data: 1010090014
  },
  {
    value: "131 WEST 69 STREET",
    data: 1011410120
  },
  {
    value: "131 WEST 70 STREET",
    data: 1011420120
  },
  {
    value: "131 WEST 71 STREET",
    data: 1011430022
  },
  {
    value: "131 WEST 72 STREET",
    data: 1011440020
  },
  {
    value: "131 WEST 75 STREET",
    data: 1011470017
  },
  {
    value: "131 WEST 77 STREET",
    data: 1011490119
  },
  {
    value: "131 WEST 78 STREET",
    data: 1011500019
  },
  {
    value: "131 WEST 80 STREET",
    data: 1012110022
  },
  {
    value: "131 WEST 82 STREET",
    data: 1012137505
  },
  {
    value: "131 WEST 85 STREET",
    data: 1012160016
  },
  {
    value: "131 WEST 85 STREET",
    data: 1012160016
  },
  {
    value: "131 WEST 86 STREET",
    data: 1012170018
  },
  {
    value: "131 WEST 87 STREET",
    data: 1012180022
  },
  {
    value: "131 WEST 88 STREET",
    data: 1012190018
  },
  {
    value: "131 WEST 94 STREET",
    data: 1012250119
  },
  {
    value: "131 WEST 95 STREET",
    data: 1012260119
  },
  {
    value: "1310 2 AVENUE",
    data: 1014430049
  },
  {
    value: "1311 3 AVENUE",
    data: 1014300001
  },
  {
    value: "1311 3 AVENUE",
    data: 1014300001
  },
  {
    value: "1311 BROADWAY",
    data: 1008090045
  },
  {
    value: "1311 MADISON AVENUE",
    data: 1015040052
  },
  {
    value: "1313 2 AVENUE",
    data: 1014240021
  },
  {
    value: "1313 3 AVENUE",
    data: 1014300002
  },
  {
    value: "1313 3 AVENUE",
    data: 1014300002
  },
  {
    value: "1313 BROADWAY",
    data: 1008100040
  },
  {
    value: "1313 YORK AVENUE",
    data: 1014650021
  },
  {
    value: "1313 YORK AVENUE",
    data: 1014650021
  },
  {
    value: "1314 RIVERSIDE DRIVE",
    data: 1021770218
  },
  {
    value: "1314 RIVERSIDE DRIVE",
    data: 1021770218
  },
  {
    value: "1314 ST NICHOLAS AVENUE",
    data: 1021330007
  },
  {
    value: "1315 1 AVENUE",
    data: 1014450027
  },
  {
    value: "1315 1 AVENUE",
    data: 1014450027
  },
  {
    value: "1315 2 AVENUE",
    data: 1014240022
  },
  {
    value: "1315 3 AVENUE",
    data: 1014300003
  },
  {
    value: "1315 3 AVENUE",
    data: 1014300003
  },
  {
    value: "1315 MADISON AVENUE",
    data: 1015040051
  },
  {
    value: "1315 ST NICHOLAS AVENUE",
    data: 1021440057
  },
  {
    value: "1315 ST NICHOLAS AVENUE",
    data: 1021440057
  },
  {
    value: "1316 5 AVENUE",
    data: 1015940040
  },
  {
    value: "1316 5 AVENUE",
    data: 1015940040
  },
  {
    value: "1317 1 AVENUE",
    data: 1014450028
  },
  {
    value: "1317 1 AVENUE",
    data: 1014450028
  },
  {
    value: "1317 3 AVENUE",
    data: 1014300004
  },
  {
    value: "1318 MADISON AVENUE",
    data: 1015050019
  },
  {
    value: "1319 1 AVENUE",
    data: 1014450029
  },
  {
    value: "1319 1 AVENUE",
    data: 1014450029
  },
  {
    value: "1319 3 AVENUE",
    data: 1014300048
  },
  {
    value: "132 1 AVENUE",
    data: 1004350009
  },
  {
    value: "132 10 AVENUE",
    data: 1007160002
  },
  {
    value: "132 2 AVENUE",
    data: 1004500001
  },
  {
    value: "132 2 AVENUE",
    data: 1004500001
  },
  {
    value: "132 4 AVENUE",
    data: 1005640045
  },
  {
    value: "132 9 AVENUE",
    data: 1007420003
  },
  {
    value: "132 AVENUE D",
    data: 1003620010
  },
  {
    value: "132 AVENUE D",
    data: 1003620010
  },
  {
    value: "132 BANK STREET",
    data: 1006340009
  },
  {
    value: "132 BOWERY",
    data: 1004700060
  },
  {
    value: "132 BROOME STREET",
    data: 1003420060
  },
  {
    value: "132 CHARLES STREET",
    data: 1006310015
  },
  {
    value: "132 DELANCEY STREET",
    data: 1003530082
  },
  {
    value: "132 DUANE STREET",
    data: 1001467504
  },
  {
    value: "132 EAST 119 STREET",
    data: 1017670060
  },
  {
    value: "132 EAST 119 STREET",
    data: 1017670060
  },
  {
    value: "132 EAST 124 STREET",
    data: 1017720158
  },
  {
    value: "132 EAST 125 STREET",
    data: 1017730057
  },
  {
    value: "132 EAST 126 STREET",
    data: 1017740056
  },
  {
    value: "132 EAST 16 STREET",
    data: 1008710054
  },
  {
    value: "132 EAST 17 STREET",
    data: 1008720052
  },
  {
    value: "132 EAST 17 STREET",
    data: 1008720052
  },
  {
    value: "132 EAST 19 STREET",
    data: 1008740054
  },
  {
    value: "132 EAST 19 STREET",
    data: 1008740054
  },
  {
    value: "132 EAST 24 STREET",
    data: 1008790065
  },
  {
    value: "132 EAST 28 STREET",
    data: 1008830065
  },
  {
    value: "132 EAST 29 STREET",
    data: 1008840059
  },
  {
    value: "132 EAST 30 STREET",
    data: 1008857504
  },
  {
    value: "132 EAST 35 STREET",
    data: 1008900020
  },
  {
    value: "132 EAST 35 STREET",
    data: 1008900020
  },
  {
    value: "132 EAST 36 STREET",
    data: 1008910072
  },
  {
    value: "132 EAST 38 STREET",
    data: 1008930071
  },
  {
    value: "132 EAST 45 STREET",
    data: 1012990048
  },
  {
    value: "132 EAST 45 STREET",
    data: 1012990048
  },
  {
    value: "132 EAST 61 STREET",
    data: 1013950159
  },
  {
    value: "132 EAST 62 STREET",
    data: 1013960060
  },
  {
    value: "132 EAST 64 STREET",
    data: 1013980061
  },
  {
    value: "132 EAST 65 STREET",
    data: 1013990150
  },
  {
    value: "132 EAST 7 STREET",
    data: 1004027501
  },
  {
    value: "132 EAST 70 STREET",
    data: 1014040158
  },
  {
    value: "132 EAST 71 STREET",
    data: 1014050060
  },
  {
    value: "132 EAST 72 STREET",
    data: 1014060061
  },
  {
    value: "132 EAST 72 STREET",
    data: 1014060061
  },
  {
    value: "132 EAST 73 STREET",
    data: 1014070061
  },
  {
    value: "132 EAST 74 STREET",
    data: 1014080061
  },
  {
    value: "132 EAST 80 STREET",
    data: 1015080060
  },
  {
    value: "132 EAST 92 STREET",
    data: 1015200060
  },
  {
    value: "132 EAST 95 STREET",
    data: 1015230062
  },
  {
    value: "132 EAST 96 STREET",
    data: 1015240060
  },
  {
    value: "132 EDGECOMBE AVENUE",
    data: 1020430003
  },
  {
    value: "132 GREENE STREET",
    data: 1005130003
  },
  {
    value: "132 GREENE STREET",
    data: 1005130003
  },
  {
    value: "132 LEXINGTON AVENUE",
    data: 1008840066
  },
  {
    value: "132 MADISON AVENUE",
    data: 1008600067
  },
  {
    value: "132 MADISON AVENUE",
    data: 1008609067
  },
  {
    value: "132 MANHATTAN AVENUE",
    data: 1018410050
  },
  {
    value: "132 MULBERRY STREET",
    data: 1002377501
  },
  {
    value: "132 ORCHARD STREET",
    data: 1004100007
  },
  {
    value: "132 ORCHARD STREET",
    data: 1004100007
  },
  {
    value: "132 PERRY STREET",
    data: 1006327503
  },
  {
    value: "132 PERRY STREET",
    data: 1006327503
  },
  {
    value: "132 SHERMAN AVENUE",
    data: 1022240031
  },
  {
    value: "132 SHERMAN AVENUE",
    data: 1022240031
  },
  {
    value: "132 SULLIVAN STREET",
    data: 1005180043
  },
  {
    value: "132 SULLIVAN STREET",
    data: 1005180043
  },
  {
    value: "132 THOMPSON STREET",
    data: 1005160004
  },
  {
    value: "132 THOMPSON STREET",
    data: 1005160004
  },
  {
    value: "132 WEST 10 STREET",
    data: 1006100051
  },
  {
    value: "132 WEST 109 STREET",
    data: 1018630052
  },
  {
    value: "132 WEST 109 STREET",
    data: 1018630052
  },
  {
    value: "132 WEST 11 STREET",
    data: 1006060045
  },
  {
    value: "132 WEST 111 STREET",
    data: 1018200049
  },
  {
    value: "132 WEST 112 STREET",
    data: 1018210055
  },
  {
    value: "132 WEST 112 STREET",
    data: 1018210055
  },
  {
    value: "132 WEST 113 STREET",
    data: 1018220053
  },
  {
    value: "132 WEST 116 STREET",
    data: 1018250051
  },
  {
    value: "132 WEST 117 STREET",
    data: 1019010046
  },
  {
    value: "132 WEST 118 STREET",
    data: 1019020048
  },
  {
    value: "132 WEST 119 STREET",
    data: 1019030049
  },
  {
    value: "132 WEST 119 STREET",
    data: 1019030049
  },
  {
    value: "132 WEST 121 STREET",
    data: 1019050048
  },
  {
    value: "132 WEST 123 STREET",
    data: 1019077505
  },
  {
    value: "132 WEST 125 STREET",
    data: 1019090012
  },
  {
    value: "132 WEST 127 STREET",
    data: 1019110049
  },
  {
    value: "132 WEST 129 STREET",
    data: 1019130047
  },
  {
    value: "132 WEST 13 STREET",
    data: 1006087502
  },
  {
    value: "132 WEST 130 STREET",
    data: 1019140146
  },
  {
    value: "132 WEST 130 STREET",
    data: 1019140146
  },
  {
    value: "132 WEST 131 STREET",
    data: 1019150048
  },
  {
    value: "132 WEST 131 STREET",
    data: 1019150048
  },
  {
    value: "132 WEST 132 STREET",
    data: 1019160047
  },
  {
    value: "132 WEST 133 STREET",
    data: 1019170045
  },
  {
    value: "132 WEST 134 STREET",
    data: 1019180054
  },
  {
    value: "132 WEST 136 STREET",
    data: 1019200146
  },
  {
    value: "132 WEST 136 STREET",
    data: 1019200146
  },
  {
    value: "132 WEST 138 STREET",
    data: 1020060052
  },
  {
    value: "132 WEST 139 STREET",
    data: 1020070054
  },
  {
    value: "132 WEST 14 STREET",
    data: 1006090020
  },
  {
    value: "132 WEST 15 STREET",
    data: 1007900055
  },
  {
    value: "132 WEST 15 STREET",
    data: 1007900055
  },
  {
    value: "132 WEST 21 STREET",
    data: 1007960058
  },
  {
    value: "132 WEST 22 STREET",
    data: 1007977503
  },
  {
    value: "132 WEST 22 STREET",
    data: 1007977503
  },
  {
    value: "132 WEST 23 STREET",
    data: 1007980061
  },
  {
    value: "132 WEST 26 STREET",
    data: 1008010060
  },
  {
    value: "132 WEST 26 STREET",
    data: 1008010060
  },
  {
    value: "132 WEST 27 STREET",
    data: 1008020061
  },
  {
    value: "132 WEST 28 STREET",
    data: 1008030058
  },
  {
    value: "132 WEST 28 STREET",
    data: 1008030058
  },
  {
    value: "132 WEST 32 STREET",
    data: 1008077501
  },
  {
    value: "132 WEST 36 STREET",
    data: 1008110051
  },
  {
    value: "132 WEST 4 STREET",
    data: 1005430051
  },
  {
    value: "132 WEST 45 STREET",
    data: 1009970047
  },
  {
    value: "132 WEST 47 STREET",
    data: 1009990048
  },
  {
    value: "132 WEST 58 STREET",
    data: 1010100145
  },
  {
    value: "132 WEST 60 STREET",
    data: 1011310050
  },
  {
    value: "132 WEST 71 STREET",
    data: 1011420145
  },
  {
    value: "132 WEST 72 STREET",
    data: 1011430046
  },
  {
    value: "132 WEST 72 STREET",
    data: 1011430046
  },
  {
    value: "132 WEST 73 STREET",
    data: 1011440145
  },
  {
    value: "132 WEST 74 STREET",
    data: 1011450046
  },
  {
    value: "132 WEST 75 STREET",
    data: 1011460048
  },
  {
    value: "132 WEST 78 STREET",
    data: 1011490146
  },
  {
    value: "132 WEST 80 STREET",
    data: 1012100049
  },
  {
    value: "132 WEST 81 STREET",
    data: 1012110047
  },
  {
    value: "132 WEST 82 STREET",
    data: 1012120146
  },
  {
    value: "132 WEST 87 STREET",
    data: 1012170045
  },
  {
    value: "132 WEST 88 STREET",
    data: 1012180142
  },
  {
    value: "132 WEST 95 STREET",
    data: 1012250046
  },
  {
    value: "132 WEST 96 STREET",
    data: 1012260045
  },
  {
    value: "132 WEST 96 STREET",
    data: 1012260045
  },
  {
    value: "132 WEST BROADWAY",
    data: 1001440031
  },
  {
    value: "132 WEST HOUSTON STREET",
    data: 1005260076
  },
  {
    value: "1320 AMSTERDAM AVENUE",
    data: 1019800001
  },
  {
    value: "1320 AMSTERDAM AVENUE",
    data: 1019800001
  },
  {
    value: "1320 MADISON AVENUE",
    data: 1015050119
  },
  {
    value: "1320 ST NICHOLAS AVENUE",
    data: 1021330030
  },
  {
    value: "1320 ST NICHOLAS AVENUE",
    data: 1021330030
  },
  {
    value: "1321 1 AVENUE",
    data: 1014450030
  },
  {
    value: "1321 3 AVENUE",
    data: 1014300047
  },
  {
    value: "1321 3 AVENUE",
    data: 1014300047
  },
  {
    value: "1321 5 AVENUE",
    data: 1016170001
  },
  {
    value: "1321 5 AVENUE",
    data: 1016170001
  },
  {
    value: "1321 MADISON AVENUE",
    data: 1015050022
  },
  {
    value: "1322 2 AVENUE",
    data: 1014440051
  },
  {
    value: "1322 2 AVENUE",
    data: 1014440051
  },
  {
    value: "1322 3 AVENUE",
    data: 1014100040
  },
  {
    value: "1323 MADISON AVENUE",
    data: 1015050121
  },
  {
    value: "1324 2 AVENUE",
    data: 1014440050
  },
  {
    value: "1324 2 AVENUE",
    data: 1014440050
  },
  {
    value: "1325 1 AVENUE",
    data: 1014460023
  },
  {
    value: "1325 1 AVENUE",
    data: 1014460023
  },
  {
    value: "1325 3 AVENUE",
    data: 1014300046
  },
  {
    value: "1325 PARK AVENUE",
    data: 1016280004
  },
  {
    value: "1325 PARK AVENUE",
    data: 1016280004
  },
  {
    value: "1326 2 AVENUE",
    data: 1014440049
  },
  {
    value: "1326 2 AVENUE",
    data: 1014440049
  },
  {
    value: "1326 RIVERSIDE DRIVE",
    data: 1021770228
  },
  {
    value: "1326 RIVERSIDE DRIVE",
    data: 1021770228
  },
  {
    value: "1327 3 AVENUE",
    data: 1014300045
  },
  {
    value: "1327 3 AVENUE",
    data: 1014300045
  },
  {
    value: "1327 MADISON AVENUE",
    data: 1015057502
  },
  {
    value: "1327 MADISON AVENUE",
    data: 1015057502
  },
  {
    value: "1328 2 AVENUE",
    data: 1014457501
  },
  {
    value: "1328 2 AVENUE",
    data: 1014457501
  },
  {
    value: "1328 LEXINGTON AVENUE",
    data: 1015170058
  },
  {
    value: "1328 LEXINGTON AVENUE",
    data: 1015170058
  },
  {
    value: "1329 2 AVENUE",
    data: 1014257501
  },
  {
    value: "1329 2 AVENUE",
    data: 1014257501
  },
  {
    value: "1329 3 AVENUE",
    data: 1014310001
  },
  {
    value: "1329 3 AVENUE",
    data: 1014310001
  },
  {
    value: "132A EAST 65 STREET",
    data: 1013997502
  },
  {
    value: "132A EAST 65 STREET",
    data: 1013997502
  },
  {
    value: "133 2 AVENUE",
    data: 1004647503
  },
  {
    value: "133 2 AVENUE",
    data: 1004647503
  },
  {
    value: "133 3 AVENUE",
    data: 1008960005
  },
  {
    value: "133 3 AVENUE",
    data: 1008960005
  },
  {
    value: "133 5 AVENUE",
    data: 1008480073
  },
  {
    value: "133 7 AVENUE SOUTH",
    data: 1006110033
  },
  {
    value: "133 AVENUE C",
    data: 1003910035
  },
  {
    value: "133 AVENUE D",
    data: 1003790037
  },
  {
    value: "133 AVENUE D",
    data: 1003790037
  },
  {
    value: "133 BOWERY",
    data: 1004230003
  },
  {
    value: "133 CANAL STREET",
    data: 1003030039
  },
  {
    value: "133 CENTRE STREET",
    data: 1001970017
  },
  {
    value: "133 CHARLES STREET",
    data: 1006320031
  },
  {
    value: "133 CHARLES STREET",
    data: 1006320031
  },
  {
    value: "133 CHRISTOPHER STREET",
    data: 1006300050
  },
  {
    value: "133 CHRYSTIE STREET",
    data: 1004240031
  },
  {
    value: "133 DYCKMAN STREET",
    data: 1022200050
  },
  {
    value: "133 EAST 110 STREET",
    data: 1016380013
  },
  {
    value: "133 EAST 122 STREET",
    data: 1017710113
  },
  {
    value: "133 EAST 15 STREET",
    data: 1008710030
  },
  {
    value: "133 EAST 15 STREET",
    data: 1008710030
  },
  {
    value: "133 EAST 17 STREET",
    data: 1008730027
  },
  {
    value: "133 EAST 17 STREET",
    data: 1008730027
  },
  {
    value: "133 EAST 18 STREET",
    data: 1008740025
  },
  {
    value: "133 EAST 27 STREET",
    data: 1008830028
  },
  {
    value: "133 EAST 29 STREET",
    data: 1008850031
  },
  {
    value: "133 EAST 30 STREET",
    data: 1008860031
  },
  {
    value: "133 EAST 30 STREET",
    data: 1008860031
  },
  {
    value: "133 EAST 35 STREET",
    data: 1008910020
  },
  {
    value: "133 EAST 36 STREET",
    data: 1008920018
  },
  {
    value: "133 EAST 38 STREET",
    data: 1008940029
  },
  {
    value: "133 EAST 39 STREET",
    data: 1008950030
  },
  {
    value: "133 EAST 56 STREET",
    data: 1013110113
  },
  {
    value: "133 EAST 61 STREET",
    data: 1013960014
  },
  {
    value: "133 EAST 61 STREET",
    data: 1013960014
  },
  {
    value: "133 EAST 62 STREET",
    data: 1013970013
  },
  {
    value: "133 EAST 65 STREET",
    data: 1014000114
  },
  {
    value: "133 EAST 74 STREET",
    data: 1014090013
  },
  {
    value: "133 EAST 80 STREET",
    data: 1015090016
  },
  {
    value: "133 EAST 80 STREET",
    data: 1015090016
  },
  {
    value: "133 EAST 84 STREET",
    data: 1015130016
  },
  {
    value: "133 EAST 84 STREET",
    data: 1015130016
  },
  {
    value: "133 EAST 91 STREET",
    data: 1015200113
  },
  {
    value: "133 EAST 92 STREET",
    data: 1015210015
  },
  {
    value: "133 EAST 94 STREET",
    data: 1015230012
  },
  {
    value: "133 EAST 95 STREET",
    data: 1015240112
  },
  {
    value: "133 EAST BROADWAY",
    data: 1002830038
  },
  {
    value: "133 EDGECOMBE AVENUE",
    data: 1020510011
  },
  {
    value: "133 ELDRIDGE STREET",
    data: 1004190068
  },
  {
    value: "133 ESSEX STREET",
    data: 1004117503
  },
  {
    value: "133 ESSEX STREET",
    data: 1004117503
  },
  {
    value: "133 FT GEORGE AVENUE",
    data: 1021490270
  },
  {
    value: "133 FT GEORGE AVENUE",
    data: 1021490270
  },
  {
    value: "133 GRAND STREET",
    data: 1002330008
  },
  {
    value: "133 GREENE STREET",
    data: 1005140028
  },
  {
    value: "133 GREENWICH STREET",
    data: 1000520008
  },
  {
    value: "133 HENRY STREET",
    data: 1002830013
  },
  {
    value: "133 HENRY STREET",
    data: 1002830013
  },
  {
    value: "133 JOHN STREET",
    data: 1000750009
  },
  {
    value: "133 LEXINGTON AVENUE",
    data: 1008840061
  },
  {
    value: "133 MANHATTAN AVENUE",
    data: 1018410051
  },
  {
    value: "133 MERCER STREET",
    data: 1004990022
  },
  {
    value: "133 MOTT STREET",
    data: 1002370024
  },
  {
    value: "133 MULBERRY STREET",
    data: 1002360027
  },
  {
    value: "133 NORFOLK STREET",
    data: 1003547501
  },
  {
    value: "133 NORFOLK STREET",
    data: 1003547501
  },
  {
    value: "133 ORCHARD STREET",
    data: 1004150070
  },
  {
    value: "133 ORCHARD STREET",
    data: 1004150070
  },
  {
    value: "133 PITT STREET",
    data: 1003450058
  },
  {
    value: "133 PITT STREET",
    data: 1003450058
  },
  {
    value: "133 SEAMAN AVENUE",
    data: 1022400013
  },
  {
    value: "133 SEAMAN AVENUE",
    data: 1022400013
  },
  {
    value: "133 SHERMAN AVENUE",
    data: 1022200023
  },
  {
    value: "133 SHERMAN AVENUE",
    data: 1022200023
  },
  {
    value: "133 WEST 104 STREET",
    data: 1018590015
  },
  {
    value: "133 WEST 104 STREET",
    data: 1018590015
  },
  {
    value: "133 WEST 11 STREET",
    data: 1006077503
  },
  {
    value: "133 WEST 11 STREET",
    data: 1006077503
  },
  {
    value: "133 WEST 112 STREET",
    data: 1018220009
  },
  {
    value: "133 WEST 113 STREET",
    data: 1018230010
  },
  {
    value: "133 WEST 113 STREET",
    data: 1018230010
  },
  {
    value: "133 WEST 116 STREET",
    data: 1019010016
  },
  {
    value: "133 WEST 117 STREET",
    data: 1019020015
  },
  {
    value: "133 WEST 118 STREET",
    data: 1019030015
  },
  {
    value: "133 WEST 119 STREET",
    data: 1019040016
  },
  {
    value: "133 WEST 12 STREET",
    data: 1006080058
  },
  {
    value: "133 WEST 120 STREET",
    data: 1019050015
  },
  {
    value: "133 WEST 122 STREET",
    data: 1019070016
  },
  {
    value: "133 WEST 123 STREET",
    data: 1019080017
  },
  {
    value: "133 WEST 126 STREET",
    data: 1019110018
  },
  {
    value: "133 WEST 13 STREET",
    data: 1006090062
  },
  {
    value: "133 WEST 130 STREET",
    data: 1019150016
  },
  {
    value: "133 WEST 130 STREET",
    data: 1019150016
  },
  {
    value: "133 WEST 131 STREET",
    data: 1019160117
  },
  {
    value: "133 WEST 131 STREET",
    data: 1019160117
  },
  {
    value: "133 WEST 132 STREET",
    data: 1019170018
  },
  {
    value: "133 WEST 136 STREET",
    data: 1019210018
  },
  {
    value: "133 WEST 14 STREET",
    data: 1007907503
  },
  {
    value: "133 WEST 140 STREET",
    data: 1020090023
  },
  {
    value: "133 WEST 140 STREET",
    data: 1020090023
  },
  {
    value: "133 WEST 144 STREET",
    data: 1020130014
  },
  {
    value: "133 WEST 144 STREET",
    data: 1020130014
  },
  {
    value: "133 WEST 145 STREET",
    data: 1020140020
  },
  {
    value: "133 WEST 145 STREET",
    data: 1020140020
  },
  {
    value: "133 WEST 17 STREET",
    data: 1007930020
  },
  {
    value: "133 WEST 17 STREET",
    data: 1007930020
  },
  {
    value: "133 WEST 19 STREET",
    data: 1007950020
  },
  {
    value: "133 WEST 21 STREET",
    data: 1007970018
  },
  {
    value: "133 WEST 22 STREET",
    data: 1007987506
  },
  {
    value: "133 WEST 22 STREET",
    data: 1007987506
  },
  {
    value: "133 WEST 24 STREET",
    data: 1008000021
  },
  {
    value: "133 WEST 25 STREET",
    data: 1008010019
  },
  {
    value: "133 WEST 3 STREET",
    data: 1005430067
  },
  {
    value: "133 WEST 31 STREET",
    data: 1008070022
  },
  {
    value: "133 WEST 4 STREET",
    data: 1005527505
  },
  {
    value: "133 WEST 44 STREET",
    data: 1009970017
  },
  {
    value: "133 WEST 69 STREET",
    data: 1011410020
  },
  {
    value: "133 WEST 70 STREET",
    data: 1011420020
  },
  {
    value: "133 WEST 71 STREET",
    data: 1011430020
  },
  {
    value: "133 WEST 72 STREET",
    data: 1011440019
  },
  {
    value: "133 WEST 74 STREET",
    data: 1011460016
  },
  {
    value: "133 WEST 74 STREET",
    data: 1011460016
  },
  {
    value: "133 WEST 75 STREET",
    data: 1011470016
  },
  {
    value: "133 WEST 77 STREET",
    data: 1011490019
  },
  {
    value: "133 WEST 78 STREET",
    data: 1011500018
  },
  {
    value: "133 WEST 80 STREET",
    data: 1012110121
  },
  {
    value: "133 WEST 81 STREET",
    data: 1012120021
  },
  {
    value: "133 WEST 82 STREET",
    data: 1012130115
  },
  {
    value: "133 WEST 87 STREET",
    data: 1012180121
  },
  {
    value: "133 WEST 89 STREET",
    data: 1012200013
  },
  {
    value: "133 WEST 89 STREET",
    data: 1012200013
  },
  {
    value: "133 WEST 94 STREET",
    data: 1012250019
  },
  {
    value: "133 WEST 95 STREET",
    data: 1012260019
  },
  {
    value: "1330 1 AVENUE",
    data: 1014660003
  },
  {
    value: "1330 1 AVENUE",
    data: 1014660003
  },
  {
    value: "1330 3 AVENUE",
    data: 1014110033
  },
  {
    value: "1330 5 AVENUE",
    data: 1015950031
  },
  {
    value: "1330 5 AVENUE",
    data: 1015950031
  },
  {
    value: "1330 AVENUE OF THE AMER",
    data: 1012690001
  },
  {
    value: "1330 BROADWAY",
    data: 1008360083
  },
  {
    value: "1331 ST NICHOLAS AVENUE",
    data: 1021440049
  },
  {
    value: "1332 3 AVENUE",
    data: 1014110034
  },
  {
    value: "1332 3 AVENUE",
    data: 1014110034
  },
  {
    value: "1332 ST NICHOLAS AVENUE",
    data: 1021330034
  },
  {
    value: "1332 ST NICHOLAS AVENUE",
    data: 1021330034
  },
  {
    value: "1333 BROADWAY",
    data: 1008110021
  },
  {
    value: "1334 3 AVENUE",
    data: 1014110040
  },
  {
    value: "1334 3 AVENUE",
    data: 1014110040
  },
  {
    value: "1334 YORK AVENUE",
    data: 1014830001
  },
  {
    value: "1335 AVENUE OF THE AMER",
    data: 1010067502
  },
  {
    value: "1337 5 AVENUE",
    data: 1016180001
  },
  {
    value: "1337 5 AVENUE",
    data: 1016180001
  },
  {
    value: "1339 3 AVENUE",
    data: 1014310048
  },
  {
    value: "1339 3 AVENUE",
    data: 1014310048
  },
  {
    value: "1339 MADISON AVENUE",
    data: 1015060021
  },
  {
    value: "1339 YORK AVENUE",
    data: 1014660021
  },
  {
    value: "134 10 AVENUE",
    data: 1007160003
  },
  {
    value: "134 5 AVENUE",
    data: 1008200044
  },
  {
    value: "134 9 AVENUE",
    data: 1007420004
  },
  {
    value: "134 AVENUE C",
    data: 1003780004
  },
  {
    value: "134 AVENUE C",
    data: 1003780004
  },
  {
    value: "134 AVENUE D",
    data: 1003620001
  },
  {
    value: "134 AVENUE D",
    data: 1003620001
  },
  {
    value: "134 BANK STREET",
    data: 1006340008
  },
  {
    value: "134 BEEKMAN STREET",
    data: 1000970045
  },
  {
    value: "134 BOWERY",
    data: 1004700059
  },
  {
    value: "134 CHARLES STREET",
    data: 1006310013
  },
  {
    value: "134 COLUMBUS AVENUE",
    data: 1011370036
  },
  {
    value: "134 DELANCEY STREET",
    data: 1003530083
  },
  {
    value: "134 DUANE STREET",
    data: 1001460021
  },
  {
    value: "134 DUANE STREET",
    data: 1001460021
  },
  {
    value: "134 EAST 101 STREET",
    data: 1016280060
  },
  {
    value: "134 EAST 122 STREET",
    data: 1017700159
  },
  {
    value: "134 EAST 122 STREET",
    data: 1017700159
  },
  {
    value: "134 EAST 124 STREET",
    data: 1017720058
  },
  {
    value: "134 EAST 13 STREET",
    data: 1005580024
  },
  {
    value: "134 EAST 16 STREET",
    data: 1008710053
  },
  {
    value: "134 EAST 17 STREET",
    data: 1008720051
  },
  {
    value: "134 EAST 17 STREET",
    data: 1008720051
  },
  {
    value: "134 EAST 19 STREET",
    data: 1008740053
  },
  {
    value: "134 EAST 22 STREET",
    data: 1008770060
  },
  {
    value: "134 EAST 22 STREET",
    data: 1008770060
  },
  {
    value: "134 EAST 24 STREET",
    data: 1008790064
  },
  {
    value: "134 EAST 26 STREET",
    data: 1008810060
  },
  {
    value: "134 EAST 28 STREET",
    data: 1008830064
  },
  {
    value: "134 EAST 36 STREET",
    data: 1008910071
  },
  {
    value: "134 EAST 38 STREET",
    data: 1008930271
  },
  {
    value: "134 EAST 40 STREET",
    data: 1008950067
  },
  {
    value: "134 EAST 61 STREET",
    data: 1013950059
  },
  {
    value: "134 EAST 62 STREET",
    data: 1013960059
  },
  {
    value: "134 EAST 64 STREET",
    data: 1013980160
  },
  {
    value: "134 EAST 65 STREET",
    data: 1013990049
  },
  {
    value: "134 EAST 70 STREET",
    data: 1014040058
  },
  {
    value: "134 EAST 71 STREET",
    data: 1014050059
  },
  {
    value: "134 EAST 73 STREET",
    data: 1014070160
  },
  {
    value: "134 EAST 74 STREET",
    data: 1014080059
  },
  {
    value: "134 EAST 80 STREET",
    data: 1015080159
  },
  {
    value: "134 EAST 82 STREET",
    data: 1015100057
  },
  {
    value: "134 EAST 92 STREET",
    data: 1015200059
  },
  {
    value: "134 EAST 93 STREET",
    data: 1015217501
  },
  {
    value: "134 EAST 93 STREET",
    data: 1015217501
  },
  {
    value: "134 EAST 95 STREET",
    data: 1015230061
  },
  {
    value: "134 EAST 96 STREET",
    data: 1015240059
  },
  {
    value: "134 EAST BROADWAY",
    data: 1002830058
  },
  {
    value: "134 EDGECOMBE AVENUE",
    data: 1020430004
  },
  {
    value: "134 ELDRIDGE STREET",
    data: 1004140001
  },
  {
    value: "134 GRAND STREET",
    data: 1004730051
  },
  {
    value: "134 GRAND STREET",
    data: 1004730051
  },
  {
    value: "134 HAVEN AVENUE",
    data: 1021390268
  },
  {
    value: "134 HAVEN AVENUE",
    data: 1021390268
  },
  {
    value: "134 HENRY STREET",
    data: 1002730032
  },
  {
    value: "134 LEXINGTON AVENUE",
    data: 1008840067
  },
  {
    value: "134 MADISON AVENUE",
    data: 1008610015
  },
  {
    value: "134 MANHATTAN AVENUE",
    data: 1018410049
  },
  {
    value: "134 ORCHARD STREET",
    data: 1004100008
  },
  {
    value: "134 ORCHARD STREET",
    data: 1004100008
  },
  {
    value: "134 READE STREET",
    data: 1001410002
  },
  {
    value: "134 SULLIVAN STREET",
    data: 1005180042
  },
  {
    value: "134 WEST 10 STREET",
    data: 1006107503
  },
  {
    value: "134 WEST 109 STREET",
    data: 1018630053
  },
  {
    value: "134 WEST 109 STREET",
    data: 1018630053
  },
  {
    value: "134 WEST 11 STREET",
    data: 1006060044
  },
  {
    value: "134 WEST 111 STREET",
    data: 1018200050
  },
  {
    value: "134 WEST 113 STREET",
    data: 1018220054
  },
  {
    value: "134 WEST 113 STREET",
    data: 1018220054
  },
  {
    value: "134 WEST 117 STREET",
    data: 1019010047
  },
  {
    value: "134 WEST 118 STREET",
    data: 1019020148
  },
  {
    value: "134 WEST 119 STREET",
    data: 1019030050
  },
  {
    value: "134 WEST 120 STREET",
    data: 1019040048
  },
  {
    value: "134 WEST 121 STREET",
    data: 1019050049
  },
  {
    value: "134 WEST 123 STREET",
    data: 1019070149
  },
  {
    value: "134 WEST 127 STREET",
    data: 1019110050
  },
  {
    value: "134 WEST 129 STREET",
    data: 1019130048
  },
  {
    value: "134 WEST 129 STREET",
    data: 1019130048
  },
  {
    value: "134 WEST 13 STREET",
    data: 1006087504
  },
  {
    value: "134 WEST 130 STREET",
    data: 1019140047
  },
  {
    value: "134 WEST 131 STREET",
    data: 1019150049
  },
  {
    value: "134 WEST 132 STREET",
    data: 1019160147
  },
  {
    value: "134 WEST 133 STREET",
    data: 1019170046
  },
  {
    value: "134 WEST 136 STREET",
    data: 1019200047
  },
  {
    value: "134 WEST 139 STREET",
    data: 1020070055
  },
  {
    value: "134 WEST 143 STREET",
    data: 1020110052
  },
  {
    value: "134 WEST 143 STREET",
    data: 1020110052
  },
  {
    value: "134 WEST 15 STREET",
    data: 1007900056
  },
  {
    value: "134 WEST 15 STREET",
    data: 1007900056
  },
  {
    value: "134 WEST 18 STREET",
    data: 1007930058
  },
  {
    value: "134 WEST 20 STREET",
    data: 1007950061
  },
  {
    value: "134 WEST 20 STREET",
    data: 1007950061
  },
  {
    value: "134 WEST 23 STREET",
    data: 1007980062
  },
  {
    value: "134 WEST 25 STREET",
    data: 1008000059
  },
  {
    value: "134 WEST 26 STREET",
    data: 1008010061
  },
  {
    value: "134 WEST 29 STREET",
    data: 1008040059
  },
  {
    value: "134 WEST 3 STREET",
    data: 1005430012
  },
  {
    value: "134 WEST 30 STREET",
    data: 1008050082
  },
  {
    value: "134 WEST 34 STREET",
    data: 1008090064
  },
  {
    value: "134 WEST 37 STREET",
    data: 1008120063
  },
  {
    value: "134 WEST 4 STREET",
    data: 1005430050
  },
  {
    value: "134 WEST 46 STREET",
    data: 1009980050
  },
  {
    value: "134 WEST 58 STREET",
    data: 1010100046
  },
  {
    value: "134 WEST 58 STREET",
    data: 1010100046
  },
  {
    value: "134 WEST 70 STREET",
    data: 1011410045
  },
  {
    value: "134 WEST 71 STREET",
    data: 1011420046
  },
  {
    value: "134 WEST 72 STREET",
    data: 1011430146
  },
  {
    value: "134 WEST 73 STREET",
    data: 1011440046
  },
  {
    value: "134 WEST 74 STREET",
    data: 1011450047
  },
  {
    value: "134 WEST 78 STREET",
    data: 1011490047
  },
  {
    value: "134 WEST 80 STREET",
    data: 1012100149
  },
  {
    value: "134 WEST 81 STREET",
    data: 1012110048
  },
  {
    value: "134 WEST 82 STREET",
    data: 1012120047
  },
  {
    value: "134 WEST 82 STREET",
    data: 1012120047
  },
  {
    value: "134 WEST 83 STREET",
    data: 1012130048
  },
  {
    value: "134 WEST 86 STREET",
    data: 1012160047
  },
  {
    value: "134 WEST 87 STREET",
    data: 1012170046
  },
  {
    value: "134 WEST 88 STREET",
    data: 1012180043
  },
  {
    value: "134 WEST 92 STREET",
    data: 1012220049
  },
  {
    value: "134 WEST 93 STREET",
    data: 1012237504
  },
  {
    value: "134 WEST 93 STREET",
    data: 1012237504
  },
  {
    value: "134 WEST 95 STREET",
    data: 1012257502
  },
  {
    value: "134 WEST BROADWAY",
    data: 1001440030
  },
  {
    value: "134 WEST HOUSTON STREET",
    data: 1005260077
  },
  {
    value: "134 WOOSTER STREET",
    data: 1005140001
  },
  {
    value: "1340 AVENUE OF THE AMER",
    data: 1012700001
  },
  {
    value: "1340 LEXINGTON AVENUE",
    data: 1015180016
  },
  {
    value: "1340 ST NICHOLAS AVENUE",
    data: 1021330060
  },
  {
    value: "1340 ST NICHOLAS AVENUE",
    data: 1021330060
  },
  {
    value: "1341 2 AVENUE",
    data: 1014250025
  },
  {
    value: "1341 LEXINGTON AVENUE",
    data: 1015180024
  },
  {
    value: "1341 LEXINGTON AVENUE",
    data: 1015180024
  },
  {
    value: "1341 ST NICHOLAS AVENUE",
    data: 1021440045
  },
  {
    value: "1341 ST NICHOLAS AVENUE",
    data: 1021440045
  },
  {
    value: "1342 LEXINGTON AVENUE",
    data: 1015180017
  },
  {
    value: "1343 2 AVENUE",
    data: 1014250026
  },
  {
    value: "1343 AMSTERDAM AVENUE",
    data: 1019660031
  },
  {
    value: "1344 1 AVENUE",
    data: 1014670001
  },
  {
    value: "1344 1 AVENUE",
    data: 1014670001
  },
  {
    value: "1344 LEXINGTON AVENUE",
    data: 1015180117
  },
  {
    value: "1344 ST NICHOLAS AVENUE",
    data: 1021330062
  },
  {
    value: "1344 ST NICHOLAS AVENUE",
    data: 1021330062
  },
  {
    value: "1345 2 AVENUE",
    data: 1014250027
  },
  {
    value: "1345 2 AVENUE",
    data: 1014250027
  },
  {
    value: "1345 3 AVENUE",
    data: 1014310046
  },
  {
    value: "1345 AMSTERDAM AVENUE",
    data: 1019660033
  },
  {
    value: "1345 AMSTERDAM AVENUE",
    data: 1019660033
  },
  {
    value: "1346 LEXINGTON AVENUE",
    data: 1015180018
  },
  {
    value: "1347 1 AVENUE",
    data: 1014470023
  },
  {
    value: "1347 1 AVENUE",
    data: 1014470023
  },
  {
    value: "1347 2 AVENUE",
    data: 1014250028
  },
  {
    value: "1347 2 AVENUE",
    data: 1014250028
  },
  {
    value: "1347 3 AVENUE",
    data: 1014310045
  },
  {
    value: "1347 3 AVENUE",
    data: 1014310045
  },
  {
    value: "1348 LEXINGTON AVENUE",
    data: 1015180019
  },
  {
    value: "1348 ST NICHOLAS AVENUE",
    data: 1021330063
  },
  {
    value: "1348 ST NICHOLAS AVENUE",
    data: 1021330063
  },
  {
    value: "1349 2 AVENUE",
    data: 1014260021
  },
  {
    value: "1349 2 AVENUE",
    data: 1014260021
  },
  {
    value: "1349 LEXINGTON AVENUE",
    data: 1015180049
  },
  {
    value: "1349 LEXINGTON AVENUE",
    data: 1015180049
  },
  {
    value: "135 2 AVENUE",
    data: 1004640039
  },
  {
    value: "135 3 AVENUE",
    data: 1008960048
  },
  {
    value: "135 3 AVENUE",
    data: 1008960048
  },
  {
    value: "135 5 AVENUE",
    data: 1008490001
  },
  {
    value: "135 7 AVENUE",
    data: 1007940001
  },
  {
    value: "135 ALLEN STREET",
    data: 1004150027
  },
  {
    value: "135 AVENUE A",
    data: 1004360030
  },
  {
    value: "135 AVENUE A",
    data: 1004360030
  },
  {
    value: "135 BOWERY",
    data: 1004237501
  },
  {
    value: "135 CENTRAL PARK WEST",
    data: 1011260029
  },
  {
    value: "135 CENTRAL PARK WEST",
    data: 1011260029
  },
  {
    value: "135 CHRISTOPHER STREET",
    data: 1006300051
  },
  {
    value: "135 CHRYSTIE STREET",
    data: 1004240029
  },
  {
    value: "135 CHRYSTIE STREET",
    data: 1004240029
  },
  {
    value: "135 DIVISION STREET",
    data: 1002837502
  },
  {
    value: "135 DIVISION STREET",
    data: 1002837502
  },
  {
    value: "135 EAST 110 STREET",
    data: 1016380014
  },
  {
    value: "135 EAST 110 STREET",
    data: 1016380014
  },
  {
    value: "135 EAST 122 STREET",
    data: 1017710014
  },
  {
    value: "135 EAST 122 STREET",
    data: 1017710014
  },
  {
    value: "135 EAST 15 STREET",
    data: 1008710031
  },
  {
    value: "135 EAST 17 STREET",
    data: 1008730028
  },
  {
    value: "135 EAST 17 STREET",
    data: 1008730028
  },
  {
    value: "135 EAST 18 STREET",
    data: 1008740026
  },
  {
    value: "135 EAST 19 STREET",
    data: 1008750032
  },
  {
    value: "135 EAST 2 STREET",
    data: 1004290028
  },
  {
    value: "135 EAST 23 STREET",
    data: 1008790023
  },
  {
    value: "135 EAST 29 STREET",
    data: 1008850032
  },
  {
    value: "135 EAST 35 STREET",
    data: 1008910021
  },
  {
    value: "135 EAST 36 STREET",
    data: 1008920019
  },
  {
    value: "135 EAST 38 STREET",
    data: 1008940030
  },
  {
    value: "135 EAST 39 STREET",
    data: 1008950031
  },
  {
    value: "135 EAST 39 STREET",
    data: 1008950031
  },
  {
    value: "135 EAST 45 STREET",
    data: 1013000024
  },
  {
    value: "135 EAST 50 STREET",
    data: 1013050023
  },
  {
    value: "135 EAST 50 STREET",
    data: 1013050023
  },
  {
    value: "135 EAST 54 STREET",
    data: 1013097502
  },
  {
    value: "135 EAST 54 STREET",
    data: 1013097502
  },
  {
    value: "135 EAST 56 STREET",
    data: 1013110114
  },
  {
    value: "135 EAST 57 STREET",
    data: 1013120015
  },
  {
    value: "135 EAST 62 STREET",
    data: 1013970014
  },
  {
    value: "135 EAST 92 STREET",
    data: 1015210016
  },
  {
    value: "135 EAST 93 STREET",
    data: 1015220016
  },
  {
    value: "135 EAST 93 STREET",
    data: 1015220016
  },
  {
    value: "135 EAST 94 STREET",
    data: 1015230013
  },
  {
    value: "135 EAST 95 STREET",
    data: 1015240013
  },
  {
    value: "135 EAST 96 STREET",
    data: 1016240010
  },
  {
    value: "135 EAST BROADWAY",
    data: 1002830037
  },
  {
    value: "135 EAST HOUSTON STREET",
    data: 1004220047
  },
  {
    value: "135 EDGECOMBE AVENUE",
    data: 1020510012
  },
  {
    value: "135 ELDRIDGE STREET",
    data: 1004190066
  },
  {
    value: "135 ELDRIDGE STREET",
    data: 1004190066
  },
  {
    value: "135 GRAND STREET",
    data: 1002330009
  },
  {
    value: "135 HAMILTON PLACE",
    data: 1020740033
  },
  {
    value: "135 HAMILTON PLACE",
    data: 1020740033
  },
  {
    value: "135 HENRY STREET",
    data: 1002830014
  },
  {
    value: "135 HUDSON STREET",
    data: 1002140025
  },
  {
    value: "135 HUDSON STREET",
    data: 1002140025
  },
  {
    value: "135 JOHN STREET",
    data: 1000750008
  },
  {
    value: "135 LEXINGTON AVENUE",
    data: 1008840060
  },
  {
    value: "135 LEXINGTON AVENUE",
    data: 1008840060
  },
  {
    value: "135 LUDLOW STREET",
    data: 1004110032
  },
  {
    value: "135 MADISON AVENUE",
    data: 1008610022
  },
  {
    value: "135 MANHATTAN AVENUE",
    data: 1018410151
  },
  {
    value: "135 MERCER STREET",
    data: 1004990021
  },
  {
    value: "135 MOTT STREET",
    data: 1002370023
  },
  {
    value: "135 MOTT STREET",
    data: 1002370023
  },
  {
    value: "135 NORFOLK STREET",
    data: 1003540029
  },
  {
    value: "135 ORCHARD STREET",
    data: 1004150069
  },
  {
    value: "135 ORCHARD STREET",
    data: 1004150069
  },
  {
    value: "135 PERRY STREET",
    data: 1006330030
  },
  {
    value: "135 PERRY STREET",
    data: 1006330030
  },
  {
    value: "135 READE STREET",
    data: 1001400029
  },
  {
    value: "135 RIVINGTON STREET",
    data: 1003530059
  },
  {
    value: "135 SPRING STREET",
    data: 1005000038
  },
  {
    value: "135 SULLIVAN STREET",
    data: 1005170001
  },
  {
    value: "135 SULLIVAN STREET",
    data: 1005170001
  },
  {
    value: "135 TERRACE VIEW AVENUE",
    data: 1022150061
  },
  {
    value: "135 TERRACE VIEW AVENUE",
    data: 1022150061
  },
  {
    value: "135 WEST 10 STREET",
    data: 1006110067
  },
  {
    value: "135 WEST 10 STREET",
    data: 1006110067
  },
  {
    value: "135 WEST 112 STREET",
    data: 1018220008
  },
  {
    value: "135 WEST 112 STREET",
    data: 1018220008
  },
  {
    value: "135 WEST 115 STREET",
    data: 1018250010
  },
  {
    value: "135 WEST 115 STREET",
    data: 1018250010
  },
  {
    value: "135 WEST 116 STREET",
    data: 1019010015
  },
  {
    value: "135 WEST 117 STREET",
    data: 1019020114
  },
  {
    value: "135 WEST 118 STREET",
    data: 1019030014
  },
  {
    value: "135 WEST 119 STREET",
    data: 1019040015
  },
  {
    value: "135 WEST 12 STREET",
    data: 1006080059
  },
  {
    value: "135 WEST 120 STREET",
    data: 1019050014
  },
  {
    value: "135 WEST 122 STREET",
    data: 1019070115
  },
  {
    value: "135 WEST 126 STREET",
    data: 1019110017
  },
  {
    value: "135 WEST 128 STREET",
    data: 1019130013
  },
  {
    value: "135 WEST 13 STREET",
    data: 1006090063
  },
  {
    value: "135 WEST 130 STREET",
    data: 1019150015
  },
  {
    value: "135 WEST 131 STREET",
    data: 1019160017
  },
  {
    value: "135 WEST 131 STREET",
    data: 1019160017
  },
  {
    value: "135 WEST 132 STREET",
    data: 1019170016
  },
  {
    value: "135 WEST 132 STREET",
    data: 1019170016
  },
  {
    value: "135 WEST 135 STREET",
    data: 1019200014
  },
  {
    value: "135 WEST 135 STREET",
    data: 1019200014
  },
  {
    value: "135 WEST 136 STREET",
    data: 1019210117
  },
  {
    value: "135 WEST 138 STREET",
    data: 1020070010
  },
  {
    value: "135 WEST 138 STREET",
    data: 1020070010
  },
  {
    value: "135 WEST 14 STREET",
    data: 1007907504
  },
  {
    value: "135 WEST 142 STREET",
    data: 1020110018
  },
  {
    value: "135 WEST 142 STREET",
    data: 1020110018
  },
  {
    value: "135 WEST 143 STREET",
    data: 1020120018
  },
  {
    value: "135 WEST 143 STREET",
    data: 1020120018
  },
  {
    value: "135 WEST 15 STREET",
    data: 1007910021
  },
  {
    value: "135 WEST 16 STREET",
    data: 1007927501
  },
  {
    value: "135 WEST 17 STREET",
    data: 1007930017
  },
  {
    value: "135 WEST 17 STREET",
    data: 1007930017
  },
  {
    value: "135 WEST 18 STREET",
    data: 1007940017
  },
  {
    value: "135 WEST 20 STREET",
    data: 1007960018
  },
  {
    value: "135 WEST 225 STREET",
    data: 1022150470
  },
  {
    value: "135 WEST 225 STREET",
    data: 1022150470
  },
  {
    value: "135 WEST 24 STREET",
    data: 1008000020
  },
  {
    value: "135 WEST 24 STREET",
    data: 1008000020
  },
  {
    value: "135 WEST 26 STREET",
    data: 1008020019
  },
  {
    value: "135 WEST 27 STREET",
    data: 1008030016
  },
  {
    value: "135 WEST 28 STREET",
    data: 1008040017
  },
  {
    value: "135 WEST 28 STREET",
    data: 1008040017
  },
  {
    value: "135 WEST 29 STREET",
    data: 1008050019
  },
  {
    value: "135 WEST 3 STREET",
    data: 1005437501
  },
  {
    value: "135 WEST 30 STREET",
    data: 1008060013
  },
  {
    value: "135 WEST 36 STREET",
    data: 1008120019
  },
  {
    value: "135 WEST 4 STREET",
    data: 1005527503
  },
  {
    value: "135 WEST 50 STREET",
    data: 1010030005
  },
  {
    value: "135 WEST 52 STREET",
    data: 1010057501
  },
  {
    value: "135 WEST 58 STREET",
    data: 1010117504
  },
  {
    value: "135 WEST 58 STREET",
    data: 1010117504
  },
  {
    value: "135 WEST 67 STREET",
    data: 1011390008
  },
  {
    value: "135 WEST 69 STREET",
    data: 1011410019
  },
  {
    value: "135 WEST 70 STREET",
    data: 1011427501
  },
  {
    value: "135 WEST 70 STREET",
    data: 1011427501
  },
  {
    value: "135 WEST 72 STREET",
    data: 1011440018
  },
  {
    value: "135 WEST 74 STREET",
    data: 1011460015
  },
  {
    value: "135 WEST 75 STREET",
    data: 1011470115
  },
  {
    value: "135 WEST 77 STREET",
    data: 1011490018
  },
  {
    value: "135 WEST 78 STREET",
    data: 1011500017
  },
  {
    value: "135 WEST 79 STREET",
    data: 1012100017
  },
  {
    value: "135 WEST 79 STREET",
    data: 1012100017
  },
  {
    value: "135 WEST 80 STREET",
    data: 1012110021
  },
  {
    value: "135 WEST 81 STREET",
    data: 1012120020
  },
  {
    value: "135 WEST 82 STREET",
    data: 1012130015
  },
  {
    value: "135 WEST 83 STREET",
    data: 1012140019
  },
  {
    value: "135 WEST 87 STREET",
    data: 1012180021
  },
  {
    value: "135 WEST 89 STREET",
    data: 1012200012
  },
  {
    value: "135 WEST 89 STREET",
    data: 1012200012
  },
  {
    value: "135 WEST 94 STREET",
    data: 1012250018
  },
  {
    value: "135 WEST 95 STREET",
    data: 1012260018
  },
  {
    value: "135 WEST BROADWAY",
    data: 1001470012
  },
  {
    value: "135 WILLIAM STREET",
    data: 1000780001
  },
  {
    value: "135 WILLIAM STREET",
    data: 1000780001
  },
  {
    value: "135 WOOSTER STREET",
    data: 1005150036
  },
  {
    value: "1350 AMSTERDAM AVENUE",
    data: 1019820029
  },
  {
    value: "1350 AMSTERDAM AVENUE",
    data: 1019820029
  },
  {
    value: "1350 AVENUE OF THE AMER",
    data: 1012700071
  },
  {
    value: "1350 BROADWAY",
    data: 1008110031
  },
  {
    value: "1350 LEXINGTON AVENUE",
    data: 1015180020
  },
  {
    value: "1351 AMSTERDAM AVENUE",
    data: 1019660108
  },
  {
    value: "1351 PARK AVENUE",
    data: 1016290172
  },
  {
    value: "1351 ST NICHOLAS AVENUE",
    data: 1021440042
  },
  {
    value: "1351 ST NICHOLAS AVENUE",
    data: 1021440042
  },
  {
    value: "1352 1 AVENUE",
    data: 1014670048
  },
  {
    value: "1352 BROADWAY",
    data: 1008120029
  },
  {
    value: "1352 LEXINGTON AVENUE",
    data: 1015180159
  },
  {
    value: "1352 ST NICHOLAS AVENUE",
    data: 1021330065
  },
  {
    value: "1352 ST NICHOLAS AVENUE",
    data: 1021330065
  },
  {
    value: "1353 PARK AVENUE",
    data: 1016290072
  },
  {
    value: "1354 1 AVENUE",
    data: 1014670047
  },
  {
    value: "1354 1 AVENUE",
    data: 1014670047
  },
  {
    value: "1354 LEXINGTON AVENUE",
    data: 1015187501
  },
  {
    value: "1355 1 AVENUE",
    data: 1014477502
  },
  {
    value: "1355 2 AVENUE",
    data: 1014260024
  },
  {
    value: "1355 2 AVENUE",
    data: 1014260024
  },
  {
    value: "1355 AMSTERDAM AVENUE",
    data: 1019660107
  },
  {
    value: "1356 1 AVENUE",
    data: 1014677501
  },
  {
    value: "1356 1 AVENUE",
    data: 1014677501
  },
  {
    value: "1356 MADISON AVENUE",
    data: 1015070016
  },
  {
    value: "1356 MADISON AVENUE",
    data: 1015070016
  },
  {
    value: "1356 ST NICHOLAS AVENUE",
    data: 1021330066
  },
  {
    value: "1356 ST NICHOLAS AVENUE",
    data: 1021330066
  },
  {
    value: "1357 2 AVENUE",
    data: 1014260025
  },
  {
    value: "1357 2 AVENUE",
    data: 1014260025
  },
  {
    value: "1359 1 AVENUE",
    data: 1014470030
  },
  {
    value: "1359 1 AVENUE",
    data: 1014470030
  },
  {
    value: "1359 3 AVENUE",
    data: 1014320045
  },
  {
    value: "1359 3 AVENUE",
    data: 1014320045
  },
  {
    value: "1359 BROADWAY",
    data: 1008120022
  },
  {
    value: "136 1/2 WEST 15 STREET",
    data: 1007907501
  },
  {
    value: "136 10 AVENUE",
    data: 1007160004
  },
  {
    value: "136 2 AVENUE",
    data: 1004500003
  },
  {
    value: "136 5 AVENUE",
    data: 1008200045
  },
  {
    value: "136 9 AVENUE",
    data: 1007420076
  },
  {
    value: "136 BANK STREET",
    data: 1006340007
  },
  {
    value: "136 BAXTER STREET",
    data: 1002357501
  },
  {
    value: "136 BAXTER STREET",
    data: 1002357501
  },
  {
    value: "136 BEEKMAN STREET",
    data: 1000970044
  },
  {
    value: "136 BOWERY",
    data: 1004700058
  },
  {
    value: "136 DELANCEY STREET",
    data: 1003530080
  },
  {
    value: "136 DIVISION STREET",
    data: 1002940028
  },
  {
    value: "136 EAST 117 STREET",
    data: 1016440059
  },
  {
    value: "136 EAST 117 STREET",
    data: 1016440059
  },
  {
    value: "136 EAST 124 STREET",
    data: 1017720057
  },
  {
    value: "136 EAST 16 STREET",
    data: 1008710052
  },
  {
    value: "136 EAST 19 STREET",
    data: 1008747503
  },
  {
    value: "136 EAST 28 STREET",
    data: 1008830063
  },
  {
    value: "136 EAST 28 STREET",
    data: 1008830063
  },
  {
    value: "136 EAST 30 STREET",
    data: 1008850060
  },
  {
    value: "136 EAST 31 STREET",
    data: 1008860060
  },
  {
    value: "136 EAST 38 STREET",
    data: 1008930171
  },
  {
    value: "136 EAST 39 STREET",
    data: 1008940061
  },
  {
    value: "136 EAST 55 STREET",
    data: 1013090050
  },
  {
    value: "136 EAST 55 STREET",
    data: 1013090050
  },
  {
    value: "136 EAST 56 STREET",
    data: 1013100059
  },
  {
    value: "136 EAST 56 STREET",
    data: 1013100059
  },
  {
    value: "136 EAST 61 STREET",
    data: 1013950058
  },
  {
    value: "136 EAST 65 STREET",
    data: 1013990048
  },
  {
    value: "136 EAST 67 STREET",
    data: 1014010042
  },
  {
    value: "136 EAST 71 STREET",
    data: 1014050158
  },
  {
    value: "136 EAST 73 STREET",
    data: 1014070060
  },
  {
    value: "136 EAST 79 STREET",
    data: 1014130057
  },
  {
    value: "136 EAST 79 STREET",
    data: 1014130057
  },
  {
    value: "136 EAST 80 STREET",
    data: 1015080059
  },
  {
    value: "136 EAST 82 STREET",
    data: 1015100056
  },
  {
    value: "136 EAST 92 STREET",
    data: 1015200058
  },
  {
    value: "136 EAST 95 STREET",
    data: 1015230160
  },
  {
    value: "136 EAST 96 STREET",
    data: 1015240058
  },
  {
    value: "136 EAST BROADWAY",
    data: 1002837503
  },
  {
    value: "136 EAST BROADWAY",
    data: 1002837503
  },
  {
    value: "136 EDGECOMBE AVENUE",
    data: 1020430025
  },
  {
    value: "136 ELDRIDGE STREET",
    data: 1004140002
  },
  {
    value: "136 ELDRIDGE STREET",
    data: 1004140002
  },
  {
    value: "136 HENRY STREET",
    data: 1002730031
  },
  {
    value: "136 HILLSIDE AVENUE",
    data: 1021730043
  },
  {
    value: "136 LEXINGTON AVENUE",
    data: 1008840068
  },
  {
    value: "136 LUDLOW STREET",
    data: 1004110041
  },
  {
    value: "136 MANHATTAN AVENUE",
    data: 1018410048
  },
  {
    value: "136 ORCHARD STREET",
    data: 1004100009
  },
  {
    value: "136 ORCHARD STREET",
    data: 1004100009
  },
  {
    value: "136 SULLIVAN STREET",
    data: 1005187503
  },
  {
    value: "136 WATTS STREET",
    data: 1005950048
  },
  {
    value: "136 WEST 109 STREET",
    data: 1018630054
  },
  {
    value: "136 WEST 11 STREET",
    data: 1006060043
  },
  {
    value: "136 WEST 111 STREET",
    data: 1018200051
  },
  {
    value: "136 WEST 111 STREET",
    data: 1018200051
  },
  {
    value: "136 WEST 113 STREET",
    data: 1018220055
  },
  {
    value: "136 WEST 113 STREET",
    data: 1018220055
  },
  {
    value: "136 WEST 117 STREET",
    data: 1019010048
  },
  {
    value: "136 WEST 118 STREET",
    data: 1019020049
  },
  {
    value: "136 WEST 119 STREET",
    data: 1019030051
  },
  {
    value: "136 WEST 120 STREET",
    data: 1019040148
  },
  {
    value: "136 WEST 121 STREET",
    data: 1019050050
  },
  {
    value: "136 WEST 123 STREET",
    data: 1019077508
  },
  {
    value: "136 WEST 127 STREET",
    data: 1019110150
  },
  {
    value: "136 WEST 127 STREET",
    data: 1019110150
  },
  {
    value: "136 WEST 129 STREET",
    data: 1019130049
  },
  {
    value: "136 WEST 13 STREET",
    data: 1006080021
  },
  {
    value: "136 WEST 13 STREET",
    data: 1006080021
  },
  {
    value: "136 WEST 130 STREET",
    data: 1019140048
  },
  {
    value: "136 WEST 131 STREET",
    data: 1019150050
  },
  {
    value: "136 WEST 132 STREET",
    data: 1019160048
  },
  {
    value: "136 WEST 133 STREET",
    data: 1019170047
  },
  {
    value: "136 WEST 136 STREET",
    data: 1019200147
  },
  {
    value: "136 WEST 136 STREET",
    data: 1019200147
  },
  {
    value: "136 WEST 137 STREET",
    data: 1019210049
  },
  {
    value: "136 WEST 139 STREET",
    data: 1020070056
  },
  {
    value: "136 WEST 15 STREET",
    data: 1007900057
  },
  {
    value: "136 WEST 16 STREET",
    data: 1007910066
  },
  {
    value: "136 WEST 16 STREET",
    data: 1007910066
  },
  {
    value: "136 WEST 17 STREET",
    data: 1007927507
  },
  {
    value: "136 WEST 18 STREET",
    data: 1007930059
  },
  {
    value: "136 WEST 21 STREET",
    data: 1007960060
  },
  {
    value: "136 WEST 22 STREET",
    data: 1007977504
  },
  {
    value: "136 WEST 24 STREET",
    data: 1007990060
  },
  {
    value: "136 WEST 24 STREET",
    data: 1007999060
  },
  {
    value: "136 WEST 28 STREET",
    data: 1008030060
  },
  {
    value: "136 WEST 28 STREET",
    data: 1008030060
  },
  {
    value: "136 WEST 3 STREET",
    data: 1005430010
  },
  {
    value: "136 WEST 34 STREET",
    data: 1008090065
  },
  {
    value: "136 WEST 4 STREET",
    data: 1005430048
  },
  {
    value: "136 WEST 4 STREET",
    data: 1005430048
  },
  {
    value: "136 WEST 42 STREET",
    data: 1009947503
  },
  {
    value: "136 WEST 44 STREET",
    data: 1009960049
  },
  {
    value: "136 WEST 46 STREET",
    data: 1009980051
  },
  {
    value: "136 WEST 55 STREET",
    data: 1010070049
  },
  {
    value: "136 WEST 70 STREET",
    data: 1011410046
  },
  {
    value: "136 WEST 71 STREET",
    data: 1011420047
  },
  {
    value: "136 WEST 72 STREET",
    data: 1011430047
  },
  {
    value: "136 WEST 73 STREET",
    data: 1011440047
  },
  {
    value: "136 WEST 74 STREET",
    data: 1011450147
  },
  {
    value: "136 WEST 75 STREET",
    data: 1011460049
  },
  {
    value: "136 WEST 75 STREET",
    data: 1011460049
  },
  {
    value: "136 WEST 78 STREET",
    data: 1011490048
  },
  {
    value: "136 WEST 80 STREET",
    data: 1012100050
  },
  {
    value: "136 WEST 81 STREET",
    data: 1012110148
  },
  {
    value: "136 WEST 83 STREET",
    data: 1012130049
  },
  {
    value: "136 WEST 87 STREET",
    data: 1012170146
  },
  {
    value: "136 WEST 88 STREET",
    data: 1012180044
  },
  {
    value: "136 WEST 90 STREET",
    data: 1012200049
  },
  {
    value: "136 WEST 92 STREET",
    data: 1012220149
  },
  {
    value: "136 WEST 95 STREET",
    data: 1012250147
  },
  {
    value: "136 WEST BROADWAY",
    data: 1001440029
  },
  {
    value: "136 WILLIAM STREET",
    data: 1000770018
  },
  {
    value: "136 WILLIAM STREET",
    data: 1000770018
  },
  {
    value: "1360 6 AVENUE",
    data: 1012717501
  },
  {
    value: "1360 AVENUE OF THE AMER",
    data: 1012717501
  },
  {
    value: "1360 ST NICHOLAS AVENUE",
    data: 1021530001
  },
  {
    value: "1360 YORK AVENUE",
    data: 1014840001
  },
  {
    value: "1360 YORK AVENUE",
    data: 1014840001
  },
  {
    value: "1361 1 AVENUE",
    data: 1014480023
  },
  {
    value: "1361 1 AVENUE",
    data: 1014480023
  },
  {
    value: "1361 AMSTERDAM AVENUE",
    data: 1019670040
  },
  {
    value: "1361 AVENUE OF THE AMER",
    data: 1010080029
  },
  {
    value: "1361 AVENUE OF THE AMERICAS",
    data: 1010080029
  },
  {
    value: "1361 LEXINGTON AVENUE",
    data: 1015190020
  },
  {
    value: "1361 MADISON AVENUE",
    data: 1015070021
  },
  {
    value: "1361 MADISON AVENUE",
    data: 1015070021
  },
  {
    value: "1363 1 AVENUE",
    data: 1014480024
  },
  {
    value: "1364 BROADWAY",
    data: 1008120049
  },
  {
    value: "1364 LEXINGTON AVENUE",
    data: 1015190016
  },
  {
    value: "1364 LEXINGTON AVENUE",
    data: 1015190016
  },
  {
    value: "1364 YORK AVENUE",
    data: 1014840051
  },
  {
    value: "1364 YORK AVENUE",
    data: 1014840051
  },
  {
    value: "1365 1 AVENUE",
    data: 1014480025
  },
  {
    value: "1365 1 AVENUE",
    data: 1014480025
  },
  {
    value: "1365 YORK AVENUE",
    data: 1014670021
  },
  {
    value: "1365 YORK AVENUE",
    data: 1014670021
  },
  {
    value: "1366 YORK AVENUE",
    data: 1014840050
  },
  {
    value: "1366 YORK AVENUE",
    data: 1014840050
  },
  {
    value: "1367 1 AVENUE",
    data: 1014480026
  },
  {
    value: "1367 1 AVENUE",
    data: 1014480026
  },
  {
    value: "1367 5 AVENUE",
    data: 1016180014
  },
  {
    value: "1367 BROADWAY",
    data: 1008120056
  },
  {
    value: "1368 AVENUE OF THE AMER",
    data: 1012710071
  },
  {
    value: "1368 LEXINGTON AVENUE",
    data: 1015190056
  },
  {
    value: "1368 YORK AVENUE",
    data: 1014840049
  },
  {
    value: "1368 YORK AVENUE",
    data: 1014840049
  },
  {
    value: "1369 1 AVENUE",
    data: 1014480027
  },
  {
    value: "1369 1 AVENUE",
    data: 1014480027
  },
  {
    value: "136A WEST 117 STREET",
    data: 1019010050
  },
  {
    value: "137 2 AVENUE",
    data: 1004640037
  },
  {
    value: "137 4 AVENUE",
    data: 1005590009
  },
  {
    value: "137 4 AVENUE",
    data: 1005590009
  },
  {
    value: "137 5 AVENUE",
    data: 1008490002
  },
  {
    value: "137 7 AVENUE SOUTH",
    data: 1006110021
  },
  {
    value: "137 AMSTERDAM AVENUE",
    data: 1011370061
  },
  {
    value: "137 AVENUE B",
    data: 1003910006
  },
  {
    value: "137 AVENUE C",
    data: 1003910033
  },
  {
    value: "137 AVENUE OF THE AMER",
    data: 1004910016
  },
  {
    value: "137 BAXTER STREET",
    data: 1002360038
  },
  {
    value: "137 BOWERY",
    data: 1004230005
  },
  {
    value: "137 CENTRAL PARK NORTH",
    data: 1018207501
  },
  {
    value: "137 CENTRAL PARK NORTH",
    data: 1018207501
  },
  {
    value: "137 CHRISTOPHER STREET",
    data: 1006300052
  },
  {
    value: "137 DUANE STREET",
    data: 1001477509
  },
  {
    value: "137 DUANE STREET",
    data: 1001477509
  },
  {
    value: "137 EAST 110 STREET",
    data: 1016380015
  },
  {
    value: "137 EAST 110 STREET",
    data: 1016380015
  },
  {
    value: "137 EAST 116 STREET",
    data: 1016440016
  },
  {
    value: "137 EAST 116 STREET",
    data: 1016440016
  },
  {
    value: "137 EAST 15 STREET",
    data: 1008710032
  },
  {
    value: "137 EAST 18 STREET",
    data: 1008740027
  },
  {
    value: "137 EAST 19 STREET",
    data: 1008750033
  },
  {
    value: "137 EAST 2 STREET",
    data: 1004290029
  },
  {
    value: "137 EAST 25 STREET",
    data: 1008810029
  },
  {
    value: "137 EAST 26 STREET",
    data: 1008820031
  },
  {
    value: "137 EAST 26 STREET",
    data: 1008820031
  },
  {
    value: "137 EAST 27 STREET",
    data: 1008830029
  },
  {
    value: "137 EAST 28 STREET",
    data: 1008840027
  },
  {
    value: "137 EAST 28 STREET",
    data: 1008840027
  },
  {
    value: "137 EAST 29 STREET",
    data: 1008850033
  },
  {
    value: "137 EAST 29 STREET",
    data: 1008850033
  },
  {
    value: "137 EAST 30 STREET",
    data: 1008860033
  },
  {
    value: "137 EAST 35 STREET",
    data: 1008910022
  },
  {
    value: "137 EAST 36 STREET",
    data: 1008920062
  },
  {
    value: "137 EAST 36 STREET",
    data: 1008920062
  },
  {
    value: "137 EAST 37 STREET",
    data: 1005597502
  },
  {
    value: "137 EAST 38 STREET",
    data: 1008940032
  },
  {
    value: "137 EAST 38 STREET",
    data: 1008940032
  },
  {
    value: "137 EAST 44 STREET",
    data: 1012990023
  },
  {
    value: "137 EAST 45 STREET",
    data: 1013000124
  },
  {
    value: "137 EAST 66 STREET",
    data: 1014010027
  },
  {
    value: "137 EAST 66 STREET",
    data: 1014010027
  },
  {
    value: "137 EAST 92 STREET",
    data: 1015210017
  },
  {
    value: "137 EAST 92 STREET",
    data: 1015210017
  },
  {
    value: "137 EAST 94 STREET",
    data: 1015230113
  },
  {
    value: "137 EAST 95 STREET",
    data: 1015240014
  },
  {
    value: "137 EAST 96 STREET",
    data: 1016240011
  },
  {
    value: "137 EAST BROADWAY",
    data: 1002830036
  },
  {
    value: "137 EAST BROADWAY",
    data: 1002830036
  },
  {
    value: "137 EAST HOUSTON STREET",
    data: 1004220048
  },
  {
    value: "137 EDGECOMBE AVENUE",
    data: 1020510013
  },
  {
    value: "137 ESSEX STREET",
    data: 1004110065
  },
  {
    value: "137 FRANKLIN STREET",
    data: 1001790068
  },
  {
    value: "137 GRAND STREET",
    data: 1002330010
  },
  {
    value: "137 GREENE STREET",
    data: 1005140026
  },
  {
    value: "137 GREENWICH STREET",
    data: 1000520010
  },
  {
    value: "137 GREENWICH STREET",
    data: 1000520010
  },
  {
    value: "137 HENRY STREET",
    data: 1002830015
  },
  {
    value: "137 LEXINGTON AVENUE",
    data: 1008850029
  },
  {
    value: "137 LUDLOW STREET",
    data: 1004110031
  },
  {
    value: "137 MANHATTAN AVENUE",
    data: 1018410152
  },
  {
    value: "137 MOTT STREET",
    data: 1002370022
  },
  {
    value: "137 NAGLE AVENUE",
    data: 1021730023
  },
  {
    value: "137 NAGLE AVENUE",
    data: 1021730023
  },
  {
    value: "137 NORFOLK STREET",
    data: 1003540028
  },
  {
    value: "137 ORCHARD STREET",
    data: 1004150068
  },
  {
    value: "137 PERRY STREET",
    data: 1006330031
  },
  {
    value: "137 PRINCE STREET",
    data: 1005150042
  },
  {
    value: "137 READE STREET",
    data: 1001407503
  },
  {
    value: "137 RIVERSIDE DRIVE",
    data: 1012470057
  },
  {
    value: "137 RIVERSIDE DRIVE",
    data: 1012470057
  },
  {
    value: "137 RIVINGTON STREET",
    data: 1003530060
  },
  {
    value: "137 RIVINGTON STREET",
    data: 1003530060
  },
  {
    value: "137 SULLIVAN STREET",
    data: 1005170003
  },
  {
    value: "137 SULLIVAN STREET",
    data: 1005170003
  },
  {
    value: "137 THOMPSON STREET",
    data: 1005170031
  },
  {
    value: "137 THOMPSON STREET",
    data: 1005170031
  },
  {
    value: "137 VARICK STREET",
    data: 1005790070
  },
  {
    value: "137 WAVERLY PLACE",
    data: 1005930001
  },
  {
    value: "137 WEST 111 STREET",
    data: 1018210013
  },
  {
    value: "137 WEST 116 STREET",
    data: 1019010014
  },
  {
    value: "137 WEST 116 STREET",
    data: 1019010014
  },
  {
    value: "137 WEST 117 STREET",
    data: 1019020113
  },
  {
    value: "137 WEST 118 STREET",
    data: 1019030013
  },
  {
    value: "137 WEST 119 STREET",
    data: 1019040014
  },
  {
    value: "137 WEST 12 STREET",
    data: 1006080060
  },
  {
    value: "137 WEST 12 STREET",
    data: 1006080060
  },
  {
    value: "137 WEST 120 STREET",
    data: 1019050013
  },
  {
    value: "137 WEST 122 STREET",
    data: 1019070015
  },
  {
    value: "137 WEST 123 STREET",
    data: 1019080015
  },
  {
    value: "137 WEST 123 STREET",
    data: 1019080015
  },
  {
    value: "137 WEST 126 STREET",
    data: 1019110116
  },
  {
    value: "137 WEST 128 STREET",
    data: 1019130011
  },
  {
    value: "137 WEST 128 STREET",
    data: 1019130011
  },
  {
    value: "137 WEST 13 STREET",
    data: 1006090163
  },
  {
    value: "137 WEST 130 STREET",
    data: 1019150114
  },
  {
    value: "137 WEST 136 STREET",
    data: 1019210017
  },
  {
    value: "137 WEST 137 STREET",
    data: 1020060011
  },
  {
    value: "137 WEST 137 STREET",
    data: 1020060011
  },
  {
    value: "137 WEST 138 STREET",
    data: 1020070009
  },
  {
    value: "137 WEST 138 STREET",
    data: 1020070009
  },
  {
    value: "137 WEST 14 STREET",
    data: 1007900015
  },
  {
    value: "137 WEST 141 STREET",
    data: 1020100006
  },
  {
    value: "137 WEST 141 STREET",
    data: 1020100006
  },
  {
    value: "137 WEST 142 STREET",
    data: 1020110016
  },
  {
    value: "137 WEST 142 STREET",
    data: 1020110016
  },
  {
    value: "137 WEST 144 STREET",
    data: 1020130012
  },
  {
    value: "137 WEST 144 STREET",
    data: 1020130012
  },
  {
    value: "137 WEST 145 STREET",
    data: 1020140018
  },
  {
    value: "137 WEST 145 STREET",
    data: 1020140018
  },
  {
    value: "137 WEST 15 STREET",
    data: 1007910020
  },
  {
    value: "137 WEST 19 STREET",
    data: 1007950019
  },
  {
    value: "137 WEST 23 STREET",
    data: 1007990021
  },
  {
    value: "137 WEST 25 STREET",
    data: 1008017501
  },
  {
    value: "137 WEST 28 STREET",
    data: 1008040016
  },
  {
    value: "137 WEST 31 STREET",
    data: 1008070018
  },
  {
    value: "137 WEST 33 STREET",
    data: 1008090017
  },
  {
    value: "137 WEST 45 STREET",
    data: 1009980015
  },
  {
    value: "137 WEST 67 STREET",
    data: 1011390107
  },
  {
    value: "137 WEST 67 STREET",
    data: 1011390107
  },
  {
    value: "137 WEST 69 STREET",
    data: 1011410118
  },
  {
    value: "137 WEST 71 STREET",
    data: 1011430019
  },
  {
    value: "137 WEST 72 STREET",
    data: 1011440016
  },
  {
    value: "137 WEST 72 STREET",
    data: 1011440016
  },
  {
    value: "137 WEST 74 STREET",
    data: 1011460014
  },
  {
    value: "137 WEST 75 STREET",
    data: 1011470015
  },
  {
    value: "137 WEST 77 STREET",
    data: 1011490017
  },
  {
    value: "137 WEST 78 STREET",
    data: 1011500016
  },
  {
    value: "137 WEST 80 STREET",
    data: 1012110020
  },
  {
    value: "137 WEST 81 STREET",
    data: 1012120019
  },
  {
    value: "137 WEST 82 STREET",
    data: 1012130014
  },
  {
    value: "137 WEST 83 STREET",
    data: 1012140018
  },
  {
    value: "137 WEST 85 STREET",
    data: 1012160015
  },
  {
    value: "137 WEST 86 STREET",
    data: 1012170017
  },
  {
    value: "137 WEST 86 STREET",
    data: 1012170017
  },
  {
    value: "137 WEST 87 STREET",
    data: 1012180120
  },
  {
    value: "137 WEST 89 STREET",
    data: 1012200010
  },
  {
    value: "137 WEST 94 STREET",
    data: 1012250017
  },
  {
    value: "137 WEST 95 STREET",
    data: 1012260117
  },
  {
    value: "137 WEST BROADWAY",
    data: 1001470013
  },
  {
    value: "1370 1 AVENUE",
    data: 1014680001
  },
  {
    value: "1370 1 AVENUE",
    data: 1014680001
  },
  {
    value: "1370 LEXINGTON AVENUE",
    data: 1015190156
  },
  {
    value: "1370 ST NICHOLAS AVENUE",
    data: 1021539001
  },
  {
    value: "1370 YORK AVENUE",
    data: 1014850001
  },
  {
    value: "1370 YORK AVENUE",
    data: 1014850001
  },
  {
    value: "1371 1 AVENUE",
    data: 1014480028
  },
  {
    value: "1371 1 AVENUE",
    data: 1014480028
  },
  {
    value: "1371 MADISON AVENUE",
    data: 1015070050
  },
  {
    value: "1371 MADISON AVENUE",
    data: 1015070050
  },
  {
    value: "1372 1 AVENUE",
    data: 1014680002
  },
  {
    value: "1372 1 AVENUE",
    data: 1014680002
  },
  {
    value: "1372 BROADWAY",
    data: 1008130023
  },
  {
    value: "1372 YORK AVENUE",
    data: 1014850002
  },
  {
    value: "1372 YORK AVENUE",
    data: 1014850002
  },
  {
    value: "1373 1 AVENUE",
    data: 1014480029
  },
  {
    value: "1374 1 AVENUE",
    data: 1014680003
  },
  {
    value: "1374 1 AVENUE",
    data: 1014680003
  },
  {
    value: "1374 3 AVENUE",
    data: 1014130033
  },
  {
    value: "1374 3 AVENUE",
    data: 1014130033
  },
  {
    value: "1374 YORK AVENUE",
    data: 1014850003
  },
  {
    value: "1374 YORK AVENUE",
    data: 1014850003
  },
  {
    value: "1375 1 AVENUE",
    data: 1014480030
  },
  {
    value: "1375 BROADWAY",
    data: 1008130016
  },
  {
    value: "1376 1 AVENUE",
    data: 1014680004
  },
  {
    value: "1376 1 AVENUE",
    data: 1014680004
  },
  {
    value: "1376 3 AVENUE",
    data: 1014130034
  },
  {
    value: "1376 YORK AVENUE",
    data: 1014850004
  },
  {
    value: "1376 YORK AVENUE",
    data: 1014850004
  },
  {
    value: "1378 1 AVENUE",
    data: 1014680047
  },
  {
    value: "1378 1 AVENUE",
    data: 1014680047
  },
  {
    value: "1378 3 AVENUE",
    data: 1014130035
  },
  {
    value: "1378 3 AVENUE",
    data: 1014130035
  },
  {
    value: "1378 LEXINGTON AVENUE",
    data: 1015190059
  },
  {
    value: "1378 LEXINGTON AVENUE",
    data: 1015190059
  },
  {
    value: "1378 YORK AVENUE",
    data: 1014850052
  },
  {
    value: "1378 YORK AVENUE",
    data: 1014850052
  },
  {
    value: "138 1 AVENUE",
    data: 1004360001
  },
  {
    value: "138 2 AVENUE",
    data: 1004500005
  },
  {
    value: "138 5 AVENUE",
    data: 1008200046
  },
  {
    value: "138 9 AVENUE",
    data: 1007420075
  },
  {
    value: "138 AUDUBON AVENUE",
    data: 1021290021
  },
  {
    value: "138 AUDUBON AVENUE",
    data: 1021290021
  },
  {
    value: "138 BANK STREET",
    data: 1006340006
  },
  {
    value: "138 BEEKMAN STREET",
    data: 1000970144
  },
  {
    value: "138 DELANCEY STREET",
    data: 1003530079
  },
  {
    value: "138 EAST 101 STREET",
    data: 1016280159
  },
  {
    value: "138 EAST 112 STREET",
    data: 1016390057
  },
  {
    value: "138 EAST 112 STREET",
    data: 1016390057
  },
  {
    value: "138 EAST 117 STREET",
    data: 1016440058
  },
  {
    value: "138 EAST 13 STREET",
    data: 1005580026
  },
  {
    value: "138 EAST 16 STREET",
    data: 1008710051
  },
  {
    value: "138 EAST 27 STREET",
    data: 1008820060
  },
  {
    value: "138 EAST 30 STREET",
    data: 1008850059
  },
  {
    value: "138 EAST 34 STREET",
    data: 1008890062
  },
  {
    value: "138 EAST 36 STREET",
    data: 1008910062
  },
  {
    value: "138 EAST 36 STREET",
    data: 1008910062
  },
  {
    value: "138 EAST 37 STREET",
    data: 1008920060
  },
  {
    value: "138 EAST 39 STREET",
    data: 1008940060
  },
  {
    value: "138 EAST 50 STREET",
    data: 1013040045
  },
  {
    value: "138 EAST 57 STREET",
    data: 1013110049
  },
  {
    value: "138 EAST 65 STREET",
    data: 1013990047
  },
  {
    value: "138 EAST 71 STREET",
    data: 1014050058
  },
  {
    value: "138 EAST 74 STREET",
    data: 1014080058
  },
  {
    value: "138 EAST 78 STREET",
    data: 1014120057
  },
  {
    value: "138 EAST 78 STREET",
    data: 1014120057
  },
  {
    value: "138 EAST 80 STREET",
    data: 1015080058
  },
  {
    value: "138 EAST 92 STREET",
    data: 1015200057
  },
  {
    value: "138 EAST 95 STREET",
    data: 1015230060
  },
  {
    value: "138 EAST 96 STREET",
    data: 1015240056
  },
  {
    value: "138 EAST 96 STREET",
    data: 1015240056
  },
  {
    value: "138 EAST 98 STREET",
    data: 1016250050
  },
  {
    value: "138 EAST 98 STREET",
    data: 1016250050
  },
  {
    value: "138 EDGECOMBE AVENUE",
    data: 1020437501
  },
  {
    value: "138 ELDRIDGE STREET",
    data: 1004140003
  },
  {
    value: "138 ELDRIDGE STREET",
    data: 1004140003
  },
  {
    value: "138 FULTON STREET",
    data: 1000797501
  },
  {
    value: "138 HAVEN AVENUE",
    data: 1021390293
  },
  {
    value: "138 HAVEN AVENUE",
    data: 1021390293
  },
  {
    value: "138 HENRY STREET",
    data: 1002730030
  },
  {
    value: "138 HILLSIDE AVENUE",
    data: 1021730044
  },
  {
    value: "138 LAFAYETTE STREET",
    data: 1002090019
  },
  {
    value: "138 LEXINGTON AVENUE",
    data: 1008847502
  },
  {
    value: "138 LUDLOW STREET",
    data: 1004110042
  },
  {
    value: "138 LUDLOW STREET",
    data: 1004110042
  },
  {
    value: "138 MANHATTAN AVENUE",
    data: 1018410047
  },
  {
    value: "138 NAGLE AVENUE",
    data: 1021740076
  },
  {
    value: "138 NASSAU STREET",
    data: 1001000026
  },
  {
    value: "138 NASSAU STREET",
    data: 1001000026
  },
  {
    value: "138 ORCHARD STREET",
    data: 1004100010
  },
  {
    value: "138 ORCHARD STREET",
    data: 1004100010
  },
  {
    value: "138 READE STREET",
    data: 1001417507
  },
  {
    value: "138 RIDGE STREET",
    data: 1003440053
  },
  {
    value: "138 STANTON STREET",
    data: 1003550077
  },
  {
    value: "138 STANTON STREET",
    data: 1003550077
  },
  {
    value: "138 WAVERLY PLACE",
    data: 1005920063
  },
  {
    value: "138 WEST 109 STREET",
    data: 1018630055
  },
  {
    value: "138 WEST 11 STREET",
    data: 1006060041
  },
  {
    value: "138 WEST 112 STREET",
    data: 1018210058
  },
  {
    value: "138 WEST 112 STREET",
    data: 1018210058
  },
  {
    value: "138 WEST 117 STREET",
    data: 1019010051
  },
  {
    value: "138 WEST 117 STREET",
    data: 1019010051
  },
  {
    value: "138 WEST 118 STREET",
    data: 1019020050
  },
  {
    value: "138 WEST 119 STREET",
    data: 1019030151
  },
  {
    value: "138 WEST 120 STREET",
    data: 1019040049
  },
  {
    value: "138 WEST 121 STREET",
    data: 1019050150
  },
  {
    value: "138 WEST 123 STREET",
    data: 1019070051
  },
  {
    value: "138 WEST 124 STREET",
    data: 1019087502
  },
  {
    value: "138 WEST 124 STREET",
    data: 1019087502
  },
  {
    value: "138 WEST 127 STREET",
    data: 1019110051
  },
  {
    value: "138 WEST 127 STREET",
    data: 1019110051
  },
  {
    value: "138 WEST 129 STREET",
    data: 1019130050
  },
  {
    value: "138 WEST 129 STREET",
    data: 1019130050
  },
  {
    value: "138 WEST 13 STREET",
    data: 1006087503
  },
  {
    value: "138 WEST 131 STREET",
    data: 1019150150
  },
  {
    value: "138 WEST 131 STREET",
    data: 1019150150
  },
  {
    value: "138 WEST 132 STREET",
    data: 1019160049
  },
  {
    value: "138 WEST 133 STREET",
    data: 1019170048
  },
  {
    value: "138 WEST 133 STREET",
    data: 1019170048
  },
  {
    value: "138 WEST 136 STREET",
    data: 1019200048
  },
  {
    value: "138 WEST 137 STREET",
    data: 1019210050
  },
  {
    value: "138 WEST 137 STREET",
    data: 1019210050
  },
  {
    value: "138 WEST 139 STREET",
    data: 1020070057
  },
  {
    value: "138 WEST 14 STREET",
    data: 1006097503
  },
  {
    value: "138 WEST 140 STREET",
    data: 1020080053
  },
  {
    value: "138 WEST 140 STREET",
    data: 1020080053
  },
  {
    value: "138 WEST 143 STREET",
    data: 1020110053
  },
  {
    value: "138 WEST 143 STREET",
    data: 1020110053
  },
  {
    value: "138 WEST 15 STREET",
    data: 1007900058
  },
  {
    value: "138 WEST 17 STREET",
    data: 1007927502
  },
  {
    value: "138 WEST 18 STREET",
    data: 1007937503
  },
  {
    value: "138 WEST 19 STREET",
    data: 1007947503
  },
  {
    value: "138 WEST 25 STREET",
    data: 1008000061
  },
  {
    value: "138 WEST 32 STREET",
    data: 1008070062
  },
  {
    value: "138 WEST 34 STREET",
    data: 1008090066
  },
  {
    value: "138 WEST 46 STREET",
    data: 1009980151
  },
  {
    value: "138 WEST 48 STREET",
    data: 1010000049
  },
  {
    value: "138 WEST 70 STREET",
    data: 1011410047
  },
  {
    value: "138 WEST 72 STREET",
    data: 1011430048
  },
  {
    value: "138 WEST 73 STREET",
    data: 1011440048
  },
  {
    value: "138 WEST 74 STREET",
    data: 1011450048
  },
  {
    value: "138 WEST 81 STREET",
    data: 1012110049
  },
  {
    value: "138 WEST 82 STREET",
    data: 1012120049
  },
  {
    value: "138 WEST 83 STREET",
    data: 1012130149
  },
  {
    value: "138 WEST 87 STREET",
    data: 1012170047
  },
  {
    value: "138 WEST 88 STREET",
    data: 1012180144
  },
  {
    value: "138 WEST 90 STREET",
    data: 1012200053
  },
  {
    value: "138 WEST 92 STREET",
    data: 1012220050
  },
  {
    value: "138 WEST 95 STREET",
    data: 1012250048
  },
  {
    value: "138 WEST BROADWAY",
    data: 1001440028
  },
  {
    value: "138 WEST HOUSTON STREET",
    data: 1005260079
  },
  {
    value: "138 WILLIAM STREET",
    data: 1000770020
  },
  {
    value: "138 WOOSTER STREET",
    data: 1005140003
  },
  {
    value: "1380 3 AVENUE",
    data: 1014130036
  },
  {
    value: "1380 3 AVENUE",
    data: 1014130036
  },
  {
    value: "1380 AVENUE OF THE AMER",
    data: 1012720001
  },
  {
    value: "1380 AVENUE OF THE AMERICAS",
    data: 1012720001
  },
  {
    value: "1380 LEXINGTON AVENUE",
    data: 1015200014
  },
  {
    value: "1380 YORK AVENUE",
    data: 1014850050
  },
  {
    value: "1380 YORK AVENUE",
    data: 1014850050
  },
  {
    value: "1381 AMSTERDAM AVENUE",
    data: 1019680001
  },
  {
    value: "1381 AVENUE OF THE AMER",
    data: 1010090029
  },
  {
    value: "1381 AVENUE OF THE AMERICAS",
    data: 1010090029
  },
  {
    value: "1381 ST NICHOLAS AVENUE",
    data: 1021620044
  },
  {
    value: "1382 1 AVENUE",
    data: 1014680046
  },
  {
    value: "1382 1 AVENUE",
    data: 1014680046
  },
  {
    value: "1382 2 AVENUE",
    data: 1014460001
  },
  {
    value: "1382 LEXINGTON AVENUE",
    data: 1015200015
  },
  {
    value: "1384 1 AVENUE",
    data: 1014680045
  },
  {
    value: "1384 1 AVENUE",
    data: 1014680045
  },
  {
    value: "1384 2 AVENUE",
    data: 1014460002
  },
  {
    value: "1384 BROADWAY",
    data: 1008130050
  },
  {
    value: "1384 LEXINGTON AVENUE",
    data: 1015200115
  },
  {
    value: "1384 RIVERSIDE DRIVE",
    data: 1021790005
  },
  {
    value: "1384 RIVERSIDE DRIVE",
    data: 1021790005
  },
  {
    value: "1384 YORK AVENUE",
    data: 1014850049
  },
  {
    value: "1384 YORK AVENUE",
    data: 1014850049
  },
  {
    value: "1385 BROADWAY",
    data: 1008130055
  },
  {
    value: "1385 YORK AVENUE",
    data: 1014680021
  },
  {
    value: "1385 YORK AVENUE",
    data: 1014680021
  },
  {
    value: "1386 2 AVENUE",
    data: 1014460003
  },
  {
    value: "1386 LEXINGTON AVENUE",
    data: 1015200016
  },
  {
    value: "1387 ST NICHOLAS AVENUE",
    data: 1021620039
  },
  {
    value: "1388 2 AVENUE",
    data: 1014460004
  },
  {
    value: "1388 2 AVENUE",
    data: 1014460004
  },
  {
    value: "1388 LEXINGTON AVENUE",
    data: 1015200017
  },
  {
    value: "139 1 AVENUE",
    data: 1004500032
  },
  {
    value: "139 2 AVENUE",
    data: 1004640036
  },
  {
    value: "139 2 AVENUE",
    data: 1004640036
  },
  {
    value: "139 5 AVENUE",
    data: 1008490003
  },
  {
    value: "139 8 AVENUE",
    data: 1007400037
  },
  {
    value: "139 8 AVENUE",
    data: 1007400037
  },
  {
    value: "139 ALLEN STREET",
    data: 1004150025
  },
  {
    value: "139 ALLEN STREET",
    data: 1004150025
  },
  {
    value: "139 BOWERY",
    data: 1004230007
  },
  {
    value: "139 CENTRE STREET",
    data: 1001977502
  },
  {
    value: "139 CENTRE STREET",
    data: 1001979011
  },
  {
    value: "139 CHAMBERS STREET",
    data: 1001400001
  },
  {
    value: "139 CHAMBERS STREET",
    data: 1001400001
  },
  {
    value: "139 CHARLES STREET",
    data: 1006320034
  },
  {
    value: "139 CHRYSTIE STREET",
    data: 1004240028
  },
  {
    value: "139 CHRYSTIE STREET",
    data: 1004240028
  },
  {
    value: "139 COLUMBUS AVENUE",
    data: 1011189001
  },
  {
    value: "139 DIVISION STREET",
    data: 1002830079
  },
  {
    value: "139 EAST 103 STREET",
    data: 1016310012
  },
  {
    value: "139 EAST 110 STREET",
    data: 1016380016
  },
  {
    value: "139 EAST 110 STREET",
    data: 1016380016
  },
  {
    value: "139 EAST 122 STREET",
    data: 1017710017
  },
  {
    value: "139 EAST 122 STREET",
    data: 1017710017
  },
  {
    value: "139 EAST 13 STREET",
    data: 1005590043
  },
  {
    value: "139 EAST 13 STREET",
    data: 1005590043
  },
  {
    value: "139 EAST 18 STREET",
    data: 1008740028
  },
  {
    value: "139 EAST 19 STREET",
    data: 1008750034
  },
  {
    value: "139 EAST 23 STREET",
    data: 1008790025
  },
  {
    value: "139 EAST 27 STREET",
    data: 1008830031
  },
  {
    value: "139 EAST 27 STREET",
    data: 1008830031
  },
  {
    value: "139 EAST 30 STREET",
    data: 1008860034
  },
  {
    value: "139 EAST 30 STREET",
    data: 1008860034
  },
  {
    value: "139 EAST 33 STREET",
    data: 1008890015
  },
  {
    value: "139 EAST 33 STREET",
    data: 1008890015
  },
  {
    value: "139 EAST 36 STREET",
    data: 1008920026
  },
  {
    value: "139 EAST 45 STREET",
    data: 1013000025
  },
  {
    value: "139 EAST 63 STREET",
    data: 1013987502
  },
  {
    value: "139 EAST 63 STREET",
    data: 1013987502
  },
  {
    value: "139 EAST 66 STREET",
    data: 1014010032
  },
  {
    value: "139 EAST 66 STREET",
    data: 1014010032
  },
  {
    value: "139 EAST 79 STREET",
    data: 1015080016
  },
  {
    value: "139 EAST 79 STREET",
    data: 1015080016
  },
  {
    value: "139 EAST 95 STREET",
    data: 1015240114
  },
  {
    value: "139 EAST BROADWAY",
    data: 1002830035
  },
  {
    value: "139 EAST BROADWAY",
    data: 1002830035
  },
  {
    value: "139 EAST HOUSTON STREET",
    data: 1004220049
  },
  {
    value: "139 EDGECOMBE AVENUE",
    data: 1020510014
  },
  {
    value: "139 ELDRIDGE STREET",
    data: 1004190065
  },
  {
    value: "139 ELDRIDGE STREET",
    data: 1004190065
  },
  {
    value: "139 ESSEX STREET",
    data: 1004110064
  },
  {
    value: "139 ESSEX STREET",
    data: 1004110064
  },
  {
    value: "139 FRANKLIN STREET",
    data: 1001790066
  },
  {
    value: "139 GREENE STREET",
    data: 1005140025
  },
  {
    value: "139 HENRY STREET",
    data: 1002830016
  },
  {
    value: "139 LEXINGTON AVENUE",
    data: 1008850028
  },
  {
    value: "139 LUDLOW STREET",
    data: 1004110029
  },
  {
    value: "139 MAC DOUGAL STREET",
    data: 1005430053
  },
  {
    value: "139 MOTT STREET",
    data: 1002370021
  },
  {
    value: "139 MULBERRY STREET",
    data: 1002360026
  },
  {
    value: "139 MULBERRY STREET",
    data: 1002360026
  },
  {
    value: "139 NORFOLK STREET",
    data: 1003540027
  },
  {
    value: "139 NORFOLK STREET",
    data: 1003540027
  },
  {
    value: "139 ORCHARD STREET",
    data: 1004150067
  },
  {
    value: "139 PAYSON AVENUE",
    data: 1022480024
  },
  {
    value: "139 PAYSON AVENUE",
    data: 1022480024
  },
  {
    value: "139 PERRY STREET",
    data: 1006330032
  },
  {
    value: "139 SPRING STREET",
    data: 1005007503
  },
  {
    value: "139 THOMPSON STREET",
    data: 1005170030
  },
  {
    value: "139 THOMPSON STREET",
    data: 1005170030
  },
  {
    value: "139 WAVERLY PLACE",
    data: 1005930002
  },
  {
    value: "139 WEST 10 STREET",
    data: 1006110069
  },
  {
    value: "139 WEST 111 STREET",
    data: 1018210012
  },
  {
    value: "139 WEST 112 STREET",
    data: 1018220007
  },
  {
    value: "139 WEST 112 STREET",
    data: 1018220007
  },
  {
    value: "139 WEST 113 STREET",
    data: 1018230008
  },
  {
    value: "139 WEST 116 STREET",
    data: 1019010013
  },
  {
    value: "139 WEST 116 STREET",
    data: 1019010013
  },
  {
    value: "139 WEST 119 STREET",
    data: 1019040113
  },
  {
    value: "139 WEST 120 STREET",
    data: 1019050012
  },
  {
    value: "139 WEST 122 STREET",
    data: 1019070014
  },
  {
    value: "139 WEST 123 STREET",
    data: 1019080114
  },
  {
    value: "139 WEST 126 STREET",
    data: 1019110016
  },
  {
    value: "139 WEST 129 STREET",
    data: 1019140016
  },
  {
    value: "139 WEST 13 STREET",
    data: 1006090164
  },
  {
    value: "139 WEST 130 STREET",
    data: 1019150014
  },
  {
    value: "139 WEST 131 STREET",
    data: 1019160115
  },
  {
    value: "139 WEST 135 STREET",
    data: 1019200012
  },
  {
    value: "139 WEST 135 STREET",
    data: 1019200012
  },
  {
    value: "139 WEST 136 STREET",
    data: 1019210016
  },
  {
    value: "139 WEST 14 STREET",
    data: 1007900014
  },
  {
    value: "139 WEST 14 STREET",
    data: 1007900014
  },
  {
    value: "139 WEST 143 STREET",
    data: 1020120017
  },
  {
    value: "139 WEST 143 STREET",
    data: 1020120017
  },
  {
    value: "139 WEST 15 STREET",
    data: 1007910019
  },
  {
    value: "139 WEST 24 STREET",
    data: 1008000019
  },
  {
    value: "139 WEST 28 STREET",
    data: 1008040015
  },
  {
    value: "139 WEST 28 STREET",
    data: 1008040015
  },
  {
    value: "139 WEST 33 STREET",
    data: 1008090016
  },
  {
    value: "139 WEST 55 STREET",
    data: 1010080008
  },
  {
    value: "139 WEST 55 STREET",
    data: 1010080008
  },
  {
    value: "139 WEST 69 STREET",
    data: 1011410018
  },
  {
    value: "139 WEST 73 STREET",
    data: 1011450017
  },
  {
    value: "139 WEST 74 STREET",
    data: 1011460013
  },
  {
    value: "139 WEST 75 STREET",
    data: 1011470014
  },
  {
    value: "139 WEST 78 STREET",
    data: 1011500115
  },
  {
    value: "139 WEST 80 STREET",
    data: 1012110019
  },
  {
    value: "139 WEST 81 STREET",
    data: 1012120118
  },
  {
    value: "139 WEST 81 STREET",
    data: 1012120118
  },
  {
    value: "139 WEST 82 STREET",
    data: 1012130009
  },
  {
    value: "139 WEST 82 STREET",
    data: 1012130009
  },
  {
    value: "139 WEST 83 STREET",
    data: 1012140017
  },
  {
    value: "139 WEST 85 STREET",
    data: 1012160014
  },
  {
    value: "139 WEST 87 STREET",
    data: 1012180020
  },
  {
    value: "139 WEST 91 STREET",
    data: 1012220012
  },
  {
    value: "139 WEST 94 STREET",
    data: 1012250116
  },
  {
    value: "139 WEST 95 STREET",
    data: 1012260017
  },
  {
    value: "139 WOOSTER STREET",
    data: 1005157501
  },
  {
    value: "139 WOOSTER STREET",
    data: 1005157501
  },
  {
    value: "1390 2 AVENUE",
    data: 1014460052
  },
  {
    value: "1390 2 AVENUE",
    data: 1014460052
  },
  {
    value: "1390 3 AVENUE",
    data: 1015080033
  },
  {
    value: "1390 LEXINGTON AVENUE",
    data: 1015200054
  },
  {
    value: "1391 2 AVENUE",
    data: 1014270024
  },
  {
    value: "1391 2 AVENUE",
    data: 1014270024
  },
  {
    value: "1391 3 AVENUE",
    data: 1015250001
  },
  {
    value: "1391 MADISON AVENUE",
    data: 1016020050
  },
  {
    value: "1391 MADISON AVENUE",
    data: 1016020050
  },
  {
    value: "139-143 WEST 19 STREET",
    data: 1007950014
  },
  {
    value: "139-143 WEST 19 STREET",
    data: 1007950014
  },
  {
    value: "1392 3 AVENUE",
    data: 1015080034
  },
  {
    value: "1392 MADISON AVENUE",
    data: 1016020057
  },
  {
    value: "1392 MADISON AVENUE",
    data: 1016020057
  },
  {
    value: "1392 ST NICHOLAS AVENUE",
    data: 1021530036
  },
  {
    value: "1392 ST NICHOLAS AVENUE",
    data: 1021530036
  },
  {
    value: "1393 2 AVENUE",
    data: 1014270028
  },
  {
    value: "1393 2 AVENUE",
    data: 1014270028
  },
  {
    value: "1393 LEXINGTON AVENUE",
    data: 1015200050
  },
  {
    value: "1393 YORK AVENUE",
    data: 1014690021
  },
  {
    value: "1394 3 AVENUE",
    data: 1015080035
  },
  {
    value: "1394 YORK AVENUE",
    data: 1014860001
  },
  {
    value: "1394 YORK AVENUE",
    data: 1014860001
  },
  {
    value: "1395 ST NICHOLAS AVENUE",
    data: 1021620037
  },
  {
    value: "1396 MADISON AVENUE",
    data: 1016020058
  },
  {
    value: "1396 MADISON AVENUE",
    data: 1016020058
  },
  {
    value: "14 1 AVENUE",
    data: 1004290002
  },
  {
    value: "14 1 AVENUE",
    data: 1004290002
  },
  {
    value: "14 2 AVENUE",
    data: 1004420006
  },
  {
    value: "14 5 AVENUE",
    data: 1005720041
  },
  {
    value: "14 5 AVENUE",
    data: 1005720041
  },
  {
    value: "14 AVENUE A",
    data: 1003970006
  },
  {
    value: "14 AVENUE A",
    data: 1003970006
  },
  {
    value: "14 AVENUE B",
    data: 1003970033
  },
  {
    value: "14 AVENUE B",
    data: 1003970033
  },
  {
    value: "14 AVENUE C",
    data: 1003720001
  },
  {
    value: "14 AVENUE C",
    data: 1003720001
  },
  {
    value: "14 BANK STREET",
    data: 1006140050
  },
  {
    value: "14 BEACH STREET",
    data: 1001900033
  },
  {
    value: "14 BEDFORD STREET",
    data: 1005270007
  },
  {
    value: "14 BEDFORD STREET",
    data: 1005270007
  },
  {
    value: "14 BOWERY",
    data: 1001620055
  },
  {
    value: "14 BROADWAY TERRACE",
    data: 1021700555
  },
  {
    value: "14 BROADWAY TERRACE",
    data: 1021700555
  },
  {
    value: "14 CHRISTOPHER STREET",
    data: 1005930045
  },
  {
    value: "14 COMMERCE STREET",
    data: 1005870016
  },
  {
    value: "14 CONVENT AVENUE",
    data: 1019670076
  },
  {
    value: "14 DELANCEY STREET",
    data: 1004250040
  },
  {
    value: "14 EAST 10 STREET",
    data: 1005670013
  },
  {
    value: "14 EAST 103 STREET",
    data: 1016080062
  },
  {
    value: "14 EAST 109 STREET",
    data: 1016140064
  },
  {
    value: "14 EAST 11 STREET",
    data: 1005680010
  },
  {
    value: "14 EAST 116 STREET",
    data: 1016210064
  },
  {
    value: "14 EAST 118 STREET",
    data: 1016230126
  },
  {
    value: "14 EAST 125 STREET",
    data: 1017490064
  },
  {
    value: "14 EAST 126 STREET",
    data: 1017500066
  },
  {
    value: "14 EAST 127 STREET",
    data: 1017510066
  },
  {
    value: "14 EAST 127 STREET",
    data: 1017510066
  },
  {
    value: "14 EAST 129 STREET",
    data: 1017530065
  },
  {
    value: "14 EAST 130 STREET",
    data: 1017540064
  },
  {
    value: "14 EAST 16 STREET",
    data: 1008430039
  },
  {
    value: "14 EAST 17 STREET",
    data: 1008440034
  },
  {
    value: "14 EAST 18 STREET",
    data: 1008460066
  },
  {
    value: "14 EAST 2 STREET",
    data: 1004580042
  },
  {
    value: "14 EAST 23 STREET",
    data: 1008510062
  },
  {
    value: "14 EAST 32 STREET",
    data: 1008610066
  },
  {
    value: "14 EAST 33 STREET",
    data: 1008627502
  },
  {
    value: "14 EAST 33 STREET",
    data: 1008627502
  },
  {
    value: "14 EAST 34 STREET",
    data: 1008630074
  },
  {
    value: "14 EAST 38 STREET",
    data: 1008670062
  },
  {
    value: "14 EAST 39 STREET",
    data: 1008680065
  },
  {
    value: "14 EAST 44 STREET",
    data: 1012780062
  },
  {
    value: "14 EAST 52 STREET",
    data: 1012870061
  },
  {
    value: "14 EAST 55 STREET",
    data: 1012900062
  },
  {
    value: "14 EAST 58 STREET",
    data: 1012930064
  },
  {
    value: "14 EAST 62 STREET",
    data: 1013760062
  },
  {
    value: "14 EAST 63 STREET",
    data: 1013770062
  },
  {
    value: "14 EAST 64 STREET",
    data: 1013780064
  },
  {
    value: "14 EAST 65 STREET",
    data: 1013790063
  },
  {
    value: "14 EAST 67 STREET",
    data: 1013810061
  },
  {
    value: "14 EAST 68 STREET",
    data: 1013820062
  },
  {
    value: "14 EAST 69 STREET",
    data: 1013830061
  },
  {
    value: "14 EAST 71 STREET",
    data: 1013850061
  },
  {
    value: "14 EAST 72 STREET",
    data: 1013860062
  },
  {
    value: "14 EAST 73 STREET",
    data: 1013870064
  },
  {
    value: "14 EAST 74 STREET",
    data: 1013880063
  },
  {
    value: "14 EAST 76 STREET",
    data: 1013900063
  },
  {
    value: "14 EAST 77 STREET",
    data: 1013917501
  },
  {
    value: "14 EAST 77 STREET",
    data: 1013917501
  },
  {
    value: "14 EAST 78 STREET",
    data: 1013920163
  },
  {
    value: "14 EAST 79 STREET",
    data: 1013930061
  },
  {
    value: "14 EAST 80 STREET",
    data: 1014910063
  },
  {
    value: "14 EAST 80 STREET",
    data: 1014910063
  },
  {
    value: "14 EAST 81 STREET",
    data: 1014920163
  },
  {
    value: "14 EAST 82 STREET",
    data: 1014930063
  },
  {
    value: "14 EAST 92 STREET",
    data: 1015030064
  },
  {
    value: "14 EAST 93 STREET",
    data: 1015040062
  },
  {
    value: "14 EAST 94 STREET",
    data: 1015050163
  },
  {
    value: "14 EAST 95 STREET",
    data: 1015060162
  },
  {
    value: "14 EAST 96 STREET",
    data: 1015077501
  },
  {
    value: "14 EAST 96 STREET",
    data: 1015077501
  },
  {
    value: "14 GAY STREET",
    data: 1005930048
  },
  {
    value: "14 GROVE STREET",
    data: 1005850021
  },
  {
    value: "14 HAMILTON TERRACE",
    data: 1020500081
  },
  {
    value: "14 HARRISON STREET",
    data: 1001810004
  },
  {
    value: "14 HENDERSON PLACE",
    data: 1015830118
  },
  {
    value: "14 IRVING PLACE",
    data: 1008710025
  },
  {
    value: "14 JACKSON STREET",
    data: 1002630001
  },
  {
    value: "14 JACKSON STREET",
    data: 1002630001
  },
  {
    value: "14 JAY STREET",
    data: 1001430025
  },
  {
    value: "14 JEFFERSON STREET",
    data: 1002840015
  },
  {
    value: "14 JONES STREET",
    data: 1005900021
  },
  {
    value: "14 JONES STREET",
    data: 1005900021
  },
  {
    value: "14 JUMEL TERRACE",
    data: 1021090101
  },
  {
    value: "14 LEONARD STREET",
    data: 1001797506
  },
  {
    value: "14 LEROY STREET",
    data: 1005860016
  },
  {
    value: "14 LITTLE WEST 12 ST",
    data: 1006440048
  },
  {
    value: "14 MAIDEN LANE",
    data: 1000640023
  },
  {
    value: "14 MINETTA STREET",
    data: 1005420018
  },
  {
    value: "14 MORNINGSIDE AVENUE",
    data: 1018490023
  },
  {
    value: "14 MORNINGSIDE AVENUE",
    data: 1018490023
  },
  {
    value: "14 MORTON STREET",
    data: 1005860056
  },
  {
    value: "14 MORTON STREET",
    data: 1005860056
  },
  {
    value: "14 MOTT STREET",
    data: 1001620008
  },
  {
    value: "14 MT MORRIS PARK WEST",
    data: 1017200054
  },
  {
    value: "14 MT MORRIS PARK WEST",
    data: 1017200054
  },
  {
    value: "14 PRINCE STREET",
    data: 1004927501
  },
  {
    value: "14 PRINCE STREET",
    data: 1004927501
  },
  {
    value: "14 READE STREET",
    data: 1001540023
  },
  {
    value: "14 SICKLES STREET",
    data: 1021740135
  },
  {
    value: "14 SICKLES STREET",
    data: 1021740135
  },
  {
    value: "14 SOUTH WILLIAM STREET",
    data: 1000290086
  },
  {
    value: "14 SPRING STREET",
    data: 1004790021
  },
  {
    value: "14 SPRING STREET",
    data: 1004790021
  },
  {
    value: "14 ST MARKS PLACE",
    data: 1004630016
  },
  {
    value: "14 ST NICHOLAS PLACE",
    data: 1020540042
  },
  {
    value: "14 SUTTON PLACE SOUTH",
    data: 1013680024
  },
  {
    value: "14 SUTTON PLACE SOUTH",
    data: 1013680024
  },
  {
    value: "14 SUTTON SQUARE",
    data: 1013720042
  },
  {
    value: "14 SYLVAN TERRACE",
    data: 1021090064
  },
  {
    value: "14 THAYER STREET",
    data: 1021740224
  },
  {
    value: "14 THAYER STREET",
    data: 1021740224
  },
  {
    value: "14 VAN CORLEAR PLACE",
    data: 1022150359
  },
  {
    value: "14 VESEY STREET",
    data: 1000880002
  },
  {
    value: "14 WALL STREET",
    data: 1000460009
  },
  {
    value: "14 WASHINGTON PLACE",
    data: 1005460015
  },
  {
    value: "14 WASHINGTON TERRACE",
    data: 1021560043
  },
  {
    value: "14 WEST 10 STREET",
    data: 1005730035
  },
  {
    value: "14 WEST 103 STREET",
    data: 1018380042
  },
  {
    value: "14 WEST 103 STREET",
    data: 1018380042
  },
  {
    value: "14 WEST 104 STREET",
    data: 1018390042
  },
  {
    value: "14 WEST 107 STREET",
    data: 1018420042
  },
  {
    value: "14 WEST 107 STREET",
    data: 1018420042
  },
  {
    value: "14 WEST 108 STREET",
    data: 1018430041
  },
  {
    value: "14 WEST 11 STREET",
    data: 1005740037
  },
  {
    value: "14 WEST 119 STREET",
    data: 1017170044
  },
  {
    value: "14 WEST 120 STREET",
    data: 1017180043
  },
  {
    value: "14 WEST 121 STREET",
    data: 1017200026
  },
  {
    value: "14 WEST 122 STREET",
    data: 1017200064
  },
  {
    value: "14 WEST 123 STREET",
    data: 1017210025
  },
  {
    value: "14 WEST 127 STREET",
    data: 1017240044
  },
  {
    value: "14 WEST 127 STREET",
    data: 1017240044
  },
  {
    value: "14 WEST 128 STREET",
    data: 1017250043
  },
  {
    value: "14 WEST 130 STREET",
    data: 1017270044
  },
  {
    value: "14 WEST 131 STREET",
    data: 1017280046
  },
  {
    value: "14 WEST 14 STREET",
    data: 1005777504
  },
  {
    value: "14 WEST 14 STREET",
    data: 1005777504
  },
  {
    value: "14 WEST 17 STREET",
    data: 1008180059
  },
  {
    value: "14 WEST 17 STREET",
    data: 1008180059
  },
  {
    value: "14 WEST 19 STREET",
    data: 1008200054
  },
  {
    value: "14 WEST 23 STREET",
    data: 1008240047
  },
  {
    value: "14 WEST 24 STREET",
    data: 1008250056
  },
  {
    value: "14 WEST 29 STREET",
    data: 1008300053
  },
  {
    value: "14 WEST 31 STREET",
    data: 1008320027
  },
  {
    value: "14 WEST 4 STREET",
    data: 1005357501
  },
  {
    value: "14 WEST 4 STREET",
    data: 1005357501
  },
  {
    value: "14 WEST 45 STREET",
    data: 1012600047
  },
  {
    value: "14 WEST 55 STREET",
    data: 1012700046
  },
  {
    value: "14 WEST 64 STREET",
    data: 1011160042
  },
  {
    value: "14 WEST 69 STREET",
    data: 1011210039
  },
  {
    value: "14 WEST 69 STREET",
    data: 1011210039
  },
  {
    value: "14 WEST 71 STREET",
    data: 1011237501
  },
  {
    value: "14 WEST 75 STREET",
    data: 1011270142
  },
  {
    value: "14 WEST 76 STREET",
    data: 1011280042
  },
  {
    value: "14 WEST 76 STREET",
    data: 1011280042
  },
  {
    value: "14 WEST 8 STREET",
    data: 1005510027
  },
  {
    value: "14 WEST 82 STREET",
    data: 1011950041
  },
  {
    value: "14 WEST 83 STREET",
    data: 1011960040
  },
  {
    value: "14 WEST 85 STREET",
    data: 1011980038
  },
  {
    value: "14 WEST 86 STREET",
    data: 1011990042
  },
  {
    value: "14 WEST 87 STREET",
    data: 1012000041
  },
  {
    value: "14 WEST 88 STREET",
    data: 1012010039
  },
  {
    value: "14 WEST 9 STREET",
    data: 1005720033
  },
  {
    value: "14 WEST 90 STREET",
    data: 1012030042
  },
  {
    value: "14 WEST 95 STREET",
    data: 1012080040
  },
  {
    value: "14 WHITE STREET",
    data: 1001910008
  },
  {
    value: "14 WOOSTER STREET",
    data: 1002290013
  },
  {
    value: "140 1 AVENUE",
    data: 1004360002
  },
  {
    value: "140 2 AVENUE",
    data: 1004500006
  },
  {
    value: "140 5 AVENUE",
    data: 1008207501
  },
  {
    value: "140 5 AVENUE",
    data: 1008207501
  },
  {
    value: "140 7 AVENUE",
    data: 1007687502
  },
  {
    value: "140 7 AVENUE",
    data: 1007687502
  },
  {
    value: "140 9 AVENUE",
    data: 1007420074
  },
  {
    value: "140 AVENUE C",
    data: 1003780009
  },
  {
    value: "140 AVENUE C",
    data: 1003780009
  },
  {
    value: "140 BARUCH PLACE",
    data: 1003250001
  },
  {
    value: "140 BARUCH PLACE",
    data: 1003250001
  },
  {
    value: "140 BRADHURST AVENUE",
    data: 1020450083
  },
  {
    value: "140 BRADHURST AVENUE",
    data: 1020450083
  },
  {
    value: "140 BROADWAY",
    data: 1000480001
  },
  {
    value: "140 CLAREMONT AVENUE",
    data: 1019930057
  },
  {
    value: "140 CLAREMONT AVENUE",
    data: 1019930057
  },
  {
    value: "140 DELANCEY STREET",
    data: 1003530075
  },
  {
    value: "140 EAST 103 STREET",
    data: 1016300060
  },
  {
    value: "140 EAST 111 STREET",
    data: 1016380057
  },
  {
    value: "140 EAST 117 STREET",
    data: 1016440057
  },
  {
    value: "140 EAST 13 STREET",
    data: 1005580027
  },
  {
    value: "140 EAST 16 STREET",
    data: 1008710050
  },
  {
    value: "140 EAST 16 STREET",
    data: 1008710050
  },
  {
    value: "140 EAST 17 STREET",
    data: 1008720050
  },
  {
    value: "140 EAST 17 STREET",
    data: 1008720050
  },
  {
    value: "140 EAST 19 STREET",
    data: 1008740050
  },
  {
    value: "140 EAST 27 STREET",
    data: 1008820059
  },
  {
    value: "140 EAST 28 STREET",
    data: 1008830058
  },
  {
    value: "140 EAST 28 STREET",
    data: 1008830058
  },
  {
    value: "140 EAST 30 STREET",
    data: 1008850058
  },
  {
    value: "140 EAST 31 STREET",
    data: 1008860058
  },
  {
    value: "140 EAST 31 STREET",
    data: 1008860058
  },
  {
    value: "140 EAST 34 STREET",
    data: 1008890061
  },
  {
    value: "140 EAST 37 STREET",
    data: 1008920059
  },
  {
    value: "140 EAST 38 STREET",
    data: 1008930063
  },
  {
    value: "140 EAST 39 STREET",
    data: 1008940059
  },
  {
    value: "140 EAST 40 STREET",
    data: 1008950066
  },
  {
    value: "140 EAST 40 STREET",
    data: 1008950066
  },
  {
    value: "140 EAST 46 STREET",
    data: 1013000050
  },
  {
    value: "140 EAST 46 STREET",
    data: 1013000050
  },
  {
    value: "140 EAST 52 STREET",
    data: 1013060050
  },
  {
    value: "140 EAST 52 STREET",
    data: 1013060050
  },
  {
    value: "140 EAST 56 STREET",
    data: 1013107502
  },
  {
    value: "140 EAST 63 STREET",
    data: 1013977505
  },
  {
    value: "140 EAST 63 STREET",
    data: 1013977505
  },
  {
    value: "140 EAST 65 STREET",
    data: 1013990146
  },
  {
    value: "140 EAST 7 STREET",
    data: 1004020011
  },
  {
    value: "140 EAST 7 STREET",
    data: 1004020011
  },
  {
    value: "140 EAST 74 STREET",
    data: 1014080057
  },
  {
    value: "140 EAST 81 STREET",
    data: 1015090051
  },
  {
    value: "140 EAST 81 STREET",
    data: 1015090051
  },
  {
    value: "140 EAST 83 STREET",
    data: 1015110053
  },
  {
    value: "140 EAST 83 STREET",
    data: 1015110053
  },
  {
    value: "140 EAST 92 STREET",
    data: 1015200056
  },
  {
    value: "140 EAST 92 STREET",
    data: 1015200056
  },
  {
    value: "140 EAST BROADWAY",
    data: 1002830083
  },
  {
    value: "140 EAST END AVENUE",
    data: 1015830030
  },
  {
    value: "140 EDGECOMBE AVENUE",
    data: 1020437502
  },
  {
    value: "140 ELDRIDGE STREET",
    data: 1004140004
  },
  {
    value: "140 ELDRIDGE STREET",
    data: 1004140004
  },
  {
    value: "140 ESSEX STREET",
    data: 1003540001
  },
  {
    value: "140 FRANKLIN STREET",
    data: 1001897507
  },
  {
    value: "140 FRANKLIN STREET",
    data: 1001897507
  },
  {
    value: "140 FULTON STREET",
    data: 1000790027
  },
  {
    value: "140 HENRY STREET",
    data: 1002730029
  },
  {
    value: "140 HESTER STREET",
    data: 1002030017
  },
  {
    value: "140 LEXINGTON AVENUE",
    data: 1008850019
  },
  {
    value: "140 MANHATTAN AVENUE",
    data: 1018410046
  },
  {
    value: "140 MORNINGSIDE AVENUE",
    data: 1019660067
  },
  {
    value: "140 MULBERRY STREET",
    data: 1002370006
  },
  {
    value: "140 NAGLE AVENUE",
    data: 1021740073
  },
  {
    value: "140 NAGLE AVENUE",
    data: 1021740073
  },
  {
    value: "140 PERRY STREET",
    data: 1006327502
  },
  {
    value: "140 PRINCE STREET",
    data: 1005010012
  },
  {
    value: "140 PRINCE STREET",
    data: 1005010012
  },
  {
    value: "140 RIVERSIDE BOULEVARD",
    data: 1011710133
  },
  {
    value: "140 RIVERSIDE BOULEVARD",
    data: 1011710133
  },
  {
    value: "140 RIVERSIDE DRIVE",
    data: 1012480001
  },
  {
    value: "140 RIVERSIDE DRIVE",
    data: 1012480001
  },
  {
    value: "140 SULLIVAN STREET",
    data: 1005180038
  },
  {
    value: "140 THOMPSON STREET",
    data: 1005160007
  },
  {
    value: "140 THOMPSON STREET",
    data: 1005160007
  },
  {
    value: "140 VERMILYEA AVENUE",
    data: 1022360027
  },
  {
    value: "140 VERMILYEA AVENUE",
    data: 1022360027
  },
  {
    value: "140 WADSWORTH AVENUE",
    data: 1021630061
  },
  {
    value: "140 WASHINGTON STREET",
    data: 1000560001
  },
  {
    value: "140 WAVERLY PLACE",
    data: 1005920062
  },
  {
    value: "140 WAVERLY PLACE",
    data: 1005920062
  },
  {
    value: "140 WEST 10 STREET",
    data: 1006100048
  },
  {
    value: "140 WEST 10 STREET",
    data: 1006100048
  },
  {
    value: "140 WEST 102 STREET",
    data: 1018550009
  },
  {
    value: "140 WEST 105 STREET",
    data: 1018590046
  },
  {
    value: "140 WEST 105 STREET",
    data: 1018590046
  },
  {
    value: "140 WEST 109 STREET",
    data: 1018630056
  },
  {
    value: "140 WEST 111 STREET",
    data: 1018200053
  },
  {
    value: "140 WEST 112 STREET",
    data: 1018210059
  },
  {
    value: "140 WEST 112 STREET",
    data: 1018210059
  },
  {
    value: "140 WEST 113 STREET",
    data: 1018220057
  },
  {
    value: "140 WEST 113 STREET",
    data: 1018220057
  },
  {
    value: "140 WEST 117 STREET",
    data: 1019010052
  },
  {
    value: "140 WEST 117 STREET",
    data: 1019010052
  },
  {
    value: "140 WEST 118 STREET",
    data: 1019020150
  },
  {
    value: "140 WEST 119 STREET",
    data: 1019030052
  },
  {
    value: "140 WEST 120 STREET",
    data: 1019040050
  },
  {
    value: "140 WEST 121 STREET",
    data: 1019050051
  },
  {
    value: "140 WEST 123 STREET",
    data: 1019070151
  },
  {
    value: "140 WEST 127 STREET",
    data: 1019110151
  },
  {
    value: "140 WEST 129 STREET",
    data: 1019130051
  },
  {
    value: "140 WEST 13 STREET",
    data: 1006080019
  },
  {
    value: "140 WEST 130 STREET",
    data: 1019140049
  },
  {
    value: "140 WEST 131 STREET",
    data: 1019150051
  },
  {
    value: "140 WEST 132 STREET",
    data: 1019160149
  },
  {
    value: "140 WEST 133 STREET",
    data: 1019170049
  },
  {
    value: "140 WEST 136 STREET",
    data: 1019200049
  },
  {
    value: "140 WEST 137 STREET",
    data: 1019210051
  },
  {
    value: "140 WEST 139 STREET",
    data: 1020070058
  },
  {
    value: "140 WEST 142 STREET",
    data: 1020100050
  },
  {
    value: "140 WEST 142 STREET",
    data: 1020100050
  },
  {
    value: "140 WEST 15 STREET",
    data: 1007900059
  },
  {
    value: "140 WEST 15 STREET",
    data: 1007900059
  },
  {
    value: "140 WEST 16 STREET",
    data: 1007910068
  },
  {
    value: "140 WEST 16 STREET",
    data: 1007910068
  },
  {
    value: "140 WEST 18 STREET",
    data: 1007930061
  },
  {
    value: "140 WEST 19 STREET",
    data: 1007940062
  },
  {
    value: "140 WEST 19 STREET",
    data: 1007940062
  },
  {
    value: "140 WEST 20 STREET",
    data: 1007950066
  },
  {
    value: "140 WEST 22 STREET",
    data: 1007977507
  },
  {
    value: "140 WEST 22 STREET",
    data: 1007977507
  },
  {
    value: "140 WEST 23 STREET",
    data: 1007987503
  },
  {
    value: "140 WEST 23 STREET",
    data: 1007987503
  },
  {
    value: "140 WEST 24 STREET",
    data: 1007990063
  },
  {
    value: "140 WEST 28 STREET",
    data: 1008030062
  },
  {
    value: "140 WEST 30 STREET",
    data: 1008050087
  },
  {
    value: "140 WEST 31 STREET",
    data: 1008060063
  },
  {
    value: "140 WEST 34 STREET",
    data: 1008090067
  },
  {
    value: "140 WEST 36 STREET",
    data: 1008110055
  },
  {
    value: "140 WEST 4 STREET",
    data: 1005430047
  },
  {
    value: "140 WEST 4 STREET",
    data: 1005430047
  },
  {
    value: "140 WEST 44 STREET",
    data: 1009960050
  },
  {
    value: "140 WEST 46 STREET",
    data: 1009980052
  },
  {
    value: "140 WEST 55 STREET",
    data: 1010070051
  },
  {
    value: "140 WEST 55 STREET",
    data: 1010070051
  },
  {
    value: "140 WEST 57 STREET",
    data: 1010090050
  },
  {
    value: "140 WEST 58 STREET",
    data: 1010107501
  },
  {
    value: "140 WEST 58 STREET",
    data: 1010107501
  },
  {
    value: "140 WEST 69 STREET",
    data: 1011400046
  },
  {
    value: "140 WEST 69 STREET",
    data: 1011400046
  },
  {
    value: "140 WEST 71 STREET",
    data: 1011420048
  },
  {
    value: "140 WEST 71 STREET",
    data: 1011420048
  },
  {
    value: "140 WEST 72 STREET",
    data: 1011430049
  },
  {
    value: "140 WEST 72 STREET",
    data: 1011430049
  },
  {
    value: "140 WEST 73 STREET",
    data: 1011440049
  },
  {
    value: "140 WEST 73 STREET",
    data: 1011440049
  },
  {
    value: "140 WEST 74 STREET",
    data: 1011450049
  },
  {
    value: "140 WEST 74 STREET",
    data: 1011450049
  },
  {
    value: "140 WEST 75 STREET",
    data: 1011460052
  },
  {
    value: "140 WEST 75 STREET",
    data: 1011460052
  },
  {
    value: "140 WEST 76 STREET",
    data: 1011470047
  },
  {
    value: "140 WEST 79 STREET",
    data: 1011500048
  },
  {
    value: "140 WEST 79 STREET",
    data: 1011500048
  },
  {
    value: "140 WEST 80 STREET",
    data: 1012100051
  },
  {
    value: "140 WEST 81 STREET",
    data: 1012110050
  },
  {
    value: "140 WEST 82 STREET",
    data: 1012120149
  },
  {
    value: "140 WEST 83 STREET",
    data: 1012130050
  },
  {
    value: "140 WEST 86 STREET",
    data: 1012160048
  },
  {
    value: "140 WEST 86 STREET",
    data: 1012160048
  },
  {
    value: "140 WEST 87 STREET",
    data: 1012170048
  },
  {
    value: "140 WEST 88 STREET",
    data: 1012180045
  },
  {
    value: "140 WEST 92 STREET",
    data: 1012220051
  },
  {
    value: "140 WEST 95 STREET",
    data: 1012250049
  },
  {
    value: "140 WEST END AVENUE",
    data: 1011587504
  },
  {
    value: "140 WEST END AVENUE",
    data: 1011587504
  },
  {
    value: "140 WEST STREET",
    data: 1000847501
  },
  {
    value: "140 WEST STREET",
    data: 1000847501
  },
  {
    value: "140 WOOSTER STREET",
    data: 1005140004
  },
  {
    value: "1400 5 AVENUE",
    data: 1015997501
  },
  {
    value: "1400 5 AVENUE",
    data: 1015997501
  },
  {
    value: "1400 AMSTERDAM AVENUE",
    data: 1019840033
  },
  {
    value: "1400 AVENUE OF THE AMER",
    data: 1012730001
  },
  {
    value: "1400 BROADWAY",
    data: 1008140019
  },
  {
    value: "1400 ST NICHOLAS AVENUE",
    data: 1021530057
  },
  {
    value: "1400 ST NICHOLAS AVENUE",
    data: 1021530057
  },
  {
    value: "1400 YORK AVENUE",
    data: 1014860103
  },
  {
    value: "1401 AVENUE OF THE AMER",
    data: 1010100029
  },
  {
    value: "1401 ST NICHOLAS AVENUE",
    data: 1021620068
  },
  {
    value: "1401 YORK AVENUE",
    data: 1014690028
  },
  {
    value: "1401 YORK AVENUE",
    data: 1014690028
  },
  {
    value: "1402 3 AVENUE",
    data: 1015080038
  },
  {
    value: "1402 3 AVENUE",
    data: 1015080038
  },
  {
    value: "1402 BROADWAY",
    data: 1008140052
  },
  {
    value: "1402 YORK AVENUE",
    data: 1014860004
  },
  {
    value: "1403 2 AVENUE",
    data: 1014280021
  },
  {
    value: "1403 2 AVENUE",
    data: 1014280021
  },
  {
    value: "1403 5 AVENUE",
    data: 1016210002
  },
  {
    value: "1403 AMSTERDAM AVENUE",
    data: 1019690001
  },
  {
    value: "1403 AMSTERDAM AVENUE",
    data: 1019690001
  },
  {
    value: "1404 2 AVENUE",
    data: 1014480001
  },
  {
    value: "1404 2 AVENUE",
    data: 1014480001
  },
  {
    value: "1404 3 AVENUE",
    data: 1015080039
  },
  {
    value: "1405 2 AVENUE",
    data: 1014280022
  },
  {
    value: "1405 5 AVENUE",
    data: 1016217501
  },
  {
    value: "1405 5 AVENUE",
    data: 1016217501
  },
  {
    value: "1405 PARK AVENUE",
    data: 1016320001
  },
  {
    value: "1405 PARK AVENUE",
    data: 1016320001
  },
  {
    value: "1406 3 AVENUE",
    data: 1015080040
  },
  {
    value: "1407 2 AVENUE",
    data: 1014280023
  },
  {
    value: "1407 BROADWAY",
    data: 1008140015
  },
  {
    value: "1407 MADISON AVENUE",
    data: 1016030053
  },
  {
    value: "1408 2 AVENUE",
    data: 1014480003
  },
  {
    value: "1408 2 AVENUE",
    data: 1014480003
  },
  {
    value: "1408 MADISON AVENUE",
    data: 1016030057
  },
  {
    value: "1408 MADISON AVENUE",
    data: 1016030057
  },
  {
    value: "1409 2 AVENUE",
    data: 1014280024
  },
  {
    value: "1409 2 AVENUE",
    data: 1014280024
  },
  {
    value: "1409 AVENUE OF THE AMER",
    data: 1010100032
  },
  {
    value: "1409 MADISON AVENUE",
    data: 1016030052
  },
  {
    value: "1409 YORK AVENUE",
    data: 1014700022
  },
  {
    value: "1409 YORK AVENUE",
    data: 1014700022
  },
  {
    value: "141 1 AVENUE",
    data: 1004500031
  },
  {
    value: "141 2 AVENUE",
    data: 1004640034
  },
  {
    value: "141 2 AVENUE",
    data: 1004640034
  },
  {
    value: "141 5 AVENUE",
    data: 1008497505
  },
  {
    value: "141 5 AVENUE",
    data: 1008497505
  },
  {
    value: "141 ALLEN STREET",
    data: 1004150024
  },
  {
    value: "141 AMSTERDAM AVENUE",
    data: 1011380001
  },
  {
    value: "141 AMSTERDAM AVENUE",
    data: 1011380001
  },
  {
    value: "141 ATTORNEY STREET",
    data: 1003440154
  },
  {
    value: "141 ATTORNEY STREET",
    data: 1003440154
  },
  {
    value: "141 AUDUBON AVENUE",
    data: 1021280035
  },
  {
    value: "141 AVENUE A",
    data: 1004360029
  },
  {
    value: "141 AVENUE D",
    data: 1003790034
  },
  {
    value: "141 AVENUE D",
    data: 1003790034
  },
  {
    value: "141 CANAL STREET",
    data: 1003030003
  },
  {
    value: "141 CENTRAL PARK NORTH",
    data: 1018200010
  },
  {
    value: "141 CHRYSTIE STREET",
    data: 1004240027
  },
  {
    value: "141 DIVISION STREET",
    data: 1002837501
  },
  {
    value: "141 DYCKMAN STREET",
    data: 1022200054
  },
  {
    value: "141 EAST 110 STREET",
    data: 1016380017
  },
  {
    value: "141 EAST 110 STREET",
    data: 1016380017
  },
  {
    value: "141 EAST 13 STREET",
    data: 1005590042
  },
  {
    value: "141 EAST 13 STREET",
    data: 1005590042
  },
  {
    value: "141 EAST 17 STREET",
    data: 1008730031
  },
  {
    value: "141 EAST 18 STREET",
    data: 1008740029
  },
  {
    value: "141 EAST 19 STREET",
    data: 1008757501
  },
  {
    value: "141 EAST 23 STREET",
    data: 1008790026
  },
  {
    value: "141 EAST 23 STREET",
    data: 1008790026
  },
  {
    value: "141 EAST 25 STREET",
    data: 1008810031
  },
  {
    value: "141 EAST 28 STREET",
    data: 1008840030
  },
  {
    value: "141 EAST 29 STREET",
    data: 1008850035
  },
  {
    value: "141 EAST 33 STREET",
    data: 1008890022
  },
  {
    value: "141 EAST 33 STREET",
    data: 1008890022
  },
  {
    value: "141 EAST 36 STREET",
    data: 1008920027
  },
  {
    value: "141 EAST 37 STREET",
    data: 1008930029
  },
  {
    value: "141 EAST 39 STREET",
    data: 1008950034
  },
  {
    value: "141 EAST 43 STREET",
    data: 1012980127
  },
  {
    value: "141 EAST 45 STREET",
    data: 1013000026
  },
  {
    value: "141 EAST 55 STREET",
    data: 1013107501
  },
  {
    value: "141 EAST 55 STREET",
    data: 1013107501
  },
  {
    value: "141 EAST 56 STREET",
    data: 1013110028
  },
  {
    value: "141 EAST 56 STREET",
    data: 1013110028
  },
  {
    value: "141 EAST 57 STREET",
    data: 1013120122
  },
  {
    value: "141 EAST 63 STREET",
    data: 1013980123
  },
  {
    value: "141 EAST 69 STREET",
    data: 1014040023
  },
  {
    value: "141 EAST 88 STREET",
    data: 1015177502
  },
  {
    value: "141 EAST 88 STREET",
    data: 1015177502
  },
  {
    value: "141 EAST 95 STREET",
    data: 1015240015
  },
  {
    value: "141 EAST BROADWAY",
    data: 1002830033
  },
  {
    value: "141 EDGECOMBE AVENUE",
    data: 1020510015
  },
  {
    value: "141 EDGECOMBE AVENUE",
    data: 1020510015
  },
  {
    value: "141 ESSEX STREET",
    data: 1004110063
  },
  {
    value: "141 ESSEX STREET",
    data: 1004110063
  },
  {
    value: "141 FULTON STREET",
    data: 1000890002
  },
  {
    value: "141 GRAND STREET",
    data: 1002330012
  },
  {
    value: "141 GREENE STREET",
    data: 1005140024
  },
  {
    value: "141 GREENWICH STREET",
    data: 1000520022
  },
  {
    value: "141 HENRY STREET",
    data: 1002830017
  },
  {
    value: "141 LEXINGTON AVENUE",
    data: 1008850027
  },
  {
    value: "141 MAC DOUGAL STREET",
    data: 1005430052
  },
  {
    value: "141 MAC DOUGAL STREET",
    data: 1005430052
  },
  {
    value: "141 MADISON STREET",
    data: 1002750028
  },
  {
    value: "141 MOTT STREET",
    data: 1002370020
  },
  {
    value: "141 MOTT STREET",
    data: 1002370020
  },
  {
    value: "141 MULBERRY STREET",
    data: 1002360025
  },
  {
    value: "141 MULBERRY STREET",
    data: 1002360025
  },
  {
    value: "141 NAGLE AVENUE",
    data: 1021730025
  },
  {
    value: "141 NAGLE AVENUE",
    data: 1021730025
  },
  {
    value: "141 NORFOLK STREET",
    data: 1003540026
  },
  {
    value: "141 NORFOLK STREET",
    data: 1003540026
  },
  {
    value: "141 ORCHARD STREET",
    data: 1004150066
  },
  {
    value: "141 PERRY STREET",
    data: 1006330033
  },
  {
    value: "141 ST NICHOLAS AVENUE",
    data: 1019230019
  },
  {
    value: "141 ST NICHOLAS AVENUE",
    data: 1019230019
  },
  {
    value: "141 SULLIVAN STREET",
    data: 1005170005
  },
  {
    value: "141 SULLIVAN STREET",
    data: 1005170005
  },
  {
    value: "141 THOMPSON STREET",
    data: 1005170126
  },
  {
    value: "141 WAVERLY PLACE",
    data: 1005930003
  },
  {
    value: "141 WAVERLY PLACE",
    data: 1005930003
  },
  {
    value: "141 WEST 10 STREET",
    data: 1006110070
  },
  {
    value: "141 WEST 10 STREET",
    data: 1006110070
  },
  {
    value: "141 WEST 109 STREET",
    data: 1018640009
  },
  {
    value: "141 WEST 109 STREET",
    data: 1018640009
  },
  {
    value: "141 WEST 111 STREET",
    data: 1018210011
  },
  {
    value: "141 WEST 111 STREET",
    data: 1018210011
  },
  {
    value: "141 WEST 113 STREET",
    data: 1018230007
  },
  {
    value: "141 WEST 115 STREET",
    data: 1018250008
  },
  {
    value: "141 WEST 116 STREET",
    data: 1019010012
  },
  {
    value: "141 WEST 116 STREET",
    data: 1019010012
  },
  {
    value: "141 WEST 117 STREET",
    data: 1019020013
  },
  {
    value: "141 WEST 118 STREET",
    data: 1019030011
  },
  {
    value: "141 WEST 119 STREET",
    data: 1019040013
  },
  {
    value: "141 WEST 120 STREET",
    data: 1019050111
  },
  {
    value: "141 WEST 122 STREET",
    data: 1019070113
  },
  {
    value: "141 WEST 123 STREET",
    data: 1019080014
  },
  {
    value: "141 WEST 127 STREET",
    data: 1019120010
  },
  {
    value: "141 WEST 127 STREET",
    data: 1019120010
  },
  {
    value: "141 WEST 128 STREET",
    data: 1019130009
  },
  {
    value: "141 WEST 128 STREET",
    data: 1019130009
  },
  {
    value: "141 WEST 129 STREET",
    data: 1019140115
  },
  {
    value: "141 WEST 13 STREET",
    data: 1006090065
  },
  {
    value: "141 WEST 13 STREET",
    data: 1006090065
  },
  {
    value: "141 WEST 130 STREET",
    data: 1019150013
  },
  {
    value: "141 WEST 131 STREET",
    data: 1019160015
  },
  {
    value: "141 WEST 132 STREET",
    data: 1019170015
  },
  {
    value: "141 WEST 136 STREET",
    data: 1019210115
  },
  {
    value: "141 WEST 139 STREET",
    data: 1020080006
  },
  {
    value: "141 WEST 139 STREET",
    data: 1020080006
  },
  {
    value: "141 WEST 142 STREET",
    data: 1020110015
  },
  {
    value: "141 WEST 144 STREET",
    data: 1020130009
  },
  {
    value: "141 WEST 145 STREET",
    data: 1020140016
  },
  {
    value: "141 WEST 145 STREET",
    data: 1020140016
  },
  {
    value: "141 WEST 15 STREET",
    data: 1007910018
  },
  {
    value: "141 WEST 16 STREET",
    data: 1007920012
  },
  {
    value: "141 WEST 16 STREET",
    data: 1007920012
  },
  {
    value: "141 WEST 17 STREET",
    data: 1007930014
  },
  {
    value: "141 WEST 17 STREET",
    data: 1007930014
  },
  {
    value: "141 WEST 20 STREET",
    data: 1007960015
  },
  {
    value: "141 WEST 24 STREET",
    data: 1008007503
  },
  {
    value: "141 WEST 26 STREET",
    data: 1008020017
  },
  {
    value: "141 WEST 28 STREET",
    data: 1008040013
  },
  {
    value: "141 WEST 36 STREET",
    data: 1008120016
  },
  {
    value: "141 WEST 4 STREET",
    data: 1005520032
  },
  {
    value: "141 WEST 41 STREET",
    data: 1009940016
  },
  {
    value: "141 WEST 43 STREET",
    data: 1009960012
  },
  {
    value: "141 WEST 53 STREET",
    data: 1010060013
  },
  {
    value: "141 WEST 69 STREET",
    data: 1011410017
  },
  {
    value: "141 WEST 72 STREET",
    data: 1011440115
  },
  {
    value: "141 WEST 73 STREET",
    data: 1011450012
  },
  {
    value: "141 WEST 73 STREET",
    data: 1011450012
  },
  {
    value: "141 WEST 74 STREET",
    data: 1011460112
  },
  {
    value: "141 WEST 75 STREET",
    data: 1011470013
  },
  {
    value: "141 WEST 78 STREET",
    data: 1011500015
  },
  {
    value: "141 WEST 80 STREET",
    data: 1012110018
  },
  {
    value: "141 WEST 81 STREET",
    data: 1012120018
  },
  {
    value: "141 WEST 85 STREET",
    data: 1012160013
  },
  {
    value: "141 WEST 87 STREET",
    data: 1012180019
  },
  {
    value: "141 WEST 93 STREET",
    data: 1012240016
  },
  {
    value: "141 WEST 93 STREET",
    data: 1012240016
  },
  {
    value: "141 WEST 94 STREET",
    data: 1012250016
  },
  {
    value: "141 WEST 95 STREET",
    data: 1012260016
  },
  {
    value: "141 WEST BROADWAY",
    data: 1001470014
  },
  {
    value: "141 WOOSTER STREET",
    data: 1005150031
  },
  {
    value: "141 WOOSTER STREET",
    data: 1005150031
  },
  {
    value: "1410 3 AVENUE",
    data: 1015090033
  },
  {
    value: "1410 MADISON AVENUE",
    data: 1016030058
  },
  {
    value: "1410 YORK AVENUE",
    data: 1014860049
  },
  {
    value: "1410 YORK AVENUE",
    data: 1014860049
  },
  {
    value: "1411 2 AVENUE",
    data: 1014280025
  },
  {
    value: "1411 3 AVENUE",
    data: 1015267501
  },
  {
    value: "1411 3 AVENUE",
    data: 1015267501
  },
  {
    value: "1411 5 AVENUE",
    data: 1016210071
  },
  {
    value: "1411 BROADWAY",
    data: 1008150001
  },
  {
    value: "1411 MADISON AVENUE",
    data: 1016030051
  },
  {
    value: "1411 YORK AVENUE",
    data: 1014700023
  },
  {
    value: "1411 YORK AVENUE",
    data: 1014700023
  },
  {
    value: "1412 3 AVENUE",
    data: 1015090034
  },
  {
    value: "1412 3 AVENUE",
    data: 1015090034
  },
  {
    value: "1412 AVENUE OF THE AMER",
    data: 1012730071
  },
  {
    value: "1412 BROADWAY",
    data: 1008150014
  },
  {
    value: "1412 MADISON AVENUE",
    data: 1016030158
  },
  {
    value: "1413 2 AVENUE",
    data: 1014280026
  },
  {
    value: "1413 5 AVENUE",
    data: 1016210070
  },
  {
    value: "1413 AMSTERDAM AVENUE",
    data: 1019690081
  },
  {
    value: "1413 AMSTERDAM AVENUE",
    data: 1019690081
  },
  {
    value: "1413 LEXINGTON AVENUE",
    data: 1015210153
  },
  {
    value: "1413 MADISON AVENUE",
    data: 1016030050
  },
  {
    value: "1413 MADISON AVENUE",
    data: 1016030050
  },
  {
    value: "1413 YORK AVENUE",
    data: 1014700024
  },
  {
    value: "1413 YORK AVENUE",
    data: 1014700024
  },
  {
    value: "1414 MADISON AVENUE",
    data: 1016030059
  },
  {
    value: "1414 MADISON AVENUE",
    data: 1016030059
  },
  {
    value: "1414 YORK AVENUE",
    data: 1014870001
  },
  {
    value: "1414 YORK AVENUE",
    data: 1014870001
  },
  {
    value: "1415 2 AVENUE",
    data: 1014280027
  },
  {
    value: "1415 5 AVENUE",
    data: 1016210069
  },
  {
    value: "1415 AMSTERDAM AVENUE",
    data: 1019690080
  },
  {
    value: "1415 LEXINGTON AVENUE",
    data: 1015210051
  },
  {
    value: "1415 LEXINGTON AVENUE",
    data: 1015210051
  },
  {
    value: "1416 3 AVENUE",
    data: 1015090035
  },
  {
    value: "1416 3 AVENUE",
    data: 1015090035
  },
  {
    value: "1416 YORK AVENUE",
    data: 1014870002
  },
  {
    value: "1417 2 AVENUE",
    data: 1014280028
  },
  {
    value: "1417 2 AVENUE",
    data: 1014280028
  },
  {
    value: "1417 AMSTERDAM AVENUE",
    data: 1019690079
  },
  {
    value: "142 1 AVENUE",
    data: 1004360003
  },
  {
    value: "142 5 AVENUE",
    data: 1008210038
  },
  {
    value: "142 AUDUBON AVENUE",
    data: 1021290017
  },
  {
    value: "142 BOWERY",
    data: 1004700053
  },
  {
    value: "142 BROOME STREET",
    data: 1003420065
  },
  {
    value: "142 DUANE STREET",
    data: 1001460018
  },
  {
    value: "142 EAST 117 STREET",
    data: 1016440156
  },
  {
    value: "142 EAST 121 STREET",
    data: 1017690045
  },
  {
    value: "142 EAST 126 STREET",
    data: 1017740051
  },
  {
    value: "142 EAST 126 STREET",
    data: 1017740051
  },
  {
    value: "142 EAST 19 STREET",
    data: 1008740049
  },
  {
    value: "142 EAST 27 STREET",
    data: 1008820056
  },
  {
    value: "142 EAST 27 STREET",
    data: 1008820056
  },
  {
    value: "142 EAST 29 STREET",
    data: 1008840054
  },
  {
    value: "142 EAST 30 STREET",
    data: 1008850057
  },
  {
    value: "142 EAST 31 STREET",
    data: 1008860056
  },
  {
    value: "142 EAST 33 STREET",
    data: 1008880055
  },
  {
    value: "142 EAST 33 STREET",
    data: 1008880055
  },
  {
    value: "142 EAST 35 STREET",
    data: 1008900061
  },
  {
    value: "142 EAST 37 STREET",
    data: 1008920058
  },
  {
    value: "142 EAST 38 STREET",
    data: 1008930062
  },
  {
    value: "142 EAST 39 STREET",
    data: 1008940057
  },
  {
    value: "142 EAST 49 STREET",
    data: 1013030046
  },
  {
    value: "142 EAST 49 STREET",
    data: 1013030046
  },
  {
    value: "142 EAST 62 STREET",
    data: 1013960048
  },
  {
    value: "142 EAST 65 STREET",
    data: 1013990046
  },
  {
    value: "142 EAST 80 STREET",
    data: 1015080057
  },
  {
    value: "142 EAST 96 STREET",
    data: 1015240046
  },
  {
    value: "142 EAST 98 STREET",
    data: 1016250048
  },
  {
    value: "142 EAST 98 STREET",
    data: 1016250048
  },
  {
    value: "142 EAST END AVENUE",
    data: 1015830121
  },
  {
    value: "142 EDGECOMBE AVENUE",
    data: 1020437503
  },
  {
    value: "142 FULTON STREET",
    data: 1000790026
  },
  {
    value: "142 GRAND STREET",
    data: 1004730047
  },
  {
    value: "142 GREENE STREET",
    data: 1005130007
  },
  {
    value: "142 HENRY STREET",
    data: 1002737501
  },
  {
    value: "142 HENRY STREET",
    data: 1002737501
  },
  {
    value: "142 LAUREL HILL TERRACE",
    data: 1021490112
  },
  {
    value: "142 LAUREL HILL TERRACE",
    data: 1021490112
  },
  {
    value: "142 LEXINGTON AVENUE",
    data: 1008850020
  },
  {
    value: "142 LUDLOW STREET",
    data: 1004110044
  },
  {
    value: "142 LUDLOW STREET",
    data: 1004110044
  },
  {
    value: "142 MULBERRY STREET",
    data: 1002370007
  },
  {
    value: "142 STANTON STREET",
    data: 1003550075
  },
  {
    value: "142 SULLIVAN STREET",
    data: 1005180037
  },
  {
    value: "142 SULLIVAN STREET",
    data: 1005180037
  },
  {
    value: "142 WATTS STREET",
    data: 1005950051
  },
  {
    value: "142 WEST 10 STREET",
    data: 1006107502
  },
  {
    value: "142 WEST 106 STREET",
    data: 1018420018
  },
  {
    value: "142 WEST 109 STREET",
    data: 1018630057
  },
  {
    value: "142 WEST 109 STREET",
    data: 1018630057
  },
  {
    value: "142 WEST 11 STREET",
    data: 1006060040
  },
  {
    value: "142 WEST 113 STREET",
    data: 1018220058
  },
  {
    value: "142 WEST 113 STREET",
    data: 1018220058
  },
  {
    value: "142 WEST 118 STREET",
    data: 1019020051
  },
  {
    value: "142 WEST 119 STREET",
    data: 1019030053
  },
  {
    value: "142 WEST 120 STREET",
    data: 1019040150
  },
  {
    value: "142 WEST 121 STREET",
    data: 1019050052
  },
  {
    value: "142 WEST 123 STREET",
    data: 1019070052
  },
  {
    value: "142 WEST 124 STREET",
    data: 1019080051
  },
  {
    value: "142 WEST 125 STREET",
    data: 1019090011
  },
  {
    value: "142 WEST 127 STREET",
    data: 1019110052
  },
  {
    value: "142 WEST 13 STREET",
    data: 1006080018
  },
  {
    value: "142 WEST 130 STREET",
    data: 1019140149
  },
  {
    value: "142 WEST 131 STREET",
    data: 1019150052
  },
  {
    value: "142 WEST 132 STREET",
    data: 1019160050
  },
  {
    value: "142 WEST 133 STREET",
    data: 1019170050
  },
  {
    value: "142 WEST 136 STREET",
    data: 1019200050
  },
  {
    value: "142 WEST 139 STREET",
    data: 1020070059
  },
  {
    value: "142 WEST 139 STREET",
    data: 1020070059
  },
  {
    value: "142 WEST 143 STREET",
    data: 1020110055
  },
  {
    value: "142 WEST 143 STREET",
    data: 1020110055
  },
  {
    value: "142 WEST 17 STREET",
    data: 1007920060
  },
  {
    value: "142 WEST 17 STREET",
    data: 1007920060
  },
  {
    value: "142 WEST 19 STREET",
    data: 1007940063
  },
  {
    value: "142 WEST 21 STREET",
    data: 1007960063
  },
  {
    value: "142 WEST 228 STREET",
    data: 1022150579
  },
  {
    value: "142 WEST 23 STREET",
    data: 1007980066
  },
  {
    value: "142 WEST 23 STREET",
    data: 1007980066
  },
  {
    value: "142 WEST 24 STREET",
    data: 1007990064
  },
  {
    value: "142 WEST 26 STREET",
    data: 1008010065
  },
  {
    value: "142 WEST 26 STREET",
    data: 1008010065
  },
  {
    value: "142 WEST 29 STREET",
    data: 1008040063
  },
  {
    value: "142 WEST 31 STREET",
    data: 1008060066
  },
  {
    value: "142 WEST 32 STREET",
    data: 1008070064
  },
  {
    value: "142 WEST 34 STREET",
    data: 1008090068
  },
  {
    value: "142 WEST 36 STREET",
    data: 1008110056
  },
  {
    value: "142 WEST 4 STREET",
    data: 1005430045
  },
  {
    value: "142 WEST 4 STREET",
    data: 1005430045
  },
  {
    value: "142 WEST 44 STREET",
    data: 1009960051
  },
  {
    value: "142 WEST 44 STREET",
    data: 1009960051
  },
  {
    value: "142 WEST 46 STREET",
    data: 1009980152
  },
  {
    value: "142 WEST 49 STREET",
    data: 1010010055
  },
  {
    value: "142 WEST 70 STREET",
    data: 1011410048
  },
  {
    value: "142 WEST 70 STREET",
    data: 1011410048
  },
  {
    value: "142 WEST 75 STREET",
    data: 1011460152
  },
  {
    value: "142 WEST 76 STREET",
    data: 1011470048
  },
  {
    value: "142 WEST 80 STREET",
    data: 1012100052
  },
  {
    value: "142 WEST 82 STREET",
    data: 1012120050
  },
  {
    value: "142 WEST 83 STREET",
    data: 1012130051
  },
  {
    value: "142 WEST 83 STREET",
    data: 1012130051
  },
  {
    value: "142 WEST 86 STREET",
    data: 1012160050
  },
  {
    value: "142 WEST 87 STREET",
    data: 1012170049
  },
  {
    value: "142 WEST 88 STREET",
    data: 1012180046
  },
  {
    value: "142 WEST 92 STREET",
    data: 1012220052
  },
  {
    value: "142 WEST 95 STREET",
    data: 1012250050
  },
  {
    value: "142 WEST BROADWAY",
    data: 1001440026
  },
  {
    value: "142 WEST HOUSTON STREET",
    data: 1005260081
  },
  {
    value: "142 WOOSTER STREET",
    data: 1005140005
  },
  {
    value: "142 WOOSTER STREET",
    data: 1005140005
  },
  {
    value: "1420 2 AVENUE",
    data: 1014490001
  },
  {
    value: "1420 3 AVENUE",
    data: 1015090037
  },
  {
    value: "1420 BROADWAY",
    data: 1008150049
  },
  {
    value: "1420 MADISON AVENUE",
    data: 1016040017
  },
  {
    value: "1420 YORK AVENUE",
    data: 1014877501
  },
  {
    value: "1420 YORK AVENUE",
    data: 1014877501
  },
  {
    value: "1421 3 AVENUE",
    data: 1015260004
  },
  {
    value: "1421 5 AVENUE",
    data: 1016220001
  },
  {
    value: "1422 2 AVENUE",
    data: 1014490002
  },
  {
    value: "1422 3 AVENUE",
    data: 1015090038
  },
  {
    value: "1422 3 AVENUE",
    data: 1015090038
  },
  {
    value: "1423 AMSTERDAM AVENUE",
    data: 1019700002
  },
  {
    value: "1423 AMSTERDAM AVENUE",
    data: 1019700002
  },
  {
    value: "1424 2 AVENUE",
    data: 1014490003
  },
  {
    value: "1424 2 AVENUE",
    data: 1014490003
  },
  {
    value: "1424 3 AVENUE",
    data: 1015090039
  },
  {
    value: "1424 3 AVENUE",
    data: 1015090039
  },
  {
    value: "1425 3 AVENUE",
    data: 1015260047
  },
  {
    value: "1425 3 AVENUE",
    data: 1015260047
  },
  {
    value: "1425 MADISON AVENUE",
    data: 1016040023
  },
  {
    value: "1425 ST NICHOLAS AVENUE",
    data: 1021650014
  },
  {
    value: "1425 ST NICHOLAS AVENUE",
    data: 1021650014
  },
  {
    value: "1425 YORK AVENUE",
    data: 1014700025
  },
  {
    value: "1425 YORK AVENUE",
    data: 1014700025
  },
  {
    value: "1427 YORK AVENUE",
    data: 1014700026
  },
  {
    value: "1427 YORK AVENUE",
    data: 1014700026
  },
  {
    value: "1428 ST NICHOLAS AVENUE",
    data: 1021540005
  },
  {
    value: "1428 YORK AVENUE",
    data: 1014870049
  },
  {
    value: "1428 YORK AVENUE",
    data: 1014870049
  },
  {
    value: "1429 1 AVENUE",
    data: 1014490023
  },
  {
    value: "1429 3 AVENUE",
    data: 1015260046
  },
  {
    value: "1429 5 AVENUE",
    data: 1016220073
  },
  {
    value: "1429 5 AVENUE",
    data: 1016220073
  },
  {
    value: "1429 LEXINGTON AVENUE",
    data: 1015220020
  },
  {
    value: "1429 LEXINGTON AVENUE",
    data: 1015220020
  },
  {
    value: "143 1 AVENUE",
    data: 1004500030
  },
  {
    value: "143 ALLEN STREET",
    data: 1004150023
  },
  {
    value: "143 AVENUE B",
    data: 1003927501
  },
  {
    value: "143 AVENUE B",
    data: 1003927501
  },
  {
    value: "143 AVENUE C",
    data: 1003910030
  },
  {
    value: "143 AVENUE D",
    data: 1003790032
  },
  {
    value: "143 AVENUE D",
    data: 1003790032
  },
  {
    value: "143 BENNETT AVENUE",
    data: 1021800326
  },
  {
    value: "143 BENNETT AVENUE",
    data: 1021800326
  },
  {
    value: "143 BOWERY",
    data: 1004230008
  },
  {
    value: "143 CHAMBERS STREET",
    data: 1001400003
  },
  {
    value: "143 DIVISION STREET",
    data: 1002830077
  },
  {
    value: "143 DUANE STREET",
    data: 1001477502
  },
  {
    value: "143 EAST 103 STREET",
    data: 1016310014
  },
  {
    value: "143 EAST 111 STREET",
    data: 1016390017
  },
  {
    value: "143 EAST 13 STREET",
    data: 1005590141
  },
  {
    value: "143 EAST 17 STREET",
    data: 1008730032
  },
  {
    value: "143 EAST 18 STREET",
    data: 1008740030
  },
  {
    value: "143 EAST 19 STREET",
    data: 1008750036
  },
  {
    value: "143 EAST 21 STREET",
    data: 1008770034
  },
  {
    value: "143 EAST 23 STREET",
    data: 1008790027
  },
  {
    value: "143 EAST 23 STREET",
    data: 1008790027
  },
  {
    value: "143 EAST 26 STREET",
    data: 1008820033
  },
  {
    value: "143 EAST 26 STREET",
    data: 1008820033
  },
  {
    value: "143 EAST 27 STREET",
    data: 1008830033
  },
  {
    value: "143 EAST 29 STREET",
    data: 1008850036
  },
  {
    value: "143 EAST 30 STREET",
    data: 1008860036
  },
  {
    value: "143 EAST 30 STREET",
    data: 1008860036
  },
  {
    value: "143 EAST 34 STREET",
    data: 1008907503
  },
  {
    value: "143 EAST 34 STREET",
    data: 1008907503
  },
  {
    value: "143 EAST 35 STREET",
    data: 1008910029
  },
  {
    value: "143 EAST 36 STREET",
    data: 1008920028
  },
  {
    value: "143 EAST 37 STREET",
    data: 1008930030
  },
  {
    value: "143 EAST 43 STREET",
    data: 1012980028
  },
  {
    value: "143 EAST 47 STREET",
    data: 1013020029
  },
  {
    value: "143 EAST 49 STREET",
    data: 1013040025
  },
  {
    value: "143 EAST 57 STREET",
    data: 1013120123
  },
  {
    value: "143 EAST 60 STREET",
    data: 1013950120
  },
  {
    value: "143 EAST 62 STREET",
    data: 1013970023
  },
  {
    value: "143 EAST 63 STREET",
    data: 1013980024
  },
  {
    value: "143 EAST 69 STREET",
    data: 1014040123
  },
  {
    value: "143 EAST 95 STREET",
    data: 1015240016
  },
  {
    value: "143 EAST 97 STREET",
    data: 1016250024
  },
  {
    value: "143 ESSEX STREET",
    data: 1004110061
  },
  {
    value: "143 ESSEX STREET",
    data: 1004110061
  },
  {
    value: "143 FRANKLIN STREET",
    data: 1001790063
  },
  {
    value: "143 FULTON STREET",
    data: 1000890003
  },
  {
    value: "143 GRAND STREET",
    data: 1002330013
  },
  {
    value: "143 GREENE STREET",
    data: 1005147504
  },
  {
    value: "143 HENRY STREET",
    data: 1002830018
  },
  {
    value: "143 LEXINGTON AVENUE",
    data: 1008857502
  },
  {
    value: "143 LEXINGTON AVENUE",
    data: 1008857502
  },
  {
    value: "143 LUDLOW STREET",
    data: 1004110027
  },
  {
    value: "143 LUDLOW STREET",
    data: 1004110027
  },
  {
    value: "143 MOTT STREET",
    data: 1002370019
  },
  {
    value: "143 MULBERRY STREET",
    data: 1002360024
  },
  {
    value: "143 NORFOLK STREET",
    data: 1003540025
  },
  {
    value: "143 ORCHARD STREET",
    data: 1004150065
  },
  {
    value: "143 PERRY STREET",
    data: 1006330034
  },
  {
    value: "143 PRINCE STREET",
    data: 1005150045
  },
  {
    value: "143 READE STREET",
    data: 1001407503
  },
  {
    value: "143 SEAMAN AVENUE",
    data: 1022400017
  },
  {
    value: "143 SEAMAN AVENUE",
    data: 1022400017
  },
  {
    value: "143 SHERMAN AVENUE",
    data: 1022210001
  },
  {
    value: "143 SPRING STREET",
    data: 1005010032
  },
  {
    value: "143 ST NICHOLAS AVENUE",
    data: 1019230020
  },
  {
    value: "143 SULLIVAN STREET",
    data: 1005170006
  },
  {
    value: "143 SULLIVAN STREET",
    data: 1005170006
  },
  {
    value: "143 VARICK STREET",
    data: 1005790068
  },
  {
    value: "143 WADSWORTH AVENUE",
    data: 1021620051
  },
  {
    value: "143 WAVERLY PLACE",
    data: 1005930029
  },
  {
    value: "143 WAVERLY PLACE",
    data: 1005930029
  },
  {
    value: "143 WEST 106 STREET",
    data: 1018420013
  },
  {
    value: "143 WEST 106 STREET",
    data: 1018420013
  },
  {
    value: "143 WEST 108 STREET",
    data: 1018630013
  },
  {
    value: "143 WEST 111 STREET",
    data: 1018210009
  },
  {
    value: "143 WEST 113 STREET",
    data: 1018230006
  },
  {
    value: "143 WEST 116 STREET",
    data: 1019010009
  },
  {
    value: "143 WEST 116 STREET",
    data: 1019010009
  },
  {
    value: "143 WEST 117 STREET",
    data: 1019020112
  },
  {
    value: "143 WEST 119 STREET",
    data: 1019040012
  },
  {
    value: "143 WEST 120 STREET",
    data: 1019050011
  },
  {
    value: "143 WEST 122 STREET",
    data: 1019077501
  },
  {
    value: "143 WEST 123 STREET",
    data: 1019087503
  },
  {
    value: "143 WEST 126 STREET",
    data: 1019110015
  },
  {
    value: "143 WEST 128 STREET",
    data: 1019137501
  },
  {
    value: "143 WEST 129 STREET",
    data: 1019140015
  },
  {
    value: "143 WEST 130 STREET",
    data: 1019150012
  },
  {
    value: "143 WEST 131 STREET",
    data: 1019160014
  },
  {
    value: "143 WEST 132 STREET",
    data: 1019170114
  },
  {
    value: "143 WEST 136 STREET",
    data: 1019210015
  },
  {
    value: "143 WEST 138 STREET",
    data: 1020070006
  },
  {
    value: "143 WEST 14 STREET",
    data: 1007900011
  },
  {
    value: "143 WEST 140 STREET",
    data: 1020090018
  },
  {
    value: "143 WEST 140 STREET",
    data: 1020090018
  },
  {
    value: "143 WEST 142 STREET",
    data: 1020110014
  },
  {
    value: "143 WEST 143 STREET",
    data: 1020120015
  },
  {
    value: "143 WEST 143 STREET",
    data: 1020120015
  },
  {
    value: "143 WEST 15 STREET",
    data: 1007910016
  },
  {
    value: "143 WEST 20 STREET",
    data: 1007960013
  },
  {
    value: "143 WEST 20 STREET",
    data: 1007960013
  },
  {
    value: "143 WEST 21 STREET",
    data: 1007970017
  },
  {
    value: "143 WEST 27 STREET",
    data: 1008030014
  },
  {
    value: "143 WEST 27 STREET",
    data: 1008030014
  },
  {
    value: "143 WEST 29 STREET",
    data: 1008050017
  },
  {
    value: "143 WEST 30 STREET",
    data: 1008067501
  },
  {
    value: "143 WEST 30 STREET",
    data: 1008067501
  },
  {
    value: "143 WEST 31 STREET",
    data: 1008070017
  },
  {
    value: "143 WEST 4 STREET",
    data: 1005520033
  },
  {
    value: "143 WEST 4 STREET",
    data: 1005520033
  },
  {
    value: "143 WEST 40 STREET",
    data: 1009930005
  },
  {
    value: "143 WEST 46 STREET",
    data: 1009990012
  },
  {
    value: "143 WEST 69 STREET",
    data: 1011410015
  },
  {
    value: "143 WEST 69 STREET",
    data: 1011410015
  },
  {
    value: "143 WEST 72 STREET",
    data: 1011440015
  },
  {
    value: "143 WEST 74 STREET",
    data: 1011460012
  },
  {
    value: "143 WEST 75 STREET",
    data: 1011470012
  },
  {
    value: "143 WEST 78 STREET",
    data: 1011500014
  },
  {
    value: "143 WEST 80 STREET",
    data: 1012110017
  },
  {
    value: "143 WEST 81 STREET",
    data: 1012120017
  },
  {
    value: "143 WEST 85 STREET",
    data: 1012160012
  },
  {
    value: "143 WEST 87 STREET",
    data: 1012180118
  },
  {
    value: "143 WEST 94 STREET",
    data: 1012250015
  },
  {
    value: "143 WEST 95 STREET",
    data: 1012260015
  },
  {
    value: "143 WEST 96 STREET",
    data: 1018510005
  },
  {
    value: "143 WEST 96 STREET",
    data: 1018510005
  },
  {
    value: "1430 3 AVENUE",
    data: 1015100033
  },
  {
    value: "1430 3 AVENUE",
    data: 1015100033
  },
  {
    value: "1430 BROADWAY",
    data: 1008150046
  },
  {
    value: "1430 ST NICHOLAS AVENUE",
    data: 1021540007
  },
  {
    value: "1431 1 AVENUE",
    data: 1014490024
  },
  {
    value: "1431 1 AVENUE",
    data: 1014490024
  },
  {
    value: "1431 6 AVENUE",
    data: 1010117505
  },
  {
    value: "1431 BROADWAY",
    data: 1009930007
  },
  {
    value: "1431 ST NICHOLAS AVENUE",
    data: 1021650011
  },
  {
    value: "1431 YORK AVENUE",
    data: 1014700028
  },
  {
    value: "1431 YORK AVENUE",
    data: 1014700028
  },
  {
    value: "1431A YORK AVENUE",
    data: 1014700029
  },
  {
    value: "1431A YORK AVENUE",
    data: 1014700029
  },
  {
    value: "1432 LEXINGTON AVENUE",
    data: 1015220116
  },
  {
    value: "1433 1 AVENUE",
    data: 1014490025
  },
  {
    value: "1433 1 AVENUE",
    data: 1014490025
  },
  {
    value: "1433 2 AVENUE",
    data: 1014290026
  },
  {
    value: "1433 3 AVENUE",
    data: 1015260045
  },
  {
    value: "1433 3 AVENUE",
    data: 1015260045
  },
  {
    value: "1434 LEXINGTON AVENUE",
    data: 1015220057
  },
  {
    value: "1434 YORK AVENUE",
    data: 1014880001
  },
  {
    value: "1434 YORK AVENUE",
    data: 1014880001
  },
  {
    value: "1435 1 AVENUE",
    data: 1014490026
  },
  {
    value: "1435 1 AVENUE",
    data: 1014490026
  },
  {
    value: "1435 2 AVENUE",
    data: 1014290027
  },
  {
    value: "1435 3 AVENUE",
    data: 1015270001
  },
  {
    value: "1435 3 AVENUE",
    data: 1015270001
  },
  {
    value: "1435 BROADWAY",
    data: 1009930008
  },
  {
    value: "1435 LEXINGTON AVENUE",
    data: 1015220050
  },
  {
    value: "1435 LEXINGTON AVENUE",
    data: 1015220050
  },
  {
    value: "1435 YORK AVENUE",
    data: 1014710021
  },
  {
    value: "1436 LEXINGTON AVENUE",
    data: 1015220156
  },
  {
    value: "1436 LEXINGTON AVENUE",
    data: 1015220156
  },
  {
    value: "1437 2 AVENUE",
    data: 1014290127
  },
  {
    value: "1437 AMSTERDAM AVENUE",
    data: 1019700034
  },
  {
    value: "1437 AMSTERDAM AVENUE",
    data: 1019700034
  },
  {
    value: "1438 3 AVENUE",
    data: 1015107501
  },
  {
    value: "1438 3 AVENUE",
    data: 1015107501
  },
  {
    value: "1439 1 AVENUE",
    data: 1014497501
  },
  {
    value: "1439 2 AVENUE",
    data: 1014290028
  },
  {
    value: "1439 AMSTERDAM AVENUE",
    data: 1019700035
  },
  {
    value: "1439 YORK AVENUE",
    data: 1014710024
  },
  {
    value: "144 1 AVENUE",
    data: 1004360004
  },
  {
    value: "144 2 AVENUE",
    data: 1004500008
  },
  {
    value: "144 5 AVENUE",
    data: 1008210039
  },
  {
    value: "144 8 AVENUE",
    data: 1007670001
  },
  {
    value: "144 9 AVENUE",
    data: 1007420072
  },
  {
    value: "144 9 AVENUE",
    data: 1007420072
  },
  {
    value: "144 AVENUE A",
    data: 1004030001
  },
  {
    value: "144 BARROW STREET",
    data: 1006040030
  },
  {
    value: "144 BAXTER STREET",
    data: 1002350020
  },
  {
    value: "144 BLEECKER STREET",
    data: 1005250046
  },
  {
    value: "144 BOWERY",
    data: 1004700052
  },
  {
    value: "144 CHAMBERS STREET",
    data: 1001370034
  },
  {
    value: "144 COLUMBUS AVENUE",
    data: 1011387501
  },
  {
    value: "144 COLUMBUS AVENUE",
    data: 1011387501
  },
  {
    value: "144 DUANE STREET",
    data: 1001460017
  },
  {
    value: "144 EAST 111 STREET",
    data: 1016380056
  },
  {
    value: "144 EAST 112 STREET",
    data: 1016390056
  },
  {
    value: "144 EAST 128 STREET",
    data: 1017760020
  },
  {
    value: "144 EAST 19 STREET",
    data: 1008740048
  },
  {
    value: "144 EAST 22 STREET",
    data: 1008770057
  },
  {
    value: "144 EAST 22 STREET",
    data: 1008770057
  },
  {
    value: "144 EAST 24 STREET",
    data: 1008790054
  },
  {
    value: "144 EAST 24 STREET",
    data: 1008790054
  },
  {
    value: "144 EAST 30 STREET",
    data: 1008857503
  },
  {
    value: "144 EAST 36 STREET",
    data: 1008910059
  },
  {
    value: "144 EAST 36 STREET",
    data: 1008910059
  },
  {
    value: "144 EAST 37 STREET",
    data: 1008920057
  },
  {
    value: "144 EAST 38 STREET",
    data: 1008930061
  },
  {
    value: "144 EAST 39 STREET",
    data: 1008940056
  },
  {
    value: "144 EAST 40 STREET",
    data: 1008950063
  },
  {
    value: "144 EAST 44 STREET",
    data: 1012980045
  },
  {
    value: "144 EAST 48 STREET",
    data: 1013020043
  },
  {
    value: "144 EAST 65 STREET",
    data: 1013990044
  },
  {
    value: "144 EAST 7 STREET",
    data: 1004020015
  },
  {
    value: "144 EAST 7 STREET",
    data: 1004020015
  },
  {
    value: "144 EAST 84 STREET",
    data: 1015120052
  },
  {
    value: "144 EAST 84 STREET",
    data: 1015120052
  },
  {
    value: "144 EAST BROADWAY",
    data: 1002830063
  },
  {
    value: "144 EAST BROADWAY",
    data: 1002830063
  },
  {
    value: "144 EAST END AVENUE",
    data: 1015830122
  },
  {
    value: "144 FRANKLIN STREET",
    data: 1001890005
  },
  {
    value: "144 FULTON STREET",
    data: 1000790025
  },
  {
    value: "144 HAMILTON PLACE",
    data: 1020750036
  },
  {
    value: "144 HAMILTON PLACE",
    data: 1020750036
  },
  {
    value: "144 HESTER STREET",
    data: 1002030016
  },
  {
    value: "144 LENOX AVENUE",
    data: 1016010001
  },
  {
    value: "144 LUDLOW STREET",
    data: 1004110045
  },
  {
    value: "144 LUDLOW STREET",
    data: 1004110045
  },
  {
    value: "144 MADISON STREET",
    data: 1002740028
  },
  {
    value: "144 READE STREET",
    data: 1001410007
  },
  {
    value: "144 SHERMAN AVENUE",
    data: 1022250042
  },
  {
    value: "144 SHERMAN AVENUE",
    data: 1022250042
  },
  {
    value: "144 SPRING STREET",
    data: 1004870029
  },
  {
    value: "144 STANTON STREET",
    data: 1003550074
  },
  {
    value: "144 SULLIVAN STREET",
    data: 1005180036
  },
  {
    value: "144 SULLIVAN STREET",
    data: 1005180036
  },
  {
    value: "144 WAVERLY PLACE",
    data: 1005920061
  },
  {
    value: "144 WEST 10 STREET",
    data: 1006100046
  },
  {
    value: "144 WEST 10 STREET",
    data: 1006100046
  },
  {
    value: "144 WEST 109 STREET",
    data: 1018630058
  },
  {
    value: "144 WEST 109 STREET",
    data: 1018630058
  },
  {
    value: "144 WEST 11 STREET",
    data: 1006060039
  },
  {
    value: "144 WEST 111 STREET",
    data: 1018200054
  },
  {
    value: "144 WEST 113 STREET",
    data: 1018220059
  },
  {
    value: "144 WEST 117 STREET",
    data: 1019010053
  },
  {
    value: "144 WEST 118 STREET",
    data: 1019020052
  },
  {
    value: "144 WEST 119 STREET",
    data: 1019030054
  },
  {
    value: "144 WEST 120 STREET",
    data: 1019040051
  },
  {
    value: "144 WEST 121 STREET",
    data: 1019050053
  },
  {
    value: "144 WEST 123 STREET",
    data: 1019070053
  },
  {
    value: "144 WEST 124 STREET",
    data: 1019080052
  },
  {
    value: "144 WEST 125 STREET",
    data: 1019090009
  },
  {
    value: "144 WEST 127 STREET",
    data: 1019110053
  },
  {
    value: "144 WEST 129 STREET",
    data: 1019130053
  },
  {
    value: "144 WEST 129 STREET",
    data: 1019130053
  },
  {
    value: "144 WEST 13 STREET",
    data: 1006080017
  },
  {
    value: "144 WEST 130 STREET",
    data: 1019140050
  },
  {
    value: "144 WEST 132 STREET",
    data: 1019160051
  },
  {
    value: "144 WEST 133 STREET",
    data: 1019170051
  },
  {
    value: "144 WEST 136 STREET",
    data: 1019200150
  },
  {
    value: "144 WEST 141 STREET",
    data: 1020090044
  },
  {
    value: "144 WEST 141 STREET",
    data: 1020090044
  },
  {
    value: "144 WEST 144 STREET",
    data: 1020120051
  },
  {
    value: "144 WEST 144 STREET",
    data: 1020120051
  },
  {
    value: "144 WEST 16 STREET",
    data: 1007910069
  },
  {
    value: "144 WEST 17 STREET",
    data: 1007920061
  },
  {
    value: "144 WEST 17 STREET",
    data: 1007920061
  },
  {
    value: "144 WEST 18 STREET",
    data: 1007937506
  },
  {
    value: "144 WEST 18 STREET",
    data: 1007937506
  },
  {
    value: "144 WEST 19 STREET",
    data: 1007940064
  },
  {
    value: "144 WEST 19 STREET",
    data: 1007940064
  },
  {
    value: "144 WEST 228 STREET",
    data: 1022150578
  },
  {
    value: "144 WEST 27 STREET",
    data: 1008027501
  },
  {
    value: "144 WEST 27 STREET",
    data: 1008027501
  },
  {
    value: "144 WEST 30 STREET",
    data: 1008050094
  },
  {
    value: "144 WEST 32 STREET",
    data: 1008070065
  },
  {
    value: "144 WEST 34 STREET",
    data: 1008090069
  },
  {
    value: "144 WEST 37 STREET",
    data: 1008120068
  },
  {
    value: "144 WEST 46 STREET",
    data: 1009980053
  },
  {
    value: "144 WEST 70 STREET",
    data: 1011410049
  },
  {
    value: "144 WEST 73 STREET",
    data: 1011440050
  },
  {
    value: "144 WEST 73 STREET",
    data: 1011440050
  },
  {
    value: "144 WEST 75 STREET",
    data: 1011460053
  },
  {
    value: "144 WEST 76 STREET",
    data: 1011470049
  },
  {
    value: "144 WEST 80 STREET",
    data: 1012100152
  },
  {
    value: "144 WEST 82 STREET",
    data: 1012120051
  },
  {
    value: "144 WEST 86 STREET",
    data: 1012160051
  },
  {
    value: "144 WEST 86 STREET",
    data: 1012160051
  },
  {
    value: "144 WEST 88 STREET",
    data: 1012180047
  },
  {
    value: "144 WEST 92 STREET",
    data: 1012220053
  },
  {
    value: "144 WEST 95 STREET",
    data: 1012250150
  },
  {
    value: "144 WEST HOUSTON STREET",
    data: 1005260082
  },
  {
    value: "1440 2 AVENUE",
    data: 1014500001
  },
  {
    value: "1440 2 AVENUE",
    data: 1014500001
  },
  {
    value: "1440 3 AVENUE",
    data: 1015100038
  },
  {
    value: "1440 AMSTERDAM AVENUE",
    data: 1019840028
  },
  {
    value: "1440 BROADWAY",
    data: 1009930011
  },
  {
    value: "1440 LEXINGTON AVENUE",
    data: 1015220058
  },
  {
    value: "1440 MADISON AVENUE",
    data: 1016040006
  },
  {
    value: "1440 ST NICHOLAS AVENUE",
    data: 1021540035
  },
  {
    value: "1441 3 AVENUE",
    data: 1015277501
  },
  {
    value: "1441 3 AVENUE",
    data: 1015277501
  },
  {
    value: "1441 5 AVENUE",
    data: 1016230001
  },
  {
    value: "1441 BROADWAY",
    data: 1009930055
  },
  {
    value: "1441 ST NICHOLAS AVENUE",
    data: 1021650043
  },
  {
    value: "1441 ST NICHOLAS AVENUE",
    data: 1021650043
  },
  {
    value: "1441 YORK AVENUE",
    data: 1014710025
  },
  {
    value: "1441A 5 AVENUE",
    data: 1016230141
  },
  {
    value: "1442 1 AVENUE",
    data: 1014690046
  },
  {
    value: "1442 3 AVENUE",
    data: 1015100039
  },
  {
    value: "1442 LEXINGTON AVENUE",
    data: 1015220158
  },
  {
    value: "1442 LEXINGTON AVENUE",
    data: 1015220158
  },
  {
    value: "1443 5 AVENUE",
    data: 1016230140
  },
  {
    value: "1443A 5 AVENUE",
    data: 1016230139
  },
  {
    value: "1444 1 AVENUE",
    data: 1014700001
  },
  {
    value: "1444 3 AVENUE",
    data: 1015100040
  },
  {
    value: "1445 1 AVENUE",
    data: 1014500023
  },
  {
    value: "1445 1 AVENUE",
    data: 1014500023
  },
  {
    value: "1445 5 AVENUE",
    data: 1016230138
  },
  {
    value: "1445 AMSTERDAM AVENUE",
    data: 1019700036
  },
  {
    value: "1445 ST NICHOLAS AVENUE",
    data: 1021650042
  },
  {
    value: "1445 ST NICHOLAS AVENUE",
    data: 1021650042
  },
  {
    value: "1446 1 AVENUE",
    data: 1014700002
  },
  {
    value: "1447 5 AVENUE",
    data: 1016230137
  },
  {
    value: "1447 ST NICHOLAS AVENUE",
    data: 1021650038
  },
  {
    value: "1447 ST NICHOLAS AVENUE",
    data: 1021650038
  },
  {
    value: "1448 1 AVENUE",
    data: 1014700003
  },
  {
    value: "1448 1 AVENUE",
    data: 1014700003
  },
  {
    value: "1448 ST NICHOLAS AVENUE",
    data: 1021540039
  },
  {
    value: "1449 5 AVENUE",
    data: 1016230136
  },
  {
    value: "1449 LEXINGTON AVENUE",
    data: 1015230023
  },
  {
    value: "145 1 AVENUE",
    data: 1004500029
  },
  {
    value: "145 1 AVENUE",
    data: 1004500029
  },
  {
    value: "145 2 AVENUE",
    data: 1004650055
  },
  {
    value: "145 2 AVENUE",
    data: 1004650055
  },
  {
    value: "145 8 AVENUE",
    data: 1007410031
  },
  {
    value: "145 ALLEN STREET",
    data: 1004150022
  },
  {
    value: "145 ALLEN STREET",
    data: 1004150022
  },
  {
    value: "145 AUDUBON AVENUE",
    data: 1021290030
  },
  {
    value: "145 AUDUBON AVENUE",
    data: 1021290030
  },
  {
    value: "145 AVENUE C",
    data: 1003920037
  },
  {
    value: "145 AVENUE C",
    data: 1003920037
  },
  {
    value: "145 AVENUE OF THE AMER",
    data: 1004917502
  },
  {
    value: "145 BAXTER STREET",
    data: 1002360006
  },
  {
    value: "145 BLEECKER STREET",
    data: 1005370034
  },
  {
    value: "145 BOWERY",
    data: 1004230009
  },
  {
    value: "145 CANAL STREET",
    data: 1003030004
  },
  {
    value: "145 CENTRAL PARK NORTH",
    data: 1018200006
  },
  {
    value: "145 CENTRAL PARK WEST",
    data: 1011270029
  },
  {
    value: "145 CENTRAL PARK WEST",
    data: 1011270029
  },
  {
    value: "145 CHAMBERS STREET",
    data: 1001400004
  },
  {
    value: "145 CLINTON STREET",
    data: 1003460150
  },
  {
    value: "145 CLINTON STREET",
    data: 1003460175
  },
  {
    value: "145 CLINTON STREET",
    data: 1003467501
  },
  {
    value: "145 DUANE STREET",
    data: 1001470009
  },
  {
    value: "145 EAST 116 STREET",
    data: 1016440121
  },
  {
    value: "145 EAST 121 STREET",
    data: 1017700021
  },
  {
    value: "145 EAST 121 STREET",
    data: 1017700021
  },
  {
    value: "145 EAST 125 STREET",
    data: 1017740020
  },
  {
    value: "145 EAST 128 STREET",
    data: 1017770021
  },
  {
    value: "145 EAST 15 STREET",
    data: 1008710039
  },
  {
    value: "145 EAST 15 STREET",
    data: 1008710039
  },
  {
    value: "145 EAST 18 STREET",
    data: 1008740031
  },
  {
    value: "145 EAST 19 STREET",
    data: 1008750037
  },
  {
    value: "145 EAST 22 STREET",
    data: 1008780028
  },
  {
    value: "145 EAST 22 STREET",
    data: 1008780028
  },
  {
    value: "145 EAST 26 STREET",
    data: 1008820035
  },
  {
    value: "145 EAST 26 STREET",
    data: 1008820035
  },
  {
    value: "145 EAST 29 STREET",
    data: 1008850037
  },
  {
    value: "145 EAST 29 STREET",
    data: 1008850037
  },
  {
    value: "145 EAST 30 STREET",
    data: 1008860037
  },
  {
    value: "145 EAST 30 STREET",
    data: 1008860037
  },
  {
    value: "145 EAST 32 STREET",
    data: 1008880027
  },
  {
    value: "145 EAST 35 STREET",
    data: 1008910030
  },
  {
    value: "145 EAST 35 STREET",
    data: 1008910030
  },
  {
    value: "145 EAST 36 STREET",
    data: 1008920029
  },
  {
    value: "145 EAST 37 STREET",
    data: 1008930031
  },
  {
    value: "145 EAST 42 STREET",
    data: 1012970027
  },
  {
    value: "145 EAST 48 STREET",
    data: 1013037501
  },
  {
    value: "145 EAST 48 STREET",
    data: 1013037501
  },
  {
    value: "145 EAST 49 STREET",
    data: 1013040026
  },
  {
    value: "145 EAST 50 STREET",
    data: 1013050028
  },
  {
    value: "145 EAST 57 STREET",
    data: 1013120024
  },
  {
    value: "145 EAST 60 STREET",
    data: 1013950021
  },
  {
    value: "145 EAST 60 STREET",
    data: 1013950021
  },
  {
    value: "145 EAST 61 STREET",
    data: 1013960023
  },
  {
    value: "145 EAST 62 STREET",
    data: 1013970024
  },
  {
    value: "145 EAST 63 STREET",
    data: 1013980124
  },
  {
    value: "145 EAST 69 STREET",
    data: 1014040024
  },
  {
    value: "145 EAST 72 STREET",
    data: 1014070022
  },
  {
    value: "145 EAST 76 STREET",
    data: 1014117501
  },
  {
    value: "145 EAST 76 STREET",
    data: 1014117501
  },
  {
    value: "145 EAST 82 STREET",
    data: 1015110020
  },
  {
    value: "145 EAST 82 STREET",
    data: 1015110020
  },
  {
    value: "145 EAST 84 STREET",
    data: 1015130020
  },
  {
    value: "145 EAST 84 STREET",
    data: 1015130020
  },
  {
    value: "145 EAST 92 STREET",
    data: 1015210020
  },
  {
    value: "145 EAST 92 STREET",
    data: 1015210020
  },
  {
    value: "145 EAST 97 STREET",
    data: 1016250025
  },
  {
    value: "145 EAST HOUSTON STREET",
    data: 1004220053
  },
  {
    value: "145 EDGECOMBE AVENUE",
    data: 1020510093
  },
  {
    value: "145 EDGECOMBE AVENUE",
    data: 1020510093
  },
  {
    value: "145 FT GEORGE AVENUE",
    data: 1021490276
  },
  {
    value: "145 GRAND STREET",
    data: 1002330014
  },
  {
    value: "145 HUDSON STREET",
    data: 1002147502
  },
  {
    value: "145 HUDSON STREET",
    data: 1002147502
  },
  {
    value: "145 LUDLOW STREET",
    data: 1004110025
  },
  {
    value: "145 LUDLOW STREET",
    data: 1004110025
  },
  {
    value: "145 MADISON AVENUE",
    data: 1008610059
  },
  {
    value: "145 MORNINGSIDE AVENUE",
    data: 1019520004
  },
  {
    value: "145 MORNINGSIDE AVENUE",
    data: 1019520004
  },
  {
    value: "145 MULBERRY STREET",
    data: 1002367502
  },
  {
    value: "145 MULBERRY STREET",
    data: 1002367502
  },
  {
    value: "145 ORCHARD STREET",
    data: 1004160068
  },
  {
    value: "145 ORCHARD STREET",
    data: 1004160068
  },
  {
    value: "145 READE STREET",
    data: 1001400024
  },
  {
    value: "145 SPRING STREET",
    data: 1005010033
  },
  {
    value: "145 ST NICHOLAS AVENUE",
    data: 1019230021
  },
  {
    value: "145 SULLIVAN STREET",
    data: 1005170007
  },
  {
    value: "145 SULLIVAN STREET",
    data: 1005170007
  },
  {
    value: "145 VERMILYEA AVENUE",
    data: 1022270001
  },
  {
    value: "145 VERMILYEA AVENUE",
    data: 1022270001
  },
  {
    value: "145 WADSWORTH AVENUE",
    data: 1021620052
  },
  {
    value: "145 WEST 10 STREET",
    data: 1006110072
  },
  {
    value: "145 WEST 10 STREET",
    data: 1006110072
  },
  {
    value: "145 WEST 100 STREET",
    data: 1018550005
  },
  {
    value: "145 WEST 105 STREET",
    data: 1018600013
  },
  {
    value: "145 WEST 105 STREET",
    data: 1018600013
  },
  {
    value: "145 WEST 111 STREET",
    data: 1018210008
  },
  {
    value: "145 WEST 117 STREET",
    data: 1019020111
  },
  {
    value: "145 WEST 118 STREET",
    data: 1019030010
  },
  {
    value: "145 WEST 119 STREET",
    data: 1019040011
  },
  {
    value: "145 WEST 120 STREET",
    data: 1019050010
  },
  {
    value: "145 WEST 122 STREET",
    data: 1019077503
  },
  {
    value: "145 WEST 123 STREET",
    data: 1019080012
  },
  {
    value: "145 WEST 123 STREET",
    data: 1019080012
  },
  {
    value: "145 WEST 126 STREET",
    data: 1019110014
  },
  {
    value: "145 WEST 126 STREET",
    data: 1019110014
  },
  {
    value: "145 WEST 128 STREET",
    data: 1019130007
  },
  {
    value: "145 WEST 129 STREET",
    data: 1019140014
  },
  {
    value: "145 WEST 131 STREET",
    data: 1019160113
  },
  {
    value: "145 WEST 132 STREET",
    data: 1019170014
  },
  {
    value: "145 WEST 135 STREET",
    data: 1019200010
  },
  {
    value: "145 WEST 135 STREET",
    data: 1019200010
  },
  {
    value: "145 WEST 136 STREET",
    data: 1019210114
  },
  {
    value: "145 WEST 136 STREET",
    data: 1019210114
  },
  {
    value: "145 WEST 138 STREET",
    data: 1020070001
  },
  {
    value: "145 WEST 138 STREET",
    data: 1020070001
  },
  {
    value: "145 WEST 14 STREET",
    data: 1007900010
  },
  {
    value: "145 WEST 142 STREET",
    data: 1020110013
  },
  {
    value: "145 WEST 143 STREET",
    data: 1020120014
  },
  {
    value: "145 WEST 143 STREET",
    data: 1020120014
  },
  {
    value: "145 WEST 145 STREET",
    data: 1020140014
  },
  {
    value: "145 WEST 145 STREET",
    data: 1020140014
  },
  {
    value: "145 WEST 21 STREET",
    data: 1007970016
  },
  {
    value: "145 WEST 24 STREET",
    data: 1008000015
  },
  {
    value: "145 WEST 27 STREET",
    data: 1008037503
  },
  {
    value: "145 WEST 27 STREET",
    data: 1008037503
  },
  {
    value: "145 WEST 28 STREET",
    data: 1008040011
  },
  {
    value: "145 WEST 30 STREET",
    data: 1008060009
  },
  {
    value: "145 WEST 4 STREET",
    data: 1005520034
  },
  {
    value: "145 WEST 4 STREET",
    data: 1005520034
  },
  {
    value: "145 WEST 45 STREET",
    data: 1009980012
  },
  {
    value: "145 WEST 47 STREET",
    data: 1010000011
  },
  {
    value: "145 WEST 57 STREET",
    data: 1010107503
  },
  {
    value: "145 WEST 58 STREET",
    data: 1010110013
  },
  {
    value: "145 WEST 58 STREET",
    data: 1010110013
  },
  {
    value: "145 WEST 67 STREET",
    data: 1011390001
  },
  {
    value: "145 WEST 67 STREET",
    data: 1011390001
  },
  {
    value: "145 WEST 71 STREET",
    data: 1011430015
  },
  {
    value: "145 WEST 71 STREET",
    data: 1011430015
  },
  {
    value: "145 WEST 72 STREET",
    data: 1011440014
  },
  {
    value: "145 WEST 74 STREET",
    data: 1011460011
  },
  {
    value: "145 WEST 75 STREET",
    data: 1011470111
  },
  {
    value: "145 WEST 78 STREET",
    data: 1011500013
  },
  {
    value: "145 WEST 79 STREET",
    data: 1012100015
  },
  {
    value: "145 WEST 79 STREET",
    data: 1012100015
  },
  {
    value: "145 WEST 80 STREET",
    data: 1012110116
  },
  {
    value: "145 WEST 81 STREET",
    data: 1012120016
  },
  {
    value: "145 WEST 85 STREET",
    data: 1012160111
  },
  {
    value: "145 WEST 86 STREET",
    data: 1012170014
  },
  {
    value: "145 WEST 86 STREET",
    data: 1012170014
  },
  {
    value: "145 WEST 87 STREET",
    data: 1012180018
  },
  {
    value: "145 WEST 88 STREET",
    data: 1012190017
  },
  {
    value: "145 WEST 94 STREET",
    data: 1012250114
  },
  {
    value: "145 WEST 95 STREET",
    data: 1012260014
  },
  {
    value: "145 WEST BROADWAY",
    data: 1001477501
  },
  {
    value: "1450 1 AVENUE",
    data: 1014700004
  },
  {
    value: "1450 1 AVENUE",
    data: 1014700004
  },
  {
    value: "1450 2 AVENUE",
    data: 1014500051
  },
  {
    value: "1450 2 AVENUE",
    data: 1014500051
  },
  {
    value: "1450 3 AVENUE",
    data: 1015110033
  },
  {
    value: "1450 3 AVENUE",
    data: 1015110033
  },
  {
    value: "1450 BROADWAY",
    data: 1009930047
  },
  {
    value: "1450 LEXINGTON AVENUE",
    data: 1015230014
  },
  {
    value: "1450 LEXINGTON AVENUE",
    data: 1015230014
  },
  {
    value: "1451 5 AVENUE",
    data: 1016230135
  },
  {
    value: "1451 BROADWAY",
    data: 1009940001
  },
  {
    value: "1451 LEXINGTON AVENUE",
    data: 1015230022
  },
  {
    value: "1452 2 AVENUE",
    data: 1014500050
  },
  {
    value: "1452 2 AVENUE",
    data: 1014500050
  },
  {
    value: "1453 3 AVENUE",
    data: 1015280001
  },
  {
    value: "1453 3 AVENUE",
    data: 1015280001
  },
  {
    value: "1453 5 AVENUE",
    data: 1016230134
  },
  {
    value: "1453 AMSTERDAM AVENUE",
    data: 1019700073
  },
  {
    value: "1453 LEXINGTON AVENUE",
    data: 1015230021
  },
  {
    value: "1453 YORK AVENUE",
    data: 1014720022
  },
  {
    value: "1453 YORK AVENUE",
    data: 1014720022
  },
  {
    value: "1454 2 AVENUE",
    data: 1014500049
  },
  {
    value: "1454 2 AVENUE",
    data: 1014500049
  },
  {
    value: "1455 5 AVENUE",
    data: 1016230133
  },
  {
    value: "1455 AMSTERDAM AVENUE",
    data: 1019700072
  },
  {
    value: "1455 LEXINGTON AVENUE",
    data: 1015230120
  },
  {
    value: "1456 2 AVENUE",
    data: 1014510001
  },
  {
    value: "1456 2 AVENUE",
    data: 1014510001
  },
  {
    value: "1457 AMSTERDAM AVENUE",
    data: 1019700071
  },
  {
    value: "1457 LEXINGTON AVENUE",
    data: 1015230020
  },
  {
    value: "1458 2 AVENUE",
    data: 1014510002
  },
  {
    value: "1458 YORK AVENUE",
    data: 1014890001
  },
  {
    value: "1459 3 AVENUE",
    data: 1015280004
  },
  {
    value: "1459 AMSTERDAM AVENUE",
    data: 1019700070
  },
  {
    value: "1459 LEXINGTON AVENUE",
    data: 1015230053
  },
  {
    value: "146 1 AVENUE",
    data: 1004360005
  },
  {
    value: "146 10 AVENUE",
    data: 1007170001
  },
  {
    value: "146 10 AVENUE",
    data: 1007170001
  },
  {
    value: "146 2 AVENUE",
    data: 1004510001
  },
  {
    value: "146 2 AVENUE",
    data: 1004510001
  },
  {
    value: "146 5 AVENUE",
    data: 1008210040
  },
  {
    value: "146 5 AVENUE",
    data: 1008210040
  },
  {
    value: "146 8 AVENUE",
    data: 1007670002
  },
  {
    value: "146 8 AVENUE",
    data: 1007670002
  },
  {
    value: "146 BEEKMAN STREET",
    data: 1000970015
  },
  {
    value: "146 BOWERY",
    data: 1004700050
  },
  {
    value: "146 CHAMBERS STREET",
    data: 1001377504
  },
  {
    value: "146 CLAREMONT AVENUE",
    data: 1019930053
  },
  {
    value: "146 CLAREMONT AVENUE",
    data: 1019930053
  },
  {
    value: "146 DUANE STREET",
    data: 1001460015
  },
  {
    value: "146 EAST 123 STREET",
    data: 1017710052
  },
  {
    value: "146 EAST 123 STREET",
    data: 1017710052
  },
  {
    value: "146 EAST 19 STREET",
    data: 1008740047
  },
  {
    value: "146 EAST 35 STREET",
    data: 1008900059
  },
  {
    value: "146 EAST 35 STREET",
    data: 1008900059
  },
  {
    value: "146 EAST 37 STREET",
    data: 1008920056
  },
  {
    value: "146 EAST 38 STREET",
    data: 1008930060
  },
  {
    value: "146 EAST 39 STREET",
    data: 1008940055
  },
  {
    value: "146 EAST 39 STREET",
    data: 1008940055
  },
  {
    value: "146 EAST 46 STREET",
    data: 1013000047
  },
  {
    value: "146 EAST 49 STREET",
    data: 1013030045
  },
  {
    value: "146 EAST 49 STREET",
    data: 1013030045
  },
  {
    value: "146 EAST 55 STREET",
    data: 1013090146
  },
  {
    value: "146 EAST 62 STREET",
    data: 1013960046
  },
  {
    value: "146 EAST 74 STREET",
    data: 1014080052
  },
  {
    value: "146 EAST 84 STREET",
    data: 1015120049
  },
  {
    value: "146 EAST 89 STREET",
    data: 1015170149
  },
  {
    value: "146 EAST 98 STREET",
    data: 1016250047
  },
  {
    value: "146 EAST 98 STREET",
    data: 1016250047
  },
  {
    value: "146 EAST BROADWAY",
    data: 1002830064
  },
  {
    value: "146 EAST END AVENUE",
    data: 1015830123
  },
  {
    value: "146 ESSEX STREET",
    data: 1003540108
  },
  {
    value: "146 FORSYTH STREET",
    data: 1004200043
  },
  {
    value: "146 FORSYTH STREET",
    data: 1004200043
  },
  {
    value: "146 GREENE STREET",
    data: 1005130009
  },
  {
    value: "146 HENRY STREET",
    data: 1002710061
  },
  {
    value: "146 MULBERRY STREET",
    data: 1002370011
  },
  {
    value: "146 MULBERRY STREET",
    data: 1002370011
  },
  {
    value: "146 ORCHARD STREET",
    data: 1004110001
  },
  {
    value: "146 ORCHARD STREET",
    data: 1004110001
  },
  {
    value: "146 READE STREET",
    data: 1001410008
  },
  {
    value: "146 SPRING STREET",
    data: 1004870028
  },
  {
    value: "146 STANTON STREET",
    data: 1003550073
  },
  {
    value: "146 SULLIVAN STREET",
    data: 1005180035
  },
  {
    value: "146 SULLIVAN STREET",
    data: 1005180035
  },
  {
    value: "146 WAVERLY PLACE",
    data: 1005920060
  },
  {
    value: "146 WEST 10 STREET",
    data: 1006100045
  },
  {
    value: "146 WEST 10 STREET",
    data: 1006100045
  },
  {
    value: "146 WEST 11 STREET",
    data: 1006060038
  },
  {
    value: "146 WEST 111 STREET",
    data: 1018200055
  },
  {
    value: "146 WEST 111 STREET",
    data: 1018200055
  },
  {
    value: "146 WEST 117 STREET",
    data: 1019010054
  },
  {
    value: "146 WEST 118 STREET",
    data: 1019020053
  },
  {
    value: "146 WEST 119 STREET",
    data: 1019030055
  },
  {
    value: "146 WEST 120 STREET",
    data: 1019040052
  },
  {
    value: "146 WEST 121 STREET",
    data: 1019050054
  },
  {
    value: "146 WEST 121 STREET",
    data: 1019050054
  },
  {
    value: "146 WEST 123 STREET",
    data: 1019070153
  },
  {
    value: "146 WEST 124 STREET",
    data: 1019080053
  },
  {
    value: "146 WEST 124 STREET",
    data: 1019080053
  },
  {
    value: "146 WEST 127 STREET",
    data: 1019110153
  },
  {
    value: "146 WEST 129 STREET",
    data: 1019130153
  },
  {
    value: "146 WEST 130 STREET",
    data: 1019140051
  },
  {
    value: "146 WEST 131 STREET",
    data: 1019150053
  },
  {
    value: "146 WEST 132 STREET",
    data: 1019160151
  },
  {
    value: "146 WEST 133 STREET",
    data: 1019170052
  },
  {
    value: "146 WEST 136 STREET",
    data: 1019200051
  },
  {
    value: "146 WEST 140 STREET",
    data: 1020080057
  },
  {
    value: "146 WEST 16 STREET",
    data: 1007910070
  },
  {
    value: "146 WEST 17 STREET",
    data: 1007920062
  },
  {
    value: "146 WEST 17 STREET",
    data: 1007920062
  },
  {
    value: "146 WEST 22 STREET",
    data: 1007977505
  },
  {
    value: "146 WEST 22 STREET",
    data: 1007977505
  },
  {
    value: "146 WEST 228 STREET",
    data: 1022150574
  },
  {
    value: "146 WEST 26 STREET",
    data: 1008017502
  },
  {
    value: "146 WEST 28 STREET",
    data: 1008030065
  },
  {
    value: "146 WEST 28 STREET",
    data: 1008030065
  },
  {
    value: "146 WEST 29 STREET",
    data: 1008040067
  },
  {
    value: "146 WEST 4 STREET",
    data: 1005430044
  },
  {
    value: "146 WEST 46 STREET",
    data: 1009980054
  },
  {
    value: "146 WEST 47 STREET",
    data: 1009990053
  },
  {
    value: "146 WEST 55 STREET",
    data: 1010070054
  },
  {
    value: "146 WEST 57 STREET",
    data: 1010097501
  },
  {
    value: "146 WEST 57 STREET",
    data: 1010097501
  },
  {
    value: "146 WEST 68 STREET",
    data: 1011390057
  },
  {
    value: "146 WEST 68 STREET",
    data: 1011390057
  },
  {
    value: "146 WEST 70 STREET",
    data: 1011410149
  },
  {
    value: "146 WEST 73 STREET",
    data: 1011440051
  },
  {
    value: "146 WEST 74 STREET",
    data: 1011450151
  },
  {
    value: "146 WEST 75 STREET",
    data: 1011460054
  },
  {
    value: "146 WEST 76 STREET",
    data: 1011470050
  },
  {
    value: "146 WEST 79 STREET",
    data: 1011500051
  },
  {
    value: "146 WEST 79 STREET",
    data: 1011500051
  },
  {
    value: "146 WEST 80 STREET",
    data: 1012100053
  },
  {
    value: "146 WEST 82 STREET",
    data: 1012120052
  },
  {
    value: "146 WEST 82 STREET",
    data: 1012120052
  },
  {
    value: "146 WEST 88 STREET",
    data: 1012180147
  },
  {
    value: "146 WEST 92 STREET",
    data: 1012220153
  },
  {
    value: "146 WEST 95 STREET",
    data: 1012250051
  },
  {
    value: "146 WOOSTER STREET",
    data: 1005140007
  },
  {
    value: "1460 1 AVENUE",
    data: 1014700047
  },
  {
    value: "1460 1 AVENUE",
    data: 1014700047
  },
  {
    value: "1460 2 AVENUE",
    data: 1014510003
  },
  {
    value: "1460 5 AVENUE",
    data: 1017170033
  },
  {
    value: "1460 5 AVENUE",
    data: 1017170033
  },
  {
    value: "1460 BROADWAY",
    data: 1009947504
  },
  {
    value: "1460 LEXINGTON AVENUE",
    data: 1015230056
  },
  {
    value: "1460 ST NICHOLAS AVENUE",
    data: 1021540066
  },
  {
    value: "1460 ST NICHOLAS AVENUE",
    data: 1021540066
  },
  {
    value: "1461 1 AVENUE",
    data: 1014510023
  },
  {
    value: "1461 1 AVENUE",
    data: 1014510023
  },
  {
    value: "1461 3 AVENUE",
    data: 1015280048
  },
  {
    value: "1461 5 AVENUE",
    data: 1017450001
  },
  {
    value: "1461 AMSTERDAM AVENUE",
    data: 1019700069
  },
  {
    value: "1461 AMSTERDAM AVENUE",
    data: 1019700069
  },
  {
    value: "1461 LEXINGTON AVENUE",
    data: 1015230052
  },
  {
    value: "1461 ST NICHOLAS AVENUE",
    data: 1021650069
  },
  {
    value: "1462 1 AVENUE",
    data: 1014710001
  },
  {
    value: "1462 2 AVENUE",
    data: 1014510004
  },
  {
    value: "1462 LEXINGTON AVENUE",
    data: 1015230057
  },
  {
    value: "1463 2 AVENUE",
    data: 1014310021
  },
  {
    value: "1463 2 AVENUE",
    data: 1014310021
  },
  {
    value: "1463 3 AVENUE",
    data: 1015280047
  },
  {
    value: "1463 AMSTERDAM AVENUE",
    data: 1019700068
  },
  {
    value: "1463 AMSTERDAM AVENUE",
    data: 1019700068
  },
  {
    value: "1464 1 AVENUE",
    data: 1014710002
  },
  {
    value: "1464 LEXINGTON AVENUE",
    data: 1015230157
  },
  {
    value: "1464 ST NICHOLAS AVENUE",
    data: 1021540068
  },
  {
    value: "1465 3 AVENUE",
    data: 1015280146
  },
  {
    value: "1465 5 AVENUE",
    data: 1017457502
  },
  {
    value: "1465 5 AVENUE",
    data: 1017457502
  },
  {
    value: "1465 AMSTERDAM AVENUE",
    data: 1019700067
  },
  {
    value: "1465 AMSTERDAM AVENUE",
    data: 1019700067
  },
  {
    value: "1465 YORK AVENUE",
    data: 1014720028
  },
  {
    value: "1466 1 AVENUE",
    data: 1014710102
  },
  {
    value: "1466 BROADWAY",
    data: 1009947502
  },
  {
    value: "1466 LEXINGTON AVENUE",
    data: 1015230059
  },
  {
    value: "1466 LEXINGTON AVENUE",
    data: 1015230059
  },
  {
    value: "1467 3 AVENUE",
    data: 1015280046
  },
  {
    value: "1467 AMSTERDAM AVENUE",
    data: 1019700065
  },
  {
    value: "1467 AMSTERDAM AVENUE",
    data: 1019700065
  },
  {
    value: "1468 ST NICHOLAS AVENUE",
    data: 1021540069
  },
  {
    value: "1468 ST NICHOLAS AVENUE",
    data: 1021540069
  },
  {
    value: "1469 3 AVENUE",
    data: 1015280045
  },
  {
    value: "1469 5 AVENUE",
    data: 1017450071
  },
  {
    value: "1469 5 AVENUE",
    data: 1017450071
  },
  {
    value: "1469 LEXINGTON AVENUE",
    data: 1015230050
  },
  {
    value: "1469 LEXINGTON AVENUE",
    data: 1015230050
  },
  {
    value: "1469 ST NICHOLAS AVENUE",
    data: 1021650065
  },
  {
    value: "1469 ST NICHOLAS AVENUE",
    data: 1021650065
  },
  {
    value: "1469 YORK AVENUE",
    data: 1014720029
  },
  {
    value: "1469 YORK AVENUE",
    data: 1014720029
  },
  {
    value: "147 1 AVENUE",
    data: 1004510039
  },
  {
    value: "147 3 AVENUE",
    data: 1008970001
  },
  {
    value: "147 3 AVENUE",
    data: 1008970001
  },
  {
    value: "147 8 AVENUE",
    data: 1007410032
  },
  {
    value: "147 ATTORNEY STREET",
    data: 1003500073
  },
  {
    value: "147 AVENUE A",
    data: 1004370030
  },
  {
    value: "147 AVENUE A",
    data: 1004370030
  },
  {
    value: "147 BLEECKER STREET",
    data: 1005370035
  },
  {
    value: "147 CHAMBERS STREET",
    data: 1001400005
  },
  {
    value: "147 CHAMBERS STREET",
    data: 1001400005
  },
  {
    value: "147 COLUMBUS AVENUE",
    data: 1011190001
  },
  {
    value: "147 DUANE STREET",
    data: 1001470010
  },
  {
    value: "147 EAST 103 STREET",
    data: 1016310115
  },
  {
    value: "147 EAST 116 STREET",
    data: 1016440021
  },
  {
    value: "147 EAST 117 STREET",
    data: 1016450022
  },
  {
    value: "147 EAST 118 STREET",
    data: 1017670021
  },
  {
    value: "147 EAST 118 STREET",
    data: 1017670021
  },
  {
    value: "147 EAST 18 STREET",
    data: 1008740032
  },
  {
    value: "147 EAST 19 STREET",
    data: 1008750038
  },
  {
    value: "147 EAST 26 STREET",
    data: 1008820036
  },
  {
    value: "147 EAST 30 STREET",
    data: 1008860038
  },
  {
    value: "147 EAST 30 STREET",
    data: 1008860038
  },
  {
    value: "147 EAST 36 STREET",
    data: 1008920030
  },
  {
    value: "147 EAST 37 STREET",
    data: 1008930032
  },
  {
    value: "147 EAST 44 STREET",
    data: 1012990027
  },
  {
    value: "147 EAST 47 STREET",
    data: 1013020030
  },
  {
    value: "147 EAST 61 STREET",
    data: 1013960024
  },
  {
    value: "147 EAST 63 STREET",
    data: 1013980025
  },
  {
    value: "147 EAST 69 STREET",
    data: 1014040025
  },
  {
    value: "147 EAST 72 STREET",
    data: 1014070023
  },
  {
    value: "147 EAST 81 STREET",
    data: 1015100023
  },
  {
    value: "147 EAST 82 STREET",
    data: 1015110021
  },
  {
    value: "147 EAST 82 STREET",
    data: 1015110021
  },
  {
    value: "147 EAST 86 STREET",
    data: 1015150020
  },
  {
    value: "147 EAST 90 STREET",
    data: 1015190021
  },
  {
    value: "147 EAST 90 STREET",
    data: 1015190021
  },
  {
    value: "147 EAST 95 STREET",
    data: 1015240017
  },
  {
    value: "147 EAST 95 STREET",
    data: 1015240017
  },
  {
    value: "147 EAST 97 STREET",
    data: 1016250026
  },
  {
    value: "147 EAST BROADWAY",
    data: 1002830031
  },
  {
    value: "147 EAST HOUSTON STREET",
    data: 1004227502
  },
  {
    value: "147 EAST HOUSTON STREET",
    data: 1004227502
  },
  {
    value: "147 ELIZABETH STREET",
    data: 1004790033
  },
  {
    value: "147 ELIZABETH STREET",
    data: 1004790033
  },
  {
    value: "147 ESSEX STREET",
    data: 1004110060
  },
  {
    value: "147 GRAND STREET",
    data: 1002330015
  },
  {
    value: "147 LEXINGTON AVENUE",
    data: 1008850024
  },
  {
    value: "147 MADISON AVENUE",
    data: 1008610057
  },
  {
    value: "147 ORCHARD STREET",
    data: 1004160067
  },
  {
    value: "147 ORCHARD STREET",
    data: 1004160067
  },
  {
    value: "147 RIDGE STREET",
    data: 1003450027
  },
  {
    value: "147 RIVINGTON STREET",
    data: 1003480013
  },
  {
    value: "147 SPRING STREET",
    data: 1005010034
  },
  {
    value: "147 ST NICHOLAS AVENUE",
    data: 1019230049
  },
  {
    value: "147 SULLIVAN STREET",
    data: 1005170008
  },
  {
    value: "147 SULLIVAN STREET",
    data: 1005170008
  },
  {
    value: "147 THOMPSON STREET",
    data: 1005170026
  },
  {
    value: "147 WAVERLY PLACE",
    data: 1005937502
  },
  {
    value: "147 WAVERLY PLACE",
    data: 1005937502
  },
  {
    value: "147 WEST 111 STREET",
    data: 1018210006
  },
  {
    value: "147 WEST 117 STREET",
    data: 1019020110
  },
  {
    value: "147 WEST 118 STREET",
    data: 1019030009
  },
  {
    value: "147 WEST 119 STREET",
    data: 1019040010
  },
  {
    value: "147 WEST 120 STREET",
    data: 1019050009
  },
  {
    value: "147 WEST 120 STREET",
    data: 1019050009
  },
  {
    value: "147 WEST 121 STREET",
    data: 1019060011
  },
  {
    value: "147 WEST 122 STREET",
    data: 1019070011
  },
  {
    value: "147 WEST 123 STREET",
    data: 1019080009
  },
  {
    value: "147 WEST 126 STREET",
    data: 1019110013
  },
  {
    value: "147 WEST 127 STREET",
    data: 1019120008
  },
  {
    value: "147 WEST 127 STREET",
    data: 1019120008
  },
  {
    value: "147 WEST 129 STREET",
    data: 1019140113
  },
  {
    value: "147 WEST 13 STREET",
    data: 1006097501
  },
  {
    value: "147 WEST 130 STREET",
    data: 1019150011
  },
  {
    value: "147 WEST 130 STREET",
    data: 1019150011
  },
  {
    value: "147 WEST 131 STREET",
    data: 1019160013
  },
  {
    value: "147 WEST 132 STREET",
    data: 1019170013
  },
  {
    value: "147 WEST 136 STREET",
    data: 1019210014
  },
  {
    value: "147 WEST 14 STREET",
    data: 1007900009
  },
  {
    value: "147 WEST 14 STREET",
    data: 1007900009
  },
  {
    value: "147 WEST 142 STREET",
    data: 1020117501
  },
  {
    value: "147 WEST 142 STREET",
    data: 1020117501
  },
  {
    value: "147 WEST 143 STREET",
    data: 1020120012
  },
  {
    value: "147 WEST 143 STREET",
    data: 1020120012
  },
  {
    value: "147 WEST 144 STREET",
    data: 1020130006
  },
  {
    value: "147 WEST 145 STREET",
    data: 1020140013
  },
  {
    value: "147 WEST 145 STREET",
    data: 1020140013
  },
  {
    value: "147 WEST 15 STREET",
    data: 1007910013
  },
  {
    value: "147 WEST 15 STREET",
    data: 1007910013
  },
  {
    value: "147 WEST 20 STREET",
    data: 1007960007
  },
  {
    value: "147 WEST 20 STREET",
    data: 1007960007
  },
  {
    value: "147 WEST 22 STREET",
    data: 1007980017
  },
  {
    value: "147 WEST 22 STREET",
    data: 1007980017
  },
  {
    value: "147 WEST 24 STREET",
    data: 1008000014
  },
  {
    value: "147 WEST 25 STREET",
    data: 1008010014
  },
  {
    value: "147 WEST 26 STREET",
    data: 1008020014
  },
  {
    value: "147 WEST 35 STREET",
    data: 1008110010
  },
  {
    value: "147 WEST 4 STREET",
    data: 1005520035
  },
  {
    value: "147 WEST 40 STREET",
    data: 1009930104
  },
  {
    value: "147 WEST 43 STREET",
    data: 1009960009
  },
  {
    value: "147 WEST 46 STREET",
    data: 1009990111
  },
  {
    value: "147 WEST 72 STREET",
    data: 1011440113
  },
  {
    value: "147 WEST 75 STREET",
    data: 1011470011
  },
  {
    value: "147 WEST 78 STREET",
    data: 1011500112
  },
  {
    value: "147 WEST 79 STREET",
    data: 1012100012
  },
  {
    value: "147 WEST 79 STREET",
    data: 1012100012
  },
  {
    value: "147 WEST 80 STREET",
    data: 1012110016
  },
  {
    value: "147 WEST 83 STREET",
    data: 1012140014
  },
  {
    value: "147 WEST 85 STREET",
    data: 1012160011
  },
  {
    value: "147 WEST 86 STREET",
    data: 1012170113
  },
  {
    value: "147 WEST 86 STREET",
    data: 1012170113
  },
  {
    value: "147 WEST 87 STREET",
    data: 1012180017
  },
  {
    value: "147 WEST 88 STREET",
    data: 1012190116
  },
  {
    value: "147 WEST 94 STREET",
    data: 1012250014
  },
  {
    value: "147 WEST 95 STREET",
    data: 1012260113
  },
  {
    value: "147 WOOSTER STREET",
    data: 1005150030
  },
  {
    value: "1470 1 AVENUE",
    data: 1014710003
  },
  {
    value: "1470 3 AVENUE",
    data: 1015120033
  },
  {
    value: "1470 3 AVENUE",
    data: 1015120033
  },
  {
    value: "1470 AMSTERDAM AVENUE",
    data: 1019840001
  },
  {
    value: "1470 AMSTERDAM AVENUE",
    data: 1019840001
  },
  {
    value: "1470 MADISON AVENUE",
    data: 1016070005
  },
  {
    value: "1471 1 AVENUE",
    data: 1014510028
  },
  {
    value: "1471 2 AVENUE",
    data: 1014310025
  },
  {
    value: "1471 2 AVENUE",
    data: 1014310025
  },
  {
    value: "1471 3 AVENUE",
    data: 1015290001
  },
  {
    value: "1471 3 AVENUE",
    data: 1015290001
  },
  {
    value: "1471 AMSTERDAM AVENUE",
    data: 1019700064
  },
  {
    value: "1471 ST NICHOLAS AVENUE",
    data: 1021650063
  },
  {
    value: "1471 ST NICHOLAS AVENUE",
    data: 1021650063
  },
  {
    value: "1472 BROADWAY",
    data: 1009950005
  },
  {
    value: "1472 YORK AVENUE",
    data: 1014900001
  },
  {
    value: "1472 YORK AVENUE",
    data: 1014900001
  },
  {
    value: "1473 1 AVENUE",
    data: 1014510029
  },
  {
    value: "1473 1 AVENUE",
    data: 1014510029
  },
  {
    value: "1473 2 AVENUE",
    data: 1014310026
  },
  {
    value: "1473 2 AVENUE",
    data: 1014310026
  },
  {
    value: "1473 AMSTERDAM AVENUE",
    data: 1019700063
  },
  {
    value: "1474 3 AVENUE",
    data: 1015127502
  },
  {
    value: "1474 3 AVENUE",
    data: 1015127502
  },
  {
    value: "1474 ST NICHOLAS AVENUE",
    data: 1021540072
  },
  {
    value: "1475 1 AVENUE",
    data: 1014510030
  },
  {
    value: "1475 AMSTERDAM AVENUE",
    data: 1019700062
  },
  {
    value: "1475 BROADWAY",
    data: 1009950001
  },
  {
    value: "1477 2 AVENUE",
    data: 1014310028
  },
  {
    value: "1477 2 AVENUE",
    data: 1014310028
  },
  {
    value: "1477 3 AVENUE",
    data: 1015290004
  },
  {
    value: "1477 AMSTERDAM AVENUE",
    data: 1019700061
  },
  {
    value: "1477 YORK AVENUE",
    data: 1014730022
  },
  {
    value: "1477 YORK AVENUE",
    data: 1014730022
  },
  {
    value: "1478 1 AVENUE",
    data: 1014710045
  },
  {
    value: "1479 1 AVENUE",
    data: 1014520023
  },
  {
    value: "1479 ST NICHOLAS AVENUE",
    data: 1021660023
  },
  {
    value: "1479 ST NICHOLAS AVENUE",
    data: 1021660023
  },
  {
    value: "1479 YORK AVENUE",
    data: 1014730023
  },
  {
    value: "148 10 AVENUE",
    data: 1007170002
  },
  {
    value: "148 10 AVENUE",
    data: 1007170002
  },
  {
    value: "148 5 AVENUE",
    data: 1008210041
  },
  {
    value: "148 9 AVENUE",
    data: 1007430001
  },
  {
    value: "148 ATTORNEY STREET",
    data: 1003450001
  },
  {
    value: "148 BAXTER STREET",
    data: 1002350018
  },
  {
    value: "148 BRADHURST AVENUE",
    data: 1020450102
  },
  {
    value: "148 BRADHURST AVENUE",
    data: 1020450102
  },
  {
    value: "148 CHAMBERS STREET",
    data: 1001377505
  },
  {
    value: "148 DUANE STREET",
    data: 1001467505
  },
  {
    value: "148 EAST 103 STREET",
    data: 1016300053
  },
  {
    value: "148 EAST 103 STREET",
    data: 1016300053
  },
  {
    value: "148 EAST 123 STREET",
    data: 1017710051
  },
  {
    value: "148 EAST 24 STREET",
    data: 1008797503
  },
  {
    value: "148 EAST 24 STREET",
    data: 1008797503
  },
  {
    value: "148 EAST 28 STREET",
    data: 1008830056
  },
  {
    value: "148 EAST 30 STREET",
    data: 1008850054
  },
  {
    value: "148 EAST 30 STREET",
    data: 1008850054
  },
  {
    value: "148 EAST 33 STREET",
    data: 1008880051
  },
  {
    value: "148 EAST 38 STREET",
    data: 1008930059
  },
  {
    value: "148 EAST 40 STREET",
    data: 1008950060
  },
  {
    value: "148 EAST 46 STREET",
    data: 1013000146
  },
  {
    value: "148 EAST 56 STREET",
    data: 1013100047
  },
  {
    value: "148 EAST 62 STREET",
    data: 1013960044
  },
  {
    value: "148 EAST 63 STREET",
    data: 1013970048
  },
  {
    value: "148 EAST 65 STREET",
    data: 1013990043
  },
  {
    value: "148 EAST 74 STREET",
    data: 1014080051
  },
  {
    value: "148 EAST 78 STREET",
    data: 1014120052
  },
  {
    value: "148 EAST 83 STREET",
    data: 1015110049
  },
  {
    value: "148 EAST 84 STREET",
    data: 1015120048
  },
  {
    value: "148 EAST 84 STREET",
    data: 1015120048
  },
  {
    value: "148 EAST 89 STREET",
    data: 1015170049
  },
  {
    value: "148 EAST 91 STREET",
    data: 1015190052
  },
  {
    value: "148 EAST 91 STREET",
    data: 1015190052
  },
  {
    value: "148 EAST 98 STREET",
    data: 1016250046
  },
  {
    value: "148 EAST 98 STREET",
    data: 1016250046
  },
  {
    value: "148 EAST BROADWAY",
    data: 1002830065
  },
  {
    value: "148 EAST END AVENUE",
    data: 1015830124
  },
  {
    value: "148 FORSYTH STREET",
    data: 1004200044
  },
  {
    value: "148 FRANKLIN STREET",
    data: 1001890007
  },
  {
    value: "148 GREENE STREET",
    data: 1005130010
  },
  {
    value: "148 HENRY STREET",
    data: 1002710060
  },
  {
    value: "148 MADISON AVENUE",
    data: 1008610064
  },
  {
    value: "148 MADISON STREET",
    data: 1002747502
  },
  {
    value: "148 NAGLE AVENUE",
    data: 1021740070
  },
  {
    value: "148 ORCHARD STREET",
    data: 1004110002
  },
  {
    value: "148 ORCHARD STREET",
    data: 1004110002
  },
  {
    value: "148 POST AVENUE",
    data: 1022230024
  },
  {
    value: "148 READE STREET",
    data: 1001410009
  },
  {
    value: "148 RIVINGTON STREET",
    data: 1003490037
  },
  {
    value: "148 SPRING STREET",
    data: 1004870027
  },
  {
    value: "148 STANTON STREET",
    data: 1003550072
  },
  {
    value: "148 SULLIVAN STREET",
    data: 1005180034
  },
  {
    value: "148 SULLIVAN STREET",
    data: 1005180034
  },
  {
    value: "148 WASHINGTON STREET",
    data: 1000560015
  },
  {
    value: "148 WEST 10 STREET",
    data: 1006100044
  },
  {
    value: "148 WEST 10 STREET",
    data: 1006100044
  },
  {
    value: "148 WEST 11 STREET",
    data: 1006060037
  },
  {
    value: "148 WEST 111 STREET",
    data: 1018200057
  },
  {
    value: "148 WEST 111 STREET",
    data: 1018200057
  },
  {
    value: "148 WEST 117 STREET",
    data: 1019010055
  },
  {
    value: "148 WEST 119 STREET",
    data: 1019030155
  },
  {
    value: "148 WEST 120 STREET",
    data: 1019040053
  },
  {
    value: "148 WEST 121 STREET",
    data: 1019057501
  },
  {
    value: "148 WEST 123 STREET",
    data: 1019070054
  },
  {
    value: "148 WEST 124 STREET",
    data: 1019080054
  },
  {
    value: "148 WEST 124 STREET",
    data: 1019080054
  },
  {
    value: "148 WEST 125 STREET",
    data: 1019090057
  },
  {
    value: "148 WEST 127 STREET",
    data: 1019110054
  },
  {
    value: "148 WEST 129 STREET",
    data: 1019130054
  },
  {
    value: "148 WEST 129 STREET",
    data: 1019130054
  },
  {
    value: "148 WEST 130 STREET",
    data: 1019140151
  },
  {
    value: "148 WEST 131 STREET",
    data: 1019150055
  },
  {
    value: "148 WEST 132 STREET",
    data: 1019160052
  },
  {
    value: "148 WEST 132 STREET",
    data: 1019160052
  },
  {
    value: "148 WEST 133 STREET",
    data: 1019170152
  },
  {
    value: "148 WEST 136 STREET",
    data: 1019200052
  },
  {
    value: "148 WEST 136 STREET",
    data: 1019200052
  },
  {
    value: "148 WEST 14 STREET",
    data: 1006090014
  },
  {
    value: "148 WEST 14 STREET",
    data: 1006090014
  },
  {
    value: "148 WEST 141 STREET",
    data: 1020090045
  },
  {
    value: "148 WEST 141 STREET",
    data: 1020090045
  },
  {
    value: "148 WEST 142 STREET",
    data: 1020100054
  },
  {
    value: "148 WEST 142 STREET",
    data: 1020100054
  },
  {
    value: "148 WEST 143 STREET",
    data: 1020110057
  },
  {
    value: "148 WEST 143 STREET",
    data: 1020110057
  },
  {
    value: "148 WEST 144 STREET",
    data: 1020120052
  },
  {
    value: "148 WEST 144 STREET",
    data: 1020120052
  },
  {
    value: "148 WEST 15 STREET",
    data: 1007900063
  },
  {
    value: "148 WEST 16 STREET",
    data: 1007910071
  },
  {
    value: "148 WEST 17 STREET",
    data: 1007920063
  },
  {
    value: "148 WEST 17 STREET",
    data: 1007920063
  },
  {
    value: "148 WEST 19 STREET",
    data: 1007940066
  },
  {
    value: "148 WEST 20 STREET",
    data: 1007950067
  },
  {
    value: "148 WEST 23 STREET",
    data: 1007980071
  },
  {
    value: "148 WEST 23 STREET",
    data: 1007980071
  },
  {
    value: "148 WEST 24 STREET",
    data: 1007990067
  },
  {
    value: "148 WEST 31 STREET",
    data: 1008060069
  },
  {
    value: "148 WEST 37 STREET",
    data: 1008120069
  },
  {
    value: "148 WEST 4 STREET",
    data: 1005430043
  },
  {
    value: "148 WEST 48 STREET",
    data: 1010000053
  },
  {
    value: "148 WEST 49 STREET",
    data: 1010010157
  },
  {
    value: "148 WEST 70 STREET",
    data: 1011410050
  },
  {
    value: "148 WEST 70 STREET",
    data: 1011410050
  },
  {
    value: "148 WEST 73 STREET",
    data: 1011440052
  },
  {
    value: "148 WEST 75 STREET",
    data: 1011460055
  },
  {
    value: "148 WEST 76 STREET",
    data: 1011470150
  },
  {
    value: "148 WEST 77 STREET",
    data: 1011480051
  },
  {
    value: "148 WEST 77 STREET",
    data: 1011480051
  },
  {
    value: "148 WEST 80 STREET",
    data: 1012100054
  },
  {
    value: "148 WEST 88 STREET",
    data: 1012180048
  },
  {
    value: "148 WEST 90 STREET",
    data: 1012207506
  },
  {
    value: "148 WEST 92 STREET",
    data: 1012220054
  },
  {
    value: "148 WEST STREET",
    data: 1006690001
  },
  {
    value: "1480 1 AVENUE",
    data: 1014720001
  },
  {
    value: "1480 1 AVENUE",
    data: 1014720001
  },
  {
    value: "1480 5 AVENUE",
    data: 1017180033
  },
  {
    value: "1480 AMSTERDAM AVENUE",
    data: 1019870029
  },
  {
    value: "1480 AMSTERDAM AVENUE",
    data: 1019870029
  },
  {
    value: "1480 PARK AVENUE",
    data: 1016140030
  },
  {
    value: "1480 ST NICHOLAS AVENUE",
    data: 1021570001
  },
  {
    value: "1480 ST NICHOLAS AVENUE",
    data: 1021570001
  },
  {
    value: "1481 2 AVENUE",
    data: 1014320021
  },
  {
    value: "1481 2 AVENUE",
    data: 1014320021
  },
  {
    value: "1481 5 AVENUE",
    data: 1017467501
  },
  {
    value: "1481 PARK AVENUE",
    data: 1016360001
  },
  {
    value: "1481 PARK AVENUE",
    data: 1016360001
  },
  {
    value: "1481 YORK AVENUE",
    data: 1014730024
  },
  {
    value: "1482 1 AVENUE",
    data: 1014720002
  },
  {
    value: "1482 3 AVENUE",
    data: 1015120040
  },
  {
    value: "1482 3 AVENUE",
    data: 1015120040
  },
  {
    value: "1483 1 AVENUE",
    data: 1014520024
  },
  {
    value: "1483 1 AVENUE",
    data: 1014520024
  },
  {
    value: "1484 1 AVENUE",
    data: 1014720003
  },
  {
    value: "1484 2 AVENUE",
    data: 1014520003
  },
  {
    value: "1484 5 AVENUE",
    data: 1017180034
  },
  {
    value: "1484 AMSTERDAM AVENUE",
    data: 1019870031
  },
  {
    value: "1484 AMSTERDAM AVENUE",
    data: 1019870031
  },
  {
    value: "1484 ST NICHOLAS AVENUE",
    data: 1021570003
  },
  {
    value: "1484 ST NICHOLAS AVENUE",
    data: 1021570003
  },
  {
    value: "1485 1 AVENUE",
    data: 1014520026
  },
  {
    value: "1485 1 AVENUE",
    data: 1014520026
  },
  {
    value: "1485 5 AVENUE",
    data: 1017469002
  },
  {
    value: "1485 5 AVENUE",
    data: 1017467501
  },
  {
    value: "1486 2 AVENUE",
    data: 1014520004
  },
  {
    value: "1486 5 AVENUE",
    data: 1017180035
  },
  {
    value: "1486 5 AVENUE",
    data: 1017180035
  },
  {
    value: "1487 1 AVENUE",
    data: 1014520027
  },
  {
    value: "1488 1 AVENUE",
    data: 1014720050
  },
  {
    value: "1488 2 AVENUE",
    data: 1014520104
  },
  {
    value: "1488 5 AVENUE",
    data: 1017180036
  },
  {
    value: "1488 AMSTERDAM AVENUE",
    data: 1019870033
  },
  {
    value: "1488 AMSTERDAM AVENUE",
    data: 1019870033
  },
  {
    value: "1488 LEXINGTON AVENUE",
    data: 1016240014
  },
  {
    value: "1488 ST NICHOLAS AVENUE",
    data: 1021570008
  },
  {
    value: "1489 1 AVENUE",
    data: 1014520028
  },
  {
    value: "149 1 AVENUE",
    data: 1004510038
  },
  {
    value: "149 1 AVENUE",
    data: 1004510038
  },
  {
    value: "149 2 AVENUE",
    data: 1004650053
  },
  {
    value: "149 5 AVENUE",
    data: 1008500001
  },
  {
    value: "149 8 AVENUE",
    data: 1007410033
  },
  {
    value: "149 AVENUE A",
    data: 1004370029
  },
  {
    value: "149 AVENUE A",
    data: 1004370029
  },
  {
    value: "149 AVENUE B",
    data: 1003920004
  },
  {
    value: "149 AVENUE C",
    data: 1003920036
  },
  {
    value: "149 BLEECKER STREET",
    data: 1005370036
  },
  {
    value: "149 BOWERY",
    data: 1004230011
  },
  {
    value: "149 CANAL STREET",
    data: 1003030005
  },
  {
    value: "149 CHRISTOPHER STREET",
    data: 1006300026
  },
  {
    value: "149 COLUMBUS AVENUE",
    data: 1011190061
  },
  {
    value: "149 DUANE STREET",
    data: 1001470011
  },
  {
    value: "149 EAST 10 STREET",
    data: 1003800050
  },
  {
    value: "149 EAST 116 STREET",
    data: 1016440022
  },
  {
    value: "149 EAST 117 STREET",
    data: 1016450122
  },
  {
    value: "149 EAST 118 STREET",
    data: 1017670022
  },
  {
    value: "149 EAST 118 STREET",
    data: 1017670022
  },
  {
    value: "149 EAST 121 STREET",
    data: 1017700023
  },
  {
    value: "149 EAST 123 STREET",
    data: 1017720020
  },
  {
    value: "149 EAST 123 STREET",
    data: 1017720020
  },
  {
    value: "149 EAST 124 STREET",
    data: 1017730020
  },
  {
    value: "149 EAST 23 STREET",
    data: 1008790030
  },
  {
    value: "149 EAST 29 STREET",
    data: 1008850039
  },
  {
    value: "149 EAST 33 STREET",
    data: 1008890027
  },
  {
    value: "149 EAST 36 STREET",
    data: 1008920031
  },
  {
    value: "149 EAST 37 STREET",
    data: 1008930033
  },
  {
    value: "149 EAST 38 STREET",
    data: 1008940037
  },
  {
    value: "149 EAST 39 STREET",
    data: 1008950038
  },
  {
    value: "149 EAST 57 STREET",
    data: 1013120026
  },
  {
    value: "149 EAST 60 STREET",
    data: 1013950023
  },
  {
    value: "149 EAST 61 STREET",
    data: 1013960124
  },
  {
    value: "149 EAST 62 STREET",
    data: 1013977502
  },
  {
    value: "149 EAST 62 STREET",
    data: 1013977502
  },
  {
    value: "149 EAST 63 STREET",
    data: 1013980125
  },
  {
    value: "149 EAST 67 STREET",
    data: 1014020024
  },
  {
    value: "149 EAST 69 STREET",
    data: 1014040026
  },
  {
    value: "149 EAST 72 STREET",
    data: 1014070123
  },
  {
    value: "149 EAST 81 STREET",
    data: 1015100024
  },
  {
    value: "149 EAST 97 STREET",
    data: 1016250027
  },
  {
    value: "149 EAST BROADWAY",
    data: 1002830030
  },
  {
    value: "149 EDGECOMBE AVENUE",
    data: 1020510091
  },
  {
    value: "149 EDGECOMBE AVENUE",
    data: 1020510091
  },
  {
    value: "149 ELIZABETH STREET",
    data: 1004790031
  },
  {
    value: "149 ELIZABETH STREET",
    data: 1004790031
  },
  {
    value: "149 ESSEX STREET",
    data: 1004110058
  },
  {
    value: "149 ESSEX STREET",
    data: 1004110058
  },
  {
    value: "149 FRANKLIN STREET",
    data: 1001790061
  },
  {
    value: "149 LUDLOW STREET",
    data: 1004110024
  },
  {
    value: "149 MERCER STREET",
    data: 1005130033
  },
  {
    value: "149 MULBERRY STREET",
    data: 1002360021
  },
  {
    value: "149 ORCHARD STREET",
    data: 1004160066
  },
  {
    value: "149 ORCHARD STREET",
    data: 1004160066
  },
  {
    value: "149 RIDGE STREET",
    data: 1003450026
  },
  {
    value: "149 RIVINGTON STREET",
    data: 1003480014
  },
  {
    value: "149 SPRING STREET",
    data: 1005010035
  },
  {
    value: "149 SULLIVAN STREET",
    data: 1005170009
  },
  {
    value: "149 SULLIVAN STREET",
    data: 1005170009
  },
  {
    value: "149 THOMPSON STREET",
    data: 1005170024
  },
  {
    value: "149 VERMILYEA AVENUE",
    data: 1022270005
  },
  {
    value: "149 VERMILYEA AVENUE",
    data: 1022270005
  },
  {
    value: "149 WEST 10 STREET",
    data: 1006110074
  },
  {
    value: "149 WEST 105 STREET",
    data: 1018600011
  },
  {
    value: "149 WEST 105 STREET",
    data: 1018600011
  },
  {
    value: "149 WEST 106 STREET",
    data: 1018610010
  },
  {
    value: "149 WEST 106 STREET",
    data: 1018610010
  },
  {
    value: "149 WEST 108 STREET",
    data: 1018630010
  },
  {
    value: "149 WEST 117 STREET",
    data: 1019020109
  },
  {
    value: "149 WEST 118 STREET",
    data: 1019030008
  },
  {
    value: "149 WEST 119 STREET",
    data: 1019040109
  },
  {
    value: "149 WEST 120 STREET",
    data: 1019050108
  },
  {
    value: "149 WEST 121 STREET",
    data: 1019060010
  },
  {
    value: "149 WEST 122 STREET",
    data: 1019070110
  },
  {
    value: "149 WEST 126 STREET",
    data: 1019110112
  },
  {
    value: "149 WEST 128 STREET",
    data: 1019130006
  },
  {
    value: "149 WEST 129 STREET",
    data: 1019140013
  },
  {
    value: "149 WEST 13 STREET",
    data: 1006090070
  },
  {
    value: "149 WEST 131 STREET",
    data: 1019160012
  },
  {
    value: "149 WEST 132 STREET",
    data: 1019170012
  },
  {
    value: "149 WEST 136 STREET",
    data: 1019210013
  },
  {
    value: "149 WEST 14 STREET",
    data: 1007900008
  },
  {
    value: "149 WEST 142 STREET",
    data: 1020110011
  },
  {
    value: "149 WEST 24 STREET",
    data: 1008000010
  },
  {
    value: "149 WEST 24 STREET",
    data: 1008000010
  },
  {
    value: "149 WEST 27 STREET",
    data: 1008030011
  },
  {
    value: "149 WEST 28 STREET",
    data: 1008047501
  },
  {
    value: "149 WEST 36 STREET",
    data: 1008120013
  },
  {
    value: "149 WEST 4 STREET",
    data: 1005520036
  },
  {
    value: "149 WEST 4 STREET",
    data: 1005520036
  },
  {
    value: "149 WEST 45 STREET",
    data: 1009980008
  },
  {
    value: "149 WEST 46 STREET",
    data: 1009990011
  },
  {
    value: "149 WEST 72 STREET",
    data: 1011440013
  },
  {
    value: "149 WEST 75 STREET",
    data: 1011470010
  },
  {
    value: "149 WEST 76 STREET",
    data: 1011480014
  },
  {
    value: "149 WEST 77 STREET",
    data: 1011490007
  },
  {
    value: "149 WEST 80 STREET",
    data: 1012110015
  },
  {
    value: "149 WEST 85 STREET",
    data: 1012160010
  },
  {
    value: "149 WEST 87 STREET",
    data: 1012180116
  },
  {
    value: "149 WEST 88 STREET",
    data: 1012190016
  },
  {
    value: "149 WEST 91 STREET",
    data: 1012220011
  },
  {
    value: "149 WEST 93 STREET",
    data: 1012240013
  },
  {
    value: "149 WEST 93 STREET",
    data: 1012240013
  },
  {
    value: "149 WEST 94 STREET",
    data: 1012257501
  },
  {
    value: "149 WEST 95 STREET",
    data: 1012260013
  },
  {
    value: "149 WOOSTER STREET",
    data: 1005157502
  },
  {
    value: "149 WOOSTER STREET",
    data: 1005157502
  },
  {
    value: "1490 1 AVENUE",
    data: 1014720049
  },
  {
    value: "1490 2 AVENUE",
    data: 1014520052
  },
  {
    value: "1490 LEXINGTON AVENUE",
    data: 1016240015
  },
  {
    value: "1490 LEXINGTON AVENUE",
    data: 1016240015
  },
  {
    value: "1490 MADISON AVENUE",
    data: 1016080017
  },
  {
    value: "1491 1 AVENUE",
    data: 1014520029
  },
  {
    value: "1491 2 AVENUE",
    data: 1014320025
  },
  {
    value: "1491 2 AVENUE",
    data: 1014320025
  },
  {
    value: "1491 3 AVENUE",
    data: 1015300001
  },
  {
    value: "1492 1 AVENUE",
    data: 1014720048
  },
  {
    value: "1492 2 AVENUE",
    data: 1014520051
  },
  {
    value: "1492 2 AVENUE",
    data: 1014520051
  },
  {
    value: "1492 AMSTERDAM AVENUE",
    data: 1019870034
  },
  {
    value: "1492 AMSTERDAM AVENUE",
    data: 1019870034
  },
  {
    value: "1493 1 AVENUE",
    data: 1014520030
  },
  {
    value: "1493 BROADWAY",
    data: 1010150029
  },
  {
    value: "1493 YORK AVENUE",
    data: 1015590019
  },
  {
    value: "1493 YORK AVENUE",
    data: 1015590019
  },
  {
    value: "1494 1 AVENUE",
    data: 1014720047
  },
  {
    value: "1494 2 AVENUE",
    data: 1014520050
  },
  {
    value: "1494 2 AVENUE",
    data: 1014520050
  },
  {
    value: "1495 1 AVENUE",
    data: 1014530023
  },
  {
    value: "1495 3 AVENUE",
    data: 1015300003
  },
  {
    value: "1495 ST NICHOLAS AVENUE",
    data: 1021660016
  },
  {
    value: "1496 1 AVENUE",
    data: 1014737503
  },
  {
    value: "1496 2 AVENUE",
    data: 1014520049
  },
  {
    value: "1496 AMSTERDAM AVENUE",
    data: 1019870036
  },
  {
    value: "1496 AMSTERDAM AVENUE",
    data: 1019870036
  },
  {
    value: "1497 3 AVENUE",
    data: 1015300004
  },
  {
    value: "1497 3 AVENUE",
    data: 1015300004
  },
  {
    value: "1497 ST NICHOLAS AVENUE",
    data: 1021660052
  },
  {
    value: "1497 ST NICHOLAS AVENUE",
    data: 1021660052
  },
  {
    value: "1498 2 AVENUE",
    data: 1014530001
  },
  {
    value: "1498 2 AVENUE",
    data: 1014530001
  },
  {
    value: "1498 3 AVENUE",
    data: 1015130037
  },
  {
    value: "1498 3 AVENUE",
    data: 1015130037
  },
  {
    value: "1498 YORK AVENUE",
    data: 1015760001
  },
  {
    value: "1498 YORK AVENUE",
    data: 1015760001
  },
  {
    value: "1499 1 AVENUE",
    data: 1014530024
  },
  {
    value: "1499 3 AVENUE",
    data: 1015300048
  },
  {
    value: "15 1 AVENUE",
    data: 1004430038
  },
  {
    value: "15 7 AVENUE SOUTH",
    data: 1005820026
  },
  {
    value: "15 7 AVENUE SOUTH",
    data: 1005820026
  },
  {
    value: "15 8 AVENUE",
    data: 1006250042
  },
  {
    value: "15 ANN STREET",
    data: 1000900024
  },
  {
    value: "15 ARDEN STREET",
    data: 1021740186
  },
  {
    value: "15 ARDEN STREET",
    data: 1021740186
  },
  {
    value: "15 AVENUE A",
    data: 1004290037
  },
  {
    value: "15 AVENUE C",
    data: 1003850042
  },
  {
    value: "15 AVENUE D",
    data: 1003720038
  },
  {
    value: "15 BANK STREET",
    data: 1006150043
  },
  {
    value: "15 BARROW STREET",
    data: 1005900064
  },
  {
    value: "15 BIALYSTOKER PLACE",
    data: 1003360005
  },
  {
    value: "15 BIALYSTOKER PLACE",
    data: 1003360005
  },
  {
    value: "15 BLEECKER STREET",
    data: 1005290049
  },
  {
    value: "15 BROAD STREET",
    data: 1000267501
  },
  {
    value: "15 BROAD STREET",
    data: 1000267501
  },
  {
    value: "15 BROADWAY TERRACE",
    data: 1021700511
  },
  {
    value: "15 BROADWAY TERRACE",
    data: 1021700511
  },
  {
    value: "15 CANAL STREET",
    data: 1002120070
  },
  {
    value: "15 CARMINE STREET",
    data: 1005890048
  },
  {
    value: "15 CATHERINE STREET",
    data: 1002800051
  },
  {
    value: "15 CENTRAL PARK NORTH",
    data: 1015940026
  },
  {
    value: "15 CENTRAL PARK NORTH",
    data: 1015940026
  },
  {
    value: "15 CENTRAL PARK WEST",
    data: 1011147503
  },
  {
    value: "15 CENTRAL PARK WEST",
    data: 1011147503
  },
  {
    value: "15 CHARLES STREET",
    data: 1006127504
  },
  {
    value: "15 CHARLES STREET",
    data: 1006127504
  },
  {
    value: "15 CHARLTON STREET",
    data: 1005190053
  },
  {
    value: "15 CLAREMONT AVENUE",
    data: 1019900005
  },
  {
    value: "15 CLAREMONT AVENUE",
    data: 1019900005
  },
  {
    value: "15 CLIFF STREET",
    data: 1000767501
  },
  {
    value: "15 CLIFF STREET",
    data: 1000767501
  },
  {
    value: "15 COMMERCE STREET",
    data: 1005870065
  },
  {
    value: "15 COOPER STREET",
    data: 1022380007
  },
  {
    value: "15 COOPER STREET",
    data: 1022380007
  },
  {
    value: "15 CORNELIA STREET",
    data: 1005900038
  },
  {
    value: "15 CORNELIA STREET",
    data: 1005900038
  },
  {
    value: "15 DIVISION STREET",
    data: 1002810057
  },
  {
    value: "15 DOWNING STREET",
    data: 1005270085
  },
  {
    value: "15 DOYERS STREET",
    data: 1001620026
  },
  {
    value: "15 EAST 10 STREET",
    data: 1005680026
  },
  {
    value: "15 EAST 10 STREET",
    data: 1005680026
  },
  {
    value: "15 EAST 109 STREET",
    data: 1016150010
  },
  {
    value: "15 EAST 109 STREET",
    data: 1016150010
  },
  {
    value: "15 EAST 11 STREET",
    data: 1005697504
  },
  {
    value: "15 EAST 117 STREET",
    data: 1016230110
  },
  {
    value: "15 EAST 12 STREET",
    data: 1005700038
  },
  {
    value: "15 EAST 126 STREET",
    data: 1017510008
  },
  {
    value: "15 EAST 127 STREET",
    data: 1017520008
  },
  {
    value: "15 EAST 128 STREET",
    data: 1017530009
  },
  {
    value: "15 EAST 128 STREET",
    data: 1017530009
  },
  {
    value: "15 EAST 129 STREET",
    data: 1017540009
  },
  {
    value: "15 EAST 13 STREET",
    data: 1005710031
  },
  {
    value: "15 EAST 131 STREET",
    data: 1017560011
  },
  {
    value: "15 EAST 15 STREET",
    data: 1008437502
  },
  {
    value: "15 EAST 15 STREET",
    data: 1008437502
  },
  {
    value: "15 EAST 16 STREET",
    data: 1008440011
  },
  {
    value: "15 EAST 16 STREET",
    data: 1008440011
  },
  {
    value: "15 EAST 17 STREET",
    data: 1008460013
  },
  {
    value: "15 EAST 20 STREET",
    data: 1008750070
  },
  {
    value: "15 EAST 26 STREET",
    data: 1008560011
  },
  {
    value: "15 EAST 26 STREET",
    data: 1008567503
  },
  {
    value: "15 EAST 26 STREET",
    data: 1008567503
  },
  {
    value: "15 EAST 30 STREET",
    data: 1008600012
  },
  {
    value: "15 EAST 31 STREET",
    data: 1008610012
  },
  {
    value: "15 EAST 31 STREET",
    data: 1008619012
  },
  {
    value: "15 EAST 32 STREET",
    data: 1008620013
  },
  {
    value: "15 EAST 33 STREET",
    data: 1008630013
  },
  {
    value: "15 EAST 36 STREET",
    data: 1008660013
  },
  {
    value: "15 EAST 36 STREET",
    data: 1008660013
  },
  {
    value: "15 EAST 40 STREET",
    data: 1012750012
  },
  {
    value: "15 EAST 47 STREET",
    data: 1012830012
  },
  {
    value: "15 EAST 57 STREET",
    data: 1012930012
  },
  {
    value: "15 EAST 61 STREET",
    data: 1013760012
  },
  {
    value: "15 EAST 62 STREET",
    data: 1013770012
  },
  {
    value: "15 EAST 63 STREET",
    data: 1013780012
  },
  {
    value: "15 EAST 64 STREET",
    data: 1013790012
  },
  {
    value: "15 EAST 65 STREET",
    data: 1013800012
  },
  {
    value: "15 EAST 66 STREET",
    data: 1013810011
  },
  {
    value: "15 EAST 67 STREET",
    data: 1013820012
  },
  {
    value: "15 EAST 69 STREET",
    data: 1013847502
  },
  {
    value: "15 EAST 69 STREET",
    data: 1013847502
  },
  {
    value: "15 EAST 7 STREET",
    data: 1004630050
  },
  {
    value: "15 EAST 71 STREET",
    data: 1013860014
  },
  {
    value: "15 EAST 72 STREET",
    data: 1013870011
  },
  {
    value: "15 EAST 74 STREET",
    data: 1013890110
  },
  {
    value: "15 EAST 75 STREET",
    data: 1013900012
  },
  {
    value: "15 EAST 76 STREET",
    data: 1013910111
  },
  {
    value: "15 EAST 77 STREET",
    data: 1013920011
  },
  {
    value: "15 EAST 78 STREET",
    data: 1013930013
  },
  {
    value: "15 EAST 79 STREET",
    data: 1014910008
  },
  {
    value: "15 EAST 80 STREET",
    data: 1014920110
  },
  {
    value: "15 EAST 81 STREET",
    data: 1014930010
  },
  {
    value: "15 EAST 82 STREET",
    data: 1014947501
  },
  {
    value: "15 EAST 84 STREET",
    data: 1014960011
  },
  {
    value: "15 EAST 88 STREET",
    data: 1015000011
  },
  {
    value: "15 EAST 9 STREET",
    data: 1005670027
  },
  {
    value: "15 EAST 90 STREET",
    data: 1015020011
  },
  {
    value: "15 EAST 92 STREET",
    data: 1015040010
  },
  {
    value: "15 EAST 93 STREET",
    data: 1015050010
  },
  {
    value: "15 EAST 94 STREET",
    data: 1015060011
  },
  {
    value: "15 EAST 96 STREET",
    data: 1016020012
  },
  {
    value: "15 EAST 97 STREET",
    data: 1016030011
  },
  {
    value: "15 ELDRIDGE STREET",
    data: 1002920024
  },
  {
    value: "15 ELDRIDGE STREET",
    data: 1002920024
  },
  {
    value: "15 FT CHARLES PLACE",
    data: 1022150463
  },
  {
    value: "15 FT WASHINGTON AVENUE",
    data: 1021360050
  },
  {
    value: "15 FT WASHINGTON AVENUE",
    data: 1021360050
  },
  {
    value: "15 GAY STREET",
    data: 1005930007
  },
  {
    value: "15 GOLD STREET",
    data: 1000680028
  },
  {
    value: "15 GREENE STREET",
    data: 1002290036
  },
  {
    value: "15 GREENWICH AVENUE",
    data: 1006100056
  },
  {
    value: "15 HARRISON STREET",
    data: 1001800126
  },
  {
    value: "15 JAY STREET",
    data: 1001800015
  },
  {
    value: "15 JOHN STREET",
    data: 1000790014
  },
  {
    value: "15 KING STREET",
    data: 1005200039
  },
  {
    value: "15 LEONARD STREET",
    data: 1001797507
  },
  {
    value: "15 LEROY STREET",
    data: 1005860076
  },
  {
    value: "15 LEROY STREET",
    data: 1005860076
  },
  {
    value: "15 MAC DOUGAL ALLEY",
    data: 1005510123
  },
  {
    value: "15 MAIDEN LANE",
    data: 1000650007
  },
  {
    value: "15 MARBLE HILL AVENUE",
    data: 1022150524
  },
  {
    value: "15 MARKET STREET",
    data: 1002800022
  },
  {
    value: "15 MERCER STREET",
    data: 1002307504
  },
  {
    value: "15 MONROE STREET",
    data: 1002760007
  },
  {
    value: "15 MONROE STREET",
    data: 1002760007
  },
  {
    value: "15 MOTT STREET",
    data: 1001640048
  },
  {
    value: "15 MOTT STREET",
    data: 1001640048
  },
  {
    value: "15 MT MORRIS PARK WEST",
    data: 1017200058
  },
  {
    value: "15 OLIVER STREET",
    data: 1002790011
  },
  {
    value: "15 ORCHARD STREET",
    data: 1002990032
  },
  {
    value: "15 PARK AVENUE",
    data: 1008900005
  },
  {
    value: "15 PARK AVENUE",
    data: 1008900005
  },
  {
    value: "15 PARK ROW",
    data: 1000907501
  },
  {
    value: "15 PARK ROW",
    data: 1000907501
  },
  {
    value: "15 RENWICK STREET",
    data: 1005947510
  },
  {
    value: "15 RIVINGTON STREET",
    data: 1004257503
  },
  {
    value: "15 SICKLES STREET",
    data: 1021740145
  },
  {
    value: "15 SICKLES STREET",
    data: 1021740145
  },
  {
    value: "15 SOUTH WILLIAM STREET",
    data: 1000290046
  },
  {
    value: "15 ST LUKES PLACE",
    data: 1005830046
  },
  {
    value: "15 ST MARKS PLACE",
    data: 1004647502
  },
  {
    value: "15 ST MARK'S PLACE",
    data: 1004647502
  },
  {
    value: "15 STANTON STREET",
    data: 1004260023
  },
  {
    value: "15 STANTON STREET",
    data: 1004260023
  },
  {
    value: "15 STONE STREET",
    data: 1000117501
  },
  {
    value: "15 SUTTON PLACE",
    data: 1013720033
  },
  {
    value: "15 SYLVAN TERRACE",
    data: 1021090073
  },
  {
    value: "15 UNION SQUARE WEST",
    data: 1008427502
  },
  {
    value: "15 UNION SQUARE WEST",
    data: 1008427502
  },
  {
    value: "15 VAN CORLEAR PLACE",
    data: 1022150429
  },
  {
    value: "15 VANDAM STREET",
    data: 1005060047
  },
  {
    value: "15 VERMILYEA AVENUE",
    data: 1022240007
  },
  {
    value: "15 VERMILYEA AVENUE",
    data: 1022240007
  },
  {
    value: "15 WADSWORTH AVENUE",
    data: 1021430008
  },
  {
    value: "15 WADSWORTH AVENUE",
    data: 1021430008
  },
  {
    value: "15 WARREN STREET",
    data: 1001340021
  },
  {
    value: "15 WASHINGTON PLACE",
    data: 1005470020
  },
  {
    value: "15 WASHINGTON TERRACE",
    data: 1021560148
  },
  {
    value: "15 WAVERLY PLACE",
    data: 1005480045
  },
  {
    value: "15 WAVERLY PLACE",
    data: 1005480045
  },
  {
    value: "15 WEST 10 STREET",
    data: 1005740052
  },
  {
    value: "15 WEST 100 STREET",
    data: 1018360025
  },
  {
    value: "15 WEST 100 STREET",
    data: 1018360025
  },
  {
    value: "15 WEST 103 STREET",
    data: 1018390022
  },
  {
    value: "15 WEST 106 STREET",
    data: 1018420024
  },
  {
    value: "15 WEST 106 STREET",
    data: 1018420024
  },
  {
    value: "15 WEST 107 STREET",
    data: 1018430022
  },
  {
    value: "15 WEST 107 STREET",
    data: 1018430022
  },
  {
    value: "15 WEST 108 STREET",
    data: 1018440022
  },
  {
    value: "15 WEST 108 STREET",
    data: 1018440022
  },
  {
    value: "15 WEST 117 STREET",
    data: 1016010018
  },
  {
    value: "15 WEST 119 STREET",
    data: 1017180130
  },
  {
    value: "15 WEST 119 STREET",
    data: 1017180130
  },
  {
    value: "15 WEST 120 STREET",
    data: 1017200009
  },
  {
    value: "15 WEST 121 STREET",
    data: 1017200043
  },
  {
    value: "15 WEST 122 STREET",
    data: 1017210008
  },
  {
    value: "15 WEST 123 STREET",
    data: 1017210045
  },
  {
    value: "15 WEST 123 STREET",
    data: 1017210045
  },
  {
    value: "15 WEST 124 STREET",
    data: 1017220027
  },
  {
    value: "15 WEST 127 STREET",
    data: 1017250029
  },
  {
    value: "15 WEST 129 STREET",
    data: 1017270027
  },
  {
    value: "15 WEST 131 STREET",
    data: 1017290128
  },
  {
    value: "15 WEST 137 STREET",
    data: 1017350025
  },
  {
    value: "15 WEST 137 STREET",
    data: 1017350025
  },
  {
    value: "15 WEST 17 STREET",
    data: 1008197504
  },
  {
    value: "15 WEST 17 STREET",
    data: 1008197504
  },
  {
    value: "15 WEST 18 STREET",
    data: 1008200029
  },
  {
    value: "15 WEST 20 STREET",
    data: 1008227504
  },
  {
    value: "15 WEST 20 STREET",
    data: 1008227504
  },
  {
    value: "15 WEST 21 STREET",
    data: 1008230029
  },
  {
    value: "15 WEST 26 STREET",
    data: 1008280022
  },
  {
    value: "15 WEST 34 STREET",
    data: 1008367501
  },
  {
    value: "15 WEST 36 STREET",
    data: 1008380032
  },
  {
    value: "15 WEST 38 STREET",
    data: 1008400031
  },
  {
    value: "15 WEST 39 STREET",
    data: 1008410027
  },
  {
    value: "15 WEST 43 STREET",
    data: 1012590025
  },
  {
    value: "15 WEST 44 STREET",
    data: 1012600028
  },
  {
    value: "15 WEST 45 STREET",
    data: 1012610029
  },
  {
    value: "15 WEST 46 STREET",
    data: 1012620027
  },
  {
    value: "15 WEST 47 STREET",
    data: 1012630024
  },
  {
    value: "15 WEST 51 STREET",
    data: 1012670022
  },
  {
    value: "15 WEST 53 STREET",
    data: 1012697501
  },
  {
    value: "15 WEST 53 STREET",
    data: 1012697501
  },
  {
    value: "15 WEST 54 STREET",
    data: 1012700025
  },
  {
    value: "15 WEST 55 STREET",
    data: 1012710027
  },
  {
    value: "15 WEST 55 STREET",
    data: 1012710027
  },
  {
    value: "15 WEST 63 STREET",
    data: 1011167502
  },
  {
    value: "15 WEST 63 STREET",
    data: 1011167502
  },
  {
    value: "15 WEST 64 STREET",
    data: 1011170023
  },
  {
    value: "15 WEST 64 STREET",
    data: 1011170023
  },
  {
    value: "15 WEST 65 STREET",
    data: 1011180014
  },
  {
    value: "15 WEST 67 STREET",
    data: 1011200022
  },
  {
    value: "15 WEST 67 STREET",
    data: 1011200022
  },
  {
    value: "15 WEST 68 STREET",
    data: 1011210025
  },
  {
    value: "15 WEST 68 STREET",
    data: 1011210025
  },
  {
    value: "15 WEST 70 STREET",
    data: 1011230024
  },
  {
    value: "15 WEST 72 STREET",
    data: 1011250024
  },
  {
    value: "15 WEST 72 STREET",
    data: 1011250024
  },
  {
    value: "15 WEST 73 STREET",
    data: 1011260023
  },
  {
    value: "15 WEST 74 STREET",
    data: 1011270023
  },
  {
    value: "15 WEST 75 STREET",
    data: 1011280021
  },
  {
    value: "15 WEST 75 STREET",
    data: 1011280021
  },
  {
    value: "15 WEST 76 STREET",
    data: 1011290021
  },
  {
    value: "15 WEST 81 STREET",
    data: 1011950018
  },
  {
    value: "15 WEST 81 STREET",
    data: 1011950018
  },
  {
    value: "15 WEST 82 STREET",
    data: 1011960022
  },
  {
    value: "15 WEST 82 STREET",
    data: 1011960022
  },
  {
    value: "15 WEST 84 STREET",
    data: 1011980019
  },
  {
    value: "15 WEST 84 STREET",
    data: 1011980019
  },
  {
    value: "15 WEST 86 STREET",
    data: 1012000023
  },
  {
    value: "15 WEST 88 STREET",
    data: 1012020026
  },
  {
    value: "15 WEST 89 STREET",
    data: 1012030027
  },
  {
    value: "15 WEST 9 STREET",
    data: 1005730052
  },
  {
    value: "15 WEST 94 STREET",
    data: 1012080027
  },
  {
    value: "15 WEST 95 STREET",
    data: 1012090025
  },
  {
    value: "15 WILLIAM STREET",
    data: 1000257501
  },
  {
    value: "15 WILLIAM STREET",
    data: 1000257501
  },
  {
    value: "150 1 AVENUE",
    data: 1004370001
  },
  {
    value: "150 10 AVENUE",
    data: 1007170003
  },
  {
    value: "150 10 AVENUE",
    data: 1007170003
  },
  {
    value: "150 9 AVENUE",
    data: 1007430002
  },
  {
    value: "150 AMSTERDAM AVENUE",
    data: 1011587507
  },
  {
    value: "150 AMSTERDAM AVENUE",
    data: 1011587507
  },
  {
    value: "150 BAXTER STREET",
    data: 1002350016
  },
  {
    value: "150 BEEKMAN STREET",
    data: 1000970013
  },
  {
    value: "150 BENNETT AVENUE",
    data: 1021800340
  },
  {
    value: "150 BENNETT AVENUE",
    data: 1021800340
  },
  {
    value: "150 BOWERY",
    data: 1004780042
  },
  {
    value: "150 BROADWAY",
    data: 1000640012
  },
  {
    value: "150 BROOME STREET",
    data: 1003470080
  },
  {
    value: "150 BROOME STREET",
    data: 1003470080
  },
  {
    value: "150 CENTRAL PARK SOUTH",
    data: 1010110052
  },
  {
    value: "150 CENTRAL PARK SOUTH",
    data: 1010110052
  },
  {
    value: "150 CHAMBERS STREET",
    data: 1001377501
  },
  {
    value: "150 CHARLES STREET",
    data: 1006367503
  },
  {
    value: "150 DELANCEY STREET",
    data: 1003480036
  },
  {
    value: "150 DUANE STREET",
    data: 1001467502
  },
  {
    value: "150 DUANE STREET",
    data: 1001467502
  },
  {
    value: "150 DYCKMAN STREET",
    data: 1021740042
  },
  {
    value: "150 EAST 103 STREET",
    data: 1016300052
  },
  {
    value: "150 EAST 105 STREET",
    data: 1016320051
  },
  {
    value: "150 EAST 105 STREET",
    data: 1016320051
  },
  {
    value: "150 EAST 106 STREET",
    data: 1016330053
  },
  {
    value: "150 EAST 110 STREET",
    data: 1016370052
  },
  {
    value: "150 EAST 110 STREET",
    data: 1016370052
  },
  {
    value: "150 EAST 111 STREET",
    data: 1016380052
  },
  {
    value: "150 EAST 111 STREET",
    data: 1016380052
  },
  {
    value: "150 EAST 116 STREET",
    data: 1016430052
  },
  {
    value: "150 EAST 116 STREET",
    data: 1016430052
  },
  {
    value: "150 EAST 120 STREET",
    data: 1017690021
  },
  {
    value: "150 EAST 120 STREET",
    data: 1017690021
  },
  {
    value: "150 EAST 123 STREET",
    data: 1017710050
  },
  {
    value: "150 EAST 124 STREET",
    data: 1017720052
  },
  {
    value: "150 EAST 18 STREET",
    data: 1008730040
  },
  {
    value: "150 EAST 18 STREET",
    data: 1008730040
  },
  {
    value: "150 EAST 22 STREET",
    data: 1008770056
  },
  {
    value: "150 EAST 24 STREET",
    data: 1008790052
  },
  {
    value: "150 EAST 27 STREET",
    data: 1008820052
  },
  {
    value: "150 EAST 27 STREET",
    data: 1008820052
  },
  {
    value: "150 EAST 30 STREET",
    data: 1008850051
  },
  {
    value: "150 EAST 30 STREET",
    data: 1008850051
  },
  {
    value: "150 EAST 34 STREET",
    data: 1008890055
  },
  {
    value: "150 EAST 35 STREET",
    data: 1008900057
  },
  {
    value: "150 EAST 35 STREET",
    data: 1008900057
  },
  {
    value: "150 EAST 36 STREET",
    data: 1008910058
  },
  {
    value: "150 EAST 37 STREET",
    data: 1008927501
  },
  {
    value: "150 EAST 37 STREET",
    data: 1008927501
  },
  {
    value: "150 EAST 38 STREET",
    data: 1008930058
  },
  {
    value: "150 EAST 39 STREET",
    data: 1008940052
  },
  {
    value: "150 EAST 39 STREET",
    data: 1008940052
  },
  {
    value: "150 EAST 4 STREET",
    data: 1004310014
  },
  {
    value: "150 EAST 44 STREET",
    data: 1012980041
  },
  {
    value: "150 EAST 44 STREET",
    data: 1012980041
  },
  {
    value: "150 EAST 45 STREET",
    data: 1012990041
  },
  {
    value: "150 EAST 46 STREET",
    data: 1013000046
  },
  {
    value: "150 EAST 49 STREET",
    data: 1013030041
  },
  {
    value: "150 EAST 49 STREET",
    data: 1013030041
  },
  {
    value: "150 EAST 50 STREET",
    data: 1013040041
  },
  {
    value: "150 EAST 55 STREET",
    data: 1013097501
  },
  {
    value: "150 EAST 56 STREET",
    data: 1013107503
  },
  {
    value: "150 EAST 56 STREET",
    data: 1013107503
  },
  {
    value: "150 EAST 57 STREET",
    data: 1013110045
  },
  {
    value: "150 EAST 57 STREET",
    data: 1013110045
  },
  {
    value: "150 EAST 58 STREET",
    data: 1013120041
  },
  {
    value: "150 EAST 63 STREET",
    data: 1013970147
  },
  {
    value: "150 EAST 65 STREET",
    data: 1013990142
  },
  {
    value: "150 EAST 7 STREET",
    data: 1004020019
  },
  {
    value: "150 EAST 7 STREET",
    data: 1004020019
  },
  {
    value: "150 EAST 78 STREET",
    data: 1014120151
  },
  {
    value: "150 EAST 79 STREET",
    data: 1014130152
  },
  {
    value: "150 EAST 80 STREET",
    data: 1015080053
  },
  {
    value: "150 EAST 81 STREET",
    data: 1015090048
  },
  {
    value: "150 EAST 83 STREET",
    data: 1015110048
  },
  {
    value: "150 EAST 83 STREET",
    data: 1015110048
  },
  {
    value: "150 EAST 84 STREET",
    data: 1015120047
  },
  {
    value: "150 EAST 84 STREET",
    data: 1015120047
  },
  {
    value: "150 EAST 85 STREET",
    data: 1015137502
  },
  {
    value: "150 EAST 85 STREET",
    data: 1015137502
  },
  {
    value: "150 EAST 86 STREET",
    data: 1015147502
  },
  {
    value: "150 EAST 86 STREET",
    data: 1015147502
  },
  {
    value: "150 EAST 87 STREET",
    data: 1015150052
  },
  {
    value: "150 EAST 87 STREET",
    data: 1015150052
  },
  {
    value: "150 EAST 89 STREET",
    data: 1015170148
  },
  {
    value: "150 EAST 91 STREET",
    data: 1015190050
  },
  {
    value: "150 EAST 91 STREET",
    data: 1015190050
  },
  {
    value: "150 EAST BROADWAY",
    data: 1002830066
  },
  {
    value: "150 EAST END AVENUE",
    data: 1015830125
  },
  {
    value: "150 FORSYTH STREET",
    data: 1004200045
  },
  {
    value: "150 FORSYTH STREET",
    data: 1004200045
  },
  {
    value: "150 HAVEN AVENUE",
    data: 1021390295
  },
  {
    value: "150 HAVEN AVENUE",
    data: 1021390295
  },
  {
    value: "150 HENRY STREET",
    data: 1002710059
  },
  {
    value: "150 HILLSIDE AVENUE",
    data: 1021730041
  },
  {
    value: "150 LEXINGTON AVENUE",
    data: 1008850069
  },
  {
    value: "150 MANHATTAN AVENUE",
    data: 1018420047
  },
  {
    value: "150 MANHATTAN AVENUE",
    data: 1018420047
  },
  {
    value: "150 NASSAU STREET",
    data: 1001007501
  },
  {
    value: "150 NASSAU STREET",
    data: 1001007501
  },
  {
    value: "150 ORCHARD STREET",
    data: 1004110003
  },
  {
    value: "150 ORCHARD STREET",
    data: 1004110003
  },
  {
    value: "150 READE STREET",
    data: 1001410010
  },
  {
    value: "150 RIVERSIDE DRIVE",
    data: 1012490001
  },
  {
    value: "150 SPRING STREET",
    data: 1004870026
  },
  {
    value: "150 ST NICHOLAS AVENUE",
    data: 1019230038
  },
  {
    value: "150 STANTON STREET",
    data: 1003550071
  },
  {
    value: "150 SULLIVAN STREET",
    data: 1005180032
  },
  {
    value: "150 SULLIVAN STREET",
    data: 1005180032
  },
  {
    value: "150 VARICK STREET",
    data: 1005050001
  },
  {
    value: "150 VERMILYEA AVENUE",
    data: 1022360025
  },
  {
    value: "150 VERMILYEA AVENUE",
    data: 1022360025
  },
  {
    value: "150 WAVERLY PLACE",
    data: 1005927502
  },
  {
    value: "150 WEST 100 STREET",
    data: 1018520049
  },
  {
    value: "150 WEST 11 STREET",
    data: 1006060036
  },
  {
    value: "150 WEST 111 STREET",
    data: 1018200058
  },
  {
    value: "150 WEST 111 STREET",
    data: 1018200058
  },
  {
    value: "150 WEST 117 STREET",
    data: 1019010056
  },
  {
    value: "150 WEST 119 STREET",
    data: 1019030056
  },
  {
    value: "150 WEST 120 STREET",
    data: 1019040153
  },
  {
    value: "150 WEST 121 STREET",
    data: 1019050155
  },
  {
    value: "150 WEST 123 STREET",
    data: 1019070055
  },
  {
    value: "150 WEST 124 STREET",
    data: 1019080055
  },
  {
    value: "150 WEST 127 STREET",
    data: 1019110055
  },
  {
    value: "150 WEST 13 STREET",
    data: 1006080014
  },
  {
    value: "150 WEST 130 STREET",
    data: 1019140052
  },
  {
    value: "150 WEST 131 STREET",
    data: 1019150056
  },
  {
    value: "150 WEST 132 STREET",
    data: 1019160152
  },
  {
    value: "150 WEST 133 STREET",
    data: 1019170053
  },
  {
    value: "150 WEST 136 STREET",
    data: 1019200152
  },
  {
    value: "150 WEST 14 STREET",
    data: 1006090013
  },
  {
    value: "150 WEST 141 STREET",
    data: 1020090046
  },
  {
    value: "150 WEST 141 STREET",
    data: 1020090046
  },
  {
    value: "150 WEST 145 STREET",
    data: 1020130050
  },
  {
    value: "150 WEST 15 STREET",
    data: 1007900064
  },
  {
    value: "150 WEST 16 STREET",
    data: 1007910072
  },
  {
    value: "150 WEST 17 STREET",
    data: 1007920064
  },
  {
    value: "150 WEST 21 STREET",
    data: 1007960067
  },
  {
    value: "150 WEST 21 STREET",
    data: 1007960067
  },
  {
    value: "150 WEST 22 STREET",
    data: 1007970070
  },
  {
    value: "150 WEST 225 STREET",
    data: 1022150042
  },
  {
    value: "150 WEST 225 STREET",
    data: 1022150042
  },
  {
    value: "150 WEST 25 STREET",
    data: 1008000065
  },
  {
    value: "150 WEST 26 STREET",
    data: 1008017502
  },
  {
    value: "150 WEST 28 STREET",
    data: 1008030067
  },
  {
    value: "150 WEST 36 STREET",
    data: 1008110060
  },
  {
    value: "150 WEST 4 STREET",
    data: 1005430042
  },
  {
    value: "150 WEST 46 STREET",
    data: 1009980055
  },
  {
    value: "150 WEST 47 STREET",
    data: 1009990054
  },
  {
    value: "150 WEST 47 STREET",
    data: 1009990054
  },
  {
    value: "150 WEST 49 STREET",
    data: 1010010058
  },
  {
    value: "150 WEST 51 STREET",
    data: 1010037501
  },
  {
    value: "150 WEST 51 STREET",
    data: 1010037501
  },
  {
    value: "150 WEST 55 STREET",
    data: 1010070054
  },
  {
    value: "150 WEST 56 STREET",
    data: 1010087503
  },
  {
    value: "150 WEST 56 STREET",
    data: 1010087503
  },
  {
    value: "150 WEST 57 STREET",
    data: 1010090009
  },
  {
    value: "150 WEST 58 STREET",
    data: 1010100051
  },
  {
    value: "150 WEST 58 STREET",
    data: 1010100051
  },
  {
    value: "150 WEST 73 STREET",
    data: 1011440053
  },
  {
    value: "150 WEST 74 STREET",
    data: 1011450052
  },
  {
    value: "150 WEST 74 STREET",
    data: 1011450052
  },
  {
    value: "150 WEST 75 STREET",
    data: 1011460056
  },
  {
    value: "150 WEST 76 STREET",
    data: 1011470051
  },
  {
    value: "150 WEST 76 STREET",
    data: 1011470051
  },
  {
    value: "150 WEST 77 STREET",
    data: 1011480052
  },
  {
    value: "150 WEST 79 STREET",
    data: 1011500055
  },
  {
    value: "150 WEST 79 STREET",
    data: 1011500055
  },
  {
    value: "150 WEST 80 STREET",
    data: 1012100055
  },
  {
    value: "150 WEST 80 STREET",
    data: 1012100055
  },
  {
    value: "150 WEST 82 STREET",
    data: 1012120053
  },
  {
    value: "150 WEST 82 STREET",
    data: 1012120053
  },
  {
    value: "150 WEST 83 STREET",
    data: 1012130054
  },
  {
    value: "150 WEST 84 STREET",
    data: 1012140054
  },
  {
    value: "150 WEST 84 STREET",
    data: 1012140054
  },
  {
    value: "150 WEST 85 STREET",
    data: 1012150053
  },
  {
    value: "150 WEST 87 STREET",
    data: 1012170050
  },
  {
    value: "150 WEST 87 STREET",
    data: 1012170050
  },
  {
    value: "150 WEST 88 STREET",
    data: 1012180049
  },
  {
    value: "150 WEST 92 STREET",
    data: 1012220055
  },
  {
    value: "150 WEST 95 STREET",
    data: 1012250052
  },
  {
    value: "150 WEST 95 STREET",
    data: 1012250052
  },
  {
    value: "150 WEST END AVENUE",
    data: 1011587503
  },
  {
    value: "150 WEST END AVENUE",
    data: 1011587503
  },
  {
    value: "1500 1 AVENUE",
    data: 1014730003
  },
  {
    value: "1500 1 AVENUE",
    data: 1014730003
  },
  {
    value: "1500 3 AVENUE",
    data: 1015130038
  },
  {
    value: "1500 AMSTERDAM AVENUE",
    data: 1019880029
  },
  {
    value: "1500 AMSTERDAM AVENUE",
    data: 1019880029
  },
  {
    value: "1500 BROADWAY",
    data: 1009960001
  },
  {
    value: "1500 ST NICHOLAS AVENUE",
    data: 1021570033
  },
  {
    value: "1500 ST NICHOLAS AVENUE",
    data: 1021570033
  },
  {
    value: "1501 1 AVENUE",
    data: 1014530025
  },
  {
    value: "1501 2 AVENUE",
    data: 1014330024
  },
  {
    value: "1501 2 AVENUE",
    data: 1014330024
  },
  {
    value: "1501 3 AVENUE",
    data: 1015300047
  },
  {
    value: "1501 AMSTERDAM AVENUE",
    data: 1019710018
  },
  {
    value: "1501 LEXINGTON AVENUE",
    data: 1016240045
  },
  {
    value: "1501 LEXINGTON AVENUE",
    data: 1016240045
  },
  {
    value: "1502 1 AVENUE",
    data: 1014730004
  },
  {
    value: "1502 1 AVENUE",
    data: 1014730004
  },
  {
    value: "1502 3 AVENUE",
    data: 1015130040
  },
  {
    value: "1503 3 AVENUE",
    data: 1015300046
  },
  {
    value: "1503 3 AVENUE",
    data: 1015300046
  },
  {
    value: "1503 LEXINGTON AVENUE",
    data: 1016250023
  },
  {
    value: "1503 LEXINGTON AVENUE",
    data: 1016250023
  },
  {
    value: "1504 AMSTERDAM AVENUE",
    data: 1019880031
  },
  {
    value: "1504 AMSTERDAM AVENUE",
    data: 1019880031
  },
  {
    value: "1504 LEXINGTON AVENUE",
    data: 1016250013
  },
  {
    value: "1504 LEXINGTON AVENUE",
    data: 1016250013
  },
  {
    value: "1505 3 AVENUE",
    data: 1015300045
  },
  {
    value: "1505 LEXINGTON AVENUE",
    data: 1016250022
  },
  {
    value: "1505 LEXINGTON AVENUE",
    data: 1016250022
  },
  {
    value: "1505 PARK AVENUE",
    data: 1016370001
  },
  {
    value: "1505 PARK AVENUE",
    data: 1016370001
  },
  {
    value: "1505 ST NICHOLAS AVENUE",
    data: 1021660048
  },
  {
    value: "1505 ST NICHOLAS AVENUE",
    data: 1021660048
  },
  {
    value: "1506 ST NICHOLAS AVENUE",
    data: 1021570036
  },
  {
    value: "1507 LEXINGTON AVENUE",
    data: 1016250021
  },
  {
    value: "1508 AMSTERDAM AVENUE",
    data: 1019880033
  },
  {
    value: "1508 AMSTERDAM AVENUE",
    data: 1019880033
  },
  {
    value: "1509 2 AVENUE",
    data: 1014330124
  },
  {
    value: "1509 LEXINGTON AVENUE",
    data: 1016250020
  },
  {
    value: "1509 ST NICHOLAS AVENUE",
    data: 1021660044
  },
  {
    value: "1509 ST NICHOLAS AVENUE",
    data: 1021660044
  },
  {
    value: "151 2 AVENUE",
    data: 1004650050
  },
  {
    value: "151 2 AVENUE",
    data: 1004650050
  },
  {
    value: "151 8 AVENUE",
    data: 1007410034
  },
  {
    value: "151 8 AVENUE",
    data: 1007410034
  },
  {
    value: "151 ALLEN STREET",
    data: 1004167501
  },
  {
    value: "151 ALLEN STREET",
    data: 1004167501
  },
  {
    value: "151 AVENUE A",
    data: 1004370028
  },
  {
    value: "151 AVENUE B",
    data: 1003920005
  },
  {
    value: "151 AVENUE C",
    data: 1003920035
  },
  {
    value: "151 AVENUE OF THE AMER",
    data: 1004910046
  },
  {
    value: "151 BLEECKER STREET",
    data: 1005370037
  },
  {
    value: "151 BLEECKER STREET",
    data: 1005370037
  },
  {
    value: "151 BOWERY",
    data: 1004230012
  },
  {
    value: "151 CANAL STREET",
    data: 1003030006
  },
  {
    value: "151 CENTRAL PARK WEST",
    data: 1011280029
  },
  {
    value: "151 CENTRAL PARK WEST",
    data: 1011280029
  },
  {
    value: "151 CHARLES STREET",
    data: 1006370036
  },
  {
    value: "151 CHARLES STREET",
    data: 1006370036
  },
  {
    value: "151 DYCKMAN STREET",
    data: 1022200001
  },
  {
    value: "151 EAST 115 STREET",
    data: 1016430021
  },
  {
    value: "151 EAST 116 STREET",
    data: 1016440122
  },
  {
    value: "151 EAST 117 STREET",
    data: 1016450023
  },
  {
    value: "151 EAST 121 STREET",
    data: 1017700024
  },
  {
    value: "151 EAST 123 STREET",
    data: 1017720022
  },
  {
    value: "151 EAST 18 STREET",
    data: 1008740033
  },
  {
    value: "151 EAST 20 STREET",
    data: 1008767502
  },
  {
    value: "151 EAST 20 STREET",
    data: 1008767502
  },
  {
    value: "151 EAST 22 STREET",
    data: 1008780032
  },
  {
    value: "151 EAST 26 STREET",
    data: 1008820038
  },
  {
    value: "151 EAST 26 STREET",
    data: 1008820038
  },
  {
    value: "151 EAST 29 STREET",
    data: 1008850040
  },
  {
    value: "151 EAST 30 STREET",
    data: 1008860039
  },
  {
    value: "151 EAST 30 STREET",
    data: 1008860039
  },
  {
    value: "151 EAST 31 STREET",
    data: 1008870030
  },
  {
    value: "151 EAST 31 STREET",
    data: 1008870030
  },
  {
    value: "151 EAST 33 STREET",
    data: 1008890028
  },
  {
    value: "151 EAST 36 STREET",
    data: 1008920032
  },
  {
    value: "151 EAST 37 STREET",
    data: 1008930034
  },
  {
    value: "151 EAST 38 STREET",
    data: 1008940038
  },
  {
    value: "151 EAST 38 STREET",
    data: 1008940038
  },
  {
    value: "151 EAST 50 STREET",
    data: 1013050032
  },
  {
    value: "151 EAST 57 STREET",
    data: 1013120027
  },
  {
    value: "151 EAST 58 STREET",
    data: 1013137501
  },
  {
    value: "151 EAST 58 STREET",
    data: 1013137501
  },
  {
    value: "151 EAST 60 STREET",
    data: 1013950024
  },
  {
    value: "151 EAST 61 STREET",
    data: 1013960025
  },
  {
    value: "151 EAST 63 STREET",
    data: 1013980026
  },
  {
    value: "151 EAST 71 STREET",
    data: 1014060022
  },
  {
    value: "151 EAST 72 STREET",
    data: 1014070024
  },
  {
    value: "151 EAST 74 STREET",
    data: 1014090023
  },
  {
    value: "151 EAST 76 STREET",
    data: 1014110023
  },
  {
    value: "151 EAST 76 STREET",
    data: 1014110023
  },
  {
    value: "151 EAST 78 STREET",
    data: 1014137503
  },
  {
    value: "151 EAST 79 STREET",
    data: 1015080020
  },
  {
    value: "151 EAST 79 STREET",
    data: 1015080020
  },
  {
    value: "151 EAST 80 STREET",
    data: 1015090020
  },
  {
    value: "151 EAST 80 STREET",
    data: 1015090020
  },
  {
    value: "151 EAST 81 STREET",
    data: 1015100025
  },
  {
    value: "151 EAST 81 STREET",
    data: 1015100025
  },
  {
    value: "151 EAST 82 STREET",
    data: 1015110024
  },
  {
    value: "151 EAST 83 STREET",
    data: 1015120025
  },
  {
    value: "151 EAST 83 STREET",
    data: 1015120025
  },
  {
    value: "151 EAST 86 STREET",
    data: 1015150023
  },
  {
    value: "151 EAST 90 STREET",
    data: 1015190022
  },
  {
    value: "151 EAST 90 STREET",
    data: 1015190022
  },
  {
    value: "151 EAST 92 STREET",
    data: 1015210024
  },
  {
    value: "151 EAST 96 STREET",
    data: 1016240020
  },
  {
    value: "151 EAST 96 STREET",
    data: 1016240020
  },
  {
    value: "151 EAST 97 STREET",
    data: 1016250028
  },
  {
    value: "151 EAST BROADWAY",
    data: 1002830029
  },
  {
    value: "151 EAST HOUSTON STREET",
    data: 1004170011
  },
  {
    value: "151 GRAND STREET",
    data: 1002330017
  },
  {
    value: "151 HUDSON STREET",
    data: 1002157503
  },
  {
    value: "151 LENOX AVENUE",
    data: 1019020033
  },
  {
    value: "151 LEXINGTON AVENUE",
    data: 1008850066
  },
  {
    value: "151 LEXINGTON AVENUE",
    data: 1008850066
  },
  {
    value: "151 LUDLOW STREET",
    data: 1004110023
  },
  {
    value: "151 MAIDEN LANE",
    data: 1000720007
  },
  {
    value: "151 MERCER STREET",
    data: 1005130031
  },
  {
    value: "151 NAGLE AVENUE",
    data: 1021730029
  },
  {
    value: "151 NAGLE AVENUE",
    data: 1021730029
  },
  {
    value: "151 NORFOLK STREET",
    data: 1003540022
  },
  {
    value: "151 NORFOLK STREET",
    data: 1003540022
  },
  {
    value: "151 ORCHARD STREET",
    data: 1004160065
  },
  {
    value: "151 ORCHARD STREET",
    data: 1004160065
  },
  {
    value: "151 PRINCE STREET",
    data: 1005160038
  },
  {
    value: "151 RIDGE STREET",
    data: 1003450025
  },
  {
    value: "151 RIDGE STREET",
    data: 1003450025
  },
  {
    value: "151 RIVINGTON STREET",
    data: 1003480015
  },
  {
    value: "151 SPRING STREET",
    data: 1005010036
  },
  {
    value: "151 WEST 106 STREET",
    data: 1018610009
  },
  {
    value: "151 WEST 108 STREET",
    data: 1018630005
  },
  {
    value: "151 WEST 117 STREET",
    data: 1019020108
  },
  {
    value: "151 WEST 118 STREET",
    data: 1019030007
  },
  {
    value: "151 WEST 119 STREET",
    data: 1019040009
  },
  {
    value: "151 WEST 120 STREET",
    data: 1019050008
  },
  {
    value: "151 WEST 121 STREET",
    data: 1019067502
  },
  {
    value: "151 WEST 122 STREET",
    data: 1019070010
  },
  {
    value: "151 WEST 123 STREET",
    data: 1019080007
  },
  {
    value: "151 WEST 123 STREET",
    data: 1019080007
  },
  {
    value: "151 WEST 126 STREET",
    data: 1019110012
  },
  {
    value: "151 WEST 129 STREET",
    data: 1019140012
  },
  {
    value: "151 WEST 13 STREET",
    data: 1006090071
  },
  {
    value: "151 WEST 131 STREET",
    data: 1019160011
  },
  {
    value: "151 WEST 132 STREET",
    data: 1019170011
  },
  {
    value: "151 WEST 133 STREET",
    data: 1019180015
  },
  {
    value: "151 WEST 133 STREET",
    data: 1019180015
  },
  {
    value: "151 WEST 140 STREET",
    data: 1020090012
  },
  {
    value: "151 WEST 140 STREET",
    data: 1020090012
  },
  {
    value: "151 WEST 143 STREET",
    data: 1020120011
  },
  {
    value: "151 WEST 143 STREET",
    data: 1020120011
  },
  {
    value: "151 WEST 145 STREET",
    data: 1020140011
  },
  {
    value: "151 WEST 145 STREET",
    data: 1020140011
  },
  {
    value: "151 WEST 16 STREET",
    data: 1007920008
  },
  {
    value: "151 WEST 16 STREET",
    data: 1007920008
  },
  {
    value: "151 WEST 17 STREET",
    data: 1007937505
  },
  {
    value: "151 WEST 17 STREET",
    data: 1007937505
  },
  {
    value: "151 WEST 19 STREET",
    data: 1007950012
  },
  {
    value: "151 WEST 21 STREET",
    data: 1007977508
  },
  {
    value: "151 WEST 22 STREET",
    data: 1007980014
  },
  {
    value: "151 WEST 228 STREET",
    data: 1022150197
  },
  {
    value: "151 WEST 228 STREET",
    data: 1022150197
  },
  {
    value: "151 WEST 25 STREET",
    data: 1008010011
  },
  {
    value: "151 WEST 26 STREET",
    data: 1008020008
  },
  {
    value: "151 WEST 28 STREET",
    data: 1008040008
  },
  {
    value: "151 WEST 30 STREET",
    data: 1008060006
  },
  {
    value: "151 WEST 46 STREET",
    data: 1009990009
  },
  {
    value: "151 WEST 48 STREET",
    data: 1010010011
  },
  {
    value: "151 WEST 72 STREET",
    data: 1011440012
  },
  {
    value: "151 WEST 74 STREET",
    data: 1011460008
  },
  {
    value: "151 WEST 74 STREET",
    data: 1011460008
  },
  {
    value: "151 WEST 75 STREET",
    data: 1011470009
  },
  {
    value: "151 WEST 76 STREET",
    data: 1011480112
  },
  {
    value: "151 WEST 78 STREET",
    data: 1011500011
  },
  {
    value: "151 WEST 78 STREET",
    data: 1011500011
  },
  {
    value: "151 WEST 80 STREET",
    data: 1012110014
  },
  {
    value: "151 WEST 82 STREET",
    data: 1012130107
  },
  {
    value: "151 WEST 82 STREET",
    data: 1012130107
  },
  {
    value: "151 WEST 85 STREET",
    data: 1012160109
  },
  {
    value: "151 WEST 86 STREET",
    data: 1012170011
  },
  {
    value: "151 WEST 86 STREET",
    data: 1012170011
  },
  {
    value: "151 WEST 87 STREET",
    data: 1012180015
  },
  {
    value: "151 WEST 87 STREET",
    data: 1012180015
  },
  {
    value: "151 WEST 88 STREET",
    data: 1012190015
  },
  {
    value: "151 WEST 91 STREET",
    data: 1012220110
  },
  {
    value: "151 WEST 93 STREET",
    data: 1012247503
  },
  {
    value: "151 WEST 95 STREET",
    data: 1012260012
  },
  {
    value: "1510 LEXINGTON AVENUE",
    data: 1016250016
  },
  {
    value: "1510 LEXINGTON AVENUE",
    data: 1016250016
  },
  {
    value: "1510 ST NICHOLAS AVENUE",
    data: 1021570039
  },
  {
    value: "1510 YORK AVENUE",
    data: 1015760049
  },
  {
    value: "1510 YORK AVENUE",
    data: 1015760049
  },
  {
    value: "1511 3 AVENUE",
    data: 1015310001
  },
  {
    value: "1511 LEXINGTON AVENUE",
    data: 1016250053
  },
  {
    value: "1511 YORK AVENUE",
    data: 1015600021
  },
  {
    value: "1511 YORK AVENUE",
    data: 1015600021
  },
  {
    value: "1512 1 AVENUE",
    data: 1014730047
  },
  {
    value: "1512 AMSTERDAM AVENUE",
    data: 1019880034
  },
  {
    value: "1512 AMSTERDAM AVENUE",
    data: 1019880034
  },
  {
    value: "1513 1 AVENUE",
    data: 1015420023
  },
  {
    value: "1513 LEXINGTON AVENUE",
    data: 1016250052
  },
  {
    value: "1514 1 AVENUE",
    data: 1015590001
  },
  {
    value: "1514 BROADWAY",
    data: 1009970001
  },
  {
    value: "1514 MADISON AVENUE",
    data: 1016080056
  },
  {
    value: "1514 MADISON AVENUE",
    data: 1016080056
  },
  {
    value: "1515 2 AVENUE",
    data: 1014330127
  },
  {
    value: "1515 BROADWAY",
    data: 1010160036
  },
  {
    value: "1515 LEXINGTON AVENUE",
    data: 1016250051
  },
  {
    value: "1515 LEXINGTON AVENUE",
    data: 1016250051
  },
  {
    value: "1516 1 AVENUE",
    data: 1015590002
  },
  {
    value: "1516 AMSTERDAM AVENUE",
    data: 1019880036
  },
  {
    value: "1516 AMSTERDAM AVENUE",
    data: 1019880036
  },
  {
    value: "1516 MADISON AVENUE",
    data: 1016090014
  },
  {
    value: "1516 PARK AVENUE",
    data: 1016160036
  },
  {
    value: "1518 1 AVENUE",
    data: 1015590003
  },
  {
    value: "1518 1 AVENUE",
    data: 1015590003
  },
  {
    value: "151A 1 AVENUE",
    data: 1004510036
  },
  {
    value: "152 2 AVENUE",
    data: 1004510004
  },
  {
    value: "152 2 AVENUE",
    data: 1004510004
  },
  {
    value: "152 7 AVENUE",
    data: 1007690034
  },
  {
    value: "152 7 AVENUE",
    data: 1007690034
  },
  {
    value: "152 7 AVENUE SOUTH",
    data: 1006120029
  },
  {
    value: "152 7 AVENUE SOUTH",
    data: 1006120029
  },
  {
    value: "152 8 AVENUE",
    data: 1007670005
  },
  {
    value: "152 8 AVENUE",
    data: 1007670005
  },
  {
    value: "152 9 AVENUE",
    data: 1007430003
  },
  {
    value: "152 ATTORNEY STREET",
    data: 1003450002
  },
  {
    value: "152 AVENUE C",
    data: 1003790005
  },
  {
    value: "152 AVENUE D",
    data: 1003670001
  },
  {
    value: "152 AVENUE D",
    data: 1003670001
  },
  {
    value: "152 COLUMBUS AVENUE",
    data: 1011380033
  },
  {
    value: "152 COLUMBUS AVENUE",
    data: 1011380033
  },
  {
    value: "152 DYCKMAN STREET",
    data: 1021740040
  },
  {
    value: "152 DYCKMAN STREET",
    data: 1021740040
  },
  {
    value: "152 EAST 105 STREET",
    data: 1016320150
  },
  {
    value: "152 EAST 105 STREET",
    data: 1016320150
  },
  {
    value: "152 EAST 106 STREET",
    data: 1016330052
  },
  {
    value: "152 EAST 108 STREET",
    data: 1016350049
  },
  {
    value: "152 EAST 110 STREET",
    data: 1016370051
  },
  {
    value: "152 EAST 116 STREET",
    data: 1016430051
  },
  {
    value: "152 EAST 118 STREET",
    data: 1016450050
  },
  {
    value: "152 EAST 118 STREET",
    data: 1016450050
  },
  {
    value: "152 EAST 123 STREET",
    data: 1017710049
  },
  {
    value: "152 EAST 22 STREET",
    data: 1008770053
  },
  {
    value: "152 EAST 22 STREET",
    data: 1008770053
  },
  {
    value: "152 EAST 28 STREET",
    data: 1008830055
  },
  {
    value: "152 EAST 33 STREET",
    data: 1008880050
  },
  {
    value: "152 EAST 34 STREET",
    data: 1008890053
  },
  {
    value: "152 EAST 35 STREET",
    data: 1008900054
  },
  {
    value: "152 EAST 35 STREET",
    data: 1008900054
  },
  {
    value: "152 EAST 38 STREET",
    data: 1008930057
  },
  {
    value: "152 EAST 46 STREET",
    data: 1013000145
  },
  {
    value: "152 EAST 55 STREET",
    data: 1013090044
  },
  {
    value: "152 EAST 57 STREET",
    data: 1013110044
  },
  {
    value: "152 EAST 62 STREET",
    data: 1013960143
  },
  {
    value: "152 EAST 63 STREET",
    data: 1013977501
  },
  {
    value: "152 EAST 65 STREET",
    data: 1013990042
  },
  {
    value: "152 EAST 71 STREET",
    data: 1014050148
  },
  {
    value: "152 EAST 74 STREET",
    data: 1014080050
  },
  {
    value: "152 EAST 79 STREET",
    data: 1014130052
  },
  {
    value: "152 EAST 82 STREET",
    data: 1015100050
  },
  {
    value: "152 EAST 83 STREET",
    data: 1015110047
  },
  {
    value: "152 EAST 83 STREET",
    data: 1015110047
  },
  {
    value: "152 EAST 87 STREET",
    data: 1015150046
  },
  {
    value: "152 EAST 89 STREET",
    data: 1015170048
  },
  {
    value: "152 EAST 94 STREET",
    data: 1015220044
  },
  {
    value: "152 EAST 94 STREET",
    data: 1015220044
  },
  {
    value: "152 EAST BROADWAY",
    data: 1002830067
  },
  {
    value: "152 EAST END AVENUE",
    data: 1015830031
  },
  {
    value: "152 ELIZABETH STREET",
    data: 1004780007
  },
  {
    value: "152 FORSYTH STREET",
    data: 1004200046
  },
  {
    value: "152 FORSYTH STREET",
    data: 1004200046
  },
  {
    value: "152 FRANKLIN STREET",
    data: 1001897506
  },
  {
    value: "152 HENRY STREET",
    data: 1002710057
  },
  {
    value: "152 LEROY STREET",
    data: 1006010012
  },
  {
    value: "152 LEXINGTON AVENUE",
    data: 1008850070
  },
  {
    value: "152 MADISON AVENUE",
    data: 1008620016
  },
  {
    value: "152 MANHATTAN AVENUE",
    data: 1018430020
  },
  {
    value: "152 MANHATTAN AVENUE",
    data: 1018430020
  },
  {
    value: "152 MORNINGSIDE AVENUE",
    data: 1019660073
  },
  {
    value: "152 ORCHARD STREET",
    data: 1004110004
  },
  {
    value: "152 POST AVENUE",
    data: 1022230022
  },
  {
    value: "152 PRINCE STREET",
    data: 1005020023
  },
  {
    value: "152 PRINCE STREET",
    data: 1005020023
  },
  {
    value: "152 READE STREET",
    data: 1001410011
  },
  {
    value: "152 SHERMAN AVENUE",
    data: 1022250038
  },
  {
    value: "152 SHERMAN AVENUE",
    data: 1022250038
  },
  {
    value: "152 SPRING STREET",
    data: 1004877502
  },
  {
    value: "152 STANTON STREET",
    data: 1003550070
  },
  {
    value: "152 THOMPSON STREET",
    data: 1005160014
  },
  {
    value: "152 THOMPSON STREET",
    data: 1005160014
  },
  {
    value: "152 WAVERLY PLACE",
    data: 1005920057
  },
  {
    value: "152 WEST 11 STREET",
    data: 1006060035
  },
  {
    value: "152 WEST 118 STREET",
    data: 1019020056
  },
  {
    value: "152 WEST 118 STREET",
    data: 1019020056
  },
  {
    value: "152 WEST 119 STREET",
    data: 1019030057
  },
  {
    value: "152 WEST 120 STREET",
    data: 1019040054
  },
  {
    value: "152 WEST 121 STREET",
    data: 1019050056
  },
  {
    value: "152 WEST 122 STREET",
    data: 1019060154
  },
  {
    value: "152 WEST 123 STREET",
    data: 1019070155
  },
  {
    value: "152 WEST 124 STREET",
    data: 1019080056
  },
  {
    value: "152 WEST 124 STREET",
    data: 1019080056
  },
  {
    value: "152 WEST 127 STREET",
    data: 1019110155
  },
  {
    value: "152 WEST 128 STREET",
    data: 1019120054
  },
  {
    value: "152 WEST 128 STREET",
    data: 1019120054
  },
  {
    value: "152 WEST 129 STREET",
    data: 1019130056
  },
  {
    value: "152 WEST 129 STREET",
    data: 1019130056
  },
  {
    value: "152 WEST 13 STREET",
    data: 1006080013
  },
  {
    value: "152 WEST 130 STREET",
    data: 1019140053
  },
  {
    value: "152 WEST 131 STREET",
    data: 1019150057
  },
  {
    value: "152 WEST 132 STREET",
    data: 1019160053
  },
  {
    value: "152 WEST 14 STREET",
    data: 1006090012
  },
  {
    value: "152 WEST 141 STREET",
    data: 1020090047
  },
  {
    value: "152 WEST 141 STREET",
    data: 1020090047
  },
  {
    value: "152 WEST 144 STREET",
    data: 1020120054
  },
  {
    value: "152 WEST 144 STREET",
    data: 1020120054
  },
  {
    value: "152 WEST 15 STREET",
    data: 1007900065
  },
  {
    value: "152 WEST 17 STREET",
    data: 1007920065
  },
  {
    value: "152 WEST 20 STREET",
    data: 1007950069
  },
  {
    value: "152 WEST 20 STREET",
    data: 1007950069
  },
  {
    value: "152 WEST 24 STREET",
    data: 1007990069
  },
  {
    value: "152 WEST 25 STREET",
    data: 1008000068
  },
  {
    value: "152 WEST 26 STREET",
    data: 1008010071
  },
  {
    value: "152 WEST 34 STREET",
    data: 1008090073
  },
  {
    value: "152 WEST 36 STREET",
    data: 1008110062
  },
  {
    value: "152 WEST 44 STREET",
    data: 1009960054
  },
  {
    value: "152 WEST 49 STREET",
    data: 1010010059
  },
  {
    value: "152 WEST 49 STREET",
    data: 1010010059
  },
  {
    value: "152 WEST 57 STREET",
    data: 1010090005
  },
  {
    value: "152 WEST 58 STREET",
    data: 1010100053
  },
  {
    value: "152 WEST 58 STREET",
    data: 1010100053
  },
  {
    value: "152 WEST 66 STREET",
    data: 1011370057
  },
  {
    value: "152 WEST 71 STREET",
    data: 1011420061
  },
  {
    value: "152 WEST 73 STREET",
    data: 1011440153
  },
  {
    value: "152 WEST 75 STREET",
    data: 1011460156
  },
  {
    value: "152 WEST 76 STREET",
    data: 1011470052
  },
  {
    value: "152 WEST 77 STREET",
    data: 1011480053
  },
  {
    value: "152 WEST 88 STREET",
    data: 1012180149
  },
  {
    value: "152 WEST 92 STREET",
    data: 1012220056
  },
  {
    value: "152 WOOSTER STREET",
    data: 1005140010
  },
  {
    value: "152 WOOSTER STREET",
    data: 1005140010
  },
  {
    value: "1520 1 AVENUE",
    data: 1015590004
  },
  {
    value: "1520 1 AVENUE",
    data: 1015590004
  },
  {
    value: "1520 AMSTERDAM AVENUE",
    data: 1019880103
  },
  {
    value: "1520 AMSTERDAM AVENUE",
    data: 1019880103
  },
  {
    value: "1520 ST NICHOLAS AVENUE",
    data: 1021570067
  },
  {
    value: "1520 ST NICHOLAS AVENUE",
    data: 1021570067
  },
  {
    value: "1520 YORK AVENUE",
    data: 1015770001
  },
  {
    value: "1520 YORK AVENUE",
    data: 1015770001
  },
  {
    value: "1521 ST NICHOLAS AVENUE",
    data: 1021660082
  },
  {
    value: "1522 1 AVENUE",
    data: 1015590050
  },
  {
    value: "1522 2 AVENUE",
    data: 1015420053
  },
  {
    value: "1522 2 AVENUE",
    data: 1015427501
  },
  {
    value: "1522 2 AVENUE",
    data: 1015427501
  },
  {
    value: "1523 2 AVENUE",
    data: 1015250021
  },
  {
    value: "1523 2 AVENUE",
    data: 1015250021
  },
  {
    value: "1523 YORK AVENUE",
    data: 1015600025
  },
  {
    value: "1524 1 AVENUE",
    data: 1015590049
  },
  {
    value: "1524 3 AVENUE",
    data: 1015140039
  },
  {
    value: "1524 3 AVENUE",
    data: 1015140039
  },
  {
    value: "1524 AMSTERDAM AVENUE",
    data: 1019880105
  },
  {
    value: "1524 AMSTERDAM AVENUE",
    data: 1019880105
  },
  {
    value: "1525 YORK AVENUE",
    data: 1015600126
  },
  {
    value: "1526 1 AVENUE",
    data: 1015590048
  },
  {
    value: "1526 ST NICHOLAS AVENUE",
    data: 1021570070
  },
  {
    value: "1526 ST NICHOLAS AVENUE",
    data: 1021570070
  },
  {
    value: "1527 YORK AVENUE",
    data: 1015600027
  },
  {
    value: "1528 1 AVENUE",
    data: 1015590047
  },
  {
    value: "1528 1 AVENUE",
    data: 1015590047
  },
  {
    value: "1528 AMSTERDAM AVENUE",
    data: 1019880106
  },
  {
    value: "1528 AMSTERDAM AVENUE",
    data: 1019880106
  },
  {
    value: "153 1 AVENUE",
    data: 1004510137
  },
  {
    value: "153 5 AVENUE",
    data: 1008500004
  },
  {
    value: "153 AMSTERDAM AVENUE",
    data: 1011380061
  },
  {
    value: "153 ATTORNEY STREET",
    data: 1003500071
  },
  {
    value: "153 AVENUE A",
    data: 1004370027
  },
  {
    value: "153 AVENUE A",
    data: 1004370027
  },
  {
    value: "153 AVENUE B",
    data: 1003920006
  },
  {
    value: "153 AVENUE C",
    data: 1003920034
  },
  {
    value: "153 BOWERY",
    data: 1004247501
  },
  {
    value: "153 CHAMBERS STREET",
    data: 1001407504
  },
  {
    value: "153 CROSBY STREET",
    data: 1005220024
  },
  {
    value: "153 EAST 103 STREET",
    data: 1016310024
  },
  {
    value: "153 EAST 106 STREET",
    data: 1016340025
  },
  {
    value: "153 EAST 107 STREET",
    data: 1016350124
  },
  {
    value: "153 EAST 108 STREET",
    data: 1016360024
  },
  {
    value: "153 EAST 109 STREET",
    data: 1016370022
  },
  {
    value: "153 EAST 110 STREET",
    data: 1016380024
  },
  {
    value: "153 EAST 115 STREET",
    data: 1016430022
  },
  {
    value: "153 EAST 116 STREET",
    data: 1016440023
  },
  {
    value: "153 EAST 117 STREET",
    data: 1016450024
  },
  {
    value: "153 EAST 121 STREET",
    data: 1017700025
  },
  {
    value: "153 EAST 18 STREET",
    data: 1008740036
  },
  {
    value: "153 EAST 18 STREET",
    data: 1008740036
  },
  {
    value: "153 EAST 26 STREET",
    data: 1008820039
  },
  {
    value: "153 EAST 26 STREET",
    data: 1008820039
  },
  {
    value: "153 EAST 30 STREET",
    data: 1008860040
  },
  {
    value: "153 EAST 32 STREET",
    data: 1008880031
  },
  {
    value: "153 EAST 32 STREET",
    data: 1008880031
  },
  {
    value: "153 EAST 33 STREET",
    data: 1008890029
  },
  {
    value: "153 EAST 37 STREET",
    data: 1008930035
  },
  {
    value: "153 EAST 48 STREET",
    data: 1013030030
  },
  {
    value: "153 EAST 57 STREET",
    data: 1013120028
  },
  {
    value: "153 EAST 57 STREET",
    data: 1013120028
  },
  {
    value: "153 EAST 60 STREET",
    data: 1013950025
  },
  {
    value: "153 EAST 61 STREET",
    data: 1013960026
  },
  {
    value: "153 EAST 62 STREET",
    data: 1013970026
  },
  {
    value: "153 EAST 63 STREET",
    data: 1013980027
  },
  {
    value: "153 EAST 67 STREET",
    data: 1014020025
  },
  {
    value: "153 EAST 69 STREET",
    data: 1014040027
  },
  {
    value: "153 EAST 71 STREET",
    data: 1014060122
  },
  {
    value: "153 EAST 72 STREET",
    data: 1014070026
  },
  {
    value: "153 EAST 72 STREET",
    data: 1014070026
  },
  {
    value: "153 EAST 73 STREET",
    data: 1014080022
  },
  {
    value: "153 EAST 73 STREET",
    data: 1014080022
  },
  {
    value: "153 EAST 77 STREET",
    data: 1014120023
  },
  {
    value: "153 EAST 77 STREET",
    data: 1014120023
  },
  {
    value: "153 EAST 82 STREET",
    data: 1015110124
  },
  {
    value: "153 EAST 87 STREET",
    data: 1015167501
  },
  {
    value: "153 EAST 87 STREET",
    data: 1015167501
  },
  {
    value: "153 EAST 88 STREET",
    data: 1015170024
  },
  {
    value: "153 EAST 92 STREET",
    data: 1015210025
  },
  {
    value: "153 EAST 99 STREET",
    data: 1016270023
  },
  {
    value: "153 EAST 99 STREET",
    data: 1016270023
  },
  {
    value: "153 EAST BROADWAY",
    data: 1002830028
  },
  {
    value: "153 EAST HOUSTON STREET",
    data: 1004170012
  },
  {
    value: "153 EDGECOMBE AVENUE",
    data: 1020510089
  },
  {
    value: "153 EDGECOMBE AVENUE",
    data: 1020510089
  },
  {
    value: "153 ESSEX STREET",
    data: 1004117504
  },
  {
    value: "153 ESSEX STREET",
    data: 1004117504
  },
  {
    value: "153 FRANKLIN STREET",
    data: 1001790060
  },
  {
    value: "153 HUDSON STREET",
    data: 1002157501
  },
  {
    value: "153 LUDLOW STREET",
    data: 1004110021
  },
  {
    value: "153 LUDLOW STREET",
    data: 1004110021
  },
  {
    value: "153 MADISON AVENUE",
    data: 1008620024
  },
  {
    value: "153 MADISON AVENUE",
    data: 1008620024
  },
  {
    value: "153 MANHATTAN AVENUE",
    data: 1018430014
  },
  {
    value: "153 MANHATTAN AVENUE",
    data: 1018430014
  },
  {
    value: "153 MERCER STREET",
    data: 1005130030
  },
  {
    value: "153 NORFOLK STREET",
    data: 1003540020
  },
  {
    value: "153 NORFOLK STREET",
    data: 1003540020
  },
  {
    value: "153 ORCHARD STREET",
    data: 1004160064
  },
  {
    value: "153 ORCHARD STREET",
    data: 1004160064
  },
  {
    value: "153 PRINCE STREET",
    data: 1005160039
  },
  {
    value: "153 RIDGE STREET",
    data: 1003450024
  },
  {
    value: "153 RIDGE STREET",
    data: 1003450024
  },
  {
    value: "153 RIVINGTON STREET",
    data: 1003480016
  },
  {
    value: "153 SEAMAN AVENUE",
    data: 1022420001
  },
  {
    value: "153 SEAMAN AVENUE",
    data: 1022420001
  },
  {
    value: "153 SHERMAN AVENUE",
    data: 1022210005
  },
  {
    value: "153 SPRING STREET",
    data: 1005017502
  },
  {
    value: "153 STANTON STREET",
    data: 1003490014
  },
  {
    value: "153 STANTON STREET",
    data: 1003490014
  },
  {
    value: "153 VERMILYEA AVENUE",
    data: 1022270008
  },
  {
    value: "153 VERMILYEA AVENUE",
    data: 1022270008
  },
  {
    value: "153 WEST 10 STREET",
    data: 1006110076
  },
  {
    value: "153 WEST 10 STREET",
    data: 1006110076
  },
  {
    value: "153 WEST 105 STREET",
    data: 1018600009
  },
  {
    value: "153 WEST 106 STREET",
    data: 1018610008
  },
  {
    value: "153 WEST 106 STREET",
    data: 1018610008
  },
  {
    value: "153 WEST 117 STREET",
    data: 1019020107
  },
  {
    value: "153 WEST 118 STREET",
    data: 1019030006
  },
  {
    value: "153 WEST 119 STREET",
    data: 1019040008
  },
  {
    value: "153 WEST 12 STREET",
    data: 1006080066
  },
  {
    value: "153 WEST 120 STREET",
    data: 1019050007
  },
  {
    value: "153 WEST 121 STREET",
    data: 1019060008
  },
  {
    value: "153 WEST 122 STREET",
    data: 1019077502
  },
  {
    value: "153 WEST 126 STREET",
    data: 1019110011
  },
  {
    value: "153 WEST 129 STREET",
    data: 1019140011
  },
  {
    value: "153 WEST 13 STREET",
    data: 1006090072
  },
  {
    value: "153 WEST 131 STREET",
    data: 1019160010
  },
  {
    value: "153 WEST 132 STREET",
    data: 1019170010
  },
  {
    value: "153 WEST 132 STREET",
    data: 1019170010
  },
  {
    value: "153 WEST 133 STREET",
    data: 1019180014
  },
  {
    value: "153 WEST 133 STREET",
    data: 1019180014
  },
  {
    value: "153 WEST 142 STREET",
    data: 1020110009
  },
  {
    value: "153 WEST 27 STREET",
    data: 1008030007
  },
  {
    value: "153 WEST 36 STREET",
    data: 1008120012
  },
  {
    value: "153 WEST 44 STREET",
    data: 1009970010
  },
  {
    value: "153 WEST 54 STREET",
    data: 1010070005
  },
  {
    value: "153 WEST 74 STREET",
    data: 1011460007
  },
  {
    value: "153 WEST 75 STREET",
    data: 1011470008
  },
  {
    value: "153 WEST 76 STREET",
    data: 1011480012
  },
  {
    value: "153 WEST 78 STREET",
    data: 1011500010
  },
  {
    value: "153 WEST 80 STREET",
    data: 1012110013
  },
  {
    value: "153 WEST 80 STREET",
    data: 1012110013
  },
  {
    value: "153 WEST 82 STREET",
    data: 1012130007
  },
  {
    value: "153 WEST 83 STREET",
    data: 1012140013
  },
  {
    value: "153 WEST 85 STREET",
    data: 1012160009
  },
  {
    value: "153 WEST 88 STREET",
    data: 1012190114
  },
  {
    value: "153 WEST 91 STREET",
    data: 1012220010
  },
  {
    value: "153 WEST 93 STREET",
    data: 1012247502
  },
  {
    value: "153 WEST 95 STREET",
    data: 1012260011
  },
  {
    value: "1530 3 AVENUE",
    data: 1015150033
  },
  {
    value: "1530 ST NICHOLAS AVENUE",
    data: 1021570072
  },
  {
    value: "1530 ST NICHOLAS AVENUE",
    data: 1021570072
  },
  {
    value: "1530 YORK AVENUE",
    data: 1015770049
  },
  {
    value: "1531 YORK AVENUE",
    data: 1015600028
  },
  {
    value: "1531 YORK AVENUE",
    data: 1015600028
  },
  {
    value: "1532 AMSTERDAM AVENUE",
    data: 1019880107
  },
  {
    value: "1532 AMSTERDAM AVENUE",
    data: 1019880107
  },
  {
    value: "1533 3 AVENUE",
    data: 1015320004
  },
  {
    value: "1533 3 AVENUE",
    data: 1015320004
  },
  {
    value: "1533 ST NICHOLAS AVENUE",
    data: 1021660076
  },
  {
    value: "1533 ST NICHOLAS AVENUE",
    data: 1021660076
  },
  {
    value: "1533 YORK AVENUE",
    data: 1015610021
  },
  {
    value: "1533 YORK AVENUE",
    data: 1015610021
  },
  {
    value: "1534 3 AVENUE",
    data: 1015150035
  },
  {
    value: "1534 MADISON AVENUE",
    data: 1016100015
  },
  {
    value: "1534 ST NICHOLAS AVENUE",
    data: 1021570075
  },
  {
    value: "1534 ST NICHOLAS AVENUE",
    data: 1021570075
  },
  {
    value: "1535 BROADWAY",
    data: 1010170029
  },
  {
    value: "1536 3 AVENUE",
    data: 1015150036
  },
  {
    value: "1536 AMSTERDAM AVENUE",
    data: 1019880109
  },
  {
    value: "1536 AMSTERDAM AVENUE",
    data: 1019880109
  },
  {
    value: "1536 MADISON AVENUE",
    data: 1016100016
  },
  {
    value: "1538 2 AVENUE",
    data: 1015430001
  },
  {
    value: "1538 3 AVENUE",
    data: 1015157503
  },
  {
    value: "1538 MADISON AVENUE",
    data: 1016100116
  },
  {
    value: "1539 LEXINGTON AVENUE",
    data: 1016260021
  },
  {
    value: "1539 LEXINGTON AVENUE",
    data: 1016260021
  },
  {
    value: "154 11 AVENUE",
    data: 1006930064
  },
  {
    value: "154 5 AVENUE",
    data: 1008220031
  },
  {
    value: "154 7 AVENUE",
    data: 1007690035
  },
  {
    value: "154 8 AVENUE",
    data: 1007670074
  },
  {
    value: "154 9 AVENUE",
    data: 1007430004
  },
  {
    value: "154 ATTORNEY STREET",
    data: 1003457501
  },
  {
    value: "154 ATTORNEY STREET",
    data: 1003457501
  },
  {
    value: "154 AVENUE C",
    data: 1003790006
  },
  {
    value: "154 CHAMBERS STREET",
    data: 1001370029
  },
  {
    value: "154 CHRISTOPHER STREET",
    data: 1006040033
  },
  {
    value: "154 CHRISTOPHER STREET",
    data: 1006040033
  },
  {
    value: "154 COLUMBUS AVENUE",
    data: 1011380034
  },
  {
    value: "154 COLUMBUS AVENUE",
    data: 1011380034
  },
  {
    value: "154 DYCKMAN STREET",
    data: 1021740038
  },
  {
    value: "154 DYCKMAN STREET",
    data: 1021740038
  },
  {
    value: "154 EAST 100 STREET",
    data: 1016270049
  },
  {
    value: "154 EAST 105 STREET",
    data: 1016320050
  },
  {
    value: "154 EAST 105 STREET",
    data: 1016320050
  },
  {
    value: "154 EAST 106 STREET",
    data: 1016330051
  },
  {
    value: "154 EAST 106 STREET",
    data: 1016330051
  },
  {
    value: "154 EAST 109 STREET",
    data: 1016360050
  },
  {
    value: "154 EAST 110 STREET",
    data: 1016370050
  },
  {
    value: "154 EAST 112 STREET",
    data: 1016390049
  },
  {
    value: "154 EAST 116 STREET",
    data: 1016430050
  },
  {
    value: "154 EAST 119 STREET",
    data: 1017670052
  },
  {
    value: "154 EAST 119 STREET",
    data: 1017670052
  },
  {
    value: "154 EAST 123 STREET",
    data: 1017710048
  },
  {
    value: "154 EAST 124 STREET",
    data: 1017720150
  },
  {
    value: "154 EAST 23 STREET",
    data: 1008780048
  },
  {
    value: "154 EAST 28 STREET",
    data: 1008830054
  },
  {
    value: "154 EAST 33 STREET",
    data: 1008880049
  },
  {
    value: "154 EAST 37 STREET",
    data: 1008920052
  },
  {
    value: "154 EAST 38 STREET",
    data: 1008930055
  },
  {
    value: "154 EAST 39 STREET",
    data: 1008940051
  },
  {
    value: "154 EAST 46 STREET",
    data: 1013000044
  },
  {
    value: "154 EAST 52 STREET",
    data: 1013060042
  },
  {
    value: "154 EAST 53 STREET",
    data: 1013070043
  },
  {
    value: "154 EAST 55 STREET",
    data: 1013090043
  },
  {
    value: "154 EAST 61 STREET",
    data: 1013950047
  },
  {
    value: "154 EAST 62 STREET",
    data: 1013960043
  },
  {
    value: "154 EAST 63 STREET",
    data: 1013970046
  },
  {
    value: "154 EAST 65 STREET",
    data: 1013990141
  },
  {
    value: "154 EAST 66 STREET",
    data: 1014000044
  },
  {
    value: "154 EAST 7 STREET",
    data: 1004020021
  },
  {
    value: "154 EAST 70 STREET",
    data: 1014040049
  },
  {
    value: "154 EAST 71 STREET",
    data: 1014050048
  },
  {
    value: "154 EAST 74 STREET",
    data: 1014080149
  },
  {
    value: "154 EAST 78 STREET",
    data: 1014120050
  },
  {
    value: "154 EAST 79 STREET",
    data: 1014130051
  },
  {
    value: "154 EAST 82 STREET",
    data: 1015100149
  },
  {
    value: "154 EAST 85 STREET",
    data: 1015130049
  },
  {
    value: "154 EAST 89 STREET",
    data: 1015170147
  },
  {
    value: "154 EAST 97 STREET",
    data: 1016240044
  },
  {
    value: "154 EAST 97 STREET",
    data: 1016240044
  },
  {
    value: "154 EAST BROADWAY",
    data: 1002830068
  },
  {
    value: "154 EAST END AVENUE",
    data: 1015830126
  },
  {
    value: "154 ELDRIDGE STREET",
    data: 1004150001
  },
  {
    value: "154 GRAND STREET",
    data: 1004720028
  },
  {
    value: "154 HAVEN AVENUE",
    data: 1021390275
  },
  {
    value: "154 LEXINGTON AVENUE",
    data: 1008850071
  },
  {
    value: "154 LUDLOW STREET",
    data: 1004110050
  },
  {
    value: "154 MADISON STREET",
    data: 1002740024
  },
  {
    value: "154 MOTT STREET",
    data: 1004700002
  },
  {
    value: "154 MOTT STREET",
    data: 1004700002
  },
  {
    value: "154 NASSAU STREET",
    data: 1001020001
  },
  {
    value: "154 ORCHARD STREET",
    data: 1004110005
  },
  {
    value: "154 ORCHARD STREET",
    data: 1004110005
  },
  {
    value: "154 PERRY STREET",
    data: 1006370025
  },
  {
    value: "154 PERRY STREET",
    data: 1006370025
  },
  {
    value: "154 READE STREET",
    data: 1001410012
  },
  {
    value: "154 STANTON STREET",
    data: 1003500037
  },
  {
    value: "154 SULLIVAN STREET",
    data: 1005180031
  },
  {
    value: "154 VERMILYEA AVENUE",
    data: 1022360024
  },
  {
    value: "154 VERMILYEA AVENUE",
    data: 1022360024
  },
  {
    value: "154 WAVERLY PLACE",
    data: 1005920056
  },
  {
    value: "154 WEST 11 STREET",
    data: 1006060034
  },
  {
    value: "154 WEST 119 STREET",
    data: 1019030157
  },
  {
    value: "154 WEST 120 STREET",
    data: 1019040154
  },
  {
    value: "154 WEST 121 STREET",
    data: 1019050057
  },
  {
    value: "154 WEST 122 STREET",
    data: 1019060055
  },
  {
    value: "154 WEST 123 STREET",
    data: 1019070056
  },
  {
    value: "154 WEST 127 STREET",
    data: 1019110056
  },
  {
    value: "154 WEST 128 STREET",
    data: 1019120055
  },
  {
    value: "154 WEST 13 STREET",
    data: 1006080012
  },
  {
    value: "154 WEST 130 STREET",
    data: 1019140054
  },
  {
    value: "154 WEST 131 STREET",
    data: 1019150058
  },
  {
    value: "154 WEST 132 STREET",
    data: 1019160054
  },
  {
    value: "154 WEST 133 STREET",
    data: 1019170054
  },
  {
    value: "154 WEST 136 STREET",
    data: 1019200054
  },
  {
    value: "154 WEST 14 STREET",
    data: 1006090007
  },
  {
    value: "154 WEST 15 STREET",
    data: 1007900066
  },
  {
    value: "154 WEST 15 STREET",
    data: 1007900066
  },
  {
    value: "154 WEST 17 STREET",
    data: 1007920066
  },
  {
    value: "154 WEST 18 STREET",
    data: 1007930067
  },
  {
    value: "154 WEST 18 STREET",
    data: 1007930067
  },
  {
    value: "154 WEST 27 STREET",
    data: 1008020071
  },
  {
    value: "154 WEST 29 STREET",
    data: 1008040068
  },
  {
    value: "154 WEST 55 STREET",
    data: 1010070058
  },
  {
    value: "154 WEST 71 STREET",
    data: 1011420161
  },
  {
    value: "154 WEST 73 STREET",
    data: 1011440054
  },
  {
    value: "154 WEST 74 STREET",
    data: 1011450055
  },
  {
    value: "154 WEST 75 STREET",
    data: 1011460057
  },
  {
    value: "154 WEST 76 STREET",
    data: 1011470053
  },
  {
    value: "154 WEST 77 STREET",
    data: 1011480054
  },
  {
    value: "154 WEST 84 STREET",
    data: 1012140055
  },
  {
    value: "154 WEST 84 STREET",
    data: 1012140055
  },
  {
    value: "154 WEST 88 STREET",
    data: 1012180050
  },
  {
    value: "154 WEST 92 STREET",
    data: 1012220156
  },
  {
    value: "154 WEST 94 STREET",
    data: 1012240053
  },
  {
    value: "1540 1 AVENUE",
    data: 1015600001
  },
  {
    value: "1540 1 AVENUE",
    data: 1015600001
  },
  {
    value: "1540 2 AVENUE",
    data: 1015430002
  },
  {
    value: "1540 AMSTERDAM AVENUE",
    data: 1019880200
  },
  {
    value: "1540 BROADWAY",
    data: 1009987501
  },
  {
    value: "1540 ST NICHOLAS AVENUE",
    data: 1021580001
  },
  {
    value: "1540 ST NICHOLAS AVENUE",
    data: 1021580001
  },
  {
    value: "1540 YORK AVENUE",
    data: 1015780001
  },
  {
    value: "1540 YORK AVENUE",
    data: 1015780001
  },
  {
    value: "1540R 2 AVENUE",
    data: 1015430104
  },
  {
    value: "1541 ST NICHOLAS AVENUE",
    data: 1021680023
  },
  {
    value: "1542 2 AVENUE",
    data: 1015430003
  },
  {
    value: "1542 MADISON AVENUE",
    data: 1016100017
  },
  {
    value: "1543 2 AVENUE",
    data: 1015260021
  },
  {
    value: "1543 2 AVENUE",
    data: 1015260021
  },
  {
    value: "1544 2 AVENUE",
    data: 1015430004
  },
  {
    value: "1544 MADISON AVENUE",
    data: 1016100055
  },
  {
    value: "1545 MADISON AVENUE",
    data: 1016100023
  },
  {
    value: "1545 MADISON AVENUE",
    data: 1016100023
  },
  {
    value: "1545 ST NICHOLAS AVENUE",
    data: 1021680021
  },
  {
    value: "1546 2 AVENUE",
    data: 1015430052
  },
  {
    value: "1546 MADISON AVENUE",
    data: 1016100056
  },
  {
    value: "1546 MADISON AVENUE",
    data: 1016100056
  },
  {
    value: "1546 PARK AVENUE",
    data: 1016170037
  },
  {
    value: "1548 2 AVENUE",
    data: 1015430151
  },
  {
    value: "1548 MADISON AVENUE",
    data: 1016100057
  },
  {
    value: "1548 ST NICHOLAS AVENUE",
    data: 1021580007
  },
  {
    value: "1548 ST NICHOLAS AVENUE",
    data: 1021580007
  },
  {
    value: "1549 ST NICHOLAS AVENUE",
    data: 1021680019
  },
  {
    value: "1549 YORK AVENUE",
    data: 1015620021
  },
  {
    value: "155 2 AVENUE",
    data: 1004650049
  },
  {
    value: "155 8 AVENUE",
    data: 1007410036
  },
  {
    value: "155 ALLEN STREET",
    data: 1004160028
  },
  {
    value: "155 ATTORNEY STREET",
    data: 1003500069
  },
  {
    value: "155 ATTORNEY STREET",
    data: 1003500069
  },
  {
    value: "155 AUDUBON AVENUE",
    data: 1021290037
  },
  {
    value: "155 AUDUBON AVENUE",
    data: 1021290037
  },
  {
    value: "155 AVENUE A",
    data: 1004370025
  },
  {
    value: "155 AVENUE B",
    data: 1003920007
  },
  {
    value: "155 AVENUE B",
    data: 1003920007
  },
  {
    value: "155 AVENUE C",
    data: 1003920033
  },
  {
    value: "155 AVENUE C",
    data: 1003920033
  },
  {
    value: "155 BLEECKER STREET",
    data: 1005390035
  },
  {
    value: "155 BOWERY",
    data: 1004240002
  },
  {
    value: "155 CEDAR STREET",
    data: 1000560020
  },
  {
    value: "155 CHAMBERS STREET",
    data: 1001400009
  },
  {
    value: "155 CHRYSTIE STREET",
    data: 1004250037
  },
  {
    value: "155 DUANE STREET",
    data: 1001440012
  },
  {
    value: "155 EAST 103 STREET",
    data: 1016310025
  },
  {
    value: "155 EAST 103 STREET",
    data: 1016310025
  },
  {
    value: "155 EAST 104 STREET",
    data: 1016320023
  },
  {
    value: "155 EAST 104 STREET",
    data: 1016320023
  },
  {
    value: "155 EAST 106 STREET",
    data: 1016340026
  },
  {
    value: "155 EAST 107 STREET",
    data: 1016350025
  },
  {
    value: "155 EAST 108 STREET",
    data: 1016360124
  },
  {
    value: "155 EAST 109 STREET",
    data: 1016370023
  },
  {
    value: "155 EAST 109 STREET",
    data: 1016370023
  },
  {
    value: "155 EAST 115 STREET",
    data: 1016430122
  },
  {
    value: "155 EAST 116 STREET",
    data: 1016440024
  },
  {
    value: "155 EAST 117 STREET",
    data: 1016450124
  },
  {
    value: "155 EAST 121 STREET",
    data: 1017700027
  },
  {
    value: "155 EAST 123 STREET",
    data: 1017720023
  },
  {
    value: "155 EAST 126 STREET",
    data: 1017750028
  },
  {
    value: "155 EAST 2 STREET",
    data: 1003970011
  },
  {
    value: "155 EAST 2 STREET",
    data: 1003970011
  },
  {
    value: "155 EAST 22 STREET",
    data: 1008780034
  },
  {
    value: "155 EAST 23 STREET",
    data: 1008790033
  },
  {
    value: "155 EAST 23 STREET",
    data: 1008799033
  },
  {
    value: "155 EAST 23 STREET",
    data: 1008790033
  },
  {
    value: "155 EAST 29 STREET",
    data: 1008850042
  },
  {
    value: "155 EAST 29 STREET",
    data: 1008850042
  },
  {
    value: "155 EAST 30 STREET",
    data: 1008860041
  },
  {
    value: "155 EAST 30 STREET",
    data: 1008869041
  },
  {
    value: "155 EAST 30 STREET",
    data: 1008860041
  },
  {
    value: "155 EAST 33 STREET",
    data: 1008890030
  },
  {
    value: "155 EAST 34 STREET",
    data: 1008907501
  },
  {
    value: "155 EAST 34 STREET",
    data: 1008907501
  },
  {
    value: "155 EAST 35 STREET",
    data: 1008910034
  },
  {
    value: "155 EAST 37 STREET",
    data: 1008930036
  },
  {
    value: "155 EAST 38 STREET",
    data: 1008947502
  },
  {
    value: "155 EAST 38 STREET",
    data: 1008947502
  },
  {
    value: "155 EAST 42 STREET",
    data: 1012970031
  },
  {
    value: "155 EAST 49 STREET",
    data: 1013040029
  },
  {
    value: "155 EAST 49 STREET",
    data: 1013040029
  },
  {
    value: "155 EAST 50 STREET",
    data: 1013050033
  },
  {
    value: "155 EAST 52 STREET",
    data: 1013070029
  },
  {
    value: "155 EAST 52 STREET",
    data: 1013070029
  },
  {
    value: "155 EAST 55 STREET",
    data: 1013100027
  },
  {
    value: "155 EAST 56 STREET",
    data: 1013110029
  },
  {
    value: "155 EAST 60 STREET",
    data: 1013950026
  },
  {
    value: "155 EAST 62 STREET",
    data: 1013970027
  },
  {
    value: "155 EAST 70 STREET",
    data: 1014050023
  },
  {
    value: "155 EAST 71 STREET",
    data: 1014060023
  },
  {
    value: "155 EAST 79 STREET",
    data: 1015087502
  },
  {
    value: "155 EAST 80 STREET",
    data: 1015090122
  },
  {
    value: "155 EAST 82 STREET",
    data: 1015110025
  },
  {
    value: "155 EAST 84 STREET",
    data: 1015130124
  },
  {
    value: "155 EAST 84 STREET",
    data: 1015130124
  },
  {
    value: "155 EAST 85 STREET",
    data: 1015140025
  },
  {
    value: "155 EAST 85 STREET",
    data: 1015140025
  },
  {
    value: "155 EAST 88 STREET",
    data: 1015170025
  },
  {
    value: "155 EAST 88 STREET",
    data: 1015170025
  },
  {
    value: "155 EAST 91 STREET",
    data: 1015200025
  },
  {
    value: "155 EAST 91 STREET",
    data: 1015200025
  },
  {
    value: "155 EAST 92 STREET",
    data: 1015210026
  },
  {
    value: "155 EAST 92 STREET",
    data: 1015210026
  },
  {
    value: "155 EAST 96 STREET",
    data: 1016240021
  },
  {
    value: "155 EAST 96 STREET",
    data: 1016240021
  },
  {
    value: "155 EAST 99 STREET",
    data: 1016270024
  },
  {
    value: "155 EAST 99 STREET",
    data: 1016270024
  },
  {
    value: "155 FRANKLIN STREET",
    data: 1001797503
  },
  {
    value: "155 FRANKLIN STREET",
    data: 1001797503
  },
  {
    value: "155 GRAND STREET",
    data: 1002340009
  },
  {
    value: "155 HENRY STREET",
    data: 1002847501
  },
  {
    value: "155 HENRY STREET",
    data: 1002847501
  },
  {
    value: "155 LENOX AVENUE",
    data: 1019020035
  },
  {
    value: "155 LENOX AVENUE",
    data: 1019020035
  },
  {
    value: "155 LEXINGTON AVENUE",
    data: 1008850065
  },
  {
    value: "155 MERCER STREET",
    data: 1005130028
  },
  {
    value: "155 ORCHARD STREET",
    data: 1004160063
  },
  {
    value: "155 ORCHARD STREET",
    data: 1004160063
  },
  {
    value: "155 PERRY STREET",
    data: 1006377501
  },
  {
    value: "155 PERRY STREET",
    data: 1006377501
  },
  {
    value: "155 PRINCE STREET",
    data: 1005160040
  },
  {
    value: "155 RIDGE STREET",
    data: 1003450020
  },
  {
    value: "155 RIDGE STREET",
    data: 1003450020
  },
  {
    value: "155 RIVERSIDE DRIVE",
    data: 1012490057
  },
  {
    value: "155 RIVERSIDE DRIVE",
    data: 1012490057
  },
  {
    value: "155 RIVINGTON STREET",
    data: 1003480017
  },
  {
    value: "155 SUFFOLK STREET",
    data: 1003550069
  },
  {
    value: "155 SULLIVAN STREET",
    data: 1005170011
  },
  {
    value: "155 THOMPSON STREET",
    data: 1005170022
  },
  {
    value: "155 WEST 106 STREET",
    data: 1018610007
  },
  {
    value: "155 WEST 106 STREET",
    data: 1018610007
  },
  {
    value: "155 WEST 117 STREET",
    data: 1019020006
  },
  {
    value: "155 WEST 118 STREET",
    data: 1019030005
  },
  {
    value: "155 WEST 119 STREET",
    data: 1019040007
  },
  {
    value: "155 WEST 12 STREET",
    data: 1006080067
  },
  {
    value: "155 WEST 120 STREET",
    data: 1019050006
  },
  {
    value: "155 WEST 121 STREET",
    data: 1019060007
  },
  {
    value: "155 WEST 122 STREET",
    data: 1019077504
  },
  {
    value: "155 WEST 123 STREET",
    data: 1019087501
  },
  {
    value: "155 WEST 126 STREET",
    data: 1019117502
  },
  {
    value: "155 WEST 129 STREET",
    data: 1019140010
  },
  {
    value: "155 WEST 13 STREET",
    data: 1006090073
  },
  {
    value: "155 WEST 131 STREET",
    data: 1019160109
  },
  {
    value: "155 WEST 136 STREET",
    data: 1019210010
  },
  {
    value: "155 WEST 142 STREET",
    data: 1020110008
  },
  {
    value: "155 WEST 143 STREET",
    data: 1020120009
  },
  {
    value: "155 WEST 145 STREET",
    data: 1020140010
  },
  {
    value: "155 WEST 145 STREET",
    data: 1020140010
  },
  {
    value: "155 WEST 15 STREET",
    data: 1007910009
  },
  {
    value: "155 WEST 15 STREET",
    data: 1007910009
  },
  {
    value: "155 WEST 18 STREET",
    data: 1007940011
  },
  {
    value: "155 WEST 18 STREET",
    data: 1007940011
  },
  {
    value: "155 WEST 19 STREET",
    data: 1007950010
  },
  {
    value: "155 WEST 23 STREET",
    data: 1007990012
  },
  {
    value: "155 WEST 29 STREET",
    data: 1008050007
  },
  {
    value: "155 WEST 33 STREET",
    data: 1008090008
  },
  {
    value: "155 WEST 35 STREET",
    data: 1008110009
  },
  {
    value: "155 WEST 46 STREET",
    data: 1009990008
  },
  {
    value: "155 WEST 48 STREET",
    data: 1010010006
  },
  {
    value: "155 WEST 60 STREET",
    data: 1011320020
  },
  {
    value: "155 WEST 66 STREET",
    data: 1011387503
  },
  {
    value: "155 WEST 68 STREET",
    data: 1011407501
  },
  {
    value: "155 WEST 68 STREET",
    data: 1011407501
  },
  {
    value: "155 WEST 70 STREET",
    data: 1011427502
  },
  {
    value: "155 WEST 70 STREET",
    data: 1011427502
  },
  {
    value: "155 WEST 71 STREET",
    data: 1011437502
  },
  {
    value: "155 WEST 71 STREET",
    data: 1011437502
  },
  {
    value: "155 WEST 72 STREET",
    data: 1011440011
  },
  {
    value: "155 WEST 73 STREET",
    data: 1011450011
  },
  {
    value: "155 WEST 74 STREET",
    data: 1011460106
  },
  {
    value: "155 WEST 75 STREET",
    data: 1011470107
  },
  {
    value: "155 WEST 76 STREET",
    data: 1011480011
  },
  {
    value: "155 WEST 78 STREET",
    data: 1011500009
  },
  {
    value: "155 WEST 80 STREET",
    data: 1012110012
  },
  {
    value: "155 WEST 81 STREET",
    data: 1012120110
  },
  {
    value: "155 WEST 81 STREET",
    data: 1012120110
  },
  {
    value: "155 WEST 82 STREET",
    data: 1012130006
  },
  {
    value: "155 WEST 83 STREET",
    data: 1012140012
  },
  {
    value: "155 WEST 83 STREET",
    data: 1012140012
  },
  {
    value: "155 WEST 85 STREET",
    data: 1012160108
  },
  {
    value: "155 WEST 87 STREET",
    data: 1012180114
  },
  {
    value: "155 WEST 88 STREET",
    data: 1012190014
  },
  {
    value: "155 WEST 91 STREET",
    data: 1012220009
  },
  {
    value: "155 WEST 93 STREET",
    data: 1012247501
  },
  {
    value: "155 WEST 95 STREET",
    data: 1012260110
  },
  {
    value: "155 WOOSTER STREET",
    data: 1005150025
  },
  {
    value: "1550 3 AVENUE",
    data: 1015160032
  },
  {
    value: "1550 BROADWAY",
    data: 1009980061
  },
  {
    value: "1550 MADISON AVENUE",
    data: 1016100058
  },
  {
    value: "1551 2 AVENUE",
    data: 1015260025
  },
  {
    value: "1551 BROADWAY",
    data: 1010180026
  },
  {
    value: "1551 ST NICHOLAS AVENUE",
    data: 1021680015
  },
  {
    value: "1551 ST NICHOLAS AVENUE",
    data: 1021680015
  },
  {
    value: "1551 YORK AVENUE",
    data: 1015620022
  },
  {
    value: "1552 BROADWAY",
    data: 1009990001
  },
  {
    value: "1553 2 AVENUE",
    data: 1015260026
  },
  {
    value: "1553 LEXINGTON AVENUE",
    data: 1016270022
  },
  {
    value: "1553 YORK AVENUE",
    data: 1015620023
  },
  {
    value: "1553 YORK AVENUE",
    data: 1015620023
  },
  {
    value: "1555 2 AVENUE",
    data: 1015260126
  },
  {
    value: "1555 BROADWAY",
    data: 1010180027
  },
  {
    value: "1555 LEXINGTON AVENUE",
    data: 1016270021
  },
  {
    value: "1555 YORK AVENUE",
    data: 1015620024
  },
  {
    value: "1556 2 AVENUE",
    data: 1015430051
  },
  {
    value: "1556 YORK AVENUE",
    data: 1015790002
  },
  {
    value: "1557 2 AVENUE",
    data: 1015260027
  },
  {
    value: "1557 2 AVENUE",
    data: 1015260027
  },
  {
    value: "1557 BROADWAY",
    data: 1010180028
  },
  {
    value: "1557 LEXINGTON AVENUE",
    data: 1016270020
  },
  {
    value: "1558 2 AVENUE",
    data: 1015430050
  },
  {
    value: "1558 3 AVENUE",
    data: 1015160037
  },
  {
    value: "1559 2 AVENUE",
    data: 1015260028
  },
  {
    value: "1559 LEXINGTON AVENUE",
    data: 1016270053
  },
  {
    value: "156 1 AVENUE",
    data: 1004370005
  },
  {
    value: "156 1 AVENUE",
    data: 1004370005
  },
  {
    value: "156 12 AVENUE",
    data: 1006690038
  },
  {
    value: "156 2 AVENUE",
    data: 1004510006
  },
  {
    value: "156 2 AVENUE",
    data: 1004510006
  },
  {
    value: "156 7 AVENUE",
    data: 1007690036
  },
  {
    value: "156 7 AVENUE SOUTH",
    data: 1006120028
  },
  {
    value: "156 8 AVENUE",
    data: 1007670073
  },
  {
    value: "156 9 AVENUE",
    data: 1007430083
  },
  {
    value: "156 AVENUE C",
    data: 1003790007
  },
  {
    value: "156 BLEECKER STREET",
    data: 1005257501
  },
  {
    value: "156 BOWERY",
    data: 1004780039
  },
  {
    value: "156 CANAL STREET",
    data: 1002020015
  },
  {
    value: "156 CHAMBERS STREET",
    data: 1001370028
  },
  {
    value: "156 COLUMBUS AVENUE",
    data: 1011380035
  },
  {
    value: "156 DELANCEY STREET",
    data: 1003480033
  },
  {
    value: "156 EAST 100 STREET",
    data: 1016270048
  },
  {
    value: "156 EAST 102 STREET",
    data: 1016290050
  },
  {
    value: "156 EAST 105 STREET",
    data: 1016320048
  },
  {
    value: "156 EAST 107 STREET",
    data: 1016340048
  },
  {
    value: "156 EAST 108 STREET",
    data: 1016350048
  },
  {
    value: "156 EAST 109 STREET",
    data: 1016360049
  },
  {
    value: "156 EAST 111 STREET",
    data: 1016380050
  },
  {
    value: "156 EAST 112 STREET",
    data: 1016390048
  },
  {
    value: "156 EAST 116 STREET",
    data: 1016430149
  },
  {
    value: "156 EAST 117 STREET",
    data: 1016440051
  },
  {
    value: "156 EAST 117 STREET",
    data: 1016440051
  },
  {
    value: "156 EAST 124 STREET",
    data: 1017720050
  },
  {
    value: "156 EAST 2 STREET",
    data: 1003980061
  },
  {
    value: "156 EAST 2 STREET",
    data: 1003980061
  },
  {
    value: "156 EAST 23 STREET",
    data: 1008780047
  },
  {
    value: "156 EAST 30 STREET",
    data: 1008850050
  },
  {
    value: "156 EAST 30 STREET",
    data: 1008850050
  },
  {
    value: "156 EAST 33 STREET",
    data: 1008880047
  },
  {
    value: "156 EAST 34 STREET",
    data: 1008890052
  },
  {
    value: "156 EAST 36 STREET",
    data: 1008910048
  },
  {
    value: "156 EAST 37 STREET",
    data: 1008920049
  },
  {
    value: "156 EAST 37 STREET",
    data: 1008920049
  },
  {
    value: "156 EAST 39 STREET",
    data: 1008940050
  },
  {
    value: "156 EAST 61 STREET",
    data: 1013950046
  },
  {
    value: "156 EAST 62 STREET",
    data: 1013960042
  },
  {
    value: "156 EAST 64 STREET",
    data: 1013980052
  },
  {
    value: "156 EAST 65 STREET",
    data: 1013990041
  },
  {
    value: "156 EAST 66 STREET",
    data: 1014000143
  },
  {
    value: "156 EAST 7 STREET",
    data: 1004020023
  },
  {
    value: "156 EAST 7 STREET",
    data: 1004020023
  },
  {
    value: "156 EAST 71 STREET",
    data: 1014050047
  },
  {
    value: "156 EAST 74 STREET",
    data: 1014080049
  },
  {
    value: "156 EAST 78 STREET",
    data: 1014120049
  },
  {
    value: "156 EAST 79 STREET",
    data: 1014130050
  },
  {
    value: "156 EAST 79 STREET",
    data: 1014130050
  },
  {
    value: "156 EAST 81 STREET",
    data: 1015090046
  },
  {
    value: "156 EAST 82 STREET",
    data: 1015100049
  },
  {
    value: "156 EAST 83 STREET",
    data: 1015110046
  },
  {
    value: "156 EAST 85 STREET",
    data: 1015130047
  },
  {
    value: "156 EAST 85 STREET",
    data: 1015130047
  },
  {
    value: "156 EAST 89 STREET",
    data: 1015170047
  },
  {
    value: "156 EAST 97 STREET",
    data: 1016240043
  },
  {
    value: "156 EAST 97 STREET",
    data: 1016240043
  },
  {
    value: "156 EAST BROADWAY",
    data: 1002830069
  },
  {
    value: "156 FRANKLIN STREET",
    data: 1001890010
  },
  {
    value: "156 FRONT STREET",
    data: 1000710001
  },
  {
    value: "156 FRONT STREET",
    data: 1000710001
  },
  {
    value: "156 LEROY STREET",
    data: 1006010010
  },
  {
    value: "156 LEROY STREET",
    data: 1006010010
  },
  {
    value: "156 MOTT STREET",
    data: 1004700003
  },
  {
    value: "156 NAGLE AVENUE",
    data: 1021740066
  },
  {
    value: "156 ORCHARD STREET",
    data: 1004110006
  },
  {
    value: "156 ORCHARD STREET",
    data: 1004110006
  },
  {
    value: "156 PERRY STREET",
    data: 1006370021
  },
  {
    value: "156 PRINCE STREET",
    data: 1005020020
  },
  {
    value: "156 PRINCE STREET",
    data: 1005020020
  },
  {
    value: "156 READE STREET",
    data: 1001410013
  },
  {
    value: "156 RIVINGTON STREET",
    data: 1003490033
  },
  {
    value: "156 SHERMAN AVENUE",
    data: 1022250036
  },
  {
    value: "156 SHERMAN AVENUE",
    data: 1022250036
  },
  {
    value: "156 STANTON STREET",
    data: 1003500036
  },
  {
    value: "156 SULLIVAN STREET",
    data: 1005180030
  },
  {
    value: "156 SULLIVAN STREET",
    data: 1005180030
  },
  {
    value: "156 WAVERLY PLACE",
    data: 1005920055
  },
  {
    value: "156 WEST 106 STREET",
    data: 1018600057
  },
  {
    value: "156 WEST 106 STREET",
    data: 1018600057
  },
  {
    value: "156 WEST 11 STREET",
    data: 1006060033
  },
  {
    value: "156 WEST 119 STREET",
    data: 1019030058
  },
  {
    value: "156 WEST 120 STREET",
    data: 1019040055
  },
  {
    value: "156 WEST 121 STREET",
    data: 1019050157
  },
  {
    value: "156 WEST 121 STREET",
    data: 1019050157
  },
  {
    value: "156 WEST 122 STREET",
    data: 1019060056
  },
  {
    value: "156 WEST 123 STREET",
    data: 1019070057
  },
  {
    value: "156 WEST 128 STREET",
    data: 1019120155
  },
  {
    value: "156 WEST 13 STREET",
    data: 1006080011
  },
  {
    value: "156 WEST 130 STREET",
    data: 1019140154
  },
  {
    value: "156 WEST 131 STREET",
    data: 1019150059
  },
  {
    value: "156 WEST 132 STREET",
    data: 1019160154
  },
  {
    value: "156 WEST 133 STREET",
    data: 1019170154
  },
  {
    value: "156 WEST 136 STREET",
    data: 1019200154
  },
  {
    value: "156 WEST 144 STREET",
    data: 1020120056
  },
  {
    value: "156 WEST 144 STREET",
    data: 1020120056
  },
  {
    value: "156 WEST 15 STREET",
    data: 1007900067
  },
  {
    value: "156 WEST 15 STREET",
    data: 1007900067
  },
  {
    value: "156 WEST 20 STREET",
    data: 1007950071
  },
  {
    value: "156 WEST 22 STREET",
    data: 1007970073
  },
  {
    value: "156 WEST 228 STREET",
    data: 1022150324
  },
  {
    value: "156 WEST 29 STREET",
    data: 1008040069
  },
  {
    value: "156 WEST 44 STREET",
    data: 1009960056
  },
  {
    value: "156 WEST 44 STREET",
    data: 1009960056
  },
  {
    value: "156 WEST 48 STREET",
    data: 1010000056
  },
  {
    value: "156 WEST 72 STREET",
    data: 1011430155
  },
  {
    value: "156 WEST 73 STREET",
    data: 1011440055
  },
  {
    value: "156 WEST 74 STREET",
    data: 1011450155
  },
  {
    value: "156 WEST 74 STREET",
    data: 1011450155
  },
  {
    value: "156 WEST 75 STREET",
    data: 1011460058
  },
  {
    value: "156 WEST 76 STREET",
    data: 1011470054
  },
  {
    value: "156 WEST 77 STREET",
    data: 1011480055
  },
  {
    value: "156 WEST 86 STREET",
    data: 1012160054
  },
  {
    value: "156 WEST 86 STREET",
    data: 1012160054
  },
  {
    value: "156 WEST 88 STREET",
    data: 1012180051
  },
  {
    value: "156 WEST 92 STREET",
    data: 1012220057
  },
  {
    value: "156 WEST 94 STREET",
    data: 1012240054
  },
  {
    value: "156 WEST 95 STREET",
    data: 1012257503
  },
  {
    value: "156 WILLIAM STREET",
    data: 1000937501
  },
  {
    value: "1560 2 AVENUE",
    data: 1015430049
  },
  {
    value: "1560 2 AVENUE",
    data: 1015430049
  },
  {
    value: "1560 BROADWAY",
    data: 1009990003
  },
  {
    value: "1560 MADISON AVENUE",
    data: 1016110015
  },
  {
    value: "1561 2 AVENUE",
    data: 1015270021
  },
  {
    value: "1561 2 AVENUE",
    data: 1015270021
  },
  {
    value: "1561 LEXINGTON AVENUE",
    data: 1016270052
  },
  {
    value: "1561 ST NICHOLAS AVENUE",
    data: 1021680051
  },
  {
    value: "1561 ST NICHOLAS AVENUE",
    data: 1021680051
  },
  {
    value: "1562 1 AVENUE",
    data: 1015610001
  },
  {
    value: "1562 1 AVENUE",
    data: 1015610001
  },
  {
    value: "1562 2 AVENUE",
    data: 1015440001
  },
  {
    value: "1562 3 AVENUE",
    data: 1015160039
  },
  {
    value: "1562 3 AVENUE",
    data: 1015160039
  },
  {
    value: "1562 BROADWAY",
    data: 1009990065
  },
  {
    value: "1562 ST NICHOLAS AVENUE",
    data: 1021580033
  },
  {
    value: "1562 YORK AVENUE",
    data: 1015790049
  },
  {
    value: "1562 YORK AVENUE",
    data: 1015790049
  },
  {
    value: "156-20 RIVERSIDE DRIVE WEST",
    data: 1021340206
  },
  {
    value: "156-20 RIVERSIDE DRIVE WEST",
    data: 1021340206
  },
  {
    value: "1563 LEXINGTON AVENUE",
    data: 1016270051
  },
  {
    value: "1564 BROADWAY",
    data: 1009990062
  },
  {
    value: "1565 2 AVENUE",
    data: 1015270023
  },
  {
    value: "1565 BROADWAY",
    data: 1010180139
  },
  {
    value: "1565 LEXINGTON AVENUE",
    data: 1016270050
  },
  {
    value: "1565 LEXINGTON AVENUE",
    data: 1016270050
  },
  {
    value: "1565 MADISON AVENUE",
    data: 1016100160
  },
  {
    value: "1565 YORK AVENUE",
    data: 1015630022
  },
  {
    value: "1566 2 AVENUE",
    data: 1015440003
  },
  {
    value: "1566 3 AVENUE",
    data: 1015160040
  },
  {
    value: "1567 2 AVENUE",
    data: 1015270123
  },
  {
    value: "1567 BROADWAY",
    data: 1010180128
  },
  {
    value: "1567 BROADWAY",
    data: 1010187501
  },
  {
    value: "1567 LEXINGTON AVENUE",
    data: 1016280022
  },
  {
    value: "1567 LEXINGTON AVENUE",
    data: 1016280022
  },
  {
    value: "1567 YORK AVENUE",
    data: 1015630023
  },
  {
    value: "1568 2 AVENUE",
    data: 1015440004
  },
  {
    value: "1568 3 AVENUE",
    data: 1015170033
  },
  {
    value: "1568 3 AVENUE",
    data: 1015170033
  },
  {
    value: "1568 BROADWAY",
    data: 1009990061
  },
  {
    value: "1568 BROADWAY",
    data: 1009998062
  },
  {
    value: "1568 BROADWAY",
    data: 1009999062
  },
  {
    value: "1569 2 AVENUE",
    data: 1015270024
  },
  {
    value: "1569 3 AVENUE",
    data: 1015340001
  },
  {
    value: "1569 LEXINGTON AVENUE",
    data: 1016280020
  },
  {
    value: "1569 LEXINGTON AVENUE",
    data: 1016280020
  },
  {
    value: "1569 YORK AVENUE",
    data: 1015630024
  },
  {
    value: "1569 YORK AVENUE",
    data: 1015630024
  },
  {
    value: "157 1/2 BOWERY",
    data: 1004240004
  },
  {
    value: "157 2 AVENUE",
    data: 1004650048
  },
  {
    value: "157 3 AVENUE",
    data: 1008970035
  },
  {
    value: "157 3 AVENUE",
    data: 1008970035
  },
  {
    value: "157 ALLEN STREET",
    data: 1004160027
  },
  {
    value: "157 ALLEN STREET",
    data: 1004160027
  },
  {
    value: "157 AVENUE C",
    data: 1003920032
  },
  {
    value: "157 BLEECKER STREET",
    data: 1005390036
  },
  {
    value: "157 BOWERY",
    data: 1004240003
  },
  {
    value: "157 BROOME STREET",
    data: 1003410075
  },
  {
    value: "157 BROOME STREET",
    data: 1003410075
  },
  {
    value: "157 CHAMBERS STREET",
    data: 1001407505
  },
  {
    value: "157 CHAMBERS STREET",
    data: 1001407505
  },
  {
    value: "157 CHRISTOPHER STREET",
    data: 1006300029
  },
  {
    value: "157 CHRYSTIE STREET",
    data: 1004250036
  },
  {
    value: "157 DUANE STREET",
    data: 1001440013
  },
  {
    value: "157 EAST 104 STREET",
    data: 1016320024
  },
  {
    value: "157 EAST 106 STREET",
    data: 1016340027
  },
  {
    value: "157 EAST 108 STREET",
    data: 1016360025
  },
  {
    value: "157 EAST 109 STREET",
    data: 1016370024
  },
  {
    value: "157 EAST 115 STREET",
    data: 1016430123
  },
  {
    value: "157 EAST 115 STREET",
    data: 1016430123
  },
  {
    value: "157 EAST 116 STREET",
    data: 1016440124
  },
  {
    value: "157 EAST 118 STREET",
    data: 1017670026
  },
  {
    value: "157 EAST 121 STREET",
    data: 1017700028
  },
  {
    value: "157 EAST 123 STREET",
    data: 1017720024
  },
  {
    value: "157 EAST 18 STREET",
    data: 1008747501
  },
  {
    value: "157 EAST 18 STREET",
    data: 1008747501
  },
  {
    value: "157 EAST 2 STREET",
    data: 1003970012
  },
  {
    value: "157 EAST 2 STREET",
    data: 1003970012
  },
  {
    value: "157 EAST 25 STREET",
    data: 1008810039
  },
  {
    value: "157 EAST 28 STREET",
    data: 1008840036
  },
  {
    value: "157 EAST 3 STREET",
    data: 1003990058
  },
  {
    value: "157 EAST 3 STREET",
    data: 1003990058
  },
  {
    value: "157 EAST 32 STREET",
    data: 1008887501
  },
  {
    value: "157 EAST 32 STREET",
    data: 1008887501
  },
  {
    value: "157 EAST 33 STREET",
    data: 1008890031
  },
  {
    value: "157 EAST 35 STREET",
    data: 1008910035
  },
  {
    value: "157 EAST 37 STREET",
    data: 1008930037
  },
  {
    value: "157 EAST 55 STREET",
    data: 1013100032
  },
  {
    value: "157 EAST 57 STREET",
    data: 1013120033
  },
  {
    value: "157 EAST 57 STREET",
    data: 1013120033
  },
  {
    value: "157 EAST 61 STREET",
    data: 1013960028
  },
  {
    value: "157 EAST 62 STREET",
    data: 1013970127
  },
  {
    value: "157 EAST 63 STREET",
    data: 1013980028
  },
  {
    value: "157 EAST 65 STREET",
    data: 1014000029
  },
  {
    value: "157 EAST 67 STREET",
    data: 1014020029
  },
  {
    value: "157 EAST 70 STREET",
    data: 1014050024
  },
  {
    value: "157 EAST 71 STREET",
    data: 1014060024
  },
  {
    value: "157 EAST 72 STREET",
    data: 1014077501
  },
  {
    value: "157 EAST 72 STREET",
    data: 1014077501
  },
  {
    value: "157 EAST 74 STREET",
    data: 1014097501
  },
  {
    value: "157 EAST 74 STREET",
    data: 1014097501
  },
  {
    value: "157 EAST 75 STREET",
    data: 1014100024
  },
  {
    value: "157 EAST 75 STREET",
    data: 1014100024
  },
  {
    value: "157 EAST 78 STREET",
    data: 1014130024
  },
  {
    value: "157 EAST 80 STREET",
    data: 1015090023
  },
  {
    value: "157 EAST 81 STREET",
    data: 1015100027
  },
  {
    value: "157 EAST 81 STREET",
    data: 1015100027
  },
  {
    value: "157 EAST 82 STREET",
    data: 1015110026
  },
  {
    value: "157 EAST 84 STREET",
    data: 1015137503
  },
  {
    value: "157 EAST 85 STREET",
    data: 1015140026
  },
  {
    value: "157 EAST 85 STREET",
    data: 1015140026
  },
  {
    value: "157 EAST 86 STREET",
    data: 1015150026
  },
  {
    value: "157 EAST 89 STREET",
    data: 1015180027
  },
  {
    value: "157 EAST 89 STREET",
    data: 1015180027
  },
  {
    value: "157 EAST 94 STREET",
    data: 1015230024
  },
  {
    value: "157 EAST 99 STREET",
    data: 1016270025
  },
  {
    value: "157 EAST 99 STREET",
    data: 1016270025
  },
  {
    value: "157 EAST HOUSTON STREET",
    data: 1004170013
  },
  {
    value: "157 EDGECOMBE AVENUE",
    data: 1020510087
  },
  {
    value: "157 EDGECOMBE AVENUE",
    data: 1020510087
  },
  {
    value: "157 HUDSON STREET",
    data: 1002157505
  },
  {
    value: "157 HUDSON STREET",
    data: 1002157505
  },
  {
    value: "157 LEXINGTON AVENUE",
    data: 1008850063
  },
  {
    value: "157 LEXINGTON AVENUE",
    data: 1008850063
  },
  {
    value: "157 LUDLOW STREET",
    data: 1004117502
  },
  {
    value: "157 LUDLOW STREET",
    data: 1004117502
  },
  {
    value: "157 MADISON STREET",
    data: 1002730001
  },
  {
    value: "157 MANHATTAN AVENUE",
    data: 1018430015
  },
  {
    value: "157 MANHATTAN AVENUE",
    data: 1018430015
  },
  {
    value: "157 MOTT STREET",
    data: 1004710051
  },
  {
    value: "157 ORCHARD STREET",
    data: 1004160062
  },
  {
    value: "157 ORCHARD STREET",
    data: 1004160062
  },
  {
    value: "157 PRINCE STREET",
    data: 1005160041
  },
  {
    value: "157 RIVINGTON STREET",
    data: 1003480018
  },
  {
    value: "157 RIVINGTON STREET",
    data: 1003480018
  },
  {
    value: "157 SPRING STREET",
    data: 1005010039
  },
  {
    value: "157 STANTON STREET",
    data: 1003490015
  },
  {
    value: "157 STANTON STREET",
    data: 1003490015
  },
  {
    value: "157 SUFFOLK STREET",
    data: 1003550067
  },
  {
    value: "157 SUFFOLK STREET",
    data: 1003550067
  },
  {
    value: "157 VARICK STREET",
    data: 1005800022
  },
  {
    value: "157 VERMILYEA AVENUE",
    data: 1022270010
  },
  {
    value: "157 VERMILYEA AVENUE",
    data: 1022270010
  },
  {
    value: "157 WEST 105 STREET",
    data: 1018600007
  },
  {
    value: "157 WEST 105 STREET",
    data: 1018600007
  },
  {
    value: "157 WEST 111 STREET",
    data: 1018217501
  },
  {
    value: "157 WEST 118 STREET",
    data: 1019030004
  },
  {
    value: "157 WEST 119 STREET",
    data: 1019040006
  },
  {
    value: "157 WEST 119 STREET",
    data: 1019040006
  },
  {
    value: "157 WEST 12 STREET",
    data: 1006080068
  },
  {
    value: "157 WEST 120 STREET",
    data: 1019050105
  },
  {
    value: "157 WEST 121 STREET",
    data: 1019060106
  },
  {
    value: "157 WEST 122 STREET",
    data: 1019070008
  },
  {
    value: "157 WEST 123 STREET",
    data: 1019080001
  },
  {
    value: "157 WEST 123 STREET",
    data: 1019080001
  },
  {
    value: "157 WEST 124 STREET",
    data: 1019090007
  },
  {
    value: "157 WEST 129 STREET",
    data: 1019140109
  },
  {
    value: "157 WEST 13 STREET",
    data: 1006090074
  },
  {
    value: "157 WEST 131 STREET",
    data: 1019160009
  },
  {
    value: "157 WEST 132 STREET",
    data: 1019170008
  },
  {
    value: "157 WEST 142 STREET",
    data: 1020110007
  },
  {
    value: "157 WEST 18 STREET",
    data: 1007940009
  },
  {
    value: "157 WEST 228 STREET",
    data: 1022150195
  },
  {
    value: "157 WEST 228 STREET",
    data: 1022150195
  },
  {
    value: "157 WEST 24 STREET",
    data: 1008000009
  },
  {
    value: "157 WEST 47 STREET",
    data: 1010000007
  },
  {
    value: "157 WEST 57 STREET",
    data: 1010107506
  },
  {
    value: "157 WEST 57 STREET",
    data: 1010107506
  },
  {
    value: "157 WEST 72 STREET",
    data: 1011440010
  },
  {
    value: "157 WEST 73 STREET",
    data: 1011450110
  },
  {
    value: "157 WEST 74 STREET",
    data: 1011467503
  },
  {
    value: "157 WEST 75 STREET",
    data: 1011470007
  },
  {
    value: "157 WEST 76 STREET",
    data: 1011480110
  },
  {
    value: "157 WEST 78 STREET",
    data: 1011500108
  },
  {
    value: "157 WEST 79 STREET",
    data: 1012100009
  },
  {
    value: "157 WEST 79 STREET",
    data: 1012100009
  },
  {
    value: "157 WEST 80 STREET",
    data: 1012110011
  },
  {
    value: "157 WEST 82 STREET",
    data: 1012130105
  },
  {
    value: "157 WEST 83 STREET",
    data: 1012140010
  },
  {
    value: "157 WEST 85 STREET",
    data: 1012160008
  },
  {
    value: "157 WEST 87 STREET",
    data: 1012180014
  },
  {
    value: "157 WEST 88 STREET",
    data: 1012190113
  },
  {
    value: "157 WEST 91 STREET",
    data: 1012220108
  },
  {
    value: "157 WEST 93 STREET",
    data: 1012240110
  },
  {
    value: "157 WEST 95 STREET",
    data: 1012260010
  },
  {
    value: "1570 1 AVENUE",
    data: 1015610047
  },
  {
    value: "1570 1 AVENUE",
    data: 1015610047
  },
  {
    value: "1570 2 AVENUE",
    data: 1015440052
  },
  {
    value: "1570 2 AVENUE",
    data: 1015440052
  },
  {
    value: "1570 3 AVENUE",
    data: 1015170034
  },
  {
    value: "1570 LEXINGTON AVENUE",
    data: 1016280013
  },
  {
    value: "1570 LEXINGTON AVENUE",
    data: 1016280013
  },
  {
    value: "1570 ST NICHOLAS AVENUE",
    data: 1021580040
  },
  {
    value: "1570 ST NICHOLAS AVENUE",
    data: 1021580040
  },
  {
    value: "1571 2 AVENUE",
    data: 1015270028
  },
  {
    value: "1571 2 AVENUE",
    data: 1015270028
  },
  {
    value: "1571 3 AVENUE",
    data: 1015340002
  },
  {
    value: "1571 LEXINGTON AVENUE",
    data: 1016280052
  },
  {
    value: "1571 LEXINGTON AVENUE",
    data: 1016280052
  },
  {
    value: "1571 ST NICHOLAS AVENUE",
    data: 1021680046
  },
  {
    value: "1571 ST NICHOLAS AVENUE",
    data: 1021680046
  },
  {
    value: "1571 YORK AVENUE",
    data: 1015630025
  },
  {
    value: "1572 2 AVENUE",
    data: 1015440051
  },
  {
    value: "1572 3 AVENUE",
    data: 1015170035
  },
  {
    value: "1572 LEXINGTON AVENUE",
    data: 1016280014
  },
  {
    value: "1572 LEXINGTON AVENUE",
    data: 1016280014
  },
  {
    value: "1573 3 AVENUE",
    data: 1015340003
  },
  {
    value: "1573 3 AVENUE",
    data: 1015340003
  },
  {
    value: "1573 YORK AVENUE",
    data: 1015630026
  },
  {
    value: "1574 1 AVENUE",
    data: 1015610046
  },
  {
    value: "1574 1 AVENUE",
    data: 1015610046
  },
  {
    value: "1574 2 AVENUE",
    data: 1015440050
  },
  {
    value: "1574 3 AVENUE",
    data: 1015170036
  },
  {
    value: "1574 LEXINGTON AVENUE",
    data: 1016280015
  },
  {
    value: "1575 3 AVENUE",
    data: 1015340004
  },
  {
    value: "1575 3 AVENUE",
    data: 1015340004
  },
  {
    value: "1575 LEXINGTON AVENUE",
    data: 1016280050
  },
  {
    value: "1575 LEXINGTON AVENUE",
    data: 1016280050
  },
  {
    value: "1575 YORK AVENUE",
    data: 1015630027
  },
  {
    value: "1576 1 AVENUE",
    data: 1015610045
  },
  {
    value: "1576 1 AVENUE",
    data: 1015610045
  },
  {
    value: "1576 2 AVENUE",
    data: 1015440049
  },
  {
    value: "1576 3 AVENUE",
    data: 1015170037
  },
  {
    value: "1576 3 AVENUE",
    data: 1015170037
  },
  {
    value: "1576 LEXINGTON AVENUE",
    data: 1016280016
  },
  {
    value: "1577 1 AVENUE",
    data: 1015450024
  },
  {
    value: "1577 1 AVENUE",
    data: 1015450024
  },
  {
    value: "1577 3 AVENUE",
    data: 1015340050
  },
  {
    value: "1577 3 AVENUE",
    data: 1015340050
  },
  {
    value: "1577 YORK AVENUE",
    data: 1015630028
  },
  {
    value: "1577 YORK AVENUE",
    data: 1015630028
  },
  {
    value: "1578 1 AVENUE",
    data: 1015620001
  },
  {
    value: "1578 1 AVENUE",
    data: 1015620001
  },
  {
    value: "1578 LEXINGTON AVENUE",
    data: 1016280057
  },
  {
    value: "1578 ST NICHOLAS AVENUE",
    data: 1021580062
  },
  {
    value: "1578 ST NICHOLAS AVENUE",
    data: 1021580062
  },
  {
    value: "1578 YORK AVENUE",
    data: 1015800001
  },
  {
    value: "1578 YORK AVENUE",
    data: 1015800001
  },
  {
    value: "1579 YORK AVENUE",
    data: 1015630029
  },
  {
    value: "1579 YORK AVENUE",
    data: 1015630029
  },
  {
    value: "158 1 AVENUE",
    data: 1004370006
  },
  {
    value: "158 1 AVENUE",
    data: 1004370006
  },
  {
    value: "158 8 AVENUE",
    data: 1007677501
  },
  {
    value: "158 9 AVENUE",
    data: 1007430082
  },
  {
    value: "158 9 AVENUE",
    data: 1007430082
  },
  {
    value: "158 AVENUE C",
    data: 1003790008
  },
  {
    value: "158 BOWERY",
    data: 1004780038
  },
  {
    value: "158 CANAL STREET",
    data: 1002020014
  },
  {
    value: "158 CHAMBERS STREET",
    data: 1001370027
  },
  {
    value: "158 EAST 100 STREET",
    data: 1016277501
  },
  {
    value: "158 EAST 100 STREET",
    data: 1016277501
  },
  {
    value: "158 EAST 102 STREET",
    data: 1016290049
  },
  {
    value: "158 EAST 107 STREET",
    data: 1016340047
  },
  {
    value: "158 EAST 107 STREET",
    data: 1016340047
  },
  {
    value: "158 EAST 109 STREET",
    data: 1016360148
  },
  {
    value: "158 EAST 110 STREET",
    data: 1016370048
  },
  {
    value: "158 EAST 111 STREET",
    data: 1016380049
  },
  {
    value: "158 EAST 112 STREET",
    data: 1016390047
  },
  {
    value: "158 EAST 115 STREET",
    data: 1016400147
  },
  {
    value: "158 EAST 116 STREET",
    data: 1016430049
  },
  {
    value: "158 EAST 122 STREET",
    data: 1017700050
  },
  {
    value: "158 EAST 122 STREET",
    data: 1017700050
  },
  {
    value: "158 EAST 124 STREET",
    data: 1017720049
  },
  {
    value: "158 EAST 22 STREET",
    data: 1008770052
  },
  {
    value: "158 EAST 23 STREET",
    data: 1008780046
  },
  {
    value: "158 EAST 34 STREET",
    data: 1008890051
  },
  {
    value: "158 EAST 35 STREET",
    data: 1008900053
  },
  {
    value: "158 EAST 46 STREET",
    data: 1013000042
  },
  {
    value: "158 EAST 61 STREET",
    data: 1013950145
  },
  {
    value: "158 EAST 62 STREET",
    data: 1013960041
  },
  {
    value: "158 EAST 63 STREET",
    data: 1013970045
  },
  {
    value: "158 EAST 64 STREET",
    data: 1013980151
  },
  {
    value: "158 EAST 66 STREET",
    data: 1014000043
  },
  {
    value: "158 EAST 70 STREET",
    data: 1014040048
  },
  {
    value: "158 EAST 71 STREET",
    data: 1014050046
  },
  {
    value: "158 EAST 72 STREET",
    data: 1014060050
  },
  {
    value: "158 EAST 72 STREET",
    data: 1014060050
  },
  {
    value: "158 EAST 74 STREET",
    data: 1014080048
  },
  {
    value: "158 EAST 78 STREET",
    data: 1014120148
  },
  {
    value: "158 EAST 81 STREET",
    data: 1015090145
  },
  {
    value: "158 EAST 82 STREET",
    data: 1015100048
  },
  {
    value: "158 EAST 82 STREET",
    data: 1015100048
  },
  {
    value: "158 EAST 83 STREET",
    data: 1015110145
  },
  {
    value: "158 EAST 91 STREET",
    data: 1015190046
  },
  {
    value: "158 EAST 91 STREET",
    data: 1015190046
  },
  {
    value: "158 EAST 93 STREET",
    data: 1015210149
  },
  {
    value: "158 EAST 95 STREET",
    data: 1015230049
  },
  {
    value: "158 EAST 97 STREET",
    data: 1016240041
  },
  {
    value: "158 EAST 97 STREET",
    data: 1016240041
  },
  {
    value: "158 EAST BROADWAY",
    data: 1002830070
  },
  {
    value: "158 ELDRIDGE STREET",
    data: 1004150003
  },
  {
    value: "158 FRANKLIN STREET",
    data: 1001897504
  },
  {
    value: "158 GRAND STREET",
    data: 1004720025
  },
  {
    value: "158 HENRY STREET",
    data: 1002710055
  },
  {
    value: "158 HESTER STREET",
    data: 1002047501
  },
  {
    value: "158 HESTER STREET",
    data: 1002047501
  },
  {
    value: "158 MOTT STREET",
    data: 1004700004
  },
  {
    value: "158 MOTT STREET",
    data: 1004700004
  },
  {
    value: "158 ORCHARD STREET",
    data: 1004110007
  },
  {
    value: "158 ORCHARD STREET",
    data: 1004110007
  },
  {
    value: "158 PERRY STREET",
    data: 1006370020
  },
  {
    value: "158 READE STREET",
    data: 1001410114
  },
  {
    value: "158 RIVINGTON STREET",
    data: 1003490032
  },
  {
    value: "158 STANTON STREET",
    data: 1003500035
  },
  {
    value: "158 STANTON STREET",
    data: 1003500035
  },
  {
    value: "158 VERMILYEA AVENUE",
    data: 1022360021
  },
  {
    value: "158 VERMILYEA AVENUE",
    data: 1022360021
  },
  {
    value: "158 WAVERLY PLACE",
    data: 1005920054
  },
  {
    value: "158 WEST 11 STREET",
    data: 1006060032
  },
  {
    value: "158 WEST 118 STREET",
    data: 1019020059
  },
  {
    value: "158 WEST 119 STREET",
    data: 1019030059
  },
  {
    value: "158 WEST 120 STREET",
    data: 1019040056
  },
  {
    value: "158 WEST 121 STREET",
    data: 1019050058
  },
  {
    value: "158 WEST 122 STREET",
    data: 1019060057
  },
  {
    value: "158 WEST 123 STREET",
    data: 1019070157
  },
  {
    value: "158 WEST 125 STREET",
    data: 1019090059
  },
  {
    value: "158 WEST 128 STREET",
    data: 1019120056
  },
  {
    value: "158 WEST 129 STREET",
    data: 1019130058
  },
  {
    value: "158 WEST 13 STREET",
    data: 1006080010
  },
  {
    value: "158 WEST 130 STREET",
    data: 1019140055
  },
  {
    value: "158 WEST 130 STREET",
    data: 1019140055
  },
  {
    value: "158 WEST 132 STREET",
    data: 1019160055
  },
  {
    value: "158 WEST 133 STREET",
    data: 1019170055
  },
  {
    value: "158 WEST 136 STREET",
    data: 1019200055
  },
  {
    value: "158 WEST 15 STREET",
    data: 1007900068
  },
  {
    value: "158 WEST 15 STREET",
    data: 1007900068
  },
  {
    value: "158 WEST 23 STREET",
    data: 1007987504
  },
  {
    value: "158 WEST 25 STREET",
    data: 1008000071
  },
  {
    value: "158 WEST 27 STREET",
    data: 1008020075
  },
  {
    value: "158 WEST 29 STREET",
    data: 1008040071
  },
  {
    value: "158 WEST 44 STREET",
    data: 1009960156
  },
  {
    value: "158 WEST 58 STREET",
    data: 1010100055
  },
  {
    value: "158 WEST 72 STREET",
    data: 1011430056
  },
  {
    value: "158 WEST 75 STREET",
    data: 1011460059
  },
  {
    value: "158 WEST 76 STREET",
    data: 1011470055
  },
  {
    value: "158 WEST 81 STREET",
    data: 1012110052
  },
  {
    value: "158 WEST 81 STREET",
    data: 1012110052
  },
  {
    value: "158 WEST 83 STREET",
    data: 1012130058
  },
  {
    value: "158 WEST 84 STREET",
    data: 1012140059
  },
  {
    value: "158 WEST 84 STREET",
    data: 1012140059
  },
  {
    value: "158 WEST 88 STREET",
    data: 1012180052
  },
  {
    value: "158 WEST 92 STREET",
    data: 1012220058
  },
  {
    value: "158 WEST 94 STREET",
    data: 1012240055
  },
  {
    value: "1580 1 AVENUE",
    data: 1015620002
  },
  {
    value: "1580 3 AVENUE",
    data: 1015170039
  },
  {
    value: "1580 AMSTERDAM AVENUE",
    data: 1020700029
  },
  {
    value: "1580 AMSTERDAM AVENUE",
    data: 1020700029
  },
  {
    value: "1580 YORK AVENUE",
    data: 1015800002
  },
  {
    value: "1581 1 AVENUE",
    data: 1015450025
  },
  {
    value: "1581 ST NICHOLAS AVENUE",
    data: 1021680080
  },
  {
    value: "1581 ST NICHOLAS AVENUE",
    data: 1021680080
  },
  {
    value: "158-18 RIVERSIDE DRIVE WEST",
    data: 1021350060
  },
  {
    value: "158-18 RIVERSIDE DRIVE WEST",
    data: 1021350060
  },
  {
    value: "1582 1 AVENUE",
    data: 1015620003
  },
  {
    value: "1582 1 AVENUE",
    data: 1015620003
  },
  {
    value: "1582 3 AVENUE",
    data: 1015170040
  },
  {
    value: "1582 3 AVENUE",
    data: 1015170040
  },
  {
    value: "1582 YORK AVENUE",
    data: 1015800003
  },
  {
    value: "1582 YORK AVENUE",
    data: 1015800003
  },
  {
    value: "1583 1 AVENUE",
    data: 1015450125
  },
  {
    value: "1583 1 AVENUE",
    data: 1015450125
  },
  {
    value: "1583 2 AVENUE",
    data: 1015280021
  },
  {
    value: "1583 2 AVENUE",
    data: 1015280021
  },
  {
    value: "1584 1 AVENUE",
    data: 1015620004
  },
  {
    value: "1584 2 AVENUE",
    data: 1015450001
  },
  {
    value: "1584 LEXINGTON AVENUE",
    data: 1016280058
  },
  {
    value: "1584 YORK AVENUE",
    data: 1015800004
  },
  {
    value: "1585 1 AVENUE",
    data: 1015450026
  },
  {
    value: "1585 1 AVENUE",
    data: 1015450026
  },
  {
    value: "1585 2 AVENUE",
    data: 1015280022
  },
  {
    value: "1585 3 AVENUE",
    data: 1015350001
  },
  {
    value: "1585 3 AVENUE",
    data: 1015350001
  },
  {
    value: "1585 BROADWAY",
    data: 1010197502
  },
  {
    value: "1586 1 AVENUE",
    data: 1015620048
  },
  {
    value: "1586 1 AVENUE",
    data: 1015620048
  },
  {
    value: "1586 2 AVENUE",
    data: 1015450002
  },
  {
    value: "1586 YORK AVENUE",
    data: 1015800052
  },
  {
    value: "1587 1 AVENUE",
    data: 1015450027
  },
  {
    value: "1587 2 AVENUE",
    data: 1015280023
  },
  {
    value: "1587 3 AVENUE",
    data: 1015350002
  },
  {
    value: "1587 MADISON AVENUE",
    data: 1016120050
  },
  {
    value: "1588 1 AVENUE",
    data: 1015620047
  },
  {
    value: "1588 2 AVENUE",
    data: 1015450003
  },
  {
    value: "1588 3 AVENUE",
    data: 1015180033
  },
  {
    value: "1588 3 AVENUE",
    data: 1015180033
  },
  {
    value: "1588 ST NICHOLAS AVENUE",
    data: 1021580065
  },
  {
    value: "1588 YORK AVENUE",
    data: 1015800051
  },
  {
    value: "1588 YORK AVENUE",
    data: 1015800051
  },
  {
    value: "1589 2 AVENUE",
    data: 1015280024
  },
  {
    value: "1589 3 AVENUE",
    data: 1015350003
  },
  {
    value: "1589 3 AVENUE",
    data: 1015350003
  },
  {
    value: "158H BOWERY",
    data: 1004780037
  },
  {
    value: "159 1 AVENUE",
    data: 1004510032
  },
  {
    value: "159 1 AVENUE",
    data: 1004510032
  },
  {
    value: "159 1/2 7 AVENUE SOUTH",
    data: 1006120051
  },
  {
    value: "159 1/2 7 AVENUE SOUTH",
    data: 1006120051
  },
  {
    value: "159 2 AVENUE",
    data: 1004650047
  },
  {
    value: "159 2 AVENUE",
    data: 1004650047
  },
  {
    value: "159 5 AVENUE",
    data: 1008500075
  },
  {
    value: "159 9 AVENUE",
    data: 1007170039
  },
  {
    value: "159 AVENUE B",
    data: 1003930001
  },
  {
    value: "159 AVENUE B",
    data: 1003930001
  },
  {
    value: "159 AVENUE C",
    data: 1003920031
  },
  {
    value: "159 BLEECKER STREET",
    data: 1005390037
  },
  {
    value: "159 BLEECKER STREET",
    data: 1005390037
  },
  {
    value: "159 BOWERY",
    data: 1004240005
  },
  {
    value: "159 CHARLES STREET",
    data: 1006370040
  },
  {
    value: "159 CHRYSTIE STREET",
    data: 1004250035
  },
  {
    value: "159 DUANE STREET",
    data: 1001447503
  },
  {
    value: "159 EAST 102 STREET",
    data: 1016300022
  },
  {
    value: "159 EAST 102 STREET",
    data: 1016300022
  },
  {
    value: "159 EAST 104 STREET",
    data: 1016320025
  },
  {
    value: "159 EAST 106 STREET",
    data: 1016340028
  },
  {
    value: "159 EAST 107 STREET",
    data: 1016350026
  },
  {
    value: "159 EAST 108 STREET",
    data: 1016360026
  },
  {
    value: "159 EAST 109 STREET",
    data: 1016370025
  },
  {
    value: "159 EAST 115 STREET",
    data: 1016430023
  },
  {
    value: "159 EAST 116 STREET",
    data: 1016440025
  },
  {
    value: "159 EAST 117 STREET",
    data: 1016450125
  },
  {
    value: "159 EAST 118 STREET",
    data: 1017670027
  },
  {
    value: "159 EAST 121 STREET",
    data: 1017700029
  },
  {
    value: "159 EAST 122 STREET",
    data: 1017710023
  },
  {
    value: "159 EAST 123 STREET",
    data: 1017720025
  },
  {
    value: "159 EAST 28 STREET",
    data: 1008840037
  },
  {
    value: "159 EAST 30 STREET",
    data: 1008867502
  },
  {
    value: "159 EAST 30 STREET",
    data: 1008867502
  },
  {
    value: "159 EAST 33 STREET",
    data: 1008890032
  },
  {
    value: "159 EAST 35 STREET",
    data: 1008910036
  },
  {
    value: "159 EAST 55 STREET",
    data: 1013100133
  },
  {
    value: "159 EAST 61 STREET",
    data: 1013960029
  },
  {
    value: "159 EAST 62 STREET",
    data: 1013970028
  },
  {
    value: "159 EAST 63 STREET",
    data: 1013980029
  },
  {
    value: "159 EAST 64 STREET",
    data: 1013990123
  },
  {
    value: "159 EAST 65 STREET",
    data: 1014000130
  },
  {
    value: "159 EAST 69 STREET",
    data: 1014040029
  },
  {
    value: "159 EAST 70 STREET",
    data: 1014050025
  },
  {
    value: "159 EAST 71 STREET",
    data: 1014060025
  },
  {
    value: "159 EAST 77 STREET",
    data: 1014120025
  },
  {
    value: "159 EAST 78 STREET",
    data: 1014130124
  },
  {
    value: "159 EAST 80 STREET",
    data: 1015090024
  },
  {
    value: "159 EAST 82 STREET",
    data: 1015110027
  },
  {
    value: "159 EAST 85 STREET",
    data: 1015140027
  },
  {
    value: "159 EAST 87 STREET",
    data: 1015160024
  },
  {
    value: "159 EAST 91 STREET",
    data: 1015200027
  },
  {
    value: "159 EAST 91 STREET",
    data: 1015200027
  },
  {
    value: "159 EAST 92 STREET",
    data: 1015210028
  },
  {
    value: "159 EAST 92 STREET",
    data: 1015210028
  },
  {
    value: "159 EAST 94 STREET",
    data: 1015230025
  },
  {
    value: "159 EAST 99 STREET",
    data: 1016270026
  },
  {
    value: "159 EAST 99 STREET",
    data: 1016270026
  },
  {
    value: "159 EAST HOUSTON STREET",
    data: 1004170018
  },
  {
    value: "159 EAST HOUSTON STREET",
    data: 1004170018
  },
  {
    value: "159 GRAND STREET",
    data: 1002340011
  },
  {
    value: "159 LUDLOW STREET",
    data: 1004110019
  },
  {
    value: "159 MERCER STREET",
    data: 1005137502
  },
  {
    value: "159 MOTT STREET",
    data: 1004710050
  },
  {
    value: "159 ORCHARD STREET",
    data: 1004160061
  },
  {
    value: "159 ORCHARD STREET",
    data: 1004160061
  },
  {
    value: "159 PRINCE STREET",
    data: 1005160042
  },
  {
    value: "159 PRINCE STREET",
    data: 1005160042
  },
  {
    value: "159 RIVINGTON STREET",
    data: 1003480019
  },
  {
    value: "159 SHERMAN AVENUE",
    data: 1022210008
  },
  {
    value: "159 STANTON STREET",
    data: 1003490016
  },
  {
    value: "159 STANTON STREET",
    data: 1003490016
  },
  {
    value: "159 WEST 106 STREET",
    data: 1018610005
  },
  {
    value: "159 WEST 106 STREET",
    data: 1018610005
  },
  {
    value: "159 WEST 118 STREET",
    data: 1019037503
  },
  {
    value: "159 WEST 12 STREET",
    data: 1006080069
  },
  {
    value: "159 WEST 120 STREET",
    data: 1019050005
  },
  {
    value: "159 WEST 121 STREET",
    data: 1019060006
  },
  {
    value: "159 WEST 122 STREET",
    data: 1019070007
  },
  {
    value: "159 WEST 126 STREET",
    data: 1019117503
  },
  {
    value: "159 WEST 127 STREET",
    data: 1019120006
  },
  {
    value: "159 WEST 129 STREET",
    data: 1019140009
  },
  {
    value: "159 WEST 13 STREET",
    data: 1006090075
  },
  {
    value: "159 WEST 131 STREET",
    data: 1019160108
  },
  {
    value: "159 WEST 132 STREET",
    data: 1019170107
  },
  {
    value: "159 WEST 136 STREET",
    data: 1019210009
  },
  {
    value: "159 WEST 136 STREET",
    data: 1019210009
  },
  {
    value: "159 WEST 143 STREET",
    data: 1020120008
  },
  {
    value: "159 WEST 143 STREET",
    data: 1020120008
  },
  {
    value: "159 WEST 145 STREET",
    data: 1020140008
  },
  {
    value: "159 WEST 145 STREET",
    data: 1020140008
  },
  {
    value: "159 WEST 228 STREET",
    data: 1022150193
  },
  {
    value: "159 WEST 228 STREET",
    data: 1022150193
  },
  {
    value: "159 WEST 23 STREET",
    data: 1007990011
  },
  {
    value: "159 WEST 24 STREET",
    data: 1008007505
  },
  {
    value: "159 WEST 24 STREET",
    data: 1008007505
  },
  {
    value: "159 WEST 25 STREET",
    data: 1008010008
  },
  {
    value: "159 WEST 53 STREET",
    data: 1010067501
  },
  {
    value: "159 WEST 71 STREET",
    data: 1011430010
  },
  {
    value: "159 WEST 72 STREET",
    data: 1011440009
  },
  {
    value: "159 WEST 73 STREET",
    data: 1011450010
  },
  {
    value: "159 WEST 74 STREET",
    data: 1011460005
  },
  {
    value: "159 WEST 75 STREET",
    data: 1011470006
  },
  {
    value: "159 WEST 76 STREET",
    data: 1011480010
  },
  {
    value: "159 WEST 78 STREET",
    data: 1011500008
  },
  {
    value: "159 WEST 80 STREET",
    data: 1012110010
  },
  {
    value: "159 WEST 80 STREET",
    data: 1012110010
  },
  {
    value: "159 WEST 82 STREET",
    data: 1012130005
  },
  {
    value: "159 WEST 85 STREET",
    data: 1012160006
  },
  {
    value: "159 WEST 85 STREET",
    data: 1012160006
  },
  {
    value: "159 WEST 87 STREET",
    data: 1012180013
  },
  {
    value: "159 WEST 88 STREET",
    data: 1012190013
  },
  {
    value: "159 WEST 91 STREET",
    data: 1012220008
  },
  {
    value: "159 WEST 93 STREET",
    data: 1012240008
  },
  {
    value: "159 WEST 95 STREET",
    data: 1012260009
  },
  {
    value: "1590 1 AVENUE",
    data: 1015620046
  },
  {
    value: "1590 2 AVENUE",
    data: 1015450004
  },
  {
    value: "1590 2 AVENUE",
    data: 1015450004
  },
  {
    value: "1590 AMSTERDAM AVENUE",
    data: 1020700036
  },
  {
    value: "1590 AMSTERDAM AVENUE",
    data: 1020700036
  },
  {
    value: "1590 LEXINGTON AVENUE",
    data: 1016290014
  },
  {
    value: "1590 LEXINGTON AVENUE",
    data: 1016290014
  },
  {
    value: "1590 YORK AVENUE",
    data: 1015800050
  },
  {
    value: "159-04 HARLEM RIVER DRIVE",
    data: 1021060320
  },
  {
    value: "159-04 HARLEM RIVER DRIVE",
    data: 1021060320
  },
  {
    value: "1591 2 AVENUE",
    data: 1015280025
  },
  {
    value: "1592 1 AVENUE",
    data: 1015620045
  },
  {
    value: "1592 1 AVENUE",
    data: 1015620045
  },
  {
    value: "1592 2 AVENUE",
    data: 1015450052
  },
  {
    value: "1592 2 AVENUE",
    data: 1015450052
  },
  {
    value: "1592 YORK AVENUE",
    data: 1015800049
  },
  {
    value: "1592 YORK AVENUE",
    data: 1015800049
  },
  {
    value: "1593 1 AVENUE",
    data: 1015450030
  },
  {
    value: "1593 1 AVENUE",
    data: 1015450030
  },
  {
    value: "1593 2 AVENUE",
    data: 1015280026
  },
  {
    value: "1593 YORK AVENUE",
    data: 1015640022
  },
  {
    value: "1594 2 AVENUE",
    data: 1015450051
  },
  {
    value: "1594 3 AVENUE",
    data: 1015180036
  },
  {
    value: "1594 3 AVENUE",
    data: 1015180036
  },
  {
    value: "1594 YORK AVENUE",
    data: 1015810001
  },
  {
    value: "1594 YORK AVENUE",
    data: 1015810001
  },
  {
    value: "1595 2 AVENUE",
    data: 1015280027
  },
  {
    value: "1595 LEXINGTON AVENUE",
    data: 1016297502
  },
  {
    value: "1595 LEXINGTON AVENUE",
    data: 1016297502
  },
  {
    value: "1595 MADISON AVENUE",
    data: 1016130023
  },
  {
    value: "1595 MADISON AVENUE",
    data: 1016130023
  },
  {
    value: "1595 YORK AVENUE",
    data: 1015640023
  },
  {
    value: "1595 YORK AVENUE",
    data: 1015640023
  },
  {
    value: "1596 2 AVENUE",
    data: 1015450050
  },
  {
    value: "1596 3 AVENUE",
    data: 1015180037
  },
  {
    value: "1596 3 AVENUE",
    data: 1015180037
  },
  {
    value: "1596 LEXINGTON AVENUE",
    data: 1016290115
  },
  {
    value: "1596 YORK AVENUE",
    data: 1015810049
  },
  {
    value: "1596 YORK AVENUE",
    data: 1015810049
  },
  {
    value: "1597 2 AVENUE",
    data: 1015280028
  },
  {
    value: "1597 YORK AVENUE",
    data: 1015640024
  },
  {
    value: "1597 YORK AVENUE",
    data: 1015640024
  },
  {
    value: "1598 2 AVENUE",
    data: 1015450049
  },
  {
    value: "1598 2 AVENUE",
    data: 1015450049
  },
  {
    value: "1598 3 AVENUE",
    data: 1015180038
  },
  {
    value: "1598 3 AVENUE",
    data: 1015180038
  },
  {
    value: "1598 LEXINGTON AVENUE",
    data: 1016290116
  },
  {
    value: "1599 LEXINGTON AVENUE",
    data: 1016290150
  },
  {
    value: "1599 ST NICHOLAS AVENUE",
    data: 1021680074
  },
  {
    value: "1599 ST NICHOLAS AVENUE",
    data: 1021680074
  },
  {
    value: "1599 YORK AVENUE",
    data: 1015640025
  },
  {
    value: "15A WEST 64 STREET",
    data: 1011170024
  },
  {
    value: "15A WEST 64 STREET",
    data: 1011170024
  },
  {
    value: "15A WEST 73 STREET",
    data: 1011260024
  },
  {
    value: "15O EAST 84 STREET",
    data: 1015120044
  },
  {
    value: "15O EAST 84 STREET",
    data: 1015120044
  },
  {
    value: "16 1 AVENUE",
    data: 1004290004
  },
  {
    value: "16 2 AVENUE",
    data: 1004420007
  },
  {
    value: "16 2 AVENUE",
    data: 1004420007
  },
  {
    value: "16 ARDEN STREET",
    data: 1021740180
  },
  {
    value: "16 ARDEN STREET",
    data: 1021740180
  },
  {
    value: "16 BANK STREET",
    data: 1006140024
  },
  {
    value: "16 BARROW STREET",
    data: 1005910033
  },
  {
    value: "16 BEAVER STREET",
    data: 1000110007
  },
  {
    value: "16 BOWERY",
    data: 1001620054
  },
  {
    value: "16 BROADWAY TERRACE",
    data: 1021700556
  },
  {
    value: "16 BROADWAY TERRACE",
    data: 1021700556
  },
  {
    value: "16 CHITTENDEN AVENUE",
    data: 1021790242
  },
  {
    value: "16 CHRISTOPHER STREET",
    data: 1005930044
  },
  {
    value: "16 CLARKSON STREET",
    data: 1005810054
  },
  {
    value: "16 CLINTON STREET",
    data: 1003500046
  },
  {
    value: "16 COMMERCE STREET",
    data: 1005870015
  },
  {
    value: "16 CONVENT AVENUE",
    data: 1019670078
  },
  {
    value: "16 COOPER SQUARE",
    data: 1005440050
  },
  {
    value: "16 DELANCEY STREET",
    data: 1004250039
  },
  {
    value: "16 DESBROSSES STREET",
    data: 1002257502
  },
  {
    value: "16 DESBROSSES STREET",
    data: 1002257502
  },
  {
    value: "16 DOYERS STREET",
    data: 1001620048
  },
  {
    value: "16 EAST 10 STREET",
    data: 1005670014
  },
  {
    value: "16 EAST 103 STREET",
    data: 1016080061
  },
  {
    value: "16 EAST 105 STREET",
    data: 1016100064
  },
  {
    value: "16 EAST 105 STREET",
    data: 1016100064
  },
  {
    value: "16 EAST 109 STREET",
    data: 1016140063
  },
  {
    value: "16 EAST 109 STREET",
    data: 1016140063
  },
  {
    value: "16 EAST 11 STREET",
    data: 1005680011
  },
  {
    value: "16 EAST 11 STREET",
    data: 1005680011
  },
  {
    value: "16 EAST 116 STREET",
    data: 1016210063
  },
  {
    value: "16 EAST 116 STREET",
    data: 1016210063
  },
  {
    value: "16 EAST 118 STREET",
    data: 1016230125
  },
  {
    value: "16 EAST 12 STREET",
    data: 1005697503
  },
  {
    value: "16 EAST 12 STREET",
    data: 1005697503
  },
  {
    value: "16 EAST 125 STREET",
    data: 1017490063
  },
  {
    value: "16 EAST 126 STREET",
    data: 1017500165
  },
  {
    value: "16 EAST 127 STREET",
    data: 1017510065
  },
  {
    value: "16 EAST 129 STREET",
    data: 1017530064
  },
  {
    value: "16 EAST 129 STREET",
    data: 1017530064
  },
  {
    value: "16 EAST 130 STREET",
    data: 1017540063
  },
  {
    value: "16 EAST 132 STREET",
    data: 1017560061
  },
  {
    value: "16 EAST 17 STREET",
    data: 1008440033
  },
  {
    value: "16 EAST 18 STREET",
    data: 1008460065
  },
  {
    value: "16 EAST 18 STREET",
    data: 1008460065
  },
  {
    value: "16 EAST 23 STREET",
    data: 1008510061
  },
  {
    value: "16 EAST 30 STREET",
    data: 1008590075
  },
  {
    value: "16 EAST 39 STREET",
    data: 1008680064
  },
  {
    value: "16 EAST 40 STREET",
    data: 1008690064
  },
  {
    value: "16 EAST 41 STREET",
    data: 1012750063
  },
  {
    value: "16 EAST 46 STREET",
    data: 1012810061
  },
  {
    value: "16 EAST 48 STREET",
    data: 1012830061
  },
  {
    value: "16 EAST 52 STREET",
    data: 1012870058
  },
  {
    value: "16 EAST 55 STREET",
    data: 1012900061
  },
  {
    value: "16 EAST 58 STREET",
    data: 1012930063
  },
  {
    value: "16 EAST 62 STREET",
    data: 1013760061
  },
  {
    value: "16 EAST 63 STREET",
    data: 1013770061
  },
  {
    value: "16 EAST 64 STREET",
    data: 1013780063
  },
  {
    value: "16 EAST 65 STREET",
    data: 1013790062
  },
  {
    value: "16 EAST 68 STREET",
    data: 1013820161
  },
  {
    value: "16 EAST 69 STREET",
    data: 1013830060
  },
  {
    value: "16 EAST 71 STREET",
    data: 1013850060
  },
  {
    value: "16 EAST 71 STREET",
    data: 1013850060
  },
  {
    value: "16 EAST 72 STREET",
    data: 1013860061
  },
  {
    value: "16 EAST 73 STREET",
    data: 1013870063
  },
  {
    value: "16 EAST 74 STREET",
    data: 1013880062
  },
  {
    value: "16 EAST 76 STREET",
    data: 1013900062
  },
  {
    value: "16 EAST 77 STREET",
    data: 1013910063
  },
  {
    value: "16 EAST 78 STREET",
    data: 1013920063
  },
  {
    value: "16 EAST 79 STREET",
    data: 1013930060
  },
  {
    value: "16 EAST 8 STREET",
    data: 1005500029
  },
  {
    value: "16 EAST 80 STREET",
    data: 1014910062
  },
  {
    value: "16 EAST 80 STREET",
    data: 1014910062
  },
  {
    value: "16 EAST 81 STREET",
    data: 1014920063
  },
  {
    value: "16 EAST 82 STREET",
    data: 1014930062
  },
  {
    value: "16 EAST 84 STREET",
    data: 1014957502
  },
  {
    value: "16 EAST 85 STREET",
    data: 1014960061
  },
  {
    value: "16 EAST 89 STREET",
    data: 1015000062
  },
  {
    value: "16 EAST 93 STREET",
    data: 1015040061
  },
  {
    value: "16 EAST 94 STREET",
    data: 1015050063
  },
  {
    value: "16 EAST 95 STREET",
    data: 1015060062
  },
  {
    value: "16 EAST 96 STREET",
    data: 1015070056
  },
  {
    value: "16 EAST 96 STREET",
    data: 1015070056
  },
  {
    value: "16 EAST 98 STREET",
    data: 1016030060
  },
  {
    value: "16 EAST 98 STREET",
    data: 1016030060
  },
  {
    value: "16 EAST BROADWAY",
    data: 1002810006
  },
  {
    value: "16 FT CHARLES PLACE",
    data: 1022150489
  },
  {
    value: "16 GAY STREET",
    data: 1005930047
  },
  {
    value: "16 GRAMERCY PARK SOUTH",
    data: 1008750069
  },
  {
    value: "16 GREENE STREET",
    data: 1002300015
  },
  {
    value: "16 GROVE STREET",
    data: 1005850022
  },
  {
    value: "16 HAMILTON TERRACE",
    data: 1020500180
  },
  {
    value: "16 HENDERSON PLACE",
    data: 1015830119
  },
  {
    value: "16 HUDSON STREET",
    data: 1001440001
  },
  {
    value: "16 HUDSON STREET",
    data: 1001440001
  },
  {
    value: "16 JANE STREET",
    data: 1006150068
  },
  {
    value: "16 JANE STREET",
    data: 1006150068
  },
  {
    value: "16 JAY STREET",
    data: 1001437503
  },
  {
    value: "16 JONES STREET",
    data: 1005900020
  },
  {
    value: "16 JUMEL TERRACE",
    data: 1021090100
  },
  {
    value: "16 LEROY STREET",
    data: 1005860015
  },
  {
    value: "16 MAIDEN LANE",
    data: 1000640024
  },
  {
    value: "16 MARBLE HILL AVENUE",
    data: 1022150535
  },
  {
    value: "16 MARBLE HILL AVENUE",
    data: 1022150535
  },
  {
    value: "16 MINETTA LANE",
    data: 1005430027
  },
  {
    value: "16 MORNINGSIDE AVENUE",
    data: 1018490052
  },
  {
    value: "16 MORNINGSIDE AVENUE",
    data: 1018490052
  },
  {
    value: "16 MORTON STREET",
    data: 1005860055
  },
  {
    value: "16 MOTT STREET",
    data: 1001620009
  },
  {
    value: "16 NORTH MOORE STREET",
    data: 1001890034
  },
  {
    value: "16 OLD BROADWAY",
    data: 1019820067
  },
  {
    value: "16 OLD BROADWAY",
    data: 1019820067
  },
  {
    value: "16 PARK AVENUE",
    data: 1008640041
  },
  {
    value: "16 PARK AVENUE",
    data: 1008640041
  },
  {
    value: "16 PELL STREET",
    data: 1001630004
  },
  {
    value: "16 RIVINGTON STREET",
    data: 1004260038
  },
  {
    value: "16 SPRING STREET",
    data: 1004790020
  },
  {
    value: "16 ST LUKES PLACE",
    data: 1005830045
  },
  {
    value: "16 ST MARKS PLACE",
    data: 1004630017
  },
  {
    value: "16 ST MARKS PLACE",
    data: 1004630017
  },
  {
    value: "16 ST NICHOLAS PLACE",
    data: 1020540040
  },
  {
    value: "16 SUTTON PLACE SOUTH",
    data: 1013690026
  },
  {
    value: "16 SUTTON PLACE SOUTH",
    data: 1013690026
  },
  {
    value: "16 SUTTON SQUARE",
    data: 1013720043
  },
  {
    value: "16 SYLVAN TERRACE",
    data: 1021090065
  },
  {
    value: "16 VAN CORLEAR PLACE",
    data: 1022150360
  },
  {
    value: "16 WALKER STREET",
    data: 1001920001
  },
  {
    value: "16 WARREN STREET",
    data: 1001357508
  },
  {
    value: "16 WASHINGTON TERRACE",
    data: 1021560145
  },
  {
    value: "16 WEST 10 STREET",
    data: 1005730034
  },
  {
    value: "16 WEST 101 STREET",
    data: 1018360043
  },
  {
    value: "16 WEST 101 STREET",
    data: 1018360043
  },
  {
    value: "16 WEST 104 STREET",
    data: 1018390043
  },
  {
    value: "16 WEST 11 STREET",
    data: 1005740036
  },
  {
    value: "16 WEST 119 STREET",
    data: 1017170045
  },
  {
    value: "16 WEST 119 STREET",
    data: 1017170045
  },
  {
    value: "16 WEST 12 STREET",
    data: 1005750044
  },
  {
    value: "16 WEST 120 STREET",
    data: 1017180143
  },
  {
    value: "16 WEST 121 STREET",
    data: 1017200027
  },
  {
    value: "16 WEST 122 STREET",
    data: 1017200065
  },
  {
    value: "16 WEST 123 STREET",
    data: 1017210026
  },
  {
    value: "16 WEST 125 STREET",
    data: 1017220044
  },
  {
    value: "16 WEST 128 STREET",
    data: 1017250143
  },
  {
    value: "16 WEST 129 STREET",
    data: 1017260047
  },
  {
    value: "16 WEST 130 STREET",
    data: 1017270045
  },
  {
    value: "16 WEST 131 STREET",
    data: 1017280146
  },
  {
    value: "16 WEST 18 STREET",
    data: 1008190055
  },
  {
    value: "16 WEST 19 STREET",
    data: 1008207504
  },
  {
    value: "16 WEST 19 STREET",
    data: 1008207504
  },
  {
    value: "16 WEST 21 STREET",
    data: 1008227505
  },
  {
    value: "16 WEST 23 STREET",
    data: 1008240048
  },
  {
    value: "16 WEST 30 STREET",
    data: 1008310049
  },
  {
    value: "16 WEST 32 STREET",
    data: 1008330054
  },
  {
    value: "16 WEST 36 STREET",
    data: 1008370056
  },
  {
    value: "16 WEST 37 STREET",
    data: 1008380060
  },
  {
    value: "16 WEST 39 STREET",
    data: 1008400058
  },
  {
    value: "16 WEST 44 STREET",
    data: 1012590048
  },
  {
    value: "16 WEST 45 STREET",
    data: 1012600048
  },
  {
    value: "16 WEST 46 STREET",
    data: 1012610048
  },
  {
    value: "16 WEST 47 STREET",
    data: 1012620048
  },
  {
    value: "16 WEST 48 STREET",
    data: 1012637501
  },
  {
    value: "16 WEST 48 STREET",
    data: 1012637501
  },
  {
    value: "16 WEST 55 STREET",
    data: 1012700047
  },
  {
    value: "16 WEST 56 STREET",
    data: 1012710049
  },
  {
    value: "16 WEST 57 STREET",
    data: 1012720050
  },
  {
    value: "16 WEST 61 STREET",
    data: 1011130051
  },
  {
    value: "16 WEST 68 STREET",
    data: 1011200040
  },
  {
    value: "16 WEST 69 STREET",
    data: 1011210040
  },
  {
    value: "16 WEST 69 STREET",
    data: 1011210040
  },
  {
    value: "16 WEST 71 STREET",
    data: 1011230042
  },
  {
    value: "16 WEST 71 STREET",
    data: 1011230042
  },
  {
    value: "16 WEST 74 STREET",
    data: 1011260042
  },
  {
    value: "16 WEST 74 STREET",
    data: 1011260042
  },
  {
    value: "16 WEST 75 STREET",
    data: 1011270043
  },
  {
    value: "16 WEST 76 STREET",
    data: 1011280043
  },
  {
    value: "16 WEST 76 STREET",
    data: 1011280043
  },
  {
    value: "16 WEST 82 STREET",
    data: 1011950042
  },
  {
    value: "16 WEST 85 STREET",
    data: 1011980138
  },
  {
    value: "16 WEST 86 STREET",
    data: 1011990043
  },
  {
    value: "16 WEST 87 STREET",
    data: 1012000042
  },
  {
    value: "16 WEST 88 STREET",
    data: 1012010040
  },
  {
    value: "16 WEST 9 STREET",
    data: 1005720032
  },
  {
    value: "16 WEST 90 STREET",
    data: 1012030142
  },
  {
    value: "16 WEST 95 STREET",
    data: 1012080041
  },
  {
    value: "160 1 AVENUE",
    data: 1004370007
  },
  {
    value: "160 1 AVENUE",
    data: 1004370007
  },
  {
    value: "160 2 AVENUE",
    data: 1004520001
  },
  {
    value: "160 2 AVENUE",
    data: 1004520001
  },
  {
    value: "160 3 AVENUE",
    data: 1008710044
  },
  {
    value: "160 3 AVENUE",
    data: 1008710044
  },
  {
    value: "160 5 AVENUE",
    data: 1008220039
  },
  {
    value: "160 7 AVENUE",
    data: 1007697503
  },
  {
    value: "160 7 AVENUE",
    data: 1007697503
  },
  {
    value: "160 8 AVENUE",
    data: 1007670071
  },
  {
    value: "160 9 AVENUE",
    data: 1007430080
  },
  {
    value: "160 9 AVENUE",
    data: 1007430080
  },
  {
    value: "160 AMSTERDAM AVENUE",
    data: 1011580010
  },
  {
    value: "160 AUDUBON AVENUE",
    data: 1021300022
  },
  {
    value: "160 AUDUBON AVENUE",
    data: 1021300022
  },
  {
    value: "160 BOWERY",
    data: 1004780036
  },
  {
    value: "160 BROADWAY",
    data: 1000640015
  },
  {
    value: "160 CANAL STREET",
    data: 1002020012
  },
  {
    value: "160 CENTRAL PARK SOUTH",
    data: 1010117501
  },
  {
    value: "160 CENTRAL PARK SOUTH",
    data: 1010117501
  },
  {
    value: "160 CENTRAL PARK WEST",
    data: 1011280033
  },
  {
    value: "160 CHAMBERS STREET",
    data: 1001370025
  },
  {
    value: "160 CLAREMONT AVENUE",
    data: 1019930047
  },
  {
    value: "160 CLAREMONT AVENUE",
    data: 1019930047
  },
  {
    value: "160 CONVENT AVENUE",
    data: 1019570200
  },
  {
    value: "160 DYCKMAN STREET",
    data: 1021750074
  },
  {
    value: "160 EAST 100 STREET",
    data: 1016270046
  },
  {
    value: "160 EAST 100 STREET",
    data: 1016270046
  },
  {
    value: "160 EAST 102 STREET",
    data: 1016290048
  },
  {
    value: "160 EAST 103 STREET",
    data: 1016300041
  },
  {
    value: "160 EAST 103 STREET",
    data: 1016300041
  },
  {
    value: "160 EAST 104 STREET",
    data: 1016310050
  },
  {
    value: "160 EAST 105 STREET",
    data: 1016320047
  },
  {
    value: "160 EAST 107 STREET",
    data: 1016340046
  },
  {
    value: "160 EAST 109 STREET",
    data: 1016360048
  },
  {
    value: "160 EAST 110 STREET",
    data: 1016370043
  },
  {
    value: "160 EAST 111 STREET",
    data: 1016380148
  },
  {
    value: "160 EAST 112 STREET",
    data: 1016390046
  },
  {
    value: "160 EAST 116 STREET",
    data: 1016430048
  },
  {
    value: "160 EAST 117 STREET",
    data: 1016447502
  },
  {
    value: "160 EAST 117 STREET",
    data: 1016447502
  },
  {
    value: "160 EAST 124 STREET",
    data: 1017720048
  },
  {
    value: "160 EAST 127 STREET",
    data: 1017750045
  },
  {
    value: "160 EAST 127 STREET",
    data: 1017750045
  },
  {
    value: "160 EAST 2 STREET",
    data: 1003980058
  },
  {
    value: "160 EAST 2 STREET",
    data: 1003980058
  },
  {
    value: "160 EAST 23 STREET",
    data: 1008780045
  },
  {
    value: "160 EAST 23 STREET",
    data: 1008780045
  },
  {
    value: "160 EAST 26 STREET",
    data: 1008810047
  },
  {
    value: "160 EAST 26 STREET",
    data: 1008810047
  },
  {
    value: "160 EAST 27 STREET",
    data: 1008820050
  },
  {
    value: "160 EAST 27 STREET",
    data: 1008820050
  },
  {
    value: "160 EAST 28 STREET",
    data: 1008830052
  },
  {
    value: "160 EAST 28 STREET",
    data: 1008830052
  },
  {
    value: "160 EAST 3 STREET",
    data: 1003980008
  },
  {
    value: "160 EAST 3 STREET",
    data: 1003980008
  },
  {
    value: "160 EAST 33 STREET",
    data: 1008880046
  },
  {
    value: "160 EAST 34 STREET",
    data: 1008890050
  },
  {
    value: "160 EAST 35 STREET",
    data: 1008900052
  },
  {
    value: "160 EAST 55 STREET",
    data: 1013090041
  },
  {
    value: "160 EAST 55 STREET",
    data: 1013090041
  },
  {
    value: "160 EAST 56 STREET",
    data: 1013100041
  },
  {
    value: "160 EAST 61 STREET",
    data: 1013950045
  },
  {
    value: "160 EAST 63 STREET",
    data: 1013970144
  },
  {
    value: "160 EAST 64 STREET",
    data: 1013980051
  },
  {
    value: "160 EAST 65 STREET",
    data: 1013990033
  },
  {
    value: "160 EAST 65 STREET",
    data: 1013990033
  },
  {
    value: "160 EAST 66 STREET",
    data: 1014000042
  },
  {
    value: "160 EAST 70 STREET",
    data: 1014040147
  },
  {
    value: "160 EAST 71 STREET",
    data: 1014050145
  },
  {
    value: "160 EAST 74 STREET",
    data: 1014080047
  },
  {
    value: "160 EAST 78 STREET",
    data: 1014120048
  },
  {
    value: "160 EAST 81 STREET",
    data: 1015090045
  },
  {
    value: "160 EAST 82 STREET",
    data: 1015100047
  },
  {
    value: "160 EAST 83 STREET",
    data: 1015110045
  },
  {
    value: "160 EAST 85 STREET",
    data: 1015130046
  },
  {
    value: "160 EAST 85 STREET",
    data: 1015130046
  },
  {
    value: "160 EAST 92 STREET",
    data: 1015200045
  },
  {
    value: "160 EAST 93 STREET",
    data: 1015210049
  },
  {
    value: "160 EAST 95 STREET",
    data: 1015230048
  },
  {
    value: "160 EAST BROADWAY",
    data: 1002830071
  },
  {
    value: "160 FRANKLIN STREET",
    data: 1001890012
  },
  {
    value: "160 HENRY STREET",
    data: 1002710054
  },
  {
    value: "160 HENRY STREET",
    data: 1002710054
  },
  {
    value: "160 LENOX AVENUE",
    data: 1017170001
  },
  {
    value: "160 LEXINGTON AVENUE",
    data: 1008860021
  },
  {
    value: "160 MADISON AVENUE",
    data: 1008627504
  },
  {
    value: "160 MADISON AVENUE",
    data: 1008627504
  },
  {
    value: "160 MORNINGSIDE AVENUE",
    data: 1019670020
  },
  {
    value: "160 MORNINGSIDE AVENUE",
    data: 1019670020
  },
  {
    value: "160 MOTT STREET",
    data: 1004700005
  },
  {
    value: "160 MOTT STREET",
    data: 1004700005
  },
  {
    value: "160 ORCHARD STREET",
    data: 1004110008
  },
  {
    value: "160 ORCHARD STREET",
    data: 1004110008
  },
  {
    value: "160 PEARL STREET",
    data: 1000390006
  },
  {
    value: "160 PERRY STREET",
    data: 1006370019
  },
  {
    value: "160 PRINCE STREET",
    data: 1005020016
  },
  {
    value: "160 PRINCE STREET",
    data: 1005020016
  },
  {
    value: "160 RIVERSIDE BOULEVARD",
    data: 1011710132
  },
  {
    value: "160 RIVERSIDE BOULEVARD",
    data: 1011710132
  },
  {
    value: "160 RIVERSIDE DRIVE",
    data: 1012500001
  },
  {
    value: "160 RIVERSIDE DRIVE",
    data: 1012500001
  },
  {
    value: "160 RIVINGTON STREET",
    data: 1003490030
  },
  {
    value: "160 RIVINGTON STREET",
    data: 1003490030
  },
  {
    value: "160 SHERMAN AVENUE",
    data: 1022250034
  },
  {
    value: "160 SHERMAN AVENUE",
    data: 1022250034
  },
  {
    value: "160 SOUTH STREET",
    data: 1001070001
  },
  {
    value: "160 STANTON STREET",
    data: 1003500034
  },
  {
    value: "160 VARICK STREET",
    data: 1005067501
  },
  {
    value: "160 WATER STREET",
    data: 1000700043
  },
  {
    value: "160 WAVERLY PLACE",
    data: 1005920052
  },
  {
    value: "160 WAVERLY PLACE",
    data: 1005920052
  },
  {
    value: "160 WEST 10 STREET",
    data: 1006100017
  },
  {
    value: "160 WEST 11 STREET",
    data: 1006067501
  },
  {
    value: "160 WEST 120 STREET",
    data: 1019040057
  },
  {
    value: "160 WEST 121 STREET",
    data: 1019050158
  },
  {
    value: "160 WEST 122 STREET",
    data: 1019060157
  },
  {
    value: "160 WEST 123 STREET",
    data: 1019070058
  },
  {
    value: "160 WEST 124 STREET",
    data: 1019080060
  },
  {
    value: "160 WEST 127 STREET",
    data: 1019110059
  },
  {
    value: "160 WEST 128 STREET",
    data: 1019120156
  },
  {
    value: "160 WEST 129 STREET",
    data: 1019130059
  },
  {
    value: "160 WEST 130 STREET",
    data: 1019140056
  },
  {
    value: "160 WEST 132 STREET",
    data: 1019160155
  },
  {
    value: "160 WEST 133 STREET",
    data: 1019170056
  },
  {
    value: "160 WEST 136 STREET",
    data: 1019200056
  },
  {
    value: "160 WEST 141 STREET",
    data: 1020090052
  },
  {
    value: "160 WEST 142 STREET",
    data: 1020100061
  },
  {
    value: "160 WEST 142 STREET",
    data: 1020100061
  },
  {
    value: "160 WEST 144 STREET",
    data: 1020120057
  },
  {
    value: "160 WEST 144 STREET",
    data: 1020120057
  },
  {
    value: "160 WEST 146 STREET",
    data: 1020140055
  },
  {
    value: "160 WEST 22 STREET",
    data: 1007970074
  },
  {
    value: "160 WEST 22 STREET",
    data: 1007970074
  },
  {
    value: "160 WEST 225 STREET",
    data: 1022150070
  },
  {
    value: "160 WEST 228 STREET",
    data: 1022150322
  },
  {
    value: "160 WEST 48 STREET",
    data: 1010000057
  },
  {
    value: "160 WEST 54 STREET",
    data: 1010060060
  },
  {
    value: "160 WEST 56 STREET",
    data: 1010080060
  },
  {
    value: "160 WEST 66 STREET",
    data: 1011370001
  },
  {
    value: "160 WEST 66 STREET",
    data: 1011377501
  },
  {
    value: "160 WEST 66 STREET",
    data: 1011377501
  },
  {
    value: "160 WEST 72 STREET",
    data: 1011430057
  },
  {
    value: "160 WEST 73 STREET",
    data: 1011440056
  },
  {
    value: "160 WEST 73 STREET",
    data: 1011440056
  },
  {
    value: "160 WEST 74 STREET",
    data: 1011450057
  },
  {
    value: "160 WEST 75 STREET",
    data: 1011460060
  },
  {
    value: "160 WEST 76 STREET",
    data: 1011470155
  },
  {
    value: "160 WEST 77 STREET",
    data: 1011480056
  },
  {
    value: "160 WEST 77 STREET",
    data: 1011480056
  },
  {
    value: "160 WEST 82 STREET",
    data: 1012120056
  },
  {
    value: "160 WEST 84 STREET",
    data: 1012140060
  },
  {
    value: "160 WEST 84 STREET",
    data: 1012140060
  },
  {
    value: "160 WEST 85 STREET",
    data: 1012150056
  },
  {
    value: "160 WEST 85 STREET",
    data: 1012150056
  },
  {
    value: "160 WEST 86 STREET",
    data: 1012167503
  },
  {
    value: "160 WEST 86 STREET",
    data: 1012167503
  },
  {
    value: "160 WEST 87 STREET",
    data: 1012170054
  },
  {
    value: "160 WEST 87 STREET",
    data: 1012170054
  },
  {
    value: "160 WEST 88 STREET",
    data: 1012180152
  },
  {
    value: "160 WEST 92 STREET",
    data: 1012220059
  },
  {
    value: "160 WEST 94 STREET",
    data: 1012240155
  },
  {
    value: "160 WEST 95 STREET",
    data: 1012250055
  },
  {
    value: "160 WEST 95 STREET",
    data: 1012250055
  },
  {
    value: "160 WEST END AVENUE",
    data: 1011587501
  },
  {
    value: "160 WEST END AVENUE",
    data: 1011587501
  },
  {
    value: "160 WOOSTER STREET",
    data: 1005147505
  },
  {
    value: "160 WOOSTER STREET",
    data: 1005147505
  },
  {
    value: "1600 3 AVENUE",
    data: 1015180039
  },
  {
    value: "1600 3 AVENUE",
    data: 1015180039
  },
  {
    value: "1600 BROADWAY",
    data: 1010207502
  },
  {
    value: "1600 BROADWAY",
    data: 1010207502
  },
  {
    value: "1600 LEXINGTON AVENUE",
    data: 1016290016
  },
  {
    value: "1600 ST NICHOLAS AVENUE",
    data: 1021610001
  },
  {
    value: "1600 ST NICHOLAS AVENUE",
    data: 1021610001
  },
  {
    value: "1601 2 AVENUE",
    data: 1015290021
  },
  {
    value: "1601 3 AVENUE",
    data: 1015367501
  },
  {
    value: "1601 3 AVENUE",
    data: 1015367501
  },
  {
    value: "1601 BROADWAY",
    data: 1010200046
  },
  {
    value: "1601 ST NICHOLAS AVENUE",
    data: 1021690053
  },
  {
    value: "1601 ST NICHOLAS AVENUE",
    data: 1021690053
  },
  {
    value: "1601 YORK AVENUE",
    data: 1015640026
  },
  {
    value: "1602 1 AVENUE",
    data: 1015630001
  },
  {
    value: "1602 1 AVENUE",
    data: 1015630001
  },
  {
    value: "1602 LEXINGTON AVENUE",
    data: 1016290057
  },
  {
    value: "1603 2 AVENUE",
    data: 1015290022
  },
  {
    value: "1603 YORK AVENUE",
    data: 1015640027
  },
  {
    value: "1604 1 AVENUE",
    data: 1015630002
  },
  {
    value: "1604 1 AVENUE",
    data: 1015630002
  },
  {
    value: "1604 BROADWAY",
    data: 1010200038
  },
  {
    value: "1604 LEXINGTON AVENUE",
    data: 1016290157
  },
  {
    value: "1605 2 AVENUE",
    data: 1015290023
  },
  {
    value: "1605 YORK AVENUE",
    data: 1015640028
  },
  {
    value: "1606 1 AVENUE",
    data: 1015630003
  },
  {
    value: "1606 1 AVENUE",
    data: 1015630003
  },
  {
    value: "1606 AMSTERDAM AVENUE",
    data: 1020710029
  },
  {
    value: "1606 AMSTERDAM AVENUE",
    data: 1020710029
  },
  {
    value: "1606 LEXINGTON AVENUE",
    data: 1016290058
  },
  {
    value: "1607 YORK AVENUE",
    data: 1015640029
  },
  {
    value: "1608 1 AVENUE",
    data: 1015630004
  },
  {
    value: "1608 1 AVENUE",
    data: 1015630004
  },
  {
    value: "1608 AMSTERDAM AVENUE",
    data: 1020710030
  },
  {
    value: "1608 AMSTERDAM AVENUE",
    data: 1020710030
  },
  {
    value: "1608 LEXINGTON AVENUE",
    data: 1016290158
  },
  {
    value: "1609 2 AVENUE",
    data: 1015290024
  },
  {
    value: "161 10 AVENUE",
    data: 1006910033
  },
  {
    value: "161 8 AVENUE",
    data: 1007420034
  },
  {
    value: "161 9 AVENUE",
    data: 1007170040
  },
  {
    value: "161 ALLEN STREET",
    data: 1004160025
  },
  {
    value: "161 ALLEN STREET",
    data: 1004160025
  },
  {
    value: "161 ATTORNEY STREET",
    data: 1003500067
  },
  {
    value: "161 ATTORNEY STREET",
    data: 1003500067
  },
  {
    value: "161 AVENUE OF THE AMER",
    data: 1005050031
  },
  {
    value: "161 BOWERY",
    data: 1004240006
  },
  {
    value: "161 CHARLES STREET",
    data: 1006370041
  },
  {
    value: "161 CONVENT AVENUE",
    data: 1019570078
  },
  {
    value: "161 DYCKMAN STREET",
    data: 1022240049
  },
  {
    value: "161 EAST 104 STREET",
    data: 1016320026
  },
  {
    value: "161 EAST 106 STREET",
    data: 1016340029
  },
  {
    value: "161 EAST 106 STREET",
    data: 1016340029
  },
  {
    value: "161 EAST 107 STREET",
    data: 1016350126
  },
  {
    value: "161 EAST 108 STREET",
    data: 1016360126
  },
  {
    value: "161 EAST 109 STREET",
    data: 1016370026
  },
  {
    value: "161 EAST 110 STREET",
    data: 1016387501
  },
  {
    value: "161 EAST 110 STREET",
    data: 1016387501
  },
  {
    value: "161 EAST 115 STREET",
    data: 1016430024
  },
  {
    value: "161 EAST 116 STREET",
    data: 1016440026
  },
  {
    value: "161 EAST 121 STREET",
    data: 1017700129
  },
  {
    value: "161 EAST 122 STREET",
    data: 1017710024
  },
  {
    value: "161 EAST 123 STREET",
    data: 1017720026
  },
  {
    value: "161 EAST 32 STREET",
    data: 1008880035
  },
  {
    value: "161 EAST 33 STREET",
    data: 1008890033
  },
  {
    value: "161 EAST 35 STREET",
    data: 1008910037
  },
  {
    value: "161 EAST 61 STREET",
    data: 1013960030
  },
  {
    value: "161 EAST 62 STREET",
    data: 1013970128
  },
  {
    value: "161 EAST 63 STREET",
    data: 1013980129
  },
  {
    value: "161 EAST 64 STREET",
    data: 1013990024
  },
  {
    value: "161 EAST 65 STREET",
    data: 1014000030
  },
  {
    value: "161 EAST 69 STREET",
    data: 1014040030
  },
  {
    value: "161 EAST 70 STREET",
    data: 1014050026
  },
  {
    value: "161 EAST 71 STREET",
    data: 1014060125
  },
  {
    value: "161 EAST 73 STREET",
    data: 1014080024
  },
  {
    value: "161 EAST 74 STREET",
    data: 1014090027
  },
  {
    value: "161 EAST 78 STREET",
    data: 1014130025
  },
  {
    value: "161 EAST 79 STREET",
    data: 1015080024
  },
  {
    value: "161 EAST 79 STREET",
    data: 1015080024
  },
  {
    value: "161 EAST 80 STREET",
    data: 1015090025
  },
  {
    value: "161 EAST 81 STREET",
    data: 1015100029
  },
  {
    value: "161 EAST 82 STREET",
    data: 1015110127
  },
  {
    value: "161 EAST 88 STREET",
    data: 1015170027
  },
  {
    value: "161 EAST 88 STREET",
    data: 1015170027
  },
  {
    value: "161 EAST 89 STREET",
    data: 1015180029
  },
  {
    value: "161 EAST 89 STREET",
    data: 1015180029
  },
  {
    value: "161 EAST 90 STREET",
    data: 1015190025
  },
  {
    value: "161 EAST 90 STREET",
    data: 1015190025
  },
  {
    value: "161 EAST 94 STREET",
    data: 1015230125
  },
  {
    value: "161 EAST 96 STREET",
    data: 1016240025
  },
  {
    value: "161 EAST 96 STREET",
    data: 1016240025
  },
  {
    value: "161 EAST 99 STREET",
    data: 1016270027
  },
  {
    value: "161 EAST 99 STREET",
    data: 1016270027
  },
  {
    value: "161 EDGECOMBE AVENUE",
    data: 1020510085
  },
  {
    value: "161 EDGECOMBE AVENUE",
    data: 1020510085
  },
  {
    value: "161 ESSEX STREET",
    data: 1004120072
  },
  {
    value: "161 FRONT STREET",
    data: 1000720012
  },
  {
    value: "161 FT WASHINGTON AVENUE",
    data: 1021390001
  },
  {
    value: "161 GRAND STREET",
    data: 1002347501
  },
  {
    value: "161 GRAND STREET",
    data: 1002347501
  },
  {
    value: "161 HESTER STREET",
    data: 1002380033
  },
  {
    value: "161 HUDSON STREET",
    data: 1002157502
  },
  {
    value: "161 HUDSON STREET",
    data: 1002157502
  },
  {
    value: "161 LENOX AVENUE",
    data: 1019030029
  },
  {
    value: "161 LENOX AVENUE",
    data: 1019030029
  },
  {
    value: "161 LEXINGTON AVENUE",
    data: 1008860030
  },
  {
    value: "161 LUDLOW STREET",
    data: 1004120035
  },
  {
    value: "161 MADISON AVENUE",
    data: 1008627501
  },
  {
    value: "161 MAIDEN LANE",
    data: 1000720002
  },
  {
    value: "161 MAIDEN LANE",
    data: 1000720002
  },
  {
    value: "161 MANHATTAN AVENUE",
    data: 1018430016
  },
  {
    value: "161 MANHATTAN AVENUE",
    data: 1018430016
  },
  {
    value: "161 MORNINGSIDE AVENUE",
    data: 1019530001
  },
  {
    value: "161 MOTT STREET",
    data: 1004710049
  },
  {
    value: "161 MOTT STREET",
    data: 1004710049
  },
  {
    value: "161 ORCHARD STREET",
    data: 1004160059
  },
  {
    value: "161 ORCHARD STREET",
    data: 1004160059
  },
  {
    value: "161 PERRY STREET",
    data: 1006370077
  },
  {
    value: "161 PERRY STREET",
    data: 1006370077
  },
  {
    value: "161 PRINCE STREET",
    data: 1005160043
  },
  {
    value: "161 PRINCE STREET",
    data: 1005160043
  },
  {
    value: "161 RIVINGTON STREET",
    data: 1003480020
  },
  {
    value: "161 RIVINGTON STREET",
    data: 1003480020
  },
  {
    value: "161 SHERMAN AVENUE",
    data: 1022210009
  },
  {
    value: "161 STANTON STREET",
    data: 1003490017
  },
  {
    value: "161 SUFFOLK STREET",
    data: 1003550065
  },
  {
    value: "161 WEST 10 STREET",
    data: 1006110031
  },
  {
    value: "161 WEST 10 STREET",
    data: 1006110031
  },
  {
    value: "161 WEST 105 STREET",
    data: 1018600005
  },
  {
    value: "161 WEST 105 STREET",
    data: 1018600005
  },
  {
    value: "161 WEST 12 STREET",
    data: 1006087505
  },
  {
    value: "161 WEST 122 STREET",
    data: 1019070006
  },
  {
    value: "161 WEST 129 STREET",
    data: 1019140007
  },
  {
    value: "161 WEST 13 STREET",
    data: 1006090076
  },
  {
    value: "161 WEST 132 STREET",
    data: 1019170005
  },
  {
    value: "161 WEST 133 STREET",
    data: 1019187501
  },
  {
    value: "161 WEST 133 STREET",
    data: 1019187501
  },
  {
    value: "161 WEST 136 STREET",
    data: 1019210109
  },
  {
    value: "161 WEST 140 STREET",
    data: 1020090008
  },
  {
    value: "161 WEST 140 STREET",
    data: 1020090008
  },
  {
    value: "161 WEST 22 STREET",
    data: 1007980011
  },
  {
    value: "161 WEST 23 STREET",
    data: 1007990010
  },
  {
    value: "161 WEST 4 STREET",
    data: 1005920027
  },
  {
    value: "161 WEST 61 STREET",
    data: 1011320030
  },
  {
    value: "161 WEST 61 STREET",
    data: 1011327501
  },
  {
    value: "161 WEST 61 STREET",
    data: 1011327501
  },
  {
    value: "161 WEST 71 STREET",
    data: 1011437501
  },
  {
    value: "161 WEST 72 STREET",
    data: 1011440008
  },
  {
    value: "161 WEST 73 STREET",
    data: 1011450009
  },
  {
    value: "161 WEST 74 STREET",
    data: 1011460105
  },
  {
    value: "161 WEST 75 STREET",
    data: 1011477501
  },
  {
    value: "161 WEST 75 STREET",
    data: 1011477501
  },
  {
    value: "161 WEST 76 STREET",
    data: 1011480009
  },
  {
    value: "161 WEST 78 STREET",
    data: 1011500007
  },
  {
    value: "161 WEST 80 STREET",
    data: 1012110009
  },
  {
    value: "161 WEST 86 STREET",
    data: 1012170006
  },
  {
    value: "161 WEST 86 STREET",
    data: 1012170006
  },
  {
    value: "161 WEST 87 STREET",
    data: 1012180112
  },
  {
    value: "161 WEST 88 STREET",
    data: 1012190012
  },
  {
    value: "161 WEST 91 STREET",
    data: 1012220007
  },
  {
    value: "161 WEST 95 STREET",
    data: 1012260108
  },
  {
    value: "161 WILLIAM STREET",
    data: 1000920005
  },
  {
    value: "1610 LEXINGTON AVENUE",
    data: 1016290159
  },
  {
    value: "1610 ST NICHOLAS AVENUE",
    data: 1021610004
  },
  {
    value: "1610 ST NICHOLAS AVENUE",
    data: 1021610004
  },
  {
    value: "1610 YORK AVENUE",
    data: 1015820001
  },
  {
    value: "1610 YORK AVENUE",
    data: 1015820001
  },
  {
    value: "1611 2 AVENUE",
    data: 1015290025
  },
  {
    value: "1612 LEXINGTON AVENUE",
    data: 1016290059
  },
  {
    value: "1612 YORK AVENUE",
    data: 1015820002
  },
  {
    value: "1613 2 AVENUE",
    data: 1015290026
  },
  {
    value: "1613 BROADWAY",
    data: 1010210019
  },
  {
    value: "1613 ST NICHOLAS AVENUE",
    data: 1021690050
  },
  {
    value: "1614 2 AVENUE",
    data: 1015460050
  },
  {
    value: "1614 2 AVENUE",
    data: 1015460050
  },
  {
    value: "1614 AMSTERDAM AVENUE",
    data: 1020710032
  },
  {
    value: "1614 YORK AVENUE",
    data: 1015820003
  },
  {
    value: "1615 1 AVENUE",
    data: 1015460030
  },
  {
    value: "1615 2 AVENUE",
    data: 1015290027
  },
  {
    value: "1615 MADISON AVENUE",
    data: 1016140021
  },
  {
    value: "1615 ST NICHOLAS AVENUE",
    data: 1021690048
  },
  {
    value: "1616 2 AVENUE",
    data: 1015460049
  },
  {
    value: "1616 2 AVENUE",
    data: 1015460049
  },
  {
    value: "1616 AMSTERDAM AVENUE",
    data: 1020710036
  },
  {
    value: "1616 AMSTERDAM AVENUE",
    data: 1020710036
  },
  {
    value: "1616 YORK AVENUE",
    data: 1015820004
  },
  {
    value: "1616 YORK AVENUE",
    data: 1015820004
  },
  {
    value: "1617 YORK AVENUE",
    data: 1015650022
  },
  {
    value: "1617 YORK AVENUE",
    data: 1015650022
  },
  {
    value: "1618 MADISON AVENUE",
    data: 1016140014
  },
  {
    value: "1618 MADISON AVENUE",
    data: 1016140014
  },
  {
    value: "1619 2 AVENUE",
    data: 1015300021
  },
  {
    value: "1619 2 AVENUE",
    data: 1015300021
  },
  {
    value: "1619 AMSTERDAM AVENUE",
    data: 1020570029
  },
  {
    value: "1619 AMSTERDAM AVENUE",
    data: 1020570029
  },
  {
    value: "1619 YORK AVENUE",
    data: 1015650023
  },
  {
    value: "1619 YORK AVENUE",
    data: 1015650023
  },
  {
    value: "161A WEST 129 STREET",
    data: 1019140008
  },
  {
    value: "162 1 AVENUE",
    data: 1004370008
  },
  {
    value: "162 11 AVENUE",
    data: 1006940001
  },
  {
    value: "162 2 AVENUE",
    data: 1004520002
  },
  {
    value: "162 2 AVENUE",
    data: 1004520002
  },
  {
    value: "162 3 AVENUE",
    data: 1008710047
  },
  {
    value: "162 3 AVENUE",
    data: 1008710047
  },
  {
    value: "162 5 AVENUE",
    data: 1008230037
  },
  {
    value: "162 8 AVENUE",
    data: 1007680001
  },
  {
    value: "162 ATTORNEY STREET",
    data: 1003450006
  },
  {
    value: "162 AVENUE C",
    data: 1003820100
  },
  {
    value: "162 AVENUE C",
    data: 1003820100
  },
  {
    value: "162 AVENUE OF THE AMER",
    data: 1004900019
  },
  {
    value: "162 BENNETT AVENUE",
    data: 1021800459
  },
  {
    value: "162 BOWERY",
    data: 1004780035
  },
  {
    value: "162 CHAMBERS STREET",
    data: 1001370026
  },
  {
    value: "162 CHRISTOPHER STREET",
    data: 1006047501
  },
  {
    value: "162 EAST 100 STREET",
    data: 1016270045
  },
  {
    value: "162 EAST 100 STREET",
    data: 1016270045
  },
  {
    value: "162 EAST 102 STREET",
    data: 1016290047
  },
  {
    value: "162 EAST 105 STREET",
    data: 1016320046
  },
  {
    value: "162 EAST 107 STREET",
    data: 1016340045
  },
  {
    value: "162 EAST 108 STREET",
    data: 1016350046
  },
  {
    value: "162 EAST 109 STREET",
    data: 1016360047
  },
  {
    value: "162 EAST 109 STREET",
    data: 1016360047
  },
  {
    value: "162 EAST 111 STREET",
    data: 1016380048
  },
  {
    value: "162 EAST 116 STREET",
    data: 1016430047
  },
  {
    value: "162 EAST 118 STREET",
    data: 1016450045
  },
  {
    value: "162 EAST 122 STREET",
    data: 1017700048
  },
  {
    value: "162 EAST 122 STREET",
    data: 1017700048
  },
  {
    value: "162 EAST 124 STREET",
    data: 1017720047
  },
  {
    value: "162 EAST 33 STREET",
    data: 1008880045
  },
  {
    value: "162 EAST 37 STREET",
    data: 1008920048
  },
  {
    value: "162 EAST 4 STREET",
    data: 1004310020
  },
  {
    value: "162 EAST 55 STREET",
    data: 1013090039
  },
  {
    value: "162 EAST 55 STREET",
    data: 1013090039
  },
  {
    value: "162 EAST 61 STREET",
    data: 1013950044
  },
  {
    value: "162 EAST 63 STREET",
    data: 1013970044
  },
  {
    value: "162 EAST 64 STREET",
    data: 1013980050
  },
  {
    value: "162 EAST 66 STREET",
    data: 1014000041
  },
  {
    value: "162 EAST 68 STREET",
    data: 1014020042
  },
  {
    value: "162 EAST 7 STREET",
    data: 1004020025
  },
  {
    value: "162 EAST 70 STREET",
    data: 1014040047
  },
  {
    value: "162 EAST 71 STREET",
    data: 1014050045
  },
  {
    value: "162 EAST 74 STREET",
    data: 1014080146
  },
  {
    value: "162 EAST 78 STREET",
    data: 1014120047
  },
  {
    value: "162 EAST 80 STREET",
    data: 1015080046
  },
  {
    value: "162 EAST 80 STREET",
    data: 1015080046
  },
  {
    value: "162 EAST 81 STREET",
    data: 1015090044
  },
  {
    value: "162 EAST 82 STREET",
    data: 1015100046
  },
  {
    value: "162 EAST 82 STREET",
    data: 1015100046
  },
  {
    value: "162 EAST 83 STREET",
    data: 1015110144
  },
  {
    value: "162 EAST 85 STREET",
    data: 1015130045
  },
  {
    value: "162 EAST 85 STREET",
    data: 1015130045
  },
  {
    value: "162 EAST 88 STREET",
    data: 1015160047
  },
  {
    value: "162 EAST 88 STREET",
    data: 1015160047
  },
  {
    value: "162 EAST 90 STREET",
    data: 1015180047
  },
  {
    value: "162 EAST 90 STREET",
    data: 1015180047
  },
  {
    value: "162 EAST 91 STREET",
    data: 1015190045
  },
  {
    value: "162 EAST 91 STREET",
    data: 1015190045
  },
  {
    value: "162 EAST 92 STREET",
    data: 1015200044
  },
  {
    value: "162 EAST 93 STREET",
    data: 1015210048
  },
  {
    value: "162 EAST 95 STREET",
    data: 1015230147
  },
  {
    value: "162 EAST BROADWAY",
    data: 1002830072
  },
  {
    value: "162 EAST BROADWAY",
    data: 1002830072
  },
  {
    value: "162 HENRY STREET",
    data: 1002710053
  },
  {
    value: "162 HENRY STREET",
    data: 1002710053
  },
  {
    value: "162 LENOX AVENUE",
    data: 1017170002
  },
  {
    value: "162 LENOX AVENUE",
    data: 1017170002
  },
  {
    value: "162 LUDLOW STREET",
    data: 1004120040
  },
  {
    value: "162 LUDLOW STREET",
    data: 1004120040
  },
  {
    value: "162 MOTT STREET",
    data: 1004700006
  },
  {
    value: "162 MOTT STREET",
    data: 1004700006
  },
  {
    value: "162 ORCHARD STREET",
    data: 1004110009
  },
  {
    value: "162 ORCHARD STREET",
    data: 1004110009
  },
  {
    value: "162 PERRY STREET",
    data: 1006370018
  },
  {
    value: "162 SPRING STREET",
    data: 1004900020
  },
  {
    value: "162 STANTON STREET",
    data: 1003500033
  },
  {
    value: "162 STANTON STREET",
    data: 1003500033
  },
  {
    value: "162 WEST 120 STREET",
    data: 1019040157
  },
  {
    value: "162 WEST 121 STREET",
    data: 1019050059
  },
  {
    value: "162 WEST 122 STREET",
    data: 1019067501
  },
  {
    value: "162 WEST 123 STREET",
    data: 1019070158
  },
  {
    value: "162 WEST 128 STREET",
    data: 1019120057
  },
  {
    value: "162 WEST 130 STREET",
    data: 1019140057
  },
  {
    value: "162 WEST 132 STREET",
    data: 1019160056
  },
  {
    value: "162 WEST 133 STREET",
    data: 1019170156
  },
  {
    value: "162 WEST 136 STREET",
    data: 1019200156
  },
  {
    value: "162 WEST 141 STREET",
    data: 1020090053
  },
  {
    value: "162 WEST 141 STREET",
    data: 1020090053
  },
  {
    value: "162 WEST 144 STREET",
    data: 1020120058
  },
  {
    value: "162 WEST 144 STREET",
    data: 1020120058
  },
  {
    value: "162 WEST 22 STREET",
    data: 1007970076
  },
  {
    value: "162 WEST 22 STREET",
    data: 1007970076
  },
  {
    value: "162 WEST 228 STREET",
    data: 1022150320
  },
  {
    value: "162 WEST 4 STREET",
    data: 1005900032
  },
  {
    value: "162 WEST 4 STREET",
    data: 1005900032
  },
  {
    value: "162 WEST 48 STREET",
    data: 1010000058
  },
  {
    value: "162 WEST 54 STREET",
    data: 1010060063
  },
  {
    value: "162 WEST 54 STREET",
    data: 1010060063
  },
  {
    value: "162 WEST 56 STREET",
    data: 1010087502
  },
  {
    value: "162 WEST 56 STREET",
    data: 1010087502
  },
  {
    value: "162 WEST 72 STREET",
    data: 1011430058
  },
  {
    value: "162 WEST 75 STREET",
    data: 1011460160
  },
  {
    value: "162 WEST 81 STREET",
    data: 1012110055
  },
  {
    value: "162 WEST 88 STREET",
    data: 1012180053
  },
  {
    value: "162 WEST 92 STREET",
    data: 1012220159
  },
  {
    value: "162 WEST 94 STREET",
    data: 1012240056
  },
  {
    value: "1620 LEXINGTON AVENUE",
    data: 1016300016
  },
  {
    value: "1620 LEXINGTON AVENUE",
    data: 1016300016
  },
  {
    value: "1620 MADISON AVENUE",
    data: 1016140015
  },
  {
    value: "1620 ST NICHOLAS AVENUE",
    data: 1021610009
  },
  {
    value: "1620 ST NICHOLAS AVENUE",
    data: 1021610009
  },
  {
    value: "1621 2 AVENUE",
    data: 1015300022
  },
  {
    value: "1621 LEXINGTON AVENUE",
    data: 1016300021
  },
  {
    value: "1621 LEXINGTON AVENUE",
    data: 1016300021
  },
  {
    value: "1621 ST NICHOLAS AVENUE",
    data: 1021690034
  },
  {
    value: "1621 ST NICHOLAS AVENUE",
    data: 1021690034
  },
  {
    value: "1622 MADISON AVENUE",
    data: 1016140016
  },
  {
    value: "1622 MADISON AVENUE",
    data: 1016140016
  },
  {
    value: "1622 YORK AVENUE",
    data: 1015820052
  },
  {
    value: "1623 2 AVENUE",
    data: 1015300023
  },
  {
    value: "1623 3 AVENUE",
    data: 1015377501
  },
  {
    value: "1624 2 AVENUE",
    data: 1015470001
  },
  {
    value: "1624 2 AVENUE",
    data: 1015470001
  },
  {
    value: "1624 AMSTERDAM AVENUE",
    data: 1020720029
  },
  {
    value: "1624 MADISON AVENUE",
    data: 1016140017
  },
  {
    value: "1624 YORK AVENUE",
    data: 1015820151
  },
  {
    value: "1625 2 AVENUE",
    data: 1015300024
  },
  {
    value: "1625 BROADWAY",
    data: 1010210043
  },
  {
    value: "1625 LEXINGTON AVENUE",
    data: 1016300020
  },
  {
    value: "1625 LEXINGTON AVENUE",
    data: 1016300020
  },
  {
    value: "1626 2 AVENUE",
    data: 1015470002
  },
  {
    value: "1626 3 AVENUE",
    data: 1015200038
  },
  {
    value: "1626 3 AVENUE",
    data: 1015200038
  },
  {
    value: "1626 AMSTERDAM AVENUE",
    data: 1020720030
  },
  {
    value: "1626 AMSTERDAM AVENUE",
    data: 1020720030
  },
  {
    value: "1626 LEXINGTON AVENUE",
    data: 1016300056
  },
  {
    value: "1626 LEXINGTON AVENUE",
    data: 1016300056
  },
  {
    value: "1626 YORK AVENUE",
    data: 1015820051
  },
  {
    value: "1627 2 AVENUE",
    data: 1015300025
  },
  {
    value: "1627 AMSTERDAM AVENUE",
    data: 1020570056
  },
  {
    value: "1627 AMSTERDAM AVENUE",
    data: 1020570056
  },
  {
    value: "1627 BROADWAY",
    data: 1010210045
  },
  {
    value: "1628 2 AVENUE",
    data: 1015477501
  },
  {
    value: "1628 2 AVENUE",
    data: 1015477501
  },
  {
    value: "1628 BROADWAY",
    data: 1010210037
  },
  {
    value: "1628 YORK AVENUE",
    data: 1015820150
  },
  {
    value: "1629 2 AVENUE",
    data: 1015300026
  },
  {
    value: "1629 PARK AVENUE",
    data: 1016430004
  },
  {
    value: "163 1 AVENUE",
    data: 1004520037
  },
  {
    value: "163 12 AVENUE",
    data: 1006620010
  },
  {
    value: "163 8 AVENUE",
    data: 1007420035
  },
  {
    value: "163 ALLEN STREET",
    data: 1004160024
  },
  {
    value: "163 ATTORNEY STREET",
    data: 1003500066
  },
  {
    value: "163 ATTORNEY STREET",
    data: 1003500066
  },
  {
    value: "163 AVENUE C",
    data: 1003930039
  },
  {
    value: "163 BLEECKER STREET",
    data: 1005390039
  },
  {
    value: "163 BOWERY",
    data: 1004240007
  },
  {
    value: "163 CHARLES STREET",
    data: 1006377506
  },
  {
    value: "163 CHRYSTIE STREET",
    data: 1004250033
  },
  {
    value: "163 CHRYSTIE STREET",
    data: 1004250033
  },
  {
    value: "163 EAST 102 STREET",
    data: 1016300025
  },
  {
    value: "163 EAST 103 STREET",
    data: 1016310030
  },
  {
    value: "163 EAST 104 STREET",
    data: 1016320027
  },
  {
    value: "163 EAST 107 STREET",
    data: 1016350027
  },
  {
    value: "163 EAST 108 STREET",
    data: 1016360027
  },
  {
    value: "163 EAST 111 STREET",
    data: 1016390021
  },
  {
    value: "163 EAST 115 STREET",
    data: 1016430025
  },
  {
    value: "163 EAST 116 STREET",
    data: 1016440027
  },
  {
    value: "163 EAST 122 STREET",
    data: 1017710025
  },
  {
    value: "163 EAST 123 STREET",
    data: 1017720028
  },
  {
    value: "163 EAST 125 STREET",
    data: 1017740030
  },
  {
    value: "163 EAST 33 STREET",
    data: 1008890034
  },
  {
    value: "163 EAST 36 STREET",
    data: 1008920037
  },
  {
    value: "163 EAST 36 STREET",
    data: 1008920037
  },
  {
    value: "163 EAST 60 STREET",
    data: 1013950029
  },
  {
    value: "163 EAST 60 STREET",
    data: 1013950029
  },
  {
    value: "163 EAST 61 STREET",
    data: 1013960031
  },
  {
    value: "163 EAST 62 STREET",
    data: 1013970029
  },
  {
    value: "163 EAST 63 STREET",
    data: 1013980030
  },
  {
    value: "163 EAST 64 STREET",
    data: 1013990025
  },
  {
    value: "163 EAST 65 STREET",
    data: 1014000031
  },
  {
    value: "163 EAST 67 STREET",
    data: 1014020030
  },
  {
    value: "163 EAST 69 STREET",
    data: 1014040031
  },
  {
    value: "163 EAST 70 STREET",
    data: 1014050027
  },
  {
    value: "163 EAST 71 STREET",
    data: 1014067502
  },
  {
    value: "163 EAST 73 STREET",
    data: 1014080025
  },
  {
    value: "163 EAST 74 STREET",
    data: 1014090127
  },
  {
    value: "163 EAST 75 STREET",
    data: 1014100026
  },
  {
    value: "163 EAST 78 STREET",
    data: 1014130026
  },
  {
    value: "163 EAST 80 STREET",
    data: 1015090125
  },
  {
    value: "163 EAST 81 STREET",
    data: 1015100030
  },
  {
    value: "163 EAST 81 STREET",
    data: 1015100030
  },
  {
    value: "163 EAST 82 STREET",
    data: 1015110028
  },
  {
    value: "163 EAST 84 STREET",
    data: 1015130029
  },
  {
    value: "163 EAST 86 STREET",
    data: 1015150029
  },
  {
    value: "163 EAST 87 STREET",
    data: 1015160025
  },
  {
    value: "163 EAST 87 STREET",
    data: 1015160025
  },
  {
    value: "163 EAST 89 STREET",
    data: 1015180030
  },
  {
    value: "163 EAST 89 STREET",
    data: 1015180030
  },
  {
    value: "163 EAST 92 STREET",
    data: 1015210029
  },
  {
    value: "163 EAST 92 STREET",
    data: 1015210029
  },
  {
    value: "163 EAST 94 STREET",
    data: 1015230026
  },
  {
    value: "163 EAST 99 STREET",
    data: 1016270028
  },
  {
    value: "163 EAST 99 STREET",
    data: 1016270028
  },
  {
    value: "163 FRONT STREET",
    data: 1000720013
  },
  {
    value: "163 HESTER STREET",
    data: 1002380034
  },
  {
    value: "163 LENOX AVENUE",
    data: 1019030031
  },
  {
    value: "163 LUDLOW STREET",
    data: 1004120034
  },
  {
    value: "163 LUDLOW STREET",
    data: 1004120034
  },
  {
    value: "163 MERCER STREET",
    data: 1005130025
  },
  {
    value: "163 MORNINGSIDE AVENUE",
    data: 1019530002
  },
  {
    value: "163 MOTT STREET",
    data: 1004710048
  },
  {
    value: "163 MOTT STREET",
    data: 1004710048
  },
  {
    value: "163 MULBERRY STREET",
    data: 1004710021
  },
  {
    value: "163 MULBERRY STREET",
    data: 1004710021
  },
  {
    value: "163 ORCHARD STREET",
    data: 1004160058
  },
  {
    value: "163 PRINCE STREET",
    data: 1005160001
  },
  {
    value: "163 PRINCE STREET",
    data: 1005160001
  },
  {
    value: "163 RIVINGTON STREET",
    data: 1003480021
  },
  {
    value: "163 RIVINGTON STREET",
    data: 1003480021
  },
  {
    value: "163 ST NICHOLAS AVENUE",
    data: 1019247501
  },
  {
    value: "163 ST. NICHOLAS AVENUE",
    data: 1019247501
  },
  {
    value: "163 STANTON STREET",
    data: 1003490018
  },
  {
    value: "163 STANTON STREET",
    data: 1003490018
  },
  {
    value: "163 VARICK STREET",
    data: 1005800019
  },
  {
    value: "163 WEST 10 STREET",
    data: 1006110032
  },
  {
    value: "163 WEST 10 STREET",
    data: 1006110032
  },
  {
    value: "163 WEST 107 STREET",
    data: 1018620010
  },
  {
    value: "163 WEST 125 STREET",
    data: 1019100001
  },
  {
    value: "163 WEST 126 STREET",
    data: 1019110008
  },
  {
    value: "163 WEST 129 STREET",
    data: 1019140107
  },
  {
    value: "163 WEST 131 STREET",
    data: 1019160007
  },
  {
    value: "163 WEST 133 STREET",
    data: 1019180008
  },
  {
    value: "163 WEST 133 STREET",
    data: 1019180008
  },
  {
    value: "163 WEST 136 STREET",
    data: 1019210007
  },
  {
    value: "163 WEST 136 STREET",
    data: 1019210007
  },
  {
    value: "163 WEST 143 STREET",
    data: 1020120006
  },
  {
    value: "163 WEST 143 STREET",
    data: 1020120006
  },
  {
    value: "163 WEST 145 STREET",
    data: 1020140006
  },
  {
    value: "163 WEST 145 STREET",
    data: 1020140006
  },
  {
    value: "163 WEST 18 STREET",
    data: 1007947502
  },
  {
    value: "163 WEST 18 STREET",
    data: 1007947502
  },
  {
    value: "163 WEST 21 STREET",
    data: 1007970007
  },
  {
    value: "163 WEST 21 STREET",
    data: 1007970007
  },
  {
    value: "163 WEST 22 STREET",
    data: 1007980010
  },
  {
    value: "163 WEST 228 STREET",
    data: 1022150992
  },
  {
    value: "163 WEST 23 STREET",
    data: 1007990009
  },
  {
    value: "163 WEST 4 STREET",
    data: 1005920028
  },
  {
    value: "163 WEST 71 STREET",
    data: 1011430008
  },
  {
    value: "163 WEST 72 STREET",
    data: 1011440007
  },
  {
    value: "163 WEST 73 STREET",
    data: 1011450008
  },
  {
    value: "163 WEST 73 STREET",
    data: 1011450008
  },
  {
    value: "163 WEST 74 STREET",
    data: 1011460104
  },
  {
    value: "163 WEST 76 STREET",
    data: 1011480008
  },
  {
    value: "163 WEST 78 STREET",
    data: 1011500006
  },
  {
    value: "163 WEST 79 STREET",
    data: 1012107503
  },
  {
    value: "163 WEST 80 STREET",
    data: 1012117501
  },
  {
    value: "163 WEST 81 STREET",
    data: 1012120010
  },
  {
    value: "163 WEST 85 STREET",
    data: 1012160105
  },
  {
    value: "163 WEST 87 STREET",
    data: 1012180012
  },
  {
    value: "163 WEST 88 STREET",
    data: 1012190111
  },
  {
    value: "163 WEST 91 STREET",
    data: 1012220106
  },
  {
    value: "163 WEST 95 STREET",
    data: 1012260008
  },
  {
    value: "163 WEST 97 STREET",
    data: 1018520099
  },
  {
    value: "1630 2 AVENUE",
    data: 1015470004
  },
  {
    value: "1630 2 AVENUE",
    data: 1015470004
  },
  {
    value: "1630 LEXINGTON AVENUE",
    data: 1016300059
  },
  {
    value: "1630 MADISON AVENUE",
    data: 1016147501
  },
  {
    value: "1630 MADISON AVENUE",
    data: 1016147501
  },
  {
    value: "1630 ST NICHOLAS AVENUE",
    data: 1021610013
  },
  {
    value: "1630 ST NICHOLAS AVENUE",
    data: 1021610013
  },
  {
    value: "1630 YORK AVENUE",
    data: 1015820149
  },
  {
    value: "1631 2 AVENUE",
    data: 1015300027
  },
  {
    value: "1631 BROADWAY",
    data: 1010220043
  },
  {
    value: "1631 LEXINGTON AVENUE",
    data: 1016310023
  },
  {
    value: "1631 LEXINGTON AVENUE",
    data: 1016310023
  },
  {
    value: "1631 ST NICHOLAS AVENUE",
    data: 1021690029
  },
  {
    value: "1631 ST NICHOLAS AVENUE",
    data: 1021690029
  },
  {
    value: "1632 2 AVENUE",
    data: 1015470049
  },
  {
    value: "1632 2 AVENUE",
    data: 1015470049
  },
  {
    value: "1632 MADISON AVENUE",
    data: 1016150014
  },
  {
    value: "1632 MADISON AVENUE",
    data: 1016150014
  },
  {
    value: "1632 YORK AVENUE",
    data: 1015820050
  },
  {
    value: "1633 2 AVENUE",
    data: 1015300028
  },
  {
    value: "1633 2 AVENUE",
    data: 1015300028
  },
  {
    value: "1633 LEXINGTON AVENUE",
    data: 1016310022
  },
  {
    value: "1634 1 AVENUE",
    data: 1015640047
  },
  {
    value: "1634 1 AVENUE",
    data: 1015640047
  },
  {
    value: "1634 BROADWAY",
    data: 1010220026
  },
  {
    value: "1634 LEXINGTON AVENUE",
    data: 1016310016
  },
  {
    value: "1634 LEXINGTON AVENUE",
    data: 1016310016
  },
  {
    value: "1634 ST NICHOLAS AVENUE",
    data: 1021610015
  },
  {
    value: "1634 ST NICHOLAS AVENUE",
    data: 1021610015
  },
  {
    value: "1634 YORK AVENUE",
    data: 1015830001
  },
  {
    value: "1634 YORK AVENUE",
    data: 1015830001
  },
  {
    value: "1635 LEXINGTON AVENUE",
    data: 1016317501
  },
  {
    value: "1635 LEXINGTON AVENUE",
    data: 1016317501
  },
  {
    value: "1636 LEXINGTON AVENUE",
    data: 1016310156
  },
  {
    value: "1636 LEXINGTON AVENUE",
    data: 1016310156
  },
  {
    value: "1637 1 AVENUE",
    data: 1015480023
  },
  {
    value: "1637 1 AVENUE",
    data: 1015480023
  },
  {
    value: "1638 AMSTERDAM AVENUE",
    data: 1020720036
  },
  {
    value: "1639 1 AVENUE",
    data: 1015480024
  },
  {
    value: "163A WEST 228 STREET",
    data: 1022150192
  },
  {
    value: "164 1 AVENUE",
    data: 1004380001
  },
  {
    value: "164 11 AVENUE",
    data: 1006940002
  },
  {
    value: "164 5 AVENUE",
    data: 1008230041
  },
  {
    value: "164 8 AVENUE",
    data: 1007680002
  },
  {
    value: "164 ATTORNEY STREET",
    data: 1003450007
  },
  {
    value: "164 ATTORNEY STREET",
    data: 1003450007
  },
  {
    value: "164 AVENUE A",
    data: 1004040060
  },
  {
    value: "164 BANK STREET",
    data: 1006387501
  },
  {
    value: "164 BANK STREET",
    data: 1006387501
  },
  {
    value: "164 BENNETT AVENUE",
    data: 1021800460
  },
  {
    value: "164 BOWERY",
    data: 1004780034
  },
  {
    value: "164 CANAL STREET",
    data: 1002010018
  },
  {
    value: "164 EAST 100 STREET",
    data: 1016270044
  },
  {
    value: "164 EAST 104 STREET",
    data: 1016310049
  },
  {
    value: "164 EAST 105 STREET",
    data: 1016320145
  },
  {
    value: "164 EAST 107 STREET",
    data: 1016340044
  },
  {
    value: "164 EAST 107 STREET",
    data: 1016340044
  },
  {
    value: "164 EAST 111 STREET",
    data: 1016380047
  },
  {
    value: "164 EAST 112 STREET",
    data: 1016390045
  },
  {
    value: "164 EAST 112 STREET",
    data: 1016390045
  },
  {
    value: "164 EAST 117 STREET",
    data: 1016440048
  },
  {
    value: "164 EAST 124 STREET",
    data: 1017720046
  },
  {
    value: "164 EAST 33 STREET",
    data: 1008880044
  },
  {
    value: "164 EAST 33 STREET",
    data: 1008880044
  },
  {
    value: "164 EAST 56 STREET",
    data: 1013100140
  },
  {
    value: "164 EAST 61 STREET",
    data: 1013950043
  },
  {
    value: "164 EAST 64 STREET",
    data: 1013980049
  },
  {
    value: "164 EAST 66 STREET",
    data: 1014000140
  },
  {
    value: "164 EAST 7 STREET",
    data: 1004020026
  },
  {
    value: "164 EAST 70 STREET",
    data: 1014040046
  },
  {
    value: "164 EAST 71 STREET",
    data: 1014050044
  },
  {
    value: "164 EAST 72 STREET",
    data: 1014060046
  },
  {
    value: "164 EAST 72 STREET",
    data: 1014060046
  },
  {
    value: "164 EAST 73 STREET",
    data: 1014070047
  },
  {
    value: "164 EAST 74 STREET",
    data: 1014080046
  },
  {
    value: "164 EAST 78 STREET",
    data: 1014120046
  },
  {
    value: "164 EAST 78 STREET",
    data: 1014120046
  },
  {
    value: "164 EAST 81 STREET",
    data: 1015090043
  },
  {
    value: "164 EAST 82 STREET",
    data: 1015100045
  },
  {
    value: "164 EAST 82 STREET",
    data: 1015100045
  },
  {
    value: "164 EAST 83 STREET",
    data: 1015110044
  },
  {
    value: "164 EAST 85 STREET",
    data: 1015130044
  },
  {
    value: "164 EAST 85 STREET",
    data: 1015130044
  },
  {
    value: "164 EAST 87 STREET",
    data: 1015150045
  },
  {
    value: "164 EAST 88 STREET",
    data: 1015160046
  },
  {
    value: "164 EAST 88 STREET",
    data: 1015160046
  },
  {
    value: "164 EAST 90 STREET",
    data: 1015180046
  },
  {
    value: "164 EAST 90 STREET",
    data: 1015180046
  },
  {
    value: "164 EAST 91 STREET",
    data: 1015190044
  },
  {
    value: "164 EAST 93 STREET",
    data: 1015210147
  },
  {
    value: "164 EAST 95 STREET",
    data: 1015230047
  },
  {
    value: "164 ELDRIDGE STREET",
    data: 1004157501
  },
  {
    value: "164 ELIZABETH STREET",
    data: 1004780012
  },
  {
    value: "164 ELIZABETH STREET",
    data: 1004780012
  },
  {
    value: "164 ESSEX STREET",
    data: 1003550010
  },
  {
    value: "164 HENRY STREET",
    data: 1002710052
  },
  {
    value: "164 HENRY STREET",
    data: 1002710052
  },
  {
    value: "164 JOHN STREET",
    data: 1000720020
  },
  {
    value: "164 LEXINGTON AVENUE",
    data: 1008860023
  },
  {
    value: "164 LUDLOW STREET",
    data: 1004120041
  },
  {
    value: "164 LUDLOW STREET",
    data: 1004120041
  },
  {
    value: "164 MOTT STREET",
    data: 1004700007
  },
  {
    value: "164 MOTT STREET",
    data: 1004700007
  },
  {
    value: "164 MULBERRY STREET",
    data: 1004710029
  },
  {
    value: "164 ORCHARD STREET",
    data: 1004110010
  },
  {
    value: "164 ORCHARD STREET",
    data: 1004110010
  },
  {
    value: "164 PEARL STREET",
    data: 1000397501
  },
  {
    value: "164 PEARL STREET",
    data: 1000397501
  },
  {
    value: "164 PERRY STREET",
    data: 1006370017
  },
  {
    value: "164 SHERMAN AVENUE",
    data: 1022250032
  },
  {
    value: "164 SHERMAN AVENUE",
    data: 1022250032
  },
  {
    value: "164 STANTON STREET",
    data: 1003500031
  },
  {
    value: "164 STANTON STREET",
    data: 1003500031
  },
  {
    value: "164 WAVERLY PLACE",
    data: 1005920050
  },
  {
    value: "164 WAVERLY PLACE",
    data: 1005920050
  },
  {
    value: "164 WEST 100 STREET",
    data: 1018520059
  },
  {
    value: "164 WEST 116 STREET",
    data: 1018250059
  },
  {
    value: "164 WEST 116 STREET",
    data: 1018250059
  },
  {
    value: "164 WEST 120 STREET",
    data: 1019040058
  },
  {
    value: "164 WEST 121 STREET",
    data: 1019050060
  },
  {
    value: "164 WEST 122 STREET",
    data: 1019060059
  },
  {
    value: "164 WEST 123 STREET",
    data: 1019070059
  },
  {
    value: "164 WEST 128 STREET",
    data: 1019120058
  },
  {
    value: "164 WEST 128 STREET",
    data: 1019120058
  },
  {
    value: "164 WEST 130 STREET",
    data: 1019140058
  },
  {
    value: "164 WEST 132 STREET",
    data: 1019160057
  },
  {
    value: "164 WEST 133 STREET",
    data: 1019170057
  },
  {
    value: "164 WEST 136 STREET",
    data: 1019200057
  },
  {
    value: "164 WEST 141 STREET",
    data: 1020090054
  },
  {
    value: "164 WEST 141 STREET",
    data: 1020090054
  },
  {
    value: "164 WEST 146 STREET",
    data: 1020140061
  },
  {
    value: "164 WEST 146 STREET",
    data: 1020140061
  },
  {
    value: "164 WEST 225 STREET",
    data: 1022150068
  },
  {
    value: "164 WEST 25 STREET",
    data: 1008000074
  },
  {
    value: "164 WEST 74 STREET",
    data: 1011450059
  },
  {
    value: "164 WEST 79 STREET",
    data: 1011500056
  },
  {
    value: "164 WEST 79 STREET",
    data: 1011500056
  },
  {
    value: "164 WEST 80 STREET",
    data: 1012100058
  },
  {
    value: "164 WEST 80 STREET",
    data: 1012100058
  },
  {
    value: "164 WEST 81 STREET",
    data: 1012110155
  },
  {
    value: "164 WEST 83 STREET",
    data: 1012137506
  },
  {
    value: "164 WEST 83 STREET",
    data: 1012137506
  },
  {
    value: "164 WEST 88 STREET",
    data: 1012180054
  },
  {
    value: "164 WEST 94 STREET",
    data: 1012240057
  },
  {
    value: "164 WILLIAM STREET",
    data: 1000930024
  },
  {
    value: "1640 2 AVENUE",
    data: 1015480001
  },
  {
    value: "1640 2 AVENUE",
    data: 1015480001
  },
  {
    value: "1640 AMSTERDAM AVENUE",
    data: 1020730029
  },
  {
    value: "1640 AMSTERDAM AVENUE",
    data: 1020730029
  },
  {
    value: "1640 PARK AVENUE",
    data: 1016220033
  },
  {
    value: "1640 ST NICHOLAS AVENUE",
    data: 1021610017
  },
  {
    value: "1640 ST NICHOLAS AVENUE",
    data: 1021610017
  },
  {
    value: "1640 YORK AVENUE",
    data: 1015830004
  },
  {
    value: "1640 YORK AVENUE",
    data: 1015830004
  },
  {
    value: "1641 1 AVENUE",
    data: 1015480025
  },
  {
    value: "1641 1 AVENUE",
    data: 1015480025
  },
  {
    value: "1641 2 AVENUE",
    data: 1015310021
  },
  {
    value: "1641 AMSTERDAM AVENUE",
    data: 1020580001
  },
  {
    value: "1641 AMSTERDAM AVENUE",
    data: 1020580001
  },
  {
    value: "1641 MADISON AVENUE",
    data: 1016150023
  },
  {
    value: "1641 MADISON AVENUE",
    data: 1016150023
  },
  {
    value: "1641 ST NICHOLAS AVENUE",
    data: 1021690018
  },
  {
    value: "1641 ST NICHOLAS AVENUE",
    data: 1021690018
  },
  {
    value: "1641 YORK AVENUE",
    data: 1015660126
  },
  {
    value: "1642 LEXINGTON AVENUE",
    data: 1016310056
  },
  {
    value: "1642 LEXINGTON AVENUE",
    data: 1016310056
  },
  {
    value: "1642 MADISON AVENUE",
    data: 1016150055
  },
  {
    value: "1642 PARK AVENUE",
    data: 1016220034
  },
  {
    value: "1642 YORK AVENUE",
    data: 1015830105
  },
  {
    value: "1643 1 AVENUE",
    data: 1015480026
  },
  {
    value: "1643 2 AVENUE",
    data: 1015310022
  },
  {
    value: "1643 LEXINGTON AVENUE",
    data: 1016310051
  },
  {
    value: "1643 YORK AVENUE",
    data: 1015660027
  },
  {
    value: "1644 3 AVENUE",
    data: 1015210033
  },
  {
    value: "1644 MADISON AVENUE",
    data: 1016150056
  },
  {
    value: "1644 PARK AVENUE",
    data: 1016220035
  },
  {
    value: "1645 1 AVENUE",
    data: 1015480027
  },
  {
    value: "1645 2 AVENUE",
    data: 1015310023
  },
  {
    value: "1645 3 AVENUE",
    data: 1015380001
  },
  {
    value: "1645 PARK AVENUE",
    data: 1016440072
  },
  {
    value: "1645 YORK AVENUE",
    data: 1015660028
  },
  {
    value: "1645 YORK AVENUE",
    data: 1015660028
  },
  {
    value: "1646 1 AVENUE",
    data: 1015650001
  },
  {
    value: "1646 1 AVENUE",
    data: 1015650001
  },
  {
    value: "1646 3 AVENUE",
    data: 1015210034
  },
  {
    value: "1646 3 AVENUE",
    data: 1015210034
  },
  {
    value: "1646 AMSTERDAM AVENUE",
    data: 1020730032
  },
  {
    value: "1646 MADISON AVENUE",
    data: 1016150057
  },
  {
    value: "1646 PARK AVENUE",
    data: 1016220036
  },
  {
    value: "1647 1 AVENUE",
    data: 1015480127
  },
  {
    value: "1647 2 AVENUE",
    data: 1015310024
  },
  {
    value: "1648 2 AVENUE",
    data: 1015480052
  },
  {
    value: "1648 AMSTERDAM AVENUE",
    data: 1020730033
  },
  {
    value: "1648 BROADWAY",
    data: 1010220035
  },
  {
    value: "1649 1 AVENUE",
    data: 1015480028
  },
  {
    value: "1649 ST NICHOLAS AVENUE",
    data: 1021700251
  },
  {
    value: "1649 ST NICHOLAS AVENUE",
    data: 1021700251
  },
  {
    value: "165 1 AVENUE",
    data: 1004520036
  },
  {
    value: "165 10 AVENUE",
    data: 1006910035
  },
  {
    value: "165 2 AVENUE",
    data: 1004660026
  },
  {
    value: "165 8 AVENUE",
    data: 1007420036
  },
  {
    value: "165 9 AVENUE",
    data: 1007170042
  },
  {
    value: "165 ALLEN STREET",
    data: 1004160023
  },
  {
    value: "165 ATTORNEY STREET",
    data: 1003500065
  },
  {
    value: "165 ATTORNEY STREET",
    data: 1003500065
  },
  {
    value: "165 AUDUBON AVENUE",
    data: 1021300029
  },
  {
    value: "165 AUDUBON AVENUE",
    data: 1021300029
  },
  {
    value: "165 AVENUE A",
    data: 1004380031
  },
  {
    value: "165 AVENUE B",
    data: 1003930004
  },
  {
    value: "165 AVENUE C",
    data: 1003930038
  },
  {
    value: "165 BENNETT AVENUE",
    data: 1021800483
  },
  {
    value: "165 BENNETT AVENUE",
    data: 1021800483
  },
  {
    value: "165 BLEECKER STREET",
    data: 1005390040
  },
  {
    value: "165 BLEECKER STREET",
    data: 1005390040
  },
  {
    value: "165 BOWERY",
    data: 1004240008
  },
  {
    value: "165 CHAMBERS STREET",
    data: 1001407501
  },
  {
    value: "165 CHARLES STREET",
    data: 1006377505
  },
  {
    value: "165 CHARLES STREET",
    data: 1006377505
  },
  {
    value: "165 CHRYSTIE STREET",
    data: 1004250032
  },
  {
    value: "165 EAST 103 STREET",
    data: 1016310031
  },
  {
    value: "165 EAST 104 STREET",
    data: 1016327501
  },
  {
    value: "165 EAST 104 STREET",
    data: 1016327501
  },
  {
    value: "165 EAST 106 STREET",
    data: 1016340031
  },
  {
    value: "165 EAST 107 STREET",
    data: 1016350127
  },
  {
    value: "165 EAST 108 STREET",
    data: 1016360028
  },
  {
    value: "165 EAST 115 STREET",
    data: 1016430026
  },
  {
    value: "165 EAST 118 STREET",
    data: 1017670030
  },
  {
    value: "165 EAST 118 STREET",
    data: 1017670030
  },
  {
    value: "165 EAST 123 STREET",
    data: 1017720029
  },
  {
    value: "165 EAST 2 STREET",
    data: 1003970015
  },
  {
    value: "165 EAST 32 STREET",
    data: 1008880037
  },
  {
    value: "165 EAST 32 STREET",
    data: 1008880037
  },
  {
    value: "165 EAST 33 STREET",
    data: 1008890035
  },
  {
    value: "165 EAST 35 STREET",
    data: 1008910039
  },
  {
    value: "165 EAST 35 STREET",
    data: 1008910039
  },
  {
    value: "165 EAST 56 STREET",
    data: 1013110033
  },
  {
    value: "165 EAST 61 STREET",
    data: 1013960131
  },
  {
    value: "165 EAST 62 STREET",
    data: 1013970030
  },
  {
    value: "165 EAST 64 STREET",
    data: 1013990026
  },
  {
    value: "165 EAST 65 STREET",
    data: 1014000032
  },
  {
    value: "165 EAST 70 STREET",
    data: 1014050028
  },
  {
    value: "165 EAST 71 STREET",
    data: 1014060027
  },
  {
    value: "165 EAST 73 STREET",
    data: 1014080026
  },
  {
    value: "165 EAST 74 STREET",
    data: 1014090028
  },
  {
    value: "165 EAST 80 STREET",
    data: 1015090026
  },
  {
    value: "165 EAST 82 STREET",
    data: 1015110029
  },
  {
    value: "165 EAST 87 STREET",
    data: 1015160026
  },
  {
    value: "165 EAST 87 STREET",
    data: 1015160026
  },
  {
    value: "165 EAST 88 STREET",
    data: 1015170031
  },
  {
    value: "165 EAST 89 STREET",
    data: 1015180031
  },
  {
    value: "165 EAST 89 STREET",
    data: 1015180031
  },
  {
    value: "165 EAST 90 STREET",
    data: 1015190028
  },
  {
    value: "165 EAST 90 STREET",
    data: 1015190028
  },
  {
    value: "165 EAST 94 STREET",
    data: 1015230027
  },
  {
    value: "165 EAST 99 STREET",
    data: 1016270029
  },
  {
    value: "165 EAST 99 STREET",
    data: 1016270029
  },
  {
    value: "165 EAST BROADWAY",
    data: 1002840028
  },
  {
    value: "165 EDGECOMBE AVENUE",
    data: 1020510083
  },
  {
    value: "165 EDGECOMBE AVENUE",
    data: 1020510083
  },
  {
    value: "165 ELIZABETH STREET",
    data: 1004797501
  },
  {
    value: "165 ESSEX STREET",
    data: 1004120070
  },
  {
    value: "165 FRONT STREET",
    data: 1000720014
  },
  {
    value: "165 GRAND STREET",
    data: 1002350013
  },
  {
    value: "165 HENRY STREET",
    data: 1002847502
  },
  {
    value: "165 HENRY STREET",
    data: 1002847502
  },
  {
    value: "165 HESTER STREET",
    data: 1002380035
  },
  {
    value: "165 HESTER STREET",
    data: 1002380035
  },
  {
    value: "165 HUDSON STREET",
    data: 1002190026
  },
  {
    value: "165 HUDSON STREET",
    data: 1002190026
  },
  {
    value: "165 LENOX AVENUE",
    data: 1019030032
  },
  {
    value: "165 LEXINGTON AVENUE",
    data: 1008860028
  },
  {
    value: "165 LUDLOW STREET",
    data: 1004120033
  },
  {
    value: "165 LUDLOW STREET",
    data: 1004120033
  },
  {
    value: "165 MADISON AVENUE",
    data: 1008620051
  },
  {
    value: "165 MANHATTAN AVENUE",
    data: 1018430017
  },
  {
    value: "165 MANHATTAN AVENUE",
    data: 1018430017
  },
  {
    value: "165 MERCER STREET",
    data: 1005130023
  },
  {
    value: "165 MORNINGSIDE AVENUE",
    data: 1019530003
  },
  {
    value: "165 MOTT STREET",
    data: 1004710047
  },
  {
    value: "165 MOTT STREET",
    data: 1004710047
  },
  {
    value: "165 MULBERRY STREET",
    data: 1004710020
  },
  {
    value: "165 MULBERRY STREET",
    data: 1004710020
  },
  {
    value: "165 ORCHARD STREET",
    data: 1004160057
  },
  {
    value: "165 ORCHARD STREET",
    data: 1004160057
  },
  {
    value: "165 PINEHURST AVENUE",
    data: 1021790199
  },
  {
    value: "165 PINEHURST AVENUE",
    data: 1021790199
  },
  {
    value: "165 RIVINGTON STREET",
    data: 1003480049
  },
  {
    value: "165 SEAMAN AVENUE",
    data: 1022420005
  },
  {
    value: "165 SEAMAN AVENUE",
    data: 1022420005
  },
  {
    value: "165 SHERMAN AVENUE",
    data: 1022210011
  },
  {
    value: "165 SHERMAN AVENUE",
    data: 1022210011
  },
  {
    value: "165 SPRING STREET",
    data: 1005020038
  },
  {
    value: "165 SPRING STREET",
    data: 1005020038
  },
  {
    value: "165 STANTON STREET",
    data: 1003490019
  },
  {
    value: "165 STANTON STREET",
    data: 1003490019
  },
  {
    value: "165 WAVERLY PLACE",
    data: 1005930051
  },
  {
    value: "165 WEST 107 STREET",
    data: 1018620009
  },
  {
    value: "165 WEST 122 STREET",
    data: 1019070104
  },
  {
    value: "165 WEST 126 STREET",
    data: 1019110007
  },
  {
    value: "165 WEST 129 STREET",
    data: 1019140006
  },
  {
    value: "165 WEST 21 STREET",
    data: 1007970006
  },
  {
    value: "165 WEST 228 STREET",
    data: 1022150191
  },
  {
    value: "165 WEST 23 STREET",
    data: 1007990008
  },
  {
    value: "165 WEST 26 STREET",
    data: 1008020006
  },
  {
    value: "165 WEST 26 STREET",
    data: 1008020006
  },
  {
    value: "165 WEST 29 STREET",
    data: 1008050006
  },
  {
    value: "165 WEST 4 STREET",
    data: 1005920029
  },
  {
    value: "165 WEST 4 STREET",
    data: 1005920029
  },
  {
    value: "165 WEST 48 STREET",
    data: 1010010102
  },
  {
    value: "165 WEST 57 STREET",
    data: 1010100005
  },
  {
    value: "165 WEST 71 STREET",
    data: 1011430107
  },
  {
    value: "165 WEST 72 STREET",
    data: 1011440006
  },
  {
    value: "165 WEST 74 STREET",
    data: 1011460102
  },
  {
    value: "165 WEST 76 STREET",
    data: 1011480107
  },
  {
    value: "165 WEST 80 STREET",
    data: 1012110007
  },
  {
    value: "165 WEST 80 STREET",
    data: 1012110007
  },
  {
    value: "165 WEST 81 STREET",
    data: 1012120009
  },
  {
    value: "165 WEST 83 STREET",
    data: 1012140008
  },
  {
    value: "165 WEST 83 STREET",
    data: 1012140008
  },
  {
    value: "165 WEST 85 STREET",
    data: 1012160005
  },
  {
    value: "165 WEST 86 STREET",
    data: 1012170001
  },
  {
    value: "165 WEST 87 STREET",
    data: 1012180011
  },
  {
    value: "165 WEST 88 STREET",
    data: 1012190011
  },
  {
    value: "165 WEST 91 STREET",
    data: 1012227501
  },
  {
    value: "165 WEST 91 STREET",
    data: 1012227501
  },
  {
    value: "165 WEST 95 STREET",
    data: 1012267501
  },
  {
    value: "165 WEST END AVENUE",
    data: 1011797501
  },
  {
    value: "165 WEST END AVENUE",
    data: 1011797501
  },
  {
    value: "1650 AMSTERDAM AVENUE",
    data: 1020730034
  },
  {
    value: "1650 LEXINGTON AVENUE",
    data: 1016320015
  },
  {
    value: "1650 MADISON AVENUE",
    data: 1016150059
  },
  {
    value: "1650 ST NICHOLAS AVENUE",
    data: 1021610021
  },
  {
    value: "1650 ST NICHOLAS AVENUE",
    data: 1021610021
  },
  {
    value: "1651 1 AVENUE",
    data: 1015480029
  },
  {
    value: "1651 1 AVENUE",
    data: 1015480029
  },
  {
    value: "1651 BROADWAY",
    data: 1010230018
  },
  {
    value: "1651 LEXINGTON AVENUE",
    data: 1016320022
  },
  {
    value: "1651 MADISON AVENUE",
    data: 1016160023
  },
  {
    value: "1652 1 AVENUE",
    data: 1015660001
  },
  {
    value: "1652 1 AVENUE",
    data: 1015660001
  },
  {
    value: "1652 2 AVENUE",
    data: 1015480051
  },
  {
    value: "1652 AMSTERDAM AVENUE",
    data: 1020730035
  },
  {
    value: "1652 BROADWAY",
    data: 1010230029
  },
  {
    value: "1652 PARK AVENUE",
    data: 1016220037
  },
  {
    value: "1652 PARK AVENUE",
    data: 1016220037
  },
  {
    value: "1653 1 AVENUE",
    data: 1015490024
  },
  {
    value: "1653 1 AVENUE",
    data: 1015490024
  },
  {
    value: "1654 2 AVENUE",
    data: 1015480050
  },
  {
    value: "1654 3 AVENUE",
    data: 1015210037
  },
  {
    value: "1654 3 AVENUE",
    data: 1015210037
  },
  {
    value: "1654 AMSTERDAM AVENUE",
    data: 1020730036
  },
  {
    value: "1655 LEXINGTON AVENUE",
    data: 1016320020
  },
  {
    value: "1655 MADISON AVENUE",
    data: 1016160021
  },
  {
    value: "1655 MADISON AVENUE",
    data: 1016160021
  },
  {
    value: "1656 2 AVENUE",
    data: 1015480049
  },
  {
    value: "1656 2 AVENUE",
    data: 1015480049
  },
  {
    value: "1656 3 AVENUE",
    data: 1015210040
  },
  {
    value: "1656 3 AVENUE",
    data: 1015210040
  },
  {
    value: "1656 AMSTERDAM AVENUE",
    data: 1020740029
  },
  {
    value: "1657 MADISON AVENUE",
    data: 1016160020
  },
  {
    value: "1657 MADISON AVENUE",
    data: 1016160020
  },
  {
    value: "1657 YORK AVENUE",
    data: 1015670021
  },
  {
    value: "1658 YORK AVENUE",
    data: 1015840001
  },
  {
    value: "1658 YORK AVENUE",
    data: 1015840001
  },
  {
    value: "1659 2 AVENUE",
    data: 1015320022
  },
  {
    value: "1659 2 AVENUE",
    data: 1015320022
  },
  {
    value: "1659 LEXINGTON AVENUE",
    data: 1016320156
  },
  {
    value: "1659 MADISON AVENUE",
    data: 1016160053
  },
  {
    value: "166 1 AVENUE",
    data: 1004380002
  },
  {
    value: "166 3 AVENUE",
    data: 1008720035
  },
  {
    value: "166 3 AVENUE",
    data: 1008720035
  },
  {
    value: "166 5 AVENUE",
    data: 1008230042
  },
  {
    value: "166 8 AVENUE",
    data: 1007680003
  },
  {
    value: "166 AMSTERDAM AVENUE",
    data: 1011580012
  },
  {
    value: "166 AMSTERDAM AVENUE",
    data: 1011580012
  },
  {
    value: "166 AVENUE A",
    data: 1004040001
  },
  {
    value: "166 AVENUE B",
    data: 1004040032
  },
  {
    value: "166 BOWERY",
    data: 1004780033
  },
  {
    value: "166 DELANCEY STREET",
    data: 1003480077
  },
  {
    value: "166 DUANE STREET",
    data: 1001417504
  },
  {
    value: "166 EAST 100 STREET",
    data: 1016270043
  },
  {
    value: "166 EAST 100 STREET",
    data: 1016270043
  },
  {
    value: "166 EAST 104 STREET",
    data: 1016310048
  },
  {
    value: "166 EAST 105 STREET",
    data: 1016320045
  },
  {
    value: "166 EAST 107 STREET",
    data: 1016340043
  },
  {
    value: "166 EAST 108 STREET",
    data: 1016350145
  },
  {
    value: "166 EAST 109 STREET",
    data: 1016360045
  },
  {
    value: "166 EAST 111 STREET",
    data: 1016380146
  },
  {
    value: "166 EAST 111 STREET",
    data: 1016380146
  },
  {
    value: "166 EAST 117 STREET",
    data: 1016440147
  },
  {
    value: "166 EAST 118 STREET",
    data: 1016450044
  },
  {
    value: "166 EAST 118 STREET",
    data: 1016450044
  },
  {
    value: "166 EAST 119 STREET",
    data: 1017670047
  },
  {
    value: "166 EAST 119 STREET",
    data: 1017670047
  },
  {
    value: "166 EAST 124 STREET",
    data: 1017720045
  },
  {
    value: "166 EAST 2 STREET",
    data: 1003980055
  },
  {
    value: "166 EAST 2 STREET",
    data: 1003980055
  },
  {
    value: "166 EAST 34 STREET",
    data: 1008890039
  },
  {
    value: "166 EAST 34 STREET",
    data: 1008890039
  },
  {
    value: "166 EAST 35 STREET",
    data: 1008900049
  },
  {
    value: "166 EAST 35 STREET",
    data: 1008900049
  },
  {
    value: "166 EAST 63 STREET",
    data: 1013977503
  },
  {
    value: "166 EAST 63 STREET",
    data: 1013977503
  },
  {
    value: "166 EAST 64 STREET",
    data: 1013980148
  },
  {
    value: "166 EAST 7 STREET",
    data: 1004020027
  },
  {
    value: "166 EAST 70 STREET",
    data: 1014040044
  },
  {
    value: "166 EAST 71 STREET",
    data: 1014050143
  },
  {
    value: "166 EAST 74 STREET",
    data: 1014080045
  },
  {
    value: "166 EAST 78 STREET",
    data: 1014120045
  },
  {
    value: "166 EAST 81 STREET",
    data: 1015090042
  },
  {
    value: "166 EAST 82 STREET",
    data: 1015100044
  },
  {
    value: "166 EAST 82 STREET",
    data: 1015100044
  },
  {
    value: "166 EAST 83 STREET",
    data: 1015110043
  },
  {
    value: "166 EAST 88 STREET",
    data: 1015160045
  },
  {
    value: "166 EAST 90 STREET",
    data: 1015180044
  },
  {
    value: "166 EAST 90 STREET",
    data: 1015180044
  },
  {
    value: "166 EAST 91 STREET",
    data: 1015190043
  },
  {
    value: "166 EAST 91 STREET",
    data: 1015190043
  },
  {
    value: "166 EAST 92 STREET",
    data: 1015200041
  },
  {
    value: "166 EAST 92 STREET",
    data: 1015200041
  },
  {
    value: "166 EAST 93 STREET",
    data: 1015210047
  },
  {
    value: "166 EAST 95 STREET",
    data: 1015230046
  },
  {
    value: "166 EAST 96 STREET",
    data: 1015240044
  },
  {
    value: "166 EAST 96 STREET",
    data: 1015240044
  },
  {
    value: "166 ELDRIDGE STREET",
    data: 1004150007
  },
  {
    value: "166 ELIZABETH STREET",
    data: 1004780013
  },
  {
    value: "166 ELIZABETH STREET",
    data: 1004780013
  },
  {
    value: "166 HENRY STREET",
    data: 1002710051
  },
  {
    value: "166 HENRY STREET",
    data: 1002710051
  },
  {
    value: "166 LEXINGTON AVENUE",
    data: 1008860024
  },
  {
    value: "166 LEXINGTON AVENUE",
    data: 1008869024
  },
  {
    value: "166 MARKET STREET",
    data: 1002540001
  },
  {
    value: "166 MULBERRY STREET",
    data: 1004710030
  },
  {
    value: "166 NORFOLK STREET",
    data: 1003550038
  },
  {
    value: "166 NORFOLK STREET",
    data: 1003550038
  },
  {
    value: "166 ORCHARD STREET",
    data: 1004110011
  },
  {
    value: "166 ORCHARD STREET",
    data: 1004110011
  },
  {
    value: "166 PERRY STREET",
    data: 1006377508
  },
  {
    value: "166 PERRY STREET",
    data: 1006377508
  },
  {
    value: "166 SPRING STREET",
    data: 1004880021
  },
  {
    value: "166 SUFFOLK STREET",
    data: 1003500001
  },
  {
    value: "166 SUFFOLK STREET",
    data: 1003500001
  },
  {
    value: "166 THOMPSON STREET",
    data: 1005250033
  },
  {
    value: "166 WEST 107 STREET",
    data: 1018610057
  },
  {
    value: "166 WEST 107 STREET",
    data: 1018610057
  },
  {
    value: "166 WEST 120 STREET",
    data: 1019040059
  },
  {
    value: "166 WEST 120 STREET",
    data: 1019040059
  },
  {
    value: "166 WEST 121 STREET",
    data: 1019050061
  },
  {
    value: "166 WEST 123 STREET",
    data: 1019070159
  },
  {
    value: "166 WEST 128 STREET",
    data: 1019120060
  },
  {
    value: "166 WEST 130 STREET",
    data: 1019140158
  },
  {
    value: "166 WEST 132 STREET",
    data: 1019160058
  },
  {
    value: "166 WEST 133 STREET",
    data: 1019170058
  },
  {
    value: "166 WEST 136 STREET",
    data: 1019200058
  },
  {
    value: "166 WEST 18 STREET",
    data: 1007937508
  },
  {
    value: "166 WEST 228 STREET",
    data: 1022150319
  },
  {
    value: "166 WEST 27 STREET",
    data: 1008020076
  },
  {
    value: "166 WEST 4 STREET",
    data: 1005900031
  },
  {
    value: "166 WEST 48 STREET",
    data: 1010000059
  },
  {
    value: "166 WEST 72 STREET",
    data: 1011430060
  },
  {
    value: "166 WEST 72 STREET",
    data: 1011430060
  },
  {
    value: "166 WEST 75 STREET",
    data: 1011460061
  },
  {
    value: "166 WEST 75 STREET",
    data: 1011460061
  },
  {
    value: "166 WEST 76 STREET",
    data: 1011470056
  },
  {
    value: "166 WEST 76 STREET",
    data: 1011470056
  },
  {
    value: "166 WEST 77 STREET",
    data: 1011480059
  },
  {
    value: "166 WEST 77 STREET",
    data: 1011480059
  },
  {
    value: "166 WEST 83 STREET",
    data: 1012130060
  },
  {
    value: "166 WEST 83 STREET",
    data: 1012130060
  },
  {
    value: "166 WEST 87 STREET",
    data: 1012170057
  },
  {
    value: "166 WEST 87 STREET",
    data: 1012170057
  },
  {
    value: "166 WEST 88 STREET",
    data: 1012180154
  },
  {
    value: "166 WEST 94 STREET",
    data: 1012240157
  },
  {
    value: "166 WILLIAM STREET",
    data: 1000930025
  },
  {
    value: "1660 1 AVENUE",
    data: 1015660048
  },
  {
    value: "1660 2 AVENUE",
    data: 1015490001
  },
  {
    value: "1660 2 AVENUE",
    data: 1015490001
  },
  {
    value: "1660 PARK AVENUE",
    data: 1016230033
  },
  {
    value: "1661 1 AVENUE",
    data: 1015490028
  },
  {
    value: "1661 LEXINGTON AVENUE",
    data: 1016320155
  },
  {
    value: "1661 MADISON AVENUE",
    data: 1016160052
  },
  {
    value: "1661 PARK AVENUE",
    data: 1016450001
  },
  {
    value: "1661 PARK AVENUE",
    data: 1016450001
  },
  {
    value: "1661 YORK AVENUE",
    data: 1015670022
  },
  {
    value: "1661 YORK AVENUE",
    data: 1015670022
  },
  {
    value: "1662 1 AVENUE",
    data: 1015660047
  },
  {
    value: "1662 3 AVENUE",
    data: 1015220033
  },
  {
    value: "1662 3 AVENUE",
    data: 1015220033
  },
  {
    value: "1662 PARK AVENUE",
    data: 1016230034
  },
  {
    value: "1663 1 AVENUE",
    data: 1015490029
  },
  {
    value: "1663 LEXINGTON AVENUE",
    data: 1016320154
  },
  {
    value: "1663 MADISON AVENUE",
    data: 1016160051
  },
  {
    value: "1663 MADISON AVENUE",
    data: 1016160051
  },
  {
    value: "1664 1 AVENUE",
    data: 1015660046
  },
  {
    value: "1664 3 AVENUE",
    data: 1015220034
  },
  {
    value: "1664 AMSTERDAM AVENUE",
    data: 1020740032
  },
  {
    value: "1664 PARK AVENUE",
    data: 1016230035
  },
  {
    value: "1664 PARK AVENUE",
    data: 1016230035
  },
  {
    value: "1665 1 AVENUE",
    data: 1015490030
  },
  {
    value: "1665 1 AVENUE",
    data: 1015490030
  },
  {
    value: "1665 LEXINGTON AVENUE",
    data: 1016320053
  },
  {
    value: "1665 MADISON AVENUE",
    data: 1016160050
  },
  {
    value: "1665 PARK AVENUE",
    data: 1016450003
  },
  {
    value: "1665 YORK AVENUE",
    data: 1015670025
  },
  {
    value: "1666 1 AVENUE",
    data: 1015660045
  },
  {
    value: "1666 1 AVENUE",
    data: 1015660045
  },
  {
    value: "1666 3 AVENUE",
    data: 1015220035
  },
  {
    value: "1667 1 AVENUE",
    data: 1015490031
  },
  {
    value: "1667 LEXINGTON AVENUE",
    data: 1016320153
  },
  {
    value: "1667 YORK AVENUE",
    data: 1015670026
  },
  {
    value: "1668 1 AVENUE",
    data: 1015670001
  },
  {
    value: "1668 3 AVENUE",
    data: 1015220036
  },
  {
    value: "1668 MADISON AVENUE",
    data: 1016227501
  },
  {
    value: "1669 LEXINGTON AVENUE",
    data: 1016320152
  },
  {
    value: "1669 YORK AVENUE",
    data: 1015670027
  },
  {
    value: "1669 YORK AVENUE",
    data: 1015670027
  },
  {
    value: "167 1 AVENUE",
    data: 1004520035
  },
  {
    value: "167 1/2 EAST 115 STREET",
    data: 1016430127
  },
  {
    value: "167 3 AVENUE",
    data: 1008970041
  },
  {
    value: "167 8 AVENUE",
    data: 1007420037
  },
  {
    value: "167 ALLEN STREET",
    data: 1004160022
  },
  {
    value: "167 ALLEN STREET",
    data: 1004160022
  },
  {
    value: "167 AVENUE A",
    data: 1004380030
  },
  {
    value: "167 AVENUE B",
    data: 1003930005
  },
  {
    value: "167 AVENUE C",
    data: 1003930037
  },
  {
    value: "167 BLEECKER STREET",
    data: 1005390041
  },
  {
    value: "167 BLEECKER STREET",
    data: 1005390041
  },
  {
    value: "167 CANAL STREET",
    data: 1002040027
  },
  {
    value: "167 CHRYSTIE STREET",
    data: 1004250031
  },
  {
    value: "167 CLAREMONT AVENUE",
    data: 1019940038
  },
  {
    value: "167 CLAREMONT AVENUE",
    data: 1019940038
  },
  {
    value: "167 EAST 102 STREET",
    data: 1016300027
  },
  {
    value: "167 EAST 102 STREET",
    data: 1016300027
  },
  {
    value: "167 EAST 103 STREET",
    data: 1016310032
  },
  {
    value: "167 EAST 105 STREET",
    data: 1016330028
  },
  {
    value: "167 EAST 106 STREET",
    data: 1016340032
  },
  {
    value: "167 EAST 107 STREET",
    data: 1016350028
  },
  {
    value: "167 EAST 108 STREET",
    data: 1016360128
  },
  {
    value: "167 EAST 111 STREET",
    data: 1016390027
  },
  {
    value: "167 EAST 111 STREET",
    data: 1016390027
  },
  {
    value: "167 EAST 115 STREET",
    data: 1016430027
  },
  {
    value: "167 EAST 116 STREET",
    data: 1016440028
  },
  {
    value: "167 EAST 116 STREET",
    data: 1016440028
  },
  {
    value: "167 EAST 121 STREET",
    data: 1017700032
  },
  {
    value: "167 EAST 122 STREET",
    data: 1017710027
  },
  {
    value: "167 EAST 124 STREET",
    data: 1017730027
  },
  {
    value: "167 EAST 128 STREET",
    data: 1017770080
  },
  {
    value: "167 EAST 33 STREET",
    data: 1008890036
  },
  {
    value: "167 EAST 62 STREET",
    data: 1013970130
  },
  {
    value: "167 EAST 63 STREET",
    data: 1013980032
  },
  {
    value: "167 EAST 64 STREET",
    data: 1013990126
  },
  {
    value: "167 EAST 65 STREET",
    data: 1014000133
  },
  {
    value: "167 EAST 69 STREET",
    data: 1014040032
  },
  {
    value: "167 EAST 71 STREET",
    data: 1014060127
  },
  {
    value: "167 EAST 73 STREET",
    data: 1014080027
  },
  {
    value: "167 EAST 74 STREET",
    data: 1014090029
  },
  {
    value: "167 EAST 77 STREET",
    data: 1014120028
  },
  {
    value: "167 EAST 77 STREET",
    data: 1014120028
  },
  {
    value: "167 EAST 78 STREET",
    data: 1014130027
  },
  {
    value: "167 EAST 78 STREET",
    data: 1014130027
  },
  {
    value: "167 EAST 79 STREET",
    data: 1015080026
  },
  {
    value: "167 EAST 80 STREET",
    data: 1015090027
  },
  {
    value: "167 EAST 82 STREET",
    data: 1015117502
  },
  {
    value: "167 EAST 82 STREET",
    data: 1015117502
  },
  {
    value: "167 EAST 87 STREET",
    data: 1015160027
  },
  {
    value: "167 EAST 87 STREET",
    data: 1015160027
  },
  {
    value: "167 EAST 90 STREET",
    data: 1015190029
  },
  {
    value: "167 EAST 90 STREET",
    data: 1015190029
  },
  {
    value: "167 EAST 94 STREET",
    data: 1015230028
  },
  {
    value: "167 EAST 99 STREET",
    data: 1016270030
  },
  {
    value: "167 EAST 99 STREET",
    data: 1016270030
  },
  {
    value: "167 EAST BROADWAY",
    data: 1002840027
  },
  {
    value: "167 ELDRIDGE STREET",
    data: 1004200068
  },
  {
    value: "167 ELDRIDGE STREET",
    data: 1004200068
  },
  {
    value: "167 ELIZABETH STREET",
    data: 1004790023
  },
  {
    value: "167 FRONT STREET",
    data: 1000720115
  },
  {
    value: "167 HESTER STREET",
    data: 1002380036
  },
  {
    value: "167 HESTER STREET",
    data: 1002380036
  },
  {
    value: "167 LEXINGTON AVENUE",
    data: 1008860027
  },
  {
    value: "167 LUDLOW STREET",
    data: 1004120032
  },
  {
    value: "167 LUDLOW STREET",
    data: 1004120032
  },
  {
    value: "167 MORNINGSIDE AVENUE",
    data: 1019530004
  },
  {
    value: "167 MOTT STREET",
    data: 1004710046
  },
  {
    value: "167 MOTT STREET",
    data: 1004710046
  },
  {
    value: "167 MULBERRY STREET",
    data: 1004710019
  },
  {
    value: "167 ORCHARD STREET",
    data: 1004160056
  },
  {
    value: "167 PERRY STREET",
    data: 1006370081
  },
  {
    value: "167 PERRY STREET",
    data: 1006370081
  },
  {
    value: "167 RIVINGTON STREET",
    data: 1003480050
  },
  {
    value: "167 SUFFOLK STREET",
    data: 1003550062
  },
  {
    value: "167 SUFFOLK STREET",
    data: 1003550062
  },
  {
    value: "167 WEST 10 STREET",
    data: 1006110034
  },
  {
    value: "167 WEST 107 STREET",
    data: 1018620007
  },
  {
    value: "167 WEST 12 STREET",
    data: 1006080073
  },
  {
    value: "167 WEST 126 STREET",
    data: 1019110106
  },
  {
    value: "167 WEST 133 STREET",
    data: 1019180007
  },
  {
    value: "167 WEST 133 STREET",
    data: 1019180007
  },
  {
    value: "167 WEST 136 STREET",
    data: 1019217501
  },
  {
    value: "167 WEST 145 STREET",
    data: 1020140001
  },
  {
    value: "167 WEST 145 STREET",
    data: 1020140001
  },
  {
    value: "167 WEST 21 STREET",
    data: 1007970005
  },
  {
    value: "167 WEST 228 STREET",
    data: 1022150190
  },
  {
    value: "167 WEST 29 STREET",
    data: 1008050005
  },
  {
    value: "167 WEST 48 STREET",
    data: 1010010101
  },
  {
    value: "167 WEST 71 STREET",
    data: 1011430007
  },
  {
    value: "167 WEST 71 STREET",
    data: 1011430007
  },
  {
    value: "167 WEST 72 STREET",
    data: 1011440105
  },
  {
    value: "167 WEST 73 STREET",
    data: 1011450007
  },
  {
    value: "167 WEST 73 STREET",
    data: 1011450007
  },
  {
    value: "167 WEST 74 STREET",
    data: 1011460101
  },
  {
    value: "167 WEST 76 STREET",
    data: 1011480007
  },
  {
    value: "167 WEST 78 STREET",
    data: 1011500005
  },
  {
    value: "167 WEST 80 STREET",
    data: 1012110006
  },
  {
    value: "167 WEST 80 STREET",
    data: 1012110006
  },
  {
    value: "167 WEST 81 STREET",
    data: 1012120008
  },
  {
    value: "167 WEST 81 STREET",
    data: 1012120008
  },
  {
    value: "167 WEST 83 STREET",
    data: 1012140007
  },
  {
    value: "167 WEST 83 STREET",
    data: 1012140007
  },
  {
    value: "167 WEST 85 STREET",
    data: 1012160104
  },
  {
    value: "167 WEST 87 STREET",
    data: 1012180110
  },
  {
    value: "167 WEST 88 STREET",
    data: 1012190110
  },
  {
    value: "167 WEST 89 STREET",
    data: 1012200107
  },
  {
    value: "167 WILLIAM STREET",
    data: 1000920003
  },
  {
    value: "167 WILLIAM STREET",
    data: 1000920003
  },
  {
    value: "1670 1 AVENUE",
    data: 1015670002
  },
  {
    value: "1670 3 AVENUE",
    data: 1015220037
  },
  {
    value: "1670 3 AVENUE",
    data: 1015220037
  },
  {
    value: "1670 YORK AVENUE",
    data: 1015840049
  },
  {
    value: "1670 YORK AVENUE",
    data: 1015840049
  },
  {
    value: "1671 AMSTERDAM AVENUE",
    data: 1020580058
  },
  {
    value: "1671 AMSTERDAM AVENUE",
    data: 1020580058
  },
  {
    value: "1671 LEXINGTON AVENUE",
    data: 1016320052
  },
  {
    value: "1671 YORK AVENUE",
    data: 1015670028
  },
  {
    value: "1672 1 AVENUE",
    data: 1015670003
  },
  {
    value: "1672 3 AVENUE",
    data: 1015220038
  },
  {
    value: "1672 3 AVENUE",
    data: 1015220038
  },
  {
    value: "1672 BROADWAY",
    data: 1010240131
  },
  {
    value: "1672 PARK AVENUE",
    data: 1016230039
  },
  {
    value: "1672 PARK AVENUE",
    data: 1016230039
  },
  {
    value: "1673 LEXINGTON AVENUE",
    data: 1016320151
  },
  {
    value: "1673 MADISON AVENUE",
    data: 1016170022
  },
  {
    value: "1673 YORK AVENUE",
    data: 1015680021
  },
  {
    value: "1673 YORK AVENUE",
    data: 1015680021
  },
  {
    value: "1674 1 AVENUE",
    data: 1015670004
  },
  {
    value: "1674 3 AVENUE",
    data: 1015220039
  },
  {
    value: "1674 PARK AVENUE",
    data: 1016230040
  },
  {
    value: "1674 PARK AVENUE",
    data: 1016230040
  },
  {
    value: "1675 BROADWAY",
    data: 1010240015
  },
  {
    value: "1675 LEXINGTON AVENUE",
    data: 1016330019
  },
  {
    value: "1675 LEXINGTON AVENUE",
    data: 1016330019
  },
  {
    value: "1675 MADISON AVENUE",
    data: 1016170122
  },
  {
    value: "1676 1 AVENUE",
    data: 1015670048
  },
  {
    value: "1677 LEXINGTON AVENUE",
    data: 1016330020
  },
  {
    value: "1677 LEXINGTON AVENUE",
    data: 1016330020
  },
  {
    value: "1677 MADISON AVENUE",
    data: 1016170121
  },
  {
    value: "1678 1 AVENUE",
    data: 1015670047
  },
  {
    value: "1678 3 AVENUE",
    data: 1015230033
  },
  {
    value: "1678 3 AVENUE",
    data: 1015230033
  },
  {
    value: "1678 PARK AVENUE",
    data: 1017450134
  },
  {
    value: "1679 3 AVENUE",
    data: 1015400001
  },
  {
    value: "1679 3 AVENUE",
    data: 1015400001
  },
  {
    value: "1679 MADISON AVENUE",
    data: 1016170021
  },
  {
    value: "168 1 AVENUE",
    data: 1004380003
  },
  {
    value: "168 1/2 DELANCEY STREET",
    data: 1003480076
  },
  {
    value: "168 5 AVENUE",
    data: 1008230043
  },
  {
    value: "168 8 AVENUE",
    data: 1007680004
  },
  {
    value: "168 8 AVENUE",
    data: 1007680004
  },
  {
    value: "168 ATTORNEY STREET",
    data: 1003450009
  },
  {
    value: "168 AVENUE A",
    data: 1004040002
  },
  {
    value: "168 AVENUE B",
    data: 1004040031
  },
  {
    value: "168 BOWERY",
    data: 1004780032
  },
  {
    value: "168 DELANCEY STREET",
    data: 1003480075
  },
  {
    value: "168 DUANE STREET",
    data: 1001417501
  },
  {
    value: "168 DYCKMAN STREET",
    data: 1021750070
  },
  {
    value: "168 EAST 100 STREET",
    data: 1016270042
  },
  {
    value: "168 EAST 100 STREET",
    data: 1016270042
  },
  {
    value: "168 EAST 104 STREET",
    data: 1016310047
  },
  {
    value: "168 EAST 105 STREET",
    data: 1016320044
  },
  {
    value: "168 EAST 107 STREET",
    data: 1016340042
  },
  {
    value: "168 EAST 108 STREET",
    data: 1016350045
  },
  {
    value: "168 EAST 111 STREET",
    data: 1016380046
  },
  {
    value: "168 EAST 112 STREET",
    data: 1016390043
  },
  {
    value: "168 EAST 112 STREET",
    data: 1016390043
  },
  {
    value: "168 EAST 116 STREET",
    data: 1016430044
  },
  {
    value: "168 EAST 117 STREET",
    data: 1016440047
  },
  {
    value: "168 EAST 64 STREET",
    data: 1013980048
  },
  {
    value: "168 EAST 68 STREET",
    data: 1014020041
  },
  {
    value: "168 EAST 7 STREET",
    data: 1004020028
  },
  {
    value: "168 EAST 7 STREET",
    data: 1004020028
  },
  {
    value: "168 EAST 71 STREET",
    data: 1014050043
  },
  {
    value: "168 EAST 73 STREET",
    data: 1014070046
  },
  {
    value: "168 EAST 74 STREET",
    data: 1014080041
  },
  {
    value: "168 EAST 74 STREET",
    data: 1014080041
  },
  {
    value: "168 EAST 75 STREET",
    data: 1014090051
  },
  {
    value: "168 EAST 79 STREET",
    data: 1014130045
  },
  {
    value: "168 EAST 79 STREET",
    data: 1014130045
  },
  {
    value: "168 EAST 80 STREET",
    data: 1015080045
  },
  {
    value: "168 EAST 80 STREET",
    data: 1015080045
  },
  {
    value: "168 EAST 81 STREET",
    data: 1015090041
  },
  {
    value: "168 EAST 81 STREET",
    data: 1015090041
  },
  {
    value: "168 EAST 82 STREET",
    data: 1015100043
  },
  {
    value: "168 EAST 82 STREET",
    data: 1015100043
  },
  {
    value: "168 EAST 89 STREET",
    data: 1015170042
  },
  {
    value: "168 EAST 90 STREET",
    data: 1015180043
  },
  {
    value: "168 EAST 91 STREET",
    data: 1015190042
  },
  {
    value: "168 EAST 93 STREET",
    data: 1015210046
  },
  {
    value: "168 EAST 95 STREET",
    data: 1015230045
  },
  {
    value: "168 ELIZABETH STREET",
    data: 1004780014
  },
  {
    value: "168 ELIZABETH STREET",
    data: 1004780014
  },
  {
    value: "168 HENRY STREET",
    data: 1002710050
  },
  {
    value: "168 LEXINGTON AVENUE",
    data: 1008860025
  },
  {
    value: "168 LUDLOW STREET",
    data: 1004120042
  },
  {
    value: "168 LUDLOW STREET",
    data: 1004120042
  },
  {
    value: "168 MORNINGSIDE AVENUE",
    data: 1019670024
  },
  {
    value: "168 MULBERRY STREET",
    data: 1004710031
  },
  {
    value: "168 MULBERRY STREET",
    data: 1004710031
  },
  {
    value: "168 NORFOLK STREET",
    data: 1003550039
  },
  {
    value: "168 NORFOLK STREET",
    data: 1003550039
  },
  {
    value: "168 ORCHARD STREET",
    data: 1004110012
  },
  {
    value: "168 RIVINGTON STREET",
    data: 1003440172
  },
  {
    value: "168 SHERMAN AVENUE",
    data: 1022250030
  },
  {
    value: "168 SHERMAN AVENUE",
    data: 1022250030
  },
  {
    value: "168 STANTON STREET",
    data: 1003500030
  },
  {
    value: "168 STANTON STREET",
    data: 1003500030
  },
  {
    value: "168 SUFFOLK STREET",
    data: 1003500002
  },
  {
    value: "168 THOMPSON STREET",
    data: 1005250034
  },
  {
    value: "168 WAVERLY PLACE",
    data: 1005920049
  },
  {
    value: "168 WEST 107 STREET",
    data: 1018610058
  },
  {
    value: "168 WEST 107 STREET",
    data: 1018610058
  },
  {
    value: "168 WEST 121 STREET",
    data: 1019050062
  },
  {
    value: "168 WEST 123 STREET",
    data: 1019070060
  },
  {
    value: "168 WEST 130 STREET",
    data: 1019140059
  },
  {
    value: "168 WEST 133 STREET",
    data: 1019170158
  },
  {
    value: "168 WEST 136 STREET",
    data: 1019200158
  },
  {
    value: "168 WEST 225 STREET",
    data: 1022150066
  },
  {
    value: "168 WEST 25 STREET",
    data: 1008000076
  },
  {
    value: "168 WEST 4 STREET",
    data: 1005900029
  },
  {
    value: "168 WEST 4 STREET",
    data: 1005900029
  },
  {
    value: "168 WEST 77 STREET",
    data: 1011480060
  },
  {
    value: "168 WEST 79 STREET",
    data: 1011500059
  },
  {
    value: "168 WEST 86 STREET",
    data: 1012160060
  },
  {
    value: "168 WEST 86 STREET",
    data: 1012160060
  },
  {
    value: "168 WEST 94 STREET",
    data: 1012240058
  },
  {
    value: "168 WEST 94 STREET",
    data: 1012240058
  },
  {
    value: "168 WILLIAM STREET",
    data: 1000930026
  },
  {
    value: "1680 1 AVENUE",
    data: 1015670046
  },
  {
    value: "1680 3 AVENUE",
    data: 1015230034
  },
  {
    value: "1680 3 AVENUE",
    data: 1015230034
  },
  {
    value: "1680 BROADWAY",
    data: 1010240038
  },
  {
    value: "1680 LEXINGTON AVENUE",
    data: 1016330013
  },
  {
    value: "1680 MADISON AVENUE",
    data: 1016170007
  },
  {
    value: "1680 MADISON AVENUE",
    data: 1016170007
  },
  {
    value: "1680 YORK AVENUE",
    data: 1015850001
  },
  {
    value: "1680 YORK AVENUE",
    data: 1015850001
  },
  {
    value: "1681 1 AVENUE",
    data: 1015500023
  },
  {
    value: "1681 1 AVENUE",
    data: 1015500023
  },
  {
    value: "1681 2 AVENUE",
    data: 1015330022
  },
  {
    value: "1681 2 AVENUE",
    data: 1015330022
  },
  {
    value: "1681 3 AVENUE",
    data: 1015400002
  },
  {
    value: "1681 3 AVENUE",
    data: 1015400002
  },
  {
    value: "1681 AMSTERDAM AVENUE",
    data: 1020590001
  },
  {
    value: "1681 AMSTERDAM AVENUE",
    data: 1020590001
  },
  {
    value: "1681 BROADWAY",
    data: 1010240046
  },
  {
    value: "1681 MADISON AVENUE",
    data: 1016170020
  },
  {
    value: "1681 PARK AVENUE",
    data: 1017670001
  },
  {
    value: "1682 1 AVENUE",
    data: 1015670045
  },
  {
    value: "1682 2 AVENUE",
    data: 1015500001
  },
  {
    value: "1682 2 AVENUE",
    data: 1015500001
  },
  {
    value: "1683 1 AVENUE",
    data: 1015500024
  },
  {
    value: "1683 3 AVENUE",
    data: 1015400003
  },
  {
    value: "1683 LEXINGTON AVENUE",
    data: 1016330054
  },
  {
    value: "1683 MADISON AVENUE",
    data: 1016170054
  },
  {
    value: "1683 PARK AVENUE",
    data: 1017670002
  },
  {
    value: "1685 1 AVENUE",
    data: 1015500025
  },
  {
    value: "1685 1 AVENUE",
    data: 1015500025
  },
  {
    value: "1685 3 AVENUE",
    data: 1015400004
  },
  {
    value: "1685 MADISON AVENUE",
    data: 1016170053
  },
  {
    value: "1685 PARK AVENUE",
    data: 1017670003
  },
  {
    value: "1687 3 AVENUE",
    data: 1015400049
  },
  {
    value: "1687 PARK AVENUE",
    data: 1017670004
  },
  {
    value: "1688 YORK AVENUE",
    data: 1015850051
  },
  {
    value: "1688 YORK AVENUE",
    data: 1015850051
  },
  {
    value: "1689 1 AVENUE",
    data: 1015500027
  },
  {
    value: "1689 1 AVENUE",
    data: 1015500027
  },
  {
    value: "1689 3 AVENUE",
    data: 1015400048
  },
  {
    value: "1689 AMSTERDAM AVENUE",
    data: 1020590031
  },
  {
    value: "1689 AMSTERDAM AVENUE",
    data: 1020590031
  },
  {
    value: "1689 MADISON AVENUE",
    data: 1016170052
  },
  {
    value: "1689 PARK AVENUE",
    data: 1017670072
  },
  {
    value: "169 1 AVENUE",
    data: 1004520034
  },
  {
    value: "169 10 AVENUE",
    data: 1006920030
  },
  {
    value: "169 8 AVENUE",
    data: 1007420038
  },
  {
    value: "169 9 AVENUE",
    data: 1007170043
  },
  {
    value: "169 ALLEN STREET",
    data: 1004160020
  },
  {
    value: "169 ALLEN STREET",
    data: 1004160020
  },
  {
    value: "169 AVENUE A",
    data: 1004380029
  },
  {
    value: "169 AVENUE A",
    data: 1004380029
  },
  {
    value: "169 AVENUE B",
    data: 1003930006
  },
  {
    value: "169 AVENUE C",
    data: 1003930036
  },
  {
    value: "169 AVENUE OF THE AMER",
    data: 1005050026
  },
  {
    value: "169 AVENUE OF THE AMERICAS",
    data: 1005050026
  },
  {
    value: "169 BLEECKER STREET",
    data: 1005390042
  },
  {
    value: "169 BLEECKER STREET",
    data: 1005390042
  },
  {
    value: "169 BOWERY",
    data: 1004240010
  },
  {
    value: "169 BOWERY",
    data: 1004240010
  },
  {
    value: "169 CHERRY STREET",
    data: 1002490078
  },
  {
    value: "169 CHRYSTIE STREET",
    data: 1004250030
  },
  {
    value: "169 EAST 101 STREET",
    data: 1016290024
  },
  {
    value: "169 EAST 101 STREET",
    data: 1016290024
  },
  {
    value: "169 EAST 102 STREET",
    data: 1016307501
  },
  {
    value: "169 EAST 102 STREET",
    data: 1016307501
  },
  {
    value: "169 EAST 103 STREET",
    data: 1016310133
  },
  {
    value: "169 EAST 105 STREET",
    data: 1016330029
  },
  {
    value: "169 EAST 106 STREET",
    data: 1016340132
  },
  {
    value: "169 EAST 107 STREET",
    data: 1016350128
  },
  {
    value: "169 EAST 108 STREET",
    data: 1016360029
  },
  {
    value: "169 EAST 109 STREET",
    data: 1016370028
  },
  {
    value: "169 EAST 109 STREET",
    data: 1016370028
  },
  {
    value: "169 EAST 111 STREET",
    data: 1016390028
  },
  {
    value: "169 EAST 111 STREET",
    data: 1016390028
  },
  {
    value: "169 EAST 115 STREET",
    data: 1016430028
  },
  {
    value: "169 EAST 116 STREET",
    data: 1016440029
  },
  {
    value: "169 EAST 117 STREET",
    data: 1016450126
  },
  {
    value: "169 EAST 121 STREET",
    data: 1017700033
  },
  {
    value: "169 EAST 62 STREET",
    data: 1013970031
  },
  {
    value: "169 EAST 64 STREET",
    data: 1013990027
  },
  {
    value: "169 EAST 70 STREET",
    data: 1014050029
  },
  {
    value: "169 EAST 71 STREET",
    data: 1014060028
  },
  {
    value: "169 EAST 74 STREET",
    data: 1014090030
  },
  {
    value: "169 EAST 77 STREET",
    data: 1014120029
  },
  {
    value: "169 EAST 77 STREET",
    data: 1014120029
  },
  {
    value: "169 EAST 79 STREET",
    data: 1015080126
  },
  {
    value: "169 EAST 80 STREET",
    data: 1015090127
  },
  {
    value: "169 EAST 87 STREET",
    data: 1015160028
  },
  {
    value: "169 EAST 88 STREET",
    data: 1015170032
  },
  {
    value: "169 EAST 90 STREET",
    data: 1015190030
  },
  {
    value: "169 EAST 91 STREET",
    data: 1015200033
  },
  {
    value: "169 EAST 91 STREET",
    data: 1015200033
  },
  {
    value: "169 EAST 92 STREET",
    data: 1015210031
  },
  {
    value: "169 EAST 92 STREET",
    data: 1015210031
  },
  {
    value: "169 EAST 94 STREET",
    data: 1015230029
  },
  {
    value: "169 EAST 99 STREET",
    data: 1016270031
  },
  {
    value: "169 EAST 99 STREET",
    data: 1016270031
  },
  {
    value: "169 EAST BROADWAY",
    data: 1002840026
  },
  {
    value: "169 EAST BROADWAY",
    data: 1002840026
  },
  {
    value: "169 EDGECOMBE AVENUE",
    data: 1020510081
  },
  {
    value: "169 EDGECOMBE AVENUE",
    data: 1020510081
  },
  {
    value: "169 HESTER STREET",
    data: 1002380037
  },
  {
    value: "169 HESTER STREET",
    data: 1002380037
  },
  {
    value: "169 HUDSON STREET",
    data: 1002197504
  },
  {
    value: "169 HUDSON STREET",
    data: 1002197504
  },
  {
    value: "169 LEXINGTON AVENUE",
    data: 1008860026
  },
  {
    value: "169 MADISON AVENUE",
    data: 1008630027
  },
  {
    value: "169 MANHATTAN AVENUE",
    data: 1018430051
  },
  {
    value: "169 MANHATTAN AVENUE",
    data: 1018430051
  },
  {
    value: "169 MERCER STREET",
    data: 1005130022
  },
  {
    value: "169 MORNINGSIDE AVENUE",
    data: 1019530064
  },
  {
    value: "169 MULBERRY STREET",
    data: 1004710018
  },
  {
    value: "169 MULBERRY STREET",
    data: 1004710018
  },
  {
    value: "169 RIVINGTON STREET",
    data: 1003480051
  },
  {
    value: "169 RIVINGTON STREET",
    data: 1003480051
  },
  {
    value: "169 SUFFOLK STREET",
    data: 1003550061
  },
  {
    value: "169 THOMPSON STREET",
    data: 1005250024
  },
  {
    value: "169 WEST 10 STREET",
    data: 1006110035
  },
  {
    value: "169 WEST 12 STREET",
    data: 1006080074
  },
  {
    value: "169 WEST 12 STREET",
    data: 1006080074
  },
  {
    value: "169 WEST 126 STREET",
    data: 1019110006
  },
  {
    value: "169 WEST 133 STREET",
    data: 1019180006
  },
  {
    value: "169 WEST 21 STREET",
    data: 1007970001
  },
  {
    value: "169 WEST 228 STREET",
    data: 1022150188
  },
  {
    value: "169 WEST 23 STREET",
    data: 1007990006
  },
  {
    value: "169 WEST 76 STREET",
    data: 1011480006
  },
  {
    value: "169 WEST 78 STREET",
    data: 1011500004
  },
  {
    value: "169 WEST 80 STREET",
    data: 1012110005
  },
  {
    value: "169 WEST 81 STREET",
    data: 1012120006
  },
  {
    value: "169 WEST 81 STREET",
    data: 1012120006
  },
  {
    value: "169 WEST 83 STREET",
    data: 1012140106
  },
  {
    value: "169 WEST 85 STREET",
    data: 1012160004
  },
  {
    value: "169 WEST 87 STREET",
    data: 1012180010
  },
  {
    value: "169 WEST 88 STREET",
    data: 1012190010
  },
  {
    value: "169 WEST 95 STREET",
    data: 1012267502
  },
  {
    value: "1690 BROADWAY",
    data: 1010250025
  },
  {
    value: "1690 LEXINGTON AVENUE",
    data: 1016340015
  },
  {
    value: "1691 2 AVENUE",
    data: 1015330027
  },
  {
    value: "1691 3 AVENUE",
    data: 1015400047
  },
  {
    value: "1691 BROADWAY",
    data: 1010250019
  },
  {
    value: "1691 BROADWAY",
    data: 1010250019
  },
  {
    value: "1691 LEXINGTON AVENUE",
    data: 1016340024
  },
  {
    value: "1691 MADISON AVENUE",
    data: 1016170051
  },
  {
    value: "1691 PARK AVENUE",
    data: 1017670071
  },
  {
    value: "1692 2 AVENUE",
    data: 1015500052
  },
  {
    value: "1692 LEXINGTON AVENUE",
    data: 1016340115
  },
  {
    value: "1692 YORK AVENUE",
    data: 1015850049
  },
  {
    value: "1693 2 AVENUE",
    data: 1015330028
  },
  {
    value: "1693 3 AVENUE",
    data: 1015400046
  },
  {
    value: "1693 LEXINGTON AVENUE",
    data: 1016340023
  },
  {
    value: "1693 PARK AVENUE",
    data: 1017670069
  },
  {
    value: "1694 2 AVENUE",
    data: 1015500051
  },
  {
    value: "1694 3 AVENUE",
    data: 1015240023
  },
  {
    value: "1694 LEXINGTON AVENUE",
    data: 1016340016
  },
  {
    value: "1694 LEXINGTON AVENUE",
    data: 1016340016
  },
  {
    value: "1694 PARK AVENUE",
    data: 1017450040
  },
  {
    value: "1694 PARK AVENUE",
    data: 1017450040
  },
  {
    value: "1695 3 AVENUE",
    data: 1015410001
  },
  {
    value: "1695 3 AVENUE",
    data: 1015410001
  },
  {
    value: "1695 LEXINGTON AVENUE",
    data: 1016340022
  },
  {
    value: "1695 LEXINGTON AVENUE",
    data: 1016340022
  },
  {
    value: "1696 2 AVENUE",
    data: 1015500050
  },
  {
    value: "1696 LEXINGTON AVENUE",
    data: 1016340116
  },
  {
    value: "1697 AMSTERDAM AVENUE",
    data: 1020590032
  },
  {
    value: "1697 AMSTERDAM AVENUE",
    data: 1020590032
  },
  {
    value: "1697 BROADWAY",
    data: 1010250043
  },
  {
    value: "1697 LEXINGTON AVENUE",
    data: 1016340021
  },
  {
    value: "1698 2 AVENUE",
    data: 1015500049
  },
  {
    value: "1698 2 AVENUE",
    data: 1015500049
  },
  {
    value: "1698 LEXINGTON AVENUE",
    data: 1016340017
  },
  {
    value: "1699 LEXINGTON AVENUE",
    data: 1016340052
  },
  {
    value: "1699 LEXINGTON AVENUE",
    data: 1016340052
  },
  {
    value: "16O EAST 88 STREET",
    data: 1015160052
  },
  {
    value: "16O EAST 88 STREET",
    data: 1015160052
  },
  {
    value: "16O EAST 89 STREET",
    data: 1015170043
  },
  {
    value: "16O EAST 89 STREET",
    data: 1015170043
  },
  {
    value: "16S EAST 83 STREET",
    data: 1015120030
  },
  {
    value: "16S EAST 83 STREET",
    data: 1015120030
  },
  {
    value: "17 1 AVENUE",
    data: 1004430037
  },
  {
    value: "17 8 AVENUE",
    data: 1006250041
  },
  {
    value: "17 ANN STREET",
    data: 1000900023
  },
  {
    value: "17 ARDEN STREET",
    data: 1021740187
  },
  {
    value: "17 ARDEN STREET",
    data: 1021740187
  },
  {
    value: "17 AVENUE A",
    data: 1004290035
  },
  {
    value: "17 AVENUE D",
    data: 1003720037
  },
  {
    value: "17 BANK STREET",
    data: 1006150044
  },
  {
    value: "17 BARROW STREET",
    data: 1005900063
  },
  {
    value: "17 BATTERY PLACE",
    data: 1000157501
  },
  {
    value: "17 BATTERY PLACE",
    data: 1000157501
  },
  {
    value: "17 BEEKMAN PLACE",
    data: 1013610030
  },
  {
    value: "17 BLEECKER STREET",
    data: 1005290050
  },
  {
    value: "17 BLEECKER STREET",
    data: 1005290050
  },
  {
    value: "17 BOND STREET",
    data: 1005297503
  },
  {
    value: "17 CATHERINE STREET",
    data: 1002800052
  },
  {
    value: "17 CATHERINE STREET",
    data: 1002800052
  },
  {
    value: "17 CHARLTON STREET",
    data: 1005197501
  },
  {
    value: "17 CHITTENDEN AVENUE",
    data: 1021790258
  },
  {
    value: "17 CHITTENDEN AVENUE",
    data: 1021790258
  },
  {
    value: "17 CHRISTOPHER STREET",
    data: 1006100068
  },
  {
    value: "17 CLEVELAND PLACE",
    data: 1004810008
  },
  {
    value: "17 CLEVELAND PLACE",
    data: 1004810008
  },
  {
    value: "17 CLINTON STREET",
    data: 1003500025
  },
  {
    value: "17 COMMERCE STREET",
    data: 1005870066
  },
  {
    value: "17 CONVENT AVENUE",
    data: 1019540060
  },
  {
    value: "17 CORNELIA STREET",
    data: 1005907501
  },
  {
    value: "17 DIVISION STREET",
    data: 1002810056
  },
  {
    value: "17 DOWNING STREET",
    data: 1005270086
  },
  {
    value: "17 DOWNING STREET",
    data: 1005270086
  },
  {
    value: "17 EAST 117 STREET",
    data: 1016230111
  },
  {
    value: "17 EAST 12 STREET",
    data: 1005700036
  },
  {
    value: "17 EAST 124 STREET",
    data: 1017490010
  },
  {
    value: "17 EAST 124 STREET",
    data: 1017490010
  },
  {
    value: "17 EAST 125 STREET",
    data: 1017500006
  },
  {
    value: "17 EAST 126 STREET",
    data: 1017510108
  },
  {
    value: "17 EAST 127 STREET",
    data: 1017520009
  },
  {
    value: "17 EAST 128 STREET",
    data: 1017530010
  },
  {
    value: "17 EAST 129 STREET",
    data: 1017540010
  },
  {
    value: "17 EAST 13 STREET",
    data: 1005710030
  },
  {
    value: "17 EAST 131 STREET",
    data: 1017560012
  },
  {
    value: "17 EAST 17 STREET",
    data: 1008460014
  },
  {
    value: "17 EAST 31 STREET",
    data: 1008610013
  },
  {
    value: "17 EAST 47 STREET",
    data: 1012830013
  },
  {
    value: "17 EAST 48 STREET",
    data: 1012840012
  },
  {
    value: "17 EAST 63 STREET",
    data: 1013780013
  },
  {
    value: "17 EAST 64 STREET",
    data: 1013790013
  },
  {
    value: "17 EAST 65 STREET",
    data: 1013800013
  },
  {
    value: "17 EAST 66 STREET",
    data: 1013810013
  },
  {
    value: "17 EAST 67 STREET",
    data: 1013820013
  },
  {
    value: "17 EAST 67 STREET",
    data: 1013820013
  },
  {
    value: "17 EAST 7 STREET",
    data: 1004630049
  },
  {
    value: "17 EAST 7 STREET",
    data: 1004630049
  },
  {
    value: "17 EAST 70 STREET",
    data: 1013850014
  },
  {
    value: "17 EAST 70 STREET",
    data: 1013850014
  },
  {
    value: "17 EAST 71 STREET",
    data: 1013860015
  },
  {
    value: "17 EAST 73 STREET",
    data: 1013880012
  },
  {
    value: "17 EAST 74 STREET",
    data: 1013890011
  },
  {
    value: "17 EAST 75 STREET",
    data: 1013900013
  },
  {
    value: "17 EAST 76 STREET",
    data: 1013910012
  },
  {
    value: "17 EAST 77 STREET",
    data: 1013920111
  },
  {
    value: "17 EAST 79 STREET",
    data: 1014910010
  },
  {
    value: "17 EAST 80 STREET",
    data: 1014920011
  },
  {
    value: "17 EAST 80 STREET",
    data: 1014920011
  },
  {
    value: "17 EAST 82 STREET",
    data: 1014940013
  },
  {
    value: "17 EAST 83 STREET",
    data: 1014950011
  },
  {
    value: "17 EAST 84 STREET",
    data: 1014960013
  },
  {
    value: "17 EAST 9 STREET",
    data: 1005670026
  },
  {
    value: "17 EAST 90 STREET",
    data: 1015020012
  },
  {
    value: "17 EAST 92 STREET",
    data: 1015040011
  },
  {
    value: "17 EAST 93 STREET",
    data: 1015050011
  },
  {
    value: "17 EAST 94 STREET",
    data: 1015060012
  },
  {
    value: "17 EAST 95 STREET",
    data: 1015070011
  },
  {
    value: "17 EAST 95 STREET",
    data: 1015070011
  },
  {
    value: "17 EAST 96 STREET",
    data: 1016020013
  },
  {
    value: "17 EAST 96 STREET",
    data: 1016020013
  },
  {
    value: "17 EAST 97 STREET",
    data: 1016030014
  },
  {
    value: "17 EAST 97 STREET",
    data: 1016030014
  },
  {
    value: "17 EAST BROADWAY",
    data: 1002807501
  },
  {
    value: "17 ELDRIDGE STREET",
    data: 1002920023
  },
  {
    value: "17 ELDRIDGE STREET",
    data: 1002920023
  },
  {
    value: "17 ESSEX STREET",
    data: 1002970021
  },
  {
    value: "17 ESSEX STREET",
    data: 1002970021
  },
  {
    value: "17 FT GEORGE HILL",
    data: 1021700131
  },
  {
    value: "17 GAY STREET",
    data: 1005930008
  },
  {
    value: "17 GRAMERCY PARK SOUTH",
    data: 1008750067
  },
  {
    value: "17 GREENWICH AVENUE",
    data: 1006100055
  },
  {
    value: "17 GREENWICH AVENUE",
    data: 1006100055
  },
  {
    value: "17 GROVE STREET",
    data: 1005880081
  },
  {
    value: "17 HAMILTON PLACE",
    data: 1019880155
  },
  {
    value: "17 HARRISON STREET",
    data: 1001800026
  },
  {
    value: "17 HUBERT STREET",
    data: 1002140010
  },
  {
    value: "17 IRVING PLACE",
    data: 1008710016
  },
  {
    value: "17 JAY STREET",
    data: 1001807505
  },
  {
    value: "17 JOHN STREET",
    data: 1000790010
  },
  {
    value: "17 JONES STREET",
    data: 1005900081
  },
  {
    value: "17 KING STREET",
    data: 1005200040
  },
  {
    value: "17 LEONARD STREET",
    data: 1001790050
  },
  {
    value: "17 LEROY STREET",
    data: 1005860077
  },
  {
    value: "17 LEXINGTON AVENUE",
    data: 1008780020
  },
  {
    value: "17 LUDLOW STREET",
    data: 1002980025
  },
  {
    value: "17 LUDLOW STREET",
    data: 1002980025
  },
  {
    value: "17 MINETTA STREET",
    data: 1005420040
  },
  {
    value: "17 MONROE STREET",
    data: 1002760008
  },
  {
    value: "17 MOTT STREET",
    data: 1001640047
  },
  {
    value: "17 MOTT STREET",
    data: 1001640047
  },
  {
    value: "17 MURRAY STREET",
    data: 1001347502
  },
  {
    value: "17 OLIVER STREET",
    data: 1002790010
  },
  {
    value: "17 ORCHARD STREET",
    data: 1002997501
  },
  {
    value: "17 PARK PLACE",
    data: 1001240007
  },
  {
    value: "17 PELL STREET",
    data: 1001620049
  },
  {
    value: "17 PERRY STREET",
    data: 1006130028
  },
  {
    value: "17 PIKE STREET",
    data: 1002830047
  },
  {
    value: "17 PIKE STREET",
    data: 1002830047
  },
  {
    value: "17 POST AVENUE",
    data: 1022170009
  },
  {
    value: "17 POST AVENUE",
    data: 1022170009
  },
  {
    value: "17 PRINCE STREET",
    data: 1005080046
  },
  {
    value: "17 PRINCE STREET",
    data: 1005080046
  },
  {
    value: "17 RIVINGTON STREET",
    data: 1004250026
  },
  {
    value: "17 RIVINGTON STREET",
    data: 1004250026
  },
  {
    value: "17 SOUTH WILLIAM STREET",
    data: 1000290047
  },
  {
    value: "17 ST LUKES PLACE",
    data: 1005830044
  },
  {
    value: "17 ST MARKS PLACE",
    data: 1004640051
  },
  {
    value: "17 ST MARKS PLACE",
    data: 1004640051
  },
  {
    value: "17 STANTON STREET",
    data: 1004260024
  },
  {
    value: "17 STATE STREET",
    data: 1000090014
  },
  {
    value: "17 STUYVESANT STREET",
    data: 1004650032
  },
  {
    value: "17 STUYVESANT STREET",
    data: 1004650032
  },
  {
    value: "17 SUTTON PLACE",
    data: 1013720034
  },
  {
    value: "17 SYLVAN TERRACE",
    data: 1021090072
  },
  {
    value: "17 THOMPSON STREET",
    data: 1002270055
  },
  {
    value: "17 UNION SQUARE",
    data: 1008430020
  },
  {
    value: "17 VAN CORLEAR PLACE",
    data: 1022150430
  },
  {
    value: "17 VANDAM STREET",
    data: 1005060048
  },
  {
    value: "17 VESTRY STREET",
    data: 1002200028
  },
  {
    value: "17 WARREN STREET",
    data: 1001340020
  },
  {
    value: "17 WEST 10 STREET",
    data: 1005740053
  },
  {
    value: "17 WEST 100 STREET",
    data: 1018360024
  },
  {
    value: "17 WEST 102 STREET",
    data: 1018380022
  },
  {
    value: "17 WEST 102 STREET",
    data: 1018380022
  },
  {
    value: "17 WEST 103 STREET",
    data: 1018390021
  },
  {
    value: "17 WEST 106 STREET",
    data: 1018420023
  },
  {
    value: "17 WEST 106 STREET",
    data: 1018420023
  },
  {
    value: "17 WEST 108 STREET",
    data: 1018440018
  },
  {
    value: "17 WEST 108 STREET",
    data: 1018440018
  },
  {
    value: "17 WEST 119 STREET",
    data: 1017180030
  },
  {
    value: "17 WEST 119 STREET",
    data: 1017180030
  },
  {
    value: "17 WEST 120 STREET",
    data: 1017200108
  },
  {
    value: "17 WEST 121 STREET",
    data: 1017200042
  },
  {
    value: "17 WEST 122 STREET",
    data: 1017210107
  },
  {
    value: "17 WEST 123 STREET",
    data: 1017210044
  },
  {
    value: "17 WEST 125 STREET",
    data: 1017230023
  },
  {
    value: "17 WEST 125 STREET",
    data: 1017230023
  },
  {
    value: "17 WEST 127 STREET",
    data: 1017250028
  },
  {
    value: "17 WEST 129 STREET",
    data: 1017270026
  },
  {
    value: "17 WEST 131 STREET",
    data: 1017290028
  },
  {
    value: "17 WEST 137 STREET",
    data: 1017350024
  },
  {
    value: "17 WEST 137 STREET",
    data: 1017350024
  },
  {
    value: "17 WEST 14 STREET",
    data: 1008160023
  },
  {
    value: "17 WEST 16 STREET",
    data: 1008180025
  },
  {
    value: "17 WEST 17 STREET",
    data: 1008190027
  },
  {
    value: "17 WEST 20 STREET",
    data: 1008220023
  },
  {
    value: "17 WEST 24 STREET",
    data: 1008260028
  },
  {
    value: "17 WEST 3 STREET",
    data: 1005350036
  },
  {
    value: "17 WEST 32 STREET",
    data: 1008340029
  },
  {
    value: "17 WEST 34 STREET",
    data: 1008360020
  },
  {
    value: "17 WEST 45 STREET",
    data: 1012610027
  },
  {
    value: "17 WEST 52 STREET",
    data: 1012680023
  },
  {
    value: "17 WEST 54 STREET",
    data: 1012700020
  },
  {
    value: "17 WEST 54 STREET",
    data: 1012700020
  },
  {
    value: "17 WEST 56 STREET",
    data: 1012720025
  },
  {
    value: "17 WEST 60 STREET",
    data: 1011130013
  },
  {
    value: "17 WEST 64 STREET",
    data: 1011170021
  },
  {
    value: "17 WEST 64 STREET",
    data: 1011170021
  },
  {
    value: "17 WEST 67 STREET",
    data: 1011200017
  },
  {
    value: "17 WEST 67 STREET",
    data: 1011200017
  },
  {
    value: "17 WEST 68 STREET",
    data: 1011210024
  },
  {
    value: "17 WEST 70 STREET",
    data: 1011230123
  },
  {
    value: "17 WEST 71 STREET",
    data: 1011240021
  },
  {
    value: "17 WEST 71 STREET",
    data: 1011240021
  },
  {
    value: "17 WEST 73 STREET",
    data: 1011260022
  },
  {
    value: "17 WEST 74 STREET",
    data: 1011270022
  },
  {
    value: "17 WEST 74 STREET",
    data: 1011270022
  },
  {
    value: "17 WEST 76 STREET",
    data: 1011290020
  },
  {
    value: "17 WEST 76 STREET",
    data: 1011290020
  },
  {
    value: "17 WEST 8 STREET",
    data: 1005720052
  },
  {
    value: "17 WEST 82 STREET",
    data: 1011960021
  },
  {
    value: "17 WEST 87 STREET",
    data: 1012010122
  },
  {
    value: "17 WEST 89 STREET",
    data: 1012030026
  },
  {
    value: "17 WEST 9 STREET",
    data: 1005730053
  },
  {
    value: "17 WEST 94 STREET",
    data: 1012080026
  },
  {
    value: "17 WEST 95 STREET",
    data: 1012090024
  },
  {
    value: "17 WEST 96 STREET",
    data: 1018320023
  },
  {
    value: "17 WEST 96 STREET",
    data: 1018320023
  },
  {
    value: "170 1 AVENUE",
    data: 1004380004
  },
  {
    value: "170 1 AVENUE",
    data: 1004380004
  },
  {
    value: "170 11 AVENUE",
    data: 1006940065
  },
  {
    value: "170 2 AVENUE",
    data: 1004520006
  },
  {
    value: "170 2 AVENUE",
    data: 1004520006
  },
  {
    value: "170 5 AVENUE",
    data: 1008237502
  },
  {
    value: "170 5 AVENUE",
    data: 1008237502
  },
  {
    value: "170 8 AVENUE",
    data: 1007680083
  },
  {
    value: "170 9 AVENUE",
    data: 1007440003
  },
  {
    value: "170 9 AVENUE",
    data: 1007440003
  },
  {
    value: "170 AUDUBON AVENUE",
    data: 1021300017
  },
  {
    value: "170 AUDUBON AVENUE",
    data: 1021300017
  },
  {
    value: "170 AVENUE A",
    data: 1004040004
  },
  {
    value: "170 AVENUE A",
    data: 1004040004
  },
  {
    value: "170 AVENUE B",
    data: 1004040030
  },
  {
    value: "170 BLEECKER STREET",
    data: 1005260064
  },
  {
    value: "170 BROADWAY",
    data: 1000647502
  },
  {
    value: "170 CANAL STREET",
    data: 1002010017
  },
  {
    value: "170 CENTRAL PARK WEST",
    data: 1011290029
  },
  {
    value: "170 CLAREMONT AVENUE",
    data: 1019930043
  },
  {
    value: "170 CLAREMONT AVENUE",
    data: 1019930043
  },
  {
    value: "170 DELANCEY STREET",
    data: 1003480074
  },
  {
    value: "170 DELANCEY STREET",
    data: 1003480074
  },
  {
    value: "170 DUANE STREET",
    data: 1001417503
  },
  {
    value: "170 EAST 100 STREET",
    data: 1016270041
  },
  {
    value: "170 EAST 104 STREET",
    data: 1016310046
  },
  {
    value: "170 EAST 104 STREET",
    data: 1016310046
  },
  {
    value: "170 EAST 105 STREET",
    data: 1016320042
  },
  {
    value: "170 EAST 105 STREET",
    data: 1016320042
  },
  {
    value: "170 EAST 106 STREET",
    data: 1016337501
  },
  {
    value: "170 EAST 107 STREET",
    data: 1016340041
  },
  {
    value: "170 EAST 108 STREET",
    data: 1016350144
  },
  {
    value: "170 EAST 110 STREET",
    data: 1016370042
  },
  {
    value: "170 EAST 111 STREET",
    data: 1016380045
  },
  {
    value: "170 EAST 117 STREET",
    data: 1016440146
  },
  {
    value: "170 EAST 118 STREET",
    data: 1016450041
  },
  {
    value: "170 EAST 118 STREET",
    data: 1016450041
  },
  {
    value: "170 EAST 122 STREET",
    data: 1017700046
  },
  {
    value: "170 EAST 123 STREET",
    data: 1017710044
  },
  {
    value: "170 EAST 2 STREET",
    data: 1003980053
  },
  {
    value: "170 EAST 2 STREET",
    data: 1003980053
  },
  {
    value: "170 EAST 3 STREET",
    data: 1003980015
  },
  {
    value: "170 EAST 3 STREET",
    data: 1003980015
  },
  {
    value: "170 EAST 61 STREET",
    data: 1013950041
  },
  {
    value: "170 EAST 64 STREET",
    data: 1013980047
  },
  {
    value: "170 EAST 73 STREET",
    data: 1014070045
  },
  {
    value: "170 EAST 75 STREET",
    data: 1014090050
  },
  {
    value: "170 EAST 77 STREET",
    data: 1014117502
  },
  {
    value: "170 EAST 77 STREET",
    data: 1014117502
  },
  {
    value: "170 EAST 78 STREET",
    data: 1014127501
  },
  {
    value: "170 EAST 78 STREET",
    data: 1014127501
  },
  {
    value: "170 EAST 80 STREET",
    data: 1015080044
  },
  {
    value: "170 EAST 87 STREET",
    data: 1015157503
  },
  {
    value: "170 EAST 88 STREET",
    data: 1015160042
  },
  {
    value: "170 EAST 88 STREET",
    data: 1015160042
  },
  {
    value: "170 EAST 89 STREET",
    data: 1015170041
  },
  {
    value: "170 EAST 90 STREET",
    data: 1015180042
  },
  {
    value: "170 EAST 91 STREET",
    data: 1015190041
  },
  {
    value: "170 EAST 91 STREET",
    data: 1015199041
  },
  {
    value: "170 EAST 91 STREET",
    data: 1015190041
  },
  {
    value: "170 EAST 92 STREET",
    data: 1015200140
  },
  {
    value: "170 EAST 92 STREET",
    data: 1015200140
  },
  {
    value: "170 EAST 93 STREET",
    data: 1015210045
  },
  {
    value: "170 EAST 94 STREET",
    data: 1015220041
  },
  {
    value: "170 EAST 94 STREET",
    data: 1015220041
  },
  {
    value: "170 EAST 95 STREET",
    data: 1015230044
  },
  {
    value: "170 EAST END AVENUE",
    data: 1015847501
  },
  {
    value: "170 EAST END AVENUE",
    data: 1015847501
  },
  {
    value: "170 ELDRIDGE STREET",
    data: 1004150009
  },
  {
    value: "170 ELIZABETH STREET",
    data: 1004780015
  },
  {
    value: "170 FORSYTH STREET",
    data: 1004217502
  },
  {
    value: "170 JOHN STREET",
    data: 1000727501
  },
  {
    value: "170 JOHN STREET",
    data: 1000727501
  },
  {
    value: "170 LENOX AVENUE",
    data: 1017170069
  },
  {
    value: "170 LENOX AVENUE",
    data: 1017170069
  },
  {
    value: "170 LEXINGTON AVENUE",
    data: 1008860067
  },
  {
    value: "170 LUDLOW STREET",
    data: 1004120043
  },
  {
    value: "170 LUDLOW STREET",
    data: 1004120043
  },
  {
    value: "170 NORFOLK STREET",
    data: 1003550040
  },
  {
    value: "170 NORFOLK STREET",
    data: 1003550040
  },
  {
    value: "170 RIVINGTON STREET",
    data: 1003440171
  },
  {
    value: "170 RIVINGTON STREET",
    data: 1003440171
  },
  {
    value: "170 SPRING STREET",
    data: 1004880017
  },
  {
    value: "170 SPRING STREET",
    data: 1004880017
  },
  {
    value: "170 SUFFOLK STREET",
    data: 1003500004
  },
  {
    value: "170 SULLIVAN STREET",
    data: 1005260074
  },
  {
    value: "170 THOMPSON STREET",
    data: 1005250035
  },
  {
    value: "170 VERMILYEA AVENUE",
    data: 1022280007
  },
  {
    value: "170 VERMILYEA AVENUE",
    data: 1022280007
  },
  {
    value: "170 WEST 107 STREET",
    data: 1018610059
  },
  {
    value: "170 WEST 107 STREET",
    data: 1018610059
  },
  {
    value: "170 WEST 109 STREET",
    data: 1018630059
  },
  {
    value: "170 WEST 109 STREET",
    data: 1018630059
  },
  {
    value: "170 WEST 130 STREET",
    data: 1019140060
  },
  {
    value: "170 WEST 133 STREET",
    data: 1019170059
  },
  {
    value: "170 WEST 136 STREET",
    data: 1019200059
  },
  {
    value: "170 WEST 136 STREET",
    data: 1019200059
  },
  {
    value: "170 WEST 225 STREET",
    data: 1022150065
  },
  {
    value: "170 WEST 228 STREET",
    data: 1022150317
  },
  {
    value: "170 WEST 23 STREET",
    data: 1007987502
  },
  {
    value: "170 WEST 72 STREET",
    data: 1011430061
  },
  {
    value: "170 WEST 76 STREET",
    data: 1011470059
  },
  {
    value: "170 WEST 76 STREET",
    data: 1011470059
  },
  {
    value: "170 WEST 77 STREET",
    data: 1011480160
  },
  {
    value: "170 WEST 77 STREET",
    data: 1011480160
  },
  {
    value: "170 WEST 81 STREET",
    data: 1012110056
  },
  {
    value: "170 WEST 81 STREET",
    data: 1012110056
  },
  {
    value: "170 WEST 82 STREET",
    data: 1012120059
  },
  {
    value: "170 WEST 85 STREET",
    data: 1012150061
  },
  {
    value: "170 WEST 85 STREET",
    data: 1012150061
  },
  {
    value: "170 WEST 89 STREET",
    data: 1012190057
  },
  {
    value: "170 WEST 89 STREET",
    data: 1012190057
  },
  {
    value: "170 WEST BROADWAY",
    data: 1001790001
  },
  {
    value: "170 WEST END AVENUE",
    data: 1011587505
  },
  {
    value: "170 WEST END AVENUE",
    data: 1011587505
  },
  {
    value: "1700 1 AVENUE",
    data: 1015680001
  },
  {
    value: "1700 1 AVENUE",
    data: 1015680001
  },
  {
    value: "1700 2 AVENUE",
    data: 1015510001
  },
  {
    value: "1700 2 AVENUE",
    data: 1015510001
  },
  {
    value: "1700 AMSTERDAM AVENUE",
    data: 1020760029
  },
  {
    value: "1700 LEXINGTON AVENUE",
    data: 1016340117
  },
  {
    value: "1700 PARK AVENUE",
    data: 1017460033
  },
  {
    value: "1700 YORK AVENUE",
    data: 1015860001
  },
  {
    value: "1700 YORK AVENUE",
    data: 1015860001
  },
  {
    value: "1701 1 AVENUE",
    data: 1015510024
  },
  {
    value: "1701 1 AVENUE",
    data: 1015510024
  },
  {
    value: "1701 2 AVENUE",
    data: 1015340022
  },
  {
    value: "1701 2 AVENUE",
    data: 1015340022
  },
  {
    value: "1701 BROADWAY",
    data: 1010250044
  },
  {
    value: "1701 LEXINGTON AVENUE",
    data: 1016340051
  },
  {
    value: "1702 2 AVENUE",
    data: 1015510002
  },
  {
    value: "1702 2 AVENUE",
    data: 1015510002
  },
  {
    value: "1702 AMSTERDAM AVENUE",
    data: 1020760030
  },
  {
    value: "1702 LEXINGTON AVENUE",
    data: 1016340056
  },
  {
    value: "1703 2 AVENUE",
    data: 1015340023
  },
  {
    value: "1703 LEXINGTON AVENUE",
    data: 1016340050
  },
  {
    value: "1704 2 AVENUE",
    data: 1015510003
  },
  {
    value: "1704 AMSTERDAM AVENUE",
    data: 1020760031
  },
  {
    value: "1704 AMSTERDAM AVENUE",
    data: 1020760031
  },
  {
    value: "1704 LEXINGTON AVENUE",
    data: 1016340156
  },
  {
    value: "1705 1 AVENUE",
    data: 1015510026
  },
  {
    value: "1705 1 AVENUE",
    data: 1015510026
  },
  {
    value: "1705 2 AVENUE",
    data: 1015340024
  },
  {
    value: "1705 FT GEORGE HILL",
    data: 1021700131
  },
  {
    value: "1705 LEXINGTON AVENUE",
    data: 1016340049
  },
  {
    value: "1706 LEXINGTON AVENUE",
    data: 1016340057
  },
  {
    value: "1707 2 AVENUE",
    data: 1015340025
  },
  {
    value: "1707 2 AVENUE",
    data: 1015340025
  },
  {
    value: "1707 PARK AVENUE",
    data: 1017680004
  },
  {
    value: "1707 PARK AVENUE",
    data: 1017680004
  },
  {
    value: "1708 2 AVENUE",
    data: 1015510053
  },
  {
    value: "1708 2 AVENUE",
    data: 1015510053
  },
  {
    value: "1708 BROADWAY",
    data: 1010260021
  },
  {
    value: "1708 LEXINGTON AVENUE",
    data: 1016340157
  },
  {
    value: "1709 2 AVENUE",
    data: 1015340026
  },
  {
    value: "1709 2 AVENUE",
    data: 1015340026
  },
  {
    value: "1709 AMSTERDAM AVENUE",
    data: 1020590061
  },
  {
    value: "1709 AMSTERDAM AVENUE",
    data: 1020590061
  },
  {
    value: "171 1 AVENUE",
    data: 1004520033
  },
  {
    value: "171 3 AVENUE",
    data: 1008970043
  },
  {
    value: "171 5 AVENUE",
    data: 1008510001
  },
  {
    value: "171 7 AVENUE",
    data: 1007960001
  },
  {
    value: "171 7 AVENUE",
    data: 1007960001
  },
  {
    value: "171 8 AVENUE",
    data: 1007420039
  },
  {
    value: "171 ATTORNEY STREET",
    data: 1003500064
  },
  {
    value: "171 AUDUBON AVENUE",
    data: 1021300033
  },
  {
    value: "171 AUDUBON AVENUE",
    data: 1021300033
  },
  {
    value: "171 AVENUE A",
    data: 1004380028
  },
  {
    value: "171 AVENUE A",
    data: 1004380028
  },
  {
    value: "171 AVENUE B",
    data: 1003930007
  },
  {
    value: "171 AVENUE C",
    data: 1003930035
  },
  {
    value: "171 AVENUE C",
    data: 1003930035
  },
  {
    value: "171 BLEECKER STREET",
    data: 1005400036
  },
  {
    value: "171 BLEECKER STREET",
    data: 1005400036
  },
  {
    value: "171 BOWERY",
    data: 1004240011
  },
  {
    value: "171 CANAL STREET",
    data: 1002040029
  },
  {
    value: "171 CHRISTOPHER STREET",
    data: 1006360033
  },
  {
    value: "171 DUANE STREET",
    data: 1001430008
  },
  {
    value: "171 EAST 101 STREET",
    data: 1016290025
  },
  {
    value: "171 EAST 101 STREET",
    data: 1016290025
  },
  {
    value: "171 EAST 102 STREET",
    data: 1016300029
  },
  {
    value: "171 EAST 102 STREET",
    data: 1016300029
  },
  {
    value: "171 EAST 105 STREET",
    data: 1016330030
  },
  {
    value: "171 EAST 107 STREET",
    data: 1016350029
  },
  {
    value: "171 EAST 108 STREET",
    data: 1016360030
  },
  {
    value: "171 EAST 110 STREET",
    data: 1016380032
  },
  {
    value: "171 EAST 111 STREET",
    data: 1016390029
  },
  {
    value: "171 EAST 115 STREET",
    data: 1016430029
  },
  {
    value: "171 EAST 116 STREET",
    data: 1016440129
  },
  {
    value: "171 EAST 117 STREET",
    data: 1016450027
  },
  {
    value: "171 EAST 122 STREET",
    data: 1017710128
  },
  {
    value: "171 EAST 2 STREET",
    data: 1003970018
  },
  {
    value: "171 EAST 2 STREET",
    data: 1003970018
  },
  {
    value: "171 EAST 62 STREET",
    data: 1013970032
  },
  {
    value: "171 EAST 64 STREET",
    data: 1013990028
  },
  {
    value: "171 EAST 70 STREET",
    data: 1014050030
  },
  {
    value: "171 EAST 71 STREET",
    data: 1014060128
  },
  {
    value: "171 EAST 73 STREET",
    data: 1014080028
  },
  {
    value: "171 EAST 74 STREET",
    data: 1014090031
  },
  {
    value: "171 EAST 80 STREET",
    data: 1015090028
  },
  {
    value: "171 EAST 84 STREET",
    data: 1015137501
  },
  {
    value: "171 EAST 84 STREET",
    data: 1015137501
  },
  {
    value: "171 EAST 90 STREET",
    data: 1015190031
  },
  {
    value: "171 EAST 90 STREET",
    data: 1015190031
  },
  {
    value: "171 EAST 92 STREET",
    data: 1015210032
  },
  {
    value: "171 EAST 92 STREET",
    data: 1015210032
  },
  {
    value: "171 EAST 94 STREET",
    data: 1015230129
  },
  {
    value: "171 EAST 99 STREET",
    data: 1016270032
  },
  {
    value: "171 EAST 99 STREET",
    data: 1016270032
  },
  {
    value: "171 EAST BROADWAY",
    data: 1002840025
  },
  {
    value: "171 EAST BROADWAY",
    data: 1002840025
  },
  {
    value: "171 HESTER STREET",
    data: 1002380038
  },
  {
    value: "171 HESTER STREET",
    data: 1002380038
  },
  {
    value: "171 LEXINGTON AVENUE",
    data: 1008860063
  },
  {
    value: "171 LEXINGTON AVENUE",
    data: 1008860063
  },
  {
    value: "171 MAC DOUGAL STREET",
    data: 1005537502
  },
  {
    value: "171 MORNINGSIDE AVENUE",
    data: 1019530063
  },
  {
    value: "171 MOTT STREET",
    data: 1004710044
  },
  {
    value: "171 MOTT STREET",
    data: 1004710044
  },
  {
    value: "171 MULBERRY STREET",
    data: 1004710017
  },
  {
    value: "171 MULBERRY STREET",
    data: 1004710017
  },
  {
    value: "171 PRINCE STREET",
    data: 1005170037
  },
  {
    value: "171 SPRING STREET",
    data: 1005020041
  },
  {
    value: "171 SULLIVAN STREET",
    data: 1005250001
  },
  {
    value: "171 VARICK STREET",
    data: 1005800065
  },
  {
    value: "171 WEST 107 STREET",
    data: 1018627501
  },
  {
    value: "171 WEST 107 STREET",
    data: 1018627501
  },
  {
    value: "171 WEST 126 STREET",
    data: 1019110005
  },
  {
    value: "171 WEST 133 STREET",
    data: 1019180005
  },
  {
    value: "171 WEST 133 STREET",
    data: 1019180005
  },
  {
    value: "171 WEST 140 STREET",
    data: 1020090006
  },
  {
    value: "171 WEST 4 STREET",
    data: 1005920032
  },
  {
    value: "171 WEST 4 STREET",
    data: 1005920032
  },
  {
    value: "171 WEST 57 STREET",
    data: 1010107504
  },
  {
    value: "171 WEST 57 STREET",
    data: 1010107504
  },
  {
    value: "171 WEST 71 STREET",
    data: 1011430001
  },
  {
    value: "171 WEST 73 STREET",
    data: 1011450105
  },
  {
    value: "171 WEST 73 STREET",
    data: 1011450105
  },
  {
    value: "171 WEST 76 STREET",
    data: 1011480005
  },
  {
    value: "171 WEST 79 STREET",
    data: 1012100005
  },
  {
    value: "171 WEST 79 STREET",
    data: 1012100005
  },
  {
    value: "171 WEST 80 STREET",
    data: 1012110104
  },
  {
    value: "171 WEST 81 STREET",
    data: 1012120005
  },
  {
    value: "171 WEST 81 STREET",
    data: 1012120005
  },
  {
    value: "171 WEST 83 STREET",
    data: 1012140006
  },
  {
    value: "171 WEST 85 STREET",
    data: 1012160003
  },
  {
    value: "171 WEST 88 STREET",
    data: 1012190009
  },
  {
    value: "1710 2 AVENUE",
    data: 1015510052
  },
  {
    value: "1710 2 AVENUE",
    data: 1015510052
  },
  {
    value: "1710 3 AVENUE",
    data: 1016240033
  },
  {
    value: "1710 3 AVENUE",
    data: 1016240033
  },
  {
    value: "1710 LEXINGTON AVENUE",
    data: 1016340158
  },
  {
    value: "1711 1 AVENUE",
    data: 1015510028
  },
  {
    value: "1711 1 AVENUE",
    data: 1015510028
  },
  {
    value: "1711 2 AVENUE",
    data: 1015340027
  },
  {
    value: "1711 3 AVENUE",
    data: 1016460001
  },
  {
    value: "1711 LEXINGTON AVENUE",
    data: 1016350024
  },
  {
    value: "1712 2 AVENUE",
    data: 1015510051
  },
  {
    value: "1712 2 AVENUE",
    data: 1015510051
  },
  {
    value: "1712 YORK AVENUE",
    data: 1015870001
  },
  {
    value: "1713 2 AVENUE",
    data: 1015340028
  },
  {
    value: "1713 2 AVENUE",
    data: 1015340028
  },
  {
    value: "1713 LEXINGTON AVENUE",
    data: 1016350023
  },
  {
    value: "1713 MADISON AVENUE",
    data: 1016200040
  },
  {
    value: "1714 2 AVENUE",
    data: 1015510050
  },
  {
    value: "1714 2 AVENUE",
    data: 1015510050
  },
  {
    value: "1714 AMSTERDAM AVENUE",
    data: 1020760036
  },
  {
    value: "1715 2 AVENUE",
    data: 1015340029
  },
  {
    value: "1715 2 AVENUE",
    data: 1015340029
  },
  {
    value: "1715 LEXINGTON AVENUE",
    data: 1016350122
  },
  {
    value: "1716 2 AVENUE",
    data: 1015520001
  },
  {
    value: "1716 2 AVENUE",
    data: 1015520001
  },
  {
    value: "1717 BROADWAY",
    data: 1010267501
  },
  {
    value: "1717 LEXINGTON AVENUE",
    data: 1016350022
  },
  {
    value: "1719 LEXINGTON AVENUE",
    data: 1016350121
  },
  {
    value: "172 1 AVENUE",
    data: 1004380005
  },
  {
    value: "172 1/2 CANAL STREET",
    data: 1002010016
  },
  {
    value: "172 5 AVENUE",
    data: 1008240036
  },
  {
    value: "172 5 AVENUE",
    data: 1008240036
  },
  {
    value: "172 7 AVENUE",
    data: 1007700037
  },
  {
    value: "172 7 AVENUE",
    data: 1007700037
  },
  {
    value: "172 8 AVENUE",
    data: 1007680082
  },
  {
    value: "172 ALLEN STREET",
    data: 1004160053
  },
  {
    value: "172 ATTORNEY STREET",
    data: 1003450010
  },
  {
    value: "172 AVENUE B",
    data: 1004040029
  },
  {
    value: "172 DELANCEY STREET",
    data: 1003480073
  },
  {
    value: "172 DELANCEY STREET",
    data: 1003480073
  },
  {
    value: "172 DUANE STREET",
    data: 1001410028
  },
  {
    value: "172 DYCKMAN STREET",
    data: 1021750066
  },
  {
    value: "172 EAST 104 STREET",
    data: 1016310045
  },
  {
    value: "172 EAST 107 STREET",
    data: 1016340140
  },
  {
    value: "172 EAST 108 STREET",
    data: 1016350044
  },
  {
    value: "172 EAST 110 STREET",
    data: 1016370141
  },
  {
    value: "172 EAST 111 STREET",
    data: 1016380044
  },
  {
    value: "172 EAST 112 STREET",
    data: 1016390042
  },
  {
    value: "172 EAST 112 STREET",
    data: 1016390042
  },
  {
    value: "172 EAST 117 STREET",
    data: 1016440046
  },
  {
    value: "172 EAST 122 STREET",
    data: 1017700045
  },
  {
    value: "172 EAST 64 STREET",
    data: 1013980046
  },
  {
    value: "172 EAST 7 STREET",
    data: 1004020029
  },
  {
    value: "172 EAST 7 STREET",
    data: 1004020029
  },
  {
    value: "172 EAST 71 STREET",
    data: 1014050042
  },
  {
    value: "172 EAST 75 STREET",
    data: 1014090149
  },
  {
    value: "172 EAST 80 STREET",
    data: 1015080043
  },
  {
    value: "172 EAST 82 STREET",
    data: 1015100042
  },
  {
    value: "172 EAST 82 STREET",
    data: 1015100042
  },
  {
    value: "172 EAST 85 STREET",
    data: 1015130043
  },
  {
    value: "172 EAST 85 STREET",
    data: 1015130043
  },
  {
    value: "172 EAST 90 STREET",
    data: 1015180041
  },
  {
    value: "172 EAST 91 STREET",
    data: 1015190040
  },
  {
    value: "172 EAST 91 STREET",
    data: 1015199040
  },
  {
    value: "172 EAST 91 STREET",
    data: 1015190040
  },
  {
    value: "172 EAST 93 STREET",
    data: 1015210144
  },
  {
    value: "172 EAST 95 STREET",
    data: 1015230143
  },
  {
    value: "172 ELDRIDGE STREET",
    data: 1004150010
  },
  {
    value: "172 ELIZABETH STREET",
    data: 1004780016
  },
  {
    value: "172 FORSYTH STREET",
    data: 1004210043
  },
  {
    value: "172 FORSYTH STREET",
    data: 1004210043
  },
  {
    value: "172 HENRY STREET",
    data: 1002710048
  },
  {
    value: "172 HENRY STREET",
    data: 1002710048
  },
  {
    value: "172 LEXINGTON AVENUE",
    data: 1008860068
  },
  {
    value: "172 LUDLOW STREET",
    data: 1004120044
  },
  {
    value: "172 MADISON AVENUE",
    data: 1008630017
  },
  {
    value: "172 MADISON AVENUE",
    data: 1008630017
  },
  {
    value: "172 MULBERRY STREET",
    data: 1004710033
  },
  {
    value: "172 MULBERRY STREET",
    data: 1004710033
  },
  {
    value: "172 NORFOLK STREET",
    data: 1003550041
  },
  {
    value: "172 ORCHARD STREET",
    data: 1004120001
  },
  {
    value: "172 ORCHARD STREET",
    data: 1004120001
  },
  {
    value: "172 RIVINGTON STREET",
    data: 1003440170
  },
  {
    value: "172 RIVINGTON STREET",
    data: 1003440170
  },
  {
    value: "172 SHERMAN AVENUE",
    data: 1022250028
  },
  {
    value: "172 SHERMAN AVENUE",
    data: 1022250028
  },
  {
    value: "172 SULLIVAN STREET",
    data: 1005260073
  },
  {
    value: "172 WAVERLY PLACE",
    data: 1006100027
  },
  {
    value: "172 WAVERLY PLACE",
    data: 1006100027
  },
  {
    value: "172 WEST 107 STREET",
    data: 1018610060
  },
  {
    value: "172 WEST 107 STREET",
    data: 1018610060
  },
  {
    value: "172 WEST 109 STREET",
    data: 1018630060
  },
  {
    value: "172 WEST 109 STREET",
    data: 1018630060
  },
  {
    value: "172 WEST 130 STREET",
    data: 1019140061
  },
  {
    value: "172 WEST 225 STREET",
    data: 1022150064
  },
  {
    value: "172 WEST 4 STREET",
    data: 1005900028
  },
  {
    value: "172 WEST 79 STREET",
    data: 1011507504
  },
  {
    value: "172 WEST 79 STREET",
    data: 1011507504
  },
  {
    value: "172 WEST 81 STREET",
    data: 1012110059
  },
  {
    value: "172 WEST 81 STREET",
    data: 1012110059
  },
  {
    value: "172 WEST 82 STREET",
    data: 1012120060
  },
  {
    value: "172 WEST 82 STREET",
    data: 1012120159
  },
  {
    value: "1720 AMSTERDAM AVENUE",
    data: 1020770029
  },
  {
    value: "1721 AMSTERDAM AVENUE",
    data: 1020600001
  },
  {
    value: "1721 LEXINGTON AVENUE",
    data: 1016350021
  },
  {
    value: "1721 PARK AVENUE",
    data: 1017690001
  },
  {
    value: "1722 AMSTERDAM AVENUE",
    data: 1020770030
  },
  {
    value: "1722 AMSTERDAM AVENUE",
    data: 1020770030
  },
  {
    value: "1723 LEXINGTON AVENUE",
    data: 1016350052
  },
  {
    value: "1724 2 AVENUE",
    data: 1015527501
  },
  {
    value: "1724 2 AVENUE",
    data: 1015527501
  },
  {
    value: "1724 AMSTERDAM AVENUE",
    data: 1020770031
  },
  {
    value: "1724 AMSTERDAM AVENUE",
    data: 1020770031
  },
  {
    value: "1724 BROADWAY",
    data: 1010260041
  },
  {
    value: "1725 2 AVENUE",
    data: 1015350021
  },
  {
    value: "1725 2 AVENUE",
    data: 1015350021
  },
  {
    value: "1725 LEXINGTON AVENUE",
    data: 1016350051
  },
  {
    value: "1725 PARK AVENUE",
    data: 1017690003
  },
  {
    value: "1725 YORK AVENUE",
    data: 1015690016
  },
  {
    value: "1725 YORK AVENUE",
    data: 1015690016
  },
  {
    value: "1726 2 AVENUE",
    data: 1015520051
  },
  {
    value: "1726 AMSTERDAM AVENUE",
    data: 1020770032
  },
  {
    value: "1727 2 AVENUE",
    data: 1015350022
  },
  {
    value: "1727 2 AVENUE",
    data: 1015350022
  },
  {
    value: "1727 LEXINGTON AVENUE",
    data: 1016350151
  },
  {
    value: "1728 2 AVENUE",
    data: 1015520050
  },
  {
    value: "1728 2 AVENUE",
    data: 1015520050
  },
  {
    value: "1728 AMSTERDAM AVENUE",
    data: 1020770033
  },
  {
    value: "1729 1 AVENUE",
    data: 1015520027
  },
  {
    value: "1729 1 AVENUE",
    data: 1015520027
  },
  {
    value: "1729 2 AVENUE",
    data: 1015350023
  },
  {
    value: "1729 2 AVENUE",
    data: 1015350023
  },
  {
    value: "1729 LEXINGTON AVENUE",
    data: 1016350050
  },
  {
    value: "173 1 AVENUE",
    data: 1004520032
  },
  {
    value: "173 7 AVENUE SOUTH",
    data: 1006130062
  },
  {
    value: "173 ATTORNEY STREET",
    data: 1003500063
  },
  {
    value: "173 AVENUE A",
    data: 1004380027
  },
  {
    value: "173 AVENUE A",
    data: 1004380027
  },
  {
    value: "173 AVENUE B",
    data: 1003930008
  },
  {
    value: "173 AVENUE C",
    data: 1003930034
  },
  {
    value: "173 AVENUE C",
    data: 1003930034
  },
  {
    value: "173 BLEECKER STREET",
    data: 1005407501
  },
  {
    value: "173 BLEECKER STREET",
    data: 1005407501
  },
  {
    value: "173 BROADWAY",
    data: 1000630021
  },
  {
    value: "173 CHRISTOPHER STREET",
    data: 1006360034
  },
  {
    value: "173 CHRYSTIE STREET",
    data: 1004250028
  },
  {
    value: "173 DUANE STREET",
    data: 1001430009
  },
  {
    value: "173 DUANE STREET",
    data: 1001430009
  },
  {
    value: "173 EAST 101 STREET",
    data: 1016290027
  },
  {
    value: "173 EAST 101 STREET",
    data: 1016290027
  },
  {
    value: "173 EAST 105 STREET",
    data: 1016330031
  },
  {
    value: "173 EAST 107 STREET",
    data: 1016350129
  },
  {
    value: "173 EAST 108 STREET",
    data: 1016360130
  },
  {
    value: "173 EAST 111 STREET",
    data: 1016390030
  },
  {
    value: "173 EAST 116 STREET",
    data: 1016440030
  },
  {
    value: "173 EAST 117 STREET",
    data: 1016450028
  },
  {
    value: "173 EAST 120 STREET",
    data: 1017690032
  },
  {
    value: "173 EAST 123 STREET",
    data: 1017720030
  },
  {
    value: "173 EAST 2 STREET",
    data: 1003970019
  },
  {
    value: "173 EAST 3 STREET",
    data: 1003990051
  },
  {
    value: "173 EAST 64 STREET",
    data: 1013990128
  },
  {
    value: "173 EAST 70 STREET",
    data: 1014050130
  },
  {
    value: "173 EAST 71 STREET",
    data: 1014067501
  },
  {
    value: "173 EAST 73 STREET",
    data: 1014080029
  },
  {
    value: "173 EAST 74 STREET",
    data: 1014090032
  },
  {
    value: "173 EAST 74 STREET",
    data: 1014090032
  },
  {
    value: "173 EAST 79 STREET",
    data: 1015080027
  },
  {
    value: "173 EAST 79 STREET",
    data: 1015080027
  },
  {
    value: "173 EAST 80 STREET",
    data: 1015090029
  },
  {
    value: "173 EAST 87 STREET",
    data: 1015160030
  },
  {
    value: "173 EAST 90 STREET",
    data: 1015190032
  },
  {
    value: "173 EAST 90 STREET",
    data: 1015190032
  },
  {
    value: "173 EAST 91 STREET",
    data: 1015200034
  },
  {
    value: "173 EAST 91 STREET",
    data: 1015200034
  },
  {
    value: "173 EAST 94 STREET",
    data: 1015230030
  },
  {
    value: "173 EAST BROADWAY",
    data: 1002847503
  },
  {
    value: "173 EAST BROADWAY",
    data: 1002847503
  },
  {
    value: "173 FRANKLIN STREET",
    data: 1001810020
  },
  {
    value: "173 GRAND STREET",
    data: 1002367501
  },
  {
    value: "173 HENRY STREET",
    data: 1002840011
  },
  {
    value: "173 HENRY STREET",
    data: 1002840011
  },
  {
    value: "173 HESTER STREET",
    data: 1002380040
  },
  {
    value: "173 HESTER STREET",
    data: 1002380040
  },
  {
    value: "173 LUDLOW STREET",
    data: 1004120029
  },
  {
    value: "173 LUDLOW STREET",
    data: 1004120029
  },
  {
    value: "173 MORNINGSIDE AVENUE",
    data: 1019530062
  },
  {
    value: "173 MULBERRY STREET",
    data: 1004710016
  },
  {
    value: "173 PERRY STREET",
    data: 1006377504
  },
  {
    value: "173 RIVERSIDE DRIVE",
    data: 1012500067
  },
  {
    value: "173 RIVERSIDE DRIVE",
    data: 1012500067
  },
  {
    value: "173 RIVINGTON STREET",
    data: 1003480053
  },
  {
    value: "173 RIVINGTON STREET",
    data: 1003480053
  },
  {
    value: "173 SPRING STREET",
    data: 1005020042
  },
  {
    value: "173 STANTON STREET",
    data: 1003440149
  },
  {
    value: "173 SULLIVAN STREET",
    data: 1005250002
  },
  {
    value: "173 WEST 126 STREET",
    data: 1019110004
  },
  {
    value: "173 WEST 133 STREET",
    data: 1019180001
  },
  {
    value: "173 WEST 141 STREET",
    data: 1020100001
  },
  {
    value: "173 WEST 141 STREET",
    data: 1020100001
  },
  {
    value: "173 WEST 228 STREET",
    data: 1022150186
  },
  {
    value: "173 WEST 78 STREET",
    data: 1011500001
  },
  {
    value: "173 WEST 78 STREET",
    data: 1011500001
  },
  {
    value: "173 WEST 81 STREET",
    data: 1012120003
  },
  {
    value: "173 WEST 81 STREET",
    data: 1012120003
  },
  {
    value: "173 WEST 83 STREET",
    data: 1012140005
  },
  {
    value: "173 WEST 83 STREET",
    data: 1012140005
  },
  {
    value: "173 WEST 85 STREET",
    data: 1012160002
  },
  {
    value: "173 WEST 88 STREET",
    data: 1012190008
  },
  {
    value: "1730 2 AVENUE",
    data: 1015527502
  },
  {
    value: "1730 2 AVENUE",
    data: 1015527502
  },
  {
    value: "1730 AMSTERDAM AVENUE",
    data: 1020770034
  },
  {
    value: "1730 BROADWAY",
    data: 1010270020
  },
  {
    value: "1731 2 AVENUE",
    data: 1015350024
  },
  {
    value: "1731 2 AVENUE",
    data: 1015350024
  },
  {
    value: "1731 BROADWAY",
    data: 1010277503
  },
  {
    value: "1731 LEXINGTON AVENUE",
    data: 1016350150
  },
  {
    value: "1731 YORK AVENUE",
    data: 1015700021
  },
  {
    value: "1731 YORK AVENUE",
    data: 1015700021
  },
  {
    value: "1732 2 AVENUE",
    data: 1015530001
  },
  {
    value: "1732 2 AVENUE",
    data: 1015530001
  },
  {
    value: "1732 AMSTERDAM AVENUE",
    data: 1020770035
  },
  {
    value: "1733 1 AVENUE",
    data: 1015520029
  },
  {
    value: "1733 1 AVENUE",
    data: 1015520029
  },
  {
    value: "1733 2 AVENUE",
    data: 1015350025
  },
  {
    value: "1733 LEXINGTON AVENUE",
    data: 1016350149
  },
  {
    value: "1734 2 AVENUE",
    data: 1015530002
  },
  {
    value: "1734 2 AVENUE",
    data: 1015530002
  },
  {
    value: "1734 AMSTERDAM AVENUE",
    data: 1020770036
  },
  {
    value: "1735 2 AVENUE",
    data: 1015350026
  },
  {
    value: "1735 LEXINGTON AVENUE",
    data: 1016360123
  },
  {
    value: "1735 MADISON AVENUE",
    data: 1016200023
  },
  {
    value: "1735 MADISON AVENUE",
    data: 1016200023
  },
  {
    value: "1737 2 AVENUE",
    data: 1015350027
  },
  {
    value: "1737 LEXINGTON AVENUE",
    data: 1016360023
  },
  {
    value: "1737 YORK AVENUE",
    data: 1015700024
  },
  {
    value: "1737 YORK AVENUE",
    data: 1015700024
  },
  {
    value: "1738 2 AVENUE",
    data: 1015530004
  },
  {
    value: "1738 2 AVENUE",
    data: 1015530004
  },
  {
    value: "1739 2 AVENUE",
    data: 1015350028
  },
  {
    value: "1739 AMSTERDAM AVENUE",
    data: 1020610001
  },
  {
    value: "1739 AMSTERDAM AVENUE",
    data: 1020610001
  },
  {
    value: "1739 LEXINGTON AVENUE",
    data: 1016360122
  },
  {
    value: "174 1 AVENUE",
    data: 1004380006
  },
  {
    value: "174 2 AVENUE",
    data: 1004530001
  },
  {
    value: "174 2 AVENUE",
    data: 1004530001
  },
  {
    value: "174 5 AVENUE",
    data: 1008240037
  },
  {
    value: "174 7 AVENUE",
    data: 1007700038
  },
  {
    value: "174 7 AVENUE SOUTH",
    data: 1006130068
  },
  {
    value: "174 8 AVENUE",
    data: 1007680081
  },
  {
    value: "174 AVENUE A",
    data: 1004050001
  },
  {
    value: "174 AVENUE A",
    data: 1004050001
  },
  {
    value: "174 AVENUE B",
    data: 1004040028
  },
  {
    value: "174 BLEECKER STREET",
    data: 1005260062
  },
  {
    value: "174 BOWERY",
    data: 1004780028
  },
  {
    value: "174 BROADWAY",
    data: 1000650016
  },
  {
    value: "174 CANAL STREET",
    data: 1002010014
  },
  {
    value: "174 CANAL STREET",
    data: 1002010014
  },
  {
    value: "174 DELANCEY STREET",
    data: 1003480072
  },
  {
    value: "174 DELANCEY STREET",
    data: 1003480072
  },
  {
    value: "174 DUANE STREET",
    data: 1001410027
  },
  {
    value: "174 EAST 104 STREET",
    data: 1016310044
  },
  {
    value: "174 EAST 105 STREET",
    data: 1016320041
  },
  {
    value: "174 EAST 106 STREET",
    data: 1016330041
  },
  {
    value: "174 EAST 106 STREET",
    data: 1016330041
  },
  {
    value: "174 EAST 108 STREET",
    data: 1016350043
  },
  {
    value: "174 EAST 109 STREET",
    data: 1016360044
  },
  {
    value: "174 EAST 111 STREET",
    data: 1016380043
  },
  {
    value: "174 EAST 112 STREET",
    data: 1016390041
  },
  {
    value: "174 EAST 122 STREET",
    data: 1017700043
  },
  {
    value: "174 EAST 2 STREET",
    data: 1003980052
  },
  {
    value: "174 EAST 64 STREET",
    data: 1013980145
  },
  {
    value: "174 EAST 70 STREET",
    data: 1014040043
  },
  {
    value: "174 EAST 73 STREET",
    data: 1014070044
  },
  {
    value: "174 EAST 75 STREET",
    data: 1014090049
  },
  {
    value: "174 EAST 80 STREET",
    data: 1015080142
  },
  {
    value: "174 EAST 82 STREET",
    data: 1015100041
  },
  {
    value: "174 EAST 85 STREET",
    data: 1015130042
  },
  {
    value: "174 EAST 85 STREET",
    data: 1015130042
  },
  {
    value: "174 EAST 93 STREET",
    data: 1015210044
  },
  {
    value: "174 EAST 95 STREET",
    data: 1015230043
  },
  {
    value: "174 ELDRIDGE STREET",
    data: 1004150011
  },
  {
    value: "174 ELIZABETH STREET",
    data: 1004780017
  },
  {
    value: "174 FORSYTH STREET",
    data: 1004210044
  },
  {
    value: "174 FORSYTH STREET",
    data: 1004210044
  },
  {
    value: "174 GRAND STREET",
    data: 1004710028
  },
  {
    value: "174 HENRY STREET",
    data: 1002710047
  },
  {
    value: "174 HENRY STREET",
    data: 1002710047
  },
  {
    value: "174 HESTER STREET",
    data: 1002050018
  },
  {
    value: "174 HESTER STREET",
    data: 1002050018
  },
  {
    value: "174 HUDSON STREET",
    data: 1002200031
  },
  {
    value: "174 LEXINGTON AVENUE",
    data: 1008860069
  },
  {
    value: "174 LUDLOW STREET",
    data: 1004120045
  },
  {
    value: "174 LUDLOW STREET",
    data: 1004120045
  },
  {
    value: "174 MULBERRY STREET",
    data: 1004710034
  },
  {
    value: "174 MULBERRY STREET",
    data: 1004710034
  },
  {
    value: "174 ORCHARD STREET",
    data: 1004120002
  },
  {
    value: "174 RIVINGTON STREET",
    data: 1003440169
  },
  {
    value: "174 RIVINGTON STREET",
    data: 1003440169
  },
  {
    value: "174 SULLIVAN STREET",
    data: 1005260072
  },
  {
    value: "174 THOMPSON STREET",
    data: 1005250037
  },
  {
    value: "174 WAVERLY PLACE",
    data: 1006100026
  },
  {
    value: "174 WEST 136 STREET",
    data: 1019200060
  },
  {
    value: "174 WEST 136 STREET",
    data: 1019200060
  },
  {
    value: "174 WEST 137 STREET",
    data: 1019210055
  },
  {
    value: "174 WEST 137 STREET",
    data: 1019210055
  },
  {
    value: "174 WEST 225 STREET",
    data: 1022150063
  },
  {
    value: "174 WEST 72 STREET",
    data: 1011430063
  },
  {
    value: "174 WEST 89 STREET",
    data: 1012190059
  },
  {
    value: "174 WEST 89 STREET",
    data: 1012190059
  },
  {
    value: "174 WEST HOUSTON STREET",
    data: 1005270049
  },
  {
    value: "174 WEST HOUSTON STREET",
    data: 1005270049
  },
  {
    value: "1740 1 AVENUE",
    data: 1015700001
  },
  {
    value: "1740 1 AVENUE",
    data: 1015700001
  },
  {
    value: "1740 AMSTERDAM AVENUE",
    data: 1020780019
  },
  {
    value: "1741 1 AVENUE",
    data: 1015530023
  },
  {
    value: "1741 1 AVENUE",
    data: 1015530023
  },
  {
    value: "1741 AMSTERDAM AVENUE",
    data: 1020610002
  },
  {
    value: "1741 AMSTERDAM AVENUE",
    data: 1020610002
  },
  {
    value: "1741 LEXINGTON AVENUE",
    data: 1016360022
  },
  {
    value: "1742 1 AVENUE",
    data: 1015700002
  },
  {
    value: "1742 1 AVENUE",
    data: 1015700002
  },
  {
    value: "1742 2 AVENUE",
    data: 1015530051
  },
  {
    value: "1743 1 AVENUE",
    data: 1015530024
  },
  {
    value: "1743 1 AVENUE",
    data: 1015530024
  },
  {
    value: "1743 AMSTERDAM AVENUE",
    data: 1020610003
  },
  {
    value: "1743 AMSTERDAM AVENUE",
    data: 1020610003
  },
  {
    value: "1743 LEXINGTON AVENUE",
    data: 1016360121
  },
  {
    value: "1744 1 AVENUE",
    data: 1015700003
  },
  {
    value: "1744 2 AVENUE",
    data: 1015530050
  },
  {
    value: "1745 1 AVENUE",
    data: 1015530025
  },
  {
    value: "1745 AMSTERDAM AVENUE",
    data: 1020610004
  },
  {
    value: "1745 LEXINGTON AVENUE",
    data: 1016360021
  },
  {
    value: "1746 1 AVENUE",
    data: 1015700004
  },
  {
    value: "1746 2 AVENUE",
    data: 1015530049
  },
  {
    value: "1746 2 AVENUE",
    data: 1015530049
  },
  {
    value: "1747 AMSTERDAM AVENUE",
    data: 1020610064
  },
  {
    value: "1747 LEXINGTON AVENUE",
    data: 1016360052
  },
  {
    value: "1748 1 AVENUE",
    data: 1015700050
  },
  {
    value: "1748 2 AVENUE",
    data: 1015540001
  },
  {
    value: "1748 2 AVENUE",
    data: 1015540001
  },
  {
    value: "1749 1 AVENUE",
    data: 1015530027
  },
  {
    value: "1749 1 AVENUE",
    data: 1015530027
  },
  {
    value: "1749 2 AVENUE",
    data: 1015370022
  },
  {
    value: "1749 2 AVENUE",
    data: 1015370022
  },
  {
    value: "1749 AMSTERDAM AVENUE",
    data: 1020610063
  },
  {
    value: "1749 LEXINGTON AVENUE",
    data: 1016360151
  },
  {
    value: "175 1 AVENUE",
    data: 1004520031
  },
  {
    value: "175 2 AVENUE",
    data: 1004670035
  },
  {
    value: "175 2 AVENUE",
    data: 1004670035
  },
  {
    value: "175 3 AVENUE",
    data: 1008970044
  },
  {
    value: "175 3 AVENUE",
    data: 1008970044
  },
  {
    value: "175 AUDUBON AVENUE",
    data: 1021300036
  },
  {
    value: "175 AUDUBON AVENUE",
    data: 1021300036
  },
  {
    value: "175 AVENUE B",
    data: 1003940001
  },
  {
    value: "175 AVENUE B",
    data: 1003940001
  },
  {
    value: "175 AVENUE C",
    data: 1003930033
  },
  {
    value: "175 BROADWAY",
    data: 1000630020
  },
  {
    value: "175 CANAL STREET",
    data: 1002040031
  },
  {
    value: "175 CLAREMONT AVENUE",
    data: 1019940043
  },
  {
    value: "175 CLAREMONT AVENUE",
    data: 1019940043
  },
  {
    value: "175 DELANCEY STREET",
    data: 1003477501
  },
  {
    value: "175 DYCKMAN STREET",
    data: 1022240053
  },
  {
    value: "175 EAST 101 STREET",
    data: 1016290028
  },
  {
    value: "175 EAST 101 STREET",
    data: 1016290028
  },
  {
    value: "175 EAST 102 STREET",
    data: 1016300031
  },
  {
    value: "175 EAST 104 STREET",
    data: 1016320029
  },
  {
    value: "175 EAST 105 STREET",
    data: 1016330032
  },
  {
    value: "175 EAST 105 STREET",
    data: 1016330032
  },
  {
    value: "175 EAST 107 STREET",
    data: 1016350030
  },
  {
    value: "175 EAST 108 STREET",
    data: 1016360031
  },
  {
    value: "175 EAST 111 STREET",
    data: 1016390031
  },
  {
    value: "175 EAST 116 STREET",
    data: 1016440031
  },
  {
    value: "175 EAST 117 STREET",
    data: 1016450029
  },
  {
    value: "175 EAST 120 STREET",
    data: 1017690132
  },
  {
    value: "175 EAST 128 STREET",
    data: 1017770090
  },
  {
    value: "175 EAST 2 STREET",
    data: 1003977501
  },
  {
    value: "175 EAST 2 STREET",
    data: 1003977501
  },
  {
    value: "175 EAST 3 STREET",
    data: 1003990050
  },
  {
    value: "175 EAST 64 STREET",
    data: 1013990029
  },
  {
    value: "175 EAST 70 STREET",
    data: 1014050031
  },
  {
    value: "175 EAST 73 STREET",
    data: 1014080030
  },
  {
    value: "175 EAST 78 STREET",
    data: 1014130030
  },
  {
    value: "175 EAST 80 STREET",
    data: 1015090129
  },
  {
    value: "175 EAST 90 STREET",
    data: 1015190132
  },
  {
    value: "175 EAST 90 STREET",
    data: 1015199132
  },
  {
    value: "175 EAST 90 STREET",
    data: 1015190132
  },
  {
    value: "175 EAST 93 STREET",
    data: 1015220026
  },
  {
    value: "175 EAST 93 STREET",
    data: 1015220026
  },
  {
    value: "175 EAST 94 STREET",
    data: 1015237501
  },
  {
    value: "175 ELDRIDGE STREET",
    data: 1004200062
  },
  {
    value: "175 ELDRIDGE STREET",
    data: 1004200062
  },
  {
    value: "175 FRANKLIN STREET",
    data: 1001810019
  },
  {
    value: "175 FRONT STREET",
    data: 1000720019
  },
  {
    value: "175 LEXINGTON AVENUE",
    data: 1008860062
  },
  {
    value: "175 LEXINGTON AVENUE",
    data: 1008860062
  },
  {
    value: "175 LUDLOW STREET",
    data: 1004120028
  },
  {
    value: "175 LUDLOW STREET",
    data: 1004120028
  },
  {
    value: "175 MAC DOUGAL STREET",
    data: 1005530027
  },
  {
    value: "175 MADISON AVENUE",
    data: 1008630024
  },
  {
    value: "175 MORNINGSIDE AVENUE",
    data: 1019530061
  },
  {
    value: "175 MULBERRY STREET",
    data: 1004710015
  },
  {
    value: "175 NAGLE AVENUE",
    data: 1022160001
  },
  {
    value: "175 NAGLE AVENUE",
    data: 1022160001
  },
  {
    value: "175 ORCHARD STREET",
    data: 1004170067
  },
  {
    value: "175 ORCHARD STREET",
    data: 1004170067
  },
  {
    value: "175 PAYSON AVENUE",
    data: 1022487501
  },
  {
    value: "175 PAYSON AVENUE",
    data: 1022487501
  },
  {
    value: "175 PINEHURST AVENUE",
    data: 1021790201
  },
  {
    value: "175 PINEHURST AVENUE",
    data: 1021790201
  },
  {
    value: "175 STANTON STREET",
    data: 1003440150
  },
  {
    value: "175 SULLIVAN STREET",
    data: 1005257505
  },
  {
    value: "175 THOMPSON STREET",
    data: 1005250021
  },
  {
    value: "175 WATER STREET",
    data: 1000717501
  },
  {
    value: "175 WEST 12 STREET",
    data: 1006087501
  },
  {
    value: "175 WEST 12 STREET",
    data: 1006087501
  },
  {
    value: "175 WEST 126 STREET",
    data: 1019110003
  },
  {
    value: "175 WEST 137 STREET",
    data: 1020060007
  },
  {
    value: "175 WEST 4 STREET",
    data: 1005920034
  },
  {
    value: "175 WEST 60 STREET",
    data: 1011320021
  },
  {
    value: "175 WEST 60 STREET",
    data: 1011320021
  },
  {
    value: "175 WEST 73 STREET",
    data: 1011450001
  },
  {
    value: "175 WEST 73 STREET",
    data: 1011450001
  },
  {
    value: "175 WEST 81 STREET",
    data: 1012120001
  },
  {
    value: "175 WEST 81 STREET",
    data: 1012120001
  },
  {
    value: "175 WEST 85 STREET",
    data: 1012160001
  },
  {
    value: "175 WEST 85 STREET",
    data: 1012160001
  },
  {
    value: "175 WEST 88 STREET",
    data: 1012190107
  },
  {
    value: "175 WEST 89 STREET",
    data: 1012200005
  },
  {
    value: "175 WEST 89 STREET",
    data: 1012200007
  },
  {
    value: "175 WEST BROADWAY",
    data: 1001760014
  },
  {
    value: "1750 1 AVENUE",
    data: 1015700048
  },
  {
    value: "1750 1 AVENUE",
    data: 1015700048
  },
  {
    value: "1750 2 AVENUE",
    data: 1015540002
  },
  {
    value: "1751 AMSTERDAM AVENUE",
    data: 1020610062
  },
  {
    value: "1751 LEXINGTON AVENUE",
    data: 1016360051
  },
  {
    value: "1751 PARK AVENUE",
    data: 1017700072
  },
  {
    value: "1751 YORK AVENUE",
    data: 1015710022
  },
  {
    value: "1751 YORK AVENUE",
    data: 1015710022
  },
  {
    value: "1752 2 AVENUE",
    data: 1015540003
  },
  {
    value: "1752 BROADWAY",
    data: 1010280017
  },
  {
    value: "1752 BROADWAY",
    data: 1010280017
  },
  {
    value: "1752 PARK AVENUE",
    data: 1017470070
  },
  {
    value: "1753 AMSTERDAM AVENUE",
    data: 1020610061
  },
  {
    value: "1753 LEXINGTON AVENUE",
    data: 1016360150
  },
  {
    value: "1754 2 AVENUE",
    data: 1015540004
  },
  {
    value: "1755 MADISON AVENUE",
    data: 1016210022
  },
  {
    value: "1755 MADISON AVENUE",
    data: 1016210022
  },
  {
    value: "1756 1 AVENUE",
    data: 1015710001
  },
  {
    value: "1756 1 AVENUE",
    data: 1015710001
  },
  {
    value: "1758 1 AVENUE",
    data: 1015710002
  },
  {
    value: "1758 1 AVENUE",
    data: 1015710002
  },
  {
    value: "1759 LEXINGTON AVENUE",
    data: 1016370021
  },
  {
    value: "1759 MADISON AVENUE",
    data: 1016210020
  },
  {
    value: "176 2 AVENUE",
    data: 1004530002
  },
  {
    value: "176 7 AVENUE",
    data: 1007700039
  },
  {
    value: "176 8 AVENUE",
    data: 1007680080
  },
  {
    value: "176 BLEECKER STREET",
    data: 1005260061
  },
  {
    value: "176 BROADWAY",
    data: 1000650017
  },
  {
    value: "176 CHRISTOPHER STREET",
    data: 1006040007
  },
  {
    value: "176 CHURCH STREET",
    data: 1001460027
  },
  {
    value: "176 DELANCEY STREET",
    data: 1003480071
  },
  {
    value: "176 DUANE STREET",
    data: 1001417505
  },
  {
    value: "176 EAST 108 STREET",
    data: 1016350042
  },
  {
    value: "176 EAST 109 STREET",
    data: 1016360043
  },
  {
    value: "176 EAST 111 STREET",
    data: 1016380142
  },
  {
    value: "176 EAST 115 STREET",
    data: 1016400139
  },
  {
    value: "176 EAST 116 STREET",
    data: 1016430041
  },
  {
    value: "176 EAST 122 STREET",
    data: 1017700042
  },
  {
    value: "176 EAST 124 STREET",
    data: 1017720141
  },
  {
    value: "176 EAST 2 STREET",
    data: 1003980051
  },
  {
    value: "176 EAST 3 STREET",
    data: 1003980018
  },
  {
    value: "176 EAST 3 STREET",
    data: 1003980018
  },
  {
    value: "176 EAST 64 STREET",
    data: 1013980045
  },
  {
    value: "176 EAST 70 STREET",
    data: 1014040042
  },
  {
    value: "176 EAST 72 STREET",
    data: 1014060145
  },
  {
    value: "176 EAST 75 STREET",
    data: 1014090048
  },
  {
    value: "176 EAST 85 STREET",
    data: 1015130041
  },
  {
    value: "176 EAST 85 STREET",
    data: 1015130041
  },
  {
    value: "176 EAST 93 STREET",
    data: 1015210043
  },
  {
    value: "176 EAST 95 STREET",
    data: 1015230042
  },
  {
    value: "176 ELDRIDGE STREET",
    data: 1004150012
  },
  {
    value: "176 ELDRIDGE STREET",
    data: 1004150012
  },
  {
    value: "176 FRANKLIN STREET",
    data: 1001877504
  },
  {
    value: "176 GRAND STREET",
    data: 1004710025
  },
  {
    value: "176 HESTER STREET",
    data: 1002050017
  },
  {
    value: "176 HESTER STREET",
    data: 1002050017
  },
  {
    value: "176 LAFAYETTE STREET",
    data: 1004730045
  },
  {
    value: "176 LAFAYETTE STREET",
    data: 1004730045
  },
  {
    value: "176 LEXINGTON AVENUE",
    data: 1008860070
  },
  {
    value: "176 LUDLOW STREET",
    data: 1004120046
  },
  {
    value: "176 LUDLOW STREET",
    data: 1004120046
  },
  {
    value: "176 MULBERRY STREET",
    data: 1004717502
  },
  {
    value: "176 NAGLE AVENUE",
    data: 1022170047
  },
  {
    value: "176 NAGLE AVENUE",
    data: 1022170047
  },
  {
    value: "176 PERRY STREET",
    data: 1006377504
  },
  {
    value: "176 RIVINGTON STREET",
    data: 1003440168
  },
  {
    value: "176 RIVINGTON STREET",
    data: 1003440168
  },
  {
    value: "176 STANTON STREET",
    data: 1003500080
  },
  {
    value: "176 STANTON STREET",
    data: 1003500080
  },
  {
    value: "176 SUFFOLK STREET",
    data: 1003500006
  },
  {
    value: "176 SUFFOLK STREET",
    data: 1003500006
  },
  {
    value: "176 SULLIVAN STREET",
    data: 1005260071
  },
  {
    value: "176 THOMPSON STREET",
    data: 1005250038
  },
  {
    value: "176 WAVERLY PLACE",
    data: 1006100025
  },
  {
    value: "176 WEST 105 STREET",
    data: 1018590063
  },
  {
    value: "176 WEST 137 STREET",
    data: 1019210057
  },
  {
    value: "176 WEST 137 STREET",
    data: 1019210057
  },
  {
    value: "176 WEST 225 STREET",
    data: 1022150062
  },
  {
    value: "176 WEST 72 STREET",
    data: 1011430064
  },
  {
    value: "176 WEST 81 STREET",
    data: 1012110061
  },
  {
    value: "176 WEST 81 STREET",
    data: 1012110061
  },
  {
    value: "176 WEST 86 STREET",
    data: 1012167501
  },
  {
    value: "176 WEST 86 STREET",
    data: 1012167501
  },
  {
    value: "176 WEST BROADWAY",
    data: 1001790032
  },
  {
    value: "176 WEST BROADWAY",
    data: 1001790032
  },
  {
    value: "176 WEST HOUSTON STREET",
    data: 1005270050
  },
  {
    value: "176 WEST HOUSTON STREET",
    data: 1005270050
  },
  {
    value: "1760 1 AVENUE",
    data: 1015710003
  },
  {
    value: "1760 1 AVENUE",
    data: 1015710003
  },
  {
    value: "1760 2 AVENUE",
    data: 1015547501
  },
  {
    value: "1760 2 AVENUE",
    data: 1015547501
  },
  {
    value: "1760 AMSTERDAM AVENUE",
    data: 1020790029
  },
  {
    value: "1760 AMSTERDAM AVENUE",
    data: 1020790029
  },
  {
    value: "1760 MADISON AVENUE",
    data: 1016210014
  },
  {
    value: "1760 MADISON AVENUE",
    data: 1016210014
  },
  {
    value: "1761 1 AVENUE",
    data: 1015540023
  },
  {
    value: "1761 1 AVENUE",
    data: 1015540023
  },
  {
    value: "1761 3 AVENUE",
    data: 1016470001
  },
  {
    value: "1761 3 AVENUE",
    data: 1016470001
  },
  {
    value: "1761 AMSTERDAM AVENUE",
    data: 1020620001
  },
  {
    value: "1761 AMSTERDAM AVENUE",
    data: 1020620001
  },
  {
    value: "1761 MADISON AVENUE",
    data: 1016210052
  },
  {
    value: "1761 PARK AVENUE",
    data: 1017710001
  },
  {
    value: "1762 1 AVENUE",
    data: 1015710004
  },
  {
    value: "1762 1 AVENUE",
    data: 1015710004
  },
  {
    value: "1762 2 AVENUE",
    data: 1015540049
  },
  {
    value: "1762 2 AVENUE",
    data: 1015540049
  },
  {
    value: "1763 AMSTERDAM AVENUE",
    data: 1020620002
  },
  {
    value: "1764 1 AVENUE",
    data: 1015710050
  },
  {
    value: "1764 1 AVENUE",
    data: 1015710050
  },
  {
    value: "1764 AMSTERDAM AVENUE",
    data: 1020790030
  },
  {
    value: "1765 BROADWAY",
    data: 1010280056
  },
  {
    value: "1765 MADISON AVENUE",
    data: 1016210050
  },
  {
    value: "1766 2 AVENUE",
    data: 1015550001
  },
  {
    value: "1766 AMSTERDAM AVENUE",
    data: 1020790031
  },
  {
    value: "1767 2 AVENUE",
    data: 1015380021
  },
  {
    value: "1767 2 AVENUE",
    data: 1015380021
  },
  {
    value: "1767 PARK AVENUE",
    data: 1017710003
  },
  {
    value: "1768 2 AVENUE",
    data: 1015550002
  },
  {
    value: "1768 3 AVENUE",
    data: 1016250033
  },
  {
    value: "1768 AMSTERDAM AVENUE",
    data: 1020790032
  },
  {
    value: "177 1 AVENUE",
    data: 1004520030
  },
  {
    value: "177 8 AVENUE",
    data: 1007430038
  },
  {
    value: "177 8 AVENUE",
    data: 1007430038
  },
  {
    value: "177 9 AVENUE",
    data: 1007187501
  },
  {
    value: "177 9 AVENUE",
    data: 1007187501
  },
  {
    value: "177 AVENUE B",
    data: 1003940002
  },
  {
    value: "177 BLEECKER STREET",
    data: 1005400039
  },
  {
    value: "177 BLEECKER STREET",
    data: 1005400039
  },
  {
    value: "177 BROADWAY",
    data: 1000630019
  },
  {
    value: "177 CANAL STREET",
    data: 1002040032
  },
  {
    value: "177 CHRISTOPHER STREET",
    data: 1006360008
  },
  {
    value: "177 DUANE STREET",
    data: 1001437502
  },
  {
    value: "177 DUANE STREET",
    data: 1001437502
  },
  {
    value: "177 DYCKMAN STREET",
    data: 1022240001
  },
  {
    value: "177 EAST 101 STREET",
    data: 1016290030
  },
  {
    value: "177 EAST 101 STREET",
    data: 1016290030
  },
  {
    value: "177 EAST 102 STREET",
    data: 1016300032
  },
  {
    value: "177 EAST 104 STREET",
    data: 1016320030
  },
  {
    value: "177 EAST 107 STREET",
    data: 1016350031
  },
  {
    value: "177 EAST 117 STREET",
    data: 1016450129
  },
  {
    value: "177 EAST 123 STREET",
    data: 1017720031
  },
  {
    value: "177 EAST 3 STREET",
    data: 1003990049
  },
  {
    value: "177 EAST 64 STREET",
    data: 1013990030
  },
  {
    value: "177 EAST 70 STREET",
    data: 1014050032
  },
  {
    value: "177 EAST 71 STREET",
    data: 1014060030
  },
  {
    value: "177 EAST 73 STREET",
    data: 1014080031
  },
  {
    value: "177 EAST 74 STREET",
    data: 1014090033
  },
  {
    value: "177 EAST 74 STREET",
    data: 1014090033
  },
  {
    value: "177 EAST 77 STREET",
    data: 1014127503
  },
  {
    value: "177 EAST 77 STREET",
    data: 1014127503
  },
  {
    value: "177 EAST 78 STREET",
    data: 1014130031
  },
  {
    value: "177 EAST 79 STREET",
    data: 1015080130
  },
  {
    value: "177 EAST 79 STREET",
    data: 1015080130
  },
  {
    value: "177 EAST 80 STREET",
    data: 1015090030
  },
  {
    value: "177 EAST 93 STREET",
    data: 1015220027
  },
  {
    value: "177 EAST 93 STREET",
    data: 1015220027
  },
  {
    value: "177 EAST 94 STREET",
    data: 1015230131
  },
  {
    value: "177 EAST BROADWAY",
    data: 1002840022
  },
  {
    value: "177 EAST HOUSTON STREET",
    data: 1004170053
  },
  {
    value: "177 FRANKLIN STREET",
    data: 1001810018
  },
  {
    value: "177 HUDSON STREET",
    data: 1002190021
  },
  {
    value: "177 LUDLOW STREET",
    data: 1004120027
  },
  {
    value: "177 LUDLOW STREET",
    data: 1004120027
  },
  {
    value: "177 MAC DOUGAL STREET",
    data: 1005530026
  },
  {
    value: "177 MADISON AVENUE",
    data: 1008630063
  },
  {
    value: "177 ORCHARD STREET",
    data: 1004170066
  },
  {
    value: "177 ORCHARD STREET",
    data: 1004170066
  },
  {
    value: "177 PRINCE STREET",
    data: 1005177502
  },
  {
    value: "177 RIVINGTON STREET",
    data: 1003480055
  },
  {
    value: "177 SPRING STREET",
    data: 1005020044
  },
  {
    value: "177 STANTON STREET",
    data: 1003440151
  },
  {
    value: "177 THOMPSON STREET",
    data: 1005257503
  },
  {
    value: "177 WADSWORTH AVENUE",
    data: 1021650004
  },
  {
    value: "177 WADSWORTH AVENUE",
    data: 1021650004
  },
  {
    value: "177 WAVERLY PLACE",
    data: 1006100041
  },
  {
    value: "177 WAVERLY PLACE",
    data: 1006100041
  },
  {
    value: "177 WEST 126 STREET",
    data: 1019110102
  },
  {
    value: "177 WEST 4 STREET",
    data: 1005920035
  },
  {
    value: "177 WEST 83 STREET",
    data: 1012140001
  },
  {
    value: "177 WEST 83 STREET",
    data: 1012140001
  },
  {
    value: "177 WEST 88 STREET",
    data: 1012190007
  },
  {
    value: "177 WEST BROADWAY",
    data: 1001760016
  },
  {
    value: "1770 2 AVENUE",
    data: 1015550003
  },
  {
    value: "1770 AMSTERDAM AVENUE",
    data: 1020790033
  },
  {
    value: "1771 1 AVENUE",
    data: 1015540028
  },
  {
    value: "1771 1 AVENUE",
    data: 1015540028
  },
  {
    value: "1772 2 AVENUE",
    data: 1015550004
  },
  {
    value: "1772 2 AVENUE",
    data: 1015550004
  },
  {
    value: "1772 AMSTERDAM AVENUE",
    data: 1020790034
  },
  {
    value: "1772 MADISON AVENUE",
    data: 1016220017
  },
  {
    value: "1772 MADISON AVENUE",
    data: 1016220017
  },
  {
    value: "1773 AMSTERDAM AVENUE",
    data: 1020620062
  },
  {
    value: "1773 AMSTERDAM AVENUE",
    data: 1020620062
  },
  {
    value: "1774 AMSTERDAM AVENUE",
    data: 1020790036
  },
  {
    value: "1774 AMSTERDAM AVENUE",
    data: 1020790036
  },
  {
    value: "1775 LEXINGTON AVENUE",
    data: 1016380023
  },
  {
    value: "1775 MADISON AVENUE",
    data: 1016220053
  },
  {
    value: "1775 MADISON AVENUE",
    data: 1016220053
  },
  {
    value: "1775 YORK AVENUE",
    data: 1015730022
  },
  {
    value: "1775 YORK AVENUE",
    data: 1015730022
  },
  {
    value: "1776 2 AVENUE",
    data: 1015557501
  },
  {
    value: "1776 BROADWAY",
    data: 1010290012
  },
  {
    value: "1777 1 AVENUE",
    data: 1015540029
  },
  {
    value: "1777 LEXINGTON AVENUE",
    data: 1016380122
  },
  {
    value: "1777 MADISON AVENUE",
    data: 1016220052
  },
  {
    value: "1777 MADISON AVENUE",
    data: 1016220052
  },
  {
    value: "1779 LEXINGTON AVENUE",
    data: 1016380022
  },
  {
    value: "1779 MADISON AVENUE",
    data: 1016220051
  },
  {
    value: "1779 MADISON AVENUE",
    data: 1016220051
  },
  {
    value: "178 1 AVENUE",
    data: 1004380008
  },
  {
    value: "178 2 AVENUE",
    data: 1004530003
  },
  {
    value: "178 5 AVENUE",
    data: 1008240039
  },
  {
    value: "178 5 AVENUE",
    data: 1008240039
  },
  {
    value: "178 7 AVENUE",
    data: 1007700040
  },
  {
    value: "178 7 AVENUE",
    data: 1007700040
  },
  {
    value: "178 8 AVENUE",
    data: 1007690001
  },
  {
    value: "178 8 AVENUE",
    data: 1007690001
  },
  {
    value: "178 BENNETT AVENUE",
    data: 1021800466
  },
  {
    value: "178 BLEECKER STREET",
    data: 1005260060
  },
  {
    value: "178 BOWERY",
    data: 1004780027
  },
  {
    value: "178 CANAL STREET",
    data: 1002010013
  },
  {
    value: "178 CHRISTOPHER STREET",
    data: 1006040006
  },
  {
    value: "178 DELANCEY STREET",
    data: 1003480070
  },
  {
    value: "178 DUANE STREET",
    data: 1001410025
  },
  {
    value: "178 EAST 101 STREET",
    data: 1016280049
  },
  {
    value: "178 EAST 101 STREET",
    data: 1016280049
  },
  {
    value: "178 EAST 104 STREET",
    data: 1016310043
  },
  {
    value: "178 EAST 108 STREET",
    data: 1016350041
  },
  {
    value: "178 EAST 109 STREET",
    data: 1016360142
  },
  {
    value: "178 EAST 111 STREET",
    data: 1016380042
  },
  {
    value: "178 EAST 117 STREET",
    data: 1016447501
  },
  {
    value: "178 EAST 117 STREET",
    data: 1016447501
  },
  {
    value: "178 EAST 124 STREET",
    data: 1017720041
  },
  {
    value: "178 EAST 64 STREET",
    data: 1013980044
  },
  {
    value: "178 EAST 7 STREET",
    data: 1004020032
  },
  {
    value: "178 EAST 7 STREET",
    data: 1004020032
  },
  {
    value: "178 EAST 70 STREET",
    data: 1014040041
  },
  {
    value: "178 EAST 70 STREET",
    data: 1014040041
  },
  {
    value: "178 EAST 72 STREET",
    data: 1014060044
  },
  {
    value: "178 EAST 73 STREET",
    data: 1014070043
  },
  {
    value: "178 EAST 75 STREET",
    data: 1014090047
  },
  {
    value: "178 EAST 88 STREET",
    data: 1015160041
  },
  {
    value: "178 EAST 94 STREET",
    data: 1015220141
  },
  {
    value: "178 EAST 95 STREET",
    data: 1015230141
  },
  {
    value: "178 FRANKLIN STREET",
    data: 1001870002
  },
  {
    value: "178 HESTER STREET",
    data: 1002050016
  },
  {
    value: "178 LAFAYETTE STREET",
    data: 1004730044
  },
  {
    value: "178 LAFAYETTE STREET",
    data: 1004730044
  },
  {
    value: "178 LEXINGTON AVENUE",
    data: 1008860071
  },
  {
    value: "178 MADISON AVENUE",
    data: 1008630067
  },
  {
    value: "178 NORFOLK STREET",
    data: 1003550044
  },
  {
    value: "178 NORFOLK STREET",
    data: 1003550044
  },
  {
    value: "178 PRINCE STREET",
    data: 1005030020
  },
  {
    value: "178 RIVINGTON STREET",
    data: 1003440001
  },
  {
    value: "178 SPRING STREET",
    data: 1004880016
  },
  {
    value: "178 STANTON STREET",
    data: 1003500079
  },
  {
    value: "178 SUFFOLK STREET",
    data: 1003500007
  },
  {
    value: "178 SULLIVAN STREET",
    data: 1005267501
  },
  {
    value: "178 THOMPSON STREET",
    data: 1005250039
  },
  {
    value: "178 WAVERLY PLACE",
    data: 1006100024
  },
  {
    value: "178 WEST 81 STREET",
    data: 1012110062
  },
  {
    value: "178 WEST HOUSTON STREET",
    data: 1005270051
  },
  {
    value: "178 WEST HOUSTON STREET",
    data: 1005270051
  },
  {
    value: "1780 1 AVENUE",
    data: 1015730020
  },
  {
    value: "1780 1 AVENUE",
    data: 1015730020
  },
  {
    value: "1780 AMSTERDAM AVENUE",
    data: 1020800028
  },
  {
    value: "1780 AMSTERDAM AVENUE",
    data: 1020800028
  },
  {
    value: "1780 BROADWAY",
    data: 1010290014
  },
  {
    value: "1780 BROADWAY",
    data: 1010290014
  },
  {
    value: "1781 1 AVENUE",
    data: 1015550023
  },
  {
    value: "1781 1 AVENUE",
    data: 1015550023
  },
  {
    value: "1781 AMSTERDAM AVENUE",
    data: 1020630001
  },
  {
    value: "1781 LEXINGTON AVENUE",
    data: 1016380121
  },
  {
    value: "1781 MADISON AVENUE",
    data: 1016220050
  },
  {
    value: "1781 RIVERSIDE DRIVE",
    data: 1022460135
  },
  {
    value: "1781 RIVERSIDE DRIVE",
    data: 1022460135
  },
  {
    value: "1782 LEXINGTON AVENUE",
    data: 1016260040
  },
  {
    value: "1783 AMSTERDAM AVENUE",
    data: 1020630002
  },
  {
    value: "1783 LEXINGTON AVENUE",
    data: 1016380021
  },
  {
    value: "1784 AMSTERDAM AVENUE",
    data: 1020800030
  },
  {
    value: "1784 BROADWAY",
    data: 1010290053
  },
  {
    value: "1784 MADISON AVENUE",
    data: 1016230113
  },
  {
    value: "1785 3 AVENUE",
    data: 1016490001
  },
  {
    value: "1785 3 AVENUE",
    data: 1016490001
  },
  {
    value: "1785 AMSTERDAM AVENUE",
    data: 1020630003
  },
  {
    value: "1786 3 AVENUE",
    data: 1016270033
  },
  {
    value: "1786 AMSTERDAM AVENUE",
    data: 1020800031
  },
  {
    value: "1786 MADISON AVENUE",
    data: 1016230114
  },
  {
    value: "1787 AMSTERDAM AVENUE",
    data: 1020630004
  },
  {
    value: "1787 AMSTERDAM AVENUE",
    data: 1020630004
  },
  {
    value: "1787 MADISON AVENUE",
    data: 1016237501
  },
  {
    value: "1787 MADISON AVENUE",
    data: 1016237501
  },
  {
    value: "1788 3 AVENUE",
    data: 1016270034
  },
  {
    value: "1788 AMSTERDAM AVENUE",
    data: 1020800032
  },
  {
    value: "1788 AMSTERDAM AVENUE",
    data: 1020800032
  },
  {
    value: "1788 MADISON AVENUE",
    data: 1016230115
  },
  {
    value: "179 1 AVENUE",
    data: 1004530034
  },
  {
    value: "179 3 AVENUE",
    data: 1008970075
  },
  {
    value: "179 3 AVENUE",
    data: 1008970075
  },
  {
    value: "179 7 AVENUE",
    data: 1007967501
  },
  {
    value: "179 AVENUE B",
    data: 1003940003
  },
  {
    value: "179 BENNETT AVENUE",
    data: 1021800486
  },
  {
    value: "179 BENNETT AVENUE",
    data: 1021800486
  },
  {
    value: "179 BROADWAY",
    data: 1000630018
  },
  {
    value: "179 CANAL STREET",
    data: 1002040033
  },
  {
    value: "179 CHRISTOPHER STREET",
    data: 1006360037
  },
  {
    value: "179 CLAREMONT AVENUE",
    data: 1019940059
  },
  {
    value: "179 EAST 100 STREET",
    data: 1016280024
  },
  {
    value: "179 EAST 100 STREET",
    data: 1016280024
  },
  {
    value: "179 EAST 107 STREET",
    data: 1016350032
  },
  {
    value: "179 EAST 115 STREET",
    data: 1016430031
  },
  {
    value: "179 EAST 116 STREET",
    data: 1016440032
  },
  {
    value: "179 EAST 117 STREET",
    data: 1016450030
  },
  {
    value: "179 EAST 64 STREET",
    data: 1013990130
  },
  {
    value: "179 EAST 71 STREET",
    data: 1014060031
  },
  {
    value: "179 EAST 78 STREET",
    data: 1014137502
  },
  {
    value: "179 EAST 78 STREET",
    data: 1014137502
  },
  {
    value: "179 EAST 79 STREET",
    data: 1015080031
  },
  {
    value: "179 EAST 79 STREET",
    data: 1015080031
  },
  {
    value: "179 EAST 80 STREET",
    data: 1015090031
  },
  {
    value: "179 EAST 93 STREET",
    data: 1015220029
  },
  {
    value: "179 EAST 93 STREET",
    data: 1015220029
  },
  {
    value: "179 EAST 94 STREET",
    data: 1015230032
  },
  {
    value: "179 EAST 94 STREET",
    data: 1015230032
  },
  {
    value: "179 EAST BROADWAY",
    data: 1002840021
  },
  {
    value: "179 EAST HOUSTON STREET",
    data: 1004170054
  },
  {
    value: "179 EAST HOUSTON STREET",
    data: 1004170054
  },
  {
    value: "179 ESSEX STREET",
    data: 1004120062
  },
  {
    value: "179 GRAND STREET",
    data: 1002367501
  },
  {
    value: "179 HENRY STREET",
    data: 1002857501
  },
  {
    value: "179 HENRY STREET",
    data: 1002857501
  },
  {
    value: "179 LAFAYETTE STREET",
    data: 1004720004
  },
  {
    value: "179 LUDLOW STREET",
    data: 1004127502
  },
  {
    value: "179 MADISON AVENUE",
    data: 1008630062
  },
  {
    value: "179 MOTT STREET",
    data: 1004800036
  },
  {
    value: "179 ORCHARD STREET",
    data: 1004170065
  },
  {
    value: "179 ORCHARD STREET",
    data: 1004170065
  },
  {
    value: "179 PRINCE STREET",
    data: 1005170041
  },
  {
    value: "179 PRINCE STREET",
    data: 1005170041
  },
  {
    value: "179 RIVINGTON STREET",
    data: 1003480056
  },
  {
    value: "179 STANTON STREET",
    data: 1003440152
  },
  {
    value: "179 SULLIVAN STREET",
    data: 1005250005
  },
  {
    value: "179 WAVERLY PLACE",
    data: 1006100042
  },
  {
    value: "179 WAVERLY PLACE",
    data: 1006100042
  },
  {
    value: "179 WEST 4 STREET",
    data: 1005920036
  },
  {
    value: "179 WEST BROADWAY",
    data: 1001760017
  },
  {
    value: "1790 3 AVENUE",
    data: 1016270035
  },
  {
    value: "1790 3 AVENUE",
    data: 1016270035
  },
  {
    value: "1790 AMSTERDAM AVENUE",
    data: 1020800033
  },
  {
    value: "1790 AMSTERDAM AVENUE",
    data: 1020800033
  },
  {
    value: "1790 MADISON AVENUE",
    data: 1016230116
  },
  {
    value: "1791 AMSTERDAM AVENUE",
    data: 1020630062
  },
  {
    value: "1791 AMSTERDAM AVENUE",
    data: 1020630062
  },
  {
    value: "1791 LEXINGTON AVENUE",
    data: 1016390124
  },
  {
    value: "1791 LEXINGTON AVENUE",
    data: 1016390124
  },
  {
    value: "1792 3 AVENUE",
    data: 1016270036
  },
  {
    value: "1792 AMSTERDAM AVENUE",
    data: 1020800034
  },
  {
    value: "1792 AMSTERDAM AVENUE",
    data: 1020800034
  },
  {
    value: "1792 MADISON AVENUE",
    data: 1016230117
  },
  {
    value: "1793 AMSTERDAM AVENUE",
    data: 1020630061
  },
  {
    value: "1793 AMSTERDAM AVENUE",
    data: 1020630061
  },
  {
    value: "1793 RIVERSIDE DRIVE",
    data: 1022460130
  },
  {
    value: "1793 RIVERSIDE DRIVE",
    data: 1022460130
  },
  {
    value: "1794 3 AVENUE",
    data: 1016270037
  },
  {
    value: "1794 3 AVENUE",
    data: 1016270037
  },
  {
    value: "1794 AMSTERDAM AVENUE",
    data: 1020800035
  },
  {
    value: "1794 AMSTERDAM AVENUE",
    data: 1020800035
  },
  {
    value: "1794 MADISON AVENUE",
    data: 1016230118
  },
  {
    value: "1795 AMSTERDAM AVENUE",
    data: 1020630060
  },
  {
    value: "1795 AMSTERDAM AVENUE",
    data: 1020630060
  },
  {
    value: "1795 LEXINGTON AVENUE",
    data: 1016390052
  },
  {
    value: "1795 RIVERSIDE DRIVE",
    data: 1022460125
  },
  {
    value: "1795 RIVERSIDE DRIVE",
    data: 1022460125
  },
  {
    value: "1796 3 AVENUE",
    data: 1016270038
  },
  {
    value: "1796 3 AVENUE",
    data: 1016270038
  },
  {
    value: "1796 MADISON AVENUE",
    data: 1016230119
  },
  {
    value: "1797 LEXINGTON AVENUE",
    data: 1016390051
  },
  {
    value: "1798 3 AVENUE",
    data: 1016270039
  },
  {
    value: "1798 3 AVENUE",
    data: 1016270039
  },
  {
    value: "1798 MADISON AVENUE",
    data: 1016230120
  },
  {
    value: "1799 LEXINGTON AVENUE",
    data: 1016390150
  },
  {
    value: "1799 LEXINGTON AVENUE",
    data: 1016390150
  },
  {
    value: "18 1 AVENUE",
    data: 1004290005
  },
  {
    value: "18 1 AVENUE",
    data: 1004290005
  },
  {
    value: "18 1 PLACE",
    data: 1000160010
  },
  {
    value: "18 AVENUE C",
    data: 1003720003
  },
  {
    value: "18 BANK STREET",
    data: 1006140023
  },
  {
    value: "18 BARROW STREET",
    data: 1005910034
  },
  {
    value: "18 BEAVER STREET",
    data: 1000110009
  },
  {
    value: "18 BEDFORD STREET",
    data: 1005270009
  },
  {
    value: "18 BLEECKER STREET",
    data: 1005210043
  },
  {
    value: "18 BOWERY",
    data: 1001620053
  },
  {
    value: "18 CHARLES STREET",
    data: 1006110049
  },
  {
    value: "18 CHARLES STREET",
    data: 1006110049
  },
  {
    value: "18 CHRISTOPHER STREET",
    data: 1005930043
  },
  {
    value: "18 COMMERCE STREET",
    data: 1005870014
  },
  {
    value: "18 DELANCEY STREET",
    data: 1004250038
  },
  {
    value: "18 EAST 10 STREET",
    data: 1005670015
  },
  {
    value: "18 EAST 105 STREET",
    data: 1016100062
  },
  {
    value: "18 EAST 105 STREET",
    data: 1016100062
  },
  {
    value: "18 EAST 109 STREET",
    data: 1016140062
  },
  {
    value: "18 EAST 110 STREET",
    data: 1016150060
  },
  {
    value: "18 EAST 110 STREET",
    data: 1016150060
  },
  {
    value: "18 EAST 116 STREET",
    data: 1016210062
  },
  {
    value: "18 EAST 116 STREET",
    data: 1016210062
  },
  {
    value: "18 EAST 118 STREET",
    data: 1016230124
  },
  {
    value: "18 EAST 125 STREET",
    data: 1017490062
  },
  {
    value: "18 EAST 126 STREET",
    data: 1017500065
  },
  {
    value: "18 EAST 127 STREET",
    data: 1017510164
  },
  {
    value: "18 EAST 129 STREET",
    data: 1017530063
  },
  {
    value: "18 EAST 13 STREET",
    data: 1005700014
  },
  {
    value: "18 EAST 130 STREET",
    data: 1017540162
  },
  {
    value: "18 EAST 132 STREET",
    data: 1017560060
  },
  {
    value: "18 EAST 132 STREET",
    data: 1017560060
  },
  {
    value: "18 EAST 14 STREET",
    data: 1005710012
  },
  {
    value: "18 EAST 14 STREET",
    data: 1005710012
  },
  {
    value: "18 EAST 16 STREET",
    data: 1008430037
  },
  {
    value: "18 EAST 17 STREET",
    data: 1008440032
  },
  {
    value: "18 EAST 18 STREET",
    data: 1008460064
  },
  {
    value: "18 EAST 18 STREET",
    data: 1008460064
  },
  {
    value: "18 EAST 2 STREET",
    data: 1004580040
  },
  {
    value: "18 EAST 22 STREET",
    data: 1008500063
  },
  {
    value: "18 EAST 23 STREET",
    data: 1008510060
  },
  {
    value: "18 EAST 23 STREET",
    data: 1008510060
  },
  {
    value: "18 EAST 31 STREET",
    data: 1008600071
  },
  {
    value: "18 EAST 33 STREET",
    data: 1008620063
  },
  {
    value: "18 EAST 33 STREET",
    data: 1008620063
  },
  {
    value: "18 EAST 41 STREET",
    data: 1012750061
  },
  {
    value: "18 EAST 42 STREET",
    data: 1012760066
  },
  {
    value: "18 EAST 46 STREET",
    data: 1012810059
  },
  {
    value: "18 EAST 48 STREET",
    data: 1012830058
  },
  {
    value: "18 EAST 50 STREET",
    data: 1012850059
  },
  {
    value: "18 EAST 62 STREET",
    data: 1013760060
  },
  {
    value: "18 EAST 63 STREET",
    data: 1013770160
  },
  {
    value: "18 EAST 64 STREET",
    data: 1013780062
  },
  {
    value: "18 EAST 65 STREET",
    data: 1013790061
  },
  {
    value: "18 EAST 67 STREET",
    data: 1013810060
  },
  {
    value: "18 EAST 68 STREET",
    data: 1013820060
  },
  {
    value: "18 EAST 68 STREET",
    data: 1013820060
  },
  {
    value: "18 EAST 69 STREET",
    data: 1013830059
  },
  {
    value: "18 EAST 71 STREET",
    data: 1013850059
  },
  {
    value: "18 EAST 72 STREET",
    data: 1013860060
  },
  {
    value: "18 EAST 73 STREET",
    data: 1013870062
  },
  {
    value: "18 EAST 74 STREET",
    data: 1013880061
  },
  {
    value: "18 EAST 76 STREET",
    data: 1013900061
  },
  {
    value: "18 EAST 77 STREET",
    data: 1013910062
  },
  {
    value: "18 EAST 78 STREET",
    data: 1013920062
  },
  {
    value: "18 EAST 79 STREET",
    data: 1013930059
  },
  {
    value: "18 EAST 8 STREET",
    data: 1005500030
  },
  {
    value: "18 EAST 80 STREET",
    data: 1014910061
  },
  {
    value: "18 EAST 81 STREET",
    data: 1014920061
  },
  {
    value: "18 EAST 82 STREET",
    data: 1014930061
  },
  {
    value: "18 EAST 85 STREET",
    data: 1014960060
  },
  {
    value: "18 EAST 93 STREET",
    data: 1015040060
  },
  {
    value: "18 EAST 94 STREET",
    data: 1015050062
  },
  {
    value: "18 EAST 95 STREET",
    data: 1015060161
  },
  {
    value: "18 ELDRIDGE STREET",
    data: 1002937501
  },
  {
    value: "18 ELDRIDGE STREET",
    data: 1002937501
  },
  {
    value: "18 GRAMERCY PARK SOUTH",
    data: 1008757503
  },
  {
    value: "18 GRAMERCY PARK SOUTH",
    data: 1008757503
  },
  {
    value: "18 GREENWICH AVENUE",
    data: 1006060004
  },
  {
    value: "18 GROVE STREET",
    data: 1005850023
  },
  {
    value: "18 HAMILTON TERRACE",
    data: 1020500080
  },
  {
    value: "18 HARRISON STREET",
    data: 1001810005
  },
  {
    value: "18 JACOBUS PLACE",
    data: 1022150481
  },
  {
    value: "18 JACOBUS PLACE",
    data: 1022150481
  },
  {
    value: "18 JONES STREET",
    data: 1005900019
  },
  {
    value: "18 JUMEL TERRACE",
    data: 1021090099
  },
  {
    value: "18 KING STREET",
    data: 1005190030
  },
  {
    value: "18 KING STREET",
    data: 1005190030
  },
  {
    value: "18 LEONARD STREET",
    data: 1001797506
  },
  {
    value: "18 LEROY STREET",
    data: 1005860014
  },
  {
    value: "18 MERCER STREET",
    data: 1002310019
  },
  {
    value: "18 MINETTA LANE",
    data: 1005430028
  },
  {
    value: "18 MORNINGSIDE AVENUE",
    data: 1018497502
  },
  {
    value: "18 MOTT STREET",
    data: 1001620010
  },
  {
    value: "18 MT MORRIS PARK WEST",
    data: 1017190001
  },
  {
    value: "18 MURRAY STREET",
    data: 1001247501
  },
  {
    value: "18 NORTH MOORE STREET",
    data: 1001890033
  },
  {
    value: "18 ORCHARD STREET",
    data: 1002987502
  },
  {
    value: "18 PELL STREET",
    data: 1001630005
  },
  {
    value: "18 PINE STREET",
    data: 1000447501
  },
  {
    value: "18 PINE STREET",
    data: 1000447501
  },
  {
    value: "18 SPRING STREET",
    data: 1004790019
  },
  {
    value: "18 ST MARKS PLACE",
    data: 1004630018
  },
  {
    value: "18 ST MARKS PLACE",
    data: 1004630018
  },
  {
    value: "18 ST NICHOLAS PLACE",
    data: 1020540036
  },
  {
    value: "18 ST NICHOLAS PLACE",
    data: 1020540036
  },
  {
    value: "18 SYLVAN TERRACE",
    data: 1021090066
  },
  {
    value: "18 THOMAS STREET",
    data: 1001510022
  },
  {
    value: "18 VAN CORLEAR PLACE",
    data: 1022150361
  },
  {
    value: "18 VESEY STREET",
    data: 1000880004
  },
  {
    value: "18 WARREN STREET",
    data: 1001357502
  },
  {
    value: "18 WASHINGTON PLACE",
    data: 1005460010
  },
  {
    value: "18 WAVERLY PLACE",
    data: 1005470014
  },
  {
    value: "18 WEST 10 STREET",
    data: 1005730033
  },
  {
    value: "18 WEST 104 STREET",
    data: 1018390044
  },
  {
    value: "18 WEST 108 STREET",
    data: 1018430044
  },
  {
    value: "18 WEST 108 STREET",
    data: 1018430044
  },
  {
    value: "18 WEST 11 STREET",
    data: 1005740035
  },
  {
    value: "18 WEST 116 STREET",
    data: 1015990044
  },
  {
    value: "18 WEST 12 STREET",
    data: 1005750043
  },
  {
    value: "18 WEST 120 STREET",
    data: 1017180044
  },
  {
    value: "18 WEST 121 STREET",
    data: 1017200127
  },
  {
    value: "18 WEST 122 STREET",
    data: 1017200066
  },
  {
    value: "18 WEST 123 STREET",
    data: 1017210126
  },
  {
    value: "18 WEST 125 STREET",
    data: 1017220145
  },
  {
    value: "18 WEST 127 STREET",
    data: 1017240046
  },
  {
    value: "18 WEST 128 STREET",
    data: 1017250044
  },
  {
    value: "18 WEST 129 STREET",
    data: 1017267501
  },
  {
    value: "18 WEST 129 STREET",
    data: 1017267501
  },
  {
    value: "18 WEST 130 STREET",
    data: 1017270046
  },
  {
    value: "18 WEST 131 STREET",
    data: 1017280047
  },
  {
    value: "18 WEST 14 STREET",
    data: 1005770030
  },
  {
    value: "18 WEST 14 STREET",
    data: 1005770030
  },
  {
    value: "18 WEST 16 STREET",
    data: 1008170069
  },
  {
    value: "18 WEST 17 STREET",
    data: 1008180061
  },
  {
    value: "18 WEST 18 STREET",
    data: 1008190056
  },
  {
    value: "18 WEST 20 STREET",
    data: 1008210055
  },
  {
    value: "18 WEST 21 STREET",
    data: 1008220052
  },
  {
    value: "18 WEST 23 STREET",
    data: 1008240049
  },
  {
    value: "18 WEST 25 STREET",
    data: 1008260055
  },
  {
    value: "18 WEST 27 STREET",
    data: 1008280059
  },
  {
    value: "18 WEST 30 STREET",
    data: 1008310050
  },
  {
    value: "18 WEST 33 STREET",
    data: 1008340057
  },
  {
    value: "18 WEST 37 STREET",
    data: 1008380061
  },
  {
    value: "18 WEST 38 STREET",
    data: 1008390058
  },
  {
    value: "18 WEST 55 STREET",
    data: 1012700048
  },
  {
    value: "18 WEST 56 STREET",
    data: 1012710050
  },
  {
    value: "18 WEST 68 STREET",
    data: 1011200140
  },
  {
    value: "18 WEST 69 STREET",
    data: 1011210041
  },
  {
    value: "18 WEST 69 STREET",
    data: 1011210041
  },
  {
    value: "18 WEST 70 STREET",
    data: 1011220040
  },
  {
    value: "18 WEST 70 STREET",
    data: 1011220040
  },
  {
    value: "18 WEST 74 STREET",
    data: 1011260043
  },
  {
    value: "18 WEST 75 STREET",
    data: 1011270044
  },
  {
    value: "18 WEST 76 STREET",
    data: 1011280044
  },
  {
    value: "18 WEST 76 STREET",
    data: 1011280044
  },
  {
    value: "18 WEST 83 STREET",
    data: 1011960042
  },
  {
    value: "18 WEST 85 STREET",
    data: 1011980039
  },
  {
    value: "18 WEST 86 STREET",
    data: 1011990044
  },
  {
    value: "18 WEST 87 STREET",
    data: 1012000142
  },
  {
    value: "18 WEST 88 STREET",
    data: 1012010140
  },
  {
    value: "18 WEST 89 STREET",
    data: 1012020040
  },
  {
    value: "18 WEST 9 STREET",
    data: 1005720031
  },
  {
    value: "18 WEST 90 STREET",
    data: 1012030043
  },
  {
    value: "18 WEST 95 STREET",
    data: 1012080042
  },
  {
    value: "18 WEST HOUSTON STREET",
    data: 1005230048
  },
  {
    value: "18 WOOSTER STREET",
    data: 1002290015
  },
  {
    value: "180 1 AVENUE",
    data: 1004380009
  },
  {
    value: "180 1 AVENUE",
    data: 1004380009
  },
  {
    value: "180 10 AVENUE",
    data: 1007187502
  },
  {
    value: "180 2 AVENUE",
    data: 1004530004
  },
  {
    value: "180 7 AVENUE",
    data: 1007700041
  },
  {
    value: "180 7 AVENUE",
    data: 1007700041
  },
  {
    value: "180 9 AVENUE",
    data: 1007450001
  },
  {
    value: "180 AMSTERDAM AVENUE",
    data: 1011580018
  },
  {
    value: "180 AVENUE OF THE AMER",
    data: 1005047501
  },
  {
    value: "180 BLEECKER STREET",
    data: 1005260059
  },
  {
    value: "180 BOWERY",
    data: 1004780025
  },
  {
    value: "180 BROADWAY",
    data: 1000657502
  },
  {
    value: "180 CHRISTOPHER STREET",
    data: 1006040003
  },
  {
    value: "180 CLAREMONT AVENUE",
    data: 1019930112
  },
  {
    value: "180 CLAREMONT AVENUE",
    data: 1019930112
  },
  {
    value: "180 COLUMBUS AVENUE",
    data: 1011400029
  },
  {
    value: "180 COLUMBUS AVENUE",
    data: 1011400029
  },
  {
    value: "180 DUANE STREET",
    data: 1001410024
  },
  {
    value: "180 DYCKMAN STREET",
    data: 1021750063
  },
  {
    value: "180 EAST 101 STREET",
    data: 1016280048
  },
  {
    value: "180 EAST 101 STREET",
    data: 1016280048
  },
  {
    value: "180 EAST 104 STREET",
    data: 1016310041
  },
  {
    value: "180 EAST 104 STREET",
    data: 1016310041
  },
  {
    value: "180 EAST 108 STREET",
    data: 1016350141
  },
  {
    value: "180 EAST 109 STREET",
    data: 1016360042
  },
  {
    value: "180 EAST 111 STREET",
    data: 1016380141
  },
  {
    value: "180 EAST 117 STREET",
    data: 1016440042
  },
  {
    value: "180 EAST 123 STREET",
    data: 1017710042
  },
  {
    value: "180 EAST 64 STREET",
    data: 1013980043
  },
  {
    value: "180 EAST 72 STREET",
    data: 1014060043
  },
  {
    value: "180 EAST 73 STREET",
    data: 1014070042
  },
  {
    value: "180 EAST 75 STREET",
    data: 1014090146
  },
  {
    value: "180 EAST 79 STREET",
    data: 1014130040
  },
  {
    value: "180 EAST 79 STREET",
    data: 1014130040
  },
  {
    value: "180 EAST 93 STREET",
    data: 1015217502
  },
  {
    value: "180 EAST 94 STREET",
    data: 1015220140
  },
  {
    value: "180 EAST 95 STREET",
    data: 1015230041
  },
  {
    value: "180 EAST END AVENUE",
    data: 1015850023
  },
  {
    value: "180 EAST END AVENUE",
    data: 1015850023
  },
  {
    value: "180 EDGECOMBE AVENUE",
    data: 1020510098
  },
  {
    value: "180 EDGECOMBE AVENUE",
    data: 1020510098
  },
  {
    value: "180 FT WASHINGTON AVENUE",
    data: 1021380040
  },
  {
    value: "180 HESTER STREET",
    data: 1002057502
  },
  {
    value: "180 LAFAYETTE STREET",
    data: 1004730043
  },
  {
    value: "180 LENOX AVENUE",
    data: 1017180001
  },
  {
    value: "180 LENOX AVENUE",
    data: 1017180001
  },
  {
    value: "180 LEXINGTON AVENUE",
    data: 1008870021
  },
  {
    value: "180 LUDLOW STREET",
    data: 1004120048
  },
  {
    value: "180 MAIDEN LANE",
    data: 1000370023
  },
  {
    value: "180 MOTT STREET",
    data: 1004790001
  },
  {
    value: "180 MULBERRY STREET",
    data: 1004800002
  },
  {
    value: "180 MULBERRY STREET",
    data: 1004800002
  },
  {
    value: "180 ORCHARD STREET",
    data: 1004127501
  },
  {
    value: "180 PINEHURST AVENUE",
    data: 1021790168
  },
  {
    value: "180 PRINCE STREET",
    data: 1005030019
  },
  {
    value: "180 PRINCE STREET",
    data: 1005030019
  },
  {
    value: "180 RIVERSIDE BOULEVARD",
    data: 1011710129
  },
  {
    value: "180 RIVERSIDE BOULEVARD",
    data: 1011710129
  },
  {
    value: "180 RIVERSIDE DRIVE",
    data: 1012510001
  },
  {
    value: "180 RIVERSIDE DRIVE",
    data: 1012510001
  },
  {
    value: "180 SPRING STREET",
    data: 1004880015
  },
  {
    value: "180 ST NICHOLAS AVENUE",
    data: 1019250013
  },
  {
    value: "180 ST NICHOLAS AVENUE",
    data: 1019250013
  },
  {
    value: "180 STANTON STREET",
    data: 1003500078
  },
  {
    value: "180 SUFFOLK STREET",
    data: 1003500008
  },
  {
    value: "180 SULLIVAN STREET",
    data: 1005260069
  },
  {
    value: "180 THOMPSON STREET",
    data: 1005250040
  },
  {
    value: "180 VARICK STREET",
    data: 1005190070
  },
  {
    value: "180 WADSWORTH AVENUE",
    data: 1021640032
  },
  {
    value: "180 WATER STREET",
    data: 1000700032
  },
  {
    value: "180 WATER STREET",
    data: 1000700032
  },
  {
    value: "180 WAVERLY PLACE",
    data: 1006100023
  },
  {
    value: "180 WEST 135 STREET",
    data: 1019190053
  },
  {
    value: "180 WEST 20 STREET",
    data: 1007950001
  },
  {
    value: "180 WEST 20 STREET",
    data: 1007950001
  },
  {
    value: "180 WEST 76 STREET",
    data: 1011470064
  },
  {
    value: "180 WEST 81 STREET",
    data: 1012110063
  },
  {
    value: "180 WEST 81 STREET",
    data: 1012110063
  },
  {
    value: "180 WEST END AVENUE",
    data: 1011587502
  },
  {
    value: "180 WEST END AVENUE",
    data: 1011587502
  },
  {
    value: "1800 3 AVENUE",
    data: 1016270040
  },
  {
    value: "1800 ADAM C POWELL BLVD",
    data: 1018267501
  },
  {
    value: "1800 ADAM C. POWELL BOULEVARD",
    data: 1018267501
  },
  {
    value: "1800 AMSTERDAM AVENUE",
    data: 1020810029
  },
  {
    value: "1800 AMSTERDAM AVENUE",
    data: 1020810029
  },
  {
    value: "1800 MADISON AVENUE",
    data: 1016230121
  },
  {
    value: "1800 PARK AVENUE",
    data: 1017490033
  },
  {
    value: "1801 2 AVENUE",
    data: 1015397501
  },
  {
    value: "1801 ADAM C POWELL BLVD",
    data: 1018200002
  },
  {
    value: "1801 ADAM C POWELL BOULEVARD",
    data: 1018200002
  },
  {
    value: "1801 AMSTERDAM AVENUE",
    data: 1020640001
  },
  {
    value: "1801 LEXINGTON AVENUE",
    data: 1016390050
  },
  {
    value: "1801 PARK AVENUE",
    data: 1017730001
  },
  {
    value: "1802 2 AVENUE",
    data: 1015560002
  },
  {
    value: "1802 2 AVENUE",
    data: 1015560002
  },
  {
    value: "1802 3 AVENUE",
    data: 1016280033
  },
  {
    value: "1802 AMSTERDAM AVENUE",
    data: 1020810030
  },
  {
    value: "1802 MADISON AVENUE",
    data: 1016230122
  },
  {
    value: "1803 RIVERSIDE DRIVE",
    data: 1022460120
  },
  {
    value: "1803 RIVERSIDE DRIVE",
    data: 1022460120
  },
  {
    value: "1804 2 AVENUE",
    data: 1015560003
  },
  {
    value: "1804 2 AVENUE",
    data: 1015560003
  },
  {
    value: "1804 3 AVENUE",
    data: 1016280034
  },
  {
    value: "1804 AMSTERDAM AVENUE",
    data: 1020810031
  },
  {
    value: "1806 3 AVENUE",
    data: 1016280035
  },
  {
    value: "1806 AMSTERDAM AVENUE",
    data: 1020810032
  },
  {
    value: "1807 PARK AVENUE",
    data: 1017730004
  },
  {
    value: "1808 2 AVENUE",
    data: 1015560052
  },
  {
    value: "1808 2 AVENUE",
    data: 1015560052
  },
  {
    value: "1808 3 AVENUE",
    data: 1016280036
  },
  {
    value: "1808 AMSTERDAM AVENUE",
    data: 1020810033
  },
  {
    value: "1809 ADAM C POWELL BLVD",
    data: 1018200061
  },
  {
    value: "1809 ADAM C POWELL BOULEVARD",
    data: 1018200061
  },
  {
    value: "1809 AMSTERDAM AVENUE",
    data: 1020640062
  },
  {
    value: "1809 AMSTERDAM AVENUE",
    data: 1020640062
  },
  {
    value: "181 11 AVENUE",
    data: 1006690017
  },
  {
    value: "181 2 AVENUE",
    data: 1004670031
  },
  {
    value: "181 7 AVENUE",
    data: 1007967501
  },
  {
    value: "181 AVENUE B",
    data: 1003940004
  },
  {
    value: "181 AVENUE C",
    data: 1003940044
  },
  {
    value: "181 AVENUE C",
    data: 1003940044
  },
  {
    value: "181 AVENUE D",
    data: 1003820022
  },
  {
    value: "181 BLEECKER STREET",
    data: 1005400040
  },
  {
    value: "181 BROADWAY",
    data: 1000630017
  },
  {
    value: "181 CANAL STREET",
    data: 1002040034
  },
  {
    value: "181 CHRISTOPHER STREET",
    data: 1006360038
  },
  {
    value: "181 CHRYSTIE STREET",
    data: 1004260037
  },
  {
    value: "181 CLAREMONT AVENUE",
    data: 1019940060
  },
  {
    value: "181 CLAREMONT AVENUE",
    data: 1019940060
  },
  {
    value: "181 CONVENT AVENUE",
    data: 1019570100
  },
  {
    value: "181 DUANE STREET",
    data: 1001430013
  },
  {
    value: "181 EAST 104 STREET",
    data: 1016320032
  },
  {
    value: "181 EAST 104 STREET",
    data: 1016320032
  },
  {
    value: "181 EAST 107 STREET",
    data: 1016350132
  },
  {
    value: "181 EAST 108 STREET",
    data: 1016360132
  },
  {
    value: "181 EAST 111 STREET",
    data: 1016390133
  },
  {
    value: "181 EAST 117 STREET",
    data: 1016450031
  },
  {
    value: "181 EAST 2 STREET",
    data: 1003970022
  },
  {
    value: "181 EAST 2 STREET",
    data: 1003970022
  },
  {
    value: "181 EAST 3 STREET",
    data: 1003990047
  },
  {
    value: "181 EAST 3 STREET",
    data: 1003990047
  },
  {
    value: "181 EAST 64 STREET",
    data: 1013990031
  },
  {
    value: "181 EAST 65 STREET",
    data: 1014007501
  },
  {
    value: "181 EAST 65 STREET",
    data: 1014007501
  },
  {
    value: "181 EAST 80 STREET",
    data: 1015090131
  },
  {
    value: "181 EAST 90 STREET",
    data: 1015197501
  },
  {
    value: "181 EAST 90 STREET",
    data: 1015197501
  },
  {
    value: "181 EAST 93 STREET",
    data: 1015220030
  },
  {
    value: "181 EAST 93 STREET",
    data: 1015220030
  },
  {
    value: "181 EAST BROADWAY",
    data: 1002840020
  },
  {
    value: "181 EAST BROADWAY",
    data: 1002840020
  },
  {
    value: "181 FRANKLIN STREET",
    data: 1001810016
  },
  {
    value: "181 GRAND STREET",
    data: 1002360016
  },
  {
    value: "181 HESTER STREET",
    data: 1002377502
  },
  {
    value: "181 HUDSON STREET",
    data: 1002227501
  },
  {
    value: "181 LENOX AVENUE",
    data: 1019040029
  },
  {
    value: "181 MERCER STREET",
    data: 1005240070
  },
  {
    value: "181 MOTT STREET",
    data: 1004800035
  },
  {
    value: "181 ORCHARD STREET",
    data: 1004170064
  },
  {
    value: "181 PRINCE STREET",
    data: 1005170042
  },
  {
    value: "181 PRINCE STREET",
    data: 1005170042
  },
  {
    value: "181 SULLIVAN STREET",
    data: 1005257507
  },
  {
    value: "181 VARICK STREET",
    data: 1005800063
  },
  {
    value: "181 VERMILYEA AVENUE",
    data: 1022280018
  },
  {
    value: "181 VERMILYEA AVENUE",
    data: 1022280018
  },
  {
    value: "181 WEST 10 STREET",
    data: 1006110041
  },
  {
    value: "181 WEST 135 STREET",
    data: 1019200007
  },
  {
    value: "181 WEST 135 STREET",
    data: 1019200007
  },
  {
    value: "181 WEST 4 STREET",
    data: 1005920037
  },
  {
    value: "181 WEST 97 STREET",
    data: 1018520001
  },
  {
    value: "181 WEST 97 STREET",
    data: 1018520001
  },
  {
    value: "1810 1 AVENUE",
    data: 1015730001
  },
  {
    value: "1810 1 AVENUE",
    data: 1015730001
  },
  {
    value: "1810 2 AVENUE",
    data: 1015560051
  },
  {
    value: "1810 2 AVENUE",
    data: 1015560051
  },
  {
    value: "1810 3 AVENUE",
    data: 1016280037
  },
  {
    value: "1810 ADAM C POWELL BLVD",
    data: 1018260036
  },
  {
    value: "1810 ADAM C POWELL BOULEVARD",
    data: 1018260036
  },
  {
    value: "1810 AMSTERDAM AVENUE",
    data: 1020810034
  },
  {
    value: "1810 AMSTERDAM AVENUE",
    data: 1020810034
  },
  {
    value: "1811 PARK AVENUE",
    data: 1017730072
  },
  {
    value: "1812 2 AVENUE",
    data: 1015560050
  },
  {
    value: "1812 2 AVENUE",
    data: 1015560050
  },
  {
    value: "1812 AMSTERDAM AVENUE",
    data: 1020810035
  },
  {
    value: "1813 AMSTERDAM AVENUE",
    data: 1020640060
  },
  {
    value: "1813 AMSTERDAM AVENUE",
    data: 1020640060
  },
  {
    value: "1814 2 AVENUE",
    data: 1015560049
  },
  {
    value: "1814 2 AVENUE",
    data: 1015560049
  },
  {
    value: "1814 3 AVENUE",
    data: 1016280039
  },
  {
    value: "1814 AMSTERDAM AVENUE",
    data: 1020810036
  },
  {
    value: "1814 AMSTERDAM AVENUE",
    data: 1020810036
  },
  {
    value: "1814 MADISON AVENUE",
    data: 1017450014
  },
  {
    value: "1815 PARK AVENUE",
    data: 1017730069
  },
  {
    value: "1815 RIVERSIDE DRIVE",
    data: 1022460115
  },
  {
    value: "1817 2 AVENUE",
    data: 1015400022
  },
  {
    value: "1817 2 AVENUE",
    data: 1015400022
  },
  {
    value: "1819 2 AVENUE",
    data: 1015400023
  },
  {
    value: "1819 2 AVENUE",
    data: 1015400023
  },
  {
    value: "182 1 AVENUE",
    data: 1004390001
  },
  {
    value: "182 11 AVENUE",
    data: 1006950001
  },
  {
    value: "182 2 AVENUE",
    data: 1004530005
  },
  {
    value: "182 5 AVENUE",
    data: 1008240041
  },
  {
    value: "182 7 AVENUE SOUTH",
    data: 1006130066
  },
  {
    value: "182 9 AVENUE",
    data: 1007457504
  },
  {
    value: "182 AVENUE A",
    data: 1004050005
  },
  {
    value: "182 AVENUE A",
    data: 1004050005
  },
  {
    value: "182 AVENUE B",
    data: 1004050035
  },
  {
    value: "182 AVENUE B",
    data: 1004050035
  },
  {
    value: "182 BENNETT AVENUE",
    data: 1021800473
  },
  {
    value: "182 BENNETT AVENUE",
    data: 1021800473
  },
  {
    value: "182 BLEECKER STREET",
    data: 1005260058
  },
  {
    value: "182 CLAREMONT AVENUE",
    data: 1019930108
  },
  {
    value: "182 CLAREMONT AVENUE",
    data: 1019930108
  },
  {
    value: "182 COLUMBUS AVENUE",
    data: 1011400030
  },
  {
    value: "182 COLUMBUS AVENUE",
    data: 1011400030
  },
  {
    value: "182 DUANE STREET",
    data: 1001410023
  },
  {
    value: "182 EAST 101 STREET",
    data: 1016280047
  },
  {
    value: "182 EAST 108 STREET",
    data: 1016350140
  },
  {
    value: "182 EAST 109 STREET",
    data: 1016360041
  },
  {
    value: "182 EAST 111 STREET",
    data: 1016380041
  },
  {
    value: "182 EAST 117 STREET",
    data: 1016440041
  },
  {
    value: "182 EAST 122 STREET",
    data: 1017700041
  },
  {
    value: "182 EAST 123 STREET",
    data: 1017710041
  },
  {
    value: "182 EAST 124 STREET",
    data: 1017720140
  },
  {
    value: "182 EAST 2 STREET",
    data: 1003987501
  },
  {
    value: "182 EAST 2 STREET",
    data: 1003987501
  },
  {
    value: "182 EAST 64 STREET",
    data: 1013980042
  },
  {
    value: "182 EAST 73 STREET",
    data: 1014070041
  },
  {
    value: "182 EAST 75 STREET",
    data: 1014090046
  },
  {
    value: "182 EAST 94 STREET",
    data: 1015220040
  },
  {
    value: "182 ELDRIDGE STREET",
    data: 1004150018
  },
  {
    value: "182 FRANKLIN STREET",
    data: 1001870004
  },
  {
    value: "182 GRAND STREET",
    data: 1004710023
  },
  {
    value: "182 HESTER STREET",
    data: 1002060016
  },
  {
    value: "182 HESTER STREET",
    data: 1002060016
  },
  {
    value: "182 LAFAYETTE STREET",
    data: 1004730042
  },
  {
    value: "182 LEXINGTON AVENUE",
    data: 1008870022
  },
  {
    value: "182 MULBERRY STREET",
    data: 1004807501
  },
  {
    value: "182 NORFOLK STREET",
    data: 1003550045
  },
  {
    value: "182 SPRING STREET",
    data: 1004890025
  },
  {
    value: "182 ST NICHOLAS AVENUE",
    data: 1019250015
  },
  {
    value: "182 ST NICHOLAS AVENUE",
    data: 1019250015
  },
  {
    value: "182 STANTON STREET",
    data: 1003500077
  },
  {
    value: "182 SULLIVAN STREET",
    data: 1005260068
  },
  {
    value: "182 WAVERLY PLACE",
    data: 1006100022
  },
  {
    value: "182 WEST 4 STREET",
    data: 1005900073
  },
  {
    value: "182 WEST 4 STREET",
    data: 1005900073
  },
  {
    value: "182 WEST 82 STREET",
    data: 1012127502
  },
  {
    value: "182 WEST HOUSTON STREET",
    data: 1005280001
  },
  {
    value: "182 WEST HOUSTON STREET",
    data: 1005280001
  },
  {
    value: "1820 AMSTERDAM AVENUE",
    data: 1020820028
  },
  {
    value: "1820 MADISON AVENUE",
    data: 1017457503
  },
  {
    value: "1820 MADISON AVENUE",
    data: 1017457503
  },
  {
    value: "1821 2 AVENUE",
    data: 1015400024
  },
  {
    value: "1821 2 AVENUE",
    data: 1015400024
  },
  {
    value: "1821 AMSTERDAM AVENUE",
    data: 1020650001
  },
  {
    value: "1821 AMSTERDAM AVENUE",
    data: 1020650001
  },
  {
    value: "1824 PARK AVENUE",
    data: 1017500040
  },
  {
    value: "1825 2 AVENUE",
    data: 1015400026
  },
  {
    value: "1825 MADISON AVENUE",
    data: 1017457501
  },
  {
    value: "1825 MADISON AVENUE",
    data: 1017457501
  },
  {
    value: "1825 RIVERSIDE DRIVE",
    data: 1022460110
  },
  {
    value: "1825 RIVERSIDE DRIVE",
    data: 1022460110
  },
  {
    value: "1826 MADISON AVENUE",
    data: 1017450055
  },
  {
    value: "1827 1 AVENUE",
    data: 1015570027
  },
  {
    value: "1827 2 AVENUE",
    data: 1015400027
  },
  {
    value: "1827 2 AVENUE",
    data: 1015400027
  },
  {
    value: "1827 ADAM C POWELL BLVD",
    data: 1018210002
  },
  {
    value: "1827 ADAM C POWELL BOULEVARD",
    data: 1018210002
  },
  {
    value: "1829 2 AVENUE",
    data: 1015400028
  },
  {
    value: "1829 2 AVENUE",
    data: 1015400028
  },
  {
    value: "1829 ADAM C POWELL BLVD",
    data: 1018210004
  },
  {
    value: "1829 ADAM C POWELL BOULEVARD",
    data: 1018210004
  },
  {
    value: "1829 MADISON AVENUE",
    data: 1017450050
  },
  {
    value: "1829 MADISON AVENUE",
    data: 1017450050
  },
  {
    value: "183 7 AVENUE",
    data: 1007960073
  },
  {
    value: "183 AVENUE B",
    data: 1003940005
  },
  {
    value: "183 AVENUE C",
    data: 1003940041
  },
  {
    value: "183 AVENUE C",
    data: 1003940041
  },
  {
    value: "183 BLEECKER STREET",
    data: 1005400041
  },
  {
    value: "183 BOWERY",
    data: 1004250001
  },
  {
    value: "183 BROADWAY",
    data: 1000630016
  },
  {
    value: "183 CANAL STREET",
    data: 1002040035
  },
  {
    value: "183 CHRISTOPHER STREET",
    data: 1006360039
  },
  {
    value: "183 CHRYSTIE STREET",
    data: 1004260035
  },
  {
    value: "183 CLAREMONT AVENUE",
    data: 1019940062
  },
  {
    value: "183 CLAREMONT AVENUE",
    data: 1019940062
  },
  {
    value: "183 CONVENT AVENUE",
    data: 1019570110
  },
  {
    value: "183 DUANE STREET",
    data: 1001430014
  },
  {
    value: "183 EAST 100 STREET",
    data: 1016280026
  },
  {
    value: "183 EAST 100 STREET",
    data: 1016280026
  },
  {
    value: "183 EAST 104 STREET",
    data: 1016320133
  },
  {
    value: "183 EAST 117 STREET",
    data: 1016450032
  },
  {
    value: "183 EAST 64 STREET",
    data: 1013990131
  },
  {
    value: "183 EAST 80 STREET",
    data: 1015090032
  },
  {
    value: "183 EAST BROADWAY",
    data: 1002840019
  },
  {
    value: "183 EAST BROADWAY",
    data: 1002840019
  },
  {
    value: "183 GRAND STREET",
    data: 1002360017
  },
  {
    value: "183 HESTER STREET",
    data: 1002370032
  },
  {
    value: "183 HESTER STREET",
    data: 1002370032
  },
  {
    value: "183 LENOX AVENUE",
    data: 1019040030
  },
  {
    value: "183 MADISON AVENUE",
    data: 1008630060
  },
  {
    value: "183 MOTT STREET",
    data: 1004800034
  },
  {
    value: "183 MOTT STREET",
    data: 1004800034
  },
  {
    value: "183 MULBERRY STREET",
    data: 1004810033
  },
  {
    value: "183 MULBERRY STREET",
    data: 1004810033
  },
  {
    value: "183 PINEHURST AVENUE",
    data: 1021790203
  },
  {
    value: "183 PINEHURST AVENUE",
    data: 1021790203
  },
  {
    value: "183 PRINCE STREET",
    data: 1005170043
  },
  {
    value: "183 PRINCE STREET",
    data: 1005170043
  },
  {
    value: "183 SULLIVAN STREET",
    data: 1005250007
  },
  {
    value: "183 THOMPSON STREET",
    data: 1005250016
  },
  {
    value: "183 VARICK STREET",
    data: 1005800060
  },
  {
    value: "183 WEST 4 STREET",
    data: 1005920039
  },
  {
    value: "1830 2 AVENUE",
    data: 1015570004
  },
  {
    value: "1830 2 AVENUE",
    data: 1015570004
  },
  {
    value: "1831 2 AVENUE",
    data: 1015400029
  },
  {
    value: "1831 2 AVENUE",
    data: 1015400029
  },
  {
    value: "1831 ADAM C POWELL BLVD",
    data: 1018210064
  },
  {
    value: "1831 ADAM C POWELL BOULEVARD",
    data: 1018210064
  },
  {
    value: "1831 MADISON AVENUE",
    data: 1017460021
  },
  {
    value: "1831 MADISON AVENUE",
    data: 1017460021
  },
  {
    value: "1832 2 AVENUE",
    data: 1015570052
  },
  {
    value: "1832 MADISON AVENUE",
    data: 1017460002
  },
  {
    value: "1833 LEXINGTON AVENUE",
    data: 1016400021
  },
  {
    value: "1833 LEXINGTON AVENUE",
    data: 1016400021
  },
  {
    value: "1834 2 AVENUE",
    data: 1015570050
  },
  {
    value: "1834 2 AVENUE",
    data: 1015570050
  },
  {
    value: "1834 3 AVENUE",
    data: 1016290033
  },
  {
    value: "1835 1 AVENUE",
    data: 1015570030
  },
  {
    value: "1835 AMSTERDAM AVENUE",
    data: 1020650061
  },
  {
    value: "1835 AMSTERDAM AVENUE",
    data: 1020650061
  },
  {
    value: "1836 3 AVENUE",
    data: 1016290040
  },
  {
    value: "1836 ADAM C POWELL BLVD",
    data: 1018270029
  },
  {
    value: "1836 ADAM C POWELL BOULEVARD",
    data: 1018270029
  },
  {
    value: "1837 ADAM C POWELL BLVD",
    data: 1018210061
  },
  {
    value: "1838 2 AVENUE",
    data: 1015577501
  },
  {
    value: "1838 ADAM C POWELL BLVD",
    data: 1018270031
  },
  {
    value: "1838 ADAM C POWELL BOULEVARD",
    data: 1018270031
  },
  {
    value: "1839 MADISON AVENUE",
    data: 1017470001
  },
  {
    value: "184 1 AVENUE",
    data: 1004390002
  },
  {
    value: "184 2 AVENUE",
    data: 1004530006
  },
  {
    value: "184 3 AVENUE",
    data: 1008720044
  },
  {
    value: "184 5 AVENUE",
    data: 1008240042
  },
  {
    value: "184 7 AVENUE",
    data: 1007700043
  },
  {
    value: "184 7 AVENUE",
    data: 1007700043
  },
  {
    value: "184 8 AVENUE",
    data: 1007690003
  },
  {
    value: "184 9 AVENUE",
    data: 1007450003
  },
  {
    value: "184 ALLEN STREET",
    data: 1004170072
  },
  {
    value: "184 AVENUE D",
    data: 1003670025
  },
  {
    value: "184 BOWERY",
    data: 1004787502
  },
  {
    value: "184 BRADHURST AVENUE",
    data: 1020460022
  },
  {
    value: "184 BRADHURST AVENUE",
    data: 1020460022
  },
  {
    value: "184 CLAREMONT AVENUE",
    data: 1019930107
  },
  {
    value: "184 CLAREMONT AVENUE",
    data: 1019930107
  },
  {
    value: "184 DUANE STREET",
    data: 1001417502
  },
  {
    value: "184 DUANE STREET",
    data: 1001417502
  },
  {
    value: "184 DYCKMAN STREET",
    data: 1021750061
  },
  {
    value: "184 EAST 101 STREET",
    data: 1016280046
  },
  {
    value: "184 EAST 109 STREET",
    data: 1016360141
  },
  {
    value: "184 EAST 111 STREET",
    data: 1016380140
  },
  {
    value: "184 EAST 3 STREET",
    data: 1003980022
  },
  {
    value: "184 EAST 3 STREET",
    data: 1003980022
  },
  {
    value: "184 EAST 64 STREET",
    data: 1013987503
  },
  {
    value: "184 EAST 7 STREET",
    data: 1003890009
  },
  {
    value: "184 EAST 7 STREET",
    data: 1003890009
  },
  {
    value: "184 EAST 75 STREET",
    data: 1014090045
  },
  {
    value: "184 EAST 76 STREET",
    data: 1014100042
  },
  {
    value: "184 EAST 93 STREET",
    data: 1015210140
  },
  {
    value: "184 FORSYTH STREET",
    data: 1004210049
  },
  {
    value: "184 FORSYTH STREET",
    data: 1004210049
  },
  {
    value: "184 FRANKLIN STREET",
    data: 1001870005
  },
  {
    value: "184 LAFAYETTE STREET",
    data: 1004730041
  },
  {
    value: "184 LAFAYETTE STREET",
    data: 1004730041
  },
  {
    value: "184 LEXINGTON AVENUE",
    data: 1008870023
  },
  {
    value: "184 LEXINGTON AVENUE",
    data: 1008870023
  },
  {
    value: "184 MOTT STREET",
    data: 1004790003
  },
  {
    value: "184 MOTT STREET",
    data: 1004790003
  },
  {
    value: "184 MULBERRY STREET",
    data: 1004800004
  },
  {
    value: "184 MULBERRY STREET",
    data: 1004800004
  },
  {
    value: "184 NAGLE AVENUE",
    data: 1022170043
  },
  {
    value: "184 NAGLE AVENUE",
    data: 1022170043
  },
  {
    value: "184 NORFOLK STREET",
    data: 1003550046
  },
  {
    value: "184 NORFOLK STREET",
    data: 1003550046
  },
  {
    value: "184 PRINCE STREET",
    data: 1005030018
  },
  {
    value: "184 STANTON STREET",
    data: 1003500075
  },
  {
    value: "184 SULLIVAN STREET",
    data: 1005260067
  },
  {
    value: "184 THOMPSON STREET",
    data: 1005257506
  },
  {
    value: "184 WAVERLY PLACE",
    data: 1006100021
  },
  {
    value: "184 WEST 10 STREET",
    data: 1006190068
  },
  {
    value: "184 WEST 10 STREET",
    data: 1006190068
  },
  {
    value: "184 WEST 134 STREET",
    data: 1019180056
  },
  {
    value: "184 WEST 82 STREET",
    data: 1012120064
  },
  {
    value: "184 WEST 82 STREET",
    data: 1012120064
  },
  {
    value: "1840 1 AVENUE",
    data: 1015730101
  },
  {
    value: "1840 2 AVENUE",
    data: 1015580001
  },
  {
    value: "1840 2 AVENUE",
    data: 1015580001
  },
  {
    value: "1840 ADAM C POWELL BLVD",
    data: 1018270032
  },
  {
    value: "1840 ADAM C POWELL BOULEVARD",
    data: 1018270032
  },
  {
    value: "1840 AMSTERDAM AVENUE",
    data: 1020830029
  },
  {
    value: "1841 1 AVENUE",
    data: 1015580023
  },
  {
    value: "1841 1 AVENUE",
    data: 1015580023
  },
  {
    value: "1841 AMSTERDAM AVENUE",
    data: 1020660001
  },
  {
    value: "1841 BROADWAY",
    data: 1011130018
  },
  {
    value: "1841 PARK AVENUE",
    data: 1017750001
  },
  {
    value: "1842 ADAM C POWELL BLVD",
    data: 1018270033
  },
  {
    value: "1842 AMSTERDAM AVENUE",
    data: 1020830030
  },
  {
    value: "1842 PARK AVENUE",
    data: 1017510034
  },
  {
    value: "1844 2 AVENUE",
    data: 1015580003
  },
  {
    value: "1844 LEXINGTON AVENUE",
    data: 1016400001
  },
  {
    value: "1844 LEXINGTON AVENUE",
    data: 1016400001
  },
  {
    value: "1844 PARK AVENUE",
    data: 1017510035
  },
  {
    value: "1845 ADAM C POWELL BLVD",
    data: 1018227502
  },
  {
    value: "1845 ADAM C. POWELL BOULEVARD",
    data: 1018227502
  },
  {
    value: "1845 BROADWAY",
    data: 1011130020
  },
  {
    value: "1845 PARK AVENUE",
    data: 1017750003
  },
  {
    value: "1846 AMSTERDAM AVENUE",
    data: 1020830031
  },
  {
    value: "1846 PARK AVENUE",
    data: 1017510036
  },
  {
    value: "1848 2 AVENUE",
    data: 1015580052
  },
  {
    value: "1848 2 AVENUE",
    data: 1015580052
  },
  {
    value: "1848 3 AVENUE",
    data: 1016300033
  },
  {
    value: "1848 3 AVENUE",
    data: 1016300033
  },
  {
    value: "1848 AMSTERDAM AVENUE",
    data: 1020830032
  },
  {
    value: "1848 PARK AVENUE",
    data: 1017510037
  },
  {
    value: "1849 2 AVENUE",
    data: 1015410021
  },
  {
    value: "1849 2 AVENUE",
    data: 1015410021
  },
  {
    value: "1849 BROADWAY",
    data: 1011130046
  },
  {
    value: "185 10 AVENUE",
    data: 1006930031
  },
  {
    value: "185 AUDUBON AVENUE",
    data: 1021310029
  },
  {
    value: "185 AUDUBON AVENUE",
    data: 1021310029
  },
  {
    value: "185 AVENUE B",
    data: 1003940010
  },
  {
    value: "185 AVENUE B",
    data: 1003940010
  },
  {
    value: "185 BLEECKER STREET",
    data: 1005400043
  },
  {
    value: "185 BLEECKER STREET",
    data: 1005400043
  },
  {
    value: "185 CANAL STREET",
    data: 1002050030
  },
  {
    value: "185 CHRISTOPHER STREET",
    data: 1006360040
  },
  {
    value: "185 DUANE STREET",
    data: 1001430015
  },
  {
    value: "185 EAST 117 STREET",
    data: 1016450132
  },
  {
    value: "185 EAST 123 STREET",
    data: 1017720033
  },
  {
    value: "185 EAST 2 STREET",
    data: 1003970025
  },
  {
    value: "185 EAST 2 STREET",
    data: 1003970025
  },
  {
    value: "185 EAST 3 STREET",
    data: 1003990044
  },
  {
    value: "185 EAST 3 STREET",
    data: 1003990044
  },
  {
    value: "185 EAST 64 STREET",
    data: 1013990032
  },
  {
    value: "185 EAST 7 STREET",
    data: 1003900001
  },
  {
    value: "185 EAST 80 STREET",
    data: 1015090133
  },
  {
    value: "185 EAST BROADWAY",
    data: 1002840018
  },
  {
    value: "185 EAST HOUSTON STREET",
    data: 1004170056
  },
  {
    value: "185 EAST HOUSTON STREET",
    data: 1004170056
  },
  {
    value: "185 FRANKLIN STREET",
    data: 1001810015
  },
  {
    value: "185 GRAND STREET",
    data: 1002360018
  },
  {
    value: "185 GREENWICH STREET",
    data: 1000580001
  },
  {
    value: "185 HESTER STREET",
    data: 1002370033
  },
  {
    value: "185 HESTER STREET",
    data: 1002370033
  },
  {
    value: "185 LAFAYETTE STREET",
    data: 1004720007
  },
  {
    value: "185 LENOX AVENUE",
    data: 1019040130
  },
  {
    value: "185 MADISON AVENUE",
    data: 1008640025
  },
  {
    value: "185 MOTT STREET",
    data: 1004800033
  },
  {
    value: "185 MOTT STREET",
    data: 1004800033
  },
  {
    value: "185 PARK ROW",
    data: 1001170001
  },
  {
    value: "185 PARK ROW",
    data: 1001170001
  },
  {
    value: "185 ST NICHOLAS AVENUE",
    data: 1019250005
  },
  {
    value: "185 ST NICHOLAS AVENUE",
    data: 1019250005
  },
  {
    value: "185 WADSWORTH AVENUE",
    data: 1021650026
  },
  {
    value: "185 WEST 135 STREET",
    data: 1019200006
  },
  {
    value: "185 WEST 80 STREET",
    data: 1012110001
  },
  {
    value: "185 WEST END AVENUE",
    data: 1011797502
  },
  {
    value: "185 WEST END AVENUE",
    data: 1011797502
  },
  {
    value: "185 WEST HOUSTON STREET",
    data: 1005200029
  },
  {
    value: "185 WEST HOUSTON STREET",
    data: 1005200029
  },
  {
    value: "1850 AMSTERDAM AVENUE",
    data: 1020830033
  },
  {
    value: "1850 PARK AVENUE",
    data: 1017510137
  },
  {
    value: "1851 3 AVENUE",
    data: 1016520001
  },
  {
    value: "1851 3 AVENUE",
    data: 1016520001
  },
  {
    value: "1852 2 AVENUE",
    data: 1015580050
  },
  {
    value: "1852 2 AVENUE",
    data: 1015580050
  },
  {
    value: "1852 3 AVENUE",
    data: 1016300035
  },
  {
    value: "1852 PARK AVENUE",
    data: 1017510038
  },
  {
    value: "1854 2 AVENUE",
    data: 1015580049
  },
  {
    value: "1854 2 AVENUE",
    data: 1015580049
  },
  {
    value: "1854 ADAM C POWELL BLVD",
    data: 1018280030
  },
  {
    value: "1854 ADAM C POWELL BOULEVARD",
    data: 1018280030
  },
  {
    value: "1854 AMSTERDAM AVENUE",
    data: 1020830035
  },
  {
    value: "1855 1 AVENUE",
    data: 1015580026
  },
  {
    value: "1855 ADAM C POWELL BLVD",
    data: 1018230001
  },
  {
    value: "1855 ADAM C POWELL BOULEVARD",
    data: 1018230001
  },
  {
    value: "1855 BROADWAY",
    data: 1011130047
  },
  {
    value: "1856 PARK AVENUE",
    data: 1017510040
  },
  {
    value: "1858 ADAM C POWELL BLVD",
    data: 1018280032
  },
  {
    value: "1858 ADAM C POWELL BOULEVARD",
    data: 1018280032
  },
  {
    value: "1858 LEXINGTON AVENUE",
    data: 1016430015
  },
  {
    value: "186 1 AVENUE",
    data: 1004390003
  },
  {
    value: "186 11 AVENUE",
    data: 1006950003
  },
  {
    value: "186 2 AVENUE",
    data: 1004530007
  },
  {
    value: "186 5 AVENUE",
    data: 1008247501
  },
  {
    value: "186 5 AVENUE",
    data: 1008247501
  },
  {
    value: "186 9 AVENUE",
    data: 1007450004
  },
  {
    value: "186 AUDUBON AVENUE",
    data: 1021310022
  },
  {
    value: "186 AUDUBON AVENUE",
    data: 1021310022
  },
  {
    value: "186 AVENUE A",
    data: 1004050007
  },
  {
    value: "186 AVENUE B",
    data: 1004050034
  },
  {
    value: "186 BLEECKER STREET",
    data: 1005260056
  },
  {
    value: "186 BOWERY",
    data: 1004780023
  },
  {
    value: "186 CLAREMONT AVENUE",
    data: 1019930106
  },
  {
    value: "186 CLAREMONT AVENUE",
    data: 1019930106
  },
  {
    value: "186 COLUMBUS AVENUE",
    data: 1011400032
  },
  {
    value: "186 COLUMBUS AVENUE",
    data: 1011400032
  },
  {
    value: "186 EAST 101 STREET",
    data: 1016280045
  },
  {
    value: "186 EAST 104 STREET",
    data: 1016310140
  },
  {
    value: "186 EAST 109 STREET",
    data: 1016360140
  },
  {
    value: "186 EAST 111 STREET",
    data: 1016380040
  },
  {
    value: "186 EAST 2 STREET",
    data: 1003987502
  },
  {
    value: "186 EAST 75 STREET",
    data: 1014090144
  },
  {
    value: "186 EAST 93 STREET",
    data: 1015210139
  },
  {
    value: "186 FORSYTH STREET",
    data: 1004210051
  },
  {
    value: "186 FORSYTH STREET",
    data: 1004210051
  },
  {
    value: "186 FRANKLIN STREET",
    data: 1001870006
  },
  {
    value: "186 GRAND STREET",
    data: 1004710022
  },
  {
    value: "186 HESTER STREET",
    data: 1002060014
  },
  {
    value: "186 LENOX AVENUE",
    data: 1017180004
  },
  {
    value: "186 ORCHARD STREET",
    data: 1004120008
  },
  {
    value: "186 ORCHARD STREET",
    data: 1004120008
  },
  {
    value: "186 PINEHURST AVENUE",
    data: 1021790156
  },
  {
    value: "186 PINEHURST AVENUE",
    data: 1021790156
  },
  {
    value: "186 RIVERSIDE DRIVE",
    data: 1012510037
  },
  {
    value: "186 RIVERSIDE DRIVE",
    data: 1012510037
  },
  {
    value: "186 SHERMAN AVENUE",
    data: 1022260041
  },
  {
    value: "186 SPRING STREET",
    data: 1004890023
  },
  {
    value: "186 STANTON STREET",
    data: 1003450036
  },
  {
    value: "186 SULLIVAN STREET",
    data: 1005260066
  },
  {
    value: "186 WAVERLY PLACE",
    data: 1006110030
  },
  {
    value: "186 WEST 134 STREET",
    data: 1019180156
  },
  {
    value: "186 WEST 135 STREET",
    data: 1019190059
  },
  {
    value: "186 WEST 80 STREET",
    data: 1012107502
  },
  {
    value: "186 WEST 80 STREET",
    data: 1012107502
  },
  {
    value: "1860 1 AVENUE",
    data: 1016900001
  },
  {
    value: "1860 2 AVENUE",
    data: 1016680001
  },
  {
    value: "1860 LEXINGTON AVENUE",
    data: 1016430016
  },
  {
    value: "1861 AMSTERDAM AVENUE",
    data: 1020670001
  },
  {
    value: "1862 3 AVENUE",
    data: 1016300038
  },
  {
    value: "1862 3 AVENUE",
    data: 1016300038
  },
  {
    value: "1862 LEXINGTON AVENUE",
    data: 1016430017
  },
  {
    value: "1864 ADAM C POWELL BLVD",
    data: 1018290029
  },
  {
    value: "1864 ADAM C POWELL BOULEVARD",
    data: 1018290029
  },
  {
    value: "1864 AMSTERDAM AVENUE",
    data: 1020840029
  },
  {
    value: "1864 LEXINGTON AVENUE",
    data: 1016430018
  },
  {
    value: "1865 2 AVENUE",
    data: 1016467501
  },
  {
    value: "1865 2 AVENUE",
    data: 1016467501
  },
  {
    value: "1865 BROADWAY",
    data: 1011140009
  },
  {
    value: "1867 2 AVENUE",
    data: 1016460022
  },
  {
    value: "1867 2 AVENUE",
    data: 1016460022
  },
  {
    value: "1867 ADAM C POWELL BLVD",
    data: 1018230063
  },
  {
    value: "1867 ADAM C POWELL BOULEVARD",
    data: 1018230063
  },
  {
    value: "1867 AMSTERDAM AVENUE",
    data: 1020670075
  },
  {
    value: "1868 3 AVENUE",
    data: 1016310033
  },
  {
    value: "1868 AMSTERDAM AVENUE",
    data: 1020840033
  },
  {
    value: "1869 2 AVENUE",
    data: 1016460023
  },
  {
    value: "1869 2 AVENUE",
    data: 1016460023
  },
  {
    value: "187 9 AVENUE",
    data: 1007190040
  },
  {
    value: "187 BROADWAY",
    data: 1000630015
  },
  {
    value: "187 CHRYSTIE STREET",
    data: 1004260034
  },
  {
    value: "187 CHRYSTIE STREET",
    data: 1004260034
  },
  {
    value: "187 EAST 100 STREET",
    data: 1016280028
  },
  {
    value: "187 EAST 100 STREET",
    data: 1016280028
  },
  {
    value: "187 EAST 117 STREET",
    data: 1016450133
  },
  {
    value: "187 EAST 7 STREET",
    data: 1003900064
  },
  {
    value: "187 EAST BROADWAY",
    data: 1002840017
  },
  {
    value: "187 EDGECOMBE AVENUE",
    data: 1020510080
  },
  {
    value: "187 FRANKLIN STREET",
    data: 1001810014
  },
  {
    value: "187 GRAND STREET",
    data: 1002360019
  },
  {
    value: "187 HESTER STREET",
    data: 1002370034
  },
  {
    value: "187 HESTER STREET",
    data: 1002370034
  },
  {
    value: "187 LENOX AVENUE",
    data: 1019040031
  },
  {
    value: "187 PINEHURST AVENUE",
    data: 1021790205
  },
  {
    value: "187 PINEHURST AVENUE",
    data: 1021790205
  },
  {
    value: "187 SPRING STREET",
    data: 1005030041
  },
  {
    value: "187 SPRING STREET",
    data: 1005030041
  },
  {
    value: "187 WEST 135 STREET",
    data: 1019200005
  },
  {
    value: "1870 3 AVENUE",
    data: 1016310034
  },
  {
    value: "1870 AMSTERDAM AVENUE",
    data: 1020840034
  },
  {
    value: "1871 2 AVENUE",
    data: 1016460024
  },
  {
    value: "1871 ADAM C POWELL BLVD",
    data: 1018230061
  },
  {
    value: "1871 ADAM C POWELL BOULEVARD",
    data: 1018230061
  },
  {
    value: "1871 AMSTERDAM AVENUE",
    data: 1020670064
  },
  {
    value: "1872 3 AVENUE",
    data: 1016310035
  },
  {
    value: "1873 2 AVENUE",
    data: 1016460025
  },
  {
    value: "1873 2 AVENUE",
    data: 1016460025
  },
  {
    value: "1873 AMSTERDAM AVENUE",
    data: 1020670163
  },
  {
    value: "1873 LEXINGTON AVENUE",
    data: 1016440120
  },
  {
    value: "1875 2 AVENUE",
    data: 1016460028
  },
  {
    value: "1875 AMSTERDAM AVENUE",
    data: 1020670063
  },
  {
    value: "1875 MADISON AVENUE",
    data: 1017470035
  },
  {
    value: "1876 3 AVENUE",
    data: 1016310037
  },
  {
    value: "1877 AMSTERDAM AVENUE",
    data: 1020670062
  },
  {
    value: "1878 3 AVENUE",
    data: 1016310038
  },
  {
    value: "1878 ADAM C POWELL BLVD",
    data: 1018290033
  },
  {
    value: "1878 ADAM C POWELL BOULEVARD",
    data: 1018290033
  },
  {
    value: "1879 AMSTERDAM AVENUE",
    data: 1020670061
  },
  {
    value: "188 1 AVENUE",
    data: 1004390004
  },
  {
    value: "188 10 AVENUE",
    data: 1007190101
  },
  {
    value: "188 2 AVENUE",
    data: 1004530008
  },
  {
    value: "188 2 AVENUE",
    data: 1004530008
  },
  {
    value: "188 3 AVENUE",
    data: 1008730033
  },
  {
    value: "188 3 AVENUE",
    data: 1008730033
  },
  {
    value: "188 7 AVENUE",
    data: 1007710038
  },
  {
    value: "188 7 AVENUE",
    data: 1007710038
  },
  {
    value: "188 8 AVENUE",
    data: 1007690004
  },
  {
    value: "188 AUDUBON AVENUE",
    data: 1021310018
  },
  {
    value: "188 AUDUBON AVENUE",
    data: 1021310018
  },
  {
    value: "188 AVENUE A",
    data: 1004050008
  },
  {
    value: "188 AVENUE A",
    data: 1004050008
  },
  {
    value: "188 AVENUE B",
    data: 1004050033
  },
  {
    value: "188 AVENUE C",
    data: 1003820001
  },
  {
    value: "188 AVENUE C",
    data: 1003820001
  },
  {
    value: "188 AVENUE OF THE AMER",
    data: 1005040011
  },
  {
    value: "188 AVENUE OF THE AMERICAS",
    data: 1005040011
  },
  {
    value: "188 BLEECKER STREET",
    data: 1005260025
  },
  {
    value: "188 BOWERY",
    data: 1004780022
  },
  {
    value: "188 CLAREMONT AVENUE",
    data: 1019930105
  },
  {
    value: "188 CLAREMONT AVENUE",
    data: 1019930105
  },
  {
    value: "188 DUANE STREET",
    data: 1001410021
  },
  {
    value: "188 EAST 101 STREET",
    data: 1016280044
  },
  {
    value: "188 EAST 109 STREET",
    data: 1016360139
  },
  {
    value: "188 EAST 2 STREET",
    data: 1003980045
  },
  {
    value: "188 EAST 3 STREET",
    data: 1003980024
  },
  {
    value: "188 EAST 64 STREET",
    data: 1013987501
  },
  {
    value: "188 EAST 64 STREET",
    data: 1013987501
  },
  {
    value: "188 EAST 70 STREET",
    data: 1014047503
  },
  {
    value: "188 EAST 70 STREET",
    data: 1014047503
  },
  {
    value: "188 EAST 75 STREET",
    data: 1014090043
  },
  {
    value: "188 EAST 75 STREET",
    data: 1014090043
  },
  {
    value: "188 EAST 76 STREET",
    data: 1014107503
  },
  {
    value: "188 EAST 76 STREET",
    data: 1014107503
  },
  {
    value: "188 EAST 78 STREET",
    data: 1014127502
  },
  {
    value: "188 EAST 78 STREET",
    data: 1014127502
  },
  {
    value: "188 EDGECOMBE AVENUE",
    data: 1020510103
  },
  {
    value: "188 FORSYTH STREET",
    data: 1004210052
  },
  {
    value: "188 FORSYTH STREET",
    data: 1004210052
  },
  {
    value: "188 GRAND STREET",
    data: 1004710059
  },
  {
    value: "188 HESTER STREET",
    data: 1002060013
  },
  {
    value: "188 HESTER STREET",
    data: 1002060013
  },
  {
    value: "188 LENOX AVENUE",
    data: 1017180072
  },
  {
    value: "188 NORFOLK STREET",
    data: 1003550048
  },
  {
    value: "188 NORFOLK STREET",
    data: 1003550048
  },
  {
    value: "188 ORCHARD STREET",
    data: 1004120009
  },
  {
    value: "188 ORCHARD STREET",
    data: 1004120009
  },
  {
    value: "188 SPRING STREET",
    data: 1004890022
  },
  {
    value: "188 ST NICHOLAS AVENUE",
    data: 1019250050
  },
  {
    value: "188 ST NICHOLAS AVENUE",
    data: 1019250050
  },
  {
    value: "188 STANTON STREET",
    data: 1003450035
  },
  {
    value: "188 SULLIVAN STREET",
    data: 1005260065
  },
  {
    value: "188 WADSWORTH AVENUE",
    data: 1021640028
  },
  {
    value: "188 WADSWORTH AVENUE",
    data: 1021640028
  },
  {
    value: "188 WEST 134 STREET",
    data: 1019180157
  },
  {
    value: "1880 1 AVENUE",
    data: 1016910001
  },
  {
    value: "1880 2 AVENUE",
    data: 1016690001
  },
  {
    value: "1880 3 AVENUE",
    data: 1016310039
  },
  {
    value: "1880 ADAM C POWELL BLVD",
    data: 1018300029
  },
  {
    value: "1880 ADAM C POWELL BOULEVARD",
    data: 1018300029
  },
  {
    value: "1880 PARK AVENUE",
    data: 1017530033
  },
  {
    value: "1881 ADAM C POWELL BLVD",
    data: 1018240001
  },
  {
    value: "1881 AMSTERDAM AVENUE",
    data: 1020680001
  },
  {
    value: "1881 AMSTERDAM AVENUE",
    data: 1020680001
  },
  {
    value: "1881 BROADWAY",
    data: 1011150007
  },
  {
    value: "1881 PARK AVENUE",
    data: 1017770001
  },
  {
    value: "1882 3 AVENUE",
    data: 1016310040
  },
  {
    value: "1882 3 AVENUE",
    data: 1016310040
  },
  {
    value: "1882 PARK AVENUE",
    data: 1017530034
  },
  {
    value: "1883 3 AVENUE",
    data: 1016540001
  },
  {
    value: "1883 3 AVENUE",
    data: 1016540001
  },
  {
    value: "1883 AMSTERDAM AVENUE",
    data: 1020680002
  },
  {
    value: "1883 AMSTERDAM AVENUE",
    data: 1020680002
  },
  {
    value: "1884 3 AVENUE",
    data: 1016320033
  },
  {
    value: "1884 PARK AVENUE",
    data: 1017530134
  },
  {
    value: "1885 3 AVENUE",
    data: 1016540002
  },
  {
    value: "1885 3 AVENUE",
    data: 1016540002
  },
  {
    value: "1885 ADAM C POWELL BLVD",
    data: 1018240003
  },
  {
    value: "1885 ADAM C POWELL BOULEVARD",
    data: 1018240003
  },
  {
    value: "1885 AMSTERDAM AVENUE",
    data: 1020680003
  },
  {
    value: "1885 AMSTERDAM AVENUE",
    data: 1020680003
  },
  {
    value: "1885 LEXINGTON AVENUE",
    data: 1016457502
  },
  {
    value: "1885 LEXINGTON AVENUE",
    data: 1016457502
  },
  {
    value: "1885 PARK AVENUE",
    data: 1017770003
  },
  {
    value: "1886 3 AVENUE",
    data: 1016320034
  },
  {
    value: "1886 PARK AVENUE",
    data: 1017530035
  },
  {
    value: "1887 3 AVENUE",
    data: 1016540003
  },
  {
    value: "1887 AMSTERDAM AVENUE",
    data: 1020680004
  },
  {
    value: "1887 AMSTERDAM AVENUE",
    data: 1020680004
  },
  {
    value: "1888 3 AVENUE",
    data: 1016320035
  },
  {
    value: "1888 PARK AVENUE",
    data: 1017530036
  },
  {
    value: "1889 3 AVENUE",
    data: 1016540004
  },
  {
    value: "1889 AMSTERDAM AVENUE",
    data: 1020680044
  },
  {
    value: "1889 BROADWAY",
    data: 1011150057
  },
  {
    value: "1889 LEXINGTON AVENUE",
    data: 1016450153
  },
  {
    value: "189 9 AVENUE",
    data: 1007190041
  },
  {
    value: "189 AUDUBON AVENUE",
    data: 1021310032
  },
  {
    value: "189 AUDUBON AVENUE",
    data: 1021310032
  },
  {
    value: "189 AVENUE A",
    data: 1004390030
  },
  {
    value: "189 AVENUE C",
    data: 1003947506
  },
  {
    value: "189 BLEECKER STREET",
    data: 1005427502
  },
  {
    value: "189 BLEECKER STREET",
    data: 1005427502
  },
  {
    value: "189 BOWERY",
    data: 1004250004
  },
  {
    value: "189 BROADWAY",
    data: 1000630013
  },
  {
    value: "189 CHRYSTIE STREET",
    data: 1004260033
  },
  {
    value: "189 CLAREMONT AVENUE",
    data: 1019940066
  },
  {
    value: "189 CLAREMONT AVENUE",
    data: 1019940066
  },
  {
    value: "189 EAST 100 STREET",
    data: 1016280029
  },
  {
    value: "189 EAST 100 STREET",
    data: 1016280029
  },
  {
    value: "189 EAST 2 STREET",
    data: 1003970026
  },
  {
    value: "189 EAST 3 STREET",
    data: 1003990043
  },
  {
    value: "189 EAST 3 STREET",
    data: 1003990043
  },
  {
    value: "189 EAST 7 STREET",
    data: 1003900061
  },
  {
    value: "189 EAST BROADWAY",
    data: 1002840016
  },
  {
    value: "189 EDGECOMBE AVENUE",
    data: 1020510079
  },
  {
    value: "189 GRAND STREET",
    data: 1002360020
  },
  {
    value: "189 HESTER STREET",
    data: 1002370035
  },
  {
    value: "189 LENOX AVENUE",
    data: 1019040032
  },
  {
    value: "189 MADISON STREET",
    data: 1002730016
  },
  {
    value: "189 ORCHARD STREET",
    data: 1004170060
  },
  {
    value: "189 ORCHARD STREET",
    data: 1004170060
  },
  {
    value: "189 SHERMAN AVENUE",
    data: 1022220001
  },
  {
    value: "189 SHERMAN AVENUE",
    data: 1022220001
  },
  {
    value: "189 SPRING STREET",
    data: 1005030042
  },
  {
    value: "189 STANTON STREET",
    data: 1003440010
  },
  {
    value: "189 STANTON STREET",
    data: 1003440010
]