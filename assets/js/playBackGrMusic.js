const play = document.getElementById('play')
play.addEventListener('click', () => handleOpenModal())


function renderModal() {
    const renderedDivModal2 =
        `
        <div class='modal2'>
            <div class='modal-content'>
                <div class="modalHeader">
                    <span class="modalTitle">Choose the Music</span>
                    <span class='close-modal2'>X</span>
                </div>
                <div class="musicList">
                    <p class="Joyful">Joyful Music</p>
                    <p class="Mystical">Mystical Music</p>
                </div>
            </div>
        </div>
    `
    return renderedDivModal2
}
root.insertAdjacentHTML("beforeend", renderModal())


const addToggleModalWindow = document.querySelector('.modal2')


function handleOpenModal() {
    addToggleModalWindow.classList.add('openModalWin')

    const closeModalButton = document.querySelector('.close-modal2')
    closeModalButton.addEventListener('click', () => {
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    })
}


let JoyfulMusic = document.querySelector('.Joyful')
let MysticalMusic = document.querySelector('.Mystical')

let JoyfulMusicSound = new Audio('./assets/media/What-Do-We-Do.mp3')
let MysticalMusicSound = new Audio('./assets/media/My-Jolly-Sailor-Bold.mp3')

let joyfulBackgroundMusic = true
let mysticalBackgroundMusic = true


JoyfulMusic.addEventListener('click', () => {
    if (joyfulBackgroundMusic) {
        JoyfulMusicSound.volume = 0.25
        JoyfulMusicSound.play()
        joyfulBackgroundMusic = false
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    } else {
        JoyfulMusicSound.pause()
        joyfulBackgroundMusic = true
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    }
})

MysticalMusic.addEventListener('click', () => {
    if (mysticalBackgroundMusic) {
        MysticalMusicSound.volume = 0.25
        MysticalMusicSound.play()
        mysticalBackgroundMusic = false
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    } else {
        MysticalMusicSound.pause()
        mysticalBackgroundMusic = true
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    }
})

JoyfulMusicSound.addEventListener('ended', () => {
    joyfulBackgroundMusic = true
})

MysticalMusicSound.addEventListener('ended', () => {
    mysticalBackgroundMusic = true
})
