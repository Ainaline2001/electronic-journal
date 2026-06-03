import eel
import openpyxl
import os

eel.init('web')

@eel.expose
def export_excel(headers, data, filename):
    """Сохраняет таблицу в Excel прямо в папку с программой"""
    if not filename.endswith('.xlsx'):
        filename += '.xlsx'
        
    # Получаем полный путь к папке, где лежит main.py
    save_path = os.path.abspath(filename)

    try:
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.title = "Ведомость"
        
        # Пишем заголовки
        ws.append(headers)
        
        # Пишем студентов и оценки
        for row in data:
            ws.append(row)
            
        wb.save(save_path)
        return f"Успешно|{save_path}"
    except Exception as e:
        return f"ERROR|{str(e)}"

if __name__ == '__main__':
    try:
        # Пытаемся запустить через Microsoft Edge как отдельное красивое приложение
        eel.start('index.html', mode='edge', size=(1100, 750))
    except EnvironmentError:
        # Если Edge нет, открываем в браузере по умолчанию
        eel.start('index.html', mode='default', size=(1100, 750))