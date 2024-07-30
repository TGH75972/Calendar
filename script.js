document.addEventListener('DOMContentLoaded', function () {
    const monthYear = document.getElementById('monthYear');
    const calendarTable = document.getElementById('calendarTable').getElementsByTagName('tbody')[0];
    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
        
        calendarTable.innerHTML = '';

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        let row = calendarTable.insertRow();

        for (let i = 0; i < firstDay; i++) {
            row.insertCell();
        }

        for (let date = 1; date <= lastDate; date++) {
            if (row.cells.length === 7) {
                row = calendarTable.insertRow();
            }
            const cell = row.insertCell();
            cell.textContent = date;
            const today = new Date();
            if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                cell.classList.add('today');
            }
        }
    }

    document.getElementById('prevMonth').addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
