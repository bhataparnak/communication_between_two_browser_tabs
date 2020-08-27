var bc = new BroadcastChannel('comm');

document.querySelector("[data-broadcast]").addEventListener("click", ev => {
  bc.postMessage( ev.target.dataset.broadcast );
});

const targetEl = document.querySelectorAll("#page1, #page2");

bc.addEventListener("message", ev => {
    [targetEl].forEach( el => el.innerHTML = ev.data );
});
// RECEIVER
window.addEventListener("storage", ev => {
    document.getElementById( ev.key ).innerHTML = ev.newValue;
});

// SENDER
[document.querySelectorAll("[data-sender]")].forEach( el =>
    el.addEventListener("input", ev => localStorage[el.dataset.sender] = el.value )
);