jQuery(function($) {
  $("header#navbar").html("").addClass("crm-container");
  $("h1.page-header").appendTo("header#navbar");
  $(".crm-summary-contactname-block").appendTo("header#navbar");
  $("header#navbar").attr("id","crm-container");
});
