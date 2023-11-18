import openai from "../config/config.js";

export async function generateImage(req, res) {
    try {
        const { prompt, size } = req.body;
        const imageSize =
            size === 'small' ? '1024x1024' :
                size === 'medium' ? '1792x1024' :
                    '1024x1792';
        const response = await openai.images.generate({
            model: 'dall-e-3',
            prompt,
            n: 1,
            size: imageSize,
        });
        const imageUrl = response.data[0].url;
        return res.status(200).json({ imageUrl });
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({ error: error.response.data });
        } else {
            return res.status(400).json({ error: error.message });
        }
    }
}
