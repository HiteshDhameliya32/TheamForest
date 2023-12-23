// =======================================================
// -----------   Light Able Theme Configuration  -----------
// =======================================================
const caption_show = 'true'; // [ false , true ]
const dark_navbar = 'false'; // [ false , true ]
const preset_theme = 'preset-1'; // [ preset-1 to preset-10 ]
const dark_layout = 'false'; // [ false , true , default ]
const rtl_layout = 'false'; // [ false , true ]
const box_container = 'false'; // [ false , true ]
const version = 'v1.1.0';

if (rtl_layout == "true") {
  var rtltemp = "rtl"
} else {
  var rtltemp = "ltr"
}

if (dark_layout == 'true') {
  var darklayouttemp = "dark"
} else {
  var darklayouttemp = "light"
}
if (dark_navbar == 'true') {
  var darknavbartemp = "dark"
} else {
  var darknavbartemp = "light"
}

const layout = {
  pc_caption_show: caption_show,
  pc_preset_theme: preset_theme,
  pc_dark_navbar: dark_navbar,
  pc_dark_layout: dark_layout,
  pc_rtl_layout: rtl_layout,
  pc_box_container: box_container,
  pc_theme_version: version,
  bodySetup: 'data-pc-preset="' + preset_theme + '" data-pc-sidebar-theme="' + darknavbartemp + '" data-pc-sidebar-caption="' + caption_show + '" data-pc-direction="' + rtltemp + '" data-pc-theme="' + darklayouttemp + '"',
};

const { authenticate,signup,login } = require("../controllers/auth.controller");

module.exports = (route) => {
  // Authentication
  route.use(authenticate)

  // Pages
  route.get("/pages/login-v1", (req, res) => {
    res.render("./pages/login-v1", { ...layout });
  });
  route.post("/pages/login-v1",login );

  route.get("/pages/register-v1", (req, res) => {
    res.render("./pages/register-v1", { ...layout });
  });

  route.post("/pages/register-v1", signup);


  route.get("/pages/forgot-password-v1", (req, res) => {
    res.render("./pages/forgot-password-v1", { ...layout });
  });
  route.post("/pages/reset-password-v1", (req, res) => {
    res.render("./pages/reset-password-v1", { ...layout });
  });
  route.get("/pages/code-verification-v1", (req, res) => {
    res.render("./pages/code-verification-v1", { ...layout });
  });
  route.get("/pages/login-v2", (req, res) => {
    res.render("./pages/login-v2", { ...layout });
  });
  route.get("/pages/register-v2", (req, res) => {
    res.render("./pages/register-v2", { ...layout });
  });
  route.get("/pages/forgot-password-v2", (req, res) => {
    res.render("./pages/forgot-password-v2", { ...layout });
  });
  route.get("/pages/reset-password-v2", (req, res) => {
    res.render("./pages/reset-password-v2", { ...layout });
  });
  route.get("/pages/code-verification-v2", (req, res) => {
    res.render("./pages/code-verification-v2", { ...layout });
  });
  route.get("/pages/error-404", (req, res) => {
    res.render("./pages/error-404", { ...layout });
  });
  route.get("/pages/connection-lost", (req, res) => {
    res.render("./pages/connection-lost", { ...layout });
  });
  route.get("/pages/under-construction", (req, res) => {
    res.render("./pages/under-construction", { ...layout });
  });
  route.get("/pages/coming-soon", (req, res) => {
    res.render("./pages/coming-soon", { ...layout });
  });
  route.get("/pages/landing", (req, res) => {
    res.render("./pages/landing", { ...layout });
  });
  route.get("/other/sample-page", (req, res) => {
    res.render("./other/sample-page", { ...layout });
  });

  // Index pages
  route.get("/", (req, res) => {
    res.render("index", { ...layout });
  });
  route.get("/dashboard/index", (req, res) => {
    res.render("./dashboard/index", { ...layout });
  });

  // Demo
  route.get("/demo/layout-compact", (req, res) => {
    res.render("./demo/layout-compact", { ...layout });
  });
  route.get("/demo/layout-horizontal", (req, res) => {
    res.render("./demo/layout-horizontal", { ...layout });
  });
  route.get("/demo/layout-2", (req, res) => {
    res.render("./demo/layout-2", { ...layout });
  });
  route.get("/demo/layout-2", (req, res) => {
    res.render("./demo/layout-2", { ...layout });
  });
  route.get("/demo/layout-tab", (req, res) => {
    res.render("./demo/layout-tab", { ...layout });
  });
  route.get("/demo/layout-vertical", (req, res) => {
    res.render("./demo/layout-vertical", { ...layout });
  });

  // UI-KIT
  route.get("/ui-kit/settings", (req, res) => {
    res.render("./ui-kit/settings", { ...layout });
  });
  route.get("/ui-kit/plans", (req, res) => {
    res.render("./ui-kit/plans", { ...layout });
  });
  route.get("/ui-kit/login-modal", (req, res) => {
    res.render("./ui-kit/login-modal", { ...layout });
  });
  route.get("/ui-kit/search-page", (req, res) => {
    res.render("./ui-kit/search-page", { ...layout });
  });
  route.get("/ui-kit/affiliate-dashboard", (req, res) => {
    res.render("./ui-kit/affiliate-dashboard", { ...layout });
  });
  route.get("/ui-kit/gallery", (req, res) => {
    res.render("./ui-kit/gallery", { ...layout });
  });
  route.get("/ui-kit/team", (req, res) => {
    res.render("./ui-kit/team", { ...layout });
  });
  route.get("/ui-kit/loading", (req, res) => {
    res.render("./ui-kit/loading", { ...layout });
  });
  route.get("/ui-kit/contact-search", (req, res) => {
    res.render("./ui-kit/contact-search", { ...layout });
  });
  route.get("/ui-kit/contact-us", (req, res) => {
    res.render("./ui-kit/contact-us", { ...layout });
  });

  // Widget
  route.get("/widget/w_statistics", (req, res) => {
    res.render("./widget/w_statistics", { ...layout });
  });
  route.get("/widget/w_user", (req, res) => {
    res.render("./widget/w_user", { ...layout });
  });
  route.get("/widget/w_data", (req, res) => {
    res.render("./widget/w_data", { ...layout });
  });
  route.get("/widget/w_chart", (req, res) => {
    res.render("./widget/w_chart", { ...layout });
  });

  // Elements
  route.get("/elements/bc_alert", (req, res) => {
    res.render("./elements/bc_alert", { ...layout });
  });
  route.get("/elements/icon-feather", (req, res) => {
    res.render("./elements/icon-feather", { ...layout });
  });
  route.get("/elements/icon-fontawesome", (req, res) => {
    res.render("./elements/icon-fontawesome", { ...layout });
  });
  route.get("/elements/icon-material", (req, res) => {
    res.render("./elements/icon-material", { ...layout });
  });
  route.get("/elements/icon-tabler", (req, res) => {
    res.render("./elements/icon-tabler", { ...layout });
  });
  route.get("/elements/icon-phosphor", (req, res) => {
    res.render("./elements/icon-phosphor", { ...layout });
  });
  route.get("/elements/icon-custom", (req, res) => {
    res.render("./elements/icon-custom", { ...layout });
  });

  // Forms Elements
  route.get("/forms/form_elements", (req, res) => {
    res.render("./forms/form_elements", { ...layout });
  });
  route.get("/forms/form_floating", (req, res) => {
    res.render("./forms/form_floating", { ...layout });
  });
  route.get("/forms/form2_basic", (req, res) => {
    res.render("./forms/form2_basic", { ...layout });
  });
  route.get("/forms/form2_input_group", (req, res) => {
    res.render("./forms/form2_input_group", { ...layout });
  });
  route.get("/forms/form2_checkbox", (req, res) => {
    res.render("./forms/form2_checkbox", { ...layout });
  });
  route.get("/forms/form2_radio", (req, res) => {
    res.render("./forms/form2_radio", { ...layout });
  });
  route.get("/forms/form2_switch", (req, res) => {
    res.render("./forms/form2_switch", { ...layout });
  });
  route.get("/forms/form2_megaoption", (req, res) => {
    res.render("./forms/form2_megaoption", { ...layout });
  });

  // Forms Plugins
  route.get("/forms/form2_datepicker", (req, res) => {
    res.render("./forms/form2_datepicker", { ...layout });
  });
  route.get("/forms/form2_daterangepicker", (req, res) => {
    res.render("./forms/form2_daterangepicker", { ...layout });
  });
  route.get("/forms/form2_timepicker", (req, res) => {
    res.render("./forms/form2_timepicker", { ...layout });
  });
  route.get("/forms/form2_choices", (req, res) => {
    res.render("./forms/form2_choices", { ...layout });
  });
  route.get("/forms/form2_recaptcha", (req, res) => {
    res.render("./forms/form2_recaptcha", { ...layout });
  });
  route.get("/forms/form2_inputmask", (req, res) => {
    res.render("./forms/form2_inputmask", { ...layout });
  });
  route.get("/forms/form2_clipboard", (req, res) => {
    res.render("./forms/form2_clipboard", { ...layout });
  });
  route.get("/forms/form2_nouislider", (req, res) => {
    res.render("./forms/form2_nouislider", { ...layout });
  });
  route.get("/forms/form2_switchjs", (req, res) => {
    res.render("./forms/form2_switchjs", { ...layout });
  });
  route.get("/forms/form2_typeahead", (req, res) => {
    res.render("./forms/form2_typeahead", { ...layout });
  });

  // Forms
  route.get("/forms/form2_tinymce", (req, res) => {
    res.render("./forms/form2_tinymce", { ...layout });
  });
  route.get("/forms/form2_quill", (req, res) => {
    res.render("./forms/form2_quill", { ...layout });
  });
  route.get("/forms/editor-classic", (req, res) => {
    res.render("./forms/editor-classic", { ...layout });
  });
  route.get("/forms/editor-document", (req, res) => {
    res.render("./forms/editor-document", { ...layout });
  });
  route.get("/forms/editor-inline", (req, res) => {
    res.render("./forms/editor-inline", { ...layout });
  });
  route.get("/forms/editor-balloon", (req, res) => {
    res.render("./forms/editor-balloon", { ...layout });
  });
  route.get("/forms/form2_markdown", (req, res) => {
    res.render("./forms/form2_markdown", { ...layout });
  });
  route.get("/forms/form2_lay-default", (req, res) => {
    res.render("./forms/form2_lay-default", { ...layout });
  });
  route.get("/forms/form2_lay-multicolumn", (req, res) => {
    res.render("./forms/form2_lay-multicolumn", { ...layout });
  });
  route.get("/forms/form2_lay-actionbars", (req, res) => {
    res.render("./forms/form2_lay-actionbars", { ...layout });
  });
  route.get("/forms/form2_lay-stickyactionbars", (req, res) => {
    res.render("./forms/form2_lay-stickyactionbars", { ...layout });
  });
  route.get("/forms/file-upload", (req, res) => {
    res.render("./forms/file-upload", { ...layout });
  });
  route.get("/forms/form2_flu-uppy", (req, res) => {
    res.render("./forms/form2_flu-uppy", { ...layout });
  });
  route.get("/forms/form-validation", (req, res) => {
    res.render("./forms/form-validation", { ...layout });
  });
  route.get("/forms/image_crop", (req, res) => {
    res.render("./forms/image_crop", { ...layout });
  });

  // Tables
  route.get("/table/tbl_bootstrap", (req, res) => {
    res.render("./table/tbl_bootstrap", { ...layout });
  });
  route.get("/table/tbl_sizing", (req, res) => {
    res.render("./table/tbl_sizing", { ...layout });
  });
  route.get("/table/tbl_border", (req, res) => {
    res.render("./table/tbl_border", { ...layout });
  });
  route.get("/table/tbl_styling", (req, res) => {
    res.render("./table/tbl_styling", { ...layout });
  });
  route.get("/table/tbl_dt-simple", (req, res) => {
    res.render("./table/tbl_dt-simple", { ...layout });
  });
  route.get("/table/tbl_dt-dynamic-import", (req, res) => {
    res.render("./table/tbl_dt-dynamic-import", { ...layout });
  });
  route.get("/table/tbl_dt-render-column-cells", (req, res) => {
    res.render("./table/tbl_dt-render-column-cells", { ...layout });
  });
  route.get("/table/tbl_dt-column-manipulation", (req, res) => {
    res.render("./table/tbl_dt-column-manipulation", { ...layout });
  });
  route.get("/table/tbl_dt-datetime-sorting", (req, res) => {
    res.render("./table/tbl_dt-datetime-sorting", { ...layout });
  });
  route.get("/table/tbl_dt-methods", (req, res) => {
    res.render("./table/tbl_dt-methods", { ...layout });
  });
  route.get("/table/tbl_dt-add-rows", (req, res) => {
    res.render("./table/tbl_dt-add-rows", { ...layout });
  });
  route.get("/table/tbl_dt-fetch-api", (req, res) => {
    res.render("./table/tbl_dt-fetch-api", { ...layout });
  });
  route.get("/table/tbl_dt-filters", (req, res) => {
    res.render("./table/tbl_dt-filters", { ...layout });
  });
  route.get("/table/tbl_dt-export", (req, res) => {
    res.render("./table/tbl_dt-export", { ...layout });
  });
  route.get("/table/dt_advance", (req, res) => {
    res.render("./table/dt_advance", { ...layout });
  });
  route.get("/table/dt_styling", (req, res) => {
    res.render("./table/dt_styling", { ...layout });
  });
  route.get("/table/dt_api", (req, res) => {
    res.render("./table/dt_api", { ...layout });
  });
  route.get("/table/dt_plugin", (req, res) => {
    res.render("./table/dt_plugin", { ...layout });
  });
  route.get("/table/dt_sources", (req, res) => {
    res.render("./table/dt_sources", { ...layout });
  });
  route.get("/table/dt_ext_autofill", (req, res) => {
    res.render("./table/dt_ext_autofill", { ...layout });
  });
  route.get("/table/dt_ext_basic_buttons", (req, res) => {
    res.render("./table/dt_ext_basic_buttons", { ...layout });
  });
  route.get("/table/dt_ext_export_buttons", (req, res) => {
    res.render("./table/dt_ext_export_buttons", { ...layout });
  });
  route.get("/table/dt_ext_col_reorder", (req, res) => {
    res.render("./table/dt_ext_col_reorder", { ...layout });
  });
  route.get("/table/dt_ext_fixed_columns", (req, res) => {
    res.render("./table/dt_ext_fixed_columns", { ...layout });
  });
  route.get("/table/dt_ext_fixed_header", (req, res) => {
    res.render("./table/dt_ext_fixed_header", { ...layout });
  });
  route.get("/table/dt_ext_key_table", (req, res) => {
    res.render("./table/dt_ext_key_table", { ...layout });
  });
  route.get("/table/dt_ext_responsive", (req, res) => {
    res.render("./table/dt_ext_responsive", { ...layout });
  });
  route.get("/table/dt_ext_row_reorder", (req, res) => {
    res.render("./table/dt_ext_row_reorder", { ...layout });
  });
  route.get("/table/dt_ext_scroller", (req, res) => {
    res.render("./table/dt_ext_scroller", { ...layout });
  });
  route.get("/table/dt_ext_select", (req, res) => {
    res.render("./table/dt_ext_select", { ...layout });
  });

  // Charts & Maps
  route.get("/chart/chart-apex", (req, res) => {
    res.render("./chart/chart-apex", { ...layout });
  });
  route.get("/chart/map-vector", (req, res) => {
    res.render("./chart/map-vector", { ...layout });
  });
  // Application
  route.get("/application/calendar", (req, res) => {
    res.render("./application/calendar", { ...layout });
  });
  route.get("/application/chat", (req, res) => {
    res.render("./application/chat", { ...layout });
  });
  route.get("/application/gallery", (req, res) => {
    res.render("./application/gallery", { ...layout });
  });
  route.get("/application/ecom_product", (req, res) => {
    res.render("./application/ecom_product", { ...layout });
  });
  route.get("/application/ecom_product-details", (req, res) => {
    res.render("./application/ecom_product-details", { ...layout });
  });
  route.get("/application/ecom_product-list", (req, res) => {
    res.render("./application/ecom_product-list", { ...layout });
  });
  route.get("/application/ecom_product-add", (req, res) => {
    res.render("./application/ecom_product-add", { ...layout });
  });
  route.get("/application/ecom_checkout", (req, res) => {
    res.render("./application/ecom_checkout", { ...layout });
  });
  route.get("/application/mail", (req, res) => {
    res.render("./application/mail", { ...layout });
  });
  route.get("/application/account-profile", (req, res) => {
    res.render("./application/account-profile", { ...layout });
  });
  route.get("/application/social-media", (req, res) => {
    res.render("./application/social-media", { ...layout });
  });
  route.get("/application/user-card", (req, res) => {
    res.render("./application/user-card", { ...layout });
  });
  route.get("/application/user-list", (req, res) => {
    res.render("./application/user-list", { ...layout });
  });
  route.get("/application/invoice-list", (req, res) => {
    res.render("./application/invoice-list", { ...layout });
  });
  route.get("/application/invoice-create", (req, res) => {
    res.render("./application/invoice-create", { ...layout });
  });
  route.get("/application/invoice-view", (req, res) => {
    res.render("./application/invoice-view", { ...layout });
  });

  

}