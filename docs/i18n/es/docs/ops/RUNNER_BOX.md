# Self-Hosted Runner Box Operations (.113 pool) (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

El pool autohospedado se ejecuta en el servidor **.113** (`tomni-proxmox-113`). Desde el 2026-10-18, cada
runner de OmniRoute tiene **una función**, una etiqueta y un presupuesto de memoria/CPU dimensionado según lo medido
para su carga de trabajo. El slot de Turbopack recibe los recursos que necesita la compilación; los demás slots están dimensionados según sus
picos medidos. El servidor solo sobreasigna recursos cuando una compilación de Turbopack coincide con una compilación
webpack de Release-Green y un trabajo de lint; el swap del host (16 GB) absorbe esa carga y, como las compilaciones de solicitudes de incorporación de cambios se ejecutan
en infraestructura alojada, el slot de Turbopack permanece inactivo la mayor parte del tiempo:

| runner               | etiqueta       | función                                                                                                                                                                 | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`   | Compilaciones de Turbopack: `ci.yml` `Build` (solo push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, la compilación nocturna de a11y | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), compilación webpack                                                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`   | ejecuciones nocturnas (Schemathesis, promptfoo, garak, k6, arranque de a11y) y `quality.yml` `lint-guard`                                                               | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`   | mismo pool que el anterior                                                                                                                                              | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (sus repos)    | Solo Dependabot (pico de 155 MB cada uno, 2026-10-18)                                                                                                                   | 4 GB / 6 GB                | 200 % cada uno |

Medido el 2026-10-18:

| recurso   | valor                               | implicaciones para la planificación                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 núcleos**              | una compilación de producción de Turbopack alcanzó un pico de 49 GB sin límites (`tests/unit/ci-build-bundler-webpack.test.ts`); en Next 16.3.8, solo la fase de compilación mantiene ~40 GB (36 GB de RSS en `next-build` más 17 workers de carga con 3 GB, medido el 2026-10-18); una compilación webpack usa ~14–16 GB. Una compilación de Turbopack y una de webpack caben juntas; dos compilaciones de Turbopack no |
| swap      | 16 GB                               | `omniroute-113-5` se ejecuta con el swap desactivado (`MemorySwapMax=0`), por lo que una compilación fuera de control se interrumpe al alcanzar su límite en lugar de hacer que el servidor use swap                                                                                                                                                                                                                     |
| `/tmp`    | **12 GB tmpfs = RAM**               | todo lo que se deje allí consume memoria; los restos se eliminan después de 3 h                                                                                                                                                                                                                                                                                                                                          |
| CPU       | carga de 60 observada en 32 núcleos | antes de las cuotas, una compilación de Turbopack (~1166 % de CPU) junto con una suite de cobertura en el mismo servidor privó de recursos a las señales de actividad de los demás listeners (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                       |
| runners   | **6 listeners**                     | 4 de OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` están deshabilitados (`systemctl enable --now` reactiva uno)                                                                                                                                                                                                                                                                                          |

Los límites se encuentran en el archivo `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
de cada unidad (los valores anteriores se conservaron como `override.conf.bak-20261018`) y se aplicaron en caliente con
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…`, sin reiniciar, por lo que ningún
trabajo en ejecución se vio afectado. Las etiquetas se cambian mediante la API de runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), también en caliente.

## Instalar el proceso de limpieza (una sola vez, en el servidor)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): cada 30 min, registrar en /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Se requiere `lsof`: el proceso de limpieza comprueba que una ruta está inactiva mediante una instantánea de los archivos abiertos antes de eliminarla; sin esta herramienta, no elimina nada y lo indica (exit 1). Pruebe primero cualquier cambio con `--dry-run`: muestra exactamente lo que haría sin modificar nada.

Qué hace en cada ejecución: elimina nuestros propios restos (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) después de **3 h en tmpfs** y 24 h en `_work/_temp` en disco; finaliza un `next-build` con más de 75 min de antigüedad (ningún job dura tanto; el 2026-08-27, uno se ejecutó durante 70 min después de que GitHub declarara perdido su job); elimina checkouts de más de 48 h pertenecientes a runners cuya unidad está **detenida**; emite alertas cuando el uso del disco es ≥ 85 %, el PSI de memoria `full/avg60` es ≥ 10 % y hay más listeners que `MAX_ACTIVE_RUNNERS` (con un desglose de omniroute/otros). Exit 1 = se requiere atención; consulte el registro.

La regla de los 75 minutos no detecta una compilación cuyo job GitHub ya haya abandonado. Cuando `Runner.Listener` no puede renovar su job, `_diag/Runner_*.log` muestra `POST request to …/renewjob timed out after 100 seconds`, la API indica que el job está `completed` (con fallo) unos diez minutos después de la última renovación correcta y `next-build` continúa ejecutándose sin ningún job asociado (2026-10-18: la compilación de #17066 se marcó como fallida a las 19:43 y seguía ocupando 40 GB cinco minutos después). Confirme la referencia en el archivo `_diag/Worker_*.log` más reciente y, a continuación, envíe SIGTERM únicamente al árbol de procesos de compilación por PID: `next-build`, `npm run build`, `build-next-isolated.mjs` y los workers de `_work`. Nunca intervenga sobre `Runner.Listener`, `RunnerService.js` ni `Runner.Worker`: el worker informa de que el job se ha cancelado y el listener vuelve a estar en línea por sí solo.

## Unidades de runner: KillMode

El valor predeterminado `KillMode=process` del runner deja
`Runner.Worker → npm → next-build` activo cuando una unidad se detiene o reinicia:
una compilación huérfana continúa consumiendo RAM y CPU sin tener ningún trabajo
asociado. Cada unidad de OmniRoute incluye un archivo drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
con `KillMode=mixed`: primero envía SIGTERM al listener y, al llegar a
`TimeoutStop`, envía SIGKILL a todo el cgroup. Entra en vigor en el siguiente
reinicio de la unidad: reinicia **un runner a la vez, únicamente cuando esté
inactivo**, con la comprobación de inactividad y el reinicio en el mismo comando.

## Reglas operativas

- **Una compilación de Turbopack a la vez — impuesto mediante una etiqueta.** Cada trabajo que ejecuta una compilación completa de Turbopack
  `next build` apunta a `[self-hosted, omni-build]`, y solo **`omniroute-113-5`** lleva esa
  etiqueta: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  la compilación nocturna de a11y (#16853) y `docker-publish.yml` **amd64** (webpack dentro de BuildKit —
  Turbopack entró en pánico allí, ejecución 33253576569). La etapa arm64 de Docker permanece en `ubuntu-24.04-arm`.
  `docker-publish` amd64 comparte el grupo de concurrencia `heavy-build-main` con `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine debe estar en `omniroute-113-5`. Una segunda
  ranura de Turbopack no cabe en 78 GB (2 × 33–37 GB más el resto de la máquina); una segunda ranura solo es segura para
  compilaciones con webpack.
- **Las compilaciones de solicitudes de incorporación de cambios se ejecutan en infraestructura alojada (2026-10-18).** `ci.yml` `Build` llega a `omni-build` solo para
  `push` y `workflow_dispatch`; cada compilación `pull_request` (del propio origen o de un fork) y `merge_group`
  se ejecuta en `ubuntu-latest` con webpack. Al enrutar a la ranura cada PR del propio origen, una compilación de Turbopack
  la ocupaba entre 29 y 58 min, 18 compilaciones quedaron en cola hasta 18 h, y la compilación del propio `push` de la rama de lanzamiento
  consiguió la ranura una vez en 40 trabajos. En la infraestructura alojada, la misma compilación de PR tarda entre 8 y 12 min junto a los demás
  trabajos del PR. Turbopack, el empaquetador que distribuye `npm-publish`, sigue ejercitándose en la rama de lanzamiento mediante la
  compilación nocturna de a11y de la rama predeterminada (04:41 UTC), mediante cada compilación de `push` o `dispatch` que
  llega a la ranura y mediante el propio `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  fija la condición de cuatro cláusulas.
- **Nunca dimensione la ranura de Turbopack por debajo de sus necesidades medidas.** El 2026-10-18 a las 18:06, la ranura se
  redujo de 56G/60G a 40G/44G para hacer sitio a `omni-release`. La fase de compilación permaneció en
  `MemoryHigh` durante toda su ejecución (PSI de memoria `full` del 30–43 %), y `Runner.Listener`, que
  comparte el cgroup, no pudo renovar su trabajo. Los 56G/60G del propietario del 2026-10-17 se restauraron ese
  mismo día. Por debajo de ese valor, la compilación no falla; entra en una actividad de paginación excesiva y el trabajo se pierde.
- **Release-Green tiene su propia ranura (2026-10-18).** Hasta entonces, ambas validaciones de Release-Green se ejecutaban
  en `omni-build`: en cada `push` (~10/hora, 97 de 100 ejecuciones de `push` canceladas a mitad del trabajo en un día)
  y tres barridos completos de ~2 h al día (el barrido de las 05:29 esperó 6 h por la ranura) — la única ranura de compilación
  estaba sobresuscrita varias veces y las compilaciones de PR del propio origen esperaban durante horas.
  `release-green` y `main-green` ahora apuntan a `omni-release` (solo `omniroute-113-6`) con
  `OMNIROUTE_USE_TURBOPACK=0`, y una ejecución iniciada ya no se cancela por un `push` más reciente (la
  ranura pendiente sigue colapsando la avalancha). `tests/unit/build/runner-capacity-routing.test.ts`
  fija el enrutamiento, el cambio a webpack y que nada en `omni-release` se compile con Turbopack.
- **Grupo ligero: `omni-light`.** `omniroute-113` y `omniroute-113-2` ejecutan los procesos nocturnos que necesitan
  un `next build` solo de backend (~5–6 GB; webpack) y `quality.yml` `lint-guard`. `omniroute-113`
  tuvo `MemoryHigh=4G` hasta 2026-10-18 — la compilación de promptfoo avanzó recuperando memoria durante 54 minutos
  allí; 8 GB eliminan la limitación.
- **Menos listeners de forma intencionada.** Cuatro unidades de OmniRoute se deshabilitaron el 2026-08-29 — cada
  listener adicional es otro inquilino del presupuesto de memoria indicado anteriormente. El límite del limpiador es 6 (`MAX_ACTIVE_RUNNERS=6` en cron): cuenta
  cada `Runner.Listener` de la máquina, y OmniHeuris + OmniMind añaden dos a nuestros cuatro.
- **Nunca limpie `/tmp` ni `_work` manualmente mientras algún runner esté ocupado.** Una
  comprobación seguida de un borrado, con un intervalo entre ambos, fue la causa de que un trabajo `Build` activo perdiera su
  `_work` el 2026-08-27. El limpiador realiza la comprobación y la eliminación en un solo paso;
  deje que lo haga.
- Detener un runner a mitad de un trabajo cancela el trabajo (observado en vivo): use `systemctl stop` solo
  cuando su listener no tenga ningún proceso hijo `Runner.Worker` — y hágalo en un solo comando.
- Los flujos de trabajo no deben almacenar artefactos en `/tmp` (está en la RAM). Descárguelos en
  `$RUNNER_TEMP` (en disco, por runner) — el artefacto `next-build` de 1.3 GB tardó entre 27 y 32
  minutos en guardarse en tmpfs y 2 minutos en cargarse desde el disco.
- El VPS `.15` es solo para homologación — nunca ejecuta runners de CI.
