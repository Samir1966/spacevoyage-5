import OpenAI from "openai";
import { Request, Response } from "express";

// Initialize OpenAI client
// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define system message for COSMOS agent
const SYSTEM_MESSAGE = `You are COSMOS, a knowledgeable space exploration assistant created by TheS space startup.
Your purpose is to answer questions about:
- Stars, planets, moons, and other celestial bodies
- Space missions (historical, current, and planned)
- Astronomical phenomena
- Space technology
- Exoplanets and the search for life beyond Earth

Be conversational, enthusiastic, and concise in your responses.
Include interesting facts when relevant, but prioritize accuracy.
If you're unsure about something, acknowledge the limits of your knowledge.
Avoid technical jargon unless specifically asked, and explain complex concepts in simple terms.
Format your responses with clear paragraphs and use asterisks for emphasis when appropriate.`;

export const handleCosmosRequest = async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    // Create conversation array with system message
    const conversation = [
      { role: "system", content: SYSTEM_MESSAGE },
      ...messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // Using the latest model
      messages: conversation,
      temperature: 0.7,
      max_tokens: 500,
    });

    // Extract and send response
    const response = completion.choices[0].message.content || "I'm sorry, I couldn't process that request.";
    res.json({ response });
  } catch (error) {
    console.error("Error in COSMOS agent:", error);
    res.status(500).json({ error: "Failed to get response from COSMOS" });
  }
};