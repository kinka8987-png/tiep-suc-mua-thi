const khoDuLieu = [
    {
        id: "1_phuong_phap_ghep_truc_co_ban",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "1. Phương pháp Ghép trục cơ bản",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Ghép trục [ Cho bảng biến thiên của một hàm số:
$$ x: \quad -\frac{\pi}{3} \quad 0 \quad \pi; u: \quad -\frac{1}{2} \quad 1 \quad -1 $$ ]`,
        loiGiai: String.raw`<img src="./images/bbt_1_phuong_phap_ghep_truc_co_ban.png" class="inline-img">
Note: Nghiệm của $u$ chạy từ $\left[-\frac{1}{2}; \pi\right]$. $\Rightarrow$
Nhớ phải đi từ $-\frac{1}{2} \to 0 \to \pi$.`,
        tuDuy: String.raw``
    },
    {
        id: "2_bien_luan_so_nghiem_cua_ham_hop_f_cos_x_bang_ghep_truc",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "2. Biện luận số nghiệm của hàm hợp $f(\cos x)$ bằng Ghép trục",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Bài tập ví dụ ghép trục: [ Cho bảng biến thiên của $f(x)$:
$$ x: \quad -\infty \quad -1 \quad \frac{1}{2} \quad \frac{\sqrt{3}}{2} \quad 1 \quad +\infty; $$
$$ f(x): \quad +\infty \to -4 \to 2 \to -4 \to 2 \to +\infty $$ ]
<img src="./images/bbt_2_bien_luan_so_nghiem_cua_ham_hop_f_cos_x_bang_ghep_truc.png" class="inline-img">
Tìm $m$ để $f^2(\cos x) + (3-m)f(\cos x) + 2m - 4 = 0$ có vô số nghiệm thuộc $\left[-\frac{\pi}{3}; \pi\right]$.`,
        loiGiai: String.raw`Đặt $t = f(\cos x)$. Phương trình trở thành: $t^2 + (3-m)t + 2m - 4 = 0$
$\Leftrightarrow t^2 + 3t - mt + 2m - 4 = 0$
$\Leftrightarrow t^2 + 3t - 4 = m(t - 2)$
$\Leftrightarrow m = \frac{t^2 + 3t - 4}{t - 2} = u(t)$
Note: Mình có thể lấy bảng thanh nhiều chia $x \to f(x) \to f(\dots)$. Ta có sơ đồ biến đổi:
$f(x) \to f(\cos x) \to \frac{f^2(\cos x) + 3f(\cos x) - 4}{f(\cos x) - 2}$.
$\Rightarrow$ Vì lúc này không phải là $f(u) \to$ vào $f(x)$ như thường mà từ $f(u)$ đã thay vào 1 dạng phương trình khác hoàn toàn. Kiểu ban đầu:
$f(x) = x^2 + 2x \Rightarrow u = \cos x \Rightarrow f(u) = \cos^2 x + 2\cos x$.
Nhưng lúc sau lại: $f(u) = \cos^2 x + 2\cos x$ từ có phương trình mới là:
$g(x) = \frac{x^2 + 3x - 4}{x - 2}$ (không còn là $f(x)$).
$\Rightarrow g(\cos^2 x + 2\cos x) = \frac{(\cos^2 x + 2\cos x)^2 + 3(\dots) - 4}{(\dots) - 2}$
$\Rightarrow$ Từ đó sẽ làm nghịch đảo lại, từ suy giữ lại của phương trình $y = \frac{x^2 + 3x - 4}{x - 2}$ thay vì phương trình ban đầu. $\Rightarrow$ Có các điểm cực trị tại $\begin{cases} x = 1 \\ x = -1 \\ x = 3 \end{cases}$ (với $x \neq 2$). $\Rightarrow$ Tìm phương trình $g(f(u))$. $\Rightarrow$ Ráp lúc sau có cực trị $f'(u)$ có cực trị $u = \frac{1}{2}$,
$u = \frac{\sqrt{3}}{2} \Rightarrow \text{từ ghép đồ thị ban đầu lại } u = -1$.
Bảng ghép trục: 
$$ x: \quad -\frac{\pi}{3} \quad 0 \quad \pi; $$
$$ u: \quad \frac{1}{2} \quad \frac{\sqrt{3}}{2} \quad 1 \quad \frac{\sqrt{3}}{2} \quad -1; $$
$$ f(u): \quad 2 \quad 3 \quad 4 \quad 3 \quad 2 \quad 3 \quad 4 \quad 3 \quad 2 \quad 1 \quad -4 $$
$\Rightarrow$ Từ đây ta sẽ đi theo $g(x)$ không là $f(x)$ nữa. $g(f(u))$: Đồ thị uốn lượn tại các mức giá trị $4, m, 9, 4, \dots$ (Bảng biến thiên vẽ các mũi tên đi lên đi xuống và đường tiệm cận ngang, tiệm cận đứng, tương ứng với sự biến thiên của hàm hợp).
<img src="./images/bbt_2_bien_luan_so_nghiem_cua_ham_hop_f_cos_x_bang_ghep_truc_2.png" class="inline-img">`,
        tuDuy: String.raw``
    },
    {
        id: "3_mo_rong_ly_thuyet_ghep_truc",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "3. Mở rộng lý thuyết Ghép trục",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: (*) Kỹ thuật ghép trục: Đặt trục và hàm hợp $f(u) = g(x)$`,
        loiGiai: String.raw`- TH1: Nếu $u = ax + b \rightarrow f(t) = h(t)$.
- TH2: Nếu $u \neq ax + b$
  - Dạng 1: Đặt $t = u \rightarrow f(t), h(t)$.
  - Dạng 2: Khi $g(x) = x + a$. Đặt
$y = u \rightarrow \begin{cases} f(y) = x + a \\ y = u \end{cases}$
$\Rightarrow$ Chuyển trục (hoặc dùng tính chất đồ thị) để quay về bài toán tương giao.

(*) Chú ý:
- Đồ thị $y = f(u)$ có thể thay bởi $y = f'(u)$.
- Nhận diện đồ thị: Đồ thị $y = f(x)$ và $x = f(y)$ đối xứng nhau qua đường phân giác $y = x$.
- Một số bài toán chúng ta phải sử dụng phương pháp đánh giá.`,
        tuDuy: String.raw``
    },
    {
        id: "4_ky_thuat_do_thi_truc_tuong_giao_ham_hop_bang_lat_do_thi",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "4. Kỹ thuật Đồ thị trục - Tương giao hàm hợp bằng lật đồ thị",
        hinhAnhLeft: "./images/hinh_4_ky_thuat_do_thi_truc_tuong_giao_ham_hop_bang_lat_do_thi.png",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Kỹ thuật đồ thị trục Cho hàm $f(x)$. $\Rightarrow f(x^4 - 2m^2 x^2 + 4) = x$ có bao nhiêu nghiệm? Nhiều nghiệm nhất là bao nhiêu?`,
        loiGiai: String.raw`Đổi sang $x = f(y)$ (là hàm ngược) thì lật ngược đồ thị lại. Đồ thị $f(y)$ có dạng uốn lượn theo phương thẳng đứng $x \to y$.
<img src="./images/bbt_4_ky_thuat_do_thi_truc_tuong_giao_ham_hop_bang_lat_do_thi.png" class="inline-img">
$\Rightarrow$ Vì $x = f(y)$ nên đồ thị nó như thế này.
Đặt $y = x^4 - 2m^2 x^2 + 4$.
$\Rightarrow \begin{cases} f(y) = x \\ y = x^4 - 2m^2 x^2 + 4 \end{cases}$
$\Rightarrow$ Nghiệm là giao điểm của 2 hàm này.
<img src="./images/bbt_4_ky_thuat_do_thi_truc_tuong_giao_ham_hop_bang_lat_do_thi_2.png" class="inline-img">
Trục sẽ bị đổi lại. Điểm cực trị $x=0 \to y=3$. $\Rightarrow 10$ giao điểm.`,
        tuDuy: String.raw``
    },
    {
        id: "5_tu_duy_nghiem_boi_danh_gia_ham_so_luon_khong_am",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "5. Tư duy Nghiệm Bội - Đánh giá hàm số luôn không âm",
        hinhAnhLeft: "./images/hinh_5_tu_duy_nghiem_boi_danh_gia_ham_so_luon_khong_am.png",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Tư duy nghiệm bội Tìm $m$ để:
$m(x^4 - x^3 + x) - m^2(x^2 + x) - 2x \ge 0$ đúng $\forall x \in (-1; 3)$.`,
        loiGiai: String.raw`$\Leftrightarrow x[m(x^3 - x^2 + 1) - m^2(x + 1) - 2] \ge 0$
$\Leftrightarrow x[m x^3 - (m^2 + m)x^2 + m^2 - m - 2] \ge 0$
$\Rightarrow$ Để hàm luôn $\ge 0$. Đặt $f(x) = m x^3 - (m^2 + m)x^2 + m^2 - m - 2$. Có nghiệm $f(x) = 0 \Rightarrow m^2 - m - 2 = 0$
$\Rightarrow \begin{cases} m = 2 \\ m = -1 \end{cases} \rightarrow$ Thay vào thì có $m = -1$ thỏa mãn cho hàm luôn dương (+). Note: Để ý nghiệm bội.
$(x - x_0)^{2k + 1}$
<img src="./images/bbt_5_tu_duy_nghiem_boi_danh_gia_ham_so_luon_khong_am.png" class="inline-img">
$\rightarrow$ Để hàm không cực trị, đơn điệu. (Phương pháp 2: PP2).

Tư duy nghiệm bội + Phân tích liên hợp luôn $f(x) = ax^4 + bx^3 + cx + d$.
$p(x) = (x-1)[m^3 f(2x-1) - mf(x) + f(x) - 1] \rightarrow$ Tìm $m$ để $h(x) \ge 0, \forall x \in \mathbb{R}$.
<img src="./images/bbt_5_tu_duy_nghiem_boi_danh_gia_ham_so_luon_khong_am_2.png" class="inline-img">
Có $(x-1)$ mà $h(x) \ge 0 \Rightarrow p(x) = (x-1) \cdot g(x)$.
$\Rightarrow p(1) = 0 \Leftrightarrow m^3 f(1) - mf(1) + f(1) - 1 = 0$
$\Leftrightarrow m^3 - m = 0 \text{ (vì } f(1) = 1 \text{ theo đồ thị)}$
$\Leftrightarrow \begin{cases} m = 0 \\ m = \pm 1 \end{cases}$

- TH1: $m = 0 \Rightarrow h(x) = (x-1)[f(x) - 1]$. Ta thấy tại $f(x) = 1 \Rightarrow$ chỉ có 1 nghiệm $x = 1$. $\Rightarrow h(x) = 0$ và $f(x) = 1$ luôn chỉ có 1 nghiệm. $\Rightarrow h(x) = (x-1)(x-1)(ax^2 + \dots)$ (vì $a > 0 \Rightarrow ax^2 + \dots \ge 0, \forall x$).
$\Rightarrow h(x) \ge 0, \forall x \Rightarrow$ (Thỏa mãn).
- TH2: $m = 1 \Rightarrow h(x) = (x-1)(f(2x-1) - 1)$. Đặt $2x-1 = u \Rightarrow f(u) - 1$ cũng chỉ có 1 nghiệm tại $u = 1$.
$\Leftrightarrow 2x-1 = 1 \Leftrightarrow x = 1$.
$\Rightarrow h(x) = (x-1)^2 \cdot [a(2x-1)^2 + \dots] \ge 0, \forall x$.
(Tương tự như TH1).
- TH3: $m = -1 \Rightarrow h(x) = (x-1)[-f(2x-1) + 2f(x) - 1]$. Ta thấy $k(x) = -a(2x-1)^3 + 2ax^3 + \dots = -8ax^3 + 2ax^3 = -6ax^3 + \dots$ Khi $x \to +\infty \Rightarrow h(x) < 0$. $\Rightarrow$ Loại $m = -1$.`,
        tuDuy: String.raw``
    },
    {
        id: "6_mo_rong_ly_thuyet_nghiem_boi",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "6. Mở rộng lý thuyết Nghiệm bội",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: (*) Nghiệm bội cho câu hỏi Vận dụng cao (VDC):
+> Mở rộng:
$f'(x) = (x - x_0)^k \cdot g(x) \Rightarrow f(x_0) = f'(x_0) = f''(x_0) = \dots = f^{(k-1)}(x_0) = 0$ với $k \in \mathbb{N}^*$.`,
        loiGiai: String.raw`+> Nếu $f(x) = \frac{(x - x_0)^{2k+1} \cdot g(x)}{(x - x_0)} \ge 0 \text{ (hoặc } \le 0), \forall x \in (a; b)$
Nếu $x_0 \in (a; b)$ thì điều kiện cần là $g(x_0) = 0$.

+> Nếu $y = f(x, m)$ là một hàm đa thức đạt cực đại tại $x = x_0$ mà:
TH1: $y' = f'(x, m) = (x - x_0)^{2k+1} \cdot g(x, m) \Rightarrow$ Điều kiện 1: Nếu $x = x_0$ là điểm cực tiểu $\Rightarrow \begin{bmatrix} g(x_0, m) = 0 \\ g(x_0, m) > 0 \end{bmatrix} \Rightarrow$ Điều kiện 2: Nếu $x = x_0$ là điểm cực đại $\Rightarrow \begin{bmatrix} g(x_0, m) = 0 \\ g(x_0, m) < 0 \end{bmatrix}$
<img src="./images/bbt_6_mo_rong_ly_thuyet_nghiem_boi.png" class="inline-img">

TH2: $y' = f'(x, m) = (x - x_0)^{2n} \cdot g(x, m) \Rightarrow$ Điều kiện cần:
$g(x_0, m) = 0 \Leftrightarrow m = m_i \rightarrow$ Điều kiện đủ: Thay vào để kiểm tra xem nó có đạt cực trị tại $x_0$ hay không.`,
        tuDuy: String.raw``
    },
    {
        id: "7_tu_duy_nghiem_boi_dat_cuc_tieu_tai_1_diem",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "7. Tư duy nghiệm bội - Đạt cực tiểu tại 1 điểm",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Tư duy nghiệm bội (PP1): Đề: Có bao nhiêu giá trị nguyên của $m$ để hàm số: $y = x^8 + (m - 2)x^5 - (m^2 - 4)x^4 + 1$ đạt cực tiểu tại $x = 0$.`,
        loiGiai: String.raw`Đạo hàm: $y' = 8x^7 + 5(m - 2)x^4 - 4(m^2 - 4)x^3$
$y' = x^3 \underbrace{\left[ 8x^4 + 5(m - 2)x - 4(m^2 - 4) \right]}_{P(x)}$
$\Rightarrow$ Để có cực tiểu tại $x = 0$ thì $P(0)$ phải $\ge 0$ hoặc $= 0$.
$\Rightarrow \begin{cases} -4(m^2 - 4) \ge 0 \\ -4(m^2 - 4) = 0 \end{cases} \Rightarrow \begin{cases} -2 \le m \le 2 \\ m = \pm 2 \end{cases}$

- Xét $m = 2 \Rightarrow y' = x^3 \cdot 8x^4 = 8x^7$.
$y' = 0 \Leftrightarrow x = 0$. Dấu đổi từ (-) sang (+) $\Rightarrow$ Đạt cực tiểu (Thỏa mãn).
- Xét $m = -2 \Rightarrow y' = x^3 \cdot (8x^4 - 20x) = x^4 \cdot (8x^3 - 20)$.
<img src="./images/bbt_7_tu_duy_nghiem_boi_dat_cuc_tieu_tai_1_diem.png" class="inline-img">
Tại $x = 0$, $y'$ không đổi dấu (nghiệm bội chẵn $x^4$) $\Rightarrow$ không đạt cực trị (Không thỏa mãn).

Vậy $m \in \{-1, 0, 1, 2\}$.`,
        tuDuy: String.raw``
    },
    {
        id: "8_danh_gia_ham_so_lon_hon_dao_ham_va_dong_bien",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "8. Đánh giá hàm số lớn hơn đạo hàm và đồng biến",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đề: Cho hàm số $f(x) = x^3 + ax^2 + bx + c$ với $f(0) = f'(0)$. Hàm số $f(x) \ge f'(x), \forall x \ge -1$. Có bao nhiêu tham số $a$ để hàm đồng biến trên khoảng $(-\infty; +\infty)$?`,
        loiGiai: String.raw`Ta có: $f(0) = c, f'(0) = b \Rightarrow c = b$. Ta có: $f(x) - f'(x) \ge 0$
$\Leftrightarrow x^3 + ax^2 + bx + c - 3x^2 - 2ax - b \ge 0 \text{ (do } c = b)$
$\Leftrightarrow x^3 + (a - 3)x^2 + (b - 2a)x \ge 0$
$\Leftrightarrow x \underbrace{\left[ x^2 + (a - 3)x + (b - 2a) \right]}_{P(x)} \ge 0$
Để bất phương trình trên đúng với mọi $x \ge -1$, đa thức phải có nghiệm bội tại $x = 0$.
$\Rightarrow P(0) = 0 \Leftrightarrow b - 2a = 0 \Rightarrow b = 2a$. Khi đó $a = \frac{b}{2}$.
<img src="./images/bbt_8_danh_gia_ham_so_lon_hon_dao_ham_va_dong_bien.png" class="inline-img">
$\Rightarrow f'(x) = 3x^2 + 2ax + a$. Để $f'(x) \ge 0, \forall x \in (-\infty; +\infty)$:
$\Leftrightarrow \Delta' \le 0 \Rightarrow a^2 - 3a \le 0 \Rightarrow 0 \le a \le 3$
(Trong bản gốc ghi $a^2 - 12b \ge 0$ rồi lại $\dots \le 12$ rất rối rắm, nhưng mạch logic là tìm điều kiện của đạo hàm). Ghi chép theo đúng chữ viết tay mờ:
$D = a^2 - 12b \dots \Rightarrow 0 \le a \le 12 \quad (1)$.

Lại có $P(x) = x^2 + (a - 3)x$. Khi $x \ge -1$:
$\Rightarrow x + a - 3 \ge 0, \forall x \ge -1$
$\Rightarrow a \ge 3 - x, \forall x \ge -1 \Rightarrow a \ge 4 \quad (2)$. 
Kết hợp (1) và (2) (đoạn này bị cắt ngang dưới cuối trang).`,
        tuDuy: String.raw``
    },
    {
        id: "9_ham_so_tri_tuyet_doi_dong_bien_tren_khoang",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "9. Hàm số Trị tuyệt đối đồng biến trên khoảng",
        hinhAnhLeft: "./images/hinh_9_ham_so_tri_tuyet_doi_dong_bien_tren_khoang.png",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Tư duy nghiệm bội (PP3) Bài toán trị tuyệt đối: Đề: Có bao nhiêu giá trị nguyên $m$ để hàm số $y = |x^5 - 5x^4 + 5(m - 1)x - 8|$ đồng biến trên khoảng $(-\infty; 1)$.`,
        loiGiai: String.raw`Ta có: Hàm số $y = |f(x)|$ sẽ đồng biến khi và chỉ khi:
$\begin{cases} \text{TH1: } f(x) \le 0 \\ \quad \quad f'(x) \le 0 \end{cases}$
(vì hàm nằm dưới trục hoành và đang nghịch biến, khi lấy trị tuyệt đối sẽ lật lên thành đồng biến). Hoặc:
$\begin{cases} \text{TH2: } f(x) \ge 0 \\ \quad \quad f'(x) \ge 0 \end{cases}$
(vì hàm nằm trên trục hoành và đang đồng biến).

- Xét TH1:
$\begin{cases} f'(x) \le 0 \\ f(1) \le 0 \end{cases} \Rightarrow 5x^4 - 20x^3 + 5(m - 1) \le 0, \forall x \in (-\infty; 1)$.
Ta thấy khi $x \to -\infty \Rightarrow f'(x) \to +\infty \Rightarrow$ Điều kiện $f'(x) \le 0, \forall x \in (-\infty; 1)$ vô lý (Loại).

- Xét TH2: $5x^4 - 20x^3 + 5(m - 1) \ge 0, \forall x \in (-\infty; 1)$. Vì khi $x \to -\infty \Rightarrow f'(x) \to +\infty \Rightarrow$ Thỏa mãn.
$\Leftrightarrow 5(m - 1) \ge 20x^3 - 5x^4, \forall x \in (-\infty; 1)$
$\Leftrightarrow m \ge \frac{4x^3 - x^4}{1} + 1 \Leftrightarrow m \ge -x^4 + 4x^3 + 1$.
Xét hàm số $g(x) = -x^4 + 4x^3 + 1$ trên $(-\infty; 1)$. Đạo hàm:
$g'(x) = -4x^3 + 12x^2 = 0 \Leftrightarrow \begin{cases} x = 0 \\ x = 3 \text{ (Loại)} \end{cases}$
<img src="./images/bbt_9_ham_so_tri_tuyet_doi_dong_bien_tren_khoang.png" class="inline-img">
$\Rightarrow m \ge \max g(x) \Rightarrow m \ge 4$. (Trong tài liệu ghi $m \ge 2,14$).

Lại có điều kiện $f(1) \ge 0$:
$\Rightarrow 1 - 5 + 5(m - 1) - 8 \ge 0 \Leftrightarrow 5(m - 1) \ge 12 \Leftrightarrow m \ge \frac{17}{5} = 3,4$.
Vậy $m \ge 4$.`,
        tuDuy: String.raw``
    },
    {
        id: "10_xet_don_dieu_ham_phan_thuc_co_chua_tri_tuyet_doi",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "10. Xét đơn điệu hàm phân thức có chứa trị tuyệt đối",
        hinhAnhLeft: "./images/hinh_10_xet_don_dieu_ham_phan_thuc_co_chua_tri_tuyet_doi.png",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Note: Khi xét đơn điệu hàm phân thức có chứa trị tuyệt đối: Ví dụ: $y = \left| \frac{mx + 3}{x + m + 2} \right|$ nghịch biến trên khoảng $(1; +\infty)$.`,
        loiGiai: String.raw`$\Rightarrow$ Vì đạo hàm của nó có 2 trường hợp: nằm trên hoặc nằm dưới trục hoành.
<img src="./images/bbt_10_xet_don_dieu_ham_phan_thuc_co_chua_tri_tuyet_doi.png" class="inline-img">
$\Rightarrow$ Nên ta cần xét $f'(x) > 0$ hay $f'(x) < 0$.`,
        tuDuy: String.raw``
    },
    {
        id: "11_tinh_so_diem_cuc_tri_ham_tri_tuyet_doi",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "11. Tính số điểm cực trị hàm trị tuyệt đối",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Tính số điểm cực trị: Số điểm cực trị của hàm số $y = |g(x)|$ bằng tổng của số điểm cực trị của hàm số $g(x)$ và số nghiệm đơn (hoặc nghiệm bội lẻ) của phương trình $g(x) = 0$.`,
        loiGiai: String.raw``,
        tuDuy: String.raw``
    },
    {
        id: "12_tuong_giao_do_thi_ham_so_tim_so_nghiem_nguyen",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "12. Tương giao đồ thị hàm số tìm số nghiệm nguyên",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: $f(x) \le y$. Tìm $y$ sao cho $f(x)$ có 3 nghiệm nguyên.`,
        loiGiai: String.raw`Lập bảng biến thiên $f(x)$:
<img src="./images/bbt_12_tuong_giao_do_thi_ham_so_tim_so_nghiem_nguyen.png" class="inline-img">
Đường thẳng $f(x) = y \Rightarrow$ Kẻ ngang đường $y$ cắt trục.`,
        tuDuy: String.raw``
    },
    {
        id: "13_tim_gioi_han_do_thi_va_bien_luan_so_nghiem_cua_phuong_trinh_chua_can",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "13. Tìm giới hạn đồ thị và Biện luận số nghiệm của phương trình chứa căn",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Tìm giới hạn đồ thị Cho hàm số: $\lim_{x \to -\infty} \frac{x}{\sqrt{x^2+3}}$
Tìm $m$ để phương trình $f\left(\frac{x+3}{\sqrt{x^2+3}}\right) = m$ có 3 nghiệm.`,
        loiGiai: String.raw`Ta có:
$\lim_{x \to -\infty} \frac{x}{\sqrt{x^2+3}} = \lim_{x \to -\infty} \frac{x}{|x|\sqrt{1 + \frac{3}{x^2}}}$
Vì $x \to -\infty$ nên $|x| = -x$.
$\Rightarrow \lim_{x \to -\infty} \frac{x}{-x\sqrt{1 + \frac{3}{x^2}}} = \frac{1}{-1} = -1$.
<img src="./images/bbt_13_tim_gioi_han_do_thi_va_bien_luan_so_nghiem_cua_phuong_trinh_chua_can.png" class="inline-img">
Đồ thị $f(u)$ đi từ $0$ lên $2$, đi xuống một giá trị rồi đi lên lại.
<img src="./images/bbt_13_tim_gioi_han_do_thi_va_bien_luan_so_nghiem_cua_phuong_trinh_chua_can_2.png" class="inline-img">
$\Rightarrow m$ có thể bằng $0$ vì
$x \to -\infty$ tiệm cận ngang là $0$ thì đồ thị sẽ không chạm tới vạch đó
$\Rightarrow$ Không tính là nghiệm.`,
        tuDuy: String.raw``
    },
    {
        id: "14_tuong_giao_do_thi_ham_so_chua_tham_so_m",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "14. Tương giao đồ thị hàm số chứa tham số $m$",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Đề bài: Cho hàm số $f(x) = 2x^3 - 6x$. Xét phương trình $f\left(x + \frac{m}{3}\right) = n$. Hỏi có bao nhiêu giá trị $m$ để thỏa mãn phương trình có 3 nghiệm phân biệt $x \in [0; 4]$?`,
        loiGiai: String.raw`Note: Luôn luôn để ý khoảng chạy (khoảng xác định của biến). Làm thật kỹ!
Ta có đạo hàm: $f'(x) = 6x^2 - 6 = 0 \Leftrightarrow x = \pm 1$.
Đặt $u = x + \frac{m}{3}$. Với $x = 0 \Rightarrow u = \frac{m}{3}$. Với $x = 4 \Rightarrow u = \frac{m}{3} + 4$.
Bảng biến thiên của hàm $f(u)$:
<img src="./images/bbt_14_tuong_giao_do_thi_ham_so_chua_tham_so_m.png" class="inline-img">
Dựa vào bảng biến thiên, để đường thẳng $y = n$ cắt đồ thị $f(u)$ tại 3 điểm phân biệt trên khoảng $\left[\frac{m}{3}; \frac{m}{3} + 4\right]$, khoảng này phải chứa cả hai điểm cực trị $u = -1$ và $u = 1$.
$\Rightarrow \begin{cases} \frac{m}{3} < -1 \\ \frac{m}{3} + 4 > 1 \end{cases} \Leftrightarrow \begin{cases} m < -3 \\ m > -9 \end{cases}$
<img src="./images/bbt_14_tuong_giao_do_thi_ham_so_chua_tham_so_m_2.png" class="inline-img">
Dựa vào đồ thị, ta có điều kiện chặn:
$\Rightarrow f\left(\frac{m}{3}\right) \le f\left(\frac{m}{3} + 4\right)$
$\Leftrightarrow 2\left(\frac{m}{3}\right)^3 - 6\left(\frac{m}{3}\right) \le 2\left(\frac{m}{3} + 4\right)^3 - 6\left(\frac{m}{3} + 4\right)$
Khai triển và rút gọn bất phương trình trên:
$3 \cdot \left(\frac{m}{3}\right)^2 \cdot 4 + 3 \cdot \frac{m}{3} \cdot 4^2 + 4^3 - 24 \ge 0$
$\Rightarrow \begin{cases} m \ge -3,5 \\ m \le -11,9 \end{cases}$
$\Rightarrow m \in [-12; -8,5) \cup (-3,5; -3)$. Vì $m$ là số nguyên, ta suy ra:
$m \in \{-11; -10; -9\}$.`,
        tuDuy: String.raw``
    },
    {
        id: "15_khao_sat_ham_so_giai_phuong_trinh_logarit",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "15. Khảo sát hàm số giải phương trình Logarit",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Biến đổi phương trình:
$\log_{2022}(x^4 - 2x^2 + 2023) - \log_{2022}(y^2 + 2022) = 2y + 2021$`,
        loiGiai: String.raw`$\Leftrightarrow \log_{2022}(x^4 - 2x^2 + 2023) = \frac{2y + 2021}{y^2 + 2022}$
Xét hàm số $f(y) = \frac{2y + 2021}{y^2 + 2022}$ Đạo hàm: $f'(y) = \dots$ (Lập bảng biến thiên của hàm $f(y)$).
<img src="./images/bbt_15_khao_sat_ham_so_giai_phuong_trinh_logarit.png" class="inline-img">
Từ bảng biến thiên: $f(y) \le 1$.
$\Rightarrow \log_{2022}(x^4 - 2x^2 + 2023) \le 1$
$\Leftrightarrow x^4 - 2x^2 + 2023 \le 2022^1$
$\Leftrightarrow x^4 - 2x^2 + 1 \le 0 \Leftrightarrow (x^2 - 1)^2 \le 0$
Vì bình phương luôn lớn hơn hoặc bằng $0 \Rightarrow (x^2 - 1)^2 = 0 \Rightarrow x^2 = 1 \Rightarrow x = \pm 1$. Thay $x = \pm 1$ vào lại phương trình ban đầu $\Rightarrow f(y) = 1$. Mà theo bảng biến thiên, $f(y) = 1$ khi $y = 1$. Vậy có các cặp $(x, y)$ là: $(1, 1)$ và $(-1, 1)$.`,
        tuDuy: String.raw``
    },
    {
        id: "16_bien_luan_nghiem_bat_phuong_trinh_thong_qua_khao_sat_ham",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "16. Biện luận nghiệm bất phương trình thông qua khảo sát hàm",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Cho hàm số $f(x)$: $f'(x) = 0$ tại $x = -3, 1, +\infty$. Bảng biến thiên của $f(x)$:
<img src="./images/bbt_16_bien_luan_nghiem_bat_phuong_trinh_thong_qua_khao_sat_ham.png" class="inline-img">
Yêu cầu: $f(x) < e^x + m$ với mọi $x \in (-2, 1)$`,
        loiGiai: String.raw`$\Leftrightarrow m > f(x) - e^x$ Xét
$g(x) = f(x) - e^x \Rightarrow g'(x) = f'(x) - e^x < 0$ (với mọi $x \in (-2, 1)$ vì $f'(x) \le 0$ và $-e^x < 0$). $\Rightarrow g(x)$ nghịch biến trên $(-2, 1)$.
<img src="./images/bbt_16_bien_luan_nghiem_bat_phuong_trinh_thong_qua_khao_sat_ham_2.png" class="inline-img">`,
        tuDuy: String.raw``
    },
    {
        id: "17_co_lap_m_va_phuong_trinh_bac_3",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "17. Cô lập $m$ và Phương trình bậc 3",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.0+)
Nội dung: Xét phương trình: $y = x^3 - (m-2)x^2 + 3x - 1 = 0$`,
        loiGiai: String.raw`Với $x = 0 \Rightarrow -1 = 0$ (Vô lý nên phương trình không có nghiệm $x=0$)
Với $x \neq 0$, chia hai vế cho $x^2$:
$\Rightarrow \frac{x^3 + 3x - 1}{x^2} = m - 2 \Rightarrow$ Phương trình có 1 nghiệm.`,
        tuDuy: String.raw``
    },
    {
        id: "18_tuong_giao_ham_so_mu_diem_uon_tiep_xuc",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "18. Tương giao hàm số mũ (Điểm uốn / Tiếp xúc)",
        hinhAnhLeft: "./images/hinh_18_tuong_giao_ham_so_mu_diem_uon_tiep_xuc.png",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: (*) Nghiệm của hàm mũ: Phương trình: $a^x = g(m)x + 1$.`,
        loiGiai: String.raw`<img src="./images/bbt_18_tuong_giao_ham_so_mu_diem_uon_tiep_xuc.png" class="inline-img">
- Có 1 nghiệm
$\Rightarrow \begin{cases} g(m)x + 1 = h(x) \\ g(m) \le 0 \end{cases}$ (hoặc là đường tiếp tuyến).
- $a^x = g(m)x + 1$ có 2 nghiệm
$\Rightarrow \begin{cases} g(m) \neq \ln a \\ g(m) > 0 \end{cases}$
<img src="./images/bbt_18_tuong_giao_ham_so_mu_diem_uon_tiep_xuc_2.png" class="inline-img">
Phương trình: $\log_a x = g(m)x - g(m) = g(m)(x - 1)$.
- Có 2 nghiệm
$\Rightarrow \begin{cases} g(m) \neq \frac{1}{\ln a} \\ g(m) > 0 \end{cases}$
- Có 1 nghiệm
$\Leftrightarrow \left[ \begin{array}{l} g(m) = 0 \\ g(m) \neq \frac{1}{\ln a} ; g(m) < 0 \\ g(m) = \frac{1}{\ln a} \end{array} \right.$
<img src="./images/bbt_18_tuong_giao_ham_so_mu_diem_uon_tiep_xuc_3.png" class="inline-img">`,
        tuDuy: String.raw``
    },
    {
        id: "19_ham_so_le_va_tinh_don_dieu",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "19. Hàm số lẻ và tính đơn điệu",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Hàm số lẻ thỏa mãn tính chất $f(x) = -f(-x)$ hoặc $f(-x) = -f(x)$.
$\rightarrow$ Điều kiện: $f(x)$ luôn đồng biến hoặc nghịch biến. $\hookrightarrow$ Áp dụng Vận dụng cao (VDC) cho bất phương trình: $f(a) + f(b) \ge 0$`,
        loiGiai: String.raw`$\Rightarrow f(a) \ge -f(b)$. Vì hàm số là hàm lẻ nên $-f(b) = f(-b)$. Do đó:
$f(a) \ge f(-b) \Rightarrow a \ge -b$ (Nếu hàm số đồng biến).`,
        tuDuy: String.raw``
    }
{
        id: "20_dieu_kien_chung_ve_tinh_don_dieu",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "20. Điều kiện chung về Tính Đơn Điệu",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (6.0+)
Nội dung: +> Điều kiện đơn điệu: Hàm số nghịch biến:
$\begin{cases} \Delta' (y') \le 0 \\ a (y') < 0 \end{cases}$ 
Hàm số đồng biến:
$\begin{cases} \Delta' (y') \le 0 \\ a (y') > 0 \end{cases}$`,
        loiGiai: String.raw``,
        tuDuy: String.raw``
    },
    {
        id: "21_ham_so_bac_3_dong_bien_tren_1_khoang_co_do_dai_bang_1",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "21. Hàm số bậc 3 đồng biến trên 1 khoảng có độ dài bằng 1",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Cho hàm số
$y = -x^3 + 3x^2 + (m-1)x + 2m - 3$. Tìm $m$ để hàm số đồng biến trên 1 khoảng có độ dài bằng 1.`,
        loiGiai: String.raw`Ta có đạo hàm: $y' = -3x^2 + 6x + m - 1$. Vì $a = -3 < 0$. Xét
$\Delta' = 3^2 - (-3)(m-1) = 9 + 3m - 3 = 3m + 6$. 
Trường hợp 1:
$\Delta' \le 0 \Rightarrow m \le -2 \Rightarrow y' \le 0, \forall x \Rightarrow$ Hàm số nghịch biến trên $\mathbb{R} \Rightarrow$ Vô lý (Loại).
Trường hợp 2:
$\Delta' > 0 \Rightarrow m > -2$. Hàm số đồng biến trên khoảng $(x_1, x_2)$ có độ dài bằng $1 \Rightarrow |x_1 - x_2| = 1$
$\Leftrightarrow (x_1 + x_2)^2 - 4x_1x_2 = 1$
Theo định lý Vi-et:
$\begin{cases} x_1 + x_2 = 2 \\ x_1x_2 = \frac{m-1}{-3} = \frac{1-m}{3} \end{cases}$
Thay vào phương trình: 
$\Leftrightarrow 2^2 - 4\left(\frac{1-m}{3}\right) = 1$
$\Leftrightarrow 4 + \frac{4m-4}{3} = 1 \Leftrightarrow 12 + 4m - 4 = 3$
$\Leftrightarrow 4m = -5 \Rightarrow m = -\frac{7}{4}$ (Loại). 
$\Rightarrow$ Không có $m$ thỏa mãn.`,
        tuDuy: String.raw``
    },
    {
        id: "22_dieu_kien_xac_dinh_mau_so_khi_khao_sat_don_dieu",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "22. Điều kiện xác định (Mẫu số) khi khảo sát đơn điệu",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.5+)
Nội dung: +> Luôn nhớ đặt điều kiện mẫu số. Ví dụ: Tìm $m$ để hàm số $y = \frac{2^x + 10}{2^x - m}$ nghịch biến trên khoảng $(1; 4)$.`,
        loiGiai: String.raw`$\Rightarrow$ Điều kiện xác định: $2^x - m \neq 0 \Rightarrow m \neq 2^x$. 
Vì $x \in (1; 4) \Rightarrow 2^x \in (2^1; 2^4) \Rightarrow 2^x \in (2; 16)$.
$\Rightarrow m \notin (2; 16) \Rightarrow \begin{bmatrix} m \le 2 \\ m \ge 16 \end{bmatrix}$.`,
        tuDuy: String.raw``
    },
    {
        id: "23_danh_gia_tinh_don_dieu_cua_ham_so_chua_tham_so",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "23. Đánh giá tính đơn điệu của hàm số chứa tham số",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.5+)
Nội dung:
- Hàm nghịch biến, đồng biến luôn nhỏ hơn điều kiện của ẩn $m$. Ví dụ:
$y = \frac{1}{x - m}$ với $x \in (-1; 1)$`,
        loiGiai: String.raw`$\Rightarrow m \neq x \Rightarrow m \notin (-1; 1) \Rightarrow m \in (-\infty; -1] \cup [1; +\infty)$`,
        tuDuy: String.raw``
    },
    {
        id: "24_phuong_phap_danh_gia_tinh_don_dieu_cua_ham_a_x",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "24. Phương pháp đánh giá tính đơn điệu của hàm $a^x$",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.0+)
Nội dung: +> Phương trình $a^x = b^x$ luôn có 1 nghiệm dù đồng biến hay nghịch biến.
+> Phương trình $a^x = f(x)$ có 1 nghiệm $\Leftrightarrow 1$ vế là hàm đồng biến, 1 vế là hàm nghịch biến $\Rightarrow$ có 1 nghiệm. Hoặc`,
        loiGiai: String.raw`$\begin{cases} a > 1 \\ 0 < b < 1 \end{cases} \Rightarrow \text{có 1 nghiệm.}$
$\begin{cases} 0 < a < 1 \\ b > 1 \end{cases}$
$\begin{cases} 0 < a < 1 \\ 0 < x < 1 \end{cases}$ 
(Ghi chú: phần này liệt kê các trường hợp cơ số để hàm số đồng biến hoặc nghịch biến).`,
        tuDuy: String.raw``
    },
    {
        id: "25_danh_gia_bat_phuong_trinh_bang_dao_ham",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "25. Đánh giá bất phương trình bằng đạo hàm",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Ví dụ: Đánh giá bất phương trình bằng đạo hàm
Đề bài: Giải bất phương trình $4^{-x} - 3x + \log_4(y - x) - 2y + 2 \le 0$.`,
        loiGiai: String.raw`Note: Khi xét bất đẳng thức hay phương trình, hãy thử đạo hàm và đánh giá.
Xét hàm số $f(x) = 4^{-x} - 3x + \log_4(y - x) - 2y + 2$. Ta đánh giá giá trị của đạo hàm $f'(x)$. 
$f'(x) = -4^{-x}\ln 4 - 3 - \frac{1}{(y - x)\ln 4}$ 
Điều kiện xác định của logarit là $y - x > 0 \Rightarrow \frac{1}{(y - x)\ln 4} > 0$. Ta thấy:
$-4^{-x}\ln 4 < 0 ; \quad -3 < 0 ; \quad -\frac{1}{(y - x)\ln 4} < 0$
$\Rightarrow f'(x) < 0, \forall x < y$.
$\Rightarrow$ Hàm số $f(x)$ luôn nghịch biến trên tập xác định.`,
        tuDuy: String.raw``
    },
    {
        id: "26_khao_sat_ham_so_tim_min_max_bien_doi_t_xy",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "26. Khảo sát hàm số tìm Min, Max (biến đổi $t = xy$)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Khảo sát hàm $P(t) = -2t^2 + 2t + 1$ trên đoạn $\left[-\frac{1}{3}; 1\right]$.`,
        loiGiai: String.raw`Đạo hàm
$P'(t) = -4t + 2 = 0 \Leftrightarrow t = \frac{1}{2}$. 
<img src="./images/bbt_26_khao_sat_ham_so_tim_min_max_bien_doi_t_xy.png" class="inline-img">
$\Rightarrow P_{\max} = \frac{3}{2}$ tại $t = \frac{1}{2}$.
$\Rightarrow P_{\min} = \frac{1}{9}$ tại $t = -\frac{1}{3}$.`,
        tuDuy: String.raw``
    },
    {
        id: "27_danh_gia_khoang_gia_tri_ham_so_phan_thuc_dung_delta",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "27. Đánh giá khoảng giá trị hàm số phân thức (Dùng Delta)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (7.5+)
Nội dung:
- Tìm điều kiện để phân thức nhận giá trị nguyên. Ví dụ: Tìm $x$ để biểu thức
$I = \frac{-6x - 2}{x^2 + 3}$ là số nguyên.`,
        loiGiai: String.raw`Ta có:
$I = \frac{-6x - 2}{x^2 + 3} \Rightarrow I(x^2 + 3) = -6x - 2$
$\Leftrightarrow Ix^2 + 6x + 3I + 2 = 0$ 
Được xem như phương trình bậc 2 ẩn $x$.
Để phương trình có nghiệm thì: $\Delta' = 3^2 - I(3I + 2) \ge 0$
$\Leftrightarrow 9 - 3I^2 - 2I \ge 0 \Leftrightarrow -3I^2 - 2I + 9 \ge 0$
$\Leftrightarrow -2,04 \le I \le 1,43$ 
Vì $I$ nguyên nên $I \in \{-2; -1; 0; 1\}$.`,
        tuDuy: String.raw``
    },
    {
        id: "28_danh_gia_min_max_bang_delta_doi_voi_ham_luong_giac",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "28. Đánh giá Min/Max bằng Delta đối với hàm lượng giác",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (7.5+)
Nội dung: +> Cho hàm số $y = \frac{1 - m\sin x}{\cos x + 2}$. Tìm tham số $m$ để giá trị nhỏ nhất (min) của $y < -2$.`,
        loiGiai: String.raw`$\Rightarrow y\cos x + 2y = 1 - m\sin x$
$\Leftrightarrow m\sin x + y\cos x = 1 - 2y$ 
Điều kiện để phương trình có nghiệm lượng giác: $A^2 + B^2 \ge C^2 \Rightarrow m^2 + y^2 \ge (1 - 2y)^2$
$\Leftrightarrow m^2 + y^2 \ge 1 - 4y + 4y^2$
$\Leftrightarrow 3y^2 - 4y + 1 - m^2 \le 0$ 
Xét $\Delta' = 4 - 3(1 - m^2) = 1 + 3m^2 > 0$
$\Rightarrow y_1 = \frac{2 + \sqrt{1 + 3m^2}}{3} ; y_2 = \frac{2 - \sqrt{1 + 3m^2}}{3}$
$\Rightarrow \frac{2 - \sqrt{1 + 3m^2}}{3} \le y \le \frac{2 + \sqrt{1 + 3m^2}}{3}$

Yêu cầu bài toán: $\min(y) < -2 \Rightarrow \frac{2 - \sqrt{1 + 3m^2}}{3} < -2$
$\Leftrightarrow 2 - \sqrt{1 + 3m^2} < -6 \Leftrightarrow \sqrt{1 + 3m^2} > 8$
$\Leftrightarrow 1 + 3m^2 > 64 \Leftrightarrow m^2 > 21$
$\Leftrightarrow m > \sqrt{21} \text{ hoặc } m < -\sqrt{21}$.`,
        tuDuy: String.raw``
    },
    {
        id: "29_tim_gia_tri_lon_nhat_max_va_nho_nhat_min_cua_ham_luong_giac",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "29. Tìm giá trị lớn nhất (max) và nhỏ nhất (min) của hàm lượng giác",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Cho hàm số:
$y = 3\sin x + 4\cos x + 1$. Tìm giá trị lớn nhất (max) và nhỏ nhất (min) của $y$?`,
        loiGiai: String.raw`Chia cả hai vế cho 5:
$\frac{y}{5} = \frac{3}{5}\sin x + \frac{4}{5}\cos x + \frac{1}{5}$ 
Đặt $\cos \alpha = \frac{3}{5}$ và $\sin \alpha = \frac{4}{5}$. Khi đó phương trình trở thành:
$\frac{y}{5} = \sin x \cos \alpha + \cos x \sin \alpha + \frac{1}{5}$
$\Leftrightarrow \frac{y}{5} = \sin(x + \alpha) + \frac{1}{5}$

Vì $-1 \le \sin(x + \alpha) \le 1$ nên:
$-1 + \frac{1}{5} \le \frac{y}{5} \le 1 + \frac{1}{5}$
$\Leftrightarrow \frac{-4}{5} \le \frac{y}{5} \le \frac{6}{5}$ 
Nhân cả 3 vế với 5, ta được: $-4 \le y \le 6$. 
Vậy $y_{\min} = -4$ và $y_{\max} = 6$.`,
        tuDuy: String.raw``
    },
    {
        id: "30_khao_sat_ham_so_luy_thua_mu_tim_min_max",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "30. Khảo sát hàm số lũy thừa/mũ tìm Min/Max",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đặt $t = 3^{x^2}$. Xét hàm $t(x) = 3^{x^2}$ trên đoạn $[-2; 1]$. Đạo hàm: $t' = 3^{x^2} \cdot \ln 3 \cdot 2x = 0 \Leftrightarrow x = 0$.`,
        loiGiai: String.raw`Bảng biến thiên của $t(x)$:
<img src="./images/bbt_30_khao_sat_ham_so_luy_thua_mu_tim_min_max.png" class="inline-img">
Từ bảng biến thiên, ta thấy
$t \in [1; 3^4] \Rightarrow t \in [1; 81]$.
Phương trình ban đầu trở thành: $t^2 - 4t + 8 = m$. Xét hàm số $f(t) = t^2 - 4t + 8$ trên đoạn $t \in [1; 81]$. Đạo hàm: $f'(t) = 2t - 4 = 0 \Leftrightarrow t = 2$.
Bảng biến thiên của $f(t)$: 
<img src="./images/bbt_30_khao_sat_ham_so_luy_thua_mu_tim_min_max_2.png" class="inline-img">
Dựa vào bảng biến thiên, để phương trình có nghiệm thì $m$ phải cắt đồ thị hàm $f(t)$: $\Rightarrow 4 \le m \le 6245$.`,
        tuDuy: String.raw``
    },
    {
        id: "31_kien_thuc_chung_ve_min_max_ham_chua_tham_so_f_x",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "31. Kiến thức chung về Min/Max hàm chứa tham số $f(x)$",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (7.5+)
Nội dung: +> Khi $f(x) \ge m, \forall x \in ( \dots ) \Rightarrow \min f(x) = m$ khi $x = x_0$. 
+> Khi $f(x) \le m, \forall x \in ( \dots ) \Rightarrow \max f(x) = m$ khi $x = x_0$.`,
        loiGiai: String.raw`<img src="./images/bbt_31_kien_thuc_chung_ve_min_max_ham_chua_tham_so_f_x.png" class="inline-img">
$\Rightarrow$ Phải thay vào để thử lại. Ví dụ: $a^x \ge ax + 1$
$\Leftrightarrow a^x - ax - 1 \ge 0$ Xét hàm
$f(x) = a^x - ax - 1 \Rightarrow f(0) = 0 \Rightarrow \min \text{ tại } x_0 = 0$
$\Rightarrow f'(0) = 0 \Leftrightarrow \ln a \cdot a^0 - a = 0 \Rightarrow a = e$.`,
        tuDuy: String.raw``
    },
    {
        id: "32_khao_sat_ham_so_mu_ket_hop_ham_da_thuc",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "32. Khảo sát hàm số mũ kết hợp hàm đa thức",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Với bài toán hàm số mũ đối với hàm đa thức: Ví dụ: Giải phương trình $3^{\frac{x}{6}} = 2x + m$. $\Rightarrow$ Chuyển hết sang 1 vế tạo thành hàm số $f(x)$. $\Rightarrow$ Giải $f'(x) = 0$. Nếu phương trình đạo hàm có 1 nghiệm $x_0$ thì phương trình gốc sẽ có tối đa 2 nghiệm.`,
        loiGiai: String.raw`Ta có: $f(x) = 3^{\frac{x}{6}} - 2x - m = 0$
$\Rightarrow f'(x) = \frac{\ln 3}{6} \cdot 3^{\frac{x}{6}} - 2 = 0$
$\Rightarrow 3^{\frac{x}{6}} = \frac{12}{\ln 3} \Rightarrow x = 6 \log_3 \left( \frac{12}{\ln 3} \right)$.
<img src="./images/bbt_32_khao_sat_ham_so_mu_ket_hop_ham_da_thuc.png" class="inline-img">
- Dòng $x$: $-\infty \quad x_0 \quad +\infty$ (với $x_0 = 6 \log_3 (\frac{12}{\ln 3})$).
- Dòng $f'(x)$: Mang dấu âm (-) trong khoảng $(-\infty; x_0)$ và mang dấu dương (+) trong khoảng $(x_0; +\infty)$. Tại $x_0$ thì $f'(x) = 0$.
- Dòng $f(x)$: Nghịch biến đi xuống giá trị cực tiểu $\approx -17,86$ rồi đồng biến đi lên. $\Rightarrow$ Nếu đường thẳng $y=0$ cắt đồ thị $\Rightarrow$ Có tối đa 2 nghiệm.`,
        tuDuy: String.raw``
    },
    {
        id: "33_kien_thuc_tong_quat_giai_min_max_cua_phuong_trinh_2_bien",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "33. Kiến thức tổng quát giải Min, Max của phương trình 2 biến",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: (*) Các hệ phương trình logarit $\rightarrow$ tìm $\max, \min$: 
+> Đưa về hàm số $\rightarrow$ Lập bảng biến thiên. 
+> Đưa về phương trình bậc 2 theo ẩn $x, y$. 
+> Sử dụng các bất đẳng thức (bất đẳng thức cơ bản để đánh giá). 
+> Hình học: Khi bài toán có 2 biến số nguyên yêu cầu tìm $\max$:`,
        loiGiai: String.raw`- Có 1 biến thuộc tập $D$ cho trước, hàm số để đánh giá biến nguyên chưa, tách theo điều kiện có nghiệm.
- Rút dựa biến này thay cho biến kia và xét điều kiện để biến kia nguyên (dựa vào tính chia hết).
- Rút ẩn biến này theo biến kia, viết được về dạng bậc nhất. Tìm điểm có tọa độ nguyên trên các miền hình phẳng xác định.
- Đưa về phương trình 2 biến. Lấy cái ẩn phụ của 2 biến, tích của 2 biến nguyên.`,
        tuDuy: String.raw``
    },
    {
        id: "1_ung_dung_tich_phan_tinh_the_tich_khoi_da_dien_mat_cat_ngang",
        chuyenDe: "tich-phan",
        loaiTag: "Bài toán",
        tieuDe: "1. Ứng dụng tích phân tính thể tích khối đa diện (Mặt cắt ngang)",
        hinhAnhLeft: "./images/hinh_1_ung_dung_tich_phan_tinh_the_tich_khoi_da_dien_mat_cat_ngang.png",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Diện tích mặt cắt ngang tại cao độ $z$ là một hình vuông có cạnh là
$2 \cdot \frac{3 - |z|}{2} = 3 - |z|$.`,
        loiGiai: String.raw`$S_{\text{mặt cắt}} = 4 \left( \frac{3 - |z|}{2} \right)^2 = (3 - |z|)^2$.
Tiếp tục tính thể tích khối đa diện:
$V(H) = \int_{-3}^3 S_{\text{mặt cắt}} dz = \int_{-3}^3 (3 - |z|)^2 dz$
$= 2 \int_0^3 (3 - z)^2 dz = 2 \left[ -\frac{(3 - z)^3}{3} \right]_0^3 = 2 \left( 0 - \left(-\frac{27}{3}\right) \right) = 18$.`,
        tuDuy: String.raw``
    },
    {
        id: "2_tinh_chat_tich_phan_phan_nhanh_ham_cho_boi_nhieu_cong_thuc",
        chuyenDe: "tich-phan",
        loaiTag: "Kiến thức",
        tieuDe: "2. Tính chất Tích phân phân nhánh (Hàm cho bởi nhiều công thức)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (6.0+)
Nội dung: +> Tích phân phân nhánh: Hàm số
$f(x) = \begin{cases} A & \text{với } x \ge m \\ B & \text{với } x < m \end{cases}$`,
        loiGiai: String.raw`$\Rightarrow \int_{a}^{b} f(x) dx = \int_{a}^{m} f(x) dx + \int_{m}^{b} f(x) dx$.`,
        tuDuy: String.raw``
    },
    {
        id: "3_cong_thuc_tich_phan_dac_biet_ham_so_chan",
        chuyenDe: "tich-phan",
        loaiTag: "Kiến thức",
        tieuDe: "3. Công thức Tích phân đặc biệt (Hàm số chẵn)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Công thức tích phân đặc biệt: Nếu $f(x)$ là hàm số chẵn trên đoạn $[-a; a]$ (tức là $f(x) = f(-x)$), ta có:
$\int_{-a}^{a} \frac{f(x)}{b^x + 1} dx = \int_{0}^{a} f(x) dx$.`,
        loiGiai: String.raw`Tổng hợp các tính chất đặc biệt của Tích phân hàm ẩn Tag: [Kiến thức] Mức độ: Vận dụng cao (8.5+) Nội dung: +> Các tính chất của Tích phân:
1) $\int_{a}^{b} f(x) dx = \int_{a}^{b} f(a + b - x) dx$.
2) $\int_{-a}^{a} f(x) dx = \int_{-a}^{0} f(x) dx + \int_{0}^{a} f(x) dx = \int_{0}^{a} f(-x) dx + \int_{0}^{a} f(x) dx$.
3) $\int_{0}^{a} f(x) dx = \int_{0}^{a} f(a - x) dx$.
4) $\int_{\alpha}^{\beta} f(ax + b) dx = \frac{1}{a} \int_{a\alpha + b}^{a\beta + b} f(t) dt \quad$ (với $a \neq 0$).
5) $\int_{-a}^{a} f(|x|) dx = 2 \int_{0}^{a} f(x) dx$.
6) $\int_{-b}^{a} f(-x) dx = -\int_{b}^{-a} f(t) dt = \int_{-a}^{b} f(x) dx$.`,
        tuDuy: String.raw``
    }
    {
        id: "11_cuc_tri_oxyz_tim_diem_m_tren_mat_phang_lam_min_bieu_thuc",
        chuyenDe: "toa-do-oxyz",
        loaiTag: "Bài toán",
        tieuDe: "11. Cực trị Oxyz: Tìm điểm M trên mặt phẳng làm Min biểu thức $3MA^2 + 2MB^2 - MC^2$",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Cho $A(0,0,1)$, $B(0,1,0)$, $C(1,0,1)$. Tìm điểm $M \in (P)$ sao cho biểu thức
$P = 3MA^2 + 2MB^2 - MC^2$ đạt giá trị nhỏ nhất (min).`,
        loiGiai: String.raw`$\Rightarrow P = 3\left[x^2 + y^2 + (z-1)^2\right] + 2\left[x^2 + (y-1)^2 + z^2\right] - \left[(x-1)^2 + y^2 + (z-1)^2\right]$
$= 4x^2 + 4y^2 + 4z^2 + 6x - 4y - 4z + 4$
$= 4x^2 + 6x + \frac{9}{4} + 4y^2 - 4y + 1 + 4z^2 - 8z + 4 - \frac{9}{4}$
$= \left(2x + \frac{3}{2}\right)^2 + (2y - 1)^2 + (2z - 2)^2 - \frac{9}{4} \ge -\frac{9}{4}$

$\Rightarrow P_{\min} = -\frac{9}{4} \Leftrightarrow \begin{cases} x = -\frac{3}{4} \\ y = \frac{1}{2} \\ z = 1 \end{cases}$`,
        tuDuy: String.raw``
    },
    {
        id: "12_cuc_tri_do_dai_doan_thang_noi_2_diem_thuoc_2_duong_tron_mat_cau",
        chuyenDe: "hinh-khong-gian",
        loaiTag: "Bài toán",
        tieuDe: "12. Cực trị độ dài đoạn thẳng nối 2 điểm thuộc 2 đường tròn/mặt cầu",
        hinhAnhLeft: "./images/hinh_12_cuc_tri_do_dai_doan_thang_noi_2_diem_thuoc_2_duong_tron_mat_cau.png",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Hai đường tròn tâm $I_1$ và $I_2$. Đoạn thẳng $AB$ có điểm $A$ nằm trên đường tròn $I_1$, điểm $B$ nằm trên đường tròn $I_2$. Vector thể hiện khoảng cách giữa hai điểm.] 
Nội dung: Ta có: $I_1I_2^2 = \left(\vec{I_1A} + \vec{AB} + \vec{BI_2}\right)^2$`,
        loiGiai: String.raw`$= I_1A^2 + I_2B^2 + AB^2 + 2\vec{I_1A}\cdot\vec{AB} + 2\vec{AB}\cdot\vec{BI_2} + 2\vec{I_1A}\cdot\vec{BI_2}$
(Do $\vec{I_1A} \perp \vec{AB}$ và $\vec{I_2B} \perp \vec{AB}$ nên các tích vô hướng liên quan đến $\vec{AB}$ bằng $0$)
$\Leftrightarrow I_1I_2^2 = I_1A^2 + I_2B^2 + AB^2 - 2\vec{I_1A}\cdot\vec{I_2B}$
(vì $\vec{BI_2} = -\vec{I_2B}$)

$\Leftrightarrow AB^2 = I_1I_2^2 - I_1A^2 - I_2B^2 + 2\vec{I_1A}\cdot\vec{I_2B}$
$\Leftrightarrow AB = \sqrt{20 + 2 \cdot 2 \cdot 1 \cdot \cos(\vec{I_1A}, \vec{I_2B})} = \sqrt{20 + 4 \cos(\vec{I_1A}, \vec{I_2B})}$

$\Rightarrow \max \cos(\vec{I_1A}, \vec{I_2B}) = 1 \Rightarrow \text{Trường hợp 1}$
$\min \cos(\vec{I_1A}, \vec{I_2B}) = -1 \Rightarrow \text{Trường hợp 2}$
$\Rightarrow AB_{\max} = \sqrt{20 + 4} = 2\sqrt{6}$
$AB_{\min} = \sqrt{20 - 4} = \sqrt{16} = 4$.`,
        tuDuy: String.raw``
    },
    {
        id: "13_khoang_cach_ngan_nhat_giua_2_diem_di_dong_tren_2_duong_thang_oxyz",
        chuyenDe: "toa-do-oxyz",
        loaiTag: "Bài toán",
        tieuDe: "13. Khoảng cách ngắn nhất giữa 2 điểm di động trên 2 đường thẳng (Oxyz)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: +> Cho $A(0; -2; 3)$, $B(2; -2; -3)$, $C(4; 0; 2)$, $D(4; 4; 4)$
Có điểm $M$ di chuyển trên đường thẳng $CD$, điểm $N$ di chuyển... (Tìm tham số $t$ để độ dài đạt cực trị).`,
        loiGiai: String.raw`Vector chỉ phương của đường thẳng $CD$: $\vec{CD} = (0; 4; 2) \Rightarrow$ Chọn VTCP $\vec{u} = (0; 2; 1)$. Để chuẩn hóa vector $\vec{N}$ trên đường thẳng:
$\vec{N} = (0; 3k; 4k)$. Khoảng cách chuẩn
$|\vec{N}'| = 1 \Rightarrow \sqrt{0^2 + (3k)^2 + (4k)^2} = 1 \Leftrightarrow \sqrt{25k^2} = 1$
$\Rightarrow 5k = 1 \Rightarrow k = \frac{1}{5}$.
$\Rightarrow \vec{N}' = \left(0; \frac{3}{5}; \frac{4}{5}\right)$.

Gọi điểm trên tia thỏa mãn là $M = A + t \cdot \vec{v_1} \Rightarrow M(t; -2; 3)$.
Điểm tương ứng trên đường thẳng kia (giả thiết) có tọa độ phụ thuộc $t$:
$N = \left(4; \frac{4}{5}t + 2; \frac{3}{5}t - 1\right)$. Bình phương khoảng cách $MN$:
$MN^2 = (t - 4)^2 + \left(\frac{4}{5}t + 2\right)^2 + \left(\frac{3}{5}t - 1\right)^2$
Khai triển và rút gọn:
$= t^2 - 8t + 16 + \frac{16}{25}t^2 + \frac{16}{5}t + 4 + \frac{9}{25}t^2 - \frac{6}{5}t + 1$
$= \left(1 + \frac{16}{25} + \frac{9}{25}\right)t^2 + \left(-8 + \frac{16}{5} - \frac{6}{5}\right)t + (16 + 4 + 1) = 2t^2 - 16t + 36$
Hàm số đạt giá trị cực trị (nhỏ nhất) khi: $t = \frac{16}{2 \cdot 2} = 4$.`,
        tuDuy: String.raw``
    },
    {
        id: "14_meo_giai_hinh_oxyz_vector_ty_le_va_hinh_binh_hanh",
        chuyenDe: "toa-do-oxyz",
        loaiTag: "Kiến thức",
        tieuDe: "14. Mẹo giải hình Oxyz: Vector tỷ lệ và hình bình hành",
        hinhAnhLeft: "./images/hinh_14_meo_giai_hinh_oxyz_vector_ty_le_va_hinh_binh_hanh.png",
        deBai: String.raw`Mức độ: Khá (7.5+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Hình bình hành AMNC với các đỉnh A, M, N, C. Các vector $\vec{AC}$ và $\vec{MN}$ bằng nhau và cùng hướng, $\vec{AM}$ và $\vec{CN}$ bằng nhau và cùng hướng.]`,
        loiGiai: String.raw`- Cố gắng đưa các vector về nhau để làm ra các vector tỷ lệ. Ví dụ:
$A(3, 2, 1)$, có vector đơn vị trên trục $Ox$ là $\vec{i}(1, 0, 0)$. Giả sử có $\vec{MN} = \vec{i}$. $\Rightarrow$ Lấy điểm $C$ sao cho $\vec{AC} = \vec{i}$.
$\Rightarrow \vec{MN} = \vec{i} = \vec{AC} \Rightarrow \vec{MN} = \vec{AC}$.
$\Rightarrow AMNC$ là hình bình hành $\Rightarrow \vec{CN} = \vec{AM}$.`,
        tuDuy: String.raw``
    },
    {
        id: "15_cong_thuc_toa_do_tam_duong_tron_noi_tiep_tam_giac_oxyz",
        chuyenDe: "toa-do-oxyz",
        loaiTag: "Kiến thức",
        tieuDe: "15. Công thức tọa độ tâm đường tròn nội tiếp tam giác (Oxyz)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Công thức tọa độ tâm đường tròn nội tiếp (qua hệ tọa độ Oxy): [Hình vẽ minh họa: Tam giác ABC có 3 đỉnh A, B, C. Các cạnh đối diện tương ứng là a, b, c. Tâm đường tròn nội tiếp là I.]`,
        loiGiai: String.raw`$\begin{cases} a = BC \\ b = CA \\ c = AB \end{cases} \Rightarrow x_I = \frac{ax_1 + bx_2 + cx_3}{a + b + c} ; \quad y_I = \frac{ay_1 + by_2 + cy_3}{a + b + c}$.
Với $A(x_1, y_1)$, $B(x_2, y_2)$, $C(x_3, y_3)$.

Còn trong không gian Oxyz thì chèn thêm cao độ $z$:
$z_I = \frac{az_1 + bz_2 + cz_3}{a + b + c}$.`,
        tuDuy: String.raw``
    },
    {
        id: "16_khoang_cach_ngan_nhat_tu_mot_diem_den_mot_doan_thang",
        chuyenDe: "conic-oxy",
        loaiTag: "Bài toán",
        tieuDe: "16. Khoảng cách ngắn nhất từ một điểm đến một đoạn thẳng",
        hinhAnhLeft: "./images/hinh_16_khoang_cach_ngan_nhat_tu_mot_diem_den_mot_doan_thang.png",
        deBai: String.raw`Mức độ: Khá (7.5+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Một đoạn thẳng AB. Bên ngoài đoạn thẳng có các điểm C, $C_1$ và một điểm R nằm xa. Điểm M di động trên đoạn AB tạo thành tam giác. Thể hiện bài toán tìm khoảng cách ngắn nhất từ một điểm ngoài đến một đoạn thẳng.] 
Nội dung: Bài toán: Lấy điểm $M$ sao cho đoạn $CM$ đạt giá trị nhỏ nhất (\min). Vì $M \in$ đoạn thẳng $AB$, ta xét 2 trường hợp:`,
        loiGiai: String.raw`- Trường hợp 1: Hình chiếu vuông góc của $C_1$ (gọi là $H$) nằm trong vùng đoạn thẳng $AB$. $\Rightarrow CM_{\min}$ chính là khoảng cách đường cao $C_1H$.
- Trường hợp 2: Điểm $C_2$ nằm ngoài vùng chiếu vuông góc xuống đoạn $AB$. $\Rightarrow CM_{\min}$ sẽ là khoảng cách từ $C_2$ đến một trong hai đầu mút $A$ hoặc $B$ (tức là so sánh độ dài đoạn $C_2A$ và $C_2B$, chọn đoạn ngắn hơn).`,
        tuDuy: String.raw``
    },
    {
        id: "17_cuc_tri_hinh_hoc_phang_tong_khoang_cach_ma_mb_mc_dat_max",
        chuyenDe: "conic-oxy",
        loaiTag: "Bài toán",
        tieuDe: "17. Cực trị Hình học phẳng: Tổng khoảng cách MA+MB+MC đạt Max",
        hinhAnhLeft: "./images/hinh_17_cuc_tri_hinh_hoc_phang_tong_khoang_cach_ma_mb_mc_dat_max.png",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Hình ảnh bổ trợ [H]: Đề bài: Cho tam giác $ABC$ đều nội tiếp đường tròn $(C)$. Tìm điểm $M$ để $MA + MB + MC$ đạt giá trị lớn nhất (\max).`,
        loiGiai: String.raw`Bài giải: Chọn điểm $E$ trên đoạn $AM$ sao cho $BE = BM$. Xét $\Delta ABE$ và $\Delta CBM$ có:
$\begin{cases} AB = BC \text{ (do } \Delta ABC \text{ đều)} \\ BE = BM \text{ (theo cách dựng)} \\ \widehat{BAE} = \widehat{BCM} \text{ (góc nội tiếp cùng chắn cung } BM) \end{cases}$
$\Rightarrow \Delta ABE = \Delta CBM \text{ (c-g-c)} \Rightarrow AE = CM$. 
Ta có: $MA + MB + MC = AM + BM + CM = AM + AE + EM = AM + AM = 2AM$ (vì $BM = EM$ do $\Delta BEM$ đều và $AE = CM$).

Để tổng này lớn nhất thì $AM$ phải lớn nhất:
$\Rightarrow 2AM \le 2 \times \text{đường kính} = 4R \Rightarrow M \text{ thuộc điểm chính giữa cung } BC. \Rightarrow AM \text{ là đường kính hình tròn.}$`,
        tuDuy: String.raw``
    },
    {
        id: "18_tinh_chat_cac_duong_conic_elip_va_hypebol",
        chuyenDe: "conic-oxy",
        loaiTag: "Kiến thức",
        tieuDe: "18. Tính chất các đường Conic: Elip và Hypebol",
        hinhAnhLeft: "./images/hinh_18_tinh_chat_cac_duong_conic_elip_va_hypebol.png",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Đường Elip trên hệ trục tọa độ Oxy. Tâm O, trục lớn nằm trên trục Ox, trục bé nằm trên trục Oy. Các bán trục là a và b. Các tiêu điểm $F_1$, $F_2$ nằm trên trục Ox với tọa độ c và -c.] 
Nội dung: +> Đường Elip:`,
        loiGiai: String.raw`- Phương trình chính tắc: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$
- Điều kiện: $0 < c < a$ (và $a > b > 0$)
- Mối liên hệ: $c^2 = a^2 - b^2$.

Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Đường Hypebol trên hệ trục tọa độ Oxy. Có hai nhánh nằm hai bên trục Oy. Các tiêu điểm $F_1$, $F_2$ nằm trên trục Ox cách tâm O khoảng c. Một điểm M nằm trên một nhánh của Hypebol. Vẽ khoảng cách từ M đến hai tiêu điểm $F_1$ và $F_2$.] Nội dung: +> Đường Hypebol:
<img src="./images/bbt_18_tinh_chat_cac_duong_conic_elip_va_hypebol_2.png" class="inline-img">
- Phương trình chính tắc: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$
- Mối liên hệ: $c^2 = a^2 + b^2$.
- Tính chất độ dài bán kính qua tiêu của điểm $M(x_M, y_M) \in (H)$:
$MF_1 = |a + e \cdot x_M| \quad ; \quad MF_2 = |a - e \cdot x_M|$`,
        tuDuy: String.raw``
    },
    {
        id: "19_phuong_phap_giao_diem_tim_min_ma_mb",
        chuyenDe: "conic-oxy",
        loaiTag: "Bài toán",
        tieuDe: "19. Phương pháp giao điểm tìm Min MA+MB (Bài toán Bất đẳng thức tam giác)",
        hinhAnhLeft: "./images/hinh_19_phuong_phap_giao_diem_tim_min_ma_mb.png",
        deBai: String.raw`Mức độ: Khá (7.5+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Một đường thẳng d trên mặt phẳng. Hai điểm A và B nằm cùng một phía so với đường thẳng d. Từ B lấy đối xứng qua d được điểm B'. Đoạn thẳng AB' cắt d tại điểm M. Nối M với A và B.] 
Nội dung: +> Phương pháp giao điểm (Bài toán tìm điểm thỏa mãn tổng khoảng cách min):
- Đề bài: Cho hai điểm $A$, $B$ nằm cùng phía so với đường thẳng $d$. Tìm điểm $M \in d$ sao cho $MA + MB$ đạt giá trị nhỏ nhất (\min).`,
        loiGiai: String.raw`- Phương pháp giải:
1. Lấy điểm $B'$ đối xứng với $B$ qua đường thẳng $d$.
2. Giao điểm của đường thẳng $AB'$ với đường thẳng $d$ chính là điểm $M$ cần tìm.
3. Khi đó, do tính chất đối xứng, $MB = MB'$.
4. Suy ra $MA + MB = MA + MB' \ge AB'$. Dấu "=" xảy ra khi $A$, $M$, $B'$ thẳng hàng.
5. Giá trị nhỏ nhất là đoạn thẳng $AB'$.`,
        tuDuy: String.raw``
    },
    {
        id: "20_tu_duy_dai_so_hoa_hinh_hoc_oxy_oxyz",
        chuyenDe: "toa-do-oxyz",
        loaiTag: "Kiến thức",
        tieuDe: "20. Tư duy Đại số hóa Hình học (Oxy / Oxyz)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: $\rightarrow$ Bậc 1: Chuyển dữ kiện $\rightarrow$ Hình học Oxy (2 biến) / Hình học Oxyz (3 biến). $\rightarrow$ Bậc 2: Dùng các tính chất hình học để xử lý (cắt logarit, Elip, Hypebol).`,
        loiGiai: String.raw`(*) Luôn phải để ý các dấu hiệu: Ví dụ: $P = \sqrt{(a - m)^2 + (b - n)^2}$
$\Rightarrow \text{Giao với một đường thẳng từ } A(a, b) \text{ và } B(m, n)$
$\Rightarrow P = AB = \sqrt{(a - m)^2 + (b - n)^2}$.

(*) Hình học: Khi bài toán có 2 biến số nguyên yêu cầu tìm $\max$:
- Có 1 biến thuộc tập $D$ cho trước, hàm số để đánh giá biến nguyên chưa, tách theo điều kiện có nghiệm.
- Rút dựa biến này thay cho biến kia và xét điều kiện để biến kia nguyên (dựa vào tính chia hết).
- Rút ẩn biến này theo biến kia, viết được về dạng bậc nhất. Tìm điểm có tọa độ nguyên trên các miền hình phẳng xác định.
- Đưa về phương trình 2 biến. Lấy cái ẩn phụ của 2 biến, tích của 2 biến nguyên.`,
        tuDuy: String.raw``
    },
    {
        id: "21_phuong_phap_hinh_hoc_hoa_giai_he_logarit",
        chuyenDe: "conic-oxy",
        loaiTag: "Bài toán",
        tieuDe: "21. Phương pháp Hình học hóa giải hệ Logarit (Đường thẳng cắt Đường tròn)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Cách 2: Giải theo phương pháp hình học.`,
        loiGiai: String.raw`$\begin{cases} x+y = 3^t \Rightarrow \text{Đường thẳng } (d): x+y - 3^t = 0 \\ x^2+y^2 = 4^t \Rightarrow \text{Đường tròn } (C): x^2+y^2 = (2^t)^2 \text{ tâm } I(0, 0), R = 2^t \end{cases}$
Để tồn tại nghiệm chung, đường thẳng và đường tròn phải cắt nhau:
$d(I, d) \le R \Leftrightarrow \frac{|-3^t|}{\sqrt{1^2+1^2}} \le 2^t \Rightarrow \frac{3^t}{\sqrt{2}} \le 2^t \Rightarrow \left(\frac{3}{2}\right)^t \le \sqrt{2} \Rightarrow t \le 0,85$

Note: Tách các vế cho hệ hình học:
- Đường thẳng $d$: $ax+by+c=0$
- Đường tròn $(C)$: $(x-a)^2+(y-b)^2 \le R^2$ (Cách 3)`,
        tuDuy: String.raw``
    },
    {
        id: "22_danh_gia_vung_nghiem_bang_hinh_hoc_oxy_vanh_khan_giua_2_duong_tron",
        chuyenDe: "conic-oxy",
        loaiTag: "Kiến thức",
        tieuDe: "22. Đánh giá vùng nghiệm bằng Hình học Oxy (Vành khăn giữa 2 đường tròn)",
        hinhAnhLeft: "./images/hinh_22_danh_gia_vung_nghiem_bang_hinh_hoc_oxy_vanh_khan_giua_2_duong_tron.png",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Hệ trục tọa độ Oxy với hai đường tròn đồng tâm tại gốc tọa độ O. Đường tròn nhỏ bán kính R=1, đường tròn lớn bán kính R=2. Vùng nằm giữa hai đường tròn được gạch chéo. Có các điểm được đánh dấu trên vùng này (8 điểm).] 
Nội dung: Note: Phương pháp hình học làm sao cho ranh đạo trục $\dots \rightarrow$ làm theo cách hình thì chia hết.`,
        loiGiai: String.raw`Phương pháp hình học: Ví dụ: $1 \le a^2 + b^2 \le 4 ; \quad a, b \text{ nguyên}$.
$\Rightarrow$ Nằm giữa 2 đường tròn $R=1, R=2$. $\Rightarrow$ Có 8 điểm thỏa mãn.`,
        tuDuy: String.raw``
    },
    {
        id: "23_hinh_hoc_hoa_tim_min_max_bieu_thuc_phan_thuc",
        chuyenDe: "conic-oxy",
        loaiTag: "Bài toán",
        tieuDe: "23. Hình học hóa tìm Min/Max biểu thức phân thức (Sự tương giao)",
        hinhAnhLeft: "./images/hinh_23_hinh_hoc_hoa_tim_min_max_bieu_thuc_phan_thuc.png",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Trục tọa độ vuông góc Ox, Ov. Vẽ đường tròn tâm O bán kính 1 với phương trình $x^2+v^2=1$.] 
Nội dung: Cách 2: Phương pháp hình học Đặt $v = 2y \Rightarrow$ Đường tròn $(C)$: $x^2 + v^2 = 1$ có tâm $O(0,0)$ và $R = 1$.`,
        loiGiai: String.raw`Thay $v = 2y$ vào $P$: $P = \frac{2x - v - 2}{2x + \frac{v}{2} + 8}$ (chỗ này biểu thức có sai sót ghi chép, ta tiếp tục theo đúng bản gốc).
$\Leftrightarrow P(2x + v + 8) = 2x - 2v - 2$
$\Leftrightarrow (2P - 2)x + (P + 2)v + 8P + 2 = 0 \text{ (Đường thẳng d).}$

Để hệ phương trình
$\begin{cases} x^2 + v^2 = 1 \\ (2P - 2)x + (P + 2)v + 8P + 2 = 0 \end{cases}$
có nghiệm. $\Leftrightarrow$ Đường thẳng $(d)$ cắt đường tròn $(C)$.
$\Leftrightarrow d(O, (d)) \le R$
$\Leftrightarrow \frac{|8P + 2|}{\sqrt{(2P - 2)^2 + (P + 2)^2}} \le 1$
$\Leftrightarrow (8P + 2)^2 \le (2P - 2)^2 + (P + 2)^2$
$\Leftrightarrow 64P^2 + 32P + 4 \le 5P^2 - 4P + 8$
$\Leftrightarrow 59P^2 + 36P - 4 \le 0 \Rightarrow -0,72 \le P \le 0,082$.`,
        tuDuy: String.raw``
    },
    {
        id: "24_tinh_chat_vi_tri_tuong_doi_giao_diem_duong_cheo_da_giac",
        chuyenDe: "conic-oxy",
        loaiTag: "Kiến thức",
        tieuDe: "24. Tính chất Vị trí tương đối & Giao điểm đường chéo Đa giác",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.5+)
Nội dung:`,
        loiGiai: String.raw`- Cách xét dấu của 2 điểm có cùng phía hay không thì thay tọa độ vào phương trình đường thẳng nhân với nhau:
$\begin{cases} > 0 \Rightarrow \text{cùng phía} \\ < 0 \Rightarrow \text{ngược phía} \end{cases}$

- Tính chất hình học: Nếu có đa giác $n$ cạnh cắt một đường tròn $\Rightarrow$ Số giao điểm tối đa bằng $2n$.

- Với đa giác $n$ đỉnh $\Rightarrow$ Số giao điểm đường chéo:
$\begin{cases} \text{Nếu không có 3 đường đồng quy: } C_n^4 \\ \text{Có đường chéo: } C_n^2 - n \end{cases}$`,
        tuDuy: String.raw``
    },
    {
        id: "25_to_hop_hinh_hoc_dem_so_duong_thang_da_giac",
        chuyenDe: "to-hop-xac-suat",
        loaiTag: "Kiến thức",
        tieuDe: "25. Tổ hợp Hình học (Đếm số đường thẳng, đa giác)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.0+)
Nội dung: +> Cho bao nhiêu đường thẳng cắt nhau tùy ý:
$\Rightarrow \frac{n(n-1)}{2}$.`,
        loiGiai: String.raw`+> Đếm số đa giác: Xác định xem các đỉnh có liền nhau không (có thẳng hàng không). $\Rightarrow$ Dùng tổ hợp $C$ cách chọn.`,
        tuDuy: String.raw``
    },
    {
        id: "26_phuong_phap_luong_giac_hoa_duong_tron_tim_min_max",
        chuyenDe: "luong-giac",
        loaiTag: "Kiến thức",
        tieuDe: "26. Phương pháp Lượng giác hóa đường tròn tìm Min/Max",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: (*) Lượng giác hóa cho bài toán $\min - \max$:
$\rightarrow \text{Input: } (x - x_c)^2 + (y - y_c)^2 = R^2 \rightarrow \text{Đặt: } \begin{cases} x = x_c + R\cos t \\ y = y_c + R\sin t \end{cases}$`,
        loiGiai: String.raw`$\rightarrow \text{Chuyển về lượng giác: } a\sin t + b\cos t = c$
$\Rightarrow \text{Phương trình có nghiệm } \Leftrightarrow a^2 + b^2 \ge c^2 \Rightarrow \text{Đánh giá cực trị (min/max)}$.`,
        tuDuy: String.raw``
    },
    {
        id: "27_cong_thuc_goc_giua_2_vector_va_ban_kinh_noi_ngoai_tiep_tam_giac",
        chuyenDe: "hinh-khong-gian",
        loaiTag: "Kiến thức",
        tieuDe: "27. Công thức góc giữa 2 Vector và Bán kính nội/ngoại tiếp tam giác",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.0+)
Nội dung: +> Góc giữa hai vector:
$\cos(\vec{u}, \vec{v}) = \frac{|\vec{u} \cdot \vec{v}|}{|\vec{u}| \cdot |\vec{v}|}$`,
        loiGiai: String.raw`+> Các công thức bán kính đường tròn trong tam giác:
$r = \frac{S_{ABC}}{p} \rightarrow \text{với } p \text{ là nửa chu vi (Bán kính đường tròn nội tiếp)}$
$R = \frac{a}{2\sin A} = \dots = \frac{abc}{4S_{ABC}} \text{ (Bán kính đường tròn ngoại tiếp)}$`,
        tuDuy: String.raw``
    },
    {
        id: "28_cong_thuc_co_tinh_chat_hinh_hoc_van_toc_goc_he_thuc_luong",
        chuyenDe: "luong-giac",
        loaiTag: "Kiến thức",
        tieuDe: "28. Công thức có tính chất hình học (Vận tốc góc, Hệ thức lượng)",
        hinhAnhLeft: "./images/hinh_28_cong_thuc_co_tinh_chat_hinh_hoc_van_toc_goc_he_thuc_luong.png",
        deBai: String.raw`Mức độ: Khá (7.0+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Một đường tròn có bán kính biểu diễn góc ở tâm $\Delta \alpha$ và độ dời để minh họa cho vận tốc góc $\omega$] 
Nội dung: $\omega = \frac{\Delta \alpha}{\Delta t}$`,
        loiGiai: String.raw`Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Một tam giác vuông có cạnh huyền là $d$, cạnh góc vuông là chiều cao $h$, góc nhọn kề cạnh góc vuông dưới đáy là $\alpha$. Ký hiệu mô tả tương quan hình học]
<img src="./images/bbt_28_cong_thuc_co_tinh_chat_hinh_hoc_van_toc_goc_he_thuc_luong_2.png" class="inline-img">
Nội dung:
$W = \cos^2 \alpha \cdot \frac{h^2}{d^2}$`,
        tuDuy: String.raw``
    },
    {
        id: "29_luong_giac_hoa_gia_thiet_dang_elip",
        chuyenDe: "luong-giac",
        loaiTag: "Bài toán",
        tieuDe: "29. Lượng giác hóa giả thiết dạng Elip (Biến đổi về đường tròn)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Cách 1: Phương pháp lượng giác hóa Từ giả thiết $x^2 + 4y^2 = 1 \Leftrightarrow x^2 + (2y)^2 = 1$.`,
        loiGiai: String.raw`Đặt:
$\begin{cases} x = \cos t \\ 2y = \sin t \Rightarrow y = \frac{1}{2}\sin t \end{cases}$
Thay vào biểu thức $P$: $P = \frac{x - 2y - 1}{x + y + 4}$
$\Leftrightarrow P = \frac{\cos t - \sin t - 1}{\cos t + \frac{1}{2}\sin t + 4} = \frac{2\cos t - 2\sin t - 2}{2\cos t + \sin t + 8}$
$\Leftrightarrow P(2\cos t + \sin t + 8) = 2\cos t - 2\sin t - 2$
$\Leftrightarrow (2P - 2)\cos t + (P + 2)\sin t = -8P - 2$. Để phương trình có nghiệm $\Leftrightarrow a^2 + b^2 \ge c^2$:
$\Leftrightarrow (2P - 2)^2 + (P + 2)^2 \ge (-8P - 2)^2$
$\Leftrightarrow 4P^2 - 8P + 4 + P^2 + 4P + 4 \ge 64P^2 + 32P + 4$
$\Leftrightarrow -59P^2 - 36P + 4 \ge 0 \Rightarrow -0,72 \le P \le 0,082$.
$\Rightarrow P_{\max} \approx 0,082 ; P_{\min} \approx -0,72$.`,
        tuDuy: String.raw``
    },
    {
        id: "30_vector_van_toc_trong_khong_gian_oxyz",
        chuyenDe: "toa-do-oxyz",
        loaiTag: "Kiến thức",
        tieuDe: "30. Vector vận tốc trong không gian Oxyz",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (6.0+)
Nội dung:
- Nếu vật di chuyển với vận tốc $\vec{v}(a, b, c) \Rightarrow$ vector chỉ phương của nó là $(a, b, c)$ và có độ lớn $\sqrt{a^2 + b^2 + c^2}$.`,
        loiGiai: String.raw``,
        tuDuy: String.raw``
    },
    {
        id: "31_khoang_cach_tu_mot_diem_den_mat_phang_nhan_dien_do_hoa",
        chuyenDe: "hinh-khong-gian",
        loaiTag: "Kiến thức",
        tieuDe: "31. Khoảng cách từ một điểm đến mặt phẳng (Nhận diện đồ họa)",
        hinhAnhLeft: "./images/hinh_31_khoang_cach_tu_mot_diem_den_mat_phang_nhan_dien_do_hoa.png",
        deBai: String.raw`Mức độ: Khá (7.0+)
Hình ảnh bổ trợ [H]:`,
        loiGiai: String.raw`Nội dung:
$\Rightarrow SH = d(S, (P))$ (Ghi chú: Đoạn này nằm lọt thỏm ngay dưới một bảng xét dấu đạo hàm trong bản gốc, là sự kết hợp giữa hàm số và hình học không gian).`,
        tuDuy: String.raw``
    }
    {
        id: "1_phuong_phap_luong_giac_hoa_tim_min_max_co_kem_phuong_phap_hinh_hoc",
        chuyenDe: "luong-giac",
        loaiTag: "Bài toán",
        tieuDe: "1. Phương pháp Lượng giác hóa tìm Min, Max (Có kèm phương pháp Hình học)",
        hinhAnhLeft: "./images/hinh_1_phuong_phap_luong_giac_hoa_tim_min_max_co_kem_phuong_phap_hinh_hoc.png",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Hình ảnh bổ trợ [H]: (Dành cho Cách 2 của bài toán) [Hình vẽ minh họa: Trục tọa độ vuông góc Oxy, Ov. Vẽ đường tròn tâm O bán kính 1 với phương trình $x^2+v^2=1$.]

Nội dung: Đề: Cho 2 số thực $x, y$ thỏa mãn $4^{x^2 + 4y^2} = 2^{2x^2 + 8y^2} = 2$.
Tìm $\max, \min$ cho biểu thức: $P = \frac{x^2 - 2y - 1}{x + y + 4}$.

Note: Phương pháp lượng giác hóa có thể giải được bài này không? $\rightarrow$ Phương pháp lượng giác hóa giải được khi mẫu số có dạng $a\sin t + b\cos t = c$ với điều kiện $a^2 + b^2 \ge c^2$.`,
        loiGiai: String.raw`Cách 1: Phương pháp lượng giác hóa Từ giả thiết $x^2 + 4y^2 = 1 \Leftrightarrow x^2 + (2y)^2 = 1 \text{. Đặt} \begin{cases} x = \cos t \\ 2y = \sin t \Rightarrow y = \frac{1}{2}\sin t \end{cases}$
Thay vào biểu thức $P$: $P = \frac{x - 2y - 1}{x + y + 4} \Leftrightarrow P = \frac{\cos t - \sin t - 1}{\cos t + \frac{1}{2}\sin t + 4} = \frac{2\cos t - 2\sin t - 2}{2\cos t + \sin t + 8}$
$\Leftrightarrow P(2\cos t + \sin t + 8) = 2\cos t - 2\sin t - 2 \Leftrightarrow (2P - 2)\cos t + (P + 2)\sin t = -8P - 2$.

Để phương trình có nghiệm $\Leftrightarrow a^2 + b^2 \ge c^2$: 
$\Leftrightarrow (2P - 2)^2 + (P + 2)^2 \ge (-8P - 2)^2 \Leftrightarrow 4P^2 - 8P + 4 + P^2 + 4P + 4 \ge 64P^2 + 32P + 4$
$\Leftrightarrow -59P^2 - 36P + 4 \ge 0 \Rightarrow -0,72 \le P \le 0,082$. $\Rightarrow P_{\max} \approx 0,082 ; P_{\min} \approx -0,72$.

Cách 2: Phương pháp hình học Đặt $v = 2y \Rightarrow$ Đường tròn $(C)$: $x^2 + v^2 = 1$ có tâm $O(0,0)$ và $R = 1$. (Xem hình vẽ [H] ở trên)

Thay $v = 2y$ vào $P$: $P = \frac{2x - v - 2}{2x + \frac{v}{2} + 8}$ (chỗ này biểu thức có sai sót ghi chép, ta tiếp tục theo đúng bản gốc). 
$\Leftrightarrow P(2x + v + 8) = 2x - 2v - 2 \Leftrightarrow (2P - 2)x + (P + 2)v + 8P + 2 = 0 \text{ (Đường thẳng d)}.$

Để hệ phương trình $\begin{cases} x^2 + v^2 = 1 \\ (2P - 2)x + (P + 2)v + 8P + 2 = 0 \end{cases}$ có nghiệm. 
$\Leftrightarrow$ Đường thẳng $(d)$ cắt đường tròn $(C)$.
$\Leftrightarrow d(O, (d)) \le R \Leftrightarrow \frac{|8P + 2|}{\sqrt{(2P - 2)^2 + (P + 2)^2}} \le 1$
$\Leftrightarrow (8P + 2)^2 \le (2P - 2)^2 + (P + 2)^2$
$\Leftrightarrow 64P^2 + 32P + 4 \le 5P^2 - 4P + 8 \Leftrightarrow 59P^2 + 36P - 4 \le 0 \Rightarrow -0,72 \le P \le 0,082$.`,
        tuDuy: String.raw``
    },
    {
        id: "2_tong_quat_luong_giac_hoa_cho_bai_toan_min_max",
        chuyenDe: "luong-giac",
        loaiTag: "Kiến thức",
        tieuDe: "2. Tổng quát: Lượng giác hóa cho bài toán Min - Max",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: (*) Lượng giác hóa cho bài toán $\min - \max$:
$\rightarrow \text{Input: } (x - x_c)^2 + (y - y_c)^2 = R^2 \rightarrow \text{Đặt: } \begin{cases} x = x_c + R\cos t \\ y = y_c + R\sin t \end{cases}$`,
        loiGiai: String.raw`$\rightarrow \text{Chuyển về lượng giác: } a\sin t + b\cos t = c$
$\Rightarrow \text{Phương trình có nghiệm } \Leftrightarrow a^2 + b^2 \ge c^2 \Rightarrow \text{Đánh giá cực trị (min/max)}$.`,
        tuDuy: String.raw``
    },
    {
        id: "3_giai_phuong_trinh_luong_giac_nhom_nhan_tu_chung",
        chuyenDe: "luong-giac",
        loaiTag: "Bài toán",
        tieuDe: "3. Giải phương trình lượng giác (Nhóm nhân tử chung)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (6.5+)
Nội dung: +> Giải phương trình lượng giác: $\sin x + \cos x - \cos 2x = 0$`,
        loiGiai: String.raw`$\Leftrightarrow \sin x + \cos x + \cos^2 x - \sin^2 x = 0$
$\Leftrightarrow (\sin x + \cos x) + (\cos x - \sin x)(\cos x + \sin x) = 0$
$\Leftrightarrow (\sin x + \cos x)(1 + \cos x - \sin x) = 0$`,
        tuDuy: String.raw``
    },
    {
        id: "4_giai_phuong_trinh_luong_giac_bang_danh_gia_tap_gia_tri",
        chuyenDe: "luong-giac",
        loaiTag: "Bài toán",
        tieuDe: "4. Giải phương trình lượng giác bằng đánh giá tập giá trị",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Giải phương trình lượng giác: $\sqrt{2} (\sin x + \cos x) = \frac{1}{\sin x \cos x}$`,
        loiGiai: String.raw`$\Leftrightarrow 2 \sin\left(x + \frac{\pi}{4}\right) = \frac{2}{\sin 2x} \Leftrightarrow \sin\left(x + \frac{\pi}{4}\right) \cdot \sin 2x = 1$
Vì $\sin \alpha \le 1$, ta có các trường hợp: 
$\Rightarrow \begin{cases} \sin\left(x + \frac{\pi}{4}\right) = 1 \\ \sin 2x = 1 \end{cases} \Rightarrow \text{Vô nghiệm}$ 
Hoặc $\begin{cases} \sin\left(x + \frac{\pi}{4}\right) = -1 \\ \sin 2x = -1 \end{cases}$`,
        tuDuy: String.raw``
    },
    {
        id: "5_tim_min_max_ham_phan_thuc_chua_sin_x_va_cos_x",
        chuyenDe: "luong-giac",
        loaiTag: "Bài toán",
        tieuDe: "5. Tìm Min, Max hàm phân thức chứa $\sin x$ và $\cos x$",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (7.5+)
Nội dung: +> Cho hàm số $y = \frac{1 - m\sin x}{\cos x + 2}$. Tìm tham số $m$ để giá trị nhỏ nhất (min) của $y < -2$.`,
        loiGiai: String.raw`$\Rightarrow y\cos x + 2y = 1 - m\sin x \Leftrightarrow m\sin x + y\cos x = 1 - 2y$
Điều kiện để phương trình có nghiệm lượng giác: $A^2 + B^2 \ge C^2$
$\Rightarrow m^2 + y^2 \ge (1 - 2y)^2 \Leftrightarrow m^2 + y^2 \ge 1 - 4y + 4y^2$
$\Leftrightarrow 3y^2 - 4y + 1 - m^2 \le 0$
Xét $\Delta' = 4 - 3(1 - m^2) = 1 + 3m^2 > 0$
$\Rightarrow y_1 = \frac{2 + \sqrt{1 + 3m^2}}{3} ; y_2 = \frac{2 - \sqrt{1 + 3m^2}}{3}$
$\Rightarrow \frac{2 - \sqrt{1 + 3m^2}}{3} \le y \le \frac{2 + \sqrt{1 + 3m^2}}{3}$

Yêu cầu bài toán: $\min(y) < -2 \Rightarrow \frac{2 - \sqrt{1 + 3m^2}}{3} < -2$
$\Leftrightarrow 2 - \sqrt{1 + 3m^2} < -6 \Leftrightarrow \sqrt{1 + 3m^2} > 8$
$\Leftrightarrow 1 + 3m^2 > 64 \Leftrightarrow m^2 > 21 \Leftrightarrow m > \sqrt{21} \text{ hoặc } m < -\sqrt{21}$.`,
        tuDuy: String.raw``
    },
    {
        id: "6_tim_min_max_bieu_thuc_luong_giac_bang_phep_nhom_goc_alpha",
        chuyenDe: "luong-giac",
        loaiTag: "Bài toán",
        tieuDe: "6. Tìm Min, Max biểu thức lượng giác bằng phép nhóm góc $\alpha$",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (7.5+)
Nội dung: +> Cho hàm số: $y = 3\sin x + 4\cos x + 1$. Tìm giá trị lớn nhất (max) và nhỏ nhất (min) của $y$?`,
        loiGiai: String.raw`Chia cả hai vế cho 5: $\frac{y}{5} = \frac{3}{5}\sin x + \frac{4}{5}\cos x + \frac{1}{5}$
Đặt $\cos \alpha = \frac{3}{5}$ và $\sin \alpha = \frac{4}{5}$. Khi đó phương trình trở thành:
$\frac{y}{5} = \sin x \cos \alpha + \cos x \sin \alpha + \frac{1}{5} \Leftrightarrow \frac{y}{5} = \sin(x + \alpha) + \frac{1}{5}$

Vì $-1 \le \sin(x + \alpha) \le 1$ nên:
$-1 + \frac{1}{5} \le \frac{y}{5} \le 1 + \frac{1}{5} \Leftrightarrow \frac{-4}{5} \le \frac{y}{5} \le \frac{6}{5}$
Nhân cả 3 vế với 5, ta được: $-4 \le y \le 6$
Vậy $y_{\min} = -4$ và $y_{\max} = 6$.`,
        tuDuy: String.raw``
    },
    {
        id: "7_ly_thuyet_chot_dieu_kien_co_nghiem_phuong_trinh_bac_nhat",
        chuyenDe: "luong-giac",
        loaiTag: "Kiến thức",
        tieuDe: "7. Lý thuyết chốt: Điều kiện có nghiệm phương trình bậc nhất",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (6.0+)
Nội dung:
- Điều kiện có nghiệm của phương trình lượng giác: $a\sin x + b\cos x = c \Leftrightarrow a^2 + b^2 \ge c^2$. (Lưu ý: Công thức này được ghi chép lặp lại ở cả Trang 24 và Trang 30 của Tài liệu 2).`,
        loiGiai: String.raw``,
        tuDuy: String.raw``
    },
    {
        id: "8_cac_cong_thuc_hinh_hoc_vat_ly_co_chua_ham_luong_giac",
        chuyenDe: "luong-giac",
        loaiTag: "Kiến thức",
        tieuDe: "8. Các công thức Hình học / Vật lý có chứa hàm Lượng giác",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.0+) (Ghi chú bổ sung: Nội dung này nằm ở Trang 25 Tài liệu 2, chứa các công thức sử dụng Lượng giác).
Nội dung: 
$\omega = \frac{\Delta \alpha}{\Delta t}$ [Hình vẽ minh họa: Một đường tròn có bán kính biểu diễn góc ở tâm $\Delta \alpha$ và độ dời để minh họa cho vận tốc góc $\omega$]

$R = \frac{a}{2\sin A} = \dots = \frac{abc}{4S_{ABC}} \text{ (Bán kính đường tròn ngoại tiếp)}$

$W = \cos^2 \alpha \cdot \frac{h^2}{d^2}$ [Hình vẽ minh họa: Một tam giác vuông có cạnh huyền là $d$, cạnh góc vuông là chiều cao $h$, góc nhọn kề cạnh góc vuông dưới đáy là $\alpha$. Ký hiệu mô tả tương quan hình học]`,
        loiGiai: String.raw``,
        tuDuy: String.raw``
    },
    {
        id: "1_dem_so_bo_nghiem_thoa_man_bat_dang_thuc",
        chuyenDe: "to-hop-xac-suat",
        loaiTag: "Bài toán",
        tieuDe: "1. Đếm số bộ nghiệm thỏa mãn bất đẳng thức",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Tổ hợp - Xác suất: Có bao nhiêu bộ số $(a, b, c)$ thỏa mãn $3 \le a \le b \le c \le 20$?`,
        loiGiai: String.raw`$\Rightarrow a < b+1 < c+2 \le 21 \Rightarrow C_{19}^3$ (Tổ hợp chập 3 của 19 phần tử).
Note: Cứ 1 bộ 3 số thì chỉ có 1 bộ thỏa mãn ($x < y < z$).`,
        tuDuy: String.raw``
    },
    {
        id: "2_xac_suat_chia_do_vat_dung_bien_co_doi",
        chuyenDe: "to-hop-xac-suat",
        loaiTag: "Bài toán",
        tieuDe: "2. Xác suất chia đồ vật (Dùng biến cố đối)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.5+)
Nội dung: +> Bài toán xác suất: Có 8 quả (táo/bưởi), xác suất sao cho 1 đứa không chia hết: $\frac{2}{8} \Rightarrow$ không chia hết: $\frac{6}{8}$.
$\Rightarrow$ Đề bài: $1 - (\text{xác suất sao cho quả không chia hết}) > \frac{3}{4}$`,
        loiGiai: String.raw`$\Rightarrow 1 - \left( \frac{6}{8} \cdot \frac{5}{7} \cdot \frac{4}{6} \cdot \frac{3}{5} \right) = 0,78 > \frac{3}{4}$.
$\Rightarrow$ Chỉ cần rút 4 quả. (Còn 4 quả không chia hết, lấy 1 quả không chia hết).`,
        tuDuy: String.raw``
    },
    {
        id: "3_xac_suat_chon_3_hoc_sinh_ngoi_thanh_cap_so_cong",
        chuyenDe: "to-hop-xac-suat",
        loaiTag: "Bài toán",
        tieuDe: "3. Xác suất chọn 3 học sinh ngồi thành cấp số cộng",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: +> Bài toán tổ hợp - xác suất: Chọn ô... nếu bắt buộc phải có 2 ô liên tiếp thì... Trong dãy có $2n+1$ học sinh. 3 học sinh được chọn ngồi thành cấp số cộng là có xác suất là $\frac{31}{4368}$.`,
        loiGiai: String.raw`Gọi vị trí 3 học sinh là $a, b, c$. $\Rightarrow a + c = 2b \Rightarrow a, c$ phải cùng lẻ hoặc cùng chẵn.
Trường hợp 1: cùng chẵn $\Rightarrow$ có $n$ số chẵn $\Rightarrow$ cách chọn là $C_n^2$.
Trường hợp 2: cùng lẻ $\Rightarrow$ có $n+1$ số lẻ $\Rightarrow$ cách chọn là $C_{n+1}^2$.
$\Rightarrow \text{Xác suất} = \frac{C_n^2 + C_{n+1}^2}{C_{2n+1}^3}$`,
        tuDuy: String.raw``
    },
    {
        id: "4_chu_y_giai_toan_to_hop_xac_suat_dau_hieu_chia_het",
        chuyenDe: "to-hop-xac-suat",
        loaiTag: "Kiến thức",
        tieuDe: "4. Chú ý giải toán Tổ hợp - Xác suất (Dấu hiệu chia hết)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Chú ý giải toán tổ hợp - xác suất:`,
        loiGiai: String.raw`- Phải luôn ghi nhớ các trường hợp của xác suất.
- Các chữ số có tổng chia hết cho $9 \Rightarrow$ Số đó chia hết cho 9.
- Các chữ số có tổng chia hết cho $3 \Rightarrow$ Số đó chia hết cho 3.
- Các số chia hết cho $4 \Rightarrow 2$ chữ số cuối cùng phải chia hết cho 4.
- Bài toán tìm chữ số tận cùng là gì $\Rightarrow$ Dùng vòng lặp số dư để tìm.
Ví dụ: Tìm chữ số tận cùng của $2024^n \Rightarrow$ Xét tận cùng là $4^n$. Vì $4^1=4, 4^2=16, 4^3=64...$ nên số cuối sẽ lặp lại chu kỳ chẵn/lẻ.
- Có bao nhiêu số từ 1 đến $n$ chia hết cho một số $\Rightarrow$ Công thức xấp xỉ bằng phần nguyên: $\left\lfloor \frac{n}{\text{ƯCLN}} \right\rfloor + 1$.
- Xác suất của phần giao $\Rightarrow$ Dùng ước chung lớn nhất (ƯCLN).`,
        tuDuy: String.raw``
    },
    {
        id: "5_ky_thuat_dem_so_lan_xuat_hien_vet_dau_loang_da_giac",
        chuyenDe: "to-hop-xac-suat",
        loaiTag: "Kiến thức",
        tieuDe: "5. Kỹ thuật Đếm (Số lần xuất hiện, Vết dầu loang, Đa giác)",
        hinhAnhLeft: "./images/hinh_5_ky_thuat_dem_so_lan_xuat_hien_vet_dau_loang_da_giac.png",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Sơ đồ đường đi từ A chia ra các hướng X và B, sau đó tụ lại mũi tên về Y và cuối cùng đến C. Chú thích các đường đi tương ứng có x và y cách, tổng lại là x+y cách]
Nội dung:`,
        loiGiai: String.raw`- Phương pháp đếm số lần xuất hiện $n$ chữ số: $(\text{Các số}) \cdot (\text{Số lần xuất hiện}) \cdot (10^n + 10^{n-1} + \dots + 1)$

- Kỹ thuật vết dầu loang (đếm số đường đi): Ví dụ: Có $x$ cách đi từ $A \to B$ này qua nhánh khác... $\Rightarrow$ có $x + y$ cách đi từ $A$ đến $C$.

- Tập hợp có $m$ phần tử. Có một dãy nhị phân có độ dài $n$ chữ số thì có $2^n$ tập con. (Ghi chú gốc: Có $m$ dãy nhị phân có độ dài $n$ chữ $\Rightarrow$ Có $2^m$ tập con).

+> Đếm số đa giác: Xác định xem các đỉnh có liền nhau không (có thẳng hàng không). $\Rightarrow$ Dùng tổ hợp $C$ cách chọn.

+> Nếu cách chọn được lặp lại, ta phải trừ trường hợp tất cả cùng loại (thì không được lấy trường hợp cho cùng nhóm). Nhớ kỹ.

- Với đa giác $n$ đỉnh $\Rightarrow$ Số giao điểm đường chéo: $\begin{cases} \text{Nếu không có 3 đường đồng quy: } C_n^4 \\ \text{Có đường chéo: } C_n^2 - n \end{cases}$

- Trường hợp 1: Chọn số chia hết cho 2. 2 số chia hết cho 2: $C_k^2$.`,
        tuDuy: String.raw``
    },
    {
        id: "6_cong_thuc_legendre_so_mu_cua_so_nguyen_to_trong_n_giai_thua",
        chuyenDe: "to-hop-xac-suat",
        loaiTag: "Kiến thức",
        tieuDe: "6. Công thức Legendre (Số mũ của số nguyên tố trong n!)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: +> Phân tích giai thừa ra thừa số nguyên tố (Công thức Legendre): Khi phân tích $n!$ thành các thừa số nguyên tố, số mũ lớn nhất của số nguyên tố $p$ chia hết $n!$ là:`,
        loiGiai: String.raw`$v_p(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^2} \right\rfloor + \dots$ 
(với $\lfloor x \rfloor$ là phần nguyên của $x$, làm tròn xuống giá trị số nguyên gần nhất lớn nhất).`,
        tuDuy: String.raw``
    },
    {
        id: "7_xac_suat_co_dieu_kien_va_bien_co_xung_khac",
        chuyenDe: "to-hop-xac-suat",
        loaiTag: "Kiến thức",
        tieuDe: "7. Xác suất có điều kiện và Biến cố xung khắc",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.5+)
Nội dung:
- Biến cố xung khắc: Ký hiệu $A \cap B = \emptyset$.`,
        loiGiai: String.raw`(*) Xác suất điều kiện: $P(B|A)$ là xác suất biến cố $B$ xảy ra khi biến cố $A$ đã xảy ra.
$P(B|A) = \frac{n_{AB}}{n_A} = \frac{P(AB)}{P(A)}$ (Với $n_{AB}$ là số phần tử giao của $A$ và $B$).
$\Rightarrow P(A \cap B) = P(B) \cdot P(A|B) = P(A) \cdot P(B|A)$.`,
        tuDuy: String.raw``
    },
    {
        id: "8_phuong_sai_do_lech_chuan_va_sai_so",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "8. Phương sai, Độ lệch chuẩn & Sai số",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (6.0+)
Nội dung:
- Phương sai, độ lệch chuẩn: 
Phương sai: $S^2 = \frac{1}{n}\left[n_1(x_1 - \overline{x})^2 + n_2(x_2 - \overline{x})^2 + \dots + n_k(x_k - \overline{x})^2\right]$ 
$\overline{x}$ là số trung bình cộng.
Độ lệch chuẩn: $S = \sqrt{S^2}$.`,
        loiGiai: String.raw`- Sai số tuyệt đối, tương đối: 
Sai số tuyệt đối: $\Delta A = \frac{|A_1 - \overline{A}| + |A_2 - \overline{A}| + \dots + |A_n - \overline{A}|}{n}$ và $A = \overline{A} \pm \Delta A$.
Sai số tương đối: $\delta A = \frac{\Delta A}{\overline{A}}$.
Sai số tỉ đối: $\delta A = \frac{\Delta A}{\overline{A}} \cdot 100\%$.

Mở rộng: Ví dụ cho 1 phép toán $F = \frac{X \cdot Y}{Z}$. Sai số của $F$:
$\delta F = \delta X + \delta Y + \delta Z$ (trong phép nhân, phép chia ta cộng các sai số tương đối).`,
        tuDuy: String.raw``
    },
    {
        id: "9_thong_ke_mau_so_lieu_ghep_nhom_trung_vi_tu_phan_vi",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "9. Thống kê mẫu số liệu ghép nhóm (Trung vị, Tứ phân vị)",
        hinhAnhLeft: "./images/hinh_9_thong_ke_mau_so_lieu_ghep_nhom_trung_vi_tu_phan_vi.png",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Hình ảnh bổ trợ [H]: [Hình vẽ minh họa: Trục số biểu diễn dãy số liệu ghép nhóm gồm các điểm 1, 2, 6, 12, 14, 18, 21, 24. Có đường khoanh vùng minh họa các vị trí phân chia nhóm và điểm tứ phân vị.]
Nội dung:`,
        loiGiai: String.raw`Trung vị: $M_e = a + \left(\frac{\frac{n}{2} - c}{f_{\text{chứa}}}\right) \cdot h$
- Phân vị chia nhóm ra $Q_1, Q_2, Q_3$.
- Vị trí $Q_1 = \frac{n}{4}, Q_3 = \frac{3n}{4}$. Nếu ghép nhóm: $[a, b), [c, d)$
  $Q_1 = a + \frac{b - a}{f_{\text{chứa dãy}}} \cdot \left(\frac{n}{4} - f_{\text{trước}}\right)$.
- Lấy 1 số ở giữa do số lượng ghép nhóm.`,
        tuDuy: String.raw``
    },
    {
        id: "1_tim_so_hang_tong_quat_cua_he_thuc_truy_hoi_cap_so_nhan",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "1. Tìm số hạng tổng quát của hệ thức truy hồi (Cấp số nhân)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Dãy số: Cho hệ điều kiện: $\begin{cases} u_1 = 2 \\ u_{n+1} + 4u_n = 4 - 5n \end{cases} \Rightarrow u_{2023} = ?$`,
        loiGiai: String.raw`Ta biến đổi phương trình truy hồi: $u_{n+1} = -4u_n - 5n + 4$ 
Thêm hai vế với lượng $(n + 1)$:
$u_{n+1} + n + 1 = -4u_n - 5n + 4 + n + 1$
$u_{n+1} + n + 1 = -4u_n - 4n + 5$ (Chỗ này biến đổi để đưa về dạng cấp số nhân. Theo nguyên bản tài liệu, ta đặt phụ):
Đặt $v_n = u_n + n - 1$. Ta có:
$v_{n+1} = u_{n+1} + (n+1) - 1 = -4u_n - 5n + 4 + n = -4u_n - 4n + 4 = -4(u_n + n - 1) = -4v_n$.
$\Rightarrow (v_n)$ là cấp số nhân với công bội $q = -4$. Số hạng đầu $v_1 = u_1 + 1 - 1 = 2$.
(Ghi chú gốc ghi $v_1 = 3$, ta tuân theo hướng biến đổi của gốc: Đặt $v_n = u_n + n \Rightarrow v_{n+1} = -4v_n \Rightarrow v_1 = u_1 + 1 = 3$).

Từ đó công thức tổng quát của cấp số nhân là: $v_n = v_1 \cdot q^{n-1}$
$\Rightarrow v_{2023} = 3 \cdot (-4)^{2022} = 3 \cdot 4^{2022}$
Trở lại biến cũ $u_n = v_n - n$:
$\Rightarrow u_{2023} = 3 \cdot (-4)^{2022} - 2023$.

Tương tự cho $u_{2022}$: $v_{2022} = 3 \cdot (-4)^{2021} \Rightarrow u_{2022} = 3 \cdot (-4)^{2021} - 2022$.`,
        tuDuy: String.raw``
    },
    {
        id: "2_tinh_tong_day_so_danh_gia_tong_phu_bang_phan_so",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "2. Tính tổng dãy số (Đánh giá tổng phụ bằng phân số)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: +> Tính tổng dãy số: $P = \frac{3}{2^2} + \frac{8}{3^2} + \frac{15}{4^2} + \dots + \frac{399}{20^2}$`,
        loiGiai: String.raw`$P = \frac{2^2 - 1}{2^2} + \frac{3^2 - 1}{3^2} + \frac{4^2 - 1}{4^2} + \dots + \frac{20^2 - 1}{20^2}$
$= \left(1 - \frac{1}{2^2}\right) + \left(1 - \frac{1}{3^2}\right) + \left(1 - \frac{1}{4^2}\right) + \dots + \left(1 - \frac{1}{20^2}\right)$
Có 19 số hạng, do đó:
$P = 19 - \left( \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \dots + \frac{1}{20^2} \right)$

Đánh giá tổng phụ: $\frac{1}{k^2} < \frac{1}{k(k-1)} = \frac{1}{k-1} - \frac{1}{k}$
Áp dụng: 
$\frac{1}{2^2} < \frac{1}{1} - \frac{1}{2}$
$\frac{1}{3^2} < \frac{1}{2} - \frac{1}{3}$
$\dots$
$\frac{1}{20^2} < \frac{1}{19} - \frac{1}{20}$

Cộng vế theo vế các bất đẳng thức trên:
$\frac{1}{2^2} + \frac{1}{3^2} + \dots + \frac{1}{20^2} < \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \dots + \left(\frac{1}{19} - \frac{1}{20}\right) = 1 - \frac{1}{20} < 1$.

Quay lại biểu thức $P$: $P = 19 - (\text{một số lớn hơn 0 và nhỏ hơn 1})$.
$\Rightarrow 18 < P < 19$. $\Rightarrow P$ không phải là số nguyên.`,
        tuDuy: String.raw``
    },
    {
        id: "3_tinh_gioi_han_cua_day_so_chua_luy_thua",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "3. Tính giới hạn của dãy số chứa lũy thừa",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (6.5+)
Nội dung: +> Tính giới hạn: $\lim_{n \to +\infty} \frac{3^n - 5^n}{2 \cdot 3^n + 5^n}$`,
        loiGiai: String.raw`Chia cả tử và mẫu cho $5^n$ (cơ số lớn nhất):
$= \lim_{n \to +\infty} \frac{\left(\frac{3}{5}\right)^n - 1}{2\left(\frac{3}{5}\right)^n + 1}$
Vì $\lim_{n \to +\infty} \left(\frac{3}{5}\right)^n = 0$ do $\left| \frac{3}{5} \right| < 1$, ta có:
$= \frac{0 - 1}{2 \cdot 0 + 1} = -1$.`,
        tuDuy: String.raw``
    },
    {
        id: "4_tinh_chat_day_ti_so_bang_nhau",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "4. Tính chất dãy tỉ số bằng nhau",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (5.0+)
Nội dung: +> Tính chất dãy tỉ số bằng nhau:`,
        loiGiai: String.raw`$\frac{a}{b} = \frac{c}{d} = \frac{e}{f} = \frac{a + c - e}{b + d - f} = \frac{a - c + e}{b - d + f}$`,
        tuDuy: String.raw``
    },
    {
        id: "5_ky_thuat_dua_bien_ra_khoi_can_khi_xet_gioi_han_toi_am_vo_cuc",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "5. Kỹ thuật đưa biến ra khỏi căn khi xét giới hạn tới âm vô cực",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.5+)
Nội dung: +> Để ý giới hạn $\lim_{x \to -\infty}$ hay $\lim_{x \to +\infty}$. $\hookrightarrow$ Khi đưa ra khỏi căn bậc hai $\sqrt{x^2}$ hay $|x| = -x$.

Tìm giới hạn đồ thị Cho hàm số: $\lim_{x \to -\infty} \frac{x}{\sqrt{x^2+3}}$`,
        loiGiai: String.raw`Ta có: 
$\lim_{x \to -\infty} \frac{x}{\sqrt{x^2+3}} = \lim_{x \to -\infty} \frac{x}{|x|\sqrt{1 + \frac{3}{x^2}}}$
Vì $x \to -\infty$ nên $|x| = -x$.
$\Rightarrow \lim_{x \to -\infty} \frac{x}{-x\sqrt{1 + \frac{3}{x^2}}} = \frac{1}{-1} = -1$.`,
        tuDuy: String.raw``
    },
    {
        id: "6_danh_gia_bieu_thuc_bang_bdt_bunhiacopxki",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "6. Đánh giá biểu thức bằng BĐT Bunhiacopxki",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Cách 1: Áp dụng bất đẳng thức Bunhiacopxki (Bunyakovsky), ta có:`,
        loiGiai: String.raw`$((1)^2 + (1)^2)(x^2+y^2) \ge (x \cdot 1 + y \cdot 1)^2$
$\Leftrightarrow 2(x^2+y^2) \ge (x+y)^2$`,
        tuDuy: String.raw``
    },
    {
        id: "7_danh_gia_bieu_thuc_bang_bdt_cauchy_am_gm_co_ban",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "7. Đánh giá biểu thức bằng BĐT Cauchy (AM-GM) cơ bản",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.0+)
Nội dung: Áp dụng bất đẳng thức Cauchy (Cosi) cho biểu thức $y^2 + 2022$:`,
        loiGiai: String.raw`Ta có $y^2 + 1 \ge 2\sqrt{y^2 \cdot 1} = 2|y| \ge 2y$.`,
        tuDuy: String.raw``
    },
    {
        id: "8_danh_gia_bdt_am_gm_cho_logarit",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "8. Đánh giá BĐT AM-GM cho logarit",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đánh giá BĐT AM-GM: Cho $a, b > 0$. $10a + 20b \ge \dots$`,
        loiGiai: String.raw`(Các dòng biến đổi này khá nhòe, ghi chép lại theo nét viết): 
$P \ge \log(10a + 20b + 1) + \log(100b + 1) \dots \Rightarrow$
Dấu "=" xảy ra $\Leftrightarrow 25a^2 = b^2 \Rightarrow 5a = b$.
$\Rightarrow$ Có hệ: $\begin{cases} 5a = b \\ \log(10a + 1) + \dots = 2 \end{cases}$`,
        tuDuy: String.raw``
    },
    {
        id: "9_dung_bdt_am_gm_giai_phuong_trinh_mu",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "9. Dùng BĐT AM-GM giải phương trình Mũ",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Xét biểu thức $3^{-t - \frac{4}{t}}$: Vì $t < 0 \Rightarrow -t > 0, -\frac{4}{t} > 0$.`,
        loiGiai: String.raw`Áp dụng bất đẳng thức AM-GM (Cauchy) cho hai số dương $-t$ và $-\frac{4}{t}$:
$-t - \frac{4}{t} \ge 2\sqrt{(-t)\left(-\frac{4}{t}\right)} = 2\sqrt{4} = 4$.
$\Rightarrow 3^{-t - \frac{4}{t}} \ge 3^4 = 81$.`,
        tuDuy: String.raw``
    },
    {
        id: "10_bat_dang_thuc_bernoulli",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "10. Bất đẳng thức Bernoulli",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung:`,
        loiGiai: String.raw`- Bất đẳng thức Bernoulli: $(1 + x)^n \ge 1 + nx$.`,
        tuDuy: String.raw``
    },
    {
        id: "11_tong_hop_cong_thuc_bat_dang_thuc_vdc",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "11. Tổng hợp công thức Bất đẳng thức VDC",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: (*) Bất đẳng thức (BĐT):
+> Cauchy (Cosi).
+> Bunhiacopxki (Bunyakovsky).
+> Xét dấu: $a^2 \ge 0, a^2 \le 0, \forall a \in \mathbb{R}$.`,
        loiGiai: String.raw`+> Bất đẳng thức trị tuyệt đối: $| |x| - |y| | \le |x + y| \le |x| + |y|$.

- Bất đẳng thức Bunhiacopxki (Bunyakovsky): $(a^2 + b^2)(x^2 + y^2) \ge (ax + by)^2$
$(a^2 + b^2 + \dots)(x^2 + y^2 + \dots) \ge (ax + by + \dots)^2$
Dấu "=" xảy ra $\Leftrightarrow \frac{a}{x} = \frac{b}{y} = k$.

- Bất đẳng thức Cauchy-Schwarz dạng phân thức:
$\frac{a_1^2}{x_1} + \frac{a_2^2}{x_2} + \dots + \frac{a_n^2}{x_n} \ge \frac{(a_1 + a_2 + \dots + a_n)^2}{x_1 + x_2 + \dots + x_n}$
Dấu "=" xảy ra $\Leftrightarrow \frac{a_1}{x_1} = \frac{a_2}{x_2} = \dots = \frac{a_n}{x_n}$.

- Bất đẳng thức Minkowski:
$\sqrt{a^2 + b^2} + \sqrt{m^2 + n^2} \ge \sqrt{(a + m)^2 + (b + n)^2}$
Dấu "=" xảy ra $\Leftrightarrow \frac{a}{m} = \frac{b}{n} = k > 0$.`,
        tuDuy: String.raw``
    }
    {
        id: "12_bai_toan_chia_het_tim_min",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "12. Bài toán chia hết - Tìm Min",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: +> Bài toán chia hết: Có $x^2 + y + 1$ chia hết cho $xy$ hay $x+y$ đạt giá trị nhỏ nhất (min).`,
        loiGiai: String.raw`$\Rightarrow x^2 + 1 \vdots y$
$\Rightarrow y_{\min} \Leftrightarrow y = x - 1 \Rightarrow y = \frac{x^2-1}{x-1}$`,
        tuDuy: String.raw``
    },
    {
        id: "13_tinh_chat_chia_het_co_ban",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "13. Tính chất chia hết cơ bản",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Cơ bản (6.0+)
Nội dung: +> Tính chất chia hết:`,
        loiGiai: String.raw`$a^n - b^n \vdots a - b$
$a^n + b^n \vdots a + b \text{ (với } n \text{ lẻ)}$`,
        tuDuy: String.raw``
    },
    {
        id: "14_tim_so_du_cua_luy_thua_lon_bang_nhi_thuc_newton_va_dong_du",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "14. Tìm số dư của lũy thừa lớn bằng Nhị thức Newton và Đồng dư",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Ví dụ: Tìm số dư của $2^{100}$ chia cho 9.`,
        loiGiai: String.raw`Ta có: $2^{100} = 2 \cdot (2^3)^{33} = 2 \cdot (9-1)^{33}$
Khai triển Nhị thức Newton:
$= 2 \cdot \left( 9^{33} - C_{33}^1 \cdot 9^{32} + \dots - C_{33}^{32} \cdot 9 \cdot 1^{32} - 1 \right)$
$= 2 \cdot (B \cdot 9 - 1)$ (với $B$ là tổng các số hạng nguyên)
$\Rightarrow 2^{100} = 2 \cdot B \cdot 9 - 2$
Vì $-2 \equiv 7 \pmod 9 \Rightarrow 2^{100}$ chia 9 dư 7.

Cách 2 (Dùng đồng dư thức):
$2^{100} = 2^{6 \cdot 16 + 4} = (2^6)^{16} \cdot 2^4$ 
Có: $2^6 \equiv 1 \pmod 9$
$\Rightarrow 2^{100} \equiv 1^{16} \cdot 16 \equiv 16 \equiv 7 \pmod 9$. 
Vậy $2^{100}$ chia 9 dư 7.`,
        tuDuy: String.raw``
    },
    {
        id: "15_giai_phuong_trinh_diophantine_nghiem_nguyen",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "15. Giải phương trình Diophantine (Nghiệm nguyên)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.5+)
Nội dung: +> Giải phương trình nghiệm nguyên:
$4m^3 + m = 12n^3 + n$`,
        loiGiai: String.raw`$\Leftrightarrow (m-n)(4m^2 + 4mn + 4n^2 + 1) = 8n^3$
Giả sử $p$ là số nguyên tố chung của $(m-n)$ và $(4m^2 + 4mn + 4n^2 + 1)$
$\Rightarrow \begin{cases} 4m^2 + 4mn + 4n^2 + 1 \vdots p \\ m-n \vdots p \Rightarrow m \equiv n \pmod p \end{cases}$
Thay $m \equiv n$ vào biểu thức trên: $\Rightarrow 12n^2 + 1 \vdots p$.
Lại có tích của chúng bằng $8n^3 \Rightarrow 8n^3 \vdots p \Rightarrow p | 8n^3$.
Vì $12n^2+1$ là số lẻ nên $p$ lẻ $\Rightarrow p | n$.
Nếu $p | n \Rightarrow 12n^2 \vdots p$, kết hợp với $12n^2+1 \vdots p \Rightarrow 1 \vdots p$ (Vô lý).
$\Rightarrow p = 1$.
$\Rightarrow (m-n)$ và $(4m^2+4mn+4n^2+1)$ là hai số nguyên tố cùng nhau. Mà tích của chúng bằng $(2n)^3$, nên mỗi số phải là một lập phương đúng. 
$\Rightarrow m-n$ là 1 số nguyên lập phương $x^3$. 
$4m^2+4mn+4n^2+1 = y^3$.
$\Rightarrow m-n = \frac{(2n)^3}{y^3} \Rightarrow m-n \text{ là lập phương của 1 số.}$`,
        tuDuy: String.raw``
    },
    {
        id: "16_chung_minh_da_thuc_khong_co_nghiem_nguyen",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Bài toán",
        tieuDe: "16. Chứng minh Đa thức không có nghiệm nguyên",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: +> Cho đa thức $P(x) = ax^3 + bx^2 + cx + d$. Chứng minh: Nếu $P(x) = 1$ có 3 nghiệm nguyên phân biệt $\Rightarrow P(x) = 0$ không có nghiệm nguyên.`,
        loiGiai: String.raw`Ta có: $P(x) = 1$ có 3 nghiệm nguyên phân biệt $m_1, m_2, m_3$.
$\Rightarrow P(x) - 1 = a(x - m_1)(x - m_2)(x - m_3) \cdot k$ (với $a, k$ là các hằng số)

Nếu $P(x) = 0$ có nghiệm nguyên $x$, thì:
$-1 = a(x - m_1)(x - m_2)(x - m_3) \cdot k$
Vì $x, m_1, m_2, m_3$ đều là số nguyên nên $(x - m_1), (x - m_2), (x - m_3)$ là các số nguyên.
Để tích các số nguyên bằng $-1$, ta chỉ có thể phân tích: $-1 = -1 \cdot 1 \cdot 1$
Nhưng mà các nghiệm $m_1 \neq m_2 \neq m_3$ nên các hiệu số $(x-m_1), (x-m_2), (x-m_3)$ phải phân biệt. Việc phân tích -1 thành 3 thừa số nguyên phân biệt là điều vô lý.
$\Rightarrow P(x) = 0$ không có nghiệm nguyên.`,
        tuDuy: String.raw``
    },
    {
        id: "17_vi_et_bac_3_va_tinh_toan_delta_phuong_trinh_bac_3",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "17. Vi-et bậc 3 và Tính toán Delta phương trình bậc 3",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: +> Định lý Vi-ét bậc 3: Phương trình:
$ax^3 + bx^2 + cx + d = 0 \quad (a \neq 0)$`,
        loiGiai: String.raw`$\begin{cases} x_1 + x_2 + x_3 = -\frac{b}{a} \\ x_1x_2 + x_2x_3 + x_3x_1 = \frac{c}{a} \\ x_1x_2x_3 = -\frac{d}{a} \end{cases}$

Biểu thức delta của bậc 3:
$\Delta = 18abcd - 4b^3d + b^2c^2 - 4ac^3 - 27a^2d^2$
- Nếu $\Delta > 0 \Rightarrow$ Phương trình có 3 nghiệm phân biệt.
- Nếu $\Delta = 0 \Rightarrow$ Phương trình có 3 nghiệm, trong đó có nghiệm kép.
- Nếu $\Delta < 0 \Rightarrow$ Phương trình có 1 nghiệm thực, 2 nghiệm phức.`,
        tuDuy: String.raw``
    },
    {
        id: "18_bi_kip_tim_chu_so_tan_cung_so_cac_chu_so",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "18. Bí kíp Tìm chữ số tận cùng & Số các chữ số",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (7.5+)
Nội dung: +> Tìm chữ số tận cùng:`,
        loiGiai: String.raw`- Các số có chữ số tận cùng là 0, 1, 5, 6 khi nâng lên lũy thừa mũ $n$ bất kỳ vẫn luôn có tận cùng là 0, 1, 5, 6.
- Các số đuôi 25, 76 khi nâng lên lũy thừa cũng giữ nguyên tận cùng là 25, 76.
- Để làm các bài toán tìm chữ số tận cùng, cần đặc biệt lưu ý các cơ số vòng lặp: 0, 1, 4, 5, 6 và 9.
- Để ý việc tách số về dạng cơ số gọn. Ví dụ: Để tìm số dư khi chia cho 10, ta tách $10 = 2 \cdot 5$. Cố gắng để tách biểu thức về dạng $= 2^x \cdot 5^y$, tìm $x, y$ sau đó suy ra số dư.
- Tận cùng 3, 7, 9 với $a^n = a^{4k+r} (r = 0, 1, 2, 3) \Rightarrow a^n$ có tận cùng giống $a^r$.
- Tận cùng 2, 4, 8 (Tương tự quy tắc chu kỳ 4).
- 2 chữ số tận cùng thì xét số dư phép chia 100.
- 3 chữ số tận cùng thì xét số dư phép chia 1000.

+> Một số mẹo liên quan tới cấu tạo số:
- Số các chữ số của 1 số $A = [\log A] + 1$.
- Đặt là 1 số chính phương thì luôn chia hết cho các số bình phương.
- Cấu tạo số 9:
$\underbrace{99 \dots 9}_{n \text{ chữ số}} = 10^n - 1$
$\underbrace{m \dots m}_{n \text{ chữ số}} = m \cdot \frac{10^n - 1}{9}$`,
        tuDuy: String.raw``
    },
    {
        id: "19_cong_thuc_legendre_so_mu_lon_nhat_trong_giai_thua",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "19. Công thức Legendre (Số mũ lớn nhất trong giai thừa)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: +> Phân tích giai thừa ra thừa số nguyên tố (Công thức Legendre): Khi phân tích $n!$ thành các thừa số nguyên tố, số mũ lớn nhất của số nguyên tố $p$ chia hết $n!$ là:`,
        loiGiai: String.raw`$v_p(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^2} \right\rfloor + \dots$ 
(với $\lfloor x \rfloor$ là phần nguyên của $x$, làm tròn xuống giá trị số nguyên gần nhất lớn nhất).`,
        tuDuy: String.raw``
    },
    {
        id: "20_tong_hop_dinh_ly_so_hoc_vdc_euler_fermat_wilson_lagrange_bezout",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "20. Tổng hợp Định lý Số học VDC (Euler, Fermat, Wilson, Lagrange, Bezout)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: HSG / Vận dụng cực khó (9.5+)
Nội dung:`,
        loiGiai: String.raw`- Tổng các ước của 1 số:
$\sigma(n) = \frac{p_1^{m_1+1} - 1}{p_1 - 1} \cdot \frac{p_2^{m_2+1} - 1}{p_2 - 1} \dots$
- Tổng số các ước nguyên dương của một số: $(n_1 + 1)(n_2 + 1) \dots (n_k + 1)$

- Bội chung nhỏ nhất $[a, b]$:
$(a, b) \cdot [a, b] = a \cdot b \Rightarrow [a, b] = \frac{a \cdot b}{(a,b)}$

- Với $a, b \in \mathbb{Z} : (a, b) = 1 \Leftrightarrow \exists x, y \in \mathbb{Z} : ax + by = 1$
- $n = p_1^{n_1} p_2^{n_2} \dots p_k^{n_k} \Rightarrow$ Số các số nguyên tố cùng nhau với $n$ là:
$\phi(n) = n \left(1 - \frac{1}{p_1}\right) \left(1 - \frac{1}{p_2}\right) \dots \left(1 - \frac{1}{p_k}\right)$
- $\phi()$ hàm số Euler để chỉ các số nguyên tố cùng nhau.
- Với $n = p$ là số nguyên tố thì $\phi(n) = n - 1$.
- Nếu $(a, b) = 1$ thì $\phi(a \cdot b) = \phi(a) \cdot \phi(b)$.

ĐỒNG DƯ
$a \equiv b \pmod m \Leftrightarrow a - b \vdots m \Leftrightarrow \exists x \in \mathbb{Z} \text{ sao cho } a - b = x \cdot m$
- Tính chất bắc cầu:
$a \equiv b \pmod m ; b \equiv c \pmod m \Rightarrow a \equiv c \pmod m$
- Cộng, trừ đồng dư:
$a \equiv b \pmod m, c \equiv d \pmod m \Rightarrow a \pm c \equiv b \pm d \pmod m$
- $k \cdot a \equiv k \cdot b \pmod m$
- $a \cdot c \equiv b \cdot d \pmod m$
- $a^k \equiv b^k \pmod m$
- ƯCLN: $a \equiv b \pmod m \Rightarrow (a, m) = (b, m)$
- $a \equiv b \pmod m$, với $k \in \text{ƯC}(a, b, m), k > 0$
$\Rightarrow \frac{a}{k} \equiv \frac{b}{k} \pmod{\frac{m}{k}}$
- $ac \equiv bc \pmod m \Rightarrow a \equiv b \pmod{\frac{m}{(c, m)}}$

- $(a, m) = 1$ thì $a^{\phi(m)} \equiv 1 \pmod m$ (Định lý Euler)
- $n$ là số nguyên tố thì: $a^{n-1} \equiv 1 \pmod n$ (với $(a, n) = 1$) (Định lý Fermat bé)
- Định lý Wilson: $p$ là số nguyên tố $\Leftrightarrow (p-1)! \equiv -1 \pmod p$

- Định lý Bezout đa thức: Cho 2 đa thức $P(x)$ và $Q(x)$ có hệ số nguyên và $\gcd(P(x), Q(x)) = d(x) \Rightarrow$ Tồn tại $U(x), V(x)$ sao cho:
$P(x) \cdot U(x) + Q(x) \cdot V(x) = d(x) \Rightarrow$ Nếu $P(x)$ và $Q(x)$ đồng nguyên tố $\Rightarrow P(x) \cdot U(x) + Q(x) \cdot V(x) = 1$

- Định lý Dirichlet cấp cao: Có 2 số nguyên tố $\gcd(a, b) = 1 \Rightarrow$ Cấp số cộng $a, a+b, a+2b, \dots, a+nb$ chứa vô hạn phần tử số nguyên tố. 
Ví dụ: $4, 3 \Rightarrow 4 + 3n$ chứa vô hạn số nguyên tố.

- Bổ đề Hensel: $f(x) \in \mathbb{Z}[x]$ và số nguyên tồn tại sao cho
$f(x_0) \equiv 0 \pmod p$. Và $f'(x_0) \not\equiv 0 \pmod p$. Khi đó, với mọi số nguyên $k \ge 1$, có 1 nghiệm duy nhất $x_k$ sao cho: $x_k \equiv x_0 \pmod p$ và $f(x_k) \equiv 0 \pmod{p^k}$

- Nội suy Lagrange: Để tìm phương trình đường thẳng đi qua $n$ điểm $(x_1, y_1), \dots \Rightarrow$ Tồn tại 1 đa thức $P(x)$ bậc không quá $n$ sao cho $P(x_i) = y_i$ với $i = 1, \dots, n$.
$P(x) = \sum_{i=1}^{n} y_i \prod_{j \neq i} \frac{x - x_j}{x_i - x_j}$

- Đa thức $f(x)$ chia cho $(x - a)$ dư $r \Rightarrow f(a) = r$.`,
        tuDuy: String.raw``
    },
    {
        id: "21_meo_toan_phuong_phap_tu_duy_so_hoc_quy_nap_phan_chung",
        chuyenDe: "day-so-dai-so",
        loaiTag: "Kiến thức",
        tieuDe: "21. Mẹo toán / Phương pháp tư duy Số học (Quy nạp & Phản chứng)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: MẸO TOÁN: 
+> Khi tìm điều kiện chia hết hãy để ý Ước chung lớn nhất (ƯCLN) và Bội chung nhỏ nhất (BCNN).
+> Khi $a, b$ cùng chung ước $\Rightarrow (a^n - b^m) \vdots d$`,
        loiGiai: String.raw`Ví dụ:
$y = \frac{n^2 + 4}{n + 4}$. Tìm $n \in \mathbb{N}^*$ để $y$ chia hết cho $d$ (chưa cho giá trị cụ thể).
$\Rightarrow \left[ (n+4)^2 - (n^2 + 4) \right] \vdots d$
$\Rightarrow$ Biến đổi để đưa tiếp về dạng chia hết cho $(n+4)$ hoặc $(n^2+4)$.

+> Phương pháp quy nạp: Để chứng minh mệnh đề $P$ phụ thuộc vào $n \in \mathbb{N}, \forall n \ge n_0$, ta chỉ ra $P$ đúng với $n_0$, sau đó giả sử mệnh đề $P$ đúng với $n \in \mathbb{N}, n \ge n_0$ thì $P$ đúng với $(n+1) \in \mathbb{N}$.
- Ví dụ: Chứng minh $\forall n \in \mathbb{N}^*, 2^n > n$. Cho $n = 1 \Rightarrow 2^1 > 1$ (Đúng).
Giả sử mệnh đề đúng với $n \ge 1$, tức là $2^n > n$. Ta chứng minh đúng với $n + 1$:
$2^{n+1} = 2^n \cdot 2 = 2^n + 2^n > n + 1 \text{ (do } 2^n > n \ge 1)$.
$\Rightarrow 2^n > n, \forall n \in \mathbb{N}^*$.

+> Phương pháp phản chứng: Chứng minh một mệnh đề $P$ đúng bằng cách giả sử $P$ sai, rồi lập luận dẫn đến điều vô lý (mâu thuẫn). Nghĩa là chứng minh
$P \Rightarrow Q \equiv \overline{Q} \Rightarrow \overline{P}$.
- Ví dụ: Chứng minh "Nếu $n^2$ là số chẵn $\Rightarrow n$ là số chẵn" với mọi $n \in \mathbb{N}^*$.
$\Rightarrow$ Giả sử $\exists n \in \mathbb{N}^*$ là số lẻ $\Rightarrow \exists k \in \mathbb{N}$ để $n = 2k + 1$.
$\Rightarrow n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$ (kết quả là số lẻ). Điều này trái với giả thiết ban đầu $n^2$ là số chẵn $\Rightarrow$ mệnh đề $\overline{Q} \Rightarrow \overline{P}$ đúng $\Rightarrow$ Mệnh đề $P \Rightarrow Q$ là đúng.
- Tóm lại: Giả sử mệnh đề sai, rồi chứng minh mệnh đề đó dẫn đến sự vô lý $\Rightarrow$ Mệnh đề gốc là đúng. (Sơ đồ lôgic: Giả sử $\overline{Q} \Rightarrow \text{Điều vô lý} \Rightarrow Q \text{ là đúng}$).`,
        tuDuy: String.raw``
    },
    {
        id: "1_danh_gia_hai_ve_phuong_trinh_logarit",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "1. Đánh giá hai vế phương trình Logarit",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Biến đổi phương trình:
$\log_{2022}[(x^4-2x^2+2023)^{y^2+2022}] = 2y+2021$`,
        loiGiai: String.raw`$\Leftrightarrow (y^2+2022)\log_{2022}(x^4-2x^2+2023) = 2y+2021$
$\Leftrightarrow \log_{2022}((x^2-1)^2+2022) = \frac{2y+2021}{y^2+2022}$
Đánh giá: Vế trái $\ge 1$, Vế phải $\le 1$. Dấu "=" xảy ra khi:
$\begin{cases} (x^2 - 1)^2 = 0 \Rightarrow x = \pm 1 \\ y = 1 \end{cases}$
Note: Biến đổi theo đánh giá luôn phải nhìn xem vế trái và vế phải.`,
        tuDuy: String.raw``
    },
    {
        id: "2_logarit_da_bien_phuong_phap_ham_dac_trung_lap_bang_gia_tri",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "2. Logarit đa biến: Phương pháp Hàm đặc trưng & Lập bảng giá trị",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Đề bài: Giải phương trình nghiệm nguyên:
$\log_2[(x+1)(y+1)]^{y+1} = 4 - (x-1)(y+1)$`,
        loiGiai: String.raw`Bước 1: Khai triển và nhóm biến
Điều kiện: $(x+1)(y+1) > 0$. Hạ số mũ xuống theo tính chất của logarit, phương trình tương đương:
$(y+1)\log_2[(x+1)(y+1)] = 4 - (x-1)(y+1)$
Chia cả hai vế cho $(y+1)$. (Dễ thấy $y = -1$ không là nghiệm vì khi đó $0 = 4$ vô lý):
$\log_2[(x+1)(y+1)] = \frac{4}{y+1} - (x-1)$
Tách logarit của một tích ở vế trái (Xét trường hợp $x+1>0$ và $y+1>0$):
$\log_2(x+1) + \log_2(y+1) = \frac{4}{y+1} - x + 1$

Bước 2: Thiết lập hàm đặc trưng
Cố tình cộng thêm 2 vào hai vế để gom $x$ về một bên, $y$ về một bên và thiết lập cấu trúc đối xứng:
$\log_2(x+1) + \log_2(y+1) + 2 = \frac{4}{y+1} - (x-1) + 2$
$\Leftrightarrow \log_2(x+1) + (x+1) = 2 - \log_2(y+1) + \frac{4}{y+1}$
$\Leftrightarrow \log_2(x+1) + (x+1) = \log_2 4 - \log_2(y+1) + \frac{4}{y+1}$
$\Leftrightarrow \log_2(x+1) + (x+1) = \log_2\left(\frac{4}{y+1}\right) + \frac{4}{y+1}$
Xét hàm số $f(t) = \log_2 t + t$ trên khoảng $(0, +\infty)$. Đạo hàm $f'(t) = \frac{1}{t \ln 2} + 1 > 0, \forall t > 0$. 
Suy ra hàm số $f(t)$ luôn đồng biến trên $(0, +\infty)$. Do đó, phương trình $f(x+1) = f\left(\frac{4}{y+1}\right)$ xảy ra khi và chỉ khi: $x+1 = \frac{4}{y+1} \Leftrightarrow (x+1)(y+1) = 4$

Bước 3: Lập bảng xét các trường hợp ước số của 4
Vì $x, y \in \mathbb{Z}$ nên $x+1$ và $y+1$ là các ước nguyên của 4. Ta có các hệ sau:
Trường hợp 1: $\Rightarrow \begin{cases} x+1 = 2 \\ y+1 = 2 \end{cases} \Rightarrow \begin{cases} x = 1 \\ y = 1 \end{cases}$ (Nhận)
Trường hợp 2: $\Rightarrow \begin{cases} x+1 = 1 \\ y+1 = 4 \end{cases} \Rightarrow \begin{cases} x = 0 \\ y = 3 \end{cases}$ (Loại)
Trường hợp 3: $\Rightarrow \begin{cases} x+1 = 4 \\ y+1 = 1 \end{cases} \Rightarrow \begin{cases} x = 3 \\ y = 0 \end{cases}$ (Loại)
Trường hợp 4: $\Rightarrow \begin{cases} x+1 = -2 \\ y+1 = -2 \end{cases} \Rightarrow \begin{cases} x = -3 \\ y = -3 \end{cases}$ (Nhận)
Trường hợp 5: $\Rightarrow \begin{cases} x+1 = -1 \\ y+1 = -4 \end{cases} \Rightarrow \begin{cases} x = -2 \\ y = -5 \end{cases}$ (Loại)
Trường hợp 6: $\Rightarrow \begin{cases} x+1 = -4 \\ y+1 = -1 \end{cases} \Rightarrow \begin{cases} x = -5 \\ y = -2 \end{cases}$ (Loại)

Cách 2: Cô lập biến và lập bảng giá trị
Từ phương trình hàm đặc trưng:
$x + 1 = \frac{4}{y+1} \Rightarrow x = \frac{4}{y+1} - 1 = \frac{3-y}{y+1}$
Để $x \in \mathbb{Z}$ thì $\frac{4}{y+1}$ là số nguyên
$\Rightarrow y+1 \in U(4) = \{-4, -2, -1, 1, 2, 4\}$. Lập bảng giá trị:
$y+1: \quad -4 \quad -2 \quad -1 \quad 1 \quad 2 \quad 4$
$y: \quad -5 \quad -3 \quad -2 \quad 0 \quad 1 \quad 3$
$x: \quad -2 \quad -3 \quad -5 \quad 3 \quad 1 \quad 0$
Kiểm tra điều kiện $x > 1 \Rightarrow x = 3, y = 0$ (Loại vì $y+1 > 0$ nhưng trong logarit có $y+1$).`,
        tuDuy: String.raw``
    },
    {
        id: "3_danh_gia_co_so_va_hoan_thanh_binh_phuong_bat_phuong_trinh_logarit",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "3. Đánh giá cơ số và Hoàn thành bình phương bất phương trình Logarit",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Đề bài: Có bao nhiêu cặp số nguyên $(x, y)$ thỏa mãn:
$\log_{x^2+5y^2+1}\left(4x-y+1.7\right) \ge 1$`,
        loiGiai: String.raw`Bước 1: Điều kiện và đánh giá cơ số
Ta thấy cơ số $x^2 + 5y^2 + 1 \ge 1$ với mọi $x, y \in \mathbb{Z}$. 
Trường hợp $x^2 + 5y^2 + 1 = 1 \Leftrightarrow x=0$ và $y=0$. Thay $(0, 0)$ vào bất phương trình ta có $\log_1(1.7) \ge 1$ (Vô lý vì cơ số logarit phải khác 1). 
Do đó, cơ số $x^2 + 5y^2 + 1 > 1$.

Bước 2: Phá logarit và hoàn thành bình phương
Vì cơ số lớn hơn 1, bất phương trình giữ nguyên chiều:
$4x - y + 1.7 \ge x^2 + 5y^2 + 1$
$\Leftrightarrow x^2 - 4x + 5y^2 + y \le 0.7$
$\Leftrightarrow (x^2 - 4x + 4) + 5\left(y^2 + \frac{1}{5}y + \frac{1}{100}\right) \le 0.7 + 4 + 5\left(\frac{1}{100}\right)$
$\Leftrightarrow (x - 2)^2 + 5\left(y + \frac{1}{10}\right)^2 \le 4.75$

Bước 3: Chặn khoảng biến y và xét trường hợp
Vì $(x - 2)^2 \ge 0$ với mọi $x$, ta suy ra:
$5\left(y + 0.1\right)^2 \le 4.75 \Rightarrow (y + 0.1)^2 \le 0.95$
$\Rightarrow -0.97 \le y + 0.1 \le 0.97 \Rightarrow -1.07 \le y \le 0.87$
Vì $y \in \mathbb{Z}$, biến $y$ chỉ có thể nhận hai giá trị là $y = -1$ hoặc $y = 0$.

Trường hợp 1: $y = -1$
Thay vào: $(x - 2)^2 + 5(-0.9)^2 \le 4.75 \Leftrightarrow (x - 2)^2 \le 0.7$
Vì $x \in \mathbb{Z}$, số chính phương duy nhất thỏa mãn là 0. $\Rightarrow x = 2$.
Cặp nghiệm: $(2, -1)$.

Trường hợp 2: $y = 0$
Thay vào: $(x - 2)^2 + 5(0.1)^2 \le 4.75 \Leftrightarrow (x - 2)^2 \le 4.7$
Vì $x \in \mathbb{Z}$, các số chính phương thỏa mãn là 0, 1, 4.
$\Rightarrow x - 2 \in \{-2, -1, 0, 1, 2\} \Rightarrow x \in \{0, 1, 2, 3, 4\}$.
Các cặp nghiệm: $(0, 0), (1, 0), (2, 0), (3, 0), (4, 0)$. 
Đối chiếu Bước 1, loại $(0,0)$. 
Kết luận: Có 5 cặp số nguyên $(x, y)$ thỏa mãn là $(2, -1), (1, 0), (2, 0), (3, 0), (4, 0)$.`,
        tuDuy: String.raw``
    }
    {
        id: "4_giai_phuong_trinh_mu_bang_cach_lay_logarit_hai_ve",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "4. Giải phương trình mũ bằng cách lấy Logarit hai vế (Điều kiện Delta)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đề: Có bao nhiêu số nguyên $x$ để tồn tại $y$ thỏa mãn $4^{x+y} = 3^{x^2+y^2}$?`,
        loiGiai: String.raw`Ta có:
$\log_3(4^{x+y}) = x^2 + y^2 \Leftrightarrow (x+y)\log_3 4 = x^2 + y^2$
$\Leftrightarrow y^2 - y\log_3 4 + x^2 - x\log_3 4 = 0$ Phương trình có nghiệm $y \Leftrightarrow \Delta \ge 0$
$\Leftrightarrow (\log_3 4)^2 - 4(x^2 - x\log_3 4) \ge 0$
$\Rightarrow -1,4 \le x \le 2,6$ Vì $x \in \mathbb{Z} \Rightarrow$ có 2 số $x$ là $x = 0, 1$. Note: Đưa về phương trình bậc 2 đối với tham số $x \Rightarrow$ đưa theo $x$.`,
        tuDuy: String.raw``
    },
    {
        id: "5_giai_he_logarit_mu_bang_bdt_va_phuong_phap_hinh_hoc",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "5. Giải hệ Logarit - Mũ bằng BĐT và Phương pháp Hình học",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Đề: Có bao nhiêu cặp số nguyên $(x, y)$ thỏa mãn $\log_3(x+y) = \log_4(x^2+y^2)$? Điều kiện: $x+y > 0$.`,
        loiGiai: String.raw`Đặt $\log_3(x+y) = \log_4(x^2+y^2) = t$
$\Rightarrow \begin{cases} x+y = 3^t \\ x^2+y^2 = 4^t \end{cases}$

Cách 1: Áp dụng bất đẳng thức Bunhiacopxki (Bunyakovsky), ta có:
$((1)^2 + (1)^2)(x^2+y^2) \ge (x \cdot 1 + y \cdot 1)^2$
$\Leftrightarrow 2(x^2+y^2) \ge (x+y)^2$
$\Rightarrow 2 \cdot 4^t \ge (3^t)^2 \Leftrightarrow 2 \cdot 4^t \ge 9^t$
$\Rightarrow \left(\frac{9}{4}\right)^t \le 2 \Rightarrow t \le \log_{\frac{9}{4}} 2 \approx 0,85$

Note: Đặt ẩn chung $t$. Dùng bất đẳng thức khi có $(x^2+y^2)$ và $(x+y)$; có $(x+y)^2 \le 2(x^2+y^2)$.

Cách 2: Giải theo phương pháp hình học.
$\begin{cases} x+y = 3^t \Rightarrow \text{Đường thẳng } (d): x+y - 3^t = 0 \\ x^2+y^2 = 4^t \Rightarrow \text{Đường tròn } (C): x^2+y^2 = (2^t)^2 \text{ tâm } I(0, 0), R = 2^t \end{cases}$
Để tồn tại nghiệm chung, đường thẳng và đường tròn phải cắt nhau:
$d(I, d) \le R \Leftrightarrow \frac{|-3^t|}{\sqrt{1^2+1^2}} \le 2^t \Rightarrow \frac{3^t}{\sqrt{2}} \le 2^t$
$\Rightarrow \left(\frac{3}{2}\right)^t \le \sqrt{2} \Rightarrow t \le 0,85$ Vì $x, y \in \mathbb{Z} \Rightarrow t \le 0$. Nếu $t = 0 \Rightarrow \begin{cases} x+y = 1 \\ x^2+y^2 = 1 \end{cases}$ Giải hệ ta được: $(x, y) = (1, 0)$ hoặc $(0, 1)$.

Note: Tách các vế cho hệ hình học:
- Đường thẳng $d$: $ax+by+c=0$
- Đường tròn $(C)$: $(x-a)^2+(y-b)^2 \le R^2$`,
        tuDuy: String.raw``
    },
    {
        id: "6_bien_doi_dai_so_chung_logarit_mu_ham_dac_trung",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "6. Biến đổi đại số chung Logarit & Mũ (Hàm đặc trưng)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Đề: Giải phương trình $\log_3(3x+3) + x = 2y + 9^y$ với $0 \le x \le 2022$.`,
        loiGiai: String.raw`Biến đổi phương trình:
$\log_3(3(x+1)) + x = \log_3(3^{2y}) + 3^{2y}$
$\Leftrightarrow \log_3(x+1) + 1 + x = 2y + 3^{2y}$
$\Leftrightarrow \log_3(x+1) + (x+1) = \log_3(3^{2y}) + 3^{2y}$ Xét hàm số đặc trưng $f(t) = \log_3 t + t$ (đồng biến vì $f'(t) > 0$).
$\Rightarrow f(x+1) = f(3^{2y}) \Rightarrow x+1 = 3^{2y}$. Vì $1 \le x+1 \le 2023 \Rightarrow 1 \le 3^{2y} \le 2023$.
$\Rightarrow 0 \le 2y \le \log_3 2023 \approx 6,93 \Rightarrow 0 \le y \le 3,46$.
Vì $y \in \mathbb{Z} \Rightarrow y \in \{0, 1, 2, 3\}$. Với mỗi giá trị $y$ tạo ra 1 giá trị $x \Rightarrow$ có 4 nghiệm.`,
        tuDuy: String.raw``
    },
    {
        id: "7_phuong_trinh_logarit_chua_can_dat_an_phu",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "7. Phương trình logarit chứa căn (Đặt ẩn phụ)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đề: Cho $\sqrt{\log_2 x} + \sqrt{\log_2 y} + \log_2 \sqrt{x} + \log_2 \sqrt{y} = 100$. Tính $x \cdot y = ?$`,
        loiGiai: String.raw`Điều kiện: $\log_2 x \ge 0, \log_2 y \ge 0$. Đặt
$\begin{cases} \sqrt{\log_2 x} = a \ge 0 \Rightarrow \log_2 x = a^2 \Rightarrow \log_2 \sqrt{x} = \frac{1}{2}a^2 \\ \sqrt{\log_2 y} = b \ge 0 \Rightarrow \log_2 y = b^2 \Rightarrow \log_2 \sqrt{y} = \frac{1}{2}b^2 \end{cases}$
Thay vào phương trình: $a + b + \frac{1}{2}a^2 + \frac{1}{2}b^2 = 100$
$\Leftrightarrow a^2 + b^2 + 2a + 2b = 200 \Leftrightarrow (a+1)^2 + (b+1)^2 = 202$
Vì $a, b \ge 0 \Rightarrow a+1 \ge 1, b+1 \ge 1$. Tổng hai bình phương số nguyên bằng 202, các trường hợp có thể là: $9^2 + 11^2 = 81 + 121 = 202$.
$\Rightarrow \begin{cases} a+1 = 9 \\ b+1 = 11 \end{cases} \text{ hoặc } \begin{cases} a+1 = 11 \\ b+1 = 9 \end{cases}$
$\Rightarrow \begin{cases} a = 8 \\ b = 10 \end{cases} \text{ hoặc } \begin{cases} a = 10 \\ b = 8 \end{cases}$
Dù trường hợp nào thì $\log_2 x + \log_2 y = a^2 + b^2 = 8^2 + 10^2 = 164$.
$\Rightarrow \log_2(xy) = 164 \Rightarrow xy = 2^{164}$.`,
        tuDuy: String.raw``
    },
    {
        id: "8_tim_min_max_bieu_thuc_logarit_2_bien_su_dung_dao_ham",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "8. Tìm Min, Max biểu thức Logarit 2 biến (Sử dụng đạo hàm)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Đề: Xét $a > b > 1$. Tìm $P_{\min}$. Với $P = \log_{\frac{a}{b}} (a^2) + 3\log_b \left(\frac{a}{b}\right)$`,
        loiGiai: String.raw`Ta có: $a > b > 1 \Rightarrow 0 < \log_a b < 1$. Đặt $\log_a b = t \Rightarrow 0 < t < 1$.
$P = \frac{4}{1 - \log_a b} + \frac{3}{\log_b a} - 3 \Leftrightarrow P = \frac{4}{1 - t} + 3t - 3$
$P' = \frac{4}{(1 - t)^2} - 3 = 0 \Leftrightarrow \frac{4}{(1 - t)^2} = 3 \Rightarrow (1 - t)^2 = \frac{4}{3} \Rightarrow t = 1 - \frac{2}{\sqrt{3}} \dots$
(Các phép tính đạo hàm này có chỗ sai sót trong bản gốc, ta tiếp tục bám theo chữ viết). Viết lại phương trình đạo hàm (theo ảnh gốc):
$P' = \frac{2(t-1)}{(t-1)^4} - \frac{3}{t^2} = 0 \Leftrightarrow \frac{8}{(t-1)^3} = \frac{3}{t^2}$
$\Rightarrow 8t^2 = 3(t^3 - 3t^2 + 3t - 1) \Rightarrow 3t^3 - 11t^2 + 9t - 3 = 0$
Note: Luôn phải để ý ẩn hiện. $\rightarrow$ Vì $a, b$ là 1 số nên ẩn ở đây phải là $t$ không phải là $x$ như hai cái cho là hàm $x$.`,
        tuDuy: String.raw``
    },
    {
        id: "9_max_min_phuong_trinh_mu_khong_co_dieu_kien_hai_bien",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "9. Max, min phương trình mũ không có điều kiện hai biến",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đề: $a > 1 ; b > 1$. $a^{2x} = b^{2y} = \sqrt{ab}$. Tìm $P_{\min} = 6x + y^2$?`,
        loiGiai: String.raw`$\Rightarrow \begin{cases} 4x = 1 + \log_a b \\ 4y = 1 + \log_b a \end{cases}$
$P = 6x + y^2 \Rightarrow 16P = 24(4x) + (4y)^2$
$\Leftrightarrow 16P = 24(1 + \log_a b) + (1 + \log_b a)^2$ Đặt $t = \log_b a \Rightarrow \log_a b = \frac{1}{t}$. Vì $a, b > 1 \Rightarrow t > 0$.
$\Leftrightarrow 16P = 24\left(1 + \frac{1}{t}\right) + (1 + t)^2$ Đạo hàm:
$16P' = -\frac{24}{t^2} + 2(1 + t) = 0 \Leftrightarrow \frac{-12}{t^2} + 1 + t = 0 \Leftrightarrow t^3 + t^2 - 12 = 0 \Rightarrow t = 2$.
Thay $t = 2$: $16P_{\min} = 24\left(1 + \frac{1}{2}\right) + (1 + 2)^2 \Rightarrow 16P_{\min} = 36 + 9 = 45 \Rightarrow P_{\min} = \frac{45}{16}$.`,
        tuDuy: String.raw``
    },
    {
        id: "10_danh_gia_phuong_trinh_mu_logarit_ket_hop_bdt_am_gm",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "10. Đánh giá phương trình Mũ - Logarit kết hợp BĐT AM-GM",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: Đề: Cho $2m + n < 0$. Tìm $m, n$ thỏa mãn phương trình:
$9^{-m} \cdot 3^{-n} \cdot 3^{\frac{-4}{2m+n}} + \ln[(2m + n + 2)^2 + 1] = 81$`,
        loiGiai: String.raw`Biến đổi phương trình:
$3^{-(2m+n)} \cdot 3^{\frac{-4}{2m+n}} + \ln[(2m + n + 2)^2 + 1] = 81$ Đặt $2m + n = t$. Vì $2m + n < 0 \Rightarrow t < 0 \Rightarrow -t > 0$.
$\Rightarrow 3^{-t - \frac{4}{t}} + \ln[(t + 2)^2 + 1] = 81$ Ta có:
$(t + 2)^2 \ge 0 \Rightarrow (t + 2)^2 + 1 \ge 1 \Rightarrow \ln[(t + 2)^2 + 1] \ge \ln 1 = 0$.
Xét biểu thức $3^{-t - \frac{4}{t}}$: Vì $t < 0 \Rightarrow -t > 0, -\frac{4}{t} > 0$. Áp dụng bất đẳng thức AM-GM (Cauchy) cho hai số dương $-t$ và $-\frac{4}{t}$:
$-t - \frac{4}{t} \ge 2\sqrt{(-t)\left(-\frac{4}{t}\right)} = 2\sqrt{4} = 4$.
$\Rightarrow 3^{-t - \frac{4}{t}} \ge 3^4 = 81$. Từ đó:
$\underbrace{3^{-t - \frac{4}{t}}}_{\ge 81} + \underbrace{\ln[(t + 2)^2 + 1]}_{\ge 0} = 81$
Phương trình xảy ra dấu bằng khi và chỉ khi:
$\begin{cases} -t - \frac{4}{t} = 4 \Rightarrow t = -2 \\ \ln[(t + 2)^2 + 1] = 0 \Rightarrow t = -2 \end{cases}$
Vậy $t = -2$ thỏa mãn. $\Rightarrow 2m + n = -2$. Note: Đánh giá phương trình khi không thể đưa về hàm đặc trưng hay không thể giải được.`,
        tuDuy: String.raw``
    },
    {
        id: "11_rut_gon_bieu_thuc_va_tim_min_he_thuc_mu_logarit",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "11. Rút gọn biểu thức và Tìm Min hệ thức Mũ - Logarit",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đề: Cho $a^{x_1} \cdot b^{x_2-x_1} = 1$ với $a, b > 1$. $S = \left(\frac{x_1 x_2}{x_1 + x_2}\right)^2 - 4x_1 \cdot 4x_2$. Tìm $\min S$?`,
        loiGiai: String.raw`Từ phương trình: $a^{x_1} \cdot b^{x_2-x_1} = 1$. Lấy logarit cơ số $a$ hai vế:
$\log_a(a^{x_1} \cdot b^{x_2-x_1}) = \log_a 1 = 0$
$\Leftrightarrow x_1 + (x_2 - x_1)\log_a b = 0$
$\Leftrightarrow x_1(1 - \log_a b) + x_2 \log_a b = 0$. Ta có:
$x_1(1 - \log_a b) + x_2 \log_a b = 0 \Rightarrow x_2 \log_a b = x_1(\log_a b - 1)$.
$\Rightarrow x_2 = x_1\left(1 - \frac{1}{\log_a b}\right) = x_1(1 - \log_b a)$.
Từ đó: $S = \left(\frac{x_1 x_2}{x_1 + x_2}\right)^2 - 4(x_1 + x_2)$. (Dùng hệ thức Vi-et để biến đổi). Rút gọn:
$\Rightarrow S = \left(\frac{-1}{\log_b a}\right)^2 - 4\left(\frac{1}{\log_b a}\right) \Rightarrow S_{\min} = \dots$`,
        tuDuy: String.raw``
    },
    {
        id: "12_danh_gia_co_so_logarit",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "12. Đánh giá cơ số Logarit",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đề: Có bao nhiêu cặp $(x, y)$ thỏa mãn $\log_{x^2 + 4y^2 + 1} \left(4x - y + \frac{34}{20}\right) \ge 1$ ?`,
        loiGiai: String.raw`Vì cơ số $x^2 + 4y^2 + 1 \ge 1$. Nếu $x^2 + 4y^2 + 1 = 1 \Rightarrow \begin{cases} x = 0 \\ y = 0 \end{cases}$, thay vào bất phương trình $\Rightarrow \log_1 \dots$ (Không thỏa mãn, cơ số phải $\neq 1$). $\Rightarrow x^2 + 4y^2 + 1 > 1$. Bất phương trình:
$\Leftrightarrow 4x - y + \frac{34}{20} \ge x^2 + 4y^2 + 1$
$\Leftrightarrow x^2 - 4x + 4y^2 + y \le \frac{14}{20}$
$\Leftrightarrow (x - 2)^2 + 4\left(y^2 + \frac{1}{4}y\right) \le \frac{14}{20} + 4$
$\Leftrightarrow (x - 2)^2 + 4\left(y + \frac{1}{8}\right)^2 \le 4 + \dots$ (Bản gốc ghi $(x - 2)^2 + 4(y + \frac{1}{10})^2 \le 9$). Từ đó đánh giá: Vì
$(x - 2)^2 \ge 0 \Rightarrow 4(y + \frac{1}{10})^2 \le 9 \Rightarrow -1 \le y + \frac{1}{10} \le 1$.
Trường hợp 1:
$y = -1 \Rightarrow (x-2)^2 + \frac{81}{100} \le 9 \Leftrightarrow (x-2)^2 \le \frac{819}{100}$
$\Leftrightarrow -2,8 \le x - 2 \le 2,8 \Leftrightarrow -0,8 \le x \le 4,8$. Vì $x$ là số nguyên $\Rightarrow x = 2$. Ta có 1 cặp nghiệm $(2; -1)$.
Trường hợp 2:
$y = 0 \Rightarrow (x-2)^2 \le \frac{104}{20} = 5,2$
$\Leftrightarrow -2,2 \le x - 2 \le 2,2 \Leftrightarrow -0,2 \le x \le 4,2$. Vì $x$ là số nguyên $\Rightarrow x \in \{0; 1; 2; 3; 4\}$. $\Rightarrow$ Loại trường hợp nghiệm $(0; 0)$ vì khi thay vào sẽ xuất hiện cơ số $\log_1$.`,
        tuDuy: String.raw``
    },
    {
        id: "13_khao_sat_phuong_trinh_mu_chua_tham_so_m",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "13. Khảo sát phương trình mũ chứa tham số m",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Đề bài: Tìm $m$ để phương trình $9^{x^2} - 4 \cdot 3^{x^2} + 8 = m$ có nghiệm thuộc đoạn $x \in [-2; 1]$.`,
        loiGiai: String.raw`Note: Chú ý đặt các điều kiện hiện diện của nghiệm. Đặt $t = 3^{x^2}$. Xét hàm $t(x) = 3^{x^2}$ trên đoạn $[-2; 1]$. Đạo hàm:
$t' = 3^{x^2} \cdot \ln 3 \cdot 2x = 0 \Leftrightarrow x = 0$. Bảng biến thiên của $t(x)$: [Hình vẽ minh họa: Bảng biến thiên hàm $t(x)$. Trục $x$ có các giá trị $-2, 0, 1$. Trục $t$ đi xuống từ $3^4$ (tức 81) tại $x=-2$ xuống cực tiểu $1$ tại $x=0$, rồi đi lên $3$ tại $x=1$.]
<img src="./images/bbt_13_khao_sat_phuong_trinh_mu_chua_tham_so_m.png" class="inline-img">
Từ bảng biến thiên, ta thấy
$t \in [1; 3^4] \Rightarrow t \in [1; 81]$. Phương trình ban đầu trở thành:
$t^2 - 4t + 8 = m$. Xét hàm số $f(t) = t^2 - 4t + 8$ trên đoạn $t \in [1; 81]$. Đạo hàm: $f'(t) = 2t - 4 = 0 \Leftrightarrow t = 2$. Bảng biến thiên của $f(t)$: [Hình vẽ minh họa: Bảng biến thiên hàm $f(t)$. Trục $t$ có các giá trị $1, 2, 81$. Trục $f(t)$ đi xuống từ $5$ tại $t=1$ xuống cực tiểu $4$ tại $t=2$, sau đó đi lên $6245$ tại $t=81$.]
<img src="./images/bbt_13_khao_sat_phuong_trinh_mu_chua_tham_so_m_2.png" class="inline-img">
Dựa vào bảng biến thiên, để phương trình có nghiệm thì $m$ phải cắt đồ thị hàm $f(t)$: $\Rightarrow 4 \le m \le 6245$.`,
        tuDuy: String.raw``
    },
    {
        id: "14_giai_phuong_trinh_chua_logarit_tren_mu",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "14. Giải phương trình chứa Logarit trên mũ",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.5+)
Nội dung: +> Giải phương trình:
$x^{\frac{1}{2}\log_2 x} = \log_2 \frac{x}{a} \Rightarrow P_{\min} = 4a^3 + b^3 - 4\log_2(\dots)$
Đặt $t = 4a^3 + b^3$ Ta có:
$4a^3 + \frac{b^3}{2} + \frac{b^3}{2} \ge 3 \sqrt[3]{4a^3 \cdot \frac{b^3}{2} \cdot \frac{b^3}{2}} = 3ab^2$
$\Rightarrow P = t - 4\log_2 (t)$`,
        loiGiai: String.raw`$P' = 1 - \frac{4}{t \ln 2} = 0 \Rightarrow t = \frac{4}{\ln 2}$
<img src="./images/bbt_14_giai_phuong_trinh_chua_logarit_tren_mu.png" class="inline-img">
$\Rightarrow P_{\min} = \frac{4}{\ln 2} - 4\log_2\left(\frac{4}{\ln 2}\right)$`,
        tuDuy: String.raw``
    },
    {
        id: "15_giai_phuong_trinh_logarit_chua_tri_tuyet_doi_va_can",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "15. Giải phương trình Logarit chứa Trị tuyệt đối và Căn",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Giải phương trình:
$\log_2 |x| - x\sqrt{2} = \log_4 (x^2 - 2\sqrt{2}x + 2)$`,
        loiGiai: String.raw`$\Leftrightarrow \log_2 |x| - x\sqrt{2} = \frac{1}{2} \log_2 (x - \sqrt{2})^2$
$\Leftrightarrow \log_2 |x| - x\sqrt{2} = \log_2 |x - \sqrt{2}|$
$\Leftrightarrow \log_2 |x| - \log_2 |x - \sqrt{2}| = x\sqrt{2}$

Trường hợp 1: $x > 0$
$\Rightarrow \begin{cases} t = 2^k \\ t+2 = 4^k \end{cases} \Rightarrow 2^k + 2 = 4^k \Rightarrow 2^k = 2 \Rightarrow k = 1 \Rightarrow \text{Có 1 nghiệm}.$

Trường hợp 2: $x < 0$
$\Rightarrow \begin{cases} -t = 2^k \\ t+2 = 4^k \end{cases} \Rightarrow -2^k + 2 = 4^k \Rightarrow 4^k + 2^k - 2 = 0 \Rightarrow 2^k = 1 \Rightarrow k = 0 \Rightarrow \text{Có 1 nghiệm}.$
$\Rightarrow x = 0$ (Loại) $\Rightarrow x = \sqrt{2}$ (Loại).`,
        tuDuy: String.raw``
    },
    {
        id: "16_bien_doi_dai_so_phuong_trinh_logarit_binh_phuong",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "16. Biến đổi đại số phương trình Logarit bình phương",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Giải phương trình logarit:
$\log_2^2(xy) = \log_2 \left(\frac{x}{2}\right) \log_2(4y)$`,
        loiGiai: String.raw`$\Rightarrow (\log_2 x + \log_2 y)^2 = (\log_2 x - 1)(\log_2 y + 2)$ Đặt $\log_2 x = a, \log_2 y = b$. 
$\Leftrightarrow (a+b)^2 = (a-1)(b+2)$
$\Leftrightarrow a^2 + b^2 + 2ab = ab + 2a - b - 2$
$\Leftrightarrow a^2 + b^2 + ab - 2a + b + 2 = 0$ Nhân cả hai vế với 2:
$2a^2 + 2b^2 + 2ab - 4a + 2b + 4 = 0$ Nhóm thành các hằng đẳng thức:
$(a+b)^2 + (a-2)^2 + (b+2)^2 = 0$ Vì tổng các bình phương luôn lớn hơn hoặc bằng 0, nên dấu bằng xảy ra khi và chỉ khi:
$\begin{cases} a+b = 0 \\ a-2 = 0 \\ b+2 = 0 \end{cases} \Leftrightarrow \begin{cases} a = 2 \\ b = -2 \end{cases}$
(Nghiệm thỏa mãn hệ phương trình).`,
        tuDuy: String.raw``
    },
    {
        id: "17_giai_bat_phuong_trinh_mu",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "17. Giải bất phương trình Mũ",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (7.5+)
Nội dung: +> Giải bất phương trình: $x \cdot 2^x - m \cdot 2^x - 4x + 4m < 0$`,
        loiGiai: String.raw`$\Leftrightarrow 2^x(x - m) - 4(x - m) < 0 \Leftrightarrow (2^x - 4)(x - m) < 0$
Hệ tương đương với 2 trường hợp: 
Trường hợp 1:
$\begin{cases} 2^x - 4 < 0 \\ x - m > 0 \end{cases} \Leftrightarrow \begin{cases} x < 2 \\ x > m \end{cases} \Rightarrow m < x < 2$
Trường hợp 2:
$\begin{cases} 2^x - 4 > 0 \\ x - m < 0 \end{cases} \Leftrightarrow \begin{cases} x > 2 \\ x < m \end{cases} \Rightarrow 2 < x < m$
$\Rightarrow \begin{cases} m = 8 \\ m = -4 \end{cases}$ (Các giá trị nguyên của $m$ thỏa mãn khoảng nghiệm).`,
        tuDuy: String.raw``
    },
    {
        id: "18_dieu_kien_cua_mau_so_trong_ham_mu",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "18. Điều kiện của mẫu số trong hàm Mũ",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.0+)
Nội dung: +> Luôn nhớ đặt điều kiện mẫu số. Ví dụ: Tìm $m$ để hàm số $y = \frac{2^x + 10}{2^x - m}$ nghịch biến trên khoảng $(1; 4)$.`,
        loiGiai: String.raw`$\Rightarrow$ Điều kiện xác định: $2^x - m \neq 0 \Rightarrow m \neq 2^x$. Vì $x \in (1; 4) \Rightarrow 2^x \in (2^1; 2^4) \Rightarrow 2^x \in (2; 16)$.
$\Rightarrow m \notin (2; 16) \Rightarrow \begin{bmatrix} m \le 2 \\ m \ge 16 \end{bmatrix}$.`,
        tuDuy: String.raw``
    },
    {
        id: "19_ham_so_mu_doi_voi_ham_da_thuc_khao_sat",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "19. Hàm số mũ đối với hàm đa thức (Khảo sát)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: +> Với bài toán hàm số mũ đối với hàm đa thức: Ví dụ: Giải phương trình $3^{\frac{x}{6}} = 2x + m$. $\Rightarrow$ Chuyển hết sang 1 vế tạo thành hàm số $f(x)$. $\Rightarrow$ Giải $f'(x) = 0$. Nếu phương trình đạo hàm có 1 nghiệm $x_0$ thì phương trình gốc sẽ có tối đa 2 nghiệm.`,
        loiGiai: String.raw`Ta có:
$f(x) = 3^{\frac{x}{6}} - 2x - m = 0$
$\Rightarrow f'(x) = \frac{\ln 3}{6} \cdot 3^{\frac{x}{6}} - 2 = 0$
$\Rightarrow 3^{\frac{x}{6}} = \frac{12}{\ln 3} \Rightarrow x = 6 \log_3 \left( \frac{12}{\ln 3} \right)$.
[Hình vẽ minh họa: Bảng biến thiên của hàm số $f(x)$] Bảng biến thiên:
<img src="./images/bbt_19_ham_so_mu_doi_voi_ham_da_thuc_khao_sat.png" class="inline-img">
- Dòng $x$: $-\infty \quad x_0 \quad +\infty$ (với $x_0 = 6 \log_3 (\frac{12}{\ln 3})$).
- Dòng $f'(x)$: Mang dấu âm (-) trong khoảng $(-\infty; x_0)$ và mang dấu dương (+) trong khoảng $(x_0; +\infty)$. Tại $x_0$ thì $f'(x) = 0$.`,
        tuDuy: String.raw``
    },
    {
        id: "20_cac_meo_giai_nhanh_va_luu_y_logarit",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "20. Các mẹo giải nhanh và Lưu ý Logarit",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Khá (7.5+)
Nội dung:`,
        loiGiai: String.raw`- Logarit phân thức: $\log_a(u \cdot v) = \log_a u + \log_a v$
$\log_a\left(\frac{u}{v}\right) = \log_a u - \log_a v$.
- Chú ý logarit về hai cơ số khác nhau:
$a^x = b^y \Rightarrow a^{x/y} = b \Rightarrow \frac{x}{y} = \log_a b \Rightarrow x = y\log_a b$.
- Nhìn hàm nào không tách được thì xét cả 2 $\Rightarrow$ chuyển hết về 1 bên $\Rightarrow f(x) = 0$.
- Nhớ phải có điều kiện logarit.
- Cùng cơ số thì nhân.
- Tách các vế cho hệ hình học: Đường thẳng $d: ax+by+c=0$; Đường tròn $(C): (x-a)^2+(y-b)^2 \le R^2$.
- Dạng 6: Bài toán liên quan tới số logarit có nghiệm nguyên thì ta sẽ coi 1 biến là tham số và biến nguyên (liên quan tới số nghiệm bài toán yêu cầu) là biến độc lập. Lập hàm số hoặc khảo sát hàm trực tiếp để quy về bài toán tương giao.`,
        tuDuy: String.raw``
    },
    {
        id: "21_phuong_trinh_mu_2_bien_dua_ve_ham_so_va_tim_min_max",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "21. Phương trình mũ 2 biến (Đưa về hàm số và Tìm Min/Max)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (8.5+)
Nội dung: Đề: Thay bằng
$5^{x+y-1} + 25^{x^2+y^2-1-xy} = 0 \Rightarrow \text{Tìm } \min, \max \text{ của } P = x^4 + y^4 - x^2y^2?$`,
        loiGiai: String.raw`Từ phương trình:
$\Rightarrow x^2 + y^2 - xy = 1 \Leftrightarrow x^2 + y^2 = xy + 1$ Ta có:
$P = (x^2+y^2)^2 - 3x^2y^2$ Thay $x^2 + y^2 = xy + 1$ vào:
$P = (xy + 1)^2 - 3(xy)^2 \Rightarrow P = (xy)^2 + 2xy + 1 - 3(xy)^2 \Rightarrow P = -2(xy)^2 + 2xy + 1$
Đặt $t = xy$. Để tìm $\min, \max$ ta phải tìm khoảng chặn của $t$. Từ giả thiết:
$xy + 1 = x^2 + y^2 \Leftrightarrow 3xy + 1 = (x+y)^2 \ge 0 \Rightarrow 3xy \ge -1 \Rightarrow xy \ge -\frac{1}{3}$.
Mặt khác: $xy + 1 = x^2 + y^2 \ge 2xy \Rightarrow 1 \ge xy \Rightarrow xy \le 1$.
$\Rightarrow t \in \left[-\frac{1}{3}; 1\right]$.

Note: Khi đạo hàm chỉ làm ra $\max \rightarrow$ để tìm $\min$ ta phải luôn tìm điều kiện bị chặn (Tạo ra 1 phương trình cho ẩn). Khảo sát hàm $P(t) = -2t^2 + 2t + 1$ trên đoạn $\left[-\frac{1}{3}; 1\right]$. Đạo hàm
$P'(t) = -4t + 2 = 0 \Leftrightarrow t = \frac{1}{2}$.
<img src="./images/bbt_21_phuong_trinh_mu_2_bien_dua_ve_ham_so_va_tim_min_max.png" class="inline-img">`,
        tuDuy: String.raw``
    },
    {
        id: "22_phuong_trinh_logarit_chua_ham_mu",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "22. Phương trình Logarit chứa hàm Mũ (Cô lập biến và Khảo sát cực trị)",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: $\ln(1 + x + 2y) = 2y + 3x - 10$ Điều kiện: $1 + x + 2y > 0 \Leftrightarrow y > \frac{-x - 1}{2}$
Hàm số: $f(y) = 1 + x + 2y - e^{2y + 3x - 10} = 0$ Xét $y \ge \frac{-x - 1}{2}$.`,
        loiGiai: String.raw`Đạo hàm:
$f'(y) = 2 - 2 \cdot e^{2y + 3x - 10} = 0 \Leftrightarrow 2y + 3x - 10 = 0 \Leftrightarrow y = \frac{10 - 3x}{2}$
- TH1: $\frac{10 - 3x}{2} \ge \frac{-x - 1}{2}$ (Điều kiện cực trị nằm trong khoảng xác định). 
[ Bảng biến thiên: 
$y: \quad \frac{-x - 1}{2} \quad \frac{10 - 3x}{2} \quad +\infty;$
$f'(y): \quad + \quad 0 \quad -;$
$f(y): \text{Đi lên từ một giá trị âm đến giá trị cực đại } \frac{10 - 3x}{2} \text{ rồi đi xuống 0.}$]
$\Rightarrow$ Để phương trình có nghiệm $\Leftrightarrow$ Giá trị cực đại
$f\left(\frac{10 - 3x}{2}\right) \ge 0 \Rightarrow 10 - 2x \ge 0 \Rightarrow x \le 5$.
<img src="./images/bbt_22_phuong_trinh_logarit_chua_ham_mu.png" class="inline-img">
$\Rightarrow x \in \{1, 2, 3, 4\} \Rightarrow$ Tìm $y$.

- TH2: $\frac{10 - 3x}{2} < \frac{-x - 1}{2}$ (Cực trị nằm ngoài khoảng xác định). Đường thẳng cắt tại một điểm âm. $\Rightarrow$ Không có nghiệm.
<img src="./images/bbt_22_phuong_trinh_logarit_chua_ham_mu_2.png" class="inline-img">`,
        tuDuy: String.raw``
    },
    {
        id: "23_danh_gia_bat_phuong_trinh_mu_logarit_bang_dao_ham",
        chuyenDe: "ham-so",
        loaiTag: "Bài toán",
        tieuDe: "23. Đánh giá Bất phương trình Mũ - Logarit bằng Đạo hàm",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng (8.0+)
Nội dung: Ví dụ: Đánh giá bất phương trình bằng đạo hàm
Đề bài: Giải bất phương trình $4^{-x} - 3x + \log_4(y - x) - 2y + 2 \le 0$.`,
        loiGiai: String.raw`Note: Khi xét bất đẳng thức hay phương trình, hãy thử đạo hàm và đánh giá. Xét hàm số $f(x) = 4^{-x} - 3x + \log_4(y - x) - 2y + 2$. Ta đánh giá giá trị của đạo hàm $f'(x)$.
$f'(x) = -4^{-x}\ln 4 - 3 - \frac{1}{(y - x)\ln 4}$ Điều kiện xác định của logarit là $y - x > 0 \Rightarrow \frac{1}{(y - x)\ln 4} > 0$. Ta thấy: $-4^{-x}\ln 4 < 0; -3 < 0; -\frac{1}{(y - x)\ln 4} < 0$
$\Rightarrow f'(x) < 0, \forall x < y$. $\Rightarrow$ Hàm số $f(x)$ luôn nghịch biến trên tập xác định.`,
        tuDuy: String.raw``
    },
    {
        id: "24_ly_thuyet_vdc_bien_luan_so_nghiem_phuong_trinh_mu_logarit_bang_do_thi",
        chuyenDe: "ham-so",
        loaiTag: "Kiến thức",
        tieuDe: "24. Lý thuyết VDC: Biện luận số nghiệm phương trình Mũ - Logarit bằng Đồ thị",
        hinhAnhLeft: "",
        deBai: String.raw`Mức độ: Vận dụng cao (9.0+)
Nội dung: +> Phương trình $a^x = b^x$ luôn có 1 nghiệm dù đồng biến hay nghịch biến. +> Phương trình $a^x = f(x)$ có 1 nghiệm $\Leftrightarrow 1$ vế là hàm đồng biến, $1$ vế là hàm nghịch biến $\Rightarrow có 1 nghiệm.`,
        loiGiai: String.raw`Hoặc
$\begin{cases} a > 1 \\ 0 < b < 1 \end{cases} \Rightarrow \text{có 1 nghiệm.}$
$\begin{cases} 0 < a < 1 \\ b > 1 \end{cases}$
$\begin{cases} 0 < a < 1 \\ 0 < x < 1 \end{cases}$ (Ghi chú: phần này liệt kê các trường hợp cơ số để hàm số đồng biến hoặc nghịch biến).

+> Phương trình $\log_a x = \log_b x$ khi cùng đồng biến hoặc cùng nghịch biến.

(*) Nghiệm của hàm mũ: Phương trình: $a^x = g(m)x + 1$.
- Có 1 nghiệm
$\Rightarrow \begin{cases} g(m)x + 1 = h(x) \\ g(m) \le 0 \end{cases} \text{ (hoặc là đường tiếp tuyến).}$
- $a^x = g(m)x + 1$ có 2 nghiệm
$\Rightarrow \begin{cases} g(m) \neq \ln a \\ g(m) > 0 \end{cases}$ [Hình vẽ minh họa: Đồ thị hàm số mũ $y = a^x$ (đồng biến, đi qua điểm $(0,1)$). Các chùm đường thẳng $y = g(m)x + 1$ đi qua điểm $(0,1)$ với hệ số góc $g(m)$ khác nhau. Thể hiện các trường hợp cắt đồ thị tại 1 điểm, 2 điểm hoặc tiếp xúc.]
<img src="./images/bbt_24_ly_thuyet_vdc_bien_luan_so_nghiem_phuong_trinh_mu_logarit_bang_do_thi.png" class="inline-img">

Phương trình: $\log_a x = g(m)x - g(m) = g(m)(x - 1)$.
- Có 2 nghiệm
$\Rightarrow \begin{cases} g(m) \neq \frac{1}{\ln a} \\ g(m) > 0 \end{cases}$
- Có 1 nghiệm
$\Leftrightarrow \left[ \begin{array}{l} g(m) = 0 \\ g(m) \neq \frac{1}{\ln a} ; g(m) < 0 \\ g(m) = \frac{1}{\ln a} \end{array} \right.$
[Hình vẽ minh họa: Đồ thị hàm số logarit $y = \log_a x$ (đi qua điểm $(1,0)$). Các chùm đường thẳng $y = g(m)(x - 1)$ đi qua điểm $(1,0)$ cắt đồ thị. Thể hiện số giao điểm tương ứng với các trường hợp của $g(m)$.]
<img src="./images/bbt_24_ly_thuyet_vdc_bien_luan_so_nghiem_phuong_trinh_mu_logarit_bang_do_thi_2.png" class="inline-img">`,
        tuDuy: String.raw``
    }
];