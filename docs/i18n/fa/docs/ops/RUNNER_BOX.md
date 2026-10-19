# Self-Hosted Runner Box Operations (.113 pool) (فارسی)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

مخزن runnerهای self-hosted روی میزبان **.113** (`tomni-proxmox-113`) اجرا میشود. از 2026-10-18، هر
runner مربوط به OmniRoute دارای **یک نقش**، یک label و بودجهٔ حافظه/CPU متناسب با مصرف اندازهگیریشدهٔ
بار کاری خود است. اسلات Turbopack منابع موردنیاز build را دریافت میکند؛ سایر اسلاتها متناسب با
بیشینهٔ مصرف اندازهگیریشدهٔ خود تنظیم شدهاند. میزبان فقط زمانی بیشازحد تخصیص میدهد که یک build با
Turbopack همزمان با یک build از نوع Release-Green با webpack و یک job مربوط به lint اجرا شود؛
swap میزبان (16 GB) این وضعیت را پوشش میدهد و چون Buildهای pull request روی runnerهای hosted اجرا
میشوند، اسلات Turbopack بیشتر اوقات بیکار است:

| runner               | label            | نقش                                                                                                                                               | `MemoryHigh` / `MemoryMax` | `CPUQuota`        |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`     | buildهای Turbopack: `ci.yml` `Build` (فقط push/dispatch)، Docker amd64، `npm-publish`، `nightly-v4-build`، `preview-artifact` و build شبانهٔ a11y | 56 GB / 60 GB (swap 0)     | 1600 %            |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`)، build با webpack                                                                                  | 20 GB / 24 GB (swap 4 GB)  | 800 %             |
| `omniroute-113-2`    | `omni-light`     | jobهای شبانه (Schemathesis، promptfoo، garak، k6 و راهاندازی a11y) و `quality.yml` `lint-guard`                                                   | 12 GB / 16 GB (swap 4 GB)  | 600 %             |
| `omniroute-113`      | `omni-light`     | همان مخزن بالا                                                                                                                                    | 8 GB / 12 GB               | 400 %             |
| OmniHeuris, OmniMind | (مخزنهای خودشان) | فقط Dependabot (بیشینهٔ مصرف هرکدام 155 MB، 2026-10-18)                                                                                           | 4 GB / 6 GB                | 200 % برای هرکدام |

اندازهگیریشده در 2026-10-18:

| منبع      | مقدار                        | مفهوم آن برای زمانبندی                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 هسته**          | بیشینهٔ مصرف یک build عملیاتی Turbopack بدون محدودیت به 49 GB رسید (`tests/unit/ci-build-bundler-webpack.test.ts`)؛ در Next 16.3.8، مرحلهٔ compile بهتنهایی حدود 40 GB را اشغال میکند (36 GB از نوع RSS در `next-build` بهعلاوهٔ 17 worker مربوط به loader با مصرف 3 GB، اندازهگیریشده در 2026-10-18)؛ مصرف یک build با webpack حدود 14–16 GB است. یک build با Turbopack و یک build با webpack میتوانند همزمان اجرا شوند؛ دو build با Turbopack نمیتوانند |
| swap      | 16 GB                        | `omniroute-113-5` با swap غیرفعال اجرا میشود (`MemorySwapMax=0`) تا build خارجشده از کنترل، بهجای انتقال بار میزبان به swap، در سقف تعیینشده متوقف شود                                                                                                                                                                                                                                                                                                    |
| `/tmp`    | **12 GB tmpfs = RAM**        | هر چیزی که در آن نگهداری شود، حافظه مصرف میکند؛ موارد باقیمانده پس از 3 ساعت پاکسازی میشوند                                                                                                                                                                                                                                                                                                                                                               |
| CPU       | بار 60 روی 32 هسته مشاهده شد | پیش از اعمال quotaها، یک build با Turbopack (حدود 1166 % CPU) بههمراه یک مجموعه تست coverage روی همان میزبان، heartbeatهای سایر listenerها را با کمبود منابع مواجه کرد (`The self-hosted runner lost communication`، #16853)                                                                                                                                                                                                                              |
| runnerها  | **6 listener**               | 4 مورد برای OmniRoute، بهعلاوهٔ OmniHeuris و OmniMind؛ `omniroute-113-3/-4/-7/-8` غیرفعال هستند (`systemctl enable --now` یکی از آنها را دوباره فعال میکند)                                                                                                                                                                                                                                                                                               |

محدودیتها در فایل `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` مربوط به هر unit
قرار دارند (مقادیر قبلی با نام `override.conf.bak-20261018` نگهداری شدهاند) و بهصورت زنده با
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` اعمال شدند — بدون restart،
بنابراین هیچ job در حال اجرایی تحت تأثیر قرار نگرفت. labelها نیز بهصورت زنده از طریق API مربوط به runnerها
تغییر داده میشوند
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## نصب پاکساز (یکبار، روی سرور)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (کاربر root): هر ۳۰ دقیقه، ثبت گزارش در /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

وجود `lsof` الزامی است: پاکساز پیش از حذف یک مسیر، با یک نمونه از فایلهای باز
ثابت میکند که آن مسیر غیرفعال است؛ بدون این ابزار چیزی را حذف نمیکند و این موضوع را
اعلام میکند (exit 1). هر تغییری را ابتدا با `--dry-run` امتحان کنید — این گزینه دقیقاً
کاری را که قرار است انجام شود چاپ میکند و هیچ چیزی را تغییر نمیدهد.

کاری که در هر اجرا انجام میدهد: بقایای خودمان (`runner-*`، `omniroute-*`،
`next-build*`، `e2e-build.tar.gz`) را پس از **۳ ساعت روی tmpfs** و پس از ۲۴ ساعت روی
`_work/_temp` دیسکی پاکسازی میکند؛ یک `next-build` قدیمیتر از ۷۵ دقیقه را متوقف
میکند (هیچ jobای اینقدر طول نمیکشد — در 2026-08-27، یکی از آنها پس از اینکه GitHub
job آن را ازدسترفته اعلام کرده بود، ۷۰ دقیقه اجرا شد)؛ checkoutهای ۴۸ ساعتهٔ runnerهایی
را که unit آنها **متوقف** است حذف میکند؛ و برای دیسک با مصرف ≥ ۸۵٪، مقدار PSI حافظهٔ
`full/avg60` برابر با ≥ ۱۰٪، و تعداد listenerهای بیشتر از `MAX_ACTIVE_RUNNERS` هشدار
میدهد (همراه با تفکیک omniroute/other). Exit 1 یعنی نیاز به رسیدگی وجود دارد؛ گزارش را
بخوانید.

قاعدهٔ ۷۵ دقیقهای buildای را که GitHub پیشتر از آن قطع امید کرده است تشخیص نمیدهد. وقتی
`Runner.Listener` نتواند job خود را تمدید کند، در `_diag/Runner_*.log` پیام
`POST request to …/renewjob timed out after 100 seconds` نمایش داده میشود، API حدود ده
دقیقه پس از آخرین تمدید موفق، وضعیت job را `completed` (ناموفق) گزارش میکند و
`next-build` بدون داشتن job متصل به اجرای خود ادامه میدهد (2026-10-18: بیلد #17066 در
ساعت 19:43 ناموفق شد و پنج دقیقه بعد، build آن همچنان ۴۰ گیگابایت را در اختیار داشت).
ref را در جدیدترین `_diag/Worker_*.log` تأیید کنید، سپس فقط درخت فرایند build را با PID
و از طریق SIGTERM خاتمه دهید — `next-build`، `npm run build`، `build-next-isolated.mjs`
و workerهای `_work`. هرگز به `Runner.Listener`، `RunnerService.js` یا `Runner.Worker`
دست نزنید: worker، job را لغوشده گزارش میکند و listener خودش دوباره آنلاین میشود.

## واحدهای Runner: KillMode

مقدار پیشفرض `KillMode=process` در runner باعث میشود زنجیرهٔ `Runner.Worker → npm → next-build`
هنگام توقف یا راهاندازی مجدد یک واحد زنده بماند — در نتیجه، یک build یتیم بدون اینکه jobای به آن
متصل باشد، همچنان RAM و CPU مصرف میکند. هر واحد OmniRoute یک drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
با `KillMode=mixed` دارد: ابتدا SIGTERM برای listener و در زمان
`TimeoutStop`،‏ SIGKILL برای کل cgroup ارسال میشود. این تنظیم در راهاندازی مجدد بعدی واحد اعمال
میشود — هر بار **فقط یک runner را و تنها در زمان idle بودن** راهاندازی مجدد کنید؛ بررسی idle بودن
و راهاندازی مجدد باید در یک command انجام شوند.

## قواعد عملیاتی

- **هر بار فقط یک ساخت Turbopack — اعمالشده با برچسب.** هر job که یک
  `next build` کامل با Turbopack اجرا میکند، `[self-hosted, omni-build]` را هدف میگیرد و فقط
  **`omniroute-113-5`** این برچسب را دارد: `ci.yml` `Build`، `npm-publish.yml` `publish`،
  `nightly-v4-build`، `preview-artifact`، ساخت شبانهٔ a11y (#16853) و **amd64** در
  `docker-publish.yml` (webpack داخل BuildKit — آنجا Turbopack دچار panic شد، اجرای
  33253576569). بخش arm64 مربوط به Docker همچنان روی `ubuntu-24.04-arm` باقی میماند.
  بخش amd64 در `docker-publish` گروه همزمانی `heavy-build-main` را با `Build` در `ci.yml`
  بهاشتراک میگذارد (`cancel-in-progress: false`). Docker Engine باید روی
  `omniroute-113-5` باشد. جایگاه دوم Turbopack در 78 GB جا نمیشود (2 × 33–37 GB بهعلاوهٔ
  سایر مصرفهای سیستم)؛ جایگاه دوم فقط برای ساختهای webpack ایمن است.
- **ساختهای pull request روی runner میزبانیشده اجرا میشوند (2026-10-18).** `Build` در
  `ci.yml` فقط برای `push` و `workflow_dispatch` به `omni-build` میرسد؛ `Build` مربوط به
  هر `pull_request` (چه از مبدأ خود مخزن و چه fork) و `merge_group` روی `ubuntu-latest`
  با webpack اجرا میشود. وقتی هر PR با مبدأ خود مخزن به این جایگاه هدایت میشد، یک ساخت
  Turbopack آن را برای 29–58 دقیقه اشغال میکرد، 18 ساخت تا 18 ساعت در صف ماندند و ساخت
  push خود خط انتشار، از میان 40 job فقط یک بار جایگاه را بهدست آورد. روی runner میزبانیشده،
  همان ساخت PR در کنار سایر jobهای PR بین 8–12 دقیقه طول میکشد. Turbopack، یعنی bundlerای
  که `npm-publish` منتشر میکند، همچنان در خط انتشار از طریق ساخت شبانهٔ a11y شاخهٔ پیشفرض
  (04:41 UTC)، هر ساخت push یا dispatch که به جایگاه میرسد و خود `npm-publish` آزمایش
  میشود. `tests/unit/build/heavy-build-queue.test.ts` گیت چهاربخشی را تثبیت میکند.
- **هرگز جایگاه Turbopack را کوچکتر از نیاز اندازهگیریشدهٔ آن تنظیم نکنید.** در
  2026-10-18 ساعت 18:06، جایگاه برای باز کردن فضا برای `omni-release` از 56G/60G به
  40G/44G کاهش یافت. مرحلهٔ compile در تمام مدت اجرا روی `MemoryHigh` ماند (مقدار `full`
  در PSI حافظه برابر 30–43 % بود) و `Runner.Listener` که همان cgroup را بهاشتراک میگذارد،
  نتوانست job خود را تمدید کند. مقدار 56G/60G تعیینشده توسط مالک در 2026-10-17، همان روز
  بازگردانده شد. پایینتر از این مقدار، ساخت fail نمیشود؛ دچار thrashing میشود و job از
  دست میرود.
- **Release-Green جایگاه اختصاصی خود را دارد (2026-10-18).** تا آن زمان، هر دو اعتبارسنجی
  Release-Green روی `omni-build` اجرا میشدند: در هر push (حدود 10 بار در ساعت؛ 97 مورد از
  100 اجرای push طی یک روز در میانهٔ کار لغو شدند) و سه پیمایش کامل حدوداً 2 ساعته در روز
  (پیمایش ساعت 05:29 برای دسترسی به جایگاه 6 ساعت منتظر ماند) — میزان تقاضا برای جایگاه
  منفرد ساخت چندین برابر ظرفیت آن بود و ساختهای PR با مبدأ خود مخزن ساعتها منتظر میماندند.
  اکنون `release-green` و `main-green`، با `OMNIROUTE_USE_TURBOPACK=0`، `omni-release`
  را هدف میگیرند (فقط `omniroute-113-6`) و اجرایی که شروع شده دیگر با push جدیدتر لغو
  نمیشود (جایگاه در انتظار همچنان موج درخواستها را ادغام میکند).
  `tests/unit/build/runner-capacity-routing.test.ts` مسیریابی، سوییچ webpack و این قاعده را
  تثبیت میکند که هیچ چیزی روی `omni-release` با Turbopack ساخته نشود.
- **مخزن سبک: `omni-light`.** `omniroute-113` و `omniroute-113-2` اجراهای شبانهای را
  انجام میدهند که به یک `next build` صرفاً برای backend نیاز دارند (حدود 5–6 GB؛ با
  webpack)، و همچنین `lint-guard` در `quality.yml` را اجرا میکنند. `omniroute-113` تا
  2026-10-18 دارای `MemoryHigh=4G` بود — ساخت promptfoo در آنجا بهمدت 54 دقیقه با reclaim
  حافظه پیش رفت؛ 8 GB این throttling را برطرف میکند.
- **تعداد listenerها عمداً کمتر است.** چهار unit مربوط به OmniRoute در 2026-08-29 غیرفعال
  شدند — هر listener اضافی، tenant دیگری برای بودجهٔ حافظهٔ بالا است. سقف janitor برابر 6
  است (`MAX_ACTIVE_RUNNERS=6` در cron): این مقدار همهٔ `Runner.Listener`های روی ماشین را
  میشمارد و OmniHeuris + OmniMind دو مورد را به چهار مورد ما اضافه میکنند.
- **هنگامی که هر runnerای مشغول است، هرگز `/tmp` یا `_work` را بهصورت دستی پاک نکنید.**
  بررسی و سپس حذف، درحالیکه بین این دو فاصله وجود دارد، همان روشی است که باعث شد یک job
  زندهٔ Build در 2026-08-27 پوشهٔ `_work` خود را از دست بدهد. janitor بررسی و حذف را در یک
  مرحله انجام میدهد؛ اجازه دهید خودش انجامش دهد.
- متوقف کردن runner در میانهٔ job، آن job را لغو میکند (بهصورت زنده مشاهده شده است):
  `systemctl stop` را فقط زمانی اجرا کنید که listener آن هیچ فرزند `Runner.Worker` نداشته
  باشد — و این کار را در یک فرمان انجام دهید.
- workflowها نباید artefactها را در `/tmp` نگه دارند (این مسیر روی RAM است). آنها را در
  `$RUNNER_TEMP` دانلود کنید (روی دیسک و مختص هر runner) — انتقال artefact
  `next-build` با اندازهٔ 1.3 GB به tmpfs بین 27–32 دقیقه طول کشید، درحالیکه آپلود آن از
  دیسک 2 دقیقه زمان برد.
- VPS با آدرس `.15` فقط برای homologation است — هرگز runnerهای CI را اجرا نمیکند.
