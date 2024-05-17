





document.addEventListener("DOMContentLoaded", function () {
    let accordionItems = document.querySelectorAll(".a-container");

    accordionItems.forEach(item => {
        let header = item.querySelector(".label");

        header.addEventListener("click", function () {
            let content = item.querySelector(".acc-content");
            let arrow = header.querySelector(".arrow");

            // Toggle the 'active' class on the clicked item
            item.classList.toggle("active");

            // Collapse all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});

