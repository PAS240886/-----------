import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([
        {
        message: "Type in your URL:",
        name: "URL"
    },
])
    .then ((answers)=>{
        const url = answers.URL;
        const qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_File.png"));

        fs.writeFile("qr.txt", url, (err) => {
            if (err) throw err;
            console.log ("The file has been saved")
            })
    })
    .catch ((error) => {
        if (error.isTtyError) {

        } else {

        }
    });

// const fs = require ("fs");

// 
// fs.readFile("./message.txt", (err, data) => {
//     if (err) throw err;
//     console.log (data);
// });