import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import { promptIA } from './PromptAi';

@Injectable()
export class GeminiService {
  async CallGenai(tema, rank) {
    const ai = new GoogleGenAI({
      apiKey: process.env.API_KEY,
    });
    const model = await ai.models.generateContent({
      contents: promptIA(tema, rank),
      model: 'gemini-3-flash',
      config: {
        responseMimeType: 'application/json',
      },
    });
    const resultJson = model.text;
    const teste = JSON.parse(resultJson!);
    console.log(teste);
    return { result: resultJson };
  }
}
