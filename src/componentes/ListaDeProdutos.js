import DataTable from '../multiuso/DataTable_Clientes';

export default function ListaDeClientes() {
  const columns = [
    { field: 'id', headerName: 'id_produto', flex: 0.5 },
    { field: 'Desc_Produto', headerName: 'Desc_Produto', flex: 1 },
    { field: 'Fornec_Produto', headerName: 'Fornec_Produto', flex: 1 },
  ];

  return (
    <DataTable
      titulo={'Produtos'}
      tituloDoBtnNovo={'Novo Produto'}
      oQueRenderizaComOBtnNovo={'FormDeProduto'}
      columns={columns}
      lerlinha={'/lerLinhaProdutos'}
      dados={'lerProdutos'}
      renderAposClick={'FormDeProduto'}
    />
  );
}
