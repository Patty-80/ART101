function changeForest(time) {

    if (time == "day") {

        $("body").css("background-color", "lightblue");

        $("#forest-text").html("Daylight enters the Cyber Forest.");

    } else {

        $("body").css("background-color", "black");

        $("#forest-text").html("Night falls. The forest becomes silent.");
    }
}

$("#day-btn").click(function () {
    changeForest("day");
});

$("#night-btn").click(function () {
    changeForest("night");
});