import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';

async function generateLogo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt: 'A clean, modern, and very simple elegant flat vector logo for an application called "Etiketo gidas". The app is an encyclopedia about etiquette, politeness, manners, and good behavior. The logo should use a combination of emerald (teal) and dark blue colors. White background. Professional.',
    config: {
      numberOfImages: 1,
      outputMimeType: 'image/jpeg',
      aspectRatio: '1:1',
    },
  });

  const base64EncodeString = response.generatedImages[0].image.imageBytes;
  fs.writeFileSync('public/logo.png', Buffer.from(base64EncodeString, 'base64'));
  console.log('Saved logo to public/logo.png');
}
generateLogo().catch(console.error);
