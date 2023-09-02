import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        // header vars
        --header-blue: #01579b;
        --header-list-color: #fff;
        --header-list-hover: #81d4ef;
        --header-list-fs: .875em;
        --header-border-color: #0277bd;

        // Sidebar vars
        --sidebar-link-color: #0277bd;
        --sidebar-link-fs: .75em; 
        --sidebar-circle-background: #eee;
        --sidebar-circle-fs: 1.25em;
        --sidebar-circle-hover-background: #00BCD4;
        --sidebar-title-color: #555555;


        // Main Vars 
        post-title-color: #000;
        post-title-fs: .8125;
        post-category-fw: 500;
        post-category-fs: .6875;

        // Global vars
        --link-hover-orange: #f66767;

    }
    
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    /* Remove default margin */
    * {
    margin: 0;
    padding: 0;
    font:inherit
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }

    html,body {
        height: 100%
    }

    /* Set core body defaults */

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture,
    svg {
    display: block;
    max-width: 100%
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-fmotion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }


    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
`;
