var sounds = ["swamp.wav", "burp.mp3", "green.wav", "http://www.animationsoundstation.com/moviesounds/Shrek/Shrek%20and%20Donkey%20-%20Ogres%20Are%20Like%20Onions,%20They%20Stink.wav"]

$("#soundboard").on('click', '#swamp', function(){
    var audio = new Audio(sounds[0]);
    audio.play();
});

$("#soundboard").on('click', '#burp', function(){
    var audio = new Audio(sounds[1]);
    audio.play();
});

$("#soundboard").on('click', '#green', function(){
    var audio = new Audio(sounds[2]);
    audio.play();
});

$("#soundboard").on('click', '#onions', function(){
    var audio = new Audio(sounds[3]);
    audio.play();
});