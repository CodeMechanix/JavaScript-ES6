function setData(id, name){
    id ? id = id : id = 2;
    name ? name = name : name = "No Name";
    console.log(id, name);
}
setData(); // 2 "No Name"

const setDataAgain = (id = 2, name = "No Name") =>{
    console.log(id, name); 
}

setDataAgain(); // 2 "No Name"
setDataAgain(5, "Hasan"); // 5 "Hasan"



