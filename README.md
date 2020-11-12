# Token Digger from HNSO UCAuthentication (Smart Card Authentication) Application

ติดตั้งบนเครื่องที่มีการใช้โปรแกรมตรวจสอบสิทธิ์ของ สปสช. UCAuthentication โดยระบบจะทำงานอัตโนมัติเมื่อเปิดเครื่อง และจะดึงข้อมูล `token` ใหม่เมื่อมีการเสียบบัตรประชาชน login ของผู้ใช้งานทุกครั้ง

## System Requirement
- Windows 7, Windows 10
- [NHSO UCAuthenticationMX](https://www.nhso.go.th/frontend/page-services_downloadnew.aspx) หรือเวอร์ชั่นเก่ากว่าที่ยังใช้ตรวจสอบสิทธิ์กับ สปสช. ได้อยู่
- [NodeJS](https://nodejs.org/en/) เวอร์ชั่นใดก็ได้
- [PM2](https://pm2.keymetrics.io/)
- [Git](https://git-scm.com/downloads) ~2.29.2

## Installation

### Windows

- Install Git
- Clone Repo `nodejs-tokendigger`
  ```bash
  git clone https://github.com/MoreMeng/nodejs-tokendigger.git
  ```
- Install Nodejs
- Start PowerShell as Administrator and run: `npm install --global --production windows-build-tools`, or use option 2 in <https://github.com/nodejs/node-gyp#on-windows>
- Go to `nodejs-tokendigger` and run `npm install`
- Setup PM2
  ```bash
  npm install -g pm2 pm2-windows-startup
  pm2-startup install
  pm2 start app.js --name tokendigger
  pm2 save
  ```

## Change Client Environment
- `TOKENPATH` คือ โฟลเดอร์ที่เก็บ `nhso_token.txt`

- `SERV` คือ IP server เครื่องที่รับค่า `POST` จาก `nodejs-tokendigger`

```ini
TOKENPATH = 'D:/UCAuthenticationMX/nhso_token.txt'
NODE_ENV = 'development'
SERV = 127.0.0.1
PORT = 8009
```
