# Image_Generator_AI_Tool

This is an image generator AI tool built with Node.js, Express, and the OpenAI API. It allows you to create unique and creative images using advanced artificial intelligence algorithms.

## Features

- **Easy-to-Use Interface:** Simple web interface for generating images.
- **Powered by OpenAI:** Utilizes the power of OpenAI API for image generation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed
- OpenAI API key (sign up on [OpenAI](https://beta.openai.com/signup/) if you don't have one)

## Getting Started

1. Clone the repository:

    ```bash
    git clone (https://github.com/BishoySedra/Image_Generator_AI_Tool.git)
    ```

2. Navigate to the project directory:

    ```bash
    cd Image_Generator_AI_Tool
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Copy the `.env.example` file to `.env` and fill in the essential credentials:

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with your OpenAI API key.

5. Start the application:

    ```bash
    npm start
    ```

    The application will be accessible at [http://localhost:3000](http://localhost:3000) or any port you specify in your `.env` file.

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `OPENAI_API_KEY`: Your OpenAI API key.
- `PORT`: Your Server Port "OPTIONAL"

