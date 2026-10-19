# Self-Hosted Runner Box Operations (.113 pool) (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

พูลแบบ self-hosted ทำงานอยู่บนเครื่อง **.113** (`tomni-proxmox-113`) ตั้งแต่ 2026-10-18 เป็นต้นมา
runner ของ OmniRoute แต่ละตัวมี **หนึ่งบทบาท** หนึ่ง label และงบประมาณหน่วยความจำ/CPU ที่กำหนดตามปริมาณการใช้จริง
สล็อต Turbopack ได้รับทรัพยากรตามที่การบิลด์ต้องการ ส่วนสล็อตอื่นกำหนดขนาดตามค่าสูงสุด
ที่วัดได้ เครื่องจะจัดสรรทรัพยากรเกินขนาดจริงเฉพาะเมื่อการบิลด์ Turbopack เกิดขึ้นพร้อมกับการบิลด์ webpack ของ Release-Green
และงาน lint เท่านั้น โดย swap ของโฮสต์ (16 GB) จะรองรับส่วนเกินดังกล่าว และเนื่องจากการบิลด์สำหรับ pull request ทำงานบนระบบ
hosted สล็อต Turbopack จึงว่างอยู่เกือบตลอดเวลา:

| runner               | label               | บทบาท                                                                                                                                                 | `MemoryHigh` / `MemoryMax` | `CPUQuota`   |
| -------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| `omniroute-113-5`    | `omni-build`        | การบิลด์ Turbopack: `ci.yml` `Build` (เฉพาะ push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, การบิลด์ a11y รายคืน | 56 GB / 60 GB (swap 0)     | 1600 %       |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), การบิลด์ webpack                                                                                      | 20 GB / 24 GB (swap 4 GB)  | 800 %        |
| `omniroute-113-2`    | `omni-light`        | งานรายคืน (Schemathesis, promptfoo, garak, k6, การบูต a11y) และ `quality.yml` `lint-guard`                                                            | 12 GB / 16 GB (swap 4 GB)  | 600 %        |
| `omniroute-113`      | `omni-light`        | พูลเดียวกับด้านบน                                                                                                                                     | 8 GB / 12 GB               | 400 %        |
| OmniHeuris, OmniMind | (repo ของแต่ละระบบ) | เฉพาะ Dependabot (ค่าสูงสุด 155 MB ต่อตัว, 2026-10-18)                                                                                                | 4 GB / 6 GB                | 200 % ต่อตัว |

ผลการวัดเมื่อ 2026-10-18:

| ทรัพยากร  | ค่า                   | ความหมายต่อการจัดตารางงาน                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 คอร์**   | การบิลด์ production ด้วย Turbopack มีค่าสูงสุด 49 GB เมื่อไม่จำกัด (`tests/unit/ci-build-bundler-webpack.test.ts`); บน Next 16.3.8 เฉพาะช่วง compile ใช้หน่วยความจำคงค้าง ~40 GB (RSS 36 GB ใน `next-build` บวก loader worker 17 ตัว ตัวละ 3 GB วัดเมื่อ 2026-10-18); การบิลด์ webpack ใช้ ~14–16 GB การบิลด์ Turbopack หนึ่งงานกับ webpack หนึ่งงานสามารถทำงานพร้อมกันได้ แต่การบิลด์ Turbopack สองงานไม่สามารถทำได้ |
| swap      | 16 GB                 | `omniroute-113-5` ทำงานโดยปิด swap (`MemorySwapMax=0`) เพื่อให้การบิลด์ที่ใช้ทรัพยากรไม่หยุดถูกตัดเมื่อถึงขีดจำกัด แทนที่จะทำให้ทั้งเครื่องใช้ swap                                                                                                                                                                                                                                                                   |
| `/tmp`    | **tmpfs 12 GB = RAM** | ทุกอย่างที่เก็บไว้ในนั้นจะใช้หน่วยความจำ โดยข้อมูลตกค้างจะถูกล้างหลังจาก 3 ชั่วโมง                                                                                                                                                                                                                                                                                                                                    |
| CPU       | พบ load 60 บน 32 คอร์ | ก่อนกำหนดโควตา การบิลด์ Turbopack หนึ่งงาน (CPU ~1166 %) ร่วมกับชุดทดสอบ coverage บนเครื่องเดียวกันทำให้ heartbeat ของ listener อื่นไม่ได้รับทรัพยากรเพียงพอ (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                    |
| runner    | **listener 6 ตัว**    | OmniRoute 4 ตัว + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` ถูกปิดใช้งาน (`systemctl enable --now` สามารถเปิดกลับมาได้หนึ่งตัว)                                                                                                                                                                                                                                                                               |

ขีดจำกัดต่าง ๆ อยู่ใน `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` ของแต่ละ unit
(ค่าเดิมเก็บไว้เป็น `override.conf.bak-20261018`) และนำไปใช้ขณะระบบทำงานด้วย
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` โดยไม่ต้อง restart ดังนั้นจึงไม่มี
งานที่กำลังทำงานอยู่ได้รับผลกระทบ การเปลี่ยน label ทำผ่าน API ของ runner
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) และมีผลขณะระบบทำงานเช่นกัน

## ติดตั้ง janitor (ครั้งเดียวบนเครื่อง)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ทุก 30 นาที บันทึกล็อกไปยัง /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

จำเป็นต้องใช้ `lsof`: janitor จะยืนยันว่าพาธไม่มีการใช้งานด้วยสแนปช็อตเดียวของไฟล์ที่เปิดอยู่
ก่อนลบ และหากไม่มีเครื่องมือนี้ janitor จะไม่ลบสิ่งใดพร้อมแจ้งให้ทราบ
(exit 1) ทดลองการเปลี่ยนแปลงทุกอย่างด้วย `--dry-run` ก่อน — ระบบจะแสดงสิ่งที่จะทำ
อย่างชัดเจนโดยไม่แก้ไขสิ่งใด

สิ่งที่ทำในการรันแต่ละครั้ง: กวาดไฟล์ตกค้างของเราเอง (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) หลังจาก **3 ชม. บน tmpfs** และ 24 ชม. บนดิสก์
`_work/_temp`; หยุด `next-build` ที่มีอายุเกิน 75 นาที (ไม่มีงานใดทำงานนานขนาดนั้น — เมื่อ
2026-08-27 มีงานหนึ่งทำงานนาน 70 นาทีหลังจาก GitHub ประกาศว่างานสูญหายแล้ว); ลบ
checkout ที่มีอายุ 48 ชม. ของ runner ซึ่ง unit **หยุดทำงาน**; แจ้งเตือนเมื่อดิสก์ ≥ 85 %, memory PSI
`full/avg60` ≥ 10 % และมี listener มากกว่า `MAX_ACTIVE_RUNNERS` (พร้อมแจกแจงเป็น
omniroute/อื่นๆ) Exit 1 = ต้องตรวจสอบ; โปรดอ่านล็อก

กฎ 75 นาทีไม่สามารถตรวจจับ build ที่ GitHub เลิกรอไปแล้วได้ เมื่อ
`Runner.Listener` ไม่สามารถต่ออายุงานได้ `_diag/Runner_*.log` จะแสดง
`POST request to …/renewjob timed out after 100 seconds` โดย API จะรายงานว่างาน `completed`
(ล้มเหลว) ประมาณสิบนาทีหลังจากการต่ออายุสำเร็จครั้งล่าสุด ขณะที่ `next-build` ยังคงทำงานต่อโดย
ไม่มีงานเชื่อมโยงอยู่ (2026-10-18: งาน Build ของ #17066 ล้มเหลวเมื่อ 19:43 และ build ของงานนั้นยังคง
ใช้พื้นที่ 40 GB ในอีกห้านาทีต่อมา) ยืนยัน ref ใน `_diag/Worker_*.log` ล่าสุด จากนั้น
ส่ง SIGTERM เฉพาะให้กับ process tree ของ build ตาม PID — `next-build`, `npm run build`, `build-next-isolated.mjs` และ
worker ของ `_work` ห้ามแตะต้อง `Runner.Listener`, `RunnerService.js` หรือ `Runner.Worker`:
worker จะรายงานว่างานถูกยกเลิก และ listener จะกลับมาออนไลน์ได้เอง

## ยูนิต runner: KillMode

ค่าเริ่มต้น `KillMode=process` ของ runner ปล่อยให้ `Runner.Worker → npm → next-build`
ยังคงทำงานอยู่เมื่อยูนิตถูกหยุดหรือรีสตาร์ต — build ที่กำพร้าจะยังคงกิน RAM และ
CPU โดยไม่มี job ผูกอยู่ ทุกยูนิตของ OmniRoute มี drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
ที่ใช้ `KillMode=mixed`: ส่ง SIGTERM ไปยัง listener ก่อน แล้วส่ง SIGKILL ไปยัง cgroup ทั้งหมดเมื่อถึง
`TimeoutStop` การตั้งค่านี้จะมีผลเมื่อรีสตาร์ตยูนิตครั้งถัดไป — ให้รีสตาร์ต **ครั้งละหนึ่ง runner
และเฉพาะตอนที่ไม่มีงานอยู่เท่านั้น** โดยให้การตรวจสอบสถานะว่างและการรีสตาร์ตอยู่ในคำสั่งเดียวกัน

## กฎการปฏิบัติงาน

- **ให้มี Turbopack build ได้ครั้งละหนึ่งงานเท่านั้น — บังคับใช้ด้วย label** ทุก job ที่รัน Turbopack
  `next build` แบบเต็มจะกำหนดเป้าหมายเป็น `[self-hosted, omni-build]` และมีเพียง **`omniroute-113-5`**
  เท่านั้นที่มี label ดังกล่าว ได้แก่ `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, nightly a11y build (#16853) และ `docker-publish.yml` **amd64** (ใช้ webpack
  ภายใน BuildKit — Turbopack เกิด panic ที่นั่นใน run 33253576569) ส่วน Docker ฝั่ง arm64 ยังคงรันบน
  `ubuntu-24.04-arm` สำหรับ `docker-publish` ฝั่ง amd64 จะใช้ concurrency group `heavy-build-main`
  ร่วมกับ `ci.yml` `Build` (`cancel-in-progress: false`) Docker Engine ต้องอยู่บน `omniroute-113-5`
  slot สำหรับ Turbopack slot ที่สองไม่สามารถรองรับได้ภายในหน่วยความจำ 78 GB (2 × 33–37 GB บวกกับ
  ส่วนอื่นๆ ของเครื่อง) โดย slot ที่สองจะปลอดภัยเฉพาะสำหรับ webpack build เท่านั้น
- **Build ของ pull request รันบน hosted runner (2026-10-18)** `ci.yml` `Build` จะเข้าถึง
  `omni-build` เฉพาะสำหรับ `push` และ `workflow_dispatch` ส่วน `Build` ของ `pull_request` ทุกกรณี
  (ไม่ว่าจะมาจากต้นทางของเราเองหรือ fork) และ `merge_group` จะรันบน `ubuntu-latest` ด้วย webpack
  เมื่อ PR จากต้นทางของเราเองทั้งหมดถูกส่งไปยัง slot นี้ Turbopack Build จะครอง slot นาน 29–58 นาที
  ทำให้มี Build 18 งานเข้าคิวนานสูงสุด 18 ชั่วโมง และ push Build ของ release line เองได้ใช้ slot
  เพียงหนึ่งครั้งจาก 40 jobs เมื่อรันแบบ hosted PR Build เดียวกันใช้เวลา 8–12 นาที โดยรันควบคู่กับ
  jobs อื่นๆ ของ PR ส่วน Turbopack ซึ่งเป็น bundler ที่ `npm-publish` เผยแพร่ ยังคงได้รับการทดสอบบน
  release line ผ่าน nightly a11y build ของ default branch (04:41 UTC), ผ่านทุก push หรือ dispatch
  Build ที่เข้าถึง slot และผ่าน `npm-publish` เอง
  `tests/unit/build/heavy-build-queue.test.ts` ตรึงเงื่อนไขทั้งสี่ข้อไว้
- **ห้ามกำหนดขนาด Turbopack slot ให้ต่ำกว่าความต้องการที่วัดได้** เมื่อ 2026-10-18 เวลา 18:06
  slot ถูกลดจาก 56G/60G เป็น 40G/44G เพื่อให้มีพื้นที่สำหรับ `omni-release` ระยะ compile ค้างอยู่ที่
  `MemoryHigh` ตลอดการรัน (memory PSI `full` 30–43 %) และ `Runner.Listener` ซึ่งใช้ cgroup ร่วมกัน
  ไม่สามารถต่ออายุ job ของตนได้ ค่า 56G/60G ที่เจ้าของกำหนดไว้เมื่อ 2026-10-17 จึงถูกนำกลับมาใช้
  ภายในวันเดียวกัน หากต่ำกว่าค่านี้ build จะไม่ล้มเหลว แต่จะเกิด thrashing และ job จะสูญหาย
- **Release-Green มี slot ของตนเอง (2026-10-18)** ก่อนหน้านั้น validation ของ Release-Green
  ทั้งสองแบบรันบน `omni-build` ได้แก่ ทุก push (~10 ครั้ง/ชั่วโมง โดย push run 97 จาก 100 ครั้ง
  ถูกยกเลิกกลางคันภายในหนึ่งวัน) และ full sweep ที่ใช้เวลาประมาณ 2 ชั่วโมงจำนวนสามครั้งต่อวัน
  (sweep เวลา 05:29 รอ slot นาน 6 ชั่วโมง) — slot สำหรับ build เพียง slot เดียวถูกใช้งานเกิน
  ความจุหลายเท่าตัว และ PR Build จากต้นทางของเราเองต้องรอนานหลายชั่วโมง ขณะนี้ `release-green`
  และ `main-green` กำหนดเป้าหมายเป็น `omni-release` (เฉพาะ `omniroute-113-6`) พร้อม
  `OMNIROUTE_USE_TURBOPACK=0` และ run ที่เริ่มทำงานแล้วจะไม่ถูกยกเลิกโดย push ที่ใหม่กว่าอีกต่อไป
  (slot ที่รอดำเนินการยังคงยุบงานจำนวนมากที่ถาโถมเข้ามาให้เหลืองานล่าสุด)
  `tests/unit/build/runner-capacity-routing.test.ts` ตรึง routing, การสลับไปใช้ webpack และข้อกำหนด
  ที่ว่าห้ามมีสิ่งใดบน `omni-release` build ด้วย Turbopack
- **พูลสำหรับงานเบา: `omni-light`** `omniroute-113` และ `omniroute-113-2` รัน nightly jobs
  ที่ต้องใช้ `next build` เฉพาะ backend (~5–6 GB; webpack) และ `quality.yml` `lint-guard`
  `omniroute-113` มี `MemoryHigh=4G` จนถึง 2026-10-18 — promptfoo build ใช้เวลา 54 นาทีที่นั่น
  เพราะต้อง reclaim หน่วยความจำไปตลอดทาง การเพิ่มเป็น 8 GB ช่วยขจัดการ throttling
- **ตั้งใจให้มี listener น้อยลง** OmniRoute units สี่รายการถูกปิดใช้งานเมื่อ 2026-08-29 —
  listener ที่เพิ่มขึ้นแต่ละตัวคือผู้ใช้ร่วมอีกรายสำหรับงบประมาณหน่วยความจำข้างต้น เพดานของ janitor
  คือ 6 (`MAX_ACTIVE_RUNNERS=6` ใน cron): โดยจะนับ `Runner.Listener` ทุกตัวบนเครื่อง และ
  OmniHeuris + OmniMind เพิ่มมาอีกสองตัวจากสี่ตัวของเรา
- **ห้ามล้าง `/tmp` หรือ `_work` ด้วยตนเองขณะที่ runner ใดๆ กำลังทำงาน** การตรวจสอบแล้วจึงลบ
  โดยมีช่วงว่างระหว่างสองขั้นตอน เป็นสาเหตุที่ทำให้ Build job ที่กำลังทำงานสูญเสีย `_work`
  เมื่อ 2026-08-27 janitor จะตรวจสอบและลบภายในขั้นตอนเดียว ปล่อยให้ janitor จัดการ
- การหยุด runner กลาง job จะยกเลิก job (ยืนยันจากการสังเกตระบบจริง): ใช้ `systemctl stop`
  เฉพาะเมื่อ listener ของ runner ไม่มี `Runner.Worker` เป็น child — และให้ดำเนินการด้วยคำสั่งเดียว
- Workflows ต้องไม่เก็บอาร์ติแฟกต์ไว้ใน `/tmp` (พื้นที่ดังกล่าวอยู่บน RAM) ให้ดาวน์โหลดไปยัง
  `$RUNNER_TEMP` (อยู่บนดิสก์และแยกตาม runner) — อาร์ติแฟกต์ `next-build` ขนาด 1.3 GB ใช้เวลา
  27–32 นาทีในการดาวน์โหลดลง tmpfs และใช้เวลา 2 นาทีในการอัปโหลดจากดิสก์
- VPS `.15` ใช้สำหรับการทดสอบรับรองเท่านั้น — ห้ามรัน CI runners โดยเด็ดขาด
