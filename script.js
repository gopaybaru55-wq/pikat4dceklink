$(document).ready(function () {
  // underline menu beranda
  $("#beranda").css("text-decoration", "underline");

  // klik input -> buka modal
  $("#press-to-modal, #press-cari").on("click", function () {
    $("#input-data").val("").focus();
    $("#myModal-search").modal("show");
    $("#text-title").text("CARI DATA");
  });

  // fokus otomatis saat modal muncul
  $("#myModal-search").on("shown.bs.modal", function () {
    $(this).find("#input-data").focus();
  });

  // batasi max 5 baris
  $(".inputarea").on("change paste keyup", function () {
    let t = $.trim($("#input-data").val());
    let lines = t.split(/\r|\r\n|\n/).filter(line => line.trim() !== "");

    if (lines.length >= 6) {
      alert("Limit maksimal 5 URL");
      $(".inputarea").val("");
    }
  });

  // tombol cari data
  $("#text-footer1").on("click", function () {
    let input = $("#input-data").val().trim();

    if (!input) {
      alert("Masukkan domain terlebih dahulu");
      return;
    }

    let domains = input.split(/\r|\r\n|\n/).filter(domain => domain.trim() !== "");

    if (domains.length > 5) {
      alert("Maksimal hanya 5 URL");
      return;
    }

    $("#show_loading").show();

    setTimeout(() => {
      let html = "";

      domains.forEach(function (domain) {
        html += `
          <tr>
            <td>${domain}</td>
            <td>Tidak Ada</td>
          </tr>
        `;
      });

      $("#show-result").html(html);
      $("#show_loading").hide();
      $("#myModal-search").modal("hide");
    }, 800);
  });
});
