let students = [];
let activeROCount = 4;
let activeTab = 1; 

let gradesCountConfig = {}; 
let gradesData = {}; 
let columnNames = {}; // Хранилище названий колонок для каждого РО

function getGradeLetter(score) {
    if (score >= 95) return 'A';  if (score >= 90) return 'A-';
    if (score >= 85) return 'B+'; if (score >= 80) return 'B';
    if (score >= 75) return 'B-'; if (score >= 70) return 'C+';
    if (score >= 65) return 'C';  if (score >= 60) return 'C-';
    if (score >= 55) return 'D+'; if (score >= 50) return 'D';
    return 'F';
}

function getGradePoint(letter) {
    const points = { 'A': '4,0', 'A-': '3,67', 'B+': '3,33', 'B': '3,0', 'B-': '2,67', 'C+': '2,33', 'C': '2,0', 'C-': '1,67', 'D+': '1,33', 'D': '1,0', 'F': '0' };
    return points[letter] || '0';
}

function loadStudentsFromBrowser(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        students = e.target.result.split(/\r?\n/).map(s => s.trim()).filter(s => s.length > 0);
        event.target.value = '';
        initApp(); 
    };
    reader.readAsText(file);
}

function initApp() {
    let val = parseInt(document.getElementById('roCount').value) || 4;
    if (val < 1) val = 1;
    if (val > 20) val = 20;
    
    activeROCount = val;
    document.getElementById('roCount').value = activeROCount;
    
    // Сброс и подготовка структуры данных
    students.forEach((_, sIdx) => {
        if (!gradesData[sIdx]) gradesData[sIdx] = {};
        for (let r = 1; r <= activeROCount; r++) {
            if (!gradesData[sIdx][r]) gradesData[sIdx][r] = {};
            if (!gradesCountConfig[r]) gradesCountConfig[r] = 3;
            if (!columnNames[r]) {
                columnNames[r] = {};
                for (let c = 1; c <= gradesCountConfig[r]; c++) {
                    columnNames[r][c] = `Оц.${c}`;
                }
            }
        }
    });

    renderTabsHeader();
    renderTabsContent();
}

function renderTabsHeader() {
    let html = '';
    for (let r = 1; r <= activeROCount; r++) {
        let isActive = (activeTab === r) ? 'active' : '';
        html += `<div class="tab-btn ${isActive}" onclick="switchTab(${r})">РО-${r}</div>`;
    }
    let isFinalActive = (activeTab === 'final') ? 'active' : '';
    html += `<div class="tab-btn final-tab ${isFinalActive}" onclick="switchTab('final')">🏆 Итоги</div>`;
    document.getElementById('tabsHeader').innerHTML = html;
}

function switchTab(tabId) {
    activeTab = tabId;
    renderTabsHeader(); 
    
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    document.getElementById(`pane_${tabId}`).classList.add('active');
    
    if(tabId === 'final') renderFinalTable(); 
}

function openColumnNamesModal(roIndex) {
    let colCount = gradesCountConfig[roIndex];
    let modalHtml = `
        <div id="columnNamesModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Редактировать названия колонок для РО-${roIndex}</h3>
                    <span class="close" onclick="closeModal()">&times;</span>
                </div>
                <div class="column-names-list">
    `;
    
    for (let c = 1; c <= colCount; c++) {
        let currentName = columnNames[roIndex][c] || `Оц.${c}`;
        modalHtml += `
            <div class="column-name-item">
                <label>Колонка ${c}:</label>
                <input type="text" id="colName_${roIndex}_${c}" value="${currentName}" placeholder="Например: 12.03 или Контрольная">
            </div>
        `;
    }
    
    modalHtml += `
                </div>
                <div class="modal-footer">
                    <button onclick="saveColumnNames(${roIndex})" class="excel-btn">Сохранить</button>
                    <button onclick="closeModal()" style="background:#95a5a6;">Отмена</button>
                </div>
            </div>
        </div>
    `;
    
    // Удаляем старый модал если есть
    let oldModal = document.getElementById('columnNamesModal');
    if (oldModal) oldModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.getElementById('columnNamesModal').style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('columnNamesModal');
    if (modal) modal.remove();
}

function saveColumnNames(roIndex) {
    let colCount = gradesCountConfig[roIndex];
    for (let c = 1; c <= colCount; c++) {
        let input = document.getElementById(`colName_${roIndex}_${c}`);
        if (input && input.value.trim()) {
            columnNames[roIndex][c] = input.value.trim();
        }
    }
    closeModal();
    renderTabsContent(); // Перерисовываем таблицу с новыми названиями
}

function renderTabsContent() {
    let contentContainer = document.getElementById('tabsContent');
    contentContainer.innerHTML = '';

    for (let r = 1; r <= activeROCount; r++) {
        let isActive = (activeTab === r) ? 'active' : '';
        let colCount = gradesCountConfig[r];
        
        let paneHtml = `
        <div class="tab-pane ${isActive}" id="pane_${r}">
            <div class="ro-controls">
                <div>
                    <label>Оценок (колонок) в РО-${r} (до 50): </label>
                    <input type="number" min="1" max="50" value="${colCount}" onchange="changeGradesCount(${r}, this.value)">
                </div>
                <div>
                    <button class="edit-names-btn" onclick="openColumnNamesModal(${r})">✏️ Редактировать названия колонок</button>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>ФИО Студента</th>`;
        
        for(let c=1; c<=colCount; c++) {
            let colName = columnNames[r][c] || `Оц.${c}`;
            paneHtml += `<th class="editable-col" title="Кликните ✏️ выше для редактирования">${colName}</th>`;
        }
        paneHtml += `<th>Средний РО-${r}</th>
                        </tr>
                    </thead>
                    <tbody>`;
        
        students.forEach((student, sIdx) => {
            paneHtml += `<tr><td>${sIdx + 1}</td><td class="name-col">${student}</td>`;
            for(let c=1; c<=colCount; c++) {
                let val = gradesData[sIdx][r][c] !== undefined ? gradesData[sIdx][r][c] : '';
                paneHtml += `<td><input type="number" min="0" max="100" class="score-input" 
                             value="${val}" oninput="saveGrade(${sIdx}, ${r}, ${c}, this.value)"></td>`;
            }
            paneHtml += `<td class="result avg" id="avg_${sIdx}_${r}">${calcROAvg(sIdx, r)}</td></tr>`;
        });
        
        paneHtml += `</tbody>
                </table>
            </div>
        </div>`;
        contentContainer.innerHTML += paneHtml;
    }

    let isFinalActive = (activeTab === 'final') ? 'active' : '';
    contentContainer.innerHTML += `
        <div class="tab-pane ${isFinalActive}" id="pane_final">
            <div class="table-container">
                <table id="finalTable">
                </table>
            </div>
        </div>`;
        
    if(activeTab === 'final') renderFinalTable();
}

function changeGradesCount(roIndex, newCount) {
    let count = parseInt(newCount) || 1;
    if (count < 1) count = 1;
    if (count > 50) count = 50;
    
    // Обновляем названия колонок при изменении количества
    let oldCount = gradesCountConfig[roIndex] || 3;
    if (!columnNames[roIndex]) columnNames[roIndex] = {};
    
    if (count > oldCount) {
        // Добавляем новые колонки с названиями по умолчанию
        for (let c = oldCount + 1; c <= count; c++) {
            columnNames[roIndex][c] = `Оц.${c}`;
        }
    }
    
    gradesCountConfig[roIndex] = count;
    renderTabsContent(); 
}

function saveGrade(sIdx, roIndex, colIndex, value) {
    let val = parseInt(value);
    if (!isNaN(val) && val >= 0 && val <= 100) {
        gradesData[sIdx][roIndex][colIndex] = val;
    } else if (value === '') {
        delete gradesData[sIdx][roIndex][colIndex];
    } else if (isNaN(val) || val < 0 || val > 100) {
        // Если введено некорректное значение, показываем предупреждение
        alert("Пожалуйста, введите число от 0 до 100");
        // Перезагружаем предыдущее значение
        let oldVal = gradesData[sIdx][roIndex][colIndex] !== undefined ? gradesData[sIdx][roIndex][colIndex] : '';
        let input = event.target;
        input.value = oldVal;
        return;
    }
    document.getElementById(`avg_${sIdx}_${roIndex}`).innerText = calcROAvg(sIdx, roIndex);
}

function calcROAvg(sIdx, roIndex) {
    let sum = 0;
    let count = 0;
    let targetCols = gradesCountConfig[roIndex];

    for (let c = 1; c <= targetCols; c++) {
        if (gradesData[sIdx][roIndex][c] !== undefined) {
            sum += gradesData[sIdx][roIndex][c];
            count++;
        }
    }
    
    if (count === targetCols && targetCols > 0) {
        return Math.round(sum / targetCols);
    }
    return ''; 
}

function renderFinalTable() {
    let table = document.getElementById('finalTable');
    if (!table) return;

    let html = `<thead><tr><th>№</th><th>ФИО Студента</th>`;
    for(let r=1; r<=activeROCount; r++) html += `<th>Итог РО-${r}</th>`;
    html += `<th>1-Семестр (Итог)</th><th>Буква</th><th>GPA</th></tr></thead><tbody>`;

    students.forEach((student, sIdx) => {
        let roSum = 0;
        let roCountValid = 0;
        
        html += `<tr><td>${sIdx + 1}</td><td class="name-col">${student}</td>`;
        
        for(let r=1; r<=activeROCount; r++) {
            let avg = calcROAvg(sIdx, r);
            html += `<td class="result">${avg}</td>`;
            if (avg !== '') {
                roSum += avg;
                roCountValid++;
            }
        }
        
        if (roCountValid === activeROCount && activeROCount > 0) {
            let semAvg = Math.round(roSum / activeROCount);
            let letter = getGradeLetter(semAvg);
            let gpa = getGradePoint(letter);
            html += `<td class="result avg">${semAvg}</td><td class="result letter">${letter}</td><td class="result gpa">${gpa}</td>`;
        } else {
            html += `<td></td><td></td><td></td>`;
        }
        html += `</tr>`;
    });

    html += `</tbody>`;
    table.innerHTML = html;
}

async function exportToExcel() {
    if (students.length === 0) {
        alert("Нет данных для экспорта!");
        return;
    }

    renderFinalTable(); 

    let filename = prompt("Введите название файла Excel (без .xlsx):", "Итоговая_Ведомость");
    if (!filename) return;

    // Собираем заголовки с реальными названиями колонок
    let headers = ['№', 'ФИО Студента'];
    for (let r = 1; r <= activeROCount; r++) {
        headers.push(`Итог РО-${r}`);
    }
    headers.push('Семестр', 'Буква', 'GPA');

    let data = [];
    let tableRows = document.querySelectorAll('#finalTable tbody tr');
    
    tableRows.forEach(tr => {
        let rowData = [];
        let cells = tr.querySelectorAll('td');
        cells.forEach(td => rowData.push(td.innerText));
        data.push(rowData);
    });

    let status = await eel.export_excel(headers, data, filename)();
    let parts = status.split("|");
    
    if (parts[0] === "Успешно") {
        alert("Итоговая ведомость успешно сохранена!\n" + parts[1]);
    } else {
        alert("Ошибка при сохранении:\n" + parts[1]);
    }
}

// Инициализация
initApp();