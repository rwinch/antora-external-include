'use strict'

module.exports.register = (pipeline, { playbook }) => {

  pipeline
      .on('contentClassified', ({ contentCatalog }) => {
      console.log(`ROB ROB ROB Antora is building the ${playbook.site.title}.`)
        contentCatalog.addFile({ contents:  Buffer.from('Hello FromPipelineExtension', 'utf8'), src : { family: "example", basename: 'FromPipelineExtension' } })
      })
}
