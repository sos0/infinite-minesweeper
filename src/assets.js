const BOMB_IMG = new Image()
const FLAG_IMG = new Image()

BOMB_IMG.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            fill="#262626"
            d="M390.5 144.1l12.83-12.83c6.25-6.25 6.25-16.37 0-22.62s-16.37-6.25-22.62 0L367.9 121.5l-35.24-35.17c-8.428-8.428-22.09-8.428-30.52 0l-22.58 22.58C257.2 100.7 233.2 96 208 96C93.13 96 0 189.1 0 304S93.13 512 208 512S416 418.9 416 304c0-25.18-4.703-49.21-12.9-71.55l22.58-22.58c8.428-8.428 8.428-22.09 0-30.52L390.5 144.1zM208 192C146.3 192 96 242.3 96 304C96 312.8 88.84 320 80 320S64 312.8 64 304C64 224.6 128.6 160 208 160C216.8 160 224 167.2 224 176S216.8 192 208 192zM509.1 59.21l-39.73-16.57L452.8 2.918c-1.955-3.932-7.652-3.803-9.543 0l-16.57 39.72l-39.73 16.57c-3.917 1.961-3.786 7.648 0 9.543l39.73 16.57l16.57 39.72c1.876 3.775 7.574 3.96 9.543 0l16.57-39.72l39.73-16.57C512.9 66.86 513 61.17 509.1 59.21z">
        </path>
    </svg>`
)}`

FLAG_IMG.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            fill="#262626"
            d="M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z">
        </path>
    </svg>`
)}`

export { BOMB_IMG, FLAG_IMG }
