function showPassword(id) {
    var x = document.getElementById(id);
    if(!x) return
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

export { showPassword };