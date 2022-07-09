/////modul takeover//////////////
var form_items = $('#form_items');
var form_purchase_order = $('#form_purchase_order');
var form_dept = $('#form_dept');
var form_takeover = $('#form_takeover');
var form_header_bom= $('#form_header_bom');
var form_Formula= $('#form_Formula');
var form_Tr_asset= $('#form_Tr_asset');
var form_sc= $('#form_sc');
var form_wo= $('#form_wo');

var form_asset= $('#form_asset');
var form_inventori = $('#form_inventori');
var form_location = $('#form_location');
var form_suku_cadang = $('#form_suku_cadang');
var form_customers = $('#form_customers');
var form_plant = $('#form_plant');
var form_work_order = $('#form_work_order');
var form_journal = $('#form_journal');
var form_stok = $('#form_stok');
var form_pm = $('#form_pm');
var form_order = $('#form_order');
var form_header_orders = $('#form_header_orders');
var form_header_purchase_request = $('#form_header_purchase_request');
var form_request = $('#form_request');
var form_pos = $('#form_pos');

$("#form_pos").on("click", "#POS1", function() {
    $.ajax
    ({
        type: "POST",
        url: "/pos/PosSave",
        data: form_pos.serialize(),
        cache: false,
        success: function(data)
        {
            var result = data;
            ("#info").html('Successfully updated record!');
            $("#info").addClass("alert alert-success");

            $("#info").fadeTo(2000, 500).slideUp(500, function()
            {
                $("#info").slideUp(1000);
            });
        }
    });
    return false;
});


$("#form_request").on("click", "#PRSAVE", function() {
$.ajax
({
type: "POST",
url: "/purchase_request/purchase_request_save",
data: form_request.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 


$("#form_header_purchase_request").on("click", "#HO1", function() {
$.ajax
({
type: "POST",
url: "/purchase_request/header_purchase_request_save",
data: form_header_purchase_request.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 


$("#form_header_orders").on("click", "#HO1", function() {
$.ajax
({
type: "POST",
url: "/orders/HeaderOrderSave",
data: form_header_orders.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 

$("#form_order").on("click", "#SO1", function() {
$.ajax
({
type: "POST",
url: "/orders/OrderSave",
data: form_order.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 


$("#form_pm").on("click", "#pm1", function() {
$.ajax
({
type: "POST",
url: "/submit_pm",
data: form_pm.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 
$("#form_pm").on("click", "#pm3", function() {
$.ajax
({
type: "delete",
url: "/delete_pm",
data: form_pm.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 


$("#form_stok").on("click", "#STK1", function() {
$.ajax
({
type: "POST",
url: "/Save",
data: form_stok.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 

$("#form_journal").on("click", "#JR1", function() {
$.ajax
({
type: "POST",
url: "/JournalSave",
data: form_journal.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 


$("#form_wo").on("click", "#btn_wo", function() {
$.ajax
({
type: "POST",
url: "/submit_wo",
data: form_wo.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 
$("#form_work_order").on("click", "#WO2", function() {
$.ajax
({
type: "DELETE",
url: "/delete_wo",
data: form_work_order.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 


$("#form_plant").on("click", "#PL1", function() {
$.ajax
({
type: "POST",
url: "/PekerjaSave",
data: form_pekerja.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 
$("#form_plant").on("click", "#PL2", function() {
$.ajax
({
type: "DELETE",
url: "/PekerjaDelete",
data: form_pekerja.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 


$("#form_customers").on("click", "#PKR1", function() {
$.ajax
({
type: "POST",
url: "/customersSave",
data: form_customers.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 
$("#form_customers").on("click", "#PKR2", function() {
$.ajax
({
type: "DELETE",
url: "/customersDelete",
data: form_customers.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 



$("#form_suku_cadang").on("click", "#SCK1", function() {
$.ajax
({
type: "POST",
url: "/scg_save",
data: form_suku_cadang.serialize(),
cache: false,
success: function(data)
{
var result = data;
("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});
}
});
return false;
}); 

$("#form_location").on("click", "#L1", function()
{
$.ajax
({
type: "POST",
url: "/LocationSave",
data: form_location.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 
$("#form_location").on("click", "#L2", function()
{
$.ajax
({
type: "DELETE",
url: "/LocationDelete",
data: form_location.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#info").html('Successfully delete record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 



$("#form_asset").on("click", "#save_asset", function()
{
$.ajax
({
type: "POST",
url: "/AssetSave",
data: form_asset.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 
$("#form_asset").on("click", "#del_asset", function()
{
$.ajax
({
type: "DELETE",
url: "/AssetDelete",
data: form_asset.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 



form_inventori.submit(function()
{
$.ajax
({
type: "POST",
url: "/insave",
data: form_inventori.serialize(),
success: function(data)
{
var result = data;
$("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 
form_inventori.submit(function()
{
$.ajax
({
type: "delete",
url: "/insave",
data: form_inventori.serialize(),
success: function(data)
{
var result = data;
$("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 


form_takeover.submit(function()
{
$.ajax
({
type: "POST",
url: form_takeover.attr('action'),
data: form_takeover.serialize(),
cache: false,
success: function(data)
{
var result = data;
alert("save suscces");
}
});
return false;
}); 
/////modul takeover//////////////


/////modul biaya//////////////


var form_biaya = $('#form_biaya');
form_biaya.submit(function()
{
$.ajax
({
type: "POST",
url: form_biaya.attr('action'),
data: form_biaya.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
}
});
return false;
}); 


var form_break = $('#form_break');
form_break.submit(function()
{
$.ajax
({
type: "POST",
url: form_break.attr('action'),
data: form_break.serialize(),
success: function(data)
{
var result = data;
alert("save suscces");
// clear_biaya();
}
});
return false;
}); 


//var form_work_order = $('#form_work_order');
//form_work_order.submit(function()
//{
//$.ajax
//({
//type: "POST",
//url: form_work_order.attr('action'),
//data: form_work_order.serialize(),
//cache: false,
//success: function(data)
//{
//  var result = data;
//   $("#info").html('Successfully updated record!');
//   $("#info").addClass("alert alert-success");
//
//  $("#info").fadeTo(2000, 500).slideUp(500, function()
//  {
//      $("#info").slideUp(500);
//  });
//}
//});
//return false;
//}); 



$("#form_sc").on("click", "#btn_sc", function() {
    $.ajax
    ({
        type: "POST",
        url: "/submit_sc",
        data: form_sc.serialize(),
        cache: false,
        success: function(data)
        {
            var result = data;
            ("#info").html('Successfully updated record!');
            $("#info").addClass("alert alert-success");

            $("#info").fadeTo(2000, 500).slideUp(500, function()
            {
                $("#info").slideUp(1000);
            });
        }
    });
    return false;
});


$("#form_wo").on("click", "#btn_wo", function() {
    $.ajax
    ({
        type: "POST",
        url: "/submit_wo",
        data: form_wo.serialize(),
        cache: false,
        success: function(data)
        {
            var result = data;
            ("#info").html('Successfully updated record!');
            $("#info").addClass("alert alert-success");

            $("#info").fadeTo(2000, 500).slideUp(500, function()
            {
                $("#info").slideUp(1000);
            });
        }
    });
    return false;
});

//

//form_work_order.submit(function()
//{
//$.ajax
//({
//type: "POST",
//url: form_work_order.('posting'),
//data: form_work_order.serialize(),
//success: function(data)
//{
//var result = data;
//  alert("save suscces");
//
//}
//});
//return false;
//}); 
//var form_asset = $('#form_asset');
//form_asset.submit(function()
//{
//$.ajax
//({
//type: "POST",
//url: form_asset.attr('action'),
//data: form_asset.serialize(),
//success: function(data)
//{
//var result = data;
//$("#info").html('Successfully updated record!');
//$("#info").addClass("alert alert-success");
//
//$("#info").fadeTo(2000, 500).slideUp(500, function()
//{
//$("#info").slideUp(500);
//});
//
//}
//});
//return false;
//}); 





var form_project_material = $('#form_project_material');
form_project_material.submit(function()
{
$.ajax
({
type: "POST",
url: form_project_material.attr('action'),
data: form_project_material.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");

$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
document.getElementById("Material_name").value =  "";
document.getElementById("Vendor").value =  "";
document.getElementById("Account").value =  "";
document.getElementById("quantity").value =  "";
document.getElementById("UOM").value =  "";
document.getElementById("cost").value =  "";
document.getElementById("subtotal_cost").value =  "";
}
});
return false;
}); 




$("#form_dept").on("click", "#D1", function()
{
$.ajax
({
type: "POST",
url: "/DeptSave",
data: form_dept.serialize(),
cache: false,
beforeSend: function(data)
{
var result = data;
Sender();
},
success: function(data)
{
var result = data;
success();
},
complete: function(data)
{
var result = data;
complete();
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 


$("#form_dept").on("click", "#D2", function()
{
$.ajax
({
type: "DELETE",
url: "/DeptDelete",
data: form_dept.serialize(),
cache: false,
beforeSend: function(data)
{
var result = data;
Sender();
},
success: function(data)
{
var result = data;
success();
},
complete: function(data)
{
var result = data;
complete();
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 


var form_purc_req = $('#form_purc_req');
$("#form_purc_req").on("click", "#x1", function() {
$.ajax
({
type: "POST",
url: "/PRSave",
data: form_purc_req.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#infoq").html('Successfully updated record!');
$("#infoq").addClass("alert alert-success");
$("#infoq").fadeTo(2000, 500).slideUp(500, function()
{
$("#infoq").slideUp(1000);
});
}
});
return false;
}); 

$("#form_purc_req").on("click", "#x2", function() {
$.ajax
({
type: "DELETE",
url: "/PRDelete",
data: form_purc_req.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#infoq").html('Successfully Delete record!');
$("#infoq").addClass("alert alert-danger");
$("#infoq").fadeTo(2000, 500).slideUp(500, function()
{
$("#infoq").slideUp(500);
});
}
});
return false;
}); 
function prc_clear()
{
document.getElementById("id_item").value = "";
document.getElementById("id_purc_req").value = "";
document.getElementById("item").value = "";
document.getElementById("qty").value = "";
document.getElementById("deskripsi").value = "";
document.getElementById("note").value = "";
}




var form_header_pr = $('#form_header_pr');
$("#form_header_pr").on("click", "#pr1", function() {
$.ajax
({
type: "POST",
url: "/HPRSave",
data: form_header_pr.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#info").html('Successfully updated record!');
$("#info").addClass("alert alert-success");
$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(1000);
});}
});
return false;
}); 
$("#form_header_pr").on("click", "#pr2", function() {
$.ajax
({
type: "DELETE",
url: "/HPRDelete",
data: form_header_pr.serialize(),
cache: false,
success: function(data)
{
var result = data;
$("#info").html('Successfully Delete record!');
$("#info").addClass("alert alert-danger");
$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
}
});
return false;
}); 

function head_clear()
{
document.getElementById("id_item").value = "";
document.getElementById("id_purc_req").value = "";
document.getElementById("item").value = "";
document.getElementById("qty").value = "";
document.getElementById("deskripsi").value = "";
document.getElementById("note").value = "";
}

$("#form_purchase_order").on("click", "#po1", function()
{
$.ajax
({
type: "POST",
url: "/POSave",
data: form_purchase_order.serialize(),
cache: false,
beforeSend: function(data)
{
var result = data;
Sender();
},
success: function(data)
{
var result = data;
success();
},
complete: function(data)
{
var result = data;
complete();
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 
$("#form_purchase_order").on("click", "#po2", function()
{
$.ajax
({
type: "DELETE",
url: "/PODelete",
data: form_purchase_order.serialize(),
cache: false,
beforeSend: function(data)
{
var result = data;
Sender();
},
success: function(data)
{
var result = data;
success();
},
complete: function(data)
{
var result = data;
complete();
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 


$("#form_items").on("click", "#IT1", function()
{
$.ajax
({
type: "POST",
url: "/ItemsSave",
data: form_items.serialize(),
cache: false,
timeout: 600000,
success: function(data)
{
var result = data;
success();
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 


$("#form_items").on("click", "#IT2", function()
{
$.ajax
({
type: "DELETE",
url: "/ItemsDelete",
data: form_items.serialize(),
cache: false,
timeout: 600000,
success: function(data)
{
var result = data;
success();
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 


$("#form_header_bom").on("click", "#bm1", function()
{
$.ajax
({
type: "POST",
url: "/h_bom_Rest/h_bom_Save",
data: form_header_bom.serialize(),
cache: false,
beforeSend: function(data)
{
var result = data;
Sender();
},
success: function(data)
{
var result = data;
success();
},
complete: function(data)
{
var result = data;
complete();
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 

$("#form_Formula").on("click", "#fm", function()
{
$.ajax
({
type: "POST",
url: "/Api/FormulaSave",
data: form_Formula.serialize(),
cache: false,
beforeSend: function(data)
{
var result = data;
Sender();
},
success: function(data)
{
var result = data;
success();
},
complete: function(data)
{
var result = data;
complete();
},
error: function(xhr, status, error)
{
ERROR();
}
});
return false;
}); 


$("#form_Tr_asset").on("click", "#btn_tr_asset", function()
{
$.ajax
({
type: "POST",
url: "/AssetActiveSave",
data: form_Tr_asset.serialize(),
cache: false,
success: function(data)
{
var result = data;
success();
},
error: function(data)
{
ERROR();
}
});
return false;
}); 

$("#form_sc").on("click", "#btn_sc", function()
{
$.ajax
({
type: "POST",
url: "/submit_sc",
data: form_sc.serialize(),
cache: false,
timeout: 60000000000,
beforeSend: function(data)
{
var result = data;
Sender();
},
success: function(data)
{
var result = data;
success();
},
complete: function(data)
{
var result = data;
complete();
},
error: function(data)
{
ERROR();
}
});
return false;
}); 










//function savedata()
//{
//beforeSend: function(data)
//{
//var result = data;
//Sender();
//},
//success: function(data)
//{
//var result = data;
//success();
//},
//complete: function(data)
//{
//var result = data;
//complete();
//},
//error: function(xhr, status, error)
//{
//ERROR();
//}
//}

function Sender()
{
$("#info").html('Send');
$("#info").addClass("alert alert-success");
$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});
}
function success()
{
$("#info").html('success');
$("#info").addClass("alert alert-success");
$("#info").fadeTo(2000, 500).slideUp(500, function()
{
$("#info").slideUp(500);
});




}
function complete()
 {
 $("#info").html('complete');
 $("#info").addClass("alert alert-success");
 $("#info").fadeTo(2000, 500).slideUp(500, function()
 {
 $("#info").slideUp(500);
 });
 }
 function ERROR()
  {
  $("#info").html('lengkapi kembali data anda / pastikan tidak salah ketik');
  $("#info").addClass("alert alert-danger");
  $("#info").fadeTo(2000, 500).slideUp(500, function()
  {
  $("#info").slideUp(500);
  });




  }


//type: "POST",
//url: "/HPRSave",
//data: form_header_pr.serialize(),
//cache: false,

//function simpandata(url, data, callback) {
//    $.ajax({
//        url: url, // server url
//        type: 'POST', //POST or GET
//        data: data, // data to send in ajax format or querystring format
//        beforeSend: function() {
//           Sender();
//            // do some loading options
//        },
//        success: function(data) {
//            callback(data); // return data in callback
//        },
//
//        complete: function() {
//           complete();
//            // success alerts
//        },
//
//        error: function(xhr, status, error) {
//         ERROR();// error occur
//        }
//
//    });
//}

