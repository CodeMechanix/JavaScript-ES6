// When Undefiner pararameter scenarion we use rest operator

const test = (name, age, ...data) => {

    console.log(name, age, data); //Hasan 27 [10, 20, 30]
    
    console.log(name, age); // Hasan 27
    for(let i = 0; i < data.length; i++){
        console.log(data[i]);
        // 10
        // 20
        // 30
    }
}

test("Hasan", 27, 10, 20, 30);