    const button = document.querySelector('#search')
    const clear = document.querySelector('#clear')
    const display = document.querySelector('.search-result-item-heading span');

    button.addEventListener('click',(e)=>{
        display.textContent = 'Loading...';
        setTimeout(()=>{
            display.textContent = 'Data has arrived'
        },2000)
    })

    clear.addEventListener('click',(e)=>{
         display.textContent = " "
         clearTimeout();
    })