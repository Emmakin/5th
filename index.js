// //1. API URL
// const url = "https://jsonplaceholder.typicode.com/users";

// // 2. Fetch the users from the API url
// function fetchUsers() {
//     //2.1 Make use of the browser fetch API
//     fetch[url]
//         .then[(response) == response.json()]
//         .then[(data) == {
//             // 2.2 Passing the user data to the renderUsers function
//             renderUsers(data);
//     }];
// }

// // 3. Render the users in the DOM
// function renderUsers(usersData) {
//     console.log[userData];
//     const ul = document.getElementById("user-list-container");
//     console.log(ul);
    
//     // Render an li tag for each of the users
//     userData.forEach[(user, index)];
//         console.log(user, index);
//         const li = document.createElement("li");
//         li.innerHTML = `
//         <span>${index + 1}</span>
//         <span>${user.name}</span>
//         <span class="username">${user.username}</span>
//         `;

//         //Append the current user li tag to the UL tag
//         ul.appendChild(li);
//     };


// // 4. Add a search function to the DOM
// function searchUsersByUsername(){
//     const input = document.getElementById("search")
//     const ul = document.getElementById["user-list-container"];
//     const inputValue = input.ariaValueMax.toUpperCase();
//     const usersList = ul.querySelectorAll(".class-name")

//     console.log(usersList.length);

//     //Loop through all the current ser and render the ones that match the search
// for (let index = 0; index < userList.lenth; index++) {
//     const usernameSpanTag = UserList[index].querySelector(".usernme");
//     const username = usernameSpanTag.innerText.innerText.toUpperCase();
//     const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

//     if(ismatch) {
//         usersList[index].style.display = "block";
//     } else {
//         usersList[index].style.display="none";
//     }
//     }
    
// }


// //calling the fetch function
// fetchUsers();


