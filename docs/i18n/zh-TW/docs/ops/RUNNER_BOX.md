# Self-Hosted Runner Box Operations (.113 pool) (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md)

---

自架集區執行於 **.113** 主機（`tomni-proxmox-113`）。自 2026-10-18 起，每個
OmniRoute runner 都只有**一個角色**、一個標籤，以及依其工作負載實測結果配置的記憶體／CPU
預算。Turbopack 執行槽會取得建置所需的資源；其他執行槽則依其實測峰值配置。
只有當 Turbopack 建置、Release-Green webpack 建置與 lint 工作同時執行時，該主機才會超額配置；
主機的 swap（16 GB）會吸收超出的用量，而且由於提取要求的 Build 會在代管 runner 上執行，
Turbopack 執行槽大多數時間都處於閒置狀態：

| runner               | 標籤             | 角色                                                                                                                                        | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack 建置：`ci.yml` `Build`（僅限 push/dispatch）、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、每夜 a11y 建置 | 56 GB / 60 GB（swap 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release`   | Release-Green（`release-green` + `main-green`）、webpack 建置                                                                               | 20 GB / 24 GB（swap 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`     | 每夜工作（Schemathesis、promptfoo、garak、k6、a11y 啟動）以及 `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB（swap 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`     | 與上方相同的集區                                                                                                                            | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | （各自的儲存庫） | 僅執行 Dependabot（各自峰值為 155 MB，2026-10-18）                                                                                          | 4 GB / 6 GB                | 各 200 %   |

2026-10-18 實測結果：

| 資源      | 數值                      | 對排程的意義                                                                                                                                                                                                                                                                                                                              |
| --------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 核心**       | 未設上限的 Turbopack 生產建置峰值為 49 GB（`tests/unit/ci-build-bundler-webpack.test.ts`）；在 Next 16.3.8 上，僅編譯階段就會占用約 40 GB（`next-build` 的 RSS 為 36 GB，另有 17 個 loader worker、各占 3 GB，實測於 2026-10-18）；webpack 建置約為 14–16 GB。一個 Turbopack 加上一個 webpack 建置可以同時容納；兩個 Turbopack 建置則不行 |
| swap      | 16 GB                     | `omniroute-113-5` 執行時會關閉 swap（`MemorySwapMax=0`），因此失控的建置會在達到上限時被終止，而不會讓整台主機開始換頁                                                                                                                                                                                                                    |
| `/tmp`    | **12 GB tmpfs = RAM**     | 任何存放在此處的內容都會占用記憶體；殘留項目會在 3 小時後清除                                                                                                                                                                                                                                                                             |
| CPU       | 在 32 核心上觀察到負載 60 | 設定配額之前，一個 Turbopack 建置（約 1166 % CPU）加上同一台主機上的 coverage 測試套件，會使其他 listener 的 heartbeat 無法獲得資源（`The self-hosted runner lost communication`，#16853）                                                                                                                                                |
| runner    | **6 個 listener**         | 4 個 OmniRoute + OmniHeuris + OmniMind；`omniroute-113-3/-4/-7/-8` 已停用（`systemctl enable --now` 可重新啟用其中一個）                                                                                                                                                                                                                  |

這些限制位於各 unit 的 `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
中（先前的值保留為 `override.conf.bak-20261018`），並透過
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` 即時套用——無須重新啟動，因此
不會影響任何正在執行的工作。標籤則透過 runners API 變更
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`），同樣會即時生效。

## 安裝清理程式（一次性，在主機上執行）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：每 30 分鐘執行一次，記錄至 /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

必須安裝 `lsof`：清理程式會先擷取一次開啟中檔案的快照，以確認路徑處於閒置狀態，之後才會將其移除；若沒有此工具，它不會移除任何項目，並會回報原因
（結束碼 1）。任何變更都應先使用 `--dry-run` 試跑——它會準確顯示將執行的操作，
但不會變更任何內容。

每次執行時會進行以下操作：清除我們自己留下的項目（`runner-*`、`omniroute-*`、
`next-build*`、`e2e-build.tar.gz`），在 **tmpfs 上超過 3 小時**，以及磁碟上的
`_work/_temp` 中超過 24 小時後清除；終止執行超過 75 分鐘的 `next-build`
（沒有任何工作會執行那麼久——在 2026-08-27，有一個工作在 GitHub 已判定其遺失後仍執行了 70 分鐘）；
清除其單元為**已停止**之 runner 的 48 小時前 checkout；並在磁碟使用率 ≥ 85 %、
記憶體 PSI `full/avg60` ≥ 10 %，以及監聽程式數量超過 `MAX_ACTIVE_RUNNERS` 時發出警示
（並分別列出 omniroute／其他項目的數量）。結束碼 1 = 需要處理；請查看記錄。

75 分鐘規則無法攔截 GitHub 已經放棄其工作的建置。當
`Runner.Listener` 無法續約工作時，`_diag/Runner_*.log` 會顯示
`POST request to …/renewjob timed out after 100 seconds`；API 會在上次成功續約後約十分鐘，
將工作回報為 `completed`（失敗），而 `next-build` 仍會在未連結至任何工作的情況下持續執行
（2026-10-18：#17066 的建置工作於 19:43 失敗，但五分鐘後其建置仍占用 40 GB）。
請在最新的 `_diag/Worker_*.log` 中確認 ref，然後依 PID 僅對建置處理程序樹傳送 SIGTERM——
包括 `next-build`、`npm run build`、`build-next-isolated.mjs` 與 `_work` worker。
絕對不要觸碰 `Runner.Listener`、`RunnerService.js` 或 `Runner.Worker`：worker 會將工作回報為已取消，
而 listener 會自行重新上線。

## Runner 單元：KillMode

Runner 預設的 `KillMode=process` 會在單元停止或重新啟動時，讓 `Runner.Worker → npm → next-build`
繼續存活——孤兒建置程序會在沒有任何工作與其關聯的情況下持續消耗 RAM 和
CPU。每個 OmniRoute 單元都帶有一個置入式設定
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)，
其中設定 `KillMode=mixed`：先向監聽器傳送 SIGTERM，並在
`TimeoutStop` 時對整個 cgroup 傳送 SIGKILL。此設定會在單元下次重新啟動時生效——**一次只重新啟動一個 runner，而且僅能在閒置時進行**，並將閒置檢查與重新啟動放在同一個命令中。

## 運作規則

- **一次只能執行一個 Turbopack 建置作業——透過標籤強制執行。** 每個執行完整 Turbopack
  `next build` 的作業都以 `[self-hosted, omni-build]` 為目標，而且只有 **`omniroute-113-5`** 帶有該
  標籤：`ci.yml` `Build`、`npm-publish.yml` `publish`、`nightly-v4-build`、`preview-artifact`、
  每晚的 a11y 建置 (#16853)，以及 `docker-publish.yml` **amd64**（BuildKit 內的 webpack——
  Turbopack 曾在該處發生 panic，執行編號 33253576569）。arm64 Docker 階段仍使用 `ubuntu-24.04-arm`。
  `docker-publish` amd64 與 `ci.yml` `Build` 共用 `heavy-build-main` 並行群組
  (`cancel-in-progress: false`)。Docker Engine 必須位於 `omniroute-113-5`。第二個 Turbopack
  執行槽無法容納於 78 GB 中（2 × 33–37 GB，再加上主機其餘部分的用量）；第二個執行槽只適合
  webpack 建置。
- **提取要求的建置使用託管執行器（2026-10-18）。** `ci.yml` `Build` 只有在
  `push` 和 `workflow_dispatch` 時才會到達 `omni-build`；每個 `pull_request`（同來源或 fork）及
  `merge_group` Build 都會在 `ubuntu-latest` 上使用 webpack 執行。當每個同來源 PR 都被導向該執行槽時，一個 Turbopack
  Build 會占用它 29–58 分鐘，18 個 Build 最長排隊達 18 小時，而發行線本身的 push Build
  在 40 個作業中僅有一次取得該執行槽。使用託管執行器時，相同的 PR Build 與該 PR 的其他
  作業一起執行只需 8–12 分鐘。`npm-publish` 發布時所採用的打包器 Turbopack，仍會在發行線上透過
  預設分支每晚的 a11y 建置（UTC 04:41）、每個到達該執行槽的 push 或 dispatch Build，
  以及 `npm-publish` 本身進行驗證。`tests/unit/build/heavy-build-queue.test.ts`
  固定驗證這四項條件的閘門。
- **絕不可將 Turbopack 執行槽的容量設為低於實測需求。** 在 2026-10-18 18:06，該執行槽
  從 56G/60G 降至 40G/44G，以便為 `omni-release` 騰出空間。編譯階段在整段執行期間都維持於
  `MemoryHigh`（記憶體 PSI `full` 為 30–43 %），而共用該 cgroup 的 `Runner.Listener`
  無法續租其作業。當天即恢復為擁有者於 2026-10-17 設定的 56G/60G。
  低於該值時，建置不會直接失敗；它會反覆換頁抖動，最終導致作業遺失。
- **Release-Green 擁有自己的執行槽（2026-10-18）。** 在此之前，兩項 Release-Green 驗證都在
  `omni-build` 上執行：每次 push（約 10 次/小時；一天內 100 次 push 執行中有 97 次在作業途中取消），
  以及每天三次約 2 小時的完整掃描（05:29 的掃描等待該執行槽達 6 小時）——單一建置
  執行槽的需求量超出容量數倍，同來源 PR Build 也必須等待數小時。
  `release-green` 和 `main-green` 現在以 `omni-release`（僅限 `omniroute-113-6`）為目標，並設定
  `OMNIROUTE_USE_TURBOPACK=0`；已開始的執行也不再因較新的 push 而取消（待處理的
  執行槽仍會合併這波大量請求）。`tests/unit/build/runner-capacity-routing.test.ts`
  固定驗證路由、webpack 切換，以及 `omni-release` 上不會有任何項目使用 Turbopack 建置。
- **輕量集區：`omni-light`。** `omniroute-113` 和 `omniroute-113-2` 執行需要
  僅後端 `next build`（約 5–6 GB；webpack）的每晚作業，以及 `quality.yml` `lint-guard`。`omniroute-113`
  在 2026-10-18 之前一直設定為 `MemoryHigh=4G`——promptfoo 建置在那裡花了 54 分鐘不斷回收記憶體
  才勉強完成；8 GB 可消除節流。
- **刻意減少監聽器。** 四個 OmniRoute 單元已於 2026-08-29 停用——每個額外的
  監聽器都會成為上述記憶體預算的另一個租戶。清理程式的上限是 6（cron 中的 `MAX_ACTIVE_RUNNERS=6`）：它會計算
  主機上的每個 `Runner.Listener`，而 OmniHeuris + OmniMind 會在我們的四個之外再增加兩個。
- **任何 runner 忙碌時，絕不可手動清理 `/tmp` 或 `_work`。** 先檢查再刪除且兩者之間存在時間差，
  正是某個執行中的 Build 作業在 2026-08-27 遺失其
  `_work` 的原因。清理程式會在單一步驟中完成檢查與移除；
  交給它處理即可。
- 在作業執行途中停止 runner 會取消該作業（已在實際環境觀察到）：只有在其 listener 沒有
  `Runner.Worker` 子程序時才能執行 `systemctl stop`——而且必須在單一命令中完成。
- 工作流程不得將產物放在 `/tmp` 中（它位於 RAM）。應下載至
  `$RUNNER_TEMP`（位於磁碟上，每個 runner 各自獨立）——1.3 GB 的 `next-build` 產物需要 27–32
  分鐘才能寫入 tmpfs，但從磁碟上傳只需 2 分鐘。
- `.15` VPS 僅供驗收測試使用——絕不執行 CI runner。
