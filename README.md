# PC-Info RCE

## Overview

PC-Info RCE is a static web page built on Node.js that displays computer information to the user. However, it also contains a vulnerability to Command Injection through the User-Agent header, making it susceptible to Remote Code Execution (RCE) attacks.

## Features

- Displays browser information (name and version)
- Displays engine information (name and version)
- Displays operating system information (name and version)
- Displays CPU architecture
- Displays device information (model, type, vendor)
- Displays IP address

## Vulnerability

The vulnerability lies in the way the server handles the User-Agent header. By injecting malicious commands into the User-Agent header, an attacker can execute arbitrary commands on the server, potentially compromising its security.

## Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/your_username/pc-info-rce.git
    ```

2. Navigate to the project directory:
    ```bash
    cd pc-info-rce
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. Access the web page in your browser at [http://localhost:3000](http://localhost:3000).
