// Массив для хранения заказов
let orders = [];

// Функция для обработки отправки формы нового заказа
document.getElementById('newOrderForm').onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Создание нового заказа
    const order = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        size: document.getElementById('size').value,
        quantity: document.getElementById('quantity').value,
        company: document.getElementById('company').value,
        note: document.getElementById('note').value,
        deadline: new Date(document.getElementById('deadline').value), // Срок выполнения заказа
        status: 'waiting'
    };

    // Добавление заказа в массив
    orders.push(order);
    renderOrders(); // Отрисовка всех заказов
    closeFormModal(); // Закрытие модального окна после отправки формы
}

// Функция для отображения всех заказов на странице
function renderOrders() {
    const waitingContainer = document.getElementById('waiting-orders'); // Контейнер для заказов в ожидании
    const completedContainer = document.getElementById('completed-orders'); // Контейнер для готовых заказов
    waitingContainer.innerHTML = ''; // Очищаем контейнер перед отрисовкой
    completedContainer.innerHTML = ''; // Очищаем контейнер готовых заказов

    // Проходим по каждому заказу и добавляем его на страницу
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerText = `${order.company} - ${order.name}`;

        // Расчет оставшихся дней до дедлайна
        const now = new Date();
        const daysLeft = Math.ceil((order.deadline - now) / (1000 * 60 * 60 * 24));

        // Определение класса для мигания в зависимости от оставшегося времени до дедлайна
        if (daysLeft <= 5 && daysLeft > 2) {
            orderDiv.classList.add('blink-yellow'); // Мигает желтым за 5 дней до дедлайна
        } else if (daysLeft <= 2 && daysLeft > 0) {
            orderDiv.classList.add('blink-red'); // Мигает красным за 2 дня до дедлайна
        } else if (daysLeft <= 0) {
            orderDiv.classList.add('blink-maroon'); // Мигает темно-красным, если срок истек
        }

        // Добавление заказа в соответствующий контейнер в зависимости от его статуса
        if (order.status === 'waiting') {
            waitingContainer.appendChild(orderDiv);
        } else if (order.status === 'completed') {
            completedContainer.appendChild(orderDiv);
        }

        // Добавляем обработчик клика для показа информации о заказе
        orderDiv.onclick = function() {
            showOrderInfo(order); // Отображение информации о заказе
        };
    });
}

// Функция для отображения информации о заказе
function showOrderInfo(order) {
    // Открытие модального окна и отображение данных о заказе
    const modal = document.getElementById('orderInfoModal');
    modal.style.display = 'block';
    
    // Заполнение данных о заказе
    document.getElementById('orderInfoName').innerText = order.name;
    document.getElementById('orderInfoPhone').innerText = order.phone;
    document.getElementById('orderInfoSize').innerText = order.size;
    document.getElementById('orderInfoQuantity').innerText = order.quantity;
    document.getElementById('orderInfoCompany').innerText = order.company;
    document.getElementById('orderInfoNote').innerText = order.note;
    document.getElementById('orderInfoDeadline').innerText = order.deadline.toDateString();
}

// Функция для закрытия модального окна информации о заказе
function closeOrderInfoModal() {
    document.getElementById('orderInfoModal').style.display = 'none';
}

// Функция для подтверждения завершения заказа
function confirmOrderCompletion(order) {
    const confirmation = confirm(`Завершить заказ ${order.company} - ${order.name}?`);
    if (confirmation) {
        order.status = 'completed'; // Изменяем статус заказа на "готов"
        renderOrders(); // Перерисовываем заказы
    }
}

// Функция для закрытия модального окна
function closeFormModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Функция для открытия модального окна оформления заказа
function openOrderForm() {
    document.getElementById('formModal').style.display = 'block';
}

// Функция для поиска заказов по имени или компании
function searchOrders() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const orderElements = document.querySelectorAll('.order');
    
    orderElements.forEach(orderElement => {
        if (orderElement.innerText.toLowerCase().includes(query)) {
            orderElement.style.display = 'block'; // Показываем заказы, которые совпадают с запросом
        } else {
            orderElement.style.display = 'none'; // Скрываем неподходящие заказы
        }
    });
}

// Функция для фильтрации заказов по статусу
function filterOrders() {
    const filter = document.getElementById('filterStatus').value;
    const orderElements = document.querySelectorAll('.order');
    
    orderElements.forEach(orderElement => {
        if (filter === 'all') {
            orderElement.style.display = 'block'; // Показываем все заказы
        } else if (filter === 'waiting' && orderElement.classList.contains('waiting')) {
            orderElement.style.display = 'block'; // Показываем только заказы в ожидании
        } else if (filter === 'completed' && orderElement.classList.contains('completed')) {
            orderElement.style.display = 'block'; // Показываем только готовые заказы
        } else {
            orderElement.style.display = 'none'; // Скрываем неподходящие заказы
        }
    });
}

// Функция для сортировки заказов по дате
function sortOrders() {
    const sort = document.getElementById('sortOrders').value;
    const waitingContainer = document.getElementById('waiting-orders');
    const completedContainer = document.getElementById('completed-orders');

    let sortedOrders = [...orders];

    // Сортировка по возрастанию или убыванию даты дедлайна
    if (sort === 'dateAsc') {
        sortedOrders.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (sort === 'dateDesc') {
        sortedOrders.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    }

    waitingContainer.innerHTML = ''; // Очищаем контейнер перед новой отрисовкой
    completedContainer.innerHTML = ''; // Очищаем контейнер готовых заказов

    sortedOrders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerText = `${order.company} - ${order.name}`;

        const now = new Date();
        const daysLeft = Math.ceil((order.deadline - now) / (1000 * 60 * 60 * 24));

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
