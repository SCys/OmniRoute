# Self-Hosted Runner Box Operations (.113 pool) (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Öz hostinqli hovuz **.113** maşınında (`tomni-proxmox-113`) işləyir. 2026-10-18 tarixindən etibarən hər
OmniRoute runner-i **bir rola**, bir etiketə və iş yükünün ölçülmüş göstəricilərinə uyğun yaddaş/CPU
büdcəsinə malikdir. Turbopack slotuna build üçün lazım olan resurslar ayrılır; digər slotların ölçüləri
isə onların ölçülmüş pik göstəricilərinə əsaslanır. Maşında resursların normadan artıq ayrılması yalnız
Turbopack build-i Release-Green webpack build-i və lint tapşırığı ilə üst-üstə düşdükdə baş verir;
host swap-ı (16 GB) bunu kompensasiya edir və pull request Build-ləri hostinqli runner-lərdə işlədiyi
üçün Turbopack slotu çox vaxt boş qalır:

| runner               | etiket         | rol                                                                                                                                                      | `MemoryHigh` / `MemoryMax` | `CPUQuota`          |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack build-ləri: `ci.yml` `Build` (yalnız push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, gecəlik a11y build-i | 56 GB / 60 GB (swap 0)     | 1600 %              |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack build-i                                                                                          | 20 GB / 24 GB (swap 4 GB)  | 800 %               |
| `omniroute-113-2`    | `omni-light`   | gecəlik tapşırıqlar (Schemathesis, promptfoo, garak, k6, a11y işə salınması) və `quality.yml` `lint-guard`                                               | 12 GB / 16 GB (swap 4 GB)  | 600 %               |
| `omniroute-113`      | `omni-light`   | yuxarıdakı ilə eyni hovuz                                                                                                                                | 8 GB / 12 GB               | 400 %               |
| OmniHeuris, OmniMind | (öz repoları)  | yalnız Dependabot (hər biri üçün pik 155 MB, 2026-10-18)                                                                                                 | 4 GB / 6 GB                | hər biri üçün 200 % |

2026-10-18 tarixində ölçülüb:

| resurs     | dəyər                             | planlaşdırma üçün mənası                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 nüvə**               | Turbopack production build-i məhdudiyyətsiz halda 49 GB pik həddinə çatıb (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8-də təkcə compile mərhələsi təxminən 40 GB tutur (`next-build` prosesində 36 GB RSS, üstəgəl hər biri 3 GB olan 17 loader worker-i, 2026-10-18 tarixində ölçülüb); webpack build-i təxminən 14–16 GB istifadə edir. Bir Turbopack və bir webpack build-i birlikdə yerləşir; iki Turbopack build-i isə yerləşmir |
| swap       | 16 GB                             | `omniroute-113-5` swap söndürülmüş halda (`MemorySwapMax=0`) işləyir; beləliklə, nəzarətdən çıxmış build bütün maşını swap-a salmaq əvəzinə öz limitində dayandırılır                                                                                                                                                                                                                                                                                 |
| `/tmp`     | **12 GB tmpfs = RAM**             | burada saxlanılan hər şey yaddaş tutur; qalıqlar 3 saatdan sonra təmizlənir                                                                                                                                                                                                                                                                                                                                                                           |
| CPU        | 32 nüvədə load 60 müşahidə edilib | kvotalardan əvvəl bir Turbopack build-i (təxminən 1166 % CPU) və eyni maşında işləyən coverage test dəsti digər listener-lərin heartbeat-lərini resursdan məhrum edirdi (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                                         |
| runner-lər | **6 listener**                    | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` deaktiv edilib (`systemctl enable --now` onlardan birini yenidən aktivləşdirir)                                                                                                                                                                                                                                                                                                       |

Limitlər hər unit-in `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` faylında
yerləşir (əvvəlki dəyərlər `override.conf.bak-20261018` kimi saxlanılıb) və
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` ilə canlı şəkildə tətbiq
edilib — restart edilmədiyinə görə işləyən heç bir tapşırığa toxunulmayıb. Etiketlər də runner API-si
vasitəsilə (`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) canlı şəkildə dəyişdirilir.

## Təmizləyicini quraşdırın (bir dəfə, serverdə)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): hər 30 dəqiqədən bir, jurnalı /var/log/runner-janitor.log faylına yaz
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` tələb olunur: təmizləyici yolu silməzdən əvvəl açıq faylların bir anlıq görüntüsü ilə onun boş olduğunu təsdiqləyir; bu alət olmadıqda isə heç nə silmir və bunu bildirir
(çıxış kodu 1). İstənilən dəyişikliyi əvvəlcə `--dry-run` ilə sınayın — o, nə edəcəyini dəqiq göstərir
və heç nəyə toxunmur.

Hər işə salındıqda bunları edir: öz qalıqlarımızı (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) **tmpfs-də 3 saatdan**, diskdəki
`_work/_temp` daxilində isə 24 saatdan sonra təmizləyir; 75 dəqiqədən köhnə `next-build` prosesini dayandırır (heç bir tapşırıq bu qədər uzun çəkmir — 2026-08-27 tarixində GitHub tapşırığın itdiyini elan etdikdən sonra bir proses 70 dəqiqə işləmişdi); unit-i **dayandırılmış** runner-ların 48 saatlıq checkout-larını təmizləyir; disk istifadəsi ≥ 85 %, yaddaş PSI göstəricisi
`full/avg60` ≥ 10 % olduqda və dinləyicilərin sayı `MAX_ACTIVE_RUNNERS` dəyərindən çox olduqda xəbərdarlıq edir (omniroute/digər bölgüsü ilə). Çıxış kodu 1 = müdaxilə tələb olunur; jurnalı oxuyun.

75 dəqiqə qaydası GitHub-ın artıq imtina etdiyi tapşırığın build prosesini aşkar etmir.
`Runner.Listener` öz tapşırığını yeniləyə bilmədikdə, `_diag/Runner_*.log` faylında
`POST request to …/renewjob timed out after 100 seconds` görünür, API son uğurlu yeniləmədən təxminən on dəqiqə sonra tapşırığı `completed`
(uğursuz) kimi göstərir və `next-build` heç bir tapşırığa bağlı olmadan işləməyə davam edir
(2026-10-18: #17066 üçün Build saat 19:43-də uğursuz olmuşdu, lakin onun build prosesi beş dəqiqə sonra hələ də
40 GB tuturdu). Ən yeni `_diag/Worker_*.log` faylında ref-i təsdiqləyin, sonra
PID əsasında yalnız build ağacına — `next-build`, `npm run build`, `build-next-isolated.mjs` və
`_work` worker-larına — SIGTERM göndərin. Heç vaxt `Runner.Listener`, `RunnerService.js` və ya `Runner.Worker` proseslərinə toxunmayın:
worker tapşırığın ləğv edildiyini bildirir, listener isə özü yenidən onlayn olur.

## Runner vahidləri: KillMode

Runner-in standart `KillMode=process` parametri vahid dayandırıldıqda və ya yenidən başladıldıqda `Runner.Worker → npm → next-build`
proseslərini işlək saxlayır — yetim qalmış build heç bir job-a bağlı olmadan RAM və
CPU istifadə etməyə davam edir. Hər OmniRoute vahidində
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
ünvanında `KillMode=mixed` parametrli əlavə konfiqurasiya var: əvvəlcə listener-ə SIGTERM, `TimeoutStop`
zamanında isə bütün cgroup-a SIGKILL göndərilir. Bu, vahid növbəti dəfə yenidən başladıldıqda qüvvəyə minir — **eyni anda yalnız bir runner-i və
yalnız boş olduqda**, boşluq yoxlaması ilə yenidən başlatmanı eyni komandada icra edərək yenidən başladın.

## İş qaydaları

- **Eyni anda yalnız bir Turbopack yığımı — etiketlə məcburi şəkildə təmin edilir.** Tam Turbopack
  `next build` icra edən hər bir job `[self-hosted, omni-build]` hədəfləyir və bu etiketi yalnız
  **`omniroute-113-5`** daşıyır: `ci.yml` faylındakı `Build`, `npm-publish.yml` faylındakı `publish`,
  `nightly-v4-build`, `preview-artifact`, gecəlik a11y yığımı (#16853) və `docker-publish.yml`
  faylındakı **amd64** (BuildKit daxilində webpack — Turbopack orada panikaya düşüb, icra
  33253576569). arm64 Docker qolu `ubuntu-24.04-arm` üzərində qalır. `docker-publish` amd64,
  `ci.yml` faylındakı `Build` ilə `heavy-build-main` paralellik qrupunu paylaşır
  (`cancel-in-progress: false`). Docker Engine `omniroute-113-5` üzərində olmalıdır. İkinci
  Turbopack yuvası 78 GB-a sığmır (2 × 33–37 GB və serverdə qalan proseslər); ikinci yuva yalnız
  webpack yığımları üçün təhlükəsizdir.
- **Pull request yığımları host edilən runner-lərdə işləyir (2026-10-18).** `ci.yml` faylındakı
  `Build` yalnız `push` və `workflow_dispatch` üçün `omni-build`-ə çatır; hər `pull_request`
  (öz repozitoriyasından və ya fork-dan) və `merge_group` yığımı webpack ilə `ubuntu-latest`
  üzərində işləyir. Öz repozitoriyasından gələn hər PR yuvaya yönləndirilərkən Turbopack yığımı
  yuvanı 29–58 dəqiqə məşğul saxlayırdı, 18 yığım 18 saata qədər növbədə gözlədi və buraxılış
  xəttinin öz push yığımı 40 job ərzində yuvanı yalnız bir dəfə əldə etdi. Host edilən runner-də
  eyni PR yığımı həmin PR-ın digər job-ları ilə yanaşı 8–12 dəqiqə çəkir. `npm-publish` tərəfindən
  yayımlanan bundler olan Turbopack buraxılış xəttində default branch-in gecəlik a11y yığımı
  (04:41 UTC), yuvaya çatan hər push və ya dispatch yığımı və `npm-publish` özü vasitəsilə
  sınaqdan keçirilməyə davam edir. `tests/unit/build/heavy-build-queue.test.ts` dörd şərtdən
  ibarət keçidi təsbit edir.
- **Turbopack yuvasına heç vaxt ölçülmüş tələbatından az resurs ayırmayın.** 2026-10-18 tarixində,
  saat 18:06-da `omni-release` üçün yer açmaq məqsədilə yuvanın limitləri 56G/60G-dən 40G/44G-yə
  endirildi. Kompilyasiya mərhələsi bütün icra müddəti ərzində `MemoryHigh` həddində qaldı
  (yaddaş PSI `full` 30–43 %) və eyni cgroup-u paylaşan `Runner.Listener` öz job-unu yeniləyə
  bilmədi. 2026-10-17 tarixində sahib tərəfindən təyin edilmiş 56G/60G həmin gün bərpa edildi.
  Bu dəyərdən aşağı olduqda yığım xəta ilə dayanmır; resursları fasiləsiz dəyişdirərək ləngiyir
  və job itirilir.
- **Release-Green-in öz yuvası var (2026-10-18).** O vaxta qədər hər iki Release-Green yoxlaması
  `omni-build` üzərində işləyirdi: hər push zamanı (~10/saat, bir gündə 100 push icrasından 97-si
  işin ortasında ləğv edildi) və gündə üç dəfə keçirilən ~2 saatlıq tam yoxlama zamanı (05:29
  yoxlaması yuva üçün 6 saat gözlədi) — yeganə yığım yuvasına tutumundan bir neçə dəfə çox yük
  düşürdü və öz repozitoriyasından gələn PR yığımları saatlarla gözləyirdi. `release-green` və
  `main-green` indi `OMNIROUTE_USE_TURBOPACK=0` ilə `omni-release`-i hədəfləyir (yalnız
  `omniroute-113-6`) və başlamış icra artıq daha yeni push tərəfindən ləğv edilmir (gözləyən yuva
  yenə də axını bir icrada birləşdirir). `tests/unit/build/runner-capacity-routing.test.ts`
  yönləndirməni, webpack keçidini və `omni-release` üzərində heç nəyin Turbopack ilə
  yığılmamasını təsbit edir.
- **Yüngül hovuz: `omni-light`.** `omniroute-113` və `omniroute-113-2` yalnız backend üçün
  `next build` tələb edən gecəlik job-ları (~5–6 GB; webpack) və `quality.yml` faylındakı
  `lint-guard` job-unu işlədir. `omniroute-113` üzərində 2026-10-18 tarixinədək `MemoryHigh=4G`
  idi — promptfoo yığımı orada 54 dəqiqə ərzində yaddaşı təkrar-təkrar geri alaraq irəlilədi;
  8 GB məhdudlaşdırmanı aradan qaldırır.
- **Dinləyicilərin sayı məqsədli şəkildə azaldılıb.** Dörd OmniRoute unit-i 2026-08-29 tarixində
  deaktiv edildi — hər əlavə dinləyici yuxarıdakı yaddaş büdcəsinin daha bir istifadəçisidir.
  Təmizləyicinin yuxarı həddi 6-dır (cron daxilində `MAX_ACTIVE_RUNNERS=6`): o, serverdəki hər
  `Runner.Listener` prosesini sayır və OmniHeuris + OmniMind bizim dörd prosesimizə daha ikisini
  əlavə edir.
- **Hər hansı runner məşğul olarkən `/tmp` və ya `_work` qovluğunu heç vaxt əl ilə
  təmizləməyin.** Yoxlama ilə silmə arasında fasilə olan yoxla-sonra-sil əməliyyatı
  2026-08-27 tarixində aktiv `Build` job-unun `_work` qovluğunu itirməsinə səbəb oldu.
  Təmizləyici yoxlamanı və silməni bir addımda həyata keçirir; bunu ona həvalə edin.
- Runner-i job-un ortasında dayandırmaq job-u ləğv edir (canlı müşahidə edilib): `systemctl stop`
  yalnız onun dinləyicisində `Runner.Worker` alt prosesi olmadıqda istifadə edilməlidir — və bunu
  bir komandada edin.
- Workflow-lar artefaktları `/tmp` daxilində saxlamamalıdır (bu, RAM-dır). Onları
  `$RUNNER_TEMP` qovluğuna endirin (diskdədir, hər runner üçün ayrıdır) — 1.3 GB ölçülü
  `next-build` artefaktının tmpfs-ə yerləşdirilməsi 27–32 dəqiqə, diskdən yüklənməsi isə 2 dəqiqə
  çəkdi.
- `.15` VPS yalnız homoloqasiya üçündür — orada heç vaxt CI runner-ləri işləmir.
