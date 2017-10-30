/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const { screen } = require('electron')

function getCursorWindowPoint (browserWindow, cursorScreenPoint = screen.getCursorScreenPoint()) {
  const [winX, winY] = browserWindow.getPosition()
  return {
    x: cursorScreenPoint.x - winX,
    y: cursorScreenPoint.y - winY
  }
}

module.exports = {
  getCursorWindowPoint
}
