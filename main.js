var loaderpage=document.getElementById("loaderpage")
var loader=document.getElementById("loader")
var h1count=document.getElementById("h1count")
var h1count2=document.getElementById("h1count2")
var h1count3=document.getElementById("h1count3")
var h1count4=document.getElementById("h1count4")


window.onload=function()
{
    loaderpage.style.display="none"
    
}

var count=2500;
var x=setInterval(function()
{
    count+=1
    h1count.innerHTML=count
    if(count==3923)
    {
        clearInterval(x)
    }
},10)
var count2=0;
var y=setInterval(function()
{
    count2+=1
    h1count2.innerHTML=count2
    if(count2==131)
    {
        clearInterval(y)
    }
},50)
var count3=50;
var z=setInterval(function()
{
    count3+=1
    h1count3.innerHTML=count3
    if(count3==962)
    {
        clearInterval(z)
    }
},10)

var count4=3000;
var o=setInterval(function()
{
    count4+=1
    h1count4.innerHTML=count4
    if(count4==5949)
    {
        clearInterval(o)
    }

},5)



document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.accordion-button').forEach(btn => {
            btn.style.backgroundColor = '';
            btn.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        });

        if (!this.classList.contains('collapsed')) {
            this.style.backgroundColor = 'blue';
            this.querySelector('i').classList.replace('fa-plus', 'fa-minus');
        } else {
            this.style.backgroundColor = '';
            this.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
    });
});


(function () {
    'use strict'
  

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



  
