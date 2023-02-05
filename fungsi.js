console.log("fungsi pertama")

const add = (a, b) => a + b
console.log(add(1, 2))

const ada = "hayyu"
console.log(ada)

// cara mengetahui adanya perubahan dalam file di git, pake git diff
// cara keluar dari git diff yaitu tekan q pada keyboard ente
// dan git diff hanya melihat perubahan dalam file, bukan melihat adanya tambahan file
// cara melihat dia di working directory... staged area... dan melihat file apa yang telah termodif
// yaitu pake git status
// working directory -> staged area -> repository
// jadi dari git init -> git add . -> git commit -m "" 
// ( -m dalam git commit yaitu message lalu isi mi dalam "")

// git log yaitu melihat history dari awal
// cara mempersingkat nya bisa memakai git log --oneline ( HEAD -> MASTER itu berarti dia berada di branch MASTER)
// jadi yang muncul pada git log --online adalah hexcode dan message dari commit 
// disebelah kanan file pada vscode ada tulisan U berarti itu untracked ( file baru ) dan di dalam working directory
// kalau D berarti sudah di Delete
// kalau M berarti Modified yaitu sudah termodif
// dan kiri file pada vscode ( lebih tepatnya bagian extension, file, dkk )ada source control yang sudah di sediakan
// jadi ente bisa meliat file2 mana yang sudah termodif, delete, dan file baru
// pada saat di tekan file nya dalam soruce control, bisa dilihat apa2 yang sudah di modif... ( 11 12 sama git diff )