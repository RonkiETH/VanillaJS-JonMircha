export default function scrollTopButton(btn) {
    const $scrollBtn = document.querySelector(btn);

    window.addEventListener("scroll", e => {
        let scrollTop = window.pageYOffset | document.documentElement.scrollTop;

        if(scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
    })
    document.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            window.scrollTo({
                top: 0, 
                behavior: "smooth"
            });
        }
    })
}