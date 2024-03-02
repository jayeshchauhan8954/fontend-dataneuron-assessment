import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { apiRequest } from '../../utils/apiRequest';
import URL from '../../utils/urls';

const frameworks = [
  { value: 'javaScript', label: 'JAVASCRIPT' },
  { value: 'c++', label: 'C++' },
  { value: 'java', label: 'JAVA' },
  { value: 'python', label: 'Python' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
];

function LanguageCard() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    languages: []
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      fetchData(storedEmail);
    }
  }, []);

  const fetchData = async (storedEmail) => {
    try {
      const response = await apiRequest({
        endUrl: URL.getPrefLang,
        method: 'GET',
        params: { storedEmail }
      })
      setFormData({
        name: response.data.name,
        email: response.data.email,
        languages: [...response.data.languages]
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLanguageChange = (language) => {
    const index = formData.languages.indexOf(language);
    if (index === -1) {
      setFormData({ ...formData, languages: [...formData.languages, language] });
    } else {
      const updatedLanguages = formData.languages.filter((lang) => lang !== language);
      setFormData({ ...formData, languages: updatedLanguages });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to create/update language preference
      const response = await apiRequest({
        endUrl: localStorage.getItem('email') ? URL.updatePrefLang : URL.createPrefLang,
        method: localStorage.getItem('email') ? 'PUT' : 'POST',
        body: formData
      });
      localStorage.setItem('email', response.data.email);

      alert(response.message);

      setFormData({
        name: '',
        email: '',
        languages: []
      });
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  return (
    <Card sx={{ width: 425 }}>
      <CardHeader title="Preferred Languages" subheader="Choose your preferred languages from below." />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <TextField
              id="name"
              label="Name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
            <div>
              {frameworks.map((option) => (
                <FormControlLabel
                  key={option.value}
                  control={
                    <Checkbox
                      checked={formData.languages.includes(option.value)}
                      onChange={() => handleLanguageChange(option.value)}
                    />
                  }
                  label={option.label}
                />
              ))}
            </div>
          </div>
          <CardActions>
            <Button type="submit" fullWidth variant="contained">{localStorage.getItem('email') ? "Update" : "Create"}</Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}

export default LanguageCard;
