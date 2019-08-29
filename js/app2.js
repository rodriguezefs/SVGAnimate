const logo = document.querySelectorAll("#LI_Logo_Text path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letra ${i} es ${logo[i].getTotalLength()}`);
}