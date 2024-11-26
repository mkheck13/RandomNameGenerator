
// 
let newName = document.getElementById("newName");
let nameBtn = document.getElementById("nameBtn");
let nameList = document.getElementById("nameList");
let codeStackEmail = document.getElementById("codeStackEmail");
let personalEmail = document.getElementById("personalEmail");

maxNames = 5;
nameArray = [];

// Fetching data
function getNameData(){
    return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data.names;
    });
};
getNameData();

// Getting Random Name
function getRandomName(names){
    let randomNameIndex = Math.floor(Math.random() * names.length);
    console.log([randomNameIndex]);
    return names[randomNameIndex];
};

// Event Listener
nameBtn.addEventListener("click", () => {
    getNameData().then(names => {
        let randomName = getRandomName(names);
        console.log(randomName);
        
        // Displaying Name and Emails
        newName.innerText = `${randomName.firstName} ${randomName.lastName}`
        codeStackEmail.innerText = `${randomName.codeStack}`
        personalEmail.innerText = `${randomName.email}`

        nameArray.push(randomName)

        // Displaying the last 5 generated
        let listItem = document.createElement('ul')
        listItem.textContent = `${randomName.firstName} ${randomName.lastName} ${randomName.codeStack} ${randomName.email}`
        nameList.appendChild(listItem);

        if(nameArray.length > maxNames){
            nameArray.shift();
        }
        nameList.innerText = "";

        for(let i = 0; i < nameArray.length; i++){
            let listItem = document.createElement('p');
            listItem.textContent = `Name: ${nameArray[i].firstName} ${nameArray[i].lastName}`

            let listItem2 = document.createElement('p');
            listItem2.textContent = `CodeStack Email: ${nameArray[i].codeStack}`

            let listItem3 = document.createElement('p');
            listItem3.textContent = `Email: ${nameArray[i].email}`

            let listItem4 = document.createElement('hr');
            listItem4.textContent = ` `
            
            nameList.appendChild(listItem);
            nameList.appendChild(listItem2);
            nameList.appendChild(listItem3);
            nameList.appendChild(listItem4);

        }
    })
});