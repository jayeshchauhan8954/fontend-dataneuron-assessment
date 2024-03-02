import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { apiRequest } from '../../utils/apiRequest';
import URL from '../../utils/urls';
import { showMessage } from '../../utils/toast';
import { _toastVariants } from '../../utils/constant';

function QueryForm() {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to send query email
      const response = await apiRequest({
        endUrl: URL.mailQuery,
        method: "POST",
        body: { email, description }
      });
      alert(response.message)
      alert('Please check your EMAIL INBOX !')
      setDescription('');
      setEmail('');
      showMessage({ variant: _toastVariants.Success, message: response.message });
    } catch (error) {
      console.error('Error:', error.response.data.message); 
    }
  };

  return (
    <Container maxWidth="sm">
      <h1 style={{ fontSize: '36px' }}>Send Query Email</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Your Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </form>
    </Container>
  );
}

export default QueryForm;
