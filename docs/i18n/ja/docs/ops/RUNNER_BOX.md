# Self-Hosted Runner Box Operations (.113 pool) (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

セルフホストプールは **.113** マシン（`tomni-proxmox-113`）上で稼働しています。2026-10-18 以降、各
OmniRoute ランナーには **1 つの役割**、1 つのラベル、および実測されたワークロードに応じたメモリ/CPU
バジェットが割り当てられています。Turbopack スロットにはビルドに必要なリソースを割り当て、その他のスロットは
実測されたピーク値に合わせてサイジングしています。このマシンがオーバーコミット状態になるのは、Turbopack ビルド、
Release-Green の webpack ビルド、および lint ジョブが同時に実行された場合のみです。その場合はホストのスワップ（16 GB）が
吸収します。また、プルリクエストのビルドはホステッド環境で実行されるため、Turbopack スロットはほとんどの時間アイドル状態です。

| ランナー             | ラベル           | 役割                                                                                                                                               | `MemoryHigh` / `MemoryMax`     | `CPUQuota` |
| -------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack ビルド：`ci.yml` の `Build`（push/dispatch のみ）、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、夜間 a11y ビルド | 56 GB / 60 GB（スワップ 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release`   | Release-Green（`release-green` + `main-green`）、webpack ビルド                                                                                    | 20 GB / 24 GB（スワップ 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`     | 夜間ジョブ（Schemathesis、promptfoo、garak、k6、a11y ブート）および `quality.yml` の `lint-guard`                                                  | 12 GB / 16 GB（スワップ 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`     | 上記と同じプール                                                                                                                                   | 8 GB / 12 GB                   | 400 %      |
| OmniHeuris, OmniMind | （各リポジトリ） | Dependabot のみ（各ピーク 155 MB、2026-10-18）                                                                                                     | 4 GB / 6 GB                    | 各 200 %   |

2026-10-18 の実測値：

| リソース  | 値                         | スケジューリング上の意味                                                                                                                                                                                                                                                                                                                                                                                              |
| --------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 コア**        | Turbopack の本番ビルドは、上限なしの状態で 49 GB のピークを記録（`tests/unit/ci-build-bundler-webpack.test.ts`）。Next 16.3.8 では、コンパイルフェーズだけで約 40 GB を保持します（`next-build` の RSS が 36 GB、それに加えて 17 個のローダーワーカーが各 3 GB。2026-10-18 実測）。webpack ビルドは約 14～16 GB。Turbopack ビルド 1 つと webpack ビルド 1 つは同時に収まりますが、Turbopack ビルド 2 つは収まりません |
| スワップ  | 16 GB                      | `omniroute-113-5` はスワップ無効（`MemorySwapMax=0`）で実行されるため、暴走したビルドはマシン全体をスワップさせるのではなく、上限到達時に停止されます                                                                                                                                                                                                                                                                 |
| `/tmp`    | **12 GB tmpfs = RAM**      | ここに置かれたものはすべてメモリを消費します。残存ファイルは 3 時間後に削除されます                                                                                                                                                                                                                                                                                                                                   |
| CPU       | 32 コア上で load 60 を観測 | クォータ設定前は、1 つの Turbopack ビルド（約 1166 % CPU）とカバレッジスイートを同じマシン上で実行すると、他のリスナーのハートビートがリソース不足に陥っていました（`The self-hosted runner lost communication`、#16853）                                                                                                                                                                                             |
| ランナー  | **6 リスナー**             | OmniRoute 4 個 + OmniHeuris + OmniMind。`omniroute-113-3/-4/-7/-8` は無効化されています（`systemctl enable --now` で 1 つを復帰できます）                                                                                                                                                                                                                                                                             |

制限値は各ユニットの `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
にあり（以前の値は `override.conf.bak-20261018` として保持）、実行中に
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` で適用されました。再起動は行っていないため、
実行中のジョブには影響していません。ラベルも runners API
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`）を通じて、実行中に変更されます。

## janitor のインストール（初回のみ、対象マシン上で実行）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：30 分ごとに実行し、/var/log/runner-janitor.log にログを出力
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` は必須です。janitor はパスを削除する前に、開いているファイルのスナップショットを 1 回取得して、そのパスがアイドル状態であることを確認します。このツールがなければ何も削除せず、その旨を通知します（exit 1）。変更を試す際は、まず `--dry-run` を使用してください。実際に行う処理を正確に出力し、何も変更しません。

実行ごとの処理内容：tmpfs 上では **3 時間**、ディスク上の `_work/_temp` では 24 時間が経過した自分たちの残存ファイル（`runner-*`、`omniroute-*`、`next-build*`、`e2e-build.tar.gz`）を削除します。75 分を超えた `next-build` を強制終了します（これほど長時間実行されるジョブはありません。2026-08-27 には、GitHub がジョブを消失したと判定した後も 70 分間実行され続けた事例がありました）。unit が **停止中** の runner について、48 時間が経過した checkout を削除します。また、ディスク使用率が 85 % 以上、メモリ PSI の `full/avg60` が 10 % 以上、または listener 数が `MAX_ACTIVE_RUNNERS` を超えた場合に警告します（omniroute/その他の内訳も表示します）。exit 1 = 対応が必要です。ログを確認してください。

75 分ルールでは、GitHub がすでに見限ったジョブの build を検出できません。`Runner.Listener` がジョブを更新できない場合、`_diag/Runner_*.log` には `POST request to …/renewjob timed out after 100 seconds` と表示されます。API は最後に更新に成功してから約 10 分後にジョブを `completed`（failure）として報告しますが、`next-build` はジョブが紐付いていない状態で実行され続けます（2026-10-18：#17066 の Build は 19:43 に失敗と判定されましたが、その build は 5 分後も 40 GB を占有していました）。最新の `_diag/Worker_*.log` で ref を確認してから、PID を指定して build tree のみに SIGTERM を送信してください。対象は `next-build`、`npm run build`、`build-next-isolated.mjs`、および `_work` worker です。`Runner.Listener`、`RunnerService.js`、`Runner.Worker` には絶対に触れないでください。worker がジョブをキャンセル済みとして報告し、listener は自動的にオンラインへ復帰します。

## Runnerユニット: KillMode

runnerのデフォルトである`KillMode=process`では、ユニットを停止または再起動しても`Runner.Worker → npm → next-build`が生き残ります。孤児化したビルドは、紐づくジョブがないままRAMとCPUを消費し続けます。すべてのOmniRouteユニットには、`KillMode=mixed`を指定したdrop-in（`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`）があります。これは最初にlistenerへSIGTERMを送り、`TimeoutStop`到達時にcgroup全体へSIGKILLを送ります。この設定はユニットの次回再起動時に有効になります。**一度に1つのrunnerだけを、アイドル時に限って**再起動し、アイドル確認と再起動を同じコマンド内で実行してください。

## 運用ルール

- **一度に実行する Turbopack ビルドは 1 つのみ — ラベルで強制。** 完全な Turbopack
  `next build` を実行するすべてのジョブは `[self-hosted, omni-build]` を対象とし、その
  ラベルが付いているのは **`omniroute-113-5`** だけである: `ci.yml` の `Build`、`npm-publish.yml` の `publish`、`nightly-v4-build`、`preview-artifact`、
  nightly a11y ビルド（#16853）、および `docker-publish.yml` の **amd64**（BuildKit 内では webpack —
  Turbopack はそこでパニックした、run 33253576569）。arm64 Docker レッグは引き続き `ubuntu-24.04-arm` を使用する。
  `docker-publish` の amd64 は、`ci.yml` の `Build` と `heavy-build-main` concurrency group を共有する
  （`cancel-in-progress: false`）。Docker Engine は `omniroute-113-5` 上になければならない。2 つ目の Turbopack
  スロットは 78 GB には収まらない（2 × 33–37 GB に加えて、マシン上の残りの処理があるため）。2 つ目のスロットが安全なのは
  webpack ビルドの場合だけである。
- **Pull Request の Build はホステッドランナーで実行する（2026-10-18）。** `ci.yml` の `Build` が `omni-build` に到達するのは
  `push` と `workflow_dispatch` の場合だけである。すべての `pull_request`（同一オリジンまたは fork）および `merge_group` の Build は
  webpack を使用して `ubuntu-latest` 上で実行する。同一オリジンのすべての PR をこのスロットにルーティングしていたときは、Turbopack
  Build がスロットを 29～58 分間占有し、18 件の Build が最長 18 時間キューに滞留し、リリースライン自身の push Build が
  スロットを獲得できたのは 40 ジョブ中 1 回だった。ホステッドランナーでは、同じ PR Build がその PR のほかの
  ジョブと並行して 8～12 分で完了する。`npm-publish` が配布するバンドラーである Turbopack は、デフォルトブランチの
  nightly a11y ビルド（04:41 UTC）、スロットに到達するすべての push または dispatch Build、および
  `npm-publish` 自体によって、リリースライン上で引き続き検証される。`tests/unit/build/heavy-build-queue.test.ts`
  がこの 4 条件のゲートを固定している。
- **Turbopack スロットのサイズを、測定済みの必要量より小さくしてはならない。** 2026-10-18 の 18:06 に、
  `omni-release` 用の空きを確保するため、スロットが 56G/60G から 40G/44G に引き下げられた。コンパイルフェーズは実行中ずっと
  `MemoryHigh` に張り付き（memory PSI `full` は 30～43 %）、同じ cgroup を共有する
  `Runner.Listener` はジョブを更新できなかった。2026-10-17 に所有者が設定した 56G/60G は
  同日中に復元された。この値を下回ってもビルドは失敗しない。スラッシングが発生し、ジョブが失われる。
- **Release-Green には専用スロットがある（2026-10-18）。** それまでは、2 種類の Release-Green 検証がどちらも
  `omni-build` 上で実行されていた。すべての push（約 10 回/時、ある 1 日には 100 件の push 実行のうち 97 件が処理途中でキャンセル）
  と、1 日 3 回の約 2 時間にわたるフルスイープ（05:29 のスイープはスロットを 6 時間待機）である。この単一のビルド
  スロットには容量の数倍の負荷がかかり、同一オリジンの PR Build は何時間も待機していた。
  `release-green` と `main-green` は現在、`OMNIROUTE_USE_TURBOPACK=0` を設定して
  `omni-release`（`omniroute-113-6` のみ）を対象としており、開始済みの実行がより新しい push によってキャンセルされることもなくなった
  （保留中のスロットでは、引き続き大量の実行要求が集約される）。`tests/unit/build/runner-capacity-routing.test.ts`
  がルーティング、webpack への切り替え、および `omni-release` 上では Turbopack を使って何もビルドしないことを固定している。
- **軽量プール: `omni-light`。** `omniroute-113` と `omniroute-113-2` は、
  バックエンドのみの `next build`（約 5～6 GB、webpack）が必要な nightly と、`quality.yml` の `lint-guard` を実行する。`omniroute-113`
  には 2026-10-18 まで `MemoryHigh=4G` が設定されていたため、promptfoo ビルドはそこで 54 分間、
  メモリを再利用しながら辛うじて進行していた。8 GB にすればスロットリングは解消される。
- **リスナー数は意図的に少なくしている。** 2026-08-29 に 4 つの OmniRoute unit を無効化した。追加の
  リスナーはそれぞれ、上記のメモリ予算を消費するテナントになる。janitor の上限は 6（cron の `MAX_ACTIVE_RUNNERS=6`）であり、マシン上の
  すべての `Runner.Listener` をカウントする。OmniHeuris と OmniMind が、こちらの 4 つに加えて 2 つを占有する。
- **いずれかの runner がビジーな間は、`/tmp` や `_work` を手動でクリーンアップしてはならない。** 確認してから
  削除するまでに間隔が空いたことにより、2026-08-27 に実行中の Build ジョブの
  `_work` が失われた。janitor は確認と削除を 1 ステップで行うため、
  それに任せること。
- ジョブの途中で runner を停止すると、そのジョブはキャンセルされる（実環境で確認済み）。`systemctl stop` は、
  listener に `Runner.Worker` 子プロセスがない場合にのみ実行し、1 つのコマンドで行うこと。
- workflow は artefact を `/tmp`（RAM 上にある）へ置いてはならない。
  `$RUNNER_TEMP`（runner ごとに用意されたディスク上の領域）へダウンロードすること。1.3 GB の `next-build` artefact は、
  tmpfs に配置するのに 27～32 分かかった一方、ディスクからのアップロードは 2 分で済んだ。
- `.15` VPS は homologation 専用であり、CI runner を実行してはならない。
