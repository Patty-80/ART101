let environmentTitle = "Cyber Forest";

let environmentElements = [
    "glowing trees",
    "electric mist",
    "broken signals",
    "humming wind"
];

let environmentRules = {
    rule1: "Do not trust the light",
    rule2: "Everything is listening",
    rule3: "Paths change when you look away"
};

$("#title-btn").click(function () {
    $("#output").html("<p>" + environmentTitle + "</p>");
});

$("#items-btn").click(function () {
    $("#output").html("<p>" + environmentElements.join(", ") + "</p>");
});

$("#mood-btn").click(function () {
    $("#output").html(
        "<p>" + environmentRules.rule1 + "</p>" +
        "<p>" + environmentRules.rule2 + "</p>" +
        "<p>" + environmentRules.rule3 + "</p>"
    );
});

$("#day-btn").click(function () {
    $("body").removeClass("night-mode").addClass("day-mode");
    $("#day-btn").addClass("active");
    $("#night-btn").removeClass("active");
});

$("#night-btn").click(function () {
    $("body").removeClass("day-mode").addClass("night-mode");
    $("#night-btn").addClass("active");
    $("#day-btn").removeClass("active");
});