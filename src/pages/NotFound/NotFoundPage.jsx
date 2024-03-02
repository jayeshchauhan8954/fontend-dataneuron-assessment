// NotFoundPage

import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={{ fontSize: '42px', marginBottom: '50px' }}>404 - Page Not Found</h1>
            <img style={{ alignSelf: 'center' }} width={480} src="https://static.vecteezy.com/system/resources/previews/006/549/647/non_2x/404-landing-page-free-vector.jpg" alt="notfound" />
            <p style={{ fontSize: '36px' }}>We're sorry, but the page you are looking for does not exist.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '100px'
    },
};

export default NotFoundPage;
