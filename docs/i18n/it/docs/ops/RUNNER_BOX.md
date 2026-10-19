# Self-Hosted Runner Box Operations (.113 pool) (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Il pool self-hosted viene eseguito sulla macchina **.113** (`tomni-proxmox-113`). Dal 2026-10-18 ogni
runner OmniRoute ha **un solo ruolo**, un'etichetta e un budget di memoria/CPU dimensionato in base
al carico di lavoro misurato. Lo slot Turbopack riceve le risorse necessarie alla build; gli altri slot
sono dimensionati in base ai rispettivi picchi misurati. La macchina effettua sovrallocazione solo quando
una build Turbopack coincide con una build webpack Release-Green e un job di lint; lo swap dell'host
(16 GB) assorbe tale carico e, poiché le `Build` delle pull request vengono eseguite su runner ospitati,
lo slot Turbopack rimane inattivo per la maggior parte del tempo:

| runner               | etichetta      | ruolo                                                                                                                                               | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`   | Build Turbopack: `ci.yml` `Build` (solo push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, la build a11y notturna | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), build webpack                                                                                       | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`   | job notturni (Schemathesis, promptfoo, garak, k6, avvio a11y) e `quality.yml` `lint-guard`                                                          | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`   | stesso pool indicato sopra                                                                                                                          | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (i loro repo)  | Solo Dependabot (picco di 155 MB ciascuno, 2026-10-18)                                                                                              | 4 GB / 6 GB                | 200 % ciascuno |

Misurazioni del 2026-10-18:

| risorsa   | valore                        | implicazioni per la pianificazione                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 core**           | una build di produzione Turbopack senza limiti ha raggiunto un picco di 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); su Next 16.3.8, la sola fase di compilazione occupa ~40 GB (36 GB di RSS in `next-build` più 17 worker del loader da 3 GB, misurato il 2026-10-18); una build webpack occupa ~14–16 GB. Una build Turbopack e una webpack possono essere eseguite insieme; due build Turbopack no |
| swap      | 16 GB                         | `omniroute-113-5` viene eseguito con lo swap disabilitato (`MemorySwapMax=0`), così una build fuori controllo viene terminata al raggiungimento del limite anziché mandare in swap la macchina                                                                                                                                                                                                                   |
| `/tmp`    | **12 GB tmpfs = RAM**         | tutto ciò che viene memorizzato lì occupa memoria; i residui vengono eliminati dopo 3 ore                                                                                                                                                                                                                                                                                                                        |
| CPU       | carico 60 su 32 core rilevato | prima dell'introduzione delle quote, una build Turbopack (~1166 % CPU) insieme a una suite di copertura sulla stessa macchina privava gli altri listener delle risorse necessarie per gli heartbeat (`The self-hosted runner lost communication`, #16853)                                                                                                                                                        |
| runner    | **6 listener**                | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sono disabilitati (`systemctl enable --now` ne riattiva uno)                                                                                                                                                                                                                                                                                     |

I limiti si trovano nel file `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` di ogni unità
(i valori precedenti sono conservati come `override.conf.bak-20261018`) e sono stati applicati in tempo
reale con `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…`, senza riavvio,
quindi nessun job in esecuzione è stato interessato. Le etichette vengono modificate tramite l'API dei runner
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), anche in questo caso in tempo reale.

## Installare il janitor (una sola volta, sulla macchina)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ogni 30 minuti, log in /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` è obbligatorio: prima di rimuovere un percorso, il janitor verifica che sia inattivo tramite una singola istantanea dei file aperti; senza questo strumento non rimuove nulla e lo segnala (exit 1). Provare prima qualsiasi modifica con `--dry-run`: stampa esattamente ciò che farebbe senza modificare nulla.

Operazioni eseguite a ogni avvio: elimina i nostri residui (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) dopo **3 h su tmpfs** e 24 h su `_work/_temp` su disco; termina un `next-build` più vecchio di 75 min (nessun job dura così a lungo: il 2026-08-27 uno è rimasto in esecuzione per 70 min dopo che GitHub aveva dichiarato perso il relativo job); elimina i checkout più vecchi di 48 h dei runner la cui unità è **arrestata**; genera avvisi quando l'utilizzo del disco è ≥ 85%, il PSI della memoria `full/avg60` è ≥ 10% e il numero di listener supera `MAX_ACTIVE_RUNNERS` (con suddivisione tra omniroute e altri). Exit 1 = intervento necessario; leggere il log.

La regola dei 75 minuti non rileva una build il cui job è già stato abbandonato da GitHub. Quando `Runner.Listener` non riesce a rinnovare il proprio job, `_diag/Runner_*.log` mostra `POST request to …/renewjob timed out after 100 seconds`, l'API segnala il job come `completed` (errore) circa dieci minuti dopo l'ultimo rinnovo riuscito e `next-build` continua l'esecuzione senza alcun job associato (2026-10-18: la Build di #17066 è stata contrassegnata come non riuscita alle 19:43 e cinque minuti dopo la relativa build occupava ancora 40 GB). Verificare il ref nel file `_diag/Worker_*.log` più recente, quindi inviare SIGTERM esclusivamente all'albero dei processi della build in base al PID: `next-build`, `npm run build`, `build-next-isolated.mjs` e i worker di `_work`. Non intervenire mai su `Runner.Listener`, `RunnerService.js` o `Runner.Worker`: il worker segnala il job come annullato e il listener torna online autonomamente.

## Unità runner: KillMode

Il valore predefinito `KillMode=process` del runner lascia in vita
`Runner.Worker → npm → next-build` quando un'unità viene arrestata o riavviata:
una build orfana continua a consumare RAM e CPU senza alcun job associato. Ogni
unità OmniRoute contiene un drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
con `KillMode=mixed`: prima SIGTERM al listener, poi SIGKILL all'intero cgroup al
raggiungimento di `TimeoutStop`. Diventa effettivo al successivo riavvio
dell'unità: riavviare **un solo runner alla volta, esclusivamente quando è
inattivo**, eseguendo il controllo dello stato di inattività e il riavvio nello
stesso comando.

## Regole operative

- **Una build Turbopack alla volta — imposto tramite etichetta.** Ogni job che esegue una build Turbopack completa
  `next build` ha come destinazione `[self-hosted, omni-build]`, e soltanto **`omniroute-113-5`** possiede tale
  etichetta: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  la build a11y notturna (#16853) e `docker-publish.yml` **amd64** (webpack all'interno di BuildKit —
  Turbopack è andato in panic lì, esecuzione 33253576569). Il ramo Docker arm64 rimane su `ubuntu-24.04-arm`.
  `docker-publish` amd64 condivide il gruppo di concorrenza `heavy-build-main` con `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine deve essere presente su `omniroute-113-5`. Un secondo slot Turbopack
  non rientra nei 78 GB (2 × 33–37 GB più il resto del sistema); un secondo slot è sicuro soltanto per
  le build webpack.
- **Le build delle pull request vengono eseguite su runner ospitati (2026-10-18).** `ci.yml` `Build` raggiunge `omni-build` soltanto per
  `push` e `workflow_dispatch`; ogni build `pull_request` (dell'origine stessa o di un fork) e `merge_group`
  viene eseguita su `ubuntu-latest` con webpack. Quando ogni PR dell'origine stessa veniva instradata verso lo slot, una build Turbopack
  lo occupava per 29–58 min, 18 build rimanevano in coda fino a 18 h e la build push del ramo di release
  otteneva lo slot una volta ogni 40 job. Sui runner ospitati, la stessa build della PR richiede 8–12 min insieme agli altri
  job della PR. Turbopack, il bundler distribuito da `npm-publish`, continua a essere testato sul ramo di release tramite la
  build a11y notturna del ramo predefinito (04:41 UTC), tramite ogni build push o dispatch che
  raggiunge lo slot e tramite `npm-publish` stesso. `tests/unit/build/heavy-build-queue.test.ts`
  vincola la condizione a quattro clausole.
- **Non dimensionare mai lo slot Turbopack al di sotto del fabbisogno misurato.** Il 2026-10-18 alle 18:06 lo slot è stato
  ridotto da 56G/60G a 40G/44G per fare spazio a `omni-release`. La fase di compilazione è rimasta al
  `MemoryHigh` per l'intera esecuzione (PSI della memoria `full` al 30–43 %) e il `Runner.Listener`, che
  condivide il cgroup, non è riuscito a rinnovare il proprio job. I valori 56G/60G del proprietario, risalenti al 2026-10-17, sono stati ripristinati
  lo stesso giorno. Al di sotto di questi valori la build non fallisce: entra in thrashing e il job viene perso.
- **Release-Green dispone di uno slot dedicato (2026-10-18).** Fino ad allora entrambe le convalide Release-Green venivano eseguite
  su `omni-build`: a ogni push (~10/ora, 97 esecuzioni push su 100 annullate durante l'elaborazione in un solo giorno)
  e tre verifiche complete da ~2 h al giorno (quella delle 05:29 ha atteso 6 h per lo slot) — il singolo slot di build
  era sovrautilizzato più volte e le build delle PR dell'origine stessa attendevano per ore.
  `release-green` e `main-green` ora hanno come destinazione `omni-release` (soltanto `omniroute-113-6`) con
  `OMNIROUTE_USE_TURBOPACK=0`, e un'esecuzione avviata non viene più annullata da un push più recente (lo
  slot in attesa continua comunque a comprimere la raffica). `tests/unit/build/runner-capacity-routing.test.ts`
  vincola l'instradamento, l'uso di webpack e il fatto che nulla su `omni-release` venga compilato con Turbopack.
- **Pool leggero: `omni-light`.** `omniroute-113` e `omniroute-113-2` eseguono i job notturni che richiedono
  un `next build` soltanto per il backend (~5–6 GB; webpack) e `quality.yml` `lint-guard`. `omniroute-113`
  aveva `MemoryHigh=4G` fino al 2026-10-18 — lì la build promptfoo ha impiegato 54 minuti procedendo a forza
  di recuperi di memoria; 8 GB eliminano la limitazione.
- **Meno listener, intenzionalmente.** Quattro unità OmniRoute sono state disabilitate il 2026-08-29 — ogni listener
  aggiuntivo è un altro utilizzatore del budget di memoria sopra indicato. Il limite massimo del janitor è 6 (`MAX_ACTIVE_RUNNERS=6` nel cron): conteggia
  ogni `Runner.Listener` presente sul sistema, mentre OmniHeuris + OmniMind ne aggiungono due ai nostri quattro.
- **Non pulire mai `/tmp` o `_work` manualmente mentre un runner è occupato.** Un'operazione di
  verifica seguita dalla cancellazione, con un intervallo tra le due, è il motivo per cui un job Build attivo ha perso la propria
  directory `_work` il 2026-08-27. Il janitor esegue la verifica e la rimozione in un unico passaggio;
  lascia che se ne occupi.
- L'arresto di un runner durante un job annulla il job (osservato dal vivo): usare `systemctl stop` soltanto
  quando il relativo listener non ha alcun processo figlio `Runner.Worker` — ed eseguire l'operazione con un unico comando.
- I workflow non devono depositare artefatti in `/tmp` (è nella RAM). Scaricarli in
  `$RUNNER_TEMP` (su disco, per ciascun runner) — l'artefatto `next-build` da 1,3 GB ha impiegato 27–32
  minuti per essere scritto sul tmpfs e 2 minuti per essere caricato dal disco.
- Il VPS `.15` è riservato all'omologazione — non esegue mai runner CI.
