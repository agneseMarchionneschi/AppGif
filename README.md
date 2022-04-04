# GiphyApp
L'applicazione ha una struttura semplice ed essenziale. All'avvio mostra le dieci Gif più "trend", ottenute con l'apposita chiamata all'API, permette all'utente di effettuare la ricerca di Gifs dando una stringa in input e premendo il pulsante con l'icona della ricerca. 

Lo scorrimento delle Gifs è gestito con un Infinite Scroll che dinamicamente carica tutti gli elementi che vengono restituiti dopo aver premuto il pulsante di ricerca. Vi è la possibilità di aggiungere le Gifs ad una lista preferiti, per eseguire questo task ho fatto uso del Local Storage. Cliccando su una Gif si aprirà un dialog per visualizzare il dettaglio della Gif selezionata. 


Purtroppo per mancanza di tempo non sono riuscita a implementare la logica per dare all'utente la possibilità di ordinare le Gifs ricercate sulla base della data di Upload ascendente oppure discendente, è infatti presente solamente l'input per la selezione nell'interfaccia.

Per realizzare l'interfaccia utente dell'applicazione, ho utilizzato la libreria Angular Material, dal momento che offre elementi versatili e di qualità, utili allo scopo di comporre rapidamente un'interfaccia.

##  Testing
Per testare l'applicazione è sufficiente lanciare`npm install`, successivamente `ng serve` e navigare su `http://localhost:4200/`
