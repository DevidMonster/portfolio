import { useEffect } from "@/lib";

function Session(backGroundColor = "", id, title, content) {
    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
          
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
          
          window.addEventListener("scroll", reveal);
    })

    return `
        <div id="${id}" class="${backGroundColor} tw-p-14">
            <h1 class="tw-text-regal-purple tw-font-bold tw-text-5xl tw-text-center tw-underline">${title}</h1>
            <div class="reveal">
                ${content}
            </div>
        </div>
    `;
}

export default Session;