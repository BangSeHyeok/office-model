export const menuData = [
    { 
        categoriId: 1,
        title: '사업안내', 
        sub : [
            {
                subcategoriId: 1,
                subtitle:'사업개요',
                link:'/overview'
            },
            {
                subcategoriId: 2,
                subtitle:'브랜드스토리',
                link:'/info'
            }
        ],
        link: '/overview'
    },
    { 
        categoriId: 2,
        title: '상품안내', 
        sub : [
            {
                subcategoriId: 3,
                subtitle:'상품프리미엄',
                link:'/specialize'
            },
            {
                subcategoriId: 4,
                subtitle:'세제혜택',
                link:'/privilege'
            }
        ],
        link: '/specialize'
    },
    { 
        categoriId: 3,
        title: '입지조건', 
        sub : [
            {
                subcategoriId: 5,
                subtitle:'환경프리미엄',
                link:'/premium'
            },
            {
                subcategoriId: 6,
                subtitle:'교통환경',
                link:'/premium2'
            },
            {
                subcategoriId: 7,
                subtitle:'입지환경',
                link:'/premium3'
            }
        ],
        link: '/premium'
    },
    { 
        categoriId: 4,
        title: '사이버홍보관', 
        sub : [
            {
                subcategoriId: 8,
                subtitle:'e-모델하우스',
                link:'/vr360'
            },
            {
                subcategoriId: 9,
                subtitle:'유닛촬영컷',
                link:'/unitP'
            },
            {
                subcategoriId: 10,
                subtitle:'유닛보기',
                link:'/unit'
            },
            {
                subcategoriId: 11,
                subtitle:'상품CG',
                link:'/cg'
            },
        ],
        link: '/vr360'
    },
    { 
        categoriId: 5,
        title: '홍보센터', 
        sub : [
            {
                subcategoriId: 12,
                subtitle:'TVC&홍보영상',
                link:'/video'
            },
            {
                subcategoriId: 13,
                subtitle:'언론보도',
                link:'/news'
            }
        ],
        link: '/video'
    },
    { 
        categoriId: 6,
        title: '관심고객등록', 
        sub : [
            {
                subcategoriId: 14,
                subtitle:'관심고객등록',
                link:'/register'
            },
            {
                subcategoriId: 15,
                subtitle:'오시는길',
                link:'/location'
            }
        ],
        link: '/register'
    }
]