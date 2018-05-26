const app = new Vue({
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
    ],
  },
});

setInterval(() => {
  app.items = app.items.map((item) => {
    if (item) {
      item.humanTime = item.orderTime.fromNow();
    }
    return item;
  });
}, 1000);

const socket = io('http://127.0.0.1:5001');

socket.on('connect', () => {
  // console.log("connect")
});
socket.on('order', (data) => {
  app.items.push({
    orderNumber: data.orderNumber,
    name: data.product,
    uid: data.uid,
    orderTime: moment(),
    humanTime: moment().fromNow(),
  });
});
socket.on('currentCustomer', (data) => {
  app.currentCustomer = data;
});
socket.on('disconnect', () => {
  console.log('disconnect');
});

function brewed(e) {
  const parentTile = e.target.closest('.parent-tile');
  const uid = parentTile.getAttribute('data-uid');
  const orderNumber = parentTile.getAttribute('data-orderNumber');
  socket.emit('orderComplete', { uid, orderNumber });
  parentTile.classList.add('brewed');
  setTimeout(() => { parentTile.remove(); }, 1000);
}

