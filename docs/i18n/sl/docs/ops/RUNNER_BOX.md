# Self-Hosted Runner Box Operations (.113 pool) (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostojno gostovana gruča izvajalnikov deluje na strežniku **.113** (`tomni-proxmox-113`). Od 2026-10-18 ima vsak
izvajalnik OmniRoute **eno vlogo**, eno oznako ter proračun pomnilnika/CPE, prilagojen izmerjeni delovni
obremenitvi. Mesto za Turbopack dobi toliko virov, kot jih zahteva gradnja; druga mesta so prilagojena svojim
izmerjenim konicam. Strežnik vire prekomerno dodeli le, ko gradnja Turbopack sovpade z gradnjo webpack
Release-Green in opravilom lint; gostiteljski izmenjalni prostor (16 GB) to absorbira, in ker se gradnje za pull request
izvajajo na gostovanih izvajalnikih, je mesto za Turbopack večino časa nedejavno:

| izvajalnik           | oznaka               | vloga                                                                                                                                             | `MemoryHigh` / `MemoryMax`              | `CPUQuota`       |
| -------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------------- |
| `omniroute-113-5`    | `omni-build`         | gradnje Turbopack: `ci.yml` `Build` (samo push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nočna gradnja a11y | 56 GB / 60 GB (izmenjalni prostor 0)    | 1600 %           |
| `omniroute-113-6`    | `omni-release`       | Release-Green (`release-green` + `main-green`), gradnja webpack                                                                                   | 20 GB / 24 GB (izmenjalni prostor 4 GB) | 800 %            |
| `omniroute-113-2`    | `omni-light`         | nočna opravila (Schemathesis, promptfoo, garak, k6, zagon a11y) in `quality.yml` `lint-guard`                                                     | 12 GB / 16 GB (izmenjalni prostor 4 GB) | 600 %            |
| `omniroute-113`      | `omni-light`         | ista gruča kot zgoraj                                                                                                                             | 8 GB / 12 GB                            | 400 %            |
| OmniHeuris, OmniMind | (njuna repozitorija) | samo Dependabot (konica 155 MB za vsakega, 2026-10-18)                                                                                            | 4 GB / 6 GB                             | 200 % za vsakega |

Izmerjeno 2026-10-18:

| vir                | vrednost                             | pomen za razporejanje                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPE          | **78 GB / 32 jeder**                 | produkcijska gradnja Turbopack je brez omejitve dosegla konico 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); pri Next 16.3.8 že sama faza prevajanja zaseda ~40 GB (36 GB RSS v `next-build` in 17 delavcev nalagalnika s po 3 GB, izmerjeno 2026-10-18); gradnja webpack porabi ~14–16 GB. Ena gradnja Turbopack in ena gradnja webpack se lahko izvajata skupaj; dve gradnji Turbopack ne |
| izmenjalni prostor | 16 GB                                | `omniroute-113-5` deluje z izklopljenim izmenjalnim prostorom (`MemorySwapMax=0`), zato je pobegla gradnja prekinjena pri svoji omejitvi, namesto da bi strežnik začel uporabljati izmenjalni prostor                                                                                                                                                                                                |
| `/tmp`             | **12 GB tmpfs = RAM**                | vse, kar je shranjeno tam, zaseda pomnilnik; ostanki se odstranijo po 3 urah                                                                                                                                                                                                                                                                                                                         |
| CPE                | opažena obremenitev 60 pri 32 jedrih | pred uvedbo kvot sta ena gradnja Turbopack (~1166 % CPE) in zbirka testov pokritosti na istem strežniku onemogočili pravočasne signale živosti drugih poslušalnikov (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                            |
| izvajalniki        | **6 poslušalnikov**                  | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` so onemogočeni (`systemctl enable --now` enega znova omogoči)                                                                                                                                                                                                                                                                        |

Omejitve so določene v datoteki `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
vsake enote (prejšnje vrednosti so shranjene kot `override.conf.bak-20261018`) in so bile uveljavljene med delovanjem z
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — brez ponovnega zagona, zato ni bilo
prizadeto nobeno izvajajoče se opravilo. Oznake se prav tako med delovanjem spreminjajo prek API-ja izvajalnikov
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Namestitev čistilnika (enkratno, na strežniku)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): vsakih 30 min, beleženje v /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je obvezen: čistilnik z enim posnetkom odprtih datotek preveri, ali je pot
nedejavna, preden jo odstrani; brez tega orodja ne odstrani ničesar in to tudi sporoči
(izhodna koda 1). Vsako spremembo najprej preizkusite z `--dry-run` — izpiše natanko,
kaj bi naredil, ne spremeni pa ničesar.

Kaj naredi ob vsakem zagonu: počisti naše lastne ostanke (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) po **3 urah na tmpfs** in 24 urah na disku
v `_work/_temp`; konča proces `next-build`, starejši od 75 minut (nobeno opravilo ne
teče tako dolgo — 2026-08-27 je eno teklo 70 minut po tem, ko je GitHub njegovo opravilo
že razglasil za izgubljeno); odstrani delovne kopije, stare 48 ur, za izvajalnike, katerih
enota je **ustavljena**; opozori pri zasedenosti diska ≥ 85 %, pomnilniškem PSI
`full/avg60` ≥ 10 % in večjem številu poslušalnikov od `MAX_ACTIVE_RUNNERS` (z razčlenitvijo
na omniroute/druge). Izhodna koda 1 = potrebna je pozornost; preberite dnevnik.

Pravilo 75 minut ne zazna gradnje, nad katero je GitHub že obupal. Ko
`Runner.Listener` ne more obnoviti svojega opravila, je v `_diag/Runner_*.log` prikazano
`POST request to …/renewjob timed out after 100 seconds`, API pa približno deset minut
po zadnji uspešni obnovitvi poroča, da je opravilo `completed` (neuspešno), medtem ko
`next-build` še naprej teče brez pripetega opravila (2026-10-18: gradnja za #17066 je bila
ob 19:43 označena kot neuspešna, njen proces gradnje pa je pet minut pozneje še vedno
zasedal 40 GB). Preverite ref v najnovejšem `_diag/Worker_*.log`, nato po PID-u pošljite
SIGTERM samo drevesu gradnje — `next-build`, `npm run build`, `build-next-isolated.mjs` in
procesom v `_work`. Nikoli se ne dotikajte procesov `Runner.Listener`, `RunnerService.js`
ali `Runner.Worker`: delovni proces sporoči, da je opravilo preklicano, poslušalnik pa se
samodejno znova poveže.

## Enote izvajalnikov: KillMode

Privzeti `KillMode=process` izvajalnika pusti proces `Runner.Worker → npm → next-build`
živ, ko je enota ustavljena ali znova zagnana — osirotela gradnja še naprej porablja RAM in
CPE, čeprav ni več povezana z nobenim opravilom. Vsaka enota OmniRoute ima dodatno konfiguracijo
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
z `KillMode=mixed`: najprej SIGTERM poslušalniku, nato SIGKILL celotni kontrolni skupini ob
`TimeoutStop`. Začne veljati ob naslednjem ponovnem zagonu enote — znova zaženite **po en izvajalnik
naenkrat in samo, ko je nedejaven**, pri čemer morata biti preverjanje nedejavnosti in ponovni zagon v istem ukazu.

## Pravila delovanja

- **Sočasno le ena gradnja Turbopack — uveljavljeno z oznako.** Vsako opravilo, ki izvaja celotno gradnjo Turbopack
  `next build`, cilja na `[self-hosted, omni-build]`, to oznako pa ima samo
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  nočna gradnja a11y (#16853) in **amd64** v `docker-publish.yml` (webpack znotraj BuildKit —
  Turbopack se je tam sesul, izvajanje 33253576569). Veja Docker za arm64 ostaja na `ubuntu-24.04-arm`.
  `docker-publish` za amd64 si deli sočasnostno skupino `heavy-build-main` z opravilom `Build` v `ci.yml`
  (`cancel-in-progress: false`). Docker Engine mora biti na `omniroute-113-5`. Druga reža Turbopack
  ne gre v 78 GB (2 × 33–37 GB in preostanek sistema); druga reža je varna samo za
  gradnje webpack.
- **Gradnje zahtev za spojitev se izvajajo na gostovanih izvajalnikih (2026-10-18).** `Build` v `ci.yml` doseže `omni-build` samo za
  `push` in `workflow_dispatch`; vsak `Build` za `pull_request` (iz lastnega izvora ali razcepa) in `merge_group`
  se izvaja na `ubuntu-latest` z webpackom. Ko je bil vsak PR iz lastnega izvora usmerjen v to režo, jo je gradnja Turbopack
  zasedala 29–58 min, 18 gradenj je v čakalni vrsti čakalo do 18 h, gradnja ob potisku v vejo za izdaje
  pa je režo dobila enkrat v 40 opravilih. Na gostovanem izvajalniku ista gradnja PR traja 8–12 min poleg drugih
  opravil tega PR-ja. Turbopack, paketirnik, ki ga dobavlja `npm-publish`, se v veji za izdaje še naprej
  uporablja pri nočni gradnji a11y privzete veje (04:41 UTC), pri vsaki gradnji ob potisku ali ročnem sproženju, ki
  doseže režo, in pri samem `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  zagotavlja štiridelni pogoj.
- **Reže Turbopack nikoli ne zmanjšajte pod njene izmerjene potrebe.** Dne 2026-10-18 ob 18:06 je bila reža
  zmanjšana s 56G/60G na 40G/44G, da bi naredili prostor za `omni-release`. Faza prevajanja je bila ves čas
  izvajanja na meji `MemoryHigh` (pomnilniški PSI `full` 30–43 %), `Runner.Listener`, ki
  si deli cgroup, pa ni mogel podaljšati veljavnosti svojega opravila. Lastnikova nastavitev 56G/60G z dne 2026-10-17 je bila obnovljena
  še isti dan. Pod to vrednostjo gradnja ne odpove; sistem začne intenzivno premetavati pomnilnik in opravilo se izgubi.
- **Release-Green ima lastno režo (2026-10-18).** Do takrat sta se obe preverjanji Release-Green izvajali
  na `omni-build`: ob vsakem potisku (~10/uro, 97 od 100 izvajanj ob potisku je bilo v enem dnevu preklicanih med delom)
  in pri treh celovitih pregledih na dan, dolgih približno 2 h (pregled ob 05:29 je na režo čakal 6 h) — enotna reža za gradnjo
  je bila večkratno preobremenjena, gradnje PR-jev iz lastnega izvora pa so čakale več ur.
  `release-green` in `main-green` zdaj ciljata na `omni-release` (samo `omniroute-113-6`) z
  `OMNIROUTE_USE_TURBOPACK=0`, novejši potisk pa začetega izvajanja ne prekliče več (čakajoča
  reža še vedno združi naval). `tests/unit/build/runner-capacity-routing.test.ts`
  zagotavlja usmerjanje, preklop na webpack in to, da nič na `omni-release` ne gradi s Turbopackom.
- **Lahki bazen: `omni-light`.** `omniroute-113` in `omniroute-113-2` izvajata nočna opravila, ki potrebujejo
  gradnjo `next build` samo za zaledni sistem (~5–6 GB; webpack), ter `lint-guard` v `quality.yml`. `omniroute-113`
  je imel do 2026-10-18 nastavitev `MemoryHigh=4G` — gradnja promptfoo si je tam 54 minut s sproščanjem pomnilnika
  utirala pot do konca; 8 GB odpravi omejevanje.
- **Namerno manj poslušalcev.** Štiri enote OmniRoute so bile onemogočene 2026-08-29 — vsak dodatni
  poslušalec je še en porabnik zgoraj navedenega pomnilniškega proračuna. Zgornja meja čistilnika je 6 (`MAX_ACTIVE_RUNNERS=6` v cron): šteje
  vsak `Runner.Listener` na strežniku, OmniHeuris in OmniMind pa našim štirim dodata še dva.
- **Nikoli ročno ne čistite `/tmp` ali `_work`, medtem ko je kateri koli izvajalnik zaseden.** Postopek
  preveri-in-izbriši s premorom med korakoma je povzročil, da je aktivno opravilo Build
  2026-08-27 izgubilo svoj `_work`. Čistilnik preverjanje in odstranitev izvede v enem koraku;
  prepustite to njemu.
- Zaustavitev izvajalnika sredi opravila prekliče opravilo (opaženo v živo): `systemctl stop` uporabite samo,
  ko njegov poslušalec nima podrejenega procesa `Runner.Worker` — in to izvedite z enim ukazom.
- Delovni tokovi ne smejo shranjevati artefaktov v `/tmp` (ta je v pomnilniku RAM). Prenesite jih v
  `$RUNNER_TEMP` (na disku, ločeno za vsakega izvajalnika) — prenos 1,3 GB velikega artefakta `next-build` na
  tmpfs je trajal 27–32 minut, nalaganje z diska pa 2 minuti.
- VPS `.15` je namenjen samo homologaciji — nikoli ne izvaja izvajalnikov CI.
