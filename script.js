let myTodos = document.createElement("ul");
let inputText = document.querySelector(".my-input");
myTodos.className = "myUl";
myTodos.style.textAlign = "center";
let mainBody = document.body;
let myStrike = document.createElement("del");
mainBody.appendChild(myTodos);


// TODO: function called when button is triggred
function myTodFunc() {

    if(inputText.value == ""){
        alert("Enter some value");
        return;
    }

    let myText = inputText.value;
    //creating div
    let myDiv = document.createElement("div");
    myDiv.className = "my-div";


    //input checkbox
    let myCheckbox = document.createElement("input");
    myCheckbox.className = "my-checkbox";
    myCheckbox.type = "checkbox";
    myCheckbox.style.position = "absolute";
    myCheckbox.style.left = "2rem";
    myCheckbox.style.marginTop = "30px";
    myDiv.appendChild(myCheckbox);



    //creating myLi
    let myLi = document.createElement("li");
    myLi.className = "myLi";
    myLi.style.display = "inline-block";
    myLi.style.fontSize = "50px";
    myLi.textContent = myText;
    myDiv.appendChild(myLi);


    //button
    let a = document.createElement("a");
    a.textContent = "X";
    a.href = "javascript:void(0)";
    a.className = "remove";
    a.style.marginLeft = "20px";
    a.style.position = "absolute";
    a.style.right = "5px";
    a.style.marginTop = "25px";
    a.style.padding = "10px"
    a.style.width = "10rem"
    myDiv.appendChild(a);
    

    //appending inside ul tag
    myTodos.appendChild(myDiv);

    //if remove button is clicked remove that li
    a.addEventListener("click", () => {
        myDiv.remove();
    })

    inputText.value = "";

    //TODO:if checked
    myCheckbox.addEventListener("click", (e) => {
       if(myCheckbox.checked){
        myLi.style.textDecoration = "line-through";
       }
       else{
        myLi.style.textDecoration = "none";
       }
    });



}
