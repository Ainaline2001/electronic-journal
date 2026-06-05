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
        instructionsTitle: '📖 Полная инструкция по работе с журналом рубежных оценок',
        actions: 'Действия',
        finalGrade: '1-Семестр (Итог)',
        letter: 'Буква',
        gpa: 'GPA',
        finalTab: '🏆 Итоги',
        editColumnNamesBtn: '✏️ Редактировать названия',
        saveColumnNamesBtn: '💾 Сохранить',
        cancelBtn: 'Отмена',
        columnDefault: (c) => `Оц.${c}`,
        avgRO: (r) => `Средний РО-${r}`,
        alertNoGroup: '❌ Сначала создайте или выберите группу!',
        alertNoData: '❌ Нет данных для экспорта! Сначала загрузите список студентов.',
        alertVoiceNotSupported: '❌ Ваш браузер не поддерживает голосовой ввод. Используйте Chrome, Edge или Safari на iOS.',
        successDataSaved: '✅ Данные группы сохранены!',
        successBackupSaved: (n) => `✅ Бэкап сохранен как "${n}.json"`,
        successBackupRestored: (c) => `✅ Бэкап успешно восстановлен!\nЗагружено групп: ${c}`,
        successExcelCreated: (n) => `✅ Файл "${n}.xlsx" успешно создан и скачан!`,
        successAllDataReset: '✅ Все данные сброшены!',
        successGroupDeleted: '✅ Группа удалена!',
        successGroupRenamed: (n) => `✅ Группа переименована в "${n}"!`,
        successGroupCreated: (n) => `✅ Группа "${n}" создана!`,
        successStudentsLoaded: (c, g) => `✅ Загружено ${c} студентов(а) в группу "${g}"!`,
        successStudentAdded: (n, g) => `✅ Студент "${n}" успешно добавлен в группу "${g}"!`,
        successStudentUpdated: (o, n) => `✅ Студент "${o}" изменен на "${n}"!`,
        successStudentDeleted: (g) => `✅ Студент удален из группы "${g}"!`,
        successColumnNamesSaved: '✅ Названия колонок сохранены!',
        errorInvalidScore: 'Пожалуйста, введите число от 0 до 100 или оставьте поле пустым',
        errorGroupExists: '❌ Группа с таким названием уже существует!',
        errorStudentExists: '❌ Студент с таким ФИО уже существует!',
        errorEnterGroupName: '❌ Введите название группы',
        errorEnterStudentName: '❌ Введите ФИО студента!',
        errorNoBackupData: '❌ Нет данных для бэкапа!',
        errorBackupFailed: '❌ Ошибка при создании бэкапа',
        errorRestoreFailed: '❌ Ошибка при восстановлении бэкапа. Файл поврежден.',
        errorExcelFailed: '❌ Ошибка при создании Excel файла. Попробуйте другой браузер (Chrome, Edge)',
        confirmReset: '⚠️ Вы уверены, что хотите сбросить ВСЕ данные ВСЕХ групп?\nЭто действие нельзя отменить!',
        confirmDeleteGroup: (g) => `⚠️ Вы уверены, что хотите удалить группу "${g}"?\nВсе данные группы будут потеряны!`,
        confirmDeleteStudent: (s) => `⚠️ Вы уверены, что хотите удалить студента "${s}"?\nВсе оценки этого студента будут потеряны!`,
        confirmOverwriteStudents: (g, c) => `⚠️ Загрузка нового списка заменит текущих студентов группы "${g}" (${c}). Продолжить?`,
        confirmRestore: (f) => `📂 Восстановить данные из файла "${f}"?\nТекущие данные будут заменены!`,
        createFirstGroup: '📁 Начните с создания группы',
        createFirstGroupDesc: 'Нажмите "➕ Новая" чтобы создать первую группу',
        createGroupBtn: '➕ Создать группу',
        noStudents: (g) => `📋 Нет студентов в группе "${g}"`,
        noStudentsDesc: 'Нажмите "Загрузить список" или "Добавить студента" чтобы начать работу',
        noData: 'Загрузите список студентов'
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
        voiceHelpText: '📌 Айтыңыз: "Иванов 85" немесе "Петров 90" немесе "барлығына 75"',
        voiceStatusIdle: 'Дауыстық енгізу үшін басыңыз',
        voiceStatusListening: '🎤 Тыңдап тұрмын... Бағаны айтыңыз',
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
        instructionsTitle: '📖 Бағалау журналымен жұмыс істеу бойынша толық нұсқаулық',
        actions: 'Әрекеттер',
        finalGrade: '1-Семестр (Қорытынды)',
        letter: 'Әріп',
        gpa: 'GPA',
        finalTab: '🏆 Қорытынды',
        editColumnNamesBtn: '✏️ Атауларды өңдеу',
        saveColumnNamesBtn: '💾 Сақтау',
        cancelBtn: 'Болдырмау',
        columnDefault: (c) => `Баг.${c}`,
        avgRO: (r) => `Орташа РО-${r}`,
        alertNoGroup: '❌ Алдымен топ құрыңыз немесе таңдаңыз!',
        alertNoData: '❌ Экспорттау үшін деректер жоқ! Алдымен студенттер тізімін жүктеңіз.',
        alertVoiceNotSupported: '❌ Сіздің браузеріңіз дауыстық енгізуді қолдамайды. Chrome, Edge немесе Safari on iOS пайдаланыңыз.',
        successDataSaved: '✅ Топ деректері сақталды!',
        successBackupSaved: (n) => `✅ Көшірме "${n}.json" деп сақталды`,
        successBackupRestored: (c) => `✅ Көшірме сәтті қалпына келтірілді!\nЖүктелген топтар саны: ${c}`,
        successExcelCreated: (n) => `✅ "${n}.xlsx" файлы сәтті жасалды және жүктелді!`,
        successAllDataReset: '✅ Барлық деректер тазаланды!',
        successGroupDeleted: '✅ Топ жойылды!',
        successGroupRenamed: (n) => `✅ Топтың аты "${n}" болып өзгертілді!`,
        successGroupCreated: (n) => `✅ "${n}" тобы құрылды!`,
        successStudentsLoaded: (c, g) => `✅ "${g}" тобына ${c} студент(тер) жүктелді!`,
        successStudentAdded: (n, g) => `✅ "${n}" студенті "${g}" тобына қосылды!`,
        successStudentUpdated: (o, n) => `✅ "${o}" студентінің аты "${n}" болып өзгертілді!`,
        successStudentDeleted: (g) => `✅ Студент "${g}" тобынан жойылды!`,
        successColumnNamesSaved: '✅ Баған атаулары сақталды!',
        errorInvalidScore: '0-ден 100-ге дейінгі санды енгізіңіз немесе өрісті бос қалдырыңыз',
        errorGroupExists: '❌ Мұндай атаумен топ бар!',
        errorStudentExists: '❌ Мұндай Т.А.Ә. бар студент бар!',
        errorEnterGroupName: '❌ Топтың атын енгізіңіз',
        errorEnterStudentName: '❌ Студенттің Т.А.Ә. енгізіңіз!',
        errorNoBackupData: '❌ Көшірме үшін деректер жоқ!',
        errorBackupFailed: '❌ Көшірме жасау кезінде қате',
        errorRestoreFailed: '❌ Көшірмені қалпына келтіру кезінде қате. Файл бүлінген.',
        errorExcelFailed: '❌ Excel файлын жасау кезінде қате. Басқа браузерді қолданып көріңіз (Chrome, Edge)',
        confirmReset: '⚠️ БАРЛЫҚ топтардың БАРЛЫҚ деректерін тазалағыңыз келе ме?\nБұл әрекетті кері қайтару мүмкін емес!',
        confirmDeleteGroup: (g) => `⚠️ "${g}" тобын жойғыңыз келе ме?\nТоптың барлық деректері жоғалады!`,
        confirmDeleteStudent: (s) => `⚠️ "${s}" студентін жойғыңыз келе ме?\nСтуденттің барлық бағалары жоғалады!`,
        confirmOverwriteStudents: (g, c) => `⚠️ Жаңа тізімді жүктеу "${g}" тобындағы студенттерді (${c}) ауыстырады. Жалғастыру керек пе?`,
        confirmRestore: (f) => `📂 "${f}" файлынан деректерді қалпына келтіру керек пе?\nАғымдағы деректер ауыстырылады!`,
        createFirstGroup: '📁 Топ құрудан бастаңыз',
        createFirstGroupDesc: 'Бірінші топты құру үшін "➕ Жаңа" батырмасын басыңыз',
        createGroupBtn: '➕ Топ құру',
        noStudents: (g) => `📋 "${g}" тобында студенттер жоқ`,
        noStudentsDesc: 'Жұмысты бастау үшін "Тізімді жүктеу" немесе "Студент қосу" батырмасын басыңыз',
        noData: 'Студенттер тізімін жүктеңіз'
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
    updateElementText('mainTitle', 'mainTitle');
    updateElementText('groupLabel', 'groupLabel');
    updateElementText('loadListBtn', 'loadListBtn');
    updateElementText('addStudentBtn', 'addStudentBtn');
    updateElementText('exportExcelBtn', 'exportExcelBtn');
    updateElementText('instructionsBtn', 'instructionsBtn');
    updateElementText('roCountLabel', 'roCountLabel');
    updateElementText('saveBtn', 'saveBtn');
    updateElementText('quickVoiceBtn', 'quickVoiceBtn');
    updateElementText('backupBtn', 'backupBtn');
    updateElementText('restoreBtn', 'restoreBtn');
    updateElementText('resetBtn', 'resetBtn');
    updateElementText('voiceStartBtn', 'voiceStartBtn');
    updateElementText('voiceCloseBtn', 'voiceCloseBtn');
    updateElementText('voiceHelpText', 'voiceHelpText');
    updateElementText('voiceStatusText', 'voiceStatusIdle');
    updateElementText('groupCancelBtn', 'groupCancelBtn');
    updateElementText('groupNameLabel', 'groupNameLabel');
    updateElementText('addStudentTitle', 'addStudentTitle');
    updateElementText('studentNameLabel', 'studentNameLabel');
    updateElementText('addStudentCancelBtn', 'addStudentCancelBtn');
    updateElementText('addStudentConfirmBtn', 'addStudentConfirmBtn');
    updateElementText('editStudentTitle', 'editStudentTitle');
    updateElementText('editStudentNameLabel', 'editStudentNameLabel');
    updateElementText('deleteStudentBtn', 'deleteStudentBtn');
    updateElementText('editStudentCancelBtn', 'editStudentCancelBtn');
    updateElementText('editStudentSaveBtn', 'editStudentSaveBtn');
    updateElementText('instructionsTitle', 'instructionsTitle');
    
    const groupSelect = document.getElementById('groupSelect');
    if (groupSelect && groupSelect.options[0]) {
        groupSelect.options[0].text = t('selectGroup');
    }
    
    renderTabsHeader();
    renderTabsContent();
    updateInfoBar();
    renderInstructionsContent();
}

function loadSavedLanguage() {
    const savedLang = localStorage.getItem('journalLanguage');
    setLanguage(savedLang === 'kz' ? 'kz' : 'ru');
}

// ============ ОСНОВНЫЕ ПЕРЕМЕННЫЕ ============
let allGroups = {};
let currentGroup = "";
let activeROCount = 4;
let activeTab = 1;
let currentEditIndex = -1;
let gradesCountConfig = {};
let gradesData = {};
let columnNames = {};
let students = [];

// ============ ГОЛОСОВОЙ ВВОД ============
let recognition = null;
let isListening = false;
let currentVoiceRO = null;
let currentVoiceCol = null;
let currentVoiceStudentIndex = null;

function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.log('Браузер не поддерживает голосовой ввод');
        return false;
    }
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
        const transcript = event.results[0][0].transcript;
        console.log('Распознано:', transcript);
        processVoiceCommand(transcript);
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
    document.getElementById('voiceResult').innerHTML = `Готов к вводу оценки для:<br>📌 ${studentName}<br>📊 РО-${roIndex}, колонка ${colIndex}`;
    document.getElementById('voicePanel').style.display = 'block';
    updateElementText('voiceStatusText', 'voiceStatusIdle');
}

function closeVoicePanel() {
    if (isListening && recognition) recognition.stop();
    document.getElementById('voicePanel').style.display = 'none';
    currentVoiceRO = null;
    currentVoiceCol = null;
    currentVoiceStudentIndex = null;
}

function startVoiceInput() {
    if (!recognition && !initSpeechRecognition()) {
        alert(t('alertVoiceNotSupported'));
        return;
    }
    try {
        recognition.start();
    } catch(e) {
        console.error('Ошибка запуска:', e);
        alert('Не удалось запустить голосовой ввод. Попробуйте еще раз.');
    }
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
        'ноль': 0, 'один': 1, 'два': 2, 'три': 3, 'четыре': 4,
        'пять': 5, 'шесть': 6, 'семь': 7, 'восемь': 8, 'девять': 9,
        'десять': 10, 'одиннадцать': 11, 'двенадцать': 12, 'тринадцать': 13,
        'четырнадцать': 14, 'пятнадцать': 15, 'шестнадцать': 16, 'семнадцать': 17,
        'восемнадцать': 18, 'девятнадцать': 19, 'двадцать': 20, 'тридцать': 30,
        'сорок': 40, 'пятьдесят': 50, 'шестьдесят': 60, 'семьдесят': 70,
        'восемьдесят': 80, 'девяносто': 90, 'сто': 100
    };
    
    if (score === null) {
        for (const [word, num] of Object.entries(wordNumbers)) {
            if (text.includes(word)) {
                score = num;
                break;
            }
        }
    }
    
    if (text.includes('все') || text.includes('всем')) {
        applyScoreToAllInRO(score);
        return;
    }
    
    let foundStudentIndex = -1;
    for (let i = 0; i < students.length; i++) {
        const lastName = students[i].split(' ')[0].toLowerCase();
        if (text.includes(lastName)) {
            foundStudentIndex = i;
            break;
        }
    }
    
    if (foundStudentIndex !== -1 && score !== null) {
        const currentTab = activeTab;
        if (currentTab !== 'final') {
            saveGrade(foundStudentIndex, currentTab, currentVoiceCol || 1, score);
            document.getElementById('voiceResult').innerHTML = `✅ Оценка ${score} поставлена студенту ${students[foundStudentIndex]}`;
            setTimeout(() => closeVoicePanel(), 2000);
        } else {
            document.getElementById('voiceResult').innerHTML = '❌ Переключитесь на вкладку с оценками';
        }
    } else if (score !== null && currentVoiceStudentIndex !== null) {
        saveGrade(currentVoiceStudentIndex, currentVoiceRO, currentVoiceCol, score);
        document.getElementById('voiceResult').innerHTML = `✅ Оценка ${score} сохранена для ${students[currentVoiceStudentIndex]}`;
        setTimeout(() => closeVoicePanel(), 2000);
    } else if (score !== null) {
        document.getElementById('voiceResult').innerHTML = '❌ Не удалось определить студента. Скажите фамилию, например: "Иванов 85"';
    } else {
        document.getElementById('voiceResult').innerHTML = '❌ Не удалось распознать оценку. Скажите число от 0 до 100';
    }
    saveCurrentGroup();
}

function applyScoreToAllInRO(score) {
    if (score === null || score === undefined) {
        document.getElementById('voiceResult').innerHTML = '❌ Не удалось распознать оценку для всех студентов';
        return;
    }
    const currentTab = activeTab;
    if (currentTab === 'final') {
        document.getElementById('voiceResult').innerHTML = '❌ Переключитесь на вкладку с оценками';
        return;
    }
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        const colCount = gradesCountConfig[currentTab] || 3;
        for (let c = 1; c <= colCount; c++) {
            saveGrade(i, currentTab, c, score);
            count++;
        }
    }
    document.getElementById('voiceResult').innerHTML = `✅ Оценка ${score} поставлена всем студентам (${students.length} чел.)`;
    setTimeout(() => closeVoicePanel(), 2000);
    saveCurrentGroup();
}

function quickVoiceInput() {
    if (!currentGroup) {
        alert(t('alertNoGroup'));
        return;
    }
    const currentTab = activeTab;
    if (currentTab === 'final') {
        alert('❌ Переключитесь на вкладку с оценками (РО-1, РО-2 и т.д.)');
        return;
    }
    if (!recognition && !initSpeechRecognition()) {
        alert(t('alertVoiceNotSupported'));
        return;
    }
    document.getElementById('voiceResult').innerHTML = `Готов к вводу оценок для текущей таблицы (РО-${currentTab})<br>Скажите: "Иванов 85" или "Петров 90" или "всем 75"`;
    document.getElementById('voicePanel').style.display = 'block';
    updateElementText('voiceStatusText', 'voiceStatusIdle');
    currentVoiceRO = currentTab;
    currentVoiceCol = 1;
    currentVoiceStudentIndex = null;
}

// ============ ГРУППЫ И ДАННЫЕ ============
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
    if (!currentGroup) {
        alert('❌ Сначала выберите группу для переименования');
        return;
    }
    updateElementText('groupModalTitle', 'groupModalRename');
    document.getElementById('groupModalBtn').innerHTML = t('groupSaveBtn');
    document.getElementById('groupName').value = currentGroup;
    document.getElementById('groupModal').style.display = 'block';
}

function deleteCurrentGroup() {
    if (!currentGroup) {
        alert('❌ Сначала выберите группу для удаления');
        return;
    }
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
    if (!newName) {
        alert(t('errorEnterGroupName'));
        return;
    }
    const title = document.getElementById('groupModalTitle').innerHTML;
    const isRename = title.includes('Переименовать') || title.includes('өзгерту');
    if (isRename) {
        if (newName === currentGroup) {
            closeGroupModal();
            return;
        }
        if (allGroups[newName]) {
            alert(t('errorGroupExists'));
            return;
        }
        allGroups[newName] = allGroups[currentGroup];
        delete allGroups[currentGroup];
        currentGroup = newName;
        saveAllGroups();
        updateGroupSelect();
        alert(t('successGroupRenamed', newName));
    } else {
        if (allGroups[newName]) {
            alert(t('errorGroupExists'));
            return;
        }
        if (currentGroup) saveCurrentGroup();
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
        alert(t('successGroupCreated', newName));
    }
    closeGroupModal();
}

function updateGroupSelect() {
    const select = document.getElementById('groupSelect');
    if (!select) return;
    const currentValue = currentGroup;
    select.innerHTML = `<option value="">${t('selectGroup')}</option>`;
    const groups = Object.keys(allGroups).sort();
    for (const group of groups) {
        const option = document.createElement('option');
        option.value = group;
        option.textContent = `${group} (${allGroups[group].students?.length || 0} студ.)`;
        if (group === currentValue) option.selected = true;
        select.appendChild(option);
    }
}

function closeGroupModal() {
    document.getElementById('groupModal').style.display = 'none';
}

function showSaveIndicator() {
    let indicator = document.getElementById('saveIndicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'saveIndicator';
        indicator.style.cssText = `position:fixed;bottom:20px;right:20px;background:#27ae60;color:white;padding:8px 16px;border-radius:8px;font-size:12px;z-index:1000;opacity:0;transition:opacity 0.3s;pointer-events:none;`;
        document.body.appendChild(indicator);
    }
    indicator.textContent = '✓ Сохранено';
    indicator.style.opacity = '1';
    setTimeout(() => { indicator.style.opacity = '0'; }, 1500);
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

function exportBackup() {
    if (Object.keys(allGroups).length === 0) {
        alert(t('errorNoBackupData'));
        return;
    }
    const now = new Date();
    const defaultName = `журнал_РО_${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
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
        alert(t('successBackupSaved', fileName));
    } catch(e) {
        alert(t('errorBackupFailed'));
    }
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
                    alert(t('successBackupRestored', Object.keys(allGroups).length));
                } else {
                    throw new Error('Неверный формат');
                }
            } catch(e) {
                alert(t('errorRestoreFailed'));
            }
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
    if (!currentGroup) {
        alert(t('alertNoGroup'));
        return;
    }
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
    const points = { 'A':'4,0','A-':'3,67','B+':'3,33','B':'3,0','B-':'2,67','C+':'2,33','C':'2,0','C-':'1,67','D+':'1,33','D':'1,0','F':'0' };
    return points[letter] || '0';
}

function loadStudentsFromBrowser(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (!currentGroup) {
        alert(t('alertNoGroup'));
        event.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const newStudents = e.target.result.split(/\r?\n/).map(s => s.trim()).filter(s => s.length > 0);
        if (students.length > 0 && newStudents.length > 0) {
            if (!confirm(t('confirmOverwriteStudents', currentGroup, students.length))) {
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
                for (let c = 1; c <= gradesCountConfig[r]; c++) {
                    columnNames[r][c] = t('columnDefault', c);
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
    html += `<button class="tab-btn final-tab ${isFinalActive}" onclick="switchTab('final')">${t('finalTab')}</button>`;
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
    let colCount = gradesCountConfig[roIndex];
    let modalHtml = `<div id="columnNamesModal" class="modal"><div class="modal-content"><div class="modal-header"><h3>✏️ ${t('editColumnNamesBtn')} РО-${roIndex}</h3><span class="close" onclick="closeModal()">&times;</span></div><div class="column-names-list">`;
    for (let c = 1; c <= colCount; c++) {
        let currentName = columnNames[roIndex][c] || t('columnDefault', c);
        modalHtml += `<div class="column-name-item"><label>Колонка ${c}:</label><input type="text" id="colName_${roIndex}_${c}" value="${currentName.replace(/"/g, '&quot;')}" placeholder="Например: 12.03 или Контрольная"></div>`;
    }
    modalHtml += `</div><div class="modal-footer"><button onclick="saveColumnNames(${roIndex})" class="excel-btn">${t('saveColumnNamesBtn')}</button><button onclick="closeModal()" style="background:#95a5a6;">${t('cancelBtn')}</button></div></div></div>`;
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
    alert(t('successColumnNamesSaved'));
}

function renderTabsContent() {
    let contentContainer = document.getElementById('tabsContent');
    contentContainer.innerHTML = '';
    if (!currentGroup) {
        contentContainer.innerHTML = `<div class="empty-state"><h3>${t('createFirstGroup')}</h3><p>${t('createFirstGroupDesc')}</p><button onclick="openGroupModal()" style="margin-top:15px;background:#3498db;">${t('createGroupBtn')}</button></div>`;
        return;
    }
    if (students.length === 0) {
        contentContainer.innerHTML = `<div class="empty-state"><h3>${t('noStudents', currentGroup)}</h3><p>${t('noStudentsDesc')}</p><button onclick="document.getElementById('txtFileInput').click()" style="margin-top:15px;">📁 ${t('loadListBtn')}</button><button onclick="openAddStudentModal()" style="margin-top:15px;margin-left:10px;background:#9b59b6;">${t('addStudentBtn')}</button></div>`;
        return;
    }
    for (let r = 1; r <= activeROCount; r++) {
        let isActive = (activeTab === r) ? 'active' : '';
        let colCount = gradesCountConfig[r] || 3;
        let paneHtml = `<div class="tab-pane ${isActive}" id="pane_${r}">
            <div class="ro-controls">
                <div>
                    <label>📊 Оценок (колонок) в РО-${r}: </label>
                    <input type="number" min="1" max="50" value="${colCount}" onchange="changeGradesCount(${r}, this.value)">
                </div>
                <div>
                    <button class="edit-names-btn" onclick="openColumnNamesModal(${r})">✏️ ${t('editColumnNamesBtn')}</button>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>ФИО Студента</th>
                            <th>${t('actions')}</th>`;
        for(let c = 1; c <= colCount; c++) {
            let colName = (columnNames[r] && columnNames[r][c]) || t('columnDefault', c);
            paneHtml += `<th>${escapeHtml(colName)}</th>`;
        }
        paneHtml += `<th>${t('avgRO', r)}</th>
                        </tr>
                    </thead>
                    <tbody>`;
        
        for(let sIdx = 0; sIdx < students.length; sIdx++) {
            let student = students[sIdx];
            paneHtml += `<tr>
                            <td>${sIdx + 1}</td>
                            <td class="name-col">${escapeHtml(student)}<\/td>
                            <td style="padding: 4px;">
                                <button onclick="openEditStudentModal(${sIdx})" style="background:#3498db;padding:4px 8px;font-size:11px;">✏️</button>
                            <\/td>`;
            for(let c = 1; c <= colCount; c++) {
                let val = (gradesData[sIdx] && gradesData[sIdx][r] && gradesData[sIdx][r][c] !== undefined) ? gradesData[sIdx][r][c] : '';
                paneHtml += `<td>
                                <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;">
                                    <input type="number" min="0" max="100" class="score-input" 
                                           value="${val === '' ? '' : val}" 
                                           oninput="saveGrade(${sIdx}, ${r}, ${c}, this.value)" 
                                           style="flex:1;min-width:50px;" 
                                           placeholder="-">
                                    <button type="button" class="voice-input-btn" 
                                            onclick="openVoiceInput(${r}, ${c}, ${sIdx})" 
                                            style="background:#9b59b6;padding:6px 8px;font-size:11px;">🎤</button>
                                </div>
                             <\/td>`;
            }
            paneHtml += `<td class="result avg" id="avg_${sIdx}_${r}">${calcROAvg(sIdx, r)}<\/td>
                        </tr>`;
        }
        paneHtml += `</tbody>
                </table>
            </div>
        </div>`;
        contentContainer.innerHTML += paneHtml;
    }
    let isFinalActive = (activeTab === 'final') ? 'active' : '';
    contentContainer.innerHTML += `<div class="tab-pane ${isFinalActive}" id="pane_final">
        <div class="table-container">
            <table id="finalTable"></div>
    </div>`;
    if (activeTab === 'final') renderFinalTable();
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
            columnNames[roIndex][c] = t('columnDefault', c);
        }
    }
    gradesCountConfig[roIndex] = count;
    renderTabsContent();
    saveCurrentGroup();
}

function saveGrade(sIdx, roIndex, colIndex, value) {
    let val;
    if (value === '' || value === null) {
        val = undefined;
    } else {
        val = parseInt(value);
    }
    if (!isNaN(val) && val >= 0 && val <= 100) {
        if (!gradesData[sIdx]) gradesData[sIdx] = {};
        if (!gradesData[sIdx][roIndex]) gradesData[sIdx][roIndex] = {};
        gradesData[sIdx][roIndex][colIndex] = val;
    } else if (value === '' || value === null) {
        if (gradesData[sIdx] && gradesData[sIdx][roIndex]) {
            delete gradesData[sIdx][roIndex][colIndex];
        }
    } else if (isNaN(val) || val < 0 || val > 100) {
        alert(t('errorInvalidScore'));
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
        let value = gradesData[sIdx] && gradesData[sIdx][roIndex] && gradesData[sIdx][roIndex][c];
        if (value !== undefined && value !== null && value !== '') {
            sum += value;
            count++;
        }
    }
    if (count > 0) {
        return Math.round(sum / count);
    }
    return '';
}

function renderFinalTable() {
    let table = document.getElementById('finalTable');
    if (!table) return;
    if (students.length === 0) {
        table.innerHTML = '<tr><td style="text-align:center; padding:40px;">' + t('noData') + '<\/td><\/tr>';
        return;
    }
    let html = `<thead>
        <tr>
            <th>№</th>
            <th>ФИО Студента</th>`;
    for(let r=1; r<=activeROCount; r++) html += `<th>Итог РО-${r}</th>`;
    html += `<th>${t('finalGrade')}</th><th>${t('letter')}</th><th>${t('gpa')}</th>
        </tr>
    </thead>
    <tbody>`;
    students.forEach((student, sIdx) => {
        let roValues = [];
        let allROHaveGrades = true;
        html += `<tr>
            <td>${sIdx + 1}</td>
            <td class="name-col">${escapeHtml(student)}<\/td>`;
        for(let r=1; r<=activeROCount; r++) {
            let avg = calcROAvg(sIdx, r);
            html += `<td class="result">${avg}<\/td>`;
            if (avg === '' || avg === null) {
                allROHaveGrades = false;
            } else {
                roValues.push(avg);
            }
        }
        if (allROHaveGrades && roValues.length === activeROCount && activeROCount > 0) {
            let semAvg = Math.round(roValues.reduce((a, b) => a + b, 0) / activeROCount);
            let letter = getGradeLetter(semAvg);
            let gpa = getGradePoint(letter);
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
    if (students.length === 0) {
        alert(t('alertNoData'));
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
        for (let r = 1; r <= activeROCount; r++) headers.push(`Итог РО-${r}`);
        headers.push(t('finalGrade'), t('letter'), t('gpa'));
        wsData.push(headers);
        const tableRows = document.querySelectorAll('#finalTable tbody tr');
        tableRows.forEach(tr => {
            const rowData = [];
            const cells = tr.querySelectorAll('td');
            cells.forEach(td => rowData.push(td.innerText));
            wsData.push(rowData);
        });
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        ws['!cols'] = [{wch:5},{wch:30},...Array(activeROCount).fill({wch:12}),{wch:15},{wch:8},{wch:8}];
        XLSX.utils.book_append_sheet(wb, ws, `Итоговая ведомость_${currentGroup}`);
        const now = new Date();
        const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
        const defaultName = `${currentGroup}_ведомость_РО_${dateStr}`;
        let filename = prompt("📊 Введите название файла:", defaultName);
        if (!filename) return;
        filename = filename.replace(/[\\/:*?"<>|]/g, '_').trim();
        if (filename.length === 0) filename = defaultName;
        XLSX.writeFile(wb, `${filename}.xlsx`);
        alert(t('successExcelCreated', filename));
    } catch (error) {
        console.error('Ошибка экспорта:', error);
        alert(t('errorExcelFailed'));
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

function openAddStudentModal() {
    if (!currentGroup) {
        alert(t('alertNoGroup'));
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
        alert(t('errorEnterStudentName'));
        return;
    }
    if (students.includes(name)) {
        alert(t('errorStudentExists'));
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
    alert(t('successStudentAdded', name, currentGroup));
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
        alert(t('errorEnterStudentName'));
        return;
    }
    if (newName !== students[currentEditIndex] && students.includes(newName)) {
        alert(t('errorStudentExists'));
        return;
    }
    const oldName = students[currentEditIndex];
    students[currentEditIndex] = newName;
    closeEditStudentModal();
    initApp();
    saveCurrentGroup();
    alert(t('successStudentUpdated', oldName, newName));
}

function deleteStudent() {
    if (!confirm(t('confirmDeleteStudent', students[currentEditIndex]))) return;
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
    alert(t('successStudentDeleted', currentGroup));
}

function updateInfoBar() {
    const infoBar = document.getElementById('infoBar');
    const studentCount = document.getElementById('studentCount');
    if (studentCount && currentGroup && students.length > 0) {
        studentCount.innerHTML = `🎓 Группа: ${currentGroup} | 👨‍🎓 Студентов: ${students.length} | <button onclick="openAddStudentModal()" style="background:#9b59b6;padding:2px 8px;font-size:11px;margin-left:5px;">➕ ${t('addStudentBtn')}</button>`;
        infoBar.style.display = 'flex';
    } else if (currentGroup && students.length === 0) {
        studentCount.innerHTML = `🎓 Группа: ${currentGroup} | 👨‍🎓 Студентов: 0`;
        infoBar.style.display = 'flex';
    } else {
        infoBar.style.display = 'none';
    }
}

// ============ ИНСТРУКЦИЯ ============
function renderInstructionsContent() {
    const content = document.getElementById('instructionsContent');
    if (!content) return;
    
    if (currentLang === 'ru') {
        content.innerHTML = `
            <div class="instruction-section">
                <h4>📁 1. Управление группами</h4>
                <ul>
                    <li><strong>Создание группы:</strong> Нажмите "➕ Новая", введите название группы (например, "ИС-21")</li>
                    <li><strong>Переключение:</strong> Выберите группу из выпадающего списка</li>
                    <li><strong>Переименование:</strong> Нажмите "✏️" рядом с группой</li>
                    <li><strong>Удаление:</strong> Нажмите "🗑️" - все данные группы будут удалены</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>📋 2. Работа со студентами</h4>
                <ul>
                    <li><strong>Загрузка списка:</strong> Нажмите "Загрузить список (.txt)" - файл с ФИО построчно</li>
                    <li><strong>Добавление:</strong> Нажмите "➕ Добавить студента"</li>
                    <li><strong>Редактирование:</strong> Нажмите "✏️" рядом с ФИО</li>
                    <li><strong>Удаление:</strong> В режиме редактирования нажмите "Удалить"</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>🎤 3. Голосовой ввод оценок</h4>
                <ul>
                    <li><strong>Быстрый ввод:</strong> Нажмите "🎤 Быстрый ввод" и скажите: "Иванов 85"</li>
                    <li><strong>В ячейке:</strong> Нажмите кнопку 🎤 в любой ячейке оценки</li>
                    <li><strong>Массовый ввод:</strong> Скажите "всем 75" для всей группы</li>
                    <li><strong>Поддерживаются:</strong> числа и слова (пять, десять, двадцать)</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>📊 4. Работа с рубежными оценками</h4>
                <ul>
                    <li><strong>Ввод оценок:</strong> Вводите оценки от 0 до 100 в ячейки</li>
                    <li><strong>Количество РО:</strong> Измените число в поле "РО в семестре" (до 20)</li>
                    <li><strong>Колонки:</strong> Меняйте количество колонок в каждом РО</li>
                    <li><strong>Названия колонок:</strong> Редактируйте названия колонок (например, даты или темы)</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>🏆 5. Итоги и успеваемость</h4>
                <ul>
                    <li><strong>Итоговый балл:</strong> Среднее арифметическое всех РО (только если все РО заполнены)</li>
                    <li><strong>Буквенная оценка:</strong> A (95-100) → F (менее 50)</li>
                    <li><strong>GPA:</strong> Числовой эквивалент от 4,0 до 0</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>📈 6. Шкала оценок</h4>
                <table style="width:100%; font-size:11px;">
                    <thead><tr><th>Баллы</th><th>Буква</th><th>GPA</th><th>Описание</th></tr></thead>
                    <tbody>
                        <tr><td>95-100</td><td>A</td><td>4,0</td><td>Отлично</td></tr>
                        <tr><td>90-94</td><td>A-</td><td>3,67</td><td>Очень хорошо</td></tr>
                        <tr><td>85-89</td><td>B+</td><td>3,33</td><td>Хорошо+</td></tr>
                        <tr><td>80-84</td><td>B</td><td>3,0</td><td>Хорошо</td></tr>
                        <tr><td>75-79</td><td>B-</td><td>2,67</td><td>Хорошо-</td></tr>
                        <tr><td>70-74</td><td>C+</td><td>2,33</td><td>Удовлетворительно+</td></tr>
                        <tr><td>65-69</td><td>C</td><td>2,0</td><td>Удовлетворительно</td></tr>
                        <tr><td>60-64</td><td>C-</td><td>1,67</td><td>Удовлетворительно-</td></tr>
                        <tr><td>55-59</td><td>D+</td><td>1,33</td><td>Слабо+</td></tr>
                        <tr><td>50-54</td><td>D</td><td>1,0</td><td>Слабо</td></tr>
                        <tr><td>0-49</td><td>F</td><td>0</td><td>Неудовлетворительно</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="instruction-section">
                <h4>💾 7. Сохранение и бэкапы</h4>
                <ul>
                    <li><strong>Автосохранение:</strong> Все изменения сохраняются автоматически</li>
                    <li><strong>Бэкап:</strong> Сохраняет все группы в один файл</li>
                    <li><strong>Восстановление:</strong> Загрузите ранее сохраненный файл</li>
                </ul>
            </div>
            <div class="instruction-footer">
                <button type="button" onclick="closeInstructions()" class="excel-btn">✅ Понятно, приступим!</button>
            </div>
        `;
    } else {
        content.innerHTML = `
            <div class="instruction-section">
                <h4>📁 1. Топтарды басқару</h4>
                <ul>
                    <li><strong>Топ құру:</strong> "➕ Жаңа" батырмасын басып, топ атын енгізіңіз (мысалы, "ИС-21")</li>
                    <li><strong>Ауыстыру:</strong> Топты ашылмалы тізімнен таңдаңыз</li>
                    <li><strong>Атын өзгерту:</strong> Топтың жанындағы "✏️" батырмасын басыңыз</li>
                    <li><strong>Жою:</strong> "🗑️" батырмасын басыңыз - топтың барлық деректері жойылады</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>📋 2. Студенттермен жұмыс</h4>
                <ul>
                    <li><strong>Тізімді жүктеу:</strong> "Тізімді жүктеу" батырмасын басыңыз - файлда Т.А.Ә. әр жолда</li>
                    <li><strong>Қосу:</strong> "➕ Студент қосу" батырмасын басыңыз</li>
                    <li><strong>Өңдеу:</strong> Т.А.Ә. жанындағы "✏️" батырмасын басыңыз</li>
                    <li><strong>Жою:</strong> Өңдеу режимінде "Жою" батырмасын басыңыз</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>🎤 3. Бағаларды дауыспен енгізу</h4>
                <ul>
                    <li><strong>Жылдам енгізу:</strong> "🎤 Жылдам енгізу" батырмасын басып, айтыңыз: "Иванов 85"</li>
                    <li><strong>Ұяшықта:</strong> Кез келген баға ұяшығындағы 🎤 батырмасын басыңыз</li>
                    <li><strong>Жаппай енгізу:</strong> Барлық топқа "барлығына 75" деп айтыңыз</li>
                    <li><strong>Қолдау:</strong> сандар және сөздер (бес, он, жиырма)</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>📊 4. Рубеждық бағалармен жұмыс</h4>
                <ul>
                    <li><strong>Баға енгізу:</strong> Ұяшықтарға 0-ден 100-ге дейінгі бағаларды енгізіңіз</li>
                    <li><strong>РО саны:</strong> "Семестрдегі РО" өрісіндегі санды өзгертіңіз (20-ға дейін)</li>
                    <li><strong>Бағандар:</strong> Әр РО-дағы бағандар санын өзгертіңіз</li>
                    <li><strong>Баған атаулары:</strong> Баған атауларын өңдеңіз (мысалы, күндер немесе тақырыптар)</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>🏆 5. Қорытынды және үлгерім</h4>
                <ul>
                    <li><strong>Қорытынды балл:</strong> Барлық РО-ның орташа арифметикалық мәні (тек барлық РО толтырылғанда)</li>
                    <li><strong>Әріптік баға:</strong> A (95-100) → F (50-ден төмен)</li>
                    <li><strong>GPA:</strong> 4,0-ден 0-ге дейінгі сандық балама</li>
                </ul>
            </div>
            <div class="instruction-section">
                <h4>📈 6. Бағалау шкаласы</h4>
                <table style="width:100%; font-size:11px;">
                    <thead><tr><th>Баллдар</th><th>Әріп</th><th>GPA</th><th>Сипаттама</th></tr></thead>
                    <tbody>
                        <tr><td>95-100</td><td>A</td><td>4,0</td><td>Өте жақсы</td></tr>
                        <tr><td>90-94</td><td>A-</td><td>3,67</td><td>Өте жақсы</td></tr>
                        <tr><td>85-89</td><td>B+</td><td>3,33</td><td>Жақсы+</td></tr>
                        <tr><td>80-84</td><td>B</td><td>3,0</td><td>Жақсы</td></tr>
                        <tr><td>75-79</td><td>B-</td><td>2,67</td><td>Жақсы-</td></tr>
                        <tr><td>70-74</td><td>C+</td><td>2,33</td><td>Қанағаттанарлық+</td></tr>
                        <tr><td>65-69</td><td>C</td><td>2,0</td><td>Қанағаттанарлық</td></tr>
                        <tr><td>60-64</td><td>C-</td><td>1,67</td><td>Қанағаттанарлық-</td></tr>
                        <tr><td>55-59</td><td>D+</td><td>1,33</td><td>Әлсіз+</td></tr>
                        <tr><td>50-54</td><td>D</td><td>1,0</td><td>Әлсіз</td></tr>
                        <tr><td>0-49</td><td>F</td><td>0</td><td>Қанағаттанарлықсыз</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="instruction-section">
                <h4>💾 7. Сақтау және көшірмелер</h4>
                <ul>
                    <li><strong>Автосақтау:</strong> Барлық өзгерістер автоматты түрде сақталады</li>
                    <li><strong>Көшірме:</strong> Барлық топтарды бір файлға сақтайды</li>
                    <li><strong>Қалпына келтіру:</strong> Бұрын сақталған файлды жүктеңіз</li>
                </ul>
            </div>
            <div class="instruction-footer">
                <button type="button" onclick="closeInstructions()" class="excel-btn">✅ Түсінікті, кірісейік!</button>
            </div>
        `;
    }
}

function showInstructions() {
    renderInstructionsContent();
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

window.addEventListener('beforeunload', () => {
    if (currentGroup && students.length > 0) {
        saveCurrentGroup();
    }
});

loadSavedLanguage();
if (loadFromLocalStorage()) {
    console.log('Загружены сохраненные данные');
} else {
    initApp();
}