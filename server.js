const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', (req, res) => {
    // Execute the ping command and capture the output
    exec('ping 1.1.1.1', (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send(`Error: ${error.message}`);
        }
        if (stderr) {
            return res.status(500).send(`Stderr: ${stderr}`);
        }

        // Start Notepad and Calculator (Windows-specific)
        exec('start notepad', (err) => {
            if (err) {
                console.error(`Error starting Notepad: ${err.message}`);
            }
        });

        exec('start calc', (err) => {
            if (err) {
                console.error(`Error starting Calculator: ${err.message}`);
            }
        });

        // Send the ping output back to the client
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
