# Self-Hosted Runner Box Operations (.113 pool) (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Самостоятелно хостваният пул работи на машината **.113** (`tomni-proxmox-113`). От 2026-10-18 всеки
OmniRoute runner има **една роля**, един етикет и бюджет за памет/CPU, оразмерен според измереното
натоварване. Слотът за Turbopack получава необходимите за компилацията ресурси; останалите слотове са оразмерени според
измерените им пикове. Ресурсите на машината се разпределят свръх наличния капацитет само когато компилация с Turbopack съвпадне с компилация с webpack на Release-Green
и задача за lint; swap пространството на хоста (16 GB) поема това, а тъй като компилациите за pull request се изпълняват
на хоствани runner-и, слотът за Turbopack през повечето време не се използва:

| runner               | етикет              | роля                                                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`        | Компилации с Turbopack: `ci.yml` `Build` (само при push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, нощната a11y компилация | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), компилация с webpack                                                                                            | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`        | нощни задачи (Schemathesis, promptfoo, garak, k6, стартиране на a11y) и `quality.yml` `lint-guard`                                                              | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`        | същият пул като по-горе                                                                                                                                         | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (техните хранилища) | само Dependabot (пик от 155 MB за всеки, 2026-10-18)                                                                                                            | 4 GB / 6 GB                | 200 % за всеки |

Измерено на 2026-10-18:

| ресурс    | стойност                               | какво означава за планирането                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 ядра**                    | продукционна компилация с Turbopack достигна пик от 49 GB без ограничение (`tests/unit/ci-build-bundler-webpack.test.ts`); при Next 16.3.8 само фазата на компилиране заема ~40 GB (36 GB RSS в `next-build` плюс 17 loader worker-а по 3 GB, измерено на 2026-10-18); компилация с webpack използва ~14–16 GB. Една компилация с Turbopack и една с webpack могат да работят едновременно; две компилации с Turbopack не могат |
| swap      | 16 GB                                  | `omniroute-113-5` работи с изключен swap (`MemorySwapMax=0`), така че излязла извън контрол компилация се прекратява при достигане на лимита си, вместо да принуждава машината да използва swap                                                                                                                                                                                                                                 |
| `/tmp`    | **12 GB tmpfs = RAM**                  | всичко, съхранявано там, заема памет; остатъчните файлове се почистват след 3 часа                                                                                                                                                                                                                                                                                                                                              |
| CPU       | наблюдавано натоварване 60 при 32 ядра | преди квотите една компилация с Turbopack (~1166 % CPU) плюс пакет от тестове за покритие на същата машина лишаваха heartbeat сигналите на другите слушатели от ресурси (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                   |
| runner-и  | **6 слушателя**                        | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` са деактивирани (`systemctl enable --now` активира отново един от тях)                                                                                                                                                                                                                                                                                          |

Ограниченията се намират в `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` на всяка услуга
(предишните стойности са запазени като `override.conf.bak-20261018`) и бяха приложени в движение чрез
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — без рестартиране, така че нито една
изпълняваща се задача не беше засегната. Етикетите се променят чрез API за runner-и
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), също в движение.

## Инсталиране на почистващия скрипт (еднократно, на машината)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): на всеки 30 минути, запис в /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` е задължителен: почистващият скрипт доказва, че даден път не се използва, чрез моментна снимка на отворените
файлове, преди да го премахне, а без този инструмент не премахва нищо и съобщава това
(код за изход 1). Първо изпробвайте всяка промяна с `--dry-run` — той отпечатва точно какво би
направил, без да променя нищо.

Какво прави при всяко изпълнение: почиства нашите собствени остатъчни файлове (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) след **3 ч. в tmpfs** и 24 ч. на диска
в `_work/_temp`; прекратява `next-build`, по-стар от 75 минути (никоя задача не се изпълнява толкова дълго — на
2026-08-27 една се изпълняваше 70 минути, след като GitHub беше обявил задачата ѝ за изгубена); премахва работните
копия на runner-и, по-стари от 48 ч., чиито услуги са **спрени**; сигнализира при запълване на диска ≥ 85%, memory PSI
`full/avg60` ≥ 10% и повече слушатели от `MAX_ACTIVE_RUNNERS` (с разбивка на
omniroute/други). Код за изход 1 = необходимо е внимание; прочетете журнала.

Правилото за 75 минути не засича build, чиято задача GitHub вече е изоставил. Когато
`Runner.Listener` не може да поднови задачата си, `_diag/Runner_*.log` показва
`POST request to …/renewjob timed out after 100 seconds`, API отчита задачата като `completed`
(неуспешна) около десет минути след последното успешно подновяване, а `next-build` продължава да се изпълнява без
прикачена задача (2026-10-18: Build на #17066 беше отбелязан като неуспешен в 19:43, а неговият build все още
заемаше 40 GB пет минути по-късно). Потвърдете ref в най-новия `_diag/Worker_*.log`, след което
изпратете SIGTERM само на дървото от build процеси по PID — `next-build`, `npm run build`, `build-next-isolated.mjs` и
worker-ите в `_work`. Никога не засягайте `Runner.Listener`, `RunnerService.js` или `Runner.Worker`: worker-ът
отчита задачата като отменена, а listener-ът сам се връща онлайн.

## Runner модули: KillMode

Стандартната настройка `KillMode=process` на runner-а оставя `Runner.Worker → npm → next-build`
активен, когато даден модул бъде спрян или рестартиран — осиротял build продължава да консумира RAM и
CPU, без към него да има прикачена задача. Всеки модул на OmniRoute има drop-in конфигурация
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
с `KillMode=mixed`: първо SIGTERM към listener-а, а при
`TimeoutStop` — SIGKILL към цялата cgroup. Настройката влиза в сила при следващото рестартиране на модула — рестартирайте **по един runner,
само когато е неактивен**, като проверката за неактивност и рестартирането трябва да са в една и съща команда.

## Правила за работа

- **Само една компилация с Turbopack едновременно — наложено чрез етикет.** Всяка задача, която изпълнява пълна компилация с Turbopack
  `next build`, е насочена към `[self-hosted, omni-build]`, а само **`omniroute-113-5`** има този
  етикет: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  нощната a11y компилация (#16853) и **amd64** в `docker-publish.yml` (webpack в BuildKit —
  Turbopack се срина там, изпълнение 33253576569). Частта за arm64 Docker остава на `ubuntu-24.04-arm`.
  `docker-publish` за amd64 споделя групата за конкурентност `heavy-build-main` с `Build` от `ci.yml`
  (`cancel-in-progress: false`). Docker Engine трябва да е на `omniroute-113-5`. Втори слот за Turbopack
  не се побира в 78 GB (2 × 33–37 GB плюс останалата част от натоварването на машината); втори слот е безопасен само за
  компилации с webpack.
- **Компилациите за заявки за изтегляне се изпълняват на хоствана инфраструктура (2026-10-18).** `Build` от `ci.yml` достига `omni-build` само при
  `push` и `workflow_dispatch`; всяка `Build` за `pull_request` (от собственото хранилище или fork) и `merge_group`
  се изпълнява на `ubuntu-latest` с webpack. Когато всяка PR от собственото хранилище беше насочвана към слота, една компилация с Turbopack
  го заемаше за 29–58 минути, 18 компилации чакаха на опашка до 18 часа, а собствената push компилация
  на release линията получи слота веднъж на 40 задачи. На хоствана инфраструктура същата PR компилация отнема 8–12 минути заедно с другите
  задачи на PR. Turbopack — bundler-ът, който `npm-publish` доставя — продължава да се упражнява върху release линията чрез
  нощната a11y компилация на клона по подразбиране (04:41 UTC), чрез всяка push или dispatch компилация, която
  достига слота, и чрез самия `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  фиксира проверката с четири условия.
- **Никога не задавайте на слота за Turbopack по-малко ресурси от измерената му нужда.** На 2026-10-18 в 18:06 лимитите на слота бяха
  намалени от 56G/60G на 40G/44G, за да се освободи място за `omni-release`. Фазата на компилация остана на
  `MemoryHigh` през цялото изпълнение (memory PSI `full` 30–43 %), а `Runner.Listener`, който
  споделя cgroup, не можа да поднови задачата си. Настройките 56G/60G от 2026-10-17 на собственика бяха възстановени
  същия ден. Под тази стойност компилацията не се проваля; тя започва да претоварва системата с непрекъснато прехвърляне на памет и задачата се губи.
- **Release-Green има собствен слот (2026-10-18).** Дотогава и двете валидации на Release-Green се изпълняваха
  на `omni-build`: при всеки push (~10/час, 97 от 100 push изпълнения бяха отменени по време на работа за един ден)
  и три пълни обхождания по ~2 часа дневно (обхождането в 05:29 чака 6 часа за слота) — единичният слот за компилация
  беше претоварен няколкократно, а PR компилациите от собственото хранилище чакаха с часове.
  `release-green` и `main-green` вече са насочени към `omni-release` (само `omniroute-113-6`) с
  `OMNIROUTE_USE_TURBOPACK=0`, а започнало изпълнение вече не се отменя от по-нов push (чакащият
  слот все пак свива поредицата от заявки). `tests/unit/build/runner-capacity-routing.test.ts`
  фиксира маршрутизирането, превключването към webpack и гаранцията, че нищо на `omni-release` не се компилира с Turbopack.
- **Лек пул: `omni-light`.** `omniroute-113` и `omniroute-113-2` изпълняват нощните задачи, които изискват
  `next build` само за backend (~5–6 GB; webpack), както и `lint-guard` от `quality.yml`. `omniroute-113`
  имаше `MemoryHigh=4G` до 2026-10-18 — компилацията на promptfoo си освобождаваше памет в продължение на 54 минути
  там; 8 GB премахват ограничаването.
- **По-малко listeners — умишлено.** Четири модула OmniRoute бяха деактивирани на 2026-08-29 — всеки допълнителен
  listener е още един потребител на горепосочения бюджет за памет. Таванът на janitor е 6 (`MAX_ACTIVE_RUNNERS=6` в cron): той брои
  всеки `Runner.Listener` на машината, а OmniHeuris + OmniMind добавят още два към нашите четири.
- **Никога не почиствайте ръчно `/tmp` или `_work`, докато някой runner е зает.**
  Проверка, последвана от изтриване след пауза между двете, е причината активна `Build` задача да загуби своята
  `_work` на 2026-08-27. Janitor извършва проверката и премахването в една стъпка;
  оставете го да го направи.
- Спирането на runner по време на задача отменя задачата (наблюдавано на живо): използвайте `systemctl stop` само
  когато неговият listener няма дъщерен процес `Runner.Worker` — и го направете с една команда.
- Workflow-ите не трябва да съхраняват артефакти в `/tmp` (той е в RAM). Изтегляйте в
  `$RUNNER_TEMP` (на диска, отделно за всеки runner) — артефактът `next-build` с размер 1.3 GB се записваше за 27–32
  минути върху tmpfs, а качването му от диска отнемаше 2 минути.
- VPS машината `.15` е само за хомологация — никога не изпълнява CI runners.
