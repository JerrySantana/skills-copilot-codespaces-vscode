function skillsMember() {
    // Get the input field
    var input = document.getElementById("searchSkillsMember");
    // Get the filter
    var filter = input.value.toUpperCase();
    // Get the table
    var table = document.getElementById("tableSkillsMember");
    // Get tr
    var tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (var i = 1; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == "") {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}