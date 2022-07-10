
var tabel_worder;
var tabel_worder1;

$(document).ready( function ()
{
    tabel_worder = $('#tabel_worder').DataTable({
        "columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
        "select": {"style": "multi"},
          "sAjaxSource": "/WoAll",
  "scrollX": "1",
  "sAjaxDataProp": "",
  "dom": "rtip",
  "bAutoWidth": true, 
  "order": [[ 0, "asc" ]],
  "aoColumns": [
   { "mData": "id_wo"},
   { "mData": "kode_wo"},
   { "mData": "asset_name"},
   { "mData": "jenis_pekerjaan"},
   { "mData": "pembuatan"},
   { "mData": "lokasi"},
   { "mData": "status_pekerjaan"},
   { "mData": "uraian"}
  ]

});

$("#tredit").click(function (event)
{
  $("#form_submit").show();
  $("#table_work").hide();
// var rows_selected = tabel_worder1.column(0).checkboxes.selected();
   var tabel_worder1 = $('#tabel_worder').DataTable().row('.selected').data();
//    $('#id_wo').val(rows_selected.join(","));
   $('#id_wo').val(tabel_worder1['id_wo']);
$('#kode_wo').val(tabel_worder1['kode_wo']);
$('#asset_name').val(tabel_worder1['asset_name']);
$('#jenis_pekerjaan').val(tabel_worder1['jenis_pekerjaan']);
$('#pembuatan').val(tabel_worder1['pembuatan']);
 $('#lokasi').val(tabel_worder1['lokasi']);
 $('#status_pekerjaan').val(tabel_worder1['status_pekerjaan']);
 $('#uraian').val(tabel_worder1['uraian']);

})

$('#kode_wo').on('click', function ()
{
    tabel_worder.search( this.value ).draw();
} );
$('#btn_wo').on('click', function ()
{
  $("#table_work").show();
  $("#form_submit").hide();
} 
  );
$("#form_submit").hide();

});



//
//  $(function() {
//      $("#Printbtn").click(function() {
//          html2canvas($("#DivIdToPrint"), {
//              onrendered: function(canvas) {
//                  theCanvas = canvas;
//                  canvas.toBlob(function(blob) {
//                      saveAs(blob, "Dashboard.png");
//                  });
//              }
//          });
//      });
//  });


