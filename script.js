function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const isOpen = sidebar.style.left === "0px";

  if (isOpen) {
    sidebar.style.left = "-280px";
    document.removeEventListener("click", outsideClickListener);
  } else {
    sidebar.style.left = "0px";
    setTimeout(() => {
      document.addEventListener("click", outsideClickListener);
    }, 0); // Add listener *after* this click finishes
  }
}

function outsideClickListener(event) {
  const sidebar = document.getElementById("sidebar");
  const burger = document.querySelector(".burger-menu");

  if (!sidebar.contains(event.target) && !burger.contains(event.target)) {
    sidebar.style.left = "-250px";
    document.removeEventListener("click", outsideClickListener);
  }
}

const loginBtn =document.getElementById("login-btn")
console.log(loginBtn)
