
const sanoq   = document.querySelector('.sanoq'),
      click   = document.querySelector('.click'),
      salovat = document.querySelector('.salovat'),
      zikr1   = document.querySelector('.zikr1'),
      zikr2   = document.querySelector('.zikr2'),
      zikr3   = document.querySelector('.zikr3'),
      zikr4   = document.querySelector('.zikr4');
let count = 0
let check = 0
click.addEventListener('click',function () {
    check++
    count++
    sanoq.innerHTML = count
    if (check == 1001) collect(salovat,zikr1)
    else if (check == 2002) collect(zikr1,zikr2)
    else if (check == 3003) collect(zikr2,zikr3)
    else if (check == 4004) collect(zikr3,zikr4)
    else if (check == 5005) collect(zikr4)
    else if (check > 5005) restart() 
})
function restart() {
    [salovat,zikr1,zikr2,zikr3,zikr4].map(item => item.classList.remove('active'))
    check = 0
    count = 0
    click.innerHTML = salovat.innerHTML.slice(0,-1)
    sanoq.innerHTML = count
}
function collect(add,nom) {
    add.classList.add('active')
    count = 0
    sanoq.innerHTML = count
    if (nom) click.innerHTML =  nom.innerHTML.slice(0,-1)
    else click.innerHTML =  'restart'
}
