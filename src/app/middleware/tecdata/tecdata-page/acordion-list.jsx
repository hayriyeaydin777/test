import React, { memo } from 'react';

import DropdownTreeSelect from 'react-dropdown-tree-select';


const AcordionMenu = memo(() => {
  const data = [
    {
      id: 1,
      label: 'Aksesuar',
      children: [],
    },
    {
      id: 2,
      label: 'Direksiyon',
      children: [],
    },
    {
      id: 3,
      label: 'Filtre',
      children: [
        {
          id: 4,
          label: 'Filtre 1',
          children: [],
        },
      ],
    },
    {
      id: 5,
      label: 'iç Donanım',
      children: [
        {
          id: 6,
          label: 'Kol Dayama',
          children: [
            {
              id: 7,
              label: 'Kol Dayama a',
            },
            {
              id: 8,
              label: 'Kol Dayama b',
            },
            {
              id: 9,
              label: 'Kol Dayama c',
            },
          ],
        },
        {
          id: 10,
          label: 'Kol Dayama 2',
          children: [
            {
              id: 11,
              label: 'Kol Dayama d',
            },
            {
              id: 12,
              label: 'Kol Dayama e',
            },
            {
              id: 13,
              label: 'Kol Dayama f',
            },
          ],
        },
      ],
    },
    {
      id: 14,
      label: 'Karoseri',
      children: [
        {
          id: 15,
          label: 'Karoseri 1',
        },
        {
          id: 16,
          label: 'Karoseri 2',
        },
      ],
    },
    {
      id: 17,
      label: 'Motor',
      children: [
        {
          id: 18,
          label: 'Motor 1',
          children: [
            {
              id: 19,
              label: 'Motor a',
            },
            {
              id: 20,
              label: 'Motor b',
            },
          ],
        },
      ],
    },
    {
      id: 21,
      label: 'Isıtma',
      children: [
        {
          id: 22,
          label: 'Havalandırma',
        },
      ],
    },
    {
      id: 23,
      label: 'Triger',
    },
    {
      id: 24,
      label: 'Motosiklet',
    },
  ];
  function searchPredicate(TreeNode, searchTerm) {
    searchTerm.slice(0,1).toUpperCase() + searchTerm.slice(1, searchTerm.length)
   /*  console.log(searchTerm); */
    return TreeNode.data.toLowerCase().indexOf(searchTerm) >= 0;
  }
  return (
    <>
      <p className="part-search-label">Montaj Grubu</p>
      <DropdownTreeSelect
        
        data={data}
        texts={{ placeholder: 'Tip Yazınız', noMatches: 'Sonuç Bulunamadı' }}
        showDropdown={'always'}
        clearSearchOnChange={true}
        searchPredicate={true}
      ></DropdownTreeSelect>
    </>
  );
});

export default AcordionMenu;
