var title_typing = new Typed('#bigtitle', {
    strings: ['Det Havske Statinstitut^500', '^1000The Havlandic State Institute^1500'],
    typeSpeed: 40,
    backSpeed: 25,
    onComplete: () => {title_typing.destroy()},
    onDestroy: () => {edit_text()}
  });

function edit_text(){
    title = document.querySelector('#bigtitle')
    title.innerHTML = 'The Havlandic State Institute'; 
    title.className = 'big'
    // title.style.setProperty('letter-spacing', '0.2em');
    // title.style.setProperty('font-variant', 'small-caps');
}
