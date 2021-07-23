import { requestToLS } from '../api/localstorageRequest/requestToLS';


const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
const REMOVE_FROM_COMPARE = 'REMOVE_FROM_COMPARE';
const ADD_IN_COMPARE = 'ADD_IN_COMPARE';
const ADD_IN_CART = 'ADD_IN_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const initialState = {
    productsList: [
        {
            id: 1,
            productShortDescr: {
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000',
                name: 'Iphone 11pro',
                price: 1100,
                diagonal: 5.8,
                ram: '24gb',
                memory: '256gb',
                mainCamera: 12,
                cpu: 'A13 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_spacegrey__wl2ikwmwkaaq_large.jpg',
                        color: '#4e5851',
                        colorDescr: 'Midnight Green'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_silver__duh6mth02h26_large.jpg',
                        color: '#ebebe3',
                        colorDescr: 'Silver'
                    }, {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_spacegrey__wl2ikwmwkaaq_large.jpg',
                        color: '#535150',
                        colorDescr: 'Space grey'
                    }, {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_gold__efvklhguxioi_large.jpg',
                        color: '#fad7bd',
                        colorDescr: 'Gold'
                    }
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 2,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_max_midnightgreen__2mv1hjzk0aaq_large.jpg',
                name: 'Iphone 11 Pro Max',
                price: 1400,
                diagonal: 6.5,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A13 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_max_midnightgreen__2mv1hjzk0aaq_large.jpg',
                        color: '#4e5851',
                        colorDescr: 'Midnight Green'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_max_silver__e46ukus27doy_large.jpg',
                        color: '#ebebe3',
                        colorDescr: 'Silver'
                    }, {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_max_spacegrey__b9o4qxikuyj6_large.jpg',
                        color: '#535150',
                        colorDescr: 'Space Gray'
                    }, {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_pro_max_gold__db82yfjrj5ea_large.jpg',
                        color: '#fad7bd',
                        colorDescr: 'Gold'
                    }
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 3,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_purple__bo9qndh39jua_large.jpg',
                name: 'Iphone 11',
                price: 899,
                diagonal: 6.1,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A13',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_purple__bo9qndh39jua_large.jpg',
                        color: '#d1cdda',
                        colorDescr: 'Purple'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_yellow__d6x6i7rvgzcm_large.jpg',
                        color: '#ffe681',
                        colorDescr: 'Yellow'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_green__eif2xaj7p8ae_large.jpg',
                        color: '#aee1cd',
                        colorDescr: 'Green'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_black__c6scwcatnr42_large.jpg',
                        color: '#1f2020',
                        colorDescr: 'Black'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_white__ci16mire21iu_large.jpg',
                        color: '#f9f6ef',
                        colorDescr: 'White'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone11_red__cqj37j5p78mu_large.jpg',
                        color: '#ba0c2e',
                        colorDescr: 'PRODUCT red'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 4,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneSE_2nd_gen_black__bgx932d5eb7m_large.jpg',
                name: 'Iphone SE',
                price: 600,
                diagonal: 4.7,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A13',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneSE_2nd_gen_black__bgx932d5eb7m_large.jpg',
                        color: '#262529',
                        colorDescr: 'Black'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneSE_2nd_gen_red__bi2e8srr64eu_large.jpg',
                        color: '#b41325',
                        colorDescr: 'PRODUCT red'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneSE_2nd_gen_white__imh2qy47ikya_large.jpg',
                        color: '#f3f3f3',
                        colorDescr: 'White'
                    }
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 5,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_pro_max_pacific_blue__dtft61jvrs66_large.jpg',
                name: 'Iphone 12 Pro Max',
                price: 1600,
                diagonal: 6.7,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A14 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000',
                        color: '#2d4e5c',
                        colorDescr: 'Pacific Blue'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_pro_max_gold__bmjq5g8g7ir6_large.jpg',
                        color: '#fcebd3',
                        colorDescr: 'Gold'
                    }, {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_pro_max_graphite__gc1x19xq2w2m_large.jpg',
                        color: '#52514d',
                        colorDescr: 'Graphite',
                    }, {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_pro_max_silver__f56jb7vartiu_large.jpg',
                        color: '#e3e4df',
                        colorDescr: 'Silver'
                    }
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 6,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_pro_silver__gjsdhns00jee_large.jpg',
                name: 'Iphone 12 Pro',
                price: 1499,
                diagonal: 6.1,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A14 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_pro_silver__gjsdhns00jee_large.jpg',
                        color: '#e3e4df',
                        colorDescr: 'Silver'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_pro_graphite__c0wzbqymmh0m_large.jpg',
                        color: '#52514d',
                        colorDescr: 'Graphite'
                    }, {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_pro_gold__b1n00eahvvle_large.jpg',
                        color: '#fcebd3',
                        colorDescr: 'Gold'
                    }, {
                        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000',
                        color: '#2d4e5c',
                        colorDescr: 'Pacific Blue',
                    }
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 7,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_blue__xvr4yh6s2kye_large.jpg',
                name: 'Iphone 12',
                price: 1350,
                diagonal: 6.1,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A14 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_blue__xvr4yh6s2kye_large.jpg',
                        color: '#023b63',
                        colorDescr: 'Blue'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_black__dd4l4x5fmg66_large.jpg',
                        color: '#25212b',
                        colorDescr: 'Black'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_white__dopjg6qvioeq_large.jpg',
                        color: '#f6f2ef',
                        colorDescr: 'White'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_red__ei4kpyjd0a82_large.jpg',
                        color: '#d82e2e',
                        colorDescr: 'PRODUCT red'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_green__bspp82v10jzm_large.jpg',
                        color: '#d8efd5',
                        colorDescr: 'Green'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_purple__fk6kl32atgey_large.jpg',
                        color: '#b7afe6',
                        colorDescr: 'Purple'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 8,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_mini_white__cjf0p4y0zic2_large.jpg',
                name: 'Iphone 12 mini',
                price: 1250,
                diagonal: 5.4,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A14',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_mini_blue__gaq4np2el3ee_large.jpg',
                        color: '#023b63',
                        colorDescr: 'Blue'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_mini_black__32g32p2j7hem_large.jpg',
                        color: '#25212b',
                        colorDescr: 'Black'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_mini_white__cjf0p4y0zic2_large.jpg',
                        color: '#f6f2ef',
                        colorDescr: 'White'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_mini_red__ciijo3lq7c2u_large.jpg',
                        color: '#d82e2e',
                        colorDescr: 'PRODUCT red'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_mini_green__e0ixvw11fquu_large.jpg',
                        color: '#d8efd5',
                        colorDescr: 'Green'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone12_mini_purple__dbl1zcgg6z0i_large.jpg',
                        color: '#b7afe6',
                        colorDescr: 'Purple'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 9,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXSmax_gold__59yqcnhp90iq_large.jpg',
                name: 'Iphone XS Max',
                price: 999,
                diagonal: 6.5,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A12 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXSmax_silver__dfkul2e4w2ie_large.jpg',
                        color: '#e4e4e2',
                        colorDescr: 'Silver'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXSmax_spacegray__emd5lsh69is2_large.jpg',
                        color: '#262529',
                        colorDescr: 'Space Gray',
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXSmax_gold__59yqcnhp90iq_large.jpg',
                        color: '#fadcc2',
                        colorDescr: 'Gold'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 10,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXS_silver__evahklhdr7wy_large.jpg',
                name: 'Iphone XS',
                price: 899,
                diagonal: 5.8,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A12 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXS_silver__evahklhdr7wy_large.jpg',
                        color: '#e4e4e2',
                        colorDescr: 'Silver'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXS_spacegray__bgk6iplmcx1e_large.jpg',
                        color: '#262529',
                        colorDescr: 'Space Gray',
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXS_gold__dkfaur3bczma_large.jpg',
                        color: '#fadcc2',
                        colorDescr: 'Gold'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 11,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXR_yellow__hetot995r9ym_large.jpg',
                name: 'Iphone XR',
                price: 799,
                diagonal: 6.1,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A12 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXR_yellow__hetot995r9ym_large.jpg',
                        color: '#f9d045',
                        colorDescr: 'Yellow'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXR_coral__bqfx46xt1q6a_large.jpg',
                        color: '#ff6e5a',
                        colorDescr: 'Coral'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXR_red__c2tzprdbj9oy_large.jpg',
                        color: '#b41325',
                        colorDescr: 'PRODUCT red'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXR_black__cuaozz2we0om_large.jpg',
                        color: '#2e3034',
                        colorDescr: 'Black'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXR_white__bbtkgt2snsya_large.jpg',
                        color: '#f3f3f3',
                        colorDescr: 'White'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneXR_blue__474lh5elr2ae_large.jpg',
                        color: '#48aee6',
                        colorDescr: 'Blue'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }

        },
        {
            id: 12,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneX_silver__dselxl4fkgia_large.jpg',
                name: 'Iphone X',
                price: 579,
                diagonal: 5.8,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A11 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneX_silver__dselxl4fkgia_large.jpg',
                        color: '#e4e4e2',
                        colorDescr: 'Silver'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphoneX_spacegray__bbc3w8uonjbm_large.jpg',
                        color: '#262529',
                        colorDescr: 'Space Gray'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }
        },
        {
            id: 13,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone8plus_silver__ehkflwo09t8i_large.jpg',
                name: 'Iphone 8 Plus',
                price: 499,
                diagonal: 5.5,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A11 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone8plus_silver__ehkflwo09t8i_large.jpg',
                        color: '#e2e3e4',
                        colorDescr: 'Silver'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone8plus_spacegray__dqae66c6tiie_large.jpg',
                        color: '#272729',
                        colorDescr: 'Space Gray',
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone8plus_gold__e3dgl4hwbq82_large.jpg',
                        color: '#f7e8dd',
                        colorDescr: 'Gold'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }

        },
        {
            id: 14,
            productShortDescr: {
                image: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone8_silver__gcjcptpa4w2m_large.jpg',
                name: 'Iphone 8',
                price: 499,
                diagonal: 4.7,
                ram: '12gb',
                memory: '128gb',
                mainCamera: 12,
                cpu: 'A11 Bionic',
                isCompare: false,
                isInCart: false
            },
            productMoreDescription: {
                images: [
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone8_silver__gcjcptpa4w2m_large.jpg',
                        color: '#e2e3e4',
                        colorDescr: 'Silver'
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone8_spacegray__cx8nqjh9thua_large.jpg',
                        color: '#272729',
                        colorDescr: 'Space Gray',
                    },
                    {
                        img: 'https://www.apple.com/v/iphone/compare/t/images/overview/compare_iphone8_gold__fwuwopproru6_large.jpg',
                        color: '#f7e8dd',
                        colorDescr: 'Gold'
                    },
                ],
                description: 'The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.[7] The phone also features an audio zoom feature, which focuses audio on the area on which is being zoomed in, similar to the Pro model.[14] Both of the cameras support video, although only the primary lens has OIS. It supports portrait mode with six portrait lighting effects, depth control, and an advanced bokeh effect. The phone also has an automatic night mode allowing the camera to take brighter pictures with reduced noise in low-light environments. Also, a redesigned camera app adds new features such as a scroll wheel for choosing between the different lenses and a feature called "QuickTake".'
            }

        },
    ],
    compareProductsCount: 0,
    compareError: {
        status: false,
        title: null,
        text: null,
        type: null
    },
    cartProductsCount: 0,
    selectedProduct: 0
};
const productsReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                productsList: [ ...state.productsList, {
                    id: 2,
                    productShortDescr: {
                        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000',
                        name: 'Iphone 11',
                        price: 1000,
                        diagonal: action.data.productDiagonal,
                        ram: action.data.productRam,
                        memory: action.data.productMemory,
                        mainCamera: action.data.productCamera,
                        cpu: action.data.productCPU,
                        additionDate: {
                            date: 1,
                            month: 2,
                            year: 2021
                        },
                        isCompare: false,
                        isInCart: false
                    },
                    productMoreDescription: {}
                } ]
            };
        case ADD_IN_COMPARE:
            return {
                ...state,
                ...(state.compareProductsCount >= 5
                        ? {
                            compareError: {
                                ...state.compareError,
                                status: true,
                                text: 'A maximum of 5 items can be added to the comparison',
                                title: 'Warning',
                                type: 'warning'
                            }
                        }
                        : {
                            compareProductsCount: state.compareProductsCount + 1,
                            productsList: state.productsList.map( product => {
                                return product.id === action.id
                                    ? {
                                        ...product,
                                        productShortDescr: {
                                            ...product.productShortDescr,
                                            isCompare: true
                                        }
                                    }
                                    : product;
                            } )
                        }
                )
            };
        case REMOVE_FROM_COMPARE:
            return {
                ...state,
                compareProductsCount: state.compareProductsCount - 1,
                compareError: { ...state.compareError, status: false, text: null },
                productsList: state.productsList.map( product => {
                    return product.id === action.id
                        ? {
                            ...product,
                            productShortDescr: {
                                ...product.productShortDescr,
                                isCompare: false
                            }
                        }
                        : product;
                } )
            };
        case ADD_IN_CART:
            return {
                ...state,
                cartProductsCount: state.cartProductsCount + 1,
                productsList: state.productsList.map( product => {
                    return product.id === action.id
                        ? {
                            ...product,
                            productShortDescr: {
                                ...product.productShortDescr,
                                isInCart: true
                            }
                        }
                        : product;
                } )
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartProductsCount: state.cartProductsCount - 1,
                productsList: state.productsList.map( product => {
                    return product.id === action.id
                        ? {
                            ...product,
                            productShortDescr: {
                                ...product.productShortDescr,
                                isInCart: false
                            }
                        }
                        : product;
                } )
            };
        default:
            return state;
    }
};

const addNewProductAC = data => ({ type: ADD_NEW_PRODUCT, data });
const addInCompareAC = id => ({ type: ADD_IN_COMPARE, id });
const removeFromCompareAC = id => ({ type: REMOVE_FROM_COMPARE, id });
const addInCartAC = id => ({ type: ADD_IN_CART, id });
const removeFromCartAC = id => ({ type: REMOVE_FROM_CART, id });


export const addNewProduct = data => dispatch => {
    dispatch( addNewProductAC( data ) );
};
export const addInCompare = productId => dispatch => {
    dispatch( addInCompareAC( productId ) );
    requestToLS.addProductInCompare( productId );
};
export const removeFromCompare = productId => dispatch => {
    dispatch( removeFromCompareAC( productId ) );
    // requestToLS.removeProductFromCompare(productId)
};
export const addInCart = productId => async dispatch => {
    dispatch( addInCartAC( productId ) );
    // requestToLS.addProductInCart(productId);
};
export const removeFromCart = productId => dispatch => {
    dispatch( removeFromCartAC( productId ) );
    // requestToLS.removeProductFromCart(productId);
};


export default productsReducer;

