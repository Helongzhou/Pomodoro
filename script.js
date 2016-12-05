$(".start").click(function(){
    t1=setInterval("start1()",1000);
    t3=setInterval("showLeftTime()",1000);
})
$(".reset").click(function(){
    clearInterval(t1);
    clearInterval(t3);
    reset();
})
$(".close").click(function(){
    $(this).parent().fadeOut();
})
var i = 0,
    j = 0,
    time=1500,
    count = 0;
function start1(){
    i = i + 0.24;
    count = count + 1;
    if(count>=750){
        count = 0;
        clearInterval(t1);
        t2 = setInterval("start2()",1000);
    };
    $(".rbox1").css("-o-transform","rotate(" + i + "deg)");
    $(".rbox1").css("-moz-transform","rotate(" + i + "deg)");
    $(".rbox1").css("-webkit-transform","rotate(" + i + "deg)");
};
function start2(){
    j = j + 0.24;
    count = count + 1;
    if(count>=750){
        count = 0;
        clearInterval(t2);
        t1 = setInterval("start1()",1000);
    };
    $(".lbox1").css("-o-transform","rotate(" + j + "deg)");
    $(".lbox1").css("-moz-transform","rotate(" + j + "deg)");
    $(".lbox1").css("-webkit-transform","rotate(" + j + "deg)");
};
function reset(){
    i = 0;
    j = 0;
    time=1500;
    count = 0;
    $(".minute").text("25");
    $(".second").text("00");
    $(".lbox1").css("-o-transform","rotate(" + j + "deg)");
    $(".lbox1").css("-moz-transform","rotate(" + j + "deg)");
    $(".lbox1").css("-webkit-transform","rotate(" + j + "deg)");
    $(".rbox1").css("-o-transform","rotate(" + i + "deg)");
    $(".rbox1").css("-moz-transform","rotate(" + i + "deg)");
    $(".rbox1").css("-webkit-transform","rotate(" + i + "deg)");
}
function showLeftTime(minutes,seconds){
    var end=time--;
        minute=parseInt(time/60%60),
        second=parseInt(time%60);
    if (minute<=9) minute="0"+minute;
    if (second<=9) second="0"+second;
    $(".minute").text(minute);
    $(".second").text(second);
    if(time==0){
        alert("恭喜你完成一个番茄钟，休息一下吧！");
        clearInterval(t1);
        clearInterval(t3);
        reset();
    }
}
(function(){
    var $todoForm=$(".todoForm"),
        $todoInput=$(".todoInput"),
        $todoList=$(".todoList"),
        $todoCount=$(".todoCount"),
        $finishList=$(".finishList");
    function count(){
        var len=$todoList.children("li").length;
        console.log(len);
        $todoCount.html(len > 0 ? "现有"+len+"项待完成任务：":"");
    }
    $todoForm.submit(function(e){
        e.preventDefault();
        var inputValue=$todoInput.val();
        $todoList.append("<li>"+inputValue+"&nbsp;<span class='todoDelete'></span></li>");
        $todoInput.val("");
        count();
    });
    $todoList.on('click', '.todoDelete', function(event) {
        event.preventDefault();
        $(this).parent().clone().appendTo($finishList);
        $(this).parent().remove();
        count();
    });
})();