// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
    return axios.get(url);
}

fetchUser().then((response) => {
    // 자동 완성으로 오타를 방지할 수 있음
    return response.address;
})

function startApp() {
    fetchUser()
        .then(function (response) {
            console.log(response);
            user = response.data;

            username.textContent = user.name;
            email.textContent = user.email;
            address.textContent = user.address.street;
        })
        .catch(function (error) {
            console.log(error);
        });
}

startApp();
