# Обзор продукта — Taiga Badge-LW

Персональный трекер в форм-факторе бэйджа. Отслеживание персонала на открытой местности (GNSS) и indoors (iBeacon, Wi-Fi, **UWB**), активность, удары/падения, SOS, метка Mifare для СКУД.

Полное РЭ (PDF): [taigaiot.com/downloads](https://taigaiot.com/downloads) · лендинг: [Badge-LW](https://taigaiot.com/taigapersonalbadge-lw)

> **Важно.** Артикул коммерческий: линейка **TGP-1034** (вариант с UWB — уточнять в заказе). При расхождении кодов в PDF и КП — верить заказу.

## Назначение

- Геолокация indoors / outdoors
- Цифровизация производства, учёт рабочего времени
- Предотвращение столкновений с тяжёлой техникой (UWB + звук)
- СКУД (встроенная метка Mifare)

## Особенности

- Передача **LoRaWAN 1.0.3** (class A)
- GNSS GLONASS/GPS
- Сканер iBeacon и Wi-Fi
- UWB (в исполнениях с поддержкой)
- SOS, звукоизлучатель, зарядка USB Type-C
- Конфигурация: приложение **Taiga IoT** (Android, Bluetooth)

## Варианты исполнения (по РЭ)

| № | Вариант |
|---|---------|
| 1 | GNSS + UWB |
| 2 | GNSS |
| 3 | UWB |

Позиционирование по BLE и LBS поддерживается во всех исполнениях.

> **Примечание.** LTE в старых текстах к **Badge-LW** не относится (см. Badge-LTE).

## Связанные страницы

- [Принцип работы](/ru/products/badge-lw/principle-of-operation)
- [Аппаратная часть](/ru/products/badge-lw/hardware)
- [Приложение Taiga IoT](/ru/software/taiga-iot)
- [W-Protocol](/ru/tech/w-protocol/overview)