const pagecount = 12//总页数

let pageNo = 0
let pages = document.querySelectorAll('.book_page')
let cover = document.querySelectorAll('.book_cover')
let btn = document.querySelectorAll('#control button')
let book = document.querySelector('#book')
let allPages = document.querySelectorAll('.one_page')

function init()
{
    //初始化
    allPages[pageNo].style.zIndex = pagecount - pageNo
    for(let index = 0; index < pages.length; index++)
    {
        pages[index].style.opacity = 0
        pages[index].style.backgroundImage = "url('"+ [index + 1] + ".jpg')"
        pages[index].style.zIndex = pagecount - index - 1
    }
    for(let index = 0; index < pages.length; index++)
    {
        pages[index].style.opacity = 1
    } 
    cover[0].zIndex = pagecount
    cover[1].zIndex = 1

    btn[0].style.backgroundColor = "rgba(110,110,110,0.5)"
    btn[0].style.color = "darkgray"
    btn[0].disabled = true

    btn[0].onclick = function()
    {
        pageNo -- 
        if ((pagecount - 1) == pageNo)
        {
            allPages[pageNo].style.transform = 'rotateY(0deg)'
            book.style.transform = 'translateX(145px)'
            btn[1].style.backgroundColor = "rgba(63,63,63,0.8)"
            btn[1].style.color = "white"
            btn[1].disabled = false
        }
        else
        {
            allPages[pageNo].style.transform = 'rotateY(0deg)'        
        }
        allPages[pageNo].style.zIndex = pagecount - pageNo

        if (0 == pageNo)
        {
            btn[0].style.backgroundColor = "rgba(110,110,110,0.5)"
            btn[0].style.color = "darkgray"
            btn[0].disabled = true
            book.style.transform = 'translateX(0px)'
        }
    }
    btn[1].onclick = function()
    {
        if (0 == pageNo)
        {
            allPages[pageNo].style.transform = 'rotateY(-180deg)'
            book.style.transform = 'translateX(145px)'
            btn[0].style.backgroundColor = "rgba(63,63,63,0.8)"
            btn[0].style.color = "white"
            btn[0].disabled = false
        }
        else
        {
            allPages[pageNo].style.transform = 'rotateY(-180deg)'        
        }
        allPages[pageNo].style.zIndex = 1000 + pageNo
        pageNo ++
        if (pagecount == pageNo)
        {
            btn[1].style.backgroundColor = "rgba(110,110,110,0.5)"
            btn[1].style.color = "darkgray"
            btn[1].disabled = true
            book.style.transform = 'translateX(300px)'
        }
    }
}
window.onload = function()
{
    document.body.style.visibility = 'visible';
    document.querySelector('.loader').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () 
{
    document.body.style.visibility = 'hidden';
    document.querySelector('.loader').style.visibility = 'visible';
});
init()