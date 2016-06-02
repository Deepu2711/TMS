$(".sidebar-menu .has-sub .sub li > a").on("click", function (e) {
    $(".sidebar-menu").find(".current").removeClass("current");
    $(".sidebar-menu").find(".active").removeClass("active");
});
