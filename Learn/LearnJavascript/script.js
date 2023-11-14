
            function giaiPTb1()
            {
                //alert("Helu")
                //alert(myform.hsa)
                //alert(myform.hsa.value)
                a=eval(myform.hsa.value)
                b=eval(myform.hsb.value)
                ketqua=document.getElementById("tdresult")
                if(a==0 && b==0)
                {
                    ketqua.innerHTML="Vo so nghiem"
                }
                else if (a==0 && b!=0)
                {
                    ketqua.innerHTML="Vo nghiem"
                }
                else
                {
                    ketqua.innerHTML=-b*1.0/a;
                }
            }
