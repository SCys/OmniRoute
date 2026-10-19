# Self-Hosted Runner Box Operations (.113 pool) (বাংলা)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

স্ব-হোস্টেড পুলটি **.113** মেশিনে (`tomni-proxmox-113`) চলে। 2026-10-18 থেকে প্রতিটি
OmniRoute runner-এর **একটি ভূমিকা**, একটি label এবং তার কাজের চাপের পরিমাপ অনুযায়ী নির্ধারিত
memory/CPU budget রয়েছে। Turbopack slot-টি build-এর প্রয়োজনীয় resource পায়; অন্য slot-গুলোর
আকার তাদের পরিমাপ করা সর্বোচ্চ ব্যবহারের ভিত্তিতে নির্ধারিত। Turbopack build-এর সঙ্গে Release-Green
webpack build এবং একটি lint job একই সময়ে চললেই কেবল মেশিনটি overcommit করে; host swap (16 GB)
সেটি সামলে নেয়, আর pull-request build-গুলো hosted পরিবেশে চলার কারণে Turbopack slot-টি অধিকাংশ সময় নিষ্ক্রিয় থাকে:

| runner               | label          | ভূমিকা                                                                                                                                          | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack build: `ci.yml` `Build` (শুধু push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nightly a11y build | 56 GB / 60 GB (swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack build                                                                                   | 20 GB / 24 GB (swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`   | nightly job-গুলো (Schemathesis, promptfoo, garak, k6, a11y boot) এবং `quality.yml` `lint-guard`                                                 | 12 GB / 16 GB (swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`   | উপরের একই পুল                                                                                                                                   | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (তাদের repo)   | শুধু Dependabot (প্রতিটির সর্বোচ্চ ব্যবহার 155 MB, 2026-10-18)                                                                                  | 4 GB / 6 GB                | প্রতিটি 200 % |

2026-10-18-এ পরিমাপ করা হয়েছে:

| resource  | মান                         | scheduling-এর ক্ষেত্রে এর অর্থ                                                                                                                                                                                                                                                                                                                                                                            |
| --------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 core**         | সীমাবিহীন একটি Turbopack production build সর্বোচ্চ 49 GB-তে পৌঁছেছিল (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8-এ শুধু compile phase-ই ~40 GB ধরে রাখে (`next-build`-এ 36 GB RSS এবং 3 GB ব্যবহারকারী 17টি loader worker, 2026-10-18-এ পরিমাপ করা); একটি webpack build প্রায় 14–16 GB ব্যবহার করে। একটি Turbopack ও একটি webpack build একসঙ্গে চলতে পারে; দুটি Turbopack build পারে না |
| swap      | 16 GB                       | `omniroute-113-5`-এ swap বন্ধ (`MemorySwapMax=0`), তাই কোনো build নিয়ন্ত্রণের বাইরে গেলে পুরো মেশিনকে swap করানোর বদলে নির্ধারিত cap-এ সেটিকে বন্ধ করা হয়                                                                                                                                                                                                                                               |
| `/tmp`    | **12 GB tmpfs = RAM**       | এখানে রাখা যেকোনো কিছু memory ব্যবহার করে; অবশিষ্ট ফাইল 3 ঘণ্টা পর সরিয়ে ফেলা হয়                                                                                                                                                                                                                                                                                                                        |
| CPU       | 32 core-এ load 60 দেখা গেছে | quota চালুর আগে, একই মেশিনে একটি Turbopack build (~1166 % CPU) এবং একটি coverage suite একসঙ্গে চললে অন্য listener-গুলোর heartbeat resource starvation-এর শিকার হতো (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                  |
| runner    | **6টি listener**            | 4টি OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` নিষ্ক্রিয় (`systemctl enable --now` চালালে একটি আবার সক্রিয় হয়)                                                                                                                                                                                                                                                                      |

limit-গুলো প্রতিটি unit-এর `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`-এ রয়েছে
(আগের মানগুলো `override.conf.bak-20261018` হিসেবে রাখা হয়েছে) এবং live অবস্থায়
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` দিয়ে প্রয়োগ করা হয়েছে — কোনো restart করা হয়নি, তাই
চলমান কোনো job-এ প্রভাব পড়েনি। Runners API-এর মাধ্যমে label পরিবর্তন করা হয়
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), এটিও live অবস্থায় করা হয়।

## janitor ইনস্টল করুন (একবার, সার্ভারে)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): প্রতি ৩০ মিনিটে, /var/log/runner-janitor.log-এ লগ করুন
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` আবশ্যক: কোনো পাথ অপসারণের আগে janitor খোলা ফাইলগুলোর একটি
স্ন্যাপশট নিয়ে নিশ্চিত করে যে সেটি নিষ্ক্রিয়, আর এই টুলটি না থাকলে এটি কিছুই
অপসারণ করে না এবং সে কথা জানায় (exit 1)। যেকোনো পরিবর্তন প্রথমে `--dry-run`
দিয়ে পরীক্ষা করুন — এটি ঠিক কী করবে তা দেখায় এবং কিছুই পরিবর্তন করে না।

প্রতিবার চালানোর সময় এটি যা করে: **tmpfs-এ ৩ ঘণ্টা** এবং ডিস্কের
`_work/_temp`-এ ২৪ ঘণ্টা পর আমাদের নিজস্ব অবশিষ্টাংশ (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) পরিষ্কার করে; ৭৫ মিনিটের বেশি পুরোনো
`next-build` বন্ধ করে (কোনো job এত দীর্ঘ সময় চলে না — 2026-08-27 তারিখে GitHub
সংশ্লিষ্ট job-টিকে হারিয়ে গেছে ঘোষণা করার পরও একটি ৭০ মিনিট চলেছিল); যেসব
runner-এর unit **বন্ধ**, সেগুলোর ৪৮ ঘণ্টার পুরোনো checkout ছাঁটাই করে; disk ≥ 85 %,
memory PSI `full/avg60` ≥ 10 %, এবং listener-এর সংখ্যা `MAX_ACTIVE_RUNNERS`-এর
চেয়ে বেশি হলে সতর্ক করে (omniroute/অন্যান্য বিভাজনসহ)। Exit 1 = মনোযোগ প্রয়োজন;
লগটি পড়ুন।

GitHub ইতিমধ্যে ছেড়ে দিয়েছে এমন কোনো job-এর build ৭৫ মিনিটের নিয়মে ধরা পড়ে না।
`Runner.Listener` যখন তার job নবায়ন করতে পারে না, তখন `_diag/Runner_*.log`-এ
`POST request to …/renewjob timed out after 100 seconds` দেখা যায়, সর্বশেষ সফল
নবায়নের প্রায় দশ মিনিট পর API job-টিকে `completed` (failure) হিসেবে দেখায়, এবং
কোনো job সংযুক্ত না থাকলেও `next-build` চলতে থাকে (2026-10-18: #17066-এর Build
19:43-এ failed হয়েছিল, এবং পাঁচ মিনিট পরও তার build 40 GB ধরে রেখেছিল)। সর্বশেষ
`_diag/Worker_*.log`-এ ref নিশ্চিত করুন, তারপর PID অনুযায়ী শুধু build tree-তে
SIGTERM পাঠান — `next-build`, `npm run build`, `build-next-isolated.mjs` এবং
`_work` worker-গুলোতে। কখনোই `Runner.Listener`, `RunnerService.js` বা
`Runner.Worker` স্পর্শ করবেন না: worker job-টিকে cancelled হিসেবে রিপোর্ট করে এবং
listener নিজে থেকেই আবার online হয়ে যায়।

## Runner ইউনিট: KillMode

Runner-এর ডিফল্ট `KillMode=process`-এর কারণে কোনো ইউনিট বন্ধ বা পুনরায় চালু করা হলে `Runner.Worker → npm → next-build`
চালু থেকে যায় — কোনো job সংযুক্ত না থাকা অবস্থায় একটি অনাথ build RAM ও
CPU ব্যবহার করতে থাকে। প্রতিটি OmniRoute ইউনিটে একটি drop-in রয়েছে
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
যার `KillMode=mixed`: প্রথমে listener-কে SIGTERM এবং `TimeoutStop`-এ পুরো cgroup-কে
SIGKILL পাঠানো হয়। ইউনিটটি পরেরবার পুনরায় চালু হলে এটি কার্যকর হবে — **একবারে একটি runner,
শুধু idle থাকা অবস্থায়** পুনরায় চালু করুন, এবং idle পরীক্ষা ও restart একই command-এ রাখুন।

## পরিচালনবিধি

- **একবারে একটি Turbopack build — label দ্বারা প্রয়োগ করা হয়।** পূর্ণ Turbopack
  `next build` চালানো প্রতিটি job `[self-hosted, omni-build]` লক্ষ্য করে, এবং কেবল **`omniroute-113-5`**-এই
  label রয়েছে: `ci.yml`-এর `Build`, `npm-publish.yml`-এর `publish`, `nightly-v4-build`, `preview-artifact`,
  nightly a11y build (#16853) এবং `docker-publish.yml`-এর **amd64** (BuildKit-এর ভেতরে webpack —
  সেখানে Turbopack panic করেছিল, run 33253576569)। arm64 Docker ধাপটি `ubuntu-24.04-arm`-এই থাকে।
  `docker-publish`-এর amd64, `ci.yml`-এর `Build`-এর সঙ্গে `heavy-build-main` concurrency group ভাগ করে
  (`cancel-in-progress: false`)। Docker Engine অবশ্যই `omniroute-113-5`-এ থাকতে হবে। দ্বিতীয় Turbopack
  slot 78 GB-তে আঁটে না (2 × 33–37 GB এবং সঙ্গে মেশিনের বাকি অংশ); দ্বিতীয় slot কেবল
  webpack build-এর জন্য নিরাপদ।
- **Pull-request Build-গুলো hosted পরিবেশে চলে (2026-10-18)।** `ci.yml`-এর `Build` কেবল
  `push` এবং `workflow_dispatch`-এর ক্ষেত্রে `omni-build`-এ পৌঁছায়; প্রতিটি `pull_request` (নিজস্ব origin বা fork)
  এবং `merge_group` Build webpack-সহ `ubuntu-latest`-এ চলে। প্রতিটি নিজস্ব-origin PR slot-এ পাঠানো হলে, একটি Turbopack
  Build সেটি 29–58 মিনিট ধরে রাখত, 18টি Build সর্বোচ্চ 18 ঘণ্টা পর্যন্ত queue-তে ছিল, এবং release line-এর নিজস্ব push Build
  40টি job-এর মধ্যে একবার slot পেয়েছিল। Hosted পরিবেশে একই PR Build, PR-এর অন্যান্য
  job-এর পাশাপাশি 8–12 মিনিট সময় নেয়। `npm-publish` যে bundler সরবরাহ করে সেই Turbopack, release line-এ
  default branch-এর nightly a11y build (04:41 UTC), slot-এ পৌঁছানো প্রতিটি push বা dispatch Build,
  এবং `npm-publish` নিজেই অনুশীলন করাতে থাকে। `tests/unit/build/heavy-build-queue.test.ts`
  চার-clause-এর gate-টি স্থিরভাবে যাচাই করে।
- **Turbopack slot-কে কখনোই তার পরিমাপ করা প্রয়োজনের চেয়ে ছোট করবেন না।** 2026-10-18 তারিখে 18:06-এ
  `omni-release`-এর জন্য জায়গা করতে slot-টি 56G/60G থেকে 40G/44G-তে নামানো হয়েছিল। compile phase পুরো
  run জুড়ে `MemoryHigh`-এ আটকে ছিল (memory PSI `full` 30–43 %), এবং একই cgroup ভাগ করা
  `Runner.Listener` তার job renew করতে পারেনি। 2026-10-17-এর মালিক-নির্ধারিত 56G/60G একই
  দিনে পুনর্বহাল করা হয়। এর চেয়ে কম মানে build ব্যর্থ হয় না; এটি thrash করে, এবং job-টি হারিয়ে যায়।
- **Release-Green-এর নিজস্ব slot রয়েছে (2026-10-18)।** তার আগে Release-Green-এর উভয় validation
  `omni-build`-এ চলত: প্রতিটি push-এ (~10/hour, এক দিনে 100টি push run-এর মধ্যে 97টি কাজের মাঝপথে
  বাতিল হয়েছে) এবং দিনে তিনটি ~2 h পূর্ণ sweep (05:29-এর sweep slot-এর জন্য 6 h অপেক্ষা করেছিল) —
  একমাত্র build slot-এর ধারণক্ষমতা কয়েক গুণ ছাড়িয়ে গিয়েছিল এবং নিজস্ব-origin PR Build-গুলো ঘণ্টার পর ঘণ্টা অপেক্ষা করত।
  `release-green` এবং `main-green` এখন `OMNIROUTE_USE_TURBOPACK=0`-সহ `omni-release`
  (শুধু `omniroute-113-6`) লক্ষ্য করে, এবং শুরু হয়ে যাওয়া run আর নতুন push-এর কারণে বাতিল হয় না (pending
  slot এখনও অতিরিক্ত run-এর ঝড়কে সংকুচিত করে)। `tests/unit/build/runner-capacity-routing.test.ts`
  routing, webpack switch এবং `omni-release`-এর কোনো কিছুই যে Turbopack দিয়ে build হয় না—তা স্থিরভাবে যাচাই করে।
- **হালকা pool: `omni-light`।** `omniroute-113` এবং `omniroute-113-2` এমন nightly run করে, যেগুলোর
  কেবল backend-এর জন্য একটি `next build` (~5–6 GB; webpack) এবং `quality.yml`-এর `lint-guard` প্রয়োজন।
  2026-10-18 পর্যন্ত `omniroute-113`-এ `MemoryHigh=4G` ছিল — promptfoo build সেখানে reclaim করতে করতে
  54 মিনিট কাটিয়েছিল; 8 GB throttling দূর করে।
- **ইচ্ছাকৃতভাবেই listener কম রাখা হয়েছে।** 2026-08-29-এ চারটি OmniRoute unit নিষ্ক্রিয় করা হয়েছিল — প্রতিটি অতিরিক্ত
  listener উপরোক্ত memory budget-এর আরও একজন tenant। janitor-এর সর্বোচ্চ সীমা 6 (`MAX_ACTIVE_RUNNERS=6` cron-এ): এটি
  মেশিনের প্রতিটি `Runner.Listener` গণনা করে, এবং আমাদের চারটির সঙ্গে OmniHeuris + OmniMind আরও দুটি যোগ করে।
- **কোনো runner ব্যস্ত থাকা অবস্থায় কখনোই হাতে `/tmp` বা `_work` পরিষ্কার করবেন না।**
  যাচাই করা ও মুছে ফেলার মাঝখানে বিরতি থাকা check-then-delete-এর কারণেই 2026-08-27-এ একটি সক্রিয় Build job তার
  `_work` হারিয়েছিল। janitor এক ধাপেই যাচাই ও অপসারণ করে;
  সেটিকেই কাজটি করতে দিন।
- job চলাকালে runner বন্ধ করলে job-টি বাতিল হয় (সরাসরি পর্যবেক্ষিত): কেবল তখনই `systemctl stop`
  চালান, যখন তার listener-এর কোনো `Runner.Worker` child নেই — এবং এটি একটি command-এই করুন।
- Workflow-গুলো `/tmp`-এ artefact রাখা অবস্থায় ফেলে রাখবে না (এটি RAM)। Download করুন
  `$RUNNER_TEMP`-এ (disk-এ, runner-প্রতি আলাদা) — 1.3 GB `next-build` artefact-টি tmpfs-এ নামতে 27–32
  মিনিট এবং disk থেকে upload হতে 2 মিনিট সময় নিয়েছিল।
- `.15` VPS কেবল homologation-এর জন্য — সেখানে কখনোই CI runner চলে না।
