// ===== Sidebar Toggle =====
const sidebar = document.getElementById("sidebar");
const burger = document.querySelector(".burger-menu");

function toggleSidebar() {
  const isOpen = sidebar.classList.contains("open");

  if (isOpen) {
    sidebar.classList.remove("open");
    document.removeEventListener("click", outsideClickListener);
  } else {
    sidebar.classList.add("open");
    setTimeout(() => {
      document.addEventListener("click", outsideClickListener);
    }, 0); // Prevent immediate close
  }
}

function outsideClickListener(event) {
  if (!sidebar.contains(event.target) && !burger.contains(event.target)) {
    sidebar.classList.remove("open");
    document.removeEventListener("click", outsideClickListener);
  }
}

// Attach burger click
burger.addEventListener("click", toggleSidebar);


// ===== Login Button (for debugging / modal) =====
const loginBtn = document.getElementById("login-btn");
console.log(loginBtn);
