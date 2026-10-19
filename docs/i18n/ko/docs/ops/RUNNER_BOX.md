# Self-Hosted Runner Box Operations (.113 pool) (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

셀프 호스팅 풀은 **.113** 박스(`tomni-proxmox-113`)에서 실행됩니다. 2026-10-18부터 각
OmniRoute 러너는 **하나의 역할**, 하나의 레이블, 그리고 해당 워크로드의 측정치에 맞춘 메모리/CPU 예산을
갖습니다. Turbopack 슬롯에는 빌드에 필요한 만큼이 할당되며, 다른 슬롯은 측정된
최대 사용량에 맞춰져 있습니다. 박스는 Turbopack 빌드가 Release-Green
webpack 빌드 및 lint 작업과 동시에 실행될 때만 오버커밋됩니다. 호스트 스왑(16 GB)이 이를 흡수하며, 풀 리퀘스트 Build는
호스팅 러너에서 실행되므로 Turbopack 슬롯은 대부분의 시간 동안 유휴 상태입니다.

| 러너                 | 레이블          | 역할                                                                                                                                      | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`    | Turbopack 빌드: `ci.yml` `Build`(push/dispatch 전용), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, 야간 a11y 빌드 | 56 GB / 60 GB (스왑 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release`  | Release-Green(`release-green` + `main-green`), webpack 빌드                                                                               | 20 GB / 24 GB (스왑 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`    | 야간 작업(Schemathesis, promptfoo, garak, k6, a11y 부팅) 및 `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB (스왑 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`    | 위와 동일한 풀                                                                                                                            | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (각 리포지토리) | Dependabot 전용(각각 최대 155 MB, 2026-10-18)                                                                                             | 4 GB / 6 GB                | 각각 200 % |

2026-10-18 측정 결과:

| 리소스    | 값                      | 스케줄링 관점에서의 의미                                                                                                                                                                                                                                                                                                                                                                                          |
| --------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32코어**      | 제한을 두지 않은 Turbopack 프로덕션 빌드는 최대 49 GB를 사용했습니다(`tests/unit/ci-build-bundler-webpack.test.ts`). Next 16.3.8에서는 컴파일 단계만으로도 약 40 GB를 점유합니다(`next-build`의 RSS 36 GB와 3 GB를 사용하는 로더 워커 17개, 2026-10-18 측정). webpack 빌드는 약 14–16 GB를 사용합니다. Turbopack 빌드 하나와 webpack 빌드 하나는 함께 실행할 수 있지만, Turbopack 빌드 두 개는 실행할 수 없습니다 |
| 스왑      | 16 GB                   | `omniroute-113-5`는 스왑을 비활성화한 상태(`MemorySwapMax=0`)로 실행되므로, 폭주하는 빌드는 박스가 스왑을 사용하도록 만드는 대신 해당 상한에서 종료됩니다                                                                                                                                                                                                                                                         |
| `/tmp`    | **12 GB tmpfs = RAM**   | 여기에 저장되는 모든 것은 메모리를 사용하며, 남은 파일은 3시간 후 정리됩니다                                                                                                                                                                                                                                                                                                                                      |
| CPU       | 32코어에서 부하 60 관측 | 할당량을 적용하기 전에는 Turbopack 빌드 하나(약 1166 % CPU)와 커버리지 스위트가 같은 박스에서 실행될 경우 다른 리스너의 하트비트가 리소스를 받지 못했습니다(`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                  |
| 러너      | **리스너 6개**          | OmniRoute 4개 + OmniHeuris + OmniMind이며, `omniroute-113-3/-4/-7/-8`은 비활성화되어 있습니다(`systemctl enable --now`로 하나를 다시 활성화할 수 있음)                                                                                                                                                                                                                                                            |

제한은 각 유닛의 `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`에
설정되어 있으며(이전 값은 `override.conf.bak-20261018`로 보관), 실행 중인 상태에서
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…`로 적용되었습니다. 재시작하지 않았으므로
실행 중인 작업에는 영향을 주지 않았습니다. 레이블 역시 러너 API를 통해
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) 실행 중인 상태에서 변경됩니다.

## janitor 설치(서버에서 1회)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron(root): 30분마다 실행하고 /var/log/runner-janitor.log에 기록
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof`가 필요합니다. janitor는 경로를 제거하기 전에 열린 파일의 단일 스냅샷을 통해 해당 경로가 유휴 상태임을 확인하며, 이 도구가 없으면 아무것도 제거하지 않고 그 사실을 알린 뒤 종료합니다(exit 1). 변경 사항은 먼저 `--dry-run`으로 시험해 보세요. 실제로 수행할 작업을 정확히 출력하며 아무것도 변경하지 않습니다.

매번 실행할 때 수행하는 작업은 다음과 같습니다. **tmpfs에서는 3시간**, 디스크의 `_work/_temp`에서는 24시간이 지난 자체 잔여물(`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`)을 정리합니다. 75분보다 오래된 `next-build`를 종료합니다(어떤 작업도 그렇게 오래 실행되지 않습니다. 2026-08-27에는 GitHub가 작업을 유실된 것으로 선언한 뒤에도 한 작업이 70분 동안 실행되었습니다). unit이 **중지된** runner의 48시간 된 checkout을 정리합니다. 디스크 사용량이 85% 이상이거나, 메모리 PSI `full/avg60`이 10% 이상이거나, listener 수가 `MAX_ACTIVE_RUNNERS`보다 많으면 알립니다(omniroute/기타 구분 포함). Exit 1은 주의가 필요하다는 의미이므로 로그를 확인하세요.

75분 규칙으로는 GitHub가 이미 포기한 작업의 build를 감지할 수 없습니다. `Runner.Listener`가 작업을 갱신할 수 없으면 `_diag/Runner_*.log`에 `POST request to …/renewjob timed out after 100 seconds`가 표시되고, API는 마지막으로 성공한 갱신으로부터 약 10분 후 작업을 `completed`(실패)로 보고하지만, `next-build`는 연결된 작업 없이 계속 실행됩니다(2026-10-18: #17066의 Build는 19:43에 실패 처리되었지만, 해당 build는 5분 후에도 여전히 40 GB를 점유하고 있었습니다). 최신 `_diag/Worker_*.log`에서 ref를 확인한 다음, PID를 기준으로 build tree에만 SIGTERM을 보내세요. 대상은 `next-build`, `npm run build`, `build-next-isolated.mjs`, `_work` worker입니다. `Runner.Listener`, `RunnerService.js`, `Runner.Worker`는 절대 건드리지 마세요. worker가 작업을 취소된 것으로 보고하고 listener는 자동으로 다시 온라인 상태가 됩니다.

## 러너 유닛: KillMode

러너의 기본값인 `KillMode=process`는 유닛이 중지되거나 재시작될 때 `Runner.Worker → npm → next-build`를
살아 있는 상태로 남겨 둡니다. 즉, 고아 빌드가 연결된 작업 없이 계속 RAM과
CPU를 소모합니다. 모든 OmniRoute 유닛에는
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
드롭인이 있으며, `KillMode=mixed`를 사용합니다. 먼저 리스너에 SIGTERM을 보내고,
`TimeoutStop` 시점에 전체 cgroup에 SIGKILL을 보냅니다. 이 설정은 유닛이 다음에 재시작될 때
적용됩니다. **한 번에 러너 하나만, 유휴 상태일 때만** 재시작하고, 유휴 상태 확인과 재시작을 동일한 명령에서 수행하십시오.

## 운영 규칙

- **동시에 하나의 Turbopack 빌드만 실행 — 레이블로 강제 적용.** 전체 Turbopack
  `next build`를 실행하는 모든 작업은 `[self-hosted, omni-build]`를 대상으로 하며,
  해당 레이블은 **`omniroute-113-5`**에만 있습니다: `ci.yml`의 `Build`,
  `npm-publish.yml`의 `publish`, `nightly-v4-build`, `preview-artifact`, 야간 a11y 빌드
  (#16853), 그리고 `docker-publish.yml`의 **amd64**(BuildKit 내부의 webpack —
  해당 환경에서 Turbopack이 패닉을 일으킴, 실행 33253576569). arm64 Docker 작업은
  계속 `ubuntu-24.04-arm`에서 실행합니다. `docker-publish` amd64는 `ci.yml`의
  `Build`와 `heavy-build-main` 동시성 그룹을 공유합니다(`cancel-in-progress: false`).
  Docker Engine은 `omniroute-113-5`에 있어야 합니다. 두 번째 Turbopack 슬롯은
  78 GB에 들어가지 않습니다(2 × 33–37 GB에 시스템의 나머지 사용량까지 필요).
  두 번째 슬롯은 webpack 빌드에만 안전합니다.
- **풀 리퀘스트 빌드는 호스팅 러너에서 실행(2026-10-18).** `ci.yml`의 `Build`는
  `push`와 `workflow_dispatch`에서만 `omni-build`에 도달합니다. 모든
  `pull_request`(동일 저장소 또는 포크) 및 `merge_group` Build는 webpack을 사용해
  `ubuntu-latest`에서 실행됩니다. 동일 저장소의 모든 PR을 슬롯으로 라우팅했을 때,
  Turbopack Build가 슬롯을 29–58분 동안 점유했고, 18개의 Build가 최대 18시간 동안
  대기했으며, 릴리스 라인의 자체 push Build는 40개 작업 중 한 번만 슬롯을
  확보했습니다. 호스팅 러너에서는 동일한 PR Build가 해당 PR의 다른 작업과 나란히
  8–12분 만에 완료됩니다. `npm-publish`가 배포하는 번들러인 Turbopack은 기본
  브랜치의 야간 a11y 빌드(04:41 UTC), 슬롯에 도달하는 모든 push 또는 dispatch
  Build, 그리고 `npm-publish` 자체를 통해 릴리스 라인에서 계속 검증됩니다.
  `tests/unit/build/heavy-build-queue.test.ts`가 이 네 가지 조건의 게이트를
  고정합니다.
- **Turbopack 슬롯의 크기를 측정된 필요량보다 작게 설정하지 마십시오.**
  2026-10-18 18:06에 `omni-release`를 위한 공간을 마련하려고 슬롯을 56G/60G에서
  40G/44G로 낮췄습니다. 컴파일 단계는 실행 내내 `MemoryHigh`에 머물렀고(메모리
  PSI `full` 30–43%), 같은 cgroup을 공유하는 `Runner.Listener`는 작업을 갱신할 수
  없었습니다. 2026-10-17에 소유자가 설정한 56G/60G는 같은 날 복원되었습니다.
  이 값보다 낮으면 빌드가 실패하는 것이 아니라 스래싱이 발생하며 작업이
  유실됩니다.
- **Release-Green에는 전용 슬롯이 있음(2026-10-18).** 그전까지 두 Release-Green
  검증 모두 `omni-build`에서 실행되었습니다. 매 push(시간당 약 10회, 하루 동안
  100회의 push 실행 중 97회가 작업 도중 취소됨)와 하루 세 번의 약 2시간짜리 전체
  스윕(05:29 스윕은 슬롯을 얻기 위해 6시간 대기)으로 인해 단일 빌드 슬롯의 수요가
  용량을 몇 배나 초과했고, 동일 저장소의 PR Build는 몇 시간씩 기다렸습니다.
  이제 `release-green`과 `main-green`은 `OMNIROUTE_USE_TURBOPACK=0`을 사용해
  `omni-release`(`omniroute-113-6` 전용)를 대상으로 하며, 시작된 실행은 더 이상
  새로운 push로 취소되지 않습니다(대기 중인 슬롯에서는 여전히 연속 요청을
  하나로 축약함). `tests/unit/build/runner-capacity-routing.test.ts`가 라우팅,
  webpack 전환, 그리고 `omni-release`에서 Turbopack으로 빌드되는 항목이 없다는
  사실을 고정합니다.
- **경량 풀: `omni-light`.** `omniroute-113`과 `omniroute-113-2`는 백엔드 전용
  `next build`가 필요한 야간 작업(약 5–6 GB, webpack)과 `quality.yml`의
  `lint-guard`를 실행합니다. `omniroute-113`은 2026-10-18까지 `MemoryHigh=4G`로
  설정되어 있었습니다. promptfoo 빌드는 그곳에서 54분 동안 메모리를 회수하며
  간신히 진행됐고, 8 GB로 설정하면 스로틀링이 없어집니다.
- **의도적으로 리스너 수를 줄임.** 2026-08-29에 OmniRoute 유닛 네 개를
  비활성화했습니다. 리스너가 추가될 때마다 위 메모리 예산을 공유하는 테넌트가
  하나씩 늘어나기 때문입니다. 정리 작업의 상한은 6입니다(cron의
  `MAX_ACTIVE_RUNNERS=6`). 이 값은 머신의 모든 `Runner.Listener`를 계산하며,
  OmniHeuris와 OmniMind가 자체 리스너 두 개를 우리 리스너 네 개에 추가합니다.
- **러너가 하나라도 작업 중일 때는 `/tmp`나 `_work`를 수동으로 정리하지
  마십시오.** 확인과 삭제 사이에 간격이 있는 방식 때문에 2026-08-27에 실행 중인
  Build 작업의 `_work`가 삭제되었습니다. 정리 작업은 확인과 삭제를 한 단계에서
  수행하므로 그대로 맡기십시오.
- 작업 중간에 러너를 중지하면 작업이 취소됩니다(실제 환경에서 확인됨).
  `systemctl stop`은 해당 리스너에 `Runner.Worker` 자식 프로세스가 없을 때만
  실행해야 하며, 하나의 명령으로 수행하십시오.
- 워크플로는 아티팩트를 `/tmp`에 두어서는 안 됩니다(`/tmp`는 RAM에 있음).
  `$RUNNER_TEMP`(디스크에 있으며 러너별로 분리됨)로 다운로드하십시오. 1.3 GB
  `next-build` 아티팩트를 tmpfs에 저장하는 데는 27–32분이 걸렸지만, 디스크에서
  업로드하는 데는 2분이 걸렸습니다.
- `.15` VPS는 검증 환경 전용이며 CI 러너를 절대 실행하지 않습니다.
