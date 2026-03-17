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
    question: "Jak se jmenují velké, ploché, široké placky těstovin používané v lasagni?",
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
      'Rigatoni znamená "rýhované" v italštině. Pravda nebo nepravda — rigatoni má rýhy na vnější straně?',
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
    question: "Která dlouhá, plochá pásková těstovina je tradičním tvarem z Emilia-Romagna?",
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
    question: 'Která mušlovitá těstovina nese název z italského slova pro "mušle"?',
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
    question: "Jak se jmenuje krátká, zahnutá těstovina ve tvaru lokte, oblíbená v mac & cheese?",
    correctAnswer: "Macaroni",
    aliases: ["Elbow macaroni", "Gomiti", "Loktová těstovina"],
  },
  "shapes-19": {
    question:
      "Která těstovina se skládá z náplně uzavřené mezi dvěma tenkými vrstvami těsta, obvykle čtvercová nebo kulatá?",
    correctAnswer: "Ravioli",
  },
  "shapes-20": {
    question:
      'Která ultra-tenká těstovina má přezdívku "andělské vlasy" a je tenčí než vermicelli?',
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
    question: "Která bohatá, pomalu vařená masová omáčka pochází z Boloně?",
    correctAnswer: "Bolognese",
    aliases: ["Ragù alla Bolognese", "Ragù", "Ragu"],
  },
  "sauces-6": {
    question: "Omáčka Puttanesca tradičně obsahuje která z následujících ingrediencí?",
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
    question: "Pasta alle vongole obsahuje jaké mořské plody?",
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
};
