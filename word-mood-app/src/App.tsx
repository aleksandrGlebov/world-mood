import React from 'react';
import { Container, Typography, CssBaseline, Box } from '@mui/material';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import SettingsToggle from './components/SettingsToggle';
import { useWordInput } from './hooks/useWordInput';
import { submitWord } from './services/api';

const App: React.FC = () => {
  const { words, remainingWords, addWord } = useWordInput();

  const handleSubmit = async (word: string) => {
    try {
      await submitWord(word);
      addWord(word);
    } catch (error) {
      console.error('Error submitting word:', error);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
        <SettingsToggle />
      </Box>
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', pt: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
          World Mood
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <WordInput onSubmit={handleSubmit} remainingWords={remainingWords} />
          <WordList words={words} />
        </Box>
      </Container>
    </>
  );
};

export default App;