
const settingsMenu = document.querySelector(`.profile-settings`);

const darkBtn= document.getElementById(`dark-btn`)



function settingsMenuToggle(){
    settingsMenu.classList.toggle(`profile-settings-height`);
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle(`dark-btn-on`);
}


