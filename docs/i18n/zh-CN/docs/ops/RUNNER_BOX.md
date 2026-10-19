# Self-Hosted Runner Box Operations (.113 pool) (中文 (简体))

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

自托管池运行在 **.113** 机器（`tomni-proxmox-113`）上。自 2026-10-18 起，每个
OmniRoute 运行器都只有**一个角色**、一个标签，并根据其工作负载的实测值分配内存/CPU
预算。Turbopack 插槽获得构建所需的资源；其他插槽则根据其实测峰值确定资源大小。
仅当 Turbopack 构建与 Release-Green webpack 构建及 lint 作业同时运行时，该机器才会超额分配；
主机交换空间（16 GB）会吸收超出的部分，而且由于拉取请求的 Build 在托管运行器上运行，
Turbopack 插槽大多数时间都处于空闲状态：

| 运行器               | 标签           | 角色                                                                                                                                        | `MemoryHigh` / `MemoryMax`     | `CPUQuota` |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack 构建：`ci.yml` `Build`（仅限 push/dispatch）、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、夜间 a11y 构建 | 56 GB / 60 GB（交换空间 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green（`release-green` + `main-green`）、webpack 构建                                                                               | 20 GB / 24 GB（交换空间 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`   | 夜间任务（Schemathesis、promptfoo、garak、k6、a11y 启动）以及 `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB（交换空间 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`   | 与上方相同的池                                                                                                                              | 8 GB / 12 GB                   | 400 %      |
| OmniHeuris, OmniMind | （各自的仓库） | 仅运行 Dependabot（2026-10-18 测得每个峰值为 155 MB）                                                                                       | 4 GB / 6 GB                    | 每个 200 % |

2026-10-18 实测：

| 资源      | 数值                    | 对调度的意义                                                                                                                                                                                                                                                                                                                                       |
| --------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 核**       | 一次未设上限的 Turbopack 生产构建峰值达到 49 GB（`tests/unit/ci-build-bundler-webpack.test.ts`）；在 Next 16.3.8 上，仅编译阶段就会占用约 40 GB（`next-build` 中有 36 GB RSS，另有 17 个各占 3 GB 的 loader worker，测于 2026-10-18）；一次 webpack 构建约占 14–16 GB。一个 Turbopack 构建加一个 webpack 构建可同时容纳；两个 Turbopack 构建则不行 |
| 交换空间  | 16 GB                   | `omniroute-113-5` 在禁用交换空间（`MemorySwapMax=0`）的情况下运行，因此失控的构建会在达到上限时被终止，而不是导致整台机器进行交换                                                                                                                                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**   | 存放在这里的任何内容都会占用内存；残留内容会在 3 小时后清理                                                                                                                                                                                                                                                                                        |
| CPU       | 在 32 核上观察到负载 60 | 设置配额之前，一个 Turbopack 构建（约 1166 % CPU）加上同一台机器上的覆盖率测试套件，会导致其他侦听器的心跳得不到资源（`The self-hosted runner lost communication`，#16853）                                                                                                                                                                        |
| 运行器    | **6 个侦听器**          | 4 个 OmniRoute + OmniHeuris + OmniMind；`omniroute-113-3/-4/-7/-8` 已禁用（`systemctl enable --now` 可恢复其中一个）                                                                                                                                                                                                                               |

这些限制位于各单元的 `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
中（旧值保存在 `override.conf.bak-20261018`），并通过
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` 实时应用——无需重启，因此没有
影响任何正在运行的作业。标签则通过运行器 API 更改
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`），同样实时生效。

## 安装清理程序（一次性，在该机器上操作）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：每 30 分钟运行一次，日志写入 /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

必须安装 `lsof`：清理程序会通过一次打开文件快照来确认路径处于空闲状态，然后才会将其删除；如果没有此工具，它不会删除任何内容，并会明确说明
（退出码为 1）。进行任何更改前，请先使用 `--dry-run` 试运行——它会准确输出将要执行的操作，
但不会改动任何内容。

每次运行时，它会执行以下操作：清理由我们产生的残留项（`runner-*`、`omniroute-*`、
`next-build*`、`e2e-build.tar.gz`），其中 tmpfs 上超过 **3 小时**的内容会被清理，
磁盘 `_work/_temp` 上超过 24 小时的内容会被清理；终止运行时间超过 75 分钟的 `next-build`
（没有任何作业需要运行这么久——在 2026-08-27，GitHub 已将某个作业判定为丢失后，它仍运行了 70 分钟）；
清理所属 runner 的服务单元已**停止**且已存在 48 小时的检出目录；在磁盘使用率 ≥ 85%、内存 PSI
`full/avg60` ≥ 10%，以及监听器数量超过 `MAX_ACTIVE_RUNNERS` 时发出警报（并提供
omniroute/其他监听器的细分数据）。退出码为 1 = 需要关注；请查看日志。

75 分钟规则无法捕获 GitHub 已放弃、但仍在运行的构建。当
`Runner.Listener` 无法续订其作业时，`_diag/Runner_*.log` 中会显示
`POST request to …/renewjob timed out after 100 seconds`；在最后一次成功续订约十分钟后，API 会将该作业报告为 `completed`
（失败），而 `next-build` 会在没有关联作业的情况下继续运行
（2026-10-18：#17066 的构建于 19:43 被标记为失败，但五分钟后其构建进程仍占用着
40 GB）。请在最新的 `_diag/Worker_*.log` 中确认 ref，然后仅根据 PID 向构建进程树发送
SIGTERM——包括 `next-build`、`npm run build`、`build-next-isolated.mjs` 和
`_work` worker。绝不要操作 `Runner.Listener`、`RunnerService.js` 或 `Runner.Worker`：
worker 会将作业报告为已取消，而监听器会自行重新上线。

## 运行器单元：KillMode

运行器默认的 `KillMode=process` 会在单元停止或重启时留下仍在运行的 `Runner.Worker → npm → next-build`
——孤儿构建会在没有关联作业的情况下继续消耗 RAM 和
CPU。每个 OmniRoute 单元都带有一个插入配置
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)，
其中设置了 `KillMode=mixed`：首先向监听器发送 SIGTERM，并在
`TimeoutStop` 时向整个 cgroup 发送 SIGKILL。该配置会在单元下次重启时生效——**每次只重启一个运行器，
且仅在其空闲时进行**，并将空闲检查和重启放在同一条命令中。

## 操作规则

- **同一时间只能运行一个 Turbopack 构建——通过标签强制执行。** 每个运行完整 Turbopack
  `next build` 的作业都以 `[self-hosted, omni-build]` 为目标，并且只有 **`omniroute-113-5`** 带有该
  标签：`ci.yml` 的 `Build`、`npm-publish.yml` 的 `publish`、`nightly-v4-build`、`preview-artifact`、
  夜间 a11y 构建 (#16853)，以及 `docker-publish.yml` 的 **amd64**（BuildKit 内使用 webpack——
  Turbopack 曾在那里崩溃，运行编号 33253576569）。arm64 Docker 分支仍在 `ubuntu-24.04-arm` 上运行。
  `docker-publish` 的 amd64 与 `ci.yml` 的 `Build` 共用 `heavy-build-main` 并发组
  (`cancel-in-progress: false`)。`omniroute-113-5` 上必须安装 Docker Engine。78 GB 无法容纳第二个
  Turbopack 槽位（2 × 33–37 GB，再加上机器其余部分的内存占用）；第二个槽位仅对 webpack 构建安全。
- **拉取请求的构建在托管运行器上运行（2026-10-18）。** `ci.yml` 的 `Build` 仅在
  `push` 和 `workflow_dispatch` 时使用 `omni-build`；每个 `pull_request`（来自本仓库或 fork）
  以及 `merge_group` 的 Build 都在 `ubuntu-latest` 上使用 webpack 运行。将每个来自本仓库的 PR
  都路由到该槽位后，一个 Turbopack Build 会占用它 29–58 分钟，18 个 Build 最长排队 18 小时，
  而发布线自身的 push Build 在 40 个作业中仅有一次获得该槽位。在托管运行器上，同一个 PR Build
  与该 PR 的其他作业并行时仅需 8–12 分钟。`npm-publish` 所发布版本使用的打包器 Turbopack，
  仍会通过默认分支的夜间 a11y 构建（UTC 04:41）、每个到达该槽位的 push 或 dispatch Build，
  以及 `npm-publish` 本身，在发布线上得到验证。`tests/unit/build/heavy-build-queue.test.ts`
  固定了这套包含四个条件的门控规则。
- **绝不能将 Turbopack 槽位的资源配置降至实测需求以下。** 2026-10-18 18:06，为了给
  `omni-release` 腾出空间，该槽位从 56G/60G 降至 40G/44G。整个运行期间，编译阶段始终达到
  `MemoryHigh`（内存 PSI 的 `full` 为 30–43%），而与其共享 cgroup 的 `Runner.Listener`
  无法续订其作业。当天恢复了所有者于 2026-10-17 设置的 56G/60G。低于该值时，构建不会失败；
  它会陷入频繁换页，最终导致作业丢失。
- **Release-Green 拥有自己的槽位（2026-10-18）。** 在此之前，两项 Release-Green 验证都在
  `omni-build` 上运行：每次 push 都运行（约 10 次/小时；一天内 100 次 push 运行中有 97 次
  在执行中途被取消），此外每天还运行三次约 2 小时的完整扫描（05:29 的扫描为等待槽位耗时
  6 小时）——唯一的构建槽位被数倍超额使用，来自本仓库的 PR Build 需要等待数小时。
  `release-green` 和 `main-green` 现在以 `omni-release`（仅 `omniroute-113-6`）为目标，并设置
  `OMNIROUTE_USE_TURBOPACK=0`；已开始的运行不再因新的 push 而取消（待处理槽位仍会合并这波
  高频触发）。`tests/unit/build/runner-capacity-routing.test.ts` 固定了路由、webpack 开关，
  并确保 `omni-release` 上没有任何构建使用 Turbopack。
- **轻量池：`omni-light`。** `omniroute-113` 和 `omniroute-113-2` 运行仅需要后端
  `next build`（约 5–6 GB；webpack）的夜间任务，以及 `quality.yml` 的 `lint-guard`。
  `omniroute-113` 的 `MemoryHigh=4G` 一直持续到 2026-10-18——promptfoo 构建在那里经过
  54 分钟的内存回收挣扎才完成；提升到 8 GB 后消除了限流。
- **有意减少监听器数量。** 2026-08-29 禁用了四个 OmniRoute 单元——每增加一个监听器，
  就会为上述内存预算增加一个租户。清理器的上限为 6（cron 中的 `MAX_ACTIVE_RUNNERS=6`）：它会统计
  机器上的每个 `Runner.Listener`，而 OmniHeuris + OmniMind 占用了我们四个之外的两个名额。
- **任何运行器繁忙时，绝不能手动清理 `/tmp` 或 `_work`。** 先检查、间隔一段时间再删除的做法，
  正是 2026-08-27 一个正在运行的 Build 作业丢失其 `_work` 的原因。清理器会在一个步骤中完成
  检查和删除；让它处理即可。
- 在作业执行期间停止运行器会取消该作业（已在线实测）：仅当监听器没有 `Runner.Worker`
  子进程时才能执行 `systemctl stop`——并且必须在一条命令中完成检查和停止。
- 工作流不得将制品存放在 `/tmp` 中（它位于 RAM 上）。应下载到
  `$RUNNER_TEMP`（位于磁盘上，每个运行器独立）——1.3 GB 的 `next-build` 制品落盘到 tmpfs
  需要 27–32 分钟，而从磁盘上传仅需 2 分钟。
- `.15` VPS 仅用于验收——绝不运行 CI 运行器。
