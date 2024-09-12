const fs = require('fs');

const dati = 'Buongiorno, mi presento, sono un file di testo!';

const percorsoFile = 'output.txt';

fs.writeFile(percorsoFile, dati, (errore) => {
  if (errore) {
    console.error('Errore durante la scrittura del file:', errore);
  } else {
    console.log(`Il file ${percorsoFile} è stato scritto con successo.`);
  }
});