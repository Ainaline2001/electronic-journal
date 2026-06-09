// ============ ЯЗЫКОВЫЕ НАСТРОЙКИ ============
let currentLang = 'ru';

const translations = {
    ru: {
        pageTitle: 'Журнал рубежных оценок (РО)',
        mainTitle: '📊 Журнал рубежных оценок (РО)',
        groupLabel: '📁 Группа:',
        selectGroup: '-- Выберите группу --',
        newGroupBtn: '➕ Новая',
        renameGroupBtn: '✏️',
        deleteGroupBtn: '🗑️',
        loadListBtn: '📁 Загрузить список',
        addStudentBtn: '➕ Добавить студента',
        exportExcelBtn: '📊 Экспорт в Excel',
        instructionsBtn: '❓ Инструкция',
        roCountLabel: 'РО в семестре:',
        saveBtn: '💾 Сохранить',
        quickVoiceBtn: '🎤 Быстрый ввод',
        backupBtn: '📥 Бэкап',
        restoreBtn: '📂 Восстановить',
        resetBtn: '🗑️ Сброс',
        voiceStartBtn: '🎤 Начать',
        voiceCloseBtn: '✖️ Закрыть',
        voiceHelpText: '📌 Скажите: "Иванов 85" или "Петров 90" или "всем 75"',
        voiceStatusIdle: 'Нажмите для голосового ввода',
        voiceStatusListening: '🎤 Слушаю... Скажите оценку',
        voiceStatusEnded: 'Голосовой ввод завершен',
        groupModalCreate: '➕ Создать новую группу',
        groupModalRename: '✏️ Переименовать группу',
        groupNameLabel: 'Название группы:',
        groupCancelBtn: 'Отмена',
        groupCreateBtn: '➕ Создать',
        groupSaveBtn: '💾 Сохранить',
        addStudentTitle: '➕ Добавить нового студента',
        studentNameLabel: 'ФИО Студента:',
        addStudentCancelBtn: 'Отмена',
        addStudentConfirmBtn: '➕ Добавить',
        editStudentTitle: '✏️ Редактировать студента',
        editStudentNameLabel: 'ФИО Студента:',
        deleteStudentBtn: '🗑️ Удалить',
        editStudentCancelBtn: 'Отмена',
        editStudentSaveBtn: '💾 Сохранить',
        instructionsTitle: '📖 Полная инструкция',
        actions: 'Действия',
        finalGrade: '1-Семестр (Итог)',
        letter: 'Буква',
        gpa: 'GPA',
        finalTab: '🏆 Итоги',
        editColumnNamesBtn: '✏️ Названия колонок',
        saveColumnNamesBtn: '💾 Сохранить',
        cancelBtn: 'Отмена',
        columnDefault: (c) => `Оц.${c}`,
        avgRO: (r) => `Средний РО-${r}`,
        alertNoGroup: '❌ Сначала создайте или выберите группу!',
        alertNoData: '❌ Нет данных для экспорта!',
        alertVoiceNotSupported: '❌ Ваш браузер не поддерживает голосовой ввод.',
        successDataSaved: '✅ Данные сохранены!',
        successBackupSaved: (n) => `✅ Бэкап сохранен как "${n}.json"`,
        successBackupRestored: (c) => `✅ Бэкап восстановлен! Групп: ${c}`,
        successExcelCreated: (n) => `✅ Файл "${n}.xlsx" создан!`,
        successAllDataReset: '✅ Все данные сброшены!',
        successGroupDeleted: '✅ Группа удалена!',
        successGroupRenamed: (n) => `✅ Группа переименована в "${n}"!`,
        successGroupCreated: (n) => `✅ Группа "${n}" создана!`,
        successStudentsLoaded: (c, g) => `✅ Загружено ${c} студентов в "${g}"!`,
        successStudentAdded: (n, g) => `✅ Студент "${n}" добавлен в "${g}"!`,
        successStudentUpdated: (o, n) => `✅ "${o}" изменен на "${n}"!`,
        successStudentDeleted: (g) => `✅ Студент удален из "${g}"!`,
        successColumnNamesSaved: '✅ Названия колонок сохранены!',
        errorInvalidScore: 'Введите число 0-100 или "Н" (неявка)',
        errorGroupExists: '❌ Группа с таким названием уже существует!',
        errorStudentExists: '❌ Студент с таким ФИО уже существует!',
        errorEnterGroupName: '❌ Введите название группы',
        errorEnterStudentName: '❌ Введите ФИО студента!',
        errorNoBackupData: '❌ Нет данных для бэкапа!',
        errorBackupFailed: '❌ Ошибка при создании бэкапа',
        errorRestoreFailed: '❌ Ошибка при восстановлении бэкапа.',
        errorExcelFailed: '❌ Ошибка при создании Excel файла.',
        confirmReset: '⚠️ Сбросить ВСЕ данные ВСЕХ групп?\nДействие нельзя отменить!',
        confirmDeleteGroup: (g) => `⚠️ Удалить группу "${g}"?\nВсе данные будут потеряны!`,
        confirmDeleteStudent: (s) => `⚠️ Удалить студента "${s}"?`,
        confirmOverwriteStudents: (g, c) => `⚠️ Заменить студентов в "${g}" (${c} чел.)?`,
        confirmRestore: (f) => `📂 Восстановить из "${f}"?\nТекущие данные будут заменены!`,
        createFirstGroup: '📁 Начните с создания группы',
        createFirstGroupDesc: 'Нажмите "➕ Новая" чтобы создать первую группу',
        createGroupBtn: '➕ Создать группу',
        noStudents: (g) => `📋 Нет студентов в "${g}"`,
        noStudentsDesc: 'Нажмите "Загрузить список" или "Добавить студента"',
        noData: 'Загрузите список студентов',
        searchPlaceholder: '🔍 Поиск студента...',
        gradesCountLabel: (r) => `Оценок в РО-${r}:`,
        absentMark: 'Н',
        moodleSaved: '✓ Сохранено в Moodle'
    },
    kz: {
        pageTitle: 'Бағалау журналы (РО)',
        mainTitle: '📊 Бағалау журналы (РО)',
        groupLabel: '📁 Топ:',
        selectGroup: '-- Топты таңдаңыз --',
        newGroupBtn: '➕ Жаңа',
        renameGroupBtn: '✏️',
        deleteGroupBtn: '🗑️',
        loadListBtn: '📁 Тізімді жүктеу',
        addStudentBtn: '➕ Студент қосу',
        exportExcelBtn: '📊 Excel-ге шығару',
        instructionsBtn: '❓ Нұсқаулық',
        roCountLabel: 'Семестрдегі РО:',
        saveBtn: '💾 Сақтау',
        quickVoiceBtn: '🎤 Жылдам енгізу',
        backupBtn: '📥 Көшірме',
        restoreBtn: '📂 Қалпына келтіру',
        resetBtn: '🗑️ Тазалау',
        voiceStartBtn: '🎤 Бастау',
        voiceCloseBtn: '✖️ Жабу',
        voiceHelpText: '📌 Айтыңыз: "Иванов 85" немесе "барлығына 75"',
        voiceStatusIdle: 'Дауыстық енгізу үшін басыңыз',
        voiceStatusListening: '🎤 Тыңдап тұрмын...',
        voiceStatusEnded: 'Дауыстық енгізу аяқталды',
        groupModalCreate: '➕ Жаңа топ құру',
        groupModalRename: '✏️ Топтың атын өзгерту',
        groupNameLabel: 'Топтың аты:',
        groupCancelBtn: 'Болдырмау',
        groupCreateBtn: '➕ Құру',
        groupSaveBtn: '💾 Сақтау',
        addStudentTitle: '➕ Жаңа студент қосу',
        studentNameLabel: 'Студенттің Т.А.Ә.:',
        addStudentCancelBtn: 'Болдырмау',
        addStudentConfirmBtn: '➕ Қосу',
        editStudentTitle: '✏️ Студентті өңдеу',
        editStudentNameLabel: 'Студенттің Т.А.Ә.:',
        deleteStudentBtn: '🗑️ Жою',
        editStudentCancelBtn: 'Болдырмау',
        editStudentSaveBtn: '💾 Сақтау',
        instructionsTitle: '📖 Нұсқаулық',
        actions: 'Әрекеттер',
        finalGrade: '1-Семестр (Қорытынды)',
        letter: 'Әріп',
        gpa: 'GPA',
        finalTab: '🏆 Қорытынды',
        editColumnNamesBtn: '✏️ Баған атаулары',
        saveColumnNamesBtn: '💾 Сақтау',
        cancelBtn: 'Болдырмау',
        columnDefault: (c) => `Бағ.${c}`,
        avgRO: (r) => `Орташа РО-${r}`,
        alertNoGroup: '❌ Алдымен топ құрыңыз!',
        alertNoData: '❌ Экспорттау үшін деректер жоқ!',
        alertVoiceNotSupported: '❌ Браузер дауыстық енгізуді қолдамайды.',
        successDataSaved: '✅ Деректер сақталды!',
        successBackupSaved: (n) => `✅ Көшірме "${n}.json" сақталды`,
        successBackupRestored: (c) => `✅ Көшірме қалпына келтірілді! Топтар: ${c}`,
        successExcelCreated: (n) => `✅ "${n}.xlsx" жасалды!`,
        successAllDataReset: '✅ Барлық деректер тазаланды!',
        successGroupDeleted: '✅ Топ жойылды!',
        successGroupRenamed: (n) => `✅ Топ "${n}" болып өзгертілді!`,
        successGroupCreated: (n) => `✅ "${n}" тобы құрылды!`,
        successStudentsLoaded: (c, g) => `✅ "${g}" тобына ${c} студент жүктелді!`,
        successStudentAdded: (n, g) => `✅ "${n}" студенті "${g}" тобына қосылды!`,
        successStudentUpdated: (o, n) => `✅ "${o}" → "${n}" өзгертілді!`,
        successStudentDeleted: (g) => `✅ Студент "${g}" тобынан жойылды!`,
        successColumnNamesSaved: '✅ Баған атаулары сақталды!',
        errorInvalidScore: '0-100 аралығындағы сан немесе "Ж" (жоқ) енгізіңіз',
        errorGroupExists: '❌ Мұндай топ бар!',
        errorStudentExists: '❌ Мұндай студент бар!',
        errorEnterGroupName: '❌ Топтың атын енгізіңіз',
        errorEnterStudentName: '❌ Студенттің Т.А.Ә. енгізіңіз!',
        errorNoBackupData: '❌ Көшірме үшін деректер жоқ!',
        errorBackupFailed: '❌ Көшірме жасау кезінде қате',
        errorRestoreFailed: '❌ Көшірмені қалпына келтіру кезінде қате.',
        errorExcelFailed: '❌ Excel файлын жасау кезінде қате.',
        confirmReset: '⚠️ БАРЛЫҚ деректерді тазалау керек пе?',
        confirmDeleteGroup: (g) => `⚠️ "${g}" тобын жою керек пе?`,
        confirmDeleteStudent: (s) => `⚠️ "${s}" студентін жою керек пе?`,
        confirmOverwriteStudents: (g, c) => `⚠️ "${g}" тобындағы студенттерді (${c}) ауыстыру керек пе?`,
        confirmRestore: (f) => `📂 "${f}" файлынан қалпына келтіру керек пе?`,
        createFirstGroup: '📁 Топ құрудан бастаңыз',
        createFirstGroupDesc: '"➕ Жаңа" батырмасын басыңыз',
        createGroupBtn: '➕ Топ құру',
        noStudents: (g) => `📋 "${g}" тобында студенттер жоқ`,
        noStudentsDesc: '"Тізімді жүктеу" немесе "Студент қосу" батырмасын басыңыз',
        noData: 'Студенттер тізімін жүктеңіз',
        searchPlaceholder: '🔍 Студентті іздеу...',
        gradesCountLabel: (r) => `РО-${r} бағандары:`,
        absentMark: 'Ж',
        moodleSaved: '✓ Moodle-ге сақталды'
    }
};

function t(key, ...args) {
    let text = translations[currentLang][key];
    if (typeof text === 'function') text = text(...args);
    return text || translations['ru'][key] || key;
}

function updateElementText(id, key, ...args) {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key, ...args);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('journalLanguage', lang);
    document.getElementById('langRuBtn').classList.toggle('active', lang === 'ru');
    document.getElementById('langKzBtn').classList.toggle('active', lang === 'kz');
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'kk';
    document.title = t('pageTitle');

    const ids = ['mainTitle','groupLabel','loadListBtn','addStudentBtn','exportExcelBtn',
                 'instructionsBtn','roCountLabel','saveBtn','quickVoiceBtn','backupBtn',
                 'restoreBtn','resetBtn','voiceStartBtn','voiceCloseBtn','voiceHelpText',
                 'voiceStatusText','groupCancelBtn','groupNameLabel','addStudentTitle',
                 'studentNameLabel','addStudentCancelBtn','addStudentConfirmBtn',
                 'editStudentTitle','editStudentNameLabel','deleteStudentBtn',
                 'editStudentCancelBtn','editStudentSaveBtn','instructionsTitle'];
    ids.forEach(id => updateElementText(id, id));

    const groupSelect = document.getElementById('groupSelect');
    if (groupSelect && groupSelect.options[0]) {
        groupSelect.options[0].text = t('selectGroup');
    }

    renderTabsHeader();
    renderTabsContent();
    updateInfoBar();
}

function loadSavedLanguage() {
    const savedLang = localStorage.getItem('journalLanguage');
    setLanguage(savedLang === 'kz' ? 'kz' : 'ru');
}

// ============ ПЕРЕКЛЮЧЕНИЕ ТЕМ ============
function setTheme(theme) {
    localStorage.setItem('appTheme', theme);
    document.body.classList.remove('theme-win2k', 'theme-winxp', 'theme-vista', 'theme-win7', 'theme-win81', 'theme-win10', 'theme-macos9', 'theme-macosx');
    document.body.classList.add(`theme-${theme}`);
    
    const themes = ['win2k', 'winxp', 'vista', 'win7', 'win81', 'win10', 'macos9', 'macosx'];
    themes.forEach(t => {
        const btn = document.getElementById(`theme${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (btn) btn.classList.toggle('active', t === theme);
    });
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('appTheme');
    if (savedTheme && ['win2k', 'winxp', 'vista', 'win7', 'win81', 'win10', 'macos9', 'macosx'].includes(savedTheme)) {
        setTheme(savedTheme);
    } else {
        setTheme('win2k');
    }
}

// ============ ПЕРЕМЕННЫЕ ============
let allGroups = {};
let currentGroup = "";
let activeROCount = 4;
let activeTab = 1;
let currentEditIndex = -1;
let gradesCountConfig = {};
let gradesData = {};
let columnNames = {};
let students = [];

// ============ ПАРАМЕТРЫ MOODLE ============
let isMoodle = false;
let moodleApiUrl = null;
let moodleCourseId = null;
let moodleSesskey = null;

// ============ ГОЛОСОВОЙ ВВОД ============
let recognition = null;
let isListening = false;
let currentVoiceRO = null;
let currentVoiceCol = null;
let currentVoiceStudentIndex = null;

// ============ ИНИЦИАЛИЗАЦИЯ MOODLE ============
function initMoodleParams() {
    const urlParams = new URLSearchParams(window.location.search);
    isMoodle = urlParams.get('moodle') === '1';
    moodleApiUrl = urlParams.get('apiurl');
    moodleCourseId = urlParams.get('courseid');
    moodleSesskey = urlParams.get('sesskey');
    
    // Если есть параметр group, выбираем группу
    const groupParam = urlParams.get('group');
    if (groupParam && isMoodle) {
        setTimeout(() => {
            const select = document.getElementById('groupSelect');
            if (select) {
                for (let i = 0; i < select.options.length; i++) {
                    if (select.options[i].text.includes(groupParam) || select.options[i].value === groupParam) {
                        select.value = select.options[i].value;
                        switchGroup();
                        break;
                    }
                }
            }
        }, 500);
    }
}

// ============ СОХРАНЕНИЕ В MOODLE ============
async function saveToMoodle(groupid, roNumber, columnNumber, userid, value, columnName) {
    if (!isMoodle || !moodleApiUrl) return false;
    
    try {
        const response = await fetch(moodleApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                action: 'save_grades',
                courseid: moodleCourseId,
                groupid: groupid,
                ro_number: roNumber,
                column_number: columnNumber,
                userid: userid,
                grade: value,
                column_name: columnName,
                sesskey: moodleSesskey
            })
        });
        
        const result = await response.json();
        if (result.success) {
            showMoodleSaveIndicator();
            return true;
        }
    } catch(e) {
        console.error('Ошибка сохранения в Moodle:', e);
    }
    return false;
}

function showMoodleSaveIndicator() {
    let indicator = document.getElementById('moodleIndicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'moodleIndicator';
        indicator.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#0066CC; color:white; padding:8px 16px; border-radius:8px; font-size:12px; z-index:1000; opacity:0; transition:opacity 0.3s;';
        document.body.appendChild(indicator);
    }
    indicator.textContent = t('moodleSaved');
    indicator.style.opacity = '1';
    setTimeout(() => { indicator.style.opacity = '0'; }, 2000);
}

function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) return false;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function() {
        isListening = true;
        const startBtn = document.getElementById('voiceStartBtn');
        if (startBtn) {
            startBtn.classList.add('listening');
            startBtn.innerHTML = '🔴 ' + t('voiceStatusListening');
        }
        updateElementText('voiceStatusText', 'voiceStatusListening');
        document.getElementById('voiceResult').innerHTML = 'Слушаю...';
    };

    recognition.onend = function() {
        isListening = false;
        const startBtn = document.getElementById('voiceStartBtn');
        if (startBtn) {
            startBtn.classList.remove('listening');
            startBtn.innerHTML = '🎤 ' + t('voiceStartBtn');
        }
        updateElementText('voiceStatusText', 'voiceStatusEnded');
    };

    recognition.onresult = function(event) {
        processVoiceCommand(event.results[0][0].transcript);
    };

    recognition.onerror = function(event) {
        console.error('Ошибка распознавания:', event.error);
        document.getElementById('voiceResult').innerHTML = '❌ Ошибка: ' + event.error;
        updateElementText('voiceStatusText', 'voiceStatusEnded');
        isListening = false;
        const startBtn = document.getElementById('voiceStartBtn');
        if (startBtn) {
            startBtn.classList.remove('listening');
            startBtn.innerHTML = '🎤 ' + t('voiceStartBtn');
        }
    };
    return true;
}

function openVoiceInput(roIndex, colIndex, studentIndex) {
    if (!recognition && !initSpeechRecognition()) {
        alert(t('alertVoiceNotSupported'));
        return;
    }
    currentVoiceRO = roIndex;
    currentVoiceCol = colIndex;
    currentVoiceStudentIndex = studentIndex;
    const studentName = students[studentIndex];
    document.getElementById('voiceResult').innerHTML = `Готов к вводу:<br>📌 ${studentName}<br>📊 РО-${roIndex}, колонка ${colIndex}`;
    document.getElementById('voicePanel').style.display = 'block';
    updateElementText('voiceStatusText', 'voiceStatusIdle');
}

function closeVoicePanel() {
    if (isListening && recognition) recognition.stop();
    document.getElementById('voicePanel').style.display = 'none';
    currentVoiceRO = currentVoiceCol = currentVoiceStudentIndex = null;
}

function startVoiceInput() {
    if (!recognition && !initSpeechRecognition()) {
        alert(t('alertVoiceNotSupported'));
        return;
    }
    try { recognition.start(); } catch(e) { alert('Не удалось запустить голосовой ввод.'); }
}

function processVoiceCommand(transcript) {
    const text = transcript.toLowerCase();
    document.getElementById('voiceResult').innerHTML = `Распознано: "${transcript}"<br>Обработка...`;
    const numbers = text.match(/\d{1,3}/g);
    let score = null;
    if (numbers && numbers.length > 0) {
        score = parseInt(numbers[0]);
        if (score > 100) score = 100;
        if (score < 0) score = 0;
    }
    const wordNumbers = {
        'ноль':0,'один':1,'два':2,'три':3,'четыре':4,'пять':5,'шесть':6,
        'семь':7,'восемь':8,'девять':9,'десять':10,'одиннадцать':11,'двенадцать':12,
        'тринадцать':13,'четырнадцать':14,'пятнадцать':15,'шестнадцать':16,
        'семнадцать':17,'восемнадцать':18,'девятнадцать':19,'двадцать':20,
        'тридцать':30,'сорок':40,'пятьдесят':50,'шестьдесят':60,'семьдесят':70,
        'восемьдесят':80,'девяносто':90,'сто':100
    };
    if (score === null) {
        for (const [word, num] of Object.entries(wordNumbers)) {
            if (text.includes(word)) { score = num; break; }
        }
    }
    if (text.includes('все') || text.includes('всем')) {
        if (score !== null && activeTab !== 'final') {
            for (let i = 0; i < students.length; i++) {
                const colCount = gradesCountConfig[activeTab] || 3;
                for (let c = 1; c <= colCount; c++) saveGrade(i, activeTab, c, score);
            }
            document.getElementById('voiceResult').innerHTML = `✅ Оценка ${score} всем (${students.length})`;
            setTimeout(() => closeVoicePanel(), 2000);
        }
        return;
    }
    let foundStudentIndex = -1;
    for (let i = 0; i < students.length; i++) {
        const lastName = students[i].split(' ')[0].toLowerCase();
        if (text.includes(lastName)) { foundStudentIndex = i; break; }
    }
    if (foundStudentIndex !== -1 && score !== null && activeTab !== 'final') {
        saveGrade(foundStudentIndex, activeTab, currentVoiceCol || 1, score);
        document.getElementById('voiceResult').innerHTML = `✅ Оценка ${score} → ${students[foundStudentIndex]}`;
        setTimeout(() => closeVoicePanel(), 2000);
    } else if (score !== null && currentVoiceStudentIndex !== null) {
        saveGrade(currentVoiceStudentIndex, currentVoiceRO, currentVoiceCol, score);
        document.getElementById('voiceResult').innerHTML = `✅ Оценка ${score} → ${students[currentVoiceStudentIndex]}`;
        setTimeout(() => closeVoicePanel(), 2000);
    } else if (score !== null) {
        document.getElementById('voiceResult').innerHTML = '❌ Скажите "Иванов 85"';
    } else {
        document.getElementById('voiceResult').innerHTML = '❌ Не удалось распознать оценку';
    }
    saveCurrentGroup();
}

function quickVoiceInput() {
    if (!currentGroup) { alert(t('alertNoGroup')); return; }
    if (activeTab === 'final') { alert('❌ Переключитесь на вкладку с оценками'); return; }
    if (!recognition && !initSpeechRecognition()) { alert(t('alertVoiceNotSupported')); return; }
    document.getElementById('voiceResult').innerHTML = `Готов к вводу (РО-${activeTab})<br>Скажите: "Иванов 85" или "всем 75"`;
    document.getElementById('voicePanel').style.display = 'block';
    updateElementText('voiceStatusText', 'voiceStatusIdle');
    currentVoiceRO = activeTab;
    currentVoiceCol = 1;
    currentVoiceStudentIndex = null;
}

// ============ ГРУППЫ И ДАННЫЕ ============
function loadAllGroups() {
    const saved = localStorage.getItem('journalGroups');
    if (saved) {
        try { allGroups = JSON.parse(saved); return true; }
        catch(e) { console.error('Ошибка загрузки групп:', e); }
    }
    return false;
}

function saveAllGroups() {
    try {
        localStorage.setItem('journalGroups', JSON.stringify(allGroups));
        showSaveIndicator();
        return true;
    } catch(e) { return false; }
}

function saveCurrentGroup() {
    if (!currentGroup) return;
    allGroups[currentGroup] = {
        students, activeROCount, gradesCountConfig, gradesData, columnNames,
        lastSaved: new Date().toISOString()
    };
    saveAllGroups();
}

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

function switchGroup() {
    const select = document.getElementById('groupSelect');
    if (!select) return;
    const newGroup = select.value;
    if (!newGroup) return;
    if (currentGroup) saveCurrentGroup();
    currentGroup = newGroup;
    loadGroup(currentGroup);
}

function openGroupModal() {
    updateElementText('groupModalTitle', 'groupModalCreate');
    document.getElementById('groupModalBtn').innerHTML = t('groupCreateBtn');
    document.getElementById('groupName').value = '';
    document.getElementById('groupModal').style.display = 'block';
}

function renameCurrentGroup() {
    if (!currentGroup) { alert('❌ Сначала выберите группу'); return; }
    updateElementText('groupModalTitle', 'groupModalRename');
    document.getElementById('groupModalBtn').innerHTML = t('groupSaveBtn');
    document.getElementById('groupName').value = currentGroup;
    document.getElementById('groupModal').style.display = 'block';
}

function deleteCurrentGroup() {
    if (!currentGroup) { alert('❌ Сначала выберите группу'); return; }
    if (!confirm(t('confirmDeleteGroup', currentGroup))) return;
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
    alert(t('successGroupDeleted'));
}

function saveGroup() {
    const newName = document.getElementById('groupName').value.trim();
    if (!newName) { alert(t('errorEnterGroupName')); return; }
    const isRename = document.getElementById('groupModalTitle').innerHTML.includes('Переименовать') ||
                     document.getElementById('groupModalTitle').innerHTML.includes('өзгерту');
    if (isRename) {
        if (newName === currentGroup) { closeGroupModal(); return; }
        if (allGroups[newName]) { alert(t('errorGroupExists')); return; }
        allGroups[newName] = allGroups[currentGroup];
        delete allGroups[currentGroup];
        currentGroup = newName;
        saveAllGroups();
        updateGroupSelect();
        alert(t('successGroupRenamed', newName));
    } else {
        if (allGroups[newName]) { alert(t('errorGroupExists')); return; }
        if (currentGroup) saveCurrentGroup();
        allGroups[newName] = {
            students: [], activeROCount: 4, gradesCountConfig: {}, gradesData: {}, columnNames: {},
            lastSaved: new Date().toISOString()
        };
        currentGroup = newName;
        saveAllGroups();
        updateGroupSelect();
        loadGroup(currentGroup);
        alert(t('successGroupCreated', newName));
    }
    closeGroupModal();
}

function updateGroupSelect() {
    const select = document.getElementById('groupSelect');
    if (!select) return;
    const currentValue = currentGroup;
    select.innerHTML = `<option value="">${t('selectGroup')}</option>`;
    Object.keys(allGroups).sort().forEach(group => {
        const option = document.createElement('option');
        option.value = group;
        option.textContent = `${group} (${allGroups[group].students?.length || 0} студ.)`;
        if (group === currentValue) option.selected = true;
        select.appendChild(option);
    });
}

function closeGroupModal() { document.getElementById('groupModal').style.display = 'none'; }

function showSaveIndicator() {
    let indicator = document.getElementById('saveIndicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'saveIndicator';
        indicator.textContent = '✓ Сохранено';
        document.body.appendChild(indicator);
    }
    indicator.classList.add('show');
    setTimeout(() => indicator.classList.remove('show'), 1500);
}

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
                    students: data.students, activeROCount: data.activeROCount || 4,
                    gradesCountConfig: data.gradesCountConfig || {},
                    gradesData: data.gradesData || {}, columnNames: data.columnNames || {},
                    lastSaved: data.lastSaved
                };
                saveAllGroups();
                localStorage.removeItem('journalData');
                currentGroup = defaultGroup;
                loadGroup(currentGroup);
                updateGroupSelect();
                return true;
            }
        } catch(e) {}
    }
    return false;
}

function exportBackup() {
    if (Object.keys(allGroups).length === 0) { alert(t('errorNoBackupData')); return; }
    const now = new Date();
    const defaultName = `журнал_РО_${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    let fileName = prompt('💾 Название файла для бэкапа:', defaultName);
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
        alert(t('successBackupSaved', fileName));
    } catch(e) { alert(t('errorBackupFailed')); }
}

function importBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (!confirm(t('confirmRestore', file.name))) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                if (data && typeof data === 'object') {
                    const firstKey = Object.keys(data)[0];
                    if (data[firstKey] && data[firstKey].students !== undefined) allGroups = data;
                    else if (data.students !== undefined) allGroups = { "Группа 1": data };
                    else throw new Error();
                    saveAllGroups();
                    updateGroupSelect();
                    if (Object.keys(allGroups).length > 0) {
                        currentGroup = Object.keys(allGroups)[0];
                        loadGroup(currentGroup);
                    }
                    alert(t('successBackupRestored', Object.keys(allGroups).length));
                } else throw new Error();
            } catch(e) { alert(t('errorRestoreFailed')); }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetAllData() {
    if (!confirm(t('confirmReset'))) return;
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
    alert(t('successAllDataReset'));
}

function manualSave() {
    if (!currentGroup) { alert(t('alertNoGroup')); return; }
    saveCurrentGroup();
    alert(t('successDataSaved'));
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
        'A':'4,0','A-':'3,67','B+':'3,33','B':'3,0','B-':'2,67',
        'C+':'2,33','C':'2,0','C-':'1,67','D+':'1,33','D':'1,0','F':'0'
    };
    return points[letter] || '0';
}

function loadStudentsFromBrowser(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (!currentGroup) { alert(t('alertNoGroup')); event.target.value = ''; return; }
    const reader = new FileReader();
    reader.onload = function(e) {
        const newStudents = e.target.result.split(/\r?\n/).map(s => s.trim()).filter(s => s.length > 0);
        if (students.length > 0 && newStudents.length > 0 && !confirm(t('confirmOverwriteStudents', currentGroup, students.length))) {
            event.target.value = '';
            return;
        }
        students = newStudents;
        event.target.value = '';
        gradesData = {};
        columnNames = {};
        gradesCountConfig = {};
        initApp();
        saveCurrentGroup();
        updateInfoBar();
        alert(t('successStudentsLoaded', students.length, currentGroup));
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
                for (let c = 1; c <= gradesCountConfig[r]; c++) columnNames[r][c] = t('columnDefault', c);
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
        html += `<button class="tab-btn ${activeTab === r ? 'active' : ''}" onclick="switchTab(${r})">РО-${r}</button>`;
    }
    html += `<button class="tab-btn final-tab ${activeTab === 'final' ? 'active' : ''}" onclick="switchTab('final')">${t('finalTab')}</button>`;
    document.getElementById('tabsHeader').innerHTML = html;
}

function switchTab(tabId) {
    activeTab = tabId;
    renderTabsHeader();
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    const pane = document.getElementById(`pane_${tabId}`);
    if (pane) pane.classList.add('active');
    if (tabId === 'final') renderFinalTable();
}

function openColumnNamesModal(roIndex) {
    const colCount = gradesCountConfig[roIndex];
    let modalHtml = `<div id="columnNamesModal" class="modal" style="display:block;"><div class="modal-content"><div class="modal-header"><h3>✏️ ${t('editColumnNamesBtn')} РО-${roIndex}</h3><span class="close" onclick="closeModal()">&times;</span></div><div class="modal-body column-names-list">`;
    for (let c = 1; c <= colCount; c++) {
        const currentName = columnNames[roIndex][c] || t('columnDefault', c);
        modalHtml += `<div class="column-name-item"><label>Колонка ${c}:</label><input type="text" id="colName_${roIndex}_${c}" value="${currentName.replace(/"/g, '&quot;')}" placeholder="Например: 12.03"></div>`;
    }
    modalHtml += `</div><div class="modal-footer"><button onclick="saveColumnNames(${roIndex})" class="excel-btn">${t('saveColumnNamesBtn')}</button><button onclick="closeModal()">${t('cancelBtn')}</button></div></div></div>`;
    const oldModal = document.getElementById('columnNamesModal');
    if (oldModal) oldModal.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeModal() { const modal = document.getElementById('columnNamesModal'); if (modal) modal.remove(); }

function saveColumnNames(roIndex) {
    const colCount = gradesCountConfig[roIndex];
    for (let c = 1; c <= colCount; c++) {
        const input = document.getElementById(`colName_${roIndex}_${c}`);
        if (input && input.value.trim()) columnNames[roIndex][c] = input.value.trim();
    }
    closeModal();
    renderTabsContent();
    saveCurrentGroup();
    alert(t('successColumnNamesSaved'));
}

function filterStudents(query) {
    const rows = document.querySelectorAll('#tabsContent tbody tr');
    const lowerQuery = query.toLowerCase().trim();
    rows.forEach(row => {
        const nameCell = row.querySelector('.name-col');
        if (nameCell) row.style.display = nameCell.textContent.toLowerCase().includes(lowerQuery) ? '' : 'none';
    });
}

function renderTabsContent() {
    const contentContainer = document.getElementById('tabsContent');
    contentContainer.innerHTML = '';

    if (!currentGroup) {
        contentContainer.innerHTML = `<div class="empty-state"><h3>${t('createFirstGroup')}</h3><p>${t('createFirstGroupDesc')}</p><button onclick="openGroupModal()">${t('createGroupBtn')}</button></div>`;
        return;
    }
    if (students.length === 0) {
        contentContainer.innerHTML = `<div class="empty-state"><h3>${t('noStudents', currentGroup)}</h3><p>${t('noStudentsDesc')}</p><div class="empty-state-actions"><button onclick="document.getElementById('txtFileInput').click()">📁 ${t('loadListBtn')}</button><button onclick="openAddStudentModal()">➕ ${t('addStudentBtn')}</button></div></div>`;
        return;
    }

    for (let r = 1; r <= activeROCount; r++) {
        const isActive = (activeTab === r) ? 'active' : '';
        const colCount = gradesCountConfig[r] || 3;

        let paneHtml = `<div class="tab-pane ${isActive}" id="pane_${r}">
            <div class="ro-controls">
                <div class="ro-controls-row">
                    <input type="text" id="studentSearch_${r}" placeholder="${t('searchPlaceholder')}" oninput="filterStudents(this.value)" class="search-input">
                    <label>${t('gradesCountLabel', r)}</label>
                    <input type="number" min="1" max="50" value="${colCount}" onchange="changeGradesCount(${r}, this.value)" class="count-input">
                    <button class="edit-names-btn" onclick="openColumnNamesModal(${r})">✏️ ${t('editColumnNamesBtn')}</button>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr><th>№</th><th>ФИО Студента</th><th>${t('actions')}</th>`;
        for (let c = 1; c <= colCount; c++) {
            const colName = (columnNames[r] && columnNames[r][c]) || t('columnDefault', c);
            paneHtml += `<th>${escapeHtml(colName)}</th>`;
        }
        paneHtml += `<th>${t('avgRO', r)}</th></td></thead><tbody>`;
        
        for (let sIdx = 0; sIdx < students.length; sIdx++) {
            const student = students[sIdx];
            paneHtml += `<tr>
                <td>${sIdx + 1}</td>
                <td class="name-col">${escapeHtml(student)}<\/td>
                <td class="action-cell"><button onclick="openEditStudentModal(${sIdx})">✏️</button><\/td>`;
            for (let c = 1; c <= colCount; c++) {
                const val = (gradesData[sIdx] && gradesData[sIdx][r] && gradesData[sIdx][r][c] !== undefined) ? gradesData[sIdx][r][c] : '';
                paneHtml += `<td><div class="grade-cell"><input type="text" class="score-input" data-s="${sIdx}" data-r="${r}" data-c="${c}" value="${val === '' ? '' : val}" oninput="saveGrade(${sIdx}, ${r}, ${c}, this.value, this)" onkeydown="handleGradeKeydown(event, ${sIdx}, ${r}, ${c}, ${colCount})" placeholder="0-100 или ${t('absentMark')}"><button type="button" class="voice-input-btn" onclick="openVoiceInput(${r}, ${c}, ${sIdx})">🎤</button></div><\/td>`;
            }
            paneHtml += `<td class="result avg" id="avg_${sIdx}_${r}">${calcROAvg(sIdx, r)}<\/td>
            <tr>`;
        }
        paneHtml += `</tbody></table></div></div>`;
        contentContainer.innerHTML += paneHtml;
    }

    const isFinalActive = (activeTab === 'final') ? 'active' : '';
    contentContainer.innerHTML += `<div class="tab-pane ${isFinalActive}" id="pane_final"><div class="table-container"><table id="finalTable">追赶</div></div>`;
    if (activeTab === 'final') renderFinalTable();
}

function escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }

function handleGradeKeydown(event, sIdx, r, c, maxCols) {
    if (event.key === 'Enter' || event.key === 'ArrowDown') {
        event.preventDefault();
        const nextS = sIdx + 1;
        if (nextS < students.length) {
            const nextInput = document.querySelector(`input.score-input[data-s="${nextS}"][data-r="${r}"][data-c="${c}"]`);
            if (nextInput) { nextInput.focus(); nextInput.select(); }
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prevS = sIdx - 1;
        if (prevS >= 0) {
            const prevInput = document.querySelector(`input.score-input[data-s="${prevS}"][data-r="${r}"][data-c="${c}"]`);
            if (prevInput) { prevInput.focus(); prevInput.select(); }
        }
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (c < maxCols) {
            const nextInput = document.querySelector(`input.score-input[data-s="${sIdx}"][data-r="${r}"][data-c="${c+1}"]`);
            if (nextInput) { nextInput.focus(); nextInput.select(); }
        }
    } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (c > 1) {
            const prevInput = document.querySelector(`input.score-input[data-s="${sIdx}"][data-r="${r}"][data-c="${c-1}"]`);
            if (prevInput) { prevInput.focus(); prevInput.select(); }
        }
    }
}

function changeGradesCount(roIndex, newCount) {
    let count = parseInt(newCount) || 1;
    if (count < 1) count = 1;
    if (count > 50) count = 50;
    const oldCount = gradesCountConfig[roIndex] || 3;
    if (!columnNames[roIndex]) columnNames[roIndex] = {};
    if (count > oldCount) {
        for (let c = oldCount + 1; c <= count; c++) columnNames[roIndex][c] = t('columnDefault', c);
    }
    gradesCountConfig[roIndex] = count;
    renderTabsContent();
    saveCurrentGroup();
}

// ============ СОХРАНЕНИЕ ОЦЕНКИ (с поддержкой "Н" и Moodle) ============
function saveGrade(sIdx, roIndex, colIndex, value, inputElement) {
    let val;
    let isAbsent = false;
    
    if (value === '' || value === null) {
        val = undefined;
    } else {
        const trimmed = value.toString().trim().toUpperCase();
        if (trimmed === 'Н' || trimmed === 'Н.' || trimmed === 'Ж' || trimmed === 'Ж.') {
            val = t('absentMark');
            isAbsent = true;
        } else {
            val = parseInt(value);
        }
    }
    
    if (isAbsent || (!isNaN(val) && val >= 0 && val <= 100)) {
        if (!gradesData[sIdx]) gradesData[sIdx] = {};
        if (!gradesData[sIdx][roIndex]) gradesData[sIdx][roIndex] = {};
        gradesData[sIdx][roIndex][colIndex] = val;
        
        // Сохраняем в Moodle, если включено
        if (isMoodle && moodleApiUrl && currentGroup) {
            const columnName = columnNames[roIndex]?.[colIndex] || t('columnDefault', colIndex);
            saveToMoodle(currentGroup, roIndex, colIndex, sIdx, val, columnName);
        }
    } else if (value === '' || value === null) {
        if (gradesData[sIdx] && gradesData[sIdx][roIndex]) {
            delete gradesData[sIdx][roIndex][colIndex];
        }
    } else {
        alert(t('errorInvalidScore'));
        const oldVal = (gradesData[sIdx] && gradesData[sIdx][roIndex] && gradesData[sIdx][roIndex][colIndex] !== undefined) ? gradesData[sIdx][roIndex][colIndex] : '';
        if (inputElement) inputElement.value = oldVal;
        return;
    }
    const avgElement = document.getElementById(`avg_${sIdx}_${roIndex}`);
    if (avgElement) avgElement.innerText = calcROAvg(sIdx, roIndex);
    saveCurrentGroup();
}

// ============ РАСЧЕТ СРЕДНЕГО БАЛЛА РО (пропускает "Н") ============
function calcROAvg(sIdx, roIndex) {
    let sum = 0, count = 0;
    const targetCols = gradesCountConfig[roIndex] || 3;
    for (let c = 1; c <= targetCols; c++) {
        const value = gradesData[sIdx] && gradesData[sIdx][roIndex] && gradesData[sIdx][roIndex][c];
        if (value !== undefined && value !== null && value !== '' && value !== 'Н' && value !== 'Ж') {
            sum += value;
            count++;
        }
    }
    return count > 0 ? Math.round(sum / count) : '';
}

// ============ ИТОГОВАЯ ТАБЛИЦА ============
function renderFinalTable() {
    const table = document.getElementById('finalTable');
    if (!table) return;
    if (students.length === 0) {
        table.innerHTML = `<tr><td style="text-align:center; padding:40px;">${t('noData')}<\/td><\/tr>`;
        return;
    }
    let html = `<thead><tr><th>№</th><th>ФИО Студента</th>`;
    for (let r = 1; r <= activeROCount; r++) html += `<th>Итог РО-${r}</th>`;
    html += `<th>${t('finalGrade')}</th><th>${t('letter')}</th><th>${t('gpa')}</th></tr></thead><tbody>`;

    students.forEach((student, sIdx) => {
        const roValues = [];
        let allROHaveGrades = true;
        html += `<tr>
            <td>${sIdx + 1}</td>
            <td class="name-col">${escapeHtml(student)}<\/td>`;
        for (let r = 1; r <= activeROCount; r++) {
            const avg = calcROAvg(sIdx, r);
            html += `<td class="result">${avg}<\/td>`;
            if (avg === '' || avg === null) {
                allROHaveGrades = false;
            } else {
                roValues.push(avg);
            }
        }
        if (allROHaveGrades && roValues.length === activeROCount && activeROCount > 0) {
            const semAvg = Math.round(roValues.reduce((a, b) => a + b, 0) / activeROCount);
            const letter = getGradeLetter(semAvg);
            const gpa = getGradePoint(letter);
            html += `<td class="result avg">${semAvg}<\/td>
                     <td class="result letter">${letter}<\/td>
                     <td class="result gpa">${gpa}<\/td>`;
        } else {
            html += `<td class="result avg" style="color:#999;">—<\/td>
                     <td class="result letter" style="color:#999;">—<\/td>
                     <td class="result gpa" style="color:#999;">—<\/td>`;
        }
        html += `</tr>`;
    });
    html += `</tbody>`;
    table.innerHTML = html;
}

async function exportToExcel() {
    if (students.length === 0) { alert(t('alertNoData')); return; }
    const btn = document.querySelector('.excel-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = '⏳ Создание...';
    btn.disabled = true;
    try {
        if (typeof XLSX === 'undefined') await loadSheetJSLibrary();
        renderFinalTable();
        const data = [['№', 'ФИО Студента', ...Array(activeROCount).fill().map((_,i)=>`Итог РО-${i+1}`), t('finalGrade'), t('letter'), t('gpa')]];
        document.querySelectorAll('#finalTable tbody tr').forEach(tr => {
            const row = [];
            tr.querySelectorAll('td').forEach(td => row.push(td.innerText));
            data.push(row);
        });
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(data);
        ws['!cols'] = [{wch:5},{wch:30},...Array(activeROCount).fill({wch:12}),{wch:15},{wch:8},{wch:8}];
        XLSX.utils.book_append_sheet(wb, ws, `Ведомость_${currentGroup}`);
        const now = new Date();
        const def = `${currentGroup}_ведомость_${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
        let fn = prompt("📊 Название файла:", def);
        if (!fn) return;
        fn = fn.replace(/[\\/:*?"<>|]/g, '_').trim() || def;
        XLSX.writeFile(wb, `${fn}.xlsx`);
        alert(t('successExcelCreated', fn));
    } catch(e) { alert(t('errorExcelFailed')); }
    finally { btn.innerHTML = orig; btn.disabled = false; }
}

function loadSheetJSLibrary() {
    return new Promise((resolve) => {
        if (typeof XLSX !== 'undefined') resolve();
        else {
            const script = document.createElement('script');
            script.src = 'https://cdn.sheetjs.com/xlsx-0.20.2/package/dist/xlsx.full.min.js';
            script.onload = () => resolve();
            document.head.appendChild(script);
        }
    });
}

function openAddStudentModal() {
    if (!currentGroup) { alert(t('alertNoGroup')); return; }
    document.getElementById('newStudentName').value = '';
    document.getElementById('addStudentModal').style.display = 'block';
}

function closeAddStudentModal() { document.getElementById('addStudentModal').style.display = 'none'; }

function addStudent() {
    const name = document.getElementById('newStudentName').value.trim();
    if (!name) { alert(t('errorEnterStudentName')); return; }
    if (students.includes(name)) { alert(t('errorStudentExists')); return; }
    students.push(name);
    const idx = students.length - 1;
    gradesData[idx] = {};
    for (let r = 1; r <= activeROCount; r++) gradesData[idx][r] = {};
    closeAddStudentModal();
    initApp();
    saveCurrentGroup();
    updateInfoBar();
    alert(t('successStudentAdded', name, currentGroup));
}

function openEditStudentModal(idx) {
    currentEditIndex = idx;
    document.getElementById('editStudentName').value = students[idx];
    document.getElementById('editStudentModal').style.display = 'block';
}

function closeEditStudentModal() { document.getElementById('editStudentModal').style.display = 'none'; currentEditIndex = -1; }

function updateStudent() {
    const nn = document.getElementById('editStudentName').value.trim();
    if (!nn) { alert(t('errorEnterStudentName')); return; }
    if (nn !== students[currentEditIndex] && students.includes(nn)) { alert(t('errorStudentExists')); return; }
    const old = students[currentEditIndex];
    students[currentEditIndex] = nn;
    closeEditStudentModal();
    initApp();
    saveCurrentGroup();
    alert(t('successStudentUpdated', old, nn));
}

function deleteStudent() {
    if (!confirm(t('confirmDeleteStudent', students[currentEditIndex]))) return;
    students.splice(currentEditIndex, 1);
    const nd = {};
    for (let i = 0; i < students.length; i++) {
        const oi = i < currentEditIndex ? i : i + 1;
        nd[i] = gradesData[oi] || {};
        for (let r = 1; r <= activeROCount; r++) {
            if (!nd[i][r]) nd[i][r] = {};
            const mc = gradesCountConfig[r] || 3;
            for (let c = 1; c <= mc; c++) {
                if (gradesData[oi] && gradesData[oi][r] && gradesData[oi][r][c] !== undefined) nd[i][r][c] = gradesData[oi][r][c];
            }
        }
    }
    gradesData = nd;
    closeEditStudentModal();
    initApp();
    saveCurrentGroup();
    updateInfoBar();
    alert(t('successStudentDeleted', currentGroup));
}

function updateInfoBar() {
    const ib = document.getElementById('infoBar');
    const sc = document.getElementById('studentCount');
    if (!sc) return;
    if (currentGroup && students.length > 0) {
        sc.innerHTML = `🎓 Группа: <strong>${currentGroup}</strong> | 👨‍🎓 Студентов: <strong>${students.length}</strong>`;
        ib.style.display = 'flex';
    } else if (currentGroup && students.length === 0) {
        sc.innerHTML = `🎓 Группа: <strong>${currentGroup}</strong> | 👨‍🎓 Студентов: 0`;
        ib.style.display = 'flex';
    } else {
        ib.style.display = 'none';
    }
}

function renderInstructionsContent() {
    const c = document.getElementById('instructionsContent');
    if (!c) return;
    c.innerHTML = `<div class="instruction-section"><h4>📁 1. Управление группами</h4><ul><li><strong>Создание группы:</strong> Нажмите "➕ Новая"</li><li><strong>Переключение:</strong> Выберите из списка</li><li><strong>Переименование:</strong> Нажмите "✏️"</li><li><strong>Удаление:</strong> Нажмите "🗑️"</li></ul></div>
<div class="instruction-section"><h4>📋 2. Работа со студентами</h4><ul><li><strong>Загрузка:</strong> .txt файл с ФИО</li><li><strong>Добавление:</strong> "➕ Добавить студента"</li><li><strong>Редактирование:</strong> "✏️" в строке</li></ul></div>
<div class="instruction-section"><h4>🎤 3. Голосовой ввод</h4><ul><li>Скажите "Иванов 85"</li><li>"всем 75" для всей группы</li></ul></div>
<div class="instruction-section"><h4>⌨️ 4. Навигация с клавиатуры</h4><ul><li>Enter/↓: следующий студент</li><li>↑: предыдущий</li><li>→/←: следующая/предыдущая колонка</li></ul></div>
<div class="instruction-section"><h4>💾 5. Сохранение в Moodle</h4><ul><li>При работе через Moodle оценки автоматически сохраняются в базу данных</li><li>Данные не теряются при очистке кэша</li><li>Доступны с любого компьютера</li></ul></div>
<div class="instruction-section"><h4>📈 6. Шкала оценок</h4><table><thead><tr><th>Баллы</th><th>Буква</th><th>GPA</th></tr></thead><tbody>
<tr style="background:#F0F8FF;"><td><strong>95-100</strong></td><td>A</td><td>4,0</td></tr>
<tr><td><strong>90-94</strong></td><td>A-</td><td>3,67</td></tr>
<tr style="background:#F0F8FF;"><td><strong>85-89</strong></td><td>B+</td><td>3,33</td></tr>
<tr><td><strong>80-84</strong></td><td>B</td><td>3,0</td></tr>
<tr style="background:#F0F8FF;"><td><strong>75-79</strong></td><td>B-</td><td>2,67</td></tr>
<tr><td><strong>70-74</strong></td><td>C+</td><td>2,33</td></tr>
<tr style="background:#F0F8FF;"><td><strong>65-69</strong></td><td>C</td><td>2,0</td></tr>
<tr><td><strong>60-64</strong></td><td>C-</td><td>1,67</td></tr>
<tr style="background:#F0F8FF;"><td><strong>55-59</strong></td><td>D+</td><td>1,33</td></tr>
<tr><td><strong>50-54</strong></td><td>D</td><td>1,0</td></tr>
<tr style="background:#F0F8FF;"><td><strong>0-49</strong></td><td>F</td><td>0</td></tr>
</tbody></table></div>`;
}

function showInstructions() {
    renderInstructionsContent();
    const m = document.getElementById('instructionsModal');
    if (m) { m.style.display = 'block'; m.onclick = (e) => { if (e.target === m) closeInstructions(); }; }
}

function closeInstructions() { const m = document.getElementById('instructionsModal'); if (m) m.style.display = 'none'; }

// ============ ИНИЦИАЛИЗАЦИЯ ============
window.addEventListener('beforeunload', () => { if (currentGroup && students.length) saveCurrentGroup(); });

loadSavedLanguage();
loadSavedTheme();
initMoodleParams();
if (loadFromLocalStorage()) initApp();
else initApp();
