import { Handler } from '@netlify/functions';
import { GoogleGenAI } from '@google/genai';

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    const bodyStr = event.isBase64Encoded && event.body 
      ? Buffer.from(event.body, 'base64').toString('utf-8') 
      : (event.body || '{}');
      
    const { userPrompt, systemInstruction } = JSON.parse(bodyStr);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return { 
        statusCode: 500, 
        body: JSON.stringify({ error: "Server error: API key not configured in Netlify Environment Variables" }),
        headers
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ text: response.text }),
      headers
    };
  } catch (error: any) {
    console.error("Netlify Gemini API Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Failed to generate response" }),
      headers
    };
  }
};
