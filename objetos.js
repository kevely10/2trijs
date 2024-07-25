const cliente = {      
     nome: "joao" ,
     idade: 24
     email:"joao@larissa.com",
     telefone:[ "(41) 9999-0000"]
};

cliente.endereços =[  
{       
      rua:  "R.  Joseph Climber",
      numero: 13337
      apartamento: true,
      complemento: "Ap934" ,
} ,
] ;

cliente.endereços.push({
    rua: "R.Joseph climber",
    numero: 404,
    apartamento: false,

});

const listaApenasapartamentos = cliente.endereços.filter(
    (endereço) => endereço.apartamento === true
);
console.log(listaApenasApartamentos);





