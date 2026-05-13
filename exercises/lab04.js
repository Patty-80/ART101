let count = 0;

let moods = ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"];

let buttonCreature = {
    name: "Needy Button",
    species: "interface creature",
    favoriteFood: "clicks"
};

$("#btn").click(function () {

    count = count + 1;

    let moodPosition = count - 1;

    let currentMood = moods[moodPosition];

    let message = "You clicked " + count + " times. Mood: " + currentMood;

    $("#box").html(message);

});