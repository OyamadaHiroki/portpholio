$(document).ready(function () {
    $("#formWrapper").submit(function (event) {
        var name = $("#name").val();
        var mail = $("#email").val();
        var text = $("#text").val();

        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2VMHCmPzhrc0vTUxl7uuT8meYnqfmV9_r0llWTtdMoslUlw/formResponse",
            data: {
                "entry.2005620554": name,
                "entry.1045781291": mail,
                "entry.839337160": text
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("form").slideUp();
                    $('#success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("form").slideUp();
                    $('#error').slideDown();
                }
            }
        });
        event.preventDefault();
    });
});