
const ELECTRON = require("electron")
const {app, BrowserWindow} = ELECTRON
const PATH = require("path")
const URL = require("url")

let win

function createWindow(){
  win = new BrowserWindow({ height: 490, width: 800})

  win.loadURL(URL.format({
      pathname : PATH.join(__dirname, 'index.html'),
      protocol : 'file',
      slashes : true
  }))

  win.webContents.openDevTools()
}

exports.openWindow = () => {
  let win2 = new BrowserWindow({ height: 400, width: 200})

  win2.loadURL(URL.format({
      pathname : PATH.join(__dirname, 'feeds.html'),
      protocol : 'file',
      slashes : true
  }))


}

app.on('ready', createWindow)
