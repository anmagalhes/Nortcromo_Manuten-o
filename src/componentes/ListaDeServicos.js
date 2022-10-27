import DataTable from '../multiuso/DataTable';

export default function ListaDeServicos() {
  const columns = [
    { field: 'id', headerName: 'id', flex: 0.5 },
    {
      field: 'grupo_servicos',
      headerName: 'grupo_servicos',
      flex: 1,
    },
    {
      field: 'sigla_servicos',
      headerName: 'sigla_servicos',
      flex: 1,
    },
  ];

  return (
    <DataTable
      titulo={'Serviços'}
      tituloDoBtnNovo={'Novo Serviço'}
      oQueRenderizaComOBtnNovo={'FormDeServico'}
      columns={columns}
      lerlinha={'/lerLinhaServicos'}
      dados={'/lerServicos'}
      renderAposClick={'FormDeServico'}
    />
  );
}
