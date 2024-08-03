# Windows Remote Code Execution Proof of Concept

This repository contains a proof-of-concept (PoC) for a Windows Remote Code Execution vulnerability. It demonstrates how to execute a `ping` command on a Windows machine via a web interface, and also includes examples of opening Notepad and Calculator.

## Overview

- **Frontend:** A simple HTML/CSS/JavaScript interface that allows users to trigger commands on a Windows machine and view the output.
- **Backend:** A Node.js server using Express to handle HTTP requests, execute commands, and serve static files.

## Features

- Execute a `ping` command to `1.1.1.1` from the web interface.
- Display the command output on the web page.
- Automatically open Notepad and Calculator applications on the Windows machine where the server is running.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/SleepTheGod/Windows-Remote-Code-Execution.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Windows-Remote-Code-Execution
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    sudo install ufw
    ufw allow 3000
    node server.js
    ```

5. Open your web browser and go to `http://localhost:3000` to access the application.

## Usage

- Click the **Ping 1.1.1.1** button to execute the `ping` command.
- The output will be displayed in the `pre` element below the button.
- Notepad and Calculator will also open on the Windows machine running the server.

## Notes

- This PoC is intended for educational and demonstration purposes only.
- Ensure you have appropriate permissions and legal rights to run such scripts on the target machine.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please submit issues or pull requests if you have suggestions or improvements.

## Contact

For any questions or inquiries, please contact [sleepraps@gmail.com](mailto:sleepraps@gmail.com).
