'use strict'

module.exports.register = (pipeline, { playbook }) => {
    console.log(`Antora is building the ${playbook.site.title}.`)
    pipeline
        .on('contentClassified', ({ contentCatalog }) => {
            const name = 'session'
            const version = '2.6'
            contentCatalog.addFile({
                path: 'generated-path',
                src: {
                    component: name,
                    version,
                    module: 'ROOT',
                    family: 'page',
                    relative: 'generated.adoc',
                },
                contents:  Buffer.from('Hello FromPipelineExtension', 'utf8'),
            })
        })
}