/**
 * Created by Administrator on 2016/10/17.
 */
//打印功能
function printWithAlert()
{
    document.all.WebBrowser.ExecWB(6,1);
}
//直接打印
function printWithoutAlert()
{
    document.all.WebBrowser.ExecWB(6,6);
}
//打印设置
function printSetup()
{
    document.all.WebBrowser.ExecWB(8,1);
}

//打印预览
function printPrieview()
{
    document.all.WebBrowser.ExecWB(7,1);
}

function printImmediately()
{
    document.all.WebBrowser.ExecWB(6,6);
    window.close();
}
var HKEY_Root,HKEY_Path,HKEY_Key;
HKEY_Root="HKEY_CURRENT_USER";
HKEY_Path="\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
//设置网页打印的页眉页脚为空 ，仅IE浏览器可用
function PageSetup_Null()
{
    try
    {
        var Wsh=new ActiveXObject("WScript.Shell");
        HKEY_Key="header";
        Wsh.RegWrite(HKEY_Root+HKEY_Path+HKEY_Key,"");
        HKEY_Key="footer";
        Wsh.RegWrite(HKEY_Root+HKEY_Path+HKEY_Key,"");
    }
    catch(e)
    {}
}

//设置网页打印的页眉页脚为默认值 ，仅IE浏览器可用
function PageSetup_Default()
{
    try
    {
        var Wsh=new ActiveXObject("WScript.Shell");
        HKEY_Key="header";
        Wsh.RegWrite(HKEY_Root+HKEY_Path+HKEY_Key,"&w&b页码,&p/&P");
        HKEY_Key="footer";
        Wsh.RegWrite(HKEY_Root+HKEY_Path+HKEY_Key,"&u&b&d");
    }
    catch(e)
    {}
}
PageSetup_Default();//设置页眉和页脚默认
PageSetup_Null();//设置页眉和页脚为空
//打印功能end
//初始化时间为当天
function today() {
    var today = new Date();
    var h = today.getFullYear();
    var m = (today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1);
    var d = today.getDate() + 1 < 10 ? '0' + (today.getDate() + 1) : today.getDate();
    return h + '-' + m + '-' + d;
    }
    for ( var i =0; i<document.getElementsByClassName("today").length; i++){
        document.getElementsByClassName("today")[i].value=today();
    }
//打包替换数据
$(document).ready(function() {
    $(".info").each(function (i) {
        $(this).click(function () {
            k=i+1;
            $(".money").text($("tr:eq("+k+") td:eq(7)").text());
            $(".get_time").text($("tr:eq("+k+") td:eq(1)>input").val());
            $(".num").text($("tr:eq("+k+") td:eq(2)").text());
            $(".name").text($("tr:eq("+k+") td:eq(3)>textarea").val());
            $(".cash").text($("tr:eq("+k+") td:eq(4) option:selected").text());
            $(".reason").text($("tr:eq("+k+") td:eq(5)").text());
            $(".big").text($("tr:eq("+k+") td:eq(6)").text());
        });
    });
    $(".print").click(function () {
        $(".info:eq(0)").trigger("click");
        printWithoutAlert();
        $(".info:eq(1)").trigger("click");
        printWithoutAlert();
    })
});