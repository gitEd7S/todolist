export const workFixing = function (isFixing = 'fix') { // unfix
    if (isFixing == 'fix') {
        document.body.classList.add('fixing');
    }
    else if (isFixing == 'unfix') {
        document.body.classList.remove('fixing');
    }
}
