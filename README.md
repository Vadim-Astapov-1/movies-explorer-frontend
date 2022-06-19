# Movies-explorer-frontend

Фронтенд проекта movies-explorer. Сервис для поиска фильмов.

**Адрес страницы:** https://va-movies-explorer.nomoredomains.xyz

![Screenshot_4](https://user-images.githubusercontent.com/86553552/174489430-1962416f-dcec-4cd5-8390-338d7468a078.png)

## Описание

Начальная страница содержит информацию о этапах создания проекта, какие технологии использовались и немного информации о его создателе(меня). Портфолио наполненно ссылками на мои прошлые работы. Буду рад если вы их посмотрите!

Значок ![logo](https://user-images.githubusercontent.com/86553552/174489096-81f86f8d-6158-4ff9-a325-cd98d4b9b2e9.svg) всегда перенесет вас на начальную страницу, где бы вы не были.

### Но это только начальная страница...

Сверху распологается меню навигации. При нажатии *регистрация* вы попадете на её страницу, где после ввода *email* и *пароля* вы станите частью проекта movies-explorer и сразу попадете на страницу поиска фильмов.

### Фильмы

Строка поиска поможет найти фильмы вам по душе, предоставленными источником BeatFilm. Они также фильтруются в рельном времени на короткометражки. Если результатов поиска мало, внизу есть кнопка ещё.

После поиска вы увидите карточки с фильмами, при нажатии на которые нас перенесет на youtube для просмотра его трейлера. Если фильм вам понравился, мы можите его сохранить и снова увидеть в сохраненные фильмы. Его также можно удалить из сохраненных.

### Аккаунт

Ваш профиль. Мы можите изменить ваш *email* и *пароль* или выйти из аккаунта.

## Примечания

- Страница является полностью адаптивной под разные разрешения.

- Функциональные компоненты **React** переиспользуются в разных частях проекта, во избежании дублирования одинакового кода. Всего компонентов в проекте 27!

- Формы ввода валидируются в рельном времени.

- При возвращении обратно на сайт, вы будите уже авторизованны и попадете на страницу поиска фильмов, где сохранилась ваша последняя история поиска.

- История поиска и список всех фильмов сохраняются в локальном хранилище.

- Используется хук *useContext* для данных пользователя.

- Запросы к APi описываются в классах *javascript* и отправляются к поддоменену movies-explorer. Backend описывается в другом репозитории [movies-explorer-api](https://github.com/Vadim-Astapov-1/movies-explorer-api.git).

- Есть страница 404.
