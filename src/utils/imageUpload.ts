/* eslint-disable @typescript-eslint/no-explicit-any */
export const imageUp= async(image:File)=>{
    const formData=new FormData();
    formData.append("image",image);
    const url = `https://api.imgbb.com/1/upload?key=f6c18b131d7c4a79ded8c56bd9d08c72`;
    const response = await fetch(url,{
        method:'POST',
        body:formData
    });
    const data=await response.json();
    return data
}