function generatePsw() {
    let output = document.getElementById("output");
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#_-*&%+=/";
    let length = parseInt(document.getElementById("length").value);
    let password = "";

    for (let i = 0; i < length; i++) { 
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random]; 
    }

    output.value = password;
}

function copyPsw() {
    let output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        let originalTextColor = this.style.color;
        let originalBgColor = this.style.backgroundColor;
        this.style.color = "rgb(218, 51, 3)";
        this.style.backgroundColor = "rgba(216, 214, 214, 0.8)";
        setTimeout(() => {
            this.style.color = originalTextColor;
            this.style.backgroundColor = originalBgColor;
        }, 500); 
    });
});
