//1)
    //Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
    var studente = {
        "nome":['Mario'],
        "cognome":['Rossi'],
        "età":[16],
    };

    //Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
    for (var key in studente) {
        console.log(studente[key]);
        console.log(studente + ":", studente[key]);
    }

//2)
    //Creare un array di oggetti di studenti.
    var studenti =
    [
            {
                "nome":['Mario'],
                "cognome":['Rossi'],
                "età":[15],
            },

            {
                "nome":['Maria'],
                "cognome":['Verdi'],
                "età":[16],
            },

            {
                "nome":['Franco'],
                "cognome":['Bianchi'],
                "età":[17],
            },
    ];

    //Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
    for (var key in studenti) {
        console.log(studenti[key]['nome'], studenti[key]['cognome']);
        console.log(studenti[0]['nome'], studenti[0]['cognome']);
    }


//3)
    //Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

        var nuovoStudente = {
            "nome":[],
            "cognome":[],
            "età":[],
        };
         studenti.push(nuovoStudente);


        var nuovoNome = prompt("Inserisci il nome");
        var nuovoCognome = prompt("Inserisci il cognome");
        var anni = prompt("Inserisci l'età")

        studenti[3].nome.push({
            nome: nuovoNome,
        })
        studenti[3].cognome.push({
            cognome: nuovoCognome,
        })
        studenti[3].età.push({
            età: anni,
        });


        console.log(studenti);
        console.log(studenti[3]);



