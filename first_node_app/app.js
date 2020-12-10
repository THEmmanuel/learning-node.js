const fs = require('fs');

fs.readdir('./', (error, filess) => {
    if (error) (console.log(error))
    else console.log(filess);
})

