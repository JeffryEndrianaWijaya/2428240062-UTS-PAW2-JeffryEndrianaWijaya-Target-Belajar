import BelajarModel from "../model/belajar.model.js";
import { storebelajarschema, updatebelajarschema } from "../schemas/belajar.schema.js";
import { apiResponse, apiResponseValidation } from "../utils/response.js";

class Belajarcontroller {
  static async index(req, res) {
    const { search, sortBy = "createdAt", sort } = req.query; 
    const filter = {}; 

      if (search) { 
    filter.name = { 
      $regex: search, 
      $options: "i", 
    }; 
  } 
    const sortOption = { 
    [sortBy]: sort === "desc" ? -1 : 1, 
  }; 

    const listBelajar = await Belajarmodel.find();
    return apiResponse({ res, status: 200, data: listBelajar });
  }

  static async show(req, res) {
    const Belajarid = req.params.id;
    const Belajar = await Belajarmodel.findById(Belajarid);

    if (!Belajar) {
      return apiResponse({ res, status: 404, message: 'data Belajar tidak ditemukan' });
    }

    return apiResponse({ res, status: 200, data: belajar });
  }

  static async store(req, res) {
    const result = storebelajarschema.safeParse(req.body);
    if (!result.success) {
      return apiResponseValidation({
        res,
        errors: result.error
      });
    }
    
    const { topic, target_hours, completed_hours, deadline } = result.data;

    const newBelajar = await Belajarmodel.create({ topic, target_hours, completed_hours, deadline });
    return apiResponse({ res, status: 201, data: newBelajar });
  }

  static async update(req, res) {
    const Belajarid = req.params.id;
    const result = updatebelajarschema.safeParse(req.body);
    if (!result.success) {
      return apiResponseValidation({
        res,
        errors: result.error
      });
    }

    const { topic, target_hours, completed_hours, deadline } = result.data;

    const exists = await Belajarmodel.exists({ _id: Belajarid });
    if (!exists) {
      return apiResponse({ res, status: 404, message: 'data Belajar tidak ditemukan' });
    }

    const updateBelajar = await Belajarmodel.findOneAndUpdate(
      { _id: Belajarid },
      { topic, target_hours, completed_hours, deadline },
      { new: true }
    );

    return apiResponse({ res, status: 200, data: updateBelajar });
  }

  static async delete(req, res) {
    const Belajarid = req.params.id;

    const exists = await Belajarmodel.exists({ _id: Belajarid });
    if (!exists) {
      return apiResponse({ res, status: 404, message: 'data belajar tidak ditemukan' });
    }

    await Belajarmodel.findOneAndDelete({ _id: Belajarid });
    return apiResponse({ res, status: 200, message: 'data Belajar berhasil dihapus', data: null });
  }
}

export default Belajarcontroller;