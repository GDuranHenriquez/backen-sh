const { Pedido, Usuario, Cliente } = require('../../db');

async function postNewOrder(req, res){
  try {
    const {fecha, descripcion, abono, idCliente, comentario, idVendedor} = req.body;
    const userInfo = req.user

    if(!userInfo){
      return res.status(400).json({error: 'Acceso denegado o usuario no provisto'});
    }

    if(!fecha || !descripcion || !abono){
      return res.status(404).json({code:404, messaje: 'Faltan datos obligatorios para registrar el pedido'})
    }

    let deuda = 0;
    let pendiente = 0;
    let totalAbono = 0;
    for(i=0; i < descripcion.length; i++){
      const item = descripcion[i]
      deuda = deuda + (item.cantidad * item.precio);
    }
    for(i=0; i < abono.length; i++){
      const item = abono[i]
      totalAbono = totalAbono + item.efectivoUsd + item.pagoDigitalUsd + (item.efectivoMlc / item.tasa) + (item.pagoDigitalMlc / item.tasa)
    }

    pendiente = deuda - abono

    const newPedido = {
      fecha: fecha,
      comentario: comentario ? comentario : null,
      descripcion: descripcion,
      deuda: deuda,
      pendiente: pendiente < 0 ? pendiente : 0,
      abono: abono,
      totalAbono: totalAbono,
      idCliente: idCliente,
      idUsuario: idVendedor,
    }

    const createPedido = await Pedido.create({...newPedido});
    
    return res.status(200).json({code: 200, data: createPedido, message: 'Pedido creado exitosamenete'});

  } catch (error) {
    return res.status(400).json({error:error.message});
  }
};

module.exports = postNewOrder;