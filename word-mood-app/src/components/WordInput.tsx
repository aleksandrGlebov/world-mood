import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useApp } from '../contexts/AppContext';

interface WordInputProps {
  onSubmit: (word: string) => void;
  remainingWords: number;
}

const WordInput: React.FC<WordInputProps> = ({ onSubmit, remainingWords }) => {
  const [word, setWord] = useState('');
  const [error, setError] = useState('');
  const { language } = useApp();

  const validateWord = (input: string): boolean => {
    const letterRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (input.length < 3) {
      setError(language === 'ru' ? 'Слово должно содержать минимум 3 буквы' : 'Word must be at least 3 letters long');
      return false;
    }
    if (!letterRegex.test(input)) {
      setError(language === 'ru' ? 'Слово должно содержать только буквы' : 'Word must contain only letters');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (word.trim() && remainingWords > 0 && validateWord(word.trim())) {
      onSubmit(word.trim());
      setWord('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <TextField
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
          if (e.target.value) {
            validateWord(e.target.value);
          } else {
            setError('');
          }
        }}
        label={language === 'ru' ? 'Введите слово' : 'Enter a word'}
        variant="outlined"
        disabled={remainingWords === 0}
        fullWidth
        sx={{ mb: 2 }}
        error={!!error}
        helperText={error}
      />
      <Button type="submit" variant="contained" disabled={remainingWords === 0 || !!error}>
        {language === 'ru' ? 'Отправить' : 'Submit'}
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        {language === 'ru' ? `Осталось слов: ${remainingWords}` : `Remaining words: ${remainingWords}`}
      </Typography>
    </Box>
  );
};

export default WordInput;