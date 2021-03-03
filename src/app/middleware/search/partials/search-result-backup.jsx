import React, { memo } from 'react';

import SortTableDataTable from '../../../../components/DataTableGrid/sortable';

import { connect } from "react-redux";

const SearchResult = memo(({getSearchText = ""}) => {
    const rowColumn = [
        {
            "id": "stock",
            "column": "stock",
            "order": 0,
            "style": {
                "minWidth": "120px"
            },
            "label": "Stok Kodu",
            "numeric": false,
            "string": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "ref",
            "column": "ref",
            "order": 1,
            "style": {
                "minWidth": "75px"
            },
            "label": "Ref No",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "product",
            "column": "product",
            "order": 2,
            "style": {
                "width": "100%"
            },
            "label": "Ürün Adı",
            "numeric": false,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "img",
            "column": "img",
            "order": 3,
            "style": {},
            "label": "◱",
            "numeric": false,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "str212",
            "column": "str212",
            "order": 4,
            "style": {},
            "label": "212",
            "numeric": false,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "str216",
            "column": "str216",
            "order": 5,
            "style": {},
            "label": "216",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "str54",
            "column": "str54",
            "order": 6,
            "style": {},
            "label": "54",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "spot",
            "column": "spot",
            "order": 7,
            "style": {},
            "label": "Spot",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "total",
            "column": "total",
            "order": 8,
            "style": {},
            "label": "Toplam",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "br",
            "column": "br",
            "order": 9,
            "style": {
                "minWidth": "70px"
            },
            "label": "Br.",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "price",
            "column": "price",
            "order": 10,
            "style": {
                "minWidth": "100px"
            },
            "label": "Liste Fiyatı",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "dontKdv",
            "column": "dontKdv",
            "order": 11,
            "style": {
                "minWidth": "85px"
            },
            "label": "KDV' siz",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "kdv",
            "column": "kdv",
            "order": 12,
            "style": {
                "minWidth": "85px"
            },
            "label": "KDV' li",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        },
        {
            "id": "iskonto",
            "column": "iskonto",
            "order": 13,
            "style": {},
            "label": "İskonto",
            "numeric": true,
            "disablePadding": true,
            "visible": true,
        }
    ];

    const createData = (key, stock, ref, product, img, str212, str216, str54, spot, total, br, price, dontKdv, kdv, iskonto, campaign, info, history) => {
        return {
            key, stock, ref, product, img, str212, str216, str54, spot, total, br, price, dontKdv, kdv, iskonto,
            campaign,
            info,
            history: [
                { date: '2020-01-05', customerId: '11091700', amount: 3 },
                { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
            ],
        };
    }
    
    const data = [];

    for (let index = 1; index < 50; index++) {
        const el = createData(
            index,
            "KRAFFTVOL KV5064 -" + index,
            "",
            "Fren Balata Temizleyici Sistem",
            "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            "#27ce10",
            `
                Üretici kısıtlaması: MANDO 
                Aşınma ikaz kontağı: Aşınma ikaz göstergesi için hazırlanmış değil 
                Uzunluk: 133,00 mm 
                Yükseklik: 52,30 mm 
                Kalınlık/Kuvvet: 18,80 mm Kontrol işareti:E9
            `,
            "");
        data.push(el);
    }

    const newData = data.filter(f => {
        const _text = 0 + f.product.toLowerCase().trim().replace(/\s/g, '');
        const _search = getSearchText.toLowerCase().trim().replace(/\s/g, '');

        if ( _text.search(_search) > 0)
            return f;
    });
    
    return (
        <section className="grid-scroll">
            <SortTableDataTable 
                title="Arama Sonuçları Listesi"
                rowColumn={rowColumn} 
                createData={createData} 
                data={newData}
                densePad={false}
                ContextMenuID="result"
                className="grid-table table-search"
            />
        </section>
    );
});

const mapStateToProps = state => {
    return {
        getSearchText: state.getSearchText,
    }
}

export default connect(mapStateToProps)(SearchResult);