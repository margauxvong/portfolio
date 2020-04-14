var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    n = 0;
$(document).keydown(function (e) {
  if (e.keyCode === k[n++]) {
      if (n === k.length) {
          $('.modal').modal('open')
          $("#kokonut")[0].play()
          n = 0;
          return false;
      }
  }
  else {
      n = 0;
  }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function invoke(elem) {
  const anchor = elem.getAttribute('data-arg')
  await sleep(50);
  document.getElementById(anchor).scrollIntoView({behavior: "smooth", inline: "nearest"})
}

window.scrollTo(0,0);
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("all-content").style.height = "unset";
  document.getElementById("all-content").style.overflow = "initial";
  document.getElementById("all-content").style.paddingTop = "0px";
  document.getElementById("all-content").style.opacity = "1";
  console.log("init complete.")
}, 800);
