// api.ts

// Временное хранилище слов (замените на реальный API-вызов позже)
let words: string[] = [];

export const submitWord = async (word: string): Promise<void> => {
  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Добавление слова в локальное хранилище
  words.push(word);
  
  // Здесь вы можете добавить любую дополнительную логику
  console.log('Word submitted:', word);
};

export const getWords = async (): Promise<string[]> => {
  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return words;
};