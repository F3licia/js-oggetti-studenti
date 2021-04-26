//1)
    //Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
    var studente = {
        nome:'Mario',
        cognome:'Rossi',
        età:16,
    };

    //Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
    for (var key in studente) {
        console.log(key + ": " + studente[key])
    }

//2)
    //Creare un array di oggetti di studenti.
    var studenti =
    [
         {
            nome:'Mario',
            cognome:'Rossi',
            età:16,
        },

        {
            nome:'Maria',
            cognome:'Verdi',
            età:16,
        },

        {
            nome:'Franco',
            cognome:'Bianchi',
            età:16,
        },

    ];

    //Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
    for (var key in studenti) { 
        console.log(studenti[key]['nome'], studenti[key]['cognome']);
    }


//3)
    //Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

    
    var mappa = {
        0:{
           domanda: "Inserisci il nome",
           chiave: "nome" 
        },
        1:{
            domanda: "Inserisci il cognome",
            chiave: "cognome" 
         },
         2:{
            domanda: "Inserisci l'età",
            chiave: "età" 
         }
    };
    
    
    var nuovoStudente = {}

    for(var i= 0; i < 3; i++ ) {
      var nuovo = prompt(mappa[i].domanda);
       nuovoStudente[mappa[i].chiave] = nuovo;

            if((mappa[i].domanda === mappa[0].domanda) && !isNaN(nuovo) ||
                (mappa[i].domanda === mappa[1].domanda) && !isNaN(nuovo)){

                alert("Inserisci correttamente i dati");
                i--;
            } else if ((mappa[i].domanda === "Inserisci l'età") && isNaN(nuovo)){
                alert("Inserisci l'età");
                i--;
            }
       studenti.push(nuovoStudente);
    }

    
    console.log(studenti[3]);
    


