function MAX()
{
    //Lấy giá trị của hệ số a:
    a=document.getElementById("hsa").value
    b=document.getElementById("hsb").value
    c=document.getElementById("hsc").value
    //đưa lên ô kqua
    kq=document.getElementById("kq")
    max=Math.max(a,b,c)
    console.log=max;
    kq.innerHTML=max;
    return max;
}

function MIN()
{
    a=document.getElementById("hsa").value
    b=document.getElementById("hsb").value
    c=document.getElementById("hsc").value
    //đưa lên ô kqua
    kq=document.getElementById("kq")
    var MIN=a
    MIN=Math.min(a,b,c)
    console.log=MIN;
    kq.innerHTML=MIN;
    return MIN;
}
function sina()
{
    a=document.getElementById("hsa").value
    kq=document.getElementById("kq")
    var sinValue = Math.sin(a)
    console.log=sinValue
    kq.innerHTML=sinValue
}
function cosa()
{
    a=document.getElementById("hsa").value
    kq=document.getElementById("kq")
    var cosValue = Math.cos(a)
    console.log=cosValue
    kq.innerHTML=cosValue
}
function amub()
{
    a=document.getElementById("hsa").value
    b=document.getElementById("hsb").value
    var amub=Math.pow(a, b)
    console.log=amub
    kq.innerHTML=amub
}
