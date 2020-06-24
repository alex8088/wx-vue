import ImageUploader from './src/image-uploader'

ImageUploader.install = function (Vue) {
  Vue.component(ImageUploader.name, ImageUploader)
}

export default ImageUploader