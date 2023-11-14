function giaiPTb2()
{
    var a=eval(myform.hsa.value)
    var b=eval(myform.hsb.value)
    var c=eval(myform.hsc.value)
    ketqua=document.getElementById("tdresult")
    // Tính delta
    var delta = b * b - 4 * a * c;

    // Kiểm tra giá trị của delta
    if (delta > 0) 
    {
        // Hai nghiệm phân biệt
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        ketqua.innerHTML="x1 = " + x1 + ", x2 = " + x2;
    } 
    else if (delta === 0) 
    {
        // Nghiệm kép
        var x = -b / (2 * a);
        ketqua.innerHTML="x = " + x;
    } 
    else {
        // Không có nghiệm thực
        ketqua.innerHTML="PT không có nghiệm thực.";
    }
}