import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk'; // Importação correta
import { promptIA } from './PromptAi';
import dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class GroqServices {
  private groq: Groq;

  constructor() {
    // Inicializa com sua chave do console.groq.com
    this.groq = new Groq({
      apiKey: process.env.GROQ_KEY,
    });
  }

  async callGropAi(tema, rank) {
    try {
      const chatCompletion = await this.groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: promptIA(tema, rank),
          },
        ],
        // O modelo Llama 3.3 70b é o Rank S do Groq
        model: 'llama-3.3-70b-versatile',
        // Força a resposta em JSON (igual o Gemini)
        response_format: { type: 'json_object' },
      });
      const response = chatCompletion.choices[0]?.message?.content;
      return response;
    } catch (err) {
      console.error('Erro no Groq:', err);
    }
  }
}
