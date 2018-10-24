"use strict";

$(document).ready(() => {

    let table = null;

    $(document).on("click", ".available", (event) => {
        container = $(event.target);
        console.log(container);
        $(".form")
            .fadeIn("slow")
            .css("display", "flex");
        table = $(event.target);
        $(".form-table-num").text(`Table Number: ${table.text()}`);
        

    });



    $(document).on("click", ".exit-btn", (event) => {
        $(".form")
            .fadeOut("slow")
            // .css("display", "none");

    });
    $(".exit-btn").on("mouseenter", (event) => {

        $(event.target).css("cursor", "pointer");
    });



    $(document).on("mouseenter", ".available", (event) => {
        $(event.target)
            .fadeTo(500, 0.5)
            .css("cursor", "pointer");

    });

    $(".available").on("mouseout", (event) => {
        $(event.target).fadeTo(500, 1);

    });

    let container = null;
    

    $(document).on("click", ".submit-btn", (event) => {
        $(".form")
            .fadeOut("slow")
            // .css("display", "none");
        if ($(event.target).hasClass("submit-btn")) {
            table.removeClass("available").addClass("reserved").css("cursor", "not-allowed");
        }
        container
            .attr("username", $("input").eq(0).val())
            .attr("userparty", $("input").eq(2).val());
        $("input").each(function() {
            $(this).val("");
        });
        console.log(container);    

    });

    $(document).on("mouseenter", ".reserved", (event) => {
        $(event.target).css("cursor", "not-allowed");
        if ($(event.target).attr("username")) {
            $(event.target).append(`
            <section class = "tooltip">
                Name: ${$(event.target).attr("username")}<br>
                Size of Party: ${$(event.target).attr("userparty")}
            </section>    
            `);
        }
        else {console.log("failure");}
            

    });
    $(document).on("mouseleave", ".reserved", (event) => {
        $(".tooltip").remove();
    });


});    