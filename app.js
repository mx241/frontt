// SET COOKIE
function setCookie(name, value, dayToLive) {
  const date = new Date();
  date.setTime(date.getTime() + dayToLive * 24 * 60 * 60 * 1000);

  const expires = "expires=" + date.toUTCString();

  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// GET COOKIE
function getCookie(name) {
  const decodedCookies = decodeURIComponent(document.cookie);

  const cookiesArray = decodedCookies.split("; ");

  let result = null;

  cookiesArray.forEach((cookie) => {
    // search for cookie [name]
    if (cookie.indexOf(name) === 0) {
      result = cookie.substring(name.length + 1);
    }
    
  });

  return result;
}

// DELETE COOKIE
function deleteCookie(name) {
  setCookie(name, null, null);
}

// LOGIN

function login() {
  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    setCookie("loggedInUser", username, 3);

    document.getElementById("loggedIn").style.display = "block";

    document.getElementById("user").textContent = username;

    document.getElementById("loginForm").style.display = "none";
  } else {

    alert("please enter a valid username or password");
  }
}
// LOGOUT

function logout() {
  deleteCookie("loggedInUser");

  document.getElementById("loginForm").style.display = "flex";

  document.getElementById("loggedIn").style.display = "none";
}

// CHECK IF USER ALREADY LOGGED IN OR NOT

window.onload = function () {
  const loggedInAdmin = getCookie("loggedInUser");

  if (loggedInAdmin) {
    document.getElementById("loggedIn").style.display = "block";

    document.getElementById("user").textContent = loggedInAdmin;

    document.getElementById("loginForm").style.display = "none";
  }
};