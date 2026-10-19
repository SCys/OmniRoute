# Self-Hosted Runner Box Operations (.113 pool) (मराठी)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

स्वतः होस्ट केलेला पूल **.113** बॉक्सवर (`tomni-proxmox-113`) चालतो. 2026-10-18 पासून प्रत्येक
OmniRoute runner कडे **एक भूमिका**, एक label आणि त्याच्या workload च्या मोजलेल्या गरजेनुसार ठरवलेले memory/CPU budget
आहे. Turbopack slot ला build साठी आवश्यक संसाधने मिळतात; इतर slots त्यांच्या
मोजलेल्या कमाल वापरानुसार आकारलेले आहेत. Turbopack build, Release-Green
webpack build आणि lint job एकाच वेळी चालतात तेव्हाच बॉक्स overcommit होतो; host swap (16 GB) ते हाताळतो आणि pull-request Builds
hosted वातावरणात चालत असल्यामुळे Turbopack slot बहुतेक वेळ निष्क्रिय असतो:

| runner               | label           | भूमिका                                                                                                                                           | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`    | Turbopack builds: `ci.yml` `Build` (केवळ push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nightly a11y build | 56 GB / 60 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release`  | Release-Green (`release-green` + `main-green`), webpack build                                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`    | nightlies (Schemathesis, promptfoo, garak, k6, a11y boot) आणि `quality.yml` `lint-guard`                                                         | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`    | वरीलप्रमाणेच pool                                                                                                                                | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (त्यांचे repos) | केवळ Dependabot (प्रत्येकी कमाल 155 MB, 2026-10-18)                                                                                              | 4 GB / 6 GB                | प्रत्येकी 200 % |

2026-10-18 रोजी मोजलेले:

| संसाधन    | मूल्य                     | scheduling साठी त्याचा अर्थ                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cores**      | मर्यादा नसलेल्या Turbopack production build चा कमाल वापर 49 GB होता (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8 वर केवळ compile phase सुमारे 40 GB व्यापतो (`next-build` मधील 36 GB RSS तसेच प्रत्येकी 3 GB वापरणारे 17 loader workers, 2026-10-18 रोजी मोजलेले); webpack build सुमारे 14–16 GB वापरतो. एक Turbopack + एक webpack build एकत्र चालू शकतात; दोन Turbopack builds चालू शकत नाहीत |
| swap      | 16 GB                     | `omniroute-113-5` वर swap बंद ठेवून (`MemorySwapMax=0`) चालते, त्यामुळे नियंत्रणाबाहेर गेलेला build बॉक्सला swap करायला लावण्याऐवजी त्याच्या मर्यादेवर थांबवला जातो                                                                                                                                                                                                                                            |
| `/tmp`    | **12 GB tmpfs = RAM**     | तेथे ठेवलेली कोणतीही गोष्ट memory वापरते; शिल्लक राहिलेल्या गोष्टी 3 तासांनंतर हटवल्या जातात                                                                                                                                                                                                                                                                                                                   |
| CPU       | 32 cores वर load 60 आढळला | quotas लागू करण्यापूर्वी, त्याच बॉक्सवरील एक Turbopack build (~1166 % CPU) आणि coverage suite यांनी इतर listeners चे heartbeats उपाशी ठेवले (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                              |
| runners   | **6 listeners**           | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` निष्क्रिय केलेले आहेत (`systemctl enable --now` त्यापैकी एक पुन्हा सुरू करते)                                                                                                                                                                                                                                                                  |

मर्यादा प्रत्येक unit च्या `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` मध्ये आहेत
(मागील मूल्ये `override.conf.bak-20261018` म्हणून ठेवली आहेत) आणि त्या
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` वापरून थेट लागू केल्या होत्या — restart केला नाही, त्यामुळे कोणत्याही
चालू job वर परिणाम झाला नाही. Labels runners API द्वारे बदलले जातात
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), तेही थेट.

## janitor स्थापित करा (एकदाच, मशीनवर)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): दर 30 मिनिटांनी, /var/log/runner-janitor.log मध्ये लॉग करा
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` आवश्यक आहे: एखादा पथ हटवण्यापूर्वी, खुल्या फाइल्सचा एक snapshot घेऊन तो निष्क्रिय असल्याची janitor खात्री करतो; हे साधन उपलब्ध नसल्यास तो काहीही हटवत नाही आणि तसे स्पष्टपणे सांगतो (exit 1). कोणताही बदल आधी `--dry-run` वापरून तपासा — तो नेमके काय करेल ते दाखवतो आणि कोणत्याही गोष्टीत बदल करत नाही.

प्रत्येक वेळी चालताना तो हे करतो: **tmpfs वर 3 तासांनंतर** आणि डिस्कवरील `_work/_temp` मध्ये 24 तासांनंतर आपले शिल्लक अवशेष (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) साफ करतो; 75 मिनिटांपेक्षा जुना `next-build` बंद करतो (कोणतेही job इतका वेळ चालत नाही — 2026-08-27 रोजी GitHub ने त्याचे job हरवलेले घोषित केल्यानंतर एक job 70 मिनिटे चालले होते); ज्यांचे unit **थांबलेले** आहे अशा runners चे 48 तास जुने checkouts काढून टाकतो; तसेच डिस्कचा वापर ≥ 85 %, memory PSI `full/avg60` ≥ 10 %, आणि listeners ची संख्या `MAX_ACTIVE_RUNNERS` पेक्षा जास्त असल्यास सूचना देतो (omniroute/इतर अशा तपशीलवार विभागणीसह). Exit 1 = लक्ष देणे आवश्यक; लॉग वाचा.

75 मिनिटांचा नियम अशा build ला पकडत नाही ज्याचा job GitHub ने आधीच सोडून दिला आहे. जेव्हा `Runner.Listener` त्याच्या job चे नूतनीकरण करू शकत नाही, तेव्हा `_diag/Runner_*.log` मध्ये `POST request to …/renewjob timed out after 100 seconds` दिसते, शेवटच्या यशस्वी नूतनीकरणानंतर सुमारे दहा मिनिटांनी API त्या job ला `completed` (failure) म्हणून नोंदवतो, आणि कोणतेही job जोडलेले नसतानाही `next-build` चालू राहतो (2026-10-18: #17066 चे Build 19:43 वाजता failed झाले होते आणि पाच मिनिटांनंतरही त्याचा build 40 GB व्यापून होता). सर्वात नवीन `_diag/Worker_*.log` मधील ref ची खात्री करा, त्यानंतर केवळ build tree ला PID द्वारे SIGTERM पाठवा — `next-build`, `npm run build`, `build-next-isolated.mjs` आणि `_work` workers. `Runner.Listener`, `RunnerService.js` किंवा `Runner.Worker` यांना कधीही स्पर्श करू नका: worker त्या job ची नोंद cancelled म्हणून करतो आणि listener स्वतःहून पुन्हा online होतो.

## रनर युनिट्स: KillMode

रनरचे डीफॉल्ट `KillMode=process`, युनिट थांबवल्यावर किंवा रीस्टार्ट केल्यावर `Runner.Worker → npm → next-build`
चालूच ठेवते — कोणतीही जॉब संलग्न नसतानाही अनाथ बिल्ड RAM आणि
CPU वापरत राहते. प्रत्येक OmniRoute युनिटमध्ये
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
येथे `KillMode=mixed` असलेले ड्रॉप-इन आहे: आधी लिसनरला SIGTERM, त्यानंतर
`TimeoutStop` वेळी संपूर्ण cgroup ला SIGKILL. ते युनिटच्या पुढील रीस्टार्टवेळी लागू होते — निष्क्रियता तपासणी आणि रीस्टार्ट एकाच कमांडमध्ये ठेवून, **एका वेळी फक्त एक रनर आणि तो निष्क्रिय असतानाच रीस्टार्ट करा**.

## कार्यपद्धतीचे नियम

- **एका वेळी फक्त एक Turbopack बिल्ड — लेबलद्वारे सक्तीने लागू.** पूर्ण Turbopack
  `next build` चालवणारे प्रत्येक जॉब `[self-hosted, omni-build]` ला लक्ष्य करते आणि केवळ
  **`omniroute-113-5`** कडे ते लेबल आहे: `ci.yml` मधील `Build`, `npm-publish.yml` मधील
  `publish`, `nightly-v4-build`, `preview-artifact`, रात्रीचे a11y बिल्ड (#16853) आणि
  `docker-publish.yml` चे **amd64** बिल्ड (BuildKit अंतर्गत webpack — तेथे Turbopack क्रॅश झाले,
  रन 33253576569). arm64 Docker टप्पा `ubuntu-24.04-arm` वरच राहतो. `docker-publish` चे amd64,
  `ci.yml` मधील `Build` सोबत `heavy-build-main` concurrency group सामायिक करते
  (`cancel-in-progress: false`). Docker Engine हे `omniroute-113-5` वर असलेच पाहिजे. 78 GB मध्ये
  दुसरा Turbopack स्लॉट बसत नाही (2 × 33–37 GB आणि त्यासोबत मशीनवरील इतर सर्व भार); दुसरा स्लॉट
  केवळ webpack बिल्डसाठी सुरक्षित आहे.
- **Pull-request बिल्ड hosted वातावरणात चालतात (2026-10-18).** `ci.yml` मधील `Build` केवळ
  `push` आणि `workflow_dispatch` साठी `omni-build` पर्यंत पोहोचते; प्रत्येक `pull_request`
  (स्वतःच्या origin मधील किंवा fork मधील) आणि `merge_group` बिल्ड हे webpack सह
  `ubuntu-latest` वर चालते. स्वतःच्या origin मधील प्रत्येक PR स्लॉटकडे वळवल्यावर, एका Turbopack
  बिल्डने तो 29–58 मिनिटे व्यापून ठेवला, 18 बिल्ड 18 तासांपर्यंत रांगेत राहिले आणि release line
  च्या स्वतःच्या push बिल्डला 40 जॉबमध्ये फक्त एकदा स्लॉट मिळाला. Hosted वातावरणात, त्याच PR
  बिल्डला PR च्या इतर जॉबसोबत 8–12 मिनिटे लागतात. `npm-publish` द्वारे वितरित होणारा bundler,
  Turbopack, release line वर default branch च्या रात्रीच्या a11y बिल्डद्वारे (04:41 UTC),
  स्लॉटपर्यंत पोहोचणाऱ्या प्रत्येक push किंवा dispatch बिल्डद्वारे आणि `npm-publish` द्वारेच
  नियमितपणे वापरून तपासला जातो. `tests/unit/build/heavy-build-queue.test.ts` हे चार-अटींचे गेट
  निश्चित करते.
- **Turbopack स्लॉटचा आकार त्याच्या मोजलेल्या गरजेपेक्षा कधीही कमी करू नका.** 2026-10-18 रोजी
  18:06 वाजता `omni-release` साठी जागा करण्याकरिता स्लॉट 56G/60G वरून 40G/44G पर्यंत कमी
  करण्यात आला. compile टप्पा संपूर्ण रनदरम्यान `MemoryHigh` वरच अडकून राहिला (memory PSI `full`
  30–43 %), आणि तोच cgroup सामायिक करणारे `Runner.Listener` त्याचा जॉब नूतनीकृत करू शकले नाही.
  मालकाचे 2026-10-17 चे 56G/60G त्याच दिवशी पुनर्स्थापित करण्यात आले. या मूल्यापेक्षा कमी
  केल्यास बिल्ड अयशस्वी होत नाही; ते thrashing करते आणि जॉब गमावला जातो.
- **Release-Green साठी स्वतंत्र स्लॉट आहे (2026-10-18).** तोपर्यंत दोन्ही Release-Green
  validations `omni-build` वर चालत होती: प्रत्येक push वर (~10/तास, एका दिवसात 100 पैकी 97 push
  रन काम सुरू असतानाच रद्द झाले) आणि दिवसातून तीन ~2 तासांचे पूर्ण sweeps (05:29 चा sweep
  स्लॉटसाठी 6 तास थांबला) — एकमेव बिल्ड स्लॉट त्याच्या क्षमतेपेक्षा अनेक पटींनी अधिक वापरला जात
  होता आणि स्वतःच्या origin मधील PR बिल्डना अनेक तास थांबावे लागत होते. `release-green` आणि
  `main-green` आता `OMNIROUTE_USE_TURBOPACK=0` सह `omni-release` (केवळ `omniroute-113-6`) ला
  लक्ष्य करतात आणि सुरू झालेला रन आता नवीन push मुळे रद्द केला जात नाही (प्रलंबित स्लॉट अजूनही
  रनची गर्दी एकत्रित करतो). `tests/unit/build/runner-capacity-routing.test.ts` हे routing,
  webpack switch आणि `omni-release` वरील कोणतेही बिल्ड Turbopack वापरत नसल्याचे निश्चित करते.
- **हलका पूल: `omni-light`.** `omniroute-113` आणि `omniroute-113-2` हे केवळ backend साठी
  `next build` (~5–6 GB; webpack) आवश्यक असलेले रात्रीचे जॉब आणि `quality.yml` मधील
  `lint-guard` चालवतात. 2026-10-18 पर्यंत `omniroute-113` वर `MemoryHigh=4G` होते — तेथे
  promptfoo बिल्डने memory reclaim करत 54 मिनिटे काढली; 8 GB मुळे throttling दूर होते.
- **जाणीवपूर्वक कमी listeners.** 2026-08-29 रोजी चार OmniRoute units निष्क्रिय करण्यात आली —
  प्रत्येक अतिरिक्त listener हा वरील memory budget चा आणखी एक tenant असतो. janitor ची कमाल
  मर्यादा 6 आहे (cron मधील `MAX_ACTIVE_RUNNERS=6`): ते मशीनवरील प्रत्येक `Runner.Listener`
  मोजते आणि आमच्या चार listeners व्यतिरिक्त OmniHeuris + OmniMind आणखी दोन जोडतात.
- **कोणताही runner व्यस्त असताना `/tmp` किंवा `_work` कधीही हाताने साफ करू नका.** तपासणी आणि
  deletion यांच्यामध्ये अंतर असलेल्या check-then-delete प्रक्रियेमुळे 2026-08-27 रोजी चालू
  Build जॉबचे `_work` गमावले गेले. janitor तपासणी आणि removal एकाच टप्प्यात करते; ते काम
  त्यालाच करू द्या.
- जॉब सुरू असताना runner थांबवल्यास जॉब रद्द होतो (प्रत्यक्ष निरीक्षण): त्याच्या listener कडे
  `Runner.Worker` child नसतानाच `systemctl stop` वापरा — आणि ते एका command मध्ये करा.
- Workflows ने artefacts `/tmp` मध्ये ठेवू नयेत (ते RAM आहे). `$RUNNER_TEMP` मध्ये download करा
  (disk वर, प्रत्येक runner साठी स्वतंत्र) — 1.3 GB चे `next-build` artefact tmpfs वर येण्यासाठी
  27–32 मिनिटे लागली आणि disk वरून upload करण्यासाठी 2 मिनिटे लागली.
- `.15` VPS केवळ homologation साठी आहे — त्यावर CI runners कधीही चालत नाहीत.
