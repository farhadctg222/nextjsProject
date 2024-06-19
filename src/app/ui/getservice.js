export const getservice = async ()=>{
    const data = await fetch('Philosophy.json')
    const res = await data.json()
    console.log(res)
    return res
}