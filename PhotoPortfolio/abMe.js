jQuery(document).ready(function($) {
    consumeJSON("jake.json");
});
function consumeJSON(jsonFileURL) {
    $.ajax({
        url: jsonFileURL,
        dataType: "text",
        success: function (data) {
            var json = $.parseJSON(data);
            // display info
            $("main > h1").html(json.ab[0].title + "<br/>");
            $("main > h2").html(json.ab[0].bio);
            $("main > img").attr("src", json.ab[0].image);
        }
    });
}