// ============ СИСТЕМА ГРУПП ============
let allGroups = {};
let currentGroup = "";
let activeROCount = 4;
let activeTab = 1;
let currentEditIndex = -1;

let gradesCountConfig = {}; 
let gradesData = {}; 
let columnNames = {};
let students = [];

// Загрузка всех групп из localStorage
function loadAllGroups() {
    const saved = localStorage.getItem('journalGroups');
    if (saved) {
        try {
            allGroups = JSON.parse(saved);
            return true;
        } catch(e) {
            console.error('Ошибка загрузки групп:', e);
        }
    }
    return false;
}

// Сохранение всех групп в localStorage
function saveAllGroups() {
    try {
        localStorage.setItem('journalGroups', JSON.stringify(allGroups));
        showSaveIndicator();
        return true;
    } catch(e) {
        console.error('Ошибка сохранения групп:', e);
        return false;
    }
}

// Сохранение текущей группы
function saveCurrentGroup() {
    if (!currentGroup) return;
    
    allGroups[currentGroup] = {
        students: students,
        activeROCount: activeROCount,
        gradesCountConfig: gradesCountConfig,
        gradesData: gradesData,
        columnNames: columnNames,
        lastSaved: new Date().toISOString()
    };
    saveAllGroups();
}

// Загрузка группы
function loadGroup(groupName) {
    if (!allGroups[groupName]) return false;
    
    const group = allGroups[groupName];
    students = group.students || [];
    activeROCount = group.activeROCount || 4;
    gradesCountConfig = group.gradesCountConfig || {};
    gradesData = group.gradesData || {};
    columnNames = group.columnNames || {};
    
    document.getElementById('roCount').value = activeROCount;
    
    updateInfoBar();
    initApp();
    return true;
}

// Переключение группы
function switchGroup() {
    const select = document.getElementById('groupSelect');
    if (!select) return;
    
    const newGroup = select.value;
    if (!newGroup) return;
    
    if (currentGroup) {
        saveCurrentGroup();
    }
    
    currentGroup = newGroup;
    loadGroup(currentGroup);
}

// Открыть модальное окно для создания группы
function openGroupModal() {
    const modal = document.getElementById('groupModal');
    const title = document.getElementById('groupModalTitle');
    const btn = document.getElementById('groupModalBtn');
    const input = document.getElementById('groupName');
    
    title.innerHTML = '➕ Создать новую группу';
    btn.innerHTML = '➕ Создать';
    btn.className = 'excel-btn';
    input.value = '';
    modal.style.display = 'block';
}

// Переименовать текущую группу
function renameCurrentGroup() {
    if (!currentGroup) {
        alert('❌ Сначала выберите группу для переименования');
        return;
    }
    
    const modal = document.getElementById('groupModal');
    const title = document.getElementById('groupModalTitle');
    const btn = document.getElementById('groupModalBtn');
    const input = document.getElementById('groupName');
    
    title.innerHTML = '✏️ Переименовать группу';
    btn.innerHTML = '💾 Сохранить';
    btn.className = 'excel-btn';
    input.value = currentGroup;
    modal.style.display = 'block';
}

// Удалить текущую группу
function deleteCurrentGroup() {
    if (!currentGroup) {
        alert('❌ Сначала выберите группу для удаления');
        return;
    }
    
    if (!confirm(`⚠️ Вы уверены, что хотите удалить группу "${currentGroup}"?\nВсе данные группы будут потеряны!`)) {
        return;
    }
    
    delete allGroups[currentGroup];
    saveAllGroups();
    
    currentGroup = "";
    students = [];
    activeROCount = 4;
    gradesCountConfig = {};
    gradesData = {};
    columnNames = {};
    
    updateGroupSelect();
    initApp();
    alert(`✅ Группа удалена!`);
}

// Сохранить группу (создать или переименовать)
function saveGroup() {
    const newName = document.getElementById('groupName').value.trim();
    if (!newName) {
        alert('❌ Введите название группы');
        return;
    }
    
    const title = document.getElementById('groupModalTitle').innerHTML;
    const isRename = title.includes('Переименовать');
    
    if (isRename) {
        if (newName === currentGroup) {
            closeGroupModal();
            return;
        }
        
        if (allGroups[newName]) {
            alert('❌ Группа с таким названием уже существует!');
            return;
        }
        
        allGroups[newName] = allGroups[currentGroup];
        delete allGroups[currentGroup];
        
        currentGroup = newName;
        saveAllGroups();
        updateGroupSelect();
        alert(`✅ Группа переименована в "${newName}"!`);
    } else {
        if (allGroups[newName]) {
            alert('❌ Группа с таким названием уже существует!');
            return;
        }
        
        if (currentGroup) {
            saveCurrentGroup();
        }
        
        allGroups[newName] = {
            students: [],
            activeROCount: 4,
            gradesCountConfig: {},
            gradesData: {},
            columnNames: {},
            lastSaved: new Date().toISOString()
        };
        
        currentGroup = newName;
        saveAllGroups();
        updateGroupSelect();
        loadGroup(currentGroup);
        alert(`✅ Группа "${newName}" создана!`);
    }
    
    closeGroupModal();
}

// Обновить выпадающий список групп
function updateGroupSelect() {
    const select = document.getElementById('groupSelect');
    if (!select) return;
    
    const currentValue = currentGroup;
    select.innerHTML = '<option value="">-- Выберите группу --</option>';
    
    const groups = Object.keys(allGroups).sort();
    for (const group of groups) {
        const option = document.createElement('option');
        option.value = group;
        option.textContent = `${group} (${allGroups[group].students?.length || 0} студ.)`;
        if (group === currentValue) {
            option.selected = true;
        }
        select.appendChild(option);
    }
}

function closeGroupModal() {
    const modal = document.getElementById('groupModal');
    if (modal) modal.style.display = 'none';
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

// Загрузка из localStorage (миграция старых данных)
function loadFromLocalStorage() {
    if (loadAllGroups() && Object.keys(allGroups).length > 0) {
        updateGroupSelect();
        const firstGroup = Object.keys(allGroups)[0];
        currentGroup = firstGroup;
        loadGroup(firstGroup);
        return true;
    }
    
    const oldData = localStorage.getItem('journalData');
    if (oldData) {
        try {
            const data = JSON.parse(oldData);
            if (data.students && data.students.length > 0) {
                const defaultGroup = "Группа 1";
                allGroups[defaultGroup] = {
                    students: data.students,
                    activeROCount: data.activeROCount || 4,
                    gradesCountConfig: data.gradesCountConfig || {},
                    gradesData: data.gradesData || {},
                    columnNames: data.columnNames || {},
                    lastSaved: data.lastSaved
                };
                saveAllGroups();
                localStorage.removeItem('journalData');
                
                currentGroup = defaultGroup;
                loadGroup(currentGroup);
                updateGroupSelect();
                return true;
            }
        } catch(e) {
            console.error('Ошибка миграции:', e);
        }
    }
    
    return false;
}

// Экспорт бэкапа всех групп
function exportBackup() {
    if (Object.keys(allGroups).length === 0) {
        alert('❌ Нет данных для бэкапа!');
        return;
    }
    
    const now = new Date();
    const defaultName = `бэкап_журнала_${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    
    let fileName = prompt('💾 Введите название файла для бэкапа:', defaultName);
    if (!fileName) return;
    
    fileName = fileName.replace(/[\\/:*?"<>|]/g, '_').trim();
    if (fileName.length === 0) fileName = defaultName;
    
    try {
        const data = JSON.stringify(allGroups, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert(`✅ Бэкап сохранен как "${fileName}.json"`);
    } catch(e) {
        alert('❌ Ошибка при создании бэкапа');
    }
}

// Импорт бэкапа
function importBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        if (!confirm(`📂 Восстановить данные из файла "${file.name}"?\nТекущие данные будут заменены!`)) {
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                
                if (data && typeof data === 'object') {
                    const firstKey = Object.keys(data)[0];
                    if (data[firstKey] && data[firstKey].students !== undefined) {
                        allGroups = data;
                    } else if (data.students !== undefined) {
                        allGroups = { "Группа 1": data };
                    } else {
                        throw new Error('Неверный формат файла');
                    }
                    
                    saveAllGroups();
                    updateGroupSelect();
                    
                    if (Object.keys(allGroups).length > 0) {
                        currentGroup = Object.keys(allGroups)[0];
                        loadGroup(currentGroup);
                    }
                    
                    alert(`✅ Бэкап успешно восстановлен!\nЗагружено групп: ${Object.keys(allGroups).length}`);
                } else {
                    throw new Error('Неверный формат');
                }
            } catch(e) {
                alert('❌ Ошибка при восстановлении бэкапа. Файл поврежден или имеет неверный формат.');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetAllData() {
    if (confirm('⚠️ Вы уверены, что хотите сбросить ВСЕ данные ВСЕХ групп?\nЭто действие нельзя отменить!')) {
        localStorage.removeItem('journalGroups');
        localStorage.removeItem('journalData');
        allGroups = {};
        students = [];
        currentGroup = "";
        activeROCount = 4;
        gradesCountConfig = {};
        gradesData = {};
        columnNames = {};
        
        updateGroupSelect();
        initApp();
        alert('✅ Все данные сброшены!');
    }
}

function manualSave() {
    if (!currentGroup) {
        alert('❌ Сначала выберите группу');
        return;
    }
    saveCurrentGroup();
    alert('✅ Данные группы сохранены!');
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
    
    if (!currentGroup) {
        alert('❌ Сначала создайте или выберите группу!');
        event.target.value = '';
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const newStudents = e.target.result.split(/\r?\n/).map(s => s.trim()).filter(s => s.length > 0);
        
        if (students.length > 0 && newStudents.length > 0) {
            if (!confirm(`⚠️ Загрузка нового списка заменит текущих студентов группы "${currentGroup}" (${students.length}). Продолжить?`)) {
                event.target.value = '';
                return;
            }
        }
        
        students = newStudents;
        event.target.value = '';
        
        gradesData = {};
        columnNames = {};
        gradesCountConfig = {};
        
        initApp();
        saveCurrentGroup();
        updateInfoBar();
        alert(`✅ Загружено ${students.length} студентов(а) в группу "${currentGroup}"!`);
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
    saveCurrentGroup();
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
    saveCurrentGroup();
}

function renderTabsContent() {
    let contentContainer = document.getElementById('tabsContent');
    contentContainer.innerHTML = '';

    if (!currentGroup) {
        contentContainer.innerHTML = `
            <div class="empty-state">
                <h3>📁 Начните с создания группы</h3>
                <p>Нажмите "➕ Новая группа" чтобы создать первую группу</p>
                <button onclick="openGroupModal()" style="margin-top: 15px; background: #3498db;">➕ Создать группу</button>
            </div>
        `;
        return;
    }

    if (students.length === 0) {
        contentContainer.innerHTML = `
            <div class="empty-state">
                <h3>📋 Нет студентов в группе "${currentGroup}"</h3>
                <p>Нажмите "Загрузить список (.txt)" или "Добавить студента" чтобы начать работу</p>
                <p>Формат файла: каждая строка - ФИО студента</p>
                <button onclick="document.getElementById('txtFileInput').click()" style="margin-top: 15px;">📁 Загрузить список</button>
                <button onclick="openAddStudentModal()" style="margin-top: 15px; margin-left: 10px; background: #9b59b6;">➕ Добавить студента</button>
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
    saveCurrentGroup();
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
    saveCurrentGroup();
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
            html += `<td></td><td class="result letter"><td><td class="result gpa"><td>`;
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
        
        XLSX.utils.book_append_sheet(wb, ws, `Итоговая ведомость_${currentGroup}`);
        
        const now = new Date();
        const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
        const defaultName = `${currentGroup}_ведомость_${dateStr}`;
        
        let filename = prompt("📊 Введите название файла:", defaultName);
        if (!filename) return;
        
        filename = filename.replace(/[\\/:*?"<>|]/g, '_').trim();
        if (filename.length === 0) filename = defaultName;
        
        XLSX.writeFile(wb, `${filename}.xlsx`);
        alert(`✅ Файл "${filename}.xlsx" успешно создан и скачан!`);
        
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

// Функции для работы со студентами
function openAddStudentModal() {
    if (!currentGroup) {
        alert('❌ Сначала создайте или выберите группу!');
        return;
    }
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
    
    if (students.includes(name)) {
        alert('❌ Студент с таким ФИО уже существует!');
        return;
    }
    
    students.push(name);
    
    const newIndex = students.length - 1;
    gradesData[newIndex] = {};
    for (let r = 1; r <= activeROCount; r++) {
        gradesData[newIndex][r] = {};
    }
    
    closeAddStudentModal();
    initApp();
    saveCurrentGroup();
    updateInfoBar();
    alert(`✅ Студент "${name}" успешно добавлен в группу "${currentGroup}"!`);
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
    
    if (newName !== students[currentEditIndex] && students.includes(newName)) {
        alert('❌ Студент с таким ФИО уже существует!');
        return;
    }
    
    const oldName = students[currentEditIndex];
    students[currentEditIndex] = newName;
    
    closeEditStudentModal();
    initApp();
    saveCurrentGroup();
    alert(`✅ Студент "${oldName}" изменен на "${newName}"!`);
}

function deleteStudent() {
    if (!confirm(`⚠️ Вы уверены, что хотите удалить студента "${students[currentEditIndex]}"?\nВсе оценки этого студента будут потеряны!`)) {
        return;
    }
    
    students.splice(currentEditIndex, 1);
    
    const newGradesData = {};
    
    for (let i = 0; i < students.length; i++) {
        const oldIndex = i < currentEditIndex ? i : i + 1;
        newGradesData[i] = gradesData[oldIndex] || {};
        
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
    saveCurrentGroup();
    updateInfoBar();
    alert(`✅ Студент удален из группы "${currentGroup}"!`);
}

function updateInfoBar() {
    const infoBar = document.getElementById('infoBar');
    const studentCount = document.getElementById('studentCount');
    if (studentCount && currentGroup && students.length > 0) {
        studentCount.innerHTML = `🎓 Группа: ${currentGroup} | 👨‍🎓 Студентов: ${students.length} | <button onclick="openAddStudentModal()" style="background: #9b59b6; padding: 2px 8px; font-size: 11px; margin-left: 5px;">➕ Добавить</button>`;
        infoBar.style.display = 'flex';
    } else if (currentGroup && students.length === 0) {
        studentCount.innerHTML = `🎓 Группа: ${currentGroup} | 👨‍🎓 Студентов: 0`;
        infoBar.style.display = 'flex';
    } else {
        infoBar.style.display = 'none';
    }
}

// Функции для инструкции
function showInstructions() {
    const modal = document.getElementById('instructionsModal');
    if (modal) {
        modal.style.display = 'block';
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

// Сохранение перед закрытием страницы
window.addEventListener('beforeunload', () => {
    if (currentGroup && students.length > 0) {
        saveCurrentGroup();
    }
});

// Инициализация
if (loadFromLocalStorage()) {
    console.log('Загружены сохраненные данные');
} else {
    initApp();
}