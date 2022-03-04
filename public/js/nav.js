const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
            <h1><a href="#" class="logo">ArticWorld</a></h1>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search">
                    <button class="search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">product</a></li>
            <li class="link-item"><a href="#" class="link">About</a></li>
            <li class="link-item"><a href="#" class="link">New Comings</a></li>
            <li class="link-item"><a href="#" class="link">sales</a></li>
        </ul>
    `;
}

createNav();