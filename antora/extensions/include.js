'use strict'

module.exports.register = (pipeline, { playbook }) => {

    console.log(`ROB ROB ROB Antora is building the ${playbook.site.title}.`)
    pipeline
      .on('contentClassified', ({ contentCatalog }) => {
          const pageId = { component: "session", version: '2.6', module: 'ROOT', relative: "generated", path: 'generated-path', family: 'page' }
          const name = 'session'
          const version = '2.6'
          const title = 'The Component'
          const url = '/session/2.6/generated.html'
          const descriptor = { title, startPage: true }
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
//        contentCatalog.addFile({
//            asciidoc: { xreftext: "xreftext"},
//            site: playbook.site,
//            out: undefined,
//            pub : { url: 'https://generated.example.com' },
//            src: { pageId },
//            contents:  Buffer.from('Hello FromPipelineExtension', 'utf8'),
//        })
      })
}
