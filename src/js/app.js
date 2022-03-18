document.addEventListener("DOMContentLoaded", () => {
    // const total = document.querySelectorAll(".section");
    const up = document.querySelector(".up");
    const down = document.querySelector(".down");

    new fullpage("#fullpage", {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: "left",
        navigationTooltips: ["firstSlide", "secondSlide"],
        afterLoad: () => {
            const obj = fullpage_api.getActiveSection();
            const page = document.querySelector(".page");
            page.innerText = `0${obj.index + 1}`;
        },
        normalScrollElements: ".first__content",
    });

    up.addEventListener("click", () => {
        fullpage_api.moveSectionUp();
    });

    down.addEventListener("click", () => {
        fullpage_api.moveSectionDown();
    });

    // BURGER
    let burger = document.querySelector(".burger");
    let menu = document.querySelector(".menu");
    let body = document.querySelector("body");

    burger.addEventListener("click", function () {
        event.preventDefault();
        burger.classList.toggle("burger_active");
        menu.classList.toggle("menu_active");
        body.classList.toggle("body_fixed");

        document.addEventListener("click", function (event) {
            if (event.target.classList.contains("menu__link")) {
                burger.classList.remove("burger_active");
                menu.classList.remove("menu_active");
                body.classList.remove("body_fixed");
            }
        });
    });
});
