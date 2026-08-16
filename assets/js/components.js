document.addEventListener("DOMContentLoaded", function () {

    fetch("/components/navbar.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("navbar-container").innerHTML = data;

            // Wait until navbar is inserted
            const navbar = document.getElementById("mainNavbar");

            if (navbar) {

                const navbarOffset = navbar.offsetTop;

                window.addEventListener("scroll", function () {

                    if (window.pageYOffset > navbarOffset) {
                        navbar.classList.add("sticky-navbar");
                    } else {
                        navbar.classList.remove("sticky-navbar");
                    }

                });

            }

        })
        .catch(error => console.error("Navbar load error:", error));

});



    // Footer
    fetch("/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });