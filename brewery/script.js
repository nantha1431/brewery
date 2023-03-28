/* Set a Title */

const header=document.createElement("h1");
header.setAttribute("class","header text-center")
header.innerText="Brewery Details"

/* Creating a Tag and setting the class and innerText. */

const Discription=document.createElement("h5");
Discription.setAttribute("class","discription  text-center");
Discription.innerText=" Here You Can View The Details Of Brewery"

/* Setting the class attribute to the container */

const container= document.createElement("div");
container.setAttribute("class","container");

const div1=document.createElement("div");
div1.setAttribute("class","container-fluid d-flex justify-content-around bg-secondary bg-gradient ");
div1.setAttribute("id","main1");

/* Setting the id attribute to search. */

var search=document.createElement("select");
search.setAttribute("id","search");

/* This is for creating Options */

const firstOption=document.createElement("option");
firstOption.innerText="Select Brewery";
search.append(firstOption);

/* This is for Creating a Search button */

const button=document.createElement("button");
button.setAttribute("class","btn btn-primary");
button.textContent="search";

/*This is for Creating a Reset Button */

const reset=document.createElement("button");
reset.setAttribute("class","btn btn-danger")
reset.setAttribute("id","reset")
reset.textContent="Reset";

/*This is for Creating a About Button */

const button2=document.createElement("button");
button2.setAttribute("class","btn btn-primary");
button2.textContent="About";

/* Appending the Buttons */

div1.append(search,button,reset,button2);

/* This is for creating a div element */

var div2=document.createElement("div");
div2.setAttribute("class","mt-2 row");
div2.setAttribute("id","bodys")

/* This is creating a div element */

var div3=document.createElement("div");
div3.setAttribute("class","row container m-auto mt-3 main2");

/* This is creating a div element */

var div4=document.createElement("div");
div4.setAttribute("class","row container m-auto mt-3 main2");

/* This is appending the those abpube all to the Body*/

 container.append(header,Discription,div1,div2);
 document.body.append(container);


  /* It fetches data from the API */



 async function foo(){
    let res=await fetch("https://api.openbrewerydb.org/breweries");
    let data=await res.json();
    
    var names=[];
    
    try{data.forEach(element => {
        names.push(element.name);
        const beer=document.createElement("div");
        beer.setAttribute("id","card")
        beer.setAttribute("class","carrs col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3 m-auto d-flex justify-content-around")
        beer.innerHTML=`<div class="card " style="width: 20rem;">
    
        <div class="card-body" >
        <p class="card-text text-left"><b>Brewery Name : ${element.name}</b></p>
        <p class="card-text mt-5">Brewery Type :${element.brewery_type}</p>
        <p class="card-text">Phone Number : ${element.phone},</p>
        <p class="card-text">Address : ${element.street},${element.city},${element.state},${element.postal_code}</p>
        <p class="card-text">Visit Website :${element.website_url}</p>
        </div>
    
        </div>`   
        div2.append(beer)
});
for (const val of names){
    var option = document.createElement("option");
    option.setAttribute("id","optionValue")
    option.value = val;
    option.innerText=val;
    search.append(option);
}
}
catch{
    console.log("Somthing is wrong")
}

}
foo()

/*For search Options*/

button.addEventListener("click",async()=>{
    function Alert() {
        alert ("Hi. Dont Forget To use Reset For Each Search");
      }Alert();
    
    var beer1=document.getElementById("bodys");
    beer1.style.display="none" ;

    var divmain=document.getElementById("main1");
    divmain.style.display="none" ;

    
    
    const inputs=document.getElementById("search").value;
    let res=await fetch("https://api.openbrewerydb.org/breweries");
    let data=await res.json();
    
    try{data.forEach(elements => {
        if(elements.name==inputs){
            const beers=document.createElement("div");
            beers.setAttribute("id","cards")
            beers.setAttribute("class","carrs col-mt-4 mt-4 mb-4 d-flex justify-content-around")
            beers.innerHTML=`<div class="card " style="width:18rem;">
            <div class="card-body text-rigth" id="gg">
            <p class="card-text text-left"><b>Brewery Name : ${elements.name}</b></p>
        <p class="card-text mt-5">Brewery Type :${elements.brewery_type}</p>
        <p class="card-text">Phone Number : ${elements.phone},</p>
        <p class="card-text">Address : ${elements.street},${elements.city},${elements.state},${elements.country},${elements.postal_code}</p>
        <p class="card-text">Visit Website :${elements.website_url}</p>
            </div>
            <p><strong><mark style="background-color:yellow"> First Click Above and After Click Reset for New Search For Better Experience</mark></strong></p>
            </div>`
            div3.append(beers); 
            document.body.append(div3) 
            elements.characters.slice(5,10).forEach(
                async (chars)=>{
                    var res1=await fetch(chars);
                    var data1=await res1.json();
                    var card=document.getElementById("gg")
                    var p=document.createElement("p");
                    p.setAttribute("class","card-text");
                    p.innerText=`Characters: ${data1.name}`;
                    card.append(p);
                });
            }
    });
    reset.addEventListener("click",()=>{
    location.reload();
    });
}
catch{
    console.log("Somthing went wrong")
}
})



// About Section

button2.addEventListener("click",()=>{
    var beer2=document.getElementById("bodys");
   

    reset.addEventListener("click",()=>{
        location.reload();
    });
    
    beer2.style.display="none" ;
    const para=document.createElement("div");
    para.innerHTML=`<h2><center> hi There...</center></h2>
    <h5>* Characters Only Show After Searching Specific Company Details *</h5>
    <h5>* Just Select The brewery Company And See The Datails *</h5>
    <h5>* After the search Use Reset For Better Experience *<h5>
    <h5>* This Page About Displaying brewery Company Name , Type ,Address Details,Phone Numbers and Their Websites *
    </h5>`
    div4.append(para); 
    document.body.append(div4) 

})
