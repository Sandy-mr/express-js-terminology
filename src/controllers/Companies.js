const companies = require('../../companies.json');
const mongoose = require('mongoose');
const Company = require('../models/Company');

const Controller = {
  index: (request, response) => { // construir las quer
    Company
    .find()
    .exec()
    .then(data => {
      response
      .json({
        companies: data
      })
        .status(200)
      });
    },
    getById: (request, response) => {

      const { companyId } = request.params;

      response
        .json({
          data: Company
        })
        .status(200);
      },
      create: (request, response) => {
        const newCompany = new Company({
          _id: new mongoose.Types.ObjectId(),
          name: request.body.name
        });

        newCompany
          .save()
          .then(data => {
            response
            .json({
              data: newCompany
            })
            .status(201);
          })
          .catch(error => {
            response
              .json({
                message: error
              })
              .status(500)
          });
      },

// DeleteCompany: (request, response) => {
//   let companyId = request.params.companyId
//   Company.findById(companyId, (err) => {
//     if (err) response.status(500).send({message: `Error al borrar: ${err}`})
//
//     Company.remove(err => {
//       if(err) response.status(500).send({message: `Error al borrar: ${err}`})
//       response.status(200).send({message: 'la Compañia ha sido eliminada'})
//
//       })
//     })
//
//   }
    DeleteCompany: (request, response) => {

      const { companyId } = request.params;
      console.log(request);
      Company
        .find({
          _id: companyId
        })
        .remove(data => {
          response
            .json({
              message: "Removed id successfuly"
            })
            .status(200);
        });
    }

};

module.exports = Controller;
