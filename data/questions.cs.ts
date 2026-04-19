export type QuestionTranslation = {
  question: string;
  options?: string[];
  correctAnswer: string;
  aliases?: string[];
};

export const questionsCz: Record<string, QuestionTranslation> = {
  // --- SHAPES ---
  "shapes-1": {
    question: 'Které jméno těstoviny doslova znamená "malí červi" v italštině?',
    options: ["Spaghetti", "Vermicelli", "Linguine", "Capellini"],
    correctAnswer: "Vermicelli",
  },
  "shapes-2": {
    question: 'Co znamená "farfalle" v italštině?',
    options: ["Mušle", "Motýli", "Kola", "Trubičky"],
    correctAnswer: "Motýli",
  },
  "shapes-3": {
    question: "Který tvar těstoviny je dutý, trubičkovitý a diagonálně seříznutý na koncích?",
    options: ["Rigatoni", "Ziti", "Penne", "Manicotti"],
    correctAnswer: "Penne",
  },
  "shapes-4": {
    question: "Jak se jmenují velké, ploché, široké placky těstovin používané v lasagních?",
    correctAnswer: "Lasagna",
    aliases: ["Lasagne"],
  },
  "shapes-5": {
    question: "Která těstovina vypadá jako malá zrnka rýže a často se používá do polévek?",
    options: ["Orzo", "Stelline", "Acini di pepe", "Ditalini"],
    correctAnswer: "Orzo",
  },
  "shapes-6": {
    question: "Jak se jmenuje těstovina ve tvaru vývrtky nebo spirály?",
    correctAnswer: "Fusilli",
  },
  "shapes-7": {
    question: 'Které jméno těstoviny znamená "malá ouška" v italštině?',
    options: ["Conchiglie", "Orecchiette", "Lumache", "Trofie"],
    correctAnswer: "Orecchiette",
  },
  "shapes-8": {
    question:
      'Rigatoni znamená "rýhované" v italštině. Pravda nebo nepravda — má rigatoni rýhy na vnější straně?',
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Pravda",
  },
  "shapes-9": {
    question: "Jaká je nejvíce konzumovaná těstovina na světě?",
    correctAnswer: "Spaghetti",
  },
  "shapes-10": {
    question: 'Které jméno těstoviny znamená "malé jazyky" v italštině?',
    options: ["Fettuccine", "Linguine", "Tagliatelle", "Pappardelle"],
    correctAnswer: "Linguine",
  },
  "shapes-11": {
    question:
      "Která dlouhá, plochá pásková těstovina je tradičním tvarem z oblasti Emilia-Romagna?",
    options: ["Fettuccine", "Pappardelle", "Tagliatelle", "Mafaldine"],
    correctAnswer: "Tagliatelle",
  },
  "shapes-12": {
    question: "Která malá prstýnková těstovina je tradičně plněná masem nebo sýrem?",
    options: ["Ravioli", "Tortellini", "Agnolotti", "Cappelletti"],
    correctAnswer: "Tortellini",
  },
  "shapes-13": {
    question: "Bucatini vypadá přesně jako silné spaghetti — jaký je jeho jediný klíčový rozdíl?",
    options: [
      "Má dutý otvor procházející středem",
      "Je zkroucené jako vývrtka",
      "Je ploché místo kulatého",
      "Je čtvercového průřezu",
    ],
    correctAnswer: "Má dutý otvor procházející středem",
  },
  "shapes-14": {
    question: 'Která těstovina ve tvaru mušle nese název z italského slova pro "mušle"?',
    correctAnswer: "Conchiglie",
  },
  "shapes-15": {
    question: 'Co znamená "cavatappi" v italštině?',
    options: ["Malí červi", "Vývrtka", "Malá ouška", "Malé mušle"],
    correctAnswer: "Vývrtka",
  },
  "shapes-16": {
    question: 'Co znamená "fettuccine" v italštině?',
    correctAnswer: "Malé stužky",
    aliases: ["Malá stuha", "Malé pásky", "Stužky"],
  },
  "shapes-17": {
    question: '"Pappardelle" pochází z italského slovesa "pappare". Co to znamená?',
    options: ["Hltavě jíst", "Roztáhnout", "Přeložit přes", "Stočit dohromady"],
    correctAnswer: "Hltavě jíst",
  },
  "shapes-18": {
    question: 'Jak se jmenuje krátká, zahnutá těstovina ve tvaru "lokte", oblíbená v mac & cheese?',
    correctAnswer: "Macaroni",
    aliases: ["Elbow macaroni", "Gomiti", "Makaróny"],
  },
  "shapes-19": {
    question:
      "Která těstovina se skládá z náplně uzavřené mezi dvěma tenkými vrstvami těsta, obvykle čtvercová nebo kulatá?",
    correctAnswer: "Ravioli",
  },
  "shapes-20": {
    question:
      'Která velmi tenká těstovina má přezdívku "andělské vlasy" a je tenčí než vermicelli?',
    options: ["Vermicelli", "Capellini", "Spaghettini", "Bavette"],
    correctAnswer: "Capellini",
  },
  "shapes-21": {
    question: 'Co znamená "ditalini" v italštině?',
    options: ["Malé náprstky", "Malá kola", "Malé kloboučky", "Malé prstýnky"],
    correctAnswer: "Malé náprstky",
  },
  "shapes-22": {
    question:
      'Mafaldine (také zvané reginette, tedy "malé královny") bylo pojmenováno po které historické osobnosti?',
    options: [
      "Princezna Mafalda Savojská",
      "Královna Markéta Savojská",
      "Isabela Kastilská",
      "Marie Terezie Habsburská",
    ],
    correctAnswer: "Princezna Mafalda Savojská",
  },
  "shapes-23": {
    question:
      "Trofie je krátká zkroucená těstovina tradičně podávaná s pestem. Z jakého italského regionu pochází?",
    options: ["Liguria", "Puglia", "Calabria", "Sardinia"],
    correctAnswer: "Liguria",
  },
  "shapes-24": {
    question: 'Co znamená "gemelli" v italštině?',
    options: ["Bratři", "Dvojčata", "Uzly", "Spirály"],
    correctAnswer: "Dvojčata",
  },
  "shapes-25": {
    question: 'Jaký tvar má těstovina "stelline", oblíbená v polévkách?',
    options: ["Malé prstýnky", "Malá kola", "Malé kloboučky", "Malé hvězdičky"],
    correctAnswer: "Malé hvězdičky",
  },
  "shapes-26": {
    question: 'Které jméno těstoviny se překládá jako "škrtič kněze" v italštině?',
    options: ["Maltagliati", "Strozzapreti", "Spaccatelle", "Cencioni"],
    correctAnswer: "Strozzapreti",
  },
  "shapes-27": {
    question: 'Co znamená "campanelle" v italštině?',
    options: ["Malé kloboučky", "Malá ouška", "Malé spirály", "Malé zvonečky"],
    correctAnswer: "Malé zvonečky",
  },
  "shapes-28": {
    question: 'Co znamená "cappelletti" v italštině?',
    options: ["Malé korunky", "Malé knoflíky", "Malé kloboučky", "Malé čepičky"],
    correctAnswer: "Malé kloboučky",
  },
  "shapes-29": {
    question: 'Co znamená "lumache" v italštině?',
    options: ["Mušle", "Slimáci", "Červi", "Hlemýždi"],
    correctAnswer: "Hlemýždi",
  },
  "shapes-30": {
    question:
      "Paccheri jsou velmi velké, hladké trubicovité těstoviny pocházející z jakého italského regionu?",
    options: ["Sicílie", "Lazio", "Puglia", "Campania"],
    correctAnswer: "Campania",
  },

  "shapes-31": {
    question:
      "Která těstovina se skládá z velkých, hladkých zapečených trubiček typicky plněných masem nebo sýrem?",
    options: ["Rigatoni", "Macaroni", "Paccheri", "Cannelloni"],
    correctAnswer: "Cannelloni",
  },
  "shapes-32": {
    question: 'Jaký tvar má těstovina "rotelle", také zvaná "ruote"?',
    options: ["Hvězdičky", "Kola", "Mušle", "Trubičky"],
    correctAnswer: "Kola",
  },
  "shapes-33": {
    question:
      'Casarecce je krátká, zkroucená těstovina ve tvaru svinutého pergamenu. Co znamená "casareccio"?',
    options: ["Domácí", "Svinuté", "Rustikální", "Zkroucené"],
    correctAnswer: "Domácí",
  },
  "shapes-34": {
    question: 'Co v italštině znamená "maltagliati"?',
    correctAnswer: "Špatně nakrájené",
    aliases: ["Hrubě nakrájené", "Nerovnoměrně nakrájené"],
  },
  "shapes-35": {
    question:
      "Která těstovina je podobná špagetám, ale má čtvercový průřez a vyrábí se pomocí drátěného rámu podobného kytaře?",
    options: ["Bigoli", "Pici", "Spaghetti alla chitarra", "Stringozzi"],
    correctAnswer: "Spaghetti alla chitarra",
  },
  "shapes-36": {
    question: '"Penne rigate" mají rýhy na vnější straně. Co v italštině znamená "rigate"?',
    options: ["Hladké", "Diagonální", "Duté", "Rýhované"],
    correctAnswer: "Rýhované",
  },
  "shapes-37": {
    question:
      "Garganelli jsou vaječné těstoviny válené přes rýhovaný hřeben do tvarů per. Z jakého italského regionu pochází?",
    options: ["Benátsko", "Toskánsko", "Lombardie", "Emilia-Romagna"],
    correctAnswer: "Emilia-Romagna",
  },
  "shapes-38": {
    question: 'Těstovina calamarata nese název od "calamari". Čemu se svým tvarem nejvíce podobá?',
    options: ["Chobotnicová chapadla", "Tělo kalamáry", "Váčky sépiové tinty", "Kroužky kalamárů"],
    correctAnswer: "Kroužky kalamárů",
  },
  "shapes-39": {
    question:
      "Cavatelli jsou malé těstoviny podobné mušlím, vyráběné mačkáním a táhnutím těsta po povrchu. Který region je s nimi nejvíce spojen?",
    options: ["Liguria", "Toskánsko", "Lombardie", "Puglia"],
    correctAnswer: "Puglia",
  },
  "shapes-40": {
    question:
      "Anelletti jsou malé prstýnkové těstoviny a jsou slavnou specialitou jakého italského ostrova?",
    options: ["Sardinie", "Elba", "Capri", "Sicílie"],
    correctAnswer: "Sicílie",
  },

  "shapes-41": {
    question:
      "Která těstovina je v podstatě tenčí verzí spaghetti, někdy označovaná jako 'tenké spaghetti'?",
    options: ["Vermicelli", "Bucatini", "Tagliolini", "Spaghettini"],
    correctAnswer: "Spaghettini",
  },
  "shapes-42": {
    question:
      "Tortiglioni vypadají podobně jako rigatoni — jaký je jejich klíčový rozlišovací znak?",
    options: [
      "Jsou kratší a širší",
      "Nemají středový otvor",
      "Jejich rýhy se spirálově obtáčejí kolem trubičky",
      "Vyrábí se z celozrnné mouky",
    ],
    correctAnswer: "Jejich rýhy se spirálově obtáčejí kolem trubičky",
  },
  "shapes-43": {
    question:
      "Scialatielli, čerstvé těstoviny z pobřeží Amalfi, jsou neobvyklé, protože jejich těsto obsahuje ingredienci, která v běžném těstovinovém těstě chybí, O jakou ingredienci se jedná?",
    options: ["Sépiová tinta", "Šafrán", "Čerstvá bazalka", "Ricotta"],
    correctAnswer: "Čerstvá bazalka",
  },
  "shapes-44": {
    question: 'Co je "pettine" v tradiční výrobě těstovin?',
    options: [
      "Dlouhý dřevěný váleček",
      "Kolečko na krájení těstovin",
      "Sušák pro čerstvé pláty těstovin",
      "Rýhovaný hřeben pro tvarování a texturování těstovin, jako jsou garganelli",
    ],
    correctAnswer: "Rýhovaný hřeben pro tvarování a texturování těstovin, jako jsou garganelli",
  },

  // --- SAUCES ---
  "sauces-1": {
    question: "Která klasická italská omáčka se vyrábí z rajčat, česneku a bazalky?",
    options: ["Marinara", "Arrabbiata", "Puttanesca", "Amatriciana"],
    correctAnswer: "Marinara",
  },
  "sauces-2": {
    question: "Jaké jsou hlavní ingredience tradiční Carbonary?",
    options: [
      "Vejce, pecorino, guanciale, černý pepř",
      "Smetana, slanina, parmazán, cibule",
      "Vejce, mozzarella, pancetta, bílé víno",
      "Ricotta, guanciale, černý pepř, máslo",
    ],
    correctAnswer: "Vejce, pecorino, guanciale, černý pepř",
  },
  "sauces-3": {
    question:
      "Která omáčka se vyrábí z čerstvé bazalky, piniových oříšků, česneku, olivového oleje a parmazánu?",
    correctAnswer: "Pesto",
    aliases: ["Pesto alla Genovese", "Bazalkové pesto"],
  },
  "sauces-4": {
    question: "Díky čemu dostává omáčka Arrabbiata svou pikantnost?",
    options: ["Jalapeños", "Červená chilli paprička", "Černý pepř", "Kajenský pepř"],
    correctAnswer: "Červená chilli paprička",
  },
  "sauces-5": {
    question: 'Která bohatá, pomalu vařená "masová" omáčka pochází z Boloně?',
    correctAnswer: "Bolognese",
    aliases: ["Ragù alla Bolognese", "Ragù", "Ragu"],
  },
  "sauces-6": {
    question: "Které z následujících ingrediencí obsahuje omáčka Puttanesca?",
    options: [
      "Olivy, kaparky, ančovičky, rajčata",
      "Tuňák, kaparky, citron, petržel",
      "Ančovičky, česnek, máslo, smetana",
      "Rajčata, bazalka, mozzarella, olivový olej",
    ],
    correctAnswer: "Olivy, kaparky, ančovičky, rajčata",
  },
  "sauces-7": {
    question:
      "Která bílá, krémová omáčka z másla a parmazánu nese jméno po římském restauratérovi?",
    options: ["Béchamel", "Alfredo", "Carbonara", "Cacio e pepe"],
    correctAnswer: "Alfredo",
  },
  "sauces-8": {
    question: 'Co znamená "cacio e pepe" v češtině?',
    correctAnswer: "Sýr a pepř",
    aliases: ["Sýr a černý pepř"],
  },
  "sauces-9": {
    question: "Jaký druh vyzrálého vepřového masa se používá v tradiční Carbonaře?",
    options: ["Pancetta", "Prosciutto", "Lardo", "Guanciale"],
    correctAnswer: "Guanciale",
  },
  "sauces-10": {
    question: "Pasta alla Norma obsahuje jakou zeleninu jako hlavní ingredienci?",
    options: ["Cuketa", "Artyčok", "Paprika", "Lilek"],
    correctAnswer: "Lilek",
  },
  "sauces-11": {
    question: "Která jednoduchá římská omáčka se vyrábí jen z česneku, olivového oleje a chilli?",
    correctAnswer: "Aglio e olio",
    aliases: ["Aglio olio", "Aglio, olio e peperoncino", "Aglio olio peperoncino"],
  },
  "sauces-12": {
    question: "Jaké mořské plody obsahuje pasta alle vongole?",
    options: ["Slávky", "Krevety", "Kalamáry", "Škeble"],
    correctAnswer: "Škeble",
  },
  "sauces-13": {
    question: "Autentická tradiční Carbonara by nikdy neměla obsahovat jakou ingredienci?",
    options: ["Vejce", "Guanciale", "Pecorino Romano", "Smetana"],
    correctAnswer: "Smetana",
  },
  "sauces-14": {
    question: "Pasta al nero di seppia získává svou charakteristickou černou barvu z čeho?",
    options: ["Černé olivy", "Dřevěné uhlí", "Černý česnek", "Sépiová tinta"],
    correctAnswer: "Sépiová tinta",
  },
  "sauces-15": {
    question: '"Arrabbiata" se překládá do češtiny jako co?',
    correctAnswer: "Rozzlobená",
    aliases: ["Naštvaná", "Rozzuřená"],
  },
  "sauces-16": {
    question:
      "Která ligurská omáčka se vyrábí z vlašských ořechů, smetany a majoránky, podávaná k pansotti?",
    options: ["Pesto", "Agliata", "Tocco de carne", "Salsa di noci"],
    correctAnswer: "Salsa di noci",
  },
  "sauces-17": {
    question:
      'Pasta alla Gricia se někdy nazývá "bílá Amatriciana." Jaká klíčová ingredience v ní chybí?',
    options: ["Guanciale", "Pecorino Romano", "Černý pepř", "Rajčata"],
    correctAnswer: "Rajčata",
  },
  "sauces-18": {
    question: "Která omáčka se tradičně podává s orecchiette v Puglie?",
    options: ["Pomodoro", "Pesto", "Amatriciana", "Cime di rapa"],
    correctAnswer: "Cime di rapa",
  },
  "sauces-19": {
    question: "Která sicilská omáčka používá mandle místo piniových oříšků?",
    options: ["Pesto alla Genovese", "Salsa di noci", "Norma", "Pesto alla Trapanese"],
    correctAnswer: "Pesto alla Trapanese",
  },
  "sauces-20": {
    question:
      "Která omáčka na máslové bázi se klasicky podává k čerstvým plněným těstovinám, jako jsou ravioli?",
    correctAnswer: "Burro e salvia",
    aliases: ["Máslo a šalvěj", "Máslo se šalvějí"],
  },
  "sauces-21": {
    question: 'Co označuje "ragù" v italském vaření?',
    options: [
      "Omáčka na bázi smetany",
      "Rajčatová základ",
      "Bylinný olej",
      "Pomalu vařená masová omáčka",
    ],
    correctAnswer: "Pomalu vařená masová omáčka",
  },
  "sauces-22": {
    question: "Který sýr se tradičně používá v omáčce Amatriciana?",
    options: ["Parmazán", "Grana Padano", "Ricotta salata", "Pecorino Romano"],
    correctAnswer: "Pecorino Romano",
  },
  "sauces-23": {
    question: "Co odlišuje pasta alla Norma od prosté rajčatové omáčky?",
    options: [
      "Obsahuje ančovičky a kaparky",
      "Používá pikantní chilli a česnek",
      "Je připravena ze smetany a másla",
      "Obsahuje smažený lilek a ricotta salata",
    ],
    correctAnswer: "Obsahuje smažený lilek a ricotta salata",
  },
  "sauces-24": {
    question:
      "V tradiční omáčce Bolognese se přidává která neobvyklá mléčná ingredience pro změkčení masa?",
    options: ["Smetana", "Máslo", "Ricotta", "Plnotučné mléko"],
    correctAnswer: "Plnotučné mléko",
  },
  "sauces-25": {
    question:
      "Jaká rajčata jsou obecně považována za zlatý standard pro italské omáčky na těstoviny?",
    options: ["Třešňová rajčata", "Velká masitá rajčata", "Rajčata Roma", "Rajčata San Marzano"],
    correctAnswer: "Rajčata San Marzano",
  },
  "sauces-26": {
    question: "Pasta al tonno obsahuje jakou hlavní ingredienci?",
    options: ["Pstruh", "Losos", "Sardinky", "Tuňák"],
    correctAnswer: "Tuňák",
  },
  "sauces-27": {
    question: "Pravda nebo nepravda: tradiční bolognský ragù obsahuje pouze hovězí maso.",
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Nepravda",
  },
  "sauces-28": {
    question: 'Co je "pasta e fagioli"?',
    correctAnswer: "Těstoviny s fazolemi",
    aliases: ["Pasta s fazolemi"],
  },
  "sauces-29": {
    question: "Tradiční janovské pesto by mělo být ideálně připraveno jakým nástrojem?",
    options: ["Kuchyňský robot", "Mixér", "Ruční mixér", "Hmoždíř s tloučkem"],
    correctAnswer: "Hmoždíř s tloučkem",
  },
  "sauces-30": {
    question:
      "Který jižní italský region je zvláště slavný svými omáčkami na těstoviny s mořskými plody?",
    options: ["Piemont", "Lombardie", "Emilia-Romagna", "Campania"],
    correctAnswer: "Campania",
  },

  "sauces-31": {
    question: "Z jaké hlavní ingredience se vyrábí Pasta al pomodoro?",
    options: ["Maso", "Smetana", "Sýr", "Rajčata"],
    correctAnswer: "Rajčata",
  },
  "sauces-32": {
    question: "Která omáčka se používá jako základ v tradiční lasagne al forno?",
    options: ["Pesto", "Aglio e olio", "Carbonara", "Besciamella (béchamel)"],
    correctAnswer: "Besciamella (béchamel)",
  },
  "sauces-33": {
    question:
      "Pasta all'Arrabbiata je pikantní rajčatová omáčka tradičně pocházející z jakého italského města?",
    options: ["Neapol", "Milán", "Florencie", "Řím"],
    correctAnswer: "Řím",
  },
  "sauces-34": {
    question: "Čím se Pasta alla Gricia liší od Carbonary?",
    options: [
      "Gricia používá smetanu místo vajec",
      "Gricia neobsahuje sýr",
      "Gricia neobsahuje guanciale",
      "Gricia neobsahuje vejce",
    ],
    correctAnswer: "Gricia neobsahuje vejce",
  },
  "sauces-35": {
    question: "Pro autentické Pesto alla Genovese se tradičně používá jaká bazalka. Jaká?",
    options: ["Thajská bazalka", "Citronová bazalka", "Fialová bazalka", "Bazalka genovese DOP"],
    correctAnswer: "Bazalka genovese DOP",
  },
  "sauces-36": {
    question: 'Co obecně označuje "sugo" v italském vaření těstovin?',
    options: [
      "Pomalu vařená masová omáčka",
      "Omáčka na smetanové bázi",
      "Vývar z mořských plodů",
      "Jednoduchá omáčka, typicky na bázi rajčat",
    ],
    correctAnswer: "Jednoduchá omáčka, typicky na bázi rajčat",
  },
  "sauces-37": {
    question: '"Bigoli in salsa" jsou tradiční benátské těstoviny. Z čeho se vyrábí "salsa"?',
    options: [
      "Rajčata a bazalka",
      "Smetana a bílé víno",
      "Vlašské ořechy a bylinky",
      "Ančovičky a cibule",
    ],
    correctAnswer: "Ančovičky a cibule",
  },
  "sauces-38": {
    question: 'Co nejlépe popisuje "Pasta con le sarde" — tradiční sicilské těstoviny?',
    options: [
      "Sardinky, rajčata, olivy a kaparky",
      "Sardinky, chilli, česnek a strouhanka",
      "Sardinky, smetana, citron a kopr",
      "Sardinky, divoký fenykl, šafrán, piniové oříšky a rozinky",
    ],
    correctAnswer: "Sardinky, divoký fenykl, šafrán, piniové oříšky a rozinky",
  },
  "sauces-39": {
    question:
      "Která ze čtyř klasických římských těstovin — Carbonara, Cacio e Pepe, Amatriciana, Gricia — obsahuje POUZE sýr a černý pepř?",
    options: ["Carbonara", "Amatriciana", "Gricia", "Cacio e Pepe"],
    correctAnswer: "Cacio e Pepe",
  },
  "sauces-40": {
    question:
      "Tradiční bolognské ragù, oficiálně zaregistrované v roce 1982, NEOBSAHUJE ingredienci, která se běžně přidává v moderních receptech. Jakou?",
    options: ["Celer", "Bílé víno", "Plnotučné mléko", "Česnek"],
    correctAnswer: "Česnek",
  },

  "sauces-41": {
    question: 'Co je "pasta in bianco"?',
    options: [
      "Těstoviny s bešamelovou omáčkou",
      "Těstoviny se smetanou a parmazánem",
      "Těstoviny podávané jen s máslem nebo olivovým olejem",
      "Těstoviny s lehkou rajčatovou omáčkou",
    ],
    correctAnswer: "Těstoviny podávané jen s máslem nebo olivovým olejem",
  },
  "sauces-42": {
    question: 'V italské přípravě omáček je "battuto" přípravný krok. Co označuje?',
    options: [
      "Redukování omáčky vařením",
      "Přecezení hotové omáčky",
      "Přidání vývaru do pánve",
      "Jemně nasekaná aromatická zelenina (cibule, celer, mrkev, česnek) před přidáním do pánve",
    ],
    correctAnswer:
      "Jemně nasekaná aromatická zelenina (cibule, celer, mrkev, česnek) před přidáním do pánve",
  },
  "sauces-43": {
    question:
      "Pasta Primavera jsou těstoviny s různou čerstvou zeleninou. Ve které zemi byla vynalezena?",
    options: ["Itálie", "Francie", "Kanada", "Spojené státy americké"],
    correctAnswer: "Spojené státy americké",
  },
  "sauces-44": {
    question: 'Pasta alla Norma používá "ricotta salata". Jaký druh sýra to je?',
    options: [
      "Měkká čerstvá ricotta ochucená bylinkami",
      "Uzená ricotta z Kalábrie",
      "Šlehaná ricotta smíchaná se smetanou",
      "Vyzrálá, osolená a lisovaná ricotta",
    ],
    correctAnswer: "Vyzrálá, osolená a lisovaná ricotta",
  },

  // --- ORIGINS ---
  "origins-1": {
    question: 'Z jakého italského města pochází klasický těstovinový pokrm "Carbonara"?',
    options: ["Neapol", "Řím", "Boloňa", "Milán"],
    correctAnswer: "Řím",
  },
  "origins-2": {
    question: "Těstoviny orecchiette pocházejí z jakého jižního italského regionu?",
    options: ["Sicílie", "Calabria", "Puglia", "Campania"],
    correctAnswer: "Puglia",
  },
  "origins-3": {
    question: "Pesto alla Genovese pochází z jakého italského města?",
    correctAnswer: "Janov",
    aliases: ["Genova", "Genoa"],
  },
  "origins-4": {
    question: "Která kultura přinesla sušené těstoviny na Sicílii ve středověku?",
    options: ["Řecko", "Čína", "Arabští obchodníci", "Španělsko"],
    correctAnswer: "Arabští obchodníci",
  },
  "origins-5": {
    question: "Spaghetti all'Amatriciana pochází z města Amatrice, v jakém italském regionu?",
    options: ["Lazio", "Toskánsko", "Umbrie", "Abruzzo"],
    correctAnswer: "Lazio",
  },
  "origins-6": {
    question: "Které těstoviny jsou tradičně spojeny s Neapolí?",
    options: ["Spaghetti", "Penne", "Rigatoni", "Bucatini"],
    correctAnswer: "Spaghetti",
  },
  "origins-7": {
    question: "Tagliatelle al ragù je tradiční těstovinový pokrm jakého italského města?",
    correctAnswer: "Boloňa",
    aliases: ["Bologna"],
  },
  "origins-8": {
    question: "Které město je nejčastěji spojováno s vynálezem tortellini?",
    options: ["Řím", "Florencie", "Milán", "Boloňa"],
    correctAnswer: "Boloňa",
  },
  "origins-9": {
    question: "Fettuccine Alfredo bylo vynalezeno ve kterém městě?",
    options: ["Florencie", "Neapol", "Boloňa", "Řím"],
    correctAnswer: "Řím",
  },
  "origins-10": {
    question: "Lasagne jsou tradičním pokrmem jakého italského regionu?",
    options: ["Toskánsko", "Benátsko", "Lazio", "Emilia-Romagna"],
    correctAnswer: "Emilia-Romagna",
  },
  "origins-11": {
    question:
      "Pici, silné ručně válené těstoviny podobné silným spaghetti, pochází z jakého regionu?",
    options: ["Lazio", "Campania", "Calabria", "Toskánsko"],
    correctAnswer: "Toskánsko",
  },
  "origins-12": {
    question: "Bigoli, silné celozrnné těstoviny, pochází z jakého italského regionu?",
    options: ["Lombardie", "Piemont", "Emilia-Romagna", "Benátsko"],
    correctAnswer: "Benátsko",
  },
  "origins-13": {
    question: "Culurgiones, tradiční plněné těstoviny, pocházejí z jakého italského ostrova?",
    options: ["Sicílie", "Capri", "Elba", "Sardinie"],
    correctAnswer: "Sardinie",
  },
  "origins-14": {
    question: "Pasta alla Norma pochází z jakého sicilského města?",
    options: ["Palermo", "Trapani", "Syrakusy", "Catania"],
    correctAnswer: "Catania",
  },
  "origins-15": {
    question:
      "Těstoviny chitarra, vyráběné lisováním těsta přes drátěný rám podobný kytaře, pocházejí z jakého regionu?",
    options: ["Puglia", "Calabria", "Basilicata", "Abruzzo"],
    correctAnswer: "Abruzzo",
  },
  "origins-16": {
    question:
      "Pasta alla Genovese — pomalu vařená cibulová omáčka nesouvisející s pestem — paradoxně pochází z jakého města?",
    options: ["Janov", "Řím", "Benátky", "Neapol"],
    correctAnswer: "Neapol",
  },
  "origins-17": {
    question: "Agnolotti, druh plněných těstovin, je specialitou jakého italského regionu?",
    options: ["Toskánsko", "Umbrie", "Marche", "Piemont"],
    correctAnswer: "Piemont",
  },
  "origins-18": {
    question:
      "Které město u Neapole je světově proslulé výrobou vysoce kvalitních sušených těstovin?",
    options: ["Sorrento", "Amalfi", "Castellammare", "Gragnano"],
    correctAnswer: "Gragnano",
  },
  "origins-19": {
    question:
      "Vincisgrassi, tradiční zapečené těstoviny s masovou omáčkou, pochází z jakého regionu?",
    options: ["Emilia-Romagna", "Abruzzo", "Lazio", "Marche"],
    correctAnswer: "Marche",
  },
  "origins-20": {
    question: "Cacio e Pepe je tradiční pokrm pocházející z jakého italského města?",
    options: ["Neapol", "Florencie", "Boloňa", "Řím"],
    correctAnswer: "Řím",
  },
  "origins-21": {
    question: "Spaghetti alle vongole je nejčastěji spojováno s jakým italským městem?",
    options: ["Řím", "Benátky", "Bari", "Neapol"],
    correctAnswer: "Neapol",
  },
  "origins-22": {
    question:
      "Pasta con le sarde — těstoviny se sardinkami, divokým fenyklem a šafránem — je pokrm z jakého ostrova?",
    options: ["Sardinie", "Elba", "Ischia", "Sicílie"],
    correctAnswer: "Sicílie",
  },
  "origins-23": {
    question:
      "Fregola, pražené těstoviny připomínající kuskus, pochází z jakého italského ostrova?",
    options: ["Sicílie", "Pantelleria", "Elba", "Sardinie"],
    correctAnswer: "Sardinie",
  },
  "origins-24": {
    question:
      "Autentický recept na bolognský ragù byl oficiálně zaregistrován v roce 1982. Která instituce jej přihlásila?",
    options: [
      "Italské ministerstvo zemědělství",
      "Italský kulinářský cech",
      "Boloňská univerzita",
      "Accademia Italiana della Cucina",
    ],
    correctAnswer: "Accademia Italiana della Cucina",
  },
  "origins-25": {
    question: "Bucatini all'Amatriciana, dnes spojované s Římem, původně pochází z jakého města?",
    correctAnswer: "Amatrice",
  },
  "origins-26": {
    question: "Pasta puttanesca je tradičně spojována s jakým italským městem?",
    options: ["Řím", "Bari", "Palermo", "Neapol"],
    correctAnswer: "Neapol",
  },
  "origins-27": {
    question:
      "Corzetti, mincovité těstoviny razítkované dekorativními vzory, pocházejí z jakého regionu?",
    options: ["Toskánsko", "Piemont", "Emilia-Romagna", "Liguria"],
    correctAnswer: "Liguria",
  },
  "origins-28": {
    question:
      "Nduja, pomazánkový pikantní salám používaný v omáčkách na těstoviny, pochází z jakého italského regionu?",
    options: ["Campania", "Sicílie", "Puglia", "Calabria"],
    correctAnswer: "Calabria",
  },
  "origins-29": {
    question: "Pasta alla Norma byl údajně pojmenována po opeře jakého italského skladatele?",
    options: ["Verdi", "Puccini", "Donizetti", "Bellini"],
    correctAnswer: "Bellini",
  },
  "origins-30": {
    question: "Který italský ostrov je historicky považován za kolébku výroby sušených těstovin?",
    options: ["Sardinie", "Elba", "Pantelleria", "Sicílie"],
    correctAnswer: "Sicílie",
  },

  "origins-31": {
    question: 'Co doslova znamená slovo "pasta" v italštině?',
    options: ["Jídlo", "Mouka", "Nudle", "Těsto nebo pasta"],
    correctAnswer: "Těsto nebo pasta",
  },
  "origins-32": {
    question:
      'Které italské město nese, díky svému výjimečně bohaté kulinářské tradici, přezdívku "La Grassa" (Tučná)?',
    options: ["Řím", "Milán", "Florencie", "Boloňa"],
    correctAnswer: "Boloňa",
  },
  "origins-33": {
    question:
      "Populární mýtus, že Marco Polo přivezl těstoviny do Itálie z Číny, je považován za nepravdivý. Proč?",
    options: [
      "Marco Polo nikdy nebyl v Číně",
      "Čínské nudle se vyrábí z rýže, ne z pšenice",
      "Marco Polo přivezl rýži, ne těstoviny",
      "Těstoviny v Itálii existovaly již před cestami Marca Pola",
    ],
    correctAnswer: "Těstoviny v Itálii existovaly již před cestami Marca Pola",
  },
  "origins-34": {
    question:
      "Boloňská obchodní komora zaregistrovala oficiální šířku tagliatelle jako přesný zlomek výšky místní dominanty. Které?",
    options: ["Bazilika San Petronio", "Neptunova fontána", "Palazzo d'Accursio", "Věž Asinelli"],
    correctAnswer: "Věž Asinelli",
  },
  "origins-35": {
    question:
      "V městečku Amatrice se Amatriciana původně připravovala s jinou těstovinou než je bucatini oblíbené v Římě. Která to byla?",
    options: ["Rigatoni", "Pennette", "Tonnarelli", "Spaghetti"],
    correctAnswer: "Spaghetti",
  },
  "origins-36": {
    question:
      'Která italská kuchařka z roku 1891 s názvem "La Scienza in cucina e l\'Arte di mangiare bene" pomohla kodifikovat a zpopularizovat mnohé klasické recepty na těstoviny?',
    options: ["Ada Boni", "Ippolito Cavalcanti", "Bartolomeo Scappi", "Pellegrino Artusi"],
    correctAnswer: "Pellegrino Artusi",
  },
  "origins-37": {
    question:
      "Stringozzi (také zvané strangozzi), ručně válené těstoviny podobné silným spaghetti, jsou specialitou jakého regionu?",
    options: ["Lazio", "Marche", "Abruzzo", "Umbrie"],
    correctAnswer: "Umbrie",
  },
  "origins-38": {
    question:
      '"Malloreddus", někdy nazývané "sardinské gnocchi", jsou těstovinová specialita jakého ostrova?',
    options: ["Sicílie", "Elba", "Capri", "Sardinie"],
    correctAnswer: "Sardinie",
  },
  "origins-39": {
    question:
      "Pansotti, trojúhelníkové plněné těstoviny s divokými bylinkami a ricottou, jsou tradiční pokrm italského regionu. Jakého?",
    options: ["Toskánsko", "Piemont", "Benátsko", "Liguria"],
    correctAnswer: "Liguria",
  },
  "origins-40": {
    question:
      "Který italský kuchař a spisovatel ze 16. století zaznamenal jedny z nejstarších známých receptů na těstoviny, včetně čerstvých vaječných těstovin válených válečkem?",
    options: [
      "Pellegrino Artusi",
      "Christofaro di Messisbugo",
      "Ippolito Cavalcanti",
      "Bartolomeo Scappi",
    ],
    correctAnswer: "Bartolomeo Scappi",
  },

  "origins-41": {
    question: "V jaké části světa bylo rajče původně pěstováno, než bylo přivezeno do Evropy?",
    options: ["Afrika", "Indie", "Čína", "Amerika"],
    correctAnswer: "Amerika",
  },
  "origins-42": {
    question: "Pravda nebo nepravda: Itálie je největším světovým exportérem těstovin.",
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Pravda",
  },
  "origins-43": {
    question:
      'Slavný prvoaprílový podvod z roku 1957 "sklizeň špaget" — zobrazující švýcarské rodiny sklízející špagety ze stromů — byl odvysílán jakým televizním pořadem?',
    options: ["CBS Evening News", "ITV News at Ten", "NBC Nightly News", "BBC Panorama"],
    correctAnswer: "BBC Panorama",
  },
  "origins-44": {
    question:
      "Jeden z nejstarších evropských písemných odkazů na těstoviny pochází z geografického díla z roku 1154, které popisuje jejich výrobu na Sicílii. Kdo byl jeho arabsko-normanský autor?",
    options: ["Ibn Battuta", "Al-Masudi", "Al-Idrisi", "Ibn Khaldun"],
    correctAnswer: "Al-Idrisi",
  },

  // --- COOKING ---
  "cooking-1": {
    question: 'Co znamená "al dente" při vaření těstovin?',
    options: ["Plně měkké a jemné", "Pevné na skus", "Lehce převařené", "Syrové uprostřed"],
    correctAnswer: "Pevné na skus",
  },
  "cooking-2": {
    question: "Měli byste přidat olej do vody při vaření těstovin?",
    options: [
      "Ano, aby se nepřilepily",
      "Ne, zabraňuje to přilepení omáčky na těstoviny",
      "Ano, pro chuť",
      "Pouze pro čerstvé těstoviny",
    ],
    correctAnswer: "Ne, zabraňuje to přilepení omáčky na těstoviny",
  },
  "cooking-3": {
    question: "Jak se italsky nazývá škrobová voda z vaření těstovin, která se přidává do omáček?",
    correctAnswer: "Acqua di cottura",
    aliases: ["Pasta water", "Škrobová voda"],
  },
  "cooking-4": {
    question: "Jak by měla chutnat voda na vaření těstovin?",
    options: ["Téměř bez soli", "Jako moře", "Velmi slaná (přesolená)", "Neslaná"],
    correctAnswer: "Jako moře",
  },
  "cooking-5": {
    question:
      "Čerstvé těstoviny (pasta fresca) se vaří mnohem rychleji než sušené. Přibližně jak dlouho?",
    options: ["1–3 minuty", "5–7 minut", "8–10 minut", "12–15 minut"],
    correctAnswer: "1–3 minuty",
  },
  "cooking-6": {
    question: "Jaká je hlavní mouka používaná k přípravě tradičních čerstvých vaječných těstovin?",
    options: ["Krupice", "Mouka tipo 00", "Celozrnná mouka", "Rýžová mouka"],
    correctAnswer: "Mouka tipo 00",
  },
  "cooking-7": {
    question: "Pravda nebo nepravda: těstoviny by se měly po scezení propláchnout studenou vodou.",
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Nepravda",
  },
  "cooking-8": {
    question: "Jaká mouka se tradičně používá k výrobě sušených těstovin (pasta secca)?",
    correctAnswer: "Semolina",
    aliases: ["Krupice z tvrdé pšenice", "Semola di grano duro", "Krupice"],
  },
  "cooking-9": {
    question: "Kolik vody je doporučeno na vaření 100 g těstovin?",
    options: ["0,5 litru", "2 litry", "3 litry", "1 litr"],
    correctAnswer: "1 litr",
  },
  "cooking-10": {
    question: "Pravda nebo nepravda: je tradicí lámat spaghetti napůl před vařením.",
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Nepravda",
  },
  "cooking-11": {
    question: 'Co označuje "mantecatura" při vaření těstovin?',
    options: [
      "Solení vody na těstoviny",
      "Scezení těstovin",
      "Ozdobení čerstvými bylinkami",
      "Dokončení těstovin v pánvi s omáčkou a vodou z těstovin",
    ],
    correctAnswer: "Dokončení těstovin v pánvi s omáčkou a vodou z těstovin",
  },
  "cooking-12": {
    question: "V jaké fázi by se těstoviny měly přidat do vody?",
    options: ["Studená voda", "Vlažná voda", "Mírně vřoucí voda", "Prudce vřoucí voda"],
    correctAnswer: "Prudce vřoucí voda",
  },
  "cooking-13": {
    question: "Který tvar těstovin je nejlépe vhodný pro tenké, jemné omáčky jako aglio e olio?",
    options: ["Rigatoni", "Penne", "Farfalle", "Spaghetti"],
    correctAnswer: "Spaghetti",
  },
  "cooking-14": {
    question:
      "Jak se nazývá technika vaření těstovin přímo v malém množství omáčky — podobně jako risotto?",
    correctAnswer: "Pasta risottata",
    aliases: ["Risottatura", "Metoda risotta"],
  },
  "cooking-15": {
    question: "Proč by se těstoviny po scezení NEMĚLY proplachovat studenou vodou?",
    options: [
      "Způsobuje to, že těstoviny jsou příliš studené k podávání",
      "Rozpadají se jemné tvary",
      "Přidává to nežádoucí vodu do pokrmu",
      "Odstraňuje to povrchový škrob, který pomáhá omáčce přilnout k těstovinám",
    ],
    correctAnswer: "Odstraňuje to povrchový škrob, který pomáhá omáčce přilnout k těstovinám",
  },
  "cooking-16": {
    question:
      "Pravda nebo nepravda: těstoviny by se měly ihned zamíchat po přidání do vroucí vody.",
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Pravda",
  },
  "cooking-17": {
    question: "Jaká je přibližná doba vaření většiny sušených tvarů těstovin?",
    options: ["2–4 minuty", "5–7 minut", "13–18 minut", "8–12 minut"],
    correctAnswer: "8–12 minut",
  },
  "cooking-18": {
    question:
      "Čerstvé vaječné těstoviny získávají svou charakteristickou žlutou barvu z jaké ingredience?",
    options: ["Kurkuma", "Šafrán", "Krupice", "Vejce"],
    correctAnswer: "Vejce",
  },
  "cooking-19": {
    question: "Jak poznáte, že jsou těstoviny al dente, bez stopek?",
    options: [
      "Přitiskněte je ke zdi — měly by přilnout",
      "Vznáší se na hladinu vody",
      "Jsou lehce průhledné",
      "Zakousněte se — uprostřed by měla zůstat malá bílá tečka",
    ],
    correctAnswer: "Zakousněte se — uprostřed by měla zůstat malá bílá tečka",
  },
  "cooking-20": {
    question: "Krupicová mouka používaná v sušených těstovinách se meleje z jakého druhu pšenice?",
    correctAnswer: "Tvrdá pšenice",
    aliases: ["Durum wheat", "Durum", "Pšenice durum", "Grano duro"],
  },
  "cooking-21": {
    question: "Co přidání škrobové vody z těstovin do omáčky zajišťuje?",
    options: [
      "Koření omáčku přidanou solí",
      "Zabraňuje připálení omáčky",
      "Chladí omáčku na teplotu podávání",
      "Pomáhá emulgovat a zahustit omáčku",
    ],
    correctAnswer: "Pomáhá emulgovat a zahustit omáčku",
  },
  "cooking-22": {
    question:
      "Pravda nebo nepravda: tvary těstovin s výrazně odlišnou dobou vaření lze vařit společně.",
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Nepravda",
  },
  "cooking-23": {
    question: "Přibližně kolik soli by se mělo přidat na litr vody na těstoviny?",
    options: ["1 g", "5 g", "20 g", "10 g"],
    correctAnswer: "10 g",
  },
  "cooking-24": {
    question:
      "Který tvar těstovin je obecně považován za nejlepší pro držení hustých, kouskovitých masových omáček?",
    options: ["Capellini", "Spaghetti", "Linguine", "Rigatoni"],
    correctAnswer: "Rigatoni",
  },
  "cooking-25": {
    question: 'Co je "soffritto"?',
    options: [
      "Technika dokončení těstovin v omáčce",
      "Způsob scezení těstovin",
      "Druh sýrové omáčky",
      "Jemné osmahnutí aromatické zeleniny (cibule, česnek, celer, mrkev) na oleji",
    ],
    correctAnswer: "Jemné osmahnutí aromatické zeleniny (cibule, česnek, celer, mrkev) na oleji",
  },
  "cooking-26": {
    question: "Pravda nebo nepravda: těstoviny by se měly podávat ihned po smíchání s omáčkou.",
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Pravda",
  },
  "cooking-27": {
    question: "Proč by mělo čerstvé těstové těsto odpočívat alespoň 30 minut před válením?",
    options: [
      "Aby se vejce plně vstřebala do mouky",
      "Aby těsto vychladlo",
      "Pro rozvoj silnější chuti",
      "Aby se uvolnil lepek, takže se těsto lépe vyvaluje",
    ],
    correctAnswer: "Aby se uvolnil lepek, takže se těsto lépe vyvaluje",
  },
  "cooking-28": {
    question:
      "Jak se jmenuje tradiční dlouhý dřevěný váleček z Emilia-Romagna, který se používá k ručnímu vyválení čerstvých těstovin?",
    correctAnswer: "Mattarello",
    aliases: ["Matterello"],
  },
  "cooking-29": {
    question: "Měly by se těstoviny vařit s pokličkou nebo bez?",
    options: [
      "S pokličkou po celou dobu",
      "Nejprve s pokličkou, pak bez ní",
      "Bez pokličky, pak s ní na konci",
      "Bez pokličky po celou dobu",
    ],
    correctAnswer: "Bez pokličky po celou dobu",
  },
  "cooking-30": {
    question:
      "Který druh sušených těstovin je vytlačován bronzovými formami, čímž získává hrubší texturu, která lépe drží omáčku?",
    options: [
      "Průmyslové sušené těstoviny",
      "Čerstvé vaječné těstoviny",
      "Gnocchi",
      "Řemeslné sušené těstoviny z bronzových forem",
    ],
    correctAnswer: "Řemeslné sušené těstoviny z bronzových forem",
  },
  "cooking-31": {
    question: "Proč je důležité vařit těstoviny ve velkém hrnci s dostatkem vody?",
    options: [
      "Aby vznikalo více páry",
      "Aby se vařily rychleji",
      "Aby se přidalo více soli",
      "Aby se těstoviny volně pohybovaly a vařily rovnoměrně",
    ],
    correctAnswer: "Aby se těstoviny volně pohybovaly a vařily rovnoměrně",
  },
  "cooking-32": {
    question: "Kdy je správný okamžik pro smíchání uvařených těstovin s omáčkou?",
    options: [
      "Po propláchnutí studenou vodou",
      "Jakmile trochu vychladnou",
      "Po přeložení do talíře",
      "Ihned po scezení, přímo v pánvi s omáčkou",
    ],
    correctAnswer: "Ihned po scezení, přímo v pánvi s omáčkou",
  },
  "cooking-33": {
    question: "Jaká je obecná zásada pro párování tvarů těstovin s omáčkami?",
    options: [
      "Všechny těstoviny fungují stejně dobře s jakoukoliv omáčkou",
      "Čerstvé těstoviny vždy se smetanou; sušené s rajčaty",
      "Dlouhé těstoviny jsou vždy nejlepší s kousky plnými omáčkami",
      "Tenké, jemné těstoviny se hodí k lehkým omáčkám; silné nebo rýhované k těžším omáčkám",
    ],
    correctAnswer:
      "Tenké, jemné těstoviny se hodí k lehkým omáčkám; silné nebo rýhované k těžším omáčkám",
  },
  "cooking-34": {
    question: "Při přípravě Carbonary — kdy se má přidat směs vejce a sýra k těstovinám?",
    options: [
      "Dokud je pánev stále na vysokém plameni",
      "Před scezením těstovin",
      "Po přidání ledové vody z těstovin",
      "Jakmile je pánev odstavena z ohně",
    ],
    correctAnswer: "Jakmile je pánev odstavena z ohně",
  },
  "cooking-35": {
    question:
      "Proč byste měli pro Cacio e Pepe nejprve vytvořit krém ze sýra a vody z těstovin — místo přidání sýra přímo do horké pánve?",
    options: [
      "Aby byla omáčka méně slaná",
      "Aby měla omáčka větší objem",
      "Aby těstoviny nevstřebaly příliš mnoho omáčky",
      "Aby se sýr nesrazil a netvořil hrudky",
    ],
    correctAnswer: "Aby se sýr nesrazil a netvořil hrudky",
  },
  "cooking-36": {
    question:
      "Jak se nazývá zkušená výrobkyně těstovinových plátů v tradici ručního válení z Emilia-Romagna?",
    options: ["Pastaia", "Cuoca", "Arzdora", "Sfoglina"],
    correctAnswer: "Sfoglina",
  },
  "cooking-37": {
    question:
      "Která chemická reakce dává zapečeným nebo opečeným těstovinám zlatohnědou barvu a oříškovou chuť?",
    options: ["Karamelizace", "Oxidace", "Gelatinizace škrobu", "Maillardova reakce"],
    correctAnswer: "Maillardova reakce",
  },
  "cooking-38": {
    question:
      "Pravda nebo nepravda: těstoviny z krupice tvrdé pšenice mají nižší glykemický index než těstoviny z měkké pšeničné mouky.",
    options: ["Pravda", "Nepravda"],
    correctAnswer: "Pravda",
  },
  "cooking-39": {
    question:
      "Na obalu je uvedena doba vaření 8 minut, ale chcete těstoviny dokončit v pánvi s omáčkou. O kolik minut dříve byste je měli scedit?",
    options: ["O 30 sekund dříve", "O 3 minuty dříve", "O 4 minuty dříve", "O 1–2 minuty dříve"],
    correctAnswer: "O 1–2 minuty dříve",
  },
  "cooking-40": {
    question:
      "Které z následujících tvrzení o celozrnných těstovinách (pasta integrale) je pravdivé?",
    options: [
      "Vaří se rychleji než obyčejné těstoviny",
      "Musí se podávat pouze s rajčatovou omáčkou",
      "Nepotřebují sůl ve vodě na vaření",
      "Obsahují více vlákniny a mají oříškovější chuť než těstoviny z bílé mouky",
    ],
    correctAnswer: "Obsahují více vlákniny a mají oříškovější chuť než těstoviny z bílé mouky",
  },
  "cooking-41": {
    question: 'Co znamená italské sloveso "scolare" v kontextu vaření těstovin?',
    options: ["Osolit vodu", "Promíchat těstoviny", "Naservírovat těstoviny", "Scedit těstoviny"],
    correctAnswer: "Scedit těstoviny",
  },
  "cooking-42": {
    question: 'Co je "pasta fredda"?',
    options: [
      "Nedovařené těstoviny podávané okamžitě",
      "Těstoviny, které byly uchovány v lednici a znovu ohřáty",
      "Těstoviny vařené bez tepla, namáčením ve studené vodě",
      "Studený těstovinový salát, typicky se zeleninou a olivovým olejem",
    ],
    correctAnswer: "Studený těstovinový salát, typicky se zeleninou a olivovým olejem",
  },
  "cooking-43": {
    question:
      "Řemeslné těstoviny z bronzových forem se suší při nízké teplotě (45–50 °C) až 50 hodin, ve srovnání s průmyslovým sušením při vysoké teplotě. Proč?",
    options: [
      "Protože bronz příliš rychle vede teplo při vyšších teplotách",
      "Aby se snížily výrobní náklady",
      "Aby těstoviny lépe odolávaly lámání při balení",
      "Aby se zachovaly bílkoviny a škroby a rozvinula se hlubší, oříškovější chuť",
    ],
    correctAnswer: "Aby se zachovaly bílkoviny a škroby a rozvinula se hlubší, oříškovější chuť",
  },
};
