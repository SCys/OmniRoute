# Self-Hosted Runner Box Operations (.113 pool) (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Пул на сопственој инфраструктури ради на **.113** машини (`tomni-proxmox-113`). Од 2026-10-18 сваки
OmniRoute извршилац има **једну улогу**, једну ознаку и меморијски/CPU буџет димензионисан према измереном
оптерећењу. Turbopack инстанца добија ресурсе потребне за израду; остале инстанце су димензионисане према
измереним вршним вредностима. Машина прекорачује расположиве ресурсе само када се Turbopack израда поклопи са Release-Green
webpack израдом и lint задатком; swap хоста (16 GB) апсорбује то, а пошто се Build задаци за pull request-ове
извршавају на хостованој инфраструктури, Turbopack инстанца је већину времена неактивна:

| извршилац            | ознака                  | улога                                                                                                                                           | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`            | Turbopack израде: `ci.yml` `Build` (само push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, ноћна a11y израда | 56 GB / 60 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release`          | Release-Green (`release-green` + `main-green`), webpack израда                                                                                  | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`            | ноћни задаци (Schemathesis, promptfoo, garak, k6, покретање a11y) и `quality.yml` `lint-guard`                                                  | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`            | исти пул као изнад                                                                                                                              | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (њихови репозиторијуми) | само Dependabot (вршно по 155 MB, 2026-10-18)                                                                                                   | 4 GB / 6 GB                | по 200 %   |

Измерено 2026-10-18:

| ресурс    | вредност                              | шта то значи за распоређивање                                                                                                                                                                                                                                                                                                                                                                |
| --------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 језгра**                 | продукциона Turbopack израда достигла је вршних 49 GB без ограничења (`tests/unit/ci-build-bundler-webpack.test.ts`); на Next 16.3.8 сама фаза компилације заузима ~40 GB (36 GB RSS у `next-build` плус 17 loader радника са по 3 GB, измерено 2026-10-18); webpack израда заузима ~14–16 GB. Једна Turbopack и једна webpack израда могу да раде истовремено; две Turbopack израде не могу |
| swap      | 16 GB                                 | `omniroute-113-5` ради са искљученим swap-ом (`MemorySwapMax=0`), тако да се неконтролисана израда прекида када достигне ограничење уместо да пребаци машину на swap                                                                                                                                                                                                                         |
| `/tmp`    | **12 GB tmpfs = RAM**                 | све што се тамо привремено смести заузима меморију; остаци се уклањају након 3 h                                                                                                                                                                                                                                                                                                             |
| CPU       | забележено оптерећење 60 на 32 језгра | пре ограничења, једна Turbopack израда (~1166 % CPU) уз coverage пакет тестова на истој машини ускратила је ресурсе heartbeat сигналима других слушалаца (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                               |
| извршиоци | **6 слушалаца**                       | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` су онемогућени (`systemctl enable --now` поново покреће једног)                                                                                                                                                                                                                                                              |

Ограничења се налазе у `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` сваке јединице
(претходне вредности су сачуване као `override.conf.bak-20261018`) и примењена су у ходу помоћу
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — без поновног покретања, тако да ниједан
активни задатак није прекинут. Ознаке се мењају преко API-ја за извршиоце
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), такође у ходу.

## Инсталирајте чистач (једнократно, на серверу)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): сваких 30 минута, бележење у /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` је обавезан: чистач једним снимком отворених датотека потврђује да је путања неактивна пре него што је уклони, а без овог алата не уклања ништа и то пријављује (излазни код 1). Сваку измену прво испробајте помоћу `--dry-run` — исписује тачно шта би урадио и не мења ништа.

Шта ради при сваком покретању: чисти наше преостале датотеке (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) након **3 сата на tmpfs-у** и 24 сата на диску у `_work/_temp`; прекида `next-build` старији од 75 минута (ниједан посао не траје толико — 2026-08-27 један је радио 70 минута након што је GitHub прогласио његов посао изгубљеним); уклања checkout директоријуме старије од 48 сати за runner-е чија је јединица **заустављена**; упозорава када је попуњеност диска ≥ 85 %, меморијски PSI `full/avg60` ≥ 10 % и када има више listener-а него што дозвољава `MAX_ACTIVE_RUNNERS` (са поделом на omniroute/остале). Излазни код 1 = потребна је пажња; прочитајте дневник.

Правило од 75 минута не открива build од којег је GitHub већ одустао. Када `Runner.Listener` не може да обнови свој посао, `_diag/Runner_*.log` приказује `POST request to …/renewjob timed out after 100 seconds`, API пријављује посао као `completed` (неуспешан) око десет минута након последњег успешног обнављања, а `next-build` наставља да ради без придруженог посла (2026-10-18: Build за #17066 је означен као неуспешан у 19:43, а његов build је и пет минута касније и даље заузимао 40 GB). Потврдите ref у најновијем `_diag/Worker_*.log`, а затим по PID-у пошаљите SIGTERM само стаблу build процеса — `next-build`, `npm run build`, `build-next-isolated.mjs` и `_work` worker-има. Никада не дирајте `Runner.Listener`, `RunnerService.js` или `Runner.Worker`: worker пријављује посао као отказан, а listener се сам поново враћа на мрежу.

## Јединице извршилаца: KillMode

Подразумевани `KillMode=process` извршиоца оставља `Runner.Worker → npm → next-build`
активним када се јединица заустави или поново покрене — напуштена изградња наставља да троши RAM и
CPU, а да није повезана ни са једним задатком. Свака OmniRoute јединица има додатну конфигурацију
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
са `KillMode=mixed`: најпре SIGTERM процесу који ослушкује, а затим SIGKILL целој cgroup групи по истеку
`TimeoutStop`. Ступа на снагу при следећем поновном покретању јединице — поново покрећите **по један извршилац,
и то само када је неактиван**, при чему провера неактивности и поновно покретање морају бити у истој команди.

## Оперативна правила

- **Само једна Turbopack изградња истовремено — обезбеђено ознаком.** Сваки посао који покреће потпуну Turbopack
  `next build` изградњу циља `[self-hosted, omni-build]`, а само **`omniroute-113-5`** носи ту
  ознаку: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  ноћна a11y изградња (#16853) и `docker-publish.yml` **amd64** (webpack унутар BuildKit-а —
  Turbopack се тамо срушио, покретање 33253576569). Docker грана за arm64 остаје на `ubuntu-24.04-arm`.
  `docker-publish` amd64 дели `heavy-build-main` групу конкурентности са `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine мора бити на `omniroute-113-5`. Други Turbopack
  слот не стаје у 78 GB (2 × 33–37 GB плус остатак система); други слот је безбедан само за
  webpack изградње.
- **Изградње за захтеве за спајање покрећу се на хостованој инфраструктури (2026-10-18).** `ci.yml` `Build` стиже до `omni-build` само за
  `push` и `workflow_dispatch`; свака `pull_request` изградња (из сопственог извора или форка) и `merge_group` `Build`
  покреће се на `ubuntu-latest` уз webpack. Када је сваки PR из сопственог извора био усмерен на тај слот, Turbopack
  `Build` га је држао 29–58 минута, 18 изградњи је чекало у реду до 18 сати, а сопствена `push` изградња
  гране издања добила је слот једном у 40 послова. На хостованој инфраструктури иста PR изградња траје
  8–12 минута упоредо са осталим пословима тог PR-а. Turbopack, алат за пакетирање који `npm-publish` испоручује,
  и даље се проверава на грани издања кроз ноћну a11y изградњу подразумеване гране (04:41 UTC), кроз
  сваку `push` или ручно покренуту `Build` изградњу која стигне до слота, као и кроз сам `npm-publish`.
  `tests/unit/build/heavy-build-queue.test.ts` фиксира услов са четири клаузуле.
- **Никада не додељујте Turbopack слоту мање ресурса од измерених потреба.** Дана 2026-10-18 у 18:06 слот је
  смањен са 56G/60G на 40G/44G да би се направило места за `omni-release`. Фаза компајлирања је током
  целог покретања била на граници `MemoryHigh` (меморијски PSI `full` 30–43 %), а `Runner.Listener`, који
  дели cgroup, није могао да обнови свој посао. Власникове вредности 56G/60G од 2026-10-17 враћене су
  истог дана. Испод те вредности изградња не отказује; она се заглављује у непрекидном пребацивању меморије,
  а посао се губи.
- **Release-Green има сопствени слот (2026-10-18).** До тада су се обе Release-Green провере покретале
  на `omni-build`: при сваком `push` догађају (~10/сат, 97 од 100 `push` покретања отказано је усред рада за један дан)
  и током три потпуна пролаза од ~2 сата дневно (пролаз у 05:29 чекао је слот 6 сати) — једини слот за изградњу
  био је вишеструко преоптерећен, а PR изградње из сопственог извора чекале су сатима.
  `release-green` и `main-green` сада циљају `omni-release` (само `omniroute-113-6`) са
  `OMNIROUTE_USE_TURBOPACK=0`, а започето покретање се више не отказује због новијег `push` догађаја
  (слот на чекању и даље сажима навалу). `tests/unit/build/runner-capacity-routing.test.ts`
  фиксира усмеравање, пребацивање на webpack и услов да ништа на `omni-release` не користи Turbopack за изградњу.
- **Лаки скуп: `omni-light`.** `omniroute-113` и `omniroute-113-2` покрећу ноћне послове којима је
  потребна само серверска `next build` изградња (~5–6 GB; webpack) и `quality.yml` `lint-guard`. `omniroute-113`
  је имао `MemoryHigh=4G` до 2026-10-18 — promptfoo изградња је тамо 54 минута покушавала да ослободи
  довољно меморије; 8 GB уклања пригушивање.
- **Намерно је мање слушалаца.** Четири OmniRoute јединице су онемогућене 2026-08-29 — сваки додатни
  слушалац је још један корисник горенаведеног меморијског буџета. Горња граница чистача је 6 (`MAX_ACTIVE_RUNNERS=6` у cron-у): он броји
  сваки `Runner.Listener` на машини, а OmniHeuris + OmniMind додају још два на наша четири.
- **Никада немојте ручно чистити `/tmp` или `_work` док је било који покретач заузет.**
  Провера па брисање са паузом између та два корака довели су до тога да активни `Build` посао изгуби свој
  `_work` 2026-08-27. Чистач обавља проверу и уклањање у једном кораку;
  препустите то њему.
- Заустављање покретача усред посла отказује посао (примећено уживо): користите `systemctl stop` само
  када његов слушалац нема `Runner.Worker` процес-дете — и урадите то једном командом.
- Токови рада не смеју да остављају артефакте у `/tmp` (он је у RAM-у). Преузимајте их у
  `$RUNNER_TEMP` (на диску, засебно за сваки покретач) — `next-build` артефакту од 1.3 GB требало је 27–32
  минута да се смести на tmpfs и 2 минута да се отпреми са диска.
- `.15` VPS служи искључиво за хомологацију — на њему се никада не покрећу CI покретачи.
