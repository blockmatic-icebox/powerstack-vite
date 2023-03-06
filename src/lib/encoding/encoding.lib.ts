export const base64Encode = (obj: {}) => Buffer.from(JSON.stringify(obj)).toString('base64')

export const base64Decode = (str: string) => JSON.parse(Buffer.from(str, 'base64').toString())

export async function getBase64(file: File): Promise<any> {
  return await new Promise((resolve, rejects) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(reader?.result)
    }
    reader.onerror = function (error) {
      rejects(error)
    }
  })
}
