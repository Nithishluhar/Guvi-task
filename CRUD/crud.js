let data = [
    {name :"Nithish" , age :24},
    {name :"Mani" , age :27},
]
function displayData() {
    const dataRows = document.getElementById("tableRows")
  //console.log(dataRows); 
   dataRows.innerHTML = "";

 data.forEach((item,index) =>{
    const row = `
    <tr>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>
    <button type="button"  class="btn btn-info " index = ${index}>Edit</button>
    <button type="button"  class="btn btn-danger " index = ${index}>Delete</button>
    </td>
    </tr>`
 dataRows.insertAdjacentHTML("beforeend",row)
 

 }) 
}
//handle form submit
function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const AgeInput = document.getElementById("age");

    const name = nameInput.value.trim();
    const age = parseInt(AgeInput.value);

    nameInput.value = "";
    AgeInput.value ="";

    data.push ({name,age});
    displayData();
    }

  
 function handleDeleteClick(event){
        // alert("delete")
        const index = event.target.getAttribute("index") ;
        data.splice(index,1);
        displayData();


      }
           
function  handleEditClick(event){
const index = event.target.getAttribute("index") ;
const recod = data[index];
console.log (recod );

// alert(recod.name +" "+ recod.age)

const nameInput = document.getElementById("name");
const AgeInput = document.getElementById("age");


nameInput.value = recod.name;
AgeInput.value =recod.age;

data.splice(index,1);
displayData();
 }

document.getElementById("crudForm").addEventListener("submit",handleFormSubmit);

document.getElementById("tableRows").addEventListener("click",(event)=> {
    //alert(event.target.classList)
    if (event.target.classList.contains( "btn-danger")){
        handleDeleteClick(event);

     }
    else if (event.target.classList.contains( "btn-info")){
        handleEditClick(event);
    }
       
} );
    
        

displayData();
