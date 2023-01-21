// 1. API URL
const url = 'https://jsonplaceholder.typicode.com/users';

//2. Fetch users from the API
function fetchUsers(){
    //Make use of the browser fetch API
    fetch(url)
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
}

//4. Add a search function to the DOM


//5. calling the function 
fetchUsers();