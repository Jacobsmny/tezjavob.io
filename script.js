let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Функция для обработки отправки формы нового заказа
document.getElementById('newOrderForm').onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

    const order = {
        id: Date.now(), // Уникальный идентификатор заказа
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        size: document.getElementById('size').value,
        quantity: document.getElementById('quantity').value,
        company: document.getElementById('company').value,
        note: document.getElementById('note').value,
        deadline: new Date(document.getElementById('deadline').value),
        status: 'waiting' // Статус по умолчанию "ожидание"
    };

    // Добавляем заказ в массив и сохраняем в LocalStorage
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    renderOrders();
    closeFormModal();
};

// Функция для отображения всех заказов на странице
function renderOrders() {
    const waitingContainer = document.getElementById('waiting-orders'); // Контейнер для заказов в ожидании
    const completedContainer = document.getElementById('completed-orders'); // Контейнер для завершенных заказов
    waitingContainer.innerHTML = ''; // Очищаем контейнер перед рендерингом
    completedContainer.innerHTML = ''; // Очищаем контейнер для завершенных заказов

    // Проходим по каждому заказу в массиве и создаем элементы для отображения
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerText = `${order.company} - ${order.name}`;

        // Кнопка удаления заказа
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'X';
        deleteBtn.onclick = function(event) {
            event.stopPropagation(); // Останавливаем всплытие события
            deleteOrder(order.id); // Вызов функции удаления заказа
        };
        orderDiv.appendChild(deleteBtn);

        // Расчет оставшихся дней до дедлайна
        const now = new Date();
        const daysLeft = Math.ceil((new Date(order.deadline) - now) / (1000 * 60 * 60 * 24)); // Количество оставшихся дней

        // Применение классов в зависимости от оставшегося времени до дедлайна
        if (daysLeft <= 5 && daysLeft > 2) {
            orderDiv.classList.add('blink-yellow'); // Мигает желтым, если осталось менее 5 дней
        } else if (daysLeft <= 2 && daysLeft > 0) {
            orderDiv.classList.add('blink-red'); // Мигает красным, если осталось менее 2 дней
        } else if (daysLeft <= 0) {
            orderDiv.classList.add('blink-maroon'); // Мигает темно-красным, если срок истек
        }

        // Открытие модального окна с информацией о заказе при клике на заказ
        orderDiv.onclick = function() {
            showOrderInfo(order);
        };

        // Добавление заказов в соответствующие контейнеры в зависимости от статуса
        if (order.status === 'waiting') {
            waitingContainer.appendChild(orderDiv);
        } else if (order.status === 'completed') {
            completedContainer.appendChild(orderDiv);
        }
    });
}

// Функция для отображения информации о заказе в модальном окне
function showOrderInfo(order) {
    const modal = document.getElementById('orderInfoModal');
    modal.style.display = 'block';

    document.getElementById('orderInfoName').innerText = order.name;
    document.getElementById('orderInfoPhone').innerText = order.phone;
    document.getElementById('orderInfoSize').innerText = order.size;
    document.getElementById('orderInfoQuantity').innerText = order.quantity;
    document.getElementById('orderInfoCompany').innerText = order.company;
    document.getElementById('orderInfoNote').innerText = order.note;
    document.getElementById('orderInfoDeadline').innerText = new Date(order.deadline).toDateString();
}

// Функция для закрытия модального окна информации о заказе
function closeOrderInfoModal() {
    document.getElementById('orderInfoModal').style.display = 'none';
}

// Функция для удаления заказа по его идентификатору
function deleteOrder(id) {
    orders = orders.filter(order => order.id !== id); // Удаляем заказ из массива
    localStorage.setItem('orders', JSON.stringify(orders)); // Сохраняем обновленный массив в LocalStorage
    renderOrders(); // Перерисовываем заказы
}

// Функция для закрытия модального окна оформления заказа
function closeFormModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Функция для открытия модального окна оформления заказа
function openOrderForm() {
    document.getElementById('formModal').style.display = 'block';
}

// Сразу отображаем заказы при загрузке страницы
window.onload = function() {
    renderOrders(); // Отображаем все заказы, если они есть в LocalStorage
};

// Функции для поиска заказов по тексту в поле поиска
function searchOrders() {
    const query = document.getElementById('searchInput').value.toLowerCase(); // Получаем поисковый запрос
    const orderElements = document.querySelectorAll('.order'); // Находим все заказы

    orderElements.forEach(orderElement => {
        // Проверяем наличие текста из поискового запроса в каждом заказе
        if (orderElement.innerText.toLowerCase().includes(query)) {
            orderElement.style.display = 'block'; // Показываем заказы, которые совпадают с запросом
        } else {
            orderElement.style.display = 'none'; // Скрываем неподходящие заказы
        }
    });
}

// Функция для фильтрации заказов по статусу
function filterOrders() {
    const filter = document.getElementById('filterStatus').value; // Получаем выбранный фильтр
    const orderElements = document.querySelectorAll('.order'); // Находим все заказы

    orderElements.forEach(orderElement => {
        // Применяем фильтры к заказам
        if (filter === 'all') {
            orderElement.style.display = 'block'; // Показываем все заказы
        } else if (filter === 'waiting' && orderElement.classList.contains('waiting')) {
            orderElement.style.display = 'block'; // Показываем только заказы в ожидании
        } else if (filter === 'completed' && orderElement.classList.contains('completed')) {
            orderElement.style.display = 'block'; // Показываем только завершенные заказы
        } else {
            orderElement.style.display = 'none'; // Скрываем неподходящие заказы
        }
    });
}

// Функция для сортировки заказов по дате дедлайна
function sortOrders() {
    const sort = document.getElementById('sortOrders').value; // Получаем выбранную сортировку
    const waitingContainer = document.getElementById('waiting-orders');
    const completedContainer = document.getElementById('completed-orders');

    let sortedOrders = [...orders]; // Копируем массив заказов

    // Сортировка по возрастанию или убыванию даты
    if (sort === 'dateAsc') {
        sortedOrders.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (sort === 'dateDesc') {
        sortedOrders.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    }

    // Очищаем контейнеры перед новой отрисовкой
    waitingContainer.innerHTML = '';
    completedContainer.innerHTML = '';

    // Отображаем отсортированные заказы
    sortedOrders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerText = `${order.company} - ${order.name}`;

        const now = new Date();
        const daysLeft = Math.ceil((new Date(order.deadline) - now) / (1000 * 60 * 60 * 24));

        if (daysLeft <= 5 && daysLeft > 2) {
            orderDiv.classList.add('blink-yellow');
        } else if (daysLeft <= 2 && daysLeft > 0) {
            orderDiv.classList.add('blink-red');
        } else if (daysLeft <= 0) {
            orderDiv.classList.add('blink-maroon');
        }

        if (order.status === 'waiting') {
            waitingContainer.appendChild(orderDiv);
        } else if (order.status === 'completed') {
            completedContainer.appendChild(orderDiv);
        }
    });
}
