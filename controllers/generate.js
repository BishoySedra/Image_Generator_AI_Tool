import openai from "../config/config.js";

export async function generateImage(req, res) {
    try {
        const response = await openai.createImage({
            model: "dall-e-3",
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
        });
        const imageUrl = response.data.data[0].url; // Declare and use const or let
        return res.status(200).json({ imageUrl });
    } catch (error) {
        return res.status(500).json({ error: error.message }); // Use error.message to get the error message
    }
}
