
/**
 * Schedule datasource spec
 */

 export let defaultData: Object[] = [
  {
      Id: 1,
      Subject: 'Eletromagnetismo',
      description:'Aula para o curso de Engenharia',
      StartTime: new Date(2022, 1, 23,10, 0),
      EndTime: new Date(2022, 1, 23, 11, 0),
      IsAllDay: false,
      isReadonly: true,
      OwnerId: 3
  }, {
      Id: 2,
      Subject: 'Física',
      description:'Turma de Eletromecânica',
      StartTime: new Date(2022, 1, 24, 10, 0),
      EndTime: new Date(2022, 1, 24, 12, 30),
      IsAllDay: false,
      IsReadonly: true,
      OwnerId: 1

  },
];
