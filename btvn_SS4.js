let limit = 0;
let choice;

let totalBooks = 0;
let evenBooks = 0;
let oddBooks = 0;
let bookId;

let rows
let cols


let quantity;
let currentCostPerBook;
let years;
let totalCost;

let n
let luckyCount = 0;
let luckyList = "";

while (limit < 3) {
    let inputName = prompt("Mời bạn nhập tài khoản:");
    let password = prompt("Mời bạn nhập mật khẩu:");
    if (inputName === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        break;
    } else {
        limit++;
        let remaining = 3 - limit;
        if (inputName !== "admin" && password !== "12345") {
            alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${remaining} lần thử.`);
        } else if (inputName !== "admin") {
            alert(`Sai tài khoản! Bạn còn ${remaining} lần thử.`);
        } else {
            alert(`Sai mật khẩu! Bạn còn ${remaining} lần thử.`);
        }
    }
}
if (limit === 3) {
    alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
} else {
    do {
        let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
        menu += "1. Phân loại mã số sách (Chẵn/Lẻ)\n";
        menu += "2. Thiết kế sơ đồ kho sách (Dạng lưới)\n";
        menu += "3. Dự toán phí bảo trì sách theo năm\n";
        menu += "4. Tìm mã số sách may mắn\n";
        menu += "5. Thoát\n";
        menu += "Vui lòng nhập lựa chọn của bạn (1-5):";
        choice = Number(prompt(menu))
        switch (choice) {
            case 1:
                alert("Nhập các mã số sách (Nhập 0 để dừng lại):");
                while (true) {
                    bookId = Number(prompt("Nhập mã số sách:"));
                    if (isNaN(bookId)) {
                        alert("Vui lòng nhập số nguyên hợp lệ!");
                        continue;
                    }
                    if (bookId === 0) break;

                    totalBooks++;
                    if (bookId % 2 === 0) {
                        evenBooks++;
                    } else {
                        oddBooks++;
                    }
                }
                console.log("--- Kết quả phân loại mã sách ---");
                console.log(`- Tổng số lượng mã sách đã nhập: ${totalBooks}`);
                console.log(`- Số mã chẵn (Sách khoa học): ${evenBooks}`);
                console.log(`- Số mã lẻ (Sách nghệ thuật): ${oddBooks}`);
                alert("Đã phân loại xong! Xem kết quả tại Console (F12).");
                break;
            case 2:
                rows = Number(prompt("Nhập số hàng của kho:"));
                cols = Number(prompt("Nhập số cột của kho:"));
                if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
                    alert("Số hàng và cột phải là số dương!");
                } else {
                    console.log(`--- Bản đồ kho sách (${rows}x${cols}) ---`);
                    for (let i = 1; i <= rows; i++) {
                        let rowLayout = "";
                        for (let j = 1; j <= cols; j++) {
                            let position = `[${i}-${j}]`;
                            if (i === j) {
                                position += "(Kệ ưu tiên)";
                            }
                            rowLayout += position + "  ";
                        }
                        console.log(rowLayout);
                    }
                    alert("Đã in bản đồ kho ra Console (F12).");
                }
                break;
            case 3:
                quantity = Number(prompt("Nhập số lượng sách hiện có:"));
                currentCostPerBook = Number(prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):"));
                years = Number(prompt("Nhập số năm dự toán:"));
                if (isNaN(quantity) || isNaN(currentCostPerBook) || isNaN(years)) {
                    alert("Dữ liệu nhập vào phải là số!");
                } else {
                    console.log("--- Dự toán phí bảo trì sách theo năm ---");
                    for (let year = 1; year <= years; year++) {
                        totalCost = quantity * currentCostPerBook;
                        console.log(
                            `Năm ${year}: ${totalCost.toLocaleString()} VNĐ (Đơn giá: ${currentCostPerBook.toFixed(0)}/cuốn)`,
                        );
                        currentCostPerBook = currentCostPerBook * 1.1;
                    }
                    alert("Đã hoàn thành bảng dự toán tại Console.");
                }
                break;
            case 4:
                n = Number(
                    prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):"),
                );
                if (isNaN(n) || n <= 0) {
                    alert("Vui lòng nhập số N dương!");
                } else {
                    console.log(
                        `--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---`,
                    );
                    for (let i = 1; i <= n; i++) {
                        if (i % 3 === 0 && i % 5 !== 0) {
                            luckyList += i + " ";
                            luckyCount++;
                        }
                    }
                    console.log(luckyList || "Không có mã nào thỏa mãn.");
                    console.log(`=> Tổng cộng có ${luckyCount} mã may mắn.`);
                    alert(`Tìm thấy ${luckyCount} mã may mắn. Xem chi tiết tại Console.`);
                }
                break;
            case 5:
                alert("Hệ thống đang đăng xuất... Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
        }
    } while (choice !== 5);
}