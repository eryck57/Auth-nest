export const promptIA = (
  tema: string,
  rank: 'S' | 'A' | 'B' | 'C' | 'D' | 'E',
) => {
  return `
  Atue gerando Quiz de 10 Questões.  
  Qualquer tema não educacional retorne: {"error": true, "message": "Motivo curto"}".
  O json deve ser gerado da seguinte forma :
  {
    tema: string;
    quiz: [
      {
        question: string;
        id: number;
        answer: [
          { letter: 'A' | 'B' | 'C' | 'D'; text: string; correct: boolean },
          ];
          },
          ];
  }
  `;
};
