import axios from "axios"

const upload = async (file:string | Blob) => {
    const data = new FormData()


    data.append ("file", file)
    data.append("upload_preset", "jhireFolder")

    try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/dylojnm8q/image/upload", data)

        const {url} = res.data
        return url
    } catch (err) {
        console.log(err)
    }

}

export default upload