  var cout=1;
 var tongtien=0;
 var laysl=0;
  function themvaogio(){

    var anh=document.getElementById("hinhto"). src;
    
   var ten=document.getElementById("tile").innerText;
    var dongia=document.getElementById("gia").innerText;

    var bang=document.getElementById("tbl");
    var row=bang.insertRow(cout);

    var data=row.insertCell(0);
    var data1=row.insertCell(1);
    var data2=row.insertCell(2);
    var data3=row.insertCell(3);
    

            data.innerHTML="<img src="+anh+" style='width:100px;height:100px'>";
            data1.innerHTML=parseInt(cout);
            data2.innerHTML=dongia;
            var sl=parseInt(cout);
            var gia=parseFloat(dongia.substring(0,dongia.indexOf("V")));
            
            var tt=sl*gia;
            var thanht=tt+" VND";
            data3.innerHTML=thanht;
            
            cout++;   
            laysl=cout-1;
            
            document.getElementById("sl").innerHTML="";
            document.getElementById("sl").innerHTML="Đã chọn:"+laysl+"sp";
            
            var tongtien=document.getElementById
}