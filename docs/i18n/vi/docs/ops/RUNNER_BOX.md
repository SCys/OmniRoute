# Self-Hosted Runner Box Operations (.113 pool) (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Nhóm runner tự lưu trữ chạy trên máy **.113** (`tomni-proxmox-113`). Kể từ 2026-10-18, mỗi
runner OmniRoute có **một vai trò**, một nhãn và ngân sách bộ nhớ/CPU được định cỡ theo số liệu đo
của khối lượng công việc. Slot Turbopack được cấp tài nguyên theo nhu cầu của quá trình build; các slot
khác được định cỡ theo mức đỉnh đã đo. Máy chỉ cấp phát vượt mức khi một bản build Turbopack trùng với
một bản build webpack Release-Green và một tác vụ lint; swap của máy chủ (16 GB) sẽ hấp thụ phần đó,
và vì các bản Build cho pull request chạy trên runner được lưu trữ, slot Turbopack hầu như luôn rảnh:

| runner               | nhãn             | vai trò                                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`       |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------------- |
| `omniroute-113-5`    | `omni-build`     | Các bản build Turbopack: `ci.yml` `Build` (chỉ push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, bản build a11y hằng đêm | 56 GB / 60 GB (swap 0)     | 1600 %           |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), bản build webpack                                                                                           | 20 GB / 24 GB (swap 4 GB)  | 800 %            |
| `omniroute-113-2`    | `omni-light`     | Các tác vụ hằng đêm (Schemathesis, promptfoo, garak, k6, khởi động a11y) và `quality.yml` `lint-guard`                                                      | 12 GB / 16 GB (swap 4 GB)  | 600 %            |
| `omniroute-113`      | `omni-light`     | cùng nhóm như trên                                                                                                                                          | 8 GB / 12 GB               | 400 %            |
| OmniHeuris, OmniMind | (repo của chúng) | Chỉ Dependabot (mức đỉnh 155 MB mỗi runner, 2026-10-18)                                                                                                     | 4 GB / 6 GB                | 200 % mỗi runner |

Số liệu đo ngày 2026-10-18:

| tài nguyên | giá trị                             | ý nghĩa đối với việc lập lịch                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 lõi**                  | một bản build Turbopack production đạt đỉnh 49 GB khi không giới hạn (`tests/unit/ci-build-bundler-webpack.test.ts`); trên Next 16.3.8, chỉ riêng giai đoạn biên dịch đã chiếm ~40 GB (36 GB RSS trong `next-build` cộng với 17 worker loader ở mức 3 GB, đo ngày 2026-10-18); một bản build webpack dùng ~14–16 GB. Một bản build Turbopack + một bản build webpack có thể chạy cùng nhau; hai bản build Turbopack thì không |
| swap       | 16 GB                               | `omniroute-113-5` chạy với swap bị tắt (`MemorySwapMax=0`), vì vậy một bản build mất kiểm soát sẽ bị dừng khi chạm giới hạn thay vì khiến cả máy phải dùng swap                                                                                                                                                                                                                                                               |
| `/tmp`     | **12 GB tmpfs = RAM**               | mọi thứ được lưu tại đây đều chiếm bộ nhớ; dữ liệu còn sót lại được dọn sau 3 giờ                                                                                                                                                                                                                                                                                                                                             |
| CPU        | đã quan sát thấy tải 60 trên 32 lõi | trước khi áp dụng hạn ngạch, một bản build Turbopack (~1166 % CPU) cộng với một bộ kiểm thử coverage trên cùng máy đã làm các heartbeat của những tiến trình lắng nghe khác bị thiếu tài nguyên (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                         |
| runner     | **6 tiến trình lắng nghe**          | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` đã bị vô hiệu hóa (`systemctl enable --now` sẽ bật lại một runner)                                                                                                                                                                                                                                                                                            |

Các giới hạn nằm trong `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` của từng unit
(các giá trị trước đó được giữ lại dưới tên `override.conf.bak-20261018`) và đã được áp dụng trực tiếp bằng
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — không cần khởi động lại,
vì vậy không tác vụ đang chạy nào bị ảnh hưởng. Nhãn được thay đổi thông qua API runner
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), cũng theo thời gian thực.

## Cài đặt janitor (một lần, trên máy chủ)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): cứ mỗi 30 phút, ghi nhật ký vào /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` là bắt buộc: janitor xác minh một đường dẫn đang nhàn rỗi bằng một ảnh chụp nhanh duy nhất về các tệp đang mở trước khi xóa đường dẫn đó; nếu không có công cụ này, nó sẽ không xóa gì và sẽ thông báo rõ
(exit 1). Trước tiên, hãy thử mọi thay đổi với `--dry-run` — nó in ra chính xác những gì sẽ
thực hiện và không thay đổi gì.

Những việc nó thực hiện mỗi lần chạy: dọn dẹp các tệp còn sót lại của chính chúng ta (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) sau **3 giờ trên tmpfs** và 24 giờ trên ổ đĩa
`_work/_temp`; dừng một `next-build` cũ hơn 75 phút (không có tác vụ nào chạy lâu đến vậy — vào
2026-08-27, một tác vụ đã chạy 70 phút sau khi GitHub tuyên bố tác vụ đó bị mất); xóa các
bản checkout cũ hơn 48 giờ của những runner có unit **đã dừng**; cảnh báo khi mức sử dụng ổ đĩa ≥ 85%, PSI bộ nhớ
`full/avg60` ≥ 10%, và số listener vượt quá `MAX_ACTIVE_RUNNERS` (kèm phân loại
omniroute/khác). Exit 1 = cần chú ý; hãy đọc nhật ký.

Quy tắc 75 phút không phát hiện được một bản build mà GitHub đã từ bỏ. Khi
`Runner.Listener` không thể gia hạn tác vụ, `_diag/Runner_*.log` hiển thị
`POST request to …/renewjob timed out after 100 seconds`, API báo cáo tác vụ là `completed`
(thất bại) khoảng mười phút sau lần gia hạn thành công cuối cùng, còn `next-build` vẫn tiếp tục chạy mà
không gắn với tác vụ nào (2026-10-18: Build của #17066 đã thất bại lúc 19:43 nhưng bản build của nó vẫn
chiếm 40 GB năm phút sau đó). Xác nhận ref trong `_diag/Worker_*.log` mới nhất, sau đó
chỉ gửi SIGTERM đến cây tiến trình build theo PID — `next-build`, `npm run build`, `build-next-isolated.mjs` và
các worker trong `_work`. Tuyệt đối không động đến `Runner.Listener`, `RunnerService.js` hoặc `Runner.Worker`: worker sẽ
báo cáo tác vụ là đã bị hủy và listener sẽ tự trở lại trực tuyến.

## Các unit runner: KillMode

Giá trị mặc định `KillMode=process` của runner khiến `Runner.Worker → npm → next-build`
vẫn chạy khi một unit bị dừng hoặc khởi động lại — một bản build mồ côi tiếp tục tiêu tốn RAM và
CPU dù không còn job nào gắn với nó. Mỗi unit OmniRoute đều có một drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
với `KillMode=mixed`: trước tiên gửi SIGTERM đến listener, sau đó gửi SIGKILL đến toàn bộ cgroup khi
đạt `TimeoutStop`. Thiết lập này có hiệu lực trong lần khởi động lại tiếp theo của unit — chỉ khởi động lại **từng runner một,
và chỉ khi đang rảnh**, với bước kiểm tra trạng thái rảnh và khởi động lại nằm trong cùng một lệnh.

## Quy tắc vận hành

- **Mỗi lần chỉ chạy một bản dựng Turbopack — được thực thi bằng nhãn.** Mọi job chạy một lượt
  `next build` đầy đủ bằng Turbopack đều nhắm đến `[self-hosted, omni-build]`, và chỉ
  **`omniroute-113-5`** mang nhãn đó: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, bản dựng a11y hằng đêm (#16853) và
  `docker-publish.yml` **amd64** (webpack bên trong BuildKit — Turbopack đã panic tại đó, lượt chạy
  33253576569). Nhánh Docker arm64 vẫn chạy trên `ubuntu-24.04-arm`. Nhánh amd64 của
  `docker-publish` dùng chung nhóm đồng thời `heavy-build-main` với `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine phải có trên `omniroute-113-5`. Khe Turbopack thứ
  hai không vừa trong 78 GB (2 × 33–37 GB cộng với phần còn lại của máy); khe thứ hai chỉ an toàn
  cho các bản dựng webpack.
- **Các bản dựng pull request chạy trên runner được lưu trữ (2026-10-18).** `ci.yml` `Build` chỉ
  đến `omni-build` đối với `push` và `workflow_dispatch`; mọi bản dựng `pull_request` (từ cùng
  nguồn hoặc fork) và `merge_group` đều chạy trên `ubuntu-latest` bằng webpack. Khi mọi PR từ cùng
  nguồn đều được chuyển đến khe này, một bản dựng Turbopack chiếm khe trong 29–58 phút, 18 bản
  dựng phải xếp hàng đến 18 giờ, và bản dựng push của chính nhánh phát hành chỉ giành được khe một
  lần trong 40 job. Trên runner được lưu trữ, cùng một bản dựng PR mất 8–12 phút khi chạy cạnh các
  job khác của PR. Turbopack, bundler được `npm-publish` phát hành, vẫn được chạy thử trên nhánh
  phát hành thông qua bản dựng a11y hằng đêm của nhánh mặc định (04:41 UTC), mọi bản dựng push hoặc
  dispatch đến được khe này, và chính `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  cố định cổng gồm bốn điều kiện.
- **Không bao giờ đặt kích thước khe Turbopack thấp hơn nhu cầu đã đo được.** Vào 18:06 ngày
  2026-10-18, khe này đã bị hạ từ 56G/60G xuống 40G/44G để nhường chỗ cho `omni-release`. Giai đoạn
  biên dịch nằm ở mức `MemoryHigh` trong toàn bộ lượt chạy (memory PSI `full` 30–43 %), và
  `Runner.Listener`, vốn dùng chung cgroup, không thể gia hạn job của mình. Mức 56G/60G của chủ sở
  hữu từ ngày 2026-10-17 đã được khôi phục ngay trong ngày. Dưới mức đó, bản dựng không thất bại;
  nó bị thrashing và job bị mất.
- **Release-Green có khe riêng (2026-10-18).** Trước đó, cả hai quy trình xác thực Release-Green
  đều chạy trên `omni-build`: với mỗi push (~10/giờ, 97 trong số 100 lượt chạy push bị hủy giữa
  chừng trong một ngày) và ba lượt quét đầy đủ kéo dài ~2 giờ mỗi ngày (lượt quét lúc 05:29 phải
  chờ khe trong 6 giờ) — khe dựng duy nhất đã bị đăng ký vượt công suất nhiều lần và các bản dựng
  PR từ cùng nguồn phải chờ hàng giờ. `release-green` và `main-green` hiện nhắm đến `omni-release`
  (chỉ `omniroute-113-6`) với `OMNIROUTE_USE_TURBOPACK=0`, và một lượt chạy đã bắt đầu sẽ không còn
  bị hủy bởi push mới hơn (khe đang chờ vẫn gộp cơn bão yêu cầu).
  `tests/unit/build/runner-capacity-routing.test.ts` cố định định tuyến, công tắc webpack và điều
  kiện không có gì trên `omni-release` được dựng bằng Turbopack.
- **Nhóm nhẹ: `omni-light`.** `omniroute-113` và `omniroute-113-2` chạy các tác vụ hằng đêm chỉ cần
  một lượt `next build` cho backend (~5–6 GB; webpack) và `quality.yml` `lint-guard`.
  `omniroute-113` có `MemoryHigh=4G` cho đến 2026-10-18 — bản dựng promptfoo phải liên tục thu hồi
  bộ nhớ trong suốt 54 phút tại đó; 8 GB loại bỏ tình trạng điều tiết.
- **Chủ ý dùng ít listener hơn.** Bốn unit OmniRoute đã bị vô hiệu hóa vào 2026-08-29 — mỗi
  listener bổ sung là một tenant khác dùng chung ngân sách bộ nhớ nêu trên. Giới hạn của trình dọn
  dẹp là 6 (`MAX_ACTIVE_RUNNERS=6` trong cron): nó đếm mọi `Runner.Listener` trên máy, còn
  OmniHeuris + OmniMind bổ sung hai listener vào bốn listener của chúng ta.
- **Không bao giờ dọn `/tmp` hoặc `_work` thủ công khi bất kỳ runner nào đang bận.** Việc
  kiểm tra rồi xóa với một khoảng trống giữa hai thao tác là nguyên nhân khiến một job Build đang
  chạy bị mất `_work` vào 2026-08-27. Trình dọn dẹp thực hiện việc kiểm tra và xóa trong một bước;
  hãy để nó xử lý.
- Việc dừng runner giữa chừng sẽ hủy job (đã quan sát trực tiếp): chỉ chạy `systemctl stop`
  khi listener của runner không có tiến trình con `Runner.Worker` — và thực hiện việc đó bằng một
  lệnh duy nhất.
- Workflow không được lưu artefact trong `/tmp` (đó là RAM). Hãy tải xuống
  `$RUNNER_TEMP` (nằm trên đĩa, riêng cho từng runner) — artefact `next-build` có kích thước 1.3 GB
  mất 27–32 phút để ghi vào tmpfs và 2 phút để tải lên từ đĩa.
- VPS `.15` chỉ dành cho homologation — tuyệt đối không chạy runner CI.
