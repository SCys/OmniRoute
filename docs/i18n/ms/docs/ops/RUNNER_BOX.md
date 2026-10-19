# Self-Hosted Runner Box Operations (.113 pool) (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Kumpulan hos sendiri berjalan pada mesin **.113** (`tomni-proxmox-113`). Sejak 2026-10-18, setiap
runner OmniRoute mempunyai **satu peranan**, satu label dan peruntukan memori/CPU yang disesuaikan
dengan ukuran beban kerjanya. Slot Turbopack mendapat sumber yang diperlukan oleh binaan; slot lain
disesuaikan dengan puncak penggunaan yang diukur. Mesin tersebut hanya terlebih komit sumber apabila
binaan Turbopack bertepatan dengan binaan webpack Release-Green dan tugas lint; swap hos (16 GB)
menampung keadaan itu, dan oleh sebab Binaan pull-request berjalan pada hos terurus, slot Turbopack
melahu pada kebanyakan masa:

| runner               | label          | peranan                                                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota`        |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`   | Binaan Turbopack: `ci.yml` `Build` (push/dispatch sahaja), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, binaan a11y setiap malam | 56 GB / 60 GB (swap 0)     | 1600 %            |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), binaan webpack                                                                                           | 20 GB / 24 GB (swap 4 GB)  | 800 %             |
| `omniroute-113-2`    | `omni-light`   | tugas setiap malam (Schemathesis, promptfoo, garak, k6, but a11y) dan `quality.yml` `lint-guard`                                                         | 12 GB / 16 GB (swap 4 GB)  | 600 %             |
| `omniroute-113`      | `omni-light`   | kumpulan yang sama seperti di atas                                                                                                                       | 8 GB / 12 GB               | 400 %             |
| OmniHeuris, OmniMind | (repo mereka)  | Dependabot sahaja (puncak 155 MB setiap satu, 2026-10-18)                                                                                                | 4 GB / 6 GB                | 200 % setiap satu |

Diukur pada 2026-10-18:

| sumber    | nilai                               | maksudnya untuk penjadualan                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 teras**                | binaan pengeluaran Turbopack memuncak pada 49 GB tanpa had (`tests/unit/ci-build-bundler-webpack.test.ts`); pada Next 16.3.8, fasa kompilasi sahaja menggunakan ~40 GB (36 GB RSS dalam `next-build` berserta 17 pekerja pemuat pada 3 GB, diukur pada 2026-10-18); binaan webpack menggunakan ~14–16 GB. Satu binaan Turbopack + satu binaan webpack boleh berjalan bersama; dua binaan Turbopack tidak boleh |
| swap      | 16 GB                               | `omniroute-113-5` berjalan dengan swap dimatikan (`MemorySwapMax=0`), supaya binaan yang tidak terkawal dihentikan pada hadnya dan bukannya menyebabkan mesin menggunakan swap                                                                                                                                                                                                                                 |
| `/tmp`    | **12 GB tmpfs = RAM**               | apa-apa yang diletakkan di situ menggunakan memori; baki fail dibersihkan selepas 3 jam                                                                                                                                                                                                                                                                                                                        |
| CPU       | beban 60 pada 32 teras diperhatikan | sebelum kuota dikenakan, satu binaan Turbopack (~1166 % CPU) berserta suit liputan pada mesin yang sama menyebabkan heartbeat pendengar lain kekurangan sumber (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                           |
| runner    | **6 pendengar**                     | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` dinyahdayakan (`systemctl enable --now` mengaktifkan semula salah satu daripadanya)                                                                                                                                                                                                                                                            |

Had tersebut terletak dalam `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
bagi setiap unit (nilai terdahulu disimpan sebagai `override.conf.bak-20261018`) dan digunakan secara
langsung dengan `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — tanpa
mula semula, maka tiada tugas yang sedang berjalan terjejas. Label diubah melalui API runner
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), juga secara langsung.

## Pasang pembersih (sekali sahaja, pada mesin)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): setiap 30 min, log ke /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` diperlukan: pembersih mengesahkan bahawa sesuatu laluan tidak digunakan melalui satu petikan fail terbuka sebelum mengalih keluarnya, dan tanpa alat tersebut ia tidak mengalih keluar apa-apa serta memaklumkannya (exit 1). Cuba sebarang perubahan dengan `--dry-run` terlebih dahulu — ia mencetak dengan tepat tindakan yang akan dilakukannya tanpa mengubah apa-apa.

Perkara yang dilakukannya pada setiap pelaksanaan: membersihkan sisa kita sendiri (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) selepas **3 jam pada tmpfs** dan 24 jam pada `_work/_temp` dalam cakera; mematikan `next-build` yang berusia lebih daripada 75 minit (tiada tugas berjalan selama itu — pada 2026-08-27, satu tugas berjalan selama 70 minit selepas GitHub mengisytiharkan tugasnya hilang); memangkas checkout berusia 48 jam bagi runner yang unitnya **dihentikan**; memberi amaran apabila penggunaan cakera ≥ 85%, PSI memori `full/avg60` ≥ 10%, dan bilangan listener melebihi `MAX_ACTIVE_RUNNERS` (dengan pecahan omniroute/lain-lain). Exit 1 = perhatian diperlukan; baca log.

Peraturan 75 minit tidak mengesan binaan yang tugasnya telah pun ditinggalkan oleh GitHub. Apabila `Runner.Listener` tidak dapat memperbaharui tugasnya, `_diag/Runner_*.log` menunjukkan `POST request to …/renewjob timed out after 100 seconds`, API melaporkan tugas tersebut sebagai `completed` (kegagalan) kira-kira sepuluh minit selepas pembaharuan terakhir yang berjaya, dan `next-build` terus berjalan tanpa tugas yang dilampirkan (2026-10-18: Binaan #17066 gagal pada 19:43 dan binaannya masih menggunakan 40 GB lima minit kemudian). Sahkan ref dalam `_diag/Worker_*.log` yang terbaharu, kemudian hantar SIGTERM hanya kepada pepohon binaan mengikut PID — `next-build`, `npm run build`, `build-next-isolated.mjs` dan worker `_work`. Jangan sekali-kali menyentuh `Runner.Listener`, `RunnerService.js` atau `Runner.Worker`: worker melaporkan tugas sebagai dibatalkan dan listener kembali dalam talian dengan sendirinya.

## Unit pelaksana: KillMode

`KillMode=process` lalai pelaksana membiarkan `Runner.Worker → npm → next-build`
terus hidup apabila unit dihentikan atau dimulakan semula — binaan yatim terus menggunakan RAM dan
CPU tanpa kerja yang terikat padanya. Setiap unit OmniRoute mempunyai fail tambahan
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
dengan `KillMode=mixed`: SIGTERM kepada pendengar terlebih dahulu, kemudian SIGKILL kepada seluruh cgroup apabila
`TimeoutStop`. Ia berkuat kuasa pada permulaan semula unit yang berikutnya — mulakan semula **satu pelaksana pada
satu-satu masa, hanya apabila melahu**, dengan semakan melahu dan permulaan semula dalam perintah yang sama.

## Peraturan operasi

- **Satu binaan Turbopack pada satu-satu masa — dikuatkuasakan melalui label.** Setiap tugas yang menjalankan
  `next build` Turbopack penuh menyasarkan `[self-hosted, omni-build]`, dan hanya
  **`omniroute-113-5`** mempunyai label tersebut: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, binaan a11y malam (#16853) dan **amd64**
  `docker-publish.yml` (webpack dalam BuildKit — Turbopack panik di situ, larian 33253576569).
  Bahagian Docker arm64 kekal pada `ubuntu-24.04-arm`. amd64 `docker-publish` berkongsi kumpulan
  konkurensi `heavy-build-main` dengan `ci.yml` `Build` (`cancel-in-progress: false`). Docker Engine
  mesti berada pada `omniroute-113-5`. Slot Turbopack kedua tidak muat dalam 78 GB (2 × 33–37 GB
  serta beban lain pada mesin); slot kedua hanya selamat untuk binaan webpack.
- **Binaan permintaan tarik dijalankan pada hos (2026-10-18).** `ci.yml` `Build` mencapai
  `omni-build` hanya untuk `push` dan `workflow_dispatch`; setiap binaan `pull_request` (asal sendiri
  atau fork) dan `merge_group` dijalankan pada `ubuntu-latest` dengan webpack. Apabila setiap PR
  asal sendiri dihalakan ke slot tersebut, satu binaan Turbopack menguasainya selama 29–58 minit,
  18 binaan beratur sehingga 18 jam, dan binaan push milik cabang keluaran sendiri memperoleh
  slot itu sekali sahaja dalam 40 tugas. Pada hos, binaan PR yang sama mengambil masa 8–12 minit
  bersama tugas PR yang lain. Turbopack, pembundel yang diedarkan oleh `npm-publish`, terus diuji
  pada cabang keluaran melalui binaan a11y malam bagi cabang lalai (04:41 UTC), melalui setiap
  binaan push atau dispatch yang mencapai slot tersebut, dan melalui `npm-publish` sendiri.
  `tests/unit/build/heavy-build-queue.test.ts` mengunci syarat empat klausa tersebut.
- **Jangan sekali-kali mengecilkan slot Turbopack di bawah keperluan yang telah diukur.** Pada
  2026-10-18 pukul 18:06, slot itu diturunkan daripada 56G/60G kepada 40G/44G untuk menyediakan
  ruang bagi `omni-release`. Fasa kompilasi kekal pada `MemoryHigh` sepanjang lariannya (PSI memori
  `full` 30–43 %), dan `Runner.Listener`, yang berkongsi cgroup tersebut, tidak dapat memperbaharui
  tugasnya. Tetapan 56G/60G milik pemilik dari 2026-10-17 dipulihkan pada hari yang sama. Di bawah
  nilai itu, binaan tidak gagal; ia meronta-ronta, dan tugas tersebut hilang.
- **Release-Green mempunyai slotnya sendiri (2026-10-18).** Sebelum itu, kedua-dua pengesahan
  Release-Green dijalankan pada `omni-build`: pada setiap push (~10/jam, 97 daripada 100 larian push
  dibatalkan ketika kerja sedang berlangsung dalam satu hari) dan tiga sapuan penuh ~2 jam sehari
  (sapuan 05:29 menunggu 6 jam untuk slot tersebut) — slot binaan tunggal itu terlebih langgan
  beberapa kali ganda dan binaan PR asal sendiri menunggu berjam-jam. `release-green` dan
  `main-green` kini menyasarkan `omni-release` (`omniroute-113-6` sahaja) dengan
  `OMNIROUTE_USE_TURBOPACK=0`, dan larian yang telah dimulakan tidak lagi dibatalkan oleh push
  yang lebih baharu (slot menunggu masih meredakan limpahan tersebut).
  `tests/unit/build/runner-capacity-routing.test.ts` mengunci penghalaan, pertukaran kepada webpack
  dan memastikan tiada apa-apa pada `omni-release` dibina dengan Turbopack.
- **Kumpulan ringan: `omni-light`.** `omniroute-113` dan `omniroute-113-2` menjalankan binaan malam
  yang memerlukan `next build` bahagian belakang sahaja (~5–6 GB; webpack) dan `quality.yml`
  `lint-guard`. `omniroute-113` mempunyai `MemoryHigh=4G` sehingga 2026-10-18 — binaan promptfoo
  melalui penambakan semula memori selama 54 minit di situ; 8 GB menghapuskan pendikitan tersebut.
- **Kurang pendengar secara sengaja.** Empat unit OmniRoute telah dilumpuhkan pada 2026-08-29 —
  setiap pendengar tambahan ialah penyewa lain bagi belanjawan memori di atas. Had maksimum
  pembersih ialah 6 (`MAX_ACTIVE_RUNNERS=6` dalam cron): ia mengira setiap `Runner.Listener`
  pada mesin tersebut, dan OmniHeuris + OmniMind menambah dua kepada empat milik kami.
- **Jangan sekali-kali membersihkan `/tmp` atau `_work` secara manual semasa mana-mana pelaksana
  sedang sibuk.** Proses semak-kemudian-padam dengan sela antara kedua-duanya menyebabkan satu
  tugas binaan aktif kehilangan `_work` pada 2026-08-27. Pembersih melakukan semakan dan
  penyingkiran dalam satu langkah; biarkannya.
- Menghentikan pelaksana ketika tugas sedang berjalan akan membatalkan tugas tersebut (diperhatikan
  secara langsung): gunakan `systemctl stop` hanya apabila pendengarnya tidak mempunyai proses
  anak `Runner.Worker` — dan lakukannya dalam satu perintah.
- Aliran kerja tidak boleh menyimpan artifak dalam `/tmp` (ia ialah RAM). Muat turun ke
  `$RUNNER_TEMP` (pada cakera, bagi setiap pelaksana) — artifak `next-build` bersaiz 1.3 GB mengambil
  masa 27–32 minit untuk disimpan pada tmpfs dan 2 minit untuk dimuat naik dari cakera.
- VPS `.15` adalah untuk homologasi sahaja — ia tidak pernah menjalankan pelaksana CI.
