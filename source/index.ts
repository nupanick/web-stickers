import express from 'express';

const PORT = 8080;

const app = express();

app.get('/', (_req, res) => {
    res.send('Hello, World!');
});

function main() {
    return app.listen(PORT, () => {
        console.log(`App is running on localhost:${PORT}.`);
    });
}

if (require.main === module) main();

export default app;
