// const formatCurrency = (current: number): string => {
//     return current.toLocaleString( 
//         'pt-br', 
//         {
//             style: 'currency', 
//             currency: 'BRL'
//         });
// };

const formatCurrency = (value:string) => {
    if (value != null || value != undefined) {
      return value
        .toString()
        .replace(/\D/g, '')
        .replace(/(\d)(\d{2})$/, '$1,$2')
        .replace(/(?=(\d{3})+(\D))\B/g, '.');
    }
    return;
  };

export default formatCurrency;