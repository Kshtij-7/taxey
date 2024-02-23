function toggleElementOff(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'none';
}
function toggleElementOn(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'block';
}

function calculate(){
    //console.log(document.getElementById('intrastate'.checked))

    if(document.getElementById('intrastate').checked == false && document.getElementById('interstate').checked == false){
        window.alert("Please select trade type");
    }
    else if(document.getElementById('gstrate').value == ""){
        window.alert("Please enter GST rate");
    }
    else if(document.getElementById('cpspOPT').checked == false && document.getElementById('profOPT').checked == false){
        window.alert("Please select calculation type");
    }
    else{
        var gst = document.getElementById('gstrate').value;
        var gst_amt;
        var cp = parseFloat(document.getElementById('cp').value);
        if(document.getElementById('cpspOPT').checked == true){
            if(document.getElementById('cp').value == ""){
                window.alert("Please enter cost price");
            }
            else if(document.getElementById('sp').value == ""){
                window.alert("Please enter selling price");
            }
            else{
                var sp = document.getElementById('sp').value;
                
                gst_amt = (gst*(sp-cp))/100;
            }
        }
        else{
            if(document.getElementById('cp').value == ""){
                window.alert("Please enter cost price");
            }
            if(document.getElementById('prof').value == ""){
                window.alert("Please enter profit");
            }
            else{
                var prof = document.getElementById('prof').value;
                gst_amt = (gst*prof)/100;
            }
        }

        if(document.getElementById('intrastate').checked == true){
            document.getElementById('gstLABEL').innerHTML = "IGST Amount : " + gst_amt;
        }
        else{
            document.getElementById('gstLABEL').innerHTML = `CGST Amount : ${gst_amt/2} <br> SGST Amount : ${gst_amt/2}`
        }
        document.getElementById('amtLABEL').innerHTML = `Amount : ${cp+gst_amt}`
    }
}