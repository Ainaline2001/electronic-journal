let students = [];
let activeROCount = 4;
let activeTab = 1; 
let currentEditIndex = -1; // Для хранения индекса редактируемого студента

let gradesCountConfig = {}; 
let gradesData = {}; 
let columnNames = {};

// Сохранение в localStorage
function saveToLocalStorage() {
    try {
        const dataToSave = {
            students: students,
            activeROCount: activeROCount,
            gradesCountConfig: gradesCountConfig,
            gradesData: gradesData,
            columnNames: columnNames,
            lastSaved: new Date().toISOString()
        };
        localStorage.setItem('journalData', JSON.stringify(dataToSave));
        showSaveIndicator();
        return true;
    } catch(e) {
        console.error('Ошибка сохранения:', e);
        return false;
    }
}

function showSaveIndicator() {
    let indicator = document.getElementById('saveIndicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'saveIndicator';
        indicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 12px;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
        `;
        document.body.appendChild(indicator);
    }
    
    indicator.textContent = '✓ Сохранено';
    indicator.style.opacity = '1';
    
    setTimeout(() => {
        indicator.style.opacity = '0';
    }, 1500);
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('journalData');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            students = data.students || [];
            activeROCount = data.activeROCount || 4;
            gradesCountConfig = data.gradesCountConfig || {};
            gradesData = data.gradesData || {};
            columnNames = data.columnNames || {};
            
            document.getElementById('roCount').value = activeROCount;
            
            if (data.lastSaved) {
                const lastSavedTime = new Date(data.lastSaved).toLocaleString();
                console.log(`Данные загружены от: ${lastSavedTime}`);
            }
            
            return true;
        } catch(e) {
            console.error('Ошибка загрузки:', e);
        }
    }
    return false;
}

// Функции для работы со студентами
function openAddStudentModal() {
    document.getElementById('newStudentName').value = '';
    document.getElementById('addStudentModal').style.display = 'block';
}

function closeAddStudentModal() {
    document.getElementById('addStudentModal').style.display = 'none';
}

function addStudent() {
    const name = document.getElementById('newStudentName').value.trim();
    if (!name) {
        alert('❌ Введите ФИО студента!');
        return;
    }
    
    // Проверяем, нет ли уже такого студента
    if (students.includes(name)) {
        alert('❌ Студент с таким ФИО уже существует!');
        return;
    }
    
    // Добавляем нового студента
    students.push(name);
    
    // Создаем структуру для оценок нового студента
    const newIndex = students.length - 1;
    gradesData[newIndex] = {};
    for (let r = 1; r <= activeROCount; r++) {
        gradesData[newIndex][r] = {};
    }
    
    closeAddStudentModal();
    initApp();
    saveToLocalStorage();
    updateInfoBar();
    alert(`✅ Студент "${name}" успешно добавлен!`);
}

function openEditStudentModal(index) {
    currentEditIndex = index;
    document.getElementById('editStudentName').value = students[index];
    document.getElementById('editStudentModal').style.display = 'block';
}

function closeEditStudentModal() {
    document.getElementById('editStudentModal').style.display = 'none';
    currentEditIndex = -1;
}

function updateStudent() {
    const newName = document.getElementById('editStudentName').value.trim();
    if (!newName) {
        alert('❌ Введите ФИО студента!');
        return;
    }
    
    // Проверяем, не занято ли имя другим студентом
    if (newName !== students[currentEditIndex] && students.includes(newName)) {
        alert('❌ Студент с таким ФИО уже существует!');
        return;
    }
    
    const oldName = students[currentEditIndex];
    students[currentEditIndex] = newName;
    
    closeEditStudentModal();
    initApp();
    saveToLocalStorage();
    alert(`✅ Студент "${oldName}" изменен на "${newName}"!`);
}

function deleteStudent() {
    if (!confirm(`⚠️ Вы уверены, что хотите удалить студента "${students[currentEditIndex]}"?\nВсе оценки этого студента будут потеряны!`)) {
        return;
    }
    
    // Удаляем студента
    students.splice(currentEditIndex, 1);
    
    // Перестраиваем структуру данных
    const newGradesData = {};
    const newColumnNames = {};
    
    // Переносим данные остальных студентов
    for (let i = 0; i < students.length; i++) {
        const oldIndex = i < currentEditIndex ? i : i + 1;
        newGradesData[i] = gradesData[oldIndex] || {};
        
        // Корректируем индексы в оценках (если нужно)
        for (let r = 1; r <= activeROCount; r++) {
            if (!newGradesData[i][r]) newGradesData[i][r] = {};
            for (let c = 1; c <= 50; c++) {
                if (gradesData[oldIndex] && gradesData[oldIndex][r] && gradesData[oldIndex][r][c] !== undefined) {
                    newGradesData[i][r][c] = gradesData[oldIndex][r][c];
                }
            }
        }
    }
    
    gradesData = newGradesData;
    
    closeEditStudentModal();
    initApp();
    saveToLocalStorage();
    updateInfoBar();
    alert(`✅ Студент удален!`);
}

function updateInfoBar() {
    const infoBar = document.getElementById('infoBar');
    const studentCount = document.getElementById('studentCount');
    if (studentCount && students.length > 0) {
        studentCount.innerHTML = `👨‍🎓 Загружено студентов: ${students.length} | <button onclick="openAddStudentModal()" style="background: #9b59b6; padding: 2px 8px; font-size: 11px; margin-left: 5px;">➕ Добавить</button>`;
        infoBar.style.display = 'flex';
    } else if (students.length === 0) {
        infoBar.style.display = 'none';
    }
}

function exportBackup() {
    const data = localStorage.getItem('journalData');
    if (!data) {
        alert('❌ Нет данных для бэкапа! Сначала введите оценки.');
        return;
    }
    
    try {
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const now = new Date();
        const dateStr = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
        a.href = url;
        a.download = `journal_backup_${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('✅ Бэкап успешно создан! Файл сохранен на ваш компьютер.');
    } catch(e) {
        console.error('Ошибка экспорта:', e);
        alert('❌ Ошибка при создании бэкапа');
    }
}

function importBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                
                if (!data.students || !data.gradesData) {
                    throw new Error('Неверный формат файла бэкапа');
                }
                
                localStorage.setItem('journalData', JSON.stringify(data));
                alert('✅ Бэкап успешно восстановлен! Страница будет перезагружена.');
                location.reload();
            } catch(e) {
                console.error('Ошибка импорта:', e);
                alert('❌ Ошибка при восстановлении бэкапа. Файл поврежден или имеет неверный формат.');
            }
        };
        reader.onerror = () => {
            alert('❌ Ошибка чтения файла');
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetAllData() {
    if (confirm('⚠️ Вы уверены, что хотите сбросить ВСЕ оценки?\nЭто действие нельзя отменить!')) {
        localStorage.removeItem('journalData');
        gradesData = {};
        columnNames = {};
        gradesCountConfig = {};
        students = [];
        activeROCount = 4;
        activeTab = 1;
        document.getElementById('roCount').value = 4;
        initApp();
        alert('✅ Все данные сброшены!');
    }
}

function manualSave() {
    if (students.length === 0) {
        alert('❌ Нет данных для сохранения');
        return;
    }
    saveToLocalStorage();
    alert('✅ Данные сохранены!');
}

function getGradeLetter(score) {
    if (score >= 95) return 'A';  
    if (score >= 90) return 'A-';
    if (score >= 85) return 'B+'; 
    if (score >= 80) return 'B';
    if (score >= 75) return 'B-'; 
    if (score >= 70) return 'C+';
    if (score >= 65) return 'C';  
    if (score >= 60) return 'C-';
    if (score >= 55) return 'D+'; 
    if (score >= 50) return 'D';
    return 'F';
}

function getGradePoint(letter) {
    const points = { 
        'A': '4,0', 'A-': '3,67', 'B+': '3,33', 'B': '3,0', 
        'B-': '2,67', 'C+': '2,33', 'C': '2,0', 'C-': '1,67', 
        'D+': '1,33', 'D': '1,0', 'F': '0' 
    };
    return points[letter] || '0';
}

function loadStudentsFromBrowser(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const newStudents = e.target.result.split(/\r?\n/).map(s => s.trim()).filter(s => s.length > 0);
        
        if (students.length > 0 && newStudents.length > 0) {
            if (!confirm(`⚠️ Загрузка нового списка заменит текущих студентов (${students.length}). Продолжить?`)) {
                event.target.value = '';
                return;
            }
        }
        
        students = newStudents;
        event.target.value = '';
        
        // Пересоздаем структуру данных
        gradesData = {};
        columnNames = {};
        gradesCountConfig = {};
        
        initApp();
        saveToLocalStorage();
        updateInfoBar();
        alert(`✅ Загружено ${students.length} студентов(а)!`);
    };
    reader.readAsText(file, 'UTF-8');
}

function initApp() {
    let val = parseInt(document.getElementById('roCount').value) || 4;
    if (val < 1) val = 1;
    if (val > 20) val = 20;
    
    activeROCount = val;
    document.getElementById('roCount').value = activeROCount;
    
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
    saveToLocalStorage();
}

function renderTabsHeader() {
    let html = '';
    for (let r = 1; r <= activeROCount; r++) {
        let isActive = (activeTab === r) ? 'active' : '';
        html += `<button class="tab-btn ${isActive}" onclick="switchTab(${r})">РО-${r}</button>`;
    }
    let isFinalActive = (activeTab === 'final') ? 'active' : '';
    html += `<button class="tab-btn final-tab ${isFinalActive}" onclick="switchTab('final')">🏆 Итоги</button>`;
    document.getElementById('tabsHeader').innerHTML = html;
}

function switchTab(tabId) {
    activeTab = tabId;
    renderTabsHeader(); 
    
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    const pane = document.getElementById(`pane_${tabId}`);
    if (pane) pane.classList.add('active');
    
    if(tabId === 'final') renderFinalTable(); 
}

function openColumnNamesModal(roIndex) {
    let colCount = gradesCountConfig[roIndex];
    let modalHtml = `
        <div id="columnNamesModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>✏️ Редактировать названия колонок для РО-${roIndex}</h3>
                    <span class="close" onclick="closeModal()">&times;</span>
                </div>
                <div class="column-names-list">
    `;
    
    for (let c = 1; c <= colCount; c++) {
        let currentName = columnNames[roIndex][c] || `Оц.${c}`;
        modalHtml += `
            <div class="column-name-item">
                <label>Колонка ${c}:</label>
                <input type="text" id="colName_${roIndex}_${c}" value="${currentName.replace(/"/g, '&quot;')}" placeholder="Например: 12.03 или Контрольная">
            </div>
        `;
    }
    
    modalHtml += `
                </div>
                <div class="modal-footer">
                    <button onclick="saveColumnNames(${roIndex})" class="excel-btn">💾 Сохранить</button>
                    <button onclick="closeModal()" style="background:#95a5a6;">Отмена</button>
                </div>
            </div>
        </div>
    `;
    
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
    renderTabsContent();
    saveToLocalStorage();
}

function renderTabsContent() {
    let contentContainer = document.getElementById('tabsContent');
    contentContainer.innerHTML = '';

    if (students.length === 0) {
        contentContainer.innerHTML = `
            <div class="empty-state">
                <h3>📋 Нет данных</h3>
                <p>Нажмите "Загрузить список (.txt)" или "Добавить студента" чтобы начать работу</p>
                <p>Формат файла: каждая строка - ФИО студента</p>
                <button onclick="openAddStudentModal()" style="margin-top: 15px; background: #9b59b6;">➕ Добавить первого студента</button>
            </div>
        `;
        return;
    }

    for (let r = 1; r <= activeROCount; r++) {
        let isActive = (activeTab === r) ? 'active' : '';
        let colCount = gradesCountConfig[r] || 3;
        
        let paneHtml = `
        <div class="tab-pane ${isActive}" id="pane_${r}">
            <div class="ro-controls">
                <div>
                    <label>📊 Оценок (колонок) в РО-${r}: </label>
                    <input type="number" min="1" max="50" value="${colCount}" onchange="changeGradesCount(${r}, this.value)">
                </div>
                <div>
                    <button class="edit-names-btn" onclick="openColumnNamesModal(${r})">✏️ Редактировать названия</button>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>ФИО Студента</th>
                            <th>Действия</th>`;
        
        for(let c=1; c<=colCount; c++) {
            let colName = (columnNames[r] && columnNames[r][c]) || `Оц.${c}`;
            paneHtml += `<th>${escapeHtml(colName)}</th>`;
        }
        paneHtml += `<th>Средний РО-${r}</th>
                        </tr>
                    </thead>
                    <tbody>`;
        
        students.forEach((student, sIdx) => {
            paneHtml += `<tr>
                            <td>${sIdx + 1}</td>
                            <td class="name-col">${escapeHtml(student)}</td>
                            <td style="padding: 4px;">
                                <button onclick="openEditStudentModal(${sIdx})" style="background: #3498db; padding: 4px 8px; font-size: 11px;">✏️</button>
                            </td>`;
            for(let c=1; c<=colCount; c++) {
                let val = (gradesData[sIdx] && gradesData[sIdx][r] && gradesData[sIdx][r][c] !== undefined) ? gradesData[sIdx][r][c] : '';
                paneHtml += `<td><input type="number" min="0" max="100" class="score-input" 
                             value="${val}" oninput="saveGrade(${sIdx}, ${r}, ${c}, this.value)"></td>`;
            }
            paneHtml += `<td class="result avg" id="avg_${sIdx}_${r}">${calcROAvg(sIdx, r)}</td>
                        </tr>`;
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

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function changeGradesCount(roIndex, newCount) {
    let count = parseInt(newCount) || 1;
    if (count < 1) count = 1;
    if (count > 50) count = 50;
    
    let oldCount = gradesCountConfig[roIndex] || 3;
    if (!columnNames[roIndex]) columnNames[roIndex] = {};
    
    if (count > oldCount) {
        for (let c = oldCount + 1; c <= count; c++) {
            columnNames[roIndex][c] = `Оц.${c}`;
        }
    }
    
    gradesCountConfig[roIndex] = count;
    renderTabsContent();
    saveToLocalStorage();
}

function saveGrade(sIdx, roIndex, colIndex, value) {
    let val = parseInt(value);
    if (!isNaN(val) && val >= 0 && val <= 100) {
        if (!gradesData[sIdx]) gradesData[sIdx] = {};
        if (!gradesData[sIdx][roIndex]) gradesData[sIdx][roIndex] = {};
        gradesData[sIdx][roIndex][colIndex] = val;
    } else if (value === '') {
        if (gradesData[sIdx] && gradesData[sIdx][roIndex]) {
            delete gradesData[sIdx][roIndex][colIndex];
        }
    } else if (isNaN(val) || val < 0 || val > 100) {
        alert("Пожалуйста, введите число от 0 до 100");
        let oldVal = (gradesData[sIdx] && gradesData[sIdx][roIndex] && gradesData[sIdx][roIndex][colIndex] !== undefined) ? gradesData[sIdx][roIndex][colIndex] : '';
        let input = event.target;
        input.value = oldVal;
        return;
    }
    
    const avgElement = document.getElementById(`avg_${sIdx}_${roIndex}`);
    if (avgElement) {
        avgElement.innerText = calcROAvg(sIdx, roIndex);
    }
    saveToLocalStorage();
}

function calcROAvg(sIdx, roIndex) {
    let sum = 0;
    let count = 0;
    let targetCols = gradesCountConfig[roIndex] || 3;

    for (let c = 1; c <= targetCols; c++) {
        if (gradesData[sIdx] && gradesData[sIdx][roIndex] && gradesData[sIdx][roIndex][c] !== undefined) {
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

    if (students.length === 0) {
        table.innerHTML = '<tr><td style="text-align:center; padding:40px;">Загрузите список студентов</td</tr>';
        return;
    }

    let html = `<thead>
        <tr>
            <th>№</th>
            <th>ФИО Студента</th>`;
    for(let r=1; r<=activeROCount; r++) html += `<th>Итог РО-${r}</th>`;
    html += `<th>1-Семестр (Итог)</th><th>Буква</th><th>GPA</th>
        </tr>
    </thead>
    <tbody>`;

    students.forEach((student, sIdx) => {
        let roSum = 0;
        let roCountValid = 0;
        
        html += `<tr>
            <td>${sIdx + 1}</td>
            <td class="name-col">${escapeHtml(student)}</td>`;
        
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
            html += `<td class="result avg">${semAvg}</td>
                     <td class="result letter">${letter}</td>
                     <td class="result gpa">${gpa}</td>`;
        } else {
            html += `<td></td><td class="result letter"><td><td class="result gpa"></td>`;
        }
        html += `</tr>`;
    });

    html += `</tbody>`;
    table.innerHTML = html;
}

async function exportToExcel() {
    if (students.length === 0) {
        alert("❌ Нет данных для экспорта! Сначала загрузите список студентов.");
        return;
    }

    const exportBtn = document.querySelector('.excel-btn');
    const originalText = exportBtn.innerHTML;
    exportBtn.innerHTML = '⏳ Создание файла...';
    exportBtn.disabled = true;

    try {
        if (typeof XLSX === 'undefined') {
            await loadSheetJSLibrary();
        }
        
        renderFinalTable();

        const wsData = [];
        
        const headers = ['№', 'ФИО Студента'];
        for (let r = 1; r <= activeROCount; r++) {
            headers.push(`Итог РО-${r}`);
        }
        headers.push('Семестр (Итог)', 'Буква', 'GPA');
        wsData.push(headers);
        
        const tableRows = document.querySelectorAll('#finalTable tbody tr');
        tableRows.forEach(tr => {
            const rowData = [];
            const cells = tr.querySelectorAll('td');
            cells.forEach(td => {
                rowData.push(td.innerText);
            });
            wsData.push(rowData);
        });
        
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        
        ws['!cols'] = [
            {wch:5},
            {wch:30},
            ...Array(activeROCount).fill({wch:12}),
            {wch:15},
            {wch:8},
            {wch:8}
        ];
        
        XLSX.utils.book_append_sheet(wb, ws, "Итоговая ведомость");
        
        const now = new Date();
        const dateStr = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
        const filename = prompt("Введите название файла:", `Итоговая_Ведомость_${dateStr}`);
        
        if (filename) {
            XLSX.writeFile(wb, `${filename}.xlsx`);
            alert(`✅ Файл "${filename}.xlsx" успешно создан и скачан!`);
        }
        
    } catch (error) {
        console.error('Ошибка экспорта:', error);
        alert('❌ Ошибка при создании Excel файла. Попробуйте другой браузер (Chrome, Edge)');
    } finally {
        exportBtn.innerHTML = originalText;
        exportBtn.disabled = false;
    }
}

function loadSheetJSLibrary() {
    return new Promise((resolve, reject) => {
        if (typeof XLSX !== 'undefined') {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdn.sheetjs.com/xlsx-0.20.2/package/dist/xlsx.full.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Не удалось загрузить библиотеку Excel'));
        document.head.appendChild(script);
    });
}

window.addEventListener('beforeunload', () => {
    if (students.length > 0) {
        saveToLocalStorage();
    }
});

// Инициализация
if (loadFromLocalStorage()) {
    console.log('Загружены сохраненные данные');
    if (students.length > 0) {
        updateInfoBar();
    }
}
initApp();

// Функции для инструкции
function showInstructions() {
    const modal = document.getElementById('instructionsModal');
    if (modal) {
        modal.style.display = 'block';
        // Закрытие по клику вне модального окна
        modal.onclick = function(event) {
            if (event.target === modal) {
                closeInstructions();
            }
        };
    }
}

function closeInstructions() {
    const modal = document.getElementById('instructionsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}