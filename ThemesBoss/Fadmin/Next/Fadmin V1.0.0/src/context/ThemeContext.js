
import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const ThemeContext = createContext();

// Fadmin-Theme reducer
function reducer(state, action) {
    switch (action.type) {
        case "SUBMENU_ANIMATION_SPEED": {
            return { ...state, submenu_animation_speed: action.value };
        }
        case "SUBMENU_OPACITY_ANIMATION": {
            return { ...state, submenu_opacity_animation: action.value };
        }
        case "LAYOUT": {
            return { ...state, layout: action.value };
        }
        case "PAGE_SIDEBAR_FIXED": {
            return { ...state, page_sidebar_fixed: action.value };
        }
        case "PAGE_SIDEBAR_COLLAPSED": {
            return { ...state, page_sidebar_collapsed: action.value };
        }
        case "PAGE_HEADER_FIXED": {
            return { ...state, page_header_fixed: action.value };
        }
        case "RIGHT_SIDEBAR_DISPLAY": {
            return { ...state, right_sidebar_display: action.value };
        }
        case "PAGE_SIDEBAR_VISIBLE": {
            return { ...state, page_sidebar_display: action.value };
        }
        case "THEME_MODE": {
            return { ...state, theme_mode: action.value };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

// Fadmin-Theme context provider
function ThemeContextProvider({ children }) {
    const initialState = {
        submenu_animation_speed : 10, // in milliseconds higher number decrease speed of animation
        submenu_opacity_animation : true, // true, false // make sure that the submenu_opacity_animation is set to true for the submenu to be visible on click
        layout : "vertical", // vertical, blank, boxed // (documentElement => attribute => data-layout & if(boxed) page-content => class => container) Sets the layout mode to vertical, blank or boxed
        page_sidebar_fixed : false, // true, false // (body => class => page-sidebar-fixed) Sets the sidebar to fixed or not
        page_sidebar_collapsed : false, // true, false // (body => class => page-sidebar-collapsed) Sets the sidebar to collapsed or not
        page_header_fixed : false, // true, false // (body => class => page-header-fixed) Sets the header to fixed or not
        right_sidebar_display: false, // true, false // (body => class => right-sidebar-display) Sets the right sidebar to display or not
        page_sidebar_visible:false, // true, false // (body => class => page-sidebar-visible) Sets the sidebar to visible on small screens
        theme_mode: "light", // light, dark // (documentElement => attribute => data-bs-theme) Sets the theme mode to light or dark mode
    };

    const [controller, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Fadmin-Theme custom hook for using context
function useThemeContextController() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "useThemeContextController should be used inside the ThemeContextProvider."
        );
    }
    return context;
}

// Typechecking props for the MaterialUIControllerProvider
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Context module functions
const setSubmenuAnimationSpeed = (dispatch, value) => dispatch({ type: "SUBMENU_ANIMATION_SPEED", value });
const setSubmenuOpacityAnimation = (dispatch, value) => dispatch({ type: "SUBMENU_OPACITY_ANIMATION", value });
const setRightSidebarDisplay = (dispatch, value) => dispatch({ type: "RIGHT_SIDEBAR_DISPLAY", value });

const setLayout = (dispatch, value) => {
    document.documentElement.setAttribute("data-layout",value);
    if(value !== 'boxed'){
        document.querySelector('.page-content')?.classList?.remove('container');
    }else if(value === 'boxed'){
        document.querySelector('.page-content')?.classList?.add('container');
    }
    dispatch({ type: "LAYOUT", value })
};
const setPageSidebarCollapsed = (dispatch, value) => {
    const action = value ? "add" : "remove";
    document.body.classList[action]("page-sidebar-collapsed");
    return dispatch({ type: "PAGE_SIDEBAR_COLLAPSED", value });
};
const setThemeMode = (dispatch, value) => {
    document.documentElement.setAttribute("data-bs-theme", value)
    return dispatch({ type: "THEME_MODE", value })
};
const setPageHeaderFixed = (dispatch, value) => {
    const action = value ? "add" : "remove";
    document.body.classList[action]("page-header-fixed");
    return dispatch({ type: "PAGE_HEADER_FIXED", value });
};
const setPageSidebarFixed = (dispatch, value) =>{
    const action = value ? "add" : "remove";
    document.body.classList[action]("page-sidebar-fixed");
    return dispatch({ type: "PAGE_SIDEBAR_FIXED", value });
};

const setPageSidebarVisible = (dispatch, value) => {
    const action = value ? "add" : "remove";
    document.body.classList[action]("page-sidebar-visible"); 
    return dispatch({ type: "PAGE_SIDEBAR_VISIBLE", value })
};


export {
    ThemeContextProvider,
    useThemeContextController,
    setSubmenuAnimationSpeed,
    setSubmenuOpacityAnimation,
    setLayout,
    setPageSidebarFixed,
    setPageSidebarCollapsed,
    setPageHeaderFixed,
    setRightSidebarDisplay,
    setPageSidebarVisible,
    setThemeMode,
}












