## Как сделать так, чтобы в одном заказе было много продуктов?

```
Как сделать, если в одном заказе может быть несколько товаров?

goods.txt - файл с товарами
users.txt - файл с пользователями
orders.txt - файл с заказами
goods_and_orders.txt - товары в заказе

goods.txt
ID Title Price
10 Шоколад 100
11 Бургер  200
12 Сосиска 300

users.txt
ID Name
5 Марсель
6 Анна

orders.txt
ID USER_ID DATE
30       5 20/06/2023
31       6 20/06/2023

goods_and_orders.txt
ORDER_ID GOOD_ID COUNT
      30      10    2 - в заказе 30 есть 2 шоколада
      30      12    1 - в заказе 30 есть 1 сосиска
      31      11    2 - в заказе 31 есть 2 бургера
      31      10    1 - в заказе 31 есть 1 шоколад

В сервисе можно предусмотреть два метода:
void makeOrder(...) - создает сам заказ в файле orders.txt
void addToOrder(orderId, goodName, count) - позволяет добавить в заказ товар в определенном количестве
```