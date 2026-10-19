# Self-Hosted Runner Box Operations (.113 pool) (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Der selbst gehostete Pool läuft auf der **.113**-Maschine (`tomni-proxmox-113`). Seit dem 2026-10-18 hat jeder
OmniRoute-Runner **eine Rolle**, ein Label und ein Arbeitsspeicher-/CPU-Budget, das an der gemessenen
Auslastung seines Workloads bemessen ist. Der Turbopack-Slot erhält die für den Build erforderlichen Ressourcen; die anderen Slots sind entsprechend ihren
gemessenen Spitzenwerten dimensioniert. Die Maschine ist nur dann überbucht, wenn ein Turbopack-Build gleichzeitig mit einem Release-Green-
webpack-Build und einem Lint-Job läuft; der Host-Swap (16 GB) fängt das ab, und da Builds für Pull Requests
gehostet ausgeführt werden, ist der Turbopack-Slot die meiste Zeit inaktiv:

| Runner               | Label          | Rolle                                                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-Builds: `ci.yml` `Build` (nur Push/Dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, der nächtliche a11y-Build | 56 GB / 60 GB (Swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-Build                                                                                          | 20 GB / 24 GB (Swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`   | nächtliche Läufe (Schemathesis, promptfoo, garak, k6, a11y-Start) und `quality.yml` `lint-guard`                                                       | 12 GB / 16 GB (Swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`   | derselbe Pool wie oben                                                                                                                                 | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (ihre Repos)   | nur Dependabot (Spitzenwert jeweils 155 MB, 2026-10-18)                                                                                                | 4 GB / 6 GB                | jeweils 200 % |

Gemessen am 2026-10-18:

| Ressource | Wert                             | Bedeutung für die Planung                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 Kerne**             | ein Turbopack-Produktions-Build erreichte ohne Begrenzung einen Spitzenwert von 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); unter Next 16.3.8 belegt allein die Kompilierungsphase etwa 40 GB (36 GB RSS in `next-build` plus 17 Loader-Worker mit 3 GB, gemessen am 2026-10-18); ein webpack-Build etwa 14–16 GB. Ein Turbopack- und ein webpack-Build passen gleichzeitig; zwei Turbopack-Builds nicht |
| Swap      | 16 GB                            | `omniroute-113-5` läuft mit deaktiviertem Swap (`MemorySwapMax=0`), sodass ein außer Kontrolle geratener Build beim Erreichen seines Limits beendet wird, anstatt die Maschine zum Swappen zu bringen                                                                                                                                                                                                               |
| `/tmp`    | **12 GB tmpfs = RAM**            | alles, was dort abgelegt wird, belegt Arbeitsspeicher; Rückstände werden nach 3 h entfernt                                                                                                                                                                                                                                                                                                                          |
| CPU       | Load 60 auf 32 Kernen beobachtet | vor Einführung der Quoten entzog ein Turbopack-Build (~1166 % CPU) zusammen mit einer Coverage-Suite auf derselben Maschine den Heartbeats der anderen Listener Ressourcen (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                    |
| Runner    | **6 Listener**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sind deaktiviert (`systemctl enable --now` aktiviert einen davon wieder)                                                                                                                                                                                                                                                                            |

Die Limits befinden sich in der Datei `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
der jeweiligen Unit (vorherige Werte wurden als `override.conf.bak-20261018` beibehalten) und wurden im laufenden Betrieb mit
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` angewendet — ohne Neustart, sodass kein
laufender Job beeinträchtigt wurde. Labels werden über die Runner-API geändert
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), ebenfalls im laufenden Betrieb.

## Janitor installieren (einmalig auf dem Server)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): alle 30 Minuten, Protokollierung nach /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` ist erforderlich: Der Janitor weist anhand einer Momentaufnahme der geöffneten
Dateien nach, dass ein Pfad inaktiv ist, bevor er ihn entfernt. Ohne dieses Werkzeug
entfernt er nichts und meldet dies entsprechend (Exit-Code 1). Testen Sie jede Änderung
zuerst mit `--dry-run` — dabei wird exakt ausgegeben, was ausgeführt würde, ohne etwas zu
verändern.

Was bei jedem Durchlauf geschieht: Eigene Überreste (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) werden nach **3 h auf tmpfs** bzw. nach 24 h auf
dem Datenträger unter `_work/_temp` beseitigt; ein `next-build`, das älter als 75 Minuten
ist, wird beendet (kein Job läuft so lange — am 2026-08-27 lief einer noch 70 Minuten
weiter, nachdem GitHub den zugehörigen Job bereits als verloren eingestuft hatte);
48 Stunden alte Checkouts von Runnern, deren Unit **gestoppt** ist, werden entfernt;
bei einer Datenträgerauslastung von ≥ 85 %, einem Speicher-PSI-Wert
`full/avg60` von ≥ 10 % und mehr Listenern als `MAX_ACTIVE_RUNNERS` wird gewarnt
(mit einer Aufschlüsselung nach omniroute/sonstigen). Exit-Code 1 = Eingreifen
erforderlich; lesen Sie das Protokoll.

Die 75-Minuten-Regel erkennt keinen Build, dessen Job von GitHub bereits aufgegeben wurde. Wenn
der `Runner.Listener` seinen Job nicht verlängern kann, enthält `_diag/Runner_*.log`
die Meldung `POST request to …/renewjob timed out after 100 seconds`, die API meldet den Job etwa
zehn Minuten nach der letzten erfolgreichen Verlängerung als `completed` (fehlgeschlagen), und
`next-build` läuft ohne zugehörigen Job weiter (2026-10-18: Der Build von #17066 wurde um 19:43
als fehlgeschlagen markiert, und sein Build belegte fünf Minuten später noch immer 40 GB).
Überprüfen Sie den Ref im neuesten `_diag/Worker_*.log` und senden Sie dann nur dem Build-Prozessbaum
anhand der PID ein SIGTERM — `next-build`, `npm run build`, `build-next-isolated.mjs` und
die `_work`-Worker. Beenden Sie niemals `Runner.Listener`, `RunnerService.js` oder `Runner.Worker`:
Der Worker meldet den Job als abgebrochen, und der Listener geht von selbst wieder online.

## Runner-Units: KillMode

Das standardmäßige `KillMode=process` des Runners lässt `Runner.Worker → npm → next-build`
weiterlaufen, wenn eine Unit gestoppt oder neu gestartet wird — ein verwaister Build verbraucht
weiterhin RAM und CPU, ohne dass ihm ein Job zugeordnet ist. Jede OmniRoute-Unit verfügt über ein Drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
mit `KillMode=mixed`: zuerst SIGTERM an den Listener, dann bei
`TimeoutStop` SIGKILL an die gesamte cgroup. Es wird beim nächsten Neustart der Unit wirksam — starten Sie
**jeweils nur einen Runner und nur im Leerlauf** neu, wobei sich die Leerlaufprüfung und der Neustart
im selben Befehl befinden müssen.

## Betriebsregeln

- **Immer nur ein Turbopack-Build gleichzeitig — durch ein Label erzwungen.** Jeder Job, der einen vollständigen Turbopack-
  `next build` ausführt, verwendet `[self-hosted, omni-build]`, und nur **`omniroute-113-5`** trägt dieses
  Label: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  der nächtliche a11y-Build (#16853) und `docker-publish.yml` **amd64** (webpack innerhalb von BuildKit —
  Turbopack stürzte dort mit einer Panic ab, Lauf 33253576569). Der arm64-Docker-Zweig bleibt auf `ubuntu-24.04-arm`.
  `docker-publish` amd64 teilt sich die Concurrency-Gruppe `heavy-build-main` mit `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine muss auf `omniroute-113-5` laufen. Ein zweiter Turbopack-
  Slot passt nicht in 78 GB (2 × 33–37 GB plus der Rest des Systems); ein zweiter Slot ist nur für
  webpack-Builds sicher.
- **Pull-Request-Builds laufen auf gehosteten Runnern (2026-10-18).** `ci.yml` `Build` erreicht `omni-build` nur bei
  `push` und `workflow_dispatch`; jeder `pull_request`-Build (aus dem eigenen Repository oder einem Fork) sowie jeder `merge_group`-Build
  läuft mit webpack auf `ubuntu-latest`. Als jeder PR aus dem eigenen Repository dem Slot zugewiesen wurde, belegte ein Turbopack-
  Build diesen 29–58 Minuten lang, 18 Builds standen bis zu 18 Stunden in der Warteschlange, und der eigene Push-Build
  des Release-Zweigs erhielt den Slot einmal in 40 Jobs. Auf gehosteten Runnern benötigt derselbe PR-Build 8–12 Minuten parallel zu den anderen
  Jobs des PRs. Turbopack, der Bundler, den `npm-publish` ausliefert, wird auf dem Release-Zweig weiterhin
  durch den nächtlichen a11y-Build des Standard-Branches (04:41 UTC), durch jeden Push- oder Dispatch-Build, der
  den Slot erreicht, sowie durch `npm-publish` selbst ausgeführt. `tests/unit/build/heavy-build-queue.test.ts`
  schreibt die aus vier Bedingungen bestehende Zugangslogik fest.
- **Den Turbopack-Slot niemals kleiner als den gemessenen Bedarf dimensionieren.** Am 2026-10-18 um 18:06 wurde der Slot
  von 56G/60G auf 40G/44G verkleinert, um Platz für `omni-release` zu schaffen. Die Kompilierungsphase lag während des
  gesamten Laufs am `MemoryHigh`-Limit (Speicher-PSI `full` 30–43 %), und der `Runner.Listener`, der
  dieselbe cgroup verwendet, konnte seinen Job nicht verlängern. Die vom Eigentümer am 2026-10-17 festgelegten 56G/60G wurden noch am
  selben Tag wiederhergestellt. Unterhalb dieses Werts schlägt der Build nicht fehl; er gerät in Thrashing, und der Job geht verloren.
- **Release-Green hat einen eigenen Slot (2026-10-18).** Bis dahin liefen beide Release-Green-Validierungen
  auf `omni-build`: bei jedem Push (~10/Stunde, 97 von 100 Push-Läufen an einem Tag während der Ausführung abgebrochen)
  und bei drei vollständigen, jeweils etwa 2 Stunden dauernden Durchläufen pro Tag (der Durchlauf um 05:29 wartete 6 Stunden auf den Slot) — der einzelne Build-
  Slot war um ein Mehrfaches überbelegt, und PR-Builds aus dem eigenen Repository warteten stundenlang.
  `release-green` und `main-green` verwenden jetzt `omni-release` (ausschließlich `omniroute-113-6`) mit
  `OMNIROUTE_USE_TURBOPACK=0`, und ein gestarteter Lauf wird nicht mehr durch einen neueren Push abgebrochen (der
  ausstehende Slot fasst die Flut weiterhin zusammen). `tests/unit/build/runner-capacity-routing.test.ts`
  schreibt das Routing, die webpack-Umschaltung und die Bedingung fest, dass auf `omni-release` nichts mit Turbopack gebaut wird.
- **Pool für leichte Aufgaben: `omni-light`.** `omniroute-113` und `omniroute-113-2` führen die nächtlichen Jobs aus, die
  einen reinen Backend-`next build` (~5–6 GB; webpack) benötigen, sowie `quality.yml` `lint-guard`. `omniroute-113`
  hatte bis zum 2026-10-18 `MemoryHigh=4G` — der promptfoo-Build kämpfte sich dort 54 Minuten lang unter Speicherrückgewinnung
  durch; 8 GB beseitigen die Drosselung.
- **Absichtlich weniger Listener.** Vier OmniRoute-Units wurden am 2026-08-29 deaktiviert — jeder zusätzliche
  Listener ist ein weiterer Verbraucher des oben genannten Speicherbudgets. Die Obergrenze des Janitors liegt bei 6 (`MAX_ACTIVE_RUNNERS=6` im Cronjob): Er zählt
  jeden `Runner.Listener` auf dem System, und OmniHeuris + OmniMind ergänzen unsere vier um zwei weitere.
- **`/tmp` oder `_work` niemals manuell bereinigen, solange irgendein Runner beschäftigt ist.** Eine
  Prüfung mit anschließender, zeitlich verzögerter Löschung führte dazu, dass ein laufender Build-Job am
  2026-08-27 sein `_work` verlor. Der Janitor führt die Prüfung und die Entfernung in einem Schritt aus;
  überlasse ihm diese Aufgabe.
- Das Stoppen eines Runners während eines Jobs bricht den Job ab (im laufenden Betrieb beobachtet): `systemctl stop` nur
  dann ausführen, wenn sein Listener keinen untergeordneten `Runner.Worker`-Prozess hat — und dies in einem einzigen Befehl tun.
- Workflows dürfen keine Artefakte in `/tmp` ablegen (es liegt im RAM). Downloads gehören nach
  `$RUNNER_TEMP` (pro Runner auf der Festplatte) — das 1,3 GB große `next-build`-Artefakt benötigte 27–32
  Minuten, um im tmpfs anzukommen, und 2 Minuten für den Upload von der Festplatte.
- Der `.15`-VPS dient ausschließlich der Homologation — darauf laufen niemals CI-Runner.
