import { query } from "@/app/_db/db"

export  async function handler (req, res){
  if (req.methode === "GET"){
    const products = await query({
      query:"SELECT * ebrahim_DBlegiogloria",
      values: [],


    });
    res.status(200).json({name: "jebrahi"})





  }

}