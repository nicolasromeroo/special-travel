
import { useEffect, useState } from "react"
import articulosDestacados from "../json/articulosDestacados.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(articulosDestacados)
            }, 1000)
        })

        promesa.then(response => {
            setItems(response)
        })
    }, [id])

    return(
        <div className="container-fluid p-5 wallpaperContainer">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer