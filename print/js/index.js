/**
 * Created by Administrator on 2016/10/17.
 */
    //初始化时间为当天
    function today(){
        var today=new Date();
        var h=today.getFullYear();
        var m=(today.getMonth()+1 < 10 ? '0'+(today.getMonth()+1) : today.getMonth()+1);
        var d=(today.getDate()+1 < 10 ? '0'+(today.getDate()+1) : today.getDate()+1);
        return h+"-"+m+"-"+d;
    }
    document.getElementById("today").value=today();

//打包替换数据
$(document).ready(function() {
    $(".info").click(function () {
        $("#money").text($("tr:eq(1) td:eq(7)").text());
        $(".get_time").text($("tr:eq(1) td:eq(1)>input").val());
        $("#num").text($("tr:eq(1) td:eq(2)").text());
        $("#name").text($("tr:eq(1) td:eq(3)>textarea").val());
        $("#cash").text($("tr:eq(1) td:eq(4) option:selected").text());
        $("#reason").text($("tr:eq(1) td:eq(5)").text());
        $("#big").text($("tr:eq(1) td:eq(6)").text());
    });
});
// $("tr:eq(1) td:eq(7)")