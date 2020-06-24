// 重写 gulp-convert-css-var 通过参数指定css变量

let through = require('through2')
let csstree = require('css-tree')
let cssbeautify = require('cssbeautify')

function gulpProfixer(colorMap = {}){

    //创建一个 stream 通道，让每个文件通过
    let stream = through.obj(function(file, enc, cb){
        let contents = file.contents.toString()
        let ast = csstree.parse(contents)

        // 给所有通过变量赋值的颜色多加一个保底的颜色
        csstree.walk(ast, function(pnode, item, list) {
            if(pnode.type == "Declaration"){
                let varNames = []
                csstree.walk(pnode, function(node) {
                    if(node.type === 'Function' && node.name === 'var'){
                        // 取出颜色的变量名字
                        csstree.walk(node, (cnode) => {
                            if(cnode.type == 'Identifier'){
                                varNames.push(cnode.name)
                            }
                        })
                    }
                })

                // 证明有变量
                if(varNames.length){
                    let cssStyle = csstree.generate(pnode)

                    for(const name of varNames){
                        if(colorMap[name]){
                            let reg = new RegExp("var\\(\\s*" + name + "\\s*\\)")
                            cssStyle = cssStyle.replace(reg, colorMap[name])
                        }
                    }

                    let rule = {
                        prev: null,
                        next: null,
                        data: csstree.parse(cssStyle, {
                            context:'declaration'
                        })
                    }
                    list.insert(rule, item)
                }
            }
        })

        
        let css = csstree.generate(ast)
        let bu = Buffer.from(cssbeautify(css,{
            indent: '  ',
            openbrace: 'end-of-line',
            autosemicolon: true
        }))
        file.contents = bu
        
        // 给下一个插件提供文件
        this.push(file)

        // 告诉stream引擎，我们已经处理完成了这个文件
        cb()
    })

    return stream
}

module.exports = gulpProfixer