
var imageWrapper = $('#images-action');
var writingWrapper = $('#writing-action');
var itemNumber = imageWrapper.find(".img-box-1").find(".img").length;
var progressAdd = $("#progressBar").width() / (itemNumber-1);
var currentProgress = 0;

$(function () {
    // <!-- _____________________________ main _____________________________________________________________ -->
    var interval;

    $("#btnLeft").click(function () {
        changeImagesLeft();
        clearInterval(interval);
        timer();
        $("#stop").addClass("show").siblings().removeClass("show");
    });

    $("#stop").click(function () {
        clearInterval(interval);
        $("#play").addClass("show").siblings().removeClass("show");
        $("#time-bar").removeClass("time-bar-ani");
    });

    $("#play").click(function () {
        timer();
        $("#stop").addClass("show").siblings().removeClass("show");
    });

    $("#btnRight").click(function () {
        changeImagesRight();
        clearInterval(interval);
        timer();
        $("#stop").addClass("show").siblings().removeClass("show");
    });

    // setTimeout(() => {
    //     $("#time-bar").addClass("time-bar-ani");
    //     changeImages();
    // }, 1000);

    var timer = function () {
        interval = setInterval(function () {
            changeImagesRight();

            $("#time-bar").removeClass("time-bar-ani");

            setTimeout(() => {
                $("#time-bar").addClass("time-bar-ani");
            }, 1000);
        }, 4000);

    };

    timer();
});


// <!-- _____________________________ resimlerin hareketi _____________________________________________________________ -->
var c;
var d;
var e;
var f;
function changeImagesRight() {
    progressBarRight();

    imageItems1 = imageWrapper.find(".img-box-1").find(".img");
    imageItems1.each(function () {
        if ($(this).hasClass("show")) {
            c = $(this).index() + 1;
            if (c == imageItems1.length) {
                c = 0;
            }
        }
    });
    imageItems1.eq(c - 1).addClass("remove").siblings().removeClass("remove");
    imageItems1.eq(c).addClass("show").siblings().removeClass("show");

    imageItems2 = imageWrapper.find(".img-box-2").find(".img");
    imageItems2.each(function () {
        if ($(this).hasClass("show")) {
            d = $(this).index() + 1;
            if (d == imageItems2.length) {
                d = 0;
            }
        }
    });
    imageItems2.eq(d - 1).addClass("remove").siblings().removeClass("remove");
    imageItems2.eq(d).addClass("show").siblings().removeClass("show");

    imageItems3 = imageWrapper.find(".img-box-3").find(".img");
    imageItems3.each(function () {
        if ($(this).hasClass("show")) {
            e = $(this).index() + 1;
            if (e == imageItems3.length) {
                e = 0;
            }
        }
    });
    imageItems3.eq(e - 1).addClass("remove").siblings().removeClass("remove");
    imageItems3.eq(e).addClass("show").siblings().removeClass("show");

    imageItems4 = imageWrapper.find(".img-box-4").find(".img");
    imageItems4.each(function () {
        if ($(this).hasClass("show")) {
            f = $(this).index() + 1;
            if (f == imageItems4.length) {
                f = 0;
            }
        }
    });
    imageItems4.eq(f - 1).addClass("remove").siblings().removeClass("remove");
    imageItems4.eq(f).addClass("show").siblings().removeClass("show");
}

function changeImagesLeft() {
    progressBarLeft();

    imageItems1 = imageWrapper.find(".img-box-1").find(".img");
    imageItems1.each(function () {
        if ($(this).hasClass("show")) {
            c = $(this).index();
        }
    });
    imageItems1.eq(c - 1).addClass("show").siblings().removeClass("show");
    imageItems1.eq(c).addClass("remove").siblings().removeClass("remove");
    c--;
    if (c == -1) {
        c = imageItems1.length;
    }

    imageItems2 = imageWrapper.find(".img-box-2").find(".img");
    imageItems2.each(function () {
        if ($(this).hasClass("show")) {
            d = $(this).index();
        }
    });
    imageItems2.eq(d - 1).addClass("show").siblings().removeClass("show");
    imageItems2.eq(d).addClass("remove").siblings().removeClass("remove");
    d--;
    if (d == -1) {
        d = imageItems2.length;
    }

    imageItems3 = imageWrapper.find(".img-box-3").find(".img");
    imageItems3.each(function () {
        if ($(this).hasClass("show")) {
            e = $(this).index();
        }
    });
    imageItems3.eq(e - 1).addClass("show").siblings().removeClass("show");
    imageItems3.eq(e).addClass("remove").siblings().removeClass("remove");
    e--;
    if (e == -1) {
        e = imageItems3.length;
    }

    imageItems4 = imageWrapper.find(".img-box-4").find(".img");
    imageItems4.each(function () {
        if ($(this).hasClass("show")) {
            f = $(this).index();
        }
    });
    imageItems4.eq(f - 1).addClass("show").siblings().removeClass("show");
    imageItems4.eq(f).addClass("remove").siblings().removeClass("remove");
    f--;
    if (f == -1) {
        f = imageItems4.length;
    }
}

// <!-- _____________________________ progress-bar hareketi _____________________________________________________________ -->
var i = 0;
function progressBarRight() {
    changeWritingRight();

    currentProgress = currentProgress + progressAdd;
    if(currentProgress > $("#progressBar").width()){
        currentProgress = 0;
    }

    $("#progressBar .progress-bar").animate({ width: currentProgress });

    // var w = $(window).width();
    // if (i == 0) {
    //     $("#progressBar").addClass("progress-2");

    //     $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

    //     if (w >= 576) {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInRight");
    //             $("#count").text("02");
    //         }, 1000);
    //     } else {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInUp");
    //             $("#count").text("02");
    //         }, 1000);
    //     }
    // }
    // else if (i == 1) {
    //     $("#progressBar").addClass("progress-3").removeClass("progress-2");

    //     $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

    //     if (w >= 576) {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInRight");
    //             $("#count").text("03");
    //         }, 1000);
    //     } else {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInUp");
    //             $("#count").text("03");
    //         }, 1000);
    //     }
    // } else if (i == 2) {
    //     $("#progressBar").addClass("progress-4").removeClass("progress-3");

    //     $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

    //     if (w >= 576) {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInRight");
    //             $("#count").text("04");
    //         }, 1000);
    //     } else {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInUp");
    //             $("#count").text("04");
    //         }, 1000);
    //     }
    // } else if (i == 3) {
    //     $("#progressBar").addClass("progress-5").removeClass("progress-4");

    //     $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

    //     if (w >= 576) {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInRight");
    //             $("#count").text("05");
    //         }, 1000);
    //     } else {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInUp");
    //             $("#count").text("05");
    //         }, 1000);
    //     }
    // } else if (i == 4) {
    //     $("#progressBar").removeClass().addClass("progress-bar animate__animated progress-1");

    //     $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

    //     if (w >= 576) {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInRight");
    //             $("#count").text("01");
    //         }, 1000);
    //     } else {
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInUp");
    //             $("#count").text("01");
    //         }, 1000);
    //     }
    // }
};

function progressBarLeft() {
    changeWritingLeft();

    currentProgress = currentProgress - progressAdd;
    if(currentProgress < $("#progressBar").width()){
        currentProgress = $("#progressBar").width();
    }

    $("#progressBar .progress-bar").animate({ width: currentProgress });
}

// <!-- _____________________________ yazıların hareketi _____________________________________________________________ -->
var g;
function changeWritingRight() {
    writingItems = writingWrapper.find(".content");
    writingItems.each(function () {
        if ($(this).hasClass("animate__fadeInUp")) {
            g = $(this).index() + 1;
            if (g == writingItems.length) {
                g = 0;
            }
        }
    });
    writingItems.eq(g - 1).addClass("animate__fadeOutUp").siblings().removeClass("animate__fadeOutUp");
    writingItems.eq(g).addClass("animate__fadeInUp").siblings().removeClass("animate__fadeInUp");
};

function changeWritingLeft() {
    writingItems = writingWrapper.find(".content");
    writingItems.each(function () {
        if ($(this).hasClass("animate__fadeInUp")) {
            g = $(this).index();
        }
    });
    writingItems.eq(g - 1).addClass("animate__fadeInUp eh").siblings().removeClass("animate__fadeInUp");
    writingItems.eq(g).addClass("animate__fadeOutUp").siblings().removeClass("animate__fadeOutUp");
    g--;
    if (g == -1) {
        g = writingItems.length;
    }
};