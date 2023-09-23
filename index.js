function tableSearch() {
    let input, filter, table, tr, td, i, txtValue ,not_found,name_content,count = 0,counter;
    input = document.getElementById("search-text");
    filter = input.value.toUpperCase();
    table = document.getElementById("info-table");
    tr = table.getElementsByClassName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("td")[1]
        if (td) {
            name_content = td.getElementsByClassName("name_content")[0]
            txtValue = name_content.textContent || name_content.innerText;
            if (filter && txtValue.toUpperCase().indexOf(filter) > -1) {
                td.style.backgroundColor = "#FA8072";
                count++
            } else {
                td.style.backgroundColor = "";
            }
        }
    }
    document.getElementById("count").textContent = count;    // Показываем/скрываем сообщение "Ничего не найдено"
    let notFoundMessage = document.getElementById("not_found");
    let result_count = document.getElementById("result-count");
    result_count.style.display = count === 0 ? "none" : "block";
    notFoundMessage.style.display = count === 0 ? "block" : "none";

}