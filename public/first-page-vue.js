var app = new Vue({
  el: '#app',
  data: {
    currentCustomer: 1,
    items: [
      // {
      //   orderNumber: 0,
      //   name: "AMERICANO",
      //   uid: "abc",
      //   orderTime: moment(),
      //   humanTime: moment().fromNow()
      // }
    ]
  }
})

setInterval(() => {
  app.items = app.items.map(function (item) {
    if (item) {
      item.humanTime = item.orderTime.fromNow()
    }
    return item
  })
}, 1000);

var socket = io('http://127.0.0.1:5001');

socket.on('connect', function(){
  // console.log("connect")
});
socket.on('order', function(data){
  app.items.push({
    orderNumber: data.orderNumber,
    name: data.product,
    uid: data.uid,
    orderTime: moment(),
    humanTime: moment().fromNow()
  })
});
socket.on('currentCustomer', function(data){
  app.currentCustomer = data
});
socket.on('disconnect', function(){
  console.log("disconnect")
});

function brewed(e) {
  var parentTile = e.target.closest(".parent-tile")
  var uid = parentTile.getAttribute('data-uid');
  var orderNumber = parentTile.getAttribute('data-orderNumber');
  socket.emit("orderComplete", {uid, orderNumber})
  parentTile.classList.add("brewed")
  setTimeout(function(){ parentTile.remove(); }, 1000);
}

