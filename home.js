const addToData = require('./addData');
const getData = require('./getData');
const updateData = require('./updateData');
const deleteData = require('./deleteData');
const readline = require('readline');
const { questionData } = require('./index');
const dataId = require('./getDataId');
const fs = require('fs')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


const choice = async () => {
    while (true) {
        console.log("------------------ Menu Home ------------------");
        const menu = ['1. Add data', '2. Read data', '3. Find data', '4. Update data', '5. Delete data', '6. Exit'];
        for (const name of menu) {
            console.log(name);
        };

        const input = await questionData('------------------ \nEnter your choice: ')
        switch (Number(input)) {
            case 1:
                await addToData();
                break;
            case 2:
                getData();
                break;
            case 3:
                await dataId();
                break;
            case 4:
                await updateData();
                break;
            case 5:
                await deleteData();
                break;
            case 6:
                console.log('Thank you, You have exited the program.');
                rl.close();
                return;
            default:
                console.log('Invalid option!!');
                break;
        };
    }
};

choice();
