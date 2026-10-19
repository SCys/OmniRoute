# Self-Hosted Runner Box Operations (.113 pool) (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Локальний пул працює на сервері **.113** (`tomni-proxmox-113`). Із 2026-10-18 кожен
runner OmniRoute має **одну роль**, одну мітку та бюджет пам’яті/CPU, розмір якого відповідає
виміряному навантаженню. Слот Turbopack отримує стільки ресурсів, скільки потребує збирання;
інші слоти налаштовано відповідно до виміряних пікових значень. Сервер перевищує фізично
доступні ресурси лише тоді, коли збирання Turbopack збігається зі збиранням webpack для
Release-Green і завданням lint; swap хоста (16 ГБ) поглинає це перевищення, а оскільки збирання
для pull request виконуються на хостингових runner’ах, слот Turbopack більшість часу простоює:

| runner               | мітка              | роль                                                                                                                                                | `MemoryHigh` / `MemoryMax` | `CPUQuota`        |
| -------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`       | збирання Turbopack: `ci.yml` `Build` (лише push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, нічне збирання a11y | 56 ГБ / 60 ГБ (swap 0)     | 1600 %            |
| `omniroute-113-6`    | `omni-release`     | Release-Green (`release-green` + `main-green`), збирання webpack                                                                                    | 20 ГБ / 24 ГБ (swap 4 ГБ)  | 800 %             |
| `omniroute-113-2`    | `omni-light`       | нічні завдання (Schemathesis, promptfoo, garak, k6, запуск a11y) і `quality.yml` `lint-guard`                                                       | 12 ГБ / 16 ГБ (swap 4 ГБ)  | 600 %             |
| `omniroute-113`      | `omni-light`       | той самий пул, що й вище                                                                                                                            | 8 ГБ / 12 ГБ               | 400 %             |
| OmniHeuris, OmniMind | (їхні репозиторії) | лише Dependabot (пікове значення 155 МБ для кожного, 2026-10-18)                                                                                    | 4 ГБ / 6 ГБ                | 200 % для кожного |

Виміряно 2026-10-18:

| ресурс    | значення                                   | що це означає для планування                                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ОЗП / CPU | **78 ГБ / 32 ядра**                        | пікове споживання збирання Turbopack для production без обмежень становило 49 ГБ (`tests/unit/ci-build-bundler-webpack.test.ts`); у Next 16.3.8 сама фаза компіляції утримує ~40 ГБ (36 ГБ RSS у `next-build` плюс 17 воркерів завантажувача з 3 ГБ, виміряно 2026-10-18); збирання webpack використовує ~14–16 ГБ. Одне збирання Turbopack і одне збирання webpack можуть виконуватися разом; два збирання Turbopack — ні |
| swap      | 16 ГБ                                      | `omniroute-113-5` працює з вимкненим swap (`MemorySwapMax=0`), тому некероване збирання примусово завершується після досягнення ліміту, замість того щоб змусити сервер використовувати swap                                                                                                                                                                                                                               |
| `/tmp`    | **12 ГБ tmpfs = ОЗП**                      | усе розміщене там займає пам’ять; залишки видаляються через 3 год                                                                                                                                                                                                                                                                                                                                                          |
| CPU       | спостерігалося навантаження 60 на 32 ядрах | до запровадження квот одне збирання Turbopack (~1166 % CPU) разом із набором тестів покриття на тому самому сервері позбавляло інші слухачі ресурсів для надсилання сигналів активності (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                              |
| runner’и  | **6 слухачів**                             | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` вимкнено (`systemctl enable --now` знову вмикає один із них)                                                                                                                                                                                                                                                                                               |

Обмеження містяться у файлі `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
кожного юніта (попередні значення збережено як `override.conf.bak-20261018`) і були застосовані
без зупинки за допомогою `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…`
— без перезапуску, тому жодне активне завдання не було зачеплене. Мітки змінюються через API
runner’ів (`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), також без зупинки.

## Установіть очищувач (одноразово, на сервері)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): кожні 30 хв, записувати журнал у /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` є обов’язковим: перед видаленням очищувач за одним знімком відкритих
файлів перевіряє, що шлях не використовується, а без цього інструмента він нічого
не видаляє та повідомляє про це (exit 1). Спочатку перевіряйте будь-яку зміну з
`--dry-run` — він точно покаже, що саме зробив би, не змінюючи нічого.

Що він робить під час кожного запуску: прибирає наші власні залишки (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) через **3 год на tmpfs** і через 24 год на диску
в `_work/_temp`; завершує `next-build`, старіший за 75 хв (жодне завдання не виконується так довго —
2026-08-27 одне з них працювало 70 хв після того, як GitHub оголосив його втраченим); видаляє
робочі копії старіші за 48 год для раннерів, чиї юніти **зупинені**; сповіщає, якщо диск заповнений
на ≥ 85 %, PSI пам’яті `full/avg60` ≥ 10 % або кількість слухачів перевищує
`MAX_ACTIVE_RUNNERS` (із розподілом на omniroute/інші). Exit 1 = потрібна увага;
перегляньте журнал.

Правило 75 хвилин не виявляє збірку, від завдання якої GitHub уже відмовився. Коли
`Runner.Listener` не може поновити своє завдання, `_diag/Runner_*.log` містить
`POST request to …/renewjob timed out after 100 seconds`, API повідомляє, що завдання `completed`
(помилка), приблизно через десять хвилин після останнього успішного поновлення, а `next-build`
продовжує працювати без прив’язаного завдання (2026-10-18: збірка #17066 завершилася помилкою
о 19:43, але через п’ять хвилин її процес усе ще займав 40 GB). Перевірте ref у найновішому
`_diag/Worker_*.log`, а потім надішліть SIGTERM лише дереву процесів збірки за PID —
`next-build`, `npm run build`, `build-next-isolated.mjs` і воркерам `_work`. Ніколи не чіпайте
`Runner.Listener`, `RunnerService.js` або `Runner.Worker`: воркер повідомить, що завдання
скасовано, а слухач самостійно повернеться в онлайн.

## Модулі раннерів: KillMode

Стандартний параметр раннера `KillMode=process` залишає процеси `Runner.Worker → npm → next-build`
активними після зупинки або перезапуску модуля — осиротіла збірка продовжує споживати оперативну пам’ять і
CPU, хоча з нею не пов’язане жодне завдання. Кожен модуль OmniRoute має додаткову конфігурацію
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
із `KillMode=mixed`: спочатку SIGTERM надсилається слухачу, а після
`TimeoutStop` — SIGKILL усій cgroup. Зміна набуває чинності після наступного перезапуску модуля — перезапускайте **по одному раннеру,
лише коли він неактивний**, виконуючи перевірку неактивності та перезапуск однією командою.

## Правила експлуатації

- **Одночасно лише одна збірка Turbopack — обмеження забезпечується міткою.** Кожне завдання, що виконує повну збірку Turbopack
  `next build`, націлене на `[self-hosted, omni-build]`, і лише **`omniroute-113-5`** має цю
  мітку: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  нічна збірка a11y (#16853) і **amd64** у `docker-publish.yml` (webpack усередині BuildKit —
  Turbopack аварійно завершився там, запуск 33253576569). Частина Docker для arm64 залишається на `ubuntu-24.04-arm`.
  amd64 у `docker-publish` використовує спільну групу паралельності `heavy-build-main` із `Build`
  у `ci.yml` (`cancel-in-progress: false`). Docker Engine має бути на `omniroute-113-5`. Другий слот Turbopack
  не вміщується в 78 ГБ (2 × 33–37 ГБ плюс решта навантаження сервера); другий слот безпечний лише для
  збірок webpack.
- **Збірки запитів на злиття виконуються на розміщених раннерах (2026-10-18).** `Build` у `ci.yml` потрапляє на `omni-build` лише для
  `push` і `workflow_dispatch`; кожна збірка `pull_request` (із власного репозиторію або форка) та `merge_group`
  виконується на `ubuntu-latest` із webpack. Коли кожен PR із власного репозиторію спрямовувався до слота, збірка Turbopack
  утримувала його 29–58 хв, 18 збірок чекали в черзі до 18 год, а власна push-збірка релізної гілки
  отримала слот один раз із 40 завдань. На розміщеному раннері та сама збірка PR займає 8–12 хв паралельно з іншими
  завданнями PR. Turbopack, пакувальник, із яким постачається `npm-publish`, продовжує перевірятися в релізній гілці
  нічною збіркою a11y гілки за замовчуванням (04:41 UTC), кожною збіркою push або dispatch, яка
  потрапляє до слота, і самим `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  фіксує перевірку з чотирьох умов.
- **Ніколи не встановлюйте для слота Turbopack обсяг пам’яті, менший за виміряну потребу.** 2026-10-18 о 18:06 ліміт слота
  зменшили з 56G/60G до 40G/44G, щоб звільнити місце для `omni-release`. Фаза компіляції весь час
  упиралася в `MemoryHigh` (memory PSI `full` 30–43 %), а `Runner.Listener`, який
  використовує ту саму cgroup, не зміг продовжити своє завдання. Власні значення 56G/60G від 2026-10-17 було відновлено
  того самого дня. Нижче цього значення збірка не завершується з помилкою; вона починає витрачати ресурси на постійне вивільнення пам’яті, і завдання втрачається.
- **Release-Green має власний слот (2026-10-18).** До цього обидві перевірки Release-Green виконувалися
  на `omni-build`: для кожного push (~10/год, 97 зі 100 запусків push було скасовано посеред виконання за один день)
  і трьох повних проходів тривалістю ~2 год щодня (прохід о 05:29 чекав на слот 6 год) — єдиний слот збірки
  був перевантажений у кілька разів, а збірки PR із власного репозиторію чекали годинами.
  `release-green` і `main-green` тепер націлені на `omni-release` (лише `omniroute-113-6`) із
  `OMNIROUTE_USE_TURBOPACK=0`, а розпочатий запуск більше не скасовується новішим push (слот
  очікування все одно згортає шквал запусків). `tests/unit/build/runner-capacity-routing.test.ts`
  фіксує маршрутизацію, перемикання на webpack і те, що на `omni-release` нічого не збирається за допомогою Turbopack.
- **Пул легких завдань: `omni-light`.** `omniroute-113` і `omniroute-113-2` виконують нічні завдання, яким потрібна
  лише серверна збірка `next build` (~5–6 ГБ; webpack), і `lint-guard` із `quality.yml`. `omniroute-113`
  мав `MemoryHigh=4G` до 2026-10-18 — збірка promptfoo витрачала 54 хвилини, намагаючись вивільнити пам’ять;
  8 ГБ усувають це обмеження продуктивності.
- **Менше слухачів навмисно.** Чотири модулі OmniRoute було вимкнено 2026-08-29 — кожен додатковий
  слухач є ще одним споживачем наведеного вище бюджету пам’яті. Максимум для прибиральника — 6 (`MAX_ACTIVE_RUNNERS=6` у cron): він рахує
  кожен `Runner.Listener` на сервері, а OmniHeuris + OmniMind додають ще два до наших чотирьох.
- **Ніколи не очищуйте `/tmp` або `_work` вручну, поки хоча б один раннер зайнятий.** Саме
  перевірка з подальшим видаленням після паузи призвела до того, що активне завдання Build втратило свій
  `_work` 2026-08-27. Прибиральник виконує перевірку та видалення за один крок;
  дозвольте йому це зробити.
- Зупинка раннера посеред завдання скасовує це завдання (перевірено наживо): виконуйте `systemctl stop`, лише
  коли його слухач не має дочірнього процесу `Runner.Worker`, — і робіть це однією командою.
- Робочі процеси не повинні зберігати артефакти в `/tmp` (це оперативна пам’ять). Завантажуйте до
  `$RUNNER_TEMP` (на диску, окремо для кожного раннера) — артефакт `next-build` розміром 1,3 ГБ завантажувався 27–32
  хвилини до tmpfs і 2 хвилини вивантажувався з диска.
- VPS `.15` призначено лише для омологації — CI-раннери на ньому ніколи не запускаються.
