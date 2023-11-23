# Storyblok 測試

## 第一次安裝

### 1. 安裝 choco

開啟 powershell 並以系統管理員身分執行以下指令：

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### 2. 安裝 mkcert

```
choco install mkcert // install mkcert
mkcert --version // check the mkcert version

```

### 3. 產生憑證安裝node套件

進入專案資料夾後，執行以下指令：

```bash
mkcert localhost && pnpm i
```

## 開發

```bash
pnpm dev-ssl
```