class Movie{ 
    constructor(title,studio,rating){
        this.title= title ;
        this.studio =title;
        this.rating = rating;
    
    }
getPG(){
    return this.rating;
}
}
var a= new Movie ("Casino Royale","Eon Productions","PG­13");
console.log(a.getPG());
