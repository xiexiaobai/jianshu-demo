import {createGlobalStyle} from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    /* 页面基本样式 */
    html {
        /* 方便em与px相互转换，1em = 16px*62.5% = 10px */
        font-size: 62.5%;
        font-family: sans-serif;
        color: #222;
    }
    body {
        /* 1.2rem = 12px */
        font-size: 1.2rem;
        line-height: 1.5;
        background-color: #f7f7f7;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    @font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1560305945521'); /* IE9 */
  src: url('iconfont.eot?t=1560305945521#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUwAAsAAAAAClgAAATiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqHTIY1ATYCJAMYCw4ABCAFhG0HVhvpCBEVpC2R/RxwN5da21BRGRU1lvBY/9F8sEiXmZk7gmgtq96ZhRCrRDErVmEVIZMnSyAksHNvNGkW6tUN5ZUzs/AxuRwgVEhaL8okeyW8KMQXA2BzrQ7YqAi1JM/Se/QLScvZ4sz9ca9qpo0FMp8l22WuSZ9yoXBoAgVodE/uFm7FSljTasCudvmZoPsJtBvjDR6lZheDRqYcFoh7HW0NoAk55BxqaMxVyrkZxGvA0xSz0VUAvLJ/Pv6BwBAChTIB5djL65RmsPcTvVVyyP+kahMFlO35IFxEwjwgE89SAw8ktzCPo/3zG7JjdGoU8k/02vZ1+GvmrfL//5BGiYROtZGkUM7snycqQIZO4E+LJT+RziXx01YvbgyHIt/IgEvwW6k6R5aqxX1GgJgFID4DhTDvC7OsVqiySCrly2QQStOMBUKJqakRT8oTGbXVy5rq2c3UFsUmcmOlRlOs1Zbo9WU63RhNV+rIgn0aTZ98GCvxytEkjDYWy5TCNqn/DI2mhWUJYskW4kZcmZpQ4xIFNGMJBmcUL6DNXs+gcYbGjkYXn4wfdsdosZwVb7wavHa/qytLNyaIA2EHotQbcJzB21hILLGi1AzA3msnMHJMweAka5ZN01vUEW+zAjN6sbVr3TYQTSXiXmspfZznUQ0YxRaJXWml2LrEq1QSeElSE+1xQg91uvHS8xp7/iptiuyC3kmwWlfMkHIqmiIkDA5oTMxC14hrrHwhtpfRtFgqZyGPUktk3e75/KPt13suX8+WPU22U4WIL8e4f/5wj0lNmaHxuyR3vBZzrl3jQLuYlUHDHgt2fovnh/fsfDBqAE3ftHEyoty1W6HFGL954yS0cdMmNM73v0PzF6Be1Td/YQ/s9EJ/mF7Qi4DW5JPd0I9zf0tNw/EuvyDD31RQCOc/+G2mGt61WJ46yEUIj7pJljpOz+ARZL0RAhs7SRMnlLXqYn7fLwngQeVPlb3G2bEYW3fagGOScP3xJMsSn6YQF6NqJYAX+SCWnVCeUGiBnEW34F5X/kdkaLwvkoShKYEqBA9vHOKbqiJGgP+n8/Iy+9GwGg2EutW3XD3i0xfLobZuo9C4m30D+O3OmwMDR/PyIrOfi6ht24DHwFi7/MwgvhEvLZm070/LEko5af4njPqNsDtGSGb3C6CgP5sUXow0cBcuM53loh5zm+S18nbyW/mPeW38nfomLngGWicTBuMB0i10P4w/Rd1Ae0tTEsYZ99Du50fXTMc6w+hfjeQOzXx1nWJhx1pTMihn8OQZlVY+osqSI/mrVpxVfiPr+wpUXqq51jbt6gQPZqTf47ZMQ6VbCY0hHwq1UUga4+iMn4dSh3WoNHah3Zy0izsMGJREFgFmTWcg9NoBhW5fIOl1DZ3xj6A07BNUeoMD7a7C9JodJiXRcXtEHDMuMH1AzexJc+eb0/6NotgxBtU24x9jUmnomy5a/kKPsY0TUhVDzgQU2cGbeRhay7BG1jjnRua83tuW0l6pmdltbh4Rx4wLmD5AzezJnJ5vse//RlHsGHMQP5L/GJNaH/QaXQn0l8GXQhxLb6pikClHgIRWduBNPrRqgcGavpfGOTdkjdx619I4Kmto+je5o7wC7ZTrVVFEihxlVFG7PZHKj968JvpT4pIKH93IkzpSxCRPWh0XrTYbAAA=') format('woff2'),
  url('iconfont.woff?t=1560305945521') format('woff'),
  url('iconfont.ttf?t=1560305945521') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1560305945521#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconzhinanzhen:before {
  content: "\e695";
}

.iconsousuo:before {
  content: "\e61e";
}

.iconmaobi:before {
  content: "\e602";
}

.iconfresh:before {
  content: "\e88c";
}

.iconshouji:before {
  content: "\e638";
}
`
