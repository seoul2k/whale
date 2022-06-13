abt = false
isonlisten = false

document.getElementById('close').onclick = () => {
    document.getElementById('body').classList.remove('opacity')
    document.getElementById('about').hidden = abt
    abt = !abt
}

function about() {
    document.getElementById('about').hidden = abt
    abt = !abt
    document.getElementById('about').classList.add('nopacity')
    document.getElementById('body').classList.add('opacity')
}
window.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '页面在5秒后关闭'
        isonlisten = true
    } else if (isonlisten) {
        document.title = '骗你的嘻嘻(#^.^#)'

    }
})