function pickimage()
{
    options = ["../poze/A300.jpg","../poze/A310.jpg","../poze/A320.jpg","../poze/A330.jpg","../poze/A340.jpg","../poze/A350.jpg","../poze/A380.jpg"]
    randomimg = "../poze/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img")
    img.setAttribute("src", randomimg)
    img.setAttribute("alt","")
}

function pickimage1()
{
    options = ["../poze/H125.jpg","../poze/H130.jpg","../poze/H135.jpg","../poze/H145.jpg","../poze/H155.jpg","../poze/H160.jpg","../poze/H175.jpg", "../poze/H215.jpg"]
    randomimg = "../poze/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img")
    img.setAttribute("src", randomimg)
    img.setAttribute("alt","")
}

function pickimage2()
{
    options = ["../poze/Hindenburg.jpg","../poze/Zeppellin.jpg","../poze/Airlander.jpg"]
    randomimg = "../poze/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img")
    img.setAttribute("src", randomimg)
    img.setAttribute("alt","")
}



function data()
{
    data2 = Date();
    document.getElementById("data1").innerHTML = data2;
}