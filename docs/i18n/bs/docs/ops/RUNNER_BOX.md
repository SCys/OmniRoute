# Self-Hosted Runner Box Operations (.113 pool) (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostalno hostovani pool radi na **.113** uređaju (`tomni-proxmox-113`). Od 2026-10-18 svaki
OmniRoute runner ima **jednu ulogu**, jednu oznaku i memorijski/CPU budžet prilagođen izmjerenom
opterećenju. Turbopack slot dobija resurse potrebne za build; ostali slotovi dimenzionirani su prema
izmjerenim vršnim vrijednostima. Uređaj prekoračuje raspoložive resurse samo kada se Turbopack build
poklopi s Release-Green webpack buildom i lint zadatkom; swap hosta (16 GB) apsorbira to, a pošto se
Build zadaci za pull requestove izvršavaju na hostovanim runnerima, Turbopack slot je većinu vremena
neaktivan:

| runner               | oznaka                 | uloga                                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`           | Turbopack buildovi: `ci.yml` `Build` (samo push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, noćni a11y build | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`         | Release-Green (`release-green` + `main-green`), webpack build                                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`           | noćni zadaci (Schemathesis, promptfoo, garak, k6, a11y boot) i `quality.yml` `lint-guard`                                                        | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`           | isti pool kao iznad                                                                                                                              | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (njihovi repozitoriji) | samo Dependabot (vršna vrijednost 155 MB za svaki, 2026-10-18)                                                                                   | 4 GB / 6 GB                | 200 % za svaki |

Izmjereno 2026-10-18:

| resurs    | vrijednost                              | značenje za raspoređivanje                                                                                                                                                                                                                                                                                                                                                            |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 jezgre**                   | Turbopack produkcijski build dostigao je vršnih 49 GB bez ograničenja (`tests/unit/ci-build-bundler-webpack.test.ts`); na Next 16.3.8 sama faza kompajliranja zauzima ~40 GB (36 GB RSS u `next-build` plus 17 loader workera po 3 GB, izmjereno 2026-10-18); webpack build zauzima ~14–16 GB. Jedan Turbopack + jedan webpack build mogu stati zajedno; dva Turbopack builda ne mogu |
| swap      | 16 GB                                   | `omniroute-113-5` radi s isključenim swapom (`MemorySwapMax=0`), tako da se nekontrolisani build prekida na svom ograničenju umjesto da uređaj počne koristiti swap                                                                                                                                                                                                                   |
| `/tmp`    | **12 GB tmpfs = RAM**                   | sve što se tamo smjesti zauzima memoriju; ostaci se uklanjaju nakon 3 h                                                                                                                                                                                                                                                                                                               |
| CPU       | zabilježeno opterećenje 60 na 32 jezgre | prije uvođenja kvota, jedan Turbopack build (~1166 % CPU) zajedno s coverage paketom testova na istom uređaju uskraćivao je resurse heartbeat signalima drugih listenera (`The self-hosted runner lost communication`, #16853)                                                                                                                                                        |
| runneri   | **6 listenera**                         | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` su onemogućeni (`systemctl enable --now` ponovo aktivira jedan)                                                                                                                                                                                                                                                       |

Ograničenja se nalaze u `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` svake jedinice
(prethodne vrijednosti sačuvane su kao `override.conf.bak-20261018`) i primijenjena su uživo pomoću
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez ponovnog pokretanja,
tako da nijedan aktivni zadatak nije bio pogođen. Oznake se također mijenjaju uživo putem runners API-ja
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Instalirajte čistač (jednokratno, na serveru)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): svakih 30 min, zapisivanje u /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je obavezan: čistač jednim snimkom otvorenih datoteka potvrđuje da se putanja
ne koristi prije nego što je ukloni, a bez tog alata ne uklanja ništa i to prijavljuje
(exit 1). Svaku promjenu prvo isprobajte pomoću `--dry-run` — ispisuje tačno šta bi
uradio i ne mijenja ništa.

Šta radi pri svakom pokretanju: čisti naše zaostale stavke (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) nakon **3 h na tmpfs-u** i 24 h na disku u
`_work/_temp`; prekida `next-build` stariji od 75 min (nijedan posao ne traje toliko dugo —
2026-08-27 jedan je trajao 70 min nakon što je GitHub proglasio njegov posao izgubljenim);
uklanja radne kopije starije od 48 h za runnere čija je jedinica **zaustavljena**; upozorava
kada je iskorištenost diska ≥ 85 %, memorijski PSI `full/avg60` ≥ 10 % i kada ima više
osluškivača nego što je navedeno u `MAX_ACTIVE_RUNNERS` (uz podjelu na omniroute/ostale).
Exit 1 = potrebna je intervencija; pročitajte dnevnik.

Pravilo od 75 minuta ne otkriva build od čijeg je posla GitHub već odustao. Kada
`Runner.Listener` ne može obnoviti svoj posao, `_diag/Runner_*.log` prikazuje
`POST request to …/renewjob timed out after 100 seconds`, API prijavljuje posao kao `completed`
(neuspješan) približno deset minuta nakon posljednje uspješne obnove, a `next-build` nastavlja raditi
bez povezanog posla (2026-10-18: build za #17066 označen je neuspješnim u 19:43, a njegov je proces
builda pet minuta kasnije još uvijek zauzimao 40 GB). Potvrdite ref u najnovijem
`_diag/Worker_*.log`, a zatim po PID-u pošaljite SIGTERM samo stablu build procesa — `next-build`,
`npm run build`, `build-next-isolated.mjs` i `_work` radnim procesima. Nikada ne dirajte
`Runner.Listener`, `RunnerService.js` ili `Runner.Worker`: radni proces prijavljuje posao kao
otkazan, a osluškivač se sam ponovo povezuje.

## Runner jedinice: KillMode

Podrazumevani `KillMode=process` za runner ostavlja `Runner.Worker → npm → next-build`
aktivnim kada se jedinica zaustavi ili ponovo pokrene — proces izgradnje (build) ostaje siroče i
nastavlja da troši RAM i CPU bez dodeljenog posla. Svaka OmniRoute jedinica sadrži drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
sa `KillMode=mixed`: prvo SIGTERM za listener, a zatim SIGKILL za celu cgroup grupu pri
`TimeoutStop`. Ovo stupa na snagu pri sledećem ponovnom pokretanju jedinice — ponovo pokrenite
**jedan po jedan runner, samo kada su neaktivni (idle)**, uz proveru neaktivnosti i ponovno
pokretanje u istoj komandi.

## Operativna pravila

- **Istovremeno samo jedna Turbopack izgradnja — nametnuto oznakom.** Svaki posao koji pokreće puni Turbopack
  `next build` cilja `[self-hosted, omni-build]`, a samo **`omniroute-113-5`** nosi tu
  oznaku: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  noćna a11y izgradnja (#16853) i `docker-publish.yml` **amd64** (webpack unutar BuildKita —
  Turbopack se tamo srušio, pokretanje 33253576569). arm64 Docker etapa ostaje na `ubuntu-24.04-arm`.
  `docker-publish` amd64 dijeli concurrency grupu `heavy-build-main` s poslom `Build` iz `ci.yml`
  (`cancel-in-progress: false`). Docker Engine mora biti na `omniroute-113-5`. Drugi Turbopack
  slot ne može stati u 78 GB (2 × 33–37 GB plus ostatak sistema); drugi slot siguran je samo za
  webpack izgradnje.
- **Buildovi za pull requestove pokreću se na hostovanim runnerima (2026-10-18).** `Build` iz `ci.yml` doseže `omni-build` samo za
  `push` i `workflow_dispatch`; svaki `pull_request` (iz izvornog repozitorija ili forka) i `merge_group` Build
  pokreće se na `ubuntu-latest` uz webpack. Kada je svaki PR iz izvornog repozitorija bio usmjeren na taj slot, Turbopack
  Build držao ga je 29–58 min, 18 Buildova čekalo je u redu do 18 h, a vlastiti push Build
  linije izdanja dobio je slot jednom u 40 poslova. Na hostovanom runneru isti PR Build traje 8–12 min uz ostale
  poslove tog PR-a. Turbopack, bundler koji `npm-publish` isporučuje, i dalje se izvršava na liniji izdanja kroz
  noćnu a11y izgradnju zadane grane (04:41 UTC), kroz svaki push ili ručno pokrenuti Build koji
  dosegne slot, kao i kroz sam `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  fiksira uslov od četiri klauzule.
- **Nikada ne postavljajte Turbopack slot ispod njegovih izmjerenih potreba.** Dana 2026-10-18 u 18:06 slot je
  smanjen s 56G/60G na 40G/44G kako bi se napravilo mjesta za `omni-release`. Faza kompajliranja cijelo je
  vrijeme izvođenja bila na granici `MemoryHigh` (memory PSI `full` 30–43 %), a `Runner.Listener`, koji
  dijeli cgroup, nije mogao obnoviti dodjelu svog posla. Vlasnikova postavka 56G/60G od 2026-10-17 vraćena je
  istog dana. Ispod te vrijednosti izgradnja se ne prekida s greškom; dolazi do intenzivnog prebacivanja memorijskih stranica,
  a posao se gubi.
- **Release-Green ima vlastiti slot (2026-10-18).** Do tada su se obje Release-Green provjere
  pokretale na `omni-build`: pri svakom pushu (~10/sat, 97 od 100 push pokretanja otkazano je usred rada u jednom danu)
  i tri potpuna ciklusa od ~2 h dnevno (ciklus u 05:29 čekao je 6 h na slot) — jedini slot za izgradnju
  bio je višestruko preopterećen, a Buildovi PR-ova iz izvornog repozitorija čekali su satima.
  `release-green` i `main-green` sada ciljaju `omni-release` (samo `omniroute-113-6`) uz
  `OMNIROUTE_USE_TURBOPACK=0`, a započeto pokretanje više se ne otkazuje zbog novijeg pusha (slot
  na čekanju i dalje sažima navalu). `tests/unit/build/runner-capacity-routing.test.ts`
  fiksira usmjeravanje, prebacivanje na webpack i pravilo da se ništa na `omni-release` ne izgrađuje pomoću Turbopacka.
- **Laki skup: `omni-light`.** `omniroute-113` i `omniroute-113-2` pokreću noćne poslove kojima je
  potreban `next build` samo za backend (~5–6 GB; webpack) i `lint-guard` iz `quality.yml`. `omniroute-113`
  imao je `MemoryHigh=4G` do 2026-10-18 — promptfoo izgradnja trajala je 54 minute uz stalno
  oslobađanje memorije; 8 GB uklanja ograničavanje.
- **Namjerno manje listenera.** Četiri OmniRoute jedinice onemogućene su 2026-08-29 — svaki dodatni
  listener još je jedan korisnik navedenog memorijskog budžeta. Gornja granica čistača je 6 (`MAX_ACTIVE_RUNNERS=6` u cronu): on broji
  svaki `Runner.Listener` na serveru, a OmniHeuris + OmniMind dodaju još dva na naša četiri.
- **Nikada ručno ne čistite `/tmp` ili `_work` dok je bilo koji runner zauzet.**
  Provjera-pa-brisanje s vremenskim razmakom između tih koraka razlog je zbog kojeg je aktivni Build posao izgubio svoj
  `_work` 2026-08-27. Čistač obavlja provjeru i uklanjanje u jednom koraku;
  prepustite mu to.
- Zaustavljanje runnera usred posla otkazuje posao (uočeno uživo): `systemctl stop` koristite samo
  kada njegov listener nema podređeni proces `Runner.Worker` — i učinite to jednom naredbom.
- Workflowi ne smiju ostavljati artefakte u `/tmp` (to je RAM). Preuzimajte ih u
  `$RUNNER_TEMP` (na disku, zasebno za svaki runner) — artefaktu `next-build` od 1.3 GB trebalo je 27–32
  minute da se smjesti na tmpfs, a 2 minute da se pošalje s diska.
- VPS `.15` služi samo za homologaciju — nikada ne pokreće CI runnere.
