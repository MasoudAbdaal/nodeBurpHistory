Extract API end-points from BurpSuite HTTPHistory.xml

# Usage steps

**You should already installed nodejs, vscode, git**

1. Export burp suite history file `(Proxy > HTTPHistory > {Select items + RightClick(Save Items)} )`
2. Add your historyFile.xml to .env file
3. ` git clone https://github.com/MasoudAbdaal/nodeBurpHistory.git`
4. Open project with VSCode
5. `npm i`
6. Add your burpFile.xml to `.env` file
7. Press `F5` key
8. Your end-points appear on `output.json`
