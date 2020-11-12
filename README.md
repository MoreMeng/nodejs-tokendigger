# Thai Smartcard Reader with Node.js

## Installation

### Windows

- Install Nodejs with [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) (use node 10.16.3)
  ```bash
  nvm install 10.16.3
  nvm use 10.16.3
  ```
- Start PowerShell as Administrator and run: `npm install --global --production windows-build-tools`, or use option 2 in <https://github.com/nodejs/node-gyp#on-windows>
- Go to `nodejs-tokendigger` and run `npm install`
- Setup PM2
  ```bash
  npm install -g pm2 pm2-windows-startup
  pm2-startup install
  pm2 start app.js --name tokendigger
  pm2 save
  ```

### Ubuntu & Pi

- Install [Python 2.7.x](https://www.python.org/downloads/)
- Run `$ sudo apt-get install libpcsclite1 libpcsclite-dev pcscd`
- Install Nodejs with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (use node 10.16.3)
  ```bash
  nvm install 10.16.3
  nvm
  ```
- Go to `thai-smartcard-nodejs` and run `npm install`
- Setup PM2
  ```bash
  npm install -g pm2
  pm2 start app.js --name tokendigger
  pm2 startup
  pm2 save
  ```

## Change Server Port

- Default port is `9898`, change by set system environment `SMC_AGENT_PORT`.
