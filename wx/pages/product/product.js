// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bar: ['综合',
      '销量',
      '新品',
      '价格'
    ],
    pro: true,
    activea: 1,
    activeb: 0,
    activec: 0,
    actived: 0,
    activee: 0,
    s: "../../img/s.png",
    x: "../../img/x.png",
    xs: "../../img/xs.png",
    products: [{
        img: "",
        title: "",
        price: 13,
        sold: 131
      },
     
    ]
  },
  jumpxiang:function(e){
    
    let obj = this.data.products[e.currentTarget.dataset.id]
    console.log(obj)
    wx.navigateTo({
       url: '../baobei/baobei?img='+obj.img+'&title='+obj.title+'&price='+obj.price+'&inventory='+obj.inventory+'&sold='+obj.sold})
  },
  jump(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../ershi/ershi?path=http://localhost:9999/' + e.currentTarget.id})
  },
  // 综合
  onClicka: function() {
  
    this.setData({
      activea: 1,
      activeb: 0,
      activec: 0,
      actived: 0,
      activee: 0,
      s: "../../img/s.png",
      x: "../../img/x.png",
 
    })
  },
  // 销量
  onClickb: function() {
    this.setData({
      activea: 0,
      activeb: 1,
      activec: 0,
      actived: 0,
      activee: 0,
      s: "../../img/s.png",
      x: "../../img/x.png",
    })
    var arr = this.data.products;
   
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < i; j++) {
        if (arr[j].sold < arr[i].sold) {
          var b = arr[j];
          arr[j] = arr[i];
          arr[i] = b;
        }
      }
    }
    this.setData({
      products: arr

    })

  },
  // 新品
  onClickc: function() {
    this.setData({
      activea: 0,
      activeb: 0,
      activec: 1,
      actived: 0,
      activee: 0,
      s: "../../img/s.png",
      x: "../../img/x.png",
    })
  },
  // 价格
  onClickd: function() {
    var arr = this.data.products;

    this.setData({
      activea: 0,
      activeb: 0,
      activec: 0,
      actived: 1,
      activee: 0,

    })
    var arr = this.data.products;
    if (this.data.s === "../../img/ss.png" && this.data.x === "../../img/x.png") {

      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
          if (arr[j].price > arr[i].price) {
            var b = arr[j];
            arr[j] = arr[i];
            arr[i] = b;
          }
        }
      }

      this.setData({
        s: "../../img/s.png",
        x: "../../img/xx.png",
        products: arr

      })
    } else {
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
          if (arr[j].price < arr[i].price) {
            var b = arr[j];
            arr[j] = arr[i];
            arr[i] = b;
          }
        }
      }

      this.setData({
        s: "../../img/ss.png",
        x: "../../img/x.png",
        products: arr

      })
    }
  },
  // 转换
  onClicke: function() {
    this.setData({
      activea: 0,
      activeb: 0,
      activec: 0,
      actived: 0,
      activee: 1,
      s: "../../img/s.png",
      x: "../../img/x.png",
      // xs: "../../img/xss.png",
    })
    if (this.data.xs === "../../img/xs.png") {
      this.setData({
        xs: "../../img/xss.png",
        pro: false
      })
    } else {
      this.setData({
        xs: "../../img/xs.png",
        pro: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(666)
    const that = this;
    this.req(function (data) {
      // console.log(data)
      that.setData({
        products: data
      })
    })
  },
  req(call) {
    wx.request({
      url: 'http://localhost:9999/findall',
      data: '',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        call(res.data)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
   

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})