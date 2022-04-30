import React from 'react'
import './glossary.scss'

function Glossary({ active }) {
    return (
        <>
            {/* <Navbar /> */}
            <div className={active ? "glossary-main ml-5" : "glossary-main"}>
                <div className="container">

                    <div className="row px-sm-0 px-4">
                        <div className="col-md-8 col-12 mx-auto">

                            <button className='w-100 newcls'>
                                <div className="innerCards">
                                    <div className='row'>
                                        <div className='col-md-12'>
                                        <div className='imageofdfk'>
                                        
                                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="64" height="64" rx="32" fill="white" />
                                            <g clip-path="url(#clip0_31_243)">
                                                <path d="M20.957 29.7941V41.7042L30.3646 53.7165L30.2668 29.7941H20.957ZM26.9958 44.237L24.2374 40.7061V33.0191H26.9958V44.237Z" fill="black" />
                                                <path d="M30.4965 54.0953L20.8267 41.7478V29.666H30.396V29.7937L30.4965 54.0953ZM21.0878 41.6605L30.2326 53.3375L30.1369 29.9225H21.0874L21.0878 41.6605ZM27.1266 44.6145L24.1069 40.749V32.891H27.1261L27.1266 44.6145ZM24.3671 40.6624L26.8645 43.8594V33.1463H24.3671V40.6624Z" fill="#1B1C1E" />
                                                <path d="M37.1158 38.2464L40.9819 34.4458L40.9745 34.4385V29.8783H37.8061V33.1625L34.9731 35.9478V29.8783H31.8047V53.7165L34.9731 49.7448V40.5448L36.6853 42.2283L36.6412 42.284V47.6149L40.9036 42.2533L37.1158 38.2464V38.2464Z" fill="black" />
                                                <path d="M31.6737 54.0878V29.7501H35.1031V35.6383L37.6753 33.1095V29.7501H41.1047V34.3853L41.1662 34.4455L37.2967 38.2496L41.0746 42.2463L36.5103 47.9871V42.2389L35.1022 40.8546V49.7883L31.6737 54.0878ZM31.9346 30.0064V53.3451L34.8422 49.7006V40.2353L36.8586 42.2177L36.7712 42.3282V47.2427L40.732 42.2605L36.9343 38.2431L40.8435 34.3997V30.0064H37.936V33.2158L34.8422 36.2573V30.0064H31.9346Z" fill="#1B1C1E" />
                                                <path d="M21.1807 29.2552V41.1653L30.314 52.8554V29.2552H21.1807ZM27.2195 43.6981L24.4609 40.1672V32.4802H27.2195V43.6981Z" fill="#1B1C1E" />
                                                <path d="M40.6613 41.3653L36.8923 37.6601L40.7584 33.8594L40.7511 33.8522V29.2919H37.5824V32.5762L34.7494 35.3615V29.2919H31.581V52.808L34.7494 48.8363V39.9585L36.4618 41.6419L36.4175 41.6976V46.7452L40.6726 41.3931L40.6813 41.385L40.6802 41.3836L40.682 41.3813L40.6613 41.3653V41.3653Z" fill="#1B1C1E" />
                                                <path d="M20.8085 28.0252L20.9393 28.8428C27.5475 27.649 34.3216 27.649 40.9297 28.8428L41.0605 28.0252C34.3659 26.8159 27.5031 26.8159 20.8085 28.0252V28.0252Z" fill="black" />
                                                <path d="M41.0376 28.9923L40.9061 28.9698C34.3137 27.776 27.555 27.776 20.9626 28.9698L20.8311 28.9935L20.6597 27.9225L20.7847 27.9C27.4947 26.6848 34.374 26.6848 41.0839 27.9L41.209 27.9225L41.0376 28.9923ZM30.9328 27.8165C34.2488 27.8174 37.558 28.1106 40.8207 28.6927L40.9111 28.1287C34.3137 26.9491 27.5538 26.9491 20.9564 28.1287L21.0466 28.6927C24.3087 28.1106 27.6174 27.8174 30.9328 27.8165V27.8165Z" fill="#1B1C1E" />
                                                <path d="M46.5753 16.4039C45.9481 16.6662 45.3285 16.9374 44.7166 17.2176C44.7291 17.7037 44.7398 18.1897 44.7487 18.6757C43.9524 19.0633 42.1893 19.8312 40.235 20.1103C39.5821 19.1993 38.8086 17.9082 38.3303 16.3879C38.6929 15.9477 39.0613 15.5106 39.4355 15.0767C39.1317 14.4915 38.8198 13.9082 38.4999 13.3269C38.0741 13.826 37.6561 14.3287 37.2458 14.8353C37.5346 15.3539 37.817 15.8743 38.093 16.3964L38.0914 16.3992C37.7548 16.9697 36.8908 18.303 35.5671 19.424C34.1478 18.7005 32.7312 17.3871 31.3851 15.1423C31.7744 14.5684 32.1727 13.998 32.5798 13.4312C32.0417 12.6068 31.486 11.789 30.9128 10.9778C30.3397 11.789 29.7843 12.6071 29.2465 13.4321C29.6728 14.0246 30.0893 14.6213 30.4963 15.222C29.303 17.4416 28.0021 18.7652 26.664 19.5084C25.2198 18.3156 24.3003 16.8463 23.9914 16.303V16.3019C24.264 15.7906 24.5429 15.2806 24.8281 14.7721C24.4189 14.2644 24.0021 13.7605 23.5779 13.2606C23.2566 13.8409 22.943 14.4231 22.637 15.0074C23.0258 15.4606 23.4082 15.9172 23.7844 16.3773C23.277 17.9675 22.4431 19.3058 21.7675 20.217C19.7655 19.8885 17.932 19.0712 17.1182 18.6687C17.127 18.1853 17.1377 17.7017 17.1504 17.2179C16.5384 16.9378 15.9188 16.6666 15.2916 16.4041C15.9139 17.3029 16.5201 18.2094 17.11 19.1235C18.7327 21.6989 20.232 24.3254 21.6078 27.003C27.782 25.9831 34.0861 25.9831 40.2603 27.003C41.7098 24.1851 43.2965 21.4234 45.0204 18.7179V18.7165C45.5272 17.9403 46.0456 17.1694 46.5753 16.4039V16.4039ZM20.5233 23.4812C20.3498 22.8935 20.1715 22.3081 19.9932 21.7215C20.5157 22.0646 21.0281 22.4152 21.5355 22.7708L22.0252 24.5413C21.533 24.1823 21.0307 23.8268 20.5233 23.4812ZM25.416 22.4935C25.3013 21.9746 25.185 21.4587 25.0695 20.9402C25.1448 20.9303 25.2203 20.9229 25.299 20.9177C25.6983 21.229 26.0903 21.5473 26.4795 21.8684C26.6002 22.4685 26.72 23.0701 26.8388 23.6732C26.3732 23.2761 25.8984 22.8815 25.416 22.4935V22.4935ZM30.9318 24.8763C30.6055 23.9083 30.2631 22.9436 29.9047 21.9823C30.2338 21.0094 30.5762 20.0393 30.9318 19.0721C31.2912 20.0402 31.6345 21.0106 31.9618 21.9834C31.6025 22.9458 31.2592 23.9101 30.9318 24.8763ZM36.4502 22.4935C35.9683 22.8811 35.4932 23.2761 35.0274 23.6738C35.1457 23.0712 35.2654 22.4696 35.3868 21.869C35.7769 21.548 36.167 21.2297 36.5672 20.9184C36.645 20.9233 36.7205 20.9308 36.7967 20.9409C36.6813 21.4587 36.5658 21.9748 36.4502 22.4935V22.4935ZM41.3946 23.1502C40.8847 23.4961 40.3823 23.8496 39.8876 24.2105C40.0482 23.6204 40.2141 23.0302 40.3798 22.44C40.8872 22.0845 41.4022 21.7337 41.927 21.393C41.745 21.9773 41.5692 22.5625 41.3946 23.1502Z" fill="black" />
                                                <path d="M31.0545 19.0271L30.9317 18.6957L30.8094 19.0273C30.4651 19.964 30.1182 20.9449 29.7808 21.9416L29.7666 21.984L29.7822 22.026C30.1673 23.066 30.503 24.0113 30.8082 24.9166L30.9315 25.2823L31.0558 24.9168C31.3984 23.9086 31.7349 22.9631 32.0844 22.0262L32.1 21.9843L32.0855 21.9416C31.7356 20.907 31.3984 19.9536 31.0545 19.0271V19.0271ZM30.9324 24.4724C30.6639 23.6875 30.3713 22.8682 30.0429 21.9802C30.335 21.1175 30.6336 20.2677 30.9324 19.4481C31.2284 20.2553 31.5214 21.0875 31.8237 21.9802C31.5212 22.7912 31.2286 23.6115 30.9324 24.4724Z" fill="#1B1C1E" />
                                                <path d="M46.5242 16.2859C45.899 16.5477 45.2783 16.8195 44.6622 17.1012L44.5846 17.1369L44.5869 17.2208C44.5986 17.6745 44.6098 18.1369 44.6174 18.5969C43.7566 19.0105 42.1216 19.6988 40.2961 19.9731C39.718 19.1573 38.9536 17.9003 38.4772 16.4163C38.8244 15.994 39.181 15.5721 39.5358 15.1597L39.5918 15.0945L39.5523 15.0185C39.2494 14.4349 38.9341 13.8454 38.6153 13.266L38.5235 13.1L38.4001 13.2446C37.9769 13.7409 37.5544 14.249 37.1441 14.7561L37.09 14.8227L37.1317 14.8976C37.4071 15.3898 37.679 15.8927 37.9443 16.3935C37.6127 16.9465 36.785 18.2042 35.549 19.2704C34.0574 18.4866 32.7436 17.1362 31.5391 15.1466C31.914 14.595 32.2998 14.0432 32.6865 13.5052L32.7372 13.4348L32.6897 13.3621C32.1527 12.5394 31.5909 11.7125 31.02 10.9049L30.9128 10.7533L30.8059 10.9049C30.2367 11.7107 29.6752 12.5378 29.1371 13.3639L29.0896 13.4366L29.1403 13.5056C29.5476 14.0719 29.9526 14.6514 30.3448 15.229C29.2732 17.203 28.073 18.5532 26.6782 19.352C25.3082 18.1985 24.4251 16.7928 24.1387 16.2994C24.4004 15.8094 24.67 15.3167 24.9419 14.833L24.9839 14.7584L24.93 14.6907C24.519 14.1807 24.1017 13.6758 23.6779 13.176L23.5549 13.0312L23.4631 13.1968C23.1419 13.7763 22.8245 14.3649 22.5204 14.9463L22.4807 15.0223L22.5367 15.0877C22.9064 15.5189 23.2768 15.9606 23.6382 16.4016C23.1361 17.9411 22.3233 19.2367 21.7085 20.0753C19.7724 19.7457 17.9976 18.9561 17.249 18.5899C17.2575 18.1354 17.2678 17.6751 17.2796 17.2208L17.2816 17.1369L17.2043 17.1012C16.5918 16.8212 15.9651 16.5467 15.3423 16.2859L14.9331 16.1147L15.1832 16.4756C15.7996 17.3658 16.4105 18.2804 16.9994 19.1916L17.0186 19.2212C18.622 21.7682 20.127 24.4052 21.4919 27.0596L21.5353 27.1454L21.6298 27.1296C27.7896 26.111 34.0791 26.111 40.2389 27.1296L40.3337 27.1454L40.3771 27.061C41.829 24.2383 43.4292 21.4544 45.131 18.7869L45.1356 18.7797C45.6404 18.0054 46.1614 17.2307 46.6832 16.477L46.9331 16.116L46.5242 16.2859ZM16.9867 18.6662V18.6946C16.5485 18.0231 16.1026 17.3565 15.6491 16.6949C16.108 16.8907 16.5656 17.0929 17.0166 17.2984C17.0049 17.753 16.995 18.2127 16.9867 18.6662V18.6662ZM37.4034 14.8486C37.7569 14.4134 38.1152 13.982 38.4781 13.5543C38.751 14.0529 39.0206 14.5578 39.2813 15.0591C38.9265 15.4714 38.5761 15.8875 38.2303 16.3071L38.2073 16.3337C37.945 15.8358 37.677 15.3407 37.4034 14.8486V14.8486ZM22.7921 14.9894C23.0562 14.4858 23.3256 13.9851 23.6004 13.4871C23.9604 13.9137 24.3198 14.3494 24.6716 14.7848C24.4024 15.2657 24.1348 15.7548 23.8758 16.2421L23.8622 16.2676C23.5111 15.839 23.1508 15.4094 22.7921 14.9894ZM40.1868 26.8602C34.0603 25.8574 27.8073 25.8574 21.6808 26.8602C20.3193 24.2178 18.8194 21.5934 17.2224 19.0583L17.2185 19.0511L17.2132 19.0445L17.0434 18.7824L17.0714 18.7894C17.8009 19.1492 19.6875 20.0058 21.745 20.3433L21.8244 20.3562L21.8719 20.2923C22.5115 19.4299 23.3837 18.0575 23.9081 16.4167C24.1998 16.9207 25.1306 18.4081 26.5813 19.6063L26.6502 19.6634L26.7289 19.6198C28.2178 18.7932 29.4882 17.374 30.6129 15.2813L30.6491 15.2136L30.6062 15.1502C30.2161 14.5736 29.8117 13.9945 29.4051 13.4278C29.8934 12.6813 30.4001 11.9336 30.9142 11.2022C31.4296 11.9352 31.9367 12.6824 32.4239 13.4271C32.0375 13.9663 31.6524 14.5188 31.2779 15.0704L31.232 15.138L31.2735 15.2075C32.5357 17.3126 33.9213 18.7289 35.5079 19.539L35.5862 19.579L35.6532 19.5224C37.0021 18.3799 37.8872 17.0035 38.2052 16.4648L38.2137 16.4499C38.6084 17.697 39.2694 18.9881 40.1283 20.1856L40.1742 20.2499L40.2536 20.2386C42.1991 19.9607 43.9393 19.214 44.8044 18.7928L44.8253 18.7826C43.1675 21.389 41.6078 24.1056 40.1875 26.8602H40.1868ZM44.9107 18.6484L44.9061 18.6556C44.8974 18.6696 44.8884 18.6836 44.8795 18.6973V18.6748C44.871 18.2161 44.8609 17.7539 44.8494 17.2986C45.3027 17.0919 45.7585 16.8907 46.2169 16.6951C45.7777 17.3374 45.3384 17.9926 44.9114 18.6473L44.9107 18.6484Z" fill="#1B1C1E" />
                                                <path d="M26.6071 21.8438L26.5981 21.7987L26.5628 21.7696C26.0916 21.3809 25.7265 21.0869 25.3796 20.8166L25.3403 20.7859L25.2901 20.7891C25.2097 20.7943 25.1322 20.8017 25.0528 20.8117L24.9121 20.8299L24.9426 20.9653C25.0017 21.2306 25.0608 21.4956 25.12 21.7603C25.1765 22.0128 25.2328 22.2655 25.2891 22.5183L25.2988 22.5619L25.3341 22.5903C25.7949 22.9607 26.2723 23.3573 26.7526 23.7679L27.038 24.012L26.9664 23.6486C26.8446 23.0275 26.7216 22.4141 26.6071 21.8438V21.8438ZM25.5342 22.4224C25.4811 22.1838 25.4276 21.9455 25.3736 21.7077C25.3249 21.4891 25.2761 21.2705 25.2272 21.0519L25.2561 21.0494C25.5808 21.303 25.9241 21.5798 26.3588 21.9379C26.4483 22.3832 26.5424 22.8542 26.6376 23.3343C26.2649 23.0185 25.8948 22.7128 25.5342 22.4224V22.4224Z" fill="#1B1C1E" />
                                                <path d="M36.5771 20.79L36.5268 20.7868L36.4876 20.8175C36.1404 21.0882 35.7762 21.3815 35.3041 21.7704L35.269 21.7996L35.2601 21.8447C35.1254 22.5156 35.0127 23.0794 34.9007 23.6495L34.8291 24.0145L35.1143 23.7704C35.5949 23.3593 36.0722 22.9632 36.533 22.5928L36.5681 22.5643L36.578 22.5208C36.6355 22.2615 36.6933 22.0027 36.7512 21.7443C36.8092 21.4859 36.867 21.2271 36.9245 20.9678L36.9548 20.8324L36.8144 20.8141C36.735 20.8026 36.6572 20.7952 36.5771 20.79V20.79ZM36.4965 21.6892C36.4419 21.9336 36.3874 22.178 36.3329 22.4224C35.9611 22.7221 35.5929 23.026 35.2284 23.3343C35.3149 22.896 35.4046 22.4475 35.507 21.9378C35.9416 21.5798 36.2852 21.303 36.6099 21.0494L36.6388 21.0519C36.5914 21.264 36.5439 21.4764 36.4965 21.6892V21.6892Z" fill="#1B1C1E" />
                                                <path d="M40.3034 22.3347L40.2658 22.3611L40.249 22.4202C40.0884 22.9957 39.9204 23.5909 39.7609 24.1765L39.6641 24.5314L39.9645 24.3126C40.4555 23.9548 40.9615 23.5992 41.468 23.2559L41.5059 23.2301L41.519 23.1864C41.6782 22.6544 41.8632 22.0358 42.0511 21.4294L42.1562 21.0892L41.854 21.2852C41.367 21.6015 40.8599 21.9449 40.3034 22.3347V22.3347ZM41.2817 23.0706C40.8883 23.3378 40.4955 23.6121 40.1097 23.8891C40.2364 23.4296 40.366 22.9675 40.4925 22.5172C40.9182 22.2192 41.3149 21.949 41.6963 21.6967C41.5502 22.1748 41.4081 22.6485 41.2817 23.0706V23.0706Z" fill="#1B1C1E" />
                                                <path d="M21.6106 22.6656C21.0534 22.2751 20.5478 21.9311 20.065 21.6139L19.7642 21.4163L19.9315 21.9674C20.0854 22.4748 20.2447 22.9998 20.3973 23.5168L20.4101 23.5606L20.4482 23.5865C20.9242 23.9114 21.429 24.267 21.947 24.6435L22.249 24.8632L21.6484 22.692L21.6106 22.6656ZM20.6348 23.4018C20.4994 22.9429 20.3594 22.4788 20.2217 22.0267C20.5999 22.2792 20.9956 22.5499 21.4212 22.8479L21.8006 24.2193C21.3999 23.9313 21.0093 23.6572 20.6348 23.4018V23.4018Z" fill="#1B1C1E" />
                                                <path d="M21.0695 27.713L21.2003 28.5305C27.8084 27.3369 34.5825 27.3369 41.1906 28.5305C41.2345 28.258 41.2782 27.9855 41.3216 27.713C34.6269 26.5036 27.7641 26.5036 21.0695 27.713V27.713Z" fill="#1B1C1E" />
                                                <path d="M46.8361 16.0923C46.2088 16.3549 45.5892 16.6262 44.9773 16.9061C44.99 17.3923 45.0007 17.8784 45.0094 18.3644C44.2136 18.7531 42.45 19.5201 40.4962 19.7992C39.8433 18.8882 39.07 17.5969 38.5927 16.0768C38.9552 15.6366 39.3236 15.1995 39.6978 14.7656C39.394 14.1804 39.0821 13.5972 38.7622 13.0161C38.3365 13.5148 37.9184 14.0175 37.5081 14.5242C37.797 15.0428 38.0794 15.5632 38.3554 16.0853L38.3538 16.0883C38.0171 16.6586 37.1531 17.9921 35.8295 19.1131C34.4104 18.3896 32.9935 17.076 31.6474 14.8312C32.0369 14.2573 32.4351 13.6869 32.8421 13.1201C32.304 12.2957 31.7484 11.4779 31.1751 10.6667C30.602 11.4788 30.0466 12.2969 29.5089 13.121C29.9351 13.7137 30.3517 14.3103 30.7586 14.9109C29.5653 17.1308 28.2644 18.4541 26.9263 19.1973C25.4822 18.0045 24.5626 16.5352 24.2537 15.9922V15.9908C24.5264 15.4795 24.8053 14.9696 25.0904 14.4613C24.6801 13.9535 24.263 13.4492 23.8391 12.9484C23.5178 13.5285 23.2042 14.1107 22.8982 14.695C23.2869 15.1484 23.6694 15.605 24.0456 16.0648C23.5382 17.6551 22.7043 18.9933 22.0287 19.9045C20.0267 19.576 18.1931 18.7589 17.3794 18.3562C17.3881 17.8727 17.3988 17.3891 17.4115 16.9054C16.7996 16.6255 16.18 16.3543 15.5527 16.0917C16.1751 16.9904 16.7812 17.8969 17.3711 18.811C18.9939 21.3865 20.4932 24.013 21.869 26.6905C28.0432 25.6708 34.3472 25.6708 40.5214 26.6905C41.9705 23.8731 43.5571 21.1116 45.2811 18.4061V18.405C45.7881 17.6293 46.3064 16.8585 46.8361 16.0923ZM20.784 23.1696C20.6107 22.5831 20.4322 21.9965 20.2539 21.4099C20.7764 21.7531 21.2888 22.1039 21.7962 22.4594C21.9593 23.0496 22.1226 23.6398 22.2859 24.2299C21.7937 23.871 21.2918 23.5152 20.784 23.1696ZM25.6768 22.1822C25.562 21.6633 25.4457 21.1476 25.3302 20.6289C25.4055 20.619 25.481 20.6118 25.5597 20.6064C25.959 20.9175 26.351 21.236 26.7402 21.557C26.8609 22.1568 26.9807 22.7584 27.0995 23.3618C26.6339 22.9645 26.1591 22.5695 25.6768 22.1822ZM31.1926 24.565C30.8662 23.5971 30.5239 22.6325 30.1654 21.671C30.4945 20.6982 30.8369 19.7281 31.1926 18.7607C31.5519 19.7286 31.8952 20.6986 32.2225 21.671C31.8634 22.634 31.5201 23.5986 31.1926 24.5647V24.565ZM36.7109 22.1822C36.229 22.5697 35.754 22.9648 35.2881 23.3625C35.4062 22.76 35.526 22.1584 35.6475 21.5577C36.0376 21.2367 36.4277 20.9181 36.8279 20.607C36.9057 20.612 36.9812 20.6192 37.0574 20.6296C36.9425 21.1473 36.8277 21.6633 36.7109 22.1822ZM41.6542 22.8389C41.1443 23.1848 40.6419 23.5382 40.1472 23.8992C40.3078 23.309 40.4737 22.7189 40.6394 22.1287C41.1468 21.7732 41.6617 21.4226 42.1866 21.0817C42.0057 21.6658 41.8304 22.251 41.6542 22.8387V22.8389Z" fill="#1B1C1E" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_31_243">
                                                    <rect width="32" height="43.4286" fill="white" transform="translate(14.9331 10.6667)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className='heading'>DFK</span>
                                    </div>
                                        </div>
                                    </div>
                                   
                                    
                                    <div className='row px-sm-0 px-4'>
                                        <div className='col-md-6 col-12'
                                        >
                                            <p className='mt-1 text-clr'>APR  :</p>
                                            <p className='mt-1 text-clr'>Earn :</p>
                                        </div>
                                        <div className='col-md-6 col-12'
                                        >
                                            <p className='mt-1 text-clr'>5 %</p>
                                            <p className='mt-1 text-clr'>BUSD</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                          <div className='col-md-6 col-12'
                                          >
                                               {/* <p className='mt-1'>APR</p>
                                        <p className='mt-1'>Earn</p> */}
                                          </div>
                                          <div className='col-md-6 col-12'
                                          >
                                               <button className='btn btn-update' >Harvest</button>
                                          </div>
                                      </div>
                                    <div>
                                        <select className='form-control' value='' onChange=''>
                                            <option value="Ford">BUSD</option>
                                            <option value="Volvo">XRP</option>
                                            <option value="Fiat">ADA</option>
                                            <option value="Fiat">ETH</option>
                                        </select>
                                        <input type='text' className='form-control' placeholder='Enter amount to stake' />
                                        <button className='btn btn-update' >Stake DFK</button>

                                    </div>
                                </div>
                            </button>

                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Glossary