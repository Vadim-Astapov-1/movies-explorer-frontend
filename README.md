# Movies-explorer-frontend

## Примечания для ревью

1. Смешанная валидация. Ниже checkvalidity() описанны доп инструкции к браузерной валидации.

2. Данные для submit form в Login и Register берутся сразу из валидатора, т.к из-за обязательного заполнения полей, они все там точно будут

3. В Profile пришлось повозиться, ведь пользователь мог изменить к примеру только имя, не кликнув на другое поле и не передав его в валидацию. Из-за чего данные для submit из валидатора уже нельзя было использовать, ведь он, как значения мог выдать только одно поле, по которому кликнули. Поэтому пределал все это к хукам name, email. Чтобы они точно заполнялись. А валидатор и так заблокирует кнопку submit, если что не так.

4. handleTokenCheck использует функцию получения пользователя, а не отдельную вроде checkToken. Они всё равно одинаковые.

## Наверно так лучше

- Сделать валидацию в Login и Register как в Profile.

## Ссылка на сайт: https://va-movies-explorer.nomoredomains.xyz

Логин для ревью: ssh mrchibichan@51.250.30.213
