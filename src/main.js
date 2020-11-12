const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let mainWin;

function createWindow () {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  mainWin.loadURL(
    isDev ? 'http://localhost:8080':
    `file://${path.join(__dirname, 'build/index.html')}`
  )
  mainWin.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('handleMinimize', () => {
  mainWin.minimize();
})

ipcMain.on('handleMaximize', () => {
  mainWin.maximize();
})

ipcMain.on('handleClose', () => {
  mainWin.close();
})