function picSwitch(){
	// body...
	    
	var sliders=document.getElementById("sliders"), 
	    picture=sliders.getElementsByTagName("ul")[0].getElementsByTagName("li"),
        bullet=sliders.getElementsByTagName("ul")[1].getElementsByTagName("li");
       
    var index=0;
    var len=picture.length;  
    function show(){
            for(var h=0;h<len;h++)
             {
                picture[h].style.display="none";
                bullet[h].className="";
             }
          
            picture[index].style.display="";
            bullet[index].className="selected";
            if(index==len-1)  index=0;
            else index=index+1;
    }
    show();
    var auto=setInterval(show,2000);

    for(var i=0;i<bullet.length;i++){

    	var bullet_item=bullet[i];
        bullet_item.onclick=function(){
             for(var m=0;m<bullet.length;m++)
             {
             	if(this.innerText==bullet[m].innerText) 
             		{
                        index=m;
                        break;
                    }
             }
         
             for(var j=0;j<len;j++)
             {
             	picture[j].style.display="none";
                bullet[j].className="";
          
             }
             picture[index].style.display="";
             bullet[index].className="selected";
        }
    }


    sliders.onmouseover=function(){
        clearInterval(auto);
    } 
    sliders.onmouseout=function(){
        auto=setInterval(show,2000);
    }

}     
window.onload=picSwitch;