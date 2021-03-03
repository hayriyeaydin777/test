const result = "Fren Balatası";

const columns =
    [
        {
            Header: `Arama Sonuçları: ${result}`,
            columns: [
                {
                    Header: '#',
                    accessor: 'id',
                },
                {
                    Header: 'Stok Kodu',
                    accessor: 'stock_code',
                },
                {
                    Header: 'Ref No',
                    accessor: 'refno',
                },
                {
                    Header: 'Marka',
                    accessor: 'brand',
                },
                {
                    Header: 'Ürün Adı',
                    accessor: 'product',
                },
                {
                    Header: 'img',
                    accessor: 'src',
                },
                {
                    Header: 'Br',
                    accessor: 'br',
                },
                {
                    Header: 'KDV\' siz maliyet',
                    accessor: 'kdv',
                },
                {
                    Header: 'İskonto',
                    accessor: 'iskonto',
                }
            ]
        }
    ];

export default columns;