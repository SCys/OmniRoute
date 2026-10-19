# Self-Hosted Runner Box Operations (.113 pool) (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

המאגר באירוח עצמי פועל על המכונה **.113** (`tomni-proxmox-113`). מאז 2026-10-18 לכל
ראנר של OmniRoute יש **תפקיד אחד**, תווית אחת ותקציב זיכרון/CPU המותאם לעומס העבודה
שנמדד עבורו. המשבצת של Turbopack מקבלת את המשאבים הנחוצים לבנייה; המשבצות האחרות מותאמות
לשיאים שנמדדו עבורן. במכונה מתבצעת הקצאת־יתר רק כאשר בניית Turbopack מתרחשת במקביל לבניית
webpack של Release-Green ולמשימת lint; שטח ה-swap של המארח (16 GB) סופג זאת, ומכיוון שבניות
של בקשות משיכה רצות בתשתית מתארחת, משבצת Turbopack אינה פעילה רוב הזמן:

| ראנר                 | תווית          | תפקיד                                                                                                                                                     | `MemoryHigh` / `MemoryMax`  | `CPUQuota`    |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | בניות Turbopack:‏ `ci.yml` `Build` (בדחיפה/הפעלה ידנית בלבד), Docker amd64,‏ `npm-publish`,‏ `nightly-v4-build`,‏ `preview-artifact`, בניית ה-a11y הלילית | 56 GB / 60 GB (ללא swap)    | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green‏ (`release-green` + `main-green`), בניית webpack                                                                                            | 20 GB / 24 GB (‏4 GB‏ swap) | 800 %         |
| `omniroute-113-2`    | `omni-light`   | משימות ליליות (Schemathesis,‏ promptfoo,‏ garak,‏ k6, אתחול a11y) ו-`quality.yml` `lint-guard`                                                            | 12 GB / 16 GB (‏4 GB‏ swap) | 600 %         |
| `omniroute-113`      | `omni-light`   | אותו מאגר כמו לעיל                                                                                                                                        | 8 GB / 12 GB                | 400 %         |
| OmniHeuris, OmniMind | (המאגרים שלהם) | Dependabot בלבד (שיא של 155 MB לכל אחד, 2026-10-18)                                                                                                       | 4 GB / 6 GB                 | 200 % לכל אחד |

נמדד ב-2026-10-18:

| משאב      | ערך                         | משמעות הדבר לתזמון                                                                                                                                                                                                                                                                                                                                                 |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 ליבות**        | בניית ייצור של Turbopack הגיעה לשיא של 49 GB ללא הגבלה (`tests/unit/ci-build-bundler-webpack.test.ts`); ב-Next 16.3.8 שלב הקומפילציה לבדו מחזיק כ-40 GB‏ (36 GB‏ RSS ב-`next-build` ועוד 17 תהליכי loader בגודל 3 GB, נמדד ב-2026-10-18); בניית webpack צורכת כ-14–16 GB. בניית Turbopack אחת ובניית webpack אחת יכולות לפעול יחד; שתי בניות Turbopack אינן יכולות |
| swap      | 16 GB                       | `omniroute-113-5` פועל כאשר ה-swap כבוי (`MemorySwapMax=0`), כך שבנייה שיצאה משליטה נעצרת בגבול שלה במקום לגרום למכונה להשתמש ב-swap                                                                                                                                                                                                                               |
| `/tmp`    | **12 GB tmpfs = RAM**       | כל דבר שמאוחסן שם צורך זיכרון; שאריות נמחקות לאחר 3 שעות                                                                                                                                                                                                                                                                                                           |
| CPU       | נצפה עומס של 60 על 32 ליבות | לפני החלת המכסות, בניית Turbopack אחת (כ-1166 % CPU) יחד עם חבילת בדיקות כיסוי על אותה מכונה הרעיבו את פעימות החיים של המאזינים האחרים (`The self-hosted runner lost communication`,‏ #16853)                                                                                                                                                                      |
| ראנרים    | **6 מאזינים**               | 4 של OmniRoute וכן OmniHeuris ו-OmniMind;‏ `omniroute-113-3/-4/-7/-8` מושבתים (`systemctl enable --now` מחזיר אחד מהם לפעילות)                                                                                                                                                                                                                                     |

המגבלות נמצאות בקובץ `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` של כל יחידה
(הערכים הקודמים נשמרו בתור `override.conf.bak-20261018`) והוחלו בזמן אמת באמצעות
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — ללא הפעלה מחדש, ולכן אף
משימה פעילה לא הושפעה. התוויות משתנות דרך ה-API של הראנרים
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), גם כן בזמן אמת.

## התקנת המנקה (פעם אחת, במכונה)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): כל 30 דקות, כתיבה ליומן /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` נדרש: המנקה מוודא שנתיב אינו בשימוש באמצעות תמונת מצב יחידה של קבצים
פתוחים לפני הסרתו, וללא הכלי הוא אינו מסיר דבר ומציין זאת
(exit 1). נסו תחילה כל שינוי עם `--dry-run` — הוא מדפיס בדיוק מה היה
עושה ואינו משנה דבר.

מה הוא עושה בכל הפעלה: מנקה שאריות שלנו (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) לאחר **3 שעות ב-tmpfs** ולאחר 24 שעות ב-
`_work/_temp` שבדיסק; מפסיק `next-build` שגילו מעל 75 דקות (אף משימה אינה פועלת זמן רב כל כך — ב-
2026-08-27 אחת פעלה במשך 70 דקות לאחר ש-GitHub הכריז שהמשימה שלה אבדה); מסיר עותקי עבודה בני 48 שעות
של runners שהיחידה שלהם **נעצרה**; מתריע על שימוש בדיסק ≥ 85%, על memory PSI
`full/avg60` ≥ 10%, ועל מספר listeners הגבוה מ-`MAX_ACTIVE_RUNNERS` (עם
פירוט omniroute/אחר). Exit 1 = נדרשת תשומת לב; קראו את היומן.

כלל 75 הדקות אינו מזהה build ש-GitHub כבר ויתר על המשימה שלו. כאשר
`Runner.Listener` אינו מצליח לחדש את המשימה שלו, `_diag/Runner_*.log` מציג
`POST request to …/renewjob timed out after 100 seconds`, ה-API מדווח שהמשימה במצב `completed`
(כישלון) כעשר דקות לאחר החידוש המוצלח האחרון, ו-`next-build` ממשיך לפעול
ללא משימה משויכת (2026-10-18: ה-Build של #17066 נכשל ב-19:43, וה-build שלו עדיין
החזיק 40 GB חמש דקות לאחר מכן). ודאו את ה-ref בקובץ `_diag/Worker_*.log` החדש ביותר, ואז
שלחו SIGTERM רק לעץ תהליכי ה-build לפי PID — `next-build`, `npm run build`, `build-next-isolated.mjs` ו-
עובדי `_work`. לעולם אל תיגעו ב-`Runner.Listener`, ב-`RunnerService.js` או ב-`Runner.Worker`: ה-
worker מדווח שהמשימה בוטלה, וה-listener חוזר למצב מקוון בעצמו.

## יחידות Runner: ‏KillMode

ברירת המחדל של ה-runner, ‏`KillMode=process`, משאירה את
`Runner.Worker → npm → next-build` פעיל כאשר יחידה נעצרת או מופעלת מחדש — תהליך build יתום ממשיך לצרוך RAM ו-
CPU בלי שמשויכת אליו משימה. לכל יחידת OmniRoute יש drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
עם `KillMode=mixed`: ‏SIGTERM נשלח תחילה ל-listener, ולאחר מכן SIGKILL לכל ה-cgroup בנקודת
`TimeoutStop`. ההגדרה נכנסת לתוקף בהפעלה מחדש הבאה של היחידה — יש להפעיל מחדש **runner אחד
בכל פעם, ורק כשהוא במצב סרק**, כאשר בדיקת הסרק וההפעלה מחדש מתבצעות באותה פקודה.

## כללי תפעול

- **בכל רגע מתבצעת בנייה אחת בלבד של Turbopack — נאכף באמצעות תווית.** כל משימה שמריצה
  `next build` מלא של Turbopack מכוונת אל `[self-hosted, omni-build]`, ורק
  **`omniroute-113-5`** נושא את התווית הזו: `ci.yml` `Build`,‏ `npm-publish.yml` `publish`,‏
  `nightly-v4-build`,‏ `preview-artifact`, הבנייה הלילית של a11y (#16853) ו-`docker-publish.yml`
  עבור **amd64** (עם webpack בתוך BuildKit —‏ Turbopack קרס שם, ריצה 33253576569). שלב ה-Docker
  עבור arm64 נשאר על `ubuntu-24.04-arm`. שלב amd64 של `docker-publish` חולק את קבוצת המקביליות
  `heavy-build-main` עם `ci.yml` `Build` (`cancel-in-progress: false`).‏ Docker Engine חייב להיות
  מותקן ב-`omniroute-113-5`. משבצת Turbopack שנייה אינה נכנסת ב-78 GB (‏2 × 33–37 GB בנוסף
  לשאר העומס במכונה); משבצת שנייה בטוחה רק לבניות webpack.
- **בניות של בקשות משיכה רצות על תשתית מתארחת (2026-10-18).** ‏`ci.yml` `Build` מגיע אל
  `omni-build` רק עבור `push` ו-`workflow_dispatch`; כל בניית `pull_request` (ממקור פנימי או
  מ-fork) וכל בניית `merge_group` רצות על `ubuntu-latest` עם webpack. כאשר כל PR ממקור פנימי
  נותב למשבצת, בניית Turbopack החזיקה בה במשך 29–58 דקות, 18 בניות המתינו בתור עד 18 שעות,
  ובניית ה-push של ענף ההפצה עצמו קיבלה את המשבצת פעם אחת בלבד מתוך 40 משימות. בתשתית
  המתארחת, אותה בניית PR נמשכת 8–12 דקות לצד שאר המשימות של ה-PR. ‏Turbopack, ה-bundler
  שמופץ על ידי `npm-publish`, ממשיך להיבדק בענף ההפצה באמצעות בניית ה-a11y הלילית של ענף
  ברירת המחדל (04:41 UTC), באמצעות כל בניית push או dispatch שמגיעה למשבצת, ובאמצעות
  `npm-publish` עצמו. הקובץ `tests/unit/build/heavy-build-queue.test.ts` מקבע את שער ארבעת
  התנאים.
- **לעולם אין להקצות למשבצת Turbopack פחות מהצורך שנמדד עבורה.** ב-2026-10-18 בשעה 18:06
  המשבצת הונמכה מ-56G/60G ל-40G/44G כדי לפנות מקום עבור `omni-release`. שלב ההידור נשאר
  בגבול `MemoryHigh` לאורך כל הריצה (memory PSI ‏`full` של 30–43%), ו-`Runner.Listener`,
  שחולק את ה-cgroup, לא הצליח לחדש את המשימה שלו. הערכים 56G/60G שקבע הבעלים
  ב-2026-10-17 שוחזרו באותו יום. מתחת לערך הזה הבנייה אינה נכשלת; היא מיטלטלת בין פעולות
  זיכרון ודיסק, והמשימה אובדת.
- **ל-Release-Green יש משבצת משלו (2026-10-18).** עד אז, שתי בדיקות האימות של Release-Green
  רצו על `omni-build`: בכל push (כ-10 בשעה, 97 מתוך 100 ריצות push בוטלו באמצע העבודה ביום
  אחד) ובשלוש סריקות מלאות של כשעתיים ביום (הסריקה של 05:29 המתינה 6 שעות למשבצת) — למשבצת
  הבנייה היחידה הוקצה עומס גדול פי כמה מהקיבולת שלה, ובניות PR ממקור פנימי המתינו שעות.
  `release-green` ו-`main-green` מכוונים כעת אל `omni-release` (רק `omniroute-113-6`) עם
  `OMNIROUTE_USE_TURBOPACK=0`, וריצה שהחלה כבר אינה מתבטלת בעקבות push חדש יותר (המשבצת
  הממתינה עדיין מאחדת את סערת הבקשות). הקובץ
  `tests/unit/build/runner-capacity-routing.test.ts` מקבע את הניתוב, את המעבר ל-webpack ואת
  העובדה ששום דבר ב-`omni-release` אינו נבנה באמצעות Turbopack.
- **המאגר הקל: `omni-light`.** ‏`omniroute-113` ו-`omniroute-113-2` מריצים את המשימות הליליות
  שזקוקות ל-`next build` עבור backend בלבד (כ-5–6 GB;‏ webpack) ואת `quality.yml`
  `lint-guard`. ל-`omniroute-113` היה `MemoryHigh=4G` עד 2026-10-18 — בניית promptfoo פילסה
  את דרכה באמצעות פינוי זיכרון במשך 54 דקות; 8 GB מבטלים את ההאטה.
- **פחות מאזינים, בכוונה.** ארבע יחידות OmniRoute הושבתו ב-2026-08-29 — כל מאזין נוסף הוא
  דייר נוסף בתקציב הזיכרון שלעיל. תקרת המנקה היא 6 (`MAX_ACTIVE_RUNNERS=6` ב-cron): היא סופרת
  כל `Runner.Listener` במכונה, ו-OmniHeuris יחד עם OmniMind מוסיפים שניים לארבעת המאזינים שלנו.
- **לעולם אין לנקות ידנית את `/tmp` או את `_work` בזמן שרץ כלשהו עסוק.** בדיקה ולאחריה
  מחיקה, עם פער בין השתיים, היא הסיבה שמשימת Build פעילה איבדה את
  `_work` שלה ב-2026-08-27. המנקה מבצע את הבדיקה ואת ההסרה בצעד אחד;
  יש לאפשר לו לעשות זאת.
- עצירת רץ באמצע משימה מבטלת את המשימה (כפי שנצפה בזמן אמת): יש להפעיל `systemctl stop` רק
  כאשר למאזין שלו אין תהליך צאצא מסוג `Runner.Worker` — ויש לעשות זאת בפקודה אחת.
- אסור לתהליכי עבודה להחנות ארטיפקטים ב-`/tmp` (הוא נמצא ב-RAM). יש להוריד אל
  `$RUNNER_TEMP` (בדיסק, בנפרד לכל רץ) — לארטיפקט `next-build` בגודל 1.3 GB נדרשו 27–32
  דקות כדי להגיע אל tmpfs ו-2 דקות כדי לעלות מהדיסק.
- ה-VPS ב-`.15` מיועד להומולוגציה בלבד — לעולם אינו מריץ רצי CI.
