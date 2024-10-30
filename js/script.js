document.addEventListener('DOMContentLoaded', () => {
    // Implementasi Sudoku sederhana
    const sudokuBoard = document.getElementById('sudoku-board');
    const checkButton = document.getElementById('check-sudoku');
    const message = document.getElementById('sudoku-message');

    const puzzle = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
    ];

    function renderSudoku() {
        sudokuBoard.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = document.createElement('input');
                cell.type = 'number';
                cell.className = 'sudoku-cell';
                cell.min = 1;
                cell.max = 9;
                if (puzzle[i][j] !== 0) {
                    cell.value = puzzle[i][j];
                    cell.disabled = true;
                }
                sudokuBoard.appendChild(cell);
            }
        }
    }

    function checkSudoku() {
        const cells = document.querySelectorAll('.sudoku-cell');
        let correct = true;
        cells.forEach((cell, index) => {
            const row = Math.floor(index / 9);
            const col = index % 9;
            if (cell.value != puzzle[row][col] && puzzle[row][col] !== 0) {
                correct = false;
            }
        });
        if (correct) {
            message.textContent = 'Selamat! Anda telah menyelesaikan puzzle Sudoku!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Maaf, jawaban Anda belum benar. Coba lagi!';
            message.style.color = 'red';
        }
    }

    renderSudoku();
    checkButton.addEventListener('click', checkSudoku);

    // Form kontak
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Di sini Anda bisa menambahkan logika untuk mengirim pesan
        alert('Terima kasih! Pesan Anda telah terkirim.');
        contactForm.reset();
    });
});
