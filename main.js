
// document.getElementById('sa').innerHTML="saad tayel saad mohamed";
// console.log("hallo consol");
// var useeName ="saad tayel";
// var userAge =21;
// var saad = false
// var mariem = null
// console.log (typeof(useeName))
// console.log (typeof(userAge))
// console.log (typeof(saad))
// console.log (typeof(mariem))

// var x=window.prompt("enter your age")

// if(x>=21){
//     console.log(" welcome in grop")
// }
// else{
//    console.log("sorry, donot age low")
// }


// var user =window.prompt("ENTER YOUR DOMAIN")

// if(user=="admin"){
//     console.log("ADD USER, DELETE USER,MODIFY")
// }
// else if (user=="user"){
//     console.log("shoping,buy,contant")
// }
// else if(user=='manger'){
//     console.log("collecion,prossing")
// }
// else{
//     console.log('sorry,donot finde')
// }
// switch(user){
//     case('admin'):
//         console.log("ADD USER, DELETE USER,MODIFY")
    
//     break;
//     case('user'):
//         console.log("shoping,buy,contant")
//     break;
//     case('manger'):
//     console.log("collecion,prossing")
//     break;
//     default:
//         console.log('sorry,donot finde')
//         break;
// }
// var cartona="";
// for( i=0;i<100;i++){
//     cartona+=`
//     <div class="item">
//     <h1>SA3D TAYEL</h1>
   
// </div>
//     `
// }

// document.getElementById('demo').innerHTML= cartona;

// function getAvrg (num1,num2){
//     var sum=num1+num2
// var result = sum /2
// return result;

// }
// var num1=Number(window.prompt('Enter First Number')) 
// var num2=Number(window.prompt('Enter Second Number'))
// var avg = getAvrg(num1,num2)


// function getprodect (price,ads,tx,profit){
//     var price1=price+ads;
//     var result = price1-(price1*tx);
//     var finelresult = result +profit;
//     console.log(finelresult)
// }
// getprodect(100,20,0.2,avg)





// var x =window.prompt('ENTER YOUR NUMBER')

// if(x%3==0 && x%4==0){

//     document.getElementById('demo').innerHTML=(' output yes')
// }
// else{
//     document.getElementById('demo').innerHTML=(' output no')
  
// }


// var x =window.prompt('ENTER YOUR FIRST NUMBER')
// var y =window.prompt('ENTER YOUR SECOND NUMBER')
// if(x>y){
//     console.log(x)
// }
// else{
//     console.log(y)
// }


// var peodect={
//     name:'saad tayel saad',
//     age:21,
//     wife:'mariem',
// };
// console.log(peodect.wife)


// var frindes=['saad','ahmed','mostfa','mohamed','elsayed']
// for(i=0;i<frindes.length;i++){

//     console.log(frindes[i])

// }

//////////////////////////////////////////first project////////////////////////////////////

// var userName= document.getElementById('fname')
// var userAge= document.getElementById('fage')
// var userPlace= document.getElementById('fplace')
// var userCollage= document.getElementById('fcollage')

// var infoUser
// if(localStorage.getItem('infoperson') != null){
//     infoUser=JSON.parse(localStorage.getItem('infoperson'));
//   displayInfo(infoUser)
// }
// else{
//     infoUser=[];
// }

// function send(){
// var user ={name:userName.value,age:userAge.value,place:userPlace.value, collage:userCollage.value}
// infoUser.push(user);
// localStorage.setItem('infoperson',JSON.stringify(infoUser))
// console.log(infoUser)
// clearData()
// displayInfo(infoUser)

// }


// function clearData(){
//     userName.value="";
//     userAge.value="";
//     userPlace.value="";
//     userCollage.value="";
// }

// function displayInfo(listIfno){
//     var cartona=``;
//     for( var i=0;i<listIfno.length;i++){
//         cartona+=`
//          <tr >
//       <td style="padding-top: 20px;">`+listIfno[i].name+`</td>
//       <td style="padding-top: 20px;">`+listIfno[i].age+`</td>
//       <td style="padding-top: 20px;">`+listIfno[i].place+`</td>
//       <td style="padding-top: 20px;">`+listIfno[i].collage+`</td>
//       <td style="padding-top: 20px;"><button  style="display: inline-block;width: 90px;height: 25px;background-color: blue;color: white;border-radius: 5px;border: none;cursor: pointer;">Update</button></td>
//       <td style="padding-top: 20px;"><button  style="display: inline-block;width: 90px;height: 25px;background-color: blue;color: white;border-radius: 5px;border: none;cursor: pointer;">Delete</button></td>
//     </tr>
//         `
//     }
//     document.getElementById('bodyText').innerHTML = cartona;
// }
// function searchProdact(searchterm){
//     var searchResult=[]
//     for (var i=0;i<infoUser.length;i++){
//         if(infoUser[i].name.toLowerCase().includes(searchterm.toLowerCase()) == true){
//             searchResult.push(infoUser[i])
//         }
//     }
//     displayInfo(searchResult)
// }

document.addEventListener('keydown', function(event) {
   
  if (event.key === "F12") {
      event.preventDefault();
  }
 
  if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      event.preventDefault();
  }
  
  if (event.ctrlKey && event.key === 'U') {
      event.preventDefault();
  }
});
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});


var userName = document.getElementById('fname');
var userage = document.getElementById('fage');
var userplace = document.getElementById('fplace');
var usercollage = document.getElementById('fcollage');
var infoUser;
var add = document.getElementById('butom');
var updateBtn = document.getElementById('updateBtn');


const progressBar = document.getElementById("progress-bar");
const progressLabel = document.getElementById("progress-label");

let progress = 0;


function updateProgress(value) {
  progress = Math.min(progress + value, 100);
  progressBar.style.width = `${progress}%`;
  progressLabel.textContent = `${progress}%`;
}


function fieldUpdated() {
  let filledFields = 0;
  
  if (userName.value) filledFields += 1;
  if (userage.value) filledFields += 1;
  if (userplace.value) filledFields += 1;
  if (usercollage.value) filledFields += 1;
  
  progress = (filledFields / 4) * 100; 
  progressBar.style.width = `${progress}%`;
  progressLabel.textContent = `${progress}%`;
}


userName.addEventListener('input', fieldUpdated);
userage.addEventListener('input', fieldUpdated);
userplace.addEventListener('input', fieldUpdated);
usercollage.addEventListener('input', fieldUpdated);

function send() {
  if (prodectinfo() == true) {
    var user = { name: userName.value, age: userage.value, place: userplace.value, collage: usercollage.value };
    infoUser.push(user);
    localStorage.setItem('iformation', JSON.stringify(infoUser));
    console.log(infoUser);
    clear();
    displayInfo(infoUser);
    updateProgress(100); 
  } else {
    alert('invalid');
  }
}

 
resetBtn.addEventListener("click", () => {
  progress = 0; 
  progressBar.style.width = `${progress}%`;   
  progressLabel.textContent = `${progress}%`;  
  clear();  
});
