const form = document.querySelector("#image-form");
const spinner = document.querySelector(".spinner");
const message_container = document.querySelector(".msg");
const image_tag = document.querySelector("#image");

form.addEventListener("submit", generateImage);

function show_spinner() {
    spinner.classList.add("show");
}
function remove_spinner() {
    spinner.classList.remove("show");
}

function add_image_to_DOM(imageUrl) {
    image_tag.src = imageUrl;
}

function remove_image_from_DOM() {
    image_tag.src = '';
}

async function make_request(prompt, size) {
    let response = await fetch("/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, size }),
    });

    if (!response.ok) {
        throw new Error("This image can't be generated :)");
    }

    response = await response.json();

    return response.imageUrl;
}

async function generateImage(e) {
    e.preventDefault();

    try {
        // if message container has text
        message_container.textContent = '';

        // if image container has an image
        remove_image_from_DOM();

        // showing spinner
        show_spinner();

        // getting the prompt and size values
        const prompt = document.querySelector("#prompt").value;
        const size = document.querySelector("#size").value;

        // check if the prompt is empty
        if (!prompt) {
            throw new Error("You should write a description for the image to be generated!!");
        }

        // getting the response from back-end with the generated image
        const imageUrl = await make_request(prompt, size);

        //console.log(response.imageUrl);

        // adding the image to the DOM
        add_image_to_DOM(imageUrl);

        // removing spinner
        remove_spinner();

    } catch (error) {
        remove_spinner();
        message_container.textContent = error.message;
    }
}
