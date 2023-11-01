// when #gallery-thumb1 is clicked:
$("#gallery-thumb1").click(function() {
    // remove .hidden to #gallery-figure1
    $("#gallery-figure1").removeClass("hidden");

    // add .hidden to #gallery-figure2
    $("#gallery-figure2").addClass("hidden");

    // add .hidden to #gallery-figure3
    $("#gallery-figure3").addClass("hidden");

    $("#gallery-thumb1").addClass("active-thumbnail");

    $("#gallery-thumb2").removeClass("active-thumbnail");

    $("#gallery-thumb3").removeClass("active-thumbnail");
});

// when the thumbnail button is cliicked, show one figure. hide the others
$("#gallery-thumb2").click(function() {
    // remove .hidden to #gallery-figure1
    $("#gallery-figure1").addClass("hidden");

    // add .hidden to #gallery-figure2
    $("#gallery-figure2").removeClass("hidden");

    // remove .hidden to #gallery-figure3
    $("#gallery-figure3").addClass("hidden");

    $("#gallery-thumb1").removeClass("active-thumbnail");

    $("#gallery-thumb2").addClass("active-thumbnail");

    $("#gallery-thumb3").removeClass("active-thumbnail");
});

// when #gallery-thumb3 is clicked
$("#gallery-thumb3").click(function() {
    // add .hidden to #gallery-figure1
    $("#gallery-figure1").addClass("hidden");

    // add .hidden to #gallery-figure2
    $("#gallery-figure2").addClass("hidden");

    // remove .hidden to #gallery-figure3
    $("#gallery-figure3").removeClass("hidden");

    $("#gallery-thumb1").removeClass("active-thumbnail");

    $("#gallery-thumb2").removeClass("active-thumbnail");

    $("#gallery-thumb3").addClass("active-thumbnail");
});
