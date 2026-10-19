# Self-Hosted Runner Box Operations (.113 pool) (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

De self-hosted pool draait op de **.113**-machine (`tomni-proxmox-113`). Sinds 2026-10-18 heeft elke
OmniRoute-runner **één rol**, één label en een geheugen-/CPU-budget dat is afgestemd op het gemeten
verbruik van de workload. Het Turbopack-slot krijgt wat de build nodig heeft; de andere slots zijn
afgestemd op hun gemeten pieken. De machine is alleen overgealloceerd wanneer een Turbopack-build
samenvalt met een Release-Green-webpack-build en een lint-job; de host-swap (16 GB) vangt dat op.
Omdat pull-request-builds op gehoste runners draaien, is het Turbopack-slot meestal inactief:

| runner               | label          | rol                                                                                                                                                       | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-builds: `ci.yml` `Build` (alleen push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, de nachtelijke a11y-build | 56 GB / 60 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-build                                                                                             | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | nachtelijke jobs (Schemathesis, promptfoo, garak, k6, a11y-boot) en `quality.yml` `lint-guard`                                                            | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | dezelfde pool als hierboven                                                                                                                               | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (hun repo's)   | alleen Dependabot (piek van elk 155 MB, 2026-10-18)                                                                                                       | 4 GB / 6 GB                | elk 200 %  |

Gemeten op 2026-10-18:

| resource  | waarde                          | wat dit betekent voor de planning                                                                                                                                                                                                                                                                                                                                                            |
| --------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cores**            | een Turbopack-productiebuild piekte zonder limiet op 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); met Next 16.3.8 gebruikt alleen al de compileerfase circa 40 GB (36 GB RSS in `next-build` plus 17 loader-workers van 3 GB, gemeten op 2026-10-18); een webpack-build gebruikt circa 14–16 GB. Eén Turbopack-build en één webpack-build passen samen; twee Turbopack-builds niet |
| swap      | 16 GB                           | `omniroute-113-5` draait zonder swap (`MemorySwapMax=0`), zodat een op hol geslagen build bij de limiet wordt afgebroken in plaats van de machine te laten swappen                                                                                                                                                                                                                           |
| `/tmp`    | **12 GB tmpfs = RAM**           | alles wat daar wordt geplaatst, neemt geheugen in beslag; achtergebleven bestanden worden na 3 uur opgeruimd                                                                                                                                                                                                                                                                                 |
| CPU       | load 60 op 32 cores waargenomen | vóór de quota's zorgde één Turbopack-build (circa 1166 % CPU), samen met een coverage-suite op dezelfde machine, ervoor dat de heartbeats van de andere listeners geen CPU-tijd kregen (`The self-hosted runner lost communication`, #16853)                                                                                                                                                 |
| runners   | **6 listeners**                 | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` zijn uitgeschakeld (`systemctl enable --now` brengt er één terug)                                                                                                                                                                                                                                                            |

De limieten staan in het bestand `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
van elke unit (de vorige waarden zijn bewaard als `override.conf.bak-20261018`) en zijn live toegepast
met `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — zonder herstart,
zodat geen enkele actieve job werd beïnvloed. Labels worden eveneens live gewijzigd via de runners-API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Installeer de janitor (eenmalig, op de machine)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): elke 30 min, loggen naar /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` is vereist: de janitor stelt met één momentopname van geopende bestanden
vast dat een pad niet in gebruik is voordat het wordt verwijderd, en zonder deze
tool verwijdert hij niets en meldt hij dat ook (exit 1). Probeer elke wijziging
eerst met `--dry-run` — dit toont precies wat er zou gebeuren en wijzigt niets.

Wat hij bij elke uitvoering doet: ruimt onze eigen restanten (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) op na **3 uur op tmpfs** en 24 uur op
`_work/_temp` op schijf; beëindigt een `next-build` die ouder is dan 75 min (geen
enkele job duurt zo lang — op 2026-08-27 draaide er één 70 min nadat GitHub de job
als verloren had beschouwd); verwijdert 48 uur oude check-outs van runners waarvan
de unit **gestopt** is; waarschuwt bij schijfgebruik ≥ 85%, geheugen-PSI
`full/avg60` ≥ 10% en meer listeners dan `MAX_ACTIVE_RUNNERS` (met een uitsplitsing
naar omniroute/overig). Exit 1 = aandacht vereist; lees het logbestand.

De 75-minutenregel detecteert geen build waarvan GitHub de job al heeft opgegeven.
Wanneer de `Runner.Listener` zijn job niet kan verlengen, toont `_diag/Runner_*.log`
`POST request to …/renewjob timed out after 100 seconds`, rapporteert de API de job
ongeveer tien minuten na de laatste geslaagde verlenging als `completed` (mislukt)
en blijft `next-build` actief zonder gekoppelde job (2026-10-18: de Build van #17066
mislukte om 19:43 en de bijbehorende build hield vijf minuten later nog steeds
40 GB bezet). Controleer de ref in het nieuwste `_diag/Worker_*.log` en stuur
vervolgens alleen de buildboom per PID een SIGTERM — `next-build`, `npm run build`,
`build-next-isolated.mjs` en de `_work`-workers. Raak `Runner.Listener`,
`RunnerService.js` of `Runner.Worker` nooit aan: de worker rapporteert de job als
geannuleerd en de listener komt vanzelf weer online.

## Runner-units: KillMode

De standaardinstelling `KillMode=process` van de runner laat `Runner.Worker → npm → next-build`
doorlopen wanneer een unit wordt gestopt of opnieuw gestart — een verweesde build blijft RAM en
CPU verbruiken zonder dat er een job aan gekoppeld is. Elke OmniRoute-unit heeft een drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
met `KillMode=mixed`: eerst SIGTERM naar de listener en vervolgens SIGKILL naar de volledige cgroup bij
`TimeoutStop`. Dit wordt van kracht bij de volgende herstart van de unit — herstart **één runner
tegelijkertijd, alleen wanneer deze inactief is**, met de controle op inactiviteit en de herstart in dezelfde opdracht.

## Operationele regels

- **Eén Turbopack-build tegelijk — afgedwongen via een label.** Elke job die een volledige Turbopack-
  `next build` uitvoert, richt zich op `[self-hosted, omni-build]`, en alleen **`omniroute-113-5`** draagt dat
  label: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  de nachtelijke a11y-build (#16853) en `docker-publish.yml` **amd64** (webpack binnen BuildKit —
  Turbopack crashte daar, run 33253576569). De arm64-Docker-tak blijft op `ubuntu-24.04-arm`.
  `docker-publish` amd64 deelt de concurrencygroep `heavy-build-main` met `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine moet op `omniroute-113-5` staan. Een tweede Turbopack-
  slot past niet binnen 78 GB (2 × 33–37 GB plus de rest van de machine); een tweede slot is alleen veilig voor
  webpack-builds.
- **Pull-request-builds draaien gehost (2026-10-18).** `ci.yml` `Build` bereikt `omni-build` alleen bij
  `push` en `workflow_dispatch`; elke `pull_request`-build (uit de eigen repository of een fork) en elke `merge_group`-build
  draait op `ubuntu-latest` met webpack. Toen elke PR uit de eigen repository naar het slot werd geleid, hield een Turbopack-
  build dit 29–58 min bezet, stonden 18 builds tot 18 uur in de wachtrij en kreeg de eigen push-build van de releaselijn
  het slot slechts één keer in 40 jobs. Gehost duurt dezelfde PR-build 8–12 min naast de andere
  jobs van de PR. Turbopack, de bundler die door `npm-publish` wordt uitgebracht, blijft op de releaselijn
  getest via de nachtelijke a11y-build van de standaardbranch (04:41 UTC), via elke push- of dispatch-build die
  het slot bereikt en via `npm-publish` zelf. `tests/unit/build/heavy-build-queue.test.ts`
  borgt de gate met vier voorwaarden.
- **Maak het Turbopack-slot nooit kleiner dan de gemeten behoefte.** Op 2026-10-18 om 18:06 werd het slot
  verlaagd van 56G/60G naar 40G/44G om ruimte te maken voor `omni-release`. De compileerfase bleef gedurende de
  volledige uitvoering tegen de `MemoryHigh`-grens aan zitten (memory PSI `full` 30–43%), en de `Runner.Listener`, die
  dezelfde cgroup deelt, kon zijn job niet verlengen. De instellingen van de eigenaar van 2026-10-17, 56G/60G, werden
  diezelfde dag hersteld. Onder die waarde mislukt de build niet; hij raakt voortdurend aan het thrashen en de job gaat verloren.
- **Release-Green heeft een eigen slot (2026-10-18).** Tot dan draaiden beide Release-Green-validaties
  op `omni-build`: bij elke push (~10/uur, waarbij 97 van de 100 push-runs op één dag halverwege werden geannuleerd)
  en drie volledige controles van ~2 uur per dag (de controle van 05:29 wachtte 6 uur op het slot) — het enige build-
  slot was meerdere malen overbezet en PR-builds uit de eigen repository wachtten uren.
  `release-green` en `main-green` richten zich nu op `omni-release` (alleen `omniroute-113-6`) met
  `OMNIROUTE_USE_TURBOPACK=0`, en een gestarte run wordt niet langer geannuleerd door een nieuwere push (het
  wachtende slot laat de storm nog steeds samenvallen). `tests/unit/build/runner-capacity-routing.test.ts`
  borgt de routering, de webpack-schakelaar en dat niets op `omni-release` met Turbopack wordt gebouwd.
- **Lichte pool: `omni-light`.** `omniroute-113` en `omniroute-113-2` voeren de nachtelijke jobs uit die
  een uitsluitend voor de backend bedoelde `next build` nodig hebben (~5–6 GB; webpack), evenals `quality.yml` `lint-guard`.
  `omniroute-113` had tot 2026-10-18 `MemoryHigh=4G` — de promptfoo-build worstelde zich daar in 54 minuten
  doorheen via geheugenreclamatie; 8 GB voorkomt de throttling.
- **Bewust minder listeners.** Vier OmniRoute-units werden op 2026-08-29 uitgeschakeld — elke extra
  listener is een extra gebruiker van het bovenstaande geheugenbudget. De bovengrens van de janitor is 6 (`MAX_ACTIVE_RUNNERS=6` in cron): deze telt
  elke `Runner.Listener` op de machine, en OmniHeuris + OmniMind voegen er twee toe aan onze vier.
- **Ruim `/tmp` of `_work` nooit handmatig op terwijl een runner bezig is.** Een
  controle gevolgd door verwijdering, met een tussenpoos tussen beide, zorgde ervoor dat een actieve Build-job op
  2026-08-27 zijn `_work` verloor. De janitor voert de controle en verwijdering in één stap uit;
  laat die dit doen.
- Als een runner midden in een job wordt gestopt, wordt de job geannuleerd (live waargenomen): gebruik `systemctl stop` alleen
  wanneer de listener geen onderliggend `Runner.Worker`-proces heeft — en doe dit in één commando.
- Workflows mogen geen artefacten in `/tmp` plaatsen (dit bevindt zich in het RAM). Download naar
  `$RUNNER_TEMP` (op schijf, per runner) — het `next-build`-artefact van 1,3 GB deed er 27–32
  minuten over om op de tmpfs terecht te komen en 2 minuten om vanaf schijf te uploaden.
- De `.15`-VPS is uitsluitend voor homologatie — hierop draaien nooit CI-runners.
