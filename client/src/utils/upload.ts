import axios from "axios"

export const uploadImg = async (file:string | Blob) => {
    const data = new FormData()


    data.append ("file", file)
    data.append("upload_preset", "jhireImages")

    try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/dylojnm8q/image/upload", data)

        const {url} = res.data
        return url
    } catch (err) {
        console.log(err)
    }

}

export const uploadCv = async (file:string | Blob) => {
    const data = new FormData()


    data.append ("file", file)
    data.append("upload_preset", "jhirePdf")

    try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/dylojnm8q/image/upload", data)
        const {url} = res.data
        return url
    } catch (err) {
        console.log(err)
    }

}
