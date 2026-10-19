# Self-Hosted Runner Box Operations (.113 pool) (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Pool yang di-host sendiri berjalan pada mesin **.113** (`tomni-proxmox-113`). Sejak 2026-10-18, setiap
runner OmniRoute memiliki **satu peran**, satu label, serta anggaran memori/CPU yang disesuaikan dengan hasil pengukuran beban kerjanya.
Slot Turbopack mendapatkan sumber daya yang diperlukan build; slot lainnya disesuaikan dengan
puncak penggunaan yang terukur. Mesin hanya mengalami overcommit ketika build Turbopack bertepatan dengan build webpack
Release-Green dan job lint; swap host (16 GB) menampung kelebihan tersebut, dan karena Build pull request berjalan
di runner yang di-host, slot Turbopack tidak aktif hampir sepanjang waktu:

| runner               | label          | peran                                                                                                                                             | `MemoryHigh` / `MemoryMax` | `CPUQuota`          |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------- |
| `omniroute-113-5`    | `omni-build`   | Build Turbopack: `ci.yml` `Build` (khusus push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, build a11y nightly | 56 GB / 60 GB (swap 0)     | 1600 %              |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), build webpack                                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %               |
| `omniroute-113-2`    | `omni-light`   | job nightly (Schemathesis, promptfoo, garak, k6, boot a11y) dan `quality.yml` `lint-guard`                                                        | 12 GB / 16 GB (swap 4 GB)  | 600 %               |
| `omniroute-113`      | `omni-light`   | pool yang sama seperti di atas                                                                                                                    | 8 GB / 12 GB               | 400 %               |
| OmniHeuris, OmniMind | (repo mereka)  | Khusus Dependabot (puncak masing-masing 155 MB, 2026-10-18)                                                                                       | 4 GB / 6 GB                | masing-masing 200 % |

Diukur pada 2026-10-18:

| sumber daya | nilai                         | artinya bagi penjadwalan                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU   | **78 GB / 32 core**           | build produksi Turbopack mencapai puncak 49 GB tanpa pembatasan (`tests/unit/ci-build-bundler-webpack.test.ts`); pada Next 16.3.8, fase kompilasi saja menggunakan ~40 GB (RSS 36 GB dalam `next-build` ditambah 17 worker loader masing-masing 3 GB, diukur pada 2026-10-18); build webpack menggunakan ~14–16 GB. Satu build Turbopack + satu build webpack dapat berjalan bersamaan; dua build Turbopack tidak |
| swap        | 16 GB                         | `omniroute-113-5` berjalan dengan swap dinonaktifkan (`MemorySwapMax=0`), sehingga build yang tidak terkendali dihentikan pada batasnya alih-alih membuat mesin menggunakan swap                                                                                                                                                                                                                                  |
| `/tmp`      | **12 GB tmpfs = RAM**         | apa pun yang disimpan di sana menggunakan memori; sisa file dibersihkan setelah 3 jam                                                                                                                                                                                                                                                                                                                             |
| CPU         | load 60 pada 32 core teramati | sebelum kuota diterapkan, satu build Turbopack (~1166 % CPU) ditambah suite coverage pada mesin yang sama membuat heartbeat listener lainnya kekurangan sumber daya (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                         |
| runner      | **6 listener**                | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` dinonaktifkan (`systemctl enable --now` mengaktifkan kembali salah satunya)                                                                                                                                                                                                                                                                       |

Batas tersebut berada di `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` milik setiap unit
(nilai sebelumnya disimpan sebagai `override.conf.bak-20261018`) dan diterapkan secara langsung dengan
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — tanpa restart, sehingga tidak ada
job yang sedang berjalan yang terpengaruh. Label diubah melalui API runner
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), juga secara langsung.

## Instal pembersih (satu kali, di server)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): setiap 30 menit, catat log ke /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` wajib tersedia: pembersih memastikan suatu path sedang tidak digunakan dengan satu snapshot file yang terbuka sebelum menghapusnya, dan tanpa alat tersebut, pembersih tidak menghapus apa pun serta memberitahukannya (exit 1). Coba setiap perubahan dengan `--dry-run` terlebih dahulu — opsi ini menampilkan secara persis apa yang akan dilakukan tanpa mengubah apa pun.

Yang dilakukan pada setiap eksekusi: membersihkan sisa milik kita sendiri (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) setelah **3 jam di tmpfs** dan 24 jam di `_work/_temp` pada disk; menghentikan `next-build` yang berusia lebih dari 75 menit (tidak ada job yang berjalan selama itu — pada 2026-08-27, satu job berjalan selama 70 menit setelah GitHub menyatakan job tersebut hilang); memangkas checkout berusia 48 jam milik runner yang unitnya **berhenti**; memperingatkan jika penggunaan disk ≥ 85 %, PSI memori `full/avg60` ≥ 10 %, dan jumlah listener melebihi `MAX_ACTIVE_RUNNERS` (dengan perincian omniroute/lainnya). Exit 1 = perlu ditangani; baca log.

Aturan 75 menit tidak dapat mendeteksi build yang job-nya sudah dihentikan oleh GitHub. Ketika `Runner.Listener` tidak dapat memperbarui job-nya, `_diag/Runner_*.log` menampilkan `POST request to …/renewjob timed out after 100 seconds`, API melaporkan job sebagai `completed` (`failure`) sekitar sepuluh menit setelah pembaruan terakhir yang berhasil, dan `next-build` terus berjalan tanpa terikat ke job apa pun (2026-10-18: Build dari #17066 dinyatakan gagal pada 19:43 dan build-nya masih menggunakan 40 GB lima menit kemudian). Konfirmasikan ref di `_diag/Worker_*.log` terbaru, lalu kirim SIGTERM hanya ke hierarki proses build berdasarkan PID — `next-build`, `npm run build`, `build-next-isolated.mjs`, dan worker `_work`. Jangan pernah menyentuh `Runner.Listener`, `RunnerService.js`, atau `Runner.Worker`: worker akan melaporkan job sebagai dibatalkan dan listener akan kembali online dengan sendirinya.

## Unit runner: KillMode

`KillMode=process` bawaan runner membiarkan `Runner.Worker → npm → next-build`
tetap hidup saat unit dihentikan atau dimulai ulang — build yatim piatu terus menghabiskan RAM dan
CPU tanpa job yang terhubung. Setiap unit OmniRoute memiliki drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
dengan `KillMode=mixed`: SIGTERM dikirimkan terlebih dahulu ke listener, lalu SIGKILL ke seluruh cgroup saat
`TimeoutStop`. Konfigurasi ini mulai berlaku saat unit dimulai ulang berikutnya — mulai ulang **satu runner
pada satu waktu, hanya saat idle**, dengan pemeriksaan idle dan proses mulai ulang dalam perintah yang sama.

## Aturan operasional

- **Satu build Turbopack pada satu waktu — diberlakukan melalui label.** Setiap job yang menjalankan
  `next build` Turbopack lengkap menargetkan `[self-hosted, omni-build]`, dan hanya
  **`omniroute-113-5`** yang memiliki label tersebut: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, build a11y nightly (#16853), dan **amd64**
  `docker-publish.yml` (webpack di dalam BuildKit — Turbopack mengalami panic di sana, run
  33253576569). Tahapan Docker arm64 tetap menggunakan `ubuntu-24.04-arm`. amd64
  `docker-publish` berbagi grup concurrency `heavy-build-main` dengan `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine harus tersedia di `omniroute-113-5`. Slot Turbopack
  kedua tidak muat dalam 78 GB (2 × 33–37 GB ditambah seluruh beban lain pada mesin); slot kedua
  hanya aman untuk build webpack.
- **Build pull request berjalan di runner ter-hosting (2026-10-18).** `ci.yml` `Build` hanya mencapai
  `omni-build` untuk `push` dan `workflow_dispatch`; setiap Build `pull_request` (asal sendiri
  maupun fork) dan `merge_group` berjalan di `ubuntu-latest` dengan webpack. Ketika setiap PR
  asal sendiri diarahkan ke slot tersebut, sebuah Build Turbopack menahannya selama 29–58 menit,
  18 Build mengantre hingga 18 jam, dan Build push milik lini rilis sendiri hanya mendapatkan
  slot sekali dalam 40 job. Di runner ter-hosting, Build PR yang sama memerlukan 8–12 menit
  bersama job PR lainnya. Turbopack, bundler yang dikirimkan oleh `npm-publish`, tetap diuji pada
  lini rilis melalui build a11y nightly cabang default (04:41 UTC), melalui setiap Build push atau
  dispatch yang mencapai slot tersebut, dan melalui `npm-publish` itu sendiri.
  `tests/unit/build/heavy-build-queue.test.ts` mengunci gerbang empat klausul tersebut.
- **Jangan pernah menetapkan ukuran slot Turbopack di bawah kebutuhan terukurnya.** Pada 2026-10-18
  pukul 18:06, slot diturunkan dari 56G/60G menjadi 40G/44G untuk menyediakan ruang bagi
  `omni-release`. Fase kompilasi bertahan pada `MemoryHigh` sepanjang prosesnya (memory PSI `full`
  30–43 %), dan `Runner.Listener`, yang berbagi cgroup, tidak dapat memperbarui job-nya.
  Konfigurasi pemilik sebesar 56G/60G dari 2026-10-17 dipulihkan pada hari yang sama. Di bawah
  nilai tersebut, build tidak gagal; build mengalami thrashing, dan job hilang.
- **Release-Green memiliki slot sendiri (2026-10-18).** Sebelumnya, kedua validasi Release-Green
  berjalan di `omni-build`: pada setiap push (~10/jam, 97 dari 100 run push dibatalkan saat masih
  bekerja dalam satu hari) dan tiga sweep penuh berdurasi ~2 jam per hari (sweep pukul 05:29
  menunggu slot selama 6 jam) — satu-satunya slot build mengalami kelebihan permintaan beberapa
  kali lipat dan Build PR asal sendiri menunggu selama berjam-jam. `release-green` dan
  `main-green` sekarang menargetkan `omni-release` (hanya `omniroute-113-6`) dengan
  `OMNIROUTE_USE_TURBOPACK=0`, dan run yang telah dimulai tidak lagi dibatalkan oleh push yang
  lebih baru (slot tertunda tetap meredam lonjakan). `tests/unit/build/runner-capacity-routing.test.ts`
  mengunci perutean, pengalihan ke webpack, dan memastikan tidak ada apa pun di `omni-release`
  yang dibangun dengan Turbopack.
- **Pool ringan: `omni-light`.** `omniroute-113` dan `omniroute-113-2` menjalankan proses nightly
  yang membutuhkan `next build` khusus backend (~5–6 GB; webpack) dan `quality.yml` `lint-guard`.
  `omniroute-113` memiliki `MemoryHigh=4G` hingga 2026-10-18 — build promptfoo melakukan reclaim
  memori selama 54 menit di sana; 8 GB menghilangkan throttling tersebut.
- **Jumlah listener yang lebih sedikit memang disengaja.** Empat unit OmniRoute dinonaktifkan
  pada 2026-08-29 — setiap listener tambahan menjadi tenant lain bagi anggaran memori di atas.
  Batas maksimum janitor adalah 6 (`MAX_ACTIVE_RUNNERS=6` dalam cron): batas ini menghitung
  setiap `Runner.Listener` pada mesin, dan OmniHeuris + OmniMind menambahkan dua listener ke
  empat listener milik kita.
- **Jangan pernah membersihkan `/tmp` atau `_work` secara manual saat ada runner yang sibuk.**
  Pemeriksaan lalu penghapusan dengan jeda di antara keduanya menyebabkan job Build yang sedang
  aktif kehilangan `_work`-nya pada 2026-08-27. Janitor melakukan pemeriksaan dan penghapusan
  dalam satu langkah; biarkan janitor menanganinya.
- Menghentikan runner saat job sedang berjalan akan membatalkan job tersebut (diamati secara
  langsung): jalankan `systemctl stop` hanya ketika listener tidak memiliki proses turunan
  `Runner.Worker` — dan lakukan dalam satu perintah.
- Workflow tidak boleh menyimpan artefak di `/tmp` (lokasi tersebut menggunakan RAM). Unduh ke
  `$RUNNER_TEMP` (berada di disk, terpisah untuk setiap runner) — artefak `next-build` sebesar
  1,3 GB memerlukan 27–32 menit untuk disimpan ke tmpfs dan 2 menit untuk diunggah dari disk.
- VPS `.15` hanya untuk homologasi — tidak pernah menjalankan runner CI.
