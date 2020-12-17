let n = 1;
getNextPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            {
                console.log('下载已完成')
            }
            if (request.status >= 200 && request.status < 300) {
                let array = JSON.parse(request.response);
                array.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    xxx.appendChild(li)
                });
                n += 1;
                console.log(array)
            } else {
                alert('加载失败')
            }
        }
    };

    request.send();
};

getcss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            {
                console.log('下载已完成')
            }
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style)
                console.log(style)

            } else {
                alert('加载失败')
            }
        }
    };

    request.send();
};

getjs.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            {
                console.log('下载已完成')
            }
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response;
                document.body.appendChild(script)

            } else {
                alert('加载失败')
            }
        }
    };

    request.send();
};

getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            {
                console.log('下载已完成')
            }
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div');
                div.innerHTML = request.response;
                console.log(div)
                document.body.appendChild(div)

            } else {
                alert('加载失败')
            }
        }
    };

    request.send();
};

getxml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {

        if (request.readyState === 4) {
            {
                console.log('下载已完成')
            }
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent;
                console.log(text)

            } else {
                alert('加载失败')
            }
        }
    };

    request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {

        if (request.readyState === 4) {
            {
                console.log('下载已完成')
            }
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                const Object = JSON.parse(request.response)
                console.log(Object)
                Myname.textContent = Object.name
            } else {
                alert('加载失败')
            }
        }
    };

    request.send();
};