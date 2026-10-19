# Self-Hosted Runner Box Operations (.113 pool) (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

تعمل مجموعة التشغيل ذاتية الاستضافة على الجهاز **.113** (`tomni-proxmox-113`). منذ 2026-10-18، أصبح لكل
مشغّل OmniRoute **دور واحد** وتسمية واحدة وميزانية ذاكرة/CPU مضبوطة وفقًا للاستهلاك الذي قيس لحمل عمله.
تحصل خانة Turbopack على الموارد التي يحتاج إليها البناء، بينما تُضبط الخانات الأخرى وفقًا
لأقصى استهلاك مقاس لها. لا يتجاوز الجهاز موارده إلا عندما يتزامن بناء Turbopack مع بناء webpack
لـ Release-Green ومهمة lint؛ وتمتص مساحة swap الخاصة بالمضيف (16 GB) ذلك، ولأن عمليات البناء الخاصة بطلبات السحب تعمل
على مشغّلات مستضافة، تظل خانة Turbopack خاملة معظم الوقت:

| المشغّل              | التسمية        | الدور                                                                                                                                                            | `MemoryHigh` / `MemoryMax`       | `CPUQuota`      |
| -------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`   | عمليات بناء Turbopack: ‏`ci.yml` ‏`Build` (للدفع/التشغيل اليدوي فقط)، وDocker amd64، و`npm-publish`، و`nightly-v4-build`، و`preview-artifact`، وبناء a11y الليلي | 56 GB / 60 GB (‏swap بقيمة 0)    | 1600 %          |
| `omniroute-113-6`    | `omni-release` | ‏Release-Green ‏(`release-green` + `main-green`)، وبناء webpack                                                                                                  | 20 GB / 24 GB (‏swap بقيمة 4 GB) | 800 %           |
| `omniroute-113-2`    | `omni-light`   | المهام الليلية (Schemathesis وpromptfoo وgarak وk6 وتشغيل a11y) ومهمة `lint-guard` في `quality.yml`                                                              | 12 GB / 16 GB (‏swap بقيمة 4 GB) | 600 %           |
| `omniroute-113`      | `omni-light`   | المجموعة نفسها المذكورة أعلاه                                                                                                                                    | 8 GB / 12 GB                     | 400 %           |
| OmniHeuris, OmniMind | (مستودعاتهما)  | ‏Dependabot فقط (بلغت الذروة 155 MB لكل منهما، 2026-10-18)                                                                                                       | 4 GB / 6 GB                      | 200 % لكل منهما |

القياسات في 2026-10-18:

| المورد    | القيمة                         | ما يعنيه ذلك للجدولة                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 نواة**            | بلغ استهلاك بناء إنتاجي لـ Turbopack ذروته عند 49 GB من دون تقييد (`tests/unit/ci-build-bundler-webpack.test.ts`)؛ وفي Next 16.3.8، تحتفظ مرحلة الترجمة وحدها بنحو 40 GB (‏36 GB من RSS في `next-build` إضافةً إلى 17 عامل تحميل بسعة 3 GB، وفق قياسات 2026-10-18)؛ بينما يستهلك بناء webpack نحو 14–16 GB. يمكن تشغيل بناء Turbopack واحد مع بناء webpack واحد معًا؛ لكن لا يمكن تشغيل بنائي Turbopack معًا |
| swap      | 16 GB                          | يعمل `omniroute-113-5` مع تعطيل swap ‏(`MemorySwapMax=0`)، لذا يُوقَف أي بناء منفلت عند بلوغ حده بدلًا من دفع الجهاز إلى استخدام swap                                                                                                                                                                                                                                                                        |
| `/tmp`    | **12 GB من tmpfs = RAM**       | كل ما يُخزَّن هناك يستهلك الذاكرة؛ وتُحذف البقايا بعد 3 ساعات                                                                                                                                                                                                                                                                                                                                                |
| CPU       | لوحظ حمل بمقدار 60 على 32 نواة | قبل تطبيق الحصص، أدى بناء Turbopack واحد (نحو 1166 % من CPU) مع حزمة اختبارات تغطية على الجهاز نفسه إلى حرمان نبضات الاتصال الخاصة بالمستمعين الآخرين (`The self-hosted runner lost communication`، #16853)                                                                                                                                                                                                  |
| المشغّلات | **6 مستمعين**                  | ‏4 من OmniRoute بالإضافة إلى OmniHeuris وOmniMind؛ والمشغّلات `omniroute-113-3/-4/-7/-8` معطلة (يعيد `systemctl enable --now` أحدها إلى العمل)                                                                                                                                                                                                                                                               |

توجد الحدود في الملف `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` لكل وحدة
(مع الاحتفاظ بالقيم السابقة باسم `override.conf.bak-20261018`)، وقد طُبّقت مباشرةً باستخدام
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — من دون إعادة تشغيل، لذا لم
تتأثر أي مهمة قيد التشغيل. وتُغيَّر التسميات من خلال API الخاص بالمشغّلات
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`)، مباشرةً أيضًا.

## تثبيت أداة التنظيف (مرة واحدة، على الخادم)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (الجذر): كل 30 دقيقة، مع التسجيل في /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

أداة `lsof` مطلوبة: تتحقق أداة التنظيف من أن المسار خامل باستخدام لقطة واحدة للملفات
المفتوحة قبل إزالته، ومن دون هذه الأداة لا تزيل شيئًا وتوضح ذلك
(رمز الخروج 1). جرّب أي تغيير باستخدام `--dry-run` أولًا — إذ تطبع بالضبط ما كانت
ستفعله ولا تلمس أي شيء.

ما تفعله عند كل تشغيل: تنظّف البقايا الخاصة بنا (`runner-*`، و`omniroute-*`،
و`next-build*`، و`e2e-build.tar.gz`) بعد **3 ساعات على tmpfs** وبعد 24 ساعة على القرص
في `_work/_temp`؛ وتنهي عملية `next-build` التي يتجاوز عمرها 75 دقيقة (لا تستغرق أي مهمة كل هذا الوقت — ففي
2026-08-27 استمرت إحداها 70 دقيقة بعد أن أعلن GitHub فقدان مهمتها)؛ وتحذف نسخ العمل التي مضى عليها 48 ساعة
للمشغّلات التي تكون وحدتها **متوقفة**؛ وتطلق تنبيهات عندما يكون استخدام القرص ≥ 85%، أو تكون قيمة PSI للذاكرة
`full/avg60` ≥ 10%، أو يتجاوز عدد المستمعين `MAX_ACTIVE_RUNNERS` (مع توزيع بين
omniroute/other). رمز الخروج 1 = يلزم الانتباه؛ اقرأ السجل.

لا تلتقط قاعدة الـ75 دقيقة عملية بناء سبق أن تخلى GitHub عن مهمتها. عندما يتعذر على
`Runner.Listener` تجديد مهمته، يعرض `_diag/Runner_*.log`
`POST request to …/renewjob timed out after 100 seconds`، وتُبلغ API بأن المهمة `completed`
(فشل) بعد نحو عشر دقائق من آخر تجديد ناجح، بينما تستمر `next-build` في العمل
من دون مهمة مرتبطة بها (2026-10-18: فشلت عملية Build الخاصة بـ#17066 عند 19:43، وكانت عملية البناء التابعة لها لا تزال
تشغل 40 GB بعد خمس دقائق). تحقّق من المرجع في أحدث ملف `_diag/Worker_*.log`، ثم أرسل
SIGTERM إلى شجرة البناء فقط باستخدام PID — أي `next-build`، و`npm run build`، و`build-next-isolated.mjs`،
وعمليات `_work` العاملة. لا تلمس أبدًا `Runner.Listener` أو `RunnerService.js` أو `Runner.Worker`: إذ تُبلغ
العملية العاملة بأن المهمة ملغاة، ويعود المستمع إلى الاتصال تلقائيًا.

## وحدات المشغّل: KillMode

يؤدي الإعداد الافتراضي للمشغّل `KillMode=process` إلى إبقاء
`Runner.Worker → npm → next-build` قيد التشغيل عند إيقاف وحدة أو إعادة تشغيلها — فتستمر عملية بناء يتيمة في استهلاك ذاكرة RAM وCPU
من دون وجود مهمة مرتبطة بها. تحتوي كل وحدة OmniRoute على ملف إعداد إضافي
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
يتضمن `KillMode=mixed`: تُرسل SIGTERM إلى المستمع أولًا، ثم SIGKILL إلى مجموعة cgroup بأكملها عند
`TimeoutStop`. يسري ذلك عند إعادة تشغيل الوحدة في المرة التالية — أعد تشغيل **مشغّل واحد في
كل مرة، وفقط عندما يكون خاملًا**، مع تنفيذ التحقق من الخمول وإعادة التشغيل ضمن الأمر نفسه.

## قواعد التشغيل

- **عملية بناء Turbopack واحدة في كل مرة — ويُفرض ذلك بواسطة التصنيف.** كل مهمة تشغّل عملية
  `next build` كاملة باستخدام Turbopack تستهدف `[self-hosted, omni-build]`، ولا يحمل هذا
  التصنيف سوى **`omniroute-113-5`**: مهمة `Build` في `ci.yml`، ومهمة `publish` في
  `npm-publish.yml`، و`nightly-v4-build`، و`preview-artifact`، وعملية بناء a11y الليلية
  (#16853)، وعملية **amd64** في `docker-publish.yml` (باستخدام webpack داخل BuildKit —
  إذ انهار Turbopack هناك، في التشغيل 33253576569). تظل عملية Docker الخاصة بـ arm64 على
  `ubuntu-24.04-arm`. تتشارك عملية amd64 في `docker-publish` مجموعة التزامن
  `heavy-build-main` مع مهمة `Build` في `ci.yml` (`cancel-in-progress: false`). يجب أن يكون
  Docker Engine على `omniroute-113-5`. لا تتسع ذاكرة 78 GB لخانة Turbopack ثانية
  (2 × 33–37 GB بالإضافة إلى بقية أحمال الجهاز)؛ ولا تكون الخانة الثانية آمنة إلا لعمليات
  البناء باستخدام webpack.
- **تُشغَّل عمليات Build لطلبات السحب على بنية مستضافة (2026-10-18).** لا تصل مهمة `Build`
  في `ci.yml` إلى `omni-build` إلا عند `push` و`workflow_dispatch`؛ وكل عملية Build تخص
  `pull_request` (سواء من المصدر نفسه أو من fork) و`merge_group` تعمل على `ubuntu-latest`
  باستخدام webpack. عندما كان كل طلب سحب من المصدر نفسه يُوجَّه إلى الخانة، كانت عملية Build
  باستخدام Turbopack تحتجزها لمدة 29–58 min، واصطفت 18 عملية Build لمدة وصلت إلى 18 h، ولم
  تحصل عملية Build الخاصة بعملية push لخط الإصدار نفسه على الخانة سوى مرة واحدة من بين
  40 مهمة. على البنية المستضافة، تستغرق عملية Build نفسها لطلب السحب 8–12 min بالتوازي مع
  مهام طلب السحب الأخرى. ويظل Turbopack، وهو أداة التجميع التي يشحنها `npm-publish`، قيد
  الاختبار على خط الإصدار بواسطة عملية بناء a11y الليلية للفرع الافتراضي (04:41 UTC)،
  وبواسطة كل عملية Build ناتجة عن push أو dispatch تصل إلى الخانة، وبواسطة `npm-publish`
  نفسه. يثبّت `tests/unit/build/heavy-build-queue.test.ts` البوابة ذات الشروط الأربعة.
- **لا تقلّص أبدًا حجم خانة Turbopack إلى أقل من احتياجها المقاس.** في 2026-10-18 عند 18:06،
  خُفّضت الخانة من 56G/60G إلى 40G/44G لإفساح المجال لـ `omni-release`. ظلت مرحلة التجميع
  عند `MemoryHigh` طوال تشغيلها (بلغت قيمة `full` في memory PSI نسبة 30–43 %)، ولم يتمكن
  `Runner.Listener`، الذي يتشارك cgroup نفسه، من تجديد مهمته. أُعيد إعداد المالك البالغ
  56G/60G والمؤرخ في 2026-10-17 في اليوم نفسه. عند قيمة أقل من ذلك، لا تفشل عملية البناء؛
  بل تدخل في حالة خنق وتبديل مفرطين، وتُفقد المهمة.
- **لدى Release-Green خانته الخاصة (2026-10-18).** حتى ذلك الحين، كان كلا تحققي Release-Green
  يعملان على `omni-build`: عند كل push (حوالي 10/hour، مع إلغاء 97 من أصل 100 تشغيل push
  في منتصف العمل خلال يوم واحد)، وثلاث عمليات فحص كاملة يوميًا مدة كل منها نحو 2 h
  (انتظر فحص 05:29 مدة 6 h للحصول على الخانة) — كانت خانة البناء الوحيدة محجوزة بما يفوق
  سعتها عدة مرات، وكانت عمليات Build لطلبات السحب من المصدر نفسه تنتظر لساعات.
  يستهدف `release-green` و`main-green` الآن `omni-release` (`omniroute-113-6` فقط) مع
  `OMNIROUTE_USE_TURBOPACK=0`، ولم يعد التشغيل الذي بدأ يُلغى بسبب push أحدث (لكن الخانة
  المعلّقة لا تزال تدمج سيل الطلبات). يثبّت
  `tests/unit/build/runner-capacity-routing.test.ts` التوجيه، والتحويل إلى webpack، وحقيقة
  أن لا شيء على `omni-release` يُبنى باستخدام Turbopack.
- **المجموعة الخفيفة: `omni-light`.** يشغّل `omniroute-113` و`omniroute-113-2` المهام الليلية
  التي تحتاج إلى `next build` للواجهة الخلفية فقط (حوالي 5–6 GB؛ باستخدام webpack)، وإلى
  مهمة `lint-guard` في `quality.yml`. كان `MemoryHigh=4G` على `omniroute-113` حتى
  2026-10-18 — أمضت عملية بناء promptfoo مدة 54 minutes تستعيد الذاكرة بصعوبة هناك؛ ويزيل
  تخصيص 8 GB هذا الخنق.
- **عدد أقل من المستمعين عن قصد.** عُطّلت أربع وحدات OmniRoute في 2026-08-29 — فكل مستمع
  إضافي هو مستأجر آخر ضمن ميزانية الذاكرة المذكورة أعلاه. الحد الأقصى لدى أداة التنظيف هو
  6 (`MAX_ACTIVE_RUNNERS=6` في cron): فهي تحسب كل `Runner.Listener` على الجهاز، ويضيف
  OmniHeuris وOmniMind اثنين إلى وحداتنا الأربع.
- **لا تنظّف أبدًا `/tmp` أو `_work` يدويًا بينما يكون أي مشغّل مشغولًا.** أدّى إجراء
  فحص ثم حذف مع وجود فاصل زمني بينهما إلى فقدان مهمة Build نشطة لدليل `_work` الخاص بها
  في 2026-08-27. تنفّذ أداة التنظيف الفحص والإزالة في خطوة واحدة؛ فاتركها تتولى ذلك.
- يؤدي إيقاف مشغّل في منتصف مهمة إلى إلغاء المهمة (وفقًا لمشاهدة مباشرة): لا تستخدم
  `systemctl stop` إلا عندما لا يكون لدى المستمع الخاص به أي عملية فرعية `Runner.Worker` —
  ونفّذ ذلك بأمر واحد.
- يجب ألا تخزّن مسارات العمل العناصر الأثرية في `/tmp` (فهو موجود في RAM). نزّلها إلى
  `$RUNNER_TEMP` (على القرص، ولكل مشغّل على حدة) — استغرق وصول العنصر الأثري `next-build`
  بحجم 1.3 GB إلى tmpfs مدة 27–32 minutes، بينما استغرق رفعه من القرص دقيقتين.
- خادم VPS ذي العنوان `.15` مخصص لمرحلة homologation فقط — ولا يشغّل أبدًا مشغّلات CI.
