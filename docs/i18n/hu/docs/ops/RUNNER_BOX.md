# Self-Hosted Runner Box Operations (.113 pool) (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

A saját üzemeltetésű pool a **.113** gépen (`tomni-proxmox-113`) fut. 2026-10-18 óta minden
OmniRoute-futtatóhoz **egy szerepkör**, egy címke, valamint az adott munkaterhelés mért igényeihez
méretezett memória- és CPU-keret tartozik. A Turbopack-hely annyi erőforrást kap, amennyire a buildnek
szüksége van; a többi helyet a mért csúcsterhelésükhöz méreteztük. A gépen csak akkor történik
túlfoglalás, amikor egy Turbopack-build egybeesik egy Release-Green webpack-builddel és egy lintelési
feladattal; ezt a gazdagép lapozóterülete (16 GB) kezeli, és mivel a pull requestek Build feladatai
üzemeltetett futtatókon futnak, a Turbopack-hely az idő nagy részében üres:

| futtató              | címke          | szerepkör                                                                                                                                             | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-buildek: `ci.yml` `Build` (csak push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, az éjszakai a11y-build | 56 GB / 60 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-build                                                                                         | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`   | éjszakai feladatok (Schemathesis, promptfoo, garak, k6, a11y-indítás) és a `quality.yml` `lint-guard` feladata                                        | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`   | ugyanaz a pool, mint fent                                                                                                                             | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (saját repóik) | csak Dependabot (egyenként 155 MB-os csúcs, 2026-10-18)                                                                                               | 4 GB / 6 GB                | egyenként 200 % |

Mérve: 2026-10-18.

| erőforrás | érték                   | jelentése az ütemezés szempontjából                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 mag**      | egy korlátozás nélküli, éles Turbopack-build csúcsterhelése 49 GB volt (`tests/unit/ci-build-bundler-webpack.test.ts`); a Next 16.3.8 esetén önmagában a fordítási fázis ~40 GB-ot foglal (36 GB RSS a `next-build` folyamatban, valamint 17 betöltőmunkás egyenként 3 GB-tal, mérve: 2026-10-18); egy webpack-build ~14–16 GB. Egy Turbopack- és egy webpack-build együtt elfér; két Turbopack-build nem |
| swap      | 16 GB                   | az `omniroute-113-5` kikapcsolt swap mellett fut (`MemorySwapMax=0`), így egy elszabadult build a korlát elérésekor leáll, ahelyett hogy a gépet lapozásra kényszerítené                                                                                                                                                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**   | minden, amit itt tárolunk, memóriát foglal; a hátramaradt fájlok 3 óra után törlődnek                                                                                                                                                                                                                                                                                                                     |
| CPU       | 60-as terhelés 32 magon | a kvóták bevezetése előtt egy Turbopack-build (~1166 % CPU) és az ugyanazon a gépen futó lefedettségi tesztcsomag megakadályozta, hogy a többi figyelő szívverései elegendő erőforráshoz jussanak (`The self-hosted runner lost communication`, #16853)                                                                                                                                                   |
| futtatók  | **6 figyelő**           | 4 OmniRoute + OmniHeuris + OmniMind; az `omniroute-113-3/-4/-7/-8` le van tiltva (a `systemctl enable --now` paranccsal valamelyik újra bekapcsolható)                                                                                                                                                                                                                                                    |

A korlátok az egyes unitok `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
fájljában találhatók (a korábbi értékeket az `override.conf.bak-20261018` őrzi), és élőben lettek
alkalmazva a `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` paranccsal —
újraindítás nélkül, így egyetlen futó feladatot sem érintettek. A címkék módosítása szintén élőben,
a futtatók API-ján keresztül történik
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## A takarító telepítése (egyszeri művelet a gépen)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): 30 percenként, naplózás a /var/log/runner-janitor.log fájlba
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Az `lsof` szükséges: a takarító a megnyitott fájlok egyszeri pillanatfelvételével
bizonyosodik meg arról, hogy egy elérési út nincs használatban, mielőtt eltávolítaná;
az eszköz nélkül semmit sem távolít el, és ezt jelzi is (exit 1). Minden módosítást
először a `--dry-run` kapcsolóval próbáljon ki — pontosan kiírja, hogy mit tenne,
de semmit sem módosít.

Minden futáskor a következőket végzi el: eltakarítja a saját hátrahagyott fájljainkat
(`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) **3 óra után a
tmpfs-en**, illetve 24 óra után a lemezen lévő `_work/_temp` könyvtárból; leállítja
a 75 percnél régebbi `next-build` folyamatokat (egyetlen feladat sem fut ilyen sokáig
— 2026-08-27-én az egyik még 70 percig futott azután, hogy a GitHub elveszettnek
nyilvánította a feladatát); eltávolítja azon futtatók 48 óránál régebbi munkapéldányait,
amelyek egysége **leállt**; riaszt, ha a lemezhasználat ≥ 85%, a memória PSI
`full/avg60` értéke ≥ 10%, vagy a figyelők száma meghaladja a
`MAX_ACTIVE_RUNNERS` értékét (omniroute/egyéb bontásban). Exit 1 = beavatkozás
szükséges; olvassa el a naplót.

A 75 perces szabály nem észleli azt a buildet, amelynek feladatáról a GitHub már
lemondott. Ha a `Runner.Listener` nem tudja megújítani a feladatát, a
`_diag/Runner_*.log` fájlban ez jelenik meg:
`POST request to …/renewjob timed out after 100 seconds`; az API az utolsó sikeres
megújítás után körülbelül tíz perccel `completed` állapotúnak (sikertelennek) jelzi
a feladatot, miközben a `next-build` tovább fut hozzárendelt feladat nélkül
(2026-10-18: a #17066 buildje 19:43-kor sikertelen lett, de öt perccel később a
build még mindig 40 GB-ot foglalt). Ellenőrizze a refet a legújabb
`_diag/Worker_*.log` fájlban, majd PID alapján csak a build folyamatfájának küldjön
SIGTERM jelet — a `next-build`, az `npm run build`, a `build-next-isolated.mjs`
és a `_work` munkafolyamatok számára. Soha ne nyúljon a `Runner.Listener`,
`RunnerService.js` vagy `Runner.Worker` folyamatokhoz: a munkafolyamat töröltként
jelenti a feladatot, a figyelő pedig magától újra online állapotba kerül.

## Runner egységek: KillMode

A runner alapértelmezett `KillMode=process` beállítása életben hagyja a
`Runner.Worker → npm → next-build` folyamatláncot, amikor egy egységet leállítanak
vagy újraindítanak — az árva build továbbra is fogyasztja a RAM-ot és a CPU-t,
miközben már nem tartozik hozzá feladat. Minden OmniRoute egységhez tartozik egy
felülíró konfiguráció
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
`KillMode=mixed` beállítással: először SIGTERM-et küld a listenernek, majd a
`TimeoutStop` elérésekor SIGKILL-t a teljes cgroupnak. Ez az egység következő
újraindításakor lép életbe — **egyszerre csak egy runnert indíts újra, kizárólag
üresjáratban**, az üresjárat ellenőrzését és az újraindítást ugyanabban a parancsban
végrehajtva.

## Üzemeltetési szabályok

- **Egyszerre csak egy Turbopack-build futhat — címkével kikényszerítve.** Minden olyan feladat, amely teljes Turbopack-alapú
  `next build` futtatást végez, a `[self-hosted, omni-build]` célra irányul, és ezt a címkét kizárólag
  az **`omniroute-113-5`** hordozza: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, az éjszakai a11y-build (#16853), valamint a `docker-publish.yml` **amd64**
  feladata (webpack a BuildKitben — a Turbopack ott pánikhibával leállt, 33253576569 számú futás).
  Az arm64-es Docker-ág továbbra is az `ubuntu-24.04-arm` környezetben fut. A `docker-publish` amd64
  feladata ugyanazt a `heavy-build-main` párhuzamossági csoportot használja, mint a `ci.yml` `Build`
  (`cancel-in-progress: false`). A Docker Engine-nek az `omniroute-113-5` gépen kell futnia. Egy második
  Turbopack-hely nem fér bele a 78 GB-ba (2 × 33–37 GB, plusz a gép többi terhelése); második hely
  csak webpack-buildekhez használható biztonságosan.
- **A pull requestek Build feladatai hosztolt környezetben futnak (2026-10-18).** A `ci.yml` `Build`
  csak `push` és `workflow_dispatch` esetén jut el az `omni-build` célra; minden `pull_request`
  (akár saját eredetű, akár forkból érkező) és `merge_group` Build az `ubuntu-latest` környezetben,
  webpackkel fut. Amikor minden saját eredetű PR-t erre a helyre irányítottunk, egy Turbopack Build
  29–58 percig foglalta azt, 18 Build legfeljebb 18 órán át állt sorban, a kiadási ág saját push
  Build feladata pedig 40 feladatból egyszer jutott hozzá a helyhez. Hosztolt környezetben ugyanez
  a PR Build 8–12 percet vesz igénybe a PR többi feladata mellett. A Turbopackot — azt a bundlert,
  amelyet az `npm-publish` szállít — továbbra is teszteli a kiadási ágon az alapértelmezett ág
  éjszakai a11y-buildje (04:41 UTC), minden olyan push vagy kézi indítású Build, amely eljut a
  helyhez, valamint maga az `npm-publish`. A
  `tests/unit/build/heavy-build-queue.test.ts` rögzíti a négyfeltételes kaput.
- **A Turbopack-hely méretét soha ne csökkentsük a mért szükséglet alá.** 2026-10-18-án 18:06-kor
  a hely méretét 56G/60G-ről 40G/44G-re csökkentették, hogy helyet biztosítsanak az `omni-release`
  számára. A fordítási fázis a teljes futás alatt elérte a `MemoryHigh` korlátot (a memória-PSI
  `full` értéke 30–43 % volt), és az ugyanazon cgroupot használó `Runner.Listener` nem tudta
  megújítani a feladatát. A tulajdonos által 2026-10-17-én beállított 56G/60G értéket még aznap
  visszaállították. Ez alatt az érték alatt a build nem hibával áll le, hanem folyamatos
  lapozásba kezd, és a feladat elvész.
- **A Release-Green saját hellyel rendelkezik (2026-10-18).** Addig mindkét Release-Green-ellenőrzés
  az `omni-build` célon futott: minden push esetén (~10/óra; egy nap alatt 100 push-futásból 97-et
  munka közben megszakítottak), továbbá naponta három, egyenként ~2 órás teljes vizsgálatként
  (a 05:29-es vizsgálat 6 órát várt a helyre) — az egyetlen buildhely kapacitását többszörösen
  túllépték, a saját eredetű PR-ek Build feladatai pedig órákig várakoztak.
  A `release-green` és a `main-green` most az `omni-release` célra irányul (kizárólag
  `omniroute-113-6`), `OMNIROUTE_USE_TURBOPACK=0` beállítással, és az elindított futást már nem
  szakítja meg egy újabb push (a függőben lévő hely továbbra is egyetlen futásra sűríti a rohamot).
  A `tests/unit/build/runner-capacity-routing.test.ts` rögzíti az útválasztást, a webpackre váltást,
  valamint azt, hogy az `omni-release` célon semmi sem épül Turbopackkel.
- **Könnyű feladatok készlete: `omni-light`.** Az `omniroute-113` és az `omniroute-113-2` futtatja
  azokat az éjszakai feladatokat, amelyekhez csak backendoldali `next build` szükséges
  (~5–6 GB; webpack), valamint a `quality.yml` `lint-guard` feladatát. Az `omniroute-113`
  `MemoryHigh=4G` korláttal futott 2026-10-18-ig — a promptfoo build 54 percen keresztül
  memória-visszanyeréssel küszködött rajta; 8 GB megszünteti a korlátozást.
- **Szándékosan kevesebb figyelőfolyamat fut.** Négy OmniRoute-egységet letiltottunk
  2026-08-29-én — minden további figyelőfolyamat újabb fogyasztója a fenti memóriakeretnek.
  A takarító felső korlátja 6 (`MAX_ACTIVE_RUNNERS=6` a cronban): a gépen futó minden
  `Runner.Listener` folyamatot beleszámítja, az OmniHeuris és az OmniMind pedig további kettőt
  ad a mi négy folyamatunkhoz.
- **Soha ne tisztítsuk kézzel a `/tmp` vagy az `_work` könyvtárat, amíg bármelyik futtató
  foglalt.** Egy ellenőrzést, majd késleltetett törlést végző eljárás miatt veszítette el egy
  aktív Build feladat az `_work` könyvtárát 2026-08-27-én. A takarító egyetlen lépésben végzi
  az ellenőrzést és az eltávolítást; hagyjuk, hogy ő végezze el.
- Egy futtató feladat közbeni leállítása megszakítja a feladatot (élesben megfigyelve):
  `systemctl stop` csak akkor használható, ha a figyelőfolyamatnak nincs `Runner.Worker`
  gyermekfolyamata — és ezt egyetlen parancsban kell végrehajtani.
- A munkafolyamatok nem tárolhatnak műtermékeket a `/tmp` könyvtárban (az RAM-ban található).
  A letöltés célja a `$RUNNER_TEMP` legyen (lemezen, futtatónként elkülönítve) — az 1,3 GB-os
  `next-build` műtermék tmpfs-re írása 27–32 percet vett igénybe, míg lemezről 2 perc alatt
  lehetett feltölteni.
- A `.15` VPS kizárólag homologizációra szolgál — CI-futtatókat soha nem futtat.
