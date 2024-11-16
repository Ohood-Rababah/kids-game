function start() {

    const name = document.getElementById("nameinput").value;
    const age = document.getElementById("ageinput").value;

    if (name && age) {
        alert(`Hello, ${name}! Get ready to play!`);
        location.href = "testexam.html"
    }
    else {
        alert('Please enter your name and age to continue!');
    }
    
}
//end page1

//const backgroundMusic = new Audio('background.mp3'); // موسيقى خلفية
//backgroundMusic.loop = true; // تشغيل الموسيقى في حلقة

