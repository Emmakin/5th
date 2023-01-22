// 1. API URL
const url = "idkd"

//2. Fetch users from the API
function fetchUsers(){
    //Make use of the browser fetch API
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        //passing the user data to the data function
        renderUsers(data);
    });
}

fetchUsers();

//3. Render the user in the DOM
function renderUsers(usersData){
    console.log('from renderUsers')
    console.log(usersData);
    const ul = document.getElementById('user-list-container');
    console.log(ul);


    //Render an li tag for each of the users
    usersData.forEach((user,index) => {
       console.log(user, index);
       const li = document.createElement('li'); 
       li.innerHTML = ` 
       <span>${index + 1}. </span>
       <span class="name">${user.name}</span>
       <span></span>
       <span class="username">${user.username}</span>
       `;

       //Append the current user li tag to the UL tag
       ul.appendChild(li);
    });
}

//4. Add a search function to the DOM
function searchUserByUsername(){
    const input = document.getElementById('search');
    const ul = document.getElementById('user-list-container');
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll('li'); //array of all the li tag []

    console.log(usersList[2]);

    //Loop through all the user and render the ones that matches the search
    for(let index=0; index < usersList.length; index++){
        const usernameSpanTag = usersList[index].querySelector(".username")
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
        if(isMatch){
            usersList[index].style.display = "block";
           }else{
            usersList[index].style.display = "none";
           }
        
        }
}



//5. Calling the function 
fetchUsers();