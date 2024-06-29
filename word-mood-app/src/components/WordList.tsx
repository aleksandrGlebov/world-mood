import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper, Divider, Box } from '@mui/material';
import { useApp } from '../contexts/AppContext';

interface WordListProps {
  words: string[];
}

const WordList: React.FC<WordListProps> = ({ words }) => {
  const { language } = useApp();

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2, width: '100%', mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        {language === 'ru' ? 'Ваши слова:' : 'Your words:'}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        {words.map((word, index) => (
          <Box key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Box component="span" sx={{ fontWeight: 'bold', mr: 1, minWidth: '25px', display: 'inline-block' }}>
                      {index + 1}.
                    </Box>
                    {word}
                  </Typography>
                }
              />
            </ListItem>
            {index < words.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Paper>
  );
};

export default WordList;