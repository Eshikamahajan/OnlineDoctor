var arr2 = new Array();
function add(evt,id1,id2,id3)
{
	var x=document.getElementById(id1).value;
	var y=document.getElementById(id2).value;
	var z=document.getElementById(id3).value;
	arr2.push(Number(x));
	arr2.push(y);
	arr2.push(z);//0 id-1th name-2nd city
	document.getElementById(id1).value="";
    document.getElementById(id2).value="";
    document.getElementById(id3).value="";
   
}



function display()
{
	var perrow = 3;
    html = "<table align='center' id='f3' class='table-striped'>";
    for (var i=0; i<arr2.length; i+=3)
    {
    html += "<tr><td>" + arr2[i]+ "</td>";
    html += "<td>" + arr2[i+1]+ "</td>";
    html += "<td>" + arr2[i+2]+ "</td></tr>";
    var next = i+1;
    }
  html += "</table>";
  document.getElementById("c").innerHTML=html;
  var x = document.getElementById("c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } 

	}


function del(evt,id1)
{
	var data = document.getElementById("frst").value;
				
	var j=-1; 
	for(var i=0;i<arr2.length;i+=3){
		if(i<arr2.length && arr2[i]==data){
			j=i;
		}
	}//
	if(j!=-1){
	arr2.splice(j,3);}
}		