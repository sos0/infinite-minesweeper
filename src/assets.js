const BOMB_IMG = new Image()
const FLAG_IMG = new Image()

const FLAG_AUDIO = new Audio('./sus.wav')
const CLEAR_AUDIO = new Audio('./blip.wav')

// BOMB_IMG.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(
//     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1" height="1">
//         <path
//             fill="#262626"
//             d="M390.5 144.1l12.83-12.83c6.25-6.25 6.25-16.37 0-22.62s-16.37-6.25-22.62 0L367.9 121.5l-35.24-35.17c-8.428-8.428-22.09-8.428-30.52 0l-22.58 22.58C257.2 100.7 233.2 96 208 96C93.13 96 0 189.1 0 304S93.13 512 208 512S416 418.9 416 304c0-25.18-4.703-49.21-12.9-71.55l22.58-22.58c8.428-8.428 8.428-22.09 0-30.52L390.5 144.1zM208 192C146.3 192 96 242.3 96 304C96 312.8 88.84 320 80 320S64 312.8 64 304C64 224.6 128.6 160 208 160C216.8 160 224 167.2 224 176S216.8 192 208 192zM509.1 59.21l-39.73-16.57L452.8 2.918c-1.955-3.932-7.652-3.803-9.543 0l-16.57 39.72l-39.73 16.57c-3.917 1.961-3.786 7.648 0 9.543l39.73 16.57l16.57 39.72c1.876 3.775 7.574 3.96 9.543 0l16.57-39.72l39.73-16.57C512.9 66.86 513 61.17 509.1 59.21z">
//         </path>
//     </svg>`
// )}`

// FLAG_IMG.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(
//     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1" height="1">
//         <path
//             fill="#262626"
//             d="M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z">
//         </path>
//     </svg>`
// )}`

BOMB_IMG.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="150 150 950 950" width="1" height="1">
        <path d="m1014 187.2v-63.602h-63.602v-63.598h-700.8v63.602h-63.602v63.602h-63.602v508.8h63.602v63.602h63.602v250.8h63.602v68.398h63.602v63.602h453.6v-63.602h56.398v-63.602h63.602l-0.007812-254.4h63.602v-63.602h63.602v-510zm-764.4 319.2v-127.2h63.602v-63.602h127.2v63.602l63.594 0.003907v127.2h-63.602v63.602h-127.2v-63.602zm63.598 445.2v-127.2h63.602v127.2zm190.8 63.598h-63.602v-190.8h63.602zm128.4 0h-63.602l0.003906-190.8h63.602zm63.602-318h-192v-63.602h63.602v-63.602h63.602v63.602l64.797 0.003906zm63.602 127.2v190.8h-63.602v-190.8zm127.2 127.2h-63.602v-127.2h63.602zm63.598-508.8v30h-254.4v-61.199h254.4z" fill="#fff"/>
    </svg>`
)}`

FLAG_IMG.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(
    `<svg width="1" height="1" version="1.1" viewBox="200 200 800 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
         <clipPath id="b">
          <path d="m222.14 229h755.71v213h-755.71z"/>
         </clipPath>
         <clipPath id="a">
          <path d="m222.14 547h755.71v424h-755.71z"/>
         </clipPath>
        </defs>
        <g clip-path="url(#b)">
         <path d="m275.04 441.3h-52.898v-211.6h211.6v52.902c0 50.379 2.5195 52.898 52.902 52.898 50.379 0 52.898-2.5117 52.898-52.898 0-51.645 1.4375-52.902 60.457-52.902 59.02 0 60.457 1.2734 60.457 52.902 0 50.379 2.5195 52.898 52.898 52.898s52.902-2.5117 52.902-52.898v-52.902h211.6v211.6h-52.902c-50.379 0-52.898-2.5117-52.898-52.902 0-50.383-2.5195-52.902-52.898-52.902-50.379 0-52.898 2.5117-52.898 52.902v52.902h-332.52v-52.902c0-50.383-2.5195-52.902-52.898-52.902-50.379 0-52.898 2.5117-52.898 52.902 0 50.379-2.5195 52.902-52.902 52.902z" fill="#fff"/>
        </g>
        <path d="m486.64 864.5c50.379 0 52.898-2.5117 52.898-52.902 0-51.641 1.4375-52.898 60.457-52.898s60.457 1.2734 60.457 52.898c0 50.379 2.5195 52.902 52.898 52.902 50.379 0 52.902-2.5117 52.902-52.902 0-50.379-2.5195-52.898-52.902-52.898-50.379 0-52.898-2.5117-52.898-52.898 0-51.641-1.4375-52.902-60.457-52.902s-60.457 1.2734-60.457 52.902c0 50.383-2.5195 52.898-52.898 52.898-50.379 0-52.902 2.5117-52.902 52.898 0 50.379 2.5195 52.902 52.902 52.902z" fill="#fff"/>
        <g clip-path="url(#a)">
         <path d="m275.04 970.3c-50.379 0-52.898-2.5117-52.898-52.902 0-50.379 2.5195-52.902 52.898-52.902h52.902v-317.4h544.12v317.4h52.898c50.383 0 52.902 2.5117 52.902 52.902 0 50.379-2.5195 52.902-52.902 52.902-50.379 0-52.898-2.5117-52.898-52.902 0-50.379-2.5195-52.902-52.898-52.902-50.379 0-52.898 2.5117-52.898 52.902 0 50.379-2.5195 52.902-52.902 52.902-50.379 0-52.898-2.5117-52.898-52.902 0-51.641-1.4375-52.902-60.457-52.902-59.02 0-60.457 1.2734-60.457 52.902 0 50.379-2.5195 52.902-52.898 52.902s-52.902-2.5117-52.902-52.902c0-50.379-2.5195-52.902-52.898-52.902-50.379 0-52.898 2.5117-52.898 52.902 0 50.379-2.5195 52.902-52.902 52.902z" fill="#fff"/>
        </g>
    </svg>
    `
)}`

export { BOMB_IMG, FLAG_IMG, FLAG_AUDIO, CLEAR_AUDIO }

