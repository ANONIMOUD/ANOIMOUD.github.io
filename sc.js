function SayIt()
{   var SayDateTime = new Date();
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var flp = fso.OpenTextFile("D:\\chat.txt", 8,false);
    var valtextbox1 = document.form1.textbox1.value;
    flp.WriteLine(SayDateTime);
    flp.WriteLine(valtextbox1);
    flp.Close();
    var flp = fso.OpenTextFile("D:\\chat.txt", 1, true);
    FileContents = flp.ReadAll();
    document.form1.textarea1.value=FileContents;
    var textarea = document.getElementById('textarea1');
    textarea.scrollTop = textarea.scrollHeight;
    document.form1.textbox1.value = "";
    flp.Close();
}
function handleKeyPress(myfield,e)
{   var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;
    if (keycode == 13)
    {   SayIt();
        return false;
    }
    else return true;
}
