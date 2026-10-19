# Self-Hosted Runner Box Operations (.113 pool) (नेपाली)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

सेल्फ-होस्टेड पूल **.113** बक्स (`tomni-proxmox-113`) मा चल्छ। 2026-10-18 देखि प्रत्येक
OmniRoute रनरसँग **एउटा भूमिका**, एउटा लेबल, र त्यसको कार्यभारको मापनअनुसार निर्धारण गरिएको मेमोरी/CPU बजेट
छ। Turbopack स्लटले बिल्डलाई आवश्यक स्रोत पाउँछ; अन्य स्लटहरू तिनका
मापन गरिएका उच्चतम प्रयोगअनुसार निर्धारण गरिएका छन्। Turbopack बिल्ड, Release-Green
webpack बिल्ड र lint कार्य एकैपटक पर्दा मात्र बक्सले क्षमताभन्दा बढी स्रोत विनियोजन गर्छ; होस्ट swap (16 GB) ले त्यसलाई सम्हाल्छ, र pull-request का Build हरू
होस्टेड रनरमा चल्ने भएकाले Turbopack स्लट अधिकांश समय निष्क्रिय रहन्छ:

| रनर                  | लेबल           | भूमिका                                                                                                                                                    | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack बिल्डहरू: `ci.yml` `Build` (push/dispatch मात्र), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, र रात्रिकालीन a11y बिल्ड | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack बिल्ड                                                                                             | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`   | रात्रिकालीन कार्यहरू (Schemathesis, promptfoo, garak, k6, a11y boot) र `quality.yml` `lint-guard`                                                         | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`   | माथिकै पूल                                                                                                                                                | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (तिनका repos)  | Dependabot मात्र (प्रत्येकको उच्चतम प्रयोग 155 MB, 2026-10-18)                                                                                            | 4 GB / 6 GB                | प्रत्येक 200 % |

2026-10-18 मा मापन गरिएको:

| स्रोत     | मान                        | शेड्युलिङका लागि यसको अर्थ                                                                                                                                                                                                                                                                                                                                                              |
| --------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cores**       | सीमा नलगाइएको Turbopack production बिल्डको उच्चतम प्रयोग 49 GB थियो (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8 मा compile चरणले मात्र ~40 GB ओगट्छ (`next-build` मा 36 GB RSS र 3 GB का 17 loader workers, 2026-10-18 मा मापन गरिएको); webpack बिल्डले ~14–16 GB प्रयोग गर्छ। एउटा Turbopack + एउटा webpack बिल्ड सँगसँगै अटाउँछन्; दुईवटा Turbopack बिल्ड अटाउँदैनन् |
| swap      | 16 GB                      | `omniroute-113-5` swap बन्द गरेर (`MemorySwapMax=0`) चल्छ, त्यसैले नियन्त्रणबाहिर गएको बिल्डले बक्सलाई swap गराउनुको सट्टा आफ्नो सीमामा पुगेपछि रोकिन्छ                                                                                                                                                                                                                                 |
| `/tmp`    | **12 GB tmpfs = RAM**      | त्यहाँ राखिएको जुनसुकै कुरा मेमोरीमै हुन्छ; बाँकी रहेका फाइलहरू 3 h पछि हटाइन्छन्                                                                                                                                                                                                                                                                                                       |
| CPU       | 32 cores मा load 60 देखियो | quotas लागू हुनुअघि, एउटै बक्समा एउटा Turbopack बिल्ड (~1166 % CPU) र coverage suite सँगसँगै चल्दा अन्य listeners का heartbeats ले पर्याप्त स्रोत पाएनन् (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                          |
| runners   | **6 listeners**            | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` निष्क्रिय छन् (`systemctl enable --now` ले एउटालाई पुनः सक्रिय गर्छ)                                                                                                                                                                                                                                                    |

सीमाहरू प्रत्येक unit को `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
मा छन् (अघिल्ला मानहरू `override.conf.bak-20261018` का रूपमा राखिएका छन्) र
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` प्रयोग गरेर प्रत्यक्ष रूपमा लागू गरिएका थिए — restart गरिएको थिएन, त्यसैले चलिरहेको
कुनै पनि job प्रभावित भएन। लेबलहरू पनि runners API मार्फत
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) प्रत्यक्ष रूपमा परिवर्तन गरिन्छन्।

## janitor स्थापना गर्नुहोस् (एक पटक, मेसिनमा)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): प्रत्येक 30 मिनेटमा, /var/log/runner-janitor.log मा लग गर्नुहोस्
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` आवश्यक छ: janitor ले कुनै पथ हटाउनुअघि खुला फाइलहरूको एउटा स्न्यापसटबाट
त्यो निष्क्रिय रहेको प्रमाणित गर्छ, र यो उपकरण नभएमा केही पनि हटाउँदैन र त्यसबारे जानकारी दिन्छ
(exit 1)। कुनै पनि परिवर्तनलाई पहिले `--dry-run` प्रयोग गरेर प्रयास गर्नुहोस् — यसले ठ्याक्कै के
गर्ने थियो भन्ने प्रिन्ट गर्छ र केही पनि छुँदैन।

यसले प्रत्येक रनमा गर्ने काम: **tmpfs मा 3 घण्टा** र डिस्कको
`_work/_temp` मा 24 घण्टापछि हाम्रै बाँकी रहेका फाइलहरू (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) सफा गर्छ; 75 मिनेटभन्दा पुरानो `next-build` समाप्त गर्छ
(कुनै पनि job त्यति लामो चल्दैन — 2026-08-27 मा GitHub ले त्यसको job हराएको घोषणा गरेपछि
एउटा 70 मिनेटसम्म चलेको थियो); unit **रोकिएको** runner का 48 घण्टा पुराना
checkout हरू हटाउँछ; डिस्क ≥ 85 %, memory PSI `full/avg60` ≥ 10 %, र
`MAX_ACTIVE_RUNNERS` भन्दा धेरै listener भएमा (omniroute/अन्य विवरणसहित) सचेत गराउँछ।
Exit 1 = ध्यान दिन आवश्यक छ; लग पढ्नुहोस्।

75-मिनेटको नियमले GitHub ले पहिले नै छाडिसकेको job को build समात्दैन। जब
`Runner.Listener` ले आफ्नो job नवीकरण गर्न सक्दैन, `_diag/Runner_*.log` मा
`POST request to …/renewjob timed out after 100 seconds` देखिन्छ, API ले पछिल्लो सफल
नवीकरणको करिब दस मिनेटपछि job लाई `completed` (विफल) भएको रिपोर्ट गर्छ, र कुनै job
संलग्न नभए पनि `next-build` चलिरहन्छ (2026-10-18: #17066 को Build 19:43 मा विफल भएको
थियो र पाँच मिनेटपछि पनि त्यसको build ले 40 GB ओगटिरहेको थियो)। सबैभन्दा नयाँ
`_diag/Worker_*.log` मा ref पुष्टि गर्नुहोस्, त्यसपछि PID का आधारमा build tree लाई मात्र
SIGTERM पठाउनुहोस् — `next-build`, `npm run build`, `build-next-isolated.mjs` र
`_work` worker हरू। `Runner.Listener`, `RunnerService.js` वा `Runner.Worker` लाई कहिल्यै
नछुनुहोस्: worker ले job रद्द भएको रिपोर्ट गर्छ र listener आफैं फेरि अनलाइन हुन्छ।

## Runner एकाइहरू: KillMode

Runner को पूर्वनिर्धारित `KillMode=process` ले एकाइ रोकिँदा वा पुनः सुरु हुँदा पनि `Runner.Worker → npm → next-build`
लाई जीवितै छोड्छ — कुनै job संलग्न नभएको अनाथ build ले RAM र
CPU खपत गरिरहन्छ। प्रत्येक OmniRoute एकाइमा
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
मा `KillMode=mixed` सहितको drop-in हुन्छ: पहिले listener लाई SIGTERM, त्यसपछि
`TimeoutStop` मा सम्पूर्ण cgroup लाई SIGKILL। यो एकाइको अर्को restart मा लागू हुन्छ — **एक पटकमा एउटा runner मात्र,
त्यो पनि idle हुँदा मात्रै** restart गर्नुहोस्, र idle जाँच तथा restart एउटै command मा गर्नुहोस्।

## सञ्चालन नियमहरू

- **एक पटकमा एउटा Turbopack बिल्ड — लेबलद्वारा लागू गरिएको।** पूर्ण Turbopack
  `next build` चलाउने प्रत्येक job ले `[self-hosted, omni-build]` लक्षित गर्छ, र केवल **`omniroute-113-5`** सँग मात्र त्यो
  लेबल छ: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  रात्रीकालीन a11y बिल्ड (#16853) र `docker-publish.yml` **amd64** (BuildKit भित्र webpack —
  त्यहाँ Turbopack क्र्यास भयो, run 33253576569)। arm64 Docker चरण `ubuntu-24.04-arm` मै रहन्छ।
  `docker-publish` amd64 ले `ci.yml` `Build` सँग `heavy-build-main` concurrency group साझेदारी गर्छ
  (`cancel-in-progress: false`)। Docker Engine `omniroute-113-5` मा हुनैपर्छ। दोस्रो Turbopack
  slot 78 GB मा अट्दैन (2 × 33–37 GB र बाँकी प्रणालीको प्रयोग); दोस्रो slot केवल
  webpack बिल्डहरूका लागि मात्र सुरक्षित छ।
- **Pull-request बिल्डहरू hosted मा चल्छन् (2026-10-18)।** `ci.yml` `Build` ले
  `push` र `workflow_dispatch` का लागि मात्र `omni-build` प्रयोग गर्छ; प्रत्येक `pull_request`
  (आफ्नै origin वा fork) र `merge_group` बिल्ड webpack सहित `ubuntu-latest` मा चल्छ।
  आफ्नै origin का प्रत्येक PR लाई उक्त slot मा पठाउँदा, एउटा Turbopack बिल्डले यसलाई 29–58 मिनेटसम्म
  ओगट्थ्यो, 18 वटा बिल्डहरू 18 घण्टासम्म queue मा बसे, र release line को आफ्नै push बिल्डले
  40 jobs मध्ये एक पटक मात्र slot पायो। Hosted मा उही PR बिल्डले PR का अन्य
  jobs सँगसँगै 8–12 मिनेट लिन्छ। `npm-publish` ले पठाउने bundler Turbopack लाई
  default branch को रात्रीकालीन a11y बिल्ड (04:41 UTC), slot मा पुग्ने प्रत्येक push वा dispatch बिल्ड,
  र `npm-publish` स्वयंले release line मा निरन्तर परीक्षण गरिरहन्छन्।
  `tests/unit/build/heavy-build-queue.test.ts` ले चार-सर्ते gate लाई स्थिर राख्छ।
- **Turbopack slot लाई यसको मापन गरिएको आवश्यकताभन्दा कहिल्यै सानो नबनाउनुहोस्।** 2026-10-18 मा 18:06 बजे
  `omni-release` का लागि ठाउँ बनाउन slot लाई 56G/60G बाट 40G/44G मा घटाइयो। Compile चरण आफ्नो
  पूरै run भरि `MemoryHigh` मा रह्यो (memory PSI `full` 30–43 %), र सोही cgroup साझेदारी गर्ने
  `Runner.Listener` ले आफ्नो job नवीकरण गर्न सकेन। 2026-10-17 को मालिकद्वारा तय गरिएको 56G/60G
  सोही दिन पुनर्स्थापित गरियो। त्यो मानभन्दा कममा बिल्ड असफल हुँदैन; यो अत्यधिक paging मा फस्छ,
  र job हराउँछ।
- **Release-Green को आफ्नै slot छ (2026-10-18)।** त्यसअघिसम्म दुवै Release-Green validation
  `omni-build` मा चल्थे: प्रत्येक push मा (~10/hour, एक दिनमा 100 push runs मध्ये 97 वटा कामकै बीचमा
  रद्द भए) र दिनमा तीनवटा ~2 h का पूर्ण sweep (05:29 को sweep ले slot का लागि 6 h पर्खियो) —
  एकल build slot को क्षमताभन्दा धेरै गुणा बढी माग थियो र आफ्नै origin का PR बिल्डहरूले घण्टौँ पर्खिए।
  `release-green` र `main-green` ले अब `OMNIROUTE_USE_TURBOPACK=0` सहित `omni-release`
  (केवल `omniroute-113-6`) लक्षित गर्छन्, र सुरु भइसकेको run लाई नयाँ push ले अब रद्द गर्दैन
  (pending slot ले अझै पनि अत्यधिक आवेगलाई समेट्छ)। `tests/unit/build/runner-capacity-routing.test.ts`
  ले routing, webpack switch र `omni-release` मा कुनै पनि कुराले Turbopack मार्फत बिल्ड नगर्ने कुरा
  स्थिर राख्छ।
- **हल्का pool: `omni-light`।** `omniroute-113` र `omniroute-113-2` ले केवल backend को
  `next build` (~5–6 GB; webpack) आवश्यक पर्ने रात्रीकालीन jobs र `quality.yml` `lint-guard` चलाउँछन्।
  `omniroute-113` मा 2026-10-18 सम्म `MemoryHigh=4G` थियो — promptfoo बिल्डले त्यहाँ 54 मिनेटसम्म
  memory reclaim गर्दै अघि बढ्यो; 8 GB ले throttling हटाउँछ।
- **जानाजानी थोरै listeners।** चारवटा OmniRoute units 2026-08-29 मा निष्क्रिय गरिए — प्रत्येक अतिरिक्त
  listener माथिको memory budget को अर्को tenant हो। janitor को अधिकतम सीमा 6 हो
  (`MAX_ACTIVE_RUNNERS=6` in cron): यसले box मा रहेका प्रत्येक `Runner.Listener` गन्छ, र
  OmniHeuris + OmniMind ले हाम्रा चारमा थप दुईवटा थप्छन्।
- **कुनै पनि runner व्यस्त हुँदा `/tmp` वा `_work` लाई हातैले कहिल्यै सफा नगर्नुहोस्।**
  जाँच र मेटाउने कार्यबीच अन्तर भएको check-then-delete कै कारण 2026-08-27 मा चलिरहेको Build job ले
  आफ्नो `_work` गुमाएको थियो। janitor ले जाँच र हटाउने काम एउटै चरणमा गर्छ;
  उसैलाई गर्न दिनुहोस्।
- job चलिरहँदा runner रोक्दा job रद्द हुन्छ (प्रत्यक्ष अवलोकन गरिएको): `systemctl stop` केवल
  listener सँग कुनै `Runner.Worker` child नभएको अवस्थामा मात्र चलाउनुहोस् — र यो एउटै command मा गर्नुहोस्।
- Workflows ले artefacts लाई `/tmp` मा राखेर छोड्नु हुँदैन (यो RAM हो)। `$RUNNER_TEMP` मा
  download गर्नुहोस् (disk मा, प्रत्येक runner का लागि छुट्टै) — 1.3 GB को `next-build` artefact लाई
  tmpfs मा पुग्न 27–32 मिनेट लाग्यो र disk बाट upload गर्न 2 मिनेट लाग्यो।
- `.15` VPS homologation का लागि मात्र हो — यसले कहिल्यै CI runners चलाउँदैन।
