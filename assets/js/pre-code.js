// Highlight 22 popular code types. TODO: Inline for speed and security.
function loadjscssfile(filename, filetype){  // http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
    if(filetype=="js"){
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if(filetype=="css"){
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if(typeof fileref!="undefined") document.getElementsByTagName("head")[0].appendChild(fileref)
}
loadjscssfile("//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/vs.min.css", "css")
loadjscssfile("//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js", "js")
setTimeout("var a = document.querySelectorAll('.code'); for(var i=0; i < a.length; ++i) hljs.highlightBlock(a[i])", 600)

const navbar = document.getElementById('navbar');

function onMenu()
{
    if(navbar.classList.contains('active')){
        navbar.classList.remove('active');
    }else {
        navbar.classList.add('active');
    }
}