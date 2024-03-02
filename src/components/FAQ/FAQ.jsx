import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const faqData = [
    {
        question: "What is the capital of India?",
        answer: "The capital of India is New Delhi."
    },
    {
        question: "What is the largest city in India?",
        answer: "The largest city in India is Mumbai."
    },
    {
        question: "What are the official languages of India?",
        answer: "The official languages of India are Hindi and English."
    },
    {
        question: "What is the currency of India?",
        answer: "The currency of India is the Indian Rupee (INR)."
    },
    {
        question: "What is the national animal of India?",
        answer: "The national animal of India is the Bengal Tiger."
    },
    {
        question: "What is the national flower of India?",
        answer: "The national flower of India is the Lotus."
    },
    {
        question: "What is the national bird of India?",
        answer: "The national bird of India is the Indian Peafowl (Peacock)."
    },
    {
        question: "What is the national emblem of India?",
        answer: "The national emblem of India is the Lion Capital of Ashoka."
    }
];

const theme = createTheme({
    palette: {
        primary: {
            main: '#f5f5f5',
        },
        secondary: {
            main: '#000',
        },
    },
    typography: {
        body1: {
            color: '#000', // Change font color to black
        },
    },
});

function IndiaFAQ() {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                <h1 style={{ fontSize: '36px' }}>FAQ about India</h1>
                <div>
                    {faqData.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel-${index}`}
                            onChange={handleChange(`panel-${index}`)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`faq-content-${index}`}
                                id={`faq-header-${index}`}
                            >
                                <Typography>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </ThemeProvider>
    );
}

export default IndiaFAQ;
