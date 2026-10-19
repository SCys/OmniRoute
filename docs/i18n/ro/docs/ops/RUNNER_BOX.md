# Self-Hosted Runner Box Operations (.113 pool) (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Pool-ul self-hosted rulează pe sistemul **.113** (`tomni-proxmox-113`). Începând cu 2026-10-18, fiecare
runner OmniRoute are **un singur rol**, o singură etichetă și un buget de memorie/CPU dimensionat în funcție de valorile
măsurate pentru volumul său de lucru. Slotul Turbopack primește resursele necesare buildului; celelalte sloturi sunt dimensionate conform
vârfurilor măsurate. Sistemul face overcommit numai atunci când un build Turbopack coincide cu un build webpack
Release-Green și cu o sarcină de lint; spațiul swap al gazdei (16 GB) absoarbe acest lucru și, deoarece buildurile pentru pull request-uri rulează
pe infrastructură găzduită, slotul Turbopack este inactiv în cea mai mare parte a timpului:

| runner               | etichetă         | rol                                                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`     | Builduri Turbopack: `ci.yml` `Build` (doar push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, buildul nocturn a11y | 56 GB / 60 GB (swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), build webpack                                                                                        | 20 GB / 24 GB (swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`     | rulări nocturne (Schemathesis, promptfoo, garak, k6, pornire a11y) și `quality.yml` `lint-guard`                                                     | 12 GB / 16 GB (swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`     | același pool ca mai sus                                                                                                                              | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (repo-urile lor) | doar Dependabot (vârf de 155 MB fiecare, 2026-10-18)                                                                                                 | 4 GB / 6 GB                | 200 % fiecare |

Măsurători din 2026-10-18:

| resursă   | valoare                                | semnificație pentru planificare                                                                                                                                                                                                                                                                                                                                                           |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 de nuclee**               | un build de producție Turbopack a atins un vârf de 49 GB fără limitare (`tests/unit/ci-build-bundler-webpack.test.ts`); pe Next 16.3.8, numai faza de compilare ocupă ~40 GB (36 GB RSS în `next-build` plus 17 workeri loader la 3 GB, măsurat la 2026-10-18); un build webpack ocupă ~14–16 GB. Un build Turbopack și un build webpack încap împreună; două builduri Turbopack nu încap |
| swap      | 16 GB                                  | `omniroute-113-5` rulează cu swap dezactivat (`MemorySwapMax=0`), astfel încât un build scăpat de sub control este oprit la limita sa, în loc să împingă sistemul în swap                                                                                                                                                                                                                 |
| `/tmp`    | **12 GB tmpfs = RAM**                  | orice este stocat acolo ocupă memorie; fișierele rămase sunt eliminate după 3 h                                                                                                                                                                                                                                                                                                           |
| CPU       | încărcare 60 observată pe 32 de nuclee | înaintea cotelor, un build Turbopack (~1166 % CPU), împreună cu o suită de coverage pe același sistem, priva de resurse semnalele heartbeat ale celorlalți listeneri (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                |
| runneri   | **6 listeneri**                        | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sunt dezactivați (`systemctl enable --now` reactivează unul)                                                                                                                                                                                                                                                              |

Limitele se află în fișierul `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` al fiecărei unități
(valorile anterioare sunt păstrate ca `override.conf.bak-20261018`) și au fost aplicate din mers cu
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — fără repornire, astfel încât nicio
sarcină aflată în execuție nu a fost afectată. Etichetele sunt modificate prin API-ul runnerilor
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), tot din mers.

## Instalați scriptul de curățare (o singură dată, pe server)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): la fiecare 30 min, jurnal în /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` este necesar: scriptul de curățare confirmă că o cale este inactivă printr-un instantaneu al fișierelor
deschise înainte de a o elimina, iar fără acest instrument nu elimină nimic și indică acest lucru
(exit 1). Testați mai întâi orice modificare cu `--dry-run` — acesta afișează exact ce ar face
și nu modifică nimic.

Ce face la fiecare rulare: curăță propriile fișiere rămase (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) după **3 h pe tmpfs** și 24 h pe discul
`_work/_temp`; oprește un `next-build` mai vechi de 75 min (niciun job nu rulează atât de mult — la
2026-08-27, unul a rulat 70 min după ce GitHub declarase jobul pierdut); elimină checkout-urile mai vechi de 48 h
ale runnerelor a căror unitate este **oprită**; emite alerte când discul este utilizat în proporție de ≥ 85 %, PSI-ul memoriei
`full/avg60` este ≥ 10 % și există mai multe procese listener decât `MAX_ACTIVE_RUNNERS` (cu o
defalcare omniroute/altele). Exit 1 = necesită atenție; citiți jurnalul.

Regula de 75 de minute nu detectează o compilare al cărei job a fost deja abandonat de GitHub. Atunci când
`Runner.Listener` nu își poate reînnoi jobul, `_diag/Runner_*.log` afișează
`POST request to …/renewjob timed out after 100 seconds`, API-ul raportează jobul drept `completed`
(eșec) la aproximativ zece minute după ultima reînnoire reușită, iar `next-build` continuă să ruleze
fără niciun job asociat (2026-10-18: compilarea pentru #17066 a eșuat la 19:43, iar procesul său de compilare încă
ocupa 40 GB cinci minute mai târziu). Confirmați referința în cel mai nou `_diag/Worker_*.log`, apoi
trimiteți SIGTERM numai arborelui de procese al compilării, după PID — `next-build`, `npm run build`, `build-next-isolated.mjs` și
procesele worker din `_work`. Nu modificați niciodată `Runner.Listener`, `RunnerService.js` sau `Runner.Worker`:
workerul raportează jobul drept anulat, iar listenerul revine online de la sine.

## Unități runner: KillMode

Valoarea implicită `KillMode=process` a runnerului lasă `Runner.Worker → npm → next-build`
în viață atunci când o unitate este oprită sau repornită — un build orfan continuă să consume RAM și
CPU fără niciun job atașat. Fiecare unitate OmniRoute include un drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
cu `KillMode=mixed`: SIGTERM mai întâi către listener, apoi SIGKILL către întregul cgroup la
`TimeoutStop`. Acesta intră în vigoare la următoarea repornire a unității — reporniți **câte un runner,
numai când este inactiv**, cu verificarea stării de inactivitate și repornirea în aceeași comandă.

## Reguli de operare

- **O singură compilare Turbopack simultan — impusă prin etichetă.** Fiecare job care rulează o
  compilare Turbopack completă `next build` vizează `[self-hosted, omni-build]`, iar numai
  **`omniroute-113-5`** are acea etichetă: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, compilarea nocturnă a11y (#16853) și
  `docker-publish.yml` **amd64** (webpack în BuildKit — Turbopack a intrat în panică acolo, rularea
  33253576569). Etapa Docker arm64 rămâne pe `ubuntu-24.04-arm`. Etapa amd64 din
  `docker-publish` folosește același grup de concurență `heavy-build-main` ca `Build` din
  `ci.yml` (`cancel-in-progress: false`). Docker Engine trebuie să fie pe `omniroute-113-5`. Un al
  doilea slot Turbopack nu încape în 78 GB (2 × 33–37 GB plus restul sistemului); un al doilea
  slot este sigur numai pentru compilări webpack.
- **Compilările pentru pull request-uri rulează găzduit (2026-10-18).** `Build` din `ci.yml`
  ajunge la `omni-build` numai pentru `push` și `workflow_dispatch`; fiecare compilare
  `pull_request` (din origine proprie sau fork) și `merge_group` rulează pe `ubuntu-latest` cu
  webpack. Când fiecare PR din origine proprie era direcționat către slot, o compilare Turbopack
  îl ocupa timp de 29–58 min, 18 compilări au rămas în coadă până la 18 h, iar compilarea la
  `push` a propriei ramuri de release a obținut slotul o singură dată din 40 de joburi. În mediul
  găzduit, aceeași compilare de PR durează 8–12 min alături de celelalte joburi ale PR-ului.
  Turbopack, bundlerul livrat de `npm-publish`, continuă să fie testat pe ramura de release prin
  compilarea nocturnă a11y a ramurii implicite (04:41 UTC), prin fiecare compilare la push sau
  dispatch care ajunge la slot și prin însuși `npm-publish`.
  `tests/unit/build/heavy-build-queue.test.ts` fixează poarta cu patru clauze.
- **Nu dimensionați niciodată slotul Turbopack sub necesarul său măsurat.** Pe 2026-10-18 la
  18:06, slotul a fost redus de la 56G/60G la 40G/44G pentru a face loc pentru `omni-release`.
  Faza de compilare a rămas la `MemoryHigh` pe întreaga durată a rulării (PSI de memorie `full`
  30–43 %), iar `Runner.Listener`, care folosește același cgroup, nu și-a putut reînnoi jobul.
  Valorile proprietarului, 56G/60G, din 2026-10-17 au fost restabilite în aceeași zi. Sub acea
  valoare, compilarea nu eșuează; sistemul intră în thrashing, iar jobul este pierdut.
- **Release-Green are propriul slot (2026-10-18).** Până atunci, ambele validări Release-Green
  rulau pe `omni-build`: la fiecare push (~10/oră, 97 din 100 de rulări push anulate în timpul
  lucrului într-o singură zi) și trei verificări complete de ~2 h pe zi (verificarea de la 05:29
  a așteptat 6 h pentru slot) — unicul slot de compilare era suprasolicitat de câteva ori peste
  capacitate, iar compilările PR din origine proprie așteptau ore întregi. `release-green` și
  `main-green` vizează acum `omni-release` (numai `omniroute-113-6`) cu
  `OMNIROUTE_USE_TURBOPACK=0`, iar o rulare începută nu mai este anulată de un push mai nou
  (slotul în așteptare continuă să consolideze avalanșa).
  `tests/unit/build/runner-capacity-routing.test.ts` fixează rutarea, comutarea la webpack și
  faptul că nimic de pe `omni-release` nu compilează cu Turbopack.
- **Pool pentru sarcini ușoare: `omni-light`.** `omniroute-113` și `omniroute-113-2` rulează
  procesele nocturne care necesită un `next build` numai pentru backend (~5–6 GB; webpack) și
  `lint-guard` din `quality.yml`. `omniroute-113` a avut `MemoryHigh=4G` până la 2026-10-18 —
  compilarea promptfoo și-a recuperat cu greu memoria timp de 54 de minute acolo; 8 GB elimină
  limitarea.
- **Mai puțini listeneri, în mod intenționat.** Patru unități OmniRoute au fost dezactivate pe
  2026-08-29 — fiecare listener suplimentar reprezintă încă un consumator al bugetului de memorie
  de mai sus. Limita superioară a janitorului este 6 (`MAX_ACTIVE_RUNNERS=6` în cron): acesta
  numără fiecare `Runner.Listener` de pe sistem, iar OmniHeuris + OmniMind adaugă doi la cei patru
  ai noștri.
- **Nu curățați niciodată manual `/tmp` sau `_work` cât timp vreun runner este ocupat.** O
  verificare urmată de ștergere, cu o pauză între cele două, a făcut ca un job Build activ să-și
  piardă directorul `_work` pe 2026-08-27. Janitorul efectuează verificarea și eliminarea într-un
  singur pas; lăsați-l să o facă.
- Oprirea unui runner în timpul unui job anulează jobul (observat în producție): folosiți
  `systemctl stop` numai când listenerul său nu are niciun proces copil `Runner.Worker` — și
  faceți acest lucru într-o singură comandă.
- Fluxurile de lucru nu trebuie să stocheze artefacte în `/tmp` (acesta se află în RAM).
  Descărcați în `$RUNNER_TEMP` (pe disc, separat pentru fiecare runner) — artefactului
  `next-build` de 1.3 GB i-au trebuit 27–32 de minute pentru a ajunge pe tmpfs și 2 minute pentru
  a fi încărcat de pe disc.
- VPS-ul `.15` este destinat exclusiv omologării — nu rulează niciodată runneri CI.
