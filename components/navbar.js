// getting the navBar container html element into js
document.getElementById("navBar-container").innerHTML = navBar();

// function that will return the html element nav-container
function navBar(){
    return `<nav class="nav-container">
            <div class="nav-logo">
                <a href="./index.html">
                    <p>Home</p>
                </a>
            </div>
            <div class="nav-categories">
                <a href="./electronics.html">
                    <p>Electronics</p>
                </a>
                <a href="./jewelery.html">
                    <p>Jewellery</p>
                </a>
                <a href="./mens-clothing.html">
                    <p>Mens Clothing</p>
                </a>
            </div>
            <div class="nav-auth">
                <a href="./login.html">
                    <p>Login</p>
                </a>
                <a href="./signup.html">
                    <p>Sign Up</p>
                </a>
            </div>
        </nav>`
}

export default navBar