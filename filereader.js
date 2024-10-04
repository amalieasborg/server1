const fs=require("fs");

console.log("Starter læsning af fil...\n")

//Læs en fil asynkront
fs.readFile('tekstfil.txt', 'utf8', function (err, data) {
   //Callback-funktion, der bliver kaldt, når filen er læst færdigt

    //Hvis der opstod en fejl under læsningen af filen
    if (err) {
        //udskriv fejlinformationen og stop udførelsen
        return console.log(err);
    }
    //Hvis læsningen af filen var succesfuld
    //udskriv filens indhold
    console.log("Filens indhold: \n"+data);
});

console.log("Denne besked vises før filen er læst færdig.\n")