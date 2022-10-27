import DataTable from '../multiuso/DataTable';

export default function ListaDeClientes() {
  const columns = [
    { field: 'id', headerName: 'id', flex: 0.5 },
    {
      field: 'descricao_produtos',
      headerName: 'descricao_produtos',
      flex: 1,
    },
  ];

  return (
    <DataTable
      titulo={'Produtos'}
      tituloDoBtnNovo={'Novo Produto'}
      oQueRenderizaComOBtnNovo={'FormDeProduto'}
      columns={columns}
      lerlinha={'/lerLinhaProdutos'}
      dados={'/lerProdutos'}
      renderAposClick={'FormDeProduto'}
    />
  );
}
