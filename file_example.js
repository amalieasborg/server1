const fs=require('fs');


let data='Hej baby';
fs.writeFile("books.txt", data, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
    }
});

fs.readFile('books.txt', 'utf8', function (err, data) {
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
