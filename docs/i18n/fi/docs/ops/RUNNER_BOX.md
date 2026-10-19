# Self-Hosted Runner Box Operations (.113 pool) (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Itse ylläpidetty pooli toimii **.113**-palvelimella (`tomni-proxmox-113`). 2026-10-18 alkaen kullakin
OmniRoute-runnerilla on **yksi rooli**, yksi tunniste sekä sen työkuormalta mitoitettu muisti- ja
suoritinbudjetti. Turbopack-paikka saa koonnin tarvitsemat resurssit; muut paikat on mitoitettu
niiden mitattujen huippujen mukaan. Palvelin ylivaraa resursseja vain, kun Turbopack-koonti osuu
samaan aikaan Release-Green-webpack-koonnin ja lint-ajon kanssa; palvelimen sivutustila (16 GB)
ottaa tämän kuorman vastaan. Koska pull requestien Build-ajot suoritetaan ylläpidetyillä
runnereilla, Turbopack-paikka on suurimman osan ajasta käyttämättömänä:

| runner               | tunniste            | rooli                                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`        |
| -------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`        | Turbopack-koonnit: `ci.yml` `Build` (vain push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, öinen a11y-koonti | 56 GB / 60 GB (swap 0)     | 1600 %            |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), webpack-koonti                                                                                   | 20 GB / 24 GB (swap 4 GB)  | 800 %             |
| `omniroute-113-2`    | `omni-light`        | yöajot (Schemathesis, promptfoo, garak, k6, a11y-käynnistys) ja `quality.yml` `lint-guard`                                                       | 12 GB / 16 GB (swap 4 GB)  | 600 %             |
| `omniroute-113`      | `omni-light`        | sama pooli kuin yllä                                                                                                                             | 8 GB / 12 GB               | 400 %             |
| OmniHeuris, OmniMind | (omat repositoriot) | vain Dependabot (kummankin huippu 155 MB, 2026-10-18)                                                                                            | 4 GB / 6 GB                | 200 % kummallakin |

Mitattu 2026-10-18:

| resurssi  | arvo                           | merkitys ajoitukselle                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 ydintä**          | Turbopack-tuotantokoonti saavutti ilman rajoitusta 49 GB:n huipun (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8:ssa pelkkä käännösvaihe varaa noin 40 GB (36 GB RSS prosessissa `next-build` sekä 17 loader-työntekijää 3 GB:lla, mitattu 2026-10-18); webpack-koonti käyttää noin 14–16 GB. Yksi Turbopack- ja yksi webpack-koonti mahtuvat ajettaviksi yhtä aikaa; kaksi Turbopack-koontia eivät |
| swap      | 16 GB                          | `omniroute-113-5` toimii ilman sivutustilaa (`MemorySwapMax=0`), joten hallitsemattomasti kasvava koonti pysäytetään sen saavuttaessa rajansa sen sijaan, että koko palvelin alkaisi käyttää sivutustilaa                                                                                                                                                                                                         |
| `/tmp`    | **12 GB tmpfs = RAM**          | kaikki sinne jätetty kuluttaa muistia; jäännökset poistetaan 3 tunnin kuluttua                                                                                                                                                                                                                                                                                                                                    |
| CPU       | kuorma 60 havaittu 32 ytimellä | ennen kiintiöitä yksi Turbopack-koonti (~1166 % CPU) ja samalla palvelimella suoritettu kattavuustestikokonaisuus estivät muiden kuuntelijoiden heartbeat-viestit (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                           |
| runnerit  | **6 kuuntelijaa**              | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` on poistettu käytöstä (`systemctl enable --now` ottaa yhden uudelleen käyttöön)                                                                                                                                                                                                                                                                   |

Rajat sijaitsevat kunkin unitin tiedostossa `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(aiemmat arvot on säilytetty tiedostossa `override.conf.bak-20261018`), ja ne otettiin käyttöön ajon aikana komennolla
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — uudelleenkäynnistystä ei tehty, joten
käynnissä oleviin ajoihin ei koskettu. Tunnisteita muutetaan runners-rajapinnan kautta
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), myös ajon aikana.

## Asenna janitor (kerran palvelimelle)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): 30 minuutin välein, loki tiedostoon /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` vaaditaan: janitor varmistaa yhdellä avointen tiedostojen tilannevedoksella,
että polku ei ole käytössä, ennen kuin se poistaa polun. Ilman työkalua se ei poista
mitään ja ilmoittaa siitä (exit 1). Kokeile kaikkia muutoksia ensin valitsimella
`--dry-run` — se tulostaa täsmälleen, mitä se tekisi, eikä muuta mitään.

Mitä se tekee jokaisella suorituskerralla: siivoaa omat jäännöksemme (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) **3 tunnin jälkeen tmpfs:stä** ja
24 tunnin jälkeen levyllä olevasta `_work/_temp`-hakemistosta; lopettaa yli 75
minuuttia vanhan `next-build`-prosessin (mikään työ ei kestä niin kauan — 2026-08-27
yksi niistä jatkui 70 minuuttia sen jälkeen, kun GitHub oli ilmoittanut työn
kadonneeksi); poistaa 48 tuntia vanhat työkopiot ajajilta, joiden yksikkö on
**pysäytetty**; hälyttää, kun levyn käyttöaste on ≥ 85 %, muistin PSI-arvo
`full/avg60` on ≥ 10 % tai kuuntelijoita on enemmän kuin `MAX_ACTIVE_RUNNERS`
(eriteltynä omniroute-kuuntelijoihin ja muihin). Exit 1 = toimenpiteitä tarvitaan;
lue loki.

75 minuutin sääntö ei havaitse koontia, jonka osalta GitHub on jo luovuttanut. Kun
`Runner.Listener` ei pysty uusimaan työtään, `_diag/Runner_*.log` näyttää viestin
`POST request to …/renewjob timed out after 100 seconds`, API ilmoittaa työn
`completed`-tilaan (epäonnistuneeksi) noin kymmenen minuuttia viimeisen onnistuneen
uusimisen jälkeen, ja `next-build` jatkaa suoritusta ilman siihen liitettyä työtä
(2026-10-18: kohteen #17066 koonti merkittiin epäonnistuneeksi klo 19.43, ja sen
koontiprosessi varasi yhä 40 Gt viisi minuuttia myöhemmin). Vahvista ref uusimmasta
`_diag/Worker_*.log`-tiedostosta ja lähetä sitten SIGTERM vain koontiprosessipuulle
PID-tunnuksen perusteella — `next-build`, `npm run build`, `build-next-isolated.mjs`
ja `_work`-työntekijät. Älä koskaan koske prosesseihin `Runner.Listener`,
`RunnerService.js` tai `Runner.Worker`: työntekijä ilmoittaa työn peruutetuksi, ja
kuuntelija palaa itsestään online-tilaan.

## Runner-yksiköt: KillMode

Runnerin oletusasetus `KillMode=process` jättää prosessiketjun `Runner.Worker → npm → next-build`
käyntiin, kun yksikkö pysäytetään tai käynnistetään uudelleen — orvoksi jäänyt koonti kuluttaa edelleen RAM-muistia ja
suoritinaikaa, vaikka siihen ei liity enää työtä. Jokaisella OmniRoute-yksiköllä on drop-in-määritys
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`),
jossa on `KillMode=mixed`: ensin SIGTERM kuuntelijalle ja `TimeoutStop`-ajan kohdalla
SIGKILL koko cgroupille. Se tulee voimaan yksikön seuraavan uudelleenkäynnistyksen yhteydessä — käynnistä uudelleen **yksi runner
kerrallaan ja vain sen ollessa jouten**, siten että joutenolotarkistus ja uudelleenkäynnistys ovat samassa komennossa.

## Toimintasäännöt

- **Vain yksi Turbopack-koonti kerrallaan — pakotetaan tunnisteella.** Jokainen täyden Turbopack-
  `next build` -koonnin suorittava työ kohdistetaan tunnisteisiin `[self-hosted, omni-build]`, ja vain
  **`omniroute-113-5`** kantaa kyseistä tunnistetta: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, öinen a11y-koonti (#16853) ja `docker-publish.yml`
  **amd64** (webpack BuildKitin sisällä — Turbopack kaatui siellä paniikkivirheeseen, ajo 33253576569).
  Dockerin arm64-osuus pysyy kohteessa `ubuntu-24.04-arm`. `docker-publish`-työn amd64-osuus jakaa
  `heavy-build-main`-rinnakkaisuusryhmän `ci.yml`-työn `Build`-ajon kanssa
  (`cancel-in-progress: false`). Docker Enginen on oltava koneella `omniroute-113-5`. Toinen
  Turbopack-paikka ei mahdu 78 GB:hen (2 × 33–37 GB sekä koneen muu kuorma); toinen paikka on
  turvallinen vain webpack-koonneille.
- **Pull requestien Build-ajot suoritetaan ylläpidetyillä suorittimilla (2026-10-18).** `ci.yml`-työn
  `Build` päätyy kohteeseen `omni-build` vain tapahtumilla `push` ja `workflow_dispatch`; jokainen
  `pull_request`-ajo (omasta alkuperästä tai forkista) sekä `merge_group`-ajo suoritetaan kohteessa
  `ubuntu-latest` webpackilla. Kun jokainen omasta alkuperästä tullut PR ohjattiin tähän paikkaan,
  Turbopack-`Build` varasi sen 29–58 minuutiksi, 18 `Build`-ajoa jonotti jopa 18 tuntia ja
  julkaisuhaaran oma push-`Build` sai paikan kerran 40 työstä. Ylläpidetyllä suorittimella sama
  PR-`Build` kestää 8–12 minuuttia PR:n muiden töiden rinnalla. Turbopackia, jonka sisältävän
  niputtajan `npm-publish` julkaisee, käytetään julkaisuhaarassa edelleen oletushaaran öisessä
  a11y-koonnissa (04:41 UTC), jokaisessa paikkaan pääsevässä push- tai dispatch-`Build`-ajossa
  sekä itse `npm-publish`-ajossa. `tests/unit/build/heavy-build-queue.test.ts`
  varmistaa neliehtoisena toteutetun portin.
- **Älä koskaan mitoita Turbopack-paikkaa mitattua tarvetta pienemmäksi.** 2026-10-18 klo 18:06
  paikan rajoja laskettiin arvoista 56G/60G arvoihin 40G/44G, jotta `omni-release` saisi tilaa.
  Käännösvaihe pysyi koko ajon ajan `MemoryHigh`-rajalla (muistin PSI `full` 30–43 %), eikä saman
  cgroupin jakava `Runner.Listener` pystynyt uusimaan työtään. Omistajan 2026-10-17 asettamat rajat
  56G/60G palautettiin samana päivänä. Näitä arvoja pienemmillä rajoilla koonti ei epäonnistu;
  se käyttää aikansa muistinhallintaan, ja työ menetetään.
- **Release-Greenillä on oma paikkansa (2026-10-18).** Siihen asti molemmat Release-Green-
  validoinnit suoritettiin kohteessa `omni-build`: jokaisella push-tapahtumalla (~10/tunti,
  97 sadasta push-ajosta peruttiin kesken työn yhden päivän aikana) sekä kolmessa noin 2 tunnin
  täydessä tarkistuksessa päivässä (klo 05:29 alkanut tarkistus odotti paikkaa 6 tuntia) —
  ainoa koontipaikka oli moninkertaisesti ylivarattu, ja omasta alkuperästä tulleiden PR:ien
  `Build`-ajot odottivat tuntikausia. `release-green` ja `main-green` kohdistetaan nyt tunnisteeseen
  `omni-release` (vain `omniroute-113-6`) asetuksella `OMNIROUTE_USE_TURBOPACK=0`, eikä aloitettua
  ajoa enää peruta uudemman push-tapahtuman vuoksi (odottava paikka niputtaa ajoryöpyn edelleen).
  `tests/unit/build/runner-capacity-routing.test.ts` varmistaa reitityksen, webpack-kytkimen ja
  sen, ettei mikään kohteessa `omni-release` käytä koontiin Turbopackia.
- **Kevyt pooli: `omni-light`.** `omniroute-113` ja `omniroute-113-2` suorittavat öiset ajot, jotka
  tarvitsevat vain taustajärjestelmän `next build` -koonnin (~5–6 GB; webpack), sekä
  `quality.yml`-työn `lint-guard`-ajon. Koneella `omniroute-113` oli `MemoryHigh=4G` päivään
  2026-10-18 asti — promptfoo-koonti eteni siellä muistia vapauttamalla 54 minuutin ajan;
  8 GB poistaa kuristuksen.
- **Tarkoituksella vähemmän kuuntelijoita.** Neljä OmniRoute-yksikköä poistettiin käytöstä
  2026-08-29 — jokainen ylimääräinen kuuntelija on uusi muistibudjetin kuluttaja. Siivoojan
  enimmäismäärä on 6 (`MAX_ACTIVE_RUNNERS=6` cronissa): se laskee koneen jokaisen
  `Runner.Listener`-prosessin, ja OmniHeuris + OmniMind lisäävät kaksi meidän neljäämme.
- **Älä koskaan siivoa hakemistoa `/tmp` tai `_work` käsin, kun yksikin suoritusagentti on varattu.**
  Tarkistuksen ja poistamisen tekeminen erikseen siten, että niiden väliin jää aikaa, johti siihen,
  että käynnissä ollut `Build`-työ menetti `_work`-hakemistonsa 2026-08-27. Siivooja tekee
  tarkistuksen ja poistamisen yhdessä vaiheessa; anna sen hoitaa tehtävä.
- Suoritusagentin pysäyttäminen kesken työn peruu työn (havaittu käytössä): suorita
  `systemctl stop` vain, kun sen kuuntelijalla ei ole `Runner.Worker`-lapsiprosessia — ja tee se
  yhdellä komennolla.
- Työnkulut eivät saa jättää artefakteja hakemistoon `/tmp` (se sijaitsee RAM-muistissa). Lataa ne
  kohteeseen `$RUNNER_TEMP` (levyllä, suoritusagenttikohtainen) — 1.3 GB:n `next-build`-artefaktin
  lataaminen tmpfs:ään kesti 27–32 minuuttia, kun taas sen lähettäminen levyltä kesti 2 minuuttia.
- `.15`-VPS on tarkoitettu vain hyväksymistestaukseen — sillä ei koskaan suoriteta CI-suoritusagentteja.
