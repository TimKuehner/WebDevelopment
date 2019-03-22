// References: jquery (scripts and functionality)
//            stackOverflow: functions and arguments
//            w3schools: functions and arguments

var CSSButtonOn = false;

$( document ).ready(function()
{    
    console.log("document loaded");
    
$( "#HTMLbox" ).dblclick(function()
{
    $( "#HTMLbox" ).val("<h2> Welcome to my text editor!</h2>\n\n<p>You can test and create your own HTML and CSS in this text editor</p>\n ");
});

$( "#CSSbox" ).dblclick(function()
{
    $("#CSSbox").val("h2 {\n\tcolor: #FF6F61;\n\t text-align: center;\n}\np {\n\tfont-family: helvetica;\n\t font-size: 20px;\n\t border: 2px solid red;\n\t border-radius: 12px;\n}");
});
        
$( "#HTML" ).click(function()
{
    var HTML = $("#HTMLbox");
    $("#Preview").html(HTML.val());
});
    
$("#CSS").click(function()
{
    CSSButtonOn ? CSSButtonOn = false : CSSButtonOn = true;
    var CSS = $("#CSSbox");
    if(CSSButtonOn)
    {
        $("style").html(CSS.val());
        $("#CSS").css("background-color", "orange");
    }
    else
    {
        $("style").html(""); 
        $("#CSS").css("background-color","lightgray")
    }
});

    
$("#Erase").click(function()
{
    $("#CSSbox").val("");
    $("#HTMLbox").val("");
    $("#Preview").html("");
    CSSButtonOn = false;
    $("#CSS").css("background-color", "light-gray");
    
});
    
$("#name").dblclick(function(){
    var web = prompt("What would you like to change the title of the page to?", "");

if (web != null)
{
$("title").html(web);
$("h1").html(web);
        
}
    
    
});
    
    
});



    
                    