$(document).ready(function(){
    $("#home").on("click", function () {
        open("index.html", "_self");
    });

    $("#add-car").on("click", function () {
        $("#body").load("cars.html");
    });

    $("#add-manufacturer").on("click", function () {
        $("#body").load("manufacturers.html");
    });

    $(document).on("submit", "#add-new-car", function(event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "addCar",
            data: $("#add-new-car form").serialize(),
            success: function(data){
                alert(data);
            }
        });
    });

    $(document).on("submit", "#add-new-manufacturer", function(event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "addManufacturers",
            data: $("#add-new-manufacturer form").serialize(),
            statusCode:{
                409: function () {
                    alert("conflict");
                },
                200: function () {
                    alert("sikerült");
                }
            },
            error: function () {
                alert("valami más gond");
            }
        });
    });
});