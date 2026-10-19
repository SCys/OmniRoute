# Self-Hosted Runner Box Operations (.113 pool) (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Şirket içinde barındırılan havuz **.113** makinesinde (`tomni-proxmox-113`) çalışır. 2026-10-18 tarihinden bu yana her
OmniRoute runner'ının **tek bir rolü**, tek bir etiketi ve iş yükü için ölçülen değerlere göre boyutlandırılmış
bir bellek/CPU bütçesi vardır. Turbopack slotuna derlemenin ihtiyaç duyduğu kaynaklar verilir; diğer slotlar ise
ölçülen tepe değerlerine göre boyutlandırılmıştır. Makinede yalnızca bir Turbopack derlemesi, bir Release-Green
webpack derlemesi ve bir lint işiyle aynı zamana denk geldiğinde aşırı tahsis oluşur; ana makine takası (16 GB)
bunu karşılar ve pull request Build'leri barındırılan runner'larda çalıştığından Turbopack slotu çoğu zaman boştadır:

| runner               | etiket           | rol                                                                                                                                                           | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack derlemeleri: `ci.yml` `Build` (yalnızca push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, gecelik a11y derlemesi | 56 GB / 60 GB (takas 0)    | 1600 %         |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), webpack derlemesi                                                                                             | 20 GB / 24 GB (takas 4 GB) | 800 %          |
| `omniroute-113-2`    | `omni-light`     | gecelik işler (Schemathesis, promptfoo, garak, k6, a11y başlatma) ve `quality.yml` `lint-guard`                                                               | 12 GB / 16 GB (takas 4 GB) | 600 %          |
| `omniroute-113`      | `omni-light`     | yukarıdakiyle aynı havuz                                                                                                                                      | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (kendi repoları) | yalnızca Dependabot (her biri için tepe değer 155 MB, 2026-10-18)                                                                                             | 4 GB / 6 GB                | her biri 200 % |

2026-10-18 tarihinde ölçüldü:

| kaynak     | değer                         | zamanlama açısından anlamı                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 çekirdek**       | bir Turbopack production derlemesi sınırsızken 49 GB tepe değerine ulaştı (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8'de yalnızca compile aşaması ~40 GB tutuyor (`next-build` içinde 36 GB RSS ve 3 GB kullanan 17 loader worker'ı, 2026-10-18 tarihinde ölçüldü); bir webpack derlemesi ~14–16 GB kullanıyor. Bir Turbopack + bir webpack derlemesi birlikte sığar; iki Turbopack derlemesi sığmaz |
| takas      | 16 GB                         | `omniroute-113-5`, takas kapalıyken (`MemorySwapMax=0`) çalışır; böylece kontrolden çıkan bir derleme makineyi takasa sokmak yerine üst sınırında sonlandırılır                                                                                                                                                                                                                                                       |
| `/tmp`     | **12 GB tmpfs = RAM**         | burada tutulan her şey bellek kullanır; geride kalanlar 3 saat sonra temizlenir                                                                                                                                                                                                                                                                                                                                       |
| CPU        | 32 çekirdekte 60 yük gözlendi | kotalardan önce, aynı makinedeki bir Turbopack derlemesi (~1166 % CPU) ile bir coverage paketi diğer dinleyicilerin yaşam sinyallerini engelledi (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                                |
| runner'lar | **6 dinleyici**               | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` devre dışıdır (`systemctl enable --now` bunlardan birini yeniden devreye alır)                                                                                                                                                                                                                                                                        |

Sınırlar, her bir unit'in `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
dosyasında bulunur (önceki değerler `override.conf.bak-20261018` olarak tutulur) ve
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` ile canlı olarak uygulandı — yeniden başlatma yapılmadığından
çalışan hiçbir işe dokunulmadı. Etiketler de runners API aracılığıyla
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) canlı olarak değiştirilir.

## Temizleyiciyi kurun (tek seferlik, sunucuda)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): her 30 dakikada bir, /var/log/runner-janitor.log dosyasına kaydet
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` gereklidir: temizleyici, bir yolu kaldırmadan önce açık dosyaların tek bir anlık görüntüsünü alarak yolun kullanılmadığını doğrular; bu araç olmadan hiçbir şeyi kaldırmaz ve bunu bildirir (çıkış kodu 1). Her türlü değişikliği önce `--dry-run` ile deneyin — tam olarak ne yapacağını gösterir ve hiçbir şeye dokunmaz.

Her çalıştırmada yaptıkları: bize ait artıkları (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) **tmpfs üzerinde 3 saat**, disk üzerindeki `_work/_temp` konumunda ise 24 saat sonra temizler; 75 dakikadan eski bir `next-build` sürecini sonlandırır (hiçbir iş bu kadar uzun sürmez — 2026-08-27 tarihinde GitHub işi kayıp ilan ettikten sonra bir süreç 70 dakika daha çalıştı); birimi **durdurulmuş** çalıştırıcıların 48 saatlik çalışma kopyalarını temizler; disk kullanımı ≥ %85, bellek PSI değeri `full/avg60` ≥ %10 olduğunda ve dinleyici sayısı `MAX_ACTIVE_RUNNERS` değerini aştığında uyarı verir (omniroute/diğer dağılımıyla birlikte). Çıkış kodu 1 = müdahale gerekiyor; günlüğü okuyun.

75 dakika kuralı, GitHub'ın işinden zaten vazgeçtiği bir derlemeyi yakalamaz. `Runner.Listener` işini yenileyemediğinde `_diag/Runner_*.log`, `POST request to …/renewjob timed out after 100 seconds` mesajını gösterir; API, son başarılı yenilemeden yaklaşık on dakika sonra işi `completed` (başarısız) olarak bildirir ve `next-build`, bağlı bir iş olmadan çalışmaya devam eder (2026-10-18: #17066 derlemesi 19:43'te başarısız oldu ve derleme beş dakika sonra hâlâ 40 GB alan tutuyordu). En yeni `_diag/Worker_*.log` dosyasında ref'i doğrulayın, ardından yalnızca derleme ağacına PID üzerinden SIGTERM gönderin — `next-build`, `npm run build`, `build-next-isolated.mjs` ve `_work` işçileri. `Runner.Listener`, `RunnerService.js` veya `Runner.Worker` süreçlerine asla dokunmayın: işçi, işi iptal edilmiş olarak bildirir ve dinleyici kendiliğinden tekrar çevrimiçi olur.

## Runner birimleri: KillMode

Runner'ın varsayılan `KillMode=process` ayarı, bir birim durdurulduğunda veya yeniden
başlatıldığında `Runner.Worker → npm → next-build` sürecini çalışır durumda bırakır —
yetim kalan bir derleme, bağlı bir iş olmadan RAM ve CPU tüketmeye devam eder. Her
OmniRoute birimi, `KillMode=mixed` ayarına sahip bir drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
taşır: önce dinleyiciye SIGTERM, `TimeoutStop` anında ise tüm cgroup'a SIGKILL gönderilir.
Bu ayar, birimin bir sonraki yeniden başlatılmasında etkili olur — boşta olma kontrolü
ve yeniden başlatma aynı komutta olacak şekilde, **yalnızca boşta olduğunda ve her
seferinde bir runner'ı** yeniden başlatın.

## İşletim kuralları

- **Aynı anda yalnızca bir Turbopack derlemesi — etiketle zorunlu tutulur.** Tam bir Turbopack
  `next build` çalıştıran her iş `[self-hosted, omni-build]` hedefler ve bu etiketi yalnızca
  **`omniroute-113-5`** taşır: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, gecelik a11y derlemesi (#16853) ve `docker-publish.yml` **amd64** (BuildKit
  içinde webpack — Turbopack burada panikledi, çalıştırma 33253576569). arm64 Docker ayağı
  `ubuntu-24.04-arm` üzerinde kalır. `docker-publish` amd64, `ci.yml` `Build` ile
  `heavy-build-main` eşzamanlılık grubunu paylaşır (`cancel-in-progress: false`). Docker Engine,
  `omniroute-113-5` üzerinde olmalıdır. İkinci bir Turbopack yuvası 78 GB'a sığmaz (2 × 33–37 GB
  artı makinenin geri kalanı); ikinci yuva yalnızca webpack derlemeleri için güvenlidir.
- **Pull request derlemeleri barındırılan çalıştırıcılarda çalışır (2026-10-18).** `ci.yml` `Build`,
  yalnızca `push` ve `workflow_dispatch` için `omni-build` hedefine ulaşır; her `pull_request`
  (aynı depodan veya fork'tan) ve `merge_group` derlemesi webpack ile `ubuntu-latest` üzerinde
  çalışır. Aynı depodan gelen her PR yuvaya yönlendirildiğinde, bir Turbopack derlemesi yuvayı
  29–58 dk tuttu, 18 derleme 18 saate kadar kuyrukta bekledi ve sürüm hattının kendi push
  derlemesi 40 iş içinde yuvayı yalnızca bir kez alabildi. Barındırılan çalıştırıcıda aynı PR
  derlemesi, PR'ın diğer işlerinin yanında 8–12 dk sürer. `npm-publish` tarafından yayımlanan
  paketleyici Turbopack; varsayılan dalın gecelik a11y derlemesiyle (04:41 UTC), yuvaya ulaşan
  her push veya dispatch derlemesiyle ve `npm-publish` işleminin kendisiyle sürüm hattında
  sınanmaya devam eder. `tests/unit/build/heavy-build-queue.test.ts` dört koşullu geçidi sabitler.
- **Turbopack yuvasını asla ölçülen ihtiyacının altına boyutlandırmayın.** 2026-10-18 saat 18:06'da
  `omni-release` için yer açmak amacıyla yuva 56G/60G'den 40G/44G'ye düşürüldü. Derleme aşaması
  tüm çalışması boyunca `MemoryHigh` sınırında kaldı (bellek PSI `full` %30–43) ve aynı cgroup'u
  paylaşan `Runner.Listener` işini yenileyemedi. Sahibinin 2026-10-17 tarihli 56G/60G ayarı aynı
  gün geri yüklendi. Bu değerin altında derleme başarısız olmaz; sürekli bellek takasıyla
  boğuşur ve iş kaybolur.
- **Release-Green'in kendi yuvası vardır (2026-10-18).** O zamana kadar her iki Release-Green
  doğrulaması da `omni-build` üzerinde çalışıyordu: her push'ta (saatte ~10; bir günde 100 push
  çalıştırmasının 97'si çalışma ortasında iptal edildi) ve günde üç kez yapılan ~2 saatlik tam
  taramalarda (05:29 taraması yuva için 6 saat bekledi) — tek derleme yuvasına kapasitesinin
  birkaç katı yük bindiriliyor ve aynı depodan gelen PR derlemeleri saatlerce bekliyordu.
  `release-green` ve `main-green` artık `OMNIROUTE_USE_TURBOPACK=0` ile `omni-release` hedefini
  (yalnızca `omniroute-113-6`) kullanır ve başlatılmış bir çalıştırma artık daha yeni bir push
  nedeniyle iptal edilmez (bekleyen yuva, iş fırtınasını yine tek çalıştırmaya indirger).
  `tests/unit/build/runner-capacity-routing.test.ts` yönlendirmeyi, webpack geçişini ve
  `omni-release` üzerindeki hiçbir şeyin Turbopack ile derlenmediğini sabitler.
- **Hafif havuz: `omni-light`.** `omniroute-113` ve `omniroute-113-2`, yalnızca arka uç için
  `next build` (~5–6 GB; webpack) gerektiren gecelik işleri ve `quality.yml` `lint-guard` işini
  çalıştırır. `omniroute-113`, 2026-10-18'e kadar `MemoryHigh=4G` ayarına sahipti — promptfoo
  derlemesi orada 54 dakika boyunca bellek geri kazanımıyla ilerlemeye çalıştı; 8 GB,
  kısıtlamayı ortadan kaldırır.
- **Dinleyici sayısı kasıtlı olarak daha azdır.** Dört OmniRoute birimi 2026-08-29'da devre dışı
  bırakıldı — her ek dinleyici, yukarıdaki bellek bütçesi için başka bir kiracıdır. Temizleyicinin
  üst sınırı 6'dır (cron içindeki `MAX_ACTIVE_RUNNERS=6`): makinedeki her `Runner.Listener`
  sürecini sayar; OmniHeuris ve OmniMind, bizim dört sürecimize iki tane daha ekler.
- **Herhangi bir çalıştırıcı meşgulken `/tmp` veya `_work` dizinlerini asla elle temizlemeyin.**
  Kontrol ile silme arasında boşluk bırakan bir kontrol-et-sonra-sil işlemi, çalışan bir Build
  işinin 2026-08-27'de `_work` dizinini kaybetmesine neden oldu. Temizleyici, kontrolü ve
  kaldırmayı tek adımda gerçekleştirir; işi ona bırakın.
- Bir çalıştırıcıyı işin ortasında durdurmak işi iptal eder (canlı olarak gözlemlendi):
  `systemctl stop` komutunu yalnızca dinleyicinin bir `Runner.Worker` alt süreci olmadığında
  çalıştırın — ve bunu tek komutta yapın.
- İş akışları artefaktları `/tmp` içinde bekletmemelidir (burası RAM'dir). `$RUNNER_TEMP`
  konumuna indirin (disk üzerinde, çalıştırıcı başına ayrı) — 1,3 GB'lık `next-build`
  artefaktının tmpfs'e inmesi 27–32 dakika, diskten yüklenmesi ise 2 dakika sürdü.
- `.15` VPS yalnızca homologasyon içindir — üzerinde asla CI çalıştırıcıları çalışmaz.
