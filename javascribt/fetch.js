let datak = document.querySelector(".fetch");

async function getData() {
    let result = await fetch("https://reqres.in/api/users?page=2", {
        method: "GET"
    });
    let endResult = (await result.json()).data;
    for (let i = 0; i < endResult.length; i++){
        let devBox = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", `${endResult[i].avatar}`);
        devBox.append(image);
        let id = document.createElement("h1");
        let text_id = document.createTextNode("ID : "+endResult[i].id);
        id.append(text_id);
        devBox.append(id);
        let fullname = document.createElement("h2");
        let text_name = document.createTextNode("The Name Is : "+endResult[i].first_name);
        fullname.append(text_name);
        devBox.append(fullname);
        let email = document.createElement("h3");
        let text_email = document.createTextNode("EMAIL IS : "+endResult[i].email);
        email.append(text_email);
        devBox.append(email);
        datak.append(devBox);

        
    }
}
getData();