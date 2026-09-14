interface api {
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
