# Self-Hosted Runner Box Operations (.113 pool) (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Пул собственных раннеров работает на сервере **.113** (`tomni-proxmox-113`). С 2026-10-18 у каждого
раннера OmniRoute есть **одна роль**, одна метка и лимиты памяти/CPU, подобранные по измеренному
потреблению его рабочей нагрузки. Слот Turbopack получает столько ресурсов, сколько требуется сборке;
остальные слоты настроены в соответствии с измеренными пиковыми значениями. Переподписка ресурсов
на сервере происходит только тогда, когда сборка Turbopack совпадает со сборкой webpack Release-Green
и заданием lint; это компенсирует подкачка хоста (16 GB), а поскольку сборки pull request выполняются
на хостинговых раннерах, слот Turbopack большую часть времени простаивает:

| раннер               | метка            | роль                                                                                                                                               | `MemoryHigh` / `MemoryMax`    | `CPUQuota`    |
| -------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`     | Сборки Turbopack: `ci.yml` `Build` (только push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, ночная сборка a11y | 56 GB / 60 GB (подкачка 0)    | 1600 %        |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), сборка webpack                                                                                     | 20 GB / 24 GB (подкачка 4 GB) | 800 %         |
| `omniroute-113-2`    | `omni-light`     | ночные задания (Schemathesis, promptfoo, garak, k6, запуск a11y) и `quality.yml` `lint-guard`                                                      | 12 GB / 16 GB (подкачка 4 GB) | 600 %         |
| `omniroute-113`      | `omni-light`     | тот же пул, что и выше                                                                                                                             | 8 GB / 12 GB                  | 400 %         |
| OmniHeuris, OmniMind | (их репозитории) | только Dependabot (пиковое потребление каждого — 155 MB, 2026-10-18)                                                                               | 4 GB / 6 GB                   | 200 % каждому |

Измерено 2026-10-18:

| ресурс    | значение                            | значение для планирования                                                                                                                                                                                                                                                                                                                                                                                                |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 ядра**                 | пиковое потребление production-сборки Turbopack без ограничений составило 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); в Next 16.3.8 только фаза компиляции удерживает ~40 GB (36 GB RSS в `next-build` плюс 17 воркеров загрузчика по 3 GB, измерено 2026-10-18); сборка webpack потребляет ~14–16 GB. Одна сборка Turbopack и одна сборка webpack могут выполняться одновременно; две сборки Turbopack — нет |
| подкачка  | 16 GB                               | `omniroute-113-5` работает с отключённой подкачкой (`MemorySwapMax=0`), поэтому вышедшая из-под контроля сборка прерывается при достижении лимита, а не заставляет сервер использовать подкачку                                                                                                                                                                                                                          |
| `/tmp`    | **12 GB tmpfs = RAM**               | всё размещённое там занимает память; оставшиеся файлы удаляются через 3 ч                                                                                                                                                                                                                                                                                                                                                |
| CPU       | наблюдалась нагрузка 60 на 32 ядрах | до введения квот одна сборка Turbopack (~1166 % CPU) вместе с набором тестов покрытия на том же сервере лишала обработчики heartbeat остальных слушателей процессорного времени (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                    |
| раннеры   | **6 слушателей**                    | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` отключены (`systemctl enable --now` возвращает один из них в работу)                                                                                                                                                                                                                                                                                     |

Ограничения находятся в файле `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
каждого юнита (предыдущие значения сохранены как `override.conf.bak-20261018`) и были применены
без остановки с помощью `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` —
без перезапуска, поэтому выполнявшиеся задания не были затронуты. Метки также изменяются без остановки
через API раннеров (`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Установите очиститель (один раз, на сервере)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): каждые 30 минут, журнал в /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` обязателен: перед удалением очиститель проверяет по моментальному снимку открытых
файлов, что путь не используется; без этого инструмента он ничего не удаляет и сообщает
об этом (код выхода 1). Любое изменение сначала проверяйте с `--dry-run` — скрипт выведет в точности то, что он
сделал бы, не изменяя ничего.

Что он делает при каждом запуске: удаляет оставшиеся после наших процессов файлы (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) через **3 ч на tmpfs** и через 24 ч на диске
в `_work/_temp`; завершает процесс `next-build` старше 75 мин (ни одна задача не выполняется так долго —
2026-08-27 одна выполнялась 70 мин после того, как GitHub объявил её потерянной); удаляет рабочие копии старше 48 ч
для раннеров, чей юнит **остановлен**; оповещает при заполнении диска ≥ 85 %, показателе PSI памяти
`full/avg60` ≥ 10 % и количестве процессов-прослушивателей больше `MAX_ACTIVE_RUNNERS` (с
разбивкой на omniroute/прочие). Код выхода 1 = требуется внимание; прочитайте журнал.

Правило 75 минут не обнаруживает сборку, от задачи которой GitHub уже отказался. Когда
`Runner.Listener` не может продлить задачу, в `_diag/Runner_*.log` появляется запись
`POST request to …/renewjob timed out after 100 seconds`, API сообщает, что задача `completed`
(сбой), примерно через десять минут после последнего успешного продления, а `next-build` продолжает работать
без привязанной задачи (2026-10-18: сборка #17066 завершилась с ошибкой в 19:43, но пять минут спустя её процесс сборки всё ещё
занимал 40 ГБ). Проверьте ref в новейшем `_diag/Worker_*.log`, затем отправьте
SIGTERM только дереву процессов сборки по PID — `next-build`, `npm run build`, `build-next-isolated.mjs` и
воркерам из `_work`. Никогда не трогайте `Runner.Listener`, `RunnerService.js` или `Runner.Worker`:
воркер сообщит, что задача отменена, а процесс-прослушиватель самостоятельно вернётся в онлайн-режим.

## Юниты раннеров: KillMode

Значение `KillMode=process`, используемое раннером по умолчанию, оставляет процесс `Runner.Worker → npm → next-build`
работающим после остановки или перезапуска юнита — осиротевшая сборка продолжает потреблять оперативную память и
процессорное время, хотя задание к ней уже не привязано. Каждый юнит OmniRoute содержит drop-in-файл
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
с `KillMode=mixed`: сначала SIGTERM отправляется слушателю, а по истечении
`TimeoutStop` всей cgroup отправляется SIGKILL. Настройка вступает в силу при следующем перезапуске юнита — перезапускайте **по одному раннеру
за раз и только во время простоя**, выполняя проверку простоя и перезапуск одной командой.

## Правила эксплуатации

- **Одновременно выполняется только одна сборка Turbopack — это обеспечивается меткой.** Каждое задание, запускающее полную сборку Turbopack
  `next build`, нацелено на `[self-hosted, omni-build]`, и только **`omniroute-113-5`** имеет эту
  метку: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  ночная сборка a11y (#16853) и **amd64** в `docker-publish.yml` (webpack внутри BuildKit —
  Turbopack там аварийно завершился, запуск 33253576569). Ветка Docker для arm64 остаётся на `ubuntu-24.04-arm`.
  amd64 в `docker-publish` использует общую группу конкурентности `heavy-build-main` с `Build` из `ci.yml`
  (`cancel-in-progress: false`). Docker Engine должен находиться на `omniroute-113-5`. Второй слот Turbopack
  не помещается в 78 ГБ (2 × 33–37 ГБ плюс остальные процессы на машине); второй слот безопасен только
  для сборок webpack.
- **Сборки запросов на включение изменений выполняются на размещённых раннерах (2026-10-18).** `Build` из `ci.yml` попадает на `omni-build` только для
  `push` и `workflow_dispatch`; `Build` для каждого `pull_request` (из собственного репозитория или форка) и `merge_group`
  выполняется на `ubuntu-latest` с webpack. Когда каждый PR из собственного репозитория направлялся в этот слот, сборка Turbopack
  занимала его на 29–58 мин, 18 сборок ожидали в очереди до 18 ч, а собственная push-сборка ветки релиза
  получала слот один раз на 40 заданий. На размещённом раннере та же сборка PR занимает 8–12 мин и выполняется рядом с другими
  заданиями PR. Turbopack, сборщик, поставляемый через `npm-publish`, продолжает проверяться в ветке релиза
  ночной сборкой a11y ветки по умолчанию (04:41 UTC), каждой push-сборкой или сборкой, запущенной вручную,
  которая получает слот, а также самим `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  фиксирует условие из четырёх пунктов.
- **Никогда не выделяйте слоту Turbopack меньше измеренного необходимого объёма ресурсов.** 2026-10-18 в 18:06 лимиты слота были
  снижены с 56G/60G до 40G/44G, чтобы освободить место для `omni-release`. Фаза компиляции провела весь
  запуск на уровне `MemoryHigh` (значение `full` для memory PSI составляло 30–43 %), а `Runner.Listener`, использующий
  ту же cgroup, не смог продлить назначенное ему задание. В тот же день были восстановлены заданные владельцем
  значения 56G/60G от 2026-10-17. Ниже этого значения сборка не завершается с ошибкой; она начинает буксовать,
  и задание теряется.
- **У Release-Green есть собственный слот (2026-10-18).** До этого обе проверки Release-Green выполнялись
  на `omni-build`: при каждом push (~10/час, 97 из 100 push-запусков были отменены посреди работы за один день)
  и три раза в день в рамках полных прогонов длительностью ~2 ч (прогон в 05:29 ждал слот 6 ч) — единственный слот
  сборки был многократно перегружен, а сборки PR из собственного репозитория ждали по несколько часов.
  `release-green` и `main-green` теперь нацелены на `omni-release` (только `omniroute-113-6`) с
  `OMNIROUTE_USE_TURBOPACK=0`, и начатый запуск больше не отменяется более новым push (ожидающий слот
  по-прежнему схлопывает шквал запусков). `tests/unit/build/runner-capacity-routing.test.ts`
  фиксирует маршрутизацию, переключение на webpack и то, что ничто на `omni-release` не собирается с Turbopack.
- **Пул лёгких заданий: `omni-light`.** `omniroute-113` и `omniroute-113-2` выполняют ночные задания, которым
  нужна серверная сборка `next build` (~5–6 ГБ; webpack), а также `lint-guard` из `quality.yml`. У `omniroute-113`
  до 2026-10-18 было `MemoryHigh=4G` — сборка promptfoo с вытеснением памяти с трудом выполнялась там 54 минуты;
  8 ГБ устраняют троттлинг.
- **Меньше слушателей — намеренно.** Четыре юнита OmniRoute были отключены 2026-08-29 — каждый дополнительный
  слушатель является ещё одним потребителем указанного выше бюджета памяти. Максимум для уборщика — 6 (`MAX_ACTIVE_RUNNERS=6` в cron): он учитывает
  каждый `Runner.Listener` на машине, а OmniHeuris + OmniMind добавляют ещё два к нашим четырём.
- **Никогда не очищайте `/tmp` или `_work` вручную, пока хотя бы один раннер занят.**
  Проверка с последующим удалением, между которыми есть пауза, — именно так активное задание Build потеряло свой
  `_work` 2026-08-27. Уборщик выполняет проверку и удаление за один шаг;
  предоставьте это ему.
- Остановка раннера посреди задания отменяет задание (наблюдалось в рабочей среде): выполняйте `systemctl stop`, только
  когда у его слушателя нет дочернего процесса `Runner.Worker`, — и делайте это одной командой.
- Рабочие процессы не должны размещать артефакты в `/tmp` (это RAM). Загружайте их в
  `$RUNNER_TEMP` (на диске, отдельно для каждого раннера) — загрузка артефакта `next-build` размером 1,3 ГБ
  на tmpfs занимала 27–32 минуты, а его отправка с диска — 2 минуты.
- VPS `.15` предназначен только для омологации — на нём никогда не запускаются CI-раннеры.
