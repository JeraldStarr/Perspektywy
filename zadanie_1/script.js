(() => {
    const createXHR = () => {
        return new XMLHttpRequest;
    }
    const request = createXHR();
    request.open('GET', 'data.json', true);
    request.send(null);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            const jsonOBJ = JSON.parse(request.responseText);
            const getURL = (index) => {
                return`http:${jsonOBJ[index].img}`;
             }
            for (let i in jsonOBJ) {
                const link = document.createElement("a");
                const divElement = document.createElement("div");
                const spanElement = document.createElement("span");
                const spanText = document.createElement("span");
                const sectionElement = document.querySelector('section');
                let url = getURL(i);

                spanElement.appendChild(spanText);
                spanText.classList.add("text");
                spanText.textContent = jsonOBJ[i].title;
                spanElement.classList.add("bgc");
                divElement.style.backgroundImage = `url(${url})`;
                divElement.style.backgroundRepeat = 'no-repeat';
                divElement.style.backgroundSize = 'cover';
                link.setAttribute("href", `http:${jsonOBJ[1].link}`)

                divElement.appendChild(spanElement);
                link.appendChild(divElement);
                link.appendChild(divElement);
                sectionElement.appendChild(link);
            }
        }
    }
})()
