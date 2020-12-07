// app.ts
App<IAppOption>({
  globalData: {
    server: 'https://classroom.njnu.xyz',
    classrooms: Object(),
  },
  onLaunch() {
    const keys = [
      'notice',
      'position.json',
      'classroom.json',
      'zylxdm.json',
      'last_overview',
    ]
    const storageInfo = wx.getStorageInfoSync().keys
    const storage: Record<string, any> = {}
    for (let key_index in keys) {
      const key = keys[key_index]
      if (storageInfo.indexOf(key) != -1) {
        storage[key] = wx.getStorageSync(key)
      }
    }
    wx.clearStorageSync()
    for (let key in storage) {
      wx.setStorage({ key, data: storage[key] })
    }

    this.getClassrooms().then(data => this.globalData.classrooms = data)
  },
  getNotice() {
    return new Promise((resolve) => {
      wx.request({
        url: `${this.globalData.server}/notice.json`,
        success: res => resolve(res.data as INotice)
      })
    })
  },
  getPositionJson() {
    wx.request({
      url: `${this.globalData.server}/position.json`,
      success: res => wx.setStorage({
        key: 'position.json',
        data: res.data
      }),
      fail: console.error
    })
    return new Promise((resolve) => {
      wx.getStorage({
        key: 'position.json',
        success: res => resolve(res.data),
        fail: () => wx.request({
          url: `${this.globalData.server}/position.json`,
          success: res => resolve(res.data as IJxlPosition)
        })
      })
    })
  },
  getClassrooms() {
    wx.request({
      url: `${this.globalData.server}/classrooms.json`,
      success: res => wx.setStorage({
        key: 'classrooms.json',
        data: res.data
      }),
      fail: console.error
    })
    return new Promise((resolve) => {
      wx.getStorage({
        key: 'classrooms.json',
        success: res => resolve(res.data),
        fail: () => wx.request({
          url: `${this.globalData.server}/classrooms.json`,
          success: res => resolve(res.data as Record<string, Array<IJasInfo>>)
        })
      })
    })
  },
  getZylxdm() {
    wx.request({
      url: `${this.globalData.server}/zylxdm.json`,
      success: res => wx.setStorage({
        key: 'zylxdm.json',
        data: res.data
      }),
      fail: console.error
    })
    return new Promise((resolve) => {
      wx.getStorage({
        key: 'zylxdm.json',
        success: res => resolve(res.data),
        fail: () => wx.request({
          url: `${this.globalData.server}/zylxdm.json`,
          success: res => resolve(res.data as Record<string, string>)
        })
      })
    })
  } 
})
