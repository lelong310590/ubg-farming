export const Icon = {
  Loading: () => <svg className="spinner" viewBox="0 0 50 50"><circle className="path" cx={25} cy={25} r={20} fill="none" strokeWidth={5} /></svg>,
  Upload: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.921 26.992"><path d="M17.031,23.136H2.571v7.712H31.491V23.136Zm12.532,3.856H25.707V25.064h3.856ZM9.319,11.568l7.712-7.712,7.712,7.712h-4.82v9.64H14.139v-9.64Z" transform="translate(-2.571 -3.856)" /></svg>,
  Remove: () => <svg viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M32.7182292,24.984375 L49.6625,8.03958333 C50.0692708,7.6328125 50.0692708,6.9734375 49.6625,6.56666667 L43.4026042,0.305208333 C43.2072917,0.109895833 42.9416667,0 42.6661458,0 C42.3901042,0 42.125,0.109895833 41.9296875,0.305208333 L24.984375,17.2505208 L8.0390625,0.305208333 C7.6484375,-0.0854166667 6.95677083,-0.0854166667 6.56614583,0.305208333 L0.305729167,6.56666667 C-0.101041667,6.9734375 -0.101041667,7.6328125 0.305729167,8.03958333 L17.2505208,24.984375 L0.305729167,41.9291667 C-0.101041667,42.3359375 -0.101041667,42.9953125 0.305729167,43.4020833 L6.56614583,49.6630208 C6.76145833,49.8583333 7.0265625,49.9682292 7.30260417,49.9682292 C7.57864583,49.9682292 7.84375,49.8583333 8.0390625,49.6630208 L24.984375,32.7177083 L41.9296875,49.6630208 C42.125,49.8583333 42.3901042,49.9682292 42.6661458,49.9682292 C42.9416667,49.9682292 43.2072917,49.8583333 43.4026042,49.6630208 L49.6630208,43.4020833 C50.0697917,42.9953125 50.0697917,42.3354167 49.6630208,41.9291667 L32.7182292,24.984375 Z" id="Path" fill="#3D5059" fillRule="nonzero" /></g></svg>,
  Image: () => <svg viewBox="0 0 52 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M40.3577689,0.00438247012 C43.0625498,0.00438247012 45.3338645,1.88934263 45.9310757,4.41414343 C49.014243,4.50109562 51.4960159,7.03436255 51.4960159,10.1379482 L51.4960159,10.1379482 L51.4960159,44.2676295 C51.4960159,47.4260956 48.9263944,49.9957171 45.7679283,49.9957171 L45.7679283,49.9957171 L11.638247,49.9957171 C8.93346614,49.9957171 6.66215139,48.110757 6.06494024,45.5859562 C2.98177291,45.499004 0.5,42.9657371 0.5,39.8620518 L0.5,39.8620518 L0.5,8.61155378 C0.5,3.86553785 4.36125498,0.00438247012 9.10727092,0.00438247012 L9.10727092,0.00438247012 Z M20.977988,18.685304 C20.2973108,18.6746016 19.6768924,19.0190239 19.3289841,19.6088645 L19.3289841,19.6088645 L7.90219124,38.9837649 L7.90219124,44.2678287 C7.90219124,44.7333665 7.98844622,45.1788845 8.14472112,45.590239 C8.67988048,46.9994024 10.0436255,48.0038845 11.638247,48.0038845 L11.638247,48.0038845 L45.7679283,48.0038845 C47.827988,48.0038845 49.5039841,46.3278884 49.5039841,44.2678287 L49.5039841,44.2678287 L49.5039841,37.1901394 L46.0860558,34.0569721 L44.0940239,32.2309761 L43.8601594,32.0166335 C43.1721116,31.3858566 42.1114542,31.3596614 41.3931275,31.9555777 L41.3931275,31.9555777 L36.9139442,35.6713147 C36.1158367,36.3333665 35.1136454,36.6633466 34.0947211,36.6163347 L34.0947211,36.6163347 L36.4154382,40.8777888 C36.6784861,41.3608566 36.5000996,41.9657371 36.0170319,42.2288845 C35.8657371,42.311255 35.70249,42.3503984 35.5415339,42.3503984 C35.1885458,42.3503984 34.8466135,42.1624502 34.6659363,41.8305777 L34.6659363,41.8305777 L27.5144422,28.6988048 L22.5945219,19.664741 C22.2670319,19.063247 21.662749,18.6973108 20.977988,18.685304 Z M37.5171536,43.8274568 L37.6464143,43.8447211 C37.7101594,43.8566733 37.7729084,43.8765936 37.8326693,43.901494 C37.8934263,43.9263944 37.9511952,43.9572709 38.0049801,43.9931275 C38.059761,44.0289841 38.1105578,44.0708167 38.1563745,44.1166335 C38.2021912,44.1624502 38.2440239,44.213247 38.2798805,44.2680279 C38.3157371,44.3218127 38.3466135,44.3795817 38.3715139,44.4403386 C38.3964143,44.5 38.4163347,44.562749 38.4292829,44.6265936 C38.4422311,44.6903386 38.4482072,44.7560757 38.4482072,44.8208167 C38.4482072,44.8855578 38.4422311,44.9512948 38.4292829,45.0150398 C38.4163347,45.0787849 38.3964143,45.1415339 38.3715139,45.2012948 C38.3466135,45.2620518 38.3157371,45.3198207 38.2798805,45.3736056 C38.2440239,45.4283865 38.2021912,45.4791833 38.1563745,45.525 C38.1335657,45.5478088 38.1095618,45.5696215 38.0843625,45.590239 C38.0589641,45.6109562 38.0324701,45.6304781 38.0049801,45.648506 C37.9511952,45.6843625 37.8934263,45.715239 37.8326693,45.7401394 C37.7729084,45.7650398 37.7101594,45.7849602 37.6464143,45.7969124 C37.5826693,45.8098606 37.5169323,45.8168327 37.4521912,45.8168327 C37.3874502,45.8168327 37.3217131,45.8098606 37.2579681,45.7969124 C37.1942231,45.7849602 37.1314741,45.7650398 37.0717131,45.7401394 C37.0109562,45.715239 36.9531873,45.6843625 36.8994024,45.648506 C36.8719124,45.6305777 36.8454183,45.6109562 36.8200199,45.590239 C36.7949203,45.5696215 36.7708167,45.5478088 36.748008,45.525 C36.7021912,45.4791833 36.6603586,45.4283865 36.624502,45.3736056 C36.5886454,45.3198207 36.5577689,45.2620518 36.5328685,45.2012948 C36.5079681,45.1415339 36.4880478,45.0787849 36.4760956,45.0150398 C36.4631474,44.9512948 36.4561753,44.8855578 36.4561753,44.8208167 C36.4561753,44.7560757 36.4631474,44.6903386 36.4760956,44.6265936 C36.4880478,44.5628486 36.5079681,44.5000996 36.5328685,44.4403386 C36.5577689,44.3795817 36.5886454,44.3218127 36.624502,44.2680279 C36.6603586,44.213247 36.7021912,44.1624502 36.748008,44.1166335 C36.7938247,44.0708167 36.8446215,44.0289841 36.8994024,43.9931275 C36.9531873,43.9572709 37.0109562,43.9263944 37.0717131,43.901494 C37.1314741,43.8765936 37.1942231,43.8566733 37.2579681,43.8447211 C37.3864542,43.8188247 37.5179283,43.8188247 37.6464143,43.8447211 Z M40.3577689,1.99631474 L9.10727092,1.99631474 C5.45966135,1.99631474 2.49203187,4.96384462 2.49203187,8.61155378 L2.49203187,8.61155378 L2.49203187,39.8620518 C2.49203187,41.8149402 3.99840637,43.4215139 5.91005976,43.5835657 L5.91005976,43.5835657 L5.91005976,10.1379482 C5.91005976,6.97948207 8.47968127,4.40986056 11.6381474,4.40986056 L11.6381474,4.40986056 L17.7927291,4.40986056 C18.3428287,4.40986056 18.788745,4.85577689 18.788745,5.40587649 C18.788745,5.9559761 18.3428287,6.40189243 17.7927291,6.40189243 L17.7927291,6.40189243 L11.6381474,6.40189243 C9.57808765,6.40189243 7.90209163,8.07788845 7.90209163,10.1379482 L7.90209163,10.1379482 L7.90209163,35.0624502 L17.6131474,18.5968127 C18.3301793,17.3810757 19.6011952,16.6716135 21.0120518,16.6937251 C22.4233068,16.7178287 23.6689243,17.4723108 24.3440239,18.7118526 L24.3440239,18.7118526 L27.5090637,24.5236056 L29.2638446,27.7459163 L32.4064741,33.5164343 C32.7126494,34.0785857 33.2488048,34.4704183 33.87749,34.5911355 C34.5061753,34.7119522 35.1494024,34.5468127 35.6420319,34.1380478 L35.6420319,34.1380478 L40.1212151,30.4223108 C41.2527888,29.4836653 42.7960159,29.2948207 44.0939243,29.8376494 L44.0939243,29.8376494 L46.0859562,31.3544821 L49.5039841,34.487749 L49.5039841,10.1379482 C49.5039841,8.18505976 47.9976096,6.57848606 46.0858566,6.41653386 L46.0858566,6.41653386 L44.0938247,6.40199203 L25.7608566,6.40199203 C25.210757,6.40199203 24.7648406,5.9560757 24.7648406,5.4059761 C24.7648406,4.85587649 25.210757,4.40996016 25.7608566,4.40996016 L25.7608566,4.40996016 L43.8512948,4.40996016 C43.3161355,3.00079681 41.9523904,1.99631474 40.3577689,1.99631474 L40.3577689,1.99631474 Z M38.3365538,12.5560757 C41.1670319,12.5560757 43.4697211,14.8586653 43.4697211,17.689243 C43.4697211,20.5197211 41.1669323,22.8224104 38.3365538,22.8224104 C35.5060757,22.8224104 33.2033865,20.5196215 33.2033865,17.689243 C33.2033865,14.8588645 35.5060757,12.5560757 38.3365538,12.5560757 Z M38.3365538,14.5481076 C36.6044821,14.5481076 35.1954183,15.9571713 35.1954183,17.689243 C35.1954183,19.4213147 36.6044821,20.8303785 38.3365538,20.8303785 C40.0686255,20.8303785 41.4776892,19.4211155 41.4776892,17.689243 C41.4776892,15.9571713 40.0685259,14.5481076 38.3365538,14.5481076 Z M21.8418548,4.41211819 L21.9711155,4.42938247 C22.0348606,4.44233068 22.0976096,4.46125498 22.1573705,4.48615538 C22.2181275,4.51105578 22.2758964,4.54193227 22.3296813,4.57778884 C22.3844622,4.61364542 22.435259,4.65547809 22.4810757,4.70129482 C22.5268924,4.74711155 22.5687251,4.79890438 22.6045817,4.85268924 C22.6404382,4.90747012 22.6713147,4.96523904 22.6962151,5.025 C22.7211155,5.08476096 22.7410359,5.14750996 22.752988,5.21125498 C22.7659363,5.27599602 22.7729084,5.34073705 22.7729084,5.4064741 C22.7729084,5.47121514 22.7659363,5.53595618 22.752988,5.60069721 C22.7410359,5.66444223 22.7211155,5.72719124 22.6962151,5.78695219 C22.6713147,5.84671315 22.6404382,5.90448207 22.6045817,5.95926295 C22.5687251,6.01304781 22.5268924,6.06484064 22.4810757,6.11065737 C22.435259,6.1564741 22.3844622,6.19830677 22.3296813,6.23416335 C22.2758964,6.27001992 22.2181275,6.30089641 22.1573705,6.32579681 C22.0976096,6.35069721 22.0348606,6.36962151 21.9711155,6.38256972 C21.9073705,6.39551793 21.8416335,6.40249004 21.7768924,6.40249004 C21.7121514,6.40249004 21.6464143,6.39551793 21.5826693,6.38256972 C21.5189243,6.36962151 21.4561753,6.35069721 21.3954183,6.32579681 C21.3356574,6.30089641 21.2778884,6.27001992 21.2241036,6.23416335 C21.1693227,6.19830677 21.1185259,6.1564741 21.0727092,6.11065737 C21.0268924,6.06484064 20.9850598,6.01304781 20.9482072,5.95926295 C20.9123506,5.90448207 20.8824701,5.84671315 20.8575697,5.78695219 C20.8326693,5.72719124 20.812749,5.66444223 20.8007968,5.60069721 C20.7878486,5.53595618 20.7808765,5.47121514 20.7808765,5.4064741 C20.7808765,5.34073705 20.7878486,5.27599602 20.8007968,5.21125498 C20.812749,5.14750996 20.8326693,5.08476096 20.8575697,5.025 C20.8824701,4.96523904 20.9123506,4.90747012 20.9482072,4.85268924 C20.9850598,4.79890438 21.0268924,4.74711155 21.0727092,4.70129482 C21.1185259,4.65547809 21.1693227,4.61364542 21.2241036,4.57778884 C21.2778884,4.54193227 21.3356574,4.51105578 21.3954183,4.48615538 C21.4561753,4.46125498 21.5189243,4.44233068 21.5826693,4.42938247 C21.7111554,4.40348606 21.8426295,4.40348606 21.9711155,4.42938247 Z" id="Combined-Shape" fill="#3D5059" fillRule="nonzero" /></g></svg>,
  Checked: () => <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M11.771,6.75015599e-14 C14.917,6.75015599e-14 17.875,1.225 20.097,3.448 C24.689,8.039 24.689,15.51 20.099,20.103 C17.875,22.327 14.916,23.552 11.769,23.552 C8.623,23.552 5.666,22.328 3.443,20.104 C-1.149,15.512 -1.147,8.04 3.445,3.448 C5.669,1.225 8.626,6.75015599e-14 11.771,6.75015599e-14 Z M11.771,2 C9.16,2 6.705,3.017 4.859,4.862 C1.046,8.674 1.046,14.877 4.857,18.69 C6.703,20.536 9.158,21.552 11.769,21.552 C14.382,21.552 16.837,20.535 18.685,18.688 C22.496,14.876 22.496,8.674 18.683,4.862 C16.837,3.017 14.382,2 11.771,2 Z M16.9347,7.0444 C17.3627,7.3954 17.4237,8.0254 17.0737,8.4524 L11.3487,15.4314 C11.1677,15.6534 10.8997,15.7864 10.6127,15.7974 L10.5757,15.7974 L10.5757,15.7974 C10.3027,15.7974 10.0407,15.6854 9.8507,15.4864 L7.2577,12.7634 C6.8767,12.3634 6.8917,11.7304 7.2927,11.3494 C7.6907,10.9684 8.3237,10.9834 8.7067,11.3844 L10.5207,13.2884 L15.5267,7.1834 C15.8767,6.7584 16.5077,6.6934 16.9347,7.0444 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Info: () => <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M11.7774,6.75015599e-14 C14.9224,6.75015599e-14 17.8794,1.225 20.1034,3.448 C24.6934,8.039 24.6954,15.51 20.1054,20.103 C17.8794,22.327 14.9224,23.552 11.7734,23.552 C8.6294,23.552 5.6724,22.328 3.4494,20.104 C1.2244,17.881 0.000400000002,14.923 0.000400000002,11.776 C0.000400000002,8.63 1.2264,5.672 3.4514,3.448 C5.6734,1.225 8.6314,6.75015599e-14 11.7774,6.75015599e-14 Z M11.7774,2 C9.1664,2 6.7114,3.017 4.8654,4.862 C3.0174,6.709 2.0004,9.165 2.0004,11.776 C2.0004,14.389 3.0154,16.844 4.8634,18.69 C6.7094,20.536 9.1624,21.552 11.7734,21.552 C14.3864,21.552 16.8434,20.535 18.6914,18.688 C22.5024,14.876 22.5004,8.674 18.6894,4.862 C16.8434,3.017 14.3884,2 11.7774,2 Z M11.7289,9.2113 C12.0269,9.2113 12.2739,9.3123 12.4669,9.5163 C12.6599,9.7193 12.7559,10.0023 12.7559,10.3643 L12.7559,16.2363 C12.7559,16.6423 12.6599,16.9503 12.4669,17.1583 C12.2739,17.3673 12.0269,17.4713 11.7289,17.4713 C11.4319,17.4713 11.1899,17.3643 11.0039,17.1513 C10.8189,16.9383 10.7249,16.6333 10.7249,16.2363 L10.7249,10.4243 C10.7249,10.0223 10.8189,9.7193 11.0039,9.5163 C11.1899,9.3123 11.4319,9.2113 11.7289,9.2113 Z M11.7519,6.2793 C12.0159,6.2793 12.2479,6.3633 12.4509,6.5313 C12.6539,6.7003 12.7559,6.9463 12.7559,7.2683 C12.7559,7.5813 12.6559,7.8253 12.4589,8.0013 C12.2599,8.1773 12.0259,8.2653 11.7519,8.2653 C11.4689,8.2653 11.2269,8.1793 11.0259,8.0053 C10.8259,7.8323 10.7249,7.5863 10.7249,7.2683 C10.7249,6.9813 10.8279,6.7443 11.0329,6.5583 C11.2399,6.3723 11.4789,6.2793 11.7519,6.2793 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Warning: () => <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M11.7774,6.75015599e-14 C14.9224,6.75015599e-14 17.8814,1.225 20.1034,3.448 C24.6954,8.04 24.6954,15.511 20.1054,20.103 C17.8794,22.327 14.9224,23.552 11.7754,23.552 C8.6294,23.552 5.6724,22.328 3.4494,20.104 C1.2244,17.88 0.0004,14.923 0.0004,11.776 C0.0004,8.63 1.2264,5.672 3.4514,3.448 C5.6734,1.225 8.6314,6.75015599e-14 11.7774,6.75015599e-14 Z M11.7774,2 C9.1664,2 6.7114,3.017 4.8654,4.862 C3.0174,6.709 2.0004,9.164 2.0004,11.776 C2.0004,14.389 3.0174,16.844 4.8634,18.69 C6.7094,20.536 9.1644,21.552 11.7754,21.552 C14.3864,21.552 16.8434,20.535 18.6914,18.688 C22.5024,14.877 22.5024,8.674 18.6894,4.862 C16.8434,3.017 14.3884,2 11.7774,2 Z M11.6446,15.2315 C11.9566,15.2315 12.2186,15.3375 12.4336,15.5515 C12.6466,15.7645 12.7516,16.0275 12.7516,16.3395 C12.7516,16.6875 12.6406,16.9605 12.4176,17.1585 C12.1956,17.3565 11.9356,17.4565 11.6446,17.4565 C11.3416,17.4565 11.0766,17.3585 10.8516,17.1625 C10.6246,16.9665 10.5116,16.6925 10.5116,16.3395 C10.5116,16.0275 10.6216,15.7645 10.8396,15.5515 C11.0586,15.3375 11.3266,15.2315 11.6446,15.2315 Z M11.8226,6.1895 C12.5406,6.1895 13.1776,6.3225 13.7266,6.5875 C14.2776,6.8525 14.7036,7.2145 15.0036,7.6705 C15.3046,8.1265 15.4536,8.6235 15.4536,9.1585 C15.4536,9.5805 15.3696,9.9505 15.1976,10.2675 C15.0256,10.5855 14.8226,10.8595 14.5876,11.0895 C14.3516,11.3205 13.9276,11.7085 13.3186,12.2545 C13.1506,12.4085 13.0136,12.5435 12.9126,12.6605 C12.8106,12.7765 12.7346,12.8835 12.6856,12.9795 C12.6366,13.0765 12.5976,13.1735 12.5706,13.2705 C12.5426,13.3675 12.5016,13.5375 12.4476,13.7805 C12.3536,14.2965 12.0586,14.5545 11.5626,14.5545 C11.3046,14.5545 11.0856,14.4695 10.9106,14.3015 C10.7346,14.1325 10.6466,13.8815 10.6466,13.5495 C10.6466,13.1325 10.7106,12.7715 10.8396,12.4665 C10.9686,12.1615 11.1406,11.8935 11.3536,11.6635 C11.5666,11.4325 11.8556,11.1585 12.2166,10.8405 C12.5356,10.5625 12.7636,10.3525 12.9046,10.2115 C13.0466,10.0705 13.1656,9.9135 13.2616,9.7395 C13.3596,9.5655 13.4086,9.3775 13.4086,9.1735 C13.4086,8.7765 13.2596,8.4415 12.9646,8.1685 C12.6696,7.8965 12.2896,7.7595 11.8226,7.7595 C11.2776,7.7595 10.8746,7.8975 10.6176,8.1725 C10.3596,8.4485 10.1406,8.8535 9.9626,9.3895 C9.7926,9.9505 9.4726,10.2305 9.0016,10.2305 C8.7246,10.2305 8.4906,10.1325 8.2986,9.9365 C8.1076,9.7405 8.0116,9.5285 8.0116,9.3005 C8.0116,8.8295 8.1646,8.3515 8.4666,7.8675 C8.7696,7.3835 9.2106,6.9835 9.7906,6.6655 C10.3716,6.3485 11.0486,6.1895 11.8226,6.1895 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Danger: () => <svg viewBox="0 0 27 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M14.1485,0.4648 L26.4315,21.7388 C26.6115,22.0488 26.6115,22.4288 26.4315,22.7388 C26.2535,23.0488 25.9235,23.2388 25.5665,23.2388 L1.0005,23.2388 C0.6425,23.2388 0.3125,23.0488 0.1345,22.7388 C-0.0445,22.4288 -0.0445,22.0488 0.1345,21.7388 L12.4165,0.4648 C12.7735,-0.1552 13.7915,-0.1552 14.1485,0.4648 Z M13.2835,2.9648 L2.7325,21.2388 L23.8345,21.2388 L13.2835,2.9648 Z M13.1501,16.541 C13.4371,16.541 13.6841,16.641 13.8851,16.838 C14.0881,17.037 14.1891,17.277 14.1891,17.56 C14.1891,17.879 14.0881,18.129 13.8831,18.312 C13.6781,18.494 13.4371,18.585 13.1641,18.585 C12.8871,18.585 12.6441,18.495 12.4351,18.314 C12.2281,18.135 12.1251,17.883 12.1251,17.56 C12.1251,17.277 12.2251,17.037 12.4221,16.838 C12.6211,16.641 12.8631,16.541 13.1501,16.541 Z M13.2051,8.235 C13.5981,8.235 13.8591,8.371 13.9921,8.643 C14.1231,8.913 14.1891,9.304 14.1891,9.814 C14.1891,10.115 14.1741,10.421 14.1431,10.731 L13.8481,14.101 C13.8161,14.502 13.7481,14.81 13.6431,15.023 C13.5391,15.237 13.3651,15.345 13.1231,15.345 C12.8771,15.345 12.7071,15.241 12.6111,15.033 C12.5161,14.826 12.4471,14.511 12.4061,14.087 L12.1871,10.813 C12.1461,10.175 12.1251,9.717 12.1251,9.439 C12.1251,9.061 12.2251,8.766 12.4221,8.553 C12.6211,8.342 12.8831,8.235 13.2051,8.235 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Close: () => <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M17.176,0.2927 C17.566,0.6837 17.566,1.3167 17.176,1.7067 L10.14775,8.7342 L17.1758,15.7612 C17.5668,16.1522 17.5668,16.7842 17.1758,17.1752 C16.9808,17.3702 16.7248,17.4682 16.4688,17.4682 C16.2128,17.4682 15.9568,17.3702 15.7618,17.1752 L8.73375,10.1472 L1.707,17.1747 C1.512,17.3697 1.256,17.4677 1,17.4677 C0.744,17.4677 0.488,17.3697 0.293,17.1747 C-0.098,16.7837 -0.098,16.1517 0.293,15.7607 L7.31975,8.7342 L0.2928,1.7072 C-0.0972,1.3172 -0.0972,0.6842 0.2928,0.2932 C0.6838,-0.0968 1.3168,-0.0968 1.7068,0.2932 L8.73375,7.3202 L15.762,0.2927 C16.152,-0.0973 16.785,-0.0973 17.176,0.2927 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Dashboard: () => <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">    <path d="M10.033,12.3664 C10.586,12.3664 11.033,12.8134 11.033,13.3664 L11.033,22.3994 C11.033,22.9524 10.586,23.3994 10.033,23.3994 L1,23.3994 C0.447,23.3994 -2.76223489e-13,22.9524 -2.76223489e-13,22.3994 L-2.76223489e-13,13.3664 C-2.76223489e-13,12.8134 0.447,12.3664 1,12.3664 L10.033,12.3664 Z M22.4,12.3664 C22.953,12.3664 23.4,12.8134 23.4,13.3664 L23.4,22.3994 C23.4,22.9524 22.953,23.3994 22.4,23.3994 L13.367,23.3994 C12.814,23.3994 12.367,22.9524 12.367,22.3994 L12.367,13.3664 C12.367,12.8134 12.814,12.3664 13.367,12.3664 L22.4,12.3664 Z M9.033,14.3664 L2,14.3664 L2,21.3994 L9.033,21.3994 L9.033,14.3664 Z M21.4,14.3664 L14.367,14.3664 L14.367,21.3994 L21.4,21.3994 L21.4,14.3664 Z M10.033,0.0004 C10.586,0.0004 11.033,0.4474 11.033,1.0004 L11.033,10.0334 C11.033,10.5854 10.586,11.0334 10.033,11.0334 L1,11.0334 C0.447,11.0334 -2.76223489e-13,10.5854 -2.76223489e-13,10.0334 L-2.76223489e-13,1.0004 C-2.76223489e-13,0.4474 0.447,0.0004 1,0.0004 L10.033,0.0004 Z M22.4,0.0004 C22.953,0.0004 23.4,0.4474 23.4,1.0004 L23.4,10.0334 C23.4,10.5854 22.953,11.0334 22.4,11.0334 L13.367,11.0334 C12.814,11.0334 12.367,10.5854 12.367,10.0334 L12.367,1.0004 C12.367,0.4474 12.814,0.0004 13.367,0.0004 L22.4,0.0004 Z M9.033,2.0004 L2,2.0004 L2,9.0334 L9.033,9.0334 L9.033,2.0004 Z M21.4,2.0004 L14.367,2.0004 L14.367,9.0334 L21.4,9.0334 L21.4,2.0004 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Place: () => <svg viewBox="0 0 21 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M10.2519,-0.0001 C15.9039,-0.0001 20.5039,4.5989 20.5039,10.2509 C20.5039,15.6669 11.8849,23.1729 10.8999,24.0109 C10.7149,24.1699 10.4819,24.2499 10.2519,24.2499 C10.0219,24.2499 9.7909,24.1699 9.6039,24.0109 C8.6209,23.1729 -9.99999998e-05,15.6669 -9.99999998e-05,10.2509 C-9.99999998e-05,4.5989 4.5999,-0.0001 10.2519,-0.0001 Z M10.2519,1.9999 C5.7029,1.9999 1.9999,5.7009 1.9999,10.2509 C1.9999,13.7629 7.4589,19.4039 10.2519,21.9189 C13.0449,19.4039 18.5039,13.7629 18.5039,10.2509 C18.5039,5.7009 14.8029,1.9999 10.2519,1.9999 Z M10.2519,7.2509 C11.9059,7.2509 13.2519,8.5969 13.2519,10.2509 C13.2519,11.9049 11.9059,13.2509 10.2519,13.2509 C8.5979,13.2509 7.2519,11.9049 7.2519,10.2509 C7.2519,8.5969 8.5979,7.2509 10.2519,7.2509 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  User: () => <svg viewBox="0 0 24 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M12.7645,11.6168 C14.3585,12.2038 15.5555,13.9858 15.4445,15.5918 L15.1615,19.7438 C15.1280714,20.2313 14.7488827,20.6170551 14.2737383,20.6696757 L14.1625,20.6758 L14.1625,20.6758 L1.2875,20.6758 C0.7625,20.6758 0.3275,20.2698 0.2895,19.7448 L0.0065,15.5898 C-0.1005,13.9868 1.0965,12.2048 2.6785,11.6198 C5.9425,10.4518 9.5245,10.4568 12.7645,11.6168 Z M16.638,11.8308 C18.059,11.8558 19.458,12.1108 20.792,12.5868 C22.222,13.1138 23.296,14.7138 23.196,16.1578 L22.95,19.7448 C22.913,20.2688 22.477,20.6758 21.952,20.6758 L16.825,20.6758 C16.272,20.6758 15.825,20.2288 15.825,19.6758 C15.825,19.1228 16.272,18.6758 16.825,18.6758 L21.018,18.6758 L21.2,16.0218 C21.235,15.5148 20.739,14.6978 20.108,14.4668 C18.989,14.0668 17.807,13.8518 16.602,13.8308 C16.052,13.8218 15.61,13.3658 15.62,12.8138 C15.63,12.2618 16.083,11.8058 16.638,11.8308 Z M3.3625,13.4988 C2.5595,13.7958 1.9595,14.8128 2.0025,15.4548 L2.2235,18.6758 L13.2295,18.6758 L13.4485,15.4548 C13.4935,14.8118 12.8935,13.7958 12.0825,13.4968 C9.2915,12.4968 6.1685,12.4948 3.3625,13.4988 Z M18.0067,2.7539 C19.9947,2.7539 21.6117,4.5509 21.6117,6.7589 C21.6117,8.9669 19.9947,10.7629 18.0067,10.7629 C16.0187,10.7629 14.3997,8.9669 14.3997,6.7589 C14.3997,4.5509 16.0187,2.7539 18.0067,2.7539 Z M7.8094,-4.70734562e-14 C10.2044,-4.70734562e-14 12.1514,2.178 12.1514,4.854 C12.1514,7.53 10.2044,9.708 7.8094,9.708 C5.4134,9.708 3.4654,7.53 3.4654,4.854 C3.4654,2.178 5.4134,-4.70734562e-14 7.8094,-4.70734562e-14 Z M18.0067,4.7539 C17.1197,4.7539 16.3997,5.6529 16.3997,6.7589 C16.3997,7.8629 17.1197,8.7629 18.0067,8.7629 C18.8917,8.7629 19.6117,7.8629 19.6117,6.7589 C19.6117,5.6529 18.8917,4.7539 18.0067,4.7539 Z M7.8094,2 C6.5164,2 5.4654,3.28 5.4654,4.854 C5.4654,6.428 6.5164,7.708 7.8094,7.708 C9.1004,7.708 10.1514,6.428 10.1514,4.854 C10.1514,3.28 9.1004,2 7.8094,2 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Collection: () => <svg viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M0.5,6.03961325e-14 C0.777,6.03961325e-14 1,0.224 1,0.5 L1,16.918 C1,17.194 0.777,17.418 0.5,17.418 C0.225,17.418 0,17.194 0,16.918 L0,0.5 C0,0.224 0.225,6.03961325e-14 0.5,6.03961325e-14 Z M23.1661,6.03961325e-14 C23.4431,6.03961325e-14 23.6661,0.224 23.6661,0.5 L23.6661,16.918 C23.6661,17.194 23.4431,17.418 23.1661,17.418 C22.8911,17.418 22.6661,17.194 22.6661,16.918 L22.6661,0.5 C22.6661,0.224 22.8911,6.03961325e-14 23.1661,6.03961325e-14 Z M2.75,1.0973 C3.027,1.0973 3.25,1.3213 3.25,1.5973 L3.25,15.8203 C3.25,16.0963 3.027,16.3203 2.75,16.3203 C2.475,16.3203 2.25,16.0963 2.25,15.8203 L2.25,1.5973 C2.25,1.3213 2.475,1.0973 2.75,1.0973 Z M20.9161,1.0973 C21.1931,1.0973 21.4161,1.3213 21.4161,1.5973 L21.4161,15.8203 C21.4161,16.0963 21.1931,16.3203 20.9161,16.3203 C20.6411,16.3203 20.4161,16.0963 20.4161,15.8203 L20.4161,1.5973 C20.4161,1.3213 20.6411,1.0973 20.9161,1.0973 Z M18.127,1.416 C18.68,1.416 19.127,1.863 19.127,2.416 L19.127,15.002 C19.127,15.555 18.68,16.002 18.127,16.002 L5.541,16.002 C4.988,16.002 4.541,15.555 4.541,15.002 L4.541,2.416 C4.541,1.863 4.988,1.416 5.541,1.416 L18.127,1.416 Z M17.127,3.416 L6.541,3.416 L6.541,14.002 L17.127,14.002 L17.127,3.416 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Reaction: () => <svg viewBox="0 0 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M13.7502,0.0005 C14.2682,0.0005 14.7772,0.2445 15.1872,0.6875 C16.0192,1.5905 16.4082,3.2245 16.2502,5.1695 C16.2302,5.4145 16.1912,5.6755 16.1522,5.9495 C16.1292,6.1055 16.1052,6.2645 16.0842,6.4265 C16.0702,6.6235 16.0592,6.8215 16.0512,7.0125 C16.5212,7.1915 17.7832,7.4085 19.8932,7.4085 L20.3072,7.4045 C22.1542,7.4045 23.6372,8.8875 23.6372,10.7105 C23.6372,11.4235 23.4102,12.0975 22.9902,12.6615 C23.0332,12.8915 23.0492,13.1255 23.0332,13.3595 C22.9942,14.1155 22.6542,14.8195 22.1022,15.3315 C22.1002,15.3475 22.1002,15.3635 22.0982,15.3785 C22.0452,16.3455 21.5002,17.2175 20.6662,17.7155 C20.6442,17.7875 20.6212,17.8565 20.5962,17.9265 C20.2282,18.9055 19.2172,19.4395 17.7442,19.4395 C17.4612,19.4395 17.1852,19.4165 16.9412,19.3855 C16.3422,19.3085 15.4262,19.2315 14.3812,19.1435 L12.8142,19.0085 C12.0073646,18.9361293 11.3614519,18.9299927 10.8604431,18.9551301 L11.5043,21.1401 C11.5803,21.3941 11.5513,21.6681 11.4243,21.9011 C11.2973,22.1341 11.0823,22.3071 10.8283,22.3821 L4.8143,24.1521 C4.7213,24.1801 4.6273,24.1921 4.5333,24.1921 C4.1013,24.1921 3.7033,23.9101 3.5743,23.4751 L0.0413,11.4771 C-0.1147,10.9481 0.1873,10.3921 0.7173,10.2361 L6.7283,8.4621 C6.9823,8.3861 7.2563,8.4151 7.4903,8.5431 C7.66963333,8.64126954 7.81431102,8.79142256 7.9053964,8.97231306 C9.08350087,7.81200378 10.4319342,6.248547 10.9982,5.2585 C11.4142,3.8045 11.2232,2.0585 11.2152,1.9835 C11.1642,1.5445 11.3012,1.1195 11.5962,0.7875 C12.2772,0.0225 13.6022,0.0005 13.7502,0.0005 Z M6.3343,10.6631 L2.2423,11.8711 L2.2563,11.9241 L5.2113,21.9521 L9.3033,20.7461 L8.70398896,18.711546 C8.63830883,18.6214777 8.58666555,18.5190059 8.5532,18.4065 L6.3982,11.0935 C6.36497778,10.9811222 6.35245284,10.8659904 6.35910627,10.7529746 L6.3343,10.6631 Z M13.6802,2.0035 C13.5432,2.0135 13.3672,2.0435 13.2302,2.0825 C13.2832,2.7895 13.3382,4.4595 12.8792,5.9445 C12.8592,6.0075 12.8342,6.0685 12.8032,6.1265 C12.0439694,7.52534278 10.0308715,9.78322638 8.55125434,11.1089383 L10.2832326,16.9905 L10.5030906,16.9715625 C10.789075,16.9501875 11.0932,16.9395 11.4142,16.9395 C11.8892,16.9395 12.4202,16.9655 12.9922,17.0165 L14.5492,17.1505 C15.6312,17.2425 16.5782,17.3225 17.1932,17.4025 C17.3552,17.4215 17.5472,17.4395 17.7442,17.4395 C18.4222,17.4395 18.6912,17.2695 18.7232,17.2275 C18.7562,17.1335 18.7812,17.0285 18.7932,16.9175 C18.8362,16.5375 19.0922,16.2145 19.4532,16.0865 C19.8262,15.9545 20.0822,15.6255 20.1032,15.2485 C20.1072,15.1685 20.1032,15.1075 20.0902,15.0305 C20.0162,14.6185 20.2072,14.2035 20.5702,13.9915 C20.8462,13.8295 21.0212,13.5505 21.0372,13.2455 C21.0472,13.0965 21.0192,12.9545 20.9572,12.8125 C20.7852,12.4185 20.8832,11.9605 21.2012,11.6705 C21.4822,11.4155 21.6372,11.0745 21.6372,10.7105 C21.6372,9.9915 21.0532,9.4055 20.3322,9.4045 C20.3322,9.4045 20.1602,9.4085 19.8932,9.4085 C15.5102,9.4085 14.7272,8.6065 14.4712,8.3425 C14.1852,8.0505 14.0352,7.6775 14.0452,7.2925 C14.0472,6.9845 14.0622,6.6265 14.0962,6.2235 C14.1212,6.0025 14.1482,5.8275 14.1742,5.6575 C14.2072,5.4275 14.2402,5.2095 14.2562,5.0065 C14.4082,3.1365 13.9162,2.1945 13.6802,2.0035 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Power: () => <svg viewBox="0 0 21 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="User-Mobile" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><path d="M13.9549,3.1642 C18.1719,4.6332 21.0059,8.6162 21.0059,13.0742 C21.0059,18.8662 16.2949,23.5772 10.5039,23.5772 C4.7109,23.5772 -0.000100000001,18.8662 -0.000100000001,13.0742 C-0.000100000001,8.6162 2.8339,4.6332 7.0509,3.1642 C7.5739,2.9812 8.1429,3.2582 8.3239,3.7792 C8.5059,4.3012 8.2309,4.8712 7.7089,5.0532 C4.2949,6.2422 1.9999,9.4662 1.9999,13.0742 C1.9999,17.7632 5.8149,21.5772 10.5039,21.5772 C15.1909,21.5772 19.0059,17.7632 19.0059,13.0742 C19.0059,9.4662 16.7129,6.2422 13.2969,5.0532 C12.7749,4.8712 12.4999,4.3012 12.6819,3.7792 C12.8629,3.2582 13.4319,2.9822 13.9549,3.1642 Z M10.5039,0.0004 C11.0569,0.0004 11.5039,0.4474 11.5039,1.0004 L11.5039,8.2754 C11.5039,8.8274 11.0569,9.2754 10.5039,9.2754 C9.9509,9.2754 9.5039,8.8274 9.5039,8.2754 L9.5039,1.0004 C9.5039,0.4474 9.9509,0.0004 10.5039,0.0004 Z" id="Combined-Shape" fill="#F2EEE8" /></g></svg>,
  Lock: () => <svg viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="Desktop-HD-Copy" transform="translate(-556.000000, -349.000000)" fill="#1E1F22"><g id="Group-7" transform="translate(542.000000, 207.000000)"><g id="Group-3" transform="translate(0.000000, 131.000000)"><path d="M15.5063368,26.1676524 L26.2148461,26.1676524 C26.4002414,26.1676524 26.5682559,26.0904043 26.6899215,25.9687387 C26.8115872,25.847073 26.8888352,25.6790585 26.8888352,25.4936632 L26.8888352,19.1361497 C26.8888352,18.9526856 26.8115872,18.7846711 26.6899215,18.6610742 C26.5682559,18.5413398 26.4002414,18.4640917 26.2148461,18.4640917 L24.3280628,18.4640917 L17.3969825,18.4640917 L15.5063368,18.4640917 C15.3209415,18.4640917 15.1509958,18.5413398 15.0312613,18.6610742 C14.9076645,18.7846711 14.8323476,18.9526856 14.8323476,19.1361497 L14.8323476,25.4936632 C14.8323476,25.6790585 14.9076645,25.847073 15.0312613,25.9687387 C15.1509958,26.0904043 15.3209415,26.1676524 15.5063368,26.1676524 L15.5063368,26.1676524 Z M21.4988533,20.4532287 C21.3347013,20.2910078 21.1087508,20.1886542 20.8596258,20.1886542 C20.6124321,20.1886542 20.3864816,20.2910078 20.2223295,20.4532287 C20.0581774,20.6173808 19.9596862,20.8414001 19.9596862,21.090525 C19.9596862,21.2372963 19.9944478,21.3802052 20.0581774,21.5038021 C20.1257695,21.6312613 20.2203983,21.7413398 20.3362704,21.8243814 C20.4424864,21.9016295 20.5100785,22.0232951 20.5100785,22.1642728 L20.5100785,24.1128546 L20.5120097,24.1128546 L20.5100785,24.1128546 C20.5100785,24.1476162 20.5255281,24.1804466 20.5487025,24.203621 C20.5718769,24.2267954 20.6047073,24.242245 20.6394689,24.242245 L20.6394689,24.2403138 L20.6394689,24.242245 L21.0778515,24.242245 C21.1068196,24.242245 21.1357876,24.2306578 21.158962,24.213277 L21.168618,24.2016898 C21.1917924,24.1785154 21.207242,24.145685 21.207242,24.1128546 L21.2091732,22.1835848 C21.2014484,22.0464695 21.2632468,21.9112855 21.3829813,21.8263126 C21.5007846,21.743271 21.5954134,21.6312613 21.6630054,21.5038021 C21.7267351,21.3802052 21.7614967,21.2392275 21.7614967,21.0924562 C21.7614967,20.8433313 21.6610742,20.6173808 21.4988533,20.4532287 L21.4988533,20.4532287 Z M20.8596258,19.360169 C20.3826192,19.360169 19.9500302,19.5532891 19.6371756,19.8642124 C19.3243211,20.177067 19.1292698,20.6115872 19.1292698,21.090525 C19.1292698,21.378274 19.1968618,21.6467109 19.3204587,21.8823174 C19.4112251,22.0619191 19.534822,22.22414 19.6815932,22.3593241 L19.679662,24.1128546 C19.679662,24.3754979 19.7878093,24.616898 19.9616174,24.7887749 C20.1334943,24.9645142 20.3748944,25.0726614 20.6394689,25.0726614 L20.6394689,25.0745926 L20.6394689,25.0726614 L21.0778515,25.0726614 C21.3289077,25.0726614 21.5567894,24.9761014 21.7286663,24.8196741 L21.7557031,24.7907061 C21.9295112,24.6188292 22.0376584,24.3774291 22.0376584,24.1128546 L22.0376584,22.3593241 C22.1844297,22.22414 22.3080266,22.0638503 22.4007242,21.8842486 C22.5223899,21.6467109 22.5919131,21.378274 22.5919131,21.0924562 C22.5919131,20.6135184 22.3968618,20.1789982 22.0859384,19.8661436 C21.7730839,19.5532891 21.3404949,19.360169 20.8596258,19.360169 L20.8596258,19.360169 Z M23.9128546,17.6317441 L23.9128546,16.6429692 C23.9128546,15.8009656 23.571032,15.03621 23.0206397,14.4858177 C22.466385,13.9334943 21.7054919,13.5916717 20.861557,13.5916717 C20.0214846,13.5916717 19.256729,13.9334943 18.7063368,14.4858177 C18.1540133,15.03621 17.8121907,15.8009656 17.8121907,16.6429692 L17.8121907,17.6317441 L23.9128546,17.6317441 Z M16.9817743,17.6317441 L16.9817743,16.6429692 C16.9817743,15.5711527 17.4143633,14.5997586 18.1192517,13.8968014 C18.8202776,13.1938443 19.7916717,12.7612553 20.861557,12.7612553 C21.9333736,12.7612553 22.9047677,13.1938443 23.6077248,13.8968014 C24.310682,14.5997586 24.7452022,15.5711527 24.7452022,16.6429692 L24.7452022,17.6317441 L25.6799034,17.6317441 L25.6799034,16.6468316 C25.6799034,15.9979481 25.5485818,15.3761014 25.3129753,14.8083283 C25.0696439,14.219312 24.7104406,13.6882317 24.2662643,13.2440555 C23.8240193,12.7998793 23.2910078,12.4406759 22.7039228,12.1973446 C22.1361497,11.9617381 21.514303,11.8284852 20.8654194,11.8284852 C20.2146047,11.8284852 19.5946892,11.9598069 19.0269161,12.1954134 C18.4378998,12.4406759 17.9048884,12.7960169 17.4607121,13.2421243 C17.0165359,13.6843693 16.6592637,14.2173808 16.4140012,14.8044659 C16.1783947,15.372239 16.047073,15.9940857 16.0451418,16.6429692 L16.0451418,17.6317441 L16.9817743,17.6317441 Z M26.2148461,27 L15.5063368,27 C15.0911285,27 14.7145444,26.8300543 14.442245,26.557755 C14.1699457,26.2854556 14,25.9088715 14,25.4936632 L14,19.1361497 C14,18.7228727 14.1699457,18.3462885 14.442245,18.0739891 C14.6508147,17.8654194 14.9173205,17.7186482 15.2185878,17.6607121 L15.2185878,16.6429692 C15.2185878,15.8782136 15.3711527,15.1501509 15.6453832,14.4858177 C15.9331322,13.796379 16.3522028,13.1726011 16.8755582,12.653108 C17.3969825,12.1316838 18.0188292,11.7126132 18.708268,11.4267954 C19.3726011,11.1525649 20.1006639,11 20.8654194,11 C21.630175,11 22.3582378,11.1525649 23.0225709,11.4267954 C23.7100785,11.7164756 24.3338564,12.1355462 24.8552806,12.6569704 C25.3747737,13.1783947 25.7938443,13.8002414 26.0815932,14.4916113 C26.3558238,15.1559445 26.5083887,15.8840072 26.5083887,16.6468316 L26.5064575,17.6607121 C26.8057936,17.7186482 27.0722993,17.8654194 27.2789378,18.0739891 C27.5512372,18.3462885 27.7192517,18.7228727 27.7192517,19.1361497 L27.7192517,25.4936632 C27.7192517,25.9088715 27.5512372,26.2854556 27.2789378,26.557755 C27.0066385,26.8300543 26.6300543,27 26.2148461,27 L26.2148461,27 Z" id="Fill-1" /></g></g></g></g></svg>,
  Data: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.207 24"><g transform="translate(-1447.1 -1495.888)"><path className="a" d="M1459.744,1510.888a1,1,0,0,1-.488-.128l-11.645-6.523a1,1,0,0,1,0-1.744l11.561-6.477a1,1,0,0,1,.978,0l11.645,6.522a1,1,0,0,1,0,1.744l-11.561,6.478a1,1,0,0,1-.49.128Zm-9.6-7.523,9.6,5.376,9.516-5.331-9.6-5.376-9.516,5.331Z" /><path className="a" d="M1459.744,1515.388a1,1,0,0,1-.488-.128l-11.645-6.523a1,1,0,0,1,.977-1.744l11.156,6.248,11.072-6.2a1,1,0,1,1,.979,1.744l-11.561,6.478a1,1,0,0,1-.49.128Z" /><path className="a" d="M1459.744,1519.888a1,1,0,0,1-.488-.128l-11.645-6.523a1,1,0,0,1,.977-1.744l11.156,6.248,11.072-6.2a1,1,0,1,1,.979,1.744l-11.561,6.478a1,1,0,0,1-.49.128Z" /></g></svg>,
  Edit: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.002 18.003"><path d="M3,17.25V21H6.75L17.81,9.94,14.06,6.19ZM20.71,7.04a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75,1.83-1.83Z" transform="translate(-3 -2.998)" /></svg>,
  Error: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19"><path d="M1,21H23L12,2Zm12-3H11V16h2Zm0-4H11V10h2Z" transform="translate(-1 -2)" /></svg>,
  Search: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.49 17.49"><path d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z" transform="translate(-3 -3)" /></svg>,
  ArrowLeft: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z" transform="translate(-4 -4)" /></svg>,
  Visible: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.032 17.75"><defs></defs><path className="a" d="M5366.05,37.687a1,1,0,0,1,0-.622,12.18,12.18,0,0,1,22.927,0,.983.983,0,0,1,0,.622,12.181,12.181,0,0,1-22.927,0Zm2.008-.311a10.2,10.2,0,0,0,18.912,0,10.2,10.2,0,0,0-18.912,0Zm4.037,0a1,1,0,1,1,2,0,3.417,3.417,0,1,0,3.417-3.416,1,1,0,1,1,0-2,5.417,5.417,0,1,1-5.418,5.417Z" transform="translate(-5365.498 -28.5)" /></svg>,
  Invisible: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.031 17.75"><defs></defs><path className="a" d="M5366.051,37.687a.976.976,0,0,1,0-.622,11.475,11.475,0,0,1,4.083-5.654l-.458-.458a1,1,0,0,1,1.414-1.415l.792.792a12.457,12.457,0,0,1,5.633-1.33,11.913,11.913,0,0,1,11.465,8.065,1,1,0,0,1,0,.622,11.481,11.481,0,0,1-4.086,5.655l.456.456a1,1,0,1,1-1.413,1.413l-.79-.79a12.466,12.466,0,0,1-5.631,1.328A11.905,11.905,0,0,1,5366.051,37.687Zm2.006-.311a9.941,9.941,0,0,0,9.457,6.374,10.517,10.517,0,0,0,4.126-.833l-10.073-10.073A9.516,9.516,0,0,0,5368.057,37.376Zm15.4,4.533a9.516,9.516,0,0,0,3.512-4.533A9.941,9.941,0,0,0,5377.513,31a10.51,10.51,0,0,0-4.128.835Zm-11.364-4.535a1,1,0,1,1,2,0,3.421,3.421,0,0,0,3.419,3.418,1,1,0,0,1,0,2A5.425,5.425,0,0,1,5372.095,37.374Zm8.833,0a3.418,3.418,0,0,0-3.414-3.416,1,1,0,1,1,0-2,5.421,5.421,0,0,1,5.414,5.415,1,1,0,1,1-2,0Z" transform="translate(-5365.498 -28.5)" /></svg>,
  Filter: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12"><path d="M10,18h4V16H10ZM3,6V8H21V6Zm3,7H18V11H6Z" transform="translate(-3 -6)" /></svg>,
  Dropdown: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 5"><path d="M7,10l5,5,5-5Z" transform="translate(-7 -10)" /></svg>,
}