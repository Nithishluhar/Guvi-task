//for
var car  =["bmw","2023"];
for(let i =0;i<car.length; i++){
    console.log(car[i]);

}
//for each
var car1 =["bmw","Audi"];
car1.forEach((e,index)=>{
    console.log(e,"-",index);
})
//for in 
var car2 ={"Name--" :"benz","brand--":"Audi"};
for (let a in car2) {
    console.log(a);
    console.log(car2[a]);
    
    }
//for of
var car3 =["bmw","Audi"];
for(let b of car3){
    console.log(b);
}

