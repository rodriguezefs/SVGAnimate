const logo = document.querySelectorAll("#er_logo path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letra ${i} es ${logo[i].getTotalLength()}`);
}