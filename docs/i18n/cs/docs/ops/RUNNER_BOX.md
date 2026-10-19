# Self-Hosted Runner Box Operations (.113 pool) (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Fond samoobslužných runnerů běží na stroji **.113** (`tomni-proxmox-113`). Od 2026-10-18 má každý
runner OmniRoute **jednu roli**, jeden štítek a paměťový/CPU rozpočet dimenzovaný podle naměřené
zátěže. Slot Turbopacku dostává prostředky potřebné pro sestavení; ostatní sloty jsou dimenzovány podle
naměřených maxim. K přetížení prostředků stroje dochází pouze tehdy, když se sestavení Turbopacku překrývá se sestavením webpacku Release-Green
a úlohou lintování; toto přetížení absorbuje odkládací prostor hostitele (16 GB), a protože sestavení pro pull requesty běží
na hostovaných runnerech, je slot Turbopacku většinu času nečinný:

| runner               | štítek              | role                                                                                                                                                    | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`        | Sestavení Turbopacku: `ci.yml` `Build` (pouze push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, noční sestavení a11y | 56 GB / 60 GB (swap 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), sestavení webpacku                                                                                      | 20 GB / 24 GB (swap 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`        | noční úlohy (Schemathesis, promptfoo, garak, k6, spuštění a11y) a `quality.yml` `lint-guard`                                                            | 12 GB / 16 GB (swap 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`        | stejný fond jako výše                                                                                                                                   | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (jejich repozitáře) | pouze Dependabot (maximum 155 MB každý, 2026-10-18)                                                                                                     | 4 GB / 6 GB                | 200 % každý |

Naměřeno 2026-10-18:

| prostředek | hodnota                           | význam pro plánování                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 jader**              | produkční sestavení Turbopacku bez omezení dosáhlo maxima 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); v Next 16.3.8 samotná fáze kompilace využívá přibližně 40 GB (36 GB RSS v `next-build` plus 17 procesů loaderu po 3 GB, naměřeno 2026-10-18); sestavení webpacku přibližně 14–16 GB. Jedno sestavení Turbopacku a jedno sestavení webpacku se vejdou současně; dvě sestavení Turbopacku nikoli |
| swap       | 16 GB                             | `omniroute-113-5` běží s vypnutým swapem (`MemorySwapMax=0`), takže je nekontrolovaně rostoucí sestavení ukončeno při dosažení limitu, místo aby přimělo stroj swapovat                                                                                                                                                                                                                                         |
| `/tmp`     | **12 GB tmpfs = RAM**             | cokoli zde uložené zabírá paměť; zbytky se odstraňují po 3 h                                                                                                                                                                                                                                                                                                                                                    |
| CPU        | pozorována zátěž 60 na 32 jádrech | před zavedením kvót jedno sestavení Turbopacku (~1166 % CPU) spolu se sadou testů pokrytí na stejném stroji připravilo heartbeaty ostatních listenerů o prostředky (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                        |
| runnery    | **6 listenerů**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` jsou zakázané (`systemctl enable --now` některý z nich znovu aktivuje)                                                                                                                                                                                                                                                                          |

Limity se nacházejí v souboru `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
každé jednotky (předchozí hodnoty jsou uchovány jako `override.conf.bak-20261018`) a byly aplikovány za běhu pomocí
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez restartu, takže nebyla
ovlivněna žádná spuštěná úloha. Štítky se mění prostřednictvím API runnerů
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), rovněž za běhu.

## Instalace úklidového skriptu (jednorázově, na serveru)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): každých 30 minut, protokolovat do /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je povinný: úklidový skript před odstraněním ověří pomocí jednoho snímku
otevřených souborů, že se daná cesta nepoužívá; bez tohoto nástroje nic neodstraní,
oznámí to a skončí s kódem 1. Každou změnu nejprve vyzkoušejte s `--dry-run` —
skript přesně vypíše, co by provedl, ale nic nezmění.

Co skript při každém spuštění dělá: odstraňuje naše vlastní pozůstatky (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) po **3 h na tmpfs** a po 24 h
v `_work/_temp` na disku; ukončuje proces `next-build` starší než 75 min (žádná
úloha neběží tak dlouho — 2026-08-27 jedna běžela 70 min poté, co GitHub označil
její úlohu za ztracenou); odstraňuje 48 h staré pracovní kopie runnerů, jejichž
jednotka je **zastavená**; upozorňuje na využití disku ≥ 85 %, paměťový ukazatel
PSI `full/avg60` ≥ 10 % a počet listenerů vyšší než `MAX_ACTIVE_RUNNERS`
(s rozdělením na omniroute/ostatní). Kód ukončení 1 = je nutný zásah; přečtěte si
protokol.

Pravidlo 75 minut nezachytí sestavení, jehož úlohu už GitHub vzdal. Když
`Runner.Listener` nemůže obnovit svou úlohu, v `_diag/Runner_*.log` se zobrazí
`POST request to …/renewjob timed out after 100 seconds`, API přibližně deset minut
po posledním úspěšném obnovení oznámí úlohu jako `completed` (neúspěšnou)
a `next-build` pokračuje v běhu bez připojené úlohy (2026-10-18: sestavení #17066
bylo v 19:43 označeno jako neúspěšné a jeho proces sestavení ještě o pět minut
později zabíral 40 GB). Ověřte ref v nejnovějším `_diag/Worker_*.log` a poté pomocí
SIGTERM ukončete podle PID pouze strom sestavení — `next-build`, `npm run build`,
`build-next-isolated.mjs` a workery v `_work`. Nikdy nezasahujte do
`Runner.Listener`, `RunnerService.js` ani `Runner.Worker`: worker nahlásí úlohu
jako zrušenou a listener se sám vrátí do stavu online.

## Jednotky runnerů: KillMode

Výchozí nastavení runneru `KillMode=process` ponechá při zastavení nebo restartování jednotky
procesy `Runner.Worker → npm → next-build` spuštěné — osiřelé sestavení dál spotřebovává RAM a
CPU, aniž by k němu byla přiřazena úloha. Každá jednotka OmniRoute obsahuje doplňkovou konfiguraci
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s `KillMode=mixed`: nejprve odešle SIGTERM listeneru a při
`TimeoutStop` odešle SIGKILL celé cgroup. Projeví se to při příštím restartu jednotky — restartujte
**vždy jen jeden runner, pouze když je nečinný**, přičemž kontrola nečinnosti a restart musí být
součástí stejného příkazu.

## Provozní pravidla

- **Vždy pouze jedno sestavení Turbopack — vynuceno štítkem.** Každá úloha, která spouští úplné sestavení Turbopack
  `next build`, cílí na `[self-hosted, omni-build]` a pouze **`omniroute-113-5`** nese tento
  štítek: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  noční sestavení a11y (#16853) a **amd64** v `docker-publish.yml` (webpack uvnitř BuildKit —
  Turbopack tam zpanikařil, běh 33253576569). Větev Dockeru pro arm64 zůstává na `ubuntu-24.04-arm`.
  amd64 v `docker-publish` sdílí skupinu souběžnosti `heavy-build-main` s úlohou `Build`
  v `ci.yml` (`cancel-in-progress: false`). Docker Engine musí být na `omniroute-113-5`. Druhý slot
  pro Turbopack se do 78 GB nevejde (2 × 33–37 GB plus zbytek systému); druhý slot je bezpečný pouze
  pro sestavení pomocí webpack.
- **Sestavení pull requestů běží na hostovaných runnerech (2026-10-18).** Úloha `Build` v `ci.yml` se na
  `omni-build` dostane pouze pro `push` a `workflow_dispatch`; každé sestavení `pull_request`
  (z vlastního původu i forku) a `merge_group` běží na `ubuntu-latest` pomocí webpack. Když byl každý
  PR z vlastního původu směrován do tohoto slotu, sestavení Turbopack jej drželo 29–58 min, 18 sestavení
  čekalo ve frontě až 18 h a vlastní push sestavení vydávací větve získalo slot pouze jednou ze 40 úloh.
  Na hostovaném runneru trvá stejné sestavení PR 8–12 min vedle ostatních úloh daného PR.
  Turbopack, bundler dodávaný balíčkem `npm-publish`, zůstává na vydávací větvi prověřován nočním
  sestavením a11y výchozí větve (04:41 UTC), každým sestavením po push nebo dispatch, které se do
  slotu dostane, a samotným `npm-publish`. Soubor `tests/unit/build/heavy-build-queue.test.ts`
  fixuje podmínku se čtyřmi klauzulemi.
- **Nikdy nenastavujte slot Turbopack menší, než vyžadují naměřené hodnoty.** Dne 2026-10-18 v 18:06 byl
  slot zmenšen z 56G/60G na 40G/44G, aby vzniklo místo pro `omni-release`. Fáze kompilace zůstala po
  celou dobu běhu na hranici `MemoryHigh` (paměťové PSI `full` 30–43 %) a `Runner.Listener`, který
  sdílí stejnou cgroup, nedokázal obnovit přidělení své úlohy. Hodnoty vlastníka 56G/60G z 2026-10-17
  byly obnoveny ještě téhož dne. Pod touto hodnotou sestavení neselže; začne zahlcovat systém
  přesouváním paměti a úloha se ztratí.
- **Release-Green má vlastní slot (2026-10-18).** Do té doby obě validace Release-Green běžely
  na `omni-build`: při každém push (~10/hodinu, 97 ze 100 běhů po push bylo během jednoho dne
  zrušeno uprostřed práce) a při třech úplných průchodech denně trvajících přibližně 2 h (průchod
  v 05:29 čekal na slot 6 h) — jediný slot pro sestavení byl několikanásobně přetížen a sestavení
  PR z vlastního původu čekala celé hodiny. `release-green` a `main-green` nyní cílí na
  `omni-release` (pouze `omniroute-113-6`) s `OMNIROUTE_USE_TURBOPACK=0` a zahájený běh již není
  zrušen novějším push (čekající slot stále slučuje nápor). Soubor
  `tests/unit/build/runner-capacity-routing.test.ts` fixuje směrování, přepnutí na webpack
  a zajišťuje, že nic na `omni-release` není sestavováno pomocí Turbopack.
- **Lehký pool: `omni-light`.** `omniroute-113` a `omniroute-113-2` spouštějí noční úlohy, které
  potřebují pouze backendové sestavení `next build` (~5–6 GB; webpack), a `lint-guard` z `quality.yml`.
  `omniroute-113` měl až do 2026-10-18 nastaveno `MemoryHigh=4G` — sestavení promptfoo se tam
  54 minut potýkalo s uvolňováním paměti; 8 GB toto omezování výkonu odstraňuje.
- **Záměrně méně listenerů.** Čtyři jednotky OmniRoute byly 2026-08-29 zakázány — každý další
  listener je dalším spotřebitelem výše uvedeného paměťového rozpočtu. Limit úklidové služby je 6 (`MAX_ACTIVE_RUNNERS=6` v cron): počítá
  každý `Runner.Listener` na serveru a OmniHeuris + OmniMind přidávají dva k našim čtyřem.
- **Nikdy ručně nečistěte `/tmp` ani `_work`, pokud je některý runner zaneprázdněn.** Postup
  kontroly a následného odstranění s prodlevou mezi oběma kroky způsobil, že běžící úloha Build
  přišla 2026-08-27 o svůj adresář `_work`. Úklidová služba provádí kontrolu a odstranění v jednom
  kroku; nechte to na ní.
- Zastavení runneru uprostřed úlohy tuto úlohu zruší (ověřeno za běhu): `systemctl stop` používejte pouze
  tehdy, když jeho listener nemá podřízený proces `Runner.Worker` — a proveďte to jedním příkazem.
- Workflow nesmí ukládat artefakty do `/tmp` (je v RAM). Stahujte je do
  `$RUNNER_TEMP` (na disku, samostatně pro každý runner) — stažení 1.3GB artefaktu `next-build`
  na tmpfs trvalo 27–32 minut, zatímco jeho nahrání z disku trvalo 2 minuty.
- VPS `.15` slouží pouze k homologaci — nikdy na něm neběží CI runnery.
