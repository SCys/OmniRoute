# Self-Hosted Runner Box Operations (.113 pool) (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Le pool auto-hébergé s’exécute sur la machine **.113** (`tomni-proxmox-113`). Depuis le 2026-10-18, chaque
runner OmniRoute possède **un seul rôle**, une seule étiquette et un budget mémoire/CPU dimensionné en fonction des mesures
de sa charge de travail. L’emplacement Turbopack reçoit les ressources nécessaires à la compilation ; les autres emplacements sont dimensionnés selon leurs
pics mesurés. La machine n’est en surallocation que lorsqu’une compilation Turbopack coïncide avec une compilation webpack
Release-Green et une tâche de lint ; le swap de l’hôte (16 Go) absorbe cette charge et, puisque les compilations des pull requests s’exécutent
sur des runners hébergés, l’emplacement Turbopack reste inactif la plupart du temps :

| runner               | étiquette      | rôle                                                                                                                                                                    | `MemoryHigh` / `MemoryMax` | `CPUQuota`   |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| `omniroute-113-5`    | `omni-build`   | Compilations Turbopack : `ci.yml` `Build` (push/dispatch uniquement), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, la compilation a11y nocturne | 56 Go / 60 Go (swap 0)     | 1600 %       |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), compilation webpack                                                                                                     | 20 Go / 24 Go (swap 4 Go)  | 800 %        |
| `omniroute-113-2`    | `omni-light`   | tâches nocturnes (Schemathesis, promptfoo, garak, k6, démarrage a11y) et `quality.yml` `lint-guard`                                                                     | 12 Go / 16 Go (swap 4 Go)  | 600 %        |
| `omniroute-113`      | `omni-light`   | même pool que ci-dessus                                                                                                                                                 | 8 Go / 12 Go               | 400 %        |
| OmniHeuris, OmniMind | (leurs dépôts) | Dependabot uniquement (pic de 155 Mo chacun, 2026-10-18)                                                                                                                | 4 Go / 6 Go                | 200 % chacun |

Mesures du 2026-10-18 :

| ressource | valeur                             | conséquences pour la planification                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 Go / 32 cœurs**               | une compilation de production Turbopack a atteint un pic de 49 Go sans limite (`tests/unit/ci-build-bundler-webpack.test.ts`) ; avec Next 16.3.8, la phase de compilation à elle seule occupe environ 40 Go (36 Go de RSS dans `next-build` plus 17 workers de chargement à 3 Go, mesure du 2026-10-18) ; une compilation webpack utilise environ 14 à 16 Go. Une compilation Turbopack et une compilation webpack peuvent s’exécuter simultanément ; deux compilations Turbopack ne le peuvent pas |
| swap      | 16 Go                              | `omniroute-113-5` s’exécute avec le swap désactivé (`MemorySwapMax=0`), afin qu’une compilation incontrôlée soit interrompue lorsqu’elle atteint sa limite au lieu de faire swapper la machine                                                                                                                                                                                                                                                                                                      |
| `/tmp`    | **tmpfs de 12 Go = RAM**           | tout ce qui y est stocké occupe de la mémoire ; les éléments résiduels sont supprimés après 3 h                                                                                                                                                                                                                                                                                                                                                                                                     |
| CPU       | charge de 60 observée sur 32 cœurs | avant l’application des quotas, une compilation Turbopack (environ 1166 % de CPU) accompagnée d’une suite de couverture sur la même machine empêchait les autres listeners d’émettre leurs signaux de présence (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                                                |
| runners   | **6 listeners**                    | 4 OmniRoute + OmniHeuris + OmniMind ; `omniroute-113-3/-4/-7/-8` sont désactivés (`systemctl enable --now` permet d’en réactiver un)                                                                                                                                                                                                                                                                                                                                                                |

Les limites se trouvent dans le fichier `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
de chaque unité (les anciennes valeurs sont conservées dans `override.conf.bak-20261018`) et ont été appliquées à chaud avec
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — sans redémarrage, afin qu’aucune
tâche en cours d’exécution ne soit affectée. Les étiquettes sont modifiées à chaud via l’API des runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Installer le nettoyeur (une seule fois, sur la machine)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root) : toutes les 30 min, journalisation dans /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` est requis : le nettoyeur vérifie qu’un chemin est inactif à l’aide d’un instantané des fichiers
ouverts avant de le supprimer ; sans cet outil, il ne supprime rien et l’indique
(exit 1). Testez d’abord toute modification avec `--dry-run` : cette option affiche exactement ce qui serait
fait sans rien modifier.

Ce qu’il fait à chaque exécution : il supprime nos propres résidus (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) après **3 h sur tmpfs** et 24 h sur le disque dans
`_work/_temp` ; il tue tout processus `next-build` datant de plus de 75 min (aucun job ne dure aussi longtemps — le
2026-08-27, l’un d’eux a duré 70 min après que GitHub avait déclaré son job perdu) ; il élague les
copies de travail de plus de 48 h des agents d’exécution dont l’unité est **arrêtée** ; il déclenche une alerte lorsque l’utilisation du disque est ≥ 85 %, lorsque le PSI
mémoire `full/avg60` est ≥ 10 %, et lorsqu’il y a plus de processus d’écoute que `MAX_ACTIVE_RUNNERS` (avec une
ventilation omniroute/autres). Exit 1 = intervention nécessaire ; consultez le journal.

La règle des 75 minutes ne détecte pas un build dont GitHub a déjà abandonné le job. Lorsque
`Runner.Listener` ne parvient pas à renouveler son job, `_diag/Runner_*.log` affiche
`POST request to …/renewjob timed out after 100 seconds`, l’API indique que le job est `completed`
(en échec) environ dix minutes après le dernier renouvellement réussi, et `next-build` continue de s’exécuter sans
job associé (2026-10-18 : le build du #17066 a été marqué comme ayant échoué à 19:43, et son processus de build
occupait encore 40 Go cinq minutes plus tard). Vérifiez la référence Git dans le fichier `_diag/Worker_*.log` le plus récent, puis
envoyez SIGTERM uniquement à l’arborescence des processus de build à l’aide de leurs PID — `next-build`, `npm run build`, `build-next-isolated.mjs` et
les workers de `_work`. Ne touchez jamais à `Runner.Listener`, `RunnerService.js` ni à `Runner.Worker` : le
worker signale le job comme annulé et le processus d’écoute revient en ligne de lui-même.

## Unités de runners : KillMode

Le paramètre par défaut `KillMode=process` du runner laisse `Runner.Worker → npm → next-build`
actif lorsqu’une unité est arrêtée ou redémarrée — un build orphelin continue de consommer de la RAM et
du CPU sans qu’aucun job ne lui soit associé. Chaque unité OmniRoute comporte un drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
avec `KillMode=mixed` : SIGTERM est d’abord envoyé au listener, puis SIGKILL à l’ensemble du cgroup à
`TimeoutStop`. Il prend effet au prochain redémarrage de l’unité — redémarrez **un seul runner à
la fois, uniquement lorsqu’il est inactif**, en exécutant la vérification d’inactivité et le redémarrage dans la même commande.

## Règles d’exploitation

- **Un seul build Turbopack à la fois — règle imposée par un label.** Chaque job qui exécute un
  `next build` Turbopack complet cible `[self-hosted, omni-build]`, et seul **`omniroute-113-5`**
  porte ce label : `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, le build a11y nocturne (#16853) et **amd64** dans `docker-publish.yml`
  (webpack dans BuildKit — Turbopack y a paniqué, exécution 33253576569). La partie Docker arm64
  reste sur `ubuntu-24.04-arm`. La partie amd64 de `docker-publish` partage le groupe de concurrence
  `heavy-build-main` avec `Build` dans `ci.yml` (`cancel-in-progress: false`). Docker Engine doit
  être présent sur `omniroute-113-5`. Un deuxième emplacement Turbopack ne tient pas dans 78 Go
  (2 × 33–37 Go plus le reste de la machine) ; un deuxième emplacement n’est sûr que pour les
  builds webpack.
- **Les builds des pull requests s’exécutent sur des runners hébergés (2026-10-18).** `Build` dans
  `ci.yml` n’atteint `omni-build` que pour `push` et `workflow_dispatch` ; chaque `Build` de
  `pull_request` (provenant du dépôt lui-même ou d’un fork) et de `merge_group` s’exécute sur
  `ubuntu-latest` avec webpack. Lorsque chaque PR provenant du dépôt lui-même était dirigée vers
  l’emplacement, un build Turbopack l’occupait pendant 29 à 58 min, 18 builds ont attendu jusqu’à
  18 h, et le build `push` de la branche de publication elle-même n’a obtenu l’emplacement qu’une
  fois sur 40 jobs. Sur un runner hébergé, le même build de PR prend 8 à 12 min aux côtés des autres
  jobs de la PR. Turbopack, le bundler livré par `npm-publish`, continue d’être exercé sur la branche
  de publication par le build a11y nocturne de la branche par défaut (04:41 UTC), par chaque build
  `push` ou `workflow_dispatch` qui atteint l’emplacement, et par `npm-publish` lui-même.
  `tests/unit/build/heavy-build-queue.test.ts` verrouille les quatre conditions du filtre.
- **Ne jamais dimensionner l’emplacement Turbopack en dessous de ses besoins mesurés.** Le
  2026-10-18 à 18:06, l’emplacement a été abaissé de 56G/60G à 40G/44G pour faire de la place à
  `omni-release`. La phase de compilation est restée au niveau de `MemoryHigh` pendant toute son
  exécution (pression mémoire PSI `full` de 30 à 43 %), et le `Runner.Listener`, qui partage le
  cgroup, n’a pas pu renouveler son job. Les valeurs 56G/60G définies par le propriétaire le
  2026-10-17 ont été restaurées le jour même. En dessous de cette valeur, le build n’échoue pas ;
  il s’enlise dans le swapping, et le job est perdu.
- **Release-Green dispose de son propre emplacement (2026-10-18).** Jusqu’alors, les deux
  validations Release-Green s’exécutaient sur `omni-build` : à chaque push (~10/heure, 97 des
  100 exécutions `push` annulées en cours de travail en une journée) et lors de trois balayages
  complets d’environ 2 h par jour (celui de 05:29 a attendu 6 h pour obtenir l’emplacement) —
  l’unique emplacement de build était sursollicité à plusieurs reprises et les builds des PR
  provenant du dépôt lui-même attendaient pendant des heures. `release-green` et `main-green`
  ciblent désormais `omni-release` (`omniroute-113-6` uniquement) avec
  `OMNIROUTE_USE_TURBOPACK=0`, et une exécution démarrée n’est plus annulée par un nouveau push
  (l’emplacement en attente continue d’absorber la rafale). Le test
  `tests/unit/build/runner-capacity-routing.test.ts` verrouille le routage, le basculement vers
  webpack et le fait que rien sur `omni-release` ne soit compilé avec Turbopack.
- **Pool léger : `omni-light`.** `omniroute-113` et `omniroute-113-2` exécutent les tâches
  nocturnes qui nécessitent un `next build` limité au backend (~5–6 Go ; webpack), ainsi que
  `lint-guard` dans `quality.yml`. `omniroute-113` avait `MemoryHigh=4G` jusqu’au 2026-10-18 —
  le build promptfoo y a passé 54 minutes à récupérer de la mémoire ; 8 Go éliminent cette
  limitation.
- **Moins de listeners, volontairement.** Quatre unités OmniRoute ont été désactivées le
  2026-08-29 — chaque listener supplémentaire est un autre locataire du budget mémoire ci-dessus.
  Le plafond du nettoyeur est fixé à 6 (`MAX_ACTIVE_RUNNERS=6` dans cron) : il compte chaque
  `Runner.Listener` de la machine, et OmniHeuris + OmniMind en ajoutent deux à nos quatre.
- **Ne jamais nettoyer `/tmp` ou `_work` manuellement lorsqu’un runner est occupé.** Une
  vérification suivie d’une suppression avec un délai entre les deux est la raison pour laquelle
  un job `Build` actif a perdu son répertoire `_work` le 2026-08-27. Le nettoyeur effectue la
  vérification et la suppression en une seule étape ; laissez-le faire.
- L’arrêt d’un runner en cours de job annule le job (observé en direct) : n’exécuter
  `systemctl stop` que lorsque son listener n’a aucun enfant `Runner.Worker` — et le faire en
  une seule commande.
- Les workflows ne doivent pas stocker d’artefacts dans `/tmp` (il se trouve en RAM).
  Téléchargez-les dans `$RUNNER_TEMP` (sur disque, propre à chaque runner) — l’artefact
  `next-build` de 1,3 Go a mis 27 à 32 minutes à arriver sur le tmpfs, contre 2 minutes pour
  être téléversé depuis le disque.
- Le VPS `.15` est réservé à l’homologation — il n’exécute jamais de runners CI.
