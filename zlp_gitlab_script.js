
setInterval(async () => {
    appendSbTagBtn()
    appendProdTagBtn()
}, 1000)

function appendSbTagBtn() {
    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("TAG SB");
    btn.appendChild(t);
    btn.addEventListener("click", () => {genTag("sb")});
    btn.setAttribute("id", "tag-sb");
    btn.style.color = "white"
    btn.style.backgroundColor = "red"
    btn.style.width = "100px"
    btn.style.height = "30px"
    btn.style.fontSize = "15px"

    const tagEle = document.getElementById("tag_name");
    if (!tagEle) {
        return
    }
    const existBtn = document.getElementById("tag-sb");
    if (existBtn) {
        return
    }
    tagEle.parentElement.append(btn);
    console.log("add tag sb done")
}

function appendProdTagBtn() {
    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("TAG PROD");
    btn.appendChild(t);
    btn.addEventListener("click", () => {genTag("prod")});
    btn.setAttribute("id", "tag-prod");
    btn.style.color = "white"
    btn.style.backgroundColor = "red"
    btn.style.width = "100px"
    btn.style.height = "30px"
    btn.style.fontSize = "15px"

    const tagEle = document.getElementById("tag_name");
    if (!tagEle) {
        return
    }
    const existBtn = document.getElementById("tag-prod");
    if (existBtn) {
        return
    }
    tagEle.parentElement.append(btn);
    console.log("add tag prod done")
}


function genTag(env) {
    const prefix = "v3.0.0"
    const dateTimeStr = genDatetime()
    value = prefix + "-" + dateTimeStr + "-" + env
    const tagEle = document.getElementById("tag_name");
    if (!tagEle) {
        return
    }
    tagEle.value = value
}

function genDatetime() {
    var m = new Date();
    var dateTimeStr =
        m.getFullYear() +
        ("0" + (m.getMonth() + 1)).slice(-2) +
        ("0" + m.getDate()).slice(-2) +
        ("0" + m.getHours()).slice(-2) +
        ("0" + m.getMinutes()).slice(-2) +
        ("0" + m.getSeconds()).slice(-2)
    return dateTimeStr
}