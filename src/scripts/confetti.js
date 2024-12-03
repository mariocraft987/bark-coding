var link = $("<link />",{
    rel: "stylesheet",
    type: "text/css",
    href: "https://bark.dumorando.com/src/css/confetti.scss"
  })
  $('head').append(link);

document.body.innerHTML += `<div class="confetti">
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
</div>`;

// https://stackoverflow.blog/2021/05/31/shipping-confetti-to-stack-overflows-design-system/