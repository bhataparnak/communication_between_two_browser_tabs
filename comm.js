var bc = new BroadcastChannel('comm');

document.querySelector("[data-broadcast]").addEventListener("click", ev => {
  bc.postMessage( ev.target.dataset.broadcast );
});

const targetEl = document.querySelectorAll("#page1, #page2");

bc.addEventListener("message", ev => {
    [...targetEl].forEach( el => el.innerHTML = ev.data );
});