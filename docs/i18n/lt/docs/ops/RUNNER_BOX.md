# Self-Hosted Runner Box Operations (.113 pool) (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Savarankiškai administruojamas telkinys veikia **.113** serveryje (`tomni-proxmox-113`). Nuo 2026-10-18 kiekviena
„OmniRoute“ vykdyklė turi **vieną vaidmenį**, vieną žymą ir atminties / CPU biudžetą, pritaikytą pagal išmatuotą jos darbo krūvį.
„Turbopack“ vietai skiriama tiek išteklių, kiek reikia komponavimui; kitų vietų ištekliai nustatyti pagal jų
išmatuotas didžiausias apkrovas. Serverio ištekliai viršijami tik tada, kai „Turbopack“ komponavimas sutampa su „Release-Green“
„webpack“ komponavimu ir „lint“ užduotimi; tai amortizuoja pagrindinio kompiuterio sukeitimo sritis (16 GB), o kadangi „pull request“ komponavimai vykdomi
prieglobos aplinkoje, „Turbopack“ vieta didžiąją laiko dalį būna nenaudojama:

| vykdyklė             | žyma           | vaidmuo                                                                                                                                                                 | `MemoryHigh` / `MemoryMax`      | `CPUQuota` |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | „Turbopack“ komponavimai: `ci.yml` `Build` (tik „push“ / „dispatch“), „Docker“ amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, naktinis a11y komponavimas | 56 GB / 60 GB (sukeitimas 0)    | 1600 %     |
| `omniroute-113-6`    | `omni-release` | „Release-Green“ (`release-green` + `main-green`), „webpack“ komponavimas                                                                                                | 20 GB / 24 GB (sukeitimas 4 GB) | 800 %      |
| `omniroute-113-2`    | `omni-light`   | naktinės užduotys („Schemathesis“, „promptfoo“, „garak“, k6, a11y paleidimas) ir `quality.yml` `lint-guard`                                                             | 12 GB / 16 GB (sukeitimas 4 GB) | 600 %      |
| `omniroute-113`      | `omni-light`   | tas pats telkinys kaip pirmiau                                                                                                                                          | 8 GB / 12 GB                    | 400 %      |
| OmniHeuris, OmniMind | (jų saugyklos) | tik „Dependabot“ (didžiausias naudojimas – po 155 MB, 2026-10-18)                                                                                                       | 4 GB / 6 GB                     | po 200 %   |

Išmatuota 2026-10-18:

| išteklius  | reikšmė                            | reikšmė planavimui                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 branduoliai**         | neapribotas „Turbopack“ produkcinis komponavimas pasiekė 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); naudojant „Next“ 16.3.8, vien kompiliavimo etapas užima ~40 GB (36 GB RSS procese `next-build` ir 17 įkėliklio darbininkų po 3 GB, išmatuota 2026-10-18); „webpack“ komponavimas užima ~14–16 GB. Vienas „Turbopack“ ir vienas „webpack“ komponavimas telpa kartu; du „Turbopack“ komponavimai – ne |
| sukeitimas | 16 GB                              | `omniroute-113-5` veikia išjungus sukeitimą (`MemorySwapMax=0`), todėl nevaldomas komponavimas nutraukiamas pasiekus jam nustatytą ribą, užuot privertus serverį naudoti sukeitimą                                                                                                                                                                                                                                  |
| `/tmp`     | **12 GB tmpfs = RAM**              | viskas, kas ten paliekama, naudoja atmintį; likučiai pašalinami po 3 val.                                                                                                                                                                                                                                                                                                                                           |
| CPU        | 32 branduoliams stebėta 60 apkrova | prieš nustatant kvotas vienas „Turbopack“ komponavimas (~1166 % CPU) kartu su aprėpties testų rinkiniu tame pačiame serveryje atimdavo iš kitų klausytojų išteklius, reikalingus ryšiui palaikyti (`The self-hosted runner lost communication`, #16853)                                                                                                                                                             |
| vykdyklės  | **6 klausytojai**                  | 4 „OmniRoute“ + „OmniHeuris“ + „OmniMind“; `omniroute-113-3/-4/-7/-8` yra išjungtos (`systemctl enable --now` vieną jų vėl įjungia)                                                                                                                                                                                                                                                                                 |

Ribos saugomos kiekvieno vieneto faile `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(ankstesnės reikšmės išsaugotos kaip `override.conf.bak-20261018`) ir buvo pritaikytos veikiančiai sistemai naudojant
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — be paleidimo iš naujo, todėl
jokia vykdoma užduotis nebuvo paveikta. Žymos taip pat veikiančioje sistemoje keičiamos per vykdyklių API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Įdiekite valymo priemonę (vieną kartą serveryje)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): kas 30 min., žurnalą rašyti į /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` yra būtinas: prieš pašalindama kelią, valymo priemonė pagal vieną atvertų
failų momentinę kopiją patvirtina, kad jis nenaudojamas, o be šio įrankio nieko
nepašalina ir apie tai praneša (exit 1). Bet kokį pakeitimą pirmiausia išbandykite
su `--dry-run` — bus tiksliai parodyta, kas būtų atlikta, nieko nekeičiant.

Kas atliekama kiekvieno paleidimo metu: išvalomi mūsų pačių likučiai (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) po **3 val. tmpfs sistemoje** ir
po 24 val. diske esančiame `_work/_temp`; nutraukiamas senesnis nei 75 min.
`next-build` procesas (jokia užduotis taip ilgai nevykdoma — 2026-08-27 vienas
procesas veikė 70 min. po to, kai GitHub paskelbė jo užduotį prarasta); pašalinamos
senesnės nei 48 val. vykdyklių, kurių tarnybinis vienetas yra **sustabdytas**,
darbinės kopijos; įspėjama, kai disko naudojimas ≥ 85 %, atminties PSI
`full/avg60` ≥ 10 % arba klausytojų yra daugiau nei `MAX_ACTIVE_RUNNERS`
(pateikiant omniroute ir kitų klausytojų pasiskirstymą). Exit 1 = reikia
atkreipti dėmesį; perskaitykite žurnalą.

75 minučių taisyklė neaptinka komponavimo proceso, kurio užduoties GitHub jau
atsisakė. Kai `Runner.Listener` negali atnaujinti savo užduoties,
`_diag/Runner_*.log` rodomas pranešimas
`POST request to …/renewjob timed out after 100 seconds`, API maždaug po dešimties
minučių nuo paskutinio sėkmingo atnaujinimo nurodo užduoties būseną `completed`
(nesėkmė), o `next-build` toliau veikia nepriskirtas jokiai užduočiai
(2026-10-18: #17066 komponavimas 19:43 buvo pažymėtas kaip nepavykęs, o jo
komponavimo procesas po penkių minučių vis dar naudojo 40 GB). Naujausiame
`_diag/Worker_*.log` patvirtinkite ref, tada pagal PID siųskite SIGTERM tik
komponavimo procesų medžiui — `next-build`, `npm run build`,
`build-next-isolated.mjs` ir `_work` procesams. Niekada nelieskite
`Runner.Listener`, `RunnerService.js` ar `Runner.Worker`: darbinis procesas
praneša, kad užduotis atšaukta, o klausytojas pats vėl prisijungia.

## Vykdyklių vienetai: KillMode

Numatytasis vykdyklės nustatymas `KillMode=process`, sustabdžius arba paleidus vienetą iš naujo, palieka
`Runner.Worker → npm → next-build` procesus veikti — našlaičiu likęs komponavimo procesas toliau naudoja RAM ir
CPU, nors su juo nesusieta jokia užduotis. Kiekvienas OmniRoute vienetas turi papildomą konfigūracijos failą
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
su `KillMode=mixed`: pirmiausia klausytojui siunčiamas SIGTERM, o pasiekus
`TimeoutStop` visai cgroup siunčiamas SIGKILL. Nustatymas įsigalioja kitą kartą paleidus vienetą iš naujo — iš naujo paleiskite **po vieną vykdyklę,
tik kai ji neveikli**, o neveiklumo patikrą ir paleidimą iš naujo atlikite ta pačia komanda.

## Veikimo taisyklės

- **Vienu metu tik viena Turbopack versijos komponavimo užduotis — tai užtikrinama žyma.** Kiekviena užduotis, vykdanti pilną Turbopack
  `next build`, naudoja `[self-hosted, omni-build]`, o šią žymą turi tik
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  naktinis a11y komponavimas (#16853) ir `docker-publish.yml` **amd64** (webpack BuildKit viduje —
  ten Turbopack užstrigo, vykdymas 33253576569). Docker arm64 dalis lieka `ubuntu-24.04-arm`.
  `docker-publish` amd64 dalijasi `heavy-build-main` lygiagretumo grupe su `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine turi veikti `omniroute-113-5`. Antras Turbopack
  lizdas netelpa į 78 GB (2 × 33–37 GB ir likusi sistemos apkrova); antras lizdas saugus tik
  webpack komponavimams.
- **Ištraukimo užklausų Build vykdomi prieglobos infrastruktūroje (2026-10-18).** `ci.yml` `Build` pasiekia `omni-build` tik per
  `push` ir `workflow_dispatch`; kiekvienas `pull_request` (iš savo ar kitos saugyklos) ir `merge_group` Build
  vykdomas `ubuntu-latest` aplinkoje su webpack. Kai kiekviena iš savo saugyklos gaunama PR buvo nukreipiama į lizdą, Turbopack
  Build jį užimdavo 29–58 min., 18 Build laukė eilėje iki 18 val., o leidimo šakos nuosavas push Build
  gavo lizdą tik kartą per 40 užduočių. Prieglobos infrastruktūroje tas pats PR Build trunka 8–12 min. kartu su kitomis PR
  užduotimis. Turbopack, kurį į paketą įtraukia `npm-publish`, leidimo šakoje toliau tikrinamas
  numatytosios šakos naktiniu a11y komponavimu (04:41 UTC), kiekvienu lizdą pasiekiančiu push ar dispatch Build
  ir pačiu `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  įtvirtina keturių sąlygų filtrą.
- **Niekada nesumažinkite Turbopack lizdo žemiau išmatuoto poreikio.** 2026-10-18 18:06 lizdo
  ribos buvo sumažintos nuo 56G/60G iki 40G/44G, kad atsirastų vietos `omni-release`. Kompiliavimo fazė visą
  vykdymo laiką laikėsi ties `MemoryHigh` riba (atminties PSI `full` 30–43 %), o `Runner.Listener`, kuris
  naudoja tą pačią cgroup, negalėjo pratęsti savo užduoties. Savininko 2026-10-17 nustatytos 56G/60G ribos buvo atkurtos
  tą pačią dieną. Sumažinus žemiau šios vertės, komponavimas nesibaigia klaida; sistema pradeda intensyviai kaitalioti atmintį, o užduotis prarandama.
- **Release-Green turi nuosavą lizdą (2026-10-18).** Iki tol abi Release-Green patikros buvo vykdomos
  `omni-build`: per kiekvieną push (~10/val., 97 iš 100 push vykdymų per vieną dieną buvo atšaukti darbo viduryje)
  ir per tris maždaug 2 val. trukmės pilnus patikrinimus per dieną (05:29 patikrinimas lizdo laukė 6 val.) — vienintelis komponavimo
  lizdas buvo apkrautas kelis kartus viršijant jo pajėgumą, o iš savo saugyklos gauti PR Build laukė valandų valandas.
  `release-green` ir `main-green` dabar naudoja `omni-release` (tik `omniroute-113-6`) su
  `OMNIROUTE_USE_TURBOPACK=0`, o pradėtas vykdymas nebėra atšaukiamas gavus naujesnį push (laukiantis
  lizdas vis tiek sutraukia užduočių antplūdį). `tests/unit/build/runner-capacity-routing.test.ts`
  įtvirtina maršruto parinkimą, webpack perjungimą ir tai, kad niekas `omni-release` aplinkoje nekomponuojama naudojant Turbopack.
- **Lengvųjų užduočių telkinys: `omni-light`.** `omniroute-113` ir `omniroute-113-2` vykdo naktines užduotis, kurioms reikia
  tik serverio dalies `next build` (~5–6 GB; webpack), ir `quality.yml` `lint-guard`. `omniroute-113`
  turėjo `MemoryHigh=4G` iki 2026-10-18 — promptfoo komponavimas ten 54 minutes sunkiai atlaisvindavo atmintį;
  8 GB pašalina ribojimą.
- **Mažiau klausytuvų — sąmoningai.** Keturi OmniRoute vienetai buvo išjungti 2026-08-29 — kiekvienas papildomas
  klausytojas yra dar vienas anksčiau nurodyto atminties biudžeto naudotojas. Valymo proceso viršutinė riba yra 6 (`MAX_ACTIVE_RUNNERS=6` cron užduotyje): jis skaičiuoja
  kiekvieną serveryje veikiantį `Runner.Listener`, o OmniHeuris ir OmniMind prie mūsų keturių prideda dar du.
- **Niekada nevalykite `/tmp` ar `_work` rankiniu būdu, kol bent vienas vykdytojas užimtas.**
  Patikrinimas, o paskui trynimas su tarpu tarp šių veiksmų yra priežastis, dėl kurios aktyvi Build užduotis 2026-08-27 prarado savo
  `_work`. Valymo procesas patikrinimą ir pašalinimą atlieka vienu veiksmu;
  leiskite jam tai padaryti.
- Vykdytojo sustabdymas užduoties viduryje atšaukia užduotį (stebėta realiomis sąlygomis): `systemctl stop` vykdykite tik
  tada, kai jo klausytojas neturi antrinio `Runner.Worker` proceso, — ir atlikite tai viena komanda.
- Darbo sekos negali laikyti artefaktų `/tmp` (tai yra RAM). Atsisiųskite į
  `$RUNNER_TEMP` (diske, atskirai kiekvienam vykdytojui) — 1.3 GB `next-build` artefakto įrašymas į tmpfs truko 27–32
  minutes, o įkėlimas iš disko — 2 minutes.
- `.15` VPS skirtas tik homologacijai — jame niekada nevykdomi CI vykdytojai.
