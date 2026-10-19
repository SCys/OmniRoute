# Self-Hosted Runner Box Operations (.113 pool) (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Isemajutatud kogum töötab **.113** masinas (`tomni-proxmox-113`). Alates 2026-10-18 on igal
OmniRoute'i käitajal **üks roll**, üks silt ning mälu- ja protsessorieelarve, mis vastab selle töökoormuse
mõõdetud vajadustele. Turbopacki pesa saab järguks vajalikud ressursid; ülejäänud pesad on seadistatud
nende mõõdetud tippkoormuse järgi. Masinas tekib ülebroneering ainult siis, kui Turbopacki järk langeb kokku
Release-Greeni webpacki järgu ja lintimistööga; masina saaleala (16 GB) neelab selle koormuse ning kuna
tõmbetaotluste järgud töötavad majutatud käitajatel, on Turbopacki pesa enamiku ajast jõude:

| käitaja              | silt            | roll                                                                                                                                            | `MemoryHigh` / `MemoryMax`    | `CPUQuota`     |
| -------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`    | Turbopacki järgud: `ci.yml` `Build` (ainult push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, öine a11y järk | 56 GB / 60 GB (saaleala 0)    | 1600 %         |
| `omniroute-113-6`    | `omni-release`  | Release-Green (`release-green` + `main-green`), webpacki järk                                                                                   | 20 GB / 24 GB (saaleala 4 GB) | 800 %          |
| `omniroute-113-2`    | `omni-light`    | öised tööd (Schemathesis, promptfoo, garak, k6, a11y käivitus) ja `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB (saaleala 4 GB) | 600 %          |
| `omniroute-113`      | `omni-light`    | sama kogum mis eespool                                                                                                                          | 8 GB / 12 GB                  | 400 %          |
| OmniHeuris, OmniMind | (nende hoidlad) | ainult Dependabot (kummagi tipp 155 MB, 2026-10-18)                                                                                             | 4 GB / 6 GB                   | 200 % kummalgi |

Mõõdetud 2026-10-18:

| ressurss  | väärtus                         | tähendus ajastamise jaoks                                                                                                                                                                                                                                                                                                                                                                                |
| --------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 tuuma**            | Turbopacki tootmisjärk saavutas piiranguta 49 GB tipu (`tests/unit/ci-build-bundler-webpack.test.ts`); versioonis Next 16.3.8 hoiab juba kompileerimisetapp enda all ~40 GB (36 GB RSS protsessis `next-build` ja lisaks 17 laaduri tööprotsessi, igaüks 3 GB; mõõdetud 2026-10-18); webpacki järk kasutab ~14–16 GB. Üks Turbopacki ja üks webpacki järk mahuvad korraga; kaks Turbopacki järku ei mahu |
| saaleala  | 16 GB                           | `omniroute-113-5` töötab ilma saalealata (`MemorySwapMax=0`), et kontrolli alt väljunud järk peatatakse selle piirangu juures, mitte ei sunnita kogu masinat saalimist kasutama                                                                                                                                                                                                                          |
| `/tmp`    | **12 GB tmpfs = RAM**           | kõik sinna paigutatu kasutab mälu; jäägid koristatakse 3 h pärast                                                                                                                                                                                                                                                                                                                                        |
| CPU       | 32 tuumal täheldati koormust 60 | enne kvootide kehtestamist jättis üks Turbopacki järk (~1166 % CPU) koos samas masinas töötanud katvustestide komplektiga teiste kuulajate südamelöögid ressurssideta (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                              |
| käitajad  | **6 kuulajat**                  | 4 OmniRoute'i + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` on keelatud (`systemctl enable --now` toob ühe tagasi)                                                                                                                                                                                                                                                                                 |

Piirangud asuvad iga üksuse failis `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(varasemad väärtused on säilitatud nimega `override.conf.bak-20261018`) ja need rakendati töötavas süsteemis käsuga
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — taaskäivitamist ei tehtud, seega ei
mõjutanud see ühtegi töötavat tööd. Silte muudetakse käitajate API kaudu
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), samuti töötavas süsteemis.

## Paigalda puhastusskript (üks kord serveris)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): iga 30 minuti järel, logi faili /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` on nõutav: enne tee eemaldamist kontrollib puhastusskript ühe avatud
failide hetktõmmise abil, et tee pole kasutuses; ilma selle tööriistata ei eemalda see midagi ja annab sellest teada
(väljumiskood 1). Proovi kõiki muudatusi esmalt võtmega `--dry-run` — see näitab täpselt, mida skript teeks,
ega muuda midagi.

Mida see igal käivituskorral teeb: eemaldab meie enda jäägid (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) pärast **3 tundi tmpfs-is** ja 24 tundi kettal olevas
`_work/_temp`-is; lõpetab üle 75 minuti vana `next-build`-i (ükski töö ei kesta nii kaua —
2026-08-27 töötas üks neist 70 minutit pärast seda, kui GitHub oli selle töö kadunuks kuulutanud);
eemaldab nende runner'ite 48 tunni vanused väljavõtted, mille üksus on **peatatud**; annab hoiatuse,
kui kettakasutus on ≥ 85%, mälu PSI `full/avg60` on ≥ 10% või kuulajaid on rohkem kui
`MAX_ACTIVE_RUNNERS` (koos jaotusega omniroute/muud). Väljumiskood 1 = vajab tähelepanu;
loe logi.

75 minuti reegel ei tuvasta build'i, mille suhtes GitHub on juba alla andnud. Kui
`Runner.Listener` ei saa oma tööd uuendada, kuvatakse `_diag/Runner_*.log`-is
`POST request to …/renewjob timed out after 100 seconds`, API märgib töö `completed`
(ebaõnnestunud) olekusse umbes kümme minutit pärast viimast edukat uuendamist ning `next-build`
jätkab töötamist ilma seotud tööta (2026-10-18: #17066 build märgiti kell 19:43 ebaõnnestunuks,
kuid viis minutit hiljem hoidis selle build endiselt enda all 40 GB). Kinnita viide uusimas
`_diag/Worker_*.log`-is, seejärel saada SIGTERM ainult build'i protsessipuule PID-i järgi —
`next-build`, `npm run build`, `build-next-isolated.mjs` ja `_work`-i tööprotsessid. Ära kunagi
puuduta protsesse `Runner.Listener`, `RunnerService.js` ega `Runner.Worker`: tööprotsess märgib
töö tühistatuks ja kuulaja läheb ise uuesti võrku.

## Käitajaüksused: KillMode

Käitaja vaikimisi `KillMode=process` jätab `Runner.Worker → npm → next-build`
protsessid üksuse peatamisel või taaskäivitamisel tööle — orvuks jäänud koostamine tarbib jätkuvalt RAM-i ja
CPU-d, kuigi sellega pole seotud ühtegi tööd. Igal OmniRoute'i üksusel on lisakonfiguratsioon
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
väärtusega `KillMode=mixed`: esmalt saadetakse kuulajale SIGTERM ja
`TimeoutStop` saabumisel kogu cgroup'ile SIGKILL. See jõustub üksuse järgmisel taaskäivitamisel — taaskäivitage
**üks käitaja korraga ja ainult siis, kui see on jõude**, kusjuures jõudeoleku kontroll ja taaskäivitamine peavad olema samas käsus.

## Tööreeglid

- **Korraga üks Turbopacki järk — seda jõustatakse sildiga.** Iga töö, mis käitab täielikku Turbopacki
  `next build` käsku, sihib `[self-hosted, omni-build]`, ja ainult **`omniroute-113-5`** kannab seda
  silti: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  igaöine a11y järk (#16853) ja `docker-publish.yml` **amd64** (webpack BuildKiti sees —
  Turbopack jooksis seal paanikaga kokku, käitus 33253576569). Docker arm64 haru jääb keskkonda `ubuntu-24.04-arm`.
  `docker-publish` amd64 jagab `heavy-build-main` samaaegsusrühma tööga `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine peab asuma masinas `omniroute-113-5`. Teine Turbopacki
  pesa ei mahu 78 GB sisse (2 × 33–37 GB pluss ülejäänud masina vajadused); teine pesa on ohutu ainult
  webpacki järkude jaoks.
- **Tõmbetaotluste järgud töötavad majutatud keskkonnas (2026-10-18).** `ci.yml` `Build` jõuab keskkonda `omni-build` ainult
  sündmuste `push` ja `workflow_dispatch` korral; iga `pull_request` (oma lähtekohast või fork'ist) ja `merge_group` Build
  töötab keskkonnas `ubuntu-latest` koos webpackiga. Kui iga oma lähtekohast pärinev PR suunati sellesse pessa, hoidis Turbopacki
  Build seda enda käes 29–58 minutit, 18 Buildi ootasid järjekorras kuni 18 tundi ja väljalaskeharu enda push Build
  sai pesa ühel korral 40 tööst. Majutatud keskkonnas võtab sama PR-i Build teiste PR-i
  tööde kõrval 8–12 minutit. Turbopacki, mida paketihaldurisse tarnitav `npm-publish` kasutab, testitakse väljalaskeharul endiselt
  vaikeharu igaöise a11y järguga (04:41 UTC), iga pessa jõudva push- või dispatch-Buildiga
  ning `npm-publish` enda kaudu. `tests/unit/build/heavy-build-queue.test.ts`
  fikseerib nelja tingimusega lüüsi.
- **Ärge kunagi määrake Turbopacki pesa mõõdetud vajadusest väiksemaks.** 2026-10-18 kell 18:06
  vähendati pesa piirangud 56G/60G pealt 40G/44G peale, et teha ruumi keskkonnale `omni-release`. Kompileerimisfaas püsis kogu
  käituse vältel piiril `MemoryHigh` (mälu PSI `full` 30–43%) ning sama cgroup'i jagav
  `Runner.Listener` ei suutnud oma tööd pikendada. Samal päeval taastati omaniku 2026-10-17 väärtused 56G/60G.
  Sellest väärtusest väiksema piirangu korral järk ei nurju, vaid hakkab ressursse kinni hoidma ja töö läheb kaotsi.
- **Release-Greenil on oma pesa (2026-10-18).** Seni töötasid mõlemad Release-Greeni valideerimised
  keskkonnas `omni-build`: iga push'i korral (~10 tunnis, ühe päeva jooksul tühistati töö käigus 97 push-käitust 100-st)
  ja kolm korda päevas toimuvate ~2-tunniste täielike kontrollidena (kell 05:29 alanud kontroll ootas pesa 6 tundi) — ainus järgu
  pesa oli mitmekordselt ülekoormatud ning oma lähtekohast pärinevate PR-ide Buildid ootasid tunde.
  `release-green` ja `main-green` sihivad nüüd keskkonda `omni-release` (ainult `omniroute-113-6`) koos
  määranguga `OMNIROUTE_USE_TURBOPACK=0` ning juba alustatud käitust ei tühistata enam uuema push'i tõttu (
  ootel pesa koondab endiselt töödetulva). `tests/unit/build/runner-capacity-routing.test.ts`
  fikseerib marsruutimise, webpackile lülitumise ja selle, et miski keskkonnas `omni-release` ei järka Turbopackiga.
- **Kerge koormuse park: `omni-light`.** `omniroute-113` ja `omniroute-113-2` käitavad igaöiseid töid, mis vajavad
  ainult taustsüsteemi `next build` järku (~5–6 GB; webpack), ning töö `quality.yml` `lint-guard`. Masinal `omniroute-113`
  oli kuni 2026-10-18 väärtus `MemoryHigh=4G` — promptfoo järk kulutas seal mälu tagasinõudmisele 54 minutit;
  8 GB kõrvaldab piiramise.
- **Teadlikult vähem kuulareid.** Neli OmniRoute'i üksust keelati 2026-08-29 — iga täiendav
  kuular on eespool kirjeldatud mälueelarve järjekordne kasutaja. Koristaja ülempiir on 6 (`MAX_ACTIVE_RUNNERS=6` croni töös): see loendab
  masina iga `Runner.Listener` protsessi ning OmniHeuris + OmniMind lisavad meie neljale veel kaks.
- **Ärge kunagi puhastage `/tmp` ega `_work` käsitsi, kui mõni käitaja on hõivatud.** Kontrollimine ja
  hilisem kustutamine, mille vahele jääb viivitus, põhjustas 2026-08-27 töötava Buildi töö
  `_work` kausta kaotsimineku. Koristaja teeb kontrolli ja eemaldamise ühe sammuna;
  laske sellel tegutseda.
- Käitaja peatamine töö ajal tühistab töö (reaalselt täheldatud): käivitage `systemctl stop` ainult
  siis, kui selle kuularil pole alamprotsessi `Runner.Worker` — ja tehke seda ühe käsuga.
- Töövood ei tohi jätta artefakte kausta `/tmp` (see asub RAM-is). Laadige need alla asukohta
  `$RUNNER_TEMP` (kettal, iga käitaja jaoks eraldi) — 1,3 GB suuruse `next-build` artefakti tmpfs-i jõudmine võttis 27–32
  minutit, kettalt üleslaadimine aga 2 minutit.
- VPS `.15` on mõeldud ainult homologeerimiseks — selles ei käitata kunagi CI käitajaid.
