# Self-Hosted Runner Box Operations (.113 pool) (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostalno hostan skup izvršava se na poslužitelju **.113** (`tomni-proxmox-113`). Od 2026-10-18 svaki
OmniRoute izvršitelj ima **jednu ulogu**, jednu oznaku te memorijski/CPU proračun prilagođen izmjerenim
potrebama svojeg radnog opterećenja. Turbopack mjesto dobiva resurse potrebne za izgradnju, dok su ostala
mjesta dimenzionirana prema svojim izmjerenim vršnim vrijednostima. Poslužitelj prekomjerno dodjeljuje
resurse samo kada se Turbopack izgradnja podudari s Release-Green webpack izgradnjom i lint zadatkom;
swap glavnog računala (16 GB) apsorbira to opterećenje, a budući da se `Build` zadaci za zahtjeve za
uključivanje izvode na hostanim izvršiteljima, Turbopack mjesto većinu je vremena neaktivno:

| izvršitelj           | oznaka                 | uloga                                                                                                                                                 | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`           | Turbopack izgradnje: `ci.yml` `Build` (samo push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, noćna a11y izgradnja | 56 GB / 60 GB (swap 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`         | Release-Green (`release-green` + `main-green`), webpack izgradnja                                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`           | noćni zadaci (Schemathesis, promptfoo, garak, k6, pokretanje a11y-ja) i `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB (swap 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`           | isti skup kao iznad                                                                                                                                   | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (njihovi repozitoriji) | samo Dependabot (vršna vrijednost od 155 MB za svaki, 2026-10-18)                                                                                     | 4 GB / 6 GB                | 200 % svaki |

Izmjereno 2026-10-18:

| resurs      | vrijednost                              | što to znači za raspoređivanje                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU   | **78 GB / 32 jezgre**                   | produkcijska Turbopack izgradnja bez ograničenja dosegnula je vršnih 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); na Next 16.3.8 sama faza kompilacije zauzima ~40 GB (36 GB RSS-a u `next-build` uz 17 loader izvršitelja od po 3 GB, izmjereno 2026-10-18); webpack izgradnja zauzima ~14–16 GB. Jedna Turbopack i jedna webpack izgradnja mogu stati zajedno; dvije Turbopack izgradnje ne mogu |
| swap        | 16 GB                                   | `omniroute-113-5` radi s isključenim swapom (`MemorySwapMax=0`) pa se nekontrolirana izgradnja prekida na svojem ograničenju umjesto da poslužitelj počne koristiti swap                                                                                                                                                                                                                                     |
| `/tmp`      | **12 GB tmpfs = RAM**                   | sve što je ondje pohranjeno zauzima memoriju; preostale datoteke uklanjaju se nakon 3 h                                                                                                                                                                                                                                                                                                                      |
| CPU         | zabilježeno opterećenje 60 na 32 jezgre | prije uvođenja kvota, jedna Turbopack izgradnja (~1166 % CPU-a) zajedno s paketom testova pokrivenosti na istom poslužitelju onemogućila je heartbeat signale ostalih slušatelja (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                       |
| izvršitelji | **6 slušatelja**                        | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` su onemogućeni (`systemctl enable --now` ponovno aktivira jedan)                                                                                                                                                                                                                                                                             |

Ograničenja se nalaze u datoteci `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
svake jedinice (prethodne vrijednosti sačuvane su kao `override.conf.bak-20261018`) i primijenjena su
uživo naredbom `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez
ponovnog pokretanja, pa nijedan aktivni zadatak nije prekinut. Oznake se također uživo mijenjaju putem
API-ja za izvršitelje (`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Instalirajte čistač (jednokratno, na poslužitelju)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): svakih 30 min, zapisivanje u /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je obavezan: čistač jednom snimkom otvorenih datoteka potvrđuje da se putanja
ne koristi prije nego što je ukloni, a bez tog alata ne uklanja ništa i to prijavljuje
(izlazni kod 1). Svaku promjenu najprije isprobajte s `--dry-run` — ispisuje točno što bi
učinio i ne mijenja ništa.

Što radi pri svakom pokretanju: čisti naše ostatke (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) nakon **3 h na tmpfs-u** i 24 h na disku u
`_work/_temp`; prekida `next-build` stariji od 75 min (nijedan se zadatak ne izvršava toliko dugo —
2026-08-27 jedan se izvršavao 70 min nakon što je GitHub njegov zadatak proglasio izgubljenim);
uklanja checkoutove starije od 48 h za runnere čija je jedinica **zaustavljena**; šalje upozorenja
kada je disk popunjen ≥ 85 %, memorijski PSI `full/avg60` ≥ 10 % te kada ima više listenera od
`MAX_ACTIVE_RUNNERS` (uz raščlambu na omniroute/ostalo). Izlazni kod 1 = potrebna je intervencija;
pročitajte zapisnik.

Pravilo od 75 minuta ne otkriva izgradnju od čijeg je zadatka GitHub već odustao. Kada
`Runner.Listener` ne može obnoviti svoj zadatak, `_diag/Runner_*.log` prikazuje
`POST request to …/renewjob timed out after 100 seconds`, API prijavljuje da je zadatak `completed`
(neuspješno) otprilike deset minuta nakon posljednje uspješne obnove, a `next-build` nastavlja se
izvršavati bez pridruženog zadatka (2026-10-18: izgradnja za #17066 označena je neuspješnom u 19:43,
a njezin je proces izgradnje pet minuta kasnije još uvijek zauzimao 40 GB). Potvrdite ref u najnovijem
`_diag/Worker_*.log`, a zatim po PID-u pošaljite SIGTERM samo stablu izgradnje — `next-build`,
`npm run build`, `build-next-isolated.mjs` i radnim procesima u `_work`. Nikada ne dirajte
`Runner.Listener`, `RunnerService.js` ni `Runner.Worker`: worker prijavljuje zadatak kao otkazan,
a listener se sam vraća na mrežu.

## Jedinice runnera: KillMode

Zadani `KillMode=process` runnera ostavlja proces `Runner.Worker → npm → next-build`
aktivnim kada se jedinica zaustavi ili ponovno pokrene — napušteni build nastavlja trošiti RAM i
CPU iako nije povezan ni s jednim poslom. Svaka OmniRoute jedinica ima dopunsku konfiguraciju
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s postavkom `KillMode=mixed`: prvo se listeneru šalje SIGTERM, a zatim se cijeloj kontrolnoj grupi
šalje SIGKILL pri isteku `TimeoutStop`. Postavka stupa na snagu pri sljedećem ponovnom pokretanju jedinice — ponovno pokrećite **jedan runner
odjednom, samo kada je neaktivan**, pri čemu provjera neaktivnosti i ponovno pokretanje moraju biti u istoj naredbi.

## Operativna pravila

- **Istodobno samo jedna Turbopack izgradnja — nametnuto oznakom.** Svaki posao koji pokreće potpuni Turbopack
  `next build` cilja `[self-hosted, omni-build]`, a samo **`omniroute-113-5`** nosi tu
  oznaku: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  noćna a11y izgradnja (#16853) i `docker-publish.yml` **amd64** (webpack unutar BuildKita —
  Turbopack se ondje srušio, pokretanje 33253576569). Dockerova arm64 grana ostaje na `ubuntu-24.04-arm`.
  `docker-publish` amd64 dijeli grupu konkurentnosti `heavy-build-main` s poslom `Build` iz `ci.yml`
  (`cancel-in-progress: false`). Docker Engine mora biti na `omniroute-113-5`. Drugo Turbopack
  mjesto ne stane u 78 GB (2 × 33–37 GB uz ostatak opterećenja poslužitelja); drugo je mjesto sigurno samo za
  webpack izgradnje.
- **Izgradnje zahtjeva za povlačenjem izvode se na hostiranim runnerima (2026-10-18).** `ci.yml` `Build` doseže `omni-build` samo za
  `push` i `workflow_dispatch`; svaki `pull_request` (iz vlastitog repozitorija ili forka) i `merge_group` Build
  izvodi se na `ubuntu-latest` uz webpack. Kada je svaki PR iz vlastitog repozitorija bio usmjeren na to mjesto, Turbopack
  Build zauzimao ga je 29–58 min, 18 izgradnji čekalo je u redu do 18 h, a vlastiti push Build
  grane izdanja dobio je mjesto jednom u 40 poslova. Na hostiranom runneru ista PR izgradnja traje 8–12 min uz ostale
  poslove tog PR-a. Turbopack, alat za pakiranje koji `npm-publish` isporučuje, i dalje se izvršava na grani izdanja putem
  noćne a11y izgradnje zadane grane (04:41 UTC), svakog push ili dispatch Builda koji
  dosegne mjesto te samog `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  utvrđuje uvjet od četiri stavke.
- **Nikada ne dodjeljujte Turbopack mjestu manje resursa od njegove izmjerene potrebe.** Dana 2026-10-18 u 18:06 mjesto je
  smanjeno s 56G/60G na 40G/44G kako bi se oslobodio prostor za `omni-release`. Faza kompilacije ostala je na
  granici `MemoryHigh` tijekom cijelog izvođenja (memorijski PSI `full` 30–43 %), a `Runner.Listener`, koji
  dijeli cgroup, nije mogao obnoviti svoj posao. Vlasnikove vrijednosti 56G/60G od 2026-10-17 vraćene su
  istog dana. Ispod te vrijednosti izgradnja ne pada; sustav neprestano premješta podatke između memorije i diska, a posao se gubi.
- **Release-Green ima vlastito mjesto (2026-10-18).** Do tada su se obje Release-Green provjere izvodile
  na `omni-build`: pri svakom pushu (~10/sat, 97 od 100 push pokretanja otkazano je usred rada u jednom danu)
  i tijekom tri potpuna prolaza od ~2 h dnevno (prolaz u 05:29 čekao je mjesto 6 h) — jedino mjesto za izgradnju
  bilo je višestruko preopterećeno, a PR izgradnje iz vlastitog repozitorija čekale su satima.
  `release-green` i `main-green` sada ciljaju `omni-release` (samo `omniroute-113-6`) uz
  `OMNIROUTE_USE_TURBOPACK=0`, a pokrenuto izvođenje više se ne otkazuje zbog novijeg pusha (
  mjesto na čekanju i dalje sažima navalu). `tests/unit/build/runner-capacity-routing.test.ts`
  utvrđuje usmjeravanje, prebacivanje na webpack i pravilo da se ništa na `omni-release` ne izgrađuje Turbopackom.
- **Laki skup: `omni-light`.** `omniroute-113` i `omniroute-113-2` izvode noćne poslove kojima je potrebna
  `next build` izgradnja samo za pozadinski sustav (~5–6 GB; webpack) i `quality.yml` `lint-guard`. `omniroute-113`
  imao je `MemoryHigh=4G` do 2026-10-18 — promptfoo izgradnja probijala se kroz oslobađanje memorije 54 minute
  ondje; 8 GB uklanja ograničavanje.
- **Namjerno manje listenera.** Četiri OmniRoute jedinice onemogućene su 2026-08-29 — svaki dodatni
  listener još je jedan korisnik gore navedenog memorijskog proračuna. Gornja granica čistača iznosi 6 (`MAX_ACTIVE_RUNNERS=6` u cronu): broji
  svaki `Runner.Listener` na poslužitelju, a OmniHeuris + OmniMind dodaju još dva uz naša četiri.
- **Nikada ručno ne čistite `/tmp` ili `_work` dok je bilo koji runner zauzet.** Provjera
  pa brisanje, s razmakom između tih radnji, razlog je zbog kojeg je aktivni posao Build izgubio svoj
  `_work` 2026-08-27. Čistač provjeru i uklanjanje obavlja u jednom koraku;
  prepustite to njemu.
- Zaustavljanje runnera usred posla otkazuje posao (opaženo uživo): `systemctl stop` koristite samo
  kada njegov listener nema podređeni proces `Runner.Worker` — i učinite to jednom naredbom.
- Tijekovi rada ne smiju spremati artefakte u `/tmp` (nalazi se u RAM-u). Preuzimajte u
  `$RUNNER_TEMP` (na disku, zasebno za svaki runner) — artefaktu `next-build` od 1,3 GB trebalo je 27–32
  minute da se spremi na tmpfs, a 2 minute za prijenos s diska.
- VPS `.15` služi samo za homologaciju — nikada ne izvršava CI runnere.
