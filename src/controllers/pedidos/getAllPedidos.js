const { Pedido, Usuario, Cliente } = require('../../db');

async function getAllOrders(req, res){
  try {
    let orders;
    const {nRegistros, nPages} = req.params;
    const userInfo = req.user

    if(!userInfo){
      return res.status(400).json({error: 'Acceso denegado usuario no provisto'});
    }

    const levelAuthAll = ['root', 'admin', 'user']
  
    if(levelAuthAll.includes(userInfo.level) ){
      orders = await Pedido.findAll({
        where: {
          estado: ['nuevo', 'proceso'] 
        },
        attributes: { 
          exclude: ['clientePedido', 'usuarioPedido'] 
        },
        include:[
          {
            model: Usuario,
            as: "pedido_usuario",
            attributes: { exclude: ['password', 'delete', 'level', 'direccion'] }
          },
          {
            model: Cliente,
            as: "pedido_cliente"
          }
        ],
        limit: nRegistros,
        offset: (nPages - 1) * nRegistros,
        ption: { raw: true }
      });
    }else{
      orders = await Pedido.findAll({
        where:{
          idUsuario: userInfo.id,
          estado: ['nuevo', 'proceso']
        },
        attributes: { 
          exclude: ['clientePedido', 'usuarioPedido'] 
        },
        include:[
          {
            model: Usuario,
            as: "pedido_usuario",
            attributes: { exclude: ['password', 'delete', 'level', 'direccion'] }
          },
          {
            model: Cliente,
            as: "pedido_cliente"
          }
        ],
        limit: nRegistros,
        offset: (nPages - 1) * nRegistros,
        option: { raw: true }
      })
    }    
    
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(400).json({error:error.message});
  }
};

module.exports = getAllOrders;