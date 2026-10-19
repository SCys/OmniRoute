# Self-Hosted Runner Box Operations (.113 pool) (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Den selvdrevne puljen kjører på **.113**-serveren (`tomni-proxmox-113`). Siden 2026-10-18 har hver
OmniRoute-runner **én rolle**, én etikett og et minne-/CPU-budsjett tilpasset den målte belastningen.
Turbopack-plassen får det byggejobben trenger; de andre plassene er dimensjonert etter de
målte toppene. Serveren overallokerer bare når en Turbopack-byggejobb sammenfaller med en Release-Green-
webpack-byggejobb og en lint-jobb; vertens swap (16 GB) håndterer dette, og fordi byggejobber for pull requests kjører
på driftede runners, er Turbopack-plassen inaktiv mesteparten av tiden:

| runner               | etikett        | rolle                                                                                                                                                           | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-byggejobber: `ci.yml` `Build` (kun push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, den nattlige a11y-byggejobben | 56 GB / 60 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-byggejobb                                                                                               | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | nattlige jobber (Schemathesis, promptfoo, garak, k6, a11y-oppstart) og `quality.yml` `lint-guard`                                                               | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | samme pulje som ovenfor                                                                                                                                         | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (deres repoer) | kun Dependabot (topp på 155 MB hver, 2026-10-18)                                                                                                                | 4 GB / 6 GB                | 200 % hver |

Målt 2026-10-18:

| ressurs   | verdi                                 | hva det betyr for planlegging                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 kjerner**                | en Turbopack-produksjonsbyggejobb nådde en topp på 49 GB uten begrensning (`tests/unit/ci-build-bundler-webpack.test.ts`); i Next 16.3.8 bruker kompileringsfasen alene ~40 GB (36 GB RSS i `next-build` pluss 17 loader-workers på 3 GB, målt 2026-10-18); en webpack-byggejobb bruker ~14–16 GB. Én Turbopack- og én webpack-byggejobb kan kjøre samtidig; to Turbopack-byggejobber kan ikke |
| swap      | 16 GB                                 | `omniroute-113-5` kjører med swap deaktivert (`MemorySwapMax=0`), slik at en løpsk byggejobb stoppes ved grensen i stedet for å få serveren til å swappe                                                                                                                                                                                                                                       |
| `/tmp`    | **12 GB tmpfs = RAM**                 | alt som plasseres der, bruker minne; gjenværende filer ryddes etter 3 t                                                                                                                                                                                                                                                                                                                        |
| CPU       | belastning 60 observert på 32 kjerner | før kvotene førte én Turbopack-byggejobb (~1166 % CPU) sammen med en coverage-testserie på samme server til at heartbeat-signalene til de andre lytterne ikke fikk ressurser (`The self-hosted runner lost communication`, #16853)                                                                                                                                                             |
| runners   | **6 lyttere**                         | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` er deaktivert (`systemctl enable --now` aktiverer én igjen)                                                                                                                                                                                                                                                                    |

Grensene ligger i hver tjenesteenhets `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(tidligere verdier er beholdt som `override.conf.bak-20261018`) og ble tatt i bruk direkte med
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — uten omstart, så ingen
kjørende jobb ble berørt. Etiketter endres via runners-API-et
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), også direkte.

## Installer opprydderen (én gang, på maskinen)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): hvert 30. minutt, logg til /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` er påkrevd: Opprydderen bekrefter at en sti er inaktiv ved hjelp av ett øyeblikksbilde av åpne
filer før den fjernes, og uten verktøyet fjerner den ingenting og gir beskjed om det
(exit 1). Prøv alle endringer med `--dry-run` først — da skrives det ut nøyaktig hva den ville
gjort, uten at noe endres.

Dette gjør den ved hver kjøring: rydder opp i våre egne etterlatenskaper (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) etter **3 t på tmpfs** og 24 t på diskbasert
`_work/_temp`; avslutter en `next-build` som er eldre enn 75 min (ingen jobber kjører så lenge — den
2026-08-27 kjørte én i 70 min etter at GitHub hadde erklært jobben som tapt); fjerner 48 t gamle
utsjekkinger for runners der enheten er **stoppet**; varsler ved diskbruk ≥ 85 %, minne-PSI
`full/avg60` ≥ 10 % og flere lyttere enn `MAX_ACTIVE_RUNNERS` (med en
omniroute/annet-fordeling). Exit 1 = krever oppmerksomhet; les loggen.

75-minuttersregelen oppdager ikke en build som GitHub allerede har gitt opp. Når
`Runner.Listener` ikke kan fornye jobben, viser `_diag/Runner_*.log`
`POST request to …/renewjob timed out after 100 seconds`, API-et rapporterer jobben som `completed`
(`failure`) omtrent ti minutter etter den siste vellykkede fornyelsen, og `next-build` fortsetter å kjøre
uten en tilknyttet jobb (2026-10-18: Build-jobben for #17066 feilet kl. 19:43, og build-prosessen holdt
fortsatt av 40 GB fem minutter senere). Bekreft ref-en i den nyeste `_diag/Worker_*.log`, og send
SIGTERM kun til build-prosesstreet etter PID — `next-build`, `npm run build`, `build-next-isolated.mjs` og
`_work`-arbeidsprosessene. Ikke rør `Runner.Listener`, `RunnerService.js` eller `Runner.Worker`:
Arbeidsprosessen rapporterer jobben som avbrutt, og lytteren kobler seg til igjen av seg selv.

## Runner-enheter: KillMode

Runnerens standardinnstilling `KillMode=process` lar `Runner.Worker → npm → next-build`
fortsette å kjøre når en enhet stoppes eller startes på nytt — en foreldreløs byggprosess fortsetter å bruke RAM og
CPU uten at noen jobb er tilknyttet. Hver OmniRoute-enhet har en drop-in-fil
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
med `KillMode=mixed`: SIGTERM til lytteren først, deretter SIGKILL til hele cgroup-en ved
`TimeoutStop`. Den trer i kraft ved enhetens neste omstart — start **én runner om
gangen på nytt, og bare når den er inaktiv**, med inaktivitetskontrollen og omstarten i samme kommando.

## Driftsregler

- **Én Turbopack-bygging om gangen — håndhevet med etikett.** Hver jobb som kjører en fullstendig Turbopack-
  `next build`, målrettes mot `[self-hosted, omni-build]`, og bare **`omniroute-113-5`** har denne
  etiketten: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  den nattlige a11y-byggingen (#16853) og `docker-publish.yml` **amd64** (webpack inne i BuildKit —
  Turbopack krasjet der, kjøring 33253576569). Docker-delen for arm64 forblir på `ubuntu-24.04-arm`.
  `docker-publish` amd64 deler samtidighetsgruppen `heavy-build-main` med `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine må være på `omniroute-113-5`. Det er ikke plass til
  en ekstra Turbopack-plass innenfor 78 GB (2 × 33–37 GB pluss resten av maskinen); en ekstra plass
  er bare trygg for webpack-bygginger.
- **Bygginger for pull-forespørsler kjører driftet (2026-10-18).** `ci.yml` `Build` når bare
  `omni-build` for `push` og `workflow_dispatch`; hver `pull_request`-bygging (fra eget opphav eller
  en fork) og `merge_group`-bygging kjører på `ubuntu-latest` med webpack. Da alle PR-er fra eget
  opphav ble sendt til plassen, holdt en Turbopack-bygging den opptatt i 29–58 min, 18 bygginger
  sto i kø i opptil 18 t, og utgivelsesgrenens egen push-bygging fikk plassen én gang på 40 jobber.
  Driftet tar den samme PR-byggingen 8–12 min sammen med PR-ens andre jobber. Turbopack, pakkeren
  som `npm-publish` leverer, blir fortsatt testet på utgivelsesgrenen gjennom den nattlige
  a11y-byggingen av standardgrenen (04:41 UTC), gjennom hver push- eller dispatch-bygging som når
  plassen, og gjennom selve `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  låser porten med fire betingelser.
- **Dimensjoner aldri Turbopack-plassen under det målte behovet.** Den 2026-10-18 kl. 18:06 ble
  plassen redusert fra 56G/60G til 40G/44G for å gi plass til `omni-release`. Kompileringsfasen lå
  ved `MemoryHigh` gjennom hele kjøringen (minne-PSI `full` 30–43 %), og `Runner.Listener`, som
  deler cgroup-en, klarte ikke å fornye jobben sin. Eierens 56G/60G fra 2026-10-17 ble gjenopprettet
  samme dag. Under denne verdien feiler ikke byggingen; den bruker tiden på minneveksling, og jobben
  går tapt.
- **Release-Green har sin egen plass (2026-10-18).** Frem til da kjørte begge Release-Green-
  valideringene på `omni-build`: ved hver push (~10/time, 97 av 100 push-kjøringer kansellert
  midtveis i arbeidet på én dag) og tre fullstendige gjennomganger på ~2 t per dag (gjennomgangen
  kl. 05:29 ventet 6 t på plassen) — den ene byggeplassen var overbooket flere ganger, og
  PR-bygginger fra eget opphav ventet i timevis. `release-green` og `main-green` målrettes nå mot
  `omni-release` (kun `omniroute-113-6`) med `OMNIROUTE_USE_TURBOPACK=0`, og en startet kjøring
  kanselleres ikke lenger av en nyere push (den ventende plassen slår fortsatt sammen stormen).
  `tests/unit/build/runner-capacity-routing.test.ts` låser rutingen, webpack-bryteren og at ingenting
  på `omni-release` bygges med Turbopack.
- **Lettvektsgruppe: `omni-light`.** `omniroute-113` og `omniroute-113-2` kjører de nattlige
  jobbene som trenger en `next build` kun for backend (~5–6 GB; webpack), samt `quality.yml`
  `lint-guard`. `omniroute-113` hadde `MemoryHigh=4G` frem til 2026-10-18 — promptfoo-byggingen
  gjenvant minne kontinuerlig gjennom 54 minutter der; 8 GB fjerner strupingen.
- **Færre lyttere med hensikt.** Fire OmniRoute-enheter ble deaktivert 2026-08-29 — hver ekstra
  lytter er enda en leietaker i minnebudsjettet ovenfor. Renholderens øvre grense er 6
  (`MAX_ACTIVE_RUNNERS=6` i cron): den teller hver `Runner.Listener` på maskinen, og OmniHeuris +
  OmniMind legger til to utover våre fire.
- **Rydd aldri `/tmp` eller `_work` manuelt mens en runner er opptatt.** En
  kontroller-og-slett-operasjon med et opphold mellom de to trinnene førte til at en aktiv
  Build-jobb mistet sin `_work` 2026-08-27. Renholderen utfører kontrollen og fjerningen i ett
  trinn; la den gjøre det.
- Å stoppe en runner midt i en jobb kansellerer jobben (observert i drift): Bruk bare
  `systemctl stop` når lytteren ikke har en underordnet `Runner.Worker`-prosess — og gjør det i
  én kommando.
- Arbeidsflyter må ikke parkere artefakter i `/tmp` (det er RAM). Last ned til
  `$RUNNER_TEMP` (på disk, per runner) — artefakten `next-build` på 1,3 GB brukte 27–32
  minutter på å lande på tmpfs og 2 minutter på å lastes opp fra disk.
- VPS-en `.15` er kun for homologering — den kjører aldri CI-runnere.
