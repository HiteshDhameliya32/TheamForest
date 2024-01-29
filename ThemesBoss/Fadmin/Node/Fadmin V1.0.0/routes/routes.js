const { authenticate,signup,login } = require("../controllers/auth.controller");

module.exports = (route) => {
  // Authentication
  // route.use(authenticate)

  // Pages
  // route.get("/pages/login-v1", (req, res) => {
  //   res.render("./pages/login-v1", { ...metaData });
  // });
  // route.post("/pages/login-v1",login );

  // route.get("/pages/register-v1", (req, res) => {
  //   res.render("./pages/register-v1", { ...metaData });
  // });

    // Index pages
    route.get("/", (req, res) => {
      const metaData = {
        'dataCurrentPage':'index',
        'title': 'Dashborad', 
        'breadcrumb': 'Fadmin',
        'description':'Nam libero tempore, cum soluta nobis'
      }
      res.render("index",metaData);
    });


  // Charts
  route.get("/chart-morris", (req, res) => {
    const metaData = {
      'dataCurrentPage':'chart-morris',
      'title': 'Morris Chart', 
      'breadcrumb': 'Fadmin / Charts',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./chart-morris", { ...metaData });
  });
  
  route.get("/apexcharts", (req, res) => {
    const metaData = {
      'dataCurrentPage':'apexcharts',
      'title': 'Apexcharts', 
      'breadcrumb': 'Fadmin / Charts',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./apexcharts", { ...metaData });
  });

  route.get("/echarts", (req, res) => {
    const metaData = {
      'dataCurrentPage':'echarts',
      'title': 'Echarts', 
      'breadcrumb': 'Fadmin / Charts',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./echarts", { ...metaData });
  });

  // Pages
  route.get("/pages-400", (req, res) => {
    res.render("./pages-400");
  });
  route.get("/pages-403", (req, res) => {
    res.render("./pages-403");
  });
  route.get("/pages-500", (req, res) => {
    res.render("./pages-500");
  });
  route.get("/pages-503", (req, res) => {
    res.render("./pages-503");
  });
  route.get("/pages-lock-screen", (req, res) => {
    res.render("./pages-lock-screen");
  });
  route.get("/pages-login", (req, res) => {
    res.render("./pages-login");
  });
  route.get("/pages-recoverpw", (req, res) => {
    res.render("./pages-recoverpw");
  });
  route.get("/pages-register", (req, res) => {
    res.render("./pages-register");
  });


  // Forms
  route.get("/form-elements", (req, res) => {
    const metaData = {
      'dataCurrentPage':'form-elements',
      'title': 'Form Elements', 
      'breadcrumb': 'Fadmin / Forms',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./form-elements", { ...metaData });
  });

  route.get("/form-mask", (req, res) => {
    const metaData = {
      'dataCurrentPage':'form-mask',
      'title': 'Form Mask', 
      'breadcrumb': 'Fadmin / Forms',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./form-mask", { ...metaData });
  });

  route.get("/form-xeditable", (req, res) => {
    const metaData = {
      'dataCurrentPage':'form-xeditable',
      'title': 'Form Xeditable', 
      'breadcrumb': 'Fadmin / Forms',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./form-xeditable", { ...metaData });
  });


  // Icons
  route.get("/icons-dripicons", (req, res) => {
    const metaData = {
      'dataCurrentPage':'icons-dripicons',
      'title': 'Dripicons Icons', 
      'breadcrumb': 'Fadmin / Icon',
      'description':'Nam libero tempore, cum soluta nobis'
  }
    res.render("./icons-dripicons", { ...metaData });
  });

  route.get("/icons-feather", (req, res) => {
    const metaData = {
      'dataCurrentPage':'icons-feather',
      'title': 'Feather Icons', 
      'breadcrumb': 'Fadmin / Icon',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./icons-feather", { ...metaData });
  });

  route.get("/icons-fontawesome", (req, res) => {
    const metaData = {
      'dataCurrentPage':'icons-fontawesome',
      'title': 'Font Awesome', 
      'breadcrumb': 'Fadmin / Icon',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./icons-fontawesome", { ...metaData });
  });

  route.get("/icons-ion", (req, res) => {
    const metaData = {
      'dataCurrentPage':'icons-ion',
      'title': 'Ion Icons', 
      'breadcrumb': 'Fadmin / Icon',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./icons-ion", { ...metaData });
  });

  route.get("/icons-material", (req, res) => {
    const metaData = {
      'dataCurrentPage':'icons-material',
      'title': 'Material Design Icons', 
      'breadcrumb': 'Fadmin / Icon',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./icons-material", { ...metaData });
  });

  route.get("/icons-themify", (req, res) => {
    const metaData = {
      'dataCurrentPage':'icons-themify',
      'title': 'Themify Icons', 
      'breadcrumb': 'Fadmin / Icon',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./icons-themify", { ...metaData });
  });

  route.get("/icons-typicons", (req, res) => {
    const metaData = {
      'dataCurrentPage':'icons-typicons',
      'title': 'Typicons Icons', 
      'breadcrumb': 'Fadmin / Icon',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./icons-typicons", { ...metaData });
  });


  // Layouts
  route.get("/layout-blank", (req, res) => {
    const metaData = {
      'dataCurrentPage':'layout-blank',
      'title': 'Blank Page', 
      'breadcrumb': 'Fadmin / Layout',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./layout-blank", { ...metaData });
  });

  route.get("/layout-boxed", (req, res) => {
    const metaData = {
      'dataCurrentPage':'layout-boxed',
      'title': 'Boxed Layout', 
      'breadcrumb': 'Fadmin / Layout',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./layout-boxed", { ...metaData });
  });

  route.get("/layout-collapsed-sidebar", (req, res) => {
    const metaData = {
      'dataCurrentPage':'layout-collapsed-sidebar',
      'title': 'Collapsed Sidebar', 
      'breadcrumb': 'Fadmin / Layout',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./layout-collapsed-sidebar", { ...metaData });
  });

  route.get("/layout-fixed-header", (req, res) => {
    const metaData = {
      'dataCurrentPage':'layout-fixed-header',
      'title': 'Fixed Header', 
      'breadcrumb': 'Fadmin / Layout',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./layout-fixed-header", { ...metaData });
  });

  route.get("/layout-fixed-sidebar-header", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'layout-fixed-sidebar-header',
      'title': 'Fixed Sidebar & Header', 
      'breadcrumb': 'Fadmin / Layout', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./layout-fixed-sidebar-header", { ...metaData });
  });

  route.get("/layout-fixed-sidebar", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'layout-fixed-sidebar',
      'title': 'Fixed Sidebar', 
      'breadcrumb': 'Fadmin / Layout', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./layout-fixed-sidebar", { ...metaData });
  });

  // Tables
  route.get("/tables-basic", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'tables-basic',
      'title': 'Basic Tables', 
      'breadcrumb': 'Fadmin / Tables', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./tables-basic", { ...metaData });
  });

  route.get("/tables-footable", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'tables-footable',
      'title': 'Sortable Table', 
      'breadcrumb': 'Fadmin / Tables', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./tables-footable", { ...metaData });
  });
  route.get("/tables-responsive", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'tables-responsive',
      'title': 'Responsive Table', 
      'breadcrumb': 'Fadmin / Tables', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./tables-responsive", { ...metaData });
  });

  // UI Elements
  route.get("/ui-alerts", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'ui-alerts',
      'title': 'Alerts', 
      'breadcrumb': 'Fadmin / Elements', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./ui-alerts", { ...metaData });
  });

  route.get("/ui-buttons", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'ui-buttons',
      'title': 'Button', 
      'breadcrumb': 'Fadmin / Elements', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./ui-buttons", { ...metaData });
  });

  route.get("/ui-cards", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'ui-cards',
      'title': 'Card',
      'breadcrumb': 'Fadmin / Elements',
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./ui-cards", { ...metaData });
  });

  route.get("/ui-grid", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'ui-grid',
      'title': 'Grid', 
      'breadcrumb': 'Fadmin / Elements', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./ui-grid", { ...metaData });
  });

  route.get("/ui-progressbars", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'ui-progressbars',
      'title': 'Progressbars', 
      'breadcrumb': 'Fadmin / Elements', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./ui-progressbars", { ...metaData });
  });

  route.get("/ui-tabs-accordions", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'ui-tabs',
      'title': 'Tab & Accordions', 
      'breadcrumb': 'Fadmin / Elements', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./ui-tabs-accordions", { ...metaData });
  });

  route.get("/ui-typography", (req, res) => {
    const metaData = {
      'dataCurrentPage': 'ui-typography',
      'title': 'Typography', 
      'breadcrumb': 'Fadmin / Elements', 
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./ui-typography", { ...metaData });
  });

  // Maps
  route.get("/maps", (req, res) => {
    const metaData = {
      'dataCurrentPage':'maps',
      'title': 'Vector Maps',
      'breadcrumb': 'Fadmin',
      'description': 'Nam libero tempore, cum soluta nobis'
    }
    res.render("./maps", { ...metaData });
  });

  //Docs
  route.get("/documentation", (req, res) => {
    const metaData = {
      'dataCurrentPage':'documentation',
      'title': 'Documentation', 
      'breadcrumb': 'Fadmin',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./documentation", { ...metaData });
  });

  route.get("/changelog", (req, res) => {
    const metaData = {
      'dataCurrentPage':'changelog',
      'title': 'Changelog', 
      'breadcrumb': 'Fadmin',
      'description':'Nam libero tempore, cum soluta nobis'
    }
    res.render("./changelog", { ...metaData });
  });
}