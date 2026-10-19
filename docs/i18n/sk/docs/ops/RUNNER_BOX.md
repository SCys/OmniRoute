# Self-Hosted Runner Box Operations (.113 pool) (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Fond runnerov s vlastným hosťovaním beží na serveri **.113** (`tomni-proxmox-113`). Od 2026-10-18 má každý
runner OmniRoute **jednu rolu**, jeden štítok a rozpočet pamäte/CPU dimenzovaný podľa nameraného
zaťaženia. Slot Turbopack má prostriedky potrebné na zostavenie; ostatné sloty sú dimenzované podľa
nameraných špičiek. Server prekračuje kapacitu iba vtedy, keď sa zostavenie Turbopack prekrýva so zostavením
webpack Release-Green a úlohou lintovania; swap hostiteľa (16 GB) túto situáciu pokryje, a keďže zostavenia
pull requestov bežia na hostovaných runneroch, slot Turbopack je väčšinu času nečinný:

| runner               | štítok           | rola                                                                                                                                                   | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`     | Zostavenia Turbopack: `ci.yml` `Build` (iba push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nočné zostavenie a11y | 56 GB / 60 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), zostavenie webpack                                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`     | nočné úlohy (Schemathesis, promptfoo, garak, k6, spustenie a11y) a `quality.yml` `lint-guard`                                                          | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`     | rovnaký fond ako vyššie                                                                                                                                | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (ich repozitáre) | iba Dependabot (špička 155 MB pre každý, 2026-10-18)                                                                                                   | 4 GB / 6 GB                | 200 % pre každý |

Namerané 2026-10-18:

| prostriedok | hodnota                               | význam pre plánovanie                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU   | **78 GB / 32 jadier**                 | produkčné zostavenie Turbopack bez obmedzení dosiahlo špičku 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); v Next 16.3.8 samotná fáza kompilácie využíva približne 40 GB (36 GB RSS v `next-build` plus 17 loader workerov po 3 GB, namerané 2026-10-18); zostavenie webpack približne 14–16 GB. Jedno zostavenie Turbopack a jedno zostavenie webpack sa zmestia súčasne; dve zostavenia Turbopack nie |
| swap        | 16 GB                                 | `omniroute-113-5` beží s vypnutým swapom (`MemorySwapMax=0`), takže nekontrolované zostavenie sa ukončí po dosiahnutí svojho limitu namiesto toho, aby server začal swapovať                                                                                                                                                                                                                                     |
| `/tmp`      | **12 GB tmpfs = RAM**                 | všetko uložené na tomto mieste spotrebúva pamäť; zvyšné súbory sa odstránia po 3 h                                                                                                                                                                                                                                                                                                                               |
| CPU         | pozorované zaťaženie 60 na 32 jadrách | pred zavedením kvót jedno zostavenie Turbopack (~1166 % CPU) spolu so sadou testov pokrytia na rovnakom serveri pripravili heartbeat procesy ostatných listenerov o prostriedky (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                            |
| runnery     | **6 listenerov**                      | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sú zakázané (`systemctl enable --now` jeden z nich znova spustí)                                                                                                                                                                                                                                                                                 |

Limity sa nachádzajú v súbore `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
každej jednotky (predchádzajúce hodnoty sú zachované ako `override.conf.bak-20261018`) a boli aplikované za behu pomocou
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez reštartu, takže žiadna
spustená úloha nebola ovplyvnená. Štítky sa takisto za behu menia prostredníctvom API runnerov
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Nainštalujte čistiaci skript (jednorazovo, na serveri)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): každých 30 minút, zapisovať do /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je povinný: čistiaci skript pred odstránením overí jedinou snímkou otvorených
súborov, že sa cesta nepoužíva; bez tohto nástroja nič neodstráni a oznámi to
(exit 1). Každú zmenu najskôr vyskúšajte s `--dry-run` — presne vypíše, čo by
urobil, a ničoho sa nedotkne.

Čo robí pri každom spustení: odstraňuje naše vlastné zvyšky (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) po **3 h na tmpfs** a po 24 h na disku
v `_work/_temp`; ukončí `next-build` starší než 75 minút (žiadna úloha netrvá tak
dlho — 2026-08-27 jedna bežala 70 minút po tom, čo GitHub vyhlásil jej úlohu za
stratenú); odstráni 48 hodín staré checkouty runnerov, ktorých služba je
**zastavená**; upozorní na využitie disku ≥ 85 %, pamäťový PSI
`full/avg60` ≥ 10 % a viac listenerov, než povoľuje `MAX_ACTIVE_RUNNERS` (s rozdelením
na omniroute/ostatné). Exit 1 = vyžaduje sa pozornosť; prečítajte si protokol.

Pravidlo 75 minút nezachytí zostavenie, ktorého úlohu už GitHub vzdal. Keď
`Runner.Listener` nedokáže obnoviť svoju úlohu, `_diag/Runner_*.log` obsahuje
`POST request to …/renewjob timed out after 100 seconds`, API hlási úlohu ako `completed`
(neúspešnú) približne desať minút po poslednom úspešnom obnovení a `next-build` naďalej beží
bez priradenej úlohy (2026-10-18: zostavenie #17066 bolo označené za neúspešné o 19:43 a jeho
proces zostavovania aj o päť minút neskôr stále zaberal 40 GB). Overte ref v najnovšom
`_diag/Worker_*.log` a potom pomocou PID pošlite SIGTERM iba stromu procesov zostavenia —
`next-build`, `npm run build`, `build-next-isolated.mjs` a procesom z `_work`.
Nikdy nezasahujte do `Runner.Listener`, `RunnerService.js` ani `Runner.Worker`: worker
nahlási úlohu ako zrušenú a listener sa sám vráti do online stavu.

## Jednotky runnera: KillMode

Predvolené nastavenie runnera `KillMode=process` ponechá procesy `Runner.Worker → npm → next-build`
spustené aj po zastavení alebo reštartovaní jednotky — osirotený build naďalej spotrebúva RAM a
CPU bez priradenej úlohy. Každá jednotka OmniRoute má doplnkovú konfiguráciu
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s nastavením `KillMode=mixed`: najprv SIGTERM pre listener a pri
`TimeoutStop` SIGKILL pre celú cgroup. Nastavenie sa prejaví pri nasledujúcom reštarte jednotky — reštartujte
**naraz iba jeden runner a len vtedy, keď je nečinný**, pričom kontrola nečinnosti aj reštart musia byť v rovnakom príkaze.

## Prevádzkové pravidlá

- **Naraz iba jedno zostavenie Turbopack — vynútené označením.** Každá úloha, ktorá spúšťa úplné zostavenie Turbopack
  `next build`, cieli na `[self-hosted, omni-build]`, pričom toto označenie má iba
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  nočné zostavenie a11y (#16853) a **amd64** v `docker-publish.yml` (webpack vnútri BuildKit —
  Turbopack tam havaroval, beh 33253576569). Vetva Docker pre arm64 zostáva na `ubuntu-24.04-arm`.
  amd64 v `docker-publish` zdieľa skupinu súbežnosti `heavy-build-main` s `Build` v `ci.yml`
  (`cancel-in-progress: false`). Docker Engine musí byť na `omniroute-113-5`. Druhý slot Turbopack
  sa nezmestí do 78 GB (2 × 33–37 GB plus zvyšok systému); druhý slot je bezpečný iba pre
  zostavenia webpack.
- **Zostavenia požiadaviek na zlúčenie bežia na hostovanej infraštruktúre (2026-10-18).** `Build` v `ci.yml` dosiahne `omni-build` iba pri
  `push` a `workflow_dispatch`; každý `Build` pre `pull_request` (z vlastného repozitára alebo forku) a `merge_group`
  beží na `ubuntu-latest` s webpack. Keď každá PR z vlastného repozitára smerovala do slotu, zostavenie Turbopack
  ho držalo 29–58 minút, 18 zostavení čakalo vo fronte až 18 hodín a zostavenie z vlastného pushu
  vydávacej vetvy získalo slot raz zo 40 úloh. Na hostovanej infraštruktúre trvá rovnaké zostavenie PR
  8–12 minút súbežne s ostatnými úlohami danej PR. Turbopack, bundler distribuovaný cez `npm-publish`,
  sa naďalej preveruje na vydávacej vetve nočným zostavením a11y predvolenej vetvy (04:41 UTC),
  každým zostavením po pushi alebo manuálnom spustení, ktoré dosiahne slot, a samotným `npm-publish`.
  `tests/unit/build/heavy-build-queue.test.ts` fixuje túto bránu so štyrmi podmienkami.
- **Nikdy nenastavujte slot Turbopack pod jeho nameranú potrebu.** Dňa 2026-10-18 o 18:06 bol slot
  znížený z 56G/60G na 40G/44G, aby vznikol priestor pre `omni-release`. Fáza kompilácie bola počas
  celého behu na úrovni `MemoryHigh` (pamäťové PSI `full` 30–43 %) a `Runner.Listener`, ktorý
  zdieľa cgroup, nedokázal obnoviť svoju úlohu. Vlastníkovo nastavenie 56G/60G z 2026-10-17 bolo obnovené
  v ten istý deň. Pod touto hodnotou zostavenie nezlyhá; začne sa neustále prehadzovanie pamäte a úloha sa stratí.
- **Release-Green má vlastný slot (2026-10-18).** Dovtedy obe validácie Release-Green bežali
  na `omni-build`: pri každom pushi (~10/hodinu, 97 zo 100 behov push bolo za jediný deň zrušených počas práce)
  a pri troch úplných prechodoch denne trvajúcich ~2 h (prechod o 05:29 čakal na slot 6 h) — jediný slot
  zostavenia bol niekoľkonásobne preťažený a zostavenia PR z vlastného repozitára čakali celé hodiny.
  `release-green` a `main-green` teraz cielia na `omni-release` (iba `omniroute-113-6`) s
  `OMNIROUTE_USE_TURBOPACK=0` a začatý beh už novší push nezruší (čakajúci slot naďalej zlučuje
  nápor behov). `tests/unit/build/runner-capacity-routing.test.ts`
  fixuje smerovanie, prepnutie na webpack a zaisťuje, že nič na `omni-release` sa nezostavuje pomocou Turbopack.
- **Odľahčený fond: `omni-light`.** `omniroute-113` a `omniroute-113-2` spúšťajú nočné úlohy, ktoré potrebujú
  iba backendové `next build` (~5–6 GB; webpack), a `lint-guard` v `quality.yml`. `omniroute-113`
  mal až do 2026-10-18 nastavené `MemoryHigh=4G` — zostavenie promptfoo sa tam 54 minút predieralo
  uvoľňovaním pamäte; 8 GB odstráni obmedzovanie.
- **Zámerne menej listenerov.** Štyri jednotky OmniRoute boli vypnuté 2026-08-29 — každý ďalší
  listener je ďalším používateľom vyššie uvedeného pamäťového rozpočtu. Horný limit upratovacieho procesu je 6 (`MAX_ACTIVE_RUNNERS=6` v cron): počíta
  každý `Runner.Listener` na serveri a OmniHeuris + OmniMind pridávajú k našim štyrom ďalšie dva.
- **Nikdy ručne nečistite `/tmp` ani `_work`, kým je niektorý runner zaneprázdnený.** Postup
  kontroly a následného odstránenia s medzerou medzi týmito krokmi spôsobil, že aktívna úloha `Build` prišla
  2026-08-27 o svoj adresár `_work`. Upratovací proces vykonáva kontrolu a odstránenie v jednom kroku;
  nechajte ho pracovať.
- Zastavenie runnera uprostred úlohy túto úlohu zruší (pozorované naživo): `systemctl stop` používajte iba
  vtedy, keď jeho listener nemá žiadny podradený proces `Runner.Worker` — a vykonajte to jedným príkazom.
- Pracovné postupy nesmú ukladať artefakty do `/tmp` (nachádza sa v RAM). Sťahujte ich do
  `$RUNNER_TEMP` (na disku, samostatne pre každý runner) — stiahnutie 1,3 GB artefaktu `next-build` na
  tmpfs trvalo 27–32 minút, zatiaľ čo jeho nahratie z disku trvalo 2 minúty.
- VPS `.15` slúži iba na homologizáciu — nikdy na ňom nebežia CI runnery.
