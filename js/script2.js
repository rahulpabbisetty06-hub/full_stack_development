document.getElementById("btnshowprops").addEventListener("click",function(){
    alert(`screen  width:${window.screen.width} px
           screen  height:${window.screen.height} px
           available  width:${window.screen.availWidth} px
           available height:${window.screen.availHeight} px
           color depth:${window.screen.colorDepth} bits
           pixel depth:${window.screen.pixelDepth} bits`);
});

document.getElementById("btn-open").addEventListener("click",function(){
    window.open("https://google.com","_blank");
    console.log(window.document);
})

document.getElementById("showhref").addEventListener("click",function(){
    console.log("current url=",window.location.href);
});

document.getElementById("showhostname").addEventListener("click",function(){
    console.log("current hostname =",window.location.host);
});

document.getElementById("showpathname").addEventListener("click",function(){
    console.log("current pathname=",window.location.pathname);
});

document.getElementById("showprotocol").addEventListener("click",function(){
    console.log("current protocol=",window.location.protocol);
});

document.getElementById("gotosite").addEventListener("click",function(){
    console.log("current url=",window.location.assign("https://google.com"));
});
