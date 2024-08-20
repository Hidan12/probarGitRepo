import { header } from "../../module/header.js";
import { pintarServicios, filtrarServicios } from "../../module/filter.js";
import { series } from "../../module/data.js";

let main = ()=>{
    const contHeader = document.getElementById("contHeader")
    header(contHeader, "disney+")
}
main()


pintarServicios(filtrarServicios(series,"Disney+"), "mainDisney", "Disney+")