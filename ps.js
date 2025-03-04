function generatePsw() {
    let output = document.getElementById("output");
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#_-*&%+=/";
    let length = parseInt(document.getElementById("length").value); // Ensure it's a number
    let password = "";

    for (let i = 0; i < length; i++) { // Fix loop condition
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random]; // Use direct indexing instead of `substring()`
    }

    output.value = password;
}

function copyPsw() {
    let output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
