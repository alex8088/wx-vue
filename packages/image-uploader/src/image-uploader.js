
import uuid from "../../core/uuid"
import weui from "../../core/weui"

export default {
  name: 'WxImageUploader',
  props: {
    url: String,
    maxUploadSize: {
      type: Number,
      default: 10 * 1024 * 1024
    },
    maxUploadCount: {
      type: Number,
      default: 10,
      validator(value) {
        return value >= 1
      }
    }
  },
  data() {
    return {
      uuid: uuid.rand(),
      count: 0
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let that = this
      let options = {
        url: this.url,
        auto: true,
        type: 'file',
        fileVal: 'file',
        compress: false,
        onBeforeQueued: function () {
          let msg
          if (['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].indexOf(this.type) < 0)
            msg = '图片类型不支持'
          if (this.size > that.maxUploadSize)
            msg = '图片太大'
          if ((that.count + 1) > that.maxUploadCount)
            msg = `最多只能上传${that.maxUploadCount}张图片`
          if (msg) {
            that.$emit('error', { message: msg })
            return false
          }
          ++that.count
        },
        onQueued: function () {
          that.$emit('queued', this)
        },
        onBeforeSend: function (data, headers) {
          that.$emit('beforeSend', data, headers)
        },
        onProgress: function (percent) {
          that.$emit('progress', percent)
        },
        onSuccess: function (ret) {
          that.$emit('success', ret)
        },
        onError: function (err) {
          that.$emit('error', { message: '上传失败', detail: err })
        }
      }
      weui.uploader(`#uploader-${this.uuid}`, options)
    },
    handleClick(e) {
      let target = e.target

      while (!target.classList.contains('weui-uploader__file') && target) {
        target = target.parentNode
      }
      if (!target) return

      let url = target.getAttribute('style') || ''
      let id = target.getAttribute('data-id')

      if (url) {
        url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '')
      }

      const that = this
      let _gallery = weui.gallery(url, {
        onDelete: () => {
          --that.count
          that.$emit('delete', id, target, _gallery)
        }
      })
    }
  },
  render() {
    return (
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <div class="weui-uploader" id={`uploader-${this.uuid}`}>
            <div class="weui-uploader__bd">
              <ul class="weui-uploader__files" onClick={this.handleClick}></ul>
              <div class="weui-uploader__input-box">
                <input class="weui-uploader__input" type="file" accept="image/*" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}