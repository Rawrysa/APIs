const fs = require('fs'); // Allows us to work with the file system of the computer

// // Exports as a function without parameters
module.exports = ()=> {

    // Reads data from the text file and executes it
    fs.readFile('./random.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err); //Outputs any errors encountered 
            return;
        }
        eval(data);});
}